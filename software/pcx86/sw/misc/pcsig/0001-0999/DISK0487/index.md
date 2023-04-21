---
layout: page
title: "PC-SIG Diskette Library (Disk #487)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0487/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0487"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "REFLEX POINT"

    This is a BASIC program in which you, a Freedom Fighter, combat
    the evil Invid Alien Invaders.  Through the course of the game
    your cyclone changes into battle armor.  Then when you reach the
    alpha fighter you can can change into battloid form.  Reach the
    Reflex Point and kill the Evil Alien Prince.  This game will run
    on a 128k PCjr.
    
    System Requirements:  128K, one disk drive, color monitor, color
    graphics needed, IBM BASIC or IBM PCjr BASIC.
    
    How to Start:  From BASIC, type LOAD"REFLEX" <ENTER>, then
    RUN <ENTER>.
    
    File Descriptions:
    
    ALPHA    PIC  Image file of Alpha Fighter
    RP-HELP  BAS  Tips on how to play
    REFLEX   PIC  Image of Reflex Point
    REFLEX   KEY  Subprogram for REFLEX.BAS
    REFLEX   BAS  Reflex Point game
    POWER    PIC  Graphic image
    CYCLONE2 PIC  Image of jumping Cyclone
    CYCLONE  PIC  Image of Cyclone
    CYCLONE  KEY  Subprogram for REFLEX.BAS
    TITLE    PIC  Image of title screen
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES487.TXT

{% raw %}
```
 
-----------------------------------------------------------------------
Disk No  487  REFLEX POINT                                      v1 DS2
-----------------------------------------------------------------------
       This is a basic program in which you a Freedom Fighter combat
    the evil Invid Alien Invaders. Through the course of the game your
    cyclone changes into battle armor, then when you reach the alpha
    fighter you can can change into battloid form. Reach the Reflex
    Point and kill the evil prince.
 
ALPHA    PIC  Image file of Alpha Fighter
CYCLONE  KEY  Subprogram for REFLEX.BAS
CYCLONE  PIC  Image of Cyclone
CYCLONE2 PIC  Image of jumping Cyclone
POWER    PIC  Graphic image
REFLEX   BAS  Reflex Point game
REFLEX   KEY  Subprogram for REFLEX.BAS
REFLEX   PIC  Image of Reflex Point
RP-HELP  BAS  Tips on how to play
TITLE    PIC  Image of title screen
```
{% endraw %}

## NOTES487.TXT

{% raw %}
```
-----------------------------------------------------------------------
Disk No  487  PROBLEMS and COMMENTS                             v1 DS2
-----------------------------------------------------------------------
 
                             REFLEX POINT
 
          This game was originally patterned from the TV show
        ROBOTECH. It follows the same basic storyline as the
        show with the Freedom Fighters trying to reach the Reflex
        Point so they can destroy the evil Invid Prince. REFLEX with
        its good graphics and sound is a game that seems like its been
        compiled but in fact is written in basic. The only problem
        that I encountered was that the key buffer can easily be
        filled while in Battle Armor mode causing a lapse in response.
        If you have have any questions or suggestions get in touch with
        the author:
 
                                Eric Iwasaki
                                107 Via Plasqual
                                Rendondo Beach, Ca 90277
```
{% endraw %}

## REFLEX.BAS

