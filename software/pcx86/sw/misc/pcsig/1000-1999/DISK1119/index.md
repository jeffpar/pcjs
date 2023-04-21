---
layout: page
title: "PC-SIG Diskette Library (Disk #1119)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1119/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1119"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PULLED BY REQUEST OF AUTHOR"

    Many computer users are now worried about how they can protect
    themselves from the viruses and trojan horses that are out there -- just
    waiting to attack an unsuspecting system.
    
    Here's a disk full of programs to help you in that fight.  One of the
    programs lets you write-protect your hard disk before you try any new
    software, thus keeping viruses off it.
    
    FLUSHOT+ lets you write-protect entire classes of files, such as all
    your files ending with .EXE or .COM.  It also lets you check individual
    files for problems, keeps track of these files, and tells you if
    anything has changed when you check them a second time.  FLUSHOT+ even
    tells you when a program has inserted something into a memory-resident
    mode, thus alerting you to the kind of viruses that wait in memory
    before they strike.
    
    A second program, HDSENTRY, sets itself up in memory and monitors all
    commands sent to the hard drive of your system.  If the command is
    potentially harmful, such as attempting to write to the drive or to
    erase a file, HDSENTRY intercepts the command and prompts you for
    continuation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRYPT.BAS

{% raw %}
```bas
100 KEY OFF
110 COLOR 7,0
120 WIDTH 80
130 SCREEN 0,0,0
140 CLS
150 PRINT "A Simple File Cryption Program in BASIC"
160 PRINT "Written by Dan Gookin, Copyright (c) TAB Books"
170 PRINT
180 PRINT "Will you be <D>ecrypting or <E>ncrypting? (D or E): ";
190 B$ = INPUT$(1)
200 B$ = CHR$(ASC(B$) AND 95)
210 IF B$><"E" AND B$><"D" GOTO 190
230 PRINT B$
240 PRINT
250 LINE INPUT "Enter the INPUT file: ";FILEIN$
260 LINE INPUT "Enter the OUTPUT file: ";FILEOUT$
270 PRINT
280 LINE INPUT "Enter the keyword pattern: ";KEYWORD$
290 KEY.LEN = LEN(KEYWORD$)
300 IF KEY.LEN = 0 THEN 280
320 REM ******************************
330 REM Entryption/Decryption routines
340 REM ******************************
350 OPEN FILEIN$ FOR INPUT AS 1
360 OPEN FILEOUT$ FOR OUTPUT AS 2
370 FOR X=1 TO KEY.LEN
380     IF EOF(1) THEN 460
390     D$ = MID$(KEYWORD$,X,1)
400     A$=INPUT$(1,1)
410		ON INSTR("DE",B$) GOSUB 480,510
420     PRINT#2,C$;
430     PRINT C$;
440 NEXT X
450 GOTO 370
460 CLOSE
470 END
475 REM ******************************
480 REM Decrypt it:
490 C$ = CHR$((ASC(A$)-ASC(D$)) MOD 255)
500 RETURN
510 REM Encrypt it:
520 C$ = CHR$((ASC(A$)+ASC(D$)) MOD 255)
530 RETURN
```
{% endraw %}

## DISKTOOL.DOC

