---
layout: page
title: "PC-SIG Diskette Library (Disk #3485)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3485/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3485"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## REGISTER.TXT

{% raw %}
```
             Zip Comment Editor & Zip Directory v1.1 REGISTRATION FORM
             ---------------------------------------------------------

    Name: _________________________________________________________________

    Address: ______________________________________________________________

    _______________________________________________________________________

    _______________________________________________________________________

    Phone: ______________________________________

    Type of PC Used: ______________________________ DOS Version: __________

    Hardware Configuration: _______________________________________________

    
    Where did you hear about ZCE and ZD? __________________________________

    _______________________________________________________________________


    Comments and Suggestions: _____________________________________________

    _______________________________________________________________________

    _______________________________________________________________________



    ______ Registration(s) of ZCE and ZD @$10.00 for both _________________


    ______ 5.25" or 3.5" Diskette(s) @$5.00 each __________________________


                                            Total: ________________________


    Check or money order should be made payable to:

    		Michael D. Boling
    		974 Mission Ridge Drive
    		Manteca, CA 95336

    Information will be sent that will allow ZCE and ZD to run without the
    shareware banner for this and one future version.  Messages regarding
    problems and enhancement requests may be sent to me or messages may be 
    left on the Vanguard BBS (408) 988-0288.
```
{% endraw %}

## ZCE.DOC

