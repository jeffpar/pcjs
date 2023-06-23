---
layout: page
title: "PC-SIG Diskette Library (Disk #354)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0354/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0354"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC JR GAMES"

    Attention -- PCjr owners!  Feeling lonesome and forgotten?  Nothing to
    play with?  Dry those tears and know that we've been looking out for
    you.  These games will ONLY work on the PCjr.
    
    TACTICAL COMBAT engages your skills as a planner/tactician in a combat
    simulation.  Seek your fortune with DUNGEON QUEST, an entertaining
    Dungeons and Dragons adventure.  Still not enough mayhem to suit you?
    Then how about a nice GLOBAL THERMONUCLEAR WAR?
    File Descriptions:
    
    -------- ---  DUNGEONS AND DRAGONS.
    COMBAT   DOC  Documentation for TACTICAL COMBAT.
    COMBAT   BAS  TACTICAL COMBAT simulation.
    -------- ---  TACTICAL COMBAT.
    DUNQUEST BAS  Initialization program to load arrays for play.
    DUNPLAY  BAS  Main play program of DUNGEON QUEST.
    DUNMAP*       Maps of dungeons used by DUNGEON QUEST.
    DUNMAP   BAS  Map creation utility.
    DUNEND   BAS  File update program for DUNGEON QUEST.
    DUNCHAR  BAS  Update program for player file.
    DUNCHAR       Data file of players for DUNGEON QUEST.
    DUN      DOC  Documentation for DUNGEON QUEST.
    DUNSHOP  BAS  File update program for supply file.
    DUNSHOP       Data file of supplies, etc.
    MENU     BAS  Main menu program for DUNGEON QUEST.
    MAP           Data file of world map for war program.
    WAR      BAS  GLOBAL THERMONUCLEAR WAR game.
    -------- ---  GLOBAL THERMONUCLEAR WAR.
    WAR      DOC  Documentation for war game.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COMBAT.BAS

{% raw %}
```bas
10  ' COMBAT - CONFLICT SIMULATION
20      CLEAR,,,32768!
25      ON KEY(1) GOSUB 8600
26      KEY(1) ON
30      DEFINT A-Z
40      GOSUB 890      'HEADING SCREEN
50      GOSUB 1300      'INSTRUCTIONS
60      GOSUB 270        'DRAW MAP
70      GOSUB 480       'SETUP TERRAIN ARRAYS
80      GOSUB 3830      'PLACE ARMY UNIT
90      FOR TURN = 1 TO 8
100        LET ARMY$ = "R"
110        GOSUB 4300   'RED ARMY MOVE
120        LET ARMY$ = "R"
130        GOSUB 5520   'RED ARMY ATTACK
140        LET ARMY$ = "U"
150        GOSUB 4300   'US ARMY MOVE
160        LET ARMY$ = "U"
170        GOSUB 5520   'US ARMY ATTACK
180     NEXT TURN
190      GOSUB 5400    'FIND WINNER
200      CLS
210      PRINT "PLAY AGAIN? (Yes/No)"
220      GOSUB 1220      'WAIT FOR REPLY
230      IF REPLY$ = "Y" OR REPLY$ = "y" THEN                                              RUN
240 END
250 '****************************************************************************
260 '
270 'DRAW MAP
280       COLOR 7,8
290       CLS
300       FOR V = 0 TO 168 STEP 24
310         FOR H = 4 TO 292 STEP 48
320           IF V = 0 AND H = 292 GOTO 330                                                     ELSE LINE (H+0,V+12)-(H+6,V+0)        'LEFT TOP
330          IF V = 0 AND H <> 292 THEN LINE (H+6,V+0)-(H+24,V+0)      'TOP
340          IF H <> 292 THEN  LINE (H+24,V+0)-(H+30,V+12)      'RIGHT TOP
350          IF V = 168 AND H  = 292 GOTO 360                                                   ELSE LINE (H+0,V+12)-(H+6,V+24)       'BOTTOM LEFT
360          IF H <> 292 THEN LINE (H+6,V+24)-(H+24,V+24)   'BOTTOM
370          IF H <> 292 THEN LINE (H+24,V+24)-(H+30,V+12)   'BOTTOM RIGHT
380        NEXT H
390      NEXT V
400      FOR V = 12 TO 174 STEP 24
410         FOR H = 34 TO 304 STEP 48
420          IF V = 12 THEN LINE (H+0,V+0)-(H+18,V+0)      'TOP
430          LINE (H+0,V+24)-(H+18,V+24)   'BOTTOM
440        NEXT H
450      NEXT V
460 RETURN
470 '***************************************************************************
480 'SETUP TERRAIN ARRAYS
490     DIM TERRAIN$(22,10)
500     DIM ATTACK(10,6)
510 '    W = WOODED
520 '    C = CITY
530 '    O = OFF MAP
540 '    L = LAKE OR RIVER
550     LET TERRAIN$(3,3) = "W"
560     LET TERRAIN$(2,6) = "W"
570     LET TERRAIN$(3,7) = "L"
580     LET TERRAIN$(5,6) = "W"
590     LET TERRAIN$(6,3) = "W"
600     LET TERRAIN$(1,7) = "C"
610     LET TERRAIN$(3,2) = "C"
620     LET TERRAIN$(4,5) = "C"
630     LET TERRAIN$(2,8) = "O"
640     LET TERRAIN$(4,8) = "O"
650     LET TERRAIN$(6,8) = "O"
660     LET TERRAIN$(8,8) = "O"
670     LET TERRAIN$(6,2) = "W"
680     LET TERRAIN$(6,3) = "W"
690     LET TERRAIN$(6,4) = "W"
700     LET TERRAIN$(6,5) = "W"
710     LET TERRAIN$(6,6) = "W"
720     LET TERRAIN$(10,8) = "O"
730     LET TERRAIN$(7,3) = "L"
740     LET TERRAIN$(7,4) = "W"
750     LET TERRAIN$(7,5) = "W"
760     LET TERRAIN$(7,6) = "W"
770     LET TERRAIN$(7,5) = "W"
780     LET TERRAIN$(12,8) = "O"
790    FOR H.CORD = 1 TO 12
800      FOR V.CORD = 1 TO 8
810        IF TERRAIN$(H.CORD,V.CORD) = "W" THEN                                               LET P.COLOR = GREEN:                                                            GOSUB 8280
820        IF TERRAIN$(H.CORD,V.CORD) = "C" THEN                                               LET P.COLOR = BROWN:                                                            GOSUB 8280
830        IF TERRAIN$(H.CORD,V.CORD) = "L" THEN                                                LET P.COLOR = LT.BLUE:                                                          GOSUB 8280
840      NEXT V.CORD
850    NEXT H.CORD
860 RETURN
870 '**************************************************************************
880 '
890 'HEADING SCREEN
900     KEY OFF
910     SCREEN 5
920    LET RED = 4
930    LET BROWN = 6
940    LET BLUE = 1
950    LET GREEN = 2
960    LET WHITE =15
970    LET LT.BLUE = 9
980    LET GRAY = 8
990    PALETTE 1,1     'BLUE
1000    PALETTE 2,2     'GREEN
1010    PALETTE 3,3     'CYAN
1020    PALETTE 4,4     'RED
1030    PALETTE 5,5     'MAGENTA
1040    PALETTE 6,6    'BROWN
1050    PALETTE 7,0     'BLACK
1060    PALETTE 8,8    'GRAY
1070    PALETTE 9,9    'LIGHT BLUE
1080      COLOR 7,15
1090      CLS
1100     LOCATE 3,1
1110    PRINT "             COMBAT"
1120    LOCATE 6,1
1130    PRINT "       CONFLICT SIMULATION"
1140    LOCATE 16,1
1150    PRINT "       HIT SPACE TO CONTINUE"
1160    GOSUB 1220      'WAIT
1170 RETURN
1180 '
1190 '***************************************************************************1136'
1200 '**************************************************************************
1210 '
1220 'WAIT FOR A REPLY
1230    DEF SEG=0: POKE 1050, PEEK(1052)        'CLEAR KEYBOARD BUFFER
1240    LET REPLY$ = INKEY$
1250    IF REPLY$ = "" THEN GOTO 1240
1260 RETURN
1270 '
1280 '**************************************************************************
1290 '
1300 'INSTRUCTIONS
1310    CLS
1320    PRINT "DO YOU WANT INSTRUCTIONS (YES/NO)?"
1330    GOSUB 1220      'WAIT FOR REPLY
1340    IF REPLY$ <> "Y" AND REPLY$ <> "y" THEN                                           GOTO 1400    'RETURN
1350    GOSUB 1430      'PRINT COLOR AND TERRAIN
1360    GOSUB 1960      'GAME TURN RULES
1370    GOSUB 2220      'MOVEMENT RULES
1380    GOSUB 2740      'COMBAT RULES
1390    GOSUB 3620      'HOW GAME IS WON
1400 RETURN
1410 '**************************************************************************
1420 '
1430 'PRINT COLOR AND TERRAIN
1440    CLS
1450    PRINT "        HEX COLORS AND TERRAIN"
1460    LET H = 1
1470    LET V = 10
1480    GOSUB 1860      'DRAW A HEX
1490    PAINT (5,15),2,7
1500    LOCATE 3,10
1510    PRINT "WOODED HEX -"
1520    LOCATE 4,10
1530    PRINT "MOVEMENT INTO A WOODED HEX "
1540    LOCATE 5,10
1550    PRINT "COUNTS AS TWO HEXES "
1560    LET H = 1
1570    LET V = 50
1580    GOSUB 1860      'DRAW A HEX
1590    PAINT (5,55),6,7
1600    LOCATE 8,10
1610    PRINT "CITY HEX "
1620    LET H = 1
1630    LET V = 80
1640    GOSUB 1860      'DRAW A HEX
1650    PAINT (5,85),4,7
1660    LOCATE 12,10
1670    PRINT "SOVIET RED ARMY UNIT"
1680    LET H = 1
1690    LET V = 110
1700    GOSUB 1860      'DRAW A HEX
1710    PAINT (5,115),1,7
1720    LOCATE 16,10
1730    PRINT "U.S. ARMY UNIT"
1740    LET H = 1
1750    LET V = 140
1760    GOSUB 1860      'DRAW A HEX
1770    PAINT (5,145),9,7
1780    LOCATE 19,10
1790    PRINT "RIVER OR LAKE HEX"
1800    LOCATE 23,10
1810    PRINT "HIT SPACE TO CONTINUE"
1820    GOSUB 1220      'WAIT FOR REPLY
1830 RETURN
1840 '
1850 '---------------------------------------------------------------------------
1860 'DRAW A HEX
1870      LINE (H+4,V+19)-(H+14,V+19)   'BOTTOM
1880      LINE (H+14,V+19)-(H+19,V+9)   'BOTTOM RIGHT
1890      LINE (H+0,V+9)-(H+4,V+0)        'LEFT TOP
1900      LINE (H+4,V+0)-(H+14,V+0)      'TO
1910      LINE (H+14,V+0)-(H+19,V+9)      'RIGHT TOP
1920      LINE (H+0,V+9)-(H+4,V+19)       'BOTTOM LEFT
1930 RETURN
1940 '
1950 '---------------------------------------------------------------------------
1960 'GAME TURN RULES
1970    CLS
1980    PRINT "           GAME TURN"
1990    PRINT
2000    PRINT "A GAME TURN CONSISTS OF FOUR STEPS"
2010    PRINT
2020    PRINT "STEP 1.  THE SOVIET PLAYER MOVES ANY OR"
2030    PRINT "         ALL OF HIS UNITS"
2040    PRINT
2050    PRINT "STEP 2.  THE SOVIET PLAYER MAY ATTACK"
2060    PRINT "         ANY U.S. UNIT IN A HEX NEXT"
2070    PRINT "         TO A RED ARMY UNIT"
2080    PRINT
2090    PRINT "STEP 3.  THE U.S. PLAYER MOVES ANY OR"
2100    PRINT "         ALL OF HIS UNITS"
2110    PRINT
2120    PRINT "STEP 4.  THE U.S. PLAYER MAY ATTACK "
2130    PRINT "         ANY SOVIET UNIT IN A HEX NEXT"
2140    PRINT "         TO A U.S. ARMY UNIT"
2150    PRINT
2160    LOCATE 23,10
2170    PRINT "HIT SPACE TO CONTINUE"
2180    GOSUB 1220      'WAIT FOR A REPLY
2190 RETURN
2200 '
2210 '---------------------------------------------------------------------------
2220 'MOVEMENT RULES
2230    CLS
2240    PRINT "       MOVEMENT RULES"
2250    PRINT
2260    PRINT "  DURING YOUR MOVEMENT TURN YOU MAY"
2270    PRINT "MOVE ANY OR ALL OF YOUR UNITS, "
2280    PRINT "OR NONE OF YOUR UNITS."
2290    PRINT
2300    PRINT "  YOU CANNOT MOVE INTO A HEX OCCUPIED"
2310    PRINT "BY ONE OF YOUR OWN OR AN ENEMY UNIT."
2320    PRINT
2330    PRINT "  YOU MAY NOT MOVE OFF THE MAP."
2340    PRINT
2350    PRINT "  YOU MAY MOVE EACH UNIT 1 TO 4 HEXES."
2360    PRINT
2370    PRINT "  IF YOU MOVE INTO A HEX NEXT TO"
2380    PRINT "AN ENEMY UNIT, YOU MUST STOP THERE."
2390    PRINT
2400    PRINT "  MOVEMENT INTO A WOODED HEX COUNTS"
2410    PRINT "AS TWO HEXES."
2420    PRINT
2430    PRINT "  YOU CANNOT MOVE INTO A RIVER OR"
2440    PRINT "LAKE HEX."
2450    LOCATE 23,10
2460    PRINT "HIT SPACE TO CONTINUE"
2470    GOSUB 1220      'WAIT FOR REPLY
2480 ' CONTINUE WITH MOVEMENT RULES
2490    CLS
2500    PRINT "        HOW TO MOVE YOUR UNITS"
2510    PRINT
2520    PRINT "  DURING YOUR MOVEMENT TURN, THE "
2530    PRINT "COMPUTER WILL ALLOW YOU TO MOVE YOUR"
2540    PRINT "UNITS ONE AT A TIME.  IT WILL TURN"
2550    PRINT "THE UNIT TO BE MOVED WHITE."
2560    PRINT
2570    PRINT "  IF YOU DO NOT WANT TO MOVE THE UNIT"
2580    PRINT "HIT THE SPACE BAR."
2590    PRINT
2600    PRINT "  TO MOVE THE UNIT UP, HIT CURSOR UP."
2610    PRINT
2620    PRINT "  TO MOVE THE UNIT DOWN, HIT CURSOR"
2630    PRINT "DOWN."
2640    PRINT
2650    PRINT "  TO MOVE THE UNIT DIAGONALLY "
2660    PRINT "HIT THE CURSOR LEFT OR RIGHT, THEN"
2670    PRINT "CURSOR UP OR DOWN."
2680    LOCATE 23,10
2690    PRINT "HIT SPACE TO CONTINUE"
2700    GOSUB 1220      'WAIT FOR REPLY
2710 RETURN
2720 '
2730 '---------------------------------------------------------------------------
2740 'COMBAT RULES
2750    CLS
2760    PRINT "              COMBAT RULES"
2770    PRINT
2780    PRINT "  TO ATTACK AN ENEMY UNIT YOUR UNIT(S)"
2790    PRINT "MUST BE IN A HEX NEXT TO THE ENEMY UNIT."
2800    PRINT
2810    PRINT "  YOU NEVER HAVE TO ATTACK IF YOU DON'T"
2820    PRINT "WANT TO."
2830    PRINT
2840    PRINT "  YOU MAY ATTACK AN ENEMY UNIT WITH"
2850    PRINT "ONE OR MORE OF YOUR UNITS."
2860    PRINT
2870    PRINT "  EACH UNIT MAY ATTACK ONLY ONCE PER "
2880    PRINT "TURN."
2890    PRINT
2900    PRINT "  A DEFENDING UNIT IN A WOODED HEX "
2910    PRINT "OR A CITY HEX HAS DOUBLE STRENGTH"
2920    PRINT "AND IS MORE DIFFICULT TO ATTACK."
2930    LOCATE 23,10
2940    PRINT "HIT SPACE TO CONTINUE"
2950    GOSUB 1220      'WAIT FOR REPLY
2960 ' COMBAT RESULTS
2970    CLS
2980    PRINT "             COMBAT RESULTS"
2990    PRINT
3000    PRINT "  COMBAT RESULTS ARE DETERMINED BY THE "
3010    PRINT "NUMBER OF UNITS ATTACKING AND A DICE"
3020    PRINT "ROLL.  THE MORE UNITS THAT ATTACK AN"
3030    PRINT "ENEMY UNIT, THE BETTER YOUR CHANCES"
3040    PRINT "FOR A FAVORABLE RESULT."
3050    PRINT
3060    PRINT "  THE POSSIBLE RESULTS ARE:"
3070    PRINT "DEFENDER ELIMINATED - ENEMY UNIT"
3080    PRINT "DESTROYED"
3090    PRINT "DEFENDER RETREATS - ENEMY MUST RETREAT."
3100    PRINT "ATTACKER RETREATS - YOU MUST RETREAT"
3110    PRINT "ATTACKER ELIMINATED -YOUR UNIT IS"
3120    PRINT "      DESTROYED"
3130    PRINT
3140    PRINT "  IF UNIT MUST RETREAT IT CANNOT MOVE"
3150    PRINT "INTO A HEX NEXT TO AN ENEMY UNIT.  IF"
3160    PRINT "UNIT CAN'T RETREAT IT IS ELIMINATED."
3170    LOCATE 23,10
3180    PRINT "HIT SPACE TO CONTINUE"
3190    GOSUB 1220      'WAIT FOR REPLY
3200 ' HOW TO ATTACK
3210    CLS
3220    PRINT "             HOW TO ATTACK"
3230    PRINT
3240    PRINT "  DURING YOUR ATTACK TURN THE COMPUTER "
3250    PRINT "SELECTS EACH UNIT THAT CAN MAKE AN "
3260    PRINT "ATTACK AND TURNS IT WHITE. "
3270    PRINT
3280    PRINT "  IF YOU DON'T WANT THAT UNIT TO ATTACK"
3290    PRINT "HIT THE SPACE BAR."
3300    PRINT
3310    PRINT "  IF YOU WANT THE UNIT TO ATTACK USE"
3320    PRINT "THE CURSOR KEYS TO SHOW WHICH DIRECTION"
3330    PRINT "TO ATTACK."
3340    PRINT
3350    PRINT "  USE CURSOR UP TO ATTACK UP, CURSOR"
3360    PRINT "DOWN TO ATTACK DOWN AND TO ATTACK "
3370    PRINT "DIAGONALLY, HIT THE CURSOR RIGHT OR"
3380    PRINT "LEFT, THEN CURSOR UP OR DOWN."
3390    LOCATE 23,1
3400    PRINT "HIT SPACE TO CONTINUE"
3410    GOSUB 1220      'WAIT FOR REPLY
3420 'RETREATS
3430    CLS
3440    PRINT "               RETREATS"
3450    PRINT
3460    PRINT "  IF YOUR UNIT(S) MUST RETREAT YOU "
3470    PRINT "HAVE ONE CHANCE TO MOVE EACH UNIT "
3480    PRINT "OUT OF DANGER.  IF YOU MAKE AN "
3490    PRINT "ILLEGAL MOVE OR MOVE INTO A HEX"
3500    PRINT "NEXT TO AN ENEMY UNIT, YOUR "
3510    PRINT "UNIT IS ELIMINATED."
3520    PRINT
3530    PRINT "  THE FIRST ATTACKING UNIT WILL MOVE"
3540    PRINT "INTO THE HEX VACATED BY THE RETREATING"
3550    PRINT "UNIT."
3560    LOCATE 23,1
3570    PRINT "HIT SPACE TO CONTINUE"
3580    GOSUB 1220      'WAIT
3590 RETURN
3600 '
3610 '---------------------------------------------------------------------------
3620 'HOW GAME IS WON
3630    CLS
3640    PRINT  "          HOW THE GAME IS WON"
3650    PRINT
3660    PRINT "  THE GAME LASTS 8 GAME TURNS.  THE"
3670    PRINT "PLAYER WHO HAS FULFILLED HIS MISSION"
3680    PRINT "AT THE END OF 10 TURNS WINS."
3690    PRINT
3700    PRINT "  THE MISSION OF THE SOVIET RED"
3710    PRINT "ARMY IS TO OCCUPY AT LEAST TWO"
3720    PRINT "OF THE CITIES ON THE MAP."
3730    PRINT
3740    PRINT "  THE MISSION OF THE U.S. ARMY"
3750    PRINT "IS TO PREVENT THE RED ARMY FROM"
3760    PRINT "OCCUPING MORE THAN ONE CITY."
3770    LOCATE 23,1
3780    PRINT "HIT SPACE TO CONTINUE"
3790    GOSUB 1220      'WAIT FOR REPLY
3800 RETURN
3810 '
3820 '**************************************************************************
3830 'PLACE ARMY UNITS
3840    DIM ARMY.LOC(10,3)
3850 '   LOCATION OF EACH ARMY
3860 '   1 = RED ARMY
3870 '   2 = US ARMY
3880    LET MAX.ARMY = 10
3890    LET ARMY.LOC(1,1) = 11
3900    LET ARMY.LOC(1,2) = 1
3910    LET ARMY.LOC(1,3) = 1
3920    LET ARMY.LOC(2,1) = 12
3930    LET ARMY.LOC(2,2) = 1
3940    LET ARMY.LOC(2,3) = 1
3950    LET ARMY.LOC(3,1) = 12
3960    LET ARMY.LOC(3,2) = 2
3970    LET ARMY.LOC(3,3) = 1
3980    LET ARMY.LOC(4,1) = 11
3990    LET ARMY.LOC(4,2) = 7
4000    LET ARMY.LOC(4,3) = 1
4010    LET ARMY.LOC(5,1) = 12
4020    LET ARMY.LOC(5,2) = 6
4030    LET ARMY.LOC(5,3) = 1
4040    LET ARMY.LOC(6,1) = 12
4050    LET ARMY.LOC(6,2) = 7
4060    LET ARMY.LOC(6,3) = 1
4070    LET ARMY.LOC(7,1) = 3
4080    LET ARMY.LOC(7,2) = 8
4090    LET ARMY.LOC(7,3) = 2
4100    LET ARMY.LOC(8,1) = 3
4110    LET ARMY.LOC(8,2) = 2
4120    LET ARMY.LOC(8,3) = 2
4130    LET ARMY.LOC(9,1) = 4
4140    LET ARMY.LOC(9,2) = 3
4150    LET ARMY.LOC(9,3) = 2
4160    LET ARMY.LOC(10,1) = 4
4170    LET ARMY.LOC(10,2) = 5
4180    LET ARMY.LOC(10,3) = 2
4190    FOR X = 1 TO MAX.ARMY
4200      IF ARMY.LOC(X,1) = 0 THEN GOTO 4260
4210      IF ARMY.LOC(X,3) = 1 THEN LET  P.COLOR = RED                                      ELSE LET P.COLOR = BLUE
4220      LET H.CORD = ARMY.LOC(X,1)
4230      LET V.CORD  = ARMY.LOC(X,2)
4240      IF P.COLOR = BLUE                                                                 THEN LET TERRAIN$(H.CORD,V.CORD) = TERRAIN$(H.CORD,V.CORD) + "U"                ELSE LET TERRAIN$(H.CORD,V.CORD) = TERRAIN$(H.CORD,V.CORD) + "R"
4250      GOSUB 8280    'PAINT HEX
4260    NEXT X
4270 RETURN
4280 '
4290 '**************************************************************************
4300 'MOVEMENT PHASE
4310 '  LH = OLD HORIZONAL HEX CO-ORDINATE
4320 '  LV = OLD VERTICAL HEX CO-ORDINATE
4330 '  NEWH = NEW HORIZONAL HEX CO-ORDINATE
4340 '  NEWV = NEW VERTICAL HEX CO-ORDINATE
4350    IF ARMY$ = "R" THEN LET CLR = RED:                                                  LET ARMY = 1
4360    IF ARMY$ = "U" THEN LET CLR = BLUE:                                                  LET ARMY = 2
4370    LOCATE 25,1
4380    IF ARMY$ = "R" THEN LET MSG$ = "RED ARMY MOVES "                                      ELSE LET MSG$ = "US ARMY MOVES     "
4390    GOSUB 8400
4400    FOR X = 1  TO MAX.ARMY
4410      IF ARMY.LOC(X,1) = 0 THEN GOTO 4500
4420      IF ARMY.LOC(X,3) <> ARMY THEN GOTO 4500
4430      LET LH = ARMY.LOC(X,1)
4440      LET LV = ARMY.LOC(X,2)
4450    LET H.CORD = LH
4460    LET V.CORD = LV
4470    LET P.COLOR = WHITE
4480      GOSUB 8280                     'PAINT HEX WHITE
4490      GOSUB 4540    'GET MOVE
4500    NEXT X
4510 RETURN
4520 '
4530 '---------------------------------------------------------------------------
4540 'GET MOVE
4550    LET MOVE = 1
4555    DEF SEG=0: POKE 1050,PEEK(1052) 'CLEAR KEYBOARD BUFFER
4560 ' GET CURSOR
4570 '  DEF SEG=0: POKE 1050,PEEK(1052) 'CLEAR KEYBOARD BUFFER
4580    LET REPLY$ = INKEY$
4590    IF REPLY$ = "" THEN GOTO 4580
4600    IF REPLY$ = " " THEN LET P.COLOR = CLR: GOSUB 8280:                                   GOTO 5360  'NO MORE MOVES
4610    IF LEFT$(REPLY$,1) <> CHR$(0) THEN BEEP:                                          GOTO 4580
4620    LET REPLY$ = RIGHT$(REPLY$,1)
4630    IF REPLY$ = CHR$(72) THEN LET NEWV = LV - 1:                                        LET NEWH = LH:                                                                  GOTO 4800
4640    IF REPLY$ = CHR$(80) THEN LET NEWV = LV + 1:                                        LET NEWH = LH:                                                                  GOTO 4800
4650    IF REPLY$ = CHR$(77) THEN LET NEWH = LH + 1:                                        LET NEWV = LV:                                                                  GOTO 4690
4660    IF REPLY$ <> CHR$(75) THEN BEEP:                                                  GOTO 4580
4670    LET NEWH = LH - 1
4680    LET NEWV = LV
4690 ' GET 2ND PART OF COMMAND
4700    LET REPLY$ = INKEY$
4710    IF REPLY$ = "" THEN GOTO 4690
4720    LET REPLY$ = RIGHT$(REPLY$,1)
4730    IF REPLY$ = CHR$(80) THEN GOTO 4750
4740    IF REPLY$ <> CHR$(72) THEN BEEP:                                                  GOTO 4580
4750 '
4760    IF COL$ = "ODD" AND REPLY$ = CHR$(72)                                              THEN LET NEWV = LV  - 1
4770    IF COL$ = "ODD" AND REPLY$ = CHR$(80)                                              THEN LET NEWV = LV
4780    IF COL$ = "EVEN" AND REPLY$ = CHR$(72)                                              THEN LET NEWV = LV
4790    IF COL$ = "EVEN" AND REPLY$ = CHR$(80)                                              THEN LET NEWV = LV + 1
4800 'CHECK FOR LEGAL MOVE
4810    IF NEWH < 1 THEN GOTO  4930     'ILLEGAL
4820    IF NEWH > 12 THEN GOTO 4930
4830    IF NEWV < 1 THEN GOTO 4930
4840    IF NEWV > 8 THEN GOTO 4930
4850    IF LEN(TERRAIN$(NEWH,NEWV)) = 2 THEN GOTO 4930 'HEX IS OCCUPIED
4860    IF TERRAIN$(NEWH,NEWV) = "O" THEN GOTO 4930 'OFF BOARD
4870    IF TERRAIN$(NEWH,NEWV) = "R" THEN GOTO 4930
4880    IF TERRAIN$(NEWH,NEWV) = "L" THEN GOTO 4930
4890    IF TERRAIN$(NEWH,NEWV) = "U" THEN GOTO 4930
4900    IF TERRAIN$(NEWH,NEWV) = "W" AND MOVE > 3 THEN GOTO 4930
4910    IF TERRAIN$(NEWH,NEWV) = "W" THEN LET MOVE = MOVE + 1 'EXTRA MOVE POINT FOR WOODS
4920    GOTO 4980       'MAKE MOVE
4930 'ILLEGAL MOVE
4940    BEEP
4950    LET MSG$ = "ILLEGAL MOVE"
4960    GOSUB 8400
4965    DEF SEG=0: POKE 1050,PEEK(1052) 'CLEAR KEYBOARD BUFFER
4970    GOTO 4560
4980 ' MOVE UNIT
4990    LET MSG$ = " "
5000    GOSUB 8400
5010    LET H.CORD = NEWH
5020    LET V.CORD = NEWV
5030    LET P.COLOR = CLR
5040    GOSUB 8280     'PAINT NEW LOC
5050      IF LEN(TERRAIN$(LH,LV)) = 1 THEN                                                  LET TERRAIN$(LH,LV) = "" ELSE                                                   LET TERRAIN$(LH,LV) = LEFT$(TERRAIN$(LH,LV),1)
5060    LET H.CORD = LH
5070    LET V.CORD = LV
5080    LET P.COLOR = GRAY
5090      IF TERRAIN$(LH,LV) = "W" THEN                                                     LET P.COLOR = GREEN
5100      IF TERRAIN$(LH,LV) = "C" THEN                                                     LET P.COLOR = BROWN
5110    GOSUB 8280     'PAINT NEW LOC
5120      LET ARMY.LOC(X,1) = NEWH
5130      LET ARMY.LOC(X,2) = NEWV
5140      LET TERRAIN$(LH,LV) = LEFT$(TERRAIN$(LH,LV),1)
5150      LET TERRAIN$(NEWH,NEWV) = TERRAIN$(NEWH,NEWV) + ARMY$
5160    LET MOVE = MOVE + 1
5170    IF MOVE > 4 THEN GOTO 5360
5180 ' CHECK IF MOVE IS NEXT TO ENEMY UNIT
5190    IF ARMY$ = "R" THEN LET ENEMY$ = "U"                                              ELSE LET ENEMY$ = "R"
5200    IF ((NEWH/2) - INT(NEWH/2)) < .5 THEN                                                 LET COL$ = "EVEN" ELSE                                                          LET COL$ = "ODD"
5210    IF RIGHT$(TERRAIN$(NEWH+1,NEWV),1) = ENEMY$ THEN GOTO 5360
5220    IF RIGHT$(TERRAIN$(NEWH-1,NEWV),1) = ENEMY$ THEN GOTO 5360
5230    IF RIGHT$(TERRAIN$(NEWH,NEWV+1),1) = ENEMY$ THEN GOTO 5360
5240    IF RIGHT$(TERRAIN$(NEWH,NEWV-1),1) = ENEMY$ THEN GOTO 5360
5250    IF (COL$ = "EVEN") AND (RIGHT$(TERRAIN$(NEWH+1,NEWV+1),1)) = ENEMY$               THEN GOTO 5360
5260    IF (COL$ = "ODD") AND (RIGHT$(TERRAIN$(NEWH+1,NEWV-1),1)) = ENEMY$               THEN GOTO 5360
5270    IF (COL$ = "EVEN") AND (RIGHT$(TERRAIN$(NEWH-1,NEWV+1),1)) = ENEMY$               THEN GOTO 5360
5280    IF (COL$ = "ODD") AND (RIGHT$(TERRAIN$(NEWH-1,NEWV-1),1)) = ENEMY$               THEN GOTO 5360
5290    LET LH = NEWH
5300    LET LV = NEWV
5310    LET H.CORD = LH
5320    LET V.CORD = LV
5330    LET P.COLOR = WHITE
5340    GOSUB 8280      'PAINT HEX WHITE
5350    GOTO 4560
5360 'END OF MOVE TURN
5370 RETURN
5380 '
5390 '---------------------------------------------------------------------------
5400 ' FIND WINNER
5410    LET SCORE = 0
5420    IF TERRAIN$(1,7) = "CR" THEN LET SCORE = SCORE + 1
5430    IF TERRAIN$(3,2) = "CR" THEN LET SCORE = SCORE + 1
5440    IF TERRAIN$(4,5) = "CR" THEN LET SCORE = SCORE + 1
5450    LOCATE 23,1
5460    IF SCORE > 1 THEN LET MSG$ = "RED ARMY WINS!     "                                ELSE LET MSG$ = "US ARMY WINS!     "
5470    GOSUB 8400      'PRINT MESSAGE
5480    GOSUB 1220      'WAIT FOR REPLY
5490 RETURN
5500 '
5510 '---------------------------------------------------------------------------
5520 'ATTACK PHASE
5530 'FIND EACH ARMY THAT CAN ATTACK
5540    ERASE ATTACK
5550    DIM ATTACK(10,7)
5560    IF ARMY$ = "U" THEN LET CLR = BLUE:                                               LET ARMY = 2
5570    IF ARMY$ = "R" THEN LET CLR = RED:                                                LET ARMY = 1
5580    IF ARMY$ = "R" THEN LET MSG$ = "RED ARMY ATTACKS "                                 ELSE LET MSG$ =  "US ARMY ATTACKS "
5590    GOSUB 8400      'PRINT MESSAGE
5600    FOR X = 1  TO MAX.ARMY
5610      IF ARMY.LOC(X,1) = 0 THEN GOTO 5670
5620      IF ARMY.LOC(X,3) <> ARMY THEN GOTO 5670
5630      LET LH = ARMY.LOC(X,1)
5640      LET LV = ARMY.LOC(X,2)
5650      GOSUB 5730    'CHECK IF ATTACK POSSIBLE
5660      IF ATTACK$ = "YES" THEN GOSUB 5900    'GET MOVEMENT FOR ATTACK
5670    NEXT X
5680    IF ATTACK(1,1) = 0 THEN GOTO 5700       'NO ATTACK THIS TURN
5690    GOSUB 6510      'GET RESULTS OF ATTACK
5700 RETURN
5710 '
5720 '---------------------------------------------------------------------------
5730 'CHECK IF UNIT CAN MAKE AN ATTACK
5740    LET ATTACK$ = "NO"
5750    IF ARMY$ = "R" THEN LET ENEMY$ = "U"                                              ELSE LET ENEMY$ = "R"
5760    IF ((LH/2) - INT(LH/2)) < .5 THEN                                                 LET COL$ = "EVEN" ELSE                                                          LET COL$ = "ODD"
5770    IF RIGHT$(TERRAIN$(LH+1,LV),1) = ENEMY$ THEN GOTO 5860
5780    IF RIGHT$(TERRAIN$(LH-1,LV),1) = ENEMY$ THEN GOTO 5860
5790    IF RIGHT$(TERRAIN$(LH,LV+1),1) = ENEMY$ THEN GOTO 5860
5800    IF RIGHT$(TERRAIN$(LH,LV-1),1) = ENEMY$ THEN GOTO 5860
5810    IF (COL$ = "EVEN") AND (RIGHT$(TERRAIN$(LH+1,LV+1),1)) = ENEMY$                   THEN GOTO 5860
5820    IF (COL$ = "ODD") AND (RIGHT$(TERRAIN$(LH+1,LV-1),1)) = ENEMY$                    THEN GOTO 5860
5830    IF (COL$ = "EVEN") AND (RIGHT$(TERRAIN$(LH-1,LV+1),1)) = ENEMY$                   THEN GOTO 5860
5840    IF (COL$ = "ODD") AND (RIGHT$(TERRAIN$(LH-1,LV-1),1)) = ENEMY$                    THEN GOTO 5860
5850    GOTO 5880       'NO ATTACK POSSIBLE
5860 ' ATTACK IS POSSIBLE
5870    LET ATTACK$= "YES"
5880 RETURN
5890 '
5900 'GET MOVEMENT FOR ATTACK
5910 ' GET CURSOR
5920    LET H.CORD = LH
5930    LET V.CORD = LV
5940    LET P.COLOR = WHITE
5950    GOSUB 8280      'PAINT HEX WHITE
5960    DEF SEG=0: POKE 1050,PEEK(1052) 'CLEAR KEYBOARD BUFFER
5970    LET REPLY$ = INKEY$
5980    IF REPLY$ = "" THEN GOTO 5970
5990    IF REPLY$ = " " THEN LET P.COLOR = CLR: GOSUB 8280:                                GOTO 6480  'NO ATTACK
6000    IF LEFT$(REPLY$,1) <> CHR$(0) THEN BEEP:                                          GOTO 5970
6010    LET REPLY$ = RIGHT$(REPLY$,1)
6020    IF REPLY$ = CHR$(72) THEN LET NEWV = LV - 1:                                        LET NEWH = LH:                                                                  GOTO 6190
6030    IF REPLY$ = CHR$(80) THEN LET NEWV = LV + 1:                                        LET NEWH = LH:                                                                  GOTO 6190
6040    IF REPLY$ = CHR$(77) THEN LET NEWH = LH + 1:                                        LET NEWV = LV:                                                                  GOTO 6080
6050    IF REPLY$ <> CHR$(75) THEN BEEP:                                                  GOTO 5970
6060    LET NEWH = LH - 1
6070    LET NEWV = LV
6080 ' GET 2ND PART OF COMMAND
6090    LET REPLY$ = INKEY$
6100    IF REPLY$ = "" THEN GOTO 6080
6110    LET REPLY$ = RIGHT$(REPLY$,1)
6120    IF REPLY$ = CHR$(80) THEN GOTO 6140
6130    IF REPLY$ <> CHR$(72) THEN BEEP:                                                  GOTO 6070
6140 '
6150    IF COL$ = "ODD" AND REPLY$ = CHR$(72)                                              THEN LET NEWV = LV  - 1
6160    IF COL$ = "ODD" AND REPLY$ = CHR$(80)                                              THEN LET NEWV = LV
6170    IF COL$ = "EVEN" AND REPLY$ = CHR$(72)                                              THEN LET NEWV = LV
6180    IF COL$ = "EVEN" AND REPLY$ = CHR$(80)                                              THEN LET NEWV = LV + 1
6190 'CHECK LEGAL MOVE
6200    IF NEWH < 1 THEN GOTO  6270     'ILLEGAL
6210    IF NEWH > 12 THEN GOTO 6270
6220    IF NEWV < 1 THEN GOTO 6270
6230    IF NEWV > 8 THEN GOTO 6270
6240    IF TERRAIN$(NEWH,NEWV) = "O" THEN GOTO 6270 'OFF BOARD
6250    IF RIGHT$(TERRAIN$(NEWH,NEWV),1) <> ENEMY$ THEN GOTO 6270 'NO ENEMY UNIT
6260    GOTO 6320       'RECORD ATTACK
6270 'ILLEGAL MOVE
6280    BEEP
6290    LET MSG$ =  "ILLEGAL MOVE"
6300    GOSUB 8400      'PRINT MSG
6310    GOTO 5910
6320 'RECORD ATTACK
6330    LET MSG$ = " "
6340    GOSUB 8400  'PRINT MSG
6350    LET P.COLOR = CLR
6360    GOSUB 8280      'RESTORE COLOR OF UNIT
6370    FOR Z = 1 TO MAX.ARMY   'FIND DEFENDER
6380      IF ARMY.LOC(Z,1) = NEWH AND ARMY.LOC(Z,2) = NEWV                                  THEN LET DEFENDER = Z:                                                          GOTO 6400
6390    NEXT Z
6400    FOR Z = 1 TO MAX.ARMY   'FIND DEFENDER IN ATTACK TABLE
6410      IF ATTACK(Z,1) = 0                                                                THEN LET ATTACK(Z,1) = DEFENDER:                                                GOTO 6440
6420      IF ATTACK(Z,1) = DEFENDER THEN GOTO 6440
6430    NEXT Z
6440    FOR Y = 2 TO 7
6450      IF ATTACK(Z,Y) = 0 THEN                                                            LET ATTACK(Z,Y) = X:                                                            GOTO 6470
6460    NEXT Y
6470 '  ATTACK IS RECORDED
6480 RETURN
6490 '
6500 '---------------------------------------------------------------------------
6510 'GET RESULTS OF ATTACK
6520    RANDOMIZE TIMER
6530    FOR Z = 1 TO 10
6540      IF ATTACK(Z,1) = 0 THEN GOTO 6570     'END OF ATTACKS
6550      GOSUB 6600    'ATTACK
6560    NEXT Z
6570 RETURN
6580 '
6590 '---------------------------------------------------------------------------
6600 'ATTACK
6610    LET ATTACKERS = 0
6620    FOR Y = 2 TO 7
6630      IF ATTACK(Z,Y) = 0 THEN GOTO 6660
6640      LET ATTACKERS = ATTACKERS + 1
6650    NEXT Y
6660    IF LEFT$(TERRAIN$(ARMY.LOC(ATTACK(Z,1),1),ARMY.LOC(ATTACK(Z,1),2)),1) = "W"                           THEN LET ATTACKERS = ATTACKERS - 1
6670    IF LEFT$(TERRAIN$(ARMY.LOC(ATTACK(Z,1),1),ARMY.LOC(ATTACK(Z,1),2)),1) = "C"                           THEN LET ATTACKERS = ATTACKERS - 1
6680    LET A = 2
6690    LET RESULT = INT((RND*6)+1) - ATTACKERS
6700    IF RESULT =< -2 THEN GOSUB 6770: GOTO 6740   'DEFENDER ELIMINATED
6710    IF RESULT <= 1 THEN GOSUB 6920: GOTO 6740    'DEFENDER RETREATS
6720    IF RESULT < 5 THEN GOSUB 7020: GOTO  6740    'ATTACKER RETREATS
6730    IF RESULT => 5 THEN GOSUB 7140: GOTO 6740    'ATTACKER ELIMINATED
6740 RETURN
6750 '
6760 '---------------------------------------------------------------------------
6770 'DEFENDER ELIMINATED
6780    LET LH = ARMY.LOC(ATTACK(Z,1),1)
6790    LET LV = ARMY.LOC(ATTACK(Z,1),2)
6800    LET ARMY.LOC(ATTACK(Z,1),1) = 0
6810    IF LEN(TERRAIN$(LH,LV)) = 1                                                       THEN LET TERRAIN$(LH,LV) = ""                                                   ELSE LET TERRAIN$(LH,LV) = LEFT$(TERRAIN$(LH,LV),1)
6820    LET H.CORD = LH
6830    LET V.CORD = LV
6840    LET P.COLOR = GRAY
6850    IF TERRAIN$(LH,LV) = "W" THEN                                                     LET P.COLOR = GREEN
6860    IF TERRAIN$(LH,LV) = "C" THEN                                                     LET P.COLOR = BROWN
6870    GOSUB 8280      'PRINT LOC
6880    GOSUB 8040      'MOVE ATTACKER INTO HEX
6890 RETURN
6900 '
6910 '---------------------------------------------------------------------------
6920 'DEFENDER RETREATS
6930    LET A = 1
6940    IF ARMY$ = "R"                                                                    THEN LET R.ARMY$ = "U"                                                          ELSE LET R.ARMY$ = "R"
6950    LET LH = ARMY.LOC(ATTACK(Z,1),1)
6960    LET LV = ARMY.LOC(ATTACK(Z,1),2)
6970    LET DEFENDER$ = "YES"
6980    GOSUB 7280      'GET RETREAT MOVE
6990 RETURN
7000 '
7010 '---------------------------------------------------------------------------
7020 'ATTACKER RETREATS
7030    LET DEFENDER$ = "NO"
7040    LET R.ARMY$ = ARMY$
7050    FOR A = 2 TO 7
7060      IF ATTACK(Z,A) = 0 THEN GOTO 7110
7070      LET LH = ARMY.LOC(ATTACK(Z,A),1)
7080      LET LV = ARMY.LOC(ATTACK(Z,A),2)
7090      GOSUB 7280      'GET RETREAT MOVE
7100    NEXT A
7110 RETURN
7120 '
7130 '---------------------------------------------------------------------------
7140 'ATTACKER ELIMINATED
7150    LET LH = ARMY.LOC(ATTACK(Z,A),1)
7160    LET LV = ARMY.LOC(ATTACK(Z,A),2)
7170    LET ARMY.LOC(ATTACK(Z,A),1) = 0
7180    IF LEN(TERRAIN$(LH,LV)) = 1                                                       THEN LET TERRAIN$(LH,LV) = ""                                                   ELSE LET TERRAIN$(LH,LV) = LEFT$(TERRAIN$(LH,LV),1)
7190    LET V.CORD = LV
7200    LET H.CORD = LH
7210    LET P.COLOR = GRAY
7220      IF TERRAIN$(LH,LV) = "W" THEN                                                     LET P.COLOR = GREEN
7230      IF TERRAIN$(LH,LV) = "C" THEN                                                     LET P.COLOR = BROWN
7240    GOSUB 8280      'PAINT HEX
7250 RETURN
7260 '
7270 '---------------------------------------------------------------------------
7280 'GET RETREAT MOVE
7290    IF R.ARMY$ = "U"                                                                  THEN LET R.ENEMY$ = "R"                                                         ELSE LET R.ENEMY$ = "U"
7300    IF R.ARMY$ = "R" THEN LET MSG$ = "RED ARMY RETREATS "                             ELSE LET MSG$ = "US ARMY RETREATS "
7310    GOSUB 8400      'PRINT MSG
7320    LET V.CORD = LV
7330    LET H.CORD = LH
7340    LET P.COLOR = WHITE
7350    GOSUB 8280      'PRINT HEX WHITE
7360    DEF SEG=0: POKE 1050,PEEK(1052) 'CLEAR KEYBOARD BUFFER
7370    LET REPLY$ = INKEY$
7380    IF REPLY$ = "" THEN GOTO 7370
7390    IF REPLY$ = " " THEN GOTO 7980   'UNIT ELIMINATED
7400    IF LEFT$(REPLY$,1) <> CHR$(0) THEN BEEP:                                          GOTO 7360
7410    LET REPLY$ = RIGHT$(REPLY$,1)
7420    IF REPLY$ = CHR$(72) THEN LET NEWV = LV - 1:                                        LET NEWH = LH:                                                                  GOTO 7590
7430    IF REPLY$ = CHR$(80) THEN LET NEWV = LV + 1:                                        LET NEWH = LH:                                                                  GOTO 7590
7440    IF REPLY$ = CHR$(77) THEN LET NEWH = LH + 1:                                        LET NEWV = LV:                                                                  GOTO 7480
7450    IF REPLY$ <> CHR$(75) THEN BEEP:                                                  GOTO 7360
7460    LET NEWH = LH - 1
7470    LET NEWV = LV
7480 ' GET 2ND PART OF COMMAND
7490    LET REPLY$ = INKEY$
7500    IF REPLY$ = "" THEN GOTO 7490
7510    LET REPLY$ = RIGHT$(REPLY$,1)
7520    IF REPLY$ = CHR$(80) THEN GOTO 7540
7530    IF REPLY$ <> CHR$(72) THEN BEEP:                                                  GOTO 7360
7540 '
7550    IF COL$ = "ODD" AND REPLY$ = CHR$(72)                                              THEN LET NEWV = LV  - 1
7560    IF COL$ = "ODD" AND REPLY$ = CHR$(80)                                              THEN LET NEWV = LV
7570    IF COL$ = "EVEN" AND REPLY$ = CHR$(72)                                              THEN LET NEWV = LV
7580    IF COL$ = "EVEN" AND REPLY$ = CHR$(80)                                              THEN LET NEWV = LV + 1
7590 'CHECK LEGAL MOVE
7600    IF NEWH < 1 THEN GOTO  7980     'ILLEGAL
7610    IF NEWH > 12 THEN GOTO 7980
7620    IF NEWV < 1 THEN GOTO 7980
7630    IF NEWV > 8 THEN GOTO 7980
7640    IF LEN(TERRAIN$(NEWH,NEWV)) = 2 THEN GOTO 7980 'HEX IS OCCUPIED
7650    IF TERRAIN$(NEWH,NEWV) = "O" THEN GOTO 7980 'OFF BOARD
7660    IF TERRAIN$(NEWH,NEWV) = "R" THEN GOTO 7980
7670    IF TERRAIN$(NEWH,NEWV) = "L" THEN GOTO 7980
7680    IF TERRAIN$(NEWH,NEWV) = "U" THEN GOTO 7980
7690 ' CHECK IF MOVE IS NEXT TO ENEMY UNIT
7700    IF ((NEWH/2) - INT(NEWH/2)) < .5 THEN                                                 LET COL$ = "EVEN" ELSE                                                          LET COL$ = "ODD"
7710    IF RIGHT$(TERRAIN$(NEWH+1,NEWV),1) = R.ENEMY$ THEN GOTO 7980
7720    IF RIGHT$(TERRAIN$(NEWH-1,NEWV),1) = R.ENEMY$ THEN GOTO 7980
7730    IF RIGHT$(TERRAIN$(NEWH,NEWV+1),1) = R.ENEMY$ THEN GOTO 7980
7740    IF RIGHT$(TERRAIN$(NEWH,NEWV-1),1) = R.ENEMY$ THEN GOTO 7980
7750    IF (COL$ = "EVEN") AND (RIGHT$(TERRAIN$(NEWH+1,NEWV+1),1)) = R.ENEMY$               THEN GOTO 7980
7760    IF (COL$ = "ODD") AND (RIGHT$(TERRAIN$(NEWH+1,NEWV-1),1)) = R.ENEMY$               THEN GOTO 7980
7770    IF (COL$ = "EVEN") AND (RIGHT$(TERRAIN$(NEWH-1,NEWV+1),1)) = R.ENEMY$               THEN GOTO 7980
7780    IF (COL$ = "ODD") AND (RIGHT$(TERRAIN$(NEWH-1,NEWV-1),1)) = R.ENEMY$                 THEN GOTO 7980
7790 ' MOVE RETREATING UNIT
7800    IF R.ARMY$ = "R"                                                                  THEN LET CLR = RED                                                              ELSE LET CLR = BLUE
7810    LET H.CORD = NEWH
7820    LET V.CORD = NEWV
7830    LET P.COLOR = CLR
7840    GOSUB 8280      'PAINT NEW LOC
7850      IF LEN(TERRAIN$(LH,LV)) = 1 THEN                                                  LET TERRAIN$(LH,LV) = "" ELSE                                                   LET TERRAIN$(LH,LV) = LEFT$(TERRAIN$(LH,LV),1)
7860    LET H.CORD = LH
7870    LET V.CORD = LV
7880    LET P.COLOR = GRAY
7890      IF TERRAIN$(LH,LV) = "W" THEN                                                     LET P.COLOR = GREEN
7900      IF TERRAIN$(LH,LV) = "C" THEN                                                     LET P.COLOR = BROWN
7910    GOSUB 8280      'PAINT OLD HEX
7920      LET ARMY.LOC(ATTACK(Z,A),1) = NEWH
7930      LET ARMY.LOC(ATTACK(Z,A),2) = NEWV
7940      LET TERRAIN$(NEWH,NEWV) = TERRAIN$(NEWH,NEWV) + R.ARMY$
7950    IF DEFENDER$ = "YES" THEN GOSUB 8040      'MOVE ATTACKER INTO HEX
7960    GOTO 8010      'END OF RETREAT
7970 '
7980 'RETREATING UNIT IS ELIMINATED
7990    IF DEFENDER$ = "YES"                                                              THEN GOSUB 6770                                                                 ELSE GOSUB 7140
8000    GOTO 8010      'END OF RETREAT
8010 RETURN
8020 '
8030 '---------------------------------------------------------------------------
8040 ' MOVE ATTACKER INTO EMPTY HEX
8050    LET NEWH = LH
8060    LET NEWV = LV
8070    LET LH = ARMY.LOC(ATTACK(Z,2),1)
8080    LET LV = ARMY.LOC(ATTACK(Z,2),2)
8090    IF ARMY$ = "R"                                                                    THEN LET CLR = RED                                                              ELSE LET CLR = BLUE
8110    LET V.CORD = NEWV
8120    LET H.CORD = NEWH
8130    LET P.COLOR = CLR
8140    GOSUB 8280      'PAINT NEW HEX
8150      IF LEN(TERRAIN$(LH,LV)) = 1 THEN                                                  LET TERRAIN$(LH,LV) = "" ELSE                                                   LET TERRAIN$(LH,LV) = LEFT$(TERRAIN$(LH,LV),1)
8160    LET V.CORD = LV
8170    LET H.CORD = LH
8180    LET P.COLOR = GRAY
8190      IF TERRAIN$(LH,LV) = "C" THEN                                                     LET P.COLOR = BROWN
8200      IF TERRAIN$(LH,LV) = "W" THEN                                                     LET P.COLOR = GREEN
8210    GOSUB 8280      'PAINT OLD HEX
8220      LET ARMY.LOC(ATTACK(Z,2),1) = NEWH
8230      LET ARMY.LOC(ATTACK(Z,2),2) = NEWV
8240      LET TERRAIN$(LH,LV) = LEFT$(TERRAIN$(LH,LV),1)
8250      LET TERRAIN$(NEWH,NEWV) = TERRAIN$(NEWH,NEWV) + ARMY$
8260 RETURN
8270 '
8280 'PAINT A HEX
8290    LET V.POINT = ((V.CORD - 1) * 24) + 14
8300    IF ((H.CORD/2) - INT(H.CORD/2)) < .5                                              THEN LET COL$ = "EVEN"                                                          ELSE LET COL$ = "ODD"
8310    IF COL$ = "ODD"                                                                  THEN LET H.POINT = 25 + ((H.CORD -1) * 24)                                      ELSE LET H.POINT = 19 + ((H.CORD -1) * 24)
8320    LET H.COL = 3 + ((H.CORD-1)*3)
8330    IF COL$ = "ODD"                                                                   THEN LET V.COL = 2 + ((V.CORD-1)*3)                                             ELSE LET V.COL = 4 + ((V.CORD-1)*3)
8340    LOCATE V.COL,H.COL
8350    IF P.COLOR = BROWN                                                                THEN PRINT "C";
8360    IF P.COLOR = GREEN                                                                THEN PRINT "W";
8370    PAINT (H.POINT,V.POINT),P.COLOR,7
8380 RETURN
8390 '
8400 'PRINT A MESSAGE
8410    FOR CX = 1 TO LEN(MSG$)
8420      LOCATE CX,39
8430      PRINT MID$(MSG$,CX,1);
8440    NEXT CX
8450    FOR CX = CX TO 22
8460      LOCATE CX,39
8470      PRINT " ";
8480    NEXT CX
8490 RETURN
8500 '
8600 'F1 TRAP
8610    CH=1
8620    CV=2
8630    FOR C = 1 TO 8
8640            IF TERRAIN$(CH,CV)="" THEN LET TERRAIN$(CH,CV)="U": GOTO 8680
8650            LET CV=CV+1
8660            IF CV>8 THEN CV=0:CH=CH+1:
8670            GOTO 8640
8680            V.CORD=CV
8690            H.CORD=CH
8695            P.COLOR=BLUE
8696            GOSUB 8280
8697    NEXT C
8700 RETURN
```
{% endraw %}

