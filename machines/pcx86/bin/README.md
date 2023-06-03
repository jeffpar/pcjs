This directory contains the PCx86 Node command-line "wrapper" utility [pcx86.js](pcx86.js).

When you run it, be sure to provide a valid machine JSON file; e.g.:

	node pcx86.js --cmd="load ibm5150.json5"

which should then produce the following output:

    PCx86 v2.00
    Copyright © 2012-2023 Jeff Parsons <Jeff@pcjs.org>
    License: MIT <https://www.pcjs.org/LICENSE.txt>
    BusX86: 32Kb ROM at 0xF6000
    BusX86: 8Kb ROM at 0xFE000
    Machine loaded: ibm5150
    Press ctrl-a to enter debugger, ctrl-c to terminate debugger
    FDC: Mounted "PC DOS 2.00 (Disk 1)" (format PC180K) in drive A
    BusX86: 576Kb RAM at 0x0
    BusX86: 4Kb VIDEO at 0xB0000
    Type ? for help with PCx86 Debugger commands
    AX=0000 BX=0000 CX=0000 DX=0000 SP=0000 BP=0000 SI=0000 DI=0000 
    SS=0000 DS=0000 ES=0000 PS=F002 V0 D0 I0 T0 S0 Z0 A0 P0 C0 
    &FFFF:0000 EA5BE000F0       JMP      &F000:E05B (romBIOS+0x005B)
    running

After about 10 seconds, press CTRL-A and dump the machine's video buffer with `d b000:0`:

	PCx86> d b000:0
	&B000:0000  43 07 75 07 72 07 72 07-65 07 6E 07 74 07 20 07  C.u.r.r.e.n.t. .
	&B000:0010  64 07 61 07 74 07 65 07-20 07 69 07 73 07 20 07  d.a.t.e. .i.s. .
	&B000:0020  54 07 75 07 65 07 20 07-20 07 31 07 2D 07 30 07  T.u.e. . .1.-.0.
	&B000:0030  31 07 2D 07 31 07 39 07-38 07 30 07 20 07 20 07  1.-.1.9.8.0. . .
	&B000:0040  20 07 20 07 20 07 20 07-20 07 20 07 20 07 20 07   . . . . . . . .
	&B000:0050  20 07 20 07 20 07 20 07-20 07 20 07 20 07 20 07   . . . . . . . .
	&B000:0060  20 07 20 07 20 07 20 07-20 07 20 07 20 07 20 07   . . . . . . . .
	&B000:0070  20 07 20 07 20 07 20 07-20 07 20 07 20 07 20 07   . . . . . . . .
	false

To destroy the machine, type `quit` or press CTRL-C.
