---
layout: page
title: "PC-SIG Diskette Library (Disk #313)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0313/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0313"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BUSINESS SAMPLER #3"

    Time Management is the theme of this business collection.  Highlights
    include: the PC Yearbook which is a calendar/appointment schedule
    program written in C; it also includes a notepad.  IPM.COM is a
    (Critical Path Method) project scheduler written in Turbo Pascal.
    This is a methodology for determining the critical task that, if not
    accomplished by a certain time, contributes directly to the delay of
    the whole project.  It does not have a calendar function or a project
    tracking function.
    
    UserLog is a system utility designed to maintain a disk-based file of
    computer usage, thus eliminating the need for a written log that
    monitors the business and personal use of a computer.  Program Time
    calculates the amount of computer time used.  It allows apportionment
    of the time between business and non-business use.
    
    System Requirements:  BASIC
    
    How to Start: Consult the .DOC and README files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.  To run a program suffixed
    .COM or .EXE, just type its name, i.e., for IPM.COM, type IPM <ENTER>.
    
    Suggested Registration:   IPM $15.00; USERLOG $25.00
    
    File Descriptions:
    
    KEITH2   CPM  Sample data file for IPM.COM
    ACRS     DOC  Documentation for ACRS
    ACRS     BAS  Depreciation Calculating Program
    KEYPAD   BAS  Keypad Practice Typing Program
    IPM      DOC  Documentation for IPM
    IPM      COM  Ivy League Project Manager
    CALCULA  BAS  Large Screen Calculator
    PCYEARBK DOC  Day Month and Year Calendar Program
    PCYEARBK EXE  Documentation for PCYEARBK
    PERT3    BAS  PERT/Path Critical Scheduling Program
    PRGTIM   BAS  Utility Program for PRGTIM
    PRGTIM   EXE  Computer Utilization Program
    RPTUSE   BAS  Utility Program for PRGTIM
    PRGTIM   DOC  Documentation for PRGTIM
    TMSTRT   EXE  Utility Program for PRGTIM
    TMSTRT   BAS  Utility Program for PRGTIM
    USERLOG  DOC  Documentation for USERLOG
    USERLOG  COM  Maintains Disk-Based File of Computer Usage
    TAXDEDCT BAS  Income Tax Deduction Recording Program
    USE-TIME DOC  General Documentation for TMSTRT and PRGTIM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ACRS.BAS

{% raw %}
```bas
10 REM -- ACRS PROGRAM
20 REM -- BY L. AND S. BROUDY
25 REM -- SEPT. 1982
27 REM -- from: Creative Computing, Feb. 1983 pg 183
30 N=1
40 CLS:KEY OFF:COLOR 0,7:LOCATE 3,8:PRINT"DEPRECIATION (ACRS) PROGRAM":            COLOR 7,0:PRINT
50 INPUT "WOULD YOU LIKE TO READ DATA FROM DISK    (Y/N)";ANS$
60 IF ANS$="Y" OR ANS$="y" THEN 710
70 IF ANS$="N" OR ANS$="n" THEN S=1
80 REM -- INSERTING NEW INFORMATION
90 INPUT "PLEASE TYPE IN YOUR NAME, AND YOUR SOCIAL SECURITY NUMBER (NAME,SS#)";   NM$,SS$
100 INPUT "ITEM";IT$(N)
110 PRINT "IS THE RECOVERY PERIOD FOR ";IT$(N);" 3 YRS, 5 YRS, OR 10 YRS";:         INPUT C(N)
115 IF C(N)=3 OR C(N)=5 OR C(N)=10 THEN GOTO 120 ELSE 110
120 INPUT "UNADJUSTED BASIS";BP(N)
130 INPUT "DATE PLACED IN SERVICE";S$(N)
140 INPUT "% USED FOR BUSINESS";B(N)
150 INPUT "DEPRECIATION YEAR (1,2,ETC.)";Y
160 IF C(N)=3 THEN GOSUB 410
170 IF C(N)=5 THEN GOSUB 470
180 IF C(N)=10 THEN GOSUB 530
190 INPUT "WOULD YOU LIKE A PRINTOUT";ANS$
195 IF ANS$="Y" OR ANS$="y" THEN GOSUB 850
200 REM -- SCREEN DISPLAY
210 CLS: PRINT C(N)"- YEAR ACRS"
220 PRINT "COST RECOVERY FOR  ";IT$(N)
230 PRINT "UNADJUSTED BASIS: ";:PRINT USING "$$#####.## ";BP(N)
240 PRINT:PRINT "DATE PLACED IN SERVICE: ";S$(N):PRINT "DEPRECIATION YEAR:";Y
250 PRINT:PRINT "RATE OF ACRS DEPRECIATION: ";100*R;"%"
260 DEP=BP(N)*R
270 PRINT:PRINT "FULL ACRS DEPRECIATION AMT, =";:PRINT USING "$$#####.##";DEP
280 PRINT "PERCENT OF USE FOR BUSINESS:";B(N);"%":B=0.01*B(N)
290 TD=B*DEP
300 PRINT:PRINT "ACRS DEPRECIATION DEDUCTION = ";:PRINT USING "$$#####.##";TD
310 INPUT "DO YOU WANT ANOTHER DEPRECIATION YEAR   (Y/N)";A$
320 IF A$="Y" OR A$="y" THEN GOTO 150
330 IF A$="N" AND S=1 OR A$="n" AND S=1 THEN 370
340 INPUT "DO YOU WANT TO REVIEW ANOTHER ITEM FROM THE DISK  (Y/N)";A$
350 IF A$="Y" OR A$="y" THEN 780
360 IF A$="N" OR A$="n" THEN N=M ELSE 340
370 INPUT "DO YOU WANT TO ENTER ANOTHER ITEM (Y/N)";AN$
380 IF AN$="Y" OR AN$="y" THEN N=N+1:S=1:GOTO 100
390 INPUT "DO YOU WANT TO SAVE YOUR DATA (Y/N)";A$
400 IF A$="Y" OR A$="y" THEN 610 ELSE END
410 REM -- 3 YEAR ACRS
420 IF Y=1 THEN R=0.25
430 IF Y=2 THEN R=0.38
440 IF Y=3 THEN R=0.37
450 IF Y>3 THEN GOTO 150
460 RETURN
470 REM -- 5 YEAR ACRS
480 IF Y=1 THEN R=0.15
490 IF Y=2 THEN R=0.22
500 IF Y>2 AND Y<6 THEN R=0.21
510 IF Y>5 THEN GOTO 150
520 RETURN
530 REM -- 10 YEAR ACRS
540 IF Y=1 THEN R=0.08
550 IF Y=2 THEN R=0.14
560 IF Y=3 THEN R=0.12
570 IF Y>3 AND Y<7 THEN R=0.1
580 IF Y>6 AND Y<11 THEN R=0.08999999
590 IF Y>10 THEN GOTO 150
600 RETURN
610 REM --DISK ACCESS
620 M=N
630 INPUT "WHAT WOULD YOU LIKE YOUR NAME TO FILE";F$
640 OPEN F$+".TAX" FOR OUTPUT AS #1
650 WRITE #1,M,NM$,SS$
660 FOR I=1 TO M
670 WRITE #1,IT$(I),BP(I),S$(I),B(I),C(I)
680 NEXT I
690 CLOSE #1
700 END
710 INPUT "WHAT FILE WOULD YOU LIKE TO READ";F$
720 OPEN F$+".TAX" FOR INPUT AS #1
730 INPUT #1,M,NM$,SS$
740 FOR I=1 TO M
760 NEXT I
770 CLOSE #1
780 CLS:PRINT"ITEMS IN THE FILE ARE "
790 FOR I=1 TO M
800 PRINT I,IT$(I)
810 NEXT I
820 INPUT "WHICH ITEM WOULD YOU LIKE TO REVIEW (ENTER ITEM # OR 0 FOR NEW ITEM)";I
830 PRINT IT$(I): N=I: IF I=0 THEN N=M: GOTO 370
835 IF I<=M THEN GOTO 150
840 PRINT "THE ITEM YOU CHOSE ISN'T IN THE FILE":FOR K=1 TO 1500:NEXT: GOTO 780
850 REM -- PRINTER SUBROUTINE
860 LPRINT C(N) "-YEAR DEPRECIATION (ACRS) WORKSHEET"
870 LPRINT NM$;"..................SS# ";SS$
880 LPRINT
890 LPRINT "COST RECOVERY FOR  ";IT$(N)
900 LPRINT
910 LPRINT "UNADJUSTED BASIS: ";:LPRINT USING "$$#####.## ";BP(N)
920 LPRINT "DATE PLACED IN SERVICE: ";S$(N):LPRINT"DEPRECIATION YEAR: ";Y
930 LPRINT "RATE OF ACRS DEPRECIATION: ";100*R;"%"
940 DEP=BP(N)*R
950 LPRINT:LPRINT "FULL ACRS DEPRECIATION AMT. =";:LPRINT USING "$$#####.##";DEP
960 LPRINT "PERCENT OF USE FOR BUSINESS: ";B(N);"%": B=0.01*B(N)
970 TD=B*DEP
980 LPRINT:LPRINT "ACRS DEPRECIATION DEDUCTION = ";:LPRINT USING "$$#####.##";TD
985 LPRINT
990 GOTO 310
7507 50 INPUT #1,IT$(I),BP(I),S$(I),B(I),C(I)
```
{% endraw %}

## ACRS.DOC

{% raw %}
```

Accelerated depreciation calculation program.

To run, load BASIC and type RUN"ACRS" <-'

```
{% endraw %}

## CALCULA.BAS

