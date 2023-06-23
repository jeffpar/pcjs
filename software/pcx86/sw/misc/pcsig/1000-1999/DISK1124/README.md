---
layout: page
title: "PC-SIG Diskette Library (Disk #1124)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1124/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1124"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-KEY-DRAW 4 OF 4 (ALSO 344,345,1032)"

    PC-KEY DRAW combines the features of CAD, paint, slide show, and desktop
    publishing programs into one powerful and flexible drawing package.
    
    Create a wide variety of graphics such as:
    
    ~ Mechanical design
    
    ~ Country quilt design
    
    ~ Landscape architecture
    
    ~ Graphics game development
    
    ~ Business presentations
    
    ~ Graphic art
    
    Fast and easy to use, with or without a mouse.
    
    Drawing features include:
    
    ~ Lines -- parallel, spoke
    
    ~ Circles -- arcs, pie slices, ellipse
    
    ~ Curves -- sine, rose, spiral
    
    ~ Others -- dots, vectors, polygon, fillets and arrows
    
    Paint features include:
    
    ~ Spray paint
    
    ~ Shading
    
    ~ 29 colors
    
    ~ Modify color
    
    ~ 64 fill patterns
    
    ~ Fade/shift/strip colors
    
    ~ Reverse video
    
    Maximum drawing size is 55120 x 1600 with 64 layers.  Thirty-six text
    fonts are included in the registered version, four fonts in the
    shareware version, with the ability to create your own.  It can read and
    write HP soft fonts.  Text can be placed at the cursor location,
    justified, moved, rotated, and imported a an ASCII file.  Screen
    modification includes all standard options and a few unusual ones.
    
    Additional features include object area calculation, animation,
    templates, banner/poster printing, macro language, and powerful
    slide-show system.
    
    The newest version of PC-KEY-DRAW also includes HYPERDRAW.  HYPERDRAW
    provides a means to link related screens of information together in a
    database structure that is ideal for a variety of tasks such as teaching
    aids, interactive slide shows, image organization, drawing detailing,
    project scheduling, cataloging, process diagraming, and much more.
    There is also a full interactive tutorial that uses the linked screens
    of HYPERDRAW to teach the basic drawing commands of PC-KEY DRAW.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1124.TXT

{% raw %}
```
Disk No: 1124                                                           
Disk Title: PC-Key-Draw 4 of 4 (also 344,345,1032)  
PC-SIG Version: S3.9                                                    
                                                                        
Program Title: PC-Key-Draw                                              
Author Version: 3.76                                                    
Author Registration: $100.00                                            
Special Requirements: Two floppy drives and CGA.                        
                                                                        
PC-KEY DRAW combines the features of CAD, paint, slide show, and desktop
publishing programs into one powerful and flexible drawing package.     
                                                                        
Create a wide variety of graphics such as:                              
                                                                        
~ Mechanical design                                                     
                                                                        
~ Country quilt design                                                  
                                                                        
~ Landscape architecture                                                
                                                                        
~ Graphics game development                                             
                                                                        
~ Business presentations                                                
                                                                        
~ Graphic art                                                           
                                                                        
Fast and easy to use, with or without a mouse.                          
                                                                        
Drawing features include:                                               
                                                                        
~ Lines -- parallel, spoke                                              
                                                                        
~ Circles -- arcs, pie slices, ellipse                                  
                                                                        
~ Curves -- sine, rose, spiral                                          
                                                                        
~ Others -- dots, vectors, polygon, fillets and arrows                  
                                                                        
Paint features include:                                                 
                                                                        
~ Spray paint                                                           
                                                                        
~ Shading                                                               
                                                                        
~ 29 colors                                                             
                                                                        
~ Modify color                                                          
                                                                        
~ 64 fill patterns                                                      
                                                                        
~ Fade/shift/strip colors                                               
                                                                        
~ Reverse video                                                         
                                                                        
Twenty-six text fonts are included in the registered version, four fonts
the shareware copy with the ability to create your own.  Text can be    
placed at the cursor location, justified, moved, rotated, and imported a
an ASCII file.  Screen modification includes all standard options and a 
few unusual ones.                                                       
                                                                        
Additional features include object area calculation, animation,         
templates, banner/poster printing, macro language, and powerful         
slide-show system.                                                      
                                                                        
The newest version of PC-KEY-DRAW also includes HYPERDRAW.  HYPERDRAW   
provides a means to link related screens of information together in a   
database structure that is ideal for a variety of tasks such as teaching
aids, interactive slide shows, image organization, drawing detailing,   
project scheduling, cataloging, process diagraming, and much more.      
There is also a full interactive tutorial that uses the linked screens  
of HYPERDRAW to teach the basic drawing commands of PC-KEY DRAW.        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MAZE.TXT

{% raw %}
```
                       Daedalus' Labyrinth
                         A 3-D Maze Game

