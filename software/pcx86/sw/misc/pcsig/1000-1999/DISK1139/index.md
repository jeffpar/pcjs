---
layout: page
title: "PC-SIG Diskette Library (Disk #1139)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1139/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1139"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "CLASSIC SOLUTIONS 2 OF 2 (ALSO 1138)"

    CLASSIC SOLUTIONS is both a language and a database manager -- a
    system that creates fast, powerful business programs -- today.
    
    CLASSIC SOLUTIONS provides a quick way to create screens and reports as
    they will appear on a terminal or printed page.  It is also a data
    control system to keep track of all of the items of information --what
    they are, what they contain, what is valid data, and how each item
    relates to all the others; a data dictionary.  Also included is a set of
    standardized tools so you don't have to rebuild the same logic over and
    over.  Use the same data entry techniques for each and every
    application.
    
    The number of data files supported by CLASSIC SOLUTIONS are limited
    only by the amount of available storage.  Each data file can have 250
    records and each record can have 1,000 fields.  CLASSIC SOLUTIONS comes
    with an on-line tutorial to help you get started.  It is fully menu-
    driven and extensively documented.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1139.TXT

{% raw %}
```
Disk No  1139
Program Title: CLASSIC SOLUTION version 2.0CG (Disk 2 of 2)
PC-SIG version 1

CLASSIC SOLUTION comes on two disks. This disk has the documenation for
the program and disk #1138 has the program. Please refer to disk #1138
for a full description.

Usage:  Business.

System Requirements:  A hard disk.

How to Start:  Type GO (press enter).

Suggested Registration:  $65.00

File Descriptions:

CLASMAN  ARC  Documentation in an archived format.
MANUAL   BAT  Batch file to unarchive and print the documentation.
PKARC    DOC  Doc file for archiving program located on disk #1138.
PKXARC   DOC  Doc file for unarchiving program located on disk #1138.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## PKARC.DOC

{% raw %}
```
PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 1




                        Table of Contents
                        -----------------


 Topic                                                 Page
 -----                                                 ----

   Features and Overview .............................. 2

   Archive Functions
       Add files to an archive ........................ 4
       Update files to an archive ..................... 4
       Freshen files in an archive .................... 4
       Move files to an archive ....................... 5
       Delete files in an archive ..................... 5
       Verbose listing of files in an archive ......... 5

   PKARC Archive Commenting Feature ................... 6

   Using a Ramdisk with PKARC ......................... 8

   Using PKARC in a batch file ........................ 8

   PKARC Error Messages ............................... 9
  
   PKARC Revision history ............................. 11

   General Information ................................ 12

   Software License ................................... 13

PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 2



Features
--------

  - THE FASTEST CREATION AND UPDATING OF ARCHIVES - EVER.

  - Highest compression ratios with state-of-the-art Enhanced
    Dynamic Ziv-Lempel-Welch Crunching and Squashing.

  - Unique Archive Commenting capability.

  - Data integrity ensured by 16 bit Cyclic Redundancy Check.

  - Superior file buffering.

  - Not copy protected.

  - Pay only if you find the software useful.


Overview
--------

An archive is a collection of one or more files  collected  into  a 
single  archive  file.  A file extension of .ARC is usually used to 
denote an archive.  Each file in an archive is compressed  to  save 
disk  space,  backup storage space, and file transfer time.  When a 
file is archived, it is  analyzed  and  compressed  with  the  most 
optimal  data  compression  method for that file.  Every file in an 
archive is stored with a 16-bit Cyclic Redundancy  Check  (CRC)  to 
ensure data integrity when the file is extracted from the archive.

PKARC is a FAST!   archive  update/create  utility  that  generates 
archives.   It  is  compatible with SEAware's (Software Enhancement 
Associate's) ARC program  and  my  own  FAST!   archive  extraction 
utility PKXARC, but is many times faster than SEAware's ARC program 
and faster than ANY OTHER  archive  utility.   PKARC  achieves  its 
speed  through  the  use of highly optimized assembly language code 
and advanced file buffering techniques.  With version 1.1 of PKARC, 
an  Enhanced Ziv-Lempel-Welch crunching technique is employed which 
can result in an up to a 40% space savings over ARC.  With  version 
2.0  of  PKARC, a new compression method called "squashing" is used 
which can save up to an additional 10% or more for large text files.


PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 3



Using PKARC
-----------

Usage: PKARC [compatibility options] options archive [filespec...]

Compatibility options are:

      /oc  = old crunching (no squashing)
      /ot  = old datestamping method
      /otc = both old crunching and datestamping

Options are:

      a = add files to archive       d = delete files from archive
      f = freshen files in archive   m = move files to archive
      u = update files in archive    v = display verbose listing of archive
      l = display software license   c = add/update file comments
      x = add/update archive comment

The  /oc  compatibility  option  prevents  PKARC  from  using  file 
squashing.  With squashing disabled,  PKARC  will  create  archives 
completely compatible with SEAware's ARC program and older versions 
of PKXARC.

The /ot compatibility  option  forces  PKARC  to  follow  SEAware's 
archive  datestamping  method.  By default, PKARC sets the time and 
date of an archive to the current time  and  date  whenever  it  is 
modified.   The  SEA  archiver  will  set  the  time and date of an 
archive to the time and date of the latest file within the archive.  
Using  this  option  will  cause  PKARC  to use this archive dating 
method.

The  two compatibility options can be specified at the same time by 
using either /oct or /otc.

The  A,F,M,  and U options can be followed by a C and/or X to cause 
prompting for the file comments and/or the archive comment.  The  V 
option  can  be followed by a C for a verbose listing with the file 
comments.

The DOS wildcards * and ? can be used when specifying file names.


PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 4



Adding files to an archive
--------------------------

This  option is used to add files to an existing archive, or create 
a new archive with the specified files.  This is  the  most  common 
use  of  PKARC.  If no list of files is given, all the files in the 
current directory will be added.  Examples:

PKARC a stuff

will collect all the files in the current directory, and place them 
in the archive STUFF.ARC

PKARC a a:manuals b:*.doc b:*.txt

will collect all files with an extension of .DOC or .TXT on drive B 
and place them in the archive A:MANUALS.ARC.


Updating files to an archive
----------------------------

This option works the same as the Add option,  with  the  exception 
that if a file already exists within an archive, it will be updated 
only if the datestamp of the file on the disk is  dated  after  the 
file  within  the  archive.   This option can be used to prevent an 
earlier version of a file from overwriting a later version which is 
in an archive.  For example:

PKARC u manuals *.doc *.txt

will  collect all files with an extension of .DOC or .TXT and place 
them in the archive MANUALS.ARC.  If however, a file already exists 
in  the  archive  and  on  the  disk  (say  STARTREK.DOC), the file 
STARTREK.DOC will be added to the archive only if it is dated later 
than  the  version already in the archive.  If the file on the disk 
has an earlier date, then the version in the archive will remain.


Freshening files in an archive
------------------------------

This option is used to ensure that  an  archive  contains  all  the 
latest  versions of its files.  The Freshen function works like the 
Update function, except it will not cause new files to be added  to 
the archive.  For example:

PKARC f arcutil b:*.*

will  go  through  all the files on drive B and look for files that 
are in already in the archive, but with a later date.  If  a  later 
version is found, it will be updated in the archive.


PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 5



Moving files to an archive
--------------------------

This option works exactly like the Add function,  except  that  the 
original   files   are  deleted  from  the  disk  after  successful 
archiving.  The files are deleted only after the archive is created 
and  completed,  and  no errors have occurred.  If any errors occur 
during the archiving process (such as disk full) the original files 
will not be deleted.  For example:

PKARC m cfiles *.c

will add all files with an extension .C to the archive  CFILES.ARC.  
After  all  the  files have been successfully added to the archive, 
they will be deleted from the disk.

Deleting files from an archive
------------------------------

This option is used to delete files from within an archive.  For 
example:

PKARC d games *.bas

This will delete all files with the extension .BAS from the archive 
GAMES.ARC.


Verbose listing of an archive
-----------------------------

This option is used to list the contents of an archive.  The 
listing is in the following format:

Filename        Length   Method     Size   Ratio    Date      Time
--------        ------   ------    ------  -----    ----      ----
FILENAME.EXT    nnnnnn  aaaaaaaa   nnnnnn   nn%   mm-dd-yy  hr:mm:ss

