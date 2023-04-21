---
layout: page
title: "PC-SIG Diskette Library (Disk #346)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0346/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0346"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "YOUR ART"

    How to Start: Type: MENU (press enter).
    
    Suggested Registration: $100.00 for full user registration.
    
    File Descriptions:
    
    AUTOEXEC BAT  Start Up.
    KD-DRAW  EXE  Main drawing program.
    KD-DRAW  TXT  Program text.
    KD-DRAW  HLP  Help file for program.
    KD-PAINT PIC  Paint colors.
    KD-PTRN  PIC  64 fill patterns.
    KD-FONT? FNT  Text font files.
    KD-MOUSE MSC  Mouse files.
    KD-MOUSE COM  Mouse files.
    KD-MSMOS DEF  Mouse files.
    KD-MSMOS MNU  Mouse files.
    KD-PRNT? TBL  Printer tables.
    KD-UPDAT TXT  Update information.
    KD-MENU  TXT  DOS Menu.
    KD-DRAW  HOT  Hot Key definition file.
    BASRUN   EXE  Used by other EXE files.
    DATEIT   EXE  Replaces DOS DATE.
    CAMERA   COM  Screen capture.
    KD-TRANS EXE  Macro to text translation.
    KEYTBL   DAT  Translation table used by KD-TRANS.EXE.
    H        BAT  DOS help info.
    I        BAT  Copyright info.
    KD       BAT  Runs KD-DRAW.
    DEMO     BAT  Sample Macro file demo.
    SLIDEMO  BAT  Runs SCNSHOW.MCR on library disk.
    DOC      BAT  Prints Documentation.
    INSTALL  BAT  Copies disk or installs to hard disk.
    MENU     BAT  ---!!!!RUN THIS FIRST!!!!---
    H        BAT  DOS help info.
    I        BAT  Copyright info.
    KD       BAT  Runs KD-DRAW.
    DEMO     BAT  Sample Macro file demo.
    SLIDEMO  BAT  Runs SCNSHOW.MCR on library disk.
    DOC      BAT  Prints Documentation.
    INSTALL  BAT  Copies disk or installs to hard disk.
    MENU     BAT  ---!!!!RUN THIS FIRST!!!!---
    XTSUNIT  PTN  Part of YOUART
    YA1V4    EXE  Program to generate medium res graphics
    YA1V4    DOC  Documentation for YA1V4
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHSHEET.DOC

{% raw %}
```
                             YOURART1 Version 4.00
                           Function Key Cheat Sheet

                   Legend    ^ = Ctrl Key        ~ = Alt Key

                                  M O D E   1

F1   Set/Reset Dot       ^F1  Load Picture             ~C   Background Color
F2   Save Picture        ^F2  Picture - Printer        ~D   Directory
F3   Ellipse             ^F3  Load Pattern             ~E   Erase
F4   Box                 ^F4  Save Pattern             ~G   Go Dot Graphics
F5   Paint               ^F5  Change Color [Block]     ~H   Help
F6   Exit                                              ~I   Put Pattern (And)
F7   Cursor Step         ^F7  Define Block             ~O   Put Pattern (Or)
F8   Palette Color       ^F8  Grid in Block            ~P   Put Pattern (Xor)
F9   Spray Paint         ^F9  Reverse Color [Block]    ~S   Define Pattern
F10  Line                ^F10 Reverse Color [Screen]   ~T   Go Text Input
Esc  Exit Sub-Function   Return  Completes Entry       ~3   Circle


-------------------------------- fold here -----------------------------------



                                  M O D E   2

          Esc       Exit to Mode 1           F7   Cursor Step
          Esc       Exit Sub-Function        ~D   Dot Color
          Return    Completes Entry          ~H   Help













-------------------------------- fold here -----------------------------------



                                  M O D E   3

          Esc       Exit to Mode 1           F7   Cursor Step
          Esc       Exit Sub-Function        ~H   Help
          Return    Completes Entry          ~F   Change Fonts
          Backspace Erase Last Letter        ~L   Letter Color

```
{% endraw %}

## FILES346.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 346  Color Paint                                        v1   DS2
------------------------------------------------------------------------
Complete paint program for medium resolution graphics for the
PC.  This is well documented and is ready to run.  Requires only a color
card but will support Graphics printers.
 
CHSHEET  DOC  Handy 1 page reference chart of YOUART commands
KEYBOARD PTN  Part of YOUART
MONITOR  PTN     "     "
PCSUNIT  PTN     "     "
README   BAT  Instructions on printing manual and cheat sheet
TIMEUS   COM  Part of YALOOK
XTSUNIT  PTN  Part of YOUART
YA1-1    HLP  Help screens for YA1V4
YA1-2    HLP     "     "
YA1-3    HLP     "     "
YA1-4    HLP     "     "
YA1-5    HLP     "     "
YA1-6    HLP     "     "
YA1-7    HLP     "     "
YA1-8    HLP     "     "
YA1F-1   FNT  1/2 size font upper case and typwritter symbols, left to right
YA1F-2   FNT  same as 1 execpt top to bottem
YA1F-3   FNT  Same as 1 execpt bottem to top
YA1F-4   FNT  Normal size Upper lower case typewritter symbols left to right
YA1F-5   FNT  2X size upper lower typewritter symbols hollow letters
YA1F-6   FNT  Same as 5 with soild lettters
YA1F-7   FNT  Old English font
YA1F-8   FNT  Script foint
YA1LOOK  BAS  Program to display medium res graphics
YA1V4    DOC  Documentation for YA1V4
YA1V4    EXE  Program to generate medium res graphics
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## YA1LOOK.BAS

