---
layout: page
title: "PC-SIG Diskette Library (Disk #446)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0446/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0446"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ZORK UTILITIES"

    This disk is dedicated to the adventurers out there. Half of the disk
    is dedicated to the Zork trilogy of adventures by Infocom.  Files
    include solutions to these programs and utilities to use with these
    programs.  The other half is full of adventure and arcade game
    programs, and a utility to help Dungeon & Dragon players.
    
    System Requirements:  128K, One disk drive, Monochome monitor, Color
    graphics needed if file marked by a plus symbol (+).
    
    How to Start:  To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  To run an EXE or COM program, just type its name and press
    <ENTER>. For instructions on running BASIC programs, please refer to
    the GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    PIRATE   BAS  Adventure game. Find island, explore, and get treasure
    ASTRO    COM  Asteroids game.
    PIRATE   DOC  Documentation for PIRATE.BAS
    XWING    BAS  Relive Star Wars.
    TEMPLE   BAS  Temple of Loth! Like Dungeons and Dragons.
    Q-BERT   EXE  Like arcade game. Turn squares to different colors
    ZORK2    DOC  Solution for Zork II.
    ZORK1    DOC  Solution for Zork I.
    CRISIS   EXE  Space Game (c/g required)
    ZT16     DOC  Documentation for ZT16.EXE. (11K)
    ZT16     COM  Zork Tools!! Great utility for any Infocom game.
    ZORK3    DOC  Solution for Zork III.
    GODCREAT BAS  Advanced Dungeons & Dragons God Creation Program
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES446.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No 446   Zork Utilities                                         v1.1
--------------------------------------------------------------------------
PIRATE   BAS  Adventure game. Find island, explore, get treasure and
              return to ship.
PIRATE   DOC  Documentation for PIRATE.BAS.
ASTRO    COM+ Asteroids game.
Q-BERT   EXE+ Like arcade game. Turn squares to different colors but
              watch out for balls and other obstacles.
TEMPLE   BAS  Temple of Loth! Like Dungeons and Dragons.
XWING    BAS+ Relive Star Wars.
ZORK1    DOC  Solution for Zork I.
ZORK2    DOC  Solution for Zork II.
ZORK3    DOC  Solution for Zork III.
ZT16     EXE  Zork Tools!! Great utility for any Infocom game. Change a
              game to a DOS file, find vocab. for any game and more!!!
ZT16     DOC  Documentation for ZT16.EXE. (11K)
CRISIS  .EXE+ Space Game (c/g required)
GODCREAT.BAS  Advanced Dungeons & Dragons God Creation Program
 
