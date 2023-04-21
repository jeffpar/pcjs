---
layout: page
title: "PC-SIG Diskette Library (Disk #2709)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2709/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2709"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BALLOONS.DOC

{% raw %}
```

This is the documentation for BALLOONS.EXE  (c)1990 by AssistWare

DESCRIPTION:

This program draws a balloon and sounds a tone when any key is
hit.  The balloons are a random size, color and are drawn at
random locations on the screen.  Each key is assigned a different
tone (one can play tunes by pressing the appropriate keys).

Hitting the down-arrow key causes the balloon to shrink until it
disappears.

Hitting the up-arrow key causes the balloon to grow until it
pops. After the pop, a rainbow is drawn and the first line of
"Twinkle, Twinkle Little Star" is played.

For EGA & VGA monitors, Hitting the G makes green balloons
                                    B makes blue balloons
                                    R makes red balloons
                                    Y makes yellow balloons
                                    W makes white balloons

For CGA monitors,  Hitting the Y makes yellow balloons
                               G makes green balloons
                               R makes red balloons

Hitting qu (short for quit) stops the program.....

Don't forget or you will have to CTL-ALT-DEL to get out.

=================================================================

STARTING THE PROGRAM:

Invocation parameters:  (i.e.  BALLOONS parameter)

If no parameter is used the program tries to determine which
monitor your computer has and then writes directly to the video
card RAM.  Writing directly to the video card RAM only works if
your system's video hardware is identical to IBM display adapters.
(Writing directly to the video card RAM makes the program draw
the balloons faster.)

> I suggest that you try starting the program with no parameters,
> i.e. BALLOONS    and see if it works, only using the following
> parameters if needed.

The following table shows the valid parameters.  You may wish to
use these if the program is unable to determine which monitor
your computer has.

                          | write directly |     use DOS
         Monitor          |  to video card | video interface
 -------------------------+----------------+-----------------
    CGA                   |      30        |       130
    EGA (low resolution)  |      40        |       140
    VGA (low resolution)  |      50        |       150
   MCGA                   |      60        |       160
    VGA (high resolution) |      70        |       170
    EGA (high resolution) |      80        |       180
    Let program decide    |                |       120

Examples: - Invoke program for a CGA monitor writing directly to
            the video card:  balloons 30
          - Invoke program for a MCGA monitor using the DOS video
            interface:  balloons 160
          - Invoke program and let program decide the best choice
            and use the DOS video interface:  balloons 120
          - Invoke program and let program decide the best choice
            and write directly to the video card:  balloons

=================================================================

OTHER CONSIDERATIONS:

- If your monitor is set to 40 column mode, set it to 80 column
  color mode before the program is started:
  (use the DOS command:  MODE CO80).

- To allow a small child to continuously a key down and the
  program run without overflowing the keyboard buffer, the
  program discards all keys which are in the keyboard buffer
  immediately before it starts to draw a balloon, while the
  balloon is popping and while the rainbow is being drawn.  For
  slow machines this has the following implication:
     The processor may not be fast enough to discard all of the
     extra keys and draw the balloons at the same time.  If this
     occurs, you will hear the high-pitched beep that indicates
     the keyboard buffer has overflown.  Just take your hand off
     of the key for an instant and the program will have time to
     discard the keys in the buffer and draw the balloon.  This
     problem does not occur with faster machines.

- If you have a CGA monitor, the program can only draw balloons
  in 3 different colors.  This restriction is due the way Turbo C
  and the CGA video card work together.

=================================================================

ERRORS:

If the program had an error and could not continue, try the
following:

1. Run the program again, invoking it with a parameter.
   A list of invocation parameters are given by invoking the
   program with a ?.
   - for example:  balloons ?     (The list is also given above.)
   Then pick the parameter that appears to best fit your
   computer's monitor.

2. If you are a registered user, send the following information
   to:  AssistWare, 1505 Sedwick Rd., Durham, NC  27713
   a. The type of computer you have.
   b. The type of monitor you have.
   c. The DOS version you are using.
   d. The program version.
   e. The program error number and a description of your problem.

   We will make a good-faith effort to fix your problem.

=================================================================

MY CHILD'S EXPERIENCE:

This program was written for my son, Charles, who wanted to work
on the computer (hit on the keyboard), because he saw his parents
doing this. However, he was too young mentally and did not have
the fine motor skills necessary for programs that show A when "a"
is hit, etc.  He just wanted to push the keys and see something
happen.  He likes balloons and rainbows and "Twinkle, Twinkle
Little Star" was one of his favorite songs.  So this program was
conceived to give him a way to hit any key and see something
happen. He learned surprisingly quickly (and remembered) where the
up and down arrow keys are and the keys that made the color of
balloons he liked (G, B and R). This program has been a very
positive experience for Charles; I hope you find that to be true
for your child as well.

As an aside, because his favorite color is green, when the
balloons are made randomly, there will be more green ones than
any other color.

==================================================================

PACKAGE CONTENTS:

This package contains 3 files: BALLOONS.EXE -- the program.
                               BALLOONS.DOC -- this file.
                               BALLOONS.REG -- the registration form.

==================================================================

Association of Shareware Professionals - Ombudsman Statement

  This program is produced by a member of the Association
  of Shareware Professionals (ASP).  ASP wants to make sure
  that the shareware principle works for you. If you are
  unable to resolve a shareware-related problem with an ASP
  member by contacting the member directly, ASP may be able
  to help. The ASP Ombudsman can help you resolve a dispute
  or problem with an ASP member, but does not provide
  technical support for members' products. Please write to
  the ASP Ombudsman at 545 Grover Road, Muskegon, MI 49442-9427
  or send a CompuServe message via CompuServe Mail to ASP
  Ombudsman 70007,3536."

==================================================================

WARRANTY:

Users of Balloons must accept this disclaimer of warranty:

Balloons is supplied as is.  The author disclaims all warranties,
expressed or implied, including, without limitation, the
warranties of merchantability and fitness for any purpose.  The
author assumes no liability for damage, direct or consequential,
which may result from the use of Balloons.

==================================================================

DISTRIBUTION OF PROGRAM:

You can give a copy of this program to anyone who wants it.  Please
encourage them to register if they find the program useful.

==================================================================

REGISTRATION PROCESS AND FEE:

I hope your child is enjoying the "BALLOONS" program.  My two-
year old son, Charles, has a great time with it, and asks to
"work on the 'puter" frequently in order to make balloons and
then pop them.

My husband and I are honest people; I trust that you are as well.
If you find this program valuable and your child enjoys it,
please send $7.00 (check or money order) to:  Patti B. Lingafelt
                                              1505 Sedwick Rd.
                                              Durham, NC  27713
Please use the registration form included with this program
(balloons.reg).  Just print it and mail it in.

I will then register you as a user, entitling you to future
upgrades, technical support and information about other programs
for your child.


Thank you.

Patti B. Lingafelt
1505 Sedwick Rd.
Durham, NC  27713
919-544-5567

```
{% endraw %}

