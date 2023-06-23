---
layout: page
title: "PC-SIG Diskette Library (Disk #382)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0382/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0382"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-CONVERT AND PC-SWEEP"

    PC-CONVERT/SWEEP is a powerful collection of file conversion and disk
    utilities.  PC-SWEEP is a file handling utility.  Operating in either
    single or multi-file mode, this program lets you easily conduct file
    operations (copy, delete, rename, etc.) and has some very informative
    screen displays.  This one deserves a place in everyone's collection.
    
    System Requirements: PC (not MS) DOS 2.0 or greater, BASIC
    
    How to Start: To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  To run a BAT or COM program, just type its name and press
    <ENTER>.  For instructions on running BASIC programs, please refer to
    the GETTING STARTED section in this catalog.
    
    Suggested Registration:  PC-SWEEP $20.00
    
    File Descriptions:
    
    PC-SWEEP COM  Disk management utility
    PCSWP110 COM  PC-SWEEP v1.10
    PCSWEEP  DOC  Documentation for PCSWP110.COM
    PC-SWEEP DOC  Documentation for PC-SWEEP.COM
    PCONVERT EXE  Main program PC-CONVERT
    PCONVDOC      Documentation for PCONVERT.EXE
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES382.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 382   PC-CONVERT/SWEEP                                       v1.1
------------------------------------------------------------------------
PCONVERT - A file conversion utility for the IBM Personal Computer. Compiled for
fast processing. Allows user to create and save a template for use in dividing
any ASCII record into fields for subsequent conversion into spreadsheet cells.
Can be impor ted into Lotus 1-2-3, Visi-Calc, etc. User friendly and menu
driven. Complete with documentation. If you've ever had to import large amounts
of data into a spreadsheet, this will take the work out of it.
 
PCCONMNU EXE  Main PC-CONVERT file.
PCCONDOC      Documentation for PC-CONVERT
------------
Useful file conversion and disk utilities.
PC-SWEEP COM  Disk management utility.
PC-SWEEP DOC  Documentation for PC-SWEEP.COM.
PCSWEEP  DOC  Documentation for PCSWP110.COM.
PCSWP110 COM  PC-SWEEP v1.10.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## PC-SWEEP.DOC

