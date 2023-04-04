---
layout: page
title: "PC-SIG Library Disk #443"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0443/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0443"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "T-SCORE AND EDUCATION"

    These are programs designed to grade your scores and score your grades!
    T-SCORE contains programs for asigning equitable grades to up to 60
    students, based on 16 scores.  PC GRADEBOOK is a program to maintain
    and display sorted lists of up to 12 classes with 35 students per class
    and 45 grades per student.  Printouts and grades may be displayed by
    student or class as well as by assignment, grade to date or cumulative.
    PC Gradebook runs under the MicroSoft BASIC interpreter; the source
    code is GRADES.BAS and generates a report card which REPORTS.BAS
    prints.  A FLASHcard spelling, MATH facts and TYPE(ing) tutor fill out
    this very educational disk.
    
    System Requirements:  128K, one disk drive and monochrome display.
    T-SCORE requires an 8087 math co-processor (source code is provided)
    
    How to Start:  To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.  Consult the .DOC files for program
    documentation.
    
    Suggested Registration:  PC-GRADEBOOK $25.00
    
    File Descriptions:
    
    -------- ---  T-Scores System (REQUIRES AN 8087 MATH CO-PROCESSOR!!)
    TSCORE   EXE  Calculate T-scores, to assign equitable grades.
    TSCORE   DOC  Brief description file for T-Score (4K)
    TSCORE   DAT  Sample data for input to TSCORE.
    TSCORE   FOR  Fortran source text, output from SFtran processor.
    TSCORE   S3L  Pretty 4 page listing, from SFtran processor.
    TSCORE   S3I  SFtran source text for TSCORE.
    FLASH    BAS  A spelling program
    -------- ---  Flashcards
    README   TXT  Introductory message and notes on operation (3K)
    REPORTS  BAS  ASCII BASICA routine to produce printed reports
    NOTICE   BAS  ASCII BASICA plea for money
    GRADES   BAS  ASCII BASICA program for main routine
    -------- ---  PC Gradebook
    TSCORE   LIS  Output corresponding to TSCORE.DAT.
    KILL     DOC  Documentation for KILL.BAS and KILL2.BAS
    KILL2    BAS  Updated version of KILL.BAS
    KILL     BAS  Utility to save you time in BASIC
    TYPE     DOC  Documentation for TYPE.BAS
    TYPE     BAS  Program to improve your typing skills
    MENU     BAS  Menu for this set of programs
    MATH     DOC  Documentation for math.bas
    MATH     BAS  A math program that will help you learn your math facts
    -------- ---  T-Score Education Programs
    -------- ---  HSO - High Score Organizer
    FLASH    DOC  Documentation for FLASH.BAS (short)
    FLASH    BAT  Batch file to load FLASH.BAS in DOS
    ???      DOC  Documentation for SCR-MENU
    ???      BAS  Programs called from SCR-MENU
    SCR-EXEC BAT  Batch file to start SCR-MENU
    READ     ME   Notes on T-SCORE program
    FILES         Listing of FLASH program files
    FILELIST TXT  Listing of files for PC Gradebook
    BLK      BLK  Listing of files included
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FLASH.BAS

```bas
10 REM
20 REM ************************
30 REM ***  SPELLING FLASH  ***
40 REM ***  BY KEVIN CARR   ***
50 REM ************************
60 REM
70 REM
80 REM
90 SCREEN 2:SCREEN 0:WIDTH 80:KEY OFF:CLS:COLOR 4,2
100 OUT 984,12
110 PRINT "SPELLING FLASH"
120 FOR I=1 TO 3000:NEXT I
130 SCREEN 2:SCREEN 0,0,0:COLOR 4,2,4
140 INPUT "DO YOU WANT INSTRUCTIONS? (YES OR NO)   >",INSTRUCTION$
150 IF INSTRUCTION$="N" OR INSTRUCTION$="n" OR INSRUCTION$="NO" OR INSTUCTION$="no" THEN 210
160 CLS:COLOR 1,4,1
170 PRINT "A WORD WILL FLASH ON THE SCREEN. YOU HAVE TO SPELL THAT WORD WHEN IT DISAPEARS.":PRINT
180 PRINT "YOU SHOULD KEEP A PENCIL AND PAPER CLOSE BY SO YOU CAN WRITE DOWN THE WORDS YOU":PRINT
190 PRINT "MISSED. TYPE QUIT TO LEAVE THE PROGRAM                                         "
200 LOCATE 10,1:INPUT "PRESS ENTER TO BEGIN SPELLING FLASH",ENTER$
210 CLS:INPUT "HOW FAST DO YOU WANT THE WORDS TO BLINK?  >",Z
220 READ WORD$
230 IF WORD$="END" THEN  400
240 LOCATE 5,10:PRINT "SPELL ";WORD$
250 GOSUB 360
260 PRINT "WHAT IS THE SPELLING WORD?  >"
270 INPUT W$
280 IF W$="QUIT" THEN END
290 IF WORD$=W$ THEN 320
300 PRINT "SORRY, YOU SPELLED IT WRONG-TRY AGAIN"
310 GOTO 240
320 BEEP
330 PRINT "VERY GOOD, YOU SPELLED IT RIGHT!!!!!!"
340 GOSUB 360
350 GOTO 220
360 FOR I=1 TO Z:NEXT I
370 CLS
380 RETURN
390 DATA VICTIM,BETRAY,MOCCASIN,DECADE,RECREATION,CHOCOLATE,SATISFACTORY,EXPLANATION,GIRAFFES,ASPIRIN,LIBERAL,ACCURATE,COLONIST,LIEUTENANT,SYRAP,ALUMINUM,FERTILIZATION
400 DATA PRECIPITATION,DEMONSTRATE,SPECIMEN,COLESLAW,VICTORY,EARNEST,MOMENTOUS,SENIORITY,HISTORICAL,PRIVILEDGE,SILVERWARE,BRUISED,ALLERGIES,RECUR,MERITED,PULLEYSALTERATION,PREFERENCE,ILLUSION,JEALOUS,RIDICULOUS,
410 DATA OBEDIENCE,GALLERY,REFRACTION,BLOSSOM,AGRICULTURE,GYMNASIUM,PREPOSITION,DISMISSAL,DESTINATION,DESTRUCTION,NEIGHBORHOOD,CAUTIOUS,PROFICIENT,CHIMPANZEE,STRAIGHTEN,CHARACTER,COMPUTERS,SAXOPHONE,PRINCIPAL
420 DATA ACHIEVE,VILLAIN,WEIRD,QUOTIENT,EXPONENT,END
```

## GRADES.BAS

