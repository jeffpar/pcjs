---
layout: page
title: "PC-SIG Diskette Library (Disk #2272)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2272/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2272"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "4ZIP, 4EDIT & XDIR"

    4ZIP is a utility for 4DOS.  Used with the PKWare file-compression
    program PKZIP, it save 4DOS file descriptions along with the files as
    they are compressed.  The included program 4UNZIP, calls PKUnzip, and
    restores the descriptions to 4DOS as each file is uncompressed.
    Select files to Zip or Unzip from a full-screen list with extended
    wildcards, like 4DOS. Works with all versions of 4DOS.  Also look at
    companion utility, 4EDIT.
    
    4EDIT is a full-screen editor for 4DOS file descriptions. It is much
    more convenient than the 4DOS DESCRIBE command because you can see the
    descriptions for all selected files at one time. Create or edit
    descriptions for any grouping of files using multiple filenames and
    extended wildcards, like 4DOS. Works with all versions of 4DOS.
    Look for the companion utility, 4ZIP also.
    
    XDIR is a commented directory utility. It displays a 65-character
    comment for each file in the DIR display. You can copy, rename and move
    files, carrying the comment line along. Run programs from the
    directory list and support executable extensions. With proper setup, it
    will recognize the appropriate application to call for a given file
    extension.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 4EDIT.TXT

{% raw %}
```










                                 4EDIT USER'S GUIDE
                                    VERSION 1.03

                                      JUNE 1990











                                                    _______
                                               ____|__     |               (tm)
                                            --|       |    |-------------------
                                              |   ____|__  |  Association of
                                              |  |       |_|  Shareware
                                              |__|   o   |    Professionals
                                            -----|   |   |---------------------
                                                 |___|___|    MEMBER

                                                          Iram J. Weinstein













                                      XD SYSTEMS
                                    1014 SHIPMAN LANE
                                    MCLEAN, VA 22101







                               CONTENTS
    


             Limited Warranty                                      1

             Background                                            2

             4EDIT Usage                                           2

             Regarding Registration                                3

             4EDIT Version History                                 4

             4ZIP/4UNZIP                                           5

             Software Registration Form and Order                  6



                          LIMITED WARRANTY

             XD Systems warrants the physical diskette enclosed herein 
        to be free of defects in materials and workmanship for a period 
        of 60 days from the date of purchase.  In the event of notification 
        within the warranty period of defects in material or workmanship, 
        XD Systems will replace the defective diskette.

             XD Systems specifically disclaims all other warranties, 
        express or implied, including but not limited to implied warranties 
        of merchantability and fitness for a particular purpose.  In no 
        event shall XD Systems be liable for any loss of profit or any 
        other commercial damage, including but not limited to special, 
        incidental, consequential or other damages arising out of the use, 
        the result of use, or inability to use this product.

        This program is produced by a member of the Association of
        Shareware Professionals (ASP).  ASP wants to make sure that the
        shareware principle works for you.  If you are unable to resolve a
        shareware-related problem with an ASP member by contacting the
        member directly, ASP may be able to help.  The ASP Ombudsman can
        help you resolve a dispute or problem with an ASP member, but does
        not provide technical support for members' products.  Please write
        to the ASP Ombudsman at P.O. Box 5786, Bellevue, WA 98006 or send
        a Compuserve message via easyplex to ASP Ombudsman 70007,3536

        4DOS is a trademark of J.P. Software.  PKZip and PKUnzip are
        trademarks of PKWare.  4EDIT and all the files and document- 
        ation distributed with it are copyright 1990 by Iram J. Weinstein.  
        All rights reserved.



























                                  1


                                4EDIT User's Guide
                                  Version 1.02

                               Copyright (C) 1990
                                 I. J. Weinstein

        A.BACKGROUND

             In 1988, I wrote and distributed a shareware program, XDIR, 
        which was one of the first DOS directory programs to attach a 
        comment to each file.  When I first saw 4DOS, I loved it, but 
        I wanted to have the same sort of full-screen editor for directory
        comments (or, in 4DOS terms, Descriptions) that I had in XDIR.

             4EDIT provides this feature.  I think you will find it very
        useful.  Its good practice to comment your files, and often its 
        handy to see the descriptions attached to other files, while you 
        are writing a new one.           


        B. 4EDIT USAGE

             4EDIT Usage is:

                4EDIT [d:][path][filespec] [+ filespec] [+..]

             A directory display similar to that of SELECT will appear
        showing all of the files meeting any of the filespecs. This
        use of include lists is identical to the 4DOS 3.0 DIR and
        SELECT usage.  Note that only the first argument in an include 
        list can have a pathname; subsequent arguments default to the 
        same path.

             You can cursor around the screen using <Up>, <Dn>, <PgUp>, 
        <PgDn>, <Ctrl-PgUp> and <Ctrl-PgDn>.  At any row, you can start 
        typing.  This will automatically start the EDIT mode, and a 
        cursor will appear.  Typing will start at the beginning of the 
        description in Insert mode.  The editor is WordStar compatible 
        and also supports the following:

         <Esc>                        Quit without saving
         <Enter>                      End edit. Save changed Descriptions   

         <PgUp>                       Cursor back one screen
         <PgDn>                       Cursor forward one screen
         <Ctrl-PgUp>                  Cursor to top of first screen
         <Ctrl-PgDn>                  Cursor to end of last screen

         <Left>                       Cursor left one character   
         <Right>                      Cursor right one character   
         <CtrlLeft>                   Cursor left one word   
         <CtrlRight>                  Cursor right one word   
         <Home>                       Cursor to beginning of line
         <End>                        Cursor to end of line


                                   2

         <Del>                        Delete character at cursor
         <Bksp>                       Delete character to left of cursor
         <CtrlEnd>                    Delete to end of line
         <CtrlY>,<CtrlX>              Delete entire line
         <CtrlHome>                   Delete from beginning of line
         <CtrlT>                      Delete word to right of cursor
         <CtrlR>                      Restore original contents of line

         <Ins>                        Toggle INSERT on and off. Thin cursor
                                      indicates overwrite mode; thicker 
                                      cursor indicates insert mode (default).


        C. REGARDING REGISTRATION

             4EDIT is ShareWare. The law requires that if you use this
        program, you must register and obtain a license for it.
        The registration fee is $15.

             Registered users will be notified of upgrades to 4EDIT as
        they are released, and will receive the latest version of the
        program.  Online help is available through CompuServe, by
        EasyPlex.  Help is also available by mail. I will try to answer 
        all letters within 48 hours. Non-registered users must include 
        a SASE for a reply. The degree of help available to non-registered 
        users is purely discretionary. Registrations and inquiries should 
        be sent to:

                                 Iram J. Weinstein
                                 XD Systems
                                 1014 Shipman Lane
                                 McLean, VA 22101
                                   Voice (703) 821-3215
                                   CIS 70741,3711

             A registration form is included at the end of this manual.

             Commercial use of 4EDIT without payment of the registration
        fee is prohibited. Site licenses are available for users with
        multiple machines. Please contact me for information.

             The program and its associated documentation are the 
        copyrighted property of the author. Non-commercial users
        are granted the right to use copy and share 4EDIT with the 
        following conditions:

             Shareware distributors and Users Groups may charge a 
        nominal fee for copying and distributing this program
        and Bulletin Board Systems may likewise carry it. Any
        distribution of 4EDIT must include without alteration only the
        files 4EDIT.EXE and 4EDIT.TXT, unchanged.  Permission is
        also given for electronic distribution of archived versions of 
        these files on electronic bulletin boards. 

                                  3

   

        D. 4EDIT VERSION HISTORY

        Ver 0.90 (Beta Test) 12/01/89
          This is the original release.  It used batch files to drive
          4edit and could only run under 4DOS.

        Ver 0.91 (Beta Test) 12/20/89
          4EDIT now stands alone, and can be run under DOS.

        Ver 0.92 (Beta Test) 1/18/90
         Corrected error causing highlighted row to blink on some machines.
         Modified so that EDIT function is always active.
         Correct command line parser so that  C: ==> C:*.*  
         and ABC ==> ABC\*.* if ABC is a directory but ABC.* otherwise.

        Ver 0.93 (Beta Test) 2/04/90 
         This is mostly bug cleanup. 
         1. Entering the editor with a right arrow positioned the cursor 
         to the second character of an existing description, but to the 
         first character of an empty description.  Fixed to always go to 
         the first character position.
         2. Cursor size in Insert mode made larger and easier to 
         distinguish from overstrike mode.
         3. 4EDIT lost descriptions on some files in big directories. Now
         fixed.
         4. Use of wildcard symbols * and ? changed to match 4DOS extended
         features.
         5.Ver 0.92 tried to correct command line parser so that  
         C: ==> C:*.* and ABC ==> ABC\*.* if ABC is a directory but 
         ABC.* otherwise. Got it right this time!
         6. The default state of the editor is insert mode.  This used to be
         reset on each line.  Now 4EDIT remembers if you toggle insert mode
         and starts the next line in the state you left it.

        Version 1.0  3/11/90 
         First public release

        Version 1.01  3/21/90 
         Minor changes in documentation.   

        Version 1.02  4/01/90 
         Changed file access to run on networks reliably.
         Added name and serial number on registered copies.

        Version 1.03  6/10/90
        Modified to correct for 4DOS 3.0 quirk. Entries in DESCRIPT.ION 
        are sometimes delimited by LF instead of CRLF.  Earlier versions 
        of 4EDIT misread these lines.









                                    4 

        E. 4ZIP/4UNZIP
        
             Also take a look at 4ZIP and 4UNZIP.  These are also
        utilities for use with 4DOS.  These programs are shells that
        use the PKWare programs PKZIP and PKUNZIP.  They provide a 
        facility for ZIPping and UNZIPping selected files along with 
        the 4DOS directory comments.  Both provide a full screen SELECT
        screen, allowing you to easily pick the files to enter or
        remove from the ZIP file. The 4ZIP/4UNZIP package is shareware, 
        available on Bulletin Boards and from shareware distributors. 
        Registration is $15.  See the order form at the end of this
        manual.









































                                    5



                  SOFTWARE REGISTRATION FORM AND ORDER



 Check all that apply:                                    

   [ ] 4EDIT registration            _____ @ $15.00    

   [ ] 4ZIP/4UNZIP registration      _____ @ $15.00    

       TOTAL ENCLOSED: $______


             If you already have copies of the programs you are
        ordering , where were they obtained?

    [ ]CompuServe [ ]Friend [ ]Employer [ ]BBS ______________________
 
    [ ]ShareWare Distributor ________________________________________


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










                                  6

```
{% endraw %}

