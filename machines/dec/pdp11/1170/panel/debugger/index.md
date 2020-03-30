---
layout: page
title: DEC PDP-11/70 with 256Kb, Front Panel, and Debugger
permalink: /machines/dec/pdp11/1170/panel/debugger/
redirect_from: /devices/pdp11/machine/1170/panel/debugger/
machines:
  - id: test1170
    type: pdp11
    debugger: true
    config: /configs/pdp11/machine/1170/panel/debugger/machine-slim.xml
---

The machine below is a PDP-11/70 with a stripped-down interface that includes our stylized Front Panel and
a "teletype" I/O window connected to the PDP-11/70's serial port.  The I/O window is shared with the built-in
PDPjs Debugger.

To make it easier to interact with the Front Panel [Toggle-In Demos](#toggle-ins) below, we've kept this machine's UI
simple, so there are no other I/O devices attached.  Paul Nankervis' [PDP-11 Boot Monitor](/software/dec/pdp11/boot/monitor/)
is preloaded at address 140000, and the [M9312 ROM](/machines/dec/pdp11/rom/M9312/) is installed at address 165000.

For more full-featured PDP-11/70 machines that also include a Debugger, see:

- [PDP-11/70 running CPU Exerciser](cpuexer/)
- [PDP-11/70 ready to boot RSTS/E](rsts/)
- [PDP-11/70 ready to boot RT-11](rt11/)
- [PDP-11/70 ready to boot XXDP+ Diagnostics](xxdp/)

{% include machine.html id="test1170" %}

### Toggle-Ins

As DEC notes in the [PDP-11/70 Maintenance Service Guide](https://1drv.ms/b/s!ArcO_mFRe1Z9gp5EUrgOBIlXswxuQg?e=fmoskM),
Chapter 4: "There are several useful toggle-ins that are probably not very well known."  Excerpts are provided below.  If you're
not sure how to "toggle in" code using a Front Panel, check out [Front Panel Basics](/configs/pdp11/panel/1170/#front-panel-basics).

However, since the above machine also includes the PDPjs Debugger, you'll find that it's much easier to use the
Debugger commands described below to load and execute these "toggle-ins". 

### Memory Management

	Use the following toggle-in to verify the correct operation of Memory Management Relocation.
	
	200/012737          MOV #400,@#177572 (load maint. bit in MMRO)
	202/000400
	204/177572
	206/012737          MOV #070707,@#200 (move 070707 to virtual 200)
	210/070707
	212/000200
	214/000000          HLT
	
	300/000300          Preset loc 300 to 300
	
	17772300/077406     Set Kernel I PDR 0 to R/W 4K page
	17772340/000001     Set Kernel I PAR 0 to (Base address 100)
	
	Load Address 200
	Start               Display = 000216 (Halt@214)
	Load Address 300
	Exam                Display = 070707 ... Relocation works

Step 1: Load ADDRESS register with 200.

{% include machine/command.html type='clickOnce' label='LOAD 200' machine='test1170' command='script' value='set Panel SR 200; sleep 500; hold Panel LOAD 250' %}

Step 2: Deposit 012737 at ADDRESS 200.

{% include machine/command.html type='clickOnce' label='DEPOSIT 012737' machine='test1170' command='script' value='set Panel SR 012737; sleep 500; hold Panel DEP 250' %}

Step 3: Deposit 000400 at ADDRESS 202.

{% include machine/command.html type='clickOnce' label='DEPOSIT 000400' machine='test1170' command='script' value='set Panel SR 000400; sleep 500; hold Panel DEP 250' %}

Step 4: Deposit 177572 at ADDRESS 204.

{% include machine/command.html type='clickOnce' label='DEPOSIT 177572' machine='test1170' command='script' value='set Panel SR 177572; sleep 500; hold Panel DEP 250' %}

Step 5: Deposit 012737 at ADDRESS 206.

{% include machine/command.html type='clickOnce' label='DEPOSIT 012737' machine='test1170' command='script' value='set Panel SR 012737; sleep 500; hold Panel DEP 250' %}

Step 6: Deposit 070707 at ADDRESS 210.

{% include machine/command.html type='clickOnce' label='DEPOSIT 070707' machine='test1170' command='script' value='set Panel SR 070707; sleep 500; hold Panel DEP 250' %}

Step 7: Deposit 000200 at ADDRESS 212.

{% include machine/command.html type='clickOnce' label='DEPOSIT 000200' machine='test1170' command='script' value='set Panel SR 000200; sleep 500; hold Panel DEP 250' %}

Step 8: Deposit 000000 at ADDRESS 214.

{% include machine/command.html type='clickOnce' label='DEPOSIT 000000' machine='test1170' command='script' value='set Panel SR 000000; sleep 500; hold Panel DEP 250' %}

Step 9: Load ADDRESS register with 300.

{% include machine/command.html type='clickOnce' label='LOAD 300' machine='test1170' command='script' value='set Panel SR 300; sleep 500; hold Panel LOAD 250' %}

Step 10: Deposit 300 at ADDRESS 300.

{% include machine/command.html type='clickOnce' label='DEPOSIT 300' machine='test1170' command='script' value='hold Panel DEP 250' %}

Step 11: Load ADDRESS register with 17772300.

{% include machine/command.html type='clickOnce' label='LOAD 17772300' machine='test1170' command='script' value='set Panel SR 17772300; sleep 500; hold Panel LOAD 250' %}

Step 12: Deposit 077406 at ADDRESS 17772300 ("Set Kernel I PDR 0 to R/W 4K page").

{% include machine/command.html type='clickOnce' label='DEPOSIT 077406' machine='test1170' command='script' value='set Panel SR 077406; sleep 500; hold Panel DEP 250' %}

Step 13: Load ADDRESS register with 17772340.

{% include machine/command.html type='clickOnce' label='LOAD 17772340' machine='test1170' command='script' value='set Panel SR 17772340; sleep 500; hold Panel LOAD 250' %}

Step 14: Deposit 000001 at ADDRESS 17772340 ("Set Kernel I PAR 0 to (Base address 100").

{% include machine/command.html type='clickOnce' label='DEPOSIT 000001' machine='test1170' command='script' value='set Panel SR 000001; sleep 500; hold Panel DEP 250' %}

Step 15: Load ADDRESS register with 200.

{% include machine/command.html type='clickOnce' label='LOAD 200' machine='test1170' command='script' value='set Panel SR 200; sleep 500; hold Panel LOAD 250' %}

Step 16: Set ENABLE and toggle START.

{% include machine/command.html type='clickOnce' label='START' machine='test1170' command='script' value='set Panel ENABLE 1; sleep 500; hold Panel START 250' %}

Step 17: Load ADDRESS register with 300.

{% include machine/command.html type='clickOnce' label='LOAD 300' machine='test1170' command='script' value='set Panel SR 300; sleep 500; hold Panel LOAD 250' %}

Step 18: Examine ADDRESS 300.

{% include machine/command.html type='clickOnce' label='EXAM' machine='test1170' command='script' value='hold Panel EXAM 250' %}

At this point, the DATA register should display `070707`.  You can also use the PCjs Debugger's `rm` command to verify
the contents of the DATA register (DR), or use a Dump command (`dw 300 l1`)) to dump memory location 300.

In fact, using the PDPjs Debugger, it's much easier to enter the above "toggle-in" with the following commands (the
semicolons are optional; they just make it easier to paste an entire set of commands into the Debugger at once):

	e 200 012737 000400 177572 012737 070707 000200 000000;
	e 300 000300;
	e 17772300 077406;
	e 17772340 000001;
	r pc 200;
	g

which should produce these results:

	>> e 200 012737 000400 177572 012737 070707 000200 000000
	changing 000200 from 000000 to 012737
	changing 000202 from 000000 to 000400
	changing 000204 from 000000 to 177572
	changing 000206 from 000000 to 012737
	changing 000210 from 000000 to 070707
	changing 000212 from 000000 to 000200
	changing 000214 from 000000 to 000000
	>> e 300 000300
	changing 000300 from 000000 to 000300
	>> e 17772300 077406
	changing 00017772300 from 000000 to 077406
	>> e 17772340 000001
	changing 00017772340 from 000000 to 000001
	>> r pc 200
	updated registers:
	R0=000000 R1=000000 R2=000000 R3=000000 R4=000000 R5=000000 
	SP=000000 PC=000200 PS=000013 SW=00000000 T0 N1 Z0 V1 C1 
	000200: 012737 000400 177572   MOV   #400,@#177572
	>> g
	running
	stopped (3 instructions, 32 cycles, 9 ms, 3556 hz)
	R0=000000 R1=000000 R2=000000 R3=000000 R4=000000 R5=000000 
	SP=000000 PC=000214 PS=000001 SW=00000000 T0 N0 Z0 V0 C1 
	000214: 000000                 HALT

and dumping the contents of virtual address 300 should display 070707:

	>> d 300 l1
	000300  070707  

NOTE: By long-standing convention, all PCjs Debuggers use the "e" command to edit memory and the "d" command to dump
memory.  Don't confuse those letters with the "EXAM" and "DEP" switches on the PDP-11 Front Panel, because they perform
*opposite* operations.

### Unibus Map Checkout

	Use the following console operating procedure to verify the correct operation of the Unibus Map.
	
	Load Address        500
	Deposit             125252      Known Data
	
	Load Address        17000500
	Examine             125252      Data Path Ok
	
	Load Address        17000700
	Deposit             070707      Known Data
	
	Load Address        17770202    Map register 0 Hi
	Deposit             000000      Relocation constant
	
	Load Address        17770200    Map register 0 Lo
	Deposit             000200      Relocation constant
	
	Load Address        17772516    MMR3
	Deposit             000040      Enable map
	
	Load address        17000500    Relocates to 700
	Examine             070707      ... Relocated ok

The above "toggle-in" can be performed with the PDPjs Debugger as follows:

	e 500 125252;
	d 17000500 l1;
	e 17000700 070707;
	e 17770202 000000;
	e 17770200 000200;
	e 17772516 40;
	d 17000500 l1

which should produce these results:

	>> e 500 125252
	changing 000500 from 000000 to 125252
	>> d 17000500 l1
	00017000500:  125252  
	>> e 17000700 070707
	changing 00017000700 from 000000 to 070707
	>> e 17770202 000000
	changing 00017770202 from 000000 to 000000
	>> e 17770200 000200
	changing 00017770200 from 000000 to 000200
	>> e 17772516 40
	changing 00017772516 from 000000 to 000040
	>> d 17000500 l1
	00017000500:  070707  

If you also want to see all the hardware register activity, use the Debugger's "m bus on; m device on" command
to turn Bus+Device messages on:

	>> m bus on
	messages on:  bus
	>> m device on
	messages on:  device
	>> e 500 125252
	changing 000500 to 125252
	>> d 17000500 l1
	00017000500:  125252  
	>> e 17000700 070707
	changing 00017000700 to 070707
	>> e 17770202 000000
	changing 00017770202 to 000000
	UNIMAP1.writeWord(00017770202,000000)
	>> e 17770200 000200
	changing 00017770200 to 000200
	UNIMAP0.writeWord(00017770200,000200)
	>> e 17772516 40
	changing 00017772516 to 000040
	>> d 17000500 l1
	00017000500:  070707  

### Memory Clear Program

	Use this toggle-in to clear all of memory from location 0 to system size.
	
	LOCATION        CONTENTS    INSTRUCTIONS & NOTES
	
	17772300        077406      KIPDR0
	17772316        077406      KIPDR7 = I/O page for program
	17772340        000000      KIPAR0          ; Load 200 if using trap catchers
	17772356        177600      KIPAR7 = I/O page for program
	17777700        000000      R0 = Start Virtual Address
	17777701        172340      R1 = KIPAR0 Address
	17777702        177572      R2 = MMR0 Address
	17777703        177760      R3 = System size register Address
	17777704        172516      R4 = MMR3 Address
	17777705        Pattern     R5 = Desired pattern or "0"
	17777706        177676      R6 = Stack pointer
	17777776        000000      PSW = 0
	17772240        012714      MOV #20,(R4)    ; Enable 22-bit Mapping
	17772242        000020      
	17772244        005212      INC (R2)        ; Enable Memory Management      
	17772246        010520  1$: MOV R5,(R0)+    ; Data to memory      
	17772250        020027      CMP R0,#17776   ; Top of Page 0?
	17772252        017776
	17772254        003774      BLE 1$
	17772256        062711      ADD #200,(R1)   ; Step Page
	17772260        000200
	17772262        021311      CMP (R3),(R1)   ; Top of Memory?
	17772264        003402      BLE 2$
	17772266        005000      CLR R0          ; Start at Virtual Address 0
	17772270        000766      BR  1$          ; [NOTE: DEC's guide incorrecly lists this opcode as 000776 --JP]
	17772272        005312  2$: DEC (R2)        ; Disable Relocation
	17772274        000000      HLT
	
	Load address    172240
	Start

The above "toggle-in" can be entered with the PDPjs Debugger as follows:

	e 17772300 077406;
	e 17772316 077406;
	e 17772340 000000;
	e 17772356 177600;
	e 17777700 000000;
	e 17777701 172340;
	e 17777702 177572;
	e 17777703 177760;
	e 17777704 172516;
	e 17777705 123123;
	e 17777706 177676;
	e 17777776 000000;
	e 17772240 012714 000020 005212 010520 020027 017776 003774 062711;
	e 17772260 000200 021311 003402 005000 000766 005312 000000;
	r pc 172240

which should produce the following results when Bus+MMU messages are turned on ("m bus on; m mmu on"):

	>> m bus on
	messages on:  bus
	>> m mmu on
	messages on:  mmu
	>> e 17772300 077406
	changing 00017772300 to 077406
	KIPDR0.writeWord(00017772300,077406)
	>> e 17772316 077406
	changing 00017772316 to 077406
	KIPDR7.writeWord(00017772316,077406)
	>> e 17772340 000000
	changing 00017772340 to 000000
	KIPAR0.writeWord(00017772340,000000)
	>> e 17772356 177600
	changing 00017772356 to 177600
	KIPAR7.writeWord(00017772356,177600)
	>> e 17777700 000000
	changing 00017777700 to 000000
	R0SET0.writeWord(00017777700,000000)
	>> e 17777701 172340
	changing 00017777701 to 172340
	R1SET0.writeWord(00017777701,172340)
	>> e 17777702 177572
	changing 00017777702 to 177572
	R2SET0.writeWord(00017777702,177572)
	>> e 17777703 177760
	changing 00017777703 to 177760
	R3SET0.writeWord(00017777703,177760)
	>> e 17777704 172516
	changing 00017777704 to 172516
	R4SET0.writeWord(00017777704,172516)
	>> e 17777705 123123
	changing 00017777705 to 123123
	R5SET0.writeWord(00017777705,123123)
	>> e 17777706 177676
	changing 00017777706 to 177676
	R6KERNEL.writeWord(00017777706,177676)
	>> e 17777776 000000
	changing 00017777776 to 000000
	PSW.writeWord(00017777776,000000)
	>> e 17772240 012714 000020 005212 010520 020027 017776 003774 062711
	changing 00017772240 to 012714
	SIPAR0.writeWord(00017772240,012714)
	changing 00017772242 to 000020
	SIPAR1.writeWord(00017772242,000020)
	changing 00017772244 to 005212
	SIPAR2.writeWord(00017772244,005212)
	changing 00017772246 to 010520
	SIPAR3.writeWord(00017772246,010520)
	changing 00017772250 to 020027
	SIPAR4.writeWord(00017772250,020027)
	changing 00017772252 to 017776
	SIPAR5.writeWord(00017772252,017776)
	changing 00017772254 to 003774
	SIPAR6.writeWord(00017772254,003774)
	changing 00017772256 to 062711
	SIPAR7.writeWord(00017772256,062711)
	>> e 17772260 000200 021311 003402 005000 000766 005312 000000
	changing 00017772260 to 000200
	SDPAR0.writeWord(00017772260,000200)
	changing 00017772262 to 021311
	SDPAR1.writeWord(00017772262,021311)
	changing 00017772264 to 003402
	SDPAR2.writeWord(00017772264,003402)
	changing 00017772266 to 005000
	SDPAR3.writeWord(00017772266,005000)
	changing 00017772270 to 000766
	SDPAR4.writeWord(00017772270,000766)
	changing 00017772272 to 005312
	SDPAR5.writeWord(00017772272,005312)
	changing 00017772274 to 000000
	SDPAR6.writeWord(00017772274,000000)
	>> r pc 172240
	updated registers:
	R0=000000 R1=172340 R2=177572 R3=177760 R4=172516 R5=123123 
	SP=177676 PC=172240 PS=000000 SW=00000000 T0 N0 Z0 V0 C0 
	SIPAR0.readWord(172240): 012714
	SIPAR1.readWord(172242): 000020
	SIPAR0.readWord(172240): 012714
	SIPAR1.readWord(172242): 000020
	172240: 012714 000020          MOV   #20,@R4

All the "Supervisor I Page Address Register" (SIPAR) and "Supervisor D Page Address Register" (SDPAR) reads
and writes merely reflect where the above code is being loaded and executed from; those registers are essentially
being used as scratch RAM.

As the **Maintenance Service Guide** goes on to say:

	The program should halt when all of memory is cleared. If it doesn't halt, examine the CPU error,
	Memory system error and HI/LO error address registers to determine the cause.  Trap catchers can be
	used by depositing 200 in KIPAR 0 (17772340) instead of zero, and setting up vector locations with
	their address + 2 and the Vector + 2 with a 0 (halt).
	
	Note: When loading the program you must be in console physical [i.e., the ADDRESS select switch
	must be set to "CONS PHY", which is the default setting of the PDPjs Front Panel].

Before running the above code, you should turn messages off (eg, "m bus off"); otherwise, the quantity of
messages will slow execution to a crawl.

If you want to set an execution breakpoint in the above code, make sure you use the appropriate virtual (16-bit)
address.  For example, to break on this instruction:

	17772256        062711      ADD #200,(R1)   ; Step Page

use the command "bp 172256", because while the code *is* physically located at 17772256, it is being executed at
virtual address 172256, and execution breakpoints operate on 16-bit virtual addresses.
