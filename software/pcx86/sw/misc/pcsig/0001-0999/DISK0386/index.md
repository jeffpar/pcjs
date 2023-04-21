---
layout: page
title: "PC-SIG Diskette Library (Disk #386)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0386/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0386"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BANNER"

    Print long, large banners for birthdays, anniversaries, sales or
    announcements. Included is the MS-FORTRAN source code to customize the
    program to suit your needs. A straightforward program and a good
    addition to anyone's collection.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES386.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No 386   Banner                                                 v1_1
--------------------------------------------------------------------------
BANNER program makes long, large-letter banners on your printer from
console input.  Includes the MS-FORTRAN source code so it can be
customized to suit your needs.
 
ACHN     FOR  Prints the second part of lower-case 'H' and 'N'.
ACHN     OBJ  Compiled ACHN.FOR module.
BANLNK   INP  Links input files for DOS V2 Banner.
BANNER   FOR  Main program of BANNER.
BANNER   OBJ  Compiled BANNER.FOR module.
BANV1    EXE  Executable BANNER for PCDOS/MSDOS V1.x.
BANV2    EXE  Executable BANNER for PCDOS/MSDOS V2.x.
BAXX     FOR  Puts background symbols in the output lines.
BAXX     OBJ  Compiled BAXX.FOR module.
BLKDAT   FOR  Contains character data for output.
BLKDAT   OBJ  Compiled BLKDAT.FOR module.
FILES    SUM  Additional information about the files on this disk.
FRNT     FOR  Puts foreground symbols in the output lines.
FRNT     OBJ  Compiled FRNT.FOR module.
LEGL     FOR  Prints the initial part of lower-case 'H', 'K', 'L', 'M',
              'N', 'P' and 'R'
LEGL     OBJ  Compiled LEGL.FOR module.
LEGU     FOR  Prints the initial part of upper-case 'B', 'D', 'E', 'F',
              'H', 'I', 'K', 'L', 'M', 'N', 'P' and  'R'
LEGU     OBJ  Compiled LEGU.FOR module.
MINMAX   FOR  Part of BANNER.
MINMAX   OBJ  Compiled MINMAX.FOR module.
OHAF     FOR  Prints  the  left  or right part of  upper-case  'O'  for
              upper-case 'C', 'D', 'G', 'O' and  'Q'.
OHAF     OBJ  Compiled OHAF.FOR module.
OHAV     FOR  Prints  the  left  or right half of  lower-case  'O'  for
              lower-case 'B', 'C', 'D', 'O', 'P' and 'Q'.
OHAV     OBJ  Compiled OHAV.FOR module.
PRNT     FOR  Manages the printing of each character.
PRNT     OBJ  Compiled PRNT.FOR module.
RASSIG   FOR  Assigns filename for the read routine.
RASSIG   OBJ  Compiled RASSIG.FOR module.
README   DOC  Documentation file.
WASSIG   FOR  Assigns filename for write routine.
WASSIG   OBJ  Compiled WASSIG.FOR module.
 
 
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## PKARC.DOC

