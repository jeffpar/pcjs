---
layout: page
title: "PC-SIG Diskette Library (Disk #2437)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2437/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2437"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOUBLE TROUBLE AND NYET"

    Anyone who loves puzzles will spend many hours trying to figure this one
    out!
    
    DOUBLE TROUBLETM is a deceptively simple, yet challenging puzzle for
    young or old.  Starting from a scrambled position, the user rotates two
    intersecting circles of colored balls, grouping them into four color
    groups.  As the color groups are formed, the two intersecting circles
    promptly break up color groups already formed.  Eventually, the balls
    will be grouped into their proper positions, completing the puzzle
    successfully.  Try again, but for a lower score!  The program counts
    each key press taken to move the balls into position.  Help is
    available at a key stroke!
    
    If you haven't yet acquired Tetris, here's your chance to buy a
    "Tetris"-like program through shareware.  The object of the game is to
    pack a 2-dimensional box with block-shaped figures as they come falling
    down from the computer sky.  Try hard not to leave any spaces, but don't
    despair.  You'll get it in time!
    
    This game appeals to both computer game veteran and novice alike (it is
    quite addictive!).  Once you think you're pretty hot stuff, NYET
    challenges you to make the game harder -- drop those blocks faster!  Now
    see what you can do!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2437.TXT

{% raw %}
```
Disk No: 2437                                                           
Disk Title: Double Trouble and NYET                                     
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Double TroubleTM                                         
Author Version: 1.0                                                     
Author Registration: $15.00                                             
Special Requirements: EGA                                               
                                                                        
Anyone who loves puzzles will spend many hours trying to figure this one
out!                                                                    
                                                                        
Double TroubleTM is a deceptively simple, yet challenging puzzle for    
young or old.  Starting from a scrambled position, the user rotates two 
intersecting circles of color balls, grouping them into four color      
groups.  As the color groups are formed, the two intersecting circles   
promptly break up color groups already formed.  Eventually, the balls   
will be grouped into their proper positions, completing the puzzle      
successfully.  Try again, but for a lower score!  The program counts    
each key press taken to move the balls into position.  Help is          
available at a key stoke!                                               
Program Title: Nyet                                                     
Author Version: 1.1                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
If you haven't yet acquired Tetris, here's your chance to buy a         
"Tetris"-like program through shareware.  The object of the game is to  
pack a 2-dimensional box with block-shaped figures as they come falling 
down from computer sky.  You'll try not to leave any spaces, but don't  
despair.  You'll get it in time!                                        
                                                                        
This game appeals to both computer game veteran and novice alike (it is 
quite addictive!).  Once you think you're pretty hot stuff, NYET        
challenges you to make the game harder - drop those blocks faster!  Now 
see what you can do!                                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## NYET.DOC

{% raw %}
```



                                     NYET
                                  Version 1.1 


                                  How To Play

        Randomly shaped pieces drop from the top of the screen.  Your job is 
to arrange them as they fall so that you can drop the greatest number of 
pieces into the available volume.  You maneuver the pieces by rotating them 
and moving them horizontally.  If you have arranged the pieces so that a solid 
row of squares is formed horizontally, that row will be eliminated, giving you 
some breathing room. 

        Your score is a function of three factors: the current level, how 
quickly you place the pieces, and whether you are peeking at the next piece.

        You choose your starting level at the beginning of the game.  After 
that, your level increases every time you eliminate 10 rows, except that if, 
for example, you start at level 3, you will stay at that level until you have 
eliminated 30 rows.

        You can improve your score by instantaneously dropping pieces as soon 
as you have them properly aligned. 

        If you are peeking at the next piece, your award for getting a piece 
down will be decreased by about one-third.  You may find this is worth the 
price. 


                                About The Game

        I claim no credit for inventing this game; that was apparently 
done by A. Pajitnov and V. Gerasimov in the Soviet Union.  They called the 
game TETRIS.  My version of the game was originally also called TETRIS, but 
has now been renamed NYET.  

        Although I did not invent the game, I did write this implementation 
from scratch (using Turbo Pascal Version 4.0).  I did it mainly for the hell 
of it, but I improved on the original where I thought it needed it.  The two 
main improvements are the ability to run on monochrome screens (although it 
looks better in color) and a more responsive feel.  I also used the movement 
keys that are used in the commercial version of the game, although I 
personally prefer the original movement keys.  (In fact, you can use the 
original movement keys as well; i.e., to move left, 7 or J; to rotate, 8 or K; 
to move right, 9 or L; to peek ahead, 1 or M; to drop, 4 or Space Bar.)  
Finally, my version should work at the same speed no matter how fast your 
processor is; I have heard that that is a problem with the commercial version. 

















                                  
                         Changes Made for Version 1.1

        1.  The most obvious change is the name, from TETRIS to NYET.

        2.  The sound effects routines were rewritten so that they should 
sound the same regardless of processor speed.  In addition, a sound toggle was 
added. 

        3.  In version 1.0, the pieces were dropped at about the same 
(impossibly high) rate at the 2 or 3 highest levels.  The incrementation has 
been made rational in version 1.1.  Also a minor bug in the drop routine (an 
occasional "stutter" in the drop rate probably unnoticed by anyone but me) has 
been fixed.

        4.  In version 1.0, entry of a string of spaces after a new high score 
could sometimes cause the computer to lock up.  That has been fixed. 

 

        This program is freeware, subject only to the restriction that it is 
not to be sold commercially.  I would, however, appreciate comments, bug 
reports, and suggested improvements for future versions.  My CompuServe ID is 
71600,521. 


                                                David Howorth 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2437

     Volume in drive A has no label
     Directory of A:\

    FILE2437 TXT      3109  11-05-90   2:57p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT      2311  12-05-90  12:45a
    NYET     DOC      3605   6-16-88   2:39p
    NYET     EXE     23872   6-16-88  12:57p
    DTDEMO   EXE     62528   6-09-90   3:04p
            6 file(s)      95465 bytes
                           62464 bytes free
