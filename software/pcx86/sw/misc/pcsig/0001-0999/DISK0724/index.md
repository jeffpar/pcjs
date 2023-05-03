---
layout: page
title: "PC-SIG Diskette Library (Disk #724)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0724/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0724"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COUPON, EZCOUNT, AND XDIR"

    The GROCERY STORE COUPON ORGANIZER SYSTEM keeps track of grocery store
    discount coupons.  Coupons can be added, modified, deleted or just
    browsed through.  There is also a feature to delete all the coupons that
    expire before a user-defined date.
    
    Writers, secretaries, transcribers -- Count the number of words in a
    standard ASCII file.  Bells and whistles are minimal.  It counts words
    and displays how much time the program took to count.
    File Descriptions:
    
    EZREADME      Explains the rules used by EZCOUNT.
    EZCOUNT  DOC  Description of the registered version.
    EZASCII  TST  Sample ASCII file with 1200 words.
    EZWDSTR  TST  Sample WordStar file to test other word counters.
    EZCOUNT  COM  Main program.
    
    XDIR replaces the DOS commands DIR and COPY with enhanced functions, and
    adds a function that DOS forgot -- MOVE.
    
    MOVE a file from place to place in a directory or to a completely
    different directory. XDIR will move it and delete the original. You
    don't have to worry about it.
    
    Put a 65-character comment onto each file. When you copy the file, the
    comments are copied right along with it. You can even rename the file.
    You can't fool XDIR.
    
    This program is great for people who tend to use very cryptic file
    names -- now you can comment these files to remember what they were.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EZCOUNT.DOC

{% raw %}
```
                           WHY YOU NEED EZCOUNT

     1.   Most word counters lack detailed documentation, so you don't 
          know what they count.  For example: Is a hyphenated word counted 
          as one word or two?  How are dashed words counted?  What if they
          bridge two lines?  How are slashed words (e.g., and/or) counted?

     EZCOUNT INCLUDES TEST CASES AND DOCUMENTATION. YOU'LL KNOW WHAT IT COUNTS!


     2.   Even if you figured out what a word counter does, you might 
          not like it.  For example, the program may count hyphenated 
          words as one word; you think they should count as multiple words.  
          With most word counters, the decisions have been made for you.  
          You have no way to tailor a program to your special needs.  

     EZCOUNT IS FLEXIBLE.  YOU CAN OVERRIDE DEFAULTS.


     3.   Many word counters are inconsistent.  For example, they 
          ignore dashes in the middle of a line, leading to an 
          erroneous word count, yet correctly count separate words if 
          the dash occurs at the end of the line.  

     EZCOUNT OPERATES CONSISTENTLY.


     4.   Most word counters operate only on ASCII files.  

     EZCOUNT (REGISTERED VERSION) COUNTS ASCII AND WORDSTAR 3.XX FILES.


     5.   There are no standards for word counting, so word counters 
          differ from each other, subject to the whim of the programmer.  

     EZCOUNT ESTABLISHES STANDARDS BASED ON MANUALS OF STYLE, EDITORS, 
     PUBLISHERS, AND UNIVERSITY PROFESSORS.  


     6.   In summary,

     EZCOUNT IS A FAST, ACCURATE, FLEXIBLE, FULLY-DOCUMENTED WORD 
     COUNTER YOU CAN USE ON WORDSTAR 3.XX and ASCII FILES.  
                               COUNT ON IT!  


     To obtain a registered copy, which counts both WordStar 3.xx and 
     ASCII files and includes a Reference Manual, send $10 to:  

                           Don and Sharyn Conkey
                                 Box 12838
                            Las Vegas, NV 89112

```
{% endraw %}

## FILES.TXT

{% raw %}
```
Below is a listing of the files contained on this disk

COUPONS.COM      Main coupon program
COUPONS.DTA      Coupon data file
COUPONS.IDX      Coupon index file
README           Instruction file
FILES.TXT        File descriptions
```
{% endraw %}

## FILES724.TXT

