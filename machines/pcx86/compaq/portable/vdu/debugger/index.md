---
layout: page
title: COMPAQ Portable (128Kb) with Monochrome Graphics and Debugger
permalink: /machines/pcx86/compaq/portable/vdu/debugger/
redirect_from: /devices/pcx86/machine/compaq/portable/vdu/128kb/debugger/
machines:
  - id: compaq-portable-vdu
    type: pcx86
    debugger: true
    config: /configs/pcx86/xml/machine/compaq/portable/vdu/128kb/debugger/machine.xml
---

{% include machine.html id="compaq-portable-vdu" %}

### Debugging Notes

I originally created the [XML File](/configs/pcx86/xml/machine/compaq/portable/vdu/128kb/debugger/machine.xml)
for this machine by copying an IBM PC configuration with a monochrome display adapter and motherboard SW1 settings
`01000001`.  Note that the SW1 monitor switches, SW1[5] and SW1[6], are both off (`0`), indicating a monochrome monitor.

However, when I booted the machine, the BIOS displayed error 501 in the top left corner.  I tracked this
error down to the following code, which sets the CGA Mode register to 0x21 (instead of the normal 0x2D),
programs the CRTC's CURSORLO/CURSORHI registers to a large value (0xAA55 is masked with 0x3FFF yielding
0x2A55), then reads CURSORHI, expecting 0x2A, and then finally verifies the existence of video memory at
B800:0000; it seems to expect the frame buffer to be addressible at both MDA and CGA addresses.

    &F000:E48D C70672003412     MOV      [0072],1234              ;history=4
    &F000:E493 A06500           MOV      AL,[0065]                ;history=3
    &F000:E496 24F7             AND      AL,F7                    ;history=2
    &F000:E498 BAD803           MOV      DX,03D8                  ;history=1
    >> tr
    videoMDA.outPort(0x03D8,MODE,0x21) at F000:E49B
    AX=0021 BX=E3C6 CX=0004 DX=03D8 SP=0400 BP=2000 SI=E3C2 DI=001E 
    SS=0000 DS=0040 ES=0040 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E49C BF0200           MOV      DI,0002                  ;cycles=12
    >> tr
    AX=0021 BX=E3C6 CX=0004 DX=03D8 SP=0400 BP=2000 SI=E3C2 DI=0002 
    SS=0000 DS=0040 ES=0040 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E49F B955AA           MOV      CX,AA55                  ;cycles=12
    >> tr
    AX=0021 BX=E3C6 CX=AA55 DX=03D8 SP=0400 BP=2000 SI=E3C2 DI=0002 
    SS=0000 DS=0040 ES=0040 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E4A2 81E1FF3F         AND      CX,3FFF                  ;cycles=12
    >> tr
    AX=0021 BX=E3C6 CX=2A55 DX=03D8 SP=0400 BP=2000 SI=E3C2 DI=0002 
    SS=0000 DS=0040 ES=0040 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E4A6 BAD403           MOV      DX,03D4                  ;cycles=16
    >> tr
    AX=0021 BX=E3C6 CX=2A55 DX=03D4 SP=0400 BP=2000 SI=E3C2 DI=0002 
    SS=0000 DS=0040 ES=0040 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E4A9 B30E             MOV      BL,0E                    ;cycles=12
    >> tr
    AX=0021 BX=E30E CX=2A55 DX=03D4 SP=0400 BP=2000 SI=E3C2 DI=0002 
    SS=0000 DS=0040 ES=0040 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E4AB E8C604           CALL     E974 (romBIOS+0x0974)    ;cycles=12
    >> pr
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0E) at F000:E976
    videoMDA.outPort(0x03D5,CRTC.CURSORHI,0x2A) at F000:E97A
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0F) at F000:E980
    videoMDA.outPort(0x03D5,CRTC.CURSORLO,0x55) at F000:E984
    AX=0055 BX=E30F CX=2A55 DX=03D5 SP=0400 BP=2000 SI=E3C2 DI=0002 
    SS=0000 DS=0040 ES=0040 PS=F002 V0 D0 I0 T0 S0 Z0 A0 P0 C0 
    &F000:E4AE 4A               DEC      DX                       ;cycles=164
    >> tr
    AX=0055 BX=E30F CX=2A55 DX=03D4 SP=0400 BP=2000 SI=E3C2 DI=0002 
    SS=0000 DS=0040 ES=0040 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E4AF B00E             MOV      AL,0E                    ;cycles=6
    >> tr
    AX=000E BX=E30F CX=2A55 DX=03D4 SP=0400 BP=2000 SI=E3C2 DI=0002 
    SS=0000 DS=0040 ES=0040 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E4B1 EE               OUT      DX,AL                    ;cycles=12
    >> tr
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0E) at F000:E4B1
    AX=000E BX=E30F CX=2A55 DX=03D4 SP=0400 BP=2000 SI=E3C2 DI=0002 
    SS=0000 DS=0040 ES=0040 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E4B2 42               INC      DX                       ;cycles=12
    >> tr
    AX=000E BX=E30F CX=2A55 DX=03D5 SP=0400 BP=2000 SI=E3C2 DI=0002 
    SS=0000 DS=0040 ES=0040 PS=F002 V0 D0 I0 T0 S0 Z0 A0 P0 C0 
    &F000:E4B3 EC               IN       AL,DX                    ;cycles=6
    >> tr
    videoMDA.inPort(0x03D5,CRTC.CURSORHI) at F000:E4B3
    AX=00FF BX=E30F CX=2A55 DX=03D5 SP=0400 BP=2000 SI=E3C2 DI=0002 
    SS=0000 DS=0040 ES=0040 PS=F002 V0 D0 I0 T0 S0 Z0 A0 P0 C0 
    &F000:E4B4 3AC5             CMP      AL,CH                    ;cycles=12