The length is the true length of the file.  The method is the  data 
compression technique used on the file and is one of the following:

Stored    The file was Stored.
Packed    The file was Packed with non-repeat packing.
Squeezed  The file was Squeezed with Huffman encoding.
crunched  The file was crunched with old style Ziv-Lempel-Welch compression.
Crunched  The file was Crunched with Dynamic Ziv-Lempel-Welch compression.
Squashed  The file was Squashed with Dynamic Ziv-Lempel-Welch compression.

The  size  is the resulting size of the file after compression, and 
the ratio is the percentage of file space saved.   For  example,  a 
file  with  a  length  of  10,000  and a size of 2,500 would have a 
savings ratio of 75%.


PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 6



PKARC Archive File Comments Feature
-----------------------------------

One  of  the  unique  features  of  PKARC is the ability to store a 
comment with an archive, and optionally a comment for each file  in 
an archive, similar to the file descriptions found on many Bulletin 
Board Systems.  The archive comment is automatically displayed when 
the archive is manipulated by PKARC version 1.2 or later and PKXARC 
version 3.3 or later.  Each file in  an  archive  can  be  given  a 
comment  which  can be displayed with the verbose listing function.  

Following the V option with letter C will cause the comments to  be 
displayed.  For example:

PKARC vc utility

will display the files in the archive UTILITY.ARC with the archive 
file comments in the following format:

Filename        Comment                             Date      Time
--------        --------------------------------    ----      ----
FILENAME.EXT    cccccccccccccccccccccccccccccccc  mm-dd-yy  hr-mm-ss

The archive comment and file comments can be up to 32 characters in 
length.

If the A,U,F, or M options are followed  by  a  X,  prompting  will 
occur for the archive comment.  For example:

PKARC ax datafils *.dat

will   add  all  files  with  an  extension  .DAT  to  the  archive 
DATAFILS.ARC and prompt for the archive comment for DATAFILS.ARC.

If  the  A,U,F,  or  M  options are followed by a C, prompting will 
occur for a file comment after each file is added to  the  archive.  
For example:

PKARC ac datafils *.dat

will   add  all  files  with  an  extension  .DAT  to  the  archive 
DATAFILS.ARC.  After each file is  placed  into  the  archive,  the 
comment for that file can be entered.

The  C  and  X options from above can be combined to prompt for the 
archive comment and the  file  comments  at  the  same  time.   For 
example:

PKARC acx datafils *.dat

will  add  all  files  with  an  extension  .DAT  to  the   archive 
DATAFILS.ARC  and  cause  prompting for the archive comment and the 
file comments.

PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 7



The  C  option  can  be  used  to add or update file comments.  For 
example:

PKARC c programs

will go through all files in the archive  PROGRAMS.ARC  and  prompt 
for  a comment for each file.  Comments can be updated selectively, 
such as:

PKARC c programs spoolkey.sys

will allow the file comment for the specified file to be  added  or 
changed.

The X option can be used to add or update the archive comment.  For 
example:

PKARC x programs

will add or update the archive comment for the archive PROGRAMS.ARC.

The  C  and  X options from above can be combined to prompt for the 
archive comment and the  file  comments  at  the  same  time.   For 
example:

PKARC cx programs

will add or update the archive comment and the  file  comments  for 
the archive PROGRAMS.ARC.

PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 8



NOTE: The  comments  are  stored  in  a  way totally transparent to 
      SEAware's ARC program and and have no effect on the operation 
      of ARC.

      However,  because  SEAware's  ARC program does not know about 
      archive comments or file comments, ARC truncates the comments 
      from  an  archive  when  modifying  it.   Using SEAware's ARC 
      program to add, update, move, freshen or delete files from an 
      archive  will  cause all comments to be lost.  If you wish to 
      retain the comments within an archive, it is recommended that 
      the use of SEAware's ARC program be avoided.


Using a Ramdisk with PKARC
--------------------------

PKARC sometimes creates one or two temporary files while  archiving 
files.  The default drive for these files is the current drive.  In 
order to increase performance, PKARC can be told which drive and/or 
subdirectory  to  use  for  temporary files through DOS environment 
strings.   PKARC  searches   the   environment   for   the   string 
PKARCTMP=pathspec.    For   compatibility   with  ARC,  the  string 
ARCTEMP=pathspec can be used as well.  For example if drive D is  a 
ramdisk, entering:

