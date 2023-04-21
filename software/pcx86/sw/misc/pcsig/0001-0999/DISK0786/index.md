---
layout: page
title: "PC-SIG Diskette Library (Disk #786)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0786/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0786"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HARD DISK MANAGEMENT"

    This disk is meant to be used with the book `"Hard Disk Management with
    MS-DOS and PC-DOS," from TAB Books. The book gives you tips on how to
    run your hard drive at top efficiency. The following programs are
    included on this disk:
    
    AUTOMENU -- This is the solution to learning all the DOS commands to
    access different programs.  No longer will you have to type in a list of
    commands to find the program you are looking for.  With a single press
    of a key, almost any program can be made available.  AUTOMENU gives you
    an easy-to-read and understandable menu of options to choose from.  It
    automatically does the commands to run the program you have selected.
    AUTOMENU also lets you set up your own customized menu systems.
    
    DISK TOOL -- This program lets you look at and make changes to what is
    stored on your disks.  You can work with individual files or the disk as
    a whole, and perform operations you normally couldn't do with DOS.  In
    short, it lets you manipulate everything on your disks easily and with
    very few restrictions.
    
    PACKDISK -- You can keep your hard disk running at top performance by
    filling those empty sections on your hard drive with data from the outer
    edges of your hard disk.  PACKDISK reintegrates lost clusters (file
    allocation units) into the available space on the disk and packs the
    root directory and subdirectories.  It also has other features, such as
    an option to delete an entire subdirectory with one easy command, a
    HIDE/UNHIDE program, and a program to create a RAM disk in your
    computer's memory.  And when you get to the point where you have too
    many subdirectories on your hard drive to keep track of, use the TREED
    program to map them all out on your screen.
    
    And for that valuable information on your hard drive that you don't want
    anyone to touch, there is the LOCK program.  This protects your data
    safely from accidental (or deliberate and unauthorized) viewing or
    editing.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## SW.DOC

{% raw %}
```
	*****************************************************************
	*			   Screen Swap 2.0			*
	*								*
	* (C)1983		by Marshall W. Magee	       03-29-85 *
	*****************************************************************

	This program swaps active monitors if both are available.

	A>SW	      < - Will switch to other monitor, if available
	A>SW C	      < - Will switch only to color, if available
	A>SW M	      < - Will switch only to Monochrome, if available

	This version works on PC,XT,AT, and Enhanced Color Display.


				 Magee Enterprises
			6577 Peachtree Industrial Boulevard
			 Norcross, Georgia  30092-3796 USA
			404-446-6611 CompuServe [70167,2200]

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

## FILES786.TXT

