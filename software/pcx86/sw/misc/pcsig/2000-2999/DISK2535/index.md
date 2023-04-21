---
layout: page
title: "PC-SIG Diskette Library (Disk #2535)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2535/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2535"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2535.TXT

{% raw %}
```
Disk No: 2535                                                           
Disk Title: JumpJet                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: Jumpjet                                                  
Author Version: 1.04                                                    
Author Registration: $15.00                                             
Special Requirements: CGA, EGA, or Hercules graphics.                   
                                                                        
Your mission: seek and destroy three enemy bombers.  Sounds easy -- but 
talk's cheap!  This is one of many missions that will let you find out  
if you have what it takes to fly a JUMPJET.  Old fighter pilots will    
remember the "Defender" arcade series when they play this arcade style  
fighter plane game.  Use the cursor keys to fly over mountains, evade   
fighters, and attack tanks.  Use the space bar to shoot your machine    
guns.  Good arcade style graphics make it easy to play -- but           
challenging to win. The program also supports the Ad-Lib and compatible 
sound boards for realistic crashes, explosions, and the sweet sound of  
success.                                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## JUMPJET.DOC

{% raw %}
```





SHAREWARE!!!

JUMPJET is user-support software and you are encouraged to share 
this software with others.  Feel free to circulate JUMPJET over 
bulletin boards or in Shareware libraries. If the software is 
found interesting or useful, then register the software.  If 
registered, an updated version of JUMPJET will be sent along with 
a printed owners manual. A registration fee of FIFTEEN dollars 
will entitle you to these supplements.

DEVELOPMENT

Jumpjet was written almost entirely in assembly language using 
the Microsoft macro assembler 5.1. The front end or the menu in-
terface and the high-score database was written in C using the 
Microsoft C compiler 5.1.

I tried to keep speed in mind while writing this software. Even 
though there may be 50 to 100 objects animating on the screen at 
one time, the game will have no problem processing the informa-
tion quickly. Running Jumpjet on a 386 33MHz machine will appear 
to run at the same speed as a 6MHz 286 machine. There are ap-
proximately 18 frames per second. You will notice, however, a 
speed deference on slower machines. An 8088 or 8086 machine run-
ning at 4.77 MHz will lag at times, but still usable. I found 
that a NEC V-20/V-30 (replaces the Intel 8088/8086 and execute 
about 30% faster) chip in the slower machines helps tremendously. 
There is almost no lag.  Also the 8088/8086 machines running 
faster than 4.77MHz seem to have no problem.

GETTING STARTED

It is a good idea to make a backup of your original disk. Jumpjet 
has only a few files. They are JJCOLOR.EXE, JJEGAHI.EXE, 
JJEGALO.EXE, JJHERC.EXE, JUMPJET.DOC and JUMPJET.SCR. If for some 
reason the file JUMPJET.SCR is not on the disk, don't worry. This 
file is the score database file and if it does not exist, the 
program will create a new one.

INSTALLING TO HARD DISK

     1.   Place your disk (or its backup) in drive A:.
     2.   Enter into your hard disk root directory.
     3.   Type MD\JUMPJET and press ENTER.
     4.   Type CD\JUMPJET and press ENTER.
     5.   Type COPY A:*.* and press ENTER.







INSTALLING TO A FLOPPY (BACKUP)

The program does not need to be installed onto a floppy, but it 
is a good idea to make a backup of the disk.

     1.   Place your DOS system disk in drive A:.
     2.   If you have one drive, type DISKCOPY and press enter. 
          If you have two drives, type DISKCOPY A: B: and press 
          ENTER.
     3.   Follow the screen prompts.

JUMPJET FILES

JUMPJET.EXE -  This file will allow you to select the graphics 
               display that best fits your system. Note: This 
               will not automatically select the graphics display 
               type for your computer.
JJCOLOR.EXE -  This file is the main program for Color Graphics 
               Adapters (CGA).
JJEGAHI.EXE -  This file is the main program for Enhanced 
               Graphics Adapter. The EGA mode is 640 X 350 in 
               resolution and uses sixteen colors. This mode was 
               included by popular requests.
JJEGALO.EXE -  Same as JJEGAHI but the resolution is 640 X 200.
JJHERC.EXE -   This is the main program for Hercules graphics 
               adapter.
JUMPJET.SCR -  This file is the score database.  It contains all 
               the top ten high-scores. NOTE: If you are using a 
               floppy, make sure that the floppy is not WRITE 
               PROTECTED.

RUNNING JUMPJET

     1.   If you are starting from a floppy disk:  Place the disk 
          into drive A: and type JUMPJET and press ENTER. Follow 
          the screen prompts. (Read note.)
     2.   If you are starting from a hard disk:  Type CD\JUMPJET 
          and press ENTER.  Next type JUMPJET and press ENTER. 
          Follow the screen prompts. (Read note)

          NOTE: JJCOLOR.EXE, JJEGAHI.EXE, JJEGELO.EXE and 
          JJHERC.EXE are different programs. See Jumpjet Files 
          for explanation. Run the program that best fits your 
          system. The program JUMPJET will run the select file. 
          I.E., if CGA 4 color mode was selected, then JJCOLOR is 
          executed.

THE GRAPHICS SELECTION MENU
You will see a pop-up menu describing various types of graphics 
adapters. Select the one that best fits your system. Use the UP 
and DOWN arrow keys to highlight an item and press ENTER to 
select that particular graphics display.







THE MAIN MENU

The first screen you will see is the main menu. This is where you 
can select from playing the game, introduction, saving the score, 
reviewing the score, registration and exiting the game.  To 
select an item, use the up and down ARROW keys and press ENTER or 
press the capitalized letter of the desired item.

GAME CONTROLS

You can control your jet by pressing the ARROW keys in the cor-
responding direction you want the jet to go. By pressing the same 
direction again, the jet will accelerate in that direction.

PAUSING YOUR GAME

If you wish to pause the game, press P. Press any key to continue 
play.


EXITING YOUR GAME

If you wish exit the game, press ESC and you will enter the main 
menu. From the main menu, press 'E' or highlight the 'Exit' item 
and press ENTER.

THANKS!

Well, this is it. Give Jumpjet a try. I hope you'll have fun 
playing this game and thanks for playing!

If you have any suggestions or ideas, please let me know. I would 
like to here from you, and if have any gripes, also let me know.

DISCLAIMER

The author of this software has used his best efforts in prepar-
ing the software. These efforts include development, research and 
testing to determine its effectiveness.

The author makes no warranty of any kind, expressed or implied, 
with regard of this software or documentation. The author shall 
not be liable in any event for incidental or consequential 
damages in connection with, or arising out of, the furnishing, 
performance, or use of the software.

Montsoft
P.O. Box 4426
Orange, CA 92613-4426

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2535

     Volume in drive A has no label
     Directory of A:\

    README            1052  11-03-90   9:33a
    JUMPJET  DOC      6116  11-03-90   8:45a
    JJCOLOR  EXE     49367  11-02-90  12:41a
    JJEGAHI  EXE     51511  11-02-90   8:29p
    JJEGALO  EXE     51207  11-02-90   8:32p
    JJHERC   EXE     49815  11-02-90   8:34p
    JUMPJET  EXE     15045  11-03-90   9:41a
    JUMPJET  SCR       520  11-03-90   8:39a
    GO       BAT         9  10-05-90   8:57a
    FILE2535 TXT      1855  10-05-90   8:56a
           10 file(s)     226497 bytes
                           90112 bytes free