SET PKARCTMP=D:

at the DOS prompt will cause PKARC to use  drive  D  for  temporary 
files.


Using PKARC in a batch file
---------------------------

If you are using PKARC from a batch file, you  can  test  if  PKARC 
aborted  with  an  error  using the DOS errorlevel variable.  PKARC 
returns a non-zero errorlevel if an  error  occurred,  and  a  zero 
errorlevel for normal termination.  

PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 9



PKARC Error Messages
--------------------

When  any  of the following errors are detected, PKARC will display 
the indicated message and abort to DOS.   All  original  files  and 
archives  will  be  intact,  as  PKARC does not overwrite or delete 
existing files on the disk until the entire archive processing  has 
been  successfully  completed.


PKARC: Unknown option: (unknown character)

    The displayed option is unknown.

PKARC: Insufficient Memory

    There is not enough free memory to run PKARC.

PKARC: No archive specified.

    The name of the archive to be processed must be given.

PKARC: No files specified for deletion.

    The delete option was  specified,  but  no  files  were  given. 
    Unlike other options, delete does not assume *.* if no specific 
    files are given.

PKARC: Can't find XXXXXXXX.YYY

    The specified file(s) could not be found.

PKARC: No file(s) found.

    No files were found to add or update to the archive.

PKARC: Can't create file XXXXXXXX.YYY

    The displayed file could not be created.  The output directory 
    is probably invalid or full.

PKARC: Too many files.

    This error will occur if more than 512 files  or  16  different 
    drive/pathspecs  are  given  at  one  time for the add, update, 
    freshen, or move options.  While there is no limit on the total 
    number of files allowed in an archive, only 512 can be added at 
    one time.
    

PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 10



PKARC: XXXXXXXX.YYY is not an archive.

    The archive name given to PKARC existed on the disk, but either 
    is not an archive, or is corrupted.

PKARC: Can't open XXXXXXXX.YYY

    The displayed file could not be opened.

PKARC: disk full

    The disk is full.

PKARC: XXXXXXXX.YYY is read-only!

    The displayed archive file is a read-only or system file.
    No modification (add, update, delete, etc.) is possible.

PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 11



PKARC Revision History
----------------------

*** PKARC version 1.0, 8-06-86 ***

Initial release.


*** PKARC version 1.1, 9-12-86 ***

Enhanced  Ziv-Lempel-Welch  compression  was  added  to PKARC.  The 
enchanced crunching algorithm provides superior compression  ratios 
over  the  traditional  crunching  algorithm  used in SEAware's ARC 
program.  Files crunched with the enhanced crunching algorithm  are 
up to 40% smaller, yet still fully compatible with ARC and PKXARC.

File buffering has been drastically improved, resulting in faster 
compression, especially on floppy disks.

The improved buffering and other optimizations have resulted  in  a 
twofold increase in archiving speed over PKARC version 1.0. 


*** PKARC version 1.2, 10-23-86 ***

PKARC  version  1.1  inadvertently  introduced a rare bug involving 
squeezed files.  This has been corrected in version 1.2.

Archive commenting ability has been  added  to  PKARC.   PKARC  now 
allows  a comment to be assigned to an archive, in addition to each 
file within an  archive.   The  archive  comment  is  automatically 
displayed  when  the archive is manipulated by PKARC version 1.2 or 
later and PKXARC version 3.3 or later.

File  buffering  has  been improved.  While PKARC will still run in 
minimum of 128K of RAM, PKARC will take advantage of up to 224K  of 
RAM if available to increase file buffering.

The  Enhanced  Ziv-Lempel-Welch  compression  has   been   slightly 
improved.   Some  files  will  compress  up to 5% smaller than with 
PKARC  version  1.1.   Binary  files  should  experience  the  most 
improvement.

Optimizations  in  PKARC  version 1.2  have resulted in up to a 20% 
increase in archiving speed over PKARC version 1.1.


*** PKARC version 2.0, 12-15-86 ***

