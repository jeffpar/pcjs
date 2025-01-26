/**
 * @fileoverview This file implements the C1Pjs DiskController component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Component from "../../../../modules/v2/component.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, DEBUGGER } from "./defines.js";

/**
 * @class Drive
 * @property {number} iType
 * @property {number} nTracks
 * @property {boolean} fProtected
 * @property {number} nIndexPulse
 * @property {number} iTrackSelect
 * @property {number} iTrackOffset
 * @property {Array} aTracks
 */

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class C1PDiskController
 * @unrestricted
 */
export default class C1PDiskController extends Component {
    /**
     * C1PDiskController(parmsDC)
     *
     * The C1PDiskController component has no component-specific parameters.
     *
     * This component is being built to supplement a C1P (aka SuperBoard II) Model 600
     * single-board computer with the addition of a 610 Accessory Board, which included:
     *
     *      MC6820 PIA (Peripheral Interface Adapter at $C000-$C003, decoded at $C000-$C00F)
     *      MC6850 ACIA (Asynchronous Communications Interface Adapter at $C010-$C011, decoded at $C010-$C01F)
     *
     * From "OSI C1P Technical Report" p.4 regarding the 610 Accessory Board:
     *
     *      "This board holds up to 24K of additional RAM memory, a dual mini-floppy disk controller,
     *      a BUS expansion facility to Model 620 BUS adapter, and switching circuitry to route the
     *      600 board's serial interface to both the modem and printer as well as an audio cassette.
     *      Thus, a fully expanded Challenger lP system can have BASIC-in-ROM, 32K of RAM memory,
     *      dual mini-floppies, cassette, printer, modem, and full BUS expansion capability to the OSI
     *      48 line BUS through which over 40 accessories can be added (A/D, D/A, voice, I/O, more memory,
     *      etc.)."
     *
     * On p.20, the Report says that the 610 Accessory Board contains:
     *
     *      - Up to 24K of RAM
     *      - Dual mini-floppy controller
     *      - Real Time Clock (although elsewhere the Report says this is disabled by default)
     *      - Expansion interface to a model 620 BUS adapter
     *
     * On p.21, the Report also says:
     *
     *      "The dual mini-floppy interface is designed after Ohio Scientific's extremely popular
     *      and successful 470 floppy disk controller. This floppy disk controller and encoding
     *      technique has been field proven for several years in thousands of floppy disks and is
     *      believed to be one of the most reliable floppy disk configurations in existence. Although
     *      the Challenger lP product line is new, it has the advantage of the experience of a company
     *      which has been building high performance microcomputers for several years."
     *
     * From "PEEK 65" Vol.2 No.3 March 1981, p.9:
     *
     *      "The 470 board wired as a floppy disk controller contains two different interfaces:
     *      a PIA and an ACIA. The PIA A and B ports are used in control circuits: raise and lower
     *      the head, detect drive ready, detect sector hole, clear error faults, etc. The ACIA is
     *      the interface over which the data actually travels. Typical operation is to drop the head,
     *      reset the ACIA, wait for the index hole to come around, activate the read or write circuit,
     *      then read or write characters through the ACIA."
     *
     *      470 Board Addressing
     *      --------------------
     *
     *      Address     Read                    Write
     *      -------     ----                    -----
     *      C000        PIA: PA0 thru PA7       PIA: PA0 thru PA7 or DDA0 thru DDA7
     *      C001        PIA: Port A Ctrl        PIA: Port A Control
     *      C002        PIA: PB0 thru PB7       PIA: PB0 thru PB7 or DDB0 thru DDB7
     *      C003        PIA: Port B Ctrl        PIA: Port B Control
     *      C010        ACIA: Status Reg.       ACIA: Control Register
     *      C011        ACIA: Data Path         ACIA: Data Path
     *      C020        Clear Real Time Clock   Clear Real Time Clock
     *                  (Reset) ($FF returned)  (Reset) (Data Ignored)
     *
     *      PIA Data Register A Layout:
     *
     *      PA7     PA6     PA5     PA4     PA3     PA2     PA1     PA0
     *      ---     ---     ---     ----    ---     ---     ---     ----
     *      IHD  |  SD2  |  WP   |  RDY2 |  SHD  |  FD   |  TZD  |  RDY1
     *      (In)    (Out)   (In)    (In)    (In)    (In)    (In)    (In)
     *
     *      PIA Data Register B Layout:
     *
     *      PB7     PB6     PB5     PB4     PB3     PB2     PB1     PB0
     *      ---     ---     ---     ---     ---     ---     ---     ---
     *      HLD  |  LCS  |  SD1  |  FR   |  ST   |  STI  |  EE   |  WE
     *      (Out)   (Out)   (Out)   (Out)   (Out)   (Out)   (Out)   (Out)
     *
     *      PIA Data Register A Lines       PIA Data Register B Lines
     *      -------------------------       -------------------------
     *      IHD - Index Hole Detect         HLD - Head Load
     *      SD2 - Select Drive 2 (Drive B)  LCS - Low Current Select
     *      WP  - Write Protected           SD1 - Select Drive 1
     *      RDY2- Drive 2 Ready             FR  - Fault Reset
     *      SHD - Sector Hole Detect        ST  - Step
     *      FD  - Fault Detected            STI - Step In
     *      TZD - Track Zero Detected       EE  - Enable Erase
     *      RDY1- Drive 1 Ready             WE  - Write Enable
     *
     * NOTE: The PIA bit assignments above agree with those described, albeit somewhat less clearly,
     * in https://osiweb.org/misc/osi-hardware.txt, under "Model 475 Floppy disk system with
     * 470 Controller board".
     *
     * There is apparently significant overlap with another OSI board: the Model 505 CPU Board
     * used in C4P/MF systems.  According to https://osiweb.org/misc/osi-hardware.txt, it
     * contained:
     *
     *      CPU board w/ ROM, ACIA, Floppy Disk I/O, Real Time Clock
     *      ROM $FDxx, $FExx, $FFxx
     *      Floppy disk interface: 6820 PIA at $C000, 6850 ACIA at $C010 [Original says "6850 PIA"]
     *      ACIA 6850 at $FC00 for RS-232 serial I/O. Baud jumpers for 75,150,300,600,1200,2400,4800,9600
     *      Disk PIA $C0xx CB1 connected to 400mSEC (2.5/sec) clock divided from system clock (RTC)
     *      Home security - PIA $F700-F703
     *
     * Disk Formats (from http://osi.marks-lab.com/files/winOSI/old-source-V1.2/Disk_io.cpp):
     *
     *      5.25" disk, 40 tracks, 8 sectors/track, 256 bytes/sector, 11 bits/byte (8E1) = 80K/disk.
     *
     *      NOTE: 8E1 refers to "8 data bits, even parity, 1 stop bit," plus an implied start bit.
     *
     *      OSI uses 8E1 to give a max unformatted capacity of 2272 bytes per track (see below).
     *      However other bit encodings (8N1) could give up to 2500 bytes/track.
     *
     *      NOTE: 8N1 refers to "8 data bits, no parity, 1 stop bit," plus an implied start bit.
     *
     *      The standard speed for 5.25" drives is 300rpm. Thus one rotation of the disk is 200ms.
     *      Stated baud-rate is 125k or 125000 bits/sec and one serial byte is 11 bits (1 start,
     *      8 data, 1 parity, 1 stop). So the theoretical absolute maximum storage per track is
     *      (125000 x 0.2) / 11 = 2272 bytes or 8.8 pages.
     *
     *      OS-65D loses a bit more because it doesn't write until 10ms after the index pulse, so
     *      (125000 x 0.19) / 11 = 2159 bytes or 8.4 pages and this doesn't even allow for the length
     *      of the index pulse (a few milliseconds?) and the speed variation between drives.
     *
     *      8" disk, 77 tracks, 12 sectors/track, 256 bytes/sector, 11 bits/byte (8E1) = 231K/disk.
     *      OSI uses 8E1 to give a max unformatted capacity of 3772 bytes/track (see below).
     *      However other bit encodings (8N1) could give up to 3900 bytes/track.
     *
     *      The standard speed for 8" drives is 360rpm. Thus one rotation of the disk is 166.6ms.
     *      Stated baud rate is 250K or 250000 bits/sec and one serial byte is 11 bits (1 start,
     *      8 data, 1 parity, 1 stop). So the theoretical absolute maximum storage per track is
     *      (250000 x 0.166 ) / 11 = 3772 or 14.7 pages.
     *
     *      OS-65D loses a bit more because it doesn't write until 10 mS after the index pulse, so
     *      (250000 x 0.156) / 11 = 3545 bytes  or 13.8 pages and this doesn't even allow for the length
     *      of the index pulse (a few milliseconds?) and the speed variation between drives.
     *
     *      Track 0 Format
     *      --------------
     *              (10ms delay after index hole)
     *      0,1     load address of the track in hi,lo form
     *      2       page count of how much data is written on track 0.
     *      3+      sector data
     *
     *      Track N Format (N > 0)
     *      ----------------------
     *              (10ms delay after index hole)
     *      0,1     2-byte start code $43, $57
     *      2       BCD track number
     *      3       track type code (always $58)
     *      4+      sector data
     *
     *      Sector Format (5.25" disks)
     *      ---------------------------
     *      There can be any mixture of various length sectors. The total page count can not
     *      exceed 8 pages (8*256) if more than one sector is on a track. Each sector is written
     *      in the following format:
     *
     *          previous sector length (4 if none before) times 800 microseconds of delay
     *          sector start code $76
     *          sector number in binary
     *          sector length (#pages) in binary
     *          sector data
     *          (end of sector mark? $47, $53? MDS)
     *
     *      Directory Format
     *      ----------------
     *      2 sectors (1 & 2) on track 12 hold the directory information.
     *      Each entry requires 8 bytes. There are a total of 64 entries. The entries are
     *      formatted as follows:
     *
     *          0-5 ASCII 6 character filename
     *          6 BCD first track of file
     *          7 BCD Last track of file
     *
     * So far, all the 5.25" disk images I've seen are 92160 bytes, regardless whether they have an
     * .IMG or .65D extension.  If we divide that total by 40 (tracks/disk), we get 2304 (bytes/track).
     * Divide 2304 by 256 (bytes/page) and we get 9 pages/track.  Presumably a fixed 9 pages was chosen
     * to yield a consistent track size across the entire image, while also allowing room for all the
     * metadata that's typically present on a track as well.  As explained above, the upper limit
     * on data per track (both sector data and metadata) is 8.8 pages in theory, or 8.4 pages in practice.
     *
     * @this {C1PDiskController}
     * @param {Object} parmsDC
     */
    constructor(parmsDC)
    {
        super("C1PDiskController", parmsDC);

        this.flags.powered = false;

        /*
         * Our DiskController simulates the combination of an MC6820 PIA and an MC6850 ACIA.
         * This image of an OSI 470 Controller Board (http://osi.marks-lab.com/boards/images/OSI470.jpg)
         * shows that the chips actually used were MC68B21P and MC68B50P.
         *
         * We start with definitions for the MC6820 PIA.
         */
        this.PORT_PDA   = 0;        // PIA Peripheral Data Register A
        this.PORT_DDA   = 0;        // PIA Data Direction Register A (DDA shares the same register offset as PDA)
        this.PORT_CRA   = 1;        // PIA Control Register A

        this.PORT_PDB   = 2;        // PIA Peripheral Data Register B
        this.PORT_DDB   = 2;        // PIA Data Direction Register B (DDB shares the same register offset as PDB)
        this.PORT_CRB   = 3;        // PIA Control Register B

        this.CR_IRQ1    = 0x80;     // IRQ1
        this.CR_IRQ2    = 0x40;     // IRQ2
     // this.CR_C2_OUT  = 0x20;     // C2 is designated an output
     // this.CR_C2_CTRL = 0x18;     // C2 Control (00 and 10 mask IRQ2, 01 and 11 pass IRQ2 through to the CPU)
        this.CR_PD_SEL  = 0x04;     // set to select PD (PDA or PDB), clear to select DD (DDA or DDB)
     // this.CR_C1_CTRL = 0x03;     // C1 Control (00 and 10 mask IRQ1, 01 and 11 pass IRQ1 through to the CPU)

        /*
         * The PDA bits have the following hard-wired connections in the OSI Floppy Disk Controller.
         * Each line marked INPUT should have its corresponding Data Direction bit clear (0), and each line
         * marked OUTPUT should have its Data Direction bit set (1); however, we do not currently verify that
         * the Data Direction bits are actually initialized to match these specs (and in fact, in the case
         * of PDA_SD2, they may not be).
         */
        this.PDA_RDY1   = 0x01;     // INPUT:   0 = Drive 1 Ready
        this.PDA_TZD    = 0x02;     // INPUT:   0 = Track Zero Detected
        this.PDA_FD     = 0x04;     // INPUT:   0 = Fault Detected
        this.PDA_SHD    = 0x08;     // INPUT:   0 = Sector Hole Detect
        this.PDA_RDY2   = 0x10;     // INPUT:   0 = Drive 2 Ready
        this.PDA_WP     = 0x20;     // INPUT:   0 = Write Protected
        this.PDA_SD2    = 0x40;     // OUTPUT:  0 = Select Drive 2 (Drive B)
        this.PDA_IHD    = 0x80;     // INPUT:   0 = Index Hole Detect

     // this.PDB_WE     = 0x01;     // OUTPUT:  0 = Write Enable
     // this.PDB_EE     = 0x02;     // OUTPUT:  0 = Erase Enable (set to 1)
        this.PDB_STI    = 0x04;     // OUTPUT:  0 = Step In (away from track 0)
        this.PDB_ST     = 0x08;     // OUTPUT:  0 = Step (on 1-to-0 transition)
     // this.PDB_FR     = 0x10;     // OUTPUT:  0 = Fault Reset (set to 1)
        this.PDB_SD1    = 0x20;     // OUTPUT:  0 = Select Drive 1
     // this.PDB_LCS    = 0x40;     // OUTPUT:  0 = Low Current Select (set to 1)
     // this.PDB_HLD    = 0x80;     // OUTPUT:  0 = Head Load (head on disk)

        /*
         * Next, definitions for the MC6850 ACIA.
         *
         * For reference, here are all the possible CTRL_WSEL (Word Select) values:
         *
         *      000     0x00        7 bits, even parity, 2 stop bits
         *      001     0x04        7 bits, odd parity, 2 stop bits
         *      010     0x08        7 bits, even parity, 1 stop bit
         *      011     0x0C        7 bits, odd parity, 1 stop bit
         *      100     0x10        8 bits, 2 stop bits
         *      101     0x14        8 bits, 1 stop bit
         *      110     0x18        8 bits, even parity, 1 stop bit
         *      111     0x1C        8 bits, odd parity, 1 stop bit
         *
         * And here are all the possible CTRL_TCTL (Transmit Control) values:
         *
         *      00      0x00        RTS=Low, Transmitting Interrupt Disabled
         *      01      0x20        RTS=Low, Transmitting Interrupt Enabled
         *      10      0x40        RTS=High, Transmitting Interrupt Disabled
         *      11      0x60        RTS=Low, Transmits a Break level on the Transmit Data Output; Transmitting Interrupt Disabled
         */
        this.PORT_CTRL = 0x10;  // ACIA Control Register (WRITE-only)
        this.PORT_STAT = 0x10;  // ACIA Status Register (READ-only)
        this.PORT_DATA = 0x11;  // ACIA Data Register (Transmit Data Register on WRITE, Receive Data Register on READ)

        this.CTRL_CDIV  = 0x03; // Counter Divide (CR1,CR0) [OSI sets both, performing a "Master Reset", then immediately clears both, for a divide ratio of 1]
     // this.CTRL_WSEL  = 0x1C; // Word Select (CR4,CR3,CR2), determining word length, parity and stop bits [OSI selects 0x18 for "8 bits, even parity, 1 stop bit"]
     // this.CTRL_TCTL  = 0x60; // Transmit Control (CR6,CR5) [OSI selects 0x40 for "RTS=High, Transmitting Interrupt Disabled"]
     // this.CTRL_RINT  = 0x80; // Receive Interrupt Enable (CR7) [OSI selects 0x00 for interrupts disabled]

        this.STAT_RDRF  = 0x01; // Receive Data Register Full
        this.STAT_TDRE  = 0x02; // Transmit Data Register Empty
        this.STAT_DCD   = 0x04; // Data Carrier Detect
        this.STAT_CTS   = 0x08; // Clear To Send
     // this.STAT_FE    = 0x10; // Framing Error (ie, the received character is improperly framed by a start and a stop bit and is detected by the absence of the first stop bit)
     // this.STAT_OVRN  = 0x20; // Receiver Overrun (ie, one or more characters in the data stream were lost due to not being read from the Receive Data Register in time)
     // this.STAT_PE    = 0x40; // Parity Error (ie, the number of highs (ones) in the character does not agree with the preselected odd or even parity)
     // this.STAT_IRQ   = 0x80; // Interrupt Request (ie, state of the IRQ output; cleared by a read operation to the Receive Data Register or a write operation to the Transmit Data Register)

        /*
         * Last but not least, some internal state definitions and hard-coded assumptions
         */
        this.DRIVETYPE_5INCH = 0;
     // this.DRIVETYPE_8INCH = 1;

        this.MAXTRACKS_5INCH = 40;
     // this.MAXTRACKS_8INCH = 77;

        /*
         * Some random OS-65D notes
         *
         * Version 3.3 Initialization Code
         * -------------------------------
         *
         * The following code (where X is 0x00):
         *
         *      2217 8E 01 F4  STX $F401
         *      221A 8E 00 F4  STX $F400
         *      221D 8E 03 F4  STX $F403
         *
         * is intended to reset a Printer PIA located at 0xF400.
         *
         * It then takes a detour to "SET KEYBOARD SOUND GENERATOR TO LOWEST FREQUENCY (192.753 HZ)"
         * with X set to 0xFF; the sound generator is supposed to be turned off a bit later, presumably
         * at the same time it sets "64 char/line" mode -- well, that's what v3.2 did anyway.
         *
         *      2220 CA        DEX
         *      2221 8E 01 DF  STX $DF01
         *
         * While X is still 0xFF, it continues initializing the Printer PIA:
         *
         *      2224 8E 02 F4  STX $F402
         *
         * Then the code fiddles a bit with a mystery serial port (perhaps the "Model 430B Cassette & Analog I/O"
         * interface?)
         *
         *      2227 AD 06 FB  LDA $FB06
         *      222A 8E 05 FB  STX $FB05
         *
         * And then it's back to more Printer PIA initialization:
         *
         *      222D A9 04     LDA #$04
         *      222F 8D 01 F4  STA $F401
         *      2232 8D 03 F4  STA $F403
         *
         * Then it does some disk resetting (with A still 0x04 and Y set to 0x00):
         *
         *      2235 8C 01 C0  STY $C001
         *      2238 A0 40     LDY #$40 ;'@'
         *      223A 8C 00 C0  STY $C000
         *      223D 8D 01 C0  STA $C001
         *
         * This code supposedly selects DRIVE 1:
         *
         *      2240 A9 01     LDA #$01
         *      2242 20 C6 29  JSR $29C6
         *
         * Then it "resets" and "sets" the TERMINAL ACIA.  Note that the C1P serial port is addressed
         * at 0xF000-0xF0FF, and the C1P has ROM mapped to 0xF800-0xFFFF, so we know nothing of the serial
         * port mentioned above at 0xFBxx, nor this terminal ACIA port at 0xFCxx.
         *
         *      2245 A9 03     LDA #$03
         *      2247 8D 00 FC  STA $FC00
         *      224A A0 11     LDY #$11
         *      224C 8C 00 FC  STY $FC00
         *
         * Next, there's some code to "SET CA-10X 16 WAY SERIAL BOARD" at 0xCF00-0xCF1F; again, something
         * we know nothing about:
         *
         *      224F A2 1E     LDX #$1E
         *      2251 9D 00 CF  STA $CF00,X
         *      2254 98        TYA
         *      2255 9D 00 CF  STA $CF00,X
         *      2258 A9 03     LDA #$03
         *      225A CA        DEX
         *      225B CA        DEX
         *      225C 10 F3     BPL $2251
         *
         * Then it clears 8 pages of video memory (ie, it simply ASSUMES that this is a Model 540 video board
         * with 2K of video memory):
         *
         *      225E A2 08     LDX #$08
         *      2260 A9 D0     LDA #$D0
         *      2262 85 FF     STA $FF
         *      2264 A0 00     LDY #$00
         *      2266 84 FE     STY $FE
         *      2268 A9 20     LDA #$20 ;' '
         *      226A 91 FE     STA ($FE),Y
         *      226C C8        INY
         *      226D D0 FB     BNE $226A
         *      226F E6 FF     INC $FF
         *      2271 CA        DEX
         *      2272 D0 F6     BNE $226A
         *
         * Then it performs a memory test, starting with a high page of 0xBF, and stores the highest page of
         * available RAM at 0x2300:
         *
         *      2276 A0 BF     LDY #$BF
         *      2278 20 EC 22  JSR $22EC
         *      227B F0 03     BEQ $2280
         *      227D 88        DEY
         *      227E D0 F8     BNE $2278
         *      2280 8C 00 23  STY $2300
         *
         * Now it checks for "SERIAL OR VIDEO (EITHER 65-A OR 65-V PROM)" (the byte at 0xFE01 on a C1P is 0x28,
         * so X will be 2, implying "VIDEO"):
         *
         *      2283 A2 01     LDX #$01
         *      2285 AD 01 FE  LDA $FE01
         *      2288 F0 01     BEQ $228B
         *      228A E8        INX
         *      228B 8E C6 2A  STX $2AC6
         *
         * Finally, there's some code that's a little different from v3.2; in 3.2, it would set X to 0x01
         * and then store X at 0xDE00, effectively forcing the video board into "64 char/line" mode -- which was
         * originally EXACTLY what I was looking for in the video emulation component.  But v3.3 doesn't do that.
         * Here's what it does instead:
         *
         *      228F A2 00     LDX #$00
         *      2291 8E 80 DC  STX $DC80
         *
         * So, what's supposed to be at 0xDC80?
         */

        this.reset(true);
    }

