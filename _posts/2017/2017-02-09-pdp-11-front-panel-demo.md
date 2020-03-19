---
layout: post
title: "PDP-11 Operator's Console (Front Panel) Demo"
date: 2017-02-09 15:00:00
permalink: /blog/2017/02/09/
machines:
  - id: test1170
    type: pdp11
    debugger: true
    config: /devices/pdp11/machine/1170/panel/debugger/machine-slim.xml
---

As I mentioned in the "[PDP-11 Tutorials](/blog/2017/01/03/)" blog post, I've been working on
some methods for visually illustrating how machine components work.  And the PDP-11/70 Operator's Console,
with its daunting number of lights and switches, seemed like a good candidate.

NOTE: I prefer the generic term "Front Panel" to describe DEC's Operator's Console, because it's less ambiguous and
more generally recognized and understood.

I still haven't written a *real* tutorial on the PDP-11/70 Front Panel, which will require starting at a much more
fundamental level, explaining and demonstrating each switch in turn.  However, I have made more progress on the basic
elements that any tutorial or demo will need: allowing the user to walk through a step-by-step demonstration of some
procedure.

To illustrate, I've copied a multi-step procedure from the page on [Toggle-Ins](/devices/pdp11/machine/1170/panel/debugger/#toggle-ins)
that shows how to use the PDP-11/70 Front Panel to verify that the Memory Management Unit (MMU) is operating properly.

The procedure requires you to enter a small 3-instruction program at address 200 that will write a value (070707) to
address 200, execute the program, and then verify that the MMU relocated that value to address 300 instead.

As you click through each of the steps below, pay attention to the Front Panel.  You should see all the switches being
toggled at each stage.  And as you complete each step, the button for that step will be disabled, so that you don't
forget your place or accidentally repeat a step.  And as you scroll through the steps, the machine should always remain
visible.

Give it a try!

{% include machine.html id="test1170" %}

### MMU Relocation Test

From DEC's [PDP-11/70 Maintenance Service Guide](https://1drv.ms/b/s!ArcO_mFRe1Z9gp5EUrgOBIlXswxuQg),
Chapter 4:

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

The above "toggle-in" can broken down into the following steps.

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
the contents of the DATA register, or use a Dump command (`dw 300 l1`) to dump memory location 300.