A new compression method called  "squashing"  was  added  to  PKARC 
version  2.0.  Squashing is a variation of Dynamic Ziv-Lempel-Welch 
compression  which  can  yield  a  significant   improvement   over 
crunching for larger text files.  Also, the unsquashing of files is 
faster than uncrunching.  In addition, the Dynamic Ziv-Lempel-Welch 
crunching  has  been  improved in PKARC version 2.0 with some files 
crunching significantly smaller than with PKARC version 1.2.

As  always,  minor  speed  improvements  have resulted in about 10% 
speed increase over the previous version.

An  "old  compatibility  switch" was added to PKARC version 2.0 for 
compatibility with SEAware's archive dating  method.   By  default, 
PKARC  sets the time and date of an archive to the current time and 
date whenever it is modified.  The SEA archiver will set  the  time 
and  date  of  an  archive  to the time and date of the latest file 
within the archive.  While most users prefer that an  archive  date 
be  set  to  the  current date, this switch was added for those who 
prefer the SEA method.


PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 12



General Information
-------------------

PKARC will run on any  IBM  PC/XT/AT/RT/jr/Portable/Convertible  or 
DOS  compatible  whatever  running  PC/MS-DOS  2.0 or higher with a 
minimum of 128K free RAM.


IBM is a registered trademark of the International Business Machine
Corporation.
MS-DOS is a registered trademark of Microsoft Inc.


If you have any questions or comments about PKARC send them to Phil 
Katz at:

Exec-PC multi-user IBM BBS, Bob Mahoney SYSOP
Shorewood, Wisconsin
414-964-5160
300/1200/2400 baud, 24 hours a day, 16 lines

or

RBBS-PC of FARGO, Loren Jones SYSOP
Fargo, North Dakota
701-293-5973
300/1200/2400 baud, 24 hours a day


Special thanks to Bob Mahoney, Alan Losoff, Gene Alm,
Loren Jones, and Mike Shawaluk.


PKARC  FAST!  Archive Create/Update Utility  Version 2.0  12-15-86  Page 13



License
-------

Copyright (c) 1986 PKWARE, Inc.  All Rights Reserved.

You are free to use, copy and distribute PKARC providing that:

        NO FEE IS CHARGED FOR USE, COPYING OR DISTRIBUTION.

        IT IS NOT MODIFIED IN ANY WAY.

Clubs  and  user  groups  may charge a nominal fee for expenses and 
handling while distributing PKARC.

Volume  discounts,  site  licenses,  commercial licenses and custom 
versions of PKARC and PKXARC are available.  Write to  the  address 
below for more information.

This program is provided AS IS without any warranty,  expressed  or 
implied,  including  but  not  limited  to fitness for a particular 
purpose.

If you find PKARC fast, easy, and convenient to use, a contribution 
of $20 would be appreciated.  With each contribution of $45 or more 
you  will be registered to receive a diskette with the next version 
of PKARC and PKXARC  when  available.   Please  state  the  current 
versions of PKARC and PKXARC that you have.  Send contributions to:

PKWARE, Inc.
7032 Ardara Avenue
Glendale, WI 53209


```
{% endraw %}

## PKXARC.DOC

{% raw %}
```
PKXARC   FAST!   Archive Extract Utility   Version 3.4  12-15-86   Page 1





                        Table of Contents
                        -----------------


 Topic                                                 Page
 -----                                                 ----

   Features and Overview .............................. 2

   Using PKXARC ....................................... 3

   PKXARC Warning Messages............................. 4

   PKXARC Error Messages .............................. 4
  
   PKXARC Revision history ............................ 5

   Using PKXARC in a batch file ....................... 8

   General Information ................................ 9

   Software License ................................... 10

PKXARC   FAST!   Archive Extract Utility   Version 3.4  12-15-86   Page 2



Features
--------

  - THE FASTEST ARCHIVE EXTRACTION - EVER.

  - Data integrity ensured by 16 bit Cyclic Redundancy Check.

  - Supports the PKARC file squashing and archive comment features.

  - Superior file buffering.

  - Not copy protected.

  - Pay only if you find the software useful.


Overview
--------

An  archive  is  a collection of one or more files collected into a 
single archive file.  A file extension of .ARC is usually  used  to 
denote  an  archive.  Each file in an archive is compressed to save 
disk space, backup storage space, and file transfer time.   When  a 
file  is  archived,  it  is  analyzed  and compressed with the most 
optimal data compression method for that file.  Every  file  in  an 
archive  is  stored  with a 16-bit Cyclic Redundancy Check (CRC) to 
ensure data integrity when the file is extracted from the archive.

