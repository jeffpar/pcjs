---
layout: page
title: "PC-SIG Diskette Library (Disk #1314)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1314/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1314"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAM GRAB BAG"

    For the PC practical joker, here are several safe (but insane) scams to
    play on some unsuspecting user's computer.  Place them in a batch file
    or on his hard disk.  When he comes back and touches a key or boots up
    his computer, look out!  One trick makes his machine sound like it's
    filling with water and then it goes into a spin drive cycle!  Fun
    galore.  Don't blame us, though, if your victim gets even!
    
    Other programs included here are a bit tamer: Convert almost any U.S
    measurement to the metric equivalent and vice versa; covers temperature,
    liquid, weight, linear distance, speed, and square and cubic volumes.
    CHK4BOMB checks a program to see if it does any disk writing or
    formatting and also displays any text it finds in the program code.
    SCRAMBLE and UNSCRAM can be used to encrypt and decrypt sensitive and
    private files.  OBLITER8 totally deletes a file so it will be
    unrecoverable.  SHOW provides a graphics demonstration of the PC-SIG
    logo.  Lastly, read a very uplifting text by Pythagoras, a famous early
    Greek philosopher and mathematician.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## KSCOPE.BAS

```bas


100 'KALEIDOSCOPE - JOHN SCHNELL - AUGUST 82
110 CLS
120 '
130 DEFINT A-Z
140 '
150 'initialize random number generator using MINUTES and SECONDS of TIME$ variable
160 N=VAL(MID$(TIME$,4,2)+MID$(TIME$,7,2)) MOD 32767
170 RANDOMIZE(N)
180 '
190 'initialize CHARACTER and ATTRIBUTE arrays
200 OPTION BASE 0
210 DIM C$(4),A(1)
220 C$(0)=CHR$(32)      'character for black (space)
230 C$(1)=CHR$(176)     'character for gray-value one
240 C$(2)=CHR$(177)     'character for gray-value two
250 C$(3)=CHR$(178)     'character for gray-value three
260 C$(4)=CHR$(219)     'character for white
270 A(0)=7              'attribute for normal intensity
280 A(1)=10             'attribute for high intensity
290 '
300 'setup screen
310 KEY OFF             'turn function key display off
320 COLOR 7,0
330 LOCATE 25,14,0      'set cursor on line 25 and turn cursor off
340 PRINT"***   push <space-bar> to clear screen or <X> to exit   ***";
350 '
360 'initialize V and H to near center of screen
370 V=13-RND(RND(13*RND(1))) : H=40-RND(RND(40*RND(1)))
380 '
390 'calculate next V,H position
400 VV=V : HH=H                                 'save old value for V and H
410 V=V+4*RND(1)-2                              'move up, down, or stay
420 IF V<1 OR V>12 THEN V=VV : GOTO 410         'check vertical plot range
430 H=H+4*RND(1)-2                              'move left, right, or stay
440 IF H<1 OR H>39 THEN H=HH : GOTO 430         'check horizontal plot range
450 IF 30*RND(1)<28 THEN 490                    'random shot to relocate plot
460 V=13*RND(1)+1 : H=40*RND(1)+1               'calculate new random position
470 '
480 'determine next character to plot
490 ATTRIB=A(RND(1))                            'get random attribute
500 CHAR=4*RND(1)                               'get random character
510 '
520 'play note and plot kaleidoscope
530 SOUND V*H*5+37,1                            'play sound using V and H
540 COLOR ATTRIB,0                              'set attribute mode
550 LOCATE V,H
560 PRINT C$(CHAR);
570 LOCATE 24-V,H
580 PRINT C$(CHAR);
590 LOCATE V,80-H
600 PRINT C$(CHAR);
610 LOCATE 24-V,80-H
620 PRINT C$(CHAR);
630 '
640 'check if blank screen or exit is requested
650 RESP$=INKEY$
660 IF RESP$=" " THEN COLOR 7,0 : CLS : GOTO 320
670 IF RESP$="X" OR RESP$="x" THEN 710
680 GOTO 400
690 '
700 'restore everything before quitting
710 COLOR 7,0
720 CLS
730 KEY ON
740 RUN "MENU.PGM"

```

## OBLITER8.BAS

