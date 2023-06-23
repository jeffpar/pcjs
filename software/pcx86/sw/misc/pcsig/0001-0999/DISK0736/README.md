---
layout: page
title: "PC-SIG Diskette Library (Disk #736)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0736/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0736"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LIGHTWAVE UTILITY DISK"

    LIGHTWAVE UTILITIES is a large collection of useful programs; some are
    quite uncommon. WHERE looks in all the directories of a specified drive
    and reports where a filename occurs. LS and DR both give sorted
    directories listed in column form, but DR also includes file size
    information.
    
    The other seven utilities are in BASIC, and they include the source
    code. They will:
    
    ~ Show you all the screen attributes of your screen
    
    ~ Show you all the screen characters
    
    ~ Find all the active memory in your PC
    
    ~ Tell you when your BIOS chip was designed
    
    ~ Tell you when your BASIC chip was designed
    
    ~ Show you the keyboard status bits
    
    ~ Perform percent-change calculations from one month to the next.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHARS.BAS

{% raw %}
```bas
1000 REM Listing 1.1 -- A program to display all the screen characters.
1030 GOSUB 2000
1040 GOSUB 3000
1050 GOSUB 2000
1060 GOSUB 4000
1070 GOSUB 5000
1080 GOSUB 6000
2000 REM
2010 KEY OFF : CLS : WIDTH 80
2015 PRINT " "
2020 PRINT "              Program to display all the screen characters."
2030 PRINT " "
2040 PRINT " "
2999 RETURN
3000 REM
3010 SEGVAL! = 0
3020 SEGVAL! = &HB800
3030 DEF SEG = SEGVAL!
3999 RETURN
4000 REM
4010 FOR HEX.DIGIT% = 0 TO 15
4020     LOCATE 6,HEX.DIGIT% * 3 + 14
4030     PRINT HEX$(HEX.DIGIT%)
4040     LOCATE HEX.DIGIT%+8,8
4050     PRINT HEX$(HEX.DIGIT%)
4060 NEXT HEX.DIGIT%
4070 LOCATE ,,0
4999 RETURN
5000 REM
5010 FOR ROW% = 0 TO 15
5020     FOR COL% = 0 TO 15
5030         POKE (ROW% + 7) * 160 + COL% * 6 + 26, COL% + ROW% * 16
5040     NEXT COL%
5050 NEXT ROW%
5999 RETURN
6000 LOCATE 25,1,1
6010 PRINT "Press any key to return to MENU...";
6020 IF LEN(INKEY$) = 0 THEN 6020
6030 CHAIN "menu"
```
{% endraw %}

## CHECK.TXT

{% raw %}
```
         
         You can test your copy of the distribution diskette, to make 
         sure the copy is accurate, by entering the command CHECK *.* 
         at the DOS prompt.  The output should look like this: 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  READ    .ME          CRC = 62 31

--> FILE:  WHERE   .COM         CRC = 61 77

--> FILE:  LS      .EXE         CRC = 62 A9

--> FILE:  DR      .COM         CRC = DF 69

--> FILE:  CHARS   .BAS         CRC = C6 3D

--> FILE:  MEMORY  .BAS         CRC = 80 52

--> FILE:  ROMBIOS .BAS         CRC = 32 93

--> FILE:  ROMBASIC.BAS         CRC = 14 F0

--> FILE:  MENU    .BAS         CRC = 99 A2

--> FILE:  SCREEN  .BAS         CRC = 56 C4

--> FILE:  KEYSTAT .BAS         CRC = 8F A6

--> FILE:  PERCENT .BAS         CRC = A6 04

--> FILE:  SUPPORT .            CRC = 67 15

--> FILE:  CHECK   .COM         CRC = BD 22

--> FILE:  CHECK   .TXT         CRC = 00 00

 ---------------------> SUM OF CRCS = DE 13

DONE
         

         Note: the CRC for CHECK.TXT will be incorrect as will be the 
         total, because you cannot write a file's CRC to the file 
         without altering the CRC of the file.
```
{% endraw %}

## KEYSTAT.BAS

