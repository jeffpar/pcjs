---
layout: page
title: DEC VT100 Terminal with Debugger
permalink: /machines/dec/vt100/debugger/
redirect_from: /devices/pc8080/machine/vt100/debugger/
machines:
  - id: vt100
    type: pcx80
    debugger: true
    config: /configs/pcx80/machine/vt100/debugger/machine.xml
---

The [PCx80]({{ site.github.pages }}/machines/pcx80/) machine below is configured to simulate a
[VT100 Terminal](/machines/dec/vt100/) with PCjs Debugger.  When you press the **Run** button, it will start running the original
[VT100 Firmware](/machines/dec/vt100/rom/) inside the [PCx80]({{ site.github.pages }}/machines/pcx80/) CPU emulator.

Information about [VT100 Keys](#vt100-keys) and assorted [Hardware Notes](#vt100-memory-usage) are provided below,
followed by some [VT100 Technical Manual](/machines/dec/vt100/#documents) excerpts regarding the
[VT100 Initialization Process](#vt100-initialization-process).

[Non-Debugger Configuration](../) is available, along with demos of [Dual VT100 Terminals](../dual/) and an
[IBM PC AT connected to a VT100](../5170/).

{% include machine.html id="vt100" %}

### VT100 Keys

The VT100 KEYMAP table in [keyboard.js](/machines/pcx80/lib/keyboard.js)
maps modern keys to VT100 key addresses, and most of the mappings are 1-1.  Function keys are mapped as follows:

- F1: PF1
- F2: PF2
- F3: PF3
- F4: PF4
- F6: BREAK
- F7: LINE FEED
- F8: NO SCROLL
- F9: SET-UP

Factory defaults are shown below in parentheses.  Our VT100 configurations use slightly different defaults:

- ONLINE instead of LOCAL
- ANSI ON

### SET-UP Mode Keys

- 0: RESET
- 2: SET/CLEAR TAB
- 3: CLEAR ALL TABS
- 4: ONLINE/LOCAL (LOCAL)
- 5: SET-UP A/B
- 6: TOGGLE FEATURE
- 7: TRANSMIT SPEED (9600)
- 8: RECEIVE SPEED (9600)
- 9: 80/132 COLUMNS (80)
- SHIFT-S: Save SET-UP Features
- SHIFT-R: Restore SET-UP Features

To access the SET-UP B screen, press **5**.  To change SET-UP B options, move the cursor over the corresponding binary digit
and press **6** to toggle.

### SET-UP B Options

#### Block 1

- 1---: Smooth scroll (ON)
- -1--: Auto-Repeat (ON)
- --1-: Light Screen Background (OFF)
- ---1: Block Cursor (ON)

#### Block 2

- 1---: Margin Bell (OFF)
- -1--: Key-click (ON)
- --1-: ANSI (OFF)
- ---1: Auto-XON/XOFF (ON)

#### Block 3

- 1---: UK Pound Symbol (OFF)
- -1--: Wrap-Around (OFF)
- --1-: New Line (OFF)
- ---1: Interlace (OFF)

#### Block 4

- 1---: Even Parity (OFF)
- -1--: Parity Enable (OFF)
- --1-: 8 Data Bits (ON)
- ---1: 50Hz Power (OFF)

### VT100 Memory Usage

As described in the [Technical Manual (July 1982)](http://bitsavers.informatik.uni-stuttgart.de/pdf/dec/terminal/vt100/EK-VT100-TM-003_VT100_Technical_Manual_Jul82.pdf),
p. 4-15, 8Kb (0x2000) of ROM is located at 0x0000, and 3Kb (0x0C00) of RAM immediately follows it at 0x2000.  The ROM at
0x0000 contains all the VT100's 8080 code.  The VT100 also contains a 2Kb character generator ROM, but that ROM is not
addressable by the CPU; it is used directly by the Video Processor.

See [DEC VT100 ROMs](/machines/dec/vt100/rom/) for more information about the ROMs.

[vt100romhax](http://vt100romhax.tumblr.com/post/90697428973/the-vt100-memory-map-and-8080-disassembly)
(aka [phooky](https://github.com/phooky) aka Adam Mayer) further explains VT100 memory usage:

	Start   End     Size    Description
	0x0000  0x1fff    8K    Basic ROM
	0x2000  0x2012    18    Blank lines for refresh (6 x 3B)
	0x2012  0x204f    61    Stack area (grows down from 0x204e)
	0x204f  0x22d0   641    Scratch Pad/Setup Area(?)
	0x22d0  0x2c00  2352    Screen RAM
	
	Note: 0x22bb through 0x22d0 appear to be unused

In his [Platform Notes](https://github.com/phooky/VT100-Hax/blob/master/Platform%20Notes.md), he further describes
portions of the "Scratch Pad" area:

	Start   End     Size    Description
	0x2052  0x2054     2    0x2004 during init?
	0x2068  0x2069     1    Keys flag buffer
	0x206a  0x206e     3    New keys pressed buffer
	0x20f6  0x20f8     2    0x22d0 during init?
	0x2014  0x2015     1    0xff during init? [Typo or reference to a byte in the Stack area? -JP]

and the "Setup" area:

	Start   End     Size    Description
	0x217b            22    Answerback message (20chars+2delim)
	0x2191            17    Tabs (bit encoding) (first bit always set)
	0x21a2             1    80/132 col mode (00 = 80 col, 01 = 132 col)
	0x21a3             1    intensity (00 = brightest, 0x1f = dimmest)
	0x21a4             1    Mode byte for PUSART
	0x21a5             1    Online/local
	0x21a6             1    Switches 1
	0x21a7             1    Switches 2
	0x21a8             1    Switches 3
	0x21a9             1    Switches 4
	0x21aa             1    Switches 5
	0x21ab             1    TX baud rate
	0x21ac             1    RX baud rate
	0x21ad             1    parity 
	0x21ae             1    nvr checksum

### VT100 I/O Ports

From p. 4-17 of the Technical Manual:

	READ OR WRITE
	00H     PUSART data bus
	01H     PUSART command port
	
	WRITE ONLY (Decoded with I/O WR L)
	02H     Baud rate generator
	42H     Brightness D/A latch
	62H     NVR latch
	82H     Keyboard UART data input
	A2H     Video processor DC012
	C2H     Video processor DC011
	E2H     Graphics port
	
	READ ONLY (Decoded with I/O RD L)
	22H     Modem buffer
	42H     Flags buffer
	82H     Keyboard UART data output

The PCx80 ChipSet component deals with the ER1400's Non-Volatile RAM (NVR) ports, the Flags buffer, and the
DC011 and DC012 circuits, while the Keyboard component deals with the Keyboard UART.

You might wonder why the PCx80 Video component doesn't manage the DC011 and DC012.  In fact, the above labels are misleading.
If you look at the Functional Diagram on p. 4-53 of the Technical Manual, you'll see that DC011 and DC012 are really
peripheral components providing inputs to the Video Processor.  Moreover, they are not exclusive to the Video Processor.
For example, the LBA7 output of the DC011 is also used to clock the NVR chip.

In most respects, the VT100 Technical Manual provides a phenomenal amount of detail.
However, documentation for some of the above ports is almost non-existent.  It's only thanks to
[third parties](https://github.com/phooky/VT100-Hax/blob/master/Platform%20Notes.md) that we have, for example, the following
information about the Flags buffer (port 0x42):

	Bit Active? Description
	7   H       KBD Transmit Buffer Empty
	6   H       NVR CLOCK, driven by LBA7 (line buffer address)
	5   H       NVR DATA
	4   L       EVEN FIELD (comes out of the video timing generator)
	3   H       OPTION PRESENT (terminal output option???)
	2   L       GRAPHICS FLAG (is VT125 graphics card present)
	1   L       ADVANCED VIDEO (is AVO present)
	0   H       XMIT FLAG

### VT100 Video Processor

Normally, the PCx80 Video component allocates its own video buffer, based on the specified buffer address
(*bufferAddr*) and other dimensions (eg, *bufferCols* and *bufferRows*), but the VT100 is a little unusual:
it has a custom Video Processor that uses DMA to request character data from any region of RAM, one line at a time.
It always defaults to address 0x2000 for the first line of character data, but each line terminates with 3 bytes
containing the attributes and address of the next line, so the location of subsequent lines will vary, depending
on the type of line:

- Single-wide characters (80 or 132 columns)
- Double-wide characters (40 or 66 columns)

In addition to single-wide vs. double-wide, line attributes can also specify double-high, along with whether the
top or bottom halves of the double-high characters should be displayed, because double-high always implies double-wide
(ie, there is no support for double-high, single-wide characters).

Consequently, a VT100 machine XML file must set the Video component's *bufferRAM* property
to "true", indicating that existing RAM should be used, and a new property, *bufferFormat* must be set to "vt100",
enabling support for the VT100's line data format; eg:

```xml
<ram id="ram" addr="0x2000" size="0x0C00"/>
<video id="video" screenWidth="1600" screenHeight="960" bufferAddr="0x2000" bufferRAM="true" bufferFormat="vt100" bufferCols="80" bufferRows="24"/>
```

### VT100 Screen and Character Dimensions

Ordinarily, the VT100 screen displays 800 dots per horizontal scan, and a total of 240 horizontal scans, and by default,
it uses a 10x10 character cell, for a total of 80 columns and 24 rows of characters.  However, in 132-column mode, it
uses a 9x10 character cell instead, implying a total of 1188 dots displayed per horizontal scan.  This means we will have
to dynamically reallocate our internal buffers whenever the horizontal dimensions change.  Also, if no AVO expansion
card is present, there is only enough RAM available for 14 rows of characters in 132-column mode. 

For optimum scaling, I define the virtual screen size using multiples of the VT100's default "dot" dimensions; eg, 1600x960
(a horizontal multiplier of 2 and a vertical multiplier of 4).  That gives us a virtual screen aspect ratio of 1.67.

According to the Technical Manual, a physical VT100 screen measures 12 inches diagonally, and in 80-column mode, characters
measure 2.0mm x 3.35mm (in 132-column mode, they measure 1.3mm x 3.35mm), which suggests that the text area of the screen is
roughly 160mm x 80mm, implying a screen aspect ratio of 2.0.  However, after visually comparing the Technical Manual's SET-UP
screenshots to our test screens, 1.67 appears to be closer to reality than 2.0.  I'll revisit this issue at a later date.  

### VT100 Initialization Process

From "Power-Up and Self-Test", section 4.2.8, p. 4-19, of the VT100 Technical Manual (July 1982):

> When power is first applied to the terminal controller board, the reset circuit in the 8224 holds the microprocessor
in a halt state. Within a second, after the voltages stabilize in the power supply, the RC network at the reset input
allows the input voltage to rise to the switching threshold of a Schmitt trigger. Then the reset is released with the
8080 program counter set to 0. The low 64 bytes of program are reserved for the eight interrupt service routines which
can be addressed by the restart instruction (see previous section). The low 8 start the power-up routine by disabling
the interrupts, setting up the stack pointer, and then going immediately into the self-test routines.
	
> Assuming there are no hard logic failures present on the board, the microprocessor attempts to perform a confidence
check of the controller. Some failures are considered fatal and will stop the machine; other failures limit its operation
but win not prevent its use. Fatal failures are indicated by the LEDs on the keyboard, while nonfatal errors are indicated
as a single character on the screen.
	
> The microprocessor first sends the number of the first ROM to the LEDs on the keyboard. Then it calculates a checksum
of the contents of the first 2K of program. (Since firmware is treated as four 2K blocks of code, later VT100s with one
8K X 8 ROM chip operate the same way but any block failure requires replacement of the one chip). At the time of ROM
preparation, a special byte was included within each block to make the checksum equal zero if there are no errors. If
there is an error, the microprocessor halts and the LEDs indicate the current ROM at the time of failure. Otherwise, the
LEDs are incremented to show the next ROM number and the process continues.

> The next part of the test is writing and reading the RAM. Every bit in the RAM is written with a 0 and a 1 and read each
time. If the advanced video option is present (as indicated by the Option Present flag), its RAM is tested immediately
after the main RAM. In the main RAM a failure halts the machine. Failure of a bit in the advanced video option RAM is
indicated on the screen and the process continues. In another terminal, the VT52, one bad bit in the screen RAM means there
is one location that may not contain right character. This can be annoying to the user but does not affect the rest of the
screen. If one bit is bad in a VT100 line address, the entire screen below the affected line can become garbled and unusable.
A bad bit in the scratch area could disable communication with the host. So this confidence check ensures that any RAM
failure is detected immediately.

> The next test checks the non-volatile RAM by reading it. A checksum is calculated and compared with the value stored the
last time the NVR was written during a save. A bad NVR does not stop the VT100 because the SET-UP values can always be
reestablished from the keyboard at power-up. The NVR test is also the normal time when the terminal gets its auto SET-UP
readings from the NVR. Time is saved because reading the NVR is the most time-consuming part of both the self-test and the
auto SET-UP. If the NVR fails, the bell sounds several times to inform the operator, and then default settings stored in
the ROM allow the terminal to work. The operator must then manually reset any parameters that differ from the default values.

> To test the keyboard, the microprocessor commands the keyboard to scan once, lights all the LEDs, for about a half second,
and sounds the bell. It waits for the scan to finish and then looks for the last key address 7FH at the keyboard UART.
If the test fails, the terminal remains on-line, making it a receive-only (RO) terminal.

> This is the end of testing.

> Once the NVR data is in the scratch area in RAM, the microprocessor uses that data to program the hardware. All operating
parameters that were last saved (see NVR) are recalled and the terminal is set to match them. Finally the cursor appears
at column 1, line 1, and the microprocessor enters its background routine, ready for operation.

Some additional observations:

- During the NVR test, a "WAIT" message is displayed in the top-left corner of the screen; it's cleared after the test.
- Following the NVR test, if an error was detected, code at 0x00D2 loops for 0xFFF (4095) times with the CLICK bit (0x80)
set in the keyboard STATUS port (0x82), generating a "bell" (beep).  The NVR checksum test used to fail when we initialized all
NVR words with the freshly-erased value of 0x3fff; now we initialize them with canned values (see ChipSet.VT100.INIT).

### VT100 SET-UP Mode

From "PART 2: SET-UP MODE", p. 2-6, of the VT100 Technical Manual (July 1982):

> Unlike most terminals, the VT100 does not use switches or jumpers to individually turn the built-in terminal features on
or off. Instead, the VT100 uses a non-volatile memory (NVR) that always remembers what features have been selected, as if a
switch had been set.

> Selection and storage of built-in terminal features is performed in a special mode of operation called SET-UP mode.
When you enter SET-UP mode, the status of features stored in temporary memory shows on the screen. You can then change the
features and store any new feature selections either temporarily, by leaving SET-UP mode; or on a fixed basis, by performing
a Save operation. In either case, terminal operation reflects the new feature selection. If a recall operation is performed,
or the terminal is reset, or terminal power is turned off, all temporary feature settings are replaced by features that have
been stored on a fixed basis.

> SET-UP mode provides two brief summaries of the current feature status. The first presentation - SET-UP A - displays
the location of tab stops set and a visual ruler that numbers each character position on the line. The second presentation -
SET-UP B - summarizes the status of the other terminal features.

> **SET-UP A** - To enter SET-UP A, press the **SET-UP** key. The display has a presentation similar to Figure 2-3. The bottom
line of the display consists of a "ruler" that numbers each character position available on a line. Each tab stop is shown by
a "T" above the ruler. If the tab stop(s) set are those desired, you may exit **SET-UP** mode by pressing the SET-UP key again
or you may now change the tabs to meet your requirements.

> **SET-UP B** - SET-UP B mode may only be entered from SET-UP A mode. To enter SET-UP B, from SET-UP A press the **5** key on
the main keyboard. The display looks like Figure 2-4. Figure 2-5 summarizes the SET-UP B presentation. This summary allows you
to quickly determine what features are enabled. For additional information on a feature refer to in Part 3, SET-UP Feature
Definitions.

### Additional VT100 Resources

[DEC VT100](/machines/dec/vt100/)
