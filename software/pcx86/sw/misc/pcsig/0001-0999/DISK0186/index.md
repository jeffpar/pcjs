---
layout: page
title: "PC-SIG Diskette Library (Disk #186)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0186/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0186"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCREEN AND PRINTER"

    The printer utilities in this package are for Epson and compatible
    printers.  Control your printer from the keyboard.  Specify a variety
    of print modes and fonts such as compressed, italics, emphasized,
    underline, and more -- from within other applications.
    
    SP is a print spooler used to hold data intended for the printer.
    It works like the buffers that can be installed in the printer but the
    data is stored in RAM storage instead of in the printer.  The buffer
    is unloaded to the printer at the printer's speed while DOS proceeds
    at its speed.  You can specify the the size of the buffer from 1k to
    62K, the number of copies desired, and also which printer port you want
    to use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CREATOR.BAS

```bas
10 ON KEY(1) GOSUB 510
20 KEY (1) ON
30 'Program to display dot matrix characters from ROM patterns.
40 'Will Fastie --19 Nov 81. Typed in 6 Feb 82 from Creative Computing
50 ' VOL.8 NO. 3 (MARCH 82) BY R. HILL
60 'Modified to write over whole screen 2/13/82, by R. Hill.
70 'Modified to save screen image by pressing F1.  11/18/83, by M. Seidel
80 DEFINT A-Z
90 GOSUB 480
100 DEF SEG=&HF000
110 BASEADR=&HFA6E
120 BYTESPERCHAR=8
130 KEY OFF
140 REM ADD IN COLOR STATEMENT
150 CLS
160 X=1:Y=1
170 REM ADD IN MESSAGE FOR LINE 25
180 CHAR$=INKEY$: IF CHAR$="" THEN 180
190 CODE=ASC(CHAR$)
200 IF CODE >= 128 THEN BEEP: GOTO 140
210 ADR = BASEADR+(CODE*BYTESPERCHAR)
220 DOTCHAR=CODE
230 'Change "DOTSIZE" to get different width characters.
240 DOTSIZE=1
250 DOT$=STRING$(DOTSIZE,DOTCHAR)
260 GOSUB 360
270 Y=Y+8*DOTSIZE
280 IF Y<SCREENWIDTH GOTO 180
290 IF X=17 GOTO 330
300 X=X+8
310 Y=1
320 GOTO 180
330 Y=1:CHAR$=INKEY$:IF CHAR$="" THEN 330
340 PRINT"":PRINT"":PRINT"":PRINT"":PRINT"":PRINT"":PRINT"":PRINT"":PRINT""
350 GOTO 190
360 FOR ROW=1 TO 8
370   ROWVAL=PEEK(ADR+(ROW-1))
380   FOR COL=1 TO 8
390     COLMASK=2^(7-(COL-1))
400     IF (ROWVAL AND COLMASK) <> 0 THEN GOSUB 440
410   NEXT COL
420 NEXT ROW
430 RETURN
440 'Locate to bit position and display giant pixel!
450 LOCATE X+(ROW-1),Y+(COL-1)*DOTSIZE
460 PRINT LEFT$(DOT$,DOTSIZE);
470 RETURN
480 'Initialize display
490 SCREENWIDTH=80
500 RETURN
510 DEF SEG=&HB800
520 IF SSS=0 THEN BSAVE"PICTURE",0,&H4000
530 IF SSS=1 THEN BSAVE"PICTURE1",0,&H4000
540 IF SSS=2 THEN BSAVE"PICTURE2",0,&H4000
550 IF SSS=3 THEN BSAVE"PICTURE3",0,&H4000
560 IF SSS=4 THEN BSAVE"PICTURE4",0,&H4000
570 IF SSS=5 THEN BSAVE"PICTURE5",0,&H4000
580 IF SSS=6 THEN BSAVE"PICTURE6",0,&H4000
590 IF SSS=7 THEN BSAVE"PICTURE7",0,&H4000
600 IF SSS=8 THEN BSAVE"PICTURE8",0,&H4000
610 IF SSS=9 THEN BSAVE"PICTURE9",0,&H4000
620 IF SSS=10 THEN BSAVE"PICTUREA",0,&H4000
630 IF SSS=11 THEN BSAVE"PICTUREB",0,&H4000
640 IF SSS=12 THEN BSAVE"PICTUREC",0,&H4000
650 IF SSS=13 THEN BSAVE"PICTURED",0,&H4000
660 IF SSS=14 THEN BSAVE"PICTUREE",0,&H4000
670 IF SSS=15 THEN BSAVE"PICTUREF",0,&H4000
680 IF SSS=16 THEN BSAVE"PICTUREG",0,&H4000
690 IF SSS=17 THEN BSAVE"PICTUREH",0,&H4000
700 IF SSS=18 THEN BSAVE"PICTUREI",0,&H4000
710 IF SSS=19 THEN BSAVE"PICTUREJ",0,&H4000
720 IF SSS=20 THEN BSAVE"PICTUREK",0,&H4000:END
730 SSS=SSS+1
740 RETURN
```

