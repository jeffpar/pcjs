---
layout: page
title: PCx86 TestMonitor
permalink: /software/pcx86/test/testmon/
redirect_from: /tests/pcx86/testmon/
machines:
  - id: ibm5170
    type: pcx86
    config: /configs/pcx86/machine/ibm/5170/ega/640kb/rev1/debugger/machine.xml
---

A few PCjs machines, such as the one below, have enabled [TestMonitor](/machines/pcx86/lib/testmon.js) support,
allowing you to use one of the machine's serial ports (usually COM2) to control and issue commands to the machine.

After the machine finishes booting to a DOS prompt, type the DOS command `CTTY COM2`, and then you can interact with
the machine via the [TestMonitor](/machines/pcx86/lib/testctl.js) window.

Typing `Ctrl-T` in that window toggles it between "terminal mode" and "prompt mode".  After the initial `CTTY` command,
the TestMonitor should detect the DOS prompt and enter "dos mode", at which point you can type the command `debug` to
enter "debug mode", where a number of debug macros are available to you, such as:

- `cursor 11 13` (programs the default EGA cursor)
- `cursor 4 19` (programs a block cursor)
- `cursor 4 20` (programs a single-line cursor; see this [PCjs blog post](/blog/2018/03/20/#cursor-wrap-around))

To see all the command modes, and the macros available in each mode, see [tests.json](/software/pcx86/test/testmon/tests.json). 

There is also a [TestMonitor Utility](/software/pcx86/test/testmon/testmon.js) that can be used to control a physical PC
from the command-line.  When using a physical PC, the [INT14.ASM](int14/) Terminate-and-Stay-Resident (TSR) utility
should be installed, to minimize the risk of dropped characters when using the DOS "CTTY" command.

{% include machine.html id="ibm5170" %}