{% raw %}
```
Disk No  724
Program Title: EZCOUNT, COUPON ORGANIZER, XDIR 2.02
PC-SIG version 1.6

    EZCOUNT counts the number of words in a standard ASCII file (registered
users receive a version that counts Wordstar files also. The program counts
according to a set of rules in a README file. It works as described in the
printed documentation (one page), and is fairly quick (total time taken is
displayed after each count). It runs on any IBM-PC or compatible with at
least 64K of memory (more is needed if your ASCII file is larger) and one
disk drive.

    The GROCERY STORE COUPON ORGANIZER SYSTEM is a simple database program
that keeps track of grocery store discount coupons. Each coupon is one
record in the database. Records can be added, modified, deleted, or just
browsed through. There is also a feature to delete all coupons that expired
before a user-defined date. The documentation has a page with brief
descriptions of the function. COUPONS runs on any IBM-PC with 128K of
memory and one disk drive.

    XDIR replaces the DOS commands DIR and COPY. It lets you put a
40-character comment onto each file in a given disk directory. It also
copies and renames these files carrying the comment line along with them.
This program is great for people who tend to use very cryptic file
names -- now you can comment these files to remember what they were. XDIR
runs on any IBM-PC or compatible with at least 64K of memory and one disk
drive (although it helps to have a second drive to hold XDIR, as it is an
External type command)

Usage: Utilities/Database

System Requirements: 128K memory and one disk drive.

How to Start: Type GO (press enter), and type RUN (press enter).

Suggested Registration: COUPON - $15.00, EZCOUNT - $10.00, XDIR - $10.00.

File Descriptions:

-------- ---  EZCOUNT
EZREADME      Explains the rules used by EZCOUNT.
EZCOUNT  DOC  Description of the registered version.
EZASCII  TST  Sample ASCII file with 1200 words.
EZWDSTR  TST  Sample Wordstar file to test other word counters.
EZCOUNT  COM  Main program.
-------- ---  COUPON ORGANIZER
COUPONS  COM  Main coupon program.
README        Instruction file.
FILES    TXT  File descriptions for the COUPON ORGANIZER.
RUN      BAT  Types out the README file on how to start.
README        Information file from the author.
-------- ---  XDIR
READ     ME   Information file
SHORTDOC DOC  Short version of documentation file
XDIR     DOC  Documentataion file
XDC      BAT  Equivalent to XDIR /c -- Copies files
XDE      BAT  Equivalent to XDIR /e -- Edit file comments
XDM      BAT  Equivalent to XDIR /m -- Move files between directories
XDIR     CMT  Usage Record Beginning 4-25-88
XDCNVRT  EXE  Convert older XDIR.CMT files
XDIR     EXE  Main program

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #724 EZCOUNT, COUPON and XDIR  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To print the documentation on this disk, type:                         ║
║                  MANUALS (press enter)                                  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SHORTDOC.DOC

{% raw %}
```
                                SHORT DESCRIPTION

             This material is extracted from the XDIR manual contained
        in the file XDIR.DOC that is included with XDIR.  It gives a 
        quick overview only.  Please read the manual also.

             I've tried a number of the available DOS Shell programs and
        Hard Disk Managers and am still left with two frustrations. DOS
        restricts file names to 11 characters, not enough in my opinion.
        Also, I'm always short of space on my hard disk. It's full of
        files that I probably don't need. It would be nice to know how
        often I use SUPERPRG.EXE and what is it anyway?

             XDIR is my solution to this frustration. XDIR is a
        replacement for the DOS commands DIR and COPY. It allows you to
        add your own comments to be displayed along with the normal DOS
        directory. You won't have to remember what MPDPROG.MEM was all
        about. The directory will remind you with a display like:

 MPDPROG MEM 2620 01-17-87 2:19p Maxon Paper Div.           Progress Report

        XDIR allows you to edit these comments freely. You can copy or
        move files between directories or to another disk, and the
        comment text will automatically go right with it.

             XDIR also keeps track of usage of all files on your hard
        disks, and records the number of times each file is used and the
        date of last use. This feature is not active unless you have
        executed the resident module XDCOUNT.COM. 

             XDIR has six modes: Help, Directory, Edit, Copy, Kill and
        Move. These modes are selected from the command line, e.g., XDIR /e.
        XDIR has a number of display options that can be selected as 
        well. Options include: Pick, Sort, and Wide. XDIR /? displays a 
        series of help screens describing the XDIR modes. If you can't wait
        to use XDIR, try this for a quick and handy tutorial.

             The full capabilities of XDIR as described in the manual
        require the programs XDCOUNT.COM and XDUPDATE.EXE. These are
        provided only to registered users. The version distributed on
        bulletin boards and by users' groups implements all features, but
        without these additional programs, no file usage data is
        recorded.

             XDIR is ShareWare. The law requires that if you use this
        program, you must pay for it. So, if you find XDIR useful,
        please register your use with the author. The basic registration
        fee is $10. If you want the file usage features (I think they're
        invaluable), send $20 for registration.

             Registered users will be notified of upgrades to XDIR as
        they are released, and will receive a printed copy of this
        manual. Online help is available through CompuServe, by
        EasyPlex. Registrations and inquiries should be
        sent to:

                                 Iram J. Weinstein
                                 XD Systems
                                 1014 Shipman Lane
                                 McLean, VA 22101
                                   Voice (703) 821-3215
                                   CIS 70741,3711

             A registration form is included at the end of the manual.

             The files supplied with XDIR in the BBS release are:

    XDC     BAT     Equivalent to XDIR /c -- Copies files 
    XDE     BAT     Equivalent to XDIR /e -- Edit file comments
    XDM     BAT     Equivalent to XDIR /m -- Move files between directories
    XDIR    CMT     Usage Record Beginning 4-25-88
    XDIR    DOC     To print enter: TYPE XDIR.DOC > prn
    XDIR    EXE     Latest version of XDIR: fixes all known bugs.
    XDCNVRT EXE     Convert older XDIR.CMT files to the
  

