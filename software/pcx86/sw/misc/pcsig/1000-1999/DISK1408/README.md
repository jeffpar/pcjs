---
layout: page
title: "PC-SIG Diskette Library (Disk #1408)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1408/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1408"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CLONEROM"

    Watch out, Big Blue!  CLONEROM helps the dedicated hobbyist make his
    PC/XT/AT absolutely, totally IBM compatible, right down to the
    programming of the chips in the motherboard.  To obtain system-level
    compatibililty, you must install a true blue ROM-BIOS.  The full text
    from the IBM-PC Read-Only-Memory Backup Manual is ready to print to
    tell you how.  Two utility programs are available to help you finish the
    job.
    
    If you already own an IBM or clone, how would you like to have backup
    ROM and EPROM chips that cost less than IBM-programmed ICs?  You can do
    it with CLONEROM.  Save your entire ROM on disks as insurance against
    disaster.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CORELOOK.DOC

{% raw %}
```
                            CORELOOK.EXE

                     PC Memory Scan and Search


    This program is a simple tool for viewing the contents of the
PC's memory.  It will display any memory address within the 1024 K
bytes that are addressable in the Intel segmented addressing scheme.
Thus includes the 640 K bytes of user memory and the 360 K bytes
defined for system and hardware support functions.

    This program also has a string search function that will find
the memory locations that contain a string of up to five characters
that you define.

    When CORELOOK is loaded, a screen frame appears that includes
the viewing "window" into the memory contents as well as the
address/string input fields and all required help information.


MEMORY CONTENTS DISPLAY

    CORELOOK displays the Hex values of 256 bytes of memory in the
viewing "window", arranged in 16 rows of 16 bytes, similar to DOS's
DEBUG utility.  Each row is preceded by the 16-bit segment and
offset components of the 20-bit segmented address of the first byte
in the row.  At the end of each row, the ASCII representations of
the 16 bytes are displayed.  Unprintable low-ASCII and extended
characters are shown as blank spaces, much as DEBUG displays
periods.

    When CORELOOK first starts, the viewing window displays the
memory beginning at address 0000:0000.  You can then change to other
addresses by using the several scanning options, as follows.

    >0000:0000<  ENTER BEGINNING DISPLAY ADDRESS

         This option provides an input field to specify the segment
and offset of the beginning of the desired block of memory.
The cursor starts under the leftmost position: enter valid
hex values (0-9 and A-F) across the field, skipping over
unchanged positions with the <Right> cursor.  The Backspace
and <Left> cursor do not work, but entry will wrap around
to the beginning if you need to correct a value.  At any
place in the field, pressing Enter will put the indicated
memory block in the viewing window.

    F7 - BACK PAGE

         Changes the contents of the viewing window to begin at an
address 256 bytes lower than the current beginning address.

    F8 - FORWARD PAGE

         Changes the contents of the viewing window to begin at an
address 256 bytes greater than the current beginning
address.

    F9 - BACK LINE

         Changes the contents of the viewing window to begin at an
address 16 bytes lower than the current beginning address.

    F10 - FORWARD LINE

         Changes the contents of the viewing window to begin at an
address 16 bytes greater than the current beginning
address.

    When these function key commands are used to scroll the viewing
window, the address in the BEGINNING DISPLAY ADDRESS input field is
updated automatically, and will always be consistent with the first
memory location displayed in the viewing window.

    The viewing window scroll functions also have a wrap capability
at the ends of the addressable memory.  If the viewing window
beginning address is 0000:0000 and you use F7 to move back one page,
the new viewing window will begin at the address of FFF0:0000.


STRING SEARCHING

    CORELOOK provides a string search feature that will find memory
locations that hold byte values matching a five character ASCII
string.  The match must be exact, including leading and trailing
spaces that you have in the input field.

    Alt F - ENTER FIND STRING

         Press ALT F to access the string search function.  The
cursor will move to the input field where you type the five
characters to be matched.  If the search string is less
than five characters, you need to enter leading and
trailing spaces exactly as you expect them to be located.
This may take a little experimentation if you are not sure
how the search string is delimited in its memory storage.
When the input field is to your liking, press <Enter> to
begin the search.

    F5 - REPEAT FIND

         This will search for the next occurrence of the string
currently displayed in the input field.  Memory addresses
are searched in ascending order.


PROGRAM TERMINATION

    Pressing <ESC> at any time will terminate CORELOOK and take you
back to DOS.



Rev 0 (docs only)
TAM 9/3/88

```
{% endraw %}

## FILE1408.TXT

{% raw %}
```
Disk No: 1408
Program Name:  CLONEROM version 1.0
PC-SIG version 1

Watch out, Big Blue!  CLONEROM will help the dedicated hobbyist make his
PC/XT/AT absolutely, totally IBM compatible, right down to the
programming of the chips in the motherboard.  To obtain system level
compatibililty, you must install a "true blue" ROM-BIOS.  The full text
from the IBM PC READ-ONLY-MEMORY BACKUP MANUAL is ready to print out to
tell you how.  Two utility programs are available to help you finish the
job.

If you already own an IBM or clone, how would you like to have backup
ROM and EPROM chips that cost less than IBM-programmed ICs?  You can do
it with CLONEROM.  Save your entire ROM on disks as insurance against
disaster.

Synopsis: Shows you how to program PC/XT/AT motherboards to insure 100%
IBM compatibility.  A hands-on, "under-the-hood" program for the
dedicated hobbyist.

Usage:  System Utilities/ROM-BIOS/Upgrade.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $9.95

File Descriptions:

READ     ME   File descriptions.
GO       BAT  Tells how to display READ.ME and ROMBAK texts.
ROMBAK   BAT  Prints ROMBAK.
ROMBAK   TXT  Text of THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL.
ORDER    TXT  Order form for printed ROMBAK.
PC-DUMP  EXE  Program to download any part of a PC's memory.
PC-DUMP  DOC  Documentation for PC-DUMP.
CORELOOK COM  Program to view PC memory contents.
CORELOOK DOC  CORELOOK documentation.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## ORDER.TXT

{% raw %}
```
===========================   ORDER FORM   ================================


              THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL

       To obtain the hardcopy manual, please complete the information
       listed below and send this form and $9.95 to;

                              PC TECHNOTES
                              P.O. Box 1574
                      San Juan Capistrano, CA 92693


     ___________________________________________________________________
     Name (Please Print)

     ___________________________________________________________________
     Company

     ___________________________________________________________________
     Street

     ___________________________________________________________________
     City                                          State         Zip

================================================= PC TECHNOTES    8/88 =====
```
{% endraw %}

## PC-DUMP.DOC

{% raw %}
```
                          PC-DUMP.EXE

                 PC Memory Download to Disk File
                       Rev. 2.0  11-23-87


   This program will download the contents of a block of PC system
memory - either RAM or ROM - and write it to a disk file. The byte
image in the disk file is suitable for editing using DEBUG, or for
blasting EPROM's.

   As selected from the options menu, you need to input the memory
segment address, the offset of the end of the memory block that is
to be written to the disk file, the pattern (all, even or odd) of
the bytes that are written to the disk file and the disk file name.
Input prompting and a preset response format will fairly well
confine your responses to acceptable ones.

(F1)  MEMORY SEGMENT ADDRESS :  The four-hexadecimal-digit memory
      segment (or paragraph) address of the beginning of the block
      of memory to be downloaded. This address must conform to the
      20-bit segmented addressing scheme used with the 8088.

(F2)  MEMORY BLOCK END OFFSET :  The four-hexadecimal-digit offset
      address of the end of the memory block that is being written
      to the disk file.  This is essentially one less than the total
      number of bytes in the overall memory block being downloaded,
      since the downloading begins at an offset of &H0000 from the
      memory segment address.  The maximum offset is &HFFFF, for a
      total memory block size of 64K bytes.

(F3)  DISK FILE NAME :  The filespec of the disk file in which the
      memory block contents will be written. The filespec should
      follow the DOS convention (d:filename.ext) for format.