{% raw %}
```















                      
                      ------------------------------------
                      Disk Tool -- Disk Management Utility
                            User's Guide To Operation
                                  Version 1.0A
                      ------------------------------------



























                                  July 24, 1986








        Copyright (c) 1986 by R. P. Gage, all rights reserved.


        Disk Tool -- Disk Management Utility, version 1.0A        Page 1



                        T A B L E   O F   C O N T E N T S

                                                                    Page

             Purpose of Disk Tool ...................................  3

             System Requirements ....................................  4

             Conventions Used .......................................  5
             
             Functions ..............................................  6

                  ALTER          Modify the attributes of files .....  8
             
                  CHANGE         Change the current working drive ... 10

                  DISK           View and/or edit the current drive . 11

                  ERASE          Erase files on the current drive ... 14

                  FILE           View and/or edit a file on the drive 15

                  LOCATE         Look for matching files on the drive 16
                       
                  RENAME         Rename files on the current drive .. 17

                  QUIT           End Disk Tool and return to DOS .... 18

             Appendix A     Known limitations ....................... 19

             Appendix B     Error Messages .......................... 20

             Appendix C     Program Notes ........................... 23
             
             Appendix D     Disclaimer .............................. 24

             Appendix E     WARNING ! ............................... 25

             Appendix F     Shareware ............................... 26


















        Disk Tool -- Disk Management Utility, version 1.0A        Page 2



                     P U R P O S E   O F   D I S K   T O O L


             Disk  Tool allows you to look at and make changes to what is 
        stored on your DOS disks.   It gives you the ability to work with 
        individual  files  or the disk as a whole and  lets  you  perform 
        operations that DOS usually isn't able to provide.  Generally, it 
        lets you manipulate everything on your disks easily and with very 
        few restrictions.

             The current version of Disk Tool, version 1.0A, provides the 
        following functions:

             --   access  any DOS disk available:   any size floppy,  any 
                  size  hard disk (up to 32MB),  and any sized RAM  disk; 
                  all with any allowable sector size (128,  256,  or  512 
                  bytes).  

             --   edit the disk,  on a sector basis, allowing full access 
                  in  a  sequential  or random manner  to  any  available 
                  sector on the disk.   The sector number being edited is 
                  displayed at all times.

             --   edit any file on the disk,  on a sector basis, allowing 
                  full  access  in a sequential or random manner  to  any 
                  sector in the file.   The relative sector number within 
                  the file is displayed at all times. 

             --   change  all of the file attributes for any file on  the 
                  disk.   This includes R/O,  Hidden,  System and Archive 
                  status as well as the file's date and time of creation.

             --   find  any  file  on the disk matching an  ambiguous  or 
                  unambiguous file specification.  (ie. *.BAT or WS.COM).

             --   rename any file on the disk.

             --   erase any file on the disk.

             --   all  file  operations allow full access to ANY file  in 
                  ANY subdirectory.  The status of a file or subdirectory 
                  is irrelevant.















        Disk Tool -- Disk Management Utility, version 1.0A        Page 3



                      S Y S T E M   R E Q U I R E M E N T S


             Disk  Tool was written using TURBO Pascal 3.0.   To run,  it 
        requires  an  IBM PC/XT/AT or true  compatible  computer  running 
        under  DOS  Version  2.0 or later with at least  128K  memory,  a 
        monitor using a Monochrome or Color/Graphics display  card,  and, 
        at a minimum, one floppy disk drive.

             In  addition,  Disk Tool can make use of more memory (if  it 
        needs it) and more disk drives (360K or 1.2MB floppy drives, hard 
        disks,  or  RAM disks).   More memory is usually only required if 
        you  are using Disk Tool with a hard disk that contains a lot  of 
        files and sub-directories.

             Currently,  Disk Tool has successfully run under the TopView 
        and  WINDOWS operating environments.   In both cases,  Disk  Tool 
        runs  in  a separate window allowing simultaneous use with  other 
        programs.  






































        Disk Tool -- Disk Management Utility, version 1.0A        Page 4



                         C O N V E N T I O N S   U S E D 


             The  conventions used in this document refer mainly  to  the 
        description  of  function  keys.   Each  function  key,  wherever 
        possible,  is  described by the word or lettering that appears on 
        the key.  Where this is not possible, the key is described by its 
        function and is surrounded in brackets.  

             The names I use for these keys and their descriptions are:

             Home           the Home key (key 7) on the numeric keyboard
             End            the End key (key 1) on the numeric keyboard
             Enter          the enter or return key
             Esc            the escape key (wherever it is located)
             F1             function key one
             F2             function key two
             F3             function key three
             F4             function key four
             F5             function key five
             F6             function key six
             F7             function key seven
             F8             function key eight
             F9             function key nine
             F10            function key ten
             Ins            the Ins (key 0) on the numeric keyboard
             PgDn           the PgDn key (key 3) on the numeric keyboard
             PgUp           the PgUp key (key 9) on the numeric keyboard
             Tab            the tab key
             <UP>           the up arrow key on the numeric keyboard
             <DOWN>         the down arrow key on the numeric keyboard
             <LEFT>         the left arrow key on the numeric keyboard
             <RIGHT>        the right arrow key on the numeric keyboard

             Additionally,  the program itself uses brackets around a key 
        name  whenever it tells you to press a key.   An example of  this 
        exists in the main menu where,  in part, a line states, "... then 
        pressing <ENTER>."  This wording,  where used, means to press the 
        enter key and not the letters,  <, E, N, T, E, R, and >.  The Esc 
        key  and Ins key are also referred to in the program in this  way 
        (ie., as <ESC> and <INS>). 
















        Disk Tool -- Disk Management Utility, version 1.0A        Page 5



                                F U N C T I O N S

             
             Disk  Tool  is started by typing "DT" from the  DOS  prompt.  
        Doing  so loads and runs Disk Tool without problem,  but the com-
        plete invocation for Disk Tool from the DOS prompt is:

             DT [ /DC] [ /DM] [ /DS] [ /DF] [d:]

             Each of the options, briefly described below, exist to force 
        Disk Tool to ignore what it has found out about your computer and 
        accept  what you really want.   All of the functions must have  a 
        space in front of the "/",  but the case and order of the options 
        is not important.
         
                  /DC       Display Color.  Makes Disk Tool display in a 
                            variety of colors, even if it has found a 
                            monochrome adapter installed. 

                  /DM       Display Monochrome.  Causes Disk Tool to 
                            display in two "colors".

                  /DS       Display Slow.  Forces Disk Tool to use DOS 
                            to display on the screen.  If Disk Tool is 
                            used in a windowing operating environment, 
                            this option may be necessary for Disk Tool to 
                            run in a window alongside other programs.

                  /DF       Display Fast.  Forces Disk Tool to use direct 
                            memory writes to display on the screen.  This 
                            is a lot faster than using DOS.

                  d:        Sets the current working drive to d:.  If d: 
                            is not a valid drive letter, Disk Tool sets 
                            the currently logged drive to the current 
                            working drive.

             Once  started,  the main menu is shown.   The information in 
        the  main menu includes the name of the program (Disk  Tool)  and 
        version number (1.0A), my copyright, MSDOS version number, amount 
        of  memory  available to DOS,  number of  drives,  logical  drive 
        letters,  current working drive, my name and address, and finally 
        the  functions available.   If any of this information is missing 
        or seems altered,  please inform me of that fact and  immediately 
        stop using that copy of of Disk Tool.

             Currently, there are eight functions available from the main 
        menu.  They are:

                  ALTER .... Modify the attributes of files. 
                  CHANGE ... Change the current working drive.
                  DISK ..... View and/or edit the current drive.
                  ERASE .... Erase files on the current drive.
                  FILE ..... View and/or edit a file on the drive.
                  LOCATE ... Look for matching files on the drive


        Disk Tool -- Disk Management Utility, version 1.0A        Page 6



                  RENAME ... Rename files on the current drive.
                  QUIT ..... End Disk Tool and return to DOS.

             These  functions are selected by moving the highlighted  bar 
        with  <UP> and <DOWN> and pressing Enter when the bar  highlights 
        the function you want to execute.   An alternative, easier method 
        of  selecting  a  function is to type the  first  letter  of  the 
        function name (A, C, D, E, F, L, R, or Q) and then press Enter.

















































        Disk Tool -- Disk Management Utility, version 1.0A        Page 7



                    ALTER     Modify the attributes of files 


             Pressing  Enter when the ALTER function is highlighted gives 
        you the ability to change the attributes,  date, and time for any 
        file on the current working drive. 

             Once you have selected ALTER, Disk Tool checks to see if the 
        current  working drive's directory has been read into memory yet.  
        If it hasn't been read into memory, Disk Tool does so, displaying 
        the following message in the center of the screen.

                        Reading Directory Information...

             Reading  a disk's directory could be very quick or a  little 
        slow depending on how many files and directories are on the disk.  
        In  any case,  be patient and after a moment,  Disk Tool will  be 
        done.

             After  the entire directory is in memory,  using  the  <UP>, 
        <DOWN>,  PgUp,  PgDn,  Home, and End keys to move the highlighted 
        cursor,  select  the directory you want to use to get files from.  
        <UP> and <DOWN> move the highlighted bar to the previous and next 
        directory, respectively.  PgUp and PgDn move the bar up  and down 
        to the previous and next screen of  directories.   Finally,  Home 
        and End move the bar to the first and last directory.  

             Press Enter to accept the highlighted directory or press Esc 
        to abort and go back to the main menu.  If you don't have any sub 
        directories, all of this will be skipped.

              Then,  in a similar manner, select the initial file to work 
        with.

             When  a  file  has eventually been selected,  you  have  the 
        chance to change its attributes.  To change one of the attributes 
        (Read Only, Hidden, System, or Archive), move the highlighted bar 
        with  <UP> and <DOWN> and press Enter to toggle  the  highlighted 
        attribute on or off.  When an attribute is on, it is set or in an 
        active state.

             Changing  the  time or date is a little different,  but  not 
        enough to make it painful.   Once the highlighted bar is over the 
        date or time field,  press any key to tell Disk Tool you want  to 
        change the contents of that field.

             Upon pressing any key,  you should notice the presence of  a 
        cursor  within the highlighted bar.   You can now type in the new 
        date  or  time (only valid numbers are accepted),  and  move  the 
        cursor to a different place using <LEFT> and  <RIGHT>.   Pressing 
        <UP>, <DOWN>, or Enter ends your changes to the date or time.
             
             When  you are not actually editing the date or time  fields, 
        pressing  <LEFT> or <RIGHT> changes the file you are working with 
        to the previous or next file in the directory, respectively.  


        Disk Tool -- Disk Management Utility, version 1.0A        Page 8




             When  the  file is changed in this manner,  any changes  you 
        made to the previous file ARE NOT SAVED.  To save changes made to 
        a file's attributes,  date, and time, press the Ins key.  An easy 
        way  to tell if you have saved a file's attributes is to  compare 
        the "Present Attributes" column with the "New Attributes" column.  
        After pressing Ins, they are identical.

             When  you have had enough of changing  attributes,  pressing 
        Esc will let you leave the ALTER function.  After doing this, you 
        are  presented the ever familiar main menu and can continue  from 
        there as usual.













































        Disk Tool -- Disk Management Utility, version 1.0A        Page 9



                   CHANGE     Change the current working drive


             Pressing Enter with the CHANGE function selected opens up  a 
        window on the screen showing something similar to:

                          Enter a letter from A to E to
                            change the current drive.
                              Press <ESC> to abort

             To change the current working drive,  do as it says and type 
        a letter in the range shown.  In this example, you could type any 
        of the letters A, B, C, D, or E.  Pressing anything else will not 
        be accepted.  

             Once you press one of the valid letters, all stored informa-
        tion  on the current working drive will be cleared,  forcing Disk 
        Tool to start from scratch on the next disk read.

             If  you selected CHANGE by mistake,  you can abort the func-
        tion by pressing Esc.  Doing so will keep Disk Tool from clearing 
        all stored information on the current drive. 



































        Disk Tool -- Disk Management Utility, version 1.0A        Page 10



                   DISK     View and/or edit the current drive


             For  those who have a need or want to see and change what is 
        actually  stored  on  their disks,  at a  byte  level,  the  DISK 
        function provides that capability.

             When DISK is highlighted,  press Enter and Disk Tool will go 
        to the first sector on the disk in the current working drive  and 
        display  it in both hex and ASCII coded formats.   If you  select 
        DISK  after previously editing the disk,  (ie,  selecting DISK  a 
        second  time  on the same disk) Disk Tool will return you to  the 
        last sector you were editing, not the first sector on the disk.

             Once you begin editing the disk, a variety of function keys, 
        arrow  keys,  and  movement keys,  and others  become  effective.  
        These keys are all described below.  

             F1        Help.  Hitting F1 any time while editing the disk 
                       will display a screen summarizing the functions of 
                       specific keys.  Getting help will not cause any 
                       changes previously made to be lost, so you can ask 
                       for help at any time freely.

             F2        Go to a sector.  F2 gives you the ability to go 
                       randomly to any allowable sector on the disk.  
                       After you press F2, a window will be shown on the 
                       screen.  Then, you can enter a number in the range 
                       shown, or press Esc to abort that function and 
                       remain at the sector you are currently at.

             F3        Go to start of disk.  Anytime that F3 is pressed, 
                       Disk Tool will immediately go to the first sector 
                       of the disk, without question.

             F4        Go to end of disk.  Like F3, when F4 is pressed, 
                       Disk Tool will go to the last available sector on 
                       the disk.

             F5        Edit hex display.  Pressing F5 will cause the 
                       blinking cursor to jump over to the hex side of 
                       the display.  The cursor will stay at the same 
                       point in the sector that it was at previously, it 
                       will just go over to the hex side.

             F6        Edit ASCII display.  F6 will, similarly, cause the 
                       cursor to jump over to the ASCII side of the 
                       display, remaining at the same point within the 
                       sector being edited. 

             F7 - F9   not used

             F10       Press F10, and Disk Tool will bring you back to 
                       the main menu, leaving DISK. 



        Disk Tool -- Disk Management Utility, version 1.0A        Page 11



             <UP>      Move up.  Pressing <UP>, the up arrow, will move 
                       the cursor up one line in the sector.  If you are 
                       at the first line, the cursor will wrap around to 
                       the last line in the sector.

             <DOWN>    Move down.  <DOWN>, the down arrow, will move the 
                       cursor down one line within the sector.  When the 
                       cursor is at the last line, <DOWN> will cause the 
                       cursor to wrap around to the first line.

             <RIGHT>   Move right.  Yes, <RIGHT>, the right arrow key, 
                       will make the cursor move to the right.  When you 
                       are at the last character (or byte) in a line, 
                       <RIGHT> will move the cursor to the the first 
                       character (or byte) in the next line.

             <LEFT>    Move left.  <LEFT>, the left arrow, will move the 
                       cursor to the left.  When the cursor is at the 
                       first character and <LEFT> is pressed, the cursor 
                       will wrap around to the last character in the line 
                       above the current line.

             PgUp      Go forwards.  Hitting PgUp will make Disk Tool 
                       advance and display the next sector available on 
                       the disk, making it the current sector being 
                       edited.  If you are already at the last sector, 
                       PgUp will wrap around to the first sector on the 
                       disk.

             PgDn      Go backwards.  PgDn causes Disk Tool to go 
                       backwards one sector, making the previous sector 
                       on the disk the current sector being edited.  When 
                       the current sector is the first sector, PgDn will 
                       wrap around to the last sector on the disk.

             Home      Reread sector.  Pressing Home will cause Disk Tool 
                       to reread the current sector.  There are two 
                       reasons why you might want to do this.  The first 
                       is to try to read a sector when an error happened 
                       on the first try.  The other reason is to get a 
                       fresh copy of the sector to edit, when you have 
                       made too many unwanted changes to the sector.  
                       When Home is pressed, Disk Tool will erase 
                       whatever changes you made and display a new 
                       working copy of the current sector.

             End       Write sector.  End is the only way any changes 
                       made will get saved.  If you move to another 
                       sector and forget to write it first, all changes 
                       made to the previous sector will be lost.  Disk 
                       Tool doesn't remind (harass) you about writing any 
                       changes.  If you forget to write a sector, it 
                       won't be changed, simply put.  

             At all times while editing,  the actual sector number edited 


        Disk Tool -- Disk Management Utility, version 1.0A        Page 12



        is  displayed  at the bottom of the  screen.   The  first  sector 
        number for a disk is always 1, and the last sector number depends 
        on the format and capacity of the disk you are working with.

             Making  a change to any sector is relatively  easy.   First, 
        find  or go to the sector you want to edit.   Move the cursor  to 
        the place you want to change something, then type in the changes.  
        Changes are discriminated from what was previously in the  sector 
        by being highlighted.  

             Any  character,  all 255 of them,  can be entered while  the 
        cursor  is in the ASCII part of the display,  but only valid  hex 
        characters  can be entered while the cursor is on the hex side of 
        the display.  This causes an interesting problem for those of you 
        who are used to making corrections with the backspace key.   That 
        method  of correcting errors doesn't work with Disk Tool,  it  is 
        just  accepted as another character and processed as normal.   To 
        make  a correction,  you have to move the cursor with <LEFT>  and 
        type in the correction.  






































        Disk Tool -- Disk Management Utility, version 1.0A        Page 13



                   ERASE     Erase files on the current drive


             This  function  is  used to erase any file  on  the  current 
        working drive.   Since Disk Tool doesn't use DOS to erase  files, 
        you can erase any file, even if it is supposed to be read only or 
        hidden.   The  particular  status  of any file doesn't  make  any 
        difference.

             After  you have selected ERASE,  choose the directory to get 
        files  from then the initial file to erase.   Since this  is  the 
        same process as described for the ALTER function, you could refer 
        to that section for help.   Again, press Esc if you want to abort 
        and go back to the main menu.

             When a file is selected,  the screen clears and you will see 
        something similar to what is shown below.

                    The file, "OLD-FILE.NAM" will be deleted.
                      Press 'Y' to delete the file.
                      Press 'S' to skip deleting this file.
                      Press <ESC> to abort and exit.

             If  you now press 'Y',  the file OLD-FILE.NAM will be erased 
        from  the disk.   Pressing 'S' (or 'N') will not erase the  file.  
        Hitting Esc will put you back at the main menu.

             Upon  pressing 'Y' or 'S',  Disk Tool does its work and then 
        returns you to the file selection screen for the chance to select 
        another file to erase.  It will repeat doing this until there are 
        no files left in the directory or you eventually press Esc.  


























        Disk Tool -- Disk Management Utility, version 1.0A        Page 14



                  FILE    View and/or edit a file on the drive


             The FILE function is almost identical to the DISK  function.  
        The main difference is that FILE gives you the ability to see and 
        edit only what is in a file and not the entire disk.

             Press Enter when FILE is highlighted,  select the  directory 
        to get files from to edit, and then get the initial file to edit.  
        Look  at what is described in ALTER for assistance in getting the 
        initial file.  Press Esc to return to the main menu. 

             After a file is selected, you should be looking at the first 
        sector in the file,  ready to edit it.   All function keys, arrow 
        keys,  movement keys, and other keys act the same way as they did 
        in DISK,  with a few minor differences,  described briefly below.  
        Except  for what is described below,  you should read and  follow 
        what is said in the description for DISK.

             F2        Go to a sector.  Pressing the F2 key will still 
                       let you go randomly to any sector, but only to 
                       sectors within the file.  

             F3        Go to start of file.  F3 will go to the start 
                       (first sector) of the file instead of the first 
                       sector on the disk.

             F4        Go to end of file.  Similar to F3, F4 goes to the 
                       end of the file (its last sector) instead of the 
                       end of the disk.

             PgUp      Go forwards.  Pressing PgUp will advance the 
                       relative sector to the next sector in the file.  
                       It won't wrap around to the first sector if you 
                       are at the last sector in the file, but will 
                       remain at the last sector.

             PgDn      Go backwards.  PgDn will go backwards in the file 
                       to the previous sector in it.  If you are already 
                       at the first sector in the file, hitting PgDn will 
                       not wrap around to the last sector, but will 
                       leave you at the first sector.

             At all times while editing, the relative sector number being 
        edited  will be displayed,  not the actual  sector  number.   The 
        first  relative sector number for a file is always 1,  no  matter 
        where the start of the file physically is.

             Like DISK, pressing F10 will return you to the main menu.








        Disk Tool -- Disk Management Utility, version 1.0A        Page 15



                 LOCATE     Look for matching files on the drive


             All  to often,  users of hard disks have several copies of a 
        file in different places,  don't know where a file is located, or 
        just want to look at all files on the disk.   The LOCATE function 
        helps out those users by finding and displaying all files on  the 
        current drive that match any given specification.

             When  ALTER is chosen,  the screen clears,  displays a  few 
        lines of help, and gives you the prompt:
             
                              Filename:  *       .*

             Now,  enter the file(s) you want to look for.  The wildcards 
        ?  and  * can be used as they would be with DOS,  anywhere within 
        the  name  to match any character and all  characters  from  that 
        point on,  respectively.   <LEFT> and <RIGHT> can be used to move 
        the  cursor to a specific place in the name,  and changes made at 
        that place.   Additionally,  pressing Tab will make the cursor go 
        from the filename part to the extension part of the name and vice 
        versa.   When the file to look for has been entered, press Enter.  
        Hitting Esc returns you to the main menu. 

             After Enter has been pressed,  Disk Tool displays all  files 
        matching  what  was typed (reading the directory  if  necessary), 
        pausing at the end of every screenfull of files.   Note that  all 
        I said all files matching what was typed.  Disk Tool will display 
        a file even if it has a hidden or system status. 




























        Disk Tool -- Disk Management Utility, version 1.0A        Page 16



                  RENAME     Rename files on the current drive 


             The  RENAME  function  is  used to rename any  file  on  the 
        current  working  drive.   Because Disk Tool goes around  DOS  to 
        rename files, you can rename any file, even if it has a hidden or 
        system  status.   The status of any file isn't important to  Disk 
        Tool.   The  difference between the RENAME function and  the  DOS 
        rename  is  that  RENAME can only rename one file at a  time  and 
        cannot be used with wildcards.

             Once  RENAME  has been selected,  pick the directory to  get 
        files from and then a file to rename.   See the ALTER  function's 
        description  for an explanation on doing this.   Press Esc if you 
        decide  at  some point that you don't want to  rename  files  and 
        you'll be returned to the main menu.

             After  you  selected a file,  the screen will clear and  you 
        will be asked for the new name for the file.   If you were trying 
        to rename "OLD-FILE.NAM," the screen would show, (in part): 

                             Filename:  OLD-FILE.NAM

             Now,  enter the new name for the file,  typing over the  old 
        name.   <LEFT>  and <RIGHT> can be used to move the cursor to any 
        point in the old name to make changes.   Tab will move the cursor 
        from  the  name part to the extension part of the name  and  vice 
        versa.   When you have changed the name to what you desire, press 
        Enter and you will see:

           The file, "OLD-FILE.NAM" will be renamed to "NEW-FILE.NAM"
                      Press 'Y' to rename the file.
                      Press 'R' to re-enter the new file name.
                      Press 'S' to skip renaming this file.
                      Press <ESC> to abort and exit.

             Pressing  'Y' at this point will rename the file to the  new 
        name you typed in.   If you pressed 'S' (or 'N'),  the file won't 
        be  erased  and  you will be allowed to select  another  file  to 
        rename.   'R'  will show you the "Filename:" prompt shown  above, 
        letting you change the name again and try again.  Hitting Esc, as 
        usual, will bring you back to the main menu.

             Before  going off,  confident about RENAME,  there are a few 
        notes to it.  First, the new name must be typed in exactly as you 
        want  to see it appear in the directory.   You may have  to  type 
        over previous characters with spaces if necessary.   Also, if you 
        leave  leading  or embedded spaces in the filename  or  extension 
        part  of the name,  DOS will have a difficult time accessing  the 
        file from that point on.  It can still be used in a few instances 
        from  DOS (and always from Disk Tool),  but a little trickery  is 
        involved.   Doing  this (leaving spaces in the name) is permitted 
        in  Disk  Tool because you might want to make a  file  harder  to 
        access.  Embedding spaces in a name is definitely one way to make 
        a file harder to access. 


        Disk Tool -- Disk Management Utility, version 1.0A        Page 17



                    QUIT     End Disk Tool and return to DOS


             Selecting  QUIT  from the main menu stops the  execution  of 
        Disk Tool and return you to DOS (or other operating  environment, 
        if applicable).   It returns to the same drive and directory that 
        you  started in,  unless of course you changed the disk that  you 
        started from.

             QUIT  has a synonym that can be used if you like.   Pressing 
        Esc while in the main menu also quits the program after confirma-
        tion.   This is no shorter than pressing "Q <ENTER>",  but it  is 
        included  to  be consistent with the exit command of  other  fun-
        ctions.  When you press Esc, you'll see the message:

                   Do you really want to exit Disk Tool? (Y/N)

             If you enter anything other than 'Y', Disk Tool continues to 
        run  as  if nothing happened,  waiting patiently  for  your  next 
        command.





































        Disk Tool -- Disk Management Utility, version 1.0A        Page 18



                               A P P E N D I X   A

                                Known Limitations 


             In  the current version of Disk Tool,  there are three known 
        limitations,  all of which should only affect a small minority of 
        the people using it.   These limitations deal with memory  usage, 
        floppy disk formats, and hard disk formats.

             First,  Disk Tool is potentially a memory hog.   When a file 
        has  to be accessed for any function,  Disk Tool checks to see if 
        the disk directory has been read yet.   If it hasn't,  Disk  Tool 
        goes  ahead  and reads the disk's entire directory,  keeping  ALL 
        files  and ALL directory names in memory.   For those people  who 
        have a small amount of memory and a tremendous amount of files on 
        a hard disk, I am sorry, but you may be out of luck.  Should Disk 
        Tool run out of memory reading a directory, it will abort.  Plain 
        and simple.  

             Internally,  each file consumes 39 bytes and each  directory 
        33 bytes.  On my hard disk, I have on the average about 600 files 
        and 40 sub directories.  Doing a few calculations, this turns out 
        to  require less than 25K of memory on top what Disk Tool already 
        uses.   The bottom line is that,  in my normal use,  I need  less 
        than 90K of free memory to run Disk Tool.  Users with fewer files 
        naturally  would  need  less memory while those with  more  files 
        would need more.

             The second limitation deals with floppy disk formats, and is 
        more  of  a bug I have not worked out than anything  else.   When 
        physically  switching between floppy disks of  differing  formats 
        (like between a 320K and a 360K disk,  or more commonly,  a 1.2MB 
        and 360K disk),  Disk Tool isn't always aware of this,  and still 
        thinks that you are using the previous format when you aren't.  A 
        workaround for this problem is to,  whenever switching formats in 
        a  floppy  drive,  exit  Disk Tool and log onto the new  disk  by 
        typing "Dir A:" or something similar.   When you rerun Disk  Tool 
        again, everything will work well and without problems.

             Finally,  Disk Tool only supports hard disks with 128,  256, 
        or  512 byte sectors.   I say that it only supports those  sector 
        sizes because it hasn't been tried with anything but  those.   It 
        also  only  works with hard disks of up to 32MB capacity,  a  DOS 
        limitation, not mine.  If someone out there with a huge hard disk 
        tries Disk Tool on it and finds that it works as "advertised,"  I 
        would be very happy and like to hear about it.  Anyone wanting to 
        donate  a drive of the same magnitude to me so I could adapt Disk 
        Tool to it would be greatly (and publicly) applauded.








        Disk Tool -- Disk Management Utility, version 1.0A        Page 19



                               A P P E N D I X   B

                                 Error Messages


             This  appendix  contains  a list of the error  messages  you 
        might encounter while running Disk Tool and brief descriptions of 
        what they mean.  The types of error messages are broken down into 
        three categories:  program errors, disk errors, and your errors.

             Program  errors deal with something going wrong within  Disk 
        Tool,  or  something happening that it couldn't deal  with.   All 
        program  errors result in the screen being cleared and a  message 
        displayed  at the top of the screen stating that  something  went 
        wrong.  

             The  most common (and hopefully only) program error concerns 
        running out of memory.   If Disk Tool isn't able to read a disk's 
        entire  directory into memory,  it displays the  following  error 
        message at the top of the screen:

                    Disk Tool, version 1.0A is out of memory.  

             There  are several solutions to this error.   First,  if you 
        don't have a full 640K of memory installed in your computer,  the 
        easiest remedy is to purchase and install more memory.   If  more 
        memory  is  not a solution for you (you already  have  640K,  you 
        don't have enough $,  etc.),  removing a few memory resident pro-
        grams,  rebooting,  and trying again is an alternative.  Finally, 
        if  you  are running in a multi-tasking  environment,  allocating 
        more  minimum memory to Disk Tool in its .PIF file or  equivalent 
        should help out.

             In  all  reality,  most users will never run out of  memory.  
        Never.   Those few who have thousands of files on a hard disk are 
        the ones that may encounter a problem.

             The next and only other program error message is a catch all 
        for  anything  unexpected going wrong.   When Disk Tool  stumbles 
        somewhere, it shows the following error message:

                          Oops, an unexpected error ...

             This  is  only the beginning of  the  error  message.   What 
        follows  is the error number,  the location in the program  where 
        the  problem happened,  and if possible a general description  of 
        the error.   If you ever get this error, please write down every-
        thing  that Disk Tool prints out and inform me of it.   In  doing 
        so,  please  try to include as much information on what you  were 
        doing  when the error happened.   It will help me to rid the pro-
        gram of the error.

             Program  errors  take  the easy  out  -- they  abort.   Disk 
        errors, on the other hand cause Disk Tool to open a window on the 
        screen and if possible,  continue where it can.   If a disk error 


        Disk Tool -- Disk Management Utility, version 1.0A        Page 20



        occurs  while Disk Tool is reading a directory,  Disk Tool  exits 
        whatever  function you were trying to execute and returns to  the 
        main menu.   Disk errors that occur elsewhere leave you where you 
        were  in  the  appropriate  function  when  the  error  happened, 
        possibly not reading or writing to the disk as you wanted to.

             All  disk errors dealing with the disk itself start with the 
        following message appearing as the first line in a window  opened 
        in the middle of the screen.

                                 > Disk Error! <

             Following  that line is one of the following error  messages 
        describing what went wrong:

                         A general disk error happened.   
                            Error during a disk read.      
                           Error during a disk write.     
                        Bad sector -- not found on disk.  
                              Unknown disk format.         
                             Error during disk seek.       
                         CRC error -- bad parity check.   
                        Disk not ready (door open, etc).  
                              Invalid drive number.        
                          The disk is write protected.     
                                  Bad Request.            

             To avoid going into a lengthy description on what each error 
        message means, I'll describe a few more common types of errors.  

             Hard  disks and many "copy protected" floppy disks  commonly 
        have  a few "bad" sectors.   If you run across one of  these  bad 
        sectors  while using the DISK function,  Disk Tool tells you  so, 
        but it is no cause for concern.  If you come across an error when 
        editing a file using FILE,  there is a lot of reason for concern.  
        It  would be much to your advantage to try to make a copy of that 
        file as soon as possible,  even though it may be too late to save 
        the entire file.

             The next most common problem is running Disk Tool on non-DOS 
        disks.  Remember that Disk Tool is intended for use with ONLY DOS 
        DISKS.   Yes, this means that you won't be able to look at what's 
        on  disks  from other operating systems nor  a lot of game  disks 
        that have to be booted to work.

             As with everything however,  there is an exception to  this.  
        I  briefly  tried  one disk emulation program  that  worked  well 
        enough  on  a  non-DOS disk to allow me to use  several  of  Disk 
        Tool's  functions on it without a problem.   I suggest only using 
        the functions DISK and FILE if you do this though.  I am not sure 
        that the other functions would operate as intended.

             Also,  remember  that  Disk  Tool can't access a  disk  that 
        doesn't  exist.   Users  with two floppy disk drives and  no  RAM 
        disks won't be able to access drives C,  D,  and E no matter  how 


        Disk Tool -- Disk Management Utility, version 1.0A        Page 21



        much they try.   Disk Tool reports a variety of errors if you try 
        to access a non-existent drive.

             The  next type of disk error shows up a lot  when  accessing 
        damaged  and non-DOS disks.   If Disk Tool finds that the FAT  id 
        byte  isn't  one of the several valid ones when trying to read  a 
        directory, it shows the following message in a window:

                         The disk ID byte appears to be
                                damaged or wrong.

             If  you know the disk was damaged,  what the id byte  should 
        be,  and the correct location to put it,  you can try to edit the 
        disk  using  the DISK function and make an attempt to reread  the 
        directory.  

             Following the errors dealing with Disk Tool itself and  your 
        disks  are  the errors due to your actions.   These messages  are 
        more informative than anything else, and nothing is affected when 
        you see one of these messages.

             The following error message can happen in the ALTER,  ERASE, 
        and RENAME functions.  Before Disk Tool changes a directory entry 
        for a file,  it checks to make sure that the file is in the place 
        it  expects it to be.   If you see the error message,  Disk  Tool 
        couldn't find the file in the place it thought it was  in.   This 
        basically means, as the message states, that you probably changed 
        disks  somewhere along the line and forgot to CHANGE the  current 
        drive letting Disk Tool know you did this.

                        File "OLD-FILE.NAM" was not found
                         You might have switched disks.

             Note  that  the word OLD-FILE.NAM refers to a file  on  your 
        disk,  while  the words NEW-FILE.NAM and NEW-FIL?.* refer to  new 
        file name that you typed in in response to a prompt.

             The next two error messages appear exclusively when you 
        are in the RENAME function.   The first message,  below, is shown 
        when  you try to rename a file to one that already exists in  the 
        current directory.   In this example,  the old file, OLD-FILE.NAM 
        has  been  attempted to be renamed to the new  file  NEW-FILE.NAM 
        when NEW-FILE.NAM is already a file in the directory.

                         File "OLD-FILE.NAM" cannot be
                         renamed to "NEW-FILE.NAM"; the
                         new file name already exists.

             The next error message below shows up when you try to rename 
        a  file to something ambiguous.   The characters '?' and '*'  are 
        allowed from DOS, but unfortunately not from within Disk Tool.

                         File "OLD-FILE.NAM" cannot be
                         renamed to "NEW-FIL?.*  "; '*'
                             and '?' aren't allowed.


        Disk Tool -- Disk Management Utility, version 1.0A        Page 22



                               A P P E N D I X   C

                                  Program Notes


             Since Disk Tool was conceived less than a year ago,  it  has 
        gone through an almost complete circle of evolution.  It has been 
        rewritten  almost  entirely  several times to bring  it  to  this 
        point,  starting  as a simple routine to draw a box on the screen 
        and  mushrooming  into what you can see and  run  now.   The  box 
        drawing routine is no longer present in the code,  but it was the 
        reason why the program got started.  

             As  the model for Disk Tool,  I used various commercial  and 
        public domain utilities of the same type.   I picked out the best 
        or  most  useful  features from all of the programs  I  used  and 
        improved  upon  them  wherever I saw possible.   I hope  that  my 
        decisions on what is needed are similar to yours.

             I am open to receive ideas for inclusion in future  releases 
        of Disk Tool.   In fact,  I would rather implement other people's 
        ideas than mine.  



































        Disk Tool -- Disk Management Utility, version 1.0A        Page 23



                               A P P E N D I X   D
             
                                   Disclaimer


             Both  Disk  Tool  and  this  documentation  are  distributed 
        without  any  express  or implied  warranties.   No  warranty  of 
        fitness for a particular purpose is offered.   You, the user, are 
        advised  to experiment and become familiar with Disk Tool  before 
        relying on it.   You assume all risk for the use and operation of 
        Disk Tool,  and you shall be responsible for any loss of profits, 
        loss  of  savings,  or other incidental or consequential  damages 
        arising  out of the use or failure to use Disk Tool,  even  if  I 
        have  been advised of the possibility of such damages.   I do not 
        warrant  that this documentation is accurate,  or that Disk  Tool 
        operates as I have claimed or designed it to operate.  

             By using Disk Tool, you agree to the above limitations.


             IBM  is  a registered trademark  of  International  Business 
        Machines Corporation.

             MSDOS is a trademark of Microsoft Corporation.

             TURBO Pascal is a trademark of Borland International, Inc.































        Disk Tool -- Disk Management Utility, version 1.0A        Page 24



                               A P P E N D I X   E

                                    WARNING !


             BEFORE  doing  any work with Disk Tool,  I ask that you  are 
        conscious  of the power you posses when running it and  are  very 
        careful.   Disk Tool is able, purposefully or accidentally, to be 
        used to wipe out some very important parts of your disks.  If you 
        are  not well acquainted with the technical details of  different 
        disk  formats,  please  do not select the DISK  function  without 
        extreme care.  

             The areas that should be avoided unless absolutely necessary 
        are  the  boot record (the first sector),  the FAT (the next  few 
        sectors),  and  the directory.   Making blind changes in  any  of 
        these  areas  has  a  good possibility of  rendering  your  disks 
        useless.   If  you find a pertinent need to change one  of  these 
        areas,  it is a good idea to make a backup copy (with DISKCOPY or 
        something similar) or your disk before you begin. 

             Also  be cautious about where you get Disk Tool from and  of 
        any new versions.   Disk Tool,  before being released,  undergoes 
        extensive  testing.   I have taken every effort possible to  make 
        sure  most known bugs have been eliminated from the  program  and 
        that it functions properly when released.  

             A  problem  with a shareware distribution of Disk  Tool  may 
        arise  because  the source code to Disk Tool is  available.   Al-
        though I hope it never happens,  someone could easily modify  the 
        source  code  to produce a trojan horse type  of  program.   This 
        isn't  as far fetched as it may seem;  it happened in the  recent 
        past  with  the ARC program.   For that reason,  either  get  the 
        latest  release of Disk Tool from a very reliable source or  from 
        me directly.






















        Disk Tool -- Disk Management Utility, version 1.0A        Page 25



                               A P P E N D I X   F

                                    Shareware


             Disk Tool is supported by the users that find it productive.  
        I  ask that,  if you have benefited in some way from Disk Tool or 
        make regular use of it,  you donate $20.00.  A person who donates 
        will  be given a legitimate copy of the program (see the  WARNING 
        in  appendix E) and documentation and will receive any  published 
        announcements of future releases of Disk Tool.

             The donation is not an optional matter if Disk Tool is  used 
        in a commercial environment.

             You  may make copies of the Disk Tool program and documenta-
        tion files for your own use,  and you may make copies to give  to 
        others.   If  the  program is given away,  I ask that no  fee  be 
        charged for the copy and that ALL of the files (program, documen-
        tation, and miscellaneous files) are distributed together, intact 
        and unmodified.

             The  source code is also available,  although is not in  any 
        way  to be freely distributed.   Anyone interested in the  source 
        code should inquire about that on an individual basis.

             Your  comments,   suggestions,   friendly  criticisms,   bug 
        reports,  and improvement ideas are welcome.   Please contact  me 
        ONLY at the address listed below.  

             
                      Disk Tool and this documentation are:


                              Copyright (c) 1986 by

                                   R. P. Gage
                               1125 6th St. N. #43
                               Columbus, MS  39701


















        Disk Tool -- Disk Management Utility, version 1.0A        Page 26

```
{% endraw %}

