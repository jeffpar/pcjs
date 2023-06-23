---
layout: page
title: "PC-SIG Diskette Library (Disk #267)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0267/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0267"
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

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #267, version v1 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  SORT    .BAS         CRC = 43 02

--> FILE:  SORTINT .BAS         CRC = 9F B7

--> FILE:  SORTSTR .BAS         CRC = 99 30

--> FILE:  SS  ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷
```
{% endraw %}

## REMARKST.BAS

{% raw %}
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
{% endraw %}

## SORTINT.BAS

{% raw %}
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
{% endraw %}

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