PC-SIG
1030D East Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
(c) copyright 1987 PC-SIG
```
{% endraw %}

## GODCREAT.BAS

{% raw %}
```bas
10 COLOR 7,0:KEY OFF:CLS
20 COLOR 0,7:LOCATE 12,31:PRINT " The  God Creator ":COLOR 7,0
30 COLOR 15,7:LOCATE 15,31:PRINT"  by Brian Barth  ":COLOR 7,0
40 COLOR 7,0:LOCATE 13,31:PRINT "    (c)  1985     "
50 FOR I=1 TO 3000:NEXT
60 CLEAR:DEFINT A-Z:COLOR 7,0:CLS:CLS
70 COLOR 0,7:LOCATE 2,30:PRINT " The God Creator Menu ":COLOR 7,0
80 ON ERROR GOTO 1570
90 LOCATE 7,40:PRINT "Create a new god    "
100 LOCATE 9,40:PRINT"Load a created god    "
110 LOCATE 11,40:PRINT"God files available on disk"
120 LOCATE 13,40:PRINT"Exit to the BASICA language "
121 LOCATE 15,40:PRINT "Delete a god file on disk"
122 LOCATE 17,40:PRINT "Show the treasure tables"
130 COLOR 0,7:LOCATE 11,15:PRINT " G ":LOCATE 9,15:PRINT " L ":LOCATE 13,15:PRINT " E ":LOCATE 7,15:PRINT " C ":LOCATE 15,15:PRINT " D ":LOCATE 17,15:PRINT " S "
140 COLOR 7,0
150 LOCATE 1,1:PRINT CHR$(201):LOCATE 1,2:PRINT STRING$(78,205)
160 FOR I=2 TO 22:LOCATE I,1:PRINT CHR$(186):NEXT
170 FOR I=2 TO 22:LOCATE I,80:PRINT CHR$(186):NEXT
180 LOCATE 1,80:PRINT CHR$(187)
190 LOCATE 22,1:PRINT CHR$(200):LOCATE 22,80:PRINT CHR$(188)
200 LOCATE 22,2:PRINT STRING$(78,205)
210 LOCATE 11,18:PRINT " . . . . . . . . . .  "
220 LOCATE 7,18:PRINT " . . . . . . . . . .  "
230 LOCATE 9,18:PRINT " . . . . . . . . . .  "
240 LOCATE 13,18:PRINT " . . . . . . . . . .  "
241 LOCATE 15,18:PRINT " . . . . . . . . . .  "
242 LOCATE 17,18:PRINT " . . . . . . . . . .  "
250 A$=INKEY$:IF A$="" THEN 250
260 IF A$="C" OR A$="c" THEN 310
270 IF A$="L" OR A$="l" THEN 1080
280 IF A$="G" OR A$="g" THEN 1500
290 IF A$="E" OR A$="e" THEN 1800
291 IF A$="D" OR A$="d" THEN 5000
292 IF A$="S" OR A$="s" THEN 6000
300 GOTO 180
310 CLOSE:CLS
320 INPUT "Enter a filename for you god (max 8 chars.) " ;F$
321 IF LEFT$(F$,1)="" THEN GOTO 60
330 IF LEN(F$)>8 THEN 310 ELSE 340
340 OPEN F$+".GOD" FOR OUTPUT AS #1
350 CLS
360 INPUT "Gods Name ";A1$
370 INPUT "Armor Class ";A2$
380 INPUT "Move ";A3$
390 INPUT "Hit Points ";A4$
400 INPUT "No. of Attacks ";A5$
410 INPUT "Damage/Attack ";A6$
420 INPUT "Special Attacks ";A7$
430 INPUT "Special Defenses ";A8$
440 INPUT "Magic Resistance ";A9$
450 INPUT "Size ";A10$
460 INPUT "Alignment ";A11$
470 INPUT "Worshiper's Alignment ";A12$
480 INPUT "Symbol ";A13$
490 INPUT "Plane ";A14$
500 INPUT "Cleruc/Druid ";A15$
510 INPUT "Fighter ";A16$
520 INPUT "Magic-User/Illusionist ";A17$
530 INPUT "Thief/Assassin ";A18$
531 INPUT "Monk/Bard ";A19$
532 INPUT "Psionic Ability ";A20$
533 INPUT "Strength ";A21$
534 INPUT "Intelligence ";A22$
535 INPUT "Wisdom ";A23$
536 INPUT "Dexterity ";A24$
537 INPUT "Constitution ";A25$
538 INPUT "Charisma ";A26$
540 LOCATE 25,24:PRINT "(E)nter description, (R)eturn to menu"
550 I$=INKEY$:IF I$="" THEN 550
560 IF I$="E" OR I$="e" THEN 590
570 IF I$="R" OR I$="r" THEN 100
580 IF I$="" THEN 550
590 CLS:PRINT "Enter your description (max 70 chars per line), enter a blank line to quit."
600 PRINT "CAUTION!!!!! Do not enter any commas within lines!!!!"
610 INPUT A27$
620 IF LEN(A27$)<1 THEN GOTO 1050
630 INPUT A28$
640 IF LEN(A28$)<1 THEN GOTO 1050
650 INPUT A29$
660 IF LEN(A29$)<1 THEN GOTO 1050
670 INPUT A30$
680 IF LEN(A30$)<1 THEN GOTO 1050
690 INPUT A31$
700 IF LEN(A31$)<1 THEN GOTO 1050
710 INPUT A32$
720 IF LEN(A32$)<1 THEN GOTO 1050
730 INPUT A33$
740 IF LEN(A33$)<1 THEN GOTO 1050
750 INPUT A34$
760 IF LEN(A34$)<1 THEN GOTO 1050
770 INPUT A35$
780 IF LEN(A35$)<1 THEN GOTO 1050
790 INPUT A36$
800 IF LEN(A36$)<1 THEN GOTO 1050
810 INPUT A37$
820 IF LEN(A37$)<1 THEN GOTO 1050
830 INPUT A38$
840 IF LEN(A38$)<1 THEN GOTO 1050
850 INPUT A39$
860 IF LEN(A39$)<1 THEN GOTO 1050
870 INPUT A40$
880 IF LEN(A40$)<1 THEN GOTO 1050
890 INPUT A41$
900 IF LEN(A41$)<1 THEN GOTO 1050
910 INPUT A42$
920 IF LEN(A42$)<1 THEN GOTO 1050
930 INPUT A43$
940 IF LEN(A43$)<1 THEN GOTO 1050
950 INPUT A44$
960 IF LEN(A44$)<1 THEN GOTO 1050
970 INPUT A45$
980 IF LEN(A45$)<1 THEN GOTO 1050
981 PRINT "Only one more line of description is available..."
990 INPUT A46$
1000 IF LEN(A46$)<1 THEN GOTO 1050
1010 PRINT "Sorry, there can be no more description for this god......."
1020 FOR I=1 TO 2000:NEXT
1030 LOCATE 25,26:PRINT "  Press any key to continue...  "
1040 I$=INKEY$:IF I$="" THEN 1040
1050 Z$=",":PRINT #1,A1$;Z$;A2$;Z$;A3$;Z$;A4$;Z$;A5$;Z$;A6$;Z$;A7$;Z$;A8$;Z$;A9$;Z$;A10$;Z$;A11$;Z$;A12$;Z$;A13$;Z$;A14$;Z$;A15$;Z$;A16$;Z$;A17$;Z$;A18$;Z$;A19$;Z$;A20$;Z$;A21$;Z$;A22$;Z$;A23$;Z$;A24$;Z$;A25$;Z$;A26$;Z$;A27$;Z$;A28$;Z$;A29$;Z$;A30$
1055 Z$=",":PRINT #1,A31$;Z$;A32$;Z$;A33$;Z$;A34$;Z$;A35$;Z$;A36$;Z$;A37$;Z$;A38$;Z$;A39$;Z$;A40$;Z$;A41$;Z$;A42$;Z$;A43$;Z$;A44$;Z$;A45$;Z$;A46$
1060 CLOSE
1070 CLS:GOTO 60
1080 REM LOAD A god fILE
1090 CLS:CLOSE
1100 INPUT "Enter name of file (max 8 chars.) ";F$
1101 IF LEFT$(F$,1)="" THEN GOTO 60
1110 IF LEN(F$)>8 THEN 1090
1120 OPEN F$+".god" FOR INPUT AS #1
1130 IF EOF(1) THEN PRINT "FILE IS EMPTY" ELSE 1140
1140 INPUT #1,A1$,A2$,A3$  , A4$,   A5$,   A6$,   A7$,   A8$,   A9$,   A10$,   A11$,   A12$,   A13$,   A14$,   A15$,   A16$,   A17$,   A18$,   A19$,   A20$,   A21$,   A22$,   A23$,   A24$,   A25$,   A26$,  A27$,   A28$,   A29$,   A30$
1145 INPUT #1,A31$,A32$,A33$,A34$,A35$,A36$,A37$,A38$,A40$,A41$,A42$,A43$,A44$,A45$,A46$
1150 PRINT "Gods Name: ";A1$
1160 PRINT "Armor Class: ";A2$
1170 PRINT "Move: ";A3$
1171 PRINT "Hit Points: ";A4$
1180 PRINT "No. of Attacks: ";A5$
1190 PRINT "Damage/Attack: ";A6$
1200 PRINT "Special Attacks: ";A7$
1210 PRINT "Special Defenses: ";A8$
1220 PRINT "Magic Resistance: ";A9$
1230 PRINT "Size: ";A10$
1240 PRINT "Alignment: ";A11$
1250 PRINT "Worshiper's Alignment: ";A12$
1260 PRINT "Symbol: ";A13$
1270 PRINT "Plane: ";A14$
1280 PRINT "Cleric/Druid: ";A15$
1290 PRINT "Fighter: ";A16$
1300 PRINT "Magic-User/Illusionist: ";A17$
1310 PRINT "Thief/Assassin: ";A18$
1320 PRINT "Monk/Bard: ";A19$
1330 LOCATE 25,28:PRINT "Press any key to continue"
1340 I$=INKEY$:IF I$="" THEN 1340
1350 PRINT "Psionic Ability: ";A20$
1360 PRINT "Strength: ";A21$
1370 PRINT "Intelligence: ";A22$
1380 PRINT "Wisdom: ";A23$
1390 PRINT "Dexterity: ";A24$
1400 PRINT "Constitution: ";A25$
1410 PRINT "Charisma: ";A26$
1411 LOCATE 25,28:PRINT "Press any key to continue"
1412 I$=INKEY$:IF I$="" THEN 1412
1430 PRINT A27$
1440 PRINT A28$
1450 PRINT A29$
1460 PRINT A30$
1461 PRINT A31$
1462 PRINT A32$
1463 PRINT A33$
1464 PRINT A34$
1465 PRINT A35$
1466 PRINT A36$
1467 PRINT A37$
1468 PRINT A38$
1469 PRINT A39$
1470 PRINT A40$
1471 PRINT A41$
1472 PRINT A42$
1473 PRINT A43$
1474 PRINT A44$
1475 PRINT A45$
1476 PRINT A46$
1479 LOCATE 25,25:PRINT "Press any key to return to main menu"
1480 I$=INKEY$:IF I$="" THEN 1480
1490 GOTO 60
1500 'god files
1510 CLS:KEY OFF:LOCATE 3,1
1511 ON ERROR GOTO 1555
1520 FILES "*.god"
1530 LOCATE 25,28
1540 PRINT "Press any key to continue"
1550 I$=INKEY$:IF I$="" THEN 1550
1551 GOTO 1560
1555 LOCATE 1,1:PRINT "No Files Currently on Disk":FOR DELAY =1 TO 1500:NEXT DELAY:RESUME 60
1560 GOTO 60
1570 CLS:LOCATE 1,1:PRINT CHR$(201):LOCATE 1,2:PRINT STRING$(78,205)
1580 FOR I=2 TO 22:LOCATE I,1:PRINT CHR$(186):NEXT
1590 FOR I=2 TO 22:LOCATE I,80:PRINT CHR$(186):NEXT
1600 LOCATE 1,80:PRINT CHR$(187)
1610 LOCATE 22,1:PRINT CHR$(200):LOCATE 22,80:PRINT CHR$(188)
1620 LOCATE 22,2:PRINT STRING$(78,205)
1630 IF ERR=7 THEN MSG$="You do not have enough memory for this program!"
1640 IF ERR=15 THEN MSG$="You can't create a string more than 255 characters!"
1650 IF ERR=23 THEN MSG$="You tried to enter a line with too many characters!"
1660 IF ERR=25 THEN MSG$="Harware error detection!! Fix it, then try again!!"
1670 IF ERR=27 THEN MSG$="Fix your printer..."
1680 IF ERR=53 THEN MSG$="There is no file by that name,or no monster files are on disk."
1690 IF ERR=67 THEN MSG$="Too many files on disk!!! Format another"
1700 IF ERR=61 THEN MSG$="Your disk is full, dinghy!"
1710 IF ERR=64 THEN MSG$="Bad file name, try a new one"
1720 IF ERR=73 THEN MSG$="This program requires BASICA language!"
1730 IF ERR=72 THEN MSG$="Disk is bad, try a new one"
1740 IF ERR=71 THEN MSG$="Insert disk and close drive door"
1750 IF ERR=70 THEN MSG$="Remove write protect tab from disk."
1760 LOCATE 5,5:PRINT "Error is number :";ERR
1770 LOCATE 10,5:PRINT MSG$
1780 LOCATE 21,28:PRINT "Press any key to continue"
1790 I$=INKEY$:IF I$="" THEN 1790
1791 RESUME 60
1800 CLS:LOCATE 1,1:PRINT CHR$(201):LOCATE 1,2:PRINT STRING$(78,205)
1810 FOR I=2 TO 22:LOCATE I,1:PRINT CHR$(186):NEXT
1820 FOR I=2 TO 22:LOCATE I,80:PRINT CHR$(186):NEXT
1830 LOCATE 1,80:PRINT CHR$(187)
1840 LOCATE 22,1:PRINT CHR$(200):LOCATE 22,80:PRINT CHR$(188)
1850 LOCATE 22,2:PRINT STRING$(78,205)
1860 LOCATE 5,5:PRINT "The God Creator program is distributed without charge.  If you are"
1870 LOCATE 7,5:PRINT "using it and find it to be of value, a contribution ($5 is suggested)"
1880 LOCATE 9,5:PRINT "would be appreciated.
1885 LOCATE 10,5:PRINT"                               Brian Barth"
1886 LOCATE 11,5:PRINT"                               201 E. Ithaca
1887 LOCATE 12,5:PRINT"                               McAllen, Tx. 78501"
1888 LOCATE 14,5:PRINT"You may distribute this program to clubs, individuals, etc. provided
1889 LOCATE 16,5:PRINT"that you do not charge for distribution without my written permission."
1890 LOCATE 18,5:PRINT "You may modify these programs as long as they are not distributed in
1891 LOCATE 20,5:PRINT "modified form."
1892 I$=INKEY$:IF I$="" THEN 1892
1893 CLS:END
5000 'DELETE MONSTER FILE
5005 CLS:LOCATE 3,5:PRINT "File name can be max 8 characters!"
5010 CLOSE:LOCATE 5,5:INPUT "Enter name of file to delete (press enter to return to menu) ";F$
5020 IF LEN(F$)<1 THEN GOTO 60
5030 IF LEN(F$)>8 THEN LOCATE 8,5:PRINT "Max. 8 characters!":GOTO 5010 ELSE 5040
5040 KILL F$+".god"
5050 GOTO 60
6000 'utils
6010 CLS
6020 CLS:LOCATE 1,1:PRINT CHR$(201):LOCATE 1,2:PRINT STRING$(78,205)
6030 FOR I=2 TO 22:LOCATE I,1:PRINT CHR$(186):NEXT
6040 FOR I=2 TO 22:LOCATE I,80:PRINT CHR$(186):NEXT
6050 LOCATE 1,80:PRINT CHR$(187)
6060 LOCATE 22,1:PRINT CHR$(200):LOCATE 22,80:PRINT CHR$(188)
6070 LOCATE 22,2:PRINT STRING$(78,205)
6080 LOCATE 3,33:COLOR 0,7:PRINT "Utilities Menu":COLOR 7,0
6090 LOCATE 8,15:COLOR 0,7:PRINT " S "
6100 LOCATE 12,15:PRINT " R "
6110 COLOR 7,0
6120 LOCATE 8,18:PRINT " . . . . . . . . . . "
6130 LOCATE 12,18:PRINT " . . . . . . . . . . "
6140 LOCATE 8,39:PRINT "Show treasure tables"
6150 LOCATE 12,39:PRINT "Return to main menu"
6160 I$=INKEY$:IF I$="" THEN 6160
6180 IF I$="S" OR I$="s" THEN 6200
6190 IF I$="r" OR I$="R" THEN 60
6191 IF I$="" THEN 6160
6200 CLS
6210 CLS:LOCATE 1,1:PRINT CHR$(201):LOCATE 1,2:PRINT STRING$(78,205)
6220 FOR I=2 TO 22:LOCATE I,1:PRINT CHR$(186):NEXT
6230 FOR I=2 TO 22:LOCATE I,80:PRINT CHR$(186):NEXT
6240 LOCATE 1,80:PRINT CHR$(187)
6250 LOCATE 22,1:PRINT CHR$(200):LOCATE 22,80:PRINT CHR$(188)
6260 LOCATE 22,2:PRINT STRING$(78,205)
6270 DEFINT A-Z:CLEAR
6280 L1$="1,000's   1,000's    1000's    1000's     100's
6290 L2$="  of        of         of        of        of
6300 L3$="Copper    Silver    Electrum    Gold    Platinum   Gems   Jewelry   Maps/Magic"
6310 L4$="-------------------------------------------------------------------------------"
6320 LOCATE 3,10:PRINT "Press the number corresponding to your treasure type letter..."
6330 LOCATE 5,5:PRINT "             A . . . 1                             B . . . 2
6340 LOCATE 6,5:PRINT "             C . . . 3                             D . . . 4
6350 LOCATE 7,5:PRINT "             E . . . 5                             F . . . 6
6360 LOCATE 8,5:PRINT "             G . . . 7                             H . . . 8
6370 LOCATE 9,5:PRINT "             I . . . 9                             J . . . 10
6380 LOCATE 10,5:PRINT"             K . . . 11                            L . . . 12
6390 LOCATE 11,5:PRINT"             M . . . 13                            N . . . 14
6400 LOCATE 12,5:PRINT"             O . . . 15                            P . . . 16
6410 LOCATE 13,5:PRINT"             Q . . . 17                            R . . . 18
6420 LOCATE 14,5:PRINT"             S . . . 19                            T . . . 20
6430 LOCATE 15,5:PRINT"             U . . . 21                            V . . . 22
6440 LOCATE 16,5:PRINT"             W . . . 23                            X . . . 24
6450 LOCATE 17,5:PRINT"             Y . . . 25                            Z . . . 26
6460 LOCATE 19,35:PRINT "Enter Choice "
6470 COLOR 7,0:LOCATE 19,47:INPUT C
6480 COLOR 7,0
6490 GOSUB 6860
6500 ON C GOTO 6510,6520,6540,6550,6560,6570,6590,6600,6620,6630,6640,6650,6660,6670,6680,6690,6700,6710,6720,6730,6740,6760,6780,6800,6820,6840
6510 PRINT  "1-6:25%   1-6:30%    1-6:35%   1-10:40%  1-4:25% 4-40:60% 3-30:50%   ANY 3:30%":GOTO 6930
6520 PRINT  "1-8:50%   1-6:25%    1-4:25%   1-3:25%     nil   1-8:30%   1-4:20% Sword,Armor,                                                                     or misc.                                                                        weapon:10%"
6530 GOTO 6930
6540 PRINT  "1-12:20%  1-6:30%    1-4:10%    nil        nil   1-6:25%   1-3:20%  Any 2:10%":GOTO 6930
6550 PRINT  "1-8:10%   1-12:15%   1-8:15%   1-6:50%     nil   1-10:30%  1-6:25% Any 2 plus                                                                      1 potion:15%":GOTO 6930
6560 PRINT  "1-10:5%   1-12:25%   1-6:25%   1-8:25%     nil   1-12:15%  1-8:10%  Any 3 plus                                                                     1 scroll:25%":GOTO 6930
6570 PRINT  " nil      1-20:10%   1-12:15%  1-10:40%  1-8:35% 3-30:20%  1-10:10% Any 3 excpt                                                              swords or misc wps                                                       + 1 potion & 1 scroll:30%"
6580 GOTO 6930
6590 PRINT  " nil        nil        nil    10-40:50% 1-20:50% 5-20:30%  1-10:25% Any 4 + 1                                                                       scroll:35%":GOTO 6930
6600 PRINT  "5-30:25% 1-100:40% 10-40:40% 10-60:55% 5-50:25% 1-100:50% 10-40:50% Any 4 + 1                                                                       potion & 1                                                                      scroll:15%"
6610 GOTO 6930
6620 PRINT  " nil        nil        nil      nil    3-18:30% 2-20:50%  1-12:50%  Any 1:15%":GOTO 6930
6630 PRINT   "3-24 pcs*   nil        nil      nil      nil     nil        nil     nil":GOTO 6930
6640 PRINT  " nil     3-18 pcs*     nil      nil      nil     nil        nil     nil":GOTO 6930
6650 PRINT   " nil        nil     2-12 pcs*   nil      nil     nil        nil     nil":GOTO 6930
6660 PRINT   " nil        nil        nil   2-8 pcs*    nil     nil        nil     nil":GOTO 6930
6670 PRINT   " nil        nil        nil      nil    1-6 pcs*  nil        nil     nil":GOTO 6930
6680 PRINT   "1-4:25%   1-3:20%      nil      nil      nil     nil        nil     nil":GOTO 6930
6690 PRINT   " nil      1-6:30%    1-2:25%    nil      nil     nil        nil     nil":GOTO 6930
6700 PRINT   " nil        nil        nil      nil      nil   1-4:50%      nil     nil":GOTO 6930
6710 PRINT   " nil        nil        nil    2-8:40% 10-60:50% 4-32:55% 1-12:45%   nil":GOTO 6930
6720 PRINT   " nil        nil        nil      nil      nil     nil        nil    2-8 potions                                                                         40%":GOTO 6930
6730 PRINT   " nil        nil        nil      nil      nil     nil        nil    1-4 scrolls                                                                         50%":GOTO 6930
6740 PRINT   " nil        nil        nil      nil      nil  10-80:90%  5-30:80%  1 each magic                                                                  excpt potions                                                                   & scrolls:70%"
6750 GOTO 6930
6760 PRINT   " nil        nil        nil      nil      nil     nil        nil    2 each magic                                                                  excpt potions                                                                   & scrolls:85%"
6770 GOTO 6930
6780 PRINT   " nil        nil        nil   5-30:60%  1-8:15% 10-80:60% 5-40:50%  1 map:55%
6790 GOTO 6930
6800 PRINT   " nil        nil        nil      nil      nil     nil        nil    1 misc magic                                                                    + 1 potion                                                                         60%"
6810 GOTO 6930
6820 PRINT   " nil        nil        nil   2-12:70%    nil     nil        nil     nil
6830 GOTO 6930
6840 PRINT   "1-3:20%   1-4:25%   1-4:25%   1-4:30%  1-6:30% 10-60:55%  5-30:50%  Any 3 magic                                                                       50%"
6850 GOTO 6930
6860 CLS:LOCATE 1,1:PRINT L1$
6870 LOCATE 2,1:PRINT L2$
6880 LOCATE 3,1:PRINT L3$
6890 LOCATE 4,1:PRINT L4$
6900 LOCATE 10,5:PRINT " *  . . .  per individual"
6910 LOCATE 6,1
6920 RETURN
6930 LOCATE 22,25:PRINT "Another Treasure Table? (Y/N) ?"
6940 I$=INKEY$:IF I$="" THEN 6940
6950 IF I$="Y" OR I$="y" THEN 6200
6960 GOTO 60
```
{% endraw %}

## PIRATE.BAS

{% raw %}
```bas
100 REM *******************
110 REM *  PIRATE ISALND  *
120 REM *                 *
130 REM *        BY       *
140 REM *   DAVID MENY    *
150 REM *******************
160 CLS:KEY OFF:DEFINT A-Z
170 DIM A(45,6),O1$(20),O2$(20),TR(14),IN$(14),RO$(45)
171 GOSUB 20000:REM INITIALIZE
172 LOCATE 21,1
173 PRINT "Pirate Island by David Meny"
174 PRINT "Copyright 1985, Menco, Inc."
175 PRINT
176 PRINT "  In your sleep, you dream of valiant pirates who sail across the seas, finding"
177 PRINT "secret treasure hidden deep inside dangerous islands."
178 PRINT "  You dream of adventourous fights to the death between pirates over gold-laced"
179 PRINT "statues or chest of gold coins from a long time ago."
180 PRINT "  You dream and dream until the rocking of the seas wakens you on board the ship"
185 PRINT "'The Eagle's Nest', a pirate ship!":PRINT
190 GOSUB 15000:REM PRINT ROOM DESCRIPTION
200 GOSUB 14000:REM PRINT ROOM CONTENTS
210 IF START=1 THEN MV=MV+1 ELSE 219
211 IF MV=10 THEN TR(2)=RO ELSE 219
212 PRINT "The captain walks up to you."
213 IF FLAG98=1 THEN 216
214 PRINT "'You fool!! We have been sailing for days now and we haven't found Pirate":PRINT "Island. I shouldn't have trusted you, even though you are my grand son.'"
215 PRINT "The captain pulls out his cutlass and decapitates you.":GOTO 2000
216 PRINT "'Congradulations!! We've come ashore on ze' old Pirate Island. Now go ashore by":PRINT "the east starboard deck.' The captain then hands you a bag of silver."
217 PRINT "'Spend it wisely. It's your payment IF you don't come back.'":TR(2)=25:A(39,2)=22:FLAG97=1:TR(14)=200
219 PRINT:INPUT ">",A$
220 IF A$="" THEN PRINT:PRINT "What?":GOTO 210
230 AS=ASC(A$)
240 IF AS<65 OR AS>90 THEN PRINT:PRINT "I can only use capital letters, matey.":GOTO 210
245 IF A$="LOOK UNDER JULIUS" THEN GOSUB 8010:GOTO 210
246 IF A$="LOOK UNDER PIRATE ISLAND" THEN GOSUB 8150:GOTO 210
247 IF A$="LOOK UNDER DAVID MENY" THEN GOSUB 8300:GOTO 210
250 M=LEN(A$):IF M<7 THEN A$=A$+" ":GOTO 250
260 KW=0:B$=LEFT$(A$,3)
270 IF B$="INV" OR B$="I  " THEN GOSUB 1000:GOTO 210
280 IF B$="SCO" THEN GOSUB 1500:GOTO 210
285 IF B$="DIG" THEN GOSUB 2250:GOTO 210
286 IF B$="KNO" THEN GOSUB 6500:GOTO 210
290 IF B$="QUI" OR B$="Q  " THEN GOSUB 2000
300 IF B$="LOO" OR B$="L  " THEN PRINT:GOTO 190
305 IF B$="SWI" THEN GOSUB 8500:GOTO 210
310 IF B$="N  " THEN C$="N  ":KW=1:GOSUB 2500:GOTO 210
320 IF B$="S  " THEN C$="S  ":KW=1:GOSUB 2500:GOTO 210
330 IF B$="E  " THEN C$="E  ":KW=1:GOSUB 2500:GOTO 210
340 IF B$="W  " THEN C$="W  ":KW=1:GOSUB 2500:GOTO 210
350 IF B$="U  " THEN C$="U  ":KW=1:GOSUB 2500:GOTO 210
360 IF B$="D  " THEN C$="D  ":KW=1:GOSUB 2500:GOTO 210
370 N=1
380 IF MID$(A$,N,1)=" " THEN C$=MID$(A$,N+1,3):IF LEFT$(C$,1)<>" " THEN 410 ELSE 400
390 IF N<M THEN N=N+1:GOTO 380
400 PRINT:PRINT "I don't know that word.":GOTO 210
410 IF B$="GO " OR B$="MOV" OR B$="WAL" THEN KW=1:GOSUB 2500:GOTO 210
420 IF B$="GET" OR B$="TAK" THEN GOSUB 3000:GOTO 210
430 IF B$="DRO" OR B$="PUT" THEN GOSUB 3500:GOTO 210
440 IF B$="OPE" THEN GOSUB 4000:GOTO 210
450 IF B$="UNL" THEN GOSUB 4500:GOTO 210
460 IF B$="BUY" THEN GOSUB 5000:GOTO 210
480 IF B$="CLI" THEN GOSUB 6000:GOTO 210
490 IF B$="REA" THEN GOSUB 7000:GOTO 210
510 PRINT:PRINT "I don't know that word."
520 GOTO 210
1000 REM INVENTORY
1010 PRINT "  You are carrying:"
1020 PRINT
1030 FOR I=1 TO 14
1040 IF TR(I)=200 THEN PRINT "    ";IN$(I):FLAG1=1
1050 NEXT I
1060 IF FLAG1<>1 THEN PRINT "    nothing"
1070 FLAG1=0
1080 RETURN
1500 REM SCORE
1510 PRINT
1520 PRINT "Out of 200 points, you got ";SCORE;" points."
1521 PRINT "That gives you the rating of ";
1522 IF SCORE<50 THEN PRINT "a Deck boy."
1523 IF SCORE>50 AND SCORE<100 THEN PRINT "a Sea Man."
1524 IF SCORE>100 AND SCORE<150 THEN PRINT "a Bucaneer."
1525 IF SCORE>150 THEN PRINT "a Sea Captain."
1530 RETURN
2000 REM QUIT
2010 COLOR 0,7:LOCATE 25,50:PRINT "Score:";SCORE:COLOR 7,0:PRINT
2020 PRINT "Out of 200 points, you got ";SCORE;" points."
2021 PRINT "That gives you the rating of ";
2022 IF SCORE<50 THEN PRINT "a Deck boy."
2023 IF SCORE>50 AND SCORE<100 THEN PRINT "a Sea Man."
2024 IF SCORE>100 AND SCORE<150 THEN PRINT "a Bucaneer."
2025 IF SCORE>150 THEN PRINT "a Sea Captain."
2029 IF EGG=1 THEN PRINT:GOTO 9020
2030 PRINT:GOTO 9020
2250 REM DIG ROUTINE
2251 INPUT "With what";F$:F$=LEFT$(F$,3)
2252 IF F$<>"SHO" THEN PRINT "You can't use that to dig with.":RETURN
2260 IF RO<>1 AND RO<>11 AND RO<>21 THEN 2270 ELSE 2290
2270 IF RO>23 THEN PRINT "If you dig on the ship, you might cause a leak.":RETURN
2280 PRINT "The ground is too hard here.":RETURN
2290 IF RO=1 THEN PRINT "You dig into the ground...You hit something! Its a coffin! When you open the":PRINT "coffin, a skeleton pops out, knife first, stabbing you!! The coffin was":PRINT "boobeytrapped!!":RETURN 2000
2300 IF RO=11 THEN PRINT "You dig but you don't find anything.":RETURN
2310 PRINT "You dig in the damp soil and soon you come upon a grating in the ground!":TR(13)=21:RETURN
2500 REM GO ROUTINE
2510 C$=LEFT$(C$,1)
2511 IF C$="S" AND RO=39 AND FLAG97=0 THEN PRINT "Are you sure you want to dive into the water?":RETURN
2520 IF C$="N" AND A(RO,1)=0 THEN PRINT:PRINT "You can't go that way.":RETURN
2530 IF C$="S" AND A(RO,2)=0 THEN PRINT:PRINT "You can't go that way.":RETURN
2540 IF C$="E" AND A(RO,3)=0 THEN PRINT:PRINT "You can't go that way.":RETURN
2550 IF C$="W" AND A(RO,4)=0 THEN PRINT:PRINT "You can't go that way.":RETURN
2560 IF C$="U" AND A(RO,5)=0 THEN PRINT:PRINT "You can't go that way.":RETURN
2570 IF C$="D" AND A(RO,6)=0 THEN PRINT:PRINT "You can't go that way.":RETURN
2580 IF C$="N" THEN RO=A(RO,1)
2590 IF C$="S" THEN RO=A(RO,2)
2600 IF C$="E" THEN RO=A(RO,3)
2610 IF C$="W" THEN RO=A(RO,4)
2620 IF C$="U" THEN RO=A(RO,5)
2630 IF C$="D" THEN RO=A(RO,6)
2640 IF RO=22 AND FLAG2=0 THEN SCORE=SCORE+20:FLAG2=1
2650 IF RO=23 AND FLAG3=0 THEN SCORE=SCORE+20:FLAG3=1
2660 RETURN 190
3000 REM GET ROUTINE
3010 IF C$="CHE" AND RO=23 THEN PRINT "The chest is too large and heavy for you to carry.":RETURN
3020 IF C$="CAP" AND RO=25 THEN PRINT "The captain moves out of the way just as you try to lift him. 'Hey, are you some":PRINT "kind of quier?'":RETURN
3030 IF C$="COO" AND RO=40 THEN PRINT "The cook slaps your hand. 'Not now, someone might see us.'":RETURN
3040 IF C$="STE" AND RO=40 THEN PRINT "The cook slaps your hand. 'Wait till it's done.'":RETURN
3041 IF C$="GAR" AND FLAG98=0 THEN PRINT "'No one messes with my stew makin's.' The cook pulls out a knife and cuts your":PRINT "throat. As you die, you hear the cook mutter, 'Now that'll teach him.'":RETURN 2000
3042 IF C$="GRA" THEN PRINT "The grate is secured to the grate.":RETURN
3050 FLAG7=0:FLAG8=0:OBJECT=0
3060 FOR I=1 TO 14
3070 IF TR(I)=200 THEN FLAG7=FLAG7+1
3080 NEXT I
3090 IF FLAG7>6 THEN PRINT:PRINT "You can't carry anymore.":RETURN
3100 FOR I=1 TO 12
3110 IF TR(I)=RO THEN FLAG8=1
3115 NEXT I
3120 IF FLAG8=0 THEN PRINT:PRINT "There is nothing here to pick up.":RETURN
3130 FOR I=1 TO 14
3140 IF C$=O1$(I) AND TR(I)=RO THEN OBJECT=I
3150 NEXT
3160 IF OBJECT=0 THEN PRINT:PRINT "I don't see that here.":RETURN
3170 TR(OBJECT)=200
3180 PRINT "Ok."
3190 IF TR(1)=200 AND FLAG9=0 THEN SCORE=SCORE+15:FLAG9=1
3200 IF TR(12)=200 AND FLAG10=0 THEN SCORE=SCORE+40:FLAG10=1
3201 IF TR(9)=200 AND FLAG55=0 THEN SCORE=SCORE+60:FLAG55=1
3210 RETURN
3500 REM DROP ROUTINE
3510 OBJECT=0:FOR I=1 TO 14
3520 IF C$=O1$(I) THEN OBJECT=I
3530 NEXT I
3540 IF OBJECT=0 THEN PRINT "You don't have that!":RETURN
3550 PRINT "Ok."
3560 TR(OBJECT)=RO
3570 RETURN
4000 REM OPEN ROUTINE
4010 IF C$<>"DRA" AND C$<>"BOX" AND C$<>"CHE" AND C$<>"DOO" THEN PRINT:PRINT "You can't open that.":RETURN
4011 PRINT
4015 IF C$="DRA" AND RO<>26 THEN PRINT "I don't see a dresser here.":RETURN
4016 IF C$="DRA" AND RO=26 AND FLAG4=1 THEN PRINT "The drawer is already open.":RETURN
4020 IF C$="DRA" AND FLAG4=0 AND RO=26 THEN PRINT "The drawer is now open. Inside you see your pirate book and your sword.":TR(5)=RO:TR(6)=RO:FLAG4=1:RETURN
4030 IF C$="BOX" AND TR(11)<>200 THEN PRINT "You don't even have the box.":RETURN
4040 IF C$="BOX" AND FLAG5=0 AND TR(11)=200 THEN PRINT "Ok, the box is now open. You find a thieve's pick inside.":TR(12)=RO:FLAG5=1:RETURN
4050 IF C$="BOX" AND FLAG5=1 AND TR(11)=200 THEN PRINT "The box is already open.":RETURN
4060 IF C$="CHE" AND RO<>23 THEN PRINT "I don't see the chest here.":RETURN
4070 IF C$="CHE" AND RO=23 AND FLAG70=0 THEN PRINT "You must unlock the chest.":RETURN
4080 IF C$="CHE" AND RO=23 AND FLAG70=1 THEN PRINT "The chest is already open.":RETURN
4090 IF C$="DOO" AND RO<>26 AND RO<>29 THEN PRINT "There is no door here.":RETURN
4100 IF C$="DOO" AND RO=26 AND FLAG11=0 THEN PRINT "The door swings open revealing a passage to the east.":A(26,3)=27:A(27,4)=26:FLAG11=1:RETURN
4110 IF C$="DOO" AND RO=26 AND FLAG11=1 THEN PRINT "The door is already open.":RETURN
4120 IF C$="DOO" AND RO=29 THEN PRINT "The door is locked and is the quarters of the captain.":RETURN
4130 RETURN
4500 REM unlock routine
4510 IF C$<>"DOO" AND C$<>"CHE" AND C$<>"GRA" AND C$<>"BOX" THEN PRINT "I cna't unlock that!":RETURN
4520 IF C$="DOO" THEN PRINT "You don't need to unlock that!":RETURN
4530 IF C$="BOX" THEN PRINT "You don't need to unlock that!":RETURN
4540 INPUT "With what";F$:F$=LEFT$(F$,3)
4550 IF C$="CHE" THEN 4600
4560 IF F$="KEY" THEN PRINT "The key doesn't fit the grate.":RETURN
4570 IF F$<>"PIC" THEN PRINT "You can't use that to unlock the grate!":RETURN
4580 IF FLAG60=1 THEN PRINT "The grate is already unlocked!":RETURN
4590 PRINT "The grate is now unlocked and opened! The grate reveals a passage downward.":A(21,6)=23:A(23,5)=21:FLAG60=1:RETURN
4600 IF F$="PIC" THEN PRINT "The pick doesn't fit the chest's lock.":RETURN
4610 IF F$<>"KEY" THEN PRINT "You can't use that to unlock the chest!":RETURN
4620 IF FLAG70=1 THEN PRINT "The chest is already unlocked!":RETURN
4630 PRINT "The chest is now unlocked and opened! The chest reveals a large, gold Spanish coin!":FLAG70=1:TR(9)=23:RETURN
5000 REM BUY ROUTINE
5010 INPUT "With what?";F$:F$=LEFT$(F$,3)
5020 IF C$<>"GAR" THEN PRINT "You can't buy that!":RETURN
5030 IF FLAG50=1 THEN PRINT "You've already bought the clove of garlic.":RETURN
5040 IF RO<>40 AND TR(4)<>200 THEN PRINT "I don't see the clove of garlic here.":RETURN
5050 IF F$<>"BAG" AND F$<>"SIL" THEN PRINT "'You fool! You'd think I'd seatle for less than silver for my garlic!' You are":PRINT " then decapitated!":RETURN 2000
5060 PRINT "The cook thinks it over then says, 'Well I guess it's a good deal so here.'":PRINT "Then the cooks hands you the clove and takes your bag of silver.":TR(4)=200:TR(14)=255:FLAG50=1
5070 RETURN
6000 REM CLIMB ROUTINE
6010 IF C$<>"MAS" AND C$<>"LAD" THEN PRINT "You can't climb that!":RETURN
6020 IF C$="MAS" AND RO=33 THEN PRINT "You climb up the mast...Soon you are in the crow's nest.":RO=35:PRINT:RETURN 190
6030 IF C$="MAS" AND RO=32 THEN PRINT "You climb up the mast...Soon you are in the crow's nest.":RO=34:PRINT:RETURN 190
6040 IF C$="MAS" THEN PRINT "I can't see a mast here.":RETURN
6050 IF C$="LAD" AND RO=39 THEN PRINT "If you want to go down the ladder just say so.":RETURN
6060 IF C$="LAD" THEN PRINT "I don't see a ladder here.":RETURN
6500 REM KNOCK ROUTINR
6510 INPUT "What do you want to knock on";F$:F$=LEFT$(F$,3)
6520 IF F$<>"DOO" THEN PRINT:PRINT "Awesome!!!":RETURN
6530 IF RO<>29 AND RO<>26 AND RO<>27 THEN PRINT:PRINT "I don't see a door here.":RETURN
6540 IF RO=29 AND FLAG12=0 THEN PRINT:PRINT "You knock on the door and wait. Soon the captain comes and ushers you in.":RO=25:FLAG12=1:PRINT:RETURN 190
6545 IF RO=29 AND FLAG12=1 THEN PRINT:PRINT "There is no answer.":RETURN
6550 PRINT:PRINT "Nothing happens."
6560 RETURN
7000 REM READ ROUTINE
7010 IF C$<>"BOO" AND C$<>"NOT" THEN PRINT:PRINT "You can't read that!":RETURN
7015 IF C$="NOT" THEN 7190
7020 IF TR(5)<>200 THEN PRINT:PRINT "You aren't even carrying the book!":RETURN
7030 PRINT
7060 PRINT "     This is Julius the Pirate's book on pirates. Included"
7070 PRINT "     are many entries on other pirates, ships and treasures."
7080 PRINT "     You skim through the book until you find a large entry"
7090 PRINT "     on an ancient Spanish coin worth thousands of dollar"
7100 PRINT "     and located on an island close by here. The lattitude"
7110 PRINT "     is 45 degrees and the longitude is 24 degrees."
7120 PRINT
7130 PRINT "     You notice that at the bottom of the last page that there"
7140 PRINT "     is some text reading:"
7150 PRINT
7160 PRINT "     For other refrences on Julius the Pirate, look under Julius"
7170 PRINT "     in a card catalog found in every ship library."
7180 RETURN
7190 IF RO<>42 THEN PRINT:PRINT "You can't see any note here.":RETURN
7200 PRINT
7210 PRINT "     To find a book in the many books in our wondourous library,"
7220 PRINT "     look under the subject and then go find the book. I hope"
7230 PRINT "     the books will entertain you and widen your horizons and"
7240 PRINT "     be sure to put the books back, OR ELSE!!!"
7250 PRINT
7260 PRINT "                                        -Jonny the Captain"
7270 RETURN
8000 REM LOOK UNDER ROUTINE
8010 IF RO<>42 THEN PRINT "You can't find information on that here. Try the ship's library open 24 hours a":PRINT "day!":RETURN
8020 PRINT
8030 PRINT "    You look through the card catalog, find a book on Julius"
8040 PRINT "    the Pirate, go get the book along the racks, and find this"
8050 PRINT "    entry:":PRINT
8060 PRINT "    Julius the Pirate was a great pirate, know for his daring"
8070 PRINT "    adventures and finding rare and valuable treasures. His"
8080 PRINT "    most famous treasure find was the Spanish gold coin, an"
8090 PRINT "    original coin since only one was made and it was minted in"
8100 PRINT "    in 1635. Julius died before he could collect the coin but"
8110 PRINT "    left the degrees of the island that the famous coin is"
8120 PRINT "    supposed to be on, in his pirate book passed on through his"
8130 PRINT "    generations. The last known recorded inheritered of the book"
8131 PRINT "    was Humphry Goodfellow, who died in a fire at his house. The"
8132 PRINT "    whereabouts of the book is unknown.":PRINT
8133 PRINT "    You read on till you find the last paragraph, which you are"
8134 PRINT "    shocked by:":PRINT
8135 PRINT "    Julius the Pirate was a great pirate, but he had a problem"
8136 PRINT "    with his left eye, which made him put marks 5 degrees west"
8137 PRINT "    of the original on longitude and latitude maps."
8138 PRINT "    MORE?"
8139 IF INKEY$="" THEN 8139
8140 RETURN
8150 IF RO<>42 THEN PRINT "You can't find information on that here. Try the ship's library open 24 hours a":PRINT "day!":RETURN
8160 PRINT
8170 PRINT "    Pirate Island is one of the most scariest islands in the"
8180 PRINT "    whole ocean. The name of the island has sent chills down"
8190 PRINT "    the spines of many young sea-going sailors. The bravest"
8200 PRINT "    captains have steered away from the island just to stay"
8210 PRINT "    out of the horrors that superstision have provided."
8220 PRINT "    Legends have it that the valuable Spanish gold coin rests"
8230 PRINT "    on Pirate Island but to date, no one has even tried to"
8240 PRINT "    find the coin. But then again, we don't record ALL voyages!"
8250 RETURN
8300 IF RO<>42 THEN PRINT "You can't find information on that here. Try the ship's library open 24 hours a":PRINT "day!":RETURN
8310 PRINT
8320 PRINT "    David Meny is one of the greatest pirates on the seven seas!"
8330 PRINT "    He has written his way out of a jail cell and found the Spanish"
8340 PRINT "    silver coin, second in value to only the famous gold coin made"
8350 PRINT "    by the Spainards. He continues to roam the free world"
8360 PRINT "    in search of adventure and intrigue."
8370 RETURN
8500 REM SWIM ROUTINE
8510 IF RO<>11 AND RO<>44 AND RO<>45 AND RO<>22 THEN PRINT "You can't swim here!":RETURN
8520 IF RO=44 OR RO=45 THEN PRINT "You swim around for awhile then end up where you are now.":RETURN
8530 IF RO=22 THEN PRINT "The water is to shallow to swim here.":RETURN
8540 PRINT "You swim out into the bay...."
8550 RO=44:RETURN 190
8990 END
9000 REM end of game
9010 PRINT "You have died. Too bad."
9020 INPUT "Would you like to start over";F$
9030 F$=LEFT$(F$,1)
9040 IF F$="Y" OR F$="y" THEN GOTO 9090
9050 IF F$="N" OR F$="n" THEN GOTO 9070
9060 PRINT "Please answer the question.":GOTO 9020
9070 PRINT:PRINT "Ok. See you next time on Pirate Island."
9080 FOR I=1 TO 100:NEXT I:CLS:END
9090 FLAG1=0:FLAG2=0:FLAG3=0:FLAG4=0:FLAG5=0:FLAG6=0:FLAG6=0:FLAG7=0:FLAG8=0:FLAG9=0:FLAG10=0:FLAG11=0:FLAG12=0:FLAG13=0:FLAG14=0:FLAG15=0:FLAG40=0:FLAG55=0:FLAG50=0:FLAG60=0:FLAG70=0:FLAG95=0:FLAG96=0:FLAG97=0:FLAG99=0:FLAG99=0:FLAG100=0
9100 RO=26
9110 TR(1)=35:TR(2)=25:TR(3)=8:TR(4)=40:TR(5)=255:TR(6)=255:TR(7)=23:TR(8)=40:TR(9)=255:TR(10)=36:TR(11)=45:TR(12)=255:TR(13)=255:TR(14)=255
9111 A(26,3)=0:A(27,4)=0:A(21,6)=0:A(23,5)=0
9120 CLS:GOTO 172
14000 REM PRINT ROOM CONTENTS
14020 FLAG99=0:JKH=0:FOR I=1 TO 14
14030 IF TR(I)=RO THEN JKH=I
14031 IF JKH<>I THEN 14040
14035 IF FLAG99=0 THEN PRINT O2$(JKH):ELSE PRINT O2$(JKH)
14036 FLAG99=1:JKH=I
14040 NEXT
14050 RETURN
15000 REM ROOM DESCRIPTION
15010 COLOR 0,7
15020 LOCATE 25,1
15030 PRINT "                                                                               "
15040 LOCATE 25,3:PRINT RO$(RO)
15050 LOCATE 25,50:PRINT "Score:";SCORE
15060 COLOR 7,0
15065 PRINT RO$(RO)
15066 IF RO>39 THEN 15090
15070 ON RO GOSUB 15110,15150,15150,15175,15210,15240,15280,15320,15210,15210,15360,15400,15210,15450,15490,15520,15560,15450,15450,15600,15640,15680,15720,15760,15800,15850,15890,15920,15950,16000,16040,16080,16120,16170,16170,16190,16230,16270,16320
15071 IF RO<>25 THEN 15080
15072 PRINT:PRINT "The captain looks at you the says, 'Well what's then longitude of Pirate":INPUT "Island";F1:INPUT "'Ok, now what's the latitude";F2
15073 PRINT "'You better be right or you'll regret you ever woke up this morning! Now leave.'":IF F1=F4 AND F2=F3 THEN FLAG98=1:START=1:RO=29:PRINT:RETURN 190
15074 START=1:RO=29:FLAG98=0:RETURN 190
15080 RETURN
15090 ST=RO-39:ON ST GOSUB 16360,16410,16440,16480,16510,16550
15100 RETURN
15110 REM ROOM 1
15120 PRINT "You are on the top of a high cliff overlooking the blue waters of the ocean. A"
15130 PRINT "path leads down. The soil is damp here."
15140 RETURN
15150 REM ROOM 2 AND 3
15160 PRINT "You are in a large rain forest."
15170 RETURN
15175 REM ROOM 4
15180 PRINT "You are on a small path leading out of a large rain forest to the west. In the"
15190 PRINT "center of the path there is a large tree."
15200 RETURN
15210 REM ROOM 5,9,10 AND 13
15220 PRINT "This is a thick forest covered by many trees, all of which are unclimbable."
15230 RETURN
15240 REM ROOM 6
15250 PRINT "You are standing below a large cliff. A path leads up to the cliff while an"
15260 PRINT "east/west path heads towards a cove and a meadow."
15270 RETURN
15280 REM room 7
15290 PRINT "You are near a large rock which has probably stood here for many hundreds of"
15300 PRINT "years. A small path leads south."
15310 RETURN
15320 REM room 8
15330 PRINT "You are in a large tree above a small path. The many leaves and branches"
15340 PRINT "prevent you from going any further up, while a large stump leads down."
15350 RETURN
15360 REM room 11
15370 PRINT "You are standing on the shore of an inland cove. The clear, blue waters of"
15380 PRINT "the ocean are of to the east, while a murky smell comes from the south. The"
15385 PRINT "soil is damp here."
15390 RETURN
15400 REM room 12
15410 PRINT "You are standing in a large meadow where birds sing and deer play. The tall,"
15420 PRINT "lush grass beneath you is stamped out, forming a path to the north, south and"
15430 PRINT "west."
15440 RETURN
15450 REM rooms 14,18 and 19
15460 PRINT "This is a murky, dismal swamp where hideous creatures hide when they are not on"
15470 PRINT "the hunt. A path leads to the west."
15480 RETURN
15490 PRINT "You are standing, or rather were standing, in a large pond of quick sand."
15500 PRINT "You are slowly...slowly...slowly...sinking."
15510 RETURN 9000
15520 REM room 16
15530 PRINT "You are walking along a beach path which surrounds the southwest part of the"
15540 PRINT "island. To the east you can see a beach, while to the west comes a murky smell."
15550 RETURN
15560 REM room 17
15570 PRINT "This is a sandy beachy coming out of the water. Palm tress line the shore and"
15580 PRINT "a path leads to the west and to the east. Another path heads north."
15590 RETURN
15600 REM room 20
15610 PRINT "You are standing in a dark cave leading out of a swamp. From the east comes"
15620 PRINT "squeaky noises (Maybe you aren't the only one on this island)."
15630 RETURN
15640 REM room 21
15650 PRINT "You are in a cave with many bats. The ground is damp here. ";:IF TR(4)<>200 THEN PRINT " The bats see you and attack.":PRINT "You have many bat bites and slowly...slowly...slowly die.":RETURN 9000
15660 PRINT " The bats, seeing your garlic, stay far back."
15670 RETURN
15680 REM room 22
15690 PRINT "You are in a shallow cove, so shallow that you can stand up. To the north there"
15700 PRINT "is a sandy beach, while to all other directions there is deep water."
15710 FLAG40=1:RETURN
15720 REM room 23
15730 PRINT "You are in a secret cave below a grate. From up above you can hear squeaky"
15740 PRINT "noises."
15750 RETURN
15760 REM room 24
15770 PRINT "This is the wheelhouse of the ship where the ship is directed. A navigator is"
15780 PRINT "here directing the wheel over the blue water of the ocean."
15790 RETURN
15800 REM room 25
15810 PRINT "You are in the captain's quarters, a large room with many sea equipment along"
15820 PRINT "the including a compass and an old relic made out of gold. There is a large,"
15830 PRINT "wooden desk here containg top-secret information."
15840 RETURN
15850 REM room 26
15860 PRINT "You are in your cabin, a small room with minor furnishments. The only"
15870 PRINT "furnishments are a bed and a dresser with only one drawer. A large wooden door"
15871 PRINT "is on the east wall."
15880 RETURN
15890 REM room 27
15900 PRINT "You are in the north end of a hallway running north to south."
15910 RETURN
15920 REM room 28
15930 PRINT "You are on the port section of the ship's deck. To the north there is the "
15940 PRINT "ship's wheelhouse. Also the mid deck is to the south."
15945 RETURN
15950 REM room 29
15960 PRINT "You are on the ship's port deck. To the west is another portdeck and to the"
15970 PRINT "south there is the mid deck. To the east there is a passageway leading to the"
15980 PRINT "wheelhouse and to the north there is a large door leading to the captain's"
15981 PRINT "quarters."
15990 RETURN
16000 REM room 30
16010 PRINT "You are in the crew's cabin portion of the ship. There are many bunks and gear"
16020 PRINT "here that belongs to other people, so don't touch it."
16030 RETURN
16040 REM room 31
16050 PRINT "This is a hallway running north to south. To the west is the crew's cabin while"
16060 PRINT "up there is the mid deck."
16070 RETURN
16080 REM room 32
16090 PRINT "You are on the ship's mid deck. Another mid deck is off to the east while the"
16100 PRINT "ship's port and starboard decks are off to the north and south. A large mast is"
16105 PRINT "here with a crow's nest on top of it."
16110 RETURN
16120 REM room 33
16130 PRINT "You are on one of two mid decks. This mid deck has a ladder leading down to the"
16140 PRINT "decks below. Also the port and starboards are off to the north and south while"
16150 PRINT "a large mast is above you. On the top of the mast, there is a crow's nest."
16160 RETURN
16170 REM room 34 and 35
16180 PRINT "You are in a crow's nest, a lookout site for land, storms and other ships."
16181 RETURN
16190 REM room 36
16200 PRINT "You are in the ship's mess hall where every day hungry crewmen are fed. To the"
16210 PRINT "south is the galley and to the east is a hallway."
16220 RETURN
16230 REM room 37
16240 PRINT "You are in a hallway running north to south. To the west is the ship's mess"
16250 PRINT "hall."
16260 RETURN
16270 REM room 38
16280 PRINT "You are on the starboard deck of the ship. To the east there is another"
16290 PRINT "starboard deck, while to the north there is a mid deck. To the south there is"
16300 PRINT "the ship's library."
16310 RETURN
16320 REM room 39
16330 PRINT "This is the ship's starboard deck. There is a ladder here, leading down to a"
16340 PRINT "hallway and a deck to the north and to the west."
16341 IF RO<>39 THEN 15100
16342 IF FLAG40<>1 THEN 15100
16343 PRINT
16344 IF RO=39 AND FLAG40=1 AND TR(9)=200 THEN PRINT "As you come back aboard the ship, the captain greets you. 'Welcome back, matey!":PRINT "Congradulations, you found the coin. Now we will all be":PRINT "rich!'":SCORE=SCORE+55:EGG=1:RETURN 2000
16345 IF RO=39 AND FLAG40=1 AND TR(9)<>200 THEN PRINT "As you come back aboard the ship, the captain greets you. 'Welcome back, matey!":PRINT "What? You didn't find the coin. I'll kill you for that!' The captain"
16346 PRINT "then pulls out his sword and kills you!":RETURN 2000
16350 RETURN
16360 REM room 40
16370 PRINT "This is the ship's galley where food is prepared. A large stove is against the"
16380 PRINT "south wall and many ingredients awaiting to be prepared in the stew the cook is"
16390 PRINT "making."
16400 RETURN
16410 REM room 41
16420 PRINT "You are in the south end of a hallway running north to south."
16430 RETURN
16440 REM room 42
16450 PRINT "You are in the ship's library with many books lining the wall. A card catalog is"
16460 PRINT "here and a card catalog reference note is pinned on top of the card catalog."
16470 RETURN
16480 REM room 43
16490 PRINT "You are under water. You are sinking in the soft sand......."
16500 RETURN 9000
16510 REM ROOM 44
16520 PRINT "You are swimming on the top of the water in an inland cove. Off to the east is"
16530 PRINT "the shore of the cove."
16540 RETURN
16550 REM room 45
16560 PRINT "You are on the bottom of a cove. The sand here is sturdy, thus you don't sink."
16570 RETURN
19990 END
20000 REM INITIALIZE
20010 RO=26:SCORE=0
20015 F3=45:F4=29
20020 FOR I=1 TO 45
20030 FOR J=1 TO 6
20040 READ A(I,J)
20050 NEXT J
20060 NEXT I
20070 FOR I=1 TO 14
20080 READ O1$(I),O2$(I),TR(I),IN$(I)
20090 NEXT I
20100 FOR I=1 TO 45
20110 READ RO$(I)
20120 NEXT I
20130 RETURN
25000 REM DATA STATEMENTS
25010 DATA 0,0,0,0,0,6:REM ROOM 1
25020 DATA 2,2,3,2,0,0:REM ROOM 2
25030 DATA 2,3,4,0,6,0:REM ROOM 3
25040 DATA 0,0,0,3,8,0:REM ROOM 4
25050 DATA 0,5,10,9,0,0:REM ROOM 5
25060 DATA 0,0,12,11,1,3:REM ROOM 6
25070 DATA 0,17,0,0,0,0:REM ROOM 7
25080 DATA 0,0,0,0,0,4:REM ROOM 8
25090 DATA 5,10,13,9,0,0:REM ROOM 9
25100 DATA 5,19,10,9,0,0:REM ROOM 10
25110 DATA 6,15,12,0,0,0:REM ROOM 11
25120 DATA 6,16,0,11,0,0:REM ROOM 12
25130 DATA 9,0,0,18,0,0:REM ROOM 13
25140 DATA 0,19,14,20,0,0:REM ROOM 14
25150 DATA 0,0,0,0,0,0:REM ROOM 15
25160 DATA 12,0,17,15,0,0:REM ROOM 16
25170 DATA 7,22,18,16,0,0:REM ROOM 17
25180 DATA 13,0,0,17,0,0:REM ROOM 18
25190 DATA 14,18,19,10,0,0:REM ROOM 19
25200 DATA 0,0,21,14,0,0:REM ROOM 20
25210 DATA 0,0,0,20,0,0:REM ROOM 21
25220 DATA 17,39,43,43,43,43:REM ROOM 22
25230 DATA 0,0,0,0,21,0:REM ROOM 23
25240 DATA 0,0,29,28,0,0:REM ROOM 24
25250 DATA 0,29,0,0,0,0:REM ROOM 25
25260 DATA 0,0,0,0,0,0:REM ROOM 26
25270 DATA 0,31,0,0,0,0:REM ROOM 27
25280 DATA 24,32,29,0,0,0:REM ROOM 28
25290 DATA 0,33,24,28,0,0:REM ROOM 29
25300 DATA 0,0,31,0,0,0:REM ROOM 30
25310 DATA 27,37,0,30,33,0:REM ROOM 31
25320 DATA 28,38,33,0,0,0:REM ROOM 32
25330 DATA 29,39,0,32,0,31:REM ROOM 33
25340 DATA 0,0,0,0,0,32:REM ROOM 34
25350 DATA 0,0,0,0,0,33:REM ROOM 35
25360 DATA 0,40,37,0,0,0:REM ROOM 36
25370 DATA 31,41,0,36,39,0:REM ROOM 37
25380 DATA 32,42,39,0,0,0:REM ROOM 38
25390 DATA 33,0,0,38,0,37:REM ROOM 39
25400 DATA 36,0,0,0,0,0:REM ROOM 40
25410 DATA 37,0,0,0,0,0:REM ROOM 41
25420 DATA 38,0,0,0,0,0:REM ROOM 42
25430 DATA 0,0,0,0,0,0:REM ROOM 43
25431 DATA 0,0,11,0,0,45:REM ROOM 44
25432 DATA 0,0,0,0,44,0:REM ROOM 45
25440 DATA "SHO","There is an old shovel here.",35,"a shovel"
25450 DATA "CAP","The captain of the ship is here.",25,""
25460 DATA "KEY","There is a shiny key laying near you.",8,"a key"
25470 DATA "GAR","There is a clove of garlic near you.",40,"a clove of garlic"
25480 DATA "BOO","There is a bounded book here.",255,"a book"
25490 DATA "SWO","A sharp sword is here.",255,"a sharp sword"
25500 DATA "CHE","There is an old pirate chest here.",23,""
25510 DATA "COO","The ship's cook is here, cooking a stew.",40,""
25520 DATA "COI","There is a Spanish coin here.",255,"a gold coin"
25530 DATA "TRA","There is a tray here full of discarded food.",36,"a tray"
25531 DATA "BOX","Near you, there is small box.",45,"a box"
25532 DATA "PIC","There is a thieve's pick here.",255,"a thieve's pick"
25533 DATA "GRA","There is a metal grate here.",255,""
25534 DATA "BAG","A bag of silver coins is here.",255,"a bag of silver coins"
25535 DATA High Cliff,Rain Forest,Rain Forest,Small Path,Thick Forest,Near Cliff
25540 DATA Rock,Up A Tree,Thick Forest,Thick Forest,Inland Cove,Meadow
25550 DATA Thick Forest,Swamp,Quicksand,Beach Path,Sandy Beach,Swamp,Swamp
25560 DATA Dark Cave,Bat Cave,Shallow Cove,Secret Cave,Wheelhouse
25570 DATA Captain's Quarters,Your Cabin,Hallway,Port Deck,Port Deck
25580 DATA Crew's Cabin,Hallway,Mid Deck,Mid Deck,Crow's Nest,Crow's Nest
25590 DATA Mess Hall,Hallway,Starboard Deck,Starboard Deck,Galley,Hallway
25600 DATA Ship's Library,Under Water,Top of the Bay,Bottom of the Bay
```
{% endraw %}

## PIRATE.DOC

{% raw %}
```
                                 PIRATE ISLAND


                                      by


                                  David Meny



                              ** DOCUMENTATION **


        Well, young pirate! Thar she blows! Thars the old Mobby 'Ick. Your    
        great  - oh so great -  grandfather named 'er. Well, back to buisness. 
        You  'ust find thee  location by  longitude and latitude of the SPOOKY
        Pirate  Island,  explore it  and  bring back  the famed Spanish coin
        supposdely to be thar.

        Don't try to cross any of me' crew or else.   Especiall' don't try     
        to to cross me'. You bett'r find the coin before you come back to  me' 
        ship or else this' cutlass will be you' last wish!

        Now yous begin on me' ship 'The Eagle's Nest' and you must  locate     
        the islands' longitude and latitude from yous'  sources and  those  on 
        me' ship.

        When yous' reach the island - if yous' do -explore it for the coin     
        and then return its' back to me' ship.

        Have thar good time!


                        ** IMPORTANT COMMANDS **


                 Har are of few commands Is' know:


                    I or INVENTORY   -   Shows what ye are carryin'
                          GO NORTH   -   To move north
                          GO SOUTH   -   To move south
                           GO EAST   -   To move east
                           GO WEST   -   To move west
                             GO UP   -   To move up
                           GO DOWN   -   To move down
           (NOTE - GO NORTH can be abbrivated N, GO SOUTH to S, etc.)
                      GET (object)   -   To get a certain object
                     DROP (object)   -   To drop a certain object
                    CLIMB (object)   -   To climb a certain object
                             SWIM    -   To swim
                   UNLOCK (object)   -   To unlock and object
                     OPEN (object)   -   To open an object
                               plus many more...


                              ** AUTHOR'S NOTES**


        I hope you enjoy this program and if you do you might want to try
        my first adventure, Escape from Soviet Science and Detention Base
        available from PC-SIG.


                                                David Meny
                                                2923 Carmel Way
                                                Fairfield, CA 94533


        P.S.  -   If you like this adventure and would like to encourage me
                  to write more, send any amount of money (U.S. currency
                  please  -  I am only an honest programmer and don't travel
                  alot!) to me.


        Thanks!



