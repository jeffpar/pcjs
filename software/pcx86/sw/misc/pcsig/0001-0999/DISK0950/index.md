---
layout: page
title: "PC-SIG Diskette Library (Disk #950)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0950/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0950"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOC MASTER"

    DOC MASTER is a set of utilities for printing and viewing on-disk
    documentation files.
    
    With READ, you can display a file on the screen and scroll through the
    text.  WAIT makes the printer print only single sheets at a time.  PRINT
    prints unformatted or partially-formatted ASCII text files.  PRINT also
    lets you set the left margin, specify the lines per page, print a
    selected page-range, select a header with auto page numbering, and
    select either single-sheet or continuous-feed paper.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DM.DOC

{% raw %}
```
                                   DOC MASTER
                     Copyright (c) 1987,1988 by Pat Anderson
        
        ** What is Doc Master? **
        
        Doc Master is a system of tools and strategies for printing out
        on-disk documentation files.  It consists of the following disk
        files:
        
                 READ.EXE       Read doc files on screen, page or
                                scroll through them backwards or forwards.
                 RSETUP.EXE     Configure READ's colors.
                 RSETUP.DOC     Documentation for Rsetup color configuration
                                program.
                 WAIT.COM       Print already formatted doc files on
                                single sheet paper, using DOS command
                                COPY filename.doc PRN, pauses printer at
                                formfeed character to insert new sheet.
                 PRINT.EXE      Print out any doc file, but primarily
                                useful for unformatted files or partially
                                formatted files. Allows you to set
                                left margin and lines per page, select
                                header with auto page numbering,
                                single sheet or continuous feed paper.
                 DM.DOC         This documentation file, laying out the
                                strategies for printing doc files.
                 SAMPLE1.DOC    DM.DOC as an unformatted ASCII text file.
                 SAMPLE2.DOC    DM.DOC as a partially formatted ASCII text
                                file.
                 CLEANUP.EXE    Remove control and graphics characters from
                                a text file so your printer doesn't go crazy.
                 Y.COM          Simple text editor.
        
        ** Why Doc Master? **
        
        One of the keys to the success of user-supported software is
        keeping costs down with on-disk documentation.  Unfortunately, no
        single standard has evolved for the format of on-disk documentation.
        Doc Master can help you get the on-disk file printed out neatly
        on paper so you can spend your time trying out the software instead
        of struggling with printing out the documentation.
        
        On-disk doc files can come in a variety of formats.  In an ideal
        world, everyone would use continuous feed paper and all on-disk
        doc files would be formatted to have one inch left margins and
        six and a half inch line lenths, and be divided into pages of
        fifty or fifty-five lines, with headers and page numbers.  We'll
        refer to such a doc file as one that is already formatted.
        
        You could then print out any doc file like this:
        
                      A>COPY filename.DOC PRN
        or
                      A>TYPE filename.DOC > PRN
        
        Both these commands simply send the contents of the file filename.DOC
        to the printer "as-is". In the real world, though, you frequently
        can't do this because:
        

        DM.DOC - 2

                 1)  A lot more people than user supported software
        authors apparently realize prefer to print out doc files on
        single sheet bond paper.  If the file has formfeed characters,
        the printer runs merrily on without giving you a chance to insert
        a new sheet of paper for the next page.
        
                 2) Many doc files are not divided into pages at all.
        We'll refer to such a doc file as UNFORMATTED. If you try to TYPE
        or COPY an unformatted file to your printer, the result is unsatis-
        factory whether you are using continuous feed or single sheet paper.
        
                 3)  Some doc files use blank lines to divide the text
        into pages, so even if you could stop the printer on receiving a
        formfeed character, that wouldn't work for single sheet printing
        with such files.  I call these PARTIALLY FORMATTED files.  Again,
        if you want to print on single sheet paper, you need a way to pause 
        the printer while it is printing those blank lines making up the
        bottom margin of one page and the top margin of the next.
        
        Hence, I developed Doc Master as a system to get the documentation
        printed in the minimum amount of time, regardless of what type of
        file the author provided.
        
        
        ** Assumptions **
        
        I am going to assume in this discussion that you know how to use
        DIR to view the  directory of a disk in any drive, how to change
        logged drives, how to use TYPE to view a text file, and how to
        start a .BAT, .COM or .EXE file at the DOS prompt.  If not,
        study your DOS manuals - you aren't ready to try out new software
        just yet.  I am also going to assume that you are using eight and
        a half by eleven inch paper, and your printer is set up for six 
        lines per vertical inch and ten characters per horizontal inch, 
        which are more or less standard.
        
        
        ** First Steps **
        
        Here is our approach to the doc file whenever we get a new program,
        right as soon as we have used DISKCOPY to make a backup copy of
        the disk and put the original away for safekeeping:
        
                 1) Use DIR to bring up a directory for the drive
        containing your new disk. Look for a files like GO.BAT, READ.ME
        or README.DOC. Also notice how many files have the filename
        extension of .DOC, and how large those files are.  Finally,
        notice is there are files with filename extensions of .CRN (for
        crunched) or .ARC for archived.
        
                 2)  If there is a GO.BAT file, use it!  Just type GO at
        the DOS command prompt.  The GO.BAT file should simply display a
        READ.ME file, which in turn, should give you about a screenful of

        DM.DOC - 3

        information on printing the doc file(s) and perhaps starting the
        program.
        
                 3)  If there is no GO.BAT file but there is a READ.ME,
        read it with READ.EXE.  Just type READ READ.ME. or just type READ
        and answer the filename prompt.  This file contains information 
        the program author wanted you to be aware before you started 
        using the program, and you shouldn't skip it.
        
                 4)  If there are .ARC or .CRN files, you MUST use the
        programs supplied to uncruch them to regular disk files to view them
        on the screen or print them directly.  These auxiliary programs will
        have names like ARC-E.COM or PKXARC.COM for .ARC files.  PC-Write has
        a file called FILEMAN.COM to uncrunch the doc files.
        
        
        ** BEFORE YOU PRINT - READ THE FILE **
        
        Before you print out the documentation file, read it on the 
        screen with READ.EXE.
        
        READ can be started with or without specifying the name of the
        doc file you wish to read on the command line.  If you specify
        a file name, i.e., READ DM.DOC [enter], READ will load the file.
        If you do not specify a file name on the command line, READ will
        prompt you for the name.

        READ's colors can be set with the COLORS.EXE program by Mark
        Hopkins.  All of READ's command keys can be viewed by pressing
        the F1 key for help.
        
        Your primary objective in reading the file before printing is to
        determine whether the file is already formatted, partially formatted
        or unformatted.  Look first to see whether there is a left margin on
        the screen, or whether the text starts all the way over in column
        one.  Next look for the graphics symbol for the formfeed
        character, ASCII 12 (decimal).  It looks like the medical symbol
        for female.  You can produce it on your screen so you will be
        sure to recogize it: just start BASIC, hold down the ALT key,
        enter then number 12 on the numeric keypad and then release the
        ALT key.  The formfeed character embedded in the .DOC file is
        what divides it into pages, causing a printer to advance
        continuous form paper to the top of the next page.  Finally, 
        if there are no formfeed characters, whether there are ten or 
        twelve blank lines dividing the text into pages.
        
        The file type dictates how you will print it out:
        
              1)  If there is a left margin and formfeed characters, the
        file is FULLY FORMATTED.  This kind of file usually but not always
        has headers or footers and page numbers.
        
              2)  If there is a left margin, but the file is divided into

        DM.DOC - 4

        pages with blank lines instead of formfeeds, the file is 
        PARTIALLY FORMATTED.  This kind of file likewise usually has 
        headers or footers and page numbers.
        
              3)  If there is no left margin and no formfeeds or groups of
        blank lines, the file is UNFORMATTED.
        
        Only once you have determine what kind of doc file you are dealing
        with are you ready to print it out.
        
        
        ** PRINTING FULLY FORMATTED DOC FILES **
        
        If the file is fully formatted, and you prefer to use continuous
        feed paper, simply roll the paper so the tear line is aligned
        with the printer's print head, and either switch the printer off
        and back on (a practice to be discouraged!) or issue a "top of
        form" command for your printer to establish the current position
        as the top (which, unfortunately, is not always as easy as it
        should be).  Use either COPY FILENAME.DOC PRN or TYPE FILENAME >
        PRN.  Notice the output redirection symbol (">") is used only
        with the TYPE command, not with COPY.  If you have an already
        formatted .DOC file and use continuous feed paper, you don't need
        to use the Doc Master programs.
        
        If the file is already formatted, but you prefer to use single
        sheet paper, then use WAIT.COM first.
        
        WAIT.COM is a tiny but handy "terminate but stay resident" utility
        that puts itself at the front end of the part of the operating
        system that runs the printer.  It checks each character sent to
        the printer, and if it is any character except a formfeed, it just
        passes it along to be printed.  When it receives a formfeed character,
        though,  WAIT just sits there until you press any key, and then
        returns for the next character without passing the formfeed through
        to the printer.  To use this program, just type WAIT at the DOS prompt
        and then use COPY or TYPE to print the file.  Since WAIT stays
        resident in memory, you'll have to reboot your computer to get
        rid of it - but if you use single sheets exclusively, you might
        want to put it in your AUTOEXEC.BAT file.
        
        
        ** PRINTING PARTIALLY FORMATTED OR UNFORMATTED DOC FILES **
        
        If the doc file is unformatted, you will want to use PRINT.COM to
        print it.  If the file is partially formatted, and you want to 
        use continuous feed paper, simply use TYPE or COPY, as you would 
        for a fully formatted file.  If the file is partially formatted, 
        and you want to use single sheets, use PRINT, but be sure you
        follow the instructions below.
        
        You can either start PRINT.COM with the name of the file to
        print on the command line (i.e., PRINT filename.DOC) or specify

        DM.DOC - 5

        the filename at a program prompt.  To avoid any confusion with
        the MS-DOS utility Print, you might want to change the name of
        PRINT.EXE with the MS-DOS Rename command to PRT.EXE or some other
        appropriate name.
        
        Be sure your printer is ready and you have enough paper before 
        you start PRINT.EXE.
        
        PRINT has defaults, that is, format values that it will use unless
        you change them:
        
           1)  Continuous feed paper is assumed (but WAIT.COM will work
        with PRINT.EXE, so the printer will pause even if continuous feed
        paper is selected if WAIT has been installed).
           2)  Printing will be single-spaced.
           3)  There will be three spaces added to each line as a left
        margin.
           4)  There will be fifty-five lines printed per page.
           5)  There will be a header line on the second and subsequent 
        pages containing the file name and the page number.
        
        If these default values are acceptable, just press Ctrl-Enter to
        use the default values. If you want to change any of them, use
        the arrow keys to move from field to field to set the desired
        values.   You may (but don't have to) use the defaults with
        unformatted files, but you CANNOT use the defaults with partially 
        formatted files.  For unformatted files, position the paper where 
        you want the first line of text to be printed, not at the top edge 
        of the sheet or the tear line.
        
        Printing partially formatted files on cut sheets requires printing 66
        lines, pausing the printer and then resuming.  Because the top 
        margin is blank lines, you have to insert the paper so the top of 
        the page is aligned with the printhead, rather than positioning the 
        paper where the first line of text should print, which invites 
        jamming (at least on my RX-80); be careful.
        
        With a partially formatted file that you want to print on cut 
        sheets, be sure you do NOT select the defaults.  PRINT.EXE will
        pause when it has printed the number of lines you specified or 66,
        whichever is reached first, so choose cut sheets, a left margin of 0,
        67 lines per page and no header.  Partially formatted files already
        have a left margin, and usually have a header. PRINT will stop when
        the 66 lines have been printed so you can insert a new sheet of paper.
        
        After you have either accepted the defaults or selected new 
        format values, printing will begin.  You can suspend printing at 
        any time with the <Esc> key, and then choose either to abort or
        resume printing.
        
        

        DM.DOC - 6

        ** Bugs, Suggestions, Comments **
        
        I have tested these programs extensively, and not encountered any 
        known bugs, but there is a law that states "There is always one 
        more bug." If you find a bug, or if you have a suggestion or comment,
        I would love to hear from you.  Please write, or contact me on my 
        BBS, the Snoqualmie Valley Towne Crier, (206) 222-6224, 24 hours 
        per day, 300/1200 baud, 7/1/E or 8/1/N.
        
        
        ** Doc Master is USER SUPPORTED **
        
        Doc Master is itself user supported.  If you find this package
        useful, please register it.  The suggested registration fee is
        $20.00, which is $10.00 for each of the two shareware programs.
        Look at this file and the public domain WAIT.COM as a "bonus"!

        Registered users will receive a disk with the latest versions of the
        Doc Master programs and any other new programs by yours truly.
        
        Doc Master is copyrighted, but a limited license is hereby
        granted to copy and distribute the compiled or assembled programs 
        and documentation (but not the source code) for any non-commercial
        purpose, so long as it is not altered in any way, and all files are
        included.  User groups and user-supported software libraries may
        charge a reasonable fee for copying and distribution, not
        exceeding $10.00.
        
        All of the source files for these programs were created with Sammy
        Mitchell's Qedit.  WAIT.COM was assembled with Erik Isaacson's A86
        assembler.  These are not only two of the finest pieces of 
        shareware, but also simply two of the finest pieces of software I 
        have had the pleasure to use.  These programs deserve your support.
        
        PRINT.EXE and READ.EXE were compiled using Borland International's
        Turbo Pascal 5.0, and make liberal use of R.D. Ainsbury's TechnoJock
        Turbo Toolkit, and Turbo Power's Turbo Professional 5.0, both
        excellent products.



        
                           Pat Anderson
                           5420 - 324th Pl. S.E.
                           Fall City, WA 98024
        
        
        
        
        
        
        
        

```
{% endraw %}