## COMBAT.DOC

{% raw %}
```
                  COMBAT - TACTICAL COMBAT SIMULATION

     COMBAT IS A BATTLE SIMULATION AT A TATICAL LEVEL USING A HEX
GRID PLAYING AREA.  UNITS ARE PLATOON SIZE.  THE SCENARIO IS A 
SOVIET INVASION OF WEST GERMANY.  PLAYING INSTRUCTIONS ARE PROVIDED
IN THE PROGRAM.


```
{% endraw %}

## DUN.DOC

{% raw %}
```
                    DUNGEON QUEST DOCUMENTATION


     NOTE:  ALL THE PROGRAMS EXPECT INPUT FROM THE KEYBOARD TO BE IN UPPER
            CASE (ALL CAPITAL LETTERS).  BE SURE TO HIT CAPS LOCK.



1.  GETTING STARTED:

  1.1  FROM DOS TYPE "BASIC MENU"

  1.2  ENTER "1" TO BUILD A PLAYER CHARACTER.

  1.3  ENTER "2" TO EQUIP THE CHARACTER AT THE SUPPLY SHOPPE

  1.4  ENTER "3" TO PLAY


2.  PLAYER CHARACTERS:

  2.1 SELECT OPTION 1 "PLAYER CHARACTERS" FROM THE MENU PROGRAM OR
      RUN PROGRAM "DUNCHAR"

  2.2 CREATING A NEW CHARACTER:

    2.2.1  TYPE "1" CREATE A NEW PLAYER CHARACTER

    2.2.2  THE PROGRAM WILL FIND THE NEXT UNUSED PLAYER NUMBER (THERE CAN BE  
            1 TO 9 PLAYERS) AND DISPLAYS YOUR PLAYER NUMBER.  BE SURE TO
            REMEMBER YOUR PLAYER NUMBER, IT WILL BE USED BY ALL THE 
            OTHER PROGRAMS TO IDENTIFY YOU.

    2.2.3  IF ALL 9 CHARACTERS ARE IN USE YOU WILL GET MESSAGE "NO MORE 
           AVAILABLE PLAYERS".  TO CREATE A NEW PLAYER, YOU WILL HAVE TO
           KILL AN OLD PLAYER.

    2.2.4  THE PROGRAM WILL DETERMINE THE ABILITIES OF YOUR CHARACTER & DISPLAY
           THEM.

    2.2.5  YOU HAVE A CHOICE OF 7 CLASSES OF PLAYERS.   THE COMPUTER WILL
           RECOMMEND A CHOICE BASED ON YOUR ABILITIES.
           CLERIC  - REQUIRES GREAT WISDOM.  CANNOT USE EDGED WEAPONS (SWORD,
           SPEAR, ETC.).  IS EASILY HARMED BUT WHEN PROMOTED TO HIGHER
           LEVELS CAN WORK VERY POWERFUL SPELLS.
           DWARF  - REQUIRES GREAT STRENGTH.  IS HARD TO KILL. CANNOT USE MAGIC.
           GOOD AT FINDING HIDDEN TRAPS.
           ELF - REQUIRES BOTH INTELLIGENCE AND STRENGTH.  CAN USE BOTH MAGIC & 
           ANY WEAPON.  HARD TO HARM.  CANNOT ADVANCE ABOVE 6TH LEVEL.
           FIGHTER - REQUIRES GREAT STRENGTH.  HARD TO KILL.  CANNOT USE MAGIC.
           HALFLING - REQUIRES STRENGTH AND DEXTERITY.   CANNOT USE MAGIC. 
           HARD TO KILL.
           MAGIC-USER - REQUIRES HIGH INTELLIGENCE.  EASILY HARMED BUT WHEN
           PROMOTED TO HIGHER LEVELS CAN BUY VERY POWERFUL SPELLS.  CAN 
           USE ANY WEAPON.
           THIEF - REQUIRES GREAT DEXTERITY.  CAN USE ANY WEAPON.  EASILY 
           HARMED.  CANNOT USE MAGIC.  VERY GOOD AT FINDING HIDDEN TRAPS
           AND AT OPENING LOCKED OR STUCK DOORS AND GETS BETTER AS HE IS
           PROMOTED TO HIGHER LEVELS.

    2.2.6  ENTER THE FIRST LETTER OF YOUR CHOICE OF CLASS (FOR EXAMPLE
          "C" FOR CLERIC)

    2.2.6  DEPENDING ON YOUR CLASS AND ABILITIES THE PROGRAM MAY ALLOW YOU 
           TO ADJUST SOME ABILITIES.  YOU MAY INCREASE AN ABILITY AT THE
           COST OF LOWERING OTHER ABILITIES.
           A PLAYER WITH VERY HIGH SCORES IN THE REQUIREMENTS OF HIS 
           CLASS WILL GET ADDITIONAL EXPERIENCE POINTS WHEN PLAYING.
           GREATER STRENGTH HELPS OPEN DOORS.
           IF YOU DON'T WANT TO ADJUST AN ABILITY, HIT ENTER.  IF YOU
           WANT TO MAKE AN ADJUSTMENT, ENTER THE FIRST LETTER OF THE ABILITY
           THAT YOU WANT TO ADJUST (FOR EXAMPLE "S" FOR STRENGTH).

    2.2.7  THE PROGRAM WILL DISPLAY HOW MANY HIT POINTS YOU HAVE.  HIT POINTS 
           ARE THE AMOUNT OF DAMAGE YOU CAN SURVIVE.  WHEN YOUR HIT POINTS
           ARE REDUCED TO ZERO, YOU DIE.

    2.2.8  THE PROGRAM WILL DISPLAY NUMBER OF GOLD PIECES YOU HAVE TO START.
           GOLD PIECES ARE USED TO PURCHASE WEAPONS, SUPPLIES, SPELLS, ETC.

    2.2.9  THE PROGRAM WILL ASK YOU TO GIVE YOUR PLAYER CHARACTER A NAME 
           (1-24 CHARACTERS LONG).  TYPE THE NAME AND HIT ENTER.

    2.2.10  THE PROGRAM WILL DISPLAY YOUR "SAVING THROWS".  IF YOU ARE ATTACKED
            BY A MAGIC OR POISON MONSTER THE COMPUTER WILL PICK A NUMBER
            BETWEEN 1 AND 20.  IF THE NUMBER IS GREATER THAN YOUR SAVING
            THROW, THE HARM DONE IS REDUCED.

    2.2.11  THE PROGRAM WILL DETERMINE AN ARMOR CLASS ADJUSTMENT BASED ON YOUR
            DEXTERITY.  THIS NUMBER IS ADDED TO THE ARMOR CLASS OF THE
            ARMOR YOU ARE WEARING.  THE HIGHER YOUR ARMOR CLASS, THE HARDER
            IT IS FOR A MONSTER TO HARM YOU.

  2.3  LISTING A PLAYER CHARACTER:

    2.3.1  TYPE "2" TO LIST A PLAYER CHARACTER

    2.3.2  IF YOU KNOW THE PLAYERS NUMBER, ENTER IT.  IF YOU DON'T KNOW IT,
           HIT ENTER AND THE PROGRAM WILL ASK YOU FOR THE PLAYER'S NAME.

    2.3.3  THE PROGRAM WILL LIST ALL THE INFORMATION IT HAS ON THE PLAYER
           (CLASS, NAME, HIT POINTS, ETC).

  2.4  KILLING A PLAYER CHARACTER:

    2.4.1  TYPE "3" TO KILL A PLAYER CHARACTER

    2.4.2  IF YOU KNOW THE PLAYER'S NUMBER, ENTER IT.  IF YOU DON'T KNOW IT, 
           HIT ENTER AND THE PROGRAM WILL ASK YOU FOR THE PLAYER'S NAME.

    2.4.3  THE PROGRAM WILL DISPLAY THE PLAYER'S NAME AND ASK YOU IF YOU ARE  
            SURE YOU WANT TO KILL THAT CHARACTER.  IF YOU DO, ENTER "Y",
            IF YOU DON'T WANT TO KILL THE CHARACTER ENTER "N".

    2.4.4  IF YOU REPLIED "Y" THE PLAYER IS KILLED AND THE PLAYER NUMBER IS
           AVAILABLE FOR REUSE.

  2.5  RETURNING TO THE MAIN MENU:

    2.5.1  TYPE "9" TO RETURN TO THE MAIN MENU PROGRAM.



3.  THE SUPPLY SHOPPE

  3.1  SELECT OPTION 2 "THE SUPPLY SHOPPE" FROM THE MENU PROGRAM
       OR RUN PROGRAM "DUNSHOP"

  3.2  BUYING SUPPLIES FOR A CHARACTER:

    3.2.1  TYPE "1" BUY SUPPLIES

    3.2.2  PROGRAM WILL ASK FOR YOUR PLAYER NUMBER.  TYPE THE PLAYER'S
           NUMBER (1-9).  IF THE PLAYER IS DEAD YOU WILL GET MESSAGE
           "THAT NUMBER IS NOT VALID", OTHERWISE IT WILL DISPLAY THE
           PLAYER'S NAME AND YOU IF THAT IS THE CORRECT CHARACTER.
           IF IT IS CORRECT, TYPE "Y" AND CONTINUE.  IF IT IS THE WRONG
           PLAYER, TYPE "N" GO BACK TO STEP 3.2.2

  3.3.3  PROGRAM WILL DISPLAY HOW MUCH MONEY YOU HAVE TO START, THEN LIST
         THE ITEMS THAT YOU CAN BUY.  IF YOU WANT TO BUY AN TYPE HOW MANY 
         YOU WANT TO BUY (1-9).  IF YOU DON'T WANT TO BUY THE ITEM, HIT ENTER
         OR TYPE 0.  NOTE THAT THERE ARE LIMITS ON THE NUMBER OF MAGIC
         SPELLS THAT YOU CAN BUY (BASED ON YOUR LEVEL).  IF YOU TRY TO
         BUY MORE THAN THE LIMIT, YOU WILL GET A MESSAGE TELLING YOU THE
         MAXIMUM NUMBER YOU CAN BUY.
         AFTER YOU BUY AN ITEM, THE PROGRAM WILL DISPLAY HOW MUCH MONEY
         YOU HAVE LEFT.

  3.4  SELLING SUPPLIES:

    3.4.1  SELECT OPTION "2" SELL SUPPLIES

    3.4.2  PROGRAM WILL ASK FOR YOUR PLAYER NUMBER.  TYPE THE PLAYER'S
           NUMBER (1-9).  IF THE PLAYER IS DEAD YOU WILL GET MESSAGE
           "THAT NUMBER IS NOT VALID", OTHERWISE IT WILL DISPLAY THE
           PLAYER'S NAME AND YOU IF THAT IS THE CORRECT CHARACTER.
           IF IT IS CORRECT, TYPE "Y" AND CONTINUE.  IF IT IS THE WRONG
           PLAYER, TYPE "N" GO BACK TO STEP 3.2.2

    3.4.3  THE PROGRAM WILL LIST ALL THE ITEMS THAT YOU OWN.  TO SELL THE
           ITEM, TYPE THE AMOUNT THAT YOU WANT TO SELL (1-9).  IF YOU DON'T
           WANT TO SELL THE ITEM, HIT ENTER, HIT THE SPACE BAR, OR TYPE 0.
           NOTE THAT YOU MAY BE FORCED TO SELL SOME ITEMS (FOR EXAMPLE IF
           A CLERIC HAS AN EDGED WEAPON, OR A FIGHTER HAS A MAGIC SPELL, OR
           A MAGIC USER HAS A SPELL THAT ONLY A CLERIC CAN USE)

    3.4.4  AFTER YOU HAVE HAD A CHANCE TO SELL ALL YOUR ITEMS, THE PROGRAM
           WILL DISPLAY HOW MUCH MONEY YOU NOW HAVE.

  3.5  ADDING A NEW ITEM TO THE STORE:
       NOTE THAT ANY MAGIC ITEM OR SPELL WILL REQUIRE MODIFICATION OF PROGRAM
       "DUNPLAY" TO HAVE ANY EFFECT.

    3.5.1  SELECT OPTION "3" ADD A NEW ITEM TO THE STORE

    3.5.2  YOU CAN ADD 1 OR MORE ITEMS.  AFTER ADDING THE LAST ITEM, ENTER
           "END" FOR NAME OF ITEM.  NOTE THAT IF THE TOTAL NUMBER OF ITEMS
           IS MORE THAN 40 YOU WILL HAVE TO MODIFY PROGRAM "DUNQUEST" FOR
           A LARGER SUPPLY ARRAY.

    3.5.3  ENTER NAME OF ITEM (1-15 CHARACTERS)

    3.5.4  ENTER COST OF ITEM

    3.5.5  ENTER CLASS OF ITEM

    3.5.6  FOR ARMOR, ENTER ARMOR CLASS (1-10; 10 IS STRONGEST ARMOR)
           FOR A WEAPON, ENTER THE DAMAGE POINTS THAT THE WEAPON WILL CAUSE
           FOR A MAGIC SPELL ENTER CODE TO INDICATE WHAT CLASS OF PLAYER
           CAN USE THE SPELL.

    3.5.7  FOR MAGIC SPELLS, ENTER THE LEVEL THAT THE  PLAYER MUST REACH
           TO USE THE SPELL (1-9).  FOR ALL OTHER ITEMS, ENTER THE WEIGHT
           (IN GOLD PIECES) OF THE ITEM.  A GOLD PIECE  IS ABOUT ONE OUNCE.

  3.6  CHANGING AN ITEM IN THE STORE:
       NOTE: BEFORE CHANGING AN ITEM YOU SHOULD REVIEW ITS EFFECT ON PROGRAM 
       "DUNPLAY".
       ITEMS ARE OFTEN REFERED TO BY THEIR RELATIVE POSITION IN THE FILE
       NOT ALWAYS BY NAME OR CLASS.  IT IS USUALLY SAFE TO CHANGE COST OR
       WEIGHT OF AN ITEM.

    3.6.1  SELECT OPTION "4" CHANGE AN ITEM IN THE STORE

    3.6.2  YOU CAN CHANGE ANY NUMBER OF ITEMS.  AFTER THE LAST ITEM YOU WANT
           TO CHANGE, ENTER "E" FOR NAME OF ITEM TO RETURN TO MENU.

    3.6.3. ENTER NAME OF ITEM YOU WANT TO CHANGE.  IT MUST BE ENTERED
           EXACTLY AS IT APPEARS ON THE FILE.

    3.6.4  THE PROGRAM WILL DISPLAY NAME, CLASS, PRICE ETC OF THE ITEM.

    3.6.5  ENTER THE CODE FOR THE  FIELD YOU WANT TO CHANGE.  IF YOU WANT
           TO CHANGE MORE THAN ONE FIELD YOU WILL HAVE TO REPEAT STEPS 
           3.6.3 THRU 3.6.6 ONCE FOR EACH FIELD

    3.6.6  ENTER THE NEW VALUE FOR THE FIELD

  3.7  LISTING THE SUPPLY FILE

    3.7.1  MAKE SURE YOUR PRINTER IS READY

    3.7.2  SELECT OPTION "5" LIST SUPPLIES

    3.7.3  ALL THE ITEMS IN THE SUPPLY FILE WILL BE PRINTED.

      3.7.3.1  THE RELATIVE RECORD NUMBER OF THE ITEM AND ITS NAME IS LISTED

      3.7.3.2  THE CLASS OF THE ITEM (A=ARMOR W=WEAPON E=EQUIPMENT S=SPELL)

      3.7.3.3  THE PRICE (IN GOLD PIECES) OF THE ITEM

      3.7.3.4  THE DAMAGE POINTS (FOR WEAPONS) OR ARMOR CLASS (FOR ARMOR)
               OR THE PLAYER CLASS REQUIRED (FOR SPELLS) IS LISTED NEXT.
               (1=CLERIC  3=ELF OR MAGIC USER)
               FOR EQUIPMENT THIS COLUMN HAS NO MEANING.

      3.7.3.5  THE WEIGHT OF THE ITEM IS LISTED NEXT.  FOR SPELLS, THE WEIGHT
               IS ALSO THE PLAYER LEVEL REQUIRED TO USE THE SPELL.

  3.8  RETURNING TO THE MAIN MENU:

    3.8.1  SELECT OPTION "9" END


4.  MAGIC SPELLS AND MAGIC ITEMS

  4.1 THE CURSE OF CARTER WEAKENS YOUR DEFENSE.  IT REDUCES YOUR ARMOR CLASS
      4 POINTS MAKING IT EASIER FOR MONSTERS AND TRAPS TO HARM YOU.
      THE CURSE OF CARTER IS A HEAVY BURDEN TO BEAR SO YOU WILL MOVE SLOWER.
      IT CAN ONLY BE REMOVED BY A "CURE CURSE" OR "REMOVE CURSE" SPELL

  4.2  MAGIC ARMOR GIVES YOU THE HIGHEST ARMOR CLASS (10) BUT IS ALMOST
       WEIGHTLESS.  

  4.3  MAGIC SWORD.  IT ALMOST NEVER MISSES AND USUALLY KILLS ON THE FIRST
       BLOW (UNLESS THE MONSTER CAN ONLY BE KILLED BY SPECIAL WEAPONS), 
       YET IS VERY LIGHT WEIGHT.

  4.4  CURE WOUNDS RESTORES HIT POINTS TO A PLAYER.  THE NUMBER OF POINTS
       RESTORED IS EQUAL TO THE LEVEL OF THE PLAYER CASTING THE SPELL 
       (FOR EXAMPLE A LEVEL 9 CLERIC CAN CURE 9 POINTS OF DAMAGE).
       THE SPELL CAN NEVER RAISE THE HIT POINTS OF A PLAYER ABOVE THEIR
       ORIGINAL LEVEL.

  4.5  FIND TRAPS WILL FIND ANY TRAPS THE NEXT TIME A SEARCH IS DONE.

  4.6  LIGHT WILL LIGHT ANY ROOM THE PLAYER ENTERS

  4.7  ELF LIGHT WILL LIGHT ANY ROOM THE PLAYER ENTERS

  4.8  REMOVE CURSE WILL REMOVE THE CURSE OF CARTER FROM A PLAYER

  4.9  CURE CURSE WILL REMOVE THE CURSE OF CARTER FROM A PLAYER

  4.10  RAISE DEAD WILL RESTORE A DEAD PLAYER TO LIFE.  THE PLAYER WILL 
        BE VERY WEAK AND DEFENSELESS.  HE WILL ALSO LOSE ANYTHING HE WAS
        HOLDING IN HIS HANDS WHEN HE WAS KILLED.

  4.11  LIGHTNING WILL DAMAGE ANY MONSTER OR PLAYER WITHIN TWO SPACES.
        THE AMOUNT OF DAMAGE WILL DEPEND ON THE LEVEL OF THE PLAYER.

  4.12  CLOUD KILL WILL DO 1 TO 5 POINTS OF DAMAGE TO ANY MONSTER IN THE
        SAME ROOM AS THE PLAYER CASTING THE SPELL.  IT WILL NOT HARM 
        OTHER PLAYERS

  4.13  HOLD MONSTER WILL STOP ANY MONSTERS FROM ATTACKING FOR A SHORT TIME.
        IF POSSIBLE, THE MONSTERS WILL RUN FROM ANY PLAYER.

  4.14  TURN EVIL WILL STOP ANY MONSTERS FROM ATTACKING FOR A SHORT TIME.
        IF POSSIBLE, THE MONSTERS WILL RUN FROM ANY PLAYER.

  4.15  DEATH SPELL WILL KILL ANY MONSTER OR PLAYER.

  4.16  FINGER OF DEATH WILL KILL ANY MONSTER OR PLAYER.

  4.17  HASTE WILL DOUBLE THE SPEED OF MOVEMENT FOR ALL PLAYERS FOR A 
        SHORT TIME.

  4.18  OPEN DOORS WILL FREE THE NEXT DOOR OPENED.

  4.19  OPEN PORTAL WILL FREE THE NEXT DOOR OPENED.

5.  MONSTERS:
    THE TYPE OF MONSTERS YOU MEET WILL DEPEND ON THE LEVEL OF THE PLAYERS
    ON THE QUEST AND THE ROOMS YOU ENTER.

	MONSTER				DAMAGE POINTS	
	BANDIT				1-6
	BAT				0
	BEAR				3-12
	CAECILIA			1-8
	CARRION CRAWLER			PARALSYS
	CAVE BEAR			4-28		
	CENTIPEDE			POISON
	CROCODILE			2-16
	CYCLOPS				1-30	
	DEVIL SWINE			2-12			ONLY HARMED
	            						BY SILVER
	            						WEAPONS/SPELLS
	GHOUL				1-3 + PARALSYS
	GIANT SCORPION			3-24 + POISON
	GOBLIN				1-6
	GOLD DRAGON			1-52 + DRAGON FIRE	
	GOLEM				1-44			ONLY HARMED
	      							BY MAGIC WEAPONS
	      							/SPELLS
	GORGON				2-12 + TURN TO STONE
	HELLHOUND			1-6 + FIRE	
	KOBOLD				1-4
	MAN-LIZARD			1-6
	MUMMY				1-2 + PARALSYS	ONLY HARMED BY FIRE
	      						/MAGIC WEAPONS/SPELLS
	ORC				2-7
	ORGE				1-10		
	PURPLE WORM			1-24 + POISON
	RAT				1-2
	RED DRAGON			1-46 + DRAGON FIRE
	SABRE-TOOTH TIGER		5-40
	SALAMANDER			3-16
	SKELETON			1-6
	SNAKE				1-4 + POISON
	SPECTRE				1-8 + ENERGY DRAIN	ONLY HARMED
	        						BY MAGIC WEAPONS
	        						/SPELLS
	STONE GIANT			3-18	
	TROLL				3-22			CAN BE HARMED
	      							BY ANY WEAPON
	      							BUT ONLY
	      							KILLED BY FIRE
	VAMPIRE				1-10 + ENERGY DRAIN	ONLY HARMED
	        		  	2 LEVELS		BY STAKES
	        					OR SPELLS
	WEREBEAR			2-32		ONLY HARMED BY
	         					SILVER WEAPONS/SPELLS
	WERERAT				1-4		ONLY HARMED BY 
	                                                SILVER WEAPONS/SPELLS
	WEREWOLF			2-8		ONLY HARMED BY 
	         					SILVER WEAPONS/SPELLS
	WIGHT				ENERGY DRAIN	ONLY HARMED BY
	      				1 LEVEL		SILVER WEAPONS/SPELLS
	WOLF				1-3
	WYVERN				3-22 + POISON	
	ZOMBIE				1-8


6. THE QUEST:

    NOTE:  WHEN ENTERING THE NAME OF AN ITEM, YOU DON'T HAVE TO ENTER THE
    ENTIRE NAME BUT YOU DO HAVE TO ENTER ENOUGH OF THE NAME FOR THE 
    PROGRAM TO IDENTIFY WHICH ITEM YOU WANT.  FOR EXAMPLE YOU COULD ENTER
    "DA" FOR DAGGER, "MAGIC S" FOR MAGIC SWORD, ETC.  THE NAME "TREASURE"
    MUST ALWAYS BE FULLY SPELLED OUT.


  6.1  SELECT OPTION 3 "THE QUEST" FROM THE MENU PROGRAM OR 
       RUN PROGRAM "DUNQUEST"

  6.2  ENTER NUMBER OF PLAYERS FOR THE ADVENTURE (1-9)

  6.3  FOR EACH PLAYER:

    6.3.1  ENTER PLAYER'S NUMBER (1-9)

    6.3.2  PROGRAM WILL DISPLAY PLAYER'S NAME.
           IF YOU ENTERED THE WRONG PLAYER NUMBER TYPE "N"
           IF PLAYER NAME IS CORRECT TYPE "Y"
           
    6.3.4  ENTER THE NAME OF THE ARMOR YOU WANT TO WEAR.  IF YOU DON'T
           WANT OR DON'T OWN ANY ARMOR HIT ENTER

    6.3.5  ENTER THE NAME OF THE ITEM YOU WANT IN YOUR RIGHT HAND.  IF YOU
           DON'T WANT TO START WITH ANYTHING IN YOUR RIGHT HAND, HIT ENTER

    6.3.6  ENTER THE NAME OF THE ITEM YOU WANT IN YOUR LEFT HAND.  IF  YOU
           DON'T WANT TO START WITH ANYTHING IN YOUR LEFT HANG, HIT ENTER.

           NOTE THAT YOU SHOULD HAVE SOME SOURCE OF LIGHT BEFORE ENTERING
           THE DUNGEON.


  6.4  THE PROGRAM WILL SELECT A DUNGEON MAP AT RANDOM FROM THE 9 
       AVAILABLE MAPS AND STOCK IT WITH MONSTERS, TREASURE, ETC. THEN
       CHAIN TO PROGRAM "DUNPLAY".  THIS TAKES 2 TO 3 MINUTES SO BE
       PATIENT.

  6.5  PLAYERS START AT THE UPPER LEFT OF THE SCREEN.  THE OUTLINE OF THE
       DUNGEON IS DRAWN WITH THE INTERIOR DARK.  PLAYERS PLAY IN ORDER BY
       PLAYER NUMBER.  FOR EXAMPLE IF PLAYERS #2, #4, AND #8 ARE PLAYING
       PLAYER #2 WILL PLAY FIRST, THEN PLAYER #4, ETC.

  6.6  LIGHT:

    6.6.1  ROOMS ARE LIT AS YOU ENTER THEM, PROVIDED THAT YOU HAVE A SOURCE
           OF LIGHT (LANTERN, TORCH, LIGHT SPELL).

    6.6.2  IF YOU START THE ADVENTURE WITH A TORCH OR LANTERN IN YOUR HAND
           IT WILL BE AUTOMATICALY LIT.

    6.6.3  IF YOUR LIGHT GOES OUT, YOU WILL HAVE TO RELIGHT IT.  IF YOU
           ARE USING A TORCH YOU WILL HAVE TO GET ANOTHER.  YOU MUST
           HAVE A TINDER BOX TO LIGHT A FIRE.  IF YOU ARE USING A LANTERN
           YOU MUST HAVE MORE OIL.  LIGHTING WILL TAKE THE REST OF YOUR TURN.

    6.6.4  IF YOUR LIGHT GOES OUT, THE ROOM YOU ARE IN WILL BECOME DARK 
           UNLESS THERE IS ANOTHER PLAYER IN THE ROOM WITH A LIGHT.

    6.6.5  IF YOU PUT AWAY A LANTERN OR TORCH, IT IS PUT OUT FIRST.

  6.7  DOORS:

    6.7.1  MOST ROOMS IN A DUNGEON HAVE DOORS WHICH MUST BE OPENED BEFORE
           YOU CAN ENTER THE ROOM

    6.7.2  ALL DOOR ARE STUCK OR LOCKED AND MUST BE FORCED OPEN.
           ATTEMPTING TO OPEN A DOOR WILL TAKE AN ENTIRE TURN.
           IF YOU ATTEMPT TO OPEN A DOOR AFTER USING PART OF YOUR TURN
           THE ATTEMPT WILL BE UNSUCCESSFUL.

    6.7.4  MOST DOORS CAN BE IDENTIFIED BY AN INDENTATION IN THE WALL.
           HOWEVER THERE ARE A FEW HIDDEN DOORS.  

    6.7.5  GREAT STRENGTH HELPS TO FORCE OPEN A DOOR.  A THIEF HAS A BETTER
           THAN NORMAL CHANCE TO OPEN  A LOCKED DOOR.

    6.7.6  AN OPEN DOOR/OPEN PORTAL SPELL WILL OPEN THE DOOR FOR THE NEXT
           PLAYER THAT MAKES A VALID ATTEMPT TO OPEN A DOOR.

    6.7.8  YOU MUST BE NEXT TO A DOOR TO OPEN IT.

  6.8  TRAPS:

    6.8.1  YOU MAY FIND A TRAP BY SEARCHING A ROOM.  A SEARCH TAKES AN
           ENTIRE TURN.  IF YOU TRY TO SEARCH AFTER USING PART OF YOUR
           TURN YOU WILL NOT FIND ANYTHING.

    6.8.2  "YOU FIND NOTHING" MEANS THAT YOU DID NOT FIND A TRAP.  THERE
            COULD STILL BE A TRAP IN THE ROOM THAT YOU OVERLOOKED!

    6.8.3   A THIEF AND A DWARF HAVE BETTER THAN NORMAL CHANCES OF FINDING
            TRAPS.

    6.8.4   A FIND TRAPS SPELL WILL FIND ANY TRAPS IN THE ROOM OF THE NEXT
            PLAYER DOING A VALID SEARCH.

    6.8.5  THE TYPE OF TRAP IS DETERMINED WHEN IT IS FOUND OR SET OFF AND
           CAN CHANGE.

  6.9  TREASURE:
       TREASURE IS FOUND IN CHESTS.  SOME MONSTERS WILL ALSO HAVE TREASURE 
       WITH THEM.

    6.9.1  TO OPEN A TREASURE CHEST TYPE "G" THEN ENTER "TREASURE".  YOU
           MUST BE NEXT TO THE CHEST AND HAVE ONE HAND FREE TO OPEN IT.

    6.9.2  THE ITEM IN THE TREASURE WILL BE DISPLAYED.  IF YOU WANT THE
           ITEM TYPE "Y".  IF YOU DON'T WANT THE ITEM TYPE ANY OTHER KEY.
           YOU WILL GET GOLD, GEMS, JEWELRY AND THE CURSE OF CARTER IF YOU
           WANT THEM OR NOT.  NOTE THAT YOU COULD GET MORE THAN ONE OF AN
           ITEM.  IF YOU MAKE YOUR REPLY BUT THE SAME ITEM IS STILL 
           DISPLAYED TRY REPLYING AGAIN.

    6.9.3  A TREASURE CHEST COULD BE BOOBY TRAPPED.

    6.9.4  A GEM IS WORTH 100 GOLD PIECES.  JEWELRY IS WORTH 1000 GOLD 
           PIECES.  THE GEMS AND JEWELRY ARE CONVERTED TO GOLD WHEN YOU
           END THE ADVENTURE.

    6.9.5  TREASURE ITEMS ARE STOWED AWAY (IN YOUR PACK, SCABBORD ETC) AND
           WON'T BE IN YOUR HAND.

  6.10  GETTING ITEMS:

    6.10.1  TO GET AN ITEM FROM YOUR PACK, SCABBORD, ETC TYPE "G" THEN
            ENTER THE NAME OF THE ITEM.

    6.10.2  YOU MUST HAVE A FREE HAND TO GET ANYTHING

  6.11  PUTTING ITEMS AWAY:

    6.11.1  TO PUT AN ITEM AWAY (IN YOUR PACK, SCABBORD ETC) TYPE "P"
            THEN ENTER THE NAME OF THE ITEM.  

    6.11.2  YOU MUST HAVE THE ITEM IN YOUR HAND TO PUT IT AWAY.

  6.12  THROWING ITEMS AWAY:
        BECAUSE EXCESS WEIGHT CAN SLOW YOU DOWN, YOU MAY WANT TO THROW
        AN ITEM AWAY.

    6.12.1  TO THROW AN ITEM AWAY TYPE "T" THEN ENTER THE NAME OF THE ITEM.

    6.12.2  YOU MUST HAVE THE ITEM IN YOUR HAND TO THROW IT AWAY.

    6.12.3  THE ITEM IS GONE FOR GOOD.

  6.13  RUNNING:

    6.13.1  TO RUN TYPE "R" THEN USE THE CURSOR UP,DOWN ETC TO MOVE.

    6.13.2  YOU CAN MOVE THREE TIMES YOUR NORMAL SPEED BUT YOU WILL HAVE
            TO REST AFTERWARD.

  6.14  INVENTORY:  DISPLAY OF ITEMS YOU HAVE WITH YOU

    6.14.1  TO GET AN INVENTORY TYPE "I"

    6.14.2  NOTE THAT GOLD, JEWELRY AND GEMS ARE NOT LISTED.

  6.15  HELP:  

    6.16.1  TO GET A DISPLAY OF ALL THE COMMANDS TYPE "H"

  6.16  CASTING SPELLS:

    6.16.1  TO CAST A SPELL TYPE "C" THEN ENTER THE NAME OF THE SPELL.

    6.16.2  IT TAKES AN ENTIRE TURN TO CAST A SPELL.  IF YOU TRY TO CAST
            A SPELL AFTER USING PART OF YOUR TURN YOU WILL GET THE 
            MESSAGE "NO TIME".

    6.16.3  THE SPELL YOU CAST MUST BE ONE YOU ARE ALLOWED TO CAST BASED
            ON YOUR CLASS AND LEVEL.

    6.16.4  SOME SPELLS CAN BE CAST ON YOURSELF OR ANOTHER PLAYER.  ENTER
            THE PLAYER NUMBER OF THE PLAYER YOU WANT THE SPELL CAST ON.

    6.16.5  SOME SPELLS MUST BE CAST IN A DIRECTION.  ENTER THE DIRECTION
            YOU WANT THE SPELL CAST IN (U=UP  D=DOWN  R=RIGHT  L=LEFT).

  6.17  ATTACKING A MONSTER:

    6.17.1  TO ATTACK A MONSTER TYPE "A".

    6.17.2  YOU MUST BE NEXT TO A MONSTER TO ATTACK IT.

    6.17.3  YOU MUST HAVE A WEAPON IN YOUR HAND TO ATTACK.  NOTE THAT
            IF YOU HAVE A WEAPON IN BOTH HANDS, YOU WILL ALWAYS USE THE
            WEAPON IN YOUR RIGHT HAND TO ATTACK.

    6.17.4  A TORCH CAN BE USED AS A WEAPON.

    6.17.5  THE PROGRAM SEARCHES FOR A MONSTER TO ATTACK FROM RIGHT TO LEFT
            AND TOP TO BOTTOM AND WILL ATTACK THE FIRST ONE FOUND.

    6.17.6  YOU CAN'T ATTACK ANOTHER PLAYER.

    6.17.7  IF YOU GET THE MESSAGE "IT DID NO HARM" THEN THE MONSTER THAT
            YOU ARE ATTACKING CANNOT BE HARMED BY THE WEAPON YOU ARE
            USING.

  6.18  MOVING:

    6.18.1  USE THE CURSOR KEYS TO MOVE UP, DOWN, RIGHT, LEFT

    6.18.2  IF YOU GET A "BEEP" YOU ARE TRYING TO MOVE INTO A SOLID 
            OBJECT (A WALL, ANOTHER PLAYER, ETC) OR TRYING TO MOVE OFF
            THE SCREEN.

    6.18.2  THE NUMBER OF TIMES YOU CAN MOVE WILL DEPEND ON HOW MUCH WEIGHT
            YOU ARE CARRYING, IF YOU ARE CURSED, YOUR HEALTH, AND IF YOU OR
            ANOTHER PLAYER HAVE MADE AN ATTACK THIS ROUND.

    6.18.3  IF YOU GET THE MESSAGE "YOU ARE OVERLOADED & CAN'T MOVE"
            YOU ARE CARRYING TOO MUCH WEIGHT.  YOU MUST THROW AWAY
            SOMETHING TO LIGHTEN YOUR LOAD.


  6.19  THE MONSTERS:

    6.19.1  SOME MONSTERS LIVE IN A ROOM, OTHERS WANDER AND CAN APPEAR
            ANYWHERE AT ANY TIME.

    6.19.2  THE TYPE OF MONSTER IN THE ROOM YOU ARE IN WILL BE DISPLAYED
            AT THE START AND END OF YOUR TURN.  

    6.19.3  THERE MAY BE MORE THAN ONE MONSTER, BUT THEY WILL ALWAYS BE
            OF THE SAME TYPE.

    6.19.4  IF YOU ARE BETWEEN ROOMS (IN A DOORWAY) AND THERE ARE MONSTERS
            IN BOTH ROOMS, BOTH TYPES WILL BE DISPLAYED.

  6.20 SEQUENCE OF PLAY:

    6.20.1  EACH PLAYER (IN PLAYER NUMBER ORDER) GETS A TURN.  YOU CAN MOVE
            OR USE THE VARIOUS COMMANDS.  HOW MANY MOVES OR COMMANDS YOU 
            GET WILL DEPEND ON HOW MUCH WEIGHT YOU ARE CARRYING, YOUR
            HEALTH, IF YOU ARE UNDER A CURSE AND IF YOU OR ANOTHER 
            PLAYER HAS MADE AN ATTACK.

    6.20.2  AFTER ALL PLAYERS HAVE HAD A TURN, THE MONSTERS (IF ANY) WILL
            MOVE.  THEY CAN ATTACK YOU, RETREAT OR DO NOTHING.

    6.20.3  STEPS 6.20.1 AND 6.20.2 ARE REPEATED FOR EACH ROUND UNTIL ALL
            ALL PLAYERS ARE KILLED OR YOU QUIT.

  6.21 ENDING THE GAME:

    6.21.1  YOU CAN QUIT AT ANY TIME BY TYPING "Q"

    6.21.2  THE PROGRAM WILL ASK YOU IF YOU ARE SURE.  IF YOU WANT TO QUIT
             TYPE "Y" (PROGRAM WILL CHAIN TO "DUNEND" TO UPDATE FILES)
	    IF YOU DON'T WANT TO QUIT, TYPE "N" TO RESUME PLAY.

    6.21.3  IF ALL THE PLAYERS ARE NOT CLEAR OF THE DUNGEON WHEN YOU QUIT
            YOU WILL NOT GET ANY EXPERIENCE POINTS FOR THE ADVENTURE.

    6.21.4  TO BE SURE YOU ARE CLEAR, AFTER LEAVING THE DUNGEON MOVE TO 
            THE LEFT UNTIL YOU GET A "BEEP".

    6.21.5  THE PROGRAM WILL CALCULATE THE EXPERIENCE POINTS YOU EARNED 
             AND DETERMINE IF YOU SHOULD BE PROMOTED TO A HIGHER LEVEL.
             (YOU CAN LOOSE EXPERIENCE POINTS AND BE REDUCED TO A LOWER
             LEVEL IF YOU HAVE BEEN ATTACKED BY SOME MONSTERS).  THE
             CHARACTER AND SUPPLY FILE WILL BE UPDATED WITH YOUR NEW 
             LEVEL, EXPERIENCE POINTS, SAVING THROWS, TREASURE, GOLD,
             ETC.  THIS TAKES TWO OR THREE MINUTES SO BE PATIENT.

    6.21.6  THE PROGRAM WILL ASK IF YOU WANT TO PLAY AGAIN.  IF YOU TYPE
            "Y" THE "DUNQUEST" PROGRAM WILL BE RUN FOR A NEW GAME.  IF
            YOU HIT ANY OTHER KEY THE PROGRAM WILL CHAIN TO THE MENU
            PROGRAM.

7. EXPERIENCE POINTS:

  7.1 EXPERIENCE POINTS ARE DETERMINED BY THE AMOUNT OF TREASURE YOU GET
      AND THE MONSTERS YOU KILLED.  

  7.2 EXPERIENCE POINTS ARE DIVIDED EQUALLY BETWEEN ALL PLAYERS WHO SURVIVE
      AN ADVENTURE.

  7.3 TREASURE BELONGS TO THE PLAYER WHO GOT IT, BUT THE POINTS FOR THE
      TREASURE ARE DIVIDED BETWEEN ALL SURVIVING PLAYERS.


8. SUMMARY OF COMMANDS:

	A=ATTACK
	T=THROW AWAY
	L=LIGHT
	H=HELP
	O=OPEN DOORS
	G=GET
	P=PUT
	R=RUN
	I=INVENTORY
	Q=QUIT
	S=SEARCH
	C=CAST A SPELL

9.  THE DUNGEON MAPS:
	THERE ARE 9 MAPS AVAILABLE WHICH ARE SELECTED AT RANDOM FOR THE
        QUEST.  YOU CAN REPLACE ANY OF THESE MAPS USING THE UTILITY PROGRAM
        "DUNMAP" WHICH BUILDS MAP FILES.  DO NOT ATTEMPT TO REPLACE ANY 
        MAPS UNTIL YOU HAVE PLAYED A FEW TIMES AND KNOW HOW THE MAPS SHOULD
        LOOK AND HOW THEY AFFECT PLAY.

  9.1  RUN PROGRAM "DUNMAP".

  9.2  PROGRAM WILL WARN YOU THAT IT REPLACES THE OLD MAP.  TYPE "Y" TO
       CONTINUE, TYPE "N" TO END THE PROGRAM WITHOUT DOING ANY HARM.

  9.2  PROGRAM WILL LIST INSTRUCTIONS FOR DRAWING A MAP.  THE PROGRAM
       ASSUMES THAT YOU KNOW WHAT YOU ARE DOING AND DOES NO CHECKING OR
       EDITING.  YOU MUST BE VERY CAREFUL WHEN DRAWING A MAP BECAUSE YOU               CAN EASILY END UP WITH A MAP THAT UNPLAYABLE.

  9.3  NOTE THAT THE ROOMS MUST BE RECTANGULAR BECAUSE THE DUNQUEST PROGRAM
       ONLY USES UPPER LEFT AND LOWER RIGHT CO-ORDINATES TO DEFINE A ROOM.
       ALL ROOMS SHOULD HAVE DOORS, NOT OPEN DOORWAYS.  MAKE SURE THERE 
       IS A DOOR INTO EACH  ROOM.  MAKE SURE THAT THERE ARE NO MORE THAN
       9 ROOMS.  GOOD LUCK.



```
{% endraw %}