{% raw %}
```bas
900 KEY OFF : CLS : WIDTH 80 : LOCATE ,,0
1005 PRINT "                This program displays the keyboard status bits."
1010 PRINT
1020 GOSUB 2000  '  Display what the bytes mean.
1030 GOSUB 3000
1040 GOSUB 4000
1050 GOSUB 5000
1060 GOTO 1040
2000 REM
2005 PRINT "    1 - Insert State                1 - Insert depressed"
2010 PRINT "    2 - Caps-Lock State             2 - Caps-Lock depressed"
2020 PRINT "    3 - Num-Lock State              3 - Num-Lock depressed"
2030 PRINT "    4 - Scroll-Lock State           4 - Scroll-Lock depressed"
2040 PRINT "    5 - Alt depressed               5 - Hold State (impossible)"
2050 PRINT "    6 - Control depressed           6 - unused"
2060 PRINT "    7 - Left Shift depressed        7 - unused"
2070 PRINT "    8 - Right Shift depressed       8 - unused"
3000 REM
3010 LOCATE 12,28
3020 PRINT " Byte 1   Byte 2";
3030 LOCATE 13,28
3040 PRINT "12345678 12345678";
3050 LOCATE 17,1
3060 PRINT "To see the status bits change, press (and hold) any of the ";
3070 PRINT "keys labelled"
3080 PRINT "'depressed' above."
3110 LOCATE 21,8
3120 PRINT "(beware the effect of the shift and Num-Lock on the Insert key)";
3130 LOCATE 24,15
3140 PRINT "to return to MENU, press any normal input key. . .";
3999 RETURN
4000 REM
4010 DEF SEG = &H40
4020 CONTROL% = PEEK (&H17)
4030 CHECK% = 128
4040 FOR I% = 1 TO 8
4050    LOCATE 15,27+I%
4060    IF CONTROL% >= CHECK% THEN COLOR 30,0 ELSE COLOR 7,0
4070    IF CONTROL% >= CHECK% THEN PRINT "1"; ELSE PRINT "0";
4080    IF CONTROL% >= CHECK% THEN CONTROL% = CONTROL% - CHECK%
4090    CHECK% = CHECK% / 2
4100 NEXT I%
4110 CONTROL% = PEEK (&H18)
4120 CHECK% = 128
4130 FOR I% = 1 TO 8
4140    LOCATE 15,36+I%
4150    IF CONTROL% >= CHECK% THEN COLOR 30,0 ELSE COLOR 7,0
4160    IF CONTROL% >= CHECK% THEN PRINT "1"; ELSE PRINT "0";
4170    IF CONTROL% >= CHECK% THEN CONTROL% = CONTROL% - CHECK%
4180    CHECK% = CHECK% / 2
4190 NEXT I%
4999 RETURN
5000 REM
5010 K$ = INKEY$
5020 IF LEN(K$) = 0 THEN RETURN
5030 IF (LEN(K$) = 2) AND (CHR$(82) = MID$(K$,2,1)) THEN RETURN
5040 CLS : LOCATE ,,1
5999 CHAIN "menu"
```
{% endraw %}

## MEMORY.BAS

{% raw %}
```bas
1000 REM -- A program to scan for and report active memory.
1010 GOSUB 2000
1020 GOSUB 3000
1030 GOSUB 4000
2000 REM
2010 KEY OFF : CLS : WIDTH 80
2020 PRINT "               Program to find and display active memory"
2030 PRINT
2040 PRINT "                 This program takes 65 seconds to run."
2050 PRINT
2060 PRINT "                    Addresses given in Hexidecimal."
2070 PRINT
2080 PRINT
2999 RETURN
3000 REM
3010 TRUE.% = -1
3020 FALSE.% = 0
3030 IN.MEMORY.% = FALSE.%
3040 FOR PARAGRAPH.! = 0 TO 65535! STEP 64
3050      GOSUB 5000
3060      IF (IN.MEMORY.%=FALSE.%) AND (MEMORY.HERE.%=TRUE.%) THEN GOSUB 6000
3070      IF (IN.MEMORY.%=TRUE.%)  AND (MEMORY.HERE.%=FALSE.%) THEN GOSUB 7000
3080      IN.MEMORY.% = FALSE.%
3090      IF MEMORY.HERE.% THEN IN.MEMORY.% = TRUE.%
3100 NEXT PARAGRAPH.!
3110 IF IN.MEMORY.% THEN PARAGRAPH.! = 65536! : GOSUB 7000
3999 RETURN
4000 REM
4010 PRINT
4020 PRINT "Finished"
4030 PRINT
4040 PRINT "Press any key to return to MENU."
4050 ANSWER$ = INKEY$
4060 IF LEN(ANSWER$) < 1 THEN 4050
4070 CHAIN "menu"
5000 REM
5010 DEF SEG = PARAGRAPH.!
5020 BYTE0.% = PEEK (0)
5030 BYTE1.% = PEEK (1)
5040 BYTE2.% = PEEK (2)
5050 BYTE3.% = PEEK (3)
5060 CHECK.COUNT.% = 0
5070 IF BYTE0.% = 233 THEN CHECK.COUNT.% = CHECK.COUNT.% + 1
5080 IF BYTE1.% = 233 THEN CHECK.COUNT.% = CHECK.COUNT.% + 1
5090 IF BYTE2.% = 233 THEN CHECK.COUNT.% = CHECK.COUNT.% + 1
5100 IF BYTE3.% = 233 THEN CHECK.COUNT.% = CHECK.COUNT.% + 1
5110 MEMORY.HERE.% = FALSE.%
5120 IF CHECK.COUNT.% <= 3 THEN MEMORY.HERE.% = TRUE.%
5999 RETURN
6000 REM
6010 IN.MEMORY.% = TRUE.%
6020 START.! = PARAGRAPH.!
6999 RETURN
7000 REM
7010 SIZE.! = (PARAGRAPH.!-START.!) * 16
7020 IF SIZE.! < 8 * 1024 THEN 7999
7030 PRINT "Active memory begins at ",
7040 PRINT HEX$(START.!)
7050 PRINT "                ends at ",
7060 PRINT HEX$(PARAGRAPH.!-1);"    ";
7070 PRINT SIZE.! / 1024;"KB";" (";SIZE.!;"bytes )"
7080 IN.MEMORY.% = FALSE.%
7090 PRINT
7999 RETURN
```
{% endraw %}

