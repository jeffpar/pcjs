---
layout: page
title: PDP-11/70 Control Panels
permalink: /configs/pdp11/panel/1170/
redirect_from: /devices/pdp11/panel/1170/
---

The following Control Panel configurations are available:

* [PDP-11/70 Front Panel](front.xml) (with [Debugger](debugger/front.xml))

Use this [PDP-11/70](/machines/dec/pdp11/1170/panel/debugger/) to see the [PDP-11/70 Front Panel](debugger/front.xml) in action.

### Front Panel Basics

From the [PDP-11/70 Handbook (1979)](https://1drv.ms/b/s!ArcO_mFRe1Z9gp5Qp06CeNiHG8RfCQ?e=PgxRXF), Chapter 10, p. 325:

> ### CONSOLE OPERATION

> The PDP-11/70 console allows direct control of the computer system. It contains a power switch for the CPU,
which is also usually used as the Master Switch for the system. The console is used for starting, stopping, resetting,
and debugging. Lights and switches provide the facilities for monitoring operation, system control, and maintenance.
Debugging and detailed tracing of operations can be accomplished by having the computer execute single instructions or
single cycles. Contents of all locations can be examined, and data can be entered manually from the console switches.

The PDPjs Front Panel replicates most (but not all) the features of a real PDP-11/70 Console.  The switches, which
PDPjs displays as green to make them stand out from the rest of the traditional pink-and-magenta controls, are summarized
below.

### 0..21

Switches 0 to 21 control bits 0 to 21 of the SWITCH register.  The UP position represents a 1, and the DOWN position
represents a 0.   Once all the bits have been set, you can choose to load the contents of the SWITCH register into the
ADDRESS register (as displayed by the top row of LEDs), or directly into the memory location referenced by the ADDRESS
register (where it will become the DATA displayed by the second row of LEDs).

The SWITCH, ADDRESS, and DATA (aka DISPLAY) registers are all internal to the Front Panel hardware, and should not be
confused with CPU registers.

### TEST

This is a momentary switch that is normally in the DOWN position.  When held in the UP position, it turns on all LEDs.
This "lamp test" was more important in the days when the lights were produced by bulbs with filaments that could burn out,
and if you didn't realize that a particular light was "burned out", you could mistake it for a zero.

While the TEST switch is more "cute" than useful on a virtual Front Panel, we have added one "innovation" to the switch:
pressing it also returns all the SWITCH register switches (0-21) to their DOWN position.

### LOAD [ADRS]

This is a momentary switch that is normally in the UP position.  When pressed DOWN, it copies the SWITCH register to the
ADDRESS register.

### EXAM

This is a momentary switch that is normally in the UP position.  When pressed DOWN, it reads the memory location referenced
by the ADDRESS register and displays it in the DATA register.  If pressed repeatedly, each repetition also automatically
adds 2 to the ADDRESS register, making it easier to examine a series of words.  Note that if the CPU registers are being
examined (starting at address 177700), the ADDRESS register will advance by 1 instead of 2.

Another "innovation" unique to PDPjs: if the STEP switch is toggled from the UP to the DOWN position, repeated EXAM or DEP
operations will decrease the ADDRESS register instead of increasing it.

### DEP

This is a momentary switch that is normally in the DOWN position.  When pressed UP, it writes the contents of the SWITCH
register to the memory location referenced by the ADDRESS register, and displays the result in the DATA register.  Like the
EXAM switch, if DEP is pressed repeatedly, each repetition also automatically adds 2 to the ADDRESS register, making it easier
to deposit the same value to a series of words.

### CONT

This is a momentary switch that is normally in the UP position.  When pressed DOWN, it will start the CPU if it's currently
halted.  If the CPU is already running, CONT has no effect.  Also, if the ENABLE/HALT switch is in the DOWN (HALT) position,
then the CPU will continue for only ONE instruction and then stop again.

### ENABLE/HALT

This switch is a toggle that is normally in the UP (ENABLE) position.  If it pressed DOWN while the CPU is running, the CPU will
stop.  Once the CPU is stopped, this switch has no effect, other than determining what CONT will do when pressed.

### STEP

On a real PDP-11, this would select between cycle-stepping vs. instruction-stepping.  Since PDPjs doesn't support cycle-stepping,
this switch has no effect (except as described above when the EXAM or DEP switches are pressed repeatedly).

### START

The START switch is similar to CONT, but it also performs the equivalent a RESET instruction before starting the CPU, so
unless you're starting execution at the beginning of a program, using START instead of CONT to continue execution is probably
not a good idea.  Also, if the ENABLE/HALT switch is in the DOWN (HALT) position, START will still reset the machine but not
execute anything.
