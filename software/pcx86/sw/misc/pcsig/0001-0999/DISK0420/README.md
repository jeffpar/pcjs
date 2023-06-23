---
layout: page
title: "PC-SIG Diskette Library (Disk #420)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0420/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0420"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "FILE UTILITIES #2"

    System Enhancement through specially designed file handling utilities
    is the target of this collection.  As expected, some of the files on
    this disk are updates of old favorites found elsewhere in the library,
    while some are redesigned towards new functions new.  Many of these can
    are quite powerful and can be used to inspect individual disk sectors,
    protect files from overwriting or erasure, encrypt or decrypt text
    files, and many other important chores.  You'll find many new friends
    and helpers here!
    
    System Requirements:  64K, one disk drive and monochrome
    display.
    
    How to Start:  To run an EXE or COM program simply type its name and
    press <ENTER>. To read DOC or TXT files simply enter TYPE filename.ext
    and press <ENTER>.
    
    Suggested Registration:  ARC and TCOUNT both request donations, but do
    not specify an amount; SORT-IT  $15.00; VIEWDISK  $15.00.
    
    File Descriptions:
    
    LU       EXE  Library maintaining program
    LU       DOC  Documentation for LU.EXE
    L6       COM  Full screen file browse
    GCOPY2   TXT  Documentation file
    GCOPY2   EXE  Copy files selectively
    BACKSTAT EXE  List files on your hard disk which are not backed up
    LC       COM  Count lines in a file
    UN-LOCK  DOC  Documentation file for LOCK and UNLOCK
    UNLOCK   COM  De-encrypt your files
    LOCK     COM  Encrypt your files
    NIB      EXE  Unerase, patch files, create files from menory
    SORT-IT  DOC  Documentation file
    SORT-IT  COM  File sorter
    COPYPC   DOC  Documentation file
    COPYPC   COM  A better DISKCOPY command
    VIEWDISK DOC  Documentation file
    VIEWDISK EXE  Look at individual disk sectors
    FILTERS  TXT  How to prepare FILTERS.LBR for use
    FILTERS  LBR  A collection of useful DOS filters
    UNSQ     COM  Unsqueeze files
    UNDEL    COM  Recover erased files
    LQTYPE   COM  List squeezed library files
    LF       COM  List files by extension - fast
    TCOUNT   DOC  Documentation file
    TCOUNT   COM  Count characters, words, lines, pages in document
    TREED    COM  Make directory tree
    DISKSQ   COM  Squeeze all files on disk
    DISKUNSQ COM  Unsqueeze files
    READWRIT DOC  Documentation file
    READWRIT COM  Make file eraseable
    READONLY DOC  Documentation file
    READONLY COM  Make file uneraseable
    SEARCH   DOC  Documentation file
    SEARCH   COM  Search an entire disk for character or string
    FCOMPARE DOC  Documentation file
    FCOMPARE C    C source code
    FCOMPARE EXE  Good file compare program
    ARC      DOC  Documentation file
    ARC      EXE  Combine and squeeze files in one pass
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ARC.DOC