```
{% endraw %}

## TEMPLE.BAS

{% raw %}
```bas
10 N=VAL(MID$(TIME$,7,2))
20 RANDOMIZE N
30 CLS:SCREEN 2:SCREEN 0:OUT &H3D0,8: OUT &H3D1,3:COLOR 3,0,1
40 FOR A=60 TO 20 STEP -1
50 COLOR 2,0,1:LOCATE 5,A:PRINT "   _______    ":NEXT
60 FOR A=1 TO 20:LOCATE 6,A:PRINT "  /";:COLOR 3,0,1:PRINT "■■■■■■■";:COLOR 2,0,1:PRINT "\   ":NEXT
70 FOR A=60 TO 20 STEP -1:LOCATE 7,A:PRINT " /";:COLOR 3,0,1:PRINT "■";:COLOR 15,0,1:PRINT "Fantasy";:COLOR 3,0,1:PRINT "■";:COLOR 2,0,1:PRINT "\  ":NEXT
80 FOR A=1 TO 20:LOCATE 8,A:PRINT " \";:COLOR 3,0,1:PRINT "■■";:COLOR 15,0,1:PRINT "Warez";:COLOR 3,0,1:PRINT "■■";:COLOR 2,0,1:PRINT "/  ":NEXT
90 FOR A=60 TO 20 STEP -1:LOCATE 9,A:PRINT "  \";:COLOR 3,0,1:PRINT "■■";:COLOR 15:PRINT "Inc";:COLOR 3:PRINT "■■";:COLOR 2,0,1:PRINT "/   ":NEXT
100 COLOR 2:FOR A=1 TO 20:LOCATE 10,A:PRINT "     \_/      "
110 NEXT
120 COLOR 12,0,1:FOR A=1 TO 8:LOCATE A,35:PRINT "Presents";:COLOR 31:PRINT ". . . .":COLOR 12:NEXT:COLOR 12
130 FOR A=1 TO 8:LOCATE A,35:PRINT  "                         "
140 NEXT
150 LOCATE 8,35:PRINT "Presents";:COLOR 31:PRINT ". . . ."
160 COLOR 15,0,1:PLAY"MST155O2L8A#A#O3L4CO2A#O3CL1DP5L10D"
170 LOCATE 5,20:PRINT "   ▄▄▄▄▄▄▄    "
180 LOCATE 6,20:PRINT "  █████████   "
190 LOCATE 7,20:PRINT " ██▓Smurfs██  "
200 LOCATE 8,20:PRINT " ███▓die▓███  "
210 LOCATE 9,20:PRINT "  ███▒▒▒███   "
220 LOCATE 10,20:PRINT "     █▒█      "
230 LOCATE 5,20:PRINT "              "
240 LOCATE 6,20:PRINT "              "
250 LOCATE 7,20:PRINT "              "
260 LOCATE 8,20:PRINT "              "
270 LOCATE 9,20:PRINT "              "
280 LOCATE 10,20:PRINT "              "
290 COLOR 12,0,1:LOCATE 8,35:PRINT "Presents";:COLOR 15:PRINT " . . .":COLOR 12
300 FOR A=35 TO 5 STEP-2:LOCATE 8,A:PRINT "Presents";:COLOR 31:PRINT " . . .":COLOR 12:NEXT
310 FOR A=70 TO 16 STEP-1:LOCATE 8,A:PRINT " ":NEXT
320 FOR A=8 TO 2 STEP -1:LOCATE A,5:PRINT "Presents";:COLOR 31,0,1:PRINT " . . .":LOCATE A,5:PRINT "                     "
330 COLOR 12:NEXT:COLOR 12
340 LOCATE 2,5:PRINT "Presents";:COLOR 31:PRINT " . . ."
350 COLOR 2:FOR A=1 TO 2:LOCATE 5,40:PRINT "-"
360 LOCATE 5,40:SOUND 32729,1:PRINT "\"
370 LOCATE 5,40:SOUND 32729,1:PRINT "│"
380 LOCATE 5,40:SOUND 32729,1:PRINT "/"
390 LOCATE 5,40:SOUND 32729,1:PRINT "-"
400 LOCATE 5,40:SOUND 32729,1:PRINT "\"
410 LOCATE 5,40:SOUND 32729,1:PRINT "│"
420 LOCATE 5,40:SOUND 32729,1:PRINT "/"
430 LOCATE 5,40:SOUND 32729,1:PRINT "-":NEXT :LOCATE 5,40:PRINT "A"
440 COLOR 1:PRINT "     ▄                     █     ▄    ▄              ▄▄                   "
450 PRINT "     █      ▄▄▄  ▄ ▄▄   ▄▄▄█     █▀▄  █ ▄   ▄ ▄ ▄▄   ▄▀ ▄   ▄  ▄▄▄   ▄▄▄ "
460 PRINT "     █     █   █ █▀  ▀ █   █     █  ▀▄█ █   █ █▀  ▀     █   █ █   ▀ █   ▀":PRINT "     █▄▄▄▄ ▀▄▄▄▀ █     ▀▄▄▄▀     █    █ ▀▄▄▄▀ █         ▀▄▄▄▀ ▀▄▄▄▀ ▀▄▄▄▀"
470 PRINT:PRINT :PRINT
480 COLOR 2:PRINT "                  -----------";:COLOR 3:PRINT "Great Empire of Melnibone";:COLOR 2:PRINT "----------"
490 COLOR 14:PRINT "                                                _"
500 PRINT "                                           ";:COLOR 1:PRINT "_____";:COLOR 14:PRINT " []\"
510 COLOR 7:PRINT "                       < < < < < < < < < < ";:COLOR 1:PRINT "_____";:COLOR 15:PRINT "[";:COLOR 12:PRINT ":*";:COLOR 15:PRINT "]";:COLOR 6:PRINT "######";:COLOR 14:PRINT "[";:COLOR 2:PRINT ">":COLOR 14
520 PRINT "                                  _             _[]/"
530 PRINT "                               /[] ";:COLOR 1:PRINT "_____"
540 COLOR 2:PRINT "                       <";:COLOR 14:PRINT "]";:COLOR 6:PRINT "######";:COLOR 15:PRINT "[";:COLOR 12:PRINT "*:";:COLOR 15:PRINT "]";:COLOR 9:PRINT "_____";:COLOR 7:PRINT "> > > > > > > > > > "
550 COLOR 14:PRINT "                               \[]_
560 PRINT "                                                                "
570 COLOR 2:PRINT "                  -----";:COLOR 11,0,1:PRINT "Call  the Dark Bay at (415) 490-3179";:COLOR 2:PRINT "-----"
580 'LOCATE 21,1:PRINT :PRINT :PRINT "Fantasy Warez Inc. is a fictionous name for all legal purposes. This progarm is                              publis domain software."
590 FOR A= 1 TO 20:LOCATE 11,33:COLOR 15:PRINT "> >";:COLOR 3:PRINT " Creation ";:COLOR 15:PRINT "< <"
600 LOCATE 16,1:COLOR 7:PRINT "                        < < < < < < < < < <"
610 LOCATE 16,1:COLOR 7:PRINT "                       < < < < < < < < < < "
620 LOCATE 19,41:COLOR 7:PRINT "> > > > > > > > > >"
630 LOCATE 19,41:COLOR 7:PRINT " > > > > > > > > > > "
640 LOCATE 11,33:COLOR 15:PRINT " > ":LOCATE 11,46:PRINT " < ":NEXT
650 GOTO 1000
660 KEY OFF
670 'N=VAL (MID$(TIME$,7,2))
680 'RANDOMIZE N
690 INPUT "Do you want graphics (Y/N)";ANS$
700 IF ANS$ = "y" GOTO 740
710 IF ANS$ = "Y" GOTO 740
720 IF ANS$="ARIOCH" GOTO 1400
730 GOTO 1020
740 SCREEN 1:CLS
750  CIRCLE (20,20),20
760 PAINT (30,30),2,3
770 CIRCLE (240,30),15
780 PAINT (240,30),1,3
790 PSET (60,125)
800 DRAW"e100;f100;l199"
810 LINE (360,125)-(0,360),,BF
820 PAINT (100,100),3
830 LINE (360,125)-(0,360),1,BF
840 LOCATE 16,19
850 PRINT "   "
860 FOR J = 1 TO 200
870 I=(RND*360)
880 F=(RND*120)
890 FOR R=1 TO 0 STEP -1
900 CIRCLE (I,F),R,3
910 NEXT
920 NEXT
930 LOCATE 22,11
940 PRINT "Congradulations!!!"
950 LOCATE 22,11
960 BEEP
970 FOR X = 200 TO 0 STEP -4
980 CIRCLE (160,100),X,,,,1
990 SCREEN 2:SCREEN 0:GOTO 10540
1000 SCREEN 2
1010 SCREEN 0
1020 CLS
1030 PRINT : COLOR 14,0,1
1040 FOR A=1 TO 18:LOCATE A,1:PRINT"                               by Lord Nurúcc":LOCATE A,1:PRINT "                                                  ":NEXT:LOCATE 18,1:PRINT "                               by Lord Nurúcc"
1050 COLOR 12:LOCATE 2,1:PRINT"            ▄▄▄▄▄ ▄▄▄▄ ▄   ▄ ▄▄▄▄  ▄    ▄▄▄▄           ▄▄▄   ▄▄▄▄
1060 PRINT"              █   █    ██ ██ █   █ █    █             █   █  █
1070 PRINT"              █   █▀▀  █ █ █ █▀▀▀  █    █▀▀           █   █  █▀▀
1080 PRINT"              █   █▄▄▄ █   █ █     █▄▄▄ █▄▄▄          ▀▄▄▄▀  █
1090 PRINT:
1100 PRINT
1110 PRINT"                  ▄     ▄▄▄  ▄▄▄▄▄  ▄  ▄            ▄▄▄▄▄▄
1120 PRINT"                  █    █   █   █    █  █          ▄▀ █  █ ▀▄
1130 PRINT"                  █    █   █   █    █▀▀█        ▄▀   █  █   ▀▄
1140 PRINT"                  █▄▄▄ ▀▄▄▄▀   █    █  █      ▄█▄▄▄▄▄█▄▄█▄▄▄▄▄█▄
1150 PRINT:COLOR 15,0,1
1160 FOR A=1 TO 32:LOCATE 13,A:PRINT"  VERSION 4.13":NEXT :FOR A=1 TO 33:LOCATE 13,A:PRINT " ":NEXT:COLOR 31:LOCATE 13,30:PRINT "    VERSION 4.13  "
1170 COLOR 3,0,1:PRINT "                              November 11, 1984
1180 COLOR 3,0,1:PRINT"              Suggested for use with printer and graphics board
1190 PRINT"
1200 PRINT "                           A Fantasy Warez Program"
1210 COLOR 14:PRINT"                               by Lord Nurúcc"
1220 'PRINT"                            (Nurúcc the Chaotic)
1230 PRINT:COLOR 10,0,1
1240 PRINT"                       of the Great Empire of Melnibone'":COLOR 3,0,1
1250 SOU=INT(RND*2+1)
1260 ON SOU GOTO 1270,1290
1270 PLAY"O1MFT155L2DL4EL2FDL1GG#"
1280 GOTO 1340
1290 FOR QWER= 220 TO 196 STEP-1
1300 SOUND QWER,1
1310 NEXT
1320 PLAY"O1MLT155L2GP10EP10L1F#"
1330 GOTO 1340
1340 PRINT
1350 PRINT "     Make sure that all commands are done in capitals.  For help type `H'.
1360 INPUT "                      Do you want instructions (Y/N)";ANS$
1370 IF ANS$="Y" GOTO 12600
1380 IF ANS$="y" GOTO 12600
1390 IF ANS$="ARIOCH" THEN MN=1
1400 REM
1410 REM    ****************************************************
1420 REM    *  WRITTEN BY JOHN BELEW FOR USE WITH THE I.B.M.   *
1430 REM    *            AND OTHER COMPATIBLE                  *
1440 REM    *        THANKS TO TSR FOR THE MONSTERS            *
1450 REM    * THANKS TO RECREATIONAL COMPUTING FOR THE ORIGINAL*
1460 REM    * PROGRAM          JUNE 29, 1984                   *
1470 REM    ****************************************************
1480 DEFINT A-Z
1490 DIM C$(34),I$(34),R$(4),W$(8),E$(8)
1500 DIM L(512),C(3,4),T(8),O(3),R(3)
1510 DEF FNA(Q)=1+INT(RND(1)*Q)
1520 DEF FNB(Q)=Q+8*((Q=9)-(Q=0))
1530 DEF FNC(Q)=-Q*(Q<19)-18*(Q>18)
1540 DEF FND(Q)=64*(Q-1)+8*(X-1)+Y
1550 DEF FNE(Q)=Q+100*(Q>99)
1560 COLOR 11,0,15:Y$="** Please answer yes or no":COLOR 3,0,1
1570 NG=0
1580 REM
1590 REM   INITIALIZE ARRAYS
1600 REM
1610 NG=NG+1
1620 Q=RND(1)
1630 RESTORE
1640 FOR Q=1 TO 34
1650 READ C$(Q),I$(Q)
1660 NEXT Q
1670 FOR Q=1 TO 512
1680 L(Q)=101
1690 NEXT Q
1700 FOR Q=1 TO 8
1710 READ W$(Q),E$(Q)
1720 NEXT Q
1730 FOR Q=1 TO 4
1740 READ R$(Q)
1750 NEXT Q
1760 IF NG > 1 GOTO 2080
1770 CLS
1780 PRINT "       ╔═════════════════════════════════════════════════════════════════╗"
1790 PRINT "       ╠═════════════════╣";:COLOR 27,0,1:PRINT "* * * THE TEMPLE OF LOTH * * *";:COLOR 3,0,1:PRINT "╠════════════════╣"
1800 PRINT "       ╠═════════════════════════════════════════════════════════════════╣"
1810 'PRINT  ║                                                                 ║
1820 PRINT "       ║                                                                 ║
1830 'GOSUB 9060
1840 PRINT "       ║      Many generations ago, during the great Elfin Wars  of the  ║
1850 PRINT "       ║   first age, there stood the majestic temple of the Drow.  The  ║
1860 PRINT "       ║   Drow are an evil race of elves dedicated to the  destruction  ║
1870 PRINT "       ║   of all elves but themselves. During this time they were rul-  ║
1880 PRINT "       ║   ed by the the evil priestess,Tar-Anclime, a great sorceress.  ║
1890 PRINT "       ║   Under the aid of her goddess Loth, she created ";:COLOR 11,0,1:PRINT"the Amulet of";:COLOR 3,0,1:PRINT"  ║"
1900 PRINT "       ║";:COLOR 11,0,1:PRINT"   Chaos";:COLOR 3,0,1:PRINT" which was to be used to aid her side in the final des-  ║
1910 PRINT "       ║   truction of their rivals. The Drow massed for The final con-  ║
1920 PRINT "       ║   flict but they were attacked by their rival forces and there  ║
1930 PRINT "       ║   they were utterly destroyed. Now thousands of years later it  ║
1940 PRINT "       ║   is said that in the  kingdom of Rhyl that the descendents of  ║
1950 PRINT "       ║   the Drow are massing. The Drow plan to return to claim their  ║
1960 PRINT "       ║   homeland to retrieve ";:COLOR 11,0,1:PRINT "the Amulet of Chaos";:COLOR 3,0,1:PRINT" so they can finally  ║
1970 PRINT "       ║   destroy the elves of good. Living in the village shadowed by  ║
1980 PRINT "       ║   now crumbling  temple, you have been  chosen to retrieve the  ║
1990 PRINT "       ║   Amulet  before the Drow  return so that it can be destroyed.  ║
2000 PRINT "       ║   There are many  dangers that live in the  mazes of the ruins  ║
2010 PRINT "       ║   such as powerful  and  magic  monsters.  It is even believed  ║
2020 PRINT "       ║   that the some Drow still live in ruins.";:COLOR 28,0,1:PRINT" BEWARE!!!";:COLOR 3,0,1:PRINT"             ║
2030 PRINT "       ║                                                                 ║
2040 PRINT "       ╠═════════════════════════════════════════════════════════════════╣"
2050 PRINT "       ╠═════════════════════════════════════════════════════════════════╣"
2060 SOUND 32729,600
2070 'PRINT "Wait one moment please while I stock the temple..."
2080 X=1 : Y=4
2090 L(FND(1))=2
2100 FOR Z=1 TO 7
2110 FOR Q1=1 TO 2
2120 Q=104
2130 GOSUB 11350
2140 L(FND(Z+1))=103
2150 NEXT Q1
2160 NEXT Z
2170 FOR Z=1 TO 8
2180 FOR Q=113 TO 124
2190 GOSUB 11350
2200 NEXT Q
2210 FOR Q1=1 TO 3
2220 FOR Q=105 TO 112
2230 GOSUB 11350
2240 NEXT Q
2250 Q=125
2260 GOSUB 11350
2270 NEXT Q1
2280 NEXT Z
2290 FOR Q=126 TO 133
2300 Z=FNA(8)
2310 GOSUB 11350
2320 NEXT Q
2330 Q=101
2340 FOR A=1 TO 3
2350 Z=FNA(8)
2360 GOSUB 11350
2370 C(A,1)=X
2380 C(A,3)=Z
2390 C(A,2)=Y
2400 C(A,4)=0
2410 NEXT A
2420 RC=0
2430 ST=2
2440 DX=8
2450 R$(3)="Man"
2460 Q=112+FNA(12)
2470 Z=FNA(8)
2480 GOSUB 11350
2490 R(1)=X
2500 R(2)=Y
2510 R(3)=Z
2520 Q=109
2530 Z=FNA(8)
2540 GOSUB 11350
2550 O(1)=X
2560 O(2)=Y
2570 O(3)=Z
2580 BF=0 : OT=8 : AV=0 : HT=0 : T=1 : VF=0 : LF=0
2590 TC=0 : GP!=60 : RF=0 : OF=0 : BL=0 : IQ=8 : SX=0
2600 FOR Q=1 TO 8
2610 T(Q)=0
2620 NEXT Q
2630 PRINT CHR$(7);
2640 CLS
2650 'PRINT:KEY ON:KEY 1,"Elf     "+CHR$(13):KEY 2,"Man      "+CHR$(13):KEY 3,"Dwarf     "+CHR$(13):KEY 4,"Hobbit  "+CHR$(13):KEY 5,"Male    "+CHR$(13):KEY 6,"Female    "+CHR$(13):KEY 7,"":KEY 8,"":KEY 9,"":KEY 10,""
2660 PRINT
2670 COLOR 11,0,1:PRINT "  You are in large room blinded by a very bright light.  All of the sudden you "
2680 PRINT "hear a booming voice which says, `You have been chosen bold one to be a valiant"
2690 PRINT "and brave  warrior of any race you desire.  You can choose to be an Elf, a Man,"
2700 PRINT "a Dwarf or a Hobbit.' Remember though, you only have 500 turns.":COLOR 3,0,1
2710 COLOR 3,0,1
2720 GOSUB 11590
2730 FOR Q=1 TO 4
2740 STR = INT(RND*10+2)
2750 DEX = INT(RND*10+2)
2760 IF LEFT$(R$(Q),1)=O$ THEN RC=Q : ST=STR*Q : DX=DEX*Q
2770 IF ST > 18 THEN ST=18
2780 IF DX > 18 THEN DX =18
2790 NEXT Q
2800 PRINT
2810 OT=OT+4*(RC=1)
2820 IF RC > 0 THEN R$(3)="Human" : GOTO 2850
2830 COLOR 11,0,15:PRINT "** That was incorrect. Please type E, D, M, OR H.":COLOR 3,0,1
2840 GOTO 2720
2850 PRINT "Which sex do you prefer";
2860 GOSUB 11610
2870 IF O$="M" THEN SX=1 : GOTO 2910
2880 IF O$="F" GOTO 2910
2890 COLOR 11,0,15:PRINT "** Cute ";R$(RC);", Real cute. Try M OR F.":COLOR 3,0,1
2900 GOTO 2850
2910 PRINT
2920 PRINT "OK, ";R$(RC);", you have the following attributes :"
2930 PRINT "Strength =";ST
2940 PRINT "Intelligence =";IQ
2950 PRINT "Dexterity =";DX
2960 PRINT "and";OT;"other points you allocate as you wish."
2970 PRINT
2980 Z$="Strength"
2990 GOSUB 11640
3000 ST=ST+Q
3010 IF OT=0 GOTO 3100
3020 Z$="Intelligence"
3030 GOSUB 11640
3040 IQ=IQ+Q
3050 IF OT=0 GOTO 3100
3060 Z$="Dexterity"
3070 GOSUB 11640
3080 DX=DX+Q
3090 'KEY 1,"Plate   "+CHR$(13):KEY 2,"Chain   "+CHR$(13):KEY 3,"Leather   "+CHR$(13):KEY 4,"Sword   "+CHR$(13):KEY 5,"Mace    "+CHR$(13):KEY 6,"Dagger    "+CHR$(13):KEY 7,"Nothing "+CHR$(13):KEY 8,"No      "+CHR$(13):KEY 9,"Yes       "+CHR$(13)
3100 PRINT "OK, ";R$(RC);", you find your self at a bazaar in a small village built in the "
3110 PRINT "shadow of a large and crumbling castle.  You have nothing save the clothes on "
3120 PRINT "your back and a purse containing 60gp's to buy your equipments with."
3130 Z$="Armor"
3140 GOSUB 11890
3150 AV=0 : WV=0 : FL=0 : WC=0
3160 PRINT "Plate Mail:30gp's Chainmail:20gp's Leather:10gp's Nothing:-
3170 GOSUB 11590
3180 IF O$="N" GOTO 3240
3190 AV=-3*(O$="P")-2*(O$="C")-(O$="L")
3200 IF AV > 0 GOTO 3240
3210 PRINT
3220 COLOR 11,0,15:PRINT "** Are you a ";R$(RC);" or ";C$(FNA(12)+12);"?":COLOR 3,0,1
3230 GOTO 3130
3240 AH=AV*7 : GP!=GP!-AV*10
3250 PRINT
3260 PRINT "OK, bold ";R$(RC);", you have";GP!;"gp's left."
3270 PRINT
3280 Z$="Weapons"
3290 GOSUB 11890
3300 PRINT "Sword:30gp's Mace:20gp's Dagger:10gp's Nothing:-"
3310 GOSUB 11590
3320 IF O$="N" GOTO 3380
3330 WV=-3*(O$="S")-2*(O$="M")-(O$="D")
3340 IF WV > 0 GOTO 3380
3350 PRINT 
3360 COLOR 11,0,15:PRINT "** Is your IQ really";IQ;"?":COLOR 3,0,1
3370 GOTO 3280
3380 GP!=GP!-WV*10
3390 IF GP! < 20 GOTO 3450
3400 PRINT
3410 PRINT "Do you want to buy a lamp for 20gp's";
3420 GOSUB 11610
3430 IF O$="Y" THEN LF=1 : GP!=GP!-20 : GOTO 3450
3440 IF O$ <> "N" THEN PRINT : PRINT Y$ : PRINT : GOTO 3410
3450 PRINT
3460 IF GP! < 1 THEN Q=0 : GOTO 3570
3470 PRINT "OK, ";R$(RC);", you have";GP!;"gold pieces left."
3480 PRINT
3490 INPUT "Flares give off light which allows you to see all the rooms around you.  At a   cost of 1gp each how many do you want to buy?";O$
3500 Q=VAL(O$)
3510 PRINT
3520 IF Q > 0 OR ASC(O$)=48 GOTO 3560
3530 COLOR 11,0,15:PRINT "** If you don't want any, just type 0.":COLOR 3,0,1
3540 PRINT
3550 GOTO 3490
3560 COLOR 11,0,15:IF Q > GP! THEN PRINT "** You can only afford";GP!;"." :COLOR 3,0,1: PRINT : GOTO 3490
3570 FL=FL+Q : GP!=GP!-Q
3580 X=1 : Y=4 : Z=1
3590 COLOR 27,0,15:PRINT "OK, ";R$(RC);", You are now entering the castle!":COLOR 3,0,1:
3600 GOTO 7090
3610 REM
3620 REM   MAIN PROCESSING LOOP
3630 REM
3640 T=T+1
3650 IF RF+OF > 0 GOTO 3780
3660 IF C(1,4) > T(1) THEN T=T+1
3670 IF C(2,4) > T(3) THEN GP!=GP!-FNA(5)
3680 IF GP! < 0 THEN GP!=0
3690 IF C(3,4) <= T(5) GOTO 3780
3700 A=X : B=Y : C=Z
3710 X=FNA(8) : Y=FNA(8) : Z=FNA(8)
3720 L(FND(Z))=FNE(L(FND(Z)))+100
3730 X=A : Y=B : Z=C
3740 IF L(FND(Z)) <> 1 GOTO 3780
3750 FOR Q=1 TO 3
3760 C(Q,4)=-(C(Q,1)=X)*(C(Q,2)=Y)*(C(Q,3)=Z)
3770 NEXT Q
3780 IF FNA(5) > 1 GOTO 4280
3790 PRINT
3800 PRINT "You ";
3810 Q=FNA(7)+BL
3820 IF Q > 7 THEN Q=4
3830 ON Q GOSUB 4130,3870,4110,3850,4150,4180,4200
3840 GOTO 4280
3850 PRINT "stepped on dragon @#*%!"
3860 RETURN
3870 PRINT "hear ";
3880 ON FNA(4) GOTO 3890,3950,4030,4060
3890 PRINT "a scream!"
3900 FOR I=2075 TO 1800 STEP-1
3910 SOUND I,0.1
3920 NEXT
3930 SOUND 32729,1
3940 RETURN
3950 PRINT "footsteps!"
3960 'FOR I=1 TO 5
3970 FOR J=40 TO 37 STEP-1
3980 SOUND J,1
3990 SOUND 32729,10
4000 'NEXT
4010 NEXT
4020 RETURN
4030 PRINT "a Wumpus!"
4040 PLAY "O0MST255L4AGP5AGP5AGP5AG
4050 RETURN
4060 PRINT "groans!"
4070 FOR I = 300 TO 37 STEP-1
4080 SOUND I,0.1
4090 NEXT
4100 RETURN
4110 PRINT "sneezed!"
4120 RETURN
4130 PRINT "see a bat fly by!"
4140 RETURN
4150 PRINT "hear a ";C$(12+FNA(13));" growling!"
4160 GOTO 4070
4170 RETURN
4180 PRINT "feel like you're being watched!"
4190 RETURN
4200 PRINT "hear faint rustling noises!"
4210 FOR Q=1 TO 200
4220 A = INT(RND*50+37)
4230 SOUND A,0.001
4240 'SOUND 32729,1
4250 NEXT
4260 SOUND 32729,1
4270 RETURN
4280 IF BL+T(4) <> 2 GOTO 4320
4290 PRINT
4300 PRINT C$(29);" cures your blindness!"
4310 BL=0
4320 IF BF+T(6) <> 2 GOTO 4360
4330 PRINT
4340 PRINT C$(31);" dissolves the book!"
4350 BF=0
4360 PRINT
4370 PRINT
4380 LOCATE 23,1:COLOR 3,0,1:PRINT "Enter your command:
4390 FOR ASD= 1 TO 2
4400 LOCATE 23,20:PRINT "-":SOUND 32767,1
4410 LOCATE 23,20:PRINT "\":SOUND 32767,1
4420 LOCATE 23,20:PRINT "│":SOUND 32767,1
4430 LOCATE 23,20:PRINT "/":SOUND 32767,1
4440 LOCATE 23,20:PRINT "-":SOUND 32767,1
4450 LOCATE 23,20:PRINT "\":SOUND 32767,1
4460 LOCATE 23,20:PRINT "│":SOUND 32767,1
4470 LOCATE 23,20:PRINT "/":SOUND 32767,1
4480 LOCATE 23,20:PRINT "-";:SOUND 32767,1
4490 'LINE INPUT O$
4500 NEXT
4510 LINE INPUT O$
4520 IF LEFT$(O$,2)="DR" GOTO 5900
4530 O$=LEFT$(O$,1)
4540 IF O$="N" GOTO 5020
4550 IF (O$="S") OR (O$="W") OR (O$="E") GOTO 5030
4560 IF O$="U" GOTO 5080
4570 IF O$="D" GOTO 5110
4580 IF O$="▐" GOTO 11090
4590 IF O$="M" GOTO 5160
4600 IF O$="F" THEN ON BL+1 GOTO 5400,5160
4610 IF O$="L" THEN ON BL+1 GOTO 5660,5160
4620 IF O$="O" GOTO 6090
4630 IF O$="Q" GOTO 6960
4640 IF O$="G" THEN ON BL+1 GOTO 6550,5160
4650 IF O$="T" THEN PRINT : ON RF+1 GOTO 6810,6850
4660 IF O$="#" GOTO 11950
4670 IF O$ ="H" GOTO 4690
4680 GOTO 5000
4690 INPUT "Do you want a hard copy (Y/N)";HARD$
4700 IF HARD$ = "Y"  GOTO 12000
4710 PRINT"╔══════════════════════════════════════════════════════════════╗
4720 PRINT"║";:COLOR 27,0,1:PRINT "   *** TEMPLE OF LOTH'S COMMAND AND INFORMATION SUMMARY ***";:COLOR 3,0,1:PRINT "   ║
4730  PRINT "╠══════════════════════════════════════════════════════════════╣"
4740  PRINT "║ The following commands available are:                        ║"
4750  PRINT "║                                                              ║"
4760  PRINT "║ H/elp     N/orth    S/outh    E/ast     W/est     U/p        ║"
4770  PRINT "║ D/own     DR/ink    M/ap      F/lare    L/amp     O/pen      ║"
4780  PRINT "║ G/aze     T/eleport Q/uit     #/Score                        ║"
4790  PRINT "╠══════════════════════════════════════════════════════════════╣"
4800  PRINT "║ The contents of the rooms are as follows:                    ║"
4810  PRINT "║                                                              ║"
4820  PRINT "║ ╬ = empty room      B = book            C = chest            ║"
4830  PRINT "║ D = stairs down     ∩ = entrance/exit   ƒ = flares           ║"
4840  PRINT "║ G = gold pieces     ¥ = monster         Φ = crystal orb      ║"
4850  PRINT "║ P = magic pool      S = sinkhole        T = treasure         ║"
4860  PRINT "║ U = stairs up       * = Drow            █ = warp/amulet      ║"
4870  PRINT "╠══════════════════════════════════════════════════════════════╣"
4880  PRINT "║ The benefits of having treasures are:                        ║"
4890  PRINT "║                                                              ║"
4900  PRINT "║ RUBY RED - avoid lethargy    PALE PEARL - avoid leech        ║"
4910  PRINT "║ GREEN GEM - avoid forgetting  OPAL EYE - cure blindness      ║"
4920  PRINT "║ BLUE FLAME - dissolves books  NORN STONE - no benefit        ║"
4930  PRINT "║ PALANTIR - no benefit         SILMARIL - no benefit          ║"
4940  PRINT "╠══════════════════════════════════════════════════════════════╣"
4950 PRINT
4960 PRINT "Press return when ready to resume, ";R$(RC);".";
4970 LINE INPUT "";O$
4980 GOTO 3640
4990 PRINT
5000 COLOR 11,0,15:PRINT "** Bold ";R$(RC);", that wasn't a valid command!":COLOR 3,0,1
5010 GOTO 3640
5020 IF L(FND(Z))=2 GOTO 10460
5030 X=X+(O$="N")-(O$="S")
5040 Y=Y+(O$="W")-(O$="E")
5050 X=FNB(X)
5060 Y=FNB(Y)
5070 GOTO 7090
5080 IF L(FND(Z))=3 THEN Z=Z-1 : GOTO 7090
5090 Z$="Up"
5100 GOTO 5130
5110 Z$="Down"
5120 IF L(FND(Z))=4 THEN Z=Z+1 : GOTO 7090
5130 PRINT
5140 COLOR 11,0,15:PRINT "** There are no stairs going ";Z$;" from here!":COLOR 3,0,1
5150 GOTO 3640
5160 IF BL <> 1 GOTO 5240
5170 PRINT
5180 COLOR 11,0,15:PRINT "** You can't see anything ";R$(RC);"!":COLOR 3,0,1
5190 GOTO 3640
5200 REM
5210 REM   DISPLAY MAP OF CURRENT CASTLE LEVEL
5220 REM
5230 COLOR 6,0,1
5240 PRINT
5250 A=X : B=Y
5260 FOR X=1 TO 8
5270 FOR Y=1 TO 8
5280 Q=L(FND(Z))
5290 IF Q > 99 THEN Q=Q-100:LET Q=34:REM TO HIDE ROOMS
5300 COLOR 6,0,1:IF X=A AND Y=B THEN PRINT "<";I$(Q);">  "; : GOTO 5320:COLOR 3,0,1
5310 COLOR 6,0,1:PRINT " ";I$(Q);"   ";:COLOR 3,0,1
5320 NEXT Y
5330 COLOR 3,0,1:PRINT
5340 PRINT
5350 NEXT X
5360 X=A : Y=B
5370 GOTO 5610
5380 COLOR 12,0,1:PRINT ") level";Z:COLOR 3,0,1
5390 GOTO 3640
5400 IF FL <> 0 GOTO 5460
5410 COLOR 11,0,15:PRINT "** You can't, your out of flares!":COLOR 3,0,1
5420 GOTO 3640
5430 REM
5440 REM   DISPLAY ADJACENT ROOM CONTENTS WITH FLARE
5450 REM
5460 PRINT
5470 FL=FL-1
5480 A=X : B=Y
5490 FOR Q1=A-1 TO A+1
5500 X=FNB(Q1)
5510 FOR Q2=B-1 TO B+1
5520 Y=FNB(Q2)
5530 Q=FNE(L(FND(Z)))
5540 L(FND(Z))=Q
5550 COLOR 12,0,1:PRINT " ";I$(Q);"   ";:COLOR 3,0,1
5560 NEXT Q2
5570 PRINT
5580 PRINT
5590 NEXT Q1
5600 X=A : Y=B
5610 GOSUB 11920
5620 GOTO 3640
5630 REM
5640 REM   DISPLAY CONTENTS OF ADJACENT ROOM WITH LAMP
5650 REM
5660 IF LF <> 0 GOTO 5700
5670 PRINT
5680 COLOR 11,0,15:PRINT "** You don't have a lamp, ";R$(RC);"!":COLOR 3,0,1
5690 GOTO 3640
5700 PRINT
5710 PRINT "Where do you want to shine the lamp (N,S,E,W)";
5720 GOSUB 11610
5730 A=X : B=Y
5740 X=FNB(X+(O$="N")-(O$="S"))
5750 Y=FNB(Y+(O$="W")-(O$="E"))
5760 IF A-X+B-Y <> 0 GOTO 5800
5770 PRINT
5780 COLOR 11,0,15:PRINT "** That's not a direction ";R$(RC);"!":COLOR 3,0,1
5790 GOTO 3640
5800 PRINT
5810 PRINT "The lamp shines into (";X;",";Y;") level";Z;"."
5820 PRINT
5830 L(FND(Z))=FNE(L(FND(Z)))
5840 PRINT "There you will find ";C$(L(FND(Z)));"."
5850 X=A : Y=B
5860 GOTO 3640
5870 REM
5880 REM   TAKE A DRINK FROM A POOL
5890 REM
5900 IF L(FND(Z))=5 GOTO 5940
5910 PRINT
5920 COLOR 11,0,15:PRINT "** There is no pool to drink from here!":COLOR 3,0,1
5930 GOTO 3640
5940 Q=FNA(8)
5950 PRINT
5960 PRINT "You take a drink and ";
5970 IF Q < 7 THEN PRINT "feel ";
5980 ON Q GOTO 5990,6000,6010,6020,6030,6040,6050,6070
5990 ST=FNC(ST+FNA(3)) : PRINT "stronger." : GOTO 3640
6000 ST=ST-FNA(3) :COLOR 15,0,1: PRINT "weaker.":COLOR 7,0,1 : ON (1-(ST<1)) GOTO 3640,10340
6010 IQ=FNC(IQ+FNA(3)) : PRINT "smarter." : GOTO 3640
6020 IQ=IQ-FNA(3) :COLOR 15,0,1:PRINT "dumber.":COLOR 3,0,1: ON (1-(IQ<1)) GOTO 3640,10340
6030 DX=FNC(DX+FNA(3)) : PRINT "faster." : GOTO 3640
6040 DX=DX-FNA(3) :COLOR 15,0,1: PRINT "clumsier." :COLOR 3,0,1: ON (1-(DX<1)) GOTO 3640,10340
6050 Q=FNA(4) : IF Q=RC GOTO 6050
6060 RC=Q : PRINT "become a ";R$(RC);"." : GOTO 3640
6070 SX=1-SX : PRINT "turn into a "; : IF SX=0 THEN PRINT "fe";
6080 PRINT "male ";R$(RC);"!" : GOTO 3640
6090 IF L(FND(Z)) <> 6 GOTO 6130
6100 PRINT
6110 PRINT "You open the chest and"
6120 GOTO 6390
6130 IF L(FND(Z)) <> 12 GOTO 6170
6140 PRINT
6150 PRINT "You open the book and"
6160 GOTO 6200
6170 PRINT
6180 COLOR 11,0,15:PRINT "** there is nothing to open here.":COLOR 3,0,1
6190 GOTO 3640
6200 ON FNA(6) GOTO 6210,6240,6260,6280,6310,6340
6210 COLOR 0,15,15:CLS:PRINT "Flash! Oh no! you are now a blind ";R$(RC);"!"
6220 BL=1
6230 GOTO 6370
6240 PRINT "It's another volume of Nurúcc's poetry! - YECH!!"
6250 GOTO 6370
6260 PRINT "It's an old copy of Play";R$(FNA(4));"!"
6270 GOTO 6370
6280 PRINT "It's a manual of dexterity!"
6290 DX=18
6300 GOTO 6370
6310 PRINT "It's a manual of strength!"
6320 ST=18
6330 GOTO 6370
6340 COLOR 11,0,15:PRINT"The book sticks to your hands -"
6350 PRINT "now you are unable to draw your weapon!":COLOR 3,0,1
6360 BF=1
6370 L(FND(Z))=1
6380 GOTO 3640
6390 ON FNA(4) GOTO 6400,6450,6490,6450
6400 PRINT
6410 COLOR 14,0,15:PRINT "KABOOM!";:COLOR 3,0,1:PRINT " it explodes!!"
6420 Q=FNA(6)
6430 GOSUB 10240
6440 ON (1-(ST<1)) GOTO 6370,10340
6450 Q=FNA(1000)
6460 PRINT "find";Q;"gold pieces!"
6470 GP!=GP!+Q
6480 GOTO 6370
6490 PRINT
6500 COLOR 5,0,15:PRINT "GAS!!";:COLOR 3,0,1:PRINT "you stagger from the room!"
6510 L(FND(Z))=1
6520 T=T+20
6530 O$=MID$("NSEW",FNA(4),1)
6540 GOTO 5030
6550 IF L(FND(Z))=11 GOTO 6590
6560 PRINT
6570 COLOR 11,0,15:PRINT "**You need an orb to use the gaze command!":COLOR 3,0,1
6580 GOTO 3640
6590 PRINT
6600 PRINT "You see ";
6610 ON FNA(6) GOTO 6620,6640,6660,6680,6750,6790
6620 PRINT "Yourself in a bloody mess!"
6630 ST=ST-FNA(2) : ON (1-(ST<1)) GOTO 3640,10340
6640 PRINT "Yourself drinking from a pool and becoming ";C$(12+FNA(13));"!"
6650 GOTO 3640
6660 PRINT C$(12+FNA(13));" gazing back at you!"
6670 GOTO 3640
6680 A=X : B=Y : C=Z
6690 X=FNA(8) : Y=FNA(8) : Z=FNA(8)
6700 Q=FNE(L(FND(Z)))
6710 L(FND(Z))=Q
6720 PRINT C$(Q);" at (";X;",";Y;") level";Z;"."
6730 X=A : Y=B : Z=C
6740 GOTO 3640
6750 A=FNA(8) : B=FNA(8) : C=FNA(8)
6760 IF FNA(8) < 4 THEN A=O(1) : B=O(2) : C=O(3)
6770 BEEP:COLOR 12,0,15:PRINT "The Amulet of Chaos at (";A;",";B;") level";C;"!":COLOR 3,0,1
6780 GOTO 3640
6790 PRINT "a soap opera rerun!"
6800 GOTO 3640
6810 IF RF <> 0 GOTO 6850
6820 PRINT
6830 COLOR 11,0,15:PRINT "** You can't teleport without the Runestaff!":COLOR 3,0,1
6840 GOTO 3640
6850 Z$="X-Coordinate"
6860 GOSUB 11750
6870 X=Q
6880 Z$="Y-Coordinate"
6890 GOSUB 11750
6900 Y=Q
6910 Z$="Z-Coordinate"
6920 GOSUB 11750
6930 Z=Q
6940 O$="T"
6950 GOTO 7090
6960 PRINT
6970 PRINT "Do you really want to quit now?";
6980 GOSUB 11610
6990 PRINT
7000 IF O$="Y" GOTO 7030
7010 COLOR 11,0,15:PRINT "** Then don't say that you do!":COLOR 3,0,1
7020 GOTO 3640
7030 PRINT
7040 GOTO 10630
7050 REM
7060 REM   DISPLAY STATUS INFORMATION
7070 REM
7080 CLS
7090 KEY OFF:COLOR 3,0,1:PRINT
7100 IF BL=0 THEN GOSUB 11920 : PRINT
7110 LOCATE 24,1:COLOR 3,0,1
7120 PRINT "Strength =";ST;" Intelligence =";IQ;" Dexterity =";DX
7130 PRINT "Treasures =";TC;" Flares =";FL;" Gold Pieces =";GP!
7140 PRINT "Turns =";T;"  Weapon = ";W$(WV+1);"  Armor = ";W$(AV+5);
7150 IF LF=1 THEN PRINT "  and a lamp"
7160 IF LF=0 THEN PRINT "   "
7170 JOHN!=IQ*100+ST*100+DX*100+KM!+FTRS+REQ+GP!-T*5
7180 ' IF JOHN! > 30000 THEN JOHN!=30000
7190 ' IF GP! > 30000 THEN GP!=30000
7200 PRINT"Score =";JOHN!;:COLOR 3,0,1:
7210 PRINT "  Status = ";
7220 EQUZ=0
7230 IF BL = 1 THEN PRINT "-Blinded":EQUZ=1
7240 IF BF = 1 THEN PRINT "-Unable to draw weapon":EQUZ=1
7250 IF EQUZ=0 THEN PRINT "-Normal"
7260 COLOR 3,0,1
7270 '60:PRINT "Time = ";TIME$:COLOR 3,0,1:MAGICAL=0
7280 PRINT "Your are carrying ";
7290 IF OF = 1 THEN COLOR 12,0,1:PRINT "The Amulet of Chaos":COLOR 3,0,1:MAGICAL=1
7300 IF RF = 1 THEN PRINT "The Runestaff":MAGICAL=1
7310 IF MAGICAL=0 THEN PRINT "no magical items at the moment"
7320 QXYZ=0
7330 PRINT "The treasures you carry are ";
7340 FOR Q=1 TO 8
7350 IF T(Q)=1 THEN PRINT C$ (Q+25):QXYZ=1
7360 NEXT Q
7370 IF QXYZ=0 THEN PRINT "nothing"
7380 IF COME=1 THEN GOTO 7400
7390 IF T > 500 THEN GOTO 12280
7400 WC=0
7410 Q=FNE(L(FND(Z)))
7420 L(FND(Z))=Q
7430 Z$="You now have "
7440 PRINT
7450 PRINT "Here you find ";C$(Q);"."
7460 IF (Q<7) OR (Q=11) OR (Q=12) GOTO 3640
7470 IF Q=7 THEN GP!=GP!+FNA(10) : PRINT Z$;GP!;"." : GOTO 6370
7480 IF Q=8 THEN FL=FL+FNA(5) : PRINT Z$;FL;"." : GOTO 6370
7490 IF Q > 9 GOTO 7520
7500 IF (O(1)=X) AND (O(2)=Y) AND (O(3)=Z) THEN ON (1-(O$="T")) GOTO 5030,11070
7510 X=FNA(8) : Y=FNA(8) : Z=FNA(8) : GOTO 7090
7520 IF Q=10 THEN Z=FNB(Z+1) : GOTO 7090
7530 IF Q <= 25 OR Q >= 34 GOTO 7590
7540 PRINT
7550 PRINT "It's now yours!"
7560 T(Q-25)=1
7570 TC=TC+1
7580 GOTO 6370
7590 A=L(FND(Z))-12
7600 WC=0
7610 IF (A<13) OR (VF=1) GOTO 8800
7620 PRINT
7630 PRINT "You may trade with, attack, or ignore the Drow Merchant."
7640 GOSUB 11590
7650 IF O$="I" GOTO 3640
7660 IF O$ <> "A" GOTO 7710
7670 VF=1
7680 PRINT
7690 COLOR 3,0,12:PRINT "You'll be sorry that you did that!"
7700 GOTO 8800
7710 IF O$="T" GOTO 7750
7720 PRINT
7730 COLOR 11,0,15:PRINT "** Nice shot ";R$(RC);"!":COLOR 3,0,1
7740 GOTO 7620
7750 FOR Q=1 TO 8
7760 A=FNA(Q*1500)
7770 IF T(Q)=0 GOTO 7830
7780 PRINT
7790 PRINT "Do you want to sell ";C$(Q+25);" for ";A;"gp's";
7800 GOSUB 11610
7810 IF O$="Y" THEN TC=TC-1 : T(Q)=0 : GP!=GP!+A : GOTO 7830
7820 IF O$ <> "N" THEN PRINT Y$ : GOTO 7780
7830 NEXT Q
7840 IF GP! >= 1000 GOTO 7880
7850 PRINT
7860 PRINT "You're too poor to trade, ";R$(RC);"."
7870 GOTO 3640
7880 IF GP! < 1250 GOTO 8380
7890 PRINT
7900 PRINT "OK ";R$(RC);", you have ";GP!;"gp's and ";W$(AV+5);" armor."
7910 PRINT
7920 Z$="Armor"
7930 GOSUB 11890
7940 PRINT "Nothing:0gp's Leather:1250gp's ";
7950 IF GP! > 1499 THEN PRINT "Chainmail:1500:gp's ";
7960 IF GP! > 1999 THEN PRINT "Plate Mail:2000gp's ";
7970 PRINT
7980 GOSUB 11590
7990 PRINT
8000 IF O$="N" GOTO 8130
8010 IF O$="L" THEN GP!=GP!-1250 : AV=1 : AH=7 : GOTO 8130
8020 IF O$ <> "C" OR GP! >= 1500 GOTO 8050
8030 COLOR 11,0,15:PRINT "** You haven't got that much gold on hand!":COLOR 3,0,1
8040 GOTO 7910
8050 IF O$="C" THEN GP!=GP!-1500 : AV=2 : AH=14 : GOTO 8130
8060 IF O$ <> "P" OR GP! >= 2000 GOTO 8090
8070 COLOR 11,0,15:PRINT "** You can't afford plate mail!":COLOR 3,0,1
8080 GOTO 7910
8090 IF O$="P" THEN GP!=GP!-2000 : AV=3 : AH=21 : GOTO 8130
8100 PRINT
8110 COLOR 11,0,15:PRINT "** Choose a selection.":COLOR 3,0,1
8120 GOTO 7970
8130 IF GP! < 1250 GOTO 8380
8140 PRINT
8150 PRINT "You have";GP!;"gp's left with ";W$(WV+1);" in hand."
8160 PRINT
8170 Z$="Weapon"
8180 GOSUB 11890
8190 PRINT "Nothing:- Dagger:1250gp's";
8200 IF GP! > 1499 THEN PRINT "Mace:1500gp's";
8210 IF GP! > 1999 THEN PRINT "Sword:2000gp's";
8220 PRINT
8230 GOSUB 11590
8240 PRINT
8250 IF O$="N" GOTO 8380
8260 IF O$="D" THEN GP!=GP!-1250 : WV=1 : GOTO 8380
8270 IF O$ <> "M" OR GP! >= 1500 GOTO 8300
8280 COLOR 11,0,15:PRINT "** Sorry sir, I'm afraid I don't give credit!":COLOR 3,0,1
8290 GOTO 8160
8300 IF O$="M" THEN GP!=GP!-1500 : WV=2 : GOTO 8380
8310 IF O$ <> "S" OR GP! >= 2000 GOTO 8350
8320 COLOR 11,0,15:PRINT "** Your Dungeon Express Card - ";
8330 PRINT "You left home without it!":COLOR 3,0,1
8340 GOTO 8160
8350 IF O$="S" THEN GP!=GP!-2000 : WV=3 : GOTO 8380
8360 COLOR 11,0,15:PRINT "** Try choosing a selection!":COLOR 3,0,1
8370 GOTO 8220
8380 IF GP! < 1000 GOTO 3640
8390 Z$="Strength"
8400 GOSUB 11830
8410 IF O$ <> "Y" GOTO 8470
8420 GP!=GP!-1000
8430 ST=FNC(ST+FNA(6))
8440 Q=ST
8450 GOSUB 11860
8460 GOTO 8380
8470 IF O$ <> "N" THEN PRINT Y$ : GOTO 8390
8480 IF GP! < 1000 GOTO 3640
8490 Z$="Intelligence"
8500 GOSUB 11830
8510 IF O$ <> "Y" GOTO 8570
8520 GP!=GP!-1000
8530 IQ=FNC(IQ+FNA(6))
8540 Q=IQ
8550 GOSUB 11860
8560 GOTO 8480
8570 IF O$ <> "N" THEN PRINT Y$ : GOTO 8490
8580 IF GP! < 1000 GOTO 3640
8590 Z$="Dexterity"
8600 GOSUB 11830
8610 IF O$ <> "Y" GOTO 8670
8620 GP!=GP!-1000
8630 DX=FNC(DX+FNA(6))
8640 Q=DX
8650 GOSUB 11860
8660 GOTO 8580
8670 IF O$ <> "N" THEN PRINT Y$ : GOTO 8590
8680 IF (GP!<1000) OR (LF=1) GOTO 3640
8690 PRINT
8700 PRINT "Do you want to buy a lamp for 1000 gp's";
8710 GOSUB 11610
8720 IF O$ <> "Y" GOTO 8780
8730 GP!=GP!-1000
8740 LF=1
8750 PRINT
8760 PRINT "It's guaranteed to outlive you!"
8770 GOTO 3640
8780 IF O$ <> "N" THEN PRINT Y$ : GOTO 8690
8790 GOTO 3640
8800 Q1=1+INT(A/2) : Q2=A+2 : Q3=1
8810 IF (C(1,4)>T(1)) OR (BL=1) OR (DX<FNA(9)+FNA(9)) GOTO 9850
8820 PRINT
8830 COLOR 3,0,12:PRINT "You're confronting ";C$(A+12);"!"
8840 PRINT
8850 PRINT "You may attack or retreat (strongly suggested!)."
8860 IF Q3=1 THEN PRINT "You can also attempt to bribe the creature."
8870 IF IQ > 14 THEN PRINT "You can also cast a spell."
8880 PRINT
8890 PRINT "Your strength is";ST;"and your dexterity is";DX;"."
8900 GOSUB 11590
8910 IF O$ <> "A" GOTO 9340
8920 IF WV <> 0 GOTO 8960
8930 PRINT
8940 COLOR 11,0,15:PRINT "** Pounding on ";C$(A+12);" won't hurt it!":COLOR 3,0,12
8950 GOTO 9850
8960 IF BF <> 1 GOTO 9000
8970 PRINT
8980 COLOR 11,0,15:PRINT "** You can't kill it with a book, so I suggest you either attack or retreat!":COLOR 3,0,12
8990 GOTO 9850
9000 IF DX >= FNA(20)+(3*BL) GOTO 9040
9010 PRINT
9020 PRINT "You barley missed the ";C$(A+12);"!"
9030 GOTO 9850
9040 Z$=RIGHT$(C$(A+12),LEN(C$(A+12))-2)
9050 IF LEFT$(Z$,1)=" " THEN Z$=MID$(Z$,2)
9060 PRINT
9070 PRINT "A valent blow, you hit the ";Z$;"!"
9080 Q2=Q2-WV
9090 IF (A <> 9 AND A <> 12) GOTO 9140
9100 IF FNA(8) <> 1 GOTO 9140
9110 PRINT
9120 COLOR 11,0,15:BEEP:BEEP:PRINT "OH NO! Your ";W$(WV+1);" broke!":BEEP:BEEP:COLOR 3,0,12
9130 WV=0
9140 IF Q2 > 0 GOTO 9850
9150 PRINT
9160 MC=MC-1
9170 PRINT "You kill ";C$(A+12);"."
9180 KM!=KM!+1000
9190 IF H > T-60 GOTO 9230
9200 PRINT
9210 PRINT "You spend an hour eating ";C$(A+12);E$(FNA(8));"."
9220 H=T
9230 IF X <> R(1) OR Y <> R(2) OR Z <> R(3) THEN ON (1-(A=13)) GOTO 9290,11390
9240 PRINT
9250 COLOR 11,0,15:BEEP:PRINT "You've found the Runestaff!";CHR$(7):COLOR 3,0,12
9260 FTRS=10000
9270 R(1)=0
9280 RF=1
9290 Q=FNA(1000)
9300 PRINT
9310 PRINT "You now get his hoard of";Q;"gp's!"
9320 GP!=GP!+Q
9330 GOTO 6370
9340 IF O$="R" GOTO 9850
9350 IF O$ <> "C" GOTO 9640
9360 IF IQ >= 15 OR Q3 <= 1 GOTO 9400
9370 PRINT
9380 COLOR 11,0,15:PRINT "** You can't cast a spell now!":COLOR 3,0,12
9390 GOTO 8820
9400 PRINT
9410 PRINT "Which spell do you wish to cast, W/eb, F/ireball, or D/eathspell?";
9420 GOSUB 11610
9430 PRINT
9440 IF O$ <> "W" GOTO 9480
9450 ST=ST-1
9460 WC=FNA(8)+1
9470 ON (1-(ST<1)) GOTO 9850,10340
9480 IF O$ <> "F" GOTO 9570
9490 Q=FNA(7)+FNA(7)
9500 ST=ST-1
9510 IQ=IQ-1
9520 IF (IQ < 1) OR (ST < 1) GOTO 10340
9530 PRINT "It does";Q;"points worth of damage."
9540 PRINT
9550 Q2=Q2-Q
9560 GOTO 9140
9570 IF O$="D" GOTO 9610
9580 PRINT
9590 COLOR 11,0,15:PRINT "** Try one of the options given.":COLOR 3,0,12
9600 GOTO 8820
9610 PRINT "Death is. . . ";
9620 IF IQ < FNA(4)+15 THEN PRINT "yours!" : IQ=0 : GOTO 10340
9630 PRINT "his!" : Q2=0 : GOTO 9150
9640 IF O$="B" AND Q3 <= 1 GOTO 9680
9650 PRINT
9660 COLOR 11,0,15:PRINT "** Choose one of the options listed.":COLOR 3,0,12
9670 GOTO 8820
9680 IF TC <> 0 GOTO 9720
9690 PRINT
9700 PRINT "All I want is your life!"
9710 GOTO 9850
9720 Q=FNA(8)
9730 IF T(Q)=0 GOTO 9720
9740 PRINT
9750 PRINT "I want ";C$(Q+25);". Will you give it to me?";
9760 GOSUB 11610
9770 IF O$="N" GOTO 9850
9780 IF O$ <> "Y" THEN PRINT Y$ : GOTO 9740
9790 T(Q)=0
9800 TC=TC-1
9810 PRINT
9820 PRINT "OK, just don't tell anyone else."
9830 VF=VF+(L(FND(Z))=25)
9840 GOTO 3640
9850 Q3=2
9860 IF WC <= 0 GOTO 9890
9870 WC=WC-1
9880 IF WC=0 THEN PRINT : PRINT "The web just broke!"
9890 Z$=RIGHT$(C$(A+12),LEN(C$(A+12))-2)
9900 IF LEFT$(Z$,1)=" " THEN Z$=MID$(Z$,2)
9910 IF WC <= 0 GOTO 9950
9920 PRINT
9930 PRINT "The ";Z$;" is stuck and can't attack now!"
9940 GOTO 10130
9950 PRINT
9960 PRINT "The ";Z$;" attacks!"
9970 IF DX < FNA(7)+FNA(7)+FNA(7)+3*BL GOTO 10080
9980 PRINT
9990 HIT=INT(RND(0)*3)
10000 ON HIT GOTO 10010,10030,10050
10010 PRINT "The blow barely misses your left leg making sparks a huge dent in the floor!"
10020 GOTO 10130
10030 PRINT "The ";Z$;" charges at you but you dodge out of the way just in time!"
10040 GOTO 10130
10050 PRINT "The ";Z$;" just  barely misses your ear!"
10060 GOTO 10130
10070 GOTO 10130
10080 PRINT
10090 COLOR 12,0,4:BEEP:PRINT "Thud! The ";Z$;" hit you!":BEEP:COLOR 3,0,12
10100 Q=Q1
10110 GOSUB 10240
10120 IF ST < 1 GOTO 10340
10130 IF O$ <> "R" GOTO 8820
10140 PRINT
10150 PRINT "You have escaped!"
10160 PRINT
10170 PRINT "Do you want to go North, south, east, or west?";
10180 GOSUB 11610
10190 IF O$="N" OR O$="S" OR O$="E" OR O$="W" GOTO 5030
10200 PRINT
10210 COLOR 11,0,15:PRINT "** Don't press your luck, ";R$(RC);"!":COLOR 3,0,12
10220 PRINT
10230 GOTO 10170
10240 IF AV=0 GOTO 10320
10250 Q=Q-AV
10260 AH=AH-AV
10270 IF Q < 0 THEN AH=AH-Q : Q=0
10280 IF AH >= 0 GOTO 10320
10290 AH=0 : AV=0
10300 PRINT
10310 PRINT "Your armor is damaged beyond use . . . good luck!"
10320 ST=ST-Q
10330 RETURN
10340 PRINT CHR$(7)
10350 GOSUB 11530
10360 COLOR 3,0,7:PRINT "A noble effort, oh formerly living ";R$(RC);"!"
10370 PRINT
10380 PRINT "You died due to lack of ";
10390 IF ST < 1 THEN PRINT "Strength."
10400 IF IQ < 1 THEN PRINT "Intelligence."
10410 IF DX < 1 THEN PRINT "Dexterity."
10420 PRINT
10430 Q3=1
10440 PRINT "At the time you died, you had :":PRINT
10450 GOTO 10680
10460 Q3=0
10470 PRINT
10480 PRINT "You left the castle with";
10490 IF OF=0 THEN PRINT "out";
10500 PRINT " the Amulet of Chaos."
10510 PRINT
10520 IF OF=0 GOTO 10630
10530 CLS:GOTO 740
10540 CLS:COLOR 11,0,15:
10550 PRINT"                   ▄▀ █   █ ▄▀▀▄ █  █   █     █ ▀█▀ █▄   █  ▄█▄ ▀▄
10560 PRINT"          ▄▄▄ ▀▀▀ █    ▀▄▀  █  █ █  █   █  ▄  █  █  █ ▀▄ █  ▀█▀   █ ▀▀▀ ▄▄▄
10570 PRINT"              ▀▀▀  ▀▄   █   ▀▄▄▀ ▀▄▄▀    ▀▄▀▄▀  ▄█▄ █   ▀█   ▄  ▄▀  ▀▀▀
10580 PRINT"
10590 PRINT "                         An incredibly glorious victory!!!!":COLOR 3,0,1
10600 PRINT
10610 PRINT "In addition, you got out with the following:"
10620 GOTO 10670
10630 PRINT
10640 PRINT "A less than awe-inspiring defeat."
10650 PRINT
10660 PRINT "When you left the castle, you had:"
10670 IF Q3=0 THEN PRINT "Your miserable life!"
10680 FOR Q=1 TO 8
10690 IF T(Q)=1 THEN PRINT C$(Q+25)
10700 NEXT Q
10710 PRINT W$(WV+1);" and ";W$(AV+5);
10720 IF LF=1 THEN PRINT " and a lamp";
10730 PRINT
10740 PRINT "You also had";FL;"flares and";GP!;"gold pieces"
10750 IF RF=1 THEN PRINT "and the Runestaff"
10760 PRINT "Your score was ";JOHN!
10770 PRINT "And it took you";T;"turns!"
10780 IF JOHN! < 20000 THEN RANK$ ="a Whimp"
10790 IF JOHN! > 35000. THEN RANK$="a Peasent"
10800 IF JOHN! > 50000. THEN RANK$="an Ametuer"
10810 IF JOHN! > 75000. THEN RANK$="a Scout"
10820 IF JOHN! > 90000. THEN RANK$="an Adventurer"
10830 IF JOHN! > 110000. THEN RANK$="a Hero"
10840 IF JOHN! > 125000. THEN RANK$="a Wizard"
10850 IF JOHN! > 140000. THEN GOTO 12470
10860 'GOTO 11290
10870 PRINT :PRINT "You are ranked as ";RANK$
10875 FOR A=2000 TO 800 STEP -2:SOUND A,0.1:NEXT
10880 PLAY "MS T225 O2 P4 L8 ggg L4 g P8 L8 ggg L4 g P8 L8 gggggg L2 a# P5"
10890 PLAY "MS T225 O2 L8 ggg L4 g P8 L8 ggg L4 g P8 L8 gggggg L2 a# P5"
10900 PLAY "MS T225 O3 L8 ddd L4 d P8 L8 ddd L4 d P8 L8 dddddd L2 f P5"
10910 PLAY "MS T225 O3 L8 ddd L4 d P8 L8 ddd L4 d P8 L8 dddddd L2 f P5"
10920 PLAY "MS T210 O3 L3 d O2 a# L2 g P8 L2 a# L2 g P4"
10930 PLAY "MS T225 O2 L8 gggggg L2 a# P8 L8 gggggg L2 a# P8 L8 gggggg L2 a# P5 L4 fg P1 g"
10940 PRINT:PRINT  " Are you foolish enough to want to play again?";
10950 GOSUB 11610
10960 PRINT
10970 IF O$ <> "Y" GOTO 11030
10980 PRINT "Some ";R$(RC);"s never learn!"
10990 PRINT
11000 PRINT "Please be patient while the castle is restocked."
11010 PRINT
11020 GOTO 1610
11030 IF O$ <> "N" THEN PRINT Y$ : GOTO 10870
11040 PRINT "Maybe dumb ";R$(RC);" is not so dumb after all!"
11050 PRINT
11060 GOTO 11940
11070 PRINT
11080 'PRINT "Great unmitigated Nurúcc!"
11090 PRINT
11100 COLOR 28,0,15:BEEP:BEEP:PRINT "You just found The Amulet of Chaos!":BEEP:BEEP:COLOR 3,0,1
11110 ST=18
11120 IQ=18
11130 DX=18
11140 REQ=20000
11150 BF=0
11160 BL=0
11170 PRINT
11180 PRINT "The Runestaff has just disappeared!"
11190 RF=0
11200 OF=1
11210 O(1)=0
11220 GOTO 6370
11230 DATA An empty room,╬,the entrance,∩,stairs going up,U
11240 DATA stairs going down,D,a pool,P,a chest,C,gold pieces,G
11250 DATA flares,ƒ,a warp,█,a sinkhole,S,a Crystal Orb,Φ
11260 DATA a book,B,a Green Slime,▓,an Orc,¥,an Evil Dwarf,¥,a Goblin,¥,a Mind Flayer,¥
11270 DATA a Troll,¥,a Giant spider,¥,a Minotar,¥,a Drow,*,a Drider,¥
11280 DATA a Balor Demon,¥,a Red Dragon,δ,a Drow Merchant,Ω,the Ruby Red,T
11290 DATA the Norn Stone,T,the Pale Pearl,T,the Opal Eye,T
11300 DATA the Green Gem,T,the Blue Flame,T,the Palantir,T,the Silmaril,T
11310 DATA X,"?",no weapon," Sandwich"
11320 DATA Dagger," stew",Mace," soup",Sword," burger",No armor," roast"
11330 DATA Leather," filet",Chainmail," taco",Plate mail," pie"
11340 DATA Hobbit,Elf,Man,Dwarf
11350 X=FNA(8) : Y=FNA(8)
11360 IF L(FND(Z)) <> 101 GOTO 11350
11370 L(FND(Z))=Q
11380 RETURN
11390 PRINT
11400 PRINT "You get all his wares :"
11410 PRINT "Plate mail"
11420 AV=3 : AH=21
11430 PRINT "A sword"
11440 WV=3
11450 PRINT "A strength potion"
11460 ST=FNC(ST+FNA(6))
11470 PRINT "An intelligence potion"
11480 IQ=FNC(IQ+FNA(6))
11490 PRINT "A dexterity potion"
11500 DX=FNC(DX+FNA(6))
11510 IF LF=0 THEN PRINT "A lamp" : LF=1
11520 GOTO 9290
11530 FOR Q=1 TO 64
11540 PRINT "*";
11550 NEXT Q
11560 PRINT
11570 PRINT
11580 RETURN
11590 PRINT
11600 PRINT "Your choice";
11610 INPUT O$
11620 O$=LEFT$(O$,1)
11630 RETURN
11640 PRINT "How many points do you wish to add to your ";Z$;
11650 INPUT O$
11660 PRINT
11670 Q=VAL(O$)
11680 IF Q=0 AND ASC(O$) <> 48 THEN Q=-1
11690 IF Q<0 OR Q>OT OR Q<>INT(Q) THEN PRINT "** "; : GOTO 11640
11700 OT=OT-Q
11710 RETURN
11720 INPUT O$
11730 Q=INT(VAL(O$))
11740 RETURN
11750 PRINT
11760 PRINT Z$;
11770 INPUT O$
11780 Q=INT(VAL(O$))
11790 IF Q > 0 AND Q < 9 THEN RETURN
11800 PRINT
11810 COLOR 11,0,15:PRINT "** Try a number from 1 to 8.":COLOR 3,0,1
11820 GOTO 11750
11830 PRINT
11840 PRINT "Do you want to buy a potion of ";Z$;" for 1000 gp's";
11850 GOTO 11610
11860 PRINT
11870 PRINT "Your ";Z$;" is now";Q;"."
11880 RETURN
11890 PRINT
11900 PRINT "These are the types of ";Z$;" you can buy :"
11910 RETURN
11920 COLOR 2,0,1:PRINT "You are at (";X;",";Y;") level";Z;".":COLOR 3,0,1
11930 RETURN
11940 END
11950 LET JOHN!=ST+IQ+DX+GP!-T
11960 PRINT
11970 PRINT"Your score at this time is ";JOHN!
11980 PRINT
11990 GOTO 4360
12000 LPRINT "*** TEMPLE OF LOTH'S COMMAND AND INFORMATION SUMMARY ***"
12010 LPRINT
12020 LPRINT "The following commands available are:"
12030 LPRINT
12040 LPRINT "H/elp     N/orth    S/outh    E/ast     W/est     U/p"
12050 LPRINT "D/own     DR/ink    M/ap      F/lare    L/amp     O/pen"
12060 LPRINT "G/aze     T/eleport Q/uit     #/Score
12070 LPRINT
12080 LPRINT "The contents of the rooms are as follows:"
12090 LPRINT
12100 LPRINT "╬ = empty room      B = book            C = chest"
12110 LPRINT "D = stairs down     ∩ = entrance/exit   ƒ = flares"
12120 LPRINT "G = gold pieces     ¥ = monster         Φ = crystal orb"
12130 LPRINT "P = magic pool      S = sinkhole        T = treasure"
12140 LPRINT "U = stairs up       * = Drow            █ = warp/amulet
12150 LPRINT
12160 LPRINT
12170 LPRINT "The benefits of having treasures are:"
12180 LPRINT
12190 LPRINT "RUBY RED - avoid lethargy    PALE PEARL - avoid leech"
12200 LPRINT "GREEN GEM - avoid forgetting  OPAL EYE - cure blindness"
12210 LPRINT "BLUE FLAME - dissolves books  NORN STONE - no benefit"
12220 LPRINT "PALANTIR - no benefit         SILMARIL - no benefit"
12230 LPRINT
12240 GOTO 4380
12250 END
12260 RF=1
12270 GOTO 4380
12280 PRINT
12290 COME=1
12300 PRINT"You hear footsteps...";
12310 SOUND 32767,28
12320 PRINT"The footsteps get louder!"
12330 SOUND 32767,28
12340 PRINT"You hear people talking in a strange language."
12350 SOUND 32767,28
12360 PRINT"Oh, No!! the Drow have returned!!!
12370 DROW=INT(RND*100)
12380 IF DROW < 10 GOTO 12430
12390 ST=0
12400 IQ=0
12410 DX=0
12420 GOTO 10350
12430 PRINT
12440 PRINT "You escaped just in time!"
12450 PRINT
12460 GOTO 10510
12470 LOCATE 25,1:INPUT "Press return to continue.";QWERTYU$
12480 CLS:COLOR 26,0,1
12490 PRINT "  ▄▄   ▄▄  ▄   ▄  ▄▄  ▄▄▄   ▄▄  ▄▄▄  ▄  ▄ ▄    ▄▄  ▄▄▄▄▄ ▄  ▄▄  ▄   ▄  ▄▄    ▄
12500 PRINT " █  ▀ █  █ ██  █ █  ▀ █  █ █  █ █  █ █  █ █   █  █   █   █ █  █ ██  █ █  ▀  █ █
12510 PRINT " █    █  █ █ █ █ █    █▄▄▀ █▄▄█ █  █ █  █ █   █▄▄█   █   █ █  █ █ █ █  ▀▀▄  █ █
12520 PRINT " █  ▄ █  █ █  ██ █ ▀█ █ ▀▄ █  █ █  █ █  █ █   █  █   █   █ █  █ █  ██ ▄  █   ▀
12530 PRINT "  ▀▀   ▀▀  ▀   ▀  ▀▀  ▀  ▀ ▀  ▀ ▀▀▀   ▀▀  ▀▀▀ ▀  ▀   ▀   ▀  ▀▀  ▀   ▀  ▀▀    ▀
12540 COLOR 3,0,1:PRINT
12550 PRINT
12560 PRINT " You have been ranked as a Lord with a score of ";JOHN!
12570 PRINT
12580 IF JOHN! > 142498. THEN PRINT " Don't forget to replace my score on Tem-Ins.Bas
12590 GOTO 10880
12600 CLS:KEY OFF:COLOR 3,0,1
12610 LOCATE 1,28:COLOR 27,0,1:PRINT "Temple of Loth instructions"
12620 COLOR 3,0,1:LOCATE 4,3
12630 PRINT "     Temple of Loth is a computerized simulation of one of the most common and       popular fantasy motifs, the lone adventurer's quest with an immense under       ground labyrinth. Each game is separate from all others, so the game is a"
12640 PRINT "     challenge even after you have won. Each game will result in a win or loss       depending on the player's  skill and luck.  The instruction  which follow       will explain the rules and options of the game.
12650 COLOR 3,0,1:LOCATE 12,7:PRINT "A. Character Creation
12660 'LOCATE 4,45:PRINT "A. Sex
12670 'LOCATE 5,7:PRINT "C. Points
12680 LOCATE 12,45:PRINT "B. Equipments
12690 'LOCATE 5,7:PRINT "C. Lamps and Flares
12700 LOCATE 13,7:PRINT "C. The Temple
12710 LOCATE 13,45:PRINT "D. Player Commands
12720 LOCATE 14,7:PRINT "E. Magic Spells
12730 LOCATE 14,45:PRINT "F. Treasures, Curses and Such
12740 LOCATE 15,7:PRINT "G. Drow Merchants
12750 LOCATE 15,45:PRINT "H. Monsters and The Runestaff
12760 LOCATE 16,7:PRINT "I. Warps and ";:COLOR 11,0,1:PRINT "The Amulet of Chaos ":COLOR 3,0,1
12770 LOCATE 16,45:PRINT "J. Error Messages
12780 LOCATE 17,7:PRINT "K. Scoring
12790 LOCATE 17,45:PRINT "L. Comments and Suggestions
12800 LOCATE 18,7:PRINT "M. Return to game
12810 LOCATE 20,6
12820 COLOR 11,0,1:INPUT "Type in the number of the section desired then press return";A$
12830 '$=CHR$(ASC(A$) OR &H20)
12840 IF A$="a" GOTO 13000
12845 IF A$="A" GOTO 13000
12850 IF A$="b" GOTO 13230
12855 IF A$="B" GOTO 13230
12860 IF A$="c" GOTO 13490
12865 IF A$="C" GOTO 13490
12870 IF A$="d" GOTO 13810
12875 IF A$="D" GOTO 13810
12880 IF A$="e" GOTO 14270
12885 IF A$="E" GOTO 14270
12890 IF A$="f" GOTO 14390
12895 IF A$="F" GOTO 14390
12900 IF A$="g" GOTO 14680
12905 IF A$="G" GOTO 14680
12910 IF A$="h" GOTO 14780
12915 IF A$="H" GOTO 14780
12920 IF A$="i" GOTO 14910
12925 IF A$="I" GOTO 14910
12930 IF A$="j" GOTO 15010
12935 IF A$="J" GOTO 15010
12940 IF A$="l" GOTO 15090
12945 IF A$="L" GOTO 15090
12950 IF A$="k" GOTO 15230
12955 IF A$="K" GOTO 15230
12960 IF A$="m" GOTO 15490
12965 IF A$="M" GOTO 15490
12970 IF A$=CHR$(13) GOTO 12820
12980 PRINT :COLOR 11,0,15:PRINT "Invalid input, try again":COLOR 3,0,1
12990 GOTO 12810
13000 CLS
13010 COLOR 11,0,1
13020 PRINT "                                  CHARACTER CREATION
13030 PRINT:COLOR 3,0,1
13040 PRINT "     At the start of each game you will be asked a number of questions about"
13050 PRINT "what type of character you will have. You must make the choices as follows:
13060 PRINT
13070 PRINT "RACE     You may be an Elf, Dwarf, Man, or Hobbit. Each score is randomly "
13080 PRINT "         generated, but bonus and deductions are different for each race."
13090 PRINT
13100 PRINT "SEX      You may be a female or male. Both are equal in number of points."
13110 PRINT "         Be creative in your response.
13120 PRINT
13130 PRINT "POINTS   Each character starts with a number of points for the attributes"
13140 PRINT "         of strength (ST), intelligence (IQ), and dexterity (DX).  In addition,"
13150 PRINT "         there are some other points you may distribute between these three"
13160 PRINT "         attributes as you wish.
13170 PRINT
13180 PRINT "         Your ST, IQ, and DX may be any number from 1 to 18. If any of the "
13190 PRINT "         three drop below 1, you have died. For all three attributes, the "
13200 PRINT "         larger the numerical value, the better. "
13210 LOCATE 25,1:INPUT "Press enter to return to main menu";B$
13220 GOTO 12600
13230 CLS:COLOR 11,0,1
13240 PRINT "                                   EQUIPMENT
13250 PRINT:COLOR 3,0,1
13260 PRINT "    Every character is given 60 gold pieces (gp's), at the beginning of each"
13270 PRINT "to purchase some of the following items.
13280 PRINT
13290 PRINT "ARMOR    You may buy platemail armor for 30 gp's, chainmail for 20 gp's or"
13300 PRINT "         leather for 10 gp's. You can only wear one suit of armor at a time."
13310 PRINT "         The more expensive the armor, the more damage it will absorb."
13320 PRINT
13330 PRINT "WEAPONS  You may buy a sword for 30 gp's, a mace for 20 gp's, or a dagger for "
13340 PRINT "         10 gp's. You can only carry a single weapon at a time.  The more ex-"
13350 PRINT "         pensive the weapon, the more damage it does to the various monsters."
13360 PRINT
13370 PRINT "LAMP     If after selecting armor and weapons, you have 20 gp's left , you may"
13380 PRINT "         buy a lamp for 20 gp's. Having the lamp will allow you to look into"
13390 PRINT "         an adjacent room without having to enter it.
13400 PRINT
13410 PRINT "FLARES   If, after all purchases , you have money left, you may buy flares for"
13420 PRINT "         1 gp each. Lighting a flare reveals the contents of all the rooms "
13430 PRINT "         surrounding your current location.
13440 PRINT
13450 PRINT "         Once you have equipped your character, you are ready to enter the"
13460 PRINT "         Temple and begin your quest.
13470 LOCATE 25,1:INPUT "Press enter to return to main menu.";B$
13480 GOTO 12600
13490 CLS:COLOR 11,0,1
13500 PRINT "                                   THE TEMPLE
13510 COLOR 3,0,1:PRINT
13520 PRINT "     The temple is arranged in a 8x8x8 three dimensional matrix.  This means     that there are 8 levels with 64 rooms on each level. The temple levels are      are numbered from 1 (the top level) to 8 (the bottom level. Each temple level
13530 PRINT " is constructed in a doughnut like fashion, in that the north edge is connect    to the south edge and the east edge is connected to the west edge.  In a sim-   ular fashion, the sinkholes, explain later, on level 8 will "DROP" you down
13540 PRINT " to level 1. The only room that does not work in this fashion is always locat-   ed at location (1,4) level 1. Going north from this room will take you out of   the temple and end the game.
13550 PRINT
13560 PRINT " Each room of the temple will have contents as one of the following.
13570 PRINT
13580 PRINT "   ∩ = The entrance / exit room
13590 PRINT "   ╬ = An empty room containing nothing
13600 PRINT "   U = Stairs going up a level
13610 PRINT "   D = Stairs going down a level
13620 PRINT "   P = Magic Pool from which you may drink
13630 PRINT "   C = A chest you may open.
13640 PRINT "   B = A book you may open
13650 PRINT "   G = From 1 to 10 gold pieces
13660 PRINT "   ƒ = From 1 to 3 flares
13670 PRINT "   █ = A warp to another random location
13680 LOCATE 25,1:INPUT "Press return to continue";B$
13690 LOCATE 25,1:PRINT "                              "
13700 LOCATE 22,1
13710 PRINT "   ¥ = A monster (1 of 9 different types)
13720 PRINT "   * = A Drow fighter
13730 PRINT "   Φ = A crystal orb
13740 PRINT "   T = A treasure (1 of 8 in the castle)
13750 PRINT "   ▓ = A Green Slime
13760 PRINT "   4 = A Red Dragon
13770 PRINT
13780 PRINT "     The letters are the abbreviations for the room contents which are display-  ed whenever you look at a map or light a flare. When you look at a map, the     room you are currently located in is bracketed by < >
13790 LOCATE 25,1:INPUT "Press enter to return to main menu";B$
13800 GOTO 12600
13810 CLS:COLOR 11,0,1
13820 PRINT "                             PLAYER COMMANDS
13830 COLOR 3,0,1:PRINT
13840 PRINT "     Whenever the program asks for a command, you must decide what action you    wish to preform. If your choice is not valid, the program will inform you and   allow you to try agian.  The following is a list of commands which the pro-
13850 PRINT " gram understands, with a description of their effects and restrictions:"
13860 PRINT
13870 PRINT " NORTH   Moves you to the room north from your present position. When go north           from the entrance / exit room, the game terminates. In all cases,              the north edge wraps around from the south.
13880 PRINT
13890 PRINT " SOUTH   Moves you to the room south of your present position. In all cases,             the south edge wraps around to the north edge.
13900 PRINT
13910 PRINT " EAST    Moves you to the room east of your present position. In all cases, the          east edge wraps around to the west.
13920 PRINT
13930 PRINT " WEST    Moves you to the room west of your present position. In all cases, the          west edge wraps around to the east.
13940 PRINT
13950 PRINT " UP/DOWN Causes you to ascend/descend stairs. You must be in a room containing           stairs to use this command.
13960 PRINT
13970 LOCATE 25,1:INPUT "Press return to continue";B$
13980 LOCATE 25,1:PRINT "                           "
13990 LOCATE 22,1
14000 PRINT " DRINK   Causes you to take a drink from a magic pool. You may repeat this               command as often as you wish, but you must be in a room with a pool             to use this command.
14010 PRINT
14020 PRINT " MAP     Causes a map of the level you are currently on to be printed. All               unexplored  rooms are displayed as `?'.  All other rooms are dis-               played as their one character symbols. You may look at your map at
14030 PRINT
14040 PRINT " FLARE   Cause one of your flares to be lit, revealing the contents of all the           rooms surrounding your current location. Because each edge is joined            to the opposite edge, you will always see nine rooms with your loca-
14050 PRINT "         as long as you have some and you are not blind or fighting a monster.
14060 PRINT
14070 PRINT " LAMP    Allows you to shine your lamp into any one of the rooms north, south,           east, and west of your current position, revealing the room contents.           Unlike flares, the lamp may be used repeatedly. You may use your lamp
14080 PRINT "         at any time as long as you have one, are not blind, and not attacking           a monster.
14090 PRINT
14100 PRINT " OPEN    Causes you to open a book or a chest which is in the room with you."
14110 PRINT
14120 LOCATE 25,1:INPUT "Press return to continue";B$
14130 LOCATE 25,1:PRINT "                          "
14140 LOCATE 22,1
14150 PRINT " GAZE    Causes you to gaze into a crystal orb. When you see yourself in a               bloody mess, you lose 1 or 2 points of strength.  When you see the              location of the ";:COLOR 11,0,1:PRINT "Amulet of Chaos";:COLOR 3,0,1
14160 PRINT ", there is only a 50% chance that it "
14170 PRINT "         is correct. You cannot gaze when you are blind or when you are not in           a room containing a crystal orb."
14180 PRINT
14190 PRINT " TELE-   Allows you to teleport directly into a specific room any where in the   PORT    temple. This is the only way you can can enter the room containing              the";:COLOR 11,0,1:PRINT " Amulet of Chaos.";:COLOR 3,0,1
14200 PRINT " You must have the Runestaff to teleport!
14210 PRINT
14220 PRINT " QUIT    Allows you to end the game while you are still in the temple. You will          be asked if you are, in case you change your mind. If you quit, you             will lose the game.
14230 PRINT
14240 PRINT " HELP    Causes a summary of available commands, abbreviations used in des-               cribing the contents of rooms, and the benefits of possessing each of            the treasures to be displayed at any time.
14250 LOCATE 25,1:INPUT "Press enter to return to main menu";B$
14260 GOTO 12600
14270 CLS:COLOR 11,0,2
14280 PRINT "                      MAGIC SPELLS"
14290 COLOR 3,0,1:PRINT
14300 PRINT "     When ever your intelligence (IQ) becomes 15 or higher, you gain the option  of casting a magic spell on a monster if you have the very first combat         option. The three spells and there effects are as follows:
14310 PRINT
14320 PRINT " WEB     Traps the monster in a sticky web so that it can't fight back as you            attack it. This spell lasts from 2 to 9 turns and costs you one                 strength (ST) point.
14330 PRINT
14340 PRINT " FIRE-   Hits the monster with a ball of flame that causes between 2 and 14      BALL    points worth of damage instantly. It costs one strength points and one          point of intelligence.
14350 PRINT
14360 PRINT " DEATH   is a contest of will between the monster and yourself, whoever has              the lower intelligence dies at once. It costs nothing to use, but it             is very risky. Even with an IQ of 18 (the highest possible), you
14370 LOCATE 25,1:INPUT "Press enter to return to main menu";B$
14380 GOTO 12600
14390 CLS:COLOR 11,0,1
14400 PRINT "                       TREASURE, CURSES, AND SUCH
14410 COLOR 3,0,1:PRINT
14420 PRINT "     In the temple there are eight randomly placed treasures:
14430 PRINT
14440 PRINT " The Ruby Red - Wards off the curse of lethargy.
14450 PRINT " The Pale Pearl - Wards off the curse of the leech.
14460 PRINT " The Opal Eye - Cures blindness.
14470 PRINT " The Green Gem - Wards off the curse of forgetfulness.
14480 PRINT " The Blue Flame - Dissolves books stuck to your hands.
14490 PRINT " The Norn Stone - Has no special power.
14500 PRINT " The Palantir - Has no special power.
14510 PRINT " The Silmaril - Has no special power.
14520  PRINT
14530 PRINT "     THERE ARE THREE CURSES:"
14540 PRINT
14550 PRINT " LETHARGY - This gives the monster the first attack which prevents you from                 bribing him or casting a spell on them.
14560 PRINT
14570 PRINT " LEECH - This takes from 1 to 5 gp's from you each turn until you have no gold           left at all!
14580 PRINT
14590 LOCATE 25,1:INPUT "Press return to continue";B$
14600 LOCATE 25,1:PRINT "                            "
14610 LOCATE 20,1
14620 PRINT " FORGETFULNESS - This causes you to forget what you know about each level of the          temple.  Your map will slowly turn back to all question marks, How-             ever, the contents of the rooms stay the same.
14630 PRINT
14640 PRINT "     In addition to nullifying the effects of the curses, the treasures can          also provide protection from two undesirable things which can happen            when you open a book.  These are going blind and which prevent you from"
14650 PRINT "     seeing your maps, lighting flares, using your lamp, gazing into orbs, and       being informed or your current location, and secondly, having a book            stuck to your hands, which prevents you to draw your weapon to fight
14660 LOCATE 25,1:INPUT "Press enter to return to main menu";B$
14670 GOTO 12600
14680 CLS:COLOR 11,0,1
14690 PRINT "                             DROW MERCHANTS
14700 COLOR 3,0,1:PRINT
14710 PRINT "      On every level there are Drow Merchants who sell necessary items at in-     flated prices. Normally, the merchants will make you an offer for every         treasure you have, and then, depending on the amount of gold you have, will"
14720 PRINT " sell you new armor, a new weapon, a potion of strength, intelligence, and       dexterity (no matter how many potions you buy, the maximum amount for these
14730 PRINT " attributes is 18), and a lamp, if you don't already have one. If you chose to   attack the merchant, you will antagonize every one in the temple, and they      will all react as monsters. You will also lose the ability to trade with"
14740 PRINT " them. Killing a merchant, however, will give you new platemail, a sword, one    of each kind of potion, and a lamp (if you don't already have one, in add-      ition to his hoard of between 1 and 1000 gold pieces. To end hostilities"
14750 PRINT " and reestablish trading privileges, you must bribe any Merchant Drow in the     castle with the treasure of his choice.
14760 LOCATE 25,1:INPUT "Press enter to return to main menu";B$
14770 GOTO 12600
14780 CLS:COLOR 11,0,1
14790 PRINT "                         MONSTERS AND THE RUNESTAFF"
14800 COLOR 3,0,1:PRINT
14810 PRINT "     There are 12 types of monsters in the temple:
14820 PRINT
14830 PRINT " Green Slime, Orcs, Evil Dwarfs, Goblins, Mind Flayers, Trolls, Giant Spiders    Minotaurs, Driders, Balor Demon, Reds Dragons, and Drow Warriors."
14840 PRINT
14850 PRINT "     Please note that each time you strike a Drow Warrior or a Red Dragon,       there is a chance that your weapon will be shattered."
14860 PRINT
14870 PRINT "     Each monster possesses a hoard of from 1 to 1000 gp's which you obtain      when you kill a monster. In addition, one of the monsters is also carring The   Runestaff, (you won't know which until one until you kill it). You must have"
14880 PRINT " The Runestaff to teleport, and when you teleport into the room with The         Amulet of Chaos, The Runestaff will disappear. (You must find your way out of   the temple without it)."
14890 LOCATE 25,1:INPUT "Press enter to return to main menu";B$
14900 GOTO 12600
14910 CLS:COLOR 11,0,1
14920 PRINT "                         WARPS AND ";:COLOR 27,0,1:PRINT "THE AMULET OF CHAOS"
14930 COLOR 3,0,1:PRINT
14940 PRINT "      All but one of the rooms donated as `█' are truly warps. Walking, fall-    ing, or teleporting into one of these warps will cause you to be instantly      transported to anywhere in the temple at random. The one exception to this"
14950 PRINT " rule is the room containing ";:COLOR 11,0,1:PRINT "The Amulet of Chaos";:COLOR 3,0,1:PRINT ". This room is disguised as a"
14960 PRINT " warp. Walking into this room causes you to move one room further in the same    direction. To actually enter this room, you must teleport in using The Rune-"
14970 PRINT " staff. At this point, you will acquire ";:COLOR 11,0,1:PRINT "The Amulet of Chaos";:COLOR 3,0,1:PRINT ". The Runestaff will"
14980 PRINT " disappear at this point. Remember, to win the game, you must leave the temple   with the amulet in your possession."
14990 LOCATE 25,1:INPUT "Press enter to return to the main menu";B$
15000 GOTO 12600
15010 CLS:COLOR 11,0,1
15020 PRINT"                             ERROR MESSAGES"
15030 COLOR 3,0,1:PRINT
15040 PRINT "     Anytime you receive a highlighted message with a `**', it means that the     last thing you typed was unacceptable to the program at the time. For in- "
15050 PRINT " stance ";:COLOR 11,0,1:PRINT "** It's hard to gaze without an orb.";:COLOR 3,0,1:PRINT ", this means that you tried to"
15060 PRINT " gaze from a room which did not contain a crystal orb. You are always required   to redo your last response when you receive an `**' message.
15070 LOCATE 25,1:INPUT "Press enter to return to main menu";B$
15080 GOTO 12600
15090 CLS:COLOR 11,0,1
15100 PRINT "     :ë ♫₧>
10250 IF A$="5" THEN CLS:GOTO 18030
10260 IF A$="6" THEN CLS:GOTO 15030
10270 IF A$<>"1" AND A$<>"2" AND A$<>"3" AND A$<>"4" AND A$<>"5" AND A$<>"6"THEN 10190
10280 GOSUB 17030:GOTO 12030
11000 '
11010 REM ** CORRECT RECORD **
11020 '
11030 CLS:LOCATE 1,1:COLOR 15,0,0:PRINT"GAME #";L:LOCATE 3,1:COLOR 6,0,0::PRINT"GAME     ";
11040 LOCATE 5,1:PRINT"SCORE    ";
11050 LOCATE 7,1:PRINT"PLAYER   ";
11060 LOCATE 9,1:PRINT"DATE     ";
11070 ROW=3:COL=8:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":COLOR 14:IN$=C$(L):PT=1:GOSUB 22040:TC$=IN$
11080 ROW=5:COL=8:MAXLEN=7:SELECT$=NUM$:IN$=H$(L):PT=1:GOSUB 22040:TH$=IN$
11090 ROW=7:COL=8:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":IN$=P$(L):PT=1:GOSUB 22040:TP$=IN$
11100 ROW=9:COL=8:MAXLEN=8:SELECT$=NUM$+"/":IN$=D$(L):PT=1:GOSUB 22040:TD$=IN$
11110 LOCATE 15,1:COLOR 4,0,0:PRINT"Is the above information correct?";
11120 A$=INKEY$
11130 IF A$="y" OR A$="Y" THEN CLS:H$(L)=TH$:P$(L)=TP$:D$(L)=TD$:IF TC$=C$(L) THEN GOTO 10040:ELSE C$(L)=TC$:GOTO 9030:'If NAME OF GAME is unchanged there is no need to resort
11140 IF A$="n" OR A$="N" THEN 11030
11150 GOTO 11120
12000 '
12010 REM ** PRINTING ROUTINE **
12020 '
12030 G1$="N A M E   O F   T H E   G A M E"  '3 spaces in between words
12040 N1$="HIGH SCORER"e. The scoring formula goes   as follows:"
15270 PRINT
15280 PRINT "     1 point for each gold piece  +  100 times your combined attribute scores"
15290 PRINT
15300 PRINT "       + 1000 points for each monster killed  - 5 times the turns played"
15310 PRINT
15320 PRINT " Bonus points are scored as follows:
15330 PRINT "
15340 PRINT "                  5000 for each treasure
15350 PRINT "                 10000 for finding the Runestaff
15360 PRINT "                 20000 for finding the Amulet of Chaos
15370 PRINT "
15380 PRINT " You will then be ranked into one of the following classes:
15390 PRINT
15400 PRINT "             0 - 20000  Whimp                  20000 - 35000  Peasent
15410 PRINT "         35000 - 50000  Ameteur                50000 - 75000  Scout
15420 PRINT "         90000 -110000  Adventurer            110000 -125000  Hero
15430 PRINT "        125000 -140000  Wizard                140000+  Lord
15440 PRINT "
15450 PRINT "  The highest score to date is that of Lord Nurúcc: 142,498
15460 LOCATE 25,1
15470 LINE INPUT "Press enter to return to Main Menu";B$
15480 GOTO 12600
15490 CLS
15500 GOTO 1400
15925 IF A$="I" GOTO 14910
```
{% endraw %}

## XWING.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            2060-A.BAS             │░"
80 PRINT"░│              XWING                │░"
90 PRINT"░│                                   │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000  REM * STAR PILOT GAME *
1010  REM * WRITTEN BY GEORGE BLANK, LEECHBURG, PA. *
1020  REM * FOR  PUBLIC DOMAIN UNLESS MOVIEMAKERS OBJECT *
1030  REM * VERSION 4.0    SEPTEMBER 25,1978 *
1040  REM * MODIFIED TO RUN ON THE IBM PC BY ERNEST *
1050  REM * SMITH AND RAYMOND ROGERS, HOUSTON, TEXAS *
1060  REM * DECEMBER 82 *
1070  KEY OFF:CLS:WIDTH 80:DEF SEG=0:A=PEEK(&H410):POKE &H410,(A AND &HCF) OR &H20
1080  WIDTH 40:SCREEN 1:SCREEN 0:WIDTH 80:WIDTH 40:SCREEN 1:COLOR 0,1
1090  GOTO 1200
1100  V=V-1:IF V<-3 THEN V=-3
1110  RETURN
1120  W=W-1:IF W<-5 THEN W=-5
1130  RETURN
1140  W=W+1:IF W>5 THEN W=5
1150  RETURN
1160  V=V+1:IF V>3 THEN V=3
1170  RETURN
1180  KEY(1) ON:KEY(2) ON:KEY(11) ON:KEY(12) ON:KEY(13) ON:KEY(14) ON:RETURN
1190  KEY(1) STOP:KEY(2) STOP:KEY(11) STOP:KEY(12) STOP:KEY(13) STOP:KEY(14) STOP:RETURN
1200    LOCATE 8,1:PRINT"***************************************";
1210    PRINT"*                                     *";
1220    PRINT"*      X W I N G   F I G H T E R      *";
1230    PRINT"*                                     *";
1240    PRINT"***************************************";
1250  SOUND 525.25,18.2:SOUND 783.99,18.2/2:SOUND 698.46,18.2/6:SOUND 659.26,18.2/6:SOUND 587.33,18.2/6:SOUND 1046.6,18.2:SOUND 783.99,18.2/2:SOUND 698.46,18.2/6:SOUND 659.26,18.2/6:SOUND 587.33,18.2/6
1260  SOUND 1046.5,18.2:SOUND 783.99,18.2/2:SOUND 698.46,18.2/6:SOUND 659.26,18.2/6:SOUND 698.46,18.2/6:SOUND 587.33,18.2
1270 LOCATE 16,1:PRINT"DO YOU WANT INSTRUCTIONS (Y OR N)?";
1280  K$=INKEY$:IF K$="Y" OR K$="y" GOTO 6930
1290  IF K$<>"N" AND K$<>"n" GOTO 1270
1300 CLS:CLEAR:DEFINT A-Z:DEFSNG O,G,J,S
1310 RANDOMIZE(VAL(RIGHT$(TIME$,2)))
1320  ON KEY(1) GOSUB 5350:ON KEY(2) GOSUB 5750:ON KEY(11) GOSUB 1100:ON KEY(12) GOSUB 1120:ON KEY(13) GOSUB 1140:ON KEY(14) GOSUB 1160
1330  LOCATE 8,1:PRINT "IMPERIAL FIGHTER:  ":DRAW "C2;BM145,59;M+0,0;BM+10,1;M+0,-2;M+2,2;M+0,-2;BM+10,-1;M+0,4;BM+6,-4;M+0,4;M+0,-2;M-6,0"
1340  DIM IM(6):DIM IM1(6):DIM IM2(6):DIM IM3(6):GET (145,59)-(145,59),IM:GET (145,59)-(145,59),IM1:GET (155,58)-(157,60),IM2:GET (167,57)-(173,61),IM3
1350  DIM IM4(13):IM4(0)=22:IM4(1)=7:IM4(2)=128:IM4(3)=-32760:IM4(4)=2048:IM4(5)=128:IM4(6)=-22008:IM4(7)=-22358:IM4(8)=128:IM4(9)=-32760:IM4(10)=2048:IM4(11)=128:IM4(12)=8
1360  DIM IM5(20):IM5(0)=26:IM5(1)=9:IM5(2)=128:IM5(3)=-32768!:IM5(4)=128:IM5(5)=-32768!:IM5(6)=128:IM5(7)=-32768!:IM5(8)=128:IM5(9)=-32768!:IM5(10)=-21846:IM5(11)=-32598:IM5(12)=128
1370  IM5(13)=-32768!:IM5(14)=128:IM5(15)=-32768!:IM5(16)=128:IM5(17)=-32768!:IM5(18)=128:IM5(19)=-32768!
1380  DIM IM6(44):IM6(0)=34:IM6(1)=17:IM6(2)=2048:IM6(5)=32:IM6(7)=-32768!:IM6(9)=512:IM6(12)=-32760:IM6(14)=8192:IM6(15)=32:IM6(17)=2176:IM6(20)=2:IM6(23)=128:IM6(25)=8192:IM6(28)=8
1390  IM6(29)=128:IM6(30)=512:IM6(31)=2:IM6(33)=-30720:IM6(36)=32:IM6(38)=-32768!:IM6(40)=512:IM6(43)=8
1400  DIM IM7(44)
1410  IM7(0)=30:IM7(1)=21:IM7(2)=-22006:IM7(3)=-22358:IM7(4)=32:IM7(5)=8192:IM7(6)=-21846:IM7(7)=-32598:IM7(8)=2048:IM7(9)=128
1420  IM7(10)=2048:IM7(11)=128:IM7(12)=2048:IM7(13)=128:IM7(14)=2048:IM7(15)=128:IM7(16)=2048:IM7(17)=128:IM7(18)=2048:IM7(19)=128
1430  IM7(20)=2560:IM7(21)=32:IM7(22)=2048:IM7(23)=128:IM7(24)=8704:IM7(25)=128:IM7(26)=2048:IM7(27)=128:IM7(28)=2048:IM7(29)=128
1440  IM7(30)=2048:IM7(31)=128:IM7(32)=2048:IM7(33)=128:IM7(34)=2048:IM7(35)=128:IM7(36)=2048:IM7(37)=128:IM7(38)=-22518:IM7(39)=-22358
1450  IM7(40)=2592:IM7(41)=8192:IM7(42)=-21846:IM7(43)=-32598
1460  DIM IM8(102)
1470  IM8(0)=50:IM8(1)=29:IM8(3)=2048:IM8(7)=10:IM8(10)=2048:IM8(11)=128:IM8(14)=8200:IM8(17)=2048:IM8(18)=8:IM8(21)=514
1480  IM8(25)=-32640:IM8(28)=8192:IM8(29)=32:IM8(32)=2184:IM8(35)=514:IM8(36)=2:IM8(38)=2048:IM8(39)=-32760:IM8(40)=128:IM8(42)=8352
1490  IM8(43)=-32736:IM8(45)=8194:IM8(46)=2176:IM8(47)=128:IM8(48)=512:IM8(49)=34:IM8(50)=-32766:IM8(51)=128:IM8(52)=10250:IM8(54)=-24448
1500  IM8(55)=8704:IM8(56)=32:IM8(58)=136:IM8(59)=-24446:IM8(61)=-32256:IM8(62)=514:IM8(63)=128:IM8(65)=-30592:IM8(66)=8:IM8(68)=8192
1510  IM8(69)=8224:IM8(72)=8200:IM8(73)=128:IM8(75)=512:IM8(76)=34:IM8(79)=-22528:IM8(80)=128:IM8(83)=8224:IM8(86)=2048:IM8(87)=8
1520  IM8(90)=2050:IM8(94)=136:IM8(97)=10240:IM8(101)=8
1530  LOCATE 10,1:PRINT "DARTH VADER     :  ":DRAW "C2;BM145,75;M+0,0;BM+10,1;M+0,-2;M+2,2;M+0,-2;BM+11,-1;M-1,1;M+0,2;M+1,1;BM+4,-4;M+1,1;M+0,2;M-1,1;BM+1,-2;M-6,0"
1540  DIM DV(6):DIM DV1(6):DIM DV2(6):DIM DV3(6):GET (145,75)-(145,75),DV:GET (145,75)-(145,75),DV1:GET (155,74)-(157,76),DV2:GET (167,73)-(173,77),DV3
1550  DIM DV4(13)
1560  DV4(0)=22:DV4(1)=7:DV4(2)=8:DV4(3)=8320:DV4(4)=8192:DV4(5)=128:DV4(6)=-22008:DV4(7)=-22358:DV4(8)=128:DV4(9)=8200
1570  DV4(10)=8192:DV4(11)=8:DV4(12)=128
1580  DIM DV5(20)
1590  DV5(0)=26:DV5(1)=9:DV5(2)=8:DV5(3)=8:DV5(4)=32:DV5(5)=2:DV5(6)=128:DV5(7)=-32768!:DV5(8)=128:DV5(9)=-32768!
1600  DV5(10)=-21846:DV5(11)=-32598:DV5(12)=128:DV5(13)=-32768!:DV5(14)=128:DV5(15)=-32768!:DV5(16)=32:DV5(17)=2:DV5(18)=8:DV5(19)=8
1610  DIM DV6(32)
1620  DV6(0)=30:DV6(1)=15:DV6(2)=-22528:DV6(4)=2:DV6(6)=8:DV6(8)=34:DV6(10)=-32640:DV6(12)=8320:DV6(14)=2176:DV6(16)=512
1630  DV6(19)=2176:DV6(21)=2080:DV6(23)=2056:DV6(25)=8194:DV6(27)=-32768!:DV6(29)=2:DV6(31)=168
1640  DIM DV7(44)
1650  DV7(0)=32:DV7(1)=21:DV7(2)=10752:DV7(3)=-24406:DV7(4)=-32768!:DV7(5)=-30720:DV7(6)=-22014:DV7(7)=682:DV7(8)=520:DV7(9)=-30688
1660  DV7(10)=544:DV7(11)=8224:DV7(12)=512:DV7(13)=32:DV7(14)=512:DV7(15)=32:DV7(16)=512:DV7(17)=32:DV7(18)=512:DV7(19)=32
1670  DV7(20)=512:DV7(21)=136:DV7(22)=512:DV7(23)=32:DV7(24)=2048:DV7(25)=160:DV7(26)=512:DV7(27)=32:DV7(28)=512:DV7(29)=32
1680  DV7(30)=512:DV7(31)=32:DV7(32)=512:DV7(33)=32:DV7(34)=520:DV7(35)=544:DV7(36)=546:DV7(37)=2080:DV7(38)=-21888:DV7(39)=-24534
1690  DV7(40)=546:DV7(41)=-32640:DV7(42)=-22006:DV7(43)=170
1700  DIM DV8(76)
1710  DV8(0)=46:DV8(1)=25:DV8(3)=10752:DV8(4)=128:DV8(6)=-32768!:DV8(7)=32:DV8(9)=-22526:DV8(10)=8:DV8(12)=512:DV8(13)=2
1720  DV8(16)=-32640:DV8(18)=512:DV8(19)=8224:DV8(21)=2048:DV8(22)=2056:DV8(24)=8192:DV8(25)=2082:DV8(27)=-32766:DV8(28)=-30592:DV8(30)=-32248
1730  DV8(31)=10240:DV8(32)=128:DV8(33)=-30712:DV8(34)=2048:DV8(35)=128:DV8(36)=-24536:DV8(37)=2048:DV8(38)=128:DV8(39)=-32630:DV8(40)=2048
1740  DV8(41)=672:DV8(42)=-32760:DV8(44)=2184:DV8(45)=10:DV8(47)=8322:DV8(48)=32:DV8(50)=-32640:DV8(51)=128:DV8(53)=-32224:DV8(56)=-30712
1750  DV8(59)=-24062:DV8(62)=-32768!:DV8(63)=168:DV8(65)=8192:DV8(66)=136:DV8(68)=2048:DV8(69)=136:DV8(71)=512:DV8(72)=136:DV8(75)=168
1760  LOCATE 12,1:PRINT "DEATH STAR      :  ":DRAW "C3;BM145,91;M+0,0;BM+11,-1;M-1,1;M+2,0;M-1,1;BM+12,-3;M+1,0;M+1,1;M-3,0;M+0,1;M+3,0;M-1,1;M-1,0"
1770  DRAW "C3;BM+12,-5;M+2,0;M+1,1;M-4,0;M-1,1;M+6,0;M+0,1;M-6,0;M+0,1;M+6,0;M-1,1;M-4,0;M+1,1;M+2,0"
1780  DIM DS(8):DIM DS1(8):DIM DS2(8):DIM DS3(8):DIM DS4(8):GET (145,91)-(145,91),DS:GET (145,91)-(145,91),DS1:GET (155,90)-(157,92),DS2:GET (167,89)-(170,92),DS3:GET (178,87)-(184,93),DS4
1790  DIM EXPL3(18):DIM EXPL4(18):DIM EXPL5(18):DIM EXPL6(18):DIM EXPL7(18):DIM EXPL8(18)
1800  DATA 22,11,0,0,0,8194,0,-32608,-22006,2560,-32598,-22006,128,168,8706,0,0,0,0
1810  FOR I=0 TO 18:READ EXPL3(I):NEXT I
1820  DATA 22,11,-30720,2048,136,-30718,-24544,-32608,-22006,-21848,-22358,-22006,-23936,10274,-30206,2048,-32632,-30720,0
1830  FOR I=0 TO 18:READ EXPL4(I):NEXT I
1840  DATA 22,11,-30712,512,136,8194,-32760,-24416,-21974,-21976,-22358,-21974,-32608,2216,-30206,512,138,-30712,128
1850  FOR I=0 TO 18:READ EXPL5(I):NEXT I
1860  DATA 22,11,-30712,2048,136,8194,-24536,-32608,-22006,-21976,-22358,-22006,-24448,10408,8706,2048,-32632,-30712,128
1870  FOR I=0 TO 18:READ EXPL6(I):NEXT I
1880 DATA  22,11,-30688,2048,2080,8194,-32736,-32608,-21974,-22008,-22358,-22006,-24448,10408,8706,2048,-32632,-30688,32
1890  FOR I=0 TO 18:READ EXPL7(I):NEXT I
1900  DATA 22,11,-30688,2048,2184,-30718,-24544,-32608,-22006,-21848,-22358,-22006,-23936,10274,-30206,2048,-32632,-30688,32
1910  FOR I=0 TO 18:READ EXPL8(I):NEXT I
1920  LOCATE 17,1:PRINT "SELECT SKILL LEVEL FROM 0 TO 3"
1930  S$=INKEY$:IF S$<>"0" AND S$<>"1" AND S$<>"2" AND S$<>"3" GOTO 1920
1940  SKILL=VAL(S$):CLS
1950  DIM LASAR(381)
1960  LASAR(0)=148:LASAR(1)=40:LASAR(2)=64:LASAR(11)=5136:LASAR(20)=16385:LASAR(21)=16385:LASAR(29)=5120:LASAR(31)=20:LASAR(38)=256:LASAR(39)=64:LASAR(40)=256:LASAR(41)=64:LASAR(48)=20
1970  LASAR(50)=5120:LASAR(57)=16385:LASAR(60)=16385:LASAR(66)=5120:LASAR(70)=20:LASAR(75)=256:LASAR(76)=64:LASAR(79)=256:LASAR(85)=4:LASAR(89)=20480:LASAR(94)=20480:LASAR(99)=5
1980  LASAR(103)=1280:LASAR(109)=80:LASAR(113)=80:LASAR(118)=1280:LASAR(122)=5:LASAR(128)=20480:LASAR(131)=20480:LASAR(138)=5:LASAR(140)=1280:LASAR(148)=80:LASAR(150)=80
1990  LASAR(157)=1024:LASAR(159)=1:LASAR(167)=16385:LASAR(168)=5120:LASAR(177)=276:LASAR(178)=64:LASAR(186)=256:LASAR(187)=84:LASAR(196)=21505:LASAR(205)=5120:LASAR(206)=16385
2000  LASAR(214)=256:LASAR(215)=64:LASAR(216)=20:LASAR(224)=4:LASAR(225)=256:LASAR(233)=20480:LASAR(235)=20480:LASAR(242)=1280:LASAR(245)=5:LASAR(252)=80:LASAR(255)=80
2010  LASAR(261)=5:LASAR(264)=1280:LASAR(270)=20480:LASAR(274)=20480:LASAR(279)=1280:LASAR(284)=5:LASAR(289)=80:LASAR(294)=80:LASAR(298)=1:LASAR(303)=1024:LASAR(307)=5120
2020  LASAR(313)=16385:LASAR(316)=256:LASAR(317)=64:LASAR(323)=20:LASAR(326)=20:LASAR(332)=256:LASAR(333)=64:LASAR(335)=16385:LASAR(342)=5120:LASAR(344)=5120:LASAR(352)=16385
2030  LASAR(353)=256:LASAR(354)=64:LASAR(362)=20:LASAR(363)=20:LASAR(371)=256:LASAR(372)=16448:LASAR(381)=4096
2040  REM * INITIALIZE VARIABLES *
2050  M=INT(RND*61)+10:N=INT(RND*21)+10:O=INT(RND*32001)+70000!
2060  E=INT(RND*61)+10:F=INT(RND*21)+10:G=25000
2070  H=INT(RND*61)+10:I=INT(RND*21)+10:J=INT(RND*32001)+40000!
2080  Q=5:Z=3
2090  IMX=38:IMY=21:IMR1=1:IMR2=1
2100  DVX=38:DVY=21:DVR1=1:DVR2=1
2110  IF SKILL=0 THEN A1=5:A2=0:BYPASS=3
2120  IF SKILL=1 THEN A1=3:A2=0:BYPASS=2
2130  IF SKILL=2 THEN A1=2:A2=45:BYPASS=1
2140  IF SKILL=3 THEN A1=2:A2=30
2150 K$="5"
2160   LINE (1,1)-(76,42),3,B
2170  DRAW "C3;BM2,21;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+12,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0;BM+6,0;M+0,0"
2180  DRAW "C3;BM38,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,6;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0;BM+0,3;M+0,0"
2190  LOCATE 8,1:PRINT "REPUBLIC      X-WING     STAR FIGHTER"
2200  LOCATE 10,5:PRINT "TORPEDOES"
2210 LOCATE 12,1:PRINT "HOR.   VERT. DIRECTION"
2220  LOCATE 15,1:PRINT  "SPEED MACH"
2230  LOCATE 17,1:PRINT "RADAR TARGETS"
2240  LOCATE 18,8:PRINT "KM TO IMPERIAL FIGHTER"
2250  LOCATE 19,8:PRINT "KM TO DARTH VADER"
2260  LOCATE 20,8:PRINT "KM TO DEATH STAR"
2270  LOCATE 22,1:PRINT "TIME REMAINING"
2280  PLAY"T250"
2290   SEC1=VAL(RIGHT$(TIME$,2))
2300  GOSUB 1180
2310  REM * MASTER CONTROL ROUTINE *
2320  GOSUB 1190
2330  PUT (38,21),DS1
2340  LOCATE 10,1:PRINT Z
2350 LOCATE 13,1:PRINT W;"     ";-V
2360  LOCATE 15,12:PRINT Q*10
2370  GS=G-S:IF GS<0 THEN GS=0
2380  LOCATE 18,1:PRINT GS
2390  JS=J-S:IF JS<0 THEN JS=0
2400  LOCATE 19,1:PRINT JS
2410  OS=O-S:IF OS<0 THEN OS=0
2420  LOCATE 20,1:PRINT OS
2430  LOCATE 22,16:PRINT A1;":";A2NEW
2440  SOUND 37*Q,1
2450  PUT (38,21),DS1
2460  GOSUB 1180
2470  REM * DISPLAY DEATH STAR *
2480  IF O-S=30000 OR O-S>30000 GOTO 2840
2490  IF O-S<20000 AND DSTAR2=0 THEN DSTAR2=1:DSFLAG=1:DS(0)=DS2(0):DS(1)=DS2(1):DS(2)=DS2(2):DS(3)=DS2(3)
2500  IF O-S<10000 AND DSTAR3=0 THEN DSTAR3=1:DSFLAG=2:DS(0)=DS3(0):DS(1)=DS3(1):DS(2)=DS3(2):DS(3)=DS3(3)
2510  IF O-S<5000 AND DSTAR4=0 THEN DSTAR4=1:DSFLAG=3:DS(0)=DS4(0):DS(1)=DS4(1):DS(2)=DS4(2):DS(3)=DS4(3):DS(4)=DS4(4):DS(5)=DS4(5):DS(6)=DS4(6):DS(7)=DS4(7):DS(8)=DS4(8)
2520  IF FLAG1<>BYPASS THEN FLAG1=FLAG1+1:GOTO 2550
2530  FLAG1=0
2540  M=M+INT(RND*5)-2:N=N+INT(RND*5)-2
2550  M=M-W:N=N-V
2560  IF M<2  THEN  M=2+INT(RND*3)
2570  IF M>69 THEN  M=69-INT(RND*3)
2580  IF N<2  THEN  N=2+INT(RND*3)
2590  IF N>35 THEN  N=35-INT(RND*3)
2600  GOSUB 1190
2610  PUT (M,N),DS
2620  IF DSNEW=0 THEN DSNEW=1:GOTO 2680
2630  IF DSFLAG=0 GOTO 2670
2640  IF DSFLAG=1 THEN DSFLAG=0:PUT (MP,NP),DS1:GOTO 2680
2650  IF DSFLAG=2 THEN DSFLAG=0:PUT (MP,NP),DS2:GOTO 2680
2660  IF DSFLAG=3 THEN DSFLAG=0:PUT (MP,NP),DS3:GOTO 2680
2670  PUT(MP,NP),DS
2680  GOSUB 1180
2690  MP=M:NP=N
2700  IF O-S>10000 OR FLAG=1 GOTO 2840
2710  GOSUB 1190
2720  FOR K=1 TO 2
2730   LOCATE 24,1:PRINT "*** DEATH STAR WITHIN TORPEDO RANGE ***";
2740  PLAY "L2 N0"
2750   LOCATE 24,1:PRINT "                                       ";
2760  PLAY "L16 N0"
2770  NEXT K
2780   LOCATE 24,1:PRINT "*** DEATH STAR WITHIN TORPEDO RANGE ***";
2790   PLAY "L1 N0":PLAY "L1 N0"
2800   LOCATE 24,1:PRINT "                                       ";
2810  GOSUB 1180
2820  FLAG=1
2830  REM * DISPLAY IMPERIAL FIGHTER *
2840  GOSUB 1190
2850  IF G-S>26000 THEN GOSUB 1180:GOTO 3910
2860  IF G-S<20000 AND IMPFIGH2=0 THEN IMPFIGH2=1:IMFLAG=1:IM(0)=IM2(0):IM(1)=IM2(1):IM(2)=IM2(2):IM(3)=IM2(3):IMX=37:IMY=20:IMR1=2:IMR2=2
2870  IF G-S<10000 AND IMPFIGH3=0 THEN IMPFIGH3=1:IMFLAG=2:IM(0)=IM3(0):IM(1)=IM3(1):IM(2)=IM3(2):IM(3)=IM3(3):IM(4)=IM3(4):IM(5)=IM3(5):IM(6)=IM3(6):IMX=35:IMY=19:IMR1=4:IMR2=3
2880  IF FLAG2<>BYPASS THEN FLAG2=FLAG2+1:GOTO 2910
2890  FLAG2=0
2900 E=E+INT(RND*5)-2:F=F+INT(RND*5)-2
2910 E=E-W:F=F-V
2920 IF E<2  THEN  E=2+INT(RND*3)
2930 IF E>69 THEN  E=69-INT(RND*3)
2940 IF F<2  THEN  F=2+INT(RND*3)
2950 IF F>37 THEN  F=37-INT(RND*3)
2960  PUT (E,F),IM
2970  IF IMNEW=0 THEN IMNEW=1:GOTO 3020
2980  IF IMFLAG=0 GOTO 3010
2990  IF IMFLAG=1 THEN IMFLAG=0:PUT (EP,FP),IM1:GOTO 3020
3000  IF IMFLAG=2 THEN IMFLAG=0:PUT (EP,FP),IM2:GOTO 3020
3010  PUT (EP,FP),IM
3020  GOSUB 1180
3030  EP=E:FP=F
3040  IF G-S>5000 OR FLAG3=1 GOTO 3170
3050  GOSUB 1190
3060  FOR K=1 TO 2
3070  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER ATTACKS ****";
3080  PLAY "L2 N0"
3090  LOCATE 24,1:PRINT "                                  ";
3100  PLAY "L16 N0"
3110  NEXT K
3120  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER ATTACKS ****";
3130  PLAY "L1 N0":PLAY "L1 N0"
3140  LOCATE 24,1:PRINT "                                  ";
3150  GOSUB 1180
3160  FLAG3=1
3170 IF G>S THEN GOTO 3910
3180  REM * IMPERIAL FIGHTER ATTACKS *
3190  FLAG3=0:IMNEW=0:IMNEW1=0:IMPFIGH2=0:IMPFIGH3=0:PUT (E,F),IM
3200  GOSUB 1190
3210  DELTAX=29-E:DELTAY=19-F
3220  IF DELTAX>0 THEN E=E+1
3230  IF DELTAX<0 THEN E=E-1
3240  IF DELTAY>0 THEN F=F+1
3250  IF DELTAY<0 THEN F=F-1
3260  IF DELTAX=0 AND DELTAY=0 GOTO 3320
3270  PUT (E,F),IM:IF IMNEW1=0 THEN IMNEW1=1:GOTO 3290
3280  PUT (EP,FP),IM
3290  EP=E:FP=F
3300  PLAY "P32"
3310  GOTO 3210
3320  PUT (EP-4,FP-1),IM4
3330  PUT (EP,FP),IM
3340  PLAY "P4"
3350  PUT (EP-9,FP-2),IM5
3360  PUT (EP-4,FP-1),IM4
3370  PLAY "P4"
3380  PUT (EP-12,FP-6),IM6
3390  PUT (EP-9,FP-2),IM5
3400  PLAY "P4"
3410  PUT (EP-9,FP-7),IM7
3420  PUT (EP-12,FP-6),IM6
3430  PLAY "P4"
3440  PUT (EP-20,FP-14),IM8
3450  PUT (EP-9,FP-7),IM7
3460  PLAY "P4"
3470  PUT (EP-20,FP-14),IM8
3480  FOR J2=10000 TO 100 STEP -500
3490  SOUND J2,.001*18.2
3500  NEXT J2
3510  FOR A=1 TO 50:NEXT A
3520  FOR J2=10000 TO 100 STEP -500
3530  SOUND J2,.001*18.2
3540  NEXT J2
3550  G=G+25000
3560  E=INT(RND*61)+10:F=INT(RND*21)+10
3570  K=INT(RND*10)
3580  IF K>SKILL  THEN 3790
3590  KEY(1) OFF:KEY(2) OFF:KEY(11) OFF:KEY(12) OFF:KEY(13) OFF:KEY(14) OFF
3600  CLS
3610  PRINT  "BLAM!"
3620  FOR J2=1000 TO 37 STEP -10
3630  SOUND J2,.01*18.2
3640  NEXT J2
3650  PRINT
3660  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
3670  PRINT"YOU HAVE JUST BEEN SHOT DOWN BY AN";
3680  PRINT"IMPERIAL SKY FIGHTER!"
3690  PRINT
3700  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
3710  PRINT"YOU ARE A HERO!"
3720  PRINT
3730  PRINT"UNFORTUNATELY, YOU ARE A DEAD HERO AND";
3740  PRINT"DEAD HEROES DON'T WIN WARS. DARTH VADER";
3750  PRINT"WINS!"
3760  PRINT
3770  PRINT"*********   YOU   LOSE!!   *********"
3780   GOTO  5310
3790  FOR K=1 TO 2
3800  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER MISSED ****";
3810  PLAY "L2 N0"
3820  LOCATE 24,1:PRINT "                                 ";
3830  PLAY "L16 N0"
3840  NEXT K
3850  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER MISSED ****";
3860  PLAY "L1 N0":PLAY "L1 N0"
3870  LOCATE 24,1:PRINT "                                 ";
3880  IM(0)=IM1(0):IM(1)=IM1(1):IM(2)=IM1(2):IM(3)=IM1(3):IM(4)=IM1(4):IM(5)=IM1(5):IM(6)=IM1(6)
3890  GOSUB 1180
3900  REM * DISPLAY DARTH VADER *
3910  GOSUB 1190
3920  IF J-S>26000 THEN GOSUB 1180:GOTO 5140
3930  IF J-S<20000 AND DVADER2=0 THEN DVADER2=1:DVFLAG=1:DV(0)=DV2(0):DV(1)=DV2(1):DV(2)=DV2(2):DV(3)=DV2(3):DVX=37:DVY=20:DVR1=2:DVR2=2
3940  IF J-S<10000 AND DVADER3=0 THEN DVADER3=1:DVFLAG=2:DV(0)=DV3(0):DV(1)=DV3(1):DV(2)=DV3(2):DV(3)=DV3(3):DV(4)=DV3(4):DV(5)=DV3(5):DV(6)=DV3(6):DVX=35:DVY=19:DVR1=4:DVR2=3
3950  IF FLAG2<>BYPASS THEN FLAG2=FLAG2+1:GOTO 3980
3960  FLAG2=0
3970 H=H+INT(RND*5)-2:I=I+INT(RND*5)-2
3980 H=H-W:I=I-V
3990 IF H<2  THEN  H=2+INT(RND*3)
4000 IF H>69 THEN  H=69-INT(RND*3)
4010 IF I<2  THEN  I=2+INT(RND*3)
4020 IF I>37 THEN  I=37-INT(RND*3)
4030  PUT (H,I),DV
4040  IF DVNEW=0 THEN DVNEW=1:GOTO 4090
4050  IF DVFLAG=0 GOTO 4080
4060  IF DVFLAG=1 THEN DVFLAG=0:PUT (HP,IP),DV1:GOTO 4090
4070  IF DVFLAG=2 THEN DVFLAG=0:PUT (HP,IP),DV2:GOTO 4090
4080  PUT (HP,IP),DV
4090  GOSUB 1180
4100  HP=H:IP=I
4110  IF J-S>5000 OR FLAG4=1 GOTO 4350
4120  GOSUB 1190
4130  IF DVGONE=0 GOTO 4240
4140  FOR K=1 TO 2
4150  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER ATTACKS ****";
4160  PLAY "L2 N0"
4170  LOCATE 24,1:PRINT "                                  ";
4180  PLAY "L16 N0"
4190  NEXT K
4200  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER ATTACKS ****";
4210  PLAY "L1 N0":PLAY "L1 N0"
4220  LOCATE 24,1:PRINT "                                  ";
4230  GOTO 4330
4240  FOR K=1 TO 2
4250  LOCATE 24,1:PRINT "**** DARTH VADER ATTACKS ****";
4260  PLAY "L2 N0"
4270  LOCATE 24,1:PRINT "                             ";
4280  PLAY "L16 N0"
4290  NEXT K
4300  LOCATE 24,1:PRINT "**** DARTH VADER ATTACKS ****";
4310  PLAY "L1 N0":PLAY "L1 N0"
4320  LOCATE 24,1:PRINT "                             ";
4330  FLAG4=1
4340  GOSUB 1180
4350  IF J>S THEN GOTO 5140
4360  REM * DARTH VADER ATTACKS *
4370  FLAG4=0:DVNEW=0:DVNEW1=0:DVADER2=0:DVADER3=0:PUT (H,I),DV
4380  GOSUB 1190
4390  DELTAX=41-H:DELTAY=19-I
4400  IF DELTAX>0 THEN H=H+1
4410  IF DELTAX<0 THEN H=H-1
4420  IF DELTAY>0 THEN I=I+1
4430  IF DELTAY<0 THEN I=I-1
4440  IF DELTAX=0 AND DELTAY=0 GOTO 4500
4450  PUT (H,I),DV:IF DVNEW1=0 THEN DVNEW1=1:GOTO 4470
4460  PUT (HP,IP),DV
4470  HP=H:IP=I
4480  PLAY "P32"
4490  GOTO 4390
4500  IF DVGONE=0 THEN PUT(HP,IP-1),DV4 ELSE PUT(HP,IP-1),IM4
4510  PUT (HP,IP),DV
4520  PLAY "P4"
4530  IF DVGONE=0 THEN PUT(HP+3,IP-2),DV5 ELSE PUT(HP+3,IP-2),IM5
4540  IF DVGONE=0 THEN PUT(HP,IP-1),DV4 ELSE PUT(HP,IP-1),IM4
4550  PLAY "P4"
4560  IF DVGONE=0 THEN PUT(HP+2,IP-6),DV6 ELSE PUT(HP+2,IP-6),IM6
4570  IF DVGONE=0 THEN PUT(HP+3,IP-2),DV5 ELSE PUT(HP+3,IP-2),IM5
4580  PLAY "P4"
4590  IF DVGONE=0 THEN PUT(HP+1,IP-6),DV7 ELSE PUT(HP+1,IP-6),IM7
4600  IF DVGONE=0 THEN PUT(HP+2,IP-6),DV6 ELSE PUT(HP+2,IP-6),IM6
4610  PLAY "P4"
4620  IF DVGONE=0 THEN PUT(HP+2,IP-6),DV8 ELSE PUT(HP+2,IP-6),IM8
4630  IF DVGONE=0 THEN PUT(HP+1,IP-6),DV7 ELSE PUT(HP+1,IP-6),IM7
4640  PLAY "P4"
4650  IF DVGONE=0 THEN PUT(HP+2,IP-6),DV8 ELSE PUT(HP+2,IP-6),IM8
4660  FOR J2=10000 TO 100 STEP -500
4670  SOUND J2,.001*18.2
4680  NEXT J2
4690  FOR A=1 TO 50:NEXT A
4700  FOR J2=10000 TO 100 STEP -500
4710  SOUND J2,.001*18.2
4720  NEXT J2
4730  J=J+25000
4740 H=INT(RND*61)+10:I=INT(RND*21)+10
4750  K=INT(RND*10)
4760  IF K>SKILL+1  THEN 4910
4770  KEY(1) OFF:KEY(2) OFF:KEY(11) OFF:KEY(12) OFF:KEY(13) OFF:KEY(14) OFF
4780  CLS:PRINT "****  B O O M !  ****"
4790  FOR J2=1000 TO 37 STEP -10
4800  SOUND J2,.01*18.2
4810  NEXT J2
4820  PRINT
4830  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
4840  IF DVGONE=1 THEN PRINT"TOO BAD.  YOU HAVE BEEN SHOT DOWN.":GOTO 4880
4850  PRINT"YOU HAVE JUST BEEN PERSONALLY SHOT DOWN";
4860  PRINT"BY DARTH VADER.  THE FORCE WAS NOT WITH";
4870  PRINT"YOU."
4880  PRINT
4890  PRINT"*********   YOU   LOSE!!   *********"
4900   GOTO  5310
4910  IF DVGONE=0 GOTO 5030
4920  FOR K=1 TO 2
4930  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER MISSED ****";
4940  PLAY "L2 N0"
4950  LOCATE 24,1:PRINT "                                 ";
4960  PLAY "L16 N0"
4970  NEXT K
4980  LOCATE 24,1:PRINT "**** IMPERIAL FIGHTER MISSED ****";
4990  PLAY "L1 N0":PLAY "L1 N0"
5000  LOCATE 24,1:PRINT "                                 ";
5010  DV(0)=DV1(0):DV(1)=DV1(1):DV(2)=DV1(2):DV(3)=DV1(3)
5020  GOTO 5140
5030  FOR K=1 TO 2
5040  LOCATE 24,1:PRINT "**** DARTH VADER MISSED ****";
5050  PLAY "L2 N0"
5060  LOCATE 24,1:PRINT "                            ";
5070  PLAY "L16 N0"
5080  NEXT K
5090  LOCATE 24,1:PRINT "**** DARTH VADER MISSED ****";
5100  PLAY "L1 N0":PLAY "L1 N0"
5110  LOCATE 24,1:PRINT "                            ";
5120  DV(0)=DV1(0):DV(1)=DV1(1):DV(2)=DV1(2):DV(3)=DV1(3):DV(4)=DV1(4):DV(5)=DV1(5):DV(6)=DV1(6)
5130  REM * X - WING FIGHTER ROUTINE *
5140  GOSUB 1180
5150 Z$=INKEY$
5160 IF VAL(Z$)>0 AND VAL(Z$)<10   THEN  Q=VAL(Z$)
5170  S=S+Q*100
5180  IF S>O  GOTO 6410
5190  REM * TIME ROUTINE *
5200   SEC2=VAL(RIGHT$(TIME$,2))
5210   SECNEW=SEC2
5220   IF SECNEW=SECOLD GOTO 5280
5230   IF SECNEW<SECOLD THEN N8=N8+1
5240   SECOLD=SEC2
5250   A2NEW=A2-(SEC2+(60*N8)-SEC1)
5260   IF A2NEW<0 THEN A2NEW=A2NEW+60:A1=A1-1:A2=A2+60
5270   IF A1<0 GOTO 6760
5280   GOTO   2320
5290  REM * DISPLAY SKY FIGHTER *
5300  IF J-S<10000 THEN A=3
5310  REM * NEW GAME *
5320   PRINT
5330 PRINT "HIT ENTER TO PLAY AGAIN, ESC TO GIVE UP"
5340 B$=INKEY$:IF B$=CHR$(13) THEN GOTO 1300 ELSE IF B$=CHR$(27) THEN CLS:WIDTH 80:SCREEN 0:KEY ON:END ELSE GOTO 5340
5350  REM * FIRE CANNON *
5360  KEY(2) STOP:KEY(11) STOP:KEY(12) STOP:KEY(13) STOP:KEY(14) STOP
5370  PUT (2,2),LASAR
5380  FOR J2=5000 TO 100 STEP -250
5390    SOUND J2,.01*18.2
5400  NEXT J2
5410  PUT (2,2),LASAR
5420  IF G-S<26000 AND ABS(IMX-E)<IMR1 AND ABS(IMY-F)<IMR2 GOTO 5450
5430  IF J-S<26000 AND ABS(DVX-H)<DVR1 AND ABS(DVY-I)<DVR2 GOTO 5580
5440  GOTO 5730
5450  FOR I9=1 TO 2:PUT (E-2,F-3),EXPL3:PLAY "P64":PUT (E-2,F-3),EXPL3:NEXT I9
5460  FOR I9=1 TO 2:PUT (E-2,F-3),EXPL4:PLAY "P64":PUT (E-2,F-3),EXPL4:NEXT I9
5470  PUT (E,F),IM
5480  IF IMR2=1 GOTO 5540
5490  FOR I9=1 TO 2:PUT (E-2,F-3),EXPL5:PLAY "P64":PUT (E-2,F-3),EXPL5:NEXT I9
5500  FOR I9=1 TO 2:PUT (E-2,F-3),EXPL6:PLAY "P64":PUT (E-2,F-3),EXPL6:NEXT I9
5510  IF IMR2=2 GOTO 5540
5520  FOR I9=1 TO 2:PUT (E-2,F-3),EXPL7:PLAY "P64":PUT (E-2,F-3),EXPL7:NEXT I9
5530  FOR I9=1 TO 2:PUT (E-2,F-3),EXPL8:PLAY "P64":PUT (E-2,F-3),EXPL8:NEXT I9
5540  G=G+25000:E=INT(RND*61)+10:F=INT(RND*21)+10:FLAG3=0:IMNEW=0:IMPFIGH2=0:IMPFIGH3=0
5550  IMX=38:IMY=21:IMR1=1:IMR2=1
5560  IM(0)=IM1(0):IM(1)=IM1(1):IM(2)=IM1(2):IM(3)=IM1(3):IM(4)=IM1(4):IM(5)=IM1(5):IM(6)=IM1(6)
5570  GOTO 5730
5580  FOR I9=1 TO 2:PUT (H-2,I-3),EXPL3:PLAY "P64":PUT (H-2,I-3),EXPL3:NEXT I9
5590  FOR I9=1 TO 2:PUT (H-2,I-3),EXPL4:PLAY "P64":PUT (H-2,I-3),EXPL4:NEXT I9
5600  PUT (H,I),DV
5610  IF DVR2=1 GOTO 5670
5620  FOR I9=1 TO 2:PUT (H-2,I-3),EXPL5:PLAY "P64":PUT (H-2,I-3),EXPL5:NEXT I9
5630  FOR I9=1 TO 2:PUT (H-2,I-3),EXPL6:PLAY "P64":PUT (H-2,I-3),EXPL6:NEXT I9
5640  IF DVR2=2 GOTO 5670
5650  FOR I9=1 TO 2:PUT (H-2,I-3),EXPL7:PLAY "P64":PUT (H-2,I-3),EXPL7:NEXT I9
5660  FOR I9=1 TO 2:PUT (H-2,I-3),EXPL8:PLAY "P64":PUT (H-2,I-3),EXPL8:NEXT I9
5670  J=J+25000:H=INT(RND*61)+10:I=INT(RND*21)+10:FLAG4=0:LOCATE 19,8:PRINT "KM TO IMPERIAL FIGHTER";
5680  DVNEW=0:DVADER2=0:DVADER3=0
5690  DVX=38:DVY=21:DVR1=1:DVR2=1
5700  IF DVGONE=0 THEN DV3(0)=IM3(0):DV3(1)=IM3(1):DV3(2)=IM3(2):DV3(3)=IM3(3):DV3(4)=IM3(4):DV3(5)=IM3(5):DV3(6)=IM3(6)
5710  DV(0)=DV1(0):DV(1)=DV1(1):DV(2)=DV1(2):DV(3)=DV1(3):DV(4)=DV1(4):DV(5)=DV1(5):DV(6)=DV1(6)
5720  DVGONE=1
5730  KEY(2) ON:KEY(11) ON:KEY(12) ON:KEY(13) ON:KEY(14) ON
5740  RETURN
5750  REM * FIRE  TORPEDO *
5760  KEY(1) STOP:KEY(11) STOP:KEY(12) STOP:KEY(13) STOP:KEY(14) STOP
5770  IF Z=0  THEN 3600
5780  FOR J2=1500 TO 100 STEP -20
5790    SOUND J2,.01*18.2
5800    SOUND 3600-J2,.01*18.2
5810  NEXT J2
5820  Z=Z-1
5830  IF O-S>10000  THEN 5990
5840  IF POINT(38,21)<>3 THEN 5880
5850  IF SKILL=0 GOTO 6100
5860  K=INT(RND*10)
5870  IF K>SKILL+1  THEN 6100
5880   FOR K=1 TO 2
5890  LOCATE 24,1:PRINT "**** TORPEDO  MISSED  ****";
5900  PLAY "L2 N0"
5910  LOCATE 24,1:PRINT "                          ";
5920  PLAY "L16 N0"
5930   NEXT K
5940  LOCATE 24,1:PRINT "**** TORPEDO  MISSED  ****";
5950  PLAY "L1 N0":PLAY "L1 N0"
5960  LOCATE 24,1:PRINT "                          ";
5970  IF Z<=0  THEN 4780
5980  GOTO 6080
5990 FOR K=1 TO 2
6000  LOCATE 24,1:PRINT "**** OUT  OF  RANGE  ****";
6010  PLAY "L2 N0"
6020  LOCATE 24,1:PRINT "                         ";
6030  PLAY "L16 N0"
6040 NEXT K
6050  LOCATE 24,1:PRINT "**** OUT  OF  RANGE  ****";
6060  PLAY "L1 N0":PLAY "L1 N0"
6070  LOCATE 24,1:PRINT "                         ";
6080  KEY(1) ON:KEY(11) ON:KEY(12) ON:KEY(13) ON:KEY(14) ON
6090   RETURN
6100  REM * GAME WON *
6110  KEY(1) OFF:KEY(2) OFF:KEY(11) OFF:KEY(12) OFF:KEY(13) OFF:KEY(14) OFF
6120  FOR SCALE=1 TO 24
6130  DRAW"C3;S=SCALE;BM38,21;NM+6,0;NM-6,0;NM+0,-3;NM+0,3;NM-6,3;NM+6,-3;NM-6,-3;NM+6,3;NM+3,-3;NM-3,3;NM+3,3;NM-3,-3;NM+6,2;NM-6,-2;NM-6,1;NM+6,-1;NM+1,3;NM-1,-3"
6140  NEXT SCALE
6150  CLS
6160  FOR K=1 TO 5
6170  SOUND 37,.1*18.2
6180  SCREEN 0:WIDTH 40
6190  FOR A=1 TO 10:NEXT A
6200  SCREEN 1:WIDTH 80
6210  NEXT K
6220  WIDTH 40
6230  CLS:PRINT:PRINT:PRINT
6240  PRINT"* * * * * * * * * * * * * * * * * * * *";
6250  PRINT"*                                     *";
6260  PRINT"*                                     *";
6270  PRINT"*    THE  FORCE  IS  WITH  YOU  !!    *";
6280  PRINT"*                                     *";
6290  PRINT"* YOU HAVE DESTROYED THE DEATH STAR ! *";
6300  PRINT"*                                     *";
6310  PRINT"*    YOU HAVE SAVED THE REPUBLIC !    *";
6320  PRINT"*                                     *";
6330  PRINT"* PRINCESS LEAH WILL LOVE YOU ALWAYS! *";
6340  PRINT"*                                     *";
6350  PRINT"* * * * * * * * * * * * * * * * * * * *"
6360  SOUND 525.25,18.2:SOUND 783.99,18.2/2:SOUND 698.46,18.2/6:SOUND 659.26,18.2/6:SOUND 587.33,18.2/6:SOUND 1046.6,18.2:SOUND 783.99,18.2/2:SOUND 698.46,18.2/6:SOUND 659.26,18.2/6:SOUND 587.33,18.2/6
6370  SOUND 1046.5,18.2:SOUND 783.99,18.2/2:SOUND 698.46,18.2/6:SOUND 659.26,18.2/6:SOUND 698.46,18.2/6:SOUND 587.33,18.2
6380  PRINT
6390  GOTO   5310
6400  REM * COLLISION WITH DEATH STAR *
6410 KEY(1) OFF:KEY(2) OFF:KEY(11) OFF:KEY(12) OFF:KEY(13) OFF:KEY(14) OFF
6420  DELTAX=35-M:DELTAY=18-N
6430  IF DELTAX>0 THEN M=M+1
6440  IF DELTAX<0 THEN M=M-1
6450  IF DELTAY>0 THEN N=N+1
6460  IF DELTAY<0 THEN N=N-1
6470  IF DELTAX=0 AND DELTAY=0 GOTO 6530
6480  PUT (M,N),DS
6490  PUT (MP,NP),DS
6500  MP=M:NP=N
6510  PLAY "P32"
6520  GOTO 6420
6530  FOR RAD=4 TO 20
6540  CIRCLE(38,21),RAD,3
6550  PLAY "P32"
6560  NEXT RAD
6570  CLS:PRINT "CRASH"
6580  FOR J2=1000 TO 37 STEP -10
6590  SOUND J2,.01*18.2
6600  NEXT J2
6610  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
6620  PRINT
6630  PRINT"DARTH VADER IS LAUGHING AT YOU."
6640  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
6650  PRINT
6660  PRINT"YOU HAVE JUST COLLIDED WITH THE DEATH";
6670  PRINT"STAR.  THEY DID NOT EVEN HEAR THE";
6680  PRINT"COLLISION.  YOU DID NOT EVEN SCRATCH";
6690  PRINT"THE DEATH STAR'S PAINT, BUT YOU ARE   ";
6700  PRINT"DEAD!"
6710  PRINT
6720  PRINT"*********   YOU  LOSE!!   *********"
6730  PRINT
6740   GOTO  5310
6750  REM * OUT OF TIME *
6760  KEY(1) OFF:KEY(2) OFF:KEY(11) OFF:KEY(12) OFF:KEY(13) OFF:KEY(14) OFF
6770  CLS:PRINT "TOO LATE!"
6780  FOR J2=1000 TO 37 STEP -10
6790  SOUND J2,.01*18.2
6800  NEXT J2
6810  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
6820  PRINT
6830  PRINT"DARTH VADER IS LAUGHING AT YOU."
6840  PLAY "L1 N0":PLAY "L1 N0":PLAY "L1 N0"
6850  PRINT
6860  PRINT"THE DEATH STAR HAS JUST DESTROYED";
6870  PRINT"PRINCESS LEAH AND THE ENTIRE REBEL";
6880  PRINT"STRONGHOLD";
6890  PRINT
6900  PRINT"*********   YOU  LOSE!!   *********"
6910  PRINT
6920   GOTO  5310
6930  CLS
6940  PRINT"       STAR  PILOT  INSTRUCTIONS"
6950  PRINT
6960  PRINT"    THE DEATH  STAR SPACE STATION, UNDER";
6970  PRINT"THE COMMAND OF DARTH  VADER, IS THE MOST";
6980  PRINT"POWERFUL  WEAPON  THE UNIVERSE  HAS EVER";
6990  PRINT"KNOWN.   A FRONTAL  ATTACK BY  ANY OTHER";
7000  PRINT"CRAFT WOULD BE ABSOLUTE SUICIDE. HOWEVER";
7010  PRINT"INTELLIGENCE DELIVERED  TO  OUR REPUBLIC";
7020  PRINT"HEADQUARTERS  BY  THE  ANDROIDS R2D2 AND";
7030  PRINT"C3PO GIVES A FAINT  HOPE OF A SUCCESSFUL";
7040  PRINT"ATTACK  BY A SMALL ONE OR TWO  PASSENGER";
7050  PRINT"X-WING FIGHTER."
7060  PRINT
7070  PRINT"    THERE IS A SMALL, UNSHIELDED EXHAUST";
7080  PRINT"PORT  ON  THE  SURFACE OF THE DEATH STAR";
7090  PRINT"THAT LEADS DIRECTLY TO THE MAIN REACTOR.";
7100  PRINT"SINCE IT IS AN EMERGENCY THERMAL PORT IN";
7110  PRINT"CASE THE REACTOR OVERHEATS, IT COULD NOT";
7120  PRINT"BE SHIELDED."
7130  PRINT
7140  INPUT"     (PRESS ENTER  TO  CONTINUE)",B$
7150  CLS
7160  PRINT
7170  PRINT"    IF YOU CAN  SLIP YOUR  SMALL FIGHTER";
7180  PRINT"PAST THE  DEATH STAR'S DEFENSES AND MAKE";
7190  PRINT"A DIRECT HIT ON THE THERMAL EXHAUST PORT";
7200  PRINT"WITH  A  TORPEDO, THERE IS A CHANCE THAT";
7210  PRINT"THE  TORPEDO  WILL   PENETRATE  TO   THE";
7220  PRINT"MAIN REACTOR AND START A CHAIN REACTION,";
7230  PRINT"DESTROYING THE DEATH STAR."
7240  PRINT
7250  PRINT"    IT IS A SLIM  CHANCE,  BUT IT IS THE";
7260  PRINT"ONLY  HOPE  THE  REPUBLIC HAS.   OBI-WAN";
7270  PRINT"KENOBI GAVE  HIS LIFE TO GET THE MESSAGE";
7280  PRINT"HERE, SO HE CONSIDERED IT IMPORTANT."
7290  PRINT:PRINT:PRINT:PRINT
7300  PRINT"PRESS ENTER FOR X-WING FIGHTER          ";
7310  INPUT"      FAMILIARIZATION",B$
7320  CLS
7330  PRINT"        REPUBLIC  X-WING  FIGHTER       "
7340  PRINT
7350  PRINT"     THE X-WING  FIGHTER IS A SMALL  ONE";
7360  PRINT"MAN  SPACESHIP  THAT IS,  QUITE FRANKLY,";
7370  PRINT"OBSOLETE.  IT IS ARMED ONLY WITH A LASER";
7380  PRINT"CANNON  AND  THREE  TORPEDOES.   USE THE";
7390  PRINT"LASER CANNON  TO  FIGHT OFF ANY IMPERIAL";
7400  PRINT"FIGHTERS AND SAVE THE  TORPEDOES FOR THE";
7410  PRINT"DEATH STAR."
7420  PRINT
7430  PRINT"     THE  TARGET  ACQUISITION  RADAR CAN";
7440  PRINT"DETECT IN  EXCESS OF  100,000 KILOMETERS";
7450  PRINT"AWAY, BUT CAN ONLY DISPLAY TARGETS WITH-";
7460  PRINT"IN  20,000 KM.   THEREFORE,  YOU WILL BE";
7470  PRINT"WARNED OF APPROACHING  TARGETS  ON  YOUR";
7480  PRINT"CONTROL PANEL  BEFORE THEY ARE DISPLAYED";
7490  PRINT"ON THE RADAR SCREEN."
7500  PRINT
7510  INPUT"     (PRESS ENTER  TO  CONTINUE)",B$
7520  CLS
7530  PRINT
7540  PRINT"     THE LASER  CANNON IS AN  ANTIQUATED";
7550  PRINT"WEAPON.  TO  HIT AN ENEMY, YOU MUST HAVE";
7560  PRINT"HIM  IN THE  EXACT CENTER  OF THE  CROSS";
7570  PRINT"HAIRS ON YOUR RADAR SCREEN. THEN YOU MAY";
7580  PRINT"FIRE THE  LASER CANNON BY  TYPING THE F1";
7590  PRINT"KEY ON YOUR CONTROL PANEL."
7600  PRINT
7610  PRINT"     YOUR  THREE  TORPEDOES ARE COMPUTER";
7620  PRINT"GUIDED,  BUT ALSO QUITE  LIMITED.   MAKE";
7630  PRINT"SURE THAT YOU ARE WITHIN 10000 KM OF THE";
7640  PRINT"DEATH STAR  AND THAT YOU HAVE  SOME PART";
7650  PRINT"OF  THE SPACE STATION  IN THE CENTER  OF";
7660  PRINT"THE  CROSS HAIRS  ON YOUR  RADAR SCREEN.";
7670  PRINT"EVEN THEN,  SINCE IT TAKES A PERFECT HIT";
7680  PRINT"ON THE EXHAUST PORT TO DESTROY THE DEATH";
7690  PRINT"STAR,  YOU  MAY  REQUIRE  MORE  THAN ONE";
7700  PRINT"TORPEDO.   TYPE THE  F2  KEY TO FIRE THE";
7710  PRINT"TORPEDO."
7720  PRINT
7730  INPUT"    (PRESS ENTER  TO  CONTINUE)",B$
7740  CLS
7750  PRINT
7760  PRINT"    THE SPEED OF YOUR SHIP IS CONTROLLED";
7770  PRINT"BY TYPING THE NUMBERS  1 THROUGH 9  (FOR";
7780  PRINT"MACH  10 THROUGH 90  RESPECTIVELY).  THE";
7790  PRINT"MOVEMENT OF YOUR  SHIP IS  CONTROLLED BY";
7800  PRINT"THE CURSOR CONTROLS.  SINCE THESE INPUTS";
7810  PRINT"MOVE YOUR SHIP  AND NOT THE TARGETS, THE";
7820  PRINT"TARGETS APPEAR  TO  MOVE IN THE OPPOSITE";
7830  PRINT"DIRECTION.   ALSO, YOU  CAN  EXPECT  THE";
7840  PRINT"ENEMY TO TAKE EVASIVE ACTION."
7850  PRINT
7860  PRINT"    WHEN SELECTING THE SKILL LEVEL, 0 IS";
7870  PRINT"THE EASIEST  GAME AND 3 IS THE  HARDEST.";
7880  PRINT"SKILL LEVEL  0  PROVIDES THE BEST CHANCE";
7890  PRINT"OF BEING  MISSED BY THE  FIGHTERS AND OF";
7900  PRINT"HITTING  THE DEATH STAR.  LEVEL  0  ALSO";
7910  PRINT"PROVIDES  THE LARGEST  TIME LIMIT BEFORE";
7920  PRINT"THE DEATH STAR DESTROYS THE REBEL BASE."
7930  PRINT
7940  PRINT
7950  INPUT"PRESS ENTER FOR  TAKE-OFF",B$
7960  CLS
7970  PRINT"****************************************"
7980  PRINT
7990  PRINT"    MAY  THE  FORCE  BE  WITH  YOU"
8000  PRINT
8010  PRINT"****************************************"
8020  PLAY "L1 N0":PLAY "L1 N0"
8030   GOTO   1300
```
{% endraw %}

