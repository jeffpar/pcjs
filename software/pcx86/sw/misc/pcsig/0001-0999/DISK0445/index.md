---
layout: page
title: "PC-SIG Diskette Library (Disk #445)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0445/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0445"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "WILLY THE WORM"

    Arcadiacs -- Try WILLY THE WORM, a high-quality action game!
    
    Like Donkey Kong or Lode Runner?  Then you'll love WILLY.  When you've
    exhausted the possibilities or grown weary of the screens as they are,
    use EDWILLY and create your own screens.  Keep Willy moving and keep
    having fun!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EDWILLY.DOC

{% raw %}
```


                  Instructions for Willy the Worm Screen Editor
                            by Alan Farmer, June 1985


          -------------------------------------------------------------

          Willy  the  Worm  is  a user-supported program.  Feel free to 
          make copies and pass them out,  but please do not sell  them.  
          Donations  of about $10 would be greatly appreciated.  Please 
          send your questions,  comments,  high scores,  improved  game 
          screens, and DONATIONS to: 

                            Alan Farmer
                            2743 McElroy Drive
                            Charlottesville, Va  22903

          -------------------------------------------------------------

          
          Uses of the editor:

          The screen editor for Willy the Worm can be  used  to  modify 
          the  eight  screens  used  in  the  game  and  to preview and 
          practice on the higher ones.  If a screen is too hard or  you 
          want to design your own screens entirely, read on.  


          Getting Started:

          To  enter  the  screen  editor,  enter  'EDWILLY'  at the DOS 
          prompt.  Press Enter when asked to do so.  Next you are asked 
          which screen you want to edit.  Answer wth a number from 1 to 
          8.  The screen you choose will then be displayed.


          Editing keys:

          'A' is the help key.  Pressing this key will display a window 
          with a summary of the following instructions.  

          The  arrow  keys  move the cursor (the blinking pixel) around 
          the screen.  Any changes you make will occur at the  location 
          of this cursor.  

          'K'  brings up the prompt for which screen to edit.  Use this 
          to go to another screen.  

          'L' saves all screens on disk for use with the main  program.  
          DO NOT forget to save your work before you leave the program!  

          ';'  copies any screen to any other.  WARNING:  this destroys 
          the screen that is copied over.  

          '.' plays the screen you are currently editing.  The score is 
          included for reference and does not  go  on  the  high  score 
          list.  

          '/'  changes  the starting position to the cursor position on 
          the current screen.  The starting position is represented  by 
          Willy the Worm facing left.  

          ',' enters the small square that produces or  removes  balls.  
          The  topmost  small  square  on  the  screen is automatically 
          chosen to produce balls and all other remove them.  

          'U'  enters  a  vertical  spring at the cursor position.  'I' 
          enters a tack.  'O' enters a section of ladder.  'P' enters a 
          bell.  'J' enters a horizontal spring.  'M' enters a present. 
          
          Various other keys enter sections of wall and floor.  See the 
          help window ('A') for a complete list.  You may want to do a 
          screen dump of the help window if you have a dot matrix 
          printer and the DOS program GRAPHICS. 

          
          Making DONATIONS:

          You've heard it all before: "The development of this software 
          has taken much time and effort.  If we are  to  continue  our 
          production of user-supported software, your contributions are 
          vital."  Well,  I can tell you first-hand that it's true.  If 
          enough people send ten dollars,  maybe I'll  find  it  in  my 
          heart to write "Willy The Worm II" or "Pete the Pigeon".  

          Hint: If you like this game a LOT, you can send more than ten 
          dollars!
          
          Have gobs of fun and don't forget to pass copies on to all of
          your friends!          

```
{% endraw %}

## FILES445.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 445   Willy the Worm & more                             v1.1 DS2
------------------------------------------------------------------------
Willy the Worm is a high quality game that allows you to build your
own sceens for play.
 
CHASE    PAS  Can you evade the robots chasing you? - in Pascal
CHASE    COM  Can you evade the robots chasing you?
GRIME    COM+ game similar to centipede but things come at you from 4
              directions (needs color graphics card)
