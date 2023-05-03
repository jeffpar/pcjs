---
layout: page
title: "PC-SIG Diskette Library (Disk #2175)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2175/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2175"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MEMTOOL"

    If you're looking for a program to help you be more productive,
    MEMTOOL may be the answer. It's a memory resident program that only
    takes up 8K when properly installed. User-definable hot keys, LAN
    support, and optional diskswapping to save memory, are just a few of
    its functions. MEMTOOL will automatically use EMS memory if you have
    it.
    
    MEMTOOL features include:
    
    ~ Calculator.
    
    ~ Calendar/Appointment pad.
    
    ~ File editor.
    
    ~ DOS quick guide.
    
    ~ Diskview.
    
    ~ Phoneview.
    
    ~ Alarm clock.
    
    ~ ASCII table.
    
    ~ Screen ruler/grid.
    
    The phoneview file can hold up to 500 entries. The file editor will
    handle a file up to 35K or 2500 lines, whichever comes first, and the
    calendar/appointment pad is limited only by disk space.
    
    For those of you who aren't using a memory-resident program, MEMTOOL is
    an easy and useful set of utilities you can call on to help get your
    work done efficiently.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHANGES.DOC

{% raw %}
```

VERSION 1.2

  1) The shareware screen displayed when MemTool is first loaded
     is smaller, and no longer requires a key to be pressed to 
     resume.

  2) MemTool now allows the user to specify the "hot-key" to be used
     to invoke the program.  The "hot-key" is specified when MemTool
     is first loaded.  Refer to the file MANUAL.DOC for complete
     details.

  3) The Appointment Calendar has a much better appointment pad with 
     "time slots" and a larger capacity.  Some bugs and enhancements 
     where made to the calendar, itself.

  4) The PhoneView option now allows Ctrl-PgUp and Ctrl-PgDn, to 
     quickly jump to the start and end of your phone numbers.

  5) Note that pressing the "hot-key" once inside MemTool no longer
     terminates MemTool immediately.  You must use the <ESC> key.

  6) The calculator can be moved around the screen.  Just press the
     Num-Lock key to enable the key-pad arrows, and move the calculator
     to any position on the screen.

  7) The Alarm Clock sound, made when the alarm goes off, is no longer
     a continuous noise.  It sounds for 3 seconds.

  8) Bug fixed which caused the system to lock-up if the user tried to
     run MemTool a second time, while using Disk-Swapping.
     

VERSION 2.0  (03/01/90)

  1) Main Menu was enlarged to fit the extra options.

  2) Screen Capture option added.

  3) Ruler/Grid option added.

  4) PhoneView option enlarged to hold 500 entries.  Loads faster too.
     PhoneView columns are reversed so Name is first.

  5) Calculator had a bug where when you first used it, you could only
     enter 5 digits.

  6) MemTool's default "hot-key" has changed from Ctrl-Enter to Ctrl-Alt.

  7) Modifications to the Editor:

       Search and Translate:          Cut and Paste:
       --------------------------------------------------------------
       F1 - Search forward            F7  - Line mark                  
       F2 - Search forward again      F8  - Column mark                
       F3 - Search backward           Ins - Insert scrap               
       F4 - Search backward again     Del - Delete block               
       F5 - Translate forward          -  - Delete to scrap            
       F6 - Translate backward         +  - Copy to scrap              
                                      
       Ctrl -->, <-- allows you to jump to the next word and previous word.
       Ctrl-Home, End allow you to jump to the Top and Bottom of the screen.
       Alt-K - Delete to EOL  
       Alt-F - Filename path
       Alt-O - Output filename
       Alt-C - Case toggle   
       Alt-H - Help screen   
       Alt-R - Restore session  
       Alt-W - Write file/block  (modified for block functions)
       Alt-P - Print file/block  (modified for block functions)
       Alt-I - Toggle insert/replace mode (modified since Ins now
                                           copies marked block to scrap).

       Various other bugs fixed.
  
                                    
  8) Alternate hot-key is no longer specified on the MT command line.

  9) The MemTool Setup option has been removed.  It's not needed anymore.
     Setup is done through "switches" specified in the Autoexec.Bat file:

     SET MTPATH=    Is the path of where the MemTool files are stored.
     SET MTDS=      Is the path of where DiskSwapping files are stored.
     SET MTFLAGS=   Sets various MemTool options:

         /D               Use diskswapping.
         /I               Ignore EMS memory if available.
         /Ncode           If MemTool will be used on a network.  "code" is
                            a UNIQUE code that differentiates the users.
         /Hxxx,xxx,desc   Use a hot-key other than the default (Ctrl-Alt).

     Switches needed if default values are not acceptable.  (see manual).

 10) Appearance of MemTool screens was slightly modified.


 
VERSION 2.01  (05/30/90)

 1) Bug fixed where "Disk-swapping" files (SR01, SR02, etc.) were not
    being automatically erased by the program.




```
{% endraw %}

## FILE2175.TXT

