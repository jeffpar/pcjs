---
layout: page
title: "PC-SIG Diskette Library (Disk #688)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0688/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0688"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "IN-CONTROL 2 OF 2 (ALSO 687)"

    IN-CONTROL is a well-rounded business prospect/contacts and activity-
    tracking system. It provides a Rolodex, activities list, management
    reports, expense reports and an appointments tickler.
    
    Everything is on-line with fast search capabilities.  The Rolodex
    features names, addresses and notations retrieval and a graphic
    ``layer-in'' ability which lets you temporarily merge mailing lists. In
    addition, it is network-ready.  The system also includes:
    appointments tracking, expenses, graphics, free-form data search,
    labels management and reports.  A built-in telephone dialing system
    uses your modem and frees your phone for incoming calls.  A built-in
    proposal and invoice generator is provided.  The program standardizes
    your prospecting and follow-up information and converts forgotten
    verbal commitments into a focused daily list of appointments and
    callbacks that nets you extra business.
    
    IN-CONTROL requires registration after you have placed 50 records in
    the Prospect file.  If not registered, this program will lock you out
    from access to the program, though the data files are always intact.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BRITISH.DOC

{% raw %}
```

                                           Paul Sax
                                           ACS
                                           P.O. Box 850427
                                           Richardson, Texas  75085
                                           (214) 690-6017  [voice]
                                           (214) 690-4782  [fax]

                      Note to my British users:

If  you are attempting to enter a 'pound' sign into a character  field 
in my program, use this methodology on your PC keyboard:

                       Hold down the 'ALT' key
                  Enter '156' on the numeric keypad

Note  that you will be holding down the 'ALT' key WHILE you enter  the 
digits '156'.   Upon entering these digits, a 'pound' sign will appear 
in your character field.

To  print  out the 'pound' character,  however,  your printer must  be 
capable of printing out the 'extended character set',  or those  ASCII 
values above '123'.  

This methodology will create ASCII character '156'.





                                           Sincerely,




                                           Paul Sax 

```
{% endraw %}

## FILE0688.TXT

{% raw %}
```
Disk No:  688                                                           
Disk Title: IN-CONTROL 2 of 2 (also 687)  (Disk 2 of 2)                 
PC-SIG Version: S3.3                                                    
                                                                        
Program Title: IN-CONTROL                                               
Author Version: 3.0                                                     
Author Registration: $99.00 (required after 50 prospects entered).      
Special Requirements: 512K RAM and two floppy drives.                   
                                                                        
A well-rounded business prospect/contacts and activity-tracking system. 
IN-CONTROL provides a Rolodex, activities list, management reports,     
expense reports and an appointments tickler.                            
                                                                        
Everything is on-line with fast search capabilities.  The Rolodex       
features names, addresses and notations retrieval and a graphic         
``layer-in'' ability which lets you temporarily merge mailing lists.    
In addition, it is network-ready.  The system also includes:            
appointments tracking, expenses, graphics, free-form data search,       
labels management and reports.  A built-in telephone dialing system     
uses your modem and frees your phone for incoming calls.  A built-in    
proposal and invoice generator is provided.  The program standardizes   
your prospecting and follow-up information and converts forgotten       
verbal commitments into a focused daily appointments and callback list  
that nets you extra business.                                           
                                                                        
IN-CONTROL requires registration after you have placed 50 records in    
the Prospect file.  If not registered, this program will lock you out   
from access to the program, though the data files are always intact.    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GERMAN.DOC

{% raw %}
```


                                           Paul Sax
                                           ACS
                                           P.O. Box 850427
                                           Richardson, Texas  75085
                                           (214) 690-6017  [voice]
                                           (214) 690-4782  [fax]

                       Note to my German users:

If  you are attempting to enter an'umlaut' sign into a character field 
in my program, use this methodology on your PC keyboard:

                    To create an upper case 'oe',
                       hold down the 'ALT' key
                  Enter '153' on the numeric keypad

                     To create a lower case 'oe',
                       hold down the 'ALT' key
                  Enter '148' on the numeric keypad


