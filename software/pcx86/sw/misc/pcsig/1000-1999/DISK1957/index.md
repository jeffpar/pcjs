---
layout: page
title: "PC-SIG Diskette Library (Disk #1957)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1957/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1957"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VMS40"

    This is a device driver that turns either a hard disk or a floppy disk
    into LIM4 expanded memory.  It is a software emulation of the 28
    function standard set forth in the Lotus/Intel/Microsoft Expanded Memory
    Standard (LIM/EMS) version 4.0.  All of the EMS 4.0 functions that can
    be implemented through software are provided by VMS40, with the
    exception of the DMA functions included in the Alternate Map Register
    Set function (function 28).
    
    The program is backwards compatible with software written for the
    earlier LIM 3.2 standard (courtesy of Lotus, Intel & Microsoft).  It
    lets you specify which drive to use for expanded memory, and how much
    disk to reserve.
    
    The trial version VMS40.240 restricts you to reserving no more than 240K
    for LIM memory, while the registered version VMS40.SYS allows you to
    reserve up to 32 megabytes.
    
    Naturally, using a disk to simulate LIM memory is somewhat slower than
    having the appropriate hardware implementation, but it is also a lot
    cheaper!  If you need to run big spreadsheets, or use Borland's
    standalone debugger to debug a really large program, and you cannot
    afford 2 megabytes of LIM memory, then VMS40 is your answer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1957.TXT

{% raw %}
```
Disk No: 1957                                                           
Disk Title: VMS40                                                       
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: VMS40                                                    
Author Version: 1.1                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
This is a device driver that turns either a hard disk or a floppy disk  
into LIM4 expanded memory.  It is a software emulation of the 28        
function standard set forth in the Lotus/Intel/Microsoft Expanded Memory
Standard (LIM/EMS) version 4.0.  All of the EMS 4.0 functions that can  
be implemented through software are provided by VMS40, with the         
exception of the DMA functions included in the Alternate Map Register   
Set function (function 28).                                             
                                                                        
The program is backwards compatible with software written for the       
earlier LIM 3.2 standard (courtesy of Lotus, Intel & Microsoft).  It    
lets you specify which drive to use for expanded memory, and how much   
disk to reserve.                                                        
                                                                        
The trial version VMS40.240 restricts you to reserving no more than 240K
for LIM memory, while the registered version VMS40.SYS allows you to    
reserve up to 32M                                                       
                                                                        
Naturally, using disk to simulate LIM memory is somewhat slower than    
having the appropriate hardware implementation, but it is also a lot    
cheaper!  If you need to run big spreadsheets, or use Borland's         
standalone debugger to debug a really large program, and you cannot     
afford 2Meg of LIM memory, then VMS40 is your answer.                   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## REGIST.TXT

{% raw %}
```




To:

Fugue Software,
P.O. Box 942
WODEN   ACT   2606
AUSTRALIA





From:

___________________________________________________

___________________________________________________

___________________________________________________

___________________________________________________



[ ] I enclose $25 for registration as a user of VMS40
    Australian users - $A25
    Overseas users   - $US25


Please also send me my (free) trial version of the following software:


[ ]  WORD FUGUE - the heavy duty word processing program with
                  WORDSTAR 4 compatability.

[ ]  DISK SPOOL - the print spooler that spools to disk and prints in
                  background. Doesn't use the timer interrupt, so it
                  wont crash your programs

[ ]  DOSH       - command line editor for DOS commands that stacks
                  upto the last 15 commands, and lets you install all
                  of the function keys.

[ ]  DISK UTILITIES - a collection of utilities designed to make using 
		  a hard disk easier.

```
{% endraw %}

## VMS40.DOC

{% raw %}
```
VMS40
=====

This is a device driver that makes either a hard disk or a floppy disk
into LIM4 expanded memory. It is a software emulation of the 28
function standard set forth in the Lotus/Intel/Microsoft Expanded
Memory Standard (LIM/EMS) version 4.0. All of the EMS 4.0 functions
that can be implemented through software are provided by VMS40, with
the exception of the DMA functions included in the Alternate Map
Register Set function (function 28).

The program is backwards compatible with software written for the
earlier LIM 3.2 standard (courtesy of Lotus, Intel & Microsoft). It
lets you specify which drive to use for expanded memory, and how much
disk to reserve.

