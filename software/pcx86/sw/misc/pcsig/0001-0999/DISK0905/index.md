---
layout: page
title: "PC-SIG Library Disk #905"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0905/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0905"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DROEGE 2 OF 2 (ALSO 904)"

    DROEGE (Design Robot for Origination of Exacting Graphic Engineering)
    was created for designing printed circuit photomasters.
    
    DROEGE is a manual CAD system, which means it has no automatic
    functions such as schematic capture, wire listing, routing, parts
    lists, etc. It does provide the computer-aided equivalent of a taped
    master or drawing board with the advantage of always having things in
    perfect registration and the ability to work on selected layers.
    
    General features include a 65" x 65" working area, twelve layers deep,
    with a resolution of 0.001". The output can be scaled, however, so
    what is actually provided is a 65,000 X 65,000 point working space.
    Layers can be turned on and off and assigned any available color.
    Lines, pads, symbols, arcs and labels can be entered. The symbol
    feature is particularly powerful since symbols can be nested up to
    twenty levels deep, allowing the construction of very complex objects
    with a few keystrokes.
    
    Note: This program has a limited documentation file, so it will be
    very helpful if you have prior experience with CAD systems and with
    designing printed circuit boards.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ROLAND.BAS

```bas
100 REM
200 REM   October 20, 1986.
300 REM
400 REM -- first issue some resets and define screen color
500 REM ==================================================
600 ON ERROR GOTO 15500
700 SCREEN 0:COLOR 11,1,1:CLS
800 REM
900 REM -- declare var types and dimension arrays
1000 REM =========================================
1100 DEFINT I-N
1200 DIM B$(1000)
1300 REM
1400 REM -- This sections defines constants and default values.
1500 REM ======================================================
1600 TWOPI=6.283185
1700 ARCFACTOR=360!/(TWOPI*500!)
1800 NSTRINGMAX=1000
1900 REM
2000 REM
2100 REM
2200 REM -- parameter initialization --
2300 REM ==============================
2400 IAPERTURE=-1
2500 REM
2600 REM
2700 INPUT"Ready pen-plotter and enter name of plot file [.PLT]: ",FILENAME$
2800 IF FILENAME$="" THEN END
2900 IF INSTR(FILENAME$,".")=0 THEN FILENAME$=FILENAME$ + ".PLT"
3000 REM
3100 REM
3200 REM -- Enter main body of program. Open plot file and begin reading.
3300 REM ================================================================
3400 OPEN "I",#1,FILENAME$
3500 ISTR=NSTRINGMAX
3600 GOSUB 10200
3700 IF ITYPE = 1 THEN 4400 'VALID MODE FOUND
3800 IF ITYPE <> 3 THEN 3600
3900 PRINT "END OF INPUT FILE...PLOT DONE.":GOTO 9200
4000 REM
4100 REM -- Come here when valid mode found --
4200 REM =====================================
4300 REM -- test IMODE and jump to process command --
4400 IF A$="M" THEN 5600
4500 IF A$="D" THEN 5600
4600 IF A$="H" THEN LPRINT "H":GOTO 3600
4700 IF A$="A" THEN 6300
4800 IF A$="P" THEN 6800
4900 IF A$="C" THEN 7700
5000 PRINT "Plot file error -- command not recognized."
5100 PRINT "Plot terminated.":GOTO 9200
5200 REM
5300 REM
5400 REM -- Come here to process M and D modes --
5500 REM ========================================
5600 MD$=A$:GOSUB 10200:IX=IVALUE
5700 GOSUB 10200:IY=IVALUE:LPRINT MD$;IX;",";IY
5800 GOSUB 10200:IF ITYPE <> 2 THEN 3700 ELSE IX=IVALUE:GOTO 5700
5900 REM
6000 REM
6100 REM -- Come here to process aperture command --
6200 REM ===========================================
6300 GOSUB 10200:IAPERTURE=IVALUE:GOTO 3700
6400 REM
6500 REM
6600 REM -- Come here to expose a pad --
6700 REM ===============================
6800 GOSUB 10200:IX=IVALUE
6900 GOSUB 10200:IY=IVALUE
7000 LPRINT "M";IX;",";IY
7100 GOSUB 12400
7200 GOSUB 10200:IF ITYPE <> 2 THEN 3700 ELSE IX=IVALUE:GOTO 6900
7300 REM
7400 REM
7500 REM -- Come here to draw an arc or circle
7600 REM =====================================
7700 GOSUB 10200:IXCENTER=IVALUE
7800 GOSUB 10200:IYCENTER=IVALUE
7900 GOSUB 10200:IRADIUS=IVALUE
8000 GOSUB 10200:ITHETA1=VALUE*ARCFACTOR
8100 GOSUB 10200:ITHETA2=VALUE*ARCFACTOR
8200 IF ITHETA1>360! THEN ITHETA1=ITHETA1-360!
8300 IF ITHETA2>360! THEN ITHETA2=ITHETA2-360!
8400 IF ITHETA2>ITHETA1 THEN LPRINT"C";IXCENTER;",";IYCENTER;",";IRADIUS;",";ITHETA1;",";ITHETA2:GOTO 8700
8500 LPRINT"C";IXCENTER;",";IYCENTER;",";IRADIUS;",";ITHETA1;",360"
8600 LPRINT"C";IXCENTER;",";IYCENTER;",";IRADIUS;",0,";ITHETA2
8700 GOSUB 10200:IF ITYPE=2 THEN IXCENTER=IVALUE:GOTO 7800 ELSE GOTO 3700
8800 REM
8900 REM
9000 REM -- Come here to close file, etc., at end of plot --
9100 REM ===================================================
9200 CLOSE #1:IAPERTURE=-1:LPRINT"H":GOTO 2400
9300 REM
9400 REM ========== END OF MAIN ROUTINE....MAJOR SUBROUTINES FOLLOW.
9500 REM ===========================================================
9600 REM ===========================================================
9700 REM ===========================================================
9800 REM
9900 REM
10000 REM This subroutine reads the plot file and classifies the data strings.
10100 REM ====================================================================
10200 IF ISTR < NSTRINGMAX THEN 10900
10300 FOR ISTR=1 TO NSTRINGMAX
10400 IF NOT EOF(1) THEN 10600
10500 B$(ISTR)="^Z":ISTR=NSTRINGMAX:GOTO 10700
10600 INPUT #1,B$(ISTR)
10700 NEXT ISTR
10800 ISTR=0
10900 ISTR=ISTR+1:A$=B$(ISTR):IF A$="" THEN 10200
11000 IF A$ = "^Z" THEN ITYPE=3:RETURN 'DECLARE END OF FILE
11100 REM
11200 REM now test first character for a numeral or + or - or decimal point.
11300 IASC=ASC(A$):IF IASC=43 OR IASC=45 OR IASC=46 OR (IASC>47 AND IASC<58) THEN 11900
11400 REM
11500 REM Come here if string seems to be a command letter.
11600 ITYPE=1:VALUE=0!:IVALUE=0:RETURN
11700 REM
11800 REM Come here if string seems to be numerical data.
11900 ITYPE=2:VALUE=VAL(A$):IVALUE=VALUE
12000 RETURN
12100 REM
12200 REM
12300 REM This routine draws pad outlines.
12400 LPRINT"A";IX;",";IY
12500 ON IAPERTURE GOTO 12800,12800,12900,13000,13100,13200,13300,13400,13500,13600,13700,13800,13900,14000,14100
12600 REM Draw an X if iaperture is not between 1 and 15 inclusive.
12700 LPRINT"R-15,-15":LPRINT"I30,30":LPRINT"R-30,0":LPRINT"I30,-30":RETURN
12800 IRADIUS=1:GOTO 14600
12900 IRADIUS=2:GOTO 14600
13000 IRADIUS=2:GOTO 14600
13100 IRADIUS=4:GOTO 14600
13200 IRADIUS=6:GOTO 14600
13300 IRADIUS=8:GOTO 14600
13400 IRADIUS=10:GOTO 14600
13500 IRADIUS=12:GOTO 14600
13600 IRADIUS=16:GOTO 14600
13700 ISIDE=13:GOTO 14900
13800 ISIDE=16:GOTO 14900
13900 ISIDE=20:GOTO 14900
14000 ISIDE=25:GOTO 14900
14100 IRADIUS=25:GOSUB 14600:ISIDE=2*IRADIUS
14200 LPRINT"I";-ISIDE;",0":LPRINT"R";IRADIUS;",";IRADIUS
14300 LPRINT"I0,";-ISIDE:RETURN
14400 REM
14500 REM This section draws a round pad outline of radius IRADIUS.
14600 LPRINT"G";IRADIUS;",0,360":RETURN
14700 REM
14800 REM This section draws a square pad outline of size ISIDE.
14900 IHALF=ISIDE\2
15000 LPRINT"R";IHALF;",";-IHALF
15100 LPRINT"I0,";ISIDE;",";-ISIDE;",0,0,";-ISIDE;",";ISIDE;",0"
15200 RETURN
15300 REM
15400 REM This code required to avoid timeout error with Roland pen plotter.
15500 IF ERR=24 THEN RESUME 0
15600 ON ERROR GOTO 0
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0905

     Volume in drive A has no label
     Directory of A:\

    ABOUTPC  DOC     15191   9-17-88   5:17p
    APPENDIX BAT        71  10-12-86   6:02p
    COMMANDS DOC     40149   8-21-88   8:56p
    DEMO     DOC     11216   9-05-88  11:42p
    ERRORS   DOC      8731   8-21-88   9:04p
    FILES905 TXT      2072   9-28-88  11:20a
    FIRST    DOC     11868   9-05-88  10:58p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848   9-26-88   3:51p
    HOWTO    DOC     12257   8-21-88   8:52p
    INTRO    DOC      9983   9-05-88  11:01p
    KEYTREE  DOC     10613   9-07-88   8:31p
    LEARNSYM DOC     37768   9-07-88  10:25p
    MANUAL   BAT        84   9-05-88  11:48p
    MISC     BAT        97   9-05-88  11:53p
    ORDER    DOC      1547   9-07-88   9:01p
    PHOTOOL  DOC      3922   9-07-88   8:38p
    PLOTOUT  DOC      3746   8-21-88   8:11p
    PRICE    DOC      3611   9-07-88   8:40p
    PRINTALL BAT       283   9-06-88  12:12a
    PROD     DOC      9992   9-07-88   8:43p
    QUICK    DOC      4252   9-07-88   8:22p
    READ2    ME       4291   9-07-88  10:21p
    REGISTER DOC      1473   9-07-88   9:00p
    ROLAND   BAS      5875  10-20-86   9:54p
    STANDARD DOC      2835   8-21-88   8:07p
    TUTOR    DOC     16959   9-06-88   9:45p
    UPDATE   DOC     12960   9-07-88   9:08p
    USERS    DOC       935   9-07-88   8:44p
           29 file(s)     233667 bytes
                           74752 bytes free
