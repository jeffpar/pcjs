---
layout: page
title: "PC-SIG Diskette Library (Disk #1271)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1271/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1271"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SERVICE PLUS 2 OF 2 (ALSO 1270)"

    Maintenance and repair companies will find SERVICE PLUS a valuable
    system to organize, control and track service calls, and generate
    expense and billing reports. It converts often forgotten verbal
    commitments into focused, daily appointment and callback lists that
    result in extra business.
    
    SERVICE PLUS generates appointment schedules with a tickler file, and
    billing and expense reports that can clock and cost each activity. You
    can create an "industry-specific" help screen with up to 15,000
    characters of text about your industry, accessible anywhere in the
    program with one single keystroke. SERVICE PLUS standardizes your
    maintenance and service call information.
    
    The following business types have found SERVICE PLUS to be a valuable
    system: heating/air conditioning repair, electrical maintenance, auto
    repair, computer/copier rental and repair, any equipment tracking or
    maintenance, plant preventive maintenance, plumbing, bus or taxi
    maintenance, any repair business with a service bay, plus any department
    that provides product service and support.
    
    SERVICE PLUS comes with a tutorial and is extensively documented.
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
values above '126'.  

This methodology will create ASCII character '156'.





                                           Sincerely,




                                           Paul Sax 

```
{% endraw %}

## FILE1271.TXT

{% raw %}
```
Disk No: 1271
Program Title:  SERVICE PLUS (Disk 2 of 2)
PC-SIG version:  2

This is the second disk of a two-disk set.  The first disk is #1270 and
both disks are needed to run the program.  For a full description of the
program, please refer to disk #1270.

Usage:  Business/Database.

Special Requirements:  640K memory and two floppy disk drives (a hard
drive is strongly recommended).

How to Start:  Insert disk #1271 & type GO (press enter).

Suggested Registration:  $99.00

File Descriptions:

BRITISH  DOC  Text file.
GO2      BAT  Installation Batch file.
MAINTC30 ZIP  Archived file.
MAINTD30 ZIP  Archived file.
PKUNZIP  EXE  Unarchiving program.
UPDATE        Text file.
USER     TXT  Text file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

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

## SERVICE.DOC

