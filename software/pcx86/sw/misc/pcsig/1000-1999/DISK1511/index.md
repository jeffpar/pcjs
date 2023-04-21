---
layout: page
title: "PC-SIG Diskette Library (Disk #1511)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1511/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1511"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VERSE"

    Install VERSE on your computer and a different excerpt of the Bible will
    automatically be displayed every day when you start your PC. The
    program allows you to include your favorite verses. VERSE is a nice way
    to start your day right.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1511.TXT

{% raw %}
```
Disk No: 1511
Program Title:  VERSE
PC-SIG version 1

Install VERSE on your computer and a different excerpt of the Bible will
automatically be displayed every day when you start your PC.  The
program allows you to include your favorite verses.  VERSE is a nice way
to start your day right.

Synopsis: Enjoy a new verse from the Bible each time you boot up.

Usage:  Religious/Bible Verse Display.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  None.

Author:  Frank Chin

File Descriptions:

VERSE    EXE  Main program.
VERSE    JAN  Data file.
VERSE    FEB   ,,   ,,
VERSE    MAR   ,,   ,,
VERSE    APR   ,,   ,,
VERSE    MAY   ,,   ,,
VERSE    JUN   ,,   ,,
VERSE    JUL   ,,   ,,
VERSE    AUG   ,,   ,,
VERSE    SEP   ,,   ,,
VERSE    OCT   ,,   ,,
VERSE    NOV   ,,   ,,
VERSE    DEC   ,,   ,,
VERSE    DOC  Documentation.
BROWSE   COM  Program used to read text files.
README   BAT  Batch file to display documentation.

The PC-SIG Library
1030D E Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## VERSE.DOC

{% raw %}
```
 
                           
 
 
     "The grass withers, the flower fades. But the Word of our 
God stands forever."              
                         Isaiah 40:8 
 
 
 
 
 
INTRODUCTION: 
 
     This program is designed to put a different Bible verse on 
your computer screen each day on start up. Though I included many
of my own favorite verses, the program can be easily modified to 
put in any that you like. Bible reading is important, and 
this will make it a little easier to do!  
 
  
INSTALLATION: 
 
     You should have a file called VERSE.EXE and 12 files called 
VERSE.*  (with the "*" representing each month). These 13 files 
MUST all be in the same subdirectory of either your hard disk or 
your boot up diskette. The files VERSE.DOC, README.BAT, and 
BROWSE.COM are for viewing these instructions, and are not needed
to run the program. 
 
I suggest that you put all the files in a subdirectory. To do so,
type the following at the A> or C>:
 
     md \VERSE   (Enter key) 
     cd \VERSE   (Enter key) 
     cd\         (Enter key) 
 
This will create a subdirectory called VERSE and then return you 
to your root directory. Next, copy all the files of this program 
into the VERSE subdirectory with the DOS COPY command.
 

To run the program from your AUTOEXEC.BAT file you next insert 
these three lines: 
 
     cd \VERSE 
     VERSE   (your choice of options) 
     cd \ 

This example would change directories to VERSE's subdirectory and
run the program on boot up. 


Options for line 2 in the Autoexec.bat entry are:
  
VERSE CLEAR     this clears the screen before displaying anything

VERSE WAIT      will wait for a key press after the verse's      
                display before proceeding with the rest of the   
                Autoexec.bat file commands.

VERSE ONCE      will only run VERSE once each day.  Without this 
                option it will display the verse each time it is 
                run. Used in an AUTOEXEC.BAT, it will only run   
                VERSE when you turn on your system, not when you 
                reboot. 

VERSE ONCE CLEAR WAIT   This is my personal choice of options. It
                        will run VERSE ONCE a day, CLEAR the     
                        screen before displaying the verse, and  
                        then WAIT for you to press the spacebar  
                        before removing the verse.

     Most of these options are useful when VERSE is run from an 
