---
layout: page
title: "PC-SIG Library Disk #175"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0175/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0175"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "SIMULATION & BOARD"

    Have you ever wanted to play baseball when it is raining? Or explore a
    distant planet?  Or try to keep your money on the stock market,
    while everyone else is jumping out of windows?  This disk will
    let you do all those things, plus much more.
    
    System Requirements:  Some programs require color, BASIC
    
    How to Start: To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  To run an EXE program, just type its name and press <ENTER>.
    For instructions on running BASIC programs, please refer to the
    GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    ACEY-DUE BAS  Acey-duecy card game
    BLKFRDY  BAS  Stock market simulation
    BLACKBOX BAS  Find the balls in an 8x8 grid using rays
    BASEBALL BAS  Baseball simulation
    ALIEN    BAS  Adventure version
    BLOCK    EXE  Pong - requires graphics and BASRUN.EXE
    HUSTLE   BAS  Like Hoser - good game
    CHECKERS BAS  Checkers - slow but okay
    HUSTLE   DAT  Part of HUSTLE.BAS
    HUSTLE   DOC  Documentation
    KNOCK    ASC  Documentation
    MUSICFIL BAS  Music class management program
    KNOCK    BAS  Knock-knock joke teller
    JHBAND   MUS  Sample data created by MUSICFIL.BAS
    JHORCH   MUS  Sample data created by MUSICFIL.BAS
    MEDLEY   BAS  Name that tune-plays favorite songs (Requires DOS 2.0)
    SHORCH   MUS  Sample data created by MUSICFIL.BAS
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ACEY-DUE.BAS

```bas
10 CLS:KEY OFF
20 KDB=VAL(RIGHT$(TIME$,2))*VAL(MID$(TIME$,4,2))
30 RANDOMIZE KDB
40 PRINT
50 PRINT TAB(10)"ACEY DUCEY CARD GAME"
60 PRINT :PRINT :PRINT
70 PRINT "Acey-Ducey is played in the following"
80 PRINT "manner :":PRINT
90 PRINT "         Two cards will be shown.":PRINT
100 PRINT "         You have an option to bet or "
110 PRINT "         not bet depending on whether "
120 PRINT "         or not you feel the next card"
130 PRINT "         will have a value betwween the"
140 PRINT "         first two cards."
150 PRINT
160 PRINT "         If you do not want to bet,"
170 PRINT "         enter a zero (0)."
180 FOR T=1 TO 6000 : NEXT T
190 H=1
200 Q=200 : CLS : PRINT
210 PRINT "You have a";Q;" dollar credit limit.":PRINT
220 PRINT "Here are your first two cards.":PRINT :GOTO 360
230 IF Q>=10000 THEN 240 ELSE 260
240 PLAY"mbl16bbbcbbbcbbbcbbbcbbbcbbbcbbbcbbbcbbbcbbbcbbbcbbbcbbbc"
250 PRINT "Sorry, friend but you broke the bank.":PRINT "You now have"Q"dollars.":GOTO 1120
260 PRINT :PRINT :PRINT "You now have";Q;"dollars."
270 PRINT
280 GOTO 330
290 Q=Q+M
300 GOTO 230
310 Q=Q-M
320 GOTO 230
330 PRINT "Here are your next two cards."
340 H=H+1
350 PRINT
360 A=INT(14*RND(1))+2
370 IF A<2 THEN 360
380 IF A>14 THEN 360
390 B=INT(14*RND(1))+2
400 IF B<2 THEN 390
410 IF B>14 THEN 390
420 IF A>=B THEN 360
430 IF A<11 THEN 480
440 IF A=11 THEN 500
450 IF A=12 THEN 520
460 IF A=13 THEN 540
470 IF A=14 THEN 560
480 PRINT "       ";A:PRINT
490 GOTO 570
500 PRINT "        Jack":PRINT
510 GOTO 570
520 PRINT "        Queen":PRINT
530 GOTO 570
540 PRINT "        King":PRINT
550 GOTO 570
560 PRINT "        Ace":PRINT
570 IF B<11 THEN 620
580 IF B=11 THEN 640
590 IF B=12 THEN 660
600 IF B=13 THEN 680
610 IF B=14 THEN 700
620 PRINT :PRINT "       ";B
630 GOTO 720
640 PRINT :PRINT "        Jack"
650 GOTO 720
660 PRINT :PRINT "        Queen"
670 GOTO 720
680 PRINT :PRINT "        King"
690 GOTO 720
700 PRINT :PRINT "        Ace"
710 PRINT
720 PRINT
730 INPUT "What is your bet";M
740 IF M<>0 THEN 780
750 PRINT :PRINT "CHICKEN!"
760 PRINT
770 GOTO 330
780 IF M<=Q THEN 830
790 PRINT
800 PRINT "Sorry, my friend but you bet too much."
810 PRINT "You only have";Q;" dollars to bet."
820 GOTO 720
830 C=INT(14*RND(1))+2
840 IF C<2 THEN 830
850 IF C>14 THEN 830
860 IF C<11 THEN 920
870 IF C=11 THEN 940
880 IF C=12 THEN 960
890 IF C=13 THEN 980
900 IF C=14 THEN 1000
910 PRINT
920 PRINT :PRINT "       ";C
930 GOTO 1020
940 PRINT :PRINT "        Jack"
950 GOTO 1020
960 PRINT :PRINT "        Queen"
970 GOTO 1020
980 PRINT :PRINT "        King "
990 GOTO 1020
1000 PRINT :PRINT "        Ace "
1010 PRINT
1020 IF C>A THEN 1040
1030 GOTO 1070
1040 IF C>=B THEN 1070
1050 PRINT :PRINT "You Win!!" :PRINT
1060 GOTO 290
1070 PRINT :PRINT "Sorry, You Lose "
1080 IF M<Q THEN 310
1090 PRINT
1100 PRINT
1110 PRINT "Sorry ,friend but you blew your wad in";H;" hands."
1120 INPUT "Would you like to try again (yes or no)";A$
1130 IF LEFT$(A$,1) = "y" THEN 190
1140 IF LEFT$(A$,1) = "Y" THEN 190
1150 CLS
1160 PRINT :PRINT "So long for now,";
1170 FOR T=1 TO 2000 : NEXT T
1180 LOAD"masterp",R
```

## ALIEN.BAS