{% raw %}
```

















             PC-SWEEP  --  THE ULTIMATE DISK MAINTENANCE UTILITY

                                USER'S MANUAL

                                     FOR

                                  VERSION 1

                                3 AUGUST 1984














                                     BY

                             SANDI & SHANE STUMP
                             BOX 13719 
                             COLLEGE STATION,TX 77841












                           (c) SANDI & SHANE STUMP












                                  COPYRIGHT

      COPYRIGHT  1984 BY SANDI & SHANE STUMP.  All rights reserved.  No 
      part  of  this  document may be  reproduced  for  profit  without 
      written permission from SANDI & SHANE STUMP,  BOX 13719,  COLLEGE 
      STATION, TX  77841.















                                 DISCLAIMER

      SANDI  &  SHANE STUMP make no representation or  warranties  with 
      respect  to  the  contents hereof and specifically  disclaim  any 
      implied  warranties to the suitability of this fine  product  for 
      any particular purpose.  SANDI & SHANE STUMP reserve the right to 
      make  changes  from  time to time in the context  hereof  without 
      obligation to notify any person or persons of such changes.
















                                  TRADEMARK

      PC-DOS is a registered trademark of IBM corporation.
      MS-DOS is a registered trademark of Microsoft Corporation.
















                              TABLE OF CONTENTS

      CHAPTER 1: HARDWARE AND SOFTWARE REQUIREMENTS  ...........  1
              2: INVOKING PC-SWEEP                   ...........  1
              3: MODES OF OPERATION                  ...........  1
              4: OPERATION WINDOWS                   ...........  2
              5: CHANGING COMMAND MODES              ...........  2
              6: MOVING THROUGH THE DIRECTORY        ...........  2
              7: PC-SWEEP COMMANDS                   ...........  3
         
                 < B > -- BACK UP ONE FILE           ...........  3
                 < C > -- COPY FILE(s)               ...........  3
                 < D > -- DELETE FILE(s)             ...........  4
                 < F > -- FIND FILE                  ...........  5
                 < L > -- LOG TO NEW DISK\DIRECTORY  ...........  5
                 < M > -- CHANGE MODES               ...........  5
                 < P > -- PRINT FILE(s)              ...........  6
                 < R > -- RENAME FILE                ...........  6 
                 < S > -- SPACE ON A DISK            ...........  6
                 < T > -- TAG FILE                   ...........  6
                 < U > -- UNTAG FILE                 ...........  6
                 < V > -- VIEW FILE                  ...........  6
                 < X > -- EXIT FROM PC-SWEEP         ...........  7
                 < Y > -- CHANGE FILE(s) ATTRIBUTES  ...........  7 
                 < Z > -- SET VERIFY OFF/ON          ...........  8
                 < ? > -- TOGGLE HELP SCREEN         ...........  8

              9: CLOSING COMMENTS                    ...........  8 



































      PC-SWEEP VERSION 1.00                                     PAGE 1         


      CHAPTER 1: HARDWARE AND SOFTWARE REQUIREMENTS


          PC-SWEEP will only run under PC-DOS 2.0 or greater. A version 
      will  soon  be available for MS-DOS machines.  PC-SWEEP  needs  a 
      minimum  of  96k  of memory and any combination  of  disk  drives 
      (includes HARD disks).

      ***************
      ** IMPORTANT ** PC-SWEEP MAY NOT WORK PROPERLY WITH RAM DISKS!!!!
      ***************


      CHAPTER 2: INVOKING PC-SWEEP

          PC-SWEEP  may be invoked with a command line.  The format  of 
      the command line is as follows:


      PC-SWEEP [DR:][\DIR1][\DIR2]....

      where 
         DR  -- is the drive you wish PC-SWEEP to use for  the  current 
                 drive. It MUST be followed by a colon.

         DIR1\DIR\2 .  .  -- is the directory you wish PC-SWEEP to read 
                             in first.


      Here  are a few examples (NOTE:  the 'A:' prompt is the DOS ready 
      prompt):

      A:PC-SWEEP

          This  format  would  load and  execute  PC-SWEEP,  using  the 
      current logged disk and directory.

      A:PC-SWEEP B:

         This format would load an execute PC-SWEEP,  using drive B  as 
      the logged disk and its root directory.

      A:PC-SWEEP B:\SYSTEM\FILES\BACKUP

         This format would load and execute PC-SWEEP,  using drive B as 
      the logged disk and directory \SYSTEM\FILES\BACKUP.


      CHAPTER 3: MODES OF OPERATION

          PC-SWEEP has two modes: SINGLE-FILE mode and MULTI-FILE mode. 
      All  commands supported in SINGLE-FILE mode are also supported in 
      MULTI-FILE  mode.  MULTI-FILE mode has an additional command  for 
      grouping (Tagging) associated files.  Changing modes is  achieved 
      with a single command!!!! READ ON. . . .


                                      1





      PC-SWEEP VERSION 1.00                                     PAGE 2         


      CHAPTER 4: OPERATION WINDOWS

          When  PC-SWEEP  is first invoked,  it comes up in the  "HELP" 
      mode  screen:  a list of all the commands is ALWAYS present in  a 
      window.  This  feature  is  nice  when  you  are  first  becoming 
      acquainted  with all of PC-SWEEP's commands,  but it  limits  the 
      number  of  directory  files that can be displayed at  one  time. 
      After  you have become acquainted with PC-SWEEP,  you may  toggle 
      (remove) the help screen in order to see more of the directory on 
      the  screen.  The  "DIRECTORY" window (the window  in  which  the 
      directory files are displayed) will scroll from the bottom of the 
      window after it becomes full.


      CHAPTER 5: CHANGING COMMAND MODES

          As  mentioned  earlier,  PC-SWEEP currently has two modes  of 
      operation: SINGLE-FILE mode and MULTI-FILE mode. To change modes, 
      simply press the "Change mode command" ('m' or 'M').  If you  are 
      in  the  "HELP" mode,  the help window will be updated  with  the 
      appropriate command list. Otherwise, if you have toggled the help 
      screen,  the  "mode" line will display the appropriate change  in 
      operation. 


      CHAPTER 6: MOVING THROUGH THE DIRECTORY LIST

         Before we go any further,  it may be nice to learn how to move 
      through  the  directory list.  To move forward one  file,  simply 
      press  the  SPACE  bar  ("sp") or  RETURN  key  ("cr").  To  move 
      backwards  one  file,  simply press the 'B' key.  Once  the  file 
      window  fills,  the contents of the window will begin  to  scroll 
      upward. 

         While  the  above  commands  are  fine  for  movement  through 
      directories with a couple of files, you may encounter a directory 
      with hundreds of files (ex:  HARD disk). If you wish to goto to a 
      file beginning with the letter 'K', you would have to perform one 
      of the above commands repetitively;  but PC-SWEEP supports a FIND 
      command.

      <  F > -- This is used to move  immediately  to a particular file 
      position.  When entered,  followed by the file name that you wish 
      to  find,  this command will list the specified filename  at  the 
      next   file  position.   This  command  supports  wild  cards  to 
      facilitate use. 

               1.   APPLE.BAS   (      0) : F  FIND WHAT FILE? *.COM
               112. PRINTER.COM (   3646) : _
               
      As  example 2 illustrates,  entering the first letter or  letters 
      will transfer you to that section of the directory. 

               112. PRINTER.COM (   3646) : F  FIND WHAT FILE? FI
               37.  FILE1.DOC   (      0) : _


                                      2





      PC-SWEEP VERSION 1.00                                     PAGE 3         


      CHAPTER 7: PC-SWEEP COMMANDS

         Before talking about the individual commands,  a quick comment 
      is necessary. Several of the commands ask for the user to enter a 
      "DRIVE\DIR\"   and   some   ask  for   an   additional   filename 
      ("DRIVE\DIR\FILENAME"). It must be pointed out now, that PC-SWEEP 
      will  NOT  ACCEPT  any illegal drive characters  or  ANY  illegal 
      directory and\or filenames!!!. 

      ************
      **  NOTE  **  YOU MAY ABORT ANY OF THE COMMANDS BY SIMPLY 
      ************  PRESSING RETURN!!!

         The  following  sections  discuss in  alphabetical  order  the 
      various PC-SWEEP commands (NOTE:  Each section will discuss  both 
      the SINGLE-FILE and MULTI-FILE version of each command.

      <  B  > -- This will return to the previously listed file. 
                 ______________________________________________________

      <  C  > -- Copies a file.  In the SINGLE-FILE mode, there are two
                 different actions:

                 (1)  You  may copy a file to a different  disk  and/or 
                      directory keeping the same file name.
                      
                      B:APPLE.BAS    (      0) : C
                      COPY TO WHAT DRIVE\DIR\FILENAME: A:\SYSTEM\

                      Please note the '\' after the directory 'SYSTEM'. 
                      This  tells  PC-SWEEP  that  you  wish  to   copy
                      'APPLE.BAS' to drive C into directory SYSTEM.  If 
                      the   '\'  had  not   been   supplied,   PC-SWEEP
                      would  have interpreted the command  as  follows: 
                      copy APPLE.BAS to drive C into the root directory 
                      and name the file SYSTEM.

                 (2)  You  may  copy  a  file  to  the  same  disk  and 
                      directory  or  a different disk and/or  directory 
                      with a different filename. The syntax is the same 
                      as  above,  except for the last '\';  it must  be 
                      left  off  if  you wish the last filespec  to  be 
                      interpreted  as  a  filename  rather  than  as  a 
                      directory name.
       
                 In MULTI-FILE mode,  the copy command may only be used 
                 as described above in case 1. (NOTE: An '*' before the 
                 colon in a directory listing informs you that the file 
                 has been 'tagged'. This will be discussed further on)

                 B:APPLE.BAS    (       0)*:             
                 B:BONKERS.PAS  (       0) :             
                 B:FILE1.DOC    (       0)*: C
                 COPY TO WHAT DRIVE\DIR: A:\SYSTEM
                 DO YOU WISH TO COPY TAGGED OR UNTAGGED FILES (T/U)? T


                                      3





      PC-SWEEP VERSION 1.00                                     PAGE 4         


                 COPYING  ---> APPLE.BAS    TO  A:\SYSTEM
                 COPYING  ---> FILE1.DOC    TO  A:\SYSTEM

                 B:FILE1.DOC    (       0)*: _

                 If in the above example I had answered Untagged:
       
                 B:APPLE.BAS    (       0)*:             
                 B:BONKERS.PAS  (       0) :             
                 B:FILE1.DOC    (       0)*: C
                 COPY TO WHAT DRIVE\DIR: A:\SYSTEM
                 DO YOU WISH TO COPY TAGGED OR UNTAGGED FILES (T/U)? U

                 COPYING  ---> BONKERS.PAS  TO  A:\SYSTEM
                 
                 B:FILE1.DOC    (       0)*: _
                 ______________________________________________________

      <  D  > -- Deletes a file from the disk.  The disk statistics are 
                 then updated.

                 In the SINGLE-FILE mode:
        
                 B:APPLE.BAS   (      0) : D     DELETE FILE (Y/N)? Y
                 B:BONKERS.PAS (      0) : _ 

                 To abort this command, just enter any key except <Y>.
                 If  the file is R/O (read only),  you will be prompted 
                 with the following:

                 FILE IS R/O. DELETE ANY WAY (Y/N)? 
        
                 If  you  respond  with  a <Y> then the  file  will  be 
                 deleted. 


                 In   the   MULTI-FILE  mode  you  may   delete   files 
                 automatically  or  be  prompted  before  any  file  is            
                 deleted.

                 B:APPLE.BAS    (       0)*:             
                 B:BONKERS.PAS  (       0) :             
                 B:FILE1.DOC    (       0)*: D
                 DELETE TAGGED OR UNTAGGED FILES (T/U)? T
                 DO YOU WISH TO BE PROMPTED (Y/N): N

                 DELETING  ---> APPLE.BAS 
                 DELETING  ---> FILE1.DOC

                 B:BONKERS.PAS  (      0) : _

                 If you had answered 'Y' to being prompted,  the action 
                 would  be  similar  to if you had  performed  the  'D' 
                 command several times in the SINGLE-FILE mode.
                 ______________________________________________________ 


                                      4





      PC-SWEEP VERSION 1.00                                     PAGE 5         



      <  F  > -- Find file. SEE CHAPTER 6.
                 ______________________________________________________ 

      <  L  > -- This command allows you to change the  current  logged 
                 drive and/or current directory.  If there are no files 
                 located in the directory that has been  designated,the 
                 following message will be displayed:
       
                 NO FILES                 : _

                 At this point,  only commands that do not involve file 
                 operations may be used, such as the < L > command.

                 If you enter a drive that does not exist,  the current 
                 drive  will stay the same.  If you enter a drive  that 
                 does  exist along with a non-existent  directory,  PC-
                 SWEEP will change the current drive to that drive  and 
                 the current directory will become the root directory.
                 ______________________________________________________

      <  M  > -- This  command  allows you to  switch   between  Single             
                 file   operations  and   Multiple  file   manipulation              
                 operations.  After entering <M>,   the top menu window              
                 will display the appropriate command menu.
                 ______________________________________________________

      <  P  > -- Prints a file to the printer.
       
                 This  procedure will not allow printing of files  with 
                 the extension of .COM, .EXE, and .OBJ 

                 *** WARNING *** Make certain your printer is ready  to 
                 operate  before using this command.  If no printer  is           
                 attached  or  the printer is not ready,  this  program 
                 will exit into an indefinite loop. 

                 You  may  use this command in the MULTI-FILE  mode  to 
                 print  several files.  After each file is  printed,  a 
                 FORM FEED will be sent to the printer.
                 ______________________________________________________

      <  R  > -- Renames a file. This procedure will not allow the user 
                 to enter an illegal PC-DOS filename,  such as one that 
                 exceeds the 8 character, 3 character extension  limit, 
                 or one with an illegal character.
        
                 B:GHOST.PAS  (     0) : R   ENTER NEW NAME: PASCAL.PAS
               
                 This  command  is  not  supported  for  multiple  file 
                 renaming.  If  you  are in the  MULTI-FILE  mode,  the 
                 command will still work as stated above.
                 ______________________________________________________




                                      5





      PC-SWEEP VERSION 1.00                                     PAGE 6         


      <  S  > -- This command allows you to check  the  amount of  free 
                 disk  space on any disk.  After entering the  command, 
                 you  will  be asked to enter the drive  you   wish  to 
                 check.  It  will  then  skip a  line  and   print  the            
                 amount.  If you enter an illegal drive  character, the 
                 program  will  simply display its free  space as being 
                 0.

                 B:FILE1.DOC    (      0) : S   ENTER DRIVE: A

                 FREE SPACE FOR DRIVE A:   60416
                 ______________________________________________________ 

      <  T  > -- This  will  allow  you  to tag  a file  or  files  for 
                 multiple  file manipulation.  The command will keep  a 
                 tally  of  the  amount  of file space  that  has  been 
                 tagged.   After   a   file  has   been   tagged,   the           
                 directory listing will be marked with an asterisk  (*) 
                 immediately before the colon.

                 B:GHOST.PAS    (      0) : T   TAGGED FILES =       0
                 B:PRINTER.PAS  (   3646) : T   TAGGED FILES =    3646
                 B:APPLE.BAS    (      0) : B
                 B:PRINTER.PAS  (   3646)*: 
                 ______________________________________________________
          
      <  U  > -- This  will  untag all files that have been  previously 
                 tagged.  The  command  will also recalculate the  file 
                 space  that  has  been  tagged  after  untagging   the 
                 specified file. 
                 ______________________________________________________

      <  V  > -- This will allow you to display the file to the screen. 
                 The  screen  will  clear and will allow  you  to  page 
                 through the chosen file. At the bottom of the viewing 
                 window will be 3 function keys.

                 <F1> -- NEXT LINE
                         Will allow you to proceed one line at a time.
       
                 <F2> -- NEXT SCREEN
                         This  allows  you to proceed one screen  at  a 
                         time. 
       
                 <F3> -- QUIT VIEWING
                         This allows you to exit back to PC-SWEEP.

                 Upon  reaching  the end of the file in which  you  are 
                 listing, the program will display
         
                 *** END OF FILE *** 

                 after which the program will only accept the input  of 
                 the  <F3>  command.   This  is  a  sequential  viewing 
                 procedure. 


                                      6





      PC-SWEEP VERSION 1.00                                     PAGE 7         


                 This  command  is  not  supported  for  multiple  file 
                 renaming.  If  you  are in the  MULTI-FILE  mode,  the 
                 command will still work as stated above.
                 ______________________________________________________

      <  X  > -- Exits the program to the operating system.
                 ______________________________________________________
                          
      <  Y  > -- Set  file  status.  After entering this  command,  the 
                 program will respond with the statement:

                 B:PRINTER.PAS (3646):ENTER FILE ATTRIBUTE(s)(R,H,S,A):   
                                      where
                                          R -- Read Only 
                                          H -- Hidden file
                                          S -- System file 
                                          A -- Archive file

                 A  Read  Only  file can normally  only  be  read,  not 
                 written to or deleted by the DEL command.

                 Hidden  files normally do not appear to the user  when 
                 he issues a DIRectory command.

                 An  Archive file is a file that can be both  read  and 
                 written to.
       
                 Multiple  attributes can be designated simultaneously, 
                 as in the following example:

                 B:P.COM (3646):Y ENTER FILE ATTRIBUTE(s) (R,H,S,A): HR
            
                 which would hide the file called PRINTER.COM and would 
                 also assign it Read Only status.

                 ********* PC-SWEEP    will   accept    all    possible 
                 ********* combinations  of file attributes,  but it is 
                 ** NOTE * senseless  to  assign  any   combination  of 
                 ********* attributes   with  the  ARCHIVE    attribute  
                 ********* since  it  will  take  precedence  over  all 
                 ********* others.


                 This  command  will allow you to set/change  the  file 
                 attributes for multiple files in the MULTI-FILE mode.
                 _____________________________________________________











                                      7





      PC-SWEEP VERSION 1.00                                     PAGE 8         


      <  Z  > -- Set verify OFF/ON. This command is a complement to the 
                 copy  command ('C').  If verify set to ON,  every disk 
                 write will be verified!! 
         
                 ****** Verify  option  is off when PC-SWEEP  is  first 
                 ****** invoked  because  disk  errors  are  rare   and 
                 *NOTE* verification  slows  down  disk  writing  by  a 
                 ****** factor of 2.5. However,  you will probably want 
                 ****** to  turn  it on when you are copying  important 
                 ****** data. 
                 ______________________________________________________

      <  ?  > -- Toggle help screen.   This will turn the  help  screen            
                 off/on.



      CHAPTER 8: CLOSING COMMENTS


          We  hope you find PC-SWEEP useful.  After using MS-DOS system 
      commands  for the last 6 months,  we felt encouraged to  write  a 
      multi-function disk maintaince utility.  As you have guessed, PC-
      SWEEP is that utility.  PC-SWEEP is modeled somewhat like that of 
      NEWSWEEP  by DAVID RAND (NEWSWEEP is a CP/M 80  utility),  except 
      single-file commands have been extended to handle both single and 
      multiple file operations.

         If  you  find  this utility useful,  we ask  that  you  please 
      contribute $20.00.  If you do contribute,  you will be put on our 
      mailing list and will be informed on updates. 

      Please send all contributions and problem reports to:

      SANDI & SHANE STUMP
      BOX 13719
      COLLEGE STATION, TX
                       77843

      TELEPHONE (409)-845-0143  (FROM 8:00 AM ---> 5:00 PM scattered)

















                                      8





3
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0382

     Volume in drive A has no label
     Directory of A:\

    PCONVERT EXE     90496   1-08-87  10:54p
    PCONVDOC         40751   1-12-87  10:29p
    --------             3   4-24-85  10:23a
    PC-SWEEP COM     35813   8-05-84   2:44a
    PC-SWEEP DOC     24064   8-04-84   1:55p
    PCSWEEP  DOC      1664  10-20-84   2:27a
    PCSWP110 COM     33536  11-09-84   8:02a
    FILES382 TXT      1090   1-31-87   2:53p
            8 file(s)     227417 bytes
                           91136 bytes free