KIRK     PIC  Printer art. Subject: James T. Kirk
DSK      EXE  Disk Crash (yes, it is a game)
SHUTTLE  BAS  will draw the space shuttle from any angle in 3D
------------  Willy the Worm
WILLY    COM  Willy the Worm -- executable main program
WILLY    SCR  Data: Top ten high scores and names
WILLY    DAT  Data: Eight game screens
WILLY    CHR  Data: Modified character set for WILLY.COM
WILLY    DOC  Complete documentation for WILLY.COM (5K)
EDWILLY  COM  Allows user to edit game screens
EDWILLY  DOC  Complete documentation for EDWILLY.COM (4K)
VIS      COM  "Hides" files on directory
INVIS    COM  "Un-hides" files on directory
READ     ME   Brief description on Willy the Worm
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite D
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## SHUTTLE.BAS

{% raw %}
```bas
10 KEY OFF
20 X=0:Y=0:Z=0:X3=0:Y3=0:Z3=0:AM=0:BM=0:CM=0:DM=0:EM=0:FM=0:GM=0:HM=0:IM=0:D=0:P=0:B=0:H=0:U=0:V=0:U1=0:V1=0
30 DIM V(300,3),E(300)
40 CLS
50 READ NV
60 FOR P=1 TO NV
70 READ V(P,1),V(P,2),V(P,3)
80 V(P,1) = 0.12 * V(P,1)
90 V(P,2) = 0.12 * V(P,2)
100 V(P,3) = 0.12 * V(P,3)
110 NEXT P
120 READ NE
130 FOR E=1 TO NE
140 READ E(E)
150 NEXT E
160 SCREEN 2
170 D=120
180 LOCATE 1,1
190 INPUT"INPUT  ANY 3 ANGLES (X,Y,Z)"; P0,P1,P2
210 CLS
220 P=6.28 * P0 / 255 - 3.1416
230 B=6.28 * P2 / 255
240 H=6.28 * P1 / 255
250 GOSUB 390
260 XV = -D * CP * SH: REM ---SEE SUB.---
270 YV = -D * CP * CH
280 ZV = -D * SP
290 REM ---PROJECT NE POINTS---
300 FOR E=1 TO NE
310 X = V( ABS ( E ( E ) ), 1 )
320 Y = V( ABS ( E ( E ) ), 2 )
330 Z = V( ABS ( E ( E ) ), 3 )
340 GOSUB 520
350 IF E(E)>0 THEN LINE (U1*2+75,V1+20)-(U*2+75,V+20)
360 U1 = U: V1 = V
370 NEXT E
380 GOTO 190
390 CH = COS (H): SH = SIN (H)
400 CP = COS (P): SP = SIN (P)
410 CB = COS (B): SB = SIN (B)
420 AM = CB * CH - SH * SP * SB
430 BM = -CB * SH - SP * CH * SB
440 CM = CP * SB
450 DM = SH * CP
460 EM = CP * CH
470 FM = SP
480 GM = -CH * SB - SH * SP * CB
490 HM = SH * SB - SP * CH * CB
500 IM = CP * CB
510 RETURN
520 X = X - XV
530 Y = Y - YV
540 Z = Z - ZV
550 X3 = AM * X + BM * Y + CM * Z
560 Y3 = DM * X + EM * Y + FM * Z
570 Z3 = GM * X + HM * Y + IM * Z
580 U = 135 + 13.5 * D * X3 / Y3
590 V = 80 - 11.5 * D * Z3 / Y3
600 RETURN
610 DATA 124
620 DATA 0,-2.2,46,1.5,-2.6,46,2.2,-4.6,46,1.7,-6.5,46,0,-6.7,46
630 DATA -1.7,-6.5,46,-2.2,-4.6,46,-1.5,-2.6,46
640 DATA 0,-.8,43,2.8,-1.5,43,4,-4.5,43,3,-7.2,43,0,-8,43,-3,-7.2,43
650 DATA -4,-4.5,43,-2.8,-1.5,43
660 DATA 0,1.7,38,4.6,0,38,5.8,-4.4,38,4,-8.2,38,0,-9,38,-4,-8.2,38
670 DATA -5.8,-4.4,38,-4.6,0,38
680 DATA 0,4,32.5,4.5,1,32.5,5.8,-4.6,32.5,4,-9,32.5,0,-9.5,32.5,-4,-9,32.5
690 DATA -5.8,-4.6,32.5,-4.5,1,32.5
700 DATA 0,8,26.3,3.5,7,26.3,7.8,2,26.3,8,-7,26.3,0,-9.8,26.3,-8,-7,26.3
710 DATA -7.8,2,26.3,-3.5,7,26.3
720 DATA 0,8,21.5,3.8,7.5,21.5,8,3,21.5,8,-8,21.5,0,-9.8,21.5,-8,-8,21.5
730 DATA -8,3,21.5,-3.8,7.5,21.5
740 DATA 0,8,14,4.7,7,14,8,4,14,8,-8.7,14,0,-10,14,-8,-8.7,14,-8,4,14
750 DATA -4.7,7,14
760 DATA 0,8,4,4.7,7,4,8,4,4,8,-8.7,4,0,-10,4,-8,-8.7,4,-8,4,4
770 DATA -4.7,7,4
780 DATA 0,8,-12,4.7,7,-12,8,4,-12,8,-8.7,-12,0,-10,-12,-8,-8.7,-12,-8,4,-12
790 DATA -4.7,7,-12
800 DATA 0,8,-27.3,4.7,7,-27.3,8,4,-27.3,8,-8.7,-27.3,0,-10,-27.3,-8,-8.7,-27.3
810 DATA -8,4,-27.3,-4.7,7,-27.3
820 DATA 0,8,-35.6,4.7,7,-35.6,8,4,-35.6,8,-8.7,-35.6,0,-10,-35.6,-8,-8.7,-35.6
830 DATA -8,4,-35.6,-4.7,7,-35.6
840 DATA 0,9,-43,2,8.5,-43,8.8,1.5,-43,9,-10,-43,0,-10.8,-43,-9,-10,-43
850 DATA -8.8,1.5,-43,-2,8.5,-43
860 DATA 0,9.5,-48,2,9.3,-48,9.2,1.5,-48,10,-10,-48,0,-10.2,-48,-10,-10,-48
870 DATA -9.2,1.5,-48,-2,9.3,-48
875 DATA 8.7,-8.7,21,15,-8.7,-16,35,-10,-36,35,-10,-40
876 DATA -8.7,-8.7,21,-15,-8.7,-16,-35,-10,-36,-35,-10,-40
877 DATA 0,13,-37,0,33,-60,0,33,-69,0,14,-60
878 DATA 6,11,-43,6,11,-48,11,5,-43,11,5,-48,-6,11,-43,-6,11,-48,-11,5,-43
879 DATA -11,5,-48
880 DATA 259
890 DATA -1,2,3,4,5,6,7,8,1,-9,10,11,12,13,14,15,16,9,-17,18,19,20,21,22,23,24,17
900 DATA -25,26,27,28,29,30,31,32,25,-33,34,35,36,37,38,39,40,33
910 DATA -41,42,43,44,45,46,47,48,41,-49,50,51,52,53,54,55,56,49
920 DATA -57,58,59,60,61,62,63,64,57,-65,66,67,68,69,70,71,72,65
930 DATA -73,74,75,76,77,78,79,80,73,-81,82,83,84,85,86,87,88,81
940 DATA -89,90,91,92,93,94,95,96,89,-97,98,99,100,101,102,103,104,97
950 DATA -1,9,17,25,33,41,49,57,65,73,81,89,97
960 DATA -2,10,18,26,34,42,50,58,66,74,82,90,98
970 DATA -3,11,19,27,35,43,51,59,67,75,83,91,99
980 DATA -4,12,20,28,36,44,52,60,68,76,84,92,100
990 DATA -5,13,21,29,37,45,53,61,69,77,85,93,101
1000 DATA -6,14,22,30,38,46,54,62,70,78,86,94,102
1010 DATA -7,15,23,31,39,47,55,63,71,79,87,95,103
1020 DATA -8,16,24,32,40,48,56,64,72,80,88,96,104
1030 DATA -44,105,106,107,108,92
1040 DATA -46,109,110,111,112,94
1050 DATA -81,113,114,115,116,89
1060 DATA -82,117,118,-83,119,120
1070 DATA -87,121,122,-88,123,124
1080 DATA -117,119,-121,123,-118,120,-122,124
```
{% endraw %}