{% raw %}
```
Disk No: 2175                                                           
Disk Title: Memtool                                                     
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: MemTool                                                  
Author Version: 2.01                                                    
Author Registration: $30.00                                             
Special Requirements: Hard drive recommended.                           
                                                                        
LONG DESCRIPTION                                                        
If you're looking for a program to help you be more productive,         
MEMTOOL may be the answer.  It's a memory resident program that only    
takes up 8K when properly installed.  User definable hot keys, LAN      
support, and optional diskswapping to save memory, are just a few of    
its functions.  MEMTOOL will automatically use EMS memory if you have   
it.                                                                     
                                                                        
MEMTOOL features include:                                               
                                                                        
~ Calculator                                                            
                                                                        
~ Calendar/Appointment pad                                              
                                                                        
~ File editor                                                           
                                                                        
~ DOS quick guide                                                       
                                                                        
~ Diskview                                                              
                                                                        
~ Phoneview                                                             
                                                                        
~ Alarm clock                                                           
                                                                        
~ Ascii table                                                           
                                                                        
~ Screen capture.                                                       
                                                                        
The phoneview file can hold up to 500 entries. The file editor will     
handle a file up to 35K or 2500 lines which ever comes first, and the   
calendar/appointment pad is limited only by disk space.                 
                                                                        
For those of you who aren't using a memory resident program, MEMTOOL    
is an easy and useful set of utilities you can call on to help get      
your work done efficiently.                                             
                                                                        
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
║                 <<<<  DISK #2175 MEMTOOL  >>>>                          ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To start program, type:  MT  (press enter)                            ║
║                                                                         ║
║   To print documentation, type: COPY MANUAL.DOC PRN  (press enter)      ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.

```
{% endraw %}

## README.DOC

{% raw %}
```
===========================================================================
LOADING VERSION 2.01

Be sure to refer to the installation instructions in the User's Manual.
Several steps must be followed if you have been using an older version,
and certain others may be needed as well.  Please read chapter "INSTALLATION"
in MANUAL.DOC.



===========================================================================
LIST OF MEMTOOL FILES:                                         VERSION 2.01

   Filename    Purpose
---------------------------------------------------------------------------
      MT.EXE   MemTool program.
 CONVPHN.EXE   Program to convert ver 1.2 PhoneView file to ver 2.01 format.
  MANUAL.DOC   Text file containing MemTool's user's manual.
 CHANGES.DOC   Lists various modifications since version 1.1
REGISTER.DOC   Text file containing the form needed to register MemTool.
       *.HLP   DOS Quick Guide help files.
       *.CLK   Holds parameters specified in Alarm Clock option.
       *.PHN   Holds the PhoneView names and numbers.
       *.FIL   Holds various data used by MemTool.



```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
 
 REGISTRATION FORM - VERSION 2.01:
  
 Remember that Shareware software like MemTool allows computer users to
 try many different types of software and then commit themselves to a small
 few that best fits their needs, by registering their use of the software
 with the author.
 
 If you decide that you like MemTool, find it useful and will continue to
 use the program, you should show your support and register your copy.  For
 contributions of $30 or more I will include your name in my database of 
 users entitled to automatically receive future minor versions at no cost. 
 Major versions will be offered for a small fee to cover processing and 
 shipment costs.

 When sending in your registration form be sure to include the source or
 person who introduced you to MemTool and the size diskette you prefer.


 ==========================================================================

 MEMTOOL Version 2.01                            CHRIS W. WOODMANSEE
                                                 6548 CAMDEN AVE
 DATE: _____________                             SAN JOSE,  CA 95120


 Contribution amount: _______  Users: ______  Disk size (5.25, 3.5): ______

 Where you obtained MemTool: ______________________________________________
  
         Name: ____________________________________________________________
 
      Address: ____________________________________________________________

         City: ____________________________________________________________
 
  State & Zip: ____________________________________________________________

 Phone number: ____________________________________________________________


 ==========================================================================


 If you have any comments or suggestions on improving MemTool please

 take a few moments to write them down: ___________________________________

 __________________________________________________________________________

 __________________________________________________________________________

 __________________________________________________________________________

 __________________________________________________________________________

 __________________________________________________________________________

 __________________________________________________________________________



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2175

     Volume in drive A has no label
     Directory of A:\

    FORMAT   HLP      2321  12-06-88   6:38p
    DIR      HLP      2561  12-06-88   6:37p
    DATE     HLP      1281   9-29-88   5:35p
    RESTORE  HLP      3041  12-06-88   6:39p
    SORT     HLP      3121  12-06-88   6:39p
    MANUAL   DOC     45959   5-30-90   9:54p
    TYPE     HLP      2721  12-06-88   6:39p
    PROMPT   HLP      2721  12-06-88   6:38p
    RMDIR    HLP      1761  12-06-88   6:39p
    RENAME   HLP      1921  12-06-88   6:39p
    BACKUP   HLP      2641  12-06-88   6:22p
    DOSHELP  HLP      1369   5-29-89   6:35p
    MKDIR    HLP      2241  12-06-88   6:38p
    DISKCOPY HLP      1761  12-06-88   6:37p
    CHDIR    HLP      2001  12-06-88   6:39p
    TIME     HLP      1361   9-29-88   4:48p
    CLOCK    CLK         9   5-30-90   9:41p
    VER      HLP       641   9-09-88   6:52p
    CHKDSK   HLP      2321  12-06-88   6:37p
    COPY     HLP      2401  12-06-88   6:37p
    PATH     HLP      2161   5-29-89   6:33p
    REGISTER DOC      2397   5-30-90   9:56p
    RULER    FIL       429   5-27-90  12:49p
    CHANGES  DOC      4136   5-30-90   9:57p
    README   DOC      1137   5-30-90   9:55p
    MT       EXE    137430   5-30-90   9:45p
    DELETE   HLP      1921  12-06-88   6:37p
    EDITOR   HLP      1725   5-23-90   7:41p
    CONVPHN  EXE     31232   2-16-90   2:34p
    CALTIME  FIL       421   2-01-90   8:52p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       728   1-01-80   9:36a
    FILE2175 TXT      3701   7-13-90  11:40p
           33 file(s)     271610 bytes
                           32768 bytes free
