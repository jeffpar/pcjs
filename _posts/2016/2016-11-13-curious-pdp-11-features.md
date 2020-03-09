---
layout: post
title: Curious PDP-11 Features
date: 2016-11-13 13:00:00
permalink: /blog/2016/11/13/
---

Last week, I ran PDPjs through a series of early [PDP-11 Paper Tape Diagnostics](/apps/pdp11/tapes/diags/).
These tests were originally released in 1970 and are documented in such DEC publications as the
[MAINDEC USER REFERENCE MANUAL](https://1drv.ms/b/s!ArcO_mFRe1Z9gp4RIs4XFo4GvOtA6Q)
(October 1973).

[Tests 1-12](/apps/pdp11/tapes/diags/#tests-1-12) (MAINDEC-11-D0AA-PB through MAINDEC-11-D0LA-PB)
uncovered a couple of uninteresting bugs in the emulator that affected the ASRB and RORB instructions, both involving some
incorrect masks.  But aside from those hiccups, the tests ran fine.  Ditto for [Test 13](/apps/pdp11/tapes/diags/#test-13).

Things got much more interesting in [Test 14](/apps/pdp11/tapes/diags/#test-14).  For starters (and as DEC's documentation
points out), the test will immediately fail (HALT) if run on a PDP-11/40 or PDP-11/45, because it tests the RESERVED
instruction trap by using the MUL opcode, which was only reserved on early PDP-11's, like the PDP-11/20.

After switching to a [PDP-11/20 configuration](/devices/pdp11/machine/1120/panel/debugger/), Test 14 uncovered a series of
problems, including:

- The DL11 transmitter must generate an interrupt *immediately* after being enabled
- When a RESERVED instruction trap occurs with an invalid stack pointer, the RESERVED instruction trap must be immediately
followed by a stack overflow trap
- When a hardware interrupt occurs with an invalid stack pointer, the hardware interrupt trap must be immediately followed
by a stack overflow trap (ie, before the first instruction of the hardware interrupt handler is executed)
- When a BUS error occurs while fetching an opcode, the address of the opcode must be pushed by the trap handler
- When a trap handler loads a new PSW that allows a hardware interrupt to be acknowledged, the acknowledgement must be delayed
by one instruction

And finally, the most interesting bug uncovered by Test 14 involved instructions like this:

	MOV     R0,(R0)+

Imagine that R0 contains 1000.  PDPjs would write the value 1000 to address 1000 after auto-incrementing R0 to
1002.

Unfortunately, that's wrong -- for the PDP-11/20 anyway.  Apparently, unlike later (micro-coded) models, the
PDP-11/20 performs both source and destination address calculations *before* reading and writing the source and
destination values.  So, in the above example, the value 1002 must be written to address 1000.

Don't confuse this behavior with the order in which the source and destination operands are processed (source operands
are always decoded first, destination operands next), or with the fact that the auto-increment mode is actually a *post*-
increment mode, whereas auto-decrement is a *pre*-decrement mode.  Those things are also true, but they have nothing to do
with this behavior.

PDPjs resolved this by using a special (negative) value to indicate a register source operand, which is then converted
to the register's current value after both operands have been decoded.  Test 14 now passes.

Next up: [Test 15](/apps/pdp11/tapes/diags/#test-15), which uncovered a couple more problems:

- The DLL transmitter must *not* generate an interrupt if it is immediately *disabled* after being *enabled*
- The (old) RTI instruction needs to manage the Trace flag like the (new) RTT instruction if the machine is a PDP-11/20

Test 15 was written for the earliest PDP-11 models, which didn't have the RTT instruction, so when an RTI instruction
enabled the Trace flag, action on the flag was deferred until after the next instruction.  Newer models moved that deferred
behavior to the RTT instruction, and changed RTI to act on the Trace flag immediately.

This seems like a regrettable decision.  It would have been far better for the new instruction to have the new behavior,
and to leave the original RTI instruction alone, for maximum backward compatibility.  DEC engineers probably regretted not
having separate RTI and RTT instructions from the beginning, and they probably concluded that very little system software
would be affected by changing RTI.

Unfortunately, these diagnostics are one of the casualties of that decision, meaning that this diagnostic will *not* run
successfully on an 11/70.  And [Test 15](/apps/pdp11/tapes/diags/#test-15) is not alone in that regard.
[Test 14](/apps/pdp11/tapes/diags/#test-14) also will not run properly on an 11/70; there again, the problem could have been
avoided if DEC had decided to designate an opcode as *permanently* RESERVED, and then used that for all future RESERVED
instruction tests, instead of using opcodes that would become new instructions later (eg, MUL).

The most recent paper tape diagnostic I've run is the [11/70 CPU EXERCISER](/apps/pdp11/tapes/diags/#md-11-1170-cpu-exerciser),
and after several more bug fixes, PDPjs passes that test now, too.  That's something not even
[SimH](https://github.com/simh/simh) is currently able to do (as of November 2016).

---

It's worth noting that all these diagnostic paper tape images are in the [Absolute Loader](/apps/pdp11/tapes/absloader/) format,
but unlike tapes like [PDP-11 BASIC](/apps/pdp11/tapes/basic/), they don't include a start address, so you have to read the
documentation for each test to learn the starting procedure, including any switches that should be set first.

However, PDPjs makes life a bit simpler for you.  As noted for other [DEC PDP-11 Tape Images](/apps/pdp11/tapes/), any
"Absolute Format" tape can be read directly into RAM using the machine's **Read** button instead of **Load**, allowing you
to bypass the usual multi-step process of loading the [Bootstrap Loader](/apps/pdp11/boot/bootstrap/) in order to load the
[Absolute Loader](/apps/pdp11/tapes/absloader/) in order to load the desired tape.

Moreover, PDPjs' JSON-encoded paper tape images support an *exec* property that allows the start address to be explicitly
set, which will override any start address inside the image.  For these diagnostics, I have set the start address (usually 200)
via the *exec* property.

*[@jeffpar](https://jeffpar.com)*  
*Nov 13, 2016*