(F4)  BYTES WRITTEN TO FILE :  Within the designated memory block
      you may select the pattern of bytes to be written to the disk
      file.  The default is to write all bytes.  To facilitate work
      with interlaced address ROMs, options are available to write
      only the even or odd numbered bytes to the disk file.  Note
      that pressing F4 rolls the option stack: no other keyboard
      entry is necessary.

   When you input the hexadecimal data for the memory segment
address and the memory block edd offset, PC-DUMP routines will
collect the input characters one at a time and display them in the
preset range. Upon receiving four characters, the program will put
the full hexadecimal number in the status line and return control
to the options menu. If you make a mistake during entry of these
data items, go ahead and input four characters and come back and
try again. Also, you should note that this program rigidly checks
for allowable keystrokes (the disk filespec is the one exception).

   EXAMPLE #1

       MEMORY SEGMENT ADDRESS (4 hex digits) = FE00
       MEMORY BLOCK END OFFSET (4 hex digits) = 1FFF
       DISK FILENAME (d:filename.ext) = A:ROMBIOS.DAT
       BYTES WRITTEN TO FILE = ALL

   The input shown above would download an 8K (8,192 bytes) block
of memory, beginning at segment address FE00(hex), to a disk file
on the A: disk drive.  All bytes in the indicated block are written
to the file.

   EXAMPLE #2

       MEMORY SEGMENT ADDRESS (4 hex digits) = F000
       MEMORY BLOCK END OFFSET (4 hex digits) = FFFF
       DISK FILENAME (d:filename.ext) = A:ATROM_LO.DAT
       BYTES WRITTEN TO FILE = EVEN

   The input shown above would download 32K (32,768) bytes making
up the even numbered (offsets 0, 2, 4, 6 ...) bytes in the 64K block
of memory, beginning at segment address F000(hex), to a disk file
on the A: disk drive.  This data is typical of the low-byte ROM in
the interlaced address ROMs of the PC-AT.




Rev 1 (docs)
TAM 11/23/87

```
{% endraw %}

## ROMBAK.TXT

{% raw %}
```




                               THE IBM PC

                            READ-ONLY-MEMORY

                             BACKUP MANUAL



************************************************************************
************************************************************************

     This copy of the manual is printed from the file ROMBAK.TXT which
is distributed on disk through the user supported software distribution
network.  This manual is a copyrighted work, with permission granted for 
electronic media distribution ONLY; printed media distribution without
the expressed consent of the copyright holder is prohibited.

     This electronic media distribution of this manual is an experiment 
in user-supported publishing.  This is a specialty publication and the
audience most interested in the subject matter is probably quite
comfortable with the distribution and use of disks of user supported
software.  

     This file contains all of the text from the printed manual, as 
published by PC TECHNOTES.  The figures and certain compresed-format
tables from the printed manual are not reproduced in this file.  The 
absence of this graphic material should not make a major reduction in
the instructional value of this material, as most of the information
could be assembled from other sources.

     The user supported part of the deal works the same as for software. 
IF YOU READ THIS VERSION OF THE MANUAL AND FIND IT TO BE USEFUL, PLEASE
SHOW YOUR SUPPORT BY ORDERING THE PRINTED MANUAL.  The price of $9.95 is
nominal for a specialty publication like this, and you'll like having
all of the figures and tables in one convenient place.  A handy order
form is contained in the file ORDER.TXT, which is included on the
distribution disk. 

***********************************************************************
***********************************************************************



_____________________________________________________________________
                                                         PC TECHNOTES

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL
Copyright (C) 1986, 1987 by PC TECHNOTES

All rights reserved. No part of this manual may be reproduced or 
transmitted in any form or by any means without the prior written 
permission of the copyright holder.

PC TECHNOTES is an independent publisher, not affiliated in any way with 
International Business Machines Corp.  As used in the title and text of 
this manual, "IBM PC" refers solely to a recognized industry standard 
for computer hardware design and operation, and not to any authorization 
or license from the International Business Machines Corp.


                               Disclaimer

PC TECHNOTES makes no warranties as to the contents of this manual or to 
the fitness of the information for any particular use. Although every 
effort has been made to insure that the information contained in this 
manual is reliable, PC TECHNOTES cannot be held responsible for any 
damage or loss suffered from, or any liability incurred as a consequence 
of the use of the information contained herein.





Trademarks/Owners: IBM, IBM PC, PC-XT and PC-AT/ International Business 
Machines Corp. Intel/Intel Corporation. MS-DOS and GW-BASIC/Microsoft 
Corp. Hercules/Hercules Computer Technology. BYTE/McGraw-Hill Inc.










                             PC TECHNOTES
                             P.O. Box 1574
                     San Juan Capistrano, CA  92693









                                 - i -





                               THE IBM PC
                            READ-ONLY-MEMORY
                             BACKUP MANUAL


                           TABLE OF CONTENTS

1. Introduction  .............................................. 1

2. PC Memory Organization  .................................... 2

3. PC Memory Addressing  ...................................... 5

4. PC ROM Software and Hardware  .............................. 7
   4.1 Software Addresses and Markers  ........................ 7
           ROM-BIOS
           ROM-BASIC
   4.2 ROM Hardware on the System Board  ...................... 8

5. The Making of a ROM Chip  .................................. 11
   5.1 EPROM Integrated Circuit Chips  ........................ 11
   5.2 EPROM Programmers  ..................................... 12

6. Putting It All Together  ................................... 14

7. So You Bought a PC-Clone  .................................. 16
   7.1 PC-Clone ROM Hardware  ................................. 17

8. Helpful Hints  ............................................. 21


Appendix A.  Hexadecimal Arithmetic  .......................... 22
Appendix B.  ASCII Characters  ................................ 25
Appendix C.  Useful Software  ................................. 27
Appendix D.  EPROM Programmer Sources  ........................ 29













                                 - ii -

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 1


1.  INTRODUCTION

     You are a cautious computer user. Should your important PC software 
be damaged, you know that you have backup copies of everything in a safe 
place. Everything, that is, except the most critical item of all .... 
the system software residing in the read-only-memory (ROM) chips 
installed on your IBM PC's motherboard.

     The built-in software in the IBM PC's ROM chips contains the 
primitive system startup and initialization routines, the Basic 
Input/Output System (ROM-BIOS) and the core of the BASIC and BASICA 
language interpreters (ROM-BASIC). Without the ROM-BASIC your IBM BASIC 
Interpreter disk files are inoperative. Without a functioning ROM-BIOS 
your applications software is useless. Without the system startup 
routines your PC turns into an expensive paperweight.

     So what?  These ROM chips are standard IBM parts and you can always 
obtain replacements from your dealer. Right?  Well, maybe .....

     The IBM PC family of microcomputers is known for an open 
architecture built around commercially available components, but IBM has 
carefully guarded the ROM-based system software that distinguishes them 
from all of the compatibles and clones. Under the right circumstances, 
you may obtain a ROM chip replacement through an authorized IBM dealer, 
but you will probably have to deliver your IBM computer to such a dealer 
and experience a wait for the replacements to be installed.

     If your dealer is a mail order house in another state, or is local 
but uncooperative, a malfunctioning ROM chip could spell major 
inconvenience or loss of business. At worst, you could find yourself 
replacing the motherboard, or even the system unit itself, at a cost 
much greater than the price of a backup ROM chip.

     You can make a backup set of system software ROM chips for your IBM 
PC. Even if you have no prior computer circuitry or systems programming 
experience, you can readily master the few necessary technical concepts.

     This manual is intended to be a straightforward compilation of the 
key technical information, and the practical applications of such, that 
a PC owner should understand before attempting to backup his PC's ROM 
software. All of the technical details are in the public domain.

     The material is logically organized as a tutorial on the structure 
