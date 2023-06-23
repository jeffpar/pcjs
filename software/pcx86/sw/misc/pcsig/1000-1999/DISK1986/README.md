---
layout: page
title: "PC-SIG Diskette Library (Disk #1986)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1986/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1986"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPIRO"

    In the early 60's kids spent hours spinning out complex colorful spirals
    with the "Spirograph," a set of colored pens and plastic rings.  Now you
    can put the designs on your EGA screen and not have to scrub your hands
    afterwards.  Extremely simple to use, just choose three numbers and
    which color you would like to use.
    
    The registration fee is reasonable and makes this a pretty safe bet for
    anyone wishing to find some entertainment for their restless
    "artists" at home.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1986.TXT

{% raw %}
```
Disk No: 1986                                                           
Disk Title: Spiro                                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: Spiro                                                    
Author Version: 2.2                                                     
Author Registration: $3.00                                              
Special Requirements: EGA Card.                                         
                                                                        
If you've every played Spirograph, you may enjoy EEGA SPIRO, a          
computerized game which simulates the popular "design game."            
Extremely simple to use, just choose the size of the outer ring,        
the size of the inner ring, which "hole" of the inner ring your         
"pen" will be set in, and which color you would like to use.  Press     
the right shift key when you wish to clear and/or change rings.         
                                                                        
Played on an IBM or compatible, EEGA SPIRO does require an EGA          
card.  Otherwise the program is easy to load and easy to use.           
Prime numbers are suggested for use in the game, since it seems to      
bring about the best results.  My only complaint with the game was      
that the menu screen blocked some of the designs that were being        
created - a simple command to clear and return to the menu would        
have been appreciated.                                                  
                                                                        
The registration fee is reasonable and makes this a pretty safe bet     
for anyone wishing to find some entertainment for their restless        
"artists" at home.  The game is a good "first start" for this type      
of program - something needs to be done to break away from the          
monotony and create some more excitement for its users.                 
                                                                        
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
║                    <<<<  Disk #1986  SPIRO  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: SPIRO        (press enter)                      ║
║                                                                         ║
║ To print documentation, type: TYPE SPIRO.DOC PRN                        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SPIRO.DOC

{% raw %}
```
EGA SPIRO - a simulation of Spirograph.

HARDWARE REQUIREMENTS:

   PC/AT compatible
   EGA card and monitor - (colors may not work with other cards).

GENERAL INFORMATION:

   This program simulates the popular Spirograph game.  You will be
   asked to enter the size of the ring and the movable circle, as well
   as the radius where the pen will be placed on the circle. 
   Furthermore, you get to choose where the moving circle is inside or
   outside the ring, and you get to pick the color.

FILES:

   SPIRO.EXE - The program. (v 2.2)
   SPIRO.DOC - This file.
   SPIRO.PAS - The Turbo Pascal 4.0 source code.  (Not included on this
       disk...you must be a registered user to get it.)

DIRECTIONS:

   1.  Run SPIRO.EXE.

   2.  Enter the size of the ring...illegal entries will not be
       accepted.  Maximum ring size is 200.

   3.  Press (i) inside or (o) outside.  This will be the position of
       the circle as it moves around the ring.

   4.  Enter the size of the moving circle.  Max is 200.

   5.  Enter the size of the pen radius.  This is the location of the
       pen on the moving circle.  Max is also 200.  Note that, unlike
       in real Spirograph, the pen radius can be made larger than the
       moving circle radius.  (Computers are great, aren't they?)

   6.  Enter the color -- the usual 15 EGA color numbers apply.  Color
       0 (black) is illegal.

   7.  When the program starts running, you press the Right-Shift key
       to stop drawing.

   8.  When drawing has stopped, you have the option of starting a new
       set of parameters (N), clearing the screen (C), or quitting and
       returning to DOS (Q).  Note that after you quit, you may have to
       run the DOS MODE CO80 command to put your computer back into the
       color text mode.

   9.  While the program runs, a code appears at the top of the screen
       after the title.  'I' or 'O' tell the location of the moving
       circle (in or out).  The next three numbers are the ring size,
       moving circle size, and pen radius respectively.  This comes in
       handy if you want to write down the parameters for later use.

   10. PLAY, PLAY, PLAY!!!  The fun of this program is to experiment
       with a variety of combinations.  Prime numbers seem to give the
       most elaborate results.

FROM THE AUTHOR:

   I wrote this program for fun, not for riches.  I hope you all enjoy
   it.  If so, I would appreciate a small $3.00 registration fee.  In
   return, I'll send you the Turbo Pascal 4.0 source code.  If you are
   a Pascal programmer, you'll want to play around with it.  The only
   thing I can't send is the Turbo Unit (*.TPU) files.  You'll need
   them to compile your source code (Presumably you have these if you
   program in Turbo Pascal regularly).  

   Even if you aren't really interested in the source code, please
   support shareware and send the $3.00 to:

       Stephen Sander
       320 Sissinghurst Drive
       West Chester, PA 19382

   THIS SOFTWARE IS DISTRIBUTED AS SHAREWARE.  USERS MAY COPY AND
   DISTRIBUTE THE PROGRAM PROVIDED THAT NO CHANGES ARE MADE TO ANY OF
   THE FILES INCLUDING THIS NOTICE.  REGISTERED USERS HAVE THE RIGHT TO
   ALTER THE SOURCE CODE FOR THEIR OWN PERSONAL USE, PROVIDED NO CLAIM
   TO AUTHORSHIP IS MADE BY THE USER AND NO REVISED VERSION OF THE
   SOURCE CODE OR COMPILED CODE IS CLAIMED BY THE USER.   NO WARRANTEE
   EXPRESSED OR IMPLIED APPLIES TO USE OF THIS SOFTWARE.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1986

     Volume in drive A has no label
     Directory of A:\

    FILE1986 TXT      2591   1-02-90   6:25p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80  12:19a
    SPIRO    DOC      3558   4-16-89   9:47a
    SPIRO    EXE     55008   4-16-89   9:35a
            5 file(s)      61735 bytes
                           96768 bytes free