PKXARC is a FAST! archive extraction utility  that  extracts  files 
from an archive and restores them to their orignal name, size, time 
& date.  It  is  completely  compatible  with  SEAware's  (Software 
Enhancement  Associate's)  ARC  program  and  my  own FAST! archive 
create/update  utility  PKARC,  but  is  many  times  faster   than 
SEAware's  ARC  program  and  faster than ANY OTHER archive extract 
utility.  PKXARC achieves its  speed  through  the  use  of  highly 
optimized  assembly  language  code  and  advanced  file  buffering 
techniques.

PKXARC   FAST!   Archive Extract Utility   Version 3.4  12-15-86   Page 3



Using PKXARC
------------

Usage: PKXARC [options] archive [d:path\] [file...]

Options are:

  /r = replace existing files           /v = verbose listing of archive(s)
  /c = extract file(s) to the console   /p = extract file(s) to the printer
  /t = test archive integrity           /l = display software license

  archive  Archive file name, wildcards *,? ok.  Default extension
           is .ARC
  d:path\  Output drive and/or path.
  file     Name(s) of files to extract, list, or test.
           Wildcards *,? ok.  Default is ALL files.


Examples:

PKXARC a:* b:
  - Extract  all  files  from  all  archives  on  drive  A: storing 
    extracted files on drive B:.

PKXARC sigdir1 c:
  - Extract all files from the archive SIGDIR1.ARC in  the  current 
    drive & subdirectory storing extracted files on drive C:.

PKXARC c:\lotus\tax *.wks
  - Extract  all  .WKS  files from archive C:\LOTUS\TAX.ARC storing 
    extracted files in the current drive & subdirectory.

PKXARC/r c:\public\* d:\ *.doc *.txt
  - Extract all .DOC and  .TXT  files  from  all  archives  in  the 
    directory  C:\PUBLIC  storing  the  extracted files in the root 
    directory of drive D:.  Overwrite existing files without query.

PKXARC/v c:\download\*
  - Display a verbose listing of  all  archives  in  the  directory 
    C:\DOWNLOAD.

PKXARC/c utility *.doc
  - Extract  all .DOC files form the archive UTILITY.ARC displaying 
    extracted files on the console.

PKXARC/p utility *.doc
  - Same as above, except extracted  files  are  displayed  on  the 
    printer.

PKXARC/t utility
  -Test the integrity of the archive UTILITY.ARC.

PKXARC/t c:\download\*
  -Test the validity of all archives in the directory C:\DOWNLOAD.

PKXARC   FAST!   Archive Extract Utility   Version 3.4  12-15-86   Page 4



PKXARC warnings
---------------

Warning!  File XXXXXXXX.YYY already exists!  overwrite (y/n)?
  - A file to be extracted from the archive already exists on disk.  
    Answer  "y"  to  extract  the  file from the archive anyway and 
    overwrite the existing file, "n" to not extract the  file  from 
    the archive.  Use the "/r" command line option to suppress this 
    warning.

Unknown packing method for: XXXXXXXX.YYY
  - The  file is squeezed or encoded in a unknown way.  The archive 
    is probably corrupt.

Warning!  File XXXXXXXX.YYY fails CRC check
  - The Cyclic Redundancy  Check  calculation  did  not  match  the 
    stored value.  The file is probably corrupt.

XXXXXXXX.YYY is not an archive
  - The file specified is either not an archive, or is corrupt.

Archive length error
  - A end of file token  was  not  found  for  a  file  within  the 
    archive.  The archive is corrupt.


PKXARC errors
-------------

PKXARC: can't find XXXXXXXX.YYY
  - The given archive filename could not be found.

PKXARC: cannot read archive: XXXXXXXX.YYY
  - The archive could not be opened.

PKXARC: Cannot create: XXXXXXXX.YYY
  - The  output file could not be created.  The output directory is 
    invalid or full.

PKXARC: File has invalid decode tree
  - The Huffman decode tree for the file is invalid.   The  archive 
    is corrupt.

PKXARC: Disk full
  - The disk is full.