```bas
10 'PC GRADEBOOK                   Copyright (c) 1985 by G.D. Fleming & Co. Inc.
20 '
30 DEF SEG=0:POKE 1047,32:DEF SEG
40 DIM CLASS$(12)
50 DIM INC%(35,45)
60 DIM TOTINC(35)
70 DIM STUDENT$(35)
80 DIM ASG$(45)
90 DIM SCORE(35,45)
100 DIM TOTSCOR(35)
110 COMMON CLASS.CUR$,INC%(),TOTINC(),STUDENT$(),ASG$(),SCORE(),TOTSCOR(),          STUNUM,ASGNUM,BKSPC$,CLASTOT,LSTI,LSTJ,CUTOFF,CUTUP,MENUTEST
120 BKSPC$=CHR$(29)+" "+CHR$(29):CUTOFF=.695:CUTUP=.925
130 '
140 'print cpyrt & agrmt
150 '
160 KEY OFF:FOR CT%=1 TO 10:KEY CT%,"":NEXT
170 CLS
180 COLOR 15,0:LOCATE 4,34:PRINT "PC GRADEBOOK":COLOR 7,0:PRINT:PRINT:              PRINT TAB(19)"Copyright 1985 by G.D. Fleming & Co. Inc.":PRINT :PRINT:          PRINT TAB(37)"******":PRINT  :PRINT
190 PRINT "Please read the following agreement carefully before going on with PC GRADEBOOK.By continuing to utilize this program you agree to be bound by its terms and    conditions.  You may not copy, distribute, or otherwise use this program except"
200 PRINT "under the terms of the following agreement.":PRINT:PRINT:                PRINT TAB(37)"******";
210 LOCATE 25,1:PRINT TAB(2)"Press space bar for agreement; press <ENTER> to go straight to PC GRADEBOOK";
220 A$=INKEY$:IF A$=CHR$(32) THEN CHAIN "notice",,DELETE 240-6210                   ELSE IF A$=CHR$(13) THEN 260 ELSE 220
230 '
240 'Load classes from diskette
250 '
260 ON ERROR GOTO 4380
270 CLS:CLASNUM=0:OPEN "claslist" FOR INPUT AS #1
280 ON ERROR GOTO 4440
290 CLASNUM=CLASNUM+1:IF EOF(1) THEN CLOSE 1:GOTO 350
300 INPUT #1,CLASS$(CLASNUM)
310 GOTO 290
320 '
330 'Draw box, print classes
340 '
350 COLOR 7,0:CLS:PRINT CHR$(201);STRING$(78,205);CHR$(187);
360 FOR CT%=2 TO 10:LOCATE CT%,1:PRINT CHR$(186):NEXT:LOCATE 11,1:                  PRINT CHR$(200);:FOR CT%=1 TO 78:PRINT CHR$(205);:NEXT:PRINT CHR$(188);:        FOR CT%=2 TO 10:LOCATE CT%,80:PRINT CHR$(186);:NEXT
370 LOCATE 2,3:                                                                     PRINT "Here is a list of the classes currently stored on this diskette:"
380 CLASNUM=CLASNUM-1:FOR CT%=1 TO CLASNUM
390     IF CT%<7 THEN LOCATE CT%+3,10 ELSE                                              IF CT%>6 AND CT%<13 THEN LOCATE CT%-3,50 ELSE                                   GOTO 350
400     PRINT USING "##. \                    \";CT%,CLASS$(CT%)
410 NEXT
420 '
430 'Create menu
440 '
450 LOCATE 12,2:PRINT "Use tab key to select an option from the menu:
460 LOCATE 13,1:PRINT CHR$(201);:FOR CT%=2 TO 46:PRINT CHR$(205);:NEXT:             PRINT CHR$(187);:FOR CT%=14 TO 18:LOCATE CT%,1:PRINT CHR$(186);:NEXT:           LOCATE 19,1:PRINT CHR$(200);:FOR CT%=2 TO 46:PRINT CHR$(205);:NEXT:PRINT        CHR$(188);
470 FOR CT%=14 TO 18:LOCATE CT%,47:PRINT CHR$(186);:NEXT
480 LOCATE 14,10:PRINT "Select a class":LOCATE 15,10:PRINT "Add a class":           LOCATE 16,10:PRINT "Delete a class":LOCATE 17,10:PRINT "Leave PC GRADEBOOK"     :LOCATE 18,10:PRINT "Delete all classes"
490 LOCATE 20,2:PRINT "Then press <ENTER>..."
500 LOCATE 22,2:PRINT "Always return to this screen before ending a computing session to be sure that";:LOCATE 23,2:PRINT "your work is saved.  Use <TAB> and <SHIFT TAB> keys to move pointer; keypad";:
510 LOCATE 24,2:PRINT "is set for numeric input.";
520 '
530 'Select from menu
540 '
550 ROW%=14
560 COLOR 15,0:LOCATE ROW%,8:PRINT CHR$(26);
570 A$=INKEY$:IF A$=CHR$(9) OR RIGHT$(A$,1)=CHR$(15) THEN PRINT CHR$(29);" ";       ELSE IF A$=CHR$(13) THEN 610 ELSE 570
580 IF A$=CHR$(9) THEN ROW%=ROW%+1:IF ROW%>18 THEN ROW%=ROW%-5
590 IF RIGHT$(A$,1)=CHR$(15)THEN ROW%=ROW%-1:IF ROW%<14 THEN ROW%=ROW%+5
600 LOCATE ROW%,8:PRINT CHR$(26);:GOTO 570
610 ON ROW%-13 GOTO 650,3760,3920,4160,4250
620 '
630 'Select a class
640 '
650 LOCATE 12,1:PRINT TAB(79)" ";:FOR CT%=14 TO 18:LOCATE CT%,2:PRINT SPC(44);:     NEXT:LOCATE 2,2:COLOR 15,0:PRINT TAB(31)"* Select a Class *"TAB(79):            COLOR 7,0:LOCATE 20,1:PRINT TAB(79)
660 IF CLASNUM<1 THEN CLASNUM=1:COLOR 15,0:BEEP:LOCATE 6,18:                        PRINT "No Classes Currently stored on this diskette.";:GOSUB 5910:              FOR CT%=1 TO 10000:NEXT :GOTO 350
670 ROW%=4:COLOR 7,0
680 LOCATE 15,8:PRINT "Use tab keys to select a class"
690 LOCATE 16,8:PRINT "from the list above, then press"
700 LOCATE 17,8:PRINT "<ENTER>. Or press <ESC> to back up."
710 COLOR 15,0:LOCATE ROW%,8:PRINT CHR$(26);
720 A$=INKEY$:IF A$=CHR$(9) OR RIGHT$(A$,1)=CHR$(15) THEN PRINT CHR$(29);" ";       ELSE IF A$=CHR$(13) THEN 800 ELSE IF A$=CHR$(27) THEN COLOR 7,0:GOTO 260        ELSE 720
730 IF A$=CHR$(9) THEN ROW%=ROW%+1:IF ROW%-3>CLASNUM THEN ROW%=ROW%-CLASNUM
740 IF RIGHT$(A$,1)=CHR$(15)THEN ROW%=ROW%-1:IF ROW%<4 THEN ROW%=ROW%+CLASNUM
750 IF ROW%<10 THEN LOCATE ROW%,8:PRINT CHR$(26);:GOTO 720                                    ELSE LOCATE ROW%-6,48:PRINT CHR$(26);:GOTO 720
760 '
770 'Load a class
780 'read names
790 '
800 CLS:STUNUM=0:CLASS.CUR$=CLASS$(ROW%-3):ON ERROR GOTO 4390:GOSUB 5910:           OPEN CLASS.CUR$+".stu" FOR INPUT AS #1
810 ON ERROR GOTO 4440
820 STUNUM=STUNUM+1:IF EOF(1) THEN CLOSE 1:GOTO 850
830 INPUT #1,STUDENT$(STUNUM)
840 GOTO 820
850 LSTI=STUNUM-1:STUNUM=STUNUM-1:CLOSE
860 '
870 'read assignments
880 '
890 ASGNUM=0:ON ERROR GOTO 4400:OPEN CLASS$(ROW%-3)+".asg" FOR INPUT AS #1
900 ON ERROR GOTO 4440
910 ASGNUM=ASGNUM+1:IF EOF(1) THEN CLOSE 1:GOTO 940
920 INPUT #1,ASG$(ASGNUM)
930 GOTO 910
940 LSTJ=ASGNUM-1:ASGNUM=ASGNUM-1:CLOSE
950 '
960 'read scores
970 '
980 ON ERROR GOTO 4410
990 OPEN CLASS$(ROW%-3)+".sco"FOR INPUT AS #1
1000 ON ERROR GOTO 4420
1010 OPEN CLASS$(ROW%-3)+".inc"FOR INPUT AS #2
1020 ON ERROR GOTO 4440
1030 FOR I=0 TO STUNUM
1040    FOR J=1 TO LSTJ
1050   INPUT #1, SCORE(I,J)
1060    INPUT #2,INC%(I,J)
1070    NEXT J
1080 NEXT I
1090 CLOSE
1100 '
1110 'draw box, disp 15 students
1120 '
1130 ON ERROR GOTO 4440:DEF SEG=0:POKE 1047,32:DEF SEG:SWEEP=FRE(A$):CLS:            GOSUB 5910:GOSUB 5790:IF CLASTOT=0 THEN CLASTOT=9.999999E-21
1140 COLOR 7,0:LOCATE 2,1:GOSUB 5710
1150 IF STUNUM=0 THEN GOSUB 5650:LOCATE 10,17:                                       PRINT "No students currently stored in this class file. ";:GOTO 3120
1160 GOSUB 5910
1170 COLOR 7,0:GOSUB 5650
1180 COLOR 15,0:LOCATE 1,1:PRINT TAB(15)CLASS.CUR$;:PRINT USING                      "    Total points to date:  ####.#   (100%)"; CLASTOT;:PRINT TAB(79)" ":        LOCATE 3,3:PRINT "Name"TAB(40)"Points"TAB(61)"%"TAB(74)"# Inc.";
1190 GOSUB 5940:FOR I=1 TO STUNUM
1200  LOCATE I+3,3:PRINT SPC(25):LOCATE I+3,3:PRINT STUDENT$(I);:LOCATE I+3,40:       PRINT USING"####.#";TOTSCOR(I);:LOCATE I+3,59:                                  PRINT USING"###.#";100*TOTSCOR(I)/CLASTOT;:LOCATE I+3,75:PRINT TOTINC(I);
1210  IF I>14 THEN I=LSTI:'if over 15 students
1220 NEXT I:GOTO 3120
1230 '
1240 'select a student
1250 '
1260 COLOR 7,0:GOSUB 5680:LOCATE 20,3:                                               PRINT "Use tab keys to select a student, then press <ENTER>...";:               LOCATE 21,3:PRINT "Or press <ESC> to view menu.";
1270 IF STUNUM=0 THEN BEEP:COLOR 15,0:GOTO 1150
1280 I=1:ROW%=4
1290 COLOR 15,0:LOCATE ROW%,2:PRINT CHR$(26);
1300 A$=INKEY$:IF A$=CHR$(9) OR LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(15) THEN PRINT       CHR$(29);" "; ELSE IF A$=CHR$(13) THEN 1380 ELSE IF A$=CHR$(27) THEN            3120 ELSE IF LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(59) THEN 1600 ELSE 1300
1310 IF A$=CHR$(9) THEN I=I+1:IF I>STUNUM AND STUNUM<16 THEN I=1 ELSE IF I>15        AND I<=STUNUM THEN GOSUB 4950 ELSE IF I>STUNUM THEN I=STUNUM:BEEP:              GOTO 1340 ELSE ROW%=ROW%+1:GOTO 1340
1320 IF RIGHT$(A$,1)=CHR$(15) THEN I=I-1:IF I<1 AND STUNUM<16 THEN I=STUNUM          ELSE IF ROW%=4 THEN GOSUB 5060 ELSE IF I<1 THEN I=1:BEEP:COLOR 15,0:            GOTO 1340 ELSE ROW%=ROW%-1:GOTO 1340
1330 ROW%=I+3
1340 COLOR 15,0:LOCATE ROW%,2:PRINT CHR$(26);:GOTO 1300
1350 '
1360 'display asgmts by student
1370 '
1380 LOCATE 1,1:PRINT STRING$(80,32);:GOSUB 5650:LOCATE 1,1:COLOR 15,0:              PRINT USING "  \                       \ scored ####.# of ####.# possible points -- ###.# %";STUDENT$(I),TOTSCOR(I),CLASTOT,100*TOTSCOR(I)/CLASTOT;
1390 LOCATE 3,3:PRINT "Assignment"TAB(40)"Possible"TAB(60)"Actual"TAB(76)"%";
1400 GOSUB 5680:LOCATE 24,1:PRINT STRING$(79,32);
1410 COLOR 7,0:ROW%=4
1420 FOR J=ASGNUM-14 TO ASGNUM
1430   IF J<1 THEN 1470
1440   LOCATE ROW%,3:PRINT ASG$(J)TAB(40):PRINT USING "###.#";SCORE(0,J);:             PRINT TAB(60):PRINT USING "###.#";SCORE(I,J);:PRINT TAB(75):                    PRINT USING "###";100*SCORE(I,J)/SCORE(0,J);
1450 IF INC%(I,J) THEN LOCATE ROW%,30:COLOR 15,0:PRINT "INC";:COLOR 7,0       
1460   ROW%=ROW%+1
1470  NEXT J
1480 GOSUB 5930:GOTO 1490
1490 LOCATE 20,3:PRINT "Use tab keys to select an assignment to edit, then press <ENTER>....";:LOCATE 21,3:PRINT "Press <F1> to DELETE this student.";:              LOCATE 22,3:PRINT "Or press <ESC> to back up.";
1500 '
1510 'sel asgmt
1520 '
1530 J=ASGNUM:IF ASGNUM<1 THEN COLOR 15,0:LOCATE 10,22:                              PRINT "No assignments recorded in this class.";:COLOR 7,0:                      GOTO 1550 ELSE IF ASGNUM<16 THEN ROW%=ASGNUM+3 ELSE ROW%=18
1540 COLOR 15,0:LOCATE ROW%,2:PRINT CHR$(26);
1550 A$=INKEY$:IF A$=CHR$(9) OR LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(15) THEN PRINT       CHR$(29);" "; ELSE IF A$=CHR$(13) THEN 1590 ELSE IF A$=CHR$(27) THEN GOSUB      5900:GOTO 1130 ELSE IF LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(59) THEN 1680 ELSE       1550
1560 IF A$=CHR$(9) THEN J=J+1:IF J>ASGNUM AND ASGNUM<16 THEN J=1:ROW%=4              ELSE IF J>ASGNUM THEN J=ASGNUM:BEEP:GOTO 1580                                   ELSE IF J>15 AND J<=ASGNUM THEN GOSUB 5200 ELSE ROW%=ROW%+1:GOTO 1580
1570 IF RIGHT$(A$,1)=CHR$(15) THEN J=J-1:IF J<1 AND ASGNUM<16 THEN J=ASGNUM:         ROW%=ASGNUM+3 ELSE IF J<1 THEN J=1:BEEP:GOTO 1580                                             ELSE IF ROW%<5 THEN GOSUB 5300 ELSE ROW%=ROW%-1:GOTO 1580
1580 LOCATE ROW%,2:PRINT CHR$(26);:GOTO 1550
1590 '
1600 ' edit individual asgmt
1610 '
1620 COLOR 7,0:PRINT CHR$(29);" ";:IF ASGNUM<1 THEN BEEP:GOTO 1530                   ELSE GOSUB 5680
1630 LOCATE 20,3:PRINT ASG$(J);:LOCATE 21,28:PRINT USING                             "Current score is: ###.#";SCORE(I,J);:LOCATE 22,15:PRINT "Type new score in field, then press <ENTER>...";:COLOR 0,7:PRINT STRING$(5,32);STRING$(5,29);:        COLOR 7,0
1640 IF INC%(I,J)=1 THEN LOCATE 21,28:PRINT "Current score is: INCOMPLETE";:         LOCATE 22,61
1650 GOSUB 4850:IF ESCTEST THEN 1360 ELSE SCORE(I,J)=VAL(BUFFER$):                   IF BUFFER$<>"" THEN INC%(I,J)=0
1660 GOSUB 5900:GOSUB 5780:A$=CHR$(9):GOTO 1360
1670 '
1680 'Drop a student
1690 '
1700 GOSUB 5680
1710 COLOR 15,0:LOCATE 20,3:PRINT STUDENT$(I);" is about to be deleted from this class.";:LOCATE 21,3:PRINT "These records will be permanently lost.";:LOCATE 22,3:PRINT "Press <F1> to DELETE this student.  Or press <ESC> to back up.";
1720 A$=INKEY$:IF A$="" THEN 1720 ELSE IF LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(59)        THEN 1730 ELSE IF A$=CHR$(27) THEN 1110 ELSE BEEP:GOTO 1720
1730 GOSUB 5910:FOR CT%=I TO STUNUM
1740  STUDENT$(CT%) = STUDENT$(CT%+1)
1750  FOR J=1 TO ASGNUM
1760    SCORE(CT%,J)=SCORE(CT%+1,J)
1770    INC%(CT%,J)=INC%(CT%+1,J)
1780  NEXT J
1790 NEXT CT%
1800 STUNUM=STUNUM-1:LSTI=LSTI-1
1810 GOTO 1110
1820 '
1830 'work with assignments
1840 'disp asgmts
1850 '
1860 COLOR 15,0:LOCATE 1,1:PRINT TAB(15)CLASS.CUR$;:PRINT USING                      "    Total points to date:  ####.#   (100%)"; CLASTOT;:PRINT TAB(79)" ":
1870 COLOR 15,0:LOCATE 3,3:ASG$(ASGNUM+1)="ADD NEW ASSIGNMENT":COLOR 7,0
1880 FOR CT%=3 TO 18:LOCATE CT%,2:PRINT STRING$(78,32);:NEXT:LOCATE 3,3:             PRINT "Assignment"TAB(40)"Total Possible Points";
1890 GOSUB 5680:LOCATE 24,1:PRINT STRING$(79,32);
1900 COLOR 7,0:ROW%=4
1910 FOR J=ASGNUM-13 TO ASGNUM+1
1920   IF J<1 THEN 1950
1930   LOCATE ROW%,3:PRINT ASG$(J)TAB(40):PRINT USING "###.#";SCORE(0,J);
1940   ROW%=ROW%+1
1950  NEXT J
1960 '
1970 'sel asgmt
1980 '
1990 LOCATE 20,3:PRINT                                                               "Use tab keys to select an assignment to edit, then press <ENTER>....";:        LOCATE 21,3:LOCATE 22,3:PRINT "Or press <ESC> to back up.";
2000 J=ASGNUM+1:IF ASGNUM+1<16 THEN ROW%=ASGNUM+4 ELSE ROW%=18
2010 GOSUB 5930:COLOR 15,0:LOCATE ROW%,2:PRINT CHR$(26);
2020 A$=INKEY$:IF A$=CHR$(9) OR LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(15) THEN PRINT       CHR$(29);" "; ELSE IF A$=CHR$(13) THEN 2060 ELSE IF A$=CHR$(27) THEN            GOSUB 5900:GOTO 1130 ELSE 2020
2030 IF A$=CHR$(9) THEN J=J+1:IF J>ASGNUM+1 AND ASGNUM+1<16 THEN J=1:ROW%=4          ELSE IF J>ASGNUM+1 THEN J=ASGNUM+1:BEEP:GOTO 2050                               ELSE IF J>15 AND J<=ASGNUM+1 THEN GOSUB 5410 ELSE ROW%=ROW%+1:GOTO 2050
2040 IF RIGHT$(A$,1)=CHR$(15) THEN J=J-1:IF J<1 AND ASGNUM+1<16 THEN J=ASGNUM+1      :ROW%=ASGNUM+4 ELSE IF J<1 THEN J=1:BEEP:GOTO 2050                                             ELSE IF ROW%<5 THEN GOSUB 5520 ELSE ROW%=ROW%-1:GOTO 2050
2050 LOCATE ROW%,2:PRINT CHR$(26);:GOTO 2020
2060 IF J=ASGNUM+1 THEN 3030
2070 '
2080 'Edit existing asgmt
2090 '
2100 COLOR 7,0:PRINT CHR$(29);" ";:GOSUB 5680
2110 LOCATE 20,10:PRINT "Work with ";ASG$(J);" (for all students).";
2120 LOCATE 21,10:PRINT "Rename ";ASG$(J);
2130 LOCATE 22,10:PRINT "Re-enter total possible score on ";ASG$(J);
2140 LOCATE 24,1:PRINT TAB(79):LOCATE 24,3:PRINT                                     "Use tab key to select,then press <ENTER>; Or press <ESC> to back up.";
2150 ROW%=20
2160 COLOR 15,0:LOCATE ROW%,8:PRINT CHR$(26);
2170 A$=INKEY$:IF A$=CHR$(9) OR RIGHT$(A$,1)=CHR$(15) THEN PRINT CHR$(29);" ";       ELSE IF A$=CHR$(13) THEN 2210 ELSE IF A$=CHR$(27) THEN 1130 ELSE 2170
2180 IF A$=CHR$(9) THEN ROW%=ROW%+1:IF ROW%>22 THEN ROW%=20
2190 IF RIGHT$(A$,1)=CHR$(15)THEN ROW%=ROW%-1:IF ROW%<20 THEN ROW%=22
2200 LOCATE ROW%,8:PRINT CHR$(26);:GOTO 2170
2210 PRINT CHR$(29);" ";:ON ROW%-19 GOTO 2250,2900,2960
2220 '
2230 'edit by assignment
2240 '
2250 GOSUB 5650:GOSUB 5680:GOSUB 5940
2260 LOCATE 1,1:PRINT                                                                "  Editing ";ASG$(J);"   Total points : ";SCORE(0,J);TAB(80);
2270 LOCATE 3,3:PRINT "Student"TAB(40)"Score"TAB(61)"%";
2280 COLOR 7,0
2290 FOR I=1 TO LSTI
2300   LOCATE I+3,3:PRINT STUDENT$(I);TAB(40):PRINT USING"###.#";SCORE(I,J);:          LOCATE I+3,60:PRINT USING"###.#";100*SCORE(I,J)/SCORE(0,J);
2310 IF INC%(I,J) THEN LOCATE I+3,75:COLOR 15,0:PRINT "INC";:COLOR 7,0
2320   IF I>14 THEN I=LSTI:'if over 15 students
2330 NEXT I
2340 LOCATE 24,1:PRINT TAB(79):LOCATE 20,3:PRINT                                     "Use tab keys to select a score to update, then enter revision.";
2350 LOCATE 21,3:PRINT                                                               "When you have finished with this assignment, press <ESC> to back up.";
2360 LOCATE 22,3:PRINT                                                               "Or press <F1> to DELETE this assignment for ALL students in this class.";
2370 '
2380 'select student
2390 '
2400 I=1:ROW%=4
2410 COLOR 0,7:LOCATE 4,40:PRINT USING "###.#";SCORE(1,J);
2420 A$=INKEY$:IF A$="" THEN 2420 ELSE IF LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(59)        THEN 2740 ELSE IF A$=CHR$(27) THEN 1830 ELSE IF A$=CHR$(9) OR                   A$=CHR$(13) OR LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(15) THEN 2500 ELSE 2430
2430 IF A$>CHR$(57) OR A$<CHR$(46) THEN 2420
2440 LOCATE ROW%,40:PRINT SPC(5);STRING$(5,29);
2450 Y$=A$:BUFFER$="":GOSUB 4920
2460 IF BUFFER$="" THEN 2420
2470 SCORE(I,J)=VAL(BUFFER$):IF BUFFER$<>"" THEN INC%(I,J)=0
2480 LOCATE ROW%,40:PRINT USING "###.#";SCORE(I,J);:LOCATE ROW%,60:                  PRINT USING "###.#";100*SCORE(I,J)/SCORE(0,J);:IF INC%(I,J)=0 THEN              COLOR 7,0:LOCATE ROW%,75:PRINT "   ";:COLOR 0,7
2490 IF I=STUNUM THEN 2420 ELSE A$=CHR$(9):GOTO 2500
2500 IF A$=CHR$(9) THEN I=I+1 ELSE GOTO 2560
2510 IF I>STUNUM AND STUNUM<16 THEN ROW%=ROW%+1:GOTO 2610
2520 IF I>15 AND I<= STUNUM THEN GOSUB 5980
2530 IF I>STUNUM THEN I=STUNUM:BEEP:GOTO 2720
2540 ROW%=ROW%+1:IF ROW%>STUNUM+3 THEN ROW%=4
2550 GOTO 2610
2560 IF RIGHT$(A$,1)=CHR$(15) THEN I=I-1 ELSE COLOR 7,0:GOTO 2690
2570 IF I<1 AND STUNUM<16 THEN I=STUNUM:ROW%=ROW%-1:GOTO 2610
2580 IF ROW%=4 THEN GOSUB 6090
2590 IF I<1 THEN I=1:BEEP:COLOR 15,0:GOTO 2720
2600 ROW%=ROW%-1:GOTO 2610
2610 COLOR 7,0:IF A$<>CHR$(9) THEN 2640
2620 IF ROW%>4 THEN LOCATE ROW%-1,40 ELSE LOCATE STUNUM+3,40
2630 GOTO 2650                                                               
2640 IF ROW%<STUNUM+3 THEN LOCATE ROW%+1,40 ELSE LOCATE STUNUM+3,40
2650 IF A$<>CHR$(9) THEN GOTO 2680
2660 IF I>1 THEN PRINT USING"###.#";SCORE(I-1,J);                                    ELSE PRINT USING "###.#";SCORE(STUNUM,J);
2670 GOTO 2690                                                               
2680 IF I<STUNUM THEN PRINT USING "###.#";SCORE(I+1,J);                              ELSE PRINT USING "###.#";SCORE(1,J);
2690 IF ROW%>STUNUM+3 THEN ROW%=4
2700 IF I>STUNUM THEN I=1
2710 IF ROW%<4 THEN ROW%=STUNUM+3
2720 COLOR 0,7:LOCATE ROW%,40:PRINT USING "###.#";SCORE(I,J);:GOTO 2420
2730 '
2740 'delete an assignment
2750 '
2760 COLOR 7,0:GOSUB 5680
2770 COLOR 15,0:LOCATE 20,3:                                                         PRINT ASG$(J);" is about to be deleted from this class record.";:               LOCATE 21,3:PRINT "It will be as if it had never been entered.";
2780 LOCATE 22,3:PRINT "Press <F1> to ";:COLOR 31,0:PRINT"DELETE ";:COLOR 15,0:      PRINT ASG$(J);"....  Or press <ESC> to back up.";:COLOR 7,0
2790 A$=INKEY$:IF A$="" THEN 2790 ELSE IF A$=CHR$(27) THEN 2100                         ELSE IF LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(59) THEN 2800                          ELSE BEEP:GOTO 2790
2800 FOR CT%=J TO ASGNUM
2810   ASG$(CT%)=ASG$(CT%+1)
2820   FOR I=0 TO STUNUM
2830     SCORE(I,CT%)=SCORE(I,CT%+1)
2840     INC%(I,CT%)=INC%(I,CT%+1)
2850   NEXT I
2860 NEXT CT%:ASGNUM=ASGNUM-1:GOTO 1860
2870 '
2880 'edit name
2890 '
2900 GOSUB 5680
2910 LOCATE 24,1:PRINT TAB(79):LOCATE 24,3:PRINT "Press <ENTER> when done...   Or press <ESC> to back up.";:LOCATE 20,3:PRINT "Type revised assignment name :";:     COLOR 0,7:PRINT STRING$(25,32);:LOCATE 20,33:COLOR 7,0:GOSUB 4750
2920 IF ESCTEST THEN 1830 ELSE ASG$(J)=BUFFER$:GOTO 1830
2930 '
2940 'edit total score
2950 '
2960 FOR CT%=20 TO 22:LOCATE CT%,2:PRINT STRING$(78,32);:NEXT
2970 LOCATE 24,1:PRINT TAB(79):LOCATE 24,3:PRINT"Press <ENTER> when done...  Or press <ESC> to back up.";:LOCATE 20,3:PRINT"Type revised score:";:COLOR 0,7:         PRINT SPC(5);:PRINT STRING$(5,29);:COLOR 7,0:GOSUB 4850:
2980 IF VAL(BUFFER$)=0 THEN BUFFER$=".000001"
2990 IF ESCTEST THEN 1830 ELSE SCORE(0,J)=VAL(BUFFER$):GOSUB 5900:                   GOSUB 5780:GOTO 1830
3000 '
3010 'Add new asgmt
3020 '
3030 FOR CT%=20 TO 22:LOCATE CT%,2:PRINT STRING$(78,32);:NEXT:LOCATE 20,3:           COLOR 7,0:PRINT "Type the name of the new assignment in the field below:";      :COLOR 0,7:LOCATE 21,28:PRINT SPC(25):COLOR 7,0
3040 LOCATE 22,3:PRINT                                                               "Press <ENTER> when you are ready....    Or press <ESC> to back up.";:          LOCATE 21,28:GOSUB 4770
3050 IF ASGNUM>44 THEN GOSUB 5680:GOSUB 5910:LOCATE 21,3:PRINT                       "Sorry! No more than 45 assignments.":FOR CT%=1 TO 10000:NEXT:GOTO 1110         ELSE ASG$(ASGNUM+1)=BUFFER$
3060 FOR CT%=20 TO 22:LOCATE CT%,2:PRINT STRING$(78,32);:NEXT CT%:LOCATE 20,3:       PRINT "Type the maximum score (a perfect assignment) in the field below:";:     LOCATE  21,38:COLOR 0,7:PRINT SPC(5):COLOR 7,0
3070 LOCATE 22,3:PRINT "Press <ENTER> when you are ready....         Or press <ESC> to back up.";:LOCATE 21,38:GOSUB 4850:IF ESCTEST THEN GOSUB 5900:GOTO 1830       ELSE IF VAL(BUFFER$)=0 THEN BUFFER$=".000001"
3080 SCORE(0,ASGNUM+1)=VAL(BUFFER$):ASGNUM=ASGNUM+1:FOR CT%=1 TO STUNUM:             INC%(CT%,ASGNUM)=1:NEXT:GOSUB 5900:GOSUB 5780:J=ASGNUM:GOTO 2250
3090 '
3100 'get menu 2
3110 '
3120 GOSUB 5940:GOSUB 4630:ON ROW%-19 GOTO 1240,1830,3140,3160,3390,3690
3130 GOTO 3120
3140 GOSUB 5910:CHAIN"reports"
3150 '
3160 'add a student
3170 '
3180 GOSUB 5680:LOCATE 24,1:PRINT STRING$(79,32);
3190 COLOR 7,0:LOCATE 21,4:PRINT "Last name first.  Do not use a comma between names - try (.) or (/) instead.";:LOCATE 22,4:PRINT "When you have finished, press <ENTER>...        Or press <ESC> to back up.";
3200 COLOR 15,0:LOCATE 20,16:PRINT "Type new name in this field: ";:COLOR 0,7:       PRINT SPC(25);:LOCATE 20,45:COLOR 7,0:GOSUB 4770:IF ESCTEST THEN 3120
3210 'check num of stu
3220 IF BUFFER$="" THEN 3200 ELSE NEWSTU$=BUFFER$:IF STUNUM>34 THEN BEEP:            GOSUB 5910:GOSUB 5680:LOCATE 21,10:COLOR 15,0:PRINT                             "Too many students!  Delete one or more, or add a class..."; ELSE 3250
3230 LOCATE 22,26:COLOR 7,0:PRINT "Press <ENTER> to proceed...";:A$=INKEY$:          IF A$=CHR$(13) THEN 3120 ELSE 3230
3240 'alphabetize
3250 STUNUM=STUNUM+1:LSTI=STUNUM:STUDENT$(STUNUM)=NEWSTU$:GOSUB 5910
3260 FOR CT%=1 TO STUNUM-1
3270    FOR CT2%=CT%+1 TO STUNUM
3280      IF LEFT$(STUDENT$(CT%),3)>LEFT$(STUDENT$(CT2%),3) THEN 3290 ELSE 3330
3290         SWAP STUDENT$(CT%), STUDENT$(CT2%)
3300         FOR J=1 TO LSTJ
3310            SWAP SCORE(CT%,J),SCORE(CT2%,J)
3320         NEXT J
3330    NEXT CT2%
3340 NEXT CT%
3350 GOSUB 5680:LOCATE 24,1:PRINT TAB(79):GOSUB 5940
3360 LOCATE 21,16:PRINT "Add another student? Press ";:COLOR 15,0:PRINT "<Y>";:      COLOR 7,0:PRINT " for yes, ";:COLOR 15,0:PRINT "<N>";:COLOR 7,0:                PRINT " for no...";
3370 A$=INKEY$:IF A$="y" OR A$="Y" THEN 3150 ELSE IF A$="n" OR A$="N" THEN 1130      ELSE 3370
3380 '
3390 'save class data
3400 '
3410 ON ERROR GOTO 4440
3420 OPEN CLASS.CUR$+".stu" FOR OUTPUT AS #1
3430 FOR CT%=1 TO STUNUM
3440   PRINT#1, STUDENT$(CT%)
3450 NEXT
3460 OPEN CLASS.CUR$+".asg" FOR OUTPUT AS #2
3470 FOR CT%=1 TO ASGNUM
3480   PRINT#2,ASG$(CT%)
3490 NEXT
3500 OPEN CLASS.CUR$+".sco" FOR OUTPUT AS #3
3510 FOR I=0 TO STUNUM
3520   FOR J=1 TO ASGNUM
3530      PRINT#3,SCORE(I,J)
3540   NEXT J
3550 NEXT I
3560 CLOSE
3570 OPEN CLASS.CUR$+".inc" FOR OUTPUT AS #1
3580 FOR I=0 TO STUNUM
3590   FOR J=1 TO ASGNUM
3600      PRINT#1,INC%(I,J)
3610   NEXT J
3620 NEXT I
3630 CLOSE
3640 ON ERROR GOTO 0
3650 GOTO 260
3660 '
3670 'back up; do not save
3680 '
3690 FOR CT%=20 TO 22:LOCATE CT%,2:PRINT STRING$(78,32);:NEXT
3700 LOCATE 20,3:COLOR 15,0:PRINT "Please verify your decision to back up without saving your work.";:LOCATE 21,3:PRINT "Press <F1> to proceed.  (Any changes that you have made will be lost.)";
3710 LOCATE 22,3:PRINT "Or press <ESC> to return to the current class."
3720 A$=INKEY$:IF LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(59) THEN GOTO 260                       ELSE IF A$=CHR$(27) THEN 1130 ELSE 3720
3730 '
3740 'Add a class
3750 '
3760 LOCATE 12,1:PRINT TAB(79)" ";:FOR CT%=14 TO 18:LOCATE CT%,2:PRINT STRING$(44,32);:NEXT:FOR CT%=20 TO 24:LOCATE CT%,1:PRINT STRING$(79,32);:NEXT:LOCATE 2,2:COLOR 15,0:PRINT TAB(31)"*  Add a Class  *"TAB(79):COLOR 7,0
3770 LOCATE 20,2:                                                                    PRINT "Type the name of the class that you wish to add in the field above."     :PRINT " You need not use all the spaces, but you cannot use more."
3780 PRINT " Certain symbols (including spaces) will not be accepted; don't worry.":COLOR 15,0:PRINT " DO NOT ";:COLOR 7,0:                                          PRINT "use the name of a class currently on the disk."
3790 PRINT " Press ";:COLOR 15,0:PRINT "<ENTER> ";:COLOR 7,0:                        PRINT "when you have finished.";
3800 LOCATE 14,3:PRINT "Enter class name:";:COLOR 0,7:LOCATE 16,20:                  PRINT SPC(8):COLOR 7,0:LOCATE 18,3:                                             PRINT "Or press <ESC> to back up.";:LOCATE 16,20
3810 GOSUB 4550  'Filename input
3820 IF ESCTEST THEN 260
3830 IF BUFFER$="" THEN 3760 ELSE NEWCLAS$=BUFFER$:                                  IF CLASNUM<12 THEN CLASNUM=CLASNUM+1:GOTO 3860
3840 FOR CT%=20 TO 24:LOCATE CT%,1:PRINT TAB(79):NEXT CT%:LOCATE 22,2:BEEP:          COLOR 15,0:PRINT "System will handle no more classes.":PRINT " You must delete one or more before adding.":PRINT " Press <ESC> to proceed...";:COLOR 7,0
3850 A$=INKEY$:IF A$=CHR$(27) THEN 260 ELSE 3850
3860 ON ERROR GOTO 4430
3870 OPEN "claslist" FOR APPEND AS #1:ON ERROR GOTO 0
3880 PRINT#1,NEWCLAS$:CLOSE:GOTO 260
3890 '
3900 'Delete a class
3910 '
3920 LOCATE 12,1:PRINT TAB(79)" ";:FOR CT%=14 TO 18:LOCATE CT%,2:PRINT SPC(44);:     NEXT:LOCATE 2,2:COLOR 15,0:PRINT TAB(31)"* Delete a Class *"TAB(79):            COLOR 7,0:LOCATE 20,1:PRINT TAB(79)
3930 ROW%=4:COLOR 7,0
3940 LOCATE 15,8:PRINT "Use tab keys to select a class"
3950 LOCATE 16,8:PRINT "from the list above, then press"
3960 LOCATE 17,8:PRINT "<ENTER>. Or press <ESC> to back up."
3970 COLOR 15,0:LOCATE ROW%,8:PRINT CHR$(26);
3980 A$=INKEY$:IF A$=CHR$(9) OR RIGHT$(A$,1)=CHR$(15) THEN PRINT CHR$(29);" ";       ELSE IF A$=CHR$(13) THEN 4020 ELSE IF A$=CHR$(27) THEN COLOR 7,0:GOTO 260       ELSE 3980
3990 IF A$=CHR$(9) THEN ROW%=ROW%+1:IF ROW%-3>CLASNUM THEN ROW%=ROW%-CLASNUM
4000 IF RIGHT$(A$,1)=CHR$(15)THEN ROW%=ROW%-1:IF ROW%<4 THEN ROW%=ROW%+CLASNUM
4010 IF ROW%<10 THEN LOCATE ROW%,8:PRINT CHR$(26);:GOTO 3980                                    ELSE LOCATE ROW%-6,48:PRINT CHR$(26);:GOTO 3980
4020 GOSUB 6190
4030 BEEP:LOCATE 22,3:COLOR 15,0:PRINT "You are about to ";:COLOR 31,0:              PRINT "DELETE ";:COLOR 15,0:PRINT CLASS$(ROW%-3);".";:LOCATE 23,3:              PRINT "Press <F1> to proceed. Or press <ESC> to back up...";:COLOR 7,0
4040 A$=INKEY$:IF A$=CHR$(27) THEN 260 ELSE IF LEN(A$)=2 THEN IF                     ASC(RIGHT$(A$,1))=59 THEN 4050 ELSE 4040 ELSE 4040
4050 OPEN "claslist" FOR OUTPUT AS #1
4060     KILL CLASS$(ROW%-3)+".stu":KILL CLASS$(ROW%-3)+".asg":                          KILL CLASS$(ROW%-3)+".sco":KILL CLASS$(ROW%-3)+".inc"
4070 FOR CT%=1 TO CLASNUM-1
4080    IF CT%>=ROW%-3 THEN CLASS$(CT%)=CLASS$(CT%+1)
4090    PRINT #1,CLASS$(CT%)
4100 NEXT CT%
4110 CLOSE:CLASS$(CLASNUM)="":CLASNUM=CLASNUM-1
4120 GOTO 260
4130 '
4140 'Leave gradebook
4150 '
4160 GOSUB 6190
4170 LOCATE 22,3:COLOR 7,0:PRINT "Press <F1> to ";:COLOR 15,0:PRINT "EXIT ";:        COLOR 7,0:PRINT "PC GRADEBOOK.";:LOCATE 23,3:                                   PRINT "OR PRESS <ESC> TO BACK UP...";
4180 A$=INKEY$:IF A$=CHR$(27) THEN 260 ELSE IF LEN(A$)<>2 THEN 4180
4190 IF ASC(RIGHT$(A$,1))<>59 THEN 4180
4200 LOCATE 23,2:PRINT TAB(78):LOCATE 22,2:PRINT TAB(78):LOCATE 22,3:COLOR 15,0:     PRINT "Have you sent your donation?  Thanks!";:LOCATE 23,3:                     PRINT "G.D.Fleming & Co. Inc., P.O.Box 588, Blair, Nebraska 68008";
4210 GOSUB 5910:FOR CT%=1 TO 10000:NEXT:COLOR 7,0:CLS:SYSTEM
4220 '
4230 'delete all class recs
4240 '
4250 GOSUB 6190
4260 BEEP:LOCATE 22,3:COLOR 15,0:PRINT "You are about to ";:COLOR 31,0:PRINT "DELETE ";:COLOR 15,0:PRINT "all class records on this disk.";:LOCATE 23,3:PRINT "Press <F1> to proceed. Or press <ESC> to back up...";:COLOR 7,0
4270 A$=INKEY$:IF A$=CHR$(27) THEN 260 ELSE IF LEN(A$)<>2 THEN 4270
4280 IF ASC(RIGHT$(A$,1))<>59 THEN 4270
4290 GOSUB 5910:ON ERROR GOTO 4490
4300 FOR CT%=1 TO CLASNUM:
4310     KILL CLASS$(CT%)+".stu":KILL CLASS$(CT%)+".asg":                                KILL CLASS$(CT%)+".sco":KILL CLASS$(CT%)+".inc"
4320 NEXT
4330 OPEN "claslist"FOR OUTPUT AS #1:CLOSE
4340 GOTO 260
4350 '
4360 'Error recovery
4370 '
4380 OPEN "claslist" FOR OUTPUT AS #1:CLOSE:RESUME 270
4390 IF CLASS$(ROW%-3)="" THEN RESUME 260 ELSE                                       OPEN CLASS$(ROW%-3)+".stu" FOR OUTPUT AS #1:CLOSE:RESUME 800
4400 OPEN CLASS$(ROW%-3)+".asg" FOR OUTPUT AS #1:CLOSE:RESUME 890
4410 OPEN CLASS$(ROW%-3)+".sco" FOR OUTPUT AS #1:CLOSE:RESUME 990
4420 OPEN CLASS$(ROW%-3)+".inc" FOR OUTPUT AS #2:CLOSE:RESUME
4430 OPEN "Claslist" FOR OUTPUT AS #1:CLOSE:RESUME 3870
4440 IF ERR=61 THEN GOSUB 5680:BEEP:COLOR 15,0:LOCATE 20,3:PRINT "DISK IS FULL!"     ;:COLOR 7,0:LOCATE 22,3:PRINT "Press space bar to continue.":CLOSE:             ELSE 4460
4450 A$=INKEY$:IF A$=CHR$(32) THEN RESUME 1110 ELSE 4450
4460 '
4470 GOSUB 5680:BEEP:COLOR 15,0:LOCATE 20,3:                                         PRINT "Error ";ERR;" in line ";ERL;".";:COLOR 7,0:LOCATE 22,3:                  PRINT "Press space bar to continue.";:CLOSE
4480 A$=INKEY$:IF A$=CHR$(32) THEN RESUME 1110 ELSE 4480
4490 RESUME 4330
4500 '
4510 'Subroutines
4520 '
4530 'input filename
4540 '
4550 BUFFER$="":ESCTEST=0:BKSPC$=CHR$(29)+" "+CHR$(29)
4560 Y$=INPUT$(1):IF Y$>=CHR$(48) AND Y$<=CHR$(57)                                                OR Y$>=CHR$(65) AND Y$<=CHR$(90)                                                OR Y$>=CHR$(97) AND Y$<=CHR$(122) THEN 4600
4570 IF Y$=CHR$(27) THEN ESCTEST =1:RETURN
4580 IF Y$=CHR$(8) THEN IF BUFFER$="" GOTO 4560                                      ELSE BUFFER$=LEFT$(BUFFER$,LEN(BUFFER$)-1):COLOR 0,7:PRINT BKSPC$;:                  COLOR 7,0:GOTO 4560
4590 IF Y$=CHR$(13) THEN RETURN ELSE BEEP:GOTO 4560
4600 IF LEN(BUFFER$)<8 THEN PRINT Y$;:BUFFER$=BUFFER$+Y$
4610 GOTO 4560
4620 '
4630 'Menu 2
4640 '
4650 PRINT CHR$(29);" ";:COLOR 7,0:LOCATE 19,1:PRINT CHR$(204);:LOCATE 19,80:        PRINT CHR$(185);:FOR CT%=20 TO 22:LOCATE CT%,1:PRINT CHR$(186)TAB(80)           CHR$(186):NEXT:LOCATE 23,1:PRINT CHR$(200);STRING$(78,205);CHR$(188);
4660 LOCATE 20,8:PRINT "View / Edit / Drop a Student";:LOCATE 21,8:                  PRINT "View / Edit / Add an Assignment";:LOCATE 22,8:                           PRINT "Print reports";:LOCATE 20,47:PRINT "Add a Student to this Class";
4670 LOCATE 21,47:PRINT "Save Changes and Back Up";:LOCATE 22,47:                    PRINT "Back Up; Do NOT Save Changes";:LOCATE 24,3:                              PRINT "Use tab keys to make your selection, then press <ENTER>...";
4680 ROW%=20
4690 COLOR 15,0:LOCATE ROW%,6:PRINT CHR$(26);
4700 A$=INKEY$:IF A$=CHR$(9) OR RIGHT$(A$,1)=CHR$(15) THEN PRINT CHR$(29);" ";       ELSE IF A$=CHR$(13) THEN RETURN ELSE 4700
4710 IF A$=CHR$(9) THEN ROW%=ROW%+1:IF ROW%>25 THEN ROW%=ROW%-6
4720 IF RIGHT$(A$,1)=CHR$(15) THEN ROW%=ROW%-1:IF ROW%<20 THEN ROW%=ROW%+6
4730 IF ROW%<23 THEN LOCATE ROW%,6:PRINT CHR$(26);:GOTO 4700                         ELSE IF ROW%>22 THEN LOCATE ROW%-3,45:PRINT CHR$(26);:GOTO 4700 ELSE 4700
4740 '
4750 'input stu name
4760 '
4770 BUFFER$="":ESCTEST=0:BKSPC$=CHR$(29)+" "+CHR$(29)
4780 Y$=INPUT$(1):IF Y$>=CHR$(32) AND Y$<=CHR$(57) AND Y$<>CHR$(44)                               OR Y$>=CHR$(65) AND Y$<=CHR$(90)                                                OR Y$>=CHR$(97) AND Y$<=CHR$(122) THEN 4820
4790 IF Y$=CHR$(27) THEN ESCTEST =1:RETURN
4800 IF Y$=CHR$(8) THEN IF BUFFER$="" GOTO 4780                                      ELSE BUFFER$=LEFT$(BUFFER$,LEN(BUFFER$)-1):COLOR 0,7:PRINT BKSPC$;:                  COLOR 7,0:GOTO 4780
4810 IF Y$=CHR$(13) THEN RETURN ELSE BEEP:GOTO 4780
4820 IF LEN(BUFFER$)<25 THEN PRINT Y$;:BUFFER$=BUFFER$+Y$
4830 GOTO 4780
4840 '
4850 'input score
4860 '
4870 BUFFER$="":ESCTEST=0:BKSPC$=CHR$(29)+" "+CHR$(29)
4880 Y$=INPUT$(1):IF Y$>=CHR$(46) AND Y$<=CHR$(57) THEN 4920
4890 IF Y$=CHR$(27) THEN ESCTEST =1:RETURN
4900 IF Y$=CHR$(8) THEN IF BUFFER$="" GOTO 4880                                      ELSE BUFFER$=LEFT$(BUFFER$,LEN(BUFFER$)-1):COLOR 0,7:PRINT BKSPC$;:                  COLOR 7,0:GOTO 4880
4910 IF Y$=CHR$(13) THEN RETURN ELSE BEEP:GOTO 4880
4920 IF LEN(BUFFER$)<5 THEN PRINT Y$;:BUFFER$=BUFFER$+Y$
4930 GOTO 4880
4940 '
4950 '
4960 'scroll down stu
4970 '
4980 ROW%=4:COLOR 7,0
4990 FOR CT%=I-14 TO I
5000   LOCATE ROW%,3
5010   PRINT SPC(25):LOCATE ROW%,3:PRINT STUDENT$(CT%);:LOCATE ROW%,40:                PRINT USING"####.#";TOTSCOR(CT%);:LOCATE ROW%,59:PRINT USING"###.#";            100*TOTSCOR(CT%)/CLASTOT;:LOCATE ROW%,75:PRINT TOTINC(CT%);
5020   ROW%=ROW%+1
5030 NEXT CT%
5040 ROW%=ROW%-1:COLOR 15,0
5050 RETURN 1340
5060 '
5070 'scroll up stu
5080 '
5090 ROW%=4:COLOR 7,0
5100 IF I<1 THEN I=1:BEEP:RETURN 1330 ELSE FOR CT%=I TO I+14
5110   LOCATE ROW%,3
5120   PRINT SPC(25):LOCATE ROW%,3:PRINT STUDENT$(CT%);:LOCATE ROW%,40:                PRINT USING"####.#";TOTSCOR(CT%);:LOCATE ROW%,59:PRINT USING"###.#";            100*TOTSCOR(CT%)/CLASTOT;:LOCATE ROW%,75:PRINT TOTINC(CT%);
5130   ROW%=ROW%+1
5140 NEXT CT%
5150 ROW%=ROW%-15:COLOR 15,0
5160 RETURN 1340
5170 '
5180 'scroll down asgmt
5190 '
5200 ROW%=4:COLOR 7,0
5210 FOR CT%=J-14 TO J
5220   LOCATE ROW%,3
5230   PRINT SPC(25):LOCATE ROW%,3:PRINT ASG$(CT%)TAB(40):PRINT USING "###.#";         SCORE(0,CT%);:PRINT TAB(60):PRINT USING "###.#";SCORE(I,CT%);:                  PRINT TAB(75):PRINT USING "###";100*SCORE(I,CT%)/SCORE(0,CT%);
5240 LOCATE ROW%,30:IF INC%(I,CT%) THEN COLOR 15,0:PRINT "INC";:COLOR 7,0 ELSE       PRINT "   ";
5250 ROW%=ROW%+1
5260 NEXT CT%
5270 ROW%=ROW%-1:COLOR 15,0
5280 RETURN 1580
5290 '
5300 'scroll up asgmt
5310 '
5320 ROW%=4:COLOR 7,0
5330 IF J<1 THEN J=1:BEEP:RETURN 1550 ELSE FOR CT%=J TO J+14
5340   LOCATE ROW%,3
5350   PRINT SPC(25):LOCATE ROW%,3:PRINT ASG$(CT%)TAB(40):PRINT USING "###.#";         SCORE(0,CT%);:PRINT TAB(60):PRINT USING "###.#";SCORE(I,CT%);:                  PRINT TAB(75):PRINT USING "###";100*SCORE(I,CT%)/SCORE(0,CT%);
5360 LOCATE ROW%,30:IF INC%(I,CT%) THEN COLOR 15,0:PRINT "INC";:COLOR 7,0 ELSE       PRINT "   ";
5370 ROW%=ROW%+1
5380 NEXT CT%
5390 ROW%=ROW%-15:COLOR 15,0
5400 RETURN 1580
5410 '
5420 'scroll down asgmt
5430 '
5440 ROW%=4:COLOR 7,0
5450 FOR CT%=J-14 TO J
5460   LOCATE ROW%,3
5470   PRINT SPC(25):LOCATE ROW%,3:PRINT ASG$(CT%)TAB(40):PRINT USING "###.#";         SCORE(0,CT%);
5480 ROW%=ROW%+1
5490 NEXT CT%
5500 ROW%=ROW%-1:COLOR 15,0
5510 RETURN 2050
5520 '
5530 'scroll up asgmt
5540 '
5550 ROW%=4:COLOR 7,0
5560 IF J<1 THEN J=1:BEEP:RETURN 2050 ELSE FOR CT%=J TO J+14
5570   LOCATE ROW%,3
5580   PRINT SPC(25):LOCATE ROW%,3:PRINT ASG$(CT%)TAB(40):PRINT USING "###.#";         SCORE(0,CT%);
5590 ROW%=ROW%+1
5600 NEXT CT%
5610 ROW%=ROW%-15:COLOR 15,0
5620 RETURN 2050
5630 '
5640 'clr top box
5650 FOR CT%=3 TO 18:LOCATE CT%,2:PRINT STRING$(78,32);:NEXT CT%:RETURN
5660 '
5670 'clr bottom box
5680 GOSUB 5940:FOR CT%=20 TO 22:LOCATE CT%,2:PRINT STRING$(78,32);:NEXT CT%:        RETURN
5690 '
5700 'draw double box
5710 LOCATE 2,1:PRINT CHR$(201);STRING$(78,205);CHR$(187);
5720 FOR CT%=3 TO 22:LOCATE CT%,1:PRINT CHR$(186);:NEXT CT%
5730 FOR CT%=3 TO 22:LOCATE CT%,80:PRINT CHR$(186);:NEXT CT%
5740 LOCATE 19,1:PRINT CHR$(204);STRING$(78,205);CHR$(185);
5750 LOCATE 23,1:PRINT CHR$(200);STRING$(78,205);CHR$(188);
5760 RETURN
5770 '
5780 'figure scores & avgs
5790 CLASTOT=0:FOR CT%=1 TO ASGNUM:CLASTOT =CLASTOT+SCORE(0,CT%):NEXT
5800 FOR CT%=1 TO STUNUM
5810  TOTSCOR(CT%)=0:TOTINC(CT%)=0
5820  FOR J=1 TO ASGNUM
5830   TOTSCOR(CT%)=TOTSCOR(CT%)+SCORE(CT%,J)
5840 IF SCORE(CT%,J)<>0 THEN INC%(CT%,J)=0
5850   TOTINC(CT%)=TOTINC(CT%)+INC%(CT%,J)
5860  NEXT J
5870 NEXT CT%
5880 RETURN
5890 '
5900 'print -WAIT-
5910 COLOR 31,4:LOCATE 25,74:PRINT " WAIT ";:COLOR 7,0:RETURN
5920 '
5930 'clear -WAIT-
5940 COLOR 7,0:LOCATE 25,74:PRINT SPC(6);:RETURN
5950 '
5960 ' scroll down student (asgmt)
5970 '
5980 ROW%=4:COLOR 7,0
5990 FOR CT%=I-14 TO I
6000   LOCATE ROW%,3
6010   PRINT SPC(17):LOCATE ROW%,3:PRINT STUDENT$(CT%);:LOCATE ROW%,40:                PRINT USING"###.#";SCORE(CT%,J);:LOCATE ROW%,60:PRINT USING"###.#";             100*SCORE(CT%,J)/SCORE(0,J);
6020 LOCATE ROW%,75:IF INC%(CT%,J) THEN COLOR 15,0:PRINT"INC";:COLOR 7,0             ELSE PRINT "   ";
6030   ROW%=ROW%+1
6040 NEXT CT%
6050 ROW%=ROW%-1
6060 RETURN 2720
6070 '
6080 'scroll up student (asgmt)
6090 '
6100 ROW%=4:COLOR 7,0
6110 IF I<1 THEN I=1:ROW%=4:BEEP:RETURN 2720 ELSE FOR CT%=I TO I+14
6120   LOCATE ROW%,3
6130   PRINT SPC(17):LOCATE ROW%,3:PRINT STUDENT$(CT%);:LOCATE ROW%,40:                PRINT USING"###.#";SCORE(CT%,J);:LOCATE ROW%,60:PRINT USING"###.#";             100*SCORE(CT%,J)/SCORE(0,J);
6140 LOCATE ROW%,75:IF INC%(CT%,J) THEN COLOR 15,0:PRINT"INC";:COLOR 7,0             ELSE PRINT "   ";
6150   ROW%=ROW%+1
6160 NEXT CT%
6170 ROW%=ROW%-15
6180 RETURN 2720
6190 'warning box                                                               ║
6200 LOCATE 12,1:PRINT TAB(79):LOCATE 20,1:PRINT TAB(79):LOCATE 21,1:PRINT CHR$(201);STRING$(77,205);CHR$(187);:FOR CT%=22 TO 23:LOCATE CT%,1:PRINT CHR$(186);:LOCATE CT%,79:PRINT CHR$(186);:NEXT:LOCATE 24,1:PRINT CHR$(200);STRING$(77,205);CHR$(188);
6210 FOR CT%=22 TO 23:LOCATE CT%,2:PRINT STRING$(77,32);:NEXT:RETURN
```