{% raw %}
```












                        Zip Comment Editor and Zip Directory
                        =----------------------------------=


                                   Users's Guide

                                    Version 1.1

                                    June 3, 1991



                              Copyright (C) 1990, 1991

                                         by

                                 Michael D. Boling


                                All Rights Reserved
































COPYRIGHT NOTICE

         ZCE & ZD Version 1.1

         Copyright (c) 1990, 1991 by Michael D. Boling All Rights Reserved.

         Zip Comment Editor (ZCE) and companion program Zip Directory (ZD)
         allow editing and viewing of Zip file Comments.

         ZCE and ZD have been released as shareware.  This means the
         version you have is fully functional.  It also means that within
         30 days you decide to use ZCE or ZD, you are obligated to pay a
         licensing fee or stop using them.

         ZCE and ZD are copyrighted and may be distributed only under the
         following conditions:

         No fee of over $10.00 may be charged for distribution.  This
         restriction applies only to physical copies and is not meant to
         prevent distribution by telecommunication services.

         All ZCE files must be distributed together in original, unaltered
         form.  This includes ZCE.EXE, ZD.EXE, ZCE.DOC, ZCE.NEW, ZCE.HLP,
         FILES.LST and REGISTER.TXT.

         You may use these programs at your own risk.  They have been
         tested by me on my own computer, but I will not assume any
         responsibility for any problems which ZCE or ZD may cause you.  If
         you do encounter a problem, please let me know about it, and I
         will do my best to verify and repair the error.


LIMITED WARRANTY

         THE PROGRAMS CONTAINED IN THIS PACKAGE ARE PROVIDED "AS IS"
         WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED,
         INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
         MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.  THE ENTIRE
         RISK RELATED TO THE QUALITY AND PERFORMANCE OF THE PROGRAMS IS ON
         YOU.  IN THE EVENT THERE IS ANY DEFECT, YOU ASSUME THE ENTIRE COST
         OF ALL NECESSARY SERVICING, REPAIR, OR CORRECTION.  SOME STATES DO
         NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE
         EXCLUSION MAY NOT APPLY TO YOU.  THIS WARRANTY GIVES YOU SPECIFIC
         LEGAL RIGHTS WHICH VARY FROM STATE TO STATE.

         It is expected that if you find ZCE and ZD useful, you must
         register your copy.  Registration entitles you to receive
         information to remove trailing banners for this and one future
         version of ZCE and ZD.











    Table of Contents

          What are ZCE and ZD?  . . . . . . . . . . . . . .     1
          ZCE Features  . . . . . . . . . . . . . . . . . .     2
          ZD Features . . . . . . . . . . . . . . . . . . .     2
          Limitations of ZCE and ZD . . . . . . . . . . . .     2
          ZCE & ZD System Requirements  . . . . . . . . . .     2
          ZCE & ZD Document Information . . . . . . . . . .     2
          Using ZCE <Zip Comment Editor>  . . . . . . . . .     3
          ZCE Command Line Examples . . . . . . . . . . . .     3
          ZCE Command line switches . . . . . . . . . . . .     4
          ZCE Command Line Display Options  . . . . . . . .     4
          ZCE Environment Variable  . . . . . . . . . . . .     4
          Example ZCE Screen  . . . . . . . . . . . . . . .     5
          ZCE Main Window Editing Keys  . . . . . . . . . .     6
          ZCE Commands  . . . . . . . . . . . . . . . . . .     6
          F1 = On Line Help Window Functions  . . . . . . .     6
          Mouse Help Window Functions . . . . . . . . . . .     6
          F2 = Re-Read Zip Comments . . . . . . . . . . . .     7
          F3 = Write Zip Comments . . . . . . . . . . . . .     7
          F4 = New File Specification & Read Comments . . .     7
          F5 = Copy Comment from Another File . . . . . . .     7
          F6 = Import Zip Comments from a File  . . . . . .     8
          ZCE Import settings file  . . . . . . . . . . . .     8
          Import Commands . . . . . . . . . . . . . . . . .     8
          Import Settings Filename  . . . . . . . . . . . .     8
          Import Comments Filename  . . . . . . . . . . . .     9
          Import Starting Comment Column  . . . . . . . . .     9
          Import Edit/Auto  . . . . . . . . . . . . . . . .     9
          Import Comment Search Tagged/All  . . . . . . . .     9
          Import Editing Commands . . . . . . . . . . . . .     9
          F7 = Volume Label . . . . . . . . . . . . . . . .    10
          F8 = Dos Shell  . . . . . . . . . . . . . . . . .    10
          F9 = Tag/Untag file for Import  . . . . . . . . .    10
          F10 = Tad/Untag All Files . . . . . . . . . . . .    11
          Escape = Exit ZCE . . . . . . . . . . . . . . . .    11
          Tab = Restore Comment . . . . . . . . . . . . . .    11
          Shift-F1 = Display ZCE variable status  . . . . .    11
          Shift-F2 = Tag Files with Blank Comments  . . . .    11
          Using ZD <Zip Directory>  . . . . . . . . . . . .    12
          ZD Command Line Examples  . . . . . . . . . . . .    12
          ZD Command line switches  . . . . . . . . . . . .    12
          ZD Command Line Display Options . . . . . . . . .    13
          ZD Command Line Color Options . . . . . . . . . .    13
          ZD Command Line Sorting Options . . . . . . . . .    13
          ZD Pause Control Options  . . . . . . . . . . . .    13
          ZD Environment Variable . . . . . . . . . . . . .    14
          ACKNOWLEDGEMENTS  . . . . . . . . . . . . . . . .    15










          Basic Libraries . . . . . . . . . . . . . . . . .    15
          Future Versions of ZCE & ZD . . . . . . . . . . .    16




















































1.1 - What are ZCE and ZD?                                           Page 1
---------------------------------------------------------------------------


1.1  What are ZCE and ZD?

         Have you ever looked in a directory or a diskette and wondered
         what was in those zip files?  I have on many occasions.  That's
         why I created ZCE and ZD.

         ZCE and companion program ZD allow easy editing and displaying of
         zip comments.  Once zip comments are added to zip files, you will
         never have to unzip them to know what programs are inside.  You
         won't have to unzip them and look for the infamous readme or .doc
         file to find out what the programs are inside.  I found this very
         time consuming and usually found that this zip file was not the
         program I was looking for anyway.  Once zip comments are added ,
         some disk cataloging programs can automatically read these
         comments and add them to disk catalog reports.  ZD will quickly
         display any comments found in your zip files.

         (1)PKZIP is just to time consuming when adding zip comments to
         many zip files.

         What are zip's and what are zip comments anyway?  PKZIP is a
         program that reduces all file types to compacted binary form and
         stores as many files as you want in one file.  This is great for
         upload/downloading via modem from work or Bulletin Board Systems.
         Please find/download or borrow find out about PKZIP.  It may be
         the most widely used program on pc's today.  It certainly saves
         lots of disk space.  I encourage you to read the documentation
         included with PKZIP.

         PKZIP allows comments to be stored inside of zip files.  This
         allows users to add information about the programs inside or any
         other information.  You may see the zip comments displayed in the
         form of advertisements when unzipping a zip file.  This is the
         main use on BBS's today.  ZCE and ZD are not for BBS SYSOP's to
         store adds in zip files, but for everyday users to store important
         information in the zip comment.

         (1)PKZIP Is a registered trademark of PKWARE Inc.















---------------------------------------------------------------------------
ZCE & ZD v1.1 Users' Manual                      1.1 - What are ZCE and ZD?
Page 2                                          ZCE & ZD v1.1 Users' Manual
---------------------------------------------------------------------------


1.2  ZCE Features

         Display and edit zip comments
         Save comments into zip files
         On line help
         Re-read zip comments
         Copy comment from another file
         Import comments from external file
         Modify floppy volume labels
         Shell to dos
         Tag/Untag files for import of comments
         EGA/VGA 43/50 line support


1.3  ZD Features

         Companion program to ZCE
         Quickly display file names and zip comments
         Display file date, time, size and zip comment
         Color options
         File sorting options
         EGA/VGA 43/50 line support


1.4  Limitations of ZCE and ZD

         Current limit is set to 500 files in any one directory depending
         on the file specification entered.


1.5  ZCE & ZD System Requirements

         ZCE and ZD have been designed to work properly on the (*)IBM-PC,
         IBM-XT, IBM-AT, PS/2, and any close compatible.  ZCE and ZD
         require about 256K of ram to execute.  ZCE and ZD require PC/MS
         DOS version 2.1 or later.

         * IBM-PC, IBM-XT, IBM-AT are trademarks of International Business
         Machines Corporation, Boca Roton, Florida.


1.6  ZCE & ZD Document Information

         This document has been formatted to 59 lines per page.









---------------------------------------------------------------------------
1.6 - ZCE & ZD Document Information                  ZCE & ZD Users' Manual
1.7 - Using ZCE <Zip Comment Editor>                                 Page 3
---------------------------------------------------------------------------


1.7  Using ZCE <Zip Comment Editor>


1.7.1  ZCE Command Line Examples

         ZCE

         By itself on the command line will search the current directory
         for *.zip and display one screen of filenames and comments sorted
         by filename.


         ZCE FOO*

         ZCE will search for FOO*.ZIP in the current directory


         ZCE A:

         ZCE will search drive a: for *.zip

         ZCE C:\DOS

         ZCE will search for a directory called DOS.  If the directory DOS
         exists then ZCE will search for C:\DOS\*.ZIP.  If the directory
         does not exist then ZCE will look for the filename of DOS.

         Once ZCE determines that the input filename specification is legal
         ZCE will display a window showing the zip files being searched for
         comments.

         Escape may be pressed to interrupt ZCE while reading comments.  A
         query box will be displayed to continue reading zip comments.
         Valid responses are:

         Y/N for Yes or No Arrow keys move highlighted response, Enter
         selects Left mouse button click on item if an mouse is detected.

         ZCE will display an error message if the command line arguments
         are invalid or if there is a problems opening or reading the files
         found.  The error will indicate the problem.












---------------------------------------------------------------------------
ZCE & ZD v1.1 Users' Manual            1.7 - Using ZCE <Zip Comment Editor>
Page 4                                          ZCE & ZD v1.1 Users' Manual
---------------------------------------------------------------------------


1.7.2  ZCE Command line switches

         Entering ZCE /? displays the following screen:

         Zip Comment Editor Syntax is ZCE <drive:\path\filenames>
         [/options]

         Drive must be a Valid Dos Drive, i.e. A: or B: or C:
         Path must be in Valid Dos syntax, i.e. \dos\ or \wp50\letters\
         Filenames may contain Wildcards, i.e. *.ZIP or H?

         Options:
         /?   = This Help Screen         /NS = No Save and Restore Screen
         /EGA = Display 43/50 lines      /M  = Monochrome
         /NC  = No Clock                 /A  = Alternate Color Set


1.7.3  ZCE Command Line Display Options

         /?        Display command line switches
         /NS       Do not restore original dos screen
         /EGA      Display 43/50 lines if EGA or VGA detected.
         /M        Force monochrome display
         /NC       Do not display clock at top of screen
         /A        Display using alternate color set

         both / and - may be used for ZCE and ZD command line switches.


1.7.4  ZCE Environment Variable

         All ZCE command line switches may be added to the ZCE environment
         variable.  This will allow you to set defaults for ZCE without the
         hassle of entering them each time.  The ZCE environment variable
         will be added to the switches on the command line.  If a error
         occurs while entering an environment variable please consult your
         dos manual for instruction on increasing your environment size.

         Entering the line SET ZCE=/ega /m for example will have the same
         effect as entering these switches on the command line.  If ZCE is
         executed by entering ZCE alone on the command line the effective
         command will be ZCE *.zip /ega /m.











---------------------------------------------------------------------------
1.7 - Using ZCE <Zip Comment Editor>                 ZCE & ZD Users' Manual
1.8 - Example ZCE Screen                                             Page 5
---------------------------------------------------------------------------


1.8  Example ZCE Screen


                                  Date      Disk Space   Volume Label
                                   |            |            |
                          Version  |    Time    |   Drive    |     Monitor
                             |     |     |      |     |      |        |
     |-------------------------------------------------------------------|
     | Zip Comment Editor, v1.1 5/10/91 7:02am 350K   A:   BASIC     EGA |
     |-------------------------------------------------------------------|
     |DOCUMENT.ZIP|This is a set of documents to be reviewed later.      |
     |FILENAME.ZIP|This is a zip COMMENT...........................      |
     |OTHER.ZIP   |$$$ Could not find zipfile comment, may be bad zipfile|
     |            |                                                      |
     |            |                                                      |
     |            |                                                      |
     |            |                                                      |
     |            |                                                      |
     |            |                                                      |
     |-------------------------------------------------------------------|
     |F1=Help F2=Read F3=Write F4=File F5=Copy F6=Import F7=Vol F8=Dos...|
     |-------------------------------------------------------------------|


         ZCE will display the names of zip files being scanned for comments
         or an error message if a problem occurs.  ZCE will display in
         color or monochrome and will display 25, 43 or 50 lines depending
         on the current mode of the graphics card.  ZCE will automatically
         tag all files with blank comments for the import comments
         function documented later.

         All zip files detected will be displayed on the left side with zip
         comments on the right.  The comment will have all control
         characters removed and truncated to 65 characters.  If you want to
         preserve any zip comment, simply do not edit the comment.  ZCE
         will only write modified comments.

         If ZCE had trouble locating the zip comment, the message: "$$$
         Could not find zipfile comment, may be bad zipfile $$$" will be
         displayed as the comment.  Bad zip file comments may not be edited
         and not saved.  Either the zip file is corrupted or the zip
         comment is very large.  Usually deleting the zip comment will
         allow ZCE to read it correctly.  Use the -Z command in PKZIP to
         delete the zip comment.  If you do this while in the dos shell
         make sure you execute the re-read zip comments command <F2> when
         you return to ZCE!!!  Make sure you have written out all modified
         comments first!  See Shell to Dos command.  ZCE will check each
         file size for any changes and display an error message if a change
         is detected.  A Function key list will be displayed on the bottom
         line of the screen.



---------------------------------------------------------------------------
ZCE & ZD v1.1 Users' Manual                        1.8 - Example ZCE Screen
Page 6                                          ZCE & ZD v1.1 Users' Manual
---------------------------------------------------------------------------


1.9  ZCE Main Window Editing Keys

         Insert         Toggles the insert mode and over-type mode.
         Delete         Delete character at cursor.
         Backspace      Destructive backspace.
         Left Arrow     Move the cursor to the left.
         Right Arrow    Move the cursor to the right.
         Home           Move the cursor to the beginning of the field.
         End            Move the cursor to the end of the field.
         Ctrl-Home      Move cursor to the start and erase the field.
         Ctrl-End       Erase from the cursor to the end of the field.
         Ctrl-BkSpace   Erase from the cursor to the start of the field.
         Escape         Returns comment to its original text.
         Alt-Home       Scroll to top comment.
         Alt-End        Scroll to bottom comment.
         Tab            Restore comment, until up/down move.


1.10  ZCE Commands


1.10.1  F1 = On Line Help Window Functions

         ZCE will display up to 256 lines of the file ZCE.HLP or as much of
         this file as there is string space.

         F1             Help
         Home           Beginning of help.
         End            End of help.
         PgDn           Next help page.
         PgUp           Previous help page.
         Escape         Exits help.


1.10.1.1  Mouse Help Window Functions

         Previous Page  Click mouse button between up arrow and scroll bar
                        position marker.

         Next Page      Click mouse button between down arrow and scroll
                        bar position marker.

         Move Pointer   The position marker in the scroll bar approximates
                        the position within the help array.  To move to
                        another relative position, place mouse cursor on
                        scroll bar position marker, hold left mouse button,
                        move to desired area on scroll bar, and release
                        mouse button.


         First Page     Click mouse on up arrow.


---------------------------------------------------------------------------
1.10 - ZCE Commands                                  ZCE & ZD Users' Manual
1.10 - ZCE Commands                                                  Page 7
---------------------------------------------------------------------------



         Last Page      Click mouse on down arrow.

         Exit           Move mouse cursor to the top-left corner of the
                        window and press the left mouse button.

         Scroll bar     scroll bar approximates the position within the
                        help array.  To move to array.  To move to another
                        relative position, place mouse place mouse cursor
                        on scroll bar position marker, hold left marker,
                        hold left mouse button, move to desired area on
                        desired area on scroll bar, and release mouse
                        button.


1.10.2  F2 = Re-Read Zip Comments

         This command causes ZCE to read Comments from zip files using the
         current drive, path and file specifications.  To change the file
         specification, see F4.


1.10.3  F3 = Write Zip Comments

         This command writes any modified comment to the file from the
         drive and path it was read from.  Any errors encountered will
         cause ZCE to display a error message of the problem.  ZCE verifies
         all data writes and checks all file sizes for changes before
         writing.  ZCE will not change file dates or times.  ZCE will then
         ask if you want to exit.


1.10.4  F4 = New File Specification & Read Comments

         An input window will pop up requesting a new file specification.
         ZCE will then check this entry and give errors if the input could
         not be parsed or if no files could be found.  Wildcard characters
         are accepted.  i.e. * or *.zip or c:\dos\app?  are all valid
         examples.  ZCE will display an error if an invalid drive, path or
         file specification are entered.  Entering escape will cancel this
         command.  The same rules apply here as the command line file
         specification when starting ZCE.


1.10.5  F5 = Copy Comment from Another File

         If more than one file comment is available in the main ZCE window
         then ZCE will pop up a list of current comments which may be used
         for the current file comment.  Use the arrow keys and press enter
         to select.  Escape will abort this command.  Home/End keys will
         move highlight bar to the first/last items in the list.  If a


---------------------------------------------------------------------------
ZCE & ZD v1.1 Users' Manual                             1.10 - ZCE Commands
Page 8                                          ZCE & ZD v1.1 Users' Manual
---------------------------------------------------------------------------


         mouse is detected the mouse pointer will be displayed.  Move the
         mouse pointer to an item and select using the left button.


1.10.6  F6 = Import Zip Comments from a File



1.10.6.1  ZCE Import settings file

         Example import screen:

          Import Settings Filename: ZCE.SET

                 Comments Filename: BBS.LOG

           Starting Comment Column: 30

         Comment Search, Edit/Auto: E

                Search, Tagged/All: T


1.10.6.2  Import Commands

          F1       Help
          F2       Set Import buffer size, (32-256).  Default is 256.
          F8       Save Settings file
          F9       Read Settings file
         F10       Start Import
         Esc       Abort Import function

         The Import buffer size is the number on lines used as the import
         buffer for (E)dit comment searches only.  If there is not enough
         string space available ZCE will display an error message.
         Reducing the number of zip files or reducing the import buffer
         size may allow ZCE to perform the import.


1.10.6.3  Import Settings Filename

         The file ZCE.SET contains the default import settings.  ZCE will
         search the current directory and all directories in the Dos Path
         for the file ZCE.SET and if not found an error message will be
         displayed and default values will be assigned.








---------------------------------------------------------------------------
1.10 - ZCE Commands                                  ZCE & ZD Users' Manual
1.10 - ZCE Commands                                                  Page 9
---------------------------------------------------------------------------


1.10.6.4  Import Comments Filename

         This is the filename of the file containing the comments for
         import.


1.10.6.5  Import Starting Comment Column

         This number should indicate the starting column of the comment
         inside the comments file.  This option is only used for (A)UTO
         mode.


1.10.6.6  Import Edit/Auto

         This is the import type.  E for EDIT and A for Automatic.  ZCE can
         read single line comments from a file in AUTOMATIC mode or up to
         240 characters into a small line editor in EDIT mode.

         AUTOMATIC mode searches the Comments file for a line containing
         the filename portion like DOCS in DOCS.ZIP.  This allows the ZCE
         to find comments in all type of BBS (Bulletin Board System) file
         listings.  ZCE will use the comment found on the first line that
         contains the filename string.  This may not be the correct
         comment.  Make sure you check the comments after ZCE is finished.

         In EDIT mode (default) ZCE will pop up a line editor with three
         lines of data starting on the line that the filename is located.
         You can now edit the comment to your liking.  Just remember that
         the finished comment must be no longer than 65 characters long.
         ZCE will truncate longer comments.  A marker is displayed at
         column 65 to indicate where truncation will occur.


1.10.6.7  Import Comment Search Tagged/All

         Importing of comments may be performed on tagged or all files.
         ZCE will only search for comments of tagged files if T is entered.
         T is the default.  This will speed up comment imports.


1.10.6.8  Import Editing Commands

         All editing commands are the same as the main ZCE window with
         addition of the following:

         F1        Help

         Esc       Skip the current comment and will keep the current
                   filename on the search list.



---------------------------------------------------------------------------
ZCE & ZD v1.1 Users' Manual                             1.10 - ZCE Commands
Page 10                                         ZCE & ZD v1.1 Users' Manual
---------------------------------------------------------------------------


         Enter     Accept, Truncates the current comment to 65
                   characters and removes the filename from the search
                   list.

         Ctrl-Enter

                   Abort, Terminate Import function.  ZCE will ask if
                   you really want to Abort.  ZCE will still use all
                   previously found comments even if Abort is selected.

         Tab       Tab will Restore the comment to it's original form just
                   in case you made a mistake.


1.10.7  F7 = Volume Label

         If the current or selected drive is A: or B: then ZCE will pop up
         an input window for the new volume label.  Only 11 characters will
         be allowed.  ZCE will only allow characters that are valid for
         volume labels.


1.10.8  F8 = Dos Shell

         Spawns another Command.Com leaving ZCE in memory.  About 200K is
         used by ZCE.  If the system crashes or is re-booted all editing of
         comments will be lost unless saved.

         The prompt is modified to remind you to type EXIT to return to
         ZCE.

         Enter 'EXIT' to Return to ZCE
         C:\QB\ZCE>

         If you Shell to Dos and modify a zip file in any way, the comment
         address will be altered and ZCE will display an error message and
         not write data to the file.  When ever you return to ZCE from the
         shell always re-read the zip file comments using the <F2> key if
         any zip file were modified.  Make sure you write out any modified
         comments first!  This will update comment positions to ZCE and
         allow correct comment update.


1.10.9  F9 = Tag/Untag file for Import

         This function will tag or Untag a file.  The Import function
         allows importing comments for all or tagged files.






---------------------------------------------------------------------------
1.10 - ZCE Commands                                  ZCE & ZD Users' Manual
1.10 - ZCE Commands                                                 Page 11
---------------------------------------------------------------------------


1.10.10  F10 = Tad/Untag All Files

         All files will be tagged or untagged.


1.10.11  Escape = Exit ZCE

         A message will be displayed asking if you would like to exit ZCE.
         Default is NO.  Arrow keys move between No and YES.  The enter key
         will select.  Y or N will also select.  If you have a mouse the
         left button may be used to click on the Y or N.


1.10.12  Tab = Restore Comment

         This command will restore the current comment only if the cursor
         is not moved to another comment.  i.e. up or down.


1.10.13  Shift-F1 = Display ZCE variable status

         This command will display the internal ZCE variables.  This
         command is mainly used for development of ZCE.  I am documenting
         this just in case you run into it.


1.10.14  Shift-F2 = Tag Files with Blank Comments

         This command will tag all files with blank comments and untag
         files with comments.























---------------------------------------------------------------------------
ZCE & ZD v1.1 Users' Manual                             1.10 - ZCE Commands
Page 12                                         ZCE & ZD v1.1 Users' Manual
---------------------------------------------------------------------------


1.11  Using ZD <Zip Directory>


1.11.1  ZD Command Line Examples

         ZD /?
         Display help screen

         ZD /w /sf
         Display in wide format and sort by filename

         ZD *.zip /ega /ss /zc=7,1 /np
         Display all files with .zip extension, in 43 or 50 line mode, sort
         by file size, show zip comments in white on blue and do not pause.


1.11.2  ZD Command line switches

         Entering ZD /? will display this help information:

         Zip Directory syntax: <Drive:\Path\Filenames> [/options]

         Drive must be a Valid Dos Drive, i.e. A: or B: or C:
         Path must be in Valid Dos syntax, i.e. \dos\ or \wp50\letters\
         Filenames may contain Wildcards, i.e. *.ZIP or H?.WP

         Options:
         /?  = This Help Screen           /W  = Wide Format, date and time
         /NP = No Pause for Full Display  /NS = No Save and Restore Screen
         /EGA = Display 43/50 lines       /M  = Monochrome

         Color Options:
         #,# is foreground(0 to 15),background(0 to 7), No Spaces Allowed
         /ZF=#,#   = ZIP filename Colors     /ZC=#,#   = ZIP Comment Colors
         /OF=#,#   = Other Filename Colors   /TC=#,#   = Text Colors
         /HC=#,#   = Header Colors           /BG=#     = Background Color
         /A        = Use alternate color set

         Sorting Options:
         /SF = Filename, /SS = Size, /SE = Extension, /SD = Date

         B =Backup listing, N = Read new disk











---------------------------------------------------------------------------
1.11 - Using ZD <Zip Directory>                      ZCE & ZD Users' Manual
1.11 - Using ZD <Zip Directory>                                     Page 13
---------------------------------------------------------------------------


1.11.3  ZD Command Line Display Options

         /?        Display Help Screen
         /W        Wide Format, Shows date, time and file size.  The zip
                   comment is displayed on the next line.
         /NP       No Pause for full screen
         /NS       No Save and Restore Screen
         /EGA      Display 43/50 lines if EGA/VGA detected
         /M        Force monochrome display


1.11.4  ZD Command Line Color Options

         /ZF=#,#   Zip filename colors
         /ZC=#,#   Zip comment colors
         /OF=#,#   Other filename colors
         /TC=#,#   Text colors
         /HC=#,#   Header colors
         /BG=#     Background color
         /A        Alternate color set

         #,#=foreground(0 to 15),background(0 to 7), No Spaces Allowed.

         0    black                    8    grey
         1    blue                     9    light blue
         2    green                    10   light green
         3    cyan                     11   light cyan
         4    red                      12   light red
         5    magenta                  13   light magenta
         6    brown                    14   yellow
         7    white                    15   bright white


1.11.5  ZD Command Line Sorting Options

         /SF       Sort by Filename
         /SS       Sort by Size
         /SE       Sort by Extension
         /SD       Sort by Date


1.11.6  ZD Pause Control Options

         B         Backup listing
         N         Re-read disk again.  Good for reading a new disk without
                   having the run ZD again.
         Escape    Quit ZD






---------------------------------------------------------------------------
ZCE & ZD v1.1 Users' Manual                 1.11 - Using ZD <Zip Directory>
Page 14                                         ZCE & ZD v1.1 Users' Manual
---------------------------------------------------------------------------


1.11.7  ZD Environment Variable

         All ZD command line switches may be added to the ZD environment
         variable.  This will allow you to set defaults for ZD without the
         hassle of entering them each time.  The ZD environment variable
         will be added to the switches on the command line.  If a error
         occurs while entering an environment variable please consult your
         dos manual for instruction on increasing your environment size.

         Equal signs "=" are not allowed in environment settings, therefore
         the pound sign "#" must be used as a substitute character.
         Instead of entering /zc=0,3 you must enter /zc#0,3.

         Entering the line SET ZD=/ega /m for example will have the same
         effect as entering these switches on the command line.  If ZD is
         executed by entering ZD alone on the command line the effective
         command will be ZD *.* /ega /m.




































---------------------------------------------------------------------------
1.11 - Using ZD <Zip Directory>                      ZCE & ZD Users' Manual
1.12 - ACKNOWLEDGEMENTS                                             Page 15
---------------------------------------------------------------------------


1.12  ACKNOWLEDGEMENTS

         Special Thanks to Phil Katz of PKWARE for releasing the zip file
         formats.  Without this many utilities like ZCE and ZD could not be
         possible.


1.13  Basic Libraries

         Here is a list of the QuickBasic Libraries and programming aids
         used to create ZCE and ZD.

         PBCLONE (Pro Bas Clone) by Thomas G. Hanlin III
         3544 E.  Southern Ave.  #104
         Mesa, AZ 85204

         MicroHelp ToolBox, QB/Pro Volumes 1-4 and Mach 2
         4636 Huntridge Drive
         Rosewell, Georgia 30075
         (404) 552-0565

         QB4BAS Version 4.6 by Harold Thomson
         7437 Burnway Drive
         Orlando, Florida 32819
         (407) 351-3737

         Quick Windows Shareware version 1.2 by Software Interphase Inc.
         5 Bradley Street
         Providence, RI 02908-2304
         (401) 274-5465

         Basic Window Tools Version 8.0 by James P. Morgan
         5226 Via Hacienda #115
         Orlando, Florida 32809

         The QBNews International QuickBasic Electronics Newsletter.
         By Clearware Computing
         P.O. Box 507
         Sandy Hook, CT 06482

         QBNews is available for download from Microhelp BUG BBS (404)
         552-0567 or Crescent Software BBS (203) 426-5958.

         All libraries listed above are available to all registered users
         from the Vanguard BBS, (408) 988-0288.








---------------------------------------------------------------------------
ZCE & ZD v1.1 Users' Manual                          1.13 - Basic Libraries
Page 16                                         ZCE & ZD v1.1 Users' Manual
---------------------------------------------------------------------------


1.14  Future Versions of ZCE & ZD

         Color Configuration
         Longer Comment Editing
         Improved Documentation
         Other archive types

         Please send comments and enhancement suggestions!!!!













































---------------------------------------------------------------------------
1.14 - Future Versions of ZCE & ZD                   ZCE & ZD Users' Manual

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3485

     Volume in drive A has no label
     Directory of A:\

    ZCE      EXE    141440   6-04-91   2:33p
    ZD       EXE     72938   6-04-91   2:33p
    ZCE      HLP     10453   6-04-91   2:33p
    ZCE      DOC     38161   6-04-91   2:33p
    FILES    LST       387   6-04-91   2:33p
    ZCE      NEW      1359   6-04-91   2:33p
    REGISTER TXT      1735   6-04-91   2:33p
    GO       BAT        37   4-12-93   3:56p
    SHOW     EXE      2040   9-12-88  10:48a
            9 file(s)     268550 bytes
                           48128 bytes free
