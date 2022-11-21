---
layout: post
title: "RetroReview: SPEEDUP"
date: 2017-07-21 10:00:00
permalink: /blog/2017/07/21/
machines:
  - id: pcsig08
    type: pcx86
    resume: 1
    config: /machines/pcx86/ibm/5160/ega/512kb/pcsig08/debugger/machine.xml
    autoMount:
      A:
        name: PC DOS 1.00
      B:
        name: "PCSIG08: DISK0011"
---

While browsing the June/July 1982 issue of PC Magazine (Vol. 1, No. 3), I found the following
[User-To-User](https://books.google.com/books?id=w_OhaFDePS4C&lpg=RA3-PA151&ots=cXovjlDNc8&pg=RA3-PA151#v=onepage&q&f=false)
article about an intriguing little program called `SPEEDUP`.  Unfortunately, the first time I tried it,
it immediately hung my test machine.  Here's the original article, followed by my analysis of the program
and why it hung.

> ### Disk Speedup

> The undisputed celebrity of this month’s user tips is SPEEDUP--14 lines of BASIC program code that will make your
disk drives perform their chores in half the time.  The program popped up on Wes Merchant's Annandale, Virginia IBM
Bulletin Board Service (see Club News).  It was sent there by Chris Carson of Aurora, Colorado, who found the program
circulating in the Denver area.  Good news travels fast.  Here it is:

	05 REM SPEEDUP DISK-ZAP
	10 FOR I=1 TO 37:READ N:C=C+N
	15 NEXT:READ N:IF N<>C THEN 40
	20 RESTORE:OPEN "R",1,"SPEEDUP.COM",1
	25 FIELD 1,1 AS N$:FOR I=1 TO 37
	30 READ N:LSET N$=CHR$(N):PUT 1
	35 NEXT:CLOSE:PRINT "Created":END
	40 PRINT "** ERROR - Verify Data **":END
	45 DATA 186,18,0,184,30,37,205,33,139
	50 DATA 250,190,26,1,185,11,0,243,164
	55 DATA 51,192,205,19,139,215,205,39
	60 DATA 223,2,37,2,8,42,255,80,246,0,4
	65 DATA 3866
	70 END

> Even if you've never touched BASIC, the gem is too good to pass up.  To create the program, place the PC-DOS
disk into your A: drive and load BASIC by typing *BASIC* and hitting *Enter*.  Then type each of the lines above,
exactly as written.  Hit *Enter* after each line.  When you've *Enter* following line 70, hit the *F2* key to run
this short program.

> If you get a message saying "\*\* ERROR - Verify Data \*\*" then you've made a mistake copying the numbers in line
45 through 60.  Otherwise, you will have created a new file on your PC-DOS disk called SPEEDUP.COM.

> Go back into PC-DOS by typing *system* and *Enter* and run the new program by typing *speedup* and *Enter*.  Now
load and run any program or PC-DOS utility and be amazed.  Your disk drives will miraculously zip along at almost
double speed, singing instead of groaning.

> Exactly how much faster? Well, for example, to format a new disk with the /S option: 25 seconds instead of 45
seconds.  To copy the PC-DOS disk via the "DISKCOPY" command: 42 seconds instead of 83. To copy the entire PC-DOS
disk with "COPY \*.\*": 139 seconds instead of 206.  If you're a speed and performance fanatic (who isn't), you've
just made up to a 100 percent improvement in your disk operations.