## 4ZIP.TXT

{% raw %}
```










                             4ZIP/4UNZIP USER'S GUIDE
                                   VERSION 1.04

                                    JUNE 1990











                                                    _______
                                               ____|__     |               (tm)
                                            --|       |    |-------------------
                                              |   ____|__  |  Association of
                                              |  |       |_|  Shareware
                                              |__|   o   |    Professionals
                                            -----|   |   |---------------------
                                                 |___|___|    MEMBER

                                                          Iram J. Weinstein













                                      XD SYSTEMS
                                    1014 SHIPMAN LANE
                                    MCLEAN, VA 22101







                               CONTENTS
    


             Limited Warranty                                      1

             Background                                            2

             4ZIP Usage                                            2

             4UNZIP Usage                                          3   

             Regarding Registration                                4

             4ZIP/4UNZIP Version History                           5

             4EDIT                                                 6

             Software Registration Form and Order                  7



                          LIMITED WARRANTY

             XD Systems warrants the physical diskette enclosed herein 
        to be free of defects in materials and workmanship for a period 
        of 60 days from the date of purchase.  In the event of notification 
        within the warranty period of defects in material or workmanship, 
        XD Systems will replace the defective diskette.

             XD Systems specifically disclaims all other warranties, 
        express or implied, including but not limited to implied warranties 
        of merchantability and fitness for a particular purpose.  In no 
        event shall XD Systems be liable for any loss of profit or any 
        other commercial damage, including but not limited to special, 
        incidental, consequential or other damages arising out of the use, 
        the result of use, or inability to use this product.

        This program is produced by a member of the Association of
        Shareware Professionals (ASP).  ASP wants to make sure that the
        shareware principle works for you.  If you are unable to resolve a
        shareware-related problem with an ASP member by contacting the
        member directly, ASP may be able to help.  The ASP Ombudsman can
        help you resolve a dispute or problem with an ASP member, but does
        not provide technical support for members' products.  Please write
        to the ASP Ombudsman at P.O. Box 5786, Bellevue, WA 98006 or send
        a Compuserve message via easyplex to ASP Ombudsman 70007,3536

        4DOS is a trademark of J.P. Software.  PKZip and PKUnzip are
        trademarks of PKWare.  4ZIP/4UNZIP and all the files and document- 
        ation distributed with it are copyright 1990 by Iram J. Weinstein.  
        All rights reserved.
        























                                       1


                            4ZIP/4UNZIP User's Guide
                                  Version 1.03

                               Copyright (C) 1990
                                 I. J. Weinstein

        A.BACKGROUND
             
             4DOS provides a way of attaching descriptions to files
        on your disk that is apparently seamless.  The descriptions
        appear on directory displays and automatically are copied
        when you COPY or MOVE a file to another disk or directory.

            But this seamless property fails as soon as you use other
        programs on your files.  For example, if you archive the files
        with the PKware programs PKZIP or PKUNZIP, the descriptions
        stay behind.  4ZIP and 4UNZIP address this problem, providing
        an automatic method to store descriptions in ZIPFiles and to
        restore them when you extract a file.

            You must have copies of the PKware utilities located on the 
        DOS Path, or in the current directory.  These shareware programs 
        are not supplied with 4ZIP/4UNZIP.  You can obtain them from many
        Shareware distributors, BBS's or from PKware directly at:

                        PKware Inc.
                        7545 North Port Washington Road
                        Glendale, WI 53217

        XD Systems is not affiliated with PKware in any way.


        B. 4ZIP USAGE

             4ZIP Usage is:

  4ZIP ZIPFILE [/am?] [d:][path][filespec] [+filespec] [+..]

             A directory display similar to that of SELECT will appear
        showing all of the files meeting any of the filespecs. This
        use of include lists is identical to the 4DOS 3.0 DIR and
        SELECT usage.  Note that only the first argument in an include 
        list can have a pathname; subsequent arguments default to the 
        same path.

             You can mark files to be ZIPped into ZipFile in several
        ways, similar to the 4DOS SELECT command, as follows:

                <+>     MARK file
                <->     UNMARK file
                <space> Toggle MARK
                <*>     MARK all files

                                       2
                         
             To move the selection bar around the list of files, use
        the following keys:

                <UP>    Move up one line
                <DOWN>  Move down one line
                <PgUp>  Move up one full screen
                <PgDn>  Move down one full screen
                <HOME>  Move to top of list
                <END>   Move to end of list

             When you are finished marking files, then:

                <ENTER> ZIP marked files into ZIPFILE
                <Esc>   Quit 4ZIP without doing anything

             4ZIP also has two options, which can be used singly or
        together, e.g., /a /m, or /am.

        /a  ZIP all files matching filespecs without query.

                4ZIP Junk /a  C:\SOURCE\*.Pas + *MATH*.INC

            would ZIP into JUNK.ZIP all files from the C:\SOURCE 
            directory that either had the extension PAS or the
            extension INC and MATH anywhere in the filename.
  
        /m  Move selected files from source directory to the ZIPFile.

            This works by deleting the files from the source
            directory after ZIPping.

            
        C. 4UNZIP USAGE

             4UNZIP Usage is:

  4UNZIP ZIPFILE [/adm?] [outpath] [d:][path][filespec] [+filespec] [+..]

             The display is identical to the 4ZIP display, showing
        all the files in the ZipFile that meet any of the filespecs.
        Marking of the files to be extracted and cursor movement
        around the screen is identical to 4ZIP.

             4UNZIP has three options.  The first two are similar to 
        the ones provided for 4ZIP.

        /a  UNZIP all files matching filespecs without query.        
        /m  Move selected files from the ZIPFile to the outpath
            directory (Current directory is default).

        /d  Delete selected files from the ZIPFile without extracting.

        This provides a convenient tool for ZipFile management,
        allowing you to select files to be removed using any

                                       3

        combination of filespecs with wild cards and the SELECT screen.
        The combination /ad will delete all the specified files
        without presenting the SELECT screen.  The combination /md
        is interpreted the same as /m alone.
        
        Outpath, if supplied, determines the directory in which the
        extracted files are to be placed.  So for example

                 4UNZIP C:\SOURCE\JUNK A:\ /am *.doc

        would extract all of the files with extension doc from the
        file  C:\SOURCE\JUNK.ZIP and place them in the root directory
        of the A: drive.  Then it would delete all of these files
        from JUNK.ZIP.


        C. REGARDING REGISTRATION

             4ZIP/4UNZIP is ShareWare. The law requires that if you use 
        this program, you must register and obtain a license for it. The 
        registration fee is $15.  A registration form is included at the 
        end of this manual.

             Registered users will be notified of upgrades to 4ZIP/4UNZIP as
        they are released, and will receive the latest version of the
        program.  Online help is available through CompuServe, by
        EasyPlex.  Help is also available by mail. I will try to answer 
        all letters within 48 hours. Non-registered users must include 
        a SASE for a reply. The degree of help available to non-registered 
        users is purely discretionary. Registrations and inquiries should 
        be sent to:

                                 Iram J. Weinstein
                                 XD Systems
                                 1014 Shipman Lane
                                 McLean, VA 22101
                                   Voice (703) 821-3215
                                   CIS 70741,3711


             Commercial use of 4ZIP/4UNZIP without payment of the reg-
        istration fee is prohibited. Site licenses are available for users 
        with multiple machines. Please contact me for information.

             The program and its associated documentation are the 
        copyrighted property of the author. Non-commercial users
        are granted the right to use copy and share 4ZIP/4UNZIP with the 
        following conditions:


                                       4

            Shareware distributors and Users Groups may charge a 
        nominal fee for copying and distributing this program
        and Bulletin Board Systems may likewise carry it. Any
        distribution of 4ZIP/4UNZIP must include without alteration 
        only the files listed: 4ZIP.EXE, 4UNZIP.EXE and 4ZIP.TXT, unchanged. 
        Permission is also given for electronic distribution of 
        archived versions of these files on electronic bulletin boards. 

   

        D. 4ZIP/4UNZIP VERSION HISTORY

  Ver 0.90 (Beta Test) 12/01/89
    This is the original release.  It used batch files to drive
    4ZIP and 4UNZIP and could only run under 4DOS.

  Ver 0.91 (Beta Test) 12/20/89
    4ZIP and 4UNZIP now stand alone, and can be run under DOS.  4UNZIP
    accesses the ZipFile Directory itself without using PKZIP -v. This is
    much faster.

  Ver 0.92 (Beta Test) 1/21/90
    Improved exception handling for DOS errors.
    Added /d and /m options to 4UNZIP
    Allow specification of destination path for the extracted files in 4UNZIP

  Ver 0.93 (Beta Test) 2/04/90
  1. Changed mark/unmark in 4ZIP and 4UNZIP to be more like the latest 
  SELECT.  Space bar toggles mark and * marks all.
  2. 4ZIP lost descriptions on some files in big directories. Now
  fixed.
  3. Ver 0.92 of 4ZIP tried to correct command line parser so that  
  C: ==> C:*.* and ABC ==> ABC\*.* if ABC is a directory but 
  ABC.* otherwise. Got it right this time!

  Version 1.0  3/11/90 
  First public release

  Version 1.01  3/21/90 
  1. Corrected error (shame on me) in 4UNZIP that included  marker
     in filename.
  2. Corrected 4UNZIP error when destination path is not source path.
  3. Minor changes in documentation.   

  Version 1.02  3/23/90 
  1. Corrected error in 4ZIP and 4UNZIP - not properly recognizing
     include lists.   

  Version 1.03  4/01/90
  Changed file access to run on networks reliably.
  Added name and serial number on registered copies.

  Version 1.04  6/10/90
  Modified to correct for 4DOS 3.0 quirk. Entries in DESCRIPT.ION
  are sometimes delimited by LF instead of CRLF.  Earlier versions of
  4ZIP/4UNZIP misread these lines.
  Corrected 4ZIP/4UNZIP to properly access ZIPfiles smaller than
  150 bytes.

                                  5


        E. 4EDIT
        
             Also take a look at 4EDIT, a full-screen editor for dir- 
        ectory comments (or, in 4DOS terms, Descriptions). I think you 
        will find it very useful.  Its good practice to comment your 
        files, and often its handy to see the descriptions attached to 
        other files, while you are writing a new one.           
  

             The 4EDIT package is shareware, available on Bulletin Boards 
        and from shareware distributors. Registration is $15.  See the order 
        form at the end of this manual.







































                                  6


                  SOFTWARE REGISTRATION FORM AND ORDER



 Check all that apply:                                    

   [ ] 4ZIP/4UNZIP registration            _____ @ $15.00    

   [ ] 4EDIT registration                  _____ @ $15.00    

       TOTAL ENCLOSED: $______


             If you already have copies of the programs you are
        ordering , where were they obtained?

    [ ]CompuServe [ ]Friend [ ]Employer [ ]BBS ______________________
 
    [ ]ShareWare Distributor ________________________________________


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










                                  7

```
{% endraw %}