## FSP.TXT

{% raw %}
```



























                             FLU_SHOT+, Version 1.5

                            A Form of Protection from
                            Viral and Trojan Programs


                                       by
                                Ross M. Greenberg
                                       and
                            Software Concepts Design
                                594 Third Avenue
                            New York, New York 10016
                       BBS:(212)-889-6438 1200|2400|N/8/1






























              FLUSHOT+ is a trademark of Software Concepts Design.
                Copyright (C), 1988 by Software Concepts Design.
                              All Rights Reserved.


        Not for Commercial Distribution without written permission by the
        copyright holder. Noncommercial copying of this software and this
        documentation is encouraged.  Commercial Distribution is easily
        defined: if you distribute this software, or the enclosed
        documentation, for more than your cost of such distribution, then
        you're a Commercial Distributor and require our written
        permission.  Not-for-profit organizations and computer user
        groups, and their bulletin board systems (if any) are
        specifically *not* considered commercial distributors.

        By your using this software, you agree to the terms herein. 
        Specifically, that you do not have the right to copy this
        software except as outlined above, and that you are granted a
        license to use this software only by registering this software as
        mentioned elsewhere in this document.

        You also agree, and signify that agreement by using this
        software, that Software Concepts Design and Ross M. Greenberg
        will not be held liable for any reason for any cost you may
        incur, or any potential income you might lose as a result of
        using this software.  Finally, this software is provided "AS IS",
        meaning that what you see is what you get.  If you use this
        software and a tree falls on your house, or your spouse leaves
        you for someone younger and more virile, please do not bother
        having your lawyer call -- it isn't the fault of the software, no
        matter what the lawyer tries to convince you!



































        Table of Contents

        I.   Introduction
             a.   What is a Trojan.....................................1
             b.   What is a Virus......................................4
             c.   The Challenge to the Worm............................6

        II.  About the FLUSHOT Series
             a.   A Brief History......................................8
             b.   FLU_SHOT+ Features and Enhancements..................9
             c.   Registering FLU_SHOT+................................10
             d.   Site Licensing of FLU_SHOT+..........................10

        III. Using FLU_SHOT+

             a.   The FLUSHOT.DAT file.................................12
                  1.   Protecting files from Write Access..............13
                  2.   Protecting files from Read Access...............13
                  3.   Excluding files.................................13
                  4.   Checksumming files..............................14
                  5.   Registering a TSR program.......................15
                  6.   Restricted Access...............................15
                  7.   Protecting the FLUSHOT.DAT file.................16
                  8.   Protection Recommendations......................16
                  9.   Allowing "dangerous" programs to run............17

             b.   Running FLU_SHOT+....................................18
                  1.   Checksumming the in-memory table................18
                  2.   Intercepting Direct Disk Writes Through INT13...19
                  3.   What about INT26................................19
                  4.   Turning off the header message..................19
                  5.   Disabling Triggering on Open With Write Acces...19
                  6.   Changing the Trigger Window Attributes..........19
                  7.   Allowing trusted TSR's to work..................21
                  8.   Disabling FLU_SHOT+.............................21
                  9.   Disabling FLU_SHOT+ Toggle Display..............22
                 10.   Forcing FLU_SHOT+ to only use the BIOS..........22
                 10.   Defining the "Special" Keys.....................23
                 11.   Putting FLU_SHOT+ to sleep when run.............23

        IV.  Interpreting a FLU_SHOT+ Trigger..........................24

        V.   How Good is FLUSHOT+, Really?.............................29

        VI.  Reward Offered............................................31

        VII. Appendix..................................................33


















                                  Introduction

        What is a Trojan?
        =================

        Back in the good old days (before there were computers), there
        was this bunch of soldiers who had no chance of beating a
        superior force or of even making it into their fortress.  They
        had this nifty idea:  present the other side with a gift.  Once
        the gift had been accepted, soldiers hiding within the gift would
        sneak out and overtake the enemy from within.

        We can only think of the intellectual giants of the day who would
        accept a gift large enough to house enemy soldiers without
        checking its contents.  Obviously, they had little opportunity to
        watch old WWII movies to see the same device used over and over
        again.  They probably wouldn't have appreciated Hogan's Heroes
        anyway.  No color TV's -- or at least not ones with reliable
        reception.

        Consider the types of people who would be thrilled at the concept
        of owning their own rough hewn, large wooden horse!  Perhaps they
        wanted to be the first one on their block, or something silly
        like that.

        Anyway, you're all aware of the story of The Trojan Horse.

        Bringing ourselves a bit closer to the reality we've all grown to
        know and love, there's a modern day equivalent:  getting a gift
        from your BBS or user group which contains a little gem which
        will attack your hard disk, destroying whatever data it contains.

        In order to understand how a potentially useful program can cause
        such damage when corrupted by some misguided soul, it's useful to
        understand how your disk works, and how absurdly easy it is to
        cause damage to the data contained thereon.  So, a brief
        technical discussion of the operation of your disk is in order. 
        For those who aren't concerned, turn the page or something.

        Data is preserved on a disk in a variety of different physical
        ways having to do with how the data is encoding in the actual
        recording of that data. The actual *structure* of that data,
        however, is the same between MS-DOS machines.  Other operating
        systems have a different structure, but that doesn't concern us
        now.

        Each disk has a number of "tracks". These are sometimes called
        cylinders from the old type IBMer's.  These are the same people
        who call hard disks DASDs (Direct Access Storage Devices), so we
        can safely ignore their techno-speak, and just call them tracks. 
        Tracks can be thought of as the individual little grooves on an
        audio record, sort of.

        Anyway, each track is subdivided into a number of sectors.  Each
        track has the same number of sectors.  Tracks are numbered, as


                                        1








        are sectors.  Any given area on the disk can be accessed if a
        request is made to read or write data into or out of Track-X,
        Sector Y.  The read or write command is given to the disk
        controller, which is an interface between the computer itself and
        the hard disk.  The controller figures out what commands to send
        to the hard disk,  the hard disk responds and the data is read or
        written as directed.

        The first track on the hard disk typically will contain a small
        program which is read from the hard disk and executed when you
        first power up your machine.  The power up sequence is called
        "booting" your machine, and therefore the first track is typical
        known as the "boot track".

        In order to read information from your disk in a logical
        sequence, there has to be some sort of index.  An unusual index
        method was selected for MS-DOS.  Imagine going to the card index
        in a library, looking up the title you desire, and getting a
        place in another index which tells you where on the racks where
        the book is stored.  Now, when you read the book, you discover
        that only the first chapter of the book is there.  In order to
        find the next chapter of the book, you have to go back to that
        middle index, which tells you where the next chapter is stored. 
        This process continues until you get to the end of the book. 
        Sounds pretty convoluted, right?  You bet!  However, this is
        pretty much how MS-DOS does its "cataloguing" of files.

        The directory structure of MS-DOS allows for you to look up an
        item called the "first cluster".  A cluster represents a set of
        contiguous ("touching or in contact" according to Random House)
        tracks and sectors.  It is the smallest amount of information
        which the file structure of MS-DOS knows how to read or write.

        Based on the first cluster number as stored in the directory, the
        first portion of a file can be read.  When the information
        contained therein is exhausted, MS-DOS goes to that secondary
        index for a pointer to the next cluster.  That index is called
        the File Allocation Table, commonly abbreviated to "FAT".  The
        FAT contains an entry for each cluster on the disk.  An FAT entry
        can have a few values: ones which indicate that the cluster is
        unused, another which indicates that the associated cluster has
        been damaged somehow and that it should be marked as a "bad
        cluster", and a pointer to the next cluster for a given file. 
        This allows for what is called a linked list:  once you start
        looking up clusters associated with a given file, each FAT entry
        tells you what the next cluster is.  At the end of the linked
        list is a special indicator which indicates that there are no
        more clusters associated with the file.

        There are actually two copies of the FAT stored on your disk, but
        no one really knows what the second copy was intended for. 
        Often, if the first copy of the FAT is corrupted for some reason,
        a clever programmer could recover information from the second
        copy to restore to the primary FAT.  These clever programmers can
        be called "hackers", and should not be confused with the thieves


                                        2








        who break into computer systems and steal things, or the "worms"
        [Joanne Dow gets credit for *that* phrase!] who would get joy out
        of causing you heartache!

        But that heartache is exactly what can happen if the directory
        (which contains the pointer to the first cluster a file uses),
        the FAT (which contains that linked list to other areas on the
        disk which the file uses), or other areas of the disk get
        corrupted.

        And that's what the little worms who create Trojan programs do: 
        they cause what at first appears to be a useful program to
        eventually corrupt the important parts of your disk.  This can be
        as simple as changing a few bytes of data, or can include wiping
        entire tracks clean.

        Not all programs which write to your hard disk are bad ones,
        obviously.  Your word processor, spreadsheet, database and
        utility programs have to write to the hard disk.  Some of the DOS
        programs (such as FORMAT), if used improperly, can also erase
        portions of your hard disk causing you massive amounts of grief. 
        You'd be surprised what damage the simple "DEL" command can do
        with just a simple typo.

        But, what defines a Trojan program is its delivery mechanism: the
        fact that you're running something you didn't expect.  Typical
        Trojan programs cause damage to your data, and were designed to
        do so by the worms who writhe in delight at causing this damage. 
        May they rot in hell -- a mind is a terrible thing to waste!

        Considering the personality required to cause such damage, you
        can rest assured that they have few friends, and even their
        mother doesn't like to be in the same room with them.  They sit
        back and chortle about the damage they do with a few other lowly
        worms.  This is their entire social universe. You should pity
        them.  I know that I do.





















                                        3








                                  Introduction

        What is a Virus?
        ================

        Trojan programs are but a delivery mechanism, as stated above. 
        They can be implemented in a clever manner, so that they only
        trigger the malicious part on a certain date, when your disk
        contains certain information or whatever.  However they're coded,
        though, they typically affect the disk only in a destructive
        manner once triggered.

        A new breed of programs has the capability of not only reserving
        malicious damage for a given event's occurrence, but of also
        replicating itself as well.

        This is what people refer to when they mention the term "Virus
        Program".

        Typically, a virus will spread itself by replicating a portion of
        itself onto another program.  Later, when that normally safe
        program is run it will, in part, execute a set of instructions
        which will infect other programs and then potentially, trigger
        the Trojan portion of the program contained within the virus.

        The danger of the virus program is twofold. First, it contains a
        Trojan which will cause damage to your hard disk.  The second
        danger is the reason why everyone is busy building bomb shelters. 
        This danger is that the virus program will infect other programs
        and they in turn will infect other programs and so forth.  Since
        it can also infect programs on your floppy disks, you could
        unknowingly infect other machines!  Pretty dangerous stuff,
        alright!

        Kenneth van Wyck, one of the computer folks over at Lehigh
        University, first brought a particular virus to the attention of
        the computer community.  This virus infects a program, which
        every MS-DOS computer must have, called COMMAND.COM.  This is the
        Command Line Interpreter and is the interface between your
        keyboard and the MS-DOS operating system itself.  Whatever you
        type at the C> prompt will be interpreted by it.

        Well, the virus subverts this intended function, causing the
        infection of neighboring COMMAND.COMs before continuing with
        normal functionality of the command you typed.  After a certain
        number of "infections", the Trojan aspect of the program goes
        off, causing you to lose data.

        The programmer was clever.  But still a worm.  And still
        deserving of contempt instead of respect.  Think of what good
        purposes the programmer could have put his or her talents to
        instead of creating this damage.  And consider what this
        programmer must do, in covering up what they've done.  They
        certainly can't tell anyone what they've accomplished. 
        Justifiable homicide comes to mind, but since the worms they must


                                        4








        hang around are probably as disreputable as they are, they must
        hold their little creation a secret.

        A pity.  Hopefully, the worm is losing sleep.  Or getting a sore
        neck looking behind them wondering which of their "friends" are
        gonna turn them in for the reward I list towards the end of this
        document.


















































                                        5








                                  Introduction

        The Challenge to the Worm
        =========================

        When I first released a program to try to thwart their demented
        little efforts, I published this letter in the archive (still in
        the FLU_SHOT+ archive of which this is a part of).  What I say in
        it still holds:

                    As for the designer of the virus program: most
                    likely an impotent adolescent, incapable of
                    normal social relationships, and attempting to
                    prove their own worth to themselves through
                    these type of terrorist attacks.

                    Never succeeding in that task (or in any
                    other), since they have no worth, they will one
                    day take a look at themselves and what they've
                    done in their past, and kill themselves in
                    disgust.  This is a Good Thing, since it saves
                    the taxpayers' money which normally would be
                    wasted on therapy and treatment of this
                    miscreant.

                    If they *really* want a challenge, they'll try
                    to destroy *my* hard disk on my BBS, instead of
                    the disk of some innocent person.  I challenge
                    them to upload a virus or other Trojan horse to
                    my BBS that I can't disarm.  It is doubtful the
                    challenge will be taken: the profile of such a
                    person prohibits them from attacking those who
                    can fight back.  Alas, having a go with this 
                    lowlife would be amusing for the five minutes
                    it takes to disarm whatever they invent.

                    Go ahead, you good-for-nothing little
                    slimebucket:  make *my* day!


        Alas, somebody out there opted to do the cowardly thing and to
        use the FLUSHOT programs as a vehicle for wrecking still more
        destruction on people like you.  The FLUSHOT3 program was
        redistributed along with a companion program to aid you in
        reading the documentation.  It was renamed FLUSHOT4.  And the
        reader program was turned into a Trojan itself.

        I guess the programmer involved was too cowardly to take me up on
        my offer and prefers to hurt people not capable of fighting back. 
        I should have known that, I suppose, but I don't normally think
        of people who attack innocents. Normally, I think of people to
        respect, not people to pity, certainly not people who must cause
        such damage in order to "get off".

        They are below contempt, obviously, and can do little to help


                                        6








        themselves out of the mire they live in.

        Still, a worm is a worm.






















































                                        7








                                  About FLUSHOT

        A Brief History
        ===============

        The original incarnation of FLU_SHOT was a quick hack done in my
        spare time.  It had a couple of bugs in it which caused it to
        trigger when it shouldn't, and a few conditions which I had to
        fix.  A strangeness in how COMMAND.COM processed certain
        conditions when I "failed" an operation caused people to lose
        more data than they had intended -- certainly not my intent!

        FLU_SHOT was modified and became FLUSHOT2.  It included some
        additional protections, protecting some other important system
        files, and protecting against direct disk writes which can be
        used to circumvent FLUSHOT's protection mechanisms.

        Additionally, FLUSHOT2 forced an exit of the program currently
        running instead of a fail condition when you indicated that an
        operation should not be carried out.

        FLUSHOT2 was also now distributed in the popular archive format
        (have you remembered to send your shareware check into Phil Katz
        for his efforts?  You really should.  It ain't that much money!).

        Next came FLUSHOT3. A bug was fixed which could have caused
        certain weird things when you denied direct disk I/O to certain
        portions of DOS 3.x.

        The enhancements to FLUSHOT3 included the ability to enter a 'G'
        when FLUSHOT was triggered.  This allowed FLUSHOT to become
        inactive until an exit was called by the foreground task.  So,
        when you used some trustworthy program which did direct disk I/O,
        you wouldn't be pestered with constant triggering after you enter
        the 'G'.  Primarily this was a quick hack to allow programs such
        as the FORMAT program to run without FLUSHOT being triggered each
        time it tried to do any work it was supposed to.




















                                        8








                                  About FLUSHOT

        FLU_SHOT+ Features and Enhancements
        ===================================

        This release of FLU_SHOT has a new name: FLU_SHOT+.  Because
        FLUSHOT4 was a Trojan, I opted to change the name.  Besides,
        FLU_SHOT+ is the result of some real effort on my part, instead
        of being a part-time quick hack.  I hope the effort shows.

        FLUSHOT is now table driven.  That table is in a file which I
        call FLUSHOT.DAT.  It exists in the root directory on your C:
        drive.  However, I'll advise you later on how to change its
        location so that a worm can't create a Trojan to modify that
        file.

        This file now allows you to write and/or read protect entire
        classes of programs.  This means that you can write protect from
        damage all of your *.COM, *.EXE, *.BAT, and *.SYS files.  You can
        read protect all of your *.BAT files so that a nasty program can
        not even determine what name you used for FLU_SHOT+ when you
        invoked it!

        Additionally, you can now automatically check programs when you
        first invoke FLU_SHOT+ to determine if they've changed since you
        last looked at them.  Called checksumming, it allows you to know
        immediately if one of the protected programs has been changed
        when you're not looking.  Additionally, this checksumming can
        even take place each time you load the program for execution.

        Also, FLU_SHOT+ will advise you when any program "goes TSR".  TSR
        stands for "Terminate and Stay Resident", allowing pop-ups and
        other useful programs to be created.  A worm could create a
        program which leaves a bit of slime behind.  Programs like
        Borland's SideKick program, a wonderful program and certainly not
        a Trojan or virus, is probably the best known TSR.   FLU_SHOT+
        will advise you if any program attempts to go TSR which you
        haven't already registered in your FLUSHOT.DAT file.

        Finally, FLU_SHOT+ will also now pop-up a little window in the
        middle of your screen when it gets triggered.  It also will more
        fully explain why it was triggered.  The pop-up window means that
        your screen won't get screwed up beyond recognition -- unless
        you're in graphics mode when it pops up.  Sorry, 'dems the
        breaks!

        This version, FLU_SHOT+, Version 1.5 has some other substantial
        improvements on the security side, has a couple of bug fixes here
        and there and is generally the same program - just a little more
        reliable, and a little more user friendly.  And, more closely
        attuned to what you, the user community, have asked me for.






                                        9








                                  About FLUSHOT

        Registering FLU_SHOT+
        =====================

        FLU_SHOT+ is not a free program.  You're encouraged to use it, to
        distribute it to your friends and co-workers.  If you end up not
        using it for some reason, let me know why and I'll see if I can
        do something about it in the next release.

        But, the right to use FLU_SHOT+ is contingent upon you paying for
        the right to use it.  I ask for ten dollars as a registration
        fee, plus four dollars to meet my costs for shipping, handling,
        and processing each order.  This entitles you to get informed
        when the next update is available, and to have someone available
        to help support you with any problem you might have with the
        program.  And it allows you to pay me, in part, for my labor in
        creating the entire FLU_SHOT series.  I don't expect to get my
        normal consulting rate or to get a return equal to that of other
        programs which I've developed and sell through more traditional
        channels.  That's not my intent, or I would have made FLU_SHOT+ a
        commercial program and you'd be paying lots more money for it.

        Some people are uncomfortable with the shareware concept, or
        believe that there ain't no such thing as Trojan or Virus
        programs, and that a person who profits from the distribution of
        a program such as FLU_SHOT must be in it for the money.  Although
        I sympathize with their feelings, I feel that a user of FLU_SHOT
        simply *must* pay for their usage of the program -- using it for
        free is paramount to stealing, and we know how wrong that is!

        I've created an alternative for these folks.  I'll call it
        "charityware" [first called that, to my knowledge, by Roedy
        Green].  You can also register FLU_SHOT+ by sending me a check
        for $10 made out to your favorite charity. And a check made out
        to me for $4 to handle my costs.  Be sure to include a stamped
        and addressed envelope.  I'll forward the monies onto them and
        register you fully.

        Of course, if you wish, you can send me a check for more than
        $14.  I'll cash it gladly (I'm no fool!).


        Site Licensing of FLU_SHOT+
        ===========================

        So, you run the computer department of a big corporation, you got
        a copy of FLU_SHOT+, decided it was wonderful and that it  did
        everything you wanted and sent in your ten bucks.  Then you
        distributed it to your 1000 users.

        Not what is intended by the shareware scheme.  *Each* site using
        FLU_SHOT+ should be registered.  That's ten bucks a site, me
        bucko!  Again, make the check out to charity if you're
        uncomfortable with the idea of a programmer actually deriving an


                                       10








        income from their work.

        However, if you've really got 1000 computers, you should give me
        a call.  As much as I'd like to get $10 for each site, that
        wouldn't be fair to you.  So, quantity discounts are available.

        Here's out quantity discount schedule.  Remember to add in the
        four dollar charge for each order.

                  Quantity            Price Each
               ==============       ===============
                1 -  49                $10
               50 - 249                $ 9
              250 - 499                $ 7
              500+                     $ 6
              10,000+                No Charge

        Site licensee's get a "gold" disk, and make their own copies at
        their site, working on the honor system.  Each site license does
        require a separate agreement, so be sure to give us a call to
        work out the details.




































                                       11








                                 Using FLU_SHOT+

        The FLUSHOT.DAT file
        ====================

        FLU_SHOT+ is table driven by the contents of the FLUSHOT.DAT
        file.  This file normally exists in the root directory of your C:
        drive (C:\FLUSHOT.DAT).

        A little later in this document you'll see how to disguise the
        data file name, making life tougher for the worms out there.  But
        for the purposes of this document, we'll assume that the file is
        called C:\FLUSHOT.DAT.

        The FLU_SHOT+ program will read this data file exactly once. It
        reads the data from the data file into memory and overwrites the
        name of the data file in so doing.  A little extra protection in
        hiding the name of the file.

        This data file contains a number of lines of text.  Each line of
        text is of the form:

        <Command>=<filename><options>

        Command can be any one of the following characters:

             P    -    Write Protect the file named
             R    -    Read Protect the file named
             E    -    Exclude the file named from matching P or R lines
             T    -    The named file is a legitimate TSR
             C    -    Perform checksum operations on the file named

        The  filename can be an ambiguous file if you wish for all
        commands except the 'T' and 'C' commands.  This means that:

             C:\level1\*.COM

        will specify all COM files on your C: drive in the level1
        directory (or its sub-directories). Specifying:

             C:\level1\*\*.EXE

        would specify all EXE files in subdirectories under the C:\level1
        directory, but would not include that directory itself.

        You can also use the '?' operator to specify ambiguous characters
        as in:

             ?:\usr\bin\?.COM

        would be used to specify files on any drive in the \usr\bin
        directory on that drive.  The files would have to be single
        letter filenames with the extension of 'COM'.

        Ambiguous file names are not allowed for the 'T' and 'C' options.


                                       12










                                 Using FLU_SHOT+

        Protecting files from Write Access
        ==================================

        Use the 'P=' option to protect files from write access.  To
        disallow writes to any of your COM, EXE, SYS, and BAT files,
        specify lines of the form:

             P=*.COM
             P=*.EXE
             P=*.SYS
             P=*.BAT

        which protects these files on any disk, in any directory.

        Protecting files from Read Access
        =================================

        Similarly, you can use the 'R' command to protect files from
        being read by a program (including the ability to 'TYPE' a
        file!).  To prevent read access to all of your BAT files, use a
        line such as:

             R=*.BAT

        Combinations of R and P lines are allowed, so the combination of
        the above lines would prevent read or write access to all batch
        files.

        Excluding files
        ===============

        Programmers in particular should find usage for the 'E' command. 
        This allows you to exclude matching filenames from other match
        operations.  Assume you're doing development work in the
        C:\develop directory.

        You could exclude FLU_SHOT+ from being triggered by including a
        line such as:

             E=C:\develop\*.*

        Of course, you might have development work on many disks under a
        directory of that name.  If you do, you might include a line
        which looks like:

             E=?:\develop\*.*
                  or
             E=*\develop*





                                       13









        Checksumming files
        ==================

        This line is a little more complicated than others and involves
        some setup work.  It's worth it though!

        A checksum is a method used to reduce a files validity into a
        single number.  Adding up the values of the bytes which make up
        the file would be a simple checksum method.  Doing more complex
        mathematics allows for more and more checking information to be
        included in a test.

        If you use a lie on the form:

             C=C:\COMMAND.COM[12345]

        then when FLU_SHOT+ first loads it will check the validity of the
        file against the number in the square brackets.  If the checksum
        calculated does not match the number presented, you'll be advised
        with a triggering of FLUSHOT, which presents the correct
        checksum.

        When you first set up your FLUSHOT.DAT file, use a dummy number
        such as '12345' for each of the files you wish to checksum. 
        Then, when you run FLUSHOT, you should copy down the "erroneous"
        checksum presented.  Then, edit the FLUSHOT.DAT file and replace
        the dummy number with the actual checksum value you had copied
        down. Voila! If even one byte in the is changed, you'll be
        advised the next time you run FLU_SHOT+.

        But wait! There's more! Not available in stores!

        Sorry.  I got carried away.

        Seriously, there is more.  When a "checksummed" file is loaded by
        MS-DOS, it will, by default, be checksummed again.  So, if you
        had a line such as:

             C=C:\usr\bin\WS.COM[12345]

        the venerable old WordStar program (still *my* editor of choice!)
        would be checksummed each time you went to edit a file.

        Of course, you might not want the overhead of that checksumming
        to take place each time you load a program.  Therefore, a few
        switches have been added.  The switches are place immediately
        after the ']' in the checksum line:

             C=C:\usr\bin\WS.COM[12345]<switch>

        These switches are:

             ,n   -    will only checksum the file only 'n' times. Only
                       one digit allowed.


                                       14









             -    -    Only checksum this file when FLU_SHOT+ first
                       loads.  ',1' and '-' are equivalent.

             +    -    Only checksum this file when it is loaded and
                       executed, not when FLU_SHOT+ first loads

        Therefore, if you wished to only check your WS.COM file when you
        first loaded the FLU_SHOT+ program, you'd specify a line as:

             C=C:\usr\bin\ws.com[12345],1
                  or
             C=C:\usr\bin\ws.com[12345]-

        If you wished to checksum your program called "MY_PROG.EXE" only
        when it was used, try:

             C=C:\path\MY_PROG.EXE+


        Registering a TSR program
        =========================

        Any unregistered TSR program which is run after FLU_SHOT+ will
        cause a trigger when they "go TSR".  You can register a program
        so no trigger goes off by specifying it in a line such as:

             T=C:\usr\bin\tsr_s\sk.com

        which will keep FLU_SHOT+ from complaining about sk.com.  Make
        sure to take a look at the '-T' option, specified in the next
        section.

        Restricted Access
        =================

        Normally, when access to a file causes FLU_SHOT+ to trigger, the
        user is given the option of hitting a 'Y' to allow the access, or
        a 'G' to allow the access until program exit or a key is hit. 
        However, in some cases, access to a file should *never* be
        allowed.  If you end a line in your FLUSHOT.DAT file with an '!',
        then the trigger will indicate that this is a restricted access
        file, and the user will be asked to press a key to continue.  In
        any case, trigger accesses resulting from a line with a '!' at
        the end will not be allowed to go forth.  For example, if you
        never want anyone to be able to read an AUTOEXEC.BAT file on any
        of your disks, have a line of the form:

                  R=*AUTOEXEC.BAT!

        in your FLUSHOT.DAT file.  That's pretty easy!  (Make sure,
        however, to take a look at the FSP command line arguments for the
        '--' switch.)




                                       15








        Protecting the FLUSHOT.DAT file
        ===============================

        Obviously, the weak link in the chain of the protection which
        FLU_SHOT+ offers you is the FLUSHOT.DAT file.

        You would think that you'd want to protect the FLUSHOT.DAT file
        from reads and writes as specified above.  However this, too,
        leaves a gaping security hole: memory could be searched for it,
        and it could be located that way.  A better alternative exists. 
        In the distribution package for FLUSHOT+ exists a program called
        FLU_POKE.COM.  This program allows you to specify the new name
        you wish to call the FLUSHOT.DAT file. Simply type:

             FLU_POKE <flushot_name>

        where <flushot_name> represents the full path filename of your
        copy of FLU_SHOT+.

        You'll be prompted for the name of the FLUSHOT.DAT file.  Enter
        the name you've selected (remember to specify the disk and
        directory as part of the name).  Voila!  Nothing could be easier.

        Here's an example, assuming that you've already named your
        FLUSHOT.DAT to FRED.TXT, and it resides in the C:\DOC directory. 
        Assume that FSP.COM is in the current directory and has been
        renamed to MYFILE.COM.  Here's the command line:

             FLU_POKE MYFILE.COM
             File opened ok...

             Enter the FLUSHOT.DAT filename (full pathname): FRED.TXT


        Protection Recommendations
        ==========================

        Here's a sample FLUSHOT.DAT file, basically the same one included
        in the archive.  Your actual checksums will differ, and you may
        want to modify what files and directories are protected.
        Obviously, your exact needs are different than mine, so consider
        this a generic FLUSHOT.DAT:

        P=*.bat
        P=*.sys
        P=*.exe
        P=*.com
        R=*AUTOEXEC.BAT
        R=*CONFIG.SYS
        E=?\dev\*
        C=C:\COMMAND.COM[12345]-
        C=C:\IBMBIO.COM[12345]-
        C=C:\IBMDOS.COM[12345]-




                                       16








        Allowing "dangerous" programs to run
        ====================================
        In some cases, though, you'll still want the ability to let
        "trusted" programs to run -- even if they are potentially
        dangerous.  A good example of this is the DOS FORMAT program: 
        here is a program specifically designed to overwrite the data on
        your disk in such a way that it would be difficult, at best, to
        recover.  Yet, the program is a necessary part of your day-to-day
        computer usage.

        Therefore, the 'X=' switch has been added in to allow a program
        such as FORMAT to run without interruption.  THIS IS A POTENTIAL
        SECURITY HOLE.  To prevent an 'X=' program from being corrupted,
        I suggest you also include any 'X=' program as both a 'C=' and a
        'P=' program as well: any writes to the file would cause FLU_SHOT
        to trigger, and you wouldn't be able to run a modified program
        without first giving FLU_SHOT permission.  Use 'X=' sparingly. 
        I'm rather uncomfortable with it myself.







































                                       17








                               Invoking FLU_SHOT+

        Running FLUSHOT+
        ================

        For extra protection, after you've run FLU_POKE, you should
        rename the FLU_SHOT+ program is something unique and meaningful
        to you, but not a worm.

        Assuming you didn't rename it, however, you could invoke the
        program simply by typing:

             FSP

        when at the prompt.  That's all there is to it.  When you're
        satisfied, you can add it to your AUTOEXEC.BAT file, after all of
        your trusted programs have run.

        But there are some options you should know about:

        Checksumming the in-memory table
        ================================
        Since the wily worm may well be able to thwart some of the
        efforts of FLU_SHOT+ by playing nasty games with the in-memory
        copy of the FLUSHOT.DAT file, FLU_SHOT+ will also check this
        table against a checksum it generates on a regular basis.  If the
        table gets corrupted, you'll be advised of it.  This table is
        checked with each call to DOS, so the table must be in good shape
        before any disk I/O is done.




























                                       18








        Intercepting Direct Disk Writes Through INT13
        =============================================

        The default operation of FLU_SHOT+ is to intercept and examine
        every call to the direct disk routines.  You can *disable* this
        by including the '-F' switch on your command line:

             FSP -F

        This is not recommended, but exists primarily for developers who
        can't use the constant triggering one of their programs may
        cause.


        What about INT26
        ================
        Similarly, the same exists for the direct writes which normally
        are only made by DOS through interrupt 26.  Again, I do not
        recommend you disable the checking, but if you desire to do so,
        use the '-D' switch.

        Turning off the header message
        ==============================
        If you've no desire to see the rather lengthy welcome message 
        which is displayed when you first use FLU_SHOT+, use the '-h'
        switch.

        Disabling Triggering on Open with Write Access
        ==============================================
        Files which are opened with write access allowed are often not
        ever written to.  For example, a COPY A.COM B.COM will open
        *both* files for write access, although DOS will not actually
        write to the A.COM file.  Programmer laziness is the most likely
        excuse, and I'm as guilty of it as anyone else.  However, this
        can cause some false alarms, which can alarm you!  If you specify
        the '-W' switch on your command line, you won't have this
        particular alert come up.

        Since the actual write operation to this file is also protected
        by FLU_SHOT+, there is no real danger with using the '-W' option
        -- except that a "protected" file could be created anew without
        you being triggered.  That's not too big a deal.  Future versions
        of FLU_SHOT+ will most probably have the '-W' option as the
        default operation.


        Changing the Trigger Window Attributes
        ======================================
        Certain displays, particularly monochrome displays which try to
        emulate color displays, have a problem with the default selection
        of attributed in the trigger window of FLU_SHOT+.  If you use the
        '-Axcx:yy' switch, you can modify these attributes.

        The xx:yy represent the hex values (as selected from the table
        below) for the interior and the perimeter of the trigger window. 


                                       19








        The 'xx' represents the interior attribute, the 'yy', the
        perimeter.  If you use the '-A' switch, you *must* select both of
        these values - failure to do so may give a rather strange
        display.

        What follows is a table of color and characteristics associated
        with the attribute byte.  A byte has eight bits. Counting from
        the leftmost bit, the first bit of the attribute byte, if set,
        will cause the character to blink, regardless of other settings. 
        The next three bits represent the background color for a given
        character position.  The next bit indicates whether a character
        should have high intensity turned on.  Finally, the last three
        bits represent the color of the character itself.  To create the
        color of your choice, simply combine the bits, then calculate
        what they are in hexadecimal.  If you're not sure of how to
        create a hexadecimal representation of a binary number, have no
        fear:  that information follows, too.

                                    Bkgrnd    Frgrnd
                                 B   CLR   I   CLR
                                 [] [][][] [] [][][]
                    Brightness----^  | | |  |  | | |
                    Background-------+-+-+  |  | | |
                    Intensity---------------+  | | |
                    Foreground-----------------+-+-+

                                              Value in hex
        Bit Pattern    Value      Color       if B or I set
        ====================================================
          0  0  0      0         Black            8
          0  0  1      1         Blue             9
          0  1  0      2         Green            a
          0  1  1      3         Cyan             b
          1  0  0      4         Red              c
          1  0  1      5         Magenta          d
          1  1  0      6         Yellow           e
          1  1  1      7         White            f

        For example, to create an attribute byte that is high intensity,
        blinking yellow characters on a green background, the attribute
        byte would be:

                                    Bkgrnd    Frgrnd
                                 B   CLR   I   CLR
                                 1  0 1 0  1  1 1 0
                                \--------/ \-------/
                                    |          |
                                    A          E
                    Attribute char:     AE

        IMPORTANT: If the value is less than 10 (hex), you *must* include
        a leading zero or strange things will happen to the selected
        value.




                                       20









        Allowing Trusted TSR's to Work
        ==============================
        Normally, you'd load all of your trusted TSR's before FLUSHOT+ is
        loaded from within your AUTOEXEC.BAT file.  However, you might
        want to use SideKick once in a while, removing it from memory as
        you desire.  This could cause some problems, since SideKick, and
        programs like it, take over certain interrupts, and FLU_SHOT+
        could get confused about whether this is a valid call or a call
        that shouldn't be allowed.  Normally, FLU_SHOT+ will trigger on
        these calls, which is safer, but can be annoying.  If you use the
        special '-T' switch upon program invocation, then calls which
        trusted TSR's (those specified with the 'T=' command in your
        FLUSHOT.DAT file) make will be allowed.  Understand, please, that
        this basically means that calls made by a Trojan while a trusted
        TSR is loaded may not be caught.  Please, use this switch with
        caution!

        Disabling FLU_SHOT+
        ===================
        There may be times when you're about to do some work which you
        know will trigger FLU_SHOT+.  And you might not want to be
        bothered with all of the triggering, the pop-up windows and your
        need to respond to each trigger.  If you look in the upper right
        hand corner of your screen, you'll see a '+' sign.  This
        indicates that FLU_SHOT+ is monitoring and attempting to protect
        your system.  Depress the ALT key three times.  Notice that the
        '+' sign' turned into a '-'?  Well, FLU_SHOT+ is now disabled,
        and will not trigger on any event.  If you depress the ALT key
        three more times, you'll see the '-' turn back into a '+' -- each
        time you depress the ALT key three times, FLU_SHOT+ will toggle
        between being enabled and disabled.

        Disabling the Disabling of FLU_SHOT+
        ====================================
        Yes, I know about the poor grammar used in the heading, but I
        couldn't think of a better way of expressing it.

        You can cause FLU_SHOT+ to ignore the "strike ALT three times"
        function discussed above.  If you'd rather that the people using
        the machine FLU_SHOT is working on *not* be able to disable it,
        then enter the '--' switch on the command line, as in:

              FSP --

        this is important when used in combination with the '!'
        restricted file access option you may have opted to use in your
        FLUSHOT.DAT file.









                                       21








        Disabling FLU_SHOT+ Toggle Display
        ==================================
        Alas, there are graphics applications which will be screwed up be
        the '-' or '+' in the upper right hand corner of your display.
        Therefore, if you depress the CTRL key three times, you'll be
        able to toggle the display capability of FLU_SHOT+.  The default
        configuration of FLU_SHOT+ is to "come up" with display turned
        on.  You can reverse this capability if you include the '-G' (for
        graphics) switch on your command line when you run FLU_SHOT+.

        When you toggle this function, the '-' or the '+' won't appear or
        disappear immediately.  Simply that the repainting of them will
        no longer take place.

        Defining Your Own "Special Keys"
        ================================
        If you would like to, you can define your own "special keys" (as
        in the default Alt and Ctrl keys in a similar way as you define
        your attributes above.  Use the '-Kxx:yy' option, which takes the
        hexadecimal scan code value for the replacement Alt key as the
        first argument (the 'xx') and the hexadecimal scan code value for
        the replacement Ctrl key value.  If you're not sure of what your
        scan codes are, you should look them up in your BIOS tech ref
        manual -- or there are a multitude of programs which will print
        out the scan code for a given key. Most of these programs are
        available on BBS's throughout the world, including the Software
        Concepts Design, RamNet BBS at (212)-89-6438.

        Due to extreme programmer fatigue, the "Welcome" message you see
        when you first run FLU_SHOT+ with the '-K' option will not change
        to reflect your selection.  Maybe in the next version.  And, of
        course, it depends upon how much you, the end-user want such an
        option.

        IMPORTANT: If the value is less than 10 (hex), you *must* include
        a leading zero or strange things will happen to the selected
        value.

        Forcing FLU_SHOT+ to only use the BIOS
        ======================================

        Certain machines are not totally compatible with the IBM BIOS,
        which is the BIOS for which FLU_SHOT+ was written.  Because
        FLU_SHOT has to be able to deal with the hardware in a pretty
        direct manner in order to "pop-up" a screen, these machines were
        not able to use FLU_SHOT.  If you specify the '-B' switch in your
        command line when you first run FLU_SHOT+, then only the BIOS
        will be used for screen output.  This is *drastically* slower
        than direct screen memory writes (the method used unless you
        specify to use the BIOS), but at least it works.  However, the
        "hit ALT and/or CTRL three times" options may not work in these
        machines - only your experimentation will tell.





                                       22








        Putting FLU_SHOT+ to Sleep When Its First Run
        ==============================================
        One of the idiosyncrasies of DOS is how a batch file is
        processed.  Basically, DOS opens the batch file, reads the next
        command, closes the batch file, executes the command, and then
        starts over again until the batch file is exhausted of commands.

        This would, normally, not be a problem, but can become when you
        opt to place the FLU_SHOT command line in your AUTOEXEC.BAT file
        *and* you've opted to Read Protect (with the 'R=' option) the
        AUTOEXEC file itself:  you'll be advised that some program is
        reading this protected file.  Not a big deal, really, but
        certainly a hassle when you fist boot up your system.  Therefore,
        protections within FLU_SHOT are not turned on a certain amount of
        time.  The default is set to ten seconds, or until you enter a
        key.  You can modify the default "sleep" time by entering a '-Sn'
        option on the command line, where 'n' represents the number of
        eighteenths of a second (1/18) you wish to have FLU_SHOT+ sleep
        before becoming active.  Since you will most likely have
        FLU_SHOT+ as one of the final commands in your AUTOEXEC.BAT, you
        probably won't have to modify this parameter, but the capability
        exists, nonetheless.



































                                       23








        Interpreting a FLU_SHOT+ Trigger
        ================================

        So, you've run FLU_SHOT+, and you're at your C> prompt. Great! 
        Now stick a blank disk which you don't care about into your A:
        drive and try to format it.

        Surprise!  FLU_SHOT+ caught the attempt!  You have three choices
        now:  typing 'Y' allows the operation to continue, but the next
        one will be caught as well.  Typing a 'G' (for Go!) allows the
        operation to continue, disabling FLU_SHOT+ until an exit from the
        program is made. When FLU_SHOT+ is in the 'G' state, a 'G' will
        appear in the upper right hand corner of your screen.

        Any other key will cause a failure of the operation to occur.

        When you've got FLU_SHOT+ running and you get signaled that there
        is a problem, you should think about what might have caused the
        problem.  Some programs, like FORMAT, or the Norton Utilities or
        PC-Tools, or DREP have very good reasons for doing direct reads
        and writes to your hard disk.  However, a public domain checkbook
        accounting program doesn't.  You'll have to be the judge of what
        are legitimate operations and which are questionable.

        There is no reason to write to IBMBIO or IBMDOS, right?

        Wrong!

        When you format a disk with the '/S' option, those files are
        created on the target diskette.  The act of creating, opening up
        and writing those files will trigger FLU_SHOT+ as part of its
        expected operation. There are many other legitimate operations
        which may cause FLU_SHOT+ to trigger.

        So will copying a COM or EXE file if you have those protected
        with a 'P=' command.  FLU_SHOT+ is not particularly intelligent
        about what is allowed and what isn't.  That's where you, the
        pilot, get to decide.

        Here's a fuller listing of the messages which you might see when
        you're using FLU_SHOT+:


        Checking ===><filename>

        This message is displayed as FLU_SHOT+ checks the checksum on all
        of the "C=" files when you first invoke FLU_SHOT+.  The files
        must be read in from disk, their checksum calculated and then
        compared against the value you claim the checksum should equal.








                                       24








        If the checksum does *not* equal what you claim it should (which
        means that the file may have been written to and might therefore
        be suspect), a window will pop up in the middle of your screen:

        +===============================================================+
        |  Bad Checksum on <filename>                                   |
        |  Actual Checksum is: <checksum>                               |
        |Press "Y" to allow, "G" to go till exit, any other key to exit.|
        +===============================================================+

        This message simultaneously advises you there is a problem with
        the checksums not matching, shows you what the checksum should be
        and then awaits your response.

        Except for the initial run of FLU_SHOT+, if you type a 'Y' or a
        'G', then the program will load and execute.  Typing any other
        key will cause the program to abort and for you to be returned to
        the C> prompt.  When FLU_SHOT+ is in the 'G' state, a 'G' will
        appear in the upper right hand corner of your screen.

        If this is the initial run of FLU_SHOT+, however, you'll be
        advised of the program's actual checksum, but FLU_SHOT+ will
        continue to run, checking all remaining "C=" files in the
        FLUSHOT.DAT file.



        If you're running a program and you see a screen like:

        +===============================================================+
        |  ? WARNING! TSR Request from an unregistered program!         |
        |Number of paragraphs of memory requested (in decimal) are:<cnt>|  
        |                   (Press any key to continue)                 |
        +===============================================================+

        you're being advised that a program is about to go TSR.  If this
        is a program you trust (such as SideKick, of KBHIT, or a host of
        other TSR programs you've grown to know and love), then you
        should considering installing a "T=" line in the FLUSHOT.DAT file
        so that future runs of this program will not trigger FLU_SHOT+.

        However, if you get this message when running a program you don't
        think has any need to go TSR (such as the proverbial checkbook
        balancing program), you should be a little suspicious.  Having a
        TSR program is not, in of and of itself, something to be
        suspicious of.   But having one you don't expect --- well, that's
        a different story.

        Most TSR's "hook into" an interrupt vector before they go TSR. 
        These hooks might intercept and process key strokes ("hotkeys"),
        or they might hook and intercept direct disk writes themselves. 
        In any event, FLU_SHOT+ (in this version!) doesn't have the
        smarts to do more than advise you of the TSR'ing of the program. 
        If you're truly suspicious, reboot your machine immediately!



                                       25








        If a program attempts to write directly to the interrupts which
        are reserved for disk writes, FLU_SHOT+ will also be triggered
        and you'll see something like:

        +===============================================================+
        |====>Direct Disk Write attempt by program other than DOS! <====|
        |                   (From Interrupt <xx>)                       |
        |Press "Y" to allow, "G" to go till exit, any other key to fail.|
        +===============================================================+

        where the <xx> represents either a 13 (indicating a direct BIOS
        write to the disk) or a 26 (indicating a direct DOS write). 
        Again, pressing a 'Y' or a 'G' allows the operation to continue,
        pressing any other key will cause the operation to return a
        failed status to DOS, and the operation will not take place. When
        FLU_SHOT+ is in the 'G' state, a 'G' will appear in the upper
        right hand corner of your screen.

        If an attempt is made to format your disk, which may be a
        legitimate operation made by the DOS FORMAT program, you'll see a
        message such as:

        +===============================================================+
        |          ====>Disk being formatted! Are You Sure?<====        |
        |                                                               |
        |Press "Y" to allow, "G" to go till exit, any other key to fail.|
        +===============================================================+

        which follows similarly to the direct disk write operations. You
        should question whether the format operation is appropriate at
        the time and take whatever action you think is best.

        If one of your protected files is about to be written to, you'll
        see a message like:

        +===============================================================+
        |Write access being attempted on:                               |
        | <filename>                                                    |
        |Press "Y" to allow, "G" to go till exit, any other key to fail.|
        +===============================================================+

        where <filename> represents the file you're trying to protect
        from these write operations.  Your red flag should fly, and you
        should question why the program currently running should cause
        such an operation.












                                       26








        You may also see the same type of message when one of your "Read-
        Protected" files is being accessed:

        +===============================================================+
        |Read Access being attempted on:                                |
        | <filename>                                                    |
        |Press "Y" to allow, "G" to go till exit, any other key to fail.|
        +===============================================================+

        Again, the same red flag should fly, but it doesn't mean that
        you're infected with some nasty virus program!  It could be
        something harmless or intended.  You'll have to be the judge.

        +===============================================================+
        |Open File with Write access being attempted on:                |
        | <filename>                                                    |
        |Press "Y" to allow, "G" to go till exit, any other key to fail.|
        +===============================================================+

        If you see the above message:  Don't Panic!  When a program opens
        a file, it may open the file for different types of access.  One
        access method prohibits writing to the file.  Another allows you
        to write to the file.  However, lazy programmers (myself included
        in this category from time to time) will often open a file for
        read *and* write access, even though they have no intention of
        ever doing a write into the file.  FLU_SHOT+ isn't smart enough
        to be able to figure out what a program *might* do in the future,
        so it will alert you to an attempt to open the indicated
        protected file with write access allowed.  Again, you'll have to
        consider whether the program opening the file is a "trusted"
        program or not and you'll have to then decide what action to
        take.

        +===============================================================+
        |Handle Write Access being attempted on:                        |
        | <filename>                                                    |
        |Press "Y" to allow, "G" to go till exit, any other key to fail.|
        +===============================================================+

        If you see this message, it means that some program is trying to
        write to a protected file through an access method known as
        "handle access".  This should normally never happen, with the
        caveats raised above in the "Open With Write Access" section.














                                       27








        There are three separate messages you'll see if a program
        attempts to rename a protected file (you'll only see one of these
        messages at a time, though):


        +===============================================================+
        |FCB Rename being attempted on source file:                     |
        |FCB Rename being attempted on target file:                     |
        |Handle Rename being attempted on:                              |
        | <filename>                                                    |
        |Press "Y" to allow, "G" to go till exit, any other key to fail.|
        +===============================================================+

        This indicates what type of operation is attempting to rename a
        protected file.  FCB's are a relic of the older CP/M days, and
        "handles" are a newer concept, a little more modern.  In any
        event, this tells you that a file is being renamed.  It is
        possible that a trojan or virus writer will attempt to rename an
        existing protected file to some other name, then rename a
        trojaned or virused program in its stead.  FLU_SHOT will alert
        you to this action:  again, though, you'll have to decide what to
        do about it.

        +===============================================================+
        |Delete being attempted on:                                     |
        | <filename>                                                    |
        |Press "Y" to allow, "G" to go till exit, any other key to fail.|
        +===============================================================+

        Pretty much self-evident as to what's happening here, there are
        very few reasons why one of the files you've opted to protect
        should be deleted.

























                                       28








                          How Good is FLUSHOT+, Really?

        FLU_SHOT+ is a pretty handy piece of code.  But, it can't
        absolutely protect you from a worm.  No software can do that. 
        There are ways around FLU_SHOT+.  I'm of two minds about
        discussing them, since the worms out there are reading it this,
        too.  So I'll only discuss them in passing.  And I'll tell you
        what I use here to protect myself from worms.  First, though, a
        little story to tell you what it's like here, and how I protect
        myself from getting wormed.

        The RamNet Bulletin Board System site I run is open access. No
        need to register, or to leave your phone number or address,
        although a note to that effect is always appreciated.  As
        mentioned above, I dare the worm to try to affect the disk of
        somebody who can fight back.  A couple of of worms have tried and
        I have a nice collection of Trojans and viruses.  Obviously, I
        run FLU_SHOT+ on my board, along with checking incoming files
        with CHK4BOMB.  My procedure for testing out newly uploaded code
        involves me doing a backup, installing all sorts of software to
        monitor what is going on, and doing a checksum on all files on
        the disk.  I then try out all of the code I get, primarily to
        determine if the code is of high enough quality to be posted. 
        After testing out all of the weeks uploads, I run the checksum
        program again to determine of any of my files might have been
        modified by a worm's virus program.

        Recently, what looked like a decent little directory lister was
        posted to the board.  For some reason I've yet to fathom,
        directory aid programs seem to be the ones which have the highest
        percentage of Trojans attached to them.

        This directory aid program listed my directories in a wonderful
        tree structure, using different colors for different types of
        files.  Nice program.  When it exited, however, it went out and
        looked for a directory with the word "FLU" in it.  Once it found
        a directory with a match in it, it proceeded to try to erase all
        of the files in that directory. An assault! No big deal.  That's
        what backups are for.

        But it brings up an interesting point:  I was attacked by a
        clever worm, and it erased a bunch of files which were pretty
        valuable.  All of the protection I had would have been for naught
        if I didn't use the first line of defense from these worms:  full
        and adequate backup.

        I've spent three years of my life developing one particular
        software package.  Imagine what would have happened if that had
        been erased by a worm!  Fortunately, I make backups at least once
        a day, and usually more frequently than that.  You should, too.

        Now, I quarantine that machine as well.  I spent a couple of
        dollars and bought a bunch of bright red floppy disks.  The basic
        rule around here is that Red Disks are the only disks that go
        into the BBS machine, and the Red Disks go into no other machine. 


                                       29








        You see, I *know* that there is some worm out there who is gonna
        find some way to infect my system.  No matter what software
        protection I use, there *is* a way around it.

        You needn't be concerned though -- you're making backups on a
        regular basis, right?  And, you aren't asking for trouble.  I am,
        I expect to find it, and it is sort of amusing to see what the
        worms out there are wasting their efforts on.

        At this point, Trojans and Viruses are becoming a hobby with me:
        watching what the worms try to do, figuring out a way to defend
        against it, and then updating the FLU_SHOT series.

        However, there is a possibility that the FLU_SHOT series (as well
        as other protection programs which are just as valuable) are
        causing an escalation of the terms of this war.  The worms out
        there are sick individuals.  They must enjoy causing the damage
        they do.  But they haven't the guts to stand up and actually do
        something in person.  They prefer to hide behind a mist of
        anonymity.

        But you have the ultimate defense!  No, not the FLU_SHOT+
        program.

        FULL AND ADEQUATE BACKUPS!

        There are a variety of very good backup programs which can save
        you more work than you can imagine.  I use the FASTBACK+ program,
        which is a great little program.  I backup 30Megs once in a
        while, and do an incremental backup on a very frequent basis. 
        There are a variety of very good commercial, public domain, and
        shareware backup programs out there.  Use them!  Because, no
        matter what software protection you use, somebody will find a way
        around it once day.  But they can't find a way around your
        backups.  And, if you (and everyone else) do regular backups,
        you'll remove the only joy in life these worms have.  They'll
        kill themselves, hopefully, and an entire subspecies will be
        wiped out -- and you'll be partially responsible!

        My advance thanks for helping to exterminate these little
        slimebuckets.  But that brings me to something else.
















                                       30








                                 Reward Offered

        Somebody out there knows who the worms are.  Even they must have
        someone who is a friend. True, I can't think of any reason
        someone would befriend a worm.  But somebody who doesn't know
        better has.

        Well, I'm offering a reward for the capture and conviction of
        these worms.

        Enough already with software protection schemes, hardware
        protection schemes, or any protection at all.  It shouldn't be
        required, dammit!

        Here's the deal:

        In this archive is a form called REWARD.FRM.  If you're a
        software or hardware manufacturer, or you have some software or
        hardware you don't need, consider filling out that form, and
        donating it to a worthy cause.  I don't know what the legal and
        tax ramifications of that donation would be.  I'm not a lawyer
        and we can cross that bridge when we get to it.

        Anyway, if you know one of these worms, turn them in!  Call me
        up, send me a letter, a telegram, or leave a message for me on my
        BBS.  Indicate who you *know* is worming about.  I'll keep your
        name confidential.

        It is surprisingly easy to get the authorities in on this --
        they're as concerned about what is happening to our community as
        we are.  I'll presume that they'll end up putting a data tap on
        the phone line of the accused worm.  Then, when he next uploads a
        Trojan or a virus to a BBS, he'll get nailed.  The authorities
        are pretty good about this stuff: they'll not tap a phone or take
        any action whatsoever without adequate proof.  Will your dropping
        a dime on this worm be adequate proof?  I don't know.   Again, a
        bridge to cross when we approach it.

        However, assuming that this slimeball gets nailed, you'll get all
        of the software and hardware which other people have donated. And
        the satisfaction of knowing that you've done a Good Thing, that
        you've helped an industry and community continue to grow.  This
        *is* your community, and the vast majority of people in it are
        good people who shouldn't have to fear from your friend.  Your
        friend is not really a friend: he uses you to justify his own
        existence.  When someone uses you like that, they're not a
        friend, they're a leach.  And you've probably got better things
        to do then let somebody use you like that.

        Most importantly, the worm out there won't know if one of his
        friends has already turned him in.  So he won't know if his phone
        is tapped.  If *I* were a worm, and considering what kind of
        friends I would have, I'd be sure that somebody dropped a dime on
        me.  And therefore an intelligent worm (perhaps I'm giving the
        worm too much credit?) must presume that their line is tapped and


                                       31








        that they're gonna go to jail if they continue what they're
        doing.

        So just stop, you miserable little lowlife, huh?  You're going to
        be arrested. You're going to have to put up with indignities
        which even you don't deserve!  Your equipment will be
        confiscated.  You'll never get a job in the industry.  You're
        going to go to jail. 

        All because one of your friend's actually has a conscience and
        knows what is right and what is wrong.  And what you're doing is
        wrong.

        So, let me get back to the kind of programming I enjoy --
        productive programming.  And turn your programming to useful,
        interesting, and productive programming.  You have the talent to
        do something useful and good with your life.  What you're doing
        is hurting the industry and hurting the community which would
        welcome someone with your talents with open arms.

        And the satisfaction of helping far surpasses the satisfaction
        you must get from hurting innocent people.

        So just stop.


        Sincerely, Ross M. Greenberg






























                                       32





```
{% endraw %}