## KYBD.BAS

```bas
100 'DIRECT PRINTER DRIVER.  THIS PROGRAM IS USED TO SEND CHARACTERS DIRECTLY
110 'TO THE PRINTER OUTPUT PORT ON THE IBM MONOCHROME BOARD OR PARALLEL PRINTER
120 'BOARD (or equivalent).  CONTROL CHARACTERS OR ESCAPE CODE SEQUENCES CAN BE
130 'SENT.  REMEMBER HOWEVER, THE PRINT BUFFER IS NOT DUMPED UNTIL IT IS FULL
140 '(set by the width command), OR A CARRIAGE RETURN, LINE FEED, OR OTHER
150 'APPROPRIATE CONTROL CHARACTER IS SENT.
160 '***
170 '***  Program by: Lee M. Buck, October, 1982. Arlington, Va.(703-527-5813)
180 '***  The subroutine that performs the direct output to the printer
190 '***  is from W. Fastie's  IBM  column in the Oct. 82 'Creative Computing '
200 '***
210 'THE PROGRAM WILL GET 'HUNG ' IF YOU SPECIFY THE INCORRECT PRINTER ADAPTER.
220 'IF THAT HAPPENS, ENTER Ctrl-Break AND START AGAIN.  TO QUIT THE PROGRAM
230 'ENTER Ctrl-Break.
240 CLEAR:CLOSE:CLS:DEFINT A-Z
250 DATAIO=&H378 : PRNTLATCH=&H37A : STATUSREG=&H379
260 LOCATE 5,1: PRINT "IS YOUR PRINTER ATTACHED TO THE IBM MONOCHROME"
270 PRINT "DISPLAY BOARD OR 'OTHER ' ?  PRESS  M  OR  O : ";
280 Q$=INKEY$: IF Q$="" THEN 280
290 IF Q$="M" OR Q$="m" OR Q$="O" OR Q$="o" THEN PRINT Q$ ELSE BEEP: GOTO 260
300 IF Q$<>"M" AND Q$<>"m" THEN 320
310 DATAIO=&H3BC : PRNTLATCH=&H3BE : STATUSREG=&H3BD
320 WIDTH "LPT1:",80
330 LOCATE 10,1:PRINT"PRESS KEY TO SEND TO PRINTER (including control keys) ";
340 DEF SEG: POKE 106,0
350 Q$=INKEY$: IF Q$="" THEN 350 ELSE PRINT Q$;
360 LNTH=LEN(Q$): C=ASC(MID$(Q$,LNTH))
370 GOSUB 390
380 LOCATE 10,1: PRINT SPACE$(79);:GOTO 330
390 OUT PRNTLATCH, &H6
400 IF INP(STATUSREG) <> &HDF THEN 400
410 OUT DATAIO, C
420 OUT PRNTLATCH, &H3F
430 IF INP(STATUSREG) <> &HDF THEN 430
440 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0186

     Volume in drive A has no label
     Directory of A:\

    DISK0186 ZIP     37500   3-20-90  12:07a
    PRTSCFX  ARC     15593  12-19-84   1:57p
    MONOCG   ASM     23738   6-12-83   3:33p
    PRTSCFX  ASM      9979  12-19-84   1:56p
    PRTSCFX  COM      4212  12-19-84   1:57p
    PRTSCFX  DOC      4415   9-28-84  10:08p
    WINEGA   ARC     54424  12-09-86   3:43a
    120COLS  COM       108  10-28-86   2:00a
    E640X480 DRV     17536  12-01-86  12:41a
    E640X480 GRB        14  12-09-86   2:10a
    E640X480 LGO         9  12-09-86   2:11a
    E752X410 DRV     17536  12-01-86   1:20a
    E752X410 GRB        14  12-09-86   2:10a
    E752X410 LGO         9  12-09-86   2:11a
    E896X350 DRV     17536  12-09-86   3:34a
    E896X350 GRB        14  12-09-86   2:10a
    E896X350 LGO         9  12-09-86   2:11a
    M720X350 DRV     14464  12-09-86   3:17a
    M720X350 GRB        13  12-09-86   2:11a
    M720X350 LGO        13  12-09-86   2:11a
    README   TXT      7296  12-09-86   3:43a
           21 file(s)     224432 bytes
                           79872 bytes free
