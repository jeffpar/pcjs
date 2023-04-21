---
layout: page
title: "PC-SIG Diskette Library (Disk #2029)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2029/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/2000-2999/DISK2029/DISK2029.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2029"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FIND DUPLICATES/COPYCON/GBLINK"

    FIND DUPLICATES will search a specified hard drive and all
    subdirectories and locate all duplicate files. Once the duplicate files
    are located they are displayed on the screen. Files can be tagged for
    deletion, viewed, printed or deleted. This program is very easy to use
    and the documentation is excellent.
    
    COPYCON is a program designed to take the place of the DOS command "COPY
    CON" commonly used to create BATCH files.  The program allows
    full screen editing of your file with line length of up to 80
    characters.  COPYCON also provides a number of "macro" keys to help make
    the process simpler.  These macros include some of the common commands
    used in batch files (ie. echo, rem, etc.), as well as macro keys for all
    of the single and double-line graphics characters.  This makes simple
    work of adding graphics boxes to your batch files.  There are no block
    commands included, as this is not designed to be a full featured text
    editor, however there is a command to copy one line to another.  The
    program is very easy to use and the documentation, although not really
    needed, is quite complete.
    
    gBLINK is a simple utility to blank your pc's screen after a specified
    period of inactivity on the keyboard.  The program also includes an
    onscreen clock which can be turned on and off from the keyboard (the
    clock is positioned in the upper right corner of the screen).  The
    program is extremely simple to install and uninstall,  and comes
    complete with documentation to help you get started.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COPYCON.DOC