## FILE2272.TXT

{% raw %}
```
Disk No: 2272
Disk Title: 4ZIP, 4EDIT & XDIR
PC-SIG Version: S1

Program Title: 4ZIP
Author Version: 1.04
Author Registration: $15.00
Special Requirements: 4DOS and PKZIP.

4ZIP is a utility for 4DOS.  Used with the PKWare file compression
program PKZIP, it save 4DOS file descriptions along with the files as
they are compressed.  The included program 4UNZIP, calls PKUnzip, and
restores the descriptions to 4DOS as each file is uncompressed.  Select
files to Zip or Unzip from a full-screen list with extended wildcards,
like 4DOS. Works with all versions of 4DOS. Also look at companion
utility, 4EDIT.
Program Title: 4Edit
Author Version: 1.02
Author Registration: $15.00
Special Requirements: 4DOS

4EDIT is a full-screen editor for 4DOS file descriptions. It is much
more convenient than the 4DOS DESCRIBE command because you can see the
descriptions for all selected files at one time. Create or edit
descriptions for any grouping of files using multiple filenames and
extended wildcards, like 4DOS.  Works with all versions of 4DOS.
Look for the companion utility 4ZIP also.

Program Title: XDIR
Author Version: 3.0
Author Registration: $25.00
Special Requirements: None.

XDIR is a commented directory utility. It displays a 65 character
comment for each file in the DIR display. You can copy, rename and move
files, carrying the comment line along. Yoy can run programs from the
directory list and supports executable extensions. With proper setup, it
will recognize the appropriate application to call for a given file
extension.




PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989, 1990 PC-SIG, Inc.
```
{% endraw %}

## SHORTDOC.DOC

