---
layout: page
title: "PC-SIG Diskette Library (Disk #1764)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1764/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1764"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LINEWARS"

    LINEWARS is a two-user three dimensional space war game.  It makes the
    most of your graphics display adapters with high definition graphics.
    You can play LINEWARS alone or against a friend using a modem or cable.
    
    You are looking at your opponent from your Cobra Mark IV multi-purpose
    General Contact Vehicle.  Your ship is equipped with an energy shield,
    up to six missiles and two beam lasers, front and rear.
    
    The events of this game take place far away in intergalactic space,
    where stars are few and alien vessels common.  Therefore, you should pay
    attention not only to your opponent but also to all other ships in your
    vicinity.  And there is always the chance that your missile launching
    system may jam.  If this happens, you cannot use missiles during the
    battle.
    
    Supports a mouse and ports COM1 to COM4 and speeds of 300 to 19200 bps.
    It has an easy-to-use menu-driven interface for various game settings.
    Includes a terminal program with dialing and auto-answer features.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1764.TXT

{% raw %}
```
Disk No: 1764                                                           
Disk Title: LineWars                                                    
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: LINEWARS                                                 
Author Version: 1.52                                                    
Author Registration: $24.00                                             
Special Requirements: CGA or EGA and a modem can be used.               
                                                                        
LINEWARS is a two-user three dimensional space war game.  It makes the  
most of your CGA or EGA display adapters with high definition graphics. 
You can play LINEWARS alone or against a friend using a modem or cable. 
                                                                        
You are looking at your opponent from your Cobra Mark IV multi-purpose  
General Contact Vehicle.  Your ship is equipped with an Energy Shield,  
up to six Missiles and two Beam Lasers, front and rear.                 
                                                                        
The events of this game take place far away in intergalactic space,     
where stars are few and alien vessels common.  Therefore, you should pay
attention not only to your opponent but also to all other ships in your 
vicinity.  And there is always the chance that your Missile Launching   
System (MLS) may jam.  If this happens, you cannot use missiles during  
the battle.                                                             
                                                                        
Supports ports COM1 to COM4 and speeds of 300 to 19200 bps.  It has an  
easy-to-use menu-driven interface for various game settings.  Includes a
terminal program with dialing and auto-answer features.  And it even    
SPEAKS!                                                                 
                                                                        
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
║                 <<<<  Disk #1764  LINEWARS  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: LINEWARS                                        ║
║                                                                         ║
║ To print documentation, type: COPY LINEWARS.DOC PRN                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LWERSION.DOC

{% raw %}
```
                        L I N E W A R S   Version 1.xx
                       Made in Finland by Patrick Aalto


      Versions of LineWars

      
      1.01     10.04.1989      First version, used for testing purposes
                               only, not released anywhere. 
                               
      1.02     15.04.1989      Included 'Dial'-option with a new procedure
                               to handle input of a telephone number and
                               codename. First tests via a telephone line.  
                               
      1.03     22.04.1989      Included options to enable LineWars to run
                               under MBBS. Quitting with Ctrl-X and checks
                               for carrier loss were added and connection
                               protocol was changed. More testing...  
                               
      1.04     02.05.1989      Some changes to Laser and Shield energy,
                               error in Missile Guidance System was 
                               corrected. Testing copies were sent to   
                               a few potential users. Still not publicly
                               available.
                                
      1.05     11.05.1989      Included code to check if DesQview (tm) is
                               active. If it is, then 'Ouch, that hurts'
                               will not be said, since it would crash the
                               system (uses INT 08). Thanx to Kim Heino
                               for reporting this problem and for code to
                               check DesQview's presence. 

      1.06     18.05.1989      Added a sleep-time on the main menu. If no
                               key is pressed within two minutes, LineWars
                               will quit with message: 'Sleeptime exceeded'.
                               This is because some modems do not tell the
                               real Carrier Status, so if a user logs off
                               while a BBS-door-LineWars is active, it did
                               stay active forever! Thanx to Pekka Koivunen
                               for reporting this.
                               Disk errors while writing Settings are now
                               handled properly (a generic 'Disk Error' -
                               message is shown). Thanx to Kim Heino for
                               pointing out the importance of this.

      1.10     22.05.1989    - A small bug in sleep-time corrected.
                             - Check for EGA adapter changed, thanx to  
                               Antti Kaihola.
                             - Added scoring routines.
                             - Changed the initial positions in the game.
                               Now your enemy is on your right, behind the
                               rotating asteroid!  
                             - Added keys PgUp and PgDn to control speed.
                             - Added code to exchange version numbers in
                               initial handshake. This means, that future
                               versions will be downwards-compatible with
                               this version.  
                             - CGA version (LineWarC) saw the daylight, it's
                               version number was also 1.10 to minimize
                               confusion between version numbers.

      1.11     24.05.1989    - Corrected a bug in Parameter Exchanging
                               routine, which sometimes missed letters in
                               Enemy Name.
                             - Added support for COM3 and COM4.

      1.12     06.06.1989    - Scores are sorted by name during save.
                             - Small bug in CGA version, check whether LW
                               is online or offline, corrected.

      1.49     24.08.1989    - CGA and EGA versions integrated into one
                               program.
                             - MCGA, VGA and Amstrad HRG support added.
                             - Steering with mouse or keyboard. 
                             - Soundeffects and titlemusic added.  
                             - Fully adjustable Framerate added.
                             - New option 'System Info' gives info about
                               the machine LineWars is running in.  
                             - Line protocol rewritten, now features
                               error checks and allows multiple
                               commands at one time.  
                             - Various minor changes and bug fixes.

      1.50     26.09.1989    - Steering also with Amstrad Joystick.  
                             - Speech removed.  
                             - Various minor changes and bug fixes
                               to documentation and code. 

      1.51     29.09.1989    - Added a command line parameter /NC
                               (No Check). It should be used if
                               and only if LineWars hangs trying
                               to check the machine type. 
                             - When in Duel mode, music can no longer
                               be played. This is because the line check
                               does not work while the music plays.
      
      1.52     03.02.1990    - Removed parameter /NC. LineWars does
                               not hang any more.
                                 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1764

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        10   3-10-90   8:35a
    LINEWARS EXE     67888   3-10-90   8:28a
    LINEWARS MUS     26188   7-14-89  12:33p
    LINEWARS DOC     17222   3-10-90   8:31a
    LINETECH DOC      4854   3-10-90   8:34a
    LWERSION DOC      5765   3-10-90   8:47a
    LINEWARS REG      1703   3-10-90   8:34a
    GO1      BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   5:15a
    FILE1764 TXT      2517   4-12-90   7:58p
           10 file(s)     126725 bytes
                           30208 bytes free
