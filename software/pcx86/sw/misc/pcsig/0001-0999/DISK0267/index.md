---
layout: page
title: "PC-SIG Library Disk #267"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0267/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0267"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DATA BASE OF STEEL 3 OF 4 (214,215,268)"

    This is the first volume of Potomac Engineering's database, spreadsheet
    and expert system offerings, all grouped under the title "... of
    Steel".  The first two disks contain the Database Management System
    which includes Accounting, Payroll, Inventory, and A/R Applications
    Programmable, Relational.  The documentation for the whole system is on
    Disk No 215.
    
    The Spreadsheet (No 267) includes 21 ways to calculate numbers or write
    your own subroutine.  It is written in BASIC for easy modification, and
    a compiled version is available.
    
    The Expert System (No 268) provides for inference engines, designing
    your own expert systems, and intelligent search patterns.  The entire
    system is menu driven, so all the options are displayed on the screen.
    
    Features:
    
    ~ Written in BASIC for easy modification
    ~ Compiled version provided (192k)
    ~ Sample checkbook application
    ~ Automatic recalculation
    ~ Bar charts
    ~ Full cursor control
    ~ Report generator
    ~ Customizable screens
    ~ ASCII output
    ~ Tax tables
    ~ Create subfiles
    ~ Sort on 3 fields
    ~ 3 files open simultaneously
    ~ Global field changes
    ~ Transfer data between files
    ~ Inference engine
    ~ Design expert systems
    ~ Assigns probability with rules
    ~ Intellignet search pattern with manual override
    ~ Detects contradictory evidence
    ~ Explanation of reasoning
    
    System Requirements:  Two disk drives (Hard disk recommended)
    
    How to Start: Consult the README file for documentation and
    directions. To run the BASIC programs follow the GETTING STARTED
    instructions for your configuration.
    
    Suggested Registration:  $20.00
    
    File Descriptions:
    
    The First Disk Contains:
    -------- ---  Database of Steel - Source Code
    SCAN     BAS  Database extract and select program
    MAIN     BAS  Main database program
    CHANGE   BAS  Global database change and replacement
    FORM     BAS  Report format program
    TRANSFER BAS  Transfer data from one file to another
    CFILE    BAS  Creates (defines) database file
    SORT     BAS  Sorts database
    CTRANSFE BAS  Customizes transfers between files
    CINPUT   BAS  Sets up new data entry for the file
    CLIMITS  BAS  Sets range limts for numeric fields
    CFORM    BAS  Creates print forms
    TESTASCI BAS  Reads file created from above and display it
    ASCII    BAS  Convert from random access format to ASCII
    CSCREEN  BAS  Sets up screen display for record
    CREAL    BAS  Realtime transfers between files
    READ     ME   Descriptions of files on disk
    
    The Second Disk Contains:
    READ     ME   Descriptions of files on disk
    -------- ---  Database of Steel - sample programs and files, doc
    MASTER   TXT  Manual (WordStar format - 153K)
    REMARKS4 BAS  Program remarks
    REMARKS3 BAS  Program remarks
    REMARKS2 BAS  Program remarks
    REMARKS1 BAS  Program remarks
    PRINTMAN BAS  Procedure to print the manual
    ???      OBJ  Part of Database of Steel
    ???      BAS  Part of Database of Steel
    ???           Various data files for Database of Steel
    
    The Third Disk Contains:
    -------- ---  Spreadsheet of Steel and Compiled Database Program
    READ     ME   Description of files on this disk
    REMARKST BAS  Sort remarks
    MAIN     EXE  Compiled database program
    CHECK         Sample spreadsheet
    TAX           Sample spreadsheet
    SORTINT  BAS  Sort source for database
    SORT     BAS  Sort source for database
    SS       EXE  Compiled spreadsheet
    SSREMARK BAS  Spreadsheet remarks
    SS       BAS  Spreadsheet source
    SORTSTR  BAS  Sort source for database
    
    The Fourth Disk Contains:
    -------- ---  Expert System of Steel
    EXPERT   BAS  Source code for expert system
    EXPERT   EXE  Compiled program for expert system
    REM      BAS  Remarks for source program  (33K)
    READ     ME   Description of files on this disk
    FORM     EXE  Compiled program for database
    SCAN     EXE  Compiled program for database
    TEMP     BAS  Part of expert system disk
    CLS      OBJ  Part of expert system disk
    ???           Sample program for Database of Steel
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## REMARKST.BAS