{% raw %}
```
PKARC  FAST!  Archive Create/Update Utility  Version 1.2  10-23-86  Page 1




                        Table of Contents
                        -----------------


 Topic                                                 Page
 -----                                                 ----

   Features and Overview .............................. 2

   Archive Functions
       Add files to an archive ........................ 3
       Update files to an archive ..................... 4
       Freshen files in an archive .................... 4
       Move files to an archive ....................... 4
       Delete files in an archive ..................... 5
       Verbose listing of files in an archive ......... 5

   PKARC Archive Commenting Feature ................... 6

   Using a Ramdisk with PKARC ......................... 8

   Using PKARC in a batch file ........................ 8

   PKARC Error Messages ............................... 9
  
   PKARC Revision history ............................. 11

   General Information ................................ 12

   Software License ................................... 12

PKARC  FAST!  Archive Create/Update Utility  Version 1.2  10-23-86  Page 2



Features
--------

  - THE FASTEST CREATION AND UPDATING OF ARCHIVES - EVER.

  - Higher compression ratios with state-of-the-art Enhanced
    Ziv-Lempel-Welch Crunching.

  - Unique Archive Commenting capability.

  - Data integrity ensured by 16 bit Cyclic Redundancy Check.

  - Superior file buffering.

  - Not copy protected.

  - Pay only if you find the software useful.


Overview
--------

An archive is a collection of one or more files  collected  into  a
single  archive file.  An file extension of .ARC is usually used to
denote an archive.  Each file in an archive is compressed  to  save
disk  space,  backup storage space, and file transfer time.  When a
file is archived, it is  analyzed  and  compressed  with  the  most
optimal  data  compression  method for that file.  Every file in an
archive is stored with a 16-bit Cyclic Redundancy  Check  (CRC)  to
ensure data integrity when the file is extracted from the archive.

PKARC is a FAST!   archive  update/create  utility  that  generates 
archives.   It  is  completely  compatible with SEAware's (Software 
Enhancement Associate's)  ARC program  and  my  own  FAST!  archive 
extraction  utility PKXARC, but is many times faster than SEAware's 
ARC program and faster  than  ANY  OTHER  archive  utility.   PKARC 
achieves  its  speed  through  the use of highly optimized assembly 
language code and advanced file buffering techniques.  With version 
1.1  of  PKARC, an Enhanced Ziv-Lempel-Welch crunching technique is 
employed which can result in an upto a 40% space savings over  ARC.  
All archives created with PKARC can be extracted with SEAware's ARC 
program or PKXARC.  Of course, PKXARC can  extract  files  from  an 
archive many times faster than SEAware's ARC program.

PKARC  FAST!  Archive Create/Update Utility  Version 1.2  10-23-86  Page 3



Using PKARC
-----------

Usage: PKARC options archive [filespec...]

Options are:
      a = add files to archive       d = delete files from archive
      f = freshen files in archive   m = move files to archive
      u = update files in archive    v = display verbose listing of archive
      l = display software license   c = add/update file comments
      x = add/update archive comment

The  A,F,M,  and U options can be followed by a C and/or X to cause 
prompting for the file comments and/or the archive comment.  The  V 
option  can  be followed by a C for a verbose listing with the file 
comments.

The DOS wildcards * and ? can be used when specifying file names.


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

PKARC  FAST!  Archive Create/Update Utility  Version 1.2  10-23-86  Page 4



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

PKARC  FAST!  Archive Create/Update Utility  Version 1.2  10-23-86  Page 5



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
FILENAME.EXT    nnnnnn  aaaaaaaa   nnnnnn   nn%   mm-dd-yy  hr-mm-ss

The length is the true length of the file.  The method is the  data 
compression technique used on the file and is one of the following:

Stored    The file was Stored.
Packed    The file was Packed with non-repeat packing.
crunched  The file was crunched with old sytle Ziv-Lempel-Welch compression.
Crunched  The file was Crunched with Dynamic Ziv-Lempel-Welch compression.
Squeezed  The file was Squeezed with Huffman encoding.

The  size  is the resulting size of the file after compression, and 
the ratio is the percentage of file space saved.   For  example,  a 
file  with  a  length  of  10,000  and a size of 2,500 would have a 
savings ratio of 75%.

PKARC  FAST!  Archive Create/Update Utility  Version 1.2  10-23-86  Page 6



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

The  archive comment and file comments can be upto 32 characters in 
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

PKARC  FAST!  Archive Create/Update Utility  Version 1.2  10-23-86  Page 7



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

PKARC  FAST!  Archive Create/Update Utility  Version 1.2  10-23-86  Page 8



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

PKARC  FAST!  Archive Create/Update Utility  Version 1.2  10-23-86  Page 9



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

PKARC: Too Many Files.

    This error will occur if more than 512 files  or  16  different 
    drive/pathspecs  are  given  at  one  time for the add, update, 
    freshen, or move options.

PKARC  FAST!  Archive Create/Update Utility  Version 1.2  10-23-86  Page 10



PKARC: XXXXXXXX.YYY is not an archive.

    The archive name given to PKARC existed on the disk, but either 
    is not an archive, or is corrupted.

PKARC: Can't open XXXXXXXX.YYY

    The displayed file could not be opened.

PKARC: disk full

    The disk is full.

PKARC  FAST!  Archive Create/Update Utility  Version 1.2  10-23-86  Page 11



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

The improved buffering and other optimizations  have resulted  in  a 
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
minimum of 128K of RAM, PKARC will take advantage of upto  224K  of 
RAM if available to increase file buffering.

The   Enhanced   Ziv-Lempel-Welch  compression  has  been  slightly 
improved.  Some files will compress upto 5% smaller than with PKARC 
version 1.1.  Binary files should experience the most improvement.

Optimizations  in  PKARC  version  1.2  have resulted in upto a 20% 
increase in archiving speed over PKARC version 1.1.

PKARC  FAST!  Archive Create/Update Utility  Version 1.2  10-23-86  Page 12



General Information
-------------------

PKARC will run on any  IBM  PC/XT/AT/RT/jr/Portable/Convertible  or 
DOS  compatible  whatever  running  PC/MS-DOS  2.0 or higher with a 
minimum of 128K free RAM.

IBM is a registered trademark of the International Business Machine
Corporation.
MS-DOS is a registered trademark of Microsoft Inc.

If you have any questions or comments about PKARC send them to:

Phil Katz
Exec-PC multi-user IBM BBS (16 lines, 24 hours a day)
Milwaukee, WI
(modem) (414) 964-5160

Special thanks to Bob Mahoney, SYSOP of Exec-PC and
Alan Losoff, author of ALUSQ.


License
-------

Copyright (c) 1986 PKWARE, Inc.  All Rights Reserved.

You are free to use, copy and distribute PKARC providing that:

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

If you find PKARC fast, easy, and convenient to use, a contribution 
of $20 would be appreciated.  With each contribution of $45 or more 
you will be registered to receive a diskette with the next versions 
of PKARC and PKXARC  when  available.   Please  state  the  current 
versions of PKARC and PKXARC that you have.  Send contributions to:

PKWARE, Inc.
7032 Ardara Avenue
Glendale, WI 53209


```
{% endraw %}