PKXARC: Internal table overflow
  - An internal decode table overflowed.  The archive is corrupt.

PKXARC   FAST!   Archive Extract Utility   Version 3.4  12-15-86   Page 5



PKXARC history
--------------

Soon  after  the archive file format was introduced into the public 
domain, it became popular and many BBS files were  transfered  this 
way.   The  archive format is a convenient way to put several files 
into one and compress them for effecient disk storage  and  reduced 
transfer time, in one step.

However, the archive utility was much slower  at  extracting  files 
than  equivalent  UnSQueeze type programs.  In the inevitable quest 
for faster archive file extraction, PKXARC was created.


Changes in PKXARC version 2.3
-----------------------------

The  ability  to extract dynamic Ziv-Lempel-Welch encoded files was 
added.  Version  5.0  of  ARC  introduced  a  new,  more  efficient 
variation  of Ziv-Lempel "Crunching".  PKXARC can now extract files 
Crunched with this method, approximately 3 times  faster  than  ARC 
5.1.


Changes in PKXARC version 2.4
-----------------------------

Performance  for  extracting  dynamic  Ziv-Lempel  files  has  been 
improved. Files which are identified as "Crunched" (with a  capital 
C) on the ARC verbose listing extract 15-20% faster than before.

When  a  "Disk  full"  error  occurred, previous versions of PKXARC 
would leave an empty or incomplete file on the  disk.   PKXARC  now 
deletes  any  incomplete  files  before aborting with a "Disk full" 
error.


Changes in PKXARC version 2.5
-----------------------------

The ability to extract specific files was added.  PKXARC can now be 
passed  the specific names of files to be extracted from an archive 
on the command line.

PKXARC   FAST!   Archive Extract Utility   Version 3.4  12-15-86   Page 6



Changes in PKXARC version 2.6
-----------------------------

Extraction  performance  for  all  compression   types   has   been 
significantly  improved  over  PKXARC  version 2.5.  Files that are 
crunched with older versions of ARC (pre 5.x)  extract  5%  faster.  
Squeezed  files  extract  15% faster.  Files that are Crunched with 
ARC 5.x extract 20% faster.


Changes in PKXARC version 2.7
-----------------------------

Extraction performance of Squeezed files  has  been  improved  more 
than  60%. PKXARC version 2.7 can extract a Squeezed file more than 
8 times as fast as ARC 5.1.

The message displayed when a  file  is  being  extracted  has  been 
enhanced to indicate the compression method used to store the file.

Message                 Meaning
-------                 -------
Extracting   The file was Stored.
un-Packing   The file was Packed with non-repeat packing.
uncrunching  The file was crunched with old style Ziv-Lempel-Welch compression.
unSqueezing  The file was Squeezed with Huffman encoding.
unCrunching  The file was Crunched with Dynamic Ziv-Lempel-Welch compression.
unSquashing  The file was Squashed with Dynamic Ziv-Lempel-Welch compression.


Changes in PKXARC version 3.0
-----------------------------

The following functions have been added to PKXARC version 3.0:

Extraction of files to the console or printer.
The ability to display a verbose archive listing.

PKXARC   FAST!   Archive Extract Utility   Version 3.4  12-15-86   Page 7



Changes in PKXARC version 3.1
-----------------------------

A  minor  bug  in  the  pattern  matching  code for individual file 
specifications when using the wildcard "*" was fixed.  For example, 
previous versions of PKXARC would not correctly match "flight*.com" 
to the exact filename "flight.com".  This  has  been  corrected  in 
PKXARC version 3.1.

The  verbose archive listing now displays the total number of files 
in the archive.

Extraction speed has been increased  5-10%  for  all  decompression 
methods.

A  "jr"  version  of  PKXARC was created for computers with limited 
memory.  PKXARCjr requires only 74K of free memory to run,  but  is 
slightly  slower than the standard version for most archives.  Both 
versions will run on  any  type  of  computer  providing  there  is 
sufficient free memory.


Changes in PKXARC version 3.2
-----------------------------

The  archive test function "/t" was added to PKXARC.  This function 
tests the integrity of the archive without extracting the files  to 
disk.  Specifically, the CRC for each file is computed and compared 
against the correct value stored in the archive.

Extraction speed has been increased by 5% for most files.