{% raw %}
```
Disk No  #786
Program Title: HOW TO TAME YOUR HARD DRIVE
PC-SIG version 1
 
    AUTOMENU is the solution to the problem of learning all the DOS
commands required to access many different application programs. No longer
will the user be required to type in a list of commands to find the program
they are looking for. With a single press of a key, almost any application
program can be made available. AUTOMENU provides the user with an easy to
read and understandable menu of options to choose from. It automatically
executes the commands required to bring the selected menu option to the
user's fingertips. AUTOMENU provides the user with the capability to set up
their own customized menu systems.
 
    DISK TOOL allows you to look at and make changes to what is stored on
your DOS disks. It gives you the ability to work with individual files or
the disk as a whole and lets you perform operations that DOS usually isn't
able to provide. Generally, it lets you manipulate everything on your disks
easily and with very few restrictions.
 
    PACKDISK eliminates file fragmentation in the drive. Eliminates
unallocated spaces between files. Reintegrates lost clusters (file
allocation units) into the available space on the disk. Packs the root
directory and subdirectories and frees subdirectory trailing clusters.
As well as other functions like deleting an entire subdirectory with one
easy command and more.
 
    This disk has a collection of useful utilities for just about
everything. If you have a file on your disk that you don't want anyone to
see, hide it with the HIDE program. You can also UNHIDE them as well. Use
MBRAIN12 to create a ram disk. Do you have to many subdirectories on your
hard drive to keep track of, if so, use the TREED program to map out your
subdirectories on the screen. If you have valuable information on your hard
drive and don't want other people changing it, copy protect your hard drive
with the LOCK program. This is just a few of the very useful programs on
this disk there are many more.
 
Usage: Hard disk utilities
 
System Requirements: 128K of memory and a hard drive
 
How to Start: Type INSTALL (press enter)
 
File Descriptions:
 
ABOUT         Information file
AUTOMENU ARC  The AUTOMENU programs
DISKTOOL ARC  The DISKTOOL programs
INSTALL  BAT  Installs these programs
PACKDISK ARC  The PACKDISK programs
PKX34A20 COM  The PKARC and PKXARC programs
TOOLS1   ARC  Miscellaneous programs
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

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

## MBRAIN12.DOC

{% raw %}
```
r
                             MEMBRAIN DOCUMENTATION 
 
 
 
    - Description 
 
         MEMBRAIN.EXE Version 1.21 creates a file named 'MEMBRAIN.SYS ', 
    a DOS device driver for an emulated disk drive configured to your 
    specifications. MEMBRAIN is installed through the DOS device driver 
    interface using a 'DEVICE= ' statement in 'CONFIG.SYS '. DOS will 
    assign to the drive the next available drive letter. For example, if 
    your system has disk drives A: and B:, MEMBRAIN will be drive C:. On 
    a PC-XT with drives A: and C:, MEMBRAIN will be drive D:. 
 
 
    - System Requirements 
 
         An IBM PC or XT with at least 128K of memory and DOS 2.X 
 
 
    - Installation 
 
    1) Enter on the DOS or QSYS command line: 
 
    MEMBRAIN  disk size,sector size,cluster size,directory entries,path 
 
         disk size - The requested size of the emulated drive in Kbytes. 
              An error is returned if the resulting configuration would 
              leave less than 64K of free memory. If this parameter is 
              omitted, the default disk size is 160K. 
 
         sector size - The size of each logical sector in bytes. Sector 
              size should be a multiple of 128 and will be rounded up to 
              the next 128 byte multiple. For example, if the parameter 
              is entered as 150, then the actual sector size will be 256 
              bytes. The default is 512 bytes per sector. 
 
         cluster size - The number of sectors per cluster. An error will 
              be returned if the number of bytes per cluster exceeds 2048. 
              Refer to 'Configuration Tips ' for more information. The 
              default is 1 sector per cluster. 
 
         directory entries - The maximum number of filenames that the disk 
              directory can hold. This parameter will be adjusted upward as 
              necessary to a multiple of sector size. The default is 64. 
 
         path - The drive and directory path in which MEMBRAIN.SYS is to be 
              created. This parameter is entered in the form 'd:\path '. If 
              drive is omitted, then the default drive will be used. If the 
              path is omitted, then the current directory will be used. 
 
    NOTES: 
         - MEMBRAIN.EXE passes a return code upon termination that can be 
           tested in a batch file with the 'IF ERRORLEVEL ' batch file 
           command. A non-zero return code indicates that an error occured. 
 
 
 
 
 
                                                                PAGE 1 
 
 
 
 
 
                             MEMBRAIN DOCUMENTATION 
 
 
 
    2) To create a CONFIG.SYS file: 
 
         Enter on the DOS command line: 
 
          COPY CON: CONFIG.SYS        'Copies keyboard input to CONFIG.SYS 
          DEVICE=MEMBRAIN.SYS         ' this goes into the file 
          Press F6 and then <ENTER>   ' this writes the file to disk 
 
    NOTES: 
         - CONFIG.SYS must be on the drive used to boot DOS. 
         - If you already use CONFIG.SYS, then edit it to include the 
           statement 'DEVICE=MEMBRAIN.SYS '. 
         - Multiple 'DEVICE= ' statements can be used in CONFIG.SYS to load 
           more than 1 MEMBRAIN device driver. This is less efficient than 
           using a single, larger device driver, and is not supported by 
           the QSYS INSTALLATION AID. 
 
    3) Re-boot DOS either by powering the system off and then back on, or 
       with the key sequence 'Ctrl-Alt-Del '. The MEMBRAIN.SYS device 
       driver is automatically loaded and initialized by DOS. 
 
 
    - Configuration Tips 
 
         MEMBRAIN.EXE displays a summary of disk space utilization as it 
    creates MEMBRAIN.SYS. The following example illustrates how to use 
    the data provided. 
 
    MEMBRAIN 20,128,1,8,C:\            'Command used to invoke MEMBRAIN.EXE 
 
    <<<< M e m  B r a i n >>>>         'Title 
       (C) 1984 Dennis Lee 
       20K MemBrain Created            'disk size       \   These are the 
                                                         \  values created, 
      128  bytes per sector            'sector size       \ and may differ 
        1  sectors per cluster         'cluster size      / from requested 
        8  directory entries           'directory entries/  values. 
 
        1  reserved sector             'boot record          \ 
        2  FAT sectors                 'file allocation table > overhead 
        2  directory sectors           'directory            / 
      155  data sectors                'usable file space 
    -------------------------- 
      160  total sectors               '160 sectors X 128 bytes/sect = 20K 
 
    This summary can be used to analyze the overhead of the configuration. 
    Since a change in the configuration has no effect until the next time 
    DOS boots, MEMBRAIN.EXE may be executed several times to analyze the 
    effects of different parameters. The following notes are general tips. 
 
 
 
 
 
 
 
                                                                PAGE 2 
 
 
 
 
 
                             MEMBRAIN DOCUMENTATION 
 
 
 
    1) Sector and Cluster Sizes 
 
         Each cluster requires 1.5 bytes of space for the file allocation 
    table, and the total is rounded up to next multiple of the sector size. 
    The general rule for adjusting sector size and cluster size is to use 
    small sector and cluster sizes for smaller drives, or when small files 
    will be stored, since less space will be wasted when part of a cluster 
    is left unused between files. Larger sector and/or cluster sizes may 
    provide more usable disk space per Kbyte of disk size, and a slight 
    performance gain with larger drives, or when a few large files are to 
    to be stored, since less space will be used for FAT sectors, wasted 
    space between files is less of a consideration, and DOS will spend less 
    time finding a given amount of data. 
 
    2) Directory Entries 
 
         Each directory entry requires 32 bytes of space, and the total is 
    rounded up to the next multiple of sector size. For example, with 128 
    byte sectors, you get 4 directory entries per sector. Any request for 
    directory entries would be rounded up to a multiple of 4. The only key 
    to allocating directory entries is to allocate slightly more than you 
    think you'll need, because it's frustrating to have free disk space and 
    no available directory entries, but not too many, since extra entries 
    are wasted space. MEMBRAIN uses one directory entry for a volume label. 
 
 
    - Operational Charactaristics 
 
         MEMBRAIN looks to DOS like a non-IBM fixed disk. This device type 
    is used because it provides an operational interface to DOS consistent 
    with it's performance charactaristics. The following list outlines it's 
    important operational charactaristics. 
 
         1) Since MEMBRAIN is a non-IBM device, the 'FORMAT ' command will 
            not work with it. It doesn't need to be formatted! 
         2) Since MEMBRAIN can be any non-standard size, and is considered 
            fixed media, 'DISKCOPY ' will not work with it. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                                PAGE 3