A [1986 COMPAQ Maintenance and Service Guide](http://www.minuszerodegrees.net/manuals/Compaq%20Portable_Plus_286%20-%20Maintenance%20and%20Service%20Guide.pdf)
indicated that error 501 was a "Display Controller Failure (Video Display or Video Controller Board)".
And the [1982 COMPAQ Operations Guide](/software/pcx86/sys/dos/compaq/1.10/#documents) contained some information on switch
settings on p. 18 of the "320-KBYTE DISK DRIVE" manual (p. 259 of the entire PDF), where it documents only two
values for the SW1 monitor switches:

- `10`: COMPAQ VIDEO BOARD (DEFAULT)
- `00`: COMPAQ VIDEO & IBM MONOCHROME BOARDS

For reference, here are the SW1 monitor switch values originally defined by IBM:

- `11`: NONE
- `01`: TV (COMPOSITE)
- `10`: COLOR DISPLAY
- `00`: MONOCHROME DISPLAY

COMPAQ's descriptions were a bit cryptic, but since I had already tried `00`, there was no harm in trying `10`.

On this new boot attempt, there was no cursor initially, and two different errors were displayed: 301
and 401.  But then the COMPAQ MS-DOS 1.10 date and time prompts appeared -- success!

Ignoring the SW1 monitor error for the moment, the next order of business was to isolate the cause of other
errors: 301 ("Keyboard Error") and 401 ("Printer Error").

It turned out that the printer issue was easily resolved by changing the parallel port's adapter number from 2 to 1,
which changes the port's base I/O address from 0x378 to 0x3BC.  The latter is what's normally used by the built-in
parallel port on an IBM monochrome adapter, so either COMPAQ used the same default address *or* the BIOS assumed that
a monochrome card was installed.  Or something like that.

Next, I'll work on figuring out the keyboard error, and then I'll take a look at how the COMPAQ BIOS detects and
initializes the video hardware.

Keyboard Error
--------------

Setting a write breakpoint on video memory (`bw b800:0`) eventually led me to following code:

    >> pr
    AX=0E20 BX=0007 CX=0000 DX=0008 SP=0400 BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F046 V0 D0 I0 T0 S0 Z1 A0 P1 C0 
    &F000:E5D9 BA0103           MOV      DX,0301                  ;cycles=16
    >> pr
    AX=0E20 BX=0007 CX=0000 DX=0301 SP=0400 BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F046 V0 D0 I0 T0 S0 Z1 A0 P1 C0 
    &F000:E5DC E856FC           CALL     E235 (romBIOS+0x0235)    ;cycles=12

after which " 301" appeared at the top of the screen.  From there, I was able to backtrack to the first
bit code that appeared to tinker with the 8255 (the original PC keyboard interface) via ports 0x60 and 0x61:

    &F000:E538 BA2100           MOV      DX,0021
    &F000:E53B E851FD           CALL     E28F (romBIOS+0x028F)
    &F000:E53E B0FF             MOV      AL,FF
    &F000:E540 EE               OUT      DX,AL
    &F000:E541 E461             IN       AL,61

But first, I was curious about that code at E538 -- which it turns out was simply verifying that all possible
8-bit values could be written to and read back from the PIC's IMR.  Here's what E28F looks like:

    romBIOS+0x028F:
    &F000:E28F 33C0             XOR      AX,AX
    &F000:E291 B90001           MOV      CX,0100
    &F000:E294 EE               OUT      DX,AL
    &F000:E295 EE               OUT      DX,AL
    &F000:E296 EC               IN       AL,DX
    &F000:E297 3AC4             CMP      AL,AH
    &F000:E299 750C             JNZ      E2A7 (romBIOS+0x02A7)
    &F000:E29B EC               IN       AL,DX
    &F000:E29C 3AC4             CMP      AL,AH
    &F000:E29E 7507             JNZ      E2A7 (romBIOS+0x02A7)
    &F000:E2A0 FEC0             INC      AL
    &F000:E2A2 FEC4             INC      AH
    &F000:E2A4 E2EE             LOOP     E294 (romBIOS+0x0294)
    &F000:E2A6 C3               RET     
    &F000:E2A7 58               POP      AX
    &F000:E2A8 FFE3             JMP      BX

And E28F is called many other times, for many other ports, including port 0x61.  And in the process of writing
every possible value to port 0x61, a keyboard reset is triggered, BUT that's not the keyboard reset we care about.
That comes later, in the code below.  At this point, I've also turned on keyboard messages (`m kbd on`) and port
messages (`m port on`) in the PCjs debugger.

    >> tr
    AX=0000 BX=E595 CX=0000 DX=0008 SP=0400 BP=2000 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F002 V0 D0 I0 T0 S0 Z0 A0 P0 C0 
    &F000:E59B E461             IN       AL,61                    ;cycles=19
    >> tr
    AX=004D BX=E595 CX=0000 DX=0008 SP=0400 BP=2000 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F002 V0 D0 I0 T0 S0 Z0 A0 P0 C0 
    &F000:E59D 0C80             OR       AL,80                    ;cycles=18
    >> tr
    AX=00CD BX=E595 CX=0000 DX=0008 SP=0400 BP=2000 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F082 V0 D0 I0 T0 S1 Z0 A0 P0 C0 
    &F000:E59F 24BF             AND      AL,BF                    ;cycles=12
    >> tr
    AX=008D BX=E595 CX=0000 DX=0008 SP=0400 BP=2000 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F086 V0 D0 I0 T0 S1 Z0 A0 P1 C0 
    &F000:E5A1 E661             OUT      61,AL                    ;cycles=12
    >> tr
    keyboard clock line changing to false
    keyboard data line changing to false
    AX=008D BX=E595 CX=0000 DX=0008 SP=0400 BP=2000 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F086 V0 D0 I0 T0 S1 Z0 A0 P1 C0 
    &F000:E5A3 247F             AND      AL,7F                    ;cycles=18
    >> tr
    AX=000D BX=E595 CX=0000 DX=0008 SP=0400 BP=2000 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F002 V0 D0 I0 T0 S0 Z0 A0 P0 C0 
    &F000:E5A5 E661             OUT      61,AL                    ;cycles=12
    >> tr
    keyboard data line changing to true
    chipset.receiveKbdData(0x00)
    AX=000D BX=E595 CX=0000 DX=0008 SP=0400 BP=2000 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F002 V0 D0 I0 T0 S0 Z0 A0 P0 C0 
    &F000:E5A7 BB2800           MOV      BX,0028                  ;cycles=18
    >> tr
    AX=000D BX=0028 CX=0000 DX=0008 SP=0400 BP=2000 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F002 V0 D0 I0 T0 S0 Z0 A0 P0 C0 
    &F000:E5AA E856FC           CALL     E203 (romBIOS+0x0203)    ;cycles=12
    >> u e203
    romBIOS+0x0203:
    &F000:E203 5D               POP      BP
    &F000:E204 B90401           MOV      CX,0104
    &F000:E207 E2FE             LOOP     E207 (romBIOS+0x0207)
    &F000:E209 4B               DEC      BX
    &F000:E20A 75F8             JNZ      E204 (romBIOS+0x0204)
    &F000:E20C FFE5             JMP      BP
    >> g e20c
    running
    stopped (30331 opcodes, 213962 cycles, 1538868214773 ms, 0 hz)
    AX=000D BX=0000 CX=0000 DX=0008 SP=0400 BP=E5AD SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F046 V0 D0 I0 T0 S0 Z1 A0 P1 C0 
    &F000:E20C FFE5             JMP      BP
    >> tr
    AX=000D BX=0000 CX=0000 DX=0008 SP=0400 BP=E5AD SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F046 V0 D0 I0 T0 S0 Z1 A0 P1 C0 
    &F000:E5AD 0C40             OR       AL,40                    ;cycles=19
    >> tr
    AX=004D BX=0000 CX=0000 DX=0008 SP=0400 BP=E5AD SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E5AF E661             OUT      61,AL                    ;cycles=12
    >> tr
    keyboard clock line changing to true
    keyboard reset
    keyboard response 0xAA buffered
    chipset.receiveKbdData(0xAA)
    keyboard data 0xAA delivered
    AX=004D BX=0000 CX=0000 DX=0008 SP=0400 BP=E5AD SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E5B1 B314             MOV      BL,14                    ;cycles=18
    >> tr
    AX=004D BX=0014 CX=0000 DX=0008 SP=0400 BP=E5AD SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E5B3 E84DFC           CALL     E203 (romBIOS+0x0203)    ;cycles=12
    >> pr
    chipset.receiveKbdData(0x00)
    keyboard data 0x00 delivered
    AX=004D BX=0000 CX=0000 DX=0008 SP=0400 BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F046 V0 D0 I0 T0 S0 Z1 A0 P1 C0 
    &F000:E5B6 E83404           CALL     E9ED (romBIOS+0x09ED)    ;cycles=109774
    >> u e9ed
    romBIOS+0x09ED:
    &F000:E9ED E460             IN       AL,60
    &F000:E9EF 86E0             XCHG     AH,AL
    &F000:E9F1 E461             IN       AL,61
    &F000:E9F3 0C80             OR       AL,80
    &F000:E9F5 E661             OUT      61,AL
    &F000:E9F7 247F             AND      AL,7F
    &F000:E9F9 E661             OUT      61,AL
    &F000:E9FB C3               RET     
    >> tr
    AX=004D BX=0000 CX=0000 DX=0008 SP=03FE BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F046 V0 D0 I0 T0 S0 Z1 A0 P1 C0 
    &F000:E9ED E460             IN       AL,60                    ;cycles=31
    >> tr
    chipset.inPort(0x0060,PPI_A): 0x00 at F000:E9ED
    AX=0000 BX=0000 CX=0000 DX=0008 SP=03FE BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F046 V0 D0 I0 T0 S0 Z1 A0 P1 C0 
    &F000:E9EF 86E0             XCHG     AH,AL                    ;cycles=18
    >> tr
    AX=0000 BX=0000 CX=0000 DX=0008 SP=03FE BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F046 V0 D0 I0 T0 S0 Z1 A0 P1 C0 
    &F000:E9F1 E461             IN       AL,61                    ;cycles=12
    >> tr
    AX=004D BX=0000 CX=0000 DX=0008 SP=03FE BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F046 V0 D0 I0 T0 S0 Z1 A0 P1 C0 
    &F000:E9F3 0C80             OR       AL,80                    ;cycles=18
    >> tr
    AX=00CD BX=0000 CX=0000 DX=0008 SP=03FE BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F082 V0 D0 I0 T0 S1 Z0 A0 P0 C0 
    &F000:E9F5 E661             OUT      61,AL                    ;cycles=12
    >> tr
    keyboard data line changing to false
    AX=00CD BX=0000 CX=0000 DX=0008 SP=03FE BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F082 V0 D0 I0 T0 S1 Z0 A0 P0 C0 
    &F000:E9F7 247F             AND      AL,7F                    ;cycles=18
    >> tr
    AX=004D BX=0000 CX=0000 DX=0008 SP=03FE BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E9F9 E661             OUT      61,AL                    ;cycles=12
    >> tr
    keyboard data line changing to true
    chipset.receiveKbdData(0x00)
    keyboard data 0x00 delivered
    AX=004D BX=0000 CX=0000 DX=0008 SP=03FE BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E9FB C3               RET                               ;cycles=18
    >> tr
    AX=004D BX=0000 CX=0000 DX=0008 SP=0400 BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E5B9 86C4             XCHG     AL,AH                    ;cycles=16
    >> tr
    AX=4D00 BX=0000 CX=0000 DX=0008 SP=0400 BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E5BB 3CAA             CMP      AL,AA                    ;cycles=12
    >> tr
    AX=4D00 BX=0000 CX=0000 DX=0008 SP=0400 BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F017 V0 D0 I0 T0 S0 Z0 A1 P1 C1 
    &F000:E5BD 750E             JNZ      E5CD (romBIOS+0x05CD)    ;cycles=12
    >> tr
    AX=4D00 BX=0000 CX=0000 DX=0008 SP=0400 BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F017 V0 D0 I0 T0 S0 Z0 A1 P1 C1 
    &F000:E5CD 0AC0             OR       AL,AL                    ;cycles=20
    >> tr
    AX=4D00 BX=0000 CX=0000 DX=0008 SP=0400 BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F056 V0 D0 I0 T0 S0 Z1 A1 P1 C0 
    &F000:E5CF 7403             JZ       E5D4 (romBIOS+0x05D4)    ;cycles=11
    >> tr
    AX=4D00 BX=0000 CX=0000 DX=0008 SP=0400 BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F056 V0 D0 I0 T0 S0 Z1 A1 P1 C0 
    &F000:E5D4 B020             MOV      AL,20                    ;cycles=20
    >> tr
    AX=4D20 BX=0000 CX=0000 DX=0008 SP=0400 BP=E5B6 SI=0001 DI=4000 
    SS=0000 DS=F000 ES=B800 PS=F056 V0 D0 I0 T0 S0 Z1 A1 P1 C0 
    &F000:E5D6 E8AEFC           CALL     E287 (romBIOS+0x0287)    ;cycles=12
    >> u
    romBIOS+0x05D9:
    &F000:E5D9 BA0103           MOV      DX,0301
    &F000:E5DC E856FC           CALL     E235 (romBIOS+0x0235)
    &F000:E5DF BABC03           MOV      DX,03BC
    &F000:E5E2 EC               IN       AL,DX
    &F000:E5E3 50               PUSH     AX
    &F000:E5E4 BBECE5           MOV      BX,E5EC
    &F000:E5E7 E8A5FC           CALL     E28F (romBIOS+0x028F)
    &F000:E5EA EB06             JMP      E5F2 (romBIOS+0x05F2)

So what do we deduce from the above code?  E5AF is where the keyboard is reset and the standard 0xAA response is
queued up and delivered.  Then the BIOS calls E203, which just spins for a short time, and then it calls E9ED, which
reads the keyboard's response.

The problem is that my Keyboard component wants to deliver the next byte in its queue every *msTransmit* milliseconds,
and that timeout was originally set to 15ms, but apparently the COMPAQ BIOS delay loop at E203 takes longer than 15ms,
and so the previous 0xAA response gets replaced with 0x00 (indicating no more keyboard data) BEFORE the BIOS gets
around to reading the response.

It's possible that I shouldn't replace the 0xAA response unless another scan or response code has been queued up,
but I've debugged too many BIOS handlers, keyboard interrupt handlers, Windows 1.x keyboard device drivers, etc, to
risk changing that behavior now.  Besides, it turns that a simpler and safer solution was to simply bump the Keyboard
component's *msTransmit* value up from 15ms to 25ms.

So that's what I did, and happily, it seems to have cured the 301 keyboard error.

Revisiting the COMPAQ VDU
-------------------------

For a baseline, I first looked at all [IBM 5150 MDA](/devices/pcx86/machine/5150/mda/64kb/debugger/) I/O performed by
the IBM ROM:

    videoMDA.outPort(0x03D8,MODE,0x00) at F000:E0C3
    videoMDA.outPort(0x03B8,MODE,0x01) at F000:E0C9
    videoMDA.outPort(0x03B8,MODE,0x01) at F000:F11E
    videoMDA.outPort(0x03B4,CRTC.INDX,0x00) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.HTOTAL,0x61) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x01) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.HDISP,0x50) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x02) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.HSPOS,0x52) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x03) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.HSWIDTH,0x0F) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x04) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.VTOTAL,0x19) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x05) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.VTOTADJ,0x06) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x06) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.VDISP,0x19) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x07) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.VSPOS,0x19) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x08) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.ILMODE,0x02) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x09) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.MAXSCAN,0x0D) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0A) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.CURSCAN,0x0B) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0B) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.CURSCANB,0x0C) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0C) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.STARTHI,0x00) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0D) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.STARTLO,0x00) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0E) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.CURSORHI,0x00) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0F) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.CURSORLO,0x00) at F000:F14C
    videoMDA.outPort(0x03B8,MODE,0x29) at F000:F190
    bus.outPort(0x03B9,unknown,0x30) at F000:F1C3
    videoMDA.outPort(0x03B8,MODE,0x01) at F000:E392
    videoMDA.outPort(0x03B8,MODE,0x01) at F000:F11E
    videoMDA.outPort(0x03B4,CRTC.INDX,0x00) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.HTOTAL,0x61) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x01) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.HDISP,0x50) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x02) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.HSPOS,0x52) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x03) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.HSWIDTH,0x0F) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x04) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.VTOTAL,0x19) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x05) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.VTOTADJ,0x06) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x06) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.VDISP,0x19) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x07) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.VSPOS,0x19) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x08) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.ILMODE,0x02) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x09) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.MAXSCAN,0x0D) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0A) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.CURSCAN,0x0B) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0B) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.CURSCANB,0x0C) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0C) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.STARTHI,0x00) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0D) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.STARTLO,0x00) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0E) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.CURSORHI,0x00) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0F) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.CURSORLO,0x00) at F000:F14C
    videoMDA.outPort(0x03B8,MODE,0x29) at F000:F190
    bus.outPort(0x03B9,unknown,0x30) at F000:F1C3
    videoMDA.outPort(0x03B8,MODE,0x01) at F000:F11E
    videoMDA.outPort(0x03B4,CRTC.INDX,0x00) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.HTOTAL,0x61) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x01) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.HDISP,0x50) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x02) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.HSPOS,0x52) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x03) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.HSWIDTH,0x0F) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x04) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.VTOTAL,0x19) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x05) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.VTOTADJ,0x06) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x06) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.VDISP,0x19) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x07) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.VSPOS,0x19) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x08) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.ILMODE,0x02) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x09) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.MAXSCAN,0x0D) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0A) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.CURSCAN,0x0B) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0B) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.CURSCANB,0x0C) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0C) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.STARTHI,0x00) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0D) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.STARTLO,0x00) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0E) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.CURSORHI,0x00) at F000:F14C
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0F) at F000:F146
    videoMDA.outPort(0x03B5,CRTC.CURSORLO,0x00) at F000:F14C
    videoMDA.outPort(0x03B8,MODE,0x29) at F000:F190
    bus.outPort(0x03B9,unknown,0x30) at F000:F1C3
    bus.outPort(0x03BC,unknown,0xAA) at F000:E5BE
    bus.inPort(0x03BC,unknown) at F000:E5C1
    *bus.outPort(0x0278,unknown,0xAA) at F000:E5BE
    bus.inPort(0x0278,unknown) at F000:E5C1
    bus.inPort(0x0201,unknown) at F000:E605

