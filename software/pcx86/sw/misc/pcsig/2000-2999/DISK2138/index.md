---
layout: page
title: "PC-SIG Diskette Library (Disk #2138)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2138/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2138"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ANOTHER LIFELESS PLANET & ME WITH NOBEER"

    NOBEER is a logical adventure game. It's a big one, too, created with
    the Gamescape adventure game generation system. The response has been
    incredible. If you like adventure gaming, this is a must have! In
    NOBEER, the player is an astronaut stranded on a hostile alien planet
    (sound familiar? Players of Marooned Again will recognize the character
    immediately). The goal: find a way to get to an alien space ship and rig
    it to blast off to safety. That's easier said than done; as the
    astronaut you will face perils such as deadly slurpers, air squids,
    bladderbeasts and the terrible pun palm tree!
    
    Unlike many adventure games, ANOTHER LIFELESS PLANET AND ME WITH NO
    BEER is completely logical. Everything in the game has a reason (well,
    maybe) and everything you do has a purpose (most of the time) and above
    all, everything is logical (well, to an alien, anyway). This game is
    funny too. Do you know what happens when you eat a frog? Or the only
    way to get past an alien monster?  Have you ever tried to munch a
    slimeball? Do you know what it feels like when you try to pick up
    slime? What does a dead astronaut's head look like? You'll find all
    this out in ANOTHER LIFELESS PLANET AND ME WITH NO BEER.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2138.TXT

{% raw %}
```
Disk No: 2138                                                           
Disk Title: Another Lifeless Planet & Me With NoBeer                    
PC-SIG Version: 1.1                                                     
                                                                        
Program Title: ANOTHER LIFELESS PLANET AND ME WITH NO BEER              
Author Version: 1.3                                                     
Author Registration: Donation, or $59.00 if using for game creation.    
Special Requirements: 640K RAM.                                         
                                                                        
    NOBEER is a LOGICAL adventure game.   It's a big one, too, created  
with the GAMESCAPE adventure game generation system.  The response has  
been incredible.  If you like adventure gaming, this is a MUST HAVE!    
    In NOBEER, the player is an astronaut stranded on a hostile alien   
planet (sound familiar?  Players of MAROONED AGAIN will recognize the   
character immediately).  The goal:  find a way to get to an alien       
space ship and rig it to blast off to safety.  That's easier said than  
done;  as the astronaut you will face perils such as deadly SLURPERS,   
AIR SQUIDS, BLADDERBEASTS and the terrible PUN PALM TREE!               
    Unlike many adventure games, ANOTHER LIFELESS PLANET AND ME WITH    
NO BEER is completely logical.  Everything in the game has a reason     
(well, maybe) and everything you do has a purpose (most of the time)    
and above all, everything is logical (well, to an alien, anyway).       
    This game is FUNNY too.  Do you know what happens when you eat a    
frog?  Or the only way to get past an alien monster?  Have you ever     
tried to munch a slimeball?  Do you know what it feels like when you    
try to pick up slime?  What does a dead astronaut's head look like?     
You'll find all this out in ANOTHER LIFELESS PLANET AND ME WITH NO      
BEER.                                                                   
                                                                        
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
║    <<<<  Disk #2138 ANOTHER LIFELESS PLANET & ME WITH NO BEER  >>>>     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation, type: COPY NOBEER.DOC PRN (press enter)         ║
║                                                                         ║
║ To run self-archiving program, type: NOBEER [destination] (press enter) ║
║                                                                         ║
║ To install on a floppy disk, type: FLOPPY  (press enter)                ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## NOBEER.DOC

{% raw %}
```
              ANOTHER LIFELESS PLANET AND ME WITH NO BEER  v 1.3
Copyright 1989 Dennis Drew.  Distributed as "Try-Then-Buy"(tm) software.

                         ALL USERS!!! IMPORTANT!!!
    The following two lines (with the minimum configurations shown) must 
be in your CONFIG.SYS file on your DOS BOOT disk.  

                            FILES=20
                            BUFFERS=20

    If you do not have a CONFIG.SYS file on your DOS BOOT disk, or if it 
does not contain at least the above specs, then you must update your 
CONFIG.SYS file so that it does.   To do this, switch to your main 
boot drive (usually either A: or C:) and then enter the following 
lines EXACTLY:

    COPY CONFIG.SYS + CON CONFIG.SYS (press enter)
    FILES=20 (press enter)
    BUFFERS=20 (press enter)
    (press F6 key)
    (reboot your computer)

    If you are unsure about how to do this, contact your computer dealer.  
This computer file is a STANDARD requirement of most modern computer 
programs and should be present on every computer system.   If you don't 
have a computer dealer then send us a nice donation and we can help you 
with this.

EXTRACTING THE PROGRAMS:
    This is a SELF-EXTRACTING program.  In order to extract it, place the 
NOBEER disk in drive A.  

FLOPPY USERS ENTER:
    NOTE: NOBEER is a very big adventure game.  Floppy users will have to 
unarc NOBEER in sections.  To do so, enter the following commands.  Each will 
unarc part of NOBEER.  The entire package will take appx 2-6 diskettes on 
smaller formats.  Have SIX formatted disks on hand (360K each):
    Even if you have only one floppy, the computer should prompt you to 
insert your destination diskette when required.  Make sure that if you are 
floppy based, your destination diskettes are formatted.  
    ENTER:  FLOPPY
    This program will transfer all the NOBEER files to floppy disk.

HARD DRIVE USERS ENTER:   
         MD C:\NOBEER     (or whatever hard drive)
         NOBEER C:\NOBEER  

TO LOAD ANOTHER LIFELESS PLANET AND ME WITH NO BEER:
    Be sure the programs are extracted first (see above) and that your 
computer has an appropriate CONFIG.SYS file (see also above).
 
FLOPPY DISK USERS:  Insert the disk that contains GSCAPE.EXE in drive A 
(after booting computer with DOS).  Enter:  GSCAPE NOBEER
    Once the program is loaded, you may remove the GSCAPE disk (do 
this before you answer the main screed COLOR question).  The 
GAMESCAPE disk will no longer be needed.  Insert the disk that 
contains NOBEER.GS1 in the drive and follow the GAMESCAPE instructions 
from there.  

HARD DISK USERS:  Switch to the directory where you placed the files (in 
our example, CD C:\NOBEER  ).   Enter  GSCAPE NOBEER

                                SUMMARY
    NOBEER is one of the funniest adventure games you will ever play.  
Unlike some adventure games you may have played, it is LOGICAL.  It was 
designed to be so. 
    NOBEER is a "Try-Then-Buy" program.  Use it.  Once you see how 
valuable it is, please make whatever donation you feel is reasonable.  
Your generous (yea, GENEROUS, that's the ticket...) donations will help me 
stay in business so I can write more programs.  Please do not leave 
donating up to the next guy.  If you like the game, let me know the best 
way possible:  MONEY!  (heh heh)  Praise and comments are also welcome 
additions. 
                Dennis Drew   PO Box 101   Joplin, MO  64802

                For more information, unarc and then enter:    
                          COPY NOBEER.TXT PRN 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2138

     Volume in drive A has no label
     Directory of A:\

    NOBEER   EXE    162655   5-14-90   6:08p
    NOBEER   DOC      3618   5-13-90   7:14p
    FLOPPY   BAT       676   5-11-90   5:31p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   5-03-90   3:38p
    FILE2138 TXT      2517   6-05-90   5:23p
            6 file(s)     170198 bytes
                          149504 bytes free
