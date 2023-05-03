---
layout: page
title: "PC-SIG Diskette Library (Disk #2212)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2212/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2212"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SAM'S MENU"

    SAM'S MENU is designed with large hard drives in mind, although it will
    run just as well on a 10MB hard disk as it will on a 360MB hard disk.
    Run applications can be at the touch of a single key. All
    commands or subdirectory names are entered once and SAM's MENU
    remembers them for you.  Don't worry about remembering and typing those
    complicated commands; concentrate on getting your work done.
    
    If several people use the same PC, each one can have their own menu
    screen with password protection.  Want all your utility programs on one
    screen by themselves?  Would you like to let your children use your
    computer but you don't want them in your files?  Put all their games on
    one of the menu screens, and restrict their access to the rest of the
    menuing system.  This and more is possible with SAM's MENU.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2212.TXT

{% raw %}
```
Disk No: 2212                                                           
Disk Title: Sam's Menu                                                  
PC-SIG Version: 1                                                       
                                                                        
Program Title: Sam's Menu                                               
Author Version: 5.01                                                    
Author Registration: $25.00                                             
Special Requirements: Hard drive.                                       
                                                                        
SAM's MENU is designed with large hard drives in mind, although it will 
run just as well on a 10 megabyte hard disk as it will on a 360 megabyte
hard disk.  Applications can be run at the touch of a single key instead
of typing in the commands.  No more forgetting commands or subdirectory 
names. All these are entered one time only, and SAM's MENU remembers the
commands for you.  It will free you from the hardship of remembering and
typing those complicated commands and will let you concentrate on       
getting your work done.                                                 
                                                                        
If you don't have a large hard disk, but several people use the same PC,
each one can have their own menu screen (with password protection).     
Maybe you want all your utility programs on one screen by themselves. Or
maybe you would like to let your children use your computer, but you    
don't want them in your files, you can put all their games on one of the
menu screens, and restrict their access to the rest of the menuing      
system.  This and much more is possible with SAM's MENU.                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
                               SAM's MENU - Files

    GO       .BAT  Beginning Instructions.
    HDINSTAL .BAT  The beginning installation batch file.
    ATTR     .COM  Used to change the attributes on SMENU0.DAT so it is not 
                   accidently over-written or erased.
    FLAG     .DAT  Menu Data file (Colors, Reminder Messages & Dates).
    SDROW    .DAT  Menu Data file (Passwords).
    SMCMD    .DAT  Menu Data file (Menu Prompts, Command Lines, Paths, etc.).
    SMENU    .DAT  Menu Data file (Menu Titles, Colors, Columns).
    INSTALL0 .EXE  Creates INSTALL.BAT, SMENU0.DAT, MENU.BAT, RUN.BAT, 
                   PRINTDOC.BAT, PRINTER.TXT.
    SMENU0   .EXE  Main menu program.
    GO       .TXT  Text for the GO.BAT.
    INSTALL  .BAT  Tells the HDINSTAL.BAT where to put the menu files.
    SMENU0   .DAT  File that is put on the root of C:>, then hidden and 
                   write-protected.
    MENU     .BAT  Menu startup file.
    RUN      .BAT  Runs applications and returns to menu.
    REGISTER .TXT  Registration text, includes unique registration number 
                   based on answers from the INSTALL0.EXE program.
    PRINTDOC .BAT  Batch file to send documentation to printer.
    PRINTER  .TXT  Notice to turn on printer, for PRINTDOC.BAT.
    SMENU    .DOC  SAM's MENU customized documentation.
    FILES    .TXT  This File

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔════════════════════════════════════════════════════════════════════════════╗
║                <<<< # 2212 S A M ' s   M E N U  >>>>                       ║
╠════════════════════════════════════════════════════════════════════════════╣
║   To Install the Menu on your hard drive, at the DOS prompt type:          ║
║              A:> HDINSTALL                                                 ║
║                                                                            ║
║   To Send the documentation to your printer, at the DOS prompt type:       ║
║              A:> PRINTDOC                                                  ║
╚════════════════════════════════════════════════════════════════════════════╝




```
{% endraw %}

## HDINSTAL.DOC

