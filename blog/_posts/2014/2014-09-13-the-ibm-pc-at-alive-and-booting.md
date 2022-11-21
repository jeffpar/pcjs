---
layout: post
title: "The IBM PC AT: Alive and Booting"
date: 2014-09-13 11:00:00
category: Releases
permalink: /blog/2014/09/13/
---

My first IBM PC AT (Model 5170) [Test Configuration](/machines/pcx86/ibm/5170/ega/640kb/rev1/debugger/machine.xml)
finally boots to a PC DOS prompt.  The configuration uses the original [IBM Model 5170 ROM BIOS](/machines/pcx86/ibm/5170/rom/),
dated January 10, 1984.
 
Getting through the BIOS "POST" (Power-On Self Test) diagnostics was like running an obstacle course, with various
tests derailing the simulation at every turn.

Sometimes the problems were as simple as missing hardware.  For example, I knew that the PC AT contained two DMA
controllers, for a total of 8 DMA channels, but what I didn't know (or had forgotten) is that it also contained 16
DMA page registers, some of which the BIOS uses as scratch registers.  Since DMA page registers are accessed with
I/O instructions that work identically in both real-mode and protected-mode, they obviously offer some advantages
over RAM, especially when the BIOS hasn't yet tested all the RAM, or determined how much RAM is installed, or set up
descriptors that allow the RAM to be accessed from protected-mode.

Aside from the additional DMA Controller, other major new motherboard components on the PC AT included a second
8259 Interrupt Controller, an 8042 Keyboard ("Kitchen Sink") Controller, and an MC146818 Real-Time Clock/CMOS chip.
The Keyboard Controller and Real-Time Clock/CMOS components required the most tinkering to pass through the ROM BIOS
gauntlet.

For example, at one point, the BIOS ("[TEST.21](https://1drv.ms/b/s!ArcO_mFRe1Z9gqEPV82VBi1so8Tt-A#page202)")
reset the keyboard ("[KBD_RESET](https://1drv.ms/b/s!ArcO_mFRe1Z9gqEPV82VBi1so8Tt-A#page212)"),
which unmasked the keyboard IRQ and waited for an interrupt, using a loop where CX was initialized to zero and then
decremented until either CX wrapped around to zero again *or* an interrupt occurred.  The "TEST.21" code then assumed
that if "KBD_RESET" returned zero in CX, no interrupt had occurred.

Unfortunately, my Keyboard Controller was a bit too fast: it generated an interrupt as soon as the keyboard IRQ was
unmasked; as a result, CX was never decremented, leaving it at zero.

---

Most of the effort getting to this point involved adding support for 80286 protected-mode.  That work is still far
from complete, but getting through multiple real-mode/protected-mode round trips in the BIOS was an important
milestone.  Some of the work was outside the CPU component, such as A20 support and processor reset via the 8042
controller.  Work inside the CPU component included:

 - New 80286 general-purpose instructions (eg, ENTER, LEAVE, new PUSH SP behavior, etc)
 - New protected-mode instructions (eg, ARPL, LGDT, LIDT, LAR, LSL, VERR, VERW, etc)
 - Protected-mode segment loading, addressing, and fault handling

Another "feature" I spent considerable time on was ensuring that 80286 protected-mode support did not adversely
real-mode performance, so that the PC and PC XT simulations still run (almost) as fast as before.  PCjs dynamically
reconfigures itself according to the requirements of the processor and platform it's emulating.

---

There's still no support for [LOADALL](/documents/manuals/intel/80286/loadall/) or triple-fault resets, nor for
call gates or task gates, nor for conforming code segments or expand-down data segments.  80286-specific cycle
counts haven't been incorporated yet, either.  The list of remaining 80286 features is long.

And there's plenty of hardware support left to do: I haven't looked at the AT hard drive controller yet (which
I believe is significantly different from the XT hard drive controller), and the keyboard *barely* works; the 8042
Keyboard Controller and AT keyboard had a number of features that older PC/XT keyboards did not (like LEDs and
programmable repeat rate).

And there are plenty of issues to investigate.  For example, PC DOS is picking up the correct RTC time, but not the
date (PCjs initializes the RTC to the browser's current date/time, unless a hard-coded date/time is specified in the
machine XML).  And diskette I/O seems a bit slow; I'm concerned that the BIOS is spinning its wheels somewhere
unnecessarily.  And even though the test machine is configured with 640Kb of RAM, the BIOS is reporting only 64Kb.

Hmmmm.