## HARDWARE.TXT

{% raw %}
```

FLU_SHOT+ can not, by itself, absolutely protect your disks from the
damage a determined worm attempts.  It does as much as I can think
of, but that may not be sufficient for the sites which really can not
afford to have their data damaged.

We're in the process of designing and producing a hardware board which
will interface with a future release of FLU_SHOT+.  This will be a
commercial product.  We don't expect it to cost an arm and a leg, but
we haven't got the costs nailed down as of yet.  When we do, we'll
announce the product, its limitations and advantages and, of course,
its price.

If you'd like more information on our future hardware board, please
check off the appropriate box on the registartion form and we'll keep
you advised.

Ross M. Greenberg
```
{% endraw %}

## HDSENTRY.DOC

{% raw %}
```
HDSENTRY.ARC contains:
 
.     HDSENTRY.ASM
.     HDSENTRY.EXE
.     HDSENTRY.COM

HDSENTRY, whether you run the .EXE or the smaller .COM file, is an interrupt
handler that intercepts service requests to the hard disk.  If the service
call is not destructive in any way, the call is passed on to DOS, and is
executed in normal fashion.  Calls to floppies are also merely passed on.
However, if a call is made to the hard disk that is destructive (write or 
format), the handler prevents it from occuring.  To alert you that something
is amiss, the handler will notify you with a beep in the speaker and a sign:
<<< ALERT >>> Destructive disk call prevented!
 
HDSENTRY is intended for use while you are checking out newly downloaded
programs from a bulletin board and you suspect those programs to be TROJAN
HORSEs, i.e., a program that purports to be something useful but that in
fact intends to scramble your hard disk for you (this could be done by keeping
you amused with colorful graphics and overwriting your File Allocation
Table, or reformatting your hard disk to the tune of Beethoven's Fifth, 
although I doubt anyone low enough to try such things have any breeding).
 
A good strategy is to NEVER download from a BBS to your hard disk, always
to a floppy.  However, the TROJAN may think of that and make calls to the
hard disk anyway.  HDSENTRY will put a stop to that!  If you have HDSENTRY
installed and YOU try to erase something on the hard disk, YOU will be
prevented (the filename will disappear as though you were successful, but
when you reboot, you'll find the file is still there.  This is part of the
strategy just in case the TROJAN tries to see if it successfully erased
a file.)  When you're finished checking your downloads, reboot your system
without HDSENTRY.
 
If you have any problems, notify Andrew M Fried (address is in the .ASM
file), NOT me!


```
{% endraw %}