```bas
10 '---------OBLITER8.BAS  1987------------
20 ' File Destruction Utility
30 ' Written by James Hill for the Public Domain
40 ' This program will NOT accept wildcards -
50 ' - would you want it to? Files "treated" with
60 ' OBLITER8 will be non-recoverable. Use care!
70 ' A compiled version is available. Compiled
80 ' using Microsoft QuickBASIC (trademark).
90 '-------------------------------------------
100 INPUT "enter the name of the file to be obliterated: ";N$
110 CT=0
120 OPEN "i",1,N$
130 PRINT INPUT$(1,#1);
140 CT=CT+1
150 IF EOF(1) THEN 170
160 GOTO 130
170 CLOSE #1
180 OPEN "o",1,N$
190 FOR X=1 TO CT
200 PRINT#1,"!";
210 NEXT X
220 PRINT
230 END
240 'SYSTEM (for the compiled version, line 140 was dropped
250 '(For the compiled version, line 140 was ommitted and
260 'line 150 was used instead.)
```

## SCRAMBLE.BAS

```bas
10 '---------Scramble.Bas------------
20 'A Primitive Encryption Program
30 'Use Unscram.Bas to restore the
40 'encrypted file.
50 '------------------------------
60 INPUT "What is the name of the file to be scrambled";N$
70 INPUT "What will be the new name for the scrambled file";O$
80 OPEN "i",1,N$
90 OPEN "o",2,O$
100 IF EOF(1) THEN 130
110 PRINT#2,CHR$(ASC(INPUT$(1,#1))+128);
120 GOTO 100
130 CLOSE #1,#2: NAME N$ AS "killfile":KILL "killfile"
140 PRINT
150 END
160 'SYSTEM
```

## UNSCRAM.BAS

```bas
10 '---------Unscram.Bas-----------
20 'This program will de-crypt a file
30 'encrypted with Scramble.Bas. 
40 '-------------------------------
50 INPUT "What is the name of the file to be UN-scrambled";N$
60 INPUT "What will be the new name for the UN-scrambled file";O$
70 OPEN "i",1,N$
80 OPEN "o",2,O$
90 IF EOF(1) THEN 120
100 PRINT#2,CHR$(ASC(INPUT$(1,#1))-128);
110 GOTO 90
120 CLOSE #1,#2: NAME N$ AS "killfile":KILL "killfile"
130 PRINT
135 END
140 'SYSTEM
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1314

     Volume in drive A has no label
     Directory of A:\

    BACKTALK COM     12032   1-10-86   8:54p
    BROWSE   COM      1024   7-29-86   1:05p
    CHK4BOMB DOC      1664  11-14-85   8:22a
    CHK4BOMB EXE     12032  11-14-85   8:21a
    DRAIN    EXE     11008   1-17-86   2:36a
    EATERS   COM      5120  12-24-85  11:32a
    FILE1314 TXT      2427   3-06-89  10:24a
    GO       BAT        91   1-18-89   4:35p
    GO1      TXT      1387   2-21-89   4:03p
    GO2      TXT      1695   2-21-89   4:03p
    GO3      TXT       848   2-21-89   4:03p
    GOLDEN   TXT      5954   2-01-88   9:24p
    KSCOPE   BAS      2560   7-24-86   8:21a
    LOGO     BAT        11   2-01-88   9:12p
    LOGO     SPS       378   2-01-88   6:39p
    MANUAL   BAT       147   1-18-89   4:06p
    MELT     COM       128   7-16-86   7:26p
    METRIC   DOC      4959   2-21-88   5:53p
    METRIC   EXE     81891   2-21-88   6:07p
    OBLITER8 BAS       842   2-01-88   7:07p
    OBLITER8 EXE     34660  12-20-87   6:30p
    P1       GX1      1280   1-10-88   6:59p
    P2       GX1       768   1-10-88   8:27p
    P3       GX1       384   1-10-88   8:34p
    P4       GX1       384   1-10-88   3:38p
    P5       GX1      2432   1-10-88   9:20p
    PYTHAG   BAT        19   2-01-88   9:17p
    SCRAMBLE BAS       498   2-01-88   7:12p
    SCRAMBLE EXE     37082  12-20-87   6:31p
    SHOW     EXE     16740   4-16-87  11:47p
    T1       GX1       640   1-10-88   9:05p
    T2       GX1       384   1-10-88   9:06p
    T3       GX1      2176   1-10-88   9:16p
    THATSALL EXE      3072  11-24-85   9:27p
    UNSCRAM  BAS       482   2-01-88   7:11p
    UNSCRAM  EXE     37098  12-20-87   6:32p
           36 file(s)     284297 bytes
                           20480 bytes free