## DRAWSOME.DOC

{% raw %}
```


This is the documentation for DRAWSOME.EXE  (c)1991 by AssistWare

DESCRIPTION:

This program draws lines with a hand as the hand is moved with
the arrow-keys or with the mouse.  The line color is selected
by pressing the following keys or by clicking the mouse or
pressing the space bar.

For EGA & VGA monitors, hitting the G makes the line green.
                                    B makes the line blue.
                                    R makes the line red.
                                    Y makes the line yellow.
                                    W makes the line white.

For CGA monitors, hitting the Y makes the line yellow.
                              G makes the line green.
                              R makes the line red.

Pressing Z causes no line to be draw until a mouse button is
clicked or one of the above keys is pressed.

Pressing the ENTER key will clear the screen.

The program also draws a different flower when F-key 1 thru
F-key 10 is pressed.

The program will also draw circles, triangles and squares and
combinations of circles, triangles and squares when the numbers
1 thru 9 are pressed.

Hitting qu (short for quit) stops the program.....

Don't forget or you will have to CTL-ALT-DEL to get out.

=================================================================

STARTING THE PROGRAM:

Invocation parameters:  (i.e.  DRAWSOME parameter)

If no parameter is used the program tries to determine which
monitor your computer has and then writes directly to the video
card RAM.  Writing directly to the video card RAM only works if
your system's video hardware is identical to IBM display adapters.
(Writing directly to the video card RAM causes the program to move
the hand more smoothly.)

> I suggest that you try starting the program with no parameters,
> i.e. DRAWSOME    and see if it works, only using the following
> parameters if needed.

The following table shows the valid parameters.  You may wish to
use these if the program is unable to determine which monitor
your computer has.

                          | write directly |     use DOS
         Monitor          |  to video card | video interface
 -------------------------+----------------+-----------------
    CGA                   |      30        |       130
    VGA                   |      50        |       150
    EGA (high resolution) |      80        |       180
    Let program decide    |                |       120

Examples: - Invoke program for a CGA monitor writing directly to
            the video card:  drawsome 30
          - Invoke program and let program decide the best choice
            and use the DOS video interface:  drawsome 120
          - Invoke program and let program decide the best choice
            and write directly to the video card:  drawsome

=================================================================

OTHER CONSIDERATIONS:

- If your monitor is set to 40 column mode, set it to 80 column
  color mode before the program is started:
  (use the DOS command:  MODE CO80).

- To allow a small child to continuously hold a key down and
  the program run without overflowing the keyboard buffer, the
  program discards all keys which are in the keyboard buffer
  while the program is drawing a line or flower.  For
  slow machines this has the following implication:
     The processor may not be fast enough to discard all of the
     extra keys and draw the line or flower at the same time. If
     this occurs, you will hear the high-pitched beep that indicates
     the keyboard buffer has overflown.  Just take your hand off
     of the key for an instant and the program will have time to
     discard the keys in the buffer and draw the line or flower.
     This problem does not occur with faster machines.

- If you have a CGA monitor, the program can only draw lines and
  flowers in 3 different colors.  This restriction is due the way
  Turbo C and the CGA video card work together.

=================================================================

ERRORS:

If the program had an error and could not continue, try the
following:

1. Run the program again, invoking it with a parameter.
   A list of invocation parameters are given by invoking the
   program with a ?.
   - for example:  drawsome ?     (The list is also given above.)
   Then pick the parameter that appears to best fit your
   computer's monitor.

2. If you are a registered user, send the following information
   to:  AssistWare, 1505 Sedwick Rd., Durham, NC  27713
   a. The type of computer you have.
   b. The type of monitor you have.
   c. The DOS version you are using.
   d. The program version.
   e. The program error number and a description of your problem.

   We will make a good-faith effort to fix your problem.

=================================================================

MY CHILD'S EXPERIENCE:

This program was written for my son, Charles, who wanted to work
on the computer (hit on the keyboard and move the mouse), because
he saw his parents doing this. However, he was too young mentally
and did not have the fine motor skills necessary for programs that
show A when "a" is hit, etc.  He just wanted to push the keys or
move the mouse and see something happen.  He likes drawing flowers
and making lines when the mouse is moved.   I also wanted him to
become familiar with a mouse and how it worked.  This program was
conceived to give him a way to hit some keys and see something
happen and also to learn mouse operations.
He learned surprisingly quickly (and remembered) where the arrow
keys are located, where the keys that made the color of line change
and how the mouse worked (including the buttons). This program has
been a very positive experience for Charles; I hope you find that
to be true for your child as well.  (Charles even named the program
DrawSome....by asking "Can I draw some on the 'puter?")

=================================================================

PACKAGE CONTENTS:

This package contains 3 files: DRAWSOME.EXE -- the program.
                               DRAWSOME.DOC -- this file.
                               DRAWSOME.REG -- the registration form.

==================================================================

Association of Shareware Professionals - Ombudsman Statement

  This program is produced by a member of the Association
  of Shareware Professionals (ASP).  ASP wants to make sure
  that the shareware principle works for you. If you are
  unable to resolve a shareware-related problem with an ASP
  member by contacting the member directly, ASP may be able
  to help. The ASP Ombudsman can help you resolve a dispute
  or problem with an ASP member, but does not provide
  technical support for members' products. Please write to
  the ASP Ombudsman at 545 Grover Road, Muskegon, MI 49442-9427
  or send a CompuServe message via CompuServe Mail to ASP
  Ombudsman 70007,3536."

==================================================================

WARRANTY:

Users of Drawsome must accept this disclaimer of warranty:

Drawsome is supplied as is.  The author disclaims all warranties,
expressed or implied, including, without limitation, the
warranties of merchantability and fitness for any purpose.  The
author assumes no liability for damage, direct or consequential,
which may result from the use of Drawsome.

==================================================================

DISTRIBUTION OF PROGRAM:

You can give a copy of this program to anyone who wants it.  Please
encourage them to register if they find the program useful.

==================================================================

REGISTRATION PROCESS AND FEE:

I hope your child is enjoying the "DRAWSOME" program.  My two-and
half year old son, Charles, has a great time with it, and asks to
"work on the 'puter" frequently in order to draw lines and shapes
and make flowers.

My husband and I are honest people; I trust that you are as well.
If you find this program valuable and your child enjoys it,
please send $8.00 (check or money order) to:  Patti B. Lingafelt
                                              1505 Sedwick Rd.
                                              Durham, NC  27713
Please use the registration form included with this program
(drawsome.reg).  Just print it and mail it in.

I will then register you as a user, entitling you to future
upgrades, technical support and information about other programs
for your child.


Thank you.

Patti B. Lingafelt
1505 Sedwick Rd.
Durham, NC  27713
919-544-5567

```
{% endraw %}