## FILE0950.TXT

{% raw %}
```
Disk No:  950                                                           
Disk Title: Doc Master                                                  
PC-SIG Version: S2.1                                                    
                                                                        
Program Title: Doc Master                                               
Author Version: 1.4                                                     
Author Registration: $10.00                                             
Special Requirements: A printer.                                        
                                                                        
DOC MASTER is a set of utilities for printing and viewing on-disk       
documentation files.                                                    
                                                                        
With READ, you can display a file on the screen and scroll through the  
text.  WAIT makes the printer print only single sheets at a time.  PRINT
prints unformatted or partially-formatted ASCII text files.  PRINT also 
lets you set the left margin, specify the lines per page, print a       
selected page-range, select a header with auto page numbering, and      
select either single-sheet or continuous-feed paper.                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## RSETUP.DOC

{% raw %}
```
 




                                   RSETUP V1.0
                             (c) 1988 By Mark Hopkins

                             Color set-up utility for
                                    READ V2.0
                           (c) 1987, 88 By Pat Anderson

        What is RSETUP?
             RSETUP is an easy-to-use utility for creating or changing
        the color configuration file for the READ Ascii File Text Reader
        Version 2.0 By Mr. Pat Anderson.

        Note: RSETUP will ONLY work with VERSION 2.0 or higher of READ!!

        Usage:
             RSETUP is a stand alone program that is run directly from the
             DOS command line by simply entering:  RSETUP <return>

        Monochrome Systems:
             RSETUP will NOT run on a monochrome system.  Monochrome
             systems will not benefit from RSETUP.  If the system is
             detected as being monochrome, i.e. no color card, then READ
             will set the default colors as follows:

                        Text Foreground - White
                        Text Background - Black

                        Status Line Foreground - Black
                        Status Line Background - White

                        Help Screen Foreground - Black
                        Help Screen Background - White

                        Pop-up Windows Foreground - Black
                        Pop-up Windows Background - White

        Color Systems:
             READ begins by looking for the file READ.CFG.  This is the
             color configuration file!  If it is found, READ proceeds to
             retrieve the settings and configure the colors.  READ.CFG
             should be kept in the same directory as READ.EXE.  If READ.CFG
             is not found, READ starts with a set of default colors as
             follows:

                        Text Foreground - White
                        Text Background - Blue

                        Status Line Foreground - White
                        Status Line Background - Red





                                      -1-











                        Help Screen Foreground - Red
                        Help Screen Background - White

                        Pop-up Windows Foreground - Black
                        Pop-up Windows Background - Green

             Believe it or not, some people won't like my choice of
        defaults!!  This is the whole idea behind RSETUP.  So, now on to
        the fun stuff...

        Using RSETUP:

             RSETUP was designed to be as user friendly as possible.  All
        selections are made from menus.

             There is a sample color box at the bottom of the screen.
        Every time a color change is made, the box is updated to reflect
        the changes.  RSETUP will start by getting the current colors from
        the READ.CFG file.  If it can't find the file, the sample box will
        be black and white and a new READ.CFG will be created when you
        SAVE.

             The first menu displayed allows you to choose which colors you
        would like to change.  The next menu allows you to select the
        foreground color for the selection from the first menu.  The next
        menu allows you to select the background color for the area chosen
        in the first menu.  You MUST choose a color from each color menu.
        If you wish to change only one color, either the foreground or
        background, simply choose the current color for the one you don't
        want to change.  This is actually just re-choosing the same color.

             After both a foreground and background color have been chosen,
        the sample box is updated to show you what the screen will look like
        while using READ.

             When you are satisfied with the colors, press <ESC>ape from
        the main menu.  You will be asked if you want to save the changes.
        If, and only if, you select "Y" will the changes be saved.
        Otherwise, the colors will remain the same as before you started
        the session with RSETUP.

             RSETUP.EXE should be kept in the same directory as READ.EXE
        and READ.CFG.  This way, when READ.CFG is created or updated,
        READ.EXE will have immediate access to it.

             That's it!  This document will probably be about 99%
        uneccessary, considering the ease of use incorporated into RSETUP.
        It was written mostly as an exercise for myself.






                                      -2-











             PLEASE send comments and suggestions about RSETUP and color
        implementation in READ to:

                         Mark Hopkins
                         419 Main Avenue South #2
                         North Bend,  WA   98045


             I can also be reached on Pat Anderson's BBS:

             The Snoqualmie Valley Towne Crier: (206) 222-6224

                           Opus Matrix 343/108.11



             RSETUP is Freeware.  No monetary donation or support is even
        suggested.  You may distribute it freely (preferrably with READ -
        V2.0).  This notice applies ONLY to RSETUP.EXE V1.0.

        Please contribute to the continued support of READ to:

                         Mr. Pat Anderson
                         5420 324th Place S.E.
                         Fall City, WA  98024



             Even if you don't have a comment on RSETUP, drop me a note to
        let me know that you've used it.  Any correspondence will be
        appreciated!! Enjoy!


             One more thing, RSETUP is dedicated to my beautiful wife,
        Elizabeth Hopkins, who's undying patience, support, and love make
        all my dreams realities!!



                                        Mark Hopkins

                                          06/29/88













                                      -3-






