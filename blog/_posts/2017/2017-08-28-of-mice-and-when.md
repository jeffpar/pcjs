---
layout: post
title: Of Mice And When
date: 2017-08-28 10:00:00
permalink: /blog/2017/08/28/
---

While trying to bring the PCjs Microsoft Mouse Driver collection up-to-date,
at least through the 1980's, a number of versions have proven hard to find: 

- Microsoft Mouse v1.x
- Microsoft Mouse v2.x (Serial Version)
- Microsoft Mouse v3.x
- Microsoft Mouse v5.x

However, I was able to locate [Microsoft Mouse v5.0](/software/pcx86/dev/mouse/microsoft/5.00/) disk images in my own
collection, so we can cross that one off the list now.

Another dimension of the driver matrix is the type of mouse hardware:

- Bus
- Serial
- InPort
- PS/2
- USB
- Bluetooth

Since my focus is the 1980's, we'll ignore USB and Bluetooth for now.

There seems to be a fair bit of confusion on the Internet about Microsoft's first mouse: the Bus Mouse.  For example,
I found this [Reverse-engineered Bus Mouse Driver](https://github.com/fr1tz/aimsgui/blob/master/aid/os/pc/devmouse.c),
which is clearly making educated guesses about what the various I/O ports do.  There's nothing wrong with that,
and in fact, we have little choice in the matter, because I don't think Microsoft ever published technical details
of any of their mouse hardware.  Unfortunately, after studying the driver a bit, I discovered that what it thinks
is a Microsoft Bus Mouse is actually a newer mouse: the Microsoft InPort Mouse.

Even this Wikipedia article on the [Microsoft Mouse](https://en.wikipedia.org/wiki/Microsoft_Mouse) gets it wrong:

> The initial version featured an InPort ISA interface, requiring a Microsoft bus card to be installed in the computer.

The first Microsoft Mouse, introduced in 1983, was available in Serial and Bus versions.  The Serial version required
a serial port and used a (female) DB-25 connector, while the Bus version came with a small ISA card that the mouse
plugged into using a (male) DE-9 connector.  For more details (with pictures), check out this 2014 article on
[The Original Microsoft Mouse](https://communities.intel.com/docs/DOC-22714). 

Fast-forward to 1986, when Microsoft announced the InPort chip.  As of May 9, 1986, all of its "Bus" mice were
reportedly shipping with the InPort chip, along with a new, round 9-pin connector (not to be confused with the round
6-pin connector that IBM introduced in 1987 and is now known as the PS/2 interface).

It's easy to see why the original Microsoft Bus mouse is so easily confused with the Microsoft InPort mouse, since
they both required plugging an ISA card into your PC's bus.  But the mice used different connectors and the cards had
different programming interfaces.  They used the same range of ports by default (0x23C through 0x23F), but the
InPort chip added a number of registers that could only be accessed by first writing a register number to the card's
"Address" port (0x23C) and then reading or writing that register through the card's "Data" port (0x23D).

---

This post barely scratches the surface of the evolution of the Microsoft Mouse, the various shapes and sizes of mice
and their connectors, and all the programming considerations (eg, detection, initialization, interrupt handling, etc.)
I'll return to this topic in the coming months, once I have more time, but for now, I'll leave you with this tiny
snapshot of mouse driver revision history that I recently unearthed.  Enjoy!

	;------------------------------------------------------------------------------
	;
	; M I C R O S O F T   M O U S E   D R I V E R
	;
	; Written by Chris Peters, December 1982
	; Joystick code added by Brian Conte, January 1984
	; Bus and Serial versions combined by Brian Conte, December 1984
	; Chip version added by Steve Shaiman, November 1985
	; Joystick & Lightpen deleted by Steve Shaiman, November 1985
	; Keyboard shift sensitivity, cmd line switches to set sensitivity
	;     and function calls 20-28 added by Marc Wilson, May 1986
	; General clean up done by Steve Shaiman, Ocotober 1986
	; International Message System by Steve Shaiman, November 1986
	;
	; DOS 2.0+              version
	; Bus/Serial/Chip       version
	;
	;------------------------------------------------------------------------------
	
	;------------------------------------------------------------------------------
	; Revision History:
	; 5.01
	;       - modified logic in smEga used to detect EGA odd/even modes (f & 10)
	;       - modified copy_buffer_to_screen, copy_screen_to_buffer,
	;         copy_cursor_to_screen, copy_buffer_to_cursor, copy_cursor_to_buffer,
	;         and put_cursor_in_buffer to handle 64k EGA graphics modes (f & 10)
	;       - added enable_write_maps_0_and_1, enable_write_maps_2_and_3,
	;         enable_all_write_maps, enable_read_maps_0_and_1, and
	;         enable_read_maps_2_and_3 to handle 64k EGA graphics modes (f & 10)
	;       - removed old_screen from state block 4 (StartStBlock4)
	;       - moved old_screen for mouse.com out of mouse.com's psp
	;       - eliminated fInit variable so that call2 will always decrement the
	;         cursor flag
	; no!!! - eliminated zeroing the interrupt mask [int_mask] from call0
	;         mouse reinitialization code
	;       - changed EgaGrphxSet+7 to EgaGrphxSave+7 in RestoreState
	; 5.02
	;       - modified version numbers
	;       - added code in Serint to cause [button_state] and [int_cond] to not
	;         be updated until after the third data byte is received
	;       - added the variables [new_button_state] & [new_int_cond] to accomodate
	;         [button_state] & [int_cond] update delay
	;       - changed MaxIntSize from 140h to 180h to accomodate code size change
	;         of Serint
	;       - corrected bug caused by chip mouse board with no irq jumper.  will
	;         now output message that interrupt jumper is missing
	;       - aligned install message with VT52 install message
	; 5.03
	;       - modified version numbers
	;       - added jmp short $+2 after all in's & out's for bus & serial mouse I/O
	;
	;       - modified EgaPut & move_cursors subroutines, added CheckCursor
	;         subroutine and InverseCursor flag to correct bug in cursor output for
	;         EGA graphic cursors in which the same bits in both the screen mask &
	;         cursor mask are set to 1's.
	;       - changed bus mouse search code
	; 6.00
	;       - modified version numbers
	;       - sensitivity settings added; function calls, cmd line switches and
	;         data structures.
	;       - alternative user procs added; function calls, data structures and
	;         additional button_state bits.
	; 6.a1
	;       - modified version numbers
	;       - added support for EGA mode D
	; 6.a2
	;       - modified version numbers
	;       - clear that USERPROC when mouse reset!
	; 6.a3
	;       - modified version numbers
	;       - New EGAINT10(stay away from clock mode reg. if possible).
	;       - Keep UserProc out during MoveCursor.
	; 6.b0
	;       - modified version numbers
	;       - added OFF disable/unload command line switch and messages
	;       - removed shift state from [Button_state] returned by function calls
	;       - modified InPort IRQ search code to use the 8259 registers instead of
	;       - a timing loop
	; 6.b1
	;       - modified version numbers
	; 6.b2
	;       - modified version numbers
	;       - added code to support function 29 (set CRT page #) & function 30
	;         (get CRT page #)
	; 6.b3
	;       - modified version numbers
	;       - added support for the PCjr
	;       - added code to make sure that hold bit is set when it is set in
	;         the InPort interrupt handler
	; 6.b4
	;       - modified version numbers
	;       - modified multiply/divide routine used for raw mickey scaling to
	;         yield the same magnitude results for positive & negative values
	;       - removed code to make sure that hold bit is set when it is set in
	;         the InPort interrupt handler
	;       - added EOI output to InPort hardware interrupt handler and added a
	;         mouse type check to the general interrupt handler to avoid doing
	;         a second EOI in the case of an InPort
	;       - added a check for InPort version # and used the version # to
	;         determine if the InPort is to be used in timer interrupt mode
	;         (version 1.0) or timer interrupt mode (all other versions).  if
	;         the 1.1 version of the chip checks out in data interrupt mode, this
	;         mode will be used for all none version 1.0 chips
	;       - added new variable (ChipIntMode) to hold the InPort interrupt mode
	;       - modified support for function 29/30 so that the driver would work
	;         the same way it worked previous to 6.b2 if the crt page # is 0
	;         (i.e. in text mode the BIOS crt page start [location 40:4e] is used
	;         as the start of the display page instead of 0)
	; 6.b5
	;       - modified version numbers
	;       - added check for bios mode 74h (Toshiba 2100 & 3100) and modified
	;         driver to use AT&T 6300 mode in this case
	;       - added check for bios mode 06h on an HP Vectra and modified driver
	;         to use AT&T 6300 mode in this case
	;       - moved EGA mode D cursor buffer to 3f40h from 1fd0h
	; 6.00
	;       - modified version numbers
	; 6.01A
	;       - modified version numbers
	;       - corrected bug in norm_sens and SensTable so that sensitivity values
	;         of 1 & 2 are handled correctly
	;       - added code to set external timer enable bit in the InPort test
	;         register if timer select (interrupt rate) is set to 7 and the InPort
	;         chip version isn't 1.0
	;       - added the variable ChipVersion to hold the InPort chip version #
	;       - deleted all calls to disable and the disable subroutine (calls to
	;         disable were unnecessary and caused glitches on the mouse IRQ line)
	;       - modified code in set_masks to set page_seg_size to 800h when using
	;         a Hercules graphics adapter display mode
	;       - modified code in basic to insure that es <- ds if M2% is 0 or
	;         es <- M2% if M2% isn't 0
	; 6.01B
	;       - modified version numbers
	;       - changed maxcurht from 16 to 32
	;       - changed maxcurwd from 9 to 5
	;       - changed maxbufht from 20 to 32
	;       - added lots of comments to cursor drawing routines
	; 6.01C
	;       - modified version numbers
	;       - added more comments to cursor drawing routines
	;       - modified move_cursors and move3 for speed & reduced cursor width
	;         (max cursor width changed from 8 bytes to 4 bytes - 6.01B)
	;       - added Ericsson support
	;       - modified set_masks to use ROM BIOS data area crt columns & display
	;         mode to determine value for bytes_per_line to support Hercules 90
	;         column text mode
	;       - corrected scan line # output for int 10h read lightpen position when
	;         in high resolution modes
	;       - updated copyright notice
	; 6.01D
	;       - modified version numbers
	;       - added int 10h function f8h to EGAINT10.INC
	;       - added shadowing for set palette & set crt page # to EGAINT10.INC
	; 6.00i
	;       - modified version numbers
	;       - added International Message System
	;       - added function 34 which returns the # of the foreign language in use
	; 6.00Z
	;       - modified version numbers
	;       - added register saving and restoring for CX & DX in set_masks to
	;         correct bug when entered from int_10
	;       - "fixed" 8255 bus mouse detection code to protect against a ringing
	;         I/O bus
	;       - moved int_10h call to set_masks to follow actual call to BIOS
	;         instead of preceeding it.  This corrects a dual monitor bug
	;       - corrected installation message handling for the case where a .sys
	;         or a pre-6.00z version of the driver was previously installed
	; 6.01Z (Ben Hsu)
	;       - REMOVE 6.00z move int_10h to set_masks to follow actual call to BIOS
	;       - REMOVE 6.01D Egaint10.inc enhancements
	;       - REMOVE 6.00z DisplayMessage for a Pre-6.00z installed
	;       - REMOVE new set_masks routine, restore the 6.00 version set_masks
	;       - Change Function 34 to Function 35 for ITL version, in order to unload
	;         mouse version 6.00
	;       - Added a new Function 34 to SetLanguage, to reset the languages value
	;         when mouse.sys is loaded
	; 6.01Z (Steve Shaiman)
	;       - Modified the 6.00 version of set_masks for Ericsson support
	; 6.02Beta (Ben Hsu)
	;       - Modified version numbers
	;       - Modified the soft text cursor restoring routine, for restore only
	;         attribute if it is a blank character, otherwise attr + char.
	;       - Add the fat waiting loop get_time for the initial and reinitial of
	;         the serial mouse (mouse not found bug)
	;       - Correct the Function #26 BX and CX value to max value of 100, in order
	;         to work with the cpanel
	;       - Added new Function #36, GetVersion, to get the mouse version number
	;         type and IRQ#
	; 6.02a (Ben Hsu)
	;       - Modified version numbers
	;       - Merged the set_masks for Ericsson support
	; 6.02b (Ben Hsu)
	;       - Modified version numbers
	;       - Save CX and DX in set_masks, in order to work with the MP and Project
	; 6.02c (Ben Hsu)
	;       - Modified version numbers
	;       - Added in the IBM Skyhawk display adapter support, new variable
	;         fSkyhawkCode in card tpyre area
	;       - Modified DisplayMessage and ms$init for langugage support in sys file
	; 6.02d (Ben Hsu)
	;       - Modified version numbers
	;       - Modified the IBM Skyhawk display adapter support
	;       - Modified the mouse OFF code to check the new cpanel activation keys
	;       - General clean up the code
	; 6.02e (Ben Hsu)
	;       - Modified version numbers
	;       - REMOVED 6.02Beta get_time and replace by the original code for
	;         runnig word on Skyhawk
	;       - Modified the SET_MASKS for piano test program, reset byte_per_line to
	;         80 when using graphics mode 6
	; 6.02f (Ben Hsu)
	;       - Modified version numbers
	;       - Used the 1/30/87 version EGAINT10.INC file for Skyhawk support
	; 6.02g (Ben Hsu)
	;       - Modified version numbers
	;       - Used the 2/03/87 version EGAINT10.INC file for Skyhawk support
	; 6.02  (Ben Hsu)
	;       - Modified version numbers
	;       - Added DealyLoop reutine for serial mouse patch to use
	; IBM   (Steve Shaiman)
	;       - added IBM and NotIBM flags
	;       - Added IBM mouse support for both IBM and MS Mouse drivers
	; 6.02h (Ben Hsu)
	;       - Modified version numbers
	;       - Changed the JNE to JE in ChipReinit version comparasion with 10h
	; 6.02h1(Jeff Parsons)
	;       - Added support for Tseng Labs Eva/480 Enhanced EGA board,
	;         by recognizing mode 25h in set_masks and treating similar to
	;         Vga640x480.
	;------------------------------------------------------------------------------