{% raw %}
```

     =============================  Note:   ============================

   This remarkable shareware program, SERVICE PLUS [TM], is creating a lot 
   of  excitement  because it saves business people time and  money.   You 
   will love this program!   It combines unprecedented speed,  power,  and 
   ease of use into one highly focused system.

   Try  it  before you buy!   If you like the program,  you can  elect  to 
   become a registered user for $99.  If you don't like it, throw it away.    
   There is no 'demo' version of the program.   You'll have the full-blown 
   system, into which you can begin inputting your data.   After this note 
   is  the Table of Contents for the documentation for SERVICE PLUS  [TM], 
   then  the documentation itself.    As you browse  through  it,   you'll 
   observe the scope and power of this breakthrough program. 

   Feel  free to call me anytime.   I am the author and will be  happy  to 
   answer your questions.

                                  Paul Sax
                                     ACS
                               P.O. Box 850427
                            Richardson, TX  75085

                           Phone:  (214)  690-6017

                            FAX:  (214)  690-4782

   P.S.  If  you downloaded this program from a bulletin board,  make sure 
   that you have these four ZIP files on your hard drive in '/SERVICE':

                                MAINTA30.ZIP 
                                MAINTB30.ZIP
                                MAINTC30.ZIP
                                MAINTD30.ZIP
     ===================================================================
                A Statement on 'Demoware' from the Author:

   SERVICE  PLUS  [TM]  requires  registration after you  have  placed  50 
   records in the Master File.   If not registered, this program will lock 
   you  out from access to the program,  though the data files are  always 
   intact.

   The registration process consists of you receiving a validation  number 
   over the phone from me,  Paul Sax, at (214) 690-6017.  You already have 
   the complete program and documentation.

   2,500 hours of development have gone into this magnificent program; and 
   I've been at this phone for two years providing free support.

   My  typical customer spends 40 to 100 hours evaluating this program and 
   calling me  before becoming registered.    For those of you who  become 
   registered,  my program is a highly focused solution to a long-standing 
   administrative  or  informational  problem and the record  lock  up  is 
   irrelevant. 



                    Product overview:  SERVICE PLUS [TM]
     Superb Five Star rating, California Freeware Catalogue, 7th Edition
    =====The Ultimate Maintenance and Service Call Tracking System!=====
              
             
                Invaluable for these businesses or functions:
                      heating/air conditioning repair, 
   electrical maintenance, auto repair, computer/copier rental and repair,
                   any equipment tracking or maintenance, 
      plant preventive maintenance, plumbing,  bus or taxi maintenance,
                   any repair business with a service bay,
          any department that provides product service and support
         
                           Everything is on-line!
                           Fast search capability
                          Appointments: Ticker File
                     Appointment schedules and graphics
                          Billings/Expense Reports
                         "Layer-in" ability of data
                 ALL reports fit into a standard briefcase!
                         Inventory Tracking ability    
                        
          Be in control of your Maintenance. This program includes:
                      Appointments, Billings/Expenses, 
          Graphics image of your load of commitments/appointments,
                     Free-form data search, and Reports!  
                      
    with  the ability to customize all screens to reflect the terminology
                         specific to your industry.
                    
               Can clock and cost each activity in real time.
       
                 Create an 'Industry-specific' Help screen,
          with up to 15,000 characters of text about your industry
        accessible ANYWHERE in the program with one single keystroke.
             Create Service Tickets, Work Orders,  or Invoices.

   This program standardizes your Maintenance and Service Call information 
   and   converts  forgotten  verbal commitments  into  a  focused,  daily  
   appointments and callback list that nets you extra business!


               To become a registered user for this software, 
                     bring up the program, SERVICE.EXE, 
              go to the Main Program Menu, Other Options Menu.
                     Select option 6, Register Software
        The registration fee for this fantastic program is only $99!





                              SERVICE PLUS [TM]
                                Version 3.000


                              Table of contents

     
   Contents                                                         Pages


   User License Agreement.................................................

   Benefits of using SERVICE PLUS [TM]...................................I

   Questions answered by this program..................................III

   Installation.........................................................VI

   Preface to the Tutorials...............................................

   Tutorial Chapters contained in the self-running, interactive, tutorial.  
   [See Main Program Menu, Option T)  Interactive Tutorial: 12 chapters]

           1)  Examining 3 existing records in the Master File Menu
           2)  Look at existing activity records
           3)  Using Custom Options to modify the screen
           4)  Adding one record to the Master File
           5)  Adding 2 records to the activity file, with Billings data
           6)  Creating a Billings report
           7)  Generate Activity reports from Test Data
           8)  Add 2 records to the activity file, with appointments
           9)  Create 2 basic reports
           10) Using Fast Search Capabilities
           11) Layering concepts: up to 99,999,999 layers
           12) Reset default values and create multiple custom screens.

   Definition of Shareware.................................................

   Service Agreement............................................Appendix A
              [unlimited FREE support to Registered Users!]

   Installation Procedures Menu.................................Appendix B

   Time and Billing Stopwatch subsystem.........................Appendix C
          [time and bill every activity, with up to 9 labor rates]    
     
   New feature to create future activities automatically........Appendix D

   Base Station/Remote Site Consolidation feature...............Appendix E

   Importing external data into the program.....................Appendix F


                      SERVICE PLUS [TM], Version 3.000
                              Table of contents
                                 [continued]
   Contents                                                         Pages




   Grouping your data: .........................................Appendix G
     [Categories versus Defining your own fields:]
    
   WordStar/MailMerge[TM]/Basica/Output Sequential File.........Appendix H
    [also: WordPerfect[TM], and dBASE III [TM] ]

   Foreign Credit Card Registration.............................Appendix I
    [how to register this program if you are outside of U.S.A. or Canada]

   Overview of Memo Options:                                      
     Every Master file and activity record has its own word processor!
        Master File Memos......................................Appendix J-I
        Activity Memos........................................Appendix  J-II

   Printit v3.5, Print functions offered in memos and VIEW.TXT..Appendix K

   Create your own industry-specific Help/Data Screen...........Appendix L

   Automatic Data Back-up upon exiting the program..............Appendix M
     

   User Beware !................................................Appendix N
                  [Tips for database survival]

   Using the CALLBACK feature in the Activity file..............Appendix O

   Consolidating Multiple Categories in your reports............Appendix P  

   Assigning priorities to Master File Records..................Appendix Q

   Act Now! [TM]................................................Appendix R
     [create 'Activity Now' from the Master File automatically]

   Create your own fields.......................................Appendix S
    [track and retrieve data using your unique industry-specific codes!]

   Logic behind Comments/1st ID/2nd ID/3rd ID selection.........Appendix T
     [select out records in 3 different places in program]

    Strategy for Relating Customers to records in either
               the Master or Activity files:....................Appendix U 

    Strategy for creating Service Tickets, Work Orders,  or Invoices
        from memos in the Activity files:.......................Appendix V 

    Methodology for tracking units of inventory.................Appendix W 
    [using activity records to reflect unit changes]

                       ACS User License Agreement: ACS
                               P.O. Box 850427
                            Richardson, TX 75085
   You may:                                            March 1, 1987
   a.  Use the program on a single microcomputer on which the package  was 
   designed to operate.

   b.  Copy the documentation or object code in whole and distribute it to 
   any  other  user  who wishes to evaluate this software prior  to  their 
   becoming a Registered User. 

   c.  Become  a Registered User by paying for this with a credit card for 
   the current asking price, as shown on the program screen, to ACS.

   Warranty Disclaimer: Limitation of Liability
   Limit of Liability:  Neither ACS,  Paul Sax, nor Juskovitch Corporation 
   shall  have any liability or responsibility to you,  the customer,   or 
   any  other person or entity with respect to  any  liability,  loss,  or 
   damage caused or alleged to be caused directly or indirectly by the ACS 
   SERVICE PLUS [TM] Maintenance and Service Call Activity tracking system 
   provided by Juskovitch Corporation,  ACS,   or Paul Sax, including, but 
   not   limited  to  interruption  of  service,   loss  of  business   or 
   anticipatory profits or consequential damages resulting from the use or 
   operation of SERVICE PLUS [TM].

   Neither  Juskovitch Corporation,  ACS,  nor Paul Sax make any warranty, 
   express  or  implied,  with  respect  to  the  enclosed  documentation, 
   including,  without limitation,  any user's manual,  reference  manual, 
   software   program,   or   software  disks,   or   their   performance, 
   merchantability, or fitness for any particular purpose.

   Proprietary Notice:
   This document and the software described herein are the proprietary and 
   trade secret information of ACS, Paul Sax, and  Juskovitch Corporation.  
   They   have  been  provided  pursuant  to  this  agreement   containing 
   restrictions  on its use.   The program documentation,  program design, 
   and  design of program screens are also protected by federal  copyright 
   and  trademark law.   None of these items may be incorporated into  any 
   other program or programs,  in part or whole, without the express prior 
   written permission of ACS. 

   Trademark:
   SERVICE  PLUS  [TM]  and  ACT  NOW!  [TM] are  trademarks  of  ACS  and 
   Juskovitch Corporation.

   Service:
   All  service  and  user support are provided as  per  the  ACS  Service 
   Agreement.

   Acknowledgment by user and acceptance of liability:
   You acknowledge that you have read this agreement and understand it and 
   agree to be bound by its terms and conditions.   You further agree that 
   it  is the complete and exclusive statement of the agreement between us 
   which  supersedes  any proposal or prior  written  agreement,  oral  or 
   written,  and  any  other  communications between us  relating  to  the 
   subject matter of this agreement. 



                 Registered trademarks used in this program:

   Lotus 1-2-3 (C) is a registered trademark of Lotus Development Corp.
   WordPerfect [TM] is a registered trademark of WordPerfect Corporation
   Microsoft  [TM]  and Word 4.0 are registered  trademarks  of  Microsoft    
         Corporation
   dBASE III [TM] is a registered trademark of Ashton-Tate.




                      Trademarks used in this program:

   WordStar [TM] is a trademark of MicroPro International
   dBXL [TM] is a trademark of WordTech Systems, Inc.
   The Norton Utilities, UnErase, Format Recover, and Speed Disk are 
         trademarks of Peter Norton Computing Incorporated.
   SERVICE PLUS [TM] is a trademark of Paul Sax and ACS 
   Quick Memo [TM] is a trademark of Paul Sax and ACS
   Act Now! [TM] is a trademark of Paul Sax and ACS
   PRINTIT v3.5, Corp. 1987 by Jack A. Orman, Armada Sound Lab
   Automenu [TM] and Magee Enterprises logo are trademarks
         of Magee Enterprises
   ARCA 1.29, Copyright (c) 1986,1987, Wayne Chin and Vernon D. Buerg.
        ALL RIGHTS RESERVED.

   ARCE 4.0c, Copyright (c) 1986-89, Wayne Chin and Vernon D. Buerg.
        ALL RIGHTS RESERVED.

   PKUNZIP Copyright PKWARE, Inc.












                                  BENEFITS 


                                     of


                           Using SERVICE PLUS [TM]




























                                  BENEFITS:
   1) On line documentation:

                           EVERYTHING IS ON-LINE!

   This is a powerful system,  but all information you need is on-line. At 
   every main level or menu,  there is a HELP screen.

   2) Speed of data search:
                           FAST SEARCH CAPABILITY

   ***FAST  SEARCH OPTION--lets you retrieve maintenance activities,  
   service tickets, service calls, or status of parts or messages by any 
   word or words that  you entered into the comments section--from last 
   week or 5 years ago!  Other search options include second or third ID.

                              FAST! FAST! FAST!
   You   can   retrieve  summary  information on 10  consecutive   service 
   calls out  of 1,000,000,000 in 8 seconds!

   3) Rotary card features

   ***An   electronic   master rotary card card file  with information  on  
   parts or serialized objects:   3 serial numbers and comments--for up to 
   1,000,000,000 of them!  

   The  Master File contains  all of those names that you  would  normally 
   put  into   a file system.    From this list you can  generate  reports  
   sorted by ID.                                          

   4) Appointments:

   Ability to annotate appointments before and after the fact.  A reminder 
   of  todays' appointments and commitments,  with full notes made at  the 
   time  of information input. 

   Ability  to annotate billings and chargebacks and  keep a billings  log 
   for all activity and appointments. 

                        APPOINTMENT SCHEDULES AND GRAPHICS

   5  different  Appointment schedules,  as well as  an  on-line  graphics 
   display of appointments for any 14 day period (any monitor).


                                 benefits - page I



   5) Keep "layers" of data separate.

                             "LAYER-IN" ABILITY

   ***This   feature   allows you to "layer-in" lists of names from  other  
   sources,  and still keep all reports separate!   This means that if you  
   have  1,000 trucks   in the electronic rotary card file and you acquire 
   a  list  of  trucks from another source that has 10,000 trucks  in  it, 
   you can enter them into the program  and yet  keep  them  separate from 
   the  original 1,000 when  generating  reports or schedules.   All told,  
   you  can "layer-in" 99,999,999 different layers or groups  of  objects,  
   without  one  layer overlapping the other when you produce  reports  or 
   schedules!

   In  this  way,  the  program is flexible enough so that  it  will  have 
   multiple uses for you.

   6) Other:
                        DISPATCHER OR MECHANIC INPUT
   In  your absence ,  he or she  can input into your appointment  system.  
   Later you can create appointment schedules.

                 ALL REPORTS FIT INTO A STANDARD BRIEFCASE!

   All  of the reports are printed out on standard 8 1/2" by 11"  computer 
   paper  (at 10cpi) ,   so that you can carry this information with  you.  
   This   frees you from having to be tied to your computer in  order   to 
   retrieve  data.


   SYSTEM REQUIREMENTS AND PROGRAM SPECIFICATIONS:
   Hardware required:
     IBM PC, PC-compatible, or MS-DOS computer
     640 KB memory
     2 floppy drives


   Specifications:
     DBASE III [TM] compiled (stand alone product, nothing extra required)

           1,000,000,000 records in the maintenance activities file

                                 related to
               1,000,000,000 records in the master main file

                              grouped by up to 
             99,999,999 categories or "layers" of data permitted

                                    Plus
   you can design your own custom data entry screen for any category,  for 
   a range of categories, or all categories.  Once designed, these screens 
   become disk resident-- up to 99,999,999 of them!--and are called up  by 
   the program as you had defined them.      

                              benefits - page II












                            QUESTIONS PEOPLE ASK:



               Business people ask questions about performance


                                     and 


                            Specific Applications







                     Maintenance and Service People Ask: 
           "Does a menu-driven system exist that meets my needs?"
              The answer to all of the following questions is:
                  "Yes, yes, yes: SERVICE PLUS [TM] does." 


                               RENTS COMPUTERS

   "I  rent computers and I needed an automated system that would allow me 
   to:

        --  identify   the   location  of  my  machines  (customer   site, 
            warehouse, service location)

       --   identify  the maintenance activity for any one computer or all  
            computers and the associated costs.

      --    establish  Preventive  Maintenance Schedules and remind me  to 
            perform that maintenance. 

   SERVICE PLUS  [TM] gives me the information I need through its flexible 
   reporting and on-line inquiry capabilities.   It also lets me  maintain 
   multiple  serial numbers for each computer,  and gives me the option to 
   search for a computer against any one of those serial numbers --and  it 
   does this in just a couple of seconds.

   SERVICE PLUS [TM] has put me in control of my maintenance business.  It 
   has  saved  me  money  by  reducing the down-time  of  my  machines  by 
   automating  my  preventive maintenance  schedule,  and  by  identifying 
   problem computers that were eating me up in service costs.  And best of 
   all,  my  customers  are much happier with the quality of service  that 
   they are now getting."

                               RENTS COPIERS:

   "I  rent copies.   Once I acquire the individual copiers for rental,  I 
   have a hard time identifying where they have gone:   to my customer, to 
   inventory,  or  to service.    Also,  once the machines are out in  the 
   field,  I perform maintenance on a crisis basis, without having a clear 
   understanding  of  what maintenance has already been performed  on  any  
   single machine.  I need a simple way to identify each copier,  and then 
   create a record for every maintenance activity,  along with a cost item 
   for each activity.   From this I need reports that show all maintenance 
   activities  that have occurred for any one copier,  for any  period  of 
   time  that  I  select,  and  the cumulative costs for  that  period  of 
   maintenance, for one copier or for all copiers.

   Also,  I  need  to identify each copier with 2 serial numbers  and  one 
   model  number.   Each  of them is about 30 characters  long.   At  some 
   point, I need to be able to search for any one of the three numbers and 
   cross reference to the other two in less than 5 seconds.

   Finally, as a review the reports that show maintenance activity for the 
   copiers, I may elect to perform preventive maintenance on some of them.  
   Is  there an easy way to automatically generate an unlimited number  of 
   activities  in  the  future for any one copier,  and  then  have  those 
   commitments appear on future appointment or maintenance schedules.  Can 
   all of this be done from menu-driven system?"


                           MAINTENANCE DISPATCHER:

   I'm a dispatcher in a heating/air-conditioning maintenance company.  We 
   have 6 mechanics, each with his own truck.

   When  the calls come in,  we create a 'service ticket'.  From  these  I 
   schedule  the  trucks and create an appointment schedule for each  one.   
   Keeping  the  work  load  'level' is a  real  problem  because  of  the 
   callbacks we have.   At the end of the day,  a customer may call in and 
   complain  that the mechanic failed to complete the  assignment.   Let's 
   say  the  mechanic  has  left open a pipe and it drains  water  into  a 
   restaurant.  We have to then send the mechanic back the next morning on 
   the callback, without being able to bill the customer.  We know that we 
   have  a  problem with the callbacks,  but we can't quantify how  big  a 
   problem it is or what mechanic is generating them.  

   I  would like to see a program that can create schedules for each of my 
   mechanics,  and  also combine those schedules into one master  schedule 
   for  the company.   After each job is completed,  I would like to  show 
   what the outcome of the call was and enter that into the record for the 
   call.  

   In  this way,  I could look at historical reports that would show  what 
   happened in the past-- for any mechanic,  for any customer,  or for any 
   period  of  time.   This  would help me with  'load  leveling'  and  in 
   spotting trends as to the actual outcome of the service calls,  such as 
   identifying extraordinary callbacks.   Also, if the service calls could 
   be grouped by customers called, with the most recent one first, any one 
   of  us could answer such questions as:  what service calls have we made 
   to  the  board of education over the last 6 months,  and what  was  the 
   outcome for each one?

   I  would  also like to identify billings per service call on  the  same 
   record.   If I could enter a negative number,  then I would later  know 
   that this was a callback and would reduce the cumulative bills.  Later, 
   I  would  like  to show cumulative charges for any  mechanic,  for  any 
   period of time, including chargebacks.

   Finally,  I would like to have the ability to 'link' service calls.  At 
   the  end  of each service ticket,  I would like to have a space  for  a 
   future appointment, if required.  Let's say, for example, we determined 
   after an emergency call that we needed to make a preventive maintenance 
   call 6 months from now.   If that future call was the direct outcome of 
   an  emergency call today,  I would like to 'link' one to the other  and 
   have  the program create that appointment automatically 6  months  from 
   now without any future involvement from me.


             MULTIPLE COMMITMENTS MADE TO ANY SITE OR COMPONENT:
   "I  am  a  supervisor in a maintenance area,  with  responsibility  for 
   multiple  buildings  or  sites.   Some of  my  sites  require  multiple 
   commitments.   In  effect,  I have to create an individual schedule for 
   each  one  that shows what I committed to do.   This  process  is  time 
   consuming, difficult to update, and prone to error.

   Also, each employee has his or her own way of doing this.  For example, 
   one  maintenance  person identifies a service problem that requires  we 
   commit to sending a technician to a specific site every third  Thursday 
   for 4 months starting this Christmas.  Another site may require service 
   every seventh Wednesday for 6 months,  beginning next September 1.  Yet 
   another  site may need service on a date of the month instead of day of 
   the  week,  such  as on the 1st,  3rd,  9th,  and 21st of  every  month 
   beginning in next June and continuing for 18 months."

   "Is there a system that will automatically generate the activities  and 
   appointments  for any one site for any period of time,  for either  the 
   day  of the week or the date of the month,  and will give me the choice 
   of any sequencing,  such as every week,  every 3rd week,  or every 15th 
   week?  Does any system exist that will do all of this with less than 10 
   typewritten words of direction from me?"

                       ROUTINE VERSUS CRISIS SERVICE:
   "I  work  in  the maintenance area for a company that  builds  aircraft 
   components.   Our  plant  is  adjacent to an  airport  and  we  perform 
   maintenance   around  the  clock.    Some  equipment  requires   crisis 
   maintenance over and over again.   Since so many people are involved in 
   performing  this crisis maintenance,  we have no way of identifying the 
   problem  areas.   Partly,  we  have a problem of communication  and  of 
   standardizing  the  way  we keep data.   Is there  a  simple  way,  for 
   example,  to  summarize  and show the time we have spent on  all  Drill 
   Presses for the last six months,  then show each one individually, with 
   an analysis of each activity for each press?"

                        TRACKING EXPENSE DATA:
   "After  I set up my maintenance schedule,  is there a simple way to  go 
   back to those records,   enter an expense item and then later summarize 
   those expenses by assembly, for any period of time, by customer support 
   person?  Does a menu-driven program exist that can do this for me?"

                            CAR DEALERSHIP:  FOLLOW UP
   We  have no problem performing service on cars,  but a ton of priceless 
   information is slipping through our fingertips.  The same screen occurs 
   every day.   A customer brings in a car with a  problem.   Later in the 
   day  the  service manager discusses  the  diagnosis,  the  repair,  and 
   suggests a follow up in 6 months for major repairs.   The customer nods 
   his or her head,  pays the bill, and is never hear from again.  We need 
   a simple way to take down those comments that the service manager makes 
   for each repair along with a recommended future repair date.   Then, as 
   those  dates become due,  turn over a daily list of follow up calls  to 
   the lowest paid person in the building,  the secretary,  who then calls 
   all these people whose cars were serviced in the past.   Along with the 
   daily  follow  up list would be shown the comment uttered 6 months  ago 
   about  the  specific problem and now repeated over the phone  6  months 
   later.    Does  a  system  like this exist that  will  move  us  beyond 
   maintenance and into 'marketing' our services?












                                INSTALLATION:



                         Instructions for Installing   




                               SERVICE PLUS [TM]






         All Installation procedures are now defined externally by:
                             GO.BAT and GO2.BAT
        [If you purchased this program from a shareware distributor]





       INSTRUCTIONS FOR MANUFACTURING AND INSTALLING SERVICE PLUS [TM]
             if you captured these files from a bulletin board:

                   A) Manufacturing an executable program
                                  Overview

   There are 4 steps to creating an executable program.

   1)  If you captured this program from a bulletin board, you should have 
   these four files: 
    MAINTA.ZIP    <=== Help & support files (if floppy, drive A)
   MAINTB.ZIP    <=== Executable code (if floppy, drive B)
   MAINTC.ZIP    <=== Executable code (if floppy, drive B) 
   MAINTD.ZIP    <=== This documentation

   These  4 large files are the ACS SERVICE PLUS [TM] Libraries.

   2)   Split-out  (or  un-archive)  the individual  files  from  these  4 
   Libraries.

   3)  MAINTD.ZIP contains this documentation file,  SERVICE.DOC. To print 
   it  out,  make sure your printer is on line and the paper is set to the 
   top of form.  Then enter:   COPY SERVICE.DOC LPT1:   Additionally, some 
   support   files   for  the  interactive   tutorial  are  contained   in 
   MAINTD.ZIP. 

   4)   Run SERVICE.EXE 

                   B) Manufacturing an executable program:
                          Procedure for a Hard Disk
     [If you have a floppy based system, contact Paul Sax for more info]

   Step  1:   Capture  the 4 ACS SERVICE PLUS [TM] Library  files  from  a 
   bulletin board system with your modem.

   Step  2:   Create a subdirectory on your hard disk named '\SERVICE' and 
   move the 4 Libraries into it. 

   This  step  then requires a public domain utility called PKUNZIP  [TM].  
   The commands to split out the files would are:

                             C>PKUNZIP -X MAINTA.ZIP
                             C>PKUNZIP -X MAINTB.ZIP
                             C>PKUNZIP -X MAINTC.ZIP
                             C>PKUNZIP -X MAINTD.ZIP    

   The 'X' stands for Extract. 

   Step 3:  After all of the individual files have been split out from the 
   4  Libraries,  you are ready to execute the program that will make your 
   system operational.  To do this, execute:

                C>SERVICE        <======this file will reside
                                         in your SERVICE subdirectory.

                           Installation - page VI 




               -----------------Help Screen-------------------


                                HELP SCREENS

   Many of the menus have a HELP option.   To access these,  just push the 
   "H"  key (no quotes,  no [RETURN] key).   By using your arrows and  [Pg 
   Up],  [Pg  Dn] keys,  you can move around the HELP file.   When you are 
   finished looking at the HELP screen,  enter [ESC] to return to the main 
   program  menu.   Almost every menu has a HELP screen.  

   One menu may branch down to a number of other menus.  Think of these as 
   branches  on a tree.   Regardless of how far down the tree you go,  you 
   can always return to the next higher level by typing an "R".  By typing 
   an  "R" repeatedly,  you can always return back to the  beginning,  the 
   Main Program Menu. 




                          Installation - page VII   



                          PREFACE TO THE TUTORIALS

   This  program  relates  service  or maintenance  activities  to  parts, 
   objects,  or serialized items.  With this method, you could look at all 
   maintenance done to a printing press,  a lathe, or a hotel room for any 
   period of time.   SERVICE PLUS [TM] allows you to select either  method 
   and  lets you design your own screens to customize this program to your 
   business.   With this feature,  you can identify how each screen  would 
   look for any one piece of equipment, say a Bus, or for any person, such 
   as a mechanic.


   SERVICE  PLUS  [TM]  not  only lets you  custom  design  a  screen,  it 
   encourages  you to create multiple screens,  up to 99,999,999 of  them.  
   The  program then remembers what screen you want to see  and  can  flip 
   back and forth, in effect creating a new system for every screen.   For 
   example,  let's  say you are tracking maintenance for 3 groups of plant 
   equipment:    fire  extinguishers,  plant  refrigerators,  and  vending 
   machines.   You would create a unique screen for each group,  including 
   screen title,  1st,  2nd,  and 3rd IDs, and unit of service.  You might 
   create a screen for vending machines that would say:  'Employee Vending 
   Machine Maintenance System', 'Asset ID Number', 'Compressor ID Number', 
   'Model  Number',  and  'Service Call'.   These terms would then  appear 
   throughout  the program  on menus,  reports,  and data  searches.   You 
   would then assign a 'Category' number to this definition, say 100.  You 
   would  likewise  assign a category number to your definitions  for  the 
   other   two  screens  you  create:    fire  extinguishers   and   plant 
   refrigerators, say 110 and 120.  From that point on, you can bring back 
   these  program-wide  screen definitions just by entering  the  category 
   number.   If  you  entered  110,  the program would then appear  to  be 
   dedicated to fire extinguishers.   You can define a screen by  category 
   or by range of categories, up to 99,999,999 of them.  Once defined, the 
   program  will remember all of them and can switch back  and forth  with 
   just one entry from you.  

   This  program  will  also summarize dollars spent or received  for  any 
   activity or group of activities,  for any part, for any period of time.   
   Thus it is ideal for tracking expense data on a part,  but it can  also 
   be used to summarize billings,  chargebacks, or any monies received for 
   any one part or group of parts.



   Before entering an activity record, you must first create one record in 
   the Master File.  From this record will be related all activities about 
   that part or object.   Stated another way, you cannot enter an activity 
   into  the  Activity  file  unless  you  first  have  an  entry  in  the 
   Maintenance file.   There is one exception, though. If someone is using 
   the  program  in your absence,  such as a secretary,  the program  will 
   allow  him  or  her to enter an unlimited number of  activities  for  a 
   person  or part called 'NEW'.   This exception is intended to  be  used 
   intermittently  in  your  absence  and allows  you  to  identify  those 
   activities that were recorded while you were gone. 


                Observing how the program shows appointments:

   Bring  up  the program (SERVICE.EXE) the first time with this  command: 
   SERVICE.   This  will take you through the system installation  process 
   and  will then present you with the Main Program Menu.   Once  you  see 
   this, exit the program with an 'X'.  

   After  you  have left the program ,  set the system date to January  2, 
   1986, with the following command:

                C>DATE  <====== enter this command
                Current date is Mon 12-01-1986       
                Enter new date: 1-02-1986 <==== enter this date

   A  number  of  appointment records are in the Test  Data  that  reflect 
   appointments made during the 2 weeks following January  2,  1986.   Now 
   invoke SERVICE PLUS [TM] by entering:  SERVICE.   The program will then 
   give  you  an  analysis of the appointments for that  day,  as  well  a 
   graphics presentation of all appointments for the next two weeks.   (It 
   does this if you have at least one appointment for today.)


                          PREFACE TO THE TUTORIALS
                                  Continued

               A Preview of the options that customize this system:
                        Accessing the Custom Options:

   Let's say that you don't want the program to show you the  appointments 
   every  time  you  bring up the program.  Once you arrive  at  the  Main 
   Program Menu,  you will observe Option 2,  Other Options.   Enter a '2' 
   (without quotes),  and you will then be at the Other Options Menu.   At 
   this menu,  you have a number of options.   Later you can come back  to 
   this  part  and explore the meaning of the various options  by  reading 
   through the 'Help' file.  For now, enter 'C' to access:

         C)  Special features to customize this system to your needs

   You  will  then see the Custom Options Menu.    For now,  we  are  only 
   interested in option 4,

             4)  Toggle initial graphics image for Appointments

   Before  selecting  option 4,  let's go to the Help file  to  understand 
   exactly  what this option does.   Do this by entering an 'H' for  Help.  
   Once  you have done this,  you will be in the Help file for the  Custom 
   Options Menu.   Using the Up and Down arrows on your  keyboard,  scroll 
   through the Help file until you come to the explanation for Option 4.

   After  you have  understood what Option 4 will do for you,  select  the 
   'ESCAPE'  key to exit from the Help file.  You will then be back at the 
   Custom  Options Menu.   For now,  enter '4' once and watch the  screen.  
   The message to the right of Option 4 will change from [now on] to  [now 
   off].   After  you have observed this change,  select '4' once more  so 
   that  [now  off]  becomes  [now on],  thereby  restoring  the  original 
   setting.   Later on,  when you become more proficient with the program, 
   come  back to the Custom Options Menu and experiment with  the  various 
   options available to you.  (You can,  for example, change the name used 
   throughout  the program for Billings to Collections or Revenues.   Many 
   of  the names and titles used throughout this program can  be  modified 
   through the Custom Options menu.)

   For  the  time being,  return to the Main Program Menu by entering  'R' 
   twice.   Then exit the Main Program Menu by entering an 'X'.   Once you 
   have returned to your default drive,  change the DATE back to the  true 
   current date with the DATE command.




                           Definition of Shareware

   IN  CONTROL [TM]  is  NOT  a  public  domain  or  free program!  It  is 
   being distributed  as  Shareware.    The   Association   of   Shareware 
   Professionals (ASP) offers the following definition of Shareware:
        
        "Shareware distribution gives users a chance to try  software 
        before   buying  it.    If  you  try  a Shareware program and 
        continue using it,  you are expected to register.  Individual 
        programs  differ on details  --  some  request   registration 
        while  others  require  it,   some  specify  a maximum  trial 
        period.   With  registration,   you  get  anything  from  the 
        simple   right  to continue using the software to an  updated 
        program with printed manual.

        Copyright  laws  apply  to  both  Shareware  and   commercial 
        software,   and   the  copyright  holder  retains all rights, 
        with a few specific exceptions as stated  below.    Shareware 
        authors   are accomplished programmers,  just like commercial 
        authors,  and the programs are of comparable  quality.    (In 
        both cases,  there are good programs and bad ones!) The  main 
        difference   is  in  the method of distribution.   The author 
        specifically  grants the right to copy  and  distribute   the 
        software,   either to all and sundry or to a specific  group.  
        For example, some authors require written permission before a 
        commercial disk vendor may copy their Shareware.

        So,  Shareware is a  distribution  method,   not  a  type  of 
        software.   You   should  find software that suits your needs 
        and pocketbook,  whether it's commercial or Shareware.    The 
        Shareware  system  makes fitting your needs  easier,  because 
        you  can try before you buy.  And  because  the  overhead  is 
        low,   prices  are  low  also.    Shareware  has the ultimate 
        money-back guarantee -- if you don't use the   product,   you 
        don't pay for it."


                           Definition of Shareware 


                        Appendix A: Service Agreement
                              U.S.A. and Canada

This  service agreement is designed to help you with any questions as to  the 
operation of SERVICE PLUS [TM].

AGREEMENT TERMS:
With the ACS  SERVICE AGREEMENT, you have UNLIMITED FREE support if you:

1) are a Registered User.
2) call the ACS Support Line between 9 AM and 4 PM Central  Standard time any 
week day.    Our phone number is:   (214) 690-6017.  


AGREEMENT CONDITIONS:

YOU  PAY  FOR THE COST OF THE TELEPHONE CALL.   Because of  the  breakthrough 
price  of  SERVICE PLUS [TM],  we cannot offer an 800 toll  free  number  for 
service as other packages might offer.  If our lines are not available or you 
reach an answering machine, we will return the call on a collect basis.

                               Support policy 
           for Registered Users outside of the U.S.A. and Canada:
   
Support is available to you in 3 ways:

1)  by FAX at ANY hour.
                               Our FAX number:
                                 2146904782

Our  United States FAX number is (214) 690-4782.   The '214' is our area code 
or STD.   To reach us, you must use whatever international dialing codes your 
telephone system requires,  including any U.S.A.  outbound codes specific  to 
your country.    This number,  2146904782,  is treated as a normal phone line 
and  can  be reached in the same way that you would dial any phone number  in 
the United States.


2)   call  the ACS Support Line between 9 AM and 4 PM Central  Standard  time 
any week day.   Our phone number is:  2146906017. 

                  Our direct dial business\voice line:

                                 2146906017  

Between  9 AM and 4 PM Central Standard United States time,  you  can  always 
reach  the  ACS  Support person through 2146906017.   The same  international 
dialing  codes apply to this business\voice line as apply to the  FAX  number 
above.

3)   by  TELEX at ANY hour.   We poll our telex line for messages EVERY  HOUR 
around the clock.
                              Our TELEX number:
                                 6503502020

Our  United States TELEX number is 6503502020.   Our answerback is:  MCI  UW. 
Since this number is on the international TELEX network,  you must prefix the 
TELEX  number  with  the U.S.A./Western Union  International   inbound  code.  
These codes are specific to each country and a list appears in: 

    Foreign Credit Card Registration...........................Appendix I

If, for example, you are sending a TELEX from Australia, your inbound code is 
'23'  and  must precede the TELEX number.    In that case our complete  TELEX 
number would be:
                                236503502020

              Inbound U.S.A./Western Union International codes:

Access Codes vary by country.   A few of those codes are excerpted below from 
Appendix I:
                COUNTRY OF ORIGIN             CODE
               -------------------------------------
                ALGERIA                        023
                AMERICAN SAMOA                  --
                ANGOLA                         023
                ANTIGUA                         23
                ARGENTINA                       23
                AUSTRALIA                       23

                      Communication Charges for Support
           for Registered Users outside of the U.S.A. and Canada:

For any support responses we make to you through either TELEX or FAX, we will 
invoice  you for the direct communication charges we incur in  responding  to 
your  inquiry.    In  the case of FAX,  those charges are AT&T  'per  minute' 
international  dialing  charges to your country;  for  TELEX,  Western  Union 
International  assesses us a 'telex  minute' charge to terminate our TELEX in 
your country.  
                 Minimum charges for TELEX or FAX responses:

The minimum Communication Charge made to you will be U.S.  $10.  If you  paid 
for   the  original  Registration  fee  with  your  credit  card,   then  the 
Communication Charges,  subject to the $10 minimum, will be made against your 
original credit card.


                                 Appendix B:
                        Installation Procedures Menu
                                                                              
   When  you  first invoke the program,  SERVICE.EXE,  SERVICE  PLUS  [TM] 
   presents you with this screen:

   ----------------------------------------------------------------------  
           Maintenance and Service Call Activity Tracking System         |
                                                                         | 
                              Install Program                            | 
                            -------------------                            
                           | Please Choose One |                         
                            -------------------                            
          1)  Install program for a hard disk                            
          2)  Install program for a floppy disk-based system [1 or 2 drives]  
          3)  For Monitor, select B/White or Color Palette [now black & white]
          H)  Help  
          B)  Turn off system  'BELL', reduces beeping     [  Bell OFF       ]
          C)  Turn on billing/stopwatch subsystem          [Timer system OFF ]
                                                                              
 First time installation:  Observe the options above.  You must select either|
  options 1 or 2 LAST.  To select an option, enter one key, without a Return.|
   ---------------------------------------------------------------------------

   As you review the installation procedures, observe that you must select 
   1  or 2 LAST,  and that once inside the program you can return to  this 
   menu anytime by entering the Other Options Menu, Install option.  

   This menu will respond to one keystroke.  

                               ==============
                               |  OPTION 1: |
                               ==============

                     1)  Install program for a hard disk                            

   Option  1 will install the program for a hard disk.   It performs  some 
   system  maintenance.    If  the  program  detects  the  presence  of  a 
   'CONFIG.SYS' file, it will append two commands to it:

                                  FILES=20
                                 BUFFERS=15

   If not, SERVICE PLUS [TM] will create a CONFIG.SYS file from scratch.

                               ==============
                               |  OPTION 2: |
                               ==============

     2)  Install program for a floppy disk-based system [1 or 2 drives]  

   Option 2 sets up the program for a floppy disk system.  Once you select 
   this option,  SERVICE PLUS [TM] will, in turn, ask you if you have 1 or 
   2 disk drives in your computer.
                                                                        

                               ==============
                               |  OPTION 3: |
                               ==============


    3)  For Monitor, select B/White or Color Palette [now black & white]

Just prior to this menu,  SERVICE PLUS [TM] attempts to discern if you have 
a monochrome or a color screen.  If yours is color, you can select from any 
one of 10 color palettes.   At any time in the future, you can come back to 
this option and change the color settings!


                               ==============
                               |  OPTION H: |
                               ==============

                                  H)  Help  

   The Help option is the on line 'Help' screen.


                               ==============
                               |  OPTION B: |
                               ==============



    B)  Turn off system  'BELL', reduces beeping     [  Bell ON        ]

Option B turns the system bell 'on' or 'off'.  As you become more conversant 
with  this  program through its tutorial,  you may elect to turn  this  bell 
'off'.


                               ==============
                               |  OPTION C: |
                               ==============

      C)  Turn on billing/stopwatch subsystem       [Timer system OFF ]

   This   option  branches  to  a  powerful  billing/stopwatch  subsystem, 
   explained in:
    
   Time and Billing Stopwatch subsystem.........................Appendix C
          [time and bill every activity, with up to 9 labor rates]    



                                 Appendix C: 

                    Time and Billing  Stopwatch Subsystem

   This menu driven feature has the ability to clock each activity and  to 
   assign  a  cost or labor rate [up to 9 of them] to each record  in  the 
   Master  File.  It will give you a detailed financial analysis of  every 
   timed activity.

   Beyond merely accumulating time per activity, it can manipulate charges 
   in such a way as to reflect the way you do your business, with optional 
   minimums, maximums, or fixed fees.  Finally, the program will create an 
   audit trail in every timed activity.

   This feature is turned on in the Install Menu, selection 'C':

                   C)  Turn on billing/stopwatch subsystem

   Observe  that the default value of the Billing Class is '0',  but  that 
   you  must  place a value in there corresponding to the labor rates  you 
   define: rates 1 - 9.




                                 Appendix D:

                   Automatically Create Future Activities          
                                  Overview:

   This  feature  is  useful  is  scheduling  preventive  maintenance  for 
   individual parts that require frequent and regular appointments. 

   This option will allow you to create multiple activities in the future.  
   From  this  menu,  you can generate one activity every 3 weeks  for  18 
   months for one part.   Another possibility is to make activities  every  
   day for a 3 week period.  A third example would be to create activities 
   on alternating Thursdays for one part for 24 months.   You can elect to 
   make  those  activities  on  a day of the week,  such  as  every  third 
   Thursday,  or on a date of the month,  such as making activities on the 
   1st, 5th, and 18th of every month for one part.

   The possibilities are unlimited!

   This option will automatically create for you activities in the future, 
   based on your input.  You can input the following variables:

        1) Start Date of your activity period.
        2) End date of your activity period.
        3) Day of week or date of month on which activity will occur.
        4) Cycle of activities (weekly, every 2nd week, every 3rd week).


   You  can  also delete a set of prior activities that  you  had  created 
   automatically with this option.

               
   Observe option 6 on the Master File Menu:
 
            automatically creating future Activities


   Once you select option 6, you will see the next menu:
                                                                         
                                                                            
   ------------------------------------------------------------------------
                   Automatically  Create Future Activities                 |
            ==========================================================     |
            |               Tuesday, August 9, 1988                  |     |
            ----------------------------------------------------------      
            |                                                        |      
            |       1)  Create future activities                     |      
            |                                                        |      
            |                                                        |      
            |                                                        |      
            |       H)  Help                                         |      
            |                                                        |      
            |                                                        |      
            |                                                        |      
            |       R)  Return to prior menu                         |     | 
            |                                                        |     | 
            ==========================================================     | 
---------------------------------------------------------------------------
                                                                            
   Select  option  1  from  the  Menu  to  Automatically  Schedule  Future 
   Activities:



                               ==============
                               |  SCREEN 1: |
                               ==============

                ============ Add/Delete Option ============ 


   At  this menu,  you can elect to either add records automatically or to 
   delete former activity records that you had created automatically.  

   If you elect to delete former activity records,  you can think of  this 
   procedure as the reverse of adding them.  You will be prompted for most 
   of the same information as you were when you originally created them.

   The  program can sense the different between records that you  manually 
   enter  into  the activity file and those created automatically in  this 
   module.   If  it finds two of these records having been created on  the 
   same  day,  you  will  be notified at the screen and  neither  will  be 
   deleted.


                               ==============
                               |  SCREEN 2: |
                               ==============


   Now select the day of the week on which you wish the activity to occur.  
   Use the following codes:

              1 = Monday
              2 = Tuesday
              3 = Wednesday
              4 = Thursday
              5 = Friday
              6 = Saturday
              7 = Sunday

              8 = Everyday (7 days a week)
              9 = Day of week not relevant,
                  select future activities by date of month. 
                  [You can select up to 10 different dates during
                   any one month, such as scheduling an activity 
                   for the 10th, 15th, and 25th.]   


   As the program creates your activity records automatically, it can also 
   enter a 60 character message from you into the comments field. 


                               ==============
                               |  SCREEN 3: |
                               ==============

   If  you selected option 9 in Screen 2,  then this screen would  appear.  
   From  it,  you  can  select  up  to 10  days  from  which  to  generate 
   activities.   As  those days occur during the period you have  selected 
   earlier, this program will generate an activity record on that date.

   For example, if you enter '1, '2', and '6', then you will automatically 
   create an activity on the 1st,  2nd,  and 6th of every month that falls 
   within your range.

                               ==============
                               |  SCREEN 4: |
                               ==============


   If  you  had selected option 1 through 7 on Screen 2,  then  you  would 
   branch to Screen 4.   At this menu,  you select the weekly frequency at 
   which  your future activities will be scheduled.   If you input a  '1', 
   then an activity will be scheduled every week.    A '2' means every two 
   weeks; a '3' means an activity will be scheduled every three weeks.

   You  can enter any number.   If you enter '13',  then the program  will 
   schedule your activities every 13 weeks.



                                 Appendix E:
    
                Base Station/Remote Site Consolidation Feature

                        See Main Program Menu, Option 5

   This  feature gives you the ability to consolidate data from  different 
   stations  onto  one master station.   You can think of  the  individual 
   stations as 'Remote Sites' and the master as the 'Base Station'.   

   This  feature  was implemented because many users of this program  have 
   asked for the ability to have a roving feature.   One manager has  many 
   people  working  for  him  in the field using  this  program  on  their 
   individual  laptop  portables.    He  asked  if  he  could  consolidate 
   everyone's  data  onto his desktop computer.   With this  Consolidation 
   Feature, he now can.  

   Each  Remote  Site  goes  to  the menu  for  Base  Station/Remote  Site 
   Consolidation.  This menu has 3 selections: 

                          1)  Output records
                       [used from a Remote Site]
                           2)  Input records
                     [used from the Base Station]
              3)  Change Start/Stop date of Consolidation
             [used only with outputting records, Option 1]

   The  Remote  Site then selects the range of records that  he/she  wants 
   outputted  to  the consolidation disk.   These are the dates  that  the 
   records  for the Master File and Activity file were originally  entered 
   into  the  system.   With the ability to select out records by date  of 
   entry  into the system,  you can make incremental  consolidations,  say 
   every 2 or 4 weeks.  

   An unlimited number of Remote Sites can output their records onto their 
   individual consolidation disks.   The Base Station,  in turn, takes all 
   of  consolidation disks and inputs them one at a time using  option  2, 
   Input records.  If the program detects that it is importing a duplicate 
   record  into the Master File,  it will stop,  display the  questionable 
   duplicate  records  to  you,  and then ask  you  for  a  decision:   to 
   overwrite the original record with the newly imported one,  or to abort 
   the  consolidation  of that one record into the  file.    All  activity 
   records  from  the consolidation disks,  of course,  are added  as  is, 
   without any validation.

   The Base Station must have a hard disk, but the Remote Sites can have a 
   hard  disk or be floppy-based.   This feature can also be thought of as 
   providing the functionality of a Local Area Network without the  bother 
   and  uncertainty  of being dependent on a network.   Let's say  that  4  
   data  entry people are using this program to take information over  the 
   phone.  If their supervisor wants access to the consolidated records of 
   all 4 people,   each person could submit a weekly consolidation disk to 
   the  supervisor.   The supervisor,  in turn,  would have a fifth system 
   that  functioned as the Base Station and contained only  those  records 
   brought in using option 2, above.


                              Appendix F
                  Instructions for Importing External Data

   This  must  be done manually since the program has no way of  verifying 
   the validity of external data.  You must do this yourself by  examining 
   the  work file that you will be creating,  TESTFILE.DBF,  until you are 
   satisfied that it is meaningful (ie,  the data fields match up  between 
   new and old files).  If meaningless data is imported, then the existing 
   data faces corruption.

   As  a  safeguard for your original files,  create a  new  subdirectory, 
   \CONVERT,  and move over all files from \SERVICE to it.  Perform all of 
   the  following  steps  in  \CONVERT until you are  satisfied  that  the 
   conversion  is successful,  then bring back all files from \CONVERT  to  
   \SERVICE.

   These are the steps to import data.

   First,  acquire  a  copy of dBASE III [TM],  dBASE III Plus [TM]  (from 
   Ashton-Tate  Corp.),   dBXL  [TM]  (from  Wordtech  Systems),   or  any 
   interpreter that is compatible with these.

   Secondly,  make  a copy of the structure of the Master file,  PART.DBF, 
   with these commands:

   bring up your file  -->     USE PART
   copy the structure  -->     COPY STRUCTURE TO TESTFILE
   invoke test structure -->   USE TESTFILE
   bring in records      -->   APPEND FROM OLDDATA.TXT DELIMITED WITH ,
       from the old data 

   This  assumes that you have OLDDATA.TXT set up in a  'comma  delimited' 
   format.  Comma delimited data looks like this:

          "John","Doe","Dallas","TX"

   Observe  in this example that four fields are separated (or  delimited) 
   by commas,  and each field is surrounded by double quotes.   You do not 
   need  spaces  between  any one comma and the  double  quotes  that  are 
   adjacent to it.

Structure for database : part.dbf
Field  Field name  Type       Width     Dec
    1  DATE_SYS Date           8         
    2  FNAME Character     20         
    3  LNAME Character     20         
    4  PROSPECT Character     40      
    5  COMMENT1 Character     60      
    6  COMMENT2 Character     60      
    7  SUM_DATE Date           8      
    8  TIME_SYS Character      8      
    9  SUMEXP Numeric       12       2
   10  LABELS Numeric        1        
   11  INTEREST Numeric        8      
   12  PARTCOST Numeric       12       2
   13  CLASS Numeric        2         
   14: RANDOM2 Numeric     
   15: VALID1  Numeric    

   16  PROSPMEMO Memo          10  
   17  VAL1 Numeric       12       2 
   18  VAL2 Numeric        2       
   19  VAL3 Date           8    
   20  VAL4 Numeric       12       2 
   21  VAL5 Date           8  
   22  VAL6 Numeric        4  
** Total **                     329  


                         Definition of fields.
           You must enter a value for fields 1,4,11

   1:   DATE_SYS,  date main record first came into system.   For external 
   data, you can use today's date for all records. 
   2:  FNAME, Third ID 
   3:  LNAME, Second ID              
   4:  PROSPECT,  Primary ID.
   5:  COMMENT1, the first comments field.
   6:  COMMENT2, the second comments field, a continuation of the first.
   7:  SUM_DATE, date billings were summarized last.
   8:  TIME_SYS, time of last billing summarization.
   9:  SUMEXP,  the  amount of the most recent billing summarization  for 
   this master file record.
   10:   LABELS,   ignore this.
   11:   INTEREST,  category  of master file. Must be set to 1  (the  default 
   value), or above.  Cannot be set to zero.
   12:  PARTCOST, ignore this
   13:  CLASS,  ignore this. (if timer function is selected, this is used for 
        labor rate)
   14: RANDOM2, ignore this
   15: VALID1, ignore this
   16  PROSPMEMO Memo  memo field
   17  VAL1 Numeric    - 
   18  VAL2 Numeric      \
   19  VAL3 Date          |   used internally, ignore
   20  VAL4 Numeric      /
   21  VAL5 Date        /
   22  VAL6 Numeric    -

   After you are satisfied that TESTFILE.DBF  has your data, execute these 
   commands:

                      USE PART
                      APPEND FROM TESTFILE
                      QUIT

   These  delete  all  files that end in .NTX.     Upon  completing  this, 
   execute the program: 
                       
                     PART

   The  program will then automatically reindex all files once  it  senses 
   that *.NTX files are missing.



                       Grouping your data: Appendix G
                [Categories versus Defining your own fields:]

   Categories are used for grouping blocks of records in the Master  File.  
   Let's  say  that you are tracking maintenance performed  on  assemblies 
   located in 8 different buildings.  Each building has a different number 
   of these items.  Additionally, each assembly can have up to 5 different 
   types  of maintenance performed on it,  such as Preventive Maintenance, 
   Crisis Maintenance,  and so on.   Let's say, further, that one assembly 
   in one building is called 'FE10'.   

   The  natural grouping of data in this application are items grouped  by 
   buildings.   Hence,  you could assign a category to each building.   In 
   this  way,  whenever you wanted reports specific to one  building,  you 
   could  have  this  by selecting the category that  corresponds  to  the 
   building.

   If  you  use categories for the physical sites where each  assembly  is 
   contained,  then how are you going to identify what type of maintenance 
   was performed on each assembly?  Easy.  This program has the ability to 
   create  reports based on codes or phrases you enter into  the  comments 
   field.   As  you create activity records for 'FE10',  for example,  you 
   would  enter  into each comment field the code for that  type  type  of 
   maintenance  activity.    Let's  say  that  your  code  for  Preventive 
   Maintenance  is  'PM'.   Every time,  then,  that you  have  Preventive 
   Maintenance  occur for 'FE10',  you would create a new activity  record 
   and  enter 'PM' into the comments field.   Later,  you could go to  the 
   Service Call and Activity Reports Menu and select out 'PM' or any other 
   code.  You can select out up to 4 comments for your reports.

   This  feature  to select out up to 4 comments gives you the ability  to 
   define your own fields.  As you do this, however, the burden is on your 
   shoulders to define each code and then to enter that code consistently.  



                                 Appendix H:

            WordStar/MailMerge[TM]/Basica/Output Sequential File
              [also: WordPerfect[TM] Merge and dBASE III [TM] ]

   When  you  first bring up  SERVICE PLUS [TM],  you will see  this  Main 
   Program Menu:
   
   ------------------------------------------------------------------------
                                                                          | 
    --------- Maintenance and Service Call Activity Tracking System------ | 
                                                                          | 
                                      ACS                                   
  ---------------           ---------------------      ---------------      
  |  10/08/1988 |           | Please Choose one |      |  06:08:16    |     
  ---------------           ---------------------      ----------------     
                Main Program Menu for Saturday, October 8, 1988             
                                                                            
                        1)  Master file options                             
                                                                            
                        2)  Other Options                                   
                                                                            
                        3)  Select Category                                 
                                                                            
                        4)  Output to external word processor/merge/data file
                [Wordstar[TM], Wordperfect[TM], dBASE III [TM]              
                                                                            
                        5)  Base Station/Remote Site Consolidation          
                        6)  Create an on-line Help/Data screen  [ now Off]  
                        T)  Go to interactive Tutorial: 12 chapters       | 
                                                                          | 
                        X)  Exit System                                   | 
   -----------------------------------------------------------------------  


   Upon selecting option 4),  Output to external word processor/merge/data 
   file, you will see:           

   ------------------------------------------------------------------------
    --------- Maintenance and Service Call Activity Tracking System-------| 
                                                                          | 
                  Output for word processing/merge/data Menu              | 
                                ===================                         
            |=========================================================      
            |              Saturday, October 8, 1988                 |      
            |--------------------------------------------------------|      
            |       1)  Select output criteria for merge file        |      
            |               [no criteria selected]                   |      
            |       2)  Output records to Wordstar/Mailmerge[TM]     |      
            |       3)  Output records to WordPerfect[TM]            |      
            |       4)  Output records to dBASE III [Registered TM]  |      
            |                                                        |      
            |                                                        |      
            |                                                        |      
            |       H)  Help                                         |      
            |       R)  Return to prior menu                         |      
            |                                                        |    | 
            |========================================================|    | 
                                                                          | 
   -----------------------------------------------------------------------  
                                                                            

                                  OVERVIEW

   These options create either a WordStar/MailMerge[TM],  WordPerfect[TM], 
   or  dBASE III [TM] data file using the data from your Master File/dBASE 
   III file.  The newly created file ends in the letters: '.DAT', '.SF' or 
   '.DBF'.

   If  used  with Wordstar[TM],  the .DAT file can be used to  print  form 
   letters  in  MailMerge[TM].   All  character  fields  are   trimmed  of 
   trailing  blanks to accommodate your form letters.    Along  with  this 
   data  file,  the  Wordstar  option creates the beginning of  your  form 
   letter and puts it in a file ending in the 3 letters '.DEF' (containing 
   all the MailMerge[TM] commands you need at the start of a form letter). 

   If used with WordPerfect[TM], the .SF file is the 'Secondary File' that  
   WordPerfect uses for merge letters,  where each field is delimited with 
   CONTROL-R, and each record is delimited with CONTROL-E.]

   If  used  with dBASE III [TM],  the '.DBF' file format  is  becoming  a 
   standard  data file format that many other programs are using for their 
   respective data import function.

   These  options  will allow you to output the key fields in your  master 
   file  to an external text file that can,  in turn,  be used by  a  word 
   processor   to   create   'boilerplate'  or  form   letters   for   you 
   automatically.


   Based on your selection criteria, if any, the program will output these 
   fields: 
                 Primary ID, Secondary ID, 3rd ID, Comments 


                               ==============
                               |  OPTION 1: |
                               ==============

                             Selection Process:

   At option 1, you can input up to 7 search criteria as the basis for 
   your word processor merge file: 

                    Primary ID, Secondary ID, 3rd ID, Comments 

   You  can  select whether you want only those records to   be   selected  
   that   have  all  of criteria in every record or  select  out   records 
   regardless  of the number of  matches made per record,   as long as  at  
   least one match is made in any one record that is selected.

   True  [or T] means all matches have to be made in any one record for it  
   to  be  selected.    False  [or F] means that as long as one  match  is 
   made in  a record it will be selected.



                         Search Criteria Selection:
                                 Option 1:

   You  can  enter  any word,   phrase,   or code on which to   base  your 
   selection.   If left blank,  all records will be selected out.   If you 
   make  an entry here,   the program will search through the Master  File 
   and  select out only those records that meet your search criteria.

   [Note that you can have up to 7 different codes or phrases entered here 
   and  all   records will be pulled which have any one of  them   or  any  
   combination of them]

                               ==============
                               |  OPTION 2: |
                               ==============
                2)  Output records to Wordstar/Mailmerge[TM]  

   This option is used to get data from the Master File file and output it 
   to  a file that can be used by WordStar/MailMerge[TM].   This  file can 
   also be used by BASIC and other languages and products.  In short,  any 
   product  that accepts "comma delimited" files for input may accept  the  
   file created by this option.


   From the WordStar option,  you will create  two files.   The first file 
   name  ends in .DEF and is a file that can be turned into a form  letter 
   just by calling it up in WordStar and matching it to your form  letter.  
   It  already contains all of the commands needed by WordStar to read the 
   Master File/dBASE III data file (.DAT).

   The other  file is the .DAT file, which contains all data that you want 
   to  read  into WordStar.   It is formatted sequential  file,  with  all 
   fields in quotes and separated by commas. 


                               ==============
                               |  OPTION 3: |
                               ==============

                   3)  Output records to WordPerfect[TM] 

   The  .SF file is the 'Secondary File' that  WordPerfect uses for  merge 
   letters,  where each field is delimited with CONTROL-R, and each record 
   is delimited with CONTROL-E.]



                               ==============
                               |  OPTION 4: |
                               ==============

               4)  Output records to dBASE III [Registered TM]

   With option 4,  the '.DBF' file format is becoming a standard data file 
   format  that  many other programs are using for their  respective  data 
   import function.  

   Once  you assign a name to the dBASE III [TM] file you are  outputting, 
   the structure of that file is:

       Field  Field Name  Type       Width    Dec
         1  FNAME       Character     20   <======== 3rd ID
         2  LNAME       Character     20   <======== 2nd ID
         3  PROSPECT    Character     40   <======== Primary ID
         4  COMMENT1    Character     60  
         5  COMMENT2    Character     60     

       ** Total **                     201  





                                 Appendix I

                           Registration Procedure:

                       ----- Foreign Registration -----

If   you   elect  to  become a registered  user  of  this  commercial   grade  
software,  then  you can pay for this program via FAX or Telex. 
 
When you elect to register, the program will ask for a validation number from 
you.   You   will  receive  this number back via FAX or Telex from  the   ACS  
Credit  Card Registration Hot Line.

The validation number changes every time you go through this  process.   Make 
sure  that you leave the validation number screen in place until you  receive 
the  validation  number  back via FAX or Telex from  the  ACS   Credit   Card 
Registration Hot Line.

You must pay for this program with a credit card.    If you do not have  one,  
go to a friend or colleague,   write a personal check to them,   and then use  
their   card  for this purchase.    ACS is not set up to process  checks  for  
purchases made through our FAX or Telex system.

The   ACS  Credit  Card Registration Hot Line will accept  either  of   these 
credit cards in payment for this great program:    MasterCard,   Visa, Diners  
Club, Carte Blanche, and American Express.

                           'Request to Purchase':

On  your Telex or FAX message,  indicate that this is a 'Request to Purchase' 
and show this information:

                       your 'Random Generated Number'    
                            the credit card name, 
                    the amount in United States dollars,
                          the  credit card number,
                            the expiration  date, 
                 your name, your WORK and HOME phone number.
                         including area code or STD

                         Invoice generating module:  

Once you input the registration number successfully, this program will prompt 
you  for the information that it needs for an invoice and will them print out 
a  two part invoice.   The first sheet will be for your  records,  while  the 
second  one is required for the credit card people and should be sent back to 
us, signed.



                              Direct purchase:

On  first examination,  this registration process seems filled with risk  for 
you.   You  are sending your credit card number to an anonymous FAX or  TELEX 
machine in the United States.    Will your credit card number be lost?   What 
happens  if  the program fails to work later?   What if ACS is no  longer  in 
business?

First of all, credit card companies have, in general, been overly generous in 
refunding or reversing credit card purchases where the purchase has been made 
over the phone.   In the U.S.A.,  for example,  VISA/Mastercard and  American 
Express  have  routinely allowed up to 180 days for credit card  reverses  on 
those purchases made over the phone.  At the time of this writing, May, 1988, 
one year after PC SIG featured this program in PC WORLD magazine, July, 1987, 
page 308,  NOT ONE of my registered users has ever reversed those charges!  

Finally,  you  have the product in front of you.   As you make your  purchase 
decision, the relationship has become clear to you that this is a stable, bug 
free  product and that if you continue to use it,  the program will SAVE  YOU 
TIME AND MONEY!
                               Our FAX number:
                                 2146904782

Our United States FAX number is (214) 690-4782.   The '214' is our area  code 
or STD.   To reach us, you must use whatever international dialing codes your 
telephone  system requires,  including any U.S.A.  outbound codes specific to 
your country.    This number,  2146904782,  is treated as a normal phone line 
and  can be reached in the same way that you would dial any phone  number  in 
the United States.

                    Our direct dial business\voice line:
                                 2146906017  

Between  8 AM and 10 PM Central Standard United States time,  you can  always 
reach the ACS  Credit  Card Registration Hot Line person through  2146906017.  
The  same  international dialing codes apply to this business\voice  line  as 
apply to the FAX number above.

                              Our TELEX number:
                                 6503502020

Our  United States TELEX number is 6503502020.   Our answerback is:  MCI  UW. 
Since this number is on the international TELEX network,  you must prefix the 
TELEX  number  with  the U.S.A./Western Union  International   inbound  code.  
These codes are specific to each country and a list appears below.   If,  for 
example,  you are sending a TELEX from Australia,  your inbound code is  '23' 
and  must precede the TELEX number.    In that case our complete TELEX number 
would be:
                                236503502020


              Inbound U.S.A./Western Union International codes:

Access  Codes  vary by country.   The various MCI/WUI USA  Access  Codes  are 
listed below by country or origin.
               
                COUNTRY OF ORIGIN            CODE
               -------------------------------------
                ALGERIA                        023
                AMERICAN SAMOA                  --
                ANGOLA                         023
                ANTIGUA                         23
                ARGENTINA                       23
                AUSTRALIA                       23
                AUSTRIA                         23
                BAHAMAS                         23
                BAHRAIN                        023
                BANGLADESH                    0023
                BARBADOS                        23
                BELGIUM                       0236
                BERMUDA                         23
                BOLIVIA                        023
                BRAZIL                          23
                BURMA                           23
                CAMEROON                      0230
                CANADA                       06096
                CAYMAN ISLANDS                  23
                CHILE                          0l6
                CHINA                          023
                COLOMBIA                      0236
                COOK ISLANDS                  0230
                COSTA RICA                      23
                CUBA                            23
                CYPRUS                         023
                CZECHOSLOVAKIA                 236
                DENMARK                        023
                DOMINICA                        23
                ECUADOR                         23
                EGYPT (3 DIGIT NOS.)             6
                -     (5 DIGIT NOS.)            23
                EL SALVADOR                    023
                ETHIOPIA                       023
                FIJI                            23
                FINLAND                         23
                FRANCE                      023000
                GABON                         0230
                GERMANY (WEST)                 023
                GHANA                          023
                GREECE                          23
                GRENADA                         23
                GUADELOUPE                      23
                GUATEMALA                      023
                GUINEA (REP. OF)                23
                GUYANA                         023


                HAITI                           l3
                HONDURAS                        23
                HONG HONG                       23
                HUNGARY                         23
                INDONESIA                       23
                IRAN                           023
                IRAQ                           023
                IRELAND                        023
                ISRAEL                          23
                ITALY                         0023
                IVORY COAST                     23
                JAMAICA                         23
                JAPAN                           23
                JORDAN                         023
                KENYA                         0236
                KOREAN (REP. OF)               023
                KUWAIT                          23
                LEBANON                      00300
                LIBERIA                       0236
                LUXEMBOURG                     023
                MALAYSIA                        23
                MEXICO                         023
                MONSERRAT                       23
                NAURU                           23
                NETHERLANDS                   069/
                -                              023
                NETHERLANDS ANTILLES            23
                NEW ZEALAND                     23
                NICARAGUA                       23
                NIGER                         0236
                NIGERIA                        023
                NORWAY                          23
                OKINAWA                         23
                OMAN                           023
                PAKISTAN                      0023
                PANAMA                        0236
                PAPUA/NEW GUINEA                23
                PARAGUAY                      0025
                PERU                           023
                PHILIPPINES                     23
                POLAND                         893
                PORTUGAL                       023
                ROMANIA                      02360
                ST. LUCIA                       23
                ST. KITTS/NEVIS                 23
                SAIPAN (MARIANAS)           DIRECT
                SAUDI ARABIA                   023
                SENEGAL                      02300
                SIERRA LEONE                  0236
                SINGAPORE                       23
                SOLOMON ISLANDS                 23
                SOUTH AFRICA REPUBLIC           23
             SPAIN                          023

                SRI LANKA                      023
                SUDAN                          023
                SWEDEN                          23
                SWITZERLAND                    023
                SYRIA                         0230
                TAIWAN                        0236
                TANZANIA                      0236
                THAILAND                       023
                TOGO                          0236
                TRINIDAD                        23
                TUNISIA                      02360
                TURKEY                         025
                TURKS AND CAICOS ISL.           23
                UNITED ARAB EMIRATES           023
                UNITED KINGDOM                  23
                UPPER VOLTA                    236
                URUGUAY                        023
                U.S.S.R.                       236
                VENEZUELA                      233
                VIRGIN ISLANDS (U.S.)       DIRECT
                YUGOSLAVIA                     025
                ZAIRE                         0236
                ZAMBIA                        0236
                ZIMBABWE                        23
                MOST OTHER COUNTRIES            23



                                Appendix J-I:
                           Overview of Memo Options:  
      Every Master File and Activity record has its own word processor!

   This  exciting new feature allows you to create a second screen  behind 
   any individual Master File or Activity record with free-form text of up 
   to 15,000 characters PER MASTER RECORD, given a 640K system memory.

   In  this  second screen,  you can scroll up and down and enter text  as 
   though you were in a word processor.  

   Indeed, you can think of this second screen as your own word processor, 
   embedded behind each Master File record.  In addition to entering text, 
   you  can also import external text files,  such as contracts or  formal 
   bids, into the relevant record associated with that text.  In this way, 
   you can browse through the contract for a Master File six months  after 
   the  fact and long after you have forgotten what the content  was.   If 
   you  wish to export the memo to an external text file,  you can do that 
   too.

   The  memo option presents itself in one of two ways.   When you are  in 
   the Add option for the Master File file, the program asks you after you 
   have  finished entering all data into the first screen if you  wish  to 
   create  a memo.   If you elect to do so,  then the program will go into 
   the  Add/Edit memo mode.   If you are in the Get option for the  Master 
   File  file,  you  will  see this option on the  lower  left:  "F4  Memo 
   Option".    Upon  selecting  that,   you  will  be  presented  with   a 
   comprehensive  menu  entitled  "Memo Option Menu".   Each  Master  File 
   record has its own memo menu.   

   It  contains these options [the Master File name appears on  top  after 
   "Custom Memo"]:
       
                        ===Custom Memo for STW366 ==
                               Memo Options Menu
                                 ===============   
            ==========================================================
            |             Tuesday, September 22, 1987                |
            ----------------------------------------------------------
            |       1)  Edit the existing memo or create a new one   |
            |       2)  Output the memo to a text file               |
            |       3)  Input a text file into this memo             |
            |              [overwrite existing memo]                 |
            |       4)  Input an external text file into this memo   |
            |              [append to existing memo]                 |
            |       5)  Set Left and Right Margins:                  |
            |                        5                75             |
            |       6) Toggle Edit Screen Code Help [Now On ]        |
            |       7)  Print options  [Printit v3.5 [TM]]           |
            |       8)  Create Quick Memo [TM]                       |
            |                                                        |
            |       R)  Return to the Master File record             |
            ==========================================================
                   [Current character length of this memo = 0]


   This  menu  will tell you at a glance the number of characters  in  the 
   memo, the current margins, and today's date.  You can input an existing 
   text  file into the memo with options 3 or 4.   As your memo begins  to 
   grow and accumulate different items,  you can output it to an  external 
   text file using option 2. 


   Option 1 puts you into the edit mode.  In this option you are presented 
   with  a  full screen word processor with the following message  on  the 
   bottom of the screen:


-----------------------------------------------------------------------------
                              Edit Screen Codes:
  Up arrow = move up 1 line, Down arrow = move down 1 line, Left Arrow = move
  left 1 character, Right arrow = move right 1 word, HOME = start of current
   line, END = end of current line, [CONTROL] HOME= start of memo, [CONTROL]
 END = end of memo, PgUp = Next edit window up, PgDn = Next edit window down,
         [CONTROL] W = Finished editing and save, ESC = abort editing.
  Use [INS] key for inserting text, [DEL] to delete, [CONTROL] B to reformat
-----------------------------------------------------------------------------



   This  message  gives you the codes that you can use in the full  screen 
   word  processor.   Immediately above these codes you will observe  your 
   cursor.   You can type as long as you wish,  just as in any other  word 
   processor.    When finished entering text,  you can save it by entering 
   [CONTROL] W, as per the instructions.  

   After  you  become conversant with the codes,  you can replace the  six 
   lines of the above instructions with this one line:      


--------------------------------------------------------------
        Edit Screen Codes: [CONTROL] W to save, ESC to abort
--------------------------------------------------------------

   To  toggle  back and forth between these 2 different Screen  Code  help 
   screens, enter option 6 on the Memo Options Menu.

               6) Toggle Edit Screen Code Help [Now Off]         



                                Appendix J-II:

                        Memo Options:  Activity File

   Each  Master  File record has one Master File memo associated with  it.   
   Each activity record now has one Activity memo also.

   Why two sets of memos?   Prior to version 2.646,  this program had only 
   Master File memos, not any activity memos.  All activity records shared 
   one  common  Master File memo and could access that one memo  from  any 
   activity  record created in the future.   Let's say,  for example,  you 
   established  a  Master  File record for "UTR399" and  then  imported  a 
   10,000  character  proposal  into the Master File  memo  for  "UTR399".   
   Later on,  as you created many activity records for "UTR399", you could 
   view  the  large  proposal that you had originally  imported  into  the 
   Master File memo from ANY activity that you had created for "UTR399".


                  Memo options accessible from the Activity File:

   From  the Activity File you can access two memos for any  one  activity 
   record:   the  ONE Master File memo that all activities for one  Master 
   File  record  share together;  and the UNIQUE activity memo  that  each 
   activity  record has,  regardless of how many activities any one Master 
   record has.


                  -----  Activity File:  Add option  -----

   Every  time  you  add a record in the Add option,  you will  see  these 
   options available to you on the bottom of the screen:


    -----------------------------------------------------------------------
          Enter "1" to ignore this entry;  enter F2 for Activity Memo       |
                                                                            | 
                F4 for Master File Memo, any other key to continue          |
    -------------------------------------------------------------------------

   If  you  enter  'F2',  you  will branch to the  unique  memo  for  this 
   activity.   If you enter 'F4',  you will branch to the Master File Memo 
   that ALL activities for this company share in common.  The Memo Options 
   Menu looks that same for both.  If you look close, after you enter 'F2' 
   you will see this on the bottom of the Memo Options Menu:

                   R)  Return to Activity record



   If you enter 'F4',  you will see this Return statement on the bottom of 
   the Memo Options Menu:

                   R)  Return to Master File record

   If  you  are not sure whether you are in the Master  or  Activity  file 
   memo,  the Return statement on the bottom of the Memo Options Menu will 
   tell you.



                  -----  Activity File:  Get option  -----

   Your  access  to memos at the Add option is similar to the Get  screen.   
   Once  you  enter the Get option from the Activity File,  you  will  see 
   these commands on the bottom of your screen:


    ------------------------------------------------------------------------
          ENTER N FOR NEXT, P FOR PREVIOUS             F2  Activity Memo    |
RETURN Exit   S FOR SEARCH, M FOR MORE COMMANDS                             |
    ------------------------------------------------------------------------


   Again,  as in the activity Add option,  entering 'F2' will take you  to 
   the memo unique to this activity. 


                                 Appendix K:
        Printit v3.5, Print functions provided in memos and VIEW.TXT
   [Note:  The  documentation below is supplied by the author of the print 
   functions used in  memo and VIEW.TXT,  Jack A.  Orman.    The  'Running 
   PRINTIT'  instructions can be used for printing an external file,  such 
   as SERVICE.DOC.] 
                  PRINTIT v3.5, Copr. 1987 by Jack A. Orman 
                         Armada Sound Lab, Box 858
                         Southaven, MS  38671

   This special version of PRINTIT was written for exclusive  distribution 
   with   SERVICE PLUS [TM]  by  Paul  Sax  of  ACS  Consultants.   It  is 
   not to be distributed except as part of SERVICE PLUS [TM] and must  not 
   be   altered  in  any manner.    PRINTIT   v3.1    is    a   standalone  
   version    for   shareware  distribution  and  is  available  on   many 
   commercial BBSs or directly from the author at the above address.

                               Running PRINTIT

   The  proper  format  to  use this program to print an ASCII file is  to 
   enter   the  program  name  on the command line followed by a space and 
   then the name of the file to be printed. Example:

                          PRINT35 filename <ENTER>

   The  filename  can  be  any  legitimate MS-DOS name including  optional 
   drive or path designations.  If the file cannot  be  found,  a  message 
   will  appear  on the screen briefly and then it will return to DOS.  If 
   the file can be found,  a window will open and you will be prompted  to 
   enter the following information:

    Top Margin      default= 5
    Bottom Margin   default= 5
    Lines/page      default=56
    Left Margin     default= 2
    Number pages    0= no numbers
    Header String   <ENTER>= no header

   Hitting  ENTER  at any menu selection will use the default values.  The 
   header  string is limited to 48 characters  and  the  current  date  is 
   automatically printed at the end of the header.

   Most  printers  default  to  a  6 line per inch vertical spacing  which 
   gives  66 total lines per page  on  a  standard  8  1/2  by  11  sheet.  
   Therefore,   the  top margin + bottom margin + Lines/page must equal 66 
   for the printout to be produced in the proper format.  For 8 lines  per 
   inch spacing, 5 + 5 + 78  would be good starting values.

   Make certain that the printer is powered up and on-line before  running 
   this  program  to avoid hanging up the system. No checks are performed
   to test printer readiness.

   PRINTIT   is  furnished  without  liability or guarantee of fitness and 
   suitability for any  specific  purpose.   It  is  up  to  the  user  to 
   determine appropriateness for each application.
                        Jack A. Orman      11/01/1987


                                 Appendix L:
                  Create your own on-line Help/Data Screen!

   This  option allows you to define your own industry-specific  Help/Data  
   screen  and  then  view it anytime throughout the program  by  entering 
   'F1'.  

   Some  applications require that you have detailed lists or codes nearby 
   as you do data entry into the program.  This would be particularly true 
   if  you  are trying to enter codes specific to your industry  into  the 
   Comments field of the Master or Activity records.

   This  Help/Data  screen  can  contain a few entries  or  up  to  15,000  
   characters.  You can either input this industry specific information at 
   the  keyboard or,  if already typed,  import an external text  file  in 
   place of your manual typing.

   Observe this option on the Main Program Menu:

             6)  Create an on-line Help/Data screen  [ now Off] 

   After you select '6', you will then see this menu:

   -----------------------------------------------------------------------    
                                                                         | 
                               Memo Options Menu                         | 
                                ===============                          | 
            ----------------------------------------------------------     
            |              Monday, November 9, 1987                  |     
            ----------------------------------------------------------     
            |       1)  Edit the existing memo or create a new one   |     
            |       2)  Output the memo to a text file               |     
            |       3)  Input a text file into this memo             |     
            |              [overwrite existing memo]                 |     
            |       4)  Input a text file into this memo             |     
            |              [append to existing memo]                 |     
            |  5)  Set Left\Right Margins:          5            75  |     
            |       6)  Toggle Edit Screen Code Help   [Now On ]     |     
            |       7)  Print options  [Printit v|.5 [TM]]           |     
            |       8)  Activate Help\Data option      [Now On ]     |     
            |       R)  Return to the Main Program Menu              |     
            ----------------------------------------------------------     
                                                                         | 
                  [Current character length of this memo = 0 ]           | 
                                                                         | 
   ----------------------------------------------------------------------| 
    
      Note   that  this  menu is similar in function to the one  described  
   in Appendix J,   Memo Options,   with one exception:  at this menu, you 
   have  option 8.   This allows you to turn 'On' or 'Off'  the  Help/Data 
   screen.

   The  memo you create here is accessible throughout the  entire  program 
   just by entering the 'F1' function key! 


                                 Appendix M:
                           Automatic data back-up

   As  you exit the program,  you will be asked if you wish to back up all 
   of your data.   If you elect to do so,  the program will take all  data 
   and memo files, place them into one archived file, and compress them.

                                                                           
                          Dialogue from the program:
                 [assuming that today's date was November 9]                                
                                                                           
                                  Screen 1:

   ------------------------------------------------------------------------
   The  program will create one archive file containing all of your  data, |
   and  place it onto a backup disk in the disk drive of your choice.   To |
   help you identify the latest back up, the date is automatically  formed |
   as part of the title.                                               
                                                                              
   Enter the disk drive where your back up disk is located: 
   [Please include a colon following the letter, as in 'A:' or 'B:'] 
                                                                           
                                                                           |
                                   A:                                      |
                                                                           |
   ----------------------------------------------------------------------- 

                                                                           
                                  Screen 2: 
                                                                           

   ------------------------------------------------------------------------
                      Receiving your data later:                           |
                                                                           |
   All  of  your  data  files will be saved  into  one  archive  file  and |
   'date'stamped'   to   help   you  later in  determining  which  of  the 
   archives  has the most  recent data.   The data today,  for example was 
   stored in this file:   B:1109ACS.ARC              
                                                                           
   The   first  two  letters  stand for the month,   while  the  last  two 
   identify   the   date during the month on which this backup  was  made.   
   Let's  say that you see  '0804ACS.ARC' on your data disk.   This  means 
   month '8',  day '4', or August 4.  If you saw '1123ACS.ARC',  this file 
   was  created  on month '11',   day '23',  or   December   23rd.     The  
   purpose  for this numbering scheme is so that you  can   have  multiple 
   back up files on one disk,  space permitting, and yet tell at a  glance  
   which is the most recent one.                                      
                                                                           
   Later on,  if you need to restore archived data, enter a command in the 
   form:    
                            ARCE B:1109ACS.ARC  /R
   Use  the ARCE command on the archive file with the most current date.  
   After   finishing   this,   make sure that delete all files  ending  in |
   'NTX' BEFORE  you execute SERVICE.EXE.                                  |
                                                                           |  
   ------------------------------------------------------------------------


                                 Appendix M:
                           Automatic data back-up
                                 [continued]


                                                                           
                                  Screen 3:                       

                                                                           
   ------------------------------------------------------------------------
       Execute BACKUP after you have left the program:                     |
                                                                           |
   The program has just created an external batch file,   BACKUP.BAT.  You 
   must  execute  this  after you have left the  program.    The  computer 
   doesn't have enough memory to execute it internally  now.    BACKUP.BAT 
   has   all of the correct commands to backup the proper files  into  the 
   appropriate ARC file,  but you must still execute BACKUP after you have 
   left the program. 
                                                                           |
                                                                           |  
   ------------------------------------------------------------------------  





                                Appendix N

                       User Beware -  Caveat Cliente !

                         Tips for database survival:

   Steps to maintain your sanity and the high level of performance of this 
   program:

   1)  Back up your data periodically.   Using the Automatic backup option 
   contained  in  this  program,  you are guaranteed restoring  your  data 
   should the operating system or hard drive fail.   For more  information 
   on this process, see:

                              Appendix M:
            Automatic Data Back-up upon exiting the program

   2)   Adopt  a  strategy  for your backup  disks.   A  simple  two-disk, 
   rotating  procedure will save you grief later if you experience a  hard 
   drive crash.  

   Format  two disks and label them 'Backup 1' and 'Backup  2'.   Place  a 
   write-protect  tab  on 'Backup 2' and put that disk into your  software 
   vault.   Use  the other disk,  'Backup 1',  for your routine  automatic 
   backups.   Periodically,  examine that disk with a 'DIR' command to see 
   if it is filling up with your data. 
       
   You  could  make a mental note that the backup disk  WITHOUT  a  write-
   protect tab is the 'Production Backup Disk'.  As it becomes full, place 
   a  write-protect  tab on that disk and put it into the software  vault.  
   Take  the  disk that had the write-protect tab  and  remove  it.   Then 
   reformat  that disk and begin using it as the 'Production Backup Disk'.  
   You  need not keep any elaborate lists of what data is on  which  disk.  
   As long as you see a disk WITH a write protect-tab,  you will know that 
   this  one belongs in the software vault.   The disk WITHOUT the  write-
   protect tab is the 'Production Backup Disk'.  

   The  data,  by the way,  is squeezed together on each date on which you 
   make a backup.   If,  for example,  you backed up data on September 15, 
   1986,   then  you  would  observe  this  file  on  your  backup   disk:  
   0915ACS.ARC.  The '09' reflects the month of the backup, while the '15' 
   shows you the date.   'ACS' is my company name,  while 'ARC' shows that 
   this  is an Archive file.   The program does not perform an incremental 
   backup.  Every 'ARC' file is a self-contained image of ALL the progam's 
   data on that date.  Why are multiple backups necessary?  Experience has 
   shown  that when a hard drive goes down,  its' controller is often  bad 
   PRIOR to the last backup.   If this happens, the most recent backup may 
   be  corrupted and you would then be forced to use the backup  prior  to 
   that one.  


   3)   Invoke  FREEUP.BAT  every time you start or reboot  the  operating 
   system.   This  batch file is created automatically the first time  you 
   bring up the program.  It frees about 10,000 characters of memory to be 
   used  in the 'internal buffer' area.   Every time you bring up  SERVICE 
   PLUS [TM],  the program checks it's 'internal buffer' to see if it  has 
   dropped  below 60,000 characters.   If so,  it issues an error  message 
   asking you to remove all memory resident programs and to run 'FREEUP'. 

   You  can  execute FREEUP.BAT from the subdirectory where  SERVICE  PLUS 
   [TM] is located.  

   4)   Anticipate  hard drive problems.   If a bad sector exists on  your 
   hard  drive,  the  operating  system  has  no  way  of  avoiding  doing 
   read/write  to  the corrupted area.   Any  database  program  will,  by 
   definition,  access much data during the execution of its main program.  
   If  a bad sector resides on your hard drive,  the operating system  may 
   periodically  and  at  random  write to  that  area.   Corrupted  data, 
   indexes, and memory files often come from this one cause.  

   A  number of utilities exist that will test every sector on  your  hard 
   drive  for  corruption.   Once identified,  those sectors are  'marked' 
   inactive  in the directory and will not be accessed anymore.   The best 
   among this group is Peter Norton's [TM,  Peter Norton Computing,  Inc.]  
   DISKTEST.COM.   You will find this utility when you purchase his Norton 
   Utilities - Advanced Edition [TM,  Peter Norton Computing,  Inc.].  Any 
   active  database user should use this utility at least every month,  if 
   not every week.

   Let's say your hard drive is C:.   The syntax to check for bad  sectors 
   is:
                              DISKTEST C:

   If the utility asks you for 'Disk test or File test', indicate that you 
   want  a  'Disk test' by entering a 'D'.    [note that  DISKTEST.COM  is 
   sometimes identified by its' short name of DT.COM.]

   For  more  information on this product,  call Peter  Norton  Computing, 
   Inc., at:

                            End User Sales: 

                            (800) 365-1010
                            (213) 319-2030

                          FAX (213) 458-2048

   5)   Do  not use any 'front end' program that branches to SERVICE  PLUS 
   [TM]  and then returns back once SERVICE PLUS [TM] is  finished.   This 
   type of program resides in memory.   It may conflict with SERVICE  PLUS 
   [TM] and it will reduce the amount of memory available for SERVICE PLUS 
   [TM].  An example of a 'front end' program is AUTOMENU [TM].


   6)    Maintain  a clean File Allocation Table [FAT] in your  directory.  
   The  operating system is continually opening and closing files.   In  a 
   large database program,  this activity is intensified.   If you restart 
   the  computer  while  the operating system  has  some  files  open,  it 
   'forgets'  to close them.   These 'forgotten' file closings can cause a 
   problem when you later continue the cycle of opening and closing files.  
   The command to 'close' these files is:

                               CHKDSK /F    

   Good directory and FAT hygiene dictates that you do this weekly if  you 
   use a database program often.


                     Definition of 'System Error':

   An  SERVICE PLUS [TM] System Error occurs when,  in the course of running 
   the program, you see this error on the top right of the screen:

                         Error Message (Q/A/I)

   'Q' means to Quit to DOS and close all the files, 'A' equals abort, and 
   'I' is to Ignore error.  NEVER, NEVER enter 'I'.

             Procedure for dealing with a 'System Error':

   First,  enter an 'Q' to quit.   This will return you to the drive where 
   the program is located.   Second, delete the 'DEFAULT5.MEM' file.  This 
   will  clear  out all memory variables and will  force  re-installation.  
   Third,  delete  all files ending 'NTX'.   These are indexes and will be 
   rebuilt  automatically when the program senses that they  are  missing.  
   Fourth,  make  sure that no memory resident or 'front end' programs are 
   loaded into memory.   If they are,  remove them from the 'AUTOEXEC.BAT' 
   file and re-start the computer.

   Once these four steps are performed,  restart SERVICE.EXE.  You will be 
   greeted  with  the  Installation menu.   Follow its'  instructions  and 
   restart the computer as per the instructions of the Installation  menu.  
   After  bringing up SERVICE.EXE the second time,  the program will sense 
   that  the indexes are missing and will,  accordingly,  rebuild  all  of 
   them.   After  you  arrive at the Main Program Menu,  select Option  2, 
   Other  Options.   Once  at  this menu,  select option 4 to  Repack  and 
   Reindex files. 

   These  steps will complete the 'System Error' recovery  procedure.   If 
   your  data is corrupted at this point,  then you must restore the  most 
   recent backup as per:

                           Appendix M:
         Automatic Data Back-up upon exiting the program


                                 Appendix O
               Using the CALLBACK feature in the Activity file


   In  the early development of this program,  some users would go through 
   this process to create a daily follow up list:

   1)  Create  'Today's Appointments' report from the Appointments Menu.
   2)  Place  'Today's Appointments' next to the computer.
   3)  Go to the Activity file, ADD option and add one activity record for 
   the name of every ID on the 'Today's Appointments' printout.


   After a while, my customers began asking me to streamline this process.  
   From these requests came the CALLBACK feature.  

   Let's  say  that you had committed to 15 callbacks on a  given  Monday. 
   Instead  of having a printed 'Today's Appointments' report in front  of 
   you,  the program will automatically 'stack up' those 15 callbacks  [or 
   any  appointment/commitment]  behind the CALLBACK  option.    Once  you 
   select  this  feature,  the program go into a loop 15 times  until  all 
   callbacks are processed. 

   This loop consists of:

   1)   Identifying  the name of the current ID being  processed  in  this  
   'stack' of 15.
   2)   Displaying  the  date  when the original  commitment  for  today's 
   callback/commitment was made in a prior activity record .
   3)  Showing the comments entered in the prior activity record that  had 
   created today's callback/appointment.
   4)   Creating a new activity record for THAT ID as though you had  gone 
   into the ADD option for the activity file.  

   Observe  that if you are unsuccessful in competing the callback and you 
   identify that you wish to 'ignore this record',  the program will  keep 
   that  callback in its 'stack' until you have successfully processed  it 
   today.

   If you want to go to lunch, you can abort the processing of the 'stack' 
   of 15 at any time.   Once you leave this CALLBACK routine,  the program 
   remembers  how  many were in the original 'stack' [15],  and  how  many 
   remain unprocessed.   After lunch, if you re-enter the CALLBACK option, 
   the program will remember where in the 'stack' you left off.



                                 Appendix P: 
              Consolidating Multiple Categories in your reports   

   As you become knowledgeable in the use of the Category function, you'll 
   notice that the Select,  Move,  Delete,  and Undelete Category' feature 
   [Main  Program Menu,  option 3] allows you to mix either all categories 
   together  or  split  out any one.   Once you  have  selected  a  single 
   category,  then  all  functions in the  program--reports,  labels,  new 
   activities--are  accessible to only those records with your  designated 
   category.   In  other words,  once a category is  selected,  ALL  other 
   records in the program will disappear until you select another category 
   or elected to 'jumble' all categories together.

   Over  time,  users  have  asked  for  a  way  to  consolidate  multiple 
   categories  in  their reports,  though not necessarily all at the  same 
   time.   For those users wanting SELECTIVE consolidation of  categories, 
   this  feature  is available in the 'Service Call and Activity  Reports' 
   menu [Option 5, Master File Menu].

   Once in this reports menu, observe option #5, 

       5)  Category Consolidation Feature:   [Consolidation OFF]

      After you have selected option 5, you will see this screen:
    
   =========================================================================|
                        Category Consolidation:                             |
                                                                            |
  At this menu, you can base your reports on either a range of categories or 
  a list of non-continuous individual categories .   For example, if you had
  selected a range, then you could combine all records from categories 1
  through 50.  You can select any size range, from a range of 50 to a range
  of 50,000 categories.   If you had selected to input a non-continuous list
  of categories, then you could enter up to 200 categories for consolidation,
  such as to combine categories 10, 11, 15, and 20.

  Enter your selection now:  '1' will allow you to select a range of        |
  categories, '2' will be for a non-continuous list of categories.          |
                                                                            |
    ========================================================================

   This menu gives you the choice of selecting your consolidation based on 
   ONE range of categories or on a list of up to 200 non-continuous  ones.  
   An  example  of range would be those records that fall in the range  of 
   category  '200'  to category '400'.   With the  'range'  option,  those 
   categories are consecutive.   When you select a 'non-continuous  list', 
   they can be in any random order you want, up to 200 of them.

   After  you have selected your option,  the program will prompt you  for 
   the  data it needs to continue the consolidation.   Once you return  to 
   the  'Service  Call and Activity Reports' menu,  any report option  you 
   then select will be consolidated as per your request.   
    
   Remember  that this category 'Consolidation' feature works only in  the 
   'Service Call and Activity Reports' menu.


                                 Appendix Q:    
                 Assigning priorities to Master File records

   As  you  accumulate  Master  File  records,   you'll  see  that  beyond 
   scheduling  future  appointments and splitting out data by  categories, 
   you may also want to assign individual priorities to some or all of the 
   Master  File  records.   This  feature gives  you  the  flexibility  of 
   assigning  a  priority code of your choice,  from 1 to  9999,  to  each 
   Master File.  The default is '0', and you can change this value anytime 
   in the Master File just by going back into the Edit mode.  

   Your  assignment  is  arbitrary and can be all  inclusive  or  mutually 
   exclusive.    That  is,  different  Master File records can  share  one 
   priority code or, if you wish, each Master File record can have its own 
   code.

   You  assign  this  code in the lower right corner of each  Master  File 
   record.  Observe this line on the Add or Get screen, Master File:
      
                              Priority, if any: 


   You enter your code, if any, to the right of 'Priority'.


   To  extract  out those records to which you have  assigned  a  priority 
   code, observe option 4 on the Master File Menu:  

                   4)  Appointments and List of Priorities




                                 Appendix Q:    
                                 [continued]

   Once you select this option, you'll see this Appointments menu:


   ----------------------------------------------------------------------
    -------Maintenance and Service Call Activity Tracking System-----    |
                                                                         |
                               Appointments Menu                         |
                            ---------------------
                            | Please Choose One |
                            ---------------------

 1)  List out all prior Appointments
     (Occurring  prior to today)
 2)  Produce today's Appointments
 3)  Print all future Appointments, excluding today's
 4)  Print all future Appointments, including today's
 5)  Display a graphics image of any 14 day period of  Appointments
 6)  Select your start/stop date for Appointments, then print out
 7)  Similar to option 6, but identifies only UNPROCESSED Appointments
                  [Used with CALLBACK option, Activity Menu]
 8)  List of Priorities, if any [by date]
 9)  Show tomorrow's Appointments

 H)  Help Screen for Appointments Menu                                   |
                                                                         |
 R)  Return to prior menu                                                |    
    ---------------------------------------------------------------------


   Option 8 gives you the flexibility of selecting those records from  the  
   Master File to which you have assigned a priority code.   Also, you can 
   indicate  that date range,  if any,  for your selection of  priorities.   
   This  date range refers to that date when each prioritized Master  File 
   record was first ENTERED into the system.



                                 Appendix R
                           Act Now! [TM] feature:

   Act  Now!  [TM]  is a new feature that creates an activity  record,  if 
   requested, directly from the Master File Add function.    

   The  need  for  this has become clear in feedback  from  my  customers.  
   Prior  to version 2.645,  all Master File records were added  into  the 
   Master  file  through the Master File Add option.   Once in the  Master 
   file  file,  you could then add an unlimited number of activities  into 
   the  Activity file for any one record in the Master File.  To  add  the 
   first activity record,  though, required that you leave the Master file 
   Add  function,  exit the Master File,  and then go to the Activity  Add 
   screen.

   Over time,  users began mentioning how cumbersome this process was when 
   that  were  adding  many  Master File records,  each  with  an  initial 
   activity.   The  reason  these functions are separate is because  of  a 
   programming  practice  used  throughout  SERVICE  PLUS  [TM],   modular 
   programming.  These modules or 'blocks' of program code account for the 
   discrete functionality of each menu and screen.

   In any case,  with Act Now!  [TM],  you can now add an initial activity 
   record for a new Master File record WITHOUT LEAVING the Master File Add 
   option!   Observe  below the options that appear on the bottom  of  the 
   screen when you are adding a Master File record:


    -----------------------------------------------------------------------
     '1' to go to next record;   '2' to create a new memo for this record, |
        Enter a '3' to 'ACT NOW!' or Activity Now, 1st activity record     |
    -----------------------------------------------------------------------

                                                                           
   If you enter '3',  Act Now!  [TM] will immediately branch to the  first 
   activity  record.   You would then be presented with the blank activity 
   screen  for  the Primary ID that you had just entered into  the  Master 
   File. 

   After you finish entering the activity data,  you will then branch back 
   AUTOMATICALLY to the Master file Add function.


                                 Appendix S:
                           Create your own fields

                 Entering codes specific to your application 
               and then creating reports based on those codes:


                    ----- Defining your own codes: -----

   This  feature  gives  you the ability to enter codes specific  to  your 
   industry  or  application  and then create reports  on  those  specific 
   codes.   These codes are then entered into COMMENT1 or COMMENT2 of each 
   record in the Master file.  

   Let's say,  for example, that you have an inventory of unsold homes and 
   that you had identified these criteria in your real estate prospects:

   1)  Size of home wanted
   2)  Amount prospect wants to spend on home
   3)  Preference, if any, for location, by zip or postal code
   4)  Number of floors of home desired


   Let's say further that you had developed these codes:

                       1)  SIZE=1500SF
                           SIZE=2000SF
                           SIZE=2500SF
                           SIZE=3000SF

   This first criteria shows the size home, in square feet, that the buyer 
   is looking for.

                       2)  AMT=100K
                           AMT=125K
                           AMT=150K
                           AMT=200K

   Criteria 2 shows the amount, in thousands of dollars, that the buyer is 
   willing to spend.

                       3)  LOC=75081
                           LOC=75082
                           LOC=75083
                           LOC=75084

   Criteria 3 shows the location preference,  by zip or postal code,  that 
   your buyer has.

               4)  FLOORS=1       < one floor, no basement
                   FLOORS=1A      < one floor, one basement
                   FLOORS=2       < 2 floors, no basement
                   FLOORS=2A      < 2 floors, one basement


   This criteria tells you the number of floors preference,  if any,  that 
   this  buyer has.   You could then set up records for the houses in  the 
   Master, file along with their associated codes.

   Observe  that as you develop codes for all buyers,  you do NOT have  to 
   use  every  code for every buyer.   If one buyer has no  location  code 
   preference,  then omit this criteria.  It does matter, though, that you 
   enter  the  codes  CONSISTENTLY  into  the  Master  file,  COMMENT1  or 
   COMMENT2.  Otherwise, you will not be able to extract them later.


                       ----- Selecting Reports: -----

   Once you select option 3 from the Main Program Menu,  you will see this 
   Reports menu:


   ---------------------------------------------------------------------
                                                                       |  
    Start Date      Service Call and Activity Reports       End Date   |    
                                                                       |
    01/01/1901             Please Choose one         12/12/2999     
                      
                                                                          
               1)  Do report from the Master file                    
               2)  Generate ONE report from the Activity file             
               3)  Set start/stop date of these Reports                   
               4)  Select out any comment for report[s]
                            [no criteria selected]                        
               5)  Category Consolidation Feature:      [now OFF]
                                                                          
               H)  Help for reports                                       
                                                                          
               R)  Return to prior menu                                   
                                                                       |  
              Category of Maintenance [defaults to ALL]: ALL           |    
                                                                       |
   ---------------------------------------------------------------------

                                                                          
   Option  4 will allow you to select out any code or combination of codes 
   from the COMMENTS fields.   When you select this option, you will first 
   see this menu:



   ---------------------------------------------------------------------
                           Exclusivity of Selection:                   |  
                                                                       |  
                                                                       |  
                             False = All Inclusive                        
           Record included if meeting at least ONE search criteria.       
                                                                          
                                                                          
                           True = Mutually Exclusive                      
     Record included only if meeting ALL search criteria at the same time.
                                                                          
                                                                       |  
                                   Enter T or F : [F]                  |  
                                                                       |
   ---------------------------------------------------------------------
                                                                          

   In this menu,  "Exclusivity of Selection",  you must select whether you 
   want  only those records to be selected that have all sets of codes  in 
   every record or select records regardless of the number of matches made 
   per  record,  as long as  at least one match is made in any one  record 
   that is selected.

   True  [or T] means all matches have to be made in any one record for it 
   to be selected.   False [or F] means that as long as one match is  made 
   in that record, it will be selected.

   After  making  your selection at this "Exclusivity of Selection"  menu, 
   you can make your specific selections at this menu:

   ---------------------------------------------------------------------
                  Enter those values you wish to select out.           |  
         Any field left blank will include all records in that field.  |  
                                                                       |  
                  ___________________   Third ID
                  ___________________   Second ID
           __________________________   Primary ID 



        _____________________________   [comments, first selection]       
        _____________________________   [comments, second selection]      
        _____________________________   [comments, third selection]    |  
        _____________________________   [comments, fourth selection]   |  
                                                                       |
                 [COMMENT1 and COMMENT2 are searched together]         |
                                                                       |
   ---------------------------------------------------------------------
                                                                          
   At  this screen,  you can input up to 4 sets of codes or phrases.   You 
   can enter any word, phrase, or code on which to base your selection. If 
   left  blank,  all records will be printed out.   If you make  an  entry 
   there, the program will search through the comments and select out only 
   those records that have your word or phrase in the comments section.

   You can also select by any combination of Primary,  Secondary, or Third 
   ID.

   [Note  that  you  can have up to 4 different codes or  phrases  entered  
   here and all records will be pulled which have any one of them  or  any 
   combination of them].


   In this real estate example,  let's say that the following house became 
   available on the market:
    
             2000  square  feet,   $125,000  price,  located  in 
             zip/postal code '75083, and has two floors, without 
             a basement. 

    These codes would then correspond to that information.

                                    SIZE=2000SF
                                     AMT=125K
                                     LOC=75083
                                     FLOORS=2   


   If you entered those values or codes into the 'comments' entries in the 
   above  menu and set  "Exclusivity of Selection" to  True,  the  program 
   would  then select out those records in the Master file that  contained 
   these criteria.      

    
   ----- Accessing  this logic from the word  processor/merge  Menu:-----

   Observe this option on the Main Program Menu:

           4)  Output to external word processor/merge/data file:

   Once you select that option, you will see this menu:

   ---------------------------------------------------------------------
                                                                       |  
                     Output for word processing/merge Menu             |    
                                                                       |
                          Thursday, April 21, 1988                        
                  
                   1)  Select output criteria for merge file              
                           [no criteria selected]                         
                   2)  Output records to Wordstar/Mailmerge[TM]           
                   3)  Output records to WordPerfect[TM]                  
                   4)  Output records to dBASE III [TM]                |     
                                                                       |  
                                                                       |  
                   R)  Return to prior menu                            |  
   ---------------------------------------------------------------------
                                                                          
   Selection 1 contains the same logic as the reports menu.   That is, you 
   can select records for output to your word processor based on codes you 
   entered into the comments fields in the Master file.


            ----- Creating your own Help screen for these codes: -----

   Instead  of  writing down the codes for your  specific  application,  a 
   place  exists  in  the program to contain that  data.   Also,  you  can 
   display  those codes and their definitions at any time  throughout  the 
   program just by entering one function key!

   This  industry-specific Help screen can have up to 15,000 characters in 
   it.   To  see  how this works,  examine:

                                 Appendix L
             Create your own industry-specific Help/Data Screen



                                 Appendix T
            Logic behind Comments/1st ID/2nd ID/3rd ID selection

   This  feature  will  SELECT out data for you using  a  powerful  search 
   criteria.  This function should not be confused with options 3 and 4 on 
   the 'Search Through Data' menu, which only DISPLAYS data to you.

   You can select out records from three key locations in the program with 
   this powerful selection criteria.  
                                                                             
   The mechanics of how you do this are explained in:

                                    Appendix S:
                              Create your own fields

   In  summary and recapitulating Appendix S,   you go through a two  step 
   process  when you access this selection logic.   First,  you respond to 
   this 'Exclusivity of Selection' menu:

   ---------------------------------------------------------------------
                           Exclusivity of Selection:                   |  
                                                                       |  
                                                                       |  
                             False = All Inclusive                        
           Record included if meeting at least ONE search criteria.       
                                                                          
                           True = Mutually Exclusive                      
     Record included only if meeting ALL search criteria at the same time.
                                                                          
                                                                       |  
                                   Enter T or F : [F]                  |  
                                                                       |
   ---------------------------------------------------------------------

   Once you do that, you are then offered these selection choices:

   ---------------------------------------------------------------------
                  Enter those values you wish to select out.           |  
         Any field left blank will include all records in that field.  |  
                                                                       |  
                  ___________________   Third ID
                  ___________________   Second ID
           __________________________   Primary ID 



        _____________________________   [comments, first selection]       
        _____________________________   [comments, second selection]      
        _____________________________   [comments, third selection]    |  
        _____________________________   [comments, fourth selection]   |  
                                                                       |
                 [COMMENT1 and COMMENT2 are searched together]         |
                                                                       |
   ---------------------------------------------------------------------


You  can  select any one criteria or any number of them in  combination  with 
each  other.   The  'Comments' field is ideal for entering industry  specific 
code in your application, as explained in Appendix S, Create your own fields.


   This powerful logical selection feature is offered in three locations:

                        -----  First location:  -----

                Service Call and Activity Reports, option 4:
                       
                    4)  Select by any Comment for reports
                           [no criteria selected]                         
        

                       -----  Second location:  -----

                   [accessed from the Main Program Menu:]   
            B)  Output to external word processor/merge/data file   
                                                                           
             Output for word processing/merge Menu, selection 1:   
                 
                   1)  Select output criteria for merge file             
                           [no criteria selected]                        
                                                                         

                        -----  Third location:  -----

                   [accessed from the Main Program Menu:]   
                                 selection 3  

                      Category Options Menu, option 5:              

                   5)  Change category based on COMMENTS:      
            [merge multiple categories into 1 with this criteria]        


   Regardless  of where you access this SELECTION criteria,  the logic  is 
   that  same behind each of these four menus.   With it,  you have nearly 
   unlimited versatility in selecting out data for  reports.


                                 Appendix U:
            Strategy for Relating Customers to records in either
                        the Master or Activity files:

   Let's say that you are trying to relate customers to records in  either 
   the Master of Activity files. One strategy is to assign a unique number 
   to  each customer and then enter that number in the comments section of 
   the applicable records.  The comment could be of the form:

                               CUST=1005

   Here you are saying that this is customer '1005'.   Once that number is 
   entered,  you  can  then retrieve ALL records entered into the  program 
   with  that number.   The mechanics of the selection criteria  logic  is 
   outlined in these appendices:

   Create your own fields.......................................Appendix S
    [track and retrieve data using your unique industry-specific codes!]

   Logic behind Comments/1st ID/2nd ID/3rd ID selection.........Appendix T
     [select out records in 3 different places in program]

   You  could build the customer list by entering all customers into their 
   unique category in the Master file in this format:

                              Primary ID:
                          Customer ID Number

                             Secondary ID:
                               Last Name

                               Third ID:
                        First Name of Customer

                             COMMENTS1/2:
                          Address of customer

   If you enter the customer data in this format, then all cross reference 
   functions  of the program will allow you to check either first or  last 
   name  against his or her Customer ID.   In particular,  when you are in 
   the  'Search  through data' menu,  option 1 will  cross  reference  all 
   three.

   By  entering all customers as,  say,  category '100',  you  could  then 
   select  out all category 100 records on the Select Category  Menu.   If 
   you  want  the list of customers and their IDs available to you at  all 
   times,  you  can load that information into the Industry Specific  Help 
   screen.   Once done,  all of their names and customers numbers will  be 
   available  to you by entering 'F1'.   For a detailed explanation of how 
   you would do this, see:

   Create your own industry-specific Help/Data Screen...........Appendix L

   Note  that  the  data available to you in the  Industry  Specific  Help 
   screen could be created from reports that SERVICE PLUS [TM] will create 
   for you. 


                                 Appendix V:
      Strategy for creating Service Tickets, Work Orders,  or Invoices
                       from memos in the Activity file 
     
                                  Overview:

   Using  the  Memos  available to you in each activity  record,  you  can 
   create   printed  Service  Tickets  or  Invoices  for  your   customers 
   signatures.   Later,  you  can recall and review any Service Ticket  or 
   Invoice  or  group  of Service Tickets  from  the  historical  activity 
   records.

                                 == Procedures ==

   Using your word processor,  create a Service Ticket or Invoice Template 
   that contains the skeleton of your Service Ticket or Invoice.  Included 
   in  this  Template should be a signature block for  your  customer,  if 
   required  in your business.   All information specific to that  Service 
   Call  should  in  a 'fill-in-the-blanks' format that you  can  complete 
   later once you create the activity memo.

   Once  complete,  convert this Service Ticket or Invoice Template to  an 
   ASCII file if it is not already in this format. 

   Move  the  Service  Ticket  or  Invoice  Template  into  the   \SERVICE 
   subdirectory.   Let's  say  that  you have assigned this  name  to  it:  
   'SCTMP', for Service Ticket Template.

   When  you  create a new Activity record,  go to the Memo Options  menu.  
   Observe option 3: 

                    3)  Input a Text file into this memo.

   After you select this option,  enter 'SCTMP' as the text file that  you 
   wish to Input into this memo.  Once this operation is complete, observe 
   option 1:

               1)  Edit the existing memo or create a new one

   Select this option and you will then see your Service Ticket or Invoice 
   Template  spread  out  before  you.    Using the PgUp  and  PgDn  keys, 
   navigate around this memo and fill in the blanks of this Service Ticket 
   or Invoice Template until you are satisfied that it is complete.

   Once  the Service Ticket or Invoice Template in this memo is  finished, 
   exit  the  memo  with CONTROL-W.   These  keystrokes  will  save  those 
   additions that you have added to the Service Ticket or Invoice Template 
   in this specific memo. 

   After  saving  your additions to the memo,  observe this option on  the 
   Memo Options Menu:

                              7)  Print options

   Select  option  7 to then print out this completed  Service  Ticket  or 
   Invoice.


                                 Appendix W:
                 Methodology for tracking units of inventory
              [using activity records to reflect unit changes]

                                  Overview:

   SERVICE  PLUS [TM] can track your inventory and will display a trail of 
   activities  that  show  your  starting  values,   any  additions,   and 
   subsequent depletions.

   By default,  SERVICE PLUS [TM] will summarize Master File Billings from 
   individual billing entries made into the activity file.   By using  the 
   custom options, you can change the summary from dollars to units.   

                               Implementation:

   First, go the Master File Menu.  Observe option 3:

                           3 for Billings reports.  

   Once you select option 3, you will arrive at the Billings Summary Menu.  
   At this Menu, enter option 3:

            3)   Summarize and Post all Billings from the  Activity  file     

   Upon select the Summarizing option, you will then see this test data:
                                                                            
   ----------------------------------------------------------------------   
        All detail Billings records from the Activity File               |  
                                                                         |  
STW366, Category is : 1                                                  |  
 $ 350.00, occurred on 08/23/1984                                           
 $ 55.00, occurred on 05/26/1983                                            
 $ 35.00, occurred on 12/30/1982                                            
Total Billings=  $ 440.00                                                   
                                                                            
WRX332, Category is : 1                                                     
 $ 850.00, occurred on 06/28/1984                                           
 $ 50.00, occurred on 05/28/1984                                            
 $ 450.00, occurred on 01/02/1983                                           
Total Billings=  $ 1350.00                                                  
                                                                         |  
                                                                         |  
Grand total =   $ 1790.00                                                |  
   ----------------------------------------------------------------------   


   Go  back to the Main Program Menu,  and select the Other Options  Menu.  
   Once there, go to the Custom Options Menu.  Observe option 1:
                                                                            
     1)  Change description of category, title for Billings, style          
         [Select how Billings is presented: Dollars, hours, or blank]       
                                                                               
   When you select option 1, you will see this menu:
                                                                            
   ----------------------------------------------------------------------   
                                                                         |  
           Category of Maintenance                                       |  
                                                                         |  
       Default name for expenses/revenues title (plural), 15 characters     
        (for example: Expenses, Collections, Hours or Revenues)             
 If you input Hours, enter your values in the activity file as              
 decimals, ie 10.75 =10 hours, 45 minutes                                   
                                                                            
       Billings                                                             
                                                                            
 How Billings reports presented:                                            
  [1= dollars, 2=hours, 3=screen displays/report headings left blank]    |  
                                                                         |  
       1                                                                 |  
   -----------------------------------------------------------------------  
                                                                             
                                                                               
   Change 'Billings' to 'Units'.  On the bottom line, change '1' to '3' so 
   that the screen displays and report headings are then left blank.
                                                                               
   After  you  have finished at the Custom Options Menu,  go back  to  the 
   Master  File  Menu.   You will observe that option 3 will have  changed 
   from '3 for Billings reports' to:

                            3 for Units reports.

   Enter option 3 of the Master File Menu and you will see:

             3)  Summarize and Post all Units from the Activity file        

   Once  you  select option 3 to summarize,  you will then see  this  test 
   data:
                                                                         

   ----------------------------------------------------------------------   
        All detail Units records from the Activity File                  |  
                                                                         |  
STW366, Category is : 1                                                  |  
 350.00, occurred on 08/23/1984                                             
 55.00, occurred on 05/26/1983                                              
 35.00, occurred on 12/30/1982                                              
Total Units=  440.00                                                        
                                                                            
WRX332, Category is : 1                                                     
 850.00, occurred on 06/28/1984                                             
 50.00, occurred on 05/28/1984                                              
 450.00, occurred on 01/02/1983                                             
Total Units=  1350.00                                                       
                                                                         |  
                                                                         |  
Grand total =   1790.00                                                  |  
   ----------------------------------------------------------------------   


   If  you  enter  an activity record with a  negative  value,  then  that 
   activity will be deducted from the 'Total Units'.  If you precede  your 
   negative value with a '-', SERVICE PLUS [TM] will correctly deduct that 
   value from the 'Total Units' it displays later.

   In summary, enter all additions to inventory of this item as a positive 
   value.  Withdrawals from inventory should be preceded with a '-'.  

  

```
{% endraw %}