## KILL.BAS

```bas
10 REM *******************
20 REM **     KILL      **
30 REM **               **
40 REM ** by Kevin Carr **
50 REM *******************
60 KEY OFF:SCREEN 2:SCREEN 0,0,0
70 CLS
80 PRINT :PRINT :PRINT
90 PRINT "1. KILL A FILE"
100 PRINT "2. LOAD A BASIC FILE"
110 PRINT "3. RUN A BASIC FILE"
120 PRINT "4. LOOK AT DIRECTORY"
130 PRINT "5. EXIT TO BASIC"
140 PRINT "6. EXIT TO DOS"
150 PRINT:PRINT
160 INPUT "PLEASE PICK A NUMBER > ",P$
170 IF P$="1" THEN 240
180 IF P$="2" THEN 300
190 IF P$="3" THEN 350
200 IF P$="4" THEN FILES:FOR I=1 TO 3000:NEXT I
210 IF P$="5" THEN END
220 IF P$="6" THEN SYSTEM
230 CLS:GOTO 70
240 CLS
250 INPUT "TYPE FULL FILE NAME YOU WANT DELETED > ",D$
260 INPUT "ARE YOU SURE? > ",S$
270 IF S$="Y" OR S$="y" OR S$="YES" OR S$="yes" THEN KILL D$
280 IF S$="N" OR S$="n" OR S$="NO" OR S$="no" THEN CLS:GOTO 80
290 GOTO 70
300 CLS
310 INPUT "TYPE BASIC FILE NAME TO LOAD > ",F$
320 LOAD F$
330 END
340 GOTO 70
350 CLS
360 INPUT "WHAT FILE DO YOU WANT TO RUN? > ",R$
370 RUN R$
380 END
```

## KILL2.BAS

```bas
10 REM *******************
20 REM **     KILL      **
30 REM **               **
40 REM ** by Kevin Carr **
50 REM *******************
60 KEY OFF:SCREEN 2:SCREEN 0,0,0:COLOR 1,4,4
70 CLS
80 PRINT :PRINT :PRINT
90 PRINT "1. KILL A FILE"
100 PRINT "2. LOAD A BASIC FILE"
110 PRINT "3. RUN A BASIC FILE"
120 PRINT "4. LOOK AT DIRECTORY"
130 PRINT "5. EXIT TO BASIC"
140 PRINT "6. EXIT TO DOS"
150 PRINT:PRINT
160 LOCATE 23,1:PRINT "Date when program was executed:"
170 LOCATE 23,40:PRINT "Time when program was executed:"
180 LOCATE 24,1:PRINT DATE$;
190 LOCATE 24,40:PRINT TIME$;
200 LOCATE 11,2:INPUT "PLEASE PICK A NUMBER > ",P$
210 IF P$="1" THEN 280
220 IF P$="2" THEN 340
230 IF P$="3" THEN 390
240 IF P$="4" THEN FILES:FOR I=1 TO 3000:NEXT I:CLS:GOTO 70
250 IF P$="5" THEN END
260 IF P$="6" THEN SYSTEM
270 PRINT "Please try again":FOR I=100 TO 1000:NEXT I:CLS:GOTO 70
280 CLS
290 INPUT "TYPE FULL FILE NAME YOU WANT DELETED > ",D$
300 INPUT "ARE YOU SURE? > ",S$
310 IF S$="Y" OR S$="y" OR S$="YES" OR S$="yes" THEN KILL D$:PRINT "FILE DELETED"
320 IF S$="N" OR S$="n" OR S$="NO" OR S$="no" THEN CLS:GOTO 80
330 FOR I=1 TO 1000:NEXT I:GOTO 70
340 CLS
350 INPUT "TYPE BASIC FILE NAME TO LOAD > ",F$:PRINT "FILE LOADED"
360 LOAD F$
370 END
380 GOTO 70
390 CLS
400 INPUT "WHAT FILE DO YOU WANT TO RUN? > ",R$
410 RUN R$
420 END
```

## MATH.BAS