```
{% endraw %}

## SAMPLE1.DOC

{% raw %}
```
                           DOC MASTER
               Copyright (c) 1987 by Pat Anderson

** What is Doc Master? **

Doc Master is a system of tools and strategies for printing out
on-disk documentation files.  It consists of the following disk
files:

         READ.EXE       Read doc files on screen, page or
                        scroll through them backwards or
                        forwards.
         COLORS.EXE     Configure READ's colors.
         WAIT.COM       Print already formatted doc files on
                        single sheet paper, using DOS command
                        COPY filename.doc PRN, pauses printer
                        at formfeed character to insert new
                        sheet.
         PRINT.COM      Print out any doc file, but primarily
                        useful for unformatted files or partially
                        formatted files. Allows you to set
                        left margin and lines per page, select
                        header with auto page numbering,
                        single sheet or continuous feed paper.
         DM.DOC         This documentation file, laying out the
                        strategies for printing doc files.
         SAMPLE1.DOC    DM.DOC as an unformatted ASCII text file.
         SAMPLE2.DOC    DM.DOC as a partially formatted ASCII text
                        file.

** Why Doc Master? **

One of the keys to the success of user-supported software is
keeping costs down with on-disk documentation.  Unfortunately, no
single standard has evolved for the format of on-disk documentation.
Doc Master can help you get the on-disk file printed out neatly
on paper so you can spend your time trying out the software instead
of struggling with printing out the documentation.

