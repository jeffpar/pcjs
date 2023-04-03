---
layout: page
title: "PC-SIG Library Disk #794"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0794/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0794"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPOSER BY OAK TREE SOFTWARE"

    If you're like most people, you've always had the urge to create music.
    But for some reason you never picked up that first instrument and
    really learned how to play it.  COMPOSER makes your computer that first
    instrument.
    
    COMPOSER is a graphics-based music editor that lets you compose, edit,
    play, save, and print single-voice music on your PC.  Since COMPOSER is
    a graphics-based editor, you can actually see the notes that make up
    your music.  You do not have to work with a confusing mixture of
    letters and numbers.  Once your music looks correct on the screen and
    sounds correct, you can print your music with any dot matrix printer.
    
    COMPOSER is easy to use and very flexible.  If you have a PCjr, or
    compatible three-voice machine, COMPOSER can also create music files
    that later can be combined to make three-part sound.  This lets you
    create harmony and chords.
    
    COMPOSER's editing features make music entry easy.  By using COMPOSER's
    block insert and delete mode, you can manipulate large sections of music
    quickly.  Includes Beethoven's Symphony Number 5 and Minuet in G, John
    Phillip Sousa's Stars and Stripes Forever, and Scott Joplin's Maple Leaf
    Rag.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 3PART.BAS