## FILE2709.TXT

{% raw %}
```
Disk No: 2709                                                           
Disk Title: Balloons and Drawsome                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: Balloons                                                 
Author Version: 3.8                                                     
Author Registration: $7.00                                              
Special Requirements: CGA, VGA, or EGA.                                 
                                                                        
BALLOONS displays balloons on the screen and creates notes of music as  
each key is pressed.  Each balloon is randomly sized and differently    
colored.  Pressing certain letter keys will cause a balloon of a        
specific color to appear.  The Up arrow key enlarges a balloon while the
Down arrow key shrinks a balloon.  Enlarge or shrink a balloon until it 
pops or disappears, after which a star will be drawn and ``Twinkle,     
Twinkle Little Star'' will play.  A colorful rainbow is then drawn      
across the screen.  BALLOONS is a fun way for children 18 months or     
older to play on the computer.                                          
Program Title: DrawSome                                                 
Author Version: 2.4                                                     
Author Registration: $8.00                                              
Special Requirements: CGA, EGA, or VGA.  A mouse is optional.           
                                                                        
DRAWSOME allows children, 18 months or older, to draw simple designs and
flowers using the keyboard and/or mouse.  Move a hand around the screen 
to draw a line of various colors depending on what letter key was last  
pressed.  The number keys will automatically draw a square, circle or   
triangle.  Pressing a function key will draw a flower, creating a       
wonderful design on the screen for young children.                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```