{% raw %}
```





                     SAM's MENU INSTALLATION DOCUMENTATION


  To install SAM's MENU on your hard drive or hard card at the DOS prompt on 
drive A:> type HDINSTAL and press the <ENTER> key.

  The first screen is informing you that you are in the installation process.  
If you find yourself in this process by mistake you can press the 'Q' at any 
time to abort the process.

  ***  NOTE!  I will use the term <ENTER> key very often in this text, if your 
machine does not have the <ENTER> key, read in <RETURN> key.

  The second screen is asking you which drive you have the SAM's MENU diskette 
in.  If you have the diskette in drive A:>, simply press the letter "A".  If 
you have the diskette in drive B:>, simply press the letter "B".

  The third screen is asking if you want to 1) Copy all the necessary SAM's 
MENU file into the default subdirectory on drive C:>, or 2) if you would like 
to change the drive and/or subdirectory.

  If you press "1" the HDINSTAL process will create a subdirectory on drive C:> 
and copy the necessary files into that subdirectory.

  If you press "2" the fourth screen will ask you if: 1) you would like to 
change the drive.  If you press "1" you will be asked to press the letter of 
the drive that you would like SAM's MENU files to be copied to.  2) you would 
like to change the subdirectory.  If you press "2" you will be asked to type in 
the name of the subdirectory that you would like the files copied into.  3) you 
would like to change both the drive and the subdirectory.  If you press "3" you 
will be asked to press the letter of the desired drive, and then type in the 
name of the subdirectory.

  The next screen will ask if the drive and subdirectory that is shown on the 
bottom of the screen is what you intended [Y/N].  If you want to change 
anything press N, and you will start the process over.  

  If everything is alright press "Y" and the process will create the BATch 
files necessary to complete the install process.

  This process will NOT invade the integrity on any of your present files.  If 
you want SAM's MENU to come up when you first turn on your computer, you will 
have to make some changes to your AUTOEXEC.BAT file.  You will have to place 
SAM's MENU subdirectory path in your AUTOEXEC.BAT file.  You can do this thru 
any wordprocessor.  Bring up your AUTOEXEC.BAT file in the wordprocessor.  If 
you already have a PATH command in the file, type the following at the end of 
the command:  ;++:\**;  Place the drive letter in the space marked by the ++, 
and the subdirectory name in the space marked by the **.  

Example of an AUTOEXEC.BAT file:

ECHO OFF
CLS
PATH=C:\DOS;C:\MENU;C:\UTILITY;
PROMPT $P$G $
CD\MENU
MENU



SAM's MENU INSTALLATION DOCUMENTATION                                    PAGE 2


  If you do not have a PATH command in you AUTOEXEC.BAT, you can create one in 
your wordprocessor, using the same illistration as on the bottom of the 
previous page.

  When the HDINSTAL process is through, it will automatically bring you into 
SAM's MENU on the opening screen.  This "Evaluation Copy" screen only appears 
once a day so as not to disrupt your use of the program.

  For further instructions, please consult the SAM's MENU Documentation.

           Thank you for trying SAM's MENU.

           Wilfred H. Moshier (SAM)

```
{% endraw %}

## PRINTER.TXT

{% raw %}
```
 
 
 
 
 
 
 
 Turn your printer on and adjust the paper, you are about to print the 14
 
 pages of documentation for SAM's MENU.
 
 
 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2212

     Volume in drive A has no label
     Directory of A:\

    SAMSMENU            25   1-31-90
    GO       BAT        28   8-30-89
    HDINSTAL BAT        34   8-30-89
    PRINTDOC BAT        93   8-31-89
    ATTR     COM       627   8-30-88
    FLAG     DAT       484   8-31-89
    SDROW    DAT        55   8-31-89
    SMCMD    DAT     47520   8-31-89
    SMENU    DAT       142   8-31-89
    HDINSTAL DOC      3426   8-30-89
    SMENU    DOC     40517   8-31-89
    INSTALL0 EXE     42319   8-31-89
    SMENU0   EXE     76982   1-31-90
    FILES    TXT      1399   8-31-89
    GO       TXT       728   6-06-90   8:57a
    PRINTER  TXT       149   8-31-89
    FILE2212 TXT      2303   6-06-90   9:12a
           17 file(s)     216831 bytes
                           93184 bytes free