## DUNCHAR.BAS

{% raw %}
```bas
10 'DUNCHAR THE PLAYER CHARACTERS
20    DEFINT A-Z
30    GOSUB 2630      'TITLE SCREEN
40    GOSUB 3440      'OPEN FILES
50 'GET REPLY
60    GOSUB 2800      'PRINT MENU
70    GOSUB 4090      'GET REPLY
80    IF REPLY$ = "9" THEN GOTO 2290
90    IF REPLY$ = "1" THEN GOSUB 130 'CREATE A PLAYER
100    IF REPLY$ = "2" THEN GOSUB 4150 'LIST A PLAYER
110    IF REPLY$ = "3" THEN GOSUB 2330 'KILL A PLAYER
120    GOTO 50
130 'CREATE A PLAYER
140    CLS
150    GOSUB 1480      'GET NEXT AVAILABLE PLAYER
160    GOSUB 300      'GET CHARACTER ABILITIES
170    GOSUB 1180      'PRINT ABILITIES
180    GOSUB 680      'GET CLASS OF CHARACTER
190    CLS
200    GOSUB 1640      'ADJUST ABILITIES
210    GOSUB 2970      'GET HIT POINTS
220    GOSUB 3220      'GET MONEY
230    GOSUB 3330      'GET CHARACTER NAME
240    GOSUB 3740      'GET ALIGNMENT
250    GOSUB 3890      'GET SAVING THROWS
260    GOSUB 4820      'GET ARMOR CLASS ADJUSTMENT
270    GOSUB 3510      'UPDATE PLAYER RECORD
280 RETURN
290 '
300 'GET CHARACTER ABILITIES
310    RANDOMIZE TIMER
320    LET STRENGTH = INT(RND * 6) + 1
330    LET STRENGTH = STRENGTH + INT(RND * 6) + 1
340    LET STRENGTH = STRENGTH + INT(RND * 6) + 1
350    RANDOMIZE TIMER
360    LET INTELLIGENCE = INT(RND * 6) + 1
370    LET INTELLIGENCE = INTELLIGENCE  + INT(RND * 6) + 1
380    LET INTELLIGENCE = INTELLIGENCE  + INT(RND * 6) + 1
390    RANDOMIZE TIMER
400    LET WISDOM = INT(RND * 6) + 1
410    LET WISDOM = WISDOM + INT(RND * 6) + 1
420    LET WISDOM = WISDOM  + INT(RND * 6) + 1
430    RANDOMIZE TIMER
440    LET DEXTERITY = INT(RND * 6) + 1
450    LET DEXTERITY = DEXTERITY + INT(RND * 6) + 1
460    LET DEXTERITY = DEXTERITY + INT(RND * 6) + 1
470    RANDOMIZE TIMER
480    LET CONSTITUTION = INT(RND * 6) + 1
490    LET CONSTITUTION = CONSTITUTION + INT(RND * 6) + 1
500    LET CONSTITUTION = CONSTITUTION + INT(RND * 6) + 1
510    RANDOMIZE TIMER
520    LET CHARISMA = INT(RND * 6) + 1
530    LET CHARISMA = CHARISMA + INT(RND * 6) + 1
540    LET CHARISMA = CHARISMA + INT(RND * 6) + 1
550 'CHECK FOR LOOSER
560    LET VERY.LOW = 0
570    IF STRENGTH < 7 THEN LET VERY.LOW = VERY.LOW + 1
580    IF INTELLIGENCE < 7 THEN LET VERY.LOW = VERY.LOW + 1
590    IF WISDOM < 7 THEN LET VERY.LOW = VERY.LOW + 1
600    IF DEXTERITY < 7 THEN LET VERY.LOW = VERY.LOW + 1
610    IF CONSTITUTION < 7 THEN LET VERY.LOW = VERY.LOW + 1
620    IF CHARISMA < 7 THEN LET VERY.LOW = VERY.LOW + 1
630    IF VERY.LOW > 1 THEN GOTO 310
640    LET TOT.SCORE = STRENGTH + INTELLIGENCE + WISDOM + DEXTERITY                      + CONSTITUTION + CHARISMA
650    IF TOT.SCORE < 54 THEN GOTO 300
660 RETURN
670 '
680 'GET CLASS CHOICE
690    GOSUB 1350      'PRINT CHOICES
700 ' FIND HIGHEST SCORES
710    LET HISCORE$ = "STRENGTH"
720    LET HISCORE = STRENGTH
730    LET REC1$ = ""
740    LET REC2$ = ""
750    IF INTELLIGENCE > HISCORE THEN LET HISCORE = INTELLIGENCE:                        LET HISCORE$ = "INTELLIGENCE"
760    IF WISDOM > HISCORE THEN LET HISCORE = WISDOM:                                    LET HISCORE$ = "WISDOM"
770    IF DEXTERITY > HISCORE THEN LET HISCORE = DEXTERITY:                              LET HISCORE$ = "DEXTERITY"
780    IF HISCORE$ <> "STRENGTH" THEN LET  NEXTHI$ = "STRENGTH"                         ELSE LET NEXTHI$ = ""
790    IF HISCORE$ <> "STRENGTH" THEN LET NEXTHI = STRENGTH                              ELSE LET NEXTHI = 0
800    IF (INTELLIGENCE > NEXTHI) AND (HISCORE$ <> "INTELLIGENCE")                        THEN LET NEXTHI = INTELLIGENCE:                                                 LET NEXTHI$ = "INTELLIGENCE"
810    IF (WISDOM > NEXTHI) AND (HISCORE$ <> "WISDOM")                                    THEN LET NEXTHI = WISDOM:                                                       LET NEXTHI$ = "WISDOM"
820    IF (DEXTERITY > NEXTHI) AND (HISCORE$ <> "DEXTERITY")                              THEN LET NEXTHI = DEXTERITY:                                                    LET NEXTHI$ = "DEXTERITY"
830  'GET 1ST RECOMMENDATION
840    IF (STRENGTH > 12 AND INTELLIGENCE > 12) AND (INTELLIGENCE > DEXTERITY)             THEN LET REC1$ = "ELF":                                                         GOTO 920
850    IF (STRENGTH > 12 AND DEXTERITY > 12) THEN LET REC1$ = "HALFLING":                  GOTO 920
860    IF (HISCORE$ = "STRENGTH" OR NEXTHI$ = "STRENGTH") AND (HISCORE$ = "DEXTERITY" OR NEXTHI$ = "DEXTERITY") THEN LET REC1$ = "HALFLING":                       GOTO  920
870    IF (HISCORE$ = "STRENGTH" OR NEXTHI$ = "STRENGTH") AND (HISCORE$ = "INTELLIGENCE" OR NEXTHI$ = "INTELLIGENCE") THEN LET REC1$ = "ELF":                       GOTO  920
880    IF HISCORE$ = "INTELLIGENCE" THEN LET REC1$ = "MAGIC-USER":                        LET HISCORE  = 0:                                                               GOTO 920
890    IF HISCORE$ = "WISDOM" THEN LET REC1$ = "CLERIC":                                  LET HISCORE = 0:                                                                GOTO 920
900    IF HISCORE$ = "DEXTERITY" THEN LET REC1$ = "THIEF":                                LET HISCORE = 0:                                                               GOTO 920
910    IF HISCORE$ = "STRENGTH" THEN LET REC1$ = "DWARF":                               LET REC2$ = "FIGHTER":                                                          GOTO 980
920  'GET SECOND RECOMMENDATION
930    IF NEXTHI > HISCORE THEN LET NEXTHI = HISCORE:                                    LET HISCORE$ = NEXTHI$
940    IF HISCORE$ = "INTELLIGENCE" THEN LET REC2$ = "MAGIC-USER":                        GOTO 980
950    IF HISCORE$ = "WISDOM" THEN LET REC2$ = "CLERIC":                                 GOTO 980
960    IF HISCORE$ = "DEXTERITY" THEN LET REC2$ = "THIEF":                                GOTO 980
970    IF NEXTHI$ = "STRENGTH" THEN LET REC2$ = "DWARF":                               IF REC1$ = "" THEN LET REC2$ = "FIGHTER"
980  'PRINT RECOMMENDATIONS
990    IF REC1$ = "" THEN LET REC2$ = REC1$:                                             LET REC2$ = ""
1000    PRINT
1010    PRINT "I RECOMMEND ";REC1$;
1020    IF (REC2$ <> "") AND (REC2$ <> REC1$) THEN PRINT " OR ";REC2$
1030    LET COL = POS(0)
1040    LET ROW = CSRLIN
1050    INPUT CLASS$
1060    IF LEFT$(CLASS$,1)="C" THEN CLASS$="CLERIC": GOTO 1160
1070    IF LEFT$(CLASS$,1)="D" THEN CLASS$="DWARF": GOTO 1160
1080    IF LEFT$(CLASS$,1)="E" THEN CLASS$="ELF": GOTO 1160
1090    IF LEFT$(CLASS$,1)="F" THEN CLASS$="FIGHTER": GOTO 1160
1100    IF LEFT$(CLASS$,1)="H" THEN CLASS$="HALFLING": GOTO 1160
1110    IF LEFT$(CLASS$,1)="M" THEN CLASS$="MAGIC-USER": GOTO 1160
1120    IF LEFT$(CLASS$,1)="T" THEN CLASS$="THIEF": GOTO 1160
1130    PRINT "WHAT?"
1140    LOCATE ROW,COL
1150    GOTO 1030
1160  RETURN
1170 '
1180 'PRINT SCORES
1190    LOCATE 1,10
1200    PRINT "PLAYER ABILITIES"
1210    LOCATE 2,10
1220    PRINT "STRENGTH     ";STRENGTH
1230    LOCATE 3,10
1240    PRINT "INTELLIGENCE ";INTELLIGENCE
1250    LOCATE 4,10
1260    PRINT "WISDOM       ";WISDOM
1270    LOCATE 5,10
1280    PRINT "DEXTERITY    ";DEXTERITY
1290    LOCATE 6,10
1300    PRINT "CONSTITUTION ";CONSTITUTION
1310    LOCATE 7,10
1320    PRINT "CHARISMA     ";CHARISMA
1330 RETURN
1340 '
1350 'PRINT CHOICES
1360    LOCATE 10,5
1370    PRINT "CHOOSE A CLASS FOR YOUR CHARACTER"
1380    PRINT
1390    PRINT "             CLERIC"
1400    PRINT "             DWARF"
1410    PRINT "             ELF"
1420    PRINT "             FIGHTER"
1430    PRINT "             HALFLING"
1440    PRINT "             MAGIC-USER"
1450    PRINT "             THIEF"
1460 RETURN
1470 '
1480 'GET NEXT AVAILABLE PLAYER
1490    LET RNO = 0
1500  'GET A PLAYER RECORD
1510    LET RNO = RNO + 1
1520    IF RNO > 10 THEN                                                                  PRINT "NO MORE AVAILABLE PLAYERS ":                                             STOP
1530    GET #1,RNO
1540    IF NM$ <> SPACE$(24) THEN GOTO 1500
1550    PRINT
1560    PRINT "       YOUR PLAYER NUMBER IS ";RNO
1570    PRINT
1580    PRINT "        HIT ANY KEY TO CONTINUE"
1590    PRINT
1600    GOSUB 4090      WAIT
1610    CLS
1620 RETURN
1630 '
1640 'ADJUST ABILITIES
1650    CLS
1660    GOSUB 1170      'PRINT ABILITIES
1670    PRINT
1680    PRINT "YOUR CHARACTER'S CLASS IS ";CLASS$
1690    PRINT
1700    LET MSG$ = "YOU MAY ADJUST "
1710    IF (CLASS$ = "MAGIC-USER") THEN LET MSG$ = MSG$ + "INTELLIGENCE "
1720    IF (CLASS$ = "CLERIC") THEN LET MSG$ = MSG$ + "WISDOM "
1730    IF (CLASS$ = "FIGHTER") OR (CLASS$ = "DWARF") THEN                                    LET MSG$ = MSG$ + "STRENGTH "
1740    IF (CLASS$ = "HALFLING") THEN                                                           LET MSG$ = MSG$ + "STRENGTH OR DEXTERITY "
1750    IF (CLASS$ = "THIEF") THEN                                                           LET MSG$ = MSG$ + "DEXTERITY "
1760    IF (CLASS$ = "ELF") THEN                                                           LET MSG$ = MSG$ + "STRENGTH OR INTELLIGENCE "
1770    LET MSG$ = MSG$ + "ONE POINT BY"
1780    LET MSG1$ = "LOWERING "
1790    IF ((CLASS$  = "MAGIC-USER") OR (CLASS$ = "CLERIC"))                              AND STRENGTH > 10                                                               THEN LET MSG1$ = MSG1$ + "STRENGTH "
1800    IF ((CLASS$  = "FIGHTER") OR (CLASS$ = "DWARF") OR (CLASS$ = "HALFLING")          OR  (CLASS$ = "THIEF") OR (CLASS$ = "CLERIC"))   AND INTELLIGENCE > 10                  THEN LET MSG1$ = MSG1$ + "INTELLIGENCE "
1810    IF ((CLASS$  = "FIGHTER") OR (CLASS$ = "DWARF") OR (CLASS$ = "HALFLING")OR  (CLASS$ = "THIEF") OR (CLASS$ = "MAGIC-USER") OR (CLASS$ = "ELF"))           AND WISDOM > 10  THEN LET MSG1$ = MSG1$ + "WISDOM "
1820    IF MSG1$ = "LOWERING " THEN PRINT  "YOU CANNOT ADJUST ANY ABILITY":              PRINT  "HIT ENTER TO CONTINUE":                                                GOTO 1910
1830    LET MSG1$ = MSG1$ + " TWO POINTS"
1840    PRINT MSG$
1850    PRINT MSG1$
1860    PRINT
1870    PRINT "     IF YOU WISH TO RAISE AN ABILITY,   ENTER  THE ABILITY."
1880    PRINT
1890    PRINT "     IF YOU DON'T WANT TO ADJUST ANY    ABILITIES, JUST PRESS ENTER."
1900    LOCATE 21,1
1910    PRINT "                        "
1920    LOCATE 21,1
1930    INPUT ADJ.ABILITY$
1940    IF ADJ.ABILITY$ = "" THEN GOTO 2280
1950    IF LEFT$(ADJ.ABILITY$,1)="S" THEN ADJ.ABILITY$="STRENGTH": GOTO 1990
1960    IF LEFT$(ADJ.ABILITY$,1)="I" THEN ADJ.ABILITY$="INTELLIGENCE": GOTO 1990
1970    IF LEFT$(ADJ.ABILITY$,1)="W" THEN ADJ.ABILITY$="WISDOM": GOTO 1990
1980    IF LEFT$(ADJ.ABILITY$,1)="D" THEN ADJ.ABILITY$="DEXTERITY": GOTO 1990
1990    IF (ADJ.ABILITY$ <> "STRENGTH") AND  (ADJ.ABILITY$ <> "INTELLIGENCE") AND  (ADJ.ABILITY$ <> "WISDOM") AND (ADJ.ABILITY$ <> "DEXTERITY") THEN GOTO 1900
2000    LOCATE 22,1
2010    PRINT "WHAT ABILITY DO YOU WANT TO LOWER "
2020    PRINT "                        "
2030    LOCATE 23,1
2040    INPUT " ";LOW.ABILITY$
2050    IF LEFT$(LOW.ABILITY$,1)="S" THEN LOW.ABILITY$="STRENGTH": GOTO 2090
2060    IF LEFT$(LOW.ABILITY$,1)="I" THEN LOW.ABILITY$="INTELLIGENCE": GOTO 2090
2070    IF LEFT$(LOW.ABILITY$,1)="W" THEN LOW.ABILITY$="WISDOM": GOTO 2090
2080    IF LOW.ABILITY$ = ADJ.ABILITY$ THEN GOTO 1900
2090    IF (LOW.ABILITY$ <> "STRENGTH") AND  (LOW.ABILITY$ <> "INTELLIGENCE")             AND  (LOW.ABILITY$ <> "WISDOM")  THEN GOTO 2000
2100    IF (LOW.ABILITY$ = "STRENGTH") AND (STRENGTH < 11) THEN GOTO 2200
2110    IF (LOW.ABILITY$ = "WISDOM") AND (WISDOM < 11) THEN GOTO 2200
2120    IF (LOW.ABILITY$ = "INTELLIGENCE")                                                 THEN LET INTELLIGENCE = INTELLIGENCE - 2
2130    IF (LOW.ABILITY$ = "STRENGTH")                                                     THEN LET STRENGTH = STRENGTH - 2
2140    IF (LOW.ABILITY$ = "WISDOM")                                                       THEN LET WISDOM = WISDOM - 2
2150    IF (ADJ.ABILITY$ = "INTELLIGENCE")                                                 THEN LET INTELLIGENCE = INTELLIGENCE + 1
2160    IF (ADJ.ABILITY$ = "STRENGTH")                                                    THEN LET STRENGTH = STRENGTH + 1
2170    IF (ADJ.ABILITY$ = "DEXTERITY")                                                   THEN LET DEXTERITY  = DEXTERITY + 1
2180    IF (ADJ.ABILITY$ = "WISDOM")                                                      THEN LET WISDOM  = WISDOM + 1
2190    GOTO 1640
2200 'CANT ADJUST
2210    CLS
2220    PRINT "YOU CAN'T LOWER THAT ABILITY"
2230    PRINT "HIT ANY KEY TO CONTINUE"
2240    GOSUB 4090      WAIT
2250    CLS
2260    GOSUB 1180
2270    GOTO 1640
2280 RETURN
2290 'END
2300    CLOSE
2310     CHAIN "MENU",1000
2320 '
2330 'KILL A PLAYER
2340    CLS
2350    PRINT "      KILL A PLAYER CHARACTER"
2360    PRINT
2370    PRINT "IF YOU KNOW THE PLAYER NUMBER, ENTER IT, OTHERWISE ENTER 0"
2380    INPUT RNO
2390    IF RNO < 0 OR RNO > 10 THEN PRINT "WHAT?": GOTO 2370
2400    IF RNO = 0 THEN GOTO 2430       'GET PLAYER NAME
2410    GET #1,RNO
2420    GOTO 2520       'DOUBLE CHECK
2430 'GET PLAYERS NAME
2440    INPUT "ENTER CHARACTER'S NAME ",INNM$
2450    LET SEEKNM$ = SPACE$(24)
2460    LSET SEEKNM$ = INNM$
2470    LET RNO = 0
2480    LET RNO = RNO + 1
2490    IF RNO > 10 THEN PRINT "CHARACTER NAME NOT FOUND":                                GOTO 2370
2500    GET #1,RNO
2510    IF NM$ <> SEEKNM$ THEN GOTO 2480
2520 'DOUBLE CHECK
2530    PRINT "DO YOU WANT TO KILL ";NM$;"?.  ENTER YES OR NO"
2540    INPUT REPLY$
2550    IF LEFT$(REPLY$,1) = "Y" OR LEFT$(REPLY$,1) = "y" THEN GOTO 2570
2560    GOTO 2610
2570 ' KILL THE CHARACTER
2580    LSET NM$ = SPACE$(24)
2590    PUT #1,RNO
2600    GOSUB 4620 'ZERO SUPPLIES
2610 RETURN
2620 '
2630 'TITLE SCREEN
2640      SCREEN 3
2650      KEY OFF
2660      WIDTH 20
2670      COLOR 1,4
2680      CLS
2690      LOCATE 4,1
2700    PRINT "       THE"
2710    LOCATE 7,1
2720    PRINT "      PLAYER"
2730    LOCATE 10,1
2740    PRINT "    CHARACTERS"
2750 'KILL TIME
2760     FOR X = 1 TO 500
2770       NEXT X
2780 RETURN
2790 '
2800 'PRINT MENU
2810     SCREEN 1
2820     WIDTH 40
2830     COLOR 4,1
2840     CLS
2850     LOCATE 3,1
2860     PRINT "         THE PLAYER CHARACTERS"
2870    LOCATE  7,6
2880    PRINT "1. CREATE A NEW PLAYER CHARACTER"
2890    LOCATE 9,6
2900    PRINT "2. LIST A PLAYER CHARACTER"
2910    LOCATE 11,6
2920    PRINT "3. KILL A PLAYER CHARACTER"
2930    LOCATE 13,6
2940    PRINT "9. END "
2950 RETURN
2960 '
2970 'GET HIT POINTS
2980    CLS
2990    PRINT "            HIT POINTS"
3000    PRINT
3010    PRINT
3020    IF CLASS$ = "CLERIC" THEN LET DICE = 6
3030    IF CLASS$ = "DWARF" THEN LET DICE = 8
3040    IF CLASS$ = "ELF" THEN LET DICE = 6
3050    IF CLASS$ = "FIGHTER" THEN LET DICE = 8
3060    IF CLASS$ = "HALFLING" THEN LET DICE = 6
3070    IF CLASS$ = "MAGIC-USER" THEN LET DICE = 4
3080    IF CLASS$ = "THIEF" THEN LET DICE = 4
3090    LET HIT.POINTS = INT(DICE * RND) + 1
3100    IF HIT.POINTS < 3 THEN GOTO 3090
3110    IF CONSTITUTION < 4 THEN LET HIT.POINTS = HIT.POINTS - 3:                         GOTO 3180
3120    IF CONSTITUTION < 6 THEN LET HIT.POINTS = HIT.POINTS - 2:                          GOTO 3180
3130    IF CONSTITUTION < 9 THEN LET HIT.POINTS = HIT.POINTS - 1:                         GOTO 3180
3140    IF CONSTITUTION < 13 THEN  GOTO 3180
3150    IF CONSTITUTION < 16 THEN LET HIT.POINTS = HIT.POINTS +1:                          GOTO 3180
3160    IF CONSTITUTION < 18 THEN LET HIT.POINTS = HIT.POINTS +2:                          GOTO 3180
3170    LET HIT.POINTS = HIT.POINTS +3
3180    IF HIT.POINTS < 3 THEN GOTO 3090
3190    PRINT "YOUR HIT POINTS ARE  ";HIT.POINTS
3200 RETURN
3210 '
3220 'GET MONEY
3230    LET MONEY! = 0
3240    RANDOMIZE TIMER
3250    LET MONEY! = INT(RND * 6) + 1
3260    LET MONEY! = MONEY! + INT(RND * 6) + 1
3270    LET MONEY! = MONEY! + INT(RND * 6) + 1
3280    LET MONEY! = MONEY! * 10
3290    PRINT
3300    PRINT "YOU HAVE ";MONEY!;" GOLD PIECES
3310 RETURN
3320 '
3330 'GET NAME FOR CHARACTER
3340    PRINT
3350    PRINT "CHOOSE A NAME FOR YOUR CHARACTER"
3360    PRINT
3370    LET COL = POS(0)
3380    LET ROW = CSRLIN
3390    PRINT "........................"
3400    LOCATE ROW,COL
3410    INPUT CHAR.NAME$
3420 RETURN
3430 '
3440 'OPEN FILES
3450      OPEN "DUNCHAR" AS #1 LEN = 122
3460      FIELD #1,2 AS STRN$,2 AS INTL$,2 AS WIS$,2 AS DEX$,2 AS CON$,2 AS CHA$,10 AS CLAS$,2 AS HIT$,4 AS MONEY$,2 AS LVL$,2 AS ARM$,2 AS SV.POISON$,2 AS SV.MAGIC$,2 AS SV.STONE$,2 AS SV.DRAG$,2 AS SV.SPELL$,4 AS EXPR$,24 AS NM$,7 AS ALIGN$,45 AS D$ ''
3470    OPEN "DUNSHOP" AS #2 LEN=44
3480    FIELD #2,2 AS SID$,1 AS SCLASS$,15 AS SNAME$,2 AS SCOST$,2 AS SDAM$,2 AS SWT$,2 AS P1$,2 AS P2$,2 AS P3$,2 AS P4$,2 AS P5$,2 AS P6$,2 AS P7$,2 AS P8$,2 AS P9$,2 AS P10$
3490 RETURN
3500 '
3510 'UPDATE PLAYER RECORD
3520    LSET STRN$ = MKI$(STRENGTH)
3530    LSET INTL$ = MKI$(INTELLIGENCE)
3540    LSET WIS$ = MKI$(WISDOM)
3550    LSET DEX$ = MKI$(DEXTERITY)
3560    LSET CON$ = MKI$(CONSTITUTION)
3570    LSET CHA$ = MKI$(CHARISMA)
3580    LSET CLAS$ = CLASS$
3590    LSET HIT$ = MKI$(HIT.POINTS)
3600    LSET MONEY$ = MKS$(MONEY!)
3610    LSET LVL$ = MKI$(1)
3620    LSET ARM$ = MKI$(ARMOR.CLASS)
3630    LSET SV.POISON$ = MKI$(SV.POISON)
3640    LSET SV.MAGIC$ = MKI$(SV.MAGIC)
3650    LSET SV.STONE$ = MKI$(SV.STONE)
3660    LSET SV.DRAG$ = MKI$(SV.DRAGON)
3670    LSET SV.SPELL$ = MKI$(SV.SPELL)
3680    LSET EXPR$ = MKS$(0)
3690    LSET NM$ = CHAR.NAME$
3700    LSET ALIGN$ = ALIGNMENT$
3710    PUT #1,RNO
3720 RETURN
3730 '
3740 'GET ALIGNMENT
3750    CLS
3760    PRINT "          CHARACTER ALIGNMENT"
3770    PRINT
3780    PRINT "             LAWFUL"
3790    PRINT "             CHAOTIC"
3800    PRINT "             NEUTRAL"
3810    PRINT
3820    INPUT " ENTER YOUR CHOICE ",ALIGNMENT$
3830    IF LEFT$(ALIGNMENT$,1)="L" THEN ALIGNMENT$="LAWFUL": GOTO 3860
3840    IF LEFT$(ALIGNMENT$,1)="C" THEN ALIGNMENT$="CHAOTIC": GOTO 3860
3850    IF LEFT$(ALIGNMENT$,1)="N" THEN ALIGNMENT$="NEUTRAL": GOTO 3860
3860    IF (ALIGNMENT$ <> "LAWFUL") AND (ALIGNMENT$ <> "CHAOTIC") AND                      (ALIGNMENT$ <> "NEUTRAL")                                                       THEN PRINT "WHAT?": GOTO 3810
3870 RETURN
3880 '
3890 'GET SAVING THROWS
3900    IF CLASS$ = "CLERIC" THEN                                                          LET SV.POISON = 11: LET SV.MAGIC = 12:                                          LET SV.STONE = 14: LET SV.DRAGON = 16: LET SV.SPELL = 15
3910    IF CLASS$ = "DWARF" OR CLASS$ = "HALFLING"  THEN                                   LET SV.POISON = 10: LET SV.MAGIC = 11:                                          LET SV.STONE = 12: LET SV.DRAGON = 13: LET SV.SPELL = 14
3920    IF CLASS$ = "ELF" THEN                                                             LET SV.POISON = 12: LET SV.MAGIC = 13:                                          LET SV.STONE = 13: LET SV.DRAGON = 15: LET SV.SPELL = 15
3930    IF CLASS$ = "FIGHTER" THEN                                                         LET SV.POISON = 12: LET SV.MAGIC = 13:                                          LET SV.STONE = 14: LET SV.DRAGON = 15: LET SV.SPELL = 16
3940    IF CLASS$ = "MAGIC-USER" THEN                                                      LET SV.POISON = 13: LET SV.MAGIC = 14:                                          LET SV.STONE = 13: LET SV.DRAGON = 16: LET SV.SPELL = 15
3950    IF CLASS$ = "THIEF" THEN                                                           LET SV.POISON = 13: LET SV.MAGIC = 14:                                          LET SV.STONE = 13: LET SV.DRAGON = 16: LET SV.SPELL = 15
3960    CLS
3970    PRINT "        SAVING THROWS"
3980    PRINT
3990    PRINT "DEATH RAY/POISON          ";SV.POISON
4000    PRINT "MAGIC WANDS               ";SV.MAGIC
4010    PRINT "PARALYSIS/TURN TO STONE   ";SV.STONE
4020    PRINT "DRAGON BREATH             ";SV.DRAGON
4030    PRINT "RODS, STAVES OR SPELLS    ";SV.SPELL
4040    PRINT
4050    PRINT "HIT ANY KEY TO CONTINUE"
4060    GOSUB 4090      'WAIT
4070 RETURN
4080 '
4090 'WAIT FOR A CHARACTER
4100    DEF SEG=0: POKE 1050,PEEK(1052)  'CLEAR KEYBOARD BUFFER
4110    LET REPLY$ = INKEY$
4120    IF REPLY$ = "" THEN GOTO 4110
4130 RETURN
4140    '
4150 'LIST A CHARACTER
4160    CLS
4170    PRINT "      LIST A PLAYER CHARACTER"
4180    PRINT
4190    PRINT "IF YOU KNOW THE PLAYER NUMBER, ENTER IT, OTHERWISE ENTER 0"
4200    INPUT RNO
4210    IF RNO < 0 OR RNO > 10 THEN PRINT "WHAT?": GOTO 4190
4220    IF RNO = 0 THEN GOTO 4250       'GET PLAYER NAME
4230    GET #1,RNO
4240    GOTO 4340       'LIST IT
4250 'GET PLAYERS NAME
4260    INPUT "ENTER CHARACTER'S NAME ",INNM$
4270    LET SEEKNM$ = SPACE$(24)
4280    LSET SEEKNM$ = INNM$
4290    LET RNO = 0
4300    LET RNO = RNO + 1
4310    IF RNO > 10 THEN PRINT "CHARACTER NAME NOT FOUND":                                GOTO 4600
4320    GET #1,RNO
4330    IF NM$ <> SEEKNM$ THEN GOTO 4300
4340 'LIST IT
4350    CLS
4360    PRINT "PLAYER ";RNO;"   ";NM$
4370    PRINT "ALIGNMENT ";ALIGN$
4380    PRINT "CLASS ";CLAS$;"  LEVEL ";CVI(LVL$)
4390    PRINT "ARMOR CLASS  ";CVI(ARM$);"       HIT POINTS ";CVI(HIT$)
4400    PRINT
4410    PRINT "           ABILITIES "
4420    PRINT "STRENGTH    ";CVI(STRN$)
4430    PRINT "INTELLIGENCE";CVI(INTL$)
4440    PRINT "WISDOM      ";CVI(WIS$)
4450    PRINT "DEXTERITY   ";CVI(DEX$)
4460    PRINT "CONSTITUTION";CVI(CON$)
4470    PRINT "CHARAISMA   ";CVI(CHA$)
4480    PRINT
4490    PRINT "         SAVING THROWS "
4500    PRINT "POISON OR DEATH RAY";CVI(SV.POISON$)
4510    PRINT "MAGIC WAND         ";CVI(SV.MAGIC$)
4520    PRINT "TURN TO STONE      "
4530    PRINT "    /PARALYSIS     ";CVI(SV.STONE$)
4540    PRINT "DRAGON BREATH      ";CVI(SV.DRAG$)
4550    PRINT "SPELLS/MAGIC STAFF ";CVI(SV.MAGIC$)
4560    PRINT
4570    PRINT "EXPERIENCE ";CVS(EXPR$);" MONEY ";CVS(MONEY$)
4580    PRINT "HIT ANY KEY TO CONTINUE"
4590    GOSUB  4090     'WAIT
4600 RETURN
4610 '
4620 'ZERO SUPPLIES
4630    LET SNO=0
4640 'GO THRU FILE
4650    SNO=SNO+1
4660    GET #2,SNO
4670    IF SID$ <> "DS" THEN GOTO 4810 ' END OF FILE
4680    ON RNO GOTO 4690,4700,4710,4720,4730,4740,4750,4760,4770,4780
4690    LSET P1$ = MKI$(0): GOTO 4790
4700    LSET P2$ = MKI$(0): GOTO 4790
4710    LSET P3$ = MKI$(0): GOTO 4790
4720    LSET P4$ = MKI$(0): GOTO 4790
4730    LSET P5$ = MKI$(0): GOTO 4790
4740    LSET P6$ = MKI$(0): GOTO 4790
4750    LSET P7$ = MKI$(0): GOTO 4790
4760    LSET P8$ = MKI$(0): GOTO 4790
4770    LSET P9$ = MKI$(0): GOTO 4790
4780    LSET P10$ = MKI$(0): GOTO 4790
4790    PUT #2,SNO
4800    GOTO 4640
4810 RETURN
4820 'GET ARMOR CLASS ADJUSTMENT
4830    IF DEXTERITY < 4 THEN ARMOR.CLASS = -3: GOTO 4900
4840    IF DEXTERITY < 6 THEN ARMOR.CLASS = -2: GOTO 4900
4850    IF DEXTERITY < 9 THEN ARMOR.CLASS = -1: GOTO 4900
4860    IF DEXTERITY < 13 THEN ARMOR.CLASS = 0: GOTO 4900
4870    IF DEXTERITY < 16 THEN ARMOR.CLASS = +1: GOTO 4900
4880    IF DEXTERITY < 18 THEN ARMOR.CLASS = +2: GOTO 4900
4890    ARMOR.CLASS = +3
4900 RETURN
```
{% endraw %}