## PKXARC.DOC

{% raw %}
```
PKXARC   FAST!   Archive Extract Utility   Version 3.3  10-23-86   Page 1





                        Table of Contents
                        -----------------


 Topic                                                 Page
 -----                                                 ----

   Features and Overview .............................. 2

   Using PKXARC ....................................... 3

   PKXARC Warning Messages............................. 4

   PKXARC Error Messages .............................. 4
  
   PKXARC Revision history ............................ 5

   Using PKXARC in a batch file ....................... 7

   General Information ................................ 8 

   Software License ................................... 8 

PKXARC   FAST!   Archive Extract Utility   Version 3.3  10-23-86   Page 2



Features
--------

  - THE FASTEST ARCHIVE EXTRACTION - EVER.

  - Data integrity ensured by 16 bit Cyclic Redundancy Check.

  - Supports the PKARC archive comment feature.

  - Superior file buffering.

  - Not copy protected.

  - Pay only if you find the software useful.


Overview
--------

An archive is a collection of one or more files  collected  into  a 
single  archive file.  An file extension of .ARC is usually used to 
denote an archive.  Each file in an archive is compressed  to  save 
disk  space,  backup storage space, and file transfer time.  When a 
file is archived, it is  analyzed  and  compressed  with  the  most 
optimal  data  compression  method for that file.  Every file in an 
archive is stored with a 16-bit Cyclic Redundancy  Check  (CRC)  to 
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

PKXARC   FAST!   Archive Extract Utility   Version 3.3  10-23-86   Page 3



Using PKXARC
------------

Usage: PKXARC [options] archive [d:path\] [-file...]

Options are:

  /r = replace existing files           /v = verbose listing of archive(s)
  /c = extract file(s) to the console   /p = extract file(s) to the printer
  /t = test archive integrity           /l = display software license

  archive  Archive file name, wildcards *,? ok.  Default extension
           is .ARC
  d:path\  Output drive and/or path.
  -file    Name(s) of files to extract, list, or test.
           Wildcards *,? ok.  Default is ALL files.


Examples:

PKXARC a:* b:
  - Extract  all  files  from  all  archives  on  drive  A: storing 
    extracted files on drive B:.

PKXARC sigdir1 c:
  - Extract all files from the archive SIGDIR1.ARC in  the  current 
    drive & subdirectory storing extracted files on drive C:.

PKXARC c:\lotus\tax -*.wks
  - Extract  all  .WKS  files from archive C:\LOTUS\TAX.ARC storing 
    extracted files in the current drive & subdirectory.

PKXARC/r c:\public\* d:\ -*.doc -*.txt
  - Extract all .DOC and  .TXT  files  from  all  archives  in  the 
    directory  C:\PUBLIC  storing  the  extracted files in the root 
    directory of drive D:.  Overwrite existing files without query.

PKXARC/v c:\download\*
  - Display a verbose listing of  all  archives  in  the  directory 
    C:\DOWNLOAD.

PKXARC/c utility -*.doc
  - Extract  all .DOC files form the archive UTILITY.ARC displaying 
    extracted files on the console.

PKXARC/p utility -*.doc
  - Same as above, except extracted  files  are  displayed  on  the 
    printer.

PKXARC/t utility
  -Test the integrity of the archive UTILITY.ARC.

PKXARC/t c:\download\*
  -Test the validity of all archives in the directory C:\DOWNLOAD.

PKXARC   FAST!   Archive Extract Utility   Version 3.3  10-23-86   Page 4



PKXARC warnings
---------------

Warning!  File YYY already exists!  overwrite (y/n)?
  - A file to be extracted from the archive already exists on disk.  
    Answer  "y"  to  extract  the  file from the archive anyway and 
    overwrite the existing file, "n" to not extract the  file  from 
    the archive.  Use the "/r" command line option to suppress this 
    warning.

Unknown packing method for: YYY
  - The  file  is squeezed or encoded in a unkown way.  The archive 
    is probably corrupt.

Warning!  File YYY fails CRC check
  - The Cyclic Redundancy  Check  calculation  did  not  match  the 
    stored value.  The file is probably corrupt.

XXX is not an archive
  - The file specified is either not an archive, or is corrupt.

Archive length error
  - A end of file token  was  not  found  for  a  file  within  the 
    archive.  The archive is corrupt.


PKXARC errors
-------------

PKXARC: can't find XXX
  - The given archive filename could not be found.

PKXARC: cannot read archive: XXX
  - The archive could not be opened.

PKXARC: Cannot create: YYY
  - The  output file could not be created.  The output directory is 
    invalid or full.

PKXARC: File has invalid decode tree
  - The Huffman decode tree for the file is invalid.   The  archive 
    is corrupt.

PKXARC: Disk full
  - The disk is full.

PKXARC: Internal table overflow
  - An internal decode table overflowed.  The archive is corrupt.

PKXARC   FAST!   Archive Extract Utility   Version 3.3  10-23-86   Page 5



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

PKXARC   FAST!   Archive Extract Utility   Version 3.3  10-23-86   Page 6



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
uncrunching  The file was crunched with old sytle Ziv-Lempel-Welch compression.
unCrunching  The file was Crunched with Dynamic Ziv-Lempel-Welch compression.
unSqueezing  The file was Squeezed with Huffman encoding.


Changes in PKXARC version 3.0
-----------------------------

The following functions have been added to PKXARC version 3.0:

Extraction of files to the console or printer.
The ability to display a verbose archive listing.

PKXARC   FAST!   Archive Extract Utility   Version 3.3  10-23-86   Page 7



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


Using PKXARC in a batch file
---------------------------

If you are using PKXARC from a batch file, you can test  if  PKXARC 
aborted  with  an  error using the DOS errorlevel variable.  PKXARC 
returns a non-zero errorlevel if an  error  occurred,  and  a  zero 
errorlevel for normal termination.

PKXARC   FAST!   Archive Extract Utility   Version 3.3  10-23-86   Page 8



General Information
-------------------

PKXARC will run on any IBM  PC/XT/AT/RT/jr/Portable/Convertible  or 
DOS  compatible  whatever  running  PC/MS-DOS  2.0 or higher with a 
minimum of 128K free RAM.

IBM is a registered trademark of the International Business Machine
Corporation.
MS-DOS is a registered trademark of Microsoft Inc.

If you have any questions or comments about PKXARC send them to:

Phil Katz
Exec-PC multi-user IBM BBS (16 lines, 24 hours a day)
Milwaukee, WI
(modem) (414) 964-5160

Special thanks to Bob Mahoney, SYSOP of Exec-PC and
Alan Losoff, author of ALUSQ.


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

If   you   find  PKXARC  fast,  easy,  and  convenient  to  use,  a 
contribution of $20 would be appreciated.  With  each  contribution 
of  $45  or  more you will be registered to receive a diskette with 
the next versions of PKARC and PKXARC when available.  Please state 
the  current  versions  of  PKARC  and PKXARC which you have.  Send 
contributions to:

PKWARE, Inc.
7032 Ardara Avenue
Glendale, WI 53209


```
{% endraw %}

