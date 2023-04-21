---
layout: page
title: "PC-SIG Diskette Library (Disk #2147)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2147/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2147"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ECOMASTER & BORDER"

    Get in touch with nature and animals, through your computer!
    ECOMASTER's an ecology simulation in which you predict how animals will
    survive in a series of different environments.  This is a game of skill
    and chance.  Some of the areas where skill comes in include learning
    which animals perform best in various environments, or
    biomes, and guessing which biome will follow the current one.
    
    This is a challenging game for everyone.  Accompanied by a dictionary
    or encyclopedia, it can also be a great way to learn about different
    animals from around the world!
    
    BORDERS is a battle for turf -- not in the city but on your computer
    screen.  In this strategy game you try to claim more area than your
    opponent while blocking his attempts to do the same.  Players take turns
    staking out their territory within a rectangular area.  Claimed areas
    can only be in the form of triangles.  Your aim is to make the largest
    triangles (thereby claiming the most area), while thwarting your
    opponent's attempts at making his triangles.  The object is to outsmart
    your opponent by enclosing more than 40% of the available area to win.
    
    You'll find this easy-to-learn game challenging and fun as you
    learn the various strategies that make or break your game.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BORDER.DOC

{% raw %}
```
BORDERS  -- Copyright 1988, Steve Estvanik

Borders is a strategy game in which you try to enclose more areas 
than your opponent.  Players take turns claiming points within a 
rectangular area, trying to make triangles connecting those 
points.  Your aim is to make the largest triangles you can, while 
selecting points to block your opponent's triangles.  If a 
proposed triangle is clear of your opponent's points and 
intersects no other triangles, your score increases by the area of 
that triangle.  The first player to enclose more than 40% of the 
available area wins. 

Turns
-----
Visible Points
--------------
Players alternate turns.  Each turn a player first claims 3 
visible points.  Use the arrow keys to move the crosshair cursor 
(xhair) up, down, right or left.  Use the <Ins> and <Del> keys to 
increase or decrease the number of pixels the cursor moves each 
time.  (A box in the upper right corner shows the cursor 'grain'.)  
When you get to a place you want to claim, press <enter> or 
<spacebar> and a point in your color will appear. 

Hidden Points
-------------
After visible points are entered, you can either enter 3 more 
points, which will be hidden from your opponent, or (after turn 2) 
you can try to make a triangle.  If you choose hidden, you enter 
the points just as you did before.  When you're done, they'll 
become invisible and your opponent's turn begins. 

Making Triangles
----------------
For the first two turns, players just enter points to prevent an 
easy, quick victory.  After those turns, you have the option of 
entering hidden points, or trying to make a triangle. 
      
When you decide to attempt a triangle, an empty box appears in 
place of the xhair.  Your opponent's hidden points are now 
displayed and they become permanent.  Move the box to cover a 
point and press <enter> to select that point.  (You only have to 
have the point in the box, it needn't be centered.)  After you 
select the third point, the program tests to see if it's a proper 
triangle.  If not you'll get a message and your turn is over. 

Once you decide to try a triangle you can't change your mind and 
add hidden points.  If there aren't any legal triangles, then 
enter the points of an illegal one in order to move on.  There's 
no penalty for attempting an illegal triangle, other than the loss 
of that part of the turn. 

Winning
-------
Play continues until one player fills his/her sidebar.  The 
sidebars indicate relative area controlled by each player.  You'll 
need to enclose 40% of the possible area in order to win. 
      

```
{% endraw %}

## FILE2147.TXT

{% raw %}
```
Disk No: 2147                                                           
Disk Title: Ecomaster & Border                                          
PC-SIG Version: S1                                                      
                                                                        
Program Title: Ecomaster                                                
Author Version: 1.1                                                     
Author Registration: $15.00                                             
Special Requirements: CGA or higher graphics board.                     
                                                                        
ECOMASTER is an ecology simulation is which you try to predict how      
animals will survive in a series of different environments.  This is a  
game of skill and chance.  Some of the areas where skill comes in       
include learning which animals perform best in various environments, or 
biomes, and guessing which biome will follow the current one.           
                                                                        
This is a challenging game for everyone.  Accompanied by a dictionary   
or encyclopedia, it can also be a great way to learn about different    
animals from around the world!                                          


Program Title: Border                                                   
Author Version: 1.1                                                     
Author Registration: $15.00                                             
Special Requirements: CGA or higher graphics.                           
                                                                        
Borders is a strategy game in which you try to claim more area than your
opponent.  Players take turns staking out their territory within a      
rectangular area.  Claimed areas can only be in the form of triangles.  
Your aim is to make the largest triangles, and thereby claim the most   
area, while thwarting your opponent's attempts at making his triangles. 
The object is to outsmart your opponent by enclosing more than 40% of   
the available area to win.                                              
                                                                        
While this may sound simple, various strategies make this game          
challenging and fun.                                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2147

     Volume in drive A has no label
     Directory of A:\

    FILE2147 TXT      2897   6-04-90  11:22p
    DESERT   BLD      4096   3-14-85   4:50p
    ECO      EXE     53424  10-02-89  11:21a
    ECO      INS      1169   9-15-89   3:14p
    ECO1     BLD      4096  12-16-89   2:17p
    FOREST   BLD      4096   3-14-85   4:50p
    JUNGLE   BLD      4096   9-02-85  11:54a
    PLAINS   BLD      4096   3-14-85   4:50p
    README   LST      4001  11-27-89   2:21p
    TUNDRA   BLD      4096   3-14-85   4:50p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       771   6-04-90  11:27p
    ATT      BGI      6269   8-29-88   5:00a
    BORDER   DOC      2639   8-22-88  11:06a
    BORDER   EXE     48489   2-23-89  12:29a
    BORDER   SCR      4000  12-20-89   3:10p
    CGA      BGI      6253   8-29-88   5:00a
    EGAVGA   BGI      5363   8-29-88   5:00a
    HERC     BGI      6125   8-29-88   5:00a
    PC3270   BGI      6029   8-29-88   5:00a
           20 file(s)     172043 bytes
                          143360 bytes free
