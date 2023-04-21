---
layout: page
title: "PC-SIG Diskette Library (Disk #968)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0968/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0968"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QCHECK3 CHECK ACCOUNT MANAGEMENT SYSTEM"

    QCHECK3 -- Creative Resources's checking account management system is a
    menu-driven program, which is set up to minimize the errors, and ease
    reporting of data on any checking account, either personal or small to
    medium size business.
    
    Menu selections include new check/charge entry, deposit entry, check
    cancellation, deposit cancellation, balance inquiry, screen listing of a
    portion or all of the check register file, listing of all uncanceled
    items, editing of any item, creation of a new register, a variety of
    reports on check and deposit activity, and a means of restarting the
    program for a different check register data file without the need to
    exit to the operating system. Also includes several DOS utilities for
    free disk space, free memory, etc.
    
    QCHECK3 has the ability to export data to an electronic spreadsheet (PC-
    Calc, SuperCalc, Quattro, Lotus 1-2-3, etc.). It also provides for user-
    defined check memo code suggestions, user-defined function key macros
    for "pay to" entries, user-defined printer set-up strings, a handy
    calendar function for date look-up, and checks for adequate disk space
    prior to actions requiring more space.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0968.TXT

{% raw %}
```
Disk No:  968                                                           
Disk Title: Qcheck3 Check Account Management System                     
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: QCHECK3 - Checking Account Management System             
Author Version: 6.05                                                    
Author Registration: $30.00                                             
Special Requirements: 410K RAM and two floppy drives.  Hard disk recomme
                                                                        
QCHECK3 -- Creative Resources's checking account management system is   
a menu-driven program, which is set up to minimize the errors, and ease 
reporting of data on any checking account, either personal or small to  
medium size business.                                                   
                                                                        
Menu selections include new check/charge entry, deposit entry, check    
cancellation, deposit cancellation, balance inquiry, screen listing of  
a portion or all of the check register file, listing of all uncanceled  
items, editing of any item, creation of a new register, a variety of    
reports on check and deposit activity, and a means of restarting the    
program for a different check register data file without the need to    
exit to the operating system.                                           
                                                                        
QCHECK3 has the ability to export data to an electronic spreadsheet     
(PC-Calc, SuperCalc, Quattro, Lotus 1-2-3, etc.). It also provides for  
user-defined check memo code suggestions, user-defined function key     
macros for ``pay to'' entries, user-defined printer set-up strings, a   
handy calendar function for date look-up, and checks for adequate disk  
space prior to actions requiring more space.                            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.TXT

{% raw %}
```

*** Just use the PgUp, PgDn & ARROW keys to move through this document... *****


               *** README file  ****   1989 Feb 21

QCHECK3  - the  CREATIVE  RESOURCES Checking  Account  Management 
System is a menu-driven program, which is set up to  minimize the  
errors,  and  ease  reporting of data on any  checking   account, 
either personal or small to medium size business.

Menu  selections include new check/charge entry,  deposit  entry, 
check cancellation, deposit cancellation, balance inquiry, screen 
listing  of a portion or all of the check register file,  listing 
of all uncanceled items,  editing of any item,  creation of a new 
register,   a variety of reports on check and  deposit  activity, 
and   a  means of restarting the program for  a  different  check  
register   data   file   without the  need   to   exit   to   the 
operating   system.  Also includes is the ability to  export data  
to  an electronic spreadsheet (SuperCalc,  Quattro,  Lotus, etc.) 
and provides for user-defined check memo code   suggestions,  and 
user-defined  function key macros for  "Pay  To" entries,   user-
defined printer set-up strings,  a  handy  calendar function  for 
date look-up,  checks for adequate disk space  prior to   actions 
requiring  more  space,  and eliminating the need  for   a  check 
register  "shell"  for  creating new  data  files.   Version  6.0 
contains  a  major  revision to the  editing  capabilities,  with 
significantly improved ease of access to any entry, easier moving 
to the next, previous, or any other record entry, light-bar style 
main menu,  on-line help at the main menu (including descriptions 
of  "hidden" menu selections),  user-definable screen colors  (if 
you don't like those furnished) with standard keyboard or  "point 
&  shoot" color selection in plain English (rather than  esoteric 
computer codes), and further improvements in handling using files 
in  remote  subdirectories  or different drives.   A  minimum  of 
knowledge of computers is assumed.  

Included   in  the  Getting Started section of the  manual  is  a 
sample  run   with  a furnished   sample  check   register   data  
file.    The  user  is encouraged  to follow through the  options 
outlined  while  sitting in  front  of  his   computer  terminal,  
using   the   sample   check  register   data  file   (TEST3.DBF) 
included,   following  the   text   to  perform  the    described 
operations, using this reference manual as a tutorial.

