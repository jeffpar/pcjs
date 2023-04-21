---
layout: page
title: "PC-SIG Diskette Library (Disk #2521)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2521/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2521"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ARCE.DOC

{% raw %}
```
ARCE Command                                          Version 3.1c
------------                                          Feb 06, 1988
Purpose:  Use ARCE to extract files from an ARC archive file.
Format:
      ARCE  [d:][path]filename.ext  [filespecs...] [d:outpath]
                                    [/R]
                                    [/Q]
                                    [/P]
                                    [/T]
                                    [/Gpassword]
Remarks:
      The drive and path names are optional. If omitted, the  current
      drive and path name is used.
      The filename must be  supplied. The extension defaults  to ARC.
      All files matching the supplied filename are processed. The ARC
      filename may contain the * and ? wildcard characters.
      If  no  filespecs  are   supplied,  all  files  are   extracted.
      Otherwise, only those ARC members  which match one of the  up to
      16 filespecs are extracted.
      The extracted files  may be placed  on another drive,  and/or in
      another subdirectory by following the optional filespecs with  a
      drive designator and/or path name.
      If  the  file  being  extracted  already  exists,  you are asked
      whether or not you want to over-write it. You may use the |  /R
      option to bypass this prompt. Use a Y followed by the |  return
      key to over-write the file.
      Use the /Q option to suppress alarm sounds, beeps, and bells.
      Use  the  /P  option  to  write  the  extracted files to the DOS
      standard output  file. With  /P, you  may pipe  or redirect the
      output. An initial line feed  is added to the beginning  of the
      output file.
      Use the /T option to test the archive's integrity. No files will
      be extracted.
      If the file was encrypted, use the /G option to supply the  same
      password as was used to create the file, e.g. /GSECRET.
      ARCE 3.1c, Copyright (c) 1986-88, Wayne Chin and Vernon D. Buerg.
      ALL RIGHTS RESERVED.
                      Examples
                      --------
      o  Extract all file from TEST.ARC onto the current drive:
            ARCE TEST
      o  Extract only file with  an extension of .ASM from the archive
         SOURCE.ARC on drive B and in subdirectory SAVE:
            ARCE B:\SAVE\SOURCE *.ASM
      o  Extract  all  files  from  all  ARC files in the subdirectory
         called TEST on drive C:
            ARCE C:\TEST\*
      o  Extract  all  files  from  PROGA.ARC  and  place the files in
         subdirectory OLD on drive B:
            ARCE PROGA.ARC B:\OLD
      o  Extract all files with an extension of .COM and .EXE from the
         archive PROGS.ARC in directory NEW\WORK on drive B, and place
         the  them  in  subdirectory  SAVE\TEST  on  drive  A; replace
         existing file:
            ARCE B:\NEW\WORK\PROGS *.COM *.EXE A:\SAVE\TEST /R
      o  Extract  the  file  READ.ME  from  the  archive GIZMO.ARC and
         display it on the console instead of writing it to a file:
            ARCE GIZMO READ.ME /P
      o  Same as above, except  pass the extracted READ.ME file to the
         LIST file viewer:
            ARCE GIZMO READ.ME /P | LIST /S
                      Error Messages
                      --------------
    'filename - premature EOF reading '
      Data  is  missing  from  the  archive  file.  The  program   is
      terminated.
    'filename - unable to set file datestamp'
      The file datestamp is set to the current date and time, and  the
      next archive member is processed.
    'filename - WARNING: file CRC does not match!'
      The extracted member  is left on  the output disk,  and the next
      archive member is processed.  The file is probably  invalid but
      is left on the disk for your examination.
    'Invalid filespec(s)'
      The filespec syntax is incorrect. The filename part may be from
      1  to  eight  characters,  and  may  include the ? or * wildcard
      characters. The extension may be none to three characters,  and
      may  include  wildcards.  There  is  a  maximum of 16 filespecs
      allowed. The program terminates.
    'filename - file already exists. Overwrite it? (y/N) '
      The member being extracted already  exists. If you are using  a
      data  path  utility,  the  file  may  not  actually  be  in  the
      subdirectory be used for output.  Respond with the letter Y  to
      over-write the existing  file, or respond  with the letter  N to
      skip this member and continue to the next.
    'Abort: Stack overflow'
      The member  being extracted  has invalid  data. The  program is
      terminated.
    'filename - invalid decode tree count'
      The member  being extracted  has invalid  data. The  program is
      terminated.
    'filename - new archive format 7 not yet supported'
      Format 7 is a special file compression method used internally by
      SEA,  the  authors  of  ARC. Processing continues with the next
      archive member.
    'Unable to open archive > arcname'
      The  specified  ARC   archive  file  was   not  found,  or   was
      inaccessible. The program terminates.
    'CREATE failed > filename'
      There was insufficient directory  space, or a failure  accessing
      the output disk. The program terminates.
      'Invalid archive format!'
      The archive file data is invalid. The program terminates.
    'Incorrect DOS version'
      Version  2.0  or  later  of  PC  DOS  must be used. The program
      terminates
    'Not enough memory.'
      A minimum  of 112k  bytes of  memory is  required. The  program
      terminates.
    'I/O error reading from arcname'
      An incorrectable error occurred attempting to read data from the
      archive file. The program terminates.
    'I/O error writing or disk full > filename'
      There was not  enough disk space  to write the  complete archive
      member.  The  partially  extracted  file  is  scratched and the
      program terminates.
    'No matching file(s) found'
      No archive files were  found that matched the  supplied filename
      specifications. The program terminates.
    'filename - ERROR: invalid file codes'
      An error was detected while attempting to decode a crunched
      file. Either some data bytes are invalid, there are extra
      bytes, or there are bytes missing. The archive is invalid.
                      Notices
                      -------
      ARCE (c) Copyright 1986-1988 by Wayne Chin and Vernon D. Buerg
      ALL RIGHTS RESERVED.
      ARCE is free, but it is a copyrighted work and may be distributed
      only pursuant to this license.
      Permission is hereby granted to reproduce and disseminate ARCE so
      long as:
         (1)  No remuneration of any kind is received in exchange; and
         (2)  Distribution is without ANY modification to the contents of
              ARCE.COM and all accompanying documentation and/or support
              files, including the copyright notice and this license.
      No copy of ARCE may be distributed without including a copy of this
      license.
      Any other use is prohibited without express, written permission in
      advance.
              Vernon D. Buerg
              139 White Oak Circle
              Petaluma, CA  94952
              CompuServe: 70007,1212
              Data/BBS:   707-778-8944
      For use by corporations, institutions, or for profit, contact
      System Enhancement Associates for licensing information.
                 System Enhancement Associates
                 21 New Street
                 Wayne, NJ 07470
```
{% endraw %}