Changes in PKXARC version 3.3
-----------------------------

Support of the PKARC archive comment  feature  was  added.   PKXARC 
will  automatically  display an archive comment if it is present in 
an archive.

When extracting files to the  printer,  PKXARC  will  now  print  a 
form-feed character after each file.

Extraction speed has been increased by 5% for Crunched files.


PKXARC   FAST!   Archive Extract Utility   Version 3.4  12-15-86   Page 8



Changes in PKXARC version 3.4
-----------------------------

Support of "squashed" files created by PKARC 2.0  has  been  added.  
Squashing is a variation of Dynamic Ziv-Lempel-Welch encoding which 
can yield a 10% or better compression ratio for large  text  files.  
Squashed  files  typically  unsquash  15%  faster  than  equivalent 
crunched files.

In order to be consistent with the command  syntax  of  PKARC,  the 
requirement  for dashes "-" to be given before individual filenames 
to extract or list has been removed.

Error  recovery  for  damaged archives has been improved.  Previous 
versions of PKXARC would  occasionally  hang  up  while  processing 
damaged  archives.   PKXARC version 3.4 has improved error recovery 
allowing at least the partial extraction of files  from  a  damaged 
archive.


Using PKXARC in a batch file
---------------------------

If you are using PKXARC from a batch file, you can test  if  PKXARC 
aborted  with  an  error using the DOS errorlevel variable.  PKXARC 
returns a non-zero errorlevel if an  error  occurred,  and  a  zero 
errorlevel for normal termination.

PKXARC   FAST!   Archive Extract Utility   Version 3.4  12-15-86   Page 9



General Information
-------------------

PKXARC will run on any IBM  PC/XT/AT/RT/jr/Portable/Convertible  or 
DOS  compatible  whatever  running  PC/MS-DOS  2.0 or higher with a 
minimum of 128K free RAM.

IBM is a registered trademark of the International Business Machine
Corporation.
MS-DOS is a registered trademark of Microsoft Inc.


If you have any questions or comments about PKARC send them to Phil 
Katz at:

Exec-PC multi-user IBM BBS, Bob Mahoney SYSOP
Shorewood, Wisconsin
414-964-5160
300/1200/2400 baud, 24 hours a day, 16 lines

or

RBBS-PC of FARGO, Loren Jones SYSOP
Fargo, North Dakota
701-293-5973
300/1200/2400 baud, 24 hours a day


Special thanks to Bob Mahoney, Alan Losoff, Gene Alm,
Loren Jones, and Mike Shawaluk.


PKXARC   FAST!   Archive Extract Utility   Version 3.4  12-15-86   Page 10



License
-------

Copyright (c) 1986 PKWARE, Inc.  All Rights Reserved.

You are free to use, copy and distribute PKXARC providing that:

        NO FEE IS CHARGED FOR USE, COPYING OR DISTRIBUTION.

        IT IS NOT MODIFIED IN ANY WAY.

Clubs  and  user  groups  may charge a nominal fee for expenses and 
handling while distributing PKARC.

Site licenses, commercial licenses and custom versions of PKARC and 
PKXARC  are  available.   Write  to  the  address  below  for  more 
information.

This program is provided AS IS without any warranty,  expressed  or 
implied,  including  but  not  limited  to fitness for a particular 
purpose.

If  you  find  PKXARC  fast,  easy,  and  convenient  to   use,   a 
contribution  of  $20 would be appreciated.  With each contribution 
of $45 or more you will be registered to receive  a  diskette  with 
the  next version of PKARC and PKXARC when available.  Please state 
the current versions of PKARC  and  PKXARC  that  you  have.   Send 
contributions to:

PKWARE, Inc.
7032 Ardara Avenue
Glendale, WI 53209


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1139

     Volume in drive A has no label
     Directory of A:\

    CLASMAN  ARC    263599   6-08-88   4:55p
    FILE1139 TXT       791   9-28-88  12:39p
    GO       BAT        38   9-23-88   1:43p
    GO       TXT       463   9-23-88   1:59p
    MANUAL   BAT       128   6-08-88  10:08a
    PKARC    DOC     20859  12-15-86
    PKXARC   DOC     14043  12-15-86
            7 file(s)     299921 bytes
                           18432 bytes free