{% raw %}
```
                          SHORT DESCRIPTION

     This material is extracted from the XDIR manual contained
in the file XDIR.DOC that is included with XDIR.  It gives a 
quick overview only.  Please read the manual also.

     I've tried a number of the available DOS Shell programs and Hard 
Disk Managers and am still left with two frustrations. DOS restricts 
file names to 11 characters, not enough in my opinion.  Also, I'm 
always short of space on my hard disk. It's full of files that I 
probably don't need. It would be nice to know how often I use 
SUPERPRG.EXE,  and what is it anyway?

     XDIR is my solution to this frustration. XDIR is a replacement 
for the DOS commands DIR and COPY. It allows you to add your own 
comments to be displayed along with the normal DOS directory. You 
won't have to remember what MPDPROG.MEM was all about. The directory 
will remind you with a display like:

     MPDPROG MEM  2620 01-17-87  2:19p  Maxon Paper Div. Progress Report

XDIR allows you to edit these comments freely. You can copy or move 
files between directories or to another disk, and the comment text 
will automatically go right with it.

     XDIR has seven modes: Help, Directory, Edit, Copy, Kill, Move and 
Run. These modes are selected from the command line, e.g., XDIR /e, 
and are explained in Section C.

     In addition, XDIR has a number of display options that can be 
selected as well. Options include: Pick, Sort, and alternate display 
modes.  These options are explained in Section D.

     Additional utilities provided to registered users of XDIR include 
XDCOUNT and XDUPDATE, which monitor file usage on your hard disk and 
add information to the XDIR display on the number of times that each 
file has been used and the date of the last use.  Also provided are 
XDZIP and XDUNZIP, which let you automatically save the XDIR comments 
when you ZIP files and restore them when you UNZIP.  Use of these 
utilities is described in Section F.

     XDIR is Shareware. The law requires that if you use this program, 
you must pay for it. So, if you find XDIR useful, please register your 
use with the author. The registration fee is $25.  Registered users 
will be notified of upgrades to XDIR as they are released, and will 
receive a printed copy of this manual. Online help is available 
through CompuServe, by EasyPlex. Sorry, but online help is available 
ONLY to registered users. Help is also available by mail. I will try 
to answer all letters within 48 hours. Non-registered users must 
include a SASE for a reply. The degree of help available to 
non-registered users is purely discretionary. Registrations and 
inquiries should be sent to:

               Iram J. Weinstein 
               XD Systems
               1014 Shipman Lane 
               McLean, VA 22101
               Voice (703) 821-3215 
               CIS 70741,3711

     A registration form is included at the end of this manual.

XDIR VERSION HISTORY

   Ver. 1.001/25/87
   First release, withdrawn immediately because F10 function key did 
   not work at all.

   Ver. 1.0101/26/87
   Corrected F10 problem but 'D' entered in a comment field caused 
   action identical to F10

   Ver. 1.0201/27/87
   Fixed the F10 problem correctly.

   Ver. 1.0301/29/87
   Fixed problem with Copy to current directory. Now can call:  XDIR 
   /c C:\xxx.yyy Previously required XDIR /c C:\xxx.yyy C:  
   Fixed a problem with recognizing directory names.  Previously XDIR 
   interpreted C:\XXX as equivalent to C:XXX.* This is incorrect when 
   XXX is a directory name.
   Fixed a problem with deleting Comment entries. Now Del, BSP or fill 
   with blanks works OK.
   Add listing of file names moved, same as DOS copy.  
   Extend allowable number of files in a directory to 256.  
   Extend allowable number of files moved to 128.  
   Speed up XDIR by using Quiksort routine.

   Ver. 1.0402/22/87
   General Cleanup: Reduced size and improved speed.
   Removed undocumented restriction of previous versions, which could 
   not copy or move a file larger than 38K.
   Added Sorted directory display with Name, Ext, Date and Size 
options.

   Ver. 2.01 12/01/87
   Added Pick feature.
   Added Alt-Del feature to edit option.
   Modified access to XDIR.CMT to permit XDIR /d use on networks.
   Reduced overall size with Turbo Optimizer (Reg. Turbo Power 
   Software).
   Automatically go to PICK mode if no filespec is provided with /m or 
   /c
   Add the /k mode to delete files
   Add the /w mode to provide wide display, 5 files per line 
   Add usage count for files, both executable and data 
   Add an Unsorted directory option: /S0
   Fix problem with screen color changes. Previously left yellow text 
   on black background. Change to leave colors unchanged.

   Ver. 2.023/15/88
   This Version of XDIR has been substantially rewritten. It is the 
   first version to use Turbo Pascal 4.0 and incorporates a number of 
   new features.

   Comment field increased to 65 characters from 38.  
   Scroll up and down through directory display.  
   Number of directory elements increased to 1024.
   Number of files that can be copied or moved in one command is 1024
   Directory now shows file attributes.
   Sort on comment field is included.
   Average comment file size is decreased.
   XDCNVRT.EXE is provided to change from earlier versions.  
   Memory requirements have been decreased.
   Operation is noticeably faster.
   Compatibility with Keyboard enhancers has been improved.  
   Comments can be attached to directories.
   Quick writing can be toggled off for improved compatibility.  
   XDIR defaults can be altered using the DOS SET command.

    Ver. 3.0   6/10/90 
    XDCount rewritten for improved compatibility with other TSRs.  
   Formerly, XDCount placed its XDIR.DTA file in the C: root 
   directory. But Drive C is not always a hard disk.  Now it puts the 
   file in the root of the first drive specified on the command line.  
   Automatic scheduling of XDUPDATE execution added.

   XDUPDATE was rewritten to search all hard disk root directories for 
   XDIR.DTA and processes them all.

   XDIR Run option added.

   All .EXE files compressed with LZEXE     


                  SOFTWARE REGISTRATION FORM AND ORDER



 Check all that apply:                                    

   [ ] XDIR registration                   _____ @ $25.00    

       TOTAL ENCLOSED: $______


             If you already have copies of the programs you are
        ordering , where were they obtained?

    [ ]CompuServe [ ]Friend [ ]Employer [ ]BBS ______________________
 
    [ ]Shareware Distributor ________________________________________


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

## XDIR30.DOC

{% raw %}
```











                                        
                               XDIR USER'S GUIDE
                                  VERSION 3.0
                                        
                                    June 1990




































                                  XD SYSTEMS
                               1014 SHIPMAN LANE
                                MCLEAN, VA 22101

     A. BACKGROUND............................................  1

     B. REGARDING REGISTRATION................................  2

     C. XDIR MODES............................................  2
          1. Help mode........................................  2
          2. Directory Mode...................................  2
          3. Edit mode........................................  3
          4. Copy mode........................................  4
          5. Move mode........................................  4
          6. Kill Mode........................................  5
          7. Run Mode.........................................  5

     D. DISPLAY OPTIONS.......................................  6
          1. PICK Option .....................................  6
          2. Alternative Display Formats......................  6
               a. Normal Display..............................  7
               b. Full Display................................  7
               c. Usage Display...............................  7
               d. Wide Display................................  8
          3. Sort Switch......................................  8
          4. Quick Write Display Toggle.......................  8
          5. Display of Hidden Files..........................  9
          
     E. INSTALLATION.........................................   9
          1. General Use of XDIR.............................   9
          2. Conversion from Previous Versions of XDIR.......   9
          3. Customizing XDIR Features.......................  10
     
     F. Additional Utilities for use with XDIR...............  10
          1. File Use Monitoring with XDCOUNT and XDUPDATE...  10
               a. Installing XDCOUNT.........................  10
               b. Use of XDUPDATE............................  11
               c. Use of XDUPDATE to Clear Usage Data........  12
          2. XDZIP and XDUNZIP ..............................  12
               a.  XDZIP USAGE...............................  12
               b. XDUNZIP USAGE..............................  13
          
     G. FILES SUPPLIED.......................................  14
     
     H. ASSOCIATION OF SHAREWARE PROFESSIONALS...............  15
     
     I. XDIR VERSION HISTORY.................................  16

     SOFTWARE REGISTRATION FORM AND ORDER....................  18

                         LIMITED WARRANTY

     XD Systems warrants the physical diskette enclosed herein to be 
free of defects in materials and workmanship for a period of 60 days 
from the date of purchase.  In the event of notification within the 
warranty period of defects in material or workmanship, XD Systems will 
replace the defective diskette.

     XD Systems specifically disclaims all other warranties, express 
or implied, including but not limited to implied warranties of 
merchantability and fitness for a particular purpose.  In no event 
shall XD Systems be liable for any loss of profit or any other 
commercial damage, including but not limited to special, incidental, 
consequential or other damages arising out of the use, the result of 
use, or inability to use this product.

     This program is produced by a member of the Association of 
Shareware Professionals (ASP).  ASP wants to make sure that the 
shareware principle works for you.  If you are unable to resolve a 
shareware-related problem with an ASP member by contacting the member 
directly, ASP may be able to help.  The ASP Ombudsman can help you 
resolve a dispute or problem with an ASP member, but does not provide 
technical support for members' products.  Please write to the ASP 
Ombudsman at P.O. Box 5786, Bellevue, WA 98006 or send a Compuserve 
message via easyplex to ASP Ombudsman 70007,3536

     XDZIP/XDUNZIP and all the files and documentation distributed 
with it are copyright 1990 by Iram J. Weinstein.  All rights reserved.

                          XDIR User's Guide
                            Version 3.0
                                 
                         Copyright (C) 1990
                            I.J. Weinstein

 
     A. BACKGROUND
               
     I've tried a number of the available DOS Shell programs and Hard 