Note  that you will be holding down the 'ALT' key WHILE you enter  the 
digits '153'.  Upon entering these digits, a 'umlaut' sign will appear 
in your character field.

To  print out the 'umlaut' character,  however,  your printer must  be 
capable  of printing out the 'extended character set',  or those ASCII 
values above '123'.  

This methodology will create ASCII character '153'.


                    To create an upper case 'ue',
                       hold down the 'ALT' key
                  Enter '154' on the numeric keypad

                     To create a lower case 'ue',
                       hold down the 'ALT' key
                  Enter '129' on the numeric keypad



                    To create an upper case 'ae',
                       hold down the 'ALT' key
                  Enter '142' on the numeric keypad

                     To create a lower case 'ae',
                       hold down the 'ALT' key
                  Enter '132' on the numeric keypad


```
{% endraw %}

## ARCA.DOC

{% raw %}
```

ARCA Command                                            Version 1.29
------------                                            Dec 9,  1987

Purpose:  To create or add files to an ARC archive file.

Format:   ARCA  [drive:][path]arcname.ext  [filespecs...]  [/d]  [/m]

Remarks:  The drive and path names are optional. If omitted, the
        current drive and path name are used.

        The 'arcname' file name must be supplied.  The extension
        defaults to ARC.  All files matching the supplied filespecs are
        processed.  The input 'filespecs' may contain the * and ?
        wildcard characters.

        If an existing archive file is used, the specified input
        files are added to the end of it. There is no checking
        for duplicate filenames and existing archive member files
        are not replaced.  ARCA is best used when creating a brand-new
        archive.

        The /D option specifies that all input files be deleted.  The
        files are deleted after successful processing of all of the
        input files.

        Invoking ARCA with no arguments yields a terse summary of
        the needed parameters, along with a version header.

        ARCA uses only 2 compression techniques: a modified LZW
        compression algorithm and repeated-string compression
        ("packing").  The LZW algorithm is the same as the one used by
        ARC, but modifications have been made to improve its compression
        performance, especially when dealing with files containing
        more "random" data such as executable files, though compression
        performance for files containing less random data such as
        textual files suffers a bit, but not much.  ARCA generally
        performs better than ARC does -- it's significantly faster than
        ARC while yielding smaller archives (hard to imagine getting
        the best of two worlds!)

        Experiments have shown that the modified LZW compression algorithm
        generally compresses binary files better than the Huffman algorithm
        ("squeezing") can, Huffman compression is not used at all. If the
        LZW compression fails to yield a smaller file, then packing is used
        instead.  There are cases where a packed file is larger than the
        original file, but these cases don't happen often enough for ARCA to
        handle, for example, by copying the unchanged file to the archive.

        Though ARCA uses an improved LZW algorithm, its output is TOTALLY
        compatible with the one used by System Enhancements Associates'
        (21 New Street, Wayne NJ 07470) ARC program, which means that ARCs
        created by ARCA can be processed by ARC, or by ARCE and ARCV
        (companion extraction & table-of-contents lister programs also
        written by Vernon Buerg and Wayne Chin).


        ARCA 1.29, Copyright (c) 1986,1987, Wayne Chin and Vernon D. Buerg.
        ALL RIGHTS RESERVED.


ARCA Command                                            Version 1.29
------------                                            Dec 9,  1987


                        Examples
                        --------

        o  Create an archive file called TEST.ARC, and place all
           files from the current directory into it:

              ARCA TEST *.*

        o  Create an archive called SOURCE.ARC in the subdirectory
           \SAVE on drive B, and place all files with an extension
           of ASM into to:

              ARCA B:\SAVE\SOURCE *.ASM


        o  Add files to the archive on drive A called PROGA.ARC all
           files in subdirectory \TEST on drive C, all files with a
           filename beginning with NE, and all file from the subdirectory
           \OLD on drive B:

              ARCA A:PROGA.ARC C:\TEST\*.* NE*.* B:\OLD\*.*



