---
layout: page
title: "PC-SIG Diskette Library (Disk #113)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0113/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0113"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "THREE USER SUPPORTED PROGRAMS"

    Here are three programs for system enhancement: 1) the Datamorphics
    Screen package for greater display control, 2) PC-COMPARE for comparing
    data files and; 3) DEFKEY, a keyboard reassignment program simular to
    Prokey.  All of these programs can be quite helpful in streamlining and
    simplifying your daily operations.
    
    System Requirements:  Some programs require a version of BASIC
    
    How to Start: Consult the .DOC and README files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.  To run any of the programs
    with the suffix .COM or .EXE, just type its name, i.e., for
    COMPARE.COM, type COMPARE and press <ENTER>.
    
    Suggested Registration:  PC-PAGE $20.00
    
    File Descriptions:
    
    -------- ---  Datamorphics Screen programs
    DEFKEY   BAT  Batch file to automatically run DEFKEY program
    DEFKEY   BAS  Program to reassign keyboard keys  (Requires DOS 2.0)
    PROGRAM  DOC  Instructions for running DEFKEY program
    READ     ME   Brief description of Datamorphics Screen programs
    FILES    LST  Listing of the PC-COMPARE files
    -------- ---  DEFKEY
    INVOICE       Form for generating invoice for screen package
    PC-BW    DOC  Documentation for PC-BW  (3 pages)
    PC-PAGE  DOC  Documentation for PC-PAGE  (3 pages)
    PC-TTY   DOC  Documentation for PC-TTY  (4 pages)
    WRAP     COM  Sets line wrapping on or off
    PC-TTY   COM  Program modifies TTY emulation of BIOS
    PC-BW    COM  Allows monochrome screen calls to work on color board
    -------- ---  PC-COMPARE 1.30
    *        D11  DOS 1.1 optimized versions of screen programs (3 files)
    PC-PAGE  COM  Prevents text from scrolling off screen
    PAGE     COM  Modifies page length setting of PC-PAGE
    COMPARE? DOC  Part of PC-COMPARE documentation (6 files)
    RUN      BAT  Invokes the PC-COMPARE 4-part screen tutorial and program
    BEEP     COM  Used by PC-COMPARE
    CLS      COM  Utility to clear the screen, for running under DOS 1.10
    PRINTDOC BAT  Used to send COMPLETE.DOC to the printer
    COMPLETE DOC  Documentation for COMPARE.COM (3 pages)
    COMPARE  COM  The COMPARE program itself
    COPYCOMP BAT  Makes a backup PC-COMPARE files from Drive A to Drive B
    SAMP2    TXT  Sample file to be used with RUN.BAT
    SAMP1    TXT  Sample file to be used with RUN.BAT
    KEYS     BAS  Program to redefine BASIC program keys
    DEFKEY   DOC  Instructions for running DEFKEY program  (3 pages)
    BASICAK  BAT  Loads BASIC and runs KEYS.BAS from DOS
    MOD100IN BAS  Program to load files from Radio Shack Model 100
    MOD100IN DOC  Documentation for MOD100IN.BAS  (5 pages)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COMPARE1.DOC

{% raw %}
```
                      P C - C O M P A R E     version 1.30
                       an ASCII/text file compare program            screen 1.
             for the IBM-PC and compatibles - for DOS 1.xx or 2.xx
             -----------------------------------------------------
                  (C) Copyright 1984, 1985 by Jeffrey Luther.
System
Requirements: IBM PC with PC-DOS, or a compatible system;
              MONOCHROME or COLOR/GRAPHICS board and 80 column display;
              128k of RAM memory minimum to run the program;
              a single- or double-sided disk drive and/or hard disk.
              IBM/Epson or compatible printer for a printout.

 Recommended: A printer Spooler/Buffer program installed in RAM if your
              system has more than 128K of main memory. Otherwise, the speed
              of the comparison will be slowed by the printer buffer alone.

        NOTE: A tradeoff exists in overallocating RAM for a printer buffer
              and therefore decreasing the amount of free RAM available for
              the comparison, since both files to be compared are read in
              completely at the beginning of the comparison.

*** use PRINTDOC.BAT on this disk to print the complete documentation file ***

```
{% endraw %}

## COMPARE3.DOC

{% raw %}
```
                          P C - C O M P A R E  ver 1.30
                                for the IBM PC                   screen 3.


    If you send the output directly to your line printer, you are asked if
the printer is in the condensed mode. (i.e., 132 characters per line). Type
"N" if you're not sure, But if so, type "Y" and compare lines longer than 132
characters will be truncated. Otherwise the truncation will be for any line
longer than 80 character. The default for line truncation to an output disk
file, or to the screen - if you are displaying the search line - is also 80
characters. The default printer port is LPT1. Use MODE to change it.


    A NOTE ON PROGRAM PHILOSOPHY: when a mismatch occurs between two compared
lines, the first file read in becomes `fixed' at the first mismatch line and
the second file is incremented and compared to the first file, line by line,
to the LookAhead value, until a match occurs or to the end of the file, if
this is less than the LookAhead value. If no match occurs, the first file is
incremented one line, the second file is set to its last starting point plus
one line and, again, the second file is incremented line by line to the Look-
Ahead value or until a match is found. This repeats until there is a match or
until an end-of-file for one or both of the files is reached.

```
{% endraw %}

## COMPARE4.DOC

{% raw %}
```
                          P C - C O M P A R E  ver 1.30
                                for the IBM PC                   screen 4.


    The LookAhead parameter refers to the number of lines the second file is
scanned ahead while holding the first file at a mismatched line. Hit ENTER
to use the default LookAhead value of 40 lines. The maximum allowed is 255.
Displaying the file line being searched for is also an option.


    A WORD OF CAUTION: If the first file line number gets ahead of the second
file, a match is often unlikely. This means the LookAhead parameter wasn't
set to a high enough value. Use the ESCape key to end the compare and restart
with a larger LookAhead value, any value up to 255.


    Since the first file is held and the second incremented, the file which has
fewer and/or deleted lines should be read in first, or the file with added
lines second, to decrease the compare time. Otherwise, the `fixed' file will
increment past these additional lines only once per LookAhead value. In other
words, the file with additions should be second.


```
{% endraw %}

## COMPARE5.DOC

{% raw %}
```
                          P C - C O M P A R E  ver 1.30
                                for the IBM PC                   screen 5.



    A CAVEAT: Do not change the initial screen when the program is invoked,
nor the title line and copyright notice on the menu screen. These are
protected; any change(s) will render the program unuseable.


    WHAT IS A MATCH?  When a line of each file is read from memory, leading
and trailing ASCII characters below chr(33) (i.e., a SPACE and below) are
stripped. This means lines with different indenting only will still match.
However, imbedded tabs, spaces, etc., are significant and any differences
between them will cause a mismatch of those two lines. When a line being
searched for is displayed, therefore, it will always be shown left-justified.

    However, this process of `cleaning' leading and trailing spaces, etc, is
ONLY done to the lines in memory, and not to your original on disk. The two
input files remain in their original condition on disk.



```
{% endraw %}

## COMPARE6.DOC

{% raw %}
```
                          P C - C O M P A R E  ver 1.30
                                for the IBM PC                   screen 5.


    This version of the program allows files with lines of up to 255
