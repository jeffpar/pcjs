---
layout: page
title: "PC-SIG Diskette Library (Disk #793)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0793/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0793"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TYPING BY RYSOFT"

    Get those fingers of yours warmed up!  Here is a new test for them.
    TYPING is an easy-to-use program that gives feedback on your
    typing performance.  It displays the text on the screen, and you start
    typing -- quickly, now! -- and no mistakes!  The timer starts as soon as
    you hit the first key.
    
    TYPING does not display any statistics while you are typing.  When the
    timer runs out, the screen clears and your typing performance is
    displayed in words per minute, total errors, and adjusted words per
    minute.  The nice thing about TYPING is you can either type from
    the screen or print the test file and type from that.  You can
    also supply your own file to type if you want.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES793.TXT

{% raw %}
```
Disk No  #793
Program Title: TYPING by RYSOFT version 1.1
PC-SIG version 1
 
    TYPING is designed to provide feedback on typing performance for who
are interested in evaluating their typing. When you see the text appear
start typing. The time starts as soon as you type the first character.The
program does not display any statistics while you are typing. When the time
is up the screen clears and your typing performance is displayed in words
per minute, total errors, and adjusted words per minute.  The nice thing
about this program is that you may either type from the screen or print out
the file and type from that.  You supply the file to type allowing a more
resourceful use for the program as well as controll of it.
 
Usage: Educational
 
System Requirements: 128K and one floppy.
 
How to Start: Type TYPING (press enter)
 
Suggested Registration: $20.00
 
File Descriptions:
 
CONFIG   SYS  Sample config.sys file
README        Read me file about the TYPING program.
TYPING   CFG  Configuration file for TYPING.
TYPING   DOC  Documentation for TYPING.
TYPING   EXE  Main program.
TYPING   REG  Data file used by TYPING.EXE
WELCOME       Sample ascii message for practice.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## TYPING.DOC

{% raw %}
```

      


                      TYPING Evaluator version 1.1
                         Written by Larry Ryder
                      (C) copyright 1987 by RYSOFT

      This program is being distributed under the SHAREWARE 
   concept. The user is encouraged to freely distribute copies 
   excluding source code.  

      If you find this program useful, please register. Basic 
   registration gives you:
      1. a printed manual, with a section on introduction to touch 
         typing, sized to fit in DOS style binders.
      2. the latest version of the program with extra practice 
         files on disk.
      3. telephone support.
   optional:
      4. commented "C" source code. 

   TYPING.REG is a form you may use to register, 
   The cost of registering is $20.00 for basic or $35.00 for basic 
   plus source code.  Registration helps cover the cost of updates 
   and insures future products.  

      Whether or not you register you are encouraged to report any 
   bugs you may find or suggestions you may have, as well as 
   general comments about the program. I would also like to here 
   about suggestions for future products that you are interested in.
   I am thinking of writing a graphic typing drill program that will 
   show finger positions and have practice drills, I would like your 
   input to help see if this is worthwhile.

      We want to hear from you. Please send all correspondence, 
   suggestions, and registrations to the address below, or use the 
   registration form in the file TYPING.REG. Thank you for your 
   support.  

      RYSOFT 34W728 Courier Ave.  St. Charles, IL 60174 

      This program is designed to provide feedback on typing 
   performance for people who are people who are interested in 
   evalulating their typing. To start the program, type the word 
   TYPING and press enter. The first ten lines of this file will be 
   displayed on the screen (see CHANGING PRACTICE FILES, below, to 
   use your own file). When you see the text appear start typing. 
   The time starts as soon as you type the first character.The 
   program does not display any statistics while you are typing. 
   When the time is up the screen clears and your typing 
   performance is displayed in words per minute, total errors, and 
   adjusted words per minute.  

      The system requirements for this program are IBM-PC, XT, AT 
   or Jr with 128k RAM, DOS 2.x or 3.x, and an ASCII file, such as 
   this one, that is readable with the DOS "type" command and is to 
   be used as the source for typing practice.  


   CHANGING PRACTICE FILES 

   The practice file is up by the user in one of two ways : 

   1. By reading from a file called TYPING.CFG 

         A sample of this file is already on the disk. This file 
         tells the program what file you are typing from, whether 
         you are typing from the screen or a printout, and how long 
         you wish to type for.  To change your practice file, 
         change or remove the TYPING.CFG file.  

         The file format is:  FILENAME <sp> MODE <sp> TIME 

         FILENAME is the name of the file to use for typing 
         practice and may include an optional drive and pathname.  

         MODE is simply the letter S to work from the screen or P 
         to work from a printout that you already have.  

         TIME is the amount of time to type for in whole minutes.  

         If you are unsure of the format, view the file with the 
         command TYPE TYPING.CFG before making any changes.  

   2. By deleting the TYPING.CFG file 

         If this file is not on the disk, the program will prompt 
         you to enter the name of the file you wish to type from, 
         whether you are working from the screen or from a 
         printout, and whether or not you need a printout to type 
         from. Enter the information asked for, and begin your 
         typing when told to do so.  


   SUGGESTIONS for better performance: 

      It is normally better to work from a printout as this is more 
   realistic than typing from the screen.  

      The program ignores leading and trailing spaces on a line, so 
   when evaluating another person's performance it may be helpful 
   to take a quick look at the TYPING.OUT file to check for the 
   proper form factor.  

      To determine if there is an error, the program looks at a 
   series of three characters: the character being checked and the 
   two before or the two after. It is possible to occasionally have 
   an extraneous error or miss an error. This occurs rarely, but 
   you should be aware of it and take a second look at errors that 
   are questionable. The alternative was a character position 
   check, but this would induce a lot of errors if you added or 
   dropped a character.  

      When the time is up a file called TYPING.OUT is written to 
   the disk. This file is what the person typed and may be used to 
   determine problem areas. The approximate location of the error 
   will be indicated by a ^ (caret) symbol.  The typing statistics 
   will be added to the end of this file.  

      This program is only to evaluate your typing performance.  
   For maximum benefit it should be used in conjunction with a book 
   to teach typing, and with a more appropriate source file of the 
   user's choice.  


   SETUP 

      Files created with a word processor such as WORDSTAR or EZ-
   WRITER must be exported or printed to a disk file to use. A good 
   ASCII word processor is PC-WRITE by QUICKSOFT, which is also a 
   shareware product.  

      The disk you use to boot the system must start the ANSI.SYS 
   driver. This file is included with DOS 2.x or 3.x and must be 
   added to the disk with the typing program. The driver is loaded 
   by a file called CONFIG.SYS that has at least the following 
   line:  DEVICE=ANSI.SYS I have included a sample CONFIG.SYS file 
   on this disk. If this is not done you will see a few strange 
   character strings on the screen. If you change disks be sure 
   that there is an ANSI.SYS file somewhere in the DOS search path.  
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0793

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        17   6-03-87   7:58a
    FILES793 TXT      1323   7-01-87   3:17p
    GO       BAT        38   7-01-87   2:55p
    GO       TXT       540   7-01-87   2:55p
    README            1400   6-13-87   9:16a
    TYPING   CFG        13   6-13-87   9:51a
    TYPING   DOC      6272   6-13-87  10:08a
    TYPING   EXE     38812   6-13-87  10:00a
    TYPING   REG      1194   5-30-87   2:43p
    WELCOME            822   6-13-87   9:16a
           10 file(s)      50431 bytes
                          106496 bytes free