ARCA Command                                            Version 1.29
------------                                            Dec 9,  1987

                        Error Messages
                        --------------

    ARCA: filename, analyzing, compressed.
        This message is issued for each 'filename' added to
        the archive file using LZW data compression. The program
        continues.

    ARCA: filename, analyzing, packed.
        This message is issued for each 'filename' added to
        the archive file using repeated-string compression.  The
        program continues.

    ARCA: No matching files!
        No files were found that matched one of the 'filespecs'
        in the command line. The program terminates.

    ARCA: You must use DOS version 2.0 or higher.
        DOS version 2.0 or higher is required. The program terminates.

    ARCA: Insufficient memory.
        A minimum of 34k is required. The program terminates.

    ARCA: Shrink failed.
        This error should not occur. If it does, there is a problem
        with DOS. The program terminates.


    ARCA: Can't create archive file.
        There is no room in the target directory to create the
        specified archive file, or the target disk has become full.

    ARCA: Write error -- no more disk space? Don't trust this archive!
        ARCA has encountered a problem writing to the target disk.  Check
        if there's sufficient room on the target disk to contain the full
        archive or delete unneeded files to free up some space.  ARCA
        terminates leaving behind an archive that may not be usable --
        check it carefully if you still want to use it (check the archive
        by using ARCV or ARCE).



ARCA Command                                            Version 1.29
------------                                            Dec 9,  1987

                        Version history
                        ---------------

        1.07 - 4/21/86, initial release
        1.08 to 1.13,   internal versions
        1.14 - 08/07/86
                add logic to sort input files using binary tree;
                modify filtering of ARC name when adding to ARC;
                modify processing of "/D" switch;
                do packing of file if LZW compression does no good;
                add optional code for 286 processor
        1.15, August 08, 1986
                more 286-specific instructions
        1.16, August 09, 1986
                more 286-specific instructions in compression code
        1.17, August 10, 1986
                speed improvements in compression code
        1.17a, August 10, 1986
                bug fix for the case of "arca x d:*.*", where d is not
                the current drive
        1.18, August 11, 1986
                further speed tweaking in compression code; save a few
                more nanoseconds
        1.19 to 1.21
                internal versions not released for general consumption
        1.22, Sept 13, 1986
                improve error handling
                improve speed performance roughly 9%
                very modest compression perfomance improvement
                modify this document accordingly

        1.23, Feb 24, 1987
                add start-up banner
                omit "deleted" messages
                add 'copying' method

        1.27, May 30, 1987
                correct problem reverting to pack method (file size wrong)
                revert to copying if packing results in a larger file

        1.28, Oct 4, 1987
                correction for zero-byte files

|       1.29, Dec 9, 1987
|               add /M option to add modified files only
|               correction for zero-byte files, again



ARCA Command                                            Version 1.29
------------                                            Dec 9,  1987


        As mentioned, ARCA is intended to be used to create a NEW archive,
        not for appending or updating an existing archive, though ARCA does
        not prevent you from doing so -- ARCA simply appends new files to the
        named archive without deleting existing entries.  To properly append
        or to update, you should use ARC instead.

        There may be two COM files. The ARCA286.COM file is for 80286 based
        systems only.



                        License
                        -------

        ARCA 1.29, Copyright (c) Wayne Chin and Vernon Buerg 1986,1987.
        ALL RIGHTS RESERVED.

        ARCA is free, but it is a copyrighted work and may be distributed only
        pursuant to this license.

        Permission is hereby granted to reproduce and disseminate ARCA so long
        as:

           (1)  No remuneration of any kind is received in exchange; and

           (2)  Distribution is without ANY modification to the contents of
                ARCA.COM and all accompanying documentation and/or support
                files, including the copyright notice and this license.

        No copy of ARCA may be distributed without including a copy of this
        license.

        Any other use is prohibited without express, written permission in
        advance.

                Vernon D. Buerg
                456 Lakeshire Drive
                Daly City, CA  94015
                CompuServe: 70007,1212
                Data/BBS:   415-994-2944