{% raw %}
```bas
40   REM COPYRIGHT 1983-RALPH JACKSON.
50   REM PRINTING - INDICATING CALCULATION PROGRAM: CALC
51   DIM TSAV#(99), TSAVESU#(99)
52   DEFINT L
54   OPEN "RECORDS" AS #1 LEN = 50
55   FIELD #1, 2 AS IR$, 20 AS DESCR$, 9 AS AMT$, 10 AS DT$, 9 AS SPARE$
60   D$=DATE$: T$=TIME$
65   DEFDBL T,N
66   DEF SEG = &H40:POKE &H17, PEEK(&H17) OR 96 'SET CAPS LOCK & NUM LOCK
71   GOSUB 73
72   GOTO 98
73   CLS: PRINT "THE IBM PERSONAL COMPUTER PROGRAM - CALC"
74   PRINT "SIMULATING A CALCULATOR WITH LARGE SCREEN"
76   PRINT "A MEMORY OF 99 NUMBERS, DISK MEMORY"
78   PRINT "AND OPTIONAL PRINTER OUTPUT.
80   PRINT:   PRINT "PROGRAMMER: R. JACKSON " D$ " " T$
81   PRINT:PRINT "MENU - E = END COMPUTATION"
82   PRINT "       S = CLEAR SUBTOTAL TO ZERO"
83   PRINT "       T = CLEAR SUBTOTAL AND TOTAL TO ZERO"
84   PRINT "       MN= STORE  DATA IN  POSITION  N>0<100"
85   PRINT "       RN= RECALL DATA FROM POSITION N>0<100"
86   PRINT "       AN= ADD TO TOTAL & SBTOT FROM N>0<100"
87   PRINT "       FN= ENTER DATA IN DISK RECORD N>0<100"
88   PRINT "       PN= PUT   DATA IN DISK RECORD N>0<100"
89   PRINT "       GN= GET DATA FROM DISK RECORD N>0<100"
96   LOCATE 1,48,0:PRINT "OPERATION       TOTAL    SUBTOTAL"
97   RETURN
98   LOCATE 16,1,0: PRINT:INPUT "ENTER Y TO OBTAIN PRINTER OUTPUT==> ",Y$
99   IF Y$="Y" THEN GOTO 400
100  TSUB=0
101  TOTAL = 0
109  M=1
110  LOCATE 19,1,0:PRINT "                                        ":LOCATE 19,1,0: INPUT "ENTER + - * / OR MENU AND VALUE==> ",F$
120  OPER$=LEFT$(F$,1)
130  V$=MID$(F$,2)
140  NUMBER=VAL(V$): N=NUMBER: GOTO 470
141  IF OPER$="F" THEN GOTO 550
142  IF OPER$="E" THEN PRINT:PRINT "END":LPRINT "END":DEF SEG = &H40: POKE &H17, PEEK(&H17) AND 223: END 'UNLOCK NUM LOCK
143  IF OPER$="M" THEN GOTO 430
144  IF OPER$="R" THEN GOTO 440
145  IF OPER$="S" THEN TSUB=0:GOTO 309
146  IF OPER$="P" THEN GOTO 550
147  IF OPER$="G" THEN GOTO 550
148  IF OPER$="A" THEN GOTO 440
149  IF OPER$="T" THEN TOTAL=0: TSUB=0:GOTO 309
151  IF OPER$="+" THEN TOTAL=TOTAL+NUMBER:TSUB=TSUB+N: GOTO 300
152  IF OPER$="-" THEN TOTAL=TOTAL-NUMBER:TSUB=TSUB-N: GOTO 300
154  IF OPER$="*" THEN TOTAL = TOTAL*NUMBER:TSUB=TSUB*N: GOTO 300
156  IF OPER$="/" THEN TOTAL = TOTAL/NUMBER:TSUB=TSUB/N: GOTO 300
158  LOCATE 19,1,0: INPUT "ENTER CORRECT FUNCTION AND NUMBER==> ",F$:GOTO 120
300  LOCATE M+1,46,0: PRINT USING "\\######.##  #######.##  #######.##";OPER$,NUMBER,TOTAL,TSUB
301  IF Y$="Y" THEN LPRINT USING "\\########.##  #########.##  #########.##";OPER$,NUMBER,TOTAL,TSUB
303 BLANK$="                              ": LOCATE M+2,46,0: PRINT USING"\                                 \";BLANK$: GOTO 310
309  LOCATE M+1,46,0: PRINT USING "\    \                               ";F$:IF Y$="Y" THEN LPRINT USING "\    \";F$
310  M=M+1: IF M>20 THEN M=1
315  LOCATE 19,1,0:PRINT "                                            "
320  GOTO 110
400  PRINT: PRINT "READY PRINTER, LEAVE 1/2 INCH TOP MARGIN"
401  A$="    OPERATION":B$="TOTAL":C$="SUBTOTAL"
402  PRINT "PRESS RETURN":INPUT " ",KX:
403  LPRINT USING "    \              \  \        \";D$,T$:LPRINT
410  LPRINT USING "\                  \  \       \  \        \";A$,B$,C$
415  GOTO 100
430  IF N<1 THEN GOTO 158
432  IF N>99 THEN GOTO 158 ELSE GOTO 500
435  LOCATE M+1,46,0:  PRINT USING "\    \";F$: M=M+1:IF Y$="Y" THEN LPRINT USING "\    \";F$ ELSE GOTO 436
436  M=M+1: IF Y$="Y" THEN GOTO 460
440  IF N<1 THEN GOTO 158
442  IF N>99 THEN GOTO 158 ELSE GOTO 443
443  IF OPER$="A" THEN GOTO 745
445 L=N: TOTAL = TSAV#(L): TSUB = TSAVESU#(L): GOTO 300
470  IF OPER$="0" GOTO 480
471  IF OPER$="1" GOTO 480
472  IF OPER$="2" GOTO 480
473  IF OPER$="3" GOTO 480
474  IF OPER$="4" GOTO 480
475  IF OPER$="5" GOTO 480
476  IF OPER$="6" GOTO 480
477  IF OPER$="7" GOTO 480
478  IF OPER$="8" GOTO 480
479  IF OPER$="9" GOTO 480 ELSE GOTO 141
480  OPER$="+": V$=MID$(F$,1): NUMBER = VAL(V$): N=NUMBER: GOTO 151
500  LET L=N: LET TSAV#(L)=TOTAL: LET TSAVESU#(L)=TSUB: GOTO 300
550  IF N<1 THEN GOTO 110
551  IF N>99 THEN GOTO 110
552  CLS: A$ = "PRESENT CONTENTS OF RECORD "
553  PRINT USING "\                        \##"; A$, N: PRINT
555  GET #1,N
559  AMNT$=AMT$
560  IR = CVI(IR$)
561  TAMT# = CVD(AMT$)
565  COLOR 0, 7:PRINT "RECNO DESCRIPTION                AMOUNT       DATE      ":COLOR 1, O
570  PRINT USING "  ##  \                    \    #######.##  \          \";IR, DESCR$,TAMT#,DT$
575  COLOR 2, 0:PRINT
576  IF OPER$ = "P" THEN GOTO 650
577  IF OPER$ = "G" THEN GOTO 750
580  INPUT "ENTER NEW DESCRIPTION (ENTER \ IF NO CHANGE)",DESC$
582  IF DESC$ = "\" THEN GOTO 586
584  LSET DESCR$ = DESC$
586  INPUT "ENTER NEW AMOUNT (ENTER \ IF NO CHANGE)",AMNT$
587  IF AMNT$ = "\" THEN GOTO 590 ELSE GOTO 588
588  AMT#=VAL(AMNT$)
589  LSET AMT$=MKD$(AMT#)
590  INPUT "ENTER NEW DATE (ENTER \ IF NO CHANGE)",D$
592  IF D$ = "\" THEN GOTO 596
594  LSET DT$ = D$
596  LSET IR$ = MKI$(N)
600  PUT #1, N
605  GOSUB 73
606  TX#=AMT#
607  GOSUB 720
610  GOTO 100
650  B$ = " AMOUNT IN TOTAL = "
655  PRINT USING "\                  \######.##"; B$, TOTAL:PRINT
660  PRINT "ENTER R IF TOTAL IS TO REPLACE AMOUNT"
662  PRINT "ENTER A IF TOTAL IS TO ADD TO AMOUNT"
664  INPUT "ENTER C TO CANCEL OPERATION"; X$
666  IF X$="R" THEN GOTO 680
668  IF X$="A" THEN GOTO 690
670  IF X$="C" THEN GOSUB 73
672  GOTO 100
680  LSET AMT$=MKD$(TOTAL#):TX#=TOTAL#: GOTO 700
686  LSET DT$=D$
690  AMT#=CVD(AMT$)
695  TOT#=TOTAL# + AMT#:TX#=TOT#
696  PRINT USING "\                  \#######.##"; B$, TOT#: INPUT " PRESS RETURN TO CONTINUE",X$
697  LSET AMT$=MKD$(TOT#): GOTO 700
700  LSET IR$=MKI$(N)
701  LSET DT$=DATE$
702  PUT #1, N
705  GOSUB 73
707  GOSUB 720
710  GOTO 100
720  IF Y$="Y" THEN LPRINT USING "\\ ## \                    \    #######.##  \          \";OPER$, IR, DESCR$, TX#, DT$
721  RETURN
745  L=N:TOTAL#=TOTAL# + TSAV#(L)
746  TSUB = TSUB + TSAVESU#(L)
747  NUMBER = TSAV#(L): GOTO 300
750  TOTAL# = CVD(AMT$)
751  INPUT "PRESS RETURN TO CONTINUE", X$
752  GOSUB 720
753  GOSUB 73
754  TSUB = TOTAL: M=2
756  LOCATE M,46,0: PRINT USING "\\######.##  #######.##  #######.##";OPER$,NUMBER, TOTAL, TSUB
758  GOTO 110
```
{% endraw %}

## FILES313.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 313  Msc. Business                                           v1.1
------------------------------------------------------------------------
 
ACRS     BAS  Depreciation Calculating Program
ACRS     DOC  Documentation for ACRS
CALCULA  BAS  Large Screen Calculator
IPM      COM  Ivy League Project Manager
IPM      DOC  Documentation for IPM
KEITH2   CPM  Sample data file file IPM.COM
KEYPAD   BAS  Keypad Practice Typing Program
PCYEARBK DOC  Day Month and Year Calendar Program
PCYEARBK EXE  Documentation for PCYEARBK
PERT3    BAS  PERT/Path Critical Scheduling Program
PRGTIM   EXE  Computer Utilization Program
PRGTIM   BAS  Utility Program for PRGTIM
PRGTIM   DOC  Documentation for PRGTIM
RPTUSE   BAS  Utility Program for PRGTIM
TMSTRT   BAS  Utility Program for PRGTIM
TMSTRT   EXE  Utility Program for PRGTIM
USE-TIME DOC  General Documentation for TMSTRT and PRGTIM
TAXDEDCT BAS  Income Tax Deduction Recording Program
USERLOG  COM  Maintains Disk-Based File of Computer Usage
USERLOG  DOC  Documentation for USERLOG
 
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## IPM.DOC

{% raw %}
```
IPM.PAS & IPM.COM - Version 1.07B- November, 1986
(c) 1984, 1986 by Edward V. Dong, All Rights Reserved.


                         Programmed by:
                         Edward V.  Dong
                     12205 Alexandria Place
                         Chino, CA 91710

1.0   GENERAL

IPM.COM  is  a  Critical  Path  Method  Project  Scheduler.   The
Critical  Path  Method  is  a  methodology  for  determining  the
critical  tasks  that,  if  not  accomplished  by a certain time,
contribute  directly  to  the  delay  of  the whole project.  You
should refer to various books on the subject.

This version was prompted as a result  of  some  bug  reports  on
version  1.06a.  A version 1.07 was previously distributed;  this
version  1.07b  is  a MINOR update and bug fix.  The bug was that
SLACK was not computed properly.

1.1  RIGHT  TO  USE THIS SOFTWARE.  The software, IPM.COM, may be
used as is, by anyone  for  private  purposes  only.   Commercial
users  should contact the address above for the right to use this
software.  No claim is made for the veracity  of  this  software,
and  no warranty, guarantee or other bond is expressed or implied
about the use of this software.  No user may sell  this  software
in  any  form,  other than for the cost of materials and mailing,
without the express, written consent of Edward V.  Dong.

This  software  and  documentation is copyright (c) 1984, 1986 by
Edward V. Dong, all rights reserved.

You are encouraged to share and  copy  this  software  otherwise.
Contributions  ($15  for example) and comments should be directed
to the above address.

1.2 REQUIREMENTS.  IPM will run in a minimum of 128K,  under  DOS
2.X,  and  3.1.   Originally  written  in  Turbo Pascal 1.0 (this
version compiled, however, under Turbo 3.0), IPM requires an  IBM
PC,  XT,  PC-3270,  or AT, or a close PC compatible that supports
IBM BIOS ROM calls.  It  should  run  with  or  without  a  color
graphics board.

The  maximum  number  of  activities  that it will handle, is 100
(actually 99), determined by the constant MaxValue in the  source
code IPM.PAS.

Various calculations and plots can be printed to an  EPSON  or  a
compatible  printer,  by first outputing them to a disk file, and
then  printing  those  files.   Basic  calculation  data  can  be
exported as a .PRN file to Lotus 1-2-3.

1.3  THEORY  OF  OPERATIONS.   Briefy,  the  CPM theory is that a
project is composed of tasks or activities that are arranged in a
pattern  or  network,  where  some  tasks  may  be  performed  in
parallel.

If two tasks are being performed in parallel, then the  one  that
takes  longer  to  do,  is  termed "critical".  It is "critical",
because a delay in that task directly contributes to the delay of
the whole project.  A delay in the other task -- as long as it is
completed before the longer task -- does not.  The difference  in
completion time is called "slack".

The idea in project scheduling and management is to arrange these
tasks, and to monitor them,  so  that  the  time  for  the  whole
project is kept as short as possible, or the resources needed for
the project is "levelled".  That is, you  don't  want  to  spend,
say, 6 men for 2 weeks on one part of the project, and only use 1
man for the remaining 12 weeks of  the  project;   rather,  as  a
manager,  you want to spread your manpower (or other resource) as
evenly as possible, because it becomes easier to manage.

1.4  BACKGROUND.   IPM was originally coded because of, first, an
admiration  for  the  Harvard  Project  Scheduler,  and,  second,
certain  deficiencies  in  the  HPM.   IPM indeed stands for "Ivy
League Project Manager".  While most features found  in  HPM  are
incorporated  into  IPM,  IPM  however  does  not have a calendar
function nor a project-tracking function.   These  may  be  added
later.

IPM  is  an  evolutionary  outgrowth  of  an  earlier  scheduling
program, written  by  E.   Dong,  called  CPM.COM.   CPM.COM  was
originally  coded  18  Sept  83  by  E.  Dong, based on the BASIC
version, 'Hard Hat Management:  Two On-Site  Tools',  by  Richard
Parry,  INTERFACE  AGE,  February, 1981.  It was first translated
into CIC86 'C', and then retranslated into Turbo Pascal, with the
last update on 24-Mar-84.

The  current  program, IPM.COM, was adapted from PRACTICAL PASCAL
PROGRAMS, Osborne/McGraw-Hill, by  Greg  Davidson,  (c)  1982  by
McGraw-Hill,  Inc.   However,  this  was extensively modified, as
this book did not address the creation of GANTT or PERT charts.

The algorithm for IPM's GANTT charts is based on that created for
CPM.COM,  while  the  algorithm  for  IPM's PERT charts was newly
created (in three days of intensive development).  A  semi-screen
editor was also created for IPM.COM.

2.0   STARTING IPM

Starting IPM is, after it has  been  copied  to  the  appropriate
disk,  to  type  IPM.   When  it  pops  up on the screen, it will
display a copyright logo, a brief text indicating  the  reference
to  Greg Davidson's book, and a brief description of how to enter
commands.

IPM is arranged so that line 25 (and occasionally, also line  24)
shows the current available commands.  You execute these commands
by typing the first letter (which should be high-lighted) and  no
carriage return.

Initially,  the  only  options  you have at startup are:  F(ile),
Q(uit), and H(elp).  QUIT returns you to DOS;  in some cases,  it
will  return  you  to  a  previous  command  menu  instead.  HELP
generates a quick summary of the basic commands  only.   FILE  is
the  command  that  you must enter first, in order to do anything
with IPM.

FILE allows you to specify the method of data  entry.   That  is,
you  can enter project data interactively at the console, or from
a file.  If you're using IPM for the first time, generally  there
would  be  no  files  for  IPM  to  use,  so  you must enter data
initially at the console directly.  FILE will prompt you for your
option.

You  should  have  a  minimum of four tasks to use IPM;  anything
else, would be a waste of time with IPM.

NOTE:   CPM  theory  works best if the number of tasks is GREATER
than the number of nodes.  A start node points to a  task,  which
points  to  another node, until the end node is reached.  Between
any two nodes, there may be any number of PARALLEL tasks.

Entering  necessary  input  data  is as follows.  First, IPM will
prompt:

Input from Console? (Y/N)

    Either an upper- or lower-case "y" or "n" may be entered.  If
    you  enter  "N",  then IPM will ask for the name of the file.
    This file must be in  the  current  subdirectory,  if  you're
    using DOS 2.0 or higher;  IPM isn't smart enough (right now!)
    to access across subdirectories.

    If you answer "Y", then IPM will ask:

Enter Project Title/Description:

    You can enter a  60-character  description  of  the  project.
    This  title  or  description  will  appear  at the top of the
    screen to let you know what project IPM is working on.

    Then, IPM will prompt for the number of tasks  that  comprise
    this project:

Enter Number of Tasks on this network:

    As  was  said before, you should have a minimum of four tasks
    to use IPM;  anything else, would be a  waste  of  time  with
    IPM.   Then the screen will clear, and display something like
    the following:

PROJECT: Sample -- Editing
----------------------------------------------------------------
Task Start  End
      Node Node  Duration  Cost Name/Description
    1    0    0    0.00   0.00    Task01
    2    0    0    0.00   0.00    Task02
    3    0    0    0.00   0.00    Task03
    4    0    0    0.00   0.00    Task04

    where "Sample" here is  the  project  title/description  that
    you've entered.  IPM tells you that you are in editing  mode,
    and  will have supplied a generic task name for the number of
    tasks you've indicated, such as "Task01".

    At this point, you will see a double command line (lines 24 &
    25).  You can use the command options (remember,  enter  only
    the  first or high-lighted letter of the option) to alter and
    enter the task data.

You should do the following:

    o IPM  assumes  that the first node is numbered "1", and that
      the last possible node is a number less than  or  equal  to
      the  total  number  of  tasks.  Therefore, you must specify
      "Start" and "End" nodes for each task.

    o "Duration" refers to the expected length of time  that  the
      task  should take.  No units are used, so you can use days,
      hours, minutes, or even seconds if you want.  However,  you
      should use the SAME unit of time (days, weeks, or whatever)
      for all entries.

To edit a line in the display, you must first enter  the  Taskno.
When  you  have done so, the line in the display will high-light.
Then you can change Duration, Task title, Task description,  etc.
The Task Title, however, is limited to 8 characters only.

You  can  insert either a new Task or a new Node.  If you enter a
new Node, you MUST specify a current Task number to go with  that
new Node.

To  finish  the editing, enter the command Q(uit).  IPM will then
prompt you if you want to save it to disk, and if so,  what  name
should it give the file.  If the file exists, IPM will ask you if
you want to overwrite (reuse) the file.

3.0  OPERATING IPM

Once you have entered the task data, you then have the following
options:

    CALCSHEET:  Calculate critical path, total project  duration,
    and cost.  You MUST run this option before doing...

    GANTT:  Build a GANTT chart on the console.  If the CalcSheet
    option was not exercised, then you will be prompted to do so.
    The GANTT chart is normalized, that  is,  the  time  line  is
    scaled to fit the CRT display.  The scaling is indicated.

    PLOT:   Build  a PERT network chart of the project.  Here you
    will see the tasks going from Node to Node, in  the  sequence
    that  you've  entered.  Since many managers and professionals
    need to see a PERT chart first, this option has the suboption
    of  Editing  as  well.   Then  you  will  go through the same
    editing as before, except that the Edit screen appears in the
    lower  half  of  the  CRT display, so you can see the current
    PERT network.  When you have  finished  editing,  the  screen
    will flicker once or twice, and then paint the new PERT chart
    that is the result of your editing.

    EDIT:  Edit tasks, as described above.

    FILE:  Once you have entered data (either from the console or
    from  disk), the next time you request F(ile), it will ask if
    you want to do a N(ew project) or to O(utput to  file).   See
    Section 4.0 below.

    QUIT:   Return  to  DOS.  IPM will NOT ask you if you want to
    save the current file, so be warned.

4.0  ADVANCED IPM FILE OPTIONS

After you have first entered data via F(ile), the next time (and
thereafter) you enable F(ile), it will ask you if you want to do
a N(ew project), O(utput to file), or Q(uit to main menu).

    N(ew project):  This is the same as if you were entering data
    for the first time to IPM.

    O(utput  to File):  When you select this option, you will see
    a new command menu line of C(alcSheet), G(antt), P(lot),  and
    L(otus).  For C, G, and P, you will first be prompted for the
    filename to send the output to;  this can be "LPT1:" for  the
    printer, but this is NOT encouraged.  (Save to file first, so
    you can use your text editor to modify the file for  whatever
    purpose.)

    L(otus):   This  option  outputs  the results of calculations
    into a file, which should be called  with  extension  ".PRN".
    Then  you  can  use Lotus 1-2-3 to IMPORT the file (using the
    NUMBERS option in Lotus), and  thus  generate  a  .WKS  file.
    Once  you've  done  that,  you  can now use the full power of
    Lotus on it.

    Q(uit):  Returns you to the main menu display.

The  file/printer  output  of the G(antt) and P(lot) options will
differ from the CRT display.  The reason for this, is  to  enable
the  use of any ASCII-supported printer;  except for IBM printers
and EPSON FX printers (with the  appropriate  fonts  downloaded),
the  IBM  display characters above ASCII code 128 decimal are not
uniformly supported.

5.0  USEFUL TIPS

IPM uses a normalized time scale.  That is, IPM does not  attempt
to   allocate  tasks  to  a  calendar  schedule,  although  this,
obviously,  is  a  prime  objective.   Thus,   you   should   use
"normalized"  time  units,  such as hours, days, or minutes;  you
should use minutes, for example, if you are using  this  to  plan
activities  that will span an eight-hour day or less;  hours, for
projects under a week;  and days for longer-lived projects.


```
{% endraw %}

