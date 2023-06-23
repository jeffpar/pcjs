---
layout: page
title: "PC-SIG Diskette Library (Disk #753)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0753/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0753"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SQUEEZE PRINT"

    If you're a programmer, or a writer, or anyone with a long, text-heavy
    document, SQUEEZE PRINT can help you print it in a minimum amount of
    space -- saving you paper and money.  It reads any standard ASCII text
    file and prints it without the blank lines or form feeds.  In other
    words, your document will look like one solid block of single-spaced
    text.  There are six choices of printing format, from plain 80 columns
    to 160 columns of closely spaced superscript characters.
    
    SQUEEZE PRINT is menu-driven and extremely user friendly, working
    with most dot matrix printers and some daisy type printers (only in
    one mode).  SQUEEZE PRINT comes with an option to change the printer
    codes to match your own printer.  A real paper saver!
    
    How to Start:  Type GO (press enter).
    
    System Requirements:  None.
    
    File Descriptions:
    
    GO       EXE  Introductory to SQUEEZE PRINT.
    SQUEEZE  DOC  Documentation for SQUEEZE PRINT.
    QUICK    EXE  Simplified SQUEEZE PRINT.
    SQUEEZE  EXE  SQUEEZE PRINT executable program.
    File Descriptions:
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES753.TXT

{% raw %}
```
Disk No #753
Program Title: Squeeze Print
PC-SIG version 1
 
Squeeze Print reads any standard ASCII text file, and prints it without any
blank lines or form feeds. There are six choices of printing format, from
plain 80 columns, to 160 columns of closely spaced superscript characters.
The program is menu driven and quite 'User friendly'.  There is an option to
change the printer codes to match your own printer.  The program will work
(according to the manual) with most dot matrix printers and some "daisy" type
printers (only in one mode) and requires (only) 192 K of memory and one disk
drive
 
Usage: Printer Utility
 
System Requirements: 192K of memory and one disk drive.
 
How to Start: Insert disk and type GO (press enter)
 
File Descriptions:
 
GO       EXE  Introductory to Squeeze Print
SQUEEZE  EXE  Squeeze Print executable program
QUICK    EXE  Simplified Squeeze Print
SQUEEZE  DOC  Documentation for Squeeze Print
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## FILESXXX.TXT

{% raw %}
```
Disk No 753
 
Program Title:
 
PC-SIG version
 
Squeeze Print reads any standard ASCII text file, and prints it without any
blank lines or form feeds. There are six choices of printing format, from
plain 80 columns, to 160 columns of closely spaced superscript characters.
The program is menu driven and quite 'User friendly'.  There is an option to
change the printer codes to match your own printer.  The program will work
(according to the manual) with most dot matrix printers and some "daisy" type
printers (only in one mode) and requires (only) 192 K of memory and one disk
drive
 
Usage: Printer Utility
 
System Requirements: 192K of memory and one disk drive.
 
How to Start: Insert disk and type GO (press enter)
 
File Descriptions:
 
GO       EXE  Introductory to Squeeze Print
SQUEEZE  EXE  Squeeze Print executable program
QUICK    EXE  Simplified Squeeze Print
SQUEEZE  DOC  Documentation for Squeeze Print
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## SQUEEZE.DOC