characters to be read in. This is also true of BASIC program files which have
been saved in BASIC with the ,A option. See your BASIC manual - the `SAVE'
command - for more information on saving your progra as an ASCII file.

NOTE:  There is a 100 line maximum limit for each file. Otherwise it is a
       full-featured version of AUTOCOMP, marketed by:

                        TIMESHARE ASSOCIATES, INC.
                        10202 Robinson
                        Overland Park, KS  66212
                        (913) 642-7564

       They also market a series of utilities for BASIC programmers.


 ****  Type COMPARE to run the program without the RUN.BATch file.  ****


```
{% endraw %}

## DEFKEY.BAS

{% raw %}
```bas
10 REM
20 REM  ***********************************************************************
30 REM  *                                                                     *
40 REM  *                                                                     *
50 REM  *                                                                     *
60 REM  *                                                                     *
70 REM  *                          DEFKEY                                     *
80 REM  *                      A TOTAL KEYBOARD                               *
90 REM  *                   RE-DEFINITION PROGRAM                             *
100 REM *                                                                     *
110 REM *                                                                     *
120 REM *                       CREATED BY                                    *
130 REM *                                                                     *
140 REM *                     CHARLIE TOMBERG                                 *
150 REM *                                                                     *
160 REM *                      5 HOOKER LANE                                  *
170 REM *                    COS COB, CT. 06807                               *
180 REM *                      (203)869-6707                                  *
190 REM *                      (203)869-6707                                  *
200 REM *                                                                     *
210 REM *                                                                     *
220 REM *                                                                     *
230 REM *                                                                     *
240 REM *                                                                     *
250 REM ***********************************************************************
260 REM
270 REM
280 REM THE ALLIANGE LIVED !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
290 REM A PRODUCT OF C.M.T. LABORATORIES  GREENWICH, CONNECTICUT
300 REM
310 REM
320 REM
330 REM
340 DEFINT I-Z:DEFSTR A-H
350 KEY OFF
360 DIM INDEX(200), AINDEX(150)
370 REM READS ALT VALUES INTI INDEX(X)
380 GOSUB 1340
390 REM INITIALIZES VARIABLES
400 GOSUB 1680
410 CLS : LOCATE 5,20
420 PRINT "****************************************"
430 LOCATE 6,20 : PRINT "*                                      *"
440 LOCATE 7,20 : PRINT "*                                      *"
450 LOCATE 8,20 :PRINT  "*                                      *"
460 LOCATE 8,20 : PRINT "*                                      *"
470 LOCATE 9,20 : PRINT "*            WELCOME TO                *"
480 LOCATE 10,20 : PRINT "*                                      *"
490 LOCATE 11,20 : PRINT "*              DEFKEY                  *"
500 LOCATE 12,20 : PRINT "*                                      *"
510 LOCATE 13,20 : PRINT "*                                      *"
520 LOCATE 14,20 : PRINT "*          A TOTAL KEYBOARD            *"
530 LOCATE 15,20 : PRINT "*       RE-DEFINITION  PROGRAM         *"
540 LOCATE 17,20 : PRINT "*     CREATED BY CHARLIE TOMBERG       *"
550 LOCATE 16,20 : PRINT "*                                      *"
560 LOCATE 18,20 : PRINT "*           JANUARY, 1984              *"
570 LOCATE 19,20 : PRINT "*                                      *"
580 LOCATE 20,20 : PRINT "*                                      *"
590 LOCATE 21,20 : PRINT "****************************************"
600 OPEN "O", #1, "DEFKEY.ANS"
610 CLS
620 LOCATE 16,45 : PRINT "(ENTER `HELP' OR <CR> FOR HELP)"
630 LOCATE 15,20: INPUT "ENTER KEY TO BE DEFINED. (ENTER `EXIT' TO END) ";AKEY
640 IF AKEY="END" OR AKEY="EXIT" OR AKEY="BYE" OR AKEY="DONE" OR AKEY="STOP" THEN 1120
650 IF AKEY="HELP" OR AKEY="" THEN 660 ELSE 770
660 REM PRINTS OUT SPECIAL KEYS
670 CLS : LOCATE 1,28: PRINT "SPECIAL KEYS": PRINT
680 FOR IND=1 TO 150 : IF AINDEX(IND)<> "" THEN PRINT AINDEX(IND),
690 NEXT IND
700 PRINT :PRINT: PRINT "1) TO DEFINE A SPECIAL KEY, ENTER THE KEY'S NAME EXACTLY AS GIVEN ABOVE.": PRINT "   NOTE : `aF1' REFERS TO `ALT-F1' ,`CF1' TO `CTRL-F1' AND `SF1` TO `SHIFT-F1'."
710 PRINT "          `FK' STANDS FOR `FUNCTION KEY'. " : PRINT
720 PRINT "2) TO DEFINE A STANDARD KEY, SIMPLY ENTER THAT CHARACTER.": PRINT
730 PRINT "3) TO DEFINE AN ALT-KEY SEQUENCE, ENTER AN  A BEFORE THE CHARACTER."
740 PRINT "    EXAMPLE:   AB   WOULD DEFINE THE  ALT-B  SEQUENCE."
750 LOCATE 25,15 : PRINT "****** HIT ANY KEY TO CONTINUE **********"; : A$=INPUT$(1) :CLS
760 GOTO 610
770 LOCATE 18,20 : INPUT "ENTER NEW DEFINITION  ( <CR> FOR HELP ) "; ANSI.KEY
780 IF ANSI.KEY="" THEN 790 ELSE 920
790 REM HELP ON NEW DEFINITION REQUESTED
800 CLS: LOCATE 1,26: PRINT "DEFINITION HELP" : PRINT
810 PRINT "1) DEFINITIONS MAY EITHER BE IN THE FORM OF SIMPLE STRINGS "
820 PRINT "   OR OF SIMPLE ASCII EXPRESSIONS." : PRINT
830 PRINT "   EXAMPLE OF A SIMPLE STRING :   ENTER  `HAVE A NICE DAY'  ."
840 PRINT "                                  NOTE : NO QUOTATION MARKS ARE REQUIRED."
850 PRINT : PRINT : PRINT: PRINT
860 PRINT "2) IF YOU CHOOSE TO ENTER AN ASCII EXPRESSION, YOU MUST ENTER THE"
870 PRINT "   LETTERS `ASC' BEFORE THE ASCII CODE NUMBER YOU WISH TO USE."
880 PRINT
890 PRINT "   FOR EXAMPLE, YOU MIGHT ENTER  `ASC068' TO ASSIGN AN UPERCASE"
900 PRINT "   `D' TO A KEY, SINCE 068 IS THE ASCII CODE FOR A `D'.
910 PRINT : PRINT : LOCATE 23,15 : PRINT "********** HIT ANY KEY TO CONTINUE ***********" : A$=INPUT$(1) : CLS :GOTO 770
920 CLS
930 IF LEFT$(ANSI.KEY,3)="ASC" AND VAL(MID$(ANSI.KEY,5,1))>0 THEN 940 ELSE 960
940 REM ASCII VALUE ENTERED AS DEFINITION
950 ANSI.KEY=CHR$(VAL(RIGHT$(ANSI.KEY,LEN(ANSI.KEY)-3)))
960 IF LEN(AKEY)>1 AND LEFT$(AKEY,1)="A" THEN 970 ELSE 1010
970 REM KEY NOW DEFINDED USING "ALT"
980 AKEY=RIGHT$(AKEY,1) :GOSUB 1200
990 PRINT #1,CHR$(27)"[0;"ASKEY.CODE";"CHR$(34);ANSI.KEY;CHR$(34)"p";
1000 GOTO 1110
1010 IF LEN(AKEY)>2 THEN 1020 ELSE 1070
1020 REM SPECIAL KEYS CASE
1030 REM FINDS PROPER EXTENDED CODE
1040 GOSUB 1560
1050 PRINT #1,CHR$(27)"[0;"ASKEY.CODE";"CHR$(34);ANSI.KEY;CHR$(34)"p";
1060 GOTO 1110
1070 REM KEY DEFINED WITHOUT "ALT"
1080 VAL.ASCII=ASC(AKEY):ASKEY.CODE =MID$(STR$(VAL.ASCII),2)
1090 PRINT #1,CHR$(27)"["ASKEY.CODE";"CHR$(34);ANSI.KEY;CHR$(34)"p";
1100 REM RE-INITIALIZES VARIABLES AND GETS NEXT KEY
1110  GOSUB 1680 : GOTO 610
1120 CLOSE
1130 CLS
1140 SYSTEM
1150 REM
1160 REM _______________________  LOGICAL END OF PROGRAM ______________________
1170 REM
1180 REM
1190 REM
1200 REM ********** SUBROUTINE RETURNS ALT VALUES *****************************
1210 REM INPUTS :  AKEY     OUTPUTS : ASKEY.CODE
1220 REM
1230 REM
1240 REM
1250 ASKEY.CODE =MID$(STR$(INDEX(ASC(AKEY))),2)
1260 RETURN
1270 REM
1280 REM
1290 REM
1300 REM **********************************************************************
1310 REM
1320 REM
1330 REM
1340 REM ********* SUBROUTINE READS ALT VALUES INTO INDEX(X) AND AINDEX(X) *****
1350 REM
1360 REM
1370 REM
1380 READ CHAR
1390 WHILE CHAR <> "*"
1400    READ INDEX(ASC(CHAR))
1410    READ CHAR
1420 WEND
1430 REM
1440 REM READS VALUES INTO AINDEX(X)
1450 READ ASPECIALKEY
1460 WHILE ASPECIALKEY <> "*"
1470    READ NUMBER
1480    AINDEX(NUMBER)=ASPECIALKEY
1490    READ ASPECIALKEY
1500 WEND
1510 RETURN
1520 REM
1530 REM *********************************************************************
1540 REM
1550 REM
1560 REM ********** SUBROUTINE RETURNS CODES FOR SPECIAL KEYS ****************
1570 REM INPUTS : AKEY  OUTPUTS : ASKEY.CODE
1580 REM
1590 REM
1600 ISDONE=0
1610 FOR I=1 TO 150
1620     IF AINDEX(I)=AKEY THEN ASKEY.CODE = MID$(STR$(I),2) : ISDONE=1
1630 NEXT
1640 IF ISDONE=0 THEN PRINT :LOCATE 13,20:BEEP: PRINT " SPECIAL KEY NOT FOUND. PLEASE TRY AGAIN.": FOR TIME=1 TO 2000: NEXT TIME
1650 RETURN
1660 REM
1670 REM
1680 REM ***************** SUBROUTINE INITIALIZES VARIABLES *******************
1690 AKEY="" : A$="" : ANSI.KEY= "" : CHAR ="" :
1700 CODE="" : IND =0 : ISDONE =0 : NUMBER =0 : VAL.ASCII =0 : ASKEY.CODE ="" : ASPECIALKEY="" : TIME =0
1710 RETURN
1720 REM *********************************************************************
1730 REM
1740 REM
1750 REM ******************** DATA FOR INDEX(X)
1760 REM
1770  DATA Q,16,W,17,E,18,R,19,T,20,Y,21,U,22,I,23,O,24,P,25
1780 DATA A,30,S,31,D,32,F,33,G,34,H,35,J,36,K,37,L,38
1790 DATA Z,44,X,45,C,46,V,47,B,48,N,49,M,50
1800 DATA "1",120,"2",121,"3",122,"4",123,"5",124,"6",125,"7",126,"8",127,"9",128,"0",129,"-",130,"=",131
1810 DATA "*"
1820 REM ******************** DATA FOR AINDEX(X)
1830 DATA "SHIFT TAB", 15,"FK1",59,"FK2",60,"FK3",61,"FK4",62,"FK5",63,"FK6",64,"FK7",65,"FK8",66,"FK9",67,"FK10",68
1840 DATA "HOME",71,"CURSOR UP",72,"PG UP",73,"CURSOR LEFT",75,"CURSOR RIGHT",77
1850 DATA "END",79,"CURSOR DOWN",80,"PG DN",81,"INS",82,"DEL",83
1860 DATA "SF1",84,"SF2",85,"SF3",86,"SF4",87,"SF5",88,"SF6",89,"SF7",90,"SF8",91,"SF9",92,"SF10",93
1870 DATA "CF1",94,"CF2",95,"CF3",96,"CF4",97,"CF5",98,"CF6",99,"CF7",100,"CF8",101,"CF9",102,"CF10",103
1880 DATA "aF1",104,"aF2",105,"aF3",106,"aF4",107,"aF5",108,"aF6",109,"aF7",110,"aF8",111,"aF9",112,"aF10",113
1890 DATA "CTRL-PRTSC",114,"CTRL-CURSOR LEFT",115,"CTRL-CURSOR RIGHT",116,"CTRL-END",117
1900 DATA "CTRL-PG DN",118,"CTRL-HOME",119,"CTRL-PG UP",132
1910 DATA "*"
1920 END
```
{% endraw %}

## DEFKEY.DOC

{% raw %}
```
                          
         *************************************************** 
         *                                                 *
         *                                                 *
         *                                                 *
         *                   DEFKEY                        *
         *                                                 *
         *   A TOTAL KEYBOARD RE-DEFINITION PROGRAM        *
         *                                                 *
         *            Created January, 1984                *
         *             by Charlie Tomberg                  *
         *                                                 *
         *                5 Hooker Lane                    *
         *             Cos Cob, Ct. 06807                  *
         *                (203)869-6707                    *
         *                                                 *
         *                                                 *
         ***************************************************