```bas
1 DEFINT A-Z:KEY OFF:DEF SEG
10 SOUND ON
20 DIM MUSIC$(3,200),DIR$(150),DTA(22),DIRLIST(62),SORT(211),BLANK(8)
30 SCREEN 0:CLS:COLOR 7,1,1
35 GOSUB 1000:GOSUB 5999
40 INPUT"first  part";A1$
50 INPUT"second part";A2$
60 IF A2$="" THEN 80
70 INPUT"third  part";A3$
80 OPEN A1$+".mus" FOR INPUT AS #1
90 IF A2$="" THEN GOTO 120
100 OPEN A2$+".mus" FOR INPUT AS #2
110 IF A3$<>"" THEN OPEN A3$+".mus" FOR INPUT AS #3
120 GOSUB 510
130 '********************************************************
140 VOICE=1:MEASURE=1
150 WHILE NOT EOF(1)
160  LINE INPUT #1,NOTE$
170 GOSUB 460
180 WEND:MEASURE=MEASURE-1
190 IF A2$="" THEN 360
200 '********************************************************
210 VOICE=2:MEASURE=1
220 LINE INPUT #2,DUMMY$:INPUT #2,DUMMY$
230 WHILE NOT EOF(2)
240  LINE INPUT #2,NOTE$
250 GOSUB 460
260 WEND:MEASURE=MEASURE-1
270 '********************************************************
280 IF A3$="" THEN 360
290 VOICE=3:MEASURE=1
300 LINE INPUT #3,DUMMY$:INPUT #3,DUMMY$
310 WHILE NOT EOF(3)
320  LINE INPUT #3,NOTE$
330 GOSUB 460
340 WEND:MEASURE=MEASURE-1
350 '***********************************************
360 MAX=MEASURE:PRINT "Measures: ";MEASURE;:PRINT"  Tempo: ";TEMPO$
370 INPUT"Where do you want to start";START
380 INPUT"Where do you want to end";MUSICEND
387 INPUT"Tempo";NEWTEMPO$
388 IF NEWTEMPO$<>"" THEN TEMPO$=NEWTEMPO$
389 PLAY "t"+TEMPO$,"t"+TEMPO$,"t"+TEMPO$
390 IF MUSICEND=0 THEN MUSICEND=MAX
400 FOR COUNT=START TO MUSICEND
410 PLAY MUSIC$(1,COUNT),MUSIC$(2,COUNT),MUSIC$(3,COUNT)
420 NEXT COUNT
430 INPUT"Do you want to play it again";A$
431 GOSUB 6010
435 'GOSUB 3000
440 IF INSTR("Yy",A$)<>0 THEN GOTO 360 ELSE GOTO 40
450 '***********************************************
460 IF RIGHT$(NOTE$,1)="$" THEN NEWMEASURE=1:NOTE$=LEFT$(NOTE$,LEN(NOTE$)-1)
470 MUSIC$(VOICE,MEASURE)=MUSIC$(VOICE,MEASURE)+NOTE$
480 IF NEWMEASURE=1 THEN MEASURE=MEASURE+1:NEWMEASURE=0
490 RETURN
500 '***********************************************
510 INPUT#1,TIMESIG
520 LINE INPUT#1,TEMPO$
530 LINE INPUT #1,KEYSIG$
550 RETURN
1000 FOR X=0 TO 61
1010 READ Z$:POKE VARPTR(DIRLIST(0))+X,VAL("&h"+Z$):NEXT X
1011 FOR X=0 TO 210
1012 READ Z$:POKE VARPTR(SORT(0))+X,VAL("&h"+Z$):NEXT X
1020 DATA 55,8b,ec,8b,56,08,89,d3,83,c3,1e,b4
1030 DATA 1a,cd,21,8b,6e,06,8b,56
1040 DATA 01'************** change from 1 to 2
1050 DATA b4,4e,cd,21,3d,12,00,74,1c,83,c5
1060 DATA 03'**************** change from 3 to 4
1070 DATA 8b,7e
1080 DATA 01'**************** change from 1 to 2
1090 DATA 8b,f3,b9,08,00,ac,3c
1100 DATA 2e,74,04,aa,49,eb,f7,b0,20,f3,aa,b4
1110 DATA 4f,eb,dd
1120 DATA 5d,ca,04,00
1130 DIR=0
1140 FOR X=1 TO 100
1150 DIR$(X)="        "+""
1160 NEXT
1170 DIR$(0)="*.MUS"+CHR$(0)
1180 A=VARPTR(DIRLIST(0))
1190 CALL A(DTA(0),DIR$(0))
1200 X=1
1210 WHILE (DIR$(X)<>"        ") AND (X<=100)
1220 DIR=DIR+1:X=X+1
1230 WEND:DIR$(0)=""
2440 '****************************sort directory **************************
2445  SORT=VARPTR(SORT(0)):CALL SORT(DIR$(0),DIR)
2510 '*********************************************************************
2520 CLS:COL=1:ROW=1:COLLENGTH=13
2530 FOR X=1 TO DIR
2540 LOCATE ROW,COL:PRINT DIR$(X)
2550 ROW=ROW+1
2560 IF (X MOD COLLENGTH)=0 THEN COL=COL+9:ROW=1
2570 NEXT
2580 LOCATE COLLENGTH+1,1:PRINT STRING$(80,205);
2590 RETURN
2999 '***************** prepare to ask for more selections *************8
3000 FOR X=COLLENGTH+2 TO 23
3010 LOCATE X,1:PRINT STRING$(79," ");
3020 NEXT
3030 LOCATE COLLENGTH+2,1
3035 IF INSTR("Yy",A$)=0 THEN CLOSE:A1$="":A2$="":A3$="":ERASE MUSIC$:DIM MUSIC$(3,200)
3040 RETURN
5000 DATA 55,fc,8b,ec,8b,5e,06,8b,07,8b,5e,08
5010 DATA e8,0e,00,00,00,00,00,00,00,00,00,00
5020 DATA 00,00,00,00,00,5d,89,5e,00,89,46,02
5030 DATA 89,46,04,8b,46,04,d1,e8,89,46,04,85
5040 DATA c0,75,03,e9,99,00,8b,46,02,2b,46,04
5050 DATA 89,46,06,c7,46,08,00,00,8b,46,08,89
5060 DATA 46,0a,8b,46,0a,03,46,04,89,46,0c,8b
5065 DATA 46,0a,be,03,00,f7,e6,03,46,00,8b,f0
5070 DATA 8a,1c,80,fb,00,74,57,8b,ce,8b,74,01
5080 DATA 8b,46,0c,bf,03,00,f7,e7,03,46,00,8b
5090 DATA f8,8a,3d,80,ff,00,74,19,8b,d7,8b,7d
5100 DATA 01,ac,3a,05,72,34,77,0b,fe,cb,74,2e
5110 DATA fe,cf,74,03,47,eb,ee,8b,fa,8b,f1,8a
5120 DATA 04,8a,25,88,05,88,24,8b,44,01,8b,5d
5130 DATA 01,89,45,01,89,5c,01,8b,46,0a,2b,46
5140 DATA 04,89,46,0a,83,7e,0a,00,7f,8c,ff,46
5150 DATA 08,8b,46,08,3b,46,06,77,03,e9,78,ff
5160 DATA e9,58,ff,5d,ca,04,00
5998 '*********************** blank window *************************8
5999 DATA b8,00,06,b9,00,0e,ba,1e,18,b7,07,cd,10,cb
6000 FOR X=0 TO 13:READ A$:POKE VARPTR(BLANK(0))+X,VAL("&h"+A$):NEXT
6001 DEF SEG=&HB800:A=PEEK(1)
6002 DEF SEG:POKE VARPTR(BLANK(0))+10,A:RETURN
6010 A=VARPTR(BLANK(0)):CALL A
6030 LOCATE COLLENGTH+2,1
6040 IF INSTR("Yy",A$)=0 THEN CLOSE:A1$="":A2$="":A3$="":ERASE MUSIC$:DIM MUSIC$(3,200)
6050 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0794

     Volume in drive A has no label
     Directory of A:\

    3PART    BAS      4126   6-09-87  10:24p
    COMPOSER DOC     33574   6-09-87  10:21p
    COMPOSER EXE     48896   6-05-87   9:24p
    FILES794 TXT      2125   7-01-87   4:25p
    GO       BAT        38   7-01-87   4:11p
    GO       TXT       540   7-01-87   4:10p
    LUDWIG1  MUS      1408   6-01-87  12:05a
    LUDWIG2  MUS       896   6-01-87   5:59p
    LUDWIG3  MUS      1024   6-01-87   6:10p
    MAPLE1   MUS      4480   5-20-87   5:53p
    MAPLE2   MUS      2560   5-20-87   6:08p
    MAPLE3   MUS      2560   5-20-87   6:09p
    MINUETG1 MUS      1408   6-04-87   1:42p
    MINUETG2 MUS       768   6-04-87   1:53p
    MINUETG3 MUS       640   6-04-87   8:14p
    PRINTER            128   6-04-87   9:55p
    PRINTSET EXE     19712   6-05-87   9:28p
    SOUSA1   MUS      5376   5-12-87   3:47p
    SOUSA2   MUS      3968   5-15-87  12:32p
    SOUSA3   MUS      4352   5-15-87   1:06p
           20 file(s)     138579 bytes
                           16896 bytes free