Disk Managers and am still left with two frustrations. DOS restricts 
file names to 11 characters, not enough in my opinion.  Also, I'm 
always short of space on my hard disk. It's full of files that I 
probably don't need. It would be nice to know how often I use 
SUPERPRG.EXE,  and what is it anyway?

     XDIR is my solution to this frustration. XDIR is a replacement 
for the DOS commands DIR and COPY. It allows you to add your own 
comments to be displayed along with the normal DOS directory. You 
won't have to remember what MPDPROG.MEM was all about. The directory 
will remind you with a display like:

     MPDPROG MEM  2620 01-17-87  2:19p  Maxon Paper Div. Progress Report

XDIR allows you to edit these comments freely. You can copy or move 
files between directories or to another disk, and the comment text 
will automatically go right with it.

     XDIR has seven modes: Help, Directory, Edit, Copy, Kill, Move and 
Run. These modes are selected from the command line, e.g., XDIR /e, 
and are explained in Section C.

     In addition, XDIR has a number of display options that can be 
selected as well. Options include: Pick, Sort, and alternate display 
modes.  These options are explained in Section D.

     Additional utilities provided to registered users of XDIR include 
XDCOUNT and XDUPDATE, which monitor file usage on your hard disk and 
add information to the XDIR display on the number of times that each 
file has been used and the date of the last use.  Also provided are 
XDZIP and XDUNZIP, which let you automatically save the XDIR comments 
when you ZIP files and restore them when you UNZIP.  Use of these 
utilities is described in Section F.


   B. REGARDING REGISTRATION

     XDIR is distributed under the Shareware concept. The program and 
its associated documentation are the copyrighted property of the 
author. Non-commercial users are granted the right to use copy and 
share XDIR with the following conditions:

     Shareware distributors and Users Groups may charge a nominal fee 
for copying and distributing this program and Bulletin Board Systems 





                                 -1-

may likewise carry it. Any distribution of XDIR must include without 
alteration only the files listed in Section G of this documentation. 
Permission is also given for electronic distribution of archived 
versions of these files on electronic bulletin boards. 

     XDIR is Shareware. The law requires that if you use this program, 
you must pay for it. So, if you find XDIR useful, please register your 
use with the author. The registration fee is $25.  Registered users 
will be notified of upgrades to XDIR as they are released, and will 
receive a printed copy of this manual. Online help is available 
through CompuServe, by EasyPlex. Sorry, but online help is available 
ONLY to registered users. Help is also available by mail. I will try 
to answer all letters within 48 hours. Non-registered users must 
include a SASE for a reply. The degree of help available to 
non-registered users is purely discretionary. Registrations and 
inquiries should be sent to:

               Iram J. Weinstein 
               XD Systems
               1014 Shipman Lane 
               McLean, VA 22101
               Voice (703) 821-3215 
               CIS 70741,3711

     A registration form is included at the end of this manual.

     Commercial use of XDIR without payment of the registration fee is 
prohibited. Site licenses are available for users with multiple 
machines. Please contact me for information.


   C. XDIR MODES

     1. Help mode

                              XDIR /?

   Displays a series of help screens describing the XDIR modes.  If 
you can't wait to use XDIR, try this for a quick and handy tutorial.

     2. Directory Mode

        XDIR [/d] [d:][path][filename][.ext] [> outputfile]

   Displays the commented directory. This is the default option, so 
the option switch /d can be left off. You can specify the directory 
you wish to view just as with DIR, including the wildcard features '?' 
and '*'.  XDIR shows only a screen at a time. Pressing Esc will 
terminate the directory display. PgDn will produce the next screen of 
directory entries. You can scroll the display up and down through the 
directory with PgUp and PgDn. If the number of files in the display 
make up less than one full screen, the display will scroll onto the 
screen, just like the DOS display. This facilitates use of XDIR to 
display file choices in batch files. In all other situations, XDIR 

                                 



                                 -2-

will clear the screen and start the display from the top of the 
screen.

     Output redirection to the printer or a disk file is allowed in 
this mode. For example, you might print the directory of all of your 
memo files to your printer with:

                          XDIR *.mem >prn


     3. Edit mode

                XDIR /e [d:][path][filename][.ext]

     This mode allows you to add and modify the directory comments, 
which are then stored in the file XDIR.CMT. The * and ? wildcard 
features can be used. The comment field is 65 characters long and can 
contain any information you desire. The text editor provided is very 
simple, allowing the usual motion around the comment fields with the 
cursor keys. You can scroll the display up and down through the 
directory with PgUp and PgDn.  Ctrl-PgUp will display the first screen 
of the directory and Ctrl-PgDn will display the last screen. Home and 
End move the cursor to the beginning and end of the current comment 
field.  Ctrl-Home will move the cursor to the first directory entry on 
the screen and Ctrl-End will move it to the last. The Del BackSpace 
keys are active and work normally. You can toggle in and out of Insert 
mode with the Ins key. Alt-Del erases the entire comment line.

     When you write your Comment lines, you should remember that one 
of XDIR's display modes shows only the first 38 characters of the 
comment in order to be able to also display the usual DOS file 
information. If you plan ahead, you can make this first part convey 
the most essential part of your comment.

     When you leave XDIR in this mode by pressing Esc, XDIR sorts the 
comment file and writes it out to disk. This will take a noticeable 
time if the directory has many entries.

     The XDIR.CMT file can also be freely edited in any editor that 
produces an ASCII file. You must pay attention to the following 
format:

   -Column--Field -
Line 1
   1-12        XDIR Ver 3.0

All other lines
   1-8    File Name
   9      Blank
   10-12  File Extension
   13     Blank
   14-18  Number of Uses
   19     Blank
   20-27  Last Use Date





                                 -3-

   28     Blank
   29-93  Comment

     The blank columns are ignored by XDIR.  If you should create a 
file with more than 93 characters, the excess characters will simply 
be ignored when XDIR reads the file. Any subsequent edit by XDIR will 
produce a new file with all of the excess characters deleted.

   IMPORTANT: If you do edit XDIR.CMT in your own editor, you must be 
sure to sort the entries by columns 1-12 in ascending order.  XDIR 
expects to find a sorted file.

     4. Copy mode

      XDIR /c [d:]path\filename.ext [d:]path[filename][.ext]

     In this mode XDIR copies files in the same manner as the DOS COPY 
command. It also copies the corresponding records (if they exist) from 
XDIR.CMT and inserts them into the file of the same name in the 
destination directory, creating the file if necessary. The * and ? 
wildcard features can be used.

     If a file with the same name exists in the destination directory, 
XDIR will ask you before it overwrites the file.

     5. Move mode

      XDIR /m [d:]path\filename.ext [d:]path[filename][.ext]

     This mode is used to MOVE files between directories, or from one 
disk to another. The * and ? wildcard features can be used.  This is a 
feature not provided by DOS. When the two directories are on the same 
disk, the operation is very fast because XDIR changes the DOS 
directory entries and does not to copy the files themselves. When the 
destination directory is located on a different disk, each file is 
first copied to the destination and then deleted from the source 
directory. In any case, the XDIR comment records are transferred 
properly.

     If a file to be moved is marked with the Read-Only file 
attribute, and the Move is not between directories on the same disk, 
XDIR will ask you before deleting the file from its source directory. 
Also, if a file with the same name exists in the destination 
directory, XDIR will ask you before it overwrites a file.

     This mode can also be used to rename a file. This use is 
identical to the DOS RENAME feature, but it also updates the entry in 
the XDIR.CMT file.

                                 









                                 -4-

     6. Kill Mode

                   XDIR /k [d:]path\filename.ext

     This mode is used to KILL or delete files from the 
directory,similar to the DOS DELETE or ERASE commands. The * and ? 
wildcard features can be used. XDIR displays a directory listing of 
files that satisfy the given filespec and then permits you to PICK 
from these files those that you wish to KILL. This PICK option allows 
you to select an arbitrary group of files for action. The option is 
automatic for the KILL mode but may also be selected for other 
Modes(see Section D.1).  After you have picked the files to be 
deleted, XDIR will ask you for confirmation before actually deleting 
the files.

     7. Run Mode

     This mode lets you select one or more files from the XDIR display 
and run a suitable program for each file.  There are several different 
options here.  The simplest requires you to specify the program to run 
when you call XDIR.  For example, assuming you have a LIST program, 
then

                         XDIR /RLIST *.DOC