XDIR VERSION HISTORY

        Ver. 1.0            01/25/87
             First release, withdrawn immediately because F10 function
             key did not work at all.

        Ver. 1.01           01/26/87
             Corrected F10 problem but 'D' entered in a comment field
             caused action identical to F10

        Ver.1.02            01/27/87
             Fixed the F10 problem correctly.

        Ver. 1.03           01/29/87
             Fixed problem with Copy to current directory. Now can call:
             XDIR /c C:\xxx.yyy  Previously required XDIR /c C:\xxx.yyy C:
             Fixed a problem with recognizing directory names.
             Previously XDIR interpreted C:\XXX as equivalent to C:XXX.*
             This is incorrect when XXX is a directory name.
             Fixed a problem with deleting Comment entries. Now Del, BSP
             or fill with blanks works OK.
             Add listing of file names moved, same as DOS copy.
             Extend allowable number of files in a directory to 256.
             Extend allowable number of files moved to 128.
             Speed up XDIR by using Quiksort routine.

        Ver. 1.04           02/22/87
             General Cleanup: Reduced size and improved speed.
             Removed undocumented restriction of previous versions, which
             could not copy or move a file larger than 38K.
             Added Sorted directory display with Name, Ext, Date and Size
            options.

        Ver. 2.01 12/01/87
             Added Pick feature.
             Added Alt-Del feature to edit option.
             Modified access to XDIR.CMT to permit XDIR /d use on
             networks.
             Reduced overall size with Turbo Optimizer (Reg. Turbo Power
             Software).
             Automatically go to PICK mode if no filespec is provided
             with /m or /c
             Add the /k mode to delete files
             Add the /w mode to provide wide display, 5 files per line
             Add usage count for files, both executable and data
             Add an Unsorted directory option: /S0
             Fix problem with screen color changes. Previously left
             yellow text on black background. Change to leave
             colors unchanged.

        Ver. 2.02           3/15/88
             This Version of XDIR has been substantially rewritten. It
             is the first version to use Turbo Pascal 4.0 and
             incorporates a number of new features.

             Comment field increased to 65 characters from 38.
             Scroll up and down through directory display.
             Number of directory elements increased to 1024.
             Number of files that can be copied or moved in one command 
             is 1024
             Directory now shows file attributes.
             Sort on comment field is included.
             Average comment file size is decreased.
             XDCNVRT.EXE is provided to change from earlier versions.
             Memory requirements have been decreased.
             Operation is noticeably faster.
             Compatibility with Keyboard enhancers has been improved.
             Comments can be attached to directories.
             Quick writing can be toggled off for improved compatability.
             XDIR defaults can be altered using the DOS SET command.



                  SOFTWARE REGISTRATION FORM AND ORDER



 Check all that apply:                                    Amount:


   [ ] Standard registration                                $10.00

   [ ] Full registration (includes file use features) $20.00



       TOTAL ENCLOSED: $______


             If you already have a copy of XDIR, where were they
        obtained?

    [ ]CompuServe [ ]Friend [ ]Employer [ ]BBS [ ]ShareWare Distributor



  Payment is by check[ ] or money order[ ] (Sorry - no COD or charges)



        NAME    ___________________________________________

        COMPANY ___________________________________________

        ADDRESS ___________________________________________

        CITY    ___________________________________________

        STATE   __________________________ZIP _____________



        Send your registration form and payment to:

                       XD Systems
                       1014 Shipman Lane
                       McLean, VA 22101