In the September, 1988 issue of Scientific American, A. K.
Dewdney discusses three dimensional mazes and presents a 3-D maze
based on the legend of Daedalus' Labyrinth.  The discussion of
three dimensional mazes is fascinating and inspired me to create
a computer version of the maze using the HyperDraw capability of
PC-KEY-DRAW.

MAZE.ARC contains a number of screen files for PC-KEY-DRAW, Ver
sion 3.50 or later, that form a 3-D maze.  You can move through
the various levels of the maze by moving the cursor with a key
board, mouse, or joystick and clicking to go up or down in the
maze to another level.  A map of the entire level is available by
clicking outside of an up or down button.  A thread back to the
surface is provided by the <Back Space> command.

To use the maze start by creating a subdirectory on your hard
disk.  Copy MAZE.COM into the subdirectory, about 800K will be
needed.  Run MAZE.COM and it will create the screens that will be
needed.  Run PC-KEY-DRAW, Version 3.5 or later.  Set "Drive for
Completed Drawings" as the drive and subdirectory that contains
the unarced files of MAZE.COM by using the Status Screen
<Ctrl-s>.  Load the first screen using <F8 o START(Cr) y>, where
(Cr) stands for <ENTER> or <Return>.  Follow on screen instruc
tions.  Click on START.

To learn more about this and other three dimensional mazes, check
out Scientific American, Computer Recreations, September, 1988.
Enjoy the maze and PC-KEY-DRAW.  Good luck in finding a solution.
Your comments and suggestions are welcome.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1124

     Volume in drive A has no label
     Directory of A:\

    COPYMOVE HOT      4608   1-12-90  11:58a
    COPYMOVE SCN     16512   6-24-88   1:36a
    CURVE1   HOT      2688   1-12-90  11:58a
    CURVE1   SCN     16512   6-23-88   5:18a
    CURVE2   HOT      3584   1-12-90  11:58a
    CURVE2   SCN     16512   6-23-88   5:58a
    EXIT     HOT       256   1-12-90  11:58a
    EXIT     SCN     16512   6-24-88   2:06a
    FIGURE   HOT      3328   1-12-90  11:58a
    FIGURE   SCN     16512   6-24-88   5:26a
    INTRO    SCN     16512   6-25-88   1:37a
    INTRO2   PIC      9728   6-25-88   1:43a
    LINES    HOT      3328   1-12-90  11:59a
    LINES    SCN     16512   6-23-88   6:59a
    MAZE     COM     61602  12-14-89  10:12p
    MAZE     TXT      1652  12-14-89  10:07p
    MODIFY   HOT      3968   1-12-90  11:59a
    MODIFY   SCN     16512   6-24-88   4:44a
    MORE     SCN     16391   2-09-90  11:18p
    MOREINFO SCN     16391   2-09-90  11:16p
    MOVEROND SCN     16391   1-12-90  12:28p
    PAINT    HOT      3968   1-12-90  12:00p
    PAINT    SCN     16512   6-24-88   4:35a
    README   _T1       759  12-14-89  10:24p
    START    SCN     16391   2-09-90  10:33p
    TEXT     HOT      2688   1-12-90  12:00p
    TEXT     SCN     16391   1-12-90  12:17p
    TUTORIAL MCR       512   1-23-90  10:17p
    FILE1124 TXT      5679   7-10-90   9:40a
           29 file(s)     338911 bytes
                            3072 bytes free