## FILE2521.TXT

{% raw %}
```
Disk No: 2521                                                           
Disk Title: Personal Tarot                                              
PC-SIG Version: S1                                                      
                                                                        
Program Title: Personal Tarot                                           
Author Version: 1.0                                                     
Author Registration: $24.00                                             
Special Requirements: 420K RAM, and two floppy drives or a hard drive.  
                                                                        
The Tarot is a method of divination that has been used and adapted      
around the world throughout history. The symbolism displayed in the     
cards' designs reveals the ancient wisdom and folklore of many cultures.
Now you can enjoy professional-quality Tarot card readings on your      
computer!                                                               
                                                                        
You ask the question; PERSONAL TAROT deals the cards, and then describes
the cards and their meanings.  PERSONAL TAROT is customizable.  You can 
edit the card descriptions and add comments for truly personalized      
readings.                                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## HELP.DOC

{% raw %}
```
                  IMPORTANT INFORMATION ABOUT THESE DISKS

   BEFORE YOU START: Make backup copies of your disks. (See the DISKCOPY
command in your DOS manual.) Put the original disks in a safe place, and
use the copies for all work. If you are upgrading from an older version
of a program, make backup copies of all your old data files before you
install the new version. Files with the extensions DBF, DBT, and MEM
contain essential data. Files with the NTX extension are index files.
Some programs also create special text files which you may want to back
up.
   ARCHIVE FILES: Sometimes there are too many files to fit on a single
floppy disk. These programs are compressed and stored in special archive
files with the extension ARC or ZIP. Before you can use the program, you
must extract the files from the archive. We have provided the extraction
utility.
   If you are using a 2-floppy system, look for a file named FLOPPY.BAT
or DOTWO.BAT. Start from the A> prompt, with the master disk in the A
drive. Be prepared with 2 or 3 empty, formatted diskettes. Enter the
appropriate command, depending on the file you found. For example, if
you have FLOPPY.BAT, type FLOPPY and press <ENTER>. Follow the instruc-
tions on screen, which will tell you when to insert your floppy disks
into the B drive.
   If you are using a hard disk, be sure you have created the subdirec-