{% raw %}
```
-------------------------- S Q U E E Z E   P R I N T -------------------------

-------------------- COPYRIGHT (C) 1987 BY PAUL T. DAWSON --------------------

------------------ P.O. BOX 888, WAITSFIELD, VERMONT, 05673 ------------------

INTRODUCTION

        Squeeze Print was designed to help you save paper when printing
        standard ASCII text files. If you have ever printed out a file,
        and found out too late that it was full of form feeds, blank lines,
        and not much text, then you will understand the need for this program.

        Squeeze Print reads any ASCII text file, and prints it on your
        printer, or screen, without any blank lines or form feeds. Every
        character of text will be printed - nothing except empty space is
        removed. There are six choices of printing format, from plain 80
        columns, to 160 columns of extremely small "superscript" characters.

        Many printers can't print graphics characters - below ASCII 32, or
        above ASCII 126 - therefore, these characters are converted to
        periods (.) by Squeeze Print.

SYSTEM REQUIREMENTS

        The program should run on almost any "compatible" computer with at
        least 192K, one disk drive, and any type of monitor. Most of the
        print options require a dot matrix printer. However, there is one
        option (80 column full height) that should work with any printer.

THE "GO.EXE" PROGRAM

        There is an program on the disk called "GO.EXE", which is simply an
        introduction to Squeeze Print. Start up your computer as usual,
        then at the DOS prompt (A: or B:), put the Squeeze Print disk in the
        active drive (A or B), and type the word "GO" (without the quote
        marks, of course), then press the RETURN key. When the program is
        loaded, the menu will be displayed.

        The first choice is to run the Squeeze Print program.

        The second choice is to read the documentation on your screen.

        Option three will print the documentation on your printer.

        The fourth choice will print a sample page on your printer, using all
        five Squeeze Print formats. It is recommended that you print this
        sample page, so that you will see what the different formats look
        like when printed on your printer.

        Option five will display one screen of information for advanced users.

        The sixth option lets you exit back to DOS.

        It is important to remember that the GO.EXE program is strictly
        optional. Once you are familiar with Squeeze Print, you should just
        run SQUEEZE.EXE by itself, as explained below.

HOW TO START SQUEEZE PRINT

        Start up your computer as usual, then at the DOS prompt (A: or B:),
        put the Squeeze Print disk in the active drive (A or B), and type
        the word "SQUEEZE" (without the quote marks, of course), then
        press the RETURN key.

FIRST THINGS FIRST

        When the program is loaded, the title screen will be displayed.
        Press the spacebar to see the main menu.

THE MAIN MENU

        As you will see, there are eight choices on the main menu. Choose
        one by pressing any of the number keys (NOT the function keys).
        No matter where you jump to, you will always be able to get back
        to the main menu.

1 - LOOK AT THE HELP SCREEN

        The help screen just displays a list of the four mandatory steps
        for using Squeeze Print, and also the three optional steps.

2 - CHOOSE ONE OF THE SIX PRINTING FORMATS

        This option will display a list of the six printing formats, labelled
        A to F. Press the key that's next to your choice. The main menu will
        reappear, with the selected format displayed in the lower left corner.

3 - INPUT THE NAME OF THE TEXT FILE TO BE PRINTED

        Type in the complete filename and extension of the file to be
        printed. If the file is not on the active drive, include the drive
        letter, for example "C:SAMPLE.TXT", without the quote marks, of
        course. If you press RETURN by itself, the main menu will return,
        and the old filename, if any, will not be changed.

4 - PRINT THE SELECTED FILE IN THE SELECTED FORMAT

        When you select this option, the program will ask if everything is
        ready to print. Press N to return to the main menu, or Y to continue.
        Hopefully, the text file will be found and printed without problems.

        While the program is printing the file, the only way to stop your
        printer is to just turn it off. Your computer will keep running, and
        the program will jump to the error screen. You can ignore this, and
        press RETURN to get back to the main menu. When you want to print
        again, just turn your printer back on. This method of stopping the
        printer should be instantly effective with any type of printer.

        If the program can't find the text file, the error screen will
        display "File not found". Check the disk directory to verify that
        the file exists, and retype the filename if necessary. Don't forget
        to include the drive letter and colon (A: B: C:) if the text file
        is not on the active drive.

5 - LOOK AT INFORMATION ON THE SIX PRINTING FORMATS

        This option will display one screen of information. Press RETURN to
        return to the main menu.

        If you are not familiar with the six formats, it is suggested that
        you print out the sample page from the GO.EXE program.

6 - LOOK AT ANY DISK DIRECTORY

        This option, obviously, lets you look at the directory of any disk
        drive. After the list of files is displayed, press RETURN to return
        to the main menu.

        If you press a letter (A or B or C) of a nonexistent drive, the
        program will jump to the error screen.

7 - INPUT OTHER PRINTER CODES

        Here is the part of the program where you will have to be very
        careful. Your computer is capable of sending special codes out
        to your printer. These codes tell it to do many different things,
        from selecting typestyles, to beeping the beeper. Squeeze Print
        "knows" six of these codes. For example, Squeeze Print knows
        that "CHR$(27);CHR$(77);" will turn on elite type. Now, if the
        six codes are the correct codes for YOUR printer, then you don't
        need to change them. However, if you try the program, and your
        printer does not respond properly, then you have some work to do.

        First, find your printer manual. Next, select option 7 from the
        main menu. You will see some instructions, and the name of the
        first code (Reset printer). Look in your manual for the code that
        will reset your printer. If your manual says "11,22,33", then
        press "11", then RETURN, then "22", then RETURN, then "33", then
        RETURN. Just continue for all six selections, and you are done.
        The program will return to the main menu.

        If you want to leave early (before all six selections),
        input a "Q" to hop out of the loop and return to the main menu.

        If the three numbers for any selection are correct, just press
        RETURN three times to accept the default values.

        If your printer only needs one or two numbers for any selection,
        you MUST enter the numeral "0" (ZERO) for the second and/or
        third numbers. For example, if your printer wants "22" to turn
        on superscript, you must enter "22", then RETURN, then "0",
        then RETURN, then "0", then RETURN.

8 - QUIT TO DOS

        This is the easiest option of all. You will be given one last
        chance to stay in the program, otherwise, it's back to DOS!

THE ERROR SCREEN

        Squeeze Print has only one catch-all error screen. You will always
        see this if you turn off the printer while printing, or leave
        your disk drive door open, or input a bad filename. When you see
        the error screen, hopefully you will be able to figure out what
        went wrong. Press RETURN to get back to the main menu.

        If you run into a totally mysterious problem, I would appreciate
        it if you wrote to me about it. Describe the events leading up
        to the error, and (most importantly) include the error line and
        error number, which are displayed on the error screen. Thank you.

APOLOGY DEPARTMENT

        I would like to apologize to all of the fine people who have
        spent countless hours preparing and formatting all types of
        documents, unaware that said documents were destined to be
        Squeeze Printed in a totally alien format.

THE "QUICK.EXE" PROGRAM

        There is a program on the disk called "QUICK.EXE", which is the fast
        version of Squeeze Print. This program just asks for a filename and
        a format type, and then prints out the file. There is nothing fancy
        about this version, however, the printed output will be identical to
        the output from SQUEEZE.EXE.

MISCELLANEOUS

        Squeeze Print is distributed as user supported software. This means
        that you are encouraged to try it out, copy it, and share it
        with friends, relatives, people you don't know, etc. Please
        do not modify the program, or this document, in any way, shape
        or form. Also, please try to keep the four related files together.
        They are - GO.EXE, SQUEEZE.EXE, QUICK.EXE, and SQUEEZE.DOC.

        If you have any questions, comments, error reports, or spare
        cash, please send a note to the author at the address below.
        All correspondence that arrives with a SASE and a monetary
        donation will be answered. Thank you.

-------------------------- S Q U E E Z E   P R I N T -------------------------

-------------------- COPYRIGHT (C) 1987 BY PAUL T. DAWSON --------------------

------------------ P.O. BOX 888, WAITSFIELD, VERMONT, 05673 ------------------


 BY PAUL T. DAWSON --------------------

------------------ P.O. BOX 888, WAITSFIELD, VERM
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0753

     Volume in drive A has no label
     Directory of A:\

    FILES753 TXT      1058   5-19-87   1:40p
    FILESXXX TXT      1047   5-15-87  11:14a
    GO       EXE     69144   5-15-87  11:14a
    QUICK    EXE     44906   5-15-87  11:14a
    SQUEEZE  DOC     10368   5-15-87  11:14a
    SQUEEZE  EXE     69802   5-15-87  11:14a
            6 file(s)     196325 bytes
                          121856 bytes free