{% raw %}
```bas
10 GOTO 60
20 ' YA1LOOK.BAS   YOURART1 PICTURE DISPLAY PROGRAM
30 ' JULY 1984     EVERETT DELANO
40 '               P.O. BOX 205
50 '               ELK CITY, OKLA. 73648
60 DEF SEG=0:IF (PEEK(&H410) AND &H30) <> &H30 THEN 70 ELSE 1360
70 DEF SEG:POKE 106,0
80 SCREEN 0,1,0,0:WIDTH 80:KEY OFF
90 DEFINT A-Z:DIM SORT$(101)
100 ON ERROR GOTO 1170
110 GOSUB 1390
120 FOR COUNT=1 TO 10:KEY COUNT,"":NEXT
130 COLOR 7,4,1:CLS
140 LEGEND$="* Press   Esc   To EXIT *"
150 LOCATE 25,28:COLOR 2:PRINT LEGEND$;:COLOR 7
160 TITLE$="* * * * YOURART  MEDIUM  RESOLUTION  DISPLAY * * * *"
170 CENTER=(80-LEN(TITLE$))/2
180 LOCATE 1,CENTER,0:PRINT TITLE$
190 LOCATE 2,22:COLOR 19:PRINT "(MAXIMUM OF 88 PICTURES PER SESSION)":COLOR 7
200 LOCATE 5,8,0
210 PRINT"WHICH DRIVE CONTAINS THE PICTURES: ";
220 INK$=INKEY$:IF LEN(INK$)<>1 THEN  220
230 IF INK$=CHR$(27) THEN 1230
240 PRINT INK$;
250 IF ASC(INK$)>96 AND ASC(INK$)<103 THEN INK$=CHR$(ASC(INK$)-32)
260 IF INSTR("ABCDEF",INK$)<1 THEN LOCATE 6,1,0:GOSUB 1120:GOTO 200
270 DRIVE$=LEFT$(INK$,1)+":"
280 LOCATE 7,8,0
290 PRINT "MANUAL OR AUTOMATIC DISPLAY"
300 LOCATE 8,27,0:PRINT "SELECT M or A : ";
310 INK$=INKEY$:IF INK$="" THEN 310
320 IF INK$=CHR$(27) THEN 1230
330 PRINT INK$;
340 S=INSTR("MmAa",INK$):IF S<1 THEN LOCATE 9,1,0:GOSUB 1120:GOTO 300
350 IF S=1 OR S=2 THEN GOTO 790
360 LOCATE 25,26:BEEP:COLOR 18:PRINT "* Enter    QUIT    To EXIT *";:COLOR 7
370 LOCATE 10,8,0
380 PRINT "DISPLAY DURATION IN SECONDS"
390 LOCATE 11,1,0:PRINT STRING$(79," ");:LOCATE 11,29,0
400 INPUT "MAXIMUM  60 : ",SECS$
410 IF SECS$="QUIT" OR SECS$="quit" OR SECS$="Quit" THEN 1230
420 SECS=VAL(SECS$)
430 IF SECS>60 THEN LOCATE 11,1,0:GOSUB 1120:GOTO 390
440 LOCATE 5,8,0
450 IF S=1 OR S=2 THEN GOTO 790
460 WIDTH 80:COLOR 0,0,0:CLS
470 FILES DRIVE$+"*.PIC"
480 GOSUB 1260
490 CROW=CSRLIN
500 COUNT=0
510 LOCATE 1,1,1
520 FOR ROW=STL TO CROW
530 FOR COL=1 TO 72 STEP STP
540 COUNT=COUNT+1
550 FOR N=0 TO 11
560 SORT$(COUNT)=SORT$(COUNT)+CHR$(SCREEN(ROW,(COL+N)))
570 NEXT N
580 IF LEFT$(SORT$(COUNT),1)=" " THEN COUNT=COUNT-1 :GOTO 620
590 SORT$(COUNT)=DRIVE$+SORT$(COUNT)
600 NEXT COL
610 NEXT ROW
620 IF COUNT>88 THEN 1240
630 TOTPICS=COUNT
640 FOR COUNT=1 TO TOTPICS-1
650 FOR PLACE=COUNT+1 TO TOTPICS
660 IF SORT$(PLACE)<SORT$(COUNT) THEN SWAP SORT$(COUNT),SORT$(PLACE)
670 NEXT PLACE
680 NEXT COUNT
690 SCREEN 1,0:COLOR 0,0
700 FOR PIC=1 TO TOTPICS
710 BLOAD SORT$(PIC)
720 GOSUB 760
730 CLS
740 NEXT PIC
750 GOTO 1230
760 IF VMODE$="M" THEN GOTO 910
770 FOR CLOCK!=1 TO 1100*SECS:NEXT
780 RETURN
790 CLS:LOCATE 5,22,0:PRINT "Grey Plus Key `+' for next picture."
800 LOCATE 7,22,0:PRINT "Grey Minus Key `-' for previous picture."
810 LOCATE 9,22,0:PRINT "F1 thru F8 Change Background Color"
820 LOCATE 11,22,0:PRINT "F9 and F10 Change Pallette"
830 LOCATE 13,22,0:PRINT "Esc  Key to EXIT from display"
840 LOCATE 19,22,0:PRINT "Press   ";CHR$(17);CHR$(196);CHR$(217);"   to begin"
850 LOCATE 25,26,0:COLOR 18:PRINT "* Press   Esc   To Exit *";:COLOR 7
860 INK$=INKEY$:IF INK$="" THEN 860
870 IF INK$=CHR$(27) THEN 1230
880 IF INK$<>CHR$(13) THEN 860
890 VMODE$="M"
900 GOTO 460
910 INK$=INKEY$:IF INK$="" THEN 910 ELSE IF LEN(INK$)>1 THEN 960
920 IF INK$="+" THEN RETURN
930 IF INK$="-" THEN PIC=PIC-2:GOSUB 1100:RETURN
940 IF INK$=CHR$(27) THEN 1230
950 GOTO 910
960 IF LEN(INK$)=2 THEN 970 ELSE 910
970 S=ASC(MID$(INK$,2,1))-58:IF S<1 OR S>10 THEN 910
980 ON S GOSUB 1000,1010,1020,1030,1040,1050,1060,1070,1080,1090
990 GOTO 910
1000 COLOR 0:RETURN
1010 COLOR 1:RETURN
1020 COLOR 2:RETURN
1030 COLOR 3:RETURN
1040 COLOR 4:RETURN
1050 COLOR 5:RETURN
1060 COLOR 6:RETURN
1070 COLOR 7:RETURN
1080 COLOR ,0:RETURN
1090 COLOR ,1:RETURN
1100 IF PIC=-1 THEN PIC=0
1110 RETURN
1120 BEEP:LOCATE CSRLIN,20,0:PRINT "IMPROPER RESPONSE - PLEASE TRY AGAIN!!";
1130 FOR COUNT=1 TO 5000:NEXT
1140 LOCATE CSRLIN,1,0:PRINT STRING$(79," ");
1150 LOCATE CSRLIN-1,1,0:PRINT STRING$(79," ");
1160 BEEP:RETURN
1170 IF ERL<>470 THEN 1200
1180 COLOR 14,1,0:CLS:LOCATE 12,10,1:PRINT "NO PICTURE FILES FOUND"
1190 GOSUB 1500:END
1200 SCREEN 0,1,0,0:WIDTH 80:COLOR 14,1,0:CLS
1210 LOCATE 12,10,11:PRINT "ERROR";ERR;" OCCURED IN LINE";ERL
1220 GOSUB 1500:END
1230 SCREEN 0,1,0,0:WIDTH 80:COLOR 14,1,0:CLS:GOSUB 1500:END
1240 COLOR 14,1,0:CLS:LOCATE 12,10,1:PRINT "TOO MANY PICTURE FILES!!"
1250 GOSUB 1500:END
1260 IF SCREEN(1,14) = 32 THEN 1290
1270 STP=13
1280 GOTO 1330
1290 IF SCREEN(2,14) = 32 THEN 1320
1300 STP=13
1310 GOTO 1330
1320 STP=18
1330 IF SCREEN(1,9) = 46 THEN STL=1:GOTO 1350
1340 STL=2
1350 RETURN
1360 DEF SEG:POKE 106,0:COLOR 14,1,0:CLS:BEEP
1370 LOCATE 12,15:PRINT "PROGRAM REQUIRES IBM COMPATABLE COLOR GRAPHICS CARD!"
1380 BEEP:END
1390 DEF SEG:P=0
1400 FOR COUNT=1 TO 10
1410 KEYHOLD$(COUNT)=""
1420 WHILE PEEK(P+1619)<>0
1430 KEYHOLD$(COUNT)=KEYHOLD$(COUNT)+CHR$(PEEK(P+1619))
1440 P=P+1
1450 WEND
1460 P=COUNT*16
1470 KEYHOLD$(COUNT)=KEYHOLD$(COUNT)+CHR$(0)
1480 NEXT
1490 RETURN
1500 DEF SEG
1510 FOR COUNT=1 TO 10
1520 FOR PLACE=1 TO LEN(KEYHOLD$(COUNT))
1530 POKE 1618+(COUNT-1)*16+PLACE,ASC(MID$(KEYHOLD$(COUNT),PLACE))
1540 NEXT PLACE,COUNT
1550 KEY OFF:KEY ON
1560 RETURN
```
{% endraw %}

## YA1V4.DOC

{% raw %}
```



         
             
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
                            YOURART1  Version 4.00
                          MEDIUM RESOLUTION GRAPHICS 










    


                                September 1984

                                  *COPYRIGHT*
                               Everett B.  Delano
                                  P.O. BOX 205
                            Elk City, Oklahoma 73648 















                           T A B L E   O F   C O N T E N T S

            1. WHAT'S ON THE DISK..........................................1-1
               1.1. MAKING A WORKING COPY..................................1-1
               1.2. STARTING THE YOURART1 PROGRAM..........................1-1
               1.3. SYSTEM REQUIREMENTS....................................1-1
               1.4. SYSTEM OPTIONS.........................................1-1

            2. DESCRIPTION  OF  THE  AVAILABLE COLORS......................2-1
               2.1. BACKGROUND COLORS......................................2-1
               2.2. PALETTE COLORS.........................................2-1

            3. MODE 1    MASTER MODE.......................................3-1
               3.1. Alt H     HELP!!!!.....................................3-1
               3.2. RETURN KEY.............................................3-1
               3.3. Esc KEY................................................3-1
               3.4. STANDARD CURSOR MOVEMENT...............................3-1
               3.5. EXTENDED CURSOR MOVEMENT...............................3-2
               3.6. F1   SET/RESET CURSOR DOT..............................3-2
               3.7. F2   SAVE CURRENT DRAWING TO DISK......................3-2
               3.8. F6   EXIT WITHOUT SAVING...............................3-2
               3.9. F7   CHANGE CURSOR DOT STEP............................3-2
               3.10. F8   TOGGLE PALETTE COLOR.............................3-2
               3.11. F3   DRAW AN ELLIPSE..................................3-2
               3.12. Alt 3  DRAW A CIRCLE..................................3-3
               3.13. F4   DRAW A BOX.......................................3-4
               3.14. F5   PAINT AN OBJECT..................................3-4
               3.15. F9   SPRAY PAINT......................................3-4
               3.16. F10  DRAW A LINE......................................3-4
               3.17. Ctrl F1   LOAD A DRAWING..............................3-5
               3.18. Ctrl F2   GRAPHICS TO PRINTER.........................3-5
               3.19. WORKING WITH PATTERNS.................................3-5
                     3.19.1. Alt S     CAPTURING A PATTERN.................3-5
                     3.19.2. Ctrl F3   LOADING A PATTERN FROM DISK.........3-6
                     3.19.3. Ctrl F4   SAVE PATTERN TO DISK................3-6
                     3.19.4. MANIPULATION OF PATTERNS......................3-6
                             3.19.4.1. Alt P     (LOGICAL XOR) OVERLAY.....3-6
                             3.19.4.2. Alt I     (LOGICAL AND) OVERLAY.....3-6
                             3.19.4.3. Alt O     (LOGICAL  OR) OVERLAY.....3-7
               3.20. WORKING WITH BLOCKS...................................3-7
                     3.20.1. Ctrl F7   DEFINE A BLOCK......................3-7
                     3.20.2. Ctrl F8   DRAW A GRID INSIDE A BLOCK..........3-7
                     3.20.3. MANIPULATION OF COLORS IN A BLOCK.............3-8
                             3.20.3.1. Ctrl F9   REVERSE ALL COLORS........3-8
                             3.20.3.2. Ctrl F5   ONE COLOR TO ANOTHER......3-8
               3.21. Ctrl F10  REVERSE THE COLORS OF THE ENTIRE SCREEN.....3-8
               3.22. Alt C     CHANGE BACKGROUND COLOR.....................3-8
               3.23. Alt D     DIRECTORY...................................3-8
               3.24. Alt E     ERASE SCREEN................................3-9
               3.25. Alt G     GO TO DOT x DOT GRAPHICS MODE (MODE 2)......3-9
               3.26. Alt T     GO TO TEXT INPUT MODE (MODE 3)..............3-9






                                        I



                           T A B L E   O F   C O N T E N T S

            4. MODE 2    DOT x DOT GRAPHICS................................4-1
               4.1. Alt H     HELP!!!!.....................................4-1
               4.2. RETURN KEY.............................................4-1
               4.3. Esc KEY................................................4-1
               4.4. Esc KEY................................................4-1
               4.5. Alt D     SELECT DOT COLOR.............................4-1
               4.6. CURSOR MOVEMENT........................................4-2
               4.7. F7   CHANGE CURSOR DOT STEP............................4-2

            5. MODE 3    TEXT INPUT........................................5-1
               5.1. Alt H     HELP!!!!.....................................5-1
               5.2. RETURN KEY.............................................5-1
               5.3. Esc KEY................................................5-1
               5.4. Esc KEY................................................5-1
               5.5. FONTS - DESCRIPTION....................................5-1
                    5.5.1. FONT 1..........................................5-1
                    5.5.2. FONT 2..........................................5-2
                    5.5.3. FONT 3..........................................5-2
                    5.5.4. FONT 4..........................................5-2
                    5.5.5. FONT 5..........................................5-2
                    5.5.6. FONT 6..........................................5-2
                    5.5.7. FONT 7..........................................5-2
                    5.5.8. FONT 8..........................................5-2
               5.6. SELECTION OF LETTER FONTS..............................5-2
               5.7. Alt F     CHANGING FONTS...............................5-3
               5.8. Alt L     SELECT THE COLOR OF THE LETTER...............5-3
               5.9. CURSOR MOVEMENT........................................5-3
               5.10. TYPING ON THE SCREEN..................................5-3
                     5.10.1. BACKSPACE KEY  ERASE LAST LETTER TYPED........5-4
               5.11. F7   CHANGE CURSOR DOT STEP...........................5-4

            6. VIEWING YOUR PICTURES.......................................6-1
               6.1. STARTING THE PROGRAM...................................6-1
               6.2. OVERVIEW         ......................................6-1
                    6.2.1. MANUAL MODE.....................................6-1
                    6.2.2. AUTOMATIC MODE..................................6-1

            7. REGISTRATION INFORMATION....................................7-1
               7.1. DISCLAIMER:............................................7-1
               7.2. User-Supported Software................................7-1
               7.3. UPDATE POLICY:.........................................7-1
                    7.3.1. FIRST YEAR:.....................................7-1
                    7.3.2. AFTER THE FIRST YEAR:...........................7-1












                                        II



                             L I S T   O F   F I G U R E S

           3-1: Mode 1 Prompt..............................................3-1
           3-2: Start and Stop Reference Points............................3-3

           4-1: Mode 2 Prompt..............................................4-1

           5-1: Mode 3 Prompt..............................................5-1

















































                                       III
                           YOURART1 Version 4.0                 PAGE 1-1


          1. WHAT'S ON THE DISK
         
               YA1.EXE                 YOURART PROGRAM
               YA1LOOK.BAS             PICTURE DISPLAY PROGRAM
               YA1.DOC                 THIS DOCUMENTATION
               YA1-1.HLP
                 through YA1-8.HLP     HELP FILES
               YA1F-1.FNT
                 through YA1F-8.FNT    FONT FILES
               README.BAT              EXPLAINS CHSHEET.DOC
               CHSHEET.DOC             MAKES A CHEAT SHEET

          YOURART Version 4.00 IS SUPPLIED  ON  A  DOUBLE  SIDED/DOUBLE DENSITY
          DISKETTE,  FORMATTED FOR 9 SECTORS/TRACK.  THE DISKETTE IS COMPATIBLE
          WITH PC-DOS 2.0 & 2.1. 


          1.1. MAKING A WORKING COPY

               FOLLOW    THE   INSTRUCTIONS   IN   YOUR   PC-DOS   MANUAL   FOR
               FORMATTING A DISKETTE WITH THE OPERATING SYSTEM ON IT. AFTER YOU
               HAVE  MADE  A SYSTEM DISKETTE,   YOU WILL  ALSO NEED   TO   COPY
               BASICA.COM   FROM  YOUR ORIGINAL SYSTEM DISKETTE TO YOUR WORKING
               COPY (BASICA IS  REQUIRED  TO RUN  YA1LOOK.BAS).   COPY  ALL  OF
               THE  FILES FROM THE YOURART1 TO THE NEW SYSTEM DISK. 

               IF YOU HAVE A HARD DRIVE,   ALL YOU WILL NEED TO DO  IS COPY ALL
               OF THE FILES FROM THE YOURART1 DISK. 


          1.2. STARTING THE YOURART1 PROGRAM

               FROM  THE  DOS READY PROMPT,  SET THE DEFAULT DRIVE TO THE DRIVE
               THAT  CONTAINS THE YOURART1 PROGRAM AND FILES.  TYPE IN  YA1  TO
               EXECUTE THE PROGRAM. 
         

          1.3. SYSTEM REQUIREMENTS
                
               IBM-PC/XT  WITH A MINIMUM OF 128K OF RAM
               IBM COMPATIBLE COLOR GRAPHICS CARD
               MEDIUM RESOLUTION COLOR MONITOR
               PC-DOS 2.0 OR 2.1   
               1-DISK DRIVE MINIMUM
                    THE SYSTEM EXPECTS TO FIND THE FONT  AND  HELP FILES ON THE
                    DEFAULT  DRIVE.  IF YOU HAVE ONLY 1 DRIVE,   THE  HELP  AND
                    FONT  FILES  CAN BE PLACED ON  A SEPARATE  DISKETTE.   THIS
                    DISKETTE CAN BE INSERTED AS NEEDED. 

          1.4. SYSTEM OPTIONS
         
               GRAPHICS PRINTER
               GRAPHICS SCREEN DUMP SOFTWARE FOR PRINTER 
                    SCREEN DUMP SOFTWARE MUST BE LOADED  PRIOR  TO EXECUTION OF
                    YOURART PROGRAM.


                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 2-1


          2. DESCRIPTION  OF  THE  AVAILABLE COLORS

               2.1. BACKGROUND COLORS

                    0.  BLACK                8.  GRAY
                    1.  BLUE                 9.  Lt. BLUE
                    2.  GREEN               10.  Lt. GREEN
                    3.  CYAN                11.  Lt. CYAN
                    4.  RED                 12.  Lt. RED
                    5.  MAGENTA             13.  Lt. MAGENTA
                    6.  BROWN               14.  YELLOW
                    7.  WHITE               15.  Hi-Int. WHITE



               2.2. PALETTE COLORS

                    PALETTE 0               PALETTE 1
                    1 GREEN                 1 CYAN
                    2 RED                   2 MAGENTA
                    3 BROWN                 3 WHITE

                    COLOR <0> IN EITHER PALETTE WILL BE THE BACKGROUND COLOR.


































                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 3-1


          3. MODE 1    MASTER MODE


               + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
               |   1GREEN 2RED 3BROWN            X### Y###        |16      |
               |     palette colors              cursor            cursor  |
               |                                 location          step    |
               + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
                                 Fig. 3-1: Mode 1 Prompt


          3.1. Alt H     HELP!!!!

               HELP  SCREENS ARE AVAILABLE FROM  THE   COMMAND   PROMPT.  WHILE
               HOLDING DOWN THE Alt KEY,  PRESS THE H KEY.  THE DRAWING WILL BE
               PLACED IN A HOLDING AREA AND THE  HELP SCREENS WILL APPEAR.  YOU
               CAN PAGE FORWARD AND BACKWARD THROUGH THE HELP SCREENS  BY USING
               THE  GRAY  +  - KEYS.  PRESSING THE Esc KEY WILL EXIT  HELP  AND
               RESTORE   YOUR DRAWING.   YOU WILL BE AT THE SAME PLACE  IN  THE
               PROGRAM YOU  WERE  WHEN YOU ASKED FOR HELP. IF YOU ARE IN ONE OF
               THE  SUB-FUNCTIONS,   YOU MUST USE  THE  Esc  KEY  TO RETURN  TO
               THE MODE 1 PROMPT BEFORE ASKING FOR HELP. 
         
          NOTE!!
               THE HELP FILE MUST RESIDE ON THE DEFAULT DRIVE.  IF THEY ARE NOT
               PRESENT,  THE  HELP  FUNCTION WILL BE USELESS.  HELP  FILES  ARE
               NUMBERED 1 to 8, AND HAVE THE FILE EXTENSION (.HLP).


          3.2. RETURN KEY

               COMPLETES ENTRIES AT SUB-FUNCTION PROMPTS


          3.3. Esc KEY

               ABORTS  ANY  SUB-FUNCTION WITH A PROMPT AND RETURNS YOU  TO  THE
               MODE 1 PROMPT. 


          3.4. STANDARD CURSOR MOVEMENT

               Up Arrow     CURSOR DOT UP          | DOT MOVES THE
               Down Arrow   CURSOR DOT DOWN        | DISTANCE DEFINED
               Left Arrow   CURSOR DOT LEFT        | BY THE CURSOR 
               Right Arrow  CURSOR DOT RIGHT       | STEP.

               Home         DIAGONALLY UP & LEFT    | DOT MOVES ONE
               PgUp         DIAGONALLY UP & RIGHT   | DOT SPACE AT A
               End          DIAGONALLY DOWN & LEFT  | TIME. DOT STEP
               PgDn         DIAGONALLY DOWN & RIGHT | HAS NO EFFECT.






                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 3-2


          3.5. EXTENDED CURSOR MOVEMENT

               Ctrl. HOME     MOVE CURSOR DOT TO LOCATION    0,0
               Ctrl. END      MOVE CURSOR DOT TO LOCATION  319,191         
               Ctrl. PgUp     MOVE CURSOR DOT TO LOCATION  160,100
               Ctrl. PgDn     MOVE CURSOR DOT TO LOCATION  160,100


          3.6. F1   SET/RESET CURSOR DOT

               REVERSE THE COLOR OF THE DOT AT THE CURSOR POSITION  


          3.7. F2   SAVE CURRENT DRAWING TO DISK

               YOU  WILL  BE  PROMPTED WITH THE CURRENT FILE NAME OF  THE  SAVE
               FILE,  AND A REQUEST TO RENAME IT ([filespec] RENAME (Y/N) ). IF
               YOU  REPLY WITH A Y  YOU WILL BE PROMPTED TO ENTER THE  NAME  OF
               THE  FILE TO SAVE (FILE NAME ).  ENTER THE DRIVE DESIGNATION  IF
               DIFFERENT  FROM  THE DEFAULT DRIVE.  ENTER THE NAME OF THE  FILE
               WITHOUT A FILE EXTENSION.  IF YOU REPLY WITH A N  THE FILE  WILL
               BE  SAVED  UNDER THE CURRENT FILE NAME.  THE FILE EXTENSION  FOR
               THESE PICTURE FILES IS (.PIC).
  

          3.8. F6   EXIT WITHOUT SAVING

               YOU  WILL SEE THE PROMPT (EXIT (Y/N) ).  IF YOU  SELECT  Y,  THE
               PROGRAM WILL BE EXITED,  AND YOU WILL BE AT THE  DOS PROMPT.  IF
               YOU SELECT N, THE PROGRAM WILL RETURN TO THE MODE 1 PROMPT.


          3.9. F7   CHANGE CURSOR DOT STEP

               YOU  WILL BE PROMPTED FOR THE NUMBER OF DOTS FOR THE CURSOR  DOT
               TO  MOVE  WHEN THE CURSOR KEYS ARE USED (STEP RATE  ).  ENTER  A
               NUMBER BETWEEN 1 & 99.


          3.10. F8   TOGGLE PALETTE COLOR

               EACH TIME THE KEY IS PRESSED THE PALETTE COLOR WILL CHANGE.


          3.11. F3   DRAW AN ELLIPSE

               MOVE THE CURSOR DOT TO THE SPOT WHERE YOU WANT THE CENTER OF THE
               ELLIPSE TO BE.  PRESS THE F3 KEY.  YOU WILL BE PROMPTED TO ENTER
               THE  ELLIPSE COLOR (ELLIPSE COLOR ).  ENTER THE COLOR YOU  WANT.
               USE THE CURSOR CONTROL KEYS TO DEFINE THE ELLIPSE.  WHEN YOU ARE
               SATISFIED WITH WHAT YOU HAVE DONE, PRESS THE RETURN KEY.

               YOU  WILL BE PROMPTED (ELLIPSE OK (Y/N) ).  IF EVERYTHING IS  OK
               THEN  ENTER Y.  IF YOU ARE NOT SATISFIED,  THEN ENTER N AND  THE
               SCREEN WILL BE RESTORED TO THE CONDITION PRIOR TO THE ELLIPSE.


                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 3-3


          3.12. Alt 3  DRAW A CIRCLE

               MOVE THE CURSOR DOT TO THE SPOT WHERE YOU WANT THE CENTER OF THE
               CIRCLE TO BE. WHILE HOLDING DOWN THE Alt. KEY PRESS THE 3 KEY ON
               THE TOP ROW.  THE PROMPT LINE WILL DISPLAY (DEFINE RADIUS).  USE
               THE  CURSOR  KEYS TO DEFINE THE RADIUS.  WHEN YOU ARE  SATISFIED
               WITH  THE  RADIUS,  PRESS THE RETURN KEY.  YOU   WILL   1st   BE
               PROMPTED   FOR THE CIRCLE COLOR.  ENTER THE COLOR YOU WANT.  YOU
               WILL  NEXT BE PROMPTED FOR THE STARTING POINT <-6.28  to  6.28>.
               PRESSING ENTER WILL DEFAULT THE VALUE FOR A COMPLETE CIRCLE. YOU
               WILL  NEXT  BE  PROMPTED FOR THE STOP POINT <-6.28   to   6.28>.
               PRESSING  ENTER WILL DEFAULT THE VALUE FOR A COMPLETE CIRCLE. 
      
               ENTERING THE START OR STOP NUMBER WITHOUT A MINUS SIGN WILL DRAW
               AN  ARC.  ENTERING A MINUS NUMBER FOR THE START OR STOP  NUMBER,
               WILL CAUSE THE CENTER TO BE CONNECTED WITH A LINE TO THAT END OF
               THE ARC. (DRAW A PIECE OF A PIE CHART).

                                     1.57
                              2.355    |    .785
                                       | 
                             3.14------|------0 / 6.28
                                       | 
                              3.925    |    5.495
                                     4.71
                         Fig. 3-2: Start and Stop Reference Points

               YOU WILL NEXT BE PROMPTED FOR THE ASPECT <.001 to 180>. PRESSING
               ENTER  WILL  DEFAULT TO THE NORMAL ASPECT RATIO OF  THE  SCREEN.
               THIS WILL CAUSE THE CIRCLE TO BE AS CLOSE TO ROUND AS POSSIBLE. 

                    A  .001  WILL DRAW A HORIZONTAL LINE
         
                    THE  LARGER  THE NUMBER,   THE MORE SLENDER THE CIRCLE WILL
                    BE.   ANYTHING  OTHER   THAN 1 WILL   CAUSE  THE NUMBER  OF
                    DOTS FROM CENTER TO THE HORIZONTAL  AND  VERTICAL  ENDS  OF
                    THE RADIUS TO BE UNEQUAL 
         
                    A  180  WILL DRAW A VERTICAL LINE

                    YOU  WILL  BE  PROMPTED  (CIRCLE OK (Y/N)  ).  IF  YOU  ARE
                    SATISFIED,  ENTER Y.  IF YOU ARE NOT SATISFIED, ENTER N AND
                    THE  SCREEN WILL BE RESTORED TO THE CONDITION PRIOR TO  THE
                    CIRCLE.













                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 3-4


          3.13. F4   DRAW A BOX

               MOVE  THE CURSOR DOT TO A POSITION YOU WANT FOR ONE OF  THE  BOX
               CORNERS.  PRESS  THE  F4 KEY.  YOU WILL BE PROMPTED FOR THE  BOX
               COLOR.  ENTER THE COLOR YOU WANT.  USE THE CURSOR KEYS TO DEFINE
               THE BOX. WHEN YOU ARE SATISFIED, PRESS THE RETURN KEY.

               YOU  WILL  BE PROMPTED (BOX OK (Y/N) ).  IF YOU  ARE  SATISFIED,
               ENTER Y.  IF YOU ARE NOT SATISFIED,  ENTER N AND THE SCREEN WILL
               BE RESTORED TO THE CONDITION BEFORE THE BOX.


          3.14. F5   PAINT AN OBJECT

               MOVE THE CURSOR DOT TO A POSITION INSIDE THE FIGURE YOU WANT  TO
               PAINT.  PRESS  THE  F5 KEY.  YOU WILL FIRST BE PROMPTED FOR  THE
               PAINT COLOR.  ENTER THE COLOR YOU WANT TO PAINT WITH.  YOU  WILL
               NEXT  BE PROMPTED FOR THE BORDER COLOR.  THIS IS THE COLOR  THAT
               COMPLETELY SURROUNDS THE AREA TO BE PAINTED. ENTER THIS COLOR.

               YOU  WILL  BE  PROMPTED  (PAINT  JOB OK  (Y/N)  ).  IF  YOU  ARE
               SATISFIED,  ENTER Y.  IF YOU ARE NOT SATISFIED,  ENTER N AND THE
               SCREEN WILL BE RESTORED TO THE CONDITION PRIOR TO THE PAINTING.


          3.15. F9   SPRAY PAINT

               MOVE THE CURSOR DOT INSIDE AN OBJECT YOU WANT TO SPRAY. THE SAME
               RULES APPLY FOR SPRAY PAINTING AS APPLY FOR F5-PAINT.  PRESS THE
               F9  KEY.  YOU  WILL BE PROMPTED TO ENTER THE SPRAY COLOR  (SPRAY
               COLOR ).  ENTER THE COLOR YOU WANT. YOU WILL NEXT BE PROMPTED TO
               ENTER  THE COLOR OF THE BORDER (BORDER COLOR ).  ENTER THE COLOR
               OF THE BORDER SURROUNDING THE AREA TO BE SPRAY PAINTED. YOU WILL
               NEXT BE PROMPTED TO ENTER THE DENSITY (SPRAY (L)t. (M)ed.  (D)k.
               ).  ENTER YOUR SELECTION (L=5 DOT SPACE, M=3 DOT SPACE & D=1 DOT
               SPACE).

               YOU WILL BE PROMPTED (SPRAY JOB OK (Y/N) ). IF YOU ARE SATISFIED
               WITH THE SPRAY JOB,  ENTER Y.  IF YOU ARE NOT SATISFIED, ENTER N
               AND  THE SCREEN WILL BE RESTORED TO THE CONDITION PRIOR  TO  THE
               SPRAY JOB.


          3.16. F10  DRAW A LINE

               MOVE  CURSOR  DOT TO THE SPOT WHERE YOU WANT THE LINE TO  BEGIN.
               PRESS  THE  F10 KEY.  YOU WILL BE PROMPTED FOR THE  LINE  COLOR.
               ENTER  THE  COLOR YOU WANT.  USE THE CURSOR KEYS TO  DEFINE  THE
               LINE. WHEN YOU ARE SATISFIED, PRESS THE RETURN KEY.

               YOU  WILL BE PROMPTED (LINE OK (Y/N) ).  IF YOU  ARE  SATISFIED,
               ENTER Y.  IF YOU ARE NOT SATISFIED,  ENTER N AND THE SCREEN WILL
               BE RESTORED TO THE CONDITION PRIOR TO THE LINE.




                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 3-5


          3.17. Ctrl F1   LOAD A DRAWING

               WHILE  HOLDING  DOWN  THE  Ctrl  KEY,  PRESS  THE  F1  KEY.  YOU
               WILL   BE PROMPTED FOR THE FILE NAME.   RESPOND WITH  THE  DRIVE
               DESIGNATION  IF OTHER THAN THE DEFAULT DRIVE  AND THE FILE NAME.
               DO NOT ENTER THE FILE EXTENSION.  PRESS THE RETURN KEY TO LOAD. 


          3.18. Ctrl F2   GRAPHICS TO PRINTER

               WHILE HOLDING DOWN THE Ctrl KEY,  PRESS THE F2 KEY. YOU WILL  BE
               PROMPTED  (AltH>HELP   Esc>ABORT   any key continue).   PRESSING
               Esc  WILL RETURN YOU TO THE MODE 1 PROMPT.   WHILE  HOLDING DOWN
               THE Alt KEY,  PRESS H FOR HELP.  PRESS ANY OTHER KEY TO CONTINUE
               IF YOU SELECT TO CONTINUE,   YOU WILL BE PROMPTED READY  PRINTER
               AND PRESS  ENTER.   PRESSING  ENTER  WILL  ERASE THE PROMPT LINE
               ON  THE  BOTTOM  OF THE DRAWING SO IT WON'T SHOW   UP  ON   YOUR
               PRINTOUT.   AFTER YOU PRESS ENTER,   HOLD DOWN THE SHIFT KEY AND
               PRESS THE PrtSc KEY  TO  INITIATE  A SCREEN DUMP.       
         
          NOTE!!!!  BEFORE  USING  THIS FUNCTION,  YOU MUST HAVE INITIALIZED  A
                    GRAPHIC SCREEN DUMP PROGRAM PRIOR TO STARTING THIS PROGRAM.
                    THIS  PROGRAM CONTAINS  NO  FACILITY  TO  DUMP GRAPHICS  TO
                    A PRINTER.  PROGRAM  EXAMPLE  FOR  IBM  GRAPHICS PRINTER IS
                    GRAPHICS.COM


          3.19. WORKING WITH PATTERNS

               A  PATTERN  CAN  BE ANYTHING THAT HAS BEEN LETTERED OR  DRAWN ON
               THE SCREEN.   THIS PATTERN  CAN  BE  SAVED  TO  DISK,   FOR  USE
               LATER IN OTHER DRAWINGS.   THIS PATTERN  CAN BE MOVED AROUND THE
               SCREEN,  OR DUPLICATED,   SAVING  THE AMOUNT OF TIME REQUIRED TO
               COMPLETE A DRAWING.  THE  PATTERN  IS LIMITED TO ONLY ONE THING,
               THE  SIZE.   THE   MAXIMUM  SIZE OF THE PATTERN IS  1/4  OF  THE
               SCREEN.  

          3.19.1. Alt S     CAPTURING A PATTERN

               TO  CAPTURE A PATTERN,   YOU WILL DRAW AN IMAGINARY  BOX  AROUND
               IT.   MOVE THE CURSOR DOT TO ONE CORNER OF YOUR  IMAGINARY  BOX.
               WHILE HOLDING DOWN THE Alt KEY,   PRESS  THE S KEY.   THE PROMPT
               LINE  WILL SHOW (DEFINE PATTERN).   MOVE  THE CURSOR DOT TO  THE
               DIAGONALLY OPPOSITE CORNER  OF YOUR IMAGINARY BOX.  WHEN YOU ARE
               SATISFIED  WITH  THE AREA DEFINED,  PRESS THE  RETURN  KEY.  THE
               PROMPT  LINE WILL SHOW (PATTERN  HAS BEEN SET!),   IF EVERYTHING
               IS OK.  THE PROMPT LINE  WILL SHOW (PATTERN TOO LARGE!),  IF THE
               PATTERN  IS TOO  LARGE TO FIT IN THE PATTERN  ARRAY.   IF   THIS
               HAPPENS,  YOU  WILL  BE  RETURNED TO THE  DEFINE  FUNCTION.  THE
               STARTING POSITION WILL STILL BE IN MEMORY.  USE THE CURSOR  KEYS
               TO RE-DEFINE THE OPPOSITE CORNER.  THIS WOULD MEAN DIVIDING YOUR
               PATTERN AND MOVING OR SAVING IT IN TWO STEPS.





                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 3-6


          3.19.2. Ctrl F3   LOADING A PATTERN FROM DISK

               ANY  PATTERN YOU HAVE CREATED AND SAVED TO DISK,  CAN BE  LOADED
               INTO THE PATTERN ARRAY.  WHILE HOLDING DOWN THE Ctrl KEY,  PRESS
               THE  F3 KEY.  YOU WILL BE PROMPTED FOR THE PATTERN NAME TO  LOAD
               (LOAD PATTERN [name] ).  RESPOND WITHE THE DRIVE DESIGNATION, IF
               DIFFERENT FROM THE DEFAULT DRIVE,  AND THE PATTERN NAME (WITHOUT
               A FILE EXTENSION). PRESS RETURN TO EXECUTE THE LOAD.
          
          3.19.3. Ctrl F4   SAVE PATTERN TO DISK

               ONCE A PATTERN HAS BEEN CAPTURED, IT CAN BE SAVED TO DISK. WHILE
               HOLDING  DOWN  THE  Ctrl KEY,  PRESS THE F4  KEY.  YOU  WILL  BE
               PROMPTED  FOR THE PATTERN NAME (SAVE PATTERN [name]  ).  RESPOND
               WITH THE DRIVE DESIGNATION, IF DIFFERENT FROM THE DEFAULT DRIVE,
               AND  THE  PATTERN  NAME (WITHOUT A FILE  EXTENSION).  PRESS  THE
               RETURN KEY TO EXECUTE THE SAVE.

               THIS  FUNCTION WILL CREATE A FILE ON THE DRIVE  YOU  DESIGNATED.
               THE FILE WILL HAVE THE NAME YOU ASSIGNED WITH THE FILE EXTENSION
               (.PTN).

          3.19.4. MANIPULATION OF PATTERNS

               ONCE A PATTERN HAS EITHER BEEN CAPTURED, OR LOADED FROM DISK, IT
               CAN  BE  MANIPULATED ON THE SCREEN.  MOVE THE CURSOR DOT TO  THE
               UPPER  LEFT  CORNER  OF THE AREA WHERE YOU  WANT  TO  PLACE  THE
               PATTERN (REMEMBER WHEN WE CAPTURE A PATTERN WE DRAW AN IMAGINARY
               BOX AROUND IT.  THE BOX THEORY STILL APPLIES).  WHEN THE PATTERN
               IS PLACED IN THE SCREEN,  IT GOES DOWN AND RIGHT FROM THE CURSOR
               DOT.

               3.19.4.1. Alt P     (LOGICAL XOR) OVERLAY

                    WHILE  HOLDING  DOWN  THE Alt KEY,  PRESS THE  P  KEY.  THE
                    PATTERN WILL OVERLAY ANYTHING ALREADY ON THE SCREEN WITHOUT
                    DESTROYING IT.  IF YOU DON'T LIKE THE WAY IT LOOKS, YOU CAN
                    REPEAT  THIS  FUNCTION,  AND THE PATTERN WILL  BE  REMOVED.
                    WHATEVER THE PATTERN OVERLAYS WILL RETURN TO NORMAL.

               3.19.4.2. Alt I     (LOGICAL AND) OVERLAY

                    WHILE  HOLDING  DOWN THE Alt KEY,  PRESS  THE  I  KEY.  THE
                    PATTERN  WILL  REPLACE  ANYTHING  ALREADY  ON  THE  SCREEN.
                    REPEATING THE FUNCTION WILL NOT RESTORE THE SCREEN.












                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 3-7


               3.19.4.3. Alt O     (LOGICAL  OR) OVERLAY

                    WHILE HOLDING DOWN THE Alt KEY,   PRESS  THE  O  KEY.   THE
                    PATTERN  WILL  OVERLAY WHATEVER WAS  ALREADY ON THE SCREEN.
                    REPEATING THE FUNCTION  WILL NOT RESTORE THE SCREEN.

               NOTE      WHEN USING THE LAST TWO FUNCTION, YOU WILL BE PROMPTED
                         (PATTERN OK (Y/N) ). IF YOU ARE SATISFIED, ENTER Y. IF
                         YOU ARE NOT SATISFIED,  ENTER N AND THE SCREEN WILL BE
                         RESTORED TO THE CONDITION BEFORE THE FUNCTION.

               NOTE      IF  YOU  GET THE ERROR MESSAGE (NOT ENOUGH  ROOM   FOR
                         PATTERN  TO FIT!!),  THIS MEANS CURSOR DOT IS   EITHER
                         TOO  CLOSE  TO THE RIGHT SIDE,   OR TOO  CLOSE TO  THE
                         BOTTOM,  FOR  THE PATTERN TO FIT ON  THE SCREEN.  MOVE
                         THE CURSOR DOT AND TRY AGAIN.


          3.20. WORKING WITH BLOCKS

               3.20.1. Ctrl F7   DEFINE A BLOCK

                    TO  DEFINE A BLOCK,   WE ARE GOING TO DRAW  OUR   IMAGINARY
                    BOX   AROUND  THE  AREA  WE  WANT TO  MANIPULATE. MOVE  THE
                    CURSOR  DOT  TO   ONE CORNER OF THE  IMAGINARY  BOX.  WHILE
                    HOLDING   DOWN  THE  Ctrl  KEY,   PRESS  THE F7  KEY.   THE
                    PROMPT  LINE WILL SHOW (DEFINE BLOCK).   MOVE  THE   CURSOR
                    DOT   TO  THE DIAGONALLY OPPOSITE CORNER  OF THE  IMAGINARY
                    BOX.  WHEN YOU ARE SATISFIED  WITH THE AREA DEFINED,  PRESS
                    THE  RETURN KEY.  THE PROMPT LINE WILL DISPLAY  (BLOCK  HAS
                    BEEN DEFINED!).

               3.20.2. Ctrl F8   DRAW A GRID INSIDE A BLOCK

                    ONCE  WE HAVE DEFINED A BLOCK,  WE CAN PLACE A GRID INSIDE.
                    WHILE HOLDING DOWN THE Ctrl KEY, PRESS THE F8 KEY. YOU WILL
                    BE  PROMPTED TO ENTER THE GRID COLOR (GRID COLOR  ).  ENTER
                    THE  COLOR YOU WANT THE LINES OF THE GRID TO BE.  YOU  WILL
                    NEXT BE PROMPTED TO ENTER THE GRID STEP (GRID STEP 1-99  ).
                    ENTER  THE NUMBER OF DOTS YOU WANT TO BE BETWEEN THE  LINES
                    OF  THE  GRID +1.  YOU WILL NEXT BE PROMPTED TYPE  OF  GRID
                    (GRID (H)oriz.  (V)ert.  (B)oth ). H DRAWS HORIZONTAL LINES
                    ONLY,  V  DRAWS VERTICAL LINES ONLY & B CAUSES A GRID  THAT
                    RESEMBLES THE GRID ON GRAPH PAPER. THIS TYPE OF GRID MAY BE
                    SMALLER THAT THE AREA DEFINED IN THE BLOCK.

                    YOU WILL BE PROMPTED (GRID OK (Y/N) ). IF YOU ARE SATISFIED
                    WITH YOUR GRID,  ENTER Y. IF YOU ARE NOT SATISFIED, ENTER N
                    AND  THE SCREEN WILL BE RESTORED TO THE CONDITION PRIOR  TO
                    THE GRID.







                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 3-8


          3.20.3. MANIPULATION OF COLORS IN A BLOCK

               CHANGING  FROM ONE COLOR TO ANOTHER,   OR REVERSING  THE  COLORS
               WITHIN A SPECIFIC AREA OF THE SCREEN. 

               3.20.3.1. Ctrl F9   REVERSE ALL COLORS

                    ONCE  WE  HAVE DEFINED THE BLOCK,  WE CAN REVERSE  ALL   OF
                    THE   COLORS  WITHIN THE BLOCK.   WHILE  HOLDING  DOWN  THE
                    Ctrl KEY, PRESS THE F9 KEY. 

                                                BEFORE          AFTER
                                                  0               3
                            COLOR CHANGE:         3               0
                                                  2               1
                                                  1               2

               3.20.3.2. Ctrl F5   ONE COLOR TO ANOTHER

                    ONCE  WE HAVE DEFINED A BLOCK,  WE CAN CHANGE ONE COLOR  TO
                    ANOTHER COLOR WITHIN THE BLOCK. WHILE HOLDING DOWN THE Ctrl
                    KEY,  PRESS THE F5 KEY.  YOU WILL FIRST BE PROMPTED FOR THE
                    COLOR TO CHANGE (CHANGE FROM ). ENTER THE COLOR YOU WANT TO
                    CHANGE.  YOU  WILL NEXT BE PROMPTED FOR THE COLOR TO CHANGE
                    IT TO.(TO ).  ENTER THE DESIRED COLOR.  EVERY OCCURRENCE OF
                    THE (FROM COLOR) WILL BE REPLACED WITH THE (TO COLOR).


          3.21. Ctrl F10  REVERSE THE COLORS OF THE ENTIRE SCREEN

               THIS   FUNCTION  REVERSE THE COLORS ON THE FULL  SCREEN.  YOU DO
               NOT  HAVE TO DEFINE AN AREA FOR  THIS FUNCTION.   WHILE  HOLDING
               DOWN  THE  Ctrl  KEY,   PRESS  THE  F10 KEY.  THE COLORS WILL BE
               REVERSED THE SAME AS IN  A  REVERSE  WITHIN  A  BLOCK  FUNCTION.
               THIS  FUNCTION  IS USED MAINLY  TO PREPARE A  NEGATIVE  OF  YOUR
               DRAWING  BEFORE  DUMPING  TO  A PRINTER.   SOMETIMES DUMPING THE
               NEGATIVE  OF  YOUR DRAWING  TO  THE  PRINTER  IS  MORE  VISUALLY
               PLEASING THAN THE POSITIVE. 


          3.22. Alt C     CHANGE BACKGROUND COLOR

               WHILE HOLDING DOWN THE Alt KEY, PRESS THE C KEY. EVERY  TIME THE
               C  KEY  IS PRESS,   THE  BACKGROUND  COLOR   WILL   CHANGE.  THE
               BACKGROUND COLOR ROTATES FROM COLOR 0 through  15.   WHEN  COLOR
               15 IS REACHED THE COLOR ROLLS OVER TO  COLOR 0. 
         

          3.23. Alt D     DIRECTORY

               WHILE  HOLDING DOWN THE Alt KEY,  PRESS THE D KEY.  YOU WILL  BE
               PROMPTED  FOR  WHICH  DRIVE YOU WANT THE  DIRECTORY  (DRIVE  FOR
               DIRECTORY ).  ENTER THE LETTER OF THE DRIVE (NO COLON REQUIRED).
               THE  DIRECTORY  LISTS ONLY THE PICTURE AND PATTERN FILES ON  THE
               DRIVE + THE FREE DISK SPACE.


                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 3-9



          3.24. Alt E     ERASE SCREEN

               WHILE  HOLDING DOWN THE Alt KEY,  PRESS THE E KEY.  YOU WILL  BE
               PROMPTED  TO  SELECT EITHER ERASING ALL OF THE SCREEN OR JUST  A
               PART OF THE SCREEN (ERASE (A)ll (P)art ).  ENTERING A WILL ERASE
               THE ENTIRE SCREEN.  ENTERING P WILL ALLOW YOU SELECTIVELY  ERASE
               PARTS OF THE SCREEN.  IF YOU WANT TO ERASE A PART OF THE SCREEN,
               BE  SURE  AND MOVE THE CURSOR DOT TO ONE CORNER OF THE AREA  YOU
               WISH TO ERASE BEFORE USING THIS FUNCTION. USE THE CURSOR KEYS TO
               DEFINE THE AREA OF THE SCREEN YOU WISH TO ERASE (THIS AREA  WILL
               BE A RECTANGULAR AREA). WHEN YOU ARE SATISFIED WITH THE AREA YOU
               DEFINED,  PRESS  THE  RETURN KEY.  THE AREA YOU DEFINED WILL  BE
               ERASED.

               YOU  WILL  BE PROMPTED (ERASURE OK (Y/N) ).  IF THE  SCREEN  WAS
               ERASED TO YOUR SATISFACTION ENTER Y.  IF THE SCREEN IS NOT RIGHT
               ENTER N AND THE SCREEN WILL BE RESTORED TO THE CONDITION  BEFORE
               YOU SELECTED TO ERASE.


          3.25. Alt G     GO TO DOT x DOT GRAPHICS MODE (MODE 2)

               WHILE  HOLDING  DOWN THE Alt KEY,  PRESS THE G  KEY.  THIS  WILL
               TRANSFER  CONTROL  TO  THE  DOT x DOT GRAPHICS  PORTION  OF  THE
               PROGRAM.


          3.26. Alt T     GO TO TEXT INPUT MODE (MODE 3)

               WHILE  HOLDING DOWN THE Alt KEY,  PRESS THE T KEY.   THIS   WILL
               TRANSFER CONTROL TO THE TEXT INPUT PORTION OF THE  PROGRAM.

























                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 4-1


          4. MODE 2    DOT x DOT GRAPHICS


               + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
               |  DOT x DOT GRAPHICS            X### Y###         |16      |
               |                                cursor             cursor  |
               |                                location           step    |
               + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
                                 Fig. 4-1: Mode 2 Prompt
   

       4.1. Alt H     HELP!!!!

               HELP  SCREENS  ARE AVAILABLE FROM  THE  COMMAND   PROMPT.  WHILE
               HOLDING DOWN THE Alt KEY,  PRESS THE H KEY.  THE DRAWING WILL BE
               PLACED IN A HOLDING AREA AND THE  HELP SCREENS WILL APPEAR.  YOU
               CAN  PAGE  FORWARD  AND BACKWARD THROUGH THE  HELP  SCREENS   BY
               USING THE GRAY + - KEYS. PRESSING THE Esc KEY WILL EXIT HELP AND
               RESTORE   YOUR DRAWING.   YOU WILL BE AT THE SAME PLACE  IN  THE
               PROGRAM YOU  WERE  WHEN YOU ASKED FOR HELP. IF YOU ARE IN ONE OF
               THE  SUB-FUNCTIONS,   YOU MUST USE  THE  Esc  KEY  TO RETURN  TO
               THE MODE 2 PROMPT BEFORE ASKING FOR HELP. 
         
          NOTE!!
               THE HELP FILE MUST RESIDE ON THE DEFAULT DRIVE.  IF THEY ARE NOT
               PRESENT,  THE  HELP  FUNCTION WILL BE USELESS.  HELP  FILES  ARE
               NUMBERED 1 to 8, AND HAVE THE FILE EXTENSION (.HLP).


          4.2. RETURN KEY

               COMPLETES ENTRIES AT SUB-FUNCTION PROMPTS


          4.3. Esc KEY

               WHEN  ENTERED FROM THE MODE 2 COMMAND PROMPT,  WILL EXIT MODE  2
               AND RETURN YOU TO THE MODE 1 COMMAND MODE.


          4.4. Esc KEY

               ABORTS  ANY  SUB-FUNCTION WITH A PROMPT AND RETURNS YOU  TO  THE
               MODE 2 PROMPT. 
         

          4.5. Alt D     SELECT DOT COLOR

               WHILE HOLDING DOWN THE Alt KEY,   PRESS THE D KEY.  YOU WILL  BE
               PROMPTED  TO ENTER THE COLOR OF THE DOT (DOT  COLOR?).   RESPOND
               WITH ONE OF THE PALETTE  COLORS  (0, 1, 2, or 3). 






                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 4-2


          4.6. CURSOR MOVEMENT

               THE  DOT AT THE CURSOR LOCATION IS  SET  TO  THE  COLOR SELECTED
               BEFORE  THE  DOT IS MOVED.   THE LOCATION WHERE THE  CURSOR  DOT
               LANDS IS NOT EFFECTED  BY  COLOR  UNTIL THE  NEXT   MOVE.   THIS
               ALLOWS YOU TO SET THE LAST DOT,  THEN ESCAPE, WITHOUT HAVING ANY
               EXTRA/UNWANTED COLORED DOTS. 

                    Up Arrow     CURSOR DOT UP          | DOT MOVES THE
                    Down Arrow   CURSOR DOT DOWN        | DISTANCE DEFINED
                    Left Arrow   CURSOR DOT LEFT        | BY THE CURSOR 
                    Right Arrow  CURSOR DOT RIGHT       | STEP.
         
                    Home         DIAGONALLY UP & LEFT    | DOT MOVES ONE
                    PgUp         DIAGONALLY UP & RIGHT   | DOT SPACE AT A
                    End          DIAGONALLY DOWN & LEFT  | TIME. DOT STEP
                    PgDn         DIAGONALLY DOWN & RIGHT | HAS NO EFFECT.
         

          4.7. F7   CHANGE CURSOR DOT STEP

               YOU  WILL BE PROMPTED FOR THE NUMBER OF DOTS FOR THE CURSOR  DOT
               TO  MOVE  WHEN THE CURSOR KEYS ARE USED (STEP RATE  ).  ENTER  A
               NUMBER BETWEEN 1 & 99.
          
































                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 5-1


          5. MODE 3    TEXT INPUT


               + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
               |   TEXT INPUT    [1]   [3]      X### Y###         |16      |
               |    font selected-|     |       cursor             cursor  |
               |           letter color-|       location           step    |
               + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
                                 Fig. 5-1: Mode 3 Prompt


          5.1. Alt H     HELP!!!!

               HELP  SCREENS  ARE AVAILABLE FROM  THE  COMMAND   PROMPT.  WHILE
               HOLDING DOWN THE Alt KEY,  PRESS THE H KEY.  THE DRAWING WILL BE
               PLACED IN A HOLDING AREA AND THE  HELP SCREENS WILL APPEAR.  YOU
               CAN  PAGE  FORWARD  AND BACKWARD THROUGH THE  HELP  SCREENS   BY
               USING THE GRAY + - KEYS. PRESSING THE Esc KEY WILL EXIT HELP AND
               RESTORE   YOUR  DRAWING.   YOU WILL BE AT THE SAME PLACE IN  THE
               PROGRAM YOU  WERE  WHEN YOU ASKED FOR HELP. IF YOU ARE IN ONE OF
               THE  SUB-FUNCTIONS,   YOU MUST USE  THE  Esc  KEY  TO RETURN  TO
               THE MODE 3 PROMPT BEFORE ASKING FOR HELP. 
         
          NOTE!!
               THE HELP FILE MUST RESIDE ON THE DEFAULT DRIVE.  IF THEY ARE NOT
               PRESENT,  THE  HELP  FUNCTION WILL BE USELESS.  HELP  FILES  ARE
               NUMBERED 1 to 8, AND HAVE THE FILE EXTENSION (.HLP).


          5.2. RETURN KEY

               COMPLETES ENTRIES AT SUB-FUNCTION PROMPTS


          5.3. Esc KEY

               WHEN  ENTERED FROM THE MODE 3 COMMAND PROMPT,  WILL EXIT MODE  3
               AND RETURN YOU TO THE MODE 1 COMMAND MODE.


          5.4. Esc KEY

               ABORTS  ANY  SUB-FUNCTION WITH A PROMPT AND RETURNS YOU  TO  THE
               MODE 3 PROMPT. 
         

          5.5. FONTS - DESCRIPTION

               5.5.1. FONT 1

                    APPROXIMATELY 1/2 THE SIZE OF MEDIUM RESOLUTION TEXT. UPPER
                    CASE ALPHABET ONLY. STANDARD TYPEWRITER SYMBOLS. TYPES LEFT
                    TO RIGHT.




                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 5-2


               5.5.2. FONT 2

                    SAME  AS  FONT 1.  TYPES VERTICALLY FROM TOP OF  SCREEN  TO
                    BOTTOM.

               5.5.3. FONT 3

                    SAME AS FONT 1.  TYPES VERTICALLY FROM BOTTOM OF SCREEN  TO
                    TOP.

               5.5.4. FONT 4

                    APPROXIMATELY  THE  SAME  SIZE AS MEDIUM  RESOLUTION  TEXT.
                    UPPER & LOWER CASE ALPHABET.  STANDARD TYPEWRITER  SYMBOLS.
                    TYPES LEFT TO RIGHT.

               5.5.5. FONT 5

                    APPROXIMATELY  2 TIMES THE SIZE OF MEDIUM RESOLUTION  TEXT.
                    UPPER  & LOWER CASE ALPHABET.  STANDARD TYPEWRITER SYMBOLS.
                    TYPES LEFT TO RIGHT.

               5.5.6. FONT 6

                    APPROXIMATELY  SAME  SIZE AS FONT 5.  UPPER  &  LOWER  CASE
                    ALPHABET. STANDARD TYPEWRITER SYMBOLS. TYPES LEFT TO RIGHT.

               5.5.7. FONT 7

                    OLD  ENGLISH.  APPROXIMATELY  3  TIMES THE SIZE  OF  MEDIUM
                    RESOLUTION  TEXT.   UPPER  &  LOWER  CASE  ALPHABET.   SOME
                    TYPEWRITER SYMBOLS. TYPES LEFT TO RIGHT

               5.5.8. FONT 8

                    SCRIPT.  APPROXIMATELY SAME SIZE AS FONT 7.  UPPER &  LOWER
                    CASE  ALPHABET.  SOME  TYPEWRITER SYMBOLS.  TYPES  LEFT  TO
                    RIGHT.



          5.6. SELECTION OF LETTER FONTS
          
               WHEN TEXT INPUT IS SELECTED FROM THE MODE 1 PROMPT.
                    YOU  WILL  1st BE PROMPTED TO ENTER  THE  LETTER FONT   YOU
                    WANT  (FONT <1 - 8>).   IF THIS IS THE FIRST TIME YOU  HAVE
                    ENTERED  THE  TEXT  INPUT MODE SINCE STARTING THE  PROGRAM,
                    YOU  WILL  NEED TO  ENTER  A LETTER FONT.   RESPOND WITH  A
                    FONT  NUMBER 1 to 8 AND PRESS ENTER  TO   LOAD.   NEXT  YOU
                    WILL   BE  PROMPTED  TO  ENTER  THE  LETTER  COLOR  (LETTER
                    COLOR?).  RESPOND  WITH  ONE  OF  THE PALETTE COLORS (0, 1,
                    2, or 3). 





                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 5-3


                         IF  THIS  IS NOT THE FIRST TIME YOU HAVE  ENTERED  THE
                         TEXT  INPUT MODE SINCE  THE  START  OF   THE  PROGRAM,
                         AND   YOU   WANT   TO   USE THE  FONT  YOU  PREVIOUSLY
                         SELECTED.  RESPOND TO THE (FONT <1 - 8>) PROMPT   WITH
                         ENTER.   YOU   WILL  STILL  BE PROMPTED FOR THE LETTER
                         COLOR. 
         

          5.7. Alt F     CHANGING FONTS

               WHILE  HOLDING  DOWN THE Alt KEY,  PRESS THE F KEY.  YOU WILL BE
               PROMPTED  TO ENTER THE LETTER FONT  (FONT  <1   - 8>).   RESPOND
               WITH  THE FONT NUMBER AND PRESS ENTER TO  LOAD.  CHANGING  FONTS
               WILL NOT PROMPT YOU FOR A NEW LETTER COLOR. 


          5.8. Alt L     SELECT THE COLOR OF THE LETTER

               WHILE HOLDING DOWN THE Alt KEY,   PRESS  THE  L KEY.   YOU  WILL
               BE  PROMPTED TO ENTER THE COLOR OF THE LETTER (LETTER   COLOR?).
               RESPOND  WITH ONE OF THE PALETTE COLORS (0, 1, 2, or 3). 


          5.9. CURSOR MOVEMENT

               THE  CURSOR DOT MARKS THE  LOWER  LEFT  CORNER  OF  THE  LETTER.
               THE  LETTER WILL APPEAR UP AND RIGHT FROM THE CURSOR DOT. 

                    Up Arrow     CURSOR DOT UP          | DOT MOVES THE
                    Down Arrow   CURSOR DOT DOWN        | DISTANCE DEFINED
                    Left Arrow   CURSOR DOT LEFT        | BY THE CURSOR 
                    Right Arrow  CURSOR DOT RIGHT       | STEP.

                    Home         DIAGONALLY UP & LEFT    | DOT MOVES ONE
                    PgUp         DIAGONALLY UP & RIGHT   | DOT SPACE AT A
                    End          DIAGONALLY DOWN & LEFT  | TIME. DOT STEP
                    PgDn         DIAGONALLY DOWN & RIGHT | HAS NO EFFECT.
         

          5.10. TYPING ON THE SCREEN

               MOVE   THE CURSOR DOT TO THE POSITION YOU WANT TO START  TYPING.
               START TYPING.  THE CHARACTER OF THE KEY PRESSED WILL BE REPLACED
               ON  THE  SCREEN  WITH THE  CORRESPONDING  FONT  LETTER.  IF  THE
               PARTICULAR LETTER IS NOT AVAILABLE IN  THAT  FONT,   THE SPEAKER
               WILL  BEEP.   THE  ALLOWABLE CHARACTERS  DO  NOT  INCLUDE    ANY
               SPECIAL   GRAPHIC CHARACTERS. 










                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 5-4


               5.10.1. BACKSPACE KEY  ERASE LAST LETTER TYPED

                    PRESS THE BACKSPACE KEY.  YOU WILL BE PROMPTED TO ENTER THE
                    COLOR TO USE TO ERASE THE LETTER (ERASER COLOR ). ENTER THE
                    COLOR. THE LETTER WILL BE ERASED AND THE CURSOR DOT WILL BE
                    IN POSITION TO RE-TYPE THE LETTER.

                    NOTE
                         THIS  FUNCTION WORKS CORRECTLY ONLY IF THE CURSOR  DOT
                         IS  IN  THE SAME PLACE IT LANDED FOLLOWING THE  LETTER
                         THAT NEEDS TO BE ERASED.


          5.11. F7   CHANGE CURSOR DOT STEP

               YOU  WILL BE PROMPTED FOR THE NUMBER OF DOTS FOR THE CURSOR  DOT
               TO  MOVE  WHEN THE CURSOR KEYS ARE USED (STEP RATE  ).  ENTER  A
               NUMBER BETWEEN 1 & 99.







































                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 6-1


          6. VIEWING YOUR PICTURES

               INCLUDED   ON  THE  DISKETTE  IS A PROGRAM  CALLED  YA1LOOK.BAS.
               THIS  PROGRAM IS USED TO VIEW THE  PICTURES  YOU   CREATE.   THE
               PROGRAM CAN ALSO BE USED TO VIEW ANY GRAPHICS PICTURE CREATED BY
               THE   BASIC   BSAVE  COMMAND.   THE PROGRAM  REQUIRES  THAT  THE
               PICTURE  HAVE THE FILE EXTENSION (.PIC).   THESE  PICTURES   ARE
               DISPLAYED  IN MEDIUM RESOLUTION COLOR GRAPHICS  MODE.   PICTURES
               CREATED  IN HIGH RESOLUTION CAN BE VIEW WITH THIS  PROGRAM,  BUT
               THE COLOR EFFECTS MAY NOT BE VISUALLY PLEASING.  


          6.1. STARTING THE PROGRAM

               YOU  WILL  NEED  A DISKETTE WITH THE   PROGRAM   BASICA.COM  AND
               YA1LOOK.BAS   ON   IT.   FROM  THE  DOS READY PROMPT  ENTER  THE
               FOLLOWING. 
         
                                 BASICA YA1LOOK
         
               PRESS   ENTER(RETURN)  TO  LOAD  BASICA.COM  AND   EXECUTE   THE
               YA1LOOK.BAS PROGRAM. 


          6.2. OVERVIEW         

               FOR   THE   MOST  PART  THE   YA1LOOK.BAS   PROGRAM   IS    SELF
               EXPLANATORY. HERE ARE A FEW OF THE HIGHLIGHTS. 
         
               THE PROGRAM WORKS SIMILAR TO A SLIDE PROJECTOR.   YOUR  PICTURES
               ARE  PROJECTED ONTO THE VIDEO MONITOR OF YOUR  COMPUTER.   THERE
               ARE TWO MODES IN THE PROGRAM. 

               6.2.1. MANUAL MODE

                    IN   THE  MANUAL  MODE,   YOU CAN GO FORWARD AND   BACKWARD
                    THROUGH  YOUR PICTURES.   YOU  CAN  CHANGE  THE  BACKGROUND
                    COLORS AND THE PALETTE COLORS.

               6.2.2. AUTOMATIC MODE

                    IN  THE AUTOMATIC MODE,  YOU SELECT THE LENGTH  OF TIME (IN
                    SECONDS)   THAT   THE  PICTURE  WILL  REMAIN ON THE  SCREEN
                    BEFORE GOING TO THE NEXT.    IN  THE AUTOMATIC  MODE,   YOU
                    CANNOT SELECT THE  BACKGROUND AND PALETTE COLOR. 
         
          THE   PROGRAM  SORTS THE FILE NAMES OF THE PICTURES BEFORE THEY   ARE
          DISPLAYED.  THIS  WILL ALLOW YOU TO NAME YOUR PICTURES IN A   WAY  TO
          ALLOW  THEM  TO  BE SHOW IN THE ORDER YOU WANT.  THE  PROGRAM  CANNOT
          HANDLE  MORE THAN 88 PICTURE FILES  IN  ONE  SESSION.   IF YOUR  DISK
          HAS  MORE PICTURE FILES THAN THIS,   YOU  WILL NEED TO PLACE THEM  ON
          SEPARATE  DISKS,   OR  IN  SEPARATE  SUB-DIRECTORIES (DOS 2.0 UP). IF
          YOU USE SUB-DIRECTORIES, YOU  WILL NEED TO COPY YA1LOOK.BAS INTO EACH
          OF  THESE DIRECTORIES.   THIS PROGRAM DOES NOT ALLOW THE USE OF  SUB-
          DIRECTORIES IN THE DRIVE DESIGNATION. 


                           Medium  Resolution  Graphics for the IBM-PC/XT 
                           YOURART1 Version 4.0                 PAGE 7-1


          7. REGISTRATION INFORMATION

          7.1. DISCLAIMER:

               UNDER   NO   CIRCUMSTANCES  WILL THE AUTHOR BE LIABLE  FOR   ANY
               DAMAGES,   LOSS OF PROFITS,   LOSS  OF  SAVINGS,  OR  INCIDENTAL
               OR  CONSEQUENTIAL  DAMAGES  RESULTING  FROM  THE   USE  OF  THIS
               PROGRAM. 

               THIS   PROGRAM   IS   DISTRIBUTED   ON  AN  AS  IS  BASIS.    NO
               WARRANTIES OR GUARANTEES ARE IMPLIED OR EXPRESSED. 
         

          7.2. User-Supported Software
         
               Individuals   are  granted  permission  to  freely   copy   this
               program  and  documentation for their own use and to share  with
               others under the following guidelines. 
         
               No fee or other consideration is charged. 
         
               The  program,    associated  files,   or  documentation  is  not
               modified in any way. 
        
               The   program,    associated   files,    and  documentation  are
               distributed together. 

               You  are encouraged to make copies of this program  for  others,
               for  evaluation purposes.   If you are using this software,  and
               find   it  to be useful,   your contribution of $25.00 would  be
               appreciated. 

                                 Everett Delano
                                  P.O. Box 205
                            Elk City, Oklahoma 73648

         
         
          7.3. UPDATE POLICY:

               REGISTERED  OWNERS OF THIS PROGRAM WILL BE NOTIFIED IF  AND WHEN
               UPDATED VERSIONS ARE AVAILABLE. 

               7.3.1. FIRST YEAR:

                    REGISTERED   OWNERS  OF THIS PROGRAM MAY  RECEIVE   UPDATED
                    VERSIONS FOR A $5.00 FEE, TO COVER THE  COST OF POSTAGE AND
                    HANDLING. 

               7.3.2. AFTER THE FIRST YEAR:

                    REGISTERED  OWNERS  OF THIS PROGRAM MAY   RECEIVE   UPDATED
                    VERSIONS FOR A $15.00 FEE.




                           Medium  Resolution  Graphics for the IBM-PC/XT 




        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0346

     Volume in drive A has no label
     Directory of A:\

    YA1V4    EXE     62423   9-20-84   8:56a
    YA1V4    DOC     54993   9-20-84  11:17p
    README   BAT       768   9-20-84   8:56a
    CHSHEET  DOC      1762   9-20-84   8:56a
    YA1-1    HLP      1280   9-20-84   8:56a
    YA1-2    HLP      1280   9-20-84   8:56a
    YA1-3    HLP      1280   9-20-84   8:56a
    YA1-4    HLP      1408   9-20-84   8:56a
    YA1-5    HLP      1152   9-20-84   8:56a
    YA1-6    HLP      1152   9-20-84   8:56a
    YA1-7    HLP      1152   9-20-84   8:56a
    YA1-8    HLP       939   9-20-84   8:56a
    YA1F-1   FNT      1145   9-20-84   8:56a
    YA1F-2   FNT      1146   9-20-84   8:56a
    YA1F-3   FNT      1145   9-20-84   8:56a
    YA1F-4   FNT      1685   9-20-84   8:56a
    YA1F-5   FNT      3810   9-20-84   8:56a
    YA1F-6   FNT      5939   9-20-84   8:56a
    YA1F-7   FNT     11381   9-20-84   8:56a
    YA1F-8   FNT      9369   9-20-84   8:56a
    YA1LOOK  BAS      4096   8-28-84   4:03p
    TIMEUS   COM       658  10-24-83  12:20p
    GO       BAT       875   1-05-87   1:09p
    PCSUNIT  PTN      8064  11-26-66
    XTSUNIT  PTN      8064   3-03-85  12:20p
    MONITOR  PTN      8064  10-26-64
    KEYBOARD PTN      8064   3-03-85  12:20p
    FILES346 TXT      1567   1-05-87   1:02p
    DEFAULT  PIC      6144  10-22-86   1:52p
           29 file(s)     210805 bytes
                           98304 bytes free