{% raw %}
```



























                                     CopyCon


                                  Version 3.12
                                    June 1989















                                       by
                               John E. Bean, P.E.
                              Data Acquisition Inc.
                               1701 Broadway #156
                              Vancouver, Wa. 98663




                                  INTRODUCTION


     CopyCon is a program to be used in lieu of the DOS command COPY CON.  I
     have  used COPY CON numerous times in creating batch files and  miscel-
     laneous small text files. 

     I have experienced many frustrating moments using COPY CON.  I have ac-
     cidently overwritten existing files.  I have mistyped commands only  to
     notice  them while entering the next line.  I have also wanted to  have
     graphic boxes in my batch files.

     CopyCon alleviates all of the above problems.  It checks to see if  the
     specified file exists,  and if it does CopyCon provides either  loading
     the  existing  file  or allows the existing  file  to  be  overwritten.
     CopyCon  also  has full screen editing capability and built  in  Macros
     which aids in creating files.

     CopyCon  was written in Turbo Pascal 5.0 using routines from Turbo  5.0
     Professional.  The help screens were designed using a screen  generator
     "SayWhat!".

     CopyCon  is  so easy to use that this manual is not necessary  but  the
     following sections will briefly discuss how to use CopyCon.



                                   LIMITATIONS

     I  have designed CopyCon for typical batch files and small text  files.
     It  is not designed to be a text editor!  If you need a text  editor  I
     have written a text editor "LIMA". 

     There are two main limitations that I designed into this program.  They
     are:

               * The  maximum length of a text line is 80  charac-
                 ters.
               * There are no block functions.  You can only  copy
                 the current line to next line.

     These  limitations  were  done to distinguish  the  difference  between
     CopyCon and a text editor.   



                                 GETTING STARTED

     CopyCon is comprised of two (2) files. They are:
          * Copycon.exe - The executable program.
          * Copycon.doc - This documentation. 

     Start  CopyCon  by  issuing the following command at  the  DOS  prompt: 
                              A:>CopyCon (filename).

     As you can see this is identical to using the DOS command COPY CON  ex-
     cept there is not a space between Copy and Con. The user is responsible
     for providing a valid filename.

     Once the program is loaded into memory,  the program will check to  see
     if your computer has a color graphics card. If it does the program will
     be displayed in color.  You can force CopyCon to be displayed in  black
     and  white by typing in "/bw"  AFTER the filename on the command  line.
     For  example;  if you wish to create a batch file named  "CPY.BAT"  and
     have CopyCon be in black and white the following is the correct syntax.

                              A:>CopyCon  CPY.BAT /bw

     Next the screen will be cleared,  ">CopyCon  (filename)"  will be  dis-
     played in the upper left hand corner.  Several other items will be dis-
     played to the right of the file name. They are:
          * F1 - Help:   A  help  menu is available simply  by  de   
                         pressing  the F1 function key.  The  help    
                         menu  provides  information  on   editing    
                         keys and several batch file command.
          * F2 - Macros: Depressing  the  F2  function  key   will    
                         display the predefined Macros.
          * 1,1:         The  y,x  position of the cursor.  The  y    
                         position is the FILE LINE position.
          * INS:         If  the insert mode is ON then  INS  will    
                         be displayed. 
          * [max line]:  The number displayed inside the "[ ]"  is     
                         the  maximum  number of lines  your  file     
                         can  have.  For  a  640K  machine,   this     
                         should be around 5000.

     If the file entered on the command line exists,  a pop up menu will ap-
     pear offering the following choices:
          * LOAD:        This  option will load the existing  file    
                         and  CopyCon  can be used to  modify  the    
                         file.
          * OVERWRITE:   This  option will overwrite the  existing    
                         file. 
          * EXIT:        This option will abort CopyCon.

     The cursor will be located at the left hand column  of your screen. You
     are now ready to create/edit your file.



                                EDITING COMMANDS

     CopyCon  provides simple editing commands. These commands can  be  dis-
     played  while  editing through the Help Menu which is accessed  by  de-
     pressing the F1 function key.  The editing commands can be broken  into
     the following sections.

     CURSOR PAD KEYS:
       Up Arrow Key:
          Depressing the Up arrow key will move the cursor to  the
          previous line. Depressing the Up arrow key while on line
          one will result in the display of an error message.

       Down Arrow Key:
          Depressing  the Down arrow key will move the  cursor  to
          the  next line.  Depressing the Down arrow key while  on
          the  last line entered will result in the display of  an
          error message.

       Left Arrow Key:
          Depressing  the Left arrow key will move the cursor  one
          position left on the current line.  Depressing the  Left
          arrow  key  while at the leftmost column on  the  screen
          will result in the display of an error message.

       Right Arrow Key:
          Depressing the Right arrow key will move the cursor  one
          position right on the current line. Depressing the Right
          arrow  key while at the rightmost column on  the  screen
          will result in the display of an error message.

       Home Key:
          Depressing  the  HOME key will move the  cursor  to  the
          leftmost position on the current line.

       End Key:
          Depressing  the  END  key will move the  cursor  to  the
          rightmost position on the current line.

       Tab Key:
          Depressing the TAB key will move the cursor right  eight
          (8) spaces.

       Shift Tab Key:
          Simultaneously depressing the Shift key and the Tab  key
          will move the cursor left eight (8) spaces.

       Ctrl Home Key:
          Simultaneously depressing the Ctrl key and the HOME  key
          will move the cursor to the top of the screen.

       Ctrl End Key:
          Simultaneously  depressing the Ctrl key and the END  key
          will move the cursor to the bottom of the screen.

       Ctrl PgDn Key:
          Simultaneously depressing the Ctrl key and the PgDn  key
          will move the cursor to the end of the file. If the cur-
          sor  is already at the end of the file an error  message
          will be displayed.

       Ctrl PgUp Key:
          Simultaneously depressing the Ctrl key and the PgUp  key
          will move the cursor to the top of the file. If the cur-
          sor  is already at the top of the file an error  message
          will be displayed.

       Ins Key:
          Depressing  the INS key will toggle the Insert  Mode  on
          and off.  If the Insert Mode is on,  "INS"  will be dis-
          played on the top line in inverse video.

       Del Key:
          Depressing  the DEL key will delete the character  under
          the  current  cursor position.  All  characters  to  the
          right  will move one space to the  left.


     FUNCTION KEYS:

       F1:
          Depressing  the  F1 function key will display  the  Help
          Menu.  The  Help Menu will display screens for  all  the
          keys  discussed in this section and the following  Batch
          File commands:
                              * Echo
                              * Set
                              * Rem
                              * Pause
                              * Shift
                              * Goto
                              * If
                              * For

       F2:
          Depressing the F2 function key will display a listing of
          all the built in Macros available in this program.

       F3:
          Depressing  the F3 function key will copy  the  previous
          line. (The tutorial will show how useful this can be)

       F4:
          Depressing  the F4 function key will center the  current
          line on the screen. This feature is multifunctioned.  If
          the line starts with "REM" or "ECHO"  the centering will
          be offset to accommodate for those words.  (The tutorial
          will show how this works)

       F6:
          Depressing  the F6 function key will save the  file  and
          exit the program.

       F7:
          Depressing the F7 function key will insert a new line at
          the current cursor position.

       F8:
          Depressing  the F8 function key will delete the  current
          line.

     OTHER KEYS:

       TAB:
          Depress the TAB key will move the cursor eight (8) posi-
          tions to the right. 

       SHIFT TAB:
          Simultaneously depressing the SHIFT key and the TAB  key
          will move the cursor eight (8) positions to the left.

       ESC:
          Depressing the ESC key will abort CopyCon.  Once the ESC
          key has been depressed, CopyCon will ask if you are sure
          you wish to leave CopyCon.  If you do,  depress the  "Y"
          key and if you do not simply depress any other key.



                                     MACROS

     CopyCon has built in Macros.  What are Macros?  Macros are a  character
     or a series of characters displayed on the screen when a designated key
     or two designated keys are simultaneously depressed.  A list of  Macros
     can be displayed during editing by depressing the F2 function key.  The
     Macros in CopyCon can be divided into two categories. They are:

     BATCH FILE COMMANDS:

     CopyCon has assigned several of the most commonly used batch file  com-
     mands to key combinations. They are:

       Alt C:
          Simultaneously depressing the Alt   key and the "C"  key
          will display "copy " on the screen.

       Alt E:
          Simultaneously depressing the Alt   key and the "E"  key
          will display   "echo " on the screen.

       Alt F:
          Simultaneously  depressing the Alt key and the  "F"  key
          will display "for %% in ( ) do " on the screen.

       Alt G:
          Simultaneously  depressing the Alt key and the  "G"  key
          will display "goto " on the screen.

       Alt I:
          Simultaneously  depressing the Alt key and the  "I"  key
          will display "shift  " on the screen.

       Alt L:
          Simultaneously depressing the Alt   key and the "L"  key
          will display   "cls " on the screen.

       Alt P:
          Simultaneously  depressing the Alt key and the  "P"  key
          will display "path " on the screen.

       Alt R:
          Simultaneously depressing the Alt   key and the "R"  key
          will display   "rem" on the screen.

       Alt S:
          Simultaneously depressing the Alt   key and the "S"  key
          will display   "erase" on the screen.


                                 GRAPHIC BOXES: 

     Many times boxes look good in batch files. CopyCon has established Mac-
     ros for both single and double sided boxes. The following will describe
     the keys used to print the box characters on the screen.

     SINGLE LINED BOX:

       Alt F1 - Upper Left Hand Corner
       Alt F2 - Upper Right Hand Corner
       Alt F3 - Lower Left Hand Corner
       Alt F4 - Lower Right Hand Corner
       Alt F5 - Horizontal Line
       Alt F6 - Vertical Line
       Alt F7 - Upper Horizontal Cross
       Alt F8 - Lower Horizontal Cross
       Alt F9 - Left Vertical Cross
       Alt F10- Right Vertical Cross
       Alt 6  - Center Cross


     DOUBLE LINED BOX:

       Ctrl F1 - Upper Left Hand Corner
       Ctrl F2 - Upper Right Hand Corner
       Ctrl F3 - Lower Left Hand Corner
       Ctrl F4 - Lower Right Hand Corner
       Ctrl F5 - Horizontal Line
       Ctrl F6 - Vertical Line
       Ctrl F7 - Upper Horizontal Cross
       Ctrl F8 - Lower Horizontal Cross
       Ctrl F9 - Left Vertical Cross
       Ctrl F10- Right Vertical Cross
       Alt 5   - Center Cross


     SHADING: 

     There  are  several  characters that are commonly  used  for  "shading"
     boxes.  CopyCon provides Macros for four (4) of these  characters.  De-
     pressing Alt 1, Alt2, Alt 3 or Alt 4 will insert a "shading"  character
     on the screen.




     VERSION CHANGES

     Version 3.12 has changed the following:
          * Fixed a bug in centering.
          * Added color.

     Version 3.10 has changed the following:
          * Fixed a bug in scolling up multiple screen files.
          * Added color to the program. 
          * Change the X,Y on the status line to be Y,X.

     Version 3.0 has changed the following:
          * Converted to Turbo Pascal 5.0.
          * The maximum length of the file is limited only to  the
            size of RAM.
          * Many of the bugs in 2.0 have been corrected.

     Version 2.0 has changed the following:
          * The program was rewritten in Turbo Pascal 4.0.
          * A  Help Menu has been include providing help  on  some
            most commonly used batch file commands.

     Version 1.30 has changed the following:
          * When copying (F3) the line above,  the cursor now goes  
            next line.
          * Corrected  an error when attempting to center  (F4)  a  
            blank line. 
          * Added cursor X and cursor Y (file line) to the  status  
            line.
          * Added Insert Line (Ctrl N).
          * Added Delete Current Line (Ctrl Y)

     Version 1.20 has changed the following:
          * Better memory allocation. 
          * Limit file size to 500 lines maximum
          * CopyCon will now load existing files.



                                 OTHER PROGRAMS

     I  have  used many Public Domain,   Shareware  and  Commercial software
     over the years. In appreciation to all those authors     of  Public Do-
     main Programs I have written several Public  Domain Programs. They are:

     EzDoss:
       EzDoss   is  a  Dos Shell.  I have  used  many  Dos shells  over
       the past years.  Each program has several features that I really
       enjoy.   I decided  to write a Dos Shell that put most of  those
       features  into  EzDoss.   EzDoss is both Menu  Driven  and   has
       "Quick  Keys".  Some of the features that  EzDoss has are:
          * Tag files either singularly,  all at once,  or by pat-
            tern.
          * Copy,   delete,   move, rename,  print or  view tagged
            or highlighted files.
          * Include  or  Exclude file from being  displayed  by  a
            user defined mask.
          * Edit an existing Ascii file.
          * Invoke an Ascii text SideKick type editor.
          * Locate  all files using a user  defined  mask for on a
            given drive.
          * Print a tree of the specified disk drive.
          * Format a disk without leaving EzDoss.

       I  am sure that once you try EzDoss and discover all  the  power
       and ease it has this will  become an indispensable program.

     Lima:
       Another  type  of program I used  regularly  are text   editors. 
       The  ones  I used are either  too simple or too complex.   I  am
       used to using  the text  editor  that comes with Turbo   Pascal. 
       I  also  bought Turbo Professional 5.0 which is  a set  of  over
       400 Turbo Pascal routines that  do just  about  everything   you
       can  think  of.   I wanted  to  write a program that uses   many 
       of  Turbo   Professional   routines and  I   had   Turbo  Editor
       ToolBox so I wrote Lima (a bad pun on my last name). Some of the
       features of Lima are:
          * Dual  Windows.   Two files can be opened at  the  same
            time.  Windows can be zoomed,  rotated or switched be-
            tween files.
          * Buffering.   Blocks of text can be  copied   or  moved
            from one window to another.
          * Macros.   Macros can be defined,   and  written  to  a
            disk file.
          * Keys   can   be redefined to key  sequences   of  your
            choice.

     Find Duplicates:
       Most  users of hard disks have duplicates files on their  disks.
       The  file  COMMAND.COM will appear in  numerous  subdirectories.
       Significant hard disk space is being wasted by these files.

       Find  Duplicates  is an utility which scans the  specified  hard
       disk drive and displays a list of duplicate files.  You can move
       through the list by using the arrow keys,  page down,  page  up,
       home or end keys.  The contents of the files can be viewed using
       LIST.COM.  Files which you want to be deleted,  are "tagged"  by
       depress the "T"  key.  Once all the desired files are  "tagged",
       depressing  the  F10 function key will delete all  the  "tagged"
       files.

       Find  Duplicates will become an utility that will be used  on  a
       regular basis.


     To  get the most current version and printed manuals of the above  pro-
     grams  send $10.00 for each program to me at the following address:

                         John E. Bean
                         data acquisition inc.
                         1701 Broadway #156
                         Vancouver, Wa. 98663

     I hope you enjoyed CopyCon and please do not hesitate to send  comments
     and praise to me.




                           ABOUT DATA ACQUISITION INC.

     Data Acquisition Inc.  is a company that manufactures a  microprocessor
     based CMOS unit which can store information based on events and time.

     One  of  the  products designed around the unit is  a  traffic  counter
     called MicroCounts.  The MicroCounts unit can count vehicle actuations,
     classify vehicles, or determine speeds.

     This microcomputer unit can be adapted for various uses, such as count-
     ing objects passing a given point (people though a gate). 

     Data Acquisition Inc.  will also write custom software.  The Public Do-
     main  Programs  listed above is an example of the quality  and  thought
     that goes into programs we develop. 

     If you think you have an application for our microprocessor based  unit
     or need custom software developed,  please contact me at (206) 687-7246
     or write to me at:

                    John E. Bean
                    Software and Applications Engineer
                    Data Acquisition Inc.
                    1701 Broadway #156
                    Vancouver, Wa. 98663




```
{% endraw %}

