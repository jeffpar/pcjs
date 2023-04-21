---
layout: page
title: "PC-SIG Diskette Library (Disk #2456)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2456/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2456"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WINDOWS ARCADE GAMES I"

    People with happy trigger fingers will love this game.  ATMOIDS is a new
    Windows version of Asteroids.  Your mission is simple, blast the
    boulders away until they get pulverized out of existence.  Your trusty
    interstellar ship is guided with the cursor keys.  This game will
    challenge even the most experienced players, since there is no
    hyper-space key to dodge out of the way at the last second.
    
    You're on the final approach one thousand meters above the moon, do you
    have what it takes to land the Lunar Excursion Module without creating
    another crater?
    
    On this real-time simulation you must safely guide your lander with the
    mouse before you run out of fuel, or accumulate too much horizontal and
    vertical speed.  You can change the settings for gravity, fuel, and
    thrust if you desire another level of difficulty.
    
    KLOTZ is an interesting Tetris clone from Europe.  As in the original
    Tetris, polygons fall from the top of your screen and it's your job to
    pack them neatly at the bottom before they stack up.  It has 11 levels
    of play, optional multi-windowed displays, a look-ahead to the next
    piece, and even a statistical bar-line chart depicting fallen pieces.
    If you've never played this type of game, watch out, it's quite
    addicting.
    
    WINTRIS is another Tetris-like game in which falling blocks must be
    rotated and dropped to form solid lines.  This program has all the
    standard features; you can select the level, number of lines to
    begin with, speed up, slow down, sound, and music.  All these features
    can be preset or changed on the fly.  A unique feature of the game is
    "The Extended Set".  The "Extended Set" is an extra set of block shapes
    not found on any other game.  This feature is worth checking out,
    especially if you have become adept or bored with the same shapes which
    are prevalent in similar games.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2456.TXT

{% raw %}
```
Disk No: 2456                                                           
Disk Title: Windows Arcade Games I                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: Atmoids                                                  
Author Version: 07/90                                                   
Author Registration: $10.00                                             
Special Requirements: Windows 3.0                                       
                                                                        
People with happy trigger fingers will love this game.  ATMOIDS is a new
Windows version of Asteroids.  Your mission is simple, blast the        
boulders away until they get pulverized out of existence.  Your trusty  
interstellar ship is guided with the cursor keys.  This game will       
challenge even the most experienced players, since there is no          
hyper-space key to dodge out of the way at the last second.             

Program Title: Lander                                                   
Author Version: 1.1                                                     
Author Registration: $15.00 for source code.                            
Special Requirements: None.                                             
                                                                        
You're on the final approach one thousand meters above the moon, do you 
have what it takes to land the Lunar Excursion Module without creating  
another crater?                                                         
                                                                        
On this real-time simulation you must safely guide your lander with the 
mouse before you run out of fuel, or accumulate too much horizontal and 
vertical speed.  You can change the settings for gravity, fuel, and     
thrust if you desire another level of difficulty.                       

Program Title: Klotz                                                    
Author Version: 2.09                                                    
Author Registration: None.                                              
Special Requirements: Windows 3.0                                       
                                                                        
KLOTZ is an interesting Tetris clone from Europe.  As in the original   
Tetris, polygons fall from the top of your screen and it's your job to  
pack them neatly at the bottom before they stack up.  It has 11 levels  
of play, optional multi-windowed displays, a look-ahead to the next     
piece, and even a statistical bar-line chart depicting fallen pieces.   
If you've never played this type of game, watch out, it's quite         
addicting.                                                              

Program Title: Wintris                                                  
Author Version: 3.1                                                     
Author Registration: $15.00                                             
Special Requirements: Windows 3.0                                       
                                                                        
WINTRIS is another Tetris-like game in which falling blocks must be     
rotated and dropped to form solid lines.  This program has all the      
standard features; you can select the level, number of lines to         
begin with, speed up, slow down, sound, and music.  All these features  
can be preset or changed on the fly.  A unique feature of the game is   
"The Extended Set".  The "Extended Set" is an extra set of block shapes 
not found on any other game.  This feature is worth checking out,       
especially if you have become adept or bored with the same shapes which 
are prevalent in similar games.                                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## KLOTZ.DOC

{% raw %}
```
KLOTZ is a game of falling pieces similar to TETRIS, for use
under Microsoft Windows 2.x.

The current version is 2.09.

KLOTZ209.ZIP contains the following files:
-----------------------------------------------------------
KLOTZ.DOC		This file
KLOTZ.WRI		A five page description of the
			game.
KLOTZ.EXE		The game (English version)
-----------------------------------------------------------

DOCUMENTATION

KLOTZ.WRI is written with Windows Write, using a printer driver for the
HP DeskJet Plus printer.  If you have something different, (PostScript
printer, HP LaserJet with Softfonts), first try to print it asis.  If
this doesn't work, try to change the whole document to a font your
printer supports.  You can do that most easily by marking the whole
document with CTRL-SHIFT-End and then changing the font.  Note: you
don't loose the font size information, if you select a new font's name
only and not a specific font size.  If this still doesn't work, save
the document as KLOTZ.TXT with TEXT ONLY switched on.  Then load
KLOTZ.TXT into the Notepad, switch line wrap to on and print it using
the Notepad's PRINT function.