## DUNEND.BAS

{% raw %}
```bas
10 'DUNEND  -  END THE QUEST AND UPDATE THE FILES
20    DEFINT A-Z
30    P.TOT = 0
40    FOR PX = 1 TO 9
50            IF P.NAME$(PX)="" THEN P.TOT=P.TOT+1: GOTO 70
60            IF P(PX,7) < 3   THEN P.TOT=P.TOT+1
70    NEXT PX
80    IF P.TOT < 9 THEN MSG$="YOU WERE NOT ALL OUT OF THE DUNGEON":                      EXPR!=0: GP!=0: GOSUB 250
90    IF TIMER < SV.TIMER! THEN GOTO 90 'WAIT
100    CLS
110    P.TOT=0
120    FOR P = 1 TO 9
130      IF P.NAME$(P) <> "" THEN P.TOT = P.TOT + 1
140    NEXT
150    IF P.TOT = 0 THEN EARNED.EXPR!=0 ELSE EARNED.EXPR! =  INT(EXPR!/P.TOT)
160    FOR P = 1 TO 9
170      GOSUB 330       'UPDATE THE FILES
180    NEXT P
190    GOSUB 1460       'UPDATE SUPPLIES
200    IF TIMER < SV.TIMER! THEN GOTO 200
210    CLS: PRINT "PLAY AGAIN?"
220    GOSUB 1700
230    IF REPLY$ = "Y" THEN CLS: PRINT "PLEASE STAND BY":  RUN "DUNQUEST"
240    PRINT "CLOSING FILES": CLOSE: CHAIN "MENU",1000
250 'MESSAGE
260    IF TIMER < SV.TIMER! THEN GOTO 260
270    MS$=SPACE$(39)
280    LSET MS$=MSG$
290    LOCATE 25,1
300    PRINT MS$;
310    SV.TIMER!=TIMER+1
320 RETURN
330 ' UPDATE THE FILES
340            IF P.NAME$(P) = "" AND P(P,4) = 0 THEN GOTO 1450 'DIDN'T PLAY
350            GET #1,P
360            PRINT P.NAME$(P)
370            IF P.NAME$(P) = "" THEN LSET NM$ = SPACE$(24): GOTO 1440
380            'PUT AWAY ITEMS THAT WERE IN PLAYERS HANDS
390            S=P(P,8): IF S <> 0 THEN S(S,P+2) = S(S,P+2)+1
400            S=P(P,9): IF S <> 0 THEN S(S,P+2) = S(S,P+2)+1
410 '      UPDATE EXPERIENCE POINTS
420       BONUS!=0
430       IF CLAS$="CLERIC    " THEN PRIME=CVI(WIS$)
440       IF CLAS$="DWARF     " THEN PRIME=CVI(STRN$)
450       IF CLAS$="ELF       " THEN PRIME=INT((CVI(STRN$)+CVI(INTL$))/2)
460       IF CLAS$="FIGHTER   " THEN PRIME=CVI(STRN$)
470       IF CLAS$="HALFLING  " THEN PRIME=INT((CVI(STRN$)+CVI(DEX$))/2)
480       IF CLAS$="MAGIC-USER" THEN PRIME=CVI(INTL$)
490       IF CLAS$="THIEF     " THEN PRIME=CVI(DEX$)
500       WK=INT((PRIME-2)/3)
510       BONUS!=(WK-3)*.1
520       BONUS!=BONUS!*EARNED.EXPR!
530       EXPR!=INT(EARNED.EXPR!+BONUS!)
540      PRINT "YOU EARNED ";EXPR!;" EXPERIENCE POINTS"
550            LSET EXPR$ = MKS$(CVS(EXPR$) + EXPR!)
560 '     CHECK IF PROMOTED
570            ZZ=CVI(LVL$)
580            IF ZZ=1 THEN WK!=500: GOTO 610
590            WK!=2000
600            FOR MX = 2 TO ZZ: WK!=WK!+WK!: NEXT
610            IF CVS(EXPR$) < WK! THEN GOTO 1330
620            IF CVI(LVL$)=9 THEN GOTO 650
630            IF ZZ=6 AND P.CLASS$="ELF       " THEN GOTO 1250
640            GOTO 730 'PROMOTED
650 '   CHECK FOR TERMINATION OF PLAYER
660     ROLL = INT(RND*5)+1
670     IF ROLL <> 5 THEN GOTO 1250
680     MSG$="THE VALKYRIES HAVE CHOSEN " + P.NAME$(P)
690     IF CLAS$="ELF       " THEN MSG$=P.NAME$(P)+" HAS GONE TO THE GREY HAVENS"
700     IF CLAS$="CLERIC    " THEN MSG$="THE GODS HAVE CALLED " + P.NAME$(P)
705     GOSUB 250 'PRINT MSG
710     P.NAME$=(P)="": LSET NM$= SPACE$(24):
720     GOTO 1440
730 '     PROMOTED
740            PRINT "CONGRADULATIONS ";P.NAME$(P)
750            LSET LVL$ = MKI$(CVI(LVL$)+1)
760           IF CVI(LVL$)=3 OR CVI(LVL$)=6 OR CVI(LVL$)=9 THEN GOTO 770                      ELSE GOTO 810
770            IF CVI(SV.POISON$) > 2 THEN                                                        LSET SV.POISON$=MKI$(CVI(SV.POISON$)-2):
780            IF CVI(SV.STONE$) > 2 THEN                                                        LSET SV.STONE$=MKI$(CVI(SV.STONE$)-2):
790            IF CVI(SV.DRAG$) > 2 THEN                                                          LSET SV.DRAG$=MKI$(CVI(SV.DRAG$)-2):
800            IF CVI(SV.MAGIC$) > 2 THEN                                                          LSET SV.MAGIC$=MKI$(CVI(SV.MAGIC$)-2):
810     'GET TITLE
820     IF CLAS$ = "MAGIC-USER" THEN GOTO 940
830     IF CLAS$ = "THIEF     " THEN GOTO 1040
840     IF CLAS$ = "CLERIC    " THEN GOTO 1140
850             IF CVI(LVL$)=2 THEN MSG$="LEGIONNAIRE "+CLAS$
860             IF CVI(LVL$)=3 THEN MSG$="VETERAN "+CLAS$
870             IF CVI(LVL$)=4 THEN MSG$="WARRIOR "+CLAS$
880             IF CVI(LVL$)=5 THEN MSG$="HERO "+CLAS$
890             IF CVI(LVL$)=6 THEN MSG$="SWORDMASTER "+CLAS$
900             IF CVI(LVL$)=7 THEN MSG$="CHAMPION "+CLAS$
910             IF CVI(LVL$)=8 THEN MSG$="GRANDMASTER "+CLAS$
920             IF CVI(LVL$)=9 THEN MSG$="LORD "+CLAS$
930             GOTO 1240
940 '    MAGIC USERS TITLES
950             IF CVI(LVL$)=2 THEN MSG$="MEDIUM "
960             IF CVI(LVL$)=3 THEN MSG$="SEER "
970             IF CVI(LVL$)=4 THEN MSG$="CONJUROR "
980             IF CVI(LVL$)=5 THEN MSG$="ENCHANTER "
990             IF CVI(LVL$)=6 THEN MSG$="WARLOCK/WITCH "
1000             IF CVI(LVL$)=7 THEN MSG$="SORCEROR "
1010             IF CVI(LVL$)=8 THEN MSG$="NECROMANCER "
1020             IF CVI(LVL$)=9 THEN MSG$="WIZARD "
1030             GOTO 1240
1040 '    THIEVES TITLES
1050             IF CVI(LVL$)=2 THEN MSG$="APPRENTICE "
1060             IF CVI(LVL$)=3 THEN MSG$="FOOTPAD "
1070             IF CVI(LVL$)=4 THEN MSG$="ROBBER  "
1080             IF CVI(LVL$)=5 THEN MSG$="BURGLAR "
1090             IF CVI(LVL$)=6 THEN MSG$="CUTPURSE "
1100             IF CVI(LVL$)=7 THEN MSG$="SHARPER "
1110             IF CVI(LVL$)=8 THEN MSG$="MASTER THIEF "
1120             IF CVI(LVL$)=9 THEN MSG$="GRANDMASTER THIEF "
1130             GOTO 1240
1140 '    CLERICS TITLES
1150             IF CVI(LVL$)=2 THEN MSG$="ACOLYTE  "
1160             IF CVI(LVL$)=3 THEN MSG$="ADEPT "
1170             IF CVI(LVL$)=4 THEN MSG$="PRIEST/PRIESTESS "
1180             IF CVI(LVL$)=5 THEN MSG$="VICAR "
1190             IF CVI(LVL$)=6 THEN MSG$="CURATE "
1200             IF CVI(LVL$)=7 THEN MSG$="ELDER "
1210             IF CVI(LVL$)=8 THEN MSG$="BISHOP "
1220             IF CVI(LVL$)=9 THEN MSG$="HIGH PRIEST/PRIESTESS "
1230             GOTO 1240
1240     PRINT "YOU ARE PROMOTED TO ";MSG$;" ";" LEVEL ";CVI(LVL$)
1250            IF P.CLASS$(P) = "CLERIC    " THEN WK=6
1260            IF P.CLASS$(P) = "DWARF     " THEN WK=8
1270            IF P.CLASS$(P) = "ELF       " THEN WK=6
1280            IF P.CLASS$(P) = "FIGHTER   " THEN WK=8
1290            IF P.CLASS$(P) = "HALFLING  " THEN WK=6
1300            IF P.CLASS$(P) = "MAGIC-USER" THEN WK=4
1310            IF P.CLASS$(P) = "THIEF     " THEN WK=4
1320            LSET HIT$=MKI$((CVI(HIT$))+INT(RND*WK)+1)
1330     'UPDATE MONEY
1340     MONEY!=INT(GP!/P.TOT)
1350     PRINT "YOU ACQUIRED ";MONEY!;" GOLD PIECES "
1360     IF (CLAS$ = "MAGIC-USER" OR CLAS$ = "ELF       ") THEN MAX! = 3                  ELSE LET MAX = 9
1370     MIN = 1
1380     TAX!=INT(RND*MAX)+MIN
1390     TAX!=TAX!/10
1400     TAX!=INT(TAX!*MONEY!)
1410     IF CLAS$="CLERIC    " THEN PRINT "YOU DONATE ";TAX!;" TO THE GODS"                ELSE PRINT "LOCAL AUTHORITIES TAX YOU ";TAX!
1420     MONEY!=MONEY!-TAX!
1430            LSET MONEY$=MKS$(CVS(MONEY$)+MONEY!)
1440            PUT #1,P
1450 RETURN
1460 'UPDATE SUPPLIES
1470    LET S=0
1480    LOCATE 25,1: PRINT "PLEASE STAND BY WHILE FILES ARE UPDATED";
1490 'GO THRU FILE
1500    S=S+1
1510    GET #2,S
1520    IF SID$ <> "DS" THEN GOTO 1690 ' END OF FILE
1530    FOR P = 1 TO 9
1540            IF P.NAME$(P) = "" AND P(P,4) = 0 THEN GOTO 1660
1550            IF P.NAME$(P) = "" THEN S(S,P+2) = 0
1560        ON P   GOTO 1570,1580,1590,1600,1610,1620,1630,1640,1650
1570        LSET P1$ = MKI$(S(S,P+2)): GOTO 1660
1580        LSET P2$ = MKI$(S(S,P+2)): GOTO 1660
1590        LSET P3$ = MKI$(S(S,P+2)): GOTO 1660
1600        LSET P4$ = MKI$(S(S,P+2)): GOTO 1660
1610        LSET P5$ = MKI$(S(S,P+2)): GOTO 1660
1620        LSET P6$ = MKI$(S(S,P+2)): GOTO 1660
1630        LSET P7$ = MKI$(S(S,P+2)): GOTO 1660
1640        LSET P8$ = MKI$(S(S,P+2)): GOTO 1660
1650        LSET P9$ = MKI$(S(S,P+2)): GOTO 1660
1660    NEXT P
1670    PUT #2,S
1680    GOTO 1490
1690 RETURN
1700 'GET A REPLY
1710    DEF SEG=0: POKE 1050,PEEK(1052) 'CLEAR KEYBOARD BUFFER
1720    REPLY$=INKEY$: IF REPLY$=""  THEN GOTO 1720
1730    IF LEN(REPLY$)=1 THEN GOTO 1790
1740    REPLY$=RIGHT$(REPLY$,1)
1750    IF ASC(REPLY$)=72 THEN REPLY$=CHR$(30): GOTO 1790
1760    IF ASC(REPLY$)=80 THEN REPLY$=CHR$(31): GOTO 1790
1770    IF ASC(REPLY$)=77 THEN REPLY$=CHR$(28): GOTO 1790
1780    IF ASC(REPLY$)=75 THEN REPLY$=CHR$(29)
1790 RETURN
```
{% endraw %}

## DUNMAP.BAS

{% raw %}
```bas
10 'DUNMAP   'DRAW THE DUNGEON MAP
20    DEFINT A-Z
30    DIM S(10,2)
40    SCREEN 3
50    KEY OFF
60    WIDTH 20
70    COLOR 1,4
80    CLS
90    LOCATE 4,1
100    PRINT "       THE"
110    LOCATE 7,1
120    PRINT "       MAP"
130 'KILL TIME
140    SV.TIME! = TIMER + 5
150    IF TIMER < SV.TIME! THEN GOTO 150
160 'PRINT MENU
170    SCREEN 0
180    WIDTH 40
190    COLOR 0,2,2
200    CLS
210    LOCATE 3,1
220    PRINT "           THE MAP"
230    PRINT: PRINT: PRINT:
240    PRINT "WARNING!  THIS PROGRAM WILL ERASE"
245    PRINT "AND REPLACE"
250    PRINT "DUNGEON MAPS REQUIRED FOR PLAY"
260    PRINT "DO YOU WANT TO CONTINUE (Y/N)?"
270    GOSUB 780 'GET REPLY
280    IF REPLY$<>"Y" THEN CHAIN "MENU"
290    INPUT "ENTER MAP NUMBER ",MNO$
300    LET F$="DUNMAP"+MNO$
310    OPEN F$ FOR OUTPUT AS #1
320    PRINT "FIRST DRAW THE ROOM. WHEN FINISHED TYPE E"
330    PRINT "THEN NUMBER THE ROOMS AND TYPE E"
340    PRINT "ALL ROOMS MUST BE RECTANGULAR"
350    PRINT "THERE CAN BE 1-9 ROOMS "
360    PRINT "THE BOTTOM RIGHT MUST BE CLOSED"
370    PRINT "  (WALL OR DOOR)"
380    PRINT "THE ENTRANCE MUST BE ON LEFT SIDE"
390    PRINT "NUMBER ROOMS BY LEVEL OF "
400    PRINT "DIFFICULTY"
410    LOCATE 25,1: PRINT "HIT ANY KEY TO CONTINUE";
420    GOSUB 780 'GET REPLY
430            GOSUB 450
440    GOTO 1020
450 'DRAW THE MAP
460    V=2: H=2
470    C=219
480    CLS
490    LOCATE 25,1: PRINT "W=WALL,D=DOOR,SPACE=ERASE";
500    LOCATE 2,2
510    SV.H=POS(0): SV.V=CSRLIN
520    PRINT CHR$(94);
530    LOCATE 2,2
540 'GET COMMANDS
550    IF REPLY$ = " " OR REPLY$ = "S" OR REPLY$ = "D" OR REPLY$ = "W"                   THEN GOTO 580
560    SV.H=POS(0): SV.V=CSRLIN
570    PRINT CHR$(94);
580    GOSUB 780
590    IF REPLY$ = " " THEN C=32: GOTO 540
600    IF REPLY$ = "D" THEN C=179: GOTO 540
610    IF REPLY$ = "W" THEN C=219: GOTO 540
620    IF REPLY$ = CHR$(30) THEN V=V-1
630    IF REPLY$ = CHR$(31) THEN V=V+1
640    IF REPLY$ = CHR$(28) THEN H=H+1
650    IF REPLY$ = CHR$(29) THEN H=H-1
660    IF H> 38 THEN V=V+1: H=2
670    IF H<2 THEN V=V-1: H=38
680    IF V<2 THEN V=23
690    IF V>23 THEN V=2
700    LOCATE  SV.V,SV.H
710    IF C = 179 AND (REPLY$ = CHR$(28) OR REPLY$ = CHR$(29)) THEN C=196
720    IF REPLY$ = "E" THEN C=32
730    PRINT CHR$(C);
740    LOCATE V,H
750    IF REPLY$ = "E" THEN GOSUB 1070: GOSUB 890: GOTO 770
760    GOTO 540
770 RETURN
780 'GET COMMAND
790    REPLY$ = INKEY$
800    IF REPLY$ = "" THEN GOTO 790
810    IF LEN(REPLY$) = 1 THEN GOTO 880
820    IF LEFT$(REPLY$,1) <> CHR$(0) THEN GOTO 790
830    REPLY$=RIGHT$(REPLY$,1)
840    IF ASC(REPLY$) = 72 THEN REPLY$ = CHR$(30): GOTO 880
850    IF ASC(REPLY$) = 80 THEN REPLY$ = CHR$(31): GOTO 880
860    IF ASC(REPLY$) = 77 THEN REPLY$ = CHR$(28): GOTO 880
870    IF ASC(REPLY$) = 75 THEN REPLY$ = CHR$(29): GOTO 880
880 RETURN
890 'WRITE OUT MAP
900    S=1: CT=1: SV.C=32
910    FOR V=1 TO 24
920      FOR H = 1 TO 40
930         C=SCREEN(V,H)
940         IF C=25 THEN S(S,1) = V: S(S,2) = H:                                              SMAX=S: S=S+1
950         IF C = SV.C THEN CT=CT+1: GOTO 980
960         WRITE #1,CT,SV.C
970         SV.C = C: CT=1
980      NEXT H
990    NEXT V
1000    WRITE #1,CT,SV.C
1010 RETURN
1020 'END OF JOB
1030    CLS
1040    WRITE #1,9999,9999
1050    CLOSE
1060    END
1070 'NUMBER THE ROOMS
1080    LOCATE 25,1
1090    PRINT SPACE$(38);
1100    LOCATE 25,1:
1110    PRINT "ENTER NUMBER AT UPPER LEFT OF EACH ROOM";
1120    LOCATE 1,2
1130    V=1: H=2
1140 'MOVE AND MARK
1150    SV.H = POS(0)
1160    SV.V = CSRLIN
1170    SV.C = SCREEN(SV.V,SV.H)
1180    PRINT CHR$(94)
1190    GOSUB 780
1200    IF REPLY$ > "0" AND REPLY$ < ":"  THEN SV.C = ASC(REPLY$): GOSUB 1370:            H = H+1
1210    IF REPLY$ = CHR$(30) THEN V=V-1
1220    IF REPLY$ = CHR$(31) THEN V=V+1
1230    IF REPLY$ = CHR$(28) THEN H=H+1
1240    IF REPLY$ = CHR$(29) THEN H=H-1
1250    IF H> 39 THEN V=V+1: H=2
1260    IF H<2 THEN V=V-1: H=38
1270    IF V<1 THEN V=24
1280    IF V>24 THEN V=1
1290    LOCATE  SV.V,SV.H
1300    PRINT CHR$(SV.C);
1310    IF REPLY$ = "E" THEN GOTO 1340 'END
1320    LOCATE V,H
1330    GOTO 1140
1340 'END OF ROOMS
1350    WRITE #1,9999
1360 RETURN
1370 'GET CORD OF ROOM
1380    SV.ULV = V: SV.ULH = H
1390     CV=V:CH=H
1400 'FIND RIGHT SIDE
1410    CH=CH+1
1420    IF SCREEN(CV,CH) <> 219 AND SCREEN(CV,CH) <> 179 THEN GOTO 1400      
1430    CH=CH-1
1440 'FIND BOTTOM
1450    CV=CV+1
1460    IF SCREEN(CV,CH) <> 219 AND SCREEN(CV,CH) <> 196 THEN GOTO 1440
1470    CH=CH+2
1480    SV.ULV=SV.ULV-1
1490    WRITE #1,SV.ULV,SV.ULH,CV,CH
1500    LOCATE V,H
1510 RETURN
```
{% endraw %}

## DUNPLAY.BAS

