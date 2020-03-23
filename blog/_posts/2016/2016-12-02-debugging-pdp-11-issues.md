---
layout: post
title: Debugging PDP-11 Issues
date: 2016-12-02 13:00:00
permalink: /blog/2016/12/02/
---

I'm still trying to flush out lingering bugs in PDPjs.  I'll give you an example, using the
[PDP-11/70](/machines/dec/pdp11/1170/panel/debugger/) pictured below.

![Image of PDP-11/70 with 256Kb, Front Panel and Debugger](/blog/images/pdp-1170-panel-debugger.png)

After loading the "MD-11 11/70 CPU EXERCISER" paper tape image directly into memory using the **Read** button
(*not* **Load**), and then loading the "RT-11 v4.0" disk image into drive RK0, and then finally issuing a few
preliminary Debugger commands:

	m rk11 on; bp 005254

we're ready to "let 'er rip," either by using the Debugger `g` command or clicking the **Run** button.

You'll see a variety of disk-related messages from the RK11 component in the Control Panel window, which serves
both as the Debugger's output window and as the 11/70's terminal window.  The output begins with:

	running
	
	MAINDEC-11-DEQKC-B...PDP 11/70 CPU EXERCISOR
	RK11: DRESET(0)
	RK11: CRESET(0)
	RK11: DRESET(1)
	RK11: CRESET(1)
	RK11: DRESET(2)
	RK11: CRESET(2)
	RK11: DRESET(3)
	RK11: CRESET(3)
	RK11: DRESET(4)
	RK11: CRESET(4)
	RK11: DRESET(5)
	RK11: CRESET(5)
	RK11: DRESET(6)
	RK11: CRESET(6)
	RK11: DRESET(7)
	RK11: CRESET(7)
	bp 005254 hit
	stopped (43505 instructions, 361875 cycles, 151 ms, 2396523 hz)
	R0=000000 R1=000010 R2=000000 R3=000000 R4=000000 R5=000000 
	SP=001170 PC=005254 PS=000004 IR=000000 SL=000377 T0 N0 Z1 V0 C0 
	005254: 104400                 TRAP  000

At this point, just continue running, because we're interested in the *second* time that particular breakpoint is
hit, not the first:

	>> g
	running
	OPT.CP=145406
	OPERATIONAL SWITCH SETTINGS
	SWITCH                  USE
	  15            HALT ON ERROR
	  14            LOOP ON TEST
	  13            INHIBIT ERROR TYPEOUTS
	  12            INHIBIT UBE
	  11            INHIBIT ITTERATIONS
	  10            BELL ON ERROR
	   9            LOOP ON ERROR
	   8            INHIBIT RELOCATION VIA I/O DEVICE
	   7            INHIBIT TYPEOUT OF THIS TEXT AND SYS SIZE
	   6            INHIBIT RELOCATION
	   5            INHIBIT ROUND ROBIN RELOCATION
	   4            INHIBIT RANDOM DISK ADDRESS
	   3            INHIBIT MBT
	   2            THESE THREE SWITCHES
	   1            ARE ENCODED TO SELECT RELOCATION
	   0            ON THE FOLLOWING DEVICES:
			0...RP11/RP03
			1...RK11/RK05
			2...NOT USED
			3...NOT USED
			4...RH70/RP04
			5...RH70/RS04 OR RS03
			6...NOT USED
			7...NOT USED
	THE FOLLOWING DEVICES AND DRIVES WILL BE USED FOR RELOCATION:
	DEVICE  DRIVES
	RK05    0, 
	TYPE A CHARACTER TO CONTINUE

Type a character in the terminal window, and then you'll see lots of RK11 disk activity messages, culminating in:

	<SOH><SOH><SOH>RK11: WRITE(147:1:2) @00000453610-00000463606
	RK11: WCHK(147:1:2) @00000453610-00000463606
	RK11: READ(147:1:2) @00000654062-00000664060
	RK11: WRITE(43:0:5) @146766-156764
	RK11: WCHK(43:0:5) @146766-156764
	RK11: READ(43:0:5) @00000202760-00000212756
	RK11: WRITE(78:0:9) @00000703572-00000713570
	RK11: WCHK(78:0:9) @00000703572-00000713570
	RK11: READ(78:0:9) @100350-110346
	RK11: WRITE(148:1:2) @056406-066404
	RK11: WCHK(148:1:2) @056406-066404
	RK11: READ(148:1:2) @016222-026220
	RK11: WRITE(183:1:8) @00000413420-00000423416
	RK11: WCHK(183:1:8) @00000413420-00000423416
	RK11: READ(183:1:8) @00000555740-00000565736
	RK11: WRITE(130:1:0) @00000706616-00000716614
	RK11: WCHK(130:1:0) @00000706616-00000716614
	RK11: READ(130:1:0) @00000710512-00000720510
	bp 005254 hit
	stopped (7938529 instructions, 52838707 cycles, 8066 ms, 6550794 hz)
	trapped to 250 (ABORT)
	R0=005064 R1=001766 R2=030340 R3=004000 R4=005064 R5=002044 
	SP=000244 PC=005254 PS=050304 IR=005146 SL=000377 T0 N0 Z1 V0 C0 
	005254: 010702                 MOV   PC,R2