The trial version VMS40.240 restricts you to reserving no more than
240K for LIM memory, while the registered version VMS40.SYS allows you
to reserve up to 32M

You install VMS40 as you would any other DOS device driver through you
CONFIG.SYS file. When you include the driver in you file, be sure to
include the drive and path information so that DOS can find the file
at boot time. The full syntax is

  DEVICE=[d:\][path\]VMS40.240 [d:] [nnn]

where [d:\][path\] specifies the drive and path in which the driver
lives.

The optional [d:] specifies which drive to place the Virtual LIM
memory on. If omitted, it defaults to C: if you boot from a hard disk,
and A: if you boot from a floppy.

The optional [nnn] specifies the amount of memory you wish to reserve,
in Ks (Kilobytes). If omitted, the trial version uses a default (and
maximum) value of 240K, while the registered version uses a default
value of 360K.

Example
=======

   DEVICE=C:\UTILS\VMS40.SYS 6000

which uses the registered version residing in directory UTILS on drive
C: to reserve 6000K (= 6M) on drive C: for expanded memory.

As with all device drivers, once installed, it can only be removed by
rebooting.

The VMS40 driver logically maps disk-memory pages of 16k blocks
into four contiguous physical pages of conventional RAM. Including the
64K physical page map area, the installed size of the driver is
approximately 69K. VMS40 cannot map the pages into any other area than
the 64K window it allocates automatically on boot up.

The program allocates a disk file called $VMS40@@.VM$ in the root
directory. Its attributes are System and Hidden. It is allocated at
the appropriate size to hold the LIM memory pages. Don't try deleting
it if you have the driver running!!! If you allocate the file on
floppy, don't remove the floppy while the driver is running!!!

Naturally, using disk to simulate LIM memory is somewhat slower than
having the appropriate hardware implementation, but it is also a lot
cheaper! If you need to run big spreadsheets, or use Borland's
standalone debugger to debug a really large program, and you cannot
afford 2Meg of LIM memory, then VMS40 is your answer.

In the tests I have run, VMS40 has proved compatible with almost all
other programs that use LIM memory.  The one exception was a print
spooler that used LIM memory to store printing, and hooked the timer
interrupt to wake up and print in background. This caused the spooling
program to interrupt DOS occasionally, and if DOS was accessing disk
at the time, when VMS40 also tried to access disk, it crashed. This
proviso applies to any TSR that uses LIM memory to store information,
if that TSR can wake up in background. TSRs that must be popped up
first are no problem. We can supply a Print Spooler that will work
with this driver and other TSRs, and that does not take over the timer
interrupt. Just tick the appropriate box on the registration form.

If you find the trial version useful, please register. A registration
form is included on the disk.


FILES ON THIS DISK
==================


VMS40.240               trial device driver
VMS40.DOC               this document
REGIST.TXT              registration form

EMS.PAS                 public domain program that tests LIM memory
EMS.EXE                 compiled version of above


If you have any constructive comments, or would like to know more
about our products, please contact us.





















To:

Fugue Software,
P.O. Box 942
WODEN   ACT   2606
AUSTRALIA





From:

___________________________________________________

___________________________________________________

___________________________________________________

___________________________________________________



[ ] I enclose $25 for registration as a user of VMS40
    Australian users - $A25
    Overseas users   - $US25


Please also send me my (free) trial version of the following software:


[ ]  WORD FUGUE - the heavy duty word processing program with
                  WORDSTAR 4 compatability.

[ ]  DISK SPOOL - the print spooler that spools to disk and prints in
                  background. Doesn't use the timer interrupt, so it
                  won't crash your programs

[ ]  DOSH       - command line editor for DOS commands that stacks
                  upto the last 15 commands, and lets you install all
                  of the function keys.


[ ]  DISK UTILITIES - a collection of utilities designed to make using
                  a hard disk easier.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1957

     Volume in drive A has no label
     Directory of A:\

    EMS      EXE     15498   9-06-89   8:37a
    EMS      PAS     16211   9-06-89   8:37a
    FILE1957 TXT      2745   8-11-90  11:00p
    FILEINFO WF        581  10-30-89   9:48a
    REGIST   TXT      1094  10-23-89  11:44p
    VMS40    240      4670   7-03-90  10:02p
    VMS40    DOC      5332  10-30-89   9:57a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   6:35a
            9 file(s)      46709 bytes
                          110080 bytes free
