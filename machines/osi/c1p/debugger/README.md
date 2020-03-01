---
layout: page
title: Ohio Scientific Challenger 1P with Debugger
permalink: /machines/osi/c1p/debugger/
machines:
  - id: c1p8k-debugger
    type: c1p
---

C1Pjs is a JavaScript simulation of the [Ohio Scientific Challenger 1P](/machines/osi/c1p/),
an 8-bit 6502-based microcomputer manufactured in 1978.  The base configuration included an 8Kb BASIC-in-ROM
from Microsoft and 4Kb of RAM (user-expandable to 8Kb).  Below is a simulation of the 8Kb RAM configuration.

{% include machine.html id="c1p8k-debugger" %}

#### Using The Debugger

Type **?** and then **Enter** to display the list of Debugger commands.

Press the **Step** button while the simulated CPU is halted to execute a single instruction;
hold the **Step** button to step through multiple instructions.

The instruction frequency ("f") and history ("p") commands collect data only while the CPU is
running (not stepping) and one or more breakpoints have been set; set a dummy execution breakpoint
(eg, "bp 0") to enable collection.
