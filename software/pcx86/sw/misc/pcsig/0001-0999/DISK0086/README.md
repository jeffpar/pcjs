---
layout: page
title: "PC-SIG Diskette Library (Disk #86)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0086/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0086"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCREEN"

    A straightforward and powerful text editor which provides all the
    essential functions that are really needed for most routine text
    development.  Its commands are simple and easy to remember and where
    appropriate, needed responses are clearly prompted.  If you need a
    basic text editor, you can't overlook this one!
    
    Features:
    
    ~ Line lengths to 240 characters long
    ~ Full insert and delete capabilities
    ~ Block operations (move,copy,delete)
    ~ Upper & lower case conversions of text
    ~ Split a line in two
    ~ Concatenate two lines
    ~ Center screen around a line
    ~ Exchange two lines of text
    ~ Repeat a line of text
    ~ Goto absolute or relative page numbers
    ~ File length may exceed memory
    ~ External files may be written or read
    ~ Search, replace & global replace
    ~ All function keys utilized
    ~ Supports the MICROSOFT MOUSE.
    ~ Works with DOS 1.1, 2.X OR 3.X!
    ~ Pop-up menus
    
    How to Start:  Check the HELPME.BAT to get started and SCREEN.TXT for
    documentation. To run it, just type SCREEN and hit <ENTER>.
    
    Suggested Registration:  $35.00 registration brings full manual, functio
    key overlay and the latest update.
    
    File Descriptions:
    
    PRTCOM2  BAT  Batch file to copy documentation to com2:
    PRTCOM1  BAT  Batch file to copy documentation to com1:
    PRTLPT1  BAT  Batch file to copy documentation to lpt1:
    PRTLPT2  BAT  Batch file to copy documentation to lpt2:
    STRIPPER EXE  Strips out Tabs and replaces with spaces
    SAMPLE   TXT  Sample text for SCREEN.EXE
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES86.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No  86   Screen version 2.2                                     v1.2
--------------------------------------------------------------------------
SCREEN is a powerful text editor made for use on an the IBM personal
computer system.  It is not intended as word processor, but could be used
as one if used in conjunction with a text formatting program.  This editor
has all of the advanced editing features of a high priced word processor,
and is ideal for program editing.
 
AUTOEXEC BAT  Auto boot batch file.
MMOUSE   BAT  Batch file for Microsoft Mouse.
SCREEN   EXE  Full screen text editor.
SAMPLE   TXT  A sample text file.
PRTLPT1  BAT  Print manual to LPT1:
PRTLPT2  BAT  Print manual to LPT2:
PRTCOM1  BAT  Print manual to COM1:
PRTCOM2  BAT  Print manual to COM2:
RELPME   BAT  Breif instructions for use.
SCREEN   TXT  Users manual text file.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## SAMPLE.TXT

{% raw %}
```
SCREEN is a full screen text editor for use with an IBM Personal Computer
       It has many powerful features, some of which are:

     * full screen cursor movement        * cursor movements of:
     * line lengths up to 240 characters    -up
     * can edit file larger than memory     -down
     * two screen help menus                -left
     * function key overlay                 -right
     * block {move, copy, delete}           -word right
     * search for text                      -word left
     * replace text                         -page up
     * global replacements                  -page down
     * exchange two lines of text           -home
     * duplicate a line of text            * full insert and delete 
     * merge two line of text               - character
     * split a line of text in two          - word
     * convert text to uppercase            - line
     * convert text to lowercase            - end of line
     * print text to a printer             * complete file handling
     * center a line of text                - file directory
     * date and time within editor          - delete file
     * locate at absolute or relative       - read and write external files
       pages within the text                - automatic backup of files

```
{% endraw %}

## SCREEN.TXT