```bas
10 CLEAR:SCREEN 0,1:WIDTH 40:COLOR 6,1,1:CLS
20 LIMIT=INT(RND*5)
30 DIM A$(20,11),D$(20,11),X(50),I$(20,11)
40 W$="Weather looks as good as it could be."
50 A=1:B=2:P=3:L=2:K=4:K1=9:C=0:R=0
60 'STRING ASSIGNMENTS
70 D$="  You are on a vast plain that extends  in all directions. Mountains lie low on the horizen to the south..."
80 FOR X=0 TO 11
90 A$(1,X)=D$
100 NEXT X
110 FOR X=3 TO 6
120 D$(1,X)="  Impassable cliffs"
130 NEXT X
140 A$(2,1)="  You are beside a huge spike of rock   that sticks up out of the plain. It is  impossible to climb. Mountains visible  to the east and south..."
150 A$(1,0)="  It looks to me like you are lost! You wander around for a time and eventually you fall down, dying from lack of liq-  uid...too bad!"
160 A$(2,0)="  A tentacle reaches out of the desert  sand and snags you on the arm. Two more follow and you are sucked under. The    sands close over your head...too bad!"
170 A$(2,2)="  Huge cliffs dominate the scenery: the only entrance to the mountains appears  to be a steep path up between two sheer rock faces (heading south).LIST 1-50
180 A$(3,1)="  Huge cliffs dominate the scenery: the only entrance to the mountains appears  to be a steep path up between two sheer rock faces (heading east)...
190 A$(3,2)="  You are on a steep slope. Before you  lies a skeleton in a tattered uniform.  It is reclining against a vertical      wedge of rock. Above you and to the     east is what looks like a flat ridge..."
200 D$(3,2)="  There is a regulation blaster next    to the corpse of the unfortunate UGF    trooper. The blaster looks like it's in fairly decent shape...good for one shot at least!"
210 A$(3,3)="  You are on top of a ridge. East of    you is a gully and a cave. In all the   other directions except west are steep  drop-offs..."
220 A$(3,4)="  You are in a narrow gully. The only   way to go is east or west..."
230 A$(3,5)="  Immediately south of you is the en-   trance to the cave. To the east there   is another ridge..."
240 D$(3,5)="  That cave looks dark!"
250 FOR X=7 TO 10
260 A$(2,X)=D$
270 NEXT X
280 A$(3,6)="  You are on a large ridge overlooking  the plain. Strange tracks of a slimy    substance criss-cross on the smooth     rock  in front of you. A large cluster  of vegetation lies to the east..."
290 A$(3,7)="  You are in a forest of dead tree-like plants. Several dried branches lie on   the ground. Exit is towards the east    , west, or north..."
300 D$(3,7)="You know- I'll bet that stuff would     burn..."
310 A$(3,8)="  You are on the side of a rather large mountain. To the east is a sheer face   of rock with something shiny reflecting light at its base. The plains lie to    the north..."
320 A$(3,9)="  Immediately to the south is a steel   door with a rusty plate embedded in it. The plate has an inscription which      reads 'UGF MET STATION'..."
330 D$(3,9)="The door is jammed shut. You'll have to think of something-bud.  "
340 A$(3,10)="  You are out on a ridge. The plains    lie to the north"
350 A$(4,5)="  Ugh! its dark in here..."
360 A$(5,3)="  AAHHHHHH! You moron! You impaled      yourself on a stalactite!    too bad!"
370 A$(5,4)="  You can hear water dripping..."
380 A$(5,5)="  Its pretty awful in this cave..."
390 A$(6,4)="  Ahhhh...Some stairs. They seem to     be in decent shape"
400 A$(7,4)="  GAAAH! A giant spider-like creature   explodes from the depths of the cave    and wraps i~rtself around you! It bites!  You are spider lunch...too bad."
410 A$(6,5)="  A door is before you. It has been     knocked off its frame and you can pass  without trouble (if you are considering it)"
420 A$(6,6)="  You are standing in a wide passage.   You look up...and a small, jellylike    blob falls on your shoulder. You see    the roof-moving? Aghh! More blobs are   falling! Suddenly you are covered with  the things! They start eating...too bad"
430 A$(7,3)="  The path gets narrow. You accident-  ally touch the water of the lake. The   surface boils and a monster rises out   of the black water.You are grabbed and  pulled under... too bad."
440 A$(7,5)="  You are on a narrow path in an un-    derground canyon. Other paths lead out  at random intervals"
450 A$(8,5)="  You are in a cavern filled with crys- tal spires and delicate arches of glass and emerald quartz. The roof is far     above you..."
460 A$(9,5)="  You are in a room filled with bub-    bling pools of sulfur. Wisps of steam   float upwards. Exits in all directions. "
470 A$(8,4)="  You are skirting an underwater lake,  the waters black as pitch. Strange      flying things flutter overhead. Small   cave passages lead off to the north,    east, and west..."
480 A$(8,7)="  You are on a three-way metal catwalk  over a dark river. The roof of the cave is suddenly very low... "
490 A$(11,5)="  A creature that looks like a cross    between a boa constrictor and a barra-  cuda slithers out of a crevice and      sinks its teeth in your leg! too bad!"
500 A$(6,7)="  There is a sharp crackle and you fade into the 'wall'. It is actually a force field..."
510 D$(6,7)="So thats the way out..."
520 A$(5,6)="  Yaaaaaahhhhh! You fell down a pit     that was hewn into the floor...too bad!"
530 A$(7,7)="  You are in a metal corridor with      branches that lead east and west. The   corridor itself runs north-south..."
540 A$(7,6)="  A bed of green vegetation surrounds   you. You are suddenly jerked off your   feet by a long tendril. More follow.    You are slowly but surely trussed up    by the vegetable tentacles. too bad..."
550 A$(4,9)="  You are in a brightly lit metal room. On the floor is a dead man in a red un- iform. His arm is outstretched towards  a door. The door is open and leads to a hall going south..."
560 D$(4,9)="The fellow has his hand wrapped around  a mean looking knife...."
570 A$(5,9)="  You are in a metal corridor going     east-west. The steel plates that com-   prise the floor are covered with a      strange slimy substance..."
580 D$(5,9)="The slimy stuff looks like a slug trail Fancy that!"
590 A$(5,10)="  You are in a musty corridor.  The il- lumination is dim and erratic. An odd   smell is in the air."
600 D$(5,10)="  The slime trails are still here!"
610 A$(5,11)="  You come to an open door and go into  a large cavern cut out of the rock. A   huge slug-like creature covers almost   all of one wall and it turns its eye-   stalks to regard you..."
620 D$(5,11)="On the wall is a small panel with a     red light and a black switch. A plate   above the light reads 'BULKHEAD DOOR    RELEASE: WEST CORRIDOR'"
630 A$(5,8)="  You are in a small room with a desk   and computer console. The computer      screen is shattered and blackened. A    corridor leads east and a closed door   is in the south wall..."
640 D$(5,8)="The door is a good ole fashioned one    with a knob!"
650 A$(6,8)="  You are in a large room filled with   tables. A sign above the large open     double doors reads 'MESS HALL'. The     doors lead south and north..."
660 D$(6,8)="The wall to the west is sort of shim-   mering-as if it were not very           substantial..."
670 A$(7,8)="  Thunk! A crude spear crashes into     your chest. You look up and see a small biped alien with three mouths jumping   up and down in ecstasy over his catch.  too bad!"
680 A$(8,8)="  You are in a vast circular room. You  look over and see an alien that looks   like a giant louse. It is crabbing over towards your side of the room..."
690 D$(8,8)="  He is really ugly!"
700 A$(9,8)="  You are in a hydroponics garden gone  wild. Mutated vegetables and fruits are in abundance. Huge vines circle around  the metal roof struts. A man-sized rip  in the west wall leads into a dark      cave-passage. A doorway is to the south."
710 D$(9,8)="  The north-south doors are open."
720 A$(10,8)="  You are in a cathedral-like room. Odd bits of equipment are bolted to the     floor at even intervals. A skeleton is  bent over one piece of machinery that   looks like a control panel of some      kind."
730 D$(10,8)="A small LED screen has the message:     'STATION INTEGRITY RUPTURED. SHUTTLE ON STANDBY. PRIORITY ONE SECURITY MEASURES IN EFFECT. SECURITY CODE FOR NOW IS      ALPHA-123 '"
740 A$(8,9)="  You are in the bunkroom. Two skel-    etons lie on bare slats. A dead slug-   alien is draped over the far wall. The  passages out lead east."
750 D$(8,9)="These guys didn't put up much of a      fight..."
760 A$(8,10)="  You are in a room filled with comp-   uters and arrays of instruments. All    the screens are dead except one, which  is flickering dully. Exit to the south  and north..."
770 D$(8,10)="The screen has a short message printed  out on it:   'ESCAPE CRAFT IS READY FOR IMMEDIATE LAUNCH ON PAD 2A'..."
780 A$(9,4)="  AAAAHHHHHHHH! You fall into a pool of green muck! Its like quick sand! You are pulled down... too bad."
790 A$(10,4)="  You are walking among hundreds of     fungus plants that line the walls, the  ceiling, and the floor of this cave     passage. "
800 A$(11,4)="  This seems to be an abandoned mining  facility from the MET station. Mounds   of a yellowish ore crowd the floor.     Rusting machinery lies at the back of   the cavern. "
810 A$(12,4)="  There is a metal pathway on the       ground. It is running east-west. A      little passage runs north-south..."
820 A$(12,3)="  A bat creature drops from the roof    and lands on your head. That is it for  you, fella! too bad..."
830 A$(13,4)="  You wander into the deepest end of    the cave. A strange giddiness overcomes you and you fall to the cold stone      floor. Some kind of gas! too bad..."
840 A$(12,5)="  A human skeleton lies on the ground   along with several alien ones. Gargan-  tuan claw tracks lead south..."
850 A$(13,5)="  Gott in himmel! A real dragon! the    huge alien reptile is lying supine over against a boulder. It spies you! It     takes an interest in you and blasts you with a tongue of flame! too bad!"
860 A$(10,5)="  You are in a cavern full of stone     slabs and boulders. Tall blocks of rock stand over you. A strange smell, some-  what like the scent of fresh mushrooms  is assailing your nose."
870 A$(9,7)="  An alien vaguely resembling a star-   fish slides langorously across the      floor towards you. It raises two feel-  ers and then flashes into motion like   greased purple lightning! You are a     dinner for it! too bad"
880 A$(12,6)="  It is completely black here. You are  feeling your way along..."
890 A$(13,6)="  AGGGHH! A pair of eyes appears in     blackness. You hear a hissssssssss and  then you feel a light touch on your     arm. Must I tell the rest...  too bad."
900 A$(11,6)="  You are in a small cavern filled with man-made crates. Bright illumination    comes from four panels in the roof. The crates are all stamped 'UGF MET STATION 22: MACHINE PARTS'..."
910 A$(11,7)="  You are in a softly-lit tunnel that   runs east-west. There are rails of some kind on the ground. The whole place     smells faintly of oil."
920 A$(11,8)="  You are in a softly-lit tunnel that   runs east-west. There are rails of some kind on the ground. A platform with a   sign saying 'HYDROPONICS SECTION'lies   on the north side of the rails. A door  opens north from there."
930 A$(11,10)="  You are in a softly-lit tunnel that   runs east-west. There are rails of some kind on the ground. A platform with a   sign saying 'CONTROL SECTION'lies on    the north side of the rails. A door     opens north from there."
940 A$(11,9 )="  You are in a softly-lit tunnel that   runs east-west. A large wheeled vehicle lies on its side. Slime tracks cover it and its immediate vicinity. There are   rails on the ground and under the wreck of the vehicle..."
950 A$(9,10)="  You are in a north-south corridor     that is well lit and clean. No evidence of disorder here..."
960 D$(9,10)="You see a sign on a wall saying 'MET    STATION RAIL TRANSPORT: THIS WAY' with  an arrow pointing south."
970 A$(10,10)="  You are in a north-south corridor     that is well lit and clean. A large     open door lies to the south..."
980 A$(11,11)="  You are in an east-west tunnel. A     large vehicle is parked before you.     The door in the side of it is open. A   pulsing hum comes from it even though   the windows and ports are dark..."
990 D$(11,11)="If you want to clamber aboard  simply   say 'ENTER TRAM'"
1000 INPUT "DO YOU WISH TO LOAD A SAVED GAME";GAME$
1010 IF GAME$="Y" OR GAME$="YES" THEN GOTO 2980
1020 CLS
1030 'PROGRAM BODY
1040 X$="too bad":IF INSTR(A$(A,B),X$)>0 THEN PRINT A$(A,B):GOTO 2640
1050 IF I$(3,2)="BLASTER" THEN P=A:L=B
1060 IF A>3 THEN GOSUB 1980
1070 IF I$(4,9)="KNIFE" THEN K=A:K1=B
1080 PRINT:PRINT A$(A,B)
1090 IF C=A AND R=B THEN GOTO 2170
1100 IF C>1 THEN C=A:R=B+1
1110 IF A=5 AND B=11 THEN GOTO  2080
1120 IF C>1 AND A=6 AND B=7 THEN C=0:R=900:A$(A,B)="":PRINT:PRINT "The slug-creature shorts itself out in  the force field! Black smoke is evey-   where! The slug stops moving and        settles to the ground...":W$=""
1130 IF CTS=111 THEN A$(8,8)="  You are in a vast circular room. A    blasted alien lies on the floor before  you. Openings lead  in all directions.":D$(8,8)="Yechhh! What-a-mess!"
1140 IF R=900 THEN D$(7,7)="Can't go north. The corpse of the slug  is in the way...":A$(6,8)=""
1150 PRINT:PRINT W$
1160 PRINT:INPUT "Well";Q$
1170 IF A=8 AND B=8  THEN VVV=1:IF CTS=0 THEN GOTO 2200
1180 GOSUB 1200
1190 GOTO 1030
1200 'CHECKERS AND ADDERS
1210 SCORE=SCORE+1
1220 X$="too bad":IF INSTR(A$(A,B),X$)>0 THEN GOTO 2640
1230 IF Q$="L" OR Q$="LOOK" THEN PRINT D$(A,B):IF D$(A,B)="" THEN PRINT "  You see nothing special...":GOTO 1160
1240 IF Q$="L" OR Q$="LOOK" THEN GOTO 1160
1250 IF Q$="I" OR Q$="INVENTORY" THEN GOTO 1530
1260 IF Q$="SCORE" OR Q$="TELL SCORE" THEN PRINT "YOU'VE LASTED ";SCORE;" MOVES"
1270 IF Q$="HELP" THEN GOSUB 3370:GOTO 1030
1280 IF Q$="FILE" OR Q$="SAVE GAME" GOTO 2700
1290 IF A>3 THEN W$=""
1300 IF R>200 THEN A$(6,7)=""
1310 IF C>1 THEN W$="The creature is slithering behind you!"
1320 IF A<4 THEN GOSUB 1620
1330 IF A=4 AND B=9 THEN A39$="NO"
1340 IF A39$="NO" THEN A$(3,9)=""
1350 P$="GET":IF INSTR(Q$,P$)>0 THEN GOTO 1700
1360 P$="GRAB":IF INSTR(Q$,P$)>0 THEN GOTO 1700
1370 X1$="DROP":IF INSTR(Q$,X1$)>0 THEN 2020
1380 IF A=5 AND B=9 THEN IZ=1:IF CRQ=0 THEN IZ=0:IF Q$="W" OR Q$="WEST" OR Q$="GO WEST" THEN PRINT:PRINT"Sorry. A metal door anchored in the     ceiling is down in your path. This one  looks blaster-proof: it is very thick   and heavy...":PRINT:GOTO 1160
1390 IF A=3 AND B=9 THEN GOSUB 1740
1400 IF A=5 AND B=8 THEN IZ=1:IF Q$="S" OR Q$="SOUTH" OR Q$="GO SOUTH" THEN GOTO 1510
1410 IF A=5 AND B=8 THEN IZ=1:IF Q$="OPEN DOOR" OR Q$="GO DOOR" OR Q$="TURN KNOB" THEN A=A+1:PRINT:PRINT"You are through..."
1420 IF A=5 AND B=11 THEN GOTO  2080
1430 IF A=11 AND B=11 THEN NNN=1:IF Q$="ENTER TRAM" THEN GOTO 2270 ELSE IF Q$="E" OR Q$="EAST" OR Q$="GO EAST" THEN 2690
1440 V1$="BLAST":IF INSTR(Q$,V1$)>0 THEN BLS=BLS+1:IF BLS>LIMIT THEN 1850 ELSE 1910
1450 V1$="SHOOT":IF INSTR(Q$,V1$)>0 THEN BLS=BLS+1:IF BLS>LIMIT THEN 1850 ELSE 1910
1460 IF Q$="N" OR Q$="GO NORTH" OR Q$="RUN NORTH" OR Q$="WALK NORTH" THEN A=A-1:IF A$(A,B)="" OR A$(A,B)=" " THEN A=A+1:GOTO 1510
1470 IF Q$="S" OR Q$="GO SOUTH" OR Q$="RUN SOUTH" OR Q$="WALK SOUTH" THEN A=A+1:IF A$(A,B)="" OR A$(A,B)=" " THEN A=A-1:GOTO 1510
1480 IF Q$="W" OR Q$="GO WEST" OR Q$="RUN WEST" OR Q$="WALK WEST" THEN B=B-1:IF A$(A,B)="" OR A$(A,B)=" " THEN B=B+1:GOTO 1510
1490 IF Q$="E" OR Q$="GO EAST" OR Q$="RUN EAST" OR Q$="WALK EAST" THEN B=B+1:IF A$(A,B)="" OR A$(A,B)=" " THEN B=B-1:GOTO 1510
1500 RETURN
1510 PRINT"AH-AH-AH! Can't go there, buddy."
1520 GOTO 1160
1530 Z=0:FOR I=1 TO 20
1540 FOR X=1 TO 10
1550 IF I$(I,X)= "" OR I$(I,X)= " " THEN GOTO 1580
1560 PRINT I$(I,X)
1570 Z=Z+1
1580 NEXT X,I
1590 IF Z=0 THEN PRINT:PRINT"You're not carrying anything!"
1600 IF Z>0 THEN PRINT:PRINT"You're carrying ";Z;" item(s)"
1610 GOTO 1160
1620 T=T+1
1630 IF T<11 THEN W$="Weather looks as good as it could be."
1640 IF T>11 THEN W$="Looka like a storm is brewing...     "
1650 IF T>14 THEN W$="Weather is starting to look bad!"
1660 IF T>16 THEN W$="CRASH! A Storm is upon you!"
1670 IF T>19 THEN W$="The winds are howling!"
1680 IF  T>22 THEN PRINT:PRINT"You are swept away into the swirling ":PRINT"storm winds! Tough luck, bud!":PRINT:GOTO 2640
1690 RETURN
1700 IF Q$="GET BLASTER" OR Q$="GRAB BLASTER" THEN IZ=1: IF   P=A  AND  L=B  THEN I$(3,2)="BLASTER":D$(A,B)="" :PRINT"GOT IT":E$="BLASTER":D$(3,2)="  You don't see anything of interest...":GOTO 1160
1710 IF Q$="GET KNIFE" OR Q$="GRAB KNIFE" THEN IZ=1: IF K=A AND K1=B THEN I$(4,9)="KNIFE":D$(A,B)="" :PRINT"GOT IT":D$(4,9)="  You see nothing special...":GOTO 1030
1720 PRINT:PRINT"It's either not here or you are being":PRINT"rediculous again..."
1730 GOTO 1160
1740 IF I$(3,2)="BLASTER" THEN 1750 ELSE 1790
1750 IF Q$="BLAST DOOR" OR Q$="SHOOT DOOR" OR Q$="ZAP DOOR" THEN GOTO 1850
1760 CC$=" "
1770 IF Q$="BLAST IT" OR Q$="BLAST" OR Q$="SHOOT IT" OR Q$="SHOOT" THEN PRINT:INPUT "What is your target";CC$
1780 V1$="DOOR":IF INSTR(CC$,V1$)>0 THEN GOTO 1850
1790 IF Q$="W" OR Q$="WEST" THEN B=B+1:GOTO 1030
1800 IF Q$="N" OR Q$="NORTH" THEN A=A-1:GOTO 1030
1810 IF Q$="E" OR Q$="EAST " THEN B=B+1:GOTO 1030
1820 IF Q$="S" OR Q$="SOUTH" THEN GOTO 1510
1830 PRINT"  I really don't know what you mean..."
1840 GOTO 1030
1850 IF BLS>LIMIT THEN PRINT "Nothing happens...":GOTO 1160
1860 A=A+1:PRINT:PRINT"ZZRAPPP!! The door blows apart!":A$(3,9)=""
1870 PRINT:PRINT"  You stumble through the blasted ruin  of the door, the white flash of the     shot temporarily affecting sight and    reflex. Behind you the remains of the   door and about 900 tons of rock fall    over the entrance. You are sealed in!
1880 PRINT"The blast set off a rockslide!"
1890 BLS=BLS+1
1900 GOTO 1030
1910 'SHOOT ROUTINE
1920 IF I$(3,2)="BLASTER" THEN 1930 ELSE PRINT "You don't have it!":GOTO 1030
1930 IF BLS>LIMIT  THEN GOTO 1850
1940 PRINT:PRINT"ZRAPPP!":PRINT:PRINT"You turkey, you really made a mess!":PRINT"smoke is everywhere..."
1950 D$(A,B)="  There is a blaster crater here. Dust  and debris cover everything."
1960 BLS=BLS+1
1970 RETURN
1980 IF A=4 AND B=9 THEN W$="There is a lot of dust in the air..."
1990 IF A=>4 AND B<8 THEN W$="The air is damp and stuffy in here. "
2000 IF A=>4 AND B<8 THEN D$(A,B)="Danger is everywhere...watch out"
2010 RETURN
2020 V$="You see a knife.":VV$="You see a blaster."
2030 IF I$(4,9)="KNIFE" THEN IZ=1:V1$="KNIFE":IF INSTR(Q$,V1$)>0 THEN I$(4,9)="":D$(K,K1)=D$(K,K1)+ V$                 :GOTO 2060
2040 IF I$(3,2)="BLASTER" THEN IZ=2:V1$="BLASTER" :IF  INSTR(Q$,V1$)>0 THEN I$(3,2)="":D$(P,L )=D$(P,L )+VV$                               :GOTO 2060
2050 GOTO 1160
2060 PRINT "OK, I got rid of it.."
2070 GOTO 1160
2080 PRINT:INPUT "Whaddya gonna do?!";F$
2090 IF F$="PRESS SWITCH" OR F$="HIT SWITCH" OR F$="PRESS BUTTON" THEN CRQ=111:PRINT:PRINT"Panel light changes to green and the ":PRINT"door down the west corridor lifts up    into the ":PRINT"roof with a grinding   roar...":GOTO 2140
2100 IF F$="W" OR F$="RUN WEST" OR F$="GO WEST" OR F$="WEST" THEN C=A:R=B:W$="The creature is following you!":B=B-1:GOTO 1030
2110 IF F$="BLAST IT" OR  F$="BLAST CREATURE" OR  F$="SHOOT IT" OR  F$="SHOOT SLUG" OR  F$="BLAST SLUG" THEN PRINT:PRINT"ZRAPPPP!":PRINT:PRINT"The bolt of energy hits the creature":PRINT"and it absorbs the shot and grows!":BLS=BLS+1:GOTO 2140
2120 IF F$="KNIFE IT" OR F$="STAB IT" OR F$="STAB CREATURE" OR F$="STAB SLUG" THEN PRINT:PRINT"AGHHHH! It grabs at your arm with a     pseudopod and your knife melts into     the glistening flesh!": I$(4,9)="":GOTO 2140
2130 IF F$="L" OR F$="LOOK" THEN PRINT :PRINT D$(A,B):GOTO 2080
2140 IF UUU=1 THEN GOTO 2170
2150 PRINT:PRINT" The creature extends itself and moves  towards you!":UUU=1
2160 GOTO 2080
2170 IF A=5 AND B=9 THEN IZ=0: IF C>1 THEN PRINT "A door is blocking your way! You turn   around and...."
2180 PRINT: A$(A,B)="YAAAAAAAAAAAAAH!    The slug creature   engulfs you with a sudden motion sup-   rising for such bulk. You die a very    slow and slimy death. too bad!"
2190 GOTO 1030
2200 IF Q$="L" OR Q$="LOOK" THEN PRINT D$(A,B):GOTO 1030
2210 IF Q$="SHOOT IT" OR Q$="BLAST IT" OR Q$="BLAST CREATURE" OR Q$="SHOOT CREATURE" OR Q$="SHOOT LOUSE" OR Q$="BLAST LOUSE" OR Q$="SHOOT ALIEN" OR Q$="BLAST ALIEN"THEN IZ=1 ELSE 2260:BLS=BLS+1:IF BLS>LIMIT GOTO 1850
2220 IF I$(3,2)="BLASTER" THEN 2230 ELSE PRINT"You don't have it!":GOTO 1030
2230 CTS=111
2240 PRINT:PRINT"ZRRAAAP!":PRINT:PRINT" The alien recieves a blaster bolt in   its midsection. It keels over in front  of you."
2250 GOTO 1130
2260 PRINT:PRINT"The louse-alien climbs up your leg as   you try to flee. It latches on to you  and that is it, boyo. too bad."
2270 CLS:COLOR 10
2280 LOCATE 25,1:PRINT"press space bar to continue..."
2290 PRINT:PRINT"You climb up and into the tram. The     the interior is dark but the instant    you are completely inside it lights up. The door hisses shut behind you."
2300 PRINT:PRINT"You walk down a deserted aisle. The     rows of seats are empty except for the  dust on them and an occasional small    alien being that has settled down."
2310 PRINT:PRINT"You reach the control cabin. A computer terminal and a seat await you. The ter- minal screen switches on as you sit.    Bright green letters flow onto it..."
2320 PRINT:PRINT:PRINT:PRINT
2330 X$=INKEY$  :IF X$=" " THEN 2350
2340 GOTO 2330
2350 CLS
2360 PRINT:PRINT"MET STATION 22":PRINT"RAIL TRANSPORT SYSTEM":PRINT:PRINT"CAR 4"
2370 PRINT:PRINT"ROUTE SYSTEM":PRINT"---------------------------------------"
2380 PRINT:PRINT:PRINT 1;" SUPPLY STATION":PRINT 2;" HYDROPONICS SECTION":PRINT 3;" CONTROL SECTION"
2390 PRINT 4;" PAD 1A":PRINT 5;" PAD 1B":PRINT 6;" PAD 2A":PRINT 7;" PAD 2B":PRINT 8;" WAREHOUSE"
2400 PRINT:INPUT "DESTINATION ";DD
2410 IF DD=1 THEN B=7:GOTO 2470
2420 IF DD=2 THEN B=8:GOTO 2470
2430 IF DD=3 THEN B=10:GOTO 2470
2440 IF DD=6 THEN GOTO 2510
2450 IF DD>7 THEN PRINT"SORRY-THERE WAS A TUNNEL COLLAPSE THERE.":GOTO 2400
2460 GOTO 2480
2470 COLOR 9:CLS:PRINT"The tram drops you off and swishes away on the second pair of rails...":PRINT:GOTO 1030
2480 CLS:PRINT" You are outside an empty spacecraft    launch pad. You can see a black pit and a support gantry. Huge doors above the  pit are closed. The tram won't let you  off here because there is no spacecraft to board..."
2490 FOR I=1 TO 4000:NEXT I
2500 GOTO 2370
2510 'THE END OF IT ALL.......
2520 COLOR 9:CLS
2530 PRINT"The tram leaves you at the entrance to  pad 2A. A gleaming white shuttle with a delta wing is in a vertical position    before you."
2540 PRINT:PRINT"The shuttles from all the other pads    left with the survivors of MET station  22. Unfortunately the shuttles took off in a Plains Storm. The wreckage is on   the plain somewhere...."
2550 PRINT:PRINT"A flashing forcefield stops you from    advancing on the escape ship. Each time you try to push through a synthesized   voice keeps asking for a 'SECURITY CODE '...."
2560 PRINT:INPUT "What are you going to tell it";SEC$
2570 IF SEC$="L" OR SEC$="LOOK" THEN PRINT"The code is back near the hydroponics   section in the MET Station. You missed  it if you don't know it. Its on a CRT   somewhere...(Use the Look function)":PRINT:GOTO 2620
2580 IF SEC$="GO TRAM" OR SEC$="ENTER TRAM" OR SEC$="GO BACK" THEN GOTO 2350
2590 IF SEC$="ALPHA 123" OR SEC$="ALPHA-123" OR SEC$="A 123" THEN GOTO 2630
2600 IF SEC$="GO SHIP" OR SEC$="GO SHUTTLE" OR SEC$="BOARD SHIP" OR SEC$="ENTER SHIP" OR SEC$="ENTER SHUTTLE" THEN PRINT"Not until you cough up the security     code, bud. And yes- it does exist. And  No- it is not hard to find. Near the hydroponics..."
2610 PRINT:PRINT"You must have the security code to go   anywhere except back to the tram...":PRINT
2620 GOTO 2560
2630 RUN "a5.SPC"
2640 'you is dead
2650 BEEP
2660 PRINT:PRINT"You is dead, buddy.  Watch out next ":PRINT"time or you'll continue to meet this":PRINT"grisly fate!"
2670  PRINT:PRINT:INPUT "start again (Y or N)";X$:IF X$="Y" THEN RUN
2680 END
2690 PRINT "You can't go any farther into the tun-  nel than this. It is not lit and bes-   ides, there are all kinds of wonder-    ful creatures just waiting for you to   try something...":GOTO 1160
2700 'FILE
2710 ON ERROR GOTO 3250
2720 COLOR 0:CLS:PRINT:PRINT:PRINT"SAVE GAME":PRINT"_______________________________________"
2730 PRINT:PRINT:PRINT"Use your first name for a filename-":PRINT"that way many people can have files and":PRINT"easily rememger where they are...":PRINT
2740 INPUT "Your first name";NME$
2750 PRINT:PRINT"Is '";NME$;"' right";:INPUT C$
2760 IF C$="Y" OR C$="YES" THEN 2770 ELSE 2740
2770 DDD$=".DAT":NME$=NME$+DDD$
2780 OPEN "O",1,NME$
2790 FOR H=1 TO 20
2800 FOR H1=0 TO 11
2810 PRINT #1,D$(H,H1);",";
2820 NEXT H1,H
2830 FOR H=1 TO 20
2840 FOR H1=0 TO 11
2850 PRINT #1,I$(H,H1);",";
2860 NEXT H1,H
2870 PRINT #1,A39$
2880 PRINT #1,A,B
2890 PRINT #1,P,L
2900 IF W$<>"" THEN PRINT #1,T;W$
2910 IF W$="" THEN PRINT #1,T;W$;","
2920 PRINT #1,BLS,SCORE,K,K1
2930 PRINT #1,C,R,S,S1,CRQ,CTS
2940 CLOSE #1
2950 PRINT:PRINT"All right. Your game is saved.":INPUT  "Want to keep playing (Y or N)";Z$
2960 IF Z$="Y" THEN COLOR 9:GOTO 1030
2970 BEEP:END
2980 'LOAD GAME
2990 COLOR 0:CLS:PRINT:PRINT:PRINT"LOAD GAME":PRINT"_______________________________________"
3000 PRINT:PRINT:PRINT"For filename, enter your first name and I'll try and find your game...":PRINT:PRINT
3010 INPUT "first name, please";DAT$
3020 PRINT:PRINT"Is '";DAT$;"' right";:INPUT C$
3030 IF C$="Y" OR C$="YES" THEN 3040 ELSE 3010
3040 DAT$=DAT$+".dat"
3050 ON ERROR GOTO 3250
3060 OPEN "I",1,DAT$
3070 FOR H=1 TO 20
3080 FOR H1=0 TO 11
3090 INPUT #1,D$(H,H1)
3100 NEXT H1,H
3110 FOR H=1 TO 20
3120 FOR H1=0 TO 11
3130 INPUT #1,I$(H,H1)
3140 NEXT H1,H
3150 INPUT #1,A39$
3160 INPUT #1,A,B
3170 INPUT #1,P,L
3180 INPUT #1,T,W$
3190 INPUT #1,BLS,SCORE,K,K1
3200 INPUT #1,C,R,S,S1,CRQ,CTS
3210 CLOSE #1
3220 PRINT:PRINT"Ok. Your game is loaded in.":INPUT  "Type 'Y' to start...        ";Z$
3230 COLOR 9
3240 IF Z$="Y" THEN GOTO 1030 ELSE END
3250 PRINT:PRINT:PRINT:PRINT"You made a mistake somewhere...":PRINT"I'll return you to your game and you":PRINT    "can start again with whatever you were  doing-":FOR YYY=1 TO 2000:NEXT YYY
3260 CLOSE:RESUME 1030
3270 FOR I=1 TO 10 :FOR I1=1 TO 11:PRINT I,I1:PRINT D$(I,I1),I$(I,I1):NEXT I1,I
3280 PRINT A39$;"  DETERMINES A$(3,9)"
3290 PRINT "a";A,"b";B
3300 PRINT "p";P,"L";L
3310 PRINT "T";T;" OF INTEREST:";W$
3320 PRINT "k";K,"k1";K1
3330 PRINT "bls";BLS,"score";SCORE
3340 PRINT "c  ";C  ,"r    ";R
3350 PRINT "s  ";S  ,"s1   ";S1
3360 GOTO 3360
3370 '**ADVENTURE help***
3380 '**ADVENTURE 2000***
3390 SCREEN 0,1:COLOR 9,1:CLS
3400 LOCATE 25,1:PRINT"press space bar to continue...":LOCATE 2,1
3410 'BACKROUND
3420 PRINT"Welcome to ADVENTURE...":PRINT:PRINT"This is a type of game that has its":PRINT"roots in ths fantasy roll-playing   "
3430 PRINT"of 'D&D'(Dungeons and dragons). But":PRINT"the computer versions are really quite "
3440 PRINT"different.":PRINT:PRINT
3450 PRINT"In this game you will assume the roll":PRINT"of a character faced with a series of"
3460 PRINT"situations requiring decisions and":PRINT"quick, intelligent reactions. The":PRINT"computer gives you descriptions of"
3470 PRINT"various places, objects, and events.":PRINT"You react to the stimulus and tell ":PRINT"the computer what you want to do."
3480 PRINT:PRINT:PRINT"This game will require you to think a   little bit..."
3490 PRINT
3500 X$=INPUT$(1):IF X$=" " THEN 3520
3510 GOTO 3500
3520 CLS:LOCATE 25,1:PRINT"press space bar to continue..."
3530 LOCATE 3,1
3540 PRINT"One letter commands:":PRINT:PRINT"N for 'walk north'":PRINT"E for 'walk east'":PRINT"W for 'walk west'":PRINT"S for 'walk south'"
3550 PRINT"I for 'inventory'":PRINT"L for 'look'":PRINT:PRINT"one word commands:"
3560 PRINT"west, inventory, south, east, north ":PRINT"help, quit, look, shoot, blast, etc." :PRINT :PRINT
3570 PRINT"The computer will understand many words":PRINT"so don't hesitate to tell it what":PRINT"you want it to do in two-word commands."
3580 PRINT:PRINT:PRINT"Good luck..."
3590 X$=INPUT$(1):IF X$=" " THEN 3610
3600 GOTO 3590
3610 CLS:COLOR 6:RETURN
3620 'Last Line of ALIEN.BAS
```

## BASEBALL.BAS