```bas
18000 REM **********  TRANSFER  MENU  **************
18005 IF DTFLG >< 1 THEN GOSUB 19000 / IF TRANSFER DATA NOT IN MEMORY THEN
18007 GOSUB 13000 / CLEAR SCREEN
18010 PRINT "****************  TRANSFER MENU  ******************"
18020 PRINT ""
18025 PRINT "   0 - EXIT THE PROGRAM"
18030 FOR N = 1 TO MAXS / FOR ALL TRANSFERS 
18040 PRINT "  ";N;"- ";SN$(N) / PRINT THE TRANSFER NAME
18050 NEXT N
18060 PRINT ""
18070 PRINT "*******  ENTER THE NUMBER AND PRESS RETURN  *******"
18075 GOSUB 14000 / INPUT INTEGER < 100 SUBROUTINE
18076 IF DT# <0 OR DT# >MAXS GOTO 18075 / IF OUT OF RANGE REENTER
18078 IF DT# = 0 THEN GOTO 51000 / END PROGRAM
18080 SOPT = DT# / TRANSFER OPTION EQUALS THE VALUE RETURNED FROM THE INPUT SUBROUTINE
18085 GOSUB 13000 / CLEAR SCREEN
18090 A = SFN(SOPT) / SOURCE FILE NUMBER = A
18092 PRINT F$(A),"SOURCE FILE"
18094 GOSUB 2300 / WHICH DISK DRIVE IS THE FILE ON SUBROUTINE
18096 GOSUB 2500 / OPEN SOURCE FILE
18098 IF DTOPT(SOPT) = 1 THEN GOSUB 21000 / IF DIRECT TRANSFER OPTION 
18099 GOSUB 13000 / CLEAR SCREEN
18100 PRINT ""
18110 PRINT "*****  WHAT RECORD NUMBER DO YOU WANT TO START AT  *****"
18120 PRINT ""
18130 PRINT "*********  ENTER THE NUMBER THEN PRESS RETURN  *********"
18135 GOSUB 14200
18136 IF DT# <1 OR DT# >10000  GOTO 18135
18140 RNSS = DT# / RECORD NUMBER START TRANSFER
18200 PRINT "" 
18202 GOSUB 7800 / GET THE MAXIMUM RECORD NUMBER
18204 PRINT "THE HIGHEST NUMBERED RECORD IS ";MRN
18210 PRINT "********  WHICH IS THE LAST RECORD YOU WANT TO TRANSFER  ********"
18220 PRINT ""
18230 PRINT "*************  ENTER THE NUMBER THEN PRESS RETURN  **************"
18235 GOSUB 14200
18236 IF DT# <1 OR DT# >MRN GOTO 18235 / IF OUT OF RANGE THEN REENTER
18240 RNSF = DT# / RECORD NUMBER SOURCE FINISH = VALUE RETURNED FROM THE SUBROUTINE
18250 IF RNSF > MRN GOTO 18204
18300 SFN = SFN(SOPT) / SOURCE FILE NUMBER
18500 GOTO 20000
19000 REM ************  OPEN FOR INPUT  **************
19005 GOSUB 10900 / PUT PROGRAM DATA DISK IN PROMPT
19010 OPEN "I",#2,"TFER" / TRNASFER FILE
19020 INPUT #2,MAXS / MAXIMUM NUMBER OF TRANSFERS
19030 FOR S = 1 TO MAXS  / FOR ALL TRANSFERS
19040 D = 1 / PRESENTLY DUMMY
19050 INPUT #2,DTOPT(S),SUMOPT(S),SUMAFOPT(S),SN$(S),SFN(S)
19060 IF DTOPT(S) = 2 GOTO 19170 / IF DIRECT TRANSFER OPTION
19070 INPUT #2,RNTNBOPT(S),D(S),TFN(S),DY(S)
19080 TFN = TFN(S) / TARGET FILE NUMBER
19090 FOR N = 1 TO DY(S) / FOR ALL FIELDS
19100 INPUT #2,FLDTC(S,N,D) / FIELD TO CHANGE
19110 IF FLDTC(S,N,D) = 1 GOTO 19130
19120 INPUT #2,FLDTCT(S,N,D) / FIELD TARGET CHANGE TYPE
19130 NEXT N
19140 IF D = 2 GOTO 19170
19150 IF D(S) = 2 THEN D = 2
19160 IF D(S) = 2 GOTO 19090
19170 IF SUMOPT(S) = 2 GOTO 19220 / IF TRANSFER SUM OPTION
19180 INPUT #2,KTSUM(S),SUMFN(S) 
19190 FOR K = 1 TO KTSUM(S)
19200 INPUT #2,SUMF(S,K),SUMRN(S,K),SUMFLDN(S,K)
19210 NEXT K
19220 IF SUMAFOPT(S) = 2 GOTO 19270 / IF SUBTOTAL TRANSFER OPTION
19230 INPUT #2, KTSUMAF(S),SAFFN(S)
19240 FOR K = 1 TO KTSUMAF(S)
19250 INPUT #2,SAFADD(S,K),SAFACCTO(S,K),SAFFLDN(S,K),DY
19260 NEXT K
19270 NEXT S
19280 CLOSE #2
19285 DTFLG = 1 / DATA IN FLAG SET TO YES
19290 RETURN
20000 REM ******  DATA TRANSFER PROGRAM  ******
20095 REM *****  INITIALIZE SUMS TO ZERO *****
20100 GOSUB 20900
20105 PRINT "*** INITIALIXE SUMS
20110 REM *** OPEN SOURCE FILE ****
20112 GOSUB 13000 / CLEAR SCREEN
20140 REM ** IF DTOPT(SOPT) = 1 THEN GOSUB 21000 / IF DIRECT TRANSFER OPTION
20150 REM *******  START READING LOOP  **********
20160 FOR RN = RNSS TO RNSF / FOR RECORD NUMBER START TO FINISH
÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷TO FIELDS *****
24110 IF SUMAFOPT = 2 GOTO 24285
24120 FOR P = 1 TO KTSUMAF(SOPT) / FOR ALL FIELDS TO SUBTOTAL
24130 T = SAFADD(SOPT,P)  / FIELD TO SUBTOTAL 
24140 F = SAFACCTO(SOPT,P) / SUBTOTAL ON THIS FIELD
24150 I = SU#(F)    
24155 IF I > MAXSAF(P) THEN MAXSAF(P) = I /MAXIMUM VALUE OF FIELD SUBTOTALED ON
24160 SAF#(P,I) = SAF#(P,I) + SU#(T) / ADD SUBTOTALS
24170 NEXT P
24285 RETURN 
25600 REM ****** MOVE SUMS TO FILES ******
25620 CLOSE
25630 B = SUMFN(SOPT)
25645 GOSUB 13000 / CLEAR SCREEN
25647 PRINT F$(B),"FILE FOR SUMS"
25648 AHLD = A
25649 A = B
25650 GOSUB 2300 / WHICH DISK DRIVE IS THE FILE ON
25660 GOSUB 2550 / OPEN FILE
25665 A = AHLD
25670 FOR P = 1 TO KTSUM(SOPT) / FOR ALL SUMS
25700 RN = SUMRN(SOPT,P) / RECORD NUMBER TO TRANSFER SUMS TO
25710 GET 2,RN / GET RECORD NUMBER TO TRANSFER SUMS TO
25720 T = SUMFLDN(SOPT,P) 
25725 S# = SUM#(P)
25727 PRINT "SUM";S#;" FIELD ";T
25730 ON FTY(B,T) GOSUB  25790,25772,25780,25790,25790
25750 PUT #2,RN
25760 NEXT P
25770 RETURN
25772 LSET Y$(T) = MKI$(S#) / INTEGER SUMS
25775 RETURN
25780 LSET Y$(T) = MKS$(S#) / SINGLE PRECISION SUMS
25785 RETURN
25790 LSET Y$(T) = MKD$(S#) / DOUBLE PRECISON SUMS
25795 RETURN
25800 REM *******  PUT SUM ACCORDING TO FIELDS IN FILES  *******
25810 CLOSE
25820 B = SAFFN(SOPT)
25823 GOSUB 13000 / CLEAR SCREEN
25825 PRINT F$(B),"FILE FOR SUMS ACCORDINT TO FIELDS "
25827 AHLD = A
25828 A = B
25830 GOSUB 2300 / WHICH DISK DRIVE IS THE FILE ON
25833 A = AHLD
25835 GOSUB 2550 / OPEN THE FILE 
25850 FOR P = 1 TO KTSUMAF(SOPT) / FOR EACH FIELD SUBTOTALED
25852 T = SAFFLDN(SOPT,P)
25860 FOR J = 1 TO MAXSAF(P) / FOR 1 TO THE MAXIMUM VALUE SUBTOTALED ON FIELD
25865 S# = SAF#(P,J)
25870 GET #2,J
25880 ON FTY(B,T) GOSUB 25984,25984,25990,25995,25995 / ON FIELD TYPE 
25890 PUT #2,J
25895 PRINT P,J,S#,A,T
25900 NEXT J
25910 NEXT P
25980 CLOSE
25982 RETURN       
25984 LSET Y$(T) = MKI$(S#) / INTEGER SUBTOTALS
25986 RETURN
25990 LSET Y$(T) = MKS$(S#) / SINGLE PRECISION SUBTOTALS
25992 RETURN
25995 LSET Y$(T) = MKD$(S#) / DOUBLE PRECISION SUBTOTALS
25997 RETURN
```

## SORT.BAS