would display all of the .DOC files in the current directory, let you 
select any of them you wanted, and then LIST each file in turn.

     You can specify any executable program you want, and can also 
specify parameters for the program.  For example:

                 XDIR /RC:\TP\TPC *.PAS /m /$D+ /V

     You can also use /R without a command.  This works as you would 
expect if the files you select are executable EXE, COM or BAT files.  
But you can also set up XDIR to recognize files by extension, and then 
execute an appropriate program.  So, if you use extension .WPD for 
your WordPerfect documents, then you could do this:

                           XDIR /R *.WPD

Then, simply scan the directory display of WordPerfect documents, 
select the one you want and XDIR will automatically call WordPerfect 
and load the document.

     To make this magic work, you must tell XDIR what to do for the 
WPD extension, using a DOS environment variable.  This is really very 
simple.  For this example,
from the DOS prompt you would enter the following:

                        SET .WPD=C:\WP51\WP

     When you select a WPD file, XDIR knows that DOS will not execute 
it, and looks in the environment for .WPD and incorporates the 
information.  




                                 -5-

     More complicated commands can easily be implemented.  If your 
program needs Switches or other parameters, just add them to the 
environment variable.  Ordinarily, XDIR will make a command consisting 
of the environment string followed by the selected filename.  If you 
want to insert the selected filename in the middle somewhere, signify 
the place in the environment string with %1, as in batch files. 

     If there is NO matching environment string then XDIR will attempt 
to execute each selected file.  If Filename.ext is an executable file, 
(COM, EXE, BAT), it will be executed.  Otherwise DOS will report an 
error.

     For all ways of using the /R option, XDIR will display each 
command line that it constructs at the bottom of the screen before 
attempting to execute it.  You can freely edit the line, correcting 
errors, and adding parameters if you need to.  When you're ready to 
execute the command, just press ENTER.  If you change your mind and 
don't want a command to execute, press ESCape.


   D. DISPLAY OPTIONS

     1. PICK Option 

      XDIR /kp [d:]path\filename.ext [d:]path[filename][.ext]

     This feature allows you to select an arbitrary group of files for 
action. The option is automatic for the KILL and RUN modes. It may 
also be selected for the COPY or MOVE modes. XDIR displays a directory 
of files that satisfy the given filespec and then permits you to PICK 
from these files those that you want. Move the cursor up and down with 
the cursor keys. You can scroll through the directory with the PgUp, 
PgDn, Ctrl-PgUp and Ctrl-PgDn keys. Ctrl-Home and Ctrl-End move the 
cursor to the top and bottom of the screen. Files can be picked or 
unpicked with successive pressings of the Space Bar. Only the files 
that are picked at the time you press ESC are copied, moved, killed or 
run.

     2. Alternative Display Formats

     XDIR presents the directory data in four alternative formats; 
examples of each are discussed below.

        a. Normal Display

               XDIR /n [/Mode] [/any other options]

     This display is the same as the DOS DIR display, with 38 
characters of the XDIR comment shown as well. Since many times, 38 
characters is sufficient for a file comment, the whole comment may be 
displayed. If the file comment is longer, as is the case for the entry 
XDIR.EXE, then it is truncated.







                                 -6-

        b. Full Display

   XDIR /f [/Mode] [/Other Options]

   XDIR   CMT  Usage Record Beginning 7-15-87
   XDCOUNTEXE  TSR: Monitors/records file openings
   XDIR   EXE  Latest version of XDIR: fixes all known bugs
   XDUPDATEEXE Updates XDIR.CMT with usage data from XDCOUNT data 
files

        c. Usage Display

                 XDIR /u [/Mode] [/Other Options]

     This option causes XDIR to display its information in a slightly 
different format, as shown here:


   XDIR   CMT   3609 6-07-90  12:11a a  144  6-07-90
   XDCOUNTEXE  12968 6-02-90   3:00a r   28  6-07-90
   XDIR   EXE  29418 6-02-90   3:00a a  245  6-07-90
   XDUPDATEEXE 17824 6-02-90   3:00a a   28  6-07-90

     The first four fields are the same as the standard DOS display. 
The next field shows the DOS attributes of each file.  Letters a,h,n,r 
and s are used: 

        [a]rchive - a file that has been modified since backup; 
        [h]idden - a file that is intentionally hidden from the DOS 
        DIR display; 
        [n]ormal - any file not a,h,r, or s; 
        [r]ead-only - a file that cannot be deleted by the DOS Delete 
        command; and [s]ystem - a special DOS file. 

     The number after the attribute field is the number of uses that 
have been recorded for the file. (The comment associated with XDIR.CMT 
always shows the date when recording started for this directory.) The 
date in the last field is the date the file was last used.

     The usage display is very helpful when it comes time to prune 
files you really don't need from your hard disk. You can PICK files to 
KILL or MOVE to a floppy disk, while looking at how often you use them 
and your comments.

     For instance:

                    XDIR /su /kd c:\utils\*.exe

will display all of the files with extension EXE, sorted by decreasing 
number of uses, so you can select files to be deleted.  If you want to 
save these files to a floppy disk in drive B command would be:

                  XDIR /su /mp c:\utils\*.exe B:






                                 -7-

        d. Wide Display  

                 XDIR /w [/Mode] [/Other Options]

     This option causes the directory names to be displayed five to a 
row. No other information is displayed. The display is similar to the 
DOS DIR /w command.

XDCOUNT COM  XDIR CMT  XDIR EXE  XDIR SRT  XDIRALL   BAT
XDUPDATECOM


     3. Sort Switch

XDIR [/SD] [/SE] [/SL] [/SN] [/SS] [/SU] [/S0] [/mode] [/Other Options]

     The XDIR directory display is usually sorted. The sort type is 
determined by adding one of the four sort commands anywhere in the 
command line. /SN is the default.

   /SA Directory is sorted by file attributes

   /SC Directory is sorted by XDIR comment, in alphabetical order

  /SD Directory is sorted by Date and Time, presenting the newest 
file first.

   /SE Directory is sorted in increasing alphabetical order, first by 
   Extension, then by File Name.

   /SL Directory is sorted by date of last use and then by File Name.

   /SN Directory is sorted in increasing alphabetical order by File 
   Name and then by Extension.

   /SS Directory is sorted by file size, presenting the largest file 
   first.

   /SU Directory is sorted by number of uses, with the most used file 
   presented first.

   /S0 Directory is not sorted. The order is the same as presented by 
   the DOS DIR command.


     4. Quick Write Display Toggle

                              XDIR /Q

     XDIR ordinarily sends output directly to video memory. This 
provides the quickest screen display and can be used on IBM machines 
and true compatibles. However, this quick write procedure has 
incompatibility problems with some clones and with some software.






                                 -8-

     If you have any problems with the XDIR screen display, you can 
disable the quick write feature of XDIR with the /Q option.  Users 
with IBM Color Graphics adapters will probably find the display more 
pleasing with this option selected.  See Section E.3 to learn how to 
customize XDIR to automatically use /Q.

     5. Display of Hidden Files

     DOS allows programs to be marked "Hidden".  These files are not 
shown in the normal DOS DIR display.  XDIR also ignores hidden files 
unless the /h option is selected.  Then, hidden files are displayed 
and can have comments attached, but they can't be copied or moved.


   E. INSTALLATION  

     1. General Use of XDIR

   XDIR has been thoroughly tested with DOS 3.0-3.3.  The program will 
work with DOS 2.x but the /m option will not function properly for 
moves between subdirectories on the same disk.

   XDIR should be available to you all the time. If you have a hard 
disk, make sure that XDIR is located in a directory in the current 
path. The easiest installation is as follows (assuming that the XDIR 
files are in Drive A:)

          C:\
          A:XDIR /c A:*.*

   Also make sure your autoexec.bat file contains a line with

          PATH=C:\;

   If you don't have a hard disk, best use of XDIR is obtained if you 
load it on to a Ramdisk and then PATH the Ramdisk.

     2. Conversion from Previous Versions of XDIR

   If you have a version of XDIR earlier than Version 2.02, you will 
need to convert your XDIR.CMT files to a new format.  The program 
XDCNVRT.EXE is provided for this purpose. To use XDCNVRT, the 
following steps are required:

        a. Set the current drive and path to the directory containing 