And this is where things finally get interesting, because in a few more instructions, things appear to go horribly
awry:

	trapped to 250 (ABORT)
	R0=005064 R1=001766 R2=030340 R3=004000 R4=005064 R5=002044 
	SP=000244 PC=005254 PS=050304 IR=005146 SL=000377 T0 N0 Z1 V0 C0 
	005254: 010702                 MOV   PC,R2
	>> tr
	R0=005064 R1=001766 R2=005256 R3=004000 R4=005064 R5=002044 
	SP=000244 PC=005256 PS=050300 IR=005146 SL=000377 T0 N0 Z0 V0 C0 
	005256: 062702 000012          ADD   #12,R2                 ;cycles=3
	>> tr
	R0=005064 R1=001766 R2=005270 R3=004000 R4=005064 R5=002044 
	SP=000244 PC=005262 PS=050300 IR=005146 SL=000377 T0 N0 Z0 V0 C0 
	005262: 012707 034240          MOV   #34240,PC              ;cycles=8
	>> tr
	R0=005064 R1=001766 R2=005270 R3=004000 R4=005064 R5=002044 
	SP=000244 PC=034240 PS=050300 IR=005146 SL=000377 T0 N0 Z0 V0 C0 
	034240: 062700 100011          ADD   #100011,R0             ;cycles=5
	>> tr
	R0=105075 R1=001766 R2=005270 R3=004000 R4=005064 R5=002044 
	SP=000244 PC=034244 PS=050310 IR=005146 SL=000377 T0 N1 Z0 V0 C0 
	034244: 020037 177572          CMP   R0,@#177572            ;cycles=8
	>> tr
	R0=105075 R1=001766 R2=005270 R3=004000 R4=005064 R5=002044 
	SP=000244 PC=034250 PS=050311 IR=005146 SL=000377 T0 N1 Z0 V0 C1 
	034250: 001025                 BNE   034324                 ;cycles=11
	>> tr
	R0=105075 R1=001766 R2=005270 R3=004000 R4=005064 R5=002044 
	SP=000244 PC=034324 PS=050311 IR=005146 SL=000377 T0 N1 Z0 V0 C1 
	034324: 104000                 EMT   000                    ;cycles=5

In fact, they may have *already* gone awry when the breakpoint was hit the second time: note the message that the
Debugger displays at that point:

	trapped to 250 (ABORT)

A trap to vector 250 means the MMU triggered an abort.  And the next seven instructions don't look very promising.
The CMP of R0 to MMR0 (the register at #177572) results in a miscompare, and so we're off to the `EMT` instruction --
which, in my limited PDP-11 diagnostic experience, is rarely a good sign.

I've not finished debugging this problem, so we'll leave matters there for the moment.  But while we're here, it's
worth noting a few useful Debugger commands.

- The `da` (dump address) command displays information about a virtual address
- The `dh` (dump history) command displays a set of previously executed instructions

For example, if you want to know more about the memory underlying these instructions, you can use the `da` command on
the virtual address in the PC register:

	>> da pc
                       00,011,100,011,010,100  00034324
                            1,100,011,010,100  00014324
    + SIPAR[1]: 0,000,001,000,000,000,000,000  00100000
    & MMU MASK: 1,111,111,111,111,111,111,111  17777777
    = PHYSICAL: 0,000,001,001,100,011,010,100  00114324

The above output illustrates how virtual address 34324 is translated into physical address 114324, through the
addition of a Page Address Register (SIPAR[1]) with the low 13 bits of the virtual address.

Moreover, you can confirm that both addresses point to the same data, by first dumping 16 bytes at PC, and then
dumping 16 bytes at `%114324` (the % symbol is used to specify physical addresses):

	>> db pc l20
	034324:  000 210 316 021 316 145 264 377  .....e..
	034334:  002 000 237 025 252 000 237 025  ........
	>> db %114324 l20
	114324:  000 210 316 021 316 145 264 377  .....e..
	114334:  002 000 237 025 252 000 237 025  ........

The `dh` command displays instructions from the Debugger's history buffer.  It accepts two arguments: the number of
instructions to "rewind", optionally followed by a number of instructions to display from that point forward.

For example, `dh 20 20` will display the 20 previously executed instructions:

	>> dh 20 20
	20 instructions earlier:
    005230: 012737 020000 170204   MOV   #20000,@#170204        ;history=20
    005236: 005037 170206          CLR   @#170206               ;history=19
    005242: 005037 170200          CLR   @#170200               ;history=18
    005246: 005037 170202          CLR   @#170202               ;history=17
    005252: 000004                 IOT                          ;history=16
    005064: 032737 000040 172516   BIT   #40,@#172516           ;history=15
    005072: 001053                 BNE   005222                 ;history=14
    005222: 005737 001504          TST   @#1504                 ;history=13
    005226: 001411                 BEQ   005252                 ;history=12
    005230: 012737 020000 170204   MOV   #20000,@#170204        ;history=11
    005236: 005037 170206          CLR   @#170206               ;history=10
    005242: 005037 170200          CLR   @#170200               ;history=9
    005246: 005037 170202          CLR   @#170202               ;history=8
    005252: 000004                 IOT                          ;history=7
    005254: 010702                 MOV   PC,R2                  ;history=6
    005256: 062702 000012          ADD   #12,R2                 ;history=5
    005262: 012707 034240          MOV   #34240,PC              ;history=4
    034240: 062700 100011          ADD   #100011,R0             ;history=3
    034244: 020037 177572          CMP   R0,@#177572            ;history=2
    034250: 001025                 BNE   034324                 ;history=1

I could go on and on, and explain how the `r` and `rm` commands can be used to both dump and modify registers, or
how to set read, write, and conditional breakpoints, how to evaluate complex expressions and either print or assign
the result to a variable, and more, but I'm sure you'd much rather discover these things on your own.  :-)