```
{% endraw %}

## ARCE.DOC

{% raw %}
```


  ARCE Command                                          Version 4.0c
  ------------                                          Mar  3, 1989


  Purpose:  Use ARCE to extract files from an ARC archive file.

  Format:

        ARCE  [d:][path]filename.ext  [filespecs...] [d:outpath]
                                      [/R]
                                      [/Q]
                                      [/P]
                                      [/T]
|                                     [/5]
                                      [/Gpassword]

  Remarks:

        The drive and path names are optional.  If omitted, the  current
        drive and path name is used.

        The filename must be  supplied.  The extension defaults  to ARC.
        All files matching the supplied filename are processed.  The ARC
        filename may contain the * and ? wildcard characters.

        If  no  filespecs  are   supplied,  all  files  are   extracted.
        Otherwise, only those ARC members  which match one of the  up to
        16 filespecs are extracted.

        The extracted files  may be placed  on another drive,  and/or in
        another subdirectory by following the optional filespecs with  a
        drive designator and/or path name.

        If  the  file  being  extracted  already  exists,  you are asked
        whether or not you want to over-write it.  You may use the |  /R
        option to bypass this prompt.  Use a Y followed by the |  return
        key to over-write the file.

        Use the /Q option to suppress alarm sounds, beeps, and bells.

        Use  the  /P  option  to  write  the  extracted files to the DOS
        standard output  file.  With  /P, you  may pipe  or redirect the
        output.  An initial line feed  is added to the beginning  of the
        output file.

        Use the /T option to test the archive's integrity. No files will
        be extracted.

        If the file was encrypted, use the /G option to supply the  same
        password as was used to create the file, e.g. /GSECRET.