## ZORK1.DOC

{% raw %}
```

            Zork 1 tutorial, compliments of the Mystic Caverns
                ****  Can be downloaded as BULLET4   ****
                            Apples can to!!

      So,  you're all set for The Great Underground Empire,  eh?  Okay, but 
   before we begin,  a few words about this walkthru.  First,  this is  not 
   the  only  way  to  solve  the  game.  It's just one of the faster ones.  
   Second,  because there is no "wasted motion" in this game,  you will not 
   be  visiting all the loc

            Zork 1 tutorial, compliments of the Mystic Caverns
                ****  Can be downloaded as BULLET4   ****
                            Apples can to!!

      So,  you're all set for The Great Underground Empire,  eh?  Okay, but 
   before we begin,  a few words about this walkthru.  First,  this is  not 
   the  only  way  to  solve  the  game.  It's just one of the faster ones.  
   Second,  because there is no "wasted motion" in this game,  you will not 
   be  visiting all the locations.  So,  you might want to play around with 
   the game on your own for a while,  mapping  out  as  much  as  you  can, 
   without much regard for gathering treasures. 
      Actually,  mapping  is  a  good  idea,  since,  if you make a misstep 
   somewhere, you might find yourself in trouble!  Be especially careful to 
   follow the directions when in the mazes;  a wrong move  there,  and  you 
   could be lost for quite some time! 
       Finally, you may not go through this in exactly the way it's written 
   because of the thief.  He is a variable item in the game; you never know 
   where  he  will show up.  Try to move out of the room he's in as soon as 
   he shows up.  But keep in mind that even if he does steal anything  from 
   you,  you  will get it all back from him in the end.  Okay?  Let's start 
   the adventure! 
       You begin West of the house,  and your first chore is to get inside.  
   So,  go  South and East.  Open the window and enter the house (you're in 
   the kitchen) ,  then go West into the living room.  Get the  lamp,  then 
   move the rug,  revealing the trap door.  Open the trap door, turn on the 
   lamp, and go down.  At this point,  some mysterious person will shut the 
   door on you; don't worry about that for now. 
        Okay,  so  here  you  are in the cellar.  It's time to pick up your 
   first treasure,  so  go  South,  then  East  to  the  Gallery.  Get  the 
   painting, then continue North to the Studio.  Go up the chimney (you can 
   only fit with the lamp and the painting), and you will be in the kitchen 
   again.  Now, go upstairs to the attic, and get the knife and rope.  Come 
   back down and go into the living room. 
        Open  the  case and put the painting inside.  Then,  drop the knife 
   and get the sword.  Open the trap door again,  and return to the cellar.  
   Again,  the door is shut by someone (you never will find out who's doing 
   this, but it doesn't matter).  Now you're back in the cellar,  and since 
   we're  coming to one of the more dangerous parts of the game,  you might 
   want to do a save here. 
        Gripping your  trusty  sword,  head  North  into  the  Troll  room.  
   There's  a nasty troll here with a bloody axe,  and the only way past is 
   to kill him.  So,  do just that:  "Kill Troll With Sword." It will  most 
   likely take more than one attempt, so keep at it, and eventually he will 
   disappear in a cloud of black smoke.  Now,  drop the sword,  because you 
   really don't need it any more, and it will hinder you in carrying other, 
   more important items. 
        Having dispatched the troll,  you move along East,  East (into  the 
   Round  room),  then  SE and East.  You are now in the Dome room.  It's a 
   long way down,  and too far to jump,  so here's where the rope comes  in 
   handy.  Tie the rope to the railing, then climb down the rope.  You will 
   be  in  the Torch room.  Leave the torch for now;  you'll be coming back 
   this way again later. 
        From the Torch room,  go South,  then  East  and  get  the  coffin.  
   Return  West,  then  continue South to the Altar.  There's no way you're 
   going to get down that hole with the coffin,  and even the program  will 
   tell  you  that  you haven't got a prayer.  That's a hint,  folks:  Just 
   "Pray," and you will find yourself  in  the  forest  again.  Since  it's 
   daylight out, save energy and turn off the lamp. 
        Now,  head along South,  then North (I know,  but it works!) to the 
   clearing,  then East to the Canyon View.  Climb al l the way down to the 
   bottom,  then  go  North to Rainbow's End.  Drop the coffin and open it.  
   Inside is a jeweled sceptre.  Get that,  and wave it.  The rainbow  will 
   become  solid  (you'll  need  to  cross over from the other side later).  
   Now, "Look." You should see a pot of gold.  Get that, and the coffin. 
        After that,  go SW,  then all the way back up to Canyon View.  From 
   there,  it's  NW to the clearing,  and then West to the window.  Once in 
   the kitchen,  open the bag and get the garlic (nothing  else,  just  the 
   garlic). Go on into the living room, and put your treasures in the case.  
   Now,  sit  down  and take a breather because you're about to do a lot of 
   traveling! 
       Once again,  open the trap door,  turn on the  lamp,  and  go  down.  
   Watch  carefully,  and you will notice that this time,  the door doesn't 
   close!  Whoever was doing it before  must  have  gotten  tired.  Anyway, 
   you're on your way to the dam, so move along North, East, North, NE, and 
   East.  You are now on top of the dam. 
       From  there,  go  North to the Lobby.  Pick up the matches,  then go 
   either North or East (doesn't matter) into  the  Maintenance  room.  Get 
   the  wrench  and  the  screwdriver,  then  push the yellow button.  Now, 
   return to the dam, and yo u will see that the green bubble is lit.  Turn 
   the bolt with the wrench, then drop the wrench. You have opened the dam, 
   and  you  will  be coming back this way again to reap the fruits of your 
   labors.  However, right now,  you're on your way to Hades,  so let's get 
   going! 
       Go South,  then down into the Loud room.  Leave the platinum bar for 
   now;  you'll get it later.  Head West into the Round room,  then SE  and 
   East (hmmmm, haven't you been here before?). Again, climb down the rope.  
   This  time,  get the torch.  At this point,  you can turn off your lamp; 
   the torch will provide light so long as you have it. 
       Now,  continue straight South,  getting the bell,  then the book and 
   candles  from the altar.  Go down the hole to the cave,  then down again 
   to the entrance to Hades.  Your candles will  have  blown  out  by  this 
   time,  but  don't  worry  about  it.  Okay,  here's where you have to be 
   careful.  First,  ring the bell.  It will become red hot  and  you  will 
   drop  it.  You  will  also  drop  the  candles.  Stay  calm,  and do the 
   following,  all in one command:  Get the  candles,  light  match,  light 
   candles with match (necessary, because of the torch, and *DON'T* use the 
   torch,  or you'll vaporize the candles!).  Okay, strange things happened 
   when you lit the candles, now read the book. Whew!  The demons have been 
   exorcised! 
       Drop the book,  then go South and get the crystal skull.  Now,  back 
   North,  then up to the cave, then North to the Mirror room.  By the way, 
   better put out the candles.  Rub the mirror,  and you  will  now  be  in 
   another  Mirror room (this one is North of the dam,  as the other one is 
   South). 
       Now,  go North,  then West,  then North,  then West into the Squeaky 
   room  (well,  I  told you you'd be doing a lot of traveling this time!).  
   Make sure you have the garlic with you, then go North into the Bat room.  
   So long as you have the garlic,  he won't bother you.  There is  a  jade 
   figurine here, but leave it for now.  You'll pick it up on your way out. 
       Go East to the Shaft room.  Put the torch into the basket, then turn 
   on  your  lamp  and head North to the Smelly room,  then down to the Gas 
   Room (best not to carry any open flames here!).  Now,  you are about  to 
   enter a small maze, so follow these directions *CAREFULLY*! 
        East,  Northeast,  Southeast, Southwest, down, and you should be at 
   the top of the ladder (if you aren't, may God have mercy on your soul!).  
   From there, go down to the Ladder Bottom, and then South to the Dead End 
   for the coal.  Get that, then return to the ladder top.  From there,  go 
   up, North, East, South, North, and you will be back in the Gas room.  Go 
   up, then South to the Shaft room again. 
        Put the coal in the basket, and lower the basket.  Now, guess what?  
   You  have to go back through the coal mine again!  So,  make your way to 
   the Ladder Bottom,  but this time,  go West to the Timber  room.  Ignore 
   the  broken  timber  (not  useful  for  anything),  and drop all but the 
   screwdriver.  Now, you can squeeze through the crack to the West. 
        And here you are in the Drafty Room, which is also at the bottom of 
   the shaft.  There's the basket, so get the coal and the torch,  and move 
   South into the Machine room.  Open the lid, put the coal in the machine, 
   close  the  lid,  and  turn  the  switch with the screwdriver.  Drop the 
   screwdriver, open the lid,  and get the diamond (well,  no one ever said 
   Zork was an *EASY* game!). 
        Now,  go  back  North,  and  put  the  torch and the diamond in the 
   basket.  Squeeze back East into the Timber room.  Get the  skull,  lamp, 
   and  garlic.  You won't be needing the matches and the candles any more, 
   so you can leave them. (They were insurance in case the thief came along 
   and stole the torch before you could get the diamond).  Now,  head  East 
   again to the Ladder Bottom,  and from there up and through the coal mine 
   (you know the way now!),  to the Gas room.  Pick up the  bracelet,  then 
   continue  on  up  and  South  to  the Shaft room.  Get the torch and the 
   diamond from the basket,  turn off the lamp,  then go West into the  Bat 
   room.  Get the jade, then go South, East, South to the Slide room. 
       Now,  here's a fast way back to the cellar:  Just go down the slide! 
   Wheeeee!  Then it's up to the living room (remember,  the trap  door  is 
   open now), and all the treasures go into the case. Huff!  Puff!  Bet you 
   didn't  know you'd be doing *THIS* much running around!  But,  don't get 
   too relaxed, there's still plenty more to come (urk!). 
       Turn on the lamp, and return to the cellar.  From there,  it's North 
   (ah,  deja vu!),  then East, North, NE to Reservoir South.  Now that the 
   sluice gates are open,  you can head North,  picking  up  the  trunk  of 
   jewels,  North again to Reservoir North, getting the air pump, and North 
   one more time, getting the crystal trident.  After that,  go all the way 
   back South again to Reservoir South, then East to the dam, and then East 
   once more to the Dam Base. 
       Here  you  find  a little pile of folded plastic;  guess what it is?  
   Right, it's an inflatable boat!  So, inflate it with the pump, then drop 
   the pump,  then get inside the boat,  say "Launch," and you're  floating 
   off along the Frigid River. 
       Now,  just  keep  waiting  until  you see the buoy.  Get that,  then 
   "East" to the beach.  Get out of the boat,  then get the shovel and move 
   on to the Sandy Cave to the NE.  You might want to save the game at this 
   point,  since  you  have to dig here until the scarab turns up,  and I'm 
   sure you don't want to get buried alive (it's been  known  to  happen!).  
   Okay,  drop  the  shovel and get the scarab,  then go back SW.  Drop the 
   buoy and open it;  inside is an emerald.  Get that,  then continue South 
   to the Aragain Falls. 
       Here  you  can cross the rainbow (so do that!),  which brings you to 
   the End of The Rainbow.  Turn off the lamp,  then go SW  to  the  Canyon 
   Bottom.  From there,  make your way back to the living room, and put all 
   the treasures in the case.  Your collection is quite impressive by  now, 
   but you aren't finished yet.  Go East twice, then North twice.  Climb up 
   the tree and get the egg. Climb down again, and go South, East, and back 
   to the living room.  However,  this time,  you don't put the treasure in 
   the case. 
       Turn on the lamp,  and go down (once again!) into  the  cellar,  and 
   North to the Troll room.  Now,  you are about to enter a maze, so follow 
   the directions very carefully! 
       West (this brings you into the maze), South, East, up,  and you find 
   several items here.  Take only the coins and the key, and be careful not 
   to touch the skeleton!  From here,  go SW, East, South, SE, and you will 
   be in the Cyclops room.  The Cyclops is not friendly,  but you can  deal 
   with  him  effortlessly:  Just  type in "Ulysses" (or "Odysseus," if you 
   prefer).  Old One-Eye will tear out of there right through the wall!  In 
   fact,  he will create a passage eastward from that room right  into  the 
   living room! 
       However,  you don't want to go that way yet!  Instead,  go upstairs, 
   and you will be in the Treasure Room,  the  thief's  secret  lair.  Now, 
   give him the egg,  and go back downstairs, then East to the living room.  
   Deposit the coins in the case,  then get the knife (the  thief  needs  a 
   little  time to open the egg).  Okay,  go back West to the Cyclops room.  
   Again, at this point, saving is recommended;  the thief will not be easy 
   to kill! 
       So,  head  upstairs and use the nasty knife to kill the thief.  Once 
   he's dead, all treasures in the room will be visible.  This includes the 
   egg, a silver chalice,  and anything he may have stolen from you before.  
   Get everything, then follow these directions: Down, NW, South, West, up, 
   down,  NE,  and  you  will  be in the Grating Room.  Unlock and open the 
   grate (watch out for falling leaves!),  then go up.  You will  be  in  a 
   clearing. 
       From  there,  go South and climb the tree again.  Wind up the canary 
   that's inside the egg.  A songbird will come by and drop  a  bauble  for 
   you.  Climb  down  again  and get the bauble,  then return to the living 
   room.  Put all the treasures in the case,  making sure you  *REMOVE  THE 
   CANARY*  from  the egg and put it in the case separately!  You're almost 
   finished!  Just one more trip to make! 
       Now,  for the last time,  enter the cellar and go  North.  From  the 
   Troll  Room,  go  East  until you come again to the Loud Room.  Type in: 
   "Echo," and you will now be able to get the bar.  So, grab it and return 
   to the living room.  Once you place it in  the  case,  you  will  get  a 
   message.  Follow  the  advice  of that message,  and you will get a map.  
   Take that,  and return to the place where this all started,  the mailbox 
   West  of  the  house.  You  should have no trouble getting to the barrow 
   from there.  Of course, once you enter the barrow.... 
       You didn't really think it  would  end  there,  did  you?  Not  when 
   there's  still  Zork II and Zork III waiting for you up ahead!  Ah,  but 
   it's too late;  you can't turn back now!  You'll just have to grit  your 
   teeth  and  follow  through to the end (with a little help,  of course).  
   See you in Zork II! 




<*>End of file<*>


Time remaining =  63 min.
==========================        FILE MENU       ==========================

  D)ownload a file    H)elp              L)ist files         N)ew files
  U)pload a file      ?) Xfer info

==========================        ELSEWHERE       ==========================

  G)oodbye            Q)uit to main menu

File Function <D,G,H,L,N,Q,U,?>? , N
Enter DIR to be scanned or ALL? ALL
Scanning DIR1        
Scanning DIR2        
Scanning DIR3        
Scanning DIR4        
Scanning DIR5        
Scanning DIR6        
Scanning DIRG        

Time remaining =  63 min.
==========================        FILE MENU       ==========================

  D)ownload a file    H)elp              L)ist files         N)ew files
  U)pload a file      ?) Xfer info

==========================        ELSEWHERE       ==========================

  G)oodbye            Q)uit to main menu

File Function <D,G,H,L,N,Q,U,?>? H

* <Ctrl K> to abort. <Ctrl S> to suspend *

================ Files Menu HELP File =====================

D)ownload a file (XMODEM or ASCII text)
H)elp -- this file
L)ist files available for download
N)ew files available since last directory review
U)pload file to this system (XMODEM or ASCII text)
?)download/upload help (detailed instructions)
G)oodbye -- exit this system
Q)uit -- Return to main menu -- message and comment menu

Time remaining =  63 min.
==========================        FILE MENU       ==========================

  D)ownload a file    H)elp              L)ist files         N)ew files
  U)pload a file      ?) Xfer info

==========================        ELSEWHERE       ==========================

  G)oodbye            Q)uit to main menu

File Function <D,G,H,L,N,Q,U,?>? L

* <Ctrl K> to abort. <Ctrl S> to suspend *

   ====================RBBS-PC File Directory====================

    DIR 1 Utility Programs           DIR 2 Games
    DIR 3 Word Processing Programs   DIR 4 Communications
    DIR 5 File Transfer Utilities    DIR 6 Miscellaneous Uploads

    All .BAS, .COM & .EXE programs must be downloaded using XMODEM
    The .BAS programs have all been saved in compressed format to save
    disk storage space.

To List the Directories, At the Function Prompt, Type L;Directory #
   E.G.   L;1
You can also stack the command, for example: L;1;2;3;4

Time remaining =  63 min.
==========================        FILE MENU       ==========================

  D)ownload a file    H)elp              L)ist files         N)ew files
  U)pload a file      ?) Xfer info

==========================        ELSEWHERE       ==========================

  G)oodbye            Q)uit to main menu

File Function <D,G,H,L,N,Q,U,?>? ; L;2

* <Ctrl K> to abort. <Ctrl S> to suspend *

----------------------RBBS Games Directory----------------------

FILENAME EXT   SIZE     DATE      DESCRIPTION
======== === ======   ========   ===========================================
CHESS    EXE   9,728   9-17-83 - Hi-Res Chess Game
ADVCOMP .BAS  11,392  01-01-84 - Make your own adventure! ADVDRVR needed.
ADVDRVR .BAS  14,976  01-01-84 - Driver program for ADVCOMP.BAS
ADVCOMP .DOC  32,256  01-01-84 - Documentation for ADVCOMP.BAS 
PAC-GAL .EXE  39,296  04-20-84 - GREATEST PAC TYPE GAME AVAILABLE
TALKER  .BAS  10,752  08-02-84 - Makes your PC talk through the speaker
TALKFUN .BAS  11,264  08-02-84 - Another talking program
BRICK   .EXE  18,688  08-02-84 - Break-out. Requires CGA.....GOOD!
BABY    .EXE  37,760  08-02-84 - Catch the bouncing babies. Req. CGA
3-DEMON .EXE  59,520  08-26-84 - 3-D,9 LEVELS,AVOID THE DEMON(SEE .DOC)
3-DEMON .DOC  10,880  08-26-84 - DOC FOR 3-DEMON.EXE
ZORK1   .DOC  15,488  10-13-84 - Zork 1 solution 
ZORK2   .DOC  12,672  10-13-84 - Zork 2 solution 
ZORK3   .DOC  12,160  10-13-84 - Zork 3 solution 
PITFALL .EXE  27,392  11-10-84 - Another game, not bad.
YAHTZEE  BAS  19,584  12-08-84 - Good Game!
WITNESS .SOL   1,280  01-02-85 - How to solve Infocom's "The Witness"
PENGO   .EXE  29,696  01-02-85 - Maze type game ok!
More (Y),N,NS?  Y
FLIGHTM .EXE  42,752  01-02-85 - GREATEST action game yet!? C/G suggested
1BLCKJK .BAS  12,288  01-02-85 - Rev. to rem. unrlstic rules, OK on B/W
SWC     .EXE  22,258  02-07-85 - Neat Graphic game/Space Wars
PC-SLOT .BAS   9,088  02-07-85 - Upgraded slot machine game
ZT15    .COM  12,288  02-09-85 - Fantastic Utility for Infocom Games Ver1.5 New
ZT15    .DOC   9,164  02-09-85 - Doc for ZORKTOOL.COM

Time remaining =  62 min.
==========================        FILE MENU       ==========================

  D)ownload a file    H)elp              L)ist files         N)ew files
  U)pload a file      ?) Xfer info

==========================        ELSEWHERE       ==========================

  G)oodbye            Q)uit to main menu

File Function <D,G,H,L,N,Q,U,?>? L L

* <Ctrl K> to abort. <Ctrl S> to suspend *

   ====================RBBS-PC File Directory====================

    DIR 1 Utility Programs           DIR 2 Games
    DIR 3 Word Processing Programs   DIR 4 Communications
    DIR 5 File Transfer Utilities    DIR 6 Miscellaneous Uploads

    All .BAS, .COM & .EXE programs must be downloaded using XMODEM
    The .BAS programs have all been saved in compressed format to save
    disk storage space.

To List the Directories, At the Function Prompt, Type L;Directory #
   E.G.   L;1
You can also stack the command, for example: L;1;2;3;4

Time remaining =  61 min.
==========================        FILE MENU       ==========================

  D)ownload a file    H)elp              L)ist files         N)ew files
  U)pload a file      ?) Xfer info

==========================        ELSEWHERE       ==========================

  G)oodbye            Q)uit to main menu

File Function <D,G,H,L,N,Q,U,?>? L;4

* <Ctrl K> to abort. <Ctrl S> to suspend *

----------------------RBBS Communictaions Directory----------------------

FILENAME EXT   SIZE    DATE      DESCRIPTION
======== ===  ======  ========   ===========================================
PCT3JR  .LBR   5,376  12-10-84 - Merge to PC-Talk for use on PCjr. Use LU &
                                 USQ. Has mods for jr internal modem.
BBS-TALK.LBR  32,256  12-10-84 - All known modifications to PC-TALK.III
                                 You will need LU.EXE and USQ.EXE to
                                 extract all the files. NEW version!
PCT-MODM.FIX   3,584  01-02-85 - Fix to PCT for PCjr and Hayes operation
CIS-JR  .COM   4,096  01-02-85 - CIS "A" protocol for the PCJr.
PCTQMD  .COM   12,928 01-14-85 - Converts PC-TALK Dialing Dir to QMODEM fmt
QMODUTIL.EXE   25,984 01-14-85 - Sort QMODEM dialing directory
QMODEM  .COM   64,640 01-14-85 - Nice Comm Program in Turbo Pascal Ver 2.87-E
QMODEM  .DQC   21,904 01-14-85 - Documentation for above
QWINDOWS.COM   17,280 01-25-85 - Change Postion of QMODEM Windows
GUIDE   .DOC   24,175 02-06-85 - Users Guide for RBBS-PC
QMODEM  .LBR   84,480 02-16-85 - Overlay Version 1.03A. Supports Color+Music


Time remaining =  61 min.
==========================        FILE MENU       ==========================

  D)ownload a file    H)elp              L)ist files         N)ew files
  U)pload a file      ?) Xfer info

==========================        ELSEWHERE       ==========================

  G)oodbye            Q)uit to main menu

File Function <D,G,H,L,N,Q,U,?>? L;4

* <Ctrl K> to abort. <Ctrl S> to suspend *

----------------------RBBS Communictaions Directory----------------------

FILENAME EXT   SIZE    DATE      DESCRIPTION
======== ===  ======  ========   ===========================================
PCT3JR  .LBR   5,376  12-10-84 - Merge to PC-Talk for use on PCjr. Use LU &
                                 USQ. Has mods for jr internal modem.
BBS-TALK.LBR  32,256  12-10-84 - All known modifications to PC-TALK.III
                                 You will need LU.EXE and USQ.EXE to
                                 extract all the files. NEW version!
PCT-MODM.FIX   3,584  01-02-85 - Fix to PCT for PCjr and Hayes operation
CIS-JR  .COM   4,096  01-02-85 - CIS "A" protocol for the PCJr.
PCTQMD  .COM   12,928 01-14-85 - Converts PC-TALK Dialing Dir to QMODEM fmt
QMODUTIL.EXE   25,984 01-14-85 - Sort QMODEM dialing directory
QMODEM  .COM   64,640 01-14-85 - Nice Comm Program in Turbo Pascal Ver 2.87-E
QMODEM  .DQC   21,904 01-14-85 - Documentation for above
QWINDOWS.COM   17,280 01-25-85 - Change Postion of QMODEM Windows
GUIDE   .DOC   24,175 02-06-85 - Users Guide for RBBS-PC
QMODEM  .LBR   84,480 02-16-85 - Overlay Version 1.03A. Supports Color+Music


Time remaining =  60 min.
==========================        FILE MENU       ==========================

  D)ownload a file    H)elp              L)ist files         N)ew files
  U)pload a file      ?) Xfer info

==========================        ELSEWHERE       ==========================

  G)oodbye            Q)uit to main menu

File Function <D,G,H,L,N,Q,U,?>? D
Enter full filename to download? ADVCOMP.BAS
This is a binary file and requires XMODEM transfer
Download type <X>modem, <A>scii, <Q>uit? X
File size is 89 blocks.
Transfer time: 2 min., 2 sec.
Send ready. Press <Ctrl X> to abort transfer.

, <A>scii, <Q>u
```
{% endraw %}

