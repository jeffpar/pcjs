---
layout: page
title: PCx86 INT 14h TSR
permalink: /software/pcx86/test/testmon/int14/
---

[INT14.ASM](INT14.ASM) is a Terminate-and-Stay-Resident (TSR) utility that scans the ROM BIOS Data Area for a COM port
whose I/O address is 0x2F8 (or 0x3F8 if the /1 option is specified).  If the port is found, then the utility installs
replacement INT 14h services for that port.  Also, unless the /P option ("polled mode") is specified, the utility also
installs a hardware interrupt handler for IRQ3 (or IRQ4 if /1 is specified) and enables interrupt-driven I/O for the
COM port.

Note that a serial adapter with address 0x2F8 is normally named "COM2", but not always.  For example, if it's the only
adapter in the PC, then DOS will name it "COM1" even if it's using the traditional COM2 address.

[INT14.COM](INT14.COM) and [INT14.TXT](INT14.TXT) were built with
[Microsoft Macro Assembler 4.00](/software/pcx86/lang/microsoft/masm/4.00/) using the following commands:

    masm int14,,int14.txt;
    link int14;
    exe2bin int14.exe int14.com

INT14.COM is intended to be run on an actual IBM PC/XT/AT, so that the PCjs
[TestMonitor Utility](/software/pcx86/test/testmon/testmon.js) can be used to control the PC from the command-line.

Here's the procedure:

- Turn on your PC
- Boot DOS 2.00 or later
- Load the PCjs [INT14 TSR](/software/pcx86/test/testmon/int14/INT14.ASM): "INT14"
- Run the DOS CTTY command: "CTTY COM2" 
- On your connected machine, run the PCjs [TestMonitor Utility](/software/pcx86/test/testmon/testmon.js): "node testmon"

You should now be able to control the PC using the TestMonitor utility, in your choice of either "terminal mode" or
"command mode".

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

To create a disk image containing the INT14 source code, run the following [DiskDump]({{ site.github.pages }}/tools/diskdump/lib/) command
in the [testmon](../) directory:

    diskdump --path="int14/INT14.ASM;DOWNLOAD.ASM;FAKECTTY.ASM;MK.BAT" --format=img --output=INT14.img --normalize --overwrite

A disk image named "PCjs INT14 Utilities" for use with PCjs machines has been created as follows:

    diskdump --path="int14/INT14.ASM;INT14.COM;DOWNLOAD.ASM;DOWNLOAD.COM;FAKECTTY.ASM;FAKECTTY.COM;MK.BAT" --format=json --output=INT14.json --normalize --overwrite

### Additional DOS Utilities

The following DOS utilities require that INT14.COM be loaded first (and with the same /1 option, if any):

- [DOWNLOAD.ASM](DOWNLOAD.ASM) (assembled as [DOWNLOAD.COM](DOWNLOAD.COM) and [DOWNLOAD.TXT](DOWNLOAD.TXT))
- [FAKECTTY.ASM](FAKECTTY.ASM) (assembled as [FAKECTTY.COM](FAKECTTY.COM) and [FAKECTTY.TXT](FAKECTTY.TXT))

Before using [DOWNLOAD.COM](DOWNLOAD.COM), be sure sure to heed the advice at the top of [DOWNLOAD.ASM](DOWNLOAD.ASM):

	This very tiny and simplistic file downloader relies on having our
	INT 14h	extensions TSR (INT14.COM) loaded first.  You may load INT14.COM
	in "polled mode" (/P), but if you do, it's probably best to use the COM port
	at its default speed of 2400 baud.  Also, if you loaded it for a non-default
	port (/1), then make sure you run DOWNLOAD.COM with the same option (/1).
	
	The 'protocol" is currently very fragile, and if unusual things happen
	(eg, a block is interrupted or comes up short), we may wait indefinitely;
	fortunately, you should always be able to press a key (eg, ESC) to abort
	the operation and try again.
	
	Currently, the only component that knows how to send files to DOWNLOAD.COM
	is our Node test utility: https://www.pcjs.org/tests/pcx86/testmon/testmon.js:

		node testmon.js [--baud=xxxx]
	
	After running DOWNLOAD.COM, run testmon.js and press Ctrl-F to initiate a
	file transfer.  You can use the DOS MODE command before running DOWNLOAD.COM
	to specify a baud rate other than 2400, eg:

		MODE COM2:9600,N,8,1
	
	but make sure you pass the same baud rate (eg, --baud=9600) to testmon.js.