## KEYPAD.BAS

{% raw %}
```bas
11 'Written by Kurt Riegel, March 1983. Telephone 703-522-5427.
12 'Keypad practice program, to develop proficiency in using keypad.
13 'Suggested filename is KEYPAD.BAS
14 DEFINT I:A$=TIME$:RANDOMIZE VAL(MID$(A$,4,2)+MID$(A$,7,2))
15 DIM X$(20):KEY OFF:CLS:PRINT TAB(30)"KEYPAD PRACTICE":PRINT
16 PRINT"Key in the numbers just below those listed, as accurately as you can."
17 PRINT:PRINT"Remember to put the NUM LOCK key in the correct state."
18 FOR I=1 TO 15:X$(I)=MID$(" 1234567890 .+-",I,1):NEXT
19 LOCATE 10,15:Y$="":FOR I=1 TO 50:Y$=Y$+X$(1+INT(RND*15)):NEXT
20 PRINT CHR$(218);STRING$(50,196);CHR$(191)		  'top of box
21 LOCATE 13,15:PRINT CHR$(192);STRING$(50,196);CHR$(217) 'bottom of box
22 LOCATE 11,1:PRINT "Your lesson "CHR$(26)" "CHR$(179);Y$;CHR$(179):PRINT" Type here  "CHR$(26)" "CHR$(179):LOCATE 12,66:PRINT CHR$(179)
23 LOCATE 12,16:LINE INPUT Z$:FOR I=LEN(Z$)+1 TO 50:Z$=Z$+" ":NEXT
24 IN=LEN(Z$): IF IN<=50 THEN IN=50
25 FOR I=1 TO IN:IF MID$(Y$,I,1)=MID$(Z$,I,1) THEN MID$(Z$,I)=" " ELSE MID$(Z$,I)=CHR$(24)
26 NEXT:LOCATE 12,1:PRINT"   Errors   "CHR$(26)" "CHR$(179);Z$:PRINT:PRINT"Hit any key to continue."
27 IF INKEY$="" THEN 27
28 LOCATE 10,1:FOR I=1 TO 5:PRINT STRING$(79," "):NEXT:GOTO 19 'last statement
```
{% endraw %}

## PCYEARBK.DOC

