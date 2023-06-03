This directory contains the PCx86 command-line utility [pcx86.js](pcx86.js), which allows you to start a "headless" machine with all TTY I/O redirected to your console.

Load a machine JSON file, such as [ibm5150.json5](ibm5150.json5) or [deskpro386.json5](deskpro386.json5), with the utility's `load` command, either interactively or with the `--cmd` command-line argument.

For example:

	pcx86.js --cmd="load ibm5150.json5"

should produce the following output:

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

After the machine finishes booting (about 10 seconds), you should see the following output:

    Current date is Tue  1-01-1980
    Enter new date: 

You can begin interacting with the machine OR you can press CTRL-A to enter the PCjs debugger.  For example, if you'd like to dump the machine's video buffer, press CTRL-A and type `D B000:0`:

    Enter new date: stopped (326282712 cycles, 68534 ms, 4760888 hz)
    AX=0091 BX=0165 CX=0586 DX=007F SP=0BAA BP=0535 SI=0140 DI=01AA 
    SS=00DB DS=0070 ES=00DB PS=F246 V0 D0 I1 T0 S0 Z1 A0 P1 C0 
    &0070:0125 CB               RETF    
    >> D B000:0  
    &B000:0000  43 07 75 07 72 07 72 07-65 07 6E 07 74 07 20 07  C.u.r.r.e.n.t. .
    &B000:0010  64 07 61 07 74 07 65 07-20 07 69 07 73 07 20 07  d.a.t.e. .i.s. .
    &B000:0020  54 07 75 07 65 07 20 07-20 07 31 07 2D 07 30 07  T.u.e. . .1.-.0.
    &B000:0030  31 07 2D 07 31 07 39 07-38 07 30 07 20 07 20 07  1.-.1.9.8.0. . .
    &B000:0040  20 07 20 07 20 07 20 07-20 07 20 07 20 07 20 07   . . . . . . . .
    &B000:0050  20 07 20 07 20 07 20 07-20 07 20 07 20 07 20 07   . . . . . . . .
    &B000:0060  20 07 20 07 20 07 20 07-20 07 20 07 20 07 20 07   . . . . . . . .
    &B000:0070  20 07 20 07 20 07 20 07-20 07 20 07 20 07 20 07   . . . . . . . .
    >> 

To destroy the machine, type `quit` at the debugger prompt (or press CTRL-C).