```bas
100 SCREEN 1:COLOR 1,2:KEY OFF:CLS
110 X=RND(1):PRINT
120 INPUT "WHAT IS YOU NAME? >",N$
130 INPUT "DO YOU WANT INSTRUCTIONS (Y OR N) ",Y$
140 IF LEFT$(Y$,1)="N" OR LEFT$(Y$,1)="n" THEN PRINT:GOTO 230
150 FOR I=1 TO 3:PRINT:NEXT I
160 PRINT "PRESS"
170 PRINT "1. FOR ADDITION (+)"
180 PRINT "2. FOR SUBTRACTION (-)"
190 PRINT "3. FOR MULTIPLICATION (*)"
200 PRINT "4. FOR DIVISION (/)"
210 PRINT "5. FOR ALL FOUR SIGNS (+,-,*,/)":PRINT
220 PRINT "IF YOU WISH TO QUIT, TYPE 000 AFTER YOU GET PROBLEM. YOU WILL THEN BE GIVEN YOURSCORE. PRESS THE `RETURN' KEY AFTER     EVERY ANSWER.":PRINT
230 INPUT "WHICH ONE? (1,2,3,4,5)";T:PRINT
240 INPUT "WHAT IS THE LARGEST VALUE I SHOULD GIVE FOR ONE NUMBER";N:PRINT
250 INPUT "WHAT IS THE SMALLEST VALUE I SHOULD GIVEFOR THE OTHER NUMBER";P:PRINT
260 INPUT "PRESS A LETTER";R$
270 PRINT
280 FOR I=1 TO ASC(R$)
290 R1=RND(0)
300 NEXT I
310 IF T<5 THEN 340
320 G=1
330 T=INT(4*RND(0)+1)
340 A=A+1
350 X=INT((N+1)*RND(VAL(MID$(TIME$,4,2)))):IF X>N THEN 350
360 Y=INT((P+1)*RND(VAL(MID$(TIME$,4,2)))):IF Y>P THEN 360
370 ON T GOTO 390,450,550,610
380 ' **************
390 ' ** ADDITION **
400 ' **************
410 Z1=X+Y
420 PRINT A;".  ";X;"+";Y;"=";
430 GOTO 720
440 ' *****************
450 ' ** SUBTRACTION **
460 ' *****************
470 IF X>Y THEN 510
480 X1=Y
490 Y=X
500 X=X1
510 Z1=X-Y
520 PRINT A;".  ";X;"-";Y;"=";
530 GOTO 720
540 ' ********************
550 ' ** MULTIPLICATION **
560 ' ********************
570 Z1=X*Y
580 PRINT A;".  ";X;"X";Y;"=";
590 GOTO 720
600 ' **************
610 ' ** DIVISION **
620 ' **************
630 IF X>0 THEN 660
640 X=Y
650 Y=0
660 L=X*Y
670 Z1=Y
680 PRINT A;".  ";L;"/";X;"=";
690 ' *************
700 ' ** ANSWERS **
710 ' *************
720 INPUT Z
730 IF Z=999 THEN 980
740 IF Z=Z1 THEN 850
750 R3=RND(0)
760 IF R3>0.333 THEN 790
770 PRINT:PRINT "SORRY, TRY AGAIN ";N$:PRINT
780 GOTO 830
790 IF R3>0.6670001 THEN 820
800 PRINT:PRINT "INCORRECT!":PRINT
810 GOTO 830
820 PRINT:PRINT "CONCENTRATE!":PRINT
830 F=1
840 ON T GOTO 420,520,580,680
850 R2=RND(0)
860 IF R2>0.333 THEN 890
870 PRINT:PRINT "CONGRATULATIONS, ";N$:PRINT
880 GOTO 930
890 IF R2> 0.6670001 THEN 920
900 PRINT:PRINT "VERY GOOD, ";N$:PRINT
910 GOTO 930
920 PRINT:PRINT "NICE GOING, ";N$:PRINT
930 IF F=1 THEN 950
940 B=B+1
950 F=0
960 IF G=1 THEN 330
970 GOTO 340
980 PRINT:PRINT "COME BACK AND PLAY WITH ME AGAIN SOMETIME, ";N$
990 A=A-1
1000 C=A-B
1010 D=INT(100*B/A)
1020 PRINT:PRINT
1030 PRINT"TOTAL NUMBER OF PROBLEMS ";A:PRINT
1040 PRINT"TOTAL NUMBER CORRECT     ";B:PRINT
1050 PRINT"TOTAL NUMBER WRONG       ";C:PRINT
1060 PRINT"PERCENTAGE CORRECT       ";D;"%"
1070 END
```

## MENU.BAS

```bas
10 KEY OFF:CLS:SCREEN 1:COLOR 2,1
20 PRINT:PRINT "MENU FOR EDUCATIONAL PROGRAMS"
30 PRINT:PRINT "PRESS 1 TO RUN FLASH"
40 PRINT "PRESS 2 TO RUN MATH"
50 PRINT "PRESS 3 TO RUN TYPE"
60 PRINT "PRESS 4 TO RUN KILL"
70 PRINT "PRESS 5 TO RUN KILL2"
80 PRINT "PRESS 0 EXIT"
90 PRINT:INPUT "> ",MENU$
100 IF MENU$="1" THEN RUN "FLASH"
110 IF MENU$="2" THEN RUN "MATH"
120 IF MENU$="3" THEN RUN "TYPE"
130 IF MENU$="4" THEN RUN "KILL"
140 IF MENU$="5" THEN RUN "KILL2"
150 IF MENU$="0" THEN END
```

## NOTICE.BAS

```bas
10 'PC GRADEBOOK                   Copyright (c) 1985 by G.D. Fleming & Co. Inc.
20 ' License agreement
30 COMMON CLASS.CUR$,INC%(),TOTINC(),STUDENT$(),ASG$(),SCORE(),TOTSCOR(),          STUNUM,ASGNUM,BKSPC$,CLASTOT,LSTI,LSTJ,CUTOFF,CUTUP
40 CLS:COLOR 15,0:PRINT TAB(35)"AGREEMENT:":COLOR 7,0:PRINT :PRINT "We have worked very hard to make this program as error-free as possible.":PRINT "HOWEVER, we do not and cannot make any warranty as to its suitability for any "
50 PRINT "given purpose or as to the results that you may obtain by using it.  YOU USE    THIS PROGRAM ENTIRELY AT YOUR OWN RISK."
60 PRINT :PRINT "This program may be freely copied, modified, or distributed in any way that you like.  You do, however, agree that on any version that you distribute, the copy-right notice and this agreement will be prominently displayed and unaltered.
70 PRINT :PRINT "We hope that you will enjoy this program, and we derive satisfaction from the   thought that you may.  However, ";:COLOR 15,0:PRINT "SATISFACTION DOES NOT PUT FOOD ON THE TABLE.";:COLOR 7,0
80 PRINT "If you intend to make use of the program in any way, we ask that you send a     registration fee of $25.00 to G.D. Fleming & Co. Inc., P.O. Box 588, Blair,     Nebraska 68008.
90 PRINT:PRINT "In return, you will receive our undying gratitude, as well as regular notifi-   cation of the updates and new products that you have helped make it possible forus to continue to produce.":PRINT:PRINT"THANKS."
100 LOCATE 25,1:PRINT TAB(27)"PRESS SPACE BAR TO CONTINUE";:A$=INKEY$:              IF A$=CHR$(32) THEN CHAIN "grades",240 ELSE 100
```

## REPORTS.BAS

```bas
10 'PC GRADEBOOK                   Copyright (c) 1985 by G.D. Fleming & Co. Inc.
20 ' Reports
30 '
40 COLOR 15,0:CLS:BKSPC$=CHR$(29)+" "+CHR$(29):ON ERROR GOTO 3000
50 LOCATE 3,40-FIX(LEN(CLASS.CUR$)/2):PRINT CLASS.CUR$;:LOCATE 5,32:               PRINT "* Printer Menu *";:COLOR 7,0
60 COMMON CLASS.CUR$,INC%(),TOTINC(),STUDENT$(),ASG$(),SCORE(),TOTSCOR(),          STUNUM,ASGNUM,BKSPC$,CLASTOT,LSTI,LSTJ,CUTOFF,CUTUP
70 LOCATE 4,1:PRINT CHR$(201);STRING$(78,205);CHR$(187);
80 FOR CT%=5 TO 18:LOCATE CT%,1:PRINT CHR$(186);:LOCATE CT%,80:PRINT CHR$(186);:   NEXT CT%
90 LOCATE 13,1:PRINT CHR$(204);STRING$(78,205);CHR$(185);
100 LOCATE 19,1:PRINT CHR$(200);STRING$(78,205);CHR$(188);
110 LOCATE 7,5:PRINT                                                                "Print list of students in this class with incompletes outstanding."
120 LOCATE 8,5:PRINT                                                                "Print list of students in this class with grades below a chosen level."
130 LOCATE 9,5:PRINT"Print individual reports on select students in this class."
140 LOCATE 10,5:PRINT "Print entire gradesheet for this class."
150 LOCATE 11,5:PRINT "Return to PC Gradebook menu."
160 LOCATE 16,5:PRINT                                                               "Use tab keys to make your selection, then press <ENTER>...."
170 COLOR 15,0:LOCATE 7,3:PRINT CHR$(26);
180 ROW%=7
190 A$=INKEY$:IF A$=CHR$(13) THEN 240 ELSE                                          IF A$=CHR$(9) OR LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(15) THEN 200 ELSE 190
200 IF A$=CHR$(9) THEN ROW%=ROW%+1:IF ROW%>11 THEN ROW%=7
210 IF RIGHT$(A$,1)=CHR$(15) THEN ROW%=ROW%-1:IF ROW%<7 THEN ROW%=11
220 PRINT BKSPC$:LOCATE ROW%,3:PRINT CHR$(26);
230 GOTO 190
240 CT%=ROW%-6
250 ON CT% GOTO 280,440,700,1530,2080
260 GOTO 190
270 '
280 'print incompletes
290 '
300 GOSUB 2400
310 A$=INKEY$: IF A$=CHR$(27) THEN 40 ELSE IF A$=CHR$(13) THEN 320 ELSE 310
320 GOSUB 2340:TEST%=0
330 LPRINT CLASS.CUR$;TAB(70)DATE$:LPRINT
340 LPRINT                                                                          "The following students in ";CLASS.CUR$;" have incomplete work outstanding:"
350 LPRINT STRING$(80,61);:LPRINT"Name"TAB(31)"Number of Incompletes"TAB(76)"%"     :LPRINT STRING$(80,61);
360 FOR CT%=1 TO STUNUM
370 IF TOTINC(CT%)<1.001 THEN 390 ELSE TEST%=1
380 LPRINT USING "\                       \               ##                                ###";STUDENT$(CT%),TOTINC(CT%),100*TOTSCOR(CT%)/CLASTOT
390 NEXT CT%
400 IF TEST%=0 THEN LPRINT                                                          "No students in ";CLASS.CUR$;" with incomplete work outstanding."
410 LPRINT :LPRINT STRING$(80,61);:LPRINT                                           "Incompletes are used as zeroes in computing averages shown above!":            LPRINT STRING$(80,61);:LPRINT CHR$(12)
420 GOSUB 2370:GOTO 40
430 '
440 'print downlist
450 '
460 GOSUB 2400:TEST%=0
470 A$=INKEY$: IF A$=CHR$(27) THEN 40 ELSE IF A$=CHR$(13) THEN 480 ELSE 470
480 GOSUB 2310
490 LOCATE 14,5:PRINT "Printing list of students with grades below:";
500 COLOR 0,7:PRINT USING "###";100*CUTOFF:COLOR 7,0
510 LOCATE 16,5:PRINT USING"Press <ENTER> to print list of students below ###%";    100*CUTOFF
520 LOCATE 17,5:PRINT                                                               "Or type new value and press <ENTER> to change cutoff point"
530 LOCATE 18,5:PRINT "Or press <ESC> to back up without printing...";:             LOCATE 14,49
540 A$=INKEY$:IF A$="" THEN 540 ELSE IF A$=CHR$(13) THEN 580 ELSE BUFFER$="":       Y$=A$:ESCTEST=0:COLOR 0,7:PRINT STRING$(3,32);STRING$(3,29);:COLOR 7,0:         GOSUB 2690
550 IF ESCTEST THEN 40
560 IF VAL(BUFFER$)<1 THEN BEEP:LOCATE 20,5:PRINT                                   "Illegal value (less than 1); try again!";:GOTO 540
570 CUTOFF=(VAL(BUFFER$)-.5)/100
580 LPRINT TAB(40-FIX(LEN(CLASS.CUR$)/2))CLASS.CUR$:LPRINT
590 LPRINT USING "The following students in \      \ have scored less than ###% as of \        \.";CLASS.CUR$,100*CUTOFF,DATE$
600 LPRINT STRING$(80,61);:LPRINT "Name"TAB(40)"Score"TAB(62)"%"TAB(75)"INC";:      LPRINT STRING$(80,61);
610 FOR CT%=1 TO STUNUM
620   IF TOTSCOR(CT%)/CLASTOT>CUTOFF THEN 640 ELSE TEST%=1
630   LPRINT USING                                                                    "\                       \               ####                ###            ##";STUDENT$(CT%),TOTSCOR(CT%),100*TOTSCOR(CT%)/CLASTOT,TOTINC(CT%)
640 NEXT CT%
650 IF TEST%=0 THEN LPRINT USING                                                    "No students in \      \ with scores below ###%.";CLASS.CUR$,100*CUTOFF
660 LPRINT STRING$(80,61);:LPRINT                                                   "Total Posible points as of ";DATE$;" =";CLASTOT:LPRINT STRING$(80,61);
670 LPRINT CHR$(12)
680 GOTO 40
690 '
700 'print individual reports
710 '
720 COLOR 15,0:GOSUB 2480:LOCATE 5,29:PRINT "* Individual Reports *";:COLOR 7,0
730 LOCATE 7,5:PRINT                                                                "Print an individual report for each student in this class.";
740 LOCATE 8,5:PRINT USING                                                          "Print an individual report for each student with an average below ###%.";      100*CUTOFF
750 LOCATE 9,5:PRINT USING                                                          "Print an individual report for each student with an average above ###%.";      100*CUTUP
760 LOCATE 10,5:PRINT                                                              "Print individual reports for students chosen manually from the class list.";
770 LOCATE 11,5:PRINT "Back up without printing any individual reports."
780 LOCATE 7,3:COLOR 15,0:PRINT CHR$(26);
790 ROW%=7
800 A$=INKEY$:IF A$=CHR$(13) THEN 1000 ELSE IF A$=CHR$(9) THEN 810                  ELSE IF LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(15) THEN 810 ELSE 800
810 IF A$=CHR$(9) THEN ROW%=ROW%+1:IF ROW%>11 THEN ROW%=7
820 IF RIGHT$(A$,1)=CHR$(15) THEN ROW%=ROW%-1:IF ROW%<7 THEN ROW%=11
830 PRINT BKSPC$;:LOCATE 17,2:PRINT STRING$(78,32);:LOCATE ROW%,3:                  PRINT CHR$(26);
840 IF ROW%<>8 AND ROW%<>9 THEN GOTO 800
850 LOCATE 17,5:PRINT                                                               "Or type a new value for this selection, then press <ENTER>.";:                 IF ROW%=9 THEN 930
860 LOCATE 8,71:COLOR 0,7:PRINT USING "###";100*CUTOFF;
870 A$=INKEY$:IF A$="" THEN 870
880 IF A$=CHR$(9) THEN COLOR 7,0:LOCATE 8,71:PRINT USING "###";100*CUTOFF;:         COLOR 15,0:LOCATE 8,4:ROW%=ROW%+1:GOTO 830
890 IF LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(15) THEN COLOR 7,0:LOCATE 8,71:              PRINT USING "###";100*CUTOFF;:COLOR 15,0:LOCATE 8,4:ROW%=ROW%-1:GOTO 830
900 IF A$=CHR$(13) THEN 1000
910 PRINT STRING$(3,29);STRING$(3,32);STRING$(3,29);:BUFFER$="":ESCTEST=0:          Y$=A$:GOSUB 2690
920 IF ESCTEST THEN 700 ELSE IF VAL(BUFFER$)<1 THEN 1000                            ELSE CUTOFF=(VAL(BUFFER$)-.5)/100:GOTO 1000
930 LOCATE 9,71:COLOR 0,7:PRINT USING "###";100*CUTUP;
940 A$=INKEY$:IF A$="" THEN 940
950 IF A$=CHR$(9) THEN COLOR 7,0:LOCATE 9,71:PRINT USING "###";100*CUTUP;:          COLOR 15,0:ROW%=ROW%+1:LOCATE 9,4:GOTO 830
960 IF LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(15) THEN COLOR 7,0:LOCATE 9,71:              PRINT USING "###";100*CUTUP;:COLOR 15,0:ROW%=ROW%-1:LOCATE 9,4:GOTO 830
970 IF A$=CHR$(13) THEN 1000
980 PRINT STRING$(3,29);STRING$(3,32);STRING$(3,29);:BUFFER$="":ESCTEST=0:           Y$=A$:GOSUB 2690
990 IF ESCTEST THEN 700 ELSE IF VAL(BUFFER$)<1 THEN 1000                            ELSE CUTUP=(VAL(BUFFER$)+.499)/100:GOTO 1000
1000 ON ROW%-6 GOTO 1020,1080,1160,1250,1520
1010 '     print all reports
1020 GOSUB 2420
1030 A$=INKEY$: IF A$=CHR$(27) THEN 40 ELSE IF A$=CHR$(13) THEN 1040 ELSE 1030
1040 GOSUB 2350:GOSUB 2310:LOCATE 16,5:COLOR 15,0:                                   PRINT "Press <ESC> to stop printing."
1050 FOR CT%=1 TO STUNUM:GOSUB 2510:A$=INKEY$:IF A$=CHR$(27) THEN CT%=STUNUM
1060 NEXT CT%
1070 GOTO 40
1080 '     print all below cutoff
1090 GOSUB 2420
1100 A$=INKEY$: IF A$=CHR$(27) THEN 40 ELSE IF A$=CHR$(13) THEN 1110 ELSE 1100
1110 GOSUB 2350:GOSUB 2310:LOCATE 16,5:COLOR 15,0:                                   PRINT "Press <ESC> to stop printing."
1120 FOR CT%=1 TO STUNUM:IF TOTSCOR(CT%)/CLASTOT>CUTOFF THEN 1140
1130 GOSUB 2510:A$=INKEY$:IF A$=CHR$(27) THEN CT%=STUNUM
1140 NEXT CT%
1150 GOTO 40
1160 '     print all above cutup
1170 GOSUB 2420
1180 A$=INKEY$: IF A$=CHR$(27) THEN 40 ELSE IF A$=CHR$(13) THEN 1190 ELSE 1180
1190 GOSUB 2350:GOSUB 2310:LOCATE 16,5:COLOR 15,0:                                   PRINT "Press <ESC> to stop printing."
1200 FOR CT%=1 TO STUNUM:IF TOTSCOR(CT%)/CLASTOT<CUTUP THEN 1220
1210 GOSUB 2510:A$=INKEY$:IF A$=CHR$(27) THEN CT%=STUNUM
1220 NEXT CT%
1230 GOTO 40
1240 '
1250 'select reports to print
1260 GOSUB 2400
1270 A$=INKEY$:IF A$=CHR$(13) THEN 1280 ELSE IF A$=CHR$(27) THEN 40 ELSE 1270
1280 'draw box, disp 15 students
1290 '
1300 CLS:COLOR 7,0:GOSUB 2240
1310 IF STUNUM=0 THEN GOSUB 2160:GOSUB 2340:LOCATE 10,17:                                       PRINT "No students currently stored in this class file. ";:FOR CT%=1 TO 10000:NEXT CT%:GOTO 40
1320 GOSUB 2340
1330 COLOR 7,0:GOSUB 2160
1340 COLOR 15,0:LOCATE 1,1:PRINT TAB(25):PRINT USING                                 "PRINTING REPORTS FOR: \      \";CLASS.CUR$;:PRINT TAB(79)" ";:LOCATE 3,3:      PRINT "Name"TAB(40)"Points"TAB(61)"%"TAB(74)"# Inc.";
1350 GOSUB 2370:FOR I=1 TO STUNUM
1360   LOCATE I+3,3:PRINT SPC(25):LOCATE I+3,3:PRINT STUDENT$(I);:LOCATE I+3,40:       PRINT USING"####.#";TOTSCOR(I);:LOCATE I+3,59:                                  PRINT USING"###.#";100*TOTSCOR(I)/CLASTOT;:LOCATE I+3,75:PRINT TOTINC(I);
1370   IF I>14 THEN I=LSTI:'if over 15 students
1380 NEXT I
1390 '
1400 'select a student
1410 '
1420 COLOR 7,0:GOSUB 2210:LOCATE 20,3:                                               PRINT "Use tab keys to select a student, then press <ENTER>...";:               LOCATE 21,3:PRINT "Or press <ESC> to view menu.";
1430 IF STUNUM=0 THEN BEEP:COLOR 15,0:GOTO 1310
1440 I=1:ROW%=4
1450 COLOR 15,0:LOCATE ROW%,2:PRINT CHR$(26);
1460 A$=INKEY$:IF A$=CHR$(9) OR LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(15) THEN PRINT       CHR$(29);" "; ELSE IF A$=CHR$(13) THEN 1510 ELSE IF A$=CHR$(27) THEN            40 ELSE 1460
1470 IF A$=CHR$(9) THEN I=I+1:IF I>STUNUM AND STUNUM<16 THEN I=1 ELSE IF I>15        AND I<=STUNUM THEN GOSUB 2750 ELSE IF I>STUNUM THEN I=STUNUM:BEEP:              GOTO 1500 ELSE ROW%=ROW%+1:GOTO 1500
1480 IF RIGHT$(A$,1)=CHR$(15) THEN I=I-1:IF I<1 AND STUNUM<16 THEN I=STUNUM          ELSE IF ROW%=4 THEN GOSUB 2860 ELSE IF I<1 THEN I=1:BEEP:COLOR 15,0:            GOTO 1500 ELSE ROW%=ROW%-1:GOTO 1500
1490 ROW%=I+3
1500 COLOR 15,0:LOCATE ROW%,2:PRINT CHR$(26);:GOTO 1460
1510 CT%=I:GOSUB 2510:GOTO 1460
1520 GOTO 40
1530 'print gradesheet
1540 '
1550 GOSUB 2400
1560 A$=INKEY$:IF A$=CHR$(13) THEN 1570 ELSE IF A$=CHR$(27) THEN 40 ELSE 1560
1570 GOSUB 2340:GOSUB 2310:LOCATE 16,5:PRINT "Press <ESC> to stop printing."
1580 LPRINT CLASS.CUR$:LPRINT :LPRINT "Gradesheet as of ";DATE$:                     LPRINT STRING$(80,61);
1590 MAX%=0:ASG$(0)="Total Score"
1600 FOR CT%=0 TO ASGNUM
1610   IF LEN(ASG$(CT%))>MAX% THEN MAX%=LEN(ASG$(CT%))
1620 NEXT CT%
1630 FOR CT2%=MAX% TO 1 STEP -1
1640 IF CT2%=1 THEN LPRINT TAB(28)"%";
1650 FOR CT%=0 TO 8
1660   IF LEN(ASG$(CT%))>=CT2% THEN                                                    LPRINT TAB(34+5*CT%)LEFT$(RIGHT$(ASG$(CT%),CT2%),1);                            ELSE LPRINT TAB(34+5*CT%)" ";
1670 NEXT CT%
1680 NEXT CT2%
1690 LPRINT STRING$(80,61);:LPRINT "Total points";:SCORE(0,0)=CLASTOT
1700 LPRINT TAB(27);:LPRINT USING "###%";100*SCORE(0,0)/CLASTOT;
1710 FOR CT%=0 TO 8
1720   IF CT%>ASGNUM THEN 1730 ELSE                                                    LPRINT TAB(32+CT%*5);:LPRINT USING "####";SCORE(0,CT%);
1730 NEXT CT%
1740 LPRINT STRING$(80,61);
1750 FOR CT%=1 TO STUNUM
1760   LPRINT TAB(1)STUDENT$(CT%)TAB(27):                                              LPRINT USING "###%";100*TOTSCOR(CT%)/CLASTOT;:LPRINT TAB(32):                   LPRINT USING "####";TOTSCOR(CT%);
1770   FOR CT2%=1 TO 8
1780     IF CT2%>ASGNUM THEN 1790 ELSE LPRINT TAB(33+CT2%*5);:                           IF INC%(CT%,CT2%) THEN LPRINT "INC";                                            ELSE LPRINT USING "###";SCORE(CT%,CT2%);
1790   NEXT CT2%
1800 A$=INKEY$:IF A$=CHR$(27) THEN CT%=STUNUM:PAGECOUNT%=100
1810 NEXT CT%
1820 LPRINT STRING$(80,61);:LPRINT CHR$(12)
1830 IF PAGECOUNT%>99 THEN PAGECOUNT%=0:GOTO 40
1840 COUNTER%=ASGNUM-8:                                                              IF COUNTER%>0 THEN COUNTER%=FIX(COUNTER%/14)-1*(COUNTER% MOD 14 <>0)            ELSE GOTO 40
1850 FOR PAGECOUNT%=1 TO COUNTER%
1860   LPRINT CLASS.CUR$:LPRINT :LPRINT "Page #";PAGECOUNT%+1;"of";COUNTER%+1:         LPRINT STRING$(80,61);
1870     FOR CT2%=MAX% TO 1 STEP -1
1880       FOR CT%=9+(PAGECOUNT%-1)*14 TO 22+(PAGECOUNT%-1)*14
1890       IF CT%>ASGNUM THEN 1910
1900         IF LEN(ASG$(CT%))>=CT2% THEN                                                    LPRINT TAB(5*(CT%-8-14*(PAGECOUNT%-1)))LEFT$(RIGHT$(ASG$(CT%),CT2%)             ,1); ELSE LPRINT TAB(5*(CT%-8-14*(PAGECOUNT%-1)))" ";
1910       NEXT CT%
1920     NEXT CT2%
1930   LPRINT STRING$(80,61);
1940       FOR CT%=9+(PAGECOUNT%-1)*14 TO 22+(PAGECOUNT%-1)*14
1950         IF CT%>ASGNUM THEN 1960                                                         ELSE LPRINT TAB(5*(CT%-8-14*(PAGECOUNT%-1)));:                                       LPRINT USING "###";SCORE(0,CT%);
1960       NEXT CT%
1970     LPRINT STRING$(80,61);
1980   FOR CT%=1 TO STUNUM
1990     FOR CT2%=9+(PAGECOUNT%-1)*14 TO 22+(PAGECOUNT%-1)*14
2000       IF CT2%>ASGNUM THEN 2010                                                        ELSE LPRINT TAB(5*(CT2%-8-14*(PAGECOUNT%-1)));:IF INC%(CT%,CT2%)                     THEN LPRINT "INC";ELSE LPRINT USING "###";SCORE(CT%,CT2%);
2010     NEXT CT2%
2020   A$=INKEY$:IF A$=CHR$(27) THEN CT%=STUNUM:PAGECOUNT%=100
2030   NEXT CT%
2040 LPRINT STRING$(80,61);:LPRINT CHR$(12)
2050 NEXT PAGECOUNT%
2060 GOTO 40
2070 '
2080 'return to gradebook
2090 '
2100 GOSUB 2310
2110 LOCATE 15,5:PRINT                                                               "Press <F1> to confirm your decision to return to the PC Gradebook menu.";
2120 LOCATE 16,5:PRINT "Or press <ESC> to back up....";
2130 A$=INKEY$:IF A$=CHR$(27) THEN GOTO 40                                                        ELSE IF LEN(A$)=2 AND RIGHT$(A$,1)=CHR$(59) THEN 2140                           ELSE 2130
2140 GOSUB 2340:CHAIN "grades",1110
2150 'clr top box
2160 FOR CT%=3 TO 18:LOCATE CT%,2:PRINT STRING$(78,32);:NEXT CT%:RETURN
2170 '
2180 'subroutines
2190 '
2200 'clr bottom box
2210 FOR CT%=20 TO 22:LOCATE CT%,2:PRINT STRING$(78,32);:NEXT CT%:RETURN
2220 '
2230 'draw double box
2240 LOCATE 2,1:PRINT CHR$(201);STRING$(78,205);CHR$(187);
2250 FOR CT%=3 TO 22:LOCATE CT%,1:PRINT CHR$(186);:NEXT CT%
2260 FOR CT%=3 TO 22:LOCATE CT%,80:PRINT CHR$(186);:NEXT CT%
2270 LOCATE 19,1:PRINT CHR$(204);STRING$(78,205);CHR$(185);
2280 LOCATE 23,1:PRINT CHR$(200);STRING$(78,205);CHR$(188);
2290 RETURN
2300 '
2310 'clr bot box
2320 FOR CT%=14 TO 18:LOCATE CT%,2:PRINT STRING$(78,32);:NEXT CT%:RETURN
2330 '
2340 'print -WAIT-
2350 COLOR 31,4:LOCATE 25,74:PRINT " WAIT ";:COLOR 7,0:RETURN
2360 '
2370 'clear -WAIT-
2380 COLOR 7,0:LOCATE 25,74:PRINT "      ";:RETURN
2390 '
2400 'prep printer msg
2410 '
2420 COLOR 7,0:GOSUB 2310
2430 LOCATE 14,3:PRINT                                                               "Is printer loaded?  Connected to computer?  Is paper set to top of form?";
2440 LOCATE 15,3:PRINT "Is printer ON?"
2450 LOCATE 17,3:PRINT                                                               "If yes, press <ENTER> to proceed.  Or press <ESC> to back up....";
2460 RETURN
2470 '
2480 'clr top box
2490 FOR CT%=5 TO 12:LOCATE CT%,2:PRINT STRING$(78,32);:NEXT CT%:RETURN
2500 '
2510 'print individual reports
2520 '
2530 LPRINT CLASS.CUR$:LPRINT:LPRINT DATE$;" PROGRESS REPORT FOR --- ";              STUDENT$(CT%)
2540 LPRINT STRING$(80,61);:LPRINT                                                   "Assignment"TAB(35)"Possible Score"TAB(55)"Actual Score"TAB(76)"%";:            LPRINT STRING$(80,61);
2550 FOR J=1 TO ASGNUM
2560   LPRINT USING "\                       \               ###";                     ASG$(J),SCORE(0,J);
2570   LPRINT TAB(60);:IF INC%(CT%,J)=1 THEN LPRINT "INC";                                             ELSE LPRINT USING "###";SCORE(CT%,J);
2580   LPRINT TAB(75);:LPRINT USING "###";100*SCORE(CT%,J)/SCORE(0,J)
2590 NEXT J
2600 LPRINT TAB(40)"____"TAB(59)"____"TAB(75)"___":LPRINT TAB(30)"TOTALS:";
2610 LPRINT TAB(40);:LPRINT USING "####";CLASTOT;:LPRINT TAB(59);:                   LPRINT USING "####";TOTSCOR(CT%);:LPRINT TAB(75);:                              LPRINT USING "###";100*TOTSCOR(CT%)/CLASTOT
2620 LPRINT:LPRINT STRING$(80,61);:LPRINT                                            "Incompletes count as zeroes in computing these averages.";:LPRINT CHR$(12)
2630 RETURN
2640 '
2650 'input score
2660 '
2670 BUFFER$="":ESCTEST=0:BKSPC$=CHR$(29)+" "+CHR$(29)
2680 Y$=INPUT$(1)
2690 IF Y$>=CHR$(48) AND Y$<=CHR$(57) THEN 2730
2700 IF Y$=CHR$(27) THEN ESCTEST =1:RETURN
2710 IF Y$=CHR$(8) THEN IF BUFFER$="" GOTO 2680                                      ELSE BUFFER$=LEFT$(BUFFER$,LEN(BUFFER$)-1):COLOR 0,7:PRINT BKSPC$;:                  COLOR 7,0:GOTO 2680
2720 IF Y$=CHR$(13) THEN RETURN ELSE BEEP:GOTO 2680
2730 IF LEN(BUFFER$)<3 THEN PRINT Y$;:BUFFER$=BUFFER$+Y$
2740 GOTO 2680
2750 '
2760 'scroll down stu
2770 '
2780 ROW%=4:COLOR 7,0
2790 FOR CT%=I-14 TO I
2800   LOCATE ROW%,3
2810   PRINT SPC(25):LOCATE ROW%,3:PRINT STUDENT$(CT%);:LOCATE ROW%,40:                PRINT USING"####.#";TOTSCOR(CT%);:LOCATE ROW%,59:PRINT USING"###.#";            100*TOTSCOR(CT%)/CLASTOT;:LOCATE ROW%,75:PRINT TOTINC(CT%);
2820   ROW%=ROW%+1
2830 NEXT CT%
2840 ROW%=ROW%-1:COLOR 15,0
2850 RETURN 1500
2860 '
2870 'scroll up stu
2880 '
2890 ROW%=4:COLOR 7,0
2900 IF I<1 THEN I=1:BEEP:RETURN 1490 ELSE FOR CT%=I TO I+14
2910   LOCATE ROW%,3
2920   PRINT SPC(25):LOCATE ROW%,3:PRINT STUDENT$(CT%);:LOCATE ROW%,40:                PRINT USING"###.#";TOTSCOR(CT%);:LOCATE ROW%,59:PRINT USING"###.#";             100*TOTSCOR(CT%)/CLASTOT;:LOCATE ROW%,75:PRINT TOTINC(CT%);
2930   ROW%=ROW%+1
2940 NEXT CT%
2950 ROW%=ROW%-15:COLOR 15,0
2960 RETURN 1500
2970 '
2980 'Error trap
2990 '
3000 BEEP:COLOR 15,0:LOCATE 23,1:                                                    IF ERR=24 OR ERR=27 THEN PRINT "Printer is not ready!";:GOTO 3020
3010 PRINT "Error ";ERR;" in line ";ERL;".";
3020 LOCATE 24,1:PRINT "Press space bar when ready...";
3030 A$=INKEY$:IF A$=CHR$(32) THEN RESUME 40 ELSE 3030
```

## SCR-COLN.BAS

```bas
1000 REM╔═════════════════════════════════════════════════════════════════════╗
1010 REM║                                                                     ║
1020 REM║   Without Graphics      HIGH SCORE ORGANIZER        Color Version   ║
1030 REM║        Board                                        6/9/85    5.1   ║
1040 REM║                     WRITTEN BY DAVID J. FRIEDMAN                    ║
1050 REM║                                                                     ║
1060 REM║   On Saturday February 23 and Sunday February 24 of the year 1985   ║
1070 REM║                                                                     ║
1080 REM║                                                                     ║
1090 REM║       Dave Friedman was born in Bakersfield, California located     ║
1100 REM║     in Kern County near Death Valley on October 24, 1968.  When     ║
1110 REM║     he was just about three years old, he moved to a small town     ║
1120 REM║     in Wisconsin called Irma.  Its population was approximately     ║
1130 REM║     100 people.  It is located north of Wausau.  In 1976, David     ║
1140 REM║     again moved, not so far this time, to Eau Claire, a city in     ║
1150 REM║     Wisconsin with a population of about 50,000 people.  He now     ║
1160 REM║     currently resides at 3330 Riverview Drive where he stays up     ║
1170 REM║     all night and writes stupid remarks in his programs.  Thank     ║
1180 REM║     you for your patience for reading this, and I hope you will     ║
1190 REM║     find the program to be useful.                                  ║
1200 REM║     ┌───────────────────────────────┐     Dave Friedman             ║
1210 REM║     │   If you find this program to │     3330 Riverview Drive      ║
1220 REM║     │ be useful, a donation of five │     Eau Claire, Wisconsin     ║
1230 REM║     │ dollars would be appreciated. │     (715) 834-8045  54703     ║
1240 REM║     └───────────────────────────────┘                               ║
1250 REM╠═════════════════════════════════════════════════════════════════════╣
1260 REM║                        SUMMARY OF SUBROUTINES                       ║
1270 REM║                        ──────────────────────                       ║
1280 REM║                                                                     ║
1290 REM║     LINE NUMBERS      P U R P O S E   O F   S U B R O U T I N E     ║
1300 REM║     ────────────      ─────────────────────────────────────────     ║
1310 REM║     1000-1530         BIOGRAPHY AND SUMMARY OF SUBROUTINES          ║
1320 REM║     2000-2800         MARQUE TYPE INTRODUCTION-ONLY W/GRAPHICS      ║
1330 REM║     3000-3150         PROGRAM SETUP                                 ║
1340 REM║     4000-4060         DISPLAY DATE                                  ║
1350 REM║     5000-5260         CHANGE DATE                                   ║
1360 REM║     6000-6090         GET INFORMATION ABOUT RECORDS                 ║
1370 REM║     7000-7080         GET RECORDS FROM DATA FILE                    ║
1380 REM║     8000-8100         INPUT RECORDS                                 ║
1390 REM║     9000-9140         SORT RECORDS                                  ║
1400 REM║     10000-10280       CHECK RECORDS - ADD, DELETE, CORRECT, ABORT   ║
1410 REM║     11000-11150       CORRECT MISTAKES IN RECORD                    ║
1420 REM║     12000-12190       INITIALIZE PRINTING                           ║
1430 REM║     13000-13250       OUTPUT TO PRINTER                             ║
1440 REM║     14000-14280       PRINT TO SCREEN                               ║
1450 REM║     15000-15030       END PROGRAM                                   ║
1460 REM║     16000-16070       DELETE RECORD                                 ║
1470 REM║     17000-17100       SAVE RECORDS TO SEQUENTIAL DATAFILE           ║
1480 REM║     18000-18140       ADD RECORD                                    ║
1490 REM║     19000-19070       PAUSE WHILE SCROLLING                         ║
1500 REM║     20000-20190       PRINT OUTPUT TO DISK                          ║
1510 REM║     21000-21390       ERROR HANDLING ROUTINE                        ║
1520 REM║     22000-22120       SELECTIVE INPUT ROUTINE                       ║
1530 REM╚═════════════════════════════════════════════════════════════════════╝
3000 '
3010 REM ** SETUP **
3020 '
3030 SCREEN 0:WIDTH 80:CLEAR:KEY OFF:LOCATE,,0,0,31:RTR$=CHR$(17)+CHR$(196)+CHR$(217):KEY 3,"RUN"+CHR$(34)+"SCR-MENU"+CHR$(13):ON ERROR GOTO 21000
3040 FORMAT$="#########,":COLOR 3,0,0:CLS:COLOR 10,0,0:ALPHA$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz":NUM$="0123456789":CHAR$="!#$%^&*()-_=+[]{}|~;:`',.<>/?\"
3050 PRINT CHR$(201);STRING$(78,CHR$(205));CHR$(187);
3060 FOR X= 1 TO 7
3070 PRINT CHR$(186);:LOCATE ,80,0:PRINT CHR$(186);:NEXT X
3080 PRINT CHR$(200);STRING$(78,CHR$(205));CHR$(188);
3090 PRINT:PRINT:PRINT:PRINT:PRINT
3100 PRINT CHR$(201);STRING$(78,CHR$(205));CHR$(187);
3110 FOR L= 1 TO 7
3120 PRINT CHR$(186);:LOCATE ,80,0:PRINT CHR$(186);
3130 NEXT L
3140 PRINT CHR$(200);STRING$(78,CHR$(205));CHR$(188);
3150 HSO$="HIGH SCORE ORGANIZER":LOCATE 3,(40-(LEN(HSO$))/2)+1:COLOR 20,0,0:PRINT HSO$;:COLOR 10,0,0
4000 '
4010 REM ** DISPLAYS DATE **
4020 '
4030 LOCATE 6,5:COLOR 15,0,0:PRINT"Current date is ";:COLOR 6,0,0:PRINT DATE$;:COLOR 15,0,0:PRINT"."
4040 LOCATE 7,5,1:COLOR 15,0,0:PRINT "Change it (Y/N)?";
4050 ANS$=INKEY$:IF ANS$<>"y" AND ANS$<>"Y" AND ANS$<>"n" AND ANS$<>"N" THEN 4050
4060 IF ANS$="n" OR ANS$="N" THEN LOCATE 7,5,0:PRINT SPC(16);:COLOR 4,0,0:LOCATE 3,(40-(LEN(HSO$))/2)+1:PRINT HSO$;:GOTO 6030
5000 '
5010 REM ** CHANGES DATE **
5020 '
5030 IF ANS$="y" OR ANS$="Y" THEN  CLS:LOCATE 10,1,0:PRINT"Input date.";:COLOR 2,0,0
5040 LOCATE 10,15:PRINT"MONTH NUMBER (1-12)";:ROW=10:COL=35:MAXLEN=2:SELECT$="0123456789":IN$=LEFT$(DATE$,2):PT=1:GOSUB 22040:M=VAL(IN$):M$=IN$
5050 IF M<1 OR M>12 OR M<>INT(M) THEN 5040
5060 GOTO 5220
5070 IF M=2 THEN 5120
5080 IF M=1 OR M=3 OR M=5 OR M=7 OR M=8 OR M=10 OR M=12 THEN GOTO 5190
5090 LOCATE 12,15:PRINT"DAY (1-30)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22040:D=VAL(IN$):D$=IN$
5100 IF D<1 OR D>30 OR D<>INT(D) THEN 5070
5110 GOTO 5250
5120 IF Y/4=INT(Y/4) THEN 5160
5130 LOCATE 12,15:PRINT"DAY (1-28)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22040:D=VAL(IN$):D$=IN$
5140 IF D<1 OR D>28 OR D<>INT(D) THEN 5070
5150 GOTO 5250
5160 LOCATE 12,15:PRINT"DAY (1-29)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22040:D=VAL(IN$):D$=IN$
5170 IF D<1 OR D>29 OR D<>INT(D) THEN 5070
5180 GOTO 5250
5190 LOCATE 12,15:PRINT"DAY (1-31)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):GOSUB 22040:D=VAL(IN$):D$=IN$
5200 IF D<1 OR D>31 OR D<>INT(D) THEN 5050
5210 GOTO 5250
5220 LOCATE 14,15:PRINT"YEAR (1980-2099)";:ROW=14:COL=32:MAXLEN=4:SELECT$=NUM$:IN$=RIGHT$(DATE$,4):PT=1:GOSUB 22040:Y=VAL(IN$):Y$=IN$
5230 IF Y<1980 OR Y>2099 OR Y<>INT(Y) THEN 5220
5240 GOTO 5070
5250 DT$=M$+"-"+D$+"-"+Y$:DATE$=DT$
5260 GOTO 3040
6000 '
6010 REM *** INPUT ROUTINE ***
6020 '
6030 LOCATE 17,4:COLOR 3:PRINT"This program organizes the high scores of your home video games, saves";:LOCATE 18,4:PRINT"them to disk, and prints them out ";:COLOR 11:PRINT"[to your choice of screen or printer]";:COLOR 3:PRINT".";
6040 LOCATE 21,4:COLOR 9:PRINT"If you are using a PCjr, special instructions are enclosed in parenthesis."
6050 LOCATE 12,24,0:COLOR 14:PRINT"How many scores to organize?";
6060 ROW=12:COL=53:MAXLEN=3:SELECT$=NUM$:GOSUB 22000:C=VAL(IN$):LOCATE ,,0
6080 OPTION BASE 1:IF C+9=>255 THEN C9=255 ELSE C9=C+9
6090 DIM C$(C9),H$(C9),P$(C9),D$(C9),CTEMP$(C9),HTEMP$(C9),PTEMP$(C9),DTEMP$(C9)
7000 '
7010 REM ** GETS RECORDS FROM DATA FILE **
7020 '
7030 OPEN "SCR-DATA.BAS" FOR INPUT AS #1
7040 L=0
7050 C1=L:IF EOF(1) THEN CLOSE:GOTO 7080
7060 L=L+1:INPUT #1,C$(L),H$(L),P$(L),D$(L)
7070 GOTO 7050
7080 IF C-C1=0 THEN 9030
8000 '
8010 REM ** INPUT RECORDS **
8020 '
8030 COLOR 2,0,0:CLS:COLOR 20,0,0:IYR$="INPUT YOUR RECORDS":LOCATE 1,(20-(LEN(IYR$))/2+1):PRINT IYR$:COLOR 10,0,0
8040 FOR L=C1+1 TO C
8050 LOCATE 3,1:COLOR 15,0,0:PRINT"GAME #";L:COLOR 10,0,0
8060 LOCATE 7,5:COLOR 6,0,0:PRINT"NAME OF GAME   ";:COLOR 14,0,0:ROW=7:COL=21:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:C$(L)=IN$
8070 LOCATE 9,5:COLOR 6,0,0:PRINT"HIGH SCORE     ";:COLOR 14,0,0:ROW=9:COL=21:MAXLEN=7:SELECT$=NUM$:GOSUB 22000:H$(L)=IN$
8080 LOCATE 11,5:COLOR 6,0,0:PRINT"PLAYER         ";:COLOR 14,0,0:ROW=11:COL=21:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:P$(L)=IN$
8090 LOCATE 13,5:COLOR 6,0,0:PRINT"DATE (MM/DD/YY)";:COLOR 14,0,0:ROW=13:COL=21:MAXLEN=8:SELECT$=NUM$+"/":GOSUB 22000:D$(L)=IN$
8100 NEXT L
9000 '
9010 REM ** SORTS RECORDS BY GAME TITLE **
9020 '
9030 SCREEN 0:WIDTH 80:COLOR 15,0,0:CLS
9040 FOR X=1 TO C
9050 D=C
9060 LOCATE 12,30,0:COLOR 4:PRINT"SORTING:  "+STR$(X)+" OF";:COLOR 20:PRINT C;
9070 FOR Y=1 TO C
9080 IF C$(X)<C$(Y) THEN D=D-1
9090 NEXT Y
9100 CTEMP$(D)=C$(X):HTEMP$(D)=H$(X):PTEMP$(D)=P$(X):DTEMP$(D)=D$(X)
9110 NEXT X
9120 FOR L=1 TO C
9130 C$(L)=CTEMP$(L):H$(L)=HTEMP$(L):P$(L)=PTEMP$(L):D$(L)=DTEMP$(L)
9140 NEXT L
10000 '
10010 REM ** CHECK FOR MISTAKES, DELETIONS, ADDITIONS **
10020 '
10030 Z9=1:Z8=0
10040 Z3=0:FOR L=Z9 TO C
10050 IF Z8=1 THEN L=C:GOSUB 17040
10060 IF Z3=0 THEN WIDTH 80:COLOR 14,0,0:CLS:LOCATE 1,60,0:PRINT "RECORD #"+STR$(L)+" OF"+STR$(C):ELSE COLOR 14,0,0:LOCATE 1,60,0:PRINT"RECORD #"+STR$(L)+" OF"+STR$(C)
10070 LOCATE 2,1,0:COLOR 6,0,0:PRINT"On the game of ";:PRINT SPC(65);:LOCATE 2,16,0:COLOR 15,0,0:PRINT C$(L);:COLOR 6,0,0:PRINT ","
10080 LOCATE 4,1:COLOR 6,0,0:PRINT"the high score is ";:PRINT SPC(62);:LOCATE 4,19,0:COLOR 15,0,0:PRINT USING FORMAT$;VAL(H$(L));:COLOR 6,0,0:PRINT"."
10090 LOCATE 6,1:COLOR 6,0,0:PRINT"It was set by ";:PRINT SPC(66);:LOCATE 6,15,0:COLOR 15,0,0:PRINT P$(L)
10100 LOCATE 8,1:COLOR 6,0,0:PRINT"on the date of ";:PRINT SPC(65);:LOCATE 8,16:COLOR 15,0,0:PRINT D$(L);:COLOR 6,0,0:PRINT"."
10110 Z9=L+1:IF Z3<>0 THEN 10190 ELSE Z3=1
10120 LOCATE 11,24:COLOR 0,3,0:PRINT" 1 ";:COLOR 10,0,0:PRINT"  GO ON TO THE NEXT RECORD - IF LAST THEN CONTINUE"
10130 LOCATE 13,24:COLOR 0,3,0:PRINT" 2 ";:COLOR 10,0,0:PRINT"  SKIP TO LAST RECORD"
10140 LOCATE 15,24:COLOR 0,3,0:PRINT" 3 ";:COLOR 10,0,0:PRINT"  CORRECT THE ABOVE RECORD"
10150 LOCATE 17,24:COLOR 0,3,0:PRINT" 4 ";:COLOR 10,0,0:PRINT"  DELETE THE ABOVE RECORD"
10160 LOCATE 19,24:COLOR 0,3,0:PRINT" 5 ";:COLOR 10,0,0:PRINT"  ADD ANOTHER RECORD"
10170 LOCATE 21,24:COLOR 0,3,0:PRINT" 6 ";:COLOR 10,0,0:PRINT"  ";:COLOR 14,0,0:PRINT"ABORT PROGRAM"
10180 LOCATE 24,25:COLOR 15,0,0:PRINT"What is your choice?";
10190 A$=INKEY$
10200 IF Z8=1 THEN 10280
10210 IF A$="1" THEN NEXT L
10220 IF A$="2" THEN L=C:GOTO 10050
10230 IF A$="3" THEN CLS:GOTO 11030
10240 IF A$="4" THEN CLS:GOTO 16030
10250 IF A$="5" THEN CLS:GOTO 18030
10260 IF A$="6" THEN CLS:GOTO 15030
10270 IF A$<>"1" AND A$<>"2" AND A$<>"3" AND A$<>"4" AND A$<>"5" AND A$<>"6"THEN 10190
10280 GOSUB 17030:GOTO 12030
11000 '
11010 REM ** CORRECT RECORD **
11020 '
11030 CLS:LOCATE 1,1:COLOR 15,0,0:PRINT"GAME #";L:LOCATE 3,1:COLOR 6,0,0::PRINT"GAME     ";
11040 LOCATE 5,1:PRINT"SCORE    ";
11050 LOCATE 7,1:PRINT"PLAYER   ";
11060 LOCATE 9,1:PRINT"DATE     ";
11070 ROW=3:COL=8:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":COLOR 14:IN$=C$(L):PT=1:GOSUB 22040:TC$=IN$
11080 ROW=5:COL=8:MAXLEN=7:SELECT$=NUM$:IN$=H$(L):PT=1:GOSUB 22040:TH$=IN$
11090 ROW=7:COL=8:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":IN$=P$(L):PT=1:GOSUB 22040:TP$=IN$
11100 ROW=9:COL=8:MAXLEN=8:SELECT$=NUM$+"/":IN$=D$(L):PT=1:GOSUB 22040:TD$=IN$
11110 LOCATE 15,1:COLOR 4,0,0:PRINT"Is the above information correct?";
11120 A$=INKEY$
11130 IF A$="y" OR A$="Y" THEN CLS:H$(L)=TH$:P$(L)=TP$:D$(L)=TD$:IF TC$=C$(L) THEN GOTO 10040:ELSE C$(L)=TC$:GOTO 9030:'If NAME OF GAME is unchanged there is no need to resort
11140 IF A$="n" OR A$="N" THEN 11030
11150 GOTO 11120
12000 '
12010 REM ** PRINTING ROUTINE **
12020 '
12030 G1$="N A M E   O F   T H E   G A M E"  '3 spaces in between words
12040 N1$="HIGH SCORER"
12050 H1$="HIGH SCORE"
12060 D1$="D  A  T  E"
12070 R3$="THESE ARE THE HIGH SCORES AS OF"
12080 G2$="*******************************"  '31 characters
12090 N2$="***********"  '11 characters
12100 H2$="**********"  '10 characters
12110 D2$="**********"  '10 characters
12120 SCREEN 0:WIDTH 80:COLOR 7,0,0:CLS:LOCATE ,,0
12130 PRINT"To (";:COLOR 15:PRINT"S";:COLOR 7:PRINT")creen, (";:COLOR 15:PRINT"P";:COLOR 7:PRINT")rinter, (";:COLOR 15:PRINT"D";:COLOR 7:PRINT")isk, or (";:COLOR 15:PRINT"E";:COLOR 7:PRINT")nd?"
12140 A$=INKEY$:IF A$="S" OR A$="s" THEN 14030:ELSE IF A$="E" OR A$="e" THEN 15030
12150 IF A$<>"d" AND A$<>"D" AND A$<>"P" AND A$<>"p" THEN 12140:ELSE IF A$="D" OR A$="d" THEN 20030:ELSE CLS
12160 TOPAPAK$="TURN ON PRINTER AND PRESS A KEY":LOCATE 1,(40-(LEN(TOPAPAK$))/2)::COLOR 14:PRINT TOPAPAK$:LOCATE 3,1:COLOR 15:PRINT" [CTRL]";:COLOR 7:PRINT"+";:COLOR 15:PRINT"[NUM LOCK]";
12170 COLOR 4:PRINT" ([FN] Q) to PAUSE and ";:COLOR 15:PRINT"[CTRL]";:COLOR 7:PRINT"+";:COLOR 15:PRINT"[SCOLL LOCK]";
12180 COLOR 4:PRINT" ([FN] B) TO END"
12190 WHILE INKEY$="":WEND
13000 '
13010 REM ** OUTPUT TO PRINTER **
13020 '
13030 LPRINT " "
13040 LPRINT SPC(40-LEN(R3$)/2);R3$
13050 LPRINT SPC(40-LEN(DATE$)/2);DATE$:LPRINT:LPRINT
13060 LPRINT G1$;
13070 LPRINT SPC(37-LEN(G1$));H1$;
13080 LPRINT SPC(17-LEN(H1$));N1$;
13090 LPRINT SPC(16-LEN(N1$));D1$;
13100 LPRINT G2$;
13110 LPRINT SPC(37-LEN(G2$));H2$;
13120 LPRINT SPC(17-LEN(H2$));N2$;
13130 LPRINT SPC(16-LEN(N2$));D2$;
13140 LPRINT " "
13150 FOR L=1 TO C
13160 IF L<10 THEN LPRINT" ";L;CHR$(8);") ";C$(L); ELSE LPRINT L;CHR$(8);") ";C$(L);
13170 LPRINT SPC(32-LEN(C$(L)));:LPRINT USING FORMAT$;VAL(H$(L));
13180 LPRINT SPC(8);P$(L);
13190 LPRINT SPC(24-LEN(P$(L))-LEN(D$(L)));D$(L);
13200 FOR Z=1 TO 80
13210 LPRINT "_";
13220 NEXT Z
13230 LPRINT " "
13240 NEXT L
13250 GOTO 12030
14000 '
14010 REM ** OUTPUT TO SCREEN **
14020 '
14030 SCREEN 0,0,0:WIDTH 80:COLOR 15,0,0:CLS:LOCATE ,,0
14040 CLS
14050 G2$="───────────────────────────────" '31 characters
14060 N2$="───────────" '11 characters
14070 H2$="──────────" '10 characters
14080 D2$="──────────" '10 characters
14090 COLOR 12:PRINT G1$;
14100 COLOR 7:PRINT SPC(37-LEN(G1$));H1$;
14110 COLOR 14:PRINT SPC(17-LEN(H1$));N1$;
14120 COLOR 13:PRINT SPC(16-LEN(N1$));D1$;
14130 COLOR 12:PRINT G2$;
14140 COLOR 7:PRINT SPC(37-LEN(G2$));H2$;
14150 COLOR 14:PRINT SPC(17-LEN(H2$));N2$;
14160 COLOR 13:PRINT SPC(16-LEN(N2$));D2$;:PRINT
14170 POKE 91,4
14180 FOR L=1 TO C
14190 COLOR 2:IF L<10 THEN PRINT SPC(1);L;:LOCATE ,4:PRINT") ";:COLOR 4:PRINT C$(L); ELSE COLOR 2:PRINT L;:LOCATE ,4:PRINT") ";:COLOR 4:PRINT C$(L);
14200 COLOR 15:PRINT SPC(32-LEN(C$(L)));:PRINT USING FORMAT$;VAL(H$(L));
14210 COLOR 6:PRINT SPC(8);P$(L);
14220 COLOR 5:PRINT SPC(24-LEN(P$(L))-LEN(D$(L)));D$(L);" ";
14230 COLOR 3
14240 PRINT STRING$(80,CHR$(196));
14250 PG=PG+1
14260 IF PG/10=INT(PG/10) THEN GOSUB 19030
14270 NEXT L
14280 PRINT"Hit any key to CONTINUE";:WHILE INKEY$="":WEND:PG=0:POKE 91,1:GOTO 12030
15000 '
15010 REM ** END PROGRAM **
15020 '
15030 POKE 91,1:WIDTH 80:COLOR 2,1,1:CLS:COLOR 20,1,1:PRINT"THIS PROGRAM IS NOW TERMINATED":COLOR 2,1,1:END
16000 '
16010 REM ** DELETE ROUTINE **
16020 '
16030 FOR X=L TO C-1
16040 C$(X)=C$(X+1):H$(X)=H$(X+1):P$(X)=P$(X+1):D$(X)=D$(X+1)
16050 NEXT X
16060 C=C-1
16070 GOTO 9030
17000 '
17010 REM ** SAVING RECORDS TO SEQUENTIAL DATA FILE **
17020 '
17030 COLOR 2,1,1:CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE..."
17040 OPEN "SCR-DATA.BAS" FOR OUTPUT AS #1
17050 FOR L=1 TO C
17060 WRITE #1,C$(L),H$(L),P$(L),D$(L)
17070 NEXT L
17080 CLOSE
17090 CLS
17100 RETURN
18000 '
18010 REM ** ADDITION ROUTINE **
18020 '
18030 SCREEN 0:WIDTH 80
18040 C=C+1
18050 CLS
18060 LOCATE 3,1:COLOR 15,0,0:PRINT"GAME #";C:COLOR 10,0,0
18070 LOCATE 7,5:COLOR 6,0,0:PRINT"NAME OF GAME  ";:COLOR 14,0,0:ROW=7:COL=20:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:C$(C)=IN$
18080 LOCATE 9,5:COLOR 6,0,0:PRINT"HIGH SCORE    ";:COLOR 14,0,0:ROW=9:COL=20:MAXLEN=7:SELECT$=NUM$:GOSUB 22000:H$(C)=IN$
18090 LOCATE 11,5:COLOR 6,0,0:PRINT"PLAYER         ";:COLOR 14,0,0:ROW=11:COL=20:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:P$(C)=IN$
18100 LOCATE 13,5:COLOR 6,0,0:PRINT"DATE (MM/DD/YY)";:COLOR 14,0,0:ROW=13:COL=20:MAXLEN=8:SELECT$=NUM$+" ":GOSUB 22000:D$(C)=IN$
18110 LOCATE 16,5,0:COLOR 4,0,0:PRINT"Is the above information correct?";
18120 A$=INKEY$:IF A$="N" OR A$="n" THEN 18050
18130 IF A$<>"y" AND A$<>"Y" THEN 18120
18140 GOTO 9030
19000 '
19010 REM ** PAUSE WHILE SCROLLING **
19020 '
19030 LOCATE 25,1
19040 PRINT"Hit any key to continue scrolling...";:WHILE INKEY$="":WEND
19050 LOCATE 25,1:PRINT SPC(70);
19060 LOCATE 24,1
19070 RETURN
20000 '
20010 REM ** PRINT TO DISK **
20020 '
20030 COLOR 2,1,1:CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE..."
20040 OPEN "SCR-TEXT.DOC" FOR OUTPUT AS #2
20050 CLS:PRINT"Hit any key to PRINT TO TEXT FILE";:WHILE INKEY$="":WEND:CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE...";
20060 G2$="───────────────────────────────" '31 characters
20070 N2$="───────────" '11 characters
20080 H2$="──────────" '10 characters
20090 D2$="──────────" '10 characters
20100 PRINT #2,SPC(40-LEN(R3$)/2);R3$
20110 PRINT #2,SPC(40-LEN(DATE$)/2);DATE$:PRINT #2,"":PRINT #2,""
20120 PRINT #2,G1$;SPC(37-LEN(G1$));H1$;SPC(17-LEN(H1$));N1$;SPC(16-LEN(N2$));D1$
20130 PRINT #2,G2$;SPC(37-LEN(G2$));H2$;SPC(17-LEN(H2$));N2$;SPC(16-LEN(N2$));D2$;:PRINT #2,""
20140 FOR L=1 TO C
20150 IF L<10 THEN PRINT #2,SPC(1);STR$(L)+") "+C$(L);:ELSE PRINT #2,STR$(L)+") "+C$(L);
20160 PRINT #2,SPC(32-LEN(C$(L)));:PRINT #2,USING FORMAT$;VAL(H$(L));:PRINT #2,SPC(8);P$(L);SPC(23-LEN(P$(L))-LEN(D$(L)));D$(L):PRINT #2,STRING$(80,CHR$(196))
20170 NEXT L
20180 CLOSE #2
20190 GOTO 12030
21000 '
21010 REM ** ERROR HANDLING ROUTINE **
21020 '
21030 COLOR 2,1,1:CLS
21040 IF ERR<>73 THEN 21070:'Advanced feature
21050 LOCATE 12,28:PRINT"You chose the wrong version!";:WHILE INKEY$="":WEND:CLOSE
21060 RUN "SCR-MENU"
21070 IF ERR<>53 THEN 21100:'Bad file name
21080 IF ERL=7030 THEN RESUME 8000:ELSE LOCATE 12,20:PRINT"You've renamed a datafile - correct and rerun!";:WHILE INKEY$="":WEND:CLOSE
21090 RESUME 15030
21100 IF ERR<>17 THEN 21130:'Can't continue
21110 LOCATE 12,28:PRINT"Can't continue - will restart";:WHILE INKEY$="":WEND:CLOSE
21120 RUN
21130 IF ERR<>57 AND ERR<>24 AND ERR<>27 THEN 21160:'Printer failure
21140 LOCATE 12,22:PRINT"Printer failure - Correct and strike key";:WHILE INKEY$="":WEND
21150 RESUME 13030
21160 IF ERR<>61 THEN 21190:'Disk full
21170 LOCATE 12,23:PRINT"Disk full - Switch disks and strike key";:WHILE INKEY$="":WEND:CLOSE
21180 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030
21190 IF ERR<>72 THEN 21220:'Bad disk
21200 LOCATE 12,13:PRINT"Bad disk - Copy remaining files on good disk and reformat";:WHILE INKEY$="":WEND:CLOSE
21210 RESUME 15000
21220 IF ERR<>71 THEN 21260:'Drive open / No disk in drive
21230 LOCATE 12,19:PRINT"Drive open or no disk - correct and strike key";:WHILE INKEY$="":WEND:CLOSE
21240 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030:ELSE IF ERL=7030 OR ERL=7050 OR ERL=7060 THEN RESUME 7030
21250 IF ERL=7080 THEN RESUME 7080
21260 IF ERR<>70 THEN 21290:'Write protect tab on disk
21270 LOCATE 12,18:PRINT"Disk is write protected - correct and strike key";:WHILE INKEY$="":WEND:CLOSE
21280 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030
21290 IF ERR<>5 THEN 21320:'128K needed
21300 WIDTH 40:COLOR 14,1,1:CLS:LOCATE 12,1:PRINT"128K needed for 80 column mode - Sorry":WHILE INKEY$="":WEND:CLOSE
21310 END
21320 IF ERR<>9 THEN 21350:'Subscript out of range
21330 LOCATE 12,8:PRINT"Added too many records - will save current records - rerun program";:WHILE INKEY$="":WEND:CLOSE
21340 RESUME 17030
21350 IF ERR<>67 THEN 21380:'Too many files
21360 LOCATE 12,13:PRINT"Too many files on disk - switch disks for now then correct";:WHILE INKEY$="":WEND:CLOSE
21370 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030
21380 LOCATE 12,25:PRINT"Error #";ERR;" in line ";ERL;:WHILE INKEY$="":WEND:CLOSE
21390 RESUME 15000
22000 '
22010 REM ** SELECTIVE INPUT (Home Computer Magazine, Vol 5, No. 3, p. 72) **   22020 '
22020 '
22030 IN$="":PT=1
22040 LOCATE ROW,COL,0:PRINT IN$;SPACE$(MAXLEN-LEN(IN$));:LOCATE ROW,COL+(PT-1),1:K$="":WHILE K$="":K$=INKEY$:WEND
22050 IF K$=CHR$(13) THEN RETURN
22060 IF INSTR(SELECT$,K$) THEN IN$=LEFT$(IN$,PT-1)+K$+MID$(IN$,PT+1):PT=PT+1:IF PT>MAXLEN THEN PT=MAXLEN:GOTO 22040
22070 IF K$=CHR$(8) AND PT>1 THEN IN$=LEFT$(IN$,PT-2)+MID$(IN$,PT):PT=PT-1:GOTO 22040
22080 IF K$=CHR$(0)+CHR$(83) THEN IN$=LEFT$(IN$,PT-1)+MID$(IN$,PT+1):GOTO 22040
22090 IF K$=CHR$(0)+CHR$(82) AND LEN(IN$)<MAXLEN THEN IN$=LEFT$(IN$,PT-1)+" "+MID$(IN$,PT):GOTO 22040
22100 IF K$=CHR$(0)+CHR$(77) AND LEN(IN$)>=PT THEN PT=PT+1:IF PT>MAXLEN THEN PT=MAXLEN:BEEP:GOTO 22040
22110 IF K$=CHR$(0)+CHR$(75) AND LEN(IN$)>1 THEN PT=PT-1:IF PT<1 THEN PT=1 :GOTO 22040
22120 GOTO 22040
```

## SCR-COLY.BAS

```bas
1000 REM╔═════════════════════════════════════════════════════════════════════╗
1010 REM║                                                                     ║
1020 REM║   With Graphics         HIGH SCORE ORGANIZER        Color Version   ║
1030 REM║       Board                                         6/9/85    5.1   ║
1040 REM║                     WRITTEN BY DAVID J. FRIEDMAN                    ║
1050 REM║                                                                     ║
1060 REM║   On Saturday February 23 and Sunday February 24 of the year 1985   ║
1070 REM║                                                                     ║
1080 REM║                                                                     ║
1090 REM║       Dave Friedman was born in Bakersfield, California located     ║
1100 REM║     in Kern County near Death Valley on October 24, 1968.  When     ║
1110 REM║     he was just about three years old, he moved to a small town     ║
1120 REM║     in Wisconsin called Irma.  Its population was approximately     ║
1130 REM║     100 people.  It is located north of Wausau.  In 1976, David     ║
1140 REM║     again moved, not so far this time, to Eau Claire, a city in     ║
1150 REM║     Wisconsin with a population of about 50,000 people.  He now     ║
1160 REM║     currently resides at 3330 Riverview Drive where he stays up     ║
1170 REM║     all night and writes stupid remarks in his programs.  Thank     ║
1180 REM║     you for your patience for reading this, and I hope you will     ║
1190 REM║     find the program to be useful.                                  ║
1200 REM║     ┌───────────────────────────────┐     Dave Friedman             ║
1210 REM║     │   If you find this program to │     3330 Riverview Drive      ║
1220 REM║     │ be useful, a donation of five │     Eau Claire, Wisconsin     ║
1230 REM║     │ dollars would be appreciated. │     (715) 834-8045  54703     ║
1240 REM║     └───────────────────────────────┘                               ║
1250 REM╠═════════════════════════════════════════════════════════════════════╣
1260 REM║                        SUMMARY OF SUBROUTINES                       ║
1270 REM║                        ──────────────────────                       ║
1280 REM║                                                                     ║
1290 REM║     LINE NUMBERS      P U R P O S E   O F   S U B R O U T I N E     ║
1300 REM║     ────────────      ─────────────────────────────────────────     ║
1310 REM║     1000-1530         BIOGRAPHY AND SUMMARY OF SUBROUTINES          ║
1320 REM║     2000-2800         MARQUE TYPE INTRODUCTION-ONLY W/GRAPHICS      ║
1330 REM║     3000-3150         PROGRAM SETUP                                 ║
1340 REM║     4000-4060         DISPLAY DATE                                  ║
1350 REM║     5000-5260         CHANGE DATE                                   ║
1360 REM║     6000-6090         GET INFORMATION ABOUT RECORDS                 ║
1370 REM║     7000-7080         GET RECORDS FROM DATA FILE                    ║
1380 REM║     8000-8100         INPUT RECORDS                                 ║
1390 REM║     9000-9140         SORT RECORDS                                  ║
1400 REM║     10000-10280       CHECK RECORDS - ADD, DELETE, CORRECT, ABORT   ║
1410 REM║     11000-11150       CORRECT MISTAKES IN RECORD                    ║
1420 REM║     12000-12190       INITIALIZE PRINTING                           ║
1430 REM║     13000-13250       OUTPUT TO PRINTER                             ║
1440 REM║     14000-14280       PRINT TO SCREEN                               ║
1450 REM║     15000-15030       END PROGRAM                                   ║
1460 REM║     16000-16070       DELETE RECORD                                 ║
1470 REM║     17000-17100       SAVE RECORDS TO SEQUENTIAL DATAFILE           ║
1480 REM║     18000-18140       ADD RECORD                                    ║
1490 REM║     19000-19070       PAUSE WHILE SCROLLING                         ║
1500 REM║     20000-20190       PRINT OUTPUT TO DISK                          ║
1510 REM║     21000-21390       ERROR HANDLING ROUTINE                        ║
1520 REM║     22000-22120       SELECTIVE INPUT ROUTINE                       ║
1530 REM╚═════════════════════════════════════════════════════════════════════╝
2000 '
2010 REM ** MARQUE TYPE INTRODUCTION **
2020 '
2030 CLEAR ,,,24576:SCREEN 0,1,0:KEY OFF:WIDTH 80:COLOR 2,1,1:CLS:LOCATE 12,30,0:PRINT"ONE MOMENT PLEASE...":SCREEN ,,1,0:CLS:LOCATE 7,1:COLOR 4:ON ERROR GOTO 21000
2040 PRINT SPC(10);"*    *    *    *    *    *    *    *    *    *    *    *    "
2050 PRINT SPC(10);"   ┌─────────────────────┐    Registration # 000000000000  *"
2060 PRINT SPC(10);"   │";:COLOR 2:PRINT"Dave Friedman  Age 16";:COLOR 4:PRINT"│    If you find this program to   "
2070 PRINT SPC(10);"   │";:COLOR 2:PRINT"3330 Riverview Drive ";:COLOR 4:PRINT"│    be useful, you may register   "
2080 PRINT SPC(10);"   │";:COLOR 2:PRINT"Eau Claire, Wisconsin";:COLOR 4:PRINT"│    it for $5.  Any suggestions   "
2090 PRINT SPC(10);"*  │";:COLOR 2:PRINT"(715) 834-8045  54703";:COLOR 4:PRINT"│    or comments are welcomed.     "
2100 PRINT SPC(10);"   └─────────────────────┘                                 *"
2110 PRINT SPC(10);"     If you should damage this program, send a blank disk   "
2120 PRINT SPC(10);"   and mailer with postage.  If you find an error and you   "
2130 PRINT SPC(10);"   have a registered copy, send your disk with a complete   "
2140 PRINT SPC(10);"*  description of the problem and I will pay for postage.   "
2150 PRINT SPC(10);"    *    *    *    *    *    *    *    *    *    *    *    *":LOCATE 22,28:COLOR 14:PRINT"Press ANY KEY to Continue":COLOR 4
2160 SCREEN ,,2,0:CLS:LOCATE 7,1
2170 PRINT SPC(10);" *    *    *    *    *    *    *    *    *    *    *    *   "
2180 PRINT SPC(10);"   ┌─────────────────────┐    Registration # 000000000000   "
2190 PRINT SPC(10);"   │Dave Friedman  Age 16│    If you find this program to  *"
2200 PRINT SPC(10);"   │3330 Riverview Drive │    be useful, you may register   "
2210 PRINT SPC(10);"*  │Eau Claire, Wisconsin│    it for $5.  Any suggestions   "
2220 PRINT SPC(10);"   │(715) 834-8045  54703│    or comments are welcomed.     "
2230 PRINT SPC(10);"   └─────────────────────┘                                  "
2240 PRINT SPC(10);"     If you should damage this program, send a blank disk  *"
2250 PRINT SPC(10);"   and mailer with postage.  If you find an error and you   "
2260 PRINT SPC(10);"*  have a registered copy, send your disk with a complete   "
2270 PRINT SPC(10);"   description of the problem and I will pay for postage.   "
2280 PRINT SPC(10);"   *    *    *    *    *    *    *    *    *    *    *    * ":LOCATE 22,28:COLOR 14:PRINT"Press ANY KEY to Continue":COLOR 4
2290 SCREEN ,,3,0:CLS:LOCATE 7,1
2300 PRINT SPC(10);"  *    *    *    *    *    *    *    *    *    *    *    *  "
2310 PRINT SPC(10);"   ┌─────────────────────┐    Registration # 000000000000   "
2320 PRINT SPC(10);"   │Dave Friedman  Age 16│    If you find this program to   "
2330 PRINT SPC(10);"*  │3330 Riverview Drive │    be useful, you may register  *"
2340 PRINT SPC(10);"   │Eau Claire, Wisconsin│    it for $5.  Any suggestions   "
2350 PRINT SPC(10);"   │(715) 834-8045  54703│    or comments are welcomed.     "
2360 PRINT SPC(10);"   └─────────────────────┘                                  "
2370 PRINT SPC(10);"     If you should damage this program, send a blank disk   "
2380 PRINT SPC(10);"*  and mailer with postage.  If you find an error and you  *"
2390 PRINT SPC(10);"   have a registered copy, send your disk with a complete   "
2400 PRINT SPC(10);"   description of the problem and I will pay for postage.   "
2410 PRINT SPC(10);"  *    *    *    *    *    *    *    *    *    *    *    *  ":LOCATE 22,28:COLOR 14:PRINT"Press ANY KEY to Continue":COLOR 4
2420 SCREEN ,,4,0:CLS:LOCATE 7,1
2430 PRINT SPC(10);"   *    *    *    *    *    *    *    *    *    *    *    * "
2440 PRINT SPC(10);"   ┌─────────────────────┐    Registration # 000000000000   "
2450 PRINT SPC(10);"*  │Dave Friedman  Age 16│    If you find this program to   "
2460 PRINT SPC(10);"   │3330 Riverview Drive │    be useful, you may register   "
2470 PRINT SPC(10);"   │Eau Claire, Wisconsin│    it for $5.  Any suggestions  *"
2480 PRINT SPC(10);"   │(715) 834-8045  54703│    or comments are welcomed.     "
2490 PRINT SPC(10);"   └─────────────────────┘                                  "
2500 PRINT SPC(10);"*    If you should damage this program, send a blank disk   "
2510 PRINT SPC(10);"   and mailer with postage.  If you find an error and you   "
2520 PRINT SPC(10);"   have a registered copy, send your disk with a complete  *"
2530 PRINT SPC(10);"   description of the problem and I will pay for postage.   "
2540 PRINT SPC(10);" *    *    *    *    *    *    *    *    *    *    *    *   ":LOCATE 22,28:COLOR 14:PRINT"Press ANY KEY to Continue":COLOR 4
2550 SCREEN ,,5,0:CLS:LOCATE 7,1
2560 PRINT SPC(10);"    *    *    *    *    *    *    *    *    *    *    *    *"
2570 PRINT SPC(10);"*  ┌─────────────────────┐    Registration # 000000000000   "
2580 PRINT SPC(10);"   │Dave Friedman  Age 16│    If you find this program to   "
2590 PRINT SPC(10);"   │3330 Riverview Drive │    be useful, you may register   "
2600 PRINT SPC(10);"   │Eau Claire, Wisconsin│    it for $5.  Any suggestions   "
2610 PRINT SPC(10);"   │(715) 834-8045  54703│    or comments are welcomed.    *"
2620 PRINT SPC(10);"*  └─────────────────────┘                                  "
2630 PRINT SPC(10);"     If you should damage this program, send a blank disk   "
2640 PRINT SPC(10);"   and mailer with postage.  If you find an error and you   "
2650 PRINT SPC(10);"   have a registered copy, send your disk with a complete   "
2660 PRINT SPC(10);"   description of the problem and I will pay for postage.  *"
2670 PRINT SPC(10);"*    *    *    *    *    *    *    *    *    *    *    *    "
2680 LOCATE 22,28:COLOR 14:PRINT"Press ANY KEY to Continue"
2690 WHILE INKEY$=""
2700 SCREEN ,,,1
2710 FOR X=1 TO 100:NEXT
2720 SCREEN ,,,2
2730 FOR X=1 TO 100:NEXT
2740 SCREEN ,,,3
2750 FOR X=1 TO 100:NEXT
2760 SCREEN ,,,4
2770 FOR X=1 TO 100:NEXT
2780 SCREEN ,,,5
2790 FOR X=1 TO 100:NEXT
2800 WEND
3000 '
3010 REM ** SETUP **
3020 '
3030 SCREEN 0:WIDTH 80:CLEAR:KEY OFF:LOCATE,,0,0,31:RTR$=CHR$(17)+CHR$(196)+CHR$(217):KEY 3,"RUN"+CHR$(34)+"SCR-MENU"+CHR$(13):ON ERROR GOTO 21000
3040 FORMAT$="#########,":COLOR 3,0,0:CLS:COLOR 10,0,0:ALPHA$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz":NUM$="0123456789":CHAR$="!#$%^&*()-_=+[]{}|~;:`',.<>/?\"
3050 PRINT CHR$(201);STRING$(78,CHR$(205));CHR$(187);
3060 FOR X= 1 TO 7
3070 PRINT CHR$(186);:LOCATE ,80,0:PRINT CHR$(186);:NEXT X
3080 PRINT CHR$(200);STRING$(78,CHR$(205));CHR$(188);
3090 PRINT:PRINT:PRINT:PRINT:PRINT
3100 PRINT CHR$(201);STRING$(78,CHR$(205));CHR$(187);
3110 FOR L= 1 TO 7
3120 PRINT CHR$(186);:LOCATE ,80,0:PRINT CHR$(186);
3130 NEXT L
3140 PRINT CHR$(200);STRING$(78,CHR$(205));CHR$(188);
3150 HSO$="HIGH SCORE ORGANIZER":LOCATE 3,(40-(LEN(HSO$))/2)+1:COLOR 20,0,0:PRINT HSO$;:COLOR 10,0,0
4000 '
4010 REM ** DISPLAYS DATE **
4020 '
4030 LOCATE 6,5:COLOR 15,0,0:PRINT"Current date is ";:COLOR 6,0,0:PRINT DATE$;:COLOR 15,0,0:PRINT"."
4040 LOCATE 7,5,1:COLOR 15,0,0:PRINT "Change it (Y/N)?";
4050 ANS$=INKEY$:IF ANS$<>"y" AND ANS$<>"Y" AND ANS$<>"n" AND ANS$<>"N" THEN 4050
4060 IF ANS$="n" OR ANS$="N" THEN LOCATE 7,5,0:PRINT SPC(16);:COLOR 4,0,0:LOCATE 3,(40-(LEN(HSO$))/2)+1:PRINT HSO$;:GOTO 6030
5000 '
5010 REM ** CHANGES DATE **
5020 '
5030 IF ANS$="y" OR ANS$="Y" THEN  CLS:LOCATE 10,1,0:PRINT"Input date.";:COLOR 2,0,0
5040 LOCATE 10,15:PRINT"MONTH NUMBER (1-12)";:ROW=10:COL=35:MAXLEN=2:SELECT$="0123456789":IN$=LEFT$(DATE$,2):PT=1:GOSUB 22040:M=VAL(IN$):M$=IN$
5050 IF M<1 OR M>12 OR M<>INT(M) THEN 5040
5060 GOTO 5220
5070 IF M=2 THEN 5120
5080 IF M=1 OR M=3 OR M=5 OR M=7 OR M=8 OR M=10 OR M=12 THEN GOTO 5190
5090 LOCATE 12,15:PRINT"DAY (1-30)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22040:D=VAL(IN$):D$=IN$
5100 IF D<1 OR D>30 OR D<>INT(D) THEN 5070
5110 GOTO 5250
5120 IF Y/4=INT(Y/4) THEN 5160
5130 LOCATE 12,15:PRINT"DAY (1-28)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22040:D=VAL(IN$):D$=IN$
5140 IF D<1 OR D>28 OR D<>INT(D) THEN 5070
5150 GOTO 5250
5160 LOCATE 12,15:PRINT"DAY (1-29)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22040:D=VAL(IN$):D$=IN$
5170 IF D<1 OR D>29 OR D<>INT(D) THEN 5070
5180 GOTO 5250
5190 LOCATE 12,15:PRINT"DAY (1-31)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):GOSUB 22040:D=VAL(IN$):D$=IN$
5200 IF D<1 OR D>31 OR D<>INT(D) THEN 5050
5210 GOTO 5250
5220 LOCATE 14,15:PRINT"YEAR (1980-2099)";:ROW=14:COL=32:MAXLEN=4:SELECT$=NUM$:IN$=RIGHT$(DATE$,4):PT=1:GOSUB 22040:Y=VAL(IN$):Y$=IN$
5230 IF Y<1980 OR Y>2099 OR Y<>INT(Y) THEN 5220
5240 GOTO 5070
5250 DT$=M$+"-"+D$+"-"+Y$:DATE$=DT$
5260 GOTO 3040
6000 '
6010 REM *** INPUT ROUTINE ***
6020 '
6030 LOCATE 17,4:COLOR 3:PRINT"This program organizes the high scores of your home video games, saves";:LOCATE 18,4:PRINT"them to disk, and prints them out ";:COLOR 11:PRINT"[to your choice of screen or printer]";:COLOR 3:PRINT".";
6040 LOCATE 21,4:COLOR 9:PRINT"If you are using a PCjr, special instructions are enclosed in parenthesis."
6050 LOCATE 12,24,0:COLOR 14:PRINT"How many scores to organize?";
6060 ROW=12:COL=53:MAXLEN=3:SELECT$=NUM$:GOSUB 22000:C=VAL(IN$):LOCATE ,,0
6080 OPTION BASE 1:IF C+9=>255 THEN C9=255 ELSE C9=C+9
6090 DIM C$(C9),H$(C9),P$(C9),D$(C9),CTEMP$(C9),HTEMP$(C9),PTEMP$(C9),DTEMP$(C9)
7000 '
7010 REM ** GETS RECORDS FROM DATA FILE **
7020 '
7030 OPEN "SCR-DATA.BAS" FOR INPUT AS #1
7040 L=0
7050 C1=L:IF EOF(1) THEN CLOSE:GOTO 7080
7060 L=L+1:INPUT #1,C$(L),H$(L),P$(L),D$(L)
7070 GOTO 7050
7080 IF C-C1=0 THEN 9030
8000 '
8010 REM ** INPUT RECORDS **
8020 '
8030 COLOR 2,0,0:CLS:COLOR 20,0,0:IYR$="INPUT YOUR RECORDS":LOCATE 1,(20-(LEN(IYR$))/2+1):PRINT IYR$:COLOR 10,0,0
8040 FOR L=C1+1 TO C
8050 LOCATE 3,1:COLOR 15,0,0:PRINT"GAME #";L:COLOR 10,0,0
8060 LOCATE 7,5:COLOR 6,0,0:PRINT"NAME OF GAME   ";:COLOR 14,0,0:ROW=7:COL=21:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:C$(L)=IN$
8070 LOCATE 9,5:COLOR 6,0,0:PRINT"HIGH SCORE     ";:COLOR 14,0,0:ROW=9:COL=21:MAXLEN=7:SELECT$=NUM$:GOSUB 22000:H$(L)=IN$
8080 LOCATE 11,5:COLOR 6,0,0:PRINT"PLAYER         ";:COLOR 14,0,0:ROW=11:COL=21:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:P$(L)=IN$
8090 LOCATE 13,5:COLOR 6,0,0:PRINT"DATE (MM/DD/YY)";:COLOR 14,0,0:ROW=13:COL=21:MAXLEN=8:SELECT$=NUM$+"/":GOSUB 22000:D$(L)=IN$
8100 NEXT L
9000 '
9010 REM ** SORTS RECORDS BY GAME TITLE **
9020 '
9030 SCREEN 0:WIDTH 80:COLOR 15,0,0:CLS
9040 FOR X=1 TO C
9050 D=C
9060 LOCATE 12,30,0:COLOR 4:PRINT"SORTING:  "+STR$(X)+" OF";:COLOR 20:PRINT C;
9070 FOR Y=1 TO C
9080 IF C$(X)<C$(Y) THEN D=D-1
9090 NEXT Y
9100 CTEMP$(D)=C$(X):HTEMP$(D)=H$(X):PTEMP$(D)=P$(X):DTEMP$(D)=D$(X)
9110 NEXT X
9120 FOR L=1 TO C
9130 C$(L)=CTEMP$(L):H$(L)=HTEMP$(L):P$(L)=PTEMP$(L):D$(L)=DTEMP$(L)
9140 NEXT L
10000 '
10010 REM ** CHECK FOR MISTAKES, DELETIONS, ADDITIONS **
10020 '
10030 Z9=1:Z8=0
10040 Z3=0:FOR L=Z9 TO C
10050 IF Z8=1 THEN L=C:GOSUB 17040
10060 IF Z3=0 THEN WIDTH 80:COLOR 14,0,0:CLS:LOCATE 1,60,0:PRINT "RECORD #"+STR$(L)+" OF"+STR$(C):ELSE COLOR 14,0,0:LOCATE 1,60,0:PRINT"RECORD #"+STR$(L)+" OF"+STR$(C)
10070 LOCATE 2,1,0:COLOR 6,0,0:PRINT"On the game of ";:PRINT SPC(65);:LOCATE 2,16,0:COLOR 15,0,0:PRINT C$(L);:COLOR 6,0,0:PRINT ","
10080 LOCATE 4,1:COLOR 6,0,0:PRINT"the high score is ";:PRINT SPC(62);:LOCATE 4,19,0:COLOR 15,0,0:PRINT USING FORMAT$;VAL(H$(L));:COLOR 6,0,0:PRINT"."
10090 LOCATE 6,1:COLOR 6,0,0:PRINT"It was set by ";:PRINT SPC(66);:LOCATE 6,15,0:COLOR 15,0,0:PRINT P$(L)
10100 LOCATE 8,1:COLOR 6,0,0:PRINT"on the date of ";:PRINT SPC(65);:LOCATE 8,16:COLOR 15,0,0:PRINT D$(L);:COLOR 6,0,0:PRINT"."
10110 Z9=L+1:IF Z3<>0 THEN 10190 ELSE Z3=1
10120 LOCATE 11,24:COLOR 0,3,0:PRINT" 1 ";:COLOR 10,0,0:PRINT"  GO ON TO THE NEXT RECORD - IF LAST THEN CONTINUE"
10130 LOCATE 13,24:COLOR 0,3,0:PRINT" 2 ";:COLOR 10,0,0:PRINT"  SKIP TO LAST RECORD"
10140 LOCATE 15,24:COLOR 0,3,0:PRINT" 3 ";:COLOR 10,0,0:PRINT"  CORRECT THE ABOVE RECORD"
10150 LOCATE 17,24:COLOR 0,3,0:PRINT" 4 ";:COLOR 10,0,0:PRINT"  DELETE THE ABOVE RECORD"
10160 LOCATE 19,24:COLOR 0,3,0:PRINT" 5 ";:COLOR 10,0,0:PRINT"  ADD ANOTHER RECORD"
10170 LOCATE 21,24:COLOR 0,3,0:PRINT" 6 ";:COLOR 10,0,0:PRINT"  ";:COLOR 14,0,0:PRINT"ABORT PROGRAM"
10180 LOCATE 24,25:COLOR 15,0,0:PRINT"What is your choice?";
10190 A$=INKEY$
10200 IF Z8=1 THEN 10280
10210 IF A$="1" THEN NEXT L
10220 IF A$="2" THEN L=C:GOTO 10050
10230 IF A$="3" THEN CLS:GOTO 11030
10240 IF A$="4" THEN CLS:GOTO 16030
10250 IF A$="5" THEN CLS:GOTO 18030
10260 IF A$="6" THEN CLS:GOTO 15030
10270 IF A$<>"1" AND A$<>"2" AND A$<>"3" AND A$<>"4" AND A$<>"5" AND A$<>"6"THEN 10190
10280 GOSUB 17030:GOTO 12030
11000 '
11010 REM ** CORRECT RECORD **
11020 '
11030 CLS:LOCATE 1,1:COLOR 15,0,0:PRINT"GAME #";L:LOCATE 3,1:COLOR 6,0,0::PRINT"GAME     ";
11040 LOCATE 5,1:PRINT"SCORE    ";
11050 LOCATE 7,1:PRINT"PLAYER   ";
11060 LOCATE 9,1:PRINT"DATE     ";
11070 ROW=3:COL=8:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":COLOR 14:IN$=C$(L):PT=1:GOSUB 22040:TC$=IN$
11080 ROW=5:COL=8:MAXLEN=7:SELECT$=NUM$:IN$=H$(L):PT=1:GOSUB 22040:TH$=IN$
11090 ROW=7:COL=8:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":IN$=P$(L):PT=1:GOSUB 22040:TP$=IN$
11100 ROW=9:COL=8:MAXLEN=8:SELECT$=NUM$+"/":IN$=D$(L):PT=1:GOSUB 22040:TD$=IN$
11110 LOCATE 15,1:COLOR 4,0,0:PRINT"Is the above information correct?";
11120 A$=INKEY$
11130 IF A$="y" OR A$="Y" THEN CLS:H$(L)=TH$:P$(L)=TP$:D$(L)=TD$:IF TC$=C$(L) THEN GOTO 10040:ELSE C$(L)=TC$:GOTO 9030:'If NAME OF GAME is unchanged there is no need to resort
11140 IF A$="n" OR A$="N" THEN 11030
11150 GOTO 11120
12000 '
12010 REM ** PRINTING ROUTINE **
12020 '
12030 G1$="N A M E   O F   T H E   G A M E"  '3 spaces in between words
12040 N1$="HIGH SCORER"
12050 H1$="HIGH SCORE"
12060 D1$="D  A  T  E"
12070 R3$="THESE ARE THE HIGH SCORES AS OF"
12080 G2$="*******************************"  '31 characters
12090 N2$="***********"  '11 characters
12100 H2$="**********"  '10 characters
12110 D2$="**********"  '10 characters
12120 SCREEN 0:WIDTH 80:COLOR 7,0,0:CLS:LOCATE ,,0
12130 PRINT"To (";:COLOR 15:PRINT"S";:COLOR 7:PRINT")creen, (";:COLOR 15:PRINT"P";:COLOR 7:PRINT")rinter, (";:COLOR 15:PRINT"D";:COLOR 7:PRINT")isk, or (";:COLOR 15:PRINT"E";:COLOR 7:PRINT")nd?"
12140 A$=INKEY$:IF A$="S" OR A$="s" THEN 14030:ELSE IF A$="E" OR A$="e" THEN 15030
12150 IF A$<>"d" AND A$<>"D" AND A$<>"P" AND A$<>"p" THEN 12140:ELSE IF A$="D" OR A$="d" THEN 20030:ELSE CLS
12160 TOPAPAK$="TURN ON PRINTER AND PRESS A KEY":LOCATE 1,(40-(LEN(TOPAPAK$))/2)::COLOR 14:PRINT TOPAPAK$:LOCATE 3,1:COLOR 15:PRINT" [CTRL]";:COLOR 7:PRINT"+";:COLOR 15:PRINT"[NUM LOCK]";
12170 COLOR 4:PRINT" ([FN] Q) to PAUSE and ";:COLOR 15:PRINT"[CTRL]";:COLOR 7:PRINT"+";:COLOR 15:PRINT"[SCOLL LOCK]";
12180 COLOR 4:PRINT" ([FN] B) TO END"
12190 WHILE INKEY$="":WEND
13000 '
13010 REM ** OUTPUT TO PRINTER **
13020 '
13030 LPRINT " "
13040 LPRINT SPC(40-LEN(R3$)/2);R3$
13050 LPRINT SPC(40-LEN(DATE$)/2);DATE$:LPRINT:LPRINT
13060 LPRINT G1$;
13070 LPRINT SPC(37-LEN(G1$));H1$;
13080 LPRINT SPC(17-LEN(H1$));N1$;
13090 LPRINT SPC(16-LEN(N1$));D1$;
13100 LPRINT G2$;
13110 LPRINT SPC(37-LEN(G2$));H2$;
13120 LPRINT SPC(17-LEN(H2$));N2$;
13130 LPRINT SPC(16-LEN(N2$));D2$;
13140 LPRINT " "
13150 FOR L=1 TO C
13160 IF L<10 THEN LPRINT" ";L;CHR$(8);") ";C$(L); ELSE LPRINT L;CHR$(8);") ";C$(L);
13170 LPRINT SPC(32-LEN(C$(L)));:LPRINT USING FORMAT$;VAL(H$(L));
13180 LPRINT SPC(8);P$(L);
13190 LPRINT SPC(24-LEN(P$(L))-LEN(D$(L)));D$(L);
13200 FOR Z=1 TO 80
13210 LPRINT "_";
13220 NEXT Z
13230 LPRINT " "
13240 NEXT L
13250 GOTO 12030
14000 '
14010 REM ** OUTPUT TO SCREEN **
14020 '
14030 SCREEN 0,0,0:WIDTH 80:COLOR 15,0,0:CLS:LOCATE ,,0
14040 CLS
14050 G2$="───────────────────────────────" '31 characters
14060 N2$="───────────" '11 characters
14070 H2$="──────────" '10 characters
14080 D2$="──────────" '10 characters
14090 COLOR 12:PRINT G1$;
14100 COLOR 7:PRINT SPC(37-LEN(G1$));H1$;
14110 COLOR 14:PRINT SPC(17-LEN(H1$));N1$;
14120 COLOR 13:PRINT SPC(16-LEN(N1$));D1$;
14130 COLOR 12:PRINT G2$;
14140 COLOR 7:PRINT SPC(37-LEN(G2$));H2$;
14150 COLOR 14:PRINT SPC(17-LEN(H2$));N2$;
14160 COLOR 13:PRINT SPC(16-LEN(N2$));D2$;:PRINT
14170 POKE 91,4
14180 FOR L=1 TO C
14190 COLOR 2:IF L<10 THEN PRINT SPC(1);L;:LOCATE ,4:PRINT") ";:COLOR 4:PRINT C$(L); ELSE COLOR 2:PRINT L;:LOCATE ,4:PRINT") ";:COLOR 4:PRINT C$(L);
14200 COLOR 15:PRINT SPC(32-LEN(C$(L)));:PRINT USING FORMAT$;VAL(H$(L));
14210 COLOR 6:PRINT SPC(8);P$(L);
14220 COLOR 5:PRINT SPC(24-LEN(P$(L))-LEN(D$(L)));D$(L);" ";
14230 COLOR 3
14240 PRINT STRING$(80,CHR$(196));
14250 PG=PG+1
14260 IF PG/10=INT(PG/10) THEN GOSUB 19030
14270 NEXT L
14280 PRINT"Hit any key to CONTINUE";:WHILE INKEY$="":WEND:PG=0:POKE 91,1:GOTO 12030
15000 '
15010 REM ** END PROGRAM **
15020 '
15030 POKE 91,1:WIDTH 80:COLOR 2,1,1:CLS:COLOR 20,1,1:PRINT"THIS PROGRAM IS NOW TERMINATED":COLOR 2,1,1:END
16000 '
16010 REM ** DELETE ROUTINE **
16020 '
16030 FOR X=L TO C-1
16040 C$(X)=C$(X+1):H$(X)=H$(X+1):P$(X)=P$(X+1):D$(X)=D$(X+1)
16050 NEXT X
16060 C=C-1
16070 GOTO 9030
17000 '
17010 REM ** SAVING RECORDS TO SEQUENTIAL DATA FILE **
17020 '
17030 COLOR 2,1,1:CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE..."
17040 OPEN "SCR-DATA.BAS" FOR OUTPUT AS #1
17050 FOR L=1 TO C
17060 WRITE #1,C$(L),H$(L),P$(L),D$(L)
17070 NEXT L
17080 CLOSE
17090 CLS
17100 RETURN
18000 '
18010 REM ** ADDITION ROUTINE **
18020 '
18030 SCREEN 0:WIDTH 80
18040 C=C+1
18050 CLS
18060 LOCATE 3,1:COLOR 15,0,0:PRINT"GAME #";C:COLOR 10,0,0
18070 LOCATE 7,5:COLOR 6,0,0:PRINT"NAME OF GAME  ";:COLOR 14,0,0:ROW=7:COL=20:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:C$(C)=IN$
18080 LOCATE 9,5:COLOR 6,0,0:PRINT"HIGH SCORE    ";:COLOR 14,0,0:ROW=9:COL=20:MAXLEN=7:SELECT$=NUM$:GOSUB 22000:H$(C)=IN$
18090 LOCATE 11,5:COLOR 6,0,0:PRINT"PLAYER         ";:COLOR 14,0,0:ROW=11:COL=20:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:P$(C)=IN$
18100 LOCATE 13,5:COLOR 6,0,0:PRINT"DATE (MM/DD/YY)";:COLOR 14,0,0:ROW=13:COL=20:MAXLEN=8:SELECT$=NUM$+" ":GOSUB 22000:D$(C)=IN$
18110 LOCATE 16,5,0:COLOR 4,0,0:PRINT"Is the above information correct?";
18120 A$=INKEY$:IF A$="N" OR A$="n" THEN 18050
18130 IF A$<>"y" AND A$<>"Y" THEN 18120
18140 GOTO 9030
19000 '
19010 REM ** PAUSE WHILE SCROLLING **
19020 '
19030 LOCATE 25,1
19040 PRINT"Hit any key to continue scrolling...";:WHILE INKEY$="":WEND
19050 LOCATE 25,1:PRINT SPC(70);
19060 LOCATE 24,1
19070 RETURN
20000 '
20010 REM ** PRINT TO DISK **
20020 '
20030 COLOR 2,1,1:CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE..."
20040 OPEN "SCR-TEXT.DOC" FOR OUTPUT AS #2
20050 CLS:PRINT"Hit any key to PRINT TO TEXT FILE";:WHILE INKEY$="":WEND:CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE...";
20060 G2$="───────────────────────────────" '31 characters
20070 N2$="───────────" '11 characters
20080 H2$="──────────" '10 characters
20090 D2$="──────────" '10 characters
20100 PRINT #2,SPC(40-LEN(R3$)/2);R3$
20110 PRINT #2,SPC(40-LEN(DATE$)/2);DATE$:PRINT #2,"":PRINT #2,""
20120 PRINT #2,G1$;SPC(37-LEN(G1$));H1$;SPC(17-LEN(H1$));N1$;SPC(16-LEN(N2$));D1$
20130 PRINT #2,G2$;SPC(37-LEN(G2$));H2$;SPC(17-LEN(H2$));N2$;SPC(16-LEN(N2$));D2$;:PRINT #2,""
20140 FOR L=1 TO C
20150 IF L<10 THEN PRINT #2,SPC(1);STR$(L)+") "+C$(L);:ELSE PRINT #2,STR$(L)+") "+C$(L);
20160 PRINT #2,SPC(32-LEN(C$(L)));:PRINT #2,USING FORMAT$;VAL(H$(L));:PRINT #2,SPC(8);P$(L);SPC(23-LEN(P$(L))-LEN(D$(L)));D$(L):PRINT #2,STRING$(80,CHR$(196))
20170 NEXT L
20180 CLOSE #2
20190 GOTO 12030
21000 '
21010 REM ** ERROR HANDLING ROUTINE **
21020 '
21030 COLOR 2,1,1:CLS
21040 IF ERR<>73 THEN 21070:'Advanced feature
21050 LOCATE 12,28:PRINT"You chose the wrong version!";:WHILE INKEY$="":WEND:CLOSE
21060 RUN "SCR-MENU"
21070 IF ERR<>53 THEN 21100:'Bad file name
21080 IF ERL=7030 THEN RESUME 8000:ELSE LOCATE 12,20:PRINT"You've renamed a datafile - correct and rerun!";:WHILE INKEY$="":WEND:CLOSE
21090 RESUME 15030
21100 IF ERR<>17 THEN 21130:'Can't continue
21110 LOCATE 12,28:PRINT"Can't continue - will restart";:WHILE INKEY$="":WEND:CLOSE
21120 RUN
21130 IF ERR<>57 AND ERR<>24 AND ERR<>27 THEN 21160:'Printer failure
21140 LOCATE 12,22:PRINT"Printer failure - Correct and strike key";:WHILE INKEY$="":WEND
21150 RESUME 13030
21160 IF ERR<>61 THEN 21190:'Disk full
21170 LOCATE 12,23:PRINT"Disk full - Switch disks and strike key";:WHILE INKEY$="":WEND:CLOSE
21180 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030
21190 IF ERR<>72 THEN 21220:'Bad disk
21200 LOCATE 12,13:PRINT"Bad disk - Copy remaining files on good disk and reformat";:WHILE INKEY$="":WEND:CLOSE
21210 RESUME 15000
21220 IF ERR<>71 THEN 21260:'Drive open / No disk in drive
21230 LOCATE 12,19:PRINT"Drive open or no disk - correct and strike key";:WHILE INKEY$="":WEND:CLOSE
21240 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030:ELSE IF ERL=7030 OR ERL=7050 OR ERL=7060 THEN RESUME 7030
21250 IF ERL=7080 THEN RESUME 7080
21260 IF ERR<>70 THEN 21290:'Write protect tab on disk
21270 LOCATE 12,18:PRINT"Disk is write protected - correct and strike key";:WHILE INKEY$="":WEND:CLOSE
21280 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030
21290 IF ERR<>5 THEN 21320:'128K needed
21300 WIDTH 40:COLOR 14,1,1:CLS:LOCATE 12,1:PRINT"128K needed for 80 column mode - Sorry":WHILE INKEY$="":WEND:CLOSE
21310 END
21320 IF ERR<>9 THEN 21350:'Subscript out of range
21330 LOCATE 12,8:PRINT"Added too many records - will save current records - rerun program";:WHILE INKEY$="":WEND:CLOSE
21340 RESUME 17030
21350 IF ERR<>67 THEN 21380:'Too many files
21360 LOCATE 12,13:PRINT"Too many files on disk - switch disks for now then correct";:WHILE INKEY$="":WEND:CLOSE
21370 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030
21380 LOCATE 12,25:PRINT"Error #";ERR;" in line ";ERL;:WHILE INKEY$="":WEND:CLOSE
21390 RESUME 15000
22000 '
22010 REM ** SELECTIVE INPUT (Home Computer Magazine, Vol 5, No. 3, p. 72) **   22020 '
22020 '
22030 IN$="":PT=1
22040 LOCATE ROW,COL,0:PRINT IN$;SPACE$(MAXLEN-LEN(IN$));:LOCATE ROW,COL+(PT-1),1:K$="":WHILE K$="":K$=INKEY$:WEND
22050 IF K$=CHR$(13) THEN RETURN
22060 IF INSTR(SELECT$,K$) THEN IN$=LEFT$(IN$,PT-1)+K$+MID$(IN$,PT+1):PT=PT+1:IF PT>MAXLEN THEN PT=MAXLEN:GOTO 22040
22070 IF K$=CHR$(8) AND PT>1 THEN IN$=LEFT$(IN$,PT-2)+MID$(IN$,PT):PT=PT-1:GOTO 22040
22080 IF K$=CHR$(0)+CHR$(83) THEN IN$=LEFT$(IN$,PT-1)+MID$(IN$,PT+1):GOTO 22040
22090 IF K$=CHR$(0)+CHR$(82) AND LEN(IN$)<MAXLEN THEN IN$=LEFT$(IN$,PT-1)+" "+MID$(IN$,PT):GOTO 22040
22100 IF K$=CHR$(0)+CHR$(77) AND LEN(IN$)>=PT THEN PT=PT+1:IF PT>MAXLEN THEN PT=MAXLEN:BEEP:GOTO 22040
22110 IF K$=CHR$(0)+CHR$(75) AND LEN(IN$)>1 THEN PT=PT-1:IF PT<1 THEN PT=1 :GOTO 22040
22120 GOTO 22040
```

## SCR-DATA.BAS

```bas
"Buck Rogers Planet of Zoom","119719","Dave","06/25/84"
"Burgertime","602700","Eric","05/02/84"
"Cosmic Avenger","65600","Eric","05/28/84"
"Donkey Kong","234400","Dave","06/19/84"
"Donkey Kong Junior","308000","Dave","08/14/84"
"Gateway to Apshai","543620","Dave","06/25/84"
"Gorf","37830","Dave","08/20/84"
"Lady Bug","1050110","Eric",""
"Miner 2049er","212525","Dave",""
"Montezuma's Revenge","357950","Eric","11/09/84"
"Q*bert","212025","Dave","10/03/83"
"Space Panic","177480","Eric","08/14/83"
"Turbo","136762","Eric","07/08/84"
```

## SCR-MENU.BAS

```bas
10 CLS:CLEAR:WIDTH 80:COLOR 20,1,1:KEY OFF:CLS:FOR X=1 TO 5:KEY (X) ON:NEXT:ON KEY (1) GOSUB 320:ON KEY (2) GOSUB 330:ON KEY (3) GOSUB 340:ON KEY (4) GOSUB 350:ON KEY (5) GOSUB 360
20 HSO$="MENU FOR HIGH SCORE ORGANIZER":LOCATE 1,25:PRINT HSO$:PRINT
30 LOCATE ,16:COLOR 2:PRINT" 1)  ";:COLOR 6:PRINT"Color Monitor ";:COLOR 7:PRINT"with";:COLOR 6:PRINT" Graphics Board"
40 LOCATE ,16:COLOR 2:PRINT" 2)  ";:COLOR 14:PRINT"Color Monitor ";:COLOR 7:PRINT"without";:COLOR 14:PRINT" Graphics Board"
50 LOCATE ,16:COLOR 2:PRINT" 3)  ";:COLOR 6:PRINT"Monochrome Monitor ";:COLOR 7:PRINT"with";:COLOR 6:PRINT" Graphics Board"
60 LOCATE ,16:COLOR 2:PRINT" 4)  ";:COLOR 14:PRINT"Monochrome Monitor ";:COLOR 7:PRINT"without";:COLOR 14:PRINT" Graphics Board"
70 LOCATE ,16:COLOR 2:PRINT" 5)  ";:COLOR 6:PRINT"Abort Program":PRINT:PRINT
80 A$=INKEY$
90 COLOR 15:LOCATE ,16:PRINT"What is your choice?";:IF A$<"1" OR A$>"5" THEN 80
100 IF A$="5" THEN CLS:KEY 5,"LOAD"+CHR$(34):NEW
110 IF A$="3" OR A$="4" THEN COLOR 15,0,0:ELSE COLOR 2,1,1
120 CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE..."
130 IF A$="1" THEN RUN "scr-coly.bas"
140 IF A$="2" THEN COLOR 2,0,0:GOSUB 170:RUN "scr-coln.bas"
150 IF A$="3" THEN RUN "scr-mony.bas"
160 IF A$="4" THEN COLOR 15,0,0:GOSUB 170:RUN "scr-monn.bas"
170 CLS:IF A$="4" THEN COL1=15:COL2=15:ELSE COL1=2:COL2=3
180 LOCATE 6,11:PRINT"╔══════════════════════════════════════════════════════════╗"
190 LOCATE 7,11:PRINT"║  ┌─────────────────────┐    Registration # 000000000000  ║"
200 LOCATE 8,11:PRINT"║  │";:COLOR COL2:PRINT"Dave Friedman  Age 16";:COLOR COL1:PRINT"│    If you find this program to  ║"
210 LOCATE 9,11:PRINT"║  │";:COLOR COL2:PRINT"3330 Riverview Drive ";:COLOR COL1:PRINT"│    be useful, you may register  ║"
220 LOCATE 10,11:PRINT"║  │";:COLOR COL2:PRINT"Eau Claire, Wisconsin";:COLOR COL1:PRINT"│    it for $5.  Any suggestions  ║"
230 LOCATE 11,11:PRINT"║  │";:COLOR COL2:PRINT"(715) 834-8045  54703";:COLOR COL1:PRINT"│    or comments are welcomed.    ║"
240 LOCATE 12,11:PRINT"║  └─────────────────────┘                                 ║"
250 LOCATE 13,11:PRINT"║    If you should damage this program, send a blank disk  ║"
260 LOCATE 14,11:PRINT"║  and mailer with postage.  If you find an error and you  ║"
270 LOCATE 15,11:PRINT"║  have a registered copy, send your disk with a complete  ║"
280 LOCATE 16,11:PRINT"║  description of the problem and I will pay for postage.  ║"
290 LOCATE 17,11:PRINT"╚══════════════════════════════════════════════════════════╝"
300 FOR X=1 TO 3500:IF INKEY$="" THEN NEXT ELSE X=3500
310 RETURN
320 A$="1":GOTO 90
330 A$="2":GOTO 90
340 A$="3":GOTO 90
350 A$="4":GOTO 90
360 A$="5":GOTO 90
```

## SCR-MONN.BAS

```bas
1000 REM╔═════════════════════════════════════════════════════════════════════╗
1010 REM║                                                                     ║
1020 REM║   Without Graphics      HIGH SCORE ORGANIZER   Monochrome Version   ║
1030 REM║        Board                                   6/9/85         5.1   ║
1040 REM║                     WRITTEN BY DAVID J. FRIEDMAN                    ║
1050 REM║                                                                     ║
1060 REM║   On Saturday February 23 and Sunday February 24 of the year 1985   ║
1070 REM║                                                                     ║
1080 REM║                                                                     ║
1090 REM║       Dave Friedman was born in Bakersfield, California located     ║
1100 REM║     in Kern County near Death Valley on October 24, 1968.  When     ║
1110 REM║     he was just about three years old, he moved to a small town     ║
1120 REM║     in Wisconsin called Irma.  Its population was approximately     ║
1130 REM║     100 people.  It is located north of Wausau.  In 1976, David     ║
1140 REM║     again moved, not so far this time, to Eau Claire, a city in     ║
1150 REM║     Wisconsin with a population of about 50,000 people.  He now     ║
1160 REM║     currently resides at 3330 Riverview Drive where he stays up     ║
1170 REM║     all night and writes stupid remarks in his programs.  Thank     ║
1180 REM║     you for your patience for reading this, and I hope you will     ║
1190 REM║     find the program to be useful.                                  ║
1200 REM║     ┌───────────────────────────────┐     Dave Friedman             ║
1210 REM║     │   If you find this program to │     3330 Riverview Drive      ║
1220 REM║     │ be useful, a donation of five │     Eau Claire, Wisconsin     ║
1230 REM║     │ dollars would be appreciated. │     (715) 834-8045  54703     ║
1240 REM║     └───────────────────────────────┘                               ║
1250 REM╠═════════════════════════════════════════════════════════════════════╣
1260 REM║                        SUMMARY OF SUBROUTINES                       ║
1270 REM║                        ──────────────────────                       ║
1280 REM║                                                                     ║
1290 REM║     LINE NUMBERS      P U R P O S E   O F   S U B R O U T I N E     ║
1300 REM║     ────────────      ─────────────────────────────────────────     ║
1310 REM║     1000-1540         BIOGRAPHY AND SUMMARY OF SUBROUTINES          ║
1320 REM║     2000-2790         MARQUE TYPE INTRODUCTION-ONLY W/GRAPHICS      ║
1330 REM║     3000-3150         PROGRAM SETUP                                 ║
1340 REM║     4000-4060         DISPLAY DATE                                  ║
1350 REM║     5000-5260         CHANGE DATE                                   ║
1360 REM║     6000-6150         GET INFORMATION ABOUT RECORDS                 ║
1370 REM║     7000-7090         GET RECORDS FROM DATA FILE                    ║
1380 REM║     8000-8100         INPUT RECORDS                                 ║
1390 REM║     9000-9140         SORT RECORDS                                  ║
1400 REM║     10000-10280       CHECK RECORDS - ADD, DELETE, CORRECT, ABORT   ║
1410 REM║     11000-11150       CORRECT MISTAKES IN RECORD                    ║
1420 REM║     12000-12190       INITIALIZE PRINTING                           ║
1430 REM║     13000-13250       OUTPUT TO PRINTER                             ║
1440 REM║     14000-14280       PRINT TO SCREEN                               ║
1450 REM║     15000-15030       END PROGRAM                                   ║
1460 REM║     16000-16070       DELETE RECORD                                 ║
1470 REM║     17000-17100       SAVE RECORDS TO SEQUENTIAL DATAFILE           ║
1480 REM║     18000-18150       ADD RECORD                                    ║
1490 REM║     19000-19070       PAUSE WHILE SCROLLING                         ║
1500 REM║     20000-20190       PRINT OUTPUT TO DISK                          ║
1510 REM║     21000-21390       ERROR HANDLING ROUTINE                        ║
1520 REM║     22000-22120       SELECTIVE INPUT ROUTINE                       ║
1530 REM║                                                                     ║
1540 REM╚═════════════════════════════════════════════════════════════════════╝
3000 '
3010 REM ** SETUP **
3020 '
3030 WIDTH 80:CLEAR:KEY OFF:LOCATE ,,0,0,31:RTR$=CHR$(17)+CHR$(196)+CHR$(217):KEY 3,"RUN"+CHR$(34)+"SCR-MENU"+CHR$(13):ON ERROR GOTO 21030
3040 FORMAT$="#########,":COLOR 15,0,0:CLS:ALPHA$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz":NUM$="0123456789":CHAR$="!@#$%^&*()-_=+[]{}|~;:`',.<>/?\"
3050 PRINT CHR$(201);STRING$(78,CHR$(205));CHR$(187);
3060 FOR X=1 TO 7
3070 PRINT CHR$(186);:LOCATE ,80,0:PRINT CHR$(186);:NEXT X
3080 PRINT CHR$(200);STRING$(78,CHR$(205));CHR$(188);
3090 PRINT:PRINT:PRINT:PRINT:PRINT
3100 PRINT CHR$(201);STRING$(78,CHR$(205));CHR$(187);
3110 FOR L= 1 TO 7
3120 PRINT CHR$(186);:LOCATE ,80,0:PRINT CHR$(186);
3130 NEXT L
3140 PRINT CHR$(200);STRING$(78,CHR$(205));CHR$(188);
3150 HSO$="HIGH SCORE ORGANIZER":LOCATE 3,(40-(LEN(HSO$))/2)+1:COLOR 31,0,0:PRINT HSO$;:COLOR 15,0,0
4000 '
4010 REM ** DISPLAYS DATE **
4020 '
4030 LOCATE 6,5:PRINT"Current date is ";:PRINT DATE$;:PRINT"."
4040 LOCATE 7,5,1:PRINT "Change it (Y/N)?";
4050 ANS$=INKEY$:IF ANS$<>"y" AND ANS$<>"Y" AND ANS$<>"n" AND ANS$<>"N" THEN 4050
4060 IF ANS$="n" OR ANS$="N" THEN LOCATE 7,5,0:PRINT SPC(16);:LOCATE 3,(40-(LEN(HSO$))/2)+1:PRINT HSO$:GOTO 6030
5000 '
5010 REM ** CHANGES DATE **
5020 '
5030 IF ANS$="y" OR ANS$="Y" THEN CLS:LOCATE 10,1,0:PRINT"Input date.";
5040 LOCATE 10,15:PRINT"MONTH NUMBER (1-12)";:ROW=10:COL=36:MAXLEN=2:SELECT$=NUM$:IN$=LEFT$(DATE$,2):PT=1:GOSUB 22060:M=VAL(IN$):M$=IN$
5050 IF M<1 OR M>12 OR M<>INT(M) THEN 5040
5060 GOTO 5220
5070 IF M=2 THEN 5120
5080 IF M=1 OR M=3 OR M=5 OR M=7 OR M=8 OR M= 10 OR M=12 THEN GOTO 5190
5090 LOCATE 12,15:PRINT"DAY (1-30)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22060:D=VAL(IN$):D$=IN$
5100 IF D<1 OR D>30 OR D<>INT(D) THEN 5070
5110 GOTO 5250
5120 IF Y/4=INT(Y/4) THEN 5160
5130 LOCATE 12,15:PRINT"DAY (1-28)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22060:D=VAL(IN$):D$=IN$
5140 IF D<1 OR D>28 OR D<>INT(D) THEN 5070
5150 GOTO 5250
5160 LOCATE 12,15:PRINT"DAY (1-29)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22060:D=VAL(IN$):D$=IN$
5170 IF D<1 OR D>29 OR D<>INT(D) THEN 5070
5180 GOTO 5250
5190 LOCATE 12,15:PRINT"DAY (1-31)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22060:D=VAL(IN$):D$=IN$
5200 IF D<1 OR D>31 OR D<>INT(D) THEN 5050
5210 GOTO 5250
5220 LOCATE 14,15:PRINT"YEAR (1980-2099)";:ROW=14:COL=32:MAXLEN=4:SELECT$=NUM$:IN$=RIGHT$(DATE$,4):PT=1:GOSUB 22060:Y=VAL(IN$):Y$=IN$
5230 IF Y<1980 OR Y>2099 OR Y<>INT(Y) THEN 5220
5240 GOTO 5070
5250 DT$=M$+"-"+D$+"-"+Y$:DATE$=DT$
5260 GOTO 3040
6000 '
6010 REM *** INPUT ROUTINE ***
6020 '
6030 LOCATE 17,4:PRINT"This program organizes the high scores of your home video games, saves";:LOCATE 18,4:PRINT"them to disk, and prints them out [to your choice of screen or printer].";
6040 LOCATE 21,4:PRINT"If you are using a PCjr, special instructions are enclosed in parenthesis."
6050 LOCATE 12,24,0:PRINT"How many scores to organize?";
6060 ROW=12:COL=53:MAXLEN=3:SELECT$=NUM$:GOSUB 22000:C=VAL(IN$):LOCATE ,,0
6080 OPTION BASE 1:IF C+9=>255 THEN C9=255 ELSE C9=C+9
6090 DIM C$(C9),H$(C9),P$(C9),D$(C9),CTEMP$(C9),HTEMP$(C9),PTEMP$(C9),DTEMP$(C9)
7000 '
7010 REM ** GETS RECORDS FROM DATA FILE **
7020 '
7030 OPEN "SCR-DATA.BAS" FOR INPUT AS #1
7040 L=0
7050 C1=L:IF EOF(1) THEN CLOSE:GOTO 8030
7060 L=L+1:INPUT #1,C$(L),H$(L),P$(L),D$(L)
7070 GOTO 7050
8000 '
8010 REM ** INPUT RECORDS **
8020 '
8030 IF C-C1=0 THEN 9030
8040 COLOR 15,0,0:CLS:COLOR 31,0,0:IYR$="INPUT YOUR RECORDS":LOCATE 1,(20-(LEN(IYR$))/2+1):PRINT IYR$:COLOR 15,0,0
8050 LOCATE 3,1:COLOR 15,0,0:PRINT"GAME #";L:COLOR 10,0,0
8060 LOCATE 7,5:COLOR 15,0,0:PRINT"NAME OF GAME   ";:ROW=7:COL=21:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:C$(L)=IN$
8070 LOCATE 9,5:COLOR 15,0,0:PRINT"HIGH SCORE     ";:ROW=9:COL=21:MAXLEN=7:SELECT$=NUM$:GOSUB 22000:H$(L)=IN$
8080 LOCATE 11,5:COLOR 15,0,0:PRINT"PLAYER         ";:ROW=11:COL=21:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:P$(L)=IN$
8090 LOCATE 13,5:COLOR 15,0,0:PRINT"DATE (MM/DD/YY)";:ROW=13:COL=21:MAXLEN=8:SELECT$=NUM$+"/":GOSUB 22000:D$(L)=IN$
8100 NEXT L
9000 '
9010 REM ** SORTS RECORDS BY GAME TITLE **
9020 '
9030 SCREEN 0:WIDTH 80:CLS
9040 FOR X=1 TO C
9050 D=C
9060 LOCATE 12,30,0:COLOR 15:PRINT"SORTING:  "+STR$(X)+" OF";:COLOR 31:PRINT C;:COLOR 15
9070 FOR Y=1 TO C
9080 IF C$(X)<C$(Y) THEN D=D-1
9090 NEXT Y
9100 CTEMP$(D)=C$(X):HTEMP$(D)=H$(X):PTEMP$(D)=P$(X):DTEMP$(D)=D$(X)
9110 NEXT X
9120 FOR L=1 TO C
9130 C$(L)=CTEMP$(L):H$(L)=HTEMP$(L):P$(L)=PTEMP$(L):D$(L)=DTEMP$(L)
9140 NEXT L
10000 '
10010 REM ** CHECK FOR MISTAKES, DELETIONS, ADDITIONS **
10020 '
10030 Z9=1:Z8=0
10040 Z3=0:FOR L=Z9 TO C
10050 IF Z8=1 THEN L=C:GOSUB 17030
10060 IF Z3=0 THEN WIDTH 80:COLOR 15:CLS:LOCATE 1,60,0:PRINT"RECORD #"+STR$(L)+" OF"+STR$(C):ELSE COLOR 15:LOCATE 1,60,0:PRINT"RECORD #"+STR$(L)+" OF"+STR$(C)
10070 LOCATE 2,1,0:PRINT"On the game of ";:PRINT SPC(65);:LOCATE 2,16,0:COLOR 1:PRINT C$(L);:COLOR 15:PRINT ","
10080 LOCATE 4,1:PRINT"the high score is ";:PRINT SPC(62);:LOCATE 4,19,0:COLOR 1:PRINT USING FORMAT$;VAL(H$(L));:COLOR 15:PRINT"."
10090 LOCATE 6,1:PRINT"It was set by ";:PRINT SPC(66);:LOCATE 6,15,0:COLOR 1:PRINT P$(L):COLOR 15
10100 LOCATE 8,1:PRINT"on the date of ";:PRINT SPC(65);:LOCATE 8,16,0:COLOR 1:PRINT D$(L);:COLOR 15:PRINT"."
10110 Z9=L+1:IF Z3<>0 THEN 10190 ELSE Z3=1
10120 LOCATE 11,24:COLOR 0,15,0:PRINT" 1 ";:COLOR 15,0,0:PRINT"  GO ON TO THE NEXT RECORD - IF LAST THEN CONTINUE"
10130 LOCATE 13,24:COLOR 0,15,0:PRINT" 2 ";:COLOR 15,0,0:PRINT"  SKIP TO LAST RECORD"
10140 LOCATE 15,24:COLOR 0,15,0:PRINT" 3 ";:COLOR 15,0,0:PRINT"  CORRECT THE ABOVE RECORD"
10150 LOCATE 17,24:COLOR 0,15,0:PRINT" 4 ";:COLOR 15,0,0:PRINT"  DELETE THE ABOVE RECORD"
10160 LOCATE 19,24:COLOR 0,15,0:PRINT" 5 ";:COLOR 15,0,0:PRINT"  ADD ANOTHER RECORD"
10170 LOCATE 21,24:COLOR 0,15,0:PRINT" 6 ";:COLOR 15,0,0:PRINT"  ";:COLOR 9:PRINT"ABORT PROGRAM":COLOR 15
10180 LOCATE 24,25:PRINT"What is your choice?";
10190 A$=INKEY$
10200 IF Z8=1 THEN 10280
10210 IF A$="1" THEN NEXT L
10220 IF A$="2" THEN L=C:GOTO 10050
10230 IF A$="3" THEN CLS:GOTO 11030
10240 IF A$="4" THEN CLS:GOTO 16030
10250 IF A$="5" THEN CLS:GOTO 18030
10260 IF A$="6" THEN CLS:GOTO 15030
10270 IF A$<>"1" AND A$<>"2" AND A$<>"3" AND A$<>"4" AND A$<>"5" AND A$<>"6" THEN 10190
10280 GOSUB 17030:GOTO 12030
11000 '
11010 REM ** CORRECT RECORD **
11020 '
11030 CLS:LOCATE 1,1:PRINT"GAME #";L:LOCATE 3,1:PRINT"GAME     ";
11040 LOCATE 5,1:PRINT"SCORE    ";
11050 LOCATE 7,1:PRINT"PLAYER   ";
11060 LOCATE 9,1:PRINT"DATE     ";
11070 ROW=3:COL=8:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":IN$=C$(L):PT=1:GOSUB 22040:TC$=IN$
11080 ROW=5:COL=8:MAXLEN=7:SELECT$=NUM$:IN$=H$(L):PT=1:GOSUB 22040:TH$=IN$
11090 ROW=7:COL=8:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":IN$=P$(L):PT=1:GOSUB 22040:TP$=IN$
11100 ROW=9:COL=8:MAXLEN=8:SELECT$=NUM$+"/":IN$=D$(L):PT=1:GOSUB 22040:TD$=IN$
11110 LOCATE 15,1:PRINT"Is the above information correct?";
11120 A$=INKEY$
11130 IF A$="y" OR A$="Y" THEN CLS:H$(L)=TH$:P$(L)=TP$:D$(L)=TD$:IF TC$=C$(L) THEN GOTO 10040:ELSE C$(L)=TC$:GOTO 9030:'If NAME OF GAME is unchanged there is no need to resort
11140 IF A$="n" OR A$="N" THEN 11030
11150 GOTO 11120
12000 '
12010 REM ** PRINTING ROUTINE **
12020 '
12030 G1$="N A M E   O F   T H E   G A M E"  '3 spaces in between words
12040 N1$="HIGH SCORER"
12050 H1$="HIGH SCORE"
12060 D1$="D  A  T  E"
12070 R3$="THESE ARE THE HIGH SCORES AS OF"
12080 G2$="*******************************"  '31 characters
12090 N2$="***********"  '11 characters
12100 H2$="**********"  '10 characters
12110 D2$="**********"  '10 characters
12120 POKE 91,1:SCREEN 0:WIDTH 80:COLOR 15,0,0:CLS:LOCATE ,,0:PG=0
12130 PRINT"To (S)creen, (P)rinter, (D)isk, or (E)nd?"
12140 A$=INKEY$:IF A$="S" OR A$="s" THEN 14030:ELSE IF A$="E" OR A$="e" THEN 15030
12150 IF A$<>"D" AND A$<>"d" AND A$<>"P" AND A$<>"p" THEN 12140:ELSE IF A$="D" OR A$="d" THEN 20030:ELSE CLS
13000 '
13010 REM ** OUTPUT TO PRINTER **
13020 '
13030 TOPAPAK$="  TURN ON PRINTER AND PRESS A KEY":LOCATE 1,(19-(LEN(TOPAPAK$))/2)::PRINT TOPAPAK$:LOCATE 3,3:PRINT" [FN] Q ";:PRINT"to ";:COLOR 31:PRINT"PAUSE ";:COLOR 15:PRINT"and ";:PRINT"[FN] B ";:PRINT"to ";
13040 COLOR 31:PRINT"END"
13050 WHILE INKEY$="":WEND
13060 LPRINT" "
13070 LPRINT SPC(40-LEN(R3$)/2);R3$
13080 LPRINT SPC(40-LEN(DATE$)/2);DATE$:LPRINT:LPRINT
13090 LPRINT G1$;
13100 LPRINT SPC(37-LEN(G1$));H1$;
13110 LPRINT SPC(17-LEN(H1$));N1$;
13120 LPRINT SPC(16-LEN(N1$));D1$;
13130 LPRINT G2$;
13140 LPRINT SPC(37-LEN(G2$));H2$;
13150 LPRINT SPC(17-LEN(H2$));N2$;
13160 LPRINT SPC(16-LEN(N2$));D2$;
13170 LPRINT " "
13180 FOR L=1 TO C
13190 IF L<10 THEN LPRINT" ";L;CHR$(8);") ";C$(L); ELSE LPRINT L;CHR$(8);") ";C$(L);
13200 LPRINT SPC(32-LEN(C$(L)));:LPRINT USING FORMAT$;VAL(H$(L));
13210 LPRINT SPC(8);P$(L);
13220 LPRINT SPC(24-LEN(P$(L))-LEN(D$(L)));D$(L);
13230 FOR Z=1 TO 80
13240 LPRINT "_";
13250 NEXT Z
13260 LPRINT " "
13270 NEXT L
13280 GOTO 12030
14000 '
14010 REM ** PRINT TO SCREEN **
14020 '
14030 SCREEN 0,0,0:WIDTH 80:COLOR 15:CLS:LOCATE ,,0
14040 CLS
14050 G2$="───────────────────────────────" '31 characters
14060 N2$="───────────" '11 characters
14070 H2$="──────────" '10 characters
14080 D2$="──────────" '10 characters
14090 COLOR 15:PRINT G1$;
14100 PRINT SPC(37-LEN(G1$));H1$;
14110 PRINT SPC(17-LEN(H1$));N1$;
14120 PRINT SPC(16-LEN(N1$));D1$;
14130 PRINT G2$;
14140 PRINT SPC(37-LEN(G2$));H2$;
14150 PRINT SPC(17-LEN(H2$));N2$;
14160 PRINT SPC(16-LEN(N2$));D2$;:PRINT
14170 POKE 91,4
14180 FOR L=1 TO C
14190 IF L<10 THEN PRINT SPC(1);L;:LOCATE ,4:PRINT") ";:PRINT C$(L); ELSE PRINT L;:LOCATE ,4:PRINT") ";:PRINT C$(L);
14200 PRINT SPC(32-LEN(C$(L)));:PRINT USING FORMAT$;VAL(H$(L));
14210 PRINT SPC(8);P$(L);
14220 PRINT SPC(24-LEN(P$(L))-LEN(D$(L)));D$(L);" ";
14230 PRINT STRING$(80,CHR$(196));
14240 PG=PG+1
14250 IF PG/10=INT(PG/10) THEN GOSUB 19030
14260 NEXT L
14270 PRINT"Hit any key to CONTINUE";:WHILE INKEY$="":PG=0:POKE 91,1:WEND:GOTO 12030
15000 '
15010 REM ** END PROGRAM **
15020 '
15030 POKE 91,1:WIDTH 80:COLOR 15:CLS:COLOR 31:PRINT"THIS PROGRAM IS NOW TERMINATED":COLOR 15:END
16000 '
16010 REM ** DELETE ROUTINE **
16020 '
16030 FOR X=L TO C-1
16040 C$(X)=C$(X+1):H$(X)=H$(X+1):P$(X)=P$(X+1):D$(X)=D$(X+1)
16050 NEXT X
16060 C=C-1
16070 GOTO 9030
17000 '
17010 REM ** SAVING RECORDS TO SEQUENTIAL DATA FILE **
17020 '
17030 CLS:COLOR 15:LOCATE 12,30:PRINT"ONE MOMENT PLEASE..."
17040 OPEN "SCR-DATA.BAS" FOR OUTPUT AS #1
17050 FOR L=1 TO C
17060 WRITE #1,C$(L),H$(L),P$(L),D$(L)
17070 NEXT L
17080 CLOSE
17090 CLS
17100 RETURN
18000 '
18010 REM ** ADDITION ROUTINE **
18020 '
18030  COLOR 15:CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE..."
18040 SCREEN 0:WIDTH 80
18050 C=C+1
18060 CLS
18070 LOCATE 3,1:PRINT"GAME #";C
18080 LOCATE 7,5:PRINT"NAME OF GAME   ";:ROW=7:COL=21:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:C$(C)=IN$
18090 LOCATE 9,5:PRINT"HIGH SCORE     ";:ROW=9:COL=21:MAXLEN=7:SELECT$=NUM$:GOSUB 22000:H$(C)=IN$
18100 LOCATE 11,5:PRINT"PLAYER         ";:ROW=11:COL=21:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:P$(C)=IN$
18110 LOCATE 13,5:PRINT"DATE (MM/DD/YY)";:ROW=13:COL=21:MAXLEN=8:SELECT$=NUM$+"/":GOSUB 22000:D$(C)=IN$
18130 LOCATE 16,5:PRINT"Is the above information correct?"
18140 A$=INKEY$:IF A$="N" OR A$="n" THEN 18060
18150 IF A$<>"y" AND A$<>"Y" THEN 18140
18160 GOTO 9030
19000 '
19010 REM ** PAUSE WHILE SCROLLING **
19020 '
19030 LOCATE 25,1
19040 PRINT"hit any key to continue scrolling...";:WHILE INKEY$="":WEND
19050 LOCATE 25,1:PRINT SPC(70);
19060 LOCATE 24,1
19070 RETURN
20000 '
20010 REM ** PRINT TO DISK **
20020 '
20030 COLOR 15,0,0:CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE..."
20040 OPEN "SCR-TEXT.DOC" FOR OUTPUT AS #2
20050 CLS:PRINT"hit any key to PRINT TO TEXT FILE";:WHILE INKEY$="":WEND:CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE...";
20060 G2$="───────────────────────────────" '31 characters
20070 N2$="───────────" '11 characters
20080 H2$="──────────" '10 characters
20090 D2$="──────────" '10 characters
20100 PRINT #2,SPC(40-LEN(R3$)/2);R3$
20110 PRINT #2,SPC(40-LEN(DATE$)/2);DATE$:PRINT #2,"":PRINT #2,""
20120 PRINT #2,G1$;SPC(37-LEN(G1$));H1$;SPC(17-LEN(H1$));N1$;SPC(16-LEN(N2$));D1$
20130 PRINT #2,G2$;SPC(37-LEN(G2$));H2$;SPC(17-LEN(H2$));N2$;SPC(16-LEN(N2$));D2$;:PRINT #2,""
20140 FOR L=1 TO C
20150 IF L<10 THEN PRINT #2,SPC(1);STR$(L)+") "+C$(L);:ELSE PRINT #2,STR$(L)+") "+C$(L);
20160 PRINT #2,SPC(32-LEN(C$(L)));:PRINT #2,USING FORMAT$;VAL(H$(L));:PRINT #2,SPC(8);P$(L);SPC(23-LEN(P$(L))-LEN(D$(L)));D$(L):PRINT #2,STRING$(80,CHR$(196))
20170 NEXT L
20180 CLOSE #2
20190 GOTO 12030
21000 '
21010 REM ** ERROR HANDLING ROUTINE **
21020 '
21030 COLOR 2,1,1:CLS
21040 IF ERR<>73 THEN 21070:'Advanced feature
21050 LOCATE 12,28:PRINT"You chose the wrong version!";:WHILE INKEY$="":WEND:CLOSE
21060 RUN "SCR-MENU"
21070 IF ERR<>53 THEN 21100:'Bad file name
21080 IF ERL=7030 THEN RESUME 8000:ELSE LOCATE 12,20:PRINT"You've renamed a datafile - correct and rerun!";:WHILE INKEY$="":WEND:CLOSE
21090 RESUME 15030
21100 IF ERR<>17 THEN 21130:'Can't continue
21110 LOCATE 12,28:PRINT"Can't continue - will restart";:WHILE INKEY$="":WEND:CLOSE
21120 RUN
21130 IF ERR<>57 AND ERR<>24 AND ERR<>27 THEN 21160:'Printer failure
21140 LOCATE 12,22:PRINT"Printer failure - Correct and strike key";:WHILE INKEY$="":WEND
21150 RESUME 13030
21160 IF ERR<>61 THEN 21190:'Disk full
21170 LOCATE 12,23:PRINT"Disk full - Switch disks and strike key";:WHILE INKEY$="":WEND:CLOSE
21180 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030
21190 IF ERR<>72 THEN 21220:'Bad disk
21200 LOCATE 12,13:PRINT"Bad disk - Copy remaining files on good disk and reformat";:WHILE INKEY$="":WEND:CLOSE
21210 RESUME 15000
21220 IF ERR<>71 THEN 21260:'Drive open / No disk in drive
21230 LOCATE 12,19:PRINT"Drive open or no disk - correct and strike key";:WHILE INKEY$="":WEND:CLOSE
21240 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030:ELSE IF ERL=7030 OR ERL=7050 OR ERL=7060 THEN RESUME 7030
21250 IF ERL=7080 THEN RESUME 7080
21260 IF ERR<>70 THEN 21290:'Write protect tab on disk
21270 LOCATE 12,18:PRINT"Disk is write protected - correct and strike key";:WHILE INKEY$="":WEND:CLOSE
21280 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030
21290 IF ERR<>5 THEN 21320:'128K needed
21300 WIDTH 40:COLOR 15,0,0:CLS:LOCATE 12,1:PRINT"128K needed for 80 column mode - Sorry":WHILE INKEY$="":WEND:CLOSE
21310 END
21320 IF ERR<>9 THEN 21350:'Subscript out of range
21330 LOCATE 12,8:PRINT"Added too many records - will save current records - rerun program";:WHILE INKEY$="":WEND:CLOSE
21340 RESUME 17030
21350 IF ERR<>67 THEN 21380:'Too many files
21360 LOCATE 12,13:PRINT"Too many files on disk - switch disks for now then correct";:WHILE INKEY$="":WEND:CLOSE
21370 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030
21380 LOCATE 12,25:PRINT"Error #";ERR;" in line ";ERL;:WHILE INKEY$="":WEND:CLOSE
21390 RESUME 15000
22000 '
22010 REM ** SELECTIVE INPUT (Home Computer Magazine, Vol. 5, No. 3, p. 72 **
22020 '
22030 IN$="":PT=1
22040 LOCATE ROW,COL,0:PRINT IN$;SPACE$(MAXLEN-LEN(IN$));:LOCATE ROW,COL+(PT-1),1:K$="":WHILE K$="":K$=INKEY$:WEND
22050 IF K$=CHR$(13) THEN RETURN
22060 IF INSTR(SELECT$,K$) THEN IN$=LEFT$(IN$,PT-1)+K$+MID$(IN$,PT+1):PT=PT+1:IF PT>MAXLEN THEN PT=MAXLEN:GOTO 22040
22070 IF K$=CHR$(8) AND PT>1 THEN IN$=LEFT$(IN$,PT-2)+MID$(IN$,PT):PT=PT-1:GOTO 22040
22080 IF K$=CHR$(0)+CHR$(83) THEN IN$=LEFT$(IN$,PT-1)+MID$(IN$,PT+1):GOTO 22040
22090 IF K$=CHR$(0)+CHR$(82) AND LEN(IN$)<MAXLEN THEN IN$=LEFT$(IN$,PT-1)+" "+MID$(IN$,PT):GOTO 22040
22100 IF K$=CHR$(0)+CHR$(77) AND LEN(IN$)>=PT THEN PT=PT+1:IF PT>MAXLEN THEN PT=MAXLEN:BEEP:GOTO 22040
22110 IF K$=CHR$(0)+CHR$(75) AND LEN(IN$)>1 THEN PT=PT-1:IF PT<1 THEN PT=1 :GOTO 22040
22120 GOTO 22040
```

## SCR-MONY.BAS

```bas
1000 REM╔═════════════════════════════════════════════════════════════════════╗
1010 REM║                                                                     ║
1020 REM║   With Graphics         HIGH SCORE ORGANIZER   Monochrome Version   ║
1030 REM║       Board                                    6/9/85         5.1   ║
1040 REM║                     WRITTEN BY DAVID J. FRIEDMAN                    ║
1050 REM║                                                                     ║
1060 REM║   On Saturday February 23 and Sunday February 24 of the year 1985   ║
1070 REM║                                                                     ║
1080 REM║                                                                     ║
1090 REM║       Dave Friedman was born in Bakersfield, California located     ║
1100 REM║     in Kern County near Death Valley on October 24, 1968.  When     ║
1110 REM║     he was just about three years old, he moved to a small town     ║
1120 REM║     in Wisconsin called Irma.  Its population was approximately     ║
1130 REM║     100 people.  It is located north of Wausau.  In 1976, David     ║
1140 REM║     again moved, not so far this time, to Eau Claire, a city in     ║
1150 REM║     Wisconsin with a population of about 50,000 people.  He now     ║
1160 REM║     currently resides at 3330 Riverview Drive where he stays up     ║
1170 REM║     all night and writes stupid remarks in his programs.  Thank     ║
1180 REM║     you for your patience for reading this, and I hope you will     ║
1190 REM║     find the program to be useful.                                  ║
1200 REM║     ┌───────────────────────────────┐     Dave Friedman             ║
1210 REM║     │   If you find this program to │     3330 Riverview Drive      ║
1220 REM║     │ be useful, a donation of five │     Eau Claire, Wisconsin     ║
1230 REM║     │ dollars would be appreciated. │     (715) 834-8045  54703     ║
1240 REM║     └───────────────────────────────┘                               ║
1250 REM╠═════════════════════════════════════════════════════════════════════╣
1260 REM║                        SUMMARY OF SUBROUTINES                       ║
1270 REM║                        ──────────────────────                       ║
1280 REM║                                                                     ║
1290 REM║     LINE NUMBERS      P U R P O S E   O F   S U B R O U T I N E     ║
1300 REM║     ────────────      ─────────────────────────────────────────     ║
1310 REM║     1000-1540         BIOGRAPHY AND SUMMARY OF SUBROUTINES          ║
1320 REM║     2000-2790         MARQUE TYPE INTRODUCTION-ONLY W/GRAPHICS      ║
1330 REM║     3000-3150         PROGRAM SETUP                                 ║
1340 REM║     4000-4060         DISPLAY DATE                                  ║
1350 REM║     5000-5260         CHANGE DATE                                   ║
1360 REM║     6000-6150         GET INFORMATION ABOUT RECORDS                 ║
1370 REM║     7000-7090         GET RECORDS FROM DATA FILE                    ║
1380 REM║     8000-8100         INPUT RECORDS                                 ║
1390 REM║     9000-9140         SORT RECORDS                                  ║
1400 REM║     10000-10280       CHECK RECORDS - ADD, DELETE, CORRECT, ABORT   ║
1410 REM║     11000-11150       CORRECT MISTAKES IN RECORD                    ║
1420 REM║     12000-12190       INITIALIZE PRINTING                           ║
1430 REM║     13000-13250       OUTPUT TO PRINTER                             ║
1440 REM║     14000-14280       PRINT TO SCREEN                               ║
1450 REM║     15000-15030       END PROGRAM                                   ║
1460 REM║     16000-16070       DELETE RECORD                                 ║
1470 REM║     17000-17100       SAVE RECORDS TO SEQUENTIAL DATAFILE           ║
1480 REM║     18000-18150       ADD RECORD                                    ║
1490 REM║     19000-19070       PAUSE WHILE SCROLLING                         ║
1500 REM║     20000-20190       PRINT OUTPUT TO DISK                          ║
1510 REM║     21000-21390       ERROR HANDLING ROUTINE                        ║
1520 REM║     22000-22120       SELECTIVE INPUT ROUTINE                       ║
1530 REM║                                                                     ║
1540 REM╚═════════════════════════════════════════════════════════════════════╝
2000 '
2010 REM ** MARQUE TYPE INTRODUCTION **
2020 '
2030 CLEAR ,,,24576:SCREEN 0,1,0:KEY OFF:WIDTH 80:COLOR 15,0,0:CLS:LOCATE 12,30,0:PRINT"ONE MOMENT PLEASE...":SCREEN ,,1,0:CLS:LOCATE 7,1:ON ERROR GOTO 21030
2040 PRINT SPC(10);"*    *    *    *    *    *    *    *    *    *    *    *    "
2050 PRINT SPC(10);"   ┌─────────────────────┐    Registration # 000000000000  *"
2060 PRINT SPC(10);"   │Dave Friedman  Age 16│    If you find this program to   "
2070 PRINT SPC(10);"   │3330 Riverview Drive │    be useful, you may register   "
2080 PRINT SPC(10);"   │Eau Claire, Wisconsin│    it for $5.  Any suggestions   "
2090 PRINT SPC(10);"*  │(715) 834-8045  54703│    or comments are welcomed.     "
2100 PRINT SPC(10);"   └─────────────────────┘                                 *"
2110 PRINT SPC(10);"     If you should damage this program, send a blank disk   "
2120 PRINT SPC(10);"   and mailer with postage.  If you find an error and you   "
2130 PRINT SPC(10);"   have a registered copy, send your disk with a complete   "
2140 PRINT SPC(10);"*  description of the problem and I will pay for postage.   "
2150 PRINT SPC(10);"    *    *    *    *    *    *    *    *    *    *    *    *":LOCATE 22,28:PRINT"Press ANY KEY to Continue"
2160 SCREEN ,,2,0:CLS:LOCATE 7,1
2170 PRINT SPC(10);" *    *    *    *    *    *    *    *    *    *    *    *   "
2180 PRINT SPC(10);"   ┌─────────────────────┐    Registration # 000000000000   "
2190 PRINT SPC(10);"   │Dave Friedman  Age 16│    If you find this program to  *"
2200 PRINT SPC(10);"   │3330 Riverview Drive │    be useful, you may register   "
2210 PRINT SPC(10);"*  │Eau Claire, Wisconsin│    it for $5.  Any suggestions   "
2220 PRINT SPC(10);"   │(715) 834-8045  54703│    or comments are welcomed.     "
2230 PRINT SPC(10);"   └─────────────────────┘                                  "
2240 PRINT SPC(10);"     If you should damage this program, send a blank disk  *"
2250 PRINT SPC(10);"   and mailer with postage.  If you find an error and you   "
2260 PRINT SPC(10);"*  have a registered copy, send your disk with a complete   "
2270 PRINT SPC(10);"   description of the problem and I will pay for postage.   "
2280 PRINT SPC(10);"   *    *    *    *    *    *    *    *    *    *    *    * ":LOCATE 22,28:PRINT"Press ANY KEY to Continue"
2290 SCREEN ,,3,0:CLS:LOCATE 7,1
2300 PRINT SPC(10);"  *    *    *    *    *    *    *    *    *    *    *    *  "
2310 PRINT SPC(10);"   ┌─────────────────────┐    Registration # 000000000000   "
2320 PRINT SPC(10);"   │Dave Friedman  Age 16│    If you find this program to   "
2330 PRINT SPC(10);"*  │3330 Riverview Drive │    be useful, you may register  *"
2340 PRINT SPC(10);"   │Eau Claire, Wisconsin│    it for $5.  Any suggestions   "
2350 PRINT SPC(10);"   │(715) 834-8045  54703│    or comments are welcomed.     "
2360 PRINT SPC(10);"   └─────────────────────┘                                  "
2370 PRINT SPC(10);"     If you should damage this program, send a blank disk   "
2380 PRINT SPC(10);"*  and mailer with postage.  If you find an error and you  *"
2390 PRINT SPC(10);"   have a registered copy, send your disk with a complete   "
2400 PRINT SPC(10);"   description of the problem and I will pay for postage.   "
2410 PRINT SPC(10);"  *    *    *    *    *    *    *    *    *    *    *    *  ":LOCATE 22,28:PRINT"Press ANY KEY to Continue"
2420 SCREEN ,,4,0:CLS:LOCATE 7,1
2430 PRINT SPC(10);"   *    *    *    *    *    *    *    *    *    *    *    * "
2440 PRINT SPC(10);"   ┌─────────────────────┐    Registration # 000000000000   "
2450 PRINT SPC(10);"*  │Dave Friedman  Age 16│    If you find this program to   "
2460 PRINT SPC(10);"   │3330 Riverview Drive │    be useful, you may register   "
2470 PRINT SPC(10);"   │Eau Claire, Wisconsin│    it for $5.  Any suggestions  *"
2480 PRINT SPC(10);"   │(715) 834-8045  54703│    or comments are welcomed.     "
2490 PRINT SPC(10);"   └─────────────────────┘                                  "
2500 PRINT SPC(10);"*    If you should damage this program, send a blank disk   "
2510 PRINT SPC(10);"   and mailer with postage.  If you find an error and you   "
2520 PRINT SPC(10);"   have a registered copy, send your disk with a complete  *"
2530 PRINT SPC(10);"   description of the problem and I will pay for postage.   "
2540 PRINT SPC(10);" *    *    *    *    *    *    *    *    *    *    *    *   ":LOCATE 22,28:PRINT"Press ANY KEY to Continue"
2550 SCREEN ,,5,0:CLS:LOCATE 7,1
2560 PRINT SPC(10);"    *    *    *    *    *    *    *    *    *    *    *    *"
2570 PRINT SPC(10);"*  ┌─────────────────────┐    Registration # 000000000000   "
2580 PRINT SPC(10);"   │Dave Friedman  Age 16│    If you find this program to   "
2590 PRINT SPC(10);"   │3330 Riverview Drive │    be useful, you may register   "
2600 PRINT SPC(10);"   │Eau Claire, Wisconsin│    it for $5.  Any suggestions   "
2610 PRINT SPC(10);"   │(715) 834-8045  54703│    or comments are welcomed.    *"
2620 PRINT SPC(10);"*  └─────────────────────┘                                  "
2630 PRINT SPC(10);"     If you should damage this program, send a blank disk   "
2640 PRINT SPC(10);"   and mailer with postage.  If you find an error and you   "
2650 PRINT SPC(10);"   have a registered copy, send your disk with a complete   "
2660 PRINT SPC(10);"   description of the problem and I will pay for postage.  *"
2670 PRINT SPC(10);"*    *    *    *    *    *    *    *    *    *    *    *    ":LOCATE 22,28:PRINT"Press ANY KEY to Continue"
2680 WHILE INKEY$=""
2690 SCREEN ,,,1
2700 FOR X=1 TO 100:NEXT
2710 SCREEN ,,,2
2720 FOR X=1 TO 100:NEXT
2730 SCREEN ,,,3
2740 FOR X=1 TO 100:NEXT
2750 SCREEN ,,,4
2760 FOR X=1 TO 100:NEXT
2770 SCREEN ,,,5
2780 FOR X=1 TO 100:NEXT
2790 WEND
3000 '
3010 REM ** SETUP **
3020 '
3030 WIDTH 80:CLEAR:KEY OFF:LOCATE ,,0,0,31:RTR$=CHR$(17)+CHR$(196)+CHR$(217):KEY 3,"RUN"+CHR$(34)+"SCR-MENU"+CHR$(13):ON ERROR GOTO 21030
3040 FORMAT$="#########,":COLOR 15,0,0:CLS:ALPHA$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz":NUM$="0123456789":CHAR$="!@#$%^&*()-_=+[]{}|~;:`',.<>/?\"
3050 PRINT CHR$(201);STRING$(78,CHR$(205));CHR$(187);
3060 FOR X=1 TO 7
3070 PRINT CHR$(186);:LOCATE ,80,0:PRINT CHR$(186);:NEXT X
3080 PRINT CHR$(200);STRING$(78,CHR$(205));CHR$(188);
3090 PRINT:PRINT:PRINT:PRINT:PRINT
3100 PRINT CHR$(201);STRING$(78,CHR$(205));CHR$(187);
3110 FOR L= 1 TO 7
3120 PRINT CHR$(186);:LOCATE ,80,0:PRINT CHR$(186);
3130 NEXT L
3140 PRINT CHR$(200);STRING$(78,CHR$(205));CHR$(188);
3150 HSO$="HIGH SCORE ORGANIZER":LOCATE 3,(40-(LEN(HSO$))/2)+1:COLOR 31,0,0:PRINT HSO$;:COLOR 15,0,0
4000 '
4010 REM ** DISPLAYS DATE **
4020 '
4030 LOCATE 6,5:PRINT"Current date is ";:PRINT DATE$;:PRINT"."
4040 LOCATE 7,5,1:PRINT "Change it (Y/N)?";
4050 ANS$=INKEY$:IF ANS$<>"y" AND ANS$<>"Y" AND ANS$<>"n" AND ANS$<>"N" THEN 4050
4060 IF ANS$="n" OR ANS$="N" THEN LOCATE 7,5,0:PRINT SPC(16);:LOCATE 3,(40-(LEN(HSO$))/2)+1:PRINT HSO$:GOTO 6030
5000 '
5010 REM ** CHANGES DATE **
5020 '
5030 IF ANS$="y" OR ANS$="Y" THEN CLS:LOCATE 10,1,0:PRINT"Input date.";
5040 LOCATE 10,15:PRINT"MONTH NUMBER (1-12)";:ROW=10:COL=36:MAXLEN=2:SELECT$=NUM$:IN$=LEFT$(DATE$,2):PT=1:GOSUB 22060:M=VAL(IN$):M$=IN$
5050 IF M<1 OR M>12 OR M<>INT(M) THEN 5040
5060 GOTO 5220
5070 IF M=2 THEN 5120
5080 IF M=1 OR M=3 OR M=5 OR M=7 OR M=8 OR M= 10 OR M=12 THEN GOTO 5190
5090 LOCATE 12,15:PRINT"DAY (1-30)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22060:D=VAL(IN$):D$=IN$
5100 IF D<1 OR D>30 OR D<>INT(D) THEN 5070
5110 GOTO 5250
5120 IF Y/4=INT(Y/4) THEN 5160
5130 LOCATE 12,15:PRINT"DAY (1-28)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22060:D=VAL(IN$):D$=IN$
5140 IF D<1 OR D>28 OR D<>INT(D) THEN 5070
5150 GOTO 5250
5160 LOCATE 12,15:PRINT"DAY (1-29)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22060:D=VAL(IN$):D$=IN$
5170 IF D<1 OR D>29 OR D<>INT(D) THEN 5070
5180 GOTO 5250
5190 LOCATE 12,15:PRINT"DAY (1-31)";:ROW=12:COL=26:MAXLEN=2:SELECT$=NUM$:IN$=MID$(DATE$,4,2):PT=1:GOSUB 22060:D=VAL(IN$):D$=IN$
5200 IF D<1 OR D>31 OR D<>INT(D) THEN 5050
5210 GOTO 5250
5220 LOCATE 14,15:PRINT"YEAR (1980-2099)";:ROW=14:COL=32:MAXLEN=4:SELECT$=NUM$:IN$=RIGHT$(DATE$,4):PT=1:GOSUB 22060:Y=VAL(IN$):Y$=IN$
5230 IF Y<1980 OR Y>2099 OR Y<>INT(Y) THEN 5220
5240 GOTO 5070
5250 DT$=M$+"-"+D$+"-"+Y$:DATE$=DT$
5260 GOTO 3040
6000 '
6010 REM *** INPUT ROUTINE ***
6020 '
6030 LOCATE 17,4:PRINT"This program organizes the high scores of your home video games, saves";:LOCATE 18,4:PRINT"them to disk, and prints them out [to your choice of screen or printer].";
6040 LOCATE 21,4:PRINT"If you are using a PCjr, special instructions are enclosed in parenthesis."
6050 LOCATE 12,24,0:PRINT"How many scores to organize?";
6060 ROW=12:COL=53:MAXLEN=3:SELECT$=NUM$:GOSUB 22000:C=VAL(IN$):LOCATE ,,0
6080 OPTION BASE 1:IF C+9=>255 THEN C9=255 ELSE C9=C+9
6090 DIM C$(C9),H$(C9),P$(C9),D$(C9),CTEMP$(C9),HTEMP$(C9),PTEMP$(C9),DTEMP$(C9)
7000 '
7010 REM ** GETS RECORDS FROM DATA FILE **
7020 '
7030 OPEN "SCR-DATA.BAS" FOR INPUT AS #1
7040 L=0
7050 C1=L:IF EOF(1) THEN CLOSE:GOTO 8030
7060 L=L+1:INPUT #1,C$(L),H$(L),P$(L),D$(L)
7070 GOTO 7050
8000 '
8010 REM ** INPUT RECORDS **
8020 '
8030 IF C-C1=0 THEN 9030
8040 COLOR 15,0,0:CLS:COLOR 31,0,0:IYR$="INPUT YOUR RECORDS":LOCATE 1,(20-(LEN(IYR$))/2+1):PRINT IYR$:COLOR 15,0,0
8050 LOCATE 3,1:COLOR 15,0,0:PRINT"GAME #";L:COLOR 10,0,0
8060 LOCATE 7,5:COLOR 15,0,0:PRINT"NAME OF GAME   ";:ROW=7:COL=21:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:C$(L)=IN$
8070 LOCATE 9,5:COLOR 15,0,0:PRINT"HIGH SCORE     ";:ROW=9:COL=21:MAXLEN=7:SELECT$=NUM$:GOSUB 22000:H$(L)=IN$
8080 LOCATE 11,5:COLOR 15,0,0:PRINT"PLAYER         ";:ROW=11:COL=21:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:P$(L)=IN$
8090 LOCATE 13,5:COLOR 15,0,0:PRINT"DATE (MM/DD/YY)";:ROW=13:COL=21:MAXLEN=8:SELECT$=NUM$+"/":GOSUB 22000:D$(L)=IN$
8100 NEXT L
9000 '
9010 REM ** SORTS RECORDS BY GAME TITLE **
9020 '
9030 SCREEN 0:WIDTH 80:CLS
9040 FOR X=1 TO C
9050 D=C
9060 LOCATE 12,30,0:COLOR 15:PRINT"SORTING:  "+STR$(X)+" OF";:COLOR 31:PRINT C;:COLOR 15
9070 FOR Y=1 TO C
9080 IF C$(X)<C$(Y) THEN D=D-1
9090 NEXT Y
9100 CTEMP$(D)=C$(X):HTEMP$(D)=H$(X):PTEMP$(D)=P$(X):DTEMP$(D)=D$(X)
9110 NEXT X
9120 FOR L=1 TO C
9130 C$(L)=CTEMP$(L):H$(L)=HTEMP$(L):P$(L)=PTEMP$(L):D$(L)=DTEMP$(L)
9140 NEXT L
10000 '
10010 REM ** CHECK FOR MISTAKES, DELETIONS, ADDITIONS **
10020 '
10030 Z9=1:Z8=0
10040 Z3=0:FOR L=Z9 TO C
10050 IF Z8=1 THEN L=C:GOSUB 17030
10060 IF Z3=0 THEN WIDTH 80:COLOR 15:CLS:LOCATE 1,60,0:PRINT"RECORD #"+STR$(L)+" OF"+STR$(C):ELSE COLOR 15:LOCATE 1,60,0:PRINT"RECORD #"+STR$(L)+" OF"+STR$(C)
10070 LOCATE 2,1,0:PRINT"On the game of ";:PRINT SPC(65);:LOCATE 2,16,0:COLOR 1:PRINT C$(L);:COLOR 15:PRINT ","
10080 LOCATE 4,1:PRINT"the high score is ";:PRINT SPC(62);:LOCATE 4,19,0:COLOR 1:PRINT USING FORMAT$;VAL(H$(L));:COLOR 15:PRINT"."
10090 LOCATE 6,1:PRINT"It was set by ";:PRINT SPC(66);:LOCATE 6,15,0:COLOR 1:PRINT P$(L):COLOR 15
10100 LOCATE 8,1:PRINT"on the date of ";:PRINT SPC(65);:LOCATE 8,16,0:COLOR 1:PRINT D$(L);:COLOR 15:PRINT"."
10110 Z9=L+1:IF Z3<>0 THEN 10190 ELSE Z3=1
10120 LOCATE 11,24:COLOR 0,15,0:PRINT" 1 ";:COLOR 15,0,0:PRINT"  GO ON TO THE NEXT RECORD - IF LAST THEN CONTINUE"
10130 LOCATE 13,24:COLOR 0,15,0:PRINT" 2 ";:COLOR 15,0,0:PRINT"  SKIP TO LAST RECORD"
10140 LOCATE 15,24:COLOR 0,15,0:PRINT" 3 ";:COLOR 15,0,0:PRINT"  CORRECT THE ABOVE RECORD"
10150 LOCATE 17,24:COLOR 0,15,0:PRINT" 4 ";:COLOR 15,0,0:PRINT"  DELETE THE ABOVE RECORD"
10160 LOCATE 19,24:COLOR 0,15,0:PRINT" 5 ";:COLOR 15,0,0:PRINT"  ADD ANOTHER RECORD"
10170 LOCATE 21,24:COLOR 0,15,0:PRINT" 6 ";:COLOR 15,0,0:PRINT"  ";:COLOR 9:PRINT"ABORT PROGRAM":COLOR 15
10180 LOCATE 24,25:PRINT"What is your choice?";
10190 A$=INKEY$
10200 IF Z8=1 THEN 10280
10210 IF A$="1" THEN NEXT L
10220 IF A$="2" THEN L=C:GOTO 10050
10230 IF A$="3" THEN CLS:GOTO 11030
10240 IF A$="4" THEN CLS:GOTO 16030
10250 IF A$="5" THEN CLS:GOTO 18030
10260 IF A$="6" THEN CLS:GOTO 15030
10270 IF A$<>"1" AND A$<>"2" AND A$<>"3" AND A$<>"4" AND A$<>"5" AND A$<>"6" THEN 10190
10280 GOSUB 17030:GOTO 12030
11000 '
11010 REM ** CORRECT RECORD **
11020 '
11030 CLS:LOCATE 1,1:PRINT"GAME #";L:LOCATE 3,1:PRINT"GAME     ";
11040 LOCATE 5,1:PRINT"SCORE    ";
11050 LOCATE 7,1:PRINT"PLAYER   ";
11060 LOCATE 9,1:PRINT"DATE     ";
11070 ROW=3:COL=8:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":IN$=C$(L):PT=1:GOSUB 22040:TC$=IN$
11080 ROW=5:COL=8:MAXLEN=7:SELECT$=NUM$:IN$=H$(L):PT=1:GOSUB 22040:TH$=IN$
11090 ROW=7:COL=8:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":IN$=P$(L):PT=1:GOSUB 22040:TP$=IN$
11100 ROW=9:COL=8:MAXLEN=8:SELECT$=NUM$+"/":IN$=D$(L):PT=1:GOSUB 22040:TD$=IN$
11110 LOCATE 15,1:PRINT"Is the above information correct?";
11120 A$=INKEY$
11130 IF A$="y" OR A$="Y" THEN CLS:H$(L)=TH$:P$(L)=TP$:D$(L)=TD$:IF TC$=C$(L) THEN GOTO 10040:ELSE C$(L)=TC$:GOTO 9030:'If NAME OF GAME is unchanged there is no need to resort
11140 IF A$="n" OR A$="N" THEN 11030
11150 GOTO 11120
12000 '
12010 REM ** PRINTING ROUTINE **
12020 '
12030 G1$="N A M E   O F   T H E   G A M E"  '3 spaces in between words
12040 N1$="HIGH SCORER"
12050 H1$="HIGH SCORE"
12060 D1$="D  A  T  E"
12070 R3$="THESE ARE THE HIGH SCORES AS OF"
12080 G2$="*******************************"  '31 characters
12090 N2$="***********"  '11 characters
12100 H2$="**********"  '10 characters
12110 D2$="**********"  '10 characters
12120 POKE 91,1:SCREEN 0:WIDTH 80:COLOR 15,0,0:CLS:LOCATE ,,0:PG=0
12130 PRINT"To (S)creen, (P)rinter, (D)isk, or (E)nd?"
12140 A$=INKEY$:IF A$="S" OR A$="s" THEN 14030:ELSE IF A$="E" OR A$="e" THEN 15030
12150 IF A$<>"D" AND A$<>"d" AND A$<>"P" AND A$<>"p" THEN 12140:ELSE IF A$="D" OR A$="d" THEN 20030:ELSE CLS
13000 '
13010 REM ** OUTPUT TO PRINTER **
13020 '
13030 TOPAPAK$="  TURN ON PRINTER AND PRESS A KEY":LOCATE 1,(19-(LEN(TOPAPAK$))/2)::PRINT TOPAPAK$:LOCATE 3,3:PRINT" [FN] Q ";:PRINT"to ";:COLOR 31:PRINT"PAUSE ";:COLOR 15:PRINT"and ";:PRINT"[FN] B ";:PRINT"to ";
13040 COLOR 31:PRINT"END"
13050 WHILE INKEY$="":WEND
13060 LPRINT" "
13070 LPRINT SPC(40-LEN(R3$)/2);R3$
13080 LPRINT SPC(40-LEN(DATE$)/2);DATE$:LPRINT:LPRINT
13090 LPRINT G1$;
13100 LPRINT SPC(37-LEN(G1$));H1$;
13110 LPRINT SPC(17-LEN(H1$));N1$;
13120 LPRINT SPC(16-LEN(N1$));D1$;
13130 LPRINT G2$;
13140 LPRINT SPC(37-LEN(G2$));H2$;
13150 LPRINT SPC(17-LEN(H2$));N2$;
13160 LPRINT SPC(16-LEN(N2$));D2$;
13170 LPRINT " "
13180 FOR L=1 TO C
13190 IF L<10 THEN LPRINT" ";L;CHR$(8);") ";C$(L); ELSE LPRINT L;CHR$(8);") ";C$(L);
13200 LPRINT SPC(32-LEN(C$(L)));:LPRINT USING FORMAT$;VAL(H$(L));
13210 LPRINT SPC(8);P$(L);
13220 LPRINT SPC(24-LEN(P$(L))-LEN(D$(L)));D$(L);
13230 FOR Z=1 TO 80
13240 LPRINT "_";
13250 NEXT Z
13260 LPRINT " "
13270 NEXT L
13280 GOTO 12030
14000 '
14010 REM ** PRINT TO SCREEN **
14020 '
14030 SCREEN 0,0,0:WIDTH 80:COLOR 15:CLS:LOCATE ,,0
14040 CLS
14050 G2$="───────────────────────────────" '31 characters
14060 N2$="───────────" '11 characters
14070 H2$="──────────" '10 characters
14080 D2$="──────────" '10 characters
14090 COLOR 15:PRINT G1$;
14100 PRINT SPC(37-LEN(G1$));H1$;
14110 PRINT SPC(17-LEN(H1$));N1$;
14120 PRINT SPC(16-LEN(N1$));D1$;
14130 PRINT G2$;
14140 PRINT SPC(37-LEN(G2$));H2$;
14150 PRINT SPC(17-LEN(H2$));N2$;
14160 PRINT SPC(16-LEN(N2$));D2$;:PRINT
14170 POKE 91,4
14180 FOR L=1 TO C
14190 IF L<10 THEN PRINT SPC(1);L;:LOCATE ,4:PRINT") ";:PRINT C$(L); ELSE PRINT L;:LOCATE ,4:PRINT") ";:PRINT C$(L);
14200 PRINT SPC(32-LEN(C$(L)));:PRINT USING FORMAT$;VAL(H$(L));
14210 PRINT SPC(8);P$(L);
14220 PRINT SPC(24-LEN(P$(L))-LEN(D$(L)));D$(L);" ";
14230 PRINT STRING$(80,CHR$(196));
14240 PG=PG+1
14250 IF PG/10=INT(PG/10) THEN GOSUB 19030
14260 NEXT L
14270 PRINT"Hit any key to CONTINUE";:WHILE INKEY$="":PG=0:POKE 91,1:WEND:GOTO 12030
15000 '
15010 REM ** END PROGRAM **
15020 '
15030 POKE 91,1:WIDTH 80:COLOR 15:CLS:COLOR 31:PRINT"THIS PROGRAM IS NOW TERMINATED":COLOR 15:END
16000 '
16010 REM ** DELETE ROUTINE **
16020 '
16030 FOR X=L TO C-1
16040 C$(X)=C$(X+1):H$(X)=H$(X+1):P$(X)=P$(X+1):D$(X)=D$(X+1)
16050 NEXT X
16060 C=C-1
16070 GOTO 9030
17000 '
17010 REM ** SAVING RECORDS TO SEQUENTIAL DATA FILE **
17020 '
17030 CLS:COLOR 15:LOCATE 12,30:PRINT"ONE MOMENT PLEASE..."
17040 OPEN "SCR-DATA.BAS" FOR OUTPUT AS #1
17050 FOR L=1 TO C
17060 WRITE #1,C$(L),H$(L),P$(L),D$(L)
17070 NEXT L
17080 CLOSE
17090 CLS
17100 RETURN
18000 '
18010 REM ** ADDITION ROUTINE **
18020 '
18030  COLOR 15:CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE..."
18040 SCREEN 0:WIDTH 80
18050 C=C+1
18060 CLS
18070 LOCATE 3,1:PRINT"GAME #";C
18080 LOCATE 7,5:PRINT"NAME OF GAME   ";:ROW=7:COL=21:MAXLEN=26:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:C$(C)=IN$
18090 LOCATE 9,5:PRINT"HIGH SCORE     ";:ROW=9:COL=21:MAXLEN=7:SELECT$=NUM$:GOSUB 22000:H$(C)=IN$
18100 LOCATE 11,5:PRINT"PLAYER         ";:ROW=11:COL=21:MAXLEN=11:SELECT$=ALPHA$+NUM$+CHAR$+" ":GOSUB 22000:P$(C)=IN$
18110 LOCATE 13,5:PRINT"DATE (MM/DD/YY)";:ROW=13:COL=21:MAXLEN=8:SELECT$=NUM$+"/":GOSUB 22000:D$(C)=IN$
18130 LOCATE 16,5:PRINT"Is the above information correct?"
18140 A$=INKEY$:IF A$="N" OR A$="n" THEN 18060
18150 IF A$<>"y" AND A$<>"Y" THEN 18140
18160 GOTO 9030
19000 '
19010 REM ** PAUSE WHILE SCROLLING **
19020 '
19030 LOCATE 25,1
19040 PRINT"hit any key to continue scrolling...";:WHILE INKEY$="":WEND
19050 LOCATE 25,1:PRINT SPC(70);
19060 LOCATE 24,1
19070 RETURN
20000 '
20010 REM ** PRINT TO DISK **
20020 '
20030 COLOR 15,0,0:CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE..."
20040 OPEN "SCR-TEXT.DOC" FOR OUTPUT AS #2
20050 CLS:PRINT"hit any key to PRINT TO TEXT FILE";:WHILE INKEY$="":WEND:CLS:LOCATE 12,30:PRINT"ONE MOMENT PLEASE...";
20060 G2$="───────────────────────────────" '31 characters
20070 N2$="───────────" '11 characters
20080 H2$="──────────" '10 characters
20090 D2$="──────────" '10 characters
20100 PRINT #2,SPC(40-LEN(R3$)/2);R3$
20110 PRINT #2,SPC(40-LEN(DATE$)/2);DATE$:PRINT #2,"":PRINT #2,""
20120 PRINT #2,G1$;SPC(37-LEN(G1$));H1$;SPC(17-LEN(H1$));N1$;SPC(16-LEN(N2$));D1$
20130 PRINT #2,G2$;SPC(37-LEN(G2$));H2$;SPC(17-LEN(H2$));N2$;SPC(16-LEN(N2$));D2$;:PRINT #2,""
20140 FOR L=1 TO C
20150 IF L<10 THEN PRINT #2,SPC(1);STR$(L)+") "+C$(L);:ELSE PRINT #2,STR$(L)+") "+C$(L);
20160 PRINT #2,SPC(32-LEN(C$(L)));:PRINT #2,USING FORMAT$;VAL(H$(L));:PRINT #2,SPC(8);P$(L);SPC(23-LEN(P$(L))-LEN(D$(L)));D$(L):PRINT #2,STRING$(80,CHR$(196))
20170 NEXT L
20180 CLOSE #2
20190 GOTO 12030
21000 '
21010 REM ** ERROR HANDLING ROUTINE **
21020 '
21030 COLOR 2,1,1:CLS
21040 IF ERR<>73 THEN 21070:'Advanced feature
21050 LOCATE 12,28:PRINT"You chose the wrong version!";:WHILE INKEY$="":WEND:CLOSE
21060 RUN "SCR-MENU"
21070 IF ERR<>53 THEN 21100:'Bad file name
21080 IF ERL=7030 THEN RESUME 8000:ELSE LOCATE 12,20:PRINT"You've renamed a datafile - correct and rerun!";:WHILE INKEY$="":WEND:CLOSE
21090 RESUME 15030
21100 IF ERR<>17 THEN 21130:'Can't continue
21110 LOCATE 12,28:PRINT"Can't continue - will restart";:WHILE INKEY$="":WEND:CLOSE
21120 RUN
21130 IF ERR<>57 AND ERR<>24 AND ERR<>27 THEN 21160:'Printer failure
21140 LOCATE 12,22:PRINT"Printer failure - Correct and strike key";:WHILE INKEY$="":WEND
21150 RESUME 13030
21160 IF ERR<>61 THEN 21190:'Disk full
21170 LOCATE 12,23:PRINT"Disk full - Switch disks and strike key";:WHILE INKEY$="":WEND:CLOSE
21180 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030
21190 IF ERR<>72 THEN 21220:'Bad disk
21200 LOCATE 12,13:PRINT"Bad disk - Copy remaining files on good disk and reformat";:WHILE INKEY$="":WEND:CLOSE
21210 RESUME 15000
21220 IF ERR<>71 THEN 21260:'Drive open / No disk in drive
21230 LOCATE 12,19:PRINT"Drive open or no disk - correct and strike key";:WHILE INKEY$="":WEND:CLOSE
21240 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030:ELSE IF ERL=7030 OR ERL=7050 OR ERL=7060 THEN RESUME 7030
21250 IF ERL=7080 THEN RESUME 7080
21260 IF ERR<>70 THEN 21290:'Write protect tab on disk
21270 LOCATE 12,18:PRINT"Disk is write protected - correct and strike key";:WHILE INKEY$="":WEND:CLOSE
21280 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030
21290 IF ERR<>5 THEN 21320:'128K needed
21300 WIDTH 40:COLOR 15,0,0:CLS:LOCATE 12,1:PRINT"128K needed for 80 column mode - Sorry":WHILE INKEY$="":WEND:CLOSE
21310 END
21320 IF ERR<>9 THEN 21350:'Subscript out of range
21330 LOCATE 12,8:PRINT"Added too many records - will save current records - rerun program";:WHILE INKEY$="":WEND:CLOSE
21340 RESUME 17030
21350 IF ERR<>67 THEN 21380:'Too many files
21360 LOCATE 12,13:PRINT"Too many files on disk - switch disks for now then correct";:WHILE INKEY$="":WEND:CLOSE
21370 IF ERL=17040 OR ERL=17060 OR ERL=17080 THEN RESUME 17030:ELSE IF ERL=20040 OR ERL=20100 OR ERL=20110 OR ERL=20120 OR ERL=20130 OR ERL=20150 OR ERL=20160 OR ERL=20180 THEN RESUME 20030
21380 LOCATE 12,25:PRINT"Error #";ERR;" in line ";ERL;:WHILE INKEY$="":WEND:CLOSE
21390 RESUME 15000
22000 '
22010 REM ** SELECTIVE INPUT (Home Computer Magazine, Vol. 5, No. 3, p. 72 **
22020 '
22030 IN$="":PT=1
22040 LOCATE ROW,COL,0:PRINT IN$;SPACE$(MAXLEN-LEN(IN$));:LOCATE ROW,COL+(PT-1),1:K$="":WHILE K$="":K$=INKEY$:WEND
22050 IF K$=CHR$(13) THEN RETURN
22060 IF INSTR(SELECT$,K$) THEN IN$=LEFT$(IN$,PT-1)+K$+MID$(IN$,PT+1):PT=PT+1:IF PT>MAXLEN THEN PT=MAXLEN:GOTO 22040
22070 IF K$=CHR$(8) AND PT>1 THEN IN$=LEFT$(IN$,PT-2)+MID$(IN$,PT):PT=PT-1:GOTO 22040
22080 IF K$=CHR$(0)+CHR$(83) THEN IN$=LEFT$(IN$,PT-1)+MID$(IN$,PT+1):GOTO 22040
22090 IF K$=CHR$(0)+CHR$(82) AND LEN(IN$)<MAXLEN THEN IN$=LEFT$(IN$,PT-1)+" "+MID$(IN$,PT):GOTO 22040
22100 IF K$=CHR$(0)+CHR$(77) AND LEN(IN$)>=PT THEN PT=PT+1:IF PT>MAXLEN THEN PT=MAXLEN:BEEP:GOTO 22040
22110 IF K$=CHR$(0)+CHR$(75) AND LEN(IN$)>1 THEN PT=PT-1:IF PT<1 THEN PT=1 :GOTO 22040
22120 GOTO 22040
```

## TYPE.BAS

```bas
10 ' **********************
20 ' ** PRACTICE TYPING  **
30 ' **                  **
40 ' **   by Kevin Carr  **
50 ' **********************
60 SCREEN 2:SCREEN 0,0,0:COLOR 4,0,0:CLS:KEY OFF
70 INPUT "DO YOU WANT INSTRUCTIONS? >",I$
80 IF I$="N" OR I$="n" OR I$="NO" OR I$="no" THEN 160
90 CLS
100 PRINT "A WORD WILL BE DISPLAYED ON THE SCREEN. TYPE THE WORD AS FAST AND AS ACCURATE"
110 PRINT "AS YOU CAN. PRACTICE AS MUCH AS POSSIBLE. AFTER YOU HAVE MASTERED ALL OF THESE";:PRINT
120 PRINT "WORDS, SEE TYPE.DOC FOR INSTRUCTIONS ON CHANGING THE WORDS. MAKE SURE YOU TYPE";:PRINT
130 PRINT "THE WORDS IN LOWER CASE, AND PRESS 'RETURN' AFTER EVERY WORD YOU TYPE.";:PRINT
140 FOR P=1 TO 18:PRINT:NEXT P
150 INPUT "PRESS 'RETURN' TO CONTINUE.",I$
160 CLS
170 READ W$
180 PRINT "TYPE, ";W$
190 INPUT M$
200 IF M$=W$ THEN PRINT "CORRECT, KEEP UP THE GOOD WORK.":GOTO 590 ELSE PRINT "INCORRECT, LET'S TRY ANOTHER WORD.":GOTO 590
210 PRINT "TIME= ",T
220 END
230 DATA fat,cat,act,can,fast,hat,hand,last,man,ran,have
240 DATA red,hen,let,get,help,next,pet,men,went,bed,said
250 DATA big,pig,fir,did,swim,six,dig,win,sit,hit,been
260 DATA rug,bug,jump,hunt,fun,must,cup,bus,cut,run,of,from
270 DATA hot,pond,got,hop,not,dog,log,lost,soft,on,was,want
280 DATA glass,grass,bell,dress,will,still,off,cross,fuss,stuff,roll
290 DATA milk,truck,ask,back,mask,neck,desk,sick,silk,rock
300 DATA fish,dish,brush,splash,wish,ship,shop,shed,shut,shelf,wash
310 DATA rich,witch,lunch,catch,ranch,pitch,such,match,much,stretch,watch
320 DATA that,this,them,than,then,thin,bath,thick,with,cloth,both
330 DATA pink,thank,bank,think,trunk,string,sang,long,bring,hung,young
340 DATA play,day,may,say,stay,train,rain,wait,paint,mail,they
350 DATA bake,safe,chase,came,cake,gave,late,game,name,made,break
360 DATA see,need,keep,sleep,me,she,clean,read,teach,piece
370 DATA try,dry,by,cry,fly,pie,tie,lie,cried,tried,eye
380 DATA side,line,five,time,like,fine,ride,hide,kite,mine,give
390 DATA find,kind,mind,hind,blind,right,night,light,fight,might,wind
400 DATA go,no,slow,show,own,low,boat,road,goat,coat,to,do
410 DATA cold,nose,old,those,hold,close,told,hope,gold,home
420 DATA new,chew,few,blue,threw,true,grew,suit,flew,fruit,build
430 DATA use,mule,cute,goose,loose,choose,food,soon,zoo,room,you,school
440 DATA some,friend,done,does,come,shoe,move,guess,live,head
450 DATA put,pull,push,full,bush,foot,look,good,book,took,could,should,would
460 DATA why,wheel,when,whip,which,who,white,whose,while,what
470 DATA all,draw,ball,crawl,call,fault,fall,caught,saw,taught,shall,gone
480 DATA brown,house,cow,found,down,sound,how,our,now,out,your
490 DATA toy,noise,joy,point,boy,soil,join,boil,oil,spoil
500 DATA hear,year,ear,rear,dear,cheer,clear,deer,near,steer,here
510 DATA hair,care,air,scare,pair,bare,chair,square,fair,share,bear,where
520 DATA fork,or,for,short,horse,floor,store,tore,shore,more,wore,door
530 DATA barn,yard,car,arm,farm,are,hard,dark,far,march,part
540 DATA her,jerk,serve,girl,bird,first,third,curl,turn,hurt,word,work,were
550 DATA better,never,after,under,coller,color,other,mother,water father
560 DATA funny,happy,story,hurry,party,any,many,very,ready,pretty
570 DATA write,knew,know,wrote,lamb,talk,walk,laugh,climb
580 DATA one,two,three,four,five,six,seven,eight,nine,ten
590 FOR I=1 TO 1000:NEXT I:GOTO 160
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0443

     Volume in drive A has no label
     Directory of A:\

    BLK      BLK      1412  11-16-85   2:32p
    FILELIST TXT       405   9-04-85   1:12a
    FILES              387   9-08-85   4:11p
    FLASH    BAS      1757  11-29-85   5:57p
    FLASH    BAT        16   9-08-85   4:02p
    FLASH    DOC       340  11-29-85   5:44p
    GRADES   BAS     37111   9-04-85  12:30a
    KILL     BAS       848   1-01-80  12:56a
    KILL     DOC       386  11-27-85   1:31p
    KILL2    BAS      1088  11-27-85   1:22p
    MATH     BAS      2269  11-29-85   2:50p
    MATH     DOC       226  11-29-85   5:47p
    MENU     BAS       405  12-09-85   5:56p
    NOTICE   BAS      1614   9-04-85  12:38a
    READ     ME       4130   6-03-86  12:08p
    README   TXT      3284   9-04-85   1:29a
    REPORTS  BAS     19113   9-03-85   1:33a
    SCR-AUTO DOC      1041   4-26-85   6:38p
    SCR-COLN BAS     17204   6-09-85   3:25a
    SCR-COLY BAS     22341   6-09-85   3:24a
    SCR-DATA BAS       548   7-29-85  12:02a
    SCR-EXEC BAT        35   5-01-85  12:03a
    SCR-MENU BAS      2110   6-01-85  12:01a
    SCR-MONN BAS     16749   6-09-85   3:26a
    SCR-MONY BAS     21766   6-09-85   3:26a
    SCR-PG1I DOC      1467   6-09-85   2:33a
    SCR-PG1R DOC      1327   6-09-85   3:02a
    SCR-PG2I DOC      1152   6-09-85   2:33a
    SCR-PG2R DOC      1130   6-09-85   3:02a
    SCR-PG3I DOC      1317   6-09-85   2:33a
    SCR-PG3R DOC      1392   6-09-85   3:03a
    SCR-PG4I DOC      1051   6-09-85   2:33a
    SCR-PG4R DOC      1112   6-09-85   3:21a
    SCR-PG5I DOC       786   6-09-85   3:12a
    SCR-PG6I DOC      1147   6-09-85   2:36a
    SCR-TEXT DOC      2380   7-28-85  12:03a
    TSCORE   DAT       845   1-09-87   1:45p
    TSCORE   DOC      5213   1-09-87   2:47p
    TSCORE   EXE     40065   1-09-87   2:38p
    TSCORE   FOR     10468   1-09-87   2:37p
    TSCORE   LIS      4309   1-09-87   2:39p
    TSCORE   S3I      9235   1-09-87   2:37p
    TSCORE   S3L     11473   1-09-87   2:40p
    TYPE     BAS      3106  11-29-85   5:39p
    TYPE     DOC       355  11-29-85   5:47p
    FILES443 TXT      1892   1-29-87  10:19a
    GO       BAT      1858   1-29-87  10:26a
           47 file(s)     259665 bytes
                           30720 bytes free