```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            2085-A.BAS             │░"
80 PRINT"░│             BASEBALL              │░"
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
1000 REM BASEBALL SIMULATION PROGRAM
1010 REM WRITTEN BY JOEL LIND & KEN BIRKMAN - NYU - JULY 1973
1020 REM STOLEN AND ENHANCED DECEMBER 1973 BY R. D. KURLAND - NYU
1030 DIM B(7),P$(9),W$(7),J$(8),K$(4)
1040 CLS:KEY OFF
1050 FOR I=1 TO 7: B(I)=0:NEXT
1060 B=0:T9=0:R9=0:S=0:O=0:B1=0:B2=0:T=0
1070 Z1=1:Z2=1
1080 PRINT "WELCOME TO EBBETT'S FIELD"
1090 PRINT "WHAT DO YOU WANT TO CALL YOUR TEAM";
1100 INPUT A$
1110 FOR I=1 TO 7:READ W$(I):NEXT
1120 FOR I=1 TO 9:READ P$(I):NEXT
1130 FOR I=1 TO 4:READ K$(I):NEXT
1140 FOR I=1 TO 8:READ J$(I):NEXT
1150 PRINT "FINE. THE ";A$;" NEED A MANAGER.  WHAT'S YOUR NAME";
1160 INPUT B$
1170 PRINT "WHAT DO YOU WANT TO CALL MY TEAM, ";B$;
1180 INPUT C$
1190 PRINT
1200 PRINT "OPENING DAY, THE ";A$;" VERSUS THE ";C$
1210 PRINT
1220 PRINT "LET'S FLIP A COIN. THE WINNER IS THE HOME TEAM."
1230 PRINT "HEADS OR TAILS";
1240 INPUT D$
1250 IF D$<>"HEADS" AND D$<>"TAILS" THEN 1230
1260 FOR I=1 TO TYM
1270 Y=RND(1)
1280 NEXT I
1290 H=1
1300 Y=RND(1)
1310 Y$="HEADS"
1320 IF Y>.5 THEN Y$="TAILS"
1330 IF D$=Y$ THEN 1400
1340 H=0
1350 PRINT "YOU LOST THE TOSS.  THE ";A$;" ARE UP FIRST."
1360 PRINT
1370 PRINT
1380 A=0
1390 GOTO 1520
1400 PRINT "YOU WIN THE TOSS. ";A$;" TAKE THE FIELD, AND ";
1410 PRINT C$;" ARE AT BAT."
1420 A=1
1430 R9=0
1440 T=T+1
1450 IF T<3 THEN GOSUB 6050
1460 IF T<18 THEN 1620
1470 IF T>18 THEN 1500
1480 GOSUB 4410
1490 GOTO 1620
1500 GOSUB 4200
1510 GOTO 1620
1520 REM START AN INNING - WE ARE OUT ON THE FIELD
1530 T=T+1
1540 R9=0
1550 IF T<18 THEN 1600
1560 IF T>18 THEN 1590
1570 GOSUB 4410
1580 GOTO 1600
1590 GOSUB 4200
1600 IF T>2 THEN 1620
1610 GOSUB 5980
1620 S=0:B=0
1630 PRINT
1640 IF O=0 THEN PRINT "NO OUTS"
1650 IF O=1 THEN PRINT "THERE IS 1 OUT"
1660 IF O>1 THEN PRINT "THERE ARE";O;"OUTS"
1670 P=B(1)+B(2)+B(3)
1680 IF P<>3 THEN 1710
1690 PRINT "BASES LOADED"
1700 GOTO 1810
1710 IF P=0 THEN 1810
1720 Y$="RUNNER ON "
1730 IF P>1 THEN Y$="RUNNERS ON "
1740 PRINT Y$;
1750 IF B(1)=0 THEN 1780
1760 PRINT "FIRST";
1770 IF P>1 THEN PRINT " AND ";
1780 IF B(2)=1 THEN PRINT "SECOND";
1790 IF P>1 AND B(1)=0 THEN PRINT " AND ";
1800 IF B(3)=1 THEN PRINT "THIRD" ELSE PRINT " "
1810 IF A=0 THEN 1830
1820 GOTO 3940
1830 PRINT "BATTER UP"
1840 IF B<>3 OR S<>2 THEN 1870
1850 PRINT "FULL COUNT"
1860 GOTO 1880
1870 IF B>0 OR S>0 THEN PRINT "THE COUNT IS";B;"AND";S
1880 PRINT
1890 IF A=1 THEN 3940
1900 PRINT "WHAT WILL YOUR BATTER DO, ";B$;
1910 INPUT C
1920 IF C>0 AND C<5 THEN 1960
1930 PRINT "HUH?  ";
1940 GOSUB 5980
1950 GOTO 1900
1960 Y2=RND(1)
1970 IF Y2<.56 OR Y2>.5625 THEN 2030
1980 PRINT "WILD PITCH!"
1990 N=1
2000 GOSUB 4450
2010 B(1)=0
2020 GOTO 2120
2030 IF Y2>.772 AND Y2<.775 THEN 5790
2040 ON C GOTO 2050,2360,3510,5360,6410,6550
2050 C=1
2060 GOSUB 6150
2070 IF A=0 THEN Z1=Z1+1
2080 Y=RND(1)
2090 IF B<>3 OR S<>0 THEN 2110
2100 IF Y<.7 THEN 2220 ELSE 2120
2110 IF Y<.5 THEN 2220
2120 B=B+1
2130 Y=INT(RND(1)*8+1)
2140 IF Y=9 THEN 2130
2150 PRINT J$(Y);" - BALL";B
2160 IF B<>4 THEN 1840
2170 PRINT "WALK"
2180 GOSUB 5860
2190 Y=RND(1)
2200 GOTO 1620
2210 PRINT "HIGH POP - FOUL DOWN THE ";Y$;" FIELD LINE"
2220 S=S+1
2230 IF C=2 OR C=5 THEN 2280
2240 Y=INT(RND(1)*4+1)
2250 IF Y=5 THEN 2240
2260 PRINT K$(Y);", CALLED STRIKE";S
2270 GOTO 2290
2280 PRINT "SWINGING STRIKE";S
2290 IF C=5 AND S<>3 THEN 5360
2300 IF S<>3 THEN 1840
2310 PRINT "STRUCK OUT"
2320 O=O+1
2330 IF O=3 THEN 3760
2340 IF C=5 THEN 5360
2350 GOTO 1620
2360 C=2
2370 Y=INT(RND(1)*10+1)
2380 IF Y=10 THEN 2360
2390 IF A=0 THEN Z2=Z2+1
2400 IF C<>5 THEN GOSUB 6150
2410 IF S<>2 AND Z2/Z1>7 AND A=0 THEN 2430
2420 IF S<>2 OR Z2/Z1<25 THEN 2500
2430 Y=INT(RND(1)*20+1)
2440 IF Y>7 THEN 2460
2450 ON Y GOTO 2520,2220,2220,2220,2220,2590,2520
2460 IF Y>13 THEN 2480
2470 ON Y-7 GOTO 2590,2220,2650,2760,2650,2760
2480 IF Y>18 THEN 2510
2490 ON Y-13 GOTO 2890,2890,2950,3480,2550,3480
2500 IF Y<3 THEN 2220
2510 ON Y-2 GOTO 2520,2590,2650,2760,2890,2950,3480
2520 PRINT "FOULED INTO THE STANDS-OUT OF PLAY"
2530 IF S<>2 THEN S=S+1
2540 GOTO 1840
2550 Y=RND(1)
2560 Y$="RIGHT"
2570 IF Y<.5 THEN Y$="LEFT"
2580 GOTO 2530
2590 Y=INT(RND(1)*20+1)
2600 IF Y>18 THEN 2630
2610 PRINT "FOULED BACK INTO THE STANDS"
2620 GOTO 2530
2630 PRINT "POPPED IT UP - CAUGHT BY CATCHER"
2640 GOTO 2320
2650 PRINT "INFIELD GROUNDER"
2660 E2=RND(1)
2670 IF E2<.37 OR E2>.41 THEN 2730
2680 PRINT "1 BASE ERROR!!"
2690 N=1
2700 C=4
2710 GOSUB 4450
2720 GOTO 1620
2730 GOSUB 5010
2740 IF O=3 THEN 3760
2750 GOTO 1620
2760 PRINT "GROUNDER - COULD BE TROUBLE"
2770 Y=RND(1)
2780 IF Y>.75 THEN 2860
2790 Y$="UP THE MIDDLE"
2800 IF Y<.5 THEN Y$="THROUGH THE HOLE INTO RIGHT FIELD"
2810 IF Y<.25 THEN Y$="THROUGH THE HOLE INTO LEFT FIELD"
2820 PRINT "A SINGLE ";Y$;"!"
2830 N=1
2840 GOSUB 4450
2850 GOTO 1620
2860 PRINT "INFIELDER UP WITH IT!"
2870 GOSUB 5710
2880 IF O=3 THEN 3760 ELSE 1620
2890 Y=RND(1)
2900 Y$="LEFT"
2910 IF Y<.6 THEN Y$="CENTER"
2920 IF Y<.3 THEN Y$="RIGHT"
2930 PRINT "FLY-OUT TO ";Y$;" FIELD"
2940 GOTO 2320
2950 Z=RND(1)
2960 Y$="CENTER"
2970 IF Z<.6 THEN Y$="RIGHT"
2980 IF Z<.3 THEN Y$="LEFT"
2990 PRINT "LONG FLY TO DEEP ";Y$;" FIELD - LOOKS GOOD!"
3000 Z=RND(1)
3010 IF Z<.9 THEN 3040
3020 PRINT Y$;"FIELDER CAUGHT IT AT THE WALL!"
3030 GOTO 3090
3040 IF Z<.8 THEN 3070
3050 PRINT "A DIVING CATCH!"
3060 GOTO 3090
3070 IF Z<.7 THEN 3200
3080 PRINT Y$;"FIELDER CAUGHT IT ON THE WARNING TRACK!"
3090 O=O+1
3100 IF O=3 THEN 3760
3110 FOR I=3 TO 1 STEP -1
3120 IF B(I)=1 THEN 3150
3130 NEXT I
3140 GOTO 1620
3150 B(I+1)=B(I)
3160 B(I)=0
3170 PRINT "LEAD RUNNER TAGS UP - AND ADVANCES 1 BASE!"
3180 GOSUB 4740
3190 GOTO 1620
3200 IF Z<.5 THEN 3270
3210 PRINT "BATTER HOLDS WITH A SINGLE."
3220 N=2
3230 GOSUB 4450
3240 B(2)=0
3250 B(1)=1
3260 GOTO 1620
3270 IF Z<.15 THEN 3390
3280 PRINT "DOUBLE!"
3290 Y=RND(1)
3300 IF Y>.5 THEN 3340
3310 N=2
3320 GOSUB 4450
3330 GOTO 1620
3340 N=3
3350 GOSUB 4450
3360 B(3)=0
3370 B(2)=1
3380 GOTO 1620
3390 IF Z<.1 THEN 3440
3400 PRINT "TRIPLE!"
3410 N=3
3420 GOSUB 4450
3430 GOTO 1620
3440 PRINT "IT'S OVER THE WALL -- A H*O*M*E R*U*N!!!"
3450 N=4
3460 GOSUB 4450
3470 GOTO 1620
3480 Y=INT(RND(1)*7+1)
3490 PRINT "LINED OUT TO ";P$(Y)
3500 GOTO 2320
3510 GOSUB 6150
3520 PRINT "BATTER BUNTS..."
3530 Y=RND(1)
3540 IF Y<.6 THEN 3660
3550 IF B(3)=0 THEN 3570
3560 IF Y<.8 THEN 3740
3570 PRINT "THROWN OUT AT FIRST."
3580 O=O+1
3590 IF O=3 THEN 3760
3600 IF B(1)+B(2)+B(3)=0 THEN 1620
3610 PRINT "SACRIFICE - ";
3620 N=1
3630 GOSUB 4450
3640 B(1)=0
3650 GOTO 1620
3660 IF Y<.2 THEN 3740
3670 IF Y<.4 THEN 3700
3680 PRINT "BATTER MISSES PITCH"
3690 GOTO 2220
3700 PRINT "BEATS IT OUT! SINGLE!"
3710 N=1
3720 GOSUB 4450
3730 GOTO 1620
3740 GOSUB 5010
3750 IF O<>3 THEN 1620
3760 PRINT "3 OUTS. THE SIDE IS RETIRED";
3770 I=B(1)+B(2)+B(3)
3780 IF I=0 THEN PRINT "."
3790 IF I=1 THEN PRINT ", LEAVING 1 MAN ON BASE"
3800 IF I>1 THEN PRINT ", LEAVING";I;"MEN ON BASE"
3810 PRINT
3820 PRINT
3830 PRINT "*************"
3840 D=T/2-INT(T/2)
3850 PRINT "AFTER";
3860 IF T>1 THEN PRINT INT(T/2);
3870 IF D>.3 THEN PRINT " 1/2 ";
3880 Y$="INNINGS"
3890 IF T<3 THEN Y$="INNING"
3900 PRINT Y$;" OF PLAY, THE SCORE IS"
3910 GOSUB 4870
3920 O=0:B(1)=0:B(2)=0:B(3)=0
3930 IF A=0 THEN 1420 ELSE 1380
3940 REM MY TEAM IS AT BAT
3950 Y=RND(1)
3960 IF B(1)+B(2)+B(3)=0 THEN 4050
3970 REM IF O=2 AND S=2 AND B=3 THEN 4850
3980 IF B(3)=1 THEN 4020
3990 IF B(2)=0 THEN 4010
4000 IF .45<Y AND .46>Y THEN 5360
4010 IF .45<Y AND .47>Y THEN 5360
4020 IF O=2 THEN 4050
4030 IF O<2 AND Y<.333 AND B(3)=1 THEN 3510
4040 IF .45<Y AND .55>Y THEN 3510
4050 IF S=0 THEN 4150
4060 IF B<>3 THEN 4090
4070 IF Y<.6 THEN 2360
4080 GOTO 2050
4090 IF Y>.3 THEN 2360
4100 IF S<>2 THEN 2050
4110 IF B=0 AND Y<.1 THEN 2050
4120 IF B=0 THEN 2360
4130 IF Y<.2 THEN 2050
4140 GOTO 2360
4150 IF B=3 THEN 4180
4160 IF Y<.6 THEN 2050
4170 GOTO 2360
4180 IF Y<.9 THEN 2050
4190 GOTO 2360
4200 IF T<>19 THEN 4240
4210 IF R1<>R2 THEN 4250
4220 PRINT
4230 PRINT "*** GOING INTO EXTRA INNINGS ***"
4240 IF R1=R2 THEN RETURN
4250 IF (T-1)/2<>INT(T-1)/2 THEN RETURN
4260 PRINT "THE BALLGAME IS OVER."
4270 PRINT "*************"
4280 PRINT "FINAL SCORE:"
4290 T9=1
4300 GOSUB 4870
4310 IF R1>R2 THEN 4380
4320 PRINT "NICE TRY, ";B$
4330 PRINT "YOU SHOULD KNOW BETTER THAN TO TRY TO"
4340 PRINT "OUT-MANAGE A COMPUTER.  MAYBE BASEBALL"
4350 PRINT "JUST ISN'T YOUR SPORT...WHY DON'T YOU TRY GOLF?"
4360 REM CHAIN GOLF
4370 GOTO 6550
4380 PRINT "CONGRATULATIONS, ";B$
4390 PRINT "YOU'VE BEATEN ME, BUT I WILL HAVE MY REVENGE."
4400 GOTO 6550
4410 REM 9TH INNING
4420 IF A=0 THEN 4440
4430 IF R2>R1 THEN 4260 ELSE RETURN
4440 IF R1>R2 THEN 4260 ELSE RETURN
4450 REM ADVANCE N BASES (SET N BEFORE GOSUB)
4460 N2=B(1)+B(2)+B(3)
4470 IF C=5 THEN N=N+1
4480 N3=N
4490 IF N2=0 THEN 4560
4500 REM FIND LAST RUNNER: MAKE SURE HE ISN"T TRYING TO ADVANCE
4510 REM PAST HOME PLATE.
4520 FOR I=1 TO 3
4530 IF B(I)=1 THEN 4550
4540 NEXT I
4550 IF 4-I<N THEN N3=4-I
4560 FOR I=3+N TO N+1 STEP -1
4570 B(I)=B(I-N)
4580 NEXT I
4590 B(N)=1
4600 IF N=1 THEN 4650
4610 FOR P=1 TO 3
4620 IF (N-P)>1 THEN B(N-P)=0
4630 IF (N-P)<=1 THEN B(1)=0
4640 NEXT P
4650 FOR P=1 TO 7
4660 IF P=N THEN 4690
4670 NEXT P
4680 GOTO 4740
4690 IF C=4 OR N2=0 THEN 4740
4700 Y$="RUNNERS ADVANCE"
4710 IF N2=1 THEN Y$="RUNNER ADVANCES"
4720 PRINT Y$;N3;
4730 IF N3=1 THEN PRINT "BASE" ELSE PRINT "BASES"
4740 IF B(4)+B(5)+B(6)+B(7)=0 THEN RETURN
4750 REM AT LEAST 1 RUN HAS SCORED.
4760 N2=B(4)+B(5)+B(6)+B(7)
4770 IF A=0 THEN 4800
4780 R2=R2+N2
4790 GOTO 4810
4800 R1=R1+N2
4810 B(4)=0:B(5)=0:B(6)=0:B(7)=0
4820 IF N2=1 THEN PRINT "** 1 RUN SCORED"
4830 IF N2>1 THEN PRINT "**";N2;"RUNS SCORED"
4840 PRINT
4850 PRINT
4860 PRINT "********NEW SCORE:"
4870 IF H=1 THEN 4910
4880 IF LEN(A$)>LEN(C$) THEN PRINT A$;TAB(LEN(A$)+3);R1
4890 IF LEN(A$)<=LEN(C$) THEN PRINT A$;TAB(LEN(C$)+3);R1
4900 IF H=1 THEN 4940
4910 IF LEN(A$)>LEN(C$) THEN PRINT C$;TAB(LEN(A$)+3);R2
4920 IF LEN(A$)<=LEN(C$) THEN PRINT C$;TAB(LEN(C$)+3);R2
4930 IF H=1 THEN 4880
4940 PRINT "*************"
4950 PRINT
4960 PRINT
4970 IF T9=1 THEN 5000
4980 IF A=1 AND T>17 AND INT(T/2)=T/2 AND R2>R1 THEN 4260
4990 IF A=0 AND T>17 AND INT(T/2)=T/2 AND R1>R2 THEN 4260
5000 RETURN
5010 REM LEAD RUNNER OUT (FIELDER"S CHOICE THEN ONE BASE ADVANCE)
5020 N=1
5030 I=4
5040 IF B(4)=0 AND B(3)=1 AND B(2)=1 AND B(1)=1 THEN 5130
5050 I=3
5060 IF B(3)=0 AND B(2)=1 AND B(1)=1 THEN 5130
5070 I=2
5080 IF B(2)=0 AND B(1)=1 THEN 5130
5090 REM NO ONE FORCED
5100 O=O+1
5110 PRINT "BATTER THROWN OUT"
5120 RETURN
5130 B(I-1)=0
5140 F=RND(1)
5150 IF O=2 OR F>.3 THEN 5200
5160 O=O+2
5170 PRINT "DOUBLE PLAY!"
5180 IF O=3 THEN RETURN
5190 GOTO 5820
5200 O=O+1
5210 PRINT "RUNNER ON BASE";I-1;"IS OUT ON FIELDER'S CHOICE"
5220 IF O=3 THEN RETURN
5230 GOSUB 4450
5240 RETURN
5250 REM FORCED RUNNERS ADVANCE 1 BASE, OTHERS HOLD
5260 FOR I=1 TO 3
5270 IF B(I)=0 THEN 5310
5280 NEXT I
5290 N=1
5300 GOTO 4450
5310 REM NO ONE ON BASE I
5320 FOR I2=I TO 1 STEP -1
5330 B(I2)=1
5340 NEXT I2
5350 RETURN
5360 REM LEAD RUNNER STEALS
5370 FOR I=3 TO 1 STEP -1
5380 IF B(I)=1 THEN 5420
5390 NEXT I
5400 PRINT "NO ONE ON BASE, DUMMY!"
5410 GOTO 1900
5420 REM I IS LEAD RUNNER"S BASE
5430 IF C<>5 THEN GOSUB 6150
5440 IF RND(1)/I<.3 THEN 5590
5450 IF B(1)+B(2)+B(3)>1 THEN 5480
5460 PRINT "RUNNER STEALS A BASE"
5470 GOTO 5490
5480 PRINT "RUNNERS STEAL A BASE"
5490 N=1
5500 C2=C
5510 C=4
5520 GOSUB 4450
5530 C=C2
5540 B(1)=0
5550 IF C=5 AND S<>3 THEN 1840
5560 IF C=5 THEN 1620
5570 Y=RND(1)
5580 IF Y>.5 THEN 2120 ELSE 2220
5590 PRINT "RUNNER THROWN OUT STEALING"
5600 O=O+1
5610 B(I)=0
5620 IF O=3 THEN 3760
5630 N=1
5640 GOSUB 4450
5650 B(1)=0
5660 IF C=5 AND S<>3 THEN 1840
5670 IF C=5 THEN 1620
5680 Y=RND(1)
5690 IF B=3 THEN 2220
5700 IF Y>.5 THEN 2120 ELSE 2220
5710 REM RUNNERS ADVANCE ONE BASE, BATTER THROWN OUT
5720 N=1
5730 IF O=2 THEN 5760
5740 GOSUB 4450
5750 B(1)=0
5760 O=O+1
5770 PRINT "BATTER THROWN OUT"
5780 RETURN
5790 PRINT "HIT BATSMAN (OUCH!)"
5800 GOSUB 5860
5810 GOTO 1620
5820 N=1
5830 GOSUB 4450
5840 B(1)=0
5850 RETURN
5860 REM BATTER WALKED
5870 FOR I=1 TO 3
5880 IF B(I)=0 THEN 5920
5890 NEXT I
5900 N=1
5910 GOTO 4450
5920 IF I=1 THEN 5960
5930 FOR I0=I TO 2 STEP -1
5940 B(I0)=B(I0-1)
5950 NEXT I0
5960 B(1)=1
5970 RETURN
5980 PRINT "WHEN YOUR'RE UP:"
5990 PRINT "1-BATTER TAKES PITCH"
6000 PRINT "2-BATTER SWINGS AWAY"
6010 PRINT "3-BATTER BUNTS"
6020 PRINT "4-LEAD RUNNER STEALS"
6030 REM PRINT "5-HIT AND RUN"
6040 RETURN
6050 REM PITCHING ROUTINE
6060 PRINT "YOUR PITCHER MAY THROW:"
6070 PRINT "1-FAST BALL"
6080 PRINT "2-CURVE"
6090 PRINT "3-SLIDER"
6100 PRINT "4-SINKER"
6110 PRINT "5-CHANGE-UP"
6120 PRINT "6-KNUCKLEBALL"
6130 PRINT "7-SCREWBALL"
6140 RETURN
6150 IF A=0 THEN 6280
6160 IF R9=1 THEN 6210
6170 PRINT "WHAT WILL YOUR PITCHER THROW";
6180 INPUT W
6190 IF W<0 THEN R9=1
6200 IF R9=0 THEN 6230 ELSE PRINT "RANDOM PITCHES FOR REST OF INNING"
6210 W=INT(RND(1)*8+1)
6220 IF W=8 THEN 6210
6230 IF W>0 AND W<8 THEN 6380
6240 PRINT "UH-UH, ";B$;".  ";
6250 GOSUB 6060
6260 PRINT
6270 GOTO 6170
6280 REM I MUST SELECT A PITCH
6290 W1=RND(1)
6300 W=1
6310 IF W1<.75 THEN W=2
6320 IF W1<.55 THEN W=3
6330 IF W1<.45 THEN W=4
6340 IF W1<.35 THEN W=5
6350 IF W1<.15 THEN W=6
6360 IF W1<.08 THEN W=7
6370 GOTO 6380
6380 PRINT W$(W);
6390 PRINT "...";
6400 RETURN
6410 REM HIT-AND-RUN
6420 IF B(1)+B(2)+B(3)=0 THEN 5400
6430 GOSUB 6150
6440 PRINT "HIT AND RUN!"
6450 C=5
6460 GOTO 2370
6470 DATA FAST BALL,CURVE BALL,SLIDER,SINKER,CHANGE-UP,KNUCKLEBALL
6480 DATA SCREWBALL
6490 DATA RIGHT,LEFT,CENTER,FIRST,SECOND,THIRD,SHORTSTOP,PITCHER,CATCHER
6500 DATA RIGHT OVER THE PLATE,CAUGHT THE OUTSIDE CORNER
6510 DATA OVER THE INSIDE CORNER,OVER AT THE KNEES
6520 DATA HIGH,LOW,INSIDE,OUTSIDE,HIGH AND TIGHT,LOW AND OUTSIDE
6530 DATA LOW AND INSIDE,HIGH AND OUTSIDE
6540 END
6550 CHAIN "MENU",1000
```

## BLACKBOX.BAS