{% raw %}
```bas
10 'DUNPLAY  THE QUEST
20    DEFINT A-Z
30      RANDOMIZE TIMER
40    GOSUB 400 'PLAY A TURN
50    IF LP  = 0 THEN GOSUB 2890
60    GOTO 40
70 'END
80     CLOSE
90     END
100 'GET A MONSTER
110    DEP = R(RX,3)-R(RX,1)
120    WID = R(RX,4)-R(RX,2)
130    SIZ=(DEP-1)*(WID-1)
140    WK.LV =((INT(RX/4)+LV.ADJ)-1)
150    MX = (INT(RND*4)+1)+(4*(WK.LV)): IF MX>40 THEN MX=40
160    WK = MX+60
170    NBR = INT(RND*M.NBR(MX,2))+M.NBR(MX,1)
180    IF NBR > M.NBR(MX,2) THEN NBR=M.NBR(MX,2)
190    IF NBR > SIZ THEN NBR = SIZ-4
200    FOR ZZ = 1 TO NBR
210      V = (INT(RND*DEP)+1)+R(RX,1)
220      H = (INT(RND*WID)+1)+R(RX,2)
230      IF M(V,H) <> 32 GOTO 210
240      ML.MAX=ML.MAX+1: ML(ML.MAX,1)=V: ML(ML.MAX,2)=H
250      ML(ML.MAX,3)=RX: ML(ML.MAX,4)=INT((MX/4)+1)
260      M(V,H) = WK
270      M.H=(H*8)-8: M.V=(V*8)-8: DRAW "C3"
280      DRAW "BM=M.H;,=M.V;": DRAW "BR3;D4;F2;H2;G2"
290      DRAW "BM=M.H;,=M.V;": DRAW "BR3;D2;L2;R4"
300      R(RX,5)=MX: R(RX,6)=1
310    NEXT
320 RETURN
330 'MATCH TO SUPPLY FILE
340    LX=LEN(SK$)
350    FOR S = 1 TO SMAX
360      IF (SK$ = LEFT$(S.NAME$(S),LX)) AND (S(S,P+2) <> 0)                                         THEN FOUND=1: GOTO 390
370    NEXT
380    FOUND = 0: MSG$="YOU DON'T OWN A "+SK$: GOSUB 4460: MSG$="": GOSUB 4460:         GOTO 390
390 RETURN
400 'PLAY A TURN
410    LP=0: ATTACK=2
420    FOR P = 1 TO 9
430            IF P.NAME$(P) = "" THEN GOTO 610
440            LP=LP+1
450            GOSUB 4540 'CHECK PLAYERS LOCATION
460            IF TIMER < SV.TIMER! THEN GOTO 460
470            LOCATE 25,1: PRINT SPACE$(39);: LOCATE 25,1: PRINT P.NAME$(P);
480            DEF SEG=0: POKE(1050),PEEK(1052) 'CLEAR KEYBOARD BUFFER
490            AV=0: OVER.LOAD=0
500            IF P(P,10)<1 GOTO 530
510            P(P,10)=P(P,10)-1
520            IF P(P,10)<1 THEN GOSUB 2740 'THE LIGHTS WENT OUT
530            IF P(P,13)>0 THEN MSG$="YOU ARE RESTING": GOSUB 4460:                            P(P,13) = P(P,13)-1: GOTO 610
540            MV=(4-INT(P(P,1)/400))*ATTACK
550            IF HS>1 THEN MV=MV+MV
560            IF MV<1 THEN MV=1: MSG$="YOU ARE OVERLOADED & CAN'T MOVE":                       GOSUB 4460: OVER.LOAD=1
570            FOR T = 1 TO MV
580                    GOSUB 2470 'PLAY A PLAYERS TURN
590            NEXT T
600            GOSUB 4540 'CHECK PLAYERS LOCATION
610    NEXT P
620    FOR D = 1 TO 3
630            IF D(D,1)=0 THEN GOTO 690
640            V=D(D,2): H=D(D,3)
650            IF M(V,H) <> 32 THEN GOTO 690
660            LOCATE V,H: PRINT CHR$(D(D,1));
670            M(V,H)=D(D,1)
680            D(D,1)=0
690    NEXT D
700    GOSUB 4950 'PLAY MONSTERS
710    IF TE>0 THEN TE=TE-1
720    IF HS>0 THEN HS=HS-1
730 RETURN
740 'SAVE THE CURRENT SCREEN
750     GET (0,0)-(319,199),SV
760 RETURN
770 'RESTORE CURRENT SCREEN
780     PUT (0,0),SV,PSET
790 RETURN
800 'GET A REPLY
810    REPLY$=INKEY$: IF REPLY$=""  THEN GOTO 810
820    IF LEN(REPLY$)=1 THEN GOTO 880
830    REPLY$=RIGHT$(REPLY$,1)
840    IF ASC(REPLY$)=72 THEN REPLY$=CHR$(30): GOTO 880
850    IF ASC(REPLY$)=80 THEN REPLY$=CHR$(31): GOTO 880
860    IF ASC(REPLY$)=77 THEN REPLY$=CHR$(28): GOTO 880
870    IF ASC(REPLY$)=75 THEN REPLY$=CHR$(29)
880 RETURN
890 'HELP SCREEN
900    GOSUB 740 'SAVE CURRENT SCREEN
910    CLS
920    PRINT "        COMMANDS"
930    PRINT "USE THE CURSOR KEYS TO MOVE UP, DOWN,"
940    PRINT "RIGHT OR LEFT ON THE SCREEN"
950    PRINT
960    PRINT "THE FOLLOWING COMMANDS ARE AVAILABLE "
970    PRINT "  A = ATTACK (YOU MUST BE NEXT TO A "
980    PRINT "     MONSTER)"
990    PRINT "  T = THROW AWAY (IT'S GONE FOR GOOD)"
1000    PRINT "  L = LIGHT (TORCH OR LANTERN)
1010    PRINT "  H = HELP (DISPLAY COMMANDS)"
1020    PRINT "  O = OPEN DOOR"
1030    PRINT "  G = GET SOMETHING (FROM ANYWHERE)"
1040    PRINT "  P = PUT (IN PACK, SCABBORD, ETC)"
1050    PRINT "  R = RUN (FROM MONSTERS)
1060    PRINT "  I = INVENTORY (WHAT YOU HAVE)"
1070    PRINT "  Q = QUIT                     "
1080    PRINT "  S = SEARCH (FOR TRAPS ETC)   "
1090    PRINT "  C = CAST A SPELL"
1100    LOCATE 25,1: PRINT "HIT ANY KEY TO CONTINUE";
1110    GOSUB 800 'WAIT
1120    GOSUB 770 'RESTORE CURRENT SCREEN
1130 RETURN
1140 'MOVE
1150    IF OVER.LOAD=1 THEN MSG$="YOU CAN'T MOVE": GOSUB 4460: GOTO 1290
1160    IF ASC(REPLY$)=28 THEN NH=P(P,7)+1: NV=P(P,6)
1170    IF ASC(REPLY$)=29 THEN NH=P(P,7)-1: NV=P(P,6)
1180    IF ASC(REPLY$)=30 THEN NV=P(P,6)-1: NH=P(P,7)
1190    IF ASC(REPLY$)=31 THEN NV=P(P,6)+1: NH=P(P,7)
1200    IF NV < 1 OR NV > 24 OR NH <1 OR NH > 39 THEN BEEP: GOTO 1290
1210    IF M(NV,NH) <> 32 GOTO 1270 'SOMETHING THERE
1220    M(NV,NH)=M(P(P,6),P(P,7)): M(P(P,6),P(P,7)) = 32 'MOVE PLAYER & RESTORE TO BLANK
1230    LOCATE P(P,6),P(P,7): PRINT CHR$(M(P(P,6),P(P,7)))
1240    P(P,6)=NV: P(P,7)=NH
1250    LOCATE P(P,6),P(P,7): PRINT CHR$(M(NV,NH));
1260    GOTO 1290
1270    IF M(NV,NH) <> 0 THEN BEEP: GOTO 1290
1280    GOSUB 3670: GOTO 1220 'A TRAP
1290 RETURN
1300 'LIGHT (TORCH OR LANTERN)
1310    S=P(P,8)
1320    IF S=13 OR S=14 THEN GOTO 1370
1330    S=P(P,9)
1340    IF S=13 OR S=14 THEN GOTO 1370
1350    MSG$="YOU DON'T HAVE TORCH OR LANTERN IN HAND": GOSUB 4460
1360    GOTO 1440
1370    IF S(15,P+2) <> 0 THEN GOTO 1410
1380    MSG$="YOU DON'T HAVE A TINDER BOX": GOSUB 4460
1390    IF P(P,8)=13 OR P(P,8)=14 THEN P(P,8)=0: GOTO 1440    'DUMP IT
1400    IF P(P,9)=13 OR P(P,9)=14 THEN P(P,9)=0: GOTO 1440    'DUMP IT
1410    IF P(P,8)=14 OR P(P,9)=14 THEN P(P,10)=P(P,10)+10: GOTO 1430
1420    IF P(P,8)=13 OR P(P,9)=13 THEN P(P,10)=P(P,10)+40
1430    T=MV+1
1440 RETURN
1450 'GET
1460    LOCATE 25,1: PRINT SPACE$(39);
1470    LOCATE 25,1: PRINT "GET WHAT? ";
1480    GOSUB 7110 'GET REPLY
1490    IF W$="TREASURE"  THEN GOSUB 3210: GOTO 1580
1500    SK$=W$
1510    GOSUB 330
1520    IF FOUND = 0 THEN GOTO 1560
1530    IF P(P,8) = 0 THEN P(P,8) = S: S(S,P+2)=S(S,P+2)-1: MSG$="OK": GOTO 1560
1540    IF P(P,9) = 0 THEN P(P,9) = S: S(S,P+2)=S(S,P+2)-1: MSG$="OK": GOTO 1560
1550    MSG$="YOUR HANDS ARE FULL": GOSUB 4460: GOTO 1580
1560    GOSUB 4460: IF S=4 THEN P(P,5)=P(P,5)+1  'SHIELD
1570    IF S=13 OR S=14 OR S=16 THEN GOSUB 1300 'LIGHT IT
1580 RETURN
1590 'OPEN
1600    IF T <> 1 THEN MSG$="THE DOOR WON'T OPEN": GOSUB 4460: GOTO 1810
1610    IF TO.OPEN = 0 THEN TO.OPEN = INT(RND*6)+1 ELSE TO.OPEN=0
1620    ZZ = INT(RND*6) + ((P(P,2)/3)-3)
1630    IF P.CLASS$(P) = "THIEF     " THEN ZZ=ZZ+P(P,4)
1640    IF ZZ < TO.OPEN THEN MSG$="THE DOOR WON'T OPEN": GOSUB 4460: GOTO 1810
1650    V=P(P,6): H=P(P,7)
1660    LV=V-1: HV=V+1: LH=H-1: HH=H+1
1670    FOR V = LV TO HV
1680      FOR H = LH TO HH
1690            IF M(V,H) <> 179 AND M(V,H) <> 196 THEN GOTO 1780
1700            FOR D=1 TO 3
1710              IF D(D,1)=0 THEN D(D,1)=M(V,H): D(D,2)=V: D(D,3)=H: GOTO 1730
1720            NEXT D
1730           M(V,H)=M(P(P,6),P(P,7)): M(P(P,6),P(P,7)) = 32 'MOVE PLAYER
1740           LOCATE P(P,6),P(P,7): PRINT CHR$(M(P(P,6),P(P,7)))
1750           P(P,6)=V: P(P,7)=H
1760           LOCATE P(P,6),P(P,7): PRINT CHR$(M(V,H));
1770           GOTO 1810
1780      NEXT H
1790    NEXT V
1800    MSG$="YOU ARE NOT BY A DOOR": GOSUB 4460: GOTO 1810
1810    T=MV+1: TO.OPEN=0
1820 RETURN
1830 'THROW AWAY
1840    LOCATE 25,1: PRINT SPACE$(39);
1850    LOCATE 25,1: PRINT "THROW WHAT? ";
1860    GOSUB 7110 'GET REPLY
1870    LX=LEN(W$)
1880 '
1890    FOR S=1 TO SMAX
1900            IF W$ = LEFT$(S.NAME$(S),LX) THEN GOTO 1930
1910    NEXT
1920    MSG$="A WHAT?": GOSUB 4460: GOTO 2030
1930    IF P(P,8) = S THEN P(P,8) = 0: GOTO 1970
1940    IF P(P,9) = S THEN P(P,9) = 0: GOTO 1970
1950    MSG$="IS'S NOT IN YOUR HAND": GOSUB 4460
1960    GOTO 2030
1970    P(P,1) = P(P,1)-S(S,2)
1980    IF S=4 THEN P(P,5)=P(P,5)-1  'SHIELD
1990    IF S=13 THEN P(P,10) = P(P,10)-40
2000    IF S=14 THEN P(P,10) = P(P,10)-10
2010    IF P(P,10) < 1 THEN P(P,10)=0
2020    MSG$="OK IT'S GONE": GOSUB 4460
2030 RETURN
2040 'PUT
2050    LOCATE 25,1: PRINT SPACE$(39);
2060    LOCATE 25,1: PRINT "PUT WHAT? ";
2070    GOSUB 7110 'GET REPLY
2080    LX=LEN(W$)
2090 '
2100    FOR S = 1 TO SMAX
2110            IF W$ = LEFT$(S.NAME$(S),LX) THEN GOTO 2140
2120    NEXT
2130    GOTO 2220
2140    IF P(P,8) = S THEN P(P,8) = 0: S(S,P+2)=S(S,P+2)+1: MSG$="OK":                    GOTO 2170
2150    IF P(P,9) = S THEN P(P,9) = 0: S(S,P+2)=S(S,P+2)+1: MSG$="OK":                    GOTO 2170
2160    MSG$="IS'S NOT IN YOUR HAND": GOSUB 4460: GOTO 2220
2170    GOSUB 4460
2180    IF S=4 THEN P(P,5)=P(P,5)-1 'SHIELD
2190    IF S=13 THEN P(P,10) = P(P,10)-40
2200    IF S=14 THEN P(P,10) = P(P,10)-10
2210    IF P(P,10) < 1 THEN P(P,10)=0
2220 RETURN
2230 'RUN
2240    MSG$=P.NAME$(P)+" IS RUNNING": GOSUB 4460
2250    GOSUB 800: P(P,13)=2
2260    GOSUB 1140: GOSUB 1140: GOSUB 1140 'MOVE 3 TIMES NORMAL RATE
2270 RETURN
2280 'INVENTORY
2290    GOSUB 740 'SAVE CURRENT SCREEN
2300    CLS: ZZ=0
2310    PRINT "          INVENTORY"
2320    PRINT: PRINT "HIT POINTS ";P(P,3);" LIGHT ";P(P,10)
2330    PRINT "WEIGHT YOU ARE CARRYING ";P(P,1)
2340    PRINT
2350    IF P(P,8) = 0 THEN PRINT "YOUR RIGHT HAND IS EMPTY"                               ELSE PRINT "IN YOUR RIGHT HAND IS A ";S.NAME$(P(P,8))
2360    IF P(P,9) = 0 THEN PRINT "YOUR LEFT HAND IS EMPTY"                               ELSE PRINT "IN YOUR LEFT HAND IS A ";S.NAME$(P(P,9))
2370    FOR S = 1 TO SMAX
2380            IF S(S,P+2) = 0 THEN GOTO 2430
2390            PRINT S.NAME$(S);S(S,P+2)
2400            ZZ=CSRLIN: IF ZZ < 23 THEN GOTO 2430
2410            LOCATE 25,1: PRINT "HIT ANY KEY TO CONTINUE";
2420            GOSUB 800: CLS: ZZ=0
2430    NEXT S
2440    LOCATE 25,1: PRINT "HIT ANY KEY TO CONTINUE";: GOSUB 800
2450    GOSUB 770
2460 RETURN
2470  'PLAY A TURN
2480    GOSUB 800 'GET COMMAND
2490    IF REPLY$ <>"A" THEN AV=0
2500    IF REPLY$ = " " THEN GOTO 2650
2510    IF ASC(REPLY$) > 27 AND ASC(REPLY$) < 32 THEN GOSUB 1140: GOTO 2650
2520    IF REPLY$ = "A" THEN GOSUB 3940: GOTO 2650
2530    IF REPLY$ = "C" THEN GOSUB 5870: GOTO 2650
2540    IF REPLY$ = "S" THEN GOSUB 2940: GOTO 2650
2550    IF REPLY$ = "O" THEN GOSUB 1590: GOTO 2650
2560    IF REPLY$ = "G" THEN GOSUB 1450: GOTO 2650
2570    IF REPLY$ = "L" THEN GOSUB 1300: GOTO 2650
2580    IF REPLY$ = "P" THEN GOSUB 2040: GOTO 2650
2590    IF REPLY$ = "R" THEN GOSUB 2230: GOTO 2650
2600    IF REPLY$ = "H" THEN GOSUB 890: GOTO 2650
2610    IF REPLY$ = "I" THEN GOSUB 2280: GOTO 2650
2620    IF REPLY$ = "T" THEN GOSUB 1830: GOTO 2650
2630    IF REPLY$ = "Q" THEN GOSUB 2890: GOTO 2650
2640    GOTO 2470
2650 RETURN
2660 'DRAW THE ROOM
2670    IF R(RX,6) < 1 THEN R(RX,5)=0
2680    IF R(RX,5) <> 0 THEN GOTO 2710
2690    IF WAN.MON <> 6 THEN GOTO 2730
2700    GOSUB 100 'GET A WANDERING MONSTER
2710    SV.MON = R(RX,5)
2720    MSG$=M.NAME$(SV.MON)+"S!": GOSUB 4460
2730 RETURN
2740 'THE LIGHTS WENT OUT
2750    SV.TIMER!=TIMER+1
2760    IF TIMER < SV.TIMER! THEN GOTO 2760
2770    LOCATE 25,1: PRINT SPACE$(38);: LOCATE 25,1: PRINT "YOUR LIGHT WENT OUT";
2780    P.TOT=0
2790    SV.TIMER! = TIMER+2
2800    IF P(P,8)=14 THEN P(P,8)=0
2810    IF P(P,9)=14 THEN P(P,9)=0
2820    IF P(P,8)<>13 AND P(P,9)<>13 THEN GOTO 2870
2830    IF S(16,P+2) = 0 THEN GOTO 2850
2840    S(16,P+2) = S(16,P+2)-1: GOTO 2870
2850    IF P(P,8) = 13 THEN P(P,8)=0
2860    IF P(P,9) = 14 THEN P(P,9)=0
2870    IF TIMER < SV.TIMER! THEN GOTO 2870
2880 RETURN
2890 'QUIT - END GAME
2900    MSG$="YOU WANT TO QUIT? (Y/N)": GOSUB 4460
2910    GOSUB 800
2920    IF REPLY$ <> "Y" THEN RETURN
2930    CHAIN "DUNEND",10,ALL
2940 'SEARCH
2950    IF T <> 1 THEN GOTO 3180
2960    ROLL = INT(RND*6)+1
2970    FOUND = 1
2980    IF P.CLASS$(P) = "DWARF     " THEN FOUND = 2
2990    IF P.CLASS$(P) = "THIEF     " THEN FOUND=FOUND+P(P,4)
3000    IF FT<>0 THEN FT=0: FOUND=6
3010    IF ROLL > FOUND THEN GOTO 3180
3020    RX=0: SV.MON = 0
3030    V=P(P,6): H=P(P,7)
3040    RX = RX+1
3050    IF R(RX,1) = 0 THEN GOTO 3190
3060    IF V => R(RX,1) AND V =< R(RX,3) AND H => R(RX,2) AND H =< R(RX,4)                THEN GOTO 3080
3070    GOTO 3040
3080    FOR V=R(RX,1) TO R(RX,3)
3090      FOR H=R(RX,2) TO R(RX,4)
3100            IF M(V,H) = 0 THEN SV.MON=1:  GOTO 3130
3110      NEXT H
3120    NEXT V
3130    IF SV.MON = 0 THEN GOTO 3180 'NO TRAP
3140    LOCATE V,H: PRINT "T";
3150    ROLL = INT(RND*6)+1
3160    MSG$="YOU FOUND "+TRAP$(ROLL): GOSUB 4460
3170    GOTO 3190
3180    MSG$="YOU FIND NOTHING": GOSUB 4460
3190    T=MV+1
3200 RETURN
3210 'GET TREASURE
3220    IF P(P,8) <> 0 AND P(P,9) <> 0 THEN MSG$="YOUR HANDS ARE FULL":                   GOSUB 4460: GOTO 3660
3230    V=P(P,6): H=P(P,7)
3240    LV=V-1: HV=V+1: LH=H-1: HH=H+1
3250    FOR V = LV TO HV
3260      FOR H = LH TO HH
3270            IF M(V,H) > 0 AND M(V,H) < 20 THEN GOTO 3310
3280      NEXT H
3290    NEXT V
3300    MSG$="YOU ARE NOT BY A TREASURE": GOSUB 4460: GOTO 3660
3310    MX=M(V,H):
3320    TR = INT((MX-1)/4): TP=((MX-(TR*4))*20)+5: IF TP>100 THEN TP=100
3330    ROLL = INT(RND*100)+1
3340    MSG$="THE CHEST IS EMPTY"
3350    ROLL = INT(RND*20)+1
3360    IF ROLL = 10 THEN GOSUB 3670 'A TRAP
3370    IF ROLL > TP THEN GOSUB 4460: TG!=0: GOSUB 3640: GOTO 3410
3380    S$="IT CONTAINS A"
3390    TG!=INT(500*(TR)*(TP/100))
3400    GOSUB 3420 ' THE TREASURE
3410 RETURN
3420 'THE TREASURE
3430    FOR ZZ = 1 TO TR
3440            S=INT((SMAX-1)*RND)+1
3450            IF S(S,12) > (1000*(TR+1)) THEN GOTO 3520
3460            MSG$=S$+" "+S.NAME$(S): SV.TIMER!=TIMER: GOSUB 4460
3470            IF S=33 THEN P(P,5)=P(P,5)-4: GOTO 3490
3480            GOSUB 800: IF REPLY$<>"Y" THEN GOTO 3520
3490            S(S,P+2)=S(S,P+2)+1
3500            EXPR!=EXPR!+S(S,12)
3510            P(P,1) = P(P,1)+S(S,2)
3520    NEXT ZZ
3530    IF TG! < 1 THEN GOTO 3640
3540    TJ=0
3550    IF TG! > 999 THEN TJ = INT(TG!/1000): TG!=TG!-INT(TJ*1000)
3560    TG=0
3570    IF TG! > 99 THEN TG = INT(TG!/100): TG!=TG!-INT(TG*100)
3580    IF TJ >0 THEN MSG$=STR$(TJ)+" JEWELRY": GOSUB 4460
3590    IF TG >0 THEN MSG$=STR$(TG)+" GEMS": GOSUB 4460
3600    MSG$=STR$(TG!)+" GOLD PIECES": GOSUB 4460
3610    GP!=GP!+WG!+(TJ*1000)+(TG*100)
3620    EXPR!=EXPR!+WG!+(TJ*1000)+(TG*100)
3630    P(P,1) = P(P,1)+WG!+(TJ*10)+TG
3640    MSG$=SPACE$(39): GOSUB 4460 'CLEAR MSG LINE
3650    LOCATE V,H: PRINT " ";: M(V,H)=32 'CLEAR THE TREASURE
3660 RETURN
3670 'A TRAP!
3680    ZZ=0
3690    ROLL = INT(RND*6)+1
3700    MSG$="A TRAP!!!": GOSUB 4460
3710    IF ROLL = 1 OR ROLL = 2 THEN MSG$="A CLOUD OF YELLOW GAS FILLS THE ROOM"
3720    IF ROLL = 3 THEN MSG$="YOU FALL INTO A HIDDEN PIT"
3730    IF ROLL = 4 THEN MSG$="A BLOCK FALLS FROM THE CEILING"
3740    IF ROLL = 5 THEN MSG$="A POISON NEEDLE"
3750    IF ROLL = 6 THEN MSG$="A DART FIRES AT YOU"
3760    GOSUB 4460
3770    IF ROLL = 2 THEN MSG$="IT'S HARMLESS": GOSUB 4460: GOTO 3890
3780    IF ROLL = 3 THEN ZZ = INT(RND*6)+1: P(P,3)=P(P,3)-ZZ: GOTO 3890
3790    IF ROLL = 6 THEN ZZ = (INT(RND*6)+1)*(INT(RND*4)+1): P(P,3)=P(P,3)-ZZ:            GOTO 3890
3800    ZZ = INT(RND*20)+1
3810    GET #1,P
3820    IF ROLL <> 4 THEN GOTO 3860
3830    ZZ = INT(RND*20)+1
3840    IF ZZ => CVI(SV.STONE$) THEN MSG$="IT MISSED": GOSUB 4460: ZZ = 0: GOTO 3890
3850    ZZ = INT(RND*10)+1: P(P,3)=P(P,3)-ZZ: GOTO 3890
3860    ZZ = INT(RND*20)+1
3870    IF ZZ => CVI(SV.POISON$) THEN MSG$="THE GODS HAVE SPARED YOU":                    GOSUB 4460: ZZ=0: GOTO 3890
3880    P(P,3)=0
3890    IF ZZ = 0 THEN GOTO 3930
3900    IF P(P,3) > 0 THEN MSG$="IT DID "+STR$(ZZ)+" POINTS DAMAGE"
3910    IF P(P,3) <1 THEN  MSG$=P.NAME$(P)+"IS DEAD": P.NAME$(P) = "":                     V=P(P,6):H=P(P,7): LOCATE V,H: PRINT " ";: M(V,H)=32
3920    GOSUB 4460
3930 RETURN
3940 'ATTACK
3950    IF ATTACK = 2 THEN T=INT(T*2)
3960    ATTACK=1: V=P(P,6): H=P(P,7)
3970 '   CHECK IF NEXT TO A MONSTER
3980    LV=V-1: HV=V+1: LH=H-1: HH=H+1
3990    FOR V = LV TO HV
4000      FOR H = LH TO HH
4010            IF M(V,H) > 60 AND M(V,H) < 124 THEN GOTO 4050
4020      NEXT H
4030    NEXT V
4040    MSG$="YOU ARE NOT BY A MONSTER": GOSUB 4460: GOTO 4450
4050    MN=M(V,H)-60
4060    FOR LX = 1 TO ML.MAX
4070            IF ML(LX,1)=V AND ML(LX,2)=H THEN GOTO 4090
4080    NEXT
4090    S=P(P,8): IF S.CLASS$(S)="W" THEN GOTO 4130
4100    ZZ=S
4110    S=P(P,9)
4120    IF S.CLASS$(S) <> "W" AND S.CLASS$(ZZ) <> "W"                                     THEN MSG$="YOU DON'T HAVE A WEAPON": GOSUB 4460: GOTO 4450
4130    ROLL=INT(RND*10)+1
4140    IF S=34 THEN ROLL=ROLL+5
4150    W$=STR$(M.AC(MN)): W$=RIGHT$(W$,1)
4160    WK=VAL(W$): IF M.AC(MN)=10 THEN WK=10
4170    ZZ = 1+(WK-P(P,4)): IF ZZ > 10 THEN ZZ=10
4180    IF ZZ < 1 THEN ZZ=1
4190    IF ZZ > ROLL THEN MSG$="YOU MISSED":GOSUB 4460: GOTO 4450
4200    IF M.AC(MN) < 11 THEN GOTO 4290  'NO SPECIAL WEAPON REQUIRED
4210    IF M.AC(MN) > 19 THEN GOTO 4230
4220    IF S=10 THEN GOTO 4290 ELSE MSG$="IT DID NO HARM": GOSUB 4460: GOTO 4450           'MUST USE SILVER DAGGER
4230    IF M.AC(MN) > 29 THEN GOTO 4250
4240    IF S=34 THEN GOTO 4290 ELSE MSG$="IT DID NO HARM": GOSUB 4460: GOTO 4450          ,MUST USE MAGIC WEAPON
4250    IF M.AC(MN) > 39 THEN GOTO 4270
4260    IF ((S=34) OR (S=14 AND P(P,10) > 0)) THEN GOTO 4290                               ELSE MSG$="IT DID NO HARM": GOSUB 4460: GOTO 4450                              'MUST USE MAGIC OR FIRE
4270    IF M.AC(MN) > 49 THEN GOTO 4450
4280    IF S=36 THEN GOTO 4290 ELSE MSG$="IT DID NO HARM": GOSUB 4460: GOTO 4450           'MUST USE STAKES
4290 '  CHECK FOR DAMAGE
4300    DM=INT(RND*S(S,1))+1
4310    IF S=34 THEN DM=DM+10
4320    ML(LX,4)=ML(LX,4)-DM
4330    IF MN=32 AND ML(LX,4)<1 AND S<>14 THEN ML(LX,4)=1 'TROLL
4340    IF ML(LX,4)>0 THEN MSG$="THE "+M.NAME$(MN)+" HAS BEEN WOUNDED":GOSUB 4460:              GOTO 4450
4350    MSG$="YOU KILLED THE "+M.NAME$(MN): GOSUB 4460:
4360    RX=ML(LX,3): R(RX,6)=R(RX,6)-1
4370    LOCATE V,H: PRINT " ";: M(V,H)=32: ML(LX,1)=0:
4380    MX=(INT(MN/4))+1
4390    EXPR!=EXPR!+(MX*10)
4400    S$="IT HAD A"
4410    TR = INT((MN-1)/4): TP=((MN-(TR*4))*20)+5: IF TP>100 THEN TP=100
4420    ROLL = INT(RND*100)+1
4430    IF ROLL > TP THEN GOTO 4450
4440    GOSUB 3420      'GET MONSTER'S TREASURE
4450 RETURN
4460 'MESSAGE
4470    IF TIMER < SV.TIMER! THEN GOTO 4470
4480    MS$=SPACE$(39)
4490    LSET MS$=MSG$
4500    LOCATE 25,1
4510    PRINT MS$;
4520    SV.TIMER!=TIMER+1
4530 RETURN
4540 ' GET WHAT ROOM AND DRAW IF LIGHTED
4550   WAN.MON=INT(RND*24*PLAYERS)+1
4560    RX=0: SV.MON = 0: P(P,11)=0: P(P,12)=0
4570    V=P(P,6): H=P(P,7)
4580    RX = RX+1
4590    IF R(RX,1) = 0 THEN GOTO 4930
4600    IF V => R(RX,1) AND V =< R(RX,3) AND H => R(RX,2) AND H =< R(RX,4)                THEN GOTO 4620
4610    GOTO 4580
4620    P(P,11)=RX
4630    HZ=((R(RX,2))*8)
4640    VZ=((R(RX,1))*8)
4650    IF P(P,10) > 1 THEN PAINT(HZ,VZ),1,3: GOSUB 2660: GOTO 4740
4660    IF WAN.MON=6 THEN GOSUB 2660
4670    FOR PX = 1 TO 9
4680            IF PX=P GOTO 4710
4690            IF P(PX,11) = RX AND P(PX,10) > 1 THEN GOTO 4740
4700            IF P(PX,12) = RX AND P(PX,10) > 1 THEN GOTO 4740
4710    NEXT PX
4720    IF (P(P,10) < 1) THEN GOTO 4730 ELSE GOTO 4740
4730    PAINT(HZ,VZ),2,3
4740 'CHECK FOR 2ND ROOM
4750    SV.MON = 0
4760    V=P(P,6): H=P(P,7)
4770    RX = RX+1
4780    IF R(RX,1) = 0 THEN GOTO 4930
4790    IF V => R(RX,1) AND V =< R(RX,3) AND H => R(RX,2) AND H =< R(RX,4)                THEN GOTO 4810
4800    GOTO 4610
4810    P(P,12)=RX
4820    HZ=((R(RX,2))*8)
4830    VZ=((R(RX,1))*8)
4840    IF P(P,10) > 1 THEN PAINT(HZ,VZ),1,3: GOSUB 2660: GOTO 4940
4850    IF WAN.MON=6 THEN GOSUB 2660
4860    FOR PX = 1 TO 9
4870            IF PX=P GOTO 4900
4880            IF P(PX,11) = RX AND P(PX,10) > 1 THEN GOTO 4930
4890            IF P(PX,12) = RX AND P(PX,10) > 1 THEN GOTO 4930
4900    NEXT PX
4910    IF (P(P,10) < 1) THEN GOTO 4920 ELSE GOTO 4930
4920    PAINT(HZ,VZ),2,3
4930    WAN.MON=0
4940 RETURN
4950 'PLAY MONSTER
4960    MSG$="": GOSUB 4460
4970    M.ACT=INT(RND*6)+1: IF TE<>0 THEN M.ACT=2
4980    IF M.ACT = 1 THEN GOTO 5070 ' DO NOTHING
4990    IF M.ACT = 2 THEN M.ACT=-1 ELSE M.ACT=1
5000    FOR LX = 1 TO ML.MAX
5010            IF ML(LX,1) = 0 THEN GOTO 5060
5020            FOR P = 1 TO 9
5030                    IF P.NAME$(P) = "" THEN GOTO 5050
5040                    IF ML(LX,3)=P(P,11) OR ML(LX,3)=P(P,12) THEN                                       GOSUB 5080: GOTO 5060
5050            NEXT P
5060    NEXT LX
5070 RETURN
5080 'MOVE THE MONSTER
5090   MX=M(ML(LX,1),ML(LX,2))-60
5100   IF MX=32 AND ML(LX,4) < 8 THEN ML(LX,4)=ML(LX,4)+1  'TROLL
5110 ' FIND CLOSEST PLAYER
5120   SV.P=0: SV.D=9999
5130   FOR P=1 TO 9
5140           IF (P.NAME$(P)="") OR (P(P,11)<>ML(LX,3) AND P(P,12)<>ML(LX,3))                     THEN GOTO 5170
5150           D=ABS(ML(LX,1)-P(P,6))+ABS(ML(LX,2)-P(P,7))
5160           IF D<SV.D THEN SV.P=P: SV.D=D
5170   NEXT P
5180   P=SV.P
5190   FOR T = 1 TO M.MV(MX)
5200         IF ML(LX,1)<P(P,6) THEN NV=ML(LX,1)+M.ACT: NH=ML(LX,2): GOTO 5240
5210         IF ML(LX,1)>P(P,6) THEN NV=ML(LX,1)-M.ACT: NH=ML(LX,2): GOTO 5240
5220         IF ML(LX,2)<P(P,7) THEN NH=ML(LX,2)+M.ACT: NV=ML(LX,1): GOTO 5240
5230         IF ML(LX,2)>P(P,7) THEN NH=ML(LX,2)-M.ACT: NV=ML(LX,1): GOTO 5240
5240         IF NV < 1 OR NV> 24 OR NH <1 OR NH > 39 THEN GOTO 5330
5250         IF M(NV,NH) <> 32 THEN GOTO 5330
5260         M(NV,NH)=M(ML(LX,1),ML(LX,2)): M(ML(LX,1),ML(LX,2))=32
5270         LOCATE ML(LX,1),ML(LX,2): PRINT " ";
5280         M.H=(NH*8)-8: M.V=(NV*8)-8: DRAW "C3"
5290         DRAW "BM=M.H;,=M.V;": DRAW "BR3;D4;F2;H2;G2"
5300         DRAW "BM=M.H;,=M.V;": DRAW "BR3;D2;L2;R4"
5310         ML(LX,1)=NV: ML(LX,2)=NH
5320   NEXT T
5330 'MONSTER ATTACKS
5340   IF M.ACT<1 THEN GOTO 5860
5350 '  CHECK IF MONSTER NEXT TO PLAYER
5360   V=ML(LX,1): H=ML(LX,2): LV=V-1:  HV=V+1: LH=H-1: HH=H+1
5370   IF P(P,6) => LV AND P(P,6) <= HV AND P(P,7) => LH AND P(P,7) <= HH               THEN GOTO 5430 ELSE GOTO 5380
5380    IF M.DAM(MX,1) < 80 THEN GOTO 5860 'NOT A DRAGON
5390    MSG$="DRAGON FIRE HITS "+LEFT$(P.NAME$(P),13): GOSUB 4460
5400    WC=8: WD=0
5410    GOTO 5530
5420 '  MAKE ATTACK
5430   MN=INT((MX+1)/4) +1
5440   WK=10-MN
5450   WK=WK+P(P,5): IF WK>10 THEN WK=10
5460   IF WK<1 THEN WK=1
5470   ROLL=INT(RND*10)+1
5480   IF WK > ROLL THEN GOTO 5860 'MISSED
5490   MSG$="A "+M.NAME$(MX)+" HAS ATTACKED "+LEFT$(P.NAME$(P),13): GOSUB 4460
5500   IF M.DAM(MX,1) < 10 THEN WD=M.DAM(MX,1): GOTO 5810    'NORMAL ATTACK
5510    WC=(INT(M.DAM(MX,1)/10))
5520    WD=M.DAM(MX,1)-(10*WC)
5530    GET #1,P        'GET PLAYER RECORD TO CHECK SAVING THROWS
5540    IF WC=1 THEN GOTO 5750                     'POISON
5550    IF WC=2 THEN P(P,1) = 1200: GOTO 5790      'DISEASE
5560    IF WC=5 THEN WK=(INT(M.DAM(MX,2)*RND)+WD)+(INT(30*RND)+5)
5570    IF WC=8 THEN WK=(INT(M.DAM(MX,2)*RND)+WD)+ML(MX,4)
5580    IF WC=5 OR WC=8 THEN GOTO 5590 ELSE GOTO 5620
5590    ZZ = INT(RND*20)+1             'DRAGONS BREATH
5600    IF ZZ => CVI(SV.DRAG$) THEN WK=INT(WK/2)
5610    GOTO 5830
5620   IF WC=6 THEN GOTO 5710      'TURN TO STONE
5630 '  ENERGY DRAIN
5640   IF WC = 3 THEN ZZ=CVI(LVL$): ZZ=ZZ-1 'ENERGY DRAIN 1 LEVEL
5650   IF WC = 4 THEN ZZ=CVI(LVL$): ZZ=ZZ-2 'ENERGY DRAIN 2 LEVELS
5660   IF ZZ<1 THEN P(P,3)=0: GOTO 5850  'PLAYER DEAD
5670   IF WC=3 THEN LSET EXPR$ = MKS$(INT(CVS(EXPR$)/2)): P(P,1)=1200
5680   IF WC=4 THEN LSET EXPR$ = MKS$(INT(CVS(EXPR$)/4)): P(P,1)=1200
5690   LSET LVL$=MKI$(ZZ)
5700   GOTO 5790
5710 '  TURN TO STONE
5720   ZZ = INT(RND*20)+1             'TURN TO STONE
5730   IF ZZ => CVI(SV.STONE$) THEN MSG$="THE GODS HAVE SPARED YOU":                      GOSUB 4460: WK=0: GOTO 5790
5740   P(P,3)=0: GOTO 5840
5750 '  POISON
5760   ZZ = INT(RND*20)+1             'POISON
5770   IF ZZ => CVI(SV.POISON$) THEN MSG$="THE GODS HAVE SPARED YOU":                    GOSUB 4460: WK=0: GOTO 5790
5780   P(P,3)=0: GOTO 5840   'PLAYER DEAD
5790   PUT #1,P        'REWRITE PLAYERS RECORD
5800   GOTO 5860
5810 '  CHECK DAMAGE
5820   WK=INT(RND*M.DAM(MX,2))+WD
5830   P(P,3)=P(P,3)-WK
5840   IF P(P,3)>0 THEN MSG$="IT DID "+STR$(WK)+" POINTS DAMAGE": GOSUB 4460:             GOTO 5860
5850   IF P(P,3) <1 THEN  MSG$=P.NAME$(P)+"IS DEAD": P.NAME$(P) = "":                    V=P(P,6):H=P(P,7): LOCATE V,H: PRINT " ";: M(V,H)=32: GOSUB 4460
5860 RETURN
5870 'CAST A SPELL
5880   IF T<>1 THEN MSG$="NO TIME": GOSUB 4460: GOTO 6110 'SPELL TAKES FULL TURN
5890    IF P.CLASS$(P) <> "CLERIC    " AND P.CLASS$(P) <> "ELF       "                     AND P.CLASS$(P) <> "MAGIC-USER"                                                THEN MSG$="YOU CAN'T CAST SPELLS": GOSUB 4460: GOTO 6110
5900    LOCATE 25,1: PRINT SPACE$(39);
5910    LOCATE 25,1: INPUT;"WHAT SPELL ",W$
5920    SK$=W$
5930    GOSUB 330 'MATCH TO SUPPLY FILE
5940    IF FOUND=0 THEN GOTO 6110
5950    S(S,P+2)=S(S,P+2)-1  'SUBTRACT SPELL
5960    IF S(S,2) > P(P,4) THEN MSG$="YOU CAN'T USE THAT SPELL": GOSUB 4460:              GOTO 6090
5970    IF (S(S,1) = 1 AND P.CLASS$(P) <> "CLERIC    ")                                     OR (S(S,1)=3 AND P.CLASS$(P) = "CLERIC    ")                                  THEN MSG$="YOU CAN'T USE THAT SPELL": GOSUB 4460: GOTO 6090
5980   IF S=26 THEN GOSUB 6620: GOTO 6090                    'CLOUDKILL
5990   IF S=28 OR S=22 THEN GOSUB 6780: GOTO 6090            'DEATH
6000   IF S=19 OR S=23 THEN P(P,10)=99: GOTO 6090            'LIGHT
6010   IF S=29 OR S=27 THEN TE=3: GOTO 6090                  'TURN EVIL
6020   IF S=31 OR S=32 THEN TO.OPEN=6: GOTO 6090             'TO OPEN
6030   IF S=30 THEN HS=4: GOTO 6090                          'HASTE
6040   IF S=18 THEN FT=6: GOTO 6090                          'FIND TRAPS
6050   IF S=24 THEN GOSUB 6370: GOTO 6090                    'LIGHTNING
6060   IF S=17 OR S=21 OR S=20 OR S=25 THEN GOSUB 6120: GOTO 6090
6070 ' INVALID SPELL
6080   MSG$="THATS NOT A VALID SPELL": GOSUB 4460: GOTO 6110
6090 'END TURN
6100   T=MV+1
6110 RETURN
6120 'CURE WOUNDS/RAISE DEAD/CURE CURSE
6130   LOCATE 25,1: PRINT SPACE$(39);  'CURE WOUNDS/RAISE DEAD/CURE CURSE
6140   LOCATE 25,1: PRINT "WHAT PLAYER? ";
6150    GOSUB 7110 'GET REPLY
6160    PX=VAL(W$)
6170   IF S=17 AND P.NAME$(PX)="" THEN MSG$="THAT PLAYER IS DEAD": GOSUB 4460:           GOTO 6360
6180 '  CHECK FOR SAME ALIGNMENT
6190    GET #1,P    'GET PLAYER RECORD
6200    SV.ALIGN$=ALIGN$
6210    GET #1,PX   'GET OTHER PLAYERS RECORD
6220    IF SV.ALIGN$ <> ALIGN$ THEN MSG$="YOU WOULDN'T HELP THAT SWINE":                  GOSUB 4460: GOTO 6360
6230   IF S=20 OR S=25 THEN GOTO 6320  'REMOVE CURSE
6240   IF S=21 THEN GOTO 6280   'RAISE DEAD
6250 ' CURE WOUNDS
6260   IF (CVI(HIT$)-P(PX,3)) < P(P,4) THEN P(PX,3)=CVI(HIT$)                            ELSE P(PX,3)=P(PX,3)+P(P,4)
6270   GOTO 6360
6280 ' RAISE DEAD
6290   P.NAME$(PX)=NM$: P(PX,1)=1600: P(PX,3)=1: P(PX,5)=1: P(PX,8)=0:                   P(PX,9)=0: P(PX,10)=0: M(P(PX,6),P(PX,7))=PX+48
6300   LOCATE P(PX,6),P(PX,7): PRINT CHR$(M(P(PX,6),P(PX,7)));
6310   GOTO 6360
6320 ' REMOVE CURSE
6330   S(33,PX+2)=0
6340   P(PX,5)=P(PX,5)+4
6350   P(PX,1)=P(PX,1)-300
6360 RETURN
6370 ' LIGHTNING
6380   LOCATE 25,1: PRINT SPACE$(39);                 'LIGHTNING/DEATH
6390   LOCATE 25,1: PRINT "WHAT WAY (U-D-L-R)? ";
6400    GOSUB 7110 'GET REPLY
6410   IF W$="U" THEN NV=P(P,6)+1:NH=P(P,7):NH2=P(P,7):NV2=P(P,6+2): GOTO 6460
6420   IF W$="D" THEN NV=P(P,6)-1:NH=P(P,7):NH2=P(P,7):NV2=P(P,6-2): GOTO 6460
6430   IF W$="L" THEN NH=P(P,7)-1:NV=P(P,6):NV2=P(P,6):NH2=P(P,7-2): GOTO 6460
6440   IF W$="R" THEN NH=P(P,7)+1:NV=P(P,6):NV2=P(P,6):NH2=P(P,7+2): GOTO 6460
6450   GOTO 6380
6460   FOR LX=1 TO ML.MAX
6470           IF ML(LX,1)<1 THEN GOTO 6600 'DEAD MONSTER
6480           IF (ML(LX,1) = NV OR ML(LX,1) = NV2)                                             AND (ML(LX,2) = NH OR ML(LX,2)=NH2)                                               THEN GOTO 6490 ELSE GOTO 6600
6490           V=ML(LX,1): H=ML(LX,2)
6500           MN=M(V,H)-60
6510           DM=INT(6*P(P,4))
6520           ML(LX,4)=ML(LX,4)-DM
6530           IF ML(LX,4)>0 THEN MSG$="THE "+M.NAME$(MN)+" HAS BEEN WOUNDED":                    GOSUB 4460: GOTO 6600
6540           RX=ML(LX,3): R(RX,6)=R(RX,6)-1
6550           MSG$="YOU KILLED THE "+M.NAME$(MN): GOSUB 4460:
6560           LOCATE V,H: PRINT " ";: M(V,H)=32: ML(LX,1)=0:
6570           MX=(INT(MN/4))+1
6580           RX=ML(LX,3): R(RX,6)=R(RX,6)-1
6590           EXPR!=EXPR!+(MX*10)
6600   NEXT LX
6610 RETURN
6620 '  CLOUDKILL
6630   FOR LX=1 TO ML.MAX
6640           IF ML(LX,1)<1 THEN GOTO 6760 'DEAD MONSTER
6650           IF ML(LX,3) = P(P,11) OR ML(LX,3) = P(P,12) THEN GOTO 6660                       ELSE GOTO 6760
6660           V=ML(LX,1): H=ML(LX,2)
6670           MN=M(V,H)-60
6680           ROLL=INT(RND*2)+1: IF ROLL=1 THEN DM=1 ELSE DM=5
6690           ML(LX,4)=ML(LX,4)-DM
6700           IF ML(LX,4)>0 THEN MSG$="THE "+M.NAME$(MN)+" HAS BEEN WOUNDED":GOSUB 4460:              GOTO 6760
6710           MSG$="YOU KILLED THE "+M.NAME$(MN): GOSUB 4460:
6720           RX=ML(LX,3): R(RX,6)=R(RX,6)-1
6730           LOCATE V,H: PRINT " ";: M(V,H)=32: ML(LX,1)=0:
6740           MX=(INT(MN/4))+1
6750           EXPR!=EXPR!+(MX*10)
6760   NEXT LX
6770 RETURN
6780 'DEATH SPELL
6790   LOCATE 25,1: PRINT SPACE$(39);
6800   LOCATE 25,1: PRINT "WHAT WAY (U-D-L-R)? ";
6810   V=P(P,6): H=P(P,7)
6820    GOSUB 7110 'GET REPLY
6830   IF W$="U" THEN DIR=-1: GOTO 6880
6840   IF W$="D" THEN DIR=1: GOTO 6880
6850   IF W$="L" THEN DIR=-1: GOTO 6920
6860   IF W$="R" THEN DIR=1: GOTO 6920
6870   GOTO 6780
6880 ' LOOK VERT
6890   V=V+DIR: IF V>24 OR V<1 THEN MSG$="YOU MISSED": GOSUB 4460: GOTO 7100
6900   IF M(V,H)=<32 THEN GOTO 6880
6910   GOTO 6950
6920 '  LOOK HOR
6930   H=H+DIR: IF H>39 OR H<1 THEN MSG$="YOU MISSED": GOSUB 4460: GOTO 7100
6940   IF M(V,H)=<32 THEN GOTO 6920
6950 ' CHECK  WHAT YOU HIT
6960   IF M(V,H) > 48 AND M(V,H) < 58 THEN GOTO 7060 'HIT A PLAYER
6970   IF M(V,H) > 60 AND M(V,H) < 124 THEN GOTO 6990 'HIT A MONSTER
6980   MSG$="YOU MISSED": GOSUB 4460: GOTO 7100
6990 '  HIT A MONSTER
7000   FOR LX=1 TO ML.MAX
7010           IF ML(LX,1)=V AND ML(LX,2)=H THEN GOTO 7030
7020   NEXT
7030   MN=M(V,H)-60
7040   GOSUB 4350
7050   GOTO 7100
7060 '  HIT A PLAYER
7070   PX=M(V,H)-48
7080   MSG$="YOU KILLED "+P.NAME$(PX): GOSUB 4460
7090   P.NAME$(PX)="": LOCATE V,H: PRINT " ";: M(V,H)=32
7100 RETURN
7110 'GET INPUT VARIABLE
7120    W$=""
7130    REPLY$=INKEY$
7140    IF REPLY$="" THEN GOTO 7130
7150    IF LEN(REPLY$)=1 THEN GOTO 7220 ELSE REPLY$=RIGHT$(REPLY$,1) 'CHK BACKSP
7160    IF ASC(REPLY$) <> 75 THEN BEEP: GOTO 7130    'INVALID CHAR
7170    L=LEN(W$): IF L=0 THEN BEEP: GOTO 7130
7180    W$=LEFT$(W$,L-1) 'ERASE LAST CHAR FROM INPUT VAR
7190    L=POS(0): L=L-1: LOCATE 25,L: PRINT " "; 'ERASE LAST CHAR FROM SCREEN
7200    LOCATE 25,L 'REPOSITION CURSOR
7210    GOTO 7130
7220    IF ASC(REPLY$)=13 THEN GOTO 7260 'ENTER WAS HIT
7230    PRINT REPLY$;
7240    W$=W$+REPLY$
7250    GOTO 7130
7260 RETURN
```
{% endraw %}

