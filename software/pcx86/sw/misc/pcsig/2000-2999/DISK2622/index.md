---
layout: page
title: "PC-SIG Diskette Library (Disk #2622)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2622/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2622"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2622.TXT

{% raw %}
```
Disk No: 2622                                                           
Disk Title: LogiMenu                                                    
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: LOGIMENU                                                 
Author Version: 1.51                                                    
Author Registration: $50.00 + $5.00 S&H                                 
Special Requirements: 384K RAM and DOS 3.0+.                            
                                                                        
This is the new generation of DOS menu systems. Whether you're a user   
who wants to access a few programs quickly and easily (with a touch of a
key or two) or a user who needs to turn on all the bells and whistles,  
LOGIMENU should satisfy you. Extensive on-line help, EGA/VGA 43/50 line 
mode supported, mouse support, with passwords, screen saver, hidden hot 
keys, customizable help.  All this, plus an attractive presentation.    
                                                                        
LOGIMENU can also remind you of important dates with its Event Tracking 
feature.  Furthermore, LOGIMENU does not use a single byte of memory    
while your own programs run.  The automatic installation process scans  
your hard drive for popular programs.  And one of its three levels of   
installation will suit your needs perfectly.                            
                                                                        
Up to 50 items per menu, 50 sub-menus (multiple levels), 80 commands per
item, and 30 general hidden hot keys. LOGIMENU has enough room to       
satisfy the most demanding user.                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## LOGIREF.TXT

{% raw %}
```
PROGRAM TITLE:
     LOGIMENU

PROGRAM VERSION:
     1.51

DESCRIPTION:
     This is a new generation of DOS menu system. From the user
     who only needs to access programs quickly and easily (with a
     touch of a key or two), to the user who needs to turn on all
     the bells and whistles. LOGIMENU satisfies them all.
     Extensive on-line help, EGA/VGA 43/50 line mode supported,
     mouse support, password security, screen saver, hidden hot
     keys, customizable help. All this in an attractive
     presentation.

     LOGIMENU can also remind you of important dates with its
     Event Tracking. Brief, LOGIMENU can make your life much
     easier. Furthermore, LOGIMENU does not use a single byte of
     memory while your own programs run. Also included is
     reporting system that allows you to generate various
     interesting reports. Its automatic installation process
     scans your hard drive for popular programs. One of its three
     level of installation will suit your needs perfectly.

     Up to 50 items per menu, 50 sub-menus (multiple levels), 80
     commands per item and 30 general hidden hot keys. LOGIMENU
     has enough room to satisfy the most demanding user.

WHO IS THE INTENDED USER?
     Every hard disk users.

UNIQUE FEATURES OF THE PROGRAM:
     * Support 43/50 line mode for EGA/VGA monitors. The menu
       and the DOS applications can be set in different modes.
       The mode set in DOS does not affect the mode in which
       LOGIMENU is set (unless DEFAULT mode is ON).
     * Automatic installation. Easy enough for the beginner,
       powerful enough for the most demanding.
     * Event scheduler. There is no better place to put an event
       scheduler than in a menu system.
     * Hidden hot keys. Special keys (like function keys, or Alt
       keys) can be set to work on any menus and sub-menus. For
       frequently used functions, this is extremely helpful.
     * Three levels of help. One of them is customizable.
     * Truly mouse driven. The mouse interface is not a
       keystroke simulator. It is really a completed mouse
       interface with hot zones and mouse cursor.

PROGRAM'S CAPACITY OR LIMITATIONS:
     * 50 menus
     * 50 Items per menu (34 Items in 25 line mode)
     * 80 commands per Item
     * 79 characters per commands
     * 30 General Hidden Hot Keys
     * 32 K for overall data file size (my setup is huge and my
            file is only 10K)
     * 4  Simultaneously job counter
     * NO LIMIT on number of Events
     * NO LIMIT on number of sub-menu level (50 menus limit will
            come first)

REQUIREMENTS:
     DOS 3.0 or higher, 384 K of memory, IBM compatible.

HOW TO START THE PROGRAM:
     INSTALL
       A: [ENTER]
       INSTALL [ENTER]

     LOGIMENU
       LM [ENTER]

WHAT IS THE REGISTRATION FEE FOR YOUR PROGRAM?
     $50 plus $5 for postage and handling. All in Canadian funds.
     User can register by phone with Visa, Master Card or
     American Express.

     Site licenses and quantity discount available.

MATERIALS OR SERVICES THAT COME WITH
REGISTRATION:
     Bounded manual, latest version on disk, telephone support,
     all updates free of charges (we are only charging for
     postage and handling), and a free PHONE DIRECTORY program
     with auto-dial feature.

     We also give the user a personal registration number and a
     key code to get rid of the solicitation window.

LIST OF FILES:

README      Small documentation file explaining the install process.
I.EXE       The INSTALL program. Must be started from INSTALL.BAT.
INSTALL.BAT Installation batch file. The install should always be called
            from that file.
LMCOMP      Compressed file containing the following files:

                        CONTENT OF LMCOMP FILE

DISK#1      Disk Identification. This is required by the INSTALL program.
L1          The main LOGIMENU program. INSTALL will copy this to LMENU.EXE
L2          Contains the SET-UP program. INSTALL will copy this to LMENUSET.EXE
L3          Contains the report generator. INSTALL will copy this to
            LMREPORT.EXE
L4          Contains the EVENT scheduler. INSTALL will copy this to LMEVENT.EXE
README.EXE  Program for viewing text files. (Mainly the readme.txt file).
INST.DAT    INSTALL data file. It contains the list of files that must be
            installed.
LMENUCFG.BW The configuration file for Black & White. INSTALL will copy this
            to LMENU.CFG
LMENUCFG.COLThe configuration file for color monitors. INSTALL will copy this
            to LMENU.CFG
BOOT.COM    Utility used to re-boot your computer.
LMALARM.COM Memory resident alarm used by the ALARM in LOGIMENU ("ANYWHERE"
            feature).
MPAUSE.COM  Like the DOS PAUSE, but also checks for the mouse.
README.TXT  "read me" data file. Use program README.EXE to view.
LMENU.DAT   Sample MENU. This file must exist to allow LMENU to run.
LMENU.HLP   Custom application help file.
LMENU.IDX   Custom application help index file.
LMENUS.HLP  Help data file used by the Set-Up.
REGIST.FRM  Registration form.
LMENU.DOC   LOGIMENU reference manual.
LMENU.EVT   The EVENT data file.
LMJOB.DAT   LOGIMENU job tracking data file.
LMTRACK.DAT Application usage data file.



LM.BAT      Not included with LOGIMENU. It is created by the INSTALL. This
            is the file that must always be used to run LOGIMENU.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2622

     Volume in drive A has no label
     Directory of A:\

    I        EXE     70166  11-22-90   1:40p
    INSTALL  BAT       264  11-22-90   1:40p
    LMCOMP          220838  11-22-90   1:40p
    LOGIREF  TXT      5525  11-27-90   5:22p
    README            6400  11-22-90   1:40p
    GO       BAT        38   1-31-91  12:58a
    FILE2622 TXT      2295   6-06-91   3:05p
    GO       TXT       771   6-06-91   3:09p
            8 file(s)     306297 bytes
                           11264 bytes free