{% raw %}
```
                                  ARC

                         File Archive Utility


(C) COPYRIGHT 1985 by System Enhancement Associates; ALL RIGHTS RESERVED


This file describes the ARC file utility, version 3.04, which was 
created by System Enhancement Associates on 17 April 1985.

ARC is the copyrighted property of System Enhancement Associates.  You 
are granted a limited license to use ARC, and to copy it and 
distribute it, provided that the following conditions are met:

1)  No fee may be charged for such copying and distribution.

2)  ARC must be distributed as a complete set of all files.

3)  ARC may ONLY be distributed in its original, unmodified state.

Any voluntary contributions for the use of this program will be 
appreciated, and should be sent to:

    System Enhancement Associates
    12 Franklin Avenue
    Clifton, NJ  07011




ARC is used to create and maintain file archives.  An archive is a 
group of files collected together into one file in such a way that the 
individual files may be recovered intact.

ARC is different from other archive and library utilities in that it 
automatically compresses the files being archived, so that the 
resulting archive takes up a minimum amount of space.  

When ARC is used to add a file to an archive it analyzes the file to 
determine which of three packing methods will result in the greatest 
savings.  These three methods are:

1)  No compression; the file is stored intact.

2)  Repeated-character compression; repeated sequences of the same 
    byte value are collapsed into a three-byte code sequence.  

3)  Huffman squeezing; the file is compressed into variable length bit 
    strings, similar to the method used by the SQ programs.

Note that, since one of the three methods involves no compression at 
all, the resulting archive entry will never be larger than the 
original file.



USING ARC
=========

ARC is invoked with a command of the following format:

    ARC <x> <arcname> [<template> . . .]

Where:

    <x> is an ARC command letter (see below), in either upper or lower 
    case.  

    <arcname> is the name of the archive to act on, with or without an 
    extension.  If no extension is supplied, then ".ARC" is assumed.  

    <template> is one or more file name templates.  The "wildcard" 
    characters "*" and "?" may be used.  

If ARC is invoked with no arguments (by typing "ARC", and pressing 
"enter"), then a brief command summary is displayed.


ARC COMMANDS
============

Following is a brief summary of the available ARC commands:

    a,u = add files to archive
    m   = move files to archive
    d   = delete files from archive
    x,e = extract files from archive
    p   = copy files from archive to stdout
    l   = list files in archive
    b   = retain backup copy of archive
    w   = suppress warning messages
    n   = suppress notes and comments
    t   = test archive integrity

These commands are explained in more detail below.


ADD FILES TO ARCHIVE
====================

Files are added to an archive using the "A" (Add), "U" (Update), or 
"M" (Move) commands.  Add and Update are identical.  Move differs in 
that the source file is deleted once it has been added to the archive.

For example, if you wish to add a file named "TEST.DAT" to an archive 
named "MY.ARC", you would use a command of the form:

    ARC a my test.dat

or:

    ARC u my.arc test.dat

If you wanted to move all files in your current directory into an 
archive named "SUM.ARC", you could use a command of the form:

    ARC m sum *.*

If you wanted to add all files with a ".C" extension, and all files 
named "STUFF" to an archive named "JUNK.ARC", you could type:

    ARC a junk *.c stuff.*

Archive entries are always maintained in alphabetic order.  Archive 
entries may not have duplicate names.  If you add a file to an archive 
that already contains a file by that name, then the existing entry in 
the archive is replaced.  Also, the archive itself and its backup will 
not be added.  


DELETING FILES
==============

Archive entries are deleted with the "D" (Delete) command.  For 
example, if you had an archive named "JUNK.ARC", and you wished to 
delete all entries in it with a filename extension of ".C", you could 
type: 

    ARC d junk *.c


EXTRACTING FILES
================

Archive entries are extracted with the "E" (Extract) and "X" (eXtract) 
commands.  For example, if you had an archive named "JUNK.ARC", and 
you wanted all files in it with an extension of ".TXT" or ".DOC" to be 
recreated on your disk, you could type:

    ARC x junk *.txt *.doc

If you wanted to extract all of the files in an archive named 
"JUNK.ARC", you could simply type:

    ARC x junk

Whatever method of file compression was used in storing the files is 
reversed, and uncompressed copies are created in the current 
directory.


PRINTING FILES
==============

Archive entries may be examined with the "P" (Print) command.  This 
works the same as the Extract command, except that the files are not 
created on disk.  Instead, the contents of the files are written to 
standard output.  For example, if you wanted to see the contents of 
every ".TXT" file in an archive named "JUNK.ARC", but didn't want them 
saved on disk, you could type:

    ARC p junk *.txt

If you wanted them to be printed on your printer instead of on your 
screen, you could type:

    ARC p junk *.txt >prn


LISTING ARCHIVE ENTRIES
=======================

You can obtain a list of the contents of an archive by using the "L" 
(List) command.  For example, to see what is in an archive named 
"JUNK.ARC", you could type:

    ARC l junk

If you are only interested in files with an extension of ".DOC", then 
you could type:

    ARC l junk *.doc

ARC lists the archive contents in a table like this:

Name          Length    Comp   SF   Date       Time
============  ========  ====  ====  =========  ======
ALPHA.TXT          512   --     0%  13 Apr 85   0:29a
BRAVO.TXT          512  Pack   43%  15 Apr 85  11:51a
COCO.TXT          1530   SQ    30%   8 Apr 85   1:35p

"Name" is simply the name of the file.

"Length" is the unpacked file length.  In other words, it is the 
number of bytes of disk space which the file would take up if it were 
extracted.

"Comp" is the compression method used on the entry.  The following 
compression methods are currently employed:

     --       No compression.
    Pack      Runs of repeated byte values are collapsed.
     SQ       Huffman squeeze technique employed.

"SF" is the stowage factor.  In other words, it is the percentage of 
the file length which was saved by compression.

"Date" and "Time" are the date and time that the file had last been 
modified at the time when it was added to the archive.


BACKUP RETENTION
================

When ARC adds or deletes archive entries it renames the original 
archive to give it an extension of ".BAK", and then creates a new 
archive with the desired changes.  If you wish to retain this original 
copy of the archive for backup purposes, then add the "B" (Backup) 
command to your other commands.

For example, if you wanted to delete all entries with an extension of 
".DOC" from an archive named "JUNK.ARC", but you wanted to keep a copy 
around that still has them, then you could type:

    ARC bd junk *.doc

or:

    ARC db junk *.doc


MESSAGE SUPPRESION
==================

ARC prints two types of messages, warnings and comments.

Warnings are messages about suspected error conditions, such as when a 
file to be extracted already exists, or when an extracted file fails 
the CRC error check.  Warnings may be suppressed by use of the "W" 
(Warn) command.  You should use this command sparingly.  In fact, you 
should probably not use this command at all.

Comments (or notes) are informative messages, such as naming each file 
as it is added to the archive.  Comments and notes may be suppressed 
by use of the "N" (Note) command.

For example, suppose you extracted all files with an extension of 
".BAS" from an archive named "JUNK.ARC"  Then, after making some 
changes which you decide not to keep, you decide that you want to 
extract them all again, but you don't want to be asked to confirm 
every one.  In this case, you could type:

    ARC xw junk *.bas

Or, if you are going to add a hundred files with an extension of 
".MSG" to an archive named "TRASH.ARC", and you don't want ARC to list 
them as it adds them, you could type:

    ARC an trash *.msg

Or, if you want to extract the entire contents of an archive named 
"JUNK.ARC", and you don't want to hear anything, then type:

    ARC xnw junk


TESTING AN ARCHIVE
==================

The integrity of an archive may be tested by use of the "T" (Test) 
command.  This checks to make sure that all of the file headers are 
properly placed, and that all of the files are in good shape.

This can be very useful for critical archives, where data integrity 
must be assured.  When an archive is tested, all of the entries in the 
archive are unpacked (without saving them anywhere) so that a CRC 
check value may be calculated and compared with the recorded CRC 
value.

For example, if you just received an archive named "JUNK.ARC" over a 
phone line, and you want to make sure that you received it properly, 
you could type:

    ARC t junk

It defeats the purpose of the T command to combine it with N or W.


SPECIAL NOTES
=============

Whenever ARC encounters a fatal error condition it leaves the original 
archive on disk, renamed to have an extension of ".BAK" (backup).

The function used to calculate the CRC check value in previous 
versions has been found to be in error.  It has been replaced in 
version 3.0 with a proper function.  ARC will still read archives 
created with earlier versions of ARC, but it will report a warning 
that the CRC value is in error.  All archives created prior to version 
3.0 should be unpacked and repacked with the latest version of ARC.

Transmitting a file with XMODEM protocol rounds the size up to the 
next multiple of 128 bytes, adding garbage to the end of the file.  
This used to confuse ARC, causing it to think that the end of the 
archive was invalidly formatted.  This has been corrected in version 
3.03.  Older archives may still be read, but ARC may report them to be 
improperly formatted.  All files can be extracted, and no data is 
lost.  In addition, ARC will automatically correct the problem when it 
is encountered.

```
{% endraw %}