## LOCK.DOC

{% raw %}
```
LOCK.COM - Run this to write- and format-protect your hard disk.  Useful
           when letting someone else use your PC or when trying out
           new BBS software.  Each time it is run it
           toggles the protection off or on - no need to reboot to get
           rid of it.  The toggle ON/OFF feature will not work if, after
           running LOCK, you run another RESIDENT program that 
           re-vectors INT 13.  In other words, run LOCK after running
           other resident programs, such as Sidekick.
           If the DOS FORMAT command is run when this is on, it will
           appear to be formatting your hard disk, but what it is
           actually doing is VERIFYing each sector, which does not
           harm the disk.  Your data is actually lost during a format
           when DOS writes a new Directory and FAT - LOCK will prevent
           that.  Actually, if LOCK is not installed and you accidentally
           start formatting your hard disk, you can type Ctrl-Break
           to stop the formatting.  The Ctrl-Break will not be
           acknowledged right away, but that's ok - it will still break
           you out of format before any damage is done.  
10/21/85
```
{% endraw %}

## RAMNET.TXT

{% raw %}
```
This  is  a brief blurb about the main product  Software  Concept  Design
derives  income  from.  This is a blatant commercial announcement and  we
have no excuses for it! We have kept it short, though, with the full text
available on the RamNet BBS at (212)-889-6438.  Or,  we can send you more
information  if you check off the box on the registration form.  On  with
the show!


What is RamNet?
===============

RamNet is a background, memory resident program which enables you to:

 *  Run your own Bulletin Board System -- in the background!
 *  Have  Electronic Mail (E-Mail) across the nation or across the  globe
    today....with no hardware other than your PC and modem!
 *  Do  file  transfers  (both  upload  and  download)  totally  in   the 
    background,  so you can continue your normal processing  tasks in the
    foreground.
 *  Run  SCRIPT files that allow you to upload and download to any  other
    computer system.
 *  Utilize  RamNet  as a "normal" communications package  via  a   user-
    selectable  Hot-Key.  Start  transfers in the foreground and   switch
    them  to  the  background -- only a  keystroke  away!  The   transfer
    continues while you work on something else.
 *  Incoming E-Mail may be immediately printed if you desire.   You'll be
    notified, in any case, when mail has arrived.
 *  RamNet uses the XMODEM protocol for error free file   transfer.  Both
    Checksum  (with  about 99% error detection) and  CRC (with  at  least
    99.9% error detection) have been  implemented.
 *  UUCP,  the  protocol  of choice between UNIX sites is now   available
    between RamNet sites as well. Your RamNet site  will appear as a UUCP
    allowing file transfers to take place  between UNIX systems and  your
    PC in "native" mode.  You can  send and receive UNIX mail to and from
    your PC -- in the  between UNIX systems and your PC in "native" mode.
    You  can   send and receive UNIX mail to and from your PC  -- in  the 
    background! A free update to handle UNIX News is in the works, too!
 *  Now  your PC can act as a Telex machine,  too!  Your incoming   telex
    messages  are  stored and/or printed without requiring an   expensive
    dedicated machine.
 *  Use RamNet as a Source Librarian!  You can specify a given   download
    directory  as a "locked directory".  Files which are  downloaded  are
    "locked" from future downloads until  released.
 *  Wildcard  Transfers via a special Batch file allow you to   customize
    which files you wish to transfer in one shot.
 *  The following Baudrates are supported:  110,  300,  600, 1200,  2400,
    4800, 9600, 19200, 38400.
 *  Easily works with any modem, intelligent switch, or direct,  hardwire
    connection.

With  RamNet you won't have to schedule your time with the person at  the
other  end:  if they're running RamNet,  they'll just continue with their
work as you continue with yours.

RamNet retails for only $149,  and we offer a full money back  guarantee. 
No questions asked.  You can't lose!

We  can  be  reached via MCI and BIX as 'greenber',  on  the  RamNet  BBS
specified above,  on CIS as [72241,36], or as bellcore!ditka!ramnet!root. 
```
{% endraw %}

