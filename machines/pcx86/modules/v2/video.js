/**
 * @fileoverview Implements the PCx86 Video component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import ChipSet from "./chipset.js";
import { Controller } from "./bus.js";
import Keyboardx86 from "./keyboard.js";
import Memoryx86 from "./memory.js";
import MESSAGE from "./message.js";
import Mouse from "./mouse.js";
import CharSet from "./charset.js";
import Component from "../../../modules/v2/component.js";
import DumpAPI from "../../../modules/v2/dumpapi.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, DEBUGGER, MAXDEBUG, globals } from "./defines.js";

/**
 * MDA/CGA Support
 * ---------------
 *
 * Since there's a lot of similarity between the MDA and CGA (eg, their text-mode video buffer
 * format, and their use of the 6845 CRT controller), since the MDA ROM contains the fonts used
 * by both devices, and since the same ROM BIOS supports both (in fact, the BIOS indiscriminately
 * initializes both, regardless which is actually installed), this same component emulates both
 * devices.
 *
 * When no model is specified, this component supports the ability to dynamically switch between
 * MDA and CGA emulation, by simply toggling the SW1 motherboard "monitor type" switch settings
 * and resetting the machine.  In that model-less configuration, we install I/O port handlers for
 * both MDA and CGA cards, regardless which monitor type is initially selected.
 *
 * To simulate an IBM PC containing both an MDA and CGA (ie, a "dual display" system), the machine
 * configuration simply defines two video components, one with model "mda" and the other with model
 * "cga", resulting in two displays; setting a specific model forces each instance of this component
 * to register only those I/O ports belonging to that model.
 *
 * In a single-display system, dynamically switching cards (ie, between MDA and CGA) creates some
 * visual challenges.  For one, the MDA prefers a native screen size of 720x350, as it supports only
 * one video mode, 80x25, with a 9x14 cell size.  The CGA, on the other hand, has an 8x8 cell size,
 * so when using an MDA-size screen, an 80x25 CGA screen will end up with 40-pixel borders on the
 * left and right, and 75-pixel borders on the top and bottom.  The result is a rather tiny CGA font
 * surrounded by lots of wasted space, so it's best to turn on font scaling (see the "scale" property)
 * and go with a larger screen size of, say, 960x400 (50% larger in width, 100% larger in height).
 *
 * I've also added support for font-doubling in createFont().  We use the 8x8 font for 80-column
 * modes and the "doubled" 16x16 font for 40-column modes OR whenever the screen is large enough
 * to use the 16x16 font, since font rendering without scaling provides the sharpest results.
 * In fact, there's special logic in setDimensions() to ignore fScaleFont in certain cases (eg,
 * 40-column modes, to improve sharpness and avoid stretching the font beyond readability).
 *
 * Graphics modes, on the other hand, are always scaled to the screen size.  Pixels are captured
 * in an off-screen buffer, which is then drawn to match the size of the virtual screen.
 *
 * TODO: Whenever there are borders, they should be filled with the CGA's overscan colors.  However,
 * in the case of graphics modes (and text modes whenever font scaling is enabled), we don't reserve
 * any space for borders, so if borders are important, explicit border support will be required.
 *
 * EGA Support
 * -----------
 *
 * EGA support piggy-backs on the existing MDA/CGA support.  All the existing MDA/CGA port handlers
 * now refer to either cardMono or cardColor (instead of directly to cardMDA or cardCGA), enabling
 * the handlers to be redirected to cardMDA, cardCGA or cardEGA as appropriate.
 *
 * Note that an MDA card supported only a Monochrome Display and a CGA card supported only a Color
 * Display (well, OK, *or* a TV monitor, which we don't currently support), but the EGA is much
 * more flexible: the Enhanced Color Display was the preferred display, but the EGA also supported
 * older displays; a Color Display on EGA wasn't ideal (same low resolutions but with more colors),
 * but the EGA also brought high-resolution graphics to Monochrome displays, which was nice.  Anyway,
 * while all those EGA/monitor combinations will be nice to support, our virtual display support
 * will focus initially on the Enhanced Color Display.
 *
 * TODO: Add support for jumpers P1 and P3 (see EGA TechRef p.85).  P1 selects either 5-color-output
 * for a CGA monitor or 6-color-output for an EGA monitor; we would presumably use this only to
 * control certain assumptions about the virtual display's capabilities (ie, Color Display vs. Enhanced
 * Color Display).  P3 can switch all the I/O ports from 0x3nn to 0x2nn; the default is 0x3nn, and
 * that's the only port range the EGA ROM supports as well.
 *
 * For quick reference, IBM EGA register values for the standard EGA modes, from pages 63-68 of the
 * "IBM Enhanced Graphics Adapter" (http://minuszerodegrees.net/oa/OA - IBM Enhanced Graphics Adapter.pdf).
 *
 * WARNING: Some of these value are not programmed exactly as-is; for example, the CURSCANB values are
 * adjusted +1 by the ROM BIOS in most cases, due to an EGA idiosyncrasy that IBM may not have intended.
 *
 *      INT 0x10 Mode Requested:    00  01  02  03  04  05  06  07  0D  0E  0F  10  0F^ 10^ 00* 01* 02* 03*
 *
 *      BIOSMODE:                   01  01  03  03  04  04  06  07  0D  0E  0F  10  0F  10  01  01  03  03
 *      CRTC[0x00]: HTOTAL          37  37  70  70  37  37  70  60  37  70  60  5B  60  5B  2D  2D  5B  5B
 *      CRTC[0x01]: HDEND           27  27  4F  4F  27  27  4F  4F  27  4F  4F  4F  4F  4F  27  27  4F  4F
 *      CRTC[0x02]: HBSTART         2D  2D  5C  %C  2D  2D  59  56  2D  56  56  53  56  53  2B  2B  53  53
 *      CRTC[0x03]: HBEND           37  37  2F  2F  37  37  2D  3A  37  2D  1A  17  3A  37  2D  2D  37  37
 *      CRTC[0x04]: HRSTART         31  31  5F  5F  30  30  5E  51  30  5E  50  50  50  52  28  28  51  51
 *      CRTC[0x05]: HREND           15  15  07  07  14  14  06  60  14  06  E0  BA  60  00  6D  6D  5B  5B
 *      CRTC[0x06]: VTOTAL          04  04  04  04  04  04  04  70  04  04  70  6C  70  6C  6C  6C  6C  6C
 *      CRTC[0x07]: OVERFLOW        11  11  11  11  11  11  11  1F  11  11  1F  1F  1F  1F  1F  1F  1F  1F
 *      CRTC[0x08]: PRESCAN         00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00
 *      CRTC[0x09]: MAXSCAN         07  07  07  07  01  01  01  0D  00  00  00  00  00  00  0D  0D  0D  0D
 *      CRTC[0x0A]: CURSCAN         06  06  06  06  00  00  00  0B  00  00  00  00  00  00  0B  0B  0B  0B
 *      CRTC[0x0B]: CURSCANB        07  07  07  07  00  00  00  0C  00  00  00  00  00  00  0C  0C  0C  0C
 *      CRTC[0x0C]: STARTHI         --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --
 *      CRTC[0x0D]: STARTLO         --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --
 *      CRTC[0x0E]: CURSORHI        --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --
 *      CRTC[0x0F]: CURSORLO        --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --
 *      CRTC[0x10]: VRSTART         E1  E1  E1  E1  E1  E1  E0  5E  E1  E0  5E  5E  5E  5E  5E  5E  5E  5E
 *      CRTC[0x11]: VREND           24  24  24  24  24  24  23  2E  24  23  2E  2B  2E  2B  2B  2B  2B  2B
 *      CRTC[0x12]: VDEND           C7  C7  C7  C7  C7  C7  C7  5D  C7  C7  5D  5D  5D  5D  5D  5D  5D  5D
 *      CRTC[0x13]: OFFSET          14  14  28  28  14  14  28  28  14  28  14  14  28  28  14  14  28  28
 *      CRTC[0x14]: UNDERLINE       08  08  08  08  00  00  00  0D  00  00  0D  0F  0D  0F  0F  0F  0F  0F
 *      CRTC[0x15]: VBSTART         E0  E0  E0  E0  E0  E0  DF  5E  E0  DF  5E  5F  5E  5F  5E  5E  5E  5E
 *      CRTC[0x16]: VBEND           F0  F0  F0  F0  F0  F0  EF  6E  F0  EF  6E  0A  6E  0A  0A  0A  0A  0A
 *      CRTC[0x17]: MODECTRL        A3  A3  A3  A3  A2  A2  C2  A3  E3  E3  8B  8B  E3  E3  A3  A3  A3  A3
 *      CRTC[0x18]: LINECOMP        FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF
 *       GRC[0x00]: SRESET          00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00
 *       GRC[0x01]: ESRESET         00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00
 *       GRC[0x02]: COLORCOMP       00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00
 *       GRC[0x03]: DATAROT         00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00
 *       GRC[0x04]: READMAP         00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00
 *       GRC[0x05]: MODE            10  10  10  10  30  30  00  10  00  00  10  10  00  00  10  10  10  10
 *       GRC[0x06]: MISC            0E  0E  0E  0E  0F  0F  0D  0A  05  05  07  07  05  05  0E  0E  0E  0E
 *       GRC[0x07]: COLORDC         00  00  00  00  00  00  00  00  0F  0F  0F  0F  0F  0F  00  00  00  00
 *       GRC[0x08]: BITMASK         FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF
 *       SEQ[0x00]: RESET           03  03  03  03  03  03  03  03  03  03  03  03  03  03  03  03  03  03
 *       SEQ[0x01]: CLKMODE         0B  0B  01  01  0B  0B  01  00  0B  01  05  05  01  01  0B  0B  01  01
 *       SEQ[0x02]: MAPMASK         03  03  03  03  03  03  01  03  0F  0F  0F  0F  0F  0F  03  03  03  03
 *       SEQ[0x03]: CHARMAP         00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00
 *       SEQ[0x04]: MEMMODE         03  03  03  03  02  02  06  03  06  06  00  00  06  06  03  03  03  03
 *       ATC[0x00]: PAL00           00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00
 *       ATC[0x01]: PAL01           01  01  01  01  13  13  17  08  01  01  08  01  08  01  01  01  01  01
 *       ATC[0x02]: PAL02           02  02  02  02  15  15  17  08  02  02  00  00  00  02  02  02  02  02
 *       ATC[0x03]: PAL03           03  03  03  03  17  17  17  08  03  03  00  00  00  03  03  03  03  03
 *       ATC[0x04]: PAL04           04  04  04  04  02  02  17  08  04  04  18  04  18  04  04  04  04  04
 *       ATC[0x05]: PAL05           05  05  05  05  04  04  17  08  05  05  18  07  18  05  05  05  05  05
 *       ATC[0x06]: PAL06           06  06  06  06  06  06  17  08  06  06  00  00  00  06  14  14  14  14
 *       ATC[0x07]: PAL07           07  07  07  07  07  07  17  08  07  07  00  00  00  07  07  07  07  07
 *       ATC[0x08]: PAL08           10  10  10  10  10  10  17  10  10  10  00  00  00  38  38  38  38  38
 *       ATC[0x09]: PAL09           11  11  11  11  11  11  17  18  11  11  08  01  08  39  39  39  39  39
 *       ATC[0x0A]: PAL0A           12  12  12  12  12  12  17  18  12  12  00  00  00  3A  3A  3A  3A  3A
 *       ATC[0x0B]: PAL0B           13  13  13  13  13  13  17  18  13  13  00  00  00  3B  3B  3B  3B  3B
 *       ATC[0x0C]: PAL0C           14  14  14  14  14  14  17  18  14  14  00  04  00  3C  3C  3C  3C  3C
 *       ATC[0x0D]: PAL0D           15  15  15  15  15  15  17  18  15  15  18  07  18  3D  3D  3D  3D  3D
 *       ATC[0x0E]: PAL0E           16  16  16  16  16  16  17  18  16  16  00  00  00  3E  3E  3E  3E  3E
 *       ATC[0x0F]: PAL0F           17  17  17  17  17  17  18  17  17  00  00  00  3F  3F  3F  3F  3F  3F
 *       ATC[0x10]: MODE            08  08  08  08  01  01  01  0E  01  01  0B  0B  0B  01  08  08  08  08
 *       ATC[0x11]: OVERSCAN        00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00
 *       ATC[0x12]: PLANES          0F  0F  0F  0F  03  03  01  0F  0F  0F  05  05  05  0F  0F  0F  0F  0F
 *       ATC[0x13]: HPAN            00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00  00
 *
 * VGA Support
 * -----------
 *
 * VGA support further piggy-backs on the existing EGA support, by adding the extra registers, I/O port
 * handlers, etc, that the VGA requires; any differences in registers common to both EGA and VGA are handled on
 * a case-by-case basis, usually according to the Videox86.CARD value stored in nCard.
 *
 * More will be said here about PCjs VGA support later.  But first, a word from IBM: "Video Graphics Array [VGA]
 * Programming Considerations":
 *
 *      Certain internal timings must be guaranteed by the user, in order to have the CRTC perform properly.
 *      This is due to the physical design of the chip. These timings can be guaranteed by ensuring that the
 *      rules listed below are followed when programming the CRTC.
 *
 *           1. The Horizontal Total [HTOTAL] register (R0) must be greater than or equal to a value of
 *              25 decimal.
 *
 *           2. The minimum positive pulse width of the HSYNC output must be four character clock units.
 *
 *           3. Register R5, Horizontal Sync End [HREND], must be programmed such that the HSYNC
 *              output goes to a logic 0 a minimum of one character clock time before the 'horizontal display enable'
 *              signal goes to a logical 1.
 *
 *           4. Register R16, Vsync Start [VRSTART], must be a minimum of one horizontal scan line greater
 *              than register R18 [VDEND].  Register R18 defines where the 'vertical display enable' signal ends.
 *
 *     When bit 5 of the Attribute Mode Control register equals 1, a successful line compare (see Line Compare
 *     [LINECOMP] register) in the CRT Controller forces the output of the PEL Panning register to 0's until Vsync
 *     occurs.  When Vsync occurs, the output returns to the programmed value.  This allows the portion of the screen
 *     indicated by the Line Compare register to be operated on by the PEL Panning register.
 *
 *     A write to the Character Map Select register becomes valid on the next whole character line.  No deformed
 *     characters are displayed by changing character generators in the middle of a character scan line.
 *
 *     For 256-color 320 x 200 graphics mode hex 13, the attribute controller is configured so that the 8-bit attribute
 *     stored in video memory for each PEL becomes the 8-bit address (P0 - P7) into the integrated DAC.  The user should
 *     not modify the contents of the internal Palette registers when using this mode.
 *
 *     The following sequence should be followed when accessing any of the Attribute Data registers pointed to by the
 *     Attribute Index register:
 *
 *           1. Disable interrupts
 *           2. Reset read/write flip/flop
 *           3. Write to Index register
 *           4. Read from or write to a data register
 *           5. Enable interrupts
 *
 *      The Color Select register in the Attribute Controller section may be used to rapidly switch between sets of colors
 *      in the video DAC.  When bit 7 of the Attribute Mode Control register equals 0, the 8-bit color value presented to the
 *      video DAC is composed of 6 bits from the internal Palette registers and bits 2 and 3 from the Color Select register.
 *      When bit 7 of the Attribute Mode Control register equals 1, the 8-bit color value presented to the video DAC is
 *      composed of the lower four bits from the internal Palette registers and the four bits in the Color Select register.
 *      By changing the value in the Color Select register, software rapidly switches between sets of colors in the video DAC.
 *      Note that BIOS does not support multiple sets of colors in the video DAC.  The user must load these colors if this
 *      function is to be used.  Also see the Attribute Controller block diagram on page 4-26.  Note that the above discussion
 *      applies to all modes except 256 Color Graphics mode.  In this mode the Color Select register is not used to switch
 *      between sets of colors.
 *
 *      An application that saves the "Video State" must store the 4 bytes of information contained in the system microprocessor
 *      latches in the graphics controller subsection. These latches are loaded with 32 bits from video memory (8 bits per map)
 *      each time the system microprocessor does a read from video memory.  The application needs to:
 *
 *           1. Use write mode 1 to write the values in the latches to a location in video memory that is not part of
 *              the display buffer.  The last location in the address range is a good choice.
 *
 *           2. Save the values of the latches by reading them back from video memory.
 *
 *           Note: If in a chain 4 or odd/even mode, it will be necessary to reconfigure the memory organization as four
 *           sequential maps prior to performing the sequence above.  BIOS provides support for completely saving and
 *           restoring video state.  See the IBM Personal System/2 and Personal Computer BIOS Interface Technical Reference
 *           for more information.
 *
 *      The description of the Horizontal PEL Panning register includes a figure showing the number of PELs shifted left
 *      for each valid value of the PEL Panning register and each valid video mode.  Further panning beyond that shown in
 *      the figure may be accomplished by changing the start address in the CRT Controller registers, Start Address High
 *      and Start Address Low.  The sequence involved in further panning would be as follows:
 *
 *           1. Use the PEL Panning register to shift the maximum number of bits to the left. See Figure 4-103 on page
 *              4-106 for the appropriate values.
 *
 *           2. Increment the start address.
 *
 *           3. If you are not using Modes 0 + , 1 + , 2 + , 3 + ,7, or7 + , set the PEL Panning register to 0.  If you
 *              are using these modes, set the PEL Panning register to 8.  The screen will now be shifted one PEL left
 *              of the position it was in at the end of step 1.  Step 1 through Step 3 may be repeated as desired.
 *
 *      The Line Compare register (CRTC register hex 18) should be programmed with even values in 200 line modes when
 *      used in split screen applications that scroll a second screen on top of a first screen.  This is a requirement
 *      imposed by the scan doubling logic in the CRTC.
 *
 *      If the Cursor Start register (CRTC register hex 0A) is programmed with a value greater than that in the Cursor End
 *      register (CRTC register hex 0B), then no cursor is displayed.  A split cursor is not possible on the VGA.
 *
 *      In 8-dot character modes, the underline attribute produces a solid line across adjacent characters, as in the IBM
 *      Color/Graphics Monitor Adapter, Monochrome Display Adapter and the Enhanced Graphics Adapter.  In 9-dot modes, the
 *      underline across adjacent characters is dashed, as in the IBM 327X display terminals.  In 9-dot modes, the line
 *      graphics characters (C0 - DF character codes) have solid underlines.
 *
 *      For compatibility with the IBM Enhanced Graphics Adapter (EGA), the internal VGA palette is programmed the same
 *      as the EGA.  The video DAC is programmed by BIOS so that the compatible values in the internal VGA palette produce
 *      a color compatible with what was produced by EGA.  Mode hex 13 (256 colors) is programmed so that the first 16
 *      locations in the DAC produce compatible colors.
 *
 *      Summing: When BIOS is used to load the video DAC palette for a color mode and a monochrome display is connected
 *      to the system unit, the color palette is changed.  The colors are summed to produce shades of gray that allow
 *      color applications to produce a readable screen.
 *
 *      There are 4 bits that should not be modified unless the sequencer is reset by setting bit 1 of the Reset register
 *      to 0.  These bits are:
 *
 *           • Bit 3, or bit 0 of the Clocking Mode register
 *           • Bit 3, or bit 2 of the Miscellaneous Output register
 *
 * Also, for quick reference, IBM VGA register values for the standard VGA modes (from http://www.pcjs.org/blog/2015/06/01/):
 *
 *      INT 0x10 Mode Requested:    00  01  02  03  04  05  06  0D  0E  10  12  13
 *
 *      BIOSMODE:                   01  01  03  03  04  04  06  0D  0E  10  12  13
 *      CRTC[0x00]: HTOTAL          2D  2D  5F  5F  2D  2D  5F  2D  5F  5F  5F  5F
 *      CRTC[0x01]: HDEND           27  27  4F  4F  27  27  4F  27  4F  4F  4F  4F
 *      CRTC[0x02]: HBSTART         28  28  50  50  28  28  50  28  50  50  50  50
 *      CRTC[0x03]: HBEND           90  90  82  82  90  90  82  90  82  82  82  82
 *      CRTC[0x04]: HRSTART         2B  2B  55  55  2B  2B  54  2B  54  54  54  54
 *      CRTC[0x05]: HREND           A0  A0  81  81  80  80  80  80  80  80  80  80
 *      CRTC[0x06]: VTOTAL          BF  BF  BF  BF  BF  BF  BF  BF  BF  BF  0B  BF
 *      CRTC[0x07]: OVERFLOW        1F  1F  1F  1F  1F  1F  1F  1F  1F  1F  3E  1F
 *      CRTC[0x08]: PRESCAN         00  00  00  00  00  00  00  00  00  00  00  00
 *      CRTC[0x09]: MAXSCAN         4F  4F  4F  4F  C1  C1  C1  C0  C0  40  40  41
 *      CRTC[0x0A]: CURSCAN         0D  0D  0D  0D  00  00  00  00  00  00  00  00
 *      CRTC[0x0B]: CURSCANB        0E  0E  0E  0E  00  00  00  00  00  00  00  00
 *      CRTC[0x0C]: STARTHI         00  00  00  00  00  00  00  00  00  00  00  00
 *      CRTC[0x0D]: STARTLO         00  00  00  00  00  00  00  00  00  00  00  00
 *      CRTC[0x0E]: CURSORHI        01  01  01  01  01  01  01  01  01  01  01  00
 *      CRTC[0x0F]: CURSORLO        19  19  41  41  19  19  41  19  41  41  E1  A2
 *      CRTC[0x10]: VRSTART         9C  9C  9C  9C  9C  9C  9C  9C  9C  83  EA  9C
 *      CRTC[0x11]: VREND           8E  8E  8E  8E  8E  8E  8E  8E  8E  85  8C  8E
 *      CRTC[0x12]: VDEND           8F  8F  8F  8F  8F  8F  8F  8F  8F  5D  DF  8F
 *      CRTC[0x13]: OFFSET          14  14  28  28  14  14  28  14  28  28  28  28
 *      CRTC[0x14]: UNDERLINE       1F  1F  1F  1F  00  00  00  00  00  0F  00  40
 *      CRTC[0x15]: VBSTART         96  96  96  96  96  96  96  96  96  63  E7  96
 *      CRTC[0x16]: VBEND           B9  B9  B9  B9  B9  B9  B9  B9  B9  BA  04  B9
 *      CRTC[0x17]: MODECTRL        A3  A3  A3  A3  A2  A2  C2  E3  E3  E3  E3  A3
 *      CRTC[0x18]: LINECOMP        FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF
 *       GRC[0x00]: SRESET          00  00  00  00  00  00  00  00  00  00  00  00
 *       GRC[0x01]: ESRESET         00  00  00  00  00  00  00  00  00  00  00  00
 *       GRC[0x02]: COLORCOMP       00  00  00  00  00  00  00  00  00  00  00  00
 *       GRC[0x03]: DATAROT         00  00  00  00  00  00  00  00  00  00  00  00
 *       GRC[0x04]: READMAP         00  00  00  00  00  00  00  00  00  00  00  00
 *       GRC[0x05]: MODE            10  10  10  10  30  30  00  00  00  00  00  40
 *       GRC[0x06]: MISC            0E  0E  0E  0E  0F  0F  0D  05  05  05  05  05
 *       GRC[0x07]: COLORDC         00  00  00  00  00  00  00  0F  0F  0F  0F  0F
 *       GRC[0x08]: BITMASK         FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF
 *       SEQ[0x00]: RESET           03  03  03  03  03  03  03  03  03  03  03  03
 *       SEQ[0x01]: CLKMODE         08  08  00  00  09  09  01  09  01  01  01  01
 *       SEQ[0x02]: MAPMASK         03  03  03  03  03  03  01  0F  0F  0F  0F  0F
 *       SEQ[0x03]: CHARMAP         00  00  00  00  00  00  00  00  00  00  00  00
 *       SEQ[0x04]: MEMMODE         03  03  03  03  02  02  06  06  06  06  06  0E
 *       ATC[0x00]: PAL00           00  00  00  00  00  00  00  00  00  00  00  00
 *       ATC[0x01]: PAL01           01  01  01  01  13  13  17  01  01  01  01  01
 *       ATC[0x02]: PAL02           02  02  02  02  15  15  17  02  02  02  02  02
 *       ATC[0x03]: PAL03           03  03  03  03  17  17  17  03  03  03  03  03
 *       ATC[0x04]: PAL04           04  04  04  04  02  02  17  04  04  04  04  04
 *       ATC[0x05]: PAL05           05  05  05  05  04  04  17  05  05  05  05  05
 *       ATC[0x06]: PAL06           14  14  14  14  06  06  17  06  06  14  14  06
 *       ATC[0x07]: PAL07           07  07  07  07  07  07  17  07  07  07  07  07
 *       ATC[0x08]: PAL08           38  38  38  38  10  10  17  10  10  38  38  08
 *       ATC[0x09]: PAL09           39  39  39  39  11  11  17  11  11  39  39  09
 *       ATC[0x0A]: PAL0A           3A  3A  3A  3A  12  12  17  12  12  3A  3A  0A
 *       ATC[0x0B]: PAL0B           3B  3B  3B  3B  13  13  17  13  13  3B  3B  0B
 *       ATC[0x0C]: PAL0C           3C  3C  3C  3C  14  14  17  14  14  3C  3C  0C
 *       ATC[0x0D]: PAL0D           3D  3D  3D  3D  15  15  17  15  15  3D  3D  0D
 *       ATC[0x0E]: PAL0E           3E  3E  3E  3E  16  16  17  16  16  3E  3E  0E
 *       ATC[0x0F]: PAL0F           3F  3F  3F  3F  17  17  17  17  17  3F  3F  0F
 *       ATC[0x10]: MODE            0C  0C  0C  0C  01  01  01  01  01  01  01  41
 *       ATC[0x11]: OVERSCAN        00  00  00  00  00  00  00  00  00  00  00  00
 *       ATC[0x12]: PLANES          0F  0F  0F  0F  03  03  01  0F  0F  0F  0F  0F
 *       ATC[0x13]: HPAN            08  08  08  08  00  00  00  00  00  00  00  00
 */

/**
 * Supported Monitors
 *
 * The MDA monitor displays 350 lines of vertical resolution, 720 lines of horizontal resolution, and refreshes
 * at ~50Hz.  The CGA monitor displays 200 lines vertically, 640 horizontally, and refreshes at ~60Hz.
 *
 * Based on actual MDA timings (see http://diylab.atwebpages.com/pressureDev.htm), the total horizontal
 * period (drawing a line and retracing) is ~54.25uSec (1000000uSec / 18432) and the horizontal retrace interval
 * is about 15% of that, or ~8.14uSec.  Vertical sync occurs once every 370 horizontal periods.  Of those 370,
 * only 354 represent actively drawn lines (and of those, only 350 are visible); the remaining 16 horizontal
 * periods, or 4% of the 370 total, represent the vertical retrace interval.
 *
 * I don't have similar numbers for the CGA or EGA, so for now, I assume similar percentages; ie, 15% of
 * the horizontal period will represent horizontal retrace, and 4% of the vertical pixel maximum (262) will
 * represent vertical retrace.  However, 24% of the CGA's 262 vertical maximum represents non-visible lines,
 * whereas only 5% of the MDA's 370 maximum represents non-visible lines; is there really that much "overscan"
 * on the CGA?
 *
 * For each monitor type, there's a MonitorSpecs object that describes the horizontal and vertical
 * timings, along with my assumptions about the percentage of time that drawing is "active" within those periods,
 * and then based on the selected monitor type, I compute the number of CPU cycles that each period lasts,
 * as well as the number of CPU cycles that drawing lasts within each period, so that the horizontal and vertical
 * retrace status flags can be quickly calculated.
 *
 * For reference, here are some important numbers to know (from https://github.com/reenigne/reenigne/blob/master/8088/cga/register_values.txt):
 *
 *              CGA          MDA
 *  Pixel clock 14.318 MHz   16.257 MHz (aka "maximum video bandwidth", as IBM Tech Refs sometimes call it)
 *  Horizontal  15.700 KHz   18.432 KHz (aka "horizontal drive", as IBM Tech Refs sometimes call it)
 *  Vertical    59.923 Hz    49.816 Hz
 *  Usage       53.69%       77.22%
 *  H pix       912 = 114*8  882 = 98*9
 *  V pix       262          370
 *  Dots        238944       326340
 */

/**
 * @typedef {Object} MonitorSpecs
 * @property {number} nHorzPeriodsPerSec
 * @property {number} nHorzPeriodsPerFrame
 * @property {number} percentHorzActive
 * @property {number} percentVertActive
 */

/**
 * @class Card
 * @property {Debuggerx86} dbg
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export class Card extends Controller {
    /**
     * MDA Registers (ports 0x3B4, 0x3B5, 0x3B8, and 0x3BA)
     *
     * NOTE: All monochrome cards (at least all IBM cards) included a parallel interface at ports 0x3BC/0x3BD/0x3BE;
     * for the same functionality in PCx86, you must include a properly configured ParallelPort component.
     */
    static MDA = {
        CRTC: {
            INDX: {
                PORT:           0x3B4,      // NOTE: the low byte of this port address (0xB4) is mirrored at 40:0063 (0x0463)
                MASK:           0x1F
            },
            DATA: {
                PORT:           0x3B5
            }
        },
        MODE: {
            PORT:               0x3B8,      // Mode Select Register, aka CRT Control Port 1 (write-only); the BIOS mirrors this register at 40:0065 (0x0465)
            HIRES:              0x01,
            VIDEO_ENABLE:       0x08,
            BLINK_ENABLE:       0x20
        },
        STATUS: {
            PORT:               0x3BA,
            HDRIVE:             0x01,
            BWVIDEO:            0x08
        }
    };

    /**
     * CGA Registers (ports 0x3D4, 0x3D5, 0x3D8, 0x3D9, and 0x3DA)
     */
    static CGA = {
        CRTC: {
            INDX: {
                PORT:           0x3D4,      // NOTE: the low byte of this port address (0xB4) is mirrored at 40:0063 (0x0463)
                MASK:           0x1F
            },
            DATA: {
                PORT:           0x3D5
            }
        },
        MODE: {
            PORT:               0x3D8,      // Mode Select Register (write-only); the BIOS mirrors this register at 40:0065 (0x0465)
            _80X25:             0x01,
            GRAPHIC_SEL:        0x02,
            BW_SEL:             0x04,
            VIDEO_ENABLE:       0x08,       // same as MDA.MODE.VIDEO_ENABLE
            HIRES_BW:           0x10,
            BLINK_ENABLE:       0x20        // same as MDA.MODE.BLINK_ENABLE
        },
        COLOR: {
            PORT:               0x3D9,      // Color Select Register, aka Overscan Register (write-only)
            BORDER:             0x07,
            BRIGHT:             0x08,
            BGND_ALT:           0x10,       // alternate, intensified background colors in text mode
            COLORSET1:          0x20        // selects aCGAColorSet1 colors for 320x200 graphics mode; aCGAColorSet0 otherwise
        },
        STATUS: {
            PORT:               0x3DA,      // read-only; same for EGA (although the EGA calls this STATUS1, to distinguish it from STATUS0)
            RETRACE:            0x01,
            PEN_TRIGGER:        0x02,
            PEN_ON:             0x04,
            VRETRACE:           0x08        // when set, this indicates the CGA is performing a vertical retrace
        },
        /**
         * TODO: Add support for light pen port(s) someday....
         */
        CLEAR_PEN: {
            PORT:               0x3DB
        },
        PRESET_PEN: {
            PORT:               0x3DC
        }
    };

    /**
     * Common CRT hardware registers (ports 0x3B4/0x3B5 or 0x3D4/0x3D5)
     *
     * NOTE: In this implementation, because we have to make at least two of the registers readable (CURSORHI and CURSORLO),
     * we end up making ALL the registers readable, otherwise we would have to explicitly block any register marked write-only.
     * I don't think making the CRT registers fully readable presents any serious compatibility issues, and it actually offers
     * some benefits (eg, improved debugging).
     *
     * However, some things are broken: the (readable) light pen registers on the EGA are overloaded as (writable) vertical retrace
     * registers, so the vertical retrace registers cannot actually be read that way.  I'm sure the VGA solved that problem, but I haven't
     * looked into it yet.
     */
    static CRTC = {
        HTOTAL:             0x00,           // Horizontal Total
        HDISP:              0x01,           // Horizontal Displayed
        HSPOS:              0x02,           // Horizontal Sync Position
        HSWIDTH:            0x03,           // Horizontal Sync Width
        VTOTAL:             0x04,           // Vertical Total
        VTOTADJ:            0x05,           // Vertical Total Adjust
        VDISP:              0x06,           // Vertical Displayed
        VSPOS:              0x07,           // Vertical Sync Position
        ILMODE:             0x08,           // Interlace Mode
        MAXSCAN:            0x09,           // Max Scan Line Address
        CURSCAN:            0x0A,           // Cursor Scan Line Top
        CURSCAN_SLMASK:         0x1F,       // Scan Line Mask
        /**
         * I don't entirely understand the cursor blink control bits.  Here's what the MC6845 datasheet says:
         *
         *      Bit 5 is the blink timing control.  When bit 5 is low, the blink frequency is 1/16 of the vertical field rate,
         *      and when bit 5 is high, the blink frequency is 1/32 of the vertical field rate.  Bit 6 is used to enable a blink.
         */
        CURSCAN_BLINKON:        0x00,       // (supposedly, 0x40 has the same effect as 0x00?)
        CURSCAN_BLINKOFF:       0x20,       // if blinking is disabled, the cursor is effectively hidden (TODO: CGA and VGA only?)
        CURSCAN_BLINKFAST:      0x60,       // default is 1/16 of the frame rate; this switches to 1/32 of the frame rate (TODO: CGA only?)
        CURSCANB:           0x0B,           // Cursor Scan Line Bottom
        STARTHI:            0x0C,           // Start Address High
        STARTLO:            0x0D,           // Start Address Low
        CURSORHI:           0x0E,           // Cursor Address High
        CURSORLO:           0x0F,           // Cursor Address Low
        PENHI:              0x10,           // Light Pen High
        PENLO:              0x11,           // Light Pen Low
        TOTAL_REGS:         0x12,           // total CRT registers on MDA/CGA
        EGA: {
            HDEND:          0x01,
            HBSTART:        0x02,
            HBEND:          0x03,
            HRSTART:        0x04,
            HREND:          0x05,
            VTOTAL:         0x06,
            OVERFLOW: {
                INDX:       0x07,
                VTOTAL_BIT8:    0x01,       // bit 8 of register 0x06
                VDEND_BIT8:     0x02,       // bit 8 of register 0x12
                VRSTART_BIT8:   0x04,       // bit 8 of register 0x10
                VBSTART_BIT8:   0x08,       // bit 8 of register 0x15
                LINECOMP_BIT8:  0x10,       // bit 8 of register 0x18
                CURSCAN_BIT8:   0x20,       // bit 8 of register 0x0A (EGA only; TODO: What is this for? The CURSCAN register doesn't even use bit 7, so why would it need a bit 8?)
                VTOTAL_BIT9:    0x20,       // bit 9 of register 0x06 (VGA only)
                VDEND_BIT9:     0x40,       // bit 9 of register 0x12 (VGA only, unused on EGA)
                VRSTART_BIT9:   0x80        // bit 9 of register 0x10 (VGA only, unused on EGA)
            },
            PRESCAN:        0x08,
            /**
             * NOTE: EGA/VGA CRTC registers 0x09-0x0F are the same as the MDA/CGA CRTC registers defined above
             */
            MAXSCAN: {
                INDX:       0x09,           // (same as MDA/CGA)
                SLMASK:         0x1F,       // Scan Line Mask
                VBSTART_BIT9:   0x20,       // (VGA only)
                LINECOMP_BIT9:  0x40,       // (VGA only)
                CONVERT400:     0x80        // 200-to-400 scan-line conversion is in effect (VGA only)
            },
            CURSCAN:        0x0A,           // (same as MDA/CGA)
            CURSCANB:       0x0B,           // (same as MDA/CGA)
            STARTHI:        0x0C,           // (same as MDA/CGA)
            STARTLO:        0x0D,           // (same as MDA/CGA)
            CURSORHI:       0x0E,           // (same as MDA/CGA)
            CURSORLO:       0x0F,           // (same as MDA/CGA)
            VRSTART:        0x10,           // (formerly PENHI on MDA/CGA)
            VREND:          {               // (formerly PENLO on MDA/CGA; last register on the original 6845 controller)
                INDX:       0x11,
                HSCAN:          0x0F,       // the horizontal scan count value when the vertical retrace output signal becomes inactive
                UNCLEAR_VRINT:  0x10,       // clear vertical retrace interrupt if NOT set
                DISABLE_VRINT:  0x20        // enable vertical retrace interrupt if NOT set
            },
            VDEND:          0x12,
            /**
             * The OFFSET register (bits 0-7) specifies the logical line width of the screen.  The starting memory address
             * for the next character row is larger than the current character row by two or four times this amount.
             * The OFFSET register is programmed with a word address.  Depending on the method of clocking the CRT Controller,
             * this word address is [effectively] either a word or double-word address. #IBMVGATechRef
             */
            OFFSET:         0x13,
            UNDERLINE: {
                INDX:       0x14,
                SLMASK:         0x1F,
                COUNT_BY_4:     0x20,       // (VGA only)
                DWORD:          0x40        // (VGA only)
            },
            VBSTART:        0x15,
            VBEND:          0x16,
            MODECTRL: {
                INDX:       0x17,
                COMPAT_MODE:    0x01,       // Compatibility Mode Support (CGA A13 control)
                SEL_ROW_SCAN:   0x02,       // Select Row Scan Counter
                SEL_HRETRACE:   0x04,       // Horizontal Retrace Select
                COUNT_BY_2:     0x08,       // Count By Two
                OUTPUT_CTRL:    0x10,       // Output Control
                ADDR_WRAP:      0x20,       // Address Wrap (in Word mode, 1 maps A15 to A0 and 0 maps A13; use the latter when only 64Kb is installed)
                BYTE_MODE:      0x40,       // Byte Mode (1 selects Byte Mode; 0 selects Word Mode)
                HARD_RESET:     0x80        // Hardware Reset
            },
            LINECOMP:       0x18,
            TOTAL_REGS:     0x19            // total CRT registers on EGA/VGA
        }
    };

    /**
     * TODO: These mask tables need to be card-specific.  For example, the STARTHI and CURSORHI registers used to be
     * limited to 0x3F, because the MC6845 controller used with the original MDA and CGA cards was limited to 16Kb of RAM,
     * whereas later cards like the EGA and VGA had anywhere from 64Kb to 256Kb, so all the bits of those registers were
     * significant.  Currently, I'm doing very little masking, which means most CRTC registers are treated as full 8-bit
     * registers (and fully readable as well), which might cause some compatibility problems for any MDA/CGA apps that
     * were sloppy about how they programmed registers.
     *
     * I do make an exception, however, in the case of STARTHI and CURSORHI, due to the way the MC6845 controller wraps
     * addresses around to the beginning of the buffer, because that seems like a high-risk case.  See the card-specific
     * variable addrMaskHigh.
     */
    static CRTCMASKS = {
        [Card.CRTC.HTOTAL]:     0xFF,       // R0
        [Card.CRTC.HDISP]:      0xFF,       // R1
        [Card.CRTC.HSPOS]:      0xFF,       // R2
        [Card.CRTC.HSWIDTH]:    0x0F,       // R3
        [Card.CRTC.VTOTAL]:     0x7F,       // R4
        [Card.CRTC.VTOTADJ]:    0x1F,       // R5
        [Card.CRTC.VDISP]:      0x7F,       // R6
        [Card.CRTC.VSPOS]:      0x7F,       // R7
        [Card.CRTC.ILMODE]:     0x03,       // R8
        [Card.CRTC.MAXSCAN]:    0x1F,       // R9
        [Card.CRTC.CURSCAN]:    0x7F,       // R10
        [Card.CRTC.CURSCANB]:   0x1F,       // R11
        [Card.CRTC.STARTHI]:    0x3F,       // R12
        [Card.CRTC.STARTLO]:    0xFF,       // R13
        [Card.CRTC.CURSORHI]:   0x3F,       // R14
        [Card.CRTC.CURSORLO]:   0xFF,       // R15
        [Card.CRTC.PENHI]:      0x3F,       // R16
        [Card.CRTC.PENLO]:      0xFF        // R17
    };

    /**
     * EGA/VGA Input Status 1 Register (port 0x3DA)
     *
     * STATUS1 bit 0 has confusing documentation: the EGA Tech Ref says "Logical 0 indicates the CRT raster is in a
     * horizontal or vertical retrace interval", whereas the VGA Tech Ref says "Logical 1 indicates a horizontal or
     * vertical retrace interval," but then clarifies: "This bit is the real-time status of the INVERTED display enable
     * signal".  So, instead of calling bit 0 DISP_ENABLE (or more precisely, DISP_ENABLE_INVERTED), it's simply RETRACE.
     *
     * STATUS1 diagnostic bits 5 and 4 are set according to the Card.ATC.PLANES.MUX bits:
     *
     *      MUX     Bit 5   Bit 4
     *      ---     ----    ----
     *      00:     Red     Blue
     *      01:     SecBlue Green
     *      10:     SecRed  SecGreen
     *      11:     unused  unused
     */
    static STATUS1 = {
        PORT:                   0x3DA,
        RETRACE:                0x01,       // bit 0: logical OR of horizontal and vertical retrace
        VRETRACE:               0x08,       // bit 3: set during vertical retrace interval
        DIAGNOSTIC:             0x30,       // bits 5,4 are controlled by the Card.ATC.PLANES.MUX bits
        RESERVED:               0xC6
    };

    /**
     * EGA/VGA Attribute Controller Registers (port 0x3C0: regATCIndx and regATCData)
     *
     * The current ATC INDX value is stored in cardEGA.regATCIndx (including the Card.ATC.INDX_ENABLE bit), and the
     * ATC DATA values are stored in cardEGA.regATCData.  The state of the ATC INDX/DATA flip-flop is stored in fATCData.
     *
     * Note that the ATC palette registers (0x0-0xf) all use the following 6 bit assignments, with bits 6 and 7 unused:
     *
     *      0: Blue
     *      1: Green
     *      2: Red
     *      3: SecBlue (or mono video)
     *      4: SecGreen (or intensity)
     *      5: SecRed
     */
    static ATC = {
        PORT:                   0x3C0,      // ATC Index/Data Port
        INDX_MASK:              0x1F,
        INDX_PAL_ENABLE:        0x20,       // must be clear when loading palette registers
        PALETTE: {
            INDX:               0x00,       // 16 registers: 0x00 - 0x0F
            MASK:               0x3f,
            BLUE:               0x01,
            GREEN:              0x02,
            RED:                0x04,
            SECBLUE:            0x08,
            BRIGHT:             0x10,       // NOTE: The IBM EGA manual (p.56) also calls this the "intensity" bit
            SECGREEN:           0x10,
            SECRED:             0x20
        },
        PALETTE_REGS:           0x10,       // 16 total palette registers
        MODE: {
            INDX:               0x10,       // ATC Mode Control Register
            GRAPHICS:           0x01,       // bit 0: set for graphics mode, clear for alphanumeric mode
            MONOEM:             0x02,       // bit 1: set for monochrome emulation mode, clear for color emulation
            TEXT_9DOT:          0x04,       // bit 2: set for 9-dot replication in character codes 0xC0-0xDF
            BLINK_ENABLE:       0x08,       // bit 3: set for text/graphics blink, clear for background intensity
            RESERVED:           0x10,       // bit 4: reserved
            PANCOMPAT:          0x20,       // bit 5: set for pixel-panning compatibility
            PELWIDTH:           0x40,       // bit 6: set for 256-color modes, clear for all other modes
            COLORSEL_ALL:       0x80        // bit 7: set to enable all COLORSEL bits (ie, COLORSEL.DAC_BIT5 and COLORSEL.DAC_BIT4)
        },
        OVERSCAN: {
            INDX:               0x11        // ATC Overscan Color Register
        },
        PLANES: {
            INDX:               0x12,       // ATC Color Plane Enable Register
            MASK:               0x0F,
            MUX:                0x30,
            RESERVED:           0xC0
        },
        HPAN: {
            INDX:               0x13,       // ATC Horizontal PEL Panning Register
            SHIFT_LEFT:         0x0F        // bits 0-3 indicate # of pixels to shift left
        },
        COLORSEL: {
            INDX:               0x14,       // ATC Color Select Register (VGA only)
            DAC_BIT7:           0x08,       // specifies bit 7 of DAC values (ignored in 256-color modes)
            DAC_BIT6:           0x04,       // specifies bit 6 of DAC values (ignored in 256-color modes)
            DAC_BIT5:           0x02,       // specifies bit 5 of DAC values (if ATC.MODE.COLORSEL_ALL is set; ignored in 256-color modes)
            DAC_BIT4:           0x01        // specifies bit 4 of DAC values (if ATC.MODE.COLORSEL_ALL is set; ignored in 256-color modes)
        },
        TOTAL_REGS:             0x14
    };

    /**
     * EGA/VGA Feature Control Register (port 0x3BA or 0x3DA: regFeat)
     *
     * The EGA BIOS writes 0x1 to Card.FEAT_CTRL.BITS and reads Card.STATUS0.FEAT, then writes 0x2 to
     * Card.FEAT_CTRL.BITS and reads Card.STATUS0.FEAT.  The bits from the first and second reads are shifted
     * into the high nibble of the byte at 40:88h.
     */
    static FEAT_CTRL = {
        PORT_MONO:              0x3BA,      // write port address (other than the two bits below, the rest are reserved and/or unused)
        PORT_COLOR:             0x3DA,      // write port address (other than the two bits below, the rest are reserved and/or unused)
        PORT_READ:              0x3CA,      // read port address (VGA only)
        BITS:                   0x03        // feature control bits
    };

    /**
     * EGA/VGA Miscellaneous Output Register (port 0x3C2: regMisc)
     */
    static MISC = {
        PORT_WRITE:             0x3C2,      // write port address (EGA and VGA)
        PORT_READ:              0x3CC,      // read port address (VGA only)
        IO_SELECT:              0x01,       // 0 sets CRT ports to 0x3Bn, 1 sets CRT ports to 0x3Dn
        ENABLE_RAM:             0x02,       // 0 disables video RAM, 1 enables
        CLOCK_SELECT:           0x0C,       // 0x0: 14Mhz I/O clock, 0x4: 16Mhz on-board clock, 0x8: external clock, 0xC: unused
        DISABLE_DRV:            0x10,       // 0 activates internal video drivers, 1 activates feature connector direct drive outputs
        PAGE_ODD_EVEN:          0x20,       // 0 selects the low 64Kb page of video RAM for text modes, 1 selects the high page
        HPOLARITY:              0x40,       // 0 selects positive horizontal retrace
        VPOLARITY:              0x80        // 0 selects positive vertical retrace
    };

    /**
     * EGA/VGA Input Status 0 Register (port 0x3C2: regStatus0)
     */
    static STATUS0 = {
        PORT:                   0x3C2,      // read-only (aka STATUS0, to distinguish it from PORT_CGA_STATUS)
        RESERVED:               0x0F,
        SWSENSE:                0x10,
        SWSENSE_SHIFT:          4,
        FEAT:                   0x60,       // VGA: reserved
        INTERRUPT:              0x80        // 1: video is being displayed; 0: vertical retrace is occurring
    };

    /**
     * VGA Subsystem Enable Register (port 0x3C3: regVGAEnable)
     */
    static VGA_ENABLE = {
        PORT:                   0x3C3,
        ENABLED:                0x01,       // when set, all VGA I/O and memory decoding is enabled; otherwise disabled (TODO: Implement)
        RESERVED:               0xFE
    };

    /**
     * EGA/VGA Sequencer Registers (ports 0x3C4/0x3C5: regSEQIndx and regSEQData)
     */
    static SEQ = {
        INDX: {
            PORT:               0x3C4,      // Sequencer Index Port
            MASK:               0x07
        },
        DATA: {
            PORT:               0x3C5       // Sequencer Data Port
        },
        RESET: {
            INDX:               0x00,       // Sequencer Reset Register
            ASYNC:              0x01,
            SYNC:               0x02
        },
        CLKMODE: {
            INDX:               0x01,       // Sequencer Clocking Mode Register
            DOTS8:              0x01,       // 1: 8 dots; 0: 9 dots
            BANDWIDTH:          0x02,       // 0: CRTC has access 4 out of every 5 cycles (for high-res modes); 1: CRTC has access 2 out of 5 (VGA: reserved)
            SHIFTLOAD:          0x04,
            DOTCLOCK:           0x08,       // 0: normal dot clock; 1: master clock divided by two (used for 320x200 modes: 0, 1, 4, 5, and D)
            SHIFT4:             0x10,       // VGA only
            SCREEN_OFF:         0x20,       // VGA only
            RESERVED:           0xC0
        },
        MAPMASK: {
            INDX:               0x02,       // Sequencer Map Mask Register
            PL0:                0x01,
            PL1:                0x02,
            PL2:                0x04,
            PL3:                0x08,
            MAPS:               0x0F,
            RESERVED:           0xF0
        },
        CHARMAP: {
            INDX:               0x03,       // Sequencer Character Map Select Register
            SELB:               0x03,       // 0x0: 1st 8Kb of plane 2; 0x1: 2nd 8Kb; 0x2: 3rd 8Kb; 0x3: 4th 8Kb (used when attribute bit 3 is 0)
            SELA:               0x0C,       // 0x0: 1st 8Kb of plane 2; 0x4: 2nd 8Kb; 0x8: 3rd 8Kb; 0xC: 4th 8Kb (used when attribute bit 3 is 1)
            SELB_HI:            0x10,       // VGA only
            SELA_HI:            0x20        // VGA only
        },
        MEMMODE: {
            INDX:               0x04,       // Sequencer Memory Mode Register
            ALPHA:              0x01,       // set for alphanumeric (A/N) mode, clear for graphics (APA or "All Points Addressable") mode (EGA only)
            EXT:                0x02,       // set if memory expansion installed, clear if not installed
            SEQUENTIAL:         0x04,       // set for sequential memory access, clear for mapping even addresses to planes 0/2, odd addresses to planes 1/3
            CHAIN4:             0x08        // VGA only: set to select memory map (plane) based on low 2 bits of address
        },
        TOTAL_REGS:             0x05
    };

    /**
     * VGA Digital-to-Analog Converter (DAC) Registers (regDACMask, regDACState, regDACAddr, and regDACData)
     *
     * To write DAC data, write an address to DAC.ADDR.PORT_WRITE, then write 3 bytes to DAC.DATA.PORT; the low 6 bits
     * of each byte will be concatenated to form an 18-bit DAC value (red is least significant, followed by green, then blue).
     * When the final byte is received, the 18-bit DAC value is updated and regDACAddr is auto-incremented.
     *
     * To read DAC data, the process is similar, but the initial address is written to DAC.ADDR.PORT_READ instead.
     *
     * DAC.STATE.PORT and DAC.ADDR.PORT_WRITE can be read at any time and will not interfere with a read or write operation
     * in progress.  To prevent "snow", reading or writing DAC values should be limited to retrace intervals (see regStatus1),
     * or by using the SCREEN_OFF bit in the SEQ.CLKMODE register.
     */
    static DAC = {
        MASK: {
            PORT:               0x3C6,      // initialized to 0xFF and should not be changed
            DEFAULT:            0xFF
        },
        STATE: {
            PORT:               0x3C7,
            MODE_WRITE:         0x00,       // the DAC is in write mode if bits 0 and 1 are clear
            MODE_READ:          0x03        // the DAC is in read mode if bits 0 and 1 are set
        },
        ADDR: {
            PORT_READ:          0x3C7,      // write to initiate a read
            PORT_WRITE:         0x3C8       // write to initiate a write; read to determine the current ADDR
        },
        DATA: {
            PORT:               0x3C9
        },
        TOTAL_REGS:             0x100
    };

    /**
     * EGA/VGA Graphics Controller Registers (ports 0x3CE/0x3CF: regGRCIndx and regGRCData)
     *
     * The VGA added Write Mode 3, which is described as follows:
     *
     *      "Each map is written with 8 bits of the value contained in the Set/Reset register for that map
     *      (the Enable Set/Reset register has no effect). Rotated system microprocessor data is ANDed with the
     *      Bit Mask register data to form an 8-bit value that performs the same function as the Bit Mask register
     *      does in write modes 0 and 2."
     */
    static GRC = {
        POS1_PORT:              0x3CC,      // EGA only, write-only
        POS2_PORT:              0x3CA,      // EGA only, write-only
        INDX: {
            PORT:               0x3CE,      // GRC Index Port
            MASK:               0x0F
        },
        DATA: {
            PORT:               0x3CF       // GRC Data Port
        },
        SRESET: {
            INDX:               0x00        // GRC Set/Reset Register (write-only; each bit used only if WRITE.MODE0 and corresponding ESR bit set)
        },
        ESRESET: {
            INDX:               0x01        // GRC Enable Set/Reset Register
        },
        COLORCOMP: {
            INDX:               0x02        // GRC Color Compare Register
        },
        DATAROT: {
            INDX:               0x03,       // GRC Data Rotate Register
            COUNT:              0x07,
            AND:                0x08,
            OR:                 0x10,
            XOR:                0x18,
            FUNC:               0x18,
            MASK:               0x1F
        },
        READMAP: {
            INDX:               0x04,       // GRC Read Map Select Register
            NUM:                0x03
        },
        MODE: {
            INDX:               0x05,       // GRC Mode Register
            WRITE: {
                MODE0:          0x00,       // write mode 0: each plane written with CPU data, rotated as needed, unless SR enabled
                MODE1:          0x01,       // write mode 1: each plane written with contents of the processor latches (loaded by a read)
                MODE2:          0x02,       // write mode 2: memory plane N is written with 8 bits matching data bit N
                MODE3:          0x03,       // write mode 3: VGA only
                MASK:           0x03
            },
            TEST:               0x04,
            READ: {
                MODE0:          0x00,       // read mode 0: read map mode
                MODE1:          0x08,       // read mode 1: color compare mode
                MASK:           0x08
            },
            EVENODD:            0x10,
            SHIFT:              0x20,
            COLOR256:           0x40        // VGA only
        },
        MISC: {
            INDX:               0x06,       // GRC Miscellaneous Register
            GRAPHICS:           0x01,       // set for graphics mode addressing, clear for text mode addressing
            CHAIN:              0x02,       // set for odd/even planes selected with odd/even values of the processor AO bit
            MAPMEM:             0x0C,       //
            MAPA0128:           0x00,       //
            MAPA064:            0x04,       //
            MAPB032:            0x08,       //
            MAPB832:            0x0C        //
        },
        COLORDC: {
            INDX:               0x07        // GRC Color "Don't Care" Register
        },
        BITMASK: {
            INDX:               0x08        // GRC Bit Mask Register
        },
        TOTAL_REGS:             0x09
    };

    /**
     * EGA Memory Access Functions
     *
     * Here's where we define all the getMemoryAccess() functions that know how to deal with "planar" EGA memory,
     * which consists of 32-bit values for every byte of address space, allowing us to internally store plane 0
     * bytes in bits 0-7, plane 1 bytes in bits 8-15, plane 2 bytes in bits 16-23, and plane 3 bytes in bits 24-31.
     *
     * All our functions have slightly more overhead than the standard Bus memory access functions, because the
     * offset (off) parameter is block-relative, which we must transform into a buffer-relative offset.  Fortunately,
     * all our Memory objects know this and have already recorded their buffer-relative offset in "this.offset".
     *
     * Also, the EGA includes a set of latches, one for each plane, which must be updated on most reads/writes;
     * we rely on the Memory object's "this.controller" property to give us access to the Card's state.
     *
     * And we take a little extra time to conditionally set DIRTY on writes, meaning if a write did not actually
     * change the value of the memory, we will not set DIRTY.  The default write functions in memory.js don't take
     * that performance hit, but here, it may be worthwhile, because if it results in fewer dirty blocks, display
     * updates may be faster.
     *
     * Note that we don't have to worry about dealing with word accesses that straddle block boundaries, because
     * the Bus component automatically breaks those accesses into separate byte requests.  Similarly, byte and word
     * values for the write functions have already been pre-masked by the Bus component to 8 and 16 bits, respectively.
     *
     * My motto: Be paranoid, but also be careful not to do any more work than you absolutely have to.
     *
     *
     * CGA Emulation on the EGA
     *
     * Modes 4/5 (320x200 low-res graphics) emulate the same buffer format that the CGA uses.  To recap: 1 byte contains
     * 4 pixels (pixel 0 in bits 7-6, pixel 1 in bits 5-4, etc), and thus one row of pixels is 80 (0x50) bytes long.
     * Moreover, all even rows are stored in the first 8K of the video buffer (at 0xB8000), and all odd rows are stored
     * in the second 8K (at 0xBA000).  Of each 8K, only 8000 (0x1F40) bytes are used (80 bytes X 100 rows); the remaining
     * 192 bytes of each 8K are unused.
     *
     * For these modes, the EGA's GRC.MODE is programmed with 0x30: Card.GRC.MODE.EVENODD and Card.GRC.MODE.SHIFT.
     * The latter claims to work by forming each 2-bit pixel with even bits from plane 0 and odd bits from plane 1;
     * however, I'm unclear how that works if even bytes are only written to plane 0 and odd bytes are only written to
     * plane 1, as Card.GRC.MODE.EVENODD implies, because plane 0 would never have any bits for the odd bytes, and
     * plane 1 would never have any bits for the even bytes.  TODO: Figure this out.
     *
     *
     * Even/Odd Memory Access Functions
     *
     * The "EVENODD" functions deal with the EGA's default text-mode addressing, where EVEN addresses are mapped to
     * plane 0 (and 2) and ODD addresses are mapped to plane 1 (and 3).  This occurs when SEQ.MEMMODE.SEQUENTIAL is
     * clear (and GRC.MODE.EVENODD is set), turning address bit 0 (A0) into a "plane select" bit.  Whether A0 is also
     * used as a memory address bit depends on CRTC.MODECTRL.BYTE_MODE: if it's set, then we're in "Byte Mode" and A0 is
     * used as-is; if it's clear, then we're in "Word Mode", and either A15 (when CRTC.MODECTRL.ADDR_WRAP is set) or A13
     * (when CRTC.MODECTRL.ADDR_WRAP is clear, typically when only 64Kb of EGA memory is installed) is substituted for A0.
     *
     * Note that A13 remains clear until addresses reach 8K, at which point we've spanned 32Kb of EGA memory, so it makes
     * sense to propagate A13 to A0 at that point, so that the next 8K of addresses start using ODD instead of EVEN bytes,
     * and no memory is wasted on a 64Kb EGA card.
     *
     * These functions, however, don't yet deal with all those subtleties: A0 is currently used only as a "plane select"
     * bit and set to zero for addressing purposes, meaning that only the EVEN bytes in EGA memory will ever be used.
     * TODO: Implement the subtleties.
     */

    /**
     * Card(video, nCard, data, cbMemory)
     *
     * Creates an object representing an initial video card state;
     * can also restore a video card from state data created by saveCard().
     *
     * WARNING: Since Card objects are low-level objects that have no UI requirements,
     * they do not inherit from the Component class, so you should only use class methods
     * of Component, such as Component.assert(), or methods of the parent (video) object.
     *
     * @this {Card}
     * @param {Videox86} [video]
     * @param {number} [nCard] (see Videox86.CARD.*)
     * @param {Array|null} [data]
     * @param {number} [cbMemory] is specified if the card must allocate its own memory buffer
     */
    constructor(video, nCard, data, cbMemory)
    {
        super();

        /**
         * If a card was originally not present (eg, EGA), then the state will be empty,
         * so we need to detect that case and continue indicating that the card is not present.
         */
        if (nCard !== undefined && (!data || data.length)) {

            this.video = video;

            let specs = Videox86.cardSpecs[nCard];
            let nMonitorType = video.nMonitorType || specs[5];

            if (!data || data.length < 6) {
                data = [false, 0, null, null, 0, new Array(nCard < Videox86.CARD.EGA? Card.CRTC.TOTAL_REGS : Card.CRTC.EGA.TOTAL_REGS)];
            }

            /**
             * If a Debugger is present, we want to stash a bit more info in each Card.
             */
            if (DEBUGGER) {
                this.dbg = video.dbg;
                this.type = specs[0];
                this.port = specs[1];
            }

            this.nCard = nCard;
            this.addrBuffer = specs[2];     // default (physical) video buffer address
            this.sizeBuffer = specs[3];     // default video buffer length (this is the total size, not the current visible size;
                                            // this.cbScreen is calculated on the fly to reflect the latter)

            /**
             * If no memory size is specified, then setMode() will use addMemory() to automatically add enough
             * memory blocks to cover the video buffer specified above; otherwise, it instructs addMemory() to call
             * getMemoryBuffer(), which will return a portion of the buffer (adwMemory) allocated below.  This allows
             * a card like the EGA to move/resize its video buffer as needed, as well as giving it total control over
             * the underlying memory.
             */
            this.cbMemory = cbMemory || specs[4];

            /**
             * All of our cardSpec video buffer sizes are based on the default text mode (eg, 4Kb for an MDA, 16Kb for
             * a CGA), but for a card with 64Kb or more of memory (ie, any EGA card), the default text mode video buffer
             * size should be dynamically recalculated as the smaller of: cbMemory divided by 4, or 32Kb.
             */
            if (this.cbMemory >= 0x10000 && this.addrBuffer >= 0xB0000) {
                this.sizeBuffer = Math.min(this.cbMemory >> 2, 0x8000);
            }

            this.fActive    = data[0];
            this.regMode    = data[1];      // see MDA.MODE* or CGA.MODE_*
                                            // use MDA.MODE.HIRES | MDA.MODE.VIDEO_ENABLE | MDA.MODE.BLINK_ENABLE
                                            // if you want to test blinking immediately after the initial power-on reset)
            this.regColor   = data[2];      // see CGA.COLOR.* (undefined on MDA)
            this.regStatus  = data[3];      // see MDA.STATUS.* or CGA.STATUS.*
            this.regCRTIndx = data[4] & 0xff;
            this.regCRTPrev = (data[4] >> 8) & 0xff;
            this.regCRTData = data[5];
            this.nCRTCRegs  = Card.CRTC.TOTAL_REGS;
            this.asCRTCRegs = DEBUGGER? Card.CRTC.REGS : [];
            this.offStart   = this.regCRTData[Card.CRTC.STARTLO] | (this.regCRTData[Card.CRTC.STARTHI] << 8);
            this.rowStart   = 0;            // initialize to zero and let the first latchStartAddress() call update it
            this.addrMaskHigh = 0x3F;       // card-specific mask for the high (bits 8 and up) of CRTC address registers

            if (nCard < Videox86.CARD.EGA) {
                this.initMemory(data[6], data[8]);
                this.setMemoryAccess(Card.READ.PAIRS | Card.WRITE.PAIRS);
            } else {
                this.addrMaskHigh = 0xFF;
                this.nCRTCRegs = Card.CRTC.EGA.TOTAL_REGS;
                this.asCRTCRegs = DEBUGGER? Card.CRTC.EGA_REGS : [];
                this.initEGA(data[6], nMonitorType);
            }

            let monitorSpecs = Videox86.monitorSpecs[nMonitorType] || Videox86.monitorSpecs[ChipSet.MONITOR.MONO];

            /**
             * nCyclesVertPeriod determines how frequently startVerticalRetrace() is called.  That function
             * snaps the current cycle count in nCyclesVertRetrace.  Then whenever getRetraceBits() is called,
             * it subtracts nCyclesVertRetrace from the current cycle count, and whenever the delta exceeds
             * nCyclesVertPeriod - nCyclesVertActive, vertical retrace has ended.  Similarly, horizontal retrace
             * ends whenever that delta MOD nCyclesHorzPeriod exceeds nCyclesHorzActive.
             */
            let nCyclesDefault = video.cpu.getBaseCyclesPerSecond();
            this.nCyclesHorzPeriod = (nCyclesDefault / monitorSpecs.nHorzPeriodsPerSec)|0;
            this.nCyclesHorzActive = (this.nCyclesHorzPeriod * monitorSpecs.percentHorzActive / 100)|0;
            this.nCyclesVertActive = (this.nCyclesHorzPeriod * monitorSpecs.nHorzPeriodsPerFrame)|0;
            this.nCyclesVertPeriod = (this.nCyclesVertActive / (monitorSpecs.percentVertActive / 100))|0;
            this.nCyclesVertRetrace = (data[7] || 0);
            this.nCountVertRetrace = 0;
        }
    }

    /**
     * initEGA(data)
     *
     * Another one of my frustrations with JSON is that it encodes empty arrays with non-zero lengths as
     * arrays of nulls, which means that any uninitialized register arrays whose elements were all originally
     * undefined come back via the JSON round-trip as *initialized* arrays whose elements are now all null.
     *
     * I'm a bit surprised, because JavaScript purists tell us to always use the '===' operator (eg, use
     * 'aReg[i] === undefined' to determine if an element is initialized), but because of this JSON stupidity,
     * that would require all such tests to become 'aReg[i] === undefined || aReg[i] === null'.  I'm puzzled
     * why the coercion of '==' is considered evil but JSON's coercion of undefined to null is perfectly fine.
     *
     * The simple solution is to change such comparisons to 'aReg[i] == null', because undefined is coerced
     * to null, whereas numeric values are not.
     *
     * [What do I mean by "another" frustration?  Let me talk to you some day about disallowing hex constants,
     * or insisting that property names be quoted, or refusing to allow comments.  I think it's fine for
     * JSON.stringify() to produce output that adheres to rules like that -- although some parameters to control
     * the output would be nice -- but it's completely unnecessary for JSON.parse() to refuse to parse objects
     * that are perfectly valid.]
     *
     * @this {Card}
     * @param {Array|undefined} data
     * @param {number} nMonitorType
     */
    initEGA(data, nMonitorType)
    {
        if (data === undefined) {
            data = [
                /* 0*/  false,
                /* 1*/  0,
                /* 2*/  new Array(Card.ATC.TOTAL_REGS),
                /* 3*/  0,
                /* 4*/  (nMonitorType == ChipSet.MONITOR.MONO? 0: Card.MISC.IO_SELECT),
                /* 5*/  0,
                /* 6*/  0,
                /* 7*/  new Array(Card.SEQ.TOTAL_REGS),
                /* 8*/  0,
                /* 9*/  0,
                /*10*/  0,
                /*11*/  new Array(Card.GRC.TOTAL_REGS),
                /*12*/  0,
                /*13*/  [this.addrBuffer, this.sizeBuffer, this.cbMemory],
                /*14*/  null,
                /**
                 * Card.WRITE.MODE0 by itself is a pretty good default, but if we choose to "randomize" the screen with
                 * text characters prior to starting the machine, defaulting to Card.WRITE.EVENODD is more faithful to how
                 * characters and attributes are typically stored (ie, in planes 0 and 1, respectively).
                 *
                 *      Card.READ.MODE0 | Card.READ.EVENODD | Card.WRITE.MODE0 | Card.WRITE.EVENODD | Card.V2
                 *
                 * Unfortunately, a typical ROM BIOS will almost immediately write to one of the original MDA or CGA mode registers,
                 * changing the default mode, so we may as well initialize the card to byte-pair access.
                 */
                /*15*/  Card.READ.PAIRS | Card.WRITE.PAIRS  | Card.V2,
                /*16*/  0,
                /*17*/  0xffffffff|0,
                /*18*/  0,
                /*19*/  0xffffffff|0,
                /*20*/  0,
                /*21*/  0xffffffff|0,
                /*22*/  0,
                /*23*/  0,
                /*24*/  0,
                /*25*/  0,
                /*26*/  Card.VGA_ENABLE.ENABLED,
                /*27*/  Card.DAC.MASK.DEFAULT,
                /*28*/  0,
                /*29*/  0,
                /*30*/  Card.DAC.STATE.MODE_WRITE,
                /*31*/  new Array(Card.DAC.TOTAL_REGS)
            ];
        }

        this.fATCData   = data[0];
        this.regATCIndx = data[1];
        this.regATCData = data[2];
        this.asATCRegs  = DEBUGGER? Card.ATC.REGS : [];
        this.regStatus0 = data[3];      // aka STATUS0 (not to be confused with this.regStatus, which the EGA refers to as STATUS1)
        this.regMisc    = data[4];
        this.regFeat    = data[5];      // for feature control bits, see Card.FEAT_CTRL.BITS; for feature status bits, see Card.STATUS0.FEAT
        this.regSEQIndx = data[6];
        this.regSEQData = data[7];
        this.asSEQRegs  = DEBUGGER? Card.SEQ.REGS : [];
        this.regGRCPos1 = data[8];
        this.regGRCPos2 = data[9];
        this.regGRCIndx = data[10];
        this.regGRCData = data[11];
        this.asGRCRegs  = DEBUGGER? Card.GRC.REGS : [];
        this.latches    = data[12];

        /**
         * Since we originally neglected to save/restore the card's active video buffer address and length,
         * we're now stashing all that information in data[13].  So if we're presented with an old data entry
         * that contains only the card's memory size, fix it up.
         *
         * TODO: This code just creates the required array; the correct video buffer address and length would
         * still need to be calculated from the current GRC registers; checkMode() knows how to do that, but I'm
         * not prepared to shoehorn in a call to checkMode() here, and potentially create more issues, for an
         * old problem that will eventually disappear anyway.
         */
        let a = data[13];
        if (typeof a == "number") {
            a = [this.addrBuffer, this.sizeBuffer, a];
        }
        this.addrBuffer = a[0];
        this.sizeBuffer = a[1];
        this.video.assert(this.cbMemory === a[2]);

        this.initMemory(data[14], this.cbMemory >> 2);

        let nAccess = data[15];
        if (nAccess) {
            if (nAccess & Card.V2) {
                nAccess &= ~Card.V2;
            } else {
                this.video.assert(Card.V1[nAccess & 0xff00] !== undefined && Card.V1[nAccess & 0xff] !== undefined);
                nAccess = Card.V1[nAccess & 0xff00] | Card.V1[nAccess & 0xff];
            }
        }
        this.setMemoryAccess(nAccess);

        /**
         * nReadMapShift must perfectly track how the GRC.READMAP register is programmed, so that Card.READ.MODE0
         * memory read functions read the appropriate plane.  This default is not terribly critical, unless Card.WRITE.MODE0
         * is chosen as our default AND you want the screen randomizer to work.
         */
        this.nReadMapShift  = data[16];

        /**
         * Similarly, nSeqMapMask must perfectly track how the SEQ.MAPMASK register is programmed, so that memory write
         * functions write the appropriate plane(s).  Again, this default is not terribly critical, unless Card.WRITE.MODE0
         * is chosen as our default AND you want the screen randomizer to work.
         */
        this.nSeqMapMask    = data[17];
        this.nDataRotate    = data[18];
        this.nBitMapMask    = data[19];
        this.nSetMapData    = data[20];
        this.nSetMapMask    = data[21];
        this.nSetMapBits    = data[22];
        this.nColorCompare  = data[23];
        this.nColorDontCare = data[24];
        this.offStart       = data[25];     // this is the last CRTC start address latched from CRTC.STARTHI,CRTC.STARTLO

        if (this.nCard == Videox86.CARD.VGA) {
            this.regVGAEnable   = data[26];
            this.regDACMask     = data[27];
            this.regDACAddr     = data[28];
            this.regDACShift    = data[29];
            this.regDACState    = data[30];
            this.regDACData     = data[31];
        }

        /**
         * While every Video memory block maintains its own DIRTY flag, used by the Bus cleanMemory() function to
         * quickly determine if anything changed within a given block, we supplement that information at the Card level
         * in certain memory controller functions that we know are used to modify font data in plane 2.
         *
         * Whenever plane 2 is modified, one of bits 0-7 in bitsDirtyBanks is modified as well, indicating which of
         * the corresponding font "banks" was modified.  The EGA supports only four font banks (0, 2, 4, and 6), while
         * the VGA supports four additional "interleaved" banks (1, 3, 5, and 7).
         *
         * NOTE: Our bank numbers (0-7) should not be confused with EGA INT 10h (AH=11h) "Character Generator Routine"
         * block numbers 0 to 3, which must be multiplied by 2 to obtain the corresponding bank number; VGA block numbers
         * 4 to 7 must also be multiplied by 2 and then reduced by 7 to produce the correct interleaved bank number.
         */
        this.bitsDirtyBanks = 0;
    }

    /**
     * initMemory(data, length)
     *
     * If we're restoring an older MDA or CGA buffer, where 4 bytes were stored in every dword instead of 2, then the
     * final size of adwMemory will be cbMemory >> 2.  Newer MDA and CGA buffers store only 2 bytes in every dword, to
     * make them compatible with their EGA and VGA counterparts, so their final size should be cbMemory >> 1.
     *
     * When we detect the older format, we must convert it to the newer.
     *
     * @this {Card}
     * @param {Array|null} data
     * @param {number} [length]
     */
    initMemory(data, length)
    {
        let cdw = this.cbMemory >> 2;
        this.adwMemory = data;
        if (!this.adwMemory || !this.adwMemory.length) {
            if (!length) length = cdw * 2;
            this.adwMemory = new Array(length);
        }
        else {
            cdw = length || cdw;
            if (this.adwMemory.length < cdw) {
                this.adwMemory = State.decompressEvenOdd(this.adwMemory, cdw);
            }
        }
        if (!length) {
            let adwOld = this.adwMemory;
            let adwNew = new Array(this.adwMemory.length * 2);
            this.video.assert(this.nCard == Videox86.CARD.MDA && adwOld.length == 1024 || this.nCard == Videox86.CARD.CGA && adwOld.length == 4096);
            for (let i = 0, j = 0; i < this.adwMemory.length; i++, j += 2) {
                adwNew[j] = adwOld[i] & 0xffff;
                adwNew[j+1] = (adwOld[i] >> 16) & 0xffff;
            }
            this.adwMemory = adwNew;
        } else {
            this.video.assert(length == this.adwMemory.length);
        }
    }

    /**
     * saveCard()
     *
     * @this {Card}
     * @returns {Array}
     */
    saveCard()
    {
        let data = [];
        if (this.nCard !== undefined) {
            data[0] = this.fActive;
            data[1] = this.regMode;
            data[2] = this.regColor;
            data[3] = this.regStatus;
            data[4] = this.regCRTIndx | (this.regCRTPrev << 8);
            data[5] = this.regCRTData;
            data[6] = (this.nCard < Videox86.CARD.EGA? State.compressEvenOdd(this.adwMemory) : this.saveEGA());
            data[7] = this.nCyclesVertRetrace;
            data[8] = this.adwMemory.length;
        }
        return data;
    }

    /**
     * saveEGA()
     *
     * @this {Card}
     * @returns {Array}
     */
    saveEGA()
    {
        let data = [];
        data[0]  = this.fATCData;
        data[1]  = this.regATCIndx;
        data[2]  = this.regATCData;
        data[3]  = this.regStatus0;
        data[4]  = this.regMisc;
        data[5]  = this.regFeat;
        data[6]  = this.regSEQIndx;
        data[7]  = this.regSEQData;
        data[8]  = this.regGRCPos1;
        data[9]  = this.regGRCPos2;
        data[10] = this.regGRCIndx;
        data[11] = this.regGRCData;
        data[12] = this.latches;
        data[13] = [this.addrBuffer, this.sizeBuffer, this.cbMemory];
        data[14] = State.compressEvenOdd(this.adwMemory);
        data[15] = this.nAccess | Card.V2;
        data[16] = this.nReadMapShift;
        data[17] = this.nSeqMapMask;
        data[18] = this.nDataRotate;
        data[19] = this.nBitMapMask;
        data[20] = this.nSetMapData;
        data[21] = this.nSetMapMask;
        data[22] = this.nSetMapBits;
        data[23] = this.nColorCompare;
        data[24] = this.nColorDontCare;
        data[25] = this.offStart;

        if (this.nCard == Videox86.CARD.VGA) {
            data[26] = this.regVGAEnable;
            data[27] = this.regDACMask;
            data[28] = this.regDACAddr;
            data[29] = this.regDACShift;
            data[30] = this.regDACState;
            data[31] = this.regDACData;
        }
        return data;
    }

    /**
     * dumpRegs()
     *
     * Since we don't pre-allocate the register arrays (eg, ATC, CRTC, GRC, etc) on a Card, we can't
     * rely on their array length, so we instead rely on the number of register names supplied in asRegs.
     *
     * @this {Card}
     * @param {string} sName
     * @param {number} iReg
     * @param {Array} [aRegs]
     * @param {Array} [asRegs]
     */
    dumpRegs(sName, iReg, aRegs, asRegs)
    {
        if (DEBUGGER) {
            if (!aRegs) {
                this.dbg.printf("%s: %02X\n", sName, iReg);
                return;
            }
            let i, s = "";
            let nRegs = (asRegs? asRegs.length : aRegs.length);
            for (i = 0; i < nRegs; i++) {
                /**
                 * In the case of the CRTC, we call the helper function getCRTCReg() to automatically concatenate
                 * the extended bits of certain registers, so that we don't have to "mentally" concatenate them.
                 */
                let reg = (aRegs === this.regCRTData)? this.getCRTCReg(i) : aRegs[i];
                let sRegName = (asRegs? asRegs[i] : sName.substr(1) + StrLib.toDec(i, 3));
                s += StrLib.sprintf("%s[%02X]: %-12s %*X%s (%*d)\n", sName, i, sRegName, (asRegs? 4 : 6), reg, (i === iReg? '*' : ' '), (asRegs? 4 : 6), reg);
            }
            this.dbg.printf("%s", s);
        }
    }

    /**
     * dumpVideoCard()
     *
     * @this {Card}
     */
    dumpVideoCard()
    {
        if (DEBUGGER) {
            /**
             * Start with registers that are common to all cards....
             */
            this.dumpRegs("CRTC", this.regCRTIndx, this.regCRTData, this.asCRTCRegs);

            if (this.nCard >= Videox86.CARD.EGA) {
                this.dumpRegs(" GRC", this.regGRCIndx, this.regGRCData, this.asGRCRegs);
                this.dumpRegs(" SEQ", this.regSEQIndx, this.regSEQData, this.asSEQRegs);
                this.dumpRegs(" ATC", this.regATCIndx, this.regATCData, this.asATCRegs);
                this.dumpRegs(" ATCINDX", this.regATCIndx);
                this.dbg.printf(" ATCDATA: %b\n", this.fATCData);
                this.dumpRegs("    FEAT", this.regFeat);
                this.dumpRegs("    MISC", this.regMisc);
                this.dumpRegs(" STATUS0", this.regStatus0);
                /**
                 * There are few more EGA regs we could dump, like GRCPos1, GRCPos2, but does anyone care?
                 */
                if (this.nCard == Videox86.CARD.VGA) {
                    this.dumpRegs(" DAC", this.regDACAddr, this.regDACData);
                }
            }

            /**
             * TODO: This simply dumps the last value read from the STATUS1 register, not necessarily
             * its current state; consider dumping getRetraceBits() instead of (or in addition to) this.
             */
            this.dumpRegs(" STATUS1", this.regStatus);

            if (this.nCard == Videox86.CARD.MDA || this.nCard == Videox86.CARD.CGA) {
                this.dumpRegs(" MODEREG", this.regMode);
            }

            if (this.nCard == Videox86.CARD.CGA) {
                this.dumpRegs("   COLOR", this.regColor);
            }

            if (this.nCard >= Videox86.CARD.EGA) {
                this.dbg.printf(" LATCHES: %0X\n", this.latches);
                this.dbg.printf("  ACCESS: %04X\n",  this.nAccess);
                this.dbg.printf("  PLANE2: %02X\n", this.bitsDirtyBanks);
                this.dbg.printf("Use 'd video [addr]' to dump video memory\n");
                /**
                 * There are few more EGA regs we could dump, like GRCPos1, GRCPos2, but does anyone care?
                 */
            }
        }
    }

    /**
     * dumpVideoBuffer(asArgs)
     *
     * Rather than requiring the first parameter to ALWAYS be a frame buffer address OR a frame buffer
     * offset, we'll just make a guess as to what the user intended and support BOTH; basically, if the
     * value is less than the frame buffer address, we'll assume it's an offset.
     *
     * Also, we allow some special options to be encoded in asArgs: 'l' followed by a number means
     * print that many rows of data.  'n' followed by a number (1-8) means print only that number of
     * memory locations per row, and then adjust the starting address of the next row by the number
     * of bytes per row (or whatever is specified by the 'w' option) so that the dump reflects a
     * rectangular chunk of video data.  Finally, if asArgs contains 'p' followed by a number (0-3),
     * we display only the bits from that plane for each memory location, in binary instead of hex.
     *
     * For example, assuming a standard VGA frame buffer with 640x480 pixels across 38400 (0x9600) memory
     * locations, the following command will dump a vertical swath of bits from plane 0 that is 32 (0x20)
     * rows tall and 8 columns wide, from roughly the center of the screen (0x4B00 + 0x28 - 2 = 0x4B26).
     *
     *      d video 4b26 l20 n8 p0
     *
     * Subsequent commands that omit a starting address or offset will continue where the last dump
     * left off; eg:
     *
     *      d video n8 p0
     *
     * To dump a chunk of off-screen memory starting at 0x9600, where the Windows VGA driver typically
     * stores a copy of the video memory containing the current mouse pointer:
     *
     *      d video 9600 l20 n5 w5 p0
     *
     * Alternatively, you could use decimal values:
     *
     *      d video 9600 l32. n5. w5. p0.
     *
     * NOTE: If these commands look suspiciously like weird Hayes modem command strings, trust me,
     * that is ENTIRELY coincidental (but mildly amusing).
     *
     * TODO: Make these options more general-purpose (it currently assumes a conventional VGA planar layout).
     *
     * @this {Card}
     * @param {Array.<string>} asArgs (all numeric arguments default to base 16 unless otherwise specified)
     */
    dumpVideoBuffer(asArgs)
    {
        if (DEBUGGER) {
            if (!this.adwMemory) {
                this.dbg.printf("no buffer\n");
                return;
            }

            let i, j, idw, fColAdjust = false;
            let l = 8, n = 8, p = -1, w = this.video.nCols >> 3;

            for (i = 0; i < asArgs.length; i++) {

                let s = asArgs[i];
                if (!i) {
                    idw = StrLib.parseInt(s, 16);
                    continue;
                }

                let ch = s.charAt(0);
                j = StrLib.parseInt(s.substr(1), 16);

                switch(ch) {
                case 'l':
                    l = j;
                    break;
                case 'n':
                    if (j >= 1 && j <= 8) {
                        n = j;
                        fColAdjust = true;
                    }
                    break;
                case 'p':
                    if (j >= 0 && j <= 3) p = j;
                    break;
                case 'w':
                    if (j < w) w = j;
                    break;
                default:
                    this.dbg.printf("unrecognized argument: %s\n", s);
                    break;
                }
            }

            if (idw === undefined) {
                idw = this.prevDump || 0;
            } else if (idw >= this.addrBuffer) {
                idw -= this.addrBuffer;
            }

            let sDump = "";
            for (i = 0; i < l; i++) {
                let sData = StrLib.toHex(this.addrBuffer + idw) + ":";
                for (j = 0; j < n && idw < this.adwMemory.length; j++) {
                    let dw = this.adwMemory[idw++];
                    sData += ' ' + ((p < 0)? StrLib.toHex(dw, 8) : StrLib.toBin((dw >> (p << 3)), 8));
                }
                if (fColAdjust) idw += w - n;
                sDump += sData + "\n";
            }

            if (sDump) this.dbg.print(sDump);
            this.prevDump = idw;
        }
    }

    /**
     * getMemoryBuffer(addr)
     *
     * If we passed a controller object (ie, this card) to addMemory(), then each allocated Memory block
     * will call this function to obtain a buffer.
     *
     * @this {Card}
     * @param {number} addr
     * @returns {Array} containing the buffer (and the offset within that buffer that corresponds to the requested block)
     */
    getMemoryBuffer(addr)
    {
        return [this.adwMemory, addr - this.addrBuffer];
    }

    /**
     * getMemoryAccess()
     *
     * WARNING: This is a public method, whereas most Card methods are private to the Video component;
     * because a Card also acts as a Memory controller, it must provide getMemoryAccess() to the Memory component.
     *
     * Return the last set of memory access functions recorded by setMemoryAccess().
     *
     * @this {Card}
     * @returns {Array.<function()>}
     */
    getMemoryAccess()
    {
        return this.afnAccess;
    }

    /**
     * setMemoryAccess(nAccess)
     *
     * This transforms the memory access value that getCardAccess() returns into the best available set of
     * memory access functions, which are then returned via getMemoryAccess() to any memory blocks we allocate
     * or modify.
     *
     * @this {Card}
     * @param {number|undefined} nAccess
     */
    setMemoryAccess(nAccess)
    {
        if (nAccess != null && nAccess != this.nAccess) {

            let nReadAccess = nAccess & Card.READ.MASK;
            let fnReadByte = Card.FUNCS[nReadAccess];
            if (!fnReadByte) {
                if (DEBUG && this.dbg) {
                    this.dbg.printf(MESSAGE.VIDEO, "Card.setMemoryAccess(%#06x): missing readByte handler", nAccess);
                    /**
                     * I've taken a look, and the cases I've seen so far stem from the order in which the IBM VGA BIOS
                     * reprograms registers during a mode change: it reprograms the Sequencer registers BEFORE the Graphics
                     * Controller registers, so if GRC.MODE was set to READ.MODE1 prior to the mode change and the new mode
                     * clears SEQ.MEMMODE.SEQUENTIAL, we will briefly be in an "odd" (unsupported) state.
                     *
                     * This didn't used to occur when we relied on the GRC.MODE register instead of the SEQ.MEMMODE for
                     * determining the EVENODD state.  But, as explained in getCardAccess(), we've run into inconsistencies in
                     * how GRC.MODE.EVENODD is programmed, so we must live with this warning.
                     *
                     * The ultimate solution is to provide a EVENODD handler for READ.MODE1, since there is the remote
                     * possibility of third-party software that relies on that "odd" combination.
                     *
                     *      this.dbg.stopCPU();     // let's take a look
                     */
                }
                if (nReadAccess & Card.READ.EVENODD) {
                    fnReadByte = Card.FUNCS[Card.READ.EVENODD];
                }
            }
            let nWriteAccess = nAccess & Card.WRITE.MASK;
            let fnWriteByte = Card.FUNCS[nWriteAccess];
            if (!fnWriteByte) {
                if (DEBUG && this.dbg) {
                    this.dbg.printf(MESSAGE.VIDEO, "Card.setMemoryAccess(%#06x): missing writeByte handler", nAccess);
                    /**
                     * I've taken a look, and the cases I've seen so far stem from the order in which the IBM VGA BIOS
                     * reprograms registers during a mode change: it reprograms the Sequencer registers BEFORE the Graphics
                     * Controller registers, so if GRC.MODE was set to WRITE.MODE2 prior to the mode change and the new mode
                     * clears SEQ.MEMMODE.SEQUENTIAL, we will briefly be in an "odd" (unsupported) state.
                     *
                     * This didn't used to occur when we relied on the GRC.MODE register instead of the SEQ.MEMMODE for
                     * determining the EVENODD state.  But, as explained in getCardAccess(), we've run into inconsistencies in
                     * how GRC.MODE.EVENODD is programmed, so we must live with this warning.
                     *
                     * The ultimate solution is to provide EVENODD handlers for all modes other than WRITE.MODE0, since there
                     * is the remote possibility of third-party software that relies on one of those "odd" combinations.
                     *
                     *      this.dbg.stopCPU();     // let's take a look
                     */
                }
                if (nWriteAccess & Card.WRITE.EVENODD) {
                    fnWriteByte = Card.FUNCS[Card.WRITE.EVENODD];
                }
            }
            if (!this.afnAccess) this.afnAccess = new Array(6);
            this.afnAccess[0] = fnReadByte;
            this.afnAccess[1] = fnWriteByte;
            this.nAccess = nAccess;
        }
    }

    /**
     * getCRTCReg()
     *
     * @this {Card}
     * @param {number} iReg
     * @returns {number}
     */
    getCRTCReg(iReg)
    {
        let reg = this.regCRTData[iReg];
        if (reg != null && this.nCard >= Videox86.CARD.EGA) {
            let bOverflowBit8 = 0, bOverflowBit9 = 0, bMaxScanBit9 = 0;
            switch(iReg) {
            case Card.CRTC.EGA.VTOTAL:              // 0x06
                bOverflowBit8 = Card.CRTC.EGA.OVERFLOW.VTOTAL_BIT8;         // 0x01
                if (this.nCard == Videox86.CARD.VGA) bOverflowBit9 = Card.CRTC.EGA.OVERFLOW.VTOTAL_BIT9;
                break;
            case Card.CRTC.EGA.CURSCAN:             // 0x0A
                if (this.nCard == Videox86.CARD.EGA) bOverflowBit8 = Card.CRTC.EGA.OVERFLOW.CURSCAN_BIT8;
                break;
            case Card.CRTC.EGA.VRSTART:             // 0x10
                bOverflowBit8 = Card.CRTC.EGA.OVERFLOW.VRSTART_BIT8;        // 0x04
                if (this.nCard == Videox86.CARD.VGA) bOverflowBit9 = Card.CRTC.EGA.OVERFLOW.VRSTART_BIT9;
                break;
            case Card.CRTC.EGA.VDEND:               // 0x12
                bOverflowBit8 = Card.CRTC.EGA.OVERFLOW.VDEND_BIT8;          // 0x02
                if (this.nCard == Videox86.CARD.VGA) bOverflowBit9 = Card.CRTC.EGA.OVERFLOW.VDEND_BIT9;
                break;
            case Card.CRTC.EGA.VBSTART:             // 0x15
                bOverflowBit8 = Card.CRTC.EGA.OVERFLOW.VBSTART_BIT8;        // 0x08
                if (this.nCard == Videox86.CARD.VGA) bMaxScanBit9 = Card.CRTC.EGA.MAXSCAN.VBSTART_BIT9;
                break;
            case Card.CRTC.EGA.LINECOMP:            // 0x18
                bOverflowBit8 = Card.CRTC.EGA.OVERFLOW.LINECOMP_BIT8;       // 0x10
                if (this.nCard == Videox86.CARD.VGA) bMaxScanBit9 = Card.CRTC.EGA.MAXSCAN.LINECOMP_BIT9;
                break;
            }
            if (bOverflowBit8) {
                reg |= ((this.regCRTData[Card.CRTC.EGA.OVERFLOW.INDX] & bOverflowBit8)? 0x100 : 0);
                reg |= ((this.regCRTData[Card.CRTC.EGA.OVERFLOW.INDX] & bOverflowBit9)? 0x200 : 0);
                reg |= ((this.regCRTData[Card.CRTC.EGA.MAXSCAN.INDX] & bMaxScanBit9)? 0x200 : 0);
            }
        }
        return reg;
    }

    /**
     * readBytePairs(off, addr)
     *
     * Used for MDA/CGA byte-pair access (ie, pairs of bytes stored in a single dword).
     *
     * Externally, this makes the buffer look like a linear series of byte pairs, perfect for emulating MDA and CGA
     * character/attribute text modes, while internally, it looks similar to an EvenOdd arrangement, except that odd
     * dwords not skipped (ie, wasted).  This similarity makes life simpler for updateScreenText().
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} [addr]
     * @returns {number}
     */
    static readBytePairs(off, addr)
    {
        off += this.offset;
        return ((this.adw[off >> 1] >>> ((off & 0x1) << 3)) & 0xff);
    }

    /**
     * readByteMode0(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} [addr]
     * @returns {number}
     */
    static readByteMode0(off, addr)
    {
        off += this.offset;
        let dw = this.controller.latches = this.adw[off];
        return (dw >> this.controller.nReadMapShift) & 0xff;
    }

    /**
     * readByteMode0Chain4(off, addr)
     *
     * See writeByteMode0Chain4 for a description of how writes are distributed across planes.
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} [addr]
     * @returns {number}
     */
    static readByteMode0Chain4(off, addr)
    {
        let idw = (off & ~0x3) + this.offset;
        let shift = (off & 0x3) << 3;
        return ((this.controller.latches = this.adw[idw]) >> shift) & 0xff;
    }

    /**
     * readByteMode0EvenOdd(off, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} [addr]
     * @returns {number}
     */
    static readByteMode0EvenOdd(off, addr)
    {
        /**
         * TODO: As discussed in getCardAccess(), we need to run some tests on real EGA/VGA hardware to determine
         * exactly what gets latched (ie, from which address) when EVENODD is in effect.  Whatever we learn may also
         * dictate a special EVENODD function for READ.MODE1 as well.
         */
        let idw = (off += this.offset) & ~0x1;
        let dw = this.controller.latches = this.adw[idw];
        return (!(off & 1)? dw : (dw >> 8)) & 0xff;
    }

    /**
     * readByteMode1(off, addr)
     *
     * This mode requires us to step through each of the 8 sets of 4 bits in the specified DWORD of video memory,
     * returning a 1 wherever all 4 match the Color Compare (COLORCOMP) Register and a 0 otherwise.  An added wrinkle
     * is that the Color Don't Care (COLORDC) Register can specify that any/all/none of the 4 bits must be ignored.
     *
     * We perform the comparison from most to least significant bit, because that matches how the nColorCompare and
     * nColorDontCare masks are initialized; we could have gone either way, but this is more consistent with the rest
     * of the component (eg, pixels are drawn across the screen from left to right, starting with the most significant
     * bit of each byte).
     *
     * Also note that, while not well-documented, this mode also affects the internal latches, so we make sure those
     * are updated as well.
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} [addr]
     * @returns {number}
     */
    static readByteMode1(off, addr)
    {
        let card = this.controller;
        let dw = card.latches = this.adw[off + this.offset];
        /**
         * Minor optimization: we could pre-mask nColorCompare with nColorDontCare, whenever either register
         * is updated, but that's a drop in the bucket compared to all the other work this function must do.
         */
        let mask = card.nColorDontCare;
        let color = card.nColorCompare & mask;
        let b = 0, bit = 0x80;
        while (bit) {
            if ((dw & mask) == color) b |= bit;
            color >>>= 1;  mask >>>= 1;  bit >>= 1;
        }
        return b;
    }

    /**
     * writeBytePairs(off, b, addr)
     *
     * Used for MDA/CGA byte-pair access (ie, pairs of bytes stored in a single dword).
     *
     * Externally, this makes the buffer look like a linear series of byte pairs, perfect for emulating MDA and CGA
     * character/attribute text modes, while internally, it looks similar to an EvenOdd arrangement, except that odd
     * dwords not skipped (ie, wasted).  This similarity makes life simpler for updateScreenText().
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeBytePairs(off, b, addr)
    {
        off += this.offset;
        let idw = off >> 1;
        let nShift = (off & 0x1) << 3;
        let dw = (this.adw[idw] & ~(0xff << nShift)) | (b << nShift);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
    }

    /**
     * writeByteMode0(off, b, addr)
     *
     * Supporting Set/Reset means that for every plane for which Set/Reset is enabled, we must
     * replace the corresponding byte in dw with a byte of zeros or ones.  This is accomplished with
     * nSetMapMask, nSetMapData, and nSetMapBits.  nSetMapMask is the inverse of the ESRESET bits,
     * because we use it to mask the processor data, nSetMapData records the desired SRESET bits,
     * and nSetMapBits contains the bits to replace those that we masked in the processor data.
     *
     * We could have done this:
     *
     *      dw = (dw & card.nSetMapMask) | (card.nSetMapData & ~card.nSetMapMask)
     *
     * but by maintaining nSetMapBits equal to (nSetMapData & ~nSetMapMask), we are able to make the
     * writes slightly more efficient.
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeByteMode0(off, b, addr)
    {
        let card = this.controller;
        let idw = off + this.offset;
        let dw = b | (b << 8) | (b << 16) | (b << 24);
        dw = (dw & card.nSetMapMask) | card.nSetMapBits;
        dw = (dw & card.nBitMapMask) | (card.latches & ~card.nBitMapMask);
        dw = (dw & card.nSeqMapMask) | (this.adw[idw] & ~card.nSeqMapMask);
        let delta = (this.adw[idw] ^ dw);
        if (delta) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
            // card.bitsDirtyPlanes |= delta;       // we no longer track dirty planes, just dirty font banks
            if (delta & 0x00ff0000) {               // if any plane 2 bits were modified, mark the appropriate font bank dirty
                let bitDirtyBank = (1 << ((idw >> 13) & 7));
                if (!(card.bitsDirtyBanks & bitDirtyBank)) {
                    card.bitsDirtyBanks |= bitDirtyBank;
                    if (DEBUG) card.video.printf(MESSAGE.VIDEO, "writeByteMode0(%#010X): modified font bank %#04X\n", addr, bitDirtyBank);
                }
            }
        }
        if (DEBUG) card.video.printf(MESSAGE.VIDEO + MESSAGE.MEM, "writeByteMode0(%#10X): %#04X -> %#10X\n", addr, b, dw);
    }

    /**
     * writeByteMode0Chain4(off, b, addr)
     *
     * This is how we distribute writes of 0xff across the address space to the planes (assuming that all
     * planes are enabled by the Sequencer's MAPMASK register):
     *
     *      off     idw     adw[idw]
     *      ------  ------  ----------
     *      0x0000: 0x0000  0x000000ff
     *      0x0001: 0x0000  0x0000ff00
     *      0x0002: 0x0000  0x00ff0000
     *      0x0003: 0x0000  0xff000000
     *      0x0004: 0x0004  0x000000ff
     *      0x0005: 0x0004  0x0000ff00
     *      0x0006: 0x0004  0x00ff0000
     *      0x0007: 0x0004  0xff000000
     *      ...
     *
     * Some VGA emulations calculate the video buffer index (idw) by shifting the offset (off) right 2 bits,
     * instead of simply masking off the low 2 bits, as we do here.  That would be a more "pleasing" arrangement,
     * because we would be using sequential video buffer locations, instead of multiples of 4, and would match how
     * pixels are stored in "Mode X".  However, I don't think that's how CHAIN4 modes operate (although that still
     * needs to be confirmed, because multiple sources conflict on this point).  TODO: Confirm CHAIN4 operation on
     * actual VGA hardware, including the extent to which ALU and other writeByteMode0() functionality needs to
     * be folded into this.
     *
     * Address decoding may not matter that much, as long as both the read and write CHAIN4 functions decode their
     * addresses in exactly the same manner; we'd only get into trouble with software that "unchained" or otherwise
     * reconfigured the planes and then made assumptions about existing data in the video buffer.
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeByteMode0Chain4(off, b, addr)
    {
        let card = this.controller;
        let idw = (off & ~0x3) + this.offset;
        let shift = (off & 0x3) << 3;
        /**
         * TODO: Consider adding a separate "unmasked" version of this CHAIN4 write function when nSeqMapMask is -1
         * (or removing nSeqMapMask from the equation altogether, if CHAIN4 is never used with any planes disabled).
         */
        let dw = ((b << shift) & card.nSeqMapMask) | (this.adw[idw] & ~((0xff << shift) & card.nSeqMapMask));
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode0Chain4(%#010X): %#04X -> %#010X\n", addr, b, dw);
    }

    /**
     * writeByteMode0EvenOdd(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeByteMode0EvenOdd(off, b, addr)
    {
        let card = this.controller;
        let idw = (off += this.offset) & ~0x1;
        let dw = b | (b << 8) | (b << 16) | (b << 24);
        /**
         * When even/odd addressing is enabled, nSeqMapMask must be cleared for planes 1
         * and 3 if the address is even, and cleared for planes 0 and 2 if the address is odd.
         */
        dw = (dw & card.nBitMapMask) | (card.latches & ~card.nBitMapMask);
        let maskMaps = card.nSeqMapMask & (idw == off? 0x00ff00ff : (0xff00ff00|0));
        dw = (dw & maskMaps) | (this.adw[idw] & ~maskMaps);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode0EvenOdd(%#010X): %#04X -> %#010X\n", addr, b, dw);
    }

    /**
     * writeByteMode0Rot(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeByteMode0Rot(off, b, addr)
    {
        let card = this.controller;
        let idw = off + this.offset;
        b = ((b >> card.nDataRotate) | (b << (8 - card.nDataRotate)) & 0xff);
        let dw = b | (b << 8) | (b << 16) | (b << 24);
        dw = (dw & card.nSetMapMask) | card.nSetMapBits;
        dw = (dw & card.nBitMapMask) | (card.latches & ~card.nBitMapMask);
        dw = (dw & card.nSeqMapMask) | (this.adw[idw] & ~card.nSeqMapMask);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode0Rot(%#010X): %#04X -> %#010X\n", addr, b, dw);
    }

    /**
     * writeByteMode0And(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeByteMode0And(off, b, addr)
    {
        let card = this.controller;
        let idw = off + this.offset;
        b = ((b >> card.nDataRotate) | (b << (8 - card.nDataRotate)) & 0xff);
        let dw = b | (b << 8) | (b << 16) | (b << 24);
        dw = (dw & card.nSetMapMask) | card.nSetMapBits;
        dw &= card.latches;
        dw = (dw & card.nBitMapMask) | (card.latches & ~card.nBitMapMask);
        dw = (dw & card.nSeqMapMask) | (this.adw[idw] & ~card.nSeqMapMask);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode0And(%#010X): %#04X -> %#010X\n", addr, b, dw);
    }

    /**
     * writeByteMode0Or(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeByteMode0Or(off, b, addr)
    {
        let card = this.controller;
        let idw = off + this.offset;
        b = ((b >> card.nDataRotate) | (b << (8 - card.nDataRotate)) & 0xff);
        let dw = b | (b << 8) | (b << 16) | (b << 24);
        dw = (dw & card.nSetMapMask) | card.nSetMapBits;
        dw |= card.latches;
        dw = (dw & card.nBitMapMask) | (card.latches & ~card.nBitMapMask);
        dw = (dw & card.nSeqMapMask) | (this.adw[idw] & ~card.nSeqMapMask);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode0Or(%#010X): %#04X -> %#010X\n", addr, b, dw);
    }

    /**
     * writeByteMode0Xor(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeByteMode0Xor(off, b, addr)
    {
        let card = this.controller;
        let idw = off + this.offset;
        b = ((b >> card.nDataRotate) | (b << (8 - card.nDataRotate)) & 0xff);
        let dw = b | (b << 8) | (b << 16) | (b << 24);
        dw = (dw & card.nSetMapMask) | card.nSetMapBits;
        dw ^= card.latches;
        dw = (dw & card.nBitMapMask) | (card.latches & ~card.nBitMapMask);
        dw = (dw & card.nSeqMapMask) | (this.adw[idw] & ~card.nSeqMapMask);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode0Xor(%#010X): %#04X -> %#010X\n", addr, b, dw);
    }

    /**
     * writeByteMode1(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (ignored; the EGA latches provide the source data)
     * @param {number} [addr]
     */
    static writeByteMode1(off, b, addr)
    {
        let card = this.controller;
        let idw = off + this.offset;
        let dw = (this.adw[idw] & ~card.nSeqMapMask) | (card.latches & card.nSeqMapMask);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode1(%#010X): %#010X\n", addr, dw);
    }

    /**
     * writeByteMode1EvenOdd(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (ignored; the EGA latches provide the source data)
     * @param {number} [addr]
     */
    static writeByteMode1EvenOdd(off, b, addr)
    {
        /**
         * When even/odd addressing is enabled, nSeqMapMask must be cleared for planes 1 and 3 if the
         * address is even, and cleared for planes 0 and 2 if the address is odd.
         *
         * TODO: As discussed in getCardAccess(), we need to run some tests on real EGA/VGA hardware to
         * determine exactly where latches are written (ie, to which address) when EVENODD is in effect.
         */
        let card = this.controller;
        let idw = (off += this.offset) & ~0x1;
        let maskMaps = card.nSeqMapMask & (idw == off? 0x00ff00ff : (0xff00ff00|0));
        let dw = (this.adw[idw] & ~maskMaps) | (card.latches & maskMaps);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode1EvenOdd(%#010X): %#010X\n", addr, dw);
    }

    /**
     * writeByteMode2(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeByteMode2(off, b, addr)
    {
        let card = this.controller;
        let idw = off + this.offset;
        let dw = Videox86.aEGAByteToDW[b & 0xf];
        dw = (dw & card.nBitMapMask) | (card.latches & ~card.nBitMapMask);
        dw = (dw & card.nSeqMapMask) | (this.adw[idw] & ~card.nSeqMapMask);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode2(%#010X): %#04X -> %#010X\n", addr, b, dw);
    }

    /**
     * writeByteMode2And(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeByteMode2And(off, b, addr)
    {
        let card = this.controller;
        let idw = off + this.offset;
        let dw = Videox86.aEGAByteToDW[b & 0xf];
        dw &= card.latches;
        dw = (dw & card.nBitMapMask) | (card.latches & ~card.nBitMapMask);
        dw = (dw & card.nSeqMapMask) | (this.adw[idw] & ~card.nSeqMapMask);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode2And(%#010X): %#04X -> %#010X\n", addr, b, dw);
    }

    /**
     * writeByteMode2Or(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeByteMode2Or(off, b, addr)
    {
        let card = this.controller;
        let idw = off + this.offset;
        let dw = Videox86.aEGAByteToDW[b & 0xf];
        dw |= card.latches;
        dw = (dw & card.nBitMapMask) | (card.latches & ~card.nBitMapMask);
        dw = (dw & card.nSeqMapMask) | (this.adw[idw] & ~card.nSeqMapMask);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode2Or(%#010X): %#04X -> %#010X\n", addr, b, dw);
    }

    /**
     * writeByteMode2Xor(off, b, addr)
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeByteMode2Xor(off, b, addr)
    {
        let card = this.controller;
        let idw = off + this.offset;
        let dw = Videox86.aEGAByteToDW[b & 0xf];
        dw ^= card.latches;
        dw = (dw & card.nBitMapMask) | (card.latches & ~card.nBitMapMask);
        dw = (dw & card.nSeqMapMask) | (this.adw[idw] & ~card.nSeqMapMask);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode2Xor(%#010X): %#04X -> %#010X\n", addr, b, dw);
    }

    /**
     * writeByteMode3(off, b, addr)
     *
     * In MODE3, Set/Reset is always enabled, so the ESRESET bits (and therefore nSetMapMask and nSetMapBits)
     * are ignored; we look only at the SRESET bits, which are stored in nSetMapData.
     *
     * Unlike MODE0, we currently have no non-rotate function for MODE3.  If performance dictates, we can add one;
     * ditto for other features like the Sequencer's MAPMASK register (nSeqMapMask).
     *
     * @this {Memoryx86}
     * @param {number} off
     * @param {number} b (which should already be pre-masked to 8 bits; see cpu.setByte())
     * @param {number} [addr]
     */
    static writeByteMode3(off, b, addr)
    {
        let card = this.controller;
        let idw = off + this.offset;
        b = ((b >> card.nDataRotate) | (b << (8 - card.nDataRotate)) & 0xff);
        let dw = b | (b << 8) | (b << 16) | (b << 24);
        let dwMask = (dw & card.nBitMapMask);
        dw = (card.nSetMapData & dwMask) | (card.latches & ~dwMask);
        dw = (dw & card.nSeqMapMask) | (this.adw[idw] & ~card.nSeqMapMask);
        if (this.adw[idw] != dw) {
            this.adw[idw] = dw;
            this.flags |= Memoryx86.FLAGS.DIRTY;
        }
        if (DEBUG) card.video.printf(MESSAGE.MEM + MESSAGE.VIDEO, "writeByteMode3(%#010X): %#04X -> %#010X\n", addr, b, dw);
    }

    /**
     * Values returned by getCardAccess(); the high byte describes the read mode, and the low byte describes the write mode.
     *
     * V2 should never appear in any values used by getCardAccess() or setCardAccess(); the sole purpose of V2 is to
     * distinguish newer (V2) access values from older (V1) access values in saved contexts.  It's set when the context
     * is saved, and cleared when the context is restored.  Thus, if V2 is not set on restore, we assume we're dealing with
     * a V1 value, so we run it through the V1 table (below) to produce a V2 value.  Hopefully at some point V1 contexts
     * can be deprecated, and the V2 bit can be eliminated/repurposed.
     */
    static READ = {                     // READ values are designed to be OR'ed with WRITE values
        MODE0:      0x0400,
        MODE1:      0x0500,
        PAIRS:      0x0800,
        EVENODD:    0x1000,
        CHAIN4:     0x4000,
        MASK:       0xFF00
    };

    static WRITE = {                    // and WRITE values are designed to be OR'ed with READ values
        MODE0:      0x0000,
        MODE1:      0x0001,
        MODE2:      0x0002,
        MODE3:      0x0003,             // VGA only
        CHAIN4:     0x0004,
        PAIRS:      0x0008,
        EVENODD:    0x0010,
        ROT:        0x0020,
        AND:        0x0060,
        OR:         0x00A0,
        XOR:        0x00E0,
        MASK:       0x00FF
    };

    /**
     * Table of older (V1) access values and their corresponding new values; the new values are similar but more orthogonal
     */
    static V1 = {
        0x0002: Card.READ.MODE0,
        0x0003: Card.READ.MODE0  | Card.READ.EVENODD,
        0x0010: Card.READ.MODE1,
        0x0200: Card.WRITE.MODE0,
        0x0400: Card.WRITE.MODE0 | Card.WRITE.ROT,
        0x0600: Card.WRITE.MODE0 | Card.WRITE.AND,
        0x0A00: Card.WRITE.MODE0 | Card.WRITE.OR,
        0x0E00: Card.WRITE.MODE0 | Card.WRITE.XOR,
        0x0300: Card.WRITE.MODE0 | Card.WRITE.EVENODD,
        0x1000: Card.WRITE.MODE1,
        0x2000: Card.WRITE.MODE2,
        0x6000: Card.WRITE.MODE2 | Card.WRITE.AND,
        0xA000: Card.WRITE.MODE2 | Card.WRITE.OR,
        0xE000: Card.WRITE.MODE2 | Card.WRITE.XOR
    };

    static V2 = (0x80000000|0);         // this is a signature bit used ONLY to differentiate V2 access values from V1

    /**
     * Mappings from getCardAccess() values to access functions above
     */
    static FUNCS = {
        [Card.READ.MODE0]:                          Card.readByteMode0,
        [Card.READ.MODE0  | Card.READ.CHAIN4]:      Card.readByteMode0Chain4,
        [Card.READ.MODE0  | Card.READ.EVENODD]:     Card.readByteMode0EvenOdd,
        [Card.READ.MODE1]:                          Card.readByteMode1,
        [Card.READ.PAIRS]:                          Card.readBytePairs,
        [Card.WRITE.MODE0]:                         Card.writeByteMode0,
        [Card.WRITE.MODE0 | Card.WRITE.ROT]:        Card.writeByteMode0Rot,
        [Card.WRITE.MODE0 | Card.WRITE.AND]:        Card.writeByteMode0And,
        [Card.WRITE.MODE0 | Card.WRITE.OR]:         Card.writeByteMode0Or,
        [Card.WRITE.MODE0 | Card.WRITE.XOR]:        Card.writeByteMode0Xor,
        [Card.WRITE.MODE0 | Card.WRITE.CHAIN4]:     Card.writeByteMode0Chain4,
        [Card.WRITE.MODE0 | Card.WRITE.EVENODD]:    Card.writeByteMode0EvenOdd,
        [Card.WRITE.MODE1]:                         Card.writeByteMode1,
        [Card.WRITE.MODE1 | Card.WRITE.EVENODD]:    Card.writeByteMode1EvenOdd,
        [Card.WRITE.MODE2]:                         Card.writeByteMode2,
        [Card.WRITE.MODE2 | Card.WRITE.AND]:        Card.writeByteMode2And,
        [Card.WRITE.MODE2 | Card.WRITE.OR]:         Card.writeByteMode2Or,
        [Card.WRITE.MODE2 | Card.WRITE.XOR]:        Card.writeByteMode2Xor,
        [Card.WRITE.MODE3]:                         Card.writeByteMode3,
        [Card.WRITE.PAIRS]:                         Card.writeBytePairs
    };
}

if (DEBUGGER) {
    Card.CRTC.REGS = [
        "HTOTAL","HDISP","HSPOS","HSWIDTH","VTOTAL","VTOTADJ",
        "VDISP","VSPOS","ILMODE","MAXSCAN","CURSCAN","CURSCANB",
        "STARTHI","STARTLO","CURSORHI","CURSORLO","PENHI","PENLO"
    ];
    Card.CRTC.EGA_REGS = [
        "HTOTAL","HDEND","HBSTART","HBEND","HRSTART","HREND",
        "VTOTAL","OVERFLOW","PRESCAN","MAXSCAN","CURSCAN","CURSCANB",
        "STARTHI","STARTLO","CURSORHI","CURSORLO","VRSTART","VREND",
        "VDEND","OFFSET","UNDERLINE","VBSTART","VBEND","MODECTRL","LINECOMP"
    ];
    Card.ATC.REGS = [
        "ATC00","ATC01","ATC02","ATC03","ATC04","ATC05","ATC06","ATC07",
        "ATC08","ATC09","ATC0A","ATC0B","ATC0C","ATC0D","ATC0E","ATC0F",
        "ATCMODE","OVERSCAN","PLANES","HPAN","COLORSEL"
    ];
    Card.SEQ.REGS = [
        "RESET","CLKMODE","MAPMASK","CHARMAP","MEMMODE"
    ];
    Card.GRC.REGS = [
        "SRESET","ESRESET","COLORCOMP","DATAROT","READMAP","GRCMODE","GRCMISC","COLORDC","BITMASK"
    ];
}

/**
 * @typedef {Object} Font
 * @property {number} cxChar
 * @property {number} cyChar
 * @property {number} cxCell
 * @property {number} cyCell
 * @property {Array} aCSSColors
 * @property {Array} aRGBColors
 * @property {Array} aColorMap
 * @property {Array} aCanvas
 */

/**
 * @class Videox86
 * @property {CPUx86} cpu
 * @property {Debuggerx86} dbg
 * @property {number} cUpdates
 * @property {number} msUpdatePrev
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class Videox86 extends Component {

    static TRAPALL = true;      // monitor all I/O by default (not just deltas)

    /**
     * Supported Cards (and associated fonts)
     *
     * These IDs are also used to identify which "slots" in the aFonts[] array contain fonts, which is why
     * there are gaps between the numbers.  The MDA and CGA use a single supplied font, so they will always
     * use font slot 1 or 2, respectively, but the EGA supports up to 4 font "banks", so depending on which
     * bank is being used, font slots 4-7 may be used.  Similarly, the VGA supports up to 8 font "banks",
     * using font slots 8-15.
     *
     * Once we've finished loading the standard 8K font file, aFonts[] should contain at least one of the
     * entries listed below.  For the standard MDA/CGA font ROM, the first (MDA) font resides in the first 4Kb,
     * and the second and third (CGA) fonts reside in the two 2K halves of the second 4Kb.
     *
     * Additional notes from the IBM EGA Manual (p.5):
     *
     *      In alphanumeric modes, characters are formed from one of two ROM (Read Only Memory) character
     *      generators on the adapter. One character generator defines 7x9 characters in a 9x14 character box.
     *      For Enhanced Color Display support, the 9x14 character set is modified to provide an 8x14 character set.
     *      The second character generator defines 7x7 characters in an 8x8 character box. These generators contain
     *      dot patterns for 256 different characters. The character sets are identical to those provided by the
     *      IBM Monochrome Display Adapter and the IBM Color/Graphics Monitor Adapter.
     */
    static CARD = {
        MDA:    1,              // uses 9x14 monochrome font
        CGA:    2,              // uses 8x8 color font
        EGA:    4,              // uses 8x14 color font (by default)
        VGA:    8               // uses 9x16 color font (by default)
    };

    /**
     * Supported Modes
     *
     * Although this component is designed to be a video hardware emulation, not a BIOS simulation, we DO
     * look for changes to the hardware state that correspond to standard BIOS mode settings, so our internal
     * mode setting will normally match the current BIOS mode setting; however, this a debugging convenience,
     * not an attempt to monitor or emulate the BIOS.
     *
     * We do have some BIOS awareness (eg, when loading ROM-based fonts, and some special code to ensure all
     * the BIOS diagnostics pass), but for the most part, we treat the BIOS like any other application code.
     *
     * As we expand support to include more programmable cards like the EGA, it becomes quite easy for the card
     * to enter a "mode" that has no BIOS counterpart (eg, non-standard combinations of video buffer address,
     * memory access modes, fonts, display regions, etc).  Our hardware emulation routines will cope with those
     * situations as best they can (and when they don't, it should be considered a bug if some application is
     * broken as a result), but realistically, our hardware emulation is never likely to be 100% accurate.
     */
    static MODE = {
        CGA_40X25_BW:       0,
        CGA_40X25:          1,
        CGA_80X25_BW:       2,
        CGA_80X25:          3,
        CGA_320X200:        4,
        CGA_320X200_BW:     5,
        CGA_640X200:        6,
        MDA_80X25:          7,
        EGA_320X200:        0x0D,   // mapped at A000:0000, color, 4bpp, planar
        EGA_640X200:        0x0E,   // mapped at A000:0000, color, 4bpp, planar
        EGA_640X350_MONO:   0x0F,   // mapped at A000:0000, mono,  2bpp, planar
        EGA_640X350:        0x10,   // mapped at A000:0000, color, 4bpp, planar
        VGA_640X480_MONO:   0x11,   // mapped at A000:0000, mono,  2bpp, planar
        VGA_640X480:        0x12,   // mapped at A000:0000, color, 4bpp, planar
        VGA_320X200:        0x13,   // mapped at A000:0000, color, 8bpp, linear
        /**
         * The remaining mode identifiers are for internal use only; there is no correlation with any
         * publicly defined BIOS modes, and overlap with any third-party mode numbers is purely coincidental.
         */
        VGA_320X200P:       0x14,   // mapped at A000:0000, color, 8bpp, planar
        VGA_320X240P:       0x15,   // mapped at A000:0000, color, 8bpp, planar ("Mode X")
        VGA_320X400P:       0x16,   // mapped at A000:0000, color, 8bpp, planar
        /**
         * Here's where we might assign additional identifiers to certain unique combinations, like the
         * fTextGraphicsHybrid 320x400 mode that Windows 95 uses (ie, when the buffer is mapped to B800:0000
         * instead of A000:0000 and is configured for text mode access, but graphics are still being displayed
         * from the second half of video memory).
         */
        UNKNOWN:            0xFF
    };

    static UPDATES_PER_SECOND = 60;

    /**
     * Supported Models
     *
     * Each model refers to an array where [0] is the card ID, and [1] is the default mode.
     */
    static MODEL = {
        "mda": [Videox86.CARD.MDA, Videox86.MODE.MDA_80X25],
        "cga": [Videox86.CARD.CGA, Videox86.MODE.CGA_80X25],
        "ega": [Videox86.CARD.EGA, Videox86.MODE.CGA_80X25],
        "vga": [Videox86.CARD.VGA, Videox86.MODE.CGA_80X25]
    };

    /**
     * @type {Object.<MonitorSpecs>}
     */
    static monitorSpecs = {
        /**
         * NOTE: The number of horizontal periods per frame (200) is dictated by the EGA ROM BIOS at C000:03D0.
         */
        [ChipSet.MONITOR.COLOR]: {
            nHorzPeriodsPerSec: 15700,
            nHorzPeriodsPerFrame: 200,
            percentHorzActive: 75,
            percentVertActive: 96
        },
        /**
         * NOTE: The number of horizontal periods per frame (350) is dictated by the EGA ROM BIOS at C000:03D0.
         */
        [ChipSet.MONITOR.MONO]: {
            nHorzPeriodsPerSec: 18432,
            nHorzPeriodsPerFrame: 350,
            percentHorzActive: 75,
            percentVertActive: 96
        },
        /**
         * NOTE: The number of horizontal periods per frame (350) is dictated by the EGA ROM BIOS at C000:03D0.
         */
        [ChipSet.MONITOR.EGACOLOR]: {
            nHorzPeriodsPerSec: 21850,
            nHorzPeriodsPerFrame: 350,
            percentHorzActive: 75,
            percentVertActive: 96
        },
        /**
         * NOTE: The number of horizontal periods per frame (400) is dictated by the IBM VGA ROM code at C000:024A.
         */
        [ChipSet.MONITOR.VGACOLOR]: {
            nHorzPeriodsPerSec: 31500,
            nHorzPeriodsPerFrame: 400,
            percentHorzActive: 85,
            percentVertActive: 83
        }
    };

    /**
     * EGA Miscellaneous ports and SW1-Sw4
     *
     * The Card.MISC.CLOCK_SELECT bits determine which of the EGA board's 4 configuration switches are
     * returned via Card.STATUS0.SWSENSE (when SWSENSE is zero, the switch is closed):
     *
     *      0xC: return SW1
     *      0x8: return SW2
     *      0x4: return SW3
     *      0x0: return SW4
     *
     * These 4 bits are also copied to the byte at 40:88h by the EGA BIOS, where bit 0 is SW1, bit 1 is SW2,
     * bit 2 is SW3 and bit 3 is SW4.  Our switch settings come from bEGASwitches, which in turn comes from
     * sSwitches, which in turn comes from the "switches" property passed to the Video component, if any.
     *
     * As usual, the switch settings are reversed in both direction and sense from the switch settings; the
     * good news, however, is that we can use the parseSwitches() method in the ChipSet component to parse them.
     *
     * The set of valid EGA switch values, after conversion, is stored in the table below.  For each value,
     * there is an array that defines the corresponding monitor type(s) for the EGA adapter and any secondary
     * adapter.  The third value is a boolean indicating whether the EGA is the primary adapter.
     */
    static aEGAMonitorSwitches = {
        0x06: [ChipSet.MONITOR.TV,           ChipSet.MONITOR.MONO,  true],  // "1001"
        0x07: [ChipSet.MONITOR.COLOR,        ChipSet.MONITOR.MONO,  true],  // "0001" [used by 5153 monitor configs]
        0x08: [ChipSet.MONITOR.EGAEMULATION, ChipSet.MONITOR.MONO,  true],  // "1110"
        0x09: [ChipSet.MONITOR.EGACOLOR,     ChipSet.MONITOR.MONO,  true],  // "0110" [used by 5154 monitor configs (default; see bEGASwitches below)]
        0x0a: [ChipSet.MONITOR.MONO,         ChipSet.MONITOR.TV,    true],  // "1010"
        0x0b: [ChipSet.MONITOR.MONO,         ChipSet.MONITOR.COLOR, true],  // "0010" [used by 5151 monitor configs]
        0x00: [ChipSet.MONITOR.TV,           ChipSet.MONITOR.MONO,  false], // "1111"
        0x01: [ChipSet.MONITOR.COLOR,        ChipSet.MONITOR.MONO,  false], // "0111"
        0x02: [ChipSet.MONITOR.EGAEMULATION, ChipSet.MONITOR.MONO,  false], // "1011"
        0x03: [ChipSet.MONITOR.EGACOLOR,     ChipSet.MONITOR.MONO,  false], // "0011"
        0x04: [ChipSet.MONITOR.MONO,         ChipSet.MONITOR.TV,    false], // "1101"
        0x05: [ChipSet.MONITOR.MONO,         ChipSet.MONITOR.COLOR, false]  // "0101"
    };

    /**
     * For each video mode, we need to know the following pieces of information:
     *
     *      0: # of columns (nCols)
     *      1: # of rows (nRows)
     *      2: # points per cell (nPointsPerCell: # of points per cell cache entry)
     *      3: # points per byte (nPointsPerByte: # of points per frame buffer byte)
     *      4: # bytes of visible screen padding, if any (used for CGA graphics modes only)
     *      5: font ID (nFont: undefined if graphics mode)
     *
     * The 3rd entry used to be nCellsPerWord, but it is now nPointsPerCell.  nCols * nRows yields total
     * (viewable) points, and dividing that by nPointsPerCell yields the size of the cell cache (nCellCache).
     *
     * For MDA and CGA modes, a "word" of memory is 16 bits of CPU-addressable data, so by calculating
     * ([0] * [1]) / [2], we obtain the number of words that mode actively displays; for example, the
     * amount of visible memory used by mode 0x04 is (320 * 200) / 4, or 16000.
     *
     * However, for EGA and VGA graphics modes, a "word" of memory is a single element in the video buffer
     * containing 32 bits of pixel data.
     */
    static aModeParms = {                                                                   // Mode
        [Videox86.MODE.CGA_40X25_BW]:        [ 40,  25,  1, 0.5,   0, Videox86.CARD.CGA],   // 0x00
        [Videox86.MODE.CGA_40X25]:           [ 40,  25,  1, 0.5,   0, Videox86.CARD.CGA],   // 0x01
        [Videox86.MODE.CGA_80X25_BW]:        [ 80,  25,  1, 0.5,   0, Videox86.CARD.CGA],   // 0x02
        [Videox86.MODE.CGA_80X25]:           [ 80,  25,  1, 0.5,   0, Videox86.CARD.CGA],   // 0x03
        [Videox86.MODE.CGA_320X200]:         [320, 200,  8,   4, 192],                      // 0x04
        [Videox86.MODE.CGA_320X200_BW]:      [320, 200,  8,   4, 192],                      // 0x05
        [Videox86.MODE.CGA_640X200]:         [640, 200, 16,   8, 192],                      // 0x06
        [Videox86.MODE.MDA_80X25]:           [ 80,  25,  1, 0.5,   0, Videox86.CARD.MDA],   // 0x07
        [Videox86.MODE.EGA_320X200]:         [320, 200,  8,   8],                           // 0x0D
        [Videox86.MODE.EGA_640X200]:         [640, 200,  8,   8],                           // 0x0E
        [Videox86.MODE.EGA_640X350_MONO]:    [640, 350,  8,   8],                           // 0x0F
        [Videox86.MODE.EGA_640X350]:         [640, 350,  8,   8],                           // 0x10
        [Videox86.MODE.VGA_640X480_MONO]:    [640, 480,  8,   8],                           // 0x11
        [Videox86.MODE.VGA_640X480]:         [640, 480,  8,   8],                           // 0x12
        [Videox86.MODE.VGA_320X200]:         [320, 200,  4,   1],                           // 0x13
        [Videox86.MODE.VGA_320X200P]:        [320, 200,  4,   4],                           // 0x14
        [Videox86.MODE.VGA_320X240P]:        [320, 240,  4,   4],                           // 0x15
        [Videox86.MODE.VGA_320X400P]:        [320, 400,  4,   4]                            // 0x16
    };

    /**
     * MDA attribute byte definitions
     *
     * For MDA, only the first eight ATTR definitions are supported; any FGND/BGND value combinations outside that
     * group will be treated as "normal" (ATTR_FGND_WHITE | ATTR_BGND_BLACK).
     *
     * NOTE: Assuming MDA.MODE.BLINK_ENABLE is set (which the ROM BIOS sets by default), ATTR_BGND_BLINK will
     * cause the *foreground* element of the cell to blink, even though it is part of the *background* attribute bits.
     *
     * Regarding blink rate, characters are supposed to blink every 16 vertical frames, which amounts to .26667 blinks
     * per second, assuming a 60Hz vertical refresh rate.  So roughly every 267ms, we need to take care of any blinking
     * characters.  updateScreen() maintains a global count (cBlinkVisible) of blinking characters, to simplify the
     * decision of when to redraw the screen.
     *
     * Here's a "cheat sheet" for attribute byte combinations that the IBM MDA could have supported.  The original (Aug 1981)
     * IBM Tech Ref is very terse and implies that only those marked with * are actually supported.
     *
     *     *0x00: non-display                       ATTR_FGND_BLACK |                    ATTR_BGND_BLACK
     *     *0x01: underline                         ATTR_FGND_ULINE |                    ATTR_BGND_BLACK
     *     *0x07: normal (white on black)           ATTR_FGND_WHITE |                    ATTR_BGND_BLACK
     *    **0x09: bright underline                  ATTR_FGND_ULINE | ATTR_FGND_BRIGHT | ATTR_BGND_BLACK
     *    **0x0F: bold (bright white on black)      ATTR_FGND_WHITE | ATTR_FGND_BRIGHT | ATTR_BGND_BLACK
     *     *0x70: reverse (black on white)          ATTR_FGND_BLACK |                  | ATTR_BGND_WHITE
     *      0x81: blinking underline                ATTR_FGND_ULINE |                  | ATTR_BGND_BLINK (or dim background if blink disabled)
     *    **0x87: blinking normal                   ATTR_FGND_WHITE |                  | ATTR_BGND_BLINK (or dim background if blink disabled)
     *      0x89: blinking bright underline         ATTR_FGND_ULINE | ATTR_FGND_BRIGHT | ATTR_BGND_BLINK (or dim background if blink disabled)
     *    **0x8F: blinking bold                     ATTR_FGND_WHITE | ATTR_FGND_BRIGHT | ATTR_BGND_BLINK (or dim background if blink disabled)
     *    **0xF0: blinking reverse                  ATTR_FGND_WHITE | ATTR_FGND_BRIGHT | ATTR_BGND_BLINK (or bright background if blink disabled)
     *
     * Unsupported attributes reportedly display as "normal" (ATTR_FGND_WHITE | ATTR_BGND_BLACK).  However, precisely which
     * attributes are unsupported on the MDA varies depending on the source.  Some sources (eg, the IBM Tech Ref) imply that
     * only those marked by * are supported, while others (eg, some--but not all--Peter Norton guides) include those marked
     * by **, and still others include ALL the combinations listed above.
     *
     * Furthermore, according to http://www.seasip.info/VintagePC/mda.html:
     *
     *      Attributes 0x00, 0x08, 0x80 and 0x88 display as black space;
     *      Attribute 0x78 displays as dark green on green; depending on the monitor, there may be a green "halo" where the dark and bright bits meet;
     *      Attribute 0xF0 displays as a blinking version of 0x70 if blink enabled, and black on bright green otherwise;
     *      Attribute 0xF8 displays as a blinking version of 0x78 if blink enabled, and as dark green on bright green otherwise.
     *
     * However, I'm rather skeptical about supporting 0x78 and 0xF8, until I see some evidence that "bright black" actually
     * produced dark green on IBM equipment; it also doesn't sound like a combination many people would have used.  I'll probably
     * treat all of 0x08, 0x80 and 0x88 the same as 0x00, only because it seems logical (they're all "black on black" combinations
     * with only BRIGHT and/or BLINK bits set). Beyond that, I'll likely treat any other combination not listed in the above cheat
     * sheet as "normal".
     *
     * All the discrepancies/disagreements I've found are probably due in part to the proliferation of IBM and non-IBM MDA
     * cards, combined with IBM and non-IBM monochrome monitors, and people assuming that their non-IBM card and/or monitor
     * behaved exactly like the original IBM equipment, which probably wasn't true in all cases.
     *
     * I would like to limit my MDA display support to EXACTLY everything that the IBM MDA supported and nothing more, but
     * since there will be combinations that will logically "fall out" unless I specifically exclude them, it's very likely
     * this implementation will end up being a superset.
     *
     * CGA attribute byte definitions simply extend the set of MDA attributes, with the exception of ATTR_FNGD_ULINE,
     * which the CGA can treat only as ATTR_FGND_BLUE.
     */
    static ATTRS = {
        FGND_BLACK:     0x00,
        FGND_ULINE:     0x01,
        FGND_WHITE:     0x07,
        FGND_BRIGHT:    0x08,
        BGND_BLACK:     0x00,
        BGND_WHITE:     0x70,
        BGND_BLINK:     0x80,
        BGND_BRIGHT:    0x80,

        FGND_BLUE:      0x01,
        FGND_GREEN:     0x02,
        FGND_CYAN:      0x03,
        FGND_RED:       0x04,
        FGND_MAGENTA:   0x05,
        FGND_BROWN:     0x06,
        BGND_BLUE:      0x10,
        BGND_GREEN:     0x20,
        BGND_CYAN:      0x30,
        BGND_RED:       0x40,
        BGND_MAGENTA:   0x50,
        BGND_BROWN:     0x60,

        DRAW_FGND:     0x100,   // this is an internal attribute bit, indicating the foreground should be drawn
        DRAW_CURSOR:   0x200    // this is an internal attribute bit, indicating when the cursor should be drawn
    };

    /**
     * For the MDA, there are currently three distinct "colors": off, normal, and intense.  There are
     * also two variations of normal and intense: with and without underlining.  Technically, underlining
     * makes no difference in the actual color, but because different fonts must be built for each, and
     * because the presence of underlining is determined by character's attribute (aka "color") bits, we
     * use separate color indices for each variation; so ODD color indices are used for underlining and
     * EVEN indices are not.
     *
     * I'm still not sure about dark green (see comments above); if it exists on a standard IBM monitor
     * (model 5151), then I may need to support another "color": dark.  For now, the attributes that may
     * require dark (ie, 0x78 and 0xF8) have their foreground attribute (0x8) mapped to 0x0 (off) instead.
     */
    static aMDAColors = [
        [0x00, 0x00, 0x00, 0xff],       // 0: off
        [0x09, 0xcc, 0x50, 0xff],       // 1: normal (with underlining)
        [0x09, 0xcc, 0x50, 0xff],       // 2: normal
        [0x3c, 0xff, 0x83, 0xff],       // 3: intense (with underlining)
        [0x3c, 0xff, 0x83, 0xff]        // 4: intense
    ];

    /**
     * Each of the following FGND attribute values are mapped to one of the above "colors":
     *
     *      0x0: black font (per above, attribute value 0x8 is also mapped to attribute 0x0)
     *      0x1: green font with underlining
     *      0x7: green font without underlining (attribute values 0x2-0x6 are mapped to attribute 0x7)
     *      0x9: bright green font with underlining
     *      0xf: bright green font without underlining (attribute values 0xa-0xe are mapped to attribute 0xf)
     *
     * MDA attributes form an index into aMDAColorMap, which in turn provides an index into aMDAColors.
     */
    static aMDAColorMap = [0x0, 0x1, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x0, 0x3, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4];

    static aCGAColors = [
        [0x00, 0x00, 0x00, 0xff],   // 0x00: ATTR_FGND_BLACK
        [0x00, 0x00, 0xaa, 0xff],   // 0x01: ATTR_FGND_BLUE
        [0x00, 0xaa, 0x00, 0xff],   // 0x02: ATTR_FGND_GREEN
        [0x00, 0xaa, 0xaa, 0xff],   // 0x03: ATTR_FGND_CYAN
        [0xaa, 0x00, 0x00, 0xff],   // 0x04: ATTR_FGND_RED
        [0xaa, 0x00, 0xaa, 0xff],   // 0x05: ATTR_FGND_MAGENTA
        [0xaa, 0x55, 0x00, 0xff],   // 0x06: ATTR_FGND_BROWN
        [0xaa, 0xaa, 0xaa, 0xff],   // 0x07: ATTR_FGND_WHITE                      (aka light gray)
        [0x55, 0x55, 0x55, 0xff],   // 0x08: ATTR_FGND_BLACK   | ATTR_FGND_BRIGHT (aka gray)
        [0x55, 0x55, 0xff, 0xff],   // 0x09: ATTR_FGND_BLUE    | ATTR_FGND_BRIGHT
        [0x55, 0xff, 0x55, 0xff],   // 0x0A: ATTR_FGND_GREEN   | ATTR_FGND_BRIGHT
        [0x55, 0xff, 0xff, 0xff],   // 0x0B: ATTR_FGND_CYAN    | ATTR_FGND_BRIGHT
        [0xff, 0x55, 0x55, 0xff],   // 0x0C: ATTR_FGND_RED     | ATTR_FGND_BRIGHT
        [0xff, 0x55, 0xff, 0xff],   // 0x0D: ATTR_FGND_MAGENTA | ATTR_FGND_BRIGHT
        [0xff, 0xff, 0x55, 0xff],   // 0x0E: ATTR_FGND_BROWN   | ATTR_FGND_BRIGHT (aka yellow)
        [0xff, 0xff, 0xff, 0xff]    // 0x0F: ATTR_FGND_WHITE   | ATTR_FGND_BRIGHT (aka white)
    ];

    static aCGAColorSet0 = [Videox86.ATTRS.FGND_GREEN, Videox86.ATTRS.FGND_RED,     Videox86.ATTRS.FGND_BROWN];
    static aCGAColorSet1 = [Videox86.ATTRS.FGND_CYAN,  Videox86.ATTRS.FGND_MAGENTA, Videox86.ATTRS.FGND_WHITE];

    /**
     * Here is the EGA BIOS default ATC palette register set for color text modes, from which getCardColors()
     * builds a default RGB array, similar to aCGAColors above.
     */
    static aEGAPalDef = [0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x14, 0x07, 0x38, 0x39, 0x3A, 0x3B, 0x3C, 0x3D, 0x3E, 0x3F];

    static aEGAByteToDW = [
        0x00000000,   0x000000ff,   0x0000ff00,   0x0000ffff,
        0x00ff0000,   0x00ff00ff,   0x00ffff00,   0x00ffffff,
        0xff000000|0, 0xff0000ff|0, 0xff00ff00|0, 0xff00ffff|0,
        0xffff0000|0, 0xffff00ff|0, 0xffffff00|0, 0xffffffff|0
    ];

    static aEGADWToByte = {
        [0x00000000]:    0x0,
        [0x00000080]:    0x1,
        [0x00008000]:    0x2,
        [0x00008080]:    0x3,
        [0x00800000]:    0x4,
        [0x00800080]:    0x5,
        [0x00808000]:    0x6,
        [0x00808080]:    0x7,
        [0x80000000|0]:  0x8,
        [0x80000080|0]:  0x9,
        [0x80008000|0]:  0xa,
        [0x80008080|0]:  0xb,
        [0x80800000|0]:  0xc,
        [0x80800080|0]:  0xd,
        [0x80808000|0]:  0xe,
        [0x80808080|0]:  0xf
    };

    /**
     * Card Specifications
     *
     * We support dynamically switching between MDA and CGA cards by simply flipping switches on
     * the virtual SW1 switch block and resetting the machine.  However, I'm not sure I'll support
     * dynamically switching the EGA card the same way; there's certainly no UI for it at this point.
     *
     * For each supported card, there is a cardSpec array that the Card class uses to initialize the
     * card's defaults:
     *
     *      [0]: card descriptor
     *      [1]: default CRTC port address
     *      [2]: default video buffer address
     *      [3]: default video buffer size
     *      [4]: total on-board memory (if no "memory" parm was specified)
     *      [5]: default monitor type
     *
     * If total on-board memory is zero, then addMemory() will simply add the specified video buffer
     * to the address space; otherwise, we will allocate an internal buffer (adwMemory) and tell addMemory()
     * to map it to the video buffer address.  The latter approach gives us total control over the buffer;
     * refer to getMemoryAccess().
     */
    static cardSpecs = {
        [Videox86.CARD.MDA]: ["MDA", Card.MDA.CRTC.INDX.PORT, 0xB0000, 0x01000, 0x01000, ChipSet.MONITOR.MONO],
        [Videox86.CARD.CGA]: ["CGA", Card.CGA.CRTC.INDX.PORT, 0xB8000, 0x04000, 0x04000, ChipSet.MONITOR.COLOR],
        [Videox86.CARD.EGA]: ["EGA", Card.CGA.CRTC.INDX.PORT, 0xB8000, 0x04000, 0x10000, ChipSet.MONITOR.EGACOLOR],
        [Videox86.CARD.VGA]: ["VGA", Card.CGA.CRTC.INDX.PORT, 0xB8000, 0x04000, 0x40000, ChipSet.MONITOR.VGACOLOR]
    };

    /**
     * Values for nTouchConfig; a value will be selected based on the sTouchScreen configuration parameter.
     */
    static TOUCH = {
        NONE:       0,
        DEFAULT:    1,
        KEYGRID:    2,
        MOUSE:      3
    };

    /**
     * Why simulate a SPACE if the tap is in the middle third (center) of the screen?  Well, apparently
     * I didn't explain earlier that the WHOLE reason I originally added KEYGRID support (before it was
     * even called KEYGRID support) was to make the 1985 game "Rogue" (pcjs.org/apps/pcx86/1985/rogue)
     * more fun to play on an iPad (the space-bar is a commonly required key).
     */
    static KEYGRID = [
        [Keyboardx86.SIMCODE.HOME, Keyboardx86.SIMCODE.UP,    Keyboardx86.SIMCODE.PGUP],
        [Keyboardx86.SIMCODE.LEFT, Keyboardx86.SIMCODE.SPACE, Keyboardx86.SIMCODE.RIGHT],
        [Keyboardx86.SIMCODE.END,  Keyboardx86.SIMCODE.DOWN,  Keyboardx86.SIMCODE.PGDN],
    ];

    /**
     * Videox86(parmsVideo, canvas, context, textarea, container, aDiagElements)
     *
     * The Videox86 component can be configured with the following (parmsVideo) properties:
     *
     *      model: model (eg, "mda" for Monochrome Display Adapter)
     *      mode: initial video mode (default is null, which selects a mode based on model)
     *      screenWidth: width of the screen canvas, in pixels
     *      screenHeight: height of the screen canvas, in pixels
     *      screenColor: background color of the screen canvas (default is black)
     *      flicker: 1 enables screen flicker, 0 disables (default is 0.5)
     *      scale: true for font scaling, false (default) to center the display on the screen
     *      charCols: number of character columns
     *      charRows: number of character rows
     *      fontROM: path to .rom file (or a JSON representation) containing the character set
     *      touchScreen: string specifying desired touch-screen support (default is none)
     *      autoLock: true to (attempt to) auto-lock the mouse to the canvas (default is false)
     *      randomize: 1 enables screen randomization, 0 disables (default is 1)
     *      irq: 0-15 for IRQ, -1 to disable (default is null, implying Chipset.IRQ.VID or 2)
     *
     * An EGA/VGA may specify the following additional properties:
     *
     *      switches: string representing EGA switches (see "SW1-SW4" documentation below)
     *      memory: the size of the EGA's on-board memory (overrides EGA's Videox86.cardSpecs)
     *
     * This calls the Bus to allocate a video buffer at the appropriate memory location whenever
     * a reset() or setMode() occurs; setMode() is called whenever a mode change is detected at
     * the port level, and whenever reset() is called.  setMode() also invokes updateScreen(true),
     * which forces reallocation of our internal buffer (aCellCache) that mirrors the video buffer.
     *
     * Our initBus() handler defines a timer that periodically calls updateScreen() for each Video
     * instance.  These updates should occur at a rate of 60 times/second, to update any blinking
     * elements (the cursor and any cells with the blink attribute), to compare/update the contents
     * of our internal buffer with the video buffer, and to render any differences between the two
     * buffers into the associated screen canvas, via either updateChar() or setPixel().
     *
     * Thanks to the Bus' new block-based memory manager that allows us to sparse-allocate memory
     * (in 4Kb increments), updateScreen() can also ask the CPU for the "dirty" state of all the
     * blocks underlying the video buffer, bypassing the update completely if the buffer is still clean.
     *
     * Sadly, that optimization is defeated if the count of active blink elements is non-zero,
     * because we must rescan the entire buffer to locate and redraw them all; I'm assuming for now
     * that, more often than not, very few (if any) blink attributes will be present, and therefore
     * they're not worth a separate caching mechanism.  If the only blinking element is the cursor,
     * that's no problem, as we redraw only the one cell containing the cursor (assuming the buffer
     * is otherwise clean).
     *
     * @this {Videox86}
     * @param {Object} parmsVideo
     * @param {HTMLCanvasElement} [canvas]
     * @param {CanvasRenderingContext2D} [context]
     * @param {HTMLTextAreaElement} [textarea]
     * @param {HTMLElement} [container]
     * @param {Array.<HTMLElement>} [aDiagElements]
     */
    constructor(parmsVideo, canvas, context, textarea, container, aDiagElements)
    {
        super("Video", parmsVideo, MESSAGE.VIDEO);

        let video = this, sProp, sEvent;
        this.bindingsExternal = [];
        this.parmsVideo = parmsVideo;

        /**
         * This records the model specified (eg, "mda", "cga", "ega", "vga", "vdu", or "" if no model
         * is specified); when a model is specified, it overrides whatever model we infer from the ChipSet's
         * switches (since those motherboard switches tell us only the type of monitor, not the type of card).
         */
        this.model = parmsVideo['model'];
        let aModelDefaults = Videox86.MODEL[this.model] || Videox86.MODEL['mda'];

        this.nCard = aModelDefaults[0];
        let irq = parmsVideo['irq'];
        if (irq == undefined) irq = ChipSet.IRQ.VID;
        this.nIRQ = (this.nCard >= Videox86.CARD.EGA && irq >= 0 && irq <= 15)? irq : undefined;

        this.nCardFont = 0;
        this.nActiveFont = this.nAlternateFont = 0;
        this.nFontSelect = 0;                       // current set of selectable logical fonts
        this.cbMemory = +parmsVideo['memory'] || 0; // zero means fallback to the cardSpec's default size
        this.sSwitches = parmsVideo['switches'];
        this.nRandomize = parmsVideo['randomize'];
        if (this.nRandomize == null) this.nRandomize = 1;

        /**
         * powerUp() uses the default mode ONLY if ChipSet doesn't give us a default.
         */
        this.nModeDefault = parmsVideo['mode'];
        if (this.nModeDefault == null || Videox86.aModeParms[this.nModeDefault] == null) {
            this.nModeDefault = aModelDefaults[1];
        }

        /**
         * setDimensions() uses these values ONLY if it doesn't recognize the video mode.
         */
        this.nColsDefault = parmsVideo['charCols'];
        this.nRowsDefault = parmsVideo['charRows'];
        if (this.nColsDefault === undefined || this.nRowsDefault === undefined) {
            this.nColsDefault = Videox86.aModeParms[this.nModeDefault][0];
            this.nRowsDefault = Videox86.aModeParms[this.nModeDefault][1];
        }

        /**
         * setDimensions() uses these values unconditionally, as the machine has no idea what the
         * physical screen size should be.
         */
        this.cxScreen = parmsVideo['screenWidth'];
        this.cyScreen = parmsVideo['screenHeight'];

        /**
         * The font 'scale' parameter is deprecated (we ALWAYS scale now), and the internal fDoubleFont
         * setting is now always true, but it is retained in case we want to revisit the benefits (or lack
         * thereof) of font-doubling.
         *
         *      this.fScaleFont = parmsVideo['scale'];
         *
         * When fScaleFont was false, one key difference was these additional lines in setDimensions():
         *
         *      if (!this.fScaleFont) {
         *          this.cxScreenCell = font.cxCell;
         *          this.cyScreenCell = font.cyCell;
         *      }
         *
         * which meant that if the font was only 8 pixels wide (instead of 16), then 40-column mode would
         * simply display normal size characters with large black borders on either of the screen.
         */
        this.fDoubleFont = true;

        this.canvasScreen = canvas;
        this.contextScreen = context;
        this.inputTextArea = textarea;
        this.inputScreen = textarea || canvas || null;

        /**
         * We now ensure that a colorScreen property is always set (to "black" if nothing else), and
         * set BOTH the canvas element's AND the container element's backgroundColor to match that color.
         *
         * This gives us option of doing "cute" things like flipping the canvas element's opacity from
         * 1 to 0 briefly, alternately revealing and hiding the underlying container element, to simulate
         * screen "flicker".
         */
        this.colorScreen = parmsVideo['screenColor'] || "black";
        this.fOpacityReduced = false;
        this.fStyleCanvasFullScreen = false;
        if (canvas) {
            canvas.style.backgroundColor = this.colorScreen;
            this.fStyleCanvasFullScreen = document.fullscreenEnabled || WebLib.isUserAgent("Edge/");   // formerly fGecko = WebLib.isUserAgent("Gecko/");
        }
        if (container) container.style.backgroundColor = this.colorScreen;

        /**
         * Support for disabling (or, less commonly, enabling) image smoothing, which all browsers
         * seem to support now (well, OK, I still have to test the latest MS Edge browser), despite
         * it still being labelled "experimental technology".  Let's hope the browsers standardize
         * on this.  I see other options emerging, like the CSS property "image-rendering: pixelated"
         * that's apparently been added to Chrome.  Sigh.
         *
         * UPDATE: Now that fDoubleFont is always true, and now that we're loading fonts (eg, VGA 9x16)
         * that may have a significantly different aspect ratio from that of the preferred screen size
         * (eg, 640x480), I've decided to turn smoothing ON just for text modes.  So now we just record
         * the default property name and value, and leave it to setDimensions() to do the actual setting.
         */
        let fSmoothing = parmsVideo['smoothing'];
        let sSmoothing = WebLib.getURLParm('smoothing');
        if (sSmoothing) fSmoothing = (sSmoothing == "true");
        this.fSmoothing = fSmoothing;
        this.sSmoothing = WebLib.findProperty(this.contextScreen, 'imageSmoothingEnabled');

        /**
         * initBus() will determine touch-screen support; for now, just record values and set defaults.
         */
        this.sTouchScreen = parmsVideo['touchScreen'];
        this.nTouchConfig = Videox86.TOUCH.NONE;

        /**
         * If a Mouse exists, we'll be notified when it requests our canvas, and we make a note of it
         * so that if lockPointer() is ever invoked, we can notify the Mouse.
         */
        this.mouse = null;
        this.fAutoLock = parmsVideo['autoLock'];

        /**
         * Originally, setMode() would map/unmap the video buffer ONLY when the active card changed,
         * because as long as an MDA or CGA remained active, its video buffer never changed.  However,
         * since the EGA can change its video buffer on the fly, setMode() must also compare the card's
         * hard-coded and/or programmed buffer address/size to the "active" address/size; the latter
         * is recorded here.
         */
        this.addrBuffer = this.sizeBuffer = 0;

        /**
         * aFonts is an array of font objects indexed by FONT ID.  Font characters are arranged
         * in 16x16 grids, with one grid per canvas object in the aCanvas array of each font object.
         *
         * Each element is a Font object that describes the font size and provides bitmaps for all the font
         * color permutations.  aFonts.length will be non-zero if ANY fonts are loaded, but do NOT assume
         * that EVERY font has been loaded; check for the existence of a font by checking for its unique ID
         * within this sparse array.
         */
        this.aFonts = [];

        /**
         * aFontDiff entries are created by createFontDiff(), and each entry is a 256-element array of either
         * 0 (no difference) or -1 for every character code that differs between the fonts that correspond to
         * the aFontDiff index.
         */
        this.aFontDiff = [];

        /**
         * Instead of (re)allocating a new color array every time getCardColors() is called, we preallocate
         * an array and simply update the entries as needed.  Note that for an EGA (or a VGA operating in an
         * EGA-compatible mode), only the first 16 entries get used (derived from the ATC); only when a VGA
         * is operating in an 8bpp mode are 256 entries used (derived from the DAC rather than the ATC).
         */
        this.aRGB = new Array(this.nCard == Videox86.CARD.VGA? 256 : 16);
        this.fRGBValid = false;     // whenever this is false, it signals getCardColors() to rebuild aRGB

        this.aCellCache = [];
        this.nCellCache = 0;
        this.iCellCacheValid = 0;   // 0: invalid, 1: partially valid, 2: completely valid
        this.fShifted = false;      // set to true whenever the image has been shifted by one or more pixels
        this.nShiftLeft = this.nShiftUp = 0;

        /**
         * Since I've not found clear documentation on a reliable way to check whether a particular DOM element
         * (other than the BODY element) has focus at any given time, I've added onfocus() and onblur() handlers
         * to the screen to maintain my own focus state.
         */
        this.fHasFocus = false;

        /**
         * Here's the gross code to handle full-screen support across all supported browsers.  The lack of standards
         * is exasperating; browsers can't agree on 'Fullscreen' (most common) or 'FullScreen' (least common), and while
         * some browsers honor other browser prefixes, most don't.  Event handlers tend to be more consistent (ie, all
         * lower-case).
         */
        this.container = container;
        if (this.container) {
            sProp = WebLib.findProperty(container, 'requestFullscreen') || WebLib.findProperty(container, 'requestFullScreen');
            if (sProp) {
                this.container.doFullScreen = container[sProp];
                sEvent = WebLib.findProperty(document, 'on', 'fullscreenchange');
                if (sEvent) {
                    let sFullScreen = WebLib.findProperty(document, 'fullscreenElement') || WebLib.findProperty(document, 'fullScreenElement');
                    document.addEventListener(sEvent, function onFullScreenChange() {
                        video.notifyFullScreen(document[sFullScreen] != null);
                    }, false);
                }
                sEvent = WebLib.findProperty(document, 'on', 'fullscreenerror');
                if (sEvent) {
                    document.addEventListener(sEvent, function onFullScreenError() {
                        video.notifyFullScreen();
                    }, false);
                }
            }
        }

        /**
         * More gross code to handle pointer-locking support across all supported browsers.
         */
        if (this.inputScreen) {
            this.inputScreen.onfocus = function onFocusScreen() {
                return video.onFocusChange(true);
            };
            this.inputScreen.onblur = function onBlurScreen() {
                return video.onFocusChange(false);
            };
            this.inputScreen.lockPointer = (sProp = WebLib.findProperty(this.inputScreen, 'requestPointerLock')) && this.inputScreen[sProp];
            this.inputScreen.unlockPointer = (sProp = WebLib.findProperty(this.inputScreen, 'exitPointerLock')) && this.inputScreen[sProp];
            if (this.inputScreen.lockPointer) {
                sEvent = WebLib.findProperty(document, 'on', 'pointerlockchange');
                if (sEvent) {
                    let sPointerLock = WebLib.findProperty(document, 'pointerLockElement');
                    document.addEventListener(sEvent, function onPointerLockChange() {
                        let fLocked = !!(sPointerLock && document[sPointerLock] === video.inputScreen);
                        video.notifyPointerLocked(fLocked);
                    }, false);
                }
            }
        }

        this.sFileURL = parmsVideo['fontROM'];

        if (this.sFileURL) {
            let sFileExt = StrLib.getExtension(this.sFileURL);
            if (sFileExt != "json") {
                this.sFileURL = WebLib.getHostOrigin() + DumpAPI.ENDPOINT + '?' + DumpAPI.QUERY.FILE + '=' + this.sFileURL + '&' + DumpAPI.QUERY.FORMAT + '=' + DumpAPI.FORMAT.BYTES;
            }
        }

        /**
         * TODO: A complete list of what we want to support in terms of "diagnostic elements" needs to be fleshed out
         * at some point.  For now, all I do is save the contexts of all supplied canvas elements and use them in createFont()
         * to display the font data (for as many font banks as there are canvas elements) whenever the font(s) get rebuilt.
         */
        this.aDiagContexts = [];
        if (aDiagElements) {
            for (let i = 0; i < aDiagElements.length; i++) {
                let element = aDiagElements[i];
                if (element.tagName == "CANVAS") {
                    let context = element.getContext("2d");
                    this.aDiagContexts.push(context);
                }
            }
        }

        /**
         * Allocate image and canvas caches.
         */
        this.imageCache = {};
        this.canvasCache = {};
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * This is a notification issued by the Computer component, after all the other components (notably the CPU)
     * have had a chance to initialize.
     *
     * @this {Videox86}
     * @param {Computer} cmp
     * @param {Busx86} bus
     * @param {CPUx86} cpu
     * @param {Debuggerx86} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        let video = this;

        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;

        let nRandomize = +cmp.getMachineParm('randomize');
        if (nRandomize >= 0 && nRandomize <= 1) this.nRandomize = nRandomize;

        this.colorFont = cmp.getMachineParm('fontColor', this.parmsVideo);
        if (this.colorFont) {
            this.rgbFont = [0xff, 0xff, 0xff, 0xff];
            let i = 0, j = 0, s;
            if (this.colorFont[i] == '#') i++;
            while ((s = this.colorFont.substr(i, 2))) {
                this.rgbFont[j++] = Number.parseInt(s, 16);
                i += 2;
            }
        }

        /**
         * Moved this from the constructor (and changed WebLib.getURLParm() to cmp.getMachineParm()),
         * so that the flicker setting can be easily overridden from the page, not just from the URL.
         */
        this.opacityFlicker = (1 - (cmp.getMachineParm('flicker', this.parmsVideo) || 0)).toString();

        /**
         * nCard will be undefined if no model was explicitly set (whereas this.nCard is ALWAYS defined).
         */
        let aModel = Videox86.MODEL[this.model];
        let nCard = aModel && aModel[0];

        /**
         * The only time we do NOT want to trap MDA ports is when the model has been explicitly set to CGA.
         */
        if (nCard !== Videox86.CARD.CGA) {
            bus.addPortInputTable(this, Videox86.aMDAPortInput);
            bus.addPortOutputTable(this, Videox86.aMDAPortOutput);
        }

        /**
         * Similarly, the only time we do NOT want to trap CGA ports is when the model is explicitly set to MDA.
         */
        if (nCard !== Videox86.CARD.MDA) {
            bus.addPortInputTable(this, Videox86.aCGAPortInput);
            bus.addPortOutputTable(this, Videox86.aCGAPortOutput);
        }

        /**
         * Note that in the case of EGA and VGA models, the above code ensures that we will trap both MDA and CGA
         * port ranges -- which is good, because both the EGA and VGA can be reprogrammed to respond to those ports,
         * but also potentially bad if you want to simulate a "dual display" system, where one of the displays is
         * driven by either an MDA or CGA.
         *
         * However, you should still be able to make that work by loading the MDA or CGA video component first, because
         * components should be initialized in the order they appear in the machine configuration file.  Any attempt
         * by another component to trap the same ports should be ignored.
         */
        if (this.nCard >= Videox86.CARD.EGA) {
            bus.addPortInputTable(this, Videox86.aEGAPortInput);
            bus.addPortOutputTable(this, Videox86.aEGAPortOutput);
        }

        if (this.nCard == Videox86.CARD.VGA) {
            bus.addPortInputTable(this, Videox86.aVGAPortInput);
            bus.addPortOutputTable(this, Videox86.aVGAPortOutput);
        }

        if (DEBUGGER && dbg) {
            dbg.messageDump(MESSAGE.VIDEO, function onDumpVideo(asArgs) {
                video.dumpVideo(asArgs);
            });
        }

        /**
         * If we have an associated keyboard, then ensure that the keyboard will be notified whenever the canvas
         * gets focus and receives input.
         */
        this.kbd = cmp.getMachineComponent("Keyboard");
        if (this.kbd && this.inputScreen) {
            this.kbd.setBinding(this.inputTextArea? "textarea" : "canvas", "screen", this.inputScreen);
        }

        this.panel = cmp.getMachineComponent("Panel", false);
        for (let i = 0; i < this.bindingsExternal.length; i++) {
            let binding = this.bindingsExternal[i];
            if (this.kbd && this.kbd.setBinding(...binding)) continue;
            if (this.panel && this.panel.setBinding(...binding)) continue;
        }

        this.bEGASwitches = 0x09;   // our default "switches" setting (see aEGAMonitorSwitches)
        this.chipset = cmp.getMachineComponent("ChipSet");
        if (this.chipset && this.sSwitches) {
            if (this.nCard == Videox86.CARD.EGA) {
                this.bEGASwitches = this.chipset.parseDIPSwitches(this.sSwitches, this.bEGASwitches);
            }
        }

        /**
         * The default value for the 'touchScreen' parameter is an empty string; machine configs must explicitly
         * select one of the following values, via the 'touchscreen' attribute in the <video> element, to enable any
         * touch-screen support.
         */
        if (this.sTouchScreen == "mouse") {
            this.mouse = cmp.getMachineComponent("Mouse", false);
            if (this.mouse) this.captureTouch(Videox86.TOUCH.MOUSE);
        }
        else if (this.sTouchScreen == "keygrid") {
            if (this.kbd) this.captureTouch(Videox86.TOUCH.KEYGRID);
        }

        /**
         * If no touch support was required or requested, we still want to do some minimal touch event processing;
         * eg, notifying the ChipSet component whenever a touchstart occurs, so that it can enable audio in response
         * to a user action on iOS devices.
         */
        if (!this.nTouchConfig) {
            this.captureTouch(Videox86.TOUCH.DEFAULT);
        }

        if (this.sFileURL) {
            let sProgress = "Loading " + this.sFileURL + "...";
            WebLib.getResource(this.sFileURL, null, true, function(sURL, sResponse, nErrorCode) {
                video.doneLoad(sURL, sResponse, nErrorCode);
            }, function(nState) {
                video.printf(MESSAGE.PROGRESS, "%s\n", sProgress);
            });
            return;
        }

        /**
         * TODO: Improve how Video readiness is signalled.  Currently, all the video cards we support either have
         * a font ROM (which we load ourselves; see above) OR a system ROM (which the ROM component takes care of),
         * but not both.
         *
         * If the former, doneLoad() will call setReady(), and if the latter, onROMLoad() will call setReady().
         *
         * However, theoretically, a video card could have NEITHER or BOTH; as things stand, a card with NEITHER
         * will never be marked ready, and a card with BOTH will be prematurely marked as ready.  The Video component
         * parameters (parmsVideo) should be updated to reflect how many resources we should be waiting for.
         */
        // this.setReady();
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {Videox86}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "refresh")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let video = this;

        if (!this.bindings[sBinding]) {

            /**
             * We now save every binding that comes in, so that if there are bindings for "caps-lock' and the like,
             * we can forward them to the Keyboard.  TODO: Perhaps we should limit this to sHTMLType == "led", and collect
             * them in a separate object (eg, ledBindings), so that initBus() can safely enumerate JUST the LEDs.  This
             * is what we do in PCx80.  Be aware that's there's also sHTMLType == "rled" now, too.
             */
            this.bindings[sBinding] = control;

            switch (sBinding) {

            case "fullScreen":
                if (this.container && this.container.doFullScreen) {
                    control.onclick = function onClickFullScreen() {
                        if (DEBUG) video.printf("fullScreen()\n");
                        video.goFullScreen();
                    };
                } else {
                    if (DEBUG) this.printf(MESSAGE.LOG, "FullScreen API not available\n");
                    control.parentNode.removeChild(/** @type {Node} */ (control));
                }
                return true;

            case "lockPointer":
                this.sLockMessage = control.textContent;
                if (this.inputScreen && this.inputScreen.lockPointer) {
                    control.onclick = function onClickLockPointer() {
                        if (DEBUG) video.printf("lockPointer()\n");
                        video.lockPointer(true);
                    };
                } else {
                    if (DEBUG) this.printf(MESSAGE.LOG, "Pointer Lock API not available\n");
                    control.parentNode.removeChild(/** @type {Node} */ (control));
                }
                return true;

            case "refresh":
                control.onclick = function onClickRefresh() {
                    if (DEBUG) video.printf("refreshScreen()\n");
                    video.updateScreen(true);
                };
                return true;

            default:
                this.bindingsExternal.push([sHTMLType, sBinding, control, sValue]);
                delete this.bindings[sBinding];
                break;
            }
        }
        return false;
    }

    /**
     * setFocus(fScroll)
     *
     * @this {Videox86}
     * @param {boolean} [fScroll]
     */
    setFocus(fScroll)
    {
        if (this.inputScreen) {
            this.inputScreen.focus();
            if (fScroll) {
                let element = document.getElementById(this.idMachine) || this.inputScreen;
                element.scrollIntoView();
            }
        }
    }

    /**
     * getScreen()
     *
     * This is an interface used by the Mouse component, so that it can capture mouse events from the screen.
     *
     * @this {Videox86}
     * @param {Mouse} [mouse]
     * @returns {Object|undefined}
     */
    getScreen(mouse)
    {
        this.mouse = mouse;
        return this.inputScreen;
    }

    /**
     * getTextArea()
     *
     * This is an interface used by the Computer component, so that it can display resource status messages.
     *
     * @this {Videox86}
     * @returns {HTMLTextAreaElement|undefined}
     */
    getTextArea()
    {
        return this.inputTextArea;
    }

    /**
     * getTextData()
     *
     * This is an interface used by the Keyboard component, to obtain a plain-text copy of any currently visible text,
     * usually for the purpose of copying it to the clipboard.
     *
     * To keep the function simple and relieve ourselves of some tedious calculations, such as the current visible start
     * address within the frame buffer, we rely on the cell cache, which conveniently mirrors all visible cells as of the
     * last screen refresh.  The only caveat is that the cell cache may be over-buffering by one entire column and row,
     * but that's easily accounted for (eg, every row must step through nColsBuffer -- not merely nCols -- of cell data).
     *
     * @this {Videox86}
     * @returns {string}
     */
    getTextData()
    {
        let s = "", i = 0;
        if (this.nCardFont) {
            for (let row = 0; row < this.nRows; row++) {
                let line = "";
                for (let col = 0; col < this.nColsBuffer; col++) {
                    if (col < this.nCols) {
                        let code = this.aCellCache[i] & 0xff;
                        line += CharSet.CP437[code];    // String.fromCharCode(code);
                    }
                    i++;
                }
                s += line.replace(/\s*$/, "\n");
            }
        }
        return s;
    }

    /**
     * goFullScreen()
     *
     * @this {Videox86}
     * @returns {boolean} true if request successful, false if not (eg, failed OR not supported)
     */
    goFullScreen()
    {
        let fSuccess = false;
        if (this.container) {
            if (this.container.doFullScreen) {
                /**
                 * Styling the container with a width of "100%" and a height of "auto" works great when the aspect ratio
                 * of our virtual screen is at least roughly equivalent to the physical screen's aspect ratio, but now that
                 * we support virtual VGA screens with an aspect ratio of 1.33, that's very much out of step with modern
                 * wide-screen monitors, which usually have an aspect ratio of 1.6 or greater.
                 *
                 * And unfortunately, none of the browsers I've tested appear to make any attempt to scale our container to
                 * the physical screen's dimensions, so the bottom of our screen gets clipped.  To prevent that, I reduce
                 * the width from 100% to whatever percentage will accommodate the entire height of the virtual screen.
                 *
                 * NOTE: Mozilla recommends both a width and a height of "100%", but all my tests suggest that using "auto"
                 * for height works equally well, so I'm sticking with it, because "auto" is also consistent with how I've
                 * implemented a responsive canvas when the browser window is being resized.
                 */
                let sWidth = "100%";
                let sHeight = "auto";
                if (screen && screen.width && screen.height) {
                    let aspectPhys = screen.width / screen.height;
                    let aspectVirt = this.cxScreen / this.cyScreen;
                    if (aspectPhys > aspectVirt) {
                        sWidth = Math.round(aspectVirt / aspectPhys * 100) + '%';
                    }
                    // TODO: We may need to someday consider the case of a physical screen with an aspect ratio < 1.0....
                }
                if (!this.fStyleCanvasFullScreen) {
                    this.container.style.width = sWidth;
                    this.container.style.height = sHeight;
                } else {
                    /**
                     * Sadly, the above code doesn't work for Firefox (nor for Chrome, as of Chrome 75 or so), because as:
                     *
                     *      http://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
                     *
                     * explains:
                     *
                     *      'It's worth noting a key difference here between the Gecko and WebKit implementations at this time:
                     *      Gecko automatically adds CSS rules to the element to stretch it to fill the screen: "width: 100%; height: 100%".
                     *
                     * Which would be OK if Gecko did that BEFORE we're called, but apparently it does that AFTER, effectively
                     * overwriting our careful calculations.  So we style the inner element (canvasScreen) instead, which
                     * requires even more work to ensure that the canvas is properly centered.  FYI, this solution is consistent
                     * with Mozilla's recommendation for working around their automatic CSS rules:
                     *
                     *      '[I]f you're trying to emulate WebKit's behavior on Gecko, you need to place the element you want
                     *      to present inside another element, which you'll make fullscreen instead, and use CSS rules to adjust
                     *      the inner element to match the appearance you want.'
                     */
                    this.canvasScreen.style.width = sWidth;
                    this.canvasScreen.style.height = sHeight;
                    this.canvasScreen.style.display = "block";
                    this.canvasScreen.style.margin = "auto";
                }
                this.container.style.backgroundColor = this.colorScreen;
                this.container.doFullScreen();
                fSuccess = true;
            }
            this.setFocus();
        }
        return fSuccess;
    }

    /**
     * notifyFullScreen(fFullScreen)
     *
     * @this {Videox86}
     * @param {boolean} [fFullScreen] (undefined if there was a full-screen error)
     */
    notifyFullScreen(fFullScreen)
    {
        if (!fFullScreen && this.container) {
            if (!this.fStyleCanvasFullScreen) {
                this.container.style.width = this.container.style.height = "";
            } else {
                this.canvasScreen.style.width = this.canvasScreen.style.height = "";
            }
        }
        if (DEBUG) this.printf("notifyFullScreen(%b)\n", fFullScreen);
        if (this.kbd) this.kbd.notifyEscape(fFullScreen == true);
    }

    /**
     * lockPointer()
     *
     * @this {Videox86}
     * @param {boolean} fLock
     * @returns {boolean} true if request successful, false if not (eg, failed OR not supported)
     */
    lockPointer(fLock)
    {
        let fSuccess = false;
        if (this.inputScreen && this.mouse) {
            if (fLock) {
                if (this.inputScreen.lockPointer) {
                    this.inputScreen.lockPointer();
                    this.mouse.notifyPointerLocked(true);
                    fSuccess = true;
                }
            } else {
                if (this.inputScreen.unlockPointer) {
                    this.inputScreen.unlockPointer();
                    this.mouse.notifyPointerLocked(false);
                    fSuccess = true;
                }
            }
            this.setFocus();
        }
        return fSuccess;
    }

    /**
     * notifyPointerActive(fActive)
     *
     * @this {Videox86}
     * @param {boolean} fActive
     * @returns {boolean} true if autolock enabled AND pointer lock supported, false if not
     */
    notifyPointerActive(fActive)
    {
        if (this.fAutoLock) {
            return this.lockPointer(fActive);
        }
        return false;
    }

    /**
     * notifyPointerLocked(fLocked)
     *
     * @this {Videox86}
     * @param {boolean} fLocked
     */
    notifyPointerLocked(fLocked)
    {
        if (this.mouse) {
            this.mouse.notifyPointerLocked(fLocked);
            if (this.kbd) this.kbd.notifyEscape(fLocked);
        }
        let control = this.bindings["lockPointer"];
        if (control) control.textContent = (fLocked? "Press Esc to Unlock Pointer" : this.sLockMessage);
    }

    /**
     * captureTouch(nTouchConfig)
     *
     * @this {Videox86}
     * @param {number} nTouchConfig (must be one of the supported Videox86.TOUCH values)
     */
    captureTouch(nTouchConfig)
    {
        let control = this.inputScreen;
        if (control) {
            let video = this;
            if (!this.nTouchConfig) {

                this.nTouchConfig = nTouchConfig;

                let addPassive = false;
                if (nTouchConfig != Videox86.TOUCH.MOUSE) {
                    /**
                     * If we're not capturing touch events for mouse event simulation, then we won't be calling
                     * preventDefault(), which means we should tell Chrome and any other browser that supports
                     * passive event listeners that we're installing a "passive" event listener, so that the browser
                     * won't suspend us during `touchstart` and `touchmove` events.  But in order to know whether
                     * the browser supports that feature, we have to probe for it first.
                     */
                    try {
                        let opts = Object.defineProperty({}, 'passive', {
                            /* eslint getter-return: ["off"] */
                            get: function() {
                                addPassive = true;
                            }
                        });
                        window.addEventListener("testPassive", null, opts);
                        window.removeEventListener("testPassive", null, opts);
                    } catch (e) {
                    }
                }

                control.addEventListener(
                    'touchstart',
                    function onTouchStart(event) {
                        video.onTouchStart(event);
                    },
                    addPassive? {passive: true} : false
                );

                if (nTouchConfig == Videox86.TOUCH.DEFAULT) {
                    return;
                }

                control.addEventListener(
                    'touchmove',
                    function onTouchMove(event) {
                        video.onTouchMove(event);
                    },
                    addPassive? {passive: true} : true
                );

                control.addEventListener(
                    'touchend',
                    function onTouchEnd(event) {
                        video.onTouchEnd(event);
                    },
                    false                   // we'll specify false for the 'useCapture' parameter for now...
                );

                /**
                 * Using desktop mouse events to simulate touch events should only be enabled as needed.
                 */
                if (MAXDEBUG) {
                    control.addEventListener(
                        'mousedown',
                        function onMouseDown(event) {
                            video.onTouchStart(event);
                        },
                        false               // we'll specify false for the 'useCapture' parameter for now...
                    );
                    control.addEventListener(
                        'mousemove',
                        function onMouseMove(event) {
                            video.onTouchMove(event);
                        },
                        true
                    );
                    control.addEventListener(
                        'mouseup',
                        function onMouseUp(event) {
                            video.onTouchEnd(event);
                        },
                        false               // we'll specify false for the 'useCapture' parameter for now...
                    );
                }

                // this.printf(MESSAGE.LOG, "touch events captured\n");

                this.xTouch = this.yTouch = this.timeTouch = -1;

                /**
                 * As long as fTouchDefault is false, we call preventDefault() on every touch event, to prevent
                 * the page from moving/scrolling while the canvas is processing touch events.  However, there must
                 * also be exceptions to permit the soft keyboard to activate; see processTouchEvent() for details.
                 */
                this.fTouchDefault = false;

                /**
                 * I also need to come up with some rules for when the simulated mouse's primary button stays down.
                 * Let's try setting a timeout handler whenever a touchstart is received, which we'll immediately cancel
                 * as soon as a touchmove or touchend event is received, and if the timeout handler fires, we'll set
                 * fLongTouch to true.
                 */
                this.hLongTouch = null;
                this.fLongTouch = false;
                this.onLongTouch = function onLongTouch() {
                    video.startLongTouch();
                };
            }
        }
    }

    /**
     * onFocusChange(fFocus)
     *
     * @this {Videox86}
     * @param {boolean} fFocus is true if gaining focus, false if losing it
     */
    onFocusChange(fFocus)
    {
        /**
         * As per http://stackoverflow.com/questions/6740253/disable-scrolling-when-changing-focus-form-elements-ipad-web-app,
         * I decided to try this work-around to prevent the webpage from scrolling around whenever the canvas is given
         * focus.  That sort of scrolling-into-view sounds great in principle, but in practice, if you were reading some other
         * portion of the page, it can be irritating to be scrolled away from that portion when refreshing/returning to the page.
         *
         * However, this work-around doesn't seem to work with the latest version of Safari (or else I misunderstood something).
         *
         *  if (fFocus) {
         *      window.scrollTo(0, 0);
         *      document.body.scrollTop = 0;
         *  }
         */
        this.fHasFocus = fFocus;
        if (this.kbd) this.kbd.onFocusChange(fFocus);
    }

    /**
     * onTouchStart(event)
     *
     * @this {Videox86}
     * @param {Event} event object from a 'touch' event
     */
    onTouchStart(event)
    {
        if (DEBUG) this.printf("onTouchStart()\n");
        this.chipset.startAudio(event);
        if (this.nTouchConfig == Videox86.TOUCH.DEFAULT) return;
        this.processTouchEvent(event, true);
    }

    /**
     * onTouchMove(event)
     *
     * @this {Videox86}
     * @param {Event} event object from a 'touch' event
     */
    onTouchMove(event)
    {
        if (DEBUG) this.printf("onTouchMove()\n");
        this.processTouchEvent(event);
    }

    /**
     * onTouchEnd(event)
     *
     * @this {Videox86}
     * @param {Event} event object from a 'touch' event
     */
    onTouchEnd(event)
    {
        if (DEBUG) this.printf("onTouchEnd()\n");
        this.processTouchEvent(event, false);
    }

    /**
     * processTouchEvent(event, fStart)
     *
     * If nTouchConfig is non-zero, touch event handlers are installed, which pass their events to this function.
     *
     * What we do with those events here depends on the value of nTouchConfig.  Originally, the only supported
     * configuration was the experimental conversion of touch events into arrow keys, based on an invisible grid
     * that divided the screen into thirds; that configuration is now identified as Videox86.TOUCH.KEYGRID.
     *
     * The new preferred configuration is Videox86.TOUCH.MOUSE, which does little more than allow you to "push" the
     * simulated mouse around.  If Videox86.TOUCH.MOUSE is enabled, it's already been confirmed the machine has a mouse.
     *
     * @this {Videox86}
     * @param {Event|MouseEvent|TouchEvent} event object from a 'touch' event
     * @param {boolean} [fStart] (true if 'touchstart', false if 'touchend', undefined if 'touchmove')
     */
    processTouchEvent(event, fStart)
    {
        let xTouch, yTouch;

        // if (!event) event = window.event;

        /**
         * Touch coordinates (that is, the pageX and pageY properties) are relative to the page, so to make
         * them relative to the canvas, we must subtract the canvas's left and top positions.  This Apple web page:
         *
         *      https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/AddingMouseandTouchControlstoCanvas/AddingMouseandTouchControlstoCanvas.html
         *
         * makes it sound simple, but it turns out we have to walk the canvas' entire "parentage" of DOM elements
         * to get the exact offsets.
         *
         * TODO: Determine whether the getBoundingClientRect() code used in panel.js for mouse events can also
         * be used here to simplify this annoyingly complicated code for touch events.
         */
        let xTouchOffset = 0;
        let yTouchOffset = 0;
        let eCurrent = this.canvasScreen;

        do {
            if (!isNaN(eCurrent.offsetLeft)) {
                xTouchOffset += eCurrent.offsetLeft;
                yTouchOffset += eCurrent.offsetTop;
            }
        } while ((eCurrent = eCurrent.offsetParent));

        /**
         * Due to the responsive nature of our pages, the displayed size of the canvas may be smaller than the
         * allocated size, and the coordinates we receive from touch events are based on the currently displayed size.
         */
        let xScale = this.cxScreen / this.canvasScreen.offsetWidth;
        let yScale = this.cyScreen / this.canvasScreen.offsetHeight;

        /**
         * @name Event
         * @property {Array} targetTouches
         */
        if (!event.targetTouches || !event.targetTouches.length) {
            xTouch = event.pageX;
            yTouch = event.pageY;
        } else {
            xTouch = event.targetTouches[0].pageX;
            yTouch = event.targetTouches[0].pageY;
        }

        xTouch = ((xTouch - xTouchOffset) * xScale);
        yTouch = ((yTouch - yTouchOffset) * yScale);

        if (this.nTouchConfig == Videox86.TOUCH.KEYGRID) {

            /**
             * We don't want to simulate a key on EVERY touch event; preferably, only touchstart or touchend.  And
             * I probably would have preferred triggering key presses on touchend, so that if you decided to move
             * your finger off-screen before releasing, you could avoid a key press, but sadly (as I've documented in
             * the Mandelbot project; see https://github.com/jeffpar/mandelbot/blob/master/src/mandelbot.js),
             * touchend doesn't reliably provide coordinates on all platforms, so we're going to go with touchstart.
             */
            if (fStart) {

                let xThird = (xTouch / (this.cxScreen / 3)) | 0;
                let yThird = (yTouch / (this.cyScreen / 3)) | 0;

                /**
                 * At this point, xThird and yThird should both be one of 0, 1 or 2, indicating which horizontal and
                 * vertical third of the virtual screen the touch event occurred.
                 */
                this.kbd.addActiveKey(Videox86.KEYGRID[yThird][xThird], true);
            }
        } else {

            if (this.mouse) {
                /**
                 * As long as fTouchDefault is false, we call preventDefault() on every touch event, to keep
                 * the page stable.  However, we must allow some touch event(s) to perform their default action,
                 * otherwise the soft keyboard can never be activated.  So if a touchstart occurs at least 1/2
                 * second (500ms) after the last touchstart, with no intervening touchmove events, fTouchDefault
                 * is allowed to become true.
                 */
                let fTouchDefault = this.fTouchDefault;
                let timeDelta = event.timeStamp - this.timeTouch;

                if (fStart === true) {
                    this.fTouchDefault = (timeDelta > 500);
                    this.timeTouch = event.timeStamp;
                    this.hLongTouch = setTimeout(this.onLongTouch, 500);
                } else {
                    if (this.hLongTouch != null) {
                        clearTimeout(this.hLongTouch);
                        this.hLongTouch = null;
                    }
                }

                if (fStart === undefined) {
                    this.fTouchDefault = false;
                }

                if (DEBUG) this.printf("processTouchEvent(%s,%dms,%b)\n", (fStart? "touchStart" : (fStart === false? "touchEnd" : "touchMove")), timeDelta, fTouchDefault);

                if (!fTouchDefault) {
                    event.preventDefault();
                }

                if (fStart === false) {
                    /**
                     * NOTE: 200ms is merely my initial stab at a reasonable number of milliseconds to interpret a
                     * start/end touch sequence as a "tap"; I also make no note of any intervening move events (ie,
                     * events where fStart is undefined), and perhaps I should....
                     */
                    if (this.endLongTouch()) {
                        return;
                    }
                    if (timeDelta < 200) {
                        this.mouse.clickMouse(Mouse.BUTTON.LEFT, true);
                        this.mouse.clickMouse(Mouse.BUTTON.LEFT, false);
                        return;
                    }
                }
                /**
                 * This 'touchmove" code mimics the 'mousemove' event processing in processMouseEvent() in mouse.js, with
                 * one important difference: every time touching "restarts", we need to reset the variables used to calculate
                 * the deltas, so that the mere act of lifting and replacing your finger doesn't generate a delta by itself.
                 */
                if (fStart || this.xTouch < 0 || this.yTouch < 0) {
                    this.xTouch = xTouch;
                    this.yTouch = yTouch;
                }
                let xDelta = Math.round(xTouch - this.xTouch);
                let yDelta = Math.round(yTouch - this.yTouch);
                this.xTouch = xTouch;
                this.yTouch = yTouch;
                // this.printf("moveMouse(%d,%d)\n", xDelta, yDelta);
                this.mouse.moveMouse(xDelta, yDelta, this.xTouch, this.yTouch);
            }
        }
    }

    /**
     * startLongTouch()
     *
     * @this {Videox86}
     */
    startLongTouch()
    {
        this.fLongTouch = true;
        this.mouse.clickMouse(Mouse.BUTTON.LEFT, true);
    }

    /**
     * endLongTouch()
     *
     * @this {Videox86}
     * @returns {boolean} true if long touch was active, false if not
     */
    endLongTouch()
    {
        if (this.fLongTouch) {
            this.mouse.clickMouse(Mouse.BUTTON.LEFT, false);
            this.fLongTouch = false;
            return true;
        }
        return false;
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {Videox86}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data || !this.restore) {
                this.reset();
            } else {
                if (!this.restore(data)) return false;
            }
            if (this.timerRetrace == undefined) {
                /**
                 * Note that startVerticalRetrace() will fire every nCyclesVertPeriod, ensuring predictability
                 * and repeatability regardless of the machine's current speed multiplier or the whether the machine
                 * is achieving the desired target number of cycles per second.
                 *
                 * The only downside is that when the machine is recalibrating (or the multiplier is being increased),
                 * we may be called more than 60Hz (msUpdateNormal or 16.667ms).  So we don't allow the next update
                 * until at least msUpdateInterval has passed.  msUpdateInterval is initialized to msUpdateNormal, but
                 * can be increased if the updates are taking too long (eg, too many on-screen changes).
                 */
                this.msUpdateNormal = (1000 / Videox86.UPDATES_PER_SECOND)|0;
                this.msUpdateInterval = this.msUpdateNormal;
                this.msUpdatePrev = this.cmsUpdate = 0;

                let video = this;
                this.timerRetrace = this.cpu.addTimer(this.id, function startVerticalRetrace() {
                    let card = video.cardActive;
                    /**
                     * The following code is a work-around for IBM's VGA diagnostic code starting at C000:01E5,
                     * which expects an entire screen refresh (ie, 400 horizontal retraces followed by 1 vertical
                     * retrace) to take roughly 1/30 of a second instead of 1/60.  The longer vertical retrace
                     * period may be due to some idiosyncrasy of how they programmed the card beforehand, I'm not
                     * sure.  But I do know that they've turned on the SEQ.CLKMODE.SCREEN_OFF bit, so I use that
                     * bit to trigger this work-around, which involves skipping every other (odd) vertical retrace
                     * timeout here, and cutting the corresponding number of elapsed cycles in getRetraceBits()
                     * by half.
                     *
                     * If we don't do this, then the card generates an annoying series of beeps every time the
                     * machine resets.  TODO: Figure out why the VGA diagnostic takes more time on real hardware.
                     */
                    card.nCountVertRetrace++;
                    if (card.nCard === Videox86.CARD.VGA) {
                        if (card.regSEQData[Card.SEQ.CLKMODE.INDX] & Card.SEQ.CLKMODE.SCREEN_OFF) {
                            if (card.nCountVertRetrace & 1) {
                                return;
                            }
                        }
                    }
                    card.nCyclesVertRetrace = video.cpu.getCycles();
                    if (DEBUG) video.printf(MESSAGE.VIDEO + MESSAGE.TIMER, "vertical retrace timer fired (%d cycles)\n", card.nCyclesVertRetrace);
                    if (video.nIRQ) {
                        if (!(card.regCRTData[Card.CRTC.EGA.VREND.INDX] & Card.CRTC.EGA.VREND.DISABLE_VRINT)) {
                            if (video.chipset) video.chipset.setIRR(video.nIRQ);
                        }
                    }
                    /**
                     * For simplicity, let's imagine that the normal screen update interval is 15ms.  If retraces are
                     * happening a bit too fast (eg, every 10ms), we'll skip the update on the first retrace, do it on
                     * the second retrace, skip on the third, and so on.  That's clearly too many skips, so when we
                     * do the second retrace, we should "bank" the extra 5ms by rewinding msUpdatePrev that amount.
                     * Just make sure we never "bank" too much (for example, on the first update, when msUpdatePrev is
                     * zero).
                     */
                    let msUpdate = Date.now();
                    let msDelta = (msUpdate - video.msUpdatePrev) - video.msUpdateInterval;
                    if (msDelta >= 0) {
                        let fUpdated = video.updateScreen();
                        if (fUpdated) {
                            let cmsUpdate = Date.now() - msUpdate;
                            /**
                             * Make sure that the modulo number here is always a multiple of the blink modulo in
                             * updateScreen(), so that we don't create blink irregularity every time we reset our
                             * average update time (cmsUpdate).
                             */
                            if (video.cUpdates % 120 == 1) {
                                video.cUpdates = 1;
                                video.cmsUpdate = cmsUpdate;
                            } else {
                                video.cmsUpdate += cmsUpdate;
                                cmsUpdate = video.cmsUpdate / video.cUpdates;
                            }
                            /**
                             * If cmsUpdate is taking more than 25% of the update interval (eg, 4ms of a 16ms interval),
                             * then we want to increase the interval, so that updates are a smaller percentage of the overall
                             * workload.
                             */
                            if (cmsUpdate >= video.msUpdateInterval / 4) {
                                video.msUpdateInterval = video.msUpdateNormal * 2;
                            }
                            else if (cmsUpdate < video.msUpdateNormal / 4) {
                                video.msUpdateInterval = video.msUpdateNormal;
                            }
                        }
                        video.msUpdatePrev = msUpdate - (msDelta >= video.msUpdateInterval? 0 : msDelta);
                    }
                    else if (DEBUG) {
                        video.printf(MESSAGE.VIDEO + MESSAGE.TIMER, "skipping update (%dms too soon)\n", -msDelta);
                    }
                    video.latchStartAddress();
                }, -this.cardActive.nCyclesVertPeriod);
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * This is where we might add some method of blanking the display, without the disturbing the video
     * buffer contents, and blocking all further updates to the display.
     *
     * @this {Videox86}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * reset()
     *
     * @this {Videox86}
     */
    reset()
    {
        let nMonitorType = ChipSet.MONITOR.NONE;

        /**
         * We'll ask the ChipSet what SW1 indicates for monitor type, but we may override it if a specific
         * video card model is set.  For EGA, SW1 is supposed to be set to indicate NO monitor, and we rely
         * on the EGA's own switch settings instead.
         */
        if (this.chipset) {
            nMonitorType = this.chipset.getDIPVideoMonitor();
        }

        /**
         * As we noted in the constructor, when a model is specified, that takes precedence over any monitor
         * switch settings.  Conversely, when no model is specified, the nCard setting is considered provisional,
         * so the monitor switch settings, if any, are allowed to determine the card type.
         */
        if (!Videox86.MODEL[this.model]) {
            this.nCard = (nMonitorType == ChipSet.MONITOR.MONO? Videox86.CARD.MDA : Videox86.CARD.CGA);
        }

        let aMonitors;
        this.nModeDefault = Videox86.MODE.CGA_80X25;

        switch (this.nCard) {
        case Videox86.CARD.VGA:
            nMonitorType = ChipSet.MONITOR.VGACOLOR;
            break;

        case Videox86.CARD.EGA:
            aMonitors = Videox86.aEGAMonitorSwitches[this.bEGASwitches];
            /**
             * TODO: Figure out how to deal with aMonitors[2], the boolean which indicates
             * whether the EGA is driving the primary monitor (true) or the secondary monitor (false).
             */
            if (aMonitors) nMonitorType = aMonitors[0];
            if (!nMonitorType) {
                nMonitorType = ChipSet.MONITOR.EGACOLOR;
                break;
            }
            if (nMonitorType != ChipSet.MONITOR.MONO) break;
            /* falls through */

        case Videox86.CARD.MDA:
            nMonitorType = ChipSet.MONITOR.MONO;
            this.nModeDefault = Videox86.MODE.MDA_80X25;
            break;

        case Videox86.CARD.CGA:
            /* falls through */

        default:
            nMonitorType = ChipSet.MONITOR.COLOR;
            break;
        }

        if (this.nMonitorType !== nMonitorType) {
            this.nMonitorType = nMonitorType;
        }

        this.cardActive = null;
        this.cardMono = this.cardMDA = new Card(this, Videox86.CARD.MDA);
        this.cardColor = this.cardCGA = new Card(this, Videox86.CARD.CGA);

        if (this.nCard < Videox86.CARD.EGA) {
            this.cardEGA = new Card();      // define a dummy (uninitialized) EGA card for now
        }
        else {
            this.cardEGA = new Card(this, this.nCard, null, this.cbMemory);
            this.enableEGA();
        }

        this.nMode = null;
        this.setMode(this.nModeDefault);

        if (this.cardActive.addrBuffer && this.nRandomize) {
            /**
             * On the initial power-on, we initialize the video buffer to random characters, as a way of testing
             * whether our font(s) were successfully loaded.  It's assumed that our default display mode is a text mode,
             * and that since this is a reset, the CRTC.START_ADDR registers are zero as well.
             *
             * If this is an MDA device, then the buffer should reside at 0xB0000 through 0xB0FFF, for a total length
             * of 4Kb (0x1000), where every even byte contains a character code, and every odd byte contains an attribute
             * code.  See the ATTR bit definitions above for applicable color, intensity, and blink values.  On a CGA
             * device, the buffer resides at 0xB8000 through 0xBBFFF, for a total length of 16Kb.
             *
             * Note that the only valid MDA display mode (7) is the 80x25 text mode, which uses 4000 bytes (2000 character
             * bytes + 2000 attribute bytes), not all 4096 bytes; addrScreenLimit reflects the visible limit, not the
             * physical limit.  Also, as noted in updateScreen(), this simplistic calculation of the extent of visible
             * screen memory is valid only for text modes; in general, it's safer to use cardActive.sizeBuffer as the extent.
             */
            let addrScreenLimit = this.cardActive.addrBuffer + this.cbScreen;
            for (let addrScreen = this.cardActive.addrBuffer; addrScreen < addrScreenLimit; addrScreen += 2) {
                let dataRandom = (Math.random() * 0x10000) | 0;
                let bChar, bAttr;
                if (this.nMonitorType == ChipSet.MONITOR.EGACOLOR || this.nMonitorType == ChipSet.MONITOR.VGACOLOR) {
                    /**
                     * For the EGA, we choose sequential characters; for random characters, copy the MDA/CGA code below.
                     */
                    bChar = (addrScreen >> 1) & 0xff;
                    bAttr = (dataRandom >> 8) & ~Videox86.ATTRS.BGND_BLINK;    // TODO: turn blink attributes off unless we can ensure blinking is initially disabled
                    if ((bAttr >> 4) == (bAttr & 0xf)) {
                        bAttr ^= 0x0f;      // if background matches foreground, invert foreground to ensure character visibility
                    }
                } else {
                    bChar = dataRandom & 0xff;
                    bAttr = ((dataRandom & 0x100)?
                        (Videox86.ATTRS.FGND_WHITE | Videox86.ATTRS.BGND_BLACK) :
                        (Videox86.ATTRS.FGND_BLACK | Videox86.ATTRS.BGND_WHITE)) | ((Videox86.ATTRS.FGND_BRIGHT /* | Videox86.ATTRS.BGND_BLINK */) & (dataRandom >> 8));
                }
                this.bus.setShortDirect(addrScreen, bChar | (bAttr << 8));
            }
            this.updateScreen(true);
        }
    }

    /**
     * enableEGA()
     *
     * Redirect cardMono or cardColor to cardEGA as appropriate.
     *
     * @this {Videox86}
     */
    enableEGA()
    {
        if (!(this.cardEGA.regMisc & Card.MISC.IO_SELECT)) {
            this.cardMono = this.cardEGA;
            this.cardColor = this.cardCGA;  // this is done mainly to siphon away any CGA I/O
        } else {
            this.cardMono = this.cardMDA;   // similarly, this is done to siphon away any MDA I/O
            this.cardColor = this.cardEGA;
        }
    }

    /**
     * save()
     *
     * This implements save support for the Video component.
     *
     * @this {Videox86}
     * @returns {Object}
     */
    save()
    {
        let state = new State(this);
        state.set(0, this.cardMDA.saveCard());
        state.set(1, this.cardCGA.saveCard());
        state.set(2, [this.nMonitorType, this.nModeDefault, this.nMode]);
        state.set(3, this.cardEGA.saveCard());
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the Video component.
     *
     * @this {Videox86}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        let a = data[2];
        this.nMonitorType = a[0];
        this.nModeDefault = a[1];
        this.nMode = a[2];

        this.cardActive = null;
        this.cardMono = this.cardMDA = new Card(this, Videox86.CARD.MDA, data[0]);
        this.cardColor = this.cardCGA = new Card(this, Videox86.CARD.CGA, data[1]);

        /**
         * If no EGA was originally initialized, then cardEGA will remain uninitialized.
         */
        this.cardEGA = new Card(this, this.nCard, data[3], this.cbMemory);
        if (this.cardEGA.fActive) this.enableEGA();

        /**
         * While I could restore the active card here, it's better for setMode() to do it, because
         * setMode() will also take care of mapping the appropriate video buffer.  So, after restore() has
         * finished, we call checkMode(), because the current video mode (nMode) is determined by the
         * active card state.
         *
         * Unfortunately, that creates a chicken-and-egg problem, since I just said I didn't want to select
         * the active card here.
         *
         * So, we'll add some "cop-out" code to checkMode(): if there's no active card, then fall-back
         * to the last known video mode (nMode) and force a call to setMode().
         *
         *      this.cardActive = (this.cardMDA.fActive? this.cardMDA : (this.cardCGA.fActive? this.cardCGA : undefined));
         */
        if (!this.checkMode()) return false;

        this.checkCursor();
        return true;
    }

    /**
     * doneLoad(sURL, sFontData, nErrorCode)
     *
     * @this {Videox86}
     * @param {string} sURL
     * @param {string} sFontData
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    doneLoad(sURL, sFontData, nErrorCode)
    {
        if (nErrorCode) {
            this.printf(nErrorCode < 0? MESSAGE.STATUS : MESSAGE.NOTICE, "Unable to load font ROM (error %d: %s)\n", nErrorCode, sURL);
            return;
        }

        Component.addMachineResource(this.idMachine, sURL, sFontData);

        try {
            /**
             * The most likely source of any exception will be right here, where we're parsing the JSON-encoded data.
             */
            let abFontData = eval("(" + sFontData + ")");

            let ab = /** @type {Array} */ (abFontData['bytes'] || (abFontData['width'] == 8 && abFontData['values']) || abFontData);

            if (!ab || !ab.length) {
                Component.error("Unsupported font ROM: " + sURL);
                return;
            }
            else if (ab.length == 1) {
                Component.error(ab[0]);
                return;
            }
            /**
             * Translate the character data into separate "fonts", each of which will be a separate canvas object, with all
             * 256 characters arranged in a 16x16 grid.
             */
            if (ab.length == 8192) {
                /**
                 * The assumption here is that we're dealing with the original (IBM) MDA/CGA font data, which apparently
                 * was identical on both MDA and CGA cards (even though the former had no use for the latter, and vice versa).
                 *
                 * First, let's take a look at the MDA portion of the data.  Here are the first few rows of MDA font data,
                 * at the 0K and 2K boundaries:
                 *
                 *      00000000  00 00 00 00 00 00 00 00  00 00 7e 81 a5 81 81 bd  |..........~.....|
                 *      00000010  00 00 7e ff db ff ff c3  00 00 00 36 7f 7f 7f 7f  |..~........6....|
                 *      ...
                 *      00000800  00 00 00 00 00 00 00 00  99 81 7e 00 00 00 00 00  |..........~.....|
                 *      00000810  e7 ff 7e 00 00 00 00 00  3e 1c 08 00 00 00 00 00  |..~.....>.......|
                 *
                 * 8 bytes of data from a row in each of the 2K chunks are combined to form a 8-bit wide character with
                 * a maximum height of 16 bits.  Assembling the bits for character 0x01 (a happy face), we observe the following:
                 *
                 *      0 0 0 0 0 0 0 0  <== 00 from offset 0x0008
                 *      0 0 0 0 0 0 0 0  <== 00 from offset 0x0009
                 *      0 1 1 1 1 1 1 0  <== 7e from offset 0x000A
                 *      1 0 0 0 0 0 0 1  <== 81 from offset 0x000B
                 *      1 0 1 0 0 1 0 1  <== a5 from offset 0x000C
                 *      1 0 0 0 0 0 0 1  <== 81 from offset 0x000D
                 *      1 0 0 0 0 0 0 1  <== 81 from offset 0x000E
                 *      1 0 1 1 1 1 0 1  <== bd from offset 0x000F
                 *      1 0 0 1 1 0 0 1  <== 99 from offset 0x0808
                 *      1 0 0 0 0 0 0 1  <== 81 from offset 0x0809
                 *      0 1 1 1 1 1 1 0  <== 7e from offset 0x080A
                 *      0 0 0 0 0 0 0 0  <== 00 from offset 0x080B
                 *      0 0 0 0 0 0 0 0  <== 00 from offset 0x080C
                 *      0 0 0 0 0 0 0 0  <== 00 from offset 0x080D
                 *      0 0 0 0 0 0 0 0  <== 00 from offset 0x080E
                 *      0 0 0 0 0 0 0 0  <== 00 from offset 0x080F
                 *
                 * In the second 2K chunk, we observe that the last two bytes of every font cell definition are zero;
                 * this confirms our understanding that MDA font cell size is 8x14.
                 *
                 * Finally, there's the issue of screen cell size, which is actually 9x14 on the MDA.  We compensate for that
                 * by building a 9x14 font, even though there's only 8x14 bits of data. As http://www.seasip.info/VintagePC/mda.html
                 * explains:
                 *
                 *      "For characters C0h-DFh, the ninth pixel column is a duplicate of the eighth; for others, it's blank."
                 *
                 * This last point is confirmed by "The IBM Personal Computer From The Inside Out", p.295:
                 *
                 *      "Another unique feature of the monochrome adapter is a set of line-drawing and area-fill characters
                 *      that give continuous lines and filled areas. This is unusual for a display with a 9x14 character box
                 *      because the character generator provides a row only eight dots wide. On most displays, a blank 9th
                 *      dot is then inserted between characters. On the monochrome display, there is circuitry that duplicates
                 *      the 8th dot into the 9th dot position for characters whose ASCII codes are 0xB0 [sic] through 0xDF."
                 *
                 * However, the above text is mistaken about the start of the range.  While there ARE line-drawing characters
                 * in the range 0xB0-0xBF, none of them extend all the way to the right edge; IBM carefully segregated them.
                 * And in fact, characters 0xB0-0xB2 contain hash patterns that you would NOT want extended into the 9th column.
                 *
                 * The CGA font is part of the same ROM.  In fact, there are TWO CGA fonts in the ROM: a thin 5x7 "single dot"
                 * font located at offset 0x1000, and a thick 7x7 "double dot" font at offset 0x1800.  The latter is the default
                 * font, unless overridden by a jumper setting on the CGA card, so it is our default CGA font as well (although
                 * someday we may provide a virtual jumper setting that allows you to select the thinner font).
                 *
                 * The first offset we must pass to setFontData() is the offset of the CGA font; we choose the thicker "double dot"
                 * CGA font at 0x1800 (which was the PC's default font as well), instead of the thinner "single dot" font at 0x1000.
                 * The second offset is for the MDA font.
                 */
                this.setFontData(ab, [0x1800, 0x0000]);
            }
            else if (ab.length == 2048) {
                /**
                 * The assumption here is that we're dealing strictly with CGA (8x8) font data, like the font data found
                 * in the Columbia Data Products (CDP) Font ROM.
                 */
                this.setFontData(ab, [0x0000]);
            }
            else {
                this.printf(MESSAGE.NOTICE, "Unrecognized font data length (%d)\n", ab.length);
                return;
            }

        } catch (e) {
            this.printf(MESSAGE.NOTICE, "Font ROM data error: %s\n", e.message);
            return;
        }
        /**
         * If we're still here, then we're ready!
         *
         * UPDATE: Per issue #21 (https://github.com/jeffpar/pcjs.v1/issues/21), I issued setReady() *only* if a valid
         * contextScreen existed *or* a debugger was attached, and decided to consider a more general-purpose solution for
         * whether or not the user wanted to run in a "headless" mode at a later date.
         *
         * Well, that later date is now, and since pc.js always runs machines in a "headless" mode, we're going to always
         * mark ourselves ready.
         *
         *      if (this.contextScreen || this.dbg) this.setReady();
         */
        this.setReady();
    }

    /**
     * onROMLoad(abRom, aParms)
     *
     * Called by the ROM's copyROM() function whenever a ROM component with a 'notify' attribute containing
     * our component ID has been loaded.
     *
     * @this {Videox86}
     * @param {Array.<number>} abROM
     * @param {Array.<number>} [aParms]
     */
    onROMLoad(abROM, aParms)
    {
        if (this.nCard == Videox86.CARD.EGA) {
            /**
             * TODO: Unlike the MDA/CGA font data, we may want to hang onto this data, so that we can
             * regenerate the color font(s) whenever the foreground and/or background colors have changed.
             */
            if (DEBUG) this.printf("onROMLoad(): EGA fonts loaded\n");
            /**
             * For EGA cards, in the absence of any parameters, we assume that we're receiving the original
             * IBM EGA ROM, which stores its 8x14 font data at 0x2230 as one continuous sequence; the total size
             * of the 8x14 font is 0xE00 bytes.
             *
             * At 0x3030, there is an "ALPHA SUPPLEMENT" table, which contains 15 bytes per row instead of 14,
             * because each row is preceded by one byte containing the corresponding ASCII code; there are 20
             * entries in the supplemental table, for a total size of 0x12C bytes.
             *
             * Finally, at 0x3160, we have the 8x8 font data (also known as the thicker "double dot" CGA font);
             * the total size of the 8x8 font is 0x800 bytes.  No other font data is present in the EGA ROM;
             * the thin 5x7 "single dot" CGA font is notably absent, which is fine, because we never loaded it for
             * the MDA/CGA either.
             *
             * TODO: Determine how the supplemental table is used and whether we need to add some "run-time"
             * font generation to support it (as opposed to "init-time" generation, which is all we do now).
             * There's probably a similar need for user-defined fonts; for now, they're simply not supported.
             */
            this.setFontData(abROM, aParms || [0x3160, 0x2230], 8);
        }
        else if (this.nCard == Videox86.CARD.VGA) {
            if (DEBUG) this.printf("onROMLoad(): VGA fonts loaded\n");
            /**
             * For VGA cards, in the absence of any parameters, we assume that we're receiving the original
             * IBM VGA ROM, which contains an 8x14 font at 0x3F8D (and corresponding supplemental table at 0x4D8D)
             * and an 8x8 font at 0x378D; however, it also contains an 8x16 font at 0x4EBA (and corresponding
             * supplemental table at 0x5EBA).  See our reconstructed source code in:
             *
             *      /machines/pcx86/ibm/video/vga/1986-10-27/IBM-VGA.asm
             */
            this.setFontData(abROM, aParms || [0x378d, 0x3f8d, 0x4eba], 8);
        }
        this.setReady();
    }

    /**
     * setFontData(abFontData, aFontOffsets, cxFontChar)
     *
     * To support partial font rebuilds (required for the EGA), we now preserve the original font data (abFontData),
     * font offsets (aFontOffsets), and font character width (8 for the EGA, undefined for the MDA/CGA).
     *
     * TODO: Ultimately, we want to have exactly one dedicated font for the EGA, the data for which we'll read directly
     * from plane 2 of video memory, instead of relying on the original font data in ROM.  Relying on the ROM data was
     * originally just a crutch to help get EGA support bootstrapped.
     *
     * Also, for the MDA/CGA, we should be discarding the font data after the first buildFont() call, because we
     * should never need to rebuild the fonts for those cards (both their font patterns and colors were hard-coded).
     *
     * @this {Videox86}
     * @param {Array.<number>} abFontData is the raw font data, from the ROM font file
     * @param {Array.<number>} aFontOffsets contains offsets into abFontData: [0] for CGA, [1] for MDA/EGA, and [2] for VGA
     * @param {number} [cxFontChar] is a fixed character width to use for all fonts; undefined to use MDA/CGA defaults
     */
    setFontData(abFontData, aFontOffsets, cxFontChar)
    {
        this.abFontData = abFontData;
        this.aFontOffsets = aFontOffsets;
        this.cxFontChar = cxFontChar;
    }

    /**
     * getCardColors(nBitsPerPixel)
     *
     * @this {Videox86}
     * @param {number} [nBitsPerPixel]
     * @returns {Array}
     */
    getCardColors(nBitsPerPixel)
    {
        if (nBitsPerPixel == 1) {
            /**
             * Only 2 total colors.
             */
            this.aRGB[0] = Videox86.aCGAColors[Videox86.ATTRS.FGND_BLACK];
            this.aRGB[1] = this.getFontColor(Videox86.aCGAColors, Videox86.ATTRS.FGND_WHITE);
            return this.aRGB;
        }

        if (nBitsPerPixel == 2) {
            /**
             * Of the 4 colors returned, the first color comes from regColor and the other 3 come from one of
             * the two hard-coded CGA color sets:
             *
             *      Color Set 0             Color Set 1
             *      -----------------       -----------------
             *      Background (0x00)       Background (0x00)
             *      Green      (0x02)       Cyan       (0x03)
             *      Red        (0x04)       Magenta    (0x05)
             *      Brown      (0x06)       White      (0x07)
             *
             * The numbers in parentheses are the EGA ATC palette register values that the EGA BIOS uses for each
             * color set; I rely on those numbers to synthesize a fake CGA regColor value.
             */
            let regColor = this.cardActive.regColor;
            if (this.cardActive === this.cardEGA) {
                let bBackground = this.cardEGA.regATCData[0];
                regColor = bBackground & Card.CGA.COLOR.BORDER;
                if (bBackground & Card.ATC.PALETTE.BRIGHT) regColor |= Card.CGA.COLOR.BRIGHT;
                if ((this.cardEGA.regATCData[1] & 0x0f) == 0x03) regColor |= Card.CGA.COLOR.COLORSET1;
            }
            this.aRGB[0] = this.getFontColor(Videox86.aCGAColors, regColor & (Card.CGA.COLOR.BORDER | Card.CGA.COLOR.BRIGHT));
            let aColorSet = (regColor & Card.CGA.COLOR.COLORSET1)? Videox86.aCGAColorSet1 : Videox86.aCGAColorSet0;
            for (let iColor = 0; iColor < aColorSet.length; iColor++) {
                this.aRGB[iColor + 1] = this.getFontColor(Videox86.aCGAColors, aColorSet[iColor]);
            }
            return this.aRGB;
        }

        if (this.cardColor === this.cardCGA) {
            for (let iColor = 0; iColor < Videox86.aCGAColors.length; iColor++) {
                this.aRGB[iColor] = this.getFontColor(Videox86.aCGAColors, iColor);
            }
            return this.aRGB;
        }

        this.assert(this.cardColor === this.cardEGA);

        if (this.fRGBValid && nBitsPerPixel && !this.aRGB[16]) {
            this.fRGBValid = false;
        }

        if (!this.fRGBValid) {

            let card = this.cardEGA;
            let aDAC = card.regDACData;
            let aRegs, i, dw, b, bRed, bGreen, bBlue;

            if (nBitsPerPixel == 8) {
                /**
                 * The card must be a VGA, and it's using an (8bpp) mode that bypasses the ATC, so we need to pull
                 * RGB data exclusively from the 256-entry DAC; each entry contains 6-bit red, green, and blue values
                 * packed into bits 0-5, 6-11, and 12-17, respectively, each of which we effectively shift left 2 bits:
                 * a crude 6-to-8-bit color conversion.
                 */
                for (i = 0; i < 256; i++) {
                    dw = aDAC[i] || 0;
                    this.assert(dw >= 0 && dw <= 0x3ffff);
                    bRed = (dw << 2) & 0xfc;
                    bGreen = (dw >> 4) & 0xfc;
                    bBlue = (dw >> 10) & 0xfc;
                    this.aRGB[i] = [bRed, bGreen, bBlue, 0xff];
                }
            } else {
                /**
                 * We need to pull RGB data from the ATC; moreover, if the ATC hasn't been initialized yet,
                 * we go with a default EGA-compatible 16-color palette.  We'll also use the DAC if there is one
                 * (ie, this is actually a VGA) and it appears to be initialized (ie, the VGA BIOS has been run).
                 */
                let fDAC = (aDAC && aDAC[255] != null);
                aRegs = (card.regATCData[15] != null? card.regATCData : Videox86.aEGAPalDef);
                for (i = 0; i < 16; i++) {
                    b = aRegs[i] & Card.ATC.PALETTE.MASK;
                    /**
                     * If the DAC is valid, we need to supplement the 6 bits of each ATC palette entry with the values
                     * for bits 6 and 7 from the ATC COLORSEL register (and overwrite bits 4 and 5 if ATC.MODE.COLORSEL_ALL
                     * is set as well).
                     *
                     * The only reasons the DAC wouldn't be valid are if 1) we're trying to display an image before the machine
                     * and its BIOS have had a chance to initialize the DAC (because we don't preset it to anything, although
                     * perhaps we should), or 2) this is an EGA, which doesn't have a DAC.
                     */
                    if (fDAC) {
                        b |= (card.regATCData[Card.ATC.COLORSEL.INDX] & (Card.ATC.COLORSEL.DAC_BIT7 | Card.ATC.COLORSEL.DAC_BIT6)) << 4;
                        if (card.regATCData[Card.ATC.MODE.INDX] & Card.ATC.MODE.COLORSEL_ALL) {
                            b &= ~0x30;
                            b |= (card.regATCData[Card.ATC.COLORSEL.INDX] & (Card.ATC.COLORSEL.DAC_BIT5 | Card.ATC.COLORSEL.DAC_BIT4)) << 4;
                        }
                        this.assert(b >= 0 && b <= 255);
                        dw = aDAC[b];
                        this.assert(dw >= 0 && dw <= 0x3ffff);
                        bRed = (dw << 2) & 0xfc;
                        bGreen = (dw >> 4) & 0xfc;
                        bBlue = (dw >> 10) & 0xfc;
                    } else {
                        bRed = (((b & 0x04)? 0xaa : 0) | ((b & 0x20)? 0x55 : 0));
                        bGreen = (((b & 0x02)? 0xaa : 0) | ((b & 0x10)? 0x55 : 0));
                        bBlue = (((b & 0x01)? 0xaa : 0) | ((b & 0x08)? 0x55 : 0));
                    }
                    this.aRGB[i] = [bRed, bGreen, bBlue, 0xff];
                }
            }
            this.fRGBValid = true;
        }

        return this.aRGB;
    }

    /**
     * getFontColor(aColors, iColor)
     *
     * If no 'fontColor' property override was specified, then this function simply returns the iColor entry
     * in aColors.
     *
     * Otherwise, we convert iColor to a signed value, where zero represents fontColor, negative values represent
     * darker shades, and positive values represent lighter shades.  Next, since rgbFont already contains the RGB
     * values from 'fontColor', we find the smallest and largest values in rgbFont (NOTE: these min and max values
     * should really be cached).  Those values tell us how many times we can decrement or increment all the RGB
     * values in unison, changing the intensity of the color without changing the hue.  We then calculate an RGB
     * value corresponding to iColor.
     *
     * @this {Videox86}
     * @param {Array} aColors
     * @param {number} iColor
     * @returns {Array}
     */
    getFontColor(aColors, iColor)
    {
        if (!this.colorFont) {
            return aColors[iColor];
        }
        let nColors = aColors.length;
        let nRange = (nColors >> 1);
        /**
         * When nColors is 16, nRange is 8, and iColor (originally 0-15) is now -7 to 8
         */
        iColor = (iColor + 1) - nRange;
        if (!iColor) {
            return this.rgbFont;
        }
        let rgb = [0x00, 0x00, 0x00, 0xff];
        let i, nDelta, nMin = 0xff, nMax = 0;
        for (i = 0; i < 3; i++) {
            if (nMin > this.rgbFont[i]) nMin = this.rgbFont[i];
            if (nMax < this.rgbFont[i]) nMax = this.rgbFont[i];
        }
        if (iColor < 0) {
            nDelta = nMax / (nRange - 1);       // NOTE: Since I now use nMax instead of nMin here, we could just drop nMin
        } else {
            nDelta = (0x100 - nMax) / nRange;
        }
        for (i = 0; i < 3; i++) {
            rgb[i] = (this.rgbFont[i] + nDelta * iColor)|0;
            if (rgb[i] < 0) rgb[i] = 0;
            if (rgb[i] > 0xff) rgb[i] = 0xff;
        }
        return rgb;
    }

    /**
     * getIntenseColor(rgb)
     *
     * Determine the maximum amount we can adjust all RGB entries by without overflowing, and return a new RGB array.
     *
     * @this {Videox86}
     * @param {Array} rgb
     * @returns {Array}
     */
    getIntenseColor(rgb)
    {
        let rgbIntense = rgb.slice();
        let i, j = 0;
        for (i = 0; i < 3; i++) {
            if (j < rgb[i]) {
                j = rgb[i];
            }
        }
        for (i = 0; i < 3; i++) {
            rgbIntense[i] += 0xff - j;
        }
        return rgbIntense;
    }

    /**
     * getSelectedFonts()
     *
     * @this {Videox86}
     * @returns {number} (low byte is "SELB" font number, used when attribute bit 3 is 0; high byte is "SELA" font number)
     */
    getSelectedFonts()
    {
        let bSelect = this.cardEGA.regSEQData[Card.SEQ.CHARMAP.INDX];
        if (this.nCard < Videox86.CARD.VGA) {
            bSelect &= (Card.SEQ.CHARMAP.SELA | Card.SEQ.CHARMAP.SELB);
        }
        if (!(this.cardEGA.regSEQData[Card.SEQ.MEMMODE.INDX] & Card.SEQ.MEMMODE.EXT)) {
            bSelect &= ~(Card.SEQ.CHARMAP.SELA | Card.SEQ.CHARMAP.SELB);
        }
        let nFontSelect0 = (bSelect & Card.SEQ.CHARMAP.SELB) | ((bSelect & Card.SEQ.CHARMAP.SELB_HI) >> 2);
        let nFontSelect1 = ((bSelect & Card.SEQ.CHARMAP.SELA) >> 2) | ((bSelect & Card.SEQ.CHARMAP.SELA_HI) >> 3);
        return nFontSelect0 | (nFontSelect1 << 8);
    }

    /**
     * buildFont(fRebuild)
     *
     * buildFont() is called whenever the Video component is reset or restored; we used to build fonts as soon as
     * the ROM containing them was loaded, and then throw away the underlying font data, but with the EGA's ability
     * to change the color or content of any font, font building must now be deferred until the reset or restore
     * notifications, ensuring we have access to the card's colors and other programmed state.
     *
     * We're also called whenever setDimensions() must update character cell dimensions and whenever EGA palette
     * registers are modified, in case one or more font colors changed.
     *
     * Calls to buildFont() should not be expensive though: the underlying createFont() function rebuilds a font only
     * if one or more of the following is true:
     *
     *  1) the font shape has changed (usually accompanied by a font data change)
     *  2) the font colors have changed (only affected colors are rebuilt, if there are no other changes)
     *  3) the font data has changed (EGA and VGA only, based on plane 2 changes recorded in bitsDirtyBanks)
     *
     * @this {Videox86}
     * @param {boolean} [fRebuild] (true if this is a rebuild; default is false)
     * @returns {boolean}
     */
    buildFont(fRebuild = false)
    {
        let fChanges = false;
        this.nActiveFont = this.nAlternateFont = this.nCardFont;

        /**
         * There's no point building fonts unless we're in a windowed (non-command-line) environment, we're
         * in a font-based mode (nCardFont is set), and font data has been supplied (or can be extracted from RAM).
         */
        if (globals.browser && this.nCardFont) {

            /**
             * Build whatever font(s) we need for the current card.  In the case of the EGA/VGA, that can mean up to
             * 4 fonts, if all four font "banks" in plane 2 have been loaded with font data, but if we don't yet know
             * which bank is active, we'll build the default font, using the available font data (ie, abFontData).
             */
            let nFonts = 0;
            let abFontData = this.abFontData;

            let aRGBColors, aColorMap;
            if (this.nCardFont == Videox86.CARD.MDA || this.nMonitorType == ChipSet.MONITOR.MONO) {
                if (!this.colorFont) {
                    aRGBColors = Videox86.aMDAColors;
                } else {
                    /**
                     * When overriding MDA colors, we take rgbFont to be the "normal" color (aMDAColors indices 1 and 2), and
                     * then calculate the MDA's corresponding "intense" color (aMDAColors indices 3 and 4) using getIntenseColor().
                     */
                    aRGBColors = Videox86.aMDAColors.slice();              // start with a copy of aMDAColors
                    aRGBColors[1] = aRGBColors[2] = this.rgbFont;
                    aRGBColors[3] = aRGBColors[4] = this.getIntenseColor(this.rgbFont);
                }
                aColorMap = Videox86.aMDAColorMap;
            } else {
                aRGBColors = this.getCardColors();
            }

            let cxChar, cyChar, offData, bitsBanks, cx, cy;

            switch (this.nCardFont) {
            case Videox86.CARD.MDA:
                if (this.aFontOffsets[1] != null) {
                    if (this.createFont(this.nCardFont, this.cxFontChar || 9, 14, this.aFontOffsets[1], this.cxFontChar? 0 : 0x0800, abFontData, false, aRGBColors, aColorMap)) {
                        fChanges = true;
                    }
                }
                break;

            case Videox86.CARD.CGA:
                if (this.aFontOffsets[0] != null) {
                    if (this.createFont(this.nCardFont, this.cxFontChar || 8, 8, this.aFontOffsets[0], 0x0000, abFontData, false, aRGBColors, aColorMap)) {
                        fChanges = true;
                    }
                }
                break;

            case Videox86.CARD.VGA:
                nFonts += 4;
                /* falls through */

            case Videox86.CARD.EGA:
                nFonts += 4;
                cxChar = this.cxFontChar || 8;
                cyChar = 14;
                offData = this.aFontOffsets[1];
                if (this.aFontOffsets[2]) {
                    cyChar = 16;
                    offData = this.aFontOffsets[2];
                }
                bitsBanks = 0;
                cx = (this.cardEGA.regSEQData[Card.SEQ.CLKMODE.INDX] & Card.SEQ.CLKMODE.DOTS8)? 8 : 9;
                cy = (this.cardEGA.regCRTData[Card.CRTC.MAXSCAN] & Card.CRTCMASKS[Card.CRTC.MAXSCAN]);
                if (cy++) {
                    cxChar = cx;
                    cyChar = cy;
                    offData = 0;
                    abFontData = null;
                    if ((bitsBanks = this.cardEGA.bitsDirtyBanks)) {
                        if (DEBUG) this.printf("buildFont(%b): dirty font data detected (%#04X)\n", fRebuild, bitsBanks);
                        this.cardEGA.bitsDirtyBanks = 0;
                    }
                    this.nFontSelect = this.getSelectedFonts();
                    this.nActiveFont = this.nCardFont + (this.nFontSelect & 0xff);
                    this.nAlternateFont = this.nCardFont + (this.nFontSelect >> 8);
                }
                if (offData != null) {
                    /**
                     * Logical fonts 0-3 (0-7 on the VGA) refer to banks in the following order: 0, 2, 4, 6, 1, 3, 5, 7.
                     *
                     * Note that we no longer build all possible fonts; we build ONLY those fonts that are currently selectable.
                     */
                    for (let nShift = 0, iFontPrev = -1; nShift < 16; nShift += 8) {
                        let iFont = (this.nFontSelect >> nShift) & 0xff;
                        if (iFont == iFontPrev) continue;
                        iFontPrev = iFont;
                        let iBank = (iFont << 1) - (iFont < 4? 0 : 7);
                        if (!abFontData) offData = iBank * 8192;
                        let fNewData = !!(bitsBanks & (0x1 << iBank));
                        if (this.createFont(this.nCardFont + iFont, cxChar, cyChar, offData, 0, abFontData, fNewData, aRGBColors, aColorMap)) {
                            fChanges = true;
                            if (abFontData || !iFont) continue;
                            for (let iFontPrev = 0; iFontPrev < iFont; iFontPrev++) {
                                this.createFontDiff(iFont, iFontPrev, cyChar);
                            }
                        }
                    }
                }
                break;
            }

            if (!fRebuild) {
                /**
                 * Perform some additional initialization common to both reset() and restore() sequences.
                 */
                this.iCellCursor = -1;  // initially, there is no visible cursor cell
                this.cBlinks = -1;      // initially, blinking is not active
                this.cBlinkVisible = 0; // no visible blinking characters (yet)
            }

            if (DEBUG && fChanges) this.printf("buildFont(%b): font changes detected\n", fRebuild);
        }

        return fChanges;
    }

    /**
     * createFont(nFont, cxChar, cyChar, offData, offSplit, abFontData, fNewData, aRGBColors, aColorMap)
     *
     * All color variations are stored on the same font canvas, arranged vertically as a series of grids, where each
     * grid is a 16x16 character glyph array.
     *
     * Since every character must be drawn first with its background color and then with the foreground shape on top,
     * I used to include a series of empty cells at the top every font canvas containing all supported background colors
     * (ie, before the character grids).  But now createFont() also creates an aCSSColors array that is saved alongside
     * the font canvas, and updateChar() uses that array in conjunction with fillRect() to draw character backgrounds.
     *
     * @this {Videox86}
     * @param {number} nFont
     * @param {number} cxChar is the width of the font characters
     * @param {number} cyChar is the height of the font characters
     * @param {number} offData is the offset of the font data
     * @param {number} offSplit is the offset of any split font data, or zero if not split
     * @param {Array.<number>|null} abFontData is the raw font data, from the ROM font file
     * @param {boolean} fNewData (true if abFontData contains potentially modified data, false if not)
     * @param {Array} aRGBColors is an array of color RGB variations, corresponding to supported FGND attribute values
     * @param {Array} [aColorMap] contains color indexes corresponding to attribute values (if not supplied, the mapping is assumed to be 1-1)
     * @returns {boolean} true if any or all fonts were (re)created, false if nothing changed
     */
    createFont(nFont, cxChar, cyChar, offData, offSplit, abFontData, fNewData, aRGBColors, aColorMap)
    {
        let fChanges = false;
        let font = this.aFonts[nFont];
        let nColors = (aRGBColors.length < 16? aRGBColors.length : 16);

        if (!font || nColors != font.aRGBColors.length) {
            font = {
                cxChar:     cxChar,
                cyChar:     cyChar,
                cxCell:     0,
                cyCell:     0,
                aCSSColors: new Array(nColors),
                aRGBColors: aRGBColors.slice(0, nColors),   // make a copy of aRGBColors using slice()
                aColorMap:  aColorMap,
                aCanvas:    new Array(nColors)
            };
        }

        let nDouble = (this.fDoubleFont? 1 : 0);
        let cxCell = cxChar << nDouble;
        let cyCell = cyChar << nDouble;

        let fNewShape = false;
        if (font.cxCell != cxCell || font.cyCell != cyCell) {
            font.cxChar = cxChar;
            font.cyChar = cyChar;
            font.cxCell = cxCell;
            font.cyCell = cyCell;
            fNewShape = true;
        }

        for (let iColor = 0; iColor < nColors; iColor++) {
            let rgbColor = aRGBColors[iColor];
            /**
             * If any of the font's shape, data, or color has changed, then recreate it.  Also, we don't need to check
             * for a color change if we already know there was a shape or data change.
             */
            let fChanged = fNewShape || fNewData;
            if (!fChanged) {
                let rgbColorOrig = font.aCSSColors[iColor]? font.aRGBColors[iColor] : [];
                fChanged = (rgbColor[0] !== rgbColorOrig[0] || rgbColor[1] !== rgbColorOrig[1] || rgbColor[2] !== rgbColorOrig[2]);
            }
            if (fChanged) {
                if (!this.createFontColor(font, iColor, rgbColor, nDouble, offData, offSplit, cxChar, cyChar, abFontData)) {
                    if (DEBUG) this.printf("createFont(%d): no font data found\n", nFont);
                    this.assert(!fChanges);     // the lack of any font data should be detected on the very first color
                    font = null;
                    break;
                }
                if (DEBUG) {
                    if (!fChanges) {
                        this.printf("createFont(%d): creating %s font (%d,%d)\n", nFont, Videox86.cardSpecs[this.nCardFont][0], cxChar, cyChar);
                    }
                    this.printf("createFontColor(%d): [%s]\n", iColor, rgbColor);
                }
                fChanges = true;
            }
        }

        if (fChanges || font != this.aFonts[nFont]) {
            if (this.aDiagContexts.length) {
                let contextDst = this.aDiagContexts[nFont - this.nCardFont];
                if (contextDst) {
                    let canvasDst = contextDst.canvas;
                    if (!font) {
                        contextDst.fillStyle = "black";
                        contextDst.fillRect(0, 0, canvasDst.width, canvasDst.height);
                    }
                    else {
                        let cxDstColor = (canvasDst.width / nColors) | 0;
                        let cyDstColor = canvasDst.height;
                        let aspectDst = canvasDst.width / canvasDst.height;
                        for (let iColor = 0; iColor < nColors; iColor++) {
                            let canvasSrc = font.aCanvas[iColor];
                            contextDst.fillStyle = font.aCSSColors[(iColor + 9) % nColors];
                            contextDst.fillRect(iColor * cxDstColor, 0, cxDstColor, cyDstColor);
                            /**
                             * We want to draw whatever vertical slice of the font canvas will fit in the destination slice
                             * without altering the aspect ratio.  So the source and destination heights will be 100% of their
                             * respective canvases, while the source width will be multiplied by the ratio of the heights and
                             * then chopped.
                             */
                            let ratioHeight = canvasDst.height / canvasSrc.height;
                            let cxSrc = (canvasSrc.width * ratioHeight) | 0;
                            if (cxSrc > cxDstColor) cxSrc = cxDstColor;
                            let cySrc = canvasSrc.height;
                            contextDst.drawImage(canvasSrc, 0, 0, cxSrc, cySrc, iColor * cxDstColor, 0, cxDstColor, cyDstColor);
                        }
                    }
                }
            }
        }

        this.aFonts[nFont] = font;
        return fChanges;
    }

    /**
     * createFontColor(font, iColor, rgbColor, nDouble, offData, offSplit, cxChar, cyChar, abFontData)
     *
     * Now we're ready to create a 16x16 character grid for the specified color.  Note that all
     * the character bits are opaque (alpha=0xff) while all the surrounding bits are transparent
     * (alpha=0x00, as specified in the 4th byte of rgbOff).
     *
     * Originally, I created 256 ImageData objects, using context.createImageData(cxChar,cyChar),
     * then setting its pixels to match those of an individual character, and then drawing characters
     * with contextFont.putImageData().  But putImageData() is relatively slow....
     *
     * Now I create a new canvas, with dimensions that allow me to arrange all 256 characters in an
     * 16x16 grid -- much like the "chargen.png" bitmap used in the C1Pjs version of the Video component.
     * Then drawing becomes much the same as before, because it turns out that drawImage() accepts either
     * an image object OR a canvas object.
     *
     * This also yields better performance, since drawImage() is much faster than putImageData().
     * We still have to use putImageData() to build the font canvas, but that's a one-time operation.
     *
     * @this {Videox86}
     * @param {Font} font
     * @param {number} iColor
     * @param {Array} rgbColor contains the RGB values for iColor
     * @param {number} nDouble is 1 to double output font dimensions, 0 to match input dimensions
     * @param {number} offData is the offset of the font data
     * @param {number} offSplit is the offset of any split font data, or zero if not split
     * @param {number} cxChar is the width of the font characters
     * @param {number} cyChar is the height of the font characters
     * @param {Array.<number>|null} abFontData is the raw font data, from the ROM font file
     * @returns {boolean} true if font created, false if not
     */
    createFontColor(font, iColor, rgbColor, nDouble, offData, offSplit, cxChar, cyChar, abFontData)
    {
        /**
         * If abFontData is null, we will use font data from plane 2 of video memory, which has a "hard-wired" layout
         * of 32 bytes per character (which, for 256 characters, amounts to 8Kb).  Note that on an EGA, up to 4 font
         * "banks" can be stored in plane 2, since each EGA font bank has a "hard-wired" length of 16Kb, whereas on a VGA,
         * up to 8 font banks can be stored in plane 2, since each VGA font bank has a "hard-wired" length of 8Kb;
         * for backward compatibility with the EGA, the VGA's additional 4 font banks are interleaved with the EGA's
         * original 4 font banks.
         */
        let iChar;
        let y;
        let x;
        let cyLimit = 32;
        let adwMemory = this.cardActive && this.cardActive.adwMemory;
        if (abFontData) {
            cyLimit = (cyChar < 8 || !offSplit)? cyChar : 8;
        }
        else {
            /**
             * When font data must be extracted from VRAM (instead of the supplied abFontData), we first do a "pre-scan"
             * to see if any font data actually exists.  For example. the video card's BIOS might zero ALL the font banks
             * (thereby making them "dirty") but then load only the first bank.
             *
             * NOTE: While this might also be a good time compare the font data to a cached copy, to see if anything has
             * actually changed, hopefully that won't be necessary, because we should already be skipping the entire font
             * creation process if the font bank (as indicated by offData) hasn't been marked "dirty" and nothing else
             * about the font (eg, shape, color) has changed either.
             */
            for (iChar = 0; iChar < 256; iChar++) {
                let offChar = offData + iChar * cyLimit;
                for (y = 0; y < cyChar; y++) {
                    let b = (adwMemory[offChar + y] >> 16) & 0xff;
                    if (b) break;
                }
                if (y < cyChar) break;
            }
            if (iChar == 256) {
                return false;
            }
        }

        let rgbOff = [0x00, 0x00, 0x00, 0x00];

        /**
         * Let's take a moment to see if we already have a suitable canvasFont that we can simply reuse.
         */
        let canvasFont = font.aCanvas[iColor];
        if (!canvasFont || canvasFont.width != font.cxCell << 4 || canvasFont.height != font.cyCell << 4) {
            canvasFont = document.createElement("canvas");
            canvasFont.width = font.cxCell << 4;
            canvasFont.height = font.cyCell << 4;
        }
        let contextFont = canvasFont.getContext("2d");
        let imageChar = contextFont.createImageData(font.cxCell, font.cyCell);

        for (iChar = 0; iChar < 256; iChar++) {
            let offChar = offData + iChar * cyLimit;
            for (y = 0; y < cyChar; y++) {
                /**
                 * fUnderline should be true only in the FONT_MDA case, and only for the odd color variations
                 * (1 and 3, out of variations 0 to 4), and only for the second-from-bottom row of the character cell
                 * (based on images from actual MDA hardware).
                 */
                let fUnderline = (font.aColorMap && (iColor & 0x1) && y == cyChar - 2);
                let offScan = (y < cyLimit? offChar + y : offSplit + iChar * cyLimit + y - cyLimit);

                /**
                 * If abFontData is null, then we must extract the next byte of font data from plane 2 of video memory.
                 */
                let b = abFontData? abFontData[offScan] : ((adwMemory[offScan] >> 16) & 0xff);

                for (let nRowDoubler = 0; nRowDoubler <= nDouble; nRowDoubler++) {
                    for (x = 0; x < cxChar; x++) {
                        /**
                         * This "bit" of logic takes care of those characters (0xC0-0xDF) whose 9th bit must mirror the 8th bit;
                         * in all other cases, any bit past the 8th bit is automatically zero.  It also takes care of embedding a
                         * solid row of bits whenever fUnderline is true.
                         *
                         * TODO: For EGA/VGA, replication of the 9th dot needs to be based on the TEXT_9DOT bit of the ATC.MODE
                         * register, which is particularly important for user-defined fonts that do not want that bit replicated.
                         */
                        let bit = (fUnderline? 1 : (b & (0x80 >> (x >= 8 && iChar >= 0xC0 && iChar <= 0xDF? 7 : x))));
                        let xDst = (x << nDouble);
                        let yDst = (y << nDouble) + nRowDoubler;
                        let rgb = (bit? rgbColor : rgbOff);
                        this.setPixel(imageChar, xDst, yDst, rgb);
                        if (nDouble) this.setPixel(imageChar, xDst + 1, yDst, rgb);
                    }
                }
            }
            /**
             * (iChar >> 4) is the equivalent of Math.floor(iChar / 16), and (iChar & 0xf) is the equivalent of (iChar % 16).
             */
            contextFont.putImageData(imageChar, x = (iChar & 0xf) * font.cxCell, y = (iChar >> 4) * font.cyCell);
        }
        /**
         * The colors for cell backgrounds and cursor elements must be converted to CSS color strings.
         */
        font.aCSSColors[iColor] = StrLib.sprintf("#%02X%02X%02X", rgbColor[0], rgbColor[1], rgbColor[2]);
        font.aRGBColors[iColor] = rgbColor;
        font.aCanvas[iColor] = canvasFont;
        return true;
    }

    /**
     * createFontDiff(iFont, iFontPrev, cyChar, cyLimit)
     *
     * Since a programmable font was changed, we need to update the aFontDiff array.  For the EGA,
     * that array looks like this:
     *
     *      [0]: diffs between font 1 and 0     0 = 1 * (1 - 1) / 2
     *      [1]: diffs between font 2 and 0     1 = 2 * (2 - 1) / 2
     *      [2]: diffs between font 2 and 1
     *      [3]: diffs between font 3 and 0     3 = 3 * (3 - 1) / 2
     *      [4]: diffs between font 3 and 1
     *      [5]: diffs between font 3 and 2
     *
     * The VGA continues that progression:
     *
     *      [6]: diffs between font 4 and 0     6 = 4 * (4 - 1) / 2
     *      [7]: diffs between font 4 and 1
     *      [8]: diffs between font 4 and 2
     *      [9]: diffs between font 4 and 3
     *      ...
     *
     * So for a given logical font number (0-3 for the EGA or 0-7 for the VGA), the starting index of
     * "differable" fonts is n * (n - 1) / 2.
     *
     * @this {Videox86}
     * @param {number} iFont
     * @param {number} iFontPrev
     * @param {number} cyChar (height of every character in both fonts)
     * @param {number} [cyLimit] (default is 32)
     */
    createFontDiff(iFont, iFontPrev, cyChar, cyLimit = 32)
    {
        this.assert(iFont);
        let i = ((iFont * (iFont - 1)) >> 1) + iFontPrev;
        let adwMemory = this.cardEGA.adwMemory;
        let aDiff = this.aFontDiff[i] || new Array(256);
        let iBank = (iFont << 1) - (iFont < 4? 0 : 7), offData = iBank * 8192;
        let iBankPrev = (iFontPrev << 1) - (iFontPrev < 4? 0 : 7), offDataPrev = iBankPrev * 8192;
        for (let iChar = 0; iChar < 256; iChar++) {
            aDiff[iChar] = 0;
            let offChar = offData + iChar * cyLimit, offCharPrev = offDataPrev + iChar * cyLimit;
            for (let y = 0; y < cyChar; y++) {
                if (((adwMemory[offChar++] >> 16) & 0xff) !== ((adwMemory[offCharPrev++] >> 16) & 0xff)) {
                    aDiff[iChar] = -1;
                    break;
                }
            }
        }
        this.aFontDiff[i] = aDiff;
    }

    /**
     * getFontDiff(iFont, iFontPrev)
     *
     * Unlike createFontDiff(), where iFontPrev is guaranteed to be less than iFont, that may not be true
     * for getFontDiff(), so we must swap them if iFont < iFontPrev.
     *
     * @this {Videox86}
     * @param {number} iFont
     * @param {number} iFontPrev
     * @returns {Array.<number>}
     */
    getFontDiff(iFont, iFontPrev)
    {
        let a = [];
        if (iFont != iFontPrev) {
            let i;
            if (iFont < iFontPrev) {
                i = iFont;
                iFont = iFontPrev;
                iFontPrev = i;
            }
            i = ((iFont * (iFont - 1)) >> 1) + iFontPrev;
            a = this.aFontDiff[i];
            this.assert(a);
        }
        return a;
    }

    /**
     * checkBlink()
     *
     * Called at the end of every updateScreenText(), which may have updated cBlinkVisible to a non-zero value.
     *
     * Also called at the end of every checkCursor(); ie, whenever the CRT register(s) affecting the position or shape
     * of the hardware cursor have been modified, and any of iCellCursor, yCursor or cyCursor have been modified as a result.
     *
     * Note that the cursor always blinks when it's ON; it can only be turned OFF, moved off-screen, or its rate set to half
     * the normal blink rate (by default, it blinks at the normal blink rate).  Bits 5-6 of the CRTC.CURSCAN register can
     * be set as follows:
     *
     *    00: Cursor blinks at normal blink rate
     *    01: Cursor is off
     *    10: (Same as 00)
     *    11: Cursor blinks at half the normal blink rate
     *
     * According to documentation, the normal blink rate is 1/16 of the frame rate (8 frames on, 8 off).
     *
     * TODO: As an aside, I've observed in the "real world" that the MDA cursor cycles about 3 times per second, and by "cycle"
     * I mean one full off-and-on-again cycle.  I'm assuming that's the normal rate (00), not the slower "half rate" (11).
     * Since that's faster than our current cursor blink rate, we should look into an option to boost our rate, without adversely
     * affecting the attribute blink rate (which is currently hard-coded at half the cursor blink rate), and we should look into
     * supporting "half rate" blinking, too.
     *
     * @this {Videox86}
     * @returns {boolean} true if there are things to blink, false if not
     */
    checkBlink()
    {
        if (this.cBlinkVisible > 0 || this.iCellCursor >= 0) {
            if (this.cBlinks < 0) {
                this.cBlinks = 0;
                /**
                 * At this point, we can either fire up our own timer (doBlink), or rely on updateScreen() being
                 * called by the CPU at regular bursts (eg, Videox86.UPDATES_PER_SECOND = 60) and advance cBlinks at
                 * the start of updateScreen() accordingly.
                 *
                 * doBlink() wants to increment cBlinks every 266ms.  On the other hand, if updateScreen() is being
                 * called 60 times per second, that's about once every 16ms, so if every 16th updateScreen() increments
                 * cBlinks, cBlinks should advance at the same rate.
                 *
                 * One side-effect of relying on the CPU driving our blink count is that whenever the CPU is halted
                 * (eg, by our Debugger) all blinking stops -- all characters with the blink attribute AND the cursor.
                 *
                 * But that's more consistent with how we halt everything else (eg, the PITs, RTC, etc); our Debugger
                 * halts the entire machine, not just the CPU.
                 *
                 *      this.doBlink(true);
                 */
            }
            return true;
        }
        this.cBlinks = -1;
        return false;
    }

    /**
     * checkCursor()
     *
     * Called whenever a CRT data register is updated, since there are multiple registers that can affect the
     * visibility of the cursor (more than these, actually, but I'm going to limit my initial support to standard
     * ROM BIOS controller settings):
     *
     *      CRTC.MAXSCAN
     *      CRTC.CURSCAN
     *      CRTC.CURSCANB
     *      CRTC.STARTHI
     *      CRTC.STARTLO
     *      CRTC.CURSORHI
     *      CRTC.CURSORLO
     *
     * The top of the cursor starts at CURSCAN, and the bottom is CURSCANB - 1, except that if CURSCAN == CURSCANB
     * (or more precisely, if CURSCAN == CURSCANB mod 16), then a single scan line is still drawn.  Also, on cards
     * older than VGA, if CURSCANB < CURSCAN, a split cursor is drawn.
     *
     * Also, at least on the EGA, if CURSCANB is set to a value > MAXSCAN (typically 13 on an EGA), cursor scan line
     * drawing wraps around to zero and does not stop until we reach CURSCAN again.  However, this happens only when
     * CURSCAN is <= MAXSCAN; if CURSCAN > MAXSCAN, then nothing is drawn, regardless of CURSCANB.
     *
     * @this {Videox86}
     * @returns {boolean} true if the cursor is visible, false if not
     */
    checkCursor()
    {
        /**
         * The "hardware cursor" is never visible in graphics modes.
         */
        if (!this.nCardFont) return false;

        let card = this.cardActive;
        for (let i = Card.CRTC.CURSCAN; i <= Card.CRTC.CURSORLO; i++) {
            if (card.regCRTData[i] == null) {
                return false;
            }
        }

        let bCursorFlags = card.regCRTData[Card.CRTC.CURSCAN];
        let bCursorStart = bCursorFlags & Card.CRTC.CURSCAN_SLMASK;
        let bCursorEnd = card.regCRTData[Card.CRTC.CURSCANB] & Card.CRTCMASKS[Card.CRTC.CURSCANB];
        let bCursorMax = card.regCRTData[Card.CRTC.MAXSCAN] & Card.CRTCMASKS[Card.CRTC.MAXSCAN];
        let oCursorStart = bCursorStart, oCursorEnd = bCursorEnd;

        /**
         * Before range-checking CURSCAN and CURSCANB, let's see if the cursor is disabled by a starting value
         * outside the visible range; if so, simulate the condition by pretending the CURSCAN_BLINKOFF bit is set.
         *
         * For example, on a CGA, ThinkTank sets both CURSCAN and CURSCANB to 15, WordStar for PCjr sets CURSCAN and
         * CURSCANB to 12 and 13, respectively, and Rogue sets CURSCAN and CURSCANB to 15 and 0, respectively.
         */
        if (bCursorStart > bCursorMax) {
            bCursorFlags |= Card.CRTC.CURSCAN_BLINKOFF;
        }

        let bCursorWrap = 0;

        if (this.nCard != Videox86.CARD.EGA) {
            /**
             * Live and learn: I originally thought that the EGA introduced funky split cursors, but it turns
             * out that older cards did it, too (well, I've confirmed it on an actual MDA anyway; haven't tried
             * the CGA).  I've also confirmed that the MDA did NOT have the "mod 16" EGA anomaly described below.
             */
            if (bCursorEnd < bCursorStart) {
                bCursorWrap = bCursorEnd + 1;
                bCursorEnd = bCursorMax;
                /**
                 * The VGA didn't support funky split (aka wrap-around) cursors, so as above, we pretend that the
                 * cursor has simply been disabled.
                 */
                if (this.nCard == Videox86.CARD.VGA) {
                    bCursorFlags |= Card.CRTC.CURSCAN_BLINKOFF;
                    bCursorWrap = 0;
                }
            }
            else if (bCursorEnd > bCursorMax) {
                bCursorStart = 0;
                bCursorEnd = bCursorMax;
            }
            bCursorEnd++;
        }
        else {
            /**
             * HACK: The original EGA BIOS has a cursor emulation bug when 43-line mode is enabled; we used to
             * detect that particular combination of bad values and automatically fix them (see below),
             * but in retrospect, that doesn't seem very faithful.  Better to fix things like this 1) only if
             * the user asks, and 2) preferably with a BIOS patch rather than monkeying with the hardware registers.
             *
             *      if (this.nCard == Videox86.CARD.EGA) {
             *          if (bCursorMax == 7 && bCursorStart == 4 && !bCursorEnd) bCursorEnd = 7;
             *      }
             *
             * And here's a strange EGA hardware anomaly: if CURSCAN == CURSCANB mod 16, then it's treated the same
             * as if CURSCAN == CURSCANB.  For example, if you set (CURSCAN,CURSCANB) to either the decimal values
             * (4,19) or (4,21), you'll get a full block cursor, but if you set it to (4,20), you get a single line
             * cursor at row 4.  Go figure!
             */
            if (bCursorStart == bCursorEnd % 16) {
                bCursorEnd = bCursorStart + 1;
            }
            else if (bCursorEnd < bCursorStart) {
                bCursorWrap = bCursorEnd;
                bCursorEnd = bCursorMax + 1;
            }
            else if (bCursorEnd > bCursorMax) {
                bCursorStart = 0;
                bCursorEnd = bCursorMax + 1;
            }
        }

        let bCursorSize = bCursorEnd - bCursorStart;

        /**
         * One way of disabling the cursor is to set bit 5 (Card.CRTC.CURSCAN_BLINKOFF) of the CRTC.CURSCAN flags;
         * another way is setting bCursorStart > bCursorEnd, which implies that bCursorSize <= 0.
         */
        if ((bCursorFlags & Card.CRTC.CURSCAN_BLINKOFF) || bCursorSize <= 0) {
            this.removeCursor();
            return false;
        }

        /**
         * The least tricky way of disabling (ie, hiding) the cursor is to simply move it to an off-screen position.
         */
        let offCursor = card.regCRTData[Card.CRTC.CURSORLO] | ((card.regCRTData[Card.CRTC.CURSORHI] & card.addrMaskHigh) << 8);
        offCursor -= (card.regCRTData[Card.CRTC.STARTLO] | ((card.regCRTData[Card.CRTC.STARTHI] & card.addrMaskHigh) << 8));

        let iCellCursor = Math.trunc(offCursor / this.nColsLogical) * (this.nColsBuffer) + (offCursor % this.nColsLogical);

        if (this.iCellCursor != iCellCursor) {
            if (DEBUG) {
                let rowFrom = (this.iCellCursor / this.nCols)|0;
                let colFrom = (this.iCellCursor % this.nCols);
                let rowTo = (iCellCursor / this.nCols)|0;
                let colTo = (iCellCursor % this.nCols);
                this.printf("checkCursor(): cursor moved from %d,%d to %d,%d\n", rowFrom, colFrom, rowTo, colTo);
            }
            /**
             * I commented out this call on Feb 12, 2018 ("More cursor visibility fixes, especially when dealing with
             * non-zero video buffer start addresses") when I was debugging some Xenix issues, at the same time that I
             * also commented out the above printf(); in hindsight, I'm not sure if I intended to comment both out,
             * but with the change to cBlinkVisible below, I'm assuming removeCursor() really is no longer required here.
             *
             *      this.removeCursor();
             */
            this.iCellCursor = iCellCursor;
            /**
             * We invalidate cBlinkVisible on a cursor position change to ensure the cursor will be redrawn on the
             * next call to updateScreenCells().  It has the downside of requiring ALL cells to be re-examined, not
             * just the old and new cursor cells, but the cell cache should prevent any unnecessary redrawing.
             */
            this.cBlinkVisible = -1;
        }

        /**
         * yCursor and cyCursor are no longer scaled at this point, because the necessary scaling will depend on
         * whether we're drawing the cursor to the on-screen or off-screen buffer, and updateChar() is in the best
         * position to determine that.
         *
         * We also record cyCursorCell, the hardware cell height, since we'll need to know what the yCursor and
         * cyCursor values are relative to when it's time to scale them.
         */
        if (this.yCursor !== bCursorStart || this.cyCursor !== bCursorSize || this.cyCursorWrap !== bCursorWrap) {
            if (DEBUG) {
                this.printf("checkCursor(): cursor shape changed from %d,%d to %d,%d (%#04X-%#04X)\n",
                            this.yCursor, this.cyCursor, bCursorStart, bCursorSize, oCursorStart, oCursorEnd);
            }
            this.yCursor = bCursorStart;
            this.cyCursor = bCursorSize;
            this.cyCursorWrap = bCursorWrap;
            /**
             * The best redraw option for cursor shape changes used to be invalidating the cell cache, since merely
             * invalidating cBlinkVisible wouldn't have the desired effect if the cursor was still in the same location.
             * However, that option was rather drastic.  If the cursor had ALSO just moved (ie, this.cBlinkVisible < 0),
             * we didn't have to worry about it, so we could at least be more selective about when to invalidate the cache:
             *
             * But now we have the option of invalidating just a single cell (and marking the cache as "partially valid"),
             * so that's what we do.  Granted, a lot of hand-wringing over an uncommon operation, but that's how we roll.
             */
            if (this.iCellCacheValid && this.iCellCursor >= 0 && this.iCellCursor < this.aCellCache.length) {
                this.aCellCache[this.iCellCursor] = -1;
                this.iCellCacheValid = 1;
            }
        }

        this.cyCursorCell = bCursorMax + 1;

        /**
         * This next condition is critical; WordStar for PCjr (designed for the CGA) would program CURSCANB to 31,
         * whereas MAXSCAN was 7.  This resulted in cyCursorCell of 8 and cyCursor of 32, producing elongated cursors
         * in updateChar().  By range-checking CURSCAN and CURSCANB against MAXSCAN above, that should no longer happen.
         *
         * This condition can also happen while the CRT controller is in an inconsistent state (ie, in the middle of
         * being completely reprogrammed), so we mustn't freak out.
         */
        if (this.cyCursor > this.cyCursorCell) {
            this.cyCursor = this.cyCursorCell;
        }

        this.checkBlink();
        return true;
    }

    /**
     * removeCursor()
     *
     * @this {Videox86}
     */
    removeCursor()
    {
        if (this.iCellCursor >= 0) {
            if (this.aCellCache !== undefined && this.iCellCursor < this.aCellCache.length) {
                let drawCursor = (Videox86.ATTRS.DRAW_CURSOR << 8);
                let data = this.aCellCache[this.iCellCursor];
                if (data & drawCursor) {
                    data &= ~drawCursor;
                    let col = this.iCellCursor % this.nColsBuffer;
                    let row = (this.iCellCursor / this.nColsBuffer) | 0;
                    if (this.nActiveFont && this.aFonts[this.nActiveFont]) {
                        /**
                         * If we're using an off-screen buffer in text mode, then we need to keep it in sync with "reality".
                         */
                        if (this.contextBuffer) {
                            this.updateChar(col, row, data, this.contextBuffer);
                        }
                        /**
                         * While updating the on-screen canvas directly could open us up to potential subpixel artifacts again,
                         * I'm hopeful that won't be the case, since removeCursor() is called only during certain well-defined
                         * events.  The alternative to this simple updateChar() call is unappealing: redrawing the ENTIRE off-screen
                         * buffer to the on-screen canvas, just as updateScreen() does.
                         */
                        this.updateChar(col, row, data);
                    }
                    if (DEBUG) this.printf("removeCursor(): removed from %d,%d\n", row, col);
                    this.aCellCache[this.iCellCursor] = data;
                }
            }
            this.iCellCursor = -1;
        }
    }

    /**
     * getCardAccess()
     *
     * @this {Videox86}
     * @returns {number} current memory access setting
     */
    getCardAccess()
    {
        let card = this.cardActive;
        let nAccess = Card.READ.PAIRS | Card.WRITE.PAIRS;

        if (card.nCard >= Videox86.CARD.EGA) {
            this.fColor256 = false;
            let regGRCMode = card.regGRCData[Card.GRC.MODE.INDX];
            if (regGRCMode != null) {
                let nReadAccess = Card.READ.MODE0;
                let nWriteAccess = Card.WRITE.MODE0;
                let nWriteMode = regGRCMode & Card.GRC.MODE.WRITE.MASK;
                let regDataRotate = card.regGRCData[Card.GRC.DATAROT.INDX] & Card.GRC.DATAROT.MASK;
                switch (nWriteMode) {
                case Card.GRC.MODE.WRITE.MODE0:
                    if (regDataRotate) {
                        nWriteAccess = Card.WRITE.MODE0 | Card.WRITE.ROT;
                        switch (regDataRotate & Card.GRC.DATAROT.FUNC) {
                        case Card.GRC.DATAROT.AND:
                            nWriteAccess = Card.WRITE.MODE0 | Card.WRITE.AND;
                            break;
                        case Card.GRC.DATAROT.OR:
                            nWriteAccess = Card.WRITE.MODE0 | Card.WRITE.OR;
                            break;
                        case Card.GRC.DATAROT.XOR:
                            nWriteAccess = Card.WRITE.MODE0 | Card.WRITE.XOR;
                            break;
                        default:
                            break;
                        }
                        card.nDataRotate = regDataRotate & Card.GRC.DATAROT.COUNT;
                    }
                    break;
                case Card.GRC.MODE.WRITE.MODE1:
                    nWriteAccess = Card.WRITE.MODE1;
                    break;
                case Card.GRC.MODE.WRITE.MODE2:
                    switch (regDataRotate & Card.GRC.DATAROT.FUNC) {
                    default:
                        nWriteAccess = Card.WRITE.MODE2;
                        break;
                    case Card.GRC.DATAROT.AND:
                        nWriteAccess = Card.WRITE.MODE2 | Card.WRITE.AND;
                        break;
                    case Card.GRC.DATAROT.OR:
                        nWriteAccess = Card.WRITE.MODE2 | Card.WRITE.OR;
                        break;
                    case Card.GRC.DATAROT.XOR:
                        nWriteAccess = Card.WRITE.MODE2 | Card.WRITE.XOR;
                        break;
                    }
                    break;
                case Card.GRC.MODE.WRITE.MODE3:
                    if (this.nCard == Videox86.CARD.VGA) {
                        nWriteAccess = Card.WRITE.MODE3;
                        card.nDataRotate = regDataRotate & Card.GRC.DATAROT.COUNT;
                    }
                    break;
                default:
                    if (DEBUG) this.printf("getCardAccess(): invalid GRC mode (%#04X)\n", regGRCMode);
                    break;
                }
                if (regGRCMode & Card.GRC.MODE.READ.MODE1) {
                    nReadAccess = Card.READ.MODE1;
                }
                /**
                 * I discovered that when the IBM EGA ROM scrolls the screen in graphics modes 0x0D and 0x0E, it
                 * reprograms this register for WRITE.MODE1 (which is fine) *and* EVENODD (which is, um, very odd).
                 * Moreover, it does NOT make the complementary change to the SEQ.MEMMODE.SEQUENTIAL bit; under
                 * normal circumstances, those two bits are always supposed to programmed oppositely.
                 *
                 * Until I can perform some tests on real hardware, I have to assume that the EGA scroll operation
                 * is supposed to actually WORK in modes 0x0D and 0x0E, so I've decided to tie the trigger for my own
                 * EVENODD functions to SEQ.MEMMODE.SEQUENTIAL being clear, instead of GRC.MODE.EVENODD being set.
                 *
                 * It's also possible that my EVENODD read/write functions are not implemented properly; when EVENODD
                 * is in effect, which addresses get latched by a read, and to which addresses are latches written?
                 * If EVENODD has no effect on the effective address used with the latches, then I should change the
                 * EVENODD read/write functions accordingly.
                 *
                 * However, I've also done some limited testing with an emulated VGA running in text mode, and I've
                 * discovered that toggling the GRC.MODE.EVENODD bit *alone* doesn't seem to affect the delivery of
                 * text mode attributes from plane 1.  So maybe this is the wiser change after all.
                 *
                 * TODO: Perform some tests on actual EGA/VGA hardware, to determine the proper course of action.
                 *
                 *  if (regGRCMode & Card.GRC.MODE.EVENODD) {
                 *      nReadAccess |= Card.READ.EVENODD;
                 *      nWriteAccess |= Card.WRITE.EVENODD;
                 *  }
                 */
                let regSEQMode = card.regSEQData[Card.SEQ.MEMMODE.INDX];
                if (regSEQMode != null) {
                    if (!(regSEQMode & Card.SEQ.MEMMODE.SEQUENTIAL)) {
                        nReadAccess |= Card.READ.EVENODD;
                        nWriteAccess |= Card.WRITE.EVENODD;
                    }
                    if (regGRCMode & Card.GRC.MODE.COLOR256) {
                        if (regSEQMode & Card.SEQ.MEMMODE.CHAIN4) {
                            nReadAccess |= Card.READ.CHAIN4;
                            nWriteAccess |= Card.WRITE.CHAIN4;
                        }
                        this.fColor256 = true;
                    }
                }
                nAccess = nReadAccess | nWriteAccess;
            }
        }
        return nAccess;
    }

    /**
     * setCardAccess(nAccess)
     *
     * @this {Videox86}
     * @param {number} nAccess (one of the Card.ACCESS.* constants)
     * @returns {boolean} true if access may have changed, false if not
     */
    setCardAccess(nAccess)
    {
        let card = this.cardActive;
        if (card && nAccess != card.nAccess) {

            if (DEBUG) this.printf("setCardAccess(%#06X)\n", nAccess);

            card.setMemoryAccess(nAccess);

            /**
             * Note that setMemoryAccess() can fail, in which case it will an report error, indicating either a
             * misconfiguration or some sort of internal inconsistency; in any case, there's not much we can do about
             * it at this point, other than possibly reverting the current access setting.  There's probably not much
             * point, however, because there's no guarantee that setMemoryAccess() didn't modify one or more blocks
             * before choking.
             */
            this.bus.setMemoryAccess(card.addrBuffer, card.sizeBuffer, card.getMemoryAccess(), true);
            return true;
        }
        return false;
    }

    /**
     * setDimensions()
     *
     * This is the workhorse of setMode()
     *
     * @this {Videox86}
     */
    setDimensions()
    {
        this.nCardFont = this.nActiveFont = this.nAlternateFont = 0;
        this.nCols = this.nColsDefault;
        this.nRows = this.nRowsDefault;
        this.nPointsPerCell = Videox86.aModeParms[Videox86.MODE.MDA_80X25][2];
        this.nPointsPerByte = Videox86.aModeParms[Videox86.MODE.MDA_80X25][3];
        this.cxScreenCell = this.cyScreenCell = 1;
        this.fOverBuffer = false;

        let cbPadding = 0, cxCell = 1, cyCell = 1;
        let modeParms = Videox86.aModeParms[this.nMode];
        if (modeParms) {

            this.nCols = modeParms[0];
            this.nRows = modeParms[1];
            this.nPointsPerCell = modeParms[2];
            this.nPointsPerByte = modeParms[3];
            cbPadding = modeParms[4];       // undefined for EGA/VGA graphics modes only
            this.nCardFont = modeParms[5];  // this will be undefined for all graphics modes

            if (this.nCardFont) {
                /**
                 * Color text modes originally used an 8x8 font, but beginning with the EGA, they use whatever
                 * font is stored in plane 2, so if the card is "newer" than the default font, update the default
                 * to match the card.
                 */
                if (this.model == "vdu") {
                    this.nCardFont = Videox86.CARD.MDA;
                }
                else if (this.nCard > this.nCardFont) {
                    this.nCardFont = this.nCard;
                }
                this.buildFont();           // this also updates nActiveFont and nAlternateFont
                let font = this.aFonts[this.nActiveFont];
                if (font) {
                    cxCell = font.cxCell;
                    cyCell = font.cyCell;
                    if (this.nCard >= Videox86.CARD.EGA) {
                        /**
                         * Since these cards have programmable font height (font.cyChar), we need to divide that
                         * into the screen height (cyScreen) to determine the effective (ie, visible) number of rows.
                         */
                        let cyScreen = this.cardEGA.getCRTCReg(Card.CRTC.EGA.VDEND);
                        if (cyScreen++) {
                            let nRows = (cyScreen / font.cyChar) | 0;
                            if (nRows) this.nRows = nRows;
                        }
                        this.fOverBuffer = true;
                    }
                }
                this.cxScreenCell = (this.cxScreen / this.nCols) | 0;
                this.cyScreenCell = (this.cyScreen / this.nRows) | 0;
            }
        }

        this.nColsBuffer = this.nColsLogical = this.nCols;
        this.nRowsBuffer = this.nRows;
        if (this.fOverBuffer) {
            this.nColsBuffer++;
            this.nRowsBuffer++;
        }
        this.nCells = (this.nColsBuffer * this.nRowsBuffer) | 0;
        this.nCellCache = (this.nCells / this.nPointsPerCell) | 0;
        this.cbScreen = (this.nCells / this.nPointsPerByte) | 0;
        this.cbSplit = 0;

        if (cbPadding !== undefined) {
            this.cbScreen = (this.cbScreen + cbPadding) | 0;
            this.cbSplit = (this.cbScreen + cbPadding) >> 1;
        }

        this.cxBuffer = this.nColsBuffer * cxCell;
        this.cyBuffer = this.nRowsBuffer * cyCell;

        /**
         * Beyond calculating the theoretical dimensions, there's nothing more to do if we're in a "headless" mode.
         */
        if (!this.contextScreen) return;

        /**
         * Our 'smoothing' parameter defaults to null (which we treat the same as undefined), which means that
         * image smoothing will be selectively enabled (ie, true for text modes, false for graphics modes); otherwise,
         * we'll set image smoothing to whatever value was provided for ALL modes -- assuming the browser supports it.
         */
        if (this.sSmoothing) {
            this.contextScreen[this.sSmoothing] = (this.fSmoothing == null? !!this.nCardFont : this.fSmoothing);
        }

        /**
         * Allocate the off-screen buffers, unless a previous setMode() already cached buffers of the required size.
         */
        if (this.imageCache[this.cxBuffer] && this.imageCache[this.cxBuffer][this.cyBuffer]) {
            this.imageBuffer = this.imageCache[this.cxBuffer][this.cyBuffer];
            this.canvasBuffer = this.canvasCache[this.cxBuffer][this.cyBuffer];
        } else {
            this.imageBuffer = this.contextScreen.createImageData(this.cxBuffer, this.cyBuffer);
            this.canvasBuffer = document.createElement("canvas");
            this.canvasBuffer.width = this.cxBuffer;
            this.canvasBuffer.height = this.cyBuffer;
                if (!this.imageCache[this.cxBuffer]) this.imageCache[this.cxBuffer] = {};
            this.imageCache[this.cxBuffer][this.cyBuffer] = this.imageBuffer;
            if (!this.canvasCache[this.cxBuffer]) this.canvasCache[this.cxBuffer] = {};
            this.canvasCache[this.cxBuffer][this.cyBuffer] = this.canvasBuffer;
        }
        this.contextBuffer = this.canvasBuffer.getContext("2d");

        /**
         * Since cxCell and cyCell were originally defined in terms of cxScreen/nCols and cyScreen/nRows, you might think
         * these border calculations would always be zero, but we used to have code that tried to avoid stretching 40-column
         * modes into an unpleasantly wide shape, so this code is being retained (for now).
         */
        this.xScreenOffset = this.yScreenOffset = 0;
        this.cxScreenOffset = this.cxScreen;
        this.cyScreenOffset = this.cyScreen;

        let cxBorder = this.cxScreen - (this.nCols * this.cxScreenCell);
        let cyBorder = this.cyScreen - (this.nRows * this.cyScreenCell);
        if (cxBorder > 0) {
            this.xScreenOffset = (cxBorder >> 1);
            this.cxScreenOffset -= cxBorder;
        }
        if (cyBorder > 0) {
            this.yScreenOffset = (cyBorder >> 1);
            this.cyScreenOffset -= cyBorder;
        }
        if (cxBorder || cyBorder) {
            this.contextScreen.fillStyle = this.canvasScreen.style.backgroundColor;
            this.contextScreen.fillRect(0, 0, this.cxScreen, this.cyScreen);
        }
    }

    /**
     * checkMode(fForce)
     *
     * Called whenever the MDA/CGA's mode register (eg, Card.MDA.MODE.PORT, Card.CGA.MODE.PORT) is updated,
     * or whenever the EGA/VGA's GRC.MISC register is updated, or when we've just finished a restore().
     *
     * @this {Videox86}
     * @param {boolean} [fForce] is used to force a mode update, if we recognize the current mode
     * @returns {boolean} true if successful, false if not
     */
    checkMode(fForce)
    {
        let fRemap = false;
        let nMode = this.nMode;
        let card = this.cardActive;

        if (!card) {
            /**
             * We are likely being called after a restore(), which needs us to call setMode() to insure the proper video
             * buffer is mapped in.  So we unset this.nMode to guarantee that setMode() will be called, and if it wasn't set
             * to anything before, then we fall-back to the default mode.
             */
            this.nMode = null;
            if (nMode == null) nMode = this.nModeDefault;
        }
        else {
            if (card.nCard == Videox86.CARD.MDA) {
                nMode = Videox86.MODE.MDA_80X25;
            }
            else if (card.nCard >= Videox86.CARD.EGA) {
                /**
                 * The sizeBuffer we choose reflects the amount of physical address space that all 4 planes
                 * of EGA memory normally span, NOT the total amount of EGA memory.  So for a 64Kb EGA card,
                 * we would set card.sizeBuffer to 16Kb (0x4000).
                 *
                 * TODO: Need to take into account modes that "chain" planes together (eg, mode 0x0F, and
                 * presumably mode 0x10, on an EGA card with only 64Kb).
                 */
                nMode = null;
                let cbBuffer = card.cbMemory >> 2;
                let cbBufferText = (cbBuffer > 0x8000? 0x8000 : cbBuffer);

                let regGRCMisc = card.regGRCData[Card.GRC.MISC.INDX];
                if (regGRCMisc != null) {

                    let nCRTCMaxScan = card.regCRTData[Card.CRTC.EGA.MAXSCAN.INDX];

                    switch (regGRCMisc & Card.GRC.MISC.MAPMEM) {
                    case Card.GRC.MISC.MAPA0128:
                        card.addrBuffer = 0xA0000;
                        card.sizeBuffer = cbBuffer;     // 0x20000
                        if ((nCRTCMaxScan & Card.CRTC.EGA.MAXSCAN.SLMASK) <= 1) {
                            nMode = Videox86.MODE.UNKNOWN;     // no BIOS mode uses this mapping, but we don't want to leave nMode null if we've come this far
                        } else {
                            /**
                             * This mapping is used by Fantasy Land.
                             *
                             * TODO: Generalize this logic, outside of the context of the GRC.MISC mapping bits.
                             * For example, can we assume that as long as (MAXSCAN & SLMASK) > 1, we're always in text mode?
                             * And to what extent can we rely on the GRC.MISC.GRAPHICS bit?
                             */
                            nMode = (this.nMonitorType == ChipSet.MONITOR.MONO? Videox86.MODE.CGA_80X25_BW : Videox86.MODE.CGA_80X25);
                        }
                        break;
                    case Card.GRC.MISC.MAPA064:
                        card.addrBuffer = 0xA0000;
                        card.sizeBuffer = cbBuffer;     // 0x10000
                        nMode = (this.nMonitorType == ChipSet.MONITOR.MONO? Videox86.MODE.EGA_640X350_MONO : Videox86.MODE.EGA_640X350);
                        break;
                    case Card.GRC.MISC.MAPB032:
                        card.addrBuffer = 0xB0000;
                        card.sizeBuffer = cbBufferText;
                        nMode = Videox86.MODE.MDA_80X25;
                        break;
                    case Card.GRC.MISC.MAPB832:
                        card.addrBuffer = 0xB8000;
                        card.sizeBuffer = cbBufferText;
                        nMode = (this.nMonitorType == ChipSet.MONITOR.MONO? Videox86.MODE.CGA_80X25_BW : Videox86.MODE.CGA_80X25);
                        break;
                    default:
                        break;
                    }
                    /**
                     * TODO: The following mode discrimination code is all a bit haphazard, a byproduct of its slow evolution
                     * from increasingly greater EGA support to increasingly greater VGA support.  Make it more rational someday,
                     * so that as support is added for even more modes (eg, "Mode X" variations, monochrome modes, etc), it
                     * doesn't get totally out of control.
                     *
                     * One of the problems with the current approach is that it depends on the card's registers being programmed
                     * in at least roughly the same order that the IBM EGA and VGA ROMs program them.
                     */
                    let regGRCMode = card.regGRCData[Card.GRC.MODE.INDX];

                    /**
                     * This text/graphics hybrid test detects the way Windows 95 reprograms the VGA on boot; ie, switching
                     * to graphics mode 0x13 (320x200) without disturbing the text buffer contents, then reprogramming it
                     * to enable graphics mode 0x15 (320x400), then drawing a logo in the 2nd half of the video memory, and
                     * finally reprogramming regGRCMode and regGRCMisc to move the frame buffer back to its original text mode
                     * location.
                     */
                    let fTextGraphicsHybrid = (regGRCMode & (Card.GRC.MODE.COLOR256 | Card.GRC.MODE.EVENODD)) == (Card.GRC.MODE.COLOR256 | Card.GRC.MODE.EVENODD);

                    /**
                     * When fTextGraphicsHybrid is true, we should be at the end of the above process, so addrBuffer
                     * will have changed.  Since we don't (yet) assign a special mode to that configuration, we must at
                     * least set fForce to true, so that setMode() will notice the buffer address change and remap it.
                     *
                     * We have a similar situation when Fantasy Land selects the MAPA0128 buffer mapping, so this test is no
                     * longer limited to fTextGraphicsHybrid being true.
                     */
                    if (card.addrBuffer != this.addrBuffer || card.sizeBuffer != this.sizeBuffer) {
                        fRemap = true;
                    }

                    let nCRTCVertTotal = card.getCRTCReg(Card.CRTC.EGA.VTOTAL);
                    let nCRTCModeCtrl = card.regCRTData[Card.CRTC.EGA.MODECTRL.INDX];
                    let fSEQDotClock = (card.regSEQData[Card.SEQ.CLKMODE.INDX] & Card.SEQ.CLKMODE.DOTCLOCK);

                    if (nMode != Videox86.MODE.UNKNOWN) {
                        if (!(regGRCMisc & Card.GRC.MISC.GRAPHICS)) {
                            /**
                             * Here's where we handle text modes; since nMode will have been assigned a default
                             * of either 0x02 or 0x03, convert that to either 0x05 or 0x04 if we're in a low-res
                             * graphics mode, 0x06 otherwise.
                             */
                            nMode -= (fSEQDotClock? 2 : 0);
                        }
                        else if (card.addrBuffer != 0xA0000 && !fTextGraphicsHybrid && !(nCRTCModeCtrl & Card.CRTC.EGA.MODECTRL.COMPAT_MODE)) {
                            /**
                             * Here's where we handle CGA graphics modes; since nMode will have been assigned a
                             * default of either 0x02 or 0x03, convert that to either 0x05 or 0x04 if we're in a
                             * low-res graphics mode, 0x06 otherwise.
                             *
                             * For Windows 95, I've had to add BOTH the fTextGraphicsHybrid test, to avoid misdetecting
                             * the logo display mode, AND the COMPAT_MODE test, to avoid misinterpreting the VDD's physical
                             * (NOT logical) card reprogramming during windowed VM creation; the latter seems like a VDD bug,
                             * because only the Windows display driver should be *physically* reprogramming the card then.
                             */
                            nMode = fSEQDotClock? (7 - nMode) : Videox86.MODE.CGA_640X200;
                        } else {
                            /**
                             * Here's where we handle EGA/VGA graphics modes, discriminating among modes 0x0D and up;
                             * we've already defaulted to either 0x0F or 0x10.  If COLOR256 is set, then select mode
                             * 0x13 (or greater), else if 200-to-400 scan-line conversion is in effect, select either
                             * mode 0x0D or 0x0E, else if VGA resolution is set, select either mode 0x11 or 0x12.
                             */
                            if (card.regGRCData[Card.GRC.MODE.INDX] & Card.GRC.MODE.COLOR256) {
                                if (nCRTCMaxScan & Card.CRTC.EGA.MAXSCAN.SLMASK) {
                                    /**
                                     * NOTE: Technically, VDEND is one of those CRTC registers that should be read using
                                     * card.getCRTCReg(), because there are overflow bits (8 and 9).  However, all known modes
                                     * always SET bit 8 and CLEAR bit 9, so examining only bits 0-7 is sorta OK.
                                     */
                                    if (card.regCRTData[Card.CRTC.EGA.VDEND] <= 0x8F) {
                                        if (card.regSEQData[Card.SEQ.MEMMODE.INDX] & Card.SEQ.MEMMODE.CHAIN4) {
                                            nMode = Videox86.MODE.VGA_320X200;
                                        } else {
                                            nMode = Videox86.MODE.VGA_320X200P;
                                        }
                                    }
                                    else { /* (card.regCRTData[Card.CRTC.EGA.VDEND] == 0xDF) */
                                        nMode = Videox86.MODE.VGA_320X240P;
                                    }
                                } else {
                                    nMode = Videox86.MODE.VGA_320X400P;
                                }
                            }
                            else if ((nCRTCMaxScan & Card.CRTC.EGA.MAXSCAN.CONVERT400) || nCRTCVertTotal < 350) {
                                nMode = (fSEQDotClock? Videox86.MODE.EGA_320X200 : Videox86.MODE.EGA_640X200);
                            } else if (nCRTCVertTotal >= 480) {
                                nMode = (this.nMonitorType == ChipSet.MONITOR.MONO? Videox86.MODE.VGA_640X480_MONO : Videox86.MODE.VGA_640X480);
                            }
                            if (DEBUG) this.printf("checkMode(%#04X): nCRTCVertTotal=%d\n", nMode, nCRTCVertTotal);
                        }
                    }
                }
            }
            else if (card.regMode & Card.CGA.MODE.VIDEO_ENABLE) {
                /**
                 * NOTE: For the CGA, we precondition any mode change on CGA.MODE.VIDEO_ENABLE being set, otherwise
                 * we'll get spoofed by the ROM BIOS scroll code, which waits for vertical retrace and then turns CGA.MODE.VIDEO_ENABLE
                 * off, using a hard-coded mode value (0x25) that does NOT necessarily match the the CGA video mode currently in effect.
                 */
                if (!(card.regMode & Card.CGA.MODE.GRAPHIC_SEL)) {
                    nMode = ((card.regMode & Card.CGA.MODE._80X25)? Videox86.MODE.CGA_80X25 : Videox86.MODE.CGA_40X25);
                    if (card.regMode & Card.CGA.MODE.BW_SEL) {
                        nMode -= 1;
                    }
                } else {
                    nMode = ((card.regMode & Card.CGA.MODE.HIRES_BW)? Videox86.MODE.CGA_640X200 : Videox86.MODE.CGA_320X200_BW);
                    if (!(card.regMode & Card.CGA.MODE.BW_SEL)) {
                        nMode -= 1;
                    }
                }
                if (this.fOpacityReduced) {
                    this.canvasScreen.style.opacity = "1";
                    this.fOpacityReduced = false;
                }
            }
            else {
                /**
                 * This code is responsible for simulating flicker on a CGA screen.  Note that we have to also
                 * call yieldCPU() to ensure that the browser "comes up for air" and honors the new opacity, otherwise
                 * you'll see very intermittent flicker (which is actually more annoying than regular flicker, believe
                 * it or not).
                 *
                 * You also have the option of setting opacityFlicker to something greater than zero (eg, "0.5") to
                 * make the flicker less obtrusive; in fact, that might be more faithful to the persistence of a CGA
                 * screen's phosphor.  The downside is that if the VIDEO_ENABLE bit is ever turned for off a "long time",
                 * then you'll be treated to a very unnatural persistence effect.
                 */
                if (!this.fOpacityReduced && +this.opacityFlicker < 1) {
                    this.fOpacityReduced = true;
                    this.canvasScreen.style.opacity = this.opacityFlicker;
                    this.cpu.yieldCPU();
                }
            }
        }

        /**
         * NOTE: If setMode() remaps the video memory, that will trigger calls to setCardAccess() to also update the
         * memory's access functions.  However, if the memory access setting is about to change as well, those changes
         * will be moot until the setCardAccess() call that follows.  Basically, whenever both memory mapping AND access
         * functions are changing, the memory will be in an inconsistent state until both setMode() and setCardAccess()
         * are finished.
         *
         * The setMode() call takes precedence; if we called setCardAccess() first, it might attempt to modify memory access
         * functions based on the card's addrBuffer setting, and if that doesn't match what's currently mapped, assertions
         * will be triggered (probably not fatal, but it would defeat the point of the assertions).
         */
        if (!this.setMode(nMode, fForce, fRemap)) return false;

        this.setCardAccess(this.getCardAccess());

        return true;
    }

    /**
     * setMode(nMode, fForce, fRemap)
     *
     * Set fForce to true to update the mode regardless of previous mode, or false to perform a normal update
     * that bypasses updateScreen() but still calls initCellCache().
     *
     * @this {Videox86}
     * @param {number|null} nMode
     * @param {boolean} [fForce] is set when checkMode() wants to force a mode update
     * @param {boolean} [fRemap] is set when checkMode() detects a change in the buffer mapping
     * @returns {boolean} true if successful, false if failure
     */
    setMode(nMode, fForce, fRemap)
    {
        let fReset = nMode != null && (nMode != this.nMode || fForce);
        if (fReset || fRemap) {

            if (DEBUG) this.printf("setMode(%#04X,%b)\n", nMode, fForce);

            this.cUpdates = 0;      // count updateScreen() calls as a means of driving blink updates
            this.nMode = nMode;
            this.fRGBValid = false;

            /**
             * It's CRITICAL that a reset() invalidate cardActive, to ensure that the code below releases the
             * previous video buffer and installs a new one, even if there was no change in the video buffer
             * address or size, because otherwise memory blocks installed at the video buffer address may still
             * be using blocks of the previous memory buffer.
             *
             * When an EGA is reinitialized, a new memory buffer (adwMemory) is allocated (see initEGA()), and
             * this is where the mapping of that EGA memory buffer to the video buffer occurs.  Even if a card
             * (MDA or CGA) never reallocates its memory buffer, it's still a good idea to always force this operation
             * (eg, in case a switch setting changed the active video card).
             */
            let card = this.cardActive || (nMode == Videox86.MODE.MDA_80X25? this.cardMono : this.cardColor);

            if (card != this.cardActive || card.addrBuffer != this.addrBuffer || card.sizeBuffer != this.sizeBuffer) {

                this.removeCursor();

                if (this.addrBuffer) {

                    if (DEBUG) this.printf("setMode(%#04X): removing %#010X bytes from %#010X\n", nMode, this.sizeBuffer, this.addrBuffer);

                    if (!this.bus.removeMemory(this.addrBuffer, this.sizeBuffer)) {
                        /**
                         * TODO: Force this failure case and see how well the Video component deals with it.
                         */
                        return false;
                    }
                    if (this.cardActive) this.cardActive.fActive = false;
                }

                this.cardActive = card;
                card.fActive = true;

                this.addrBuffer = card.addrBuffer;
                this.sizeBuffer = card.sizeBuffer;

                if (DEBUG) this.printf("setMode(%#04X): adding %#010X bytes to %#010X\n", nMode, this.sizeBuffer, this.addrBuffer);

                if (!this.bus.addMemory(card.addrBuffer, card.sizeBuffer, Memoryx86.TYPE.VIDEO, card)) {
                    /**
                     * TODO: Force this failure case and see how well the Video component deals with it.
                     */
                    return false;
                }

                /**
                 * As https://www.seasip.info/VintagePC/mda.html explains, the MDA's 4K buffer address is not
                 * fully decoded; it is also addressible at every 4K interval within a 32K (0x8000) address range.
                 * We simulate that now, and not just for purely theoretical reasons: the original monochrome-
                 * specific version of "Exploring the IBM Personal Computer":
                 *
                 *      https://www.pcjs.org/disks/pcx86/diags/ibm/5150/exploring/1.00/mda/
                 *
                 * has a bug where it attempts to clear one of the intro screens with a faulty INT 10h Scroll Up
                 * call, where the top left (CX) and bottom right (DX) coordinates are reversed, resulting in a
                 * scroll with negative coordinates that the BIOS converts into large positive off-screen coordinates,
                 * which just so happens to clear the video buffer anyway, because it's repeatedly addressible.
                 *
                 * The CGA's 16K buffer has a similar feature, but owing to its larger size, its buffer repeats only
                 * once within a 32K address range.  And yes, the color version of "Exploring the IBM Personal Computer"
                 * has a similar INT 10h scroll bug; the app is using graphics mode 0x04, so it's requesting a graphics
                 * scroll rather than a text scroll to clear the screen, but once again, the coordinates are reversed,
                 * so much of the memory it zeroes is above the first 16K.
                 */
                if (card.nCard < Videox86.CARD.EGA) {
                    let addrBuffer = this.addrBuffer;
                    let aBlocks = this.bus.getMemoryBlocks(addrBuffer, this.sizeBuffer);
                    while ((addrBuffer += this.sizeBuffer) < card.addrBuffer + 0x8000) {
                        this.bus.setMemoryBlocks(addrBuffer, this.sizeBuffer, aBlocks);
                    }
                }
            }

            this.setDimensions();
            this.invalidateCellCache();

            if (fReset) this.updateScreen();
        }
        return true;
    }

    /**
     * setPixel(imageData, x, y, rgb)
     *
     * Worker function used by createFontColor() and updateScreen() (graphics modes only).
     *
     * @this {Videox86}
     * @param {Object} imageData
     * @param {number} x
     * @param {number} y
     * @param {Array.<number>} rgb is a 4-element array containing the red, green, blue and alpha values
     */
    setPixel(imageData, x, y, rgb)
    {
        let index = (x + y * imageData.width) * rgb.length;
        imageData.data[index] = rgb[0];
        imageData.data[index + 1] = rgb[1];
        imageData.data[index + 2] = rgb[2];
        imageData.data[index + 3] = rgb[3];
    }

    /**
     * initCellCache()
     *
     * Initializes the contents of our internal cell cache.
     *
     * TODO: Consider changing this to a cache of RGB values, so that when the buffer is merely being color-cycled,
     * we don't have to update the entire screen.  This would also allow invalidateCellCache() to honor the fColors
     * flag and bypass initCellCache() when it's set.
     *
     * @this {Videox86}
     * @returns {number}
     */
    initCellCache()
    {
        this.cBlinkVisible = -1;                // force updateScreen() to recount visible blinking characters
        this.iCellCacheValid = 0;
        let nCells = this.nCellCache;
        if (this.aCellCache === undefined || this.aCellCache.length != nCells) {
            this.aCellCache = new Array(nCells);
        }
        return nCells;
    }

    /**
     * invalidateCellCache(fColors, nFontSelect, nFontPrev)
     *
     * Ensures the next updateScreen() will examine and update every cell as needed, even if the underlying
     * data in the video buffer has not changed (eg, when the screen is being panned, the page is being flipped,
     * the palette is being cycled, the font is being changed, etc).
     *
     * @this {Videox86}
     * @param {boolean} [fColors] (true if color(s) *may* have changed)
     * @param {number} [nFontSelect] (set along with nFontPrev if font(s) *may* have changed)
     * @param {number} [nFontPrev]
     * @returns {number} (number of cells invalidated; used for diagnostic purposes only)
     */
    invalidateCellCache(fColors, nFontSelect, nFontPrev)
    {
        if (this.iCellCacheValid) {
            if (fColors !== false) {
                this.fRGBValid = false;
            }
            else if (nFontSelect !== undefined) {
                /**
                 * We want to do a "smart" (aka selective) invalidation of the cell cache, invalidating only
                 * those cells containing characters whose current font data differs from the previous font data.
                 */
                if (nFontSelect == nFontPrev) return 0;
                let aCellCache = this.aCellCache;
                let nCells = 0;
                /**
                 * getFontDiff() returns an empty array if the current and previous fonts are the same, which
                 * is OK for the code below, because using the "|" operator with undefined values coerces them
                 * to zero, resulting in no change.  If BOTH FontDiff arrays were empty, then we could skip this
                 * code altogether, but we've already eliminated that possibility above, when we checked for
                 * nFontSelect == nFontPrev, so at least one of these arrays will NOT be empty.
                 */
                let aFontDiff0 = this.getFontDiff(nFontSelect & 0xff, nFontPrev & 0xff);
                let aFontDiff1 = this.getFontDiff(nFontSelect >> 8, nFontPrev >> 8);
                for (let i = 0; i < aCellCache.length; i++) {
                    let data = aCellCache[i];
                    if (data >= 0) {
                        /**
                         * The font referenced by any given cell data *usually* only depends on low 8 bits (ie, the
                         * character data), but when the active and alternate fonts differ, bit 3 of the attribute data
                         * must be examined as well, and if it's set, then the alternate font must be used.
                         */
                        let aFontDiff = (data & 0x800)? aFontDiff1 : aFontDiff0;
                        if ((aCellCache[i] |= aFontDiff[data & 0xff]) < 0) {
                            this.iCellCacheValid = 1;
                            nCells++;
                        }
                    }
                }
                return nCells;
            } else {
                /**
                 * When no color change AND no font change has occurred, since the cache was at least partially
                 * valid already, we make sure it's partially valid.
                 */
                this.iCellCacheValid = 1;
                return 0;
            }
        }
        return this.initCellCache();
    }

    /**
     * updateChar(col, row, data, context)
     *
     * Updates a particular character cell (row,col) in the associated window.
     *
     * The data parameter is the attribute byte from the display buffer (fgnd attribute in the low nibble,
     * bgnd attribute in the high nibble), but updateScreen() supplements data with a couple internal attribute bits:
     *
     *      ATTRS.DRAW_FGND:    set for every cell whose fgnd element is currently on (ie, non-blinking, or whenever blink is on)
     *      ATTRS.DRAW_CURSOR:  set only for the cell containing the cursor, if any
     *
     * To make a character blink, we alternately draw its cell with ATTRS.DRAW_FGND set, and then again with
     * ATTRS.DRAW_FGND clear (meaning only the cell background is drawn).
     *
     * To make the cursor blink, we must alternately draw its entire cell with ATTRS.DRAW_CURSOR set, and then
     * draw it again with ATTRS.DRAW_CURSOR clear.
     *
     * @this {Videox86}
     * @param {number} col
     * @param {number} row
     * @param {number} data (if text mode, character code in low byte, attribute code in high byte)
     * @param {CanvasRenderingContext2D} [context]
     */
    updateChar(col, row, data, context)
    {
        let bChar = data & 0xff;
        let bAttr = data >> 8;
        /**
         * The font referenced by any given cell data *usually* only depends on low 8 bits (ie, the
         * character data), but when the active and alternate fonts differ, bit 3 of the attribute data
         * must be examined as well, and if it's set, then the alternate font must be used.
         */
        let font = this.aFonts[this.nActiveFont];
        if ((bAttr & 0x08) && this.nActiveFont != this.nAlternateFont) {
            font = this.aFonts[this.nAlternateFont];
            bAttr &= ~0x08;
        }

        /**
         * Just as aColorMap maps the foreground attribute to the appropriate foreground character grid,
         * it also maps the background attribute to the appropriate background color.
         *
         * Unfortunately, the MDA card is an exception: the background is always black (color index 0)
         * UNLESS 1) attribute & 0xf7 == 0x70 (color index 2) or 2) attribute & 0xf7 == 0xf0 (color index 4).
         *
         * Similarly, the foreground is NEVER black UNLESS attribute & 0x77 == 0x00 (ie, the attribute is one
         * of 0x00, 0x08, 0x80, or 0x88).
         */
        let xDst;
        let yDst;
        let iFgnd = bAttr & 0x0f;
        let iBgnd = (bAttr >> 4) & 0x0f;
        if (font.aColorMap) {
            if (!(bAttr & 0x7) && (bAttr & 0x70)) {
                iFgnd |= 0x7;
            }
            let b = bAttr & 0xf7;
            if (b == 0x70 || b == 0xf0) {
                iFgnd = 0x0;
            } else {
                iBgnd = 0x0;
            }
            iFgnd = font.aColorMap[iFgnd];
            iBgnd = font.aColorMap[iBgnd];
        }

        if (context) {
            xDst = col * font.cxCell;
            yDst = row * font.cyCell;
            context.fillStyle = font.aCSSColors[iBgnd];
            context.fillRect(xDst, yDst, font.cxCell, font.cyCell);
        } else {
            xDst = col * this.cxScreenCell + this.xScreenOffset;
            yDst = row * this.cyScreenCell + this.yScreenOffset;
            this.contextScreen.fillStyle = font.aCSSColors[iBgnd];
            this.contextScreen.fillRect(xDst, yDst, this.cxScreenCell, this.cyScreenCell);
        }

        if (MAXDEBUG) this.printf(MESSAGE.VIDEO + MESSAGE.BUFFER, "updateCharBgnd(%d,%d,%d): filled %d,%d\n", col, row, bChar, xDst, yDst);

        if (bAttr & Videox86.ATTRS.DRAW_FGND) {
            /**
             * (bChar & 0xf) is the equivalent of (bChar % 16), and (bChar >> 4) is the equivalent of Math.floor(bChar / 16)
             */
            let xSrcFgnd = (bChar & 0xf) * font.cxCell;
            let ySrcFgnd = (bChar >> 4) * font.cyCell;

            if (MAXDEBUG) this.printf(MESSAGE.VIDEO + MESSAGE.BUFFER, "updateCharFgnd(%d,%d,%d): draw from %d,%d (%d,%d) to %d,%d\n", col, row , bChar, xSrcFgnd, ySrcFgnd, font.cxCell, font.cyCell, xDst, yDst);

            if (context) {
                context.drawImage(font.aCanvas[iFgnd], xSrcFgnd, ySrcFgnd, font.cxCell, font.cyCell, xDst, yDst, font.cxCell, font.cyCell);
            } else {
                this.contextScreen.drawImage(font.aCanvas[iFgnd], xSrcFgnd, ySrcFgnd, font.cxCell, font.cyCell, xDst, yDst, this.cxScreenCell, this.cyScreenCell);
            }
        }

        if (bAttr & Videox86.ATTRS.DRAW_CURSOR) {
            if (this.cyCursorWrap) {
                this.drawCursor(0, this.cyCursorWrap, xDst, yDst, iFgnd, font, context);
            }
            this.drawCursor(this.yCursor, this.cyCursor, xDst, yDst, iFgnd, font, context);
        }
    }

    /**
     * drawCursor(yCursor, cyCursor, xDst, yDst, iFgnd, font, context)
     *
     * We have factored the cursor-drawing code out of updateChar() so that we can call this function multiple times,
     * in case we have to draw a "split cursor".
     *
     * @this {Videox86}
     * @param {number} yCursor
     * @param {number} cyCursor
     * @param {number} xDst
     * @param {number} yDst
     * @param {number} iFgnd
     * @param {Font} font
     * @param {CanvasRenderingContext2D} [context]
     */
    drawCursor(yCursor, cyCursor, xDst, yDst, iFgnd, font, context)
    {
        /**
         * Drawing the cursor with lineTo() seemed logical, but it was complicated by the fact that the
         * TOP of the line must appear at "yDst + this.yCursor", whereas lineTo() wants to know the CENTER
         * of the line. So it's simpler to draw the cursor with another fillRect().  Here's the old code:
         *
         *      this.contextScreen.strokeStyle = font.aCSSColors[iFgnd];
         *      this.contextScreen.lineWidth = this.cyCursor;
         *      this.contextScreen.beginPath();
         *      this.contextScreen.moveTo(xDst, yDst + this.yCursor);
         *      this.contextScreen.lineTo(xDst + this.cxScreenCell, yDst + this.yCursor);
         *      this.contextScreen.stroke();
         *
         * Also, note that we're scaling the yCursor and cyCursor values here, instead of in checkCursor(), because
         * this is where we have all the required information: in the first case (off-screen buffer), the scaling must
         * be based on the font cell size (cxCell, cyCell), whereas in the second case (on-screen buffer), the scaling
         * must be based on the screen cell size (cxScreenCell,cyScreenCell).
         *
         * yCursor and cyCursor are actual hardware values, both relative to another hardware value: cyCursorCell.
         */
        if (context) {
            if (this.cyCursorCell && this.cyCursorCell !== font.cyCell) {
                yCursor = Math.round((yCursor * font.cyCell) / this.cyCursorCell);
                cyCursor = Math.round((cyCursor * font.cyCell) / this.cyCursorCell);
            }
            context.fillStyle = font.aCSSColors[iFgnd];
            context.fillRect(xDst, yDst + yCursor, font.cxCell, cyCursor);
        } else {
            if (this.cyCursorCell && this.cyCursorCell !== this.cyScreenCell) {
                yCursor = Math.round((yCursor * this.cyScreenCell) / this.cyCursorCell);
                cyCursor = Math.round((cyCursor * this.cyScreenCell) / this.cyCursorCell);
            }
            this.contextScreen.fillStyle = font.aCSSColors[iFgnd];
            this.contextScreen.fillRect(xDst, yDst + yCursor, this.cxScreenCell, cyCursor);
        }
    }

    /**
     * latchStartAddress()
     *
     * @this {Videox86}
     */
    latchStartAddress()
    {
        let card = this.cardActive;
        let offStart = card.regCRTData[Card.CRTC.STARTLO];
        offStart |= (card.regCRTData[Card.CRTC.STARTHI] & card.addrMaskHigh) << 8;
        if (card.offStart !== offStart) {
            card.offStart = offStart;
            this.invalidateCellCache(false);
        }
        let rowStart = (card == this.cardEGA? (card.regCRTData[Card.CRTC.EGA.PRESCAN] & Card.CRTC.EGA.MAXSCAN.SLMASK) : 0);
        if (card.rowStart !== rowStart) {
            card.rowStart = rowStart;
            this.nShiftUp = 0;
            if (this.fOverBuffer) {
                this.fShifted = true;
                this.nShiftUp = rowStart & Card.CRTC.EGA.MAXSCAN.SLMASK;
            }
        }

    }

    /**
     * updateScreen(fForce)
     *
     * Propagates the video buffer to the cell cache and updates the screen with any changes.  Forced updates
     * are generally internal updates triggered by an I/O operation or other state change, while non-forced updates
     * are the periodic updates coming from the CPU.
     *
     * @this {Videox86}
     * @param {boolean} [fForce] is used by setMode() to reset the cell cache and force a redraw
     * @returns {boolean}
     */
    updateScreen(fForce = false)
    {
        /**
         * Nothing to do for "headless" congfigurations.
         */
        if (!this.canvasScreen) return false;

        /**
         * The Computer component maintains the fPowered setting on our behalf, so we use it.
         */
        if (!this.flags.powered) return false;

        /**
         * If the card's video signal is disabled (eg, during a mode change), then skip the update,
         * unless fForce is set.
         */
        let card = this.cardActive;
        if (!card) return false;

        let fEnabled = false;
        if (card !== this.cardEGA) {
            if (card.regMode & Card.CGA.MODE.VIDEO_ENABLE) fEnabled = true;
        }
        else {
            if (card.regATCIndx & Card.ATC.INDX_PAL_ENABLE) fEnabled = true;
        }

        if (!fEnabled && !fForce) return false;

        if (fForce) {
            this.initCellCache();
        }
        else {
            /**
             * This should never happen, but since updateScreen() is also called by Computer.updateStatus(),
             * better safe than sorry.
             */
            if (this.aCellCache === undefined) return false;
        }

        /**
         * If this is a hardware update (as opposed to, say, a debugger-triggered update, where fForce is set),
         * and cBlinks is "enabled" (ie, >= 0), then advance cBlinks once every 10 updateScreen() calls.
         *
         * Assuming an updateScreen() frequency of roughly 60 times per second (Videox86.UPDATES_PER_SECOND), performing
         * a "blink update" every 10 times is reasonably close to the hardware blink rate.  However, the effective blink
         * rate will also depend on other factors as well, such as the monitorSpecs for the video hardware being simulated.
         */
        let fBlinkUpdate = false;
        if (!fForce && !(++this.cUpdates % 10) && this.cBlinks >= 0) {
            this.cBlinks++;
            fBlinkUpdate = true;
        }

        let iCell = 0;
        let nCells = this.nCells;

        /**
         * Calculate the VISIBLE start of screen memory (addrScreen), not merely the PHYSICAL start,
         * as well as the extent of it (cbScreen) and use those values for all addressing operations to follow.
         * FYI, in these calculations, offScreen does not refer to "off-screen" memory, but rather the "offset"
         * of the start of visible screen memory.
         */
        let addrBuffer = this.addrBuffer;
        let addrScreen = addrBuffer;
        let addrScreenLimit = addrScreen + this.sizeBuffer;

        /**
         * HACK: To deal with the fTextGraphicsHybrid 320x400 mode that Windows 95 uses (ie, when the buffer
         * is mapped to B800:0000 instead of A000:0000 and is configured for text mode access, but graphics are
         * still being displayed from the second half of video memory), we must ignore the programmed address.
         *
         * In that case, the hard-coded address range below isn't actually active either, but it doesn't matter;
         * we just have to get through the rest of this function and make it to the updateScreenGraphicsVGA() call,
         * which will draw from our video buffer (adwMemory) directly; these addresses are only used for bounds
         * checking.
         */
        if (this.nMode >= Videox86.MODE.VGA_320X200) {
            addrBuffer = addrScreen = 0xA0000;
            addrScreenLimit = addrScreen + 0x10000;
        }

        let cbScreen = this.cbScreen;
        this.nColsLogical = this.nCols;

        if (this.nCard < Videox86.CARD.EGA) {
            /**
             * Any screen (aka "page") offset must be doubled for text modes, due to the attribute bytes.
             */
            addrScreen += card.offStart << (this.nCardFont? 1 : 0);
        } else {
            /**
             * For the EGA/VGA, we must make offset-doubling dependent on attribute (odd) byte addressibility.
             * For example, Fantasy Land uses a text-mode buffer mapped at 0xA0000 without odd/even addressing.
             *
             * TODO: Setting nPointsPerByte properly would ideally be taken care of in setDimensions(), but there's
             * no guarantee this particular controller tweak will be made BEFORE we detect and initiate a mode change.
             */
            let shiftAddr = 0;
            let shiftCols = 0;
            let bMemMode = this.cardEGA.regSEQData[Card.SEQ.MEMMODE.INDX] & (Card.SEQ.MEMMODE.ALPHA | Card.SEQ.MEMMODE.SEQUENTIAL);
            if (bMemMode == Card.SEQ.MEMMODE.ALPHA) {
                shiftAddr = shiftCols = 1;
                this.nPointsPerByte = 0.5;
            } else if (bMemMode == (Card.SEQ.MEMMODE.ALPHA | Card.SEQ.MEMMODE.SEQUENTIAL)) {
                shiftCols = 1;
                this.nPointsPerByte = 1.0;
            }
            addrScreen += card.offStart << shiftAddr;
            if (card.regCRTData[Card.CRTC.EGA.OFFSET] && (card.regCRTData[Card.CRTC.EGA.OFFSET] << 1) != card.regCRTData[Card.CRTC.EGA.HDEND] + 1) {
                /**
                 * Pre-EGA, the extent of visible screen memory (cbScreen) was derived from nCols * nRows, but since
                 * then, the logical width of screen memory (nColsLogical) can differ from the visible width (nCols).
                 * We now calculate the logical width, and the compute a new cbScreen in much the same way the original
                 * cbScreen was computed (but without any CGA-related padding considerations).
                 */
                this.nColsLogical = card.regCRTData[Card.CRTC.EGA.OFFSET] << (shiftCols || ((card.regCRTData[Card.CRTC.EGA.UNDERLINE.INDX] & Card.CRTC.EGA.UNDERLINE.DWORD)? 3 : 4));
                cbScreen = ((this.nColsLogical * (this.nRowsBuffer - 1) + this.nColsBuffer) / this.nPointsPerByte)|0;
                /**
                 * If nRowsBuffer is larger than nRows (ie, over-buffering is enabled), we run the risk of attempting
                 * to render past the limit of the frame buffer (addrScreenLimit); we're ONLY over-buffering in case the
                 * the app decides to pan vertically, revealing pixels below the last full row, and obviously if there
                 * isn't an additional row of data below that last full row, then we shouldn't over-buffer this time.
                 */
                if (this.nRowsBuffer > this.nRows && addrScreen + cbScreen > addrScreenLimit) {
                    cbScreen = ((this.nColsLogical * (this.nRows - 1) + this.nColsBuffer) / this.nPointsPerByte)|0;
                }
            }
        }

        /**
         * If the amount of data (cbScreen) we need to display goes beyond the end of the screen buffer
         * (addrScreenLimit), then the assumption is that we will have to do a second update operation that
         * wraps around to addrBuffer.
         */
        let addrScreenWrap = 0;
        let cbScreenWrap = 0;
        if (addrScreen + cbScreen > addrScreenLimit) {
            /**
             * There are two possibilities here: addrScreen itself is at or beyond addrScreenLimit, or just a
             * portion of cbScreen goes beyond the limit.  We'll deal with the first case first.
             */
            cbScreenWrap = cbScreen;
            if (addrScreen >= addrScreenLimit) {
                addrScreenWrap = addrBuffer + (addrScreen - addrScreenLimit);
                cbScreen = 0;
            } else {
                addrScreenWrap = addrBuffer;
                cbScreen = addrScreenLimit - addrScreen;
                cbScreenWrap -= cbScreen;
            }
        }
        else if (this.nCard >= Videox86.CARD.EGA) {
            /**
             * We can leverage our screen wrap support to handle split-screen views as well; we must calculate
             * the number of WHOLE + PARTIAL rows we can draw (which may reduce cbScreen).  TODO: We must also pass
             * along the height of any PARTIAL row, so that pixel-level split-screens can eventually be supported.
             */
            let nRowsHidden = card.getCRTCReg(Card.CRTC.EGA.VDEND) - card.getCRTCReg(Card.CRTC.EGA.LINECOMP);
            if (nRowsHidden > 0) {
                let font = this.aFonts[this.nActiveFont];
                if (font) {
                    nRowsHidden = (nRowsHidden / font.cyChar)|0;
                }
                if (nRowsHidden > 0) {
                    cbScreenWrap = ((this.nColsLogical * (nRowsHidden - 1) + this.nColsBuffer) / this.nPointsPerByte)|0;
                    cbScreen -= ((this.nColsLogical * nRowsHidden) / this.nPointsPerByte)|0;
                    addrScreenWrap = addrBuffer;
                }
            }
        }

        /**
         * updateScreenCells() no longer "scrubs" the screen buffer itself; we call cleanMemory() afterward
         * to take care of that.  This has two benefits: 1) if this was a "forced" updated (or an update to make
         * the cell cache valid), cleaning the screen buffer ourselves reflects the fact that both it and our
         * display are now "in sync"; 2) if screen wrap-around is in effect, we don't want to scrub either subset
         * of the screen until both subsets have been updated, otherwise the second update may erroneously think
         * that nothing changed if it happens to share any blocks with the first.
         */
        let cBlinkOrig = this.cBlinkVisible;
        let cCells = this.updateScreenCells(addrBuffer, addrScreen, cbScreen, iCell, nCells, fForce, fBlinkUpdate);
        if (cbScreenWrap) {
            iCell += cCells;
            let cBlinkNew = this.cBlinkVisible;
            if (cBlinkOrig < 0) this.cBlinkVisible = -1;
            cCells += this.updateScreenCells(addrBuffer, addrScreenWrap, cbScreenWrap, iCell, nCells, fForce, fBlinkUpdate);
            this.cBlinkVisible += cBlinkNew;
            this.bus.cleanMemory(addrScreenWrap, cbScreenWrap, true);
        }
        this.bus.cleanMemory(addrScreen, cbScreen, true);
        if (cCells) this.iCellCacheValid = 2;
        return true;
    }

    /**
     * updateScreenCells(addrBuffer, addrScreen, cbScreen, iCell, nCells, fForce, fBlinkUpdate)
     *
     * @this {Videox86}
     * @param {number} addrBuffer
     * @param {number} addrScreen
     * @param {number} cbScreen
     * @param {number} iCell
     * @param {number} nCells
     * @param {boolean} fForce
     * @param {boolean} fBlinkUpdate
     * @returns {number} (number of cells processed)
     */
    updateScreenCells(addrBuffer, addrScreen, cbScreen, iCell, nCells, fForce, fBlinkUpdate)
    {
        /**
         * When determining the number of cells this update may affect, it is NOT simply cbScreen
         * multiplied by nPointsPerByte, because cbScreen includes any and all off-screen cells, too.
         */
        let cCells = cbScreen * this.nPointsPerByte;
        cCells = Math.trunc(cCells / this.nColsLogical) * this.nColsBuffer + (cCells % this.nColsLogical);
        if (cCells > nCells) cCells = nCells;
        let addrScreenLimit = addrScreen + cbScreen;

        /**
         * This next bit of code can be completely disabled if we discover problems with the dirty
         * memory block tracking feature or we need to remove or disable that feature in the future.
         *
         * We use cleanMemory() to check the video buffer's dirty state.  If the buffer is clean
         * AND there are no visible blinking characters (as of the last updateScreen) AND there is
         * no visible cursor, then we're done; simply return.  Otherwise, if there's only a blinking
         * cursor, then update JUST that one cell.
         */
        if (!fForce && this.iCellCacheValid == 2 && this.bus.cleanMemory(addrScreen, cbScreen)) {
            if (!fBlinkUpdate && this.cBlinkVisible >= 0) {
                if (!this.fShifted) return cCells;
                iCell = nCells;
            }
            else if (!this.cBlinkVisible) {
                /**
                 * iCellCursor may be negative if the cursor is hidden or if it's not on the visible screen.
                 */
                let iCellCursor = this.iCellCursor - iCell;
                if (iCellCursor < 0) {
                    if (!this.fShifted) return cCells;
                    iCell = nCells;
                }
                else {
                    let row = (iCellCursor / this.nColsBuffer)|0;
                    let col = (iCellCursor % this.nColsBuffer);
                    addrScreen += (row * this.nColsLogical + col) << 1;
                    iCell += iCellCursor;
                    nCells = iCell + 1;
                }
            }
            // else if (this.cBlinks & 0x1) return cCells;
        }

        if (this.nActiveFont) {
            /**
             * This is the text-mode update case.
             */
            this.updateScreenText(addrBuffer, addrScreen, addrScreenLimit, iCell, nCells);
        }
        else if (this.cbSplit) {
            /**
             * All CGA graphics modes have the goofy split-buffer layout, hence the simple test above.
             */
            cCells = this.updateScreenGraphicsCGA(addrScreen, addrScreenLimit);
        }
        else if (!this.fColor256) {
            /**
             * All EGA graphics modes are taken care of here, including all 16-color VGA graphics modes.
             */
            cCells = this.updateScreenGraphicsEGA(addrBuffer, addrScreen, addrScreenLimit);
        }
        else {
            /**
             * Finally, all 256-color VGA modes are processed here.
             */
            cCells = this.updateScreenGraphicsVGA(addrBuffer, addrScreen, addrScreenLimit);
        }

        this.fShifted = false;

        return cCells;
    }

    /**
     * updateScreenText(addrBuffer, addrScreen, addrScreenLimit, iCell, nCells)
     *
     * @this {Videox86}
     * @param {number} addrBuffer
     * @param {number} addrScreen
     * @param {number} addrScreenLimit
     * @param {number} iCell
     * @param {number} nCells
     * @returns {number} (number of cells processed)
     */
    updateScreenText(addrBuffer, addrScreen, addrScreenLimit, iCell, nCells)
    {
        let font = this.aFonts[this.nActiveFont];
        if (!font) return 0;

        /**
         * If MDA.MODE.BLINK_ENABLE is set and a cell's blink bit is set, then if (cBlinks & 0x2) != 0,
         * we want the foreground element of the cell to be drawn; otherwise we don't.  So every 16-bit
         * data word we pull from the video buffer will be supplemented with our own special attribute bit
         * (ATTRS.DRAW_FGND = 0x100) accordingly; and to simplify the drawing code, we will also mask the
         * blink bit from the cell's attribute bits.
         *
         * If MDA.MODE.BLINK_ENABLE is clear, then we always set ATTRS.DRAW_FGND and never mask the blink
         * bit in a cell's attributes bits, since it's actually an intensity bit in that case.
         */
        let card = this.cardActive;
        let cCells = 0, cUpdated = 0;
        let dataBlink = 0;
        let dataDraw = (Videox86.ATTRS.DRAW_FGND << 8);
        let dataMask = 0xfffff;
        let adwMemory = card.adwMemory;

        /**
         * Normally, cbCell will be 2, when attribute bytes are addressible (interleaved) with character bytes,
         * but Fantasy Land is an exception.  Which is another great reason why the loop below needs to get both
         * bytes directly from adwMemory, because reading them with bus.getShortDirect(addrScreen) won't always work.
         */
        let cbCell = (1 / this.nPointsPerByte)|0;
        let nShift = (card.nAccess & Card.WRITE.PAIRS)? 1 : 0;

        let fBlinkEnable = (card.regMode & Card.MDA.MODE.BLINK_ENABLE);
        if (this.nCard >= Videox86.CARD.EGA) {
            fBlinkEnable = (card.regATCData[Card.ATC.MODE.INDX] & Card.ATC.MODE.BLINK_ENABLE);
        }

        if (fBlinkEnable) {
            dataBlink = (Videox86.ATTRS.BGND_BLINK << 8);
            dataMask &= ~dataBlink;
            if (!(this.cBlinks & 0x2)) dataMask &= ~dataDraw;
        }

        this.cBlinkVisible = 0;
        let col = iCell % this.nColsBuffer;
        let row = (iCell / this.nColsBuffer) | 0;
        let nbRowExtra = (this.nColsLogical - this.nColsBuffer /* - iCellFirst */) << (cbCell - 1);

        while (addrScreen < addrScreenLimit && iCell < nCells) {

            let idw = (addrScreen - addrBuffer) >>> nShift;
            this.assert(idw >= 0 && idw < adwMemory.length);

            let data = (adwMemory[idw] & 0xffff);

            data |= dataDraw;
            if (data & dataBlink) {
                this.cBlinkVisible++;
                data &= dataMask;
            }
            if (iCell == this.iCellCursor) {
                data |= ((this.cBlinks & 0x1)? (Videox86.ATTRS.DRAW_CURSOR << 8) : 0);
            }

            this.assert(iCell < this.aCellCache.length);

            if (!this.iCellCacheValid || data !== this.aCellCache[iCell]) {
                this.updateChar(col, row, data, this.contextBuffer);
                this.aCellCache[iCell] = data;
                cUpdated++;
            }

            cCells++;
            iCell++;
            addrScreen += cbCell;
            if (++col >= this.nColsBuffer) {
                col = 0;
                if (++row >= this.nRowsBuffer) break;
                addrScreen += nbRowExtra;
            }
        }

        if (this.contextBuffer && (cUpdated || this.fShifted)) {
            let xBuffer = 0, yBuffer = 0;
            let cxBuffer = this.cxBuffer;
            let cyBuffer = this.cyBuffer;
            if (this.fOverBuffer) {
                let xShift = this.nShiftLeft;
                let yShift = this.nShiftUp;
                if (this.fDoubleFont) {
                    xShift <<= 1;
                    yShift <<= 1;
                }
                xBuffer += xShift;
                yBuffer += yShift;
                cxBuffer -= font.cxCell;
                cyBuffer -= font.cyCell;
            }
            this.contextScreen.drawImage(this.canvasBuffer, xBuffer, yBuffer, cxBuffer, cyBuffer, this.xScreenOffset, this.yScreenOffset, this.cxScreenOffset, this.cyScreenOffset);
        }

        this.checkBlink();
        return cCells;
    }

    /**
     * updateScreenGraphicsCGA(addrScreen, addrScreenLimit)
     *
     * @this {Videox86}
     * @param {number} addrScreen
     * @param {number} addrScreenLimit
     * @returns {number} (number of cells processed)
     */
    updateScreenGraphicsCGA(addrScreen, addrScreenLimit)
    {
        /**
         * This is the CGA graphics-mode update case, where cells are pixels spread across two halves of the buffer.
         */
        let cCells = (addrScreenLimit - addrScreen) >> 1;
        let iCell = 0, nPixelsPerCell = this.nPointsPerCell;
        let addr = addrScreen;
        let wPixelMask = (nPixelsPerCell == 16? 0x10000 : 0x30000);
        let nPixelShift = (nPixelsPerCell == 16? 1 : 2);
        let aPixelColors = this.getCardColors(nPixelShift);

        let x = 0, y = 0;
        let xDirty = this.nCols, xMaxDirty = 0, yDirty = this.nRows, yMaxDirty = 0;

        this.cBlinkVisible = 0;
        while (addr < addrScreenLimit) {
            let data = this.bus.getShortDirect(addr);
            this.assert(iCell < this.aCellCache.length);
            if (this.iCellCacheValid && data === this.aCellCache[iCell]) {
                x += nPixelsPerCell;
            } else {
                this.aCellCache[iCell] = data;
                let wPixels = (data >> 8) | ((data & 0xff) << 8);
                let wMask = wPixelMask, nShift = 16;
                if (x < xDirty) xDirty = x;
                for (let iPixel = 0; iPixel < nPixelsPerCell; iPixel++) {
                    let bPixel = (wPixels & (wMask >>= nPixelShift)) >> (nShift -= nPixelShift);
                    this.setPixel(this.imageBuffer, x++, y, aPixelColors[bPixel]);
                }
                if (x > xMaxDirty) xMaxDirty = x;
                if (y < yDirty) yDirty = y;
                if (y >= yMaxDirty) yMaxDirty = y + 1;
            }
            addr += 2;
            iCell++;
            if (x >= this.nCols) {
                x = 0;
                y += 2;
                if (y > this.nRows) break;
                if (y == this.nRows) {
                    y = 1;
                    addr = addrScreen + this.cbSplit;
                }
            }
        }

        /**
         * Instead of blasting the ENTIRE imageBuffer into contextBuffer, and then blasting the ENTIRE
         * canvasBuffer onto contextScreen, e{ven for the smallest change, let's try to be a bit smarter about
         * the update (well, to the extent that the canvas APIs permit).
         */
        if (xDirty < this.nCols) {
            let cxDirty = xMaxDirty - xDirty;
            let cyDirty = yMaxDirty - yDirty;
            // this.contextBuffer.putImageData(this.imageBuffer, 0, 0);
            this.contextBuffer.putImageData(this.imageBuffer, 0, 0, xDirty, yDirty, cxDirty, cyDirty);
            /**
             * While ideally I would draw only the dirty portion of canvasBuffer, there usually isn't a 1-1 pixel mapping
             * between canvasBuffer and contextScreen.  In fact, the WHOLE POINT of the canvasBuffer is to leverage
             * drawImage()'s scaling ability; for example, a CGA graphics mode might be 640x200, whereas the canvas representing
             * the screen might be 960x400.  In those situations, if we draw interior rectangles, we often end up with subpixel
             * artifacts along the edges of those rectangles.  So it appears I must continue to redraw the entire canvasBuffer
             * on every change.
             *
            let xScreen = (((xDirty * this.cxScreen) / this.nCols) | 0);
            let yScreen = (((yDirty * this.cyScreen) / this.nRows) | 0);
            let cxScreen = (((cxDirty * this.cxScreen) / this.nCols) | 0);
            let cyScreen = (((cyDirty * this.cyScreen) / this.nRows) | 0);
            this.contextScreen.drawImage(this.canvasBuffer, xDirty, yDirty, cxDirty, cyDirty, xScreen, yScreen, cxScreen, cyScreen);
             */
            this.contextScreen.drawImage(this.canvasBuffer, 0, 0, this.nCols, this.nRows, 0, 0, this.cxScreen, this.cyScreen);
        }
        return cCells;
    }

    /**
     * updateScreenGraphicsEGA(addrBuffer, addrScreen, addrScreenLimit)
     *
     * TODO: Add support for blinking graphics (ATC.MODE.BLINK_ENABLE)
     *
     * @this {Videox86}
     * @param {number} addrBuffer
     * @param {number} addrScreen
     * @param {number} addrScreenLimit
     * @returns {number} (number of cells processed)
     */
    updateScreenGraphicsEGA(addrBuffer, addrScreen, addrScreenLimit)
    {
        let iCell = 0;
        let cCells = addrScreenLimit - addrScreen;
        let aPixelColors = this.getCardColors();
        let adwMemory = this.cardActive.adwMemory;

        let x = 0, y = 0;
        let xDirty = this.nCols, xMaxDirty = 0, yDirty = this.nRows, yMaxDirty = 0;
        let iPixelFirst = this.cardActive.regATCData[Card.ATC.HPAN.INDX] & Card.ATC.HPAN.SHIFT_LEFT;

        /**
         * TODO: What should happen if the card is programmed such that nColsLogical is LESS THAN nCols?
         */
        let nRowAdjust = (this.nColsLogical > this.nCols? ((this.nColsLogical - this.nCols - iPixelFirst) >> 3) : 0);

        this.cBlinkVisible = 0;
        while (addrScreen < addrScreenLimit) {
            let idw = addrScreen++ - addrBuffer;
            this.assert(idw >= 0 && idw < adwMemory.length);
            let data = adwMemory[idw];

            /**
             * Figure out how many visible pixels this data represents; usually 8, unless panning is being used.
             */
            let iPixel;
            let nPixels = 8;

            if (iPixelFirst) {
                /**
                 * Notice that we're not using the cell cache when panning is active, because the cached cell data no
                 * longer aligns with the data we're pulling out of the video buffer, and it's not clear that the effort
                 * to realign the data and make a valid cache comparison would save enough work to make it worthwhile.
                 */
                if (!x) {
                    data <<= iPixelFirst;
                    nPixels -= iPixelFirst;
                    /**
                     * This is as good a place as any to invalidate the cell cache when panning is active; this ensures
                     * we don't rely on stale cache contents once panning stops.
                     */
                    this.iCellCacheValid = 0;
                } else {
                    iPixel = this.nCols - x;
                    if (nPixels > iPixel) nPixels = iPixel;
                }
            } else {
                this.assert(iCell < this.aCellCache.length);
                if (this.iCellCacheValid && data === this.aCellCache[iCell]) {
                    x += nPixels;
                    nPixels = 0;
                } else {
                    this.aCellCache[iCell] = data;
                }
                iCell++;
            }

            if (nPixels) {
                if (x < xDirty) xDirty = x;
                for (iPixel = 0; iPixel < nPixels; iPixel++) {
                    /**
                     * 0x80808080 may LOOK like a 32-bit value, but it is not, because JavaScript treats it as a POSITIVE
                     * number, and therefore outside the normal 32-bit integer range; however, the AND operator guarantees
                     * that the result will be a 32-bit value, so it doesn't matter.
                     */
                    let dwPixel = data & 0x80808080;
                    this.assert(Videox86.aEGADWToByte[dwPixel] !== undefined);
                    /**
                     * We now ensure that bPixel will default to 0 if an undefined value ever slips through again.
                     *
                     * How did an undefined value slip through?  We had (incorrectly) initialized entries in aEGADWToByte;
                     * for example, we used to set aEGADWToByte[0x80808080] instead of aEGADWToByte[0x80808080|0].  The
                     * former is a POSITIVE index that is outside the 32-bit integer range, whereas the latter is a NEGATIVE
                     * index, which is what this code requires.
                     */
                    let bPixel = Videox86.aEGADWToByte[dwPixel] || 0;
                    this.setPixel(this.imageBuffer, x++, y, aPixelColors[bPixel]);
                    data <<= 1;
                }
                if (x > xMaxDirty) xMaxDirty = x;
                if (y < yDirty) yDirty = y;
                if (y >= yMaxDirty) yMaxDirty = y + 1;
            }

            this.assert(x <= this.nCols);

            if (x >= this.nCols) {
                x = 0;
                if (++y >= this.nRows) break;
                addrScreen += nRowAdjust;
            }
        }

        if (iPixelFirst) cCells = 0;    // zero the cell count to inhibit setting iCellCacheValid

        /**
         * For a fascinating discussion of the best way to update the screen canvas at this point, see updateScreenGraphicsCGA().
         */
        if (xDirty < this.nCols) {
            let cxDirty = xMaxDirty - xDirty;
            let cyDirty = yMaxDirty - yDirty;
            this.contextBuffer.putImageData(this.imageBuffer, 0, 0, xDirty, yDirty, cxDirty, cyDirty);
            this.contextScreen.drawImage(this.canvasBuffer, 0, 0, this.nCols, this.nRows, 0, 0, this.cxScreen, this.cyScreen);
        }
        return cCells;
    }

    /**
     * updateScreenGraphicsVGA(addrBuffer, addrScreen, addrScreenLimit)
     *
     * This function name is a slight misnomer: updateScreenGraphicsEGA() takes care of all the 4bpp video modes
     * (first introduced by the EGA and later expanded by the VGA), where each pixel's bits are spread across the 4
     * planes, whereas this function takes care of just the 8bpp video modes introduced by the VGA, such as mode 0x13
     * (320x200x256), where each pixel's bits are contained within a single plane.  This is essentially all 256-color
     * modes (CHAIN4, "Mode X", etc), hence the hard-coded call to getCardColors(8).
     *
     * TODO: Add support for blinking graphics (ATC.MODE.BLINK_ENABLE)
     *
     * @this {Videox86}
     * @param {number} addrBuffer
     * @param {number} addrScreen
     * @param {number} addrScreenLimit
     * @returns {number} (number of cells processed)
     */
    updateScreenGraphicsVGA(addrBuffer, addrScreen, addrScreenLimit)
    {
        let iCell = 0;
        let cCells = addrScreenLimit - addrScreen;
        let addr = addrScreen;
        let aPixelColors = this.getCardColors(8);
        let adwMemory = this.cardActive.adwMemory;

        let x = 0, y = 0;
        let xDirty = this.nCols, xMaxDirty = 0, yDirty = this.nRows, yMaxDirty = 0;
        let cbInc = (this.cardActive.regSEQData[Card.SEQ.MEMMODE.INDX] & Card.SEQ.MEMMODE.CHAIN4)? 4 : 1;
        let iPixelFirst = this.cardActive.regATCData[Card.ATC.HPAN.INDX] & Card.ATC.HPAN.SHIFT_LEFT;

        /**
         * TODO: What should happen if the card is programmed such that nColsLogical is LESS THAN nCols?
         */
        let nRowAdjust = (this.nColsLogical > this.nCols? ((this.nColsLogical - this.nCols - iPixelFirst) >> 3) : 0);

        this.cBlinkVisible = 0;
        while (addr < addrScreenLimit) {
            let idw = addr - addrBuffer;
            this.assert(idw >= 0 && idw < adwMemory.length);
            let data = adwMemory[idw];

            /**
             * Figure out how many visible pixels this data represents; usually 4, unless panning is being used.
             */
            let iPixel;
            let nPixels = 4;

            if (iPixelFirst) {
                /**
                 * TODO: Implement support for 8bpp panning
                 */
            } else {
                this.assert(iCell < this.aCellCache.length);
                if (this.iCellCacheValid && data === this.aCellCache[iCell]) {
                    x += nPixels;
                    nPixels = 0;
                } else {
                    this.aCellCache[iCell] = data;
                }
                iCell++;
            }

            if (nPixels) {
                if (x < xDirty) xDirty = x;
                for (iPixel = 0; iPixel < nPixels; iPixel++) {
                    this.setPixel(this.imageBuffer, x++, y, aPixelColors[data & 0xff]);
                    data >>>= 8;
                }
                if (x > xMaxDirty) xMaxDirty = x;
                if (y < yDirty) yDirty = y;
                if (y >= yMaxDirty) yMaxDirty = y + 1;
            }

            this.assert(x <= this.nCols);

            addr += cbInc;

            if (x >= this.nCols) {
                x = 0;
                if (++y >= this.nRows) break;
                addr += nRowAdjust;
            }
        }

        if (iPixelFirst) cCells = 0;    // zero the cell count to inhibit setting iCellCacheValid

        /**
         * For a fascinating discussion of the best way to update the screen canvas at this point, see updateScreenGraphicsCGA().
         */
        if (xDirty < this.nCols) {
            let cxDirty = xMaxDirty - xDirty;
            let cyDirty = yMaxDirty - yDirty;
            this.contextBuffer.putImageData(this.imageBuffer, 0, 0, xDirty, yDirty, cxDirty, cyDirty);
            this.contextScreen.drawImage(this.canvasBuffer, 0, 0, this.nCols, this.nRows, 0, 0, this.cxScreen, this.cyScreen);
        }
        return cCells;
    }

    /**
     * getRetraceBits(card)
     *
     * This returns a byte value with two bits set or clear as appropriate: RETRACE and VRETRACE.
     *
     * @this {Videox86}
     * @param {Object} card
     * @returns {number}
     */
    getRetraceBits(card)
    {
        /**
         * NOTE: The bits CGA.STATUS.RETRACE (0x01) and CGA.STATUS.VRETRACE (0x08) match the EGA definitions,
         * and they also correspond to the MDA bits MDA.STATUS.HDRIVE (0x01) and MDA.STATUS.BWVIDEO (0x08); it's
         * unclear why the MDA uses different designations, but the bits appear to serve the same purpose.
         */
        let b = 0;
        let nCycles = this.cpu.getCycles();
        let nCyclesElapsed = nCycles - card.nCyclesVertRetrace;
        /**
         * The following code is a work-around for IBM's VGA diagnostic code starting at C000:01E5,
         * which expects an entire screen refresh (ie, 400 horizontal retraces followed by 1 vertical
         * retrace) to take roughly 1/30 of a second instead of 1/60.  The longer vertical retrace
         * period may be due to some idiosyncrasy of how they programmed the card beforehand, I'm not
         * sure.  But I do know that they've turned on the SEQ.CLKMODE.SCREEN_OFF bit, so I use that
         * bit to trigger this work-around, which involves cutting the number of elapsed cycles in half,
         * as well as skipping every other (odd) vertical retrace in startVerticalRetrace().
         */
        if (card.nCard === Videox86.CARD.VGA) {
            if (card.regSEQData[Card.SEQ.CLKMODE.INDX] & Card.SEQ.CLKMODE.SCREEN_OFF) {
                nCyclesElapsed >>>= 1;
            }
        }
        if (nCyclesElapsed < 0) {       // presumably the CPU cycle count was reset since our last call
            card.nCyclesVertRetrace = nCycles;
            nCyclesElapsed = 0;
        }
        nCyclesElapsed -= card.nCyclesVertPeriod - card.nCyclesVertActive;
        if (nCyclesElapsed < 0) {
            b |= Card.CGA.STATUS.VRETRACE | Card.CGA.STATUS.RETRACE;
        } else {
            let nCyclesHorzRemain = nCyclesElapsed % card.nCyclesHorzPeriod;
            if (nCyclesHorzRemain > card.nCyclesHorzActive) {
                b |= Card.CGA.STATUS.RETRACE;
            }
        }
        return b;
    }

    /**
     * inMDAIndx(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3B4)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number|undefined}
     */
    inMDAIndx(port, addrFrom)
    {
        return this.inCRTCIndx(this.cardMono, port, addrFrom);
    }

    /**
     * outMDAIndx(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3B4)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outMDAIndx(port, bOut, addrFrom)
    {
        this.outCRTCIndx(this.cardMono, port, bOut, addrFrom);
    }

    /**
     * inMDAData(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3B5)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number|undefined}
     */
    inMDAData(port, addrFrom)
    {
        return this.inCRTCData(this.cardMono, port, addrFrom);
    }

    /**
     * outMDAData(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3B5)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outMDAData(port, bOut, addrFrom)
    {
        this.outCRTCData(this.cardMono, port, bOut, addrFrom);
    }

    /**
     * inMDAMode(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3B8)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inMDAMode(port, addrFrom)
    {
        return this.inCardMode(this.cardMono, addrFrom);
    }

    /**
     * outMDAMode(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3B8)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outMDAMode(port, bOut, addrFrom)
    {
        this.outCardMode(this.cardMono, bOut, addrFrom);
    }

    /**
     * inMDAStatus(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3BA)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inMDAStatus(port, addrFrom)
    {
        return this.inCardStatus(this.cardMono, addrFrom);
    }

    /**
     * outFeat(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3BA or 0x3DA)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     *
     * NOTE: While this port also existed on the MDA and CGA, it existed only as an INPUT port, not an OUTPUT port.
     */
    outFeat(port, bOut, addrFrom)
    {
        this.cardEGA.regFeat = (this.cardEGA.regFeat & ~Card.FEAT_CTRL.BITS) | (bOut & Card.FEAT_CTRL.BITS);
        this.printIO(port, bOut, addrFrom, "FEAT");
    }

    /**
     * inATCIndx(port, addrFrom)
     *
     * Technically, port 0x3C0 is readable only on a VGA, but we allow reads on an EGA as well,
     * primarily for debugging purposes.  Moreover, ATC port reads do NOT toggle the ATC address/data
     * flip-flop; only writes have that effect.
     *
     * @this {Videox86}
     * @param {number} port (0x3C0)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inATCIndx(port, addrFrom)
    {
        let b = this.cardEGA.regATCIndx;
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(Card.ATC.PORT, undefined, addrFrom, "ATC.INDX", b, true);
        }
        return b;
    }

    /**
     * inATCData(port, addrFrom)
     *
     * Technically, port 0x3C0 is readable only on a VGA, but we allow reads on an EGA as well,
     * primarily for debugging purposes.  Moreover, ATC port reads do NOT toggle the ATC address/data
     * flip-flop; only writes have that effect.
     *
     * @this {Videox86}
     * @param {number} port (0x3C1)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inATCData(port, addrFrom)
    {
        let b = this.cardEGA.regATCData[this.cardEGA.regATCIndx & Card.ATC.INDX_MASK];
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(Card.ATC.PORT, undefined, addrFrom, "ATC." + this.cardEGA.asATCRegs[this.cardEGA.regATCIndx & Card.ATC.INDX_MASK], b, true);
        }
        return b;
    }

    /**
     * outATC(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C0)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outATC(port, bOut, addrFrom)
    {
        let card = this.cardEGA;
        let fPalEnabled = (card.regATCIndx & Card.ATC.INDX_PAL_ENABLE);
        if (!card.fATCData) {
            card.regATCIndx = bOut;
            this.printIO(port, bOut, addrFrom, "ATC.INDX");
            card.fATCData = true;
            if ((bOut & Card.ATC.INDX_PAL_ENABLE) && !fPalEnabled) {
                /**
                 * TODO: Consider whether it's really necessary (or desirable) to immediately update the screen
                 * on a font change, or if it's sufficient to simply wait until the next normal periodic update.
                 */
                if (this.buildFont(true)) {
                    this.updateScreen(true);
                }
            }
            else {
                /**
                 * TODO: We might want a screen blanking function, suitable for any mode, when INDX_PAL_ENABLE is cleared.
                 * powerDown() might like to use such a function, too.  updateScreen() already disables any further screen
                 * updates while INDX_PAL_ENABLE is clear (except when fForce is true), but that's all we currently do.
                 *
                 *      if (!(bOut & Card.ATC.INDX_PAL_ENABLE) && fPalEnabled) this.blankScreen();
                 *
                 * However, there also needs to be a delay, because when the IBM VGA BIOS changes the mode, it updates
                 * the ATC palette registers in such a way that INDX_PAL_ENABLE is constantly toggled; here's one iteration:
                 *
                 *      C000:2B39 EC              IN       AL,DX
                 *      C000:2B3A B2C0            MOV      DL,C0
                 *      C000:2B3C 8BC3            MOV      AX,BX
                 *      C000:2B3E 86C4            XCHG     AL,AH
                 *      C000:2B40 EE              OUT      DX,AL    <-- this ATC index value does NOT contain 0x20
                 *      C000:2B41 86C4            XCHG     AL,AH
                 *      C000:2B43 EE              OUT      DX,AL
                 *      C000:2B44 B020            MOV      AL,20
                 *      C000:2B46 EE              OUT      DX,AL    <-- this ATC index value obviously DOES contain 0x20
                 *
                 * I'm not sure there are any situations where deliberately flickering the screen is a good thing -- unless
                 * someone REALLY wants to recreate the ugly flickering scroll of a CGA...?
                 */
            }
        }
        else {
            card.fATCData = false;
            let iReg = card.regATCIndx & Card.ATC.INDX_MASK;
            if (iReg >= Card.ATC.PALETTE_REGS || !fPalEnabled) {
                let fModified = (card.regATCData[iReg] !== bOut);
                if (Videox86.TRAPALL || fModified) {
                    if (!addrFrom || this.messageEnabled()) {
                        this.printIO(port, bOut, addrFrom, "ATC." + card.asATCRegs[iReg], undefined, true);
                    }
                }
                if (fModified) {
                    card.regATCData[iReg] = bOut;
                    if (iReg == Card.ATC.HPAN.INDX) {
                        if (this.fOverBuffer) {
                            this.fShifted = true;
                            /**
                             * TODO: The SHIFT_LEFT value apparently has a slightly different interpretation in
                             * monochrome mode (ie, when font.cxChar == 9, 8 means no shift and 0-7 means 1-8 shifts).
                             */
                            this.nShiftLeft = bOut & Card.ATC.HPAN.SHIFT_LEFT;
                        }
                    }
                    else if (iReg != Card.ATC.OVERSCAN.INDX) {
                        this.invalidateCellCache(true);
                    }
                }
            }
        }
    }

    /**
     * inStatus0(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C2)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inStatus0(port, addrFrom)
    {
        let bSWBit = 0;
        if (this.nCard == Videox86.CARD.EGA) {
            let iBit = 3 - ((this.cardEGA.regMisc & Card.MISC.CLOCK_SELECT) >> 2);    // this is the desired SW # (0-3)
            bSWBit = (this.bEGASwitches & (1 << iBit)) << (Card.STATUS0.SWSENSE_SHIFT - iBit);
        } else {
            /**
             * The IBM VGA ROM expects the SWSENSE bit to change according to how the DAC is programmed.
             *
             * At C000:0391, the ROM selects the following array at 0x0454:
             *
             *      db  0x12,0x12,0x12,0x10
             *
             * and writes the first 3 bytes to DAC register #0, and then compares SWSENSE to the 4th byte (0x10).
             *
             * If the 4th byte matches, then the ROM clears the BIOS "monochrome monitor" bit, and does the same
             * thing again with 5 more arrays, expecting the 4th byte in all 5 arrays to match SWSENSE, and being
             * very unhappy if they don't:
             *
             *      db  0x14,0x14,0x14,0x10
             *      db  0x2D,0x14,0x14,0x00
             *      db  0x14,0x2D,0x14,0x00
             *      db  0x14,0x14,0x2D,0x00
             *      db  0x2D,0x2D,0x2D,0x00
             *
             * I ensure much happiness by setting SWSENSE unless any of the three 6-bit DAC values contain 0x2D.
             *
             * This hard-coded behavior assumes a color monitor.  If you really want to simulate a monochrome monitor,
             * then the 1st array (above) must mismatch, and a different set of arrays must all match:
             *
             *      db  0x04,0x12,0x04,0x10
             *      db  0x1E,0x12,0x04,0x00
             *      db  0x04,0x2D,0x04,0x00
             *      db  0x04,0x16,0x15,0x00
             *      db  0x00,0x00,0x00,0x10
             *
             * In other words, for a monochrome monitor, set SWSENSE only when DAC register #0 matches the first and last
             * sets of values.
             */
            let dwDAC = this.cardEGA.regDACData[0];
            if ((dwDAC & 0x3f) != 0x2d && (dwDAC & (0x3f << 6)) != (0x2d << 6) && (dwDAC & (0x3f << 12)) != (0x2d << 12)) {
                bSWBit |= Card.STATUS0.SWSENSE;
            }
        }
        let b = ((this.cardEGA.regStatus0 & ~Card.STATUS0.SWSENSE) | bSWBit);
        /**
         * TODO: Figure out where Card.STATUS0.FEAT bits should come from....
         */
        this.cardEGA.regStatus0 = b;
        this.printIO(Card.STATUS0.PORT, undefined, addrFrom, "STATUS0", b);
        return b;
    }

    /**
     * @this {Videox86}
     * @param {number} port (0x3C2)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outMisc(port, bOut, addrFrom)
    {
        this.cardEGA.regMisc = bOut;
        this.enableEGA();
        this.printIO(Card.MISC.PORT_WRITE, bOut, addrFrom, "MISC");
    }

    /**
     * inVGAEnable(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C3)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inVGAEnable(port, addrFrom)
    {
        let b = this.cardEGA.regVGAEnable;
        this.printIO(Card.VGA_ENABLE.PORT, undefined, addrFrom, "VGA_ENABLE", b);
        return b;
    }

    /**
     * outVGAEnable(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C3)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outVGAEnable(port, bOut, addrFrom)
    {
        this.cardEGA.regVGAEnable = bOut;
        this.printIO(Card.VGA_ENABLE.PORT, bOut, addrFrom, "VGA_ENABLE");
    }

    /**
     * inSEQIndx(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C4)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inSEQIndx(port, addrFrom)
    {
        let b = this.cardEGA.regSEQIndx;
        this.printIO(Card.SEQ.INDX.PORT, undefined, addrFrom, "SEQ.INDX", b);
        return b;
    }

    /**
     * outSEQIndx(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C4)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outSEQIndx(port, bOut, addrFrom)
    {
        this.cardEGA.regSEQIndx = bOut;
        this.printIO(Card.SEQ.INDX.PORT, bOut, addrFrom, "SEQ.INDX");
    }

    /**
     * inSEQData(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C5)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inSEQData(port, addrFrom)
    {
        let b = this.cardEGA.regSEQData[this.cardEGA.regSEQIndx];
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(Card.SEQ.DATA.PORT, undefined, addrFrom, "SEQ." + this.cardEGA.asSEQRegs[this.cardEGA.regSEQIndx], b, true);
        }
        return b;
    }

    /**
     * outSEQData(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C5)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outSEQData(port, bOut, addrFrom)
    {
        if (Videox86.TRAPALL || this.cardEGA.regSEQData[this.cardEGA.regSEQIndx] !== bOut) {
            if (!addrFrom || this.messageEnabled()) {
                this.printIO(Card.SEQ.DATA.PORT, bOut, addrFrom, "SEQ." + this.cardEGA.asSEQRegs[this.cardEGA.regSEQIndx], undefined, true);
            }
            this.cardEGA.regSEQData[this.cardEGA.regSEQIndx] = bOut;
        }

        let nFontSelect;

        switch(this.cardEGA.regSEQIndx) {

        case Card.SEQ.MAPMASK.INDX:
            this.cardEGA.nSeqMapMask = Videox86.aEGAByteToDW[bOut & Card.SEQ.MAPMASK.MAPS];
            break;

        case Card.SEQ.CHARMAP.INDX:
            nFontSelect = this.getSelectedFonts();
            if (nFontSelect != this.nFontSelect) {
                if (DEBUG) {
                    if ((nFontSelect & 0xff) == (nFontSelect >> 8)) {
                        if (this.messageEnabled(MESSAGE.VIDEO + MESSAGE.PORT)) {
                            this.printf("outSEQData(%#04X): font selection changing from %#06X to %#06X\n", bOut, this.nFontSelect, nFontSelect);
                        }
                    } else {
                        this.printf("outSEQData(%#04X): low font (%#04X) differs from high font (%#04X)\n", bOut, nFontSelect & 0xff, nFontSelect >> 8);
                        this.cpu.stopCPU();
                    }
                }
                let nFontPrev = this.nFontSelect;
                this.buildFont(true);
                this.assert(this.nFontSelect == nFontSelect);
                this.invalidateCellCache(false, nFontSelect, nFontPrev);
                /**
                 * TODO: Consider whether this code should, like outATC(), immediately update the screen
                 * on a font change, or if it's sufficient to simply wait until the next normal periodic update.
                 */
            }
            break;

        case Card.SEQ.MEMMODE.INDX:
            if (this.setCardAccess(this.getCardAccess())) {
                /**
                 * When switching screens (via SysReq) on early revisions of OS/2 (eg, FOOTBALL), the screen would go
                 * blank; this appeared to be because when the card is reprogrammed, we first think the card is going into
                 * graphics mode, then we reverse course when it becomes clear that the card is going back into text mode,
                 * but unfortunately, at that precise moment, the Sequencer hasn't been fully reprogrammed, so when we're
                 * reading screen memory, we're getting back ZEROS for every odd byte (which are the text attribute bytes),
                 * so the screen is redrawn as black-on-black.
                 *
                 * My solution was to change setCardAccess() to indicate whether it actually altered the video buffer
                 * address and/or format, and if so, then force another screen update.
                 *
                 * UPDATE: This change was NOT sufficient to resolve the OS/2 screen-switching bug described above; in fact,
                 * it's apparently not even necessary, because the REAL problem was caused by PAGED blocks with stale
                 * physical video memory blocks; the solution was for the Bus addMemory() and removeMemory() functions to
                 * call the the CPU flushPageBlocks() function.  With that change in place, the window now stays in sync
                 * with the buffer.
                 *
                 * And while calling updateScreen() here might still seem like a good idea, it CAN hurt performance, even
                 * if we're doing it only when setCardAccess() indicates a change, so I'm commenting the call out.
                 */
                // this.updateScreen(true);
            }
            break;

        default:
            break;
        }
    }

    /**
     * inDACMask(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C6)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inDACMask(port, addrFrom)
    {
        let b = this.cardEGA.regDACMask;
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(Card.DAC.MASK.PORT, undefined, addrFrom, "DAC.MASK", b, true);
        }
        return b;
    }

    /**
     * outDACMask(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C6)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outDACMask(port, bOut, addrFrom)
    {
        if (Videox86.TRAPALL || this.cardEGA.regDACMask !== bOut) {
            if (!addrFrom || this.messageEnabled()) {
                this.printIO(Card.DAC.MASK.PORT, bOut, addrFrom, "DAC.MASK", undefined, true);
            }
            this.cardEGA.regDACMask = bOut;
        }
    }

    /**
     * inDACState(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C7)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inDACState(port, addrFrom)
    {
        let b = this.cardEGA.regDACState;
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(Card.DAC.STATE.PORT, undefined, addrFrom, "DAC.STATE", b, true);
        }
        return b;
    }

    /**
     * outDACRead(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C7)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outDACRead(port, bOut, addrFrom)
    {
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(Card.DAC.ADDR.PORT_READ, bOut, addrFrom, "DAC.READ", undefined, true);
        }
        this.cardEGA.regDACAddr = bOut;
        this.cardEGA.regDACState = Card.DAC.STATE.MODE_READ;
        this.cardEGA.regDACShift = 0;
    }

    /**
     * outDACWrite(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C8)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outDACWrite(port, bOut, addrFrom)
    {
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(Card.DAC.ADDR.PORT_WRITE, bOut, addrFrom, "DAC.WRITE", undefined, true);
        }
        this.cardEGA.regDACAddr = bOut;
        this.cardEGA.regDACState = Card.DAC.STATE.MODE_WRITE;
        this.cardEGA.regDACShift = 0;
    }

    /**
     * inDACData(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C9)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inDACData(port, addrFrom)
    {
        let b = (this.cardEGA.regDACData[this.cardEGA.regDACAddr] >> this.cardEGA.regDACShift) & 0x3f;
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(Card.DAC.DATA.PORT, undefined, addrFrom, "DAC.DATA[" + StrLib.toHexByte(this.cardEGA.regDACAddr) + "][" + StrLib.toHexByte(this.cardEGA.regDACShift) + "]", b, true);
        }
        this.cardEGA.regDACShift += 6;
        if (this.cardEGA.regDACShift > 12) {
            this.cardEGA.regDACShift = 0;
            this.cardEGA.regDACAddr = (this.cardEGA.regDACAddr + 1) & (Card.DAC.TOTAL_REGS-1);
        }
        return b;
    }

    /**
     * outDACData(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3C9)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outDACData(port, bOut, addrFrom)
    {
        let dw = this.cardEGA.regDACData[this.cardEGA.regDACAddr];
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(Card.DAC.DATA.PORT, bOut, addrFrom, "DAC.DATA[" + StrLib.toHexByte(this.cardEGA.regDACAddr) + "][" + StrLib.toHexByte(this.cardEGA.regDACShift) + "]", undefined, true);
        }
        let dwNew = (dw & ~(0x3f << this.cardEGA.regDACShift)) | ((bOut & 0x3f) << this.cardEGA.regDACShift);
        if (dw !== dwNew) {
            this.cardEGA.regDACData[this.cardEGA.regDACAddr] = dwNew;
            this.invalidateCellCache(true);
        }
        this.cardEGA.regDACShift += 6;
        if (this.cardEGA.regDACShift > 12) {
            this.cardEGA.regDACShift = 0;
            this.cardEGA.regDACAddr = (this.cardEGA.regDACAddr + 1) & (Card.DAC.TOTAL_REGS-1);
        }
    }

    /**
     * inVGAFeat(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3CA)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inVGAFeat(port, addrFrom)
    {
        let b = this.cardEGA.regFeat;
        this.printIO(Card.FEAT_CTRL.PORT_READ, undefined, addrFrom, "FEAT", b);
        return b;
    }

    /**
     * outGRCPos2(port, bOut, addrFrom)
     *
     * "The EGA was originally implemented by IBM using two Graphics Controller Chips. This register is used to program
     * the Graphics #2 chip. See the Graphics #1 Position Register for details."
     *
     * "A one should be loaded into this location to map host data bus bits 2 and 3 to display planes 2 and 3, respectively."
     *
     * @this {Videox86}
     * @param {number} port (0x3CA)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outGRCPos2(port, bOut, addrFrom)
    {
        this.cardEGA.regGRCPos2 = bOut;
        this.printIO(Card.GRC.POS2_PORT, bOut, addrFrom, "GRC2");
    }

    /**
     * inVGAMisc(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3CC)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inVGAMisc(port, addrFrom)
    {
        let b = this.cardEGA.regMisc;
        this.printIO(Card.MISC.PORT_READ, undefined, addrFrom, "MISC", b);
        return b;
    }

    /**
     * outGRCPos1(port, bOut, addrFrom)
     *
     * "The EGA was originally implemented by IBM using two Graphics Controller Chips. It was necessary to program
     * each to respond to a different set of two consecutive bits of the 8-bit host data bus. In the IBM EGA implementation,
     * a 0 must be loaded into this register. In the VGA, there is no analogous register."
     *
     * "A zero should be loaded into this location to map host data bus bits 0 and 1 to display planes 0 and 1 respectively."
     *
     * Note that this register was not readable on the EGA, and when the VGA came along, reads of this port read the Misc reg.
     *
     * @this {Videox86}
     * @param {number} port (0x3CC)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outGRCPos1(port, bOut, addrFrom)
    {
        this.cardEGA.regGRCPos1 = bOut;
        this.printIO(Card.GRC.POS1_PORT, bOut, addrFrom, "GRC1");
    }

    /**
     * inGRCIndx(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3CE)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inGRCIndx(port, addrFrom)
    {
        let b = this.cardEGA.regGRCIndx;
        this.printIO(Card.GRC.INDX.PORT, undefined, addrFrom, "GRC.INDX", b);
        return b;
    }

    /**
     * outGRCIndx(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3CE)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outGRCIndx(port, bOut, addrFrom)
    {
        this.cardEGA.regGRCIndx = bOut;
        this.printIO(Card.GRC.INDX.PORT, bOut, addrFrom, "GRC.INDX");
    }

    /**
     * inGRCData(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3CF)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inGRCData(port, addrFrom)
    {
        let b = this.cardEGA.regGRCData[this.cardEGA.regGRCIndx];
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(Card.GRC.DATA.PORT, undefined, addrFrom, "GRC." + this.cardEGA.asGRCRegs[this.cardEGA.regGRCIndx], b);
        }
        return b;
    }

    /**
     * outGRCData(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3CF)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outGRCData(port, bOut, addrFrom)
    {
        if (Videox86.TRAPALL || this.cardEGA.regGRCData[this.cardEGA.regGRCIndx] !== bOut) {
            if (!addrFrom || this.messageEnabled()) {
                this.printIO(Card.GRC.DATA.PORT, bOut, addrFrom, "GRC." + this.cardEGA.asGRCRegs[this.cardEGA.regGRCIndx]);
            }
            this.cardEGA.regGRCData[this.cardEGA.regGRCIndx] = bOut;
        }
        switch(this.cardEGA.regGRCIndx) {
        case Card.GRC.SRESET.INDX:
            this.cardEGA.nSetMapData = Videox86.aEGAByteToDW[bOut & 0xf];
            this.cardEGA.nSetMapBits = this.cardEGA.nSetMapData & ~this.cardEGA.nSetMapMask;
            break;
        case Card.GRC.ESRESET.INDX:
            this.cardEGA.nSetMapMask = ~Videox86.aEGAByteToDW[bOut & 0xf];
            this.cardEGA.nSetMapBits = this.cardEGA.nSetMapData & ~this.cardEGA.nSetMapMask;
            break;
        case Card.GRC.COLORCOMP.INDX:
            this.cardEGA.nColorCompare = Videox86.aEGAByteToDW[bOut & 0xf] & (0x80808080|0);
            break;
        case Card.GRC.DATAROT.INDX:
        case Card.GRC.MODE.INDX:
            this.setCardAccess(this.getCardAccess());
            break;
        case Card.GRC.READMAP.INDX:
            this.cardEGA.nReadMapShift = (bOut & Card.GRC.READMAP.NUM) << 3;
            break;
        case Card.GRC.MISC.INDX:
            this.checkMode();
            break;
        case Card.GRC.COLORDC.INDX:
            this.cardEGA.nColorDontCare = Videox86.aEGAByteToDW[bOut & 0xf] & (0x80808080|0);
            break;
        case Card.GRC.BITMASK.INDX:
            this.cardEGA.nBitMapMask = bOut | (bOut << 8) | (bOut << 16) | (bOut << 24);
            break;
        default:
            break;
        }
    }

    /**
     * inCGAIndx(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3D4)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number|undefined}
     */
    inCGAIndx(port, addrFrom)
    {
        return this.inCRTCIndx(this.cardColor, port, addrFrom);
    }

    /**
     * outCGAIndx(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3D4)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outCGAIndx(port, bOut, addrFrom)
    {
        this.outCRTCIndx(this.cardColor, port, bOut, addrFrom);
    }

    /**
     * inCGAData(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3D5)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number|undefined}
     */
    inCGAData(port, addrFrom)
    {
        return this.inCRTCData(this.cardColor, port, addrFrom);
    }

    /**
     * outCGAData(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3D5)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outCGAData(port, bOut, addrFrom)
    {
        this.outCRTCData(this.cardColor, port, bOut, addrFrom);
    }

    /**
     * inCGAMode(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3D8)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inCGAMode(port, addrFrom)
    {
        return this.inCardMode(this.cardColor, addrFrom);
    }

    /**
     * outCGAMode(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3D8)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outCGAMode(port, bOut, addrFrom)
    {
        this.outCardMode(this.cardColor, bOut, addrFrom);
    }

    /**
     * inCGAColor(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3D9)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inCGAColor(port, addrFrom)
    {
        let b = this.cardColor.regColor;
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(port /* this.cardColor.port + 5 */, undefined, addrFrom, this.cardColor.type + ".COLOR", b);
        }
        return b;
    }

    /**
     * outCGAColor(port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3D9)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outCGAColor(port, bOut, addrFrom)
    {
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(port /* this.cardColor.port + 5 */, bOut, addrFrom, this.cardColor.type + ".COLOR");
        }
        if (this.cardColor.regColor !== bOut) {
            this.cardColor.regColor = bOut;
            this.invalidateCellCache(true);
        }
    }

    /**
     * inCGAStatus(port, addrFrom)
     *
     * @this {Videox86}
     * @param {number} port (0x3DA)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inCGAStatus(port, addrFrom)
    {
        return this.inCardStatus(this.cardColor, addrFrom);
    }

    /**
     * inCRTCIndx(card, port, addrFrom)
     *
     * @this {Videox86}
     * @param {Object} card
     * @param {number} port
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number|undefined}
     */
    inCRTCIndx(card, port, addrFrom)
    {
        let b;
        /**
         * The IBM VGA ROM makes some hardware determinations based on how the CRTC controller responds when
         * the IO_SELECT bit in the Miscellaneous Output Register is cleared; normally, that would mean ports
         * 0x3B? are decoded and ports 0x3D? are ignored.  We didn't used to bother ignoring them, but the
         * VGA ROM's logic requires it, so now we also check fActive.  However, we ignore only CRTC reads;
         * we retain any writes in case that information proves useful later.
         *
         * Note that returning an undefined value now signals the Bus component to return whatever default value
         * it prefers (normally 0xff).
         */
        if (card.fActive) b = card.regCRTIndx;
        this.printIO(port, undefined, addrFrom, "CRTC.INDX", b);
        return b;
    }

    /**
     * outCRTCIndx(card, port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {Object} card
     * @param {number} port
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outCRTCIndx(card, port, bOut, addrFrom)
    {
        card.regCRTPrev = card.regCRTIndx;
        card.regCRTIndx = bOut & Card.CGA.CRTC.INDX.MASK;
        this.printIO(port /* card.port */, bOut, addrFrom, "CRTC.INDX");
    }

    /**
     * inCRTCData(card, port, addrFrom)
     *
     * @this {Videox86}
     * @param {Object} card
     * @param {number} port
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number|undefined}
     */
    inCRTCData(card, port, addrFrom)
    {
        let b;
        /**
         * The IBM VGA ROM makes some hardware determinations based on how the CRTC controller responds when
         * the IO_SELECT bit in the Miscellaneous Output Register is cleared; normally, that would mean ports
         * 0x3B? are decoded and ports 0x3D? are ignored.  We didn't used to bother ignoring them, but the
         * VGA ROM's logic requires it, so now we also check fActive.  However, we ignore only CTRC reads;
         * we retain any writes in case that information proves useful later.
         *
         * For the COMPAQ VDU, we must make an exception, because regardless which "half" of the VDU is currently
         * active (the text side or the graphics side), the COMPAQ Portable ROM expects both halves to always respond;
         * set a breakpoint at F000:E48D to see their code in action.
         *
         * Note that returning an undefined value now signals the Bus component to return whatever default value
         * it prefers (normally 0xff).
         */
        if ((card.fActive || card.video.model == "vdu") && card.regCRTIndx < card.nCRTCRegs) {
            b = card.regCRTData[card.regCRTIndx];
        }
        if (!addrFrom || this.messageEnabled()) {
            this.printIO(port /* card.port + 1 */, undefined, addrFrom, "CRTC." + card.asCRTCRegs[card.regCRTIndx], b, true);
        }
        return b;
    }

    /**
     * outCRTCData(card, port, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {Object} card
     * @param {number} port
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outCRTCData(card, port, bOut, addrFrom)
    {
        if (card.regCRTIndx < card.nCRTCRegs) {

            /**
             * To simulate how the 6845 effectively ignores changes to CURSCAN or CURSCANB whenever one is written
             * while the other is currently > MAXSCAN, we check for those writes now, and ignore the write as appropriate.
             *
             * Since CURSCAN == 0xA and CURSCANB == 0xB, we can get the complementary register by XOR'ing the index with 0x1.
             */
            if (card.regCRTIndx == Card.CRTC.CURSCAN || card.regCRTIndx == Card.CRTC.CURSCANB) {
                let bCur = bOut & Card.CRTCMASKS[Card.CRTC.MAXSCAN];
                let bMax = card.regCRTData[Card.CRTC.MAXSCAN] & Card.CRTCMASKS[Card.CRTC.MAXSCAN];
                if (bCur > bMax) {
                    bCur = card.regCRTData[card.regCRTIndx ^ 0x1] & Card.CRTCMASKS[Card.CRTC.MAXSCAN];
                    if (bCur > bMax) {
                        if (DEBUG) this.printf("outCRTCData(%#04X): ignoring write to CRTC[%#04X] since %#04X > %#04X\n", bOut, card.regCRTIndx, bCur, bMax);
                        return;
                    }
                }
            }

            let fModified = (card.regCRTData[card.regCRTIndx] !== bOut);
            if (fModified || Videox86.TRAPALL) {
                if (!addrFrom || this.messageEnabled()) {
                    this.printIO(port /* card.port + 1 */, bOut, addrFrom, "CRTC." + card.asCRTCRegs[card.regCRTIndx]);
                }
                card.regCRTData[card.regCRTIndx] = bOut;
            }

            if (card == this.cardEGA) {
                if (card.regCRTIndx == Card.CRTC.EGA.VREND.INDX) {
                    if (this.nIRQ) {
                        if (!(bOut & Card.CRTC.EGA.VREND.UNCLEAR_VRINT)) {
                            if (this.chipset) this.chipset.clearIRR(this.nIRQ);
                        }
                    }
                }
                else if (fModified) {
                    /**
                     * If the split-screen state has been modified, then partially invalidate the cell cache.
                     *
                     * TODO: This register is also used in conjunction with one overflow bit in the OVERFLOW register
                     * and another overflow bit in the MAXSCAN register (VGA only), so technically, if either of those
                     * bits change, then again, the cache should be invalidated.
                     */
                    if (card.regCRTIndx == Card.CRTC.EGA.LINECOMP) {
                        this.invalidateCellCache(false);
                    }
                }
            }

            /**
             * During mode changes on the EGA, all the CRTC regs are typically programmed in sequence,
             * and if that's all that's happening with Card.CRTC.MAXSCAN, then we don't want to treat
             * it special; let the mode change be detected normally (eg, when the GRC regs are written later).
             *
             * On the other hand, if this was an out-of-sequence write to Card.CRTC.MAXSCAN, then
             * yes, we want to force setMode() to call setDimensions(), which is key to setting the proper
             * number of screen rows.
             *
             * The second part of the check is required to promptly detect a switch to "Mode X"; if we assume
             * that anyone switching to "Mode X" will first switch to mode 0x13, then it's a given that they
             * must reprogram the VDEND register, and that they will probably change it from 0x8F to 0xDF.
             *
             * Originally, I wasn't going to check specifically for 0xDF, to help catch other "Mode X" variations,
             * but if I don't, then some spurious mode changes are triggered (eg, when Windows 1.0 switches from
             * CGA graphics mode 0x06 to an EGA graphics mode).
             */
            if (fModified) {
                if (card.regCRTIndx == Card.CRTC.MAXSCAN && card.regCRTPrev != Card.CRTC.MAXSCAN - 1 || card.regCRTIndx == Card.CRTC.EGA.VDEND && bOut == 0xDF) {
                    this.checkMode(true);
                }
                this.checkCursor();
            }
        }
        else if (DEBUG) {
            this.printf("outCRTCData(%#04X): ignoring unexpected write to CRTC[%#04X]\n", bOut, card.regCRTIndx);
        }
    }

    /**
     * inCardMode(card, addrFrom)
     *
     * @this {Videox86}
     * @param {Object} card
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inCardMode(card, addrFrom)
    {
        let b = card.regMode;
        this.printIO(card.port + 4, undefined, addrFrom, "MODE", b);
        return b;
    }

    /**
     * outCardMode(card, bOut, addrFrom)
     *
     * @this {Videox86}
     * @param {Object} card
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outCardMode(card, bOut, addrFrom)
    {
        this.printIO(card.port + 4, bOut, addrFrom, "MODE");
        if ((card.regMode ^ bOut) & Card.MDA.MODE.BLINK_ENABLE) {
            card.video.iCellCacheValid = 0;
        }
        card.regMode = bOut;
        this.checkMode();
    }

    /**
     * inCardStatus(card, addrFrom)
     *
     * On an EGA, this register is called "Status Register One" (0x3BA/0x3DA aka STATUS1), to distinguish it from
     * "Status Register Zero" (0x3C2 aka STATUS0).  One of the side-effects of reading STATUS1 is that it resets the
     * ATC address/data flip-flop to "address" mode, which we emulate by setting cardEGA.fATCData to false, indicating
     * that the ATC is not in "data" mode.
     *
     * @this {Videox86}
     * @param {Object} card
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number}
     */
    inCardStatus(card, addrFrom)
    {
        let b = this.getRetraceBits(card);

        if (card === this.cardEGA) {
            /**
             * STATUS1 diagnostic bits 5 and 4 are set according to the Card.ATC.PLANES.MUX bits:
             *
             *      MUX     Bit 5   Bit 4
             *      ---     ----    ----
             *      00:     Red     Blue
             *      01:     SecBlue Green
             *      10:     SecRed  SecGreen
             *      11:     unused  unused
             *
             * Depending on where we are in the horizontal and vertical periods (which can be inferred from the
             * same elapsed cycle count that we used to simulate the retrace bits above), we could extract 4 bits
             * from a corresponding region of the video buffer, "and" them with Card.ATC.PLANES.MASK, use
             * that to index into the palette registers (cardEGA.regATCData), and use the resulting palette register
             * bits to set these diagnostics bits.  However, that's all rather tedious, and the process of extracting
             * 4 appropriate bits from the video buffer varies depending on the video mode.
             *
             * Why are we even considering this?  Because the EGA BIOS diagnostic code draws a bright reverse-video
             * line of text blocks across the top of the screen, writes 0x3F to palette register 0x0f, and then
             * monitors the STATUS1 diagnostic bits, waiting for those palette bits to show up.  It turns out, however,
             * that we can easily fool the EGA BIOS by simply toggling the diagnostic bits.  So we take the easy way out.
             *
             * TODO: Faithful emulation of these bits is certainly doable, so consider doing that at some point.
             */
            b |= ((card.regStatus & Card.STATUS1.DIAGNOSTIC) ^ Card.STATUS1.DIAGNOSTIC);

            /**
             * Last but not least, we must reset the EGA's ATC flip-flop whenever this register is read.
             */
            card.fATCData = false;
        }
        else {
            /**
             * On the MDA/CGA, to satisfy ROM BIOS testing ("TEST.10"), it's sufficient to do a simple toggle of
             * bits 0 and 3 on every read.
             *
             * Also, according to http://www.seasip.info/VintagePC/mda.html, on an MDA, bits 7-4 are always ON and
             * bits 2-1 are always OFF, hence the "OR" of 0xF0.
             *
             * Currently, I use the retrace bits from getRetraceBits() as-is:
             *
             *      b |= 0xF0;
             *
             * but doing so hurts the performance of code like this in the "FlickerFree" utility:
             *
             *      &0600:079A EC              IN       AL,DX
             *      &0600:079B D0E8            SHR      AL,1
             *      &0600:079D 72FB            JC       079A
             *      &0600:079F FA              CLI
             *      &0600:07A0 EC              IN       AL,DX
             *      &0600:07A1 D0E8            SHR      AL,1
             *      &0600:07A3 73FB            JNC      07A0
             *      &0600:07A5 8BC3            MOV      AX,BX
             *      &0600:07A7 AB              STOSW
             *      &0600:07A8 FB              STI
             *      &0600:07A9 E2EF            LOOP     079A
             *
             * which, oddly, appears to want to write only ONE word to video memory per retrace interval.  Sticking
             * with our older, cruder, toggling code, makes that code run faster and reduce the odds that you'll see
             * old data on appear on the screen before the above code has the chance to store new data over it.
             *
             *      b = (card.regStatus ^= (Card.CGA.STATUS.RETRACE | Card.CGA.STATUS.VRETRACE)) | 0xF0;
             */
            b |= 0xF0;
        }

        card.regStatus = b;
        if (MAXDEBUG) this.printIO(card.port + 6, undefined, addrFrom, (card === this.cardEGA? "STATUS1" : "STATUS"), b);
        return b;
    }

    /**
     * dumpVideo(asArgs)
     *
     * @this {Videox86}
     * @param {Array.<string>} asArgs
     */
    dumpVideo(asArgs)
    {
        if (DEBUGGER) {
            let component = /** @type {Component} */ (this.dbg);
            if (!this.cardActive) {
                component.printf("no active video card\n");
                return;
            }
            if (asArgs[0]) {
                this.cardActive.dumpVideoBuffer(asArgs);
                return;
            }
            component.printf("    MODE: %#04X\n", this.nMode);
            component.printf("  BUFFER: %#010X\n", this.cardActive.addrBuffer);
            this.cardActive.dumpVideoCard();
        }
    }

    /**
     * doBlink()
     *
     * This function is obsolete, now that the checkBlink() function is called on every updateScreen()
     * and checkCursor() call.  updateScreen() is driven by CPU bursts, so piggy-backing on that to drive
     * blink updates seems preferable to having another active timer in the system.
     *
     * @this {Videox86}
     * @param {boolean} [fStart]
     *
     doBlink(fStart)
     {
        if (this.cBlinks >= 0) {
            this.cBlinks++;
            if (this.cBlinkVisible || this.iCellCursor >= 0) {
                if (!fStart && !this.cpu.isRunning()) {
                    this.updateScreen();
                }
                setTimeout(function(video) { return function onBlinkTimeout() {video.doBlink();}; }(this), 266);
                return;
            }
            this.cBlinks = -1;
        }
    },
     */

    /**
     * Videox86.init()
     *
     * This function operates on every HTML element of class "video", extracting the
     * JSON-encoded parameters for the Video constructor from the element's "data-value"
     * attribute, invoking the constructor to create a Video component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aElement = Component.getElementsByClass(APPCLASS, "video");
        for (let iVideo = 0; iVideo < aElement.length; iVideo++) {

            let element = aElement[iVideo];
            let parmsVideo = Component.getComponentParms(element);

            /**
             * We prefer to let the XSL (or HTML) template create the canvas element for us, so that
             * the page is as fully-formed as possible, keeping disruption of page layout to a minimum.
             */
            let canvas;
            let aCanvas = Component.getElementsByClass("pcjs-canvas", "", element);
            if (aCanvas && aCanvas.length) {
                canvas = /** @type {HTMLCanvasElement} */ (aCanvas[0]);
            } else if (globals.browser) {
                canvas = /** @type {HTMLCanvasElement} */ (document.createElement("canvas"));
                if (canvas) {
                    canvas.setAttribute("class", "pcjs-canvas");
                    canvas.setAttribute("width", parmsVideo['screenWidth']);
                    canvas.setAttribute("height", parmsVideo['screenHeight']);
                    element.appendChild(canvas);
                }
            }

            let context;
            if (canvas && canvas.getContext) {
                context = /** @type {CanvasRenderingContext2D} */ (canvas.getContext("2d"));
            } else {
                element.innerHTML = "<br>Missing &lt;canvas&gt; support. Please try a newer web browser.";
            }

            /**
             * The "contenteditable" attribute on a canvas element NOTICEABLY slows down canvas drawing on
             * Safari as soon as you give the canvas focus (ie, click away from the canvas, and drawing speeds
             * up; click on the canvas, and drawing slows down).  So the "transparent textarea hack" that we
             * once employed as only a work-around for Android devices is now our default.
             *
             *      canvas.setAttribute("contenteditable", "true");
             *
             * HACK: A canvas style of "auto" provides for excellent responsive canvas scaling in EVERY browser
             * except IE9/IE10, so I recalculate the appropriate CSS height every time the parent DIV is resized;
             * IE11 works without this hack, so we take advantage of the fact that IE11 doesn't identify as "MSIE".
             *
             * The other reason it's good to keep this particular hack limited to IE9/IE10 is that most other
             * browsers don't actually support an 'onresize' handler on anything but the window object.
             */
            if (WebLib.getUserAgent().indexOf("MSIE") >= 0) {
                element['onresize'] = function(eParent, eChild, cx, cy) {
                    return function onResizeVideo() {
                        eChild.style.height = (((eParent.clientWidth * cy) / cx) | 0) + "px";
                    };
                }(element, canvas, parmsVideo['screenWidth'], parmsVideo['screenHeight']);
                element['onresize'](null);
            }

            /**
             * The following is a related hack that allows the user to force the screen to use a particular aspect
             * ratio if an 'aspect' attribute or URL parameter is set.  Initially, it's just for testing purposes
             * until we figure out a better UI.  And note that we use our WebLib.addPageEvent() helper function to make
             * sure we don't trample any other 'onresize' handler(s) attached to the window object.
             */
            let aspect = +(WebLib.getURLParm('aspect') || parmsVideo['aspect']);

            /**
             * No 'aspect' parameter yields NaN, which is falsey, and anything else must satisfy my arbitrary
             * constraints of 0.3 <= aspect <= 3.33, to prevent any useless (or worse, browser-blowing) results.
             */
            if (aspect && aspect >= 0.3 && aspect <= 3.33) {
                WebLib.addPageEvent('resize', function(eParent, eChild, aspectRatio) {
                    return function onResizeWindow() {
                        /**
                         * Since aspectRatio is the target width/height, we have:
                         *
                         *      eParent.clientWidth / eChild.style.height = aspectRatio
                         *
                         * which means that:
                         *
                         *      eChild.style.height = eParent.clientWidth / aspectRatio
                         *
                         * so for example, if aspectRatio is 16:9, or 1.78, and clientWidth = 640,
                         * then the calculated height should approximately 360.
                         */
                        eChild.style.height = ((eParent.clientWidth / aspectRatio)|0) + "px";
                    };
                }(element, canvas, aspect));
                globals.window['onresize']();
            }

            /**
             * HACK: Android-based browsers, like the Silk (Amazon) browser and Chrome for Android, don't honor the
             * "contenteditable" attribute; that is, when the canvas receives focus, they don't activate the on-screen
             * keyboard.  So my fallback is to create a transparent textarea on top of the canvas.
             *
             * The parent DIV must have a style of "position:relative" (alternatively, a class of "pcjs-container"),
             * so that we can position the textarea using absolute coordinates.  Also, we don't want the textarea to be
             * visible, but we must use "opacity:0" instead of "visibility:hidden", because the latter seems to prevent
             * the element from receiving events.  These styling requirements are taken care of in components.css
             * (see references to the "pcjs-video-object" class).
             *
             * UPDATE: Unfortunately, Android keyboards like to compose whole words before transmitting any of the
             * intervening characters; our textarea's keyDown/keyUp event handlers DO receive intervening key events,
             * but their keyCode property is ZERO.  Virtually the only usable key event we receive is the Enter key.
             * Android users will have to use machines that include their own on-screen "soft keyboard", or use an
             * external keyboard.
             *
             * The following attempt to use a password-enabled input field didn't work any better on Android.  You could
             * clearly see the overlaid semi-transparent input field, but none of the input characters were passed along,
             * with the exception of the "Go" (Enter) key.
             *
             *      let input = document.createElement("input");
             *      input.setAttribute("type", "password");
             *      input.setAttribute("style", "position:absolute; left:0; top:0; width:100%; height:100%; opacity:0.5");
             *      element.appendChild(input);
             *
             * See this Chromium issue for more information: https://code.google.com/p/chromium/issues/detail?id=118639
             */
            let textarea;
            let aTextArea = Component.getElementsByClass("pcjs-overlay", "", element);
            if (aTextArea && aTextArea.length) {
                textarea = /** @type {HTMLTextAreaElement} */ (aTextArea[0]);
            } else if (globals.browser) {
                textarea = /** @type {HTMLTextAreaElement} */ (document.createElement("textarea"));
                textarea.setAttribute("class", "pcjs-overlay");
                element.appendChild(textarea);
            }

            /**
             * As noted in keyboard.js, the keyboard on an iOS device tends to pop up with the SHIFT key depressed,
             * which is not the initial keyboard state that the Keyboard component expects, so hopefully turning off
             * these "auto" attributes will help.
             *
             * NOTE: We now set these attributes for ALL browsers, not just "iOS", in large part because the new
             * iPadOS agent string no longer contains any "iOS" identifiers (this degree of fakery is somewhat annoying).
             * Perhaps we should set other attributes as well, such as "autocomplete", but that remains to be seen.
             *
             * Unfortunately, in my limited testing, none of these seemed to have any effect on the way Chrome/webkit
             * converts "compose" key sequences (eg, "Alt-E") into dead keys (keyCode 229).
             */
            if (textarea) {
                textarea.setAttribute("autocapitalize", "off");
                textarea.setAttribute("autocorrect", "off");
                textarea.setAttribute("spellcheck", "false");
                /**
                * Another problem on iOS devices was that after a soft-key control was clicked, we needed to give
                * focus back to the above textarea, usually by calling cmp.updateFocus(), but in doing so, iOS could
                * also "zoom" the page rather jarringly.  While it was a simple matter to completely disable zooming,
                * by fiddling with the page's viewport, that prevented the user from intentionally zooming.  A bit of
                * Googling reveals that another way to prevent those jarring unintentional zooms was to simply set
                * the font-size of the text control to 16px.  So that's what we do.
                *
                * NOTE: Not sure if this is still necessary, but changing the code (and then doing a bunch of testing)
                * doesn't sound very appealing right now.
                *
                * UPDATE: Instead of hard-coding the textarea overlay font size to "16px", we now scale it dynamically,
                * so that when the overlay is visible (eg, for machine startup messages), the size of the text is
                * proportional to the overall size of the virtual display.
                */
                // textarea.style.fontSize = "16px";
                let onResizeTextArea = function() {
                    textarea.style.fontSize = ((textarea.clientWidth * 0.01875)|0) + "px";
                };
                onResizeTextArea();
                WebLib.addPageEvent('resize', onResizeTextArea);
            }

            /**
             * See if there are any "diagnostic" elements we should pass along, too.
             */
            let aDiagElements = /** @type {Array.<HTMLElement>} */ (Component.getElementsByClass(APPCLASS + "-video-diagnostic"));

            /**
             * Now we can create the Video object, record it, and wire it up to the associated document elements.
             */
            let container;
            if (element.style) container = element;
            let video = new Videox86(parmsVideo, canvas, context, textarea /* || input */, container, aDiagElements);

            /**
             * Bind any video-specific controls (eg, the Refresh button). There are no essential controls, however;
             * even the "Refresh" button is just a diagnostic tool, to ensure that the screen contents are up-to-date.
             */
            Component.bindComponentControls(video, element, APPCLASS);
        }
    }

    /**
     * Port input/output notification tables
     */
    static aMDAPortInput = {
        0x3B0: Videox86.prototype.inMDAIndx,           // duplicate of 0x3B4
        0x3B1: Videox86.prototype.inMDAData,           // duplicate of 0x3B5
        0x3B2: Videox86.prototype.inMDAIndx,           // duplicate of 0x3B4
        0x3B3: Videox86.prototype.inMDAData,           // duplicate of 0x3B5
        0x3B4: Videox86.prototype.inMDAIndx,           // technically, not actually readable, but I want the Debugger to be able to read this
        0x3B5: Videox86.prototype.inMDAData,           // technically, the only CRTC Data registers that are readable are R14-R17
        0x3B6: Videox86.prototype.inMDAIndx,           // duplicate of 0x3B4
        0x3B7: Videox86.prototype.inMDAData,           // duplicate of 0x3B5
        0x3B8: Videox86.prototype.inMDAMode,           // technically, not actually readable, but I want the Debugger to be able to read this
        0x3BA: Videox86.prototype.inMDAStatus
    };

    static aMDAPortOutput = {
        0x3B0: Videox86.prototype.outMDAIndx,          // duplicate of 0x3B4
        0x3B1: Videox86.prototype.outMDAData,          // duplicate of 0x3B5
        0x3B2: Videox86.prototype.outMDAIndx,          // duplicate of 0x3B4
        0x3B3: Videox86.prototype.outMDAData,          // duplicate of 0x3B5
        0x3B4: Videox86.prototype.outMDAIndx,
        0x3B5: Videox86.prototype.outMDAData,
        0x3B6: Videox86.prototype.outMDAIndx,          // duplicate of 0x3B4
        0x3B7: Videox86.prototype.outMDAData,          // duplicate of 0x3B5
        0x3B8: Videox86.prototype.outMDAMode
    };

    static aCGAPortInput = {
        0x3D4: Videox86.prototype.inCGAIndx,           // technically, not actually readable, but I want the Debugger to be able to read this
        0x3D5: Videox86.prototype.inCGAData,           // technically, the only CRTC Data registers that are readable are R14-R17
        0x3D8: Videox86.prototype.inCGAMode,           // technically, not actually readable, but I want the Debugger to be able to read this
        0x3D9: Videox86.prototype.inCGAColor,          // technically, not actually readable, but I want the Debugger to be able to read this
        0x3DA: Videox86.prototype.inCGAStatus
    };

    static aCGAPortOutput = {
        0x3D4: Videox86.prototype.outCGAIndx,
        0x3D5: Videox86.prototype.outCGAData,
        0x3D8: Videox86.prototype.outCGAMode,
        0x3D9: Videox86.prototype.outCGAColor
    };

    static aEGAPortInput = {
        0x3C0: Videox86.prototype.inATCIndx,           // technically, only readable on a VGA, but I want the Debugger to be able to read this, too
        0x3C1: Videox86.prototype.inATCData,           // technically, only readable on a VGA, but I want the Debugger to be able to read this, too
        0x3C2: Videox86.prototype.inStatus0,
        0x3C4: Videox86.prototype.inSEQIndx,           // technically, only readable on a VGA, but I want the Debugger to be able to read this, too
        0x3C5: Videox86.prototype.inSEQData,           // technically, only readable on a VGA, but I want the Debugger to be able to read this, too
        0x3CE: Videox86.prototype.inGRCIndx,           // technically, only readable on a VGA, but I want the Debugger to be able to read this, too
        0x3CF: Videox86.prototype.inGRCData            // technically, only readable on a VGA, but I want the Debugger to be able to read this, too
    };

    /**
     * WARNING: Unlike the EGA, a standard VGA does not support writes to 0x3C1, but it's easier for me to leave that
     * ability in place, treating the VGA as a superset of the EGA as much as possible; will any code break because word
     * OUTs to port 0x3C0 (and/or byte OUTs to port 0x3C1) actually work?  Possibly, but highly unlikely.
     */
    static aEGAPortOutput = {
        0x3BA: Videox86.prototype.outFeat,
        0x3C0: Videox86.prototype.outATC,
        0x3C1: Videox86.prototype.outATC,              // the EGA BIOS writes to this port (see C000:0416), implying that 0x3C0 and 0x3C1 both decode the same register
        0x3C2: Videox86.prototype.outMisc,             // FYI, since this overlaps with STATUS0.PORT, there's currently no way for the Debugger to read the Misc register
        0x3C4: Videox86.prototype.outSEQIndx,
        0x3C5: Videox86.prototype.outSEQData,
        0x3CA: Videox86.prototype.outGRCPos2,
        0x3CC: Videox86.prototype.outGRCPos1,
        0x3CE: Videox86.prototype.outGRCIndx,
        0x3CF: Videox86.prototype.outGRCData,
        0x3DA: Videox86.prototype.outFeat
    };

    static aVGAPortInput = {
        0x3C3: Videox86.prototype.inVGAEnable,
        0x3C6: Videox86.prototype.inDACMask,
        0x3C7: Videox86.prototype.inDACState,
        0x3C9: Videox86.prototype.inDACData,
        0x3CA: Videox86.prototype.inVGAFeat,
        0x3CC: Videox86.prototype.inVGAMisc
    };

    static aVGAPortOutput = {
        0x3C3: Videox86.prototype.outVGAEnable,
        0x3C6: Videox86.prototype.outDACMask,
        0x3C7: Videox86.prototype.outDACRead,
        0x3C8: Videox86.prototype.outDACWrite,
        0x3C9: Videox86.prototype.outDACData
    };

}

/**
 * Initialize every Video module on the page.
 */
WebLib.onInit(Videox86.init);