AUTOEXEC.BAT when you turn on your machine.  

     One other possible command is VERSE MMDD, where MM is the
month and DD is the day. For example, VERSE 0401 would call up
the verse for April 1. This latter command is useful when you
simply want to see what verses occur on what days.
 
 
CUSTOMIZATION 
 
     VERSE has one data file for each month of the year.  They 
are named VERSE.JAN, VERSE.FEB, VERSE.MAR, etc. All files are 
simple ASCII text in this format: 
 
Column 1:        The record type which is an R for a reminder. 
 
Cols 2-5:        Month and day as MMDD with leading zeros.  Zeros
                 for either month or day cause ALL months or days
                 to match when being scanned.  For example  0001 
                 would match the first of every month while 0400 
                 would match every day of April. 
 
Cols 6-9:        The full year of the event as four digits. 
                 May be left blank, msg will move left. 
 
Column 10:       A special processing flag.  Values may be: 
                 BLANK for no special processing. 
 
                 C to continue a message from the previous line. 
                 Note, that you MUST repeat the date fields. 
 
                 DAY-OF-WEEK DIGIT where 1=Sunday ... 7=Saturday 
                 This will cause the message to display only if  
                 the date falls on a certain day of the week.   
 
Cols 11-70       The message to display for this date. 
 
                       --EXAMPLES-- 
 
*mmddyyyy Reminders 
*-------- 
------------------------------------------------------------ 
R0101     The Lord is my shepherd, I shall not want. 
 
R0115     How blessed are those whose way is blameless, 
R0115     who walk in the law of the Lord. 
 
Leave the headings in or the program may not work. To enter your 
own verses, simply load the files in ASCII format into your word 
processor, delete my verses, and replace my verses with your own.

 
 
 
HISTORY 
 
     This program is a modification of a program called TODAY. 
The original TODAY program was written by Patrick Kincaid in July
of 1986. It can be found on many BBS's around the country, and is
a collection of famous dates, birthdays, and events in history. 
It in turn was inspired by a program originally written by Mike 
Butler.  
 
 
 
USER SUPPORT 
 
     Do NOT send money! Instead, distribute this program far and 
wide. If all of us read the Bible a little each day, this world
will be a better place. 
 
     If you have any problems with or suggestions for the 
program, PLEASE let me know about them. Also, if you find this 
program helps you in any way or gives you a blessing, mail me a 
note and tell me about it. I can be reached via COMPUSERVE or 
GENIE, or at this address: 
 
 
                    Frank Chin      
                    PO Box 1842 
                    West Monroe, LA 71291 
 
 
 
 
"But these are written, that ye might believe that Jesus is the  
 Christ, the Son of God; and that believing ye might have life  
 through his name." 
 
                              John 20:31
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1511

     Volume in drive A has no label
     Directory of A:\

    BROWSE   COM      1024   3-15-86   6:41p
    FILE1511 TXT      1131   8-04-89   2:16p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       540   8-04-89   2:17p
    README   BAT        34   6-26-88  12:45p
    VERSE    DOC      5729   7-06-88   8:19p
    VERSE    EXE     14608   6-21-88   7:46a
    VERSE    APR      6916   8-04-89   2:09p
    VERSE    AUG      7644   8-04-89   2:09p
    VERSE    DEC      7425   8-04-89   2:09p
    VERSE    FEB      7501   8-04-89   2:09p
    VERSE    JAN      6584   8-04-89   2:09p
    VERSE    JUL      6998   8-04-89   2:09p
    VERSE    JUN      6359   8-04-89   2:09p
    VERSE    MAR      7786   8-04-89   2:09p
    VERSE    MAY      6791   8-04-89   2:09p
    VERSE    NOV      5942   8-04-89   2:09p
    VERSE    OCT      7223   8-04-89   2:09p
    VERSE    SEP      9060   8-04-89   2:09p
           19 file(s)     109333 bytes
                           45568 bytes free