NOTE: The writes to port 3B9 are from code that initializes the Color Select (aka Overscan) register, which doesn't
exist on an MDA; on a CGA, the port is 3D9.  Similarly, MDA port 3BC corresponds to CGA port 3DC (Light Pen), but like
3B9, MDA ports 3BC and 3BD do not exist.

One of things we see from the above programming patterns is that the ROM first writes 0x01 to the Mode register,
then reprograms the CRTC, and finally writes 0x29 to the Mode register.

Now let's look at how COMPAQ programs its VDU, when SW1 monitor switches SW1[5] and SW1[6] are set to `00`, indicating
a monochrome monitor:

    PCx86 v1.72.3
    Copyright © 2012-2020 Jeff Parsons <Jeff@pcjs.org>
    License: GPL version 3 or later <http://gnu.org/licenses/gpl.html>
    Loading /devices/pcx86/rom/compaq/portable/100518-001-REVB.json.......
    Loading /devices/pcx86/video/ibm/mda/ibm-mda.json.......
    Loading /disks-demo/pcx86/dos/compaq/1.10/COMPAQ-DOS110B.json.......
    Bus: 8Kb ROM at 000FE000
    FDC: Mounted diskette "COMPAQ MS-DOS 1.10" in drive A
    Bus: 128Kb RAM at 0000
    Bus: 4Kb VIDEO at 000B0000
    Type ? for help with PCx86 Debugger commands
    AX=0000 BX=0000 CX=0000 DX=0000 SP=0000 BP=0000 SI=0000 DI=0000 
    SS=0000 DS=0000 ES=0000 PS=F002 V0 D0 I0 T0 S0 Z0 A0 P0 C0 
    &FFFF:0000 EA5BE000F0       JMP      &F000:E05B (romBIOS+0x005B)
    >> bp f000:e49c
    bp &F000:E49C set
    >> bp 0:7c00
    bp &0000:7C00 set
    >> m video on
    messages on:  video
    >> m port on
    messages on:  port
    >> g
    running
    videoMDA.outPort(0x03B8,MODE,0x01) at F000:E079
    videoMDA.outPort(0x03B4,CRTC.INDX,0x00) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.HTOTAL,0x61) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x01) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.HDISP,0x50) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x02) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.HSPOS,0x52) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x03) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.HSWIDTH,0x0F) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x04) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.VTOTAL,0x19) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x05) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.VTOTADJ,0x06) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x06) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.VDISP,0x19) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x07) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.VSPOS,0x19) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x08) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.ILMODE,0x02) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x09) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.MAXSCAN,0x0D) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0A) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.CURSCAN,0x0B) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0B) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.CURSCANB,0x0C) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0C) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.STARTHI,0x00) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0D) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.STARTLO,0x00) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0E) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.CURSORHI,0x00) at F000:E087
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0F) at F000:E084
    videoMDA.outPort(0x03B5,CRTC.CURSORLO,0x00) at F000:E087
    checkCursor(): cursor shape changed from NaN,NaN to 11,2 (0x0B-0x0C)
    videoMDA.outPort(0x03B8,MODE,0x29) at F000:E0AC
    videoMDA.outPort(0x03D8,MODE,0x01) at F000:E079
    videoMDA.outPort(0x03D4,CRTC.INDX,0x00) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.HTOTAL,0x71) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x01) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.HDISP,0x50) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x02) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.HSPOS,0x5A) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x03) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.HSWIDTH,0x0A) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x04) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.VTOTAL,0x19) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x05) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.VTOTADJ,0x06) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x06) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.VDISP,0x19) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x07) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.VSPOS,0x19) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x08) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.ILMODE,0x02) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x09) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.MAXSCAN,0x0D) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0A) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.CURSCAN,0x0B) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0B) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.CURSCANB,0x0C) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0C) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.STARTHI,0x00) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0D) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.STARTLO,0x00) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0E) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.CURSORHI,0x00) at F000:E087
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0F) at F000:E084
    videoMDA.outPort(0x03D5,CRTC.CURSORLO,0x00) at F000:E087
    videoMDA.outPort(0x03D9,CGA.COLOR,0x30) at F000:E09A
    videoMDA.outPort(0x03D8,MODE,0x2D) at F000:E0AC
    bus.outPort(0x000F,unknown,0x0E) at F000:E0DB
    bus.inPort(0x0201,unknown) at F000:E415
    bus.inPort(0x02FB,unknown) at F000:E436
    bus.outPort(0x02FB,unknown,0x00) at F000:E439
    bus.inPort(0x02FB,unknown) at F000:E43C
     bus.inPort(0x0378,unknown) at F000:E459
    bus.outPort(0x0378,unknown,0x00) at F000:E45C
    bus.inPort(0x0378,unknown) at F000:E45F
    bus.inPort(0x0278,unknown) at F000:E459
    bus.outPort(0x0278,unknown,0x00) at F000:E45C
    bus.inPort(0x0278,unknown) at F000:E45F
    videoMDA.outPort(0x03B8,MODE,0x01) at F000:F167
    videoMDA.outPort(0x03B8,MODE,0x21) at F000:F904
    bus.outPort(0x03B9,unknown,0x30) at F000:F908
    videoMDA.outPort(0x03B4,CRTC.INDX,0x00) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.HTOTAL,0x61) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x01) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.HDISP,0x50) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x02) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.HSPOS,0x52) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x03) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.HSWIDTH,0x0F) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x04) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.VTOTAL,0x19) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x05) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.VTOTADJ,0x06) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x06) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.VDISP,0x19) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x07) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.VSPOS,0x19) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x08) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.ILMODE,0x02) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x09) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.MAXSCAN,0x0D) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0A) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.CURSCAN,0x0B) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0B) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.CURSCANB,0x0C) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0C) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.STARTHI,0x00) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0D) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.STARTLO,0x00) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0E) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.CURSORHI,0x00) at F000:F917
    videoMDA.outPort(0x03B4,CRTC.INDX,0x0F) at F000:F912
    videoMDA.outPort(0x03B5,CRTC.CURSORLO,0x00) at F000:F917
    videoMDA.outPort(0x03B8,MODE,0x29) at F000:F1E5
    videoMDA.outPort(0x03D8,MODE,0x21) at F000:E49B
    bp &F000:E49C hit
    stopped (3880368 opcodes, 51394154 cycles, 1540092234147 ms, 0 hz)
    AX=0021 BX=E3C6 CX=0004 DX=03D8 SP=0400 BP=2000 SI=E3C2 DI=001E 
    SS=0000 DS=0040 ES=0040 PS=F006 V0 D0 I0 T0 S0 Z0 A0 P1 C0 
    &F000:E49C BF0200           MOV      DI,0002
    >> u
    romBIOS+0x049F:
    &F000:E49F B955AA           MOV      CX,AA55
    &F000:E4A2 81E1FF3F         AND      CX,3FFF
    &F000:E4A6 BAD403           MOV      DX,03D4
    &F000:E4A9 B30E             MOV      BL,0E
    &F000:E4AB E8C604           CALL     E974 (romBIOS+0x0974)
    &F000:E4AE 4A               DEC      DX
    &F000:E4AF B00E             MOV      AL,0E
    &F000:E4B1 EE               OUT      DX,AL
    >> u
    romBIOS+0x04B2:
    &F000:E4B2 42               INC      DX
    &F000:E4B3 EC               IN       AL,DX
    &F000:E4B4 3AC5             CMP      AL,CH
    &F000:E4B6 7543             JNZ      E4FB (romBIOS+0x04FB)
    &F000:E4B8 4A               DEC      DX
    &F000:E4B9 B00F             MOV      AL,0F
    &F000:E4BB EE               OUT      DX,AL
    &F000:E4BC 42               INC      DX
    >> u
    romBIOS+0x04BD:
    &F000:E4BD EC               IN       AL,DX
    &F000:E4BE 3AC1             CMP      AL,CL
    &F000:E4C0 7539             JNZ      E4FB (romBIOS+0x04FB)
    &F000:E4C2 F7D1             NOT      CX
    &F000:E4C4 4F               DEC      DI
    &F000:E4C5 75DB             JNZ      E4A2 (romBIOS+0x04A2)
    &F000:E4C7 B800B8           MOV      AX,B800
    &F000:E4CA 8EC0             MOV      ES,AX
    >> u
    romBIOS+0x04CC:
    &F000:E4CC 33DB             XOR      BX,BX
    &F000:E4CE 33FF             XOR      DI,DI
    &F000:E4D0 B90040           MOV      CX,4000
    &F000:E4D3 8BC7             MOV      AX,DI
    &F000:E4D5 32C4             XOR      AL,AH
    &F000:E4D7 7B02             JNP      E4DB (romBIOS+0x04DB)
    &F000:E4D9 FEC0             INC      AL
    &F000:E4DB 32C3             XOR      AL,BL
    >> bp &f000:e4c7
    bp &F000:E4C7 set
    >> g
    running
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0E) at F000:E976
    videoMDA.outPort(0x03D5,CRTC.CURSORHI,0x2A) at F000:E97A
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0F) at F000:E980
    videoMDA.outPort(0x03D5,CRTC.CURSORLO,0x55) at F000:E984
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0E) at F000:E4B1
    videoMDA.inPort(0x03D5,CRTC.CURSORHI): 0x2A at F000:E4B3
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0F) at F000:E4BB
    videoMDA.inPort(0x03D5,CRTC.CURSORLO): 0x55 at F000:E4BD
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0E) at F000:E976
    videoMDA.outPort(0x03D5,CRTC.CURSORHI,0x15) at F000:E97A
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0F) at F000:E980
    videoMDA.outPort(0x03D5,CRTC.CURSORLO,0xAA) at F000:E984
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0E) at F000:E4B1
    videoMDA.inPort(0x03D5,CRTC.CURSORHI): 0x15 at F000:E4B3
    videoMDA.outPort(0x03D4,CRTC.INDX,0x0F) at F000:E4BB
    videoMDA.inPort(0x03D5,CRTC.CURSORLO): 0xAA at F000:E4BD
    bp &F000:E4C7 hit
    stopped (70 opcodes, 762 cycles, 1540092270128 ms, 0 hz)
    AX=00AA BX=E30F CX=EA55 DX=03D5 SP=0400 BP=2000 SI=E3C2 DI=0000 
    SS=0000 DS=0040 ES=0040 PS=F046 V0 D0 I0 T0 S0 Z1 A0 P1 C0 
    &F000:E4C7 B800B8           MOV      AX,B800