```
{% endraw %}

## XDIR.DOC

{% raw %}
```










                                 XDIR USER'S GUIDE
                                   VERSION 2.02

                                    APRIL 1988


































                                      XD SYSTEMS
                                    1014 SHIPMAN LANE
                                    MCLEAN, VA 22101







                               CONTENTS
    


             Disclaimer of Warranty                                1

             Background                                            2

             Regarding Registration                                2

             XDIR Modes                                            4
                  Help Mode                                        4
                  Directory Mode                                   4
                  Edit Mode                                        4
                  Copy Mode                                        5
                  Kill Mode                                        6

             Display Options                                       6
                  Pick Option                                      6
                  Alternative Display Formats                      7
                  Normal Display                                   7
                  Full Display                                     7
                  Usage Display                                    7
                  Wide Display                                     8
                  Sort Switch                                      8
                  Quick Write Display Toggle                       9

             Installation                                          9
                  General Use of XDIR                              9
                  Installing File Use Monitoring                  10
                  Use of XDUPDATE to Clear Usage Data             10
                  Conversion From Previous Versions of XDIR       11
                  Customizing XDIR Features                       11

             Files Supplied                                       12

             XDIR Version History                                 14

             Software Registration Form and Order                 13




                             DISCLAIMER OF WARRANTY


             THIS SOFTWARE AND MANUAL ARE SOLD "AS IS" AND WITHOUT
             WARRANTIES AS TO PERFORMANCE OR MERCHANTABILITY OR ANY OTHER
             WARRANTIES WHETHER EXPRESSED OR IMPLIED. BECAUSE OF THE
             VARIOUS HARDWARE AND SOFTWARE ENVIRONMENTS INTO WHICH THIS
             PROGRAM MAY BE PUT, NO WARRANTY OF FITNESS FOR A PARTICULAR
             PURPOSE IS OFFERED. THE USER MUST ASSUME THE ENTIRE RISK OF
             USING THE PROGRAM. ANY LIABILITY OF THE SELLER WILL BE
             LIMITED EXCLUSIVELY TO PRODUCT REPLACEMENT OR REFUND OF
             PURCHASE PRICE.









































                                  1


                                XDIR User's Guide
                                  Version 2.02

                               Copyright (C) 1988
                                 I. J. Weinstein

        A.BACKGROUND



             I've tried a number of the available DOS Shell programs and
        Hard Disk Managers and am still left with two frustrations. DOS
        restricts file names to 11 characters, not enough in my opinion.
        Also, I'm always short of space on my hard disk. It's full of
        files that I probably don't need. It would be nice to know how
        often I use SUPERPRG.EXE and what is it anyway?

             XDIR is my solution to this frustration. XDIR is a
        replacement for the DOS commands DIR and COPY. It allows you to
        add your own comments to be displayed along with the normal DOS
        directory. You won't have to remember what MPDPROG.MEM was all
        about. The directory will remind you with a display like:

   MPDPROG MEM 2620 01-17-87 2:19p Maxon Paper Div.           Progress Report

        XDIR allows you to edit these comments freely. You can copy or
        move files between directories or to another disk, and the
        comment text will automatically go right with it.

             XDIR also keeps track of usage of all files on your hard
        disks, and records the number of times each file is used and the
        date of last use. This feature is not active unless you have
        executed the resident module XDCOUNT.COM. Installation of this
        module is discussed in Section E.

             XDIR has six modes: Help, Directory, Edit, Copy, Kill and
        Move. These modes are selected from the command line, e.g., XDIR
        /e, and are explained in Section C.

             In addition, XDIR has a number of display options that can
        be selected as well. Options include: Pick, Sort, and Wide.
        These options are explained in Section D.


        B.REGARDING REGISTRATION

             XDIR is being distributed in two versions under the
        ShareWare concept. The program and its associated documentation
        are the copyrighted property of the author. Non-commercial users
        are granted the right to use copy and share XDIR with the follow-
        ing conditions:



                                  2



            Public Domain/Shareware distributors and Users Groups may
        charge a nominal fee for copying and distributing this program
        and Bulletin Board Systems may likewise carry it. Any
        distribution of XDIR must include without alteration only the
        files listed in Section F of this documentation. Permission is
        also given for electronic distribution of ARCed versions of these
        files on electronic bulletin boards. Distribution of XDCOUNT.COM
        or XDUPDATE.EXE is not authorized.

             The full capabilities of XDIR as described in this manual
        require the programs XDCOUNT.COM and XDUPDATE.EXE. These are
        provided only to registered users. The version distributed on
        bulletin boards and by users' groups implements all features, but
        without these additional programs, no file usage data is
        recorded.

             XDIR is ShareWare. The law requires that if you use this
        program, you must pay for it. So, if you find XDIR useful,
        please register your use with the author. The basic registration
        fee is $10. If you want the file usage features (I think they're
        invaluable), send $20 for registration.

             Registered users will be notified of upgrades to XDIR as
        they are released, and will receive a printed copy of this
        manual. Online help is available through CompuServe, by
        EasyPlex. Sorry, but online help is available ONLY to registered
        users. Help is also available by mail. I will try to answer all
        letters within 48 hours. Non-registered users must include a SASE
        for a reply. The degree of help available to non-registered users
        is purely discretionary. Registrations and inquiries should be
        sent to:

                                 Iram J. Weinstein
                                 XD Systems
                                 1014 Shipman Lane
                                 McLean, VA 22101
                                   Voice (703) 821-3215
                                   CIS 70741,3711

             A registration form is included at the end of this manual.

             Commercial use of XDIR without payment of the registration
        fee is prohibited. Site licenses are available for users with
        multiple machines. Please contact me for information.





                                  3



             C. XDIR MODES

            1. Help mode
                           XDIR /?

             Displays a series of help screens describing the XDIR modes.
        If you can't wait to use XDIR, try this for a quick and handy
        tutorial.

            2. Directory Mode

     XDIR [/d] [d:][path][filename][.ext] [> outputfile]

             Displays the commented directory. This is the default
        option, so the option switch /d can be left off. You can specify
        the directory you wish to view just as with DIR, including the
        wildcard features '?' and '*'. XDIR shows only a screen at a
        time. Pressing Esc will terminate the directory display. PgDn
        will produce the next screen of directory entries. You can
        scroll the display up and down through the directory with PgUp
        and PgDn. If the number of files in the display make up less
        than one full screen, the display sill scroll onto the screen,
        just like the DOS display. This facilitates use of XDIR to
        display file choices in batch files. In all other situations,
        XDIR will clear the screen and start the display from the top.

             Output redirection to the printer or a disk file is allowed
        in this mode. For example, you might print the directory of all
        of your memo files to your printer with:

                  XDIR *.mem >prn

             3. Edit mode

                  XDIR /e [d:][path][filename][.ext]

             This mode allows you to add and modify the directory
        comments, which are then stored in the file XDIR.CMT. The * and
        ? wildcard features can be used. The comment field is 65
        characters long and can contain any information you desire. The
        text editor provided is very simple, allowing the usual motion
        around the comment fields with the cursor keys. You can scroll
        the display up and down through the directory with PgUp and PgDn.
        Ctrl-PgUp will display the first screen of the directory and
        Ctrl-PgDn will display the last screen. Home and End move the
        cursor to the beginning and end of the current comment field.
        Ctrl-Home will move the cursor to the first directory entry on
        the screen and Ctrl-End will move it to the last. The Del
        BackSpace keys are active and work normally. You can toggle in
        and out of Insert mode with the Ins key. Alt-Del erases the
        entire comment line.

             When you write your Comment lines, you should remember that
        one of XDIR's display modes shows only the first 38 characters of



                                  4




             the comment in order to be able to also display the usual
        DOS file information. If you plan ahead, you can make this first
        part convey the most essential part of your comment.

             When you leave XDIR in this mode by pressing Esc, XDIR sorts
        the comment file and writes it out to disk. This will take a
        noticeable time if the directory has many entries.

             The XDIR.CMT file can also be freely edited in any editor
        that produces an ASCII file. You must pay attention to the
        following format:


                            -Column-                 -Field -
                             1-8                   File Name
                             9                     Blank
                             10-12                 File Extension 
                             13                    Blank
                             14-18                 Number of Uses
                             19                    Blank
                             20-27                 Last Use Date
                             28                    Blank
                             29-93                 Comment

            The blank columns are ignored by XDIR.  If you should create
        a file with more than 93 characters, the excess characters will
        simply be ignored when XDIR reads the file. Any subsequent edit
        by XDIR will produce a new file with all of the excess characters
        deleted.

             IMPORTANT: If you do edit XDIR.CMT in your own editor, you
        must be sure to sort the file by columns 1-12 in ascending order.
        XDIR expects to find a sorted file.

                                  
             4. Copy mode

        XDIR /c [d:]path\filename.ext [d:]path[filename][.ext]

             In this mode XDIR copies files in the same manner as the DOS
        COPY command. It also copies the corresponding records (if they
        exist) from XDIR.CMT and inserts them into the file of the same
        name in the destination directory, creating the file if
        necessary. The * and ? wildcard features can be used. 

             If a file with the same name exists in the destination
        directory, XDIR will ask you before it overwrites the file.





                                  5




                  5. Move mode

    XDIR /m [d:]path\filename.ext [d:]path[filename][.ext]

             This mode is used to MOVE files between directories, or from
        one disk to another. The * and ? wildcard features can be used.

             This is a feature not provided by DOS. When the two
        directories are on the same disk, the operation is very fast
        because XDIR changes the DOS directory entries and does not
        to copy the files themselves. When the destination directory
        on a different disk, each file is first copied to the destination
        and then deleted from the source directory. In any case, the
        XDIR comment records are transferred properly.

             If a file to be moved is marked with the Read-Only file
        attribute, and the Move is not between directories on the same
        disk, XDIR will ask you before deleting the file from its source
        directory. Also, if a file with the same name exists in the
        destination directory, XDIR will ask you before it overwrites a
        file.

             This mode can also be used to rename a file. This use is
        identical to the DOS RENAME feature, but it also updates the
        entry in the XDIR.CMT file.


             6. Kill Mode

                XDIR /k [d:]path\filename.ext

             This mode is used to KILL or delete files from the
        directory,similar to the DOS DELETE or ERASE commands. The * and
        ? wildcard features can be used. XDIR displays a direct
        files that satisfy the given filespec and then permits you to
        PICK from these files those that you wish to KILL. This PICK
        option allows you to select an arbitrary group of files for
        action. The option is automatic for the KILL mode but may also
        be selected for other modes.(See next section). After you have
        picked the files to be deleted, XDIR will ask you for
        confirmation before actually deleting the files.


        D. DISPLAY OPTIONS

             1. PICK Option (usable with Modes C, M and K only)

   XDIR /kp [d:]path\filename.ext [d:]path[filename][.ext]

             This feature allows you to select an arbitrary group of
        files for action. The option is automatic for the KILL mode. It
        may also be selected for the COPY or MOVE modes. XDIR displays a
        directory of files that satisfy the given filespec and then
        permits you to PICK from these files those that you want. Move



                                  6




             the cursor up and down with the cursor keys. You can scroll
        through the directory with the PgUp, PgDn, Ctrl-PgUp and
        Ctrl-PgDn keys. Ctrl-Home and Ctrl-End move the cursor to the
        top and bottom of the screen. Files can be picked or unpicked
        with successive pressings of F9. Only the files that are picked
        at the time you press ESC are copied, moved or killed.


             2. Alternative Display Formats

             XDIR presents the directory data in four alternative
        formats; examples of each are discussed below.

                  a. Normal Display

               XDIR /n [/Mode] [/Other Options]

             This display is the same as the DOS DIR display, with 38
        characters of the XDIR comment shown as well. Since many times,
        38 characters is sufficient for a file comment, the whol
        may be displayed. If the file comment is longer, as is the case
        for the entry XDIR.EXE, then it is truncated.