1) PURPOSE

   The purpose of this program is to allow the user to customize almost 
all of the keys ofthe PC's keyboard, provided that PC-DOS Version 2.0 is 
being used .  Using this utility, it is possible to assign almost any 
string to almost any key or combination of keys (such as ALT-A, etc), 
thus significantly decreasing the amount of typing that the user will 
have to do.  For example, it is possible to assign the dos command `DIR' 
to the ALT-D sequence so that whenever these keys were pressed, `DIR' 
would be printed out. 
 
2) STRUCTURE   

   The DEFKEY utility is comprised of two seperate files, DEFKEY.BAS and 
DEFKEY.BAT.  The batch file allows you to invoke the utility by simply 
entering `DEFKEY' to the dos prompt.  This file then goes into BASIC and 
executes the DEFKEY.BAS program. After execution of the program is 
complete, DEFKEY returns to dos and copies the output file that contains 
the new keyboard definitions to the computer's memory by executing the 
dos command : COPY DEFKEY.ANS CON: . From this point on, all the new key 
definitions will be in effect. 

        NOTE : This procedure will not work unless the system file 
ANSI.SYS has been placed in the CONFIG.SYS file before the current boot 
up.  This can be done by typing the following instructions to the dos 
prompt: 


                         COPY CON: CONFIG.SYS
                         DEVICE=ANSI.SYS

and then entering CTRL-Z.  Dos should respond with `1 file copied'.  
Then re-boot by entering CTRL-ALT-DEL and the ANSI.SYS driver will be 
installed in the system thus allowing you to re-define the keyboard. 

   It should be noted, however, that this will only allow you to use 128 