## ZT16.DOC

{% raw %}
```
.YT 0 0 2 4 32 32 1 10 10 0.Y 1 95 110 2 0 1 0 65 2 2 4 0 35 5(c)SOFTWARE PIRATES Inc.                                         2-19-85Sunnyvale, CA 94086                                ZorkTools 1.6        ZorkTools is a collection of utility programs which provide          capabilities not normally available for INFOCOM games.              These capabilities greatly enhance game play.System Requirements:        IBM PC, XT, Jr, AT, and some other PC Compatables.        Color, Monochrome, or Both Displays.        PC-DOS 1.0, 1.1, 2.0, 2.1, 3.0 or Compatable.        Minimum Memory (depending on menu option selected):                ICP     22k     free space above DOS                IGC     35k     free space above DOS                IGL     65-128k free space above DOS depending on extensions                                  loaded.                IIC     65-128k free space above DOS depending on extensions                                  loaded. (standard to converted)                        37k     free space above DOS depending on extensions                                  loaded. (converted > standard)                IPP     22k     free space above DOS                IUP     22k     free space above DOS                IVD     65k - 128k      free space above DOS depending on                                        extension loaded.        Drives (depending on menu option selected):                ICP     floppy drive A and drive B                IGC     floppy drive A and any other drive supported by DOS                IGL     floppy drive A (standard game)                        Any drive supported by DOS (converted game)                IIC     floppy drive A and any other drive supported by DOS                IPP     floppy drive A                IUP     floppy drive A and drive B                IVD     floppy drive A (standard game)                        Any drive supported by DOS (converted game)1.      ICP - Infocom Copy Program    ICP allows you to copy any INFOCOM game disk from drive A to drive B.  ICPno longer requires the target disk to be formatted before the copy is made.ICP will use all available memory for the copy.  A copy generaly takes about26 seconds on a system with 160k free memory.  The copy results in a Standardcopy of the game which IS NOT diskcopy-able.  Unlike the one-time backupfacility provided by INFOCOM in there games, ICP can make multiple backupcopies of any INFOCOM game disk.2.      IGC - Infocom Game Converter    IGC is a program designed to convert a Standard INFOCOM game to aConverted INFOCOM game.  The Converted INFOCOM game is stored in the form of aDOS file.  This DOS file can then be stored on ANY type of drive includingRam-drive & Hard-disk.  To execute a Converted INFOCOM game simply selectedIGL from ZorkTools Menu.3.      IGL - Infocom Game Loader    IGL will load any INFOCOM game (Standard, Unprotected, or Converted) fromdisk.  Once in memory, the game will be modified to allow it to run under DOS.When the modifications are complete, the game will be started.  Once the gamehas booted up it should work just as it does standalone (without DOS).  Toreturn to ZorkTools simply exit the game as always (use "quit" command) orpress Ctrl-Break.    A new feature has been added to IGL.  This feature is called ZORKEDIT.The editting capabilities provide by INFOCOM for their games leaves a lot tobe desired.  ZORKEDIT makes DOS' editting capabilities available to anyINFOCOM game.  Normally, DOS' editting capabilities are pretty limited, but ifyou use PC-DOS with DOSEDIT you will have DOSEDIT's extended edittingcapabilities.  These capabilities will be available to you while you play thegame.  (I highly suggest that you use DOSEDIT, if possible.  With it you canINSERT, DELETE, LEFT, RIGHT, HOME, END, BACKSPACING, COMMAND STACKING, ....and more thats just not available while playing any of the INFOCOM games.  Tryit...  you'll like it !!!!!)4.      IIC - Infocom Image Converter    IIC allows you to convert any INFOCOM game images produces by a Standardgame to a form (DOS file) usable by a Converted game.  IIC also supports thereverse operation, converting a Converted game image back to a Standard image.5.      IPP - Infocom Protection Program    IPP will modify the FAT tables of an INFOCOM game disk so that the sectorswhich are used by the game will be protected from DOS.  (This means that youwill not be able to "erase" the game or "copy" another program on top of it.WARNING!!  - This protection scheme does not prevent "diskcopy" or "format"from working.) Once the game has been protected from DOS you can store fileson portions of the disk not being used by the game.  (Most game disk leaveabout 40K bytes FREE.) If you use the CATDISK Catalog Program, you can now put.LBL files on your disk so they can be cataloged.  (Note:  once IPP has beenrun on an INFOCOM game disk IGC will not be able to convert this protecteddisk.)6.      IUP - Infocom Unprotection Program    IUP allows you to copy a "standard" INFOCOM game disk from drive A todrive B.  Every INFOCOM game disk has tracks 1 - 3 formatted to 4 sectors of1024 bytes instead of the normal 8 sectors of 512 bytes.  Diskcopy does nothave the ability to copy an INFOCOM game disk because of the way tracks 1 - 3have been formatted.  When IUP writes track 1 - 3 to the Target disk in driveB it does so at 8 sectors of 512 bytes.  IUP also modifies the boot sector ofthe Target disk so that the disk will boot up properly.  The result is anUnprotected working copy of an INFOCOM game which IS diskcopy-able.7.      IVD - Infocom Vocabulary Decoder    IVD is a program which locates, reads, decodes, and displays thevocabulary of any INFOCOM game disk.  This program will produce a numberedlisting of all the words that any game will allow the player to type in (plusa few you can't).  This routine will compensate for a 40 column display.  Youwill undoubtedly notice that some words in the vocabulary will start with aspace or have a space imbedded in them.  This is not an error in IVD.  Thedecoding technique used by INFOCOM leaves 6 "special" character codes whichhave no display-able character defined for them.  Some of the words containsome the "special" characters.  Too see where the "special" character are youmust invoke ZorkTools with the /S (Special character) option.  Since INFOCOMdid not define display-able character for the "special" character, the asciivalues of 0 - 5 have been chosen.  With the /S option the digits 0 - 5 will bedisplayed for the respective "special" character instead of a space.  In thevocabulary every word has a 3 byte suffix which, I believe, tells the game theattributes of the word (like adjective, verb, noun, etc.).  To list the 3 databyte suffix you must invoke ZorkTools with the /D (Data bytes) option.  (i.e."ZT16 /s" or "ZT16 /d" or "ZT16 /d/s").                        A LITTLE HISTORY    I have been, from the birth of PC to date, a brave and daring adventure inrealm of the Great Underground Empire, a space traveler who captures a giantalien space craft, a detective attempting to locate a murderer, a humancomputer backup who repaires an underground worldwide control complex, and aexperienced sorcerer who battles evil wizards to save the world.  Through allthese truly enjoyable escapades I could not help the feeling that somethingwas missing.  I couldn't get over the fact that a game like these require youto have a pencil and a piece of paper (for maps, secret words, notes).  Thinkabout it.  A game made for a computer, that forces the player to use somethingelse to accomplish what could and should be done on the computer !  That'scrazy !  I started thinking about this problem and ways to get around it.  Fora long time I couldn't think of a relatively easy way to accomplish this.Then multi-tasking programs hit the scene.  I found that the multi-taskingprograms allow the user to operate several DOS programs simultaneously.  Thecatch is that all of these programs must run under DOS in order to work.  Ithen had the task of making INFOCOM game run under DOS.  That is how IGL cameabout.  With a multi-tasking program, it is now possible to play an INFOCOMgame and have an editor online simultaneously.  That means (depending on themulti-tasking program) that the player can usually use one key as a toggle andswitch back and forth from the game to editor.  The player now has aconvienent place to store any game related data (maps, save imagedescriptions, secret words, etc.) all, and this is the key, WITHOUT havingtheir hands leave the keyboard.  I have tried this and it works great!                                                Happy Zorking,                                                Softbeard the PirateDevelopment History:V1.0    10-16-84        Initial releaseV1.1    10-17-84        Added ZORKEDIT feature.V1.2    10-22-84    1.) Fixed bug in V1.1 IPP (wasn't                        modifying the FAT tables correctly for                        Interpreter sectors).                    2.) Fixed bug in previous releases of IFP                        (wasn't able to format a disk that                        didn't have a FAT table).V1.3    10-24-84        Fixed bug in previous releases of IVD                        (wasn't displaying the correct data                        bytes when using the /d option).V1.4    10-25-84        Added Ctrl-Break trapping in all                        routines. Ctrl-Break will get you back                        Main Menu from anywhere. When at the                        Main Menu, Ctrl-Break return you to DOS.V1.5    12-11-84    1.) Added IGC program.                    2.) Modified IGL to execute Converted games.                    3.) Modified IVD to execute Converted games.                    4.) Added IIC program.                    5.) Added free memory check to make sure                        there is enough free memory to run the                        desired option.V1.6     2-19-85    1.) Changed ICG and IUP to automaticaly do                        a format of the target drive while                        copying.  This eliminates the need for                        the IFP (Infocom Format Program).                    2.) Added the ability to display current                        games or save images while using ZT16.                    3.) Fixed bug causing a DMA Across 64k                        boundary error on some systems.                    4.) Modified ZT to use all available memory.                    5.) Modified ZT to handle latest level of                        INFOCOM interpreter. (This allows                        recovery from the restart command in                        the new games).                    6.) Modified ZT to recover from all errors.    This program is for free distribution as is as long as there is noconsideration above the cost of a diskette (max $3.00), and the program anddocumentation are distributed together unchanged.  Any risk in using ZT islimited to the user.  The author implies no warranty as to the usability orlegality of ZT.  The user accepts ALL responsibility for using this program.SPI maintains the right to modify without notice any and all software in thispackage.        NOTE:  Unauthorized duplication of INFOCOM software is illegal.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0446

     Volume in drive A has no label
     Directory of A:\

    PIRATE   BAS     30208   1-01-80  12:13a
    PIRATE   DOC      2944   1-01-80   2:18a
    ASTRO    COM     16512   1-01-80  12:18a
    Q-BERT   EXE     55296   8-27-84  11:21p
    TEMPLE   BAS     55296   1-01-80   1:54a
    XWING    BAS     34688   5-29-83   3:16p
    ZORK1    DOC     25344   2-19-85   8:13p
    ZORK2    DOC     12800   2-10-85  11:38p
    ZORK3    DOC     12288   2-12-85   7:00p
    ZT16     COM     12928   1-01-80  12:14a
    ZT16     DOC     11648   1-01-80  12:16a
    CRISIS   EXE     37120   1-01-80  12:59a
    GODCREAT BAS     14117   1-01-80  12:48a
    FILES446 TXT      1132   1-04-80   9:42a
           14 file(s)     322321 bytes
                           34816 bytes free