```bas
HDR
10
10
10
15
15
15
15
DAT
3,1,2R
         BALANCE SHEET
2,2,2R
           XXXX INTERNATIONAL CORPORATION
3,3,2R
          '04/01/86
4,6,2R
  ASSETS
1,9,2R
CURRENT ASSETS:
1,11,2R
   TOTAL CURRENT ASSETS
6,11,2G
20563.6
1,12,2R
     CASH IN BANKS
4,12,2G
0
1,15,2R
FIXED ASSETS:
1,17,2R
   TOTAL FIXED ASSETS
6,17,2G
0
1,19,2R
TOTAL ASSETS
7,19,2G
20563.60
3,24,2R
LIABILITIES AND EQUITY
1,28,2R
CURRENT LIABILITIES:
1,30,2R
    TOTAL CURRENT LIABILITIES
7,30,2G
25000
1,31,2R
      NOTES PAYABLE
5,31,2G
25000
1,34,2R
LONG TERM LIABILITIES:
1,35,2R
    TOTAL LONG TERM LIAB.
7,35,2G
0
1,39,2R
STOCKHOLDER'S EQUITY:
1,40,2R
    RETAINED EARNINGS
4,40,2G
0
1,41,2R
      TOTAL STOCKHOLDER'S EQUITY
5,41,2G
(G19-G30)
1,44,2R
TOTAL LIABILITIES AND EQUITY
7,44,2D
(G30+E41)
4,60,2R
MONTHLY INCOME STATEMENT
3,61,2R
           XXXX INTERNATIONAL INC.
4,62,2R
      '4/30/86
4,64,2R
     THIS MONTH
2,67,2R
INCOME
1,70,2R
SALES:
1,71,2R
 TOTAL INCOME
5,71,2G
0
2,74,2R
EXPENSES
1,77,2R
COST OF SALES:
1,78,2R
 TOTAL COST OF SALES
5,78,2G
0
1,81,2R
OPERATING EXPENSES:
1,83,2R
 TOTAL OPERATING EXPENSES
5,83,2G
(D84:D88)
1,84,2R
  ADMINISTRATION
4,84,2G
1177.97
1,85,2R
  TRAVEL
4,85,2G
5300
1,86,2R
  CONSULTANT
4,86,2G
6000
1,87,2R
  ADVERTISING
4,87,2G
4695.79
1,88,2R
  DEBT SERVICE
4,88,2G
136.99
1,91,2R
NET INCOME/(LOSS)
5,91,2G
(E71-E83)
END
   SAMPLE08GRF           ÇüN┤  SAMPLE09GRF           ÇüOd  ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷HDR
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
15
10
10
10
10
DAT
1,1,0A
(TODAY)
3,1,2R
   EXAMPLE CO. INC. 5(FIVE) YEAR CASH FLOW PROJECTION (PRO FORMA) 
1,2,2R
COPYRIGHT 1986: ENERCO ASSOCIATES. EXAMPLE CASH FLOW PROJECTION 
1,3,2R
 FOR EZ-SPREADSHEET.
3,3,2R
     QTR 1
4,3,2R
     QTR 2
5,3,2R
     QTR 3
6,3,2R
     QTR 4
7,3,2R
     QTR 5
8,3,2R
     QTR 6
9,3,2R
     QTR 7
10,3,2R
     QTR 8
11,3,2R
     QTR 9
12,3,2R
    QTR 10
13,3,2R
    QTR 11
14,3,2R
    QTR 12
15,3,2R
    QTR 13
16,3,2R
   QTR 14
17,3,2R
    QTR 15
18,3,2R
    QTR 16
19,3,2R
    QTR 17
20,3,2R
    QTR 18
21,3,2R
    QTR 19
22,3,2R
    QTR 20
23,3,2R
    TOTALS
1,5,2R
NO. OF UNITS PLACED
3,5,0R
11 
4,5,0R
12
5,5,0R
12
6,5,0R
12
7,5,0R
20
8,5,0R
20
9,5,0R
20
10,5,0R
20
11,5,0R
20
12,5,0R
20
13,5,0R
20
14,5,0R
20
15,5,0R
20
16,5,0R
20
17,5,0R
20
18,5,0R
20
19,5,0R
24
20,5,0R
24
21,5,0R
24
22,5,0)
9030 D = 0
9040 FOR T = 1 TO NREC(A)
9050 FIELD #1,D AS D$,FL(1,T) AS Z$(T)
9060 D = D + FL(1,T)
9070 NEXT T
9080 RETURN
9100 REM *******  OPEN FILE SUBROUTINE  *******
9110 CLOSE #1
9120 OPEN "R",#1,F$(A),L   
9140 PRINT " L(A) ";L   
9150 FIELD #1,L AS Y$    
9180 RETURN
9200 REM *******  OPEN FILE SUBROUTINE  *******
9210 CLOSE #2
9220 OPEN "R",#2,Q$,L
9250 FIELD #2,L AS Z1$
9280 RETURN
10000 REM *******  INITAL SELECTION  ********
10010 GOSUB 15000
10100 PRINT "**************  SORT FILE PROGRAM  **************"
10105 PRINT "FILE NUMBER = ";A;" FILE NAME = ";F$(A)
10110 PRINT ""
10120 FOR T = 1 TO NREC(A)
10130 PRINT T;"- ";FLDN$(A,T)
10140 NEXT T
10150 PRINT ""
10160 PRINT "***  HOW MANY FIELDS DO YOU WANT TO SORT BY ? ***"
10170 PRINT "**************  ENTER  1,2, OR 3  ***************"
10180 GOSUB 60000
10185 IF DT#<1 OR DT#>3 GOTO 10180
10190 KTH= DT#
10200 PRINT "***  WHICH FIELD IS THE PRIMARY SORT FIELD ?  ***"
10210 GOSUB 60000
10212 IF DT#<1 OR DT#>NREC(A) GOTO 10210
10215 T3 = FD(1)
10218 FD(1) = DT#
10219 T3 = DT#
10220 IF KTH= 1 GOTO 10275 
10230 PRINT "***********  WHICH FIELD IS THE SECONDARY FIELD ?  **********"
10232 PRINT "- If the primary values are equal"  
10234 PRINT "the record with the lowest secondary value will be stored first "
10240 GOSUB 60000
10242 IF DT#<1 OR DT#>NREC(A) GOTO 10240
10244 IF FTY(1,DT#) = 1 GOTO 10410
10246 FD(2) = DT#
10250 IF KTH= 2 GOTO 10275
10260 PRINT "************  WHICH FIELD IS THE THIRD FIELD  ? *************"
10262 PRINT "- If both the primary value and the secondary value are equal"
10264 PRINT "the record with the lowest third value will be stored first"
10270 GOSUB 60000
10272 IF DT#<1 OR DT#>NREC(A) GOTO 10270
10273 IF FTY(1,DT#) = 1 GOTO 10410
10274 FD(3) = DT#
10275 ON FTY(1,T3) GOSUB 10400,10600,10500,10500,10500
10280 RETURN
10400 REM ***DEFSTR X,P
10410 IF KTH> 1 THEN PRINT "********  STRING VARIABLES MAY ONLY BE SORTED BY ONE FIELD  ********"
10420 IF KTH> 1 GOTO 10100
10430 REM ***DIM X(4200),T(4200)
10490 RETURN
10500 REM *****DEFDBL X,P
10505 REM *****DIM X(4200),T(4200)
10510 RETURN
10600 IF KTH> 1 GOTO 10500
10610 REM ***DEFINT X,P
10620 REM ***DIM X(10000),T(10000)
10630 RETURN
11000 REM  *******  INTRODUCTION  ********
11100 GOSUB 15000
11110 PRINT "************************  SORT PROGRAM  *************************"
11120 PRINT ""
11130 PRINT "FILE NUMBER : ";A;" FILE NAME : ";F$(A)
11140 PRINT ""
11200 PRINT ""
11210 PRINT "Up to 10000 records may be sorted on ONE INTEGER FIELD "
11220 PRINT "Up to  4200 records may be sorted on ONE ALFANUMRIC FIELDS "
11230 PRINT "Up to  4200 records may be sorted on THREE DIFFERENT NUMERIC FIELDS"
11300 PRINT ""
11310 PRINT "The sort program reads the file on the default disk drive, sorts"
11320 PRINT "the records, then writes a sorted file with the same file name"
11330 PRINT "on a disk drive B. "
11940 PRINT ""
11950 PRINT "******************  PRESS ANY KEY TO CONTINUE  ******************"
11960 IF INKEY$ = "" GOTO 11960
11970 RETURN
12000 REM *****
12005 GOSUB 15000
12010 PRINT " Put the DATA floppy disk in the default disk drive"    
12020 PRINT ""
12030 PRINT "   ****  THEN PRESS ANY KEY TO CONTINUE  ****"
12040 IF INKEY$ = "" GOTO 12040
12050 RETURN
13000 REM *****  
13100 GOSUB 15000
13110 PRINT "******************  SORT PROGRAM  *******************"
13120 PRINT ""
13130 PRINT "**********  WHICH FILE DO YOU WANT TO SORT  *********"
13140 FOR T = 1 TO MAXF
13150 PRINT T;" - ";F$(T)
13160 NEXT T
13170 PRINT "*****  ENTER THE FILE NUMBER THEN PRESS RETURN  ******"
13180 GOSUB 60000
13185 IF DT#<1 OR DT# >MAXF GOTO 13180
13190 A = DT#
13195 AHLD = A
13200 RETURN
14000 REM *****  SORT SELECTION
14100 GOSUB 15000
14110 PRINT "*******************  SORT PROGRAM  ********************"
14120 PRINT ""
14130 PRINT "DO YOU WANT TO SORT A FILE ON :"
14140 PRINT ""
14150 PRINT " 1. ONLY ONE INTEGER FIELD"
14160 PRINT ""
14170 PRINT " 2. ONE TO THREE NUMERIC FIELDS "
14180 PRINT ""
14190 PRINT " 3. A STRING FIELD"
14200 PRINT ""
14300 PRINT "*******  ENTER THE NUMBER THEN PRESS RETURN  ********"
14400 GOSUB 60000
14410 T = DT#
14420 ON T GOTO 14500,14700,14900
14500 REM 
14520 GOSUB  17000
14540 RUN "SORTINT"
14700 GOTO 10
14900 REM 
14920 GOSUB 17000
14940 RUN "SORTSTR"
15000 REM  CLEAR SCREEN
15010 CALL CSCREEN
15020 RETURN
16000 REM ******  FIND MAX RECORD 
16100 MRN = LOF(1)/L(A)
16200 RETURN
17000 REM *****
17005 GOSUB 15000
17010 PRINT " Put the SORT PROGRAM DISK in the default d3,20,2R
300
4,20,2R
(C20)
5,20,2R
(D20)
6,20,2R
(E20)
7,20,2R
(F20)
8,20,2R
(G20)
9,20,2R
(H20)
10,20,2R
(I20)
11,20,2R
(J20)
12,20,2R
(K20)
13,20,2R
(L20)
14,20,2R
(M20)
15,20,2R
(N20)
16,20,2R
(O20)
17,20,2R
(P20)
18,20,2R
(Q20)
19,20,2R
(R20)
20,20,2R
(S20)
21,20,2R
(T20)
22,20,2R
(U20)
23,20,2D
(C20:V20)
1,21,2R
  CONSULTING FEES
3,21,2R
500
4,21,2R
(C21)
5,21,2R
(D21)
6,21,2R
(E21)
7,21,2R
(F21)
8,21,2R
(G21)
9,21,2R
(H21)
10,21,2R
(I21)
11,21,2R
(J21)
12,21,2R
(K21)
13,21,2R
(L21)
14,21,2R
(M21)
15,21,2R
(N21)
16,21,2R
(O21)
17,21,2R
(P21)
18,21,2R
(Q21)
19,21,2R
(R21)
20,21,2R
(S21)
21,21,2R
(T21)
22,21,2R
(U21)
23,21,2D
(C21:V21)
1,22,2R
  LEGAL FEES
3,22,2R
500
4,22,2R
(C22)
5,22,2R
(D22)
6,22,2R
(E22)
7,22,2R
(F22)
8,22,2R
(G22)
9,22,2R
(H22)
10,22,2R
(I22)
11,22,2R
(J22)
12,22,2R
(K22)
13,22,2R
(L22)
14,22,2R
(M22)
15,22,2R
(N22)
16,22,2R
(O22)
17,22,2R
(P22)
18,22,2R
(Q22)
19,22,2R
(R22)
20,22,2R
(S22)
21,22,2R
(T22)
22,22,2R
(U22)
23,22,2D
(C22:V22)
1,23,2R
  SALARIES/BENEFITS
3,23,2R
19000
4,23,2R
(C23)
5,23,2R
(D23)
6,23,2R
(E23)
7,23,2R
(F23)
8,23,2R
(G23)
9,23,2R
(H23)
10,23,2R
(I23)
11,23,2R
(J23)
12,23,2R
(K23)
13,23,2R
22000
14,23,2R
(M23)
15,23,2R
(N23)
16,23,2R
(O23)
17,23,2R
(P23)
18,23,2R
(Q23)
19,23,2R
(R23)
20,23,2R
(S23)
21,23,2R
(T23)
22,23,2R
(U23)
23,23,2D
(C23:V23)
1,24,2R
  RENT
3,24,2R
1800
4,24,2R
(C24)
5,24,2R
(D24)
6,24,2R
(E24)
7,24,2R
(F24)
8,24,2R
(G24)
9,24,2R
(H24)
10,24,2R
(I24)
11,24,2R
(J24)
12,24,2R
(K24)
13,24,2R
(L24)
14,24,2R
(M24)
15,24,2R
(N24)
16,24,2R
(O24)
17,24,2R
(P24)
18,24,2R
(Q24)
19,24,2R
(R24)
20,24,2R
(S24)
21,24,2R
(T24)
22,24,2R
(U24)
23,24,2D
(C24:V24)
1,25,2R
  UTILITIES
3,25,2R
900
4,25,2R
(C25)
5,25,2R
(D25)
6,25,2R
(E25)
7,25,2R
(F25)
8,25,2R
(G25)
9,25,2R
(H25)
10,25,2R
(I25)
11,25,2R
(J25)
12,25,2R
(K25)
13,25,2R
(L25)
14,25,2R
(M25)
15,25,2R
(N25)
16,25,2R
(O25)
17,25,2R
(P25)
18,25,2R
(Q25)
19,25,2R
(R25)
20,25,2R
(S25)
21,25,2R
(T25)
22,25,2R
(U25)
23,25,2D
(C25:V25)
1,26,2R
  TELEPHONE
3,26,2R
1000
4,26,2R
(C26)
5,26,2R
(D26)
6,26,2R
(E26)
7,26,2R
(F26)
8,26,2R
(G26)
9,26,2R
(H26)
10,26,2R
(I26)
11,26,2R
(J26)
12,26,2R
(K26)
13,26,2R
(L26)
14,26,2R
(M26)
15,26,2R
(N26)
16,26,2R
(O26)
17,26,2R
(P26)
18,26,2R
(Q26)
19,26,2R
(R26)
20,26,2R
(S26)
21,26,2R
(T26)
22,26,2R
(U26)
23,26,2D
(C26:V26)
1,27,2R
  REPAIRS & MNT.
3,27,2R
600
4,27,2R
(C27)
5,27,2R
(D27)
6,27,2R
(E27)
7,27,2R
(F27)
8,27,2R
(G27)
9,27,2R
(H27)
10,27,2R
(I27)
11,27,2R
(J27)
12,27,2R
(K27)
13,27,2R
(L27)
14,27,2R
(M27)
15,27,2R
(N27)
16,27,2R
(O27)
17,27,2R
(P27)
18,27,2R
(Q27)
19,27,2R
(R27)
20,27,2R
(S27)
21,27,2R
(T27)
22,27,2R
(U27)
23,27,2D
(C27:V27)
1,28,2R
  OTHER EXPENSES
3,28,2R
500
4,28,2R
(C28)
5,28,2R
(D28)
6,28,2R
(E28)
7,28,2R
(F28)
8,28,2R
(G28)
9,28,2R
(H28)
10,28,2R
(I28)
11,28,2R
(J28)
12,28,2R
(K28)
13,28,2R
(L28)
14,28,2R
(M28)
15,28,2R
(N28)
16,28,2R
(O28)
17,28,2R
(P28)
18,28,2R
(Q28)
19,28,2R
(R28)
20,28,2R
(S28)
21,28,2R
(T28)
22,28,2R
(U28)
23,28,2D
(C28:V28)
1,30,2R
 EQUIPMENT/SOFTWARE $
3,30,2R
(C5*2500)
4,30,2R
(D5*2500)
5,30,2R
(E5*2500)
6,30,2R
(F5*2500)
7,30,2R
(G5*2500)
8,30,2R
(H5*2500)
9,30,2R
(I5*2500)
10,30,2R
(J5*2500)
11,30,2R
(K5*2500)
12,30,2R
(L5*2500)
13,30,2R
(M5*2500)
14,30,2R
(N5*2500)
15,30,2R
(O5*2500)
16,30,2R
(P5*2500)
17,30,2R
(Q5*2500)
18,30,2R
(R5*2500)
19,30,2R
(S5*2500)
20,30,2R
(T5*2500)
21,30,2R
(U5*2500)
22,30,2R
(V5*2500)
23,30,2D
(C30:V30)
1,32,2R
TOTAL EXPENSES
3,32,2R
(C19:C30)
4,32,2R
(D19:D30)
5,32,2R
(E19:E30)
6,32,2R
(F19:F30)
7,32,2R
(G19:G30)
8,32,2R
(H19:H30)
9,32,2R
(I19:I30)
10,32,2R
(J19:J30)
11,32,2R
(K19:K30)
12,32,2R
(L19:L30)
13,32,2R
(M19:M30)
14,32,2R
(N19:N30)
15,32,2R
(O19:O30)
16,32,2R
(P19:P30)
17,32,2R
(Q19:Q30)
18,32,2R
(R19:R30)
19,32,2R
(S19:S30)
20,32,2R
(T19:T30)
21,32,2R
(U19:U30)
22,32,2R
(V19:V30)
23,32,2D
(C32:V32)
1,34,2R
 INCOME BEFORE TAXES
3,34,2R
(C14-C32)
4,34,2R
```