characters in your definitions.  In order to be able to use more than 
this limit, the ANSI driver must be altered. This alteration procedure 
is outlined in the November, 1983 issue of PC MAGAZINE (Vol. 2, Number 
6) on pages 564 and 565, and is not included here due to its complex and 
technical nature.  This notwithstanding, I had no trouble in making this 
relatively simple modification. 


3) THE PROGRAM ITSELF                                                                 

   Once the main program has started to execute, you will be asked to 
enter the key that you wish to define. At this point a carriage return 
or the entering of the word `HELP' will print out detailed instructions. 
   The keys that may be defined by this program have been divided 
into three catagories.

   First there are the standard keyboard characters: the letters, 
numbers, etc. These are signified simply by typing the character that 
you wish to define.  

   Second are these same characters when part of an ALT sequence as in 
ALT-A or some combination like it. This type of sequence is signified by 
typing a capital A before the key to be defined. Thus `AB' would signify 
the `ALT-B' sequence. 

   Last are the special keys or key sequences. The function keys and 
such other keys as `HOME', `INS', `DEL' ,etc fall into this catagory. To 
define these keys,you must enter the entire key name. You can get a full 
list of these special keys by entering a carriage return or `HELP' at 
this time.

           
          NOTE: The function keys are denoted by `FK1' - `FK10'.      
                The ALT-FUNCTION KEY sequences are denoted by `aF1' 
                - `aF10'.  The `a' MUST be lower-case. 
                `CF1' - `CF10' denote the CTRL-FUNCTION KEY sequences, and
                `SF1' - `SF10' denote the SHIFT-FUNCTION KEY ONES.


   After you have entered the key to be defined, you will be asked to 
enter a definition.You can get help at this point by entering a carriage 
return. A definition may be of two forms. It may be either a simple 
string expression such as `have a nice day' or it may be an ASCII code 
number. representing a character or other expression. 

   To enter a simple string just type in that string. 
   To enter an ASCII expression, enter the letters `ASC' followed by the 
ASCII code number. For example, you might enter `ASC068' to assign an 
upercase `D' to a key, since 068 is the ASCII code for `D'. 

   The program will then ask you to define another key. You may define 
as many keys as you like, but you should keep in mind that the maximum 
number of chatacters that all of your definitions combined may have is 
128 unless you have modified the ANSI driver. 

   To end, type in `END',`EXIT',`BYE',`DONE' or `STOP' when the 
program askes what key you want to define.

4) IMPLEMENTING DEFKEY  


   After you exit from the program, you will be returned to dos and the 
keyboard definitions which will then be contained in the file 
`DEFKEY.ANS' will be copied to the system as described above.  If a 
previous `DEFKEY.ANS' file existed at the time the `DEFKEY.BAT' file was 
called on, it was renamed to `DEFKEY.BAK'. If `DEFKEY.BAK' also existed, 
it was deleted. 

   In any case, `DEFKEY.ANS' will now contain the most recent set of key 
definitions.  This file must be re copied to the system each time you 
boot up for its definitions to be effective.  You might want to include 
it in the AUTOEXEC.BAT file so that it will be automatically entered at 
boot up.  This may be done by typing the following sequence to dos: 


                        COPY CON: AUTOEXEC.BAT
                        COPY DEFKEY.ANS CON:

and then entering CTRL-Z.


                         HAPPY COMPUTING!!!!!


```
{% endraw %}

## KEYS.BAS

{% raw %}
```bas
10 REM DEFINES BASIC FUNCTION KEYS
20 REM CREATED BY CHARLIE TOMBERG  JANUARY, 1984
30 ON ERROR GOTO 210
40 KEY 1, "load "+CHR$(34)
50 KEY 2, "load "+CHR$(34)+ "b:"
60 KEY 3, "files"
70 KEY 4, "files "+CHR$(34)+ "b:"
80 KEY 5, "list" +CHR$(13)
90 KEY 6, "run"  + CHR$(13)
100 KEY 7, "save " +CHR$(34)
110 KEY 8, "save " +CHR$(34) +"b:"
120 KEY 9, "cls" +CHR$(13)
130 KEY 10, "system"
140 CLS
150 KEY ON
160 LOCATE 15,20: INPUT "WHICH FILE DO YOU WANT TO RUN? [HIT RETURN IF NONE.]  "; FILE$
170 IF FILE$ <>"" THEN CHAIN FILE$
180 CLS
190 NEW
200 STOP
210 IF ERR=53 THEN PRINT :CLS : LOCATE 15,20: PRINT "File not found.":FOR I=1 TO 900 : NEXT I
220 GOTO 180
230 END
```
{% endraw %}

## MOD100IN.BAS

{% raw %}
```bas
10  REM ... TRS-80 Model 100 to IBM/PC data transfer program
20  REM ... by Ken Cooper, Ph.D.
30  REM ... takes word wrapped text file with double spacing between
40  REM ... paragraphs and transfers it to IBM/PC in VisiWord-readable format
50 DIM A$(250), P$(12) :REM ... input array and print buffer
60 XF$ = CHR$(19): XN$ = CHR$(17): TR = 0: L = 0
70 FOR I = 1 TO 250: A$(I) = "": NEXT: REM ... blank input array
80 FOR I = 1 TO 12: P$(I) = "": NEXT: REM ... blank print buffer
90 I = 1: L1 = -1: L2 = -2: PE$ = CHR$(13) + CHR$(13)
100 OPEN "COM1:300,E,7,1" AS #1: REM ... input file from Model 100
110 PRINT#1, XN$: REM ... enable Model 100
120 CLS: PRINT "Hit return on TRS-80 Model 100"
130 L = L + 1
140  REM ... empty buffer and reinitialize timeout loop
150 IF LOC(1) > 120 THEN: A$(I) = INPUT$ (LOC(1),#1): I = I + 1: L = 0: GOTO 130
160  REM ... check timeout for last block of data
170 IF L = 300 THEN L1 = LOC(1)
180 IF L = 500 THEN L2 = LOC (1)
190 IF L1 = L2 THEN A$(I) = INPUT$ (LOC(1),#1): GOTO 210
200 GOTO 130
210 CLOSE: PRINT: PRINT "TRANSFER COMPLETE - now storing data on diskette"
220 PRINT:PRINT:INPUT "Filename for storage - "; FI$
230 OPEN FI$ FOR OUTPUT AS #2: REM ... disk file for VisiWord
240  REM ... storage section
250 I1 = 1: P1 = 1
260  REM ... paragraph buffer loop
270 IF A$(I1) = "" GOTO 450: REM ... check for last record
280  REM ... take out single transmission c/r
290 CR = INSTR (A$(I1),CHR$(13))
300 IF CR <> 0 AND MID$ (A$(I1),CR+1,1) <> CHR$(13) THEN A$(I1) = LEFT$ (A$(I1),CR-1) + RIGHT$ (A$(I1),LEN(A$(I1))-CR): GOTO 290
310 REM ... search for paragraph end (double c/r)
320 PR = INSTR (A$(I1),PE$)
330 IF PR = 0 GOTO 420
340  REM ... print paragraph block (maximum size about one doublespaced
350  REM ... typed page)
360 PRINT#2, P$(1); P$(2); P$(3); P$(4); P$(5); P$(6); P$(7); P$(8); P$(9); P$(10); P$(11); P$(12); LEFT$ (A$(I1),PR-1)
370 FOR N = 1 TO 12: P$(N) = "": NEXT: REM ... blank out print buffer
380 P1 = 1
390 A$(I1) = RIGHT$ (A$(I1),LEN(A$(I1)) - (PR+1)): REM .. save remaining string
400 GOTO 270
410  REM ... no c/r found
420 IF (LEN (P$(P1)) + LEN (A$(I1))) < 256 THEN P$(P1) = P$(P1) + A$(I1) ELSE P1 = P1 + 1: P$(P1) = A$(I1): REM ... add string to print buffer array (allowing for 256        character maximum string length in BASIC)
430 I1 = I1 + 1
440 GOTO 270
450 PRINT: PRINT "Transfer and storage completed to file ";FI$
460 CLOSE: END
```
{% endraw %}