tory where you want the program to be kept. Look for a program named
ARCE.COM or UNZIP.EXE or PKUNZIP.EXE. Starting from the correct subdi-
rectory, at the C> prompt, with the diskette in the A drive, enter the
appropriate command. For example, if your archive file has the ARC
extension, you should have the program ARCE.COM. Your command will look
something like this: A:ARCE A:FORTUNE. (Instead of "fortune" use the
actual name of the archive file.) The program will automatically un-com-
press the files and place them in the current subdirectory.
   In some cases, you may have "self-extracting" archive files. These do
not require a separate utility, but will un-compress themselves. They
look like ordinary program files with the EXE extension, but can be
identified by the @ symbol in the filename. To use a self-extracting
archive, first log onto the drive and directory where you want to place
the uncompressed files. For example, if you have a two-floppy system,
you might want to place your master disk containing the archive into the
A drive, and then log onto the B drive with an empty, formatted disk. If
you are using a hard disk, create the subdirectory for the new files,
and then log into the subdirectory, with the archive disk in the A
drive. If the archive name is WAURA@.EXE, you will type A:WAURA@ and
press <ENTER>. Self-extraction will occur automatically. (Note to floppy
disk users: There may be more than one self-extracting archive on a
single disk. You must use a separate, empty, formatted diskette for each
such archive.) Note that if the disk vendor has created a self-extracting
archive file, it may not have the "@" sign in the file name. In most cases
the vendor will provide instructions, and/or you will see identifying
messages on screen when you try to run the program.
   DOCUMENTATION AND INSTRUCTIONS: Most of our instruction manuals are
in special program files which allow you to view the manual on screen or
print it. These files may have the COM extension or the EXE extension, 
and usually have "DOC" somewhere in the filename. Simply enter the 
appropriate command. For example, if you have the program BY THE NUMBERS, 
the instruction manual is called NUMDOC.COM. To view the manual, type 
NUMDOC and press <ENTER>. You can page through the document on screen, 
or print it by pressing <ALT><H>. For a list of helpful commands, press 
<F1>. Note: If you use the ANSI.SYS driver, the screen colors of these
document may not always appear correctly.
   Files which have the DOC or TXT extension are ASCII format files
(also called DOS text files) which can be viewed or printed using DOS
commands. For example, if you have a typical setup, you can print a
document called CATALOG.DOC using this command: TYPE CATALOG.DOC > LPT1:
   To view this file on screen, you would enter: TYPE CATALOG.DOC | MORE
   You can also view and print this kind of file with most word proces-
sors, using the format for "ASCII", "DOS text" or "Non-document" files.
   PROGRAM FILES: Program files can be identified by the extension EXE
or COM after the file name. To run the program, simply type its name.
For example, you have a program named WORKBASE.EXE, type WORKBASE and
press <ENTER>.
   SOURCE CODE: Registered versions of a few programs come with source
code. You do not need the source code just to run the program; you can
delete it from the disk to make more room. Source code files have the
extensions PRG, BAS, and OBJ.
   DATA FILES: Some programs create data files, with the extensions DBF,
DBT, NTX and MEM. These are important and should be backed up regularly.
Some programs also create special text files which you may also want to
back up.
   HARD DISK OR FLOPPY: Your programs will run much faster on a hard
disk than they do on a floppy. Also, some programs build large data
files which may grow as you use the program and eventually fill a floppy
disk. We recommend using a hard disk. POETRY GENERATOR requires a hard
disk, and MAILLIST and WORKBASE are much easier to use on a hard disk.
Any program which uses data files (those with the DBF and DBT exten-
sions) is best when used on a hard disk.
   NEW VERSIONS: Sometimes a new version of a program will ask your per-
mission to update your data files. Do not answer "yes" unless you have
already made a backup copy of your data. Don't copy the backed-up data
back into the directory after the files have been updated.
   CREATIVITY PACKAGE:  Disk #1 contains the complete text of Thomas A.
Easton's book, "Think Thunder! And Unleash Your Creativity". To read it,
use the command READIT, or you can read each chapter separately by
typing the chapter name (see the disk for file name). Disk #2 contains
the program THUNDER THOUGHT, and disk #3 contains VERSIFIER.
   POETRY GENERATOR: The registered version is distributed on two disks,
containing different archive files. All the files from both disks are
needed for the program to run correctly.
   BONUS DISKS: We are not the authors of these programs. Please direct