    /**
     * @this {C1PDiskController}
     * @param {boolean|undefined} [fPowerOn] is true for the initial reset only
     */
    reset(fPowerOn)
    {
        this.resetRegs();
        this.iDriveSelect = -1;
        if (fPowerOn) {
            this.aDrives = [];
            this.resetDrive(0, this.DRIVETYPE_5INCH, this.MAXTRACKS_5INCH);
        }
    }

    /**
     * @this {C1PDiskController}
     */
    resetRegs()
    {
        this.regDDA = {
            bits: this.PDA_SD2, // clear all DDA bits, indicating that all PDA bits represent INPUT lines (well, except for PDA_SD2)
            read: function() {},
            update: function(controller) {
                return function(b) {
                    if (b !== undefined) this.bits = b;
                    if (!(controller.regCRA.bits & controller.CR_PD_SEL)) {
                        controller.writePort(controller.PORT_DDA, this);
                    }
                };
            }(this)
        };
        this.regPDA = {
            bits: 0xff,
            read: function() {
                this.update();
            },
            update: function(controller) {
                return function(b) {
                    this.bits = controller.updatePDA(b);
                    if (controller.regCRA.bits & controller.CR_PD_SEL) {
                        controller.writePort(controller.PORT_PDA, this);
                    }
                };
            }(this)
        };
        this.regCRA = {
            bits: 0,
            read: function() {},
            update: function(controller) {
                return function(b) {
                    /*
                     * Most bits written to CRA should be left as-is (the CPU should read back what it wrote);
                     * bits 7 and 6 (IRQ1 and IRQ2) are exceptions, since those are tied to peripheral "Control Lines"
                     * C1 and C2, which can in theory generate an interrupt depending on how the C1_CTRL and C2_CTRL bits
                     * in CRA are set.  However, assuming there's no need to simulate interrupts for this particular
                     * controller hardware, all we'll do is simply insure those two bits are always off.
                     */
                    if (b !== undefined) this.bits = (b & ~(controller.CR_IRQ1 | controller.CR_IRQ2));
                    controller.writePort(controller.PORT_CRA, this);
                    /*
                     * Since a CRA write may have also changed which register (PDA or DDA) is enabled via the corresponding
                     * PDA port, we simply ask ask both to update (only the one that's enabled will write itself to memory).
                     */
                    controller.regPDA.update();
                    controller.regDDA.update();
                };
            }(this)
        };
        this.regDDB = {
            bits: 0xff,         // set all DDB bits, indicating that all PDB bits represent OUTPUT lines
            read: function() {},
            update: function(controller) {
                return function(b) {
                    if (b !== undefined) this.bits = b;
                    if (!(controller.regCRB.bits & controller.CR_PD_SEL)) {
                        controller.writePort(controller.PORT_DDB, this);
                    }
                };
            }(this)
        };
        this.regPDB = {
            bits: 0xff,
            read: function() {},
            update: function(controller) {
                return function(b) {
                    this.bits = controller.updatePDB(b);
                    if (controller.regCRB.bits & controller.CR_PD_SEL) {
                        controller.writePort(controller.PORT_PDB, this);
                    }
                };
            }(this)
        };
        this.regCRB = {
            bits: 0,
            read: function() {},
            update: function(controller) {
                return function(b) {
                    /*
                     * Most bits written to CRB should be left as-is (the CPU should read back what it wrote);
                     * bits 7 and 6 (IRQ1 and IRQ2) are exceptions, since those are tied to peripheral "Control Lines"
                     * C1 and C2, which can in theory generate an interrupt depending on how the C1_CTRL and C2_CTRL bits
                     * in CRB are set.  However, assuming there's no need to simulate interrupts for this particular
                     * controller hardware, all we'll do is simply insure those two bits are always off.
                     */
                    if (b !== undefined) this.bits = (b & ~(controller.CR_IRQ1 | controller.CR_IRQ2));
                    controller.writePort(controller.PORT_CRB, this);
                    /*
                     * Since a CRB write may have also changed which register (PDB or DDB) is enabled via the corresponding
                     * PDB port, we simply ask ask both to update (only the one that's enabled will write itself to memory).
                     */
                    controller.regPDB.update();
                    controller.regDDB.update();
                };
            }(this)
        };
        this.regCTRL = {
            bits: 0,
            read: function() {},
            update: function(controller) {
                return function(b) {
                    if (b !== undefined) {
                        if ((b & controller.CTRL_CDIV) == controller.CTRL_CDIV) {
                            /*
                             * Setting both CTRL_CDIV bits (CR0 and CR1) constitutes a "Master Reset" of the ACIA
                             */
                            controller.regSTAT.bits = (controller.STAT_TDRE | controller.STAT_DCD | controller.STAT_CTS);
                        }
                        this.bits = b;
                    }
                    // regCTRL isn't readable; instead, we ensure regSTAT is rewritten in its place
                    controller.regSTAT.update();
                };
            }(this)
        };
        this.regSTAT = {
            bits: (this.STAT_TDRE | this.STAT_DCD | this.STAT_CTS),
            read: function() {},
            update: function(controller) {
                return function(b) {
                    this.bits = controller.updateSTAT(b);
                    controller.writePort(controller.PORT_STAT, this);
                };
            }(this)
        };
        this.regDATA = {
            bits: 0,
            read: function(controller) {
                return function() {
                    controller.advanceDriveData();
                };
            }(this),
            update: function(controller) {
                return function(b) {
                    if (b !== undefined) this.bits = b;
                    controller.writePort(controller.PORT_DATA, this);
                };
            }(this)
        };
        this.regUnknown = {
            bits: 0,
            read: function() {},
            update: function(controller) {
                return function(b) {};
            }(this)
        };
        if (DEBUG) {
            this.regDDA.sName = "DDA",
            this.regDDA.aBitIDs = {0x80:"DD7",0x40:"DD6",0x20:"DD5",0x10:"DD4",0x08:"DD3",0x04:"DD2",0x02:"DD1",0x01:"DD0"};
            this.regPDA.sName = "PDA";
            this.regPDA.aBitIDs = {0x80:"IHD",0x40:"SD2",0x20:"WP",0x10:"RDY2",0x08:"SHD",0x04:"FD",0x02:"TZD",0x01:"RDY1"};
            this.regCRA.sName = "CRA";
            this.regCRA.aBitIDs = {0x80:"IRQ1",0x40:"IRQ2",0x20:"C2OUT",0x10:"C2:1",0x08:"C2:0",0x04:"PDS",0x02:"C1:1",0x01:"C1:0"};
            this.regDDB.sName = "DDB";
            this.regDDB.aBitIDs = {0x80:"DD7",0x40:"DD6",0x20:"DD5",0x10:"DD4",0x08:"DD3",0x04:"DD2",0x02:"DD1",0x01:"DD0"};
            this.regPDB.sName = "PDB";
            this.regPDB.aBitIDs = {0x80:"HLD",0x40:"LCS",0x20:"SD1",0x10:"FR",0x08:"ST",0x04:"STI",0x02:"EE",0x01:"WE"};
            this.regCRB.sName = "CRB";
            this.regCRB.aBitIDs = {0x80:"IRQ1",0x40:"IRQ2",0x20:"C2OUT",0x10:"C2:1",0x08:"C2:0",0x04:"PDS",0x02:"C1:1",0x01:"C1:0"};
            this.regCTRL.sName = "CTRL";
            this.regCTRL.aBitIDs = {0x80:"CR7",0x40:"CR6",0x20:"CR5",0x10:"CR4",0x08:"CR3",0x04:"CR2",0x02:"CR1",0x01:"CR0"};
            this.regSTAT.sName = "STAT";
            this.regDATA.sName = "DATA";
            this.regUnknown.sName = "unknown";
        }
    }