## MOD100IN.DOC

{% raw %}
```

PROGRAM:  TRS Model 100 to IBM PC Text File Transfer

AUTHOR:  Ken Cooper, Ph.D.

PURPOSE:  This simple BASIC program allows the transfer of text
files from the Radio Shack TRS-80 Model 100 Portable Computer to
an IBM PC.  Data is communicated over a direct cable (and null
modem) connection between the standard RS-232 port of the Model
100 and the optional COM1 port of the PC.

BACKGROUND:  As a writer, I use the Model 100 to create text
files while traveling.  I do all my text processing on the PC and
needed a simple program to upload the text for input to VisiWord.
I have no need for a downloading function since VisiWord can
quickly and easily be configured to "print" standard DOS files to
the COM port (with TELCOM running on the Model 100.)  Any program
which can print to a COM port can download in similar fashion.

Rather than purchase an expensive communications program for this
simple application, I used the example in the back of the BASIC
manual to build MOD100IN.bas.  The program transfers data (albeit
slowly) to the PC, building up a text array in storage.  The
available storage in a 64K system is more than adequate for the
program and largest text file possible in a 32K Model 100.  In
addition, the storage array is dimensioned for approximately 30K
of text at a Model 100 transmission blocksize of 120 characters.

USE:  It is necessary to create text on the Model 100 using two
carriage returns between paragraphs.  This allows MOD100IN.bas to
identify the carriage return automatically inserted at the end of
transmission blocks by TELCOM on the Model 100.  Any single
carriage return is edited out of the transmitted text by
MOD100IN.bas, and end-of-paragraph double carriage returns are
reduced to a single carriage return.

Also, due to the programming method used to edit the carriage
returns, the maximum size of a single paragraph of text which can
be transferred is about 220 words.  This corresponds to a typical
full double-spaced typed page.  (If your paragraphs are much
longer than that, no one will want to read what you write
anyway.)

STEP 1:  Connect the RS-232 ports together using an appropriate
cable and null modem.  These are available from most computer
stores and from any Radio Shack computer center.

STEP 2:  Line 100 of MOD100IN.bas described the transmission
protocol to be used by TELCOM on the Model 100:  300 baud, even
parity, 7 data bits, and 1 stop bit.  Set up TELCOM with these
features as described in the Model 100 manual.

STEP 3:  Get into BASICA from the system and LOAD (not RUN)
MOD100IN.bas.

STEP 4:  Follow the procedure for UPloading files in TELCOM as
described in the Model 100 manual.  When you reach the prompt:

         LENGTH = _

type in the value 120 and DO NOT hit return.

STEP 5:  Type RUN on the IBM PC to start MOD100IN.bas running.
You will be given a prompt to hit the return on the Model 100.

STEP 6:  Hit <return> on the Model 100.  The system will appear
to go dead, possibly for some minutes if the file is large.
Using 300 baud is very slow, but BASIC isn't fast enough to keep
up with a higher baud rate.

STEP 7:  When transfer is complete, you will see a status message
on the PC, and will next be asked to input a filename for
storage.  GET THIS RIGHT, including the drive designation where
necessary.  No quotes are needed.  If you make some kind of error
which does not allow the storage operation to complete, such as
trying to store onto a protected diskette, etc., the program will
abort and the entire transfer operation will have to be repeated
from the beginning.

NOTE:  There is no drastic hurry to move from Step 5 to Step 6,
yet there should be little time delay.  BASICA times out after a
few seconds when there is no data input to the COM port and halts
the execution of MOD100IN.bas with an error message.



KNOWN PROBLEMS:

1.  There is a small bug which randomly surfaces when the text
file end falls on an end of transmission character.  (This should
only happen statistically once in every 120 times, based on a
block length of 120.)  When this occurs, merely resend the file
using a different block length such as 119 or whatever to assure
ending on some other position.

2.  There is another small bug which evidently misses removing
occasional transmission carriage returns from the middle of a
paragraph.  I have as of yet found no pattern from which to
develop a fix.  Besides, it is a simple operation to delete the
character from VisiWord (or whatever text processor you use.)

SUMMARY:

This is not a particularly sophisticated program, written by a
programmer of similar skill.  Yet it gets the text file uploaded
adequately for most needs.  The Model 100 makes a great remote
device for text entry, and the PC is perfect for final editing.
I hope you find this program of use.

```
{% endraw %}

## PC-BW.DOC