XDIR        CMT    3609    3-07-88 2:11a   Usage Record Beginning 7-15-87
XDCOUNT     COM   12264   12-08-87 9:25p   TSR: Monitors/records file openings
XDIR        EXE   54224    3-07-88 8:54a   Latest version of XDIR: fixe
XDUPDATE    EXE   23952    2-25-88 8:18p   Updates XDIR.CMT with usage data from


                  b. Full Display

               XDIR /f [/Mode] [/Other Options]

XDIR       CMT     Usage Record Beginning 7-15-87
XDCOUNT    COM     TSR: Monitors/records file openings
XDIR       EXE     Latest version of XDIR: fixes all known bugs
XDUPDATE   EXE     Updates XDIR.CMT with usage data from XDCOUNT data files


                  c. Usage Display

               XDIR /u [/Mode] [/Other Options]

             This option causes XDIR to display its information in a
        slightly different format, as shown here:


  XDIR      CMT     3609    3-07-88 12:11a a 144 3-07-88
  XDCOUNT   COM    12264   12-08-87  9:25p r  28 2-23-88
  XDIR      EXE    54224    3-07-88  8:54a a 245 2-23-88
  XDUPDATE  EXE    23952    2-25-88  8:18p a



                                  7




                  The first four fields are the same as the standard DOS
        display. The next field shows the DOS attributes of each file.
        Letters a,h,n,r and s are used: [a]rchive - a file that has 
        been modified since backup; [h]idden - a file that is intentionally
        hidden from the DOS DIR display; [n]ormal - any file not a,h,r, or 
        s; [r]ead-only - a file that cannot be deleted by the DOS Delete
        command; and [s]ystem - a special DOS file. The number after the
        attribute field is the number of uses that have been recorded for
        the file. (The comment associated with XDIR.CMT always shows the
        date when recording started for this directory.) The date in the
        last field is the date the file was last used.

             The usage display is very helpful when it comes time to
        prune files you really don't need from your hard disk. You  can
        PICK files to KILL or MOVE to a floppy disk, while looking at how
        often you use them and your comments.

             For instance:

                 XDIR /su /kd c:\utils\*.exe

        will display all of the files with extension EXE, sorted by
        decreasing number of uses, so you can select files to be deleted.
        If you want to save these files to a floppy disk in drive B
        command would be:

                XDIR /su /mp c:\utils\*.exe B:


             d. Wide Display

               XDIR /w [/Mode] [/Other Options]

             This option causes the directory names to be displayed five
        to a row. No other information is displayed. The display is 
        similar to the DOS DIR /w command.

