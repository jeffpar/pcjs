---
layout: page
title: "PC-SIG Diskette Library (Disk #2244)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2244/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2244"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QUICK CALCULATORS"

    Get four memory-resident calculators for the price of one with QUICK
    CALCULATORS: a powerful algebraic calculator, a programmer's
    calculator, a scientific calculator, and a financial calculator! Get
    them all in one program in as little as 10K of RAM with programmable
    hot keys.
    
    The programmer's calculator allows you to enter values in either
    binary, octal, decimal, or hex formats and automatically convert these
    values to the other number systems.
    
    The scientific calculator has access to 31 functions such as inverse
    tangent, hyperbolic cosine and sine of an angle.
    
    All of the calculators have on-line help and a scrolling tape that can
    hold up to 500 entries, which can be saved when you exit the program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2244.TXT

{% raw %}
```
Disk No: 2244                                                           
Disk Title: QUICK Calculators                                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: Quick Calculators                                        
Author Version: 1.0                                                     
Author Registration: $19.95                                             
Special Requirements: Hard drive recommended.                           
                                                                        
QUICK CALCULATORS has full featured algebraic calculator, a             
programmer's calculator, a scientific calculator, and a financial       
calculator, all in one memory resident program which can be made to     
occupy as little as 10K of RAM and has programmable hot keys !          
                                                                        
The programmer's calculator allows you to enter values in either binary,
octal, decimal, or hex formats, and automatically converts these values 
to the other number systems.                                            
                                                                        
Using the scientific calculator you have access to 31 functions ,       
including; inverse tanget, hyperbolic cosine, sine of an angle, and many
more.                                                                   
                                                                        
All the calculators on-line help, and a scrolling tape that can hold up 
to 500 entries that can be saved when you exit the program.             
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║         <<<<  PC-SIG Disk #2244 QUICK CALCULATORS  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To print the documentation, type: COPY QCALC.DOC PRN (press enter)     ║
║                                                                         ║
║  To start the program, type: QCALC (press enter)                        ║
║                                                                         ║
║  To make the program memory resident, type: QCALC /M                    ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## QCALC.DOC

{% raw %}
```









                             QUICK Calculators version 1.0
                                    Users Guide










       (C)Copyright Phil Faircloth Software, 1989, 1990
       All rights reserved





       PHIL FAIRCLOTH SOFTWARE
       1416 Caracara
       New Bern, NC 28560




                                                                Page 1

       INTRODUCTION

       QUICK Calculators are four memory resident calculators in one program.
       There is an algebraic calculator, financial calculator, prograammer's
       calculator and a scientific calculator.

       Here are some of the features of QUICK Calculators:

       - Program defaults to disk swapping so that only 10K of the program 
         remains resident in memory, but allows you to make the entire program
         memory resident.
       - Allows you to choose your own HOT KEY to pop up the program.  


       ALGEBRAIC Calculator features:

       - Memory resident 4 function calculator (add, subtract, multiply and
         divide).
       - Memory Store, Memory Clear, Memory Recall and Add, Subtract,
         Multiply and Divide to memory.
       - Scrolling TAPE feature which holds up to 500 entries and allows
         you to send contents to the printer.
       - Make number negative feature
       - Percentage key
       - Clear last entry key
       - Edit Calculator Colors
       - Help Screens                            
       - Move calculator location


       PROGRAMMER's Calculator features:

       - Enter values in either DECIMAL, BINARY, HEXADECIMAL, or OCTAL
       - When you enter in your values under one of the above numbering
         systems, values are automatically converted to the other 3
         numbering systems when you press the ENTER key.
       - Help Screens
       - Move calculator location
       - Change calculator colors.



       SYSTEM REQUIREMENTS

       QUICK Calculators runs on an IBM PC or compatible system with the 
       following minimum configuration:

       - 192K of memory
       - MSDOS or PCDOS operating system (DOS 2.0+)
         For disk swapping feature you need (DOS 3.0+)
       - A monochrome or color computer monitor with 80 column display.
         Graphics boards are not necessary.
       - A hard disk drive is recommended.



                                                                Page 2


       INSTALLING QUICK Calculators

       First, make a backup copy of QUICK Calculators on another floppy disk.

       Insert QUICK Calculators disk in drive A

       If using a hard disk, you may want to create a separate
       directory for QUICK Calculators type:

                               md c:\quick
                               cd c:\quick
                               copy a:\*.* c:\quick

       or just place QUICK Calculators in the root directory.

                               cd c:\
                               copy a:\*.*  c:\





       RUNNING QUICK Calculators


       Change to the directory that contains QUICK Calculators and type

                                qcalc.exe 

       You may specify options on the command line that allow you to
       configure QUICK Calculators differently but the above entry will
       install QUICK Calculators using it's default configuration.




                                                                Page 3


       DEFAULT CONFIGURATION OF QUICK Calculators


        HOT KEY (key combination which calls QUICK Calculators)
          ALT CTRL C keys (hold down the ALT and CTRL keys and press C)

        DISK SWAPPING
          By default QUICK Calculators leaves a 10K kernel of the program 
          in memory and the rest of the program is stored on the disk.  This
          is a great thing if you are hard pressed for memory!  There is a 
          very slight time delay when swapping the rest of QUICK Calculators
          into memory, but you will hardly notice it at all.  Trust me, this
          is the best way to go! 

          You will need DOS 3.0 or greater installed on your machine for disk
          swapping to work.  Also, if DOS is busy when you use the HOT KEY
          combination, the program will wait for 2 seconds to see if the DOS 
          busy flag clears.  If it does not clear, the program will "buzz" the
          speaker and won't pop up the program.

          There will also be two files created in the directory where QCALC.EXE
          is located. (QC00 & QC01)  Do not erase these files!  If you try to
          pop up the program and these files have been altered or deleted, you
          get the following error message:
             
               "Error during swap with expanded memory or disk file."

          Also make sure that there is at least 314K of free disk space on your
          disk since both QC00 & QC01 are 157K each.  If not, you will not
          be able to install QUICK Calculators and some systems have needed 
          to be rebooted when this error occurs.
          

       CHANGING HOT KEY COMBINATION

          To change the HOT KEY combination enter /@key on the command line
          after QCALC.EXE.
                 COMMAND LINE                 HOT KEYS

          i.e.   QCALC.EXE /@B                ALT CTRL B
                 QCALC.EXE /@X                ALT CTRL X
                 QCALC.EXE                    ALT CTRL C (default keys)





                                                                Page 4


       MAKING ALL OF QUICK Calculators MEMORY RESIDENT

          To load all of the program into memory and not use disk swapping
          enter /M on the command line after QCALC.EXE.
                 COMMAND LINE

          i.e.   QCALC.EXE /M       

          This will use occupy more memory than when disk swapping is
          used, but it is faster than disk swapping.   


       SOME EXAMPLES
         
        COMMAND LINE
             
        QCALC.EXE         HOT KEYS are ALT CTRL C & disk swapping is used.
       
        QCALC.EXE /@H     HOT KEYS are ALT CTRL H & disk swapping is used.

        QCALC.EXE /@H/M   HOT KEYS are ALT CTRL H & disk swapping is not used.

        QCALC.EXE /M      HOT KEYS are ALT CTRL C & disk swapping is not used.

   

       You may prefer to install QUICK Calculators automatically each time the 
       computer is booted.  To do this, insert the following command(s) in the
       AUTOEXEC.BAT batch file.


                qcalc.exe [options]    or         cd c:\quick
                                                  qcalc.exe [options]

           (if qcalc is in root dir.)         (if in quick sub-directory)



       A message will be displayed announcing if QUICK Calculators was
       successfully loaded into memory and which keys are the HOT KEYS.       






                                                                Page 5


        THE MAIN MENU

        When the program is called, the main menu is displayed.  To call
        the calculator that you want, use the up and down arrow keys to 
        highlight the option and press ENTER or press the first letter of the
        option.

        F1-HELP 

        When this option is chosen, a help window will appear on the screen.
        Use the pageup/down keys to scroll through the help pages.  Pressing
        the Esc key will close the help window and return you to the Main
        Menu.         


        F2-COLORS
 
        This option will allow you to change the foreground and background 
        colors for each calculator.       

        Use the left and right arrow keys to select the value for each color.
        The TAB and SHIFT TAB keys will move you to each color.  The Esc key
        will exit this option and the changes will be automatically saved. 

           Color Values
 
           0 Black           5 Magenta         10 Bright Green
           1 Blue            6 Brown           11 Bright Cyan
           2 Green           7 Light Gray      12 Bright Red
           3 Cyan            8 Dark Gray       13 Bright Magenta
           4 Red             9 Bright Blue     14 Yellow
                                               15 White

        * Background colors can have values of 0 through 7 only.


        ESC

        This option will exit you from QUICK Calculators and return you to
        where you were when you called the program.
       




                                                                Page 6

       USING THE ALGEBRAIC Calculator

       Use the algebraic calculator the same way that you would use a normal
       calculator.  

        KEYS
        ---------------------------------------------------------------------
        0-9 .     enter a numerical value using the numerical keys and the
                  period for a decimal place.

        BACK      deletes the last digit entered.
        SPACE   
        
        D number  pressing the D key and then a number, specifies the number
                  of decimal places for the calculator to use. 
                  Default is D 2 (two decimal places)

        +         Add
        -         Subtract
        /         Divide
        *         Multiply
        =         Total or equal
        L         Clear last entry
        C         Clear calculator
        %         Calculate Percent
        M then S  Store number to memory
        M then +  Add number to memory
        M then -  Subtract number from memory
        M then /  Divide memory by number
        M then *  Multiply memory by number
        M then R  Recall number from memory 
        M then C  Clear memory

        You can scroll through the tape with the arrow, pageup/down, home and
        end keys. 

        The Esc key will return you to the Main Menu.





                                                                Page 7

        USING the ALGEBRAIC COMMAND BAR

        This is the top line on the screen and contains the following options:

         F1-Help
         Erase  
         Print 
         Move
         Quit
        
        If you want to select one of the options on the command
        bar, you must press the F10 or SPACE BAR key to highlight the
        command bar.  Now, use (the right or left arrow keys to highlight one
        of the options and then press ENTER) or (type the first capitalized 
        letter in the option name).

        To exit the command bar and return to the algebraic calculator, press
        the F10, SPACE BAR or ESC key.       

        Pressing the F1 key will automatically exit you from the algebraic
        calculator, put you on the command bar and also call the help screen
        routine.

        F1-HELP 

        When this option is chosen, a help window will appear on the screen.
        Use the pageup/down keys to scroll through the help pages.  Pressing
        the Esc key will close the help window and return you to the command
        bar.         

        ERASE

        This option will erase the tape and clear the calculator at the same
        time.

        PRINT 
 
        This option will send the contents of the tape to the printer along
        with the date and time.  Make sure that your printer is on line
        before executing this option.

        MOVE CALCULATOR

        When this option is chosen, use the arrow keys to position the 
        calculator on the screen.  The up and down arrow keys allow you
        to move the calculator up or down one line only.  This is because
        the tape adds to the height of the calculator.

        Press the Esc key to exit this option and return to the command
        bar.  If you have made changes to the position of the calculator
        the changes will be saved automatically when you exit this option.

        QUIT

        This option will exit you from the Algebraic Calculator and return
        you to the Main Menu.



                                                                Page 8

        USING the PROGRAMMER'S Calculator

        After choosing the this option from the Main Menu you
        are ready to use the Programmer's Calculator.

        The up and down arrow keys allow you to select the numbering system
        that you want to enter a value for.  The current active numbering
        system will be highlighted.  There are 4 different numbering systems:
 
                        Symbols allowed
                        -------------------------------
           DECIMAL      0,1,2,3,4,5,6,7,8,9
           BINARY       0,1
           HEXADECIMAL  0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
           OCTAL        0,1,2,3,4,5,6,7

        Enter the value, using the allowed symbols above, for the highlighted
        number system.  When you have entered that value, press the ENTER key.
        The calculator will show you the converted value for each of the other
        three numbering systems. 

        The Esc key will return you to the Main Menu.


        PROGRAMMER'S Calculator COMMAND BAR

        The Programmer's Calculator has it's own command bar that has the
        following options:

        F1-Help
        Move
        Quit 

        If you want to select one of the options on the command bar
        you must first press the F10 or SPACE BAR key to highlight the
        command bar.  Now, use the right or left arrow keys to highlight one
        of the options and then press ENTER or type the first capitalized 
        letter in the option name.

        To exit the command bar and return to the Programmer's Calculator,
        press the F10, SPACE BAR or ESC key.       

        Pressing the F1 key will automatically exit you from the Programmer's
        Calculator, put you on the command bar and also call the help screen
        routine.






                                                                Page 9

        F1-HELP  

        When this option is chosen, a help window will appear on the screen.
        Use the pageup/down keys to scroll through the help pages.  Pressing
        the Esc key will close the help window and return you to the command
        bar.         


        MOVE CALCULATOR

        When this option is chosen, use the arrow keys to position the 
        calculator on the screen.  Press the Esc key to exit this option
        and return to the command bar.  If you have made changes to the 
        position of the calculator the changes will be saved automatically
        when you exit this option.


        QUIT

        The QUIT option will exit the programmer's calculator and display
        the Main Menu.




                                                                Page 10


        REMOVING QUICK Calculators FROM MEMORY
  
        There is a program on the QUICK Calculators disk called REMOVE.COM. 
        To remove QUICK Calculators from memory you must execute this program
        from the DOS prompt (not during a shell) by typing in the following:

            REMOVE QCALC

        After doing this, QUICK Calculators is no longer memory resident.

        IMPORTANT!  Before you remove QUICK Calculators you must first make
                    sure that this was the LAST memory resident program
                    that you have installed.  If there is a an installed
                    memory resident program loaded after QUICK Calculators
                    and you try to remove QUICK Calculators from memory, you
                    will not be successful and could get strange results.       







        QUICK Calculators is "User Supported Software"



        QUICK Calculators currently costs $19.95 plus $2.50 for shipping and
        handling and may be purchased from    PHIL FAIRCLOTH SOFTWARE
                                              1416 Caracara
                                              New Bern, NC 28560


        Why purchase QUICK Calculators?

        - You receive a CURRENT copy of the program.
        - Notification of updates and upgrades.
        - Notification of new products.




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2244

     Volume in drive A has no label
     Directory of A:\

    QCALC    DOC     16580   5-20-90   2:57p
    QCALC    EXE    167498   5-20-90   2:14p
    QORDER   FRM      1108   5-20-90   2:55p
    README            2942   5-20-90   3:00p
    REMOVE   COM       279  11-21-89  10:59a
    GO       BAT        37   6-21-90  10:39a
    GO       TXT      1079   6-22-90  11:02a
    FILE2244 TXT      2295   6-22-90  10:59a
            8 file(s)     191818 bytes
                          124928 bytes free