Press ENTER to continue: 
 
 
 
 
 
                                                                PAGE 3






```
{% endraw %}

## PASSWORD.BAS

{% raw %}
```bas
1000 '=========================================================
1010 'PASSWORD.BAS (From "Softalk", March, May & July, 1984)
1020 'minor mods and color added by P. Eskildsen, July 10, 1984
1030 'other mods and color removed by Dan Gookin, March 5th, 1987
1040 'Uses BASICA 2.0 key trapping to kill Ctrl-Alt-Del,
1050 'Ctrl-C, & Ctrl-Break -- user cannot RESET
1060 '
1070 KEY OFF
1080 KEY 15,CHR$(12) + CHR$(83)                'CTRL-ALT-DEL
1090 KEY 16,CHR$(4) + CHR$(46)                 'CTRL-C
1100 KEY 17,CHR$(4) + CHR$(70)                 'CTRL-BREAK
1110 ON KEY(15) GOSUB 1520 : KEY(15) ON
1120 ON KEY(16) GOSUB 1520 : KEY(16) ON
1130 ON KEY(17) GOSUB 1520 : KEY(17) ON
1140 '
1150 'Read in password
1160 '
1170 OPEN "password.dat" FOR INPUT AS 1
1180 LINE INPUT#1,PASSWORD$
1190 CLOSE
1200 ON ERROR GOTO 1620
1210 '
1220 'Check user's password entry one char at a time, as entered:
1230 '
1240 CLS
1250 LOCATE ,,1
1260 PRINT "Please enter your password:";
1270 TRY = 0
1280 I = 0
1290 A$ = INKEY$: IF A$="" THEN 1290
1300    IF A$ = "~" THEN 1420
1310	I = I + 1
1320    IF A$ <> MID$(PASSWORD$,I,1) THEN 1350
1330    IF I = LEN(PASSWORD$) THEN 1420
1340 GOTO 1290
1350    TRY = TRY + 1
1360    IF TRY >= 3 THEN 1480
1370    PRINT "Wrong! Try again from start of password."
1380 GOTO 1280
1390 '
1400 'Access granted
1410 '
1420 PRINT
1430 PRINT TAB(30);"Welcome!"
1440 SYSTEM
1450 '
1460 'Too many attempts, lock system
1470 '
1480 CLS
1490 LOCATE 12,20
1500 PRINT "** System Locked **"
1510 GOTO 1510
1520 '
1530 'Display ignore messages
1540 '
1550 BEEP
1560 READ AH$
1570 PRINT AH$
1580 RETURN
1590 DATA "So there!", "Think you're smart?"
1600 DATA "That won't work either.", "I'm sorry"
1610 DATA "Try harder...", "Okay.  Give up now."
1620 RESTORE 1590
1630 RESUME 1560
```
{% endraw %}

## PASSWORD.DOC

{% raw %}
```


                               PASSWORD.BAS
                               (Version 1.2)