XDCOUNT  COM    XDIR CMT        XDIR EXE        XDIR SRT        XDIRALL BAT
XDUPDATE COM


             3. Sort Switch

 XDIR [/SD] [/SE] [/SL] [/SN] [/SS] [/SU] [/S0] [/mode] [/Other Options]

             The XDIR directory display is usually sorted. The sort type
        is determined by adding one of the four sort commands anywhere in
        the command line. /SN is the default.

             /SA Directory is sorted by file attributes

             /SC Directory is sorted by XDIR comment, in
                 alphabetical order



                                  8




              /SD Directory is sorted by Date and Time, presenting
                  the newest file first.

             /SE Directory is sorted in increasing alphabetical
                 order, first by Extension, then by File Name.

             /SL Directory is sorted by date of last use and then
                 by File Name.

             /SN Directory is sorted in increasing alphabetical
                 order by File Name and then by Extension.

             /SS Directory is sorted by file size, presenting the
                 largest file first.

             /SU Directory is sorted by number of uses, with the
                 most used file presented first.

             /S0 Directory is not sorted. The order is the same as
                 presented by the DOS DIR command.


             4. Quick Write Display Toggle

                           XDIR /Q

             XDIR ordinarily sends output directly to video memory. This
        provides the quickest screen display and can be used on IBM
        machines and true compatibles. However, this quick write
        procedure has incompatibility problems with some clones and with
        some software.

             If you have any problems with the XDIR screen display, you
        can disable the quick write feature of XDIR with the /Q 
        option.


        E. INSTALLATION

             1. General Use of XDIR

             XDIR was designed using DOS 3.1 and tested with DOS 3.0-3.2.
        The program will work with DOS 2.x but the /m option will not
        function properly for moves between subdirectories on the same
        disk.

             XDIR should be available to you all the time. If you have a
        hard disk, make sure that XDIR is located in a directory
        in the current path. The easiest installation is as follows
        (assuming that the XDIR files are in Drive A:)

                  C:\
                  A:XDIR /c A:*.*



                                  9




             Also make sure your autoexec.bat file contains a line with

                  PATH=C:\;

             If you don't have a hard disk, best use of XDIR is obtained
        if you load it on to a ram disk and then PATH the ramdisk.

             2. Installing File Use Monitoring

             This feature is implemented only for hard disks. Usage on
        floppies or RAM Disks is not recorded, and is simply ignored by
        the system.
         
             File use monitoring is implemented in two steps. The
        program XDCOUNT.COM is a resident module that goes into action
        whenever one of your programs is executed or a data file 
        opened for use. XDCOUNT registers these events and writes the
        usage data to the file XDIR.DTA for later use. The program
        XDUPDATE.EXE should be called periodically to transfer this use
        data to the appropriate XDIR.CMT files.

             XDCOUNT has one command line option:

           XDCOUNT [Drive] [Drive] [Drive] [Drive]

             Up to four drive letters can be specified. If you don't
        specify a drive, XDCOUNT will ignore activity on that drive. Be
        sure to specify only HARD drives. If you do not specify any
        drive letters, drive C is assumed.

             The best way to install XDCOUNT and XDUPDATE is to place
        them in your Autoexec.bat file There is always some possibility
        of undesirable interactions among resident programs. No
        unsolvable problems have been found with XDCOUNT. It is best to
        put XDCOUNT into your Autoexec.bat file after all other
        programs, with the exception of SuperKey and Sidekick . Your
        Autoexec file might look like this:

                            . .. ..
                            C:\XDCOUNT
                            C:\XDUPDATE
                            . .. ..
                            . .. ..
                            SIDEKICK

             3. Use of XDUPDATE to Clear Usage Data

             Occasionally, it is useful to CLEAR the usage data in a
        directory, or group of directories to zero. You can do this for
        a single directory by making it the Current Directory and then
        executing XDUPDATE /C

                  ChangeDir C:\memos
                  XDUPDATE /C



                                  10




                  If you wish to clear a directory and all of its Subdirectories,
        use XDUPDATE /S. For example, to clear all of the usage data on
        your hard disk:

                  ChangeDir C:\
                  XDUPDATE /S


             4. Conversion from Previous Versions of XDIR

             If you have a version of XDIR earlier than Version 2.02, you
        will need to convert your XDIR.CMT files to a new format.  The
        program XDCNVRT.EXE is provided for this purpose. To use XDCNVRT,
        the following steps are required:

             a. Set the current drive and path to the directory
             containing XDCNVRT. Typically this would involve:

                       >CD A:\
                       >A:

             b. Execute XDCNVRT, specifying the drive to be worked on.
              XDCNVRT will automatically convert all XDIR.CMT files on
             that drive. You must carry out this step on all disks that
             have XDIR.CMT files. For example:

                       XDCNVRT C:


             5. Customizing XDIR Features

             The actions to be taken by XDIR are all specified from the
        command line. Several default options have been set under the
        assumption that they are the ones you will use most often. As a
        result, the following are equivalent commands:

                  XDIR

                  XDIR /d /n /sn *.*

             If you find that you prefer other command line default
        entries, you can set them using the DOS Environment SET feature.
        SET is a DOS command that you can execute from the > prompt. For
        example, if you normally prefer to see the display sorted by
        extension, and do not want the Quick write feature, these can be
        made defaults as follows:

                  SET XDIR=/se /q



                                  11




                  You can remove any options that you have SET with the
        following DOS command:

                  SET XDIR=

             When you are sure of the defaults that you want, it's
        convenient to put your SET command into your AUTOEXEC.BAT file.



        F. FILES SUPPLIED

             The files supplied with XDIR are:

    XDC     BAT     Equivalent to XDIR /c -- Copies files 
    XDE     BAT     Equivalent to XDIR /e -- Edit file comments
    XDM     BAT     Equivalent to XDIR /m -- Move files between directories
    XDIR    CMT     Usage Record Beginning 4-25-88
    XDIR    DOC     To print enter: TYPE XDIR.DOC > prn
    XDIR    EXE     Latest version of XDIR: fixes all known bugs.
    XDCNVRT EXE     Convert older XDIR.CMT files to the
  
            The three batch files are provided for your convenience.
        It's easier to use them than typing XDIR /xx. You are free to
        rename these files if you wish. If you use an extended DOS editor
        like DOSEDIT or CED, you will find it most convenient to replace
        these batch files with synonym commands.


        G. XDIR VERSION HISTORY

        Ver. 1.0            01/25/87
             First release, withdrawn immediately because F10 function
             key did not work at all.

        Ver. 1.01           01/26/87
             Corrected F10 problem but 'D' entered in a comment field
             caused action identical to F10

        Ver.1.02            01/27/87
             Fixed the F10 problem correctly.

        Ver. 1.03           01/29/87
             Fixed problem with Copy to current directory. Now can call:
             XDIR /c C:\xxx.yyy  Previously required XDIR /c C:\xxx.yyy C:
             Fixed a problem with recognizing directory names.
             Previously XDIR interpreted C:\XXX as equivalent to C:XXX.*
             This is incorrect when XXX is a directory name.
             Fixed a problem with deleting Comment entries. Now Del, BSP
             or fill with blanks works OK.
             Add listing of file names moved, same as DOS copy.
             Extend allowable number of files in a directory to 256.
             Extend allowable number of files moved to 128.
             Speed up XDIR by using Quiksort routine.



                                  12




             Ver. 1.04           02/22/87
             General Cleanup: Reduced size and improved speed.
             Removed undocumented restriction of previous versions, which
             could not copy or move a file larger than 38K.
             Added Sorted directory display with Name, Ext, Date and Size
        options.

        Ver. 2.01 12/01/87
             Added Pick feature.
             Added Alt-Del feature to edit option.
             Modified access to XDIR.CMT to permit XDIR /d use on
             networks.
             Reduced overall size with Turbo Optimizer (Reg. Turbo Power
             Software).
             Automatically go to PICK mode if no filespec is provided
             with /m or /c
             Add the /k mode to delete files
             Add the /w mode to provide wide display, 5 files per line
             Add usage count for files, both executable and data
             Add an Unsorted directory option: /S0
             Fix problem with screen color changes. Previously left
             yellow text on black background. Change to leave
             colors unchanged.

        Ver. 2.02           3/15/88
             This Version of XDIR has been substantially rewritten. It
             is the first version to use Turbo Pascal 4.0 and
             incorporates a number of new features.

             Comment field increased to 65 characters from 38.
             Scroll up and down through directory display.
             Number of directory elements increased to 1024.
             Number of files that can be copied or moved in one command 
             is 1024
             Directory now shows file attributes.
             Sort on comment field is included.
             Average comment file size is decreased.
             XDCNVRT.EXE is provided to change from earlier versions.
             Memory requirements have been decreased.
             Operation is noticeably faster.
             Compatibility with Keyboard enhancers has been improved.
             Comments can be attached to directories.
             Quick writing can be toggled off for improved compatability.
             XDIR defaults can be altered using the DOS SET command.



                                  13




                  SOFTWARE REGISTRATION FORM AND ORDER



 Check all that apply:                                    Amount:


   [ ] Standard registration                                $10.00

   [ ] Full registration (includes file use features) $20.00



       TOTAL ENCLOSED: $______


             If you already have a copy of XDIR, where were they
        obtained?

    [ ]CompuServe [ ]Friend [ ]Employer [ ]BBS [ ]ShareWare Distributor



  Payment is by check[ ] or money order[ ] (Sorry - no COD or charges)



        NAME    ___________________________________________

        COMPANY ___________________________________________

        ADDRESS ___________________________________________

        CITY    ___________________________________________

        STATE   __________________________ZIP _____________



        Send your registration form and payment to:

                       XD Systems
                       1014 Shipman Lane
                       McLean, VA 22101











                                  14


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0724

     Volume in drive A has no label
     Directory of A:\

    COUPONS  COM     58203   6-18-87   5:09p
    EZASCII  TST     10368   7-07-87   3:47p
    EZCOUNT  COM     29777   7-07-87   3:47p
    EZCOUNT  DOC      2176   7-07-87   3:47p
    EZREADME          1408   7-07-87   3:47p
    EZWDSTR  TST      9344   7-07-87   3:47p
    FILES    TXT       239   2-26-87  12:05a
    FILES724 TXT      2900   6-30-88   9:34a
    GO       BAT        38   2-26-88   9:58a
    GO       TXT       463   6-08-88  12:08p
    MANUALS  BAT        34   6-08-88  12:08p
    READ     ME       3589   5-19-88   2:02a
    README            1933   5-16-87   4:22p
    RUN      BAT        14   2-26-88   9:58a
    SHORTDOC DOC      8389   5-19-88   2:02a
    XDC      BAT        17   5-19-88   2:02a
    XDCNVRT  EXE      8528   5-19-88   2:02a
    XDE      BAT        19   5-19-88   2:02a
    XDIR     CMT       844   5-22-88   5:35a
    XDIR     DOC     32534   5-19-88   2:02a
    XDIR     EXE     57920   5-21-88   2:02a
    XDM      BAT        17   5-19-88   2:02a
           22 file(s)     228754 bytes
                           78848 bytes free