## FD.DOC

{% raw %}
```
























                                 Find Duplicates
                                       by
                               John E. Bean, P.E.

                                  Version 2.12
                                    June 1989

























                  Copyright 1988, 1989 - Data Acquisition Inc.

                                  INTRODUCTION

     Find  Duplicates is an utility program for IBM PCs equipped  with  hard
     disk drives.  Find Duplicates will search a specified drive and  locate
     all duplicate files.

     Once the duplicate files are located they are displayed on the  screen.
     Files can be tagged for deletion, viewed, printed or deleted.

     Find  Duplicates was written in Turbo Pascal 5.0,  utilizing Turbo  5.0
     Professional by Turbo Power Software.

     The program requires 256K of RAM and a hard disk.


                                 GETTING STARTED

     To run Find Duplicates,  simply type FD at the Dos prompt which can  be
     followed by two optional command line parameters. The syntax is:

                               FD /d=<drive> /bw

     The  first  parameter,  /d=<drive>,  is entered when the  drive  to  be
     searched IS NOT the currently logged drive. The second parameter forces
     the output to be in black and white.  This is useful for laptop comput-
     ers which have LCD screens.

     The following are valid examples on starting Find Duplicates.

          EXAMPLE:
            You are logged onto drive C and want to find  all
            the duplicate files on drive C.
                    C:>FD <Enter>

          EXAMPLE:
            You are logged onto drive C and want to find  all
            duplicates  files on drive D and want the  output
            to be in black and white.
                    C:>FD /d=d /bw  <Enter>



                              USING FIND DUPLICATES

     Once  Find  Duplicates  has  been  evoked,  as  described  in  "GETTING
     STARTED", the program will perform the following tasks:

          * Search the specified Drive for all subdirectories.
          * Search each subdirectory for all files.
          * Sort and store all files.
          * Find all duplicates files.

     While Find Duplicates is doing the above,  the number of files found is
     displayed on the screen.

     After finding the duplicates files a display screen will appear. On the
     screen  the duplicate files are displayed,  separated by a blank  line.
     The following are the keys and actions that can be taken.

        KEY              ACTION                               
        Down Arrow       Move highlight bar down one file.
        Up Arrow         Move highlight bar up one file.
        PgDn             Move highlight bar down 18  files.
        PgUp             Move highlight bar up 18 files.
        Home             Move highlight bar to first file.
        End                   Move highlight bar to last file.
        T                Tag highlighted file for deletion.
        U                Untag highlighted file.
        P                Print duplicate files to printer.
        V                View highlighted file using LIST.COM
        F1               Display Help Screen.
        F10              Erase tagged files.
        ESC              Exit Find Duplicates.

     Once all the duplicate files have been tagged, depress the F10 function
     key.  You will be asked if you are sure you  want to erase  the  tagged
     files.  If you depress "Y"  the tagged files will be erased,  a  screen
     will appear listing the number of files that were erased and the amount
     of disk space recovered,  and the program will be terminated.

     That is all there is to Find Duplicates. It was designed to be easy but
     powerful. I hope you enjoy this program and put it to good use.

                                 OTHER PROGRAMS

     I  have  used many Public Domain,   Shareware  and  Commercial software
     over the years. In appreciation to all those authors     of  Public Do-
     main Programs I have written several Public  Domain Programs. They are:

     EzDoss:
       EzDoss   is  a  Dos Shell.  I have  used  many  Dos shells  over
       the past years.  Each program has several features that I really
       enjoy.   I decided  to write a Dos Shell that put most of  those
       features  into  EzDoss.   EzDoss is both Menu  Driven  and   has
       "Quick  Keys".  Some of the features that  EzDoss has are:
          * Tag files either singulary,  all at once,   or by pat-
            tern.
          * Copy,   delete,   move, rename,  print or  view tagged
            or highlighted files.
          * Include  or  Exclude file from being  displayed  by  a
            user defined mask.
          * Edit an existing Ascii file.
          * Invoke an Ascii text SideKick type editor.
          * Locate  all files using a user  defined  mask for on a
            given drive.
          * Print a tree of the specified disk drive.
          * Format a disk without leaving EzDoss.

       I  am sure that once you try EzDoss and discover all  the  power
       and ease it has this will  become an indespensible program.

     Lima:
       Another   type  of program I used  reguarly  are text   editors. 
       The  ones  I used are either  too simple or too complex.   I  am
       used to using  the text  editor  that comes with Turbo   Pascal. 
       I  also  bought Turbo Professional 5.0 which is  a set  of  over
       400 Turbo Pascal routines that  do just  about  everything   you
       can  think  of.   I wanted  to  write a program that uses   many 
       of  Turbo   Professional   routines and  I   had   Turbo  Editor
       ToolBox so I wrote Lima (a bad pun on my last name). Some of the
       featurs of Lima are:
          *  Dual Windows.   Two files can be opened at  the  same
            time.  Windows can be zoomed,  rotated or switched be-
            tween files.
          *  Buffering.   Blocks of text can be  copied  or  moved
            from one window to another.
          *  Macros.   Macros can be defined,   and  written to  a
            disk file.
          * Keys   can   be redefined to key  sequences   of  your
            choice.

     CopyCon:
       I  have  written my share of short batch files using  the  "Copy
       Con"  method. If I had a dime for every time I goofed and had to
       start over, Donald Trump would be borrowing money from me! I de-
       cided  to write a program that would replace Copy Con and  clev-
       erly entitled it "CopyCon". CopyCon is evoked the same what Copy
       Con  is except there is no space between Copy and Con.  For  ex-
       ample:

            A:>copycon test.bat

       This  would evoke CopyCon and create, or load if test.bat is  an
       existing file,  the file test.bat.  Copycon allows for backspac-
       ing, inserting and deleting lines, centering of text and graphic
       boxes to name just a few options. 

       CopyCon IS NOT a text editor but a tool to use in creating small
       batch files.

          To  get the most current version of the above  programs  send
          $10.00 for each program to me at the following address:

                         John E. Bean
                         data acquistion inc.
                         1701 Broadway #156
                         Vancouver, Wa. 98663

     I  hope you enjoyed Find Duplicates and please do not hesitate to  send   
     comments and praise to me.




                           ABOUT DATA ACQUISITION INC.

     Data Acquisition Inc.  is a company that manufactures a  microprocessor
     based CMOS unit which can store information based on events and time.

     One  of  the  products designed around the unit is  a  traffic  counter
     called MicroCounts.  The MicroCounts unit can count vehicle actuations,
     classify vehicles, or determine speeds.

     This microcomputer unit can be adapted for various uses, such as count-
     ing objects passing a given point (people though a gate). 

     Data Acquisition Inc.  will also write custom software.  The Public Do-
     main  Programs  listed above is an example of the quality  and  thought
     that goes into programs we develop. 

     If you think you have an application for our microprocessor based  unit
     or need custom software developed,  please contact me at (206) 687-7246
     or write to me at:

                    John E. Bean
                    Software and Applications Engineer
                    Data Acquistion Inc.
                    1701 Broadway #156
                    Vancouver, Wa. 98663

```
{% endraw %}