## FCOMPARE.DOC

{% raw %}
```
The FCOMPARE program implements Paul Heckel's algorithm from the
Communications of the ACM, April 1978, for detecting the differences
between two files. This algorithm has the advantage over more commonly
used compare algorithms that it is fast and can detect differences of an
arbitrary number of lines.
 
The command format is: FCOMPARE filespec1 filespec2 [options]
  options:
     Full - show full lines.
     Brief - show first 34 characters of lines.
     Tabs - expand tabs before comparing.
     NOTabs - don't expand tabs.
     TRim - ignore trailing blanks.
     NOTRim - don't ignore trailing blanks.
  (Only the capitalized part needs to be specified.)
 
Arbitrary path qualification is allowed in the filespecs. In addition,
the output can be redirected to the printer or a file with normal DOS
redirection conventions (e. g. >PRN).
 
By default (BRIEF), output is displayed with the two files side-by-side.
This is felt to make it easier to spot the location of differences, even
though only 34 characters of each record can be shown. The FULL option
causes the whole record to be shown. Along with each record displayed is
its line number in the file it came from.
 
If either file contains tabs, they will not be expanded before
comparison unless the TABS option is used. If TABS is not used, any tabs
in displayed records will probably make the output appear strange, since
they will be expanded by DOS.
 
The design limitations of the program are that only the first 256
characters of each record are compared, and only the first 5000 records
of a file. (Records are defined by the CRLF sequence.)
 
One possible but infrequent peculiarity of the algorithm is that records
that are not unique within a file and which are not adjacent to a record
which is unique and unchanged will be indicated as being different.
 
Since the program uses a hashing technique, it is possible, but very
unlikely, that different records could erroneously be considered equal.
It is even more unlikely that such an error would not be obvious in the
actual output, but you should be aware of the possibility if you use
this as the basis of a differential file maintenance technique.

```
{% endraw %}