******************************************************************

The following steps are suggested for getting started:

1.  First, use the PC/MS-DOS COPY or DISKCOPY commands to make  a 
duplicate,  backup  copy of the  original,  master,  distribution 
disk.  NOTE: Not all extracted files will fit on a single floppy.

2.   Copy the specially compressed ("archived") file QCHECK36.EXE 
onto  your hard disk or 2nd (otherwise empty, to assure  adequate 
room)  floppy.   Extract  the full-size  user  reference  manual, 
CHECKING.DOC to Drive B: by issuing the following command:

               EXTRACTB1 <ret>

To extract to the hard disk, simply type:

               QCHECK36 <ret>

This  extracts  all files to the default directory  on  the  hard 
disk.

3.  Print-out  the documentation/user manual  "CHECKING.DOC"  by 
issuing the batch file command:

           PRINTDOC <ret>

or simply type:     COPY CHECKING.DOC PRN

4.   To Extract the program and its required error message  files 
to a second floppy,  place a second blank,  formatted floppy into 
Drive B: and type:

          EXTRACTB2 <ret>

5.  To Extract the balance of the files, to a second floppy, place 
a third blank, formatted floppy into Drive B: and type:

          EXTRACTB3 <ret>

This transfers the balance of the files needed to run QCHECK3.


6.  Start the program by typing:  QCHECK3 <ret>

7.  Use the sample data file as your initial check register file:  

                 TEST3 <ret>

    (also enter the drive, if different, ie: B:TEST3)

ATTENTION  - FLOPPY ONLY USERS:   DO NOT ATTEMPT TO RUN WITH BOTH 
PROGRAM AND DATA FILES ON THE SAME 360kB FLOPPY!!    THE  PROGRAM 
WILL EVENTUALLY RUN OUT OF DISK SPACE AND REFUSE TO CONTINUE,  OR 
IT MAY CRASH.   USE DRIVE A:  FOR THE PROGRAM ONLY,  AND DRIVE B: 
FOR  ALL OTHER FILES.   PUT THE USER MANUAL ON A SEPARATE  FLOPPY 
FROM EVERYTHING ELSE.  

HARD DISK USERS WILL NOT HAVE THESE PROBLEMS OR CONCERNS.

ATTENTION   - HARD DISK USERS:    BEWARE THAT SOME "DISK CACHING" 
SOFTWARE  MAY INTERFERE WITH THE OPERATIONS OF QCHECK3.   IF  YOU 
ARE  CURRENTLY  USING  "DISK CACHING"  SOFTWARE  AND  CANNOT  RUN 
QCHECK3, OR IF YOU GET STRANGE RESULTS OR ERROR MESSAGES, YOU MAY 
HAVE TO DISABLE YOUR DISK CACHING SOFTWARE PRIOR TO USING QCHECK3.

8.   Run  through  the program options as outlined  in  the  user 
manual, as a tutorial.

Enjoy!

If you have any problems, don't hesitate to contact us.

**********   S H A R E W A R E  --  User-Supported Software   ***********

   If you have received this program from another user and find it of
  value, your $30 Registration Fee will support continued development.

    Registered users will receive the latest version, be advised of 
       updates and future versions, and receive technical support.  
          NOTE:  ONLY REGISTERED USERS ARE ENTITLED TO SUPPORT. 
   
        HELP SUSTAIN THE SHAREWARE CONCEPT - REGISTER YOUR COPY !

                           CREATIVE RESOURCES 
                           773 Somerset Place 
                           Concord, CA  94518 

     Regardless of whether you register or make a contribution, you
are encouraged to copy & share this program as described in the manual. 

          ---------------------------------------------
         Copyright (c) 1984 - 1989   CREATIVE RESOURCES
 ******************************************************************

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0968

     Volume in drive A has no label
     Directory of A:\

    BROWSE   COM       958   8-01-89  11:00p
    EXTRCTB1 BAT       128   8-01-89  11:00p
    EXTRCTB2 BAT       128   8-01-89  11:00p
    EXTRCTB3 BAT       128   8-01-89  11:00p
    QCHECK36 EXE    289781   8-01-89  11:00p
    README   BAT        18   8-01-89  11:00p
    README   TXT      6144   8-01-89  11:00p
    REGISTER BAT        20   8-01-89  11:00p
    REGISTER IT       1920   8-01-89  11:00p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       421   7-09-90  12:52a
    FILE0968 TXT      2517   7-09-90   2:43p
           12 file(s)     302201 bytes
                           13312 bytes free