On-disk doc files can come in a variety of formats.  In an ideal
world, everyone would use continuous feed paper and all on-disk
doc files would be formatted to have one inch left margins and
six and a half inch line lenths, and be divided into pages of
fifty or fifty-five lines, with headers and page numbers.  We'll
refer to such a doc file as one that is already formatted.

You could then print out any doc file like this:

              A>COPY filename.DOC PRN
or
              A>TYPE filename.DOC > PRN

Both these commands simply send the contents of the file filename.DOC
to the printer "as-is". In the real world, though, you frequently
can't do this because:

         1)  A lot more people than user supported software
authors apparently realize prefer to print out doc files on
single sheet bond paper.  If the file has formfeed characters,
the printer runs merrily on without giving you a chance to insert
a new sheet of paper for the next page.

         2) Many doc files are not divided into pages at all.
We'll refer to such a doc file as UNFORMATTED. If you try to TYPE
or COPY an unformatted file to your printer, the result is unsatis-
factory whether you are using continuous feed or single sheet paper.

         3)  Some doc files use blank lines to divide the text
into pages, so even if you could stop the printer on receiving a
formfeed character, that wouldn't work for single sheet printing
with such files.  I call these PARTIALLY FORMATTED files.  Again,
if you want to print on single sheet paper, you need a way to pause 
the printer while it is printing those blank lines making up the
bottom margin of one page and the top margin of the next.

Hence, I developed Doc Master as a system to get the documentation
printed in the minimum amount of time, regardless of what type of
file the author provided.


** Assumptions **

I am going to assume in this discussion that you know how to use
DIR to view the  directory of a disk in any drive, how to change
logged drives, how to use TYPE to view a text file, and how to
start a .BAT, .COM or .EXE file at the DOS prompt.  If not,
study your DOS manuals - you aren't ready to try out new software
just yet.  I am also going to assume that you are using eight and
a half by eleven inch paper, and your printer is set up for six 
lines per vertical inch and ten characters per horizontal inch, 
which are more or less standard.


** First Steps **

Here is our approach to the doc file whenever we get a new program,
right as soon as we have used DISKCOPY to make a backup copy of
the disk and put the original away for safekeeping:

         1) Use DIR to bring up a directory for the drive
containing your new disk . Look for a files like GO.BAT, READ.ME
or README.DOC. Also notice how many files have the filename
extension of .DOC, and how large those files are.  Finally,
notice is there are files with filename extensions of .CRN (for
crunched) or .ARC for archived.

         2)  If there is a GO.BAT file, use it!  Just type GO at
the DOS command prompt.  The GO.BAT file should simply display a
READ.ME file, which in turn, should give you about a screenful of
information on printing the doc file(s) and perhaps starting the
program.

         3)  If there is no GO.BAT file but there is a READ.ME,
read it with READ.EXE.  Just type READ READ.ME. or just type READ
and answer the filename prompt.  This file contains information 
the program author wanted you to be aware before you started 
using the program, and you shouldn't skip it.

         4)  If there are .ARC or .CRN files, you MUST use the
programs supplied to uncruch them to regular disk files to view them
on the screen or print them directly.  These auxiliary programs will
have names like ARC-E.COM or PKXARC.COM for .ARC files.  PC-Write has
a file called FILEMAN.COM to uncrunch the doc files.


** BEFORE YOU PRINT - READ THE FILE **

Before you print out the documentation file, read it on the 
screen with READ.EXE.

READ can be started with or without specifying the name of the
doc file you wish to read on the command line.  If you specify
a file name, i.e., READ DM.DOC [enter], READ will load the file.
If you do not specify a file name on the command line, READ will
prompt you for the name.

READ's colors can be set with the COLORS.EXE program by Mark
Hopkins.  All of READ's command keys can be viewed by pressing
the F1 key for help.