## SORTINT.BAS

```bas
3 ON ERROR GOTO 64200
4 DEFINT K,F,T,L,R,N
5 DIM K$(55)
6 DIM FLDN$(1,60),FTY(1,60),FL(1,60)
7 DEFINT X,P
8 DIM X(10000),T(10000),NREC(17),FD(3),Z$(60),L(100),R(100),F$(17)
10 MAXR= 6
12 GOSUB 8000
15 GOSUB 13000
16 H = A
17 GOSUB 7000
19 DEFSTR Z
20 A = H
25 GOSUB 9000
30 FLG = 0
45 L = 0
50 FOR T = 1 TO NREC(A)
55 L = L + FL(A,T)
60 NEXT T
70 DEFINT T
90 GOSUB 11000
100 GOSUB 10000
400 REM ******  GET DATA FROM DISKS  *******
405 GOSUB 16000
420 FOR T = 1 TO 30000 
429 IF T > MRN GOTO 26000
430 GET #1,T
433 REM
435 N = FD(1)
436 IF FTY(1,N) = 1 GOTO 500
438 IF T1 = 1 THEN X(T) = 0
439 X(T) = X(T)*1E+06    
440 ON FTY(1,N) GOTO 500,550,600,650,650
500 REM *** LET X(T) = Z$(N)
510 GOTO 700
550 X(T) = CVI(Z$(N)) + X(T)
560 GOTO 700
600 X(T) = CVS(Z$(N)) + X(T)
610 GOTO 700
650 X(T) = CVD(Z$(N)) + X(T)
700 REM
705 T(T) = T
710 NEXT T
1200 LP = 1   
1210 FLG = 0
2000 REM
2010 M = 5000
2020 GOSUB 30000
2110 GOSUB 2200
2120 GOSUB 30000
2130 GOTO 3000
2200 REM
2210 L(1) = 1 
2220 R(1) = MAXR
2230 S = 1
2240 IF (L(S)) < R(S) THEN 2270
2250    S = S - 1
2260    GOTO 2640
2270 I = L(S)
2280 J = R(S)
2290 P1= X(J)
2300 M = (I + J)/2
2310 IF (J - I<6) THEN 2400
2320 IF ((P1>X(I)) AND (P1<X(M))) THEN 2400
2330 IF ((P1<X(I)) AND (P1>X(M))) THEN 2400
2340 IF ((X(I)<X(M)) AND (X(I)>P1)) THEN 2380
2350 IF ((X(I)>X(M)) AND (X(I)<P1)) THEN 2380
2360 SWAP X(M),X(J)
2365 SWAP T(M),T(J)
2370 GOTO 2390
2380 SWAP X(I),X(J)
2385 SWAP T(I),T(J)
2390 P1 = X(J)
2400 WHILE (I<J)          
2410 WHILE (X(I)< P1)   
2420 I = I + 1
2430 WEND     
2440 J=J-1
2450 WHILE  (I<J)AND(P1<X(J))  
2460 J = J-1
2470 WEND     
2480 IF (I>=J) THEN 2510
2490 SWAP X(I),X(J)
2500 SWAP T(I),T(J)
2510 WEND      
2520 J = R(S)
2530 SWAP X(I),X(J)
2540 SWAP T(I),T(J)
2550 IF (I - L(S)>=R(S)-I) THEN 2600
2560    L(S + 1) = L(S)
2570    R(S + 1) = I - 1
2580    L(S) = I + 1
2590    GOTO 2630
2600    L(S + 1) = I + 1
2610    R(S + 1) = R(S)
2620    R(S) = I - 1 
2630 S = S + 1
2640 IF (S > 0) THEN 2240
2650 RETURN
3000 REM ********  PUT IN FILE ************
3100 GOSUB 9100
3110 Q$ = "B:"+F$(A)
3200 GOSUB 9200
3300 FOR Q = 1 TO MAXR
3310 RN = T(Q)
3312 GET #1,RN
3330 LSET Z1$ = Y$
3340 PUT #2,Q
3350 NEXT Q
3500 CLOSE
3600 GOSUB 15000
3620 PRINT "SORT FINISHED "
3630 END
7000 GOSUB 12000
7005 OPEN "I",#1,"FFILE"
7010 INPUT #1,MAXF
7020 FOR A = 1 TO MAXF
7030 INPUT #1,A,F$(A),NREC(A),L(A)
7040 FOR N = 1 TO NREC(A)
7050 INPUT #1,FLDN$(1,N),FTY(1,N),FL(1,N)
7055 IF FTY(1,N) = 2 THEN INPUT #1,KY,KEYLIST
7060 NEXT N
7065 IF A = AHLD THEN RETURN
7070 NEXT A
7080 CLOSE #1
7100 RETURN
8000 GOSUB 12000
8005 OPEN "I",#1,"FFILE"
8010 INPUT #1,MAXF
8020 FOR A = 1 TO MAXF
8030 INPUT #1,A,F$(A),NREC(A),L(A)
8040 FOR N = 1 TO NREC(A)
8050 INPUT #1,FLDN$(1,N),FTY(1,N),FL(1,N)
8055 IF FTY(1,N) = 2 THEN INPUT #1,KY,KEYLIST
8060 NEXT N
8070 NEXT A
8080 CLOSE #1
8100 RETURN
9000 REM *******  OPEN FILE SUBROUTINE  *******
9010 CLOSE #1
9020 OPEN "R",#1,F$(A),L(A)
9030 D = 0
9040 FOR T = 1 TO NREC(A)
9050 FIELD #1,D AS D$,FL(1,T) AS Z$(T)
9060 D = D + FL(1,T)
9070 NEXT T
9080 RETURN
9100 REM *******  OPEN FILE SUBROUTINE  *******
9110 CLOSE #1
9120 OPEN "R",#1,F$(A),L   
9140 PRINT " L(A) ";L   
9150 FIELD #1,L AS Y$    
9180 RETURN
9200 REM *******  OPEN FILE SUBROUTINE  *******
9210 CLOSE #2
9220 OPEN "R",#2,Q$,L
9250 FIELD #2,L AS Z1$
9280 RETURN
10000 REM *******  INITAL SELECTION  ********
10010 GOSUB 15000
10100 PRINT "**************  SORT FILE PROGRAM  **************"
10105 PRINT "FILE NUMBER = ";A;" FILE NAME = ";F$(A)
10110 PRINT ""
10120 FOR T = 1 TO NREC(A)
10130 PRINT T;"- ";FLDN$(A,T)
10140 NEXT T
10150 PRINT ""
10200 PRINT "***  WHICH FIELD IS THE PRIMARY SORT FIELD ?  ***"
10210 GOSUB 60000
10212 IF DT#<1 OR DT#>NREC(A) GOTO 10210
10213 IF FTY(1,DT#) <> 2 THEN GOTO 10210
10215 T3 = FD(1)
10218 FD(1) = DT#
10219 T3 = DT#
10220 GOTO 10275 
10230 PRINT "***********  WHICH FIELD IS THE SECONDARY FIELD ?  **********"
10232 PRINT "- If the primary values are equal"  
10234 PRINT "the record with the lowest secondary value will be stored first "
10240 GOSUB 60000
10242 IF DT#<1 OR DT#>NREC(A) GOTO 10240
10244 IF FTY(1,DT#) = 1 GOTO 10410
10246 FD(2) = DT#
10250 IF KTH= 2 GOTO 10275
10260 PRINT "************  WHICH FIELD IS THE THIRD FIELD  ? *************"
10262 PRINT "- If both the primary value and the secondary value are equal"
10264 PRINT "the record with the lowest third value will be stored first"
1027044:H49)
9,51,2R
(I34+I37:I40-I44:I49)
10,51,2R
(J34+J37:J40-J44:J49)
11,51,2R
(K34+K37:K40-K44:K49)
12,51,2R
(L34+L37:L40-L44:L49)
13,51,2R
(M34+M37:M40-M44:M49)
14,51,2R
(N34+N37:N40-N44:N49)
15,51,2R
(O34+O37:O40-O44:O49)
16,51,2R
(P34+P37:P40-P44:P49)
17,51,2R
(Q34+Q37:Q40-Q44:Q49)
18,51,2R
(R34+R37:R40-R44:R49)
19,51,2R
(S34+S37:S40-S44:S49)
20,51,2R
(T34+T37:T40-T44:T49)
21,51,2R
(U34+U37:U40-U44:U49)
22,51,2R
(V34+V37:V40-V44:V49)
23,51,2D
(V51-V41)
END
÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷HDR
10
10
10
10
10
10
10
DAT
1,1,2R
Portions Copyright (c) 1985, 1986: 
7,1,0A
(DATE(86,05,09))
1,2,2R
MaeDae Enterprises, Enerco Associates, P & M Software.
1,4,2R
This is a sample worksheet, it is what some call a template.  It is setup
1,5,2R
to show you how you can use "EZ-SPREADSHEET" to do a family budget.
1,7,2R
To use the template you just put numbers in for each expense catagory and
1,8,2R
put in the amount for the income figure at the bottom.  The worksheet will
1,9,2R
calculate the total expenses and the amount that you can save or must take
1,10,2R
from savings.
1,12,2R
"EZ SPREADSHEET" can forward reference cells and come up with the correct
1,13,2R
answer, even if the forward cell comtains a formula!  An example of this
1,14,2R
is shown after the "Budget" below.
1,16,2R
At the end of this worksheet is a sample of the technique used for the
1,17,2R
Internal Rate of Return function.  While this function is very nice, it
1,18,2R
does take time to calculate.
1,20,2R
Budget
1,21,2R
Category
2,21,0E
(DATE(86,5,15))
3,21,0E
(B21+30.4)
4,21,0E
(C21+30.4)
5,21,0E
(D21+30.4)
6,21,0E
(E21+30.4)
7,21,0E
(F21+30.4)
1,22,2R
----------
2,22,0C
----------
3,22,0C
----------
4,22,0C
----------
5,22,0C
----------
6,22,0C
----------
7,22,0C
----------
1,23,2R
Food
2,23,0D
0
3,23,0D
0
4,23,0D
0
5,23,0D
0
6,23,0D
0
7,23,0D
0
1,24,2R
Clothing
1,25,2R
Newspaper
1,26,2R
Insurance
1,27,2R
Church
1,28,2R
Mortgage
1,29,2R
Magazines
1,30,2R
Medical
1,31,2R
Computer
1,32,2R
Auto
1,33,2R
Gasoline
1,34,2R
Electric
1,35,2R
Water
1,36,2R
Loan Pay
1,37,2R
School
1,38,2R
Entertain
1,39,2R
Misc.
2,40,0C
----------
3,40,0C
----------
4,40,0C
----------
5,40,0C
----------
6,40,0C
----------
7,40,0C
----------
1,41,2R
Expenses
2,41,0D
(B23:B40)
3,41,0D
(C23:C40)
4,41,0D
(D23:D40)
5,41,0D
(E23:E40)
6,41,0D
(F23:F40)
7,41,0D
(G23:G40)
1,42,2R
Savings
2,42,0C
(B44-B41)
3,42,0C
(C44-C41)
4,42,0C
(D44-D41)
5,42,0C
(E44-E41)
6,42,0C
(F44-F41)
7,42,0C
(G44-G41)
2,43,0C
----------
3,43,0C
----------
4,43,0C
----------
5,43,0C
----------
6,43,0C
----------
7,43,0C
----------
1,44,2R
Income
2,44,0D
0
3,44,0D
0
4,44,0D
0
5,44,0D
0
6,44,0D
0
7,44,0D
0
2,45,0C
==========
3,45,0C
==========
4,45,0C
==========
5,45,0C
==========
6,45,0C
==========
7,45,0C
==========
1,48,2R
Sample of the forward reference:
4,48,0C
(G50)
1,50,0C
100
2,50,0C
200
3,50,0C
300
4,50,0C
400
5,50,0C
500
6,50,0C
600
7,50,0C
(A50:F50)
1,53,2R
Sample problem, showing the use of the Internal Rate of Return function.
1,55,2R
Loan Analysis
1,56,2R
-------------
1,57,2R
Loan Amount
3,57,0D
-1000
4,57,0C
  Shown as negative, because YOU are
1,58,2R
Year 1 Payment
3,58,0C
500
4,58,0C
  making the loan!  The loan payments
1,59,2R
Year 2 Payment
3,59,0C
400
4,59,0C
  are income to you and you are trying
1,60,2R
Year 3 Payment
3,60,0C
200
4,60,0C
  to decide if you want to make the loan
1,61,2R
Year 4 Payment
3,61,0C
100
4,61,0C
  or not.
3,62,0C
----------
1,63,2R
Net Income
3,63,0D
(C57:C61)
3,64,0C
==========
1,66,2R
Rate of Return
3,66,4P
(IRR(.14,C57..C61))
1,68,2R
Proof is NPV of
1,69,2R
cash flows...
3,69,4D
(ABS(NPV(C66,C58..C61)+C57))
4,69,0C
  By definition the Internal Rate of
4,70,0C
  Return is the interest rate that will
4,71,0C
  discount the cash flow to zero!
1,73,2R
 Sample Table Lookup
1,74,2R
---------------------
1,76,2R
     Term
2,76,2R
     Rate
1,77,2R
     ----
2,77,2R
     ----
1,78,0C
12
2,78,2P
0.085
1,79,0C
18
2,79,2P
0.093
1,80,0C
24
2,80,2P
0.097
1,81,0C
36
2,81,2P
0.102
1,82,0C
48
2,82,2P
0.107
4,82,2R
 Value "LOOKED UP" in Table
1,83,0C
60
2,83,2P
0.111
4,83,2R
-----------------------------
1,84,0C
72
2,84,2P
0.115
4,84,2P
(VLOOKUP(36,A78..A84,1))
5,84,2R
Rate for 36 months
1,87,2R
  Sample Asset Depreciation
4,87,2R
  Depreciation Calculations
1EXT T9
60620 IF KTMAX = 0 THEN PRINT "1"
60630 IF KTMAX = 0 THEN DT# = 1
60640 IF KTMAX = 0 THEN RETURN
60650 PRINT ""
60660 GOTO 61240
60670 REM ********* MOVE CURSE BACK ********
60680 IF KT = 1 GOTO 60370
60690 KT = KT - 1
60700 PRINT CHR$(8);
60710 GOTO 60370
60720 REM ********* MOVE CURSER FORWARD *********
60730 IF KT >= MAX GOTO 60370
60740 IF KT > (KTMAX + 1) GOTO 60370
60750 PRINT K$(KT);
60760 KT = KT + 1
60770 GOTO 60370
60780 REM ********** INSERT ***********
60790 IF KT > KTMAX GOTO 60370
60800 X9 = MAX
60810 WHILE X9 > KT
60820 X9 = X9 - 1
60830 K$(X9 + 1) = K$(X9)
60840 WEND 
60850 K$(KT) = " "
60860 KTMAX = KTMAX + 1
60870 FOR T9 = KT TO KTMAX
60880 PRINT K$(T9);
60890 NEXT T9
60900 T6 = (KTMAX - KT) + 1
60910 FOR T7 = 1 TO T6
60920 PRINT CHR$(8);
60930 NEXT T7
60940 GOTO 60370
60950 REM ********** DELETE ***********
60960 IF KT > KTMAX GOTO 60370
60970 K$(MAX + 1) = ""
60980 X9 = KT 
60990 WHILE X9 <= MAX
61000 K$(X9) = K$(X9 + 1)
61010 X9 = X9 + 1
61020 WEND 
61030 KTMAX = KTMAX - 1
61040 FOR T9 = KT TO KTMAX
61050 PRINT K$(T9);
61060 NEXT T9
61070 PRINT "_";
61080 T7 = (KTMAX - KT) + 2
61090 FOR T8 = 1 TO T7
61100 PRINT CHR$(8);
61110 NEXT T8
61120 GOTO 60370
61130 REM ********* BACKSPACE ********
61140 IF KT = 1 GOTO 60370
61150 KT = KT - 1
61160 PRINT CHR$(8);
61170 K$(KT) = " " 
61180 PRINT "_";
61190 PRINT CHR$(8);
61200 GOTO 60370
61210 REM *******  INPUT NOT ACCEPTABLE  ********
61220 PRINT CHR$(7);
61230 GOTO 60380
61240 REM ********* CLEAR STRINGS ********
61250 MAX = LEN(A$)
61260 D2$ = ""
61270 D1$ = ""
61280 DFLG = 0
61290 FOR Q93 = 1 TO MAX
61300 R$ = MID$(A$,Q93,1)
61310 IF INSTR(DIG$,R$) = 0 GOTO 61380
61320 IF R$ = "." OR DFLG = 1 GOTO 61360
61330 IF DFLG = 1 GOTO 61360
61340 D2$ = D2$ + R$
61350 GOTO 61380
61360 D1$ = D1$ + R$
61370 DFLG = 1
61380 NEXT Q93
61390 DA# = VAL(D2$)
61400 D1# = VAL(D1$)
61410 DT# = DA# + D1#
61420 IF K$(1) = "-" THEN DT# =  -DT#   
61430 RETURN
61900 REM ****** CHECK FOR ASC0
61910 S4$ = INKEY$
61920 C2 =  ASC(S4$)
61930 IF C2 = 83 THEN C = 1
61940 IF C2 = 82 THEN C = 6
61950 IF C2 = 75 THEN C = 19
61960 IF C2 = 77 THEN C = 4 
61970 RETURN
64200 REM
64210 PRINT " ERROR NUMBER ";ERR ; " ON LINE ";ERL
64270 CLOSE 
64280 PRINT " PRESS ANY KEY TO CONTINUE"
64290 IF INKEY$ = "" THEN 64290
64300 RESUME 3 
```