## FILES420.TXT

{% raw %}
```
-------------------------------------------------------------------------
Disk No  420  File Utilities                                    v1.1 DS2
-------------------------------------------------------------------------
A new bunch of file handling utilities. Some of the files on this disk
are updates of old favorites found elsewhere in the library and others are
new.
 
BACKSTAT EXE  List files on your hard disk which are not backed up
GCOPY2   EXE  Copy files selectively
GCOPY2   TXT  Documentation file
L6       COM  Full screen file browse
LC       COM  Count lines in a file
LF       COM  List files by extension - fast
LU       EXE  The latest and best library maintainer.
LU       DOC  Documentation for LU.EXE
LQTYPE   COM  List squeezed library files
UNDEL    COM  Recover erased files
UNSQ     COM  Unsqueeze files
FILTERS  LBR  A collection of useful DOS filters
FILTERS  TXT  How to prepare FILTERS.LBR for use
VIEWDISK EXE  Look at individual disk sectors
VIEWDISK DOC  Documentation file
COPYPC   COM  A better DISKCOPY command
COPYPC   DOC  Documentation file
SORT-IT  COM  File sorter
SORT-IT  DOC  Documentation file
NIB      EXE  Unerase, patch files, create files from menory
LOCK     COM  Encrypt your files
UNLOCK   COM  De-encrypt your files
UN-LOCK  DOC  Documentation file for LOCK and UNLOCK
ARC      EXE  Combine and squeeze files in one pass
ARC      DOC  Documentation file
FCOMPARE EXE  Good file compare program
FCOMPARE C    C source code
FCOMPARE DOC  Documentation file
SEARCH   COM  Search an entire disk for character or string
SEARCH   DOC  Documentation file
READONLY COM  Make file uneraseable
READONLY DOC  Documentation file
READWRIT COM  Make file eraseable
READWRIT DOC  Documentation file
DISKUNSQ COM  Unsqueeze files
DISKSQ   COM  Squeeze all files on disk
TREED    COM  Make directory tree
TCOUNT   COM  Count characters, words, lines, pages in document
TCOUNT   DOC  Documentation file
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## FILTERS.TXT

{% raw %}
```
Filters is provided on this disk in a library form in order
to keep the files separate from the others so you can organize
your hard disk better.
In order to use filters you should:
  1) md\filters             create a filters subdirectory
  2) cd\filters
  3) copy a:filters.lbr     move in the filters library
  4) lu a filters.lbr       disperse the files in the filters library
  5) type filters.doc       this file will tell you everything else
                            you need to know.
```
{% endraw %}

## READONLY.DOC

{% raw %}
```
type readonly filename.ext and will set filename to readonly.
You will not be able to delete or erase this file.
Protect from accidental erasure important files.

```
{% endraw %}

## READWRIT.DOC

{% raw %}
```
resets readonly files to read/write and allows erasure
type readwrit filename.ext