## REGISTER.TXT

{% raw %}
```
-------------------------------------------------------------------------------

                FLU_SHOT+ (V1.5) Registration

Please fill out this form, then mail it along with a check for
$14 ($10 Registration, $4 Shipping/Handling/Processing) (or
more!) to:

                        Ross M. Greenberg
                        Software Concepts Design
                        594 Third Avenue
                        New York, New York 10016


Thanks for your support!

Name:_________________________________________________________

Title:________________________________________________________

Company:______________________________________________________

Address:______________________________________________________

        ______________________________________________________

City:   _____________________     State: _________  Zip:______

Telephone:__________________________________

Comments and Suggestions:____________________________________________________

         ____________________________________________________________________

         ____________________________________________________________________

         ____________________________________________________________________

         ____________________________________________________________________


Where did you get FLUSHOT+ (V1.5) from? (check one, fill in the blank):

        [__]  User Group  (which one:________________________________________)

        [__]  BBS  (Name:_______________________)(Tel #:_____________________)

        [__]  Other (Such as:________________________________________________)


Please send me more information on:

        [__]  RamNet, the background communications program

        [__]  The Programmer's Co_operative

-------------------------------------------------------------------------------

```
{% endraw %}

## THE_COOP.TXT

{% raw %}
```



                                                      FOR IMMEDIATE RELEASE
                               Contacts: Ross M. Greenberg,  (212)-889-6431
                                         Marc Adler,         (201)-792-3954
                                         Greg Comeau,        (718)-849-2355


                  THE PROGRAMMER'S CO_OPERATIVE:                                
                By Programmers and For Programmers

 April  10,  1988 --- The Programmer's Co_operative,  dedicated to providing
 software  authors and developers with the unique services they  require  at
 the lowest prices it can arrange, is opening its doors to new members.

 Founders Marc Adler,  Greg Comeau, and Ross M. Greenberg are three software
 authors  who decided it was time to act to resolve problems they discovered
 all software authors faced.

 "Independent  software developers,  the one or two  person  operation,  are
 overwhelmed  by the costs of providing highly specialized services as  they
 need them.",  said President Ross M.  Greenberg.  "We share costs,  provide
 marketing  and  sales services,  bring volume discounts on advertising  and
 materials, and provide other services our members need."

 Few  software  authors  have expertise in the diverse  fields  required  to
 market  and  support a successful product,  according  to  co-founder  Marc
 Adler.  This  makes  it  difficult and expensive for a new  product  to  be
 introduced or even to appear on the market.

 "Just  producing  a single ad and placing it in a national publication  can
 cost individual developers more time, effort and money then they can afford
 to  spend.  We  offer each software author the benefit of  working  with  a
 larger  organization,  of  having  some  clout.",  Greg  Comeau  of  Comeau
 Computing pointed out.

 Members of The Programmer's Co_operative pay a $250 one-time initiation fee
 and  a small quarterly membership fee.   All Co_op members are entitled  to
 use  any Co_op services at 10% above Co_op cost.  Non-members may use Co_op
 services, as available, at 15-25% above Co_op cost.

 Among  the  services  the Co_op offers or plans to offer  to  its  members:
 volume  advertising  discounts  on  single  or  multiple  inserts,   volume
 discounts  on production and distribution materials,  and distribution  and
 fufillment services. The Co_op will also offer catalog sales, marketing and
 PR services,  documentation preparation and printing,  legal services,  and
 postal services such as mail forwarding and bulk rates.

 The  Co_op is now retaining a telemarketing organization to handle sales of
 products produced by Co_op members.  According to Greenberg this will allow
 the  developers to concentrate on the thing they do  best:  create  quality
 software.

 "For  the first time,  even the independent developer can have a chance  to
 succeed as we all band together. By programmers and for programmers. That's
 what the Co_op is all about, and why it's working.", Greenberg stated.

 For more information regarding The Programmer's Co_operative,  contact them
 at 594 Third Avenue, New York, New York, 10016
```
{% endraw %}