shareware payments and technical questions about a program to the author
whose name appears in the documentation. If you have trouble reaching an
author, we will do what we can to help you. All programs have been
tested. Because hardware and software configurations vary, we cannot
guarantee satisfactory results. We do not warrant these programs in any
way. To report a problem, please write a letter describing the problem
in detail, including information about your system. We cannot debug
these programs over the phone.
   Thank you for your interest in our UNUSUAL SOFTWARE. We support our
registered users. If you have questions, comments, complaints or
compliments, please write to us. Have fun!

                                 BAD DISK?

   It seems that in hot weather we are more likely to get complaints
about "bad" or unreadable disks. Floppy disks are susceptible to heat,
moisture and magnetism. A disk that sits all day in a hot mailbox or
truck where temperatures exceed 100 degrees is likely to be damaged.
Disks which have been exposed to magnetism in their travels may contain
unreadable files.
   Before assuming that a disk is bad, try reading it on a different
computer, if possible. It may be that your drive heads are dirty or
slightly misaligned. Suspect this if you frequently get disk error mes-
sages with many different disks. An inexpensive head cleaning kit may
help solve your problem.
   Sometimes the round disk gets trapped inside its square casing and
generates an error message because it can't rotate freely. Remove the
disk from the drive and tap each of the four sides sharply on the sur-
face of your desk. This may loosen the disk. Try reading the disk again.
   Norton Utilities and Mace Utilities both have features that can some-
times revive unreadable disks. We have had good results with Norton. Any
serious computer user should have one of these utility packages.
   In any case, if we have sent you an unreadable disk, we will be happy
to exchange it for a fresh copy of the same program.

                               ERROR MESSAGES

   It may happen that when you run a program, you will get an error mes-
sage something like this: Open File Error DESC.NTX (4)
   The "4" is DOS's cryptic way of telling you that the program has
tried to open more files than DOS can handle at once. To solve this
problem, you need to check the CONFIG.SYS file in your root directory.
This file should contain the following lines:

   files=20
   buffers=20

   If the numbers are smaller then 20, or if these lines are missing
