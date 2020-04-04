---
layout: post
title: The Strange Case of the EGA Graphics Scroll Bug
date: 2015-06-05 11:00:00
category: Video
permalink: /blog/2015/06/05/
machines:
  - id: ibm5170
    type: pcx86
    config: /configs/pcx86/machine/ibm/5170/ega/640kb/rev1/testmon/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:1,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

I was playing with different video modes using an [IBM PC AT w/EGA](/configs/pcx86/machine/ibm/5170/ega/640kb/rev1/machine.xml)
and I discovered an odd problem.  NOTE: In the machine below, you can also switch control to the TestMonitor window using
the "CTTY COM2" DOS command and then type the TestMonitor's "mode0e" command to replicate the SYMDEB sequence described below.

{% include machine.html id="ibm5170" %}

For example, when I ran this code:

	C:\>SYMDEB
    -a
    1962:0100  mov ax,e
    1962:0103  int 10
    1962:0105  int 3
    1962:0106  
    -g

the following "text" correctly appeared at the top of the screen, in 640x200 16-color graphics mode 0x0E:

    AX=0B01  BX=0000  CX=0000  DX=0000  SP=E58D  BP=0000  SI=0000  DI=0000  
    DS=1962  ES=1962  SS=1962  CS=1962  IP=0105   NV UP EI PL NZ NA PO NC 
    1962:0105 CC             INT    3                                  
    -

And when I typed "q", then "cls" and finally "dir", the screen filled with DOS directory contents.

But as soon as the screen started to scroll, the screen contents became garbled.  Other EGA graphics modes,
like 640x350 16-color mode 0x10, didn't have this problem.

To investigate, I set a breakpoint in the IBM EGA ROM where the scrolling starts, at 0xC000:12EA (see p.130 of the
"IBM Enhanced Graphics Adapter" Technical Reference document):

	CRANK_A:
		PUSH    CX
		MOV     CL,DL
		SUB     CH,CH
		PUSH    SI
		PUSH    DI
		REP     MOVSB   
		POP     DI
		POP     SI
		ADD     SI,BX
		ADD     DI,BX
		POP     CX
		LOOP    CRANK_A

CX contains 0xC0 (192), which is the number of scan-lines to move up, and BX contains 0x50 (80), the number
of bytes per scan-line.