## UPDATES.TXT

{% raw %}
```
Version 1.1 of FLU_SHOT+ has a few enhancements:

1.      If you use the '-B' switch when you first run FLU_SHOT+,
        the machines BIOS will be used instead of direct screen
        writes.  Useful for machines which are less than IBM-PC
        compatible.  Or those people still running CGA's who don't
        like snow.  It's a little slow.  For the CGA users: you
        ever think of how nice it would be to see an unblurred
        screen?  EGA's aren;t that expensive anymore....

2.      I neglected to remove some comments, and there was a hole
        in FLU_SHOT+ V1.0 that a worm could have exploited.  The
        hole has been patched securely....

3.      An additional option in the FLUSHOT.DAT file:
                X=<ambigious_filename>
        allows a matching program to "turn off" the triggering of
        FLU_SHOT+ for the entire duration of its run.  This could
        leave a security hole if you're not careful....so be careful!
        Do not use an ambigious directory: running a trojan from there
        would not trigger FLU_SHOT+.  I use it for programs like
        FORMAT, Norton Utilities and that kind of stuff.  I'm very
        careful when using it, though.  And you should be, too!

4.      The in-memory protection table is now checksummed so that
        worms can't change the files you're attempting to protect.
--
Version 1.2 of FLU_SHOT+ has a few enhancements:

1.      A new option, '-I<num>' has been added.  This allows you to
        determine the frequency, in 1/18 seconds, of how often the CMOS
        Check (if enabled) and the Protection Table Check are going to
        run.  The lower the number, the higher your protection, but
        the more impact it will have on system operations:  they'll
        be a little slower.  The default is set to one second.

2.      Some complaints from those having FSP in their AUTOEXEC.BAT and
        having a line of the the form R=\AUTOEXEC.BAT.  FSP was protecting
        the AUTOEXEC.BAT file (an intended option), but the boot sequence
        was causing people to have to hit a 'G' to continue with their
        boot.  I've installed a '-S<num>', where <num> represents how many
        1/18 seconds to sleep before activating the R= option.
        The default is set to 10 seconds.  It will also immediately
        expire on the first key hit.

3.      Because CMOS and Prot Table checks are done via the timer tick
        in Version 1.2, there is no need for the counter to be associated
        with the CMOS flag any longer.  As such, '-C' is the full option
        to turn on CMOS checking.
--
Version 1.4 of FLU_SHOT+ has a few enhancements:

1.      I've skipped Version 1.3 - something about the number having
        bad luck and all.

2.      A major bug, due to programmer stupidity, has been fixed. Alas,
        this bug actually could cause some damage to your disk.

3.      The X= switch works better now - it was ignored on Direct Disk
        Writes

4.      Some of the error messages have been made a bit clearer.

5.      Complaints from some of the users have caused me to increase the
        size of the checksum buffer internal to FLU_SHOT+.  This has the
        sad result of increasing the TSR size of the program itself -- but
        I consider it a reasonable increase for speeding up the checksumming
        of files.

6.      If a file to be checksummed could not be found at startup time,
        the previous files checksum was displayed -- this has been fixed.

7.      Certain holes in FLU_SHOT's security system have been patched.

8.      The size of the FLUSHOT.DAT buffer has also been increased to allow
        users to specify more files to be checksummed and/or protected.


Version  1.5,  released on 1/15/89,  has some enhancements and  a
bug-fix or two:

1.   IOCTL's are now checked pretty carefully.  Earlier versions
     had a minor hole.
2.   A new option, '-W' will keep FLU_SHOT+ from triggering on an
     open of a file which allows for write access.  Many lazy
     programmers (and I qualify as one, sometimes!) may open a
     file for write access, even though no write is intended.
     DOS's COPY command, for example, will cause a trigger on the
     open  access to the source file.
3.   FLU_SHOT+ will now trigger when a write is attempted to a
     file through the "handle" method. You'll get more triggers
     than with the original "Open with Write Access" you got,
     but it's better and more precise protection.
4.   If you end a line in your FLUSHOT.DAT file with an '!', then
     the files which match this are considered "restricted". When
     access to these files causes a FLU_SHOT trigger, no options
     are displayed: the user is advised they are attempting to
     access a restricted file and to press any key.  The
     operation will always fail.
5.   However, restricted access isn;t much use if three hits of
     the ALT key can disable FLU_SHOT.  So, a new option '--' has
     been added to disable disabling (yeah, I know it sounds
     weird!).  If you use a '!' in your FLUSHOT.DAT file to
     restrict access to users *local* to your system, then you
     should use the '--' option in your FSP invocation call.
6.   CMOS protection caused a lot of problems:  about three out
     of every four support calls were because of CMOS problems:
     and nine out of ten of those calls were due to people
     attempting to check CMOS on their XT.  XT's don't have
     CMOS!!  Since the protection offered wasn't that big a deal
     anyway, it's been pulled entirely.  As has the '-I' switch.
     The in-memory table is now checked before every DOS
     operation.
7.   A bug in 1.4 would allow the Lehigh virus through under
     certain circumstances.  This has been fixed.
8.   The price of FLU_SHOT+ remains the same, at $10.  However,
     the cost of FGLU_SHOT went up. Huh? Well, we now charge
     an additional $4 handling/shipping/processing charge on
     each order.  Sorry: I never expected to make a fortune
     off of FLU_SHOT+, but I have to at least break-even.
9.   A bug in the code would allow certain files to slip through
     unprotected.  It's been fixed.
10.  Using the '-A' switch allows you to define what attributes
     you want to use for the trigger window.
11.  Using the '-K' switch allows you to define which "special"
     keys will be used instead of the Alt and Ctrl keys.
12.  A serious bug in the "use BIOS" routine which could cause a disk
     to be trashed has been fixed.

Ross, 1/15/89
```
{% endraw %}