from the file, you will need to edit it. If you don't have a CONFIG.SYS
file, you will need to create one. (Note that some systems and networks
may require numbers larger then 20. Check your system user's manual.)
   CONFIG.SYS must be a pure ASCII file. You can edit or create this
file using Edlin or any pure ASCII text editor. Most word processors
allow you to save files in ASCII format. (This may be referred to as a
DOS Text File. WordStar may call it "non-document".) Remember, the file
must be in ASCII format and must be in the root directory on your C
drive. If you boot with a DOS diskette in the A drive, the CONFIG.SYS
file must be in the root directory of the disk you use to boot.
   When you have corrected the CONFIG.SYS file, reboot your system and
try running the program again.
   In case you are confused and can't create a CONFIG.SYS file for your-
self, we distribute a free program called DOCONFIG which will edit or
create your CONFIG.SYS file as needed. If you would like a copy of this
program, please send a double-sided, double-density, 5 1/4" diskette in
a sturdy, reusable mailer with three first-class stamps. If you don't
want to bother with the disk and mailer, send $5.00 instead. (Sorry,
DOCONFIG is not available on 3 1/4" disks.)

                               "0" ERROR

   On rare occasions, you may see an error message similar to this one:
Open File Error NUMBERS.NTX (0)
   The number 0 and the NTX extension in the file name indicate that the
problem is a corrupted or damaged index file. Most of our programs will
automatically recreate missing index files. So, simply delete the file
in question (make sure you delete only files with the NTX extension) and
try running the program again. Some programs also have a reindexing
choice on the menu which allows you to re-create the indexes whenever
you like.

                               OTHER ERRORS

   There are many possible reasons why a program might occasionally pro-
duce an error message. In most cases, errors are not serious, and they
usually have a simple solution. If you don't understand what the error
message means, or if you don't know how to solve the problem, we can
help you.
   Make an exact, complete copy of the error message (a print-screen is
best). As soon as the error happens, write down what you were doing (or
trying to do) at the time. Have you been able to do the same thing in
the past without getting an error? Have you seen a similar error before?
Make a note of any keys you may have pressed just before the error oc-
curred. Do you think you know what may have caused the error? Could it
be related to changes in your system, a new version of the program, or
something unusual you did? Send us the information, and we will let you
know what needs to be done to correct or avoid the error.
   REGISTERED USERS: We support our registered users, and are happy to 
answer your questions and help solve any difficulties you may have. The 
best way to get help is to write to us, including full details of the 
problem or question, and copies of error messages or screens, if available.
If your problem is urgent, and you are a registered user, you are welcome to
call us during business hours. Our phone number is listed on the printed
materials provided to registered users. (We work from 9:00 AM to 7:00 PM 
Pacific Daylight Time, Monday through Friday, and Noon to 4:00 PM Saturday. 
If you're in a different time zone, please be careful about calling too 
early in the morning!) Remember that we often do outside consulting work, 
so you may reach the answering machine. If that happens, please leave phone 
numbers for both day and evening, and let us know what days and hours we 
may call you back.
                          R.K. West Consulting
                           Attn: Rosemary West
                              P.O. Box 8059
                     Mission Hills, CA 91346, U.S.A.

If for any reason are unable to reach us at the above address, please
contact Rosemary West through the Association of Shareware Professionals.
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Dear Shareware Vendor:

The software distributed on this disk is copyrighted material and is subject
to certain restrictions on copying and distribution.

For puposes of this document, any person or organization distributing
software on disk or through any other medium is considered a disk vendor,
whether or not fees are charged, and whether or not the organization is
non-profit.

Vendors who distribute software without charging any fee of any kind may 
distribute this software, provided they comply with all the terms and 
conditions listed in this document and/or in the accompanying software 
documentation.

Vendors who charge a fee of any kind, whether it is a "membership" fee,
"shipping and handling" charge, "copying" fee, or other type of fee, must
obtain the author's permission in order to distribute this software. If
you are a vendor approved by the Association of Shareware Professionals
(ASP), you may proceed to distribute the software under the terms
and conditions listed in this document and/or the accompanying software
documentation. ASP-approved vendors must notify the author of their
intention to distribute the software, and must indicate which version of
the software they have. Under no circumstances may outdated versions or
registered versions of this software be distributed. 

Vendors who are not ASP-approved must write to the author to obtain 
permission before distributing the software.

The author reserves the right to withhold or withdraw permission to distribute 
from anyone at any time for any reason.

You may copy and distribute the UNREGISTERED version of this software,
provided: (a) You do not rename, change or omit any of the files unless you
receive express permission to do so in writing from the author, (b) You
understand that you may not "sell" this software, but you may charge a
reasonable copying fee for providing copies on disk, (c) You do not "rent" or
"lease" copies of this software, (d) You do not advertise this software as
"free", "cheap" or "public domain". Vendors must comply with the standards
set by the Association of Shareware Professionals (ASP). If you are unable
or unwilling to comply with the terms and conditions, do not distribute
this software.

The following files MUST be included on all distribution copies of this
program:

    TAROT.EXE
    TAROTDOC.EXE
    TAROT.DBF
    TAROT.DBT
    VENDOR.DOC
    ASP.DOC

You may use "file compression" techniques in order to fit more programs on a
single disk. Because this is a self-modifying file, do not use LZEXE to
compress it.

This program may NOT be distributed on the same disk with other mailing list
programs or with any so-called "adult" or "X-rated" materials.

If you indicate ASP membership in your catalog, please do so for your
listing of this program.
For further information about this and other software products:

Rosemary West
R.K. West Consulting
P.O. Box 8059
Mission Hills, CA 91346, USA

For information on becoming an ASP-approved vendor:

Association of Shareware Professionals
Vendor Certification Committee
P.O. Box 5786
Bellevue, WA 98006, USA

Software reviewers:  If you plan to review this software for publication,
please contact us first to make sure you have the most recent upgrade
version of the product and that the ordering information supplied to your
readers will be accurate.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2521

     Volume in drive A has no label
     Directory of A:\

    HELP     DOC     13252   6-18-90   6:41p
    VENDOR   DOC      3429   7-07-90   1:30p
    TAROT    ARC    232463   7-23-90   2:47p
    ARCE     COM      7128   2-06-88   1:06p
    ARCE     DOC      7786   1-12-89   7:51p
    FLOPPY   BAT       257   7-07-90   1:28p
    ASP      DOC      1583   6-20-90   5:35p
    CATALOG  DOC     21728   7-22-90   1:35p
    GO       BAT        28  10-04-90   5:21a
    GO       TXT       803  10-04-90   4:29p
    FILE2521 TXT      1855  10-04-90   4:30p
           11 file(s)     290312 bytes
                           26624 bytes free