## README.DOC

{% raw %}
```
B A N N E R

The BANNER program makes long, large-letter banners on your printer
from console input. All sources are presented in case you want to
customize it.

Installation:
	Before use, rename either BANV1.EXE or BANV2.EXE to BANNER.EXE
so the command "BANNER" will work. Use BANV1 if you have PCDOS 1.1 or
thereabouts, BANV2 for DOS V2 or later.
	BANNER produces output that is designed for 132 character wide
printers. Typically its output is a line of up to 132 ASCII characters,
a single carriage return (no linefeed), another line of up to 132 ASCII
characters, and then a carriage return/linefeed combo, for each "raster"
it uses. This allows a denser banner due to overprinting two characters.
However, due to the great variety of printers out there, BANNER makes NO
attempt to set the printer up in any way. It also doesn't mess up any
presets. Thus, for successful use on many printers you'll want to make
sure that single CR doesn't advance the paper (I believe Epson printers
work as they need to for this), that your printer is set to condensed
letters (so there'll be 132 across), and you'll probably want to set your
printer for 8 or 10 lines per inch. This means, get out the printer manual
and find out what escape and/or control sequences you need to send to
the printer and arrange to do so. (You can either create a short file
and print it, or write a short BASIC program to emit the necessary
controls.)

Use:

To use, type BANNER to activate the program.

It will first ask you for its input and output file specifications.
This will allow the program to read a disk file for input and write
one for output if desired.

Normally, for input file specifier just type
CON:

(including the colon) to signal you'll put your text in on the
console.
For output, normally just enter
LPT1:

(including the colon) to signal you want the output to go onto
the line printer. If you want it to go to LPT2:, type that, and
if you want it on disk, just give a filename. Files get large,
so be sure you have LOTS of room on disk.
	Banner just does a Fortran OPEN on the file so specified.
Some terminate-and-stay-resident utilities mess up certain Fortran
OPENs, so if you have problems, try booting a clean DOS (rename
CONFIG.SYS and AUTOEXEC.BAT temporarily) and try again. Banner has
run on a number of clones and will usually be OK then. If it isn't,
sorry, something about your machine is messing Fortran up...


The program then enters a loop asking for input lines. Its
prompt looks like this:

ENTER INPUT LINE:

You type a character which may be space, +, or -, followed by
up to 78 characters of text to go onto a banner.

If your initial character is space or + sign, the letters will be
dark on white paper. If your initial character is - sign, the
letters are white on dark paper. The program uses normal text
characters to darken regions of the paper. This is seldom a
problem.


Press the Enter key to enter the text. The program will then
begin printing the banner. When it finishes it will prompt
again for an input line. You may enter several in a row if
desired.
	If you enter several, they just come out serially. The
font is a variable pitch Roman font. Most of the printable
ASCII character set is included plus upper and lowercase
alphas and numbers. Some characters are however not there
so a bit of testing may be needed if you want to use lots of
special characters. No support for extended characters is here.

	Character sizes can be configured only by setting spacings
in your printer, which many printers CAN do. If the single
return is a problem, you can output to a disk file and edit
the output before printing.

When you are done, type a control-Z (hold down the Ctrl key and
type Z) followed by Enter. This terminates the program. It will
be acted on when the control-Z is entered at an input prompt.


PLEA:

If you find this program useful, pass it on to your friends,
neighbors, etc. etc. and let them enjoy it.

Thanks.

By Glenn Everhart


```
{% endraw %}