## XWORD221.DOC

{% raw %}
```

                         INTRODUCTION

    XWORD is a general file format transformer; that is, it con-
verts files from one format to another. Selections are made from
two menus, "FORMAT CONVERTERS" and "LOGICAL OPTIONS." Since XWORD
is not tricky to use, this file deals with general operation
procedures, some problems, and what XWORD does not do. I have
made some arbitrary decisions regarding what XWORD does to files.
Sometimes it is not possible, or not possible without great
difficulty, to preserve print options between different word
processing formats. In some of these cases, I have elected to
eliminate them and let the user re-input them anew. For those
word processors which require a line length embedded in the
files, I have chosen one arbitrarily, based on my own experience.
If this proves burdensome for users, I will find another way.
    Since XWORD is not a frozen, static program, but one which I
am continually changing (and, hopefully, improving), no feature
of XWORD need be considered as irrevocable. If users (or par-
ticular users) have a need for a certain type of revision, that
can be done.
    XWORD appends a 1AH to the ends of files under certain
options. Those options that convert files to ASCII format all ap-
pend a 1AH to the file. This is not required for MS/PC-DOS, but
it is necessary in CP/M, to which ASCII files can be ported.


                           WILDCARDS

    XWORD supports wildcards (* and ?) in the source file name.
When wildcards are used, XWORD will overwrite the source file (a
warning to that effect appears) except when converting TO MultiMate.


                           MENU ONE

                        REDUCING SPACES

    Use only with WordStar-compatible files. DO NOT USE WITH MUL-
TIMATE FILES OR WITH WORDSTAR 2000 FILES. You will have to reboot
if you try to load a file processed with the P option into Multi-
mate or WordStar 2000.


             WORDSTAR, WORDSTAR 2000, AND SIDEKICK

     No special precautions need be taken regarding these files.
Both WordStar and WordStar 2000 will allow any kind of file name.
There is still a problem with tab handling (by XWORD), but the
rest of the options of the two should be OK. XWORD will support
WordStar 2000's JUSTIFY.FRM, RAGGED.FRM, MEMO.FRM, and
NORMAL.FRM. It will not support the NOFORM.FRM. This format is
identical to ASCII. Thus, if converting a file produced with
WordStar 2000 and NOFORM.FRM, select ASCII as the source
fileformat.
    Sidekick is compatible with WordStar, BUT, the tabs of
files written in WordStar's non-document mode show up as capital
"I"s in Sidekick. XWORD expands expands these tabs so they will
appear properly.
    If your file in WordStar2000 looks funny when XWORD is
through with it, place the cursor at the beginning of the
paragraph and press any letter (you will have to erase the letter
you input). This will cause WordStar2000 to reformat the
paragraph.


                           MULTIMATE

    XWORD supports conversion both into and out of MultiMate. For
conversion out of MultiMate, it is important that you repaginate
your files first. After conversion, check to make sure that there
is no unwanted or misplaced text (MultiMate does not always
eliminate old versions of pages, but stores them and skips over
them when editing a file; also MultiMate sometimes stores pages
out of sequence). Repagination cuts down on this, but may not
eliminate it completely.  When converting from WordStar, be care-
ful of indents. Make sure that indents begin after a hard return
or ^PM (equivalent to 0DH). MultiMate requires all document files
have the extension .DOC; XWORD appends this extension to
MultiMate-target files. You will notice that the converted Multi-
mate file will often have more indents than it should. This is
due to the algorithm I used; a future version of XWORD will solve
this problem. I have used XWORD to convert a 42+K file to Multi-
Mate with no problems.


                        XYWRITE II PLUS

    No special precautions need be taken here, as XyWrite II is
very friendly. (XWORD has been tested on Version 1.00.)


                          WORDPERFECT

    No special precautions are needed regarding conversion to or
from WordPerfect.


                           MENU TWO

    The options on this menu are for bit and byte manipulation.
Some of them can be used for a quick and dirty type of
cryptography. Three of the options require the user to input a
value in hexadecimal format (digits 0-9 and letters A-F, which
represent our common notion of 10, 11, 12, to 15); they are:
AND,OR, XOR. Another one, NOT, requires no other input from the
user than the source and target file names. ROL and ROR require
the user supply a number between 1 and 7, inclusive.

    The action of NOT, ROL and ROR are fully reversable. That is,
if NOT FileA produces FileB, and NOT FileB produces FileC, then
FileC is identical to FileA. ROR (ROtate through Right) and ROL
(ROtate through Left) circulate the eight bits that compose each
byte. ROR 1 time shifts the bits in each bit right once; the
rightmost bit is moved to the leftmost position (this information
is merely for the elucidation of the user; the user does not have
to understand the action of these options in order to use them).
ROL 1 acts in the same way, but to the left. ROR 2 is the same as
ROR 1 and then ROR 1 again. If FileA is processed with ROR 3,
say, producing FileB, and FileB is processed using ROL 3, produc-
ing FileC, then FileC is identical to FileA. You can use a
sequence of these options to scramble a file pretty well (but
remember to record your sequence and go through it in reverse to
unscramble it). That is, if your sequence was:

                 ROR 4, NOT, ROL 3, NOT, ROL 2

                then to undo this, you must go:

                 ROR 2, NOT, ROR 3, NOT, ROL 4


                            REPLACE

    The last option on this menu, Replace, is different from the
others. Replace allows the user to replace any text (ASCII) or
hexadecimal string (a string is a sequence of bytes) by any other
text or hexadecimal string. The two strings do not have to both
be ASCII or hex. Additionally, the user can elect to save these
strings and reuse them (especially useful if they were compli-
cated to figure out). The user will be prompted for a source file
and then a target file; then, whether the string is to be entered
in ASCII, hex, or from a previously saved file. If the user en-
ters a string in ASCII or hex, XWORD will ask if the user wants
to save the string. This sequence is repeated for the replacement
(new) string. Each string can be 30 bytes (characters) long. When
entering hex, note that each hex digit must be composed of two
numerals (including letters). Thus, the string more commonly
written as 0DH,0AH,27H,64H,0FFH, would be enterd as 0D0A2764FF.
    Remember that if you rEplace a commonly occurring byte in a
file with a long string, then your target file could become up to
30 times as large as the original file. If users find longer
strings are more useful, I will change XWORD to accommodate
that need.
    If you make an error during hex entry, hit the backspace key,
and you will be reset to the beginning of hex entry. Generally in
XWORD, hitting the space bar, return, or end key will let you es-
cape from one level of the program to another, and, except when
files are actually being converted, control-C always works.


              OWNERSHIP, COPYRIGHTS, DISCLAIMERS

    XWORD is the property of Ronald Gans; XWORD is unpublished
and copyrighted. XWORD may not be sold for profit by anyone. If
you purchased XWORD for more than the price of a disk, shipping,
and handling, you got taken and should notify me of that fact,
along with the name of the person or corporation from whom you
purchased XWORD. XWORD.EXE and XWORD.DOC may be freely copied and
distributed, but may not be altered in any way by anyone. If you
wish an alternate version of XWORD, please let me know. Please
direct all correspondence to:

                          RONALD GANS
                     350 WEST 55TH STREET
                   NEW YORK, NEW YORK 10019
       CompuServe No. 74216,264 Telephone (212) 957-8361


                             MONEY

    If you send me $15.00 (N.Y.State residents $16.24), I'll put
your name on a list so when revisions of XWORD are ready, or im-
portant bugs are discovered, I'll inform you by postcard, along
with the names and phone numbers of some BBSs from which they can
be downloaded. For $3.00 more, you'll get a year's worth of revisions
mailed to you.
    WordStar and WordStar 2000 are registerd trademarks of
MicroPro International Corporation. Multimate is a registered
trademark of MultiMate International. XyWrite II Plus is a
registered trademark of XyQuest Inc. Sidekick is a registered 
trademark of Borland International. WordPerfect is a registered
trademark of Satellite Software.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1119

     Volume in drive A has no label
     Directory of A:\

    $READ_ME 1ST      3328   1-15-89
    CRYPT    BAS      1267   2-16-87   1:05p
    $TOC              1536   1-15-89
    DISKTOOL DOC     54528   7-24-86   9:07p
    DT       COM     57005   7-24-86   9:18p
    DT       PIF       369   3-15-86   5:24p
    F        EXE     31872   1-22-85  10:28p
    UPDATES  TXT      6682   1-15-89
    FINDHIDE COM       605   2-18-87  11:44a
    FLUSHOT  DAT       128   1-15-89
    FLU_POKE COM       844   1-15-89
    FSP      COM     15703   1-15-89
    FSP      TXT     79002   1-15-89
    F_FEED               1   1-15-89
    HARDWARE TXT       896   1-15-89
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1002   1-27-89  10:53a
    MY_OWN   CPY      1361   1-15-89
    HDSENTRY ASC      6789   8-16-88   9:29p
    HDSENTRY COM       617   8-16-88   9:29p
    HDSENTRY DOC      1920   4-25-88   7:02p
    HIDE     COM       565   2-12-87   5:07p
    INSTALL  BAT       325   7-22-88   2:53p
    LOCK     COM       439   3-05-87   9:23p
    LOCK     DOC      1232   3-05-87   9:23p
    PRINT    BAT       512   1-15-89
    RAMNET   TXT      3245   1-15-89
    REGISTER TXT      1895   1-15-89
    REWARD   FRM      1920   1-15-89
    REWARD   LST      1792   1-15-89
    THE_COOP TXT      3328   1-15-89
    SCAN     EXE      6352   9-17-86   4:25p
    SDIR5    COM      6528   3-05-87   3:13p
    SDIR5    DOC      7936   3-05-87   3:13p
    UNHIDE   COM       597   2-12-87   5:15p
    XWORD221 DOC      9139   2-24-87  12:54p
    XWORD223 EXE     30592  11-12-86  12:22a
           37 file(s)     341890 bytes
                            1024 bytes free