## WILLY.DOC

{% raw %}
```


                         Instructions for Willy the Worm
                            by Alan Farmer, June 1985


          -------------------------------------------------------------

          Willy  the  Worm  is  a user-supported program.  Feel free to 
          make copies and pass them out,  but please do not sell  them.  
          Donations  of about $10 would be greatly appreciated.  Please 
          send your questions,  comments,  high scores,  improved  game 
          screens, and DONATIONS to: 

                            Alan Farmer
                            2743 McElroy Drive
                            Charlottesville, Va  22903

          -------------------------------------------------------------


          Interesting features:

          Willy the Worm is a fast,  challenging arcade style game with 
          the following special features: 

               *  Fully compatible with IBM PC and PCjr 
               *  Color and sound effects are supported but optional
               *  Not one or two but EIGHT game screens
               *  Editor included for customizing the game screens 
               *  Top ten high scores and names are saved on disk


          Starting the game:

          To start the game,  just enter 'WILLY'  at  the  DOS  prompt.  
          Answer the two questions (color and sound used) with 'Y'  for 
          'Yes' or 'N' for 'No'.  After that,  the title screen will be 
          displayed with some basic instructions.


          Playing the game:

          The object of the game is to reach  the  bell  without  being 
          squashed  by  a  cannonball  or  running  out of time.  Extra 
          points may be earned by getting presents along the way and by 
          jumping over the balls.  After you reach the bell you will be 
          awarded points for the remaining time and you will advance to 
          the next screen.

          The game is played with the four arrow keys to make Willy the 
          Worm run left and right and climb ladders up  and  down,  and 
          the spacebar to make him jump. (Note that when jumping, Willy 
          can change directions  in  mid-air.  This  can  be  extremely 
          useful!)  Any  other  key  makes  him  stop.  On  the  PC,  a 
          convenient stop key is the '5' on the numeric keypad  and  on 
          the  PCjr  DEL  works  well.  To exit to DOS during the game, 
          please use ESC rather than  CTRL-C  because  this  will  save 
          changes to the high score list before leaving.  

          If  you  find  this  game  too  hard (or too easy),  read the 
          EDWILLY.DOC file and use the screen editor to  make  it  suit 
          your fancy.  You can also use the editor to get a preview and 
          practice on the higher levels.  


          Scoring:

          The  bonus  counter is displayed at the bottom of the screen.  
          It starts at 1000 and counts down by tens.  When you finish a 
          level,  the remaining bonus is added to your  score.  If  the 
          bonus  gets  to 0,  you lose a worm and start the level over.  
          Jumping over one or more balls earns  20  points.  Getting  a 
          present  is 100 points.  After the game,  the high scores are 
          displayed in two lists.  The  'Daily  Pinworms'  list  resets 
          each  time  you  enter  the  program,   while  the  'All-Time 
          Nightcrawlers' list is saved on disk.  


          If you damage a file:

          The batch file RESTORE.BAT will copy hidden backup copies  of 
          all  the files required by WIlly the Worm and the game screen 
          editor.   These   are:   WILLY.COM,   WILLY.SCR,   WILLY.DAT, 
          WILLY.CHR,  and  EDWILLY.COM.  Be warned that this will over-
          write  changes  to the screens and the high score list.  This 
          batch file uses  the  two  utility  programs  on  this  disk, 
          VIS.COM and INVIS.COM,  which make directory entries  visible 
          and  invisible,  respectively.  The syntax for these commands 
          is (IN)VIS filename.  Paths may be used but wild  card  char-
          acters may not.  

          
          Making DONATIONS:

          You've heard it all before: "The development of this software 
          has taken much time and effort.  If we are  to  continue  our 
          production of user-supported software, your contributions are 
          vital."  Well,  I can tell you first-hand that it's true.  If 
          enough people send ten dollars,  maybe I'll  find  it  in  my 
          heart to write "Willy The Worm II" or "Pete the Pigeon".  

          Hint: If you like this game a LOT, you can send more than ten 
          dollars!
          
          Have gobs of fun and don't forget to pass copies on to all of
          your friends!          
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0445

     Volume in drive A has no label
     Directory of A:\

    CHASE    COM     15522   1-01-80  12:26a
    CHASE    PAS     10752   1-01-80  12:04a
    DSK      EXE     39936   1-01-80  12:10a
    EDWILLY  COM     20675   6-11-85  12:22p
    EDWILLY  DOC      3920   6-11-85   1:15p
    FILES445 TXT      1362   1-27-87   9:31a
    GRIME    COM      9984   1-01-80  12:06a
    INVIS    COM     11464   6-10-85   8:02p
    KIRK     PIC      7168   1-01-80  12:00a
    READ     ME       1310   6-11-85   9:38p
    RESTORE  BAT       313   6-11-85   1:22p
    SHUTTLE  BAS      3840   1-01-80  12:04a
    VIS      COM     11464   6-10-85   8:02p
    WILLY    CHR      1024   6-03-85   4:57p
    WILLY    COM     20855   1-01-80  12:23a
    WILLY    DAT      7808   1-01-80  12:06a
    WILLY    DOC      5003   1-01-80  12:22a
    WILLY    SCR       230   6-11-85   9:43p
           18 file(s)     172630 bytes
                          141312 bytes free