Your primary objective in reading the file before printing is to
determine whether the file is already formatted, partially formatted
or unformatted.  Look first to see whether there is a left margin on
the screen, or whether the text starts all the way over in column
one.  Next look for the graphics symbol for the formfeed
character, ASCII 12 (decimal).  It looks like the medical symbol
for female.  You can produce it on your screen so you will be
sure to recogize it: just start BASIC, hold down the ALT key,
enter then number 12 on the numeric keypad and then release the
ALT key.  The formfeed character embedded in the .DOC file is
what divides it into pages, causing a printer to advance
continuous form paper to the top of the next page.  Finally, 
if there are no formfeed characters, whether there are ten or 
twelve blank lines dividing the text into pages.

The file type dictates how you will print it out:

      1)  If there is a left margin and formfeed characters, the
file is FULLY FORMATTED.  This kind of file usually but not always
has headers or footers and page numbers.

      2)  If there is a left margin, but the file is divided into
pages with blank lines instead of formfeeds, the file is 
PARTIALLY FORMATTED.  This kind of file likewise usually has 
headers or footers and page numbers.

      3)  If there is no left margin and no formfeeds or groups of
blank lines, the file is UNFORMATTED.

Only once you have determine what kind of doc file you are dealing
with are you ready to print it out.


** PRINTING FULLY FORMATTED DOC FILES **

If the file is fully formatted, and you prefer to use continuous
feed paper, simply roll the paper so the tear line is aligned
with the printer's print head, and either switch the printer off
and back on (a practice to be discouraged!) or issue a "top of
form" command for your printer to establish the current position
as the top (which, unfortuantely, is not always as easy as it
should be).  Use either COPY FILENAME.DOC PRN or TYPE FILENAME >
PRN.  Notice the output redirection symbol (">") is used only
with the TYPE command, not with COPY.  If you have an already
formatted .DOC file and use continuous feed paper, you don't need
to use the Doc Master programs.

If the file is already formatted, but you prefer to use single
sheet paper, then use WAIT.COM first.

WAIT.COM is a tiny but handy "terminate but stay resident" utility
that puts itself at the front end of the part of the operating
system that runs the printer.  It checks each character sent to
the printer, and if it is any character except a formfeed, it just
passes it along to be printed.  When it receives a formfeed character,
though,  WAIT just sits there until you press any key, and then
returns for the next character without passing the formfeed through
to the printer.  To use this program, just type WAIT at the DOS prompt
and then use COPY or TYPE to print the file.  Since WAIT stays
resident in memory, you'll have to reboot your computer to get
rid of it - but if you use single sheets exclusively, you might
want to put it in your AUTOEXEC.BAT file.


** PRINTING PARTIALLY FORMATTED OR UNFORMATTED DOC FILES **

If the doc file is unformatted, you will want to use PRINT.COM to
print it.  If the file is partially formatted, and you want to 
use continuous feed paper, simply use TYPE or COPY, as you would 
for a fully formatted file.  If the file is partially formatted, 
and you want to use single sheets, use PRINT, but be sure you
follow the instructions below.

You can either start PRINT.COM with the name of the file to
print on the command line (i.e., PRNT filename.DOC) or specify
the filename at a program prompt.  To avoid any confusion with
the MS-DOS utility Print, you might want to change the name of
PRINT.COM with the MS-DOS Rename command to PRT.COM or some other
appropriate name.

Be sure your printer is ready and you have enough paper before 
you start PRINT.COM.

PRINT has defaults, that is, format values that it will use unless
you change them:

   1)  Continuous feed paper is assumed (but WAIT.COM will work
with PRINT.COM, so the printer will pause even if continuous feed
paper is selected if WAIT has been installed).
   2)  Printing will be single-spaced.
   3)  There will be eight spaces added to each line as a left
margin.
   4)  There will be fifty-five lines printed per page.
   5)  There will be a header line on the second and subsequent 
pages containing the file name and the page number.