## DUNQUEST.BAS

{% raw %}
```bas
10 'DUNQUEST THE QUEST
20    DEFINT A-Z
30      SCREEN 3:KEY OFF:WIDTH 20:COLOR 1,4:CLS
40    LOCATE 1,1,0
50      LOCATE 4,1:PRINT "       THE"
60      LOCATE 7,1:PRINT "      QUEST"
70 'KILL TIME
80     SV.TIMER! = TIMER +2
90     IF TIMER <  SV.TIMER! THEN GOTO 90
100 'PRINT MENU
110     SCREEN 0:WIDTH 40:COLOR 0,4,4:CLS
120     LOCATE 3,1:PRINT "           THE QUEST"
130    RANDOMIZE TIMER
140    MX=INT(RND*9)+1: MNO$=STR$(MX)
150    MX=LEN(MNO$): MNO$=RIGHT$(MNO$,MX-1)
160     GOSUB 2830 'GET PLAYERS & LOAD PLAYER DATA
170     GOSUB 250 'LOAD MAP
180     GOSUB 630 "LOAD TABLES
190     GOSUB 3600 'PLACE MONSTERS & TREASURE
200     GOSUB 4360 'SETUP INITIAL LOCATION OF PLAYERS
210     FOR MX=1 TO 40
220       M.NBR(MX,1)=1: M.NBR(MX,2)=1
230     NEXT
240     CHAIN "DUNPLAY",10,ALL
250 'LOAD THE MAP
260    FID$ = "DUNMAP" + MNO$
270    OPEN FID$ FOR INPUT AS #3
280    DIM M(24,40) 'DUNGEON ARRAY
290    DIM R(10,6)  'ROOMS 1=TOP LEFT HOR,2=TOP LEFT VER,3=BOT RIGHT HOR,4=BOT                       RIGHT VERT,5=MONSTER,6=NBR OF MONSTERS
300    RX=0
310    GOSUB 340
320    CLOSE #3
330 RETURN
340 'FLAG THE ROOMS
350    INPUT #3,MX
360    IF MX=9999 THEN GOTO 410
370    RX=RX+1
380    R(RX,1)=MX
390    INPUT #3,R(RX,2),R(RX,3),R(RX,4)
400    GOTO 340
410 'LOAD THE MAP TO ARRAYS
420    INPUT #3,CT,ZZ
430    SCREEN 1:COLOR 2,0:CLS:PALETTE 1,2: PALETTE 2,0: PALETTE  3,0
440     PAINT (0,0),2,3
450    LOCATE 25,10: PRINT "PLEASE STAND BY";
460    FOR MV = 1 TO 24
470      FOR MH = 1 TO 40
480            IF CT=0 THEN INPUT #3,CT,ZZ
490            IF CT=9999 THEN GOTO 600
500            IF ZZ > 47 AND ZZ < 58 THEN ZZ = 32
510            IF MH> 40 THEN MV=MV+1: MH=1
520            M(MV,MH) = ZZ
530            IF ZZ=32 THEN GOTO 590
540            IF MV=24 THEN GOTO 590
550            H=(MH*8)-8: V=(MV*8)-8
560            IF ZZ=219 THEN LINE(H,V)-(H+7,V+7),3,BF
570            IF ZZ=179 THEN LINE(H+3,V)-(H+4,V+7),3,BF
580            IF ZZ=196 THEN LINE(H,V+4)-(H+7,V+4),3
590            CT=CT-1
600    NEXT MH
610    NEXT MV
620 RETURN
630 'LOAD TABLES
640    DIM SV(8002) 'SAVE THE CURRENT SCREEN
650    DIM TRAP$(6) 'TRAPS
660    DIM ML(100,4) ' MONSTER LOCATIONS V,H,ROOM,HIT POINTS
670    DIM D(3,3) 'OPEN DOORS
680    TRAP$(1)="POISON GAS"
690    TRAP$(2)="FOG "
700    TRAP$(3)="HIDDEN PIT"
710    TRAP$(4)="FALLING BLOCK TRAP"
720    TRAP$(5)="POISON NEEDLE TRAP"
730    TRAP$(6)="DART TRAP"
740     DIM M.NAME$(40)
750     M.NAME$(1)="BAT"
760     M.NAME$(2)="RAT"
770     M.NAME$(3)="WOLF"
780     M.NAME$(4)="CENTIPEDE"
790     M.NAME$(5)="BANDIT"
800     M.NAME$(6)="KOBOLD"
810     M.NAME$(7)="SKELETON"
820     M.NAME$(8)="GHOUL"
830     M.NAME$(9)="ZOMBIE"
840     M.NAME$(10)="GOBLIN"
850     M.NAME$(11)="MAN-LIZARD"
860     M.NAME$(12)="ORC"
870     M.NAME$(13)="WERERAT"
880     M.NAME$(14)="SNAKE"
890     M.NAME$(15)="BEAR"
900     M.NAME$(16)="WIGHT"
910     M.NAME$(17)="CARRION CRAWLER"
920     M.NAME$(18)="WEREWOLF"
930     M.NAME$(19)="ORGE"
940     M.NAME$(20)="HELLHOUND"
950     M.NAME$(21)="CAECILIA"
960     M.NAME$(22)="CROCODILE"
970     M.NAME$(23)="MUMMY"
980     M.NAME$(24)="WEREBEAR"
990     M.NAME$(25)="WYVERN"
1000     M.NAME$(26)="CAVE BEAR"
1010     M.NAME$(27)="SALAMANDER"
1020     M.NAME$(28)="GIANT SCORPION"
1030     M.NAME$(29)="SABRE-TOOTH TIGER"
1040     M.NAME$(30)="GORGON"
1050     M.NAME$(31)="VAMPIRE"
1060     M.NAME$(32)="TROLL"
1070     M.NAME$(33)="DEVIL SWINE"
1080     M.NAME$(34)="STONE GIANT"
1090     M.NAME$(35)="SPECTRE"
1100     M.NAME$(36)="RED DRAGON"
1110     M.NAME$(37)="CYCLOPS"
1120     M.NAME$(38)="PURPLE WORM"
1130     M.NAME$(39)="GOLEM"
1140     M.NAME$(40)="GOLD DRAGON"
1150     DIM M.AC(40)
1160 '    10=SILVER 20=MAGIC 30=MAGIC/FIRE 40=STAKE
1170     M.AC(1)=4
1180     M.AC(2)=2
1190     M.AC(3)=3
1200     M.AC(4)=1
1210     M.AC(5)=4
1220     M.AC(6)=3
1230     M.AC(7)=3
1240     M.AC(8)=4
1250     M.AC(9)=2
1260     M.AC(10)=4
1270     M.AC(11)=4
1280     M.AC(12)=5
1290     M.AC(13)=14
1300     M.AC(14)=4
1310     M.AC(15)=4
1320     M.AC(16)=13
1330     M.AC(17)=3
1340     M.AC(18)=16
1350     M.AC(19)=5
1360     M.AC(20)=6
1370     M.AC(21)=4
1380     M.AC(22)=7
1390     M.AC(23)=37
1400     M.AC(24)=18
1410     M.AC(25)=7
1420     M.AC(26)=7
1430     M.AC(27)=8
1440     M.AC(28)=8
1450     M.AC(29)=4
1460     M.AC(30)=8
1470     M.AC(31)=48
1480     M.AC(32)=6
1490     M.AC(33)=17
1500     M.AC(34)=6
1510     M.AC(35)=22
1520     M.AC(36)=10
1530     M.AC(37)=5
1540     M.AC(38)=4
1550     M.AC(39)=24
1560     M.AC(40)=10
1570     DIM M.MV(40)
1580    M.MV(1)=12
1590    M.MV(2)=4
1600    M.MV(3)=12
1610    M.MV(4)=4
1620    M.MV(5)=8
1630    M.MV(6)=4
1640    M.MV(7)=4
1650    M.MV(8)=6
1660    M.MV(9)=8
1670    M.MV(10)=8
1680    M.MV(11)=8
1690    M.MV(12)=4
1700    M.MV(13)=8
1710    M.MV(14)=6
1720    M.MV(15)=8
1730    M.MV(16)=6
1740    M.MV(17)=8
1750    M.MV(18)=12
1760    M.MV(19)=6
1770    M.MV(20)=8
1780    M.MV(21)=8
1790    M.MV(22)=6
1800    M.MV(23)=4
1810    M.MV(24)=8
1820    M.MV(25)=6
1830    M.MV(26)=8
1840    M.MV(27)=16
1850    M.MV(28)=10
1860    M.MV(29)=10
1870    M.MV(30)=8
1880    M.MV(31)=8
1890    M.MV(32)=8
1900    M.MV(33)=12
1910    M.MV(34)=8
1920    M.MV(35)=10
1930    M.MV(36)=6
1940    M.MV(37)=6
1950    M.MV(38)=4
1960    M.MV(39)=12
1970    M.MV(40)=6
1980    DIM M.NBR(40,2)
1990    M.NBR(1,1)=1:M.NBR(1,2)=20
2000    M.NBR(2,1)=5:M.NBR(2,2)=20
2010    M.NBR(3,1)=2:M.NBR(3,2)=20
2020    M.NBR(4,1)=2:M.NBR(4,2)=8
2030    M.NBR(5,1)=1:M.NBR(5,2)=8
2040    M.NBR(6,1)=4:M.NBR(6,2)=8
2050    M.NBR(7,1)=3:M.NBR(7,2)=12
2060    M.NBR(8,1)=1:M.NBR(8,2)=6
2070    M.NBR(9,1)=2:M.NBR(9,2)=8
2080    M.NBR(10,1)=2:M.NBR(10,2)=8
2090    M.NBR(11,1)=2:M.NBR(11,2)=8
2100    M.NBR(12,1)=2:M.NBR(12,2)=8
2110    M.NBR(13,1)=1:M.NBR(13,2)=8
2120    M.NBR(14,1)=1:M.NBR(14,2)=8
2130    M.NBR(15,1)=1:M.NBR(15,2)=4
2140    M.NBR(16,1)=1:M.NBR(16,2)=6
2150    M.NBR(17,1)=1:M.NBR(17,2)=3
2160    M.NBR(18,1)=1:M.NBR(18,2)=6
2170    M.NBR(19,1)=1:M.NBR(19,2)=6
2180    M.NBR(20,1)=2:M.NBR(20,2)=8
2190    M.NBR(21,1)=1:M.NBR(21,2)=3
2200    M.NBR(22,1)=1:M.NBR(22,2)=4
2210    M.NBR(23,1)=1:M.NBR(23,2)=4
2220    M.NBR(24,1)=1:M.NBR(24,2)=4
2230    M.NBR(25,1)=1:M.NBR(25,2)=2
2240    M.NBR(26,1)=1:M.NBR(26,2)=2
2250    M.NBR(27,1)=2:M.NBR(27,2)=5
2260    M.NBR(28,1)=1:M.NBR(28,2)=6
2270    M.NBR(29,1)=1:M.NBR(29,2)=4
2280    M.NBR(30,1)=1:M.NBR(30,2)=2
2290    M.NBR(31,1)=1:M.NBR(31,2)=4
2300    M.NBR(32,1)=1:M.NBR(32,2)=8
2310    M.NBR(33,1)=1:M.NBR(33,2)=3
2320    M.NBR(34,1)=1:M.NBR(34,2)=2
2330    M.NBR(35,1)=1:M.NBR(35,2)=4
2340    M.NBR(36,1)=1:M.NBR(36,2)=1
2350    M.NBR(37,1)=1:M.NBR(37,2)=1
2360    M.NBR(38,1)=1:M.NBR(38,2)=2
2370    M.NBR(39,1)=1:M.NBR(39,2)=1
2380    M.NBR(40,1)=1:M.NBR(40,2)=1
2390    DIM M.DAM(40,2): MX=0
2400 '   10=POISON 20=PARALSYS 30=ENERGY DRAIN 1 LVL  40=ENERGY DRAIN 2 LEVELS
2410 '    50=FIRE 60=TURN TO STONE 70=???        80=DRAGON FIRE
2420    M.DAM(1,1)=0:M.DAM(1,2)=0
2430    M.DAM(2,1)=1:M.DAM(2,2)=2
2440    M.DAM(3,1)=1:M.DAM(3,2)=3
2450    M.DAM(4,1)=10:M.DAM(4,2)=0
2460    M.DAM(5,1)=1:M.DAM(5,2)=6
2470    M.DAM(6,1)=1:M.DAM(6,2)=4
2480    M.DAM(7,1)=1:M.DAM(7,2)=6
2490    M.DAM(8,1)=21:M.DAM(8,2)=3
2500    M.DAM(9,1)=1:M.DAM(9,2)=8
2510    M.DAM(10,1)=1:M.DAM(10,2)=6
2520    M.DAM(11,1)=1:M.DAM(11,2)=6
2530    M.DAM(12,1)=2:M.DAM(12,2)=7
2540    M.DAM(13,1)=1:M.DAM(13,2)=4
2550    M.DAM(14,1)=11:M.DAM(14,2)=4
2560    M.DAM(15,1)=3:M.DAM(15,2)=12
2570    M.DAM(16,1)=30:M.DAM(16,2)=0
2580    M.DAM(17,1)=20:M.DAM(17,2)=0
2590    M.DAM(18,1)=2:M.DAM(18,2)=8
2600    M.DAM(19,1)=2:M.DAM(19,2)=20
2610    M.DAM(20,1)=55:M.DAM(20,2)=10
2620    M.DAM(21,1)=2:M.DAM(21,2)=16
2630    M.DAM(22,1)=4:M.DAM(22,2)=32
2640    M.DAM(23,1)=22:M.DAM(23,2)=22
2650    M.DAM(24,1)=9:M.DAM(24,2)=64
2660    M.DAM(25,1)=16:M.DAM(25,2)=44
2670    M.DAM(26,1)=8:M.DAM(26,2)=56
2680    M.DAM(27,1)=6:M.DAM(27,2)=32
2690    M.DAM(28,1)=16:M.DAM(28,2)=48
2700    M.DAM(29,1)=9:M.DAM(29,2)=80
2710    M.DAM(30,1)=64:M.DAM(30,2)=24
2720    M.DAM(31,1)=42:M.DAM(31,2)=20
2730    M.DAM(32,1)=6:M.DAM(32,2)=44
2740    M.DAM(33,1)=4:M.DAM(33,2)=24
2750    M.DAM(34,1)=6:M.DAM(34,2)=36
2760    M.DAM(35,1)=42:M.DAM(35,2)=16
2770    M.DAM(36,1)=82:M.DAM(36,2)=92
2780    M.DAM(37,1)=2:M.DAM(37,2)=60
2790    M.DAM(38,1)=12:M.DAM(38,2)=48
2800    M.DAM(39,1)=9:M.DAM(39,2)=74
2810    M.DAM(40,1)=89:M.DAM(40,2)=92
2820 RETURN
2830 'GET PLAYERS & LOAD PLAYER DATA
2840     OPEN "DUNCHAR" AS #1 LEN=122
2850     FIELD #1,2 AS STRN$,2 AS INTL$,2 AS WIS$,2 AS DEX$,2 AS CON$,2 AS CHA$, 10 AS CLAS$,2 AS HIT$,4 AS MONEY$,2 AS LVL$,2 AS ARM$,2 AS SV.POISON$,2 AS SV.MAGIC$,2 AS SV.STONE$,2 AS SV.DRAG$,2 AS SV.SPELL$,4 AS EXPR$,24 AS NM$,7 AS ALIGN$,45 AS D$
2860     OPEN "DUNSHOP" AS #2 LEN=44
2870     FIELD #2,2 AS SID$,1 AS SCLASS$,15 AS SNAME$,2 AS SCOST$,2 AS SDAM$,2 AS SWT$,2 AS P1$,2 AS P2$,2 AS P3$,2 AS P4$,2 AS P5$,2 AS P6$,2 AS P7$,2 AS P8$,2 AS P9$,2 AS P10$
2880    DIM P.NAME$(9): DIM P.CLASS$: DIM P(9,13): DIM GP!(9)
2890 '  P(1)=WEIGHT, P(2)=STRENGTH P(3)=HIT POINTS P(4)=LEVEL P(5)=ARMOR CLASS          P(6)=VERTICAL POSITION P(7)=HORIZONAL POSITION P(8)=RIGHT HAND P(9)=LEFT        P(10)=LIGHT P(11)=ROOM  P(12)=ROOM P(13) RESTING
2900    DIM S.NAME$(40): DIM S(40,12): DIM S.CLASS$(40)
2910 '  S(1)=DAMAGE S(2)=WEIGHT S(3)-S(11) = PLAYERS   S(12)=COST
2920    S=0    'LOAD SUPPLIES
2930    S=S+1
2940    GET #2,S
2950    IF SID$ <> "DS" THEN SMAX=S-1: GOTO 3010
2960    S.NAME$(S)=SNAME$: S.CLASS$(S) = SCLASS$: S(S,1)=CVI(SDAM$):                    S(S,2)=CVI(SWT$)
2970    S(S,3)=CVI(P1$): S(S,4)=CVI(P2$): S(S,5)=CVI(P3$): S(S,6)=CVI(P4$)
2980    S(S,7)=CVI(P5$): S(S,8)=CVI(P6$): S(S,9)=CVI(P7$): S(S,10)=CVI(P8$)
2990    S(S,11)=CVI(P9$): S(S,12)=CVI(SCOST$)
3000    GOTO 2930
3010    COLOR 0,4,4: CLS: BEEP
3020    INPUT "ENTER NUMBER OF PLAYERS ",PLAYERS
3030    FOR PX = 1 TO PLAYERS
3040            GOSUB 3080 'GET PLAYER
3050    NEXT
3060    LV.ADJ = INT(T.LVL/PLAYERS)
3070 RETURN
3080 'GET PLAYER
3090    PRINT "ENTER PLAYER NUMBER ";PX;
3100    INPUT P
3110    IF P <1 OR P >9 THEN GOTO 3090
3120    GET #1,P
3130    IF NM$ = SPACE$(24) THEN PRINT P;"NOT VALID": GOTO 3080
3140    PRINT "YOU ARE ";NM$
3150    PRINT "(Yes/No)"
3160    GOSUB 4510 'GET REPLY
3170    IF REPLY$ <> "Y" THEN GOTO 3080
3180    FOR S = 1 TO SMAX     'GET WEIGHT OF SUPPLIES
3190            P(P,1)=P(P,1)+(S(S,P+2) * S(S,2))
3200    NEXT
3210    P.NAME$(P) = NM$: P.CLASS$(P)=CLAS$
3220    P(P,4) = CVI(LVL$): P(P,2)=CVI(STRN$)
3230    P(P,3)=CVI(HIT$):
3240    T.LVL = T.LVL+P(P,4)
3250    PRINT "WHAT ARMOR ARE YOU WEARING ";NM$
3260    INPUT A$
3270    IF A$="" THEN P(P,5) = CVI(ARM$): GOTO 3350
3280 '
3290    SK$=A$
3300    GOSUB 4290 'MATCH TO SUPPLY FILE
3310    IF FOUND = 0 THEN GOTO 3250
3320    IF S.CLASS$(S) <> "A" THEN GOTO 3250
3330    P(P,5)=S(S,1)+CVI(ARM$)  'GET ARMOR CLASS
3340    IF P(P,5)>10 THEN P(P,5)=10
3350 'GET WEAPONS
3360    PRINT "WHAT DO YOU HAVE IN YOUR RIGHT HAND?"
3370    INPUT A$
3380    IF A$="" THEN P(P,8) = 0: GOTO 3470
3390 '
3400    SK$=A$
3410    GOSUB 4290 'MATCH TO SUPPLY FILE
3420    IF FOUND = 0 THEN MSG$="": GOSUB 4600: GOTO 3350
3430    P(P,8) = S: S(S,P+2)=S(S,P+2)-1
3440    IF S=13 THEN P(P,10)=40 'LANTERN
3450    IF S=14 THEN P(P,10)=10 'TORCH
3460    IF S=4 THEN P(P,5)=P(P,5)+1 'SHIELD
3470    PRINT "WHAT DO YOU HAVE IN YOUR LEFT HAND?"
3480    INPUT A$
3490    IF A$="" THEN P(P,9) = 0: GOTO 3580
3500 '
3510    SK$=A$
3520    GOSUB 4290 'MATCH TO SUPPLY FILE
3530    IF FOUND = 0 THEN MSG$="": GOSUB 4600: GOTO 3470
3540    P(P,9) = S: S(S,P+2)=S(S,P+2)-1
3550    IF S=4 THEN P(P,5)=P(P,5)+1  'SHIELD
3560    IF S=13 THEN P(P,10)=40 'LANTERN
3570    IF S=14 THEN P(P,10)=10 'TORCH
3580    IF S(33,P+2) <> 0 THEN P(P,5)=P(P,5)-4 'CARTER'S CURSE
3590 RETURN
3600 'PLACE MONSTERS & TREASURE
3610    RX = 0
3620 'CHECK EACH ROOM
3630    RX = RX+1
3640    IF R(RX,1) = 0 THEN GOTO 3700
3650    DEP = R(RX,3)-R(RX,1)
3660    WID = R(RX,4)-R(RX,2)
3670    SIZ=(DEP-1)*(WID-1)
3680    GOSUB 3710 'STOCK A ROOM
3690    GOTO 3620
3700 RETURN
3710 'STOCK A ROOM
3720     RANDOMIZE TIMER
3730    TX=0
3740    ROLL = INT(RND*6)+1
3750    IF ROLL < 4 THEN GOSUB 3800: GOTO 3790 'GET A MONSTER
3760    IF ROLL = 4 THEN GOSUB 4060: GOTO 3790 'GET A TRAP
3770    IF ROLL = 5 THEN GOSUB 4160: GOTO 3790 'GET A TREASURE
3780    ROLL = INT(RND*6)+1: IF ROLL =1 THEN GOSUB 4060
3790 RETURN
3800 'GET A MONSTER
3810    DEP = R(RX,3)-R(RX,1)
3820    WID = R(RX,4)-R(RX,2)
3830    SIZ=(DEP-1)*(WID-1)
3840    WK.LV =((INT(RX/4)+LV.ADJ)-1)
3850    MX = (INT(RND*4)+1)+(4*(WK.LV)): IF MX>40 THEN MX=40
3860    WK = MX+60
3870    NBR = INT(RND*M.NBR(MX,2))+M.NBR(MX,1)
3880    IF NBR > M.NBR(MX,2) THEN NBR=M.NBR(MX,2)
3890    IF NBR > SIZ THEN NBR = SIZ-4
3900    FOR ZZ = 1 TO NBR
3910      V = (INT(RND*DEP)+1)+R(RX,1)
3920      H = (INT(RND*WID)+1)+R(RX,2)
3930      IF M(V,H) <> 32 GOTO 3910
3940      ML.MAX=ML.MAX+1: ML(ML.MAX,1)=V: ML(ML.MAX,2)=H
3950      ML(ML.MAX,3)=RX: ML(ML.MAX,4)=INT((MX/4)+1)
3960      M(V,H) = WK
3970      MH=(H*8)-8: MV=(V*8)-8
3980      DRAW "BM=MH;,=MV;": DRAW "BR3;D4;F2;H2;G2"
3990      DRAW "BM=MH;,=MV;": DRAW "BR3;D2;L2;R4"
4000      R(RX,5)=MX: R(RX,6)=R(RX,6)+1 'SAVE MONSTER & NUMBER
4010    NEXT
4020    ROLL = INT(RND*6)+1
4030    IF ROLL < 4 THEN TX = (MX/4) +(MX-INT(MX/4)): IF TX>19 THEN TX=19
4040    IF ROLL < 4 THEN GOSUB 4160
4050 RETURN
4060 'GET A TRAP
4070    CT=0
4080    IF CT=20 GOTO 4150
4090      V = (INT(RND*DEP)+1)+R(RX,1)
4100      H = (INT(RND*WID)+1)+R(RX,2)
4110      IF M(V,H) <> 32 THEN CT=CT+1: GOTO 4080
4120      M(V,H) = 0: CT=0
4130    ROLL = INT(RND*6)+1
4140    IF ROLL < 3 THEN GOSUB 4160
4150 RETURN
4160 'GET A TREASURE
4170    CT=0
4180    IF TX <> 0 THEN GOTO 4200
4190    TX=(INT(RX/3)+LV.ADJ)*((RND*4)+1): IF TX>19 THEN TX=19
4200      WK = TX
4210    IF CT=20 GOTO 4280
4220      V = (INT(RND*DEP)+1)+R(RX,1)
4230      H = (INT(RND*WID)+1)+R(RX,2)
4240      IF M(V,H) <> 32 THEN CT=CT+1: GOTO 4210
4250      M(V,H) = WK: CT=0
4260      MH=(H*8)-8: MV=(V*8)-8: DRAW "C3"
4270      DRAW "BM=MH;,=MV;": DRAW "BR4;F3;D4;L6;U4;E3"
4280 RETURN
4290 'MATCH TO SUPPLY FILE
4300    LX=LEN(SK$)
4310    FOR S = 1 TO SMAX
4320      IF (SK$ = LEFT$(S.NAME$(S),LX)) AND (S(S,P+2) <> 0)                                         THEN FOUND=1: GOTO 4350
4330    NEXT
4340    FOUND = 0: MSG$="YOU DON'T OWN A "+SK$: GOSUB 4600: MSG$="": GOSUB 4600:         GOTO 4350
4350 RETURN
4360 'GET INITIAL LOCATION OF PLAYERS
4370    PAINT (0,0),1,3
4380    V=1
4390    H=1
4400    FOR P = 9 TO 1 STEP -1
4410            IF P.NAME$(P) = "" THEN GOTO 4480
4420            M(V,H) = P+48
4430            P(P,6)=V
4440            P(P,7)=H
4450            LOCATE V,H
4460            PRINT CHR$(M(V,H));
4470            V=V+1
4480    NEXT
4490    LV=1
4500 RETURN
4510 'GET A REPLY
4520    REPLY$=INKEY$: IF REPLY$=""  THEN GOTO 4520
4530    IF LEN(REPLY$)=1 THEN GOTO 4590
4540    REPLY$=RIGHT$(REPLY$,1)
4550    IF ASC(REPLY$)=72 THEN REPLY$=CHR$(30): GOTO 4590
4560    IF ASC(REPLY$)=80 THEN REPLY$=CHR$(31): GOTO 4590
4570    IF ASC(REPLY$)=77 THEN REPLY$=CHR$(28): GOTO 4590
4580    IF ASC(REPLY$)=75 THEN REPLY$=CHR$(29)
4590 RETURN
4600 'MESSAGE
4610    IF TIMER < SV.TIMER! THEN GOTO 4610
4620    MS$=SPACE$(39)
4630    LSET MS$=MSG$
4640    LOCATE 25,1
4650    PRINT MS$;
4660    SV.TIMER!=TIMER+2
4670 RETURN
```
{% endraw %}

## DUNSHOP.BAS