{% raw %}
```


PC YEARBOOK is a calendar/appointment schedule program written in C
using the De Smet C Compiler. PC Yearbook turns the PC into an
electronic appointment book. Appointments can be scheduled from
8:00 am to 6:30 pm in half-hour increments. There is also a Note Pad
to record other information.


The program as been tested on a PC with 128K, color monitor, and 
with both DOS 1.1 and 2.0. The program should run on a 64K PC 
with DOS 1.1 but may not run under 2.0 due to the operating system
overhead. I have not tested the program on a monochrome display 
except very briefly but the program makes no use of special color
commands and should have no difficulity with the monochrome display.


You are encouraged to copy and distribute this program. If you find
this program useful, a contribution of $15 would be appreaciated. I
am especially interested in suggested improvements,bugs,comments,etc.
These may be mailed to:

                         
                         Ulderic F. Racine
                         2520 South East Alexander Drive
                         Topeka, Kansas 66605


or you may leave a message on the HAWKEYE Bulletin Board, 319-363-3314
or the CUE, 913-267-1903.
































                                   -1-




PC Yearbook                                                          Page 2.

Running the program:

Before running PC Yearbook, you should check the system date. Be sure 
that it is the current date as the program utliizes that date to display
the initial calendar and to store the appointment data files. If you
forget, you should exit the program and start over again. 

To run the program, type PCYEARBK and press <Return>.



Calendar Function:


Each time the program is run, it will dispaly a calendar of the month
contained in the system date. Thus if you initialize the program and
have entered a date of 04-23-84, a calendar for April 1984 will be 
displayed at the top left of the screen with the 23rd highlighted in
reverse video. The date will also be printed to the right of the calendar
as Monday April 23, 1984. The appointment times will be displayed below
the calendar and a lightbar will indicate the first appointment at 8:00
am.

The keys used to manipulate the calendar are:


<Cursor> keys are used to move the highlighted day on the calendar. The
         Right/Left arrow keys move the date one day. The Up/Down arrow
         keys move to the same day in the previous or next week. The
         appointment schedule will be updated as the date is moved.


<F1>     displays the month previous to the month currently displayed.
         All appointment data from the currently displayed month will be
         saved to disk and the data from the previous month (if any) will
         be loaded into memory from disk.


<F2>     displays the next month after the month currently displayed.
         All appointment data from the currently displayed month will be
         saved to disk and the data from the previous month (if any) will
         be loaded into memory from disk. 


<F3>     will display the month and highlight the day/date that first
         appeared when the program was run during the current session.
         This allows you to return to the current date from any other 
         month. All appointment data from the currently displayed month
         will be saved to disk and the data from the previous month (if
         any) will be loaded into memory from disk.


<F4>     printout appointments - See Appointment function.


<F5>     accesses the Note Pad - See Note Pad function.


<F10>    to exit PC Yearbook and return to DOS. All appointment data
         from the currently displayed month and notes in the Note Pad
         will be saved to disk.


                  
PC Yearbook                                                          Page 3.

Appointment Schedule Function:


The appointment schedule allows appointments from 8:00 am to 6:30 pm
for each day. Each appointment may be up to 32 characters of text and
is active whenever the calendar is displayed.

The keys to use the appointment function are:


<Spacebar> moves the highlighted bar beginning at 8:00 am to the next
         appointment. The highlighted bar indicates the current cursor
         position for adding or deleting an appointment.


<Ins>    opens an appointment time at the current position of the
         highlighted bar for input of appointment text. The text is
         limited to a maximum of 32 characters. If you use all 32
         characters, the program will generate an automatic carriage
         return and will turn off the cursor otherwise you must press
         <Return> to terminate the entry of the text.


<Del>    deletes any appointment text at the current position of the
         highlighted bar.


<Return> terminates the entry of appointment text if the text is less
         than 32 characters.


<Backspace> or the left arrow key will delete the previous character
         of text during entry of appointment text.


<F4>     allows you to printout a specific date or the entire month of     
         the appointment schedule. When this key is pressed, the days
         of the current month will be displayed over the appointment
         schedule in three columns. Use the <Spacebar> to move the 
         cursor. Pressing the <Return> will select the day for printing.   
         A small graphic block will appear in place of the cursor 
         indicating that the day has been selected. If the day has 
         already been slected, pressing <Return> will erase the 
         selection. Pressing the <Spacebar> on a day will not alter the    
         selection. When your selections have been made, press <Esc> to    
         printout the appointment schedule for the days selected. If no    
         days are selected, the program returns to the calendar/schedule   
         function. The printout will contain a maximum of four days per    
         page in date order regardless of the order of selection.



Appointment Data Files:


Appointment data is stored on the disk in the default drive. A file is 
created for each month using the naming format of MMMYYAPT.DAT with the 
first three characters being the first three in the name of the month and 
the next two the last two digits of the year. Thus data for April 1984 
would be stored in a file named APR84APT.DAT.



PC Yearbook                                                          Page 4.

The amount of disk space required to store a month's data is dependent 
upon the number of appointments scheduled. The maximum size is about 23K 
which would represent an appointment scheduled for each half-hour for the 
entire month. A 320K diskette should have no problems containing an 
entire year of data.



Note Pad Function:

The Note Pad provides four pages of fifteen lines to store notes and 
other textual information that you do not wish to put on the appointment 
schedule. Each line can be up to 70 characters long.

The Note Pad is always resident and available. It is not date dependent.
         
The keys to use the Note Pad function are:

         
<PgUp>   displays the previous page in the Note Pad. If you are on page 
         1, it will wrap around to page 4.


<PgDn>   displays the next page in the Note Pad. If you are on page 4, it 
         will wrap around to page 1.


<Spacebar> moves the lighlighted bar on the Note Pad. It indicates the 
         cursor position for adding or deleting a note.


<Ins>    opens a Note Pad line at the current position of the highlighted
         bar for input of note text. The text is limited to a maximum of 
         70 characters. If you use all 70 characters, the program will 
         generate an automatic carriage return and will turn off the cursor
         otherwise you must press <Return> to terminate the entry of the
         text.


<Del>    deletes a line of text on the Note Pad at the current position
         of the highlighted bar.


<Return> terminates the entry of Note Pad text if the text is less than
         70 characters.


<Backspace> or the left arrow key will delete the previous character
         of text during entry of Note Pad text.


<Esc>    exits the Note Pad and returns to the calendar/appointment 
         functions.


<F5>     printouts out the Note Pad. On the printout, the notes are 
         printed from 1 to 60 without page indications as they are 
         displayed on the screen.














        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

## PERT3.BAS

{% raw %}
```bas
5 COLOR 7,0,0
10 '     PROGRAM: ENHANCED PERT          SOURCE: BYTE, MAY, 1982, PG. 469ff.
20 '     FUNCTION: PERT-CHARTING         DATE:   5/1/82
30 '     VERSION:  1.1                   AUTHOR: T. V. BONOMA
40 '
42 SCREEN 0,1,0,0:WIDTH 80
45 DEFDBL M,X,P
47 KEY OFF
50 CLEAR 5000: CLS
60 WIDTH 80: COLOR 14,1,1:CLS:LOCATE 1,23:PRINT "PERT/CRITICAL PATH SCHEDULING"
70 LOCATE 3,23: PRINT "ORIGINAL BY S.M. ZIMMERMAN/L.M. CONRAD"
80 LOCATE 5,23:  PRINT "MODIFIED/ADAPTED FOR IBM PC BY"
90 LOCATE 7,23:  PRINT "THOMAS V. BONOMA   MAY, 1982"
95 LOCATE 9,23:PRINT"MODIFIED BY PATRICK HERON JUNE, 1983"
100 PRINT:PRINT"Note:  Beginning Events will be sorted numerically"
105 FOR X=1 TO 2000:NEXT X
120 DIM A$(500,2),A(500,11),SV(11)
130 CLS: LOCATE 5,25:  PRINT "MENU FOR INPUT CHOICES"
135 FOR HOLDIT = 1 TO 700:NEXT HOLDIT
140  LOCATE 7,20: PRINT "K - KEYBOARD"
150 LOCATE 8,20: PRINT "D - DISK FILE"
155 LOCATE 9,20:PRINT"F - TO DISPLAY FILES"
170 LOCATE 14,40: INPUT "What is your selection  ";IO$
172 IF IO$="F" OR IO$="f" THEN GOTO 18050
175 IF IO$<>"D"  AND IO$<>"K" AND IO$<>"d"  AND IO$<>"k"        THEN 130
180  IF IO$<>"K" AND IO$<>"k" THEN 360
200 PRINT
205 PRINT "ENTER THE NUMBER OF ";
210 PRINT "ACTIVITIES IN THIS NETWORK";
215 INPUT M%:EE=9
220 FOR I=1 TO M%
225 PRINT
230 PRINT USING "-----------ACTIVITY ## -----------"; I
231 PRINT "CODE (LETTER E.G. A),","DESCRIPTION(TITLE)"
232 INPUT A$(I,1),A$(I,2)
235 PRINT "ENTER START NODE, END NODE";
240 INPUT A(I,1),A(I,2)
245 IF A(I,2)<=A(I,1) THEN 255 ELSE 280
255 PRINT "START NODE MUST BE NUMBERED LOWER";
260 PRINT "  THEN END NODE, AND END NODE MUST"
265 PRINT "  BE LESS THAN THE NUMBER OF ACTIVITIES.";
270 PRINT "      *** TRY ENTRY AGAIN ***"
275 GOTO 225
280 PRINT "ENTER THREE TIME ESTIMATES";
285 PRINT " FOR THIS ACTIVITY (BEST,LIKELY,WORST)";
290 INPUT A(I,3),A(I,4),A(I,5)
300 NEXT I
350  GOTO 460
360 IF IO$<>"D" AND IO$<>"d" THEN 470
370 CLS:LOCATE 5,30:PRINT "DISK INPUT ROUTINE"
375 ON ERROR GOTO 15000
380 : PRINT:LINE INPUT "Name of disk file, e.g., B:xxxxxxx.yyy  ";           B$:OPEN "I",1,B$
400 INPUT#1, M%,EE
410 FOR I= 1 TO M%
420 INPUT#1, A$(I,1),A$(I,2),A(I,1), A(I,2), A(I,3),A(I,4),A(I,5)
430 IF A$(I,1)="END" THEN 540
440 NEXT I
450 CLOSE #1
460 GOTO 530
470 IF IO$<>"R" AND IO$<>"r" THEN 130
530 ' Verify the data which was entered.
540 M=M%: TP=0:FOR I = 1 TO M: IF A(I,2)>TP THEN TP=A(I,2)
550 NEXT I: EE= TP
560 FOR I=1 TO M-1
570 FOR J=I+1 TO M
580 IF A(I,1)<=A(J,1) THEN 610
590 FOR K=1 TO 11: SV(K)=A(I,K):A(I,K)=A(J,K):A(J,K)=SV(K):NEXT K
600 FOR K=1 TO 2: SV$(K)=A$(I,K):A$(I,K)=A$(J,K):A$(J,K)=SV$(K):NEXT K
610 NEXT J,I
620 CLS
630 XX=5: COLOR 14,1,1:CLS:PRINT TAB(25);"VERIFICATION OF INPUT":PRINT
640 Z1$="Leg Description   Expected  Early   Early    Last    Last   Slack"
650 Z2$="                    Time     Start    Fin.    Start   Fin.   Time"
660 Z3$="    Leg     Description    Begin   End     Optimist  Likely  Pessimist"
670 Z4$="                           Event   Event     Time     Time      Time  "
680 PRINT "No. ";Z3$
690 PRINT "    ";Z4$
700 K=0
710 C4$="###      "
720 FOR I=1 TO M%
730 PRINT USING C4$;I;
740 C1$="  ####  "
750 C2$="\       \":C3$="  ####.## "
760 PRINT USING C2$;A$(I,1),A$(I,2);
770 FOR J=1 TO 2
780 PRINT USING C1$;A(I,J);:NEXT J
790 FOR J=3 TO 5
800 PRINT USING C3$;A(I,J);:NEXT J
810 K=K+1: IF K>=20 THEN MSG$ ="Enter to Page":LGTH=1:ANSWER$="":GOSUB 10000
820 PRINT: NEXT I
830 COLOR 14,1,1:  MSG$= "Please input a -2 to add more,-1 to continue, or number to change ":LGTH=2:GOSUB 10000:ANSWER=VAL(ANSWER$):L=ANSWER:IF L=-1 THEN 905
840 IF L<>-2 THEN 860
850 L=M%+1: M%=L:N%=N%+1:XCHECK=1:GOTO 860
860 IF L>M% THEN GOTO 830: ELSE GOSUB 20000:IF ABORT GOTO 830
865 INPUT "NEW LEG LETTER OR END TO ABORT  ";A$(L,1)
867 IF A$(L,1)="END" THEN GOSUB 22000:GOTO 830
870 INPUT "New Description  ";A$(L,2): INPUT  "New Beginning Event Number  ";              A(L,1)
880 INPUT "New Ending Event Number"; A(L,2):INPUT "New Optimistic Finish  ";A(L,3)
890 INPUT "New Likely Finish  ";A(L,4):INPUT "New Pess. Finish  ";A(L,5)
900 GOTO 620
905 MSG$ ="Want hard copy of your data  ":LGTH=1:GOSUB 10000:P$=ANSWER$:            IF P$<>"Y" AND P$<>"y" THEN 1040
910 LOCATE 25,3:INPUT"TITLE ";T$:LPRINT "INPUT:  ";T$
920 LPRINT"DATE: ";DATE$
930 LPRINT "NO "; Z3$
940 LPRINT "   "; Z4$
950 FOR I=1 TO M%
960 LPRINT USING C4$;I;
970 LPRINT USING C2$;A$(I,1),A$(I,2);
980 FOR J=1 TO 2
990 LPRINT USING C1$;A(I,J);:NEXT J
1000 FOR J=3 TO 5
1010 LPRINT USING C3$;A(I,J);:NEXT J
1020 LPRINT " "
1030 NEXT I
1040 MSG$="HIT ANY KEY TO COMPUTE RESULTS":LGTH=1:GOSUB 10000
1045 LOCATE 25,2: PRINT "WAIT.....";
1050 FOR I=1 TO M%
1060 A(I,6)=(A(I,3)+4*A(I,4)+A(I,5))/6
1070 IF A(I,1)=1 THEN A(I,7)=0:A(I,8)=A(I,6):GOTO 1110
1080 MAX = 0.
1090 FOR J= 1 TO M%
1092 IF A(J,2)<> A(I,1) THEN 1098
1094 IF A(J,8)> MAX THEN MAX = A (J,8)
1096 A(I,7)=MAX
1098 NEXT J
1100 A(I,8)=A(I,7)+A(I,6)
1110 NEXT I
1120 ' Backward pass?
1130 XM = 0.
1140 FOR I= M% TO 1 STEP -1
1150 IF A(I,2)<>EE THEN 1170
1160 IF XM<A(I,8) THEN XM = A(I,8)
1170 NEXT I
1180 FOR I=M% TO 1 STEP -1
1190 IF A(I,2)= EE THEN A(I,10)= XM: GOTO 1260
1200 MIM =999999.
1210 FOR J= M% TO 1 STEP -1
1220 IF A(I,2)<>A(J,1) THEN 1250
1230 IF A(J,9)<MIM THEN MIM =A(J,9)
1240 A(I,10)=MIM
1250 NEXT J
1260 A(I,9)=A(I,10)-A(I,6)
1270 NEXT I
1280 ' Slack Variable Calculations
1290 FOR I=1 TO M%
1300 A(I,11)=A(I,10)-A(I,8)
1310 NEXT I
1320 CLS:K=0        'PRINT OUTPUT
1325 COLOR 14,1,1:CLS:PRINT TAB(35);"RESULTS":COLOR 15,1,1:PRINT TAB(27)"CRITICAL PATH IN WHITE":COLOR 14,1,1
1330 PRINT "Code   Description Expected  Early   Early   Last   Last   Slack"
1340 PRINT "                    Time     Start   Fin.    Start  Fin.    Time"
1350 C5$=" ###.## "
1360 FOR I=1 TO M%
1365 IF A(I,11)=0 THEN COLOR 15 ELSE COLOR 14
1370 PRINT USING C2$;A$(I,1),A$(I,2);
1380 FOR J=6 TO 11
1390 PRINT USING C5$;A(I,J);:NEXT J
1400 PRINT:K=K+1:IF K=20 THEN MSG$="Enter to Page  ":LGTH=1:GOSUB 10000:ANSWER$      =DU$:K=0
1410 NEXT I
1420 MSG$="Hard Copy of Results  (Y/N)  ":LGTH=1:GOSUB 10000:P$=ANSWER$:               IF P$<>"y" AND P$<>"Y" THEN 1490
1425 LPRINT:LPRINT "OUTPUT:  ";T$
1430 LPRINT " ":LPRINT Z1$:LPRINT Z2$
1440 FOR I= 1 TO M%
1450 LPRINT A$(I,1);"   ";:LPRINT USING C2$;A$(I,2);
1460 FOR J=6 TO 11
1470 LPRINT USING C5$;A(I,J);:NEXT J
1480 LPRINT "   ":NEXT I
1490 CLS: COLOR 14,1,1:LOCATE 5,30: PRINT "OUTPUT MENU"
1500 COLOR 14,1,1:LOCATE 7,20:PRINT "CP - CRITICAL PATH AND TIME"
1510 LOCATE 8,20: PRINT "S - SAVE"
1520 LOCATE 9,20: PRINT "E - END "
1530 LOCATE 10,20: PRINT "C - CHANGE"
1535 LOCATE 11,20:PRINT"N - NEW CASE"
1540 LOCATE 20,35:  INPUT "Choice, please...  ";OP$:IF OP$="C"             OR OP$="c" THEN 530
1550 IF OP$<>"CP" AND OP$<>"cp" THEN 1710
1560 'Identification of critical path and costs
1570 CO=0:PATH$=" ":SI=0
1580 FOR I=1 TO M%: IF A(I,11)>0.000001 THEN 1600
1590 CO=CO+A(I,6):PATH$=PATH$+" "+A$(I,1):SI=SI+((A(I,3)-A(I,5))/6)^2
1600 NEXT I:C6$="###,###,###.##":SI=SQR(SI)
1610 CLS:LOCATE 5,30:COLOR 14,1,1:PRINT "CRITICAL PATH":PRINT PATH$:PRINT
1620 PRINT "Time of Critical Path  ":PRINT USING C6$;CO:INPUT "Scheduled Project Time (use same time units as data)   ";ST:Z=(ST-CO)/SI:XX=0
1630 BB$="Probability of being completed on time ": IF Z<0 THEN 1670
1640 A=0.4361836:B=-0.1201676:C=0.937298: D=(2.7182818#^(-Z^2/2))*(2*3.1415926#)^            (-0.5):E=(1+0.3326*Z)^(-1):P=1.#-D*(A*E+B*E^2+C*E^3):IF XX>0 THEN 1660
1650 COLOR 14,1,1:PRINT USING "Z= ##.###    ";Z;:PRINT BB$;:PRINT USING "##.#%";P*100:              GOTO 1680
1660 PRINT USING "Z= ##.### ";-Z;:PRINT BB$;:PRINT USING "##.#%";(1-P)*100:           GOTO 1680
1670 XX=99: Z=-Z:GOTO 1640
1680 MSG$="Hard Copy (Y/N) ":LGTH=1:GOSUB 10000:P$=ANSWER$:                                   IF P$<>"y" AND P$<>"Y" THEN 1490
1690 LPRINT " ":LPRINT "CRITICAL PATH":LPRINT PATH$:LPRINT " ":LPRINT "Scheduled project time is  ";ST
1700 LPRINT "Time of critical path ":LPRINT USING C6$;CO: IF XX=0 THEN LPRINT "Z= ";         Z;"   ";BB$;P:GOTO 1490
1705 GOTO 1490
1710 IF OP$="E" AND OP$="e" THEN END
1715 IF OP$="N" OR OP$="n" THEN 130
1720 IF OP$<>"S" AND OP$<>"s" THEN 1770
1730 LINE INPUT "Name of disk:file ";X$:OPEN "O",1,X$
1740 PRINT#1,M%,EE
1750 FOR I=1 TO M%:PRINT#1,CHR$(34);A$(I,1);CHR$(34);",";CHR$(34);A$(I,2);              CHR$(34);A(I,1);A(I,2);A(I,3);A(I,4);A(I,5):NEXT I
1760 CLOSE #1: GOTO 1490
1770 SCREEN 0,0,0:WIDTH 80:COLOR 14,1,1:CLS:PRINT "ENDING...";:                FOR I=1 TO 1000:NEXT: KEY ON:END
10000 REM This subroutine saves the cursor position as ONCE (Col. or Y)
10010 REM and WAS (Row or X), locates the cursor on the 25th status line
10020 REM gets an input value (string only), and returns the cursor to
10030 REM where it ONCE WAS.
10040 REM             Input Variables = MSG$;Output = ANSWER$
10050 REM                               LGTH of desired ANSWER
10060 ' Store cursor position
10070   ONCE = CSRLIN
10080   WAS  = POS(0)
10085 ANSWER$=""        'empty the answer string
10090 ' Make sure softkeys are off, locate cursor on 25th line
10100   KEY OFF
10110   LOCATE 25,3
10120 ' Print the message the user requests and get an input
10130   PRINT MSG$;:ANSWER$=INPUT$(LGTH)
10150 ' Clear off the line for future use
10160   LOCATE 25,1:PRINT SPC(79);
10170 ' Restore the cursor to where it was
10180   LOCATE ONCE, WAS
10190   RETURN
15000 REM This subroutine does some error-checking, for instance, for the
15010 REM open statement in line 390
15020 REM It requires a ON ERROR GOTO 15000 statement at front of program
15025 MISTEAK=0:WHEREAT=0
15030 MISTEAK = ERR: WHEREAT=ERL
15040 IF MISTEAK = 55 THEN CLOSE:RESUME
15050 IF MISTEAK = 53 THEN PRINT"CAN'T FIND THAT FILE - CATALOG: ":PRINT      "A:":FILES "A:*.*":PRINT "B:":FILES "B:*.*":PRINT:PRINT"WAIT...":       FOR I= 1 TO 7000:NEXT I:RESUME 130
15060 IF MISTEAK = 61 THEN PRINT"DISK IS FULL - PLEASE GET ANOTHER:FOR I=1 TO         3000:NEXT I:RESUME 1730
15070 IF MISTEAK = 64 THEN PRINT"THAT'S NOT A GOOD FILE NAME-USE B:XXXXXXX.YYY":            FOR I=1 TO 3000:NEXT I:RESUME 130
15075 IF MISTEAK = 68 THEN PRINT "THAT DISK DOESN'T EXIST...USE A: OR B:":              FOR I=1 TO 3000:NEXT I: RESUME 130
15080 IF MISTEAK = 70 THEN PRINT "THE DISK IS WRITE-PROTECTED - CAN'T USE IT":          FOR I=1 TO 3000:NEXT I:RESUME 130
15090 IF MISTEAK = 71 THEN PRINT "CLOSE THE DISK DOOR":FOR I=1 TO 3000:NEXT I:          RESUME 130
15100 IF MISTEAK =72 THEN PRINT "I THINK THE DISK IS BAD":TRIES=TRIES+1:                IF TRIES<3 THEN RESUME ERL: ELSE PRINT "ENDING...CHECK DISK":                   FOR I=1 TO 3000:NEXT I:GOTO 1770
15105 IF MISTEAK =67 THEN PRINT "YOU HAVE TOO MANY FILES OPEN AT ONE TIME":             FOR I=1 TO 3000:NEXT I: RESUME 130
15110 ON ERROR GOTO 0: RESUME
18050 PRINT      "A:":FILES "A:*.*":PRINT "B:":FILES "B:*.*":PRINT:PRINT"WAIT...":       FOR I= 1 TO 7000:NEXT I:GOTO 175
20000 REM This subroutine switches the active and visual pages in SCREEN 0
20010 REM mode to page 1, thus allowing the programmer to put "help"
20020 REM material, ancillary input, or other messages on a "clean slate."
20022 ONCE = CSRLIN: WAS =POS(0)
20025 ABORT = 0
20030 SCREEN 0,1,1,1    'color burst, apage=1,vpage=1
20032 CLS
20035 KEY (1) ON
20037 ON KEY(1) GOSUB 22000
20040 LOCATE 25,1::  PRINT "Hit <F1> key BEFORE entering to abort - I'll WAIT before going on";
20042 LOCATE 5,35:PRINT "CHANGE ROUTINE"
20050 FOR I=1 TO 5000:NEXT I
20070 RETURN
22000 CLS:SCREEN 0,1,0,0
22010 ABORT=1
22015 IF ABORT AND XCHECK THEN M%=M%-1:N%=N%-1:XCHECK=0
22020 LOCATE ONCE,WAS
22030 RETURN
30000 GOTO 20070
30010 RETURN
```
{% endraw %}

## PRGTIM.BAS

{% raw %}
```bas
10 '**************************************************************************
20 '*                            PRGTIM.BAS                                  *
30 '*           BASIC source file for PRGTIM.EXE  (Revised 05/30/84)         *
40 '**************************************************************************
50 '*                                                                        *
60 '*    This program calculates amount of time spent by an individual using *
70 '* an application program, and then writes that information, along with   *
80 '* the date, & user's name, to a file, `PRGTIM.DTA'.  The file also shows *
90 '* how much of the use-time was for business purposes.                    *
100 '*                                                                        *
110 '*   This program works in conjunction with `TMSTRT.BAS,' as part of a    *
120 '* BATCH file, to create a record of computer use by various users.       *
130 '*                                                                        *
140 '*   The program `RPTUSE.BAS' will print out a REPORT using the data in   *
150 '* the file `PRGTIM.DTA' for documentation of PC use.                     *
160 '*                                                                        *
170 '*   This REVISION defaults to `BUSINESS USE' when data is entered, but   *
180 '* it will write the files EXACTLY as before, and it can be used with     *
190 '* PRGTIM.DTA files written with the previous version.                    *
200 '*                                                                        *
210 '*   PLEASE see `USE-TIME.DOC' for instructions on using this program     *
220 '*                                                                        *
230 '*       Program written by Steve Kent, Marin/Sonoma-PC User's Group      *
240 '*       CIS 72406,504                       v 1.2  /  05/30/84           *
250 '**************************************************************************
260 '
270 KEY OFF : CLS : DEFINT C,R
280 DEF SEG=&H40 : POKE &H17 , PEEK (&H17) OR 64 'Set for Capital letters
290 HRSTOP=VAL(MID$(TIME$,1,2)) : MINSTOP=VAL(MID$(TIME$,4,2))
300 STOPTIME = HRSTOP*60 + MINSTOP
310 OPEN "TMSTRT.DTA" FOR INPUT AS #1
320 INPUT #1, DAT$, STARTTIME$, STARTTIME
330 IF STOPTIME < STARTTIME THEN STOPTIME = STOPTIME + (24*60)
340 LOCATE 2,36 : COLOR 0,7: PRINT " "+DAT$+" ": COLOR 7,0
350 LOCATE 25,1: V$=" Please note: COMMAS are NOT permitted in data entries " :     PRINT SPACE$((80-LEN(V$))*.5); : COLOR 0,7: PRINT V$;: COLOR 7,0
360 GOSUB 820
370 LOCATE 18,10 : PRINT "Your NAME, INITIALS, or other ID (Max=11 char.): "
380 LOCATE 18,59: PRINT STRING$(11,"_"): LOCATE 18,58: INPUT " ",NM$
390 IF NM$="" THEN LOCATE 18,3: BEEP : PRINT SPACE$(74) : GOTO 370
400 IF LEN(NM$) > 11 THEN 410 ELSE 420
410 LOCATE 22,24: BEEP: PRINT "Too many characters.  Limit is 11" : GOSUB 800:      GOSUB 820 : GOTO 370
420 LOCATE 5,1 : V$=" NAME: " + NM$ +" ": PRINT SPACE$((80-LEN(V$))*.5);
430 COLOR 0,7 : PRINT V$ : COLOR 7,0 :LOCATE 18,3 :PRINT SPACE$(74)
440 LOCATE 18,11: PRINT "NAME of PROGRAM you were using (Max=12 char): "
450 LOCATE 18,57: PRINT STRING$(12,"_"): LOCATE 18,56: INPUT " ",PN$
460 IF PN$ ="" THEN LOCATE 18,3: BEEP : PRINT SPACE$(74) : GOTO 440
470 IF LEN(PN$) > 12 THEN 480 ELSE 490
480 BEEP : LOCATE 22,24: PRINT "Too many characters.  Limit is 12" : GOSUB 800:     GOSUB 820 : GOTO 440
490 LOCATE 8,1 : V$=" PROGRAM: " + PN$ +" ": PRINT SPACE$((80-LEN(V$))*.5);
500 COLOR 0,7 : PRINT V$ : COLOR 7,0 :LOCATE 20,3 :PRINT SPACE$(74)
510 LOCATE 18,7: PRINT "COMMENTS (Max=24 char.  Hit <enter> to SKIP): "
520 LOCATE 18,53: PRINT STRING$(24,"_"): LOCATE 18,52: INPUT " ",CM$
530 IF LEN(CM$) > 24 THEN 540 ELSE 550
540 BEEP: LOCATE 22,24: PRINT "Too many characters.  Limit is 24" : GOSUB 800:      GOSUB 820 : GOTO 510
550 LOCATE 11,1 : V$=" COMMENTS: " + CM$ +" ": PRINT SPACE$((80-LEN(V$))*.5);
560 COLOR 0,7 : PRINT V$ : COLOR 7,0 :LOCATE 20,3 :PRINT SPACE$(74)
570 ELAPSTIME = STOPTIME - STARTTIME : ELAPSHRS = ELAPSTIME \ 60 :                  XTRAMIN = ELAPSTIME MOD 60
580 ELAPSTIM$=STR$(ELAPSHRS) + " Hrs."+STR$(XTRAMIN) +" Min."
590 ELAPSTIME$=STR$(ELAPSHRS) + ":" + STR$(XTRAMIN)
600 LOCATE 15,1 :  V$="Elapsed time for " :  Y$=": "
610 PRINT SPACE$((80-LEN(V$+PN$+Y$+ELAPSTIM$))*.5);: COLOR 0,7:                     PRINT V$+PN$+Y$+ELAPSTIM$ : COLOR 7,0
620 LOCATE 18,3 : PRINT SPACE$(74)
630 LOCATE 25,5 : PRINT SPACE$(70);
640 LOCATE 17,14:PRINT "How much of this time was for NON-BUSINESS purposes?"
660 LOCATE 18,32 : PRINT "Hrs. <enter>" : LOCATE 18,50 : PRINT "Min. <enter>"
670 LOCATE 21,1 : V$="Hitting <enter> twice" : PRINT SPACE$((80-LEN(V$))*.5)+V$
680 LOCATE 22,1 : V$="credits ALL of the use-time" :                                PRINT SPACE$((80-LEN(V$))*.5)+V$
690 LOCATE 23,1 : V$="as `BUSINESS USE'" : PRINT SPACE$((80-LEN(V$))*.5)+V$
700 LOCATE 18,28 :INPUT" ",NONBH : LOCATE 18,46 : INPUT " ",NONBMIN
710 IF (NONBH*60+NONBMIN)>ELAPSTIME OR NONBMIN > 60 THEN 720 ELSE 740
720 LOCATE 19,27: BEEP : PRINT "Please redo last input...."
730 SOUND 32767,8: SOUND 32767,1: FOR R=17 TO 19: LOCATE R,1: PRINT SPACE$(79):     NEXT: GOTO 660
740 NONBSNS=NONBH*60+NONBMIN : BSNS=ELAPSTIME-NONBSNS
750 '
760 OPEN "PRGTIM.DTA" FOR APPEND AS #2
770 WRITE #2, DAT$, STARTTIME$, NM$, PN$, CM$, BSNS , NONBSNS
780 CLS : END: 'SYSTEM
790 '*********** SUBROUTINE: PAUSE AND ERASE LINES *************
800 SOUND 32767,16: SOUND 32767,1: FOR R=18 TO 22: LOCATE R,3:                      PRINT SPACE$(74):  NEXT: RETURN
810 '*********** SUBROUTINE: DRAWING BOX AROUND QUERIES *************
820 LOCATE 16,2:PRINT CHR$(218):FOR C=3 TO 77 : LOCATE 16,C:PRINT CHR$(196):        NEXT : LOCATE 16,78:PRINT CHR$(191)
830 FOR R=17 TO 18 : LOCATE R,2:PRINT CHR$(179): LOCATE R,78 : PRINT CHR$(179):     NEXT
840 LOCATE 19,2:PRINT CHR$(192):FOR C=3 TO 77 : LOCATE 19,C:PRINT CHR$(196):        NEXT : LOCATE 19,78:PRINT CHR$(217)
850 RETURN
```
{% endraw %}

## PRGTIM.DOC

{% raw %}
```

	   PRGTIM.BAS / PRGTIM.HEX / TMSTRT.BAS / TMSTRT.HEX / RPTUSE.BAS

    The first four programs are UTILITIES, to be included in a BATCH file.
They calculate the amount of time spent by someone using the computer, and they
permit apportionment of the time between BUSINESS and NON-BUSINESS use.

    "RPTUSE.BAS" provides a PRINT-OUT of data saved by PRGTIM in "PRGTIM.DTA."

    "PRGTIM.HEX" and "TMSTRT.HEX" can be converted into "PRGTIM.EXE" and
"TMSTRT.EXE", respectively, using the utility, HC.COM (found in one of the PC
SIG'S XA files).  The .EXE format permits faster access by the BATCH file, and
does NOT require one to load BASIC.  I therefore recommend this method, and I
have only included the BASIC programs so one can study and modify the source
listings.

 The programs are used as follows:

    1. The program, `TMSTRT' is first invoked by the BATCH file. This records
the starting time in a file, "TMSTRT.DTA"

    2. You then run whatever application programs you wish.   When  you exit
from the application program, the BATCH file then invokes `PRGTIM.'

    3. `PRGTIM' asks the user for his name (or initials), for  the name of the
application program just used, and permits up to  twenty-four characters of
comments.

    4. `PRGTIM' then calculates the elapsed time, and asks the user to indicate
how much of that use time was for business purposes.

    5. The program then writes, to the file "PRGTIM.DTA", the date, the user's
name, the name of the application program, the starting time, and the number of
hours & minutes of business and of non-business use.  This file is constantly
appended, providing  a continuous record of use.

    6. The data in the file "PRGTIM.DTA" can easily be printed out as a report,
using a simple BASIC program. (Please see the program, "RPTUSE.BAS" which can
do this.)

    In writing the AUTOEXEC.BAT file, it is important for `PRGTIM' to be able
to find "TMSTRT.DTA". In a two drive system, making B: the default, and putting
PRGTIM and TMSTRT in B: accomplishes this end.

    The AUTOEXEC.BAT would look  something like this:

ECHO off
PAUSE	 Be sure that disk with PRGTIM and TMSTRT is in DRIVE B:
B:
TMSTRT
....	    '(application program goes here, such as ` WS ')
PAUSE	 Be sure that disk with PRGTIM and TMSTRT.DTA is in DRIVE B:
PRGTIM
A:

    If one were to use the BASIC form of the programs, then one would need to
have BASIC.COM available on the disk, and the BATCH file  would need to contain
the command, `BASIC' preceding `TMSTRT' and also preceding `PRGTIM'.

    To print out a report, just load BASIC, and  RUN "RPTUSE" .

					  Steve Kent
					CIS # 72406,504


```
{% endraw %}

## RPTUSE.BAS

{% raw %}
```bas
100 '**************************************************************************
110 '*                           RPTUSE.BAS                                   *
120 '*                                                                        *
130 '*      This program READS data from the file, `PRGTIM.DTA', and then     *
140 '*   prints out a report showing a record of PC use, listing the DATE,    *
150 '*   START TIME, USER'S ID, and amount of BUSINESS & NON-BUSINESS USE.    *
160 '*                                                                        *
170 '*      The program will print the report ON THE SCREEN and it will       *
180 '*   also give a HARDCOPY PRINTOUT, if your printer is ONLINE.            *
190 '*                                                                        *
200 '*          Program written by Steve Kent, CIS # 72406,504                *
210 '*                      v 1.1      05/03/84                               *
220 '**************************************************************************
230 KEY OFF : CLS : OPEN "PRGTIM.DTA" FOR INPUT AS #1
240  LOCATE 10,1: V$="Program is set to print to SCREEN and to PRINTER" :            PRINT SPACE$((80-LEN(V$))*.5)+V$
250  LOCATE 13,1 : V$="In order to get the HARDCOPY PRINTOUT," :                     PRINT SPACE$((80-LEN(V$))*.5)+V$
260  LOCATE 14,1 : V$="TURN ON PRINTER NOW, and put it ONLINE." :                    PRINT SPACE$((80-LEN(V$))*.5)+V$
270 LOCATE 20,20 : PRINT " Hit any key to continue, when ready...." :I$=INKEY$ :    IF I$="" THEN 270 ELSE CLS
280 PRINT: PRINT: V$="REPORT OF P.C. USE":PRINT SPACE$((80-LEN(V$))*.5)+V$
290 LPRINT:LPRINT: V$="REPORT OF P.C. USE":LPRINT SPACE$((80-LEN(V$))*.5)+V$
300 PRINT STRING$(79,"-") : PRINT TAB(10);"STRT";: PRINT TAB(31);"NAME OF";:        PRINT TAB(69);"BUSNS";: PRINT TAB(75);"PRSNL"
310 LPRINT STRING$(79,"-") : LPRINT TAB(10);"STRT";: LPRINT TAB(31);"NAME OF";:     LPRINT TAB(69);"BUSNS";: LPRINT TAB(75);"PRSNL"
320 PRINT TAB(3); "DATE";: PRINT TAB(10); "TIME";: PRINT TAB(18); "USER ID";:       PRINT TAB(31); "PROGRAM";
330 PRINT TAB(51);"COMMENTS";: PRINT TAB(69);"HR:MN";: PRINT TAB(75);"HR:MN"
340 LPRINT TAB(3); "DATE";: LPRINT TAB(10); "TIME";: LPRINT TAB(18); "USER ID";:    LPRINT TAB(31); "PROGRAM";
350 LPRINT TAB(51);"COMMENTS";: LPRINT TAB(69);"HR:MN";: LPRINT TAB(75);"HR:MN"
360 PRINT STRING$(79,"=") : LINENUM=7
370 LPRINT STRING$(79,"=") : LINENUM=7
380 '*************************************************************************
390 INPUT #1, DAT$, STARTTIME$, NM$, PN$, CM$, BSNS, NONBSNS
400 YR$=RIGHT$(DAT$,2) : DT$=MID$(DAT$,1,6)+YR$
410 START$=MID$(STARTTIME$,8,2)+MID$(STARTTIME$,11,2)
420 BH=BSNS\60:BMIN=BSNS MOD 60 : NBH=NONBSNS\60: NBMIN=NONBSNS MOD 60
430 SBM$=STR$(BMIN):BMIN$=MID$(SBM$,2,(LEN(SBM$)-1)) : IF LEN(BMIN$)=1 THEN         BMIN$="0"+BMIN$
440 SNBM$=STR$(NBMIN) : NBMIN$=MID$(SNBM$,2,(LEN(SNBM$)-1)) :                       IF LEN(NBMIN$)=1 THEN NBMIN$="0"+NBMIN$
450 TBSNS=TBSNS+BSNS : TBH=TBSNS\60 : TBM=TBSNS MOD 60
460 SBM$=STR$(TBM): TBM$=MID$(SBM$,2,(LEN(SBM$)-1)) : IF LEN(TBM$)=1 THEN           TBM$="0"+TBM$
470 TNBSNS=TNBSNS+NONBSNS : TNBH=TNBSNS\60 : TNBM=TNBSNS MOD 60
480 SNBM$=STR$(TNBM): TNBM$=MID$(SNBM$,2,(LEN(SNBM$)-1)) :IF LEN(TNBM$)=1 THEN      TNBM$="0"+TNBM$
490 PRINT DT$;: PRINT TAB(10);START$;: PRINT TAB(16);NM$;: PRINT TAB(29);PN$;:      PRINT TAB(43);CM$;:
500 PRINT TAB(69);:PRINT USING "##";BH;:PRINT ":"+BMIN$;: PRINT TAB(75);:           PRINT USING "##"; NBH;:PRINT ":"+NBMIN$
510 LPRINT DT$;: LPRINT TAB(10);START$;: LPRINT TAB(16);NM$;:                       LPRINT TAB(29);PN$;:  LPRINT TAB(43);CM$;:
520 LPRINT TAB(69);:LPRINT USING "##";BH;:LPRINT ":"+BMIN$;: LPRINT TAB(75);:       LPRINT USING "##"; NBH;:LPRINT ":"+NBMIN$
530 IF EOF(1) THEN CLOSE :GOTO 570
540 LINENUM=LINENUM+1 : IF LINENUM < 56 THEN 390
550 LPRINT :LPRINT :LPRINT : PGNUM =PGNUM + 1
560 LPRINT TAB(39); "-"; PGNUM; "-" : LPRINT CHR$(12): LINENUM=0: GOTO 280
570 PRINT TAB(69);STRING$(11,"=")
580 LPRINT TAB(69);STRING$(11,"=")
590 PRINT : PRINT TAB(45);"TOTAL BUSINESS USE = " ;: PRINT TAB(66);
600 PRINT USING "#####"; TBH;: PRINT TAB(71); ":" + TBM$ : PRINT
610 LPRINT :LPRINT TAB(45);"TOTAL BUSINESS USE = " ;: LPRINT TAB(66);
620 LPRINT USING "#####";TBH;: LPRINT TAB(71); ":" + TBM$ :LPRINT
630 PRINT TAB(51);"TOTAL PERSONAL USE = " ;: PRINT TAB(72);:PRINT USING "#####";    TNBH;: PRINT TAB(77); ":" + TNBM$
640 LPRINT TAB(51);"TOTAL PERSONAL USE = " ;: LPRINT TAB(72);:                      LPRINT USING"#####"; TNBH;: LPRINT TAB(77); ":" + TNBM$
650 KEY ON : END
```
{% endraw %}

## TAXDEDCT.BAS

{% raw %}
```bas
1000 '>>>THIS PROGRAM RECORDS INCOME TAX DEDUCTIONS
1100 '>>>HARRY G. FRIEDMAN
1200 '>>>945 Dudley Drive
1300 '>>>Shreveport, LA 71104
1400 '>>>v 1.0
1500 '
1600 '>>>Filename=TAXDEDCT.BAS
1700 '>>>DATA FILE IS RANDOM ACCESS.
1800 '>>>CODING SCHEME IS:
1900 '>>>       01/XX - Contributions
2000 '>>>       02/XX - Medical
2100 '>>>       03/XX - Interest
2200 '>>>       04/XX - Taxes
2300 '>>>THE XX PORTION OF THE CODE IS ASSIGNED TO THE PAYEE IN NUMERICAL
2400 '>>>SEQUENCE, ONE CODE NUMBER FOR EACH INDIVIDUAL PAYEE.
2500 '>>>DATES AND CODES ARE ENTERED WITHOUT "/" - AMOUNTS WITH ONLY THE
2600 '>>>DECIMAL POINT (.).
2700 '>>>MENU ITEM 6 PRINTS A LIST AND TOTAL IN DATA ENTRY FORMAT.
2800 '>>>MENU ITEM 7 PRINTS A LIST AND TOTALS SORTED BY CATAGORY AND PAYEE.
2900 '
3000 '>>>Permission is hereby granted for the unlimited use or reproduction
3100 '>>>of this program.
3200 '>>>Notification of changes or additions will be appreciated.
3300 'FILENAME=TAXDEDCT - DATA FILENAME=TAXDED.DAT
3400 KEY OFF:CLS
3500 DEFINT I
3600 OPTION BASE 1
3700 DAT=250
3800 DIM REC$(DAT)
3900 OPEN "B:TAXDED.DAT" AS #1 LEN=64
4000 FIELD #1,1 AS US$,6 AS DTE$,4 AS CDE$,45 AS PAY$,8 AS AMT$
4100 FIELD #1,64 AS RECORD$
4200 '
4300 '>>>***<<<
4400 '
4500 PRINT TAB(40) "MENU"
4600 PRINT
4700 PRINT TAB(30)1; "INITIALIZE the FILE"
4800 PRINT TAB(30)2; "CREATE or ADD a RECORD"
4900 PRINT TAB(30)3; "DISPLAY a RECORD"
5000 PRINT TAB(30)4; "EDIT a RECORD"
5100 PRINT TAB(30)5; "DELETE a RECORD"
5200 PRINT TAB(30)6; "PRINT HARDCOPY"
5300 PRINT TAB(30)7; "SORT and PRINT"
5400 PRINT TAB(30)8; "EXIT - RETURN to BASIC"
5500 PRINT:INPUT "SELECT FUNCTION ",ISELCT
5600 IF (ISELCT<1) OR (ISELCT>8) THEN PRINT "BAD SELECTION - PLEASE REENTER":        GOTO 5500
5700 ON ISELCT GOSUB 6000,7500,11000,12200,15400,17100,18900,24700
5800 GOTO 4500
5900 '
6000 '>>>INITIALIZE FILE ROUTINE<<<
6100 '
6200 INPUT "ARE YOU SURE";ANS$:IF ANS$<>"Y" THEN RETURN
6300 LSET RECORD$=CHR$(255)
6400 FOR I=1 TO 250
6500 PUT #1,I
6600 NEXT
6700 RETURN
6800 '
6900 '>>>SEQUENCE NUMBER ROUTINE<<<
7000 '
7100 INPUT "SEQUENCE NUMBER ",ISEQ
7200 IF (ISEQ<1) OR (ISEQ>250) THEN PRINT "BAD SEQUENCE NUMBER-PLEASE REENTER":      GOTO 7100 ELSE GET #1,ISEQ
7300 IF USEFLG=1 THEN 8600 ELSE RETURN
7400 '
7500 '>>>FILE ENTRY ROUTINE<<<
7600 '
7700 USEFLG=0
7800 MODE$=""
7900 INPUT "CREATE THE FILE or ADD A RECORD? - REPLY 'C' or 'A' ",MODE$
8000 PRINT
8100 IF MODE$="C" THEN ISEQ=1:GOTO 9400 ELSE MODE$="A"
8200 INPUT "Is a deleted record SEQUENCE NUMBER to be reused? - Reply Y/N ",         ANS$:PRINT
8300 IF ANS$<>"Y" THEN 8800 ELSE USEFLG=1
8400 IF ASC(US$)<>255 THEN INPUT "OVERWRITE";X$:IF X$<>"Y" THEN 4500
8500 GOTO 6900
8600 PRINT:PRINT "Inserting record at SEQUENCE NUMBER";ISEQ:PRINT
8700 GOTO 9400
8800 PRINT:PRINT "Adding record to file.":PRINT
8900 ISEQ=1
9000 FOR X=1 TO LOF(1)/128
9100 GET #1,ISEQ
9200 IF DTE$<>"ZZZZZZ" THEN ISEQ=ISEQ+1 ELSE PRINT ISEQ;"is next SEQUENCE";          " NUMBER for ADD":GOTO 9400
9300 NEXT
9400 LSET US$=CHR$(0)
9500 INPUT "DATE -   ",CALENDAR$
9600 LSET DTE$=CALENDAR$
9700 INPUT "CODE -   ",CODE$
9800 LSET CDE$=CODE$
9900 INPUT "PAYEE -  ",PAYEE$
10000 LSET PAY$=PAYEE$
10100 INPUT "AMOUNT - ",AMOUNT$
10200 RSET AMT$=AMOUNT$
10300 PUT #1,ISEQ
10400 IF USEFLG=1 THEN USEFLG=0:GOTO 4500
10500 INPUT "MORE NEW DATA";ANS$:IF ANS$="Y" THEN ISEQ=ISEQ+1:GOTO 9400 ELSE         ISEQ=ISEQ+1:LSET DTE$="ZZZZZZ"
10600 LSET CDE$=CHR$(32):LSET PAY$=CHR$(32)
10700 LSET AMT$=CHR$(32)
10800 PUT #1,ISEQ:RETURN
10900 '
11000 '>>>DISPLAY ROUTINE<<<
11100 '
11200 GOSUB 6900
11300 PRINT "SEQUENCE NUMBER ",ISEQ
11400 PRINT LEFT$(DTE$,2)+"/"+MID$(DTE$,3,2)+"/"+RIGHT$(DTE$,2)
11500 PRINT LEFT$(CDE$,2)+"/"RIGHT$(CDE$,2)
11600 PRINT PAY$
11700 PRINT AMT$
11800 INPUT "MORE RECORDS FOR DISPLAY - Y/N or E";ANS$
11900 IF (ANS$<>"Y") AND (ANS$<>"N") AND (ANS$<>"E") THEN 11800
12000 IF (ANS$="Y") THEN 11000 ELSE IF (ANS$="N") THEN RETURN ELSE PRINT:             PRINT "NEXT EDIT"
12100 '
12200 '>>>FILE EDIT ROUTINE<<<
12300 '
12400 PRINT:GOSUB 6800
12500 PRINT TAB(28)"FIELD TO CHANGE MENU"
12600 PRINT
12700 PRINT TAB(30)1;"DATE"
12800 PRINT TAB(30)2;"CODE"
12900 PRINT TAB(30)3;"PAYEE"
13000 PRINT TAB(30)4;"AMOUNT"
13100 PRINT:INPUT "WHICH FIELD TO CHANGE";FLD
13200 IF (FLD<1) OR (FLD>4) THEN PRINT "WRONG FIELD NUMBER":GOTO 13100
13300 ON FLD GOSUB 13500,13900,14300,14700
13400 GOTO 12500
13500 PRINT "CURRENT RECORD IS ";DTE$
13600 INPUT "NEW DATE          ",CALENDAR$
13700 LSET DTE$=CALENDAR$
13800 GOTO 15000
13900 PRINT "CURRENT RECORD IS ";CDE$
14000 INPUT "NEW CODE          ",CODE$
14100 LSET CDE$=CODE$
14200 GOTO 15000
14300 PRINT "CURRENT RECORD IS ";PAY$
14400 INPUT "NEW PAYEE         ",PAYEE$
14500 LSET PAY$=PAYEE$
14600 GOTO 15000
14700 PRINT "CURRENT RECORD IS ";AMT$
14800 INPUT "NEW AMOUNT       ",AMOUNT$
14900 RSET AMT$=AMOUNT$
15000 INPUT "ANY MORE CHANGES";ANS$
15100 IF ANS$="Y" THEN 13100 ELSE PUT #1,ISEQ:GOSUB 11400
15200 GOTO 4500
15300 '
15400 '>>>DELETE RECORD ROUTINE<<<
15500 '
15600 GOSUB 6900
15700 PRINT "SEQUENCE NUMBER";ISEQ
15800 PRINT LEFT$(DTE$,2)+"/"+MID$(DTE$,3,2)+"/"+RIGHT$(DTE$,2)
15900 PRINT LEFT$(CDE$,2)+"/"+RIGHT$(CDE$,2)
16000 PRINT PAY$
16100 PRINT AMT$
16200 INPUT "IS THIS THE RECORD TO DELETE";ANS$:IF ANS$<>"Y" THEN 4500
16300 LSET DTE$=CHR$(32)
16400 LSET CDE$=CHR$(32)
16500 LSET PAY$=CHR$(32)
16600 LSET AMT$=CHR$(32)
16700 PUT #1,ISEQ
16800 PRINT "THIS RECORD DELETED   ";ISEQ
16900 INPUT "ANY MORE DELETIONS";ANS$:IF ANS$="Y" THEN 15400 ELSE RETURN
17000 '
17100 '>>>HARDCOPY ROUTINE<<<
17200 '
17300 TOT=0
17400 LINCNT=0
17500 PRINT
17600 PRINT TAB(25):COLOR 1
17700 PRINT TAB(25)"PRINTING OUT DATA IN ENTRY SEQUENCE":COLOR 7:PRINT
17800 LPRINT TAB(62)"DATE   ";DATE$:LPRINT
17900 LPRINT "SEQ";TAB(8)"DATE";TAB(16)"CODE";TAB(41)"PAYEE";TAB(73)"AMOUNT"
18000 LPRINT "===";TAB(8)"====";TAB(16)"====";TAB(41)"=====";TAB(73)"======"
18100 LINCNT=LINCNT+4
18200 ISEQ=1
18300 GET #1,ISEQ
18400 LPRINT ISEQ;TAB(6)DTE$;TAB(16)CDE$;TAB(23)PAY$;TAB(71)AMT$
18500 TOT=TOT+VAL(AMT$)
18600 LINCNT=LINCNT+1:IF LINCNT=>58 THEN LPRINT CHR$(12):LINCNT=0:ELSE                GOTO 18700
18700 IF DTE$<>"ZZZZZZ" THEN ISEQ=ISEQ+1:GOTO 18300 ELSE LPRINT TAB(71)TOT:           LPRINT CHR$(12):GOTO 4500
18800 '
18900 '>>>SORT ROUTINE<<<
19000 '
19100 ISEQ=1
19200 FOR S=1 TO DAT
19300 GET #1,ISEQ
19400 REC$(S)=INPUT$(64,#1)
19500 IF ASC(US$)=0 OR ASC(US$)=32 THEN ISEQ=ISEQ+1:GOTO 19600 ELSE GOTO 19700
19600 NEXT
19700 COLOR 16,7:PRINT "SORT IN PROGRESS ";TIME$;:COLOR 7,0
19800 D=S:FLAG=0
19900 D=INT((D+1)/2)
20000 FOR Q=1 TO S-D
20100 IF MID$(REC$(Q),8,4)+MID$(REC$(Q),2,6)<=MID$(REC$(Q+D),8,4)+MID$(REC$           (Q+D),2,6) THEN 20200 ELSE SWAP REC$(Q),REC$(Q+D):FLAG=1
20200 NEXT
20300 IF FLAG=1 THEN FLAG=0:GOTO 20000
20400 IF D>1 THEN 19900
20500 PRINT:COLOR 0,7:PRINT "SORT COMPLETED   ";TIME$;:COLOR 7,0:PRINT
20600 COLOR 7,0
20700 '
20800 '>>>PRINT ROUTINE<<<
20900 '
21000 PRINT TAB(30):COLOR 1
21100 PRINT TAB(30)"PRINTING SORTED DATA":COLOR 7:PRINT
21200 LINCNT=0
21300 LPRINT TAB(20)"INCOME TAX DEDUCTIONS SORTED BY CATAGORY"
21400 LPRINT TAB(62)"DATE  ";DATE$:LPRINT
21500 LINCNT=LINCNT+2
21600 LPRINT "                       DEDUCTIONS              CODES"
21700 LPRINT "                       ==========              ====="
21800 LPRINT "                     Contributions             01/XX"
21900 LPRINT "                     Medical                   02/XX"
22000 LPRINT "                     Interest                  03/XX"
22100 LPRINT "                     Taxes                     04/XX"
22200 LPRINT "                    ================================"
22300 LPRINT TAB(3)"DATE";TAB(12)"CODE";TAB(41)"PAYEE";TAB(73)"AMOUNT"
22400 LPRINT TAB(3)"====";TAB(12)"====";TAB(41)"=====";TAB(73)"======"
22500 LINCNT=LINCNT+10
22600 SUM=0
22700 TOT=0
22800 G.TOT=0
22900 SUM$="0101"
23000 FOR S=1 TO Q
23100 IF (MID$(REC$(S),2,6)="ZZZZZZ") OR (VAL(MID$(REC$(S),57,8))=0) THEN             REC$(S)=STRING$(64,32):LPRINT REC$(S):GOTO 24200
23200 CODE$=MID$(REC$(S),8,4)
23300 IF SUM$<>CODE$ THEN LPRINT TAB(51)"TOTAL";TAB(60)USING "######,.##";TOT:        TOT=0:SUM$=CODE$:LINCNT=LINCNT+1
23400 LPRINT MID$(REC$(S),2,2)+"/"+MID$(REC$(S),4,2)+"/"+MID$(REC$(S),6,2);
23500 LPRINT TAB(12)MID$(REC$(S),8,2)+"/"+MID$(REC$(S),10,2);
23600 LPRINT TAB(20)MID$(REC$(S),12,45);
23700 LPRINT TAB(70)USING "######,.##";VAL(MID$(REC$(S),57,8))
23800 SUM=VAL(MID$(REC$(S),57,8))
23900 TOT=TOT+SUM
24000 G.TOT=G.TOT+SUM
24100 LINCNT=LINCNT+1:IF LINCNT=>58 THEN LPRINT CHR$(12):LINCNT=0 ELSE                GOTO 24200
24200 NEXT S
24300 LPRINT:LPRINT TAB(55)"GRAND TOTAL";TAB(70)USING "######,.##";G.TOT
24400 LPRINT CHR$(12)
24500 RETURN
24600 '
24700 '>>>EXIT ROUTINE<<<
24800 '
24900 CLOSE:KEY ON:CLS
```
{% endraw %}

## TMSTRT.BAS

{% raw %}
```bas
10 '***************************************************************************
20 '*                             TMSTRT.BAS                                  *
30 '***************************************************************************
40 '*   This program, for use in a BATCH file, writes START TIME to the file, *
50 '* "TMSTRT.DTA", for use with the program, PRGTIM.DTA, in a BATCH file.    *
60 '*                                                                         *
70 '*           Program written by Steve Kent, CIS # 72406,504                *
80 '*                          v 1.1      05/03/84                            *
90 '***************************************************************************
100 H$=MID$(TIME$,1,2) : M$=MID$(TIME$,4,2) :DAT$=DATE$
110 STARTTIME=VAL(H$)*60 + VAL(M$) : TMHR=VAL(H$)
120 STARTTIME$="START= " + H$ + ":" + M$
130 IF TMHR < 12 THEN APM$="A.M."
140 IF TMHR = 12 AND M$ ="00" THEN APM$="NOON"
150 IF TMHR = 12 AND M$<>"00" THEN APM$="P.M."
160 IF TMHR > 12 THEN APM$="P.M." : TMHR=VAL(H$)-12
170 TMHR$=MID$(STR$(TMHR),2,2)
180 LOCATE 6,32 : PRINT "DATE: ";DAT$
190 LOCATE 10,1 :V$="WRITING START TIME":PRINT SPACE$((80-LEN(V$))*.5)+V$
200 LOCATE 12,1: V$="START TIME= " :                                                PRINT SPACE$((78-LEN(V$+M$+APM$+TMHR$))*.5)+V$+TMHR$+":"+M$+" "+APM$
210 OPEN "TMSTRT.DTA" FOR OUTPUT AS #1
220 WRITE #1, DAT$, STARTTIME$, STARTTIME
230 CLS : SYSTEM
```
{% endraw %}

## USE-TIME.DOC

{% raw %}
```

       PRGTIM.EXE/(BAS)  //   TMSTRT.EXE/(BAS)   //    RPTUSE.BAS

    The first two programs are UTILITIES, to be included in a BATCH file. 
They calculate the amount of time spent by someone using the computer, and
they permit apportionment of the time between BUSINESS and NON-BUSINESS use.

    The .EXE format permits faster access by the BATCH file, then the .BAS
programs, and does NOT require one to load BASIC.  I therefore recommend this
method, and I have only included the BASIC programs so one can study and
modify the source listings.

    "RPTUSE.BAS" provides a PRINT-OUT of data saved by PRGTIM in "PRGTIM.DTA." 
It can be modified to sort the data, or data can first be sorted using
a data-base program, such as PC-FILE.

    The programs are used as follows:

         1. The program, `TMSTRT' is first invoked by the BATCH file. This 
records the starting time in a file, "TMSTRT.DTA"

         2. You then run whatever application programs you wish.   When you 
exit from the application program, the BATCH file then invokes `PRGTIM.'

         3. `PRGTIM' asks the user for his name (or initials), for the name 
of the application program just used, and permits up to twenty-four characters 
of comments (which can be skipped).
		  
         4. `PRGTIM' then calculates the elapsed time, and asks the user to
indicate how much of that use time was for non-business purposes.  Hitting
<enter> twice will mark ALL of the use for BUSINESS.

         5. The program then writes, to the file "PRGTIM.DTA", the date, the 
user's name, the name of the application program, the starting time, and the 
number of hours & minutes of business and of non-business use.  This file is
constantly appended, providing  a continuous record of use.  

         6. The data in the file "PRGTIM.DTA" can easily be printed out as a
report, using a simple BASIC program. (Please see the program, "RPTUSE.BAS"
which can do this.)

    In writing the batch (.BAT) file, it is important for `PRGTIM' to be able
to find "TMSTRT.DTA". In a two drive system, making B: the default, and
putting PRGTIM and TMSTRT in B: accomplishes this end.

    Assuming a two drive system, with floppy diskettes, the AUTOEXEC.BAT or
(PRG.BAT) would look  something like this:

PAUSE    Be sure that disk with PRGTIM and TMSTRT is in DRIVE B:
B:    
TMSTRT
....           '  (application program goes here, such as ` WS ')
PAUSE    Be sure that disk with PRGTIM and TMSTRT.DTA is in DRIVE B:
B:             '  B: is the default drive now so the data files can be found.
PRGTIM
A:

    If one were to use the BASIC form of the programs, then one would need to
have BASIC.COM available on the disk, and the BATCH file  would need to
contain the command, `BASIC' preceding `TMSTRT' and also preceding `PRGTIM'.

    To print out a report, just load BASIC, and  RUN "RPTUSE" .

					             Steve Kent
                                Marin PC-User's Group 
```
{% endraw %}

## USERLOG.DOC

{% raw %}
```
   
   
   
   NOTE:
   
   This manual has been formatted such that, if cut into
   sheets that measure 8.5" x 5.5", it will fit into your DOS
   manual or another similarly sized binder.
   
                                            - CEL
   
   (This page may be discarded)
   
   
   
   
   
   
   
                   =====================
                  ||                   ||
    ==============||   U s e r L o g   ||==============
   ||                                                 ||
    ===================================================
   
   
                            by
   
                     Chris E. Lindberg
   
                          v1.00
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   Copyright(c) 1985                All Rights Reserved
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                       COPYRIGHT 1985
   
                             BY
   
                      CHRIS E. LINDBERG
   
   This software product and manual is copyrighted.  All
   rights are reserved by Chris E. Lindberg.
   
   
                   USER SUPPORTED SOFTWARE
   I am distributing this software using the "freeware"
   concept because I believe that software should be usable
   AND affordable.  Therefore, if you are using this soft-
   ware and find it to be of value, please fill out the
   registration card on last page of this manual and return
   it with $25.00 to 
   
                      Chris E. Lindberg
                   5221 W. Washington Blvd.
                    Milwaukee, WI   53208
   
   Registration of your ownership of this software program
   and manual will entitle you to notification of any
   updates and free upgrades (excluding diskette and postage).
   
   A one-time fee of $25.00 is required to register this soft-
   ware and manual.  This registration fee is tax deductible
   for business-users of personal computers.
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -i-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                     TABLE OF CONTENTS
   
   
   INTRODUCTION TO USERLOG .............................1
   
   SYSTEM REQUIREMENTS..................................2
   
   BEFORE YOU BEGIN.....................................3
   
   INSTALLING USERLOG...................................4
   
   USING USERLOG........................................5
   
   THE USERLOG LOG ENTRY SCREEN.........................8
   
   CREATING A NEW LOG FILE (/N).........................9
   
   LOGGING IN (/I).....................................10
   
   LOGGING OUT (/O)....................................11
   
   BROWSING LOG ENTRIES (/B)...........................12
   
   LISTING LOG ENTRIES (/L)............................13
   
   USING USERLOG IN BATCH FILES........................14
   
   USERLOG REGISTRATION FORM...........................16
   
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -ii-
                                            U s e r L o g
   -------------------------------------------------------
   
   
                  INTRODUCTION TO USERLOG
   
   USERLOG is a system utility designed to maintain a 
   disk-based file of computer usage.  As such, it may
   be used in lieu of a written log to record and monitor
   the business and personal use for which your personal
   computer is being used.
   
   The main features of USERLOG are:
   
        -  the utility is simple to use
        -  it is invoked directly from the PC-DOS command
           level.
        -  it can be used in batch files or with keyboard
           enhancement programs.
        -  all entries are automatically time and date
           stamped using your system's clock/calendar.
        -  elapsed times for each entry are calculated
           automatically and stored with each log entry
        -  the browsing and listing features permit you
           to selectively display or print log entries
        -  listings of log entries show the number of
           hours the computer was used for personal and for
           business use.
   
   
   
   
   
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -1-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                   SYSTEM REQUIREMENTS
   
   USERLOG has the following minimal system requirements
   
        -  IBM Personal Computer PC/XT/AT
        -  64K RAM
        -  One floppy disk drive
        -  Monochrome or color monitor
        -  printer port configured as LPT1
        -  printer
        -  PC-DOS version 1.0 or greater
   
   While optional, the use of a battery-powered clock/
   calendar that automatically sets your system clock and
   calendar is highly recommended.
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -2-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                      BEFORE YOU BEGIN
   
   Before you put USERLOG to work for you, it is a good
   idea to create a working copy of your USERLOG program
   file.  First, you will need a blank, formatted diskette.
   Place your DOS diskette into drive A and next to the
   DOS prompt type
   
   FORMAT A:
   
   Follow the instructions on the screen to complete the
   diskette formatting process.
   
   Once the formatting process has been completed, a 
   working copy of USERLOG can be made by entering next 
   to the DOS prompt
   
   DISKCOPY A: A:    (if you have  1 disk drive)
   
     or
   
   DISKCOPY A: B:    (if you have 2 disk drives)
   
   Again, follow the directions on the screen to complete
   the copying process.
   
   Once a working copy of USERLOG has been made, store the
   original USERLOG diskette in a safe place.  Use the
   working copy of USERLOG to transfer the program file or
   maintain the log data file.
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -3-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                     INSTALLING USERLOG
   
   Floppy Drive Systems
   
   USERLOG.COM should be transferred to a blank and
   formatted diskette (See BEFORE YOU BEGIN and USING
   USERLOG IN BATCH FILES).  Because USERLOG records
   log entries in the same directory in which USERLOG.COM
   resides, the log file will be maintained on the same
   diskette.  The number of log entries that can be
   written to a diskette depends on the free space
   available.  A blank double-sided, double-density
   diskette formatted at 9 tracks per inch containing
   USERLOG.COM will have approximately 336 kilobytes of
   free storage available.  Since each log entry consumes
   63 bytes of storage, approximately 5300 log entries
   can be stored on the diskette.  This means you can
   record approximately 14 log entries per day.
   
   Hard Disk Systems
   
   USERLOG maintains the log file in the same directory
   in which USERLOG.COM resides.  As a result, USERLOG.COM
   can be installed in any directory or subdirectory on
   a hard disk.  However, unless you make extensive use
   of batch files or keyboard enhancement programs (e.g.
   PROKEY) to run applications, we recommend that
   USERLOG.COM reside in the root directory.
   
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -4-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                       USING USERLOG
   
   USERLOG is a system utility that is invoked at the
   DOS command level i.e. next to the DOS prompt.  To
   run USERLOG, the following syntax must be used
   
   d:USERLOG/[p]
   
   where "d" designates the physical drive in which 
   USERLOG resides and "p" (short for parameter) instructs
   USERLOG which function to perform.  The following
   table lists the parameters that USERLOG recognizes,
   their functions and the page number of this manual
   where each function is described in greater detail.
   
   PARAMETER           FUNCTION               PAGE
   ---------   -------------------------     ------
      /N       Create a new log file            9
      /I       Log in                          10
      /O       Log out                         11
      /B       Browse log entries              12
      /L       List log entries                13
   
   NOTE:  USERLOG will accept a parameter in either upper-
   case or lowercase letters.
   
   For example, suppose you are going to begin analyzing
   last year's sales figures with your favorite spread-
   sheet program and wish to enter the activity into your
   log file.  To "log in", next to the DOS prompt you
   would type
   
   USERLOG /I
   
   
   
   -------------------------------------------------------
   
                             -5-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
   If USERLOG resides on a drive other than the default
   drive, you would type
   
   d:USERLOG /I
   
   where "d:" specifies the physical drive in which
   USERLOG exists.
   
   For systems equipped with a hard disk drive, a path
   name must be specified if USERLOG.COM is not in the
   current directory.  For example, if USERLOG.COM resides
   in a directory named MYLOG, to log in you would enter
   next to the DOS prompt
   
   \MYLOG\USERLOG /I
   
   All parameters are invoked in an identical fashion.
   If no parameters are specified or the parameter is not
   recognized, USERLOG will inform you that an error has
   occurred and give you the option of selecting the 
   correct parameter or returning to DOS.  Thus, USERLOG
   can be invoked at the DOS command level by including
   the parameter, or by entering USERLOG next to the
   command prompt and selecting an option.
   
   With the exception of logging an entry out (/O), you
   may escape from USERLOG at any time simply by pressing
   the [ESC] key.
   
   To insure the integrity of the log file and, therefore,
   your records, no means for editing log entries have
   been provided.  Attempts to edit the log file with a
   text editor will probably cause irreparable damage to
   the contents of the file.
   
   
   -------------------------------------------------------
   
                             -6-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                         IMPORTANT
                   ---------------------
   
   If your computer is not equipped with a battery-
   powered clock/calendar that automatically sets the
   computer time and date when started, then be sure to
   set the correct system time and date when starting
   the computer.  USERLOG assumes that the system time 
   and date are correct.
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -7-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                THE USERLOG LOG ENTRY SCREEN
   
   When USERLOG is invoked correctly, your display screen
   will clear and the log entry data screen will appear.
   The purpose and contents of each field in the screen
   are described below.
   
         FIELD              DESCRIPTION
       ----------   --------------------------------------
        User         1 to 3 characters can be entered
                     in this field to identify the user
                     (e.g. your initials).
        Category     The number 1 or  2 is entered in
                     this field to identify whether the
                     task is (1) business-oriented or
                     (2) for personal use.
        Task         Up to 24 characters may be used to
                     describe the activity.
        In           The time the USER logged in
        Out          The time the USER logged out
        Date         The date the USER logged in or out.
        E. Hours     The elapsed hours between logging in
                     and out.
        Entry        The log entry number.
        Status Area  User prompts or the status of the
                     current operation is displayed in
                     this area.
   
   
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -8-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                CREATING A NEW LOG FILE (/N)
   
   When first installing USERLOG, or at the beginning of
   each new calendar year, a new log file must be created
   before any entries can be made.
   
   To create a new log file, next to the DOS prompt type
   
   USERLOG /N
   
   USERLOG will ask you to enter the serial number of
   your system unit in the status area of the USERLOG
   log entry screen.  Once you have supplied the serial
   number, USERLOG will record the current system date
   and create a data file in the current directory with
   the name "USERLOG.yy" where the extension "yy" corre-
   sponds to the last two digits of the year held by the
   system clock/calendar (e.g. USERLOG.85).
   
   If you attempt to use USERLOG before a log file has
   been created, or if the calendar year changes, USERLOG
   will indicate that USERLOG.yy cannot be found and
   should be created by using the /N parameter.
   
   USERLOG will not create a new log file if one already
   exists in the current directory that corresponds to
   the current settings of your system's clock/calendar.
   
   
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -9-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                      LOGGING IN (/I)
   
   Each time you begin a new activity on your computer,
   you should create a new log entry in your file using
   the /I parameter.  Invoking USERLOG with the /I
   parameter causes the USERLOG log entry screen to
   appear on your display.  To create the new entry,
   USERLOG requires that you fill three field with the
   following information 
   
   FIELD                    YOU ENTER
   -------    ------------------------------------------
   USER        1 to 3 characters that identifies the
               user(e.g. your initials)
   CAT         Enter "1" if the activity is business
               related or "2" if it is for personal use.
   TASK        Up to 24 characters may be entered in
               this field to describe the activity.
   
   Once you filled in the three field with the appropriate
   information, USERLOG time and date stamps the entry
   with the current settings of your system clock/calendar
   then exits to DOS.
   
   If the last log entry is still open, USERLOG will auto-
   matically close that entry and display its contents
   before creating a new log entry (See LOGGING OUT (/O)).
   
   
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -10-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                      LOGGING OUT (/O)
   
   After logging in and completing an activity on your
   computer, you must "log out" the entry using the /O
   parameter.  Invoking USERLOG with the /O parameter
   causes the USERLOG log entry screen to appear contain-
   ing the information from the last open entry.  Logging
   out is automatic feature of USERLOG.  Therefore, the
   "Out" field is automatically stamped with your system's
   current time, the hours that have elapsed since logging
   in are calculated and displayed in the field marked
   "E. Hours", the log file is updated, and control is
   returned to DOS.
   
   If the last log entry has already been logged out,
   USERLOG will inform you of such and will exit to DOS.
   
   If you are moving from one application to another
   and wish to enter each activity into your log file,
   you may "shortcut" the process of logging in and out
   by using only the /I parameter between activities.
   Invoking the /I parameter with the last entry still
   open causes USERLOG to automatically log out and
   display the contents of the last entry before creating
   a new entry (See LOGGING IN (/I)).
   
   
   
   
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -11-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                 BROWSING LOG ENTRIES (/B)
   
   A facility for browsing forwards and backwards through
   your log file one entry at a time has been provided
   for in USERLOG.  When USERLOG is invoked with the /B
   parameter, USERLOG will ask for the beginning date in
   the status area of the log entry screen.  Once the
   date has been entered in a mm/dd format, USERLOG will
   scan the log file and display on the screen the first
   log entry whose date is greater than or equal to the
   date you supplied.  If the dates of all the log entries
   fall before the date you specified, then the last log
   entry is displayed.
   
   After a log entry has been displayed, certain keys on
   the keyboard can be used to browse through the log
   file.  The following table lists the keys and their
   respective functions:
   
             KEY             FUNCTION
           --------   -------------------------
            [->]       Show next log entry
            [<-]       Show prior log entry
            [Home]     Show first log entry
            [End]      Show last log entry
            [Esc]      Exit USERLOG
   
   
   
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -12-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                  LISTING LOG ENTRIES (/L)
   
   USERLOG can provide you with a listing of all or
   selected log entries through the use of the /L para-
   meter.  When USERLOG is invoked with the /L parameter,
   you will be asked to supply a beginning date in a
   mm/dd format and whether you want only (1) business,
   (2) personal, or (3) both types of log entries listed.
   USERLOG will scan your entire log file searching for
   the first log entry that satisfies the criteria you
   specified.  If no matches are found, USERLOG will
   inform you of such and exit to DOS.  Otherwise USERLOG
   will ask which device to list the log entries to.
   Pressing the [S] key causes the output to be printed
   on the display screen whereas pressing the [P] key
   causes it to be listed on the printer attached to
   your computer.  You may exit USERLOG at this time by
   pressing the [Esc] key.  If the log entries are to be
   listed on the printer, be sure the printer is turned
   on and that the printer top-of-form has been set.
   
   The log entries are listed in detail in the order in
   which they were made.  As each log entry is printed,
   the number of hours the computer was used for business
   and for personal purposes are accumulated and printed
   on the bottom of each page.  The percentage of time
   your computer has been used for business-related 
   activities is calculated and printed also.
   
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -13-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                USING USERLOG IN BATCH FILES
   
   In order to keep accurate records of computer usage,
   users should be 'forced' to log in and out between
   applications.  Fortunately, the batch language facil-
   ities of PC-DOS provides a very convenient means for
   doing so.  The following example shows how to create
   a batch file that will log a user in, run a program
   named MYPROGRAM and log the user out after exiting
   the program.
   
   
   A>COPY CON: MYPROGRAM.BAT
   CLS
   PAUSE -----> INSERT LOG FILE DISKETTE INTO DRIVE A
   USERLOG /I
   PAUSE -----> INSERT MYPROGRAM DISKETTE INTO DRIVE A
   MYPROGRAM
   PAUSE -----> INSERT LOG FILE DISKETTE INTO DRIVE A
   USERLOG /O
   ^Z                   (press the F6 key)
   1 file copied
   
   
   If your system has a hard disk drive, then the PAUSE
   statements can be eliminated.  However, the path to
   the directory containing USERLOG.COM must be named.
   For example, if USERLOG.COM resides in the directory
   named MYLOG, then then following batch program will
   log a user in and out.
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -14-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
   C>COPY CON: MYPROGRAM.BAT
   CLS
   PATH \MYLOG 
   USERLOG /I
   MYPROGRAM
   PATH \MYLOG
   USERLOG /O
   ^Z                   (press the F6 key)
   1 file copied
   
   
   Programs written in interpretive BASIC can be executed
   from batch files as well by either including BASIC.COM
   in the directory which contains the BASIC program or
   by extending the search path to include the directory
   that contains BASIC.COM.
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   -------------------------------------------------------
   
                             -15-
   
                                            U s e r L o g
   -------------------------------------------------------
   
   
                 USERLOG REGISTRATION FORM
   
   
     I have enclosed $25.00 with this registration form.
     Registration entitles me to notification of updates
     to USERLOG and free upgrades (excluding diskette and
     postage).  Please add me to your list of registered
     users of USERLOG.
   
     Mail To:         Chris E. Lindberg
                   5221 W. Washington Blvd.
                    Milwaukee, WI   53208
   
    Please supply the following information:
   
   
     Name _____________________________________________
   
     Company __________________________________________
   
     Street ___________________________________________
   
     City _____________________________________________
   
     State ______   Zip __________  Phone _____________
   
     How did you obtain a copy of USERLOG _____________
   
     __________________________________________________
   
   Comments/Problems:
   
   
   
   
   -------------------------------------------------------
   
                             -16-



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

### Directory of PC-SIG Library Disk #0313

     Volume in drive A has no label
     Directory of A:\

    ACRS     BAS      3344   2-25-84   8:57p
    ACRS     DOC        96   2-25-84   7:22p
    CALCULA  BAS      5284   2-25-84   8:56p
    IPM      COM     31975  11-07-86  12:08a
    IPM      DOC     13064  11-07-86  12:20a
    KEITH2   CPM      1686  11-06-86  11:57p
    KEYPAD   BAS      1255   2-25-84   8:16p
    PCYEARBK DOC      9222   4-24-84   6:47p
    PCYEARBK EXE     26624   6-26-84  10:38p
    PERT3    BAS      9722   6-25-83  12:56p
    PRGTIM   BAS      6049   7-17-84   8:08p
    PRGTIM   DOC      2709   5-06-84   3:05p
    PRGTIM   EXE     23882   6-09-84   7:43p
    RPTUSE   BAS      4638   5-05-84  10:21p
    TAXDEDCT BAS      8969   2-25-84   7:50p
    TMSTRT   BAS      1465   5-03-84   7:58p
    TMSTRT   EXE     19200   5-05-84  12:12a
    USE-TIME DOC      3001   5-30-84   9:00p
    USERLOG  COM     25600   1-14-85  10:36p
    USERLOG  DOC     25108   1-14-85   6:46p
    FILES313 TXT      1233   1-30-87  12:52p
    GO       BAT       777   1-30-87   8:51a
           22 file(s)     224903 bytes
                           87040 bytes free