If these default values are acceptable, just answer "Y" to the 
"use defaults" prompt.  If you want to change any of them, answer 
"N".  If you answer "N", you will go through a series of prompts 
to select new values.  The up arrow will always take you back to 
the previous prompt, and <Esc> will give you an opportunity to 
abort.  You may (but don't have to) use the defaults with 
unformatted files, but you CANNOT use the defaults with partially 
formatted files.  For unformatted files, position the paper where 
you want the first line of text to be printed, not at the top edge 
of the sheet or the tear line.

Printing partially formatted files on cut sheets requires printing 66
lines, pausing the printer and then resuming.  Because the top 
margin is blank lines, you have to insert the paper so the top of 
the page is aligned with the printhead, rather than positioning the 
paper where the first line of text should print, which invites 
jamming (at least on my RX-80); be careful.

With a partially formatted file that you want to print on cut 
sheets, be sure you do NOT select the defaults.  PRINT.COM will
pause when it has printed the number of lines you specified or 66,
whichever is reached first, so choose cut sheets, a left margin of 0,
67 lines per page and no header.  Partially formatted files already
have a left margin, and usually have a header. PRINT will stop when
the 66 lines have been printed so you can insert a new sheet of paper.

After you have either accepted the defaults or selected new 
format values, printing will begin.  You can suspend printing at 
any time with the <Esc> key, and then choose either to abort or
resume printing.


** Bugs, Suggestions, Comments **

I have tested these programs extensively, and not encountered any 
known bugs, but there is a law that states "There is always one 
more bug." If you find a bug, or if you have a suggestion or comment,
I would love to hear from you.  Please write, or contact me on my 
BBS, the Snoqualmie Valley Towne Crier, (206) 222-6224, 24 hours 
per day, 300/1200 baud, 7/1/E or 8/1/N.


** Doc Master is USER SUPPORTED **

Doc Master is itself user supported.  If you find this package
useful, please register it.  The suggested registration fee is
$20.00, which is $10.00 for each of the two shareware programs.
Look at this file and the public domain WAIT.COM as a "bonus"!

Registered users will receive a disk with the latest versions of the
Doc Master programs and any other new programs by yours truly.

Doc Master is copyrighted, but a limited license is hereby
granted to copy and distribute the compiled or assembled programs 
and documentation (but not the source code) for any non-commercial
purpose, so long as it is not altered in any way, and all files are
included.  User groups and user-supported software libraries may
charge a reasonable fee for copying and distribution, not
exceeding $10.00.

All of the source files for these programs were created with Sammy
Mitchell's Qedit.  WAIT.COM was assembled with Erik Isaacson's A86
assembler.  These are not only two of the finest pieces of 
shareware, but also simply two of the finest pieces of software I 
have had the pleasure to use.  These programs deserve your support.

PRINT.COM was compiled using the Zbasic (tm) 4.01p compiler.  READ.EXE
was compiled using Borland International's Turbo Pascal 4.0, and
makes liberal use of R.D. Ainsbury's TechnoJock Turbo Toolkit, an
excellent product.

                   Pat Anderson
                   5420 - 324th Pl. S.E.
                   Fall City, WA 98024









```
{% endraw %}

## SAMPLE2.DOC

{% raw %}
```





                                   DOC MASTER
                       Copyright (c) 1987 by Pat Anderson
        
        ** What is Doc Master? **
        
        Doc Master is a system of tools and strategies for printing out
        on-disk documentation files.  It consists of the following disk
        files:
        
                 READ.EXE       Read doc files on screen, page or
                                scroll through them backwards or
                                forwards.
                 COLORS.EXE     Configure READ's colors.
                 WAIT.COM       Print already formatted doc files on
                                single sheet paper, using DOS command
                                COPY filename.doc PRN, pauses printer
                                at formfeed character to insert new
                                sheet.
                 PRINT.COM      Print out any doc file, but primarily
                                useful for unformatted files or partially
                                formatted files. Allows you to set
                                left margin and lines per page, select
                                header with auto page numbering,
                                single sheet or continuous feed paper.
                 DM.DOC         This documentation file, laying out the
                                strategies for printing doc files.
                 SAMPLE1.DOC    DM.DOC as an unformatted ASCII text file.
                 SAMPLE2.DOC    DM.DOC as a partially formatted ASCII text
                                file.
        
        ** Why Doc Master? **
        
        One of the keys to the success of user-supported software is
        keeping costs down with on-disk documentation.  Unfortunately, no
        single standard has evolved for the format of on-disk documentation.
        Doc Master can help you get the on-disk file printed out neatly
        on paper so you can spend your time trying out the software instead
        of struggling with printing out the documentation.
        
        On-disk doc files can come in a variety of formats.  In an ideal
        world, everyone would use continuous feed paper and all on-disk
        doc files would be formatted to have one inch left margins and
        six and a half inch line lenths, and be divided into pages of
        fifty or fifty-five lines, with headers and page numbers.  We'll
        refer to such a doc file as one that is already formatted.
        
        You could then print out any doc file like this:
        
                      A>COPY filename.DOC PRN
        or
                      A>TYPE filename.DOC > PRN
        
        Both these commands simply send the contents of the file filename.DOC
        to the printer "as-is". In the real world, though, you frequently
        can't do this because:











        SAMPLE2.DOC - 2

                 1)  A lot more people than user supported software
        authors apparently realize prefer to print out doc files on
        single sheet bond paper.  If the file has formfeed characters,
        the printer runs merrily on without giving you a chance to insert
        a new sheet of paper for the next page.
        
                 2) Many doc files are not divided into pages at all.
        We'll refer to such a doc file as UNFORMATTED. If you try to TYPE
        or COPY an unformatted file to your printer, the result is unsatis-
        factory whether you are using continuous feed or single sheet paper.
        
                 3)  Some doc files use blank lines to divide the text
        into pages, so even if you could stop the printer on receiving a
        formfeed character, that wouldn't work for single sheet printing
        with such files.  I call these PARTIALLY FORMATTED files.  Again,
        if you want to print on single sheet paper, you need a way to pause 
        the printer while it is printing those blank lines making up the
        bottom margin of one page and the top margin of the next.
        
        Hence, I developed Doc Master as a system to get the documentation
        printed in the minimum amount of time, regardless of what type of
        file the author provided.
        
        
        ** Assumptions **
        
        I am going to assume in this discussion that you know how to use
        DIR to view the  directory of a disk in any drive, how to change
        logged drives, how to use TYPE to view a text file, and how to
        start a .BAT, .COM or .EXE file at the DOS prompt.  If not,
        study your DOS manuals - you aren't ready to try out new software
        just yet.  I am also going to assume that you are using eight and
        a half by eleven inch paper, and your printer is set up for six 
        lines per vertical inch and ten characters per horizontal inch, 
        which are more or less standard.
        
        
        ** First Steps **
        
        Here is our approach to the doc file whenever we get a new program,
        right as soon as we have used DISKCOPY to make a backup copy of
        the disk and put the original away for safekeeping:
        
                 1) Use DIR to bring up a directory for the drive
        containing your new disk . Look for a files like GO.BAT, READ.ME
        or README.DOC. Also notice how many files have the filename
        extension of .DOC, and how large those files are.  Finally,
        notice is there are files with filename extensions of .CRN (for
        crunched) or .ARC for archived.
        
                 2)  If there is a GO.BAT file, use it!  Just type GO at
        the DOS command prompt.  The GO.BAT file should simply display a
        READ.ME file, which in turn, should give you about a screenful of











        SAMPLE2.DOC - 3

        information on printing the doc file(s) and perhaps starting the
        program.
        
                 3)  If there is no GO.BAT file but there is a READ.ME,
        read it with READ.EXE.  Just type READ READ.ME. or just type READ
        and answer the filename prompt.  This file contains information 
        the program author wanted you to be aware before you started 
        using the program, and you shouldn't skip it.
        
                 4)  If there are .ARC or .CRN files, you MUST use the
        programs supplied to uncruch them to regular disk files to view them
        on the screen or print them directly.  These auxiliary programs will
        have names like ARC-E.COM or PKXARC.COM for .ARC files.  PC-Write has
        a file called FILEMAN.COM to uncrunch the doc files.
        
        
        ** BEFORE YOU PRINT - READ THE FILE **
        
        Before you print out the documentation file, read it on the 
        screen with READ.EXE.
        
        READ can be started with or without specifying the name of the
        doc file you wish to read on the command line.  If you specify
        a file name, i.e., READ DM.DOC [enter], READ will load the file.
        If you do not specify a file name on the command line, READ will
        prompt you for the name.

        READ's colors can be set with the COLORS.EXE program by Mark
        Hopkins.  All of READ's command keys can be viewed by pressing
        the F1 key for help.
        
        Your primary objective in reading the file before printing is to
        determine whether the file is already formatted, partially formatted
        or unformatted.  Look first to see whether there is a left margin on
        the screen, or whether the text starts all the way over in column
        one.  Next look for the graphics symbol for the formfeed
        character, ASCII 12 (decimal).  It looks like the medical symbol
        for female.  You can produce it on your screen so you will be
        sure to recogize it: just start BASIC, hold down the ALT key,
        enter then number 12 on the numeric keypad and then release the
        ALT key.  The formfeed character embedded in the .DOC file is
        what divides it into pages, causing a printer to advance
        continuous form paper to the top of the next page.  Finally, 
        if there are no formfeed characters, whether there are ten or 
        twelve blank lines dividing the text into pages.
        
        The file type dictates how you will print it out:
        
              1)  If there is a left margin and formfeed characters, the
        file is FULLY FORMATTED.  This kind of file usually but not always
        has headers or footers and page numbers.
        
              2)  If there is a left margin, but the file is divided into











        dmdoc.txt - 4 

        pages with blank lines instead of formfeeds, the file is 
        PARTIALLY FORMATTED.  This kind of file likewise usually has 
        headers or footers and page numbers.
        
              3)  If there is no left margin and no formfeeds or groups of
        blank lines, the file is UNFORMATTED.
        
        Only once you have determine what kind of doc file you are dealing
        with are you ready to print it out.
        
        
        ** PRINTING FULLY FORMATTED DOC FILES **
        
        If the file is fully formatted, and you prefer to use continuous
        feed paper, simply roll the paper so the tear line is aligned
        with the printer's print head, and either switch the printer off
        and back on (a practice to be discouraged!) or issue a "top of
        form" command for your printer to establish the current position
        as the top (which, unfortuantely, is not always as easy as it
        should be).  Use either COPY FILENAME.DOC PRN or TYPE FILENAME >
        PRN.  Notice the output redirection symbol (">") is used only
        with the TYPE command, not with COPY.  If you have an already
        formatted .DOC file and use continuous feed paper, you don't need
        to use the Doc Master programs.
        
        If the file is already formatted, but you prefer to use single
        sheet paper, then use WAIT.COM first.
        
        WAIT.COM is a tiny but handy "terminate but stay resident" utility
        that puts itself at the front end of the part of the operating
        system that runs the printer.  It checks each character sent to
        the printer, and if it is any character except a formfeed, it just
        passes it along to be printed.  When it receives a formfeed character,
        though,  WAIT just sits there until you press any key, and then
        returns for the next character without passing the formfeed through
        to the printer.  To use this program, just type WAIT at the DOS prompt
        and then use COPY or TYPE to print the file.  Since WAIT stays
        resident in memory, you'll have to reboot your computer to get
        rid of it - but if you use single sheets exclusively, you might
        want to put it in your AUTOEXEC.BAT file.
        
        
        ** PRINTING PARTIALLY FORMATTED OR UNFORMATTED DOC FILES **
        
        If the doc file is unformatted, you will want to use PRINT.COM to
        print it.  If the file is partially formatted, and you want to 
        use continuous feed paper, simply use TYPE or COPY, as you would 
        for a fully formatted file.  If the file is partially formatted, 
        and you want to use single sheets, use PRINT, but be sure you
        follow the instructions below.
        
        You can either start PRINT.COM with the name of the file to
        print on the command line (i.e., PRNT filename.DOC) or specify











        dmdoc.txt - 5 

        the filename at a program prompt.  To avoid any confusion with
        the MS-DOS utility Print, you might want to change the name of
        PRINT.COM with the MS-DOS Rename command to PRT.COM or some other
        appropriate name.
        
        Be sure your printer is ready and you have enough paper before 
        you start PRINT.COM.
        
        PRINT has defaults, that is, format values that it will use unless
        you change them:
        
           1)  Continuous feed paper is assumed (but WAIT.COM will work
        with PRINT.COM, so the printer will pause even if continuous feed
        paper is selected if WAIT has been installed).
           2)  Printing will be single-spaced.
           3)  There will be eight spaces added to each line as a left
        margin.
           4)  There will be fifty-five lines printed per page.
           5)  There will be a header line on the second and subsequent 
        pages containing the file name and the page number.
        
        If these default values are acceptable, just answer "Y" to the 
        "use defaults" prompt.  If you want to change any of them, answer 
        "N".  If you answer "N", you will go through a series of prompts 
        to select new values.  The up arrow will always take you back to 
        the previous prompt, and <Esc> will give you an opportunity to 
        abort.  You may (but don't have to) use the defaults with 
        unformatted files, but you CANNOT use the defaults with partially 
        formatted files.  For unformatted files, position the paper where 
        you want the first line of text to be printed, not at the top edge 
        of the sheet or the tear line.
        
        Printing partially formatted files on cut sheets requires printing 66
        lines, pausing the printer and then resuming.  Because the top 
        margin is blank lines, you have to insert the paper so the top of 
        the page is aligned with the printhead, rather than positioning the 
        paper where the first line of text should print, which invites 
        jamming (at least on my RX-80); be careful.
        
        With a partially formatted file that you want to print on cut 
        sheets, be sure you do NOT select the defaults.  PRINT.COM will
        pause when it has printed the number of lines you specified or 66,
        whichever is reached first, so choose cut sheets, a left margin of 0,
        67 lines per page and no header.  Partially formatted files already
        have a left margin, and usually have a header. PRINT will stop when
        the 66 lines have been printed so you can insert a new sheet of paper.
        
        After you have either accepted the defaults or selected new 
        format values, printing will begin.  You can suspend printing at 
        any time with the <Esc> key, and then choose either to abort or
        resume printing.
        
        











        dmdoc.txt - 6 

        ** Bugs, Suggestions, Comments **
        
        I have tested these programs extensively, and not encountered any 
        known bugs, but there is a law that states "There is always one 
        more bug." If you find a bug, or if you have a suggestion or comment,
        I would love to hear from you.  Please write, or contact me on my 
        BBS, the Snoqualmie Valley Towne Crier, (206) 222-6224, 24 hours 
        per day, 300/1200 baud, 7/1/E or 8/1/N.
        
        
        ** Doc Master is USER SUPPORTED **
        
        Doc Master is itself user supported.  If you find this package
        useful, please register it.  The suggested registration fee is
        $20.00, which is $10.00 for each of the two shareware programs.
        Look at this file and the public domain WAIT.COM as a "bonus"!

        Registered users will receive a disk with the latest versions of the
        Doc Master programs and any other new programs by yours truly.
        
        Doc Master is copyrighted, but a limited license is hereby
        granted to copy and distribute the compiled or assembled programs 
        and documentation (but not the source code) for any non-commercial
        purpose, so long as it is not altered in any way, and all files are
        included.  User groups and user-supported software libraries may
        charge a reasonable fee for copying and distribution, not
        exceeding $10.00.
        
        All of the source files for these programs were created with Sammy
        Mitchell's Qedit.  WAIT.COM was assembled with Erik Isaacson's A86
        assembler.  These are not only two of the finest pieces of 
        shareware, but also simply two of the finest pieces of software I 
        have had the pleasure to use.  These programs deserve your support.
        
        PRINT.COM were compiled using the Zbasic (tm) 4.01p compiler.  READ.EXE
        was compiled using Borland International's Turbo Pascal 4.0, and
        makes liberal use of R.D. Ainsbury's TechnoJock Turbo Toolkit, an
        excellent product.
        
                           Pat Anderson
                           5420 - 324th Pl. S.E.
                           Fall City, WA 98024
        
        
        
        
        
        
        
        

```
{% endraw %}

## UPDATE.DOC

{% raw %}
```
                      R E A D  Version 2.21
                           May 13, 1989

This is a significantly enhanced version of my text file reader
from the Doc Master programs (PC-SIG Disk #950).

The original program was written in Zbasic, and was limited to
files no larger than 64K, and lacked horizontal scrolling for
lines longer than the width of the screen.



Changes (cumulative from original Zbasic version):

        *  Re-written in Turbo Pascal 5.0

        *  Text buffer as large as memory or 9999 lines

        *  Horizontal scrolling for lines longer than 80 columns

        *  Date and time display on status line

        *  Expands tabs to spaces for correct display

        *  Pop-up command help window

        *  Color support added

Use Mark Hopkins' Colors program to configure colors for text,
status line, pop-up windows and help window if you don't care for
the program defaults.  This program creates a small Read.cfg file
which Read looks for on startup and uses to set the various color
values.

Comments and suggestions welcome.

                                Pat Anderson
                                5420 - 324th Pl. S.E.
                                Fall City, WA 98024
                                TC BBS (206) 222-6224


              _______
         ____|__     |               (tm)
      --|       |    |-------------------
        |   ____|__  |  Association of
        |  |       |_|  Shareware
        |__|   o   |    Professionals
      -----|   |   |---------------------
           |___|___|    MEMBER
```
{% endraw %}

## WAIT.DOC

{% raw %}
```
                                       WAIT!
                  A Memory Resident Single Sheet Printing Utility

         WAIT! really needs no documentation - it's one of those programs
         that if you have ever needed it, you'll understand immediately
         what it does, and if not, you'll say "so what?" For people who
         prefer printing on-disk doc files on single sheet paper instead of
         continuous feed paper, it will become indispensible. In a
         nutshell, on-disk documentation files are frequently formatted,
         that is, divided into pages by embedded formfeed characters. The
         (erroneous) assumption is that everyone uses continuous feed
         paper. With continuous feed paper, you can very conveniently print
         these files with either COPY FILENAME.DOC PRN or TYPE FILENAME.DOC
         > PRN. This will print a page, and then advance the paper to the
         top of the next page and continue printing.

         But what if you want to print such a doc file on single sheets? I
         suspect a lot more folks prefer single sheets than the authors of
         user supported software documentation believe. If you do a lot of
         correspondence where the first page is letterhead and the
         subsequent pages are plain bond, or if you don't like ragged
         edges, or if you want to print on both sides of the sheet, you
         normally do not have the continuous feed tractor on your printer
         as your normal setup. Formatted files pretty much used to force
         you to get out the tractor, put it on, print the doc file, and
         then take the tractor off to go back to your normal setup.

         No more - with WAIT! installed (just type WAIT at the DOS prompt -
         it is memory resident, attaching itself to a ROM BIOS routine),
         printing will now PAUSE at each formfeed, so you can insert a new
         sheet of paper. Strike any key to resume printing. It's as simple
         as that!  If you use only single sheets, you might want to include
         WAIT as a line in your AUTOEXEC.BAT file.

         WAIT! is a public domain program (nobody paid for it when it was
         shareware anyway).  Comments and suggestions would be sincerely
         appreciated.

         Pat Anderson
         5420 - 324th Pl. S.E.
         Fall City, WA 98024
         BBS: (206) 222-6224
         300/1200 baud, 24 hours





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0950

     Volume in drive A has no label
     Directory of A:\

    CLEANUP  EXE     11184   2-05-89   8:26a
    DM       DOC     17416   6-12-90   7:56p
    GO       BAT        14  11-07-87  10:28a
    PRINT    EXE     51760  12-27-89   4:14p
    READ     EXE     19648   9-28-89   5:51a
    READ     ME       1752  10-11-88   3:54p
    RSETUP   DOC      6119   6-12-90   8:08p
    RSETUP   EXE     36304   6-24-89   1:54p
    SAMPLE1  DOC     14709   7-14-88   9:53a
    SAMPLE2  DOC     17454   7-14-88   9:51a
    UPDATE   DOC      1615   5-13-89   7:26a
    WAIT     COM       520  11-03-88   7:48a
    WAIT     DOC      2504  11-27-88   2:11p
    Y        COM     39168   2-05-89   9:00a
    FILE0950 TXT      1777   7-09-90   6:04p
           15 file(s)     221944 bytes
                           92160 bytes free
