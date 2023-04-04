---
layout: page
title: "PC-SIG Library Disk #936"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0936/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0936"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DCOPY, MYMENU, AND MENUEZE"

    DCOPY is an enhancement of the MS-DOS COPY command.  You can still copy
    files, but you control the copying process based on the file's
    creation/revision date.  The program also pauses when the new disk
    becomes full, lets you put in another, and even formats it!  If you
    want, you can ask DCOPY to prompt you before each file is copied.
    Wildcard copies are supported.
    
    MYMENU creates a start-up menu for your hard disk.  A BASIC program is
    created by the program, and you provide a directory and the program name
    for each option in the menu.  The menu can have up to 18 options, each
    having a short description of the program.
    
    After the BASIC program is created, a few lines are entered into your
    AUTOEXEC.BAT file, and your menu is ready to go!
    
    Make menus to automatically load programs on your various disk drives.
    Put an automatic menu on each of the disks you use regularly.
    
    You are prompted for the names of the programs you want included in a
    particular menu, then asked for the commands needed to run them.
    MENU-EZE lets you choose the colors for your menu screen and you can
    make a different menu for each of the disks in your library (including
    your hard disk).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MEZ.BAS

```bas
1000 'MEZ.BAS  (C)1987  Edwin K. Spain
1100 IL=1:N=26:KEY OFF:DIM M$(N),C$(N),C2$(N),PROG$(99)
1200 CLS:WIDTH 80:COLOR 14,0
1300 LOCATE 2,10:PRINT "╔═══════════════════════════════════════════════════════════╗"
1400 FOR L=3 TO 7:LOCATE L,10:PRINT "║"TAB(70)"║":NEXT L
1500 LOCATE 5,15:PRINT "M E N U - E A S E    ver. 2.0               SpainWare  ":LOCATE 6,61:PRINT "(c)1987"
1600 LOCATE 8,10:PRINT "╚═══════════════════════════════════════════════════════════╝"
1700 LOCATE 13,12:PRINT "BASE NAME OF MENU FILES":LOCATE 14,12:INPUT "(DEFAULT IS MEZ (MEZ / MEZ.BAT)) ",MN$:IF MN$="" THEN MN$="MEZ"
1800 LOCATE 13,1:PRINT STRING$(140,32)
1900 LOCATE 10,12:INPUT "Title of Menu: ",T$:LOCATE 13,12:LINE INPUT "PATH: (default is PATH\) ",PA$:IF PA$="" THEN PA$="Path\"
1910 LOCATE 15,12:PRINT "DIRECTORY FROM WHICH YOUR MENU WILL BE RUN":LOCATE 16,12:PRINT "(IE: C:\ or C:\MENU, etc.) ";:LINE INPUT "",CD$
2000 LOCATE 13,1:PRINT SPACE$(160):PRINT SPACE$(160):T$="╡ "+T$+" ╞"
2100 '----------------------------------  COLORS   -----------------------------      -
2200 PR$="$e[35;44;1m$p$g$e[33;44;1m"
2250 COL$(1)="34BLUE":COL$(2)="32GREEN":COL$(3)="36CYAN":COL$(4)="31RED":COL$(5)="35MAGENTA":COL$(6)="33YELLOW":COL$(7)="37WHITE":COL$(8)="30BLACK"
2300 LOCATE 12,12:PRINT "Select colors for the DOS Prompt, the Foreground, and the":LOCATE 13,12:PRINT "Background for your menu by choosing from the following:"
2400 LOCATE 14,22:COLOR 7,8:PRINT "┌─────────────────────────────────┐"
2500 LOCATE 15,24:COLOR 8,1:PRINT " 1 - BLUE   ":LOCATE 15,42:COLOR 8,5:PRINT " 5 - MAGENTA "
2600 LOCATE 16,24:COLOR 8,2:PRINT " 2 - GREEN  ":LOCATE 16,42:COLOR 8,6:PRINT " 6 - YELLOW  "
2700 LOCATE 17,24:COLOR 8,3:PRINT " 3 - CYAN   ":LOCATE 17,42:COLOR 8,7:PRINT " 7 - WHITE   "
2800 LOCATE 18,24:COLOR 8,4:PRINT " 4 - RED    ":LOCATE 18,42:COLOR 7,8:PRINT " 8 - BLACK   "
2900 LOCATE 19,22:COLOR 7,8:PRINT "└─────────────────────────────────┘"
2910 LOCATE 20,18:PRINT "DOS Prompt";TAB(34);"Foreground";TAB(50);"Background"
2922 FOR J=1 TO 3:LOCATE 21,6+(16*J):COLOR 31:PRINT "X":COLOR 7,8
2925 IN$=INPUT$(1):IF ASC(IN$)<49 OR ASC(IN$)>56 THEN 2960 ELSE Y=VAL(IN$)
2926 LOCATE 22,4+(16*J):PRINT MID$(COL$(Y),3):LOCATE 21,4+(16*J):COLOR 7,Y:PRINT SPACE$(LEN(COL$(Y))-2):COLOR 7,8:A(J)=VAL(LEFT$(COL$(Y),2)):IF J=3 THEN A(J)=A(J)+10
2927 A$(J)=RIGHT$(STR$(A(J)),2)
2928 NEXT J
2950 LOCATE 23,26:PRINT "[ ARE COLORS OK? (Y/N) ]":X$=INPUT$(1):IF X$<>"Y" AND X$<>"y" THEN LOCATE 21,1:PRINT SPACE$(230):GOTO 2922
3300 MID$(PR$,4,2)=A$(1):MID$(PR$,7,2)=A$(3):MID$(PR$,19,2)=A$(2):MID$(PR$,22,2)=A$(3):EC$="echo "+CHR$(27)+RIGHT$(PR$,9)
3350 '---------------------------  GET DIRECTORY  ------------------------------      -
3400 CLS:WIDTH 80:PRINT TAB(10)"Display files from which Drive (A-E)":PRINT TAB(10)"<Press  Return if you do not wish to display files> "
3410 DIR$=INPUT$(1):IF DIR$=CHR$(13) THEN CLS:GOTO 6700
3420 IF ASC(DIR$)<65 OR ASC(DIR$)>101 THEN 3410
3430 IF ASC(DIR$)>69 AND ASC(DIR$)<97 THEN 3410
3500 CLS:SCREEN 0:DIR$=DIR$+":*.*":COLOR 0,0
3600 FILES DIR$
3700 FOR DR%=2 TO 24
3800      FOR DC%=0 TO 65 STEP 18
3900      IF CHR$(SCREEN(DR%,DC%+1)) = " " THEN 4700
4000      AR%=AR%+1
4100           FOR L%=1 TO 12
4200           PROG$(AR%)=PROG$(AR%)+CHR$(SCREEN(DR%,DC%+L%))
4300           NEXT L%
4500      NEXT DC%
4600 NEXT DR%
4700 P=0:I%=0:CLS:WIDTH 80:LOCATE 1,4:COLOR 14,0
4800 FOR DC%=1 TO 75 STEP 16
4900      FOR DR%=1 TO 20
5000      I%=I%+1:IF I%=100 THEN 5600
5100      IF PROG$(I%)="" THEN 5600 ELSE LOCATE DR%,DC%
5200      COLOR 0,7:PRINT USING "##";I%;
5300      COLOR 14,0:PRINT PROG$(I%)
5400      NEXT DR%
5500 NEXT DC%
5600 LOCATE 22,25:PRINT "<FILES -- FROM -- DIR "MID$(DIR$,1,1)">"
5700 LOCATE 23,11:PRINT "CHOOSE NUMBER FOR MENU ITEM ";IL;:INPUT ", THEN PRESS  RETURN: ",AL$:IF AL$="" THEN 6600
5750 P=VAL(AL$):M$(IL)=PROG$(P):IL=IL+1:IF IL>26 THEN 6600
5760 LOCATE 23,27:PRINT STRING$(52,32):GOTO 5700
6500 '---------------------------  START MENU DRAWING  -------------------------      -
6600 CLS
6700 OPEN MN$ FOR OUTPUT AS #1
6800 X$="╔"+STRING$(59,205)+"╗":T=LEN(T$):X=32-(T/2)
6900 Y$=STRING$(61,32):MID$(Y$,X,1)="┌":MID$(Y$,X+1,T)=STRING$(T-2,196)+"┐":PRINT #1,TAB(10)Y$
7000 MID$(X$,X,T+2)=T$:PRINT #1,TAB(10)X$
7100 Z$=STRING$(61,32):MID$(Z$,X,1)="└":MID$(Z$,X+1,T)=STRING$(T-2,196)+"┘"
7200 MID$(Z$,1,1)="║":MID$(Z$,61,1)="║":PRINT #1,TAB(10)Z$
7300 PRINT #1,TAB(10);"║";:PRINT #1,TAB(70);"║"
7400 PRINT #1,TAB(10);"║";:PRINT #1,TAB(70);"║"
7500 LOCATE 8,20:PRINT "Title will appear as:"
7600 LOCATE 10,1:PRINT TAB(10)X$
7700 FOR I=1 TO N
7800 COLOR 7:LOCATE 25,18:PRINT "Press ";:COLOR 31:PRINT "Return ";:COLOR 7:PRINT "when finished with item entries!"
7900 IF M$(I)="" THEN 8100
8000 LOCATE 15,10:PRINT "You chose ";:COLOR 31:PRINT M$(I);:COLOR 7:PRINT " as MENU ITEM NO. "STR$(I):GOTO 8300
8100 LOCATE 15,10:PRINT "ENTER MENU ITEM NO. "STR$(I);:INPUT " ",M$(I)
8200 IF M$(I)="" THEN 8900
8300 LOCATE 25,18:PRINT "                                               ":LOCATE 17,10:PRINT "COMMAND TO RUN MENU ITEM NO. "STR$(I);:INPUT " ",C$(I)
8400  LOCATE 18,10:PRINT "secondary command to run no. "STR$(I);:INPUT " ",C2$(I)
8500 LOCATE 15,32:PRINT SPACE$(30)
8600 LOCATE 17,10:PRINT SPACE$(60)
8700 LOCATE 18,1:PRINT SPACE$(69)
8800 NEXT I
8900 N=I-1
9000 FOR J=1 TO N STEP 2
9100 PRINT #1,TAB(10)"║      "CHR$(64+J)" - "M$(J);:PRINT #1,TAB(45)CHR$(65+J)" - "M$(J+1);:PRINT #1,TAB(70)"║"
9200 NEXT J
9300 P$="║                    ┌─────────────────┐                    ║"
9400 X$="╚════════════════════╡  ESC  for  DOS  ╞════════════════════╝":
9500 U$="                     └─────────────────┘"
9600 S$="SpainWare  (c) 1987":
9700 PRINT #1,TAB(10)"║"TAB(70)"║"
9800 PRINT #1,TAB(10);P$
9900 PRINT #1,TAB(10);X$
10000 PRINT #1,TAB(10);U$
10100 PRINT #1,TAB(52);S$
10200 '
10300 '
10400 CLOSE:CLS
10450 '------------------------  FINISH MENU DRAWING, START BATCH FILE  --------       -
10500 LOCATE 12,10:COLOR 31:PRINT "  MENU  being  created!  ":COLOR 7
10600 MB$=MN$+".BAT"
10700 OPEN MB$ FOR OUTPUT AS #1
10800 PRINT #1,"ECHO OFF"
10900 PRINT #1,EC$
11100 PRINT #1,":M"
11200 PRINT #1,"CLS"
11300 PRINT #1,"PROMPT"
11400 PRINT #1,"CD "CD$
11500 PRINT #1,PA$
11600 PRINT #1,"TYPE ";MN$
11700 PRINT #1,"MZ"
11800 PRINT #1,"ECHO                                Please  Wait ..."
11900 PRINT #1,"IF ERRORLEVEL=123 GOTO ERMG
11910 T=0
12000 FOR I=26 TO 1 STEP -1
12100 IF M$(I)="" THEN 12300
12110 T=T+1:IF T=1 THEN PRINT #1,"IF ERRORLEVEL="STR$(I+97)" GOTO ERMG"
12200 PRINT #1,"IF ERRORLEVEL="STR$(I+96)" GOTO "CHR$(I+64)
12300 NEXT I
12400 PRINT #1,"IF ERRORLEVEL=27 GOTO EX
12500 PRINT #1,":ermg"
12600 PRINT #1,"cls"
12700 PRINT #1,"echo          *======================================*"
12800 PRINT #1,"echo          *           INVALID  RESPONSE          *"
12900 PRINT #1,"echo          *======================================*"
13000 PRINT #1,"pause"
13100 PRINT #1,"goto m"
13200 FOR I=1 TO N
13300 PRINT #1,":"CHR$(64+I)
13400 PRINT #1,"CLS":IF C$(I)="" THEN 13700
13500 PRINT #1,C$(I):IF C2$(I)="" THEN 13700
13600 PRINT #1,C2$(I)
13700 PRINT #1,"GOTO M"
13800 NEXT I
13900 PRINT #1,":EX"
14000 PRINT #1,"cls"
14100 PRINT #1," prompt ----- Type  ";MN$;"  for  MENU -----$_$_";PR$
14200 CLOSE
14300 LOCATE 12,10:PRINT "Your menu has been CREATED!"
14400 LOCATE 15,10:PRINT "Do you wish to create another menu (Y/N) ":
14410 IN$=INKEY$:IF IN$="" THEN 14410 ELSE IF IN$="Y" OR IN$="y" THEN CLEAR:GOTO 1100
14480 END
14500 'MEZ.BAS    (C)1987  Edwin K. Spain
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0936

     Volume in drive A has no label
     Directory of A:\

    DCOPY    DOC     16176   1-15-87  11:05a
    DCOPY    EXE     21262   8-01-86  10:58a
    FILES936 TXT      2985   9-28-88  11:40a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1541   9-27-88   9:32a
    MEZ                916   1-18-87  10:29p
    MEZ      BAS      6008   1-18-87   6:37a
    MEZ      BAT        85   1-18-87  10:25p
    MEZ      DOC     26515   1-18-87   5:34p
    MEZDEM   BAT      2623   1-18-87   6:44a
    MYMENU   EXE     39008   7-19-87   3:36p
    MZ       COM        16  11-17-86   2:25p
           12 file(s)     117173 bytes
                           39424 bytes free