{% raw %}
```





           =================================================

                              PC-BW V1.0

           =================================================




     Purpose:

     PC-BW is designed for those who use a black and white display 
     with the  IBM colour  graphics adaptor  (or equivalent).  The 
     program  intercepts  requests  to  `set operational mode' and 
     substitutes  the  equivalent  black  and  white mode for each 
     colour mode  request. This  will improve  the clarity  of the 
     display for many programs which use the colour capability. 


     PC-BW works with DOS 1.1 and DOS 2.0, and with the IBM PC and 
     the PC-XT. 

     PC-BW works with all programs in  your system. It can be used 
     in conjunction with any  of the other programs on  this disk, 
     and should work with any other program. 

     In case of problems with other DOS resident programs, execute 
     PC-BW last.   If operation is still  incorrect, please report 
     problems to Datamorphics Ltd. at the address given below. 


     Installation:

     The distribution disk contains three PC-BW related files: 

           -   PC-BW.COM       This   file    instals  the  colour 
     modification program in your system.  The program executes as 
     an extension to DOS. It is  permanently resident and occupies 
     128 bytes of memory. This program works  with DOS 1.1 and DOS 
     2.0. 

           -   PC-BW.D11        This  file    instals  the  colour 
     modification program  in your DOS 1.1 system. It is identical 
     to PC-BW.COM except  that it is  further optimised to  reduce 
     space required  in your DOS 1.1 system. We assume that if you 
     are running  DOS 1.1  then your  memory space  is valuable to 
     you. This version occupies only 48 bytes of memory. NOTE THAT 
     IT DOES NOT WORK  WITH DOS 2.0. To use this  version, copy it 
     to your operational disk and rename it to PC-BW.COM. 


           -  PC-BW.DOC      This  file  contains  documentation 
     for PC-BW.


     To  use  PC-BW,  we  suggest  that  you  copy  PC-BW.COM  (or 
     PC-BW.D11) to your DOS disk. 

     PC-BW should be executed only once per session, usually  just 
     after the system is booted. 


     Operation:

     PC-BW.COM  should only  be executed  once, usually just after 
     the  system  is  booted.  It  can  be  incorporated  in  your 
     AUTOEXEC.BAT file, if desired. On execution, the program will 
     be made resident above DOS:

                       A>pc-bw  



     Payment:

     This subsystem is one  of three on the distribution diskette. 
     If you  find this, or  any of the  others, to be  valuable on 
     your  personal computer,  please submit  a payment  of $20.00 
     together with your name and address to - 


                          Datamorphics Ltd.,
                             P.O. Box 820,
                             Stittsville,
                               Ontario,
                            Canada K0A 3G0.


     Registered  users will  be kept  informed of  updates and new 
     software available from Datamorphics Ltd.

     Regardless of whether you decide to pay for this program, you 
     are encouraged  to copy the distribution diskette and pass it 
     on  to  friends  and  associates,  provided  only  that   you 
     distribute the complete contents  of the diskette, and do not 
     modify the  programs or  charge for  distribution (except for 
     diskette costs). 


     User Supported Software:

     This  program  is   part  of  the  User   Supported  Software 
     experiment. Its objectives are:

       1.   To  permit  users  to  evaluate  a software package at 
     leisure on their own  systems before deciding whether  or not 
     to purchase it.

       2.   To  offer  an  alternate  means of  distribution which 
     benefits both user and publisher: The publisher benefits from 
     low distribution and advertising costs. This saving is passed 
     on  to  the  user  in  two  ways  -  a  lower  price; and the 
     availability of small  packages which could not  be published 
     cost effectively through traditional channels. 

       3.   To  provide a means  of  software  distribution  which 
     encourages  rather  than  restricts  the  copying  and casual 
     distribution of programs. This distribution system we believe 
     to   be  more  suited  to  the  electronic  medium  than  the 
     traditional systems which seek to restrict access to software 
     packages. 


     To Obtain a Copy of PC-BW:  

     If you would like a copy of PC-BW,  but do not have access to 
     it   via   a   friend   or   acquaintance,  the  program  and 
     documentation  can be  obtained from  the above  address upon 
     payment of $20.00. 

     PLEASE NOTE that due to  the low price of this  software, and 
     the costs  of mailing  and handling,  Datamorphics Ltd.  will 
     only distribute this  program directly on pre-payment  of the 
     $20.00 license fee. 



```
{% endraw %}

## PC-PAGE.DOC

{% raw %}
```





           =================================================

                             PC-Page  V1.0

           =================================================




     Purpose:

     PC-Page prevents  the annoying  habit many  programs have  of 
     scrolling information up and off the screen before you have a 
     chance to read it. 

     PC-Page breaks  long streams of output  into readable `pages' 
     and waits for a keystroke between pages, thus allowing you to 
     view information at your own pace. A `page' can be any number 
     of lines between 2 and 100, and is set by the `Page' program. 
     In practise, most people will find page lengths  of around 20 
     to  25  most  convenient.  PC-Page  can  also  be placed in a 
     dormant mode in which it will not affect the output stream.

     PC-Page  will  not  interfere  with  short  bursts  of output 
     interspersed with input from the keyboard. PC-Page works with 
     all programs, including BASICA and BASIC programs.

     Paging does not  have to be specified with  every command you 
     enter.   Once installed, you  only need to  enter commands to 
     change  the  page  size  you  are  working  with - `paging is 
     automatic for every program executed. 

     PC-Page works  with DOS 1.1 and DOS 2.0,  and with the IBM PC 
     and the PC-XT.

     PC-Page  works with all programs in your system. If it should 
     interfere with  the natural  operation of  your program, just 
     place  it in the  dormant mode (see  below). For example, you 
     will  find  PC-Page  to  be  useful in conjunction with TYPE, 
     BASICA, and DEBUG. 

     PC-Page  should  be   compatible  with  other   DOS  resident 
     programs, and can be used in conjunction with either  or both 
     of the  other subsystems  on this  disk. In  case of problems 
     with  other   vendor's  programs,  instal  PC-Page  last.  If 
     operation is  still incorrect,  please report  the problem to 
     Datamorphics Ltd. at the address below. 


     Installation: 

     The distribution disk contains four PC-Page related files:

           -  PC-PAGE.COM      This  file  instals PC-Page in your 
     system. The program  executes as an  extension to DOS.  It is 
     permanently resident and occupies  320 bytes of memory.  This 
     program works with DOS 1.1 and DOS 2.0.

           -  PC-PAGE.D11       This file  instals PC-Page in your 
     DOS 1.1 system. It is identical to PC-PAGE.COM except that it 
     is further optimised to reduce space required in your DOS 1.1 
     system. We assume that  if you are running DOS  1.1 then your 
     memory space is  valuable to you. This  version occupies only 
     272 bytes of memory. NOTE THAT IT DOES NOT WORK WITH DOS 2.0.
             To use this version, copy it to your operational disk 
     and rename it to PC-PAGE.COM.

           -  PAGE.COM         This  program  is  used  to set the 
     `page' size. Any page  size from 2 lines to 100  lines can be 
     used. Also,  specifying page size  0 will place  PC-Page in a 
     dormant mode in which it will not affect the output stream.

           -  PC-PAGE.DOC      This  file  contains  documentation 
     for PC-Page.


     To  use  PC-Page,  we  suggest  that you copy PC-PAGE.COM (or 
     PC-PAGE.D11) and PAGE.COM to your DOS disk. 

     PC-PAGE should  be executed  only once  per session,  usually 
     just after the system is booted. The PAGE program is executed 
     each time you want to change `page' size.



     Operation:

     PC-PAGE.COM should only be executed once, usually  just after 
     the  system  is  booted.  It  can  be  incorporated  in  your 
     AUTOEXEC.BAT file, if desired. On execution, the program will 
     be made resident above DOS. Initially, the paging function is 
     dormant: 

                       A>pc-page

     To set or change the `page' size, use the PAGE command with a 
     page length specification:

                       A>page 24

     will set the  `page' size to 24 lines. Setting `page' size to 
     0 will make PC-Page dormant again:

                       A>page 0
     or
                       A>page

     When operational, the paging software will break long streams
     of output after the number of lines you specify, and output a
     prompt `Hit any key to continue . . .' Output will then pause
     until you  enter a character  at the keyboard.  Note that the
     character will not be passed to the program executing. 
     Entering the `Control-Break'  sequence will end the pause and
     will pass `Control-Break' to the program executing.


     Payment:

     This subsystem is one  of three on the distribution diskette. 
     If you  find this, or  any of the  others, to be  valuable on 
     your  personal computer,  please submit  a payment  of $20.00 
     together with your name and address to - 


                          Datamorphics Ltd.,
                             P.O. Box 820,
                             Stittsville,
                               Ontario,
                            Canada K0A 3G0.


     Registered  users will  be kept  informed of  updates and new 
     software available from Datamorphics Ltd.

     Regardless of whether you decide to pay for this program, you 
     are encouraged  to copy the distribution diskette and pass it 
     on  to  friends  and  associates,  provided  only  that   you 
     distribute the complete contents  of the diskette, and do not 
     modify the  programs or  charge for  distribution (except for 
     diskette costs). 


     User Supported Software:

     This  program  is   part  of  the  User   Supported  Software 
     experiment. Its objectives are:

       1.   To  permit  users  to  evaluate  a software package at 
     leisure on their own  systems before deciding whether  or not 
     to purchase it.

       2.   To  offer  an  alternate  means of  distribution which 
     benefits both user and publisher: The publisher benefits from 
     low distribution and advertising costs. This saving is passed 
     on  to  the  user  in  two  ways  -  a  lower  price; and the 
     availability of small  packages which could not  be published 
     cost effectively through traditional channels. 

       3.   To  provide a means  of  software  distribution  which 
     encourages  rather  than  restricts  the  copying  and casual 
     distribution of programs. This distribution system we believe 
     to   be  more  suited  to  the  electronic  medium  than  the 
     traditional systems which seek to restrict access to software 
     packages. 


     To Obtain a Copy of PC-Page:

     If  you would like a copy of  PC-Page, but do not have access 
     to  it  via  a  friend  or  acquaintance,  the   program  and 
     documentation  can be  obtained from  the above  address upon 
     payment of $20.00. 

     PLEASE NOTE that due to  the low price of this  software, and 
     the costs  of mailing  and handling,  Datamorphics Ltd.  will 
     only distribute this  program directly on pre-payment  of the 
     $20.00 license fee. 



```
{% endraw %}

