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
20160 FOR RN = RNSS TO RNSF / FOR RECORD NUMBER START TO FINISH������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������TO FIELDS *****
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
= MKS$(S#) / SINGLE PRECISION SUBTOTALS
25992 R
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
   SAMPLE08GRF           ��N�  SAMPLE09GRF           ��Od  ��������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������HDR
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
����������������HDR
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
R ; " ON LINE ";ERL
64270 CLOSE
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
2540 SWAP ^ �^BTop Margin: �(�B�`W�j��ABBottom Margin: �(�B�bW�J��!BLeft Margin: �(�fB�^W�,�� =D t�> ��APage Length: �(�=B�ZW����APage Width: �(� B�\W����T =C t�L �APrinter Init String: �(��A�dW�-��APrinter Exit String: �(��A��W���F�2�=X t�<��F�2��u�,�W�b�+A�AAEZ-SPRED.CNF�IB�R�h?��� �jR�[?��T�XTM=�`P�  ��W��.��@�  �:X�nXBM=�bP�  �W��.��@�  �X�PXLM=�^P�  �W��.�@�  ��W�2XPL=�ZP�  �W��.�@�  ��W�XPW=�\P�  �bW��.�n@�  ��W��WPI=�d�Z@�  �W��.�M@�  �W��WPF=���9@�  �W��.�,@�  �W�WFG=�2P�  �W��.�@�  �bW�WBG=�4P�  ��V��.��?�  �DW�xWFF=�6P�  ��V��.��?�  �&W�ZWFB=�8P�  �V��.�?�  �W�<WCF=�:P�  �V��.�?�  ��V�WCB=�<P�  �lV��.�x?�  ��V� WWF=�>P�  �NV��.�Z?�  �V��VWB=�@P�  �0V��.�<?�  �V��VPS=�BP�  �V��.�?�  �rV�k=��Q�a=�  ��]�U���v���U�  �^�6�G�2��u� ���F�|R�K��>� P�^�6�G��<@�  �V�=�^�6�G��^�6�Gǋ^�6�G��^�6�Gŋ^�6�G�P�^�6�G�Y�+�}�nA�^�6�G�Q�^�6�G������ĽdWL�^�6�G�P�^�6�G�P��4u��^�6�Gŋ^�6+Gǋ^�6�G��^�6�G�=  �: �F��Q�K�$>� P�^�6�G��?�  �jU�c<�^�6�Gǋ^�6G��^�6�GǸ  ���^�6�G�P�^�6�G�P�lW�牸 P�l� ��@��Au� �^�6�G�P�^�6�G�P膜�+ �  P�l� �@�A4u� �^�6�G�P�^�6�G�P�o��F�Q���u=�  ��T��;�^�6�G�P���]=�?Y��^�6�Gǋ^�6�G�P�^�6�G����X�� �^�6�GŃ�YIt
�^�6�G����F�P�T�g;�  ��]�U���v���U�  � P� ��8��-�zP�|TPrinting page number: �^�6�G�P�  �S�TT	.  Press �;��<Ctrl X�P�=蕋�-P�/T	 to exit.��:�  ��]�U���v���U�  � P� �R8�O-��O��SPAUSE after page �^�6�G�P�  �8S��S: Reprint, Skip, Print, eXit  �|:�<<[R/S/P/X]  �P�<� ��W艀�W�2��-��P��<�2�=R t�! �^�6�G�H�^�6�Gɋ^�6�G�H�^�6�G��1 =X t� �@ �^�6�Gɸ �^�6�G�� =S t�
 � �^�6�G��  ��]�U���v���U�  � P� P�P P� P�;!EZ-SpreadSheet ValueWare Version.�P�;�^q��N��R�9��N��RL Thank you for trying this "Valueware (tm)" version of EZ-SpreadSheet.   The�R�59�hN�jRL printer driver has been  slowed down for all printing  except the first 25%�2R��8�N�RL or 15 lines (whichever is greater).   To receive a full speed  "registered"��Q�8�M�QL version of  EZ-SpreadSheet  without all these nasty little notices, contact�Q�*8�]M�_QL your software dealer  or  order direct from us with your Visa/MC/AX card at�'Q��7�M�QL 1-800-999-6999, ext. EZS-PCSIG.  The price is only $49 plus S&H.  For other��P�x7�L�PL information, call 1-713-338-2238.  Shipping and Handling: $5 USA/48 states;�uP�7�RL�TPL 2nd day air $10, required for AK, HI, PR, and Canada; $20 foreign.   TX add�P��6��K��OL 8 percent sales tax.    To order by mail, send your check or money order to��O�m6�K�OL       EZX Corporation at 403 NASA Road 1 East, Webster, TX, 77598 USA      �jO�6�GK�aO�6�>K�@OL    Press Shift+PrtSc to print this message.    Ctrl-X to abort printing.   �O�5�'�'��n�  ��]�U���v���U�  � P� P�P P� P�F7!EZ-SpreadSheet ValueWare Version.�P�w7� m�J�N�P5�J�NL Thank you for trying this "Valueware (tm)" version of EZ-SpreadSheet.   The�MN��4�*J�,NL print function is fully operational except  that it will not allow printing��M�4��I��ML to a file.  To receive your own fully operational  "registered"  version of�M�E4�xI�zML EZ-SpreadSheet without all these nasty little notes,  contact your friendly�BM��3�I�!ML local software dealer or  order direct from us with your Visa/MC/AX card at��L�3��H��LL 1-800-999-6999, ext. EZS-PCSIG.  The price is only $49 plus S&H.  For other�L�:3�mH�oLL information, call 1-713-338-2238.  Shipping and Handling: $5 USA/48 states;�7L��2�H�LL 2nd day air $10, required for AK, HI, PR, and Canada; $20 foreign.   TX add��K�2�G�KL 8 percent sales tax.    To order by mail, send your check or money order to�K�/2�bG�dKL       EZX Corporation at 403 NASA Road 1 East, Webster, TX, 77598 USA      �,K��1�	G�#K��1� G�KL    Press Shift+PrtSc to print this message.          Any key to continue.  ��J�t1���[V�.3 ��3u����j�  ��]Ã�G�  �F��  �F��  �F��32PRINT Menu: File, Printer, Range, Setup or eXit.  �P�#3軓��2[F/P/R/S/X]  �P�
3臁�W�w�W�2��#$��P��2� F��m2�  ��I�0�2�=F t�+ � �u� ����  �� �W�F ��P��^2�V =R t�1 �:2PRINT Range: �P�2�����W�R ��P��%2� =S t� ��W�S ��P��2�2�P��4�F �	5�P �5�X ��4��5u����2�=X t� ���k =F t�I �  �F��1Enter filename: �P��1肒�~�W�1LST�(��1�|��F�2�=  t� �� =P t� �~�W�X1LST:�(�d1�\�F��Z+`+b�F��^�F��FW�~��1�B�F�� �dB�N/=  u�P �1Cannot create: ����0�2��0,  Press any key...��1�P�,1�đ�W�2u�  �F����dW�c�.�/�Fø �u�) .�/.+/ � ����F��F�= |� � �F�� .�/@�F�� ���F�.;/~�X
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
14520 GOSUB  12000
14540 RUN "SORTINT"
14700 GOTO 10
14900 REM 
14920 GOSUB 12000
14940 RUN "SORTSTR"
15000 REM ******  CLEAR SCREEN 
15010 PRINT CHR$(26)
15020 RETURN
16000 REM ******  FIND MAX RECORD 
16100 MRN = LOF(1)/L(A)
16200 RETURN
26000 REM ******* ON ERROR ROUTINE ************
26200 PRINT "END OF FILE"
26205 MAXR = T - 1
26206 PRINT MAXR," MAX RECORD "
26210 GOTO 1200
30000 FOR T = 1 TO MAXR
31000 PRINT X(T)
32000 NEXT T
33000 RETURN
60000 REM *******  INTEGER LESS THEN 100 CHECK  ********
60010 MAX = 2
60020 ACT$ = "1234567890"
60030 PRINT ">__<";
60040 GOTO 60200
60050 REM *******  INTEGER *******                        
60060 MAX = 8
60070 ACT$ = "1234567890-+,"
60080 PRINT ">________<";
60090 GOTO 60200
60100 REM *******  SINGLE PRECISION  *******                        
60110 MAX = 10
60120 ACT$ = "1234567890+-,.%$"
60130 PRINT ">__________<";
60140 GOTO 60200
60150 REM ********* DOUBLE PRECISION
60160 MAX = 20
60170 ACT$ = "1234567890+-,.%$"
60180 PRINT ">____________________<";
60190 GOTO 60200
60200 REM ********** NUMBER CHECK **********
60210 A$ = ""
60220 K$(20) = " "
60230 KTMAX = 0
60240 FOR T9 = 1 TO MAX
60250 K$(T9) = " "
60260 NEXT T9
60270 DIG$ = "1234567890."
60280 DOTFLG = 0
60290 T2 = MAX + 1
60300 FOR T6 = 1 TO T2
60310 PRINT CHR$(8);
60320 NEXT T6
60330 IF INKEY$ = "" GOTO 60340 ELSE GOTO 60330
60340 KT = 0
60350 REM ***********  CHECK ALFANUMERIC INPUT FOR LENGTH  ***********
60360 KT = KT + 1
60370 REM     
60380 W$ = INKEY$
60390 IF W$ = "" GOTO 60380
60400 C = ASC(W$)
60410 IF C = 0 THEN GOSUB 61900
60420 IF C = 13 GOTO 60540
60430 IF C = 17 GOTO 61130
60440 IF C = 19 GOTO 60670
60450 IF C = 4 GOTO 60720
60460 IF C = 6 GOTO 60780
60470 IF C = 1 GOTO 60950
60480 IF KT > MAX GOTO 60370
60490 IF INSTR(ACT$,W$) = 0 GOTO 61210
60500 K$(KT) = W$
60510 PRINT K$(KT);
60520 IF KT > KTMAX THEN KTMAX = KT
60530 GOTO 60360
60540 REM **********  RETURN  **********
60550 FOR T9 = 1 TO KTMAX
60560 A$ = A$ + K$(T9)
60610 NEXT T9
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
60800 W9 = MAX
60810 WHILE W9 > KT
60820 W9 = W9 - 1
60830 K$(W9 + 1) = K$(W9)
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
60980 W9 = KT 
60990 WHILE W9 <= MAX
61000 K$(W9) = K$(W9 + 1)
61010 W9 = W9 + 1
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
61340 D2� A�^�6�G�Q�^�6�G�P�^�6�G�P�[B�  �gB� �B蕋�^�6�G������ąd��RP3�3�[Y�nCu�- �^�6�G������Ľd�^�6�G������W3�3�_&�E�&�U�YIt
�^�6�G����^�6�G�����
 ���YIt
�^�6�G��H��Y��^�6�G�P�  P�^�6�G�P��P�?��  ��]Ã��hP�jP�)���[�  �F��z>%DELETE: Row, Column, rAnge or eXit?  �P�>�?��I>[R/C/A/X]  �P�>���W薂�W�2��/��P��,>�Q���=�  �GU�@<�2�=A t�5 � �F���=DELETE range: �P�1>�ɞ�ş�W�A ��P���=�2�P��@�X ��@�R ��@�C ��@�Au�!��=Wait...�P��=�~��2�=X t� �L � =R t� ��� =C t� �@��֠�Z����2�=X � uHP��2�Y#��u� �� �F�  ��]�                                                                     
```

## SS.BAS

```bas
�\Fu� �F�P�F�P����F�P�F�P�^���YIt�F��<�YAt�N�� �� P�wY�+�}�� A�F�Q�hP�F�P�%E�  �1E� �oE�_��F������ąd��RP3�3�[Y�<Fu�% �F������Ľd�h�����W3�3�_&�E�&�U��hH�F�L�F�P�F�P�B�4u� �hP�F�P�F�P�F�P���- �h@�F�L�F�P�F�P��4u� �hP�F�P�F�P�F�P趼YIt�F��;�� P�  P�hP�jP�满h����
 ����ե�  ��]áhP�jP�è�o^�AINSERT: Row, Column or eXit?  �P�NA����@	[R/C/X]  �P�9A趏�W�?��W�2��R2��P���@�/T��@�  ��W��>�@Wait...�P��@茡�2�=X t� �+ � =R t� �&�� =C t� �����]�	�� �F�  ��]�                                                                                                                                                                                                                                                    �G@���U��U�oU���v���U�  � P� P�F P� P�6EFormulas�P�E�){�X��.�E�  �V\�\:  A formula is composed of cell references, functions, and��.�D�  �\�?\:  operators,  enclosed by parenthesis.  Example:  (A1+B2),��.�lD�  ��[��[8  is a simple addition formula.  Here are the operators:��.�#D�  �w[��.�D�  �j[�[2        +   Addition.           *  Multiplication.��.��C�  �'[�[[,        -   Subtraction.        /  Division.��.�C�  ��Z�[3        ^   Exponentiation.     :  Range Summation.��.�RC�  �Z��Z/        |   Logical OR.         &  Logical AND.��.�C�  �fZ�Z0        <   Less Than.          >  Greater Than.��.��B�  �%Z�YZ4        <=  Less or Equal.      >= Greater or Equal.��.�B�  ��Y�Z        =   Equality.��.�fB�  �Y��.�YB�  �Y��Y8  Parenthesis are used to control precedence.   Example:��.�B�  �dY�Y:  (A1*(B2+C4)),  the sum of B2 and C4 is multiplied by A1.��.��A�  �Y��.�A�  �Y�@Y*               Press any key to continue. ��?�W����y���  ��]�U���v���U�  � P� P�N P� P�fAEditing Keys�P�A�Uw��T��.�.A�  �X�X6   Most of the editing keys work in the normal manner.��.��@�  �;X��.��@�  �.X��.��@�  �!X�UX0   Crtl-End : Erase from cursor to end of field.��.�@�  ��W�X5      Ins   : Toggle from/to insert mode.  The cursor��.�F@�  �W��W-              grows thick while in this mode.��.�@�  �\W�W4      Esc   : Causes the cursor to move to the field��.��?�  �W�KW)              below the current location.��.�?�  ��V�W5      Home  : Move to the start of the field.  To the��.�C?�  �V��V5              start of the worksheet, if not editing.��.��>�  �QV�V3      End   : Move to the end of the field.  To the��.�>�  �V�AV3              end of the worksheet, if not editing.��.�u>�  ��U��U1      Del   : Delete the character at the cursor.��.�3>�  �U�U      �U��U-    : Delete the character before the cursor.��.��=�  �9U��.��=�  �,U�`U$         Press any key to continue. ��;�W�!��?u�(��  ��]�U���v���U�  � P� P�F P� P�=Printer Setup�P��=�zs��P��.�S=�  �T��T5   To setup the printer, execute the print command by��.�=�  �aT�T6   pressing the ALT and P keys at the same time.  When��.��<�  �T�NT1   the print menu appears, select the "S" option.��.�<�  ��S��.�w<�  ��S��S4   The printer setup menu has 3 opt815 T = NH
20820 IF DS(T) = 2 THEN GOSUB 49020
20822 T2= LEN(A$)
20823 T$ = "__________"
20824 B$ = MID$(T$,T2)
20826 A$ = B$ + A$
20828 XC = DT# - X(T)
20830 X(T) = DT#
20835 GOSUB 21130
20838 T = NH 
20840 IF CT(T) > 0 THEN GOTO 27000
20850 RETURN
21000 REM input overlay line
21010 GOSUB 9000
21020 PRINT "ENTER THE STRING "
21100 MAX = 77
21120 GOSUB 62030
21130 GOSUB 21200
21140 LI = LKT
21150 GOSUB 600
21155 PRINT L$(SN,LKT)
21160 LI = LKT
21170 TB = CKT
21180 GOSUB 650
21185 PRINT "*"
21190 RETURN
21200 IF L$(SN,LKT) = "" THEN L$(SN,LKT) = "                                                                             "
21205 L$ = L$(SN,LKT)
21210 B$ = MID$(L$,1,CKT)
21220 T = LEN(A$)
21230 T = CKT + T+1
21240 C$ = MID$(L$,T)
21250 L$ = B$ + A$ + C$
21255 L$(SN,LKT) = LEFT$(L$,78)
21260 RETURN
22000 REM ENTER A NEW NUMBER SUBROUTINE
22010 GOSUB 9000
22020 PRINT " HOW DO YOU WANT THIS NUMBER DISPLAYED "
22030 PRINT " 1 - Standard   2 - Dollar and cents format 0 - None"
22040 GOSUB 60000
22050 IF DT# < 0 OR DT# > 2 THEN 22000
22055 IF DT# = 0 THEN RETURN
22060 IF DT# = 2 THEN 22500
22110 MAXN = MAXN + 1
22120 SCR(MAXN) = SN
22130 LIN(MAXN) = LKT
22140 COL(MAXN) = CKT
22150 A$ = "__________0"
22200 GOSUB 21130
22210 GOSUB 9000
22220 PRINT "DO YOU WANT PLACE A NEW NUMBER RIGHT BELOW THIS ONE"
22230 PRINT "  1 - YES  2 - NO"
22240 GOSUB 60000
22250 IF DT# < 1 OR DT# > 2 THEN 22210
22260 IF DT# = 2 THEN RETURN
22270 LKT = LKT + 1
22275 GOSUB 22400
22280 GOTO 22110
22300 RETURN
22400 REM ERASE *
22410 LI = LKT - 1
22420 TB = CKT
22430 GOSUB 650
22440 PRINT " ";
22450 RETURN
22500 REM ENTER A NEW NUMBER SUBROUTINE
22600 GOSUB 9000
22610 MAXN = MAXN + 1
22615 DS(MAXN) = 2
22620 SCR(MAXN) = SN
22630 LIN(MAXN) = LKT
22640 COL(MAXN) = CKT
22650 A$ = "$_________0"
22700 GOSUB 21130
22710 GOSUB 9000
22720 PRINT "DO YOU WANT PLACE A NEW NUMBER RIGHT BELOW THIS ONE"
22730 PRINT "  1 - YES  2 - NO"
22740 GOSUB 60000
22750 IF DT# < 1 OR DT# > 2 THEN 22710
22760 IF DT# = 2 THEN RETURN
22770 LKT = LKT + 1
22775 GOSUB 22400
22780 GOTO 22610
22800 RETURN
23000 REM DEFINE CALCULATION
23100 GOSUB 9000
23150 GOSUB 4000
23200 REM DEFINE CALCULATION
23210 IF N = 0 THEN RETURN
23215 NH = N
23220 PRINT "1.ADD   2.SUB   3.MULT   4.DIVIDE BY   5.DIVIDE INTO   6.MAX   7.MIN   8.ADD K"
23230 PRINT "9.MULT K    10.N-K   11.K-N   12.N/K   13.K/N    14. to 20. Custom subroutines"
23240 PRINT "21.ABS  22.ATN  23.COS  24.EXP  25.LOG 26.SIN 27.SQR 28.SQ  29.TAN   30.DELETE"
23250 PRINT "        Enter the type of calculation you want then press return. 0 for none";
23260 LI = 24
23270 GOSUB 600
23300 GOSUB 60000
23305 IF DT# = 0 THEN 31000
23310 CT(N) = DT#
23320 ON DT# GOSUB 24000,24100,24200,24300,24400,24500,24600,24700,24800,24900,25000,25100,25200,25300,25400,25500,25600,25700,25800,25900,24100,24100,24100,24100,24100,24100,24100,24100,24100,52000
23340 RETURN
24000 REM - ADD ROUTINE
24010 GOSUB 5000 
24020 GOSUB 9000
24030 PRINT " DO YOU WANT TO ADD ANY MORE NUMBERS TO THIS TARGET FIELD "
24035 PRINT "   1 - YES  2 - NO "
24040 GOSUB 60000
24050 IF DT# = 2 THEN RETURN
24060 GOSUB 5500
24090 GOTO 24020
24100 REM - SUBTRACT
24110 GOSUB 5000
24120 RETURN
24200 REM MULTIPLY
24210 GOSUB 5000
24220 GOSUB 6000
24230 RETURN
24300 REM DIVIDE BY ANOTHER NUMBER
24310 GOSUB 5000
24320 GOSUB 6000
24325 CT(N) = 5
24330 RETURN
24400 REM DIVIDE INTO ANOTHER NUMBER
24410 GOSUB 5000
24420 GOSUB 6000
24425 CT(N) = 4
24430 RETURN
24500 REM MAXIMUM
24510 GOSUB 5000
24520 X(N) = -1E+07
24590 RETURN
24600 REM MIN
24610 GOSUB 5000
24620 X(N) = 999999999#
24690 RETURN
24700 REM ADD TO A CONSTANT
24710 GOSUB 5000
24720 GOSUB 7000
24790 RETURN
24800 REM MULTIPY BY A CONSTANT
24810 GOSUB 5000
24820 GOSUB 7000
24890 RETURN
24900 REM SUBTACT FROM A CONSTANT
24910 GOSUB 5000
24920 GOSUB 7000
24990 RETURN
25000 REM SUBTACT A CONSTANT FROM
25010 GOSUB 5000
25020 GOSUB 7000
25090 RETURN
25100 REM DIVIDE BY A CONSTANT
25110 GOSUB 5000
25120 GOSUB 7000
25190 RETURN
25200 REM DIVIDE INTO A CONSTANT
25210 GOSUB 5000
25220 GOSUB 7000
25300 REM CUSTOM 13
25390 RETURN
25400 REM CUSTOM 14
25490 RETURN
25500 REM CUSTOM 15
25590 RETURN
25600 REM CUSTOM 16
25690 RETURN
25700 REM CUSTOM 17
25790 RETURN
25800 REM CUSTOM 18
25890 RETURN
25900 REM CUSTOM 19
25990 RETURN
26000 REM ABS
26010 X = ABS(X)
26030 RETURN
26100 REM ATN
26110 X = ATN(X)
26130 RETURN
26200 REM COS
26210 X = COS(X)
26230 RETURN
26300 REM EXP
26310 X = Green       10: Light Green           Enter --> Next field��.�A�  �\X�X0       3: Cyan        11: Light Cyan            � P�  �W�RX --> Next field��.�@�  ��W�2X0       4: Red         12: Light Red             � P�  �7W��W --> Previous field��.�H@�  �W��WH       5: Magenta     13: Light Magenta         Esc --> Escape when done��.��?�  �CW�wW        6: Brown       14: Yellow��.�?�  �W�FW       7: Light Gray  15: White��=�S�5W��=�S�W!                           Press �=��\��R��V ESC �=��\��R��V to finish.�=� �F��F�= t� �' P� ��:�2W�~�W����= t� �' P� ��:�4W�~�W���� = t� �' P� �:�6W�~�W���� = t� �' P� �:�8W�~�W�j�� = t� �' P� �o:�:W�~�W�H�� = t� �' P� �M:�<W�~�W�&��c = t� �' P� �+:�>W�~�W���A = t� �' P�	 �	:�@W�~�W���� =	 t� �' P�
 ��9�BW�~�W����F�2�=� t� �F�H�F��F�= |� �	 �F�� �F�@�F��F�=	 � � �F��F�2�= t���W�b�=�=EZ-SPRED.CNF��>�N��;��� ��N��;��Q�UTM=�`P�  �RT��.�^=�  �T��TBM=�bP�  �4T��.�@=�  �T��TLM=�^P�  �T��.�"=�  �vT�TPL=�ZP�  ��S��.�=�  �XT�TPW=�\P�  ��S��.��<�  �:T�nTPI=�d��<�  �&T��.��<�  �T�MTPF=���<�  �T��.�<�  ��S�,TFG=�2P�  �zS��.�<�  ��S�TBG=�4P�  �\S��.�h<�  �S��SFF=�6P�  �>S��.�J<�  �S��SFB=�8P�  � S��.�,<�  �S�SCF=�:P�  �S��.�<�  �bS�SCB=�<P�  ��R��.��;�  �DS�xSWF=�>P�  ��R��.��;�  �&S�ZSWB=�@P�  �R��.�;�  �S�<SPS=�BP�  �R��.�;�  ��R��9��N��9�#s�]l��X��+衟�/��؏�[��  ��]�                          �G@���U��U�kU���v���U�  ��� P� Y�+�}�% A�F�Q�F������W3�3�_��d��fYIt�F����� P�@ Y�+�}�' A�F�Q�F�����
 ����F���  ��
YIt�F����� �����  ��]�U���v���U�  ���~�W.��-2�P.��-2�P�BL�     ��M�L��M�TL.��-2�P�&L�     ��M�hL�;L.��-2�P�L�     �M�OL�"L�L�~���K� P�  P�~���@� P�F�2�Y�+�}�J A�^�6�G�Q�^�6�G���C�2�P�1G�0 P�9 �@G�	H4u� �^�6�G���0 �C�YIt
�^�6�G����~W�~���C���C�  �  ���]�~FU���v���U�xn� �U���v��v���U�  ����3� P� Y�+�}�u A�F�Q�F�2䗊C2�F�� P� Y�+�~�H I�F�Q�F�2�% u� �F�2�P�F�2��?��V�� P�  ��Y�A�F�2� ����F�YAt�N���YIt�F����  ��]� U���v��v���U�  ���~��B�D�F��F2�- � �� �F�� P�F�2�Y�+�}�r A�F�Q�F�2�P� P�F�2�- Y��Y� �F��F�2�P�F2�P�F�2� P�F2� �94.�>&�W�F�2䗊C2�_� ���� �?��YIt�F���� P� P�P P� ��3�  ��]� ���  P��&�2�%0 =0 t�	 � �F�� �  �F�F�2��u� � �F� �F�  �F�� �2�F�>�F�4�F��'2� P�	 Y�+�}�9 A�F�Q��A	EZ-SPREAD� P�F��C�
�B� P�
 +F�P��YIt�F����� P�	 �X=�U�Y��?�F��Z3��T�Y�?��T��X:                   A POWERFUL BUT EASY TO USE SPREADSHEET.��X�q?�T�X�h?�F���2�^�6��W�A ��)A� P� Y�+�}�7 A�^�6�G�Q�^�6��W�^�6����@� P��A���@YIt
�^�6�G�����^�6��W�^�6���@���@�^�6��W�^�6���@��@�^�6��W�^�6���m@��@� P� Y�+�}� A�^�6�G�Q�^�6�G��W�^�6�G� �.���-2� _�^�6�A�^�6�G��W�^�6�G�- �.���-2� _�^�6�Aɋ^�6�G��W�^�6�G�E �.���-2� _�^�6�A��^�6�G��W�^�6�G�] �.���-2� _�^�6�A�YIt
�^�6�G��Y��2S�?5     Publisher:                                      ��-�f?� P� ��@�@�  �V�����  �V��V�=��R��V�=�F��!1�R�E?5     EZX Corporation                                 �^�6����>�@�  �<V�V�2=�eR��>5     403 NASA Road 1 East                            �^�6���>��?�  ��U�2V��<�R�>5     Webster, TX 77598 USA                           �^�6���?>�m?�  �U��U�<�Q�C>5     (713) 338-2238                                  �^�6����=�?�  �:U�U�0<�F���/�]Q�wU�!<�TQ�VU?      Portions copyrighted by EZX Corporation and P&M Software.�+U��;�Q�"U��;�F��_/��P�U�;��P��T3                         Press any key to continue.�;�F��/�
 �,< �F��F�2��u�* � �< �F��F�P�)@� �5@� �/@��@u���� � ��; �F��F�;F�u����F��.��<	EZ-SPREAD�F�P� �!>�
�=� P�F�P���s8u�r��J��O�~��R��:�  ��]�U���v���U�  ��L�<EZ-SPRED.CNF�(��<費u�y�W�b<EZ-SPRED.CNF�BM�:��� �M�:���S4u�9��O���P��Q�CR�[:�~�W����;�<  �!=� P� �Y=��<�~�W��k��W� P� �%>� �F�LL���;���'<�~�W�*`�F��~��;�;TM�I<u� �F��`�~��;�;BM�.<u� �F��b�~��n;�;LM�<u� �F��^�~��S;�i;PL��;u� �F��Z�~��8;�N;PW��;u� �F��\�~��;�3;PI��;u� �dW���;�P�-;�~���:�;PF�;u� ��W����:�P�;�~���:��:FG�v;u� �F��2�~��:��:BG�[;u� �F��4�~��:�:FF�@;u� �F��6�~��:�:FB�%;u� �F��8�~��e:�{:CF�
;u� �F��:�~��J:�`:CB��:u� �F��<�~��/:�E:WF��:u� �F��>�~��:�*:WB�:u� �F��@�~���9�:PS�:u� �F��B����bL�.8�  ��]Ã�i�  ���  �F�  ���  �G�KW�� �P P�  P�]�P��9L��rP�A HY�+��`�`P�b�(�T�b�y9�:5�b�o9�;���b2�=\ u� �bW�b�Q9�\P�{:EM OVERPRINT OLD LINE
34310 TB = CKT
34320 LI = LKT
34400 GOSUB 650
34410 L$ = L$(SN,LKT)
34420 A$ =  MID$(L$,CKT,1)
34430 IF A$ = "" THEN PRINT " " ELSE PRINT A$
34500 ON CFLG GOSUB 35000,35100,35200,35300,35400,35500,35450,35550,35350,35050
34510 TB = CKT
34520 LI = LKT
34530 GOSUB 650
34540 PRINT "*"
34550 LI = 24
34560 TB = 2
34570 GOSUB 650
34580 RETURN
35000 REM MOVE FIVE LEFT
35010 CKT = CKT - 5
35020 IF CKT < 1 THEN CKT = 1
35040 RETURN
35050 REM MOVE 20 LEFT  
35060 CKT = CKT - 20
35070 IF CKT < 1 THEN CKT = 1
35080 RETURN
35100 REM ** LEFT ONE SPACE
35110 CKT = CKT - 1
35120 IF CKT < 1 THEN CKT = 1
35130 RETURN
35200 REM ** RIGHT ONE SPACE
35210 CKT = CKT + 1
35220 IF CKT > 75 THEN CKT = 75
35230 RETURN
35300 CKT = CKT + 5
35310 IF CKT > 75 THEN CKT = 75
35320 RETURN
35350 CKT = CKT + 20
35360 IF CKT > 75 THEN CKT = 75
35370 RETURN
35400 REM ** UP ONE LINE
35410 LKT = LKT - 1
35420 IF LKT < 1 THEN LKT = 1
35430 RETURN
35450 REM ** UP FOUR LINE
35460 LKT = LKT - 4
35470 IF LKT < 1 THEN LKT = 1
35480 RETURN
35500 REM ** DOWN ONE LINE
35510 LKT = LKT + 1
35520 IF LKT > 20 THEN LKT = 20
35530 RETURN
35550 REM ** DOWN FOUR LINE
35560 LKT = LKT + 4
35570 IF LKT > 20 THEN LKT = 20
35580 RETURN
35600 REM SCREEN UP
35610 SN = SN - 4
35620 IF SN < 1 THEN SN = 1
35630 RETURN
35700 REM SCREEN LEFT
35710 SN = SN - 1 
35720 IF SN < 1 THEN SN = 1
35730 RETURN
35800 REM SCREEN RIGHT
35810 SN = SN + 1
35820 IF SN > 20 THEN SN = 20
35830 RETURN
35900 REM SCREEN DOWN
35910 SN = SN + 4
35920 IF SN > 20 THEN SN = 20
35930 RETURN
36000 REM CHANGE SCREENS
36100 GOSUB 500
36110 CFLG = CFLG - 10
36120 ON CFLG GOSUB 35600,35700,35800,35900
36125 CSFLG = 5
36130 RETURN    
37000 REM RECALCULATE
37010 GOSUB 9000
37020 PRINT "       The Clear option will set all the numeric values to zero "
37030 PRINT "         YOU WILL LOSE THE VALUES UNLESS YOU HAVE SAVED THEM"
37040 PRINT "               DO YOU WANT TO CLEAR THE VALUES (Y/N) "
37050 A$ = INKEY$
37055 IF A$ = "" THEN 37050
37060 IF A$ = "Y" OR A$ = "y" THEN 37100 ELSE RETURN
37100 FOR T2= 1 TO MAXN
37105 IF CT(T2) = 30 THEN 37300
37110 X(T2) = 0
37120 A$= "__________0"
37130 IF DS(T2) = 2 THEN A$ = "$_______.00"
37170 L = LIN(T2)
37180 C = COL(T2)
37190 S = SCR(T2)
37200 IF L$(S,L) = "" THEN L$(S,L) = "                                                                             " 
37205 L$ = L$(S,L)
37210 B$ = MID$(L$,1,C)
37220 T = LEN(A$)
37230 T = C + T+1
37240 C$ = MID$(L$,T)
37250 L$(S,L) = B$ + A$ + C$
37260 IF S = SN THEN GOSUB 27800
37300 NEXT T2
37310 RETURN
40000 REM 
40080 PRINT "These are the files on your defalut disk drive :"
40100 PRINT ""
40120 FILES 
40140 PRINT "If you want to continue with an old spreadsheet enter the name "
40160 PRINT "If you want to start a new spreadsheet just press return "
40270 MAX = 8
40280 GOSUB 62030
40282 IF A$ = "" THEN 30000
40290 NM$ = A$
40300 GOTO 43000
41000 REM *** START NEW SPREADSHEET
41100 GOSUB 9000
41130 PRINT "******  ENTER THE NAME THAT YOU WANT TO SAVE THIS SPREADSHEET UNDER   *******"
41140 PRINT "             must be eight characters or less, no spaces "
41160 PRINT "If you do not want to save the spreadheet at this time then just press return"
41200 MAX = 8
41210 GOSUB 62030
41215 IF A$ = "" THEN RETURN
41220 GOSUB 8000
41230 IF TEST = 4 THEN 41000
41240 NM$ = A$
42000 REM WRITE SPREADSHEET
42010 GOSUB 9000
42020 PRINT " SAVEING YOUR SPREADSHEET ON DISK, PLEASE WAIT"
42100 OPEN "O",#1,NM$
42110 WRITE #1,MAXN
42120 FOR T = 1 TO MAXN
42130 WRITE #1,X(T),SCR(T),LIN(T),COL(T),CT(T),TF(T),CF(T),XCST(T),DS(T)
42140 NEXT T
42200 FOR T = 1 TO 20
42210 FOR T2 = 1 TO 20
42220 WRITE #1,L$(T,T2)
42230 NEXT T2
42240 NEXT T
42245 CLOSE
42250 RETURN 
43000 REM READ SPREADSHEET
43040 PRINT ""
43050 PRINT "READING INFORMATION PLEASE WAIT"
43100 OPEN "I",#1,NM$
43110 INPUT #1,MAXN
43120 FOR T = 1 TO MAXN
43130 INPUT #1,X(T),SCR(T),LIN(T),COL(T),CT(T),TF(T),CF(T),XCST(T),DS(T)
43140 NEXT T
43200 FOR T = 1 TO 20
43210 FOR T2 = 1 TO 20
43220 INPUT #1,L$(T,T2)
43230 NEXT T2
43240 NEXT T
43245 CLOSE 
43250 GOTO 30000
44000 REM PRINT SPREADSHEET
44010 GOSUB 9000
44020 PRINT "      Print the spreadsheet description on paper subroutine "
44030 PRINT "                 Make sure your printer is on "
44040 PRINT "                 DO YOU WANT THIS OPTION (Y/N) "
44050 A$ = INKEY$
44055 IF A$ = "" THEN 44050
44060 IF A$ = "Y" OR A$ = "y" THEN 44100 ELSE RETURN
44100 LPRINT "SPREADSHEET NAME ";NM$��.�CD�  �[��[0,�uP�  �[��.�&D�  �z[�[""��.�D�  �g[�[TUPLES��.��C�  �P[�[0,�wP�  ��Z��.��C�  �3[�g[""��.��C�  � [�B� P�uY�+�}� A�^�6�G�Q�z�AW�1[SIZE��.�C�  ��Z�^�6�G�P�  �mZ�, P�  �GZ�^�6�G�������P�  �NZ��.�ZC�  �Z��Z""��.�GC�  �Z�AYIt
�^�6�G����z��V�ZDATA��.�C�  �nZ�Z0,0��.�C�  �ZZ�Z""��.��B�  �GZ�@A� P�wY�+�}�A�^�6�G�Q�z�hV�XZ-1,0��.�B�  �Z�CZBOT��.�B�  ��Y��@� P�uY�+�}��A�^�6�G�QL�^�6�G�P�^�6�G�P�#�4u�h�^�6�G������ĽdW�^�6�G�P�^�6�G�P�lW�M�� P�l� �2E�DFu���~�^�6�G������&�}����I��.�I�GJu�- �z�U�Y0,0��.��A�  �?Y�sYERROR�Y�,@�r�~�^�6�G������&�}����_I��.�XI��Iu�* �z�@U�0Y0,0��.�A�  ��X�YNA�.Y��?�� P�l� �qD�Eu�h �~�^�6�G������&�}�����H� P���P��P�=�2�=  � HP�2�=  � tHY#��u� �W� P� �bC����i �W�~�^�6�G������&�}�����@�P�A���@�B���2�=- t�+ �W�- P��@�gC��A�P��@��@�PB- ��z�/T�X0,��@�  ��W��.�w@�  ��W�V P�  �8W�X�>�V �z��S��W1,0��.�I@�  �W�" P�  �
W�~�^�6�G������&�}����@�  �rW�" P�  ��V�W�^>���' �z�S�W1,0��.��?�  �AW�uW""�W�1>YIt
�^�6�G��G�YIt
�^�6�G�����z�VS�FW-1,0��.�?�  ��V�1WEOD��.�?�  ��V��=�z�R��=�  ��]Ã�-�.P���m?�)A�F��F�=  t� �~�W���P?�(�z?� �~�W���<?� P�F�H�@�(�[?�B?#Enter the name of the export file: �P�q?�	��~�W�?DIF�(�]?���F�2�=  t� � ���  ��]�                                                                                                                                     �G@���U��U�U���v���U�  �~&�2�=  � HP�~&�E2�=  � tHY#��u� �~W� P� �NG����  ��]� U���v���U�  �~W� P� �'G�~&�E2�=, � tHP�~&�2�=  � tHY��u����~&�2�=  � �~W� P� ��F�  ��]� U���v���U�  �D	Reading: �^�6���RD�E�P�D�S��zW�^�6���7D�=U�B�z�� �U�zB�z�W��P��Y�LZ�dB��D�DDATA�DP�z�[4Y#��u� ���C��CSIZE�Du�{ �z�9W��P�Y��Y�B�,P��C�lE �^�6�G��W�_���C�^�6��W�^�6���;@�W����qC�^�6�G�����ǉW�^�6���@�z�V��P�-Y�~Y�A�/�����z�V��P�Y�bY�zA�z�V��P��X�LY�dA�  �^�6�G��  �^�6�G��z�Z4P���B��BEOD�CY#��u�{�z�=V��P�X��X�A�W�{���B�^�6��W�^�6���W?�^�6�G�=  |�b �z��U��P�dX�X��@��pB�BBOT�Cu�3 �^�6�G�@�^�6�G��^�6�G�;w�
 �^�6�G��w�  �^�6�G���^�6�G�=  t�r�W�-��^�6�G�P�^�6�G�P���A�CP���^�6�G������ĽdW�^�6�G�P�^�6�G�P�lW�ٍ� P�l� �D��E4u�M �~��^�6�G������&�}���W��A�P�A�^�6�G�P�^�6�G�P�D� �D� �D� ��D�����`A�~��^�6�G������&�}���W�^�6����=�z�T��P�W�dW�|?��A�5AERROR��Au�& �~��^�6�G������&�}���W��.�H�H�8 ���@��@NA�Au�# �~��^�6�G������&�}���W��.�ZH�wH���$�^�6�G�=  ��z�T��P�rV��V��>�2�=" t�% �W��l@�BP� �B�W� P� �B�2�=  �� �^�6�G�P�^�6�G�P��/@��AP�J��^�6�G�P�^�6�G�P�EC� �QC� �C���^�6�G������Ľd�^�6�G������&�}���W��.�G�G�^�6�G������Ľd�^�6�G������&�}���W��?�P��?�^�6�G�P�^�6�G�P��?�<AP�һ�^�6�G�;u�
 �^�6�G��u�^�6�G�@�^�6�G��`��z��Q�=�z�����2��u� ���  ��]Ã�1�.P���&?��@�F��F�=  t� �~�W���	?�(�3?� �~�W����>� P�F�H�]@�(�?��>#Enter the name of the import file: �P�*?��~�W��>DIF�(�?輍�~�W�>DIF�(�?���F�2�=  t� � ���  ��]�                                          �G@��U��U�U���v���U�  ���~�W�F
� �ᗁ�c� �jB�F
� �ᗁ�cW�F� �ᗁ�c� �GB�F� �ᗁ�cW�~�� �.B�F
�����ąd�F�V��F
�����W�F�����ąd��_��d��f�F�����W�F��_��d��f� P�uY�+�}�� A�F�Q�F�P�F
P�~�W�u��F�P�FP�lW�e��F�P�F
P�l� �FG� ��G趐�F�P�FP�~�� �+G� �G蛐� P�l� �G�&Hu�$ �F
+F�F�F�P�F
P�  P�F�P�  P�  P�@�� P�~�� ��F��Gu�$ �F+F
�F�F�P�FP�  P�F�P�  P�  P��YIt�F��+��~�  &��  ��]� ���hP�jP�@���`� P� P�N P� P�C
Caution!!!�P��C�xy��V��Z�A��V��ZF   Warning!  The sort command can be very hard to get the hang of.  If�Z�UA�V�ZA   you aren't careful you could end up destroying your worksheet.�]Z�A�:V�TZ��@�1V�3ZE   The rows within the designated range will be arranged in ascending�Z�@��U��YE   order based on the contents of the first column.  Please make sure�Y�Z@�U�YB   you completely understand this process before you sort the ONLY�aY�@�>U�@YD   copy of a worksheet.  Better yet, make a backup of your worksheet�Y�?��T��XA   under a different name and try this command ONLY on the backup��X�l?�T�X   worksheet.�X�R?�T�X�I?�|T�~XE   Use the X command from the following menu to eXit, if you got here�MX��>�*T�,X   by accident.�1X��>�T�(X��>�T�X/                    Press any key to contin
51110 CLOSE
51120 PRINT " -BYE, Have a nice day"
51130 END
51200 REM ** WARNING
51210 GOSUB 9000
51220 PRINT "       IF YOU HAVE NOT SAVED YOUR DATA YOU WILL LOSE IT  "
51230 PRINT "            DO YOU WANT TO EXIT THE PROGRAM (Y/N)"
51235 A$ = INKEY$
51240 IF A$ = "" THEN 51235
51260 IF A$ = "Y" OR A$ = "y" THEN 51000
51270 GOTO 31000
52000 REM DELETE NUMBER
52100 A$ = "           "
52110 GOSUB 21130
52120 RETURN
60000 REM *******  INTEGER LESS THEN 100 CHECK  ********
60010 MAX = 2
60020 ACT$ = "1234567890=<>^"
60030 IF NE = 0 THEN ACT$ = "1234567890"
60040 PRINT ">__<";
60050 GOTO 60240
60060 REM *******  INTEGER *******                        
60070 MAX = 8
60080 ACT$ = "1234567890-+,=<>^"
60090 IF NE = 0 THEN ACT$ = "1234567890-+,"
60100 PRINT ">________<";
60110 GOTO 60240
60120 REM *******  SINGLE PRECISION  *******                        
60130 MAX = 10
60140 ACT$ = "1234567890-+,.%$=<>^"
60150 IF NE = 0 THEN ACT$ = "1234567890+-,.%$"
60160 PRINT ">__________<";
60170 GOTO 60240
60180 REM *******  DOUBLE PRECISION  *******                        
60190 MAX = 20
60200 ACT$ = "1234567890-+,.%$=<>^"
60210 IF NE = 0 THEN ACT$ = "1234567890+-,.%$"
60220 PRINT ">____________________<";
60230 GOTO 60240
60240 REM ********** NUMBER CHECK **********
60250 A$ = ""
60260 K$(20) = " "
60270 KTMAX = 0
60280 FOR T9 = 1 TO MAX
60290 K$(T9) = " "
60300 NEXT T9
60310 DIG$ = "1234567890."
60320 DOTFLG = 0
60330 T2 = MAX + 1
60340 FOR T6 = 1 TO T2
60350 PRINT CHR$(CH);
60360 NEXT T6
60370 IF INKEY$ = "" GOTO 60380 ELSE GOTO 60370
60380 KT = 0
60390 REM ***********  CHECK ALFANUMERIC INPUT FOR LENGTH  ***********
60400 KT = KT + 1
60410 REM     
60420 W$ = INKEY$
60430 IF W$ = "" GOTO 60420
60440 C = ASC(W$)
60442 IF MFLG < 5 THEN 60450
60444 GOSUB 34000
60446 IF CSFLG = 5 THEN RETURN
60450 IF C = 0 THEN GOSUB 61900
60460 IF C = 13 GOTO 60580
60470 IF C = 17 OR C = 8 GOTO 61150
60480 IF C = 19 GOTO 60670
60490 IF C = 4 GOTO 60720
60500 IF C = 6 GOTO 60780
60510 IF C = 1 GOTO 60960
60520 IF KT > MAX GOTO 60410
60530 IF INSTR(ACT$,W$) = 0 GOTO 61230
60540 K$(KT) = W$
60550 PRINT K$(KT);
60560 IF KT > KTMAX THEN KTMAX = KT
60570 GOTO 60400
60580 REM **********  RETURN  **********
60590 FOR T9 = 1 TO KTMAX
60600 A$ = A$ + K$(T9)
60610 NEXT T9
60620 IF KTMAX = 0 THEN PRINT "1";
60630 IF KTMAX = 0 THEN DT# = 1
60635 IF KTMAX = 0 THEN A$ = "1"
60640 IF KTMAX = 0 THEN RETURN
60660 GOTO 61260
60670 REM ********* MOVE CURSE BACK ********
60680 IF KT = 1 GOTO 60410
60690 KT = KT - 1
60700 PRINT CHR$(CH);
60710 GOTO 60410
60720 REM ********* MOVE CURSER FORWARD *********
60730 IF KT >= MAX GOTO 60410
60740 IF KT > (KTMAX + 1) GOTO 60410
60750 PRINT K$(KT);
60760 KT = KT + 1
60770 GOTO 60410
60780 REM ********** INSERT ***********
60790 IF KT > KTMAX GOTO 60410
60800 X9 = MAX
60810 WHILE X9 > KT
60820 X9 = X9 - 1
60830 K$(X9 + 1) = K$(X9)
60840 WEND 
60850 K$(KT) = " "
60860 KTMAX = KTMAX + 1
60870 IF KTMAX > MAX THEN KTMAX = MAX
60880 FOR T9 = KT TO KTMAX
60890 PRINT K$(T9);
60900 NEXT T9
60910 T6 = (KTMAX - KT) + 1
60920 FOR T7 = 1 TO T6
60930 PRINT CHR$(CH);
60940 NEXT T7
60950 GOTO 60410
60960 REM ********** DELETE ***********
60970 IF KT > KTMAX GOTO 60410
60980 IF KTMAX = 1 GOTO 60410
60990 K$(MAX + 1) = ""
61000 X9 = KT 
61010 WHILE X9 <= MAX
61020 K$(X9) = K$(X9 + 1)
61030 X9 = X9 + 1
61040 WEND 
61050 KTMAX = KTMAX - 1
61060 FOR T9 = KT TO KTMAX
61070 PRINT K$(T9);
61080 NEXT T9
61090 PRINT "_";
61100 T7 = (KTMAX - KT) + 2
61110 FOR T8 = 1 TO T7
61120 PRINT CHR$(CH);
61130 NEXT T8
61140 GOTO 60410
61150 REM ********* BACKSPACE ********
61160 IF KT = 1 GOTO 60410
61170 KT = KT - 1
61180 PRINT CHR$(CH);
61190 K$(KT) = " " 
61200 PRINT "_";
61210 PRINT CHR$(CH);
61220 GOTO 60410
61230 REM *******  INPUT NOT ACCEPTABLE  ********
61235 IF MFLG = 5 THEN 61250
61240 PRINT CHR$(7);
61250 GOTO 60420
61260 REM ********* CLEAR STRINGS ********
61270 MAX = LEN(A$)
61280 D2$ = ""
61290 D1$ = ""
61300 DFLG = 0
61310 FOR Q93 = 1 TO MAX
61320 R$ = MID$(A$,Q93,1)
61330 IF INSTR(DIG$,R$) = 0 GOTO 61400
61340 IF R$ = "." OR DFLG = 1 GOTO 61380
61350 IF DFLG = 1 GOTO 61380
61360 D2$ = D2$ + R$
61370 GOTO 61400
61380 D1$ = D1$ + R$
61390 DFLG = 1
61400 NEXT Q93
61410 DA# = VAL(D2$)
61420 D1# = VAL(D1$)
61430 DT# = DA# + D1#
61440 IF K$(1) = "-" THEN DT# =  -DT#   
61450 RETURN
61900 REM ****** CHECK FOR ASC0
61910 S4$ = INKEY$
61920 C2 =  ASC(S4$)
61930 IF C2 = 83 THEN C = 1
61940 IF C2 = 82 �G@���U��U�U���v���U�,00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899���* �F�~��A�!�A�~W�F�2� �ᗁǜ���C�/P�E�F�2� �ᗁǜ��C��D�/P��D�F�d ����� �ᗁǜ��C��D���C�  �  ���]�QFU���v���U�  ���~�W.��-2�P.��-2�P�K�     ��L�XK�L�(K.��-2�P��J�     �L�<K�K.��-2�P��J�     �L�#K��J��J�~��J� P�  P�~���`?� P�F�2�Y�+�}�: A�F�Q�F헊C�2�P�F�0 P�9 �F��F4u�
 �F헸0 �C�YIt�F�����~W�~��B���B�  �  ���]�bEL�N�,V�ZO-------------------------------------------------------------------------------��Y�@�N��U�Y:DATE: ��	����  �qY�Y=                            EZ-SpreadSheet Version 2.1      :�|Y�&@�N�gU�WYO:     -----------                        ##EZX Corporation  713-488-0210#     :�Y��?�N�U��XO:THIS FILLED OUT REGISTRATION/LICENSE    ##403 NASA ROAD 1 EAST         #     :�X�f?�N�T�XO:AGREEMENT FORM MUST BE RETURNED ALONG   ##WEBSTER, TX  77598           #     :�\X�?�N�GT�7XO:WITH THE PURCHASE RECEIPT TO ADDRESS    ################################     :��W�>�N��S��WO:AT THE RIGHT IN ORDER TO QUALIFY FOR   #SUPPORT CANNOT BE PROVIDED UNTIL THIS:�I>�N�S� P�  �V�5>�N�vS�fWO                                        #SUPPORT CANNOT BE PROVIDED UNTIL THIS �+W��=�N�S�WO:PHONE SUPPORT AND FUTURE UPDATES.      #FORM IS FILLED OUT SIGNED & RETURNED.:�x=�N�R� P�  ��U�d=�N�R�VO                                        #FORM IS FILLED OUT SIGNED & RETURNED. �ZV�=�N�ER�5VO:-----------------------------------------------------------------------------:��U�<�N��Q��U:           NAME: ��*>�  �~U�U%                - NOT TRANSFERABLE -:�U�K<�N�Q�|UO:                -------------------------------------------------------------:�AU��;�N�,Q�U: STREET ADDRESS: �7�q=�  ��T��T%                                    :��T�;�N��P��TO:                -------------------------------------------------------------:�T�2;�N�sP�cT: CITY, ST., ZIP: �P�<�  �T�@T%                                    :�/T��:�N�P�
TO: (COUNTRY)      -------------------------------------------------------------:��S�y:�N�O�S:   PHONE NUMBER: �i��;�  �SS�S%                                    :�vS� :�N�aO�QSO:                -------------------------------------------------------------:�S��9�N�O��R,:   CURRENT REGISTRAT
```

## SSREMARK.BAS

```bas
ION NUMBER(S)  Reg #S21�����  �R�R                            :�R�V9�N�N�RO:            AND/OR PURCHASED FROM:-------------------------------------------:�LR��8�N�7N�'RO:PHONE NUMBER(S):                                                             :��Q�8�N��M��QO:                -------------------------------------------------------------:�Q�68�N�wM�gQO:-----------------------------------------------------------------------------:�,Q��7�  ��]�                                               �G@���U��U�  �N��X��\O:LICENSE AGREEMENT: You may use the program, as indicated on purchase receipt,:�\�2C�N�sX�c\O:on  a  single  machine.   You may make backup copies for storage only.   You :�(\��B�N�X�\O:may not copy or distribute EZ-SpreadSheet to anyone.  EZ-Spreadsheet         :��[�rB�N�W�[O:is licensed to the registered user only.  All copyrights are reserved by     :�h[�B�N�SW�C[O:EZX Corporation.  This license is effective until mutually terminated.       :�[�A�N��V��ZO:    EZX Corporation and affiliates make no claims and offer no warranties of :�Z�RA�N�V�ZO:any sort for  use of our products.  We assume no responsibility for any sort :�HZ��@�N�3V�#ZO:of damage(mental or physical) resulting from the apparent or actual use of   :��Y�@�N��U��YO:our products. I have read and understand the terms of the above license.     :�Y�2@�N�sU�cYO>Signed:#                                       Date:#                        <��?�N�U� P�  �?X��?�N�U��XO>Signed:#                                       Date:#                        <�X�a?�N�T�XO:-----------------------------------------------------------------------------:�WX�?�N�BT�2XO:At this time you may wish to extend the 30 day phone support for your program:��W�>�N��S��WO:or register for a site license.  Otherwise, phone support is $1 per minute   :�W�A>�N�S�rWO:(15 min. minimum, VISA/MC/AX ONLY).  You may also prepay for the next update.:�7W��=�N�"S�WO:   (1)  One year phone support $49 each. No S&H.-- $ POT
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
21200 IF L$(SN,LKT) = "" THEN L$(SN,LKT) = "                                                                             " / IF                 :��U�<�N��Q�UO:      ---------------------------------------------------------------------  :�U�)<�N�jQ�ZUO:                                                                             :�U��;�N�
Q��TO:  4.  How did you find out about EZ-SpreadSheet?                             :�T�i;�N�P�TO:                                                 --------------------------  :�_T�	;�N�JP�:TO:                                                                             :��S�:�N��O��SO:      ---------------------------------------------------------------------  :�S�I:�  ��]�                                                                                                                                                                  �G@���U��U�  �N��X��\O:                                                                             :�\�2C�N�sX�c\O:  5.  How can we improve EZ-SpreadSheet (feel free to add more pages)?       :�(\��B�N�X�\O:                                                                             :��[�rB�N�W�[O:                                                                             :�h[�B�N�SW�C[O:      ---------------------------------------------------------------------  :�[�A�N��V��ZO:                                                                             :�Z�RA�N�V�ZO:      ---------------------------------------------------------------------  :�HZ��@�N�3V�#ZO:                                                                             :��Y�@�N��U��YO:      ---------------------------------------------------------------------  :�Y�2@�N�sU�cYO:                                                                             :�(Y��?�N�U�YO:      ---------------------------------------------------------------------  :��X�r?�N�T�XO:                                                                             :�hX�?�N�ST�CXO:      ---------------------------------------------------------------------  :�X�>�N��S��WO:                                                                             :�W�R>�N�S�WO:      ---------------------------------------------------------------------  :�HW��=�N�3S�#WO:                                                                             :��V�=�N��R��VO-------------------------------------------------------------------------------�V�2=�N�sR�{V�%=�N�fR�VVKCheck here [ ] if you would like to receive information on EZX's other fine�V��<�N�
R��Uproducts which include:��U�<�N��Q��U�<�N��Q��UM$89 EZ-Forms Executive - Create/Revise/Fill-in/Save/Print all kinds of forms.�U�6<�N�wQ�gUN                       - The ultimate forms management package with text wrap,�-U��;�N�Q�UO                         spreadsheet style math, context sensitive help, etc...��T�w;�N�P�TO$49 EZX-Write          - Quick and easy WordStar(tm) compatible word processor.�mT�;�N�XP�`T�
;�N�KP�ST��:�N�>P�FT��:�N�1P�9T��:�  ��]�                                                            �G@3��U��U�U���v���U�  ��� � ���F�~��B�!��B�F� ���F�F� ��F�F�F�  �F��]� U���v���U�  ���  �F� �F�F�% �F�~��^B��B�F�% �� ��F�F�=� u��� �5��4�%X�?\��B�X� P�  �W[�\J Error while trying to initialize your printer!!!  You must have a printer��[�B�W�[H connected and on-line before you can install EZ-SpreadSheet.  Without a�[�3B�fW�h[G printer you couldn't print out the proof of purchase/registration form�5[��A�W�[J that will be completed on-line and printed for return to EZX Corporation.��Z�A�V��Z�A3���=�  ��]Ã�kLL���=  � uHP.��.2�4Y#��u�� �� � 4�J3�yV�Z�=A�pV� P�  �Y�hZ@ You can install ONLY the original copy of EZ-SpreadSheet on the�<Z��@�V�ZH master diskette in drive A: !!!!  Please insert the master diskette and��Y�@��U��Y try again.��Y�y@3���<�-��  ��]�                                                                                                                                                                                                          �G@O��U��U�  L� P� P�P P� P�AE" EZ-SpreadSheet Valueware Version �P�qE�{�X�\M Thank you for trying out this  VALUEWARE  version of EZ-SpreadSheet.    Feel�O\��B�,X�.\M free to distribute only  this version to all of your friends and co-workers.��[�B��W��[M This Valueware version is identical to the registered version except that it�[�EB�xW�z[M has these opening screens, and the printing function has been  slowed  down.�A[��A�W� [M This allows you to use all the functions of EZ-SpreadSheet  and theER
24420 GOSUB 6000   /INPUT SECONDARY CALCULATION NUMBER
24425 CT(N) = 4    /CALCULATION TYOE OF SECONDARY NUMBER EQUALS 4
24430 RETURN
24500 REM MAXIMUM
24510 GOSUB 5000   /INPUT TARGET NUMBER
24520 X(N) = -1E+07  /INITIALIZE X TO A LOW NUMBER
24590 RETURN
24600 REM MIN
24610 GOSUB 5000  /INPUT TARGER NUMBER
24620 X(N) = 999999999#  /INITIALIZE X TO A HIGH NUMBER
24690 RETURN
24700 REM ADD TO A CONSTANT
24710 GOSUB 5000  /INPUT TARGET NUMBER
24720 GOSUB 7000  /INPUT CONSTANT
24790 RETURN
24800 REM MULTIPY BY A CONSTANT
24810 GOSUB 5000  /INPUT TARGET NUMBER
24820 GOSUB 7000  /INPUT CONSTANT
24890 RETURN
24900 REM SUBTACT FROM A CONSTANT
24910 GOSUB 5000  /INPUT TARGET NUMBER
24920 GOSUB 7000  /INPUT CONSTANT
24990 RETURN
25000 REM SUBTACT A CONSTANT FROM
25010 GOSUB 5000  /INPUT TARGER NUMBER
25020 GOSUB 7000  /INPUT CONSTANT
25090 RETURN
25100 REM DIVIDE BY A CONSTANT
25110 GOSUB 5000  /INPUT TARGET NUMBER
25120 GOSUB 7000  /INPUT CONSTANT
25190 RETURN
25200 REM DIVIDE INTO A CONSTANT
25210 GOSUB 5000  /INPUT TARGER NUMBER
25220 GOSUB 7000  /INPUT CONSTANT
25300 REM CUSTOM 13
25390 RETURN
25400 REM CUSTOM 14
25490 RETURN
25500 REM CUSTOM 15
25590 RETURN
25600 REM CUSTOM 16
25690 RETURN
25700 REM CUSTOM 17
25790 RETURN
25800 REM CUSTOM 18
25890 RETURN
25900 REM CUSTOM 19
25990 RETURN
26000 REM ABS
26010 X = ABS(X)
26030 RETURN
26100 REM ATN
26110 X = ATN(X)
26130 RETURN
26200 REM COS
26210 X = COS(X)
26230 RETURN
26300 REM EXP
26310 X = EXP(X)
26330 RETURN
26400 REM LOG 
26410 X = LOG(X)
26430 RETURN
26500 REM SIN  
26510 X = SIN(X)
26530 RETURN
26600 REM SQR
26610 X = SQR(X)
26630 RETURN
26700 REM SQUARED  
26710 X = X * X 
26730 RETURN
26800 REM TAN  
26810 X = TAN(X)
26830 RETURN
26900 REM 
26910 X = X(T2) + XC 
26930 RETURN
27000 REM PERFORM CALCULATIONS
27050 T2 = TF(T)  /T2 IS THE TARGER FIELD
27060 XK = XCST(T) /XK IS THE CONSTANT FOR CALCULATION 
27070 S = CF(T)    /S IS THE SECONDARY CALCULATION FIELD
27075 XS = X(S)    /XS IS THE VALUE OF THE SECONDARY CALCULATION FIELD
27080 X = X(T)     /X IS THE VALUE OF THE SOURCE FIELD
27100 ON CT(T) GOSUB 28000,28100,28200,28300,28400,28500,28600,28700,28800,28900,29000,29100,29200,29300,29400,29500,29600,29700,29800,29900,26000,26100,26200,26300,26400,26500,26600,26700,26800,26900
27110 X(T2) = X     /SET THE TARGET FIELD TO X
27120 T$ = STR$(X)  /CONVERT X TO A STRING
27130 T3 = LEN(T$)  /T3 IS THE LENGTH OF T$
27140 T1$ = "__________"
27150 B$ = MID$(T1$,T3)
27160 A$ = B$ + T$  /A$ EQUALS UNDERLINES PLUS THE NUMBER
27165 A$ = LEFT$(A$,10)  /A$ EQUALS THE LEFT 10 CHARACTERS OF A$
27167 DT# = X  
27168 IF DS(T2) = 2 THEN GOSUB 49020  /IF DOLLAR AND CENTS DISPLAY TYPE THEN
27170 L = LIN(T2)  /LINE 
27180 C = COL(T2)  /COLUMN
27190 S = SCR(T2)  /SCREEN
27200 IF L$(S,L) = "" THEN L$(S,L) = "                                                                             "
27205 L$ = L$(S,L) 
27210 B$ = MID$(L$,1,C)
27220 T = LEN(A$)
27230 T = C + T+1
27240 C$ = MID$(L$,T)
27250 L$(S,L) = B$ + A$ + C$  /ENTIRE LINE
27260 IF S = SN THEN GOSUB 27800  /IF THE LINE IS ON THE CURRENT SCREEN THEN PRINT THE LINE
27300 IF CT(T2) = 0 THEN GOTO 31000  /IF THERE IS NO CALCULATION TYPE THE GOTO OPTIONS
27310 T = T2  /THE FIELD TO CALCULATE IS THE TARGET FIELD
27320 GOTO 27000  /CONTINUE WITH CALCULATIONS FOR TARGET FIELD
27800 REM PRINT CALCULATED LINE ON SCREEN
27810 LI = L   /LINE NUMBER
27820 GOSUB 600   /LOCATE
27830 PRINT L$(SN,L)  /PRINT THE LINE
27840 LI = LKT   /LINE EQUALS LINE COUNT
27850 TB = CKT   /TAB EQUALS COLUME COUNT
27855 GOSUB 650  /LOCATE
27860 RETURN
28000 REM ADD TO A FIELD
28010 X = X(T2) + XC /VALUE OF THE TARGET FIELD PLUS THE CHANGE IN SOURCE FIELD
28030 RETURN
28100 REM SUBTRACT 
28110 X = X(T2) - XC  /VALUE OF THE TARGET FIELD MINUS THE CHANGE IN THE TARGET FIELD
28130 RETURN
28200 REM MULT 
28210 X = X(T)*XS /VALUE OF THE SOURCE FIELD TIMES VALUE OF THE SECONDARY FIELD
28230 RETURN
28300 REM DIVIDE BYFIELD
28305 IF XS = 0 THEN X = 0
28306 IF XS = 0 THEN RETURN  /DO NOT DIVIDE BY 0
28310 X = X(T)/XS  
28330 RETURN
28400 REM DIVIDE INTO 
28405 IF X(T) = 0 THEN X = 0
28406 IF X(T) = 0 THEN RETURN  /DO NOT DIVIDE BY 0
28410 X = XS/X(T) 
28430 RETURN
28500 REM MAX 
28510 IF X(T) > X(T2) THEN X = X(T) ELSE X =X(T2)  /IF SOURCE FIELD IS GREATER THEN THE TARGET FIELD THEN TARGET FIELD EQUALS THE SOURCE FIELD
28530 RETURN
28600 REM MIN 
28610 IF X(T) < X(T2) THEN X = X(T) ELSE X = X(T2)  /IF SOURCE FIELD IS LESS THEN THE TARGET FIELD��<t�(<t2�� �s� � .�>j.��  .�D� U��: t� 2��]�X��PSQRVWU��� .:6ks.:js�2���]_^ZY[X��/�/���* ��2���!���* ��2��[<w.�kX<Pw.�jX.:ks�Ȣ X.:js�Ȣ ��$�t$��& p �$����& � �U� �
   �   � � �	 2��3ۈ  ���Ǵ�]��	 �?���	 ���	 ���� �F$�&  ��
Ģ  U2��  ��]�U�  ����>	 t�:�r*Ā��  ��ش�]��U�ش�]�[��>	 t�?=� w� X;�w� X; s� X; s�
 ��[ZYS��x
 ; w�x ; wU�]ô� _XZ[� � � ���[W� � � ����;�~;���+ã ��A�s � �~��+�+ã �  ��£ �  ��Ë��+£ ��A�8 � �~��+�+£ �  ��ã �  ���3�+�txA�I�QR� � � ��ZYËظ�4� ;�s����a�u�a���C���B���B��a$��aÑ[_�)PQ����YX% �;�u;������&�E&�]P�X�[S�>& �( �� � r3�$����ȋ��. " �0 �>" ���t%��s�>. �0 &�=���s t	+��% �6&�=�T�` �ǌ�������QR�ȋӋČӃ��_�3��h�ZYw�o	3�3�SP&�u&�5�ǌ��T�����&�&�E&�E&�E�6. &�<&�D��6& &�<&�DÑ[_�[S��&�&�U � r3�$�����* �, �>" �ǌ����sW&�&�]���s����������6, �6* &�&�\&�D&�D&�&�U&�E&�]�< t&�=&�E&�]&�&�U�&�" �$ ����&�&�]�ȋӡ* �, &�E&�]�2 �4 ǌ�4 �K��V�uQ�����J�t1���&�&�\&�L&�T&�&�]�2 �4 �)�&�E&�]3�É>���W3��� �_3��3�3�3��>" ��t� &�=��ČӃ����3�+�r� ���;�s������ȋ��������[��&���&�U��[&�=�>��>" ���$ 3��>" � ����>� ��u
��� t��% � ���� 
�u"2��
�u�&��
�u��>�u<u�|2�� XZPRUR���X<u� �h<
u��.:6kr[�?<u
: tO���K<u�2���ER�	2�� � �Z��.:jr'� ��.:6kr��R��> � .�j�����Z�2��]�>�uL�&�tL�9�<uL�1�X�XZP���XZP����� 2�� ��=t��<t��>t2���tGU�!]�VQ�6z�|�< tFF��Y^� ��Y���r�^�QV�6z�|9u�  FF��^Y빋6z�|��t	�>���  FF���3��r�@�>z�|3����&�� b
&�� ���� �&
�6� ��3�����������~�6 �Sl�=	E	M	�l��� ��� ��C ��� ��� ���         ���         �SQRWV2�P�:^_ZY[�SQRWVL�8��U��^.�C
�t�����^]����
 �<ar<zw, �P��� XP��������� X$�'@'�
�t��  x����N^��.D.D.D
.; v�D��.\��.\.� +�.;Tr.�T������� s�� ���3�ӎҋ�t3������" �$ W�>" � ��_.� u�Ȏ��+شJ���.�D�v.�D�x.�.�LQV�X�^Y�@���>^.�D�`��t�Z  �\ �>j.�D�l�t�f �h ��V3���&�  ��&� ��&�  2&� �r t&� �&� �r t���~�3������`�Z��l�f��� ��ô0�+�
�tú_��M�	���u�	��� �
�Not enough memory$Incorrect DOS version$
Program aborted
$P�Z���f�3�����&�  ��&� X�r u�L�������6v�=P�x�[.��t53ҋ�tS�B���[����;�t+���NO��Ju��  ����^.;u����PRV��2����
�tG��W
�t��:t	��\t�\GFF.��FG
�u�� =��� ���_^Z� r).�� B2�Ί�2����Yr�?�T���r�>���늲�V�[�RS�� ���  ���L�6�[YS�Њ����������t� �[+�L��������3ҿ� .�2�G3��.�< t<	uGI����.�< t<	tGI���+�tCJuғÈ��>�[��YXSQ�� ���#���>�[��ZX����E�ESP��� ��Y�>�W��2��-� +�vG&� ��:�t�󑻶 �CG&���:�t��_&�5�2������>�[�������G S3��� 8t08�u��r!�>�&�����r���>�����3�8t�-� �>�&�ù@ �� �� X��6�2�;�v��BF�� ��� ���,�>������[�ڋ�_�����[�ڋ�+�������[Y_���㑌�[_^�;�s��NO�����[XUPWS������P��ح�ȭ�Э��P����P���^XÜWU���~
���ë����«X��ƫX��ثX�X�[��]��;�sò��v�;�|;�ò��h���+�r= r�����;�rò��I�[X�S��L�V�tL�i��&�<tÏ���� �#3���À>� uÊ���[X�S����R��Z��- ���uRR�6��~Z��s��^C
User Break �0���w��
I/O ����
Run-time ��� error  �������, PC= ��������
Program aborted
 ���� �y���P� [����Ë���SQ�Ǌ��݊�2�������X�Xظ�bȸ6؉�������y���-C2��'� ��� �d �	 �
� ���2���+�s������u��t��0�C�3��?$�
 u�CP��0���X��0r%��
r��u����
r��sR��Zr2��s��	��t���Ê��-uCQ��Yr	��-u����= �u��-u���[��&�2�A+������^.�2�A+������Z����6�2��C6�?��:�v��6�A���g��[��2�+�L��6�G����[2��6�2�+�����t'y��6�A���6���A��G�����E � tH���9 � uH���- � sH���! � vH��� � wH���	 � rH�Ë���6�2�G���6�2�F��ڊ���;�v���t��u:�ZY��Q�����6�2���F�6��r&6�2�+���AV���^NO��A��G���&�����������X�rH��6�2����+�v�;�v�����3҇�6����&�[��6�2��D�����6�2�G���6�2�F���3�+�r@�tB�QWV�^_Yt@GJu�3����&�� �[���&
�S�>W���� P�H�B��>
�������>���6�� �%����� ����W��[���S�>W��� P�H����
�u�>�l�P�� ����������[X��u����������6�\2�6�@��6�@�[��6�:�t2����2���A��G����
�u
�tò�p�[Z���� ��Q�
�t2����u����Y� *�*�t2����u���[�� 5480 RETURN
35500 REM ** DOWN ONE LINE
35510 LKT = LKT + 1 /ADD ONE TO LINE COUNT
35520 IF LKT > 20 THEN LKT = 20 /CAN't be more then 20
35530 RETURN
35550 REM ** DOWN FOUR LINE
35560 LKT = LKT + 4  /ADD FOUR TO LINE COUNT
35570 IF LKT > 20 THEN LKT = 20  /CAN't be more then 20
35580 RETURN
35600 REM SCREEN UP
35610 SN = SN - 4  /SUBTRACT FOUR FROM SCREEN COUNT
35620 IF SN < 1 THEN SN = 1 /CAN't be less then 1
35630 RETURN
35700 REM SCREEN LEFT
35710 SN = SN - 1  /SUBTRACT ONE FROM SCREEN COUNT
35720 IF SN < 1 THEN SN = 1 /CAN't be less then 1
35730 RETURN
35800 REM SCREEN RIGHT
35810 SN = SN + 1  /ADD ONE TO SCREEN COUNT
35820 IF SN > 20 THEN SN = 20  /CAN't be more then 20
35830 RETURN
35900 REM SCREEN DOWN
35910 SN = SN + 4  /ADD FOUR TO SCREEN COUNT
35920 IF SN > 20 THEN SN = 20  /CAN't ber more then 20
35930 RETURN
36000 REM CHANGE SCREENS
36100 GOSUB 500  
36110 CFLG = CFLG - 10  /CHANGE FLAG EQUALS CHANGE FLAG MINUS 10
36120 ON CFLG GOSUB 35600,35700,35800,35900
36130 GOTO 30000  /WRITE NEW SCREEN
37000 REM RECALCULATE
37010 GOSUB 9000  /CLEAR LINES 21-24
37020 PRINT "       The Clear option will set all the numeric values to zero "
37030 PRINT "         YOU WILL LOSE THE VALUES UNLESS YOU HAVE SAVED THEM"
37040 PRINT "               DO YOU WANT TO CLEAR THE VALUES (Y/N) "
37050 A$ = INKEY$ 
37055 IF A$ = "" THEN 37050  /LOOP UNTILL A KEY IS PRESSED
37060 IF A$ = "Y" OR A$ = "y" THEN 37100 ELSE 31000 
37100 FOR T2= 1 TO MAXN  /FOR ALL THE NUMBERS
37105 IF CT(T2) = 30 THEN 37300 /IF NUMBER HAS BEEN DELETED THEN SKIP
37110 X(T2) = 0 /SET NUMBER TO ZERO
37120 A$= "__________0"
37130 IF DS(T2) = 2 THEN A$ = "$_______.00"
37170 L = LIN(T2)
37180 C = COL(T2)
37190 S = SCR(T2)
37200 IF L$(S,L) = "" THEN L$(S,L) = "                                                                             " 
37205 L$ = L$(S,L)
37210 B$ = MID$(L$,1,C) /LEFT PART OF LINE
37220 T = LEN(A$)
37230 T = C + T+1
37240 C$ = MID$(L$,T) /RIGHT PART OF LINE
37250 L$(S,L) = B$ + A$ + C$  /NEW LINE
37260 IF S = SN THEN GOSUB 27800  /IF LINE IS ONE THIS SCREEN THEN PRINT IT
37300 NEXT T2
37310 GOTO 31000 /BACK TO OPTIONS
40000 REM 
40080 PRINT "These are the files on your defalut disk drive :"
40100 PRINT ""
40120 FILES    /PRINTS THE FILES ON YOUR DEFAULT DISK DRIVE
40140 PRINT "If you want to continue with an old spreadsheet enter the name "
40160 PRINT "If you want to start a new spreadsheet just press return "
40270 MAX = 8  /MAXIMUM STRING LENGTH
40280 GOSUB 62030  /INPUT SUBROUTINE
40282 IF A$ = "" THEN 30000  /IF RETURN WAS PRESSED THEN 30000
40290 NM$ = A$  /NAME EQUALS A$
40300 GOTO 43000  /READ THE FILE 
41000 REM *** START NEW SPREADSHEET
41100 GOSUB 9000
41130 PRINT "******  ENTER THE NAME THAT YOU WANT TO SAVE THIS SPREADSHEET UNDER   *******"
41140 PRINT "             must be eight characters or less, no spaces "
41160 PRINT "If you do not want to save the spreadheet at this time then just press return"
41200 MAX = 8 /MAXIMUM LENGTH OF STRING
41210 GOSUB 62030
41215 IF A$ = "" THEN 31000  /IF RETURN WAS PRESSED THEN 
41220 GOSUB 8000  /TEST FOR VALID FILE NAME
41230 IF TEST = 4 THEN 41000 /IF BAD FILE NAME THEN TRY AGAIN
41240 NM$ = A$  /NAME EQUALS A$
42000 REM WRITE SPREADSHEET
42010 GOSUB 9000
42020 PRINT " SAVEING YOUR SPREADSHEET ON DISK, PLEASE WAIT"
42100 OPEN "O",#1,NM$  /OPEN A SEQUENTIAL ACCESS FILE AS #1
42110 WRITE #1,MAXN    /MAXIMUM NUMBERS
42120 FOR T = 1 TO MAXN  /FOR ALL NUMBERS
42130 WRITE #1,X(T),SCR(T),LIN(T),COL(T),CT(T),TF(T),CF(T),XCST(T),DS(T)
42140 NEXT T
42200 FOR T = 1 TO 20  /FOR ALL SCREENS
42210 FOR T2 = 1 TO 20  /FOR ALL LINES
42220 WRITE #1,L$(T,T2) /WRITE THE LINE
42230 NEXT T2
42240 NEXT T
42245 CLOSE
42250 GOTO 31000
43000 REM READ SPREADSHEET
43040 PRINT ""
43050 PRINT "READING INFORMATION PLEASE WAIT"
43100 OPEN "I",#1,NM$  /OPEN SEQUENTIAL ACCESS FILE
43110 INPUT #1,MAXN    /INPUT MAXIMUM NUMBER
43120 FOR T = 1 TO MAXN  /FOR ALL NUMBERS
43130 INPUT #1,X(T),SCR(T),LIN(T),COL(T),CT(T),TF(T),CF(T),XCST(T),DS(T)
43140 NEXT T
43200 FOR T = 1 TO 20 /FOR ALL SCREENS
43210 FOR T2 = 1 TO 20  /FOR ALL LINES
43220 INPUT #1,L$(T,T2)  /INPUT THE LINE
43230 NEXT T2
43240 NEXT T
43245 CLOSE 
43250 GOTO 30000
44000 REM PRINT SPREADSHEET
44010 GOSUB 9000 /CLEAR LINES 21-24
44020 PRINT "      Print the spreadsheet description on paper subroutine "
44030 PRINT "                 Make sure your printer is on "
44040 PRINT "                 DO YOU WANT THIS OPTION (Y/N) "
44050 A$ = INKEY$
44055 IF A$ = "" THEN &�]�u&�@&�]�&�]
�W�� S�D�[<t"&�e�< v�C��5tS�)�[< v&�e���� �� �? _�r�? t����W���&�e�_[&������[S���t�$����r�s&��&�Ý�[S�}�tW�:�(���_��r�����[S3�2�WSQ��Y[<t<t&�e�_C&����_&��[S2�WQ�z�Y�<t<t&�e�_����_� ���[�<t&�e�<
t<u��G�<
u&�e���>2�>� u?&�M��u&�]&�C&�]&;]
t%�P��t��t��t�B��:��<��>�&�M&+Mt�@&�&�U&�U���r;�t�����t�%�<v�I� Q�x�Y��[XS�o��[XSQ�� �W�X��� +�v�S� Q�P�Y��[�˻� �SQ�@�Y[C��Ò[Y�:��E�ESQ�� �A��[YS�)�u� )��� �TRUEFALSE���CC6*v��2�S� Q���Y��[6�2�C�t6�SQ���Y[C��Z����[.�2�C�.�SQ��Y[C�������
����� ���� ���6�&�E�t R���Z:�t<t< w
�t&�e���3�@�3��2���2����8���6�Q�8 Y�>� uQ�
�Y�>� u&�MÏ��6��@&�3��L�� ���6�&�E  �L����>2�4&�} u���&��8?���8@�[^S�>� uA���>2�&8&�&�M�����r!;�t#�>8?u�t&�M�����+�3���à9���3ҏ�_�6�&�M� �ʋи B&�QR��Y[r;�u;�t��������[S�D&��{�
��  u@��[S�B&�3�3��`�&�M�O�[S�����[S�B&�3�3��@�PR�B&�3�3��1�Y[PR�Ӹ B&��"�ZX&�MI��� �[S����h���t��3۹! ���s���������Ë؋������Ñ[_S�M��[_S�J��8?���8@���Z^_P�> Y�>� u
;�t�9���&��8?���8@�����[XZ^_SQ�	 _&��&�&�} tO&�}tR&�eZ��&8&����Z�s�9��3�&�M��t���3����t�>8?uP+ʎ�3���X@���Ï��6��A�U��s��Ï���_�6��V�UW�� ���_r־� �}�  ��Ï��Z��6��� 
�t(��:u��,Ar�<s�����܀>�  t
�;�� ��r�÷9��:�����6������X�6�
�u��o�����@�� �� :\�G�� �X�s� �� 3ۊ
�t	FC&���u�&�û|,�3ۏ��6��r uBS� =�U��Zr0�ظ B3���r$�?����|-����>��ۋ&t���~��" �����!��W� ,��  �     ���4�Ꞝ-��vRegistration #S21?Copy is not registered 1Copy is not registered 2Copy is not registered 3Copy is not registered 4U                                                                                                                                         U���YU���Y��½�      �     �     �    0
        �                                ���                        RDSPCABEFGHI @    �   �  ��B�{C�C�5C�RC�e%�u ��0U��U�  �^�=ָ2 ���[��  ��]�U��U�  ���  P��&�2�%0 =0 t�	 � �F�� � �F�  �F� �F�~��������  ��]�U��U�  ���  P��&�2�%0 =0 t� � �F� �F�� � �F� �F� �F�~��\�����  ��]�U��U�  ��� �F�~��9��!�\ߋF�2�F��F�=  t�7 � �F�~����!�7ߋF�2�F��F�= �	 �F�-| �F��F�� �F��F��F�  �F2��]� U��U�  ��_�  ���҉F���҉F�~�W�FP� �ދF�F���~�� �  �T��Mߍ~�W�FP�  �`ލ~�W�~���P��F�2�=  � �F�2�F�� � �F�� �F��  �F��F�P�F����,�~���  �����ދF�F�- P�F��^܊F�2��u� ��� �_�L���F�F�2�=  |=~ ~�
�F�2��u� �F�2�+F� �F��F�=  � HP�F�;F� |HY#��u� �F���{�W�F� ��{�W�F��{݋F��W�F�2�_�C��F�@�F��F�;F� �F�F��F�;F��	 �F��F�� �F�@�F��F��F��F�;F� �F�F��7 �F��W�F�2�_�C��F�;F�}� �F��F��F��F��F�;F|� �F�@�F��F�P�F��<����~��T߸  �����,=� t� �F�2�=  � HP�F�;F�� ~HY#��u� �F�2�+F� �F��F�@��{�W�F���{�W�F��u܋F���  �C��F�2�H�F��F�H�F��F�= |� � �F�� �F��F�P�F����B�~��޸  ��� P�  �p�����}= t� �F�= � �F�P�F�@Y�;�~�j �F�2�+F� �F��F���{�W�F�- ��{�W�F���ۋF���  �C��F�2�H�F��F�H�F��F�P�F�����~��޸  �r�� P�  ����a܋F�H�F��F�= |� � �F��� =� t�	 � �F��� =� t�& �F�;Ft� �F��F��F�F��	 �F�2�@�F�� =� t� �F�= �
 �F�H�F�� �F�F��o =� t�3 �F�;F|� �F�;F��
 �F���  �C��F�@�F�� � �F��4 =� t� �F�2�4�F�� = t�	 � �� = t� � ���F�2�P�C� �O� �I���u�o�����2��u� �~WW�~��ܱP��� �~WW�~���ܱP����  �S �P��]��U��U�  ���~�W��� �����z�u�s �J���~��%�����a�P�F�2�= � tHY#��u�2 �J���~�����ڍ~�W� P�F�2��P� ��wݱ�p�� �~�W�F�2��P��Y܍~��#��9� ���u� ��� �TW�  �i����~W�~���۱�!��  �  ���]��U��U�  ���F����� P�FY�+�}� A�F�Q�F��W�F2�_����YIt�F�����~W�����۱�����  � ����]�P�U��U�  LL�  �F��~&�P�~�g���Y�;�� H4P�~&���C2�P�w޸0 P�9 ���O�Y#��u�2 �F��
 ��P�~&���C2�Y�-0 �F��~W�~&�@_&����F����  ����]�U��U� I @ .�>�6&�2�= t� �F �F�F �F� �	�F� ��F��	�;���^��  ��]� U��U�_U���v���U�  �!�P�~�t��#�Y�P�^�6�G�HY�+��^�6�G��^�6�G�=Q |�& �~�D���� �^�6�G��^�6�G�P�^�6�G����  ��]� U���v���U�  � �^�6�G��^�6�G�P�^�6�G�����  ��]�U���v���U�  �^�6�G�= �, �^�6�G�H�^�6�G��e�H�^�6�G��^�6�G�P�^�6�G����  ��]�U���v���U�  �^�6�G�P�~���3�Y�;�~�, �^�6�G�@�^�6�G���@�^�6�G��^�6�G�P�^�6�G��*��  ��]� U���v���U�  LL�~�.����=  �� �^�6�G�P�~�����Y�;�~� �~W�^�6�G�P� �P��ʋ^�6�G��^�6�G�P�~�����Y�+�}�) A�F�RINT " DO YOU WANT TO PRINT THIS ON PAPER "
47410 PRINT "  1- YES PRINT 2-NO"
47420 GOSUB 60000
47430 IF DT# = 2 THEN 30000
48000 REM PRINT BAR CHART
48200 FOR T = 1 TO NCT    /FOR ALL NUMBERS IN BAR CHART
48210 LPRINT LBL$(T),XPRT(T)  /PRINT LABEL THEN NUMBER
48220 T1#= XPRT(T)/XMAX       /RATIO OF THIS NUMBER TO THE MAXIMUM
48225 T1#= T1#*75 
48230 T2 = INT(T1#)
48240 FOR T3 = 1 TO T2  
48250 LPRINT "*";
48260 NEXT T3
48265 LPRINT ""
48270 NEXT T
48300 GOTO 30000
49000 REM PUT DOLLAR SIGNS IN
49010 GOSUB 4000
49020 XA = DT#
49100 XA = XA * 100 + .01  /MULTIPLY BY 100 THEN ADD .01 TO AVOID ROUNDING ERRORS       
49110 XA = INT(XA)  /CONVERT TO INTEGER
49120 T$ = STR$(XA)  /CONVERT TO STRING
49130 T$ = "__________" + T$
49140 T$ = RIGHT$(T$,8)
49150 A$ = MID$(T$,1,3)  /THOUSANDS
49160 B$ = MID$(T$,4,3)  /
49170 C$ = MID$(T$,7,2)  /CENTS
49180 A$ = "$"+A$+","+B$+"."+C$
49190 IF XA < 100000! THEN A$ = "$"+"____"+B$+"."+C$
49800 RETURN
50000 REM **********  INTRO
50010 GOSUB 500
50100 PRINT "                  S P R E A D S H E E T      1.0   "
50105 PRINT ""
50110 PRINT "         Copyright 1984 by Potomac Pacific Engineering Inc."
50120 PRINT ""
50130 PRINT "This program is licensed FREE to all users with some restrictions"
50165 PRINT "        See the manual for more information on the license."
50167 PRINT ""
50970 RETURN
51000 REM ***** EXIT TO SYSTEM
51100 GOSUB 500
51110 CLOSE
51120 PRINT " -BYE, Have a nice day"
51130 END
51200 REM ** WARNING
51210 GOSUB 9000
51220 PRINT "       IF YOU HAVE NOT SAVED YOUR DATA YOU WILL LOSE IT  "
51230 PRINT "            DO YOU WANT TO EXIT THE PROGRAM (Y/N)"
51235 A$ = INKEY$
51240 IF A$ = "" THEN 51235
51260 IF A$ = "Y" OR A$ = "y" THEN 51000
51270 GOTO 31000
52000 REM DELETE NUMBER
52100 A$ = "           "
52110 GOSUB 21130
52120 RETURN
60000 REM *******  INTEGER LESS THEN 100 CHECK  ********
60010 MAX = 2
60020 ACT$ = "1234567890=<>^"
60030 IF NE = 0 THEN ACT$ = "1234567890"
60040 PRINT ">__<";
60050 GOTO 60240
60060 REM *******  INTEGER *******                        
60070 MAX = 8
60080 ACT$ = "1234567890-+,=<>^"
60090 IF NE = 0 THEN ACT$ = "1234567890-+,"
60100 PRINT ">________<";
60110 GOTO 60240
60120 REM *******  SINGLE PRECISION  *******                        
60130 MAX = 10
60140 ACT$ = "1234567890-+,.%$=<>^"
60150 IF NE = 0 THEN ACT$ = "1234567890+-,.%$"
60160 PRINT ">__________<";
60170 GOTO 60240
60180 REM *******  DOUBLE PRECISION  *******                        
60190 MAX = 20
60200 ACT$ = "1234567890-+,.%$=<>^"
60210 IF NE = 0 THEN ACT$ = "1234567890+-,.%$"
60220 PRINT ">____________________<";
60230 GOTO 60240
60240 REM ********** NUMBER CHECK **********
60250 REM - see the remarks on the database input subroutine if you want to see how it works
******* NUMBER CHECK **********
60250 REM - see the remarks on the database input subroutine if you want to 
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0267

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