```
{% endraw %}

## SEARCH.DOC

{% raw %}
```
      SEARCH.COM is from PC Magazine May 14, 1985 page 243
                   by Steve Holzner (c) 1985.  
                    Original Name LOCATE.COM.

This program is to allow the user of a hard disk to search for an 
ASCII string throughout a disk, across any or all subdirectories.  
It even strips the 8th bit so it works right with WordStar files.  
The DOS FIND command has a similar mission, but can only search a 
specified  file.  Some  commercial  programs  will  search  on  a 
specified  directory,  but SEARCH will search every path that you 
give it in the order given in a file named PATH.DAT,  which  must 
be in the ROOT directory.

Since  sub-directories  are  involved,   DOS  2.x  or  higher  is 
required.   SEARCH  has been successfully tested with MS-DOS 2.11 
on a Compaq Plus.

         Command Syntax:  SEARCH text to search for<cr>

A sample PATH.DAT file:

\WS
\SECTION1
\SECTION1\A
\SECTION1\B
\WP
\MM
A:

            PATH.DAT IS LIMITED TO 300 BYTES MAXIMUM.
Note that you can even have SEARCH check more than one disk drive 
if you want.  The root directory of the default drive is searched 
automatically.  If you wish to search a root directory of another 
drive,  do NOT use `a:\` in PATH.DAT, or the program will hang. A 
Ctrl-Break  will  put  you back in control.   To  search  a  root 
directory, use the drive letter and colon only.

SEARCH  permits  you  to  enter  a search  string  of  up  to  20 
characters, and returns a total of 40 characters to show context.  
It IS case sensitive,  so it only returns EXACT matches.  It does 
not  pause  when  the screen fills,  so if you  think  there  are 
multiple  matches,  you may want to use the DOS MORE  filter,  or 
turn on the printer echo for a hard copy.

I  renamed  the program from the original LOCATE.COM  because  it 
conflicts  with  a  Public Domain program  that  finds  filenames 
across sub-directories.

Jim Nelden
Normal, Illinois

conflicts  with  a  Public Domain program  that  finds
```
{% endraw %}

## VIEWDISK.DOC