## FILE2029.TXT

{% raw %}
```
Disk No: 2029                                                           
Disk Title: Find Duplicates/CopyCon/GBLINK                              
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Find Duplicates                                          
Author Version: 2.12                                                    
Author Registration: $10.00                                             
Special Requirements: Hard drive.                                       
                                                                        
FIND DUPLICATES is a utility program for IBM PCs equipped with hard disk
drives. FIND DUPLICATES will search a specified hard drive and all      
subdirectories and locate all duplicate files. Once the duplicate files 
are located they are displayed on the screen. Files can be tagged for   
deletion, viewed, printed or deleted.  This program is very easy to use 
and the documentation is excellent.                                     
                                                                        
                                                                        
                                                                        
Program Title: CopyCon                                                  
Author Version: 3.12                                                    
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
COPYCON is a program designed to take the place of the DOS command "COPY
CON <filespec>" commonly used to create BATCH files.  The program allows
full screen editing of your file with line length of up to 80           
characters. COPYCON also provides a number of 'Macro' keys to help make 
the process simpler.  These Macros include some of the common commands  
used in BATCH files (ie. ECHO, REM, etc.), as well as Macro keys for all
of the single and double-line graphics characters.  This makes simple   
work of adding graphics boxes to your batch files.  There are no block  
commands included, as this is not designed to be a full featured text   
editor, however there is a command to copy one line to another.  The    
program is very easy to use and the documentation, although not really  
needed, is quite complete.                                              
                                                                        
Program Title: GBlink                                                   
Author Version: 1.4                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
gBLINK is a simple utility to blank your text screen after five minutes 
of inactivity on the keyboard.  The program also includes an onscreen   
clock which can be turned on and off from the keyboard (the clock is    
positioned in the upper right corner of the screen).  The program is    
extremely simple to install and uninstall,  and comes complete with     
documentation to help you get started.                                  
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GBLINK.DOC

{% raw %}
```

 gBLINK.COM Version 1.4 Copyright (c) 1989  g. Osborne

 This program is supplied as is and the author disclaims all
 warranties, expressed or implied, including, without limitation
 the warranties of merchantablilty and the warranties of fitness
 for any purpose.  You may copy it and distribute it provided
 the program and documentation remain together UNCHANGED.
 You may not charge for copying the program beyond
 the cost of a diskette.

 If you use this program on a routine basis, a donation
 of $10 is asked by the author.  Thank you.

 gBLINK is a ram resident utility that blanks the screen
 after a specified period of inactivity.

 To install gBLINK, simply put the command GBLINK in your AUTOEXEC.BAT file
 or type GBLINK at the DOS pompt and press  < ENTER >
 For example from C: DRIVE, C> GBLINK  < ENTER >
 From then on, when there is five minutes of inactivity at the keyboard
 gBLINK will blank the screen until you press a key.

 The period of inactivity can be changed with a command line option which
 specifies the time in minutes, from a minimum of 5 minutes, to a maximum
 of 60 minutes. For example from C: DRIVE, C> GBLINK 59  < ENTER >
 Will install gBLINK ( if not already installed ) and set the inactivity
 time to 59 minutes.

 You can Uninstall gBLINK:
 To uninstall gBLINK enter "quit" as the first command line parameter
 For example from C: DRIVE, C> GBLINK QUIT  < ENTER >
 Will uninstall gBLINK ( if possible ) ??

 ?? There are some ( other ) rare programs ( applications )that also
 completely take the keyboard from the BIOS, in which case
 gBLINK might not be able to find out when keystrokes occur.
 In this case, gBLINK will blank your display, even though you have been
 typing away for the last five minutes in the application.
 For such applications, you should not install gBLINK prior to using them
 or if gBLINK is already installed you should uninstall gBLINK before
 using ( running ) such applications or
 installing gBLINK last might remedy the inconvenience.

 * You can check if gBLINK is able to read keystrokes by
 * blanking the screen manually.
 * If you are able to manually blank the screen, gBLINK IS able
 * to find out when keystrokes occur .  ( good )

 To manually blank the screen,
 Press Left Shift & Tab keys  < SIMULTANEOUSLY >
 To restore the screen, Press any key.

 gBLINK also has a built_in clock.
 To turn ON  the clock, Press Left Shift & 'C' keys  < SIMULTANEOUSLY >
 To turn OFF the clock, Press Left Shift & Esc keys  < SIMULTANEOUSLY >
 To SET  the clock, simply use DOS time command.
 For example from C: DRIVE, C> TIME  < ENTER >
 Will produce:-->     Current time is  9:28:06.49  ( example time )
 Type in time:-->     Enter new time: 10:35:00     < ENTER >
 Will change the clock to read 10:35:00



 Please feel free to send any problems with, or comments on gBLINK
 To:
 Glen Osborne
 5989 South Deshon Court
 Lithonia, Georgia 30058

 If you have an idea for a short utility,
 Please let me know.
 I might try to write same. ??
 Thanks for trying gBLINK

 02/21/90.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2029

     Volume in drive A is #2029 v1.1
     Directory of A:\

    GBLINK   COM      8550   2-21-90   2:21p
    GBLINK   DOC      3135   2-21-90   2:21p
    FILE2029 TXT      3997   3-13-90   5:27p
    NC       INI       184   3-13-90   4:34p
    CC312    ZIP     33677   6-05-89   9:28p
    FD212    ZIP     36934   6-06-89  12:24p
    PKUNZIP  EXE     18208   3-06-89
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1079   1-16-90  11:45a
            9 file(s)     105802 bytes
                          250880 bytes free

![PC-SIG Library Disk #2029]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/2000-2999/DISK2029/DISK2029.jpg)