You don't need to read the documentation in order to play KLOTZ.


INSTALLATION

Installation of KLOTZ is easy: simply copy KLOTZ.EXE into
the directory you normally use for Microsoft Windows
applications and start it from there. KLOTZ will create
a file KLOTZ20.DAT after the first play. It will change WIN.INI,
if you request it to do so. 


COPYRIGHT

Copyright (c) 1989 by Wolfgang Strobl. You may distribute
KLOTZ209.ZIP as a whole, if you don't modify it, if you 
do not charge money for it and if you give your recipients
the same right to distribute it further.
```
{% endraw %}

## WINTRIS.DOC

{% raw %}
```
WINTRIS  (TETRIS for MS WINDOWS)
 
Purpose:
    The purpose of the game is to fill as many horizontal lines as possible.
    When a line is filled it disappears and all of the blocks above it shift 
    down.
 
Motion:
    to move a block right press: '6' or right arrow or right mouse button
    to move a block left  press: '4' or left  arrow or left  mouse button
    to rotate a block press: '5' or empty key on NumPad or middle mouse button
    to drop a block press: '2' or down arrow or space bar
    (when using mouse, make sure the pointer is inside the window)
 
 
Scoring:
    Points are scored every time a line or several lines disappear.  If you
    used a 'drop' key and the block made a line(s) disappear,
    you will receive more points, depending on how far the block fell.
    Also the more lines disappear at the same time, the more points are
    awarded.  If 1 line disappears you get 1 point; if 2 lines
    disappear you get 2 points per line for a total of 4 points; if
    3 lines disappear you get 3 points per line for a total of 9 points;
    and 16 points for 4 disappearing lines.

    The score is kept in the caption bar. There are two numbers separated
    by a ':'; the one on the right is your current score and the one on the
    left is your current speed level.  Speed level increases every time
    50 blocks have been dropped.  You can also start with a higher speed
    by choosing the appropriate level at the beginning of the game.
 
Other Features:
    You can increase your current speed level by pressing "Ctrl+F".
    And you can decrease your current speed level by pressing "Ctrl+S".
    You cannot slow down below your starting level; thus, if you started
    at speed level 5 and are currently playing at level seven, the lowest
    speed level that you can go to is 5.

    For a more challenging game, you can choose to have some lines filled
    when the game starts.  The number of pre-filled lines can be chosen
    from the score board dialog.

    You can restart the game by  pressing "Ctrl+N", at this point you will
    get a list of the top ten scores and can choose a different speed level and
    starting number of lines filled.

    The game terminates when there is no more room for falling blocks.
    If your score is in the top ten, then you will be prompted for your name.
    Top ten scores are kept in the file -- 'wintris.scr'.

    "Ctrl+P"/"Ctrl+C" pauses/continues the game
    "Ctrl+O" toggles sound (on/off)
    "Ctrl+M" toggles sound (music/beeps)
    "Ctrl+Z" resizes screen to the standard size
    "Ctrl+N" start new game
    "Ctrl+S" slower play
    "Ctrl+F" faster play
    "Ctrl+E" toggles standard set/extended set

 
WINTRIS is a shareware product.
    Please freely distribute the product, (and make sure you include
    both files, wintris.exe and wintris.doc) and don't charge anything
    for the game.
 
Copyright: 
    Kipnis Enterprises
    781 Glenhill Ct.
    Fremont, CA 94539
 
Registration:
    Much time and effort went into the development of this program.
    If you find this product useful/entertaining/time wasting/funny/boring/
    addictive/challenging/or anything else please register by sending
    $15.00 to the above address. A registration will entitle you to one
    free upgrade.
 
History:
    WINTRIS was initially released during the summer of 1989.
	The first release was called TETRIS.

    Release 2 ADDED FEATURES
	* bugs fixed
	* bitmaps are used -- faster play
	* sound on/off
	* pause key
	* multiple levels of play
	* scoring strategy
	* score board

    Release 3 ADDED FEATURES
	* sound effects
	* resizable window
	* option to start game with filled lines
	* blocks drop instanteneously
	* extended set of blocks

 
Comments:
    If you have any comments/suggestions or extra $$$ send them to 
    the above address.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2456

     Volume in drive A has no label
     Directory of A:\

    WINTRIS  DOC      3949   7-26-90  10:54p
    WINTRIS  EXE     21584   7-23-90  10:28p
    WINTRIS  SCR        72   7-31-90  12:50p
    LANDER   EXE     57504   6-04-90   9:20p
    LANDER   WRI      5504   6-10-90   5:48p
    KLOTZ    DOC      1747   5-29-90   9:23p
    KLOTZ    EXE     35360   5-29-90   9:25p
    KLOTZ    WRI     31104   2-06-90   9:18p
    ATMOIDS  EXE     21136   7-19-90   8:30p
    GO       BAT        40   1-01-80   6:00a
    FILE2456 TXT      4447  12-11-90   2:04p
    GO       TXT       962  12-11-90   2:08p
           12 file(s)     183409 bytes
                          132096 bytes free
