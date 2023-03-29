---
layout: page
title: "PC-SIG Library Disk #195"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0195/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0195"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "PC-GRAF"

    A BASIC program to plot line drawing graphs of data sets.  Three
    different versions of the program are provided (PC-GRAF2, 3, 4,) to
    allow the user to choose the number of features and degree of IBM PC
    compatablilty required.  Data entry is from the keyboard or read in
    from data files.  Additional programs include computer use log, screen
    color control, and keyboard redefinition.
    
    System Requirements:  Some programs require color, BASIC
    
    How to Start:   To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.  Consult the .DOC files for additional
    program information.
    
    Suggested Registration:  $20.00
    
    File Descriptions:
    
    PC-GRAF  DOC  PC-GRAF documentation - to view use "Type pc-graf.doc"
    INSTALL  BAT  Installs DOS system and BASICA on PC-GRAF disk
    DEMOSUB  BAS  Demo program...How to call SUBGRAF from your own program
    PC-GRAF2 BAS  Fastest version of PC-GRAF with the least features
    LOGPRINT BAS  Program to print the computer use log.
    PC-GRAF4 BAS  PC-GRAF with color and B&W plots and plotter output
    SUBGRAF3 BAS  Plotting subroutine from PC-GRAF3
    SUBGRAF2 BAS  Plotting subroutine from PC-GRAF2
    SUBGRAF4 BAS  Plotting subroutine from PC-GRAF4
    SIMPLEX  BAS  Simplex function fitting algorithm
    PC-GRAF3 BAS  PC-GRAF with color and B&W plots... no plotter support
    LOGOFF   BAS  Logs end of session in log file. Gives total time
    LOGOFF   BAT  Batch file to run LOGOFF program
    LOGON    BAT  Batch file to run LOGON program
    README   BAK  Backup of disk description
    README   DOC  Disk description - to view use "type readme.doc"
    LOGON    BAS  Program to log start of computer session in log file
    SORT     EXE  Program to sort graph data
    CONVERT  BAS  Convert old GRAPH2 program files to PC-GRAF format
    LOGPRINT BAT  Batch file to run LOGPRINT
    CONFIG   SYS  System file required to install ANSI.SYS screen driver
    AUTOEXEC BAT  Batch file for PC-GRAF disk
    TESTPLOT DTA  Demonstration plot for use with PC-GRAF
    KEYDEF   BAT  Batch file to run KEYDEF
    KEYDEF   BAS  Program to allow redefinition of keyboard keys in DOS
    KEYDEF        File containing key redefinition commands.  Type to run
    COLOR    BAT  Runs COLOR program and activate color change
    COLOR    SCR  File that contains screen color commands. Type to run
    COLOR    BAS  Program to set screen foreground and background colors
    PRINTQUE DOC  Documentation for Printque
    PRINTQUE BAS  BASIC language printque for ASCII files

### Directory of PC-SIG Library Disk 0195

     Volume in drive A has no label
     Directory of A:\

    INSTALL  BAT       987   3-04-85   8:47p
    PC-GRAF  DOC     23296   2-22-85   4:59p
    PC-GRAF4 BAS     36987   3-10-85   8:02p
    LOGPRINT BAS      2399   2-22-85   5:32p
    PC-GRAF2 BAS     25461   2-21-85   9:49a
    DEMOSUB  BAS      1365   2-21-85   5:45p
    SUBGRAF3 BAS     14269   2-20-85   4:12p
    SUBGRAF2 BAS     11054   2-20-85   4:18p
    SUBGRAF4 BAS     21517   3-10-85   8:05p
    PC-GRAF3 BAS     30146   2-21-85   9:50a
    SIMPLEX  BAS      7252   2-22-85   5:44p
    CONVERT  BAS      2065   2-21-85  10:03a
    SORT     EXE      1408  10-20-83  12:00p
    LOGON    BAS      5607   2-22-85   5:37p
    README   DOC      1920   1-01-80   2:29a
    LOGON    BAT        15   7-14-84   2:51p
    LOGOFF   BAT        16   7-14-84   2:50p
    LOGOFF   BAS      3005   2-22-85   5:29p
    LOGPRINT BAT        28   9-20-84   1:18p
    README   BAK      1427   2-22-85   5:54p
    AUTOEXEC BAT       190   1-01-80  12:06a
    CONFIG   SYS        30   3-04-85  10:50a
    COLOR    BAS      1744  10-02-84   3:41p
    COLOR    SCR        17   5-18-84  10:00p
    COLOR    BAT        36   3-04-85  10:50a
    KEYDEF             122   1-01-80  12:06a
    KEYDEF   BAS      5202   1-01-80  12:06a
    KEYDEF   BAT        16   1-01-80  12:03a
    TESTPLOT DTA      2002   1-01-80   2:48a
    PRINTQUE DOC     12416   1-01-80   1:42a
    PRINTQUE BAS     16000   1-01-80  12:21a
           31 file(s)     227999 bytes
                           74752 bytes free
