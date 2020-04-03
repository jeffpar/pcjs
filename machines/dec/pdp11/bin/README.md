This directory contains the PDP11 Node command-line "wrapper" utility [pdp11.js](pdp11.js).

When you run it, be sure to provide a valid machine XML file; e.g.:

	node pdp11.js --cmd="load ../../../devices/pdp11/machine/1170/panel/debugger/machine.xml"

which should then produce the following output:

    Panel object created: test1170.panel
    Device object created: test1170.default
    CPU object created: test1170.cpu
    ROM object created: test1170.m9312
    RAM object created: test1170.ram
    SerialPort object created: test1170.dl11
    PC11 object created: test1170.pc11
    RK11 object created: test1170.rk11
    RL11 object created: test1170.rl11
    RX11 object created: test1170.rx11
    Debugger object created: test1170.debugger
    Bus: Added 8Kb H/W at 17760000
    PDPjs v1.60.3
    Copyright © 2012-2020 Jeff Parsons <Jeff@pcjs.org>
    License: MIT <https://www.pcjs.org/LICENSE.txt>
    Portions adapted from the PDP-11/70 Emulator by Paul Nankervis <http://skn.noip.me/pdp11/pdp11.html>
    Bus: Added 256Kb RAM at 000000
    Computer object created: test1170.computer
    console connected to machine (alt-r for REPL prompt, alt-x to exit)
    ROM: Added 512-byte ROM at 165000
    PC11: Loaded tape "BOOTSTRAP-16KB" (28 bytes)
    RAM: Loaded image "BOOTMON.json"
    CPU: Model 1170
    Type ? for help with PDPjs Debugger commands
    R0=000000 R1=000000 R2=000000 R3=000000 R4=000000 R5=000000 
    SP=000000 PC=140000 PS=000013 PI=000000 SL=000000 T0 N1 Z0 V1 C1 
    140000: 000005                 RESET
    running
    PDP-11 MONITOR V1.0
    
    BOOT> 