of the PC's RAM and ROM memory, the way that the PC addresses memory 
locations, the arrangement and variations of the ROM software and 
hardware, and the types of ROM chips and programming hardware that are 
on the market today. Also included is a guide to the all important 
subject of hexadecimal arithmetic (don't leave home without it), 
information about two very helpful pieces of public domain software, and 
notes on sources of ROM programming hardware for the PC owner.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 2


2.  PC MEMORY ORGANIZATION


     This chapter describes the organization of random-access-memory 
(RAM) and read-only-memory (ROM) inside the PC and the predefined 
functions of various blocks of this memory. (If you are not familiar 
with hexadecimal arithmetic, please go to Appendix A. before reading any 
further, as you will need this to understand the notation for memory 
block references.) Note that this is a general structure discussion, and 
that the specifics of memory addressing will be covered in the next 
chapter.

     The memory organization in the PC is a result of the capability of 
the Intel 8088 CPU to address the memory. The 8088 can address up to 
1,024K (or 1,048,576) bytes of memory. Each byte is referred to by a 20- 
bit address which may be expressed as an equivalent 5-digit hexadecimal 
number. With such an addressing scheme, the full 1,024K bytes may be 
covered by address values in the range from hex 00000 to hex FFFFF.

      By definition, the PC's addressable 1,024K bytes of memory are 
divided into 16 blocks of 64K bytes each. Each block is then identified 
by the first, or high order, hex digit of the hexadecimal addresses of 
all bytes in that block. For example, the first 64K byte block of memory 
at addresses hex 00000 through 0FFFF is called the 0 block. Similarly, 
the last of the 64K byte memory blocks at addresses F0000 through FFFFF 
is called the F block.

     In theory, there is no functional boundary between these 16 blocks 
of memory. The block convention is used partly due to the specifics of 
the addressing scheme (more on this in the next chapter) and partly 
because the overall memory usage scheme developed by IBM assigns 
distinctly different uses block by block. The outline of IBM's memory 
block assignments is shown in Figure 2-1.

     The first ten memory blocks (blocks 0 through 9) are defined as RAM 
in all of the PCs. This is ordinary working memory, up to 640K bytes. 
All PCs have memory installed in at least the first 64K block, or block 
0, the lowest addresses of which are used by the operating system 
software and are not available for general user applications. Any 
additional RAM occupies a contiguous address space from block 1 up to 
the top of block 9. If the PC is not fully populated with RAM, the 
corresponding address blocks are left idle with no function.

     The last six memory blocks are reserved for various system and 
hardware support functions. The A and B blocks, physically located on 
the video controller circuit board, are used for video memory in the PC, 
PC-XT, and PC-AT models. The B block is divided into two 32K byte 
sub-blocks used by the conventional Monochrome Display Adapter and the 
Color/Graphics Adapter. The A block of memory is reserved for video 
memory expansions, such as those recently introduced as part of the 

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 3


Enhanced Graphics Adapter and the Professional Graphics Adapter.


       ┌──────────────── figure goes here ─────────────────────┐
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       └───────────────────────────────────────────────────────┘

              Figure 2-1.  IBM PC Memory Block Assignments


     The C block of memory is set aside for any additions to the ROM 
system software that is permanently installed on the motherboard. These 
additions are usually BIOS extensions to support new types of peripheral 
devices. This memory block was first used for the ROM-BIOS routines 
supporting the hard disk drive that appeared with the PC-XT model. 
Similar to the A and B blocks' video memory, this C block memory is 
typically installed in the PC as part of an expansion circuit board.

     According to the IBM memory block outline, the D and E blocks are 
set aside for ROM memory in "plug-in" cartridge software, such as that 
used with the PCjr model. Cartridge software is not presently supported 
in the regular PC, PC-XT, and PC-AT models, although it could 
conceivably be added to any of these models.

     The F block of memory is set aside for the ROM software that is 
permanently installed on the PC's motherboard. This memory area is home 
to the system startup and diagnostics routines, the ROM-BIOS functions, 
and the ROM-BASIC (or "cassette" BASIC) routines. It is because of the 
contents of the F block of memory that this manual exists: this is where

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 4


the PC owner may seek to backup the most important software used by his 
computer. The organization and versions of the several software 
(actually "firmware", if you want to be particular) components housed in 
the F block ROM are detailed in Chapter 4.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 5


3.  PC MEMORY ADDRESSING


     As mentioned in the previous chapter, the Intel 8088 microprocessor 
is capable of addressing up to 1,048,576 memory locations, which is the 
largest value representable by a 20-bit binary number (2 raised to the 
20th power). The 8088, as a 16-bit processor that cannot work directly 
with binary numbers containing more than 16 bits, would not be able to 
address more than 65,536 (2 raised to the 16th power) memory locations 
if it were not for a clever scheme known as segmented addressing.

     Segmented addressing divides the total addressable memory into a 
number of segments containing 64K bytes each. Each segment begins at a 
memory location that is evenly divisible by 16 bytes. This beginning 
location is known as the segment address, or segment paragraph. 
Individual bytes within this memory segment are referenced by an 
additional address known as the offset address. The offset address, 
which is always measured relative to the beginning of a segment, points 
to an exact location within the 64K byte segment.

     Physical memory addresses are created by combining the 16-bit 
segment paragraph with the 16-bit offset address, as illustrated by the 
binary addition shown in Figure 3-1. In representing memory addresses 
that are multiples of 16 bytes, the segment paragraph is thus shifted 
four binary bits to the left. Adding the segment paragraph to the offset 
address gives a 20-bit address, which now can access the full 1,024K 
bytes of addressable memory in the PC.


       ┌───────────────── figure goes here ────────────────────┐
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       └───────────────────────────────────────────────────────┘

      Figure 3-1.  Binary Addition of 16-Bit Segment Paragraph and
                   Offset Address to Yield a 20-Bit Segmented Address



THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 6


     The previous chapter stated that 1,024K bytes of addressable memory 
may be referenced by means of a 5-digit hexadecimal number. Since the 
segment paragraph is always a multiple of 16 bytes, its hexadecimal 
value will always have a zero in the last place, such as hex FE6A0 or 
hex 34560. In use, the segment paragraph is expressed as a 4-digit 
hexadecimal number, with the units place zero dropped, in order to yield 
an equivalent 16-bit binary value for manipulation by the 8088 
microprocessor. The offset address is likewise expressed as a 4-digit 
hexadecimal number, which also thoroughly covers the 64K bytes contained 
in the memory segment.

     As for notation, the segmented address is written as nnnn:nnnn, 
with the segment paragraph address on the left side of the colon and the 
offset address on the right.

     To put all of this together, consider the evaluation of a segmented 
address that is written as 1234:6789

      12340  Segment Paragraph Address (hex), shifted left four bits
    +  6789  Offset Address (hex)
    ───────
      18AC9  Full 20-bit Segmented Address (hex)

This expanded 20-bit address is for a byte physically located a little 
more than half-way into block 1 of the PC's addressable memory.

     Since a segment can begin as frequently as every 16 bytes, it is 
quite easy to express any particular memory location by means of a 
variety of segmented addresses, depending upon the choice of the segment 
paragraph. When discussing PC memory in terms of IBM's block outline, it 
is easiest to use segment paragraph addresses that correspond to the 
beginning addresses of the sixteen memory blocks. For the remainder of 
this manual, the F block ROM memory will be described using segmented 
addresses of the form F000:nnnn, where nnnn is the offset address within 
this 64K byte block.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 7


4.  PC ROM SOFTWARE AND HARDWARE


     In this chapter we will describe the basic organization of the F 
block ROM software (firmware) in the PC, and note some of the typical 
software markers and IDs that will be useful to know about before you 
explore on your own. You will also learn about the typical ROM hardware 
configuration in the various PC models, and how this relates to the 
software organization.

     Beginning in this chapter, references will be made to the contents 
of specific memory locations in the F block ROM. You can scan these 
addresses using the DOS utility DEBUG or a simple BASIC program to 
display the value of each byte. Much more conveniently, you can zoom 
around the ROM contents by using a memory display utility such as the 
excellent public domain program CORELOOK. Appendix C describes the 
necessary DEBUG commands and BASIC program statements, as well as the 
features and use of CORELOOK.

4.1  ROM SOFTWARE ADDRESSES AND MARKERS

     The F block ROM software is arranged to occupy memory address 
ranges consistent with the start/end addresses of eight sequential 8K 
(2000 hex) byte sub-blocks. This is not totally arbitrary, as the ROM 
chips are made in various capacities that are compatible with this 
sub-block size. In the IBM PC ROM set, the separate functional sections 
of the ROM software (BIOS and ROM-BASIC) start at the beginning of an 8K 
byte sub-block and spread over one or more of these sub-blocks. There 
may be sections of empty memory addresses scattered throughout these 
sub-blocks.

     In the PC and PC-XT models, the system startup and ROM-BIOS 
routines are located in the highest address 8K byte sub-block, from 
address F000:E000 through F000:FFFF. If you display the character 
representations of the hex code, you can find some bits of code at the 
beginning of this memory segment that appear to identify IBM's 
handiwork. At the end of this sub-block, IBM has encoded a ROM version 
release date and a machine ID marker.

     The ROM version release date is located in an 8-byte memory area 
from F000:FFF5 through F000:FFFC. This date is in the common American 
date format with two digits apiece for the month, day, and year. As 
listed below, this date marker is useful for identifying the particular 
IBM new machine release and/or ROM update. Note that the ROM release 
date is essentially the ROM-BIOS version date since the ROM-BASIC code 
has remained unchanged at least since the 10/27/82 release.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 8


       Release Date    IBM Machine / Update
       ────────────    ────────────────────────────────────────
         04/24/81      Original PC
         10/19/81      Revised PC (bug fixes)
         08/16/82      Original PC-XT
         10/27/82      Upgrade of PC to PC-XT BIOS level
         11/08/82      Original Portable PC (used in later XTs)
         01/10/84      Original PC-AT (6 MHz Model 068)
         06/10/85      Upgraded PC-AT
         11/15/85      Upgraded PC-AT (8 MHz Model 339, with
                          101-key enhanced keyboard)
         01/10/86      Upgraded PC-XT **
         05/09/86      Upgraded PC-XT **

                         ** Revision for 101-key enhanced keyboard.
                            See the note at the end of this Chapter.

     The machine ID is a single byte located at F000:FFFE. The published 
values for the IBM machine ID markers are listed below. Note that these

         ID:  Dec   Hex            Machine
         ──────────────      ──────────────────────
              255    FF       Original PC
              254    FE       PC-XT and Portable PC
              252    FC       PC-AT
              251    FB       Upgraded PC-XT **

machine ID markers are apparently not always consistent: there are 
reported instances of PC-XTs bearing the PC marker. In any event, you 
may want use this ID marker in the ROM-BIOS as a secondary means of 
identifying the code's vintage.

     Also in the PC and PC-XT models, the ROM-BASIC code resides within 
a 32K byte area of F block memory from addresses F000:6000 through 
F000:DFFF. As mentioned above, this code has been unchanged for quite 
some time. As of now, there is no particular BASIC release date marker 
to be concerned about as long as you deal with a ROM release date of 
10/27/82 or later.

     In the PC-AT model, the ROM-BIOS routines have been expanded 
considerably to accommodate the additional capabilities of this machine. 
The primary BIOS routines and the ROM-BASIC are in the same locations as 
in the PC and PC-XT models, but the expanded BIOS routines have been 
"wrapped around" to occupy the lowest 24K bytes of F block memory from 
addresses F000:0000 through F000:5FFF.

4.2  ROM HARDWARE ON THE SYSTEM BOARD

     In keeping with the 8K byte sub-block convention described above, 
the system motherboard in the IBM PC and PC-XT models carries five 8K 

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 9


byte ROM chips for a total of 40K bytes (32K bytes of ROM-BASIC and 8K 
bytes of BIOS) of system ROM.

     Components on the motherboard are indexed by means of alphanumeric 
codes printed on the circuit board. The ROM sockets on the IBM PC/XT 
motherboard are labeled with a code sequence such as U29 through U33, 
for a five ROM chip setup. The highest number socket typically 
corresponds to the highest F block memory addresses. Additional 
information on the location of the ROM sockets on the motherboard may be 
found in Chapter 7.

     The socket containing the PC/XT ROM-BIOS will be the highest 
address portion of memory in the F block. This BIOS is typically carried 
in an 8K byte ROM chip, using memory addresses F000:E000 through 
F000:FFFF, as described earlier. The full set of 8K byte ROM chips fill 
up the IBM PC/XT ROM sockets as shown below. Note that the eight 
possible 8K byte ROM chip/sockets are numbered 0 to 7, from lowest to 
highest memory address.

      ROM Socket No.    Memory Addresses       Function
      ──────────────  ─────────────────────   ──────────
       7 (U33)        F000:E000 - F000:FFFF    ROM-BIOS
       6 (U32)        F000:C000 - F000:DFFF    ROM-BASIC
       5 (U31)        F000:A000 - F000:BFFF       "
       4 (U30)        F000:8000 - F000:9FFF       "
       3 (U29)        F000:6000 - F000:7FFF       "

As shown above, additional ROM chips for the ROM-BASIC routines will be 
located below (address-wise) the ROM-BIOS in contiguous memory.

     The IBM PC-AT utilizes a quite different ROM hardware configuration 
to make optimal use of the 16-bit data bus on the PC-AT's 80286 
microprocessor.  The ROM chips are typically designed as "by 8" devices, 
meaning that they can be accessed 8 bits at a time.  Since 16-bit data 
read accesses are faster if the system doesn't have to read the same ROM 
chip twice in sequence, IBM arranged the PC-AT ROMs as two 8-bit ROMs 
with their addresses interleaved.  In other words, all of the even 
numbered bytes (at offsets 0,2,4,6,....) are on one chip and all of the 
odd numbered bytes (at offsets 1,3,5,7,....) are on the other chip.  
With this arrangement, each 16-bit data access can set a single 
segmented address and read one "slice" out of the pair of interleaved 
ROM chips.

     Even though the ROM chip hardware addresses are interleaved on the 
data bus in the PC-AT, the F-block ROM-BIOS and ROM-BASIC code is still 
located within the same memory address areas described in section 4.1.

     The original model IBM PC-AT motherboard used four 16K byte ROM 
chips to carry the full 64K bytes of ROM available in the F block. The 
four-chip ROM arrangement in this model IBM PC-AT is as follows;

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 10


     ROM Socket No.    Memory Addresses         Function
     ──────────────  ─────────────────────   ───────────────
          3          F000:8001 - F000:FFFF   ROM-BIOS, BASIC: Odd Bytes
          2          F000:8000 - F000:FFFE   ROM-BIOS, BASIC: Even Bytes
          1          F000:0001 - F000:7FFF   ROM-BIOS, BASIC: Odd Bytes
          0          F000:0000 - F000:7FFE   ROM-BIOS, BASIC: Even Bytes

     Although the current IBM PC-AT motherboard has four ROM sockets as 
in the original model, apparently only two of these sockets are mapped 
to the F block of memory. A pair of the newer 32K byte ROM chips are now 
used to carry the F block memory. This two-chip ROM arrangement in the 
IBM PC-AT is as follows;

     ROM Socket No.    Memory Addresses         Function
     ──────────────  ─────────────────────   ───────────────
           1         F000:0001 - F000:FFFF   ROM-BIOS, BASIC: Odd Bytes
           0         F000:0000 - F000:FFFE   ROM-BIOS, BASIC: Even Bytes




════════════════════════════════════════════════════════════════════════

NOTE: Upgraded PC-XT ROM-BIOS for Enhanced Keyboard

     The PC-XT ROM-BIOS versions dated after 01/10/86 and containing a 
machine ID marker of FB hex are upgrades to accommodate the new 101-key 
enhanced keyboard.  The new features of this keyboard can be used only 
with systems that support it by means of a substantially enhanced 
interrupt 16H handler in the BIOS.  This additional code now causes the 
PC-XT's BIOS to spill out of the previous F000:E000 to F000:FFFF memory 
space and into the 8K byte sub-block at F000:0000 to F000:1FFF.  This is 
similar to the manner in which the PC-AT's expanded BIOS routines have 
been "wrapped around" to occupy the lowest F block memory addresses.

     Working with the ROM software from these latest model PC-XT's will 
require that extra steps be taken, similar in theory and technique to 
those described in this manual, to provide for the additional ROM-BIOS 
8K byte sub-block at addresses F000:0000 to F000:1FFF.  This may include 
using a different capacity ROM chip and a modified allocation of code 
among the chips than what is described elsewhere based on the earlier 
model PC-XT.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 11


5.  THE MAKING OF A ROM CHIP

     This section describes the Erasable Programmable Read Only Memory 
(EPROM) chips used to backup the PC's ROM software, and the hardware 
used to burn the program code into these chips.

5.1  EPROM INTEGRATED CIRCUIT CHIPS

     The types of EPROM chips used to backup the PC, PC-XT and PC-AT ROM 
software are members of what is known as the 27xxx series. The chips in 
this series are similar in physical appearance, as shown in Figure 5.1, 
but vary in capacity, access speed, and programming characteristics.


       ┌────────────────── figure goes here ───────────────────┐
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       └───────────────────────────────────────────────────────┘

            Figure 5-1.  Features of the 27xxx EPROM Family


     You will need to obtain and work with the correct capacity 27xxx 
EPROMs for your ROM backup. The "xxx" characters in the 27xxx chip 
number stand for the EPROM capacity in kilobits, or eight times the 
kilobyte capacity. The table below shows the capacities for several 
members of this series.

                         Chip Capacity
       Chip Number       bits     bytes
       ───────────     ───────   ───────
         2764           65,536    8,182 (8K)
         27128         131,072   16,384 (16K)
         27256         262,144   32,768 (32K)
         27512         524,288   65,536 (64K)

Throughout this manual, the PC ROM software has been described in terms 
of kilobytes, so the capacities shown in parentheses are the ones that 
you need to work with.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 12


      In addition to capacity, the 27xxx series EPROMs are available in 
different access speeds of 200, 250, or 450 nanoseconds. This access 
speed is typically designated by some form of suffix (usually 2 or 3 
digits) to the basic chip number. For instance, a number 2764-25 would 
indicate an 8K byte capacity with a 250 nanosecond access time. You 
should use EPROMs with access speeds that at least meet your PC's 
original specifications, but faster chips will also work.

     Other letters may appear in the chip number, such as 27xxxA (a 
lower programming voltage) or 27Cxxx (low power consumption CMOS 
technology chips). Consult with your EPROM vendor for issues of chip 
compatibility. Also, some EPROM manufacturers may add characters to 
these basic chip numbers, and, again, your vendor can help in making 
sure that you obtain the functional type that you need.

     As the "E" in EPROM stands for erasable, a few words about the 
erasure window are definitely in order. If you look through the small 
circular window on the EPROM you can see the tiny semiconductor chip 
that constitutes the memory. While the 27xxx series EPROMs are 
programmed by applying varying voltages to the device's pins, they are 
erased by ultraviolet light shining through the erasure window onto the 
integrated circuit chip. This erasure technique typically involves 
exposing the unshielded EPROM for 10 to 20 minutes under a high 
intensity ultraviolet bulb in a specially built EPROM eraser. An EPROM's 
contents can, however, be lost by prolonged exposure to the low level of 
ultraviolet light present in common light sources. Before you burn your 
code onto an EPROM, permanently cover the erasure window with a piece of 
opaque tape or other such material.

     In addition to normal erasure, the EPROM's contents can be zapped 
by static charges developed during handling. Be cautious about grounding 
your equipment and yourself before handling these devices. Your vendor 
should place the EPROMs in a protective anti-static tube typically used 
for transporting integrated circuit chips.

     As far as EPROM sources and prices, a good place to start is with 
the advertisements in the back sections of major computer magazines such 
as BYTE or PC MAGAZINE where numerous vendors offer fairly low mail 
order prices. If you can find a local discount electronics supplier, you 
may well be able to beat the mail order houses' total cost.

5.2  EPROM PROGRAMMERS

     The programming hardware used to record code onto a blank EPROM 
chip is commonly referred to as a "blaster" or "burner". Originally, 
these devices were available as costly stand-alone professional 
equipment, usually designed to program a wide variety of ROM chips. If 
you have access to one of these commercial style EPROM burners and plan 
to use it for your ROM backup procedures, then you can probably skip the 
rest of this section. Continue reading if you need to obtain an EPROM 
programmer.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 13


     Recently, a number of very specific and relatively inexpensive 
EPROM blasters have appeared that are obviously targeted for the PC 
hobbyist market. These new PC-based EPROM blasters are designed as 
plug-in circuit cards that fit into one of the PC's expansion slots and 
are typically capable of burning only the 27xxx series of EPROMs. These 
blasters come with software that runs on an IBM PC or compatible. While 
these blasters are pretty much "bare bones" hardware for one-at-a-time 
burning, the accompanying software usually offers the following 
convenient features;

     o  Programs various 27xxx series EPROMs
     o  Menu driven selection of EPROM type sets programming voltage
     o  Read/write EPROM to/from buffer
     o  Read/write buffer from/to disk file
     o  Verify EPROM is blank
     o  Compare EPROM and buffer
     o  Variable buffer and EPROM offsets and read/write length
     o  Copy PC memory into buffer
     o  Edit buffer contents

You should look for at least these features in a PC-based EPROM blaster 
that you would obtain to use to backup your PC's ROM. You can do without 
the last two features on this list if you make use of other available 
software. For example, you could use the public domain program PC-DUMP 
(see Appendix C.) to download PC memory to a disk file which could then 
be edited using the DOS utility DEBUG.

     With reasonable user documentation and good menu driven software, 
the process of burning an EPROM is actually quite simple. At the risk of 
appearing to stop short of giving out the really meaty information on 
the actual process of blasting the EPROMs, we can only advise you that 
using one of these PC-based menu driven EPROM programmers is a pretty 
uninspiring operation. Other than some of the helpful hints contained in 
Chapter 8, there is not much more that this manual can do to prepare you 
to use one of these devices.

     Appendix D. discusses some of the sources where you can find these 
low cost PC-based EPROM blasters for sale, as well as some typical 
prices at the time of this writing.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 14


6.  PUTTING IT ALL TOGETHER


     Now that you have covered all of the background details related to 
backing up your ROM software, its time to develop a summary of the steps 
that you might typically go through.

     The first step, obviously, is to prepare your backup disk files of 
the ROM software and store these away for safekeeping. The whole point 
of this manual is protection against a failure of, or damage to, the ROM 
chips, so download your backup now.

1.   Download specific portions of the ROM code to individual disk  
files. Depending on the capacity of the ROM chips used in your  
particular model of PC (Chapter 4), the code in these downloaded  
disk files should correspond exactly to the ROM memory addresses  
that would be occupied by the replacement EPROM chips. (You could  
download the entire F block contents to a single file and later  
break this up into the appropriate sub-blocks using the software  
provided with some EPROM programmers, but the specific file  
approach will assure flexibility and reduce the risk of errors down  
the road.)

     As an example, you might backup your PC-XT ROM using the following  
parameters with the PC-DUMP program (Appendix C).

        Segment Paragraph   Bytes Written
             Address        to Disk File      Disk File Name
        ─────────────────   ─────────────     ──────────────
              FE00           2000 (hex)        FE00ROM.DAT
              FC00             "               FC00ROM.DAT
              FA00             "               FA00ROM.DAT
              F800             "               F800ROM.DAT
              F600             "               F600ROM.DAT

     The five backup files created in this example correspond to the  
five 8k byte type 2764 EPROM chips that could be programmed as  
replacements.

In the event that you someday need to replace a damaged or faulty ROM 
chip(s) in your PC, the following steps are typical.

2.   Determine, if possible, which of the original ROM chips is faulty.  
If this is not possible, plan on replacing the full set. If you  
replace the full set and your curiosity is high, you can return the  
individual original chips on a trial-and-error basis and isolate  
the culprit chip.

3.   Purchase the type of blank EPROM chip(s) that are to be used with  
your PC's particular ROM hardware capacity and speed (Chapter 5).  

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 15


For a full ROM set in a PC-XT, you would buy five type 2764 EPROMs  
with an access speed of 250 nanoseconds (or faster).

4.   Using either a PC-based or a stand-alone EPROM programmer, burn the  
code from the backup disk file(s) onto the blank EPROM(s). If you  
have prepared your backup disk files as described in step (1)  
above, this operation will involve one EPROM per disk file. Label  
the programmed EPROM(s) with the corresponding ROM software memory  
address to assure matching with the proper ROM socket(s) during  
installation.

5.   Open up your PC's case, locate the row of motherboard sockets  
holding the ROM chips, and look for the individual socket labels  
printed on the circuit board (Chapter 4). Determine the ROM sockets  
corresponding to high and low memory addresses, and make certain  
that you can identify the memory addresses of all involved sockets.  
Note the orientation of the casing notches on the existing ROM  
chips.

6.   Remove the existing ROM chip(s) and insert the replacement  
EPROM(s), making certain that all of the EPROM's pins properly  
contact in the socket. If the two pin rows seem to be wider than  
the socket holes, tilt the chip and lightly insert one row then  
press the chip towards the inserted row until the other row can be  
inserted. Be sure that the replacement EPROM and the socket are  
properly matched according to the ROM memory addresses described in  
Chapter 4.

7.   After installing the replacement EPROM(s) and successfully booting  
the PC, verify the contents of the replacement chip(s). In the same  
manner that the original ROM software backup disk file was made,  
download a disk file copy of the memory contents on the replacement  
EPROM(s). Check this validation disk file against the original  
backup disk file using the DOS file comparison utility program  
COMP.COM. The two files should compare with no reported mismatches.



════════════════════════════════════════════════════════════════════════
                             IMPORTANT NOTE
The ROM chips used in some models of the IBM PC are not pin-compatible 
with the 27xxx series EPROM chips.  If you encounter this situation, the 
EPROM usage described here will not allow you to install the backup 
read-only memory on your original IBM motherboard.  Obtaining and 
installing an inexpensive clone motherboard to carry your 27xxx 
EPROM-based backup ROM set may be an attractive option in the event of 
an original ROM malfunction, depending upon the price of the IBM 
replacement ROMs and how you value inconvenience and/or loss of business 
due to delays.
════════════════════════════════════════════════════════════════════════

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 16


7.  SO YOU BOUGHT A PC-CLONE

     The personal computer marketplace has seen a proliferation of new 
machines that are often described as IBM "compatibles" or "clones". Some 
of these models, usually from major manufacturers of computer hardware 
and peripherals, are unique hardware designs offering IBM compatibility 
by running the MS-DOS operating system and the applications software 
originally written for the IBM PC. More common now are the PC-Clone 
computers that clearly attempt to duplicate the look, feel, and 
circuitry design of the real IBM models. Assembled from generic 
components, these low price PC-Clones are being sold by hundreds of 
vendors, from chain computer stores and large mail order outlets to the 
garage and swap meet crowd.

     These PC-Clones are available due to the fact that IBM chose to 
design its family of personal computers around readily available 
components and to openly disclose the details of the system architecture 
and operation. This open architecture cleared the way for the avalanche 
of third-party hardware and software enhancements that are on the market 
today. It also allowed a number of enterprising printed circuit board 
designers and manufacturers to provide the inexpensive IBM compatible 
motherboards for the PC-Clones.

     One part of the PC design, however, that IBM did not release into 
the public domain is the system software that is permanently recorded in 
read-only-memory (ROM) integrated circuit chips mounted on the 
motherboard. This built-in software contains the primitive system 
startup and initialization routines, the Basic Input/Output System 
(ROM-BIOS), and the core of the BASIC and BASICA programming languages 
(ROM-BASIC). By copyrighting the ROM software and declining to license 
its use in any computers but its own, IBM managed to retain control of 
the key to this otherwise open system.

     Over the years, PC systems programmers have been able to write 
legal functional equivalents of the system startup routines and the 
ROM-BIOS machine language routines that provide support services for the 
operation of the computer. Every PC-Clone comes equipped with a 
work-alike ROM-BIOS, some of which are reputed to be very good and some 
of which are homebrew hacks of unknown reliability and compatibility. 
The frequently seen PC-Clone advertising claim of "fully IBM compatible" 
may be a compromise: while the well behaved popular software may work 
fine, the more quirky and/or aggressive system utilities and 
applications programs may fail due to an unsupported or incomplete BIOS.

     The PC-Clones do not, as a rule, come with a hardware functional 
equivalent of the ROM-BASIC software, even though most of the PC-Clone 
motherboards are built with the appropriate sockets to hold these ROM 
chips. (This may be a measure of the degree to which clone components 
are carbon copies, when circuit board space is taken up by sockets that 
the merchants can not possibly fill with the intended chips.) Instead, 

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 17


PC-Clone owners wishing to run interpreted IBM BASIC or BASICA programs 
must use an all-disk-based functional equivalent, such as Microsoft's 
GW-BASIC, which combines the disk and ROM routines of the original IBM 
BASIC and BASICA. Not all of the disk-based BASIC interpreters are fully 
compatible with the IBM BASIC interpreters, and disk versions will not 
usually support add-on language extensions, such as the Hercules HBASIC 
graphics extension, designed to look for and modify IBM BASICA.

     You do not, however, have to pass up the tremendous price advantage 
of a PC-Clone just because it does not come equipped with a True Blue 
set of ROM software. If you are willing to be a do-it-yourself computer 
experimenter, you can make a full set of 100% IBM compatible ROM chips 
and install them in your PC-Clone. You can begin by exploring the 
structure of ROM-based software on a PC using convenient public domain 
software. And your ROM programming experiment can be completed with 
fairly inexpensive and easy-to-use hardware advertised in the major 
computer magazines or available through local electronics suppliers 
(yes, and even at some swap meets).

     Since the marketplace in filled with clones of the IBM PC, PC-XT, 
and PC-AT models, this manual describes the differences in ROM software 
and hardware among these three original IBM computers. In keeping with 
the theme of this manual as an educational text, you will not find 
specific references or instructions for any particular brand or model of 
PC-Clone. In mastering this material, you should acquire an 
understanding of ROM software and hardware anatomy and learn what to 
look for to determine if your PC-Clone is a suitable candidate for 
surgery. It is up to you, however, to perform the operation to find out 
if the patient will be better than new.

     One final note. It should be perfectly clear that, in making your 
own experimental set of compatible ROM chips, you will be dealing with 
software copyrighted by IBM. YOU ARE RESPONSIBLE FOR ASSURING THAT YOUR 
USE DOES NOT VIOLATE THE COPYRIGHT LAWS PROTECTING IBM'S SOFTWARE. The 
PC-Clone vendors already know all that there is to learn from this 
manual, and they are not foolish enough to make illegal copies of ROM 
sets for sale or trade. Keep your activities educational and hobby 
oriented, and enjoy the experience of learning about ROM technology and 
the inner workings of your computer.

7.1  PC-CLONE ROM HARDWARE

     The PC/XT-Clone motherboards typically contain at least five 
sockets for Erasable Programmable Read Only Memory (EPROM) chips, only 
one of which will be used for the clone's BIOS. Figure 7-1 illustrates 
the general location of the ROM chips/sockets on an PC/XT-Clone 
motherboard. Although the position of the EPROM sockets is different on 
some of the clone motherboards, the row of sockets is easily identified 
by the presence of the EPROM chip that carries the ROM-BIOS. (The EPROM 
chips themselves are described in Chapter 5.)

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 18


       ┌────────────────── figure goes here ───────────────────┐
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       └───────────────────────────────────────────────────────┘


                Figure 7-1. Typical XT-Clone Motherboard
                            Component Layout


     Components on the motherboard are indexed by means of alphanumeric
codes printed on the circuit board. Depending on the manufacturer, the
EPROM sockets on the PC/XT-Clone motherboard will be labeled with a code
sequence such as U30 through U34 (for a five-socket setup), or perhaps
something a little more obvious like ROM3 through ROM 7. Look at the
label for the socket that holds the ROM-BIOS, it should be the highest 
numbered socket.

     The socket containing the PC/XT-Clone ROM-BIOS will be the highest 
address portion of memory in the F block. This BIOS is typically carried 
in an 8K byte EPROM chip, using memory addresses F000:E000 through 
F000:FFFF, as described earlier. If you continue to use 8K byte EPROMs 
for your experiment, you would fill up your PC/XT-Clone's EPROM sockets 
as follows;

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 19


      ROM Socket No.    Memory Addresses       Function
      ──────────────  ─────────────────────   ──────────
            7         F000:E000 - F000:FFFF    ROM-BIOS
            6         F000:C000 - F000:DFFF    ROM-BASIC
            5         F000:A000 - F000:BFFF       "
            4         F000:8000 - F000:9FFF       "
            3         F000:6000 - F000:7FFF       "
            2                                 (not used)
            1                                     "
            0                                     "

As shown above, additional EPROMs for the ROM-BASIC routines will be 
located below (address-wise) the ROM-BIOS in contiguous memory. Note 
also that if your PC/XT-Clone motherboard has more than five ROM 
sockets, these extras will not be used when installing a compatible ROM 
set.

     Although the new IBM PC-AT model uses two F block ROM sockets in 
what appears to be a bank of four sockets, many of the AT-Clones are 
built with only two EPROM sockets on the motherboard. For this reason, 
the AT-Clone ROM will be described for a two-chip two-socket setup. If 
you find that your AT-Clone has two EPROMs residing in a four-socket 
bank, you can adapt the following descriptions to the even and odd 
address sockets of the pair that are used.

     Since the PC-AT hardware design uses interlaced address ROMs to 
cover the entire F-block of memory addresses, your AT-Clone will have 
EPROMs in both of the available sockets. You will have to look at the 
printed component labels and/or consult your machine's documentation to 
determine which is the even or odd address socket. When you experiment 
with your compatible ROM set, you will fill up your AT-Clone's EPROM 
sockets as follows;

     ROM Socket No.    Memory Addresses         Function
     ──────────────  ─────────────────────   ───────────────
           1         F000:0001 - F000:FFFF   ROM-BIOS, BASIC: Odd Bytes
           0         F000:0000 - F000:FFFE   ROM-BIOS, BASIC: Even Bytes

Unused ROM sockets are not an issue in those AT-Clones designed to use a 
pair of 32K byte EPROMs.

     For those of you receiving your initial introduction to the 27xxx 
family of EPROM chips used on the PC-Clone motherboard, a good place to 
start is "under the hood" of your computer. Remove the case from your 
PC-Clone and look for the ROM sockets, as shown in Figure 7-1, and the 
ROM-BIOS chip(s). The ROM BIOS chip supplied with your PC/XT-Clone is 
typically a type 2764 EPROM. In an AT-Clone, the ROM-BIOS will typically 
be provided on a pair of type 27256 EPROMs.

     If you are "under the hood", note the chip number and speed 

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 20


designation printed on the ROM-BIOS chip(s). The numbers may be covered 
up by a piece of tape or other opaque material placed over the erasure 
window. If so, you should CAREFULLY peel back enough of the tape so that 
you can read the chip number. If you have correctly located the ROM 
chip(s), and your PC-Clone is a candidate for the type of ROM software 
backup covered by this manual, then the chip designations should 
correspond to the descriptions in Chapter 5.

     You should obtain and use a uniform set of 27xxx series EPROMs with 
an access time equal to, or less than, that of the ROM-BIOS EPROM that 
was supplied with your PC-Clone. You should probably stay with the same 
type of 27xxx chip as provided for your PC-Clone's ROM-BIOS, or consult 
with your EPROM vendor for issues of chip compatibility.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 21


8.  HELPFUL HINTS

     This section contains an assortment of additional helpful hints and 
practical ideas related to PC ROM backup procedures, based on the ROM 
programming experiences of others.

A.   First and foremost, there is NO CERTAINTY that either the IBM BIOS  
or ROM-BASIC will work on all PC motherboards - although it seems  
more likely that the ROM-BASIC should work in cases where system  
hardware incompatibility prevents a BIOS replacement.

B.   Compatibility of the ROM-BIOS can require a specific release date  
(See Chapter 4.). For example, a motherboard designed as an XT may  
not work with a BIOS associated with one of the original/updated  
IBM-PC release dates.

C.   Buy an extra EPROM chip or two. These devices are sensitive to  
static charges, and you can easily zap one during handling and  
installation. Having an extra one on hand may save a lot of  
frustration, especially if you buy them through the mail.

D.   Make a disk copy of the applicable memory contents before you  
attempt to remove any ROM chip from the motherboard of a PC. This  
is easy insurance in the event that you damage the original chip in  
removing it from its socket and later decide to use it again. With  
a backup disk copy on hand, you can always program a replacement.

E.   The variations in the 27xxx series EPROMs (27xxx, 27Cxxx, 27xxxA)  
require different programming voltages to be applied, either 21 or  
12.5 volts. The EPROM programmer hardware or software should  
clearly allow you to either specify exactly which chip variation is  
to be programmed or allow you to specify which voltage level to  
use. Using too high of a programming voltage can damage a chip. If  
in doubt, ask your EPROM vendor about the proper voltage for the  
chips that you buy.

F.   Pulling EPROM chips from their sockets without damaging them can be  
a little tricky if you aren't using the proper tool. The fingers  
often aren't enough to do the job and you can easily mutilate the  
chip's pins or fracture the casing by extracting it with pliers  
large enough to span the chip. If you are going to do much  
reinstalling of EPROMs, you should consider obtaining a special  
chip puller tool. These are available at electronics suppliers for  
about the same price as two or three ruined EPROM chips.

G.   The EPROM chips must be oriented properly when installed in the  
sockets on the motherboard. Before removing your PC's ROM chips,  
note the location of the notched end of the chip casing. Any EPROMs  
that you install should be inserted into the sockets with the  
casing notches aligned in this same direction.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 22


APPENDIX A.   HEXADECIMAL ARITHMETIC

     Every operation in a computer is based on binary numbers, which 
tend to become cumbersome to represent in print when the numerical 
values are large. Hexadecimal notation is a convenient way to represent 
large binary numbers.

     Hexadecimal numbers are base-16, just as the familiar decimal 
numbers are base-10. Since we still are limited to the ten digits (0 
through 9) in our decimal system, we need to define an additional six 
characters to use to represent the sixteen digits (0 through 15) 
necessary for a base-16 numbering system. In hexadecimal notation, the 
characters A through F are used to represent the values 10 through 15, 
as shown below.

          Hex     Decimal            Hex     Decimal
        ───────   ───────          ───────   ───────
           0         0                8          8
           1         1                9          9
           2         2                A         10
           3         3                B         11
           4         4                C         12
           5         5                D         13
           6         6                E         14
           7         7                F         15

     Hexadecimal numbers are constructed from hex digits in the same 
manner that you build decimal numbers. For example, the decimal number 
5500 would be expressed as 157C in hex notation, as follows;

               1 times 4096 (16x256) = 4096
               5 times  256 (16x16)  = 1280
               7 times   16          =  112
              12 times    1          =   12
                                      ─────
                                       5500

Just as each successive place in decimal notation represents the next 
higher power of ten, each successive place in hexadecimal notation 
represents the next higher power of sixteen.

     Hex numbers work so well as substitutes for binary numbers because 
each hex digit represents four binary bits. As shown in Figure A-1, a 
four bit binary number has sixteen possible combinations, requiring a 
base-16 system to cover all combinations with one character. The PC 
generally handles data as either eight bit bytes or two byte (16-bit)  
words requiring two or four digit hex representations, respectively. The 
decimal and hex values of the bit positions are shown in Figure A-2.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 23


       ┌────────────── reduced table goes here ────────────────┐
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       └───────────────────────────────────────────────────────┘

         Figure A-1.  Binary Bit Values and Hexadecimal Digits



       ┌────────────── reduced table goes here ────────────────┐
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       └───────────────────────────────────────────────────────┘


  Figure A-2.  Decimal and Hexadecimal Values of the Bit
               Positions in an 8-Bit Byte and a 2-Byte Word


     As described in Chapter 3, the segmented addressing scheme of the 
PC's 8088 microprocessor employs a pair of 16-bit binary numbers to 
construct a complete 20-bit memory address. Each of these 16-bit binary 
numbers can be represented by a four digit hex number from 0000 through 
FFFF. You can verify this range for yourself by adding up the decimal 
values listed in Figure A-2.

     As an aid in converting hexadecimal numbers to decimal numbers, and 
vice versa, the decimal equivalents of each hex digit in the first five 
places are shown in Figure A-3. To convert a hex value into a decimal 
value, you can work in either direction across the five places. To 
convert a decimal number to hex notation, start with the fifth (or left) 
position and work to the first place successively finding the largest 
hex digit that is less than, or equal to, the remaining decimal value.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 24


       ┌────────────── reduced table goes here ────────────────┐
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       └───────────────────────────────────────────────────────┘


                Figure A-3.  Decimal Equivalents of the
                             Hexadecimal Digit Positions


THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 25


APPENDIX B.  ASCII CHARACTERS

     The 8-bit bytes of data stored and manipulated by the IBM PC family 
have values ranging from 0 through 255 (0 through FF hex), which also 
represent the numeric codes for the 256 distinct characters used by 
these computers. These characters and numeric codes are known as ASCII 
characters and codes.

    The first 128 characters (0-127 decimal, or 0-7F hex) are the 
standard or true ASCII characters, which date from the pre-PC days. 
These standard characters are handled consistently among many computers, 
except for variations in the first 32 characters which have uniform 
ASCII meanings as codes for printer and console control, but which IBM 
also uses for special display characters. The second 128 characters 
(128-255 decimal, or 80-FF hex) make up the extended ASCII character set 
that is unique to the IBM PC family and, of course, the PC-Clones.

     Memory display utility programs such as CORELOOK and DEBUG will 
display both the hex code and the standard ASCII character representing 
each byte of memory. As a ready reference for translation between these 
byte representations, the ASCII codes, in hex notation, and the screen 
display are shown for the full standard and extended IBM character set 
in Figure B-1. For quick reference, Figure B-2 translates hex notation 
to decimal values. In both of these figures, the most significant hex 
digits are at the top of the columns and the least significant hex 
digits are at the beginning of the rows. For example, the "?" character 
has the ASCII code 3F hex or 63 decimal.


       ┌──────────────── figure goes here ─────────────────────┐
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       └───────────────────────────────────────────────────────┘

      Figure B-1.  Standard and IBM Extended Character ASCII Codes

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 26



       ┌──────────────── figure goes here ─────────────────────┐
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       │                                                       │
       └───────────────────────────────────────────────────────┘

              Figure B-2.  Hex-to-Decimal Conversion Chart


     Note that some of the special and extended characters will not 
always appear as a screen display when a program produces video output 
using a print function rather than poking the character code into the 
display memory. For instance, CORELOOK's ASCII display shows a blank and 
DEBUG substitutes a period for the special and extended characters.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 27


APPENDIX C.  USEFUL SOFTWARE

     In order to easily browse through the contents of the PC's memory 
or download a portion of those contents to a disk file, you should 
consider collecting a minimum set of software tools. These tools range 
from the DOS utility DEBUG and a few lines of BASIC programming to some 
more powerful and convenient public domain programs such as CORELOOK and 
PC-DUMP.

     One simple way to look at the contents of the PC's memory is to use 
the DOS utility program DEBUG. For example, you can display the ROM-BIOS 
release date by means of the following commands from the DOS prompt;

          A>DEBUG
          - D F000:FFF5 L 8

This will list (the L) the ASCII codes and characters for the eight 
contiguous bytes (the 8) of memory beginning at the address F000:FFF5. 
Consult the DOS manual for descriptions of the other features of DEBUG 
that you can use to view the memory contents.

     You can also use a short BASIC program to display the ASCII 
characters representing the contents of specific memory locations. The 
following code will display the ROM-BIOS release date.

          10 DEF SEG = &HF000
          20 FOR I = 0 TO 7
          30    PRINT CHR$(PEEK(&HFFF5 + I));
          40 NEXT I
          50 END

If, rather than the ASCII characters, you want to display the two-digit 
hex values of the memory locations, substitute HEX$ for the CHR$ in line 
30.

      A much more convenient way to quickly scan through the memory 
contents is to use the public domain program CORELOOK, which is 
available on many computer bulletin boards. CORELOOK is a menu driven 
program that displays both the hex and ASCII representations of the 
contents of a block of memory. Using single keystrokes, you can 
literally fly through memory locations to any block that you desire. The 
display is formatted for a logical sixteen bytes per line, and you have 
full control in selecting the basis to be used for the segmented 
addresses. You don't have to do much scanning of PC memory to really 
appreciate the value of using this great little program.

     If you are an experienced BASIC programmer, you can see how the 
simple program listed above could be expanded to include the provision 
for writing the contents of a specific portion of PC memory to a disk 
file. You need not bother, however, as this function is already 

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 28


available in the public domain program PC-DUMP, which is also available 
for downloading on some computer bulletin boards. PC-DUMP is a menu 
driven program that lets you select the segment paragraph address, the 
number of bytes to be written to the disk file and the disk file name. 
The program provides rigorous input formats and checking of the input 
data for allowable and/or expected values. The latest update (Rev. 2.0) 
of PC-DUMP also contains the option for downloading either the even 
numbered or the odd numbered bytes from a given block of memory 
addresses, as required for the PC-AT ROM hardware design.  In the event 
that you do not obtain an EPROM blaster with software that includes a 
full featured download function that can be used without the blaster 
being installed, you may save a good deal of time and frustration by 
using PC-DUMP.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 29


APPENDIX D.  EPROM PROGRAMMER SOURCES

     At the time of this writing (October 1986), the type of PC-based 
EPROM blasters described in Chapter 5 are available by mail order from 
several computer components suppliers and manufacturers that advertise 
in the major computer magazines. Two sources that currently offer models 
in the $130 price range are:

   Apparat, Inc.
   4401 So. Tamarac Parkway
   Denver, Colorado  80237
   (303) 741-1778

   JDR Microdevices
   110 Knowles Drive
   Los Gatos, California  95030
   800-538-5000

Both of these models include software that provides the necessary 
functions described in Chapter 5.

     No-name versions of this type of PC-based EPROM blaster, some 
selling for around $100, are starting to appear at computer shows and 
swapmeets where vendors are selling various PC-Clone components. 
Apparently nothing is immune to the cloning phenomena. Since these 
devices are fairly new and are just catching on with the PC hobbyist 
crowd, future price reductions are sure to be seen.

     For you hobby purists, the perfect compliment to your ROM software 
experimentation is an EPROM programmer that you build yourself. An 
intelligent serial EPROM programmer is the topic of Steve Ciarcia's 
Circuit Cellar feature in the October 1986 issue of BYTE magazine. Like 
the stand-alone commercial programmers, this type of design interfaces 
via the PC's serial I/O port rather than through an expansion card 
connector. This arrangement is convenient if your PC has an available 
serial port and would even allow you to do your EPROM burning using 
computers other than the IBM/clone family. Ciarcia's project includes 
the menu-driven programming system software to make using the programmer 
a breeze. Typical of the exceptional quality of the Circuit Cellar 
build-it-yourself projects, this update of an earlier design is a real 
gem.

     The PC-based EPROM blasters may see limited use and it may be 
possible to pick up a used unit from another PC owner. You might check 
the specialized computer/electronics classified add publications, the 
posted notices at your local computer and electronics retailers, or the 
PC User's Group in your area.

THE IBM PC READ-ONLY-MEMORY BACKUP MANUAL                       Page 30



NOTES

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1408

     Volume in drive A has no label
     Directory of A:\

    READ     ME       1275   8-22-88  11:48p
    GO       BAT       283   5-31-89   3:46p
    ROMBAK   BAT       956   9-04-88   4:42p
    ROMBAK   TXT     75648   9-04-88   1:29p
    ORDER    TXT       919   8-22-88   9:32p
    PC-DUMP  EXE     46116  11-23-87  10:27p
    PC-DUMP  DOC      3708  11-23-87  11:50p
    CORELOOK COM      4608   1-01-80   2:39a
    CORELOOK DOC      4324   9-04-88  12:09p
    FILE1408 TXT      1610   5-31-89   3:39p
           10 file(s)     139447 bytes
                           18432 bytes free