## USER.TXT

{% raw %}
```
                  Public Message to Bulletin Board Users:
-
                   Product overview:  SERVICE PLUS [TM]
    Superb Five Star rating, California Freeware Catalogue, 7th Edition
   =====The Ultimate Maintenance and Service Call Tracking System!=====
 -            
               Invaluable for these businesses or functions:
                     heating/air conditioning repair, 
  electrical maintenance, auto repair, computer/copier rental and repair,
                  any equipment tracking or maintenance, 
     plant preventive maintenance, plumbing,  bus or taxi maintenance,
                  any repair business with a service bay,
         any department that provides product service and support
-        
                          Everything is on-line!
                          Fast search capability
                         Appointments: Ticker File
                    Appointment schedules and graphics
                         Billings/Expense Reports
                        "Layer-in" ability of data
                ALL reports fit into a standard briefcase!
-                      
      Be in control of your Maintenance. This program includes:
                     Appointments, Billings/Expenses, 
         Graphics image of your load of commitments/appointments,
                    Free-form data search, and Reports!  
-                    
with  the ability to customize all screens to reflect the terminology
                      specific to your industry.
-                   
            Can clock and cost each activity in real time.
-      
                 Create an 'Industry-specific' Help screen,
          with up to 15,000 characters of text about your industry
        accessible ANYWHERE in the program with one single keystroke.
             Create Service Tickets, Work Orders,  or Invoices.
-
This program standardizes your Maintenance and Service Call information and  
converts forgotten verbal commitments into a focused,  daily   appointments 
and callback list that nets you extra business!
-   
   [files: MAINTA30.ZIP, MAINTB30.ZIP, MAINTC30.ZIP, MAINTD30.ZIP (doc)]
-   
System requirements and program specifications:
-
Hardware required:
 IBM PC, PC-compatible, or MS-DOS computer
 640 KB memory
 2 floppy drives 
-         
Specifications:
-
 DBASE III [TM, Ashton-Tate Corp] compiled 
            (stand alone product, nothing extra required)
-
 1,000,000,000 records in the Master File
             1,000,000,000 records in the Activity File
                              99,999,999 categories or "layers" of data 
-
```
{% endraw %}

