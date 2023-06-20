## Paradise VGA Board: WDVGA PLUS 16

This Paradise VGA board was manufactured in 1988 and sold by Western Digital Corporation as a **WDVGA PLUS 16**, Model No. 61-603023-02.
 
[<img src="https://www.pcjs.org/devices/pcx86/video/paradise/vga/Paradise_VGA_1988-640.jpg" alt="Paradise VGA Board">](https://www.pcjs.org/devices/pcx86/video/paradise/vga/Paradise_VGA_1988.jpg)

A copy of the board's [ROM BIOS](1988-05-23.json5) was created by [dumping](/machines/pcx86/compaq/deskpro386/rom/#dumping-roms)
the contents of each of the board's two M27128AZB PROMs to a *.hex* file, and then merging the *.hex* files with the following
[FileImage](/tools/fileimage/) command:

	fileimage.js --file=62-003084-060.hex --merge=62-003085-060.hex --output=1988-05-23.json5 --comments

The first 128 bytes of the ROM BIOS contain:

	00000000  55 aa 30 eb 15 37 34 30  30 30 35 2f 32 33 2f 38  |U.0..740005/23/8|
	00000010  38 2d 31 38 3a 30 30 3a  30 30 e9 a8 00 00 49 42  |8-18:00:00....IB|
	00000020  4d 20 43 4f 4d 50 41 54  41 42 4c 45 00 00 00 00  |M COMPATABLE....|
	00000030  00 00 00 00 00 30 30 33  30 35 36 2d 30 30 35 43  |.....003056-005C|
	00000040  4f 50 59 52 49 47 48 54  20 50 41 52 41 44 49 53  |OPYRIGHT PARADIS|
	00000050  45 20 53 59 53 54 45 4d  53 20 49 4e 43 2e 20 31  |E SYSTEMS INC. 1|
	00000060  39 38 37 2c 31 39 38 38  2c 20 41 4c 4c 20 52 49  |987,1988, ALL RI|
	00000070  47 48 54 53 20 52 45 53  45 52 56 45 44 56 47 41  |GHTS RESERVEDVGA|

Although Compaq's early VGA boards also used a Paradise chipset and Inmos DAC, and have many physical similarities
to this WDC Paradise board, the ROMs claim different authorship.  A full disassembly and comparison of the Compaq and
WDC boards will be made at a later date.

One thing we know already: the Paradise developers didn't know how to spell "compatible."