## MENU.BAS

{% raw %}
```bas
10 SCREEN 0,1,0
20 WIDTH 80
30 KEY OFF
40 COLOR 7,1,8
50 CLS
60 PRINT "              Please make a selection from:"
70 PRINT
80 PRINT
90 PRINT "     1.  Show me all the screen attributes."
100 PRINT "     2.  Show me all the screen characters."
110 PRINT "     3.  Find all the active memory in my PC."
120 PRINT "     4.  Tell me when my BIOS chip was designed."
130 PRINT "     5.  Tell me when my BASIC chip was designed."
140 PRINT "     6.  Show me the keyboard status bits."
150 PRINT "     7.  Perform percent change calculations for me."
160 PRINT
170 PRINT "     8.  Return to DOS."
180 PRINT
190 PRINT
200 PRINT "What would you like to do";
210 INPUT CHOICE
220 IF CHOICE = 1 THEN CHAIN "screen"
230 IF CHOICE = 2 THEN CHAIN "chars"
240 IF CHOICE = 3 THEN CHAIN "memory"
250 IF CHOICE = 4 THEN CHAIN "rombios"
260 IF CHOICE = 5 THEN CHAIN "rombasic"
270 IF CHOICE = 6 THEN CHAIN "keystat"
280 IF CHOICE = 7 THEN CHAIN "percent"
290 IF CHOICE = 8 THEN 330
300 PRINT
310 PRINT "Please enter a choice in the range 1 through 8."
320 GOTO 210
330 COLOR 7,0,0
340 CLS
350 SYSTEM
```
{% endraw %}

## PERCENT.BAS

{% raw %}
```bas
10 COLOR 7,1,8
20 CLS
30 PRINT
40 PRINT
50 PRINT "What is the new value this month";
60 INPUT NEWVALUE
70 PRINT
80 PRINT "What was the value last month";
90 INPUT OLDVALUE
100 PRINT
105 PRINT
110 PRINT
120 MONTH = ((NEWVALUE - OLDVALUE) / OLDVALUE) * 100
130 PRINT USING "The monthly percentage change is  +###.##";MONTH
140 PRINT
150 YEAR = MONTH * 12
160 PRINT USING "for a yearly percentage change of +###.##";YEAR
170 PRINT
180 PRINT
190 PRINT "Do you want to do another?  (Y/N)";
200 ANSWER$ = INKEY$
205 IF LEN(ANSWER$) < 1 THEN 200
210 IF ANSWER$ = "y" OR ANSWER$ = "Y" THEN GOTO 20
230 KEY OFF
240 CLS
250 CHAIN "MENU"
```
{% endraw %}

## ROMBASIC.BAS

{% raw %}
```bas
3 CLS
5 PRINT
6 PRINT
10 PRINT "The release date of your ROM-BASIC chip is: ";
20 DEF SEG = &HF600
30 FOR OFFSET = 19684 TO 19692
40    PRINT CHR$(PEEK(OFFSET));
50 NEXT OFFSET
60 PRINT
70 PRINT
80 PRINT
90 PRINT "Press any key to return to MENU."
100 ANSWER$ = INKEY$
110 IF LEN(ANSWER$) < 1 THEN 100
120 CHAIN "menu"
```
{% endraw %}