{% raw %}
```bas
10 'DUNSHOP  THE SUPPLY SHOPPE - EQUIP CHARACTERS
20   SCREEN 3
30   KEY OFF
40      WIDTH 20
50      COLOR 1,4
60      CLS
70      LOCATE 4,1
80      PRINT "       THE"
90      LOCATE 7,1
100     PRINT "      SUPPLY"
110     LOCATE 10,1
120     PRINT "      SHOPPE"
130 'KILL TIME
140     SV.TIMER = TIMER+5
150     GOSUB 490 'OPEN FILES
160     IF TIMER < SV.TIMER THEN GOTO 160
170 'PRINT MENU
180     SCREEN 1
190     WIDTH 40
200     COLOR 4,1
210     CLS
220     LOCATE 3,1
230     PRINT "           THE SUPPLY SHOPPE"
240     PRINT
250     PRINT "    1. BUY SUPPLIES"
260     PRINT
270     PRINT "    2. SELL SUPPLIES"
280     PRINT
290     PRINT "    3. ADD A NEW ITEM TO THE STORE"
300     PRINT
310     PRINT "    4. CHANGE AN ITEM IN THE STORE"
320     PRINT
330     PRINT "    5. LIST SUPPLIES"
340     PRINT
350     PRINT "    9. END"
360     GOSUB 440 'GET REPLY
370     IF REPLY$ = "1" THEN GOSUB 590:  GOTO 170
380     IF REPLY$ = "2" THEN GOSUB 1150: GOTO 170
390      IF REPLY$ = "3" THEN GOSUB 1740: GOTO 170
400      IF REPLY$ = "4" THEN GOSUB 2380: GOTO 170
410     IF REPLY$ = "5" THEN GOSUB 2780: GOTO 170
420     IF REPLY$ ="9" THEN GOTO 2220
430     GOTO 170
440 'GET REPLY
450     DEF SEG=0: POKE 1050,PEEK(1052) 'CLEAR KEYBOARD BUFFER
460     REPLY$ = INKEY$
470     IF REPLY$ = "" THEN GOTO 460
480 RETURN
490 'OPEN FILES
500     OPEN "DUNCHAR" AS #1 LEN=122
510     FIELD #1,2 AS STRN$,2 AS INTL$,2 AS WIS$,2 AS DEX$,2 AS CON$,2 AS CHA$, 10 AS CLAS$,2 AS HIT$,4 AS MONEY$,2 AS LVL$,2 AS ARM$,2 AS SV.POISON$,2 AS SV.MAGIC$,2 AS SV.STONE$,2 AS SV.DRAG$,2 AS SV.SPELL$,4 AS EXPR$,24 AS NM$,7 AS ALIGN$,45 AS D$
520     OPEN "DUNSHOP" AS #2 LEN=44
530     FIELD #2,2 AS SID$,1 AS SCLASS$,15 AS SNAME$,2 AS SCOST$,2 AS SDAM$,2 AS SWT$,2 AS P1$,2 AS P2$,2 AS P3$,2 AS P4$,2 AS P5$,2 AS P6$,2 AS P7$,2 AS P8$,2 AS P9$,2 AS P10$
540 '
550 '    DAMAGE IS ARMOR CLASS FOR ARMOR, CHARACTER TYPE FOR SPELLS
560 '    WEIGHT IS LEVEL FOR SPELLS
570 '
580 RETURN
590 'BUY SUPPLIES
600     GOSUB 2260 'GET PLAYER
610     CLS: PRINT "          BUY SUPPLIES"
620    PRINT "YOU HAVE";CVS(MONEY$);"GOLD PIECES"
630     LOCATE 25,1: PRINT "TO BUY ENTER HOW MANY,TO SKIP HIT SPACE";:LOCATE 2,1
640     LET SNO=0
650 'GO THRU FILE
660     SNO=SNO+1
670     GET #2,SNO
680     IF SID$ <> "DS" THEN GOTO 1120
690    IF LEFT$(SNAME$,5)="CURSE" OR LEFT$(SNAME$,5)="MAGIC" THEN GOTO 650
700     IF CLAS$="CLERIC    " AND (SNO=5 OR SNO=8 OR SNO=9 OR SNO=10 OR SNO=11)            GOTO 650
710     IF SCLASS$ <> "S" THEN GOTO 870
720     ON RNO GOTO 730,740,750,760,770,780,790,800,810,820
730      SQUAN = CVI(P1$): GOTO 830
740      SQUAN = CVI(P2$): GOTO 830
750      SQUAN = CVI(P3$): GOTO 830
760      SQUAN = CVI(P4$): GOTO 830
770      SQUAN = CVI(P5$): GOTO 830
780      SQUAN = CVI(P6$): GOTO 830
790      SQUAN = CVI(P7$): GOTO 830
800      SQUAN = CVI(P8$): GOTO 830
810      SQUAN = CVI(P9$): GOTO 830
820      SQUAN = CVI(P10)$): GOTO 830
830     IF CLAS$="CLERIC    " AND CVI(SDAM$) = 1 THEN GOTO 860
840    IF CVI(SDAM$) <> 3 THEN GOTO 650
850     IF CLAS$="ELF       " OR CLAS$="MAGIC-USER" THEN GOTO 860                         ELSE GOTO 650
860     IF CVI(SWT$) > CVI(LVL$) THEN GOTO 650
870     PRINT SNAME$;"COST";CVI(SCOST$);"WEIGHT";CVI(SWT$)
880     GOSUB 440
890     IF REPLY$ = " " THEN GOTO 650
900    QUAN=VAL(REPLY$)
910     IF QUAN=0 THEN GOTO 650
920     IF SCLASS$ <> "S" THEN GOTO 950
930    MAX.SPELLS = (CVI(LVL$)-CVI(SWT$))+1
940    IF (QUAN+SQUAN) > MAX.SPELLS THEN PRINT "YOU CAN ONLY GET ";MAX.SPELLS-SQUAN: GOTO 880
950     PRICE = QUAN * CVI(SCOST$)
960     IF PRICE > CVS(MONEY$) THEN PRINT "YOU CAN'T AFFORD ";QUAN:                       PRINT "YOU HAVE ";CVS(MONEY$)";GOLD PIECES":  GOTO 880
970     LSET MONEY$ = MKS$(CVS(MONEY$) - PRICE)
980    PRINT "YOU HAVE ";CVS(MONEY$);"GOLD PIECES"
990     ON RNO GOTO 1000,1010,1020,1030,1040,1050,1060,1070,1080,1090
1000     LSET P1$ = MKI$(QUAN + CVI(P1$)): GOTO 1100
1010      LSET P2$ = MKI$(QUAN + CVI(P2$)): GOTO 1100
1020      LSET P3$ = MKI$(QUAN + CVI(P3$)): GOTO 1100
1030      LSET P4$ = MKI$(QUAN + CVI(P4$)): GOTO 1100
1040      LSET P5$ = MKI$(QUAN + CVI(P5$)): GOTO 1100
1050      LSET P6$ = MKI$(QUAN + CVI(P6$)): GOTO 1100
1060      LSET P7$ = MKI$(QUAN + CVI(P7$)): GOTO 1100
1070      LSET P8$ = MKI$(QUAN + CVI(P8$)): GOTO 1100
1080      LSET P9$ = MKI$(QUAN + CVI(P9$)): GOTO 1100
1090      LSET P10$ = MKI$(QUAN + CVI(P10$)): GOTO 1100
1100     PUT #2,SNO
1110     GOTO 650
1120 'END OF SHOPPING
1130     PUT #1,RNO
1140 RETURN
1150 'SELL SUPPLIES
1160     GOSUB 2260
1170     CLS: PRINT "          SELL SUPPLIES"
1180     LOCATE 25,1: PRINT "TO SELL ENTER HOW MANY, SPACE TO SKIP";: LOCATE 2,1
1190     LET SNO=0
1200 'GO THRU FILE
1210     SNO=SNO+1
1220     GET #2,SNO
1230     IF SID$ <> "DS" THEN GOTO 1680 'END OF FILE
1240     ON RNO GOTO 1250,1260,1270,1280,1290,1300,1310,1320,1330,1340
1250     QUAN = CVI(P1$): GOTO 1350
1260     QUAN = CVI(P2$): GOTO 1350
1270      QUAN = CVI(P3$): GOTO 1350
1280      QUAN = CVI(P4$): GOTO 1350
1290      QUAN = CVI(P5$): GOTO 1350
1300      QUAN = CVI(P6$): GOTO 1350
1310      QUAN = CVI(P7$): GOTO 1350
1320      QUAN = CVI(P8$): GOTO 1350
1330      QUAN = CVI(P9$): GOTO 1350
1340      QUAN = CVI(P10)$): GOTO 1350
1350    IF QUAN=0 THEN GOTO 1200
1360    PRINT "YOU HAVE";QUAN;SNAME$;"COST";CVI(SCOST$);
1370    GOSUB 440
1380    IF (VAL(REPLY$) > 0) AND (LEFT$(SNAME$,5)="CURSE") THEN PRINT "DON'T YOU WISH": GOTO 1360
1390    IF VAL(REPLY$) => QUAN THEN GOTO 1480
1400    IF CLAS$="CLERIC    " AND (SNO=5 OR SNO=8 OR SNO=9 OR SNO=10 OR SNO=11            OR SNO=34) THEN PRINT "CLERICS CAN'T USED EDGED WEAPONS": GOTO 1360
1410    IF SCLASS$ <> "S" THEN GOTO 1480
1420    IF CLAS$="CLERIC    " AND CVI(SDAM$) = 1 THEN GOTO 1450
1430    IF CVI(SDAM$) <> 3 THEN PRINT "YOU CAN'T USE THIS SPELL": GOTO 1360
1440    IF CLAS$="ELF       " OR CLAS$="MAGIC-USER" THEN GOTO 1450                        ELSE PRINT "YOU CAN'T USE THIS SPELL": GOTO 1360
1450    IF CVI(SWT$) > CVI(LVL$) THEN PRINT "YOU CAN'T USE THIS SPELL":                   GOTO 1360
1460    MAX.SPELLS = (CVI(LVL$)-CVI(SWT$))+1
1470    IF (QUAN-VAL(REPLY$)) > MAX.SPELLS THEN PRINT "YOU MUST SELL ";(QUAN-MAX.SPELLS):                  GOTO 1360
1480    IF REPLY$ = " " THEN GOTO 1200
1490    LET SQUAN = VAL(REPLY$)
1500    IF SQUAN = 0 THEN GOTO 1200
1510    PRICE = SQUAN * CVI(SCOST$)
1520    IF SQUAN > QUAN THEN PRINT "YOU DON'T HAVE ";SQUAN: GOTO 1370
1530    LSET MONEY$ = MKS$(CVS(MONEY$) + PRICE)
1540    QUAN = QUAN - SQUAN
1550    ON RNO GOTO 1560,1570,1580,1590,1600,1610,1620,1630,1640,1650
1560    LSET P1$ = MKI$(QUAN): GOTO 1660
1570     LSET P2$ = MKI$(QUAN): GOTO 1660
1580     LSET P3$ = MKI$(QUAN): GOTO 1660
1590     LSET P4$ = MKI$(QUAN): GOTO 1660
1600     LSET P5$ = MKI$(QUAN): GOTO 1660
1610     LSET P6$ = MKI$(QUAN): GOTO 1660
1620     LSET P7$ = MKI$(QUAN): GOTO 1660
1630     LSET P8$ = MKI$(QUAN): GOTO 1660
1640     LSET P9$ = MKI$(QUAN): GOTO 1660
1650     LSET P10$ = MKI$(QUAN): GOTO 1660
1660    PUT #2,SNO
1670    GOTO 1200
1680 'END OF FILE
1690    PRINT "YOU HAVE";CVS(MONEY$);"GOLD PIECES"
1700    SV.TIMER!=TIMER+2
1710    IF TIMER < SV.TIMER! GOTO 1710
1720    PUT #1,RNO
1730 RETURN
1740 'ADD A NEW ITEM
1750    CLS: PRINT "          ADD A NEW ITEM"
1760    LOCATE 25,1: PRINT "ENTER END TO QUIT";: LOCATE 2,1
1770    PRINT
1780    PRINT
1790    PRINT "ENTER NAME OF ITEM"
1800    LOCATE 5,1: PRINT "..............."
1810    LOCATE 5,1
1820    INPUT "",WNAME$
1830    IF WNAME$ = "END" THEN GOTO 2210
1840    INPUT "ENTER COST (IN GOLD PIECES) ",WCOST
1850    PRINT "ENTER TYPE  A=ARMOR, W=WEAPON"
1860    PRINT "      E=EQUIPMENT, S=SPELL"
1870    INPUT WCLASS$
1880    IF WCLASS$ <> "A" AND WCLASS$ <> "W" AND WCLASS$ <> "E" AND                       WCLASS$ <> "S" THEN PRINT "YOU MUST ENTER A-W-E-S": GOTO 1850
1890    IF WCLASS$ = "A" THEN INPUT "ENTER ARMOR CLASS ",WDAM
1900    IF WCLASS$ = "W" THEN INPUT "ENTER DAMAGE POINTS ",WDAM
1910    IF WCLASS$ <> "S" THEN GOTO 1950
1920    PRINT "ENTER PLAYER CLASS "
1930    PRINT "1=CLERIC 3=ELF & MAGIC-USER"
1940    INPUT WDAM
1950    IF WCLASS$ <> "S" THEN INPUT "ENTER WEIGHT (IN GOLD PIECES) ",WWT                  ELSE INPUT "ENTER LEVEL ",WWT
1960    PRINT "IS THE ABOVE OK?"
1970    GOSUB 440
1980    IF REPLY$ <> "Y" THEN GOTO 1740
1990 'FIND END OF FILE
2000    SNO = SNO+1
2010    GET #2,SNO
2020    IF SID$ = "DS" THEN GOTO 1990
2030    LSET SID$ = "DS"
2040    LSET SCLASS$ = WCLASS$
2050    LSET SNAME$ = WNAME$
2060    LSET SCOST$ = MKI$(WCOST)
2070    LSET SDAM$ = MKI$(WDAM)
2080    LSET SWT$ = MKI$(WWT)
2090    LSET P1$ = MKI$(0)
2100    LSET P2$ = MKI$(0)
2110    LSET P3$ = MKI$(0)
2120    LSET P4$ = MKI$(0)
2130    LSET P5$ = MKI$(0)
2140    LSET P6$ = MKI$(0)
2150    LSET P7$ = MKI$(0)
2160    LSET P8$ = MKI$(0)
2170    LSET P9$ = MKI$(0)
2180    LSET P10$ = MKI$(0)
2190    PUT #2,SNO
2200    GOTO 1740
2210  RETURN
2220 'END
2230    CLS
2240    CLOSE
2250    CHAIN "MENU",1000
2260 'GET PLAYER
2270    CLS
2280    PRINT "ENTER YOUR PLAYER NUMBER "
2290    GOSUB 440: RNO=VAL(REPLY$)
2300    IF RNO < 1 OR RNO > 9 THEN PRINT "ENTER A NUMBER FROM 1 TO 9 ": GOTO 2280
2310    GET #1,RNO
2320    IF NM$ = SPACE$(24) THEN PRINT "THAT NUMBER IS NOT VALID": GOTO 2280
2330    PRINT "YOUR ARE ";NM$;"?"
2340    PRINT "Yes/No"
2350    GOSUB 440
2360    IF REPLY$ <> "Y" THEN GOTO 2260
2370 RETURN
2380 'CHANGE AN ITEM
2390    CLS
2400    PRINT "         CHANGE AN ITEM"
2410    PRINT
2420    PRINT "ENTER NAME OF ITEM (ENTER E TO END)"
2430    INPUT WNAME$
2440    IF WNAME$ = "E" THEN GOTO 2770 'END
2450    SKNM$=SPACE$(15)
2460    LSET SKNM$=WNAME$
2470    SNO=0
2480 'LOOK FOR ITEM
2490    SNO=SNO+1
2500    GET #2,SNO
2510    IF SID$ = "DS" THEN GOTO 2550
2520    PRINT SKNM$;" NOT FOUND"
2530    FOR X=1 TO 500: NEXT X 'KILL TIME
2540    GOTO 2380
2550    IF SNAME$ <> SKNM$ THEN GOTO 2480
2560    PRINT "1. ITEM ";SNAME$
2570    PRINT "2. CLASS ";SCLASS$
2580    PRINT "3. PRICE ";CVI(SCOST$)
2590    IF SCLASS$ = "W" THEN PRINT "4. DAMAGE ";CVI(SDAM$)
2600    IF SCLASS$ = "A" THEN PRINT "4. ARMOR CLASS ";CVI(SDAM$)
2610    IF SCLASS$ = "S" THEN PRINT "4. CHARACTER  ";CVI(SDAM$)
2620    IF SCLASS$ = "S" THEN PRINT "5. LEVEL "                                             ELSE PRINT "5. WEIGHT ";CVI(SWT$)
2630    PRINT "ENTER NUMBER OF FIELD TO CHANGE"
2640    INPUT CFLD
2650    IF CFLD=1 THEN INPUT "ENTER NEW NAME ";WNAME$: LSET SNAME$=WNAME$:                GOTO 2750
2660    IF CFLD=3 THEN INPUT "ENTER NEW PRICE ";WCOST: LSET SCOST$=MKI$(WCOST):           GOTO 2750
2670    IF CFLD=4 THEN INPUT "ENTER NEW DAMAGE/ARM CLASS/CHAR ";WDAM: LSET SDAM$=MKI$(WDAM):           GOTO 2750
2680    IF CFLD=5 THEN INPUT "ENTER NEW WEIGHT/LVL ";WWT: LSET SWT$=MKI$(WWT):               GOTO 2750
2690    IF CFLD <> 2 THEN GOTO 2560
2700    PRINT "ENTER TYPE  A=ARMOR, W=WEAPON"
2710    PRINT "      E=EQUIPMENT, S=SPELL"
2720    INPUT WCLASS$
2730    IF WCLASS$ <> "A" AND WCLASS$ <> "W" AND WCLASS$ <> "E" AND                       WCLASS$ <> "E" THEN PRINT "YOU MUST ENTER A-W-E-S": GOTO 2720
2740    LSET SCLASS$=WCLASS$
2750    PUT #2,SNO
2760    GOTO 2380
2770 RETURN
2780 'LIST SUPPLIES
2790    LPRINT "          THE SUPPLY SHOP  ";DATE$
2800    LPRINT: LPRINT
2810    LPRINT "CLASS","PRICE","DAM/AC/LVL","WEIGHT"
2820    SNO=0
2830 'LIST ITEMS
2840    SNO=SNO+1
2850    GET #2,SNO
2860    IF SID$ <> "DS" THEN GOTO 2910
2870    MSG$=STR$(SNO)+" "+SNAME$
2880    LPRINT MSG$
2890    LPRINT SCLASS$,CVI(SCOST$),CVI(SDAM$),CVI(SWT$)
2900    GOTO 2830
2910 RETURN
```
{% endraw %}

## FILES.DOC

{% raw %}
```

#######################################################################

         DIRECTORY OF FILES

#######################################################################

COMBAT.BAS    TACTICAL COMBAT SIMULATION
COMBAT.DOC    DOCUMENTATION FOR COMBAT GAME
DUN.DOC       DOCUMENTATION FOR DUNGEON QUEST
DUNCHAR       DATA FILE OF PLAYERS FOR DUNGEON QUEST
DUNCHAR.BAS   UPDATE PROGRAM FOR PLAYER FILE
DUNEND.BAS    FILE UPDATE PROGRAM FOR DUNGEON QUEST 
DUNMAP.BAS    MAP CREATION UTILITY 
DUNMAP1-9     MAPS OF DUNGEONS USED BY DUNGEON QUEST
DUNPLAY.BAS   MAIN PLAY PROGRAM OF DUNGEON QUEST
DUNQUEST.BAS  INITILIZATION PROGRAM TO LOAD ARRAYS FOR PLAY
DUNSHOP       DATA FILE OF SUPPLIES, ETC
DUNSHOP.BAS   FILE UPDATE PROGRAM FOR SUPPLY FILE
MAP           DATA FILE OF WORLD MAP FOR WAR PROGRAM
MENU.BAS      MAIN MENU PROGRAM FOR DUNGEON QUEST
WAR.BAS       GLOBAL THERMONUCLEAR WAR GAME
WAR.DOC       DOCUMENTATION FOR WAR GAME

```
{% endraw %}

## FILES354.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 354  PC Jr. Games                                      v1   DS
-----------------------------------------------------------------------
 
Games on this disk will work ONLY on the PC Jr. A combat simulation
game, another dugeons and dragons type game, and Global Thermonuclear
War.
 
 
COMBAT   BAS  Tactical combat simulation
COMBAT   DOC  Documentation for combat game
------------
DUN      DOC  Documentation for dungeon quest
DUNCHAR       Data file of players for dungeon quest
DUNCHAR  BAS  Update program for player file
DUNEND   BAS  File update program for dungeon quest
DUNMAP   BAS  Map creation utility
DUNMAP   1-9  Maps of dungeons used by dungeon quest
DUNPLAY  BAS  Main play program of dungeon quest
DUNQUEST BAS  Initilization program to load arrays for play
DUNSHOP       Data file of supplies, etc
DUNSHOP  BAS  File update program for supply file
MAP           Data file of world map for war program
MENU     BAS  Main menu program for dungeon quest
------------
WAR      BAS  Global thermonuclear war game
WAR      DOC  Documentation for war game
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MENU.BAS

{% raw %}
```bas
10 'MENU - DUNGEON MASTERS ASSISTANT - MAIN MENU
20      SCREEN 3
30      KEY OFF
40      WIDTH 20
50      COLOR 1,4
60      CLS
70      LOCATE 4,1
80      PRINT "       THE"
90      LOCATE 7,1
100     PRINT "      DUNGEON"
110     LOCATE 10,1
120     PRINT "      MASTERS"
130     LOCATE 13,1
140     PRINT "     ASSISTANT"
150     LOCATE 22,1
160     PRINT "BY BILL CHELMOWSKI"
170 'KILL TIME
180     FOR X = 1 TO 1000
190       NEXT X
200 'PRINT MENU
210     SCREEN 1
220     WIDTH 40
230     COLOR 4,1
240     CLS
250     LOCATE 3,1
260     PRINT "     THE DUNGEON MASTERS ASSISTANT"
270     LOCATE 6,10
280     PRINT "1. PLAYER CHARACTERS"
290     LOCATE 8,10
300     PRINT "2. THE SUPPLY SHOPPE"
310     LOCATE 10,10
320     PRINT "3. THE QUEST"
330     LOCATE 12,10
340     PRINT "9. THE END"
350 'GET REPLY
360     DEF SEG=0: POKE 1050,PEEK(1052)  'CLEAR KEYBOARD BUFFER
370     LET REPLY$ = INKEY$
380     IF REPLY$ = "" THEN GOTO 370
390     IF REPLY$ = "1" THEN CHAIN "DUNCHAR"
400     IF REPLY$ = "2" THEN CHAIN "DUNSHOP"
410     IF REPLY$ = "3" THEN CHAIN "DUNQUEST"
420     IF REPLY$ = "9" THEN GOTO 440
430     GOTO 370
440 'END
450     CLS
460     SYSTEM
1000 'RETURN POINT
1110    GOTO 200   'PRINT MENU
```
{% endraw %}

## WAR.BAS