## SORTSTR.BAS

```bas
3 ON ERROR GOTO 64200
4 DEFINT K,F,T,L,R,N
5 DIM K$(55)
6 DIM FLDN$(1,60),FTY(1,60),FL(1,60)
7 DEFSTR X,P
8 DIM X(4200),T(4200),NREC(17),FD(3),Z$(60),L(100),R(100),F$(17)
10 MAXR= 6
12 GOSUB 8000
15 GOSUB 13000
16 H = A
17 GOSUB 7000
19 DEFSTR Z
20 A = H
25 GOSUB 9000
30 FLG = 0
45 L = 0
50 FOR T = 1 TO NREC(A)
55 L = L + FL(A,T)
60 NEXT T
70 DEFINT T
90 GOSUB 11000
100 GOSUB 10000
400 REM ******  GET DATA FROM DISKS  *******
405 GOSUB 16000
420 FOR T = 1 TO 30000 
429 IF T > MRN GOTO 26000
430 GET #1,T
435 N = FD(1)
500 LET X(T) = Z$(N)
705 T(T) = T
710 NEXT T
1200 LP = 1   
1210 FLG = 0
2000 REM
2010 M = 5000
2020 GOSUB 30000
2110 GOSUB 2200
2120 GOSUB 30000
2130 GOTO 3000
2200 REM
2210 L(1) = 1 
2220 R(1) = MAXR
2230 S = 1
2240 IF (L(S)) < R(S) THEN 2270
2250    S = S - 1
2260    GOTO 2640
2270 I = L(S)
2280 J = R(S)
2290 P1= X(J)
2300 M = (I + J)/2
2310 IF (J - I<6) THEN 2400
2320 IF ((P1>X(I)) AND (P1<X(M))) THEN 2400
2330 IF ((P1<X(I)) AND (P1>X(M))) THEN 2400
2340 IF ((X(I)<X(M)) AND (X(I)>P1)) THEN 2380
2350 IF ((X(I)>X(M)) AND (X(I)<P1)) THEN 2380
2360 SWAP X(M),X(J)
2365 SWAP T(M),T(J)
2370 GOTO 2390
2380 SWAP X(I),X(J)
2385 SWAP T(I),T(J)
2390 P1 = X(J)
2400 WHILE (I<J)          
2410 WHILE (X(I)< P1)   
2420 I = I + 1
2430 WEND     
2440 J=J-1
2450 WHILE  (I<J)AND(P1<X(J))  
2460 J = J-1
2470 WEND     
2480 IF (I>=J) THEN 2510
2490 SWAP X(I),X(J)
2500 SWAP T(I),T(J)
2510 WEND      
2520 J = R(S)
2530 SWAP X(I),X(J)
2540 SWAP ^ Φ^BTop Margin: ▒(ΦñB┐`
```

## SSREMARK.BAS

```bas
ION NUMBER(S)  Reg #S21â∞Φ¿≈╕  ΦüRΦ╡R                            :Φ¼RΦV9┐NΦùNΦçRO:            AND/OR PURCHASED FROM:-------------------------------------------:ΦLRΦ÷8┐NΦ7NΦ'RO:PHONE NUMBER(S):                                                             :Φ∞QΦû8┐NΦ╫MΦ╟QO:                -------------------------------------------------------------:ΦîQΦ68┐NΦwMΦgQO:-----------------------------------------------------------------------------:Φ,QΦ╓7Θ  ïσ]├                                               ΦG@╜ë╠Uï∞UΘ  ┐NΦ╙XΦ├\O:LICENSE AGREEMENT: You may use the program, as indicated on purchase receipt,:Φê\Φ2C┐NΦsXΦc\O:on  a  single  machine.   You may make backup copies for storage only.   You :Φ(\Φ╥B┐NΦXΦ\O:may not copy or distribute EZ-SpreadSheet to anyone.  EZ-Spreadsheet         :Φ╚[ΦrB┐NΦ│WΦú[O:is licensed to the registered user only.  All copyrights are reserved by     :Φh[ΦB┐NΦSWΦC[O:EZX Corporation.  This license is effective until mutually terminated.       :Φ[Φ▓A┐NΦ≤VΦπZO:    EZX Corporation and affiliates make no claims and offer no warranties of :Φ¿ZΦRA┐NΦôVΦâZO:any sort for  use of our products.  We assume no responsibility for any sort :ΦHZΦ≥@┐NΦ3VΦ#ZO:of damage(mental or physical) resulting from the apparent or actual use of   :ΦΦYΦÆ@┐NΦ╙UΦ├YO:our products. I have read and understand the terms of the above license.     :ΦêYΦ2@┐NΦsUΦcYO>Signed:#                                       Date:#                        <Φ╒?┐NΦU╕
 P╕  Φ?XΦ┴?┐NΦUΦ≥XO>Signed:#                                       Date:#                        <Φ╖XΦa?┐NΦóTΦÆXO:-----------------------------------------------------------------------------:ΦWXΦ?┐NΦBTΦ2XO:At this time you may wish to extend the 30 day phone support for your program:Φ≈WΦí>┐NΦΓSΦ╥WO:or register for a site license.  Otherwise, phone support is $1 per minute   :ΦùWΦA>┐NΦéSΦrWO:(15 min. minimum, VISA/MC/AX ONLY).  You may also prepay for the next update.:Φ7WΦß=┐NΦ"SΦWO:   (1)  One year phone support $49 each. No S&H.-- $ POT