## ROMBIOS.BAS

{% raw %}
```bas
3 CLS
5 PRINT
6 PRINT
10 PRINT "The release date of your BIOS chip is: ";
20 DEF SEG = &HFFFF
30 FOR OFFSET = 5 TO 12
40    PRINT CHR$(PEEK(OFFSET));
50 NEXT OFFSET
60 PRINT
70 PRINT
80 PRINT
90 PRINT "Press any key to return to MENU."
100 ANSWER$ = INKEY$
110 IF LEN(ANSWER$) < 1 THEN 100
120 CHAIN "menu"
```
{% endraw %}

## SCREEN.BAS

{% raw %}
```bas
10 GOSUB 70
20 GOSUB 100
30 GOSUB 70
40 GOSUB 250
50 GOSUB 420
60 GOSUB 520
70 REM
80 KEY OFF : CLS : WIDTH 80
90 RETURN
100 REM
110 PRINT
120 PRINT "Color-graphics display?"
130 GOTO 160
140 PRINT
150 PRINT "  (answer Y or N)  ";
160 ANSWER$ = INKEY$
170 IF LEN(ANSWER$) < 1 THEN 160
180 IF LEN(ANSWER$) > 1 THEN 140
190 SEGVAL! = 0
200 IF MID$(ANSWER$,1,1) = "Y" OR MID$(ANSWER$,1,1)="y" THEN SEGVAL! = &HB800
210 IF MID$(ANSWER$,1,1) = "N" OR MID$(ANSWER$,1,1)="n" THEN CHAIN "menu"
220 IF SEGVAL! = 0 THEN 140
230 DEF SEG = SEGVAL!
240 RETURN
250 REM
260 LOCATE 11,1  : PRINT "Normal"
270 LOCATE 12,1  : PRINT "normal"
280 LOCATE 19,1  : PRINT "Normal"
290 LOCATE 20,1  : PRINT "blinking"
300 LOCATE 11,69 : PRINT "Bright"
310 LOCATE 12,69 : PRINT "normal"
320 LOCATE 19,69 : PRINT "Bright"
330 LOCATE 20,69 : PRINT "blinking"
340 FOR HEX.DIGIT% = 0 TO 15
350    LOCATE 6,HEX.DIGIT%  * 3 + 17
360    PRINT HEX$(HEX.DIGIT%)
370    LOCATE HEX.DIGIT%+8,11
380    PRINT HEX$(HEX.DIGIT%)
390 NEXT HEX.DIGIT%
400 LOCATE ,,0
410 RETURN
420 REM
430 FOR ROW% = 0 TO 15
440    FOR COL% = 0 TO 15
450       POKE (ROW% + 7) * 160 + COL% * 6 + 31, ROW% * 16 + COL%
460       POKE (ROW% + 7) * 160 + COL% * 6 + 33, ROW% * 16 + COL%
470       POKE (ROW% + 7) * 160 + COL% * 6 + 35, ROW% * 16 + COL%
480       POKE (ROW% + 7) * 160 + COL% * 6 + 32, 65
490    NEXT COL%
500 NEXT ROW%
510 RETURN
520 LOCATE 25,1,1
530 PRINT "Press any key to return to MENU...";
540 IF LEN(INKEY$) = 0 THEN 540
550 CHAIN "menu"
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0736

     Volume in drive A has no label
     Directory of A:\

    CHARS    BAS       739   7-02-84  11:11a
    CHECK    COM      1536  10-21-82   5:50p
    CHECK    TXT      1244   6-20-86   1:32a
    DR       COM     14654   6-23-86  12:03a
    KEYSTAT  BAS      1748   7-02-84  11:24a
    LS       EXE     16384   2-18-85   5:13p
    MEMORY   BAS      1646   7-02-84  11:16a
    MENU     BAS       939   6-20-86   1:00a
    PERCENT  BAS       535  11-06-84   3:03p
    READ     ME       2605   6-20-86   1:22a
    ROMBASIC BAS       272   7-02-84  11:19a
    ROMBIOS  BAS       264   7-02-84  11:17a
    SCREEN   BAS      1231   6-20-86   1:03a
    SUPPORT           1969   6-20-86   1:30a
    WHERE    COM       800   1-04-85   1:48a
           15 file(s)      46566 bytes
                          110080 bytes free