When the breakpoint was hit, I dumped the video hardware state, using the Debugger's "*d video*" command.
For comparison purposes, I've pasted the corresponding video state for mode 0x10 on the right-hand side.

	breakpoint hit: C000:12EA (exec)
	stopped (175707689 ops, 800060264 cycles, 133470 ms, 5994308 hz)
	AX=020F BX=0050 CX=00C0 DX=1950 SP=0B58 BP=0511 SI=0280 DI=0000 
	SS=011F DS=A000 ES=A000 PS=0246 V0 D0 I1 T0 S0 Z1 A0 P1 C0 
	C000:12EA 51              PUSH     CX
	
	BIOSMODE: 0x0E                          BIOSMODE: 0x10
	CRTC[0x00]: HORZ_TOTAL         0x70     CRTC[0x00]: HORZ_TOTAL         0x5B
	CRTC[0x01]: HORZ_DISP_END      0x4F     CRTC[0x01]: HORZ_DISP_END      0x4F
	CRTC[0x02]: HORZ_BLANK_START   0x59     CRTC[0x02]: HORZ_BLANK_START   0x53
	CRTC[0x03]: HORZ_BLANK_END     0x2D     CRTC[0x03]: HORZ_BLANK_END     0x37
	CRTC[0x04]: HORZ_RETRACE_START 0x5E     CRTC[0x04]: HORZ_RETRACE_START 0x52
	CRTC[0x05]: HORZ_RETRACE_END   0x06     CRTC[0x05]: HORZ_RETRACE_END   0x00
	CRTC[0x06]: VERT_TOTAL         0x04     CRTC[0x06]: VERT_TOTAL         0x6C
	CRTC[0x07]: OVERFLOW           0x11     CRTC[0x07]: OVERFLOW           0x1F
	CRTC[0x08]: PRESET_ROW_SCAN    0x00     CRTC[0x08]: PRESET_ROW_SCAN    0x00
	CRTC[0x09]: MAX_SCAN_LINE      0x00     CRTC[0x09]: MAX_SCAN_LINE      0x00
	CRTC[0x0A]: CURSOR_START       0x00     CRTC[0x0A]: CURSOR_START       0x00
	CRTC[0x0B]: CURSOR_END         0x01     CRTC[0x0B]: CURSOR_END         0x01
	CRTC[0x0C]: START_ADDR_HI      0x00     CRTC[0x0C]: START_ADDR_HI      0x00
	CRTC[0x0D]: START_ADDR_LO      0x00     CRTC[0x0D]: START_ADDR_LO      0x00
	CRTC[0x0E]: CURSOR_ADDR_HI     0x07     CRTC[0x0E]: CURSOR_ADDR_HI     0x01
	CRTC[0x0F]: CURSOR_ADDR_LO     0x80*    CRTC[0x0F]: CURSOR_ADDR_LO     0x41*
	CRTC[0x10]: VERT_RETRACE_START 0xE0     CRTC[0x10]: VERT_RETRACE_START 0x5E
	CRTC[0x11]: VERT_RETRACE_END   0x23     CRTC[0x11]: VERT_RETRACE_END   0x2B
	CRTC[0x12]: VERT_DISP_END      0xC7     CRTC[0x12]: VERT_DISP_END      0x5D
	CRTC[0x13]: OFFSET             0x28     CRTC[0x13]: OFFSET             0x28
	CRTC[0x14]: UNDERLINE          0x00     CRTC[0x14]: UNDERLINE          0x0F
	CRTC[0x15]: VERT_BLANK_START   0xDF     CRTC[0x15]: VERT_BLANK_START   0x5F
	CRTC[0x16]: VERT_BLANK_END     0xEF     CRTC[0x16]: VERT_BLANK_END     0x0A
	CRTC[0x17]: MODE_CTRL          0xE3     CRTC[0x17]: MODE_CTRL          0xE3
	CRTC[0x18]: LINE_COMPARE       0xFF     CRTC[0x18]: LINE_COMPARE       0xFF
	   STATUS1: 0x01                           STATUS1: 0x01
	   ATCDATA: true                           ATCDATA: true
	 ATC[0x00]: PAL00    0x00                ATC[0x00]: PAL00    0x00
	 ATC[0x01]: PAL01    0x01                ATC[0x01]: PAL01    0x01
	 ATC[0x02]: PAL02    0x02                ATC[0x02]: PAL02    0x02
	 ATC[0x03]: PAL03    0x03                ATC[0x03]: PAL03    0x03
	 ATC[0x04]: PAL04    0x04                ATC[0x04]: PAL04    0x04
	 ATC[0x05]: PAL05    0x05                ATC[0x05]: PAL05    0x05
	 ATC[0x06]: PAL06    0x06                ATC[0x06]: PAL06    0x14
	 ATC[0x07]: PAL07    0x07                ATC[0x07]: PAL07    0x07
	 ATC[0x08]: PAL08    0x10                ATC[0x08]: PAL08    0x38
	 ATC[0x09]: PAL09    0x11                ATC[0x09]: PAL09    0x39
	 ATC[0x0A]: PAL0A    0x12                ATC[0x0A]: PAL0A    0x3A
	 ATC[0x0B]: PAL0B    0x13                ATC[0x0B]: PAL0B    0x3B
	 ATC[0x0C]: PAL0C    0x14                ATC[0x0C]: PAL0C    0x3C
	 ATC[0x0D]: PAL0D    0x15                ATC[0x0D]: PAL0D    0x3D
	 ATC[0x0E]: PAL0E    0x16                ATC[0x0E]: PAL0E    0x3E
	 ATC[0x0F]: PAL0F    0x17                ATC[0x0F]: PAL0F    0x3F
	 ATC[0x10]: MODE     0x01                ATC[0x10]: MODE     0x01
	 ATC[0x11]: OVERSCAN 0x00                ATC[0x11]: OVERSCAN 0x00
	 ATC[0x12]: PLANES   0x0F                ATC[0x12]: PLANES   0x0F
	 ATC[0x13]: HORZPAN  0x00                ATC[0x13]: HORZPAN  0x00
	 GRC[0x00]: SRESET   0x00                GRC[0x00]: SRESET   0x00
	 GRC[0x01]: ESRESET  0x00                GRC[0x01]: ESRESET  0x00
	 GRC[0x02]: COLORCMP 0x00                GRC[0x02]: COLORCMP 0x00
	 GRC[0x03]: DATAROT  0x00                GRC[0x03]: DATAROT  0x00*
	 GRC[0x04]: READMAP  0x00                GRC[0x04]: READMAP  0x00
	 GRC[0x05]: MODE     0x11*               GRC[0x05]: MODE     0x00
	 GRC[0x06]: MISC     0x05                GRC[0x06]: MISC     0x05
	 GRC[0x07]: COLORDC  0x0F                GRC[0x07]: COLORDC  0x0F
	 GRC[0x08]: BITMASK  0xFF                GRC[0x08]: BITMASK  0xFF
	 SEQ[0x00]: RESET    0x03                SEQ[0x00]: RESET    0x03
	 SEQ[0x01]: CLOCKING 0x01                SEQ[0x01]: CLOCKING 0x01
	 SEQ[0x02]: MAPMASK  0x0F*               SEQ[0x02]: MAPMASK  0x0F*
	 SEQ[0x03]: CHARMAP  0x00                SEQ[0x03]: CHARMAP  0x00
	 SEQ[0x04]: MEMMODE  0x06                SEQ[0x04]: MEMMODE  0x06
		  FEAT: 0x02	                          FEAT: 0x02
		  MISC: 0x23	                          MISC: 0xA7
	   STATUS0: 0x10                           STATUS0: 0x10
	   LATCHES: 0x00000000                     LATCHES: 0x00000000
		ACCESS: 0x1411                          ACCESS: 0x0400