{% raw %}
```
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                    *******************************************
                    *                                         *
                    *   SCREEN - A Full Screen Text Editor    *
                    *                                         *
                    *           IBM PC Version 2.2            *
                    *            October 28, 1983             *
                    *                                         *
                    *******************************************
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                  COPYRIGHT 1983
                                Made In The U.S.A.
                               All Rights Reserved
 
 
 
                          Basic Business Software, Inc.
                           2144 Highland Drive / #150
                            Salt Lake City, UT  84106
                                 (801) 943-3731
 
 
 
 
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 2
 
 
 
 
                                  TABLE OF CONTENTS
 
 
 
      1.0     INTRODUCTION .............................................  5
        1.1     An Overview of 'SCREEN' ................................  5
        1.2     The HONORWARE(tm) Distribution System...................  6
        1.3     System Requirements For Use On The IBM PC System .......  7
        1.4     Programs Included With 'SCREEN' ........................  7
        1.5     Warrantee Information ..................................  8
 
      2.0     TEXT EDITORS and WORD PROCESSORS DEFINED .................  9
        2.1     What Is A Text Editor ? ................................  9
        2.2     What Is A Word Processor ? .............................  9
        2.3     Text Editor vs Word Processor, Which Do I Want ? ....... 10
 
      3.0     SETTING UP THE IBM PERSONAL COMPUTER SYSTEM .............. 11
        3.1     Getting SCREEN To Run .................................. 11
        3.2     How To Load The Microsoft Mouse Software Driver .......  14
        3.3     How To Use The Microsoft Mouse ........................  15
        3.4     How The Backup Text File Is Created .................... 16
 
      4.0     TEXT EDITING ............................................. 17
        4.1     Editing With 'SCREEN' .................................. 17
        4.2     The Ruler Guide ........................................ 17
        4.3     The Pointer ............................................ 17
        4.4     The Line Length ........................................ 18
        4.5     The Page Length ........................................ 18
        4.6     The Text Length ........................................ 18
        4.7     The Memory Size ........................................ 18
 
      5.0     THE IBM PERSONAL COMPUTER KEYBOARD ....................... 19
        5.1     Which Keys Are Used With SCREEN ........................ 19
        5.2     What Are The Function Keys ? ........................... 19
        5.3     What Is The Escape Key ? ............................... 19
        5.4     What Is The Enter Key ? ................................ 19
        5.5     What Is The Tab Key ? .................................. 20
        5.6     What Is The Control Key ? .............................. 20
        5.7     What Is The Text Editing Keypad ? ...................... 20
 
      6.0   THE STATUS LINE ............................................ 23
        6.1    What Is The Status Line ? ............................... 23
        6.2     What Are The Key Lock Indicator Symbols ? .............. 23
        6.3     Editing Which File ? ................................... 23
        6.4     How Much Free Memory ? ................................. 23
        6.5     Where Am I ? ........................................... 24
        6.6     Where Am I Located Now ? ............................... 24
        6.7     What Column Am I Located At Now ? ...................... 24
        6.8     What Are The Mouse Indicator Symbols ?.................. 24


 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 3
 
 
 
 
 
                              TABLE OF CONTENTS(con't.)
 
 
 
 
 
      7.0     THE FUNCTION LINE ........................................ 25
        7.1     What Is The Function Line ? ............................ 25
        7.2     What Is The Search Function ? .......................... 25
        7.3     What Is The Replace Function ? ......................... 26
        7.4     What Is The Global Function ? .......................... 26
        7.5     What Is The Marker Function ? .......................... 26
        7.6     What Is The Block Function ? ........................... 26
        7.7     What Is The Locate Function ? .......................... 27
        7.8     What Is The Center Function ? .......................... 27
        7.9     What Is The Erase Function ? ........................... 27
        7.10    What Is The Ins Function ? ............................. 27
        7.11    What Is The Del Function ? ............................. 28
        7.12    What Is The Files Function ? ........................... 28
        7.13    What Is The Help Function ? ............................ 28
 
      8.0     THE SEARCH FUNCTION ...................................... 29
        8.1     How To Perform A Search ................................ 29
 
      9.0     THE REPLACE FUNCTION ..................................... 31
        9.1     How To Perform A Replace ............................... 31
 
     10.0     THE GLOBAL FUNCTION ...................................... 34
       10.1     How To Perform A Global Replace ........................ 34
 
     11.0     THE MARKER FUNCTION ...................................... 37
       11.1     How To Mark A Block Of Text ............................ 37
 
     12.0     THE BLOCK FUNCTION ....................................... 39
       12.1     How To Manipulate A Block Of Text ...................... 39
 
     13.0     THE CENTER FUNCTION ...................................... 41
       13.1     How To Use The Center Function ......................... 41
 
     14.0     THE LOCATE FUNCTION ...................................... 42
       14.1     How To Locate The Cursor In The Text ................... 42
 
     15.0     THE INSERT FUNCTION ...................................... 44
       15.1     How To Insert Blank Lines Into The Text ................ 44
 
     16.0     THE DELETE FUNCTION ...................................... 45
       16.1     How To Delete Lines From The Text ...................... 45
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 4
 
 


 
 
                              TABLE OF CONTENTS(con't.)
 
 
 
 
 
     17.0     THE FILES FUNCTION ....................................... 46
       17.1     How To Perform Disk File Operations .................... 46
 
     18.0     THE HELP MENU ............................................ 49
       18.1     How To Get Help ........................................ 49
 
     19.0     THE CONTROL KEY FUNCTIONS ................................ 50
       19.1     Control Codes ...........................................50
       19.2     Move The Cursor To Beginning Of The Line ............... 50
       19.3     Concatenate This And The Next Line ..................... 50
       19.4     Shift Current Page Of Text Down One Line ............... 50
       19.5     Exchange This Line With The Next Line .................. 50
       19.6     Move Text Over One Space To The Right .................. 51
       19.7     Repeat The Above Line .................................. 51
       19.8     Split The Current Line Of Text In Two .................. 51
       19.9     Shift Current Page Of Text Up One Line ................. 51
       19.10    Delete A Word From The Text ............................ 51
       19.11    Print Text To The Line Printer ......................... 51
 
     20.0     ERROR MESSAGES ........................................... 52
       20.1     Error Messages Which Can Appear In SCREEN .............. 52
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 5
 
 
 
 
       1.0        INTRODUCTION
 
 
       1.1        An Overview of 'SCREEN'
 
                  SCREEN   is  a powerful text editor made for use on  an
                  the IBM personal computer system.  It is  not  intended
                  as  word processor, but could be used as one if used in
                  conjunction  with  a  text  formatting  program.   This
                  editor  has  all  of the advanced editing features of a
                  high priced word processor, and is  ideal  for  program
                  editing.
 
                  Some of the many features supported are:
 
                        - full screen cursor movement.
                        - lines lengths up to 240 characters long.
                        - full insert and delete capabilities.
                        - block operations (move,copy,delete).
                        - upper & lower case conversions of text.
                        - split a line in two.
                        - concatenate two lines.
                        - center screen around a line
                        - exchange two lines of text
                        - repeat a line of text.
                        - print text to the printer.
                        - goto absolute or relative page numbers.
                        - file length may exceed memory.
                        - external files may be written or read.
                        - search , replace & global replace.
                        - all function keys utilizied.
                        - two page help menu.
                        - supports the MICROSOFT MOUSE.
                        - works with DOS 1.1 or DOS 2.0.
 
                  This users manual will show the user how to set up  the
                  computer  and  the  software  for  ease  of  use.   All
                  capabilities  of the SCREEN editor  are  explained   in
                  detail.   A  help  menu is included in the editor which
                  will show  all  commands  available.   A  function  key
                  overlay  has also been included to help you quickly use
                  the function keys without refering to the manual.
 
                  This   text   editor  is  being   distributed   through
                  the HONORWARE(tm) distribution system, and all comments
                  and questions should be sent in letter form to me.
 
                                      Peter M.  Burke
                                      President
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 6
 
 
 
       1.2        The HONORWARE(tm) Distribution System
 
                  Basic Business Software,  Inc. will be distributing its
                  product   'SCREEN   - A   Full  Screen   Text   Editor'
                  for the IBM Personal Computer through its HONORWARE(tm)
                  software distribution  program.  SCREEN had  previously
                  been marketed through normal  distribution channels  at
                  a retail price of seventy-five dollars.
 
                  The HONORWARE distribution allows the SCREEN program to
                  be  duplicated and given to any IBM  Personal  Computer
                  user   with  no obligation  for  payment.  If the  user
                  finds  the program to be of value a payment of  thirty-
                  five  dollars is requested to be sent to Basic Business
                  Software,  Inc.  Each  user which sends in the  payment
                  will receive a complete users manual which is  packaged
                  in  a padded vinyl binder,  a  diskette  containing the
                  most recent version of the SCREEN program,  a  function
                  key   overlay  for the text editor,  a coupon for a 10%
                  discount on any purchases with Basic Business Software,
                  Inc.
 
                  The SCREEN editor may be ordered by sending  a  check
                  for  five dollars,  for a diskette containing the  text
                  editor  and  the users manual on the disk.  The  SCREEN
                  editor may be ordered  with  the users  manual  in  the
                  binder,  with  a diskette and function key overlay  for
                  thirty-five dollars.
 
                  IBM Personal Computer Users and dealers are  encouraged
                  to duplicate the diskette for other users at no  charge
                  or  obligation.   We only require that dealers or users
                  do  not  charge the user for service of  providing  the
                  user with the software.
 
                  THE  HONORWARE DISTRIBUTION CONCEPT IS BASED  UPON  THE
                  PREMISE THAT USERS WHO FIND THE SOFTWARE TO BE OF VALUE
                  TO  THEM  WILL  BE ON 'THE HONOR  SYSTEM'  TO  SEND  IN
                  PAYMENT FOR THE SOFTWARE.  THIS CONCEPT WILL ONLY  MEET
                  SUCCESS  IF USERS PAY FOR SOFTWARE THAT IS OF VALUE  TO
                  THEM.
 
 
 
 
                  HONORWARE is a trademark of Basic Business Software, Inc.
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 7
 
 
 
 
       1.3        System Requirements for use on the IBM PC System
 
 
 
                  To  use  this  software  package  on an IBM PC computer
                  system, the following hardware will be required:
 
                        a) IBM Personal Computer System
                        b) 128K of memory (196K is recommended)
                        c) One disk drive
                        d) Color monitor adapter or
                        e) Monochrome adapter
 
                  The following optional equipment may be used:
 
                        a) Additional Memory
                        b) Additional Disk Drives
                        c) Parallel Interface
                        d) Serial Interface
                        e) Most other interface cards
 
 
 
       1.5        Programs Included With 'SCREEN'
 
 
                  Included  with this software package are the  following
                  programs and files:
 
 
                        1) AUTOEXEC.BAT - auto boot batch file.
                        2) MMOUSE.BAT   - batch file for Microsoft Mouse.
                        3) SCREEN.EXE   - full screen text editor.
                        4) SAMPLE.TXT   - a sample text file.
                        5) PRTLPT1.BAT  - print manual to LPT1:
                        6) PRTLPT2.BAT  - print manual to LPT2:
                        7) PRTCOM1.BAT  - print manual to COM1:
                        8) PRTCOM2.BAT  - print manual to COM2:
                        9) HELPME.BAT   - breif instructions for use.
                       10) SCREEN.TXT   - users manual text file.
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 8
 
 
 
 
       1.4        Warrantee Information
 
 
 
                  Basic   Business   Software,  Inc.   will  correct  any
                  error(s)  in  this  text  editing   software   entitled
                  'SCREEN  - a full screen text editor'.   If an error is
                  detected  please  give  us  written  notice  as  to the
                  problem, and copies of other data used when  the  error
                  occured  so  that we can reproduce the conditions under
                  which the error(s) occured.  We will provide all  users
                  with  the  correction  for five dollars for  an  update
                  diskette.
 
                  Enclosed  with  this software package you should find a
                  warrantee card which should be filled out and  sent  in
                  to  us.   By  sending  this  in  you will be put on our
                  mailing list, and you will also receive information  on
                  any changes which are made to 'SCREEN'.
 
                  Basic  Business Software, Inc.  will not be responsible
                  for any loss financial or otherwise which  arises  from
                  the  direct  or  indirect use of this software package.
                  Our current mailing address is:
 
                              Basic Business Software, Inc.
                               2144 Highland Drive / #150
                               Salt Lake City, UT  81406
                                    (801) 943-3731
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 9
 
 
 
 
       2.0        TEXT EDITORS and WORD PROCESSORS DEFINED
 
 
 
       2.1        What Is A Text Editor?
 
 
                  A text editor is a program which will  allow  the  user
                  the ability to enter text, move it around and a perform
                  a wide variety of text editing features.  The two basic
                  types  of  text editors are line editors, such as EDLIN
                  which comes with IBM DOS, and full screen editors  such
                  as  SCREEN.    The  advantage  of a full screen  editor
                  over a line editor are many, the greatest is  its  ease
                  of  use  over  a line editor.  A full screen editor can
                  only be used with a CRT  or  monitor,  but  allows  the
                  cursor, the tiny underline character which moves around
                  on the screen, to be moved to any position in your text
                  for  character  insertion,  deletion  and other editing
                  activities.
 
 
       2.2       What Is A Word Processor?
 
 
                  A word processor is like a text editor in that you  can
                  enter,  delete  and  move  the text around, but it also
                  formats the text in a specific way to be printed.  This
                  manual is an example of text which has  been  processed
                  through  a  word  processor.   Word  processors come in
                  three basic types.  The first would be  a  line  editor
                  like  EDLIN  used in conjunction with a text formatter.
                  (A text formatter is a program which reads a text  file
                  and  formats the text for a printer.)  The next type of
                  word processor would  be  a  full  screen  editor  like
                  SCREEN   used  in  conjunction  with a text  formatter.
                  The last and most popular type is that of a full screen
                  word processor like  WORDSTAR(tm)  which  is  a  single
                  program  which  has  both  the full screen text editing
                  capabilities   along   with   the    text    formatting
                  capabilities.
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 10
 
 
 
 
       2.3        Text Editor vs Word Processor, Which Do I Want?
 
 
                  The major advantage of a all in one word processor over
                  a  text editor/formatter combination is that the all in
                  one  word  processor  is  easier  to  use.   The   main
                  disadvantage  of  a  all  in one word processor is that
                  many word processors insert formatting characters  into
                  the  text  which  will  usually cause problems when you
                  want to use the word processer for editing  say  PASCAL
                  program  file.   A PASCAL, BASIC, FORTRAN or other type
                  of compiler will not  like  the  formatting  characters
                  that  some  word  processors insert into the text.  For
                  this reason alone many people like a full  screen  text
                  editor   for  editing  program  source  code,  and  any
                  documents which do  not  need  to  be  formatted  in  a
                  special  way.   The SCREEN editor has many features not
                  found in many word processors or other editors.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 11
 
 
 
 
       3.0        SETTING UP THE IBM PERSONAL COMPUTER SYSTEM
 
 
       3.1        Getting SCREEN To Run
 
                  To  bring  up your IBM Personal Computer System so that
                  you  can begin to use SCREEN text editor you should  do
                  the following:
 
                  1) Insert your IBM DOS diskette into drive A:
                  2) Turn on your IBM Personal Computer
 
                        You should see the following on your screen:
 
 
                           DATE 01-01-1980
                           enter the date:
 
                           TIME 00:00:00.00
                           enter the time:
 
                           A>
 
                  When the computer asked  for  the  date  and  time  you
                  should  enter  the current date and time and strike the
                  ENTER key after you have entered each.
 
                  3) Now remove the  DOS  diskette  from  drive  A:,  and
                  insert  into  that  drive  the  diskette which contains
                  SCREEN.  Now type in the following:
 
                  A>SCREEN
 
                  Your  computer will now start running the SCREEN   text
                  editing system.  You will see displayed on your monitor
                  the following:
 
         Basic Business Software, Inc.   SCREEN - A Full Screen Text Editor
         IBM Personal Computer System    (c) 1983             version [2.1]
         Todays Date: AUG-29-1983                    Current Time: 09:43:27
 
 
 
                  Enter The Filename.ext or [F1] for directory >        <
 
                  At  this  time  you  should enter a filename.ext of any
                  file that you would like to edit.  You  may  specify  a
                  disk  drive  other  than  the  default  disk  drive  if
                  desired.
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 12
 
 
 
 
                  NOTE: If you are using a one drive system,  and do  not
                  want to save the  text  on  same  disk  which  contains
                  SCREEN,   then   at   this time remove the SCREEN  disk
                  from drive A:, and insert the disk which  contains  the
                  file you want to edit, or the disk which will contain a
                  new file which is to be created with SCREEN.
 
                  Some valid example filename are:
 
                        HELLO.TXT
                        B:MENU.BAS
                        HELP
 
                  No  filename may have an extension of .BAK,  and do not
                  try  to  edit a filename of SCREENX.TMP,  as this  name
                  is used by the text editor.
 
                  If  no extension is given an extension of .BAS will  be
                  assumed for that file.  The filename which you  entered
                  will  be looked for on the disk,  if it is found SCREEN
                  will  load  in  as  much  of  the text as will fit into
                  memory, and will display the first  twenty-three  lines
                  on the screen and allow you to begin editing the text.
 
                  If  the  filename.ext  was not found the following will
                  appear on your monitor:
 
                  Do You Want To Create This File (Y/N) ?> <
 
                  To this question you must enter a Y  or  N.    If   you
                  enter   a  Y,  a file with that name will be created on
                  the disk, and text editing can now begin.  If you enter
                  ^N^ to the question no file will be  created,  and  you
                  will again be asked to enter the filename.ext of a file
                  to edit.
 
                  If  you decide you do not want to edit any file, strike
                  the  ENTER  key for the  filename,   and  SCREEN   will
                  end,  and  you  will  be returned to the disk operating
                  system.
 
                  Please  note  that  if  you  are  not   sure   of   the
                  filename.ext  which you wanted to use, you can enter in
                  the word DIR or dir.   This will bring up a   directory
                  display  of  a  disk on your monitor.  Please note that
                  instead  of typing in the word DIR,  you  could  strike
                  the   function key F1 to get a disk directory  display.
                  The computer will now ask:
 
                  Enter disk drive device > <
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 13
 
 
 
 
                  To this you can strike  the  ENTER  key,   which   will
                  cause  the  current disk to be used, or you can enter a
                  letter  A,B,C,D,E,  or F for the drive which  you  want
                  to get a directory of.  The computer will next ask:
 
                  Enter the filename extension: >   <
 
                  To  this  you  can  strike  the ENTER key,  which  will
                  cause all files to be displayed.  You could also  enter
                  a  one  to three character extension, which would cause
                  only the filenames with that extension to be  displayed
                  on   you   monitor.   After  all  filenames  have  been
                  displayed you will see:
 
                  Please Strike The ENTER Key To Continue ...
 
                  At this time you must strike any key which will display
                  back on the monitor the prompt which will  ask  you  to
                  enter  the  filename of the file which you want to edit
                  with SCREEN.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 14
 
 
 
 
       3.2        How To Load The Microsoft Mouse Software Driver
 
                  The  Microsoft  Mouse may be used with this  editor  to
                  position  the cursor on the screen,  and also to select
                  the options from the FUNCTION LINE of the  editor.   To
                  use  the this mouse you must have a the Microsoft Mouse
                  software driver loaded into the computer  memory.   The
                  program  which does this is called MOUSE.COM  which  is
                  provided  by Microsoft with each mouse.   To copy  this
                  file to the SCREEN diskette do the following:
 
                  1) Insert your SCREEN diskette into drive A:
                  2) Insert the disk which came with your Microsoft Mouse
                  into drive B:
                  3) Type in the following:
 
                  A:MMOUSE
 
                  The  program  MOUSE.COM  should now be on  your  SCREEN
                  diskette  and  you need to type in the  following  each
                  time you reset your computer before you use the  SCREEN
                  text editor:
 
                  MOUSE
 
                  You should see the message 'mouse driver loaded'.
 
                  Remember  you  only need to load the mouse driver  once
                  after the computer has been rebooted.   After the mouse
                  driver  has  been  loaded into memory you can  use  the
                  SCREEN editor with the same commands as without out the
                  mouse,  but you know have the ability to use the  mouse
                  for special cursor positioning functions as well.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 15
 
 
 
       3.3        How To Use The Microsoft Mouse
 
 
                  The  Microsoft Mouse will allow the user the ability to
                  position the cursor by moving the mouse around, and the
                  mouse  is  also used to select a   selection  from  the
                  FUNCTION LINE.
 
                  The  mouse  can be positioned anywhere in the  text  by
                  holding  down  the left button of the mouse  while  you
                  move  the mouse in the direction that you want to  move
                  the cursor.   One you have positioned the cursor to the
                  point in the text which you want to be,  you should let
                  up  on  the left button.   You can position the  cursor
                  with either or both, the mouse and the arrow keys.
 
                  Pressing  both  of the keys of the mouse  at  the  same
                  time,  is  the same as striking the ESCape  key.   This
                  makes  it  easy to go into and exit from  the  function
                  line.  Once you are in the function line you can select
                  a  given  function by holing down the left  button  and
                  moving  the  mouse  to  the right  or  left  until  the
                  selection that you desire is displayed in normal video.
                  To select that function push the right button.  Pushing
                  this button is the same as striking the RETURN key.
 
                  When  the  mouse is being used to move the  cursor  you
                  will see in the right hand corner of the STATUS LINE  a
                  arrow  which  is pointing one of four  directions.   It
                  will  be pointing in the direction that the mouse  last
                  moved.   If you push the right button on the mouse, one
                  of the following actions will be taken:
 
                  If the arrow is pointing to the RIGHT,  the action will
                  be the same as striking the END key, which will position
                  the cursor to the end of the current line.
 
                  If the arrow is pointing to the LEFT,  the action  will
                  be  the same as striking a control-B  key,  which  will
                  position  the  cursor to the beginning of  the  current
                  line.
 
                  If  the  arrow is pointing UP,  the action will be  the
                  same  as striking the PgUp key,  which will display  on
                  your monitor the previous page of text.
 
                  If  the arrow is pointing DOWN,  the action will be the
                  same  as striking the PgDn key,  which will display  on
                  your monitor the next page of text in your file.
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 16
 
 
 
       3.4        How The Backup Text File Is Created
 
                  Every  time you edit a file with the SCREEN  editor   a
                  file   with the same name,  but an extension of .BAK is
                  created which is a copy of your text  file  before  you
                  begin  to  edit  it with SCREEN.   This will allow  you
                  the ability to  recover  your  file  in  case  you  did
                  editing  on  a  file that you did not want to do.  This
                  file will be created on the same disk  that  your  text
                  file is located on.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 17
 
 
 
 
       4.0        TEXT EDITING
 
 
       4.1        Editing With SCREEN
 
                  This  section of the manual will explain how editing of
                  text  can be performed with the  SCREEN  text   editor.
                  Each  of  the editing functions will be explained as to
                  its function and use.   To  being  a  practice  editing
                  session, type in the following:
 
                  A>SCREEN
 
 
              Enter Your Filename.ext or [F1] for directory: >SAMPLE.TXT<
 
                  The  computer  will  now display the first twenty-three
                  lines  of the file SAMPLE.TXT on your monitor,  and the
                  cursor will be located in the upper left hand corner of
                  the screen.  You can use this file to  demonstrate  the
                  various editing capabilities of the SCREEN editor.
 
 
       4.2        The Ruler Guide
 
                  The  ruler  guide is the line of numbers and dots which
                  you will see displayed in high intensity and underlined
                  at the very top of your monitor.  It is a guide to show
                  you the position of your cursor on a line.   The  ruler
                  should look something like:
 
                  ....+....1....+....2....+....3....+....4....+....5....
 
                  The  1,2,3,4 and onward represent the tenth, twentieth,
                  thirtieth and onward character  position.   The  symbol
                  that looks like a diamond represents the half way point
                  between  each set of ten character postions.  The ruler
                  will always display seventy-nine  positions  across  at
                  the top of the screen.
 
 
       4.3        The Pointer
 
                  The  pointer  is  a downward pointing arrow which moves
                  along  the  ruler  guide  to  show  you  exactly   what
                  character position the cursor is currently located at.
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 18
 
 
 
       4.4        The Line Length
 
                  The  length  of any single line of text can be from one
                  to two-hundred and fourty characters  long.   When  you
                  type past the seventy-ninth position on the screen, the
                  screen  will move over the text so that you can see the
                  next fourty character positions.  As you  move  through
                  the  text  the  ruler  guide will change to reflect the
                  current character position.
 
 
       4.5        The Page Length
 
                  The length of a single page  of  text  is  twenty-three
                  lines  of  text.   This  is the number of lines of text
                  which can be displayed on your  monitor  at  one  time.
                  This  editor  has the ability to hold fourty-four pages
                  of text in memory at one time.
 
 
       4.6        The Text Length
 
                  The maximum number of lines of text which can be edited
                  at any one time is 999 lines.  Most text files will not
                  be this long.  If your text file is longer  than  this,
                  you  will edit portions at a time.   The SCREEN  editor
                  has facilities to read and write to and from  the  disk
                  portions of your file.
 
 
       4.7        The Memory Size
 
                  The  maximum  size of any text file which can be loaded
                  into memory at any one  time  is  about  50,000  bytes.
                  The  SCREEN  editor requires a minimum amount  of  128K
                  bytes of memory to operate correctly.  At  this  memory
                  size  you   can   edit a file of over 45,000  bytes  in
                  memory  at once using DOS 1.1 or about 33,000 bytes  in
                  memory  if  you are using DOS 2.0.   If you  have  196K
                  bytes of system memory you  can edit  a  file  of about
                  50,000  bytes which is the maximum  allowed by  SCREEN.
                  Even  if  you  have  more  than 196K  bytes  of  system
                  memory,    the    50,000   bytes   is    the    maximum
                  text  file size allowed in memory at one time.   SCREEN
                  has facilities to edit files much larger than that, but
                  that is the most which can be in memory at one time.
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 19
 
 
 
 
       5.0        THE IBM PERSONAL COMPUTER KEYBOARD
 
 
       5.1        Which Keys Are Used With SCREEN ?
 
                  Your  IBM  Personal  Computer has a very nice keyboard,
                  with many special function keys which can be used  with
                  this  text  editor.   The special keys which you should
                  become familiar are:
 
 
       5.2        What Are The FUNCTION Keys ?
 
                  The function keys are the ten keys which are located on
                  the  far  left  hand  side  of  your keyboard, they are
                  labeled  F1 though F10.   Each one  of  these  function
                  keys   will perform a special function with the  SCREEN
                  editor.   The SCREEN editor comes with an overlay   for
                  the  function  keys,  which will allow you to use these
                  keys without having to lookup their  functions  in  the
                  manual.   The  functions  are listed below, but at this
                  time at you do not need to  know  what  each  of  these
                  means:
 
                        F1 - insert a line        F2 - delete a line
                        F3 - search for text      F4 - replace text
                        F5 - search next          F6 - erase text
                        F7 - set begin marker     F8 - set end marker
                        F9 - center line          F10- help menus
 
 
       5.3        What Is The ESCAPE Key ?
 
                  The  ESCAPE key is located  on  the  upper  left   hand
                  corner  of  your  keyboard,  is  one of the single most
                  important  keys which will be used with  SCREEN.    The
                  escape   key  which is labeled ESC will allow you  into
                  most editing features of SCREEN,  and will get you  out
                  of any editing features which you may  decide  to  exit
                  from.   This  use  of  this  key is explained in detail
                  later in this manual.
 
 
       5.4        WHat Is The ENTER Key ?
 
                  The  ENTER key is the oblong key on the right side   of
                  the   keyboard,   it is also known as the RETURN key or
                  CARRIAGE  RETURN  key.    It  will  be  used  in   many
                  instances to enter your responce into the editor.
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 20
 
 
 
       5.5        What Is The TAB Key ?
 
                  The   TAB  key which is located on the upper left  hand
                  side  of the keyboard above the CTRL  key,   will  move
                  the  cursor  over  to the next tab stop.  Tab stops are
                  preset at every five character positions, and cannot be
                  changed.
 
 
       5.6        What Is The CONTROL Key ?
 
                  A  CONTROL key is any key which is  struck  while   the
                  control  key  is  held  down  at  the same time.  As an
                  example a control S would entered by holding  down  the
                  CONTROL key and then striking the S key.   The  control
                  key  is on the lower left hand side of the keyboard and
                  is  labeled  CTRL.    Many  Word  processors  and  text
                  editors make extensive use of control keys, for ease of
                  use  we  have  limited the number of control keys which
                  SCREEN will use to ten.
 
 
       5.7        What Is The Text Editing Keypad ?
 
                  This is the cluster of keys which make up  your  10-key
                  numeric  keypad,  and also doubles as your text editing
                  keys.   The  key  labeled  NUM-LOCK  will  allow   this
                  keypad to be used as either the numeric keypad, or used
                  as the text editing keypad.  We suggest you use it only
                  as  the  text  editing keys, and use the number keys at
                  the top row above the normal alpha  keys  for  numbers.
                  This  will  make it easier to use, in that you will not
                  have  to keep using the NUM-LOCK key  to  switch   back
                  and  forth  between  using the keys as a numeric keypad
                  and text editing keys.  The text editing keys available
                  are:
 
                        UP   ARROW - located on the 8 key on the  numeric
                  keypad.  This will move the cursor up one line of text.
                  If the cursor is at the top line of the screen and  the
                  up  arrow  is  struck the text will be redisplayed with
                  that line now in the center of the screen.
 
                        DOWN   ARROW  -  located  on  the  2  key on  the
                  numeric keypad.  This will move  the  cursor  down  one
                  line of text.
 
                        RIGHT   ARROW  -  located  on  the  6 key on  the
                  numeric  keypad.   This  will  move  the   cursor   one
                  character position to the right.
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 21
 
 
 
 
                        LEFT   ARROW  -  located  on  the  4  key on  the
                  numeric  keypad.   This  will  move  the   cursor   one
                  character position to the left.
 
 
                        BACK   ARROW - delete key which is located  above
                  the return key on the keyboard.  This key  will  delete
                  the character to the immediate left of the cursor.
 
                        HOME   -  located  on  the  7 key on the  numeric
                  keypad.  This will move the cursor to  the  upper  left
                  hand corner of the screen.
 
                        PGUP   -  located  on  the  9 key on the  numeric
                  keypad.  This will move the cursor backward one page of
                  text, which is 23 lines of text.
 
                        PGDN  - located on the  3  key  on  the   numeric
                  keypad.   This will move the cursor forward one page of
                  text, which is 23 lines of text.
 
                        END  - located on  the  1  key  on  the   numeric
                  keypad.   This  will  move the cursor to the end of the
                  line of text which the cursor is currently located on.
 
                        CONTROL  LEFT ARROW - the control  key  must   be
                  held   down  and strike the left arrow key at the  same
                  time.  This will move the cursor to  the  beginning  of
                  the word on the immediate left of the cursor.
 
                        CONTROL   RIGHT  ARROW - the control key must  be
                  held  down and strike the right arrow key at the   same
                  time.   This  will  move the cursor to the beginning of
                  the word on the immediate right of the cursor.
 
                        CONTROL  PGUP - the control  key  must  be   held
                  down   and strike the pgup key at the same time.   This
                  will move the cursor  backward  three  pages  of  text,
                  which is sixty-nine lines of text.
 
                        CONTROL   PGDN  -  the  control key must be  held
                  down and strike the pgdn key at the same  time.    This
                  will move the cursor forward three pages of text, which
                  is sixty-nine lines of text.
 
                        CONTROL   HOME  -  the  control key must be  held
                  down  and strike the home key at the same time.    This
                  will move the cursor to the first character of the last
                  line on the currently displayed page of text.
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 22
 
 
 
 
                        CONTROL  END - the control key must be held  down
                  and  strike  the end key at the same time.   This  will
                  erase all text on that line  from  the  current  cursor
                  position to the end of the line.
 
 
                        INS  - the insert key is located on the 0 key  on
                  the numeric keypad.  When struck this will allow you to
                  insert text into the current line where the  cursor  is
                  located.   This  is a toggle key, you strike it once to
                  go into the insert mode, and strike it again to get out
                  of the insert mode.  When in the insert mode the cursor
                  will become one half its normal size.
 
                        DEL  - the delete key is located on the  .    key
                  on  the numeric keypad.  When struck the character that
                  the  cursor  is  currently  positioned  over  will   be
                  deleted.    The  text  on  the  right  of  the  deleted
                  character will be moved over one character to the left.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 23
 
 
 
 
       6.0        THE STATUS LINE
 
 
       6.1        What Is The Status Line?
 
                  The  status  line is the line which appears at the very
                  bottom of your monitor in  inverse  video.   It  should
                  look something like this:
 
           <^#> editing file:SAMPLE.TXT free:44,104 page:1 line: 1 col: 1  ^
 
                  Each  of  the  items  included  in  this status line is
                  explained below.
 
       6.2        What Are The Key Lock Indicator Symbols ?
 
                  The  First  item on the status line are  two  indicator
                  symbols which indicate the status of the CAPS LOCK  key
                  and the NUM LOCK key.   Both of these indicator symbols
                  are between the left and right facing arrows, which are
                  located  in  the left hand corner of the  status  line.
                  The  first symbol will be an arrow which is pointing UP
                  or  DOWN,  which will indicate if the CAPS LOCK is  now
                  set for uppercase or lowercase text.  The second symbol
                  will be either a UPWARD and DOWNWARD ARROW or the POUND
                  SYMBOL,  which will indicate if the NUM LOCK is now set
                  for using the arrow keys or the numeric keypad.
 
 
       6.3        Editing Which File?
 
                  The  next item displayed in the filename which is being
                  edited.   The filename will follow the word file:.   It
                  will contain  the  complete  filename  along  with  any
                  extension,  and  if it is being written to another disk
                  other  than  the  default  disk  that  will   also   be
                  displayed.
 
 
 
       6.4        How Much Free Memory?
 
                  The next item which is displayed on the status line  is
                  the  amount  of  free memory available for you for your
                  text file.  This will  show  up  on  your  status  line
                  following  the  word  free:.    It  will  be the  exact
                  number of bytes  which  are  available  for  use.   The
                  amount  of  free  memory will be a number between 1 and
                  50,000 bytes.   The  amount  of  free  memory  will  be
                  updated  to  the  status line when ever you perform any
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 24
 
 
                  function which causes the screen to be redisplayed,  or
                  go to the function line.  The amount of free memory can
                  be   updated  at  any  time by striking the ESCape  key
                  twice.  This will cause the status line to  be  updated
                  as to the amount of free memory available.
 
       6.5        Where Am I?
 
                  The  next  item which will appear on the status line is
                  the page number of the text  which  you  are  currently
                  located  at.   The  page  number  will  follow the word
                  page:.  A page is twenty-three lines of text.
 
       6.6        Where Line Am I Located At Now?
 
                  The next item which will appear on your status line  is
                  the  line  number which you are currently located at in
                  your text.  The actual line number will follow the word
                  LINE:.   This will be a number between 1 and 999.   The
                  maximum number of lines of text which can be in  memory
                  at any one time is 999.
 
 
       6.7        What Column Am I Located At Now?
 
                  The  next  item which will appear on you status line is
                  the column number where the cursor is currently located
                  at.   The  column number will follow the word  COL:  on
                  the  status  line.  This will be a number between 1 and
                  240.  The longest line length is 240 characters.   This
                  number  will  correspond  to  the position the arrow is
                  over in the ruler guide which is displayed at  the  top
                  of your monitor.
 
 
       6.8        What Are The Mouse Indicator Symbols ?
 
                  The last item which will appear on your status line  is
                  the  mouse  indicator symbol.   This will be  an  arrow
                  which  is  pointing  UP,  DOWN,  LEFT  or  RIGHT  which
                  indicates the last direction the mouse was moved.  This
                  symbol  will  not  appear if you do not  have  a  mouse
                  hooked to your computer,  and the mouse software driver
                  loaded into the computer memory.
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 25
 
 
 
       7.0        The Function Line
 
 
       7.1        What Is The Function Line?
 
                  The   FUNCTION LINE is the line which will be displayed
                  at the very bottom of your monitor any time you  strike
                  the   ESCape  key  while  you are in the editing  mode.
                  If  you are using the MOUSE you can enter the  function
                  line by prssing both the LEFT and RIGHT buttons on  the
                  mouse  at the same time.   Once you are in the function
                  line  the   status   line  will   be  replaced  by  the
                  following function line which should look like:
 
    ==> < Search Replace Global Marker Block Locate Center Erase Ins Del Help
 
                  This  function line will allow you to select any one of
                  those functions to be performed.  An overview  of  what
                  each  of  those  functions  does  is  explained in this
                  section.   You  can  select a given function by  either
                  striking the first character of that function title, or
                  pressing  the  left  or  right  arrow  keys  until  the
                  function  you desire is displayed in normal  video  and
                  then  striking the return key to select that  function.
                  If  you  are  using the MOUSE you can  select  a  given
                  function  by holding down the left button of the  mouse
                  while you move the mouse to the right or left until the
                  function  you desire is now displayed in normal  video.
                  To  select that function with the mouse you should  let
                  up on the left button and press the right button of the
                  mouse.  As  an  example if you wanted  to  search   for
                  text  you would  strike the S key which would start  up
                  the SEARCH function.
 
                  Most functions will return you to the function line, to
                  go back to the editing mode strike the ESCape  key,  or
                  if  you are using a mouse push both the left and  right
                  buttons at the same time.
 
       7.2        What The Search Function?
 
                  The  first function on  the  status  line  is   SEARCH,
                  which is activated by striking the S key.   The  search
                  function  will search for a group of characters in your
                  text which  is  currently  stored  in  memory.   As  an
                  example  you  might  want to find each occurance of the
                  word PRINT in your text.   The  search  function  would
                  find  all occurances of PRINT in your text for you.  It
                  allows you to continue searching after  it  finds  each
                  occurance,  or it will stop after it finds an occurance
                  of the group of characters which you are search for.
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 26
 
 
 
 
       7.3        What Is the Replace Function?
 
                  The  next function on the function  line  is   REPLACE,
                  which   is  activated  by  striking  the  R  key.   The
                  replace function is like the search function in that it
                  will search for a group of characters, but it will also
                  replace  those  characters  with   another   group   of
                  characters  for  each  occurance that was found.  As an
                  example you might want to replace  every  occurance  of
                  the  word WRITE with PRINT.  The replace function would
                  find every occurance of the word WRITE and allow you to
                  replace that word with the word PRINT, or  continue  to
                  search  for  the next occurance and leave the occurance
                  that it just found that same without  changing  it,  or
                  you can stop the replace.
 
 
       7.4        What Is The Global Function?
 
                  The   next  function  on  the function line is  GLOBAL,
                  which is activated by striking the G key.   The  global
                  function works the same as the replace  function,  with
                  the  exception  this  it  will  automatically  find and
                  replace all occurances of the text that it is searching
                  for without asking you on each occurance if you want to
                  replace the text.  The global function will display  on
                  the  monitor  each occurance of the text as it replaces
                  it.
 
 
       7.5        What Is The Marker Function?
 
                  The  next function on the  function  line  is   MARKER,
                  which  is activated by striking the M key.   The marker
                  function  will  allow  you  to  mark the beginning of a
                  section of a block of text, the end of a section  of  a
                  block  of text, clear the markers, or recall previously
                  set markers.  The markers must be set before a block of
                  text  can be moved by the BLOCK function which will  be
                  explained next.
 
 
       7.6        What Is The Block Function?
 
                  The  next function on  the  function  line  is   BLOCK,
                  which  is activated by striking the B key.   The  block
                  function will take a block  of  text,  which  has  been
                  marked   with  the MARKER function,  and either move it
                  to the location where the cursor is  currently  located
                  at  and delete it from its present location, or copy it
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 27
 
 
                  to the location where the cursor is  at  and  leave  it
                  where  it  is  presently at, or delete the marked block
                  from where it  is  presently  located  at.   The  block
                  function also has the ability to convert a marked block
                  to  either  all uppercase or lowercase characters.  The
                  block function will also write a marked block  of  text
                  to  a  disk file, or it will read in from a disk a text
                  file.  If a file is read in from the disk the text will
                  be  inserted  at  the  location  where  the  cursor  is
                  presently located at.
 
       7.7        What Is The Locate Function?
 
                  The   next  function  on  the function line is  LOCATE,
                  which is activated by striking the L key.   The  locate
                  function will locate the cursor at either  an  absolute
                  page in the text, or it will locate the cursor forwards
                  or  backwards  a  number of pages.  Locate also has the
                  ability to locate the cursor to the very  beginning  of
                  the  text  which is in memory, the end of text which is
                  in memory, or to the location of the  beginning  marker
                  if it has been set.
 
 
       7.8        What Is The Center Function?
 
                  The   next  function  on  the function line is  CENTER,
                  which  is activated by striking the C key.   The center
                  function will center the current text that  the  cursor
                  was last located at in the center of your monitor.
 
       7.9        What Is The Erase Function?
 
                  The   next  function  on  the  function line is  ERASE,
                  which is activated by striking the E key.   The   erase
                  function  will  erase all characters on a line from the
                  cursor to a character that you enter.  As an example if
                  you want to erase a word  you  would  enter  the  space
                  character as the character to erase through.  The erase
                  function  would erase any characters between the cursor
                  and the first space character that it found.
 
 
       7.10       What Is The Ins Function?
 
                  The  next function on the  function  line  is   INSert,
                  which  is activated by striking the I key.   The insert
                  function  will  allow  you to insert from 1 to 99 blank
                  lines into the text.  The blank lines will be  inserted
                  before the line that the cursor is currently positioned
                  on.
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 28
 
 
 
       7.11       What Is The Del Function?
 
                  The   next  function  on  the function line is  DELete,
                  which is activated by striking the D key.   The  delete
                  function will allow you to delete from 1 to 99 lines of
                  text from your text.  The deleted  lines  will  be  the
                  lines  following  the line that the cursor is currently
                  positioned on, and including the  line  the  cursor  is
                  currently positioned on.
 
 
       7.12       What Is The Files Function?
 
                  The   next  function  on  the  function line is  FILES,
                  which  is activated by striking the F key.   The  files
                  function  will be used for all activities which have to
                  do with the reading or writing of text to or  from  the
                  disk  drive.  This function will allow you to save your
                  current text  information  to  the  disk  and  continue
                  editing  your  file,  to  save your current text to the
                  disk and exit the editor.  It will also  allow  you  to
                  exit  the  editor without saving any of your changes of
                  text to the disk.  This function will also allow you to
                  write or read portions of the current file to  or  from
                  disk, display a directory of a disk, or delete any file
                  from the disk.
 
 
       7.13       What Is The Help Function?
 
                  The last function on the function line is  HELP,  which
                  can   be  activated  by  striking the H key.   The help
                  function will  display  on  your  monitor  all  of  the
                  commands  and  functions  available  for  use  with the
                  SCREEN editor.   There are two  displays  of   commands
                  and  functions  that  will be displayed on your monitor
                  with  the help function.   Striking the  ENTER  key  at
                  the  bottom  of  either  display  will  show  the other
                  display.   You  can  return  to  editing  the  text  by
                  striking   the  ESCape key when prompted at the  bottom
                  of your monitor.
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 29
 
 
 
 
       8.0        THE SEARCH FUNCTION
 
 
       8.1        How To Perform A Search
 
                  Search   which  is  the first function on the  function
                  line will allow the user  to  search  for  a  group  of
                  characters.   The  search  function will search through
                  the text for that group of characters and if found will
                  prompt you that the group of characters was found.   At
                  this time the user can stop the search at this point in
                  the  text,  or  the search can continue on for the next
                  occurance of that group of characters in the text.
 
                  The  Search is selected  from  the  function  line   by
                  striking   the S key,  the editor will respond with the
                  following line at the bottom of your monitor:
 
    ==> < Forward Backward Top End Next Case(on)     (text search operations)
 
                  You next will select how you want the  search  to  take
                  place, the options available are:
 
                  Forward   -  This  will start the search with the  line
                  the  cursor  is  currently  positioned  to,  and   will
                  continue to the end of the text which is in the memory.
                  To select this options strike the F key.
 
                  Backward   -  This will start the search with the  line
                  the  cursor  is  currently  positioned  to,  and   will
                  continue  backwards  to the beginning of the text which
                  is in the memory.   To select this option strike the  B
                  key.
 
                  Top  - This will start the search with the very   first
                  line  of  text in the memory, and will continue through
                  to the last line which is in  the  memory.   To  select
                  this option strike the T key.
 
                  End   -  This will start the search with the very  last
                  line of text which is in the memory, and will  continue
                  the  search backwards through the text to the beginning
                  of the text.  To select this option strike the E key.
 
                  Next   -  This  option  will  continue the last  search
                  which was performed from the line the cursor is  on  to
                  the  either the end or beginning of the text, depending
                  if the last search performed was forwards or backwards.
                  To select this option strike the N key.
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 30
 
 
 
 
                  Case   - This  option will turn the case switch  ON  or
                  OFF,  usually this will be set to ON.    When  case  is
                  set  to  ON  the  search  will find only exact matches.
                  When case is set to OFF the search  will  ignore  upper
                  and  lower  case  differences.  The fastest search will
                  occur when case is set to ON.  To switch back  from  ON
                  to OFF or from OFF to ON strike the C key.
 
                  After you enter one of the above options  the  computer
                  will ask the following:
 
                  SEARCH: enter 'text' to search for >               <
 
                  You  should now enter the group of characters which you
                  want to search for in your text file.   You  may  enter
                  from  one  to  fifty  characters  to search for in your
                  text.  After  you  type  in  the  text  which  you  are
                  searching   for,   strike  the ENTER key and the search
                  will begin.
 
                  After the search begins if the group of characters were
                  not found in your text, the computer will beep, and the
                  cursor will return to  the  same  position  it  was  in
                  before  the  search took place.  If the text was found,
                  the editor will blink  on  your  monitor  the  text  it
                  found,  and display the following on the bottom line of
                  your monitor:
 
                  search 'text' was found, enter Y to continue or ESC to end
 
                  At this time if you want to continue the search for the
                  next  occurance of the search text strike the  Y   key.
                  If  you  want  to  stop  the  search and go back to the
                  editing mode strike the ESCape key.   After strike  the
                  ESCape  key the  cursor  will  be  positioned  at   the
                  beginning of the search text which was last found.
 
                  You  may  continue a search where you left off the last
                  search by selecting Search from the function  line  and
                  selecting  Next from the search options.   Function key
                  F3  will select for you all selections necessary for  a
                  search  from  the  top  of the text.   Function key  F5
                  will select for you to continue a search from the point
                  that you left off the last search.
 
                  Remember that at any point in either the function line,
                  the search options, or entering of  the  text,  if  you
                  strike   the  ESCape key you can return to the  editing
                  mode without performing the search.
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 31
 
 
 
       9.0       THE REPLACE FUNCTION
 
 
       9.1        How To Perform A Replace
 
                  Replace  which is the second function on the   function
                  line  will  allow  the  user  to  search for a group of
                  characters and  replace  them  with  another  group  of
                  characters.   The  replace function will search through
                  the text for that group of characters and if found will
                  prompt you that the group of characters was found.   At
                  this time the you can stop the replace at this point in
                  the text, replace the text, or the replace can continue
                  on  for  the next occurance of that group of characters
                  in the text.
 
                  The Replace is  selected  from  the  function  line  by
                  striking   the R key,  the editor will respond with the
                  following line at the bottom of your monitor:
 
    ==> < Forward Backward Top End Next Case(on)      (search and replace text)
 
                  You next will select how you want the replace  to  take
                  place, the options available are:
 
                  Forward   -  This will start the replace with the  line
                  the  cursor  is  currently  positioned  to,  and   will
                  continue to the end of the text which is in the memory.
                  To select this option strike the F key.
 
                  Backward   - This will start the replace with the  line
                  the  cursor  is  currently  positioned  to,  and   will
                  continue  backwards  to the beginning of the text which
                  is in the memory.   To select this option strike the  B
                  key.
 
                  Top  - This will start the replace with the very  first
                  line of text in the memory, and will  continue  through
                  to  the  last  line  which is in the memory.  To select
                  this option strike the T key.
 
                  End  - This will start the replace with the very   last
                  line  of text which is in the memory, and will continue
                  the search backwards through the text to the  beginning
                  of the text.  To select this option strike the E key.
 
                  Next   -  This  option  will continue the last  replace
                  which was performed from the line the cursor is  on  to
                  either  the  end or beginning of the text, depending if
                  the last search performed was  forwards  or  backwards.
                  To select this option strike the N key.
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 32
 
 
 
 
                  Case   - This  option will turn the case switch  ON  or
                  OFF,  usually this will be set to ON.    When  case  is
                  set  to  ON  the  replace will find only exact matches.
                  When case is set to OFF the replace will  ignore  upper
                  and  lower  case differences.  The fastest replace will
                  occur when case is set to ON.  To switch back  from  ON
                  to OFF or from OFF to ON strike the C key.
 
                  After  you  enter one of the above options the computer
                  will ask the following:
 
                  REPLACE: enter 'text' to replace >                    <
 
                  You should now enter the group of characters which  you
                  want  to  replace for in your text file.  You may enter
                  from one to fifty characters to  replace  for  in  your
                  text.  After you type in the text which you are wanting
                  to replace, the computer will respond with:
 
                  REPLACE: enter replacement text >                     <
 
                  You  should now enter the group of characters which you
                  want to replace for the text you just entered.  You may
                  enter from one to fifty characters to  be  replaced  in
                  your  text  for  each  occurance which was found of the
                  text which you are searching for.  After you strike the
                  ENTER key the replace operation will begin.
 
                  After the replace begins if the group of characters was
                  not found in your text, the computer will beep, and the
                  cursor will return to  the  same  position  it  was  in
                  before  the  replace took place.  If the text was found
                  the computer will blink on your  monitor  the  text  it
                  found,  and display the following on the bottom line of
                  your monitor:
 
    replace 'text' was found, enter Y to replace, N to continue, ESC to end
 
                  At this time if you want to replace the text which  was
                  found  strike the Y key.   You will see the replacement
                  text  inserted  and  displayed  on  your  monitor,  the
                  replace will continue looking for the next occurance of
                  the text which you want replaced.  If  you  strike  the
                  N   key  the  text  that  was  just  found will not  be
                  replaced,  but  the  replace   search   function   will
                  continue.   If  you desire to stop the replace function
                  strike  the ESCape key which will stop the replace  and
                  return the cursor to the  position  that  it  was  last
                  located at.
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 33
 
 
 
 
                  You  may continue a replace where you left off the last
                  replace  by selecting Replace from the  function   line
                  and    selecting   Next   from  the  replace   options.
                  Function  key F4  will  perform  select  for  you   all
                  selections  necessary for a replace from the top of the
                  text.
 
                  Remember that at any point in either the function line,
                  the replace options, or the entering of  the  text,  if
                  you   strike  the  ESCape  key  you  can return to  the
                  editing mode without performing the replace.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 34
 
 
 
 
       10.0       THE GLOBAL FUNCTION
 
 
       10.1       How To Perform A Global
 
                  Global  which is the third function  on  the   function
                  line  will allow the user to search and replace a group
                  of characters.  The global function performs  the  same
                  function  as  the  replace  function with the exception
                  that it will automatically replace  the  text  that  it
                  finds  without  prompting  the  user  to  see  if it is
                  alright to replace each occurance which is found.
 
                  The Global function is selected from the function  line
                  by striking the G key,  the computer will respond  with
                  the following line at the bottom of your monitor:
 
    ==> < Forward  Backward  Top End Next Case(on)         (global text replace)
 
                  You next will select how you want the global replace to
                  take place, the options available are:
 
                  Forward   -  This will start the replace with the  line
                  the  cursor  is  currently  positioned  to,  and   will
                  continue to the end of the text which is in the memory.
                  To select this options strike the F key.
 
                  Backward   - This will start the replace with the  line
                  the  cursor  is  currently  positioned  to,  and   will
                  continue  backwards  to the beginning of the text which
                  is  in the memory.   To select this option strike the B
                  key.
 
                  Top  - This will start the replace with the very  first
                  line of text in the memory, and will  continue  through
                  to  the  last  line  which is in the memory.  To select
                  this option strike the T key.
 
                  End  - This will start the  global  replace  with   the
                  very last line of text which is in the memory, and will
                  continue  the  search backwards through the text to the
                  beginning of the text.  To select  this  option  strike
                  the E key.
 
                  Next   -  This  option  will  continue the last  global
                  replace which was performed from the line the cursor is
                  on to the either the end  or  beginning  of  the  text,
                  depending  if the last search performed was forwards or
                  backwards.  To select this option strike the N key.
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 35
 
 
 
 
                  Case  - This  option will turn the case switch  ON   or
                  OFF,   usually  this  will be set to ON.   When case is
                  set to ON the replace will  find  only  exact  matches.
                  When  case  is set to OFF the replace will ignore upper
                  and lower case differences.  The fastest  replace  will
                  occur  when  case is set to ON.  To switch back from ON
                  to OFF or from OFF to ON strike the C key.
 
                  After  you  enter one of the above options the computer
                  will ask the following:
 
                  GLOBAL: enter 'text' to replace >                   <
 
                  You should now enter the group of characters which  you
                  want  to  replace for in your text file.  You may enter
                  from one to fifty characters to  replace  for  in  your
                  text.  After you type in the text which you are wanting
                  to replace, the computer will respond with:
 
                  GLOBAL: enter replacement text >                    <
 
                  You  should now enter the group of characters which you
                  want to replace the text you  just  entered.   You  may
                  enter  from  one  to fifty characters to be replaced in
                  your text for each occurance which  was  found  of  the
                  text which you are searching for.  After you strike the
                  ENTER key the replace operation will begin.
 
                  After  the Global begins if the group of characters was
                  not found in your text, the computer will beep, and the
                  cursor will return to  the  same  position  it  was  in
                  before  the  global  took place.  If the text was found
                  the editor will display each occurance that  was  found
                  and  replace  it  with the replacement text.  After the
                  entire global replacement has finished the cursor  will
                  be  returned  to  the position on you monitor where the
                  last replacement took place.
 
                  Remember that at any point in either the function line,
                  the Global options, or entering  of  the  text  if  you
                  strike   the  ESCape key you can return to the  editing
                  mode without starting the global function.
 
                  All searching functions (Search,  Replace, Global) will
                  work only within a marked block of text if the text has
                  both a beginning and ending marker  set.   This  allows
                  you  to  do replacements within a block of text instead
                  of the entire amount of text in memory.  If you  desire
                  to perform a searching function on all of the text make
                  sure  that  no  markers are currently set.  Please also
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 36
 
 
                  notice that because a marked block is displayed in high
                  intensity all replacement occur  in  normal  intensity.
                  You  can  either clear the markers which will cause all
                  the text on the current page to be  display  in  normal
                  intensity,  or you can do a page up and a page down and
                  all of the  marked  text  will  again  appear  in  high
                  intensity.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 37
 
 
 
       11.0       THE MARKER FUNCTION
 
 
       11.1       How To Mark A Block Of Text
 
                  The  Marker  function  will  allow  you  to  mark   the
                  beginning  and  ending  line of a block of text, and it
                  will also allow you to clear and recall any  previously
                  set  markers.   Markers are used to mark off a block of
                  text which will be manipulated by the  BLOCK  function.
                  A  block  consists  of  a group of one or more lines of
                  text which have had a beginning and ending marker  set.
                  When  you  mark  a  group of lines of text they will be
                  displayed in high intensity on your monitor.  You  must
                  mark  both  a  beginning and ending line of text before
                  you can use the BLOCK function on the  block  of  text.
                  It  is  only  possible  to  mark  entire lines, and you
                  cannot mark only part of a line.  To select  the  block
                  marker   function  strike the M key,  you will then see
                  the following displayed on  the  bottom  line  of  your
                  monitor:
 
    ==> < Beginning(unset) End(unset) Clear Recall           (marker operations)
 
                  You can now select one of the following options:
 
                  Beginning   -  To  set the beginning marker strike  the
                  B key.   The beginning marker will now be set for   the
                  line  that  the cursor was last located at.  You should
                  see that line appear in high intensity.  After the word
                  beginning  on the above line you will see the word  set
                  or  unset in parenthesis,  this tells you if the marker
                  is currently set or not.   Function key F7 will set   a
                  beginning marker for you when struck.
 
                  End   - To  set the end marker strike the E  key.   The
                  end marker will now be set for the that the cursor  was
                  last  located  at.  You now should see all the lines of
                  text between the line the beginning marker was set  on,
                  and  the  line  of  text  the  end  maker  was  set on,
                  displayed in high intensity.  After the word end on the
                  above  line you will see the  word  set  or  unset   in
                  parenthesis,  this tells you if the marker is currently
                  set or not.   Function key F8 will set  a  end   marker
                  for you when struck.
 
                  Clear   - To clear any markers which are currently  set
                  strike  the C key.   This will  clear  any  marker  and
                  make  them  unset,  and  will  redisplay any previously
                  marked block in normal intensity.
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 38
 
 
 
 
                  Recall  -  To  recall  any  markers  which  have   been
                  previously   set  and  then  cleared strike the R  key.
                  This will recall the last set of markers which were  in
                  effect.   If  no  markers  have  ever  been  set in the
                  current  editing  session,  then  no  markers  will  be
                  recalled.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 39
 
 
 
 
       12.0       THE BLOCK FUNCTION
 
 
       12.1       How To Manipulate A Block Of Text
 
                  The  Block function will allow you to move,  delete  or
                  copy a block of text which has been  marked,  with  the
                  marker  function, to another location in the text.  The
                  block function will also convert a marked block to  all
                  upper  or  lower case, and the block function can write
                  the marked block out to the disk, or  read  in  a  file
                  from  the disk.  Before any block operation, except for
                  reading in from the disk, can be performed on  a  block
                  of  text,  it must have been previously marked with the
                  marker  function.   To select the BLOCK function strike
                  the B key,  you should see the following on the  bottom
                  line of your monitor:
 
         ==> < Move Copy Delete Upper Lower Read Write    (text block operations)
 
                  You now may select one of the following operations:
 
                  Move   -  To   select the Move operation strike  the  M
                  key.  The move operation will move the marked block  of
                  text  to  the line that the cursor was last located at.
                  Make sure that after you mark the block of  text  which
                  is  to  be  moved,  and  to  position the cursor to the
                  correct line that you want the block of text moved to.
 
                  Copy  - To  select the Copy operation  strike   the   C
                  key.   The copy operation will copy the marked block of
                  text to the line that the cursor was last  located  at.
                  Make  sure  that after you mark the block of text which
                  is to be copied, to position the cursor to the  correct
                  line that you want the block of text copied to.
 
                  NOTE:   The  difference  between move and copy is  that
                  the copy operation will make a duplicate of the  marked
                  block  of  text  in  another location within your text.
                  The move operation actually moves the marked  block  of
                  text,  and  after  the  move  operation is complete the
                  marked block of text will no longer  be  where  it  was
                  before the move operation.
 
                  Upper   - To  select the Upper operation strike  the  U
                  key.  The upper operation will convert  all  characters
                  within the marked block of text to upper case.
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 40
 
 
 
 
                  Lower   - To  select the Lower operation strike  the  L
                  key.  The lower operation will convert  all  characters
                  within the marked block of text to lower case.
 
                  Read   -  To   select the Read operation strike  the  R
                  key.  The read operation will allow you  to  read  into
                  memory  a  text  file which is stored on the disk.  The
                  text which is read from the disk will be inserted  into
                  your  text  at the line the cursor was last located on.
                  After you select read, the following will be  displayed
                  on the bottom line of your monitor:
 
                  BLOCK READ: enter filename >             <
 
                  You  should now enter the filename.ext of the file that
                  you want to read in from the disk.  The  file  will  be
                  assumed  to  be  located on the default disk drive, but
                  you can precede the filename.ext with  a  drive  letter
                  followed by a colon.(i.e.  A:TEXT.TXT).  After you type
                  in  the  filename,   strike  the  ENTER key,  this will
                  cause the file to be read in from the disk and inserted
                  into your text.  If the filename.ext was  not  found  a
                  message  will  be  displayed  on  the  bottom  of  your
                  monitor.  If the file was too large  to  fit  into  the
                  available  memory,  a  message will be displayed on the
                  bottom of your monitor.  Remember that the file read in
                  must be a text type file.  The maximum size of  a  file
                  which  can  be  read in with the block read function is
                  200 lines of text.
 
                  Write  - To  select the Write operation strike  the   W
                  key.   The write operation will allow you to write to a
                  file on the disk a marked block  of  text.   After  you
                  select  write,  the  following will be displayed on the
                  bottom line of your monitor:
 
                  BLOCK WRITE: enter filename >             <
 
                  You should now enter the filename.ext of the file  that
                  you  want  the  marked  block of text to be written to.
                  The file will be assumed to be located on  the  default
                  disk drive, but you can precede the filename.ext with a
                  drive  letter  followed  by a colon.(i.e.  B:TEXT.TXT).
                  After  you type in the filename,  strike the ENTER key,
                  this will cause the text to be written to the disk.  If
                  the some type of disk error occurs a  message  will  be
                  displayed on your monitor.
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 41
 
 
 
 
       13.0       THE CENTER FUNCTION
 
 
       13.1       How To Use The Center Function
 
                  The  center  function may be selected from the function
                  line by striking the C key.   The center function  will
                  redisplay text on your monitor so  that  the  line  the
                  cursor  now  appears on will be the center line of your
                  monitor.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 42
 
 
 
 
       14.0       THE LOCATE FUNCTION
 
 
       14.1       How To Use Locate
 
 
                  Locate  is a function which can be selected  from   the
                  function   line  by  striking  the L key.   Locate will
                  locate the cursor at a given page in your text.  Locate
                  can locate at either  a  absolute  page  number,  or  a
                  relative  number  of pages forward or backward from the
                  current page number.
 
                  After you select locate the following  will  appear  on
                  your screen:
 
        ==> < Beginning End Absolute Relative Marker (cursor location operations)
 
                  You can select any of the following options:
 
                  Beginning  - This is the first option,  you can  select
                  it  by striking the B key.   This will move the  cursor
                  to the very first page of the text.
 
                  End - This is the second option,  you can select it  by
                  striking  the E key.   This will move the cursor to the
                  very last page of the text.
 
                  Absolute  -  This  is  the third option  available,  it
                  will locate the cursor at a given page  number  in  the
                  text.    You   can select this option by striking the A
                  key, after you select this  option  you  will  see  the
                  following the monitor:
 
                  A LINE OF TEXT GOES HERE
 
                  You  should  now  enter  the page number you wish to be
                  located at followed by striking the ENTER key.
 
                  Relative - This is the last option available,  it  will
                  locate  the  cursor  at  a  relative  page  number.   A
                  relative  page number is the number of pages forward or
                  backward from the current page number.  To select  this
                  option   strike  the  R  key.    After  you select this
                  option you will see the following on your monitor:
 
                  RELATIVE: enter the relative page number >   <
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 43
 
 
 
 
                  You should now enter  the  number  of  pages  that  you
                  desire  to  go  forward  or  backward  from the current
                  cursor position.  If you desire to go forward  you  can
                  enter   the  number  with  a plus sign in front of  the
                  number, or you can  enter  just  the  number.   If  you
                  desire  to  go  backward  you  must enter the number of
                  pages you desire to go backward but  precede  it  by  a
                  minus sign.
 
                  Marker   -  This  will  locate the cursor at the  first
                  line of a marked block of text.  It will work  even  if
                  only  the beginning marker has been set.  This function
                  will be best used if you desire to go to some  location
                  in  the  text and then return back to where you are not
                  located.  To do this you would  set  the  begin  marker
                  F8   and  go  somewhere  else  in the text and use  the
                  locate function to get back your original  position  in
                  the text.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 44
 
 
 
 
       15.0       THE INSERT FUNCTION
 
 
       15.1       How To Insert Blank Lines Into The Text
 
                  The  Insert function may be selected from the  function
                  line  by striking the I key.   The insert function will
                  allow  you to insert from one to ninty-nine blank lines
                  into your text.  The first line inserted will begin  at
                  the  line  where  the  cursor  was  last positioned at.
                  After you select insert the following  will  appear  on
                  your screen:
 
         Insert Blank Lines Into Text: enter the number of lines >  <
 
                  You should now enter the number of blank lines that you
                  want  inserted  into your text followed by striking the
                  ENTER key.   This editor will  now  insert  that   many
                  lines into your text.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 45
 
 
 
       16.0       THE DELETE FUNCTION
 
 
       16.1       How To Delete Lines From The Text
 
 
                  The  Delete function may be selected from the  function
                  line  by striking the D key.   The delete function will
                  allow  you to delete from one to ninty-nine blank lines
                  from your text.  The first line deleted will  begin  at
                  the  line  where  the  cursor  was  last positioned at.
                  After you select delete the following  will  appear  on
                  your screen:
 
                  Delete Lines From Text: enter the number of lines > <
 
                  You  should now enter the number of lines that you want
                  deleted  from your text followed by striking the  ENTER
                  key.  This editor will now delete that many lines  from
                  your text.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 46
 
 
 
 
       17.0       THE FILES FUNCTION
 
 
       17.1       How To Perform Disk File Operations
 
 
                  Any  operation  which  will perform some operation with
                  disk drive will be through the FILES   operation.    To
                  select  the  files  operation  from  the function line,
                  strike   the  F  key.    The  following  line  will  be
                  displayed on the bottom line of your monitor:
 
    ==> < Save Finish Quit Edit Read Write Directory Kill (disk file operations)
 
                  One  of the following selections can be chosen from the
                  files option line.
 
                  Save  - This option will save your entire text out   to
                  the  disk,  after  the  save  operation is finished the
                  cursor will be positioned  to  the  line  of  text  the
                  cursor  was last located on.  The save operation can be
                  selected by striking the S key.
 
                  Finish  - This option will save your entire  text   out
                  to the disk, it will exit the editor after all text has
                  been written out to the disk.  The finish operation can
                  be selected by striking the F key.
 
                  Quit  -  This  option  will exit the editor,  and  your
                  file will be the same as it was before you entered  the
                  editor.  The quit operation can be selected by striking
                  the  Q key.   After select this operation the following
                  will be displayed on the bottom line of your monitor:
 
                  QUIT: do you want to exit now without saving (Y/N) ?> <
 
                  You   must  now  strike  the Y key if you are sure  you
                  want to quit.  If you do not want to quit,  strike  the
                  N  key and you will return to the editing  mode.   Make
                  sure to follow the Y or N with a carriage return.
 
                  Edit   -  This  option  will return you to the  editing
                  mode of the editor.  The edit operation can be selected
                  by striking the E key.
 
                  Read  - This operation will allow you to read a   given
                  number  of  lines from the text file.  This option will
                  only be used if the entire text file could not be  read
                  in  from  the disk.  The read operation can be selected
                  by  striking the R key.   After you select this  option
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 47
 
 
                  you will see the following displayed on the bottom line
                  of your monitor:
 
                  READ: enter the number of text lines >   <
 
                  To  this  you  should enter a number between 1 and 999.
                  The editor will always stop when it has read in all the
                  lines from the text file.  If you  enter  a  number  of
                  text  lines  which  cannot  all  be read into memory, a
                  message will be displayed on the bottom  line  of  your
                  monitor,  and  only the number of lines which would fit
                  into your memory will be read in from the disk.
 
                  Write  - This operation will  allow  you  to  write   a
                  given  number  of  lines to the text file.  This option
                  would only be used if the entire text file has not been
                  read in from the disk.  You  would  use  this  function
                  before  you  performed  a  read  operation,  to free up
                  memory space for any new  incomming  text.   The  write
                  operation  will  always  write  text  starting with the
                  first line that is currently stored in the memory.  The
                  write  operation can be selected  by  striking  the   W
                  key.   After  you  select  this option you will see the
                  following displayed on the bottom line of your monitor:
 
                  WRITE: enter the number of text lines >   <
 
                  To this you should enter a number between  1  and  999.
                  The  editor  will  write this many line back out to the
                  disk file.  If you enter more lines to be  written  out
                  than  are  currently in memory, only the lines that are
                  in memory will get written out to the disk file.
 
                  Directory  -  This  operation  will  display  on   your
                  monitor  any  files  which are located on a disk drive.
                  You have the option to select which disk  drive  to  do
                  the  directory  on,  and  only those files with a given
                  file extension if desired.  You can select this  option
                  by  striking the D key.   You should see the  following
                  displayed on the bottom line of your monitor:
 
                  DIRECTORY: enter disk drive or ENTER  > <
 
                  You should now enter the letter of the disk drive which
                  you want the directory on.  A valid entry is the letter
                  A,B,C,D,E  or  F following by striking the  ENTER  key,
                  or  by just striking the ENTER key.   By  striking  the
                  ENTER  key  only,  the default or current disk will  be
                  used for the directory.  After you enter the disk drive
                  letter the following will be displayed  on  the  bottom
                  line of your monitor:
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 48
 
 
                  DIRECTORY: enter filename extension >   <
 
                  You  should  now enter up to three characters, followed
                  by  striking the ENTER key.   If you  strike  only  the
                  ENTER   key  all  files  will  be  displayed  on   your
                  monitor,  if  you  enter  a  one  to  three   character
                  extension, only those files with that extension will be
                  displayed   on   your  monitor.   After  the  file  are
                  displayed on your monitor you should see the  following
                  message:
 
                  Please Strike The ENTER Key To Continue ...
 
                  You   should  now  strike  the  ENTER  key  which  will
                  redisplay the text on your monitor,  and  position  the
                  cursor  in  the  same position the cursor was in before
                  the directory was performed.
 
                  Kill  - This operation will kill or erase a file   from
                  a  disk  drive.    To  select this option strike the  K
                  key, you should see the following on the bottom line of
                  your monitor:
 
                  Enter Filename.ext to be erased from the disk >   <
 
                  You should now enter the filename.ext of the  file  you
                  want  erased  from  the  disk.   You  can  precede  any
                  filename.ext with a drive letter followed by  a  colon.
                  If  no  drive letter is specified then the default disk
                  drive will be used.  If the filename.ext was not  found
                  a  message will be displayed on the bottom line of your
                  monitor.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 49
 
 
 
 
       18.0       HELP
 
 
       18.1       How To Use The HELP Function
 
                  The  HELP  function  is  the  last  selection  on   the
                  function  line.   The  help  function  will display two
                  screens of information relating to  the  functions  and
                  operations  which  are available with this text editor.
                  To  select the help function strike the  H  key.    You
                  monitor  will now display the first screen of commmands
                  what are available  with  this  editor.   At  the  very
                  bottom of your monitor you will see the following:
 
    Please enter ESC to return to editing, or ENTER key for more help?
 
                  At   this  point  if  you  strike  the  ESCape key  the
                  computer will redisplay your text back on  the  monitor
                  as  it  was  before you selected the help function, and
                  you can continue to edit your text.  If you  desire  to
                  see  the  second screen of help information, strike the
                  ENTER  key and that second screen of information   will
                  be  displayed on your monitor.  The above question will
                  again be asked, and these two help screen will continue
                  to  display until you strike the  ESCape  key  to   the
                  above question.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 50
 
 
 
 
       19.0       THE CONTROL KEY FUNCTIONS
 
 
       19.1       Control Codes
 
                  There   are  ten 'control keys' which can be used  with
                  this text  editor  to  perform  various  functions.   A
                  control  key  is  activitated by striking the indicated
                  key  while also holding down the CONTROL  key  at   the
                  same  time.  Although we have tried to minimize the use
                  of control keys because they tend to  be  confusing  to
                  use,  we  have  limited  our use to ten.  The following
                  functions are provided:
 
 
       19.2       Move The Cursor To The Beginning Of The Line
 
                  Control-B  will move the cursor to  the  beginning   of
                  the  current  line  of text.  If the cursor is past the
                  79th column the current page of text will be  redispled
                  starting with column one.
 
 
       19.3       Concataniate This And The Next Line
 
                  Control-C    will   concatinate  the  line  cursor   is
                  currently located on with  the  following  line.   This
                  function  will  not  work  if you are at the end of the
                  file, or are at the bottom line of you monitor.
 
 
       19.4       Shift Current Page Of Text Down One Line
 
                  Control-D  will shift the entire page of text down  one
                  line, but will leave the cursor positioned at the  same
                  place on your monitor.
 
 
       19.5       Exchange This Line With The Next Line
 
                  Control-E  will exchange the current line of text  with
                  the line below it.  This function will leave the cursor
                  on  the  line  below  the  current line.  By using this
                  function several times you can move a line down several
                  lines  in  the  text  without  using  the  block   move
                  function.   This  function  will not work if you are at
                  the end of the file, or are at the bottom line of  your
                  monitor.
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 51
 
 
 
       19.6       Move The Text Over One Space To The Right
 
                  Control-F  will move the text on the current line  over
                  to  the right one space from the position the cursor is
                  at.
 
 
       19.7       Repeat The Above Line
 
                  Control-R  will repeat the above line of text onto  the
                  current line.  All of the text on the  line  where  the
                  cursor  is located at and following will be pushed down
                  one line.
 
 
       19.8       Split The Current Line Of Text In Two
 
                  Control-S  will split the current line in two  at   the
                  position the cursor is currently positioned at.  All of
                  the  text  on the current line which is to the right of
                  the cursor will be moved to the following line.
 
 
       19.9       Shift The Current Page Of Text Up One Line
 
                  Control-U  will shift the entire page of text  up   one
                  line,  but will leave the cursor positioned at the same
                  place on your monitor.
 
 
       19.10      Delete A Word From The Text
 
                  Control-W will delete a single  word  of   text.    The
                  word  deleted  will be the word the cursor is currently
                  positioned on.  If the  cursor  is  positioned  in  the
                  middle of a word, only the portion of the word from the
                  cursor  to the end of the word will be deleted.  A word
                  is considered a group of characters which ends  with  a
                  space character.
 
       19.11      Print Text To The Printer
 
                  Control-PrtSc  will print all of the  lines  of   text,
                  which are currently in the memory, to your printer.  If
                  your  printer  is  not  on or is out of paper a message
                  will be displayed on the bottom line of  your  monitor.
                  If  you have any text marked with the MARKER  function,
                  only  that  portion  of  the  text which is marked will
                  printed  to  your  printer.   All text which is  to  be
                  printed will be sent to the device hooked up to LPT1:.
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 52
 
 
 
 
       20.0       ERROR MESSAGES
 
 
       20.1       Error Messages Which Can Appear In SCREEN
 
                  During   the  use  of SCREEN a variety of messages  can
                  appear on your screen, some of which are:
 
                  Disk is fill - exit the program now
 
                  If the above message appear it means that your diskette
                  is full and your text cannot be  written  out  to  that
                  disk.  When this or any error message appears which has
                  to do with the disk drive, do the following:
 
                  (a) If full delete a  file  from  that  disk  with  the
                  Kill function in the Files selection.
 
                  (b)  Go  to  the  very  first line of the text, use the
                  Locate  function to do this,   and  set  the  beginning
                  marker.    The  go  to the end of text,  use the Locate
                  function to do this, and set the end marker.   You  can
                  use   the function key F7 to set the beginning  marker,
                  and the function key F8 to set the end marker.
 
                  (c)   Select  Block from the selection line and  select
                  the  Write function to write out  the  text  to   disk.
                  Enter  a filename other than the filename which you are
                  currently editing.  After this has been done  you  will
                  have a copy of all the text in memory on the disk.
 
                  (d) You should now exit out of the program by selecting
                  the   Files  function from the selection line and  then
                  select Quit to exit the program
 
                  The above proceedure should be completed for any of the
                  following messages:
 
                  Too many files on disk - erase some files
                  Bad filename was used
                  Disk is write protected
                  Disk drive is not ready
                  Disk media error - use different disk
 
                  Remember  after  any  of  the  above  errors the normal
                  finish or save command cannot be used.
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
  SCREEN - A Full Screen Text Editor                               Page: 53
 
 
 
 
                  If your memory falls below 800 bytes free you will  see
                  the following message on your screen:
 
                  out of memory
                  out of string space
                  memory space error
 
                  At this time you should exit the program by saving your
                  text   to  the disk with the Save or  Finish  function.
                  It would be a good idea not to let the memory available
                  fall below 2000 bytes.   You  can  free  up  additional
                  memory   by   using the Files function with  the  Write
                  command.
 
                  If  the amount of free memory falls too low the program
                  will automatically delete the last two  lines  of  your
                  text  so that it can free up enough memory to perform a
                  Save  or Finish.   If it does  this,   a  message  will
                  appear on your screen.
 
                  If any other type of error message appears it will look
                  like the following:
 
                  SCREEN error number: ##
 
                  The  ##  will be some number between 01 and 99, if this
                  message should appear contact Basic Business  Software,
                  Inc.  for help.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
          (c) 1983 by Basic Business Software, Inc. and Peter M. Burke
 
 
 
 
 
 
 
 
 
 
 
 
 
    **************************************************************************
    **************************************************************************
    ** SCREEN - A Full Screen Text Editor  -    P A Y M E N T   F O R M     **
    **----------------------------------------------------------------------**
    ** This SCREEN text editor has been made possible through the HONORWARE **
    ** distribution concept.  If you are using this editor, and find it of  **
    ** good value, please do your part to make this distribution concept a  **
    ** viable one and send in a payment of thirty five dollars.             **
    **----------------------------------------------------------------------**
    **                                                                      **
    ** I have enclosed thirty five dollars as payment for SCREEN, please    **
    ** send me the following:                                               **
    **                                                                      **
    **     (a) A SCREEN users manual in a padded vinyl binder.              **
    **     (b) A function key overlay for the IBM Personal Computer.        **
    **     (c) A diskette containing the most recent version of SCREEN.     **
    **     (d) A coupon for 10% off on any purchase of                      **
    **         Basic Business Software, Inc. software products.             **
    **                                                                      **
    **                                                                      **
    ** Please send the above items to the following address:                **
    **                                                                      **
    **         NAME:    ________________________________________            **
    **                                                                      **
    **         COMPANY: ________________________________________            **
    **                                                                      **
    **         ADDRESS: ________________________________________            **
    **                                                                      **
    **         CITY   : ________________________________________            **
    **                                                                      **
    **         STATE  : ________________________________________            **
    **                                                                      **
    **         ZIPCODE: ________________________________________            **
    **                                                                      **
    **                                                                      **
    **----------------------------------------------------------------------**
    **                                                                      **
    **  Send this order form to : Basic Business Software, Inc.             **
    **                            Post Office Box 26311                     **
    **                            Las Vegas, NV   89126                     **
    **                            (702) 876-9493                            **
    **                                                                      **
    **  Basic Business Software, Inc. hopes to distribute other fine        **
    **  software products through this HONORWARE distribution system,       **
    **  but can only do so if the distribution of SCREEN meets with         **
    **  success from the users of IBM Personal Computers.                   **
    **                                                                      **
    **************************************************************************
    **************************************************************************
 
 
 
 
 
 
 
 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0086

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT       128   1-01-80  12:01a
    FILES86  TXT      1048   1-30-87   8:35a
    GO       BAT       347   1-04-80  12:32a
    HELPME   BAT      1536   1-01-80  12:45a
    INSTALL  BAT       384   1-01-80  12:05a
    MMOUSE   BAT       384   1-01-80  12:13a
    PRTCOM1  BAT       128   1-01-80  12:28a
    PRTCOM2  BAT       128   1-01-80  12:29a
    PRTLPT1  BAT       128   1-01-80  12:26a
    PRTLPT2  BAT       128   1-01-80  12:28a
    SAMPLE   TXT      1408   1-01-80  12:17a
    SCREEN   EXE     88092   1-18-87  11:16p
    SCREEN   TXT    126269   1-04-80  12:32a
    STRIPPER EXE     35253   1-18-87  11:27p
           14 file(s)     255361 bytes
                           56320 bytes free