    /**
    * @this {C1PDiskController}
    * @param {number} iDrive
    * @param {number} iDriveType
    * @param {number} nMaxTracks
    */
    resetDrive(iDrive, iDriveType, nMaxTracks)
    {
        this.aDrives[iDrive] = {
            iType: iDriveType,
            nTracks: nMaxTracks,
            fProtected: true,               // fake for now
            nIndexPulse: 20,                // nIndex (20 is initial index pulse)
            iTrackSelect: 0,                // nTrack
            iTrackOffset: -1,               // nSector
            /*
             * Our disk data consists of an array of tracks, where each track is an array of sectors;
             * as long as aTracks.length == 0 (empty array), the drive is not considered "loaded" with a disk.
             */
            aTracks: []
        };
    }

    /**
    * @this {C1PDiskController}
    * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea")
    * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "listDisk")
    * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
    * @param {string} [sValue] optional data value
    * @returns {boolean} true if binding was successful, false if unrecognized binding request
    */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        switch(sBinding) {

        case "listDisk":
            this.bindings[sBinding] = control;
            return true;

        case "loadDisk":
            this.bindings[sBinding] = control;
            control.onclick = function(controller) {
                return function() {
                    if (controller.bindings["listDisk"]) {
                        var sFilePath = controller.bindings["listDisk"].value;
                        var sFileURL = sFilePath;
                        /*
                         * If the selected disk image has a ".json" extension, then we assume it's a pre-converted
                         * JSON-encoded disk image, so we load it as-is; otherwise, we ask our server-side disk image
                         * converter to return the corresponding JSON-encoded data, in compact form (ie, minimal whitespace,
                         * no ASCII data comments, etc).
                         */
                        if (sFilePath.substr(sFilePath.length-5) != ".json") {
                            /*
                             * TODO: This code was using a deprecated parameter (compact=1); make sure things still work.
                             *
                             * TODO: Convert this code to use the new shared Disk API definitions and weblib functions; eg:
                             *
                             *      sDiskURL = WebLib.getHostOrigin() + DumpAPI.ENDPOINT + "?" + DumpAPI.QUERY.DISK + "=" + sDiskPath;
                             */
                            sFileURL = "http://" + window.location.host + "/api/v1/dump?disk=" + sFilePath;
                        }
                        controller.printf("loading  %s...\n", StrLib.getBaseName(sFilePath));
                        WebLib.getResource(sFileURL, null, true, function(sURL, sResponse, nErrorCode) {
                            controller.loadDisk(sURL, sResponse, nErrorCode);
                        });
                    }
                };
            }(this);
            return true;

        default:
            break;
        }
        return false;
    }

    /**
    * @this {C1PDiskController}
    * @param {Array} abMemory
    * @param {number} start
    * @param {number} end
    * @param {C1PCPU} cpu
    */
    setBuffer(abMemory, start, end, cpu)
    {
        this.abMem = abMemory;
        this.addrController = start;
     // this.addrControllerLimit = end + 1;
        if ((this.cpu = cpu)) {
            cpu.addReadNotify(start, end, this, this.getByte);
            cpu.addWriteNotify(start, end, this, this.setByte);
        }
        this.setReady();
    }

    /**
    * @this {C1PDiskController}
    * @param {boolean} fOn
    * @param {C1PComputer} cmp
    *
    * We need We make a note of the Computer component, so that we can invoke its reset() method whenever we need to
    * simulate a warm start, and we query the Keyboard component so that we can use its injectKeys() function.
    */
    setPower(fOn, cmp)
    {
        if (fOn && !this.flags.powered) {
            this.flags.powered = true;
            if (DEBUGGER) this.dbg = cmp.getComponentByType("debugger");
        }
    }

    /**
    * @this {C1PDiskController}
    * @param {string} sDiskName
    * @param {string} sDiskData
    * @param {number} nErrorCode (response from server if anything other than 200)
    *
    * NOTE: Although I've expanded the JSON disk-image format to support multiple heads (ie, platters or disk surfaces),
    * this controller implementation currently supports only single-head drives, and therefore only single-sided images.
    * So, if the image contains more than one entry in head data array, all we use is the first entry; data for any remaining
    * heads is discarded.
    *
    * WARNING: The disk-image format should match that used by PCjs, where the image is an array of cylinders, each of which
    * is an array of heads.  That's also more typical, because it maintains the original data's physical locality.
    */
    loadDisk(sDiskName, sDiskData, nErrorCode)
    {
        if (nErrorCode) {
            this.printf("disk load error (%d)\n", nErrorCode);
            return;
        }
        var aHeads = [];
        this.printf("mounting %s...\n", sDiskName);
        try {
            /*
             * The most likely source of any exception will be right here, where we're parsing
             * the JSON-encoded disk data.
             */
            aHeads = eval("(" + sDiskData + ")");
            if (!aHeads.length) {
                this.printf("no data: %s\n", sDiskName);
                return;
            }
            if (!aHeads[0].length) {
                this.printf("no tracks: %s\n", sDiskName);
                return;
            }
            var aTracks = aHeads[0];
            if (aTracks[0]['trackNum'] === undefined) {
                this.printf("data error: %d\n", aTracks[0]);
                return;
            }
            /*
             * NOTE: This should never happen, otherwise we shouldn't have initiated the load
             * in the first place. Can we guarantee that and eliminate this test?
             */
            if (!this.aDrives[0]) {
                this.printf("no available drives\n");
                return;
            }
            /*
             * To make disk access more efficient, we need to supplement every track object with a
             * simple byte-array (trackData) containing all the data bytes for the entire track.
             */
            for (var iTrack=0; iTrack < aTracks.length; iTrack++) {
                var iTrackNum;
                var track = aTracks[iTrack];
                var sectors = track['sectors'];
                /*
                 * WARNING: There are MANY other ways the track data could be malformed, but we'll
                 * start with the most egregious, and worry about the rest later.
                 */
                if ((iTrackNum = track['trackNum']) === undefined || sectors === undefined) {
                    throw new Error("track " + iTrack + " missing data");
                }
                /*
                 * WARNING: We allow out-of-order tracks, because we store each track's data according
                 * to its trackNum index, but just in case that wasn't intended, we're going to mention it.
                 */
                if (iTrackNum != iTrack) {
                    Component.warning("track " + iTrackNum + " out of order (expected " + iTrack + ")");
                }
                /*
                 * For each track, we start with an empty trackData array and "push" (ie, append) all the
                 * sector data onto it. Most of the data is already in byte form and can simply use Array.push(),
                 * but there is also some metadata (signatures, types, lengths, etc), for which we have assorted
                 * helpers below: pushBCD, pushBin, and pushSig.
                 */
                var trackData = [], sector, sectorData, i;
                if (!iTrackNum) {
                    sector = sectors[0];
                    sectorData = sector['sectorData'];
                    this.pushBin(trackData, track, 'trackLoad', 2);
                    this.pushBin(trackData, sector, 'sectorPages');
                    for (i = 0; i < sectorData.length; i++) {
                        trackData.push(sectorData[i]);
                    }
                }
                else {
                    this.pushSig(trackData, track, 'trackSig');
                    this.pushBCD(trackData, track, 'trackNum');
                    this.pushBin(trackData, track, 'trackType');
                    for (var iSector=0; iSector < sectors.length; iSector++) {
                        sector = sectors[iSector];
                        sectorData = sector['sectorData'];
                        this.pushBin(trackData, sector, 'sectorSig');
                        this.pushBin(trackData, sector, 'sectorNum');
                        this.pushBin(trackData, sector, 'sectorPages');
                        for (i = 0; i < sectorData.length; i++) {
                            trackData.push(sectorData[i]);
                        }
                        this.pushSig(trackData, sector, 'sectorEndSig');
                    }
                }
                /*
                 * Finally, here's where we add the newly-created chunk of track data to the current track object
                 */
                aTracks[iTrackNum].trackData = trackData;
                if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_DISK)) {
                    this.dbg.printf("track %d: %d bytes\n", iTrackNum, trackData.length);
                }
            }
            this.aDrives[0].aTracks = aTracks;
            this.printf("mount of %s complete\n", sDiskName);
        } catch (e) {
            this.printf("disk data error: %s\n", e.message);
        }
    }

    /**
    * @this {C1PDiskController}
    * @param {Array.<number>} a
    * @param {Object} o is the object containing the key
    * @param {string} k is the key of 8-bit value to convert to BCD (ie, two 4-bit BCD digits) and push
    */
    pushBCD(a, o, k)
    {
        var n = o[k];
        if (n === undefined) {
            throw new Error("missing bcd value: " + k);
        }
        var bcd = (Math.floor(n / 10) << 4) | (n % 10);
        a.push(bcd);
    }

    /**
    * @this {C1PDiskController}
    * @param {Array.<number>} a
    * @param {Object} o is the object containing the key
    * @param {string} k is the key of the value
    * @param {number} [cb] is the number of bytes to push (only 1 or 2 is supported, and the default is 1)
    */
    pushBin(a, o, k, cb)
    {
        var n = o[k];
        if (n === undefined) {
            throw new Error("missing binary value: " + k);
        }
        if (cb == 2) {
            a.push((n >> 8) & 0xff);
        }
        a.push(n & 0xff);
    }

    /**
    * @this {C1PDiskController}
    * @param {Array.<number>} a
    * @param {Object} o is the object containing the key
    * @param {string} k is the key of the signature string to push
    */
    pushSig(a, o, k)
    {
        var s = o[k];
        if (s === undefined) {
            throw new Error("missing signature: " + k);
        }
        for (var i=0; i < s.length; i++) {
            a.push(s.charCodeAt(i));
        }
    }

    /**
    * @this {C1PDiskController}
    * @param {number} port address (0x0000-0x00FF) relative to addrController (0xC000)
    * @param {boolean} fWrite is true if port write, false if port read
    * @returns {Object} reg will always be a valid register object, but it may be the "unknown" register if we don't recognize the port.
    */
    getReg(port, fWrite)
    {
        var reg;
        port &= 0x3F;
        /*
         * Now that we've masked the full port range of 0x00-0xFF down to 0x00-0x3F, we further mask the
         * PIA port range (0x00-0x0F) to 0x00-0x03, and the ACIA port range (0x10-0x1F) to 0x10-0x11.
         * The rest of the masked range (0x20-0x3F) is unmapped, so we map it to our global unknown register.
         */
        if (port < 0x10) {
            port &= 0x03;
        }
        else if (port < 0x20) {
            port &= 0x11;
        }
        switch(port) {
        case this.PORT_PDA:
            reg = (this.regCRA.bits & this.CR_PD_SEL)? this.regPDA : this.regDDA;
            break;
        case this.PORT_CRA:
            reg = this.regCRA;
            break;
        case this.PORT_PDB:
            reg = (this.regCRB.bits & this.CR_PD_SEL)? this.regPDB : this.regDDB;
            break;
        case this.PORT_CRB:
            reg = this.regCRB;
            break;
        case this.PORT_CTRL:
            reg = (fWrite? this.regCTRL : this.regSTAT);
            break;
        case this.PORT_DATA:
            reg = this.regDATA;
            break;
        default:
            reg = this.regUnknown;
            break;
        }
        return reg;
    }

    /**
    * @this {C1PDiskController}
    * @param {number} addr
    * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to read the specified addr)
    */
    getByte(addr, addrFrom)
    {
        /*
         * Don't trigger any further hardware emulation (beyond what we've already stored in memory) if
         * the Debugger performed this read (need a special Debugger I/O command if/when you really want to do that).
         */
        if (addrFrom !== undefined) {
            var port = addr - this.addrController;
            var reg = this.getReg(port, false);
            if (DEBUGGER && this.dbg) this.dbg.messageIO(this, addr, addrFrom, this.dbg.MESSAGE_DISK, false, reg.sName);
            reg.read();
        }
    }

    /**
    * @this {C1PDiskController}
    * @param {number} addr
    * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to write the specified addr)
    */
    setByte(addr, addrFrom)
    {
        /*
         * Don't trigger any further hardware emulation (beyond what we've already stored in memory) if
         * the Debugger performed this write (need a special Debugger I/O command if/when you really want to do that).
         */
        if (addrFrom !== undefined) {
            var b = this.cpu.getByte(addr);
            var port = addr - this.addrController;
            var reg = this.getReg(port, true);
            if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_DISK | this.dbg.MESSAGE_PORT)) {
                this.dbg.messageIO(this, addr, addrFrom, this.dbg.MESSAGE_DISK, true, reg.sName);
                if (reg.aBitIDs) {
                    var bTest = 0x80;
                    var bChanged = reg.bits ^ b;
                    while (bChanged && bTest) {
                        if (bChanged & bTest) {
                            this.dbg.printf("  changed %s.%s to %s\n", reg.sName, reg.aBitIDs[bTest], (b & bTest)? "1" : "0");
                        }
                        bTest >>= 1;
                    }
                }
            }
            reg.update(b);
        }
    }

    /**
    * @this {C1PDiskController}
    * @param {number} bPDA
    * @param {number} bPDB
    */
    setSelectedDrive(bPDA, bPDB)
    {
        var iDriveSelect = -1;
        if (bPDA !== undefined && bPDB !== undefined) {
            iDriveSelect = 0;
            if (!(bPDB & this.PDB_SD1)) {
                iDriveSelect |= 0x02;
            }
            if (!(this.regPDA.bits & this.PDA_SD2)) {
                iDriveSelect |= 0x01;
            }
        }
        if (this.iDriveSelect != iDriveSelect) {
            this.iDriveSelect = iDriveSelect;
            this.regSTAT.update();
        }
    }

    /**
     * @this {C1PDiskController}
     */
    startDriveData()
    {
        if (this.iDriveSelect >= 0) {
            this.aDrives[this.iDriveSelect].iTrackOffset = 0;
            this.advanceDriveData();
        }
    }

    /**
     * @this {C1PDiskController}
     */
    stopDriveData()
    {
        if (this.iDriveSelect >= 0) {
            this.aDrives[this.iDriveSelect].iTrackOffset = -1;
            this.regDATA.update(0xFF);          // QUESTION: Is this necessary or helpful in some way?
            this.regSTAT.update();
        }
    }

    /**
     * @this {C1PDiskController}
     * @returns {number} current byte of data from the currently selected drive, or null if no (more) data available
     */
    advanceDriveData()
    {
        var b = null;
        if (this.iDriveSelect >= 0) {
            var drive = this.aDrives[this.iDriveSelect];
            var track = drive.aTracks[drive.iTrackSelect];
            if (track !== undefined) {
                if (drive.iTrackOffset >= 0 && drive.iTrackOffset < track.trackData.length) {
                    drive.nIndexPulse = 100;    // QUESTION: Necessary?
                    b = track.trackData[drive.iTrackOffset++];
                    this.regDATA.update(b);
                    this.regSTAT.update();
                }
                else {
                    drive.nIndexPulse = 10;     // QUESTION: Valid or necessary to force index pulse on next poll of $C000?
                    this.stopDriveData();
                }
            }
        }
        return b;
    }

    /**
     * updatePDA() calculates an updated value for the PDA register.
     *
     * In the process, this may also update iDriveSelect and assorted drive internal variables.
     *
     * @this {C1PDiskController}
     * @param {number|undefined} bPDA
     * @returns {number} updated bits for PDA
     */
    updatePDA(bPDA)
    {
        if (bPDA === undefined) {
            bPDA = this.regPDA.bits;
        } else {
            this.setSelectedDrive(bPDA, this.regPDB.bits);
        }

        /*
         * We start by turning ON most bits, except for PDA_RDY1, which we always leave
         * OFF (indicating ready).  We leave PDA_SD2 alone, so that it reflects whatever
         * the CPU had set.
         *
         * Then we dive into the update logic, which will turn OFF any of the bits we
         * originally turned ON if the corresponding condition is true (because an OFF bit
         * signals an active condition).
         */
        bPDA |= (this.PDA_IHD | this.PDA_WP | this.PDA_SHD | this.PDA_FD | this.PDA_TZD | this.PDA_RDY2);
        bPDA &= ~(this.PDA_RDY1);

        if (this.iDriveSelect >= 0) {

            if (this.aDrives[this.iDriveSelect].aTracks.length) {

                var drive = this.aDrives[this.iDriveSelect];

                if (drive.fProtected) {
                    bPDA &= ~this.PDA_WP;
                }
                if (!drive.iTrackSelect) {
                    bPDA &= ~this.PDA_TZD;
                }
                /*
                 * Simulate PHD_IHD (Index Hole Detect)
                 */
                if (--drive.nIndexPulse <= 10) {
                    if (drive.nIndexPulse > 0) {
                        bPDA &= ~this.PDA_IHD;
                        this.stopDriveData();
                    } else {
                        drive.nIndexPulse = 100;
                        this.startDriveData();
                    }
                }
            }
        }
        return bPDA;
    }

    /**
     * updatePDB() calculates an updated value for the PDB register.  However, since the
     * PDB consists entirely of OUTPUT bits, none of the given bits should actually be modified.
     *
     * In the process, this may also update iDriveSelect and assorted drive internal variables,
     * as well as selected PDA INPUT bits (hence the call to regPDA.update()).
     *
     * @this {C1PDiskController}
     * @param {number|undefined} bPDB
     * @returns {number} updated bits for PDB
     */
    updatePDB(bPDB)
    {
        if (bPDB === undefined) {
            bPDB = this.regPDB.bits;
        } else {
            this.setSelectedDrive(this.regPDA.bits, bPDB);
        }

        if (this.iDriveSelect >= 0 && this.iDriveSelect < this.aDrives.length) {

            var drive = this.aDrives[this.iDriveSelect];

            if (drive.aTracks.length) {
                /*
                 * Is PDB_ST transitioning from 1 to 0?
                 */
                if ((this.regPDB.bits & this.PDB_ST) && !(bPDB & this.PDB_ST)) {
                    /*
                     *  PDB_STI == 0? step toward track 39 : step toward track 0
                     */
                    if (bPDB & this.PDB_STI) {
                        drive.iTrackSelect--;
                    } else {
                        drive.iTrackSelect++;
                    }

                    if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_DISK)) {
                        this.dbg.printf("stepping %s to track %d\n", (bPDB & this.PDB_STI)? "down" : "up", drive.iTrackSelect);
                    }

                    if (drive.iTrackSelect >= drive.nTracks) {
                        drive.iTrackSelect = drive.nTracks;
                    }

                    if (drive.iTrackSelect < 0) {
                        drive.iTrackSelect = 0;
                    }

                    drive.nIndexPulse = 20;

                    this.regPDA.update(this.regPDA.bits | this.PDA_IHD);
                    this.stopDriveData();
                }
            }
        }
        else if (DEBUG && this.iDriveSelect >= 0) {
            this.printf("updatePDB(%#04x): invalid drive: %d\n", bPDB, this.iDriveSelect);
        }
        return bPDB;
    }

    /**
     * updateSTAT() calculates an updated value for the ACIA Status register.
     *
     * @this {C1PDiskController}
     * @param {number|undefined} bSTAT
     * @returns {number} updated bits for STAT
     */
    updateSTAT(bSTAT)
    {
        if (bSTAT === undefined) {
            bSTAT = this.regSTAT.bits;
        }
        bSTAT &= ~this.STAT_RDRF;
        if (this.iDriveSelect >= 0 && this.aDrives[this.iDriveSelect].iTrackOffset >= 0) {
            bSTAT |= this.STAT_RDRF;
        }
        return bSTAT;
    }

    /**
     * @this {C1PDiskController}
     * @param {number} port
     * @param {Object} reg
     */
    writePort(port, reg)
    {
        this.cpu.setByte(port + this.addrController, reg.bits);
    }

    /**
     * @this {C1PDiskController}
     * @param {boolean} fLoaded is true if the selected drive must be loaded, false if don't care
     * @returns {Object} drive reference to the selected drive, or null if no drive is selected or it doesn't meet the fLoaded requirement
     *
     getSelectedDrive(fLoaded)
     {
         var drive = null;
         if (this.iDriveSelect >= 0) {
             if (this.aDrives[this.iDriveSelect]) {
                 if (!fLoaded || this.aDrives[this.iDriveSelect].aTracks.length)
                     drive = this.aDrives[this.iDriveSelect];
             }
         }
         return drive;
     }
     */

    /**
     * C1PDiskController.init()
     *
     * This function operates on every HTML element of class "disk", extracting the
     * JSON-encoded parameters for the C1PDiskController constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PDiskController component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeDC = Component.getElementsByClass(APPCLASS, "disk");
        for (var iDC=0; iDC < aeDC.length; iDC++) {
            var eDC = aeDC[iDC];
            var parmsDC = Component.getComponentParms(eDC);
            var controller = new C1PDiskController(parmsDC);
            Component.bindComponentControls(controller, eDC, APPCLASS);
        }
    }
}

/*
 * Initialize every DiskController module on the page.
 */
WebLib.onInit(C1PDiskController.init);