## TECO.DOC

{% raw %}
```
			Introduction to TECO Context Editor
			-----------------------------------

	The TECO (TExt COntext) editor is a non-visual, character oriented
editor which was developed at the Massachussets Institute of Technology in
the late 1960s as part of a project in artificial intelligence.  When fully
implemented, TECO supports conditionals, branching, and forms its own unique
programming language, in fact EMACs was originally written in TECO !!!  My
version is considerably simplified from full-blown TECO, but it still is
very powerful, allowing the user to edit BINARY (ie .EXE) as well as simple
ASCII files, changing the value of arbitrary bytes anywhere in the file.

	To start editing in my version of TECO, you must give a file
specification on the command line.  Do this by typing either

	TECO myfile.ext

if you want to edit "myfile.ext", or you can type

	TECO outfile.ext=infile.ext

where "outfile.ext" is the output file, and "infile.ext" is the source
file.  To create a file from scratch, enter the command

	TECO newfile.ext=NUL

where "newfile.ext" is the new file, and "NUL" is the null device.
	Congratulations!!  You are now in TECO mode, and can start using
the TECO command set.  TECO commands are character sequences of the form

	number letter string ESC

where "number" is signed number which defaults to 1 if not specified,
"letter" is a valid TECO command, "string" is the object for the command,
and "ESC" is the escape key (which echoes as $ on the console display).
Commands sequences are not executed immediately, but are stacked in a buffer
for later execution.  All the TECO commands stored in the buffer are then
executed at once when the user types two ESC characters.  The TECO commands
implemented are:

	num A			- Appends "number" pages of text to work area
				  from the input file, where a "page" is
				  defined as an arbitrary number of bytes,
				  ending in "Form Feed"

	num C			- Advance "number" characters in the page.

	num D			- Delete  "number" characters.

	EF			- Exit TECO without writing this page to
				  the output file

	EX			- Exit TECO, writing this page out and
				  then copying the remainder of the input
				  file to the output file.  Normal TECO exit

	num FS old ESC new ESC	- Replace string "old" with string "new"
				  a total of "num" times.  Replace fails if
				  string "old" not on current page.

	num FN old ESC new ESC	- Replace string "old" with string "new"
				  a total of "num" times, Paging in text
				  as necessary...

	HK			- Delete everything in the current page.

	HT			- Type everything in the current page.

	num I			- Insert a single ascii character whose value
				  is "number" into the page.

	I text ESC		- Insert "text" from buffer.

	num J			- Jump to position "number" in page.  If
				  "num" is omitted, go to start of page

	num K			- Kill "number" lines from the page.

	num L			- Advance "num" lines in page.

	num N string ESC	- Search for "string" a total of "num" times
				  Go to end of file if needed to find "string"

	num P			- Write page to the output file, and read in
				  a new page from the input file.  Do this
				  a total of "num" times.
	num R			- Go backward "num" characters in the page

	num S string ESC	- Search for "string" a total of "num" times,
				  with error if not found on current page.

	num T			- Type out next "num" lines in page

	num V			- Type out "num" lines preceding and "num"
				  lines following current location in page.

	num < string ESC > ESC	- Iterate the "string" TECO command(s) within
				  angle brackets a total of "num" times.
				  If "num" not specified, iterate forever.
				  This is a *VERY POWERFUL* command.

	^C			- Exit TECO and delete output file.  The
				  input file will be left untouched...

There are also some characters which assume numeric values.  These are:

	B			- This is a synonym for 0 (zero)

	Z			- This is the number of characters in
				  the current page

	.			- This is where you are in the page.

(this version of TECO does not support arithmetic with numeric values.)

To cancel TECO typeout, hit CTRL-O, and all output will be suppressed
until the next TECO command string is requested from the console.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0386

     Volume in drive A has no label
     Directory of A:\

    ACHN     FOR       931   5-02-85   1:34p
    ACHN     OBJ      1543   5-02-85   1:51p
    BANLNK   INP       119   5-02-85   2:26p
    BANNER   FOR      4590   5-02-85   3:31p
    BANNER   OBJ      4345   5-02-85   2:30p
    BANV1    EXE     57328   5-02-85   3:42p
    BANV2    EXE     56848   5-02-85   2:30p
    BAXX     FOR       597   5-02-85   1:40p
    BAXX     OBJ       999   5-02-85   1:52p
    BLKDAT   FOR     28951   5-02-85   1:42p
    BLKDAT   OBJ     53007   5-02-85   1:44p
    FILES    SUM       995   1-08-87   9:28a
    FILES386 TXT      2272   1-28-87   8:07p
    FRNT     FOR       456   5-02-85   1:41p
    FRNT     OBJ       800   5-02-85   1:53p
    LEGL     FOR       977   5-02-85   1:36p
    LEGL     OBJ      1964   5-02-85   1:52p
    LEGU     FOR       976   5-02-85   1:41p
    LEGU     OBJ      1877   5-02-85   1:52p
    MINMAX   FOR       492   5-02-85   1:31p
    MINMAX   OBJ       759   5-02-85   1:50p
    OHAF     FOR      1175   5-02-85   1:35p
    OHAF     OBJ      1792   5-02-85   1:51p
    OHAV     FOR       986   5-02-85   1:37p
    OHAV     OBJ      1618   5-02-85   1:52p
    PKARC    COM     16440  10-23-86
    PKARC    DOC     18176  10-23-86
    PKXARC   COM     10318  10-23-86
    PKXARC   DOC     12722  10-23-86
    PRNT     FOR      2631   5-02-85   1:33p
    PRNT     OBJ      5657   5-02-85   1:51p
    RASSIG   FOR      1427   5-02-85   2:18p
    RASSIG   OBJ       792   5-02-85   2:19p
    README   DOC      4088   1-08-87   9:23a
    TECO     ARC     28072   1-08-87   9:25a
    WASSIG   FOR       451   5-02-85   2:19p
    WASSIG   OBJ       569   5-02-85   2:19p
           37 file(s)     327740 bytes
                           19456 bytes free
