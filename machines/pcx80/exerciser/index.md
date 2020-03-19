---
layout: page
title: 8080 Exerciser Test Machine
permalink: /machines/pcx80/exerciser/
redirect_from: /devices/pc8080/machine/exerciser/
machines:
  - id: test8080
    type: pcx80
    debugger: true
    config: /configs/pcx80/xml/machine/exerciser/machine.xml
---

This is a test of [PCx80](/machines/pcx80/), a new 8080-based machine emulator recently added to the
PCjs Project.

The test machine below loads a copy of the
[8080 Exerciser](https://web.archive.org/web/20151006085348/http://www.idb.me.uk/sunhillow/8080.html)
(specifically, [8080EX1](/machines/pcx80/ram/exerciser/8080EX1.MAC)) and intercepts the exerciser's CP/M console
calls so that you can see its progress in the Control Panel window.  This is a "headless" test machine
(no keyboard or display), so that's all you get.

The good news: PC8080 passes all the 8080 Exerciser tests.  And it doesn't do it by using all sorts of weird
"flags tables" that most other 8080 emulators seem to fall back on.

Like all the other CPU emulations in the PCjs Project, PC8080 never "calculates" the flags unless/until they are
actually required, which considerably speeds up all arithmetic operations.

Of particular note are the 8080's subtract, compare, and decrement operations, which actually perform addition,
not subtraction, by using two's complement arithmetic in "stages": the first stage (inverting the source operand)
occurs *before* the addition, and the second stage (incrementing the inverted operand) occurs *after* the addition.
And it appears to be the result of the *first* stage, not the second, that determines the state of the Auxiliary
Carry flag (AF).

At 2Mhz, the 8080 Exerciser tests take quite a while, but you can click the speed button while the machine is running
to increase the simulated speed; it will revert to 2Mhz when you exceed the maximum speed that your system supports.

NOTE: The original [8080 Exerciser website](http://www.idb.me.uk/sunhillow/8080.html)
is currently unavailable, so we refer you to the copy on
[archive.org](https://web.archive.org/web/20151006085348/http://www.idb.me.uk/sunhillow/8080.html).
The 8080 Exerciser source code has also been "forked" on [GitHub](https://github.com/begoon/8080ex1).

{% include machine.html id="test8080" %}

8080 Online Resources
---------------------

[8080 Opcode Map](http://pastraiser.com/cpu/i8080/i8080_opcodes.html)