## USER.TXT

{% raw %}
```
                  Public Message to Bulletin Board Users:
-
                   Product overview:  SERVICE PLUS [TM]
    Superb Five Star rating, California Freeware Catalogue, 7th Edition
   =====The Ultimate Maintenance and Service Call Tracking System!=====
 -            
               Invaluable for these businesses or functions:
                     heating/air conditioning repair, 
  electrical maintenance, auto repair, computer/copier rental and repair,
                  any equipment tracking or maintenance, 
     plant preventive maintenance, plumbing,  bus or taxi maintenance,
                  any repair business with a service bay,
         any department that provides product service and support
-        
                          Everything is on-line!
                          Fast search capability
                         Appointments: Ticker File
                    Appointment schedules and graphics
                         Billings/Expense Reports
                        "Layer-in" ability of data
                ALL reports fit into a standard briefcase!
-                      
      Be in control of your Maintenance. This program includes:
                     Appointments, Billings/Expenses, 
         Graphics image of your load of commitments/appointments,
                    Free-form data search, and Reports!  
-                    
with  the ability to customize all screens to reflect the terminology
                      specific to your industry.
-                   
            Can clock and cost each activity in real time.
-      
                 Create an 'Industry-specific' Help screen,
          with up to 15,000 characters of text about your industry
        accessible ANYWHERE in the program with one single keystroke.
             Create Service Tickets, Work Orders,  or Invoices.
-
This program standardizes your Maintenance and Service Call information and  
converts forgotten verbal commitments into a focused,  daily   appointments 
and callback list that nets you extra business!
-   
   [files: MAINTA30.ZIP, MAINTB30.ZIP, MAINTC30.ZIP, MAINTD30.ZIP (doc)]
-   
System requirements and program specifications:
-
Hardware required:
 IBM PC, PC-compatible, or MS-DOS computer
 640 KB memory
 2 floppy drives 
-         
Specifications:
-
 DBASE III [TM, Ashton-Tate Corp] compiled 
            (stand alone product, nothing extra required)
-
 1,000,000,000 records in the Master File
             1,000,000,000 records in the Activity File
                              99,999,999 categories or "layers" of data 
-
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1271

     Volume in drive A has no label
     Directory of A:\

    BRITISH  DOC      1280   5-04-89   3:55p
    FILE1271 TXT       842   7-14-89  10:01a
    GO2      BAT      4480   5-04-89   2:24p
    MAINTC30 ZIP     81154   5-16-89  11:02a
    MAINTD30 ZIP    144062   5-16-89  11:03a
    PKUNZIP  EXE     18208   3-06-89
    UPDATE            4224   4-28-89  10:18a
    USER     TXT      2688   5-13-89  12:07p
            8 file(s)     256938 bytes
                           61440 bytes free