{% raw %}
```bas
10 CLS:SCREEN 1:DEF SEG=&HB800:BLOAD"TITLE.PIC",0:DEF SEG
11 FOR I=1 TO 1000:NEXT I:LOCATE 24,1:PRINT"Press<Space Bar>";:LOCATE 1,1
20 A$=INKEY$
21 IF A$=" " THEN 30
28 KEY OFF
29 GOTO 20         
30 CLS
40 PRINT"------------={REFLEX POINT}=------------";
50 PRINT:PRINT"    In around the year 2070 a race of "
60 PRINT"protoplasms called Invid attacked the"
70 PRINT"planet Earth.  They constructed a base"
80 PRINT"called Reflex Point where they searched"
90 PRINT"for an ultimate form in which to rule"
100 PRINT"the universe."
110 PRINT:PRINT"    Your mission is to destroy the Invid";
120 PRINT"Reflex Point.  In order to complete the"
130 PRINT"mission you will use Cyclones, motor-"
140 PRINT"cycles that become body armor, and"
150 PRINT"Alphas, jets that become robots."
199 PRINT:PRINT:PRINT
200 PRINT"          >>>>>>>>>>>>>>>>>>>>>>>>
210 PRINT"         //                    //
220 PRINT"        //  Press<Space Bar>  //
230 PRINT"       //                    //
240 PRINT"      <<<<<<<<<<<<<<<<<<<<<<<< "
250 A$=INKEY$
260 IF A$=" " THEN 270
269 GOTO 250
270 CLS
280 PRINT"---------={GOALS and OBSTACLES}=--------";
290 PRINT:PRINT"    The game starts after you find the"
300 PRINT"Invid Reflex Point. You'll use Cyclone."
310 PRINT:PRINT"1. Use cyclone cycle mode to reach"
320 PRINT"   your Alpha fighter faster, but you"
330 PRINT"   must jump potholes created by enemy"
340 PRINT"   laser fire, or lose damage points!"
350 PRINT"2. Use cyclone armor mode to cause"
360 PRINT"   Invid troopers to flee.  You must"
370 PRINT"   cause at least six to flee before"
380 PRINT"   you can reach your Alpha.  You must"
390 PRINT"   be in cycle mode to reach the Alpha!"
400 PRINT"3. Use Alpha figther mode to reach"
410 PRINT"   Reflex Point. You must transform to"
420 PRINT"   Guardian mode to fire and you must"
430 PRINT"   be in Alpha mode to reach the base!"
440 PRINT:PRINT:PRINT"            -=Hit<Space Bar>=-"
450 A$=INKEY$
460 IF A$=" " THEN 470
469 GOTO 450
470 CLS
480 PRINT"---------={GOALS and OBSTACLES}=--------";
500 PRINT:PRINT"4. At Reflex Point you'll blast at a"
510 PRINT"   laser barrier until it permits your"
520 PRINT"   entry.  In Reflex Point you'll need"
530 PRINT"   to destroy the Invid prince by hit-"
540 PRINT"   -ting the prince 10 times with your"
550 PRINT"   laser cannon.  Once he is destroyed"
560 PRINT"   Reflex Point blows up and you win!"
561 PRINT:PRINT:PRINT"            -=Hit<Space Bar>=-"
571 A$=INKEY$
572 IF A$=" " THEN 580
579 GOTO 571
580 CLS
590 PRINT"------------={INSTRUCTIONS}=-----------";
600 PRINT:PRINT:PRINT
610 PRINT"             Fire      Jump      Move   Cyclone:     ----      ----      ----"
620 PRINT"Cycle>               space bar  cursor  Armor>     space bar            cursor"
629 PRINT
630 PRINT"Alpha:       ----      ----      ----   Fighter>                        cursor  Guardian>  space bar            cursor  Battloid                                Laser Gun> space bar            cursor"
640 PRINT:PRINT"In Alpha, to transform into guardian andback to fighter use `T'.  The computer  controls the transform into battloid."
650 PRINT:PRINT"In Cyclone, to transform, use `T'."
660 PRINT:PRINT:PRINT"            -=Hit<Space Bar>=-"
670 A$=INKEY$
680 IF A$=" "THEN 690
689 GOTO 670
690 RUN"cyclone.key"
```
{% endraw %}

## RP-HELP.BAS

{% raw %}
```bas
1 CLS
10 ON ERROR GOTO 60000:SCREEN 1
11 CLS
12 ON ERROR GOTO 0
20 PRINT:PRINT
21 PRINT"  REFLEX.BAS.........Game-Reflex Point"
30 PRINT"  CYCLONE.KEY........Part of REFLEX"
40 PRINT"  REFLEX.KEY.........Part of REFLEX"
49 PRINT"  CYCLONE.PIC........Image for REFLEX"
50 PRINT"  CYCLONE2.PIC.......Image for REFLEX"
60 PRINT"  ALPHA.PIC..........Image for REFLEX"
70 PRINT"  POWER.PIC..........Image for REFLEX"
80 PRINT"  TITLE.PIC..........Image for REFLEX"
81 PRINT"  RP-HELP............Hints(Now Loaded)"
90 LINE(0,0)-(319,13*8-1),2,B
91 LINE(7,7)-(319-7,13*8-8),2,B
92 PAINT(2,2),1,2
93 LOCATE 1,11:PRINT"Reflex Point Files"
99 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT
100 PRINT"  Send Questions and Comments to:
105 PRINT
110 PRINT"  ERIC IWASAKI
120 PRINT"  107 VIA PASQUAL
130 PRINT"  REDONDO BCH.,CA 90277
140 PRINT
150 PRINT"  <1> HELP!!
160 PRINT"  <2> Play Reflex Point
200 A$=INKEY$
210 IF A$="1" THEN 300
220 IF A$="2" THEN RUN"REFLEX"
230 GOTO 200
300 CLS
310 PRINT"Tips on hand positioning over keyboard:"
320 PRINT:PRINT"Place LEFT index finger on <T>"
330 PRINT"Place LEFT thumb on the <Space Bar>"
340 PRINT"Place RIGHT hand on cursor keys"
350 PRINT:PRINT"I find that the best results in "
360 PRINT"positining the RIGHT hand is to put"
370 PRINT"the thumb on down arrow, the index
380 PRINT"finger on left arrow, the middle finger"
390 PRINT"on up arrow, and the ring finger on "
400 PRINT"right arrow"
410 GOSUB 50000
411 CLS
420 PRINT"Game hints | Cyclone Cycle/Armor"
430 PRINT:PRINT"    Practice in cycle mode to time your"
440 PRINT"jumps just right.  Once you have, you"
450 PRINT"don't have to worry about the cycle mode"
460 PRINT"     Since you have to be in cycle mode"
470 PRINT"to reach your Alpha you can stay in "
480 PRINT"armor mode to gain more points.  If "
490 PRINT"you hit an Invid trooper five times"
500 PRINT"one of the Invids will flee, not "
510 PRINT"necessarily the one you hit.  When the"
520 PRINT"last Invid is hit five times he comes"
530 PRINT"closer, and if you hit his red areas,"
540 PRINT"you get bonus points."
550 GOSUB 50000
560 CLS
570 PRINT"Game Hints | Alpha fighter/Guardian"
580 PRINT"           |   Battloid with gun"
590 PRINT
600 PRINT"    Remember that you must transform to
610 PRINT"guardian mode in order to fire and you"
620 PRINT"must transform to fighter to reach"
630 PRINT"Reflex Point.  "
640 PRINT"    When you reach the laser barrier
650 PRINT"go as far up as the computer allows"
660 PRINT"and then you must go as far down as the"
670 PRINT"computer allows, shooting the barrier"
680 PRINT"on the way until it is completely "
690 PRINT"destroyed.
700 PRINT"    The computer automatically trans-"
710 PRINT"forms you into Battloid mode and sends"
720 PRINT"you inside Reflex Point.  Destroy the"
730 PRINT"Invid prince, 10 shots, an you destroy"
740 PRINT"Reflex Point.  "
750 GOSUB 50000
760 CLS
770 PRINT"               WARNING!
780 PRINT"           There is no need"
790 PRINT"           to hold down the"
800 PRINT"           keys.  If you do"
810 PRINT"           don't touch any"
820 PRINT"            keys until you"
830 PRINT"           stop moving or"
840 PRINT"           firing lasers!!!"
850 PRINT:PRINT:PRINT:PRINT:PRINT"           Hit <Space Bar>"
860 GOSUB 50010
870 CLS:RUN
9999 END
50000 PRINT:PRINT:PRINT"Hit <Space Bar>"
50010 A$=INKEY$
50011 IF A$=" " THEN RETURN
50020 GOTO 50010
60000 BEEP:PRINT"Oh I'm so sorry, but you must have a"
60010 PRINT"Color Adapter in order to use the game."
60020 RESUME 60030
60030 ON ERROR GOTO 0:END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0487

     Volume in drive A has no label
     Directory of A:\

    RP-HELP  BAS      3067  10-25-85   3:18p
    CYCLONE  KEY      8288  10-25-85   3:18p
    NOTES487 TXT      1059   4-02-86  12:23p
    TITLE    PIC     16392  10-25-85   3:18p
    CYCLONE  PIC     16392  10-25-85   3:18p
    CYCLONE2 PIC     16392  10-25-85   3:18p
    FILES487 TXT       911   4-02-86  12:22p
    ALPHA    PIC     16392  10-25-85   3:18p
    REFLEX   PIC     16392  10-25-85   3:18p
    REFLEX   BAS      2915  10-25-85   3:18p
    REFLEX   KEY      6879  10-25-85   3:18p
    POWER    PIC     16392  10-25-85   3:18p
           12 file(s)     121471 bytes
                           34304 bytes free