## PC-TTY.DOC

{% raw %}
```





           =================================================

                              PC-TTY V1.0

           =================================================




     Purpose:

     PC-TTY  modifies  the TTY emulation mode  provided by the DOS 
     BIOS  routines. It implements two changes in the operation of 
     TTY emulation:

           1.     The  program enables  you to  edit lines  longer
     than 80  characters  using  the  standard  DOS  line  editing
     functions. The change also corrects a problem in the ROM BIOS
     which causes an  additional blank line to be  inserted in the 
     output stream following a line of exactly 80 characters.

           2.     The program provides the option to `wrap' or not 
     to `wrap' lines which are greater than the screen width. BIOS 
     provides  `wrap' as standard  - i.e. a  line greater than the 
     screen width is displayed by continuing it on the  line below 
     (it is `wrapped' around onto the next line). The alternative, 
     which  is  sometimes  more  useful,  is  not  to  display any 
     characters of the line which  extend beyond the screen width. 
     This mode ensures  that the screen  will always display  (the 
     first 40 or 80 characters of) 25 lines of the source file. 

     PC-TTY   will  not  interfere  with  any other aspect of  the 
     screen display.

     Once installed, the wrap mode is changed by using  the `WRAP' 
     command. 

     PC-TTY  works  with DOS 1.1 and DOS 2.0,  and with the IBM PC 
     and the PC-XT.

     PC-TTY   works with all programs in your system. With  `wrap' 
     set  ON  (the  default),  the  system will operate exactly as 
     before, except  that the problem with 80 character lines will 
     not occur, and line editting will be improved.

     PC-TTY can be used in conjunction  with either or both of the 
     other  two  subsystems  on  this  diskette. It should also be 
     compatible  with  other  DOS  resident  programs.  In case of 
     problems,   instal  PC-TTY   last.  If   operation  is  still 
     incorrect, please report the problem to  Datamorphics Ltd. at 
     the address given below.


     Installation:

     The distribution disk contains four PC-TTY related files: 

           -   PC-TTY.COM       This  file  instals PC-TTY in your 
     system. The  program executes as  an extension to  DOS. It is 
     permanently resident  and occupies 384 bytes  of memory. This 
     program works with DOS 1.1 and DOS 2.0. 

           -  PC-TTY.D11      This file instals PC-TTY in your DOS 
     1.1 system. It is identical  to PC-TTY.COM except that it  is 
     further optimised  to reduce space  required in your  DOS 1.1 
     system. We  assume that if you are  running DOS 1.1 then your 
     memory  space is valuable to  you. This version occupies only 
     304 bytes of memory. NOTE THAT IT DOES NOT WORK WITH DOS 2.0. 
     To  use this  version, copy  it to  your operational disk and 
     rename it to PC-TTY.COM. 

           -   WRAP.COM         This  program  is  used to set the 
     `wrap'  mode. `WRAP  ON' is  the default  and implements only 
     feature  (1)  above.  `WRAP  OFF'  inhibits line wrapping and 
     ensures that the  display will show  25 lines of  your source 
     file. 

           -  PC-TTY.DOC      This file contains documentation for 
     PC-TTY. 


     To  use  PC-TTY,   we  suggest  that you copy PC-TTY.COM (or 
     PC-TTY.D11) and WRAP.COM to your DOS disk. 

     PC-TTY should  be executed  only once  per session,  usually 
     just after the system is booted. The WRAP program is executed 
     each time you want to change `wrap' mode.



     Operation:

     PC-TTY.COM should only  be executed once, usually  just after 
     the  system  is  booted.  It  can  be  incorporated  in  your 
     AUTOEXEC.BAT file, if desired. On execution, the program will 
     be made  resident above DOS. Initially,  the wrap function is 
     enabled (as in standard DOS): 

                       A>pc-tty

     To set or change the `wrap' mode, use the WRAP command with a 
     mode specification:

                       A>wrap on
     or
                       A>wrap

     will  set the  `wrap' function  on (default).  Setting `wrap' 
     mode off will prevent long lines from wrapping around onto  a 
     second  line of  your screen.  Instead, extra characters will 
     not be displayed: 

                       A>wrap off


     Payment:

     This subsystem is one  of three on the distribution diskette. 
     If you  find this, or  any of the  others, to be  valuable on 
     your  personal computer,  please submit  a payment  of $20.00 
     together with your name and address to - 


                          Datamorphics Ltd.,
                             P.O. Box 820,
                             Stittsville,
                               Ontario,
                            Canada K0A 3G0.


     Registered  users will  be kept  informed of  updates and new 
     software available from Datamorphics Ltd.

     Regardless of whether you decide to pay for this program, you 
     are encouraged  to copy the distribution diskette and pass it 
     on  to  friends  and  associates,  provided  only  that   you 
     distribute the complete contents  of the diskette, and do not 
     modify the  programs or  charge for  distribution (except for 
     diskette costs). 


     User Supported Software:

     This  program  is   part  of  the  User   Supported  Software 
     experiment. Its objectives are:

       1.   To  permit  users  to  evaluate  a software package at 
     leisure on their own  systems before deciding whether  or not 
     to purchase it.

       2.   To  offer  an  alternate  means of  distribution which 
     benefits both user and publisher: The publisher benefits from 
     low distribution and advertising costs. This saving is passed 
     on  to  the  user  in  two  ways  -  a  lower  price; and the 
     availability of small  packages which could not  be published 
     cost effectively through traditional channels. 

       3.   To  provide a means  of  software  distribution  which 
     encourages  rather  than  restricts  the  copying  and casual 
     distribution of programs. This distribution system we believe 
     to   be  more  suited  to  the  electronic  medium  than  the 
     traditional systems which seek to restrict access to software 
     packages. 


     To Obtain a Copy of PC-TTY: 

     If you would like a copy of PC-TTY, but do not have access to 
     it   via   a   friend   or   acquaintance,  the  program  and 
     documentation  can be  obtained from  the above  address upon 
     payment of $20.00. 

     PLEASE NOTE that due to  the low price of this  software, and 
     the costs  of mailing  and handling,  Datamorphics Ltd.  will 
     only distribute this  program directly on pre-payment  of the 
     $20.00 license fee. 



```
{% endraw %}

## PROGRAM.DOC

{% raw %}
```
   
                      PROGRAM DESCRIPTIONS


DEFKEY.BAS       - A BASIC  program that allows the user to 
                   totally re-define the dos keyboard.

DEFKEY.BAT -     - A batch file that allows you to run DEFKEY.BAS 
                   by simply typing `DEFKEY' to dos.  This file 
                   also copies the output file which DEFKEY.BAS 
                   creates to the system, thus activating the 
                   re-defined keys. 

KEYS.BAS         - A BASIC program that re-defines the BASIC 
                   function keys and allows you to load to specify
                   a program to be run.

BASICAK.BAT      - Loads BASIC and runs KEYS.BAS from dos.



         These programs were created by Charlie Tomberg
                                         5 Hooker Lane
                                       Cos Cob, Ct. 06807.






```
{% endraw %}

## SAMP1.TXT

{% raw %}
```
	   *** THIS WILL BE A SAMPLE TEXT FILE TO COMPARE ***

    This program allows you to compare two ASCII/text files - though not
files in binary code; use COMP.COM on your DOS disk for this - and list their

differences to the printer or to a disk file. The file saved on disk can later
be copied to the printer with the `COPY filename PRN' command. The default
output filename is COMPARE.DTA, and is sent to the default drive. If it
already exists, a prompt to overwrite it or for another name, will be requested.
This can be prefixed with a drive letter.

    You can type in the names of the files to be compared on the command
line when the program is called, as; COMPARE filename.one, filename.two, and
hit ENTER key. Use a space or comma to separate the two filenames. Otherwise,
you will be prompted from with the menu screen for the filenames if you

     The LookAhead parameter refers to the number of lines the second file is
key to use the default LookAhead value. The maximum value allowed is 255.

     Printing out the file line being searched for in the second file is also
an option. The `fixed line' option is explained in the next paragraph.

    Again, this program is placed in the user-supported software market on an
"AS-IS" basis, and NO guarantees or warranties accompany it as to its use or
suitability for any application. The "FreeWare" market seems to be missing
a source compare program. This program is released to the public domain
in that spirit. Any financial support is appreciated, of course. But pass
the program along, use it, and comment on it if you wish. Those supporting it
will be informed of any updates or modifications.

    Again, this program is placed in the user-supported software market on an
"AS-IS" basis, and no guarantees or warranties accompany it as to its use or
suitability for any application. The "FreeWare" market seems to be missing
```
{% endraw %}

## SAMP2.TXT

{% raw %}
```
	   *** THIS WILL BE A SAMPLE TEXT FILE TO COMPARE ***

    This program allows you to compare two ASCII/text files - though not
files in binary code; use COMP.COM on your DOS disk for this - and list their

differences to the printer or to a disk file. The file saved on disk can later
be copied to the printer with the `COPY filename PRN' command. The default
output filename is COMPARE.DTA, and is sent to the default drive. If it
already exists, a prompt to overwrite it or for another name, will be requested.
This can be prefixed with a drive letter.

    You can type in the names of the files to be compared on the command
line when the program is called, as; COMPARE filename.one, filename.two, and
hit ENTER key. Use a space or comma to separate the two filenames. Otherwise,
you will be prompted from with the menu screen for the filenames if you

     The LookAhead parameter refers to the number of lines the second file is
key to use the default LookAhead value. The maximum value allowed is 255.

     Printing out the file line being searched for in the second file is also
an option. The `fixed line' option is explained in the next paragraph.

    Again, this program is placed in the user-supported software market on an
"AS-IS" basis, and no guarantees or warranties accompany it as to its use or
suitability for any application. The "FreeWare" market seems to be missing
a source compare program. This program is released to the public domain
in that spirit. Any financial support is appreciated, of course. But pass
the program along, use it, and comment on it if you wish. Those supporting it
will be informed of any updates or modifications.

    Again, this program is placed in the user-supported software market on an
"AS-IS" basis, and no guarantees or warranties accompany it as to its use or
suitability for any application. The "FreeWare" market seems to be missing
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0113

     Volume in drive A has no label
     Directory of A:\

    READ     ME       2678  12-03-83   8:16p
    INVOICE           1302  12-03-83   8:21p
    PC-BW    DOC      5207   1-01-82
    PC-PAGE  DOC      7357  12-11-83   2:42p
    PC-TTY   DOC      7179  12-11-83   2:32p
    PC-TTY   COM      1355  12-11-83   2:21p
    WRAP     COM       133  11-30-83   9:17p
    PC-BW    COM      1107  12-01-83   7:17p
    PAGE     COM       206  11-21-83   9:35p
    PC-PAGE  COM      1337  12-11-83  12:00p
    PC-BW    D11      1039  11-30-83   9:16p
    PC-PAGE  D11      1269  11-30-83   9:16p
    PC-TTY   D11      1287  12-11-83   2:13p
    RUN      BAT      1797   1-30-85  12:00p
    COMPARE1 DOC      1279   1-30-85  12:00p
    COMPARE2 DOC      1133   1-30-85  12:00p
    COMPARE3 DOC      1363   1-30-85  12:00p
    COMPARE4 DOC      1094   1-30-85  12:00p
    COMPLETE DOC     10388   1-30-85  12:00p
    PRINTDOC BAT       292   1-30-85  12:00p
    SAMP1    TXT      1931   1-30-85  12:00p
    SAMP2    TXT      1931   1-30-85  12:00p
    COPYCOMP BAT       534   1-30-85  12:00p
    COMPARE  COM     43638   1-30-85  12:00p
    CLS      COM       128   1-30-85  12:00p
    FILES    LST       692   1-30-85  12:00p
    MOD100IN BAS      2304   4-18-83  11:19a
    MOD100IN DOC      5031   1-05-83  11:01p
    PROGRAM  DOC       901   1-06-84   5:39p
    DEFKEY   BAS      9479   1-13-83   8:29a
    DEFKEY   BAT       139   1-03-84  12:42a
    DEFKEY   DOC      6667   1-05-84   3:59a
    KEYS     BAS       690   1-13-83   8:30a
    BASICAK  BAT        13   1-03-84  12:00a
    COMPARE5 DOC      1027   1-30-85  12:00p
    COMPARE6 DOC       904   1-30-85  12:00p
    BEEP     COM       151   1-30-85  12:00p
           37 file(s)     124962 bytes
                           23552 bytes free