This file is for use by the Shareware Vendor and not for distribution.



Program:  BALLOONS

Catalog Description:

Balloons v3.8 - is a simple, easy to use program designed to help young
children become familiar with the computer and have fun at the same time.
It provides visual delight for children 18 months and up and hands-on
experience with the computer. Balloons appear as any key is struck and
may be enlarged until they pop into a rainbow as "Twinkle, Twinkle Little
Star" plays. This program is designed to be your child's first program and
to provide hours of enjoyment.

Member: ASP

Equipment Requirements: CGA, EGA or VGA monitor.
                        DOS 2.1 or higher. 

Registration Fee: $7.00

==========================================================================

Program:  DRAWSOME

Catalog Description:

Drawsome v2.4 - is a simple, easy to use program designed to help young
children become familiar with the computer, mouse, and mouse operations
and to have fun at the same time.  Children from 18 months experience visual
delight as they draw lines on the screen by moving an image of a hand with
the arrow-keys or with the mouse.  Line color is selectable by keys or by
clicking the mouse buttons.  The program also draws various flowers, circles,
triangles, and squares.  An excellent program for developing mouse skills,
finding the location of certain keys, and learning basic geometric shapes.

Member: ASP

Equipment Requirements: CGA, EGA or VGA monitor.
                        DOS 2.1 or higher. 
                        Mouse (optional)

Registration Fee: $8.00

==============================================================================

If the programs are bundled on the same disk:

Title:  My First Computer Programs

Balloons v3.8 & Drawsome v2.4 -- Two delightful, easy to use programs designed
to help young children from 18 months become familiar with the computer and to
have fun at the same time.  BALLOONS allows the child, by pressing any key, to
produce various colors of balloons on the screen which may then be enlarged
until they pop into a rainbow as "Twinkle, Twinkle Little Star" plays.  In
DRAWSOME, the child draws lines on the screen by moving an image of a hand
with the arrow-keys or with the mouse.  Line color may be changed by clicking
the mouse buttons or striking certain keys.  The program also draws various
flowers, circles, triangles, and squares.  Both programs are sure to provide
hours of enjoyment for your child.

Member: ASP

Equipment Requirements: CGA, EGA or VGA monitor.
                        DOS 2.1 or higher. 
                        Mouse (optional)

Registration Fee: $7.00 - Balloons
                  $8.00 - Drawsome

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2709

     Volume in drive A has no label
     Directory of A:\

    BALLOONS DOC      8843   3-29-91  11:26p
    BALLOONS EXE     88500   3-11-91  10:20p
    BALLOONS REG      1209   9-23-90   1:57p
    DRAWSOME DOC      8745   3-30-91  10:19p
    DRAWSOME EXE    104336   2-24-91  10:56a
    DRAWSOME REG      1209   2-08-91  10:45p
    VENDOR   DOC      2795   3-30-91  10:13p
    PREVIEW  EXE      7347   4-18-91   1:15p
    GO       BAT       169   7-26-91   2:51a
    FILE2709 TXT      2591   7-26-91  11:01a
           10 file(s)     225744 bytes
                           91136 bytes free