```bas
10 '
20 '   **********************************************
30 '   ***                                        ***
40 '   ***                BLACKBOX                ***
50 '   ***                                        ***
60 '   ***    A thinking man's game from the      ***
70 '   ***    "Mathematical Games"  column of     ***
80 '   ***    THE SCIENTIFIC AMERICAN Magazine    ***
90 '   ***                                        ***
100 '  ***                                        ***
110 '  ***   Written for the IBM-PC by Joe Long   ***
120 '  ***   Rt. 1 Box 100, Madison, AL   35758   ***
130 '  ***   V 1.0                October, 1983   ***
140 '  ***                                        ***
150 '  ***  Program donated to the PUBLIC DOMAIN  ***
160 '  ***                                        ***
170 '  **********************************************
190 '
200 CLS : SCREEN 0,1,0,0 : WIDTH 80
210 RANDOMIZE VAL(LEFT$(TIME$,2))*1000+VAL(MID$(TIME$,4,2))*60+VAL(RIGHT$(TIME$,2))
220 DEFINT A-N, R, T-Z : DEFSTR O-Q, S
230 DIM BALL(9,9), GUESS(9,9), PLABEL(32)
240 FALSE = 0 : TRUE = NOT FALSE
270 KEY OFF : ON KEY(1) GOSUB 2000 : ON KEY(2) GOSUB 3000 : ON KEY(3) GOSUB 3500 : ON KEY(4) GOSUB 4000 : ON KEY(5) GOSUB 5000 : ON KEY(10) GOSUB 9000
280 KEY(1) ON : KEY(2) ON : KEY(3) ON : KEY(4) ON : KEY(5) ON : KEY(10) ON
390 '
400 '   **   Initialize screen graphics strings   **
410 '
420 STR = CHR$(201)+STRING$(3,205)+CHR$(209)+STRING$(3,205)+CHR$(209)+STRING$(3,205)+CHR$(209)+STRING$(3,205)+CHR$(209)+STRING$(3,205)+CHR$(209)+STRING$(3,205)+CHR$(209)+STRING$(3,205)+CHR$(209)+STRING$(3,205)+CHR$(187)
430 SS = CHR$(186)+STRING$(3," ")+CHR$(179)+STRING$(3," ")+CHR$(179)+STRING$(3," ")+CHR$(179)+STRING$(3," ")+CHR$(179)+STRING$(3," ")+CHR$(179)+STRING$(3," ")+CHR$(179)+STRING$(3," ")+CHR$(179)+STRING$(3," ")+CHR$(186)
440 SL = CHR$(199)+STRING$(3,196)+CHR$(197)+STRING$(3,196)+CHR$(197)+STRING$(3,196)+CHR$(197)+STRING$(3,196)+CHR$(197)+STRING$(3,196)+CHR$(197)+STRING$(3,196)+CHR$(197)+STRING$(3,196)+CHR$(197)+STRING$(3,196)+CHR$(182)
450 SBR = CHR$(200)+STRING$(3,205)+CHR$(207)+STRING$(3,205)+CHR$(207)+STRING$(3,205)+CHR$(207)+STRING$(3,205)+CHR$(207)+STRING$(3,205)+CHR$(207)+STRING$(3,205)+CHR$(207)+STRING$(3,205)+CHR$(207)+STRING$(3,205)+CHR$(188)
490 '
500 '   **   Opening Questions   **
510 '
520 COLOR 15 : PRINT TAB(30) "B L A C K B O X"
530 COLOR 7 : PRINT : PRINT TAB(20)"Written for the IBM-PC by Joe Long"
540 PRINT : PRINT : PRINT "Do you have a color or monochrome monitor (press `C' or `M')? ";
550 Q = INKEY$ : IF Q = "" THEN 550
560 IF Q <> "C" AND Q <> "c" AND Q <> "M" AND Q <> "m" THEN BEEP : GOTO 550
570 IF Q = "C" OR Q = "c" THEN PRINT "Color" : LO = 3 : HI = 14 : RED = 12 : GREEN = 10 ELSE PRINT "Monochrome" : LO = 7 : GREEN = 7 : HI = 15 : RED = 15
580 COLOR LO : PRINT : PRINT : PRINT "Do you need instructions? "; : GOSUB 7100
590 IF YES = TRUE THEN GOSUB 8000
980 '
990 '   **********************
1000 '  **   Main Program   **
1010 '  **********************
1020 '
1030 '   **   Initialize Values   **
1040 '
1050 FOR I = 1 TO 32 : PLABEL(I) = "  " : NEXT I
1060 LABELNUMBER = 1 : NSCORE = 0 : CROW = 0 : CCOL = 1
1070 FOR I = 1 TO 8 : FOR J = 1 TO 8 : BALL(I,J) = FALSE : GUESS(I,J) = FALSE : NEXT J : NEXT I
1080 GOSUB 6000   '   Draw Screen
1090 LOCATE 7, 70 : PRINT "Number"; : LOCATE 9, 72 : PRINT "of"; : LOCATE 11, 70 : PRINT "Balls:"; : LOCATE 13, 71, 1
1100 Q = INKEY$ : IF Q = "" THEN 1100
1110 NUMBALLS = VAL(Q) : IF NUMBALLS < 1 OR NUMBALLS > 9 THEN BEEP : GOTO 1100
1120 FOR I = 1 TO NUMBALLS : X = INT(RND*8+1) : Y = INT(RND*8+1) : IF BALL(X,Y) THEN I = I - 1 ELSE BALL(X,Y) = TRUE
1130 NEXT I
1170 PRINT NUMBALLS : LOCATE ,,0 : GOSUB 7400   '   Time delay
1190 '
1200 '   **   Main Menu   **
1210 '
1220 LOCATE 6, 7 : PRINT "Menu";
1230 LOCATE 8, 1 : PRINT "------------------";
1240 LOCATE 9, 1 : PRINT "Launch Ray     F1 ";
1250 LOCATE 11, 1 : PRINT "Place Ball     F2 ";
1260 LOCATE 13, 1 : PRINT "Remove Ball    F3 ";
1270 LOCATE 15, 1 : PRINT "Clear Box      F4 ";
1280 LOCATE 17, 1 : PRINT "Score Box      F5 ";
1290 LOCATE 19, 1 : PRINT "Quit Game     F10 ";
1300 LOCATE 20, 1 : PRINT "------------------";
1310 GOTO 1310   '   Loop, Wait for input
1980 '
1990 '   **********************
2000 '   **   Evaluate Ray   **
2010 '   **********************
2020 '
2030 ROW = CROW : COL = CCOL   '   Restore origonal cursor location
2040 COLOR RED
2050 IF ROW = 0 THEN DIR = 1 : LOCATE 3, 26+COL*4 : POINTER = CHR$(25)
2060 IF COL = 9 THEN DIR = 2 : LOCATE 4+2*ROW, 64 : POINTER = CHR$(27)+"-"
2070 IF ROW = 9 THEN DIR = 3 : LOCATE 23, 26+COL*4 : POINTER = CHR$(24)
2080 IF COL = 0 THEN DIR = 4 : LOCATE 4+2*ROW, 24 : POINTER = "-"+CHR$(26)
2090 PRINT POINTER; : COLOR LO
2100 Q = INKEY$ : IF Q = "" THEN 2100
2110 CURSOR = ASC(RIGHT$(Q,1))
2120 IF ROW = 0 THEN LOCATE 3, 26+COL*4 : POINTER = " "
2130 IF COL = 9 THEN LOCATE 4+2*ROW, 64 : POINTER = "  "
2140 IF ROW = 9 THEN LOCATE 23, 26+COL*4 : POINTER = " "
2150 IF COL = 0 THEN LOCATE 4+2*ROW, 24 : POINTER = "  "
2160 PRINT POINTER;
2170 IF CURSOR = 13 THEN 2270   '   Calculate entry # and evaluate ray
2180 IF CURSOR = 77 AND COL < 8 AND ROW < 5 THEN ROW = 0 : COL = COL+1
2190 IF CURSOR = 77 AND COL < 8 AND ROW > 4 THEN ROW = 9 : COL = COL+1
2200 IF CURSOR = 75 AND COL > 1 AND ROW < 5 THEN ROW = 0 : COL = COL-1
2210 IF CURSOR = 75 AND COL > 1 AND ROW > 4 THEN ROW = 9 : COL = COL-1
2220 IF CURSOR = 72 AND ROW > 1 AND COL < 5 THEN COL = 0 : ROW = ROW-1
2230 IF CURSOR = 72 AND ROW > 1 AND COL > 4 THEN COL = 9 : ROW = ROW-1
2240 IF CURSOR = 80 AND ROW < 8 AND COL < 5 THEN COL = 0 : ROW = ROW+1
2250 IF CURSOR = 80 AND ROW < 8 AND COL > 4 THEN COL = 9 : ROW = ROW+1
2260 GOTO 2040
2270 IF DIR = 1 THEN ENTRY = COL ELSE IF DIR = 2 THEN ENTRY = 8+ROW ELSE IF DIR = 3 THEN ENTRY = 25-COL ELSE ENTRY = 33-ROW
2280 CROW = ROW : CCOL = COL   '   Save cursor location
2290 '
2300 '   Check for immediate hit or reflection
2310 '
2320 GOSUB 7400
2322 IF DIR = 1 THEN IF BALL(ROW+1,COL) THEN GOSUB 2820 : GOTO 2900
2324 IF DIR = 2 THEN IF BALL(ROW,COL-1) THEN GOSUB 2820 : GOTO 2900
2326 IF DIR = 3 THEN IF BALL(ROW-1,COL) THEN GOSUB 2820 : GOTO 2900
2328 IF DIR = 4 THEN IF BALL(ROW,COL+1) THEN GOSUB 2820 : GOTO 2900
2330 IF DIR = 1 THEN IF BALL(1,COL-1) OR BALL(1,COL+1) THEN GOSUB 2840 : GOTO 2900
2340 IF DIR = 2 THEN IF BALL(ROW-1,8) OR BALL(ROW+1,8) THEN GOSUB 2840 : GOTO 2900
2350 IF DIR = 3 THEN IF BALL(8,COL-1) OR BALL(8,COL+1) THEN GOSUB 2840 : GOTO 2900
2360 IF DIR = 4 THEN IF BALL(ROW-1,1) OR BALL(ROW+1,1) THEN GOSUB 2840 : GOTO 2900
2390 '
2400 '   Check for hit
2410 '
2420 IF DIR = 1 THEN IF BALL(ROW+1,COL) THEN GOSUB 2820 : GOTO 2900
2430 IF DIR = 2 THEN IF BALL(ROW,COL-1) THEN GOSUB 2820 : GOTO 2900
2440 IF DIR = 3 THEN IF BALL(ROW-1,COL) THEN GOSUB 2820 : GOTO 2900
2450 IF DIR = 4 THEN IF BALL(ROW,COL+1) THEN GOSUB 2820 : GOTO 2900
2480 '
2490 '   Check for change of direction
2500 '
2510 IF DIR = 1 THEN IF BALL(ROW+1,COL-1) THEN DIR = 4 : GOTO 2570
2520 IF DIR = 1 THEN IF BALL(ROW+1,COL+1) THEN DIR = 2
2530 IF DIR = 2 THEN IF BALL(ROW-1,COL-1) THEN DIR = 1 : GOTO 2510
2540 IF DIR = 2 THEN IF BALL(ROW+1,COL-1) THEN DIR = 3
2550 IF DIR = 3 THEN IF BALL(ROW-1,COL-1) THEN DIR = 4 : GOTO 2570
2560 IF DIR = 3 THEN IF BALL(ROW-1,COL+1) THEN DIR = 2 : GOTO 2530
2570 IF DIR = 4 THEN IF BALL(ROW-1,COL+1) THEN DIR = 1 : GOTO 2510
2580 IF DIR = 4 THEN IF BALL(ROW+1,COL+1) THEN DIR = 3 : GOTO 2550
2590 '
2600 '          Check for exit
2610 '
2620 IF DIR = 1 AND ROW = 8 THEN EXIT = 25-COL : GOSUB 2850 : GOTO 2900
2630 IF DIR = 2 AND COL = 1 THEN EXIT = 33-ROW : GOSUB 2850 : GOTO 2900
2640 IF DIR = 3 AND ROW = 1 THEN EXIT = COL    : GOSUB 2850 : GOTO 2900
2650 IF DIR = 4 AND COL = 8 THEN EXIT = ROW+8  : GOSUB 2850 : GOTO 2900
2690 '
2700 '          Move Ray
2710 '
2720 IF DIR = 1 THEN ROW = ROW+1 : GOTO 2400   '   Go back for next move
2730 IF DIR = 2 THEN COL = COL-1 : GOTO 2400
2740 IF DIR = 3 THEN ROW = ROW-1 : GOTO 2400
2750 IF DIR = 4 THEN COL = COL+1 : GOTO 2400
2790 '
2800 '    Change lables in array
2810 '
2820 PLABEL(ENTRY) = " H" : NSCORE = NSCORE + 1 : RETURN
2840 PLABEL(ENTRY) = " R" : NSCORE = NSCORE + 1 : RETURN
2850 IF ENTRY = EXIT THEN PLABEL(ENTRY) = " R" : NSCORE = NSCORE + 1 : RETURN
2860 PLABEL(EXIT) = " "+CHR$(64+LABELNUMBER)
2870 PLABEL(ENTRY) = " "+CHR$(64+LABELNUMBER) : LABELNUMBER = LABELNUMBER + 1 : IF LABELNUMBER = 8 THEN LABELNUMBER = 9
2880 NSCORE = NSCORE + 2 : RETURN
2890 '
2900 '   Print new port labels & return to menu
2910 '
2920 GOSUB 6500
2940 GOSUB 7600   '   Print score
2950 RETURN
2980 '
2990 '   *******************************
3000 '   **   Place balls in square   **
3010 '   *******************************
3020 '
3050 TROW = ROW : TCOL = COL   '   Save row & col
3100 GOSUB 7200   '   Get coordinates of ball
3190 '
3200 '   **   Place Ball   **
3210 '
3230 IF GUESS(ROW,COL) = 1 THEN BEEP : GOTO 3270
3240 GUESS(ROW, COL) = 1 : GUESSNUMBER = GUESSNUMBER + 1
3250 SBALL = CHR$(2) : COLOR HI
3260 GOSUB 7700   '   Print ball
3270 COLOR LO
3280 ROW = TROW : COL = TCOL   '   Restore row & col
3290 RETURN
3480 '
3490 '   **********************************
3500 '   **    Remove Ball from square   **
3510 '   **********************************
3520 '
3550 TROW = ROW : TCOL = COL   '   Save row & col
3560 GOSUB 7200   '   Get coordinates of ball
3590 '
3600 '   **   Remove Ball   **
3610 '
3630 IF GUESS(ROW,COL) = 0 THEN BEEP : GOTO 3670
3640 GUESS(ROW,COL) = 0 : GUESSNUMBER = GUESSNUMBER - 1
3650 SBALL = " "
3660 GOSUB 7700
3670 COLOR LO
3680 ROW = TROW : COL = TCOL   '   Restore row & col
3690 RETURN
3980 '
3990 '   **********************************
4000 '   **   Clear all balls from box   **
4010 '   **********************************
4020 '
4100 SBALL = " "
4110 TROW = ROW : TCOL = COL   '   Save row & col
4120 FOR ROW = 1 TO 8
4130   FOR COL = 1 TO 8
4140     GOSUB 7700
4150     GUESS(ROW,COL) = 0
4160   NEXT COL
4170 NEXT ROW
4180 GUESSNUMBER = 0
4190 ROW = TROW : COL = TCOL   '   Restore row & col
4200 RETURN
4980 '
4990 '   *******************
5000 '   **   Score Box   **
5010 '   *******************
5090 '
5100 FOR ROW = 1 TO 8
5110   FOR COL = 1 TO 8
5120     IF BALL(ROW,COL) = TRUE AND GUESS(ROW,COL) = FALSE THEN NSCORE =                NSCORE + 5 : GOSUB 7600
5130     IF GUESS(ROW,COL) AND NOT BALL(ROW,COL) THEN SBALL = CHR$(1) : COLOR            RED : GOSUB 7700
5140     IF BALL(ROW,COL) AND NOT GUESS(ROW,COL) THEN SBALL = CHR$(2) : COLOR            RED : GOSUB 7700
5150     IF GUESS(ROW,COL) AND BALL(ROW,COL) THEN SBALL = CHR$(2) : COLOR GREEN          : GOSUB 7700
5180   NEXT COL
5190 NEXT ROW
5290 '
5300 '   New Game?
5310 '
5320 LOCATE 24,34 : COLOR HI : PRINT "Another Game? ";
5330 GOSUB 7100 : GOSUB 7400 : GOSUB 7400
5340 IF YES = TRUE THEN RETURN 1000
5350 PRINT : PRINT "Y'all come back now."
5360 GOSUB 7400 : SCREEN 0,1,0,0 : COLOR LO
5370 CLS : END
5980 '
5990 '   **********************************
6000 '   **   Screen graphics routines   **
6010 '   **********************************
6020 '
6100 '   **   Print field   **
6110 '
6120 CLS : COLOR LO
6130 PRINT TAB(40) "BLACKBOX"
6140 LOCATE 5, 28 : PRINT STR
6150 PRINT TAB(28) SS : PRINT TAB(28) SL : PRINT TAB(28) SS : PRINT TAB(28) SL : PRINT TAB(28) SS : PRINT TAB(28) SL : PRINT TAB(28) SS : PRINT TAB(28) SL
6160 PRINT TAB(28) SS : PRINT TAB(28) SL : PRINT TAB(28) SS : PRINT TAB(28) SL : PRINT TAB(28) SS : PRINT TAB(28) SL : PRINT TAB(28) SS
6170 PRINT TAB(28) SBR
6180 COLOR RED : LOCATE 17, 70 : PRINT "SCORE: "; : COLOR LO
6200 GOSUB 6500 : RETURN
6490 '
6500 '   **   Print port labels   **
6510 '
6520 LOCATE 4, 1 : COLOR LO
6530 FOR I = 1 TO 8 : PRINT TAB(25+4*I); PLABEL(I); : NEXT I
6540 FOR I = 1 TO 8 : LOCATE 4+2*I, 62 : PRINT PLABEL(8+I); : NEXT I
6550 FOR I = 8 TO 1 STEP -1 : LOCATE 22, 25+4*I : PRINT PLABEL(25-I); : NEXT I
6560 FOR I = 8 TO 1 STEP -1 : LOCATE 4+2*I, 25 : PRINT PLABEL(33-I); : NEXT I
6570 RETURN
6980 '
6990 '   ********************************
7000 '   **   Miscellaneous Routines   **
7010 '   ********************************
7090 '
7100 '   Process Yes/No inputs
7110 '
7120 Q = INKEY$ : IF Q = "" THEN 7120
7130 IF Q <> "Y" AND Q <> "y" AND Q <> "N" AND Q <> "n" THEN BEEP : GOTO 7120
7140 IF Q = "Y" OR Q = "y" THEN YES = TRUE ELSE YES = FALSE
7150 IF YES THEN PRINT "Yes"; ELSE PRINT "No";
7160 RETURN
7190 '
7200 '   **   Get Coordinates of Ball   **
7210 '
7220 ROW = 5 : COL = 5
7240 LOCATE 4+2*ROW, 26+4*COL, 1, 1, 7   '   Position cursor and make box
7250 Q = INKEY$ : IF Q = "" THEN 7250
7260 CURSOR = ASC(RIGHT$(Q,1))
7280 IF CURSOR = 77 AND COL < 8 THEN COL = COL+1
7290 IF CURSOR = 75 AND COL > 1 THEN COL = COL-1
7300 IF CURSOR = 72 AND ROW > 1 THEN ROW = ROW-1
7310 IF CURSOR = 80 AND ROW < 8 THEN ROW = ROW+1
7330 IF ASC(Q) <> 13 THEN 7240
7340 LOCATE ,, 0, 7, 7   '   Return cursor to line and turn off
7350 RETURN
7390 '
7400 '   **   Time Delay   **
7410 '
7420 FOR I = 1 TO 1000 : NEXT I
7430 RETURN
7590 '
7600 '   **   Display score   **
7610 '
7620 LOCATE 19,71 : COLOR RED : PRINT NSCORE;
7630 COLOR LO : RETURN
7690 '
7700 '   **   Display or erase ball   **
7710 '
7740 LOCATE 4+2*ROW, 26+4*COL
7750 PRINT SBALL;
7760 RETURN
7980 '
7990 '   **********************
8000 '   **   Instructions   **
8010 '   **********************
8020 '
8030 CLS
8040 PRINT : PRINT "   The game of `BLACKBOX' is taken from the `Mathematical Games' column of `THE"
8050 PRINT "SCIENTIFIC AMERICAN' magazine.  It is a logic puzzle, with the computer serving"
8060 PRINT "only as draftsman and scorekeeper -- you must do all the thinking!"
8070 PRINT : PRINT "   The game is played on an 8x8 grid, representing 64 positions in a closed"
8080 PRINT "`black box.'  The box contains some balls, located at random on the grid.  You"
8090 PRINT "try to deduce the location of the balls from the behavior of `rays' that you"
8100 PRINT "shoot in from the edges of the box.
8120 PRINT : PRINT "   The behavior of the rays follows these rules:  If a ray strikes a ball head-"
8130 PRINT "on, it is absorbed.  If it would pass by a ball on an adjacent square, it turns"
8140 PRINT "ninety degrees so as to avoid the ball, turning on the square just before it"
8150 PRINT "would come beside the ball -- that is, when it is diagonally adjacent to it."
8160 PRINT "A ray meeting two balls with one empty square between (where it's path would"
8170 PRINT "pass between them) would not know which way to turn, and will be reflected"
8180 PRINT "back 180 degrees.  Finally, if there is a ball on the square next to the one"
8190 PRINT "the ray is entering onto, so that the ray would have to turn before entering"
8200 PRINT "the box (an impossibility), it is reflected."
8210 PRINT : PRINT "   This may sound confusing, but will become clear after a few games."
8220 PRINT : PRINT TAB(20) "<Press space bar to continue>"
8230 Q = INKEY$ : IF Q = "" THEN 8230
8240 CLS : PRINT : PRINT "   When you launch a ray, its entry and exit point will be marked.  If it went"
8250 PRINT "in and was absorbed, the entry point is marked with the letter `H.'  If it went"
8260 PRINT "in and was reflected (came back out the same port), the entry/exit is marked"
8270 PRINT "with an `R.'  Otherwise, the entry and exit ports are marked with the same"
8280 PRINT "capital letter, beginning with an `A' for the first pair, `B' for the second"
8290 PRINT "pair, etc."
8300 PRINT : PRINT "   You score a penalty of one point for each port used.  That is, a `hit'"
8310 PRINT "scores one point, a `reflection' scores one point, and a ray that enters and"
8320 PRINT "then leaves by another port scores two points.  When you ask the computer to"
8330 PRINT "check your solution, any bad guesses (balls in the wrong place, or missing"
8340 PRINT "balls) count five points.  The lower your score, the better!"
8350 PRINT : PRINT TAB(20) "<Press space bar to see an example>"
8360 Q = INKEY$ : IF Q = "" THEN 8360
8370 GOSUB 10000
8380 CLS : PRINT : PRINT "   Follow the on-screen menu to solve the puzzle.  When you elect to launch a"
8390 PRINT "ray, an arrow cursor will show you where it will enter -- you move this arrow"
8400 PRINT "to the desired location with the cursor control keys.  Likewise, you move the"
8410 PRINT "flashing block cursor to the desired location in the grid to place or remove a"
8420 PRINT "ball.  You can clear the whole field at one swipe with the `F4' key."
8430 PRINT : PRINT "   Note, you use the function keys to tell the computer what you want to do;"
8440 PRINT "then you use the cursor control keys to position the arrow or flashing cursor"
8450 PRINT "to the desired entry port or ball location;  then, use the `Enter' key to"
8460 PRINT "actually launch the ray or place (or remove) the ball."
8500 PRINT : PRINT "   When you think you have it solved, press `F5' and the computer will show you"
8510 PRINT "the result.  Bad guesses are marked by reverse `happy faces', good guesses by"
8520 PRINT "low-intensity `happy faces', and balls you missed by high-intensity `happy"
8530 PRINT "faces.'   If you are playing a color version, the guesses are in yellow before"
8540 PRINT "scoring, and turn green if they are correct;  wrong guesses are red `reverse"
8550 PRINT "happy faces' and missed balls red `happy faces.'
8560 PRINT : PRINT "You may choose to hide from one to nine balls;  less than three is trivial,"
8570 PRINT "and more than five usually has ambiguous balls (hidden behind other balls so"
8580 PRINT "that their location cannot be deduced from the rays).  Good luck!"
8590 PRINT : PRINT TAB(20) "<Press space bar to begin game>";
8600 Q = INKEY$ : IF Q = "" THEN 8600
8700 RETURN
8980 '
8990 '   **********************************
9000 '   **   Premature ending of game   **
9010 '   **********************************
9020 '
9100 LOCATE 24,28,0,7,7 : COLOR HI : PRINT "Do you really want to end the game? ";
9110 GOSUB 7100
9120 GOSUB 7400 : LOCATE 24, 28 : COLOR LO : PRINT STRING$(40, " ");
9130 IF YES = FALSE THEN RETURN
9140 LOCATE 24,28 : COLOR HI : PRINT "Do you want to play another game? ";
9150 GOSUB 7100 : GOSUB 7400
9160 IF YES = TRUE THEN RETURN 1000
9170 PRINT : PRINT "Y'all come back now."
9180 GOSUB 7400 : SCREEN 0,1,0,0 : COLOR LO
9190 CLS : END
9980 '
9990 '    ******************************************
10000 '   **   Animated sample for instructions   **
10010 '   ******************************************
10020 '
10030  GOSUB 6000
10040 COLOR HI
10050 SBALL = CHR$(2)
10060 LOCATE 10, 30 : PRINT SBALL
10070 LOCATE 12, 46 : PRINT SBALL
10080 LOCATE 16, 46 : PRINT SBALL
10090 '
10100 '   **   Demonstrate Rays   **
10110 '
10130 GOSUB 7400
10140 LOCATE 10, 24 : COLOR RED : PRINT "-";CHR$(26); : GOSUB 7400
10150 LOCATE 10, 24 : COLOR LO : PRINT "  H"; : GOSUB 7400
10160 LOCATE 19, 71 : COLOR RED : PRINT 1;
10170 GOSUB 7400
10180 LOCATE 8, 24 : PRINT "-";CHR$(26); : GOSUB 7400
10190 LOCATE 8, 24 : COLOR LO : PRINT "  R"; : GOSUB 7400
10200 LOCATE 19, 71 : COLOR RED : PRINT 2;
10210 GOSUB 7400
10220 LOCATE 3, 46 : PRINT CHR$(25); : GOSUB 7400
10230 LOCATE 3, 46 : COLOR LO : PRINT " "; : LOCATE 4, 46 : PRINT "H"; : GOSUB 7400
10240 LOCATE 19, 71 : COLOR RED : PRINT 3;
10250 GOSUB 7400
10260 LOCATE 3, 42 : PRINT CHR$(25); : GOSUB 7400
10270 LOCATE 3, 42 : COLOR LO : PRINT " "; : LOCATE 4, 42 : PRINT "H"; : GOSUB 7400
10280 LOCATE 19, 71 : COLOR RED : PRINT 4;
10290 GOSUB 7400
10310 LOCATE 12, 63 : PRINT CHR$(27);"-"; : GOSUB 7400
10320 LOCATE 12, 62 : COLOR LO : PRINT "H  "; : GOSUB 7400
10330 LOCATE 19, 71 : COLOR RED : PRINT 5;
10340 GOSUB 7400
10350 LOCATE 14, 63 : PRINT CHR$(27);"-"; : GOSUB 7400
10360 LOCATE 14, 62 : COLOR LO : PRINT "R  "; : GOSUB 7400
10370 LOCATE 19, 71 : COLOR RED : PRINT 6;
10380 GOSUB 7400
10390 LOCATE 10, 63 : PRINT CHR$(27);"-"; : GOSUB 7400
10400 LOCATE 10, 62 : COLOR LO : PRINT "A  "; : GOSUB 7400
10410 LOCATE 4, 50 : PRINT "A"; : GOSUB 7400
10420 LOCATE 19, 71 : COLOR RED : PRINT 8;
10430 GOSUB 7400
10440 LOCATE 23, 42 : PRINT CHR$(24); : GOSUB 7400
10450 LOCATE 23, 42 : COLOR LO : PRINT " "; : LOCATE 22, 42 : PRINT "B"; : GOSUB 7400
10460 LOCATE 18, 26 : PRINT "B"; : GOSUB 7400
10470 LOCATE 19, 71 : COLOR RED : PRINT 10;
10480 LOCATE 24, 28 : COLOR LO : PRINT "<Press space bar to continue>";
10490 Q = INKEY$ : IF Q = "" THEN 10490
10500 RETURN
```

## BLKFRDY.BAS

```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            2090-A.BAS             │░"
80 PRINT"░│          BLACK FRIDAY #3          │░"
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
1000 CLS:KEY OFF
1010 REM   AUTHOR: ROBERT W. BAKER
1020 REM   MODIFIED FOR BASIC-E (BARF) BY R S MASON   9-25-77
1030 REM   MODIFIED FOR MICROSOFT DISK BASIC BY ZOSO
1040 REM   THIS PROGRAM REQUIRES CP/M WITH 26K OF FREE MEMORY (OVERHEAD)
1050 REM
1060 REM   THIS GAME IS WRITTEN TO PROVIDE A REALISTIC MODEL OF THE
1070 REM   ACTUAL STOCK MARKET RATHER THAN A COMPLETELY RANDOMIZED
1080 REM   HAPPENING OF EVENTS.
1090 REM
1100 REM
1110 PRINT TAB(30)"BLACK FRIDAY #3"
1120 PRINT CHR$(26) : WIDTH  80
1130 PRINT "WHAT IS YOUR LUCKY NUMBER (1 TO 25000)"
1140 INPUT A
1150 IF A<1 OR A>25000 OR A<>INT(A) THEN PRINT "DO IT RIGHT !" : GOTO 1130
1160 PRINT CHR$(26)
1170 PRINT "STAND BY FOR A FEW MOMENTS"
1180 A=A MOD 97
1190 FOR X=1 TO A : X1=RND(1) : X1=RND(X) : NEXT X
1200 DIM A(36,12),U(11,9),E(11,9),K(10),T(10),F(9),M(4,12),X(4)
1210 FOR I=1 TO 36: FOR J=1 TO 12: READ A(I,J): NEXT J: NEXT I
1220 FOR I=1 TO 11: FOR J=1 TO 9: READ U(I,J): NEXT J: NEXT I
1230 FOR I=1 TO 11: FOR J=1 TO 9: READ E(I,J): NEXT J: NEXT I
1240 FOR N=1 TO 10
1250 READ K(N)
1260 NEXT N
1270 V$="HIB XP SP ODMRD SO BT KA ZE BPL"
1280 Y$="$5  $1  NONE$4  $7  NONENONE$2  $6  $3  "
1290 REM
1300 REM   DATA TO SIMULATE REAL LIFE STOCK MARKET
1310 REM
1320 DATA 1,0,0,0,0,0,0,0,0,5,0,0
1330 DATA 0,0,0,0,0,0,-25,0,0,0,0,0
1340 DATA 1,0,0,0,0,0,0,15,0,0,0,0
1350 DATA 0,0,0,0,-5,0,0,0,0,0,0,0
1360 DATA 1,0,0,0,0,0,0,0,0,5,0,0
1370 DATA 0,0,0,0,0,0,5,0,0,0,0,0
1380 DATA 1,0,0,0,0,0,10,0,0,0,0,0
1390 DATA 0,0,10,0,0,0,0,0,0,0,0,0
1400 DATA 1,0,0,0,0,0,15,0,0,0,0,0
1410 DATA 0,0,-5,0,0,0,0,0,0,0,0,0
1420 DATA 1,8,5,5,0,0,0,7,0,0,0,0
1430 DATA 0,0,0,0,0,0,0,0,-25,0,0,0
1440 DATA 1,0,0,0,0,0,0,0,10,0,0,0
1450 DATA 0,0,-10,0,0,0,0,0,0,0,0,0
1460 DATA 1,0,5,0,0,0,0,0,0,0,0,0
1470 DATA 0,10,0,0,0,0,0,0,0,0,1,0
1480 DATA 1,0,0,0,0,17,0,0,0,0,0,0
1490 DATA 0,0,0,0,0,-15,0,0,0,0,0,0
1500 DATA 1,0,0,0,0,0,0,0,10,0,0,0
1510 DATA 0,0,0,0,0,0,0,-15,0,0,0,0
1520 DATA 1,0,0,0,0,0,0,10,0,0,0,0
1530 DATA 0,0,0,0,0,0,0,-15,0,0,0,0
1540 DATA 1,0,0,-8,0,8,0,0,5,0,0,0
1550 DATA 0,-10,0,0,0,0,0,0,0,0,0,0
1560 DATA 1,8,0,0,0,0,0,0,0,0,0,0
1570 DATA 0,0,0,0,0,0,0,-10,0,0,0,0
1580 DATA 1,0,0,3,0,0,0,0,0,4,0,0
1590 DATA 0,-8,0,0,0,0,0,0,0,0,0,0
1600 DATA 1,0,0,0,5,0,0,0,0,0,0,0
1610 DATA 0,0,0,0,0,-10,0,0,0,0,0,0
1620 DATA 1,0,0,0,0,0,0,10,0,0,0,0
1630 DATA 0,-8,-5,0,0,0,0,-7,0,0,0,0
1640 DATA 1,10,0,0,0,0,0,0,0,0,0,0
1650 DATA 0,0,0,0,0,0,0,0,0,-14,0,0
1660 DATA 1,-10,0,0,0,0,0,0,0,0,0,0
1670 DATA 0,0,0,0,0,0,-5,0,0,0,0,0
1680 DATA -2,-10,7,-9,-2,-9,-7,-16,-4
1690 DATA 26,16,25,8,-14,21,14,-4,17
1700 DATA 18,23,11,12,46,18,-5,34,15
1710 DATA 23,28,-2,11,56,19,30,29,14
1720 DATA 20,15,15,7,-20,15,13,-10,12
1730 DATA 17,21,13,-2,37,23,23,19,14
1740 DATA 19,24,17,9,-5,26,13,-7,15
1750 DATA 11,18,14,11,67,15,22,18,13
1760 DATA 13,31,1,14,-11,18,18,-14,10
1770 DATA 14,-8,19,1,-9,25,-10,13,19
1780 DATA 24,24,23,20,51,27,38,33,18
1790 DATA 12,14,13,10,10,20,21,25,8
1800 DATA 7,-6,10,-10,30,6,-19,22,-2
1810 DATA 9,10,7,-5,-20,12,21,18,7
1820 DATA 7,8,5,-6,-40,3,16,-14,4
1830 DATA 8,6,4,-4,40,8,4,-12,3
1840 DATA 6,4,3,3,-15,5,8,-8,5
1850 DATA 5,7,-1,-3,45,6,-10,10,4
1860 DATA -2,6,-3,-8,-20,7,10,14,6
1870 DATA 11,11,-5,-7,30,10,-11,-18,-4
1880 DATA -5,13,-8,6,25,4,18,-22,-4
1890 DATA -8,-10,-10,-15,-20,-20,-23,-25,-7
1900 DATA 5,1,0,4,7,0,0,2,6,3
1910 REM
1920 REM   SECURITY NAMES
1930 REM
1940 A$="HIGHWAY IMPROVEMENT BONDS"
1950 B$="X-PANDO CORPORATION"
1960 C$="SEASIDE PROPERTIES INC."
1970 D$="OLD DOG MUTUAL FUND"
1980 E$="RUBBLE DEVELOPMENT"
1990 F$="SLIPPERY OIL COMPANY"
2000 G$="BUMPY TRANSPORT CO."
2010 H$="KRASH AUTO COMPANY"
2020 I$="ZAP ELECTRONICS   "
2030 J$="BLINKEY POWER & LIGHT CO."
2040 REM
2050 REM
2060 PRINT "WANT INSTRUCTIONS";
2070 INPUT R$
2080 IF LEFT$(R$,1)="N" THEN 2320
2090 IF LEFT$(R$,1)<>"Y" THEN 2070
2100 PRINT CHR$(26)
2110 PRINT "THE MAIN OBJECT OF BLACK FRIDAY IS TO SHREWDLY INVEST $5000"
2120 PRINT"IN THE GAME'S 10 SECURITIES, BUYING AND SELLING EACH YEAR FOR"
2130 PRINT"A MAXIMUM OF 10 YEARS (ROUNDS) IN AN ATTEMPT TO BECOME"
2140 PRINT"THE WEALTHIEST PLAYER."
2150 PRINT
2160 PRINT"EACH YEAR ALL PLAYERS WILL RECEIVE DIVIDENDS ON EVERY PAYING"
2170 PRINT"STOCK WHICH IS WORTH $50 OR MORE."
2180 PRINT
2190 PRINT"IF THE VALUE OF ANY STOCK FALLS TO 0,THAT STOCK GOES BANKRUPT"
2200 PRINT"AND ALL SHARES ARE SURRENDERED.THE VALUE OF THE STOCK IS THEN"
2210 PRINT"ESTABLISHED AT $100. IF THE VALUE OF ANY STOCK REACHES $150,"
2220 PRINT"THERE WILL BE A STOCK SPLIT."
2230 PRINT
2240 PRINT"A TABLE WILL BE PRINTED EACH YEAR GIVING THE CHANGE IN VALUE"
2250 PRINT"OF EACH STOCK, THE PRESENT PRICE, AND THE NUMBER OF SHARES"
2260 PRINT"EACH PLAYER OWNS OF EVERY STOCK. ALSO, ANY DIVIDENDS RECEIVED"
2270 PRINT"FOR THE YEAR WILL BE SHOWN ALONG WITH EACH PLAYERS TOTAL CASH"
2280 PRINT
2290 PRINT "PRESS SPACE BAR TO PLAY"
2300 WAIT 0,1,1
2310 PRINT CHR$(26)
2320 PRINT CHR$(26)
2330 PRINT"AVAILABLE SECURITIES, ABBREVIATION, DIVIDENDS PER SHARE"
2340 PRINT
2350 FOR N=1 TO 10
2360 GOSUB 4190
2370 PRINT S$,MID$(V$,3*N-2,3),MID$(Y$,4*N-3,4)
2380 NEXT N
2390 PRINT
2400 INPUT "NUMBER OF PLAYERS (1 TO 4)="; P
2410 IF P>4 THEN 2450
2420 IF P<=0 THEN 2450
2430 FOR I=1 TO 4: FOR J=1 TO 12: M(I,J)=0: NEXT J: NEXT I
2440 INPUT "NUMBER OF YEARS (3 TO 10)="; S
2450 IF S<3 THEN 2510
2460 IF S>10 THEN 2510
2470 PRINT CHR$(26)
2480 FOR I=1 TO 9: F(I)=0: NEXT I
2490 FOR N=1 TO P
2500 M(N,1)=5000
2510 NEXT N
2520 FOR I=1 TO 10: T(I)=100: NEXT I
2530 Y=0
2540 REM
2550 REM
2560 REM   FIND MARKET CHANGES FOR NEXT ROUND,SEE IF BULL OR BEAR MARKET
2570 REM
2580 D=INT(RND(1)*11+1)
2590 C=INT(RND(1)*36+1)
2600 IF A(C,12)=1 THEN 2590
2610 A(C,12)=1
2620 FOR N=2 TO 10
2630 GOSUB 4190
2640 IF A(C,1)=1 THEN 2690
2650 W$="BEAR"
2660 F(N-1)=A(C,N)+E(D,N-1)
2670 T(N)=T(N)+F(N-1)
2680 GOTO 2750
2690 F(N-1)=A(C,N)+U(D,N-1)
2700 W$="BULL"
2710 T(N)=T(N)+F(N-1)
2720 REM
2730 REM   CHECK FOR STOCK SPLITS
2740 REM
2750 IF T(N)<150 THEN 2870
2760 PRINT "*** "+S$+" STOCKS SPLIT ***"
2770 IF T(N)/2=INT(T(N)/2) THEN 2800
2780 T(N)=INT(T(N)/2)+1
2790 GOTO 2810
2800 T(N)=T(N)/2
2810 FOR J=1 TO P
2820 M(J,N+1)=M(J,N+1)*2
2830 NEXT J
2840 REM
2850 REM   CHECK FOR BANKRUPT STOCKS
2860 REM
2870 IF T(N)>0 THEN 2940
2880 T(N)=100
2890 FOR J=1 TO P
2900 M(J,N+1)=0
2910 NEXT J
2920 PRINT "*** "+S$+" WENT BANKRUPT ***"
2930 PRINT "THESE STOCKS MUST BE SURRENDERED"
2940 NEXT N
2950 Y=Y+1
2960 REM
2970 REM   ADD EACH PLAYERS DIVIDENDS TO TOTAL CASH
2980 REM
2990 FOR N=1 TO P
3000 M(N,12)=0
3010 FOR J=1 TO 10
3020 IF T(J)<50 THEN 3040
3030 M(N,12)=M(N,12)+K(J)*M(N,J+1)
3040 NEXT J
3050 IF A(C,11)=0 THEN 3080
3060 M(N,12)=M(N,12)+M(N,3)*2
3070 PRINT "*** X-PANDO CORP. PAYS $2 DIVIDENDS PER SHARE ***"
3080 M(N,1)=M(N,1)+M(N,12)
3090 NEXT N
3100 REM
3110 REM
3120 REM   PRINT WHAT HAPPENED & CURRENT VALUES
3130 REM
3140 PRINT CHR$(26) : PRINT "*** YEAR ";Y;"*** "+W$+" MARKET ***"
3150 PRINT TAB(23);"PLAYER HOLDINGS    YEAR ";Y
3160 PRINT TAB(6);" +/-$    PRICE";
3170 FOR N=1 TO P
3180 PRINT TAB(18+8*N);N;
3190 NEXT N
3200 PRINT
3210 PRINT LEFT$(V$,3);TAB(8);"0";TAB(16);"100";
3220 FOR N=1 TO P
3230 PRINT TAB(18+8*N);M(N,2);
3240 NEXT N
3250 PRINT
3260 FOR N=1 TO 9
3270 PRINT MID$(V$,3*N+1,3);TAB(7);F(N);TAB(15);T(N+1);
3280 FOR J=1 TO P
3290 PRINT TAB(18+8*J);M(J,N+2);
3300 NEXT J
3310 PRINT
3320 NEXT N
3330 PRINT
3340 PRINT "DIVIDENDS FOR YEAR";
3350 FOR N=1 TO P
3360 PRINT TAB(18+8*N);M(N,12);
3370 NEXT N
3380 PRINT
3390 PRINT "NEW CASH TOTAL";
3400 FOR N=1 TO P
3410 PRINT TAB(18+8*N);M(N,1);
3420 NEXT N
3430 PRINT
3440 PRINT "NEW NET WORTH ";
3450 GOSUB 4400
3460 FOR N=1 TO P
3470 PRINT TAB(18+8*N);X(N);
3480 NEXT N
3490 IF Y=S THEN 3930
3500 REM
3510 REM
3520 REM   CHECK IF ANYONE WANTS TO SELL OR BUY ANYTHING
3530 REM
3540 FOR N=1 TO P
3550 PRINT
3560 PRINT "***  PLAYER ";N;" ***"
3570 PRINT "YOU NOW HAVE $";M(N,1)
3580 FOR J=1 TO 10
3590 IF M(N,J+1)<>0 THEN 3620
3600 NEXT J
3610 GOTO 3730
3620 INPUT "WANT TO SELL"; R$
3630 IF R$="N" THEN 3730
3640 IF R$<>"Y" THEN 3760
3650 GOSUB 4080
3660 INPUT "NUMBER OF SHARES"; R
3670 IF R<=M(N,J+1) THEN 3700
3680 PRINT "*** YOU ONLY HAVE ";M(N,J+1);" SHARES ***"
3690 GOTO 3660
3700 M(N,J+1)=M(N,J+1)-R
3710 M(N,1)=M(N,1)+R*T(J)
3720 GOTO 3570
3730 FOR J=1 TO 10
3740 IF M(N,1)>T(J) THEN 3770
3750 NEXT J
3760 GOTO 3890
3770 INPUT "WANT TO BUY"; R$
3780 IF R$="N" THEN 3890
3790 IF R$<>"Y" THEN 3950
3800 GOSUB 4080
3810 INPUT "NUMBER OF SHARES"; R
3820 IF R*T(J)<=M(N,1) THEN 3850
3830 PRINT "ONLY MONEY ENOUGH FOR ";INT(M(N,1)/T(J));"SHARES"
3840 GOTO 3810
3850 M(N,J+1)=M(N,J+1)+R
3860 M(N,1)=M(N,1)-R*T(J)
3870 PRINT "YOU NOW HAVE $";M(N,1)
3880 GOTO 3730
3890 NEXT N
3900 GOTO 2580
3910 REM
3920 REM
3930 REM   CLOSING OUT AT END OF GAME - PRINT FINAL TOTALS
3940 REM
3950 PRINT
3960 PRINT "*** FINAL TOTALS ARE:"
3970 PRINT "PLAYER          TOTAL"
3980 FOR N=1 TO P
3990 FOR J=1 TO 10
4000 M(N,1)=M(N,1)+T(J)*M(N,J+1)
4010 NEXT J
4020 PRINT
4030 PRINT N,M(N,1)
4040 NEXT N
4050 GOTO 4480
4060 REM
4070 REM
4080 REM   SUBROUTINE TO LOOK UP STOCK NAMES FOR BUY & SELL
4090 REM
4100 PRINT "NAME OF STOCK";
4110 INPUT R$
4120 FOR J=1 TO 10
4130 IF LEFT$(R$,2)=MID$(V$,3*J-2,2) THEN 4170
4140 IF LEFT$(R$,2)=MID$(V$,3*J-1,2) THEN 4170
4150 NEXT J
4160 GOTO 4100
4170 RETURN
4180 REM
4190 ON N GOTO 4200,4220,4240,4260,4280,4300,4320,4340,4360,4380
4200 S$=A$
4210 RETURN
4220 S$=B$
4230 RETURN
4240 S$=C$
4250 RETURN
4260 S$=D$
4270 RETURN
4280 S$=E$
4290 RETURN
4300 S$=F$
4310 RETURN
4320 S$=G$
4330 RETURN
4340 S$=H$
4350 RETURN
4360 S$=I$
4370 RETURN
4380 S$=J$
4390 RETURN
4400 FOR N=1 TO P
4410 W=0
4420 FOR J=1 TO 10
4430 W=W+T(J)*M(N,J+1)
4440 NEXT J
4450 X(N)=W+M(N,1)
4460 NEXT N
4470 RETURN
4480 RESET
```

## CHECKERS.BAS

```bas
10 '
20 '   **********************
30 '        Adapted from
40 '    BASIC COMPUTER GAMES
50 '   Edited by David H. Ahl
60 '   **********************
70 '
80 PRINT TAB(16)"CHECKERS"
90 SCREEN 0
100 PRINT :PRINT :PRINT
105 KEY OFF
110 FOR K=1 TO 10
120 KEY K,"-1,-1"+ CHR$(13)
130 NEXT K
140 PRINT "In this game, the computer is `X' and"
150 PRINT "you are `O'. The computer will move "
160 PRINT "first."
170 PRINT
180 PRINT "The computer will print `+ to' if you"
190 PRINT "have another jump. Press a function "
200 PRINT "key if you can not jump."
210 PRINT :PRINT :PRINT "Press any key to begin."
220 KB$=INKEY$: IF KB$="" THEN 220
230 CLS
240 DIM R(4),S(7,7)
250 G=-1
260 R(0) = -99
270 DATA 1,0,1,0,0,0,-1,0,0,1,0,0,0,-1,0,-1,15
280 FOR X = 0 TO 7
290   FOR Y = 0 TO 7
300   READ J
310   IF J=15 THEN 330
320   S(X,Y) = J : GOTO 350
330   RESTORE
340   READ S(X,Y)
350   NEXT Y
360 NEXT X
370 FOR X = 0 TO 7
380   FOR Y = 0 TO 7
390   IF S(X,Y) >-1 THEN 500
400   IF S(X,Y) =-1 THEN 410 ELSE 440
410      FOR A = -1 TO 1 STEP 2
420      B=G: GOSUB 530
430      NEXT A
440   IF S(X,Y) = -2 THEN 450 ELSE 500
450      FOR A = -1 TO 1 STEP 2
460         FOR B = -1 TO 1 STEP 2
470         GOSUB 530
480         NEXT B
490      NEXT A
500   NEXT Y
510 NEXT X
520 GOTO 750
530 U = X + A
540 V = Y + B
550 IF U<0 OR U>7 OR V<0 OR V>7 THEN 620
560 IF S(U,V) = 0 THEN GOSUB 630:GOTO 620
570 IF S(U,V) < 0 THEN 620
580 U = U + A
590 V = V + B
600 IF U<0 OR V<0 OR U>7 OR V>7 THEN 620
610 IF S(U,V) = 0 THEN GOSUB 630
620 RETURN
630 IF V=0 AND S(X,Y)=-1 THEN Q=Q+2
640 IF ABS(Y-V)= 2 THEN Q = Q+5
650 IF Y = 7 THEN Q=Q-2
660 IF U=0 OR U=7 THEN Q=Q+1
670 FOR C=-1 TO 1 STEP 2
680 IF U+C<0 OR U+C>7 OR V+G<0 THEN 720
690 IF S(U+C,V+G)<0 THEN Q=Q+1:GOTO 720
700 IF U-C<0 OR U-C>7 OR V-G>7 THEN 720
710 IF S(U+C,V+G)>0 AND (S(U-C,V-G)=0 OR (U-C=X AND V-G=Y)) THEN Q=Q-2
720 NEXT C
730 IF Q>R(0) THEN R(0)=Q : R(1)=X : R(2)=Y : R(3)=U : R(4)=V
740 Q=0 : RETURN
750 IF R(0) = -99 THEN 1430
760 PRINT "  From"R(1)","R(2)" tO "R(3)","R(4);:R(0)=-99
770 IF R(4)=0 THEN S(R(3),R(4))=-2:GOTO 1000
780 S(R(3),R(4))=S(R(1),R(2))
790 S(R(1),R(2))=0
800 IF ABS(R(1)-R(3))<>2 THEN 1000
810 S((R(1)+R(3))/2,(R(2)+R(4))/2)=0
820 X =R(3) : Y=R(4)
830 IF S(X,Y)=-1 THEN 840 ELSE 880
840 B=-2
850 FOR A=-2 TO 2 STEP 4
860 GOSUB 960
870 NEXT A
880 IF S(X,Y)=-2 THEN 890 ELSE 940
890 FOR A =-2 TO 2 STEP 4
900    FOR B =-2 TO 2 STEP 4
910    GOSUB 960
920    NEXT B
930 NEXT A
940 IF R(0)<>-99 THEN PRINT "to"R(3)","R(4);:R(0)=-99:GOTO 770
950 GOTO 1000
960 U=X+A : V=Y+B
970 IF U<0 OR U>7 OR V<0 OR V>7 THEN 990
980 IF S(U,V)=0 AND S(X+A/2,Y+B/2)>0 THEN GOSUB 630
990 RETURN
1000 PRINT :PRINT :PRINT
1010 FOR Y=7 TO 0 STEP-1
1020   FOR X=0 TO 7
1030   I=4*X : PRINT TAB(I);
1040   IF S(X,Y)=0 THEN PRINT ".";
1050   IF S(X,Y)=1 THEN PRINT "O";
1060   IF S(X,Y)=-1 THEN PRINT "X";
1070   IF S(X,Y)=-2 THEN PRINT "XK";
1080   IF S(X,Y)=2 THEN PRINT "OK";
1090   NEXT X
1100 PRINT "  ";:COLOR 0,7:PRINT Y:COLOR 7,0:PRINT "                               ";:COLOR 0,7:PRINT "  ":COLOR 7,0
1110 NEXT Y
1120 COLOR 0,7:PRINT "0  1   2   3   4   5   6   7     ":COLOR 7,0
1130 FOR L = 0 TO 7
1140   FOR M = 0 TO 7
1150   IF S(L,M)=1 OR S(L,M)=2 THEN Z=1
1160   IF S(L,M)=-1 OR S(L,M)=-2 THEN T=1
1170   NEXT M
1180 NEXT L
1190 IF Z<>1 THEN 1430
1200 IF T<>1 THEN 1440
1210 T=0 : Z=0
1220 INPUT "    From ";E,H
1230 X=E
1240 Y=H
1250 IF S(X,Y)<=0 THEN :BEEP :GOTO 1220
1260 INPUT "    To ";A,B
1270 X=A
1280 Y=B
1290 IF S(X,Y)=0 AND ABS(A-E)<=2 AND ABS(A-E)=ABS(B-H) THEN 1310
1300 PRINT CHR$(7):GOTO 1260
1310 I=46
1320 S(A,B)=S(E,H):S(E,H)=0
1330 IF ABS(E-A)<>2 THEN 1400
1340 S((E+A)/2,(H+B)/2)=0
1350 INPUT "  + to ";A1,B1
1360 IF A1<0 THEN 1400
1370 IF S(A1,B1)<>0 OR ABS(A1-A)<>2 OR ABS(B1-B)<>2 THEN 1350
1380 E=A:H=B:A=A1:B=B1:I=I+15
1390 GOTO 1320
1400 IF B=7 THEN S(A,B)=2
1410 CLS :PRINT
1420 GOTO 370
1430 PRINT :PRINT "     You Win." :GOTO 1450
1440 PRINT :PRINT "     I Win":GOTO 1450
1450 GOSUB 1470
1460 LOAD"masterp",R
1470 KEY 1,"LIST "
1480 KEY 2,"RUN"+CHR$(13)
1490 KEY 3,"LOAD "+CHR$(34)
1500 KEY 4,"SAVE "+CHR$(34)
1510 KEY 5,"CONT"+CHR$(13)
1520 KEY 6,","+CHR$(34)+"LPT1:"+CHR$(34)+CHR$(13)
1530 KEY 7,"TRON"+CHR$(13)
1540 KEY 8,"TROFF"+CHR$(13)
1550 KEY 9,"KEY "
1560 KEY 10,"SCREEN 0,0,0"+CHR$(13)
1570 FOR X= 1 TO 1000: NEXT X
1580 RETURN
```

## HUSTLE.BAS

```bas
10 '**** HUSTLE ****
15 'Written by Charles Bennett (PC251)
16 'Distribute and copy as you wish but do not change the source.
17 'All distributed copies must be the same as this version.
20 CLEAR ,,25000: OPTION BASE 1: DIM TOP.FIVE!(5),NAMES$(5),BUFFER(500): DEFINT A-L: DEFINT N-R: DEFINT T-Z: OPEN "hustle.dat" FOR INPUT AS #1: FOR I=1 TO 5: INPUT#1,NAMES$(I),TOP.FIVE!(I): NEXT: CLOSE
25 KEY OFF: RANDOMIZE RND^RND: LOCATE ,,0: WIDTH 80: SCREEN 0,0,0
30 CLS: LOCATE 12,35: PRINT "Do you wish directions?"
40 Z$=INKEY$: IF Z$="" THEN 40 ELSE IF Z$="y" OR Z$="Y" THEN 50 ELSE 140
50 CLS: LOCATE 1,34: COLOR 15: PRINT "SUPER HUSTLE": LOCATE 2,28: PRINT "(By Charles Bennett PC251)": LOCATE 4,1: COLOR 7: PRINT "Super Hustle is a game of co-ordination and skill.  You must monuever your"
60 PRINT "'Hustler' around the grid attempting to capture as many points as possible to": PRINT "enter the ";: COLOR 15: PRINT "SUPER HUSTLE ";: COLOR 7: PRINT "Hall of Fame!!"
70 PRINT: PRINT "As the game progresses and you aquire more points the tail of your Hustler": PRINT "grows longer and longer... but be careful and avoid all obsticles that are not  of value to you."
80 PRINT: PRINT "Boxes that appear with '???' inside them score from 100-1000 points... but      sometimes those points can be negative!!.  Boxes with '/\/\/' inside them cause a long tail to shorten temporarily allowing you to change your strategy."
90 PRINT: PRINT "The Hustler is controlled by the following keys:": PRINT: PRINT "F1 - Increases the speed of the Hustler": PRINT "F2 - Decreases the speed of the Hustler": PRINT CHR$(24);" - Move up": PRINT CHR$(25);" - Move down"
100 PRINT CHR$(26);" - Move right": PRINT CHR$(27);" - Move left"
110 KEY OFF: LOCATE 25,1: COLOR 31: PRINT "Press any key to continue";: COLOR 7
120 Z$=INKEY$: IF Z$="" THEN 120 ELSE 140
130 STOP
140 KEY OFF: DEFINT A-L: DEFINT N-R: DEFINT T-Z: DIM BUFFER(500): RANDOMIZE RND^RND: LOCATE ,,0
150 DEF SEG=0: IF (PEEK(1040) AND 48) = 48 THEN DEF SEG=&HB000 ELSE DEF SEG=&HB800
160 DEF FNFIND(ROW,COL)=(ROW-1)*160+COL*2-2
170 ON KEY (11) GOSUB 280: ON KEY (12) GOSUB 310: ON KEY (13) GOSUB 340: ON KEY (14) GOSUB 370: ON KEY (1) GOSUB 560: ON KEY (2) GOSUB 570: HEAD=0: PREV.KEY=2: MEN=3
180 PREV.KEY=2: R=12: C=40: A=12: B=39: X=2: Y=2: LOCATE R,C: PRINT "[";: HEAD=HEAD+1
190  KEY (1) OFF: KEY (2) OFF: KEY (11) OFF: KEY (12) OFF: KEY (13) OFF: KEY (14) OFF
200 BUFFER(HEAD)=PREV.KEY
210 CLS: PRINT STRING$(80,"[");: FOR I=2 TO 23: LOCATE I,1: PRINT "[";: LOCATE I,80: PRINT "[";: NEXT: LOCATE 23,1: PRINT STRING$(80,"[");
220 FOR I=1 TO MEN: LOCATE 25,I*5-4: PRINT STRING$(3,219);: NEXT: PAUSE=150
230 LOCATE 25,43: PRINT "SCORE:";: LOCATE 25,50: PRINT USING "#######";SCORE;
240 Z$=INKEY$: IF Z$="" THEN 250 ELSE 240
250 ON ERROR GOTO 960
260 KEY (1) ON: KEY (2) ON: KEY (11) ON: KEY (12) ON: KEY (13) ON: KEY (14) ON
270 ON PREV.KEY GOSUB 280,340,370,310: GOTO 270
280 GOSUB 580: IF PREV.KEY=3 THEN 400 ELSE R=R-1: IF R<2 THEN 400 ELSE HEAD=HEAD+1: BUFFER(HEAD)=1: IF PEEK(FNFIND(R,C))=219 THEN 400
290 IF PEEK(FNFIND(R,C))=61 THEN GOSUB 820
300 LOCATE R,C: PRINT "[";: PREV.KEY=1: RETURN 260
310 GOSUB 580: IF PREV.KEY=2 THEN 400 ELSE C=C-1: IF C<2 THEN 400 ELSE HEAD=HEAD+1: BUFFER(HEAD)=4: IF PEEK(FNFIND(R,C))=219 THEN 400
320 IF PEEK(FNFIND(R,C))=61 THEN GOSUB 820
330 LOCATE R,C: PRINT "[";: PREV.KEY=4: RETURN 260
340 GOSUB 580: IF PREV.KEY=4 THEN 400 ELSE C=C+1: IF C>79 THEN 400 ELSE HEAD=HEAD+1: BUFFER(HEAD)=2: IF PEEK(FNFIND(R,C))=219 THEN 400
350 IF PEEK(FNFIND(R,C))=61 THEN GOSUB 820
360 LOCATE R,C: PRINT "[";: PREV.KEY=2: RETURN 260
370 GOSUB 580: IF PREV.KEY=1 THEN 400 ELSE R=R+1: IF R>22 THEN 400 ELSE HEAD=HEAD+1: BUFFER(HEAD)=3: IF PEEK(FNFIND(R,C))=219 THEN 400
380 IF PEEK(FNFIND(R,C))=61 THEN GOSUB 820
390 LOCATE R,C: PRINT "[";: PREV.KEY=3: RETURN 260
400 FOR I=7 TO 150 STEP 5: SOUND I^2,0.5: NEXT: MEN=MEN-1: IF MEN<0 THEN LOCATE 12,35: PRINT "GAME OVER!": GOTO 420
410 HEAD=0: TAIL=0: LOCATE 12,35: COLOR 31: PRINT "READY!";: COLOR 7: FOR I=1 TO 3000: NEXT: GOTO 180
420 IF SCORE>TOP.FIVE!(5) THEN CLS: LOCATE 14,24: PRINT "Your score is one of the best five": LOCATE 15,17: PRINT "qualifying you for a position in the Hall of Fame": LOCATE 16,30: INPUT "Enter your name here";A$ ELSE 550
430 IF LEN(A$)>30 THEN A$=LEFT$(A$,30)
440 IF SCORE>TOP.FIVE!(1) THEN PUSH=4: GOTO 490
450 IF SCORE>TOP.FIVE!(2) THEN PUSH=3: GOTO 490
460 IF SCORE>TOP.FIVE!(3) THEN PUSH=2: GOTO 490
470 IF SCORE>TOP.FIVE!(4) THEN PUSH=1: GOTO 490
480 IF SCORE>TOP.FIVE!(5) THEN PUSH=0: GOTO 540
490 TEMP=PUSH
500 TOP.FIVE!(5)=TOP.FIVE!(4): NAMES$(5)=NAMES$(4): PUSH=PUSH-1: IF PUSH=0 THEN 540
510 TOP.FIVE!(4)=TOP.FIVE!(3): NAMES$(4)=NAMES$(3): PUSH=PUSH-1: IF PUSH=0 THEN 540
520 TOP.FIVE!(3)=TOP.FIVE!(2): NAMES$(3)=NAMES$(2): PUSH=PUSH-1: IF PUSH=0 THEN 540
530 TOP.FIVE!(2)=TOP.FIVE!(1): NAMES$(2)=NAMES$(1): PUSH=PUSH-1: IF PUSH=0 THEN 540
540 PUSH=TEMP: TOP.FIVE!(5-PUSH)=SCORE: NAMES$(5-PUSH)=A$: OPEN "hustle.dat" FOR OUTPUT AS #1: FOR I=1 TO 5: WRITE#1,NAMES$(I),TOP.FIVE!(I): NEXT: CLOSE
550 FOR I=1 TO 3000: NEXT I: CLS: LOCATE 5,17: PRINT "I";STRING$(44,"M");";": FOR I=1 TO 10: LOCATE I+5,17: PRINT ":": LOCATE I+5,62: PRINT ":": NEXT I: LOCATE 16,17: PRINT "H";STRING$(44,"M");"<"
555 LOCATE 6,26: COLOR 15: PRINT "SUPER HUSTLE HALL OF FAME": COLOR 7: LOCATE 8,20: PRINT "NAME OF PLAYER";TAB(51);"SCORE";
556 FOR I=10 TO 14: LOCATE I,20: PRINT NAMES$(I-9);TAB(51);: PRINT USING "#######";TOP.FIVE!(I-9): NEXT
557 LOCATE 25,22: COLOR 31: PRINT "Press any key to play SUPER HUSTLE!!";: COLOR 7
558 Z$=INKEY$: IF Z$="" THEN 558 ELSE CLEAR: GOTO 10
560 IF PAUSE<0 THEN RETURN ELSE PAUSE=PAUSE-50: RETURN
570 PAUSE=PAUSE+50: RETURN
580 IF MAN.SCORE<1000 THEN AVG.TAIL=8
590 IF MAN.SCORE>1000 THEN AVG.TAIL=15
600 IF MAN.SCORE>4000 THEN AVG.TAIL=40
610 IF MAN.SCORE>6000 THEN AVG.TAIL=60
620 IF MAN.SCORE>8000 THEN AVG.TAIL=85
630 IF SCORE>10000 THEN AVG.TAIL=110: IF EXTRA.MAN=0 THEN MEN=MEN+1: PLAY "MBL40BP9BP9B": LOCATE 25,MEN*5-4: PRINT STRING$(3,219);: EXTRA.MAN=1
640 IF SCORE>15000 THEN AVG.TAIL=160
650 IF SCORE>20000 THEN AVG.TAIL=200: IF EXTRA.MAN=1 THEN MEN=MEN+1: PLAY "MBL40BP9BP9B": LOCATE 25,MEN*5-4: PRINT STRING$(3,219);: EXTRA.MAN=2
660 IF SCORE>25000 THEN AVG.TAIL=275
670 KEY (1) STOP: KEY (2) STOP: KEY (11) STOP: KEY (12) STOP: KEY (13) STOP: KEY (14) STOP: FOR I=1 TO PAUSE: NEXT: ELAPSED.TIME=ABS(BEGIN.TIME-VAL(RIGHT$(TIME$,2)))
680 IF ELAPSED.TIME>RND*75+1 THEN GOSUB 760: BEGIN.TIME=VAL(RIGHT$(TIME$,2))
690 IF HEAD<TAIL THEN TAIL.LEN=500-TAIL+HEAD ELSE TAIL.LEN=HEAD-TAIL
700 IF TAIL.LEN>=AVG.TAIL THEN TAIL=TAIL+1: ON BUFFER(TAIL) GOSUB 720,730,740,750
710 RETURN
720 A=A-1: LOCATE A,B: PRINT " ";: RETURN
730 B=B+1: LOCATE A,B: PRINT " ";: RETURN
740 A=A+1: LOCATE A,B: PRINT " ";: RETURN
750 B=B-1: LOCATE A,B: PRINT " ";: RETURN
760 IF BLOCK.FLAG=1 THEN LOCATE X,Y: PRINT STRING$(7,32);: LOCATE X+1,Y: PRINT "       ";: LOCATE X+2,Y: PRINT STRING$(7,32);: BLOCK.FLAG=0
770 X=INT(RND*17+2): Y=INT(RND*72+2): FOR I=0 TO 2: FOR J=0 TO 6: IF PEEK(FNFIND(X+I,Y+J))<>32 THEN I=5: J=10
780 NEXT J,I: IF J=11 THEN RETURN
790 IF RND<0.09999999 THEN 810
800 LOCATE X,Y: PLAY "MBO3L64MSC": PRINT STRING$(7,61);: LOCATE X+1,Y: PRINT "= ??? =";: LOCATE X+2,Y: PRINT STRING$(7,61);: BLOCK.FLAG=1: RETURN
810 LOCATE X,Y: FOR I=400 TO 2000 STEP 50: SOUND I,0.5: NEXT: PRINT STRING$(7,61);: LOCATE X+1,Y: PRINT "=/\/\/=";: LOCATE X+2,Y: PRINT STRING$(7,61);: BLOCK.FLAG=1: RETURN
820 KEY (1) STOP: KEY (2) STOP: KEY (11) STOP: KEY (12) STOP: KEY (13) STOP: KEY (14) STOP
830 IF PEEK(FNFIND(X+1,Y+1))=47 THEN 900
840 POINTS=INT(RND*10+1)*100: LOCATE X+1,Y+1: PRINT POINTS;: IF RND<0.25 THEN 880
850 PLAY "mfl64abcdeddg": POINTS=POINTS-100: MAN.SCORE=MAN.SCORE+100: SCORE=SCORE+100: LOCATE 25,50: PRINT USING "#######";SCORE;: IF POINTS=0 THEN 870
860 LOCATE X+1,Y+1: PRINT POINTS;: GOTO 850
870 LOCATE X,Y: PRINT STRING$(7,32);: LOCATE X+1,Y: PRINT "       ";: LOCATE X+2,Y: PRINT STRING$(7,32);: BLOCK.FLAG=0: RETURN
880 PLAY "O2mfl64GFGFGFDG": POINTS=POINTS-100: SCORE=SCORE-100: LOCATE 25,50: PRINT USING "#######";SCORE;: IF POINTS=0 THEN 870
890 LOCATE X+1,Y+1: PRINT POINTS;: GOTO 880
900 LOCATE 25,25: COLOR 15: PRINT "TAIL ZAPPPP!!!";: COLOR 7
910 IF HEAD>TAIL THEN TEMP=HEAD-TAIL
920 IF HEAD<TAIL THEN TEMP=500+HEAD-TAIL
930 TEMP=TEMP-7
940 TEMP=TEMP-1: TAIL=TAIL+1: SOUND 1590,1: ON BUFFER(TAIL) GOSUB 720,730,740,750: FOR I=1 TO 40: NEXT: IF TAIL=500 THEN TAIL=0
950 IF TEMP>8 THEN 940 ELSE LOCATE 25,25: PRINT STRING$(15,32);: GOTO 870  
960 IF ERR<>9 THEN BEEP: STOP
970 KEY (1) STOP: KEY (2) STOP: KEY (11) STOP: KEY (12) STOP: KEY (13) STOP: KEY (14) STOP
980 IF HEAD=501 THEN HEAD=1
990 IF TAIL=501 THEN TAIL=1
1000 RESUME
1010 IF PEEK(FNFIND(A-1,B))=219 THEN RETURN ELSE TEMP=0: RETURN
1020 IF PEEK(FNFIND(A,B+1))=219 THEN RETURN ELSE TEMP=0: RETURN
1030 IF PEEK(FNFIND(A+1,B))=219 THEN RETURN ELSE TEMP=0: RETURN
1040 IF PEEK(FNFIND(A,B-1))=219 THEN RETURN ELSE TEMP=0: RETURN
```

## KNOCK.BAS

```bas
10 REM ----- TELL KNOCK-KNOCK JOKES
20 REM ----- TRS-80 MOD 1 LEVEL II 16K
30 REM ----- 80 11 03 DJB
40 CLEAR 12000
50 CLS
100 REM ----- FORGET
110 DIM J$(255,2)
120 J$(1,1)=""
130 J$(1,2)=""
140 P=1
150 INPUT "You may begin ...";ANS$
200 REM ----- KNOCK
210 A$="WHO'S THERE?"
220 GOSUB 500
230 IF I$="" THEN GOTO 290
240 J$(P,1)=I$
250 A$=I$+" WHO?"
260 GOSUB 500
270 J$(P,2)=I$
280 P=P+1
290 PRINT "Now it's my turn"
291 FOR ISUB = 1 TO 500:NEXT
292 CLS
300 REM ----- TELL
310 FOR A=1 TO P-1
320 A$="KNOCK! KNOCK!"
330 GOSUB 500
340 IF I$="" THEN A=P: GOTO 390
350 A$=J$(A,1)
360 GOSUB 500
370 PRINT J$(A,2)
380 PRINT
390 NEXT A
400 GOTO 150
500 REM ----- ASK
510 PRINT A$
520 I$=""
530 INPUT I$
540 RETURN
```

## MEDLEY.BAS

```bas
10 COLOR 2,0
9999 'Grandfather's Clock
10000 A$ = "dg2f#ga2gab2 o4 c o3 be2aag2ggf#2ef#g1."
10010 B$ = "d"
10020 C$ = "gb o4 d2 o3 bag2f#gagf#ed2gb o4 d2 o3 bag2f#ga1.ddg p2. a p2. b8b8b o4 c o3 b e2aag1f#1g1.d"
10030 D$ = "dg2ddeed2"
10040 E$ = "o2 b p4 o3 d p4 o2 b p4 o3 d"
10050 F$ = "dg p2. a p2. b8b8b o4 c o3 b e2 aa g1 f#1 g1."
10090 PLAY "mn t150 l4 o3; xa$;xb$;xa$;xc$;xd$;xe$;xd$;xe$;xf$;"
10099 'Camptown Races
10100 A$ = "GGEGAGE4"
10110 B$ = "ED4.ED4."
10120 C$ = "D4EDC4.P8"
10130 D$ = "C.C16EG O4 C4.P8 O3 A.A16 O4 C O3 AG4.P8GG L16 EEGGA8G8E4D8EFE8DDC4"
10140 PLAY "O3 MS T120 L8;XA$;XB$;XA$;XC$;XA$;XB$;XA$;XC$;XD$;"
10199 'Cindy
10200 A$ = "O4 CDC"
10210 B$ = "O3 AAGF2"
10220 C$ = "O3 A O4 CC2P8"
10230 D$ = "O3 AAGFFGAAGGF2"
10290 PLAY "MN L4 T160;XA$;XB$;XA$;XC$;XA$;XD$;"
10299 'Home on the Range
10300 A$ = "CCFGA4F16E16D.B-16B-B-4"
10310 B$ = "B-16B-16 O4 C4 O3 F16F16F.E16FG2P8"
10320 C$ = "B-16B-16A.G16FEFGF4.P8"
10330 D$ = "O4 C4. O3 B-A.G16A2 P8 C16C16F4F16F16F.E16FG2 P8"
10390 PLAY "MS T100 O3 L8;XA$;XB$;XA$;XC$;XD$;XA$;XC$;"
10399 'On Top of Old Smoky
10400 PLAY "MN O2 L4 T250 CCEG O3 C2. O2 A2..P8AFGAG1P4 CCEGG2.D2..P8EFEDC1"
10499 'Polly Wolly Doodle
10500 PLAY "MS O3 L8 T200 FGA4A4F4F4A4A4F4F4AAAAB-B-AAG2P4 EFG4G4E4E4G4G4E4G4 O4 CCCC O3 B-B-GGF2P4 FGA2.FGA2.FGA4A4B-4A4G2. EFGGGGEEEFGGGGEEG4 O4 CCCC O3 B-B-GGF2."
10599 'Down in the Valley
10600 A$ = "CFGA4.F4.AGFG2."
10610 B$ = "CGAB-4.G4.B-AGF2."
10690 PLAY "ML O3 T100 L8;XA$;XB$;XA$;XB$;"
10699 'When the Saints Go Marching In
10700 A$ = "O3 FAB- O4 C1 P8"
10710 B$ = "O3 FAB- O4 C2 O3 A2F2A2G1P4."
10720 C$ = "AGF2.FA2 O4 CCC O3 B-2. P4. AB- O4 C2 O3 A2F2G2F1"
10790 PLAY "T190 MN L4 O3;XA$;XA$;XB$;XC$;"
10799 'Pop Goes the Weasel
10800 A$ = "o2 b-8"
10810 B$ = "o3 e-e-8ff8g8b-8g8e-"
10820 C$ = "O3 E-E-8FF8G.E-."
10830 D$ = "O4 P16C8.P4 O3 FA-8G.E-."
10840 E$ = "O4 E-E-8CE-8D8F8D8 O3 B-B-8 O4 E-E-8 CE-8D. O3 B-B-8A-G8A-B-8 O4 CD8E-"
10890 PLAY "T200 MN L4;XA$;XB$;XA$;XC$;XB$;XD$;XE$;XD$;"
10899 'Skip to My Lou
10900 A$ = "o3 bbggbb16b16 o4 d4"
10910 B$ = "o3 aaf#f#aa16a16 o4 c4"
10920 C$ = "o3 ab16 o4 c16 o3 bag4g4"
10930 D$ = "o3 b4g4bb16b16 o4 d4"
10940 E$ = "o3 a4f#4aa16a16 o4 c4"
10990 PLAY "mn t120 l8;xa$;xb$;xa$;xc$;xd$;xe$;xd$;xc$;"
10999 'Clementine
11000 A$ = "o3 g8.g16gdb8.b16bgg8.b16 o4 ddc8. o3 b16a2"
11010 B$ = "o3 a8.b16 o4 cc o3 b8.a16bgg8.b16adf#8.a16g2"
11090 PLAY "mn t120 l4;xa$;xb$;xa$;xb$;"
11099 'Shoo Fly
11100 A$ = "o3 af4ga.b-16g4"
11110 B$ = "o3 ge4fg.a16f4"
11120 C$ = "o4 c.c16c o3 b-agf"
11130 D$ = "caaaaa4.caa16a16b-ag4.cgggggggg o4 cc16c16 o3 b-gf4 o4 c4"
11190 PLAY "ms t100 l8;xa$;xb$;xa$;xc$;xd$;xa$;xb$;xa$;xc$;"
11199 'Erie Canal
11200 A$ = "ad8d.ffg8g.a2"
11210 B$ = "a8a.ad8.e16f8d8e8d."
11220 C$ = "a o4 c o3 a o4 c o3 a o4 c8 o3 a.g2afafa8f.eaddffgf8g8aaag8a.d8e8f8d8e8d.c2"
11230 D$ = "a2a2a8.g16a8.f16g2"
11240 E$ = "a2af8.g16a8.f16g8.e16f"
11250 F$ = "a8.b-16 o4 c8. o3 b-16 o4 c8. o3 a16b-8gg8 o4 c8. o3 b-16 o4 c8. o3 a16b-"
11260 G$ = "b-8.b-16a8.g16a8.f16b-8.a16b-8.g16a8f8g8f."
11290 PLAY "mn t120 o3 l4;xa$;xb$;xa$;xb$;xc$;xd$;xe$;xf$;xg$;"
11299 'Michael, Row the Boat
11300 PLAY "mn t120 l4 o3 ceg.g8gag2ega2p16g8ag2 ceg.g8fed2cde2.dc2"
11399 'Oh, Susanna
11400 A$ = "o3 f16g16a o4 cc.d16c o3 a"
11410 B$ = "f.g16aagfg4."
11420 C$ = "f.g16aaggf4."
11430 D$ = "p4"
11440 E$ = "b-4b-4 o4 dd4dcc o3 afg4.p16"
11490 PLAY "mn t150 o3 l8;xa$;xb$;xa$;xc$;xa$;xb$;xa$;xc$;xd$;xe$;xa$;xc$;"
11499 'Swing Low, Sweet Chariot
11500 A$ = "b4g2b4g4.ged4."
11510 B$ = "ggggbb"
11520 C$ = "o4 d4d2.ed o3 b2. o4 d4 o3 g4.ged4."
11530 D$ = "a4g2."
11590 PLAY "mn t100 l8 o3;xa$;xb$;xc$;xb$;xd$;"
11599 'Row, row, row your boat
11600 PLAY "mn t160 l8 o3 c4.c4.c4de4.e4de4fg2. o4 c4c o3 g4ge4ec4cg4fe4dc2."
11699 'Amazing Grace
11700 PLAY "mn t120 l4 o3 dg2b8g8b2ag2ed2dg2b8g8b2a o4 d1 p4 o3 b o4 d. o3 b8 o4 d8 o3 b8g2de.g8g8e8d2dg2b8g8b2ag1"
11799 'Bicycle built for two
11800 PLAY "mn t200 l2 o4 c. o3 a.f.c.d4e4f4 o3 df4c1.g. o4 c. o3 a.f.d4e4f4ga4g1p4a4b-4a4g4 o4 c o3 a4g4f1g4af4df4d4c1c4fa4g4.p4.fa4g4a4b-4 o4 c4 o3 a4f4gc4f1"
11899 'For he's a jolly, good fellow
11900 A$ = "o3 fa4aaga"
11910 B$ = "o3 b-4.a4"
11920 C$ = "o3 ag4ggfga4.f4"
11930 D$ = "o3 b-4. o4 d4dccc o3 b-4gf2p8"
11940 E$ = "o3 a o4 cccd4dc2p8"
11990 PLAY "mn l8 t200 o3;xa$;xb$;xc$;xa$;xd$;xe$;xe$;xa$;xb$;xc$;xa$;xd$;"
11999 'My Bonnie
12000 A$ = "o3 g o4 e.d8cdc o3 age2.p8"
12010 B$ = "o3 g o4 e.d8cc o3 b o4 cd1p8"
12020 C$ = "o3 ga o4 dc o3 bab o4 c1p2"
12030 D$ = "o3 g2. o4 c2. o3 a2. o4 d2. o3 bbbbab"
12040 E$ = "o4 c2de2."
12050 F$ = "o4 c1"
12090 PLAY "mn t220 l4 o3;xa$;xb$;xa$;xc$;xd$;xe$;xd$;xf$;"
12299 'Twinkle, Twinkle                                                         list 11000-
12300 A$ = "ccggaag2ffeeddc2"
12310 B$ = "ggffeed2"
12390 PLAY "ms t140 l4 o4;xa$;xb$;xb$;xa$;"
12999 'Pomp & Circumstance
13000 PLAY "mn t100 l4 o2 d2 c#8d8e4 o1 b2a2g2f#8g8a4e1f#2g#8a4b8 o2 e2 o1 a2 o2 d2d8c#4 o1b8 o2 c#1 o1 f#2g#8a8b4 e2a2d2g8f#4e8d1"
13099 'Here Comes the Bride
13100 A$ = "cf8.f16f2cg8.e16f2cf8.a16 o4 c o3 a8.
13110 B$ = "g16fe8.f16g.p8"
13120 C$ = "f16dg8.a16f"
13190 PLAY "mn t150 l4 o3;xa$;xb$;xa$;xc$;"
13199 'Happy Birthday
13200 A$ = "c8.c16dc"
13210 B$ = "fe2"
13220 C$ = "gf2"
13230 D$ = "c8.c16 o4 c o3 afed.p8 b-8.b-16afgf."
13290 PLAY "mn t140 l4 o3;xa$;xb$;xa$;xc$;xd$;"
13299 'Over the River and Through the Wood
13300 A$ = "aaaaf#ga4aa4"
13310 B$ = "a o4 dddc#4 o3 ba2 p8"
13320 C$ = "agggg4gf#f#f#f#4f#16f#16e4ee4f#e4.a4 p8"
13330 D$ = "a o4 d4dc#4 o3 ba2 p8 a o4 d4dc#4 o3 ba4f#d4ef#f#gf#4ed2 p4"
13390 PLAY "mn l8 o3 t150;xa$;xb$;xc$;xa$;xd$;"
13399 'Auld Lang Syne
13400 A$ = "o3 cf.f8fag.f8gaf.f8a o4 cd2."
13410 B$ = "o4 dc. o3 a8afg.f8g"
13420 C$ = "af.d8dcf2."
13430 D$ = "o4 dc. o3 a8a o4 cd2."
13490 PLAY "mn t120 l4 o3;xa$;xb$;xc$;xb$;xd$;xb$;xc$;"
13499 'We Gather Together
13500 PLAY "mn t120 l4 o3 aa.b8af+gag.f+8ef+daa.b8 o4 c+d.e8c+ o3 b.a8ba2aa.b8 o4 c+d o3 aaa.b8g8a8f+ddg.a8b8g8a.g8f+8f+8ge.d8d2"
13599 'Taps
13600 A$ = "c.c16f2."
13610 B$ = "c.f16a2."
13620 C$ = "c.f16a4"
13630 D$ = "f.a16 o4 c2 o3 a4f4c2."
13690 PLAY "mn t100 l8 o3;xa$;xb$;xc$;xc$;xb$;xd$;xa$;"
13699 'Caisson Song
13700 A$ = "geg2geg2geg.a8geg2"
13710 B$ = "efgf2dgf2dc1."
13720 C$ = "gg o4 c2c2 o3 g2.g8g8a.b8 o4 c o3 ag1 o4 cc2 o3 ba.b8 o4 c o3 a o4 d1. o3 gg o4 c2c2 o3 g2. p4 a.b8 o4 c o3 ag2"
13790 PLAY "mn l4 t200 o3;xa$;xb$;xa$;xb$;xc$;xb$;"
13799 'Deck the Halls
13800 A$ = "o4 c. o3 b-8agfgaf"
13810 B$ = "o3 g8a8b-8g8a.g8fef.p8"
13820 C$ = "o3 g.a8b-ga.b-8 o4 c o3 ga8b-8 o4 cd8e8fedc. p8"
13830 D$ = "o4 d8d8d8d8c. o3 b-8agf."
13890 PLAY "mn t180 l4 o3;xa$;xb$;xa$;xb$;xc$;xa$;xd$;"
13899 'Silent Night
13900 A$ = "g.a16ge4."
13910 B$ = "o4 d4d o3 b4. o4 c4c o3 g4."
13920 C$ = "a4a o4 c. o3 b16a"
13930 D$ = "o4 d4df.d16 o3 b o4 c4.e4.c. o3 g16eg.f16dc2"
13990 PLAY "mn l8 t50 o3;xa$;xa$;xb$;xc$;xa$;xc$;xa$;xd$;"
13999 'Joy to the World
14000 PLAY "mn l8 t100 o4 c4 o3 b.a16g4.fe4d4c4.ga4.ab4.b o4 c4.cc o3 bagg.f16e o4 cc o3 bagg.f16eeeeee16f16g4.f16e16dddd16e16f4.e16d16c o4 c4 o3 ag.f16efe4d4c2"
14099 'The Little Drummer Boy
14100 A$ = "o3 a2.b o4 c+2c+c+d8c+8dc+1. p4 o3 aab o4 c+c+c+c+d8c+8dc+1. p4 o3 b o4 c+deeef+g8f+8ed2f+8e8dc+2"
14110 B$ = "o4 e8d8c+ o3 b1."
14120 C$ = "o3 a2.b o4 c+c+c+c+d8c+8dc+1.
14130 D$ = "o3 b8a8ba1."
14140 E$ = "o4 e8d8c+ o3 b....."
14150 F$ = "o3 b8a8ba......."
14190 PLAY "mn l4 t200 o3;xa$;xb$;xc$;xd$;xa$;xb$;xc$;xd$;xa$;xe$;xc$;xf$;"
14199 '12 Days of Xmas
14200 A$ = "o3 ccc4fff4efgab-ga4."
14210 B$ = "o3 b- o4 c4d o3 b-afg4f2."
14220 C$ = "o3 ccccfff4efgab-ga."
14230 D$ = "o4 p8 c4 o3 gab-4ab- o4 c4d o3 b-afg4f2."
14240 E$ = "o4 p8 c4 o3 gab-"
14250 F$ = "o4 c2d o3 b4. o4 c2.p4 c o3 b-agf4b-4d4f4gfedc4ab- o4 c4d o3 b-afg4f2."
14260 G$ = "o4 c4 o3 gab-g"
14290 PLAY "mn t120 l8 o3;xa$;xb$;xc$;xd$;xa$;xe$;xd$;xa$;xe$;xe$;xd$;xa$;xf$;xa$;xg$;xf$;xc$;xg$;xg$;xf$;xa$;xg$;xg$;xg$;xf$;xa$;xg$;xg$;xg$;xg$;xf$;xa$;xg$;xg$;xg$;xg$;xg$;xf$;xc$;xg$;xf$;xa$;xg$;xf$;"
14299 '1st Noel
14300 A$ = "o3 f+8e8d.e8f+8g8a2"
14310 B$ = "o3 b8 o4 c+8dc+ o3 ba2"
14320 C$ = "o3 b8 o4 c+8"
14330 D$ = "o4 dc+ o3 bab o4 c+d o3 agf+2"
14340 E$ = "o4 d8c+8 o3 b2ba2."
14390 PLAY "mn l4 o3 t120;xa$;xb$;xc$;xd$;xa$;xb$;xc$;xd$;xa$;xe$;xd$;"
14399 'Jingle Bells
14400 A$ = "o3 dbagd4.d16d16dbage2e o4c o3 baf+2 o4 ddc o3 ab2dbagd2dbage4.ee o4 c o3 ba o4 ddddedc o3 ag4. p8"
14410 B$ = "o3 bbb4bbb4b o4 d o3 g.a16b2 o4 ccc.c16c o3 bbb16b16"
14420 C$ = "baaba4 o4 d4"
14430 D$ = "o4 ddc o3 ag2"
14490 PLAY "mn t150 l8 o3;xa$;xb$;xc$;xb$;xd$;"
14499 'We Wish You a Merry Xmas
14500 PLAY "mn t180 l4 o3 dgg8a8g8f+8eeeaa8b8a8g8f+ddbb8 o4 c8 o3 b8a8ged8d8eaf+g2"
14599 'Battle Hymn
14600 A$ = "o3 f4f.f16f.e-16d.f16b-. o4 c16d.d16d.c16 o3 b-4"
14610 B$ = "o3 b-.a16g.g16g.a16b-.a16b-.g16f.g16f.d16f4"
14620 C$ = "o3 b-4 o4 c4c4 o3 b-4a4b-2. p4"
14630 D$ = "o3 f4.e-d.f16b-. o4 c16d2 o3 b-4."
14640 E$ = "o3 g4.ab-.a16b-.g16f2d4p8"
14650 R$ = "p8"
14660 F$ = "o3 f4.e-d.f16b-. o4 c16d2 o3 b-4"
14690 PLAY "mn l8 t120;xa$;xb$;xa$;xc$;xd$;xr$;xe$;xr$;xf$;xc$;"
14699 'Stars & Stripes Forever
14700 PLAY "t255 l4 o4 c2c2 o3 b-aa2g#aa1.g#aa2g#a o4 c2 o3 a. o4 c8 o3 b-1g2.gg2f#gg2f#gb-1.aga o4 c2.d2.d o3 g1. o4 c2c2 o3 b-aa2g#aa1.g#a  a2g#ab-ag.e8  g1f2.f f2efa-2gf ml o4 f1f mn o3 fga o4 c8 p8 o3 fga o4 c8 p8 o3 cdag1f2 p4 o4 f."
14799 'My Country Tis of Thee
14800 PLAY "mn t120 l4 o3 ffge.f8gaab-a.g8fgfef2. o4 cccc. o3 b-8ab-b-b-b-.a8gab-8a8g8f8a.b-8 o4 c d8 o3 b-8agf"
14899 'America the Beautiful
14900 A$ = "gg.e8egg.d8d"
14910 B$ = "efgabg2."
14920 C$ = "o4 dc+de o3 a o4 d2. o3 g o4 e.e8dcc. o3 b8b o4 cd o3 bag o4 c2.cc. o3 a8a o4 cc. o3 g8gga o4 c o3 g o4 dc2."
14990 PLAY "mn t120 l4 o3;xa$;xb$;xa$;xc$;"
```

## MUSICFIL.BAS

```bas
5 '***********************************
10 '**MUSIC CLASS MANAGEMENT PROGRAM**
15 '**                              **
20 '**       BY  WENDY WIDDER       **
25 '**      C/O STEPHEN WIDDER      **
30 '**      NEOSHO JUNIOR HIGH      **
35 '**       511 NEOSHO BLVD.       **
40 '**      NEOSHO, MO.  64850      **
45 '**                              **
50 '**        APRIL 29, 1984        **
55 '**                              **
60 '**********************************
65 '
70 'REM THIS PROGRAM IS DESIGNED TO AID
75 'REM MUSIC DIRECTORS IN ORGANIZING
80 'REM THEIR LARGE PERFORMANCE GROUPS.
85 'REM IT WAS WRITTEN BY A COMPUTER
90 'REM HOBBYIST WHO IS A MUSIC TEACHER
99 '
100 '***DIM ARRAYS,DETERMINE MONITOR TYPE,PRINT TITLE PAGE & MENU
105 DIM N$(120),RECORD(120),K$(40),L$(60),SORT$(60)
110 KEY OFF : CLS
120 DEF SEG=0
130 IF (PEEK(&H410) AND &H30) <> &H30 THEN MONO=0 ELSE MONO=1
140 IF MONO=0 THEN SCREEN 0,1:COLOR 2,1,1:WIDTH 40: CLS
150 IF MONO=1 THEN COLOR 7,0
151 LOCATE 25,8
152 PRINT "PRESS ANY KEY TO CONTINUE
160 LOCATE 1,1 : PRINT STRING$(40,14)
170 FOR X= 1 TO 21
180 LOCATE 1+X,1
190 PRINT CHR$(14);STRING$(38,32);CHR$(14)
200 NEXT X
210 LOCATE 22,1
220 PRINT STRING$(40,14)
230 LOCATE 9,6
240 PRINT "MUSIC CLASS MANAGEMENT PROGRAM"
250 LOCATE 13,8
260 PRINT "By Wendy Widder-April 1984
290 Z$=INKEY$ : IF Z$="" THEN 290
300 CLS
310 INPUT "Do you need instructions? (Y or N)      >>>>>",ANSWER$
320 IF ANSWER$ <> "y" AND ANSWER$ <> "Y" AND ANSWER$ <> "N" AND ANSWER$ <> "n" THEN 310
330 IF ANSWER$ = "y" OR ANSWER$ = "Y" THEN GOSUB 10000
340 CLS
350  LOCATE 1,16
360 PRINT "M E N U
370 LOCATE 3,3 : PRINT "1. OPEN FILE FOR FIRST TIME
380 LOCATE 5,3 : PRINT "2. ADD STUDENT(S) TO FILE
390 LOCATE 7,3 : PRINT "3. DELETE STUDENT(S) FROM FILE
400 LOCATE 9,3 : PRINT "4. CORRECT FILE ENTRY
410 LOCATE 11,3 : PRINT "5. UPDATE FILE AFTER TRYOUTS
420 LOCATE 13,3 : PRINT "6. SORT THE ENTIRE FILE
430 LOCATE 15,3 : PRINT "7. SORT BY GRADE
440 LOCATE 17,3 : PRINT "8. SORT BY SECTION
450 LOCATE 19,3 : PRINT "9. LIST FILES ON DISK
455 LOCATE 21,2 : PRINT "10. END PROGRAM
460 LOCATE 24,1 : INPUT "WHAT IS YOUR CHOICE";CHOICE
470 IF CHOICE <1 OR CHOICE >10 THEN 460
480 IF CHOICE=1 THEN GOSUB 1000
490 IF CHOICE=2 THEN GOSUB 2000
500 IF CHOICE=3 THEN GOSUB 3000
510 IF CHOICE=4 THEN GOSUB 4000
520 IF CHOICE=5 THEN GOSUB 5000
530 IF CHOICE=6 THEN GOSUB 6000
540 IF CHOICE=7 THEN GOSUB 7000
550 IF CHOICE=8 THEN GOSUB 8000
560 IF CHOICE=9 THEN GOSUB 9000
570 IF CHOICE=10 THEN CLS: END
580 GOTO 340
990 '
999 '***OPEN FILE FOR FIRST TIME
1000 CLS: LOCATE 1,1
1010 INPUT "What file do you want to open?           >>>>>",CLASS$
1020 PRINT
1030 OPEN CLASS$ + ".MUS" AS #1 LEN=67
1040 FIELD #1, 30 AS STUDENT$,2 AS GRADE$,15 AS INSTRUMENT$,2 AS RANK$,3 AS SWEATER$,3 AS FOLDER$,12 AS SERIAL$
1050 X=1
1051 PRINT "ENTER INFORMATION IN CAPITAL LETTERS!!!!"
1052 PRINT
1055 PRINT "ENTER `DONE' TO RETURN TO THE MENU
1056 PRINT
1060 INPUT "NAME (LAST FIRST)";N$
1070 IF N$= "DONE" OR N$="done" THEN CLOSE: RETURN
1080 INPUT "GRADE";L$
1090 INPUT "INSTRUMENT";H$
1100 INPUT "RANK";K$
1110 INPUT "SWEATER NUMBER";W$
1120 INPUT "FOLDER";D$
1130 INPUT "SERIAL NUMBER";A$
1140 PRINT
1150 LSET STUDENT$=N$
1160 RSET GRADE$=L$
1170 LSET INSTRUMENT$=H$
1180 RSET RANK$=K$
1190 RSET SWEATER$=W$
1200 RSET FOLDER$=D$
1210 RSET SERIAL$=A$
1220 PUT #1,X
1230 X=X+1
1240 GOTO 1051
1990 '
1999 '***ADD STUDENT(S) TO FILE
2000 CLS : LOCATE 1,1
2010 INPUT "To which file do you want to add?        >>>>>",CLASS$
2020 OPEN CLASS$ + ".MUS" AS #1 LEN=67
2030 FIELD #1, 30 AS STUDENT$,2 AS GRADE$,15 AS INSTRUMENT$,2 AS RANK$,3 AS SWEATER$,3 AS FOLDER$,12 AS SERIAL$
2040 GET 1
2050 IF STUDENT$ <> STRING$(30,0) THEN 2040
2060 INPUT "How many new students";S
2070 PRINT
2080 FOR X= LOC(1) TO LOC(1) + S-1
2085 PRINT "ENTER INFORMATION IN CAPITAL LETTERS!!!!"
2086 PRINT
2090 INPUT "NAME (LAST FIRST)";N$
2100 IF N$= "DONE" THEN CLOSE: END
2110 INPUT "GRADE";L$
2120 INPUT "INSTRUMENT";H$
2130 INPUT "RANK";K$
2140 INPUT "SWEATER NUMBER";W$
2150 INPUT "FOLDER";D$
2160 INPUT "SERIAL NUMBER";A$
2170 LSET STUDENT$=N$
2180 RSET GRADE$=L$
2190 LSET INSTRUMENT$=H$
2200 RSET RANK$=K$
2210 RSET SWEATER$=W$
2220 RSET FOLDER$=D$
2230 RSET SERIAL$=A$
2240 PRINT:PRINT "That student has been assigned:":PRINT "                  RECORD #";X
2250 PUT #1,X
2260 PRINT
2270 NEXT X
2275 FOR X=1 TO 5000 : NEXT X
2280 CLOSE 1 : RETURN
2990 '
2999 '***DELETE STUDENT(S) FROM FILE
3000 CLS : LOCATE 1,1
3010 INPUT "From which file do want to delete?        >>>>>",CLASS$
3020 OPEN CLASS$ + ".MUS" AS #1 LEN=67
3030 FIELD #1, 30 AS STUDENT$,2 AS GRADE$,15 AS INSTRUMENT$,2 AS RANK$,3 AS SWEATER$,3 AS FOLDER$,12 AS SERIAL$
3035 PRINT
3040 INPUT "Which record is being deleted?            >>>>>",D
3050 BLANK$ = STRING$(30,32)
3060 LSET STUDENT$=BLANK$
3070 RSET GRADE$=BLANK$
3080 LSET INSTRUMENT$=BLANK$
3090 RSET RANK$=BLANK$
3100 RSET SWEATER$=BLANK$
3110 RSET FOLDER$=BLANK$
3120 RSET SERIAL$=BLANK$
3130 PUT 1,D
3140 PRINT
3150 PRINT "Record #";D;"has been deleted."
3155 FOR X=1 TO 5000 : NEXT X
3160 CLOSE 1 : RETURN
3990 '
3999 '***CORRECT FILE ENTRY
4000 CLS: LOCATE 1,1
4010 INPUT "What file do you want to correct?        >>>>>",CLASS$
4020 PRINT
4030 OPEN CLASS$ +".MUS" AS #1 LEN=67
4040 FIELD #1, 30 AS STUDENT$,2 AS GRADE$,15 AS INSTRUMENT$,2 AS RANK$,3 AS SWEATER$,3 AS FOLDER$,12 AS SERIAL$
4050 PRINT "To end program, enter a negative number."
4060 INPUT "Which record do you want to correct?     >>>>>",R
4070 IF R < 0 THEN CLOSE: RETURN
4080 PRINT
4085 PRINT "ENTER INFORMATION IN CAPITAL LETTER!!!!"
4086 PRINT
4090 GET 1,R
4100 INPUT "NAME (LAST FIRST)";N$
4110 INPUT "GRADE";L$
4120 INPUT "INSTRUMENT";H$
4130 INPUT "RANK";K$
4140 INPUT "SWEATER NUMBER";W$
4150 INPUT "FOLDER";D$
4160 INPUT "SERIAL NUMBER";A$
4170 PRINT
4180 LSET STUDENT$=N$
4190 RSET GRADE$=L$
4200 LSET INSTRUMENT$=H$
4210 RSET RANK$=K$
4220 RSET SWEATER$=W$
4230 RSET FOLDER$=D$
4240 RSET SERIAL$=A$
4250 PUT #1,R
4260 GOTO 4050
4990 '
4999 '***UPDATE FILE AFTER TRYOUTS
5000 CLS:LOCATE 1,1
5010 INPUT "What file do you want?                   >>>>>",CLASS$
5020 PRINT
5030 OPEN CLASS$ +".MUS" AS #1 LEN=67
5040 FIELD #1, 30 AS STUDENT$,2 AS GRADE$,15 AS INSTRUMENT$,2 AS RANK$,3 AS SWEATER$,3 AS FOLDER$,12 AS SERIAL$
5050 INPUT "Which section do you want to update?     >>>>>",SECTION$
5051 GOSUB 11000
5055 PRINT
5060 X=1
5070 GET 1,X
5080 IF STUDENT$=STRING$(30,32) THEN 5150
5090 IF STUDENT$=STRING$(30,0) THEN 5165
5100 IF LEFT$(INSTRUMENT$,LEN(SECTION$))<>SECTION$ THEN 5150
5110 PRINT STUDENT$;
5120 INPUT "RANK";K$
5130 RSET RANK$=K$
5140 PUT #1,X
5150 X=X+1
5160 GOTO 5070
5165 PRINT: PRINT "THE ";SECTION$;" SECTION HAS BEEN UPDATED AFTER TRYOUTS."
5166 FOR X=1 TO 2500 : NEXT X
5170 CLOSE : RETURN
5990 '
5999 '***SORT THE ENTIRE FILE
6000 CLS: LOCATE 1,1
6020 INPUT "Which file do you want to sort?          >>>>>",CLASS$
6030 LOCATE 12,7 :PRINT "PLEASE WAIT - I'M SORTING!"
6035 PRINT
6040 OPEN CLASS$ +".MUS" AS #1 LEN=67
6050 FIELD #1, 30 AS STUDENT$,2 AS GRADE$,15 AS INSTRUMENT$,2 AS RANK$,3 AS SWEATER$,3 AS FOLDER$,12 AS SERIAL$
6060 P=1:X=1
6070 GET 1,X
6080 IF STUDENT$=STRING$(30,32) THEN X=X+1: GOTO 6070
6090 IF STUDENT$=STRING$(30,0) THEN P=P-1 : GOTO 6140
6100 N$(P)=STUDENT$:RECORD(P)=X
6110 X=X+1
6120 P=P+1
6130 GOTO 6070
6140 D=2^INT(LOG(P)/LOG(2))-1
6150 FOR A=1 TO P - D
6160    FOR J=A TO 1 STEP -D
6170      IF N$(J)<=N$(J+1) THEN 6210
6180      SWAP N$(J),N$(J+1)
6190      SWAP RECORD(J),RECORD(J+1)
6200    NEXT J
6210 NEXT A
6220 D=INT(D/2):IF D>0 THEN 6150
6221 BEEP
6222 CLS:LOCATE 25,7: PRINT "PRESS ANY KEY TO CONTINUE"
6225 LOCATE 10,12: PRINT "SORT IS COMPLETE"
6230 LOCATE 15,1: PRINT "REMEMBER YOU CAN USE CONTROL^NUM LOCK TO  TEMPORARILY STOP THE SCREEN LISTING."
6235 A$=INKEY$ : IF A$="" THEN 6235
6239 CLS
6240 PRINT "Name                       Record #"
6250 PRINT "----                       --------"
6260 FOR C=1 TO P
6270     PRINT N$(C);RECORD(C)
6280 NEXT C
6290 PRINT
6300 INPUT "Do you want an alphabetical printout    (names only)?(Y or N)  >>>>>",ANSWER$
6310 IF ANSWER$ <> "Y" AND ANSWER$<> "N" AND ANSWER$ <> "n" AND ANSWER$ <> "y" THEN 6300
6320 IF ANSWER$ = "N" OR ANSWER$ = "n" THEN 6390
6330 LPRINT "Name              "
6340 LPRINT "----              "
6350 FOR C=1 TO P
6360    LPRINT N$(C)
6370 NEXT C
6390 PRINT
6400 INPUT "Do you want a complete file printout in alphabetical order (Y or N)? >>>>>",ANSWER$
6410 IF ANSWER$ <> "Y" AND ANSWER$ <> "N" AND ANSWER$ <> "y" AND ANSWER$ <> "n" THEN 6400
6420 IF ANSWER$= "N" OR ANSWER$ = "n" THEN 6510
6430 PRINT
6440 LPRINT"Name                   Grade Instrument    Rank  S#  F#       Serial #    Rec #"
6450 LPRINT"----                   ----- ----------    ----  --  --       --------    -----"
6460 F$=   "\                       \\\  \            \  \\ \ \ \ \   \          \      "
6465 A$ = "###"
6470 FOR G= 1 TO P
6480 GET 1,RECORD(G)
6490 LPRINT USING F$;STUDENT$,GRADE$,INSTRUMENT$,RANK$,SWEATER$,FOLDER$,SERIAL$;:LPRINT USING A$;RECORD(G)
6500 NEXT G
6510 PRINT
6520 INPUT "Do you want a sweater list (Y or N)?     >>>>>",ANSWER$
6530 IF ANSWER$ <> "Y" AND ANSWER$ <> "N" AND ANSWER$ <> "y" AND ANSWER$ <> "n" THEN 6520
6540 IF ANSWER$= "N" OR ANSWER$ = "n" THEN 6670
6550 PRINT
6560 PRINT " Name                  Sweater Number"
6570 PRINT " ----                  --------------"
6580 G$ =  " \                    \      \ \     "
6590 FOR G=1 TO P
6600 GET 1, RECORD(G)
6610 PRINT USING G$;STUDENT$,SWEATER$
6620 NEXT G
6625 FOR X=1 TO 1000 : NEXT X
6626 PRINT :INPUT "Do you want a printout of the sweater   list (Y or N)? >>>>>",ANSWER$
6627 IF ANSWER$ ="N" OR ANSWER$ ="n" THEN CLOSE : RETURN
6628 LPRINT " Name                  Sweater Number"
6629 LPRINT " ----                  --------------"
6630 G$ =   " \                    \      \ \     "
6635 FOR G= 1 TO P
6640 GET 1, RECORD(G)
6650 LPRINT USING G$;STUDENT$,SWEATER$
6660 NEXT G
6670 CLOSE : RETURN
6990 '
6999 '***SORT BY GRADE
7000 CLS: LOCATE 1,1
7020 INPUT "Which file do you want to sort?          >>>>>",CLASS$
7025 PRINT
7030 OPEN CLASS$ +".MUS" AS #1 LEN=67
7040 FIELD #1, 30 AS STUDENT$,2 AS GRADE$,15 AS INSTRUMENT$,2 AS RANK$,3 AS SWEATER$,3 AS FOLDER$,12 AS SERIAL$
7050 INPUT "Which grade?                             >>>>>",G$
7055 PRINT
7056 PRINT "PLEASE WAIT - I'M SORTING!"
7057 PRINT
7060 P=1:X=1
7070 GET 1,X
7080 IF STUDENT$=STRING$(30,32) THEN X=X+1: GOTO 7070
7090 IF STUDENT$=STRING$(30,0) THEN P=P-1 : GOTO 7145
7100 IF RIGHT$(GRADE$,LEN(G$))<>G$ THEN X=X+1:GOTO 7070
7110 N$(P)=STUDENT$
7120 X=X+1
7130 P=P+1
7140 GOTO 7070
7145 IF P=0 THEN PRINT "There are no students in grade ";G$;"." : GOTO 7355
7150 FOR A= 1 TO P
7160 FLAG=0
7170 FOR J=1 TO P-A
7180     IF N$(J)<N$(J+1) THEN 7210
7190     FLAG=999
7200 SWAP N$(J+1), N$(J)
7210  NEXT J
7220 IF FLAG=0 THEN 7236
7230 NEXT A
7236 CLS: BEEP: LOCATE 25,7: PRINT "PRESS ANY KEY TO CONTINUE"
7237 LOCATE 10,12: PRINT "SORT IS COMPLETE"
7238 LOCATE 15,1:PRINT "REMEMBER YOU CAN USE CONTROL^NUM LOCK TO  TEMPORARILY STOP THE SCREEN LISTING."
7239 A$=INKEY$ : IF A$ = "" THEN 7239
7240 CLS:PRINT "These students are in grade ";G$;" :"
7250 FOR C=1 TO P
7260 PRINT N$(C)
7270 NEXT C
7275 PRINT
7280 INPUT "Do you want a printout? (Y or N)         >>>>>",ANSWER$
7290 IF ANSWER$ <> "n" AND ANSWER$ <> "N" AND ANSWER$ <> "Y" AND ANSWER$ <> "y" THEN 7280
7300 IF ANSWER$ = "n" OR ANSWER$ = "N" THEN PRINT : GOTO 7360
7310 LPRINT "These students are in grade ";G$;" :"
7320 FOR C=1 TO P
7330 LPRINT N$(C)
7340 NEXT C
7350 FOR X= 1 TO 2000 : NEXT X
7355 PRINT
7360 INPUT "Do you want to sort another grade in    this file? (Y or N) >>>>>",ANSWER$
7370 IF ANSWER$ <> "Y" AND ANSWER$ <> "N" AND ANSWER$ <> "y" AND ANSWER$ <> "n" THEN 7360
7380 IF ANSWER$ = "N" OR ANSWER$ = "n" THEN CLOSE : RETURN
7385 PRINT
7390 GOTO 7050
7990 '
7999 '***SORT BY SECTION
8000 CLS: LOCATE 1,1
8020 INPUT "Which file do you want to sort?          >>>>>",CLASS$
8030 OPEN CLASS$ +".MUS" AS #1 LEN=67
8040 FIELD #1, 30 AS STUDENT$,2 AS GRADE$,15 AS INSTRUMENT$,2 AS RANK$,3 AS SWEATER$,3 AS FOLDER$,12 AS SERIAL$
8045 PRINT
8050 INPUT "Which section?  >>>>",SECTION$
8051 GOSUB 11000
8055 PRINT
8060 PRINT "Which field do you want to sort?"
8070 PRINT "1. name" : PRINT "2. grade" : PRINT "3. rank"
8080 INPUT ">>>>>";SORT$(0)
8081 IF SORT$(0)<>"1" AND SORT$(0)<>"2" AND SORT$(0)<>"3" THEN 8060
8085 PRINT
8090 P=1:X=1
8100 GET 1,X
8110 IF STUDENT$=STRING$(30,32) THEN X=X+1: GOTO 8100
8120 IF STUDENT$=STRING$(30,0) THEN P=P-1 : GOTO 8205
8130 IF LEFT$(INSTRUMENT$,LEN(SECTION$))<>SECTION$ THEN X=X+1:GOTO 8100
8140 N$(P)=STUDENT$: RECORD(P)=X
8150 IF SORT$(0)="1" THEN SORT$(P)=STUDENT$
8160 IF SORT$(0)="2" THEN SORT$(P)=GRADE$
8170 IF SORT$(0)="3" THEN SORT$(P)=RANK$
8180 X=X+1
8190 P=P+1
8200 GOTO 8100
8205 IF P=0 THEN PRINT "There are no students in the ";SECTION$;" section.":GOTO 8415
8210 FOR A= 1 TO P
8220 FLAG=0
8230 FOR J=1 TO P-A
8240     IF SORT$(J)<SORT$(J+1) THEN 8280
8250     FLAG=999
8260 SWAP SORT$(J+1),SORT$(J)
8270 SWAP RECORD(J+1),RECORD(J)
8280  NEXT J
8290 IF FLAG=0 THEN 8310
8300 NEXT A
8305 PRINT
8310 PRINT "These students are members of the ";SECTION$;" section:"
8315 PRINT
8320 PRINT "NAME              GRADE           RANK"
8330 B$=   "\                \   \\             \\ "
8340 PRINT "----              -----           ----"
8360 FOR C=1 TO P
8370 GET 1, RECORD(C) : PRINT USING B$;STUDENT$,GRADE$,RANK$
8380 NEXT C
8385 PRINT:INPUT "Do you want a printout? (Y or N) >>>>>",ANSWER$
8390 PRINT : IF ANSWER$ <> "Y" AND ANSWER$ <> "N" AND ANSWER$<> "y" AND ANSWER$<>"n" THEN 8385
8400 IF ANSWER$="N" OR ANSWER$="n" THEN 8415
8401 LPRINT "These students are member of the ";SECTION$;" section:"
8402 LPRINT
8403 LPRINT"NAME              GRADE           RANK"
8404 LPRINT"----              -----           ----"
8405 FOR C=1 TO P
8410    GET 1,RECORD(C) : LPRINT USING B$;STUDENT$,GRADE$,RANK$
8411 NEXT C
8415 PRINT
8420 INPUT "Do you want to sort another section?      (Y or N)  >>>>>",ANSWER$
8430 IF ANSWER$ <> "Y" AND ANSWER$ <> "N" AND ANSWER$ <> "y" AND ANSWER$ <> "n" THEN 8415
8440 IF ANSWER$ = "n" OR ANSWER$ = "N" THEN CLOSE : RETURN
8450 GOTO 8045
8990 '
8999 '***LIST FILES ON DISK
9000 CLS : LOCATE 1,1
9010 INPUT "On which drive are your files located?     (A or B)  >>>>>",DRIVE$
9015 PRINT: PRINT
9020 IF DRIVE$ <> "A" AND DRIVE$ <> "B" AND DRIVE$ <> "a" AND DRIVE$ <> "b" THEN 9000
9030 FILES DRIVE$+":*.MUS"
9040 PRINT: INPUT "Do you want to check the other drive?    (Y or N) >>>>>",ANSWER$
9050 IF ANSWER$<>"N" AND ANSWER$<>"Y" AND ANSWER$<>"n" AND ANSWER$<>"y" THEN 9040
9060 IF ANSWER$="Y" OR ANSWER$="y" THEN 9000
9100 LOCATE 23,1 : PRINT "PRESS ANY KEY TO RETURN TO THE MENU"
9110 A$ = INKEY$: IF A$ = "" THEN 9110
9120 RETURN
9990 '
9999 '***INSTRUCTIONS
10000 CLS: LOCATE 3,8: PRINT "I N S T R U C T I O N S"
10010 LOCATE 6,5
10020 PRINT "To create a file for each class,"
10030 PRINT "run option #1 on the MENU.  You will"
10040 PRINT "be asked for a name.  Use something"
10050 PRINT "you can remember (such as JHBAND for"
10060 PRINT "your JrHi Band class).  The program"
10070 PRINT "adds an extention (.MUS) for you so"
10080 PRINT "that all the files created by this"
10090 PRINT "program can be easily identified.  You"
10100 PRINT "can list files which you have created"
10110 PRINT "by choosing option #9 on the MENU."
10120 LOCATE 23,7
10130 PRINT "PRESS ANY KEY TO CONTINUE
10140 A$=INKEY$ : IF A$="" THEN 10140
10150 CLS: LOCATE 3,5
10300 PRINT "     I have included some files on this"
10310 PRINT "diskette which you can use to try out"
10320 PRINT "the sorts and see how everything works"
10330 PRINT "(or doesn't work)!  Try running options"
10340 PRINT "# 6,7, or 8 using these file names:"
10345 PRINT
10350 PRINT "                JHBAND
10360 PRINT "                SHORCH
10370 PRINT "                JHORCH
10380 PRINT
10390 PRINT
10400 PRINT "     You are often given the option of"
10410 PRINT "making a printout.  You can also use "
10420 PRINT "`PrtSc'and `CONTROL^PrtSc' if you"
10430 PRINT "need hard copies.
10440 LOCATE 23,7
10450 PRINT "PRESS ANY KEY TO CONTINUE
10460 A$=INKEY$: IF A$="" THEN 10460
10500 CLS: LOCATE 3,5
10510 PRINT "If you have any suggestions or"
10520 PRINT "questions, you may contact me by"
10530 PRINT "mail:"
10540 PRINT
10550 PRINT TAB(11);"Wendy Widder
10559 PRINT TAB(11);"c/o Stephen Widder
10560 PRINT TAB(11);"Neosho Jr. High
10570 PRINT TAB(11);"511 Neosho Blvd.
10580 PRINT TAB(11);"Nesoho, MO 64850
10581 PRINT:PRINT "Contributions of $10 will be accepted"
10582 PRINT "from users who have found the program"
10583 PRINT "useful.  Thank you.
10590 LOCATE 23,3
10600 PRINT "PRESS ANY KEY TO RETURN TO THE MENU
10610 A$=INKEY$:IF A$="" THEN 10610
10620 RETURN
10990 '
10999 '***CAPITALIZATION SUBROUTINE
11000 FOR CHAR=1 TO LEN(SECTION$)
11010 IF MID$(SECTION$,CHAR,1) < "a" THEN 11100
11020 IF MID$(SECTION$,CHAR,1) > "z" THEN 11100
11030 MID$(SECTION$,CHAR,1)=CHR$(ASC(MID$(SECTION$,CHAR,1))-32)
11100 NEXT CHAR
11200 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0175

     Volume in drive A has no label
     Directory of A:\

    ACEY-DUE BAS      2560
    ALIEN    BAS     28672   1-24-84  10:03p
    BASEBALL BAS     15616  10-30-83  11:07a
    BLACKBOX BAS     20864   1-24-84  10:01p
    BLKFRDY  BAS     11264  10-30-83   2:14p
    BLOCK    EXE      5376   1-24-84  10:30p
    CHECKERS BAS      3584   1-01-80   2:37a
    HUSTLE   BAS      7168   3-24-83  12:10a
    HUSTLE   DAT        82   5-29-84   1:32a
    HUSTLE   DOC      1728   1-01-80
    KNOCK    ASC      1664   7-20-82   9:32p
    KNOCK    BAS       640   7-15-82  10:27p
    XXX                916   6-12-84   7:17p
    MUSICFIL BAS     14438   4-29-84   9:50p
    MEDLEY   BAS      9271   3-31-84  12:42a
    JHORCH   MUS      2144   4-29-84  11:20p
    JHBAND   MUS      6767   4-29-84  10:29p
    SHORCH   MUS      1474   4-27-84  11:13p
    CRC      TXT      1405  11-15-84   6:55a
    CRCK4    COM      1536  10-21-82   7:54p
           20 file(s)     137169 bytes
                           18944 bytes free
