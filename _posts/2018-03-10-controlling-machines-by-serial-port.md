---
layout: post
title: Controlling Machines by Serial Port
date: 2018-03-10 10:00:00
permalink: /blog/2018/03/10/
machines:
  - id: ibm5170
    type: pcx86
    config: /devices/pcx86/machine/5170/ega/640kb/rev1/testmon/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:1,path:"/disks-demo/pcx86/drives/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
    autoType: CTTY COM2\r
---

I recently added a new PCjs [TestMonitor](/modules/pcx86/lib/testmon.js) component that is able to deliver user-defined
commands to a PCjs machine via a serial port.  TestMonitor is built into PCx86, and there is also a
[TestMonitor Utility](/tests/pcx86/testmon/testmon.js) that can issue commands to a *physical* machine, making it easy to
compare operations between simulated and actual hardware.

More information on [Controlling Physical PCs](#controlling-physical-pcs) is available below.

You can test it with the PCjs machine below, which has been configured with a [TestMonitor](/modules/pcx86/lib/testctl.js)
window, as well as a hard disk with [MS-DOS 3.20](/disks/pcx86/dos/microsoft/3.20/) and [SYMDEB 4.00](/blog/2018/02/25/)
pre-installed.  After the "CTTY COM2" DOS command is entered, all further DOS input/output is redirected to COM2, which is
connected to the TestMonitor window.

If you want to interact with DOS directly, you can press Ctrl-T to enter the TestMonitor's *terminal* mode; press it again
to return to *prompt* mode.  In *prompt* mode, the TestMonitor monitors the serial port for recognized prompts --
initially, a DOS prompt (eg, "C:\&gt;").  As soon as it detects a DOS prompt, TestMonitor automatically switches from *prompt*
mode to *dos* mode:

    PCx86 TestMonitor v1.60.2
    Use Ctrl-T to toggle terminal mode (COM2)
    mode: terminal
    mode: prompt
    mode: dos

The set of "dos" commands currently defined in [tests.json](/tests/pcx86/testmon/tests.json) includes "symdeb".  Type that
command into the TestMonitor window and press enter:

    symdeb

Assuming TestMonitor successfully runs SYMDEB, it should detect the SYMDEB prompt, as indicated by the following message:

    mode: symdeb

At that point, you can type any of the "symdeb" commands defined by [tests.json](/tests/pcx86/testmon/tests.json).  For example,
one of those commands is "reboot".  Typing "reboot" and pressing enter sends the following SYMDEB command sequence to the
machine:

    a cs:ip
    jmp ffff:0
    
    g

which should cause the machine to reboot.

Another example is the "curtest" (cursor test) command, which uses a simple for-loop to repeatedly change the starting
and ending scan-line of the cursor, and then waits for you to press a key after each change:

    "curtest": "for i=0 to 13 { cursor $i $i; printf('cursor %d %d\n',$i,$i); wait; }",

The "curtest" command relies on the "cursor" command:

    "cursor": "o 3d4 a\ro 3d5 %1\ro 3d4 b\ro 3d5 %2\r",

which issues two pairs of SYMDEB output ("o") commands to the machine's CRT controller.

Note that for-loops use `$variable` substitution and printf() calls use traditional `%specifier` substitution,
while other commands use either `$argument` or `%argument` substitution, depending on whether the corresponding
argument should be replaced as-is or converted to a hexadecimal value first.

Since "cursor" expects a pair of hexadecimal arguments, and since the for-loop is producing decimal values, the command
uses `%1` and `%2` to ensure that the arguments are converted to hex before they are substituted.  This means the following
commands are equivalent:

    cursor 10 10
    cursor 0xa 0xa

At this point, this is mostly just proof-of-concept stuff.  Phase Two of TestMonitor development will involve
adding command verification checks, to determine whether a command was performed successfully and with the desired
result(s), and Phase Three will involve creating a series of low-level tests, exercising CPU features on both real
and simulated hardware in parallel and verifying that both sets of results match.

Controlling Physical PCs
------------------------

Here's the general procedure for controlling a *real* PC using a serial port connection:

- Turn on your PC
- Boot DOS 2.00 or later
- Load the PCjs [INT14 TSR](/tests/pcx86/testmon/int14/INT14.ASM): "INT14"
- Run the DOS CTTY command: "CTTY COM2"
- On your connected machine, run the PCjs [TestMonitor Utility](/tests/pcx86/testmon/testmon.js): "node testmon"

You should now be able to control the PC using the TestMonitor utility, in your choice of either "terminal mode" or
"command mode".

It's important to install the [INT14 TSR](/tests/pcx86/testmon/int14/) on the PC, because the INT 14h services
that IBM created are incredibly lame and potentially broken: they only operate in "polled mode", making it very likely
that incoming characters will be missed, and they do unusual things with the control lines.  For example, every time
the ROM prepares to send a character, it enables both **DTR** and **RTS**.  Maybe in 1981, that was how people used
**RTS**, but everything I've read says that **RTS** is intended to signal that the adapter is ready to *receive* data,
not *send* data.

To address the limitations of the ROM's INT 14h services, I wrote [INT14.ASM](/tests/pcx86/testmon/int14/INT14.ASM).
It's a Terminate-and-Stay-Resident (TSR) utility that scans the ROM BIOS Data Area for a COM port whose I/O address is
0x2F8 (or 0x3F8 if the /1 option is specified).  If the port is found, then the utility installs replacement INT 14h
services for that port.  Also, unless the /P option ("polled mode") is specified, the utility also installs a hardware
interrupt handler for IRQ3 (or IRQ4 is /1 is specified) and enables interrupt-driven I/O for the adapter.

Note that a serial adapter with address 0x2F8 is normally named "COM2", but not always.  For example, if it's the only
adapter in the PC, then DOS will name it "COM1" even if it's using the traditional COM2 address.

If interrupt-driven I/O doesn't seem to be working, then try installing INT14.COM with /P for "polled mode":

    INT14 /P

In "polled mode", no hardware interrupt handler is installed.  Instead, the INT 14h functions attempt to control
the flow of incoming characters by toggling the RTS line.  However, that may not be sufficient for high speeds (e.g.,
9600 baud), so it's recommended that you use the PC's COM port at the default speed of 2400 baud, which you can also
set with the DOS **MODE** command:

    MODE COM2:2400,N,8,1

testmon.js uses the same default speed of 2400 baud, which you can explicitly set or change as needed:

    node testmon.js --baud=2400

There are currently no `parity`, `databits`, or `stopbits` overrides, so you should always use "N,8,1" with the DOS
**MODE** command.

{% include machine.html id="ibm5170" %}

*[@jeffpar](https://jeffpar.com)*  
*Mar 10, 2018*