XDCNVRT. Typically this would involve:

          >CD A:\
          >A:










                                 -9-

        b. Execute XDCNVRT, specifying the drive to be worked on.  
XDCNVRT will automatically convert all XDIR.CMT files on that drive.  
You must carry out this step on all disks that have XDIR.CMT files.  
For example:

          XDCNVRT C:


     3. Customizing XDIR Features

   The actions to be taken by XDIR are all specified from the command 
line. Several default options have been set under the assumption that 
they are the ones you will use most often. As a result, the following 
are equivalent commands:

          XDIR

          XDIR /d /n /sn *.*

   If you find that you prefer other command line default entries, you 
can set them using the DOS Environment SET feature.  SET is a DOS 
command that you can execute from the > prompt. For example, if you 
normally prefer to see the display sorted by extension, and do not 
want the Quick write feature, these can be made defaults as follows:

          SET XDIR=/se /q

   You can remove any options that you have SET with the following DOS 
command:

          SET XDIR=

   When you are sure of the defaults that you want, it's convenient to 
put your SET command into your AUTOEXEC.BAT file.


   F. ADDITIONAL UTILITIES FOR USE WITH XDIR

     Registered users of XDIR receive several utilities designed to 
enhance its use.  These utilities are described in this section.

     1. File Use Monitoring with XDCOUNT and XDUPDATE

   This feature is implemented only for hard disks. Usage on floppies 
or RAM Disks is not recorded, and is simply ignored by the system.

        a. Installing XDCOUNT

   File use monitoring is implemented in two steps. The program 
XDCOUNT.EXE is a resident module that goes into action whenever one of 
your programs is executed or a data file opened for use. XDCOUNT 
registers these events and writes the usage data to the file XDIR.DTA 
for later use. The program XDUPDATE.EXE must be called periodically to 
transfer this use data to the appropriate XDIR.CMT files.  You can set 
up XDCOUNT to call XDUPDATE automatically if you wish.




                                 -10-

   XDCOUNT has two command line options:

                    XDCOUNT [nnn] [Drive ...] 

   If you have more than one hard disk, you can specify which ones you 
want XDCount to watch.  If you don't specify a drive, XDCOUNT will 
ignore activity on that drive. Be sure to specify only HARD drives. If 
you do not specify any drive letters, drive C is assumed.  The best 
way to install XDCOUNT is to place it in your Autoexec.bat file.  
XDCount will record usage of all files called after it.  So remember, 
that commands in your autoexec file before XDCOUNT will not be 
recorded.

   Conflicts have been reported between previous versions of XDCOUNT 
and other resident software (TSRs).  These have  all been cured.  The 
new version is very robust.  You should find it quite accommodating to 
the various other TSRs you use.  Nevertheless, there is always some 
possibility of undesirable interactions among resident programs.  In 
the unlikely event that you experience any difficulty, experiment with 
moving the location of XDCOUNT forward in the autoexec file, after 
other TSRs.  If this doesn't work, experiment with removing all other 
TSRs and then restoring them one by one until the conflicting software 
is found.  If you find any conflicts, please let us know the details, 
including your hardware configuration, and the contents of your 
autoexec.bat and config.sys files.

     The second XDCOUNT option provides for automatic execution of 
XDUPDATE (see below).

        b. Use of XDUPDATE

     XDUPDATE transfers file usage data from the temporary XDIR.DTA 
file that XDCOUNT creates to the XDIR.CMT files located in each 
subdirectory.  When done, it deletes XDIR.DTA.  You can run XDUPDATE 
whenever you want, as a minimum, once a day.  However, it may take 
several minutes if you have had a lot of file usage since the last 
time.  You can call XDUPDATE in your autoexec file, to make sure it is 
run every time you PC is started up.  Alternatively, you can arrange 
to have XDUPDATE run automatically whenever you are away from the 
keyboard and the machine is idling at the DOS prompt.  TO do this, 
specify how many minutes you want your system to be at the DOS prompt 
before XDUPDATE is automatically invoked.  If you are often away from 
your machine for extended periods of time, XDUPDATE will be run in 
your absence, and you'll never have to worry about it.  Be sure to 
include the subdirectory containing XDUPDATE.EXE in your DOS PATH 
specification.

     For example, if you keep XDUPDATE in the UTILS directory, and 
want it to wait 15 minutes before starting:

                          XDCOUNT 15 c d 








                                 -11-

        c. Use of XDUPDATE to Clear Usage Data

   Occasionally, it is useful to CLEAR the usage data in a directory, 
or group of directories to zero. You can do this for a single 
directory by making it the Current Directory and then executing 
XDUPDATE /C .

          ChangeDir C:\memos
          XDUPDATE /C

   If you wish to clear a directory and all of its Subdirectories, use 
XDUPDATE /S. For example, to clear all of the usage data on your hard 
disk:

          ChangeDir C:\
          XDUPDATE /S

     2. XDZIP and XDUNZIP 

   XDIR provides a way of attaching descriptions to files on your disk 
that is apparently seamless.  The descriptions appear on directory 
displays and automatically are copied when you COPY or MOVE a file to 
another disk or directory.

   But this seamless property fails as soon as you use other programs 
on your files.  For example, if you archive the files with the PKware 
programs PKZIP or PKUNZIP, the descriptions stay behind.  XDZIP and 
XDUNZIP address this problem, providing an automatic method to store 
descriptions in ZIPFiles and to restore them when you extract a file.

   You must have copies of the PKware utilities located on the DOS 
Path, or in the current directory.  These shareware programs are not 
supplied with XDZIP/XDUNZIP.  You can obtain them from many Shareware 
distributors, BBS's or from PKware directly at:

        PKware Inc.
        7545 North Port Washington Road
        Glendale, WI 53217

PKZIP and PKUNZIP are trademarks of PKware.  XD Systems is not 
affiliated with PKware in any way.

        a.  XDZIP USAGE

   XDZIP Usage is:

        XDZIP ZIPFILE [/am?] [d:][path][filespec] [+filespec] [+..]

     A directory display similar to XDIR's will appear showing all of 
the files meeting any of the filespecs. You can specify several 
different file groupings, each with DOS wildcards.  Note that only the 
first one in the list can have a pathname; subsequent arguments 
default to the same path.






                                 -12-

     You can mark files to be ZIPped into ZipFile in several ways, 
similar to the XDIR SELECT command, as follows:

        <+>    MARK file
        <->    UNMARK file
        <space>   Toggle MARK
        <*>    MARK all files
                         
   To move the selection bar around the list of files, use the 
following keys:

        <UP>   Move up one line
        <DOWN>    Move down one line
        <PgUp> Move up one full screen
        <PgDn>    Move down one full screen
        <HOME>    Move to top of list
        <END>  Move to end of list

     When you are finished marking files, then:

        <ENTER>   ZIP marked files into ZIPFILE
        <Esc>  Quit XDZIP without doing anything

     XDZIP also has two options, which can be used singly or together, 
e.g., /a /m, or /am.

     /a  ZIP all files matching filespecs without query.

     So, for example

            XDZIP Junk /a  C:\SOURCE\*.Pas + *MATH*.INC

would ZIP into JUNK.ZIP all files from the C:\SOURCE directory that 
either had the extension PAS or the extension INC and MATH anywhere in 
the filename.
  
     /m  Move selected files from source directory to the ZIPFile.

   This works by deleting the files from the source directory after 
   ZIPping.
            
        b. XDUNZIP USAGE

     XDUNZIP Usage is:

XDUNZIP ZIPFILE [/adm?] [outpath] [d:][path][filespec] [+filespec] [+..]

     The display is identical to the XDZIP display, showing  all the 
files in the ZipFile that meet any of the filespecs.  Marking of the 
files to be extracted and cursor movement  around the screen is 
identical to XDZIP.

     XDUNZIP has three options.  The first two are similar to the ones 
provided for XDZIP.





                                 -13-

     /a  UNZIP all files matching filespecs without query.  

     /m  Move selected files from the ZIPFile to the outpath directory 
     (Current directory is default).

     /d  Delete selected files from the ZIPFile without extracting.

     This provides a convenient tool for ZipFile management, allowing 