This BASICA 2.0 program reads a password from a user-defined file called
PASSWORD.DAT and compares it character-by character with the keyboard entry
of the password. It starts over each time an error of any kind is made and
locks the system into a loop after three errors are made.

During the running of PASSWORD.BAS the control sequences Ctrl-Alt-Del,
Ctrl-C, & Ctrl-Break are disabled.

To control a password-controlled system, create an autoexec.bat file as
follows on each system disk or in the root (\) directory of your hard disk:


     Prompt  user enters
     ------  --------------------------
         A>  copy con autoexec.bat     | & press {return}
             basica password           | & press {return}
             date                      | & press {return}
             time                      | & press {return}
             {F6}  or {Ctrl}Z          | & press {return}

If you alseady have an Autoexec.bat file simply edit the file so that the
line "basica password" is the first one in the file.

Naturally, BASICA.COM, PASSWORD.DAT, and the above AUTOEXEC.BAT files must
all be on the system disk in the root directory.

A password file called PASSWORD.DAT has already been created with the
password of 'system manager'. If you want a different password enter:

     Prompt  user enters
     ------  --------------------------
         A>  copy con password.dat     | & press {return}
             {your password}           | & press {return}
             {F6}  or {Ctrl}Z          | & press {return}

If you forget your password the program allows the character "}" as an
alternate.

07/10/84 - Version 1.1 now supports color (also works fine on IBM
           or equivalent high-res monochrome monitors). Have fun!
03/05/87 - Version 1.2 has a few niceties added, like it won't stamp
           over your INT vectors when an impoper password is entered.
           I've also removed the annoying color added to version 1.1.


NOTE: keep in mind it's still possible to access any system by
      booting from a DOS system disk in drive A:.
```
{% endraw %}

## TREED.DOC

{% raw %}
```
TREED.DOC
This program shows a graphic display of all files and subdirectories
on a disk.  The output can be redirected to a file or to the printer.
Note that when outputting to a printer, the graphics characters used
by TREED might not be displayed properly.

TREED.COM was written by Robert A. Flavin and is Copyright (c)
International Business Machines Corporation 1984.  It is not really
a public domain program, however because so many bozos have copied
and distributed it no one seems to care any more.

These notes written by Dan Gookin.
03/05/87
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

### Directory of PC-SIG Library Disk #0786

     Volume in drive A has no label
     Directory of A:\

    ABOUT             5475   6-24-87   9:47a
    AUTOMENU ARC     86329   6-24-87   9:46a
    DISKTOOL ARC     62052   6-24-87   9:46a
    FILES786 TXT      2601   6-24-87   9:52a
    GO       BAT        38   6-24-87   9:45a
    GO       TXT       386   6-24-87   9:47a
    INSTALL  BAT       450   6-24-87   9:45a
    PACKDISK ARC     25554   6-24-87   9:46a
    PKX34A20 COM     58368   6-24-87   9:47a
    TOOLS1   ARC     53029   6-24-87   9:46a
           10 file(s)     294282 bytes
                           23552 bytes free