One of the apparent oddities is that, for mode 0x0E, the GRC Mode Register was programmed with 0x11, whereas
for mode 0x10, it was programmed with 0x00.  Why would mode 0x0E want to set the ODDEVEN bit during the scroll,
when it hadn't been set during any other writes to the screen?

At this point, I dumped the instruction history buffer a bit ("*dh 100*"), and noticed this GRC write:

	C000:1582 8BC5            MOV      AX,BP                ;history=33
	C000:1584 B603            MOV      DH,03                ;history=32
	C000:1586 B2CE            MOV      DL,CE                ;history=31
	C000:1588 E88AF7          CALL     0D15                 ;history=30
	C000:0D15 86C4            XCHG     AL,AH                ;history=29
	C000:0D17 EE              OUT      DX,AL                ;history=28
	C000:0D18 42              INC      DX                   ;history=27
	C000:0D19 86C4            XCHG     AL,AH                ;history=26
	C000:0D1B EE              OUT      DX,AL                ;history=25
	C000:0D1C 4A              DEC      DX                   ;history=24

So I looked farther back and saw where BP was set:

	C000:1522 BA00A0          MOV      DX,A000              ;history=97
	C000:1525 BD1105          MOV      BP,0511              ;history=96

Here's the complete function:

	GR_ST_1:
		MOV     DX,A000
		MOV     BP,0511
		CMP     AH,0F
		JC      1535
		CALL    14F7
		JNC     1535
		MOV     BP,0501
		RET     

OK, so any (EGA) graphics mode below 0x0F is going to the trigger the use of Write Mode 1 with the ODDEVEN bit set.
And sure enough, the scrolling bug also occurs when using 320x200 16-color mode 0x0D.

It's also worth noting that, whenever the ODDEVEN bit of the GRC Mode Register is set, the SEQUENTIAL bit in the Sequencer
Memory Mode Register is supposed to be clear (and vice versa -- those two bits are supposed to always be oppositely set).
But here, the IBM EGA BIOS hasn't done that.  One wonders if that was a mistake....

Another bit of trivia: while dumping the frame buffer in a VGA text mode in a different emulator, I discovered that
when I turned off the ODDEVEN bit in the GRC Mode Register, odd bytes would still appear from plane 1; it wasn't until I
*also* turned off the CHAIN bit in the GRC Miscellaneous Register that the odd bytes would no longer appear.  But,
that could have just been an idiosyncrasy of that particular emulator.

As a result of all these observations, and more importantly, to make EGA scrolling work properly in modes 0x0D and 0x0E,
I've changed the Video component to use odd/even memory functions *only* when the SEQUENTIAL bit (bit 2) of the
Sequencer's Memory Mode Register is clear, instead of relying on the ODDEVEN bit (bit 4) of the Graphics Controller's Mode
Register.

To be continued....  because I've barely scratched the surface of all the side-effects of EGA/VGA odd/even addressing,
and I hope to do some testing on real hardware in the near future.