you to select files to be removed using any combination of filespecs 
with wild cards and the SELECT screen.  The combination /ad will 
delete all the specified files  without presenting the SELECT screen.  
The combination /md is interpreted the same as /m alone.
  
     Outpath, if supplied, determines the directory in which the 
extracted files are to be placed.  So for example:

                  XDUNZIP C:\SOURCE\JUNK A:\ /am *.doc

would extract all of the files with extension doc from the file 
C:\SOURCE\JUNK.ZIP and place them in the root directory of the A: 
drive.  Then it would delete all of these files  from JUNK.ZIP.


    G. FILES SUPPLIED

   The files supplied with the shareware version of XDIR are:

   XDC.BAT        Equivalent to XDIR /c -- Copies files
   XDE.BAT        Equivalent to XDIR /e -- Edit file comments
   XDM.BAT        Equivalent to XDIR /m -- Move files between 
directories 
   XDIR.DOC       To print enter: TYPE XDIR.DOC > prn
   XDIR.EXE       Latest version of XDIR: fixes all known bugs.  
   XDCNVRT.EXE    Convert older XDIR.CMT files to version 3.0 format

   The three batch files are provided for your convenience.  It's 
easier to use them than typing XDIR /xx. You are free to rename these 
files if you wish. If you use an extended DOS editor like DOSEDIT or 
CED, you will find it most convenient to replace these batch files 
with synonym commands.

     Additional files provided to registered users are:

   XDCOUNT.EXE    TSR: Monitors/records file openings
   XDUPDATE.EXE   Updates XDIR.CMT with usage data from XDCOUNT data 
files
   XDZIP.EXE      ZIP files, automatically including XDIR Comments
    XDUNZIP.EXE   UNZIP files, and restore stored comments to XDIR

These files are not shareware and may not be distributed.









                                 -14-

   H. ASSOCIATION OF SHAREWARE PROFESSIONALS

     The author of this program is a member of the Association of 
Shareware Professionals (ASP), an organization formed in April 1987 to 
strengthen the future of shareware (user-supported software) as an 
alternative to commercial software.  Its members, all of whom are 
programmers who subscribe to a code of ethics, are committed to the 
concept of shareware as a method of marketing.

     ASP has established stringent standards for its members.  ASP 
wants to make sure that the shareware principle works for you.  If you 
are unable to resolve a problem with an ASP member (other than 
technical support), ASP may be able to help.  Please write to the ASP 
Ombudsman at P.O. Box 5786, Bellevue, WA 98006.

     The primary goals of the ASP are:
        To inform users about shareware programs and about shareware 
        as a method of distributing and marketing software;
        To encourage broader distribution of shareware through user 
        groups and disk dealers who agree to identify and explain the 
        nature of shareware;
        To assist members in marketing their software;
        To provide a forum through which ASP members may communicate, 
        share ideas, and learn from each other; and
        To foster a high degree of professionalism among shareware 
        authors by setting programming, marketing, and support 
        standards for ASP members to follow.


            Standards for the Association of Shareware Professionals

   PROGRAMMING STANDARDS:

   The program meets the ASP's definition of "shareware" (i.e., it is 
   not a commercial demo with major feature disabled, nor a time- 
   limited program).

   The program has been thoroughly tested by the author and should not 
   be harmful to other files or hardware if used properly.
   DOCUMENTATION STANDARDS:

   Sufficient documentation is provided to allow the average user to 
   try all the major functions of the program.

   Any discussion of the shareware concept and of registration 
   requirements is done in a professional and positive manner.

   SUPPORT STANDARDS:

   The member will respond to people who send registration payments, 
   as promised in the program's documentation.  At a minimum, the 
   member will acknowledge receipt of all payments.







                                 -15-

   I. XDIR VERSION HISTORY

   Ver. 1.001/25/87
   First release, withdrawn immediately because F10 function key did 
   not work at all.

   Ver. 1.0101/26/87
   Corrected F10 problem but 'D' entered in a comment field caused 
   action identical to F10

   Ver. 1.0201/27/87
   Fixed the F10 problem correctly.

   Ver. 1.0301/29/87
   Fixed problem with Copy to current directory. Now can call:  XDIR 
   /c C:\xxx.yyy Previously required XDIR /c C:\xxx.yyy C:  
   Fixed a problem with recognizing directory names.  Previously XDIR 
   interpreted C:\XXX as equivalent to C:XXX.* This is incorrect when 
   XXX is a directory name.
   Fixed a problem with deleting Comment entries. Now Del, BSP or fill 
   with blanks works OK.
   Add listing of file names moved, same as DOS copy.  
   Extend allowable number of files in a directory to 256.  
   Extend allowable number of files moved to 128.  
   Speed up XDIR by using Quiksort routine.

   Ver. 1.0402/22/87
   General Cleanup: Reduced size and improved speed.
   Removed undocumented restriction of previous versions, which could 
   not copy or move a file larger than 38K.
   Added Sorted directory display with Name, Ext, Date and Size 
options.

   Ver. 2.01 12/01/87
   Added Pick feature.
   Added Alt-Del feature to edit option.
   Modified access to XDIR.CMT to permit XDIR /d use on networks.
   Reduced overall size with Turbo Optimizer (Reg. Turbo Power 
   Software).
   Automatically go to PICK mode if no filespec is provided with /m or 
   /c
   Add the /k mode to delete files
   Add the /w mode to provide wide display, 5 files per line 
   Add usage count for files, both executable and data 
   Add an Unsorted directory option: /S0
   Fix problem with screen color changes. Previously left yellow text 
   on black background. Change to leave colors unchanged.

   Ver. 2.023/15/88
   This Version of XDIR has been substantially rewritten. It is the 
   first version to use Turbo Pascal 4.0 and incorporates a number of 
   new features.

   Comment field increased to 65 characters from 38.  





                                 -16-

   Scroll up and down through directory display.  
   Number of directory elements increased to 1024.
   Number of files that can be copied or moved in one command is 1024
   Directory now shows file attributes.
   Sort on comment field is included.
   Average comment file size is decreased.
   XDCNVRT.EXE is provided to change from earlier versions.  
   Memory requirements have been decreased.
   Operation is noticeably faster.
   Compatibility with Keyboard enhancers has been improved.  
   Comments can be attached to directories.
   Quick writing can be toggled off for improved compatibility.  
   XDIR defaults can be altered using the DOS SET command.

    Ver. 3.0   6/10/90 
    XDCount rewritten for improved compatibility with other TSRs.  
   Formerly, XDCount placed its XDIR.DTA file in the C: root 
   directory. But Drive C is not always a hard disk.  Now it puts the 
   file in the root of the first drive specified on the command line.  
   Automatic scheduling of XDUPDATE execution added.

   XDUPDATE was rewritten to search all hard disk root directories for 
   XDIR.DTA and processes them all.

   XDIR Run option added.

   All .EXE files compressed with LZEXE     
































                                -17-

                  SOFTWARE REGISTRATION FORM AND ORDER



 Check all that apply:                                    

   [ ] XDIR registration                   _____ @ $25.00    

       TOTAL ENCLOSED: $______


             If you already have copies of the programs you are
        ordering , where were they obtained?

    [ ]CompuServe [ ]Friend [ ]Employer [ ]BBS ______________________
 
    [ ]Shareware Distributor ________________________________________


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

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2272

     Volume in drive A has no label
     Directory of A:\

    4EDIT    EXE     44828   6-10-90   1:03a
    4EDIT    TXT     13185   6-10-90   1:03a
    4UNZIP   EXE     46156   6-10-90   1:04a
    4ZIP     EXE     48540   6-10-90   1:04a
    4ZIP     TXT     14612   6-10-90   1:04a
    SHORTDOC DOC      7420   6-10-90   3:00a
    XDC      BAT        17   6-10-90   3:00a
    XDCNVRT  EXE      5565   6-10-90   3:00a
    XDE      BAT        19   6-10-90   3:00a
    XDIR     CMT       621   6-10-90   8:00a
    XDIR     EXE     29418   6-10-90   3:00a
    XDIR30   DOC     42708   6-10-90   3:00a
    XDM      BAT        17   6-10-90   3:00a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1002   8-27-90   9:28a
    FILE2272 TXT      1699   8-27-90   9:31a
           16 file(s)     255845 bytes
                           57344 bytes free