> According to Chris Carson, the program works its magic by reloading the diskette parameters table in PC-DOS.
IBM programmed the step rate for the machine's Tandon disk drives at eight milliseconds; SPEEDUP shortens this to
six, still within the Tandon-rated minimum of five milliseconds.  The program also sets the head settle rate to
zero milliseconds, which is the Tandon minimum rating (IBM's conservative default setting is 25).

Fortunately, we don't have to type the program in.  If you skim our archived copy of the
[PC-SIG Library 8th Edition CD-ROM (April 1990)](/software/pcx86/sw/misc/pcsig08/), you'll see `SPEEDUP.BAS`
in the [Directory of PCSIG08: DISK0011](/software/pcx86/sw/misc/pcsig08/#directory-of-pcsig08-disk0011).

So, fire up the [PC-SIG Machine](/software/pcx86/sw/misc/pcsig08/).  Or use the machine
below, which has conveniently pre-loaded "PC DOS 1.00" in drive A and "PCSIG80: DISK0011" in drive B.

At the DOS prompt, run `BASIC` and type `LOAD "B:SPEEDUP.BAS"`.

{% include machine.html id="pcsig08" %}

When you `LIST` the program to the serial port:

	LIST,"COM1:"

you'll see that the program is virtually identical to the PC Magazine listing:

	10 FOR I = 1 TO 37
	11   READ N
	12   C = C + N
	15   NEXT
	16 READ N
	17 IF N <> C THEN 40
	20 RESTORE
	21 OPEN "R",1,"SPEEDUP.COM",1
	25 FIELD 1 , 1 AS N$
	26   FOR I = 1 TO 37
	30   READ N
	31   LSET N$ = CHR$(N)
	32   PUT 1
	35   NEXT
	36 CLOSE
	37 PRINT "created"
	38 END
	40 PRINT "** error. Verify DATA"
	41 END
	45 DATA 186,18,0,184,30,37,205,33,139
	50 DATA 250,190,26,1,185,11,0,243,164
	55 DATA 51,192,205,19,139,215,205,39
	60 DATA 223,2,37,2,8,42,255,80,246,0,4
	65 DATA 3866

If you `RUN` it, it should report "created".  Type `SYSTEM` to exit BASIC and then type `DIR SPEEDUP.COM`
to verify that the program was created:

	SPEEDUP   COM        128  07-21-17

You'll notice that BASIC created a 128-byte file, even though it wrote only 37 bytes.  This is an
artifact of PC DOS 1.00 and BASIC Version D1.00, which were limited to File Control Block (FCB) DOS
functions that operated on files using 128-byte "records".

Alternatively, if we boot from "PC DOS 2.00 (Disk 1)" and run BASIC Version D2.00, loading and running
`SPEEDUP.BAS` will produce the following `SPEEDUP.COM`:

	 Volume in drive A has no label
	 Directory of  A:\
	
	SPEEDUP  COM       37   7-21-17  12:00a
			1 File(s)     30720 bytes free

Let's take a closer look at this 37-byte program, using the `DEBUG` program on "PC DOS 2.00 (Disk 2)":

	A>B:DEBUG SPEEDUP.COM
	-u100
	0913:0100 BA1200        MOV     DX,0012                            
	0913:0103 B81E25        MOV     AX,251E                            
	0913:0106 CD21          INT     21                                 
	0913:0108 8BFA          MOV     DI,DX                              
	0913:010A BE1A01        MOV     SI,011A                            
	0913:010D B90B00        MOV     CX,000B                            
	0913:0110 F3            REPZ                                       
	0913:0111 A4            MOVSB                                      
	0913:0112 33C0          XOR     AX,AX                              
	0913:0114 CD13          INT     13                                 
	0913:0116 8BD7          MOV     DX,DI                              
	0913:0118 CD27          INT     27                                 
	-d 11a lb
	0913:011A  DF 02 25 02 08 2A FF 50 F6 00 04

The program uses the DOS Set Vector function (INT 21h, AH=25h) to modify interrupt vector 1Eh (the Diskette
Parameter Table vector) to point DS:0012, inside the program's Program Segment Prefix (PSP).  It then copies
0Bh bytes from offset 011Ah into the PSP at offset 0012h, issues a BIOS Disk Reset (INT 13h, AH=00h), and
then executes a Terminate and Stay Resident (TSR) request (INT 27h) with DX set to 1Dh, retaining the first 12h
bytes of the PSP plus an additional 0Bh bytes containing the new diskette parameter values.

Note that this TSR program doesn't actually want to retain the first 12h bytes of the PSP, but it must leave
those bytes in place so that the program will exit correctly.

In PC DOS 1.00 (August 1981), the first 12h bytes of the PSP were used as follows:

	00h-01h     2 bytes (code)      CP/M exit (always contains INT 20h)
	02h-03h     2 bytes             Segment of the first byte beyond the memory allocated to the program
	04h         1 byte              Reserved
	05h-09h     5 bytes (code)      Far call to CP/M compatibility code within DOS
	0Ah-0Dh     4 bytes             Terminate address of previous program (old INT 22h)
	0Eh-11h     4 bytes             Break address of previous program (old INT 23h)

with bytes 12h-5Bh marked "Reserved" and the remaining PSP bytes defined as:

	5Ch-6Bh     16 bytes            Unopened Standard FCB 1
	6Ch-7Fh     20 bytes            Unopened Standard FCB 2 (overwritten if FCB 1 is opened)
	80h         1 byte              Number of bytes on command-line
	81h-FFh     127 bytes           Command-line tail (terminated by a 0Dh)
	
	NOTE: The 128 bytes at offset 80h are also used as the default DOS Disk Transfer Area (DTA). 
	
In May 1982, PC DOS 1.10 added:

	12h-15h     4 bytes             Critical error address of previous program (old INT 24h)
	16h-17h     2 bytes             Parent's PSP segment (usually COMMAND.COM - internal)

In March 1983, PC DOS 2.00 added:

	18h-2Bh     20 bytes            Job File Table (JFT) (internal)
	2Ch-2Dh     2 bytes             Environment segment
	2Eh-31h     4 bytes             SS:SP on entry to last INT 21h call (internal)

And in August 1984, PC DOS 3.00 added:

	32h-33h     2 bytes             JFT size (internal)
	34h-37h     4 bytes             Pointer to JFT (internal)

This explains why, when I first ran `SPEEDUP` on PC DOS 2.00, it crashed.  In fact, the *only* version
of DOS that supports `SPEEDUP` is version 1.00.  It crashes on all other versions of DOS because it "trashes"
critical PSP bytes (eg, the Parent's PSP segment at offset 16h).  The author of `SPEEDUP` ignored IBM's
warning that PSP bytes at offset 12h and higher were "reserved" and used them anyway.

Sadly, the history of the IBM PC and DOS is littered with examples of programmers ignoring the "reserved"
admonitions of others -- even IBM, when they designed the IBM PC to use interrupt vectors that Intel had "reserved"
for future use.  This is apparently normal human thinking: "If something isn't a problem today, then let's punt 
any foreseeable problems to future generations, because we've got more important things to do."

And on PC DOS 1.00, does `SPEEDUP` actually speed things up?  In the real world, it presumably did, but in
the world of emulation, there isn't any measurable difference, because hardware features like stepping rates and
head settling times are rarely simulated.  As I suggested in my [last blog post](/blog/2017/07/15/), this is a
degree of authenticity that all emulators should strive for, and PCjs emulators are no exception to that rule -- I
just haven't gotten around to it yet.

### "IBM Updates DOS to 1.10"

In the very next issue of PC Magazine (August 1982), there's an article titled
"[IBM Updates DOS to 1.10](https://books.google.com/books?id=WYnHD9WSWdAC&lpg=PA110&ots=QlUklzAI8s&dq=pc%20magazine%20%22IBM%20Updates%20DOS%20To%201.10%22&pg=PA111#v=onepage&q&f=false)"
which includes a section on disk I/O performance and the fate of `SPEEDUP`:

> The speed of the disk I/O has been increased.  Although IBM has not published any specific figures,
improvement in disk access appears to be 100 percent. Using the format command as a baseline, DOS version 1.0
formatted a single-sided diskette in 34 seconds, while DOS 1.10 formatted a single-sided diskette in 19 seconds,
including the time necessary to provide improved specification printout upon completion of the format process.

> SPEEDUP.COM, a patch to DOS 1.0 that performed the same function, is no longer needed in DOS 1.10, and any
attempt to use it in the new DOS will result in program errors or unpredictable results.

### Epilogue

There were some nice side benefits to debugging the problems uncovered by `SPEEDUP`.

First, when attempting to `LIST` a BASIC program to a serial port, I discovered that BASIC depends on the port
generating a "Transmitter Holding Register Empty" interrupt after outputting each byte, and that I had never actually
implemented that interrupt.  Only the "Received Data Available" and "Modem Status" interrupts had been implemented,
largely for serial mouse support.  That has since been fixed, although "Line Status" interrupts still need to be
implemented, along with the proper queuing of all *four* possible types of serial port interrupts.

NOTE: Serial I/O from DOS (ie, redirection to or from a COM port) already worked because DOS performs polled I/O
rather than interrupt-driven I/O.  Additionally, when DOS terminates a line, it outputs both CR (0Dh) and LF (0Ah)
bytes, whereas BASIC outputs only CR; so, when a machine uses a &lt;textarea&gt; control for serial I/O, PCx86
automatically adds an LF after any stand-alone CR. 

Second, when `SPEEDUP` crashed on newer versions of DOS, an invalid stack pointer would be loaded, and I noticed
that I had neglected to fully implement stack wrap-around on 8086/8088 processors; specifically, in the case where the
stack pointer is *odd*.

Normally, when the stack pointer is *even*, it will cross the stack segment's 64Kb boundary without incident, smoothly
auto-decrementing from 0000h to FFFEh or auto-incrementing from FFFEh to 0000h.  However, when the stack pointer is
*odd* and it reaches 0001h, the next PUSH on an 8088 must automatically store the high byte at 0000h and the low
byte at FFFFh; similarly, when the stack pointer is FFFFh, the next POP must fetch the low byte from FFFFh and the high
byte from 0000h.

Most emulators simulating an 8086/8088 (aka real-mode) actually use V86-mode, which doesn't support stack operands that
straddle the top of the stack segment; V86-mode will throw an exception, and the machine is toast.

PCx86 makes more of an effort simulate real-mode, so any PUSH or POP should work properly, regardless whether the stack
pointer is even or odd.  In fact, the same is true for any real-mode 16-bit access across a 64Kb boundary, stack-based
or otherwise.  PCx86 will even execute real-mode instructions that wrap around a 64Kb boundary.

PCx86 does it all (except when it doesn't)!
