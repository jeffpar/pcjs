---
layout: page
title: "PC-SIG Diskette Library (Disk #1189)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1189/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1189"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ALT"

    ALT combines the best features of several well-known utility programs
    to do just about everything. ALT is a RAM-resident editor, disk
    manager, calculator, address book, appointment, calendar,
    multitasking
    platform, and more.
    
    Each of ALT's features is complete -- from the disk manager, with disk
    information and file-tagging capability, to the calculator with more
    functions than most $35 hand-held units. ALT can record keyboard
    macros to save common keystrokes. There is even a cut-and-paste
    feature to copy blocks of text from one program to another.
    
    ALT's multitasking platform swaps programs in and out of memory,
    letting you work on a spreadsheet and write a business letter at the
    same time. This, combined with the cut-paste function, makes it worth
    any price.
    
    Rounding out ALT's functionality is a command menu for running commonly
    called programs. This menu can have submenus and each program
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MANUAL.DOC

{% raw %}
```
File MANUAL.DOC

              Additions and Changes to ALT User Manual !

  1)  Page 6-13 , Using the Reverse Polish Calculator.  To
      toggle the date format mode for function keys ALT-F9 
      and ALT-F10, use CTRL-F2 and not SHIFT-F2.

   2) ALT now supports one Hercules graphics task.  Define
      a partition as Graphics and ALT will correctly save
      and restore the screen.  It is advised to clear the
      screen with the CLS command after exiting a graphics
      program.  Some non-100% Hercules compatible video cards
      will still be detected in graphics mode unless some
      other screen action is taken place.

      Hercules and EGA graphics will be supported for all
      tasks (partitiona) in a future version of ALT. 

   3) Command line option -NB has been added to ALT.EXE ,
      SETUP.EXE , and DISK.EXE .  Some video cards, primarily
      Sigma Designs and some EGA, do not correspond to the
      standard method of blanking the screen.  Some screen routines
      in Instinct's software blank the screen before completely
      writing an entire screen to your monitor.  Video cards that
      do not follow the method used by Instinct Software will 
      result in unpredictable screen results.  Some results that
      have been noticed are screens that remain blank or turn white.
      It appears in many situations that the software has locked up.

      The command line option -NB informs software by Instinct not 
      to blank the screen for screen refreshes.  This option will
      also disable the Screen Blank (see under System Menu pg. 1-10).

      The option is required for programs ALT.EXE , SETUP.EXE, and
      DISK.EXE .    

      For example,

           C:>  ALT   -NB
           C:>  DISK  -NB
      and 
           C:>  SETUP -NB

      In future versions of ALT, the option will be able to be
      set from the SETUP.EXE program and remain for future use
      of ALT. 

   4) Command line option -AF has been added to ALT.EXE .
      The option will cause ALT not to takeover one of DOS
      functions , specifically, Interrupt 21H Function 3FH.
      A problem was found with Enable 2.15 where Enable failed
      to load with Alt installed.  The command line parameter
      -AF allowed Enable to load properly.  The only disadvantage
      of using the command line paramter is Alt not being able
      to "pop-up" at a few places.  

      For you non-techies that do not have an understanding of
      the DOS functions, try this command line parameter if you
      experience problems with some programs.

   5) If you have an ATI Wonder Video Card, the automatic video 
      mode sensing must be turned off.  The mode sensing can be turned
      off either by hardware (Switch 8) or software (see ATI User
      Manual). 


   6) A tutorial file is included on the disk.  Print the file
      TUTORIAL to your printer and follow the steps through
      many of ALT's features.

   Reminders, Hints, .....   

   1)  If using a mouse, you must install the mouse driver program
       ( i.e. Mouse.Com ) before installing ALT.  ALT must also 
       know that you are planning to use a mouse.  This can be 
       done either by the command line option  -P  when installing
       ALT, or by specifying the option in the SETUP.EXE program.

   2)  Remember Instant Keys.  If you like macros, but don't like
       going through the ALT Main Menu to select the key and enter
       a description, then you need Instant Keys.  See section
       13.4 (pg 13.4) in the Alt User Manual.

   3)  In the Filer Directory Tree, the directory structure of your 
       disk drive is not kept up-to-date unless you create and 
       delete directories through the Filer.  Occasionally, you
       might need to update your filer tree so that it reflects
       your current directory tree structure.  From the Filer 
       interface,

       Press:  F10
       Select: File/Dir
       Select: Reread
       Select: Tree
       Enter:  drive letter ( i.e. C )
       Press:  Enter

   4)  Don't forget about our Instinct Support Bulletin Board 
       System (BBS). Call our BBS and receive quick answers on
       questions pertaining to software by Instinct Software. 
       The BBS also provides a convenient method to report any
       program bugs, and to download the new program with the
       problems fixed.  The Instinct BBS phone number is 
       214-368-2709 (1200/2400 Baud, No Parity, 8 data bits, 
       1 stop bit).



                          Thank you for your interest in ALT.




```
{% endraw %}

## FILE1189.TXT

{% raw %}
```
Disk No: 1189
Program Title:  ALT version 1.25S
PC-SIG version: 1.5

ALT combines the best features of several well-known utility programs to
do just about everything.  ALT is a RAM resident editor, disk manager,
calculator, address book, appointment, calendar, multitasking platform,
and more.

Each of ALT's features is complete, from the disk manager with disk
information and file tagging capability to the calculator with more
functions than most $35 hand held units.  ALT has the ability to record
keyboard macros to save common keystrokes.  There is even a cut and
paste feature to copy blocks of text from one program to another.

ALT's multitasking platform swaps programs in and out of memory,
permitting a user to work on a spreadsheet and write a business letter
at the same time.  This combined with the cut-paste function makes it
worth any price.

Rounding out ALT's functionality is a command menu for running commonly
called programs.  This menu can have submenus and each program call will
pause for options for the program (as if from the DOS prompt).  With
registration comes expanded capacity, on-line help, technical support
and a disk services program (undeletes files, edit sectors, etc).

Usage:  Desk Top Organizer.

Special Requirements:  A hard disk.

How to Start:  Type GO (press enter).

Suggested Registration:  $29.95

File Descriptions:

ALT      ARC  Archived program files.
ARKE     COM  Archiving program.
READ     ME   ALT documentation
INSTALL  BAT  Installation program.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1189

     Volume in drive A has no label
     Directory of A:\

    ALT      ARC    335153   6-24-89   8:22p
    ARKE     COM     12242   6-20-89   6:00a
    FILE1189 TXT      1659   7-17-89   3:28p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       463   2-01-89   4:50p
    INSTALL  BAT      5356   6-20-89   6:00a
            6 file(s)     354911 bytes
                            4096 bytes free