{% raw %}
```bas
10 'WAR  GLOBAL THERMONUCLEAR WAR
20 DEFINT A-Z
30 RANDOMIZE TIMER
40 KEY OFF
50 GOSUB 8410 'TITLE
60 GOSUB 330 'SETUP TABLES, VARIABLES
70  FOR SIDE = 1 TO 2
80    GOSUB 780 'ESCALATION
90  NEXT
100  IF FIRST =  0 THEN GOTO 70
110 GOSUB 2390 'SYMBOLS
120 GOSUB 6480 'SHOW COMMANDS
130 GOSUB 2670 'LOAD & DRAW MAP
140 GOSUB 2770 'DRAW CITIES
150 GOSUB 4330 'PLACE SYMBOLS
160 FOR SIDE = 1 TO 2
170   FOR X = 1 TO 7
180     FOR Y=1 TO WEAPONS(X,SIDE)
190       Z=RANGE(X,1) + (Y-1)
200       T.STAT(Z,SIDE)=1
210     NEXT Y
220   NEXT X
230 NEXT SIDE
240 SIDE = FIRST
250 FOR X=83 TO 106
260   T.STAT(X,1)=1: T.STAT(X,2)=1
270 NEXT X
280 GOSUB 6700 'PLAY PLAYERS TURN
290 IF SIDE=1 THEN SIDE=2 ELSE SIDE=1
300 GOTO 280
310 END
320 '
330 'SETUP TABLES, VARIABLES
340 '
350 DIM WEAPONS(7,2)
360 DIM COST(7,2)
370 COST(1,1)=3000: COST(1,2)=3000
380 COST(2,1)=200: COST(2,2)=200
390 COST(3,1)=2: COST(3,2)=2
400 COST(4,1)=300: COST(4,2)=300
410 COST(5,1)=100: COST(5,2)=100
420 COST(6,1)=500: COST(6,2)=500
430 COST(7,1)=160: COST(7,2)=160
440 DIM W.NAME$(7)
450 W.NAME$(1)="1. BALISTIC SUBMARINES"
460 W.NAME$(2)="2. ICBM'S"
470 W.NAME$(3)="3. CRUISE MISSILES"
480 W.NAME$(4)="4. BOMBERS"
490 W.NAME$(5)="5. AIRBORNE HQ"
500 W.NAME$(6)="6. UNDERGROUND HQ"
510 W.NAME$(7)="7. AIR DEFENSE"
520 DIM RANGE(8,2) 'SUBSCRIPT RANGE FOR TYPES
530 RANGE(1,1)=1: RANGE(1,2)=16
540 RANGE(2,1)=17: RANGE(2,2)=28
550 RANGE(3,1)=29: RANGE(3,2)=48
560 RANGE(4,1)=49: RANGE(4,2)=60
570 RANGE(5,1)=61: RANGE(5,2)=62
580 RANGE(6,1)=63: RANGE(6,2)=64
590 RANGE(7,1)=65: RANGE(7,2)=82
600 RANGE(8,1)=83: RANGE(8,2)=106
610 DIM MAX(7)
620 MAX(1)=2
630 MAX(2)=12
640 MAX(3)=20
650 MAX(4)=12
660 MAX(5)=2
670 MAX(6)=2
680 MAX(7)=18
690 'ARRAYS SHOW STATUS  0=UNTOUCHED 1-998=LAUNCHED 999=DESTROYED
700 DIM STAT(106,2)
710 DIM LCN(106,2,2)
720 DIM SV(8002)
730 DIM TGT(106,2,3) 'TARGET LOCATIONS & SUBSCRIPT
740 DIM T.STAT(106,2) '1=EXISTS 2=TARGETED
750 US.BUDGET=16000*((90+(INT(RND*20)+1))/100)
760 RED.BUDGET=16000*((90+(INT(RND*20)+1))/100)
770 RETURN
780 '
790 'ESCALATION
800 '
810 IF SIDE = 1 THEN GOSUB 1700 ELSE GOSUB 1290
820 GOSUB 9200
830 PRINT ,,,"9. START CONFLICT"
840 IF SIDE=1 THEN PRINT "MILITARY BUDGET (IN MILLIONS OF DOLLARS)",US.BUDGET
850 IF SIDE=2 THEN PRINT "MILITARY BUDGET (IN MILLIONS OF RUBLES)",RED.BUDGET
860 PRINT: PRINT
870 XFACT=0: COST=0: QUAN=1
880 INPUT "WHAT ITEM ",I
890 IF I=0 THEN GOTO 1150'END
900 IF I<>9 THEN GOTO 930
910 IF FIRST = 0 THEN FIRST = SIDE 'SAVE SIDE THAT MOVES FIRST
920 GOTO 1150
930 IF I>7 THEN GOTO 880
940 COST=COST(I,SIDE)
950 IF WEAPONS(I,SIDE) = 0 THEN GOTO 980
960 INPUT "HOW MANY ",QUAN
970 GOTO 1010
980 XFACT=(RND*100)+1: COST=COST+(COST*(XFACT/100))
990 IF XFACT=100 THEN PRINT "BAD NEWS,RESEARCH FAILED":                               GOTO 1010
1000 COST(I,SIDE)=COST(I,SIDE)+((COST(I,SIDE)*(XFACT/100))/2)
1010 IF SIDE=1 THEN BUDGET=US.BUDGET ELSE BUDGET=RED.BUDGET
1020 IF (COST*QUAN) > BUDGET THEN LOCATE 23,26: PRINT "YOU DON'T HAVE THE MONEY": GOTO 1180
1030 IF XFACT=100 THEN GOTO 1180
1040 IF (WEAPONS(I,SIDE)+QUAN) =< MAX(I) THEN GOTO 1080
1050 QUAN = MAX(I)-WEAPONS(I,SIDE)
1060 LOCATE 22,15: PRINT "YOUR FACTORIES CAN ONLY PRODUCE ";QUAN:                       SV.TIMER!=TIMER+2
1070 IF TIMER < SV.TIMER! THEN GOTO 1070
1080 BUDGET=BUDGET-(COST*QUAN)
1090 IF SIDE=1 THEN US.BUDGET=BUDGET ELSE RED.BUDGET=BUDGET
1100 IF XFACT=100 THEN GOTO 1150
1110 WEAPONS(I,SIDE)=WEAPONS(I,SIDE)+QUAN
1120 GOSUB 9200
1130 IF I<>6 THEN GOTO 1150
1140 IF STAT(63,SIDE)=0 THEN STAT(63,SIDE)=1                                           ELSE STAT(64,SIDE)=1
1150 LOCATE 21,26: PRINT "ACTUAL COST WAS ";COST;" EACH "
1160 IF SIDE=1 THEN PRINT "MILITARY BUDGET (IN MILLIONS OF DOLLARS)",US.BUDGET
1170 IF SIDE=2 THEN PRINT "MILITARY BUDGET (IN MILLIONS OF RUBLES)",RED.BUDGET
1180 GOSUB 1210 'WAIT
1190 RETURN
1200 '
1210 'WAIT FOR REPLY
1220 '
1230 LOCATE 25,1: PRINT "HIT ANY KEY TO CONTINUE";
1240 DEF SEG=0: POKE(1050),PEEK(1052) 'CLEAR K/B BUFFER
1250 REPLY$=INKEY$: IF REPLY$="" THEN GOTO 1250
1260 RETURN
1270 '
1280 '
1290 'DRAW RED FLAG
1300      SCREEN 1: COLOR 0,0: CLS
1310      PALETTE 1,14
1320      PALETTE 2,4
1330      PALETTE 3,7
1340      DEFINT A-Z
1350      LINE (20,20)-(300,180),2,BF
1360 DRAW "DM65,35"
1370 STAR$="M+7,17 M-17,-12 M+20,0 M-17,12 M+7,-17"
1380 DRAW "C1;BM-2,0;XSTAR$;"
1390  DRAW "BD02"
1400  DRAW "P1,1"
1410 DRAW "BD08"
1420 DRAW "P1,1"
1430 DRAW "BL5;BU3"
1440 DRAW "P1,1"
1450 DRAW "BR10"
1460 DRAW "P1,1"
1470 DRAW "BD04BL2"
1480 DRAW "P1,1"
1490 DRAW "BL07"
1500 DRAW "P1,1"
1510     CIRCLE (95,75),30,1,4.1,1.35
1520     CIRCLE (95,75),29,1,4.1,1.4
1530     CIRCLE (95,75),28,1,4.1,1.45
1540     CIRCLE (95,75),27,1,4.1,1.5
1550     LINE (80,94)-(76,104),1
1560     LINE (81,94)-(77,104),1
1570     LINE (82,94)-(78,104),1
1580     LINE (98,78)-(101,72),1
1590     LINE (98,79)-(102,71),1
1600     LINE (98,79)-(103,70),1
1610     LINE (98,79)-(104,69),1
1620     LINE (97,77)-(104,69),1
1630     LINE (100,74)-(140,100),1
1640     LINE (101,73)-(140,99),1
1650 SV.TIMER!=TIMER+2
1660 IF SV.TIMER!>TIMER THEN GOTO 1660
1670 RETURN
1680 '
1690 '
1700 ' DRAW US FLAG
1710 '
1720      SCREEN 1: COLOR 0,0: CLS
1730      PALETTE 1,4
1740      PALETTE 2,7
1750      PALETTE 3,1
1760      LINE (20,20)-(280,150),1,BF
1770      LINE (20,20)-(120,80),3,BF
1780      FOR X=30 TO 70 STEP 20
1790        LINE (120,X)-(280,X+10),2,BF
1800     NEXT
1810     FOR X=90 TO 130 STEP 20
1820       LINE (20,X)-(280,X+10),2,BF
1830     NEXT X
1840     FOR X=25 TO 115 STEP 10
1850       FOR Y = 25 TO 75 STEP 10
1860         PSET (X,Y),2
1870       NEXT Y
1880     NEXT X
1890 SV.TIMER!=TIMER+2
1900 IF SV.TIMER!>TIMER THEN GOTO 1900
1910 RETURN
1920 '
1930 '
1940 'DRAW ICBM
1950     DRAW "C=SIDE;"
1960     DRAW "BM=LCN(X,SIDE,1);,=LCN(X,SIDE,2);"
1970 DRAW "BR4"       'DRAW A MISSILE
1980 DRAW "D7 L3 E3 F3 L3"
1990 RETURN
2000 '
2010 'DRAW SUB
2020     DRAW "C=SIDE;"
2030     DRAW "BM=LCN(X,SIDE,1);,=LCN(X,SIDE,2);"
2040 DRAW "BR3 BD3"    'DRAW A SUB
2050 DRAW "R2 D2 R3 L8 R3 U1"
2060 RETURN
2070 '
2080 '
2090 DRAW "BR3"    'DRAW AIRBORNE HQ
2100 DRAW "R1 D3 R3 D1 L3 D3 R1 L3 R1 U3 L3 U1 R3 U3"
2110 RETURN
2120 '
2130 'DRAW CRUISE MISSILE
2140     DRAW "C=SIDE;"
2150     DRAW "BM=LCN(X,SIDE,1);,=LCN(X,SIDE,2);"
2160 DRAW "BD3"  'DRAW A CRUISE MISSILE
2170 DRAW "R8 U4 G3 L2"
2180 RETURN
2190 '
2200 '
2210 DRAW "R3 D3 L3 U3" 'DRAW HQ
2220 RETURN
2230 '
2240 'DRAW AIR DEFENSE
2250     DRAW "C=SIDE;"
2260     DRAW "BM=LCN(X,SIDE,1);,=LCN(X,SIDE,2);"
2270 DRAW "BR7"  'DRAW AIR DEFENSE
2280 DRAW "G7 U3 R3 E3"
2290 RETURN
2300 '
2310 'DRAW A BOMBER
2320     DRAW "C=SIDE;"
2330     DRAW "BM=LCN(X,SIDE,1);,=LCN(X,SIDE,2);"
2340 DRAW "BD4"  'DRAW BOMBER
2350 DRAW "R2 E4 D3 R1 L1 D3 H3 L2 R7 D1 L8"
2360 RETURN
2370 '
2380 '
2390 'SYMBOLS USED
2400    SCREEN 1: COLOR 0,0: CLS
2410    PALETTE 1,1
2420    PALETTE 2,4
2430    PALETTE 3,14
2440    LOCATE 1,10: PRINT "SYMBOLS USED"
2450    DRAW "BM 32,16"
2460    GOSUB 1970 'DRAW MISSILE
2470    LOCATE 3,7: PRINT "ICBM"
2480    DRAW "BM 32,32": GOSUB 2040
2490    LOCATE 5,7: PRINT "BALISTIC SUBMARINE"
2500    DRAW "BM 32,48": GOSUB 2160
2510    LOCATE 7,7: PRINT "CRUISE MISSILE"
2520    DRAW "BM 32,64": GOSUB 2340
2530    LOCATE 9,7: PRINT "BOMBER"
2540    DRAW "BM 32,80": GOSUB 2270
2550    LOCATE 11,7: PRINT "AIR DEFENSE UNIT"
2560    DRAW "BM 32,96": GOSUB 2090
2570    LOCATE 13,7: PRINT "AIRBORNE HQ"
2580    DRAW "BM 32,112": GOSUB 2210
2590    LOCATE 15,7: PRINT "UNDERGROUND HQ"
2600    LOCATE 17,7
2610    PRINT "DUE TO MAP SCALE, A SYMBOL MAY "
2620    PRINT "REPRESENT SEVERAL CLOSELY SPACED"
2630    PRINT "UNITS."
2640    GOSUB 1210 'WAIT
2650 RETURN
2660 '
2670 'LOAD & DRAW MAP
2680 '
2690 OPEN "MAP" FOR INPUT AS #1
2700 CLS
2710 IF EOF(1) THEN GOTO 2750
2720 INPUT #1,PH,PV,H,V
2730 LINE (PH,PV)-(H,V),3
2740 GOTO 2710
2750 RETURN
2760 '
2770 '
2780 'DRAW CITIES
2790  DIM CITY$(24,2)
2800  DIM POP!(24,2)
2810  CITY$(1,1)="SEATTLE"
2820 POP!(1,1)=557087!
2830  CITY$(2,1)="SAN FRANCISCO"
2840 POP!(2,1)=742855!
2850  CITY$(3,1)="LOS ANGELES"
2860 POP!(3,1)=2479015!
2870  CITY$(4,1)="SAN DEIGO"
2880 POP!(4,1)=573224!
2890  CITY$(5,1)="PORTLAND"
2900 POP!(5,1)=372676!
2910  CITY$(6,1)="SALT LAKE CITY"
2920 POP!(6,1)=184454!
2930  CITY$(7,1)="EL PASO"
2940 POP!(7,1)=276687!
2950  CITY$(8,1)="DENVER"
2960 POP!(8,1)=493887!
2970  CITY$(9,1)="DALLAS"
2980 POP!(9,1)=679684!
2990  CITY$(10,1)="HOUSTON"
3000 POP!(10,1)=934219!
3010  CITY$(11,1)="MINNEAPOLIS"
3020 POP!(11,1)=482872!
3030  CITY$(12,1)="DULUTH"
3040 POP!(12,1)=106884!
3050  CITY$(13,1)="MILWAUKEE"
3060 POP!(13,1)=741324!
3070  CITY$(14,1)="CHICAGO"
3080 POP!(14,1)=3550404!
3090  CITY$(15,1)="ST. LOUIS"
3100 POP!(15,1)=750526!
3110  CITY$(16,1)="NEW ORLEANS"
3120 POP!(16,1)=1670144!
3130  CITY$(17,1)="DETROIT"
3140 POP!(17,1)=1670144!
3150  CITY$(18,1)="ATLANTA"
3160 POP!(18,1)=407600!
3170  CITY$(19,1)="BOSTON"
3180 POP!(19,1)=697197!
3190  CITY$(20,1)="NEW YORK"
3200 POP!(20,1)=6782304#
3210  CITY$(21,1)="PHILADELPHIA"
3220 POP!(21,1)=2002512!
3230  CITY$(22,1)="WASHINGTON D.C."
3240 POP!(22,1)=763956!
3250  CITY$(23,1)="SAVANNAH"
3260 POP!(23,1)=149245!
3270  CITY$(24,1)="CLEVELAND"
3280 POP!(24,1)=2519000!
3290  CITY$(1,2)="MURMANSK"
3300 POP!(1,2)=262000!
3310  CITY$(2,2)="LENINGRAD"
3320 POP!(2,2)=3636000!
3330  CITY$(3,2)="RIGA"
3340 POP!(3,2)=657000!
3350  CITY$(4,2)="MINSK"
3360 POP!(4,2)=707000!
3370  CITY$(5,2)="KIEV"
3380 POP!(5,2)=1332000!
3390  CITY$(6,2)="ODESSA"
3400 POP!(6,2)=735000!
3410  CITY$(7,2)="MOSCOW"
3420 POP!(7,2)=6427000!
3430  CITY$(8,2)="ARCHANGEL"
3440 POP!(8,2)=256000!
3450  CITY$(9,2)="KHARKOV"
3460 POP!(9,2)=1070000!
3470  CITY$(10,2)="VOLGOGRAD"
3480 POP!(10,2)=701000!
3490  CITY$(11,2)="KAMCHATSKIY"
3500 POP!(11,2)=701000!
3510  CITY$(12,2)="NIKOLAYEVSK"
3520 POP!(12,2)=701000!
3530  CITY$(13,2)="VLADIVOSTOK"
3540 POP!(13,2)=353000!
3550  CITY$(14,2)="YAKUTSK"
3560 POP!(14,2)=74000!
3570  CITY$(15,2)="IRKUTSK"
3580 POP!(14,2)=74000!
3590  CITY$(16,2)="KRASNOYARSK"
3600 POP!(16,2)=2614000!
3610  CITY$(17,2)="KHATANGA"
3620 POP!(17,2)=614000!
3630  CITY$(18,2)="TOMSK"
3640 POP!(18,2)=293000!
3650  CITY$(19,2)="OMSK"
3660 POP!(19,2)=733000!
3670  CITY$(20,2)="TSELINOGRAD"
3680 POP!(20,2)=150000!
3690  CITY$(21,2)="GORKI"
3700 POP!(21,2)=150000!
3710  CITY$(22,2)="KUYBYSHEV"
3720 POP!(22,2)=942000!
3730  CITY$(23,2)="DUDINKA"
3740 POP!(23,2)=942000!
3750  CITY$(24,2)="NOVOSIBIRSK"
3760 POP!(24,2)=1013000!
3770 LCN(83,1,1)=51    :LCN(83,1,2)=74
3780 LCN(84,1,1)=52    :LCN(84,1,2)=81
3790 LCN(85,1,1)=53    :LCN(85,1,2)=87
3800 LCN(86,1,1)=54    :LCN(86,1,2)=89
3810 LCN(87,1,1)=54    :LCN(87,1,2)=79
3820 LCN(88,1,1)=60    :LCN(88,1,2)=83
3830 LCN(89,1,1)=64    :LCN(89,1,2)=89
3840 LCN(90,1,1)=70    :LCN(90,1,2)=81
3850 LCN(91,1,1)=74    :LCN(91,1,2)=90
3860 LCN(92,1,1)=76    :LCN(92,1,2)=92
3870 LCN(93,1,1)=78    :LCN(93,1,2)=76
3880 LCN(94,1,1)=81    :LCN(94,1,2)=74
3890 LCN(95,1,1)=83    :LCN(95,1,2)=79
3900 LCN(96,1,1)=83    :LCN(96,1,2)=80
3910 LCN(97,1,1)=81    :LCN(97,1,2)=82
3920 LCN(98,1,1)=80    :LCN(98,1,2)=93
3930 LCN(99,1,1)=88    :LCN(99,1,2)=79
3940 LCN(100,1,1)=88    :LCN(100,1,2)=88
3950 LCN(101,1,1)=99    :LCN(101,1,2)=79
3960 LCN(102,1,1)=102   :LCN(102,1,2)=76
3970 LCN(103,1,1)=101   :LCN(103,1,2)=75
3980 LCN(104,1,1)=95    :LCN(104,1,2)=85
3990 LCN(105,1,1)=90    :LCN(105,1,2)=92
4000 LCN(106,1,1)=93    :LCN(106,1,2)=76
4010 LCN(83,2,1)=194   :LCN(83,2,2)=40
4020 LCN(84,2,1)=193   :LCN(84,2,2)=54
4030 LCN(85,2,1)=185   :LCN(85,2,2)=57
4040 LCN(86,2,1)=194   :LCN(86,2,2)=60
4050 LCN(87,2,1)=196   :LCN(87,2,2)=64
4060 LCN(88,2,1)=183   :LCN(88,2,2)=69
4070 LCN(89,2,1)=198   :LCN(89,2,2)=58
4080 LCN(90,2,1)=200   :LCN(90,2,2)=42
4090 LCN(91,2,1)=196   :LCN(91,2,2)=65
4100 LCN(92,2,1)=204   :LCN(92,2,2)=67
4110 LCN(93,2,1)=306   :LCN(93,2,2)=63
4120 LCN(94,2,1)=281   :LCN(94,2,2)=63
4130 LCN(95,2,1)=282   :LCN(95,2,2)=77
4140 LCN(96,2,1)=278   :LCN(96,2,2)=48
4150 LCN(97,2,1)=250   :LCN(97,2,2)=60
4160 LCN(98,2,1)=230   :LCN(98,2,2)=55
4170 LCN(99,2,1)=256   :LCN(99,2,2)=34
4180 LCN(100,2,1)=239   :LCN(100,2,2)=55
4190 LCN(101,2,1)=226   :LCN(101,2,2)=59
4200 LCN(102,2,1)=223   :LCN(102,2,2)=63
4210 LCN(103,2,1)=210   :LCN(103,2,2)=60
4220 LCN(104,2,1)=214   :LCN(104,2,2)=67
4230 LCN(105,2,1)=236   :LCN(105,2,2)=34
4240 LCN(106,2,1)=237   :LCN(106,2,2)=58
4250 FOR SIDE = 1 TO 2
4260   FOR X=1 TO 24
4270    Y=X+82
4280     PSET (LCN(Y,SIDE,1),LCN(Y,SIDE,2)),SIDE
4290   NEXT X
4300 NEXT SIDE
4310 RETURN
4320 '
4330 '
4340 'PLACE SYMBOLS ON MAP
4350 '
4360 'SUBS
4370 LCN(1,1,1)=300: LCN(1,1,2)=84
4380 LCN(2,1,1)=300: LCN(2,1,2)=84
4390 LCN(3,1,1)=300: LCN(3,1,2)=84
4400 LCN(4,1,1)=300: LCN(4,1,2)=84
4410 LCN(5,1,1)=300: LCN(5,1,2)=84
4420 LCN(6,1,1)=300: LCN(6,1,2)=84
4430 LCN(7,1,1)=300: LCN(7,1,2)=84
4440 LCN(8,1,1)=300: LCN(8,1,2)=84
4450 LCN(9,1,1)=170: LCN(9,1,2)=20
4460 LCN(10,1,1)=170: LCN(10,1,2)=20
4470 LCN(11,1,1)=170: LCN(11,1,2)=20
4480 LCN(12,1,1)=170: LCN(12,1,2)=20
4490 LCN(13,1,1)=170: LCN(13,1,2)=20
4500 LCN(14,1,1)=170: LCN(14,1,2)=20
4510 LCN(15,1,1)=170: LCN(15,1,2)=20
4520 LCN(16,1,1)=170: LCN(16,1,2)=20
4530 LCN(1,2,1)=32:  LCN(1,2,2)=76
4540 LCN(2,2,1)=32:  LCN(2,2,2)=76
4550 LCN(3,2,1)=32:  LCN(3,2,2)=76
4560 LCN(4,2,1)=32:  LCN(4,2,2)=76
4570 LCN(5,2,1)=32:  LCN(5,2,2)=76
4580 LCN(6,2,1)=32:  LCN(6,2,2)=76
4590 LCN(7,2,1)=32:  LCN(7,2,2)=76
4600 LCN(8,2,1)=32:  LCN(8,2,2)=76
4610 LCN(9,2,1)=112: LCN(9,2,2)=82
4620 LCN(10,2,1)=112: LCN(10,2,2)=82
4630 LCN(11,2,1)=112: LCN(11,2,2)=82
4640 LCN(12,2,1)=112: LCN(12,2,2)=82
4650 LCN(13,2,1)=112: LCN(13,2,2)=82
4660 LCN(14,2,1)=112: LCN(14,2,2)=82
4670 LCN(15,2,1)=112: LCN(15,2,2)=82
4680 LCN(16,2,1)=112: LCN(16,2,2)=82
4690 FOR SIDE = 1 TO 2
4700   IF WEAPONS (1,SIDE)>0 THEN X=1: GOSUB 2010
4710   IF WEAPONS (1,SIDE)=2 THEN X=9: GOSUB 2010
4720 NEXT SIDE
4730 'ICBM
4740 LCN(17,1,1)=62:  LCN(17,1,2)=64
4750 LCN(18,1,1)=62:  LCN(18,1,2)=64
4760 LCN(19,1,1)=62:  LCN(19,1,2)=64
4770 LCN(20,1,1)=62:  LCN(20,1,2)=64
4780 LCN(21,1,1)=62:  LCN(21,1,2)=72
4790 LCN(22,1,1)=62:  LCN(22,1,2)=72
4800 LCN(23,1,1)=62:  LCN(23,1,2)=72
4810 LCN(24,1,1)=62:  LCN(24,1,2)=72
4820 LCN(25,1,1)=80:  LCN(25,1,2)=80
4830 LCN(26,1,1)=80: LCN(26,1,2)=80
4840 LCN(27,1,1)=80: LCN(27,1,2)=80
4850 LCN(28,1,1)=80: LCN(28,1,2)=80
4860 LCN(17,2,1)=250: LCN(17,2,2)=70
4870 LCN(18,2,1)=250: LCN(18,2,2)=70
4880 LCN(19,2,1)=250: LCN(19,2,2)=70
4890 LCN(20,2,1)=250: LCN(20,2,2)=70
4900 LCN(21,2,1)=240: LCN(21,2,2)=70
4910 LCN(22,2,1)=240: LCN(22,2,2)=70
4920 LCN(23,2,1)=240: LCN(23,2,2)=70
4930 LCN(24,2,1)=240: LCN(24,2,2)=70
4940 LCN(25,2,1)=290: LCN(25,2,2)=40
4950 LCN(26,2,1)=290: LCN(26,2,2)=40
4960 LCN(27,2,1)=290: LCN(27,2,2)=40
4970 LCN(28,2,1)=290: LCN(28,2,2)=40
4980 FOR SIDE = 1 TO 2
4990   IF WEAPONS (2,SIDE)>0 THEN X=17: GOSUB 1940
5000   IF WEAPONS (2,SIDE)>4 THEN X=21: GOSUB 1940
5010   IF WEAPONS (2,SIDE)>8 THEN X=25: GOSUB 1940
5020 NEXT SIDE
5030 'BOMBERS
5040 LCN(49,1,1)=20:  LCN(49,1,2)=42
5050 LCN(50,1,1)=20:  LCN(50,1,2)=42
5060 LCN(51,1,1)=20:  LCN(51,1,2)=42
5070 LCN(52,1,1)=20:  LCN(52,1,2)=42
5080 LCN(53,1,1)=20:  LCN(53,1,2)=42
5090 LCN(54,1,1)=20:  LCN(54,1,2)=42
5100 LCN(55,1,1)=170: LCN(55,1,2)=45
5110 LCN(56,1,1)=170: LCN(56,1,2)=66
5120 LCN(57,1,1)=170: LCN(57,1,2)=66
5130 LCN(58,1,1)=170: LCN(58,1,2)=66
5140 LCN(59,1,1)=170: LCN(59,1,2)=66
5150 LCN(60,1,1)=170: LCN(60,1,2)=66
5160 LCN(49,2,1)=212: LCN(49,2,2)=50
5170 LCN(50,2,1)=212: LCN(50,2,2)=50
5180 LCN(51,2,1)=212: LCN(51,2,2)=50
5190 LCN(52,2,1)=212: LCN(52,2,2)=50
5200 LCN(53,2,1)=212: LCN(53,2,2)=50
5210 LCN(54,2,1)=212: LCN(54,2,2)=50
5220 LCN(55,2,1)=305: LCN(55,2,2)=36
5230 LCN(56,2,1)=305: LCN(56,2,2)=36
5240 LCN(57,2,1)=305: LCN(57,2,2)=36
5250 LCN(58,2,1)=305: LCN(58,2,2)=36
5260 LCN(59,2,1)=305: LCN(59,2,2)=36
5270 LCN(60,2,1)=305: LCN(60,2,2)=36
5280 FOR SIDE = 1 TO 2
5290   IF WEAPONS (4,SIDE)>0 THEN X=49: GOSUB 2310
5300   IF WEAPONS (4,SIDE)>6 THEN X=55: GOSUB 2310
5310 NEXT SIDE
5320 'HQ
5330 LCN(63,1,1)=64: LCN(63,1,2)=80
5340 LCN(64,1,1)=88: LCN(64,1,2)=80
5350 LCN(63,2,1)=192: LCN(63,2,2)=56
5360 LCN(64,2,1)=232: LCN(64,2,2)=48
5370 FOR X = 1 TO 2
5380   FOR SIDE = 1 TO 2
5390     IF X > WEAPONS(6,SIDE) THEN GOTO 5440
5400     DRAW "C=SIDE;"
5410     Y=X+62
5420     DRAW "BM=LCN(Y,SIDE,1);,=LCN(Y,SIDE,2);"
5430     GOSUB 2210
5440   NEXT SIDE
5450 NEXT
5460 'CRUISE MIS
5470 LCN(29,1,1)=20:  LCN(29,1,2)=50
5480 LCN(30,1,1)=20:  LCN(30,1,2)=50
5490 LCN(31,1,1)=20:  LCN(31,1,2)=50
5500 LCN(32,1,1)=20:  LCN(32,1,2)=50
5510 LCN(33,1,1)=20:  LCN(33,1,2)=50
5520 LCN(34,1,1)=20:  LCN(34,1,2)=50
5530 LCN(35,1,1)=20:  LCN(35,1,2)=50
5540 LCN(36,1,1)=20:  LCN(36,1,2)=50
5550 LCN(37,1,1)=20:  LCN(37,1,2)=50
5560 LCN(38,1,1)=20:  LCN(38,1,2)=50
5570 LCN(39,1,1)=184: LCN(39,1,2)=40
5580 LCN(40,1,1)=184: LCN(40,1,2)=40
5590 LCN(41,1,1)=184: LCN(41,1,2)=40
5600 LCN(42,1,1)=184: LCN(42,1,2)=40
5610 LCN(43,1,1)=184: LCN(43,1,2)=40
5620 LCN(44,1,1)=184: LCN(44,1,2)=40
5630 LCN(45,1,1)=184: LCN(45,1,2)=40
5640 LCN(46,1,1)=184: LCN(46,1,2)=40
5650 LCN(47,1,1)=184: LCN(47,1,2)=40
5660 LCN(48,1,1)=184: LCN(48,1,2)=40
5670 LCN(29,2,1)=290: LCN(29,2,2)=32
5680 LCN(30,2,1)=290: LCN(30,2,2)=32
5690 LCN(31,2,1)=290: LCN(31,2,2)=32
5700 LCN(32,2,1)=290: LCN(32,2,2)=32
5710 LCN(33,2,1)=290: LCN(33,2,2)=32
5720 LCN(34,2,1)=290: LCN(34,2,2)=32
5730 LCN(35,2,1)=290: LCN(35,2,2)=32
5740 LCN(36,2,1)=290: LCN(36,2,2)=32
5750 LCN(37,2,1)=290: LCN(37,2,2)=32
5760 LCN(38,2,1)=290: LCN(38,2,2)=32
5770 LCN(39,2,1)=203: LCN(39,2,2)=44
5780 LCN(40,2,1)=203: LCN(40,2,2)=44
5790 LCN(41,2,1)=203: LCN(41,2,2)=44
5800 LCN(42,2,1)=203: LCN(42,2,2)=44
5810 LCN(43,2,1)=203: LCN(43,2,2)=44
5820 LCN(44,2,1)=203: LCN(44,2,2)=44
5830 LCN(45,2,1)=203: LCN(45,2,2)=44
5840 LCN(46,2,1)=203: LCN(46,2,2)=44
5850 LCN(47,2,1)=203: LCN(47,2,2)=44
5860 LCN(48,2,1)=203: LCN(48,2,2)=44
5870 FOR SIDE = 1 TO 2
5880   IF WEAPONS (3,SIDE)>0 THEN X=29: GOSUB 2130
5890   IF WEAPONS (3,SIDE)>10 THEN X=39: GOSUB 2130
5900 NEXT SIDE
5910 'AIRBOURNE HQ
5920 LCN(61,1,1)=80: LCN(61,1,2)=64
5930 LCN(62,1,1)=100: LCN(62,1,2)=80
5940 LCN(61,2,1)=210: LCN(61,2,2)=70
5950 LCN(62,2,1)=260: LCN(62,2,2)=40
5960 FOR X = 1 TO 2
5970   FOR SIDE = 1 TO 2
5980     IF X > WEAPONS(5,SIDE) THEN GOTO 6030
5990     DRAW "C=SIDE;"
6000     Y=X+60
6010     DRAW "BM=LCN(Y,SIDE,1);,=LCN(Y,SIDE,2);"
6020     GOSUB 2090
6030   NEXT SIDE
6040 NEXT
6050 'AIR DEF
6060 LCN(65,1,1)=50:  LCN(65,1,2)=60
6070 LCN(66,1,1)=50:  LCN(66,1,2)=60
6080 LCN(67,1,1)=50:  LCN(67,1,2)=60
6090 LCN(68,1,1)=50:  LCN(68,1,2)=60
6100 LCN(69,1,1)=50:  LCN(69,1,2)=60
6110 LCN(70,1,1)=50:  LCN(70,1,2)=60
6120 LCN(71,1,1)=50:  LCN(71,1,2)=60
6130 LCN(72,1,1)=50:  LCN(72,1,2)=60
6140 LCN(73,1,1)=50:  LCN(73,1,2)=60
6150 LCN(74,1,1)=100: LCN(74,1,2)=60
6160 LCN(75,1,1)=100: LCN(75,1,2)=60
6170 LCN(76,1,1)=100: LCN(76,1,2)=60
6180 LCN(77,1,1)=100: LCN(77,1,2)=60
6190 LCN(78,1,1)=100: LCN(78,1,2)=60
6200 LCN(79,1,1)=100: LCN(79,1,2)=60
6210 LCN(80,1,1)=100: LCN(80,1,2)=60
6220  MH=LCN(X,ENEMY,1)-INT(ABS(LCN(X,ENEMY,1)-TGT(X,ENEMY,1))*F!)
6230 LCN(82,1,1)=100: LCN(82,1,2)=60
6240 LCN(65,2,1)=310: LCN(65,2,2)=38
6250 LCN(66,2,1)=310: LCN(66,2,2)=38
6260 LCN(67,2,1)=310: LCN(67,2,2)=38
6270 LCN(68,2,1)=310: LCN(68,2,2)=38
6280 LCN(69,2,1)=310: LCN(69,2,2)=38
6290 LCN(70,2,1)=310: LCN(70,2,2)=38
6300 LCN(71,2,1)=310: LCN(71,2,2)=38
6310 LCN(72,2,1)=310: LCN(72,2,2)=38
6320 LCN(73,2,1)=310: LCN(73,2,2)=38
6330 LCN(74,2,1)=180: LCN(74,2,2)=62
6340 LCN(75,2,1)=180: LCN(75,2,2)=62
6350 LCN(76,2,1)=180: LCN(76,2,2)=62
6360 LCN(77,2,1)=180: LCN(77,2,2)=62
6370 LCN(78,2,1)=180: LCN(78,2,2)=62
6380 LCN(79,2,1)=180: LCN(79,2,2)=62
6390 LCN(80,2,1)=180: LCN(80,2,2)=62
6400 LCN(81,2,1)=180: LCN(81,2,2)=62
6410 LCN(82,2,1)=180: LCN(82,2,2)=62
6420 FOR SIDE = 1 TO 2
6430   IF WEAPONS (7,SIDE)>0 THEN X=65: GOSUB 2240
6440   IF WEAPONS (7,SIDE)>9 THEN X=74: GOSUB 2240
6450 NEXT SIDE
6460 RETURN
6470 '
6480 'DISPLAY COMMANDS
6490    CLS
6500 PRINT "             COMMANDS": PRINT
6510 PRINT "1. LAUNCH SUBMARINE MISSILES"
6520 PRINT "2. LAUNCH ICBM'S"
6530 PRINT "3. LAUNCH CRUISE MISSILES"
6540 PRINT "4. LAUNCH BOMBERS"
6550 PRINT "5. LAUNCH AIRBORNE HQ"
6560 PRINT "6. HELP"
6570 PRINT "7. STATUS"
6575 PRINT "8. PASS TURN"
6580 PRINT "9. QUIT"
6590 PRINT
6600 PRINT "             TARGETS": PRINT
6610 PRINT "2. ENEMY ICBMS"
6620 PRINT "4. ENEMY BOMBER BASES"
6630 PRINT "5. ENEMY AIRBORNE HQ BASES"
6640 PRINT "6. EMENY UNDERGROUND HQ"
6650 PRINT "7. ENEMY AIR DEFENSE"
6660 PRINT "8. ENEMY CITIES"
6670 GOSUB 1210 'WAIT
6680 RETURN
6690 '
6700 'PLAYERS TURN
6710 '
6720 A=0
6730 IF SIDE=1 THEN ENEMY=2 ELSE ENEMY=1
6740 GOSUB 7480 'LAUNCH DETECTED
6750 GOSUB 7850
6760 IF SIDE=1 THEN MSG$="USA" ELSE MSG$="SOVIET"
6770 LOCATE 25,1: PRINT SPACE$(39);
6780 LOCATE 25,1: PRINT MSG$;
6790 GOSUB 7340 'GET A COMMAND
6795 IF COMD=8 THEN GOTO 7320 'PASS TURN
6800 IF COMD=6 THEN GET (0,0)-(319,199),SV: GOSUB 6480: PUT (0,0),SV,PSET:             GOTO 6790 'HELP
6810 IF COMD=7 THEN GET (0,0)-(319,199),SV: GOSUB 9200: GOSUB 1210: SCREEN 1: COLOR 0,0: CLS: PALETTE 1,1: PALETTE 2,4: PALETTE 3,14: PUT (0,0),SV,PSET:               GOTO 6790 'STATUS
6820 IF COMD=9 THEN GOTO 9300 'QUIT
6830 IF COMD<1 OR COMD>5 THEN GOSUB 7430: GOTO 6790
6840 LOCATE 25,1: PRINT SPACE$(39);
6850 W=COMD 'SAVE WEAPON
6860 LOCATE 25,1: PRINT "HOW MANY ";W.NAME$(W);
6870 GOSUB 7340
6880 'CALC PROBABILITY OF SUCESSFUL LAUNCH
6890 HQ=0
6900 FOR X=61 TO 64
6910   IF STAT(X,SIDE)>0 AND STAT(X,SIDE)<999 THEN HQ=HQ+1
6920 NEXT
6930 IF HQ<1 THEN PROB!=.1: GOTO 6970 'NO HQ REMAINING
6940 O.FACT!=(INT(RND*10)+90+HQ)/100 'PROB OF ORDERS RECEIVED
6950 L.FACT!=(INT(RND*10)+90)/100 'PROB OF SUCESSFUL LAUNCH
6960 PROB!=O.FACT!*L.FACT!
6970 IF COMD>WEAPONS(W,SIDE) THEN NBR=WEAPONS(W,SIDE) ELSE NBR=COMD 'SAVE HOW MANY
6980 WEAPONS(W,SIDE)=WEAPONS(W,SIDE)-NBR
6990 NBR.L=0
7000 FOR PP = 1 TO NBR
7010   LAUNCH!=RND
7020   IF LAUNCH! < PROB! THEN NBR.L=NBR.L+1
7030 NEXT
7040 ENEMY.W=W: ENEMY.L=NBR.L
7050 IF W<>5 THEN GOTO 7120
7060 IF NBR.L = 0 THEN GOTO 7170
7070 IF STAT(61,SIDE)=0 THEN STAT(61,SIDE)=1: GOTO 7080
7080 IF STAT(62,SIDE)=0 THEN STAT(62,SIDE)=1
7090 IF NBR.L <> 2 THEN GOTO 7110
7100 IF STAT(62,SIDE)=0 THEN STAT(62,SIDE)=1
7110 GOTO 7170 'HQ
7120 LOCATE 25,1: PRINT SPACE$(39);
7130 LOCATE 25,1: PRINT "WHAT TARGET?";
7140 GOSUB 7340
7150 IF COMD<2 OR COMD>8 OR COMD=3 THEN GOSUB 7430: GOTO 7140 'INVALID TARGET
7160 T=COMD 'SAVE TARGET
7170 IF W=1 THEN NBR.L=NBR.L*8
7180 MSG$=STR$(NBR.L)
7190 MSG$=MSG$+" LAUNCHED"
7200 LOCATE 25,1: PRINT SPACE$(39);
7210 LOCATE 25,1: PRINT MSG$;
7220 SV.TIMER!=TIMER+2
7230 FOR X = 1 TO NBR.L       'FIND A WEAPON TO LAUNCH
7240    FOR Y = RANGE(W,1) TO RANGE(W,2)
7250            IF STAT(Y,SIDE)<> 0 GOTO 7290
7260            STAT(Y,SIDE)=1
7270            IF W <> 5 THEN GOSUB 7670 'GET A TARGET
7280            GOTO 7300
7290    NEXT Y
7300 NEXT X
7310 IF TIMER<SV.TIMER! THEN GOTO 7310
7320 RETURN
7330 '
7340 'GET A COMMAND
7350 '
7360 DEF SEG=0: POKE 1050,PEEK(1052) 'CLEAR KEYBOARD BUFFER
7370 REPLY$=INKEY$: IF REPLY$="" THEN GOTO 7370
7380 IF REPLY$="H" THEN REPLY$="6"
7390 COMD=VAL(REPLY$)
7400 IF COMD=0 THEN GOTO 7370 'INVALID REPLY
7410 RETURN
7420 '
7430 'INVALID REPLY
7440 '
7450 LOCATE 25,1: PRINT "INVALID COMMAND";
7460 RETURN
7470 '
7480 'ENEMY LAUNCH DETECTED
7490 '
7500 MSG$=""
7510 LOCATE 25,1: PRINT SPACE$(39);
7520 FOR X = 1 TO 60
7530   IF X < 29 AND STAT(X,ENEMY)=1 THEN GOSUB 7930: LOCATE 25,1: PRINT "ENEMY LAUNCH DETECTED";: CIRCLE (LCN(X,ENEMY,1)+4,LCN(X,ENEMY,2)+4),4,ENEMY: GOTO 7570
7540   IF X<29 THEN GOTO 7570
7550   IF STAT(X,ENEMY)<4 OR  STAT(X,ENEMY)>8 THEN GOTO 7570
7560   GOSUB 8800 'FLIGHT PATH
7570   IF X<17 AND STAT(X,ENEMY)=2 THEN GOSUB 8040: GOTO 7640
7580   IF X<29 AND STAT(X,ENEMY)=4 THEN GOSUB 8040: GOTO 7640
7590   IF STAT(X,ENEMY) <> 8 THEN GOTO 7640
7600   CIRCLE (TGT(X,ENEMY,1),TGT(X,ENEMY,2)),4,3
7610   PSET (TGT(X,ENEMY,1),TGT(X,ENEMY,2)),0
7620   PAINT (TGT(X,ENEMY,1),TGT(X,ENEMY,2)),3,3
7630   GOSUB 8590 'FLASH
7640 NEXT X
7650 RETURN
7660 '
7670 'FIND A TARGET
7680 '
7690 FOR S=RANGE(T,1) TO RANGE(T,2)
7700   IF T.STAT(S,ENEMY) <> 1 GOTO 7750
7710   TGT(Y,SIDE,1)=LCN(S,ENEMY,1)
7720   TGT(Y,SIDE,2)=LCN(S,ENEMY,2)
7730   T.STAT(S,ENEMY)=2: TGT(Y,SIDE,3)=S
7740   GOTO 7830
7750 NEXT S
7760 FOR S=RANGE(T,1) TO RANGE(T,2)
7770   IF T.STAT(S,ENEMY) <> 2 GOTO 7820
7780   TGT(Y,SIDE,1)=LCN(S,ENEMY,1)
7790   TGT(Y,SIDE,2)=LCN(S,ENEMY,2)
7800   T.STAT(S,ENEMY)=2: TGT(Y,SIDE,3)=S
7810   GOTO 7830
7820 NEXT S
7830 RETURN
7840 '
7850 'UPDATE WEAPON FLIGHT
7860 '
7870 FOR X=1 TO 60
7880   IF STAT(X,SIDE) > 0 AND STAT(X,SIDE) < 999 THEN STAT(X,SIDE)=STAT(X,SIDE)+1
7890 NEXT X
7900 RETURN
7910 '
7920 '
7930 'SOUND ALARM
7940  IF A>0 THEN GOTO 8020
7950  A=1
7960 FOR S = 1 TO 5
7970   SOUND 500,12
7980   SOUND 32000,4
7990   SOUND 650,7
8000   SOUND 32000,4
8010 NEXT
8020 RETURN
8030 '
8040 'MISSILE FLIGHT
8050 '
8060   PI=3.141593
8070 IF LCN(X,ENEMY,1) < TGT(X,ENEMY,1) THEN AH=LCN(X,ENEMY,1): AV=LCN(X,ENEMY,2)
8080 IF LCN(X,ENEMY,1) < TGT(X,ENEMY,1) THEN CH=TGT(X,ENEMY,1): CV=TGT(X,ENEMY,2)
8090 IF LCN(X,ENEMY,1) > TGT(X,ENEMY,1) THEN AH=TGT(X,ENEMY,1): AV=TGT(X,ENEMY,2)
8100 IF LCN(X,ENEMY,1) > TGT(X,ENEMY,1) THEN CH=LCN(X,ENEMY,1): CV=LCN(X,ENEMY,2)
8110  IF AH<CH AND AV>CV THEN GOTO 8130
8120  IF AH<CH AND AV<CV THEN GOTO 8270
8130 BH=CH: BV=AV
8140 MH=INT((CH-AH)/2)+AH
8150 MV=INT((AV-CV)/2)+CV
8160 AB=CH-AH: BC=AV-CV
8170 R=INT(SQR(AB^2+BC^2)/2)
8180 STRT=TAN(BC/(R+R))
8190 FIN=STRT+PI
8200 CIRCLE (MH,MV),R,3,STRT,FIN
8210 CIRCLE (TGT(X,ENEMY,1),TGT(X,ENEMY,2)),4,3
8220 PSET (TGT(X,ENEMY,1),TGT(X,ENEMY,2)),0
8230 PAINT (TGT(X,ENEMY,1),TGT(X,ENEMY,2)),3,3
8240 GOSUB 8590 'FLASH
8250 GOTO 8390
8260 '
8270 MH=INT((CH-AH)/2)+AH
8280 MV=INT((AV-CV)/2)+CV
8290 AB=CH-AH: BC=AV-CV
8300 R=INT(SQR(AB^2+BC^2)/2)
8310 STRT=TAN(BC/(R+R))
8320 FIN=STRT+PI
8330 STRT=(2*PI)+STRT
8340 CIRCLE (MH,MV),R,3,STRT,FIN
8350 CIRCLE (TGT(X,ENEMY,1),TGT(X,ENEMY,2)),4,3
8360 PSET (TGT(X,ENEMY,1),TGT(X,ENEMY,2)),0
8370 PAINT (TGT(X,ENEMY,1),TGT(X,ENEMY,2)),3,3
8380 GOSUB 8590 'FLASH
8390 RETURN
8400 '
8410 'TITLE
8420 SCREEN 1: COLOR 0,0: CLS
8430 PALETTE 1,1: PALETTE 2,4: PALETTE 3,14
8440 CIRCLE (164,170),29,3,-6.283186,-3.141593
8450 PAINT (164,168),3,3
8460 COLOR 14,0
8470 COLOR 0,0
8480 PALETTE 1,1: PALETTE 2,4: PALETTE 3,14
8490 LINE (149,40)-(179,170),3,BF
8500 CIRCLE (164,20),150,3,,,5/36
8510 PAINT (164,20),3,3
8520 LOCATE 7,19: PRINT "GLOBAL"
8530 LOCATE 9,15: PRINT "THERMONUCLEAR"
8540 LOCATE 11,20: PRINT "WAR"
8550 SV.TIMER!=TIMER+6
8560 IF TIMER<SV.TIMER! THEN GOTO 8560
8570 RETURN
8580 '
8590 'SAVE,FLASH,RESTORE
8600 GET (0,0)-(319,199),SV
8610 COLOR 14,0
8620 COLOR 0,0
8630 PALETTE 1,1: PALETTE 2,4: PALETTE 3,14
8640 PUT (0,0),SV,PSET
8650   STAT(X,ENEMY)=999
8660   H.FACT=INT(RND*9)+1
8670    IF TGT(X,ENEMY,3) < 48 OR TGT(X,ENEMY,3) = 63 OR TGT(X,ENEMY,3)=64                 THEN GOTO 8680 ELSE GOTO 8700
8680    IF X > 16 THEN GOTO 8700
8690    H.FACT=H.FACT-8
8700    IF (TGT(X,ENEMY,3) = 63 OR TGT(X,ENEMY,3)=64) AND STAT(TGT(X,ENEMY,3),SIDE)<999 THEN GOTO 8720
8710    IF STAT(TGT(X,ENEMY,3),SIDE) > 0 THEN GOTO 8790
8720   IF H.FACT < 2 THEN GOTO 8790
8730 IF TGT(X,ENEMY,3) > 83 THEN GOSUB 9380: GOTO 8780 'CITY
8740 FOR PP = 1 TO 7
8750   IF TGT(X,ENEMY,3) > RANGE(PP,2) THEN GOTO 8770
8760   IF STAT(TGT(X,ENEMY,3),SIDE)=0 THEN WEAPONS(PP,SIDE)=WEAPONS(PP,SIDE)-1:        LOCATE 25,1: PRINT W.NAME$(PP);: GOTO 8790
8770 NEXT
8780   STAT(TGT(X,ENEMY,3),SIDE)=999
8790 RETURN
8800 'FLIGHT OF BOMBERS AND CRUISE MISSILES
8810   LOCATE 25,1: PRINT SPACE$(39);
8820   IF X<49 THEN MSG$="ENEMY CRUISE MISSILE" ELSE MSG$="ENEMY BOMBERS"
8830   LOCATE 25,1: PRINT MSG$;
8840   GOSUB 7930
8850   IF LCN(X,ENEMY,1) > TGT(X,ENEMY,1) THEN GOSUB 9110: GOTO 8880
8860   GOSUB 9020
8870   SV.TIMER!=TIMER+1
8880   FOR AD = 65 TO 82
8890     IF T.STAT(AD,SIDE) <> 1 THEN GOTO 8990
8900     T.STAT(AD,SIDE)=999: STAT(AD,SIDE)=999
8910     HIT=INT(RND*2)+1
8920     IF HIT <> 1 THEN GOTO 8990
8930     STAT(X,ENEMY)=999 'SHOT DOWN
8940     CIRCLE (MH,MV),2,3
8950     LOCATE 25,1: PRINT SPACE$(39);
8960     LOCATE 25,1: PRINT "SHOT DOWN";
8970     IF TIMER<SV.TIMER! GOTO 8970
8980     GOTO 9000
8990   NEXT AD
9000 RETURN
9010 '
9020 'DRAW FLIGHT PATH LEFT TO RIGHT
9030 '
9040  F!=STAT(X,ENEMY)/8
9050  MH=INT(ABS(LCN(X,ENEMY,1)-TGT(X,ENEMY,1))*F!)+LCN(X,ENEMY,1)
9060  IF LCN(X,ENEMY,2)<TGT(X,ENEMY,2) THEN                                             MV=INT(ABS(LCN(X,ENEMY,2)-TGT(X,ENEMY,2))*F!)+LCN(X,ENEMY,2)
9070  IF LCN(X,ENEMY,2)>TGT(X,ENEMY,2) THEN                                             MV=INT(ABS(LCN(X,ENEMY,2)-TGT(X,ENEMY,2))*F!)+TGT(X,ENEMY,2)
9080  LINE (LCN(X,ENEMY,1),LCN(X,ENEMY,2))-(MH,MV),3
9090 RETURN
9100 '
9110 'DRAW FLIGHT PATH RIGHT TO LEFT
9120 '
9130   F!=STAT(X,ENEMY)/8
9140  MH=LCN(X,ENEMY,1)-INT(ABS(LCN(X,ENEMY,1)-TGT(X,ENEMY,1))*F!)
9150  IF LCN(X,ENEMY,2)<TGT(X,ENEMY,2) THEN                                             MV=INT(ABS(LCN(X,ENEMY,2)-TGT(X,ENEMY,2))*F!)+LCN(X,ENEMY,2)
9160  IF LCN(X,ENEMY,2)>TGT(X,ENEMY,2) THEN                                             MV=INT(ABS(LCN(X,ENEMY,2)-TGT(X,ENEMY,2))*F!)+TGT(X,ENEMY,2)
9170   LINE (MH,MV)-(LCN(X,ENEMY,1),LCN(X,ENEMY,2)),3
9180 RETURN
9190 '
9200 'DISPLAY STATUS
9210 '
9220 SCREEN 0: WIDTH 80: COLOR 0,2,2: CLS
9230 PRINT: PRINT "US","USSR","EST COST": PRINT
9240 FOR X=1 TO 7
9250     PRINT WEAPONS(X,1),WEAPONS(X,2),COST(X,SIDE),W.NAME$(X)
9260     PRINT
9270 NEXT
9280 RETURN
9290 '
9300 'END
9310 GOSUB 9200 'PRINT STATS
9320 PRINT INT(KILLED!(1)/1000),INT(KILLED!(2)/1000),,"CIVILIAN CASUAULTIES"
9330 PRINT ,,,"(IN THOUSANDS)"
9340 GOSUB 1210 'WAIT
9350 CLOSE
9360 END
9370 '
9380 'CITY HIT
9390 ZZ=TGT(X,ENEMY,3): ZZ=ZZ-83
9400 MSG$=SPACE$(39): LSET MSG$=CITY$(ZZ,SIDE)
9410 LOCATE 25,1: PRINT MSG$;
9420 SV.TIMER!=TIMER+1
9430 IF TIMER < SV.TIMER! THEN GOTO 9430
9440 KILLED!(SIDE)=KILLED!(SIDE)+INT(POP!(ZZ,SIDE)*.75)
9450 RETURN
```
{% endraw %}

## WAR.DOC

{% raw %}
```


               GLOBAL THERMONUCLEAR WAR

  1.  GENERAL:
      THIS IS A GAME.  IT IS NOT INTENTED TO BE A REALISTIC SIMULATION
OF AN ACTUAL THERMONUCLEAR WAR. THE NUMBER OF WEAPONS, OPTIONS FOR THEIR
USE AND THE EFFECTS OF THE WEAPONS ARE GREATLY RESTRICTED.  FOR EXAMPLE
THE EFFECTS OF FALLOUT, EMP, ANY LONG-TERM EFFECTS "NUCLEAR WINTER", ETC
ARE NOT CONSIDERED.  CIVIL DEFENSE (WHICH COULD GREATLY REDUCE THE 
DAMAGE) AND VARIOUS TARGETING OPTIONS ARE IGNORED.  

      
  2.  PLAY:
    
    2.1  ESCALATION:

      2.2.1  EACH PLAYER SELECTS A WEAPONS SYSTEM TO DEVELOP.  THE COST
OF THE SYSTEM MAY VARY A GREAT DEAL FROM THE ESTIMATE.  IT IS EVEN
POSSIBLE THAT RESEARCH MAY NOT PRODUCE A USEABLE SYSTEM (YOU CAN TRY
AGAIN).

      2.2.2  EACH PLAYER SELECTS A WEAPONS SYSTEM TO PRODUCE.  COST AND
PRODUCTION FACILITIES WILL LIMIT THE NUMBER YOU CAN PRODUCE.

      2.2.3  ESCALATION CONTINUES UNTIL ONE PLAYER STARTS THE CONFLICT.
EITHER PLAYER CAN START.  IF THE U.S. STARTS, THE RUSSIANS WILL GET ONE
FINAL TURN BEFORE THE WAR STARTS (IN AN OPEN SOCIETY, THERE IS NO CHANCE
OF COMPLETE SUPPRISE).

      2.2.4  NOTE: COMMAND AND CONTROL IS CRITICAL.

    2.2 THE WAR:

      2.2.1  EACH PLAYER CAN LAUNCH WEAPONS OR ORDER AIRBORNE 
HEADQUARTERS ALOFT.  AIR DEFENSE UNITS ARE ACTIVATED AUTOMATICALLY.

      2.2.2  THE PROGRAM WILL ASK FOR THE NUMBER TO LAUNCH (1-9)

      2.2.3  MURPHY'S LAW WORKS IN WAR TOO.  ORDERS MAY NOT BE RECEIVED,
MAY NOT BE CARRIED OUT, EQUIPMENT MALFUNCTIONS,ETC.

      2.2.4  PROGRAM WILL ASK FOR TARGET.  ALL WEAPONS LAUNCHED IN ONE
TURN MUST BE AIMED AT ONE CLASS OF TARGET.  

      2.2.5  PROGRAM WILL TELL YOU HOW MANY WERE ACTUALLY LAUNCHED. 

      2.2.6  AT THE START OF EACH PLAYERS TURN, ANY LAUNCHES DETECTED
OR ANY ENEMY WEAPONS PICKED UP ON YOUR EARLY WARNING SYSTEMS WILL BE
DISPLAYED.  ANY STRIKES WILL BE SHOWN AND THE TARGET DISPLAYED.  NOTE
THAT WEAPONS CAN MISS OR MALFUNCTION.

      2.2.7  EITHER PLAYER CAN QUIT AT ANY TIME.

3. COMMANDS:

   1.  LAUNCH SUBMARINE MISSILES
   2.  LAUNCH ICBM'S
   3.  LAUNCH CRUISE MISSILES
   4.  LAUNCH BOMBERS
   5.  LAUNCH AIRBORNE HQ
   6.  HELP (DISPLAY COMMANDS)
   7.  STATUS (DISPLAY CURRENT STATUS OF WEAPONS)
   8.  PASS
   9.  QUIT

4.  TARGETS:
 
    2. ICMB'S
    4. BOMBER BASES
    5. AIRBORNE HEADQUARTERS
    6. UNDERGROUND HEADQUARTERS
    7. AIR DEFENSE UNITS
    8. ENEMY CITIES

5.  TARGETING NOTES:

  5.1 BALISTIC MISSILE SUBMARINES AND CRUISE MISSILES CAN NOT BE
TARGETED.

  5.2 BOMBERS AND AIRBORNE HEADQUARTERS ARE ONLY VULNERABLE BEFORE
THEY ARE LAUNCHED.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0354

     Volume in drive A has no label
     Directory of A:\

    COMBAT   BAS     40402   3-24-85   4:13p
    COMBAT   DOC       278   3-24-85   3:02p
    DUN      DOC     27001   3-24-85  10:11p
    DUNCHAR           1220   3-24-85   3:33p
    DUNCHAR  BAS     23464   3-24-85   3:19p
    DUNEND   BAS      8523   3-24-85   3:20p
    DUNMAP   BAS      4742   3-24-85   3:56p
    DUNMAP1           1252  12-31-84   4:24p
    DUNMAP2           1365   1-11-85   6:22p
    DUNMAP3           1132   1-17-85   8:17p
    DUNMAP4           1247   1-18-85   6:23p
    DUNMAP5            948   1-15-85   5:43a
    DUNMAP6           1302   1-15-85   6:25p
    DUNMAP7           1314   1-15-85   6:42p
    DUNMAP8           1228   2-19-85  12:36a
    DUNMAP9           1440   2-19-85  12:43a
    DUNPLAY  BAS     31601   3-26-85   6:07p
    DUNQUEST BAS     15883   3-24-85   3:25p
    DUNSHOP           1716   3-24-85   3:33p
    DUNSHOP  BAS     11896   3-24-85   3:26p
    FILES    DOC       959   3-24-85   4:31p
    FILES354 TXT      1280   5-23-85   2:16p
    MAP               6572   1-24-85   7:43p
    MENU     BAS      1270   3-24-85   3:26p
    WAR      BAS     30962   3-24-85   4:10p
    WAR      DOC      2664   3-23-85   5:50p
           26 file(s)     221661 bytes
                           86016 bytes free