4220 RETURN
5000 REM - FIND TARGET FIELD
5005 CFFLG = 5
5010 GOSUB 9000 /CLEAR LINES 20-24
5020 PRINT "MOVE THE CURSOR TO THE TARGET FIELD THEN PRESS RETURN "
5060 MFLG = 5
5070 GOSUB 60000 / ALLOWS YOU TO MOVE THE CURSOR AROUND
5080 MFLG = 1
5085 GOSUB 4000 / CHECK TO SEE IF THERE IS A NUMBER IN THIS SPOT
5090 IF N = 0 THEN 5000 / IF THERE IS NO NUMBER IN THIS SPOT THEN TRY AGAIN
5100 TF(NH) = N / TARGET FIELD = THE NUMBER IN THIS SPOT
5110 TFH = N /TARGET FIELD HOLD EQUALS THE NUMBER IN THIS SPOT
5190 CFFLG = 1
5200 RETURN
5500 REM - FIND TARGET FIELD
5505 CFFLG = 5
5510 GOSUB 9000 /CLEAR LINES 20-24
5520 PRINT "MOVE THE CURSOR TO ANOTHER FIELD YOU WANT TO ADD THEN PRESS RETURN"
5560 MFLG = 5 /TURN MOVE FLAG ON
5570 GOSUB 60000 /ALLOW YOU TO MOVE THE * AROUND
5580 MFLG = 1 /TURN MOVE FLAG OFF
5585 GOSUB 4000 /CHECK TO SEE IF THERE IS A NUMBER HERE
5590 IF N = 0 THEN 5500 / IF THERE IS NO NUMBER HERE TRY AGAIN
5600 TF(N) = TFH /TARGERT FIELD OF N EQUALS TARGER FIELD HOLD
5610 CT(N) = 1 /CALCULATION TYPE IS ADD
5690 CFFLG = 1
5700 RETURN
6000 REM - FIND SECONDARY CALCULATIN FIELD
6005 SFLG = 5 
6010 GOSUB 9000 /CLEAR LINES 21-24
6020 PRINT "MOVE THE CURSOR TO THE SECONDARY CALCULATION FIELD THEN PRESS RETURN"
6060 MFLG = 5 / TURN MOVE FLAG ON
6070 GOSUB 60000 /GOTO INPUT SUBROUTINE TO MOVE THE * TO THE CORRECT FIELD
6080 MFLG = 1
6085 GOSUB 4000 / CHECK TO SEE IF THERE IS A NUMBER WHERE THE * IS
6090 IF N = 0 THEN 6000 / IF THERE IS NOT A NUMBER HERE TRY AGAIN
6100 CF(NH) = N / CALCULATION FIELD EQUALS THIS NUMBER
6110 CF(N) = NH / THE CALCULATION FIELD OF THE SECONDARY CALCULATION NUMBER EQUALS THE SOURCE FIELD
6120 TF(N) = TF(NH) / THE TARGET FIELD EQUALS THE TARGET FIELD OF N HOLD
6130 CT(N) = CT(NH) / THE CALCULATION TYPE OF THE SECONDARY FIELD EQUALS THE CALCULATION TYPE OF THE SOURCE FIELD
6190 SFLG = 1
6200 RETURN
6600 REM - FIND SECONDARY CALCULATIN FIELD
6605 SFLG = 5
7000 REM -  GET CONSTANT FOR CALCULATION
7100 GOSUB 9000 /CLEAR LINES 21-24
7110 PRINT "ENTER THE CONSTANT "
7120 GOSUB 60180 /INPUT A DOUBLE PRECISION NUMBER
7130 XCST(NH) = DT# /CONSTANT EQUALS THE VALUE RETURNED FROM THE SUBROUTINE
7140 RETURN
8000 REM ***** FILE NAME ACCEPLABLE TEST ************
8010 TEST = 1
8100 FOR Q = 1 TO LEN(A$) / FOR EACH CHARACTER IN A$
8110 K$(Q) = MID$(A$,Q,1) / K$ IS THE CHARACTER
8120 C = ASC(K$(Q)) 
8130 IF C < 48 OR C > 122 THEN TEST = 4 / IF NOT A NUMBER OR LETTER THEN TEST IS NEGITIVE
8140 IF Q = 1 AND ( C < 65 OR C > 122 ) THEN TEST = 4 /IF THE FIRST CHARACTER IS NOT A LETTER THEN TEST IS NEGITIVE
8150 NEXT Q /NEXT CHARACTER
8190 RETURN
9000 REM CLEAR BOTTOM LINES
9010 LI = 21
9015 GOSUB 600 / LOCATE 21ST LINE
9020 FOR T = 1 TO 4 
9030 PRINT "                                                                              "; CLEAR LINES 21-24
9040 NEXT T
9041 PRINT "      ";
9042 GOSUB 600
9050 RETURN
20000 REM INPUT A NUMBER
20100 GOSUB 9000 /CLEAR LINES 21-24
20110 REM FIND NUMBER
20120 GOSUB 4000 / CHECK IF THERE IS A NUMBER HERE
20130 IF N = 0 THEN RETURN /IF THERE IS A NUMBER HERE THEN RETURN
20140 NH= N / NHOLD EQUALS N
20200 LKT = LIN(T) /LINE COUNT = LINE OF T , T EQUALS N
20210 CKT = COL(T) /COLUMN COUNT = COLUMN OF T
20810 GOSUB 60180 /INPUT DOUBLE PRECISION SUBROUTINE
20815 T = NH /RESET T EQUALS NHOLD
20820 IF DS(T) = 2 THEN GOSUB 49020 /IF DISPLAY TYPE IS A DOLLAR AND CENTS THEN GOSUB 49020
20822 T2= LEN(A$) /T2 IS THE LENGTH OF A$
20823 T$ = "__________" 
20824 B$ = MID$(T$,T2) /B$ EQUALS A STRING OF UNDERLINES
20826 A$ = B$ + A$ /ADD UNDERLINES TO THE FRONT OF THE NUMBER
20828 XC = DT# - X(T) / XC THE CHANGE IN X EQUALS 
20830 X(T) = DT# /THE VALUE OF THE NUMBER EQUALS THE VALUE RETURNED FROM THE SUBROUTINE
20835 GOSUB 21130
20838 T = NH /RESET T TO NHOLD
20840 IF CT(T) > 0 THEN GOTO 27000 /IF THERE IS A CALCULATION SPECIFIED FOR THIS NUMBER THEN GOTO 27000
20850 RETURN
21000 REM input overlay line
21010 GOSUB 9000 /CLEAR LINES 21-24
21020 PRINT "ENTER THE STRING "
21100 MAX = 77 /MAXIMUM LENGTH OF THE STRING
21120 GOSUB 62030 /INPUT SUBROUTINE FOR STRINGS
21130 GOSUB 21200 /PUT NEW STRING INTO THE LINE
21140 LI = LKT 
21150 GOSUB 600 /LOCATE THE START OF THE LINE AT COLUMN ONE
21155 PRINT L$(SN,LKT) /PRINT THE LINE ONE THE SCREEN
21160 LI = LKT /LINE NUMBER EQUALS LINE COUNT
21170 TB = CKT /TAB EQUALS COLUMN COUNT
21180 GOSUB 650 /LOCATE
21185 PRINT "*"  
21190 RETURN
21200 IF L$(SN,LKT) = "" THEN L$(SN,LKT) = "                                                                             " / IF                 :Φ▀UΦë<┐NΦ╩QΦ║UO:      ---------------------------------------------------------------------  :Φ⌂UΦ)<┐NΦjQΦZUO:                                                                             :ΦUΦ╔;┐NΦ
QΦ·TO:  4.  How did you find out about EZ-SpreadSheet?                             :Φ┐TΦi;┐NΦ¬PΦÜTO:                                                 --------------------------  :Φ_TΦ	;┐NΦJPΦ:TO:                                                                             :Φ SΦ⌐:┐NΦΩOΦ┌SO:      ---------------------------------------------------------------------  :ΦƒSΦI:Θ  ïσ]├                                                                                                                                                                  ΦG@┴ë╠Uï∞UΘ  ┐NΦ╙XΦ├\O:                                                                             :Φê\Φ2C┐NΦsXΦc\O:  5.  How can we improve EZ-SpreadSheet (feel free to add more pages)?       :Φ(\Φ╥B┐NΦXΦ\O:                                                                             :Φ╚[ΦrB┐NΦ│WΦú[O:                                                                             :Φh[ΦB┐NΦSWΦC[O:      ---------------------------------------------------------------------  :Φ[Φ▓A┐NΦ≤VΦπZO:                                                                             :Φ¿ZΦRA┐NΦôVΦâZO:      ---------------------------------------------------------------------  :ΦHZΦ≥@┐NΦ3VΦ#ZO:                                                                             :ΦΦYΦÆ@┐NΦ╙UΦ├YO:      ---------------------------------------------------------------------  :ΦêYΦ2@┐NΦsUΦcYO:                                                                             :Φ(YΦ╥?┐NΦUΦYO:      ---------------------------------------------------------------------  :Φ╚XΦr?┐NΦ│TΦúXO:                                                                             :ΦhXΦ?┐NΦSTΦCXO:      ---------------------------------------------------------------------  :ΦXΦ▓>┐NΦ≤SΦπWO:                                                                             :Φ¿WΦR>┐NΦôSΦâWO:      ---------------------------------------------------------------------  :ΦHWΦ≥=┐NΦ3SΦ#WO:                                                                             :ΦΦVΦÆ=┐NΦ╙RΦ├VO-------------------------------------------------------------------------------ΦêVΦ2=┐NΦsRΦ{VΦ%=┐NΦfRΦVVKCheck here [ ] if you would like to receive information on EZX's other fineΦVΦ╔<┐NΦ
RΦ·Uproducts which include:Φ≈UΦí<┐NΦΓQΦΩUΦö<┐NΦ╒QΦ┼UM$89 EZ-Forms Executive - Create/Revise/Fill-in/Save/Print all kinds of forms.ΦîUΦ6<┐NΦwQΦgUN                       - The ultimate forms management package with text wrap,Φ-UΦ╫;┐NΦQΦUO                         spreadsheet style math, context sensitive help, etc...Φ═TΦw;┐NΦ╕PΦ¿TO$49 EZX-Write          - Quick and easy WordStar(tm) compatible word processor.ΦmTΦ;┐NΦXPΦ`TΦ
;┐NΦKPΦSTΦ²:┐NΦ>PΦFTΦ≡:┐NΦ1PΦ9TΦπ:Θ  ïσ]├                                                            ΦG@3ë╠Uï∞UΘUï─ v■ïΦUΘ  â∞╕ ╣ ╙αëFΦì~ΦΦ╢B═!Φ┘BïFΦ╣ ╙αëFΦïFΦ╣ ╙ΦëFµïFµëFΘ  ïFïσ]┬ Uï─ v■ïΦUΘ  â∞╕  ëFΣ╕ ëFΦïFΣ% ëFεì~ΦΦ^B═ΦüBïFΦ%  ╣ ╙ΦëFµïFµ=É uΘü╕  Φ¼5Φ÷4Φ%XΦ?\ΦΘBΦX╕ P╕  ΦW[Φ\J Error while trying to initialize your printer!!!  You must have a printerΦ▐[ΦêBΦ╗WΦ╜[H connected and on-line before you can install EZ-SpreadSheet.  Without aΦë[Φ3BΦfWΦh[G printer you couldn't print out the proof of purchase/registration formΦ5[Φ▀AΦWΦ[J that will be completed on-line and printed for return to EZX Corporation.Φ▐ZΦêAΦ╗VΦ╒ZΦ⌂A3└Θß=Θ  ïσ]├â∞kLLΦ┘²=  ╕ uHP.áá.2Σ4Y#┴└uΘ█ ╕  Φ 4ΦJ3ΦyVΦôZΦ=AΦpV╕ P╕  Φ½YΦhZ@ You can install ONLY the original copy of EZ-SpreadSheet on theΦ<ZΦµ@ΦVΦZH master diskette in drive A: !!!!  Please insert the master diskette andΦτYΦæ@Φ─UΦ╞Y try again.Φ╧YΦy@3└Θ█<Φ-²Θ  ïσ]├                                                                                                                                                                                                          ΦG@Oë╠Uï∞UΘ  L╕ P╕ P╕P P╕ PΦAE" EZ-SpreadSheet Valueware Version ▒PΦqEΦ
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0267

     Volume in drive A has no label
     Directory of A:\

    CHECK             4352   1-01-80
    CRC      TXT      1099   1-10-85  10:50a
    CRCK4    COM      1536  10-21-82   5:50p
    MAIN     EXE     89728   1-01-80
    READ     ME        679   1-01-85  12:24p
    REMARKST BAS     10368   2-13-80  12:04a
    SORT     BAS     12032   1-01-80
    SORTINT  BAS     11648   1-01-80
    SORTSTR  BAS     11392   1-01-80
    SS       BAS     28672   1-01-80
    SS       EXE     64384   1-01-80
    SSREMARK BAS     32640   1-01-80
    TAX               3328   1-01-80
           13 file(s)     271858 bytes
                           44032 bytes free