{% raw %}
```
 
 
 
 
 
 
 
 
			 "View Disk" by DSOFT 
 
 
 
 
 
	 A utility program to examine the sectors of your disk 
	 drives for the IBM PC and 100 % compatible computers. 
 
 
 
				 Version 1.0 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
William K. Davies 
8990 19th #294 
Alta Loma, Ca. 91701 
 
Compuserve: 74235,435 
 
 
 
 
 
View Disk Documentation Version 1.0 -- DSOFT 1984		 -Page 1- 
 
GENERAL INFORMATION: 
 
"View Disk" is a utility program that allows you to select individual 
disk sectors and display them on your screen. I you are curious about what is in the hidden files of your disk or how to hide files of your own, you will probably find this program useful. "View Disk" is written in a combination of "C" and Assembly languages for speed and machine control. 
In order to run "View Disk" it is necessary to have an IBM PC or 100 
percent compatible computer. This program requires only 64k ram and one disk drive running DOS 2.0. A printer is optional for the screen dumps. This program makes extensive use of the BIOS routines do to the lack of control supplied by DOS. Unfortunately, this extensive use of the BIOS may limit the programs portability. 
 
RUNNING THE PROGRAM: 
 
Format: VIEWDISK [D:] 
 
If an alternate drive is not specified the default drive is assumed. 
After the program starts the disk format will be displayed, e.g. "Disk Format is Double Sided with 9 sectors/track". If you are using a double sided disk, you will then be asked for the drive head. The program will tell you what the valid choices are. If you are using a double sided disk the choices will be 0 for top and 1 for the bottom. You will not be asked if you are using a single sided disk. Then the program will prompt you for the disk track. Again the valid choices will be displayed. With the exception of the 10mb fixed disk the valid tracks are 0 to 39. The same is then done for the sector within the track that you have chosen. You will be notified in the advent of a invalid choice and given another chance. The disk drive motor will come on for a brief period and shortly the contents of the first half of the selected disk sector will be displayed. A prompt will ask you to hit any key to continue. If you hit the 'S' key, the screen will be dumped to the line printer. This is true for the "Next Sector" and "Next Track" prompts also. 
After the second half of the disk sector is displayed, you will be 
asked if you want to view the next sector. The only exception to this is if you have just viewed the last sector on that track. In this case you will be asked if you want to select another track. 
 
 
PERMISSION TO COPY: 
 
Anyone is free to copy and pass along this program along with its 
documentation, as long as: 
 
A. No price is charged for the software or documentation, unless it 
	 is to recover the price of the diskette that the program is 
	 supplied on. This charge should be less than $10. 
 
B. The program and documentation are not modified and are supplied 
	 together. 
 
 
 
 
 
 
View Disk Documentation Version 1.0 -- DSOFT 1984		 -Page 2- 
  
 
 
DISCLAIMER: 
 
In no event will the Author be liable to you for any damages, including any lost profits, lost savings or other incidental or consequential damages arising out of the use of this program, even if the Author has been advised of the possibility of such damages, or for any claim by any other party. 
 
 
USER-SUPPORTED: 
 
This program is supplied to you in hopes that you will find it useful. 
If you do find the program of value a to the further development of this and other such program will be appreciated ($15 is suggested). If you have any suggestions for the improvement of the program or suggestions for new program of this type they would also be appreciated. Anyone, may request a copy of the program by sending a blank formatted disk, with a addressed postage-paid return mailer. A copy of the latest version of the program, along with the documentation will be sent by return mail. The source code is also available. It is written in "C" and Assembly language, so a "C" compiler with the ability to imbed Assembly code will be necessary to 
compile it. To get the source code, follow the directions for obtaining the program plus include a letter stating that you want the source code along with your contribution of $25. It will be sent by return mail. Contributions for the program itself are completely voluntary, but you are encouraged to copy and distribute the program to your friends. I hope that you will find the program useful. 
 
 
program to your friends. I ho
.e

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0420

     Volume in drive A has no label
     Directory of A:\

    BACKSTAT EXE     13312   1-17-85   2:20p
    GCOPY2   EXE     14592   3-15-85   3:18p
    GCOPY2   TXT      2048   3-15-85   3:18p
    L6       COM      3072   4-09-85   9:41a
    LC       COM      1280  12-07-84   1:10p
    LF       COM       512   6-08-84   3:20p
    LQTYPE   COM     12160   4-01-85  11:14a
    UNDEL    COM      2176   3-19-85   6:57a
    UNSQ     COM      8064   3-17-85   2:53p
    FILTERS  LBR     41600   4-04-85  10:16a
    FILTERS  TXT       507   4-04-85   6:03p
    VIEWDISK EXE     16384   3-15-85   8:36a
    VIEWDISK DOC      4736   3-15-85   8:38a
    COPYPC   COM      1792   4-25-85   1:52p
    COPYPC   DOC      1920   4-25-85   1:52p
    SORT-IT  COM     17280   4-03-85  10:17a
    SORT-IT  DOC      1024   4-03-85  10:18a
    NIB      EXE     48412   5-02-85   4:42p
    LOCK     COM       384   8-22-85  12:51a
    UNLOCK   COM       384   8-22-85  12:51a
    UN-LOCK  DOC      2432   8-22-85  12:52a
    ARC      EXE     29824   8-22-85  12:50a
    ARC      DOC     10880   5-06-85  10:14a
    FCOMPARE EXE     12288   5-02-85  12:03a
    FCOMPARE C       13056   5-02-85  12:03a
    FCOMPARE DOC      2304   5-02-85  12:03a
    SEARCH   COM       640   5-08-85   6:58p
    SEARCH   DOC      2048   5-08-85   6:58p
    READONLY COM       128   6-03-85  10:15p
    READONLY DOC       256   6-03-85  10:15p
    READWRIT COM       128   6-03-85  10:15p
    READWRIT DOC       128   6-03-85  10:15p
    DISKUNSQ COM      3712   6-04-85  12:19p
    DISKSQ   COM      3584   6-04-85  12:20p
    TREED    COM      1920   5-10-85   9:37p
    TCOUNT   COM     17273   7-29-85   9:30a
    TCOUNT   DOC      7168   7-28-85   8:05a
    FILES420 TXT      2088   4-12-86   5:50p
    LU       DOC      6144   3-25-84   1:50a
    LU       EXE     22528   3-25-84   1:48a
           40 file(s)     330168 bytes
                           16384 bytes free