|       Use the /5 option to stop ARCE from creating the subdirectories
|       for files created with the ARC /Z subdirectory option.


        ARCE 4.0c, Copyright (c) 1986-89, Wayne Chin and Vernon D. Buerg.
        ALL RIGHTS RESERVED.



  ARCE Command                                          Version 4.0c
  ------------                                          Mar  3, 1989



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

















  ARCE Command                                          Version 4.0c
  ------------                                          Mar  3, 1989

                        Error Messages
                        --------------

      'filename - premature EOF reading '

        Data  is  missing  from  the  archive  file.   The  program   is
        terminated.


      'filename - unable to set file datestamp'

        The file datestamp is set to the current date and time, and  the
        next archive member is processed.


      'filename - WARNING: file CRC does not match!'

        The extracted member  is left on  the output disk,  and the next
        archive member is processed.   The file is probably  invalid but
        is left on the disk for your examination.


      'Invalid filespec(s)'

        The filespec syntax is incorrect.  The filename part may be from
        1  to  eight  characters,  and  may  include the ? or * wildcard
        characters.  The extension may be none to three characters,  and
        may  include  wildcards.   There  is  a  maximum of 16 filespecs
        allowed.  The program terminates.


      'filename - file already exists. Overwrite it? (y/N) '

        The member being extracted already  exists.  If you are using  a
        data  path  utility,  the  file  may  not  actually  be  in  the
        subdirectory be used for output.   Respond with the letter Y  to
        over-write the existing  file, or respond  with the letter  N to
        skip this member and continue to the next.


      'Abort: Stack overflow'

        The member  being extracted  has invalid  data.  The  program is
        terminated.


      'filename - invalid decode tree count'

        The member  being extracted  has invalid  data.  The  program is
        terminated.







  ARCE Command                                          Version 4.0c
  ------------                                          Mar  3, 1989

                        Error Messages (cont'd)
                        --------------


      'filename - new archive format 7 not yet supported'

        Format 7 is a special file compression method used internally by
        SEA,  the  authors  of  ARC.  Processing continues with the next
        archive member.


      'Unable to open archive > arcname'

        The  specified  ARC   archive  file  was   not  found,  or   was
        inaccessible.  The program terminates.


      'CREATE failed > filename'

        There was insufficient directory  space, or a failure  accessing
        the output disk.  The program terminates.


        'Invalid archive format!'

        The archive file data is invalid.  The program terminates.


      'Incorrect DOS version'

        Version  2.0  or  later  of  PC  DOS  must be used.  The program
        terminates


      'Not enough memory.'

        A minimum  of 112k  bytes of  memory is  required.  The  program
        terminates.


      'I/O error reading from arcname'

        An incorrectable error occurred attempting to read data from the
        archive file.  The program terminates.


      'I/O error writing or disk full > filename'

        There was not  enough disk space  to write the  complete archive
        member.   The  partially  extracted  file  is  scratched and the
        program terminates.






  ARCE Command                                          Version 4.0c
  ------------                                          Mar  3, 1989

                        Error Messages (cont'd)
                        --------------


      'No matching file(s) found'

        No archive files were  found that matched the  supplied filename
        specifications.  The program terminates.



      'filename - ERROR: invalid file codes'

        An error was detected while attempting to decode a crunched
        file. Either some data bytes are invalid, there are extra
        bytes, or there are bytes missing. The archive is invalid.









































  ARCE Command                                          Version 4.0c
  ------------                                          Mar  3, 1989

                        Version history
                        ---------------

        1.1 - 1/13/86   -initial release

        2.00, 04/08/86  - fine tuning of I/O buffering

        2.01-2.05, 4-20 thru 9/9/86
                        - improve unsq, correct disk full message
        2.06, 9/17/86   - release from testing
        2.07, from 9/19 - not released
        2.08, 12/31/86 - added /P, /Q; fixed /R with redirection
        2.09, 1/5/87   - correct closing of output if /P used; require return
                         (enter key) for over-write prompt
                       - add more validity checking of member headers
        2.10, 1/6/87   - correct use out output file specification
        2.11, 1/24/87  - some cosmetics, wrong banner version and date

        3.0a, 3/16/87  - added /G for password encryption
                       - added /T for integrity checking only
                       - correct loop in command line parsing
                       - internal optimization
                       - make intergity checking more robust

        3.0c, 3/23/87  - improve extracting with file selection
                       - minor fixes and cosmetic changes

        3.0d, 3/29/87  - correction to unsqueeze

        3.0e, 4/02/87  - correct loop with invalid archives
                       - insure errorlevel non-zero if any errors
                       - correct loop in command line processing

        3.0f, 5/31/87  - correct false 'disk full' error message when
                         using /p (piping) option
                       - correct failure to extract all files from a
                         garbled (/g) archive

        3.1a, 9/10/87  - cosmetic changes

        3.1b, 9/16/87  - unsquashing version released

        3.1c, 2/06/88  - lessen memory requirement to 50k

|       4.0a, 2/06/89  - add subdirectory support via /Z option

|       4.0b, 2/28/89  - change meaning of /Z to /5;
|                        correct name used for /Z output directories

|       4.0c, 3/03/89  - correct mkdir error without /5







   ARCE Command                                          Version 4.0c
   ------------                                          Mar  3, 1989



                        Notices
                        -------

        ARCE (c) Copyright 1986-1989 by Wayne Chin and Vernon D. Buerg
        ALL RIGHTS RESERVED.

        ARCE is free, but it is a copyrighted work and may be distributed only
        pursuant to this license.

        Permission is hereby granted to reproduce and disseminate ARCE so long
        as:

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
                            707-778-8841



        For use by corporations, institutions, or for profit, contact
        System Enhancement Associates for licensing information.

                   System Enhancement Associates
                   21 New Street
                   Wayne, NJ 07470













```
{% endraw %}

## SYSOP.TXT

{% raw %}
```
         Private Message to Bulletin Board System Operator:
-
Here  are the four ZIP files that make up version 3.0 of my  progam, 
IN-CONTROL  12 Pack [TM]  [formerly PROSPECT!].   Would you  display 
them on your board?
-
This  classic  shareware  program and its  author,  Paul  Sax,  were 
featured in PC World,  July,  1987, Page 308, in an "author profile" 
series ad.   In PC-SIG magazine, May, 1987, pages 26-27, an ecstatic 
reviewer wrote:  "Its search and sort capabilities are as  marvelous 
as  its  reporting  styles  are numerous.   It  can  create  monthly 
calendars instantly beginning with any date you specify.   It tracks 
project/client  related expenses effectively.   And it  can  portray 
your  daily  appointments for any two week period as a handsome  bar 
chart.    This  is  excellent  for  identifying  depletion  of  your 
available  time.    Customization  of  this  package  is   virtually 
limitless,  extending  even to the format of printed  reports.   IN-
CONTROL is a well-conceived program for those who would rather spend 
their time thinking and acting than laboriously tracking the mundane 
aspects of a busy life."
-
One possible way of displaying the program is:
       SALE-A30.ZIP   Prospect/Client/Customer Tracker - 1 of 4
       SALE-B30.ZIP   Prospect/Client/Customer Tracker - 2 of 4
       SALE-C30.ZIP   Prospect/Client/Customer Tracker - 3 of 4
      SALE-D30.ZIP   Prospect/Personal Info. Mgr.   - 4 of 4 [doc]
- 
If you have a single file,  'SALESDOC.ARC', please replace that file 
with these four ZIP files.  
-
Thank you,    Paul Sax  [voice:  214-690-6017; FAX 214-690-4782 ]
              P.O. Box 850427, Richardson, TX, U.S.A  75085
```
{% endraw %}

## USER.TXT

{% raw %}
```
              Public Message to Bulletin Board Users:
   PRODUCT OVERVIEW:  IN-CONTROL 12 Pack [TM], formerly PROSPECT!
        You can create any one of twelve programs from a menu! 
   Select the program and terminology specific to your industry.
 The Ultimate Prospect/Client/Customer and Activity Tracking System!
        The best Personal Information Manager on the market.
         The Classic program that saves time and makes money!
              Featured in PC World, July, 1987, page 308
                   Reviewed in 'PC-SIG', May, 1987
  With a built-in time/billing/statements module that makes it ideal
      for Attorneys, CPAs, Banks, Sales and Collections people.
Everything is on-line!, fast search capability, Rolodex[TM] features
Appointments: appointment schedules and graphics, "Layer-in" ability
             All reports fit into a standard briefcase!
   Revenues, Expenses, Statements, Graphics, Free-form data search,
                        10 option Labels menu.  
 with a built in intelligent, Speakerphone/Telephone Dialing System.
  [distinguishes between local, local toll, and long distance calls]
         Contains a built-in proposal and invoice generator,
          and can clock and cost each activity in real time.
                               Files: 
       SALE-A30.ZIP, SALE-B30.ZIP, SALE-C30.ZIP, SALE-D30.ZIP 
-
This   program  standardizes  your   prospect/client/customer   data  
and   follow    up  information  and  converts    forgotten   verbal 
commitments into a  focused,   daily  appointments and callback list 
that nets you extra business!
-
       1,000,000,000 records per file, 
                99,999,999 categories or "layers" of data 
                        1,000,000,000 phone number dialer, 
                              1,000,000,000 mailing label subsystem
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0688

     Volume in drive A has no label
     Directory of A:\

    SALE-C30 ZIP    122046   2-12-90   6:38p
    SALE-D30 ZIP    154381   2-12-90   6:39p
    PKUNZIP  EXE     21440   7-21-89   1:01a
    GO2      BAT      2560   1-17-90  11:34p
    INSTALL2 BAT      3072   2-01-90   9:46a
    ECOH     COM        96   5-23-88  12:30p
    INPUT    COM        49   5-19-88   2:05a
    YESNO    COM        54   5-21-88   6:50p
    USER     TXT      1920   5-31-89   1:40p
    SYSOP    TXT      1792   5-31-89   1:47p
    UPDATE            4992   1-15-90   2:52p
    BRITISH  DOC      1280  11-26-89  10:01a
    GERMAN   DOC      1920  11-26-89  10:09a
    BACKUP            1920   1-08-90   1:47p
    SUPPORT           2304   1-15-90   4:05p
    FILE0688 TXT      2517   7-13-90  11:16p
           16 file(s)     322343 bytes
                           32768 bytes free
