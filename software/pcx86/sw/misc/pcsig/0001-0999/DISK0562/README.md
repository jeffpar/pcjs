---
layout: page
title: "PC-SIG Diskette Library (Disk #562)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0562/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0562"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-HAM"

    PC-HAM is a set of amateur radio database programs.  The program is
    based, in part, on programs described in, "Software for Amateur
    Radio," by Joe Kasser (G3ZCZ) and published by TAB Books.
    
    PC-HAM has several features that are invaluable to any amateur
    radio operator with a computer. Some of the program's capabilities
    include:
    
    ~ Display/print of your QSO's sorted by call-sign, alphanumerical order
    
    ~ Search for and display of all QSO's with a specified prefix
    
    ~ Automatic generation of your DXCC status
    
    ~ Direct updating of award records from the log entries
    
    ~ Analyze contest QSO's for duplicates and scoring contacts
    
    ~ Automatic QSL 100% (after a contest or DX-Pedition) to all stations
    worked for one contact on each of five bands.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONTEST.BAS

{% raw %}
```bas
10 ON ERROR GOTO 1200
20 KEY OFF:G$="G3ZCZ CONTEST LOGGING PROGRAM VERSION 3.0" :CLS:WIDTH 80:LOCATE 5,1:PRINT G$:LOCATE 10,1:PRINT "IF TIME IS NOT SET TO UTC, STOP NOW AND SET THE CLOCK IN DOS"
30 K1=0:GOSUB 930
40 BANDS=7:M9=4000:DIM W$(M9),F1(M9),B(BANDS),B1(BANDS):R1$="00":S1$="599":C$="?"
50 BLANK$="                                                                    "
60 C4$="RXWBMCFL*/Q?OP+":L0$=BLANK$:QS$="-":QR$=QS$:R$=R1$:S$=S1$:L1$=L0$:L2$=L0$:L3$=L0$:L4$=L0$
70 L5$=L0$:L6$=L0$:L7$=L0$:L8$=L0$:L13$=L0$:L12$=L0$:L11$=L0$:L10$=L0$:L9$=L0$
80 FOR I%=1 TO BANDS:READ B(I%):NEXT:DATA 1,4,16,64,256,1024,4096
90 FOR I%=1 TO BANDS:READ B1(I%):NEXT:DATA 10,15,20,40,80,160,2
100 LOCATE 15,1:INPUT "Enter name of lOG file (D:NAME) Log type .LOG Assumed ",L$:IF L$="" THEN 100
110 GOSUB 880
120 CLS
130 OPEN L$+".$$$" FOR OUTPUT AS #2
140 OPEN L$+".LOG" FOR INPUT AS #1:GOTO 160
150 GOSUB 420 :GOSUB 430 :GOSUB 460:GOTO 1000
160 LOCATE 23,1:PRINT "LOADING LAST ENTRY STRINGS":OPEN L$+".CHK" FOR INPUT AS #3
170 INPUT#3,L13$,L12$,L11$,L10$,L9$,L8$,L7$,L6$,L5$,L4$,L3$,L2$,L1$:CLOSE#3
180 PRINT "OPENING LOGBOOK ";L$:N4=0
190 IF EOF(1) THEN INPUT"Waiting,touch ENTER to continue ";A$:GOSUB 470:GOTO 1000
200 INPUT#1,D$,T$,B$,C$,R$,S$,M$,P$,QS$,QR$,X$ : PRINT N4,C$,X$:IF C$="/*" THEN N4=N4-1 ELSE N4=N4+1
210 IF C$="/*" THEN C$=C8$:GOSUB 300:W$(J)=" ":F1(J)=F1(J)-B(B%):C$="/*":GOTO 240
220 GOSUB 300:W$(J)=C$:F=VAL(B$):FOR Q%=1 TO BANDS:IF INT(F)=B1(Q%) THEN F1(J)=F1(J)+B(Q%):B%=Q%:GOTO 240
230 NEXT
240 C8$=C$:WRITE#2,D$;T$;B$;C$;R$;S$;M$;P$;QS$;QR$;X$:GOTO 190
250 LOCATE 20,1:PRINT BLANK$:LOCATE 20,1:RETURN
260 L0$=BLANK$:MID$(L0$,6)=D$:MID$(L0$,15)=T$:MID$(L0$,20)=C$:MID$(L0$,32)=B$:MID$(L0$,36)=M$:MID$(L0$,40)=P$
270 IF C$="/*" THEN MID$(L0$,1)="-" ELSE N4$=STR$(N4):MID$(L0$,1)=MID$(N4$,2)
280 MID$(L0$,45)=R$:MID$(L0$,49)=S$:MID$(L0$,53)=QS$:MID$(L0$,55)=QR$:MID$(L0$,57)=X$:RETURN
290 T$=LEFT$(TIME$,2)+MID$(TIME$,4,2):D$=RIGHT$(DATE$,2)+"/"+LEFT$(DATE$,2)+"/"+MID$(DATE$,4,2):RETURN
300 J=0:IF C$="/*" THEN 380
310 FOR I%=1 TO LEN(C$):A$=MID$(C$,I%,1):J=J+(ASC(A$)-47):NEXT:J=J*ASC(LEFT$(C$,1)):IF J<0 THEN J=0
320 IF J>M9 THEN J = J-M9 : GOTO 320
330 IF LEN(W$(J))<1 THEN 380
340 IF LEFT$(W$(J),1)=" " THEN 380
350 IF LEFT$(W$(J),LEN(C$))=C$ THEN 370
360 J=J+1:GOTO 320
370 I=0:RETURN
380 I=1:RETURN
390 INPUT "REPORT RECEIVED ";A$:IF A$="" THEN 400 ELSE X$=A$
400 RETURN
410 GOSUB 250:INPUT "REPORT SENT     ";S$:IF S$>"599" THEN 410 ELSE RETURN
420 GOSUB 250:INPUT "POWER (watts)   ";P$:IF P$<"0" THEN 420 ELSE RETURN
430 GOSUB 250:INPUT "BAND            ";F : IF F>160 THEN 430
440 FOR I%=1 TO BANDS:IF INT(F)=B1(I%) THEN 450 ELSE NEXT:LOCATE 22,1:FOR I%=1 TO BANDS:PRINT B1(I%);" ";:NEXT:GOTO 430
450 B$=MID$(STR$(F),2):B%=I%:GOSUB 730:RETURN
460 GOSUB 250:INPUT "MODE            ";M$: IF M$="" THEN 460
470 IF M$="SSB" THEN S1$="59" ELSE S1$="599"
480 RETURN
490 GOSUB 250:INPUT "CALL SIGN       ";A$
500 IF A$="" THEN 580 :IF LEFT$(A$,1)="" THEN A$=LEFT$(A$,LEN(A$)):GOTO 500
510 LOCATE 22,1:PRINT BLANK$: LOCATE 22,1:C$=A$:GOSUB 300:IF I=0 THEN 530
520 PRINT "OK":GOTO 580
530 F2=F1(J): PRINT "WORKED on ";
540 FOR Q%=BANDS TO 1 STEP -1: IF F2<B(Q%) THEN 570
550 PRINT B1(Q%);" ";:F2=F2-B(Q%):IF B1(Q%)=INT(F) THEN PRINT "DUPLICATE";CHR$(7);
560 IF F2>=B(Q%) THEN 540
570 NEXT
580 IF P2=1 THEN LPRINT C$
590 RETURN
600 GOSUB 250:INPUT "ARE YOU SURE ";A$ :IF A$="" THEN RETURN
610 IF N4<1 THEN GOSUB 250 : PRINT "CAN'T F***** A ZERO ENTRY":RETURN
620 IF A$=""OR LEFT$(A$,1) <> "Y" THEN RETURN
630 C$=C8$:GOSUB 300:F1(J)=F1(J)-B(B%):IF F1(J)<=0 THEN W$(J)=" "
640 C$="/*":GOTO 680
650 IF LEN(X$)=0 THEN 660 ELSE IF LEFT$(C$,1)="?" THEN 660 ELSE 670
660 LOCATE 22,1:PRINT BLANK$: LOCATE 22,1:PRINT "GET THE DATA FIRST":RETURN
670 GOSUB 290:C8$=C$:GOSUB 300: F1(J)=F1(J)+B(B%):W$(J)=C$:GOSUB 1070
680 WRITE#2,D$;T$;B$;C$;R$;S$;M$;P$;QS$;QR$;X$
690 IF C$="/*" THEN 700 ELSE N4=N4+1:GOTO 710
700 N4=N4-1:IF N4<0 THEN N4=0
710 GOSUB 260:L13$=L12$:L12$=L11$:L11$=L10$:L10$=L9$:LOCATE 1,5:PRINT G$
720 L9$=L8$:L8$=L7$:L7$=L6$:L6$=L5$:L5$=L4$:L4$=L3$:L3$=L2$:L2$=L1$:L1$=L0$:IF P1 = 1 THEN LPRINT L0$
730 GOSUB 740:C$="?":R$=R1$:S$=S1$:X$="":RETURN
740 I=3:GOSUB 780:PRINT L13$:I=4:GOSUB 780:PRINT L12$:I=5:GOSUB 780:PRINT L11$:I=6:GOSUB 780:PRINT L10$
750 I=7:GOSUB 780:PRINT L9$:I=8:GOSUB 780:PRINT L8$:I=9:GOSUB 780:PRINT L7$:I=10:GOSUB 780:PRINT L6$
760 I=11:GOSUB 780:PRINT L5$:I=12:GOSUB 780:PRINT L4$:I=13:GOSUB 780:PRINT L3$:I=14:GOSUB 780:PRINT L2$
770 I=15:GOSUB 780:PRINT L1$:RETURN
780 LOCATE I,1:PRINT BLANK$:LOCATE I,1:RETURN
790 GOSUB 250:INPUT "ARE YOU SURE ";A$:IF A$="" THEN RETURN
800 IF LEFT$(A$,1)<>"Y" THEN RETURN
810 CLS:PRINT "SAVING LAST ENTRY STRINGS BEFORE CLOSING":OPEN L$+".CHK" FOR OUTPUT AS #3
820 WRITE#3,L13$;L12$;L11$;L10$;L9$;L8$;L7$;L6$;L5$;L4$;L3$;L2$;L1$
830 CLOSE#3:CLOSE#1:CLOSE#2
840 KILL L$+".BAK"
850 NAME L$+".LOG" AS L$+".BAK"
860 NAME L$+".$$$" AS L$+".LOG"
870 GOTO 1350 : REM END
880 INPUT "Do you want a running log printed out (Y/N) "; A$: IF A$="" THEN 880
890 IF LEFT$(A$,1)="Y" THEN P1 = 1 ELSE IF LEFT$(A$,1)="N" THEN P1 = 0 ELSE 880
900 INPUT "Do you want CALL SIGNS printed out (Y/N) "; A$: IF A$="" THEN 900
910 IF LEFT$(A$,1)="Y" THEN P2 = 1 ELSE IF LEFT$(A$,1)="N" THEN P2 = 0 ELSE 900
920 RETURN
930 IF K1 = 1 THEN 970
940 KEY 1,"QSL   "+CHR$(13): KEY 2,"BAND  "+CHR$(13):KEY 3,"CALL  "+CHR$(13):KEY 4, "*QRT  "+CHR$(13):KEY 5,"RPT RX "+CHR$(13)
950 KEY 6,"FUDGE "+CHR$(13): KEY 7,"XMT RPT"+CHR$(13):KEY 8,"/PX CHK"+CHR$(13):KEY 9, "LOG   "+CHR$(13):KEY 10,"+MORE "+CHR$(13):K1=1
960 GOTO 990
970 KEY 1,"WATTS "+CHR$(13): KEY 2,"MODE  "+CHR$(13):KEY 3,"?CLN  "+CHR$(13):KEY 4, "PRINT "+CHR$(13):KEY 5,"OOPS  "+CHR$(13)
980 KEY 6,"      "+CHR$(13): KEY 7,"        "+CHR$(13):KEY 8,"        "+CHR$(13):KEY 9, "      "+CHR$(13):KEY 10,"+MORE "+CHR$(13):K1=0
990 RETURN
1000 GOSUB 1090: GOSUB 730
1010 GOSUB 1100
1020  LOCATE 17,30:PRINT "CURRENT ENTRY":GOSUB 290:GOSUB 260
1030 MID$(L0$,1)=STR$(N4+1):LOCATE 18,1 : PRINT BLANK$:LOCATE 18,1 : PRINT STR$(N4+1),C$,X$
1040 GOSUB 250:INPUT "QRU ";A$:IF A$=""THEN 1040
1050 FOR J2%=1 TO LEN(C4$):IF LEFT$(A$,1)=MID$(C4$,J2%,1) THEN 1060 ELSE NEXT:GOTO 1040
1060 GOSUB 250:ON J2% GOSUB 390,410,420,430,460,490,600,650,790,1130,1080,1070,1370,880,930:GOTO 1010
1070 LOCATE 21,1:PRINT BLANK$:PRINT BLANK$:PRINT BLANK$:RETURN
1080 LOCATE 22,1:PRINT L0$:RETURN
1090 CLS: KEY ON: RETURN
1100 LOCATE 2,1:PRINT"-------------------------------------------------------------------------------"
1110 LOCATE 1,5:PRINT G$,L$
1120 LOCATE 16,1:PRINT"-------------------------------------------------------------------------------":RETURN
1130 GOSUB 250:INPUT "ARE YOU SURE ";A$:IF A$="" THEN RETURN
1140 INPUT "WHICH PREFIX ";A$:IF LEN(A$)<1 THEN A$="*"
1150 CLS:GOSUB 1100:LOCATE 3,1
1160 I%=0:FOR Q=1 TO M9:IF LEN(W$(Q))<=2 THEN 1190
1170 IF A$="*" THEN 1180 ELSE IF A$=LEFT$(W$(Q),LEN(A$)) THEN 1180 ELSE 1190
1180 PRINT W$(Q),:I%=I%+1:IF I%=4 THEN I%=0:PRINT
1190 NEXT:PRINT:INPUT "READY WHEN YOU ARE, HIT ENTER TO CONTINUE";A$:CLS:GOSUB 1090:GOSUB 740:RETURN
1200 IF ERR = 64 OR ERR = 67 THEN PRINT "BAD FILE NAME ERROR" : GOTO 1640
1210 IF ERL = 140 THEN OPEN L$+".LOG" FOR OUTPUT AS #3:CLOSE#3:OPEN L$+".LOG" FOR INPUT AS #1:RESUME 150
1220 IF ERR = 61 THEN PRINT "Yuk Yuk Yuk DISK FULL ERROR - You may have blown it" :GOTO 1640
1230 IF ERL=160 THEN PRINT "CHECK LIST ERROR, RECOVERING....":RESUME 180
1240 IF ERL = 580 THEN PRINT "PRINTER ERROR, ABORTING PRINTING":RESUME 590
1250 IF ERL = 720 THEN RESUME 730
1260 IF ERL = 840 THEN RESUME 850
1270 IF ERL = 1610 AND ERR = 70 THEN PRINT "DISK WRITE PROTECT ERROR":GOTO 1640
1280 IF ERR = 62 AND ERL = 200 THEN GOSUB 730:INPUT"Waiting,touch ENTER to continue ";A$:RESUME 1000
1290 IF ERR = 53 THEN PRINT "LOG FILE DOES NOT EXIST ON DEFAULT DISK DRIVE":GOTO 1640
1300 IF ERR = 72 THEN PRINT "DISK MEDIA ERROR":GOTO 1640
1310 IF ERR = 71 THEN PRINT "DISK NOT READY ERROR":GOTO 1640
1320 IF ERR = 58 THEN 1640
1330 PRINT "ERROR ";ERR;" AT LINE ";ERL:CLOSE:GOTO 1640
1340 REM RESUME 750:REM CLOSE DOWN IN AN ORDERLY MANNER
1350 INPUT "Is the contest over (Y/N) ";A$: IF LEN(A$)<1 THEN 1350
1360 IF LEFT$(A$,1)="Y" THEN 1390 ELSE 1640
1370 INPUT "What is the number of lost calls (to be added to the memory) ";O:IF O <0 THEN 1370
1380 N4 = N4+O : RETURN
1390 PRINT "CONVERTING (CLEANING UP) CONTEST LOG TO STANDARD LOG"
1400 OPEN L$+".LOG" FOR INPUT AS #1
1410 OPEN L$+".$$$" FOR OUTPUT AS #2
1420 INPUT "Do you want the contacts numbered (Y/N) ";AA$: IF LEN(AA$)=0 THEN 1420
1430 IF LEFT$(AA$,1)="Y" THEN N0=1 ELSE N0=0:IF LEFT$(AA$,1)<>"N" THEN 1420
1440 INPUT "What is the name of the contest ";X$
1450 N=1:T$=" ":B$=" ":C$="-CONTEST":R$=" ":S$=" ":P$=" ":QS$=" ":QR$=" ":GOSUB 1610
1460 IF EOF(1) THEN 1520 ' GET FIRST ENTRY
1470 GOSUB 1570:GOSUB 1580:IF C1$="/*" THEN GOSUB 1630: GOTO 1460 'REM DONT SAVE FUDGE FLAG OR PREVIOUS LINE
1480 IF EOF(1) THEN 1510 ' GET SUBSEQUENT ENTRIES
1490 GOSUB 1570:IF C1$="/*" THEN GOSUB 1630:GOTO 1460 'REM DONT SAVE FUDGE FLAG OR PREVIOUS LINE
1500 GOSUB 1590:GOSUB 1580:GOTO 1480
1510 GOSUB 1590:PRINT :PRINT N9;"Entries were corrected/deleted"
1520 CLOSE#1 : CLOSE#2
1530 NAME L$+".LOG" AS L$+".RUN"
1540 NAME L$+".$$$" AS L$+".LOG"
1550 GOTO 1640
1560 REM SUBROUTINES FOLLOW
1570 INPUT#1,D1$,T1$,B1$,C1$,R1$,S1$,M1$,P1$,QS1$,QR1$,X1$:RETURN
1580 D$=D1$:T$=T1$:B$=B1$:C$=C1$:R$=R1$:S$=S1$:M$=M1$:P$=P1$:QS$=QS1$:QR$=QR1$:X$=X1$:RETURN
1590 R$=MID$(X$,1,3):X$=MID$(X$,4,LEN(X$))
1600 IF N0=1 THEN N$=STR$(N):N$=MID$(N$,2):X$=N$+"-"+X$:N=N+1
1610 WRITE#2, D$;T$;B$;C$;R$;S$;M$;P$;QS$;QR$;X$
1620 PRINT D$;TAB(10);T$;TAB(15);C$;TAB(26);B$;TAB(30);R$;TAB(34);S$;TAB(38);M$;TAB(43);P$;TAB(48);QS$;TAB(50);QR$;TAB(52);X$:RETURN
1630 N9=N9+1:PRINT "ENTRY with ";C$;" DELETED":RETURN
1640 END
```
{% endraw %}

## CONTEST.DOC

{% raw %}
```
        PC-HAM CONTEST.DOC Version 3.0 PAGE 1


                               PC-HAM Version 3.0

                 G3ZCZ AMATEUR RADIO CONTEST PACKAGE VERSION 3.0
         
                  (C) Copyright 1985, 1986 - All Rights Reserved 

                               By Joe Kasser G3ZCZ
                                    POB 3419,
                                  Silver Spring,
                                 Md., 20901, USA.

        PC-HAM is a set of DATA Processing Amateur Radio programs for the 
        user  of  a microcomputer in Amateur Radio.  The  BASIC  language 
        programs  may or may not be described in or be based on  programs 
        described in the book,  SOFTWARE FOR AMATEUR RADIO written by Joe 
        Kasser,  G3ZCZ,  published by TAB Books (Number 1560), Blue Ridge 
        Summit,   Pa.,   17214.  The  DBASE2  programs  perform  database 
        operations on logbook information.

             PC-HAM is written and supported by Joe Kasser, G3ZCZ.

        The program is distributed as a Shareware product. You may freely 
        copy  and  share the product with your  friends,  associates  and 
        other radio hams. If you decide to use the product, you are asked 
        to  become a registered user by sending  a QSL card and  a  cont-
        ribution  to the author (suggested amount of $36.50 (ie.  half of 
        73)  or  equivalent  in foreign currency (See  registration  form 
        below).

        The  contribution covers the cost of distribution of the  updated 
        disk,  and  supports the continual development of  "Software  for 
        Amateur  Radio".   Upon  receipt of your contribution,  you  will 
        receive  one free update disk ),  mail (electronic  and  regular) 
        support,  and  notice of further releases.   The update disk will 
        contain any new versions of the software on this disk  (converted 
        programs  from Northstar BASIC to IBM) plus new software,  accom-
        panying  the  series of articles currently being written  on  the 
        applications  of  data processing concepts of  microcomputers  to 
        amateur radio.

        Under  no circumstances may this product be sold  or  distributed 
        with  another  product without the express written permission  of 
        Joe Kasser, G3ZCZ.  

        Joe  Kasser,  G3ZCZ  will only support unmodified copies of  this 
        software.   Your comments and suggestions for changes are however 
        welcome.   If you are the first to suggest a change that is  imp-
        lemented,  you will be sent a complimentary copy of the disk with 
        the change incorporated.














        PC-HAM CONTEST.DOC Version 3.0 PAGE 2


                                    TABLE OF CONTENTS

        1.0  INTRODUCTION

        2.0  DURING THE CONTEST

        3.0  COMMANDS

             3.1  QSL       (Function Key 1)
             3.2  Band      (Function Key 2)
             3.3  CALL      (Function Key 3)
             3.4  *QRT      (Function Key 4)
             3.5  RPT RX    (Function Key 5) 
             3.6  Fudge     (Function Key 6)
             3.7  XMT RPT   (Function Key 7)
             3.8  /PX CHK   (Function Key 8)
             3.9  LOG       (Function Key 9)
             3.10 ?CLN      (Function Key 10)
             3.11 WATTS
             3.12 MODE

        4.0  AFTER THE CONTEST

        5.0  SAMPLE DISK FILES

        6.0  REVISION HISTORY





































        PC-HAM CONTEST.DOC Version 3.0 PAGE 3


        1.0  INTRODUCTION

        Contests  are   a  natural  application of  computers in  amateur 
        radio.  After  all   the purpose of a contest can  be  stated  as 
        gathering  data   (the  calls and reports of stations worked)  in 
        such a way as to avoid  duplicates.  When working  contests in  a 
        manual    (non  computer)   mode,    if  you  desire  to    avoid 
        duplicates,  you  usually have to  keep two sets of records   for 
        each   contact.   The log entry has to  be made,  and a duplicate  
        sheet  of some kind has  to be kept to  give real time notice  of  
        potential  duplicate contacts.   

        The  use of a good contest logging program simplifies  the  paper  
        work  during  and   after a contest and allows  the  operator  to  
        concentrate  on  working  stations. 

        During  the  contest,  the  operator  has  only  to  perform  the 
        following tasks.  

        *    Enter the call sign of the station worked.  

        *    Enter the  report received.  

        *    Tell the computer to log the  contact.  

        The  computer takes care of the rest of the  data  handling.  The  
        computer thus performs the following tasks.     

        *    Keeps  a  check list in memory to notify the operator  if  a 
             contact  has  been made on the same (duplicate) or an  other 
             band.   

        *    Updates date and time information automatically.  

        *    Stores the contact data in a floppy disk file.  

        2.0  DURING THE CONTEST

        The  contest  program on this disk maintains the check  list  for 
        duplicates  in  memory,  logs  all contacts to disk  and  can  if 
        desired  (and  so it should be) print a running log  of  contacts 
        and/all callsigns to the printer as the contest progresses.  This 
        print  operation  is desirable in case of  a  power  failure,  or 
        operator error in which a contact was not logged by mistake.

        BEFORE  YOU  DO ANYTHING ELSE,  SET THE CAPITALS KEY SO THAT  ALL 
        CHARACTERS ARE ENTERED IN CAPITAL LETTERS.

        The  program  is invoked by loading BASIC and  then  loading  and 
        executing  the  contest program in the usual manner for  programs 
        written in BASIC.












        PC-HAM CONTEST.DOC Version 3.0 PAGE 4



        When  the program begins,  a sign on message such as  that  shown 
        below will appear.  

                     G3ZCZ CONTEST LOGGING PROGRAM VERSION 3.0

        IF TIME IS NOT SET TO UTC, STOP NOW AND SET THE CLOCK IN DOS

        At  this  time,  if the clock has not been set to UTC before  you 
        loaded the program,  break the sequence and return to DOS to  set 
        the date and time to the correct UTC values.

        You  will then be requested to give the computer the name of  the 
        file you wish be the log.  The computer checks the disk to see if 
        the file exists.   If it does, the computer will load the data in 
        it  into the check list,  and display the calls worked as it goes 
        along.   If there is no such file on the disk,  the computer will 
        create  one.   You  will then be asked about your  running  print 
        requirements. You have the option of printing the logged contacts 
        and/or just the calls (as you enter them) as you go along.  Reply 
        with the CAPITAL letters please as in the examples below.

        Enter name of lOG file (D:NAME) Log type .LOG Assumed ? FIELD85
        Do you want a running log printed out (Y/N) ? Y
        Do you want CALL SIGNS printed out (Y/N) ? Y

        If the log file is new, the computer will prompt you to enter the 
        Mode,  Band and after a short pause, it will request you to enter 
        the   Transmitter  Power information before getting down  to  the 
        contest.  

        If you are loading an existing file,  after a break for  example, 
        the  computer  will  load the check list from the  log  file  and 
        display the calls as it goes along.   When the log is loaded, the 
        computer  will  pause and wait for you to touch the  'ENTER'  key 
        before  setting up the main screen.   A typical example from  the 
        FIELD85 log  is shown below.

         166          G4NWG         54019
         167          G4TSH         55024
         168          G4OVF         57001
         169          G4EKT/P       55592
         170          DF0WB/P       53
        Waiting,touch ENTER to continue ?

        You  can see the entry number,  followed by the call sign od the 
        station  worked  and lastly the report received.   The  remaining 
        data in the log file associated with each contact is there but is 
        not displayed at this time.

        When the program begins a new contest log,  you will be presented 
        with the following screen.











        PC-HAM CONTEST.DOC Version 3.0 PAGE 5


        G3ZCZ CONTEST LOGGING PROGRAM VERSION 2.60          DUMMY    
        -------------------------------------------------------------













        --------------------------------------------------------------
                                     CURRENT ENTRY
         1            ?

        QRU ?

        The top line contains the version of the program and displays the 
        name of the disk file you are using as the log.   It is recommen-
        ded that the name be somewhat representative of the contest.  Use 
        names such as WPX87, ARRLDX86, FIELD85 and so on.

        The blank area following is where the last few contacts you  made 
        will be displayed.   You thus have an ongoing display of the last 
        contacts .  It is very useful to see how you are doing and in the 
        Worked  All  Europe  contest you can use that data  for  the  QTC 
        information (if you are located outside Europe).

        The  lower  part of the screen contains the  CURRENT ENTRY  data.  
        This  is the data concerning the contact in  progress.   In  this 
        case the next contact is the first or number 1, and the call data 
        is blank because nothing has been entered.

        As  you work the contest you will pick up information from  other 
        stations.   This  information will consist of call signs and  re-
        ports.  In some contests (eg. The ARRL Sweepstakes) the report is 
        relatively complex,  in others it is simple.   You do not know in 
        which order you will get the data for each contact.  This program 
        thus lets you enter the data in any order.  You tell the computer 
        which  piece  of data is going to be entered by typing  a  single 
        letter followed by the 'ENTER' key.  

        In order to speed up that operation,  the function keys have been 
        set up with those commands,  and are displayed during the contest 
        for your convenience.


        3.0  COMMANDS

        The   contest  logging program gives the operator  the  following 
        choices. If you do not wish to use the function keys, you have to 








        PC-HAM CONTEST.DOC Version 3.0 PAGE 6


        type the first letter followed by the 'ENTER' key.

             3.1  QSL       (Function Key 1)

             Displays the log entry data on the screen . This command may 
             be  used for example to verify that  the  correct  band data 
             is set  after  changing  bands.   

             3.2  Band      (Function Key 2)

             Enters  the band information for the checklist and log.  Use 
             the following designations for the different bands, 160, 80, 
             40, 20, 15, 10, and 2.

             NOTE,  changing the band will clear the call and report data 
             elements form the display.

             3.3  CALL      (Function Key 3)

             Enters the Call of the station to be or being worked.   When 
             the call is entered,  the computer will  perform a check  to 
             see  if  that call has  already been worked and  if  so   on 
             what  band. If the call has  been worked on the  band in use 
             at  that  time it will also display the word  DUPLICATE  and 
             BEEP  an audible  alarm.   The beep is a must at  0330  hrs. 
             local time.   

             If you change your mind,  type the 'ENTER' key and the  call 
             in the display will not be changed.

             3.4  *QRT      (Function Key 4)

             This  command terminates  the  program.  It saves  the  data 
             associated  with  the last  12 contacts in a file  with  the 
             ".CHK"   extension     so  that when the program is restart-
             ed,  the operator  will not even notice that a  break occur-
             red.  The  disk files are closed and any previous  log  file 
             present from the start  of the session is named as a  backup 
             file.

             Since  you  have  the potential to lose a  number  of  QSO's 
             (while  recovering)  if you invoke this command by  mistake, 
             the  computer  will ask you to verify that you meant  to  do 
             what  you just asked for.   You will be prompted to  confirm 
             your request with the following message.

                            ARE YOU SURE ?

             At  this time,  type the letter Y for "YES" followed by  the 
             'ENTER'  key if you want to got QRT for a while,  or if  the 
             contest is over.  Any other key will abort the sequence.

             3.5  RPT RX    (Function Key 5)

             Enter the Report received into the  log.   








        PC-HAM CONTEST.DOC Version 3.0 PAGE 7



             3.6  Fudge     (Function Key 6)

             This command is used to flag an erroneous log entry.   Since 
             the  log on disk is a sequential file,  and the log data  is 
             not double buffered by the program, once an entry is written 
             to the log,  it is gone.  This command deletes the call from 
             the list checklist and puts a "/*" entry  into the logbook. 

             Since  you have the potential to delete a QSO if you  invoke 
             this command by mistake, the computer will ask you to verify 
             that you meant to do what you just asked for.   You will  be 
             prompted to confirm your request with the following message.

                            ARE YOU SURE ?

             At  this time,  type the letter Y for "YES" followed by  the 
             'ENTER'  key  if you want to fudge the  last  contact.   Any 
             other key will abort the sequence.

             3.7  XMT RPT   (Function Key 7)

             Enter  the signal report Xmitted to the  other station  into 
             the log.   

             3.8  /PX CHK   (Function Key 8)

             This   command  is used to scan the contents of   the  check 
             list  for prefixes.  You use  this  when  you are sure  that 
             you  have  worked a station  but the computer tell you  that  
             you haven't.   You may also use it to check if a prefix  has 
             been  worked as a help in deciding if you want to get into a 
             pile up or pass it  by.   NOTE however that the response  is  
             not instantaneous.  It takes a good few  seconds to scan the 
             4000 slots in the check list.  The  computer will prompt you 
             to enter  a prefix.  If you want to look at all the calls in 
             the check list,  enter an asterisk (*) as the desired prefix 
             and  you will get a list of every call in the check list  in 
             the order in which they are hashed in the check list.   

             3.9  LOG       (Function Key 9)

             Enter the QSO information into the Log book/check list.  The 
             data  is written into the log file in ASCII format delimited 
             with  commas.  This  makes  it easy to modify  with  a  word 
             processor  and  read  into the program used  by  the  second 
             computer.  You may also list the contents of the log file to 
             the screen under DOS using the "TYPE" command.   

             Logging a contact clears the call and time data.

             THE  COMPUTER  WILL NOT LET YOU LOG THE QSO UNTIL  YOU  HAVE 
             ENTERED BOTH A CALL SIGN AND A REPORT.   This traps one type 
             of error that can be made in the heat of the moment.









        PC-HAM CONTEST.DOC Version 3.0 PAGE 8


             3.10 ?CLN      (Function Key 10)

             This command clears the screen dialog  lines. It is normally 
             used  rarely,  only in the event that the BASIC  interpreter 
             generates  an error message  in response to a  user   input. 
             The  typical   one   normally  seen  is  "REDO  FROM  START" 
             which  results from an  alphabetical response  to the   BAND  
             interrogation,   where BASIC is looking for a number,  not a 
             string.                     

             3.11 WATTS

             Enter   the Transmitter Power used  in  Watts into the  log-
             book.   

             3.12 MODE

             Enter   the  Mode used in the contest in the log.   You  may 
             enter anything,  but the most commonly used ones are SSB and 
             CW.   


        4.0  AFTER THE CONTEST

        When  the contest ends,  or you take a break,  the computer  will 
        close  out the log and 'CHK' files and ask you if the contest  is 
        over.  The following messages will be displayed.

        SAVING LAST ENTRY STRINGS BEFORE CLOSING
        Is the contest over (Y/N) ?

        If you reply with the letter N for NO,  the program will end.  If 
        the contest is over, and you reply with the letter Y, the program 
        will  proceed to process the contest log data.   It  will  delete 
        entries  flagged  for  deletion and optionally  will  number  the 
        contacts  in the comments column.   The program prompts for inst-
        ructions as to the number option as follows.

        CONVERTING (CLEANING UP) CONTEST LOG TO STANDARD LOG
        Do you want the contacts numbered (Y/N) ? N

        The  computer will put a dummy entry into the first  position  of 
        the  log  identifying the contest.   It will thus request you  to 
        give  it  the  name of the contest.   You must use  a  name  that 
        contains  10  or fewer characters.   The questions  is  posed  as 
        follows.

        What is the name of the contest ? FIELD85

        The   program  first generates a reference entry for the  contest 
        log.   It then reads each line of  log  information,  strips  the 
        report part from the comments and  puts it into the report  space 
        and  if it as been so instructed,  adds the serial number of  the 
        contact into the comments space.    When the program has done its 
        job,  the  original  log has been renamed  with   a  ".RUN"  file  








        PC-HAM CONTEST.DOC Version 3.0 PAGE 9


        extension   while  the converted log data file has the  extension 
        ".LOG".

        The  computer generates a running display as the data  processing 
        job proceeds, a typical example of which is shown below.

        85/09/08      -CONTEST               SSB           FIELD85
        85/09/07 1646 G4ANT/P    20  59  59  SSB  200  - - 064
        85/09/07 1647 DF0KD/P    20  59  59  SSB  200  - - 131
        85/09/07 1648 G4AAX/P    20  59  59  SSB  200  - - 086
        85/09/07 1649 YU4EXC/P   20  59  59  SSB  200  - - 198
        85/09/07 1651 DF0SSB/P   20  59  59  SSB  200  - - 160
        85/09/07 1659 G3WAS/P    20  59  59  SSB  200  - - 089
        85/09/07 1703 YU4EZC/4   20  59  59  SSB  200  - - 219
         -------
        85/09/08 1305 G4NWG      15  54  53  SSB  200  - - 019
        85/09/08 1306 G4TSH      15  55  59  SSB  200  - - 024
        85/09/08 1307 G4OVF      15  57  53  SSB  200  - - 001
        85/09/08 1323 G4EKT/P    20  55  59  SSB  200  - - 592
        85/09/08 1330 DF0WB/P    20  53  53  SSB  200  - -

         10 Entries were corrected/deleted
        OK

        Note  that the date is set to the date at the end of the contest, 
        not the date at the start of the contest.   When the job is over, 
        you will be shown how many entries were corrected or deleted.

        You may examine the log with a word processor (non-document  mode 
        please),  or better still APPEND it to the DBASE2 logging package 
        for further  processing.  Since the logging package processes the 
        data  so well,  a program in BASIC to display the log was  deemed 
        unnecessary.

        5.0  SAMPLE DISK FILES

        The   following  sample files of an extract from the  1985  Field  
        Day  contest   log  are  presented on the disk as   an   aid   to 
        understanding the operation of the CONTEST package.

        FIELD85.LOG  Log (output of the CONTEST program),  ready for con-
                     version to .DBF format.
        FIELD85.CHK  Last few entries in log.
        FIELD85.DBF  Log, in DBASE2 data base format.
        FIELD85.NDX  Index file for DBASE2 log database.


        6.0  REVISION HISTORY

        This section documents changes and revisions.

        3.0  Logbook  format  changed  from  dBASE2  to  dBASE3   LOGBOOK 
             compatibility.   If  you never used a an earlier release  of 
             the  CONTEST  program,  or the dBASE LOGBOOK package with  a 
             Revision letter lower than 3.0, forget this.









```
{% endraw %}

## CQSS.BAS

{% raw %}
```bas
20 K = 1000 : REM number of stations in contest
30 PRINT "ARRL SWEEPSTAKES CONTEST SIMULATION VERSION 2.13"
40 Q4 = 18 : K7 = 74 : K6 = 66 : P1 = .1 : P5 = .5 : Z0 = 0 : Z1 = 1 : Z2 = 2 : Z3 = 3 : Q = (RND(Z1) * Z2)
50 N1 = Z1 : Z2 = 2 : Z3 = 3 : Z4 = 4 : Z5 = 5 : Z6 = 6 : Z7 = 7 : Z8 = 8 : Z9 = 9 : B1 = 100 : B2 = 200 : B3 = 300 : T3 = 12
60 DIM L(Z7),L$(Z5),C$(K),C(K),S(K7),S$(K7),P(85),P$(Z4),Z$(Q4),B$(Z4)
70 Z$(13) = "DUPLICATE" : B$(Z0) = "10" : B$(Z1) = "15" : B$(Z2) = "20" : B$(Z3) = "40"
80 P$(Z0) = "W" : P$(Z1) = "K" : P$(Z2) = "WA" : Q$ = "QWERTYUIOPASDFGHJKLZXCVBNM"
90 B$(Z4) = "80" : Z$(Z0) = "CALL" : Z$(Z1) = "LOG" : Z$(Z2) = "BAND " : Z$(Z3) = "CHECK" : X$ = ""
100 P$(Z3) = "WB" : Z$(Z4) = "STATUS" : Z$(Z5) = "BREAK" : Z$(Z6) = "QSL" : E$ = " DE "
110 B4 = 400 : B5 = 500 : T4 = 16 : T5 = 20 : T6 = 24 : T7 = 60 : Z$(Z8) = "REPEAT" : Z$(Z9) = "QRT"
120 DIM M$(Z5) : M$(Z0) = "NUMBER" : M$(Z1) = "POWER" : M$(Z4) = Z$(Z3) : M$(Z5) = "SECTION"
130 M$(Z2) = Z$(Z0) : A$ = "G3ZCZ/W3" : H = 21 : D = 19 : R$ = " !# * " : D$ = "NOVEMBER" : N = 1968
140 K$ = "CK" : Z$(7) = "SEND" : Z$(10) = "TUNE" : Z$(11) = "DATA " : Z$(T3) = "TIME" : M$(3) = Z$(3)
150 P$(Z4) = "N" : PRINT "COPYRIGHT (C) JOE KASSER [G3ZCZ] 1979 "
160 FOR I = Z0 TO 85 : READ P(I) : NEXT 
170 DATA .3,.58,.66,.76,.84,.88,1,.17,.34,.53,.78,1,.04,.41,.85,1,.04
180 DATA .14,.22,.32,.41,.44,.51,.59,.97,1,.11,.16,.25,.31,.62,.7,.99,1
190 DATA .11,.26,.33,.38,.69,.76,.83,.93,.97,1,.17,.23,.28,.34,.48,.52
200 DATA .95,.98,1,.61,.95,1,.48,.79,1,.16,.29,.4,.63,.82,.89,.92,1
210 DATA .11,.25,.52,.67,.72,.84,.98,1,.08,.21,.31,.42,.48,.58,.65,.79
220 DATA .89,.97,1
230 Z$(14) = M$(Z5) : Z$(15) = "HELP" : Z$(T4) = "CQ" : Z$(17) = "WORKED" : Z$(18) = "DEBUG"
240 S$(Z0) = "CT" : S$(Z1) = "EMASS" : S$(Z2) = "ME" : S$(Z3) = "NH" : S$(Z4) = "RI"
250 S$(Z5) = "VT" : S$(Z6) = "WMASS" : S$(Z7) = "ENY" : S$(Z8) = "NY - LI" : S$(Z9) = "NNJ"
260 S$(10) = "SNJ" : S$(11) = "WNY" : S$(12) = "DE" : S$(13) = "E.PA" : S$(14) = "M.DC"
270 S$(15) = "W.PA" : S$(16) = "ALA" : S$(17) = "GA" : S$(18) = "KY" : S$(19) = "NC"
280 S$(20) = "NFLA" : S$(21) = "SC" : S$(22) = "SFLA" : S$(23) = "TN" : S$(24) = "VA"
290 S$(25) = "WI" : S$(26) = "AK" : S$(27) = "LA" : S$(28) = "MISS" : S$(29) = "NM"
300 S$(30) = "N.TEX" : S$(31) = "OK" : S$(32) = "S.TEX" : S$(33) = "CZ" : S$(34) = "E BAY"
310 S$(35) = "LA" : S$(36) = "ORG" : S$(37) = "SB" : S$(38) = "SCV" : S$(39) = "SD" : S$(40) = "SF"
320 S$(41) = "SJV" : S$(42) = "SV" : S$(43) = "PCF" : S$(44) = "AZ" : S$(45) = "ID" : S$(46) = "MT"
330 S$(47) = "NV" : S$(48) = "OR" : S$(49) = "UT" : S$(50) = "WA" : S$(51) = "AL" : S$(52) = "WY"
340 S$(53) = "MI" : S$(54) = "OH" : S$(55) = "W VA" : S$(56) = "IL" : S$(57) = "IN" : S$(58) = "WSC"
350 S$(59) = "CO" : S$(60) = "IA" : S$(61) = "KS" : S$(62) = "MN" : S$(63) = "MO" : S$(64) = "NB"
360 S$(65) = "ND" : S$(66) = "SD" : S$(67) = "MAR" : S$(68) = "QB" : S$(69) = "ONT" : S$(70) = "MAN"
370 S$(71) = "SK" : S$(72) = "AB" : S$(73) = "BC" : S$(74) = "NWT"
380 INPUT "ARE YOU A HAM RADIO OPERATOR" ; I$ : IF LEFT$(I$,Z1) <> "Y" THEN 420
390 INPUT "YOUR CALL" ; A$ : IF RIGHT$(A$,Z2) <> "/3" THEN A$ = A$ + "/3"
400 INPUT "YEAR FIRST LICENSED " ; N
410 IF N < 1900 THEN PRINT "YOU MUST HAVE BEEN LICENSED BEFORE 1900" : GOTO 400
420 F$ = STR$(N - 1900) : PRINT : PRINT "OK","THE STATION CALL IS",A$
430 PRINT ,"THE QTH IS SILVER SPRING, MARYLAND " : PRINT 
440 INPUT "DO YOU NEED INSTRUCTIONS " ; I$ : IF LEFT$(I$,Z1) = "Y" THEN GOSUB 3300
450 PRINT : PRINT "SETTING UP CALLS OF CONTESTANTS"
460 PRINT "THIS IS GOING  TO TAKE ABOUT" ; INT(K / (T7 * Z2)) + Z1 ; " MINUTES"
470 PRINT "WHY DON'T YOU GET A CUP OF COFFEE OR SOMETHING"
480 FOR I = Z0 TO K - Z1 : X = RND(Z1) : FOR J = 75 TO 86 : IF X > P(J) THEN NEXT J
490 X = RND(Z1) : N = J - K7 : ON J - 75 GOTO 510,520,530,540,550,560,570,580,590,600
500 Y = Z0 : Z = Z6 : GOTO 610
510 Y = Z7 : Z = 11 : GOTO 610
520 Y = T3 : Z = 15 : GOTO 610
530 Y = 16 : Z = 25 : GOTO 610
540 Y = 26 : Z = 33 : GOTO 610
550 Y = 34 : Z = 43 : GOTO 610
560 Y = 44 : Z = 52 : GOTO 610
570 Y = 53 : Z = 55 : GOTO 610
580 Y = 56 : Z = 58 : GOTO 610
590 Y = 59 : Z = K6 : GOTO 610
600 Y = 67 : Z = K7
610 FOR T = Y TO Z : IF X > P(T) THEN NEXT T
620 Y = INT(RND(Z1) * Z5) : J$ = P$(Y) : C(I) = T : IF T > K6 THEN J$ = "VE" : N = T - K6
630 IF T = 51 THEN J$ = "KL" : GOTO 670
640 IF T = 33 THEN J$ = "KZ" : GOTO 670
650 IF T = 43 THEN J$ = "KH" : IF RND(Z1) < P1 THEN J$ = "KG" : IF RND(Z1) > P5 THEN J$ = "KM"
660 IF T = 25 THEN J$ = "KP" : IF RND(Z1) > P5 THEN J$ = "KV" : IF RND(Z1) > P5 THEN J$ = "KC"
670 C$(I) = J$ + RIGHT$(STR$(N),Z1) : GOSUB 2920 : GOSUB 2920 : GOSUB 2920
680 PRINT K - I : NEXT I : N = Z1 : PRINT "IT IS 2100 HRS ON" ; D ; " " + D$
690 PRINT "THE CONTEST HAS STARTED" + X$ : GOTO 1050
700 PRINT : IF N >= K THEN 2010
710 IF Q1 = Z0 AND RND(Z1) < P1 THEN 2930
720 IF H1 > T6 OR D >= 21 AND H > T5 THEN PRINT "CONTEST IS OVER" : GOTO 1480
730 INPUT "QRU" ; I$ : IF LEN(I$) < Z2 THEN PRINT "WHAT" + X$ : GOTO 730
740 FOR I = Z0 TO Q4 : IF I$ = LEFT$(Z$(I),LEN(I$)) THEN 760
750 NEXT : FOR I = Z0 TO Q4 - Z1 : PRINT Z$(I), : NEXT : PRINT : GOTO 730
760 IF I > Z8 THEN ON I - Z8 GOTO 1480,1490,1420,1170,1980,3270,1340,930,1750,1730
770 ON I GOTO 840,1040,1090,1140,1240,1300,1350,1450
780 Q6 = Z0 : ON Q1 GOTO 800,1670,1700,1620
790 PRINT "CALL WHOM ?" + X$ : PRINT "TRY TUNING OR PUT OUT A CQ" : GOTO 700
800 IF L(Z7) = Z0 AND RND(Z1) > P5 THEN 1030
810 PRINT "TRY SEND OR REPEAT, DON'T WASTE TIME" ; X$ : GOTO 700
820 IF L(Z6) = Z0 AND RND(Z1) < P1 THEN PRINT "REPEAT PLEASE" : GOTO 700
830 Q1 = Z0 : GOTO 700
840 IF C(P) > K7 THEN PRINT "IN THE LOG ALREADY" : GOTO 700
850 IF Q5 = Z0 THEN PRINT X$ + "WHY DON'T YOU SEND HIM HIS REPORT FIRST" : GOTO 730
860 FOR I = Z0 TO Z7 : IF L(I) = Z0 THEN I = Z1 : GOSUB 1580 : GOTO 700
870 Q7 = Z0 : NEXT : Y = C(P) : N = N + Z1
880 IF Y > K7 THEN Y = Y - B : GOTO 880
890 S(Y) = Z1 : C(P) = C(P) + B : GOSUB 920 : Q1 = Z0 : PRINT "NEXT QSO = " ; N
900 IF Q6 = Z1 AND RND(Z1) > P5 OR RND(Z1) < P1 THEN 930
910 GOTO 700
920 Q5 = Z0 : FOR I = Z0 TO Z7 : L(I) = Z0 : NEXT : RETURN
930 Q6 = Z1 : Y = T6 : GOSUB 1770 : IF Y = Z0 THEN 700
940 IF RND(Z1) < P1 THEN PRINT "FREQUENCY IS IN USE OM" : GOTO 700
950 IF RND(Z1) < P1 OR B = B4 AND H >= T5 AND RND(Z1) > P5 THEN PRINT "QRM" : GOTO 700
960 IF Q7 = Z0 THEN GOSUB 1970
970 IF Q7 = Z1 AND Q1 = Z1 THEN N1 = N1 + Z1
980 GOSUB 1900 : Q1 = Z1 : PRINT A$ ; E$ ; C$(P) : L(Z2) = Z1
990 IF C(P) > K7 AND Q6 = Z1 AND RND(Z1) < Z2 * P1 THEN 700
1000 IF C(P) > K7 AND Q6 = Z1 THEN 1020
1010 IF C(P) > K7 AND RND(Z1) > P5 THEN PRINT "WE'VE WORKED OM !" : GOTO 700
1020 IF RND(Z1) > P5 THEN PRINT : GOTO 700
1030 J$ = A$ : GOSUB 1860 : PRINT : GOTO 700
1040 PRINT Z$(Z2) ; " = " ; B$(INT(B - Z1) / B1)
1050 INPUT "WHICH BAND " ; I$ : FOR I = Z0 TO Z4 : IF I$ = B$(I) THEN 1070
1060 NEXT : FOR I = Z0 TO Z4 : PRINT B$(I), : NEXT : PRINT : GOTO 1050
1070 IF B = (Z1 + I) * B1 THEN 700
1080 B = (Z1 + I) * B1 : GOSUB 920 : GOTO 700
1090 IF L(Z2) = Z0 AND L(Z5) = Z0 THEN PRINT "CHECK WHAT" : GOTO 700
1100 IF C(P) >= B1 THEN PRINT C$(P) ; " WORKED ON " ; B$(INT(C(P) / B1) - Z1) : GOTO 700
1110 Y = C(P) : IF Y >= B1 THEN Y = Y - B1 : GOTO 1110
1120 IF L(Z5) = Z1 THEN PRINT "SECTION " ; : IF S(Y) = Z1 THEN PRINT "WORKED" : GOTO 700
1130 PRINT "NOT WORKED YET" : GOTO 700
1140 GOSUB 1150 : GOTO 700
1150 PRINT Z$(Z4) ; : PRINT TAB(T6) ; D ; D$ : PRINT Z$(Z2) ; : PRINT TAB(T6) ; 
1160 PRINT B$(INT(B/B1-Z1))
1170 PRINT "GMT. TIME" ; : PRINT TAB(T6) ; : PRINT H ; " HRS",M ; " MIN"
1180 PRINT "ELAPSED TIME" ; : PRINT TAB(T6) ; H1 ; " HRS",M1 ; " MIN" : IF I = T3 THEN 700
1190 PRINT "QSO'S" ; : PRINT TAB(T6) ; N - Z1 : PRINT M$(Z5) + "S WORKED" ; 
1200 PRINT TAB(T6) ; : Y = Z0 : FOR J = Z0 TO K7 : IF S(J) = Z1 THEN Y = Y + Z1
1210 NEXT : PRINT Y : PRINT "SCORE" ; : PRINT TAB(T6) ; Z2 * (N - Z1) * Y : PRINT "RATE" ; 
1220 IF H1 = Z0 AND M1 = Z0 THEN PRINT TAB(T6) ; " - - - " : RETURN
1230 PRINT TAB(T6) ; (N - Z1) * T7 / (H1 * T7 + M1) ; "QSO'S PER HOUR" : RETURN
1240 INPUT "HRS" ; X : INPUT "MIN" ; Y : IF X = Z0 AND Y < 15 THEN GOSUB 1580 : GOTO 1240
1250 IF X >= T6 OR Y >= T7 THEN GOSUB 1290 : IF LEFT$(I$,Z1) <> "Y" THEN 1240
1260 M = M + Y : IF M >= T7 THEN M = M - T7 : H = H + Z1
1270 H = H + X : IF H >= T6 THEN H = H - T6 : D = D + 1
1280 GOSUB 1150 : GOSUB 920 : Q1 = Z0 : GOTO 700
1290 INPUT "ARE YOU SURE YOU MEANT THAT" ; I$ : RETURN
1300 IF L(Z7) = Z1 THEN PRINT "73, SEE YOU LATER" : GOTO 700
1310 IF RND(Z1) > P1 THEN L(Z7) = Z1 : PRINT "ROGER" : GOTO 700
1320 IF RND(Z1) >= P1 THEN PRINT "DO YOU QSL ?"
1330 GOTO 700
1340 GOSUB 3300 : GOTO 700
1350 IF L(Z2) = Z0 OR Q1 = Z0 THEN PRINT X$ + "TO WHOM" : GOTO 700
1360 IF Q1 <> Z1 THEN PRINT "TUT TUT - CALL HIM FIRST" ; X$ : GOTO 700
1370 PRINT L$(Z2) ; " UR" ; N ; : PRINT "A" ; E$ ; A$ ; : PRINT " " ; K$ ; " " ; F$ ; " MD K"
1380 IF RND(Z1) < P1 THEN PRINT A$ ; " PLEASE REPEAT" ; E$ ; C$(P) : GOTO 700
1390 Q5 = Z1 : L(Z6) = Z1 : IF L(Z7) = Z1 THEN PRINT "QSL" : GOTO 700
1400 IF RND(Z1) > P5 THEN J$ = A$ : GOSUB 1860 : PRINT "DO YOU QSL ?"
1410 GOTO 700
1420 FOR I = Z0 TO Z5 : IF L(I) = Z1 THEN NEXT : PRINT " GOT IT ALL" : GOTO 700
1430 PRINT "STILL NEED", : FOR J = I TO Z5 : IF L(J) = Z0 THEN PRINT " " ; M$(J) ; 
1440 NEXT : PRINT : GOTO 700
1450 IF Q1 <> Z1 THEN PRINT "CALL HIM FIRST" + X$ : GOTO 700
1460 IF RND(Z1) > P1 THEN J$ = A$ : GOSUB 1860 : GOTO 700
1470 PRINT "SORRY OM, QRM ... TRY AGAIN" : GOTO 700
1480 PRINT "FINAL " ; : GOSUB 1150 : GOTO 3500
1490 IF B < 400 AND H > T4 AND RND(Z1) < P1 THEN GOSUB 3110 : GOTO 700
1500 IF RND(Z1) >= P5 + P1 AND B = B4 AND (H >= T5 OR H < Z6) THEN GOSUB 3170 : GOTO 700
1510 GOSUB 920 : Q1 = Z0 : Y = T7 : GOSUB 1770 : IF Y = Z0 THEN 700
1520 L(Z2) = Z1 : Q1 = INT(RND(Z1) * Z3) + Z2 : ON Q1 GOTO 1530,1540,1550
1530 PRINT "QRZ" ; E$ ; C$(P) : GOTO 700
1540 FOR T = 0 TO INT(RND(1) * 3) : PRINT "CQ CQ CQ" ; E$ ; C$(P) ; " " ; : NEXT : PRINT "K" : GOTO 700
1550 GOSUB 1810 : PRINT C$(K) ; E$ ; C$(P) : IF RND(Z1) > P5 THEN 700
1560 Q7 = Z1 : GOSUB 1970
1570 GOSUB 1900 : J$ = C$(K) : GOSUB 1860 : GOTO 700
1580 PRINT "THAT'S AGAINST THE RULES" : PRINT X$
1590 IF I = Z1 THEN PRINT "QSO NOT COMPLETED"
1600 IF I = Z5 THEN PRINT "15 MINUTE MINIMUM"
1610 RETURN
1620 IF RND(Z1) > P5 THEN 1850
1630 IF Q7 = Z1 AND RND(Z1) > P5 THEN 970
1640 IF RND(Z1) > P5 THEN Q1 = Z2 : GOTO 1530
1650 IF RND(Z1) < P5 THEN PRINT "PLEASE, I'M IN QSO" : GOTO 700
1660 PRINT C$(K) ; E$ ; C$(P) ; " SORRY QRM, REPEAT" : GOTO 700
1670 IF RND(Z1) > P5 THEN 1530
1680 IF RND(Z1) < P1 THEN Q1 = Z3 : GOTO 1540
1690 Q1 = Z1 : GOTO 960
1700 IF RND(Z1) > P5 THEN 1540
1710 IF RND(Z1) > P5 THEN Q1 = Z2 : GOTO 1530
1720 Q1 = Z1 : GOTO 960
1730 FOR J = Z0 TO K - Z1 : PRINT C$(J) ; : IF C(J) > K7 THEN PRINT " * " ; 
1740 PRINT , : NEXT : GOTO 700
1750 FOR J = Z0 TO K - Z1 : IF C(J) > K7 THEN PRINT C$(J),
1760 NEXT : GOTO 700
1770 Y = RND(Z1) * Y + Z4 : FOR T = Z0 TO Z2 : GOSUB 2860 : GOSUB 2820 : GOSUB 2030
1780 IF Y = Z0 OR RND(Z1) < P1 THEN NEXT : Y = Z0
1790 IF Y = Z1 THEN GOSUB 1900
1800 RETURN
1810 I = K : T = INT(RND(Z1) * Z3 + Z2) : J$ = P$(INT(RND(Z1) * Z3))
1820 C$(I) = J$ + RIGHT$(STR$(T),Z1) : GOSUB 2920 : GOSUB 2920 : GOSUB 2920
1830 IF C$(I) = A$ THEN 1810
1840 RETURN
1850 GOSUB 1810 : J$ = C$(K) : GOSUB 1860 : N1 = N1 + Z1 : Q7 = Z1 : GOTO 700
1860 L$(Z0) = STR$(N1) : L(Z7) = Z1 : PRINT J$ ; " UR" ; : 
1870 FOR J = Z0 TO Z5 : IF L(J) = Z1 OR RND(Z1) >= P1 THEN L(J) = Z1 : PRINT " " ; L$(J) ; : GOTO 1890
1880 PRINT R$ ; 
1890 NEXT : PRINT : RETURN
1900 FOR J = Z1 TO 26 : IF RIGHT$(C$(P),Z1) <> MID$(Q$,J,Z1) THEN NEXT 
1910 L$(Z1) = "A" : IF J >= T3 THEN L$(Z1) = "B"
1920 Y = Z0 : FOR J = Z1 TO Z3 : Y = Y + ASC(MID$(RIGHT$(C$(P),Z3),J,Z1)) : NEXT 
1930 L$(Z4) = STR$(INT(Y / Z2 - 57)) : L$(Z0) = STR$(N1)
1940 L$(Z2) = C$(P) : L$(Z3) = K$ : Y = C(P)
1950 IF Y > K7 THEN Y = Y - B1 : GOTO 1950
1960 L$(Z5) = S$(Y) : RETURN
1970 N1 = Z1 + INT(N * T3 * P1 * RND(Z1)) : RETURN
1980 IF RND(Z1) < P1 THEN 700
1990 IF RND(Z1) > P5 THEN PRINT "SORRY"
2000 Q1 = Z0 : GOTO 900
2010 PRINT "ANTENNA BLEW DOWN IN WIND"
2020 PRINT " NO WAY  TO FIX IT - QRT" : GOTO 1480
2030 IF C(P) < B1 THEN 2070
2040 X = C(P)
2050 C(P) = C(P) - B1 : IF C(P) > B1 THEN 2050
2060 GOSUB 2070 : C(P) = X : RETURN
2070 Y = 0 : IF C(P) = 14 OR C(P) = T6 THEN 2810
2080 IF C(P) < Z8 THEN 2230
2090 IF C(P) < T3 THEN 2280
2100 IF C(P) < T4 THEN 2310
2110 IF C(P) = 25 THEN 2710
2120 IF C(P) < 25 THEN 2340
2130 IF C(P) = 33 THEN 2750
2140 IF C(P) < 33 THEN 2380
2150 IF C(P) = 43 THEN 2640
2160 IF C(P) < 43 THEN 2420
2170 IF C(P) = 51 THEN 2640
2180 IF C(P) < 53 THEN 2480
2190 IF C(P) < 56 THEN 2530
2200 IF C(P) < 59 THEN 2550
2210 IF C(P) < 67 THEN 2580
2220 ON C(P) - 67 GOTO 2280,2530,2550,2580,2480,2480,2480
2230 IF B = B4 OR B = B5 AND H < T3 OR B = B3 AND H >= T5 AND RND(Z1) > P5 THEN 2810
2240 IF B = B3 AND (H < T5 AND H >= T3 OR RND(Z1) > P5 AND H >= Z8) THEN 2810
2250 IF B = B2 AND (H >= T5 OR H >= Z8 AND H < T3) AND RND(Z1) < P1 THEN 2810
2260 IF B = B1 AND (H >= T3 AND Q = Z2 AND H < T5 OR H >= T5 AND RND(Z1) > P5) THEN 2810
2270 RETURN
2280 IF B = B3 AND (H >= Z8 AND H < T3 OR H >= T5) AND RND(Z1) > P5 THEN 2810
2290 IF B >= B4 OR B = B1 AND Q = Z1 AND RND(Z1) < P5 AND H < T4 AND H >= T3 THEN 2810
2300 RETURN
2310 IF B = B5 OR B = B4 AND H < Z8 AND RND(Z1) > P5 THEN 2810
2320 IF B = B4 AND (H >= T5 OR H >= Z8 AND H < T3) THEN 2810
2330 RETURN
2340 IF B = B4 OR B = B3 AND H >= Z8 OR B = B1 AND Q = Z3 AND H >= T3 AND RND(Z1) > P5 THEN 2810
2350 IF B = B2 AND H < T5 AND H >= T3 AND RND(Z1) > P5 THEN 2810
2360 IF B = B5 AND H < T4 OR (H >= T5 OR H < T3) AND RND(Z1) > P5 THEN 2810
2370 RETURN
2380 IF B < B4 AND H >= T3 AND H < T5 OR B = B4 AND H < Z8 THEN 2810
2390 IF B = B5 AND (H < Z8 AND H >= Z4 OR H < Z4 AND RND(Z1) > P5) THEN 2810
2400 IF RND(Z1) > P5 AND (H >= T5 OR H >= Z8 AND H < T3) THEN 2810
2410 RETURN
2420 IF H < Z8 AND H >= T3 AND RND(Z1) < P1 THEN 2810
2430 IF B < B4 AND H >= T3 AND H < T5 OR B >= B3 AND H < Z8 AND H >= 4 THEN 2810
2440 IF H >= T5 AND B < B3 AND RND(Z1) > P5 THEN 2810
2450 IF H >= T5 AND (B = B3 OR B = B4 AND RND(Z1) < P1) THEN 2810
2460 IF H < Z4 AND (B = B4 OR B = B5 AND RND(Z1) > P5) THEN 2810
2470 RETURN
2480 IF B < B4 AND H < T5 AND H >= T3 THEN 2810
2490 IF H >= T5 AND B > B1 AND B < B5 AND RND(Z1) > P5 THEN 2810
2500 IF B = B4 AND (H < Z8 OR H >= T5 AND RND(Z1) > P5) THEN 2810
2510 IF B = B5 AND (H < Z8 AND H >= Z4 OR H < Z4 AND RND(Z1) > P5) THEN 2810
2520 RETURN
2530 IF B = B5 OR B = B4 AND (H >= Z8 OR RND(Z1) > P5) THEN 2810
2540 RETURN
2550 IF B = B4 OR B = B5 AND (H < Z8 OR RND(Z1) > P5 AND H < T3 OR H >= T5) THEN 2810
2560 IF B = B3 AND H >= T3 AND H < T5 THEN 2810
2570 RETURN
2580 IF B > B3 AND H < Z8 OR H < T3 AND RND(Z1) > P5 THEN 2810
2590 IF B = B1 AND Q = Z5 AND H >= T3 AND RND(Z1) > P5 THEN 2810
2600 IF B = B2 AND H < T5 AND H >= T3 AND RND(Z1) > P5 THEN 2810
2610 IF B = B3 AND (H < T5 AND H >= T3 OR H >= T5 AND RND(Z1) > P5) THEN 2810
2620 IF H >= T5 AND (B = B4 AND RND(Z1) > P5 OR B = B5 AND RND(Z1) < P1) THEN 2810
2630 RETURN
2640 IF B < B4 AND H < T5 AND H >= T4 THEN 2810
2650 IF B = B3 AND (H >= T3 AND RND(Z1) > P5 OR H >= Z8 AND H < T3 AND RND(Z1) < P1) THEN 2810
2660 IF B = B1 AND H >= T3 AND (H < T5 OR RND(Z1) > P5) THEN 2810
2670 IF B = B2 AND (H < T4 AND H >= T3 AND RND(Z1) > P5 OR H >= T5 AND RND(Z1) < P1) THEN 2810
2680 IF B = B4 AND H < Z8 AND (H >= Z4 OR RND(Z1) > P5) THEN 2810
2690 IF B = B5 AND H >= Z4 AND H < Z8 AND RND(Z1) > P5 THEN 2810
2700 RETURN
2710 IF B = B5 AND H < Z8 OR B < B4 AND H >= Z8 AND H < T5 THEN 2810
2720 IF H >= T5 AND (B = B1 AND RND(Z1) > P5 OR B = B2 OR B = B3) THEN 2810
2730 IF B = B4 AND (H >= Z4 AND H < Z8 OR H < Z4 AND RND(Z1) < P1) THEN 2810
2740 RETURN
2750 IF B < B3 AND H < T5 AND (H >= T3 AND H < T4 OR H >= Z8 AND RND(Z1) > P5) THEN 2810
2760 IF H >= T5 AND (B = B2 OR B = B4) AND RND(Z1) > P5 THEN 2810
2770 IF H >= T4 AND B = B3 OR B = B4 AND H < Z8 THEN 2810
2780 IF B = B4 AND RND(Z1) > P5 AND H < T3 THEN 2810
2790 IF B = B5 AND H < Z8 AND (H >= Z4 OR RND(Z1) > P5) THEN 2810
2800 RETURN
2810 Y = 1 : RETURN
2820 IF I = Z0 THEN P = INT(RND(Z1) * K)
2830 P = P + INT(RND(Z1) * Z9) : IF P >= K THEN P = P - K
2840 IF B = B1 AND RND(Z1) > P1 * P1 THEN Q = Q + INT(RND(Z1) + Z4) : IF Q > Z5 THEN Q = Q - Z5
2850 RETURN
2860 S1 = S1 + Y : IF S1 < T7 THEN RETURN
2870 S1 = S1 - T7 : M1 = M1 + Z1 : M = M + Z1 : IF S1 >= T7 THEN 2870
2880 IF M >= T7 THEN M = M - T7 : H = H + Z1 : GOTO 2880
2890 IF M1 >= T7 THEN M1 = M1 - T7 : H1 = H1 + Z1 : GOTO 2890
2900 IF H < T6 THEN RETURN
2910 H = H - T6 : D = D + Z1 : RETURN
2920 I$ = MID$(Q$,INT(RND(Z1) * 26) + Z1,Z1) : C$(I) = C$(I) + I$ : RETURN
2930 IF RND(Z1) > P1 * Z2 THEN 700
2940 X = INT(RND(Z1) * 10) + Z1
2950 ON X GOTO 2960,2970,2980,2960,2960,2960,2960,2960,3070,3020,2960
2960 PRINT "TIMEOUT IN THE BATHROOM" : Y = T5 : GOTO 2990
2970 PRINT "TIMEOUT  TO CLEAR UP SPILT COFFEE" : Y = Z5 : GOTO 2990
2980 PRINT "KIDS ARE FIGHTING..TIMEOUT" : Y = T4
2990 Y = INT(RND(Z1) * Y) + Z3 : PRINT "OFF THE AIR FOR " ; Y ; " MIN"
3000 IF Y > 14 THEN X = Z0 : GOTO 1260
3010 Y = Y * T7 : GOSUB 2860 : GOTO 700
3020 IF RND(Z1) * 10 < P5 THEN 2010
3030 PRINT "POWER LINE BLACKOUT" : X = INT(RND(Z1) * Z5) : Y = INT(RND(Z1) * T6) + Z8
3040 PRINT "POWER CAME BACK ON AFTER " ; X ; " HRS",Y," MIN"
3050 IF X = Z0 AND Y < 15 THEN Y =  Y * T7 : GOSUB 2860 : GOTO 700
3060 GOTO 1260
3070 PRINT "FINAL TUBES BLEW OUT"
3080 IF H < T3 THEN PRINT "WHERE ARE YOU GOING  TO GET SPARES AT THIS TIME"
3090 PRINT "LUCKY YOU, SPARES ARE  TO HAND "
3100 PRINT "REPLACING THEM NOW" : Y = T7 : GOTO 2990
3110 I$ = "YV4XYZ" : IF RND(Z1) > P5 THEN I$ = "HK3ZZZ"
3120 J$ = "MIAMI" : IF RND(Z1) > P5 THEN J$ = "LOS ANGELES"
3130 PRINT "CQ CQ CQ DE " ; I$
3140 PRINT "THIS IS " ; I$ ; " LOOKING FOR A PHONE PATCH IN TO " ; J$
3150 IF RND(Z1) < P5 - P1 THEN 3140
3160 RETURN
3170 X = INT(RND(Z1) * Z4) : IF RND(Z1) > P5 THEN 3190
3180 PRINT "YOU ARE LISTENING  TO " ; : ON X + Z1 GOTO 3200,3210,3220,3230
3190 PRINT "THIS IS " ; : ON X GOTO 3210,3220,3230
3200 PRINT "RADIO MOSCOW" : GOTO 3240
3210 PRINT "RADIO PEKING" : GOTO 3240
3220 PRINT "RADIO ALBANIA" : GOTO 3240
3230 PRINT "THE BBC" : IF RND(Z1) < P1 * Z2 THEN PRINT "THIS IS RADIO NEWSREEL" : RETURN
3240 IF RND(Z1) > P5 THEN PRINT "A NEWS BROADCAST FOLLOWS" : RETURN
3250 IF RND(Z1) > P5 THEN PRINT "YOU HAVE BEEN LISTENING  TO A COMMENTARY ON THE NEWS"
3260 RETURN
3270 PRINT Z$(14) + "S NEEDED" : J = K7 : FOR I = Z0 TO K7
3280 IF S(I) = Z0 THEN PRINT S$(I), : J = J - Z1
3290 NEXT : PRINT : PRINT J + Z1,Z$(14) + "S WORKED" : PRINT : GOTO 700
3300 PRINT Z$(Z0),"CALL OTHER STATION"
3310 PRINT Z$(Z1),"ENTER CONTACT IN LOG"
3320 PRINT Z$(Z2),"CHANGE BANDS"
3330 PRINT Z$(Z3),"CHECK  TO SEE IF WORKED"
3340 PRINT Z$(Z4),"SEE HOW WELL YOU ARE DOING"
3350 PRINT Z$(Z5),"TAKE A BREAK (TIMEOUT)"
3360 PRINT Z$(Z6),"CONFIRM RECEPTION OF CONTEST DATA "
3370 PRINT Z$(Z7),"SEND YOUR DATA  TO OTHER STATION"
3380 PRINT Z$(Z8),"REQUEST REPEAT OF OTHER STATION'S DATA "
3390 PRINT Z$(Z9),"GIVE UP AND SWITCH OFF EQUIPMENT"
3400 PRINT Z$(10),"TUNE ACROSS BAND "
3410 PRINT Z$(11),"DETERMINE WHICH DATA ARE MISSING FROM REPORT"
3420 PRINT Z$(T3),"LOOK AT TIME OF DAY"
3430 PRINT Z$(13),"TELL OTHER STATION THAT YOU HAVE WORKED BEFORE"
3440 PRINT Z$(14),"LIST SECTIONS STILL NEEDED"
3450 PRINT Z$(15),"RECEIVE SUMMARY OF INSTRUCTIONS"
3460 PRINT Z$(T4),"CALL " ; Z$(T4)
3470 PRINT Z$(17),"LIST OF STATIONS WORKED (UNSORTED)"
3480 PRINT "YOU MAY TYPE FIRST TWO LETTERS FOR ALL ENTRIES, EXCEPT",
3490 PRINT Z$(14) ; " (TYPE 3)" : RETURN
3500 PRINT "HOPE YOU ENJOYED THE CONTEST"
```
{% endraw %}

## CQSS.DOC

{% raw %}
```
        PC-HAM CQSS.DOC Version 3.0 PAGE 1


                               PC-HAM Version 3.0

           G3ZCZ AMATEUR RADIO SWEEPSTAKES SIMULATION GAME VERSION 3.0
         
              (C) Copyright 1985, 1986, 1987 - All Rights Reserved 

                               By Joe Kasser G3ZCZ
                                    POB 3419,
                                  Silver Spring,
                                 Md., 20901, USA.

        CQSS.BAS  is part of the PC-HAM Software package,  a set of  DATA 
        Processing Amateur Radio programs for the user of a microcomputer 
        in Amateur Radio.  The BASIC language programs may or may not  be 
        described  in  or  be based on programs described  in  the  book, 
        SOFTWARE  FOR  AMATEUR  RADIO  written  by  Joe  Kasser,   G3ZCZ, 
        published  by TAB Books (Number 1560),  Blue Ridge  Summit,  Pa., 
        17214. The DBASE2 programs perform database operations on logbook 
        information.

             PC-HAM is written and supported by Joe Kasser, G3ZCZ.

        The program is distributed as a Shareware product. You may freely 
        copy  and  share the product with your  friends,  associates  and 
        other radio hams. If you decide to use the product, you are asked 
        to  become  a  registered  user  by sending  a  QSL  card  and  a 
        contribution  to the author (suggested amount of $36.50 (ie. half 
        of  73) or equivalent in foreign currency (See registration  form 
        below).

        The  contribution covers the cost of distribution of the  updated 
        disk,  and  supports the continual development of  "Software  for 
        Amateur  Radio".   Upon  receipt of your contribution,  you  will 
        receive  one free update disk ),  mail (electronic  and  regular) 
        support,  and  notice of further releases.   The update disk will 
        contain  any new versions of the software on this disk  plus  new 
        software,  accompanying  the  series of articles currently  being 
        written  on  the  applications of  data  processing  concepts  of 
        microcomputers to amateur radio.

        Under  no  circumstances may this product be sold or  distributed 
        with  another product without the express written  permission  of 
        Joe Kasser, G3ZCZ.  

        Joe  Kasser,  G3ZCZ  will only support unmodified copies of  this 
        software.   Your comments and suggestions for changes are however 
        welcome.   If  you  are  the first to suggest a  change  that  is 
        implemented,  you  will be sent a complimentary copy of the  disk 
        with the change incorporated.

        CQSS.BAS  is a game (simulation).  It is a simulation of the ARRL 
        Sweepstakes contest for a station located in Maryland (G3ZCZ/W3).  
        It  incorporates a propagation model so that the contacts on  any 
        band  at any time of the day will be relatively  realistic.   The 
        premise  behind  the  simulation  and  the  program  itself   are 








        PC-HAM CQSS.DOC Version 3.0 PAGE 2


        described  in chapter 5 of the book.  This version is an  updated 
        version  of the listing given in Book,  in Figure 5-28.   If  you 
        don't have a copy of the book, purchase it, or ask for it at your 
        local library,  if you still can't get it, then load the program, 
        set  the  CAPS LOCK key to CAPS,  and follow the instructions  to 
        initialize the game.   If at any time you don't know what to type 
        in, ask for HELP.

        The  initialization part of the program computes the details  for 
        1000 other simulated calls before starting the game.   It is done 
        in  this manner for two reasons,  the first is that this way  all 
        the  calls  are  different  each time the  game  is  played,  and 
        secondly  the  program  was first written in a  non  floppy  disk 
        environment  in which the calls of the simulated  stations  could 
        not  be computed once and then downloaded each time the game  was 
        to  be played.    If enough people request it,  the game will  be 
        updated to use a disk file for those calls.

        Once the game starts, your choice of things to do is as follows

                     BAND      CHANGE BANDS
                     BREAK     TAKE A BREAK (TIMEOUT)
                     CALL      CALL OTHER STATION
                     CHECK     CHECK  TO SEE IF WORKED
                     CQ        CALL CQ
                     DATA      DETERMINE  WHICH  DATA ARE  MISSING  FROM 
                               REPORT
                     DUPLICATE TELL  OTHER STATION THAT YOU HAVE  WORKED 
                               BEFORE
                     HELP      RECEIVE SUMMARY OF INSTRUCTIONS
                     LOG       ENTER CONTACT IN LOG
                     QRT       GIVE UP AND SWITCH OFF EQUIPMENT
                     QSL       CONFIRM RECEPTION OF CONTEST DATA 
                     REPEAT    REQUEST REPEAT OF OTHER STATION'S DATA 
                     SECTION   LIST SECTIONS STILL NEEDED
                     SEND      SEND YOUR DATA  TO OTHER STATION
                     STATUS    SEE HOW WELL YOU ARE DOING
                     TIME      LOOK AT TIME OF DAY
                     TUNE      TUNE ACROSS BAND 
                     WORKED    LIST OF STATIONS WORKED (UNSORTED)

                               You  may  type the first two letters  for 
                               any  choice  except for  SECTION   (which 
                               needs 3). 'SE' is assumed to be "SEND".




















```
{% endraw %}

## DISK.DOC

{% raw %}
```
PC-HAM 3.0 The following files are present on this disk

ADVERT         Advert for PK232COM Packet Radio TNC Controller.
CONTEST  ARC   Contest logging/duping program, needs BASIC.
CQSS     ARC   Sweepstakes Contest simulation or game, needs BASIC.
LOGBOOK  ARC   dBASE3 super smart LOGing package, many features.
PKX35A35 EXE   ARChive utility (shareware) package.
REGISTER ME    Registration form for PC-HAM.
READ     ME    READ THIS FILE.
SOFT4HAM ARC   Source code listings from, Software in Amateur Radio.
WHATSON  ARC   MiniMuf HF propagation predictions, needs BASIC.


```
{% endraw %}

## FILE0562.TXT

{% raw %}
```
Disk No:  562
Program Title:  PC-HAM version 3.0
PC-SIG version:  2.1

PC-HAM is a set of amateur radio database programs to use with a
microcomputer in amateur radio it is based, in part, on programs
described in, SOFTWARE FOR AMATEUR RADIO, by Joe Kasser (G3ZCZ) and
published by TAB Books.

PC-HAM contains several features that are invaluable to any amateur
radio operator with a computer.  Some of the program's capabilities
include:

* Display/print your QSO's sorted by call-sign in alphanumerical order.
* Search for and display all QSO's with a specified prefix.
* Generate your DXCC status automatically.
* Update or keep award records directly from the log entries.
* Analyze contest QSO's for duplicates and scoring contacts.
* Automatically QSL 100% (after a contest or DX-Pedition) to all stations
  worked for one contact on each of 5 bands.  QSL labels will not be
  printed for duplicate contacts on any band.

Usage:  Computerizing Amateur Radio Operations.

Special Requirements:  dBASEIII is required to use the Logbook Package.

How to Start:  Type GO (press enter).

Suggested Registration:  $36.50

File Descriptions:

ADVERT        Advert for PK232COM Packet Radio TNC Controller.
CONTEST  ARC  Contest logging/duping program, needs BASIC.
CQSS     ARC  Sweepstakes Contest simulation or game, needs BASIC.
DISK     DOC  File listings.
LOGBOOK  ARC  dBASE3 super smart LOGing package, many features.
PKX35A35 EXE  ARChive utility (shareware) package.
READ     ME   READ THIS FILE.
REGISTER ME   Registration form for PC-HAM.
SOFT4HAM ARC  Source code listings from, Software in Amateur Radio.
WHATSON  ARC  MiniMuf HF propagation predictions, needs BASIC.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk #562 PC-HAM version 3.0  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ For instruction on unarchiving this disk, type README (press enter)     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LOGBOOK.DOC

{% raw %}
```
        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 1


                               PC-HAM Version 3.0

                 G3ZCZ AMATEUR RADIO LOGBOOK PACKAGE VERSION 3.0
         
                  (C) Copyright 1985, 1986 - All Rights Reserved 

                               By Joe Kasser G3ZCZ
                                    POB 3419,
                                  Silver Spring,
                                 Md., 20901, USA.

        LOGBOOK is the main program in  PC-HAM,  a set of DATA Processing 
        Amateur Radio programs for the user of a microcomputer in Amateur 
        Radio. The BASIC language programs may or may not be described in 
        or  be  based  on programs described in the  book,  SOFTWARE  FOR 
        AMATEUR  RADIO written by Joe Kasser,  G3ZCZ,  published  by  TAB 
        Books (Number 1560),  Blue Ridge Summit,  Pa.,  17214. The DBASE3 
        programs perform database operations on logbook information.

             PC-HAM is written and supported by Joe Kasser, G3ZCZ.

        The program is distributed as a Shareware product. You may freely 
        copy  and  share the product with your  friends,  associates  and 
        other radio hams. If you decide to use the product, you are asked 
        to  become a registered user by sending  a QSL card and a contri-
        bution   to the author (suggested amount of $36.50 (ie.  half  of 
        73)  or  equivalent in foreign currency  (See  registration  form 
        below).

        The  contribution covers the cost of distribution of the  updated 
        disk,  and  supports  the continual development of "Software  for 
        Amateur  Radio".   Upon receipt of your  contribution,  you  will 
        receive  one  free update disk ),  mail (electronic and  regular) 
        support,  and notice of further releases.   The update disk  will 
        contain  any new versions of the software on this disk  plus  new 
        software,  accompanying  the  series of articles currently  being 
        written on the applications of data processing concepts of micro-
        computers to amateur radio.

        Under  no  circumstances may this product be sold or  distributed 
        with  another product without the express written  permission  of 
        Joe Kasser, G3ZCZ.  

        Joe  Kasser,  G3ZCZ  will only support unmodified copies of  this 
        software.   Your comments and suggestions for changes are however 
        welcome.   If  you  are  the first to suggest a  change  that  is 
        implemented,  you  will be sent a complimentary copy of the  disk 
        with the change incorporated.















        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 2


                                    TABLE OF CONTENTS

        1.0  INTRODUCTION

        2.0  LOG ENTRIES

        3.0  INSTALLATION

        4.0  STARTING THE LOGBOOK PROGRAM

        5.0  DISPLAY FILES ON DISK DRIVE      

        6.0  LOG FUNCTIONS                    

             6.1  CHANGE LOG FILE                             
             6.2  PRINT LOG PAGES                             
             6.3  PRINT LOG INDEXED BY CALL SIGN              
             6.4  APPEND ENTRIES                              
                  6.4.1     DATE      
                  6.4.2     TIME     
                  6.4.3     BAND     
                  6.4.4     CALL      
                            6.4.4.1   Calls of Reciprocal Operators
                  6.4.5     RX        
                  6.4.6     TX        
                  6.4.7     MODE      
                  6.4.8     POWER     
                  6.4.9     QSLSENT 
                  6.4.10    QSLRX     
                  6.4.11    COMMENTS 
             6.5  CREATE NEW LOGBOOK DATABASE                 
             6.6  HUNT FOR PREFIX/CALL IN LOG                 
             6.7  SUMMARIZE LOG                               
                  6.7.1     TOTAL NUMBER OF CONTACTS        
                  6.7.2     QSL CARDS SENT DIRECT            
                  6.7.3     QSL CARDS SENT VIA BUREAU        
                  6.7.4     QSL CARDS SENT VIA MANAGER       
                  6.7.5     QSL CARDS SENT                   
                  6.7.6     QSL CARDS RECEIVED               
                  6.7.7     QSL CARDS OWED                   
                  6.7.8     QSL CARDS EXCHANGED              
                  6.7.9     The remaining data.
             6.8  UPDATE QSL STATUS                           
             6.9  DISPLAY ENTRIES FOR ONE DAY                 
             6.10 DISPLAY LAST 20 ENTRIES IN THE LOGBOOK
             6.11 DISPLAY BLOCK OF 20 ENTRIES
             6.12 DETERMINE UNIQUE CONTACTS
             6.13 TRANSFER SINGLE PREFIX TO NEW DATABASE
             6.15 DISPLAY FILES ON DISK DRIVE
             6.16 QUIT THIS MENU                              













        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 3


        7.0  AWARDS

             7.1  WAZ           
                  7.1.1      UPDATE WAZ RECORDS         
                  7.1.2      CREATE A NEW WAZ DATABASE  
                  7.1.3      CHANGE WAZ DATABASE        
                  7.1.4      CHANGE LOGBOOK             
                  7.1.5      PRINT WAZ RECORDS          
                  7.1.6      QUIT THIS MENU                    
             7.2  WAS                
                  7.2.1      UPDATE WAS RECORDS                
                  7.2.2      CREATE A NEW WAS DATABASE         
                  7.2.3      PRINT WAS RECORDS                 
                  7.2.4      CHANGE WAS DATABASE               
                  7.2.5      CHANGE LOGBOOK                    
                  7.2.6      DISPLAY FILES ON DISK DRIVE       
                  7.2.7      IMPORT FROM A BASIC WAS DATABASE  
                  7.2.8      QUIT THIS MENU                    
             7.3  DXCC               
                  7.3.1     UPDATE DXCC RECORDS  (Automatic)            
                  7.3.2     UPDATE DXCC RECORDS  (Manual)
                  7.3.3     CREATE A NEW DXCC DATABASE                  
                  7.3.4     CREATE 5BDXCC RECORDS                       
                  7.3.5     PRINT DXCC RECORDS                          
                  7.3.6     ADD PREFIXES TO A DXCC DATABASE             
                  7.3.7     CHANGE DXCC DATABASE                        
                  7.3.8     EDIT PREFIXES IN DXCC RECORD FILE           
                  7.3.9     CHANGE LOGBOOK                              
                  7.3.10    UPDATE SINGLE BAND DXCC RECORD (Automatic)  
                  7.3.11    DISPLAY DATA FOR A PREFIX/COUNTRY
                  7.3.12    DISPLAY FILES ON DISK DRIVE    
                  7.3.13    QUIT THIS MENU                              
             7.4  OBLAST             
                  7.4.1      UPDATE OBLAST RECORDS          
                  7.4.2      CREATE A NEW OBLAST DATABASE   
                  7.4.3      PRINT OBLAST RECORDS           
                  7.4.4      CHANGE OBLAST DATABASE         
                  7.4.5      CHANGE LOGBOOK                 
                  7.4.6      DISPLAY FILES ON DISK DRIVE    
                  7.4.7      QUIT THIS MENU                    
             7.5  GENERAL AWARD      
                  7.5.1      UPDATE AWARD RECORDS         
                  7.5.2      CREATE A NEW AWARD DATABASE  
                  7.5.3      PRINT AWARD RECORDS          
                  7.5.4      CHANGE AWARD DATABASE        
                  7.5.5      CHANGE LOGBOOK               
                  7.5.6      DISPLAY FILES ON DISK DRIVE  
                  7.5.7      QUIT THIS MENU                    
             7.6  LZ60
             7.7  CHANGE LOGBOOK     
             7.8  QUIT THIS MENU                  












        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 4


        8.0  MISCELLANEOUS FUNCTIONS 

             8.1  MANUAL TRANSFER OF DATA TO  CONTEST LOGS
             8.2  APPEND FROM BASIC "LOG" FILE TO "DBF" FILE
             8.3  DISPLAY FILES ON DISK DRIVE
             8.4  DXPEDITION/CONTEST BATCH QSL FUNCTION 
                  8.4.1     Automatically  QSL 100% (after a  contest  or 
                            DX-Pedition).
                  8.4.2     Automatically  QSL to those stations you  owe 
                            cards to.
             8.5  (RE)INDEX LOG DATABASE FILE 
             8.6  CHANGE OFFSET TO UTC
             8.7  CHANGE STATION OPERATOR CALL SIGN
             8.8  CHANGE LOGBOOK (PUT DATA AND INDEX ON SEPARATE DRIVES)

        9.0 POSITION QSL LABELS ON PRINTER

        10.0 BASE STRUCTURES

             10.1  Logbook
             10.2  DXCC
             10.3  WAZ
             10.4  WAS
             10.5  Oblast
             10.6  Generic Award

        11.0 SHAREWARE




































        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 5


                                  1.0  INTRODUCTION

        The PC-HAM Logbook is more than a simple menu driven computerized 
        logbook.   Not only does it store your logbook on a floppy  disk, 
        it allows you to access the data in the logbook in ways that have 
        not been previously possible. 

        The  functions  of  the package are described in detail  in  this 
        document.  Some of the things you can do are.

        *    Display/print your qso's sorted by call sign in Alphanumeric 
             order.

        *    Search for and display all qso's with a specified prefix.

        *    Generate your DXCC status automatically.

        *    Update or Keep award records directly from the log entries.

        *    Analyse contest qso's for duplicates and scoring contacts.

        *    Automatically  QSL 100% (after a contest or DX-Pedition)  to 
             all stations worked for one contact on each of 5 bands.  QSL 
             labels  will  not be printed for duplicate contacts  on  any 
             band.

        The package is written in a programming language called DBASE.  A 
        language  optimized  for  data processing.   This  means  that  a 
        program  laboriously  written  in  BASIC  to  perform  the   same 
        functions  would require many more lines of code than are used in 
        the  modules herein.  It is planned to include a contest  program 
        written  in DBASE in a future Release of  PC-HAM.   This  program 
        will  contain fewer lines of code than the BASIC language program 
        included  on  this  disk while at the same  time  providing  more 
        features.  A computer language is just a tool for instructing the 
        machine  as  what  to  do.   In general  most  any  task  can  be 
        programmed  in most any language.   The reason that there are  so 
        many  computer  languages  is  because   each  is  optimized  for 
        specific applications.

        This  program  was  first written in DBASE2  and  later  updated, 
        improved and converted to DBASE3.

        2.0  LOG ENTRIES

        Each  record in the logbook corresponds to a line in a page of  a 
        conventional  logbook.   Each line in the log contains space  for 
        the following information.

        DATE      Date.
        TIME      Time.
        BAND      Band.
        CALL      Call sign.
        RX        Signal report received.
        TX        Signal report transmitted.








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 6


        MODE      Mode of QSO, eg. SSB,FM.
        POWER     Transmitter power.
        QSLSENT   QSL sent info.  
        QSLRX     QSL rx info. 
        COMMENTS  comments and notes. 

        3.0  INSTALLATION

             Nothing special required, other than backing up the software 
             before you use it, and then at regular intervals.

             If you have a Ramdisk, copy the files from the drive to the 
             ramdisk  and  run the logbook from the  Ramdisk.   It  will 
             execute a lot faster that way.

             If  you  have an AUTOEXEC.BAT file on your  system  you  may 
             modify it to start the logbook automatically.

        4.0  STARTING THE LOGBOOK PROGRAM


                                      WARNING

        IF YOU ARE USING FLOPPY DISKS,  BE CAREFUL WHEN YOU CHANGE DISKS.  
        DO IT ONLY AT THE MENU LEVEL.  YOU CAN DESTROY THE DIRECTORY OF A 
        DISK  IF YOU REMOVE OR CHANGE DISKS AT THE WRONG TIME.   IN OTHER 
        WORDS, OOPS THERE WENT YOUR LOGS.

        If  you  are using a hard disk,  enter the  logbook  subdirectory 
        using the "CD LOGBOOK" DOS command.

        If  you are using a floppy disk system,  start dBASE in the usual 
        way  and  then set the default drive to that which  contains  the 
        logbook diskette. 

        Invoke the logbook by typing the command "DBASE LOGBOOK".

        After a short period of disk activity,  you should see the  DBASE 
        sign  on  message appear and then disappear.  The first time  you 
        invoke  the logbook,  you will be asked to supply your call  sign 
        and your offset to GMT.  Your offset to UTC is the amount of time 
        you  have  to add to the local time to give you the time  in  GMT 
        (ZULU) (see section 8.6).

        You will then be presented with the following screen.


















        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 7


        ---------------------------------------------------------------
                  G3ZCZ LOGGING PACKAGE VERSION 3.0

                       COPYRIGHT (c) 1986, 1987

         Default LOG database is LOG

                  LOG FUNCTIONS                    L
                  AWARDS                           A
                  MISCELLANEOUS FUNCTIONS          M
                  DISPLAY FILES ON DISK DRIVE      F
                  POSITION QSL LABELS ON PRINTER   P
                  





                  QUIT LOG PACKAGE                 *

         QRU      : :
        --------------------------------------------------------------

        This is the top level screen.

        FOR  THIS  MENU AND ALL SUCCESSIVE ONES,  YOU HAVE TO  ENTER  the 
        CAPITAL letter that corresponds to your choice. It is a good idea 
        to  ensure that your CAPS LOCK key is set (to capitals)  at  this 
        time.

        A sample logbook is supplied on the disk.   It is called FIELD85.  
        It  is  an  extract from a real log.   It is suggested  that  you 
        practise  the log functions using that logbook  first,  and  then 
        create your own logbook.

        5.0  DISPLAY FILES ON DISK DRIVE      

        Should you choose to display the files on  a disk drive, you will 
        be presented with a list of files.  A typical display might be as 
        shown below.

        -----------------------------------------------------------
        DATABASE FILES   # RCDS    LAST UPDATE
        AWARD    DBF     00000     05/08/86
        DXCC     DBF     00273     05/15/86
        LOG      DBF     00000     05/02/86
        OBLAST   DBF     00000     01/01/80
        WAS      DBF     00050     05/01/86
        WAZ      DBF     00000     10/18/85
        FIELD85  DBF     00159     05/19/86


        Waiting
        -----------------------------------------------------------









        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 8



        Note  that the 'Waiting' message shows up a lot in this  package.  
        It  is  telling you that the computer has paused to let you  read 
        the screen.   When you have finished reading the screen,  let the 
        computer know by depressing the 'ENTER' KEY.


        6.0  LOG FUNCTIONS                    

        If  you  select  the  Log functions,  after  a  few  seconds  the 
        following menu will be displayed.

        -----------------------------------------------------------------
                   G3ZCZ LOGBOOK PACKAGE VERSION 3.0

          CURRENT LOGBOOK IS  LOG

          CHANGE LOG FILE                             L
          PRINT LOG PAGES                             P
          PRINT LOG INDEXED BY CALL SIGN              C
          APPEND ENTRIES                              A
          CREATE NEW LOGBOOK DATABASE                 N
          HUNT FOR PREFIX/CALL IN LOG                 H
          SUMMARIZE LOG                               S
          UPDATE QSL STATUS                           Q
          DISPLAY ENTRIES FOR ONE DAY                 1
          DISPLAY LAST 20 ENTRIES IN THE LOG          E
          DISPLAY BLOCK OF 20 ENTRIES                 B
          DETERMINE UNIQUE CONTACTS                   U
          TRANSFER SINGLE PREFIX TO NEW DATABASE      X
          DISPLAY FILES ON DISK DRIVE                 F


          QUIT THIS MENU                              *

          QRU :L:
        ---------------------------------------------------------------

        6.1  CHANGE LOG FILE                             

             This  module  prompts you to enter the name of  a  different 
             logbook.   You should normally only change logbooks when one 
             fills up. 

        6.2  PRINT LOG PAGES                             

             This module displays/prints log pages in the order in  which 
             the contacts are made.   You are prompted to enter the first 
             contact  from which the list will be printed as well as  the 
             page number.   Since a floppy disk can only store about 4000 
             indexed  entries (or 7000 non indexed) you are also prompted 
             for an offset number.  This is the number of contacts in the 
             previous  log  file  should your logbook be  so  big  as  to 
             require  more  than one disk file for storage.  In this  way 
             each time you only need to printout the new entries and they 








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 9


             will appear with the correct sequential numbers even if  the 
             log  book is split into a number of different database files 
             on different disks.

             An  example  of the dialog is shown below  for  the  FIELD85 
             logbook enclosed on the disk as a sample log file.

             FIRST ENTRY (Number of entry to be displayed :1
             STARTING PAGE :1

             Offset From Previous Log (If none, enter 0) :0

             Do you want a hard copy (Y/N)? :N

             The resulting screen display starts off as follows.

        ----------------------------------------------------------------
        LOGBOOK PRINTOUT   G3ZCZ PAGE           1


        #   DATE    TIME BND  CALL      RX  TX  MODE PWR S R COMMENTS
        ---------------------------- ------------------------------------
        1  85/09/07 1646 20  G4ANT/P    59  59  SSB   200 - - 1-064
        2  85/09/07 1647 20  DF0KD/P    59  59  SSB   200 - - 2-131
        3  85/09/07 1648 20  G4AAX/P    59  59  SSB   200 - - 3-086
        4  85/09/07 1649 20  YU4EXC/P   59  59  SSB   200 - - 4-198
        5  85/09/07 1651 20  DF0SSB/P   59  59  SSB   200 - - 5-160
        6  85/09/07 1659 20  G3WAS/P    59  59  SSB   200 - - 6-089
        7  85/09/07 1703 20  YU4EZC/4   59  59  SSB   200 - - 7-219
        8  85/09/07 1705 20  G4HRS/P    56  59  SSB   200 - - 8-075
        9  85/09/07 1712 20  G4MBC/P    59  59  SSB   200 - - 9-136
        10 85/09/07 1713 20  DK0LT/P    59  59  SSB   200 - - 10-104
        11 85/09/07 1722 20  G3SRC/P    59  59  SSB   200 - - 11-021
        12 85/09/07 1726 20  DL0CS/P    59  59  SSB   200 - - 12-073
        13 85/09/07 1727 20  DL0HEL/P   59  59  SSB   200 - - 13-045
        14 85/09/07 1730 20  G3SFG/P    59  59  SSB   200 - - 14-056
        ----------------------------------------------------------------

        6.3  PRINT LOG INDEXED BY CALL SIGN              

             This  module /displays prints the whole contents of the  log 
             in  the alphanumeric order of the call signs.   It should be 
             used  once in a while,  probably after each contest to  give 
             you a printed booklet you can refer to during contacts  when 
             the computer is not available,  or to browse through the log 
             to identify any  calls to send QSL cards to.

             An  example  of  the dialog is shown below for  the  FIELD85 
             logbook  enclosed on the disk as a sample  log  file.   This 
             time you are only asked one question, namely

             Do you want hard copy (Y/N) ?:N.

             The resulting screen display starts off as follows.









        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 10


        ----------------------------------------------------------------
        INDEXED LOGBOOK PRINTOUT   G3ZCZ    as of  85/09/08    PAGE    1


         CALL        DATE   TIME BND RX  TX  MODE PWR  S R  COMMENTS
        ----------------------------------------------------------------
        4X/KA2TJU  85/09/08 0852 15  59  59  SSB   200 - - 88-026
        4X6IF/P    85/09/08 0604 15  53  55  SSB   200 - - 38-149
        9H3DX/P    85/09/08 0752 20  59  59  SSB   200 - - 71-964
        9H4R       85/09/08 1025 20  56  59  SSB   200 - - 122-011
        DF0AS/P    85/09/08 0850 15  59  59  SSB   200 - - 87-326
        DF0CT/P    85/09/08 0620 15  59  59  SSB   200 - - 50-376
        DF0DC/P    85/09/08 1151 15  59  59  SSB   200 - - 150-369
        DF0DW/P    85/09/08 0627 15  55  55  SSB   200 - - 58-179
        DF0KD/P    85/09/07 1647 20  59  59  SSB   200 - - 2-131
        DF0KD/P    85/09/08 1058 15  59  59  SSB   200 - - 124-740
        DF0LQ/P    85/09/08 0619 15  55  59  SSB   200 - - 48-136
        DF0MN/P    85/09/07 1809 15  59  59  SSB   200 - - 25-040
        DF0RE/P    85/09/08 1152 15  59  59  SSB   200 - - 152-246
        DF0SSB/P   85/09/07 1651 20  59  59  SSB   200 - - 5-160
        DF0SX/P    85/09/08 0844 15  59  55  SSB   200 - - 81-225
        DF0WB/P    85/09/08 1330 20  53  53  SSB   200 - - 171-
        DF3AX/P    85/09/08 0620 15  55  55  SSB   200 - - 51-135
        ----------------------------------------------------------------

        6.4  APPEND ENTRIES                              

             This  module allows you to enter contacts in the log in  the 
             traditional  sequential  manner.   It is the module that  is 
             "on-line"  while you are on the air.   As it is used  whilst 
             actually  in contact with other stations,  or in  monitoring 
             the bands it has other features. 

             You  can use the module in real-time or  off-line.   In  the 
             real-time  mode,  you use it while you are on the air.   The 
             computer will read the date and time form the PC's  internal 
             real time clock and enter them in the log.   In the off-line 
             mode,  you  can  use  the module to enter contact  data  for 
             contacts previously made.   The computer will not automatic-
             ally update the clock and time information.   In both modes, 
             the  computer leaves the standard information in place  bet-
             ween entries (to save you keystrokes).   You just  overwrite 
             data that changed between the sequential entries.

             The  off-line mode can be used while "reading the mail" when 
             you are operating,  to enter records from your  conventional 
             logbooks into the computer database.

             As  you may have noticed from the sample printouts,  and the 
             from scanning the sample logbook FIELD85, each record in the 
             logbook  corresponds to a line in a page of  a  conventional 
             logbook.   Each  line  in  the log contains  space  for  the 
             following information.

        6.4.1     DATE      8 characters. It is recommended that the date 








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 11


                            be    entered   in   the   format    YY/MM/DD 
                            (Year/month/day).   this  format ensures that 
                            the  equivalent  number associated  with  the 
                            date  increases as time passes by.   It  will 
                            simplify retrieval later.   You are of course 
                            free  to  use your own method as long  as  it 
                            only uses up to 8 characters.

        6.4.2     TIME      4  characters.   Use the format HHMM per  the 
                            samples displayed above.

        6.4.3     BAND      3 Characters.   The band should be entered in 
                            Meters using one of the following  bands.  2, 
                            6,  10,  12,  15,  17, 20, 30, 40, 75, 80, or 
                            160.    If  you do the recommended  way,  the 
                            statistical  summary will work properly.   If 
                            you  do it another way,  that section of  the 
                            logbook package will not work.   If you  work 
                            other UHF bands such a 432 MHz use the metric 
                            equivalents, such as 70, etc.  

                            If  you are an OSCAR operator enter the  Mode 
                            instead of the band, ie A, B, J etc.

        6.4.4     CALL      10 characters.  Enter the call sign here.  If 
                            you enter a '-' as the first character in the 
                            callsign  area,   the  contact  will  not  be 
                            counted in the statistical section.   you may 
                            thus  use  it to define contests,  change  of 
                            QTH's or any experimental notes.
                                                
                            6.4.4.1   Calls of Reciprocal Operators

                            It is strongly recommended that you store the 
                            calls  of reciprocal operators with the  area 
                            that  they are operating in as the prefix  in 
                            front  of the call rather than as the  suffix 
                            as is commonly done.   Thus if you work G3ZCZ 
                            operating in W3,  store the call as  W3/G3ZCZ 
                            not  G3ZCZ/W3 which is what he calls it.   In 
                            fact  France and Germany amongst  others  ask 
                            reciprocal operators to sign their calls that 
                            way  on the air.   If you don't do this,  you 
                            will  find  that for example  if  you  worked 
                            G3ZCZ/4X  and he was the only 4X contact  you 
                            have made, the DXCC module will assign him to 
                            G rather than to 4X.  In fact he might end up 
                            as your G card for the DXCC.

        6.4.5     RX        3 characters for the received Signal report.

        6.4.6     TX        3    characters   for   the   Signal   report 
                            transmitted.

        6.4.7     MODE      4  characters for the Mode of the  QSO.   Use 








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 12


                            SSB,FM,RTTY or SSTV.   If you use these,  the 
                            statistical summary will work  properly.   If 
                            you  do it another way,  that section of  the 
                            logbook package will not work.

        6.4.8     POWER     4  characters  for the Transmitter  power  in 
                            Watts.

        6.4.9     QSLSENT   1  character  for any QSL  sent  information.  
                            For  the purposes of the statistical package, 
                            it is recommended that you use the  following 
                            notation

                            B    sent via the bureau
                            D    sent direct.
                            M    sent via the QSL manager
                            X    someone you don't want to send a card to 
                                 for some reason.

        6.4.10    QSLRX     1 character for any QSL received information.  
                            It  is recommended that you use the following 
                            notation

                            R    card received.

                            You  will  notice  that a blank  in  the  QSL 
                            status (sent or received) is shown as a  '-'.  
                            This  character may be used later in  various 
                            modules within the logging package.

        6.4.11    COMMENTS  10 characters for comments and notes. 

             There  are  thus  a total of 51 characters in each  line  or 
             record.

             This  mode first asks you if you running in real  time.   If 
             you elect the "on-line" mode,  the computer will fill in the 
             Date  and  Time  information from  the  computer's  internal 
             clock.   Make sure that the date and time were set under DOS 
             before you invoked the DBASE2 logging package.  The computer 
             will  convert your local time to UTC.   If you do not  elect 
             the "on-line" mode, the computer will copy the date and time 
             information from the previous entry.

             The  mode then clears the screen and displays the log  entry 
             at the bottom of the screen.  A typical example would be  as 
             shown below.

             -----------------------------------------------------------
                171 LAST CONTACT WAS WITH  DF0WB/P

         DATE        TIME  CALL     BAND   POWER   MODE  RX   TX  QS  QR 
         :85/09/08::1330::          :20 :  : 200::SSB : :53 ::53 ::-: :-:
         QRU (*THPL) : :









        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 13


             ----------------------------------------------------------- 

             When  entering information,  you may use the cursor left and 
             right  keys to position the cursor to the item you  wish  to 
             enter.   You  may also use the 'ENTER' key to skip any item.  
             When  all  of the data has been  entered,  the  cursor  will 
             automatically position itself to the control byte.   At this 
             time you have the following options.

                     L     LOG    This  is the basic working mode of  the 
                           module. You enter the QSO data into the spaces 
                           provided on the screen.  Once the contact data 
                           is in the entry, you use the 'L' option to log 
                           it to the disk.  

                     H     HUNT   You  can  check the log  to  see  if  a 
                           station or prefix has been worked before. 

                     P     PREVIOUS    You  can display the  last  twelve 
                           contacts in the logbook on the screen.

                     T     TIME  You use this to update the time from the 
                           computer's clock when using this module in the 
                           "on-line" mode.

                     *     Terminates the module. 

              A typical display with the P option is shown below.

        ---------------------------------------------------------------
         12 ENTRIES BEFORE  DF0WB/P   IN LOG, ARE

        147 85/09/08 1155 DJ7ST/P    15  59  59  SSB   200 - - 157-349
        148 85/09/08 1205 G3BPK/P    15  55  59  SSB   200 - - 159-359
        149 85/09/08 1207 G3GHN/P    15  59  59  SSB   200 - - 160-374
        150 85/09/08 1209 G3WAS/P    15  59  59  SSB   200 - - 161-1034
        151 85/09/08 1215 GM0BRS/P   15  55  55  SSB   200 - - 162-490
        152 85/09/08 1242 YC0DPZ     15  59  59  SSB   200 - - 163-024
        153 85/09/08 1243 YC4HA      15  59  57  SSB   200 - - 164-049
        154 85/09/08 1302 YO9CUF     15  59  59  SSB   200 - - 166-153
        155 85/09/08 1305 G4NWG      15  53  54  SSB   200 - - 167-019
        156 85/09/08 1306 G4TSH      15  59  55  SSB   200 - - 168-024
        157 85/09/08 1307 G4OVF      15  53  57  SSB   200 - - 169-001
        158 85/09/08 1323 G4EKT/P    20  59  55  SSB   200 - - 170-592
        159 85/09/08 1330 DF0WB/P    20  53  53  SSB   200 - - 171-


                159 LAST CONTACT WAS WITH  DF0WB/P

         DATE        TIME  CALL     BAND   POWER   MODE  RX   TX  QS  QR
         :85/09/08::1330::          :20 :  : 200::SSB : :53 ::53 ::-: :-:
         QRU (*THPL) :P:
        ----------------------------------------------------------------










        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 14


        6.5  CREATE NEW LOGBOOK DATABASE                 

             This module lets you create a new logbook.   You should  use 
             this to create your own logbook,  name it as your call sign.  
             If  you put the log on a blank formatted disk,you won't have 
             to use this feature again until you have made something like 
             4000 QSO's.   It works by creating the new file and  copying 
             the  structure of the blank file (LOG.DBF) from the  default 
             disk  to  the log file disk.  An index file (by Callsign  is 
             also created at this time).

        6.6  HUNT FOR PREFIX/CALL IN LOG                 

             This module allows you to display previous contacts with any 
             station or prefix.   If you enter 'G3' for example, you will 
             get a display of all contacts with stations having the  "G3" 
             prefix.   If  you enter 'G3ZCZ' for example,  you will get a 
             display of all the contacts with "G3ZCZ".

             By  entering  the  prefix  for  a  particular  country,  all 
             contacts with that country may be seen.  

             The module terminates when you enter a '*` as the prefix.

        6.7  SUMMARIZE LOG                               

             This  module does a statistical analysis of the contents  of 
             the log.   It sequentially checks each entry and displays an 
             ongoing  summary  of  the  contacts  arranged  into  various 
             categories.  

             When the module begins, it displays the name of the file and 
             the number of contacts in it at the top of the screen.  Then 
             as it scans the log,  it puts the date, time and call of the 
             line being scanned on the screen.   As each line is scanned, 
             the totals are updated on the screen.

             A sample of the display is shown below.

























        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 15


        ------------------------------------------------------------------
                  G3ZCZ LOG SUMMARY PROGRAM Version 1.0
         G4BGY      81/03/29  1600       2250 CONTACTS IN LOG FILE G3ZCZ-1

         QSL SUMMARY                            SUMMARY OF ENTRIES BY BAND
         --------------------------------       --------------------------
         TOTAL NUMBER OF CONTACTS        2250   10  METERS             666
         QSL CARDS SENT DIRECT              1   12  METERS
         QSL CARDS SENT VIA BUREAU         53   15  METERS             737
         QSL CARDS SENT VIA MANAGER         4   17  METERS
         QSL CARDS SENT                   136   20  METERS             585
         QSL CARDS RECEIVED                79   30  METERS
         QSL CARDS OWED                     1   40  METERS              35
         QSL CARDS EXCHANGED               78   80  METERS              27
                                                160 METERS
         REPORT BY MODES                         6  METERS
         ----------------------------            2  METERS              95
         SSB CONTACTS              2109         OSCAR MODE A            28
         CW CONTACTS                 99         OSCAR MODE B            76
         RTTY CONTACTS                3         OSCAR MODE J             1
         FM CONTACTS                 39         OTHERS
         SSTV CONTACTS
        ------------------------------------------------------------------

             When  the scan is over,  you are asked if you want  to  scan 
             another  log file.   You only answer 'Y' to this if you have 
             so  many contacts that they won't fit on one log  file.   In 
             this  example as shown below,  the contents of a second  log 
             has been added to that displayed above.
        ------------------------------------------------------------------
                  G3ZCZ LOG SUMMARY PROGRAM Version 1.0
         SV9ADO     86/05/14  1643       6170 CONTACTS IN LOG FILE G3ZCZ-2

         QSL SUMMARY                            SUMMARY OF ENTRIES BY BAND
         --------------------------------       --------------------------
         TOTAL NUMBER OF CONTACTS        8402   10  METERS            1633
         QSL CARDS SENT DIRECT              8   12  METERS
         QSL CARDS SENT VIA BUREAU        281   15  METERS            3269
         QSL CARDS SENT VIA MANAGER        14   17  METERS
         QSL CARDS SENT                   852   20  METERS            2879
         QSL CARDS RECEIVED               842   30  METERS               2
         QSL CARDS OWED                   294   40  METERS             160
         QSL CARDS EXCHANGED              548   80  METERS              96
                                                160 METERS
         REPORT BY MODES                         6  METERS
         ----------------------------            2  METERS             258
         SSB CONTACTS              8059         OSCAR MODE              28
         CW CONTACTS                137         OSCAR MODE              76
         RTTY CONTACTS                3         OSCAR MODE J             1
         FM CONTACTS                198         OTHERS
         SSTV CONTACTS
        ------------------------------------------------------------------
             
             6.7.1     TOTAL NUMBER OF CONTACTS        









        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 16


                       The total number of contacts is the number of call 
                       sign entries that don't begin with a "-".  

             6.7.2     QSL CARDS SENT DIRECT            
                       The number of cards that have been sent direct (D) 
                       to the stations contacted,  and for which  replies 
                       have not yet been received. 

             6.7.3     QSL CARDS SENT VIA BUREAU        
                       The  number  of cards that have been sent via  the 
                       bureau  (B)  to the stations  contacted,  and  for 
                       which replies have not yet been received. 

             6.7.4     QSL CARDS SENT VIA MANAGER       
                       The number of cards that have been sent to the QSL 
                       manager (M) of stations contacted,  and for  which 
                       replies have not yet been received. 

             6.7.5     QSL CARDS SENT                   
                       The sum of the number of cards sent out, including 
                       those for which replies have been received.

             6.7.6     QSL CARDS RECEIVED               
                       The total number of cards received (R).

             6.7.7     QSL CARDS OWED                   
                       The  number  of cards that have been received  for 
                       which you have not replied to.

             6.7.8     QSL CARDS EXCHANGED              
                       The number of cards which you have exchanged  (ie. 
                       you sent one, and you received one).

             6.7.9     The  remaining  numbers  are  the  totals  in  the 
                       various  categories.   If you have used  different 
                       designations for the BAND information,  those data 
                       will be summed in the OTHERS category.

        6.8  UPDATE QSL STATUS                           

             This  module  allows  you to update the QSL status  of  each 
             contact in the log.  If you enter a prefix or call sign, the 
             computer will sequentially present you with each contact  in 
             the  log for that prefix or call and allow you to change the 
             QSL   information.    If  you  don't  want  to  change   the 
             information, just type the 'ENTER' key.

             The module will also print labels for sticking on QSL cards.  
             These  labels  contain all the information necessary  for  a 
             valid  QSL card.   The program is set to print on 3  1/8  by 
             15/16 (inch) ONE-OFF labels.

             The  labels  as  printed  show the call of  the  station  in 
             enlarged  characters.   Since this document is on  disk,  it 
             cannot  show a sample of the labels.   Run a set  of  labels 








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 17


             using  plain  paper  in the printer for the  FIELD85  sample 
             logbook to see how the module works, and what kind of labels 
             to use.
             
             Under  certain conditions,  such as if you make a change  to 
             one entry,  you  may have to try the command twice to locate 
             other entries for a particular call on the same band.   This 
             seems  to be due to an anomaly within the  DBASE2  language, 
             and is discussed in section 9.1.

             The module terminates when you enter a '*` as the  prefix.

        6.9  DISPLAY ENTRIES FOR ONE DAY                 

             This  module  allows  you to display/print entries  for  one 
             specified day.

        6.10 DISPLAY LAST 20 ENTRIES IN LOG

             This module displays the last 20 entries in the logbook.

        6.11 DISPLAY BLOCK OF 20 ENTRIES

             This  module  displays  a block of 20  log  entries  on  the 
             screen.   You will be prompted to tell the computer where to 
             start the display.  Once the 20 entries are displayed on the 
             screen,  you will then have the option to continue,  back up 
             or terminate the operation.  The prompt is QRU (+ - *).  

             Entering  one  of these three characters tells the  computer 
             what to do next.   A + will display the next 20 entries, a - 
             will back up and display the previous 20 entries,  while the 
             * character terminates the module as usual.


        6.12 DETERMINE UNIQUE CONTACTS.

             This  module allows you to see how many  different  stations 
             you have contacted and logged.   It displays a running count 
             on  the  screen as it scans the log and then,  when  it  has 
             finished, it displays the totals.  

        6.13 TRANSFER SINGLE PREFIX TO NEW DATABASE

             This  module lets you extract all the calls beginning with a 
             single prefix into a new or separate database.  For example, 
             if you wanted to pull all the stateside log entries from the 
             log you could extract,  all entries beginning with N,K,W and 
             A  from  the main log into a logbook  database  file  called 
             USA.DBF.

        6.14 DISPLAY FILES ON DISK DRIVE       

             This module allows you to display the files on a disk drive.  
             You  use it to determine the correct name for a file,  or to 








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 18


             find out if the file you thought was present on the  default 
             drive is really present.

        6.15 QUIT THIS MENU                              

             This  section  lets you quit the log section of the  program 
             and returns you to the higher level menu.     

        7.0  AWARDS

        This  module supports various awards.   It allows you to  extract 
        log  entries into the award databases directly without  retyping.  
        In the event of the DXCC award,  you can let the computer  search 
        the log and automatically generate a listing of your DXCC status.

        When  you invoke the AWARD module you will be presented with  the 
        following menu.

        -----------------------------------------------------------------
                  G3ZCZ AWARD RECORD KEEPING FUNCTIONS Version  1.0

         PICK AN AWARD PACKAGE, the following are supported

         WAZ                             Z
         WAS                             S
         DXCC                            D
         OBLAST                          O
         GENERAL AWARD                   G
         CHANGE LOGBOOK                  L

         LZ60 AWARD (LZ 60th Aniv)       B

         QUIT THIS MENU                  *






         QRU : :

        -----------------------------------------------------------------

        At  this time you are supposed to pick a letter corresponding  to 
        an award package.

        7.1  WAZ           

        If  you  invoke  the Worked All Zone (WAZ) module,  you  will  be 
        presented with the following menu.













        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 19


        ----------------------------------------------------------

                   G3ZCZ WAZ AWARD PACKAGE VERSION 1.4

         Default WAZ database is      WAZ
         Default LOGBOOK is           LOG

         UPDATE WAZ RECORDS                            U
         CREATE A NEW WAZ DATABASE                     C
         CHANGE WAZ DATABASE                           D
         CHANGE LOGBOOK                                L
         PRINT WAZ RECORDS                             P





         QUIT THIS MENU                                *

         QRU :Z:

        ----------------------------------------------------------

        The  WORKED  ALL  ZONE award is available from  CQ  magazine  for 
        confirmation  of  working one station from each of the  40  zones 
        that  it  has divided the world into.   This  module  contains  a 
        database  with  40 records,  each corresponds to one  zone.   The 
        record number corresponds to the zone number.

        The following things may be performed within the award package.

             7.1.1      UPDATE WAZ RECORDS         
                  
             This  module is used to update the WAZ record file.   It  is 
             used in an interactive manner.  The computer will prompt you 
             with a request for a Zone number.   After you have given  it 
             one,  it scans the WAZ record file and presents you with its 
             findings.   If  you have an entry for that zone  number,  it 
             will display it, if you don't have one, it will so tell you.  

             An example of the dialog is

             -------------------------------------------------------------
             Which Zone (0 to terminate) ?:23




             Zone   23  is not worked
              Do you want to update the entry (Y/N) ?: :
             --------------------------------------------------------------

             You  are  asked if you desire to update the record for  that 
             zone, by entering the letter Y for yes, or N for no.  If you 
             do, you are then asked to provide a call sign.  The computer 








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 20


             will  then search the log to find the entry associated  with 
             that call sign, and you are prompted to tell the computer to 
             transfer the data from the relevant log entry to the corres-
             ponding WAZ record.

             The module terminates when you give it a zone 0.

             WARNING,  DO NOT ATTEMPT TO ENTER DATA INTO THE DEFAULT  WAZ 
             FILE  ON THE DISK.   THIS FILE CONTAINS THE STRUCTURE OF THE 
             DATABASE  AND  HAS NO SPACE FOR RECORDS.   CREATE  YOUR  OWN 
             RECORD FILE FIRST.   IF YOU TRY TO ENTER DATA INTO THIS  WAZ 
             DATABASE, THE PROGRAM WILL BOMB.

             7.1.2      CREATE A NEW WAZ DATABASE  

             This module allows you to create a new WAZ database.

             7.1.3      CHANGE WAZ DATABASE        

             This  module  allows you to change from one WAZ database  to 
             another.   You use it if you keep different WAZ records  for 
             different  bands  or  modes,  or if you have more  than  one 
             station log file on the computer.

             7.1.4      CHANGE LOGBOOK             

             This module allows you to change logbook files without going 
             back to the log function menu.

             7.1.5      PRINT WAZ RECORDS          
             
             This  module allows you to print/display the award  records.  
             When  you  invoke it,  you are presented with  a  choice  as 
             follows.

             Whole thing, worked/QSL-d, or QSL-d (T,W,Q) 

             If  you  want to print/display entries for all the zones  in 
             the contest records, enter the letter T for the whole thing.

             If you want to print/display only those zones which you have 
             either worked or QSL'd, enter the letter W.

             If  you want to display/print only the zones for  which  you 
             have received QSL cards, enter the letter Q.

             After typing the 'ENTER' key you will again be prompted.

             DO you want hard copy (Y/N) ?:

             If  you want hard copy (a printout) answer with the letter Y 
             for yes,  else if you only want the information displayed on 
             the screen,  enter the letter N.  When you follow the choice 
             with the 'ENTER' key, the module will go to work









        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 21


        7.2  WAS                

             The  WAS Award is issued by the American Radio Relay  League 
             (ARRL)  for  confirmed contacts with all 50  of  the  states 
             which make up the United States of America.

             If  you invoke the Worked All States (WAS) module,  you will 
             be presented with the following menu.

        -------------------------------------------------------
                   G3ZCZ WAS AWARD PACKAGE VERSION 1.1

         Default WAS database is WAS
         Default LOG database is LOG

         UPDATE WAS RECORDS                         U
         CREATE A NEW WAS DATABASE                  C
         PRINT WAS RECORDS                          P
         CHANGE WAS DATABASE                        D
         CHANGE LOGBOOK                             L
         DISPLAY FILES ON DISK DRIVE                F
         IMPORT FROM A BASIC WAS DATABASE           I

         QUIT THIS MENU                             *

         QRU :S:


        ----------------------------------------------------------


             The  following  things  may be performed  within  the  award 
             package.

             7.2.1      UPDATE WAS RECORDS                
             
             This  module  is  used to  update  your  WAS  records.   The 
             computer requests a state prefix.   You are supposed to give 
             it the US PS two letter code for the desired state.   If you 
             don't  know or forgot the letters,  the computer will remind 
             you as in the following paragraph.






















        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 22


             ----------------------------------------------------------------

             Which State (* to terminate) ?:TE



                  ENTRY ERROR-  THERE IS NO SUCH STATE AS   TE



                                  ALLOWABLE STATES ARE -



             AB     AL     AZ     AK     CA     CO     CT     DE     FL
             GA     HA     ID     IL     IN     IO     KS     KY     LA
             MN     MD     MA     MI     MN     MS     MO     MT     NB
             NV     NH     NJ     NM     NY     NC     ND     OH     OK
             OR     PA     RI     SC     SD     TN     TX     UT     VT
             VA     WA     WV     WS     WY
             WAITING
             ----------------------------------------------------------

             When  you  enter the correct state,  TX for  Texas  in  this 
             example,  you will proceed to the next part of the dialog as 
             shown below.

             ---------------------------------------------------------------

                            STATE OF  TX        OR        TEXAS



                            has not been worked

              Do you want to update the entry (Y/N/E): :
             ---------------------------------------------------------------

             At  this  time you enter the letters Y N or E  depending  on 
             what you want to do.

             The letter Y if you want to update the record.

             The letter N if you don't want to update the record.

             The letter E if you want to erase the data in that record.

             You  may want to erase the data in a record if,  for example 
             you  work K6IR and log him as California,  only to find  out 
             later  when  you get the QSL card that he was  operating  as 
             K6IR/3 in Maryland, and you have not yet worked california.

             7.2.2      CREATE A NEW WAS DATABASE         

             This module allows you to create a new WAS database.








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 23



             7.2.3      PRINT WAS RECORDS                 
             
             This  module allows you to print/display the award  records.  
             When  you  invoke it,  you are presented with  a  choice  as 
             follows.

             Whole thing, worked/QSL-d, or QSL-d (T,W,Q) 

             If  you want to print/display entries for all the states  in 
             any  (or all) the call areas  in the contest records,  enter 
             the letter T for the whole thing.

             If  you  want to print/display only those states  which  you 
             have either worked or QSL'd, enter the letter W.

             If  you want to display/print only the states for which  you 
             have received QSL cards, enter the letter Q.

             After touching the 'ENTER' key you will again be prompted.

             Which call area (0-9, for all enter 10)

             At this time you enter the number corresponding to the  call 
             area  you  wish  to see displayed.   If you wish  to  see  a 
             display  of all states in all call areas,  enter the  number 
             10.  Follow the number with the 'ENTER' key, and you will be 
             prompted with one further request.

             DO you want hard copy (Y/N) ?:

             If  you want hard copy (a printout) answer with the letter Y 
             for yes,  else if you only want the information displayed on 
             the screen,  enter the letter N.  When you follow the choice 
             with the 'ENTER' key, the module will go to work.

             7.2.4      CHANGE WAS DATABASE               

             This  module allows you to change from one WAS  database  to 
             another.   You  use it if you keep different WAS records for 
             different  bands  or modes,  or if you have  more  than  one 
             station log file on the computer.

             7.2.5      CHANGE LOGBOOK                    

             This module allows you to change logbook files without going 
             back to the log function menu.

             7.2.6      DISPLAY FILES ON DISK DRIVE       

             This module allows you to display the files on a disk drive.  
             You  use it to determine the correct name for a file,  or to 
             find out if the file you thought was present on the  default 
             drive is really present.









        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 24


             7.2.7      IMPORT FROM A BASIC WAS DATABASE  

             If you used the BASIC WAS package in PC-HAM 1.0 or 1.5,  you 
             may use this option to append the BASIC record file into the 
             DBASE format used by this package.   This module should save 
             you some retyping.  Before you do so however, check that the 
             BASIC  data is delimited by the "," sequence,  not just  the 
             comma  (,).  If  it isn't,  use a wordprocessor in  its  non 
             document mode to achieve this state.

             7.2.8      QUIT THIS MENU                    

             This  module takes you back to the previous menu.   In  this 
             case, you return to the Award menu.


        7.3  DXCC               

             The  DX Century Club (DXCC) is an award offered by the  ARRL 
             for   confirmed   contacts  with  at  least  100   different 
             countries.

             If  you invoke the DXCC module,  you will be presented  with 
             the following menu.

             .cp24
        -----------------------------------------------------------------
                   G3ZCZ DXCC AWARD PACKAGE Version 1.6

         Default DXCC database is DXCC
         Default LOG database is  LOG


         UPDATE DXCC RECORDS  (Automatic)            U
         UPDATE DXCC RECORDS  (Manual)               M
         CREATE A NEW DXCC DATABASE                  C
         CREATE 5BDXCC RECORDS                       5
         PRINT DXCC RECORDS                          P
         ADD PREFIXES TO A DXCC DATABASE             A
         CHANGE DXCC DATABASE                        D
         EDIT PREFIXES IN DXCC RECORD FILE           E
         CHANGE LOGBOOK                              L
         UPDATE SINGLE BAND DXCC RECORD (Automatic)  S
         DISPLAY FILES ON DISK DRIVE                 F
         DISPLAY DATA FOR A PREFIX/COUNTRY           X
         QUIT THIS MENU                              *
         QRU :D:


        ---------------------------------------------------------


             The  following  things  may be performed  within  the  award 
             package.
                  








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 25


             7.3.1     UPDATE DXCC RECORDS  (Automatic)            

             This  module automatically searches a logbook  database  and 
             updates  the  DXCC  status of the designated  DXCC  database 
             file.    You would use the module the first time you use the 
             package,  or after a contest or other period of activity, or 
             after a batch of cards from many countries have arrived from 
             the QSL bureau, and you have updated the QSL status for each 
             of those contacts.  This module DOES NOT RECOGNIZE  SEPARATE 
             BANDS OR MODES.  

             The module displays each prefix as it is being checked.   It 
             then  displays the calls of the various stations having that 
             prefix as it searches for the first contact that was QSL'd.

             7.3.2      UPDATE DXCC RECORDS  (Manual)

             This module allows you to update a DXCC prefix manually.  It 
             is faster to update a single prefix this way.   You can  use 
             this module to update a country for which you worked a third 
             prefix,  ie. a prefix not in the database.  For example, the 
             two prefixes for the Philippines are DU and DX.  If you have 
             worked neither of these but have worked a DV prefix, you may 
             use this module to enter that 'DV' contact into the record.

             An example of the dialog is shown below.

        ---------------------------------------------------------------
        Which DXCC prefix (* to terminate) ?:I1
        00130  I1   IT   ITALY      IT9ZOU     86-04-25 0622 20  SSB  W




        Do you want to update the entry (Y/N) ?: :
        -----------------------------------------------------------------

             When you give it a prefix,  it displays the existing record.  
             If you want to update the record, it will prompt you for the 
             call  of the station in the QSO that you want to update  the 
             record with.   If you give it an unknown prefix,  it will so 
             tell you.

             7.3.3     CREATE A NEW DXCC DATABASE                  

             This  module allows you to create a new DXCC  database.   It 
             assumes  that  there is a DXCC database on the  disk  called 
             'dxcc'.  It copies the prefix and country information into a 
             second dxcc database which you name and then ensures that it 
             is  blank.  In this manner,  if you used the default  'DXCC' 
             database when you first begin to use the package, additional 
             databases will always be blank as you create them.











        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 26


             7.3.4     CREATE 5BDXCC RECORDS                       

             This  module performs an automatic generation/update of your 
             5 Band DXCC status.  It uses default databases named 10DXCC, 
             15DXCC,  20DXCC, 40DXCC, 80DXCC for those bands.  It creates 
             the  databases copying the structure and default  data  from 
             the 'DXCC' database supplied with the package.

             You  may think of this module as performing the CREATE A NEW 
             DXCC   DATABASE   followed  by  an   UPDATE   DXCC   RECORDS  
             (Automatic)    sequence  for  each of the traditional  5  HF 
             bands.


             7.3.5     PRINT DXCC RECORDS                          

             This  module displays or prints the contents of a DXCC data-
             base.   You are given the choice of printing the whole data-
             base,  those countries worked/QSL-d, or just those countries 
             QSL-d.   The database is in alphanumeric prefix order, so it 
             is ready to be sent to the ARRL with the award request,  and 
             is handy for having at the operating position when  monitor-
             ing the bands.

             This  module allows you to print/display the award  records.  
             When  you  invoke  it,  you are presented with a  choice  as 
             follows.

             All PX's,Worked/QSL-d,or QSL-d (P,W,Q) :

             If  you  want  to print/display entries  for  all  the  DXCC 
             countries in the contest records, enter the letter P for the 
             whole thing.

             If  you want to print/display only those prefixes which  you 
             have either worked or QSL'd, enter the letter W.

             If you want to display/print only the prefixes for which you 
             have received QSL cards, enter the letter Q.

             After typing the 'ENTER' key you will again be prompted.

             DO you want hard copy (Y/N) ?:

             If  you want hard copy (a printout) answer with the letter Y 
             for yes,  else if you only want the information displayed on 
             the screen,  enter the letter N.  When you follow the choice 
             with the 'ENTER' key, the module will go to work.

             7.3.6     ADD PREFIXES TO A DXCC DATABASE             

             In the main, the DXCC database contains the 274 most common 
             or  unambiguous prefixes that you are most likely  to  work.  
             Some  prefixes such as 'VP8' or 'VK9' apply to more than one 
             country.   If you work those,  you should use this module to 








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 27


             add  the  prefix  to  the file,  and  then  use  the  manual 
             updating  mode  to enter the QSO data into the  file.   Take 
             care  here to make the added  prefixes  non-ambiguous.   For 
             example,  if you worked VP8AA in Antarctica, and then VP8FLK 
             on  the  Falkland islands,  use the prefixes VP8A  and  VP8F 
             respectfully  for those areas.   In this manner,  should you 
             run  the  automatic updating module at  a  later  time,  the 
             computer will not overwrite your data with something that it 
             thinks is more appropriate.   Look at the entries for VK9 in 
             the DXCC file for an example of the usage of this approach.

             In a like manner, new prefixes can be added to the database.   
             The  database  is then sorted on "prefix" to a new  version.  
             Make  sure there is space on the disk for a  temporary  DXCC 
             database before evoking this operation.

             7.3.7     CHANGE DXCC DATABASE                        

             This  module allows you to change from one DXCC database  to 
             another.   You use it if you keep different DXCC records for 
             different  bands  or  modes,  or if you have more  than  one 
             station log file on the computer.

             7.3.8     EDIT PREFIXES IN DXCC RECORD FILE           

             Two possible prefixes are provided for each  country.   This 
             module has picked the most common ones.   If you have worked 
             a  different  one,  edit the database to  include  it.   For 
             example, the two prefixes for the Philippines are DU and DX.  
             If  you  have worked neither of these but have worked  a  DV 
             prefix,  change  the  DX  to DV and the DXCC status  of  the 
             Philippines will be taken care of.  

             7.3.9     CHANGE LOGBOOK                              

             This  module  allows  you to change logbook  files  without 
             going back to the log function menu.

             7.3.10    UPDATE SINGLE BAND DXCC RECORD (Automatic)  
            
             This module performs an automatic update of the DXCC  status 
             for a single band.  It is identical to the module of section 
             7.3.1  except  in that it requests you to enter the name  of 
             the  single band file.  You can also use this to update  the 
             records  for one of the new WARC bands such as the 30  Meter 
             band, if you name the corresponding record file as 30DXCC.
             
             7.3.11     DISPLAY DATA FOR A PREFIX/COUNTRY 

             This module is designed to be used when you don't have  your 
             printed  DXCC records handy.   It gives you a display of the 
             contents of a desired Prefix record,  so that you can  check 
             your DXCC status for a desired country on-line.
             
             When  you  invoke the module you will be presented with  the 








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 28


             following display.

                    CURRENT DXCC FILE IS   DXCC

                    Which Prefix  (* to terminate) ? :    :

             At  this time enter a prefix.   the computer will match  the 
             characters  entered,  so that for example if you  enter  the 
             letter G,  it will match the first Prefix record that begins 
             with  the letter G.  If it can't match the prefix,  it  will 
             tell  you so.   You terminate the module in the usual manner 
             by entering the * character.

             The  format  and contents of the display are shown  by  this 
             typical example.

                    CURRENT DXCC FILE IS   DXCC
             
                    Which Prefix  (* to terminate) ? :G   :
              
              ENGLAND    G3   G0   G3FPK      82/02/14 1518 20  SSB  Q

             You see the country name,  followed by the two prefixes  you 
             have allocated to that country.  

             If  that  country had not been worked (or the DXCC  database 
             not  updated with that information),  the rest of  the  line 
             would  have  been blank.   However,  since the  country  was 
             worked,  the  display continues.  The remaining data are the 
             callsign of the station worked,  the date,  time,  band  and 
             mode of the QSO, and lastly the QSL status.  Here a letter Q 
             indicates  that  a  QSL card has been  received,  while  the 
             letter  W  indicates that the station was worked and  a  QSL 
             card has not yet been received.

             7.3.12     DISPLAY FILES ON DISK DRIVE 

             This module allows you to display the files on a disk drive.  
             You use it to determine the correct name for a file,  or  to 
             find  out if the file you thought was present on the default 
             drive is really present.

             7.3.13    QUIT THIS MENU                              
             
             This  module takes you back to the previous menu.   In  this 
             case, you return to the Award menu.


        7.4  OBLAST             

             This  award  is issued by the Russian  Amateur  Radio  Sport 
             Federation for working various areas (Oblasts) of the Soviet 
             Union.

             If you invoke the OBLAST module,  you will be presented with 








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 29


             the following menu.
             
        -----------------------------------------------------------------

                   G3ZCZ OBLAST AWARD PACKAGE VERSION 1.4

         Default OBLAST database is   OBLAST
         Default LOGBOOK is           LOG

         UPDATE OBLAST RECORDS                         U
         CREATE A NEW OBLAST DATABASE                  C
         PRINT OBLAST RECORDS                          P
         CHANGE OBLAST DATABASE                        D
         CHANGE LOGBOOK                                L
         DISPLAY FILES ON DISK DRIVE                   F




         QUIT THIS MENU                                *

         QRU :O:

        ----------------------------------------------------------------

        The following things may be performed within the award package.
             
             7.4.1      UPDATE OBLAST RECORDS          

             This module allows you to update the record for each Oblast.  
             It  requests  you to enter the Oblast number and then  scans 
             the  records  for the data associated with  that  particular 
             Oblast.  You are then prompted as to how to continue.

             WARNING,  DO  NOT  ATTEMPT TO ENTER DATA  INTO  THE  DEFAULT 
             OBLAST  FILE ON THE DISK.   THIS FILE CONTAINS THE STRUCTURE 
             OF THE DATABASE AND HAS NO SPACE FOR RECORDS.   CREATE  YOUR 
             OWN  RECORD FILE FIRST.   IF YOU TRY TO ENTER DATA INTO THIS 
             OBLAST DATABASE, THE PROGRAM WILL BOMB.

             7.4.2      CREATE A NEW OBLAST DATABASE   

             This module allows you to create a new OBLAST database.

             7.4.3      PRINT OBLAST RECORDS           
             
             This  module allows you to print/display the award  records.  
             When  you  invoke it,  you are presented with  a  choice  as 
             follows.

             Whole thing, worked/QSL-d, or QSL-d (T,W,Q)  :

             If  you want to print/display entries for all the Oblasts in 
             the award records, enter the letter P for the whole thing.









        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 30


             If  you  want  to print/display only those  which  you  have 
             either worked or QSL'd, enter the letter W.

             If  you want to display/print only those for which you  have 
             received QSL cards, enter the letter Q.

             After typing the 'ENTER' key you will again be prompted.

             DO you want hard copy (Y/N) ?:

             If you want hard copy (a printout) answer with the letter  Y 
             for yes,  else if you only want the information displayed on 
             the screen,  enter the letter N.  When you follow the choice 
             with the 'ENTER' key, the module will go to work.

             7.4.4      CHANGE OBLAST DATABASE         

             This module allows you to change from one OBLAST database to 
             another.   You  use it if you keep different OBLAST  records 
             for  different bands or modes,  or if you have more than one 
             station log file on the computer.

             7.4.5      CHANGE LOGBOOK                 

             This module allows you to change logbook files without going 
             back to the log function menu.

             7.4.6      DISPLAY FILES ON DISK DRIVE    

             This module allows you to display the files on a disk drive.  
             You use it to determine the correct name for a file,  or  to 
             find  out if the file you thought was present on the default 
             drive is really present.

             7.4.7    QUIT THIS MENU

             This  module takes you back to the previous menu.   In  this 
             case, you return to the Award menu.

        7.5  GENERAL AWARD      
             
        This is a general award package that is designed to be used  with 
        any award such as the Deutche Amateur Radio Club (DARC) DOK award 
        or  for keeping track of the VHF/UHF QRA locator squares that you 
        have worked.  The award records are kept in an indexed database.

        If  you invoke the Generic Award module,  you will  be  presented 
        with the following menu.
             














        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 31


        -----------------------------------------------------------------

                   G3ZCZ GENERIC AWARD PACKAGE VERSION 1.2

         Default AWARD database is    AWARD
         Default LOG database is      LOG













         What AWARD file         :AWARD     :
        ------------------------------------------------------------

        THE  FIRST THING TO DO IS CREATE A NEW AWARD DATABASE .   Thus if 
        you are using the package for the first time,  do not prompt  the 
        computer  with  the  name of the award file you wish  to  create, 
        rather just push the 'ENTER' key,  advance to the following  menu 
        and create the new database file.

        After  you  have entered in the name of the Award file  that  you 
        want to work on, you will be prompted with the following menu.

        -----------------------------------------------------------------

                   G3ZCZ GENERIC AWARD PACKAGE VERSION 1.2

         Default AWARD database is    AWARD
         Default LOG database is      LOG

         UPDATE AWARD RECORDS                         U
         CREATE A NEW AWARD DATABASE                  C
         PRINT AWARD RECORDS                          P
         CHANGE AWARD DATABASE                        D
         CHANGE LOGBOOK                               L
         DISPLAY FILES ON DISK DRIVE                  F



         QUIT THIS MENU                               *

         QRU :G:

        -----------------------------------------------------------------

        The following things may be performed within the award package.









        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 32


             7.5.1      UPDATE AWARD RECORDS         

             This  module lets you update the records from the log.   You 
             will be prompted along the line for the award area code (DOK 
             number or QRA locator square,  etc.).  The module works in a 
             similar manner to the other award updating modules.

             WARNING, DO NOT ATTEMPT TO ENTER DATA INTO THE DEFAULT AWARD 
             FILE ON THE DISK.   THIS FILE CONTAINS THE STRUCTURE OF  THE 
             DATABASE  AND  HAS NO SPACE FOR RECORDS.   CREATE  YOUR  OWN 
             RECORD FILE FIRST.  IF YOU TRY TO ENTER DATA INTO THIS AWARD 
             DATABASE, THE PROGRAM WILL BOMB.

             7.5.2      CREATE A NEW AWARD DATABASE  

             This module allows you to create a new Award database.


             7.5.3      PRINT AWARD RECORDS          

             This  module allows you to print/display the award  records.  
             When  you  invoke  it,  you are presented with a  choice  as 
             follows.

             All PX'S,Worked/QSL-d,or QSL-d (P,W,Q) :

             If  you  want  to print/display entries for  all  the  award 
             records, enter the letter P for the whole thing.

             If  you  want  to print/display only those  which  you  have 
             either worked or QSL'd, enter the letter W.

             If  you want to display/print only those for which you  have 
             received QSL cards, enter the letter Q.

             After depressing the 'ENTER' key you will again be prompted.

             DO you want hard copy (Y/N) ?:

             If you want hard copy (a printout) answer with the letter  Y 
             for yes,  else if you only want the information displayed on 
             the screen,  enter the letter N.  When you follow the choice 
             with the 'ENTER' key, the module will go to work.

             7.5.4      CHANGE AWARD DATABASE        

             This  module allows you to change from one AWARD database to 
             another.  You use it if you keep different AWARD records for 
             different awards,  bands or modes,  or if you have more than 
             one station log file on the computer.

             7.5.5      CHANGE LOGBOOK               

             This module allows you to change logbook files without going 
             back to the log function menu.








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 33



             7.5.6      DISPLAY FILES ON DISK DRIVE  

             This module allows you to display the files on a disk drive.  
             You use it to determine the correct name for a file,  or  to 
             find  out if the file you thought was present on the default 
             drive is really present.

             7.5.7     QUIT THIS MENU

             This  module takes you back to the previous menu.   In  this 
             case, you return to the Award menu.

             7.6  LZ60

             This is an example of a section of software written to  scan 
             the log and extract log data and total points for a specific 
             award.   The  award  in  question  was  the  Bulgarian  60th 
             Anniversary  Award  issued  by the Radio Club in  Sofia  for 
             working LZ and LZ6 stations during a particular time  frame.  
             The code performing this task is described below.

             7.7  CHANGE LOGBOOK     

             This module allows you to change logbook files.

             7.8  QUIT THIS MENU                  

             This  module takes you back to the previous menu.   In  this 
             case,  you  EXIT the logbook package,  and return to DBASE2.  
             When  you  return to DBASE2 you will be presented  with  the 
             following screen.

        -----------------------------------------------------------------

                    Enter QUIT <CR> to return to DOS







                                                73 de G3ZCZ
            .

        ------------------------------------------------------------------

             At  this  time you may exit to DOS by typing the  word  QUIT 
             followed by the 'ENTER' key,  or you may use the interactive 
             query language mode of DBASE2 itself to access the log data.  

             An example of such an access to display all contacts on  any 
             day  in  any mode that took place between the hours of  1800 
             UTC and 1900 UTC is listed below.








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 34



             USE &LOGBOOK
             DISPLAY ALL FOR TIME > '1800' .AND. TIME < '1900'

             You may also write small program modules to perform specific 
             tasks.   For  example,  as  performed by  Section  7.6,  the 
             Bulgarian Amateur Radio Club issued the LZ 60 Award in 1986.  
             The requirements for the award were to score 60 points  when 
             working  LZ  stations  between 1 July 1986 and  31  December 
             1986.   Each contact with an LZ6 prefix counted as 6 points, 
             while other LZ prefixes only counted as 1 point.   A program 
             module  to  search the log and total up the score  could  be 
             written looking something as follows.

             *LZ60  SCAN LOG FOR LZ60 AWARD REQUIREMENTS
             ? 'LZ60 AWARD POINTS CHECKER'
             ACCEPT 'Do you want Hard Copy (Y/N) ? ' TO pf
             IF pf = 'Y'
                SET PRINT ON
             ENDIF
             USE &logbook INDEX &logbook
             FIND LZ
             STORE 0 TO points
             STORE 0 TO spoints
             ERASE
             ?  '   CALL        DATE   TIME  BD TX  RX MODE  POWER    '
             ?? 'COMMENTS        POINTS'
             ?  '----------------------------------------------------------'
             ?? '------------'
             DO WHILE call = 'LZ'
                IF date >= '86/07/01' .AND. date <= '86/12/31'
                   IF call = 'LZ6'
                      STORE 6 TO points
                   ELSE
                      STORE 1 TO points
                   ENDIF
                      STORE spoints + points TO spoints
                   ? call,date,time,band,tx,rx,mode,power,comments,points
                   STORE call TO ncall
                   DO WHILE call = ncall
                      * SKIP DUPES
                      SKIP
                   ENDDO
                   SKIP -1
                ENDIF
                SKIP
             ENDDO
             USE
             ? '----------------------------------------------------------'
             ?? '-------------'
             '
             ? 'TOTAL POINTS = ',spoints
             SET PRINT OFF
             RELEASE spoints,points,ncall
             RETURN








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 35



             When the program is run, the printout which could be sent to 
             the  club as a claim for the award would look  something  as 
             follows.

               CALL   DATE    TIME BD  TX  RX MODE POWER  COMMENTS POINTS
              ----------------------------------------------------------
             LZ1R   86/07/13  0934 15  59  59  SSB  400   207- BFRA    1
             LZ2KRM 86/07/13  0702 15  59  59  SSB  400   167- 28      1
             LZ6BC  86/08/06  0733 20  57  57  SSB  200   LZ1BC  DIM   6
             LZ92S  86/07/18  0613 20  59  59  SSB  400                1
             -----------------------------------------------------------
             TOTAL POINTS =            9

        8.0  MISCELLANEOUS FUNCTIONS 

        This   module  pretty  much  covers  the  remaining  rarely  used 
        functions within the package.  If you elect this choice, you will 
        be prompted by the following menu.

        -----------------------------------------------------------------

                  MISCELLANEOUS FUNCTIONS VERSION 1.2


         LOGBOOK B:G3ZCZ



         MANUAL TRANSFER OF DATA TO  CONTEST LOGS          U
         APPEND FROM BASIC "LOG" FILE TO "DBF" FILE        V
         DISPLAY FILES ON DISK DRIVE                       F
         DXPEDITION/CONTEST BATCH QSL FUNCTION             Q
         (RE)INDEX LOG DATABASE FILE                       I
         CHANGE OFFSET TO UTC                              T
         CHANGE STATION OPERATOR CALL SIGN                 C
         Quit this menu                                    *

         QRU :M:

        ----------------------------------------------------------------             

        The following things may be performed within this package.

             8.1  MANUAL TRANSFER OF DATA TO  CONTEST LOGS

             This module allows you to enter (by hand) contact data  from 
             old  contest  logs in a speedy manner to build the log  data 
             base.  After all, there is no point in using this program if 
             you don't have any data in the log.

             The  log should be created using the CREATE function in  the 
             logging  package.   The  first  entry should  then  be  made 
             manually using the APPEND function (also in the log  module) 
             to set the date,  mode and power information. Quit that menu 








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 36


             and move back to this one.   Set the logbook to whatever you 
             called  this one and then choose the 'U' option.  Enter  the 
             time  and call data in the relevant spaces,  then enter  the 
             whole  report  received in the comments area,  (If  you  are 
             updating  an SSB contest,  leave a space between the  report 
             and further data.   IE.,  use '59 100' rather than '59100'), 
             the  computer  will   take care of the  reformatting  later.  
             After  the  contact data for each QSO has  been  input,  the 
             program  prompts for a decision.  It gives the operator  the 
             choice of three things to do as follows;

             L    Log the entry into the database

             B    Change the band information.

             *    Terminate the program

                  When  the program is terminated,  the computer  prompts 
                  the user asking if the last entry was the last entry in 
                  the whole log.   If it was,  the module formats the log 
                  by moving the first three characters in the comments to 
                  the  "report received" column.   You are also asked  if 
                  you  want  the  contacts  numbered.   If  you  do,  the 
                  contacts will be numbered sequentially and that  number 
                  placed  in  the comments column.   The  last  operation 
                  performed  is  that  the  log is indexed  so  that  the 
                  regular commands of the package will work on it.

                  It  must be repeated that this program is designed  for 
                  rapid entry of old contest logs into the database, logs 
                  in which the only differences between one entry and the 
                  next  are  the  time,  callsign and  reports  with  the 
                  occasional change of band.   Any other data must be set 
                  or changed using DBASE features.

                  BY THE WAY,  THIS MODULE IS GOOD FOR CHECKING A CONTEST 
                  (OPERATED AS NON COMPUTER ASSISTED) FOR DUPES AFTER THE 
                  EVENT.   IF THE CALL AND BAND INFORMATION FROM THE LOGS 
                  ARE  ENTERED INTO THE DATABASE USING THIS  MODULE,  THE 
                  COMPUTER  CAN THEN BE USED TO SORT THE CALLS  AND  FIND 
                  DUPES  OR  MULTIPLE BAND CONTACTS,  TELL YOU  HOW  MANY 
                  COUNTRIES YOU WORKED,  ETC.   DO YOU KNOW IF YOU WORKED 
                  THE SAME STATION ON 5 BANDS? (DO YOU EVEN CARE?)

             8.2   APPEND FROM BASIC "LOG" FILE TO "DBF" FILE

             This  module creates a database file (.DBF) from the contest 
             log using a blank log database file (LOG.DBF). It copies the 
             contact  data  from  the log generated  by  the  CONTEST.BAS  
             program into the new database log.   It then lets you append 
             the  contest  log  database  to  the  main  station  logbook 
             database.  

             The main logbook database is then ready for the next contest 
             or any further data processing and analysis desired.








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 37



             Since the contest log database is saved as a stand alone log 
             file, even after its contents have been appended to the main 
             log database, the module allows you to index the contest log 
             database  so  that you can then display or  print  the  call 
             signs  in  the  contest in alphanumeric order to  check  for 
             duplicates, prefixes or what ever.  

             If  you  want to work directly in DBASE,  you may  even  get 
             displays of contacts on different individual bands by  using 
             variations of the DBASE command 'DISPLAY ALL FOR BAND = "xx" 
             ' where xx is the band you want displayed.

             The  module  performs much of the same task  (excluding  the 
             clean  up  function)  as the last part  of  the  CONTEST.BAS 
             program.   If you compare the two source code listings,  you 
             will  get  an  idea of the differences  in  string  handling 
             between DBASE2 and BASIC.

             8.3   DISPLAY FILES ON DISK DRIVE

             This module allows you to display the files on a disk drive.  
             You  use it to determine the correct name for a file,  or to 
             find out if the file you thought was present on the  default 
             drive is really present.

             8.4   DXPEDITION/CONTEST BATCH QSL FUNCTION 

             This  module is designed to perform the following two  batch 
             QSL  label printing functions.   It is designed for an EPSON 
             MX series printer and 3 1/8 by 15/16 inch one-off labels.

             8.4.1     Automatically  QSL  100% (after a contest  or  DX-
                       Pedition)  to all stations worked for one  contact 
                       on  each  of  5 bands.   QSL labels  will  not  be 
                       printed for duplicate contacts on any  band.   The 
                       program  does not differentiate between modes,  so 
                       if  you  went  on a DXpedition  and  used  several 
                       modes,  keep  the logs separate until  after  this 
                       operation is performed.

             8.4.2     This  module  can automatically scan your log  for 
                       QSO's  for which you have received QSL  cards  but 
                       not sent them out, print labels for those contacts 
                       and update the QSLSENT status of the log entry.

                       It  will  request  your choice of  mode  with  the 
                       following query.

                       All QSO-s or just those owed (A or O) :

                       If you wish to send a card to every unique station 
                       on  each band,  reply with the letter A.   If  you 
                       only  want to print labels for those stations that 
                       you owe cards to, reply with the letter O.








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 38



                       The module will then start to work.   As it  scans 
                       the  log,  it will display log entries,  and  flag 
                       those  that QSL labels were printed for.   It will 
                       also change the QSLSENT information from a '-'  to 
                       a  'B',  assuming that all the cards are going via 
                       the QSL Bureau.

             8.5   (RE)INDEX LOG DATABASE FILE 

             This  module allows you to index logs that you  have  ported 
             over from other DBASE formats, or to re-index logs that have 
             had their index files damaged in some manner.

             8.6    CHANGE OFFSET TO UTC

             You  use  this module to change the offset to UTC when  your 
             local  time zone changes between daylight savings  time  and 
             standard  time.   You  are prompted to enter the  offset  as 
             follows.

             What is your offset to UTC (HH) ? 

             Your  reply should be the number of hours that you  normally 
             add  to  the local time to give you the time  in  GMT.   For 
             example, if you have to subtract 3 hours from the local time 
             for  GMT,  reply  to the prompt with the number -3.  On  the 
             other  hand  if you have to add 7 hours to your  local  time 
             zone to get the GMT time,  you will have to enter 7 in reply 
             to  the prompt.   This value of offset time is only used  in 
             the real-time log updating function (see section 6.4).

             8.7  CHANGE STATION OPERATOR CALL SIGN

             This module allows you to change the station call sign.  You 
             use this if you have logs for different stations on-line and 
             want  corresponding printouts of the logs.   Its useful  for 
             husband  and  wife home stations or for  keeping  logs  from 
             different QTH's all on the same hard disk.

             8.7   QUIT THIS MENU

             This  module takes you back to the previous menu.   In  this 
             case, you return to the Main menu.

             8.8  CHANGE LOGBOOK     

             This  module  allows you to change logbook files.   If  your 
             logbook  file is too large to go onto a single floppy  disk, 
             you may put the .DBF file on one disk ,and the .NDX file  on 
             another. This IS THE ONLY PLACE IN THE PACKAGE WHERE YOU CAN 
             TELL  THE  PROGRAM  THAT  THE DATA AND INDEX  FILES  ARE  IN 
             DIFFERENT PLACES.

        9.0  POSITION QSL LABELS ON PRINTER








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 39



             This  module  lets  you position the labels in  the  printer 
             before you begin to print a batch of labels to stick on  the 
             QSL cards.


        10.0 DATABASE STRUCTURES

        The program package uses a number of data bases.

             10.1  LOG.DBF 

             This is a blank logbook data with the following structure.

             Fld    Name   Type Width     Comment
             001   DATE     C    008  Date in format YY/MM/DD
             002   TIME     C    004  Time in format HHMM
             003   BAND     C    003  Band eg 10, 20, 40
             004   CALL     C    010  Call sign 
             005   RX       C    003  Signal report received
             006   TX       C    003  Signal report transmitted
             007   MODE     C    004  Mode of QSO, eg. SSB,FM.
             008   POWER    C    004  Transmitter power
             009   QSLSENT  C    001  QSL sent info. eg. B (bureau)
             010   QSLRX    C    001  QSL rx info. eg. R (received)
             011   COMMENTS C    010  comments and notes. 

             The  log  is indexed so that the calls in it may  be  viewed 
             alphanumerically.

             As a rule in order to be able to find calls in the log,  the 
             log  has to be indexed.   the usual thing to do is to  index 
             the  log  on the call sign.   this will place all  the  call 
             signs in a sequential order.   Since there is a good  chance 
             that some stations will be worked more than once,  they will 
             appear as duplicates to the index.   That does not cause any 
             problem  until  you  try to change something in  an  indexed 
             entry that has a duplicate.  

             If that happens,  DBASE makes the change but then  positions 
             the record at the end of the duplicates.  Thus, for example,  
             if  you tried to change the state of the QSL information  of 
             the first record of a series of duplicates,  the change will 
             be  made but the pointer will then be positioned to the next 
             non-duplicate  record in the list.   This can  be  annoying, 
             especially  when  you  are  updating the QSL  status  for  a 
             station who has sent you more than one card  (ie.  different 
             cards  for  QSO's  on different bands arrive  from  the  QSL 
             Bureau in the same batch.

             In an effort to minimize this state of affairs, while at the 
             same  time  minimizing the amount of disk space taken up  by 
             the index,  the indexing criterion used here is to index the 
             log  on both callsign and band  ("call+band").   Using  this 
             technique,  as  far  as  the index  is  concerned  duplicate 








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 40


             records  will only exist for successive contacts ON THE SAME 
             BAND, as opposed to successive contacts.

             If  you  wanted to avoid duplicates  completely,  you  could 
             index the log on "call+date+time".

             10.2  DXCC.DBF 

             This   is  a  sample  DXCC  database  with  the   following 
             structure.

             Fld   Name      Type  Width       Comments
             001   PX         C     004      Prefix for DXCC.
             002   PX1        C     004      Alternate prefix.
             003   COUNTRY    C     010      DXCC country name.    
             004   DCALL      C     010      call of station worked.
             005   DDATE      C     008      date of QSO.    
             006   DTIME      C     004      time of QSO.    
             007   BAND       C     003      band QSO took place on.
             008   DMODE      C     004      mode used.    
             009   DSTATE     C     001      QSL status.               
             ** Total **            00049

             10.3  WAZ

             This  is  the  STRUCTURE of a WAZ database.   It is  not  a 
             sample  database.   The  structure of the  database  is  as 
             follows.

             Fld   Name      Type  Width       Comments
             001   DCALL      C    010       call of station worked.   
             002   DDATE      C    008       date of QSO.              
             003   DTIME      C    004       time of QSO.              
             004   DBAND      C    003       band QSO took place on.   
             005   DMODE      C    004       mode used.                
             006   DSTATE     C    001       QSL status.               
             ** TOTAL **           00031

             10.4  WAS

             This is a sample WAS database with the following structure.

             Fld   Name       Type  Width       Comments
             001   STATE       C    013      The name of the State.
             002   CALLAREA    N    001      Call area of the State.
             003   DSTATE      C    001      QSL status.               
             004   DCALL       C    010      call of station worked.   
             005   DBAND       C    004      band QSO took place on.   
             006   DDATE       C    008      date of QSO.              
             007   DMODE       C    004      mode used.                
             008   PC          C    002      The  2 letter  abbreviation 
                                             of the state.
             ** TOTAL **            00044    










        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 41


             10.5  Oblast

             This  is the STRUCTURE of an OBLAST database.   It is not  a 
             sample  database.   The  structure  of the  database  is  as 
             follows.

             Fld   Name       Type  Width       Comments
             001   DCALL        C    010     call of station worked.   
             002   DDATE        C    008     date of QSO.              
             003   DTIME        C    004     time of QSO.              
             004   DBAND        C    003     band QSO took place on.   
             005   DMODE        C    004     mode used.                
             006   DSTATE       C    001     QSL status.               
             ** TOTAL **             00031

             10.6  Generic Award

             This  is the STRUCTURE of an AWARD database.   It is  not  a 
             sample  database.   The  structure  of the  database  is  as 
             follows.

             Fld   Name       Type  Width       Comments
             001   PC           C    010     Award element identifier.
             002   DCALL        C    010     call of station worked.   
             003   DBAND        C    004     date of QSO.              
             004   DDATE        C    008     time of QSO.              
             005   DTIME        C    004     band QSO took place on.   
             006   DMODE        C    004     mode used.                
             007   DSTATE       C    001     QSL status.               
             ** TOTAL **             00042

        11.0 SHAREWARE

        PC-HAM is distributed with a marketing approach called Shareware. 
        Shareware,  is a method of distributing quality software at a low 
        price. 

        Anyone  can  receive a distribution copy of the product from  the 
        PC-SIG library or from any source whatsoever.   You may then  use 
        and  review  the product to determine if you'd like  to  continue 
        using it. If you decide to use it, you are encouraged to become a 
        registered  user.  Whatever your decision,  you may still  freely 
        use,  copy and share the product with your friends and associates 
        and other amateur radio operators (hams).
         
        This  marketing  concept saves everyone  money because by  having 
        users  distribute and promote the product,  users  deal  directly 
        with the author, saving the costs of advertising, fancy packaging 
        as  well as distributors fees etc.  These savings are then passed 
        on to you. The contribution is mainly used to pay for production, 
        copying  charges AND to support the further development  of   PC-
        HAM.   The  next version of PC-HAM depends on the support of  its 
        users.

        After  using the product,  please register for a contribution  of 








        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 42


        $36.50 (or equivalent in any currency). Registration provides the 
        following benefits:
             
        Receive an UPDATED copy of PC-HAM registered to your callsign. 

        You will be included in the mailing list so that you may  receive 
        new product announcements.

        Receive  further  future  releases  of PC-HAM  at  a  significant 
        discount.
          
        You may register your copy of PC-HAM by completing the accompany-
        ing registration form and mailing it to the address listed below.

        A limited license is granted to any user of the program to freely 
        copy and distribute the product on the following conditions:

                  YOU MAY:

        Use  the  program on any microcomputer on which this package  was 
        designed to operate. 

        Freely copy and share unmodified copies of the product with  your 
        associates.  This includes putting the software on a BBS.

                  YOU MAY NOT:

        Sell  the  product for a fee and/or distribute the product  along 
        with other products without express written permission. 

        Provide  the use of the software in a computer service  business, 
        network,  timesharing, interactive cable television link, without 
        express written permission. 

        Grant sub licenses,  leases,  or other rights in the software  to 
        others. 

        Modify or remove the Copyright notice from the program,  diskette 
        or its manual. 

        Joe Kasser, G3ZCZ warrants that the original diskette as received 
        from G3ZCZ, in which the PC-HAM program package is distributed is 
        furnished to be free from defects in the material and workmanship 
        under  normal use for a period of thirty (30) days from the  date 
        of  delivery to you.   The defective diskette must be returned to 
        Joe Kasser, G3ZCZ for this warranty to be effected. 

















        PC-HAM LOGBOOK.DOC Version 3.0 PAGE 43


        ================================================================
        REGISTRATION FORM

        Send ____ Copies of Registered PC-HAM at $36.50/ea. ____.__(73/2)

        TOTAL                                              ____.__ 

        =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
        Mail (Together with a QSL card) To:

        Joe Kasser G3ZCZ    POB 3419, Silver Spring, Md., 20901.

        As I am on a long term assignment much of the time that  involves 
        travel,  the mailbox may not be emptied for two months at a time, 
        so please be patient.  


        Name:_____________________________________________CALL__________
         
        Address:________________________________________________________

        City:__________________________ State:_____ ZIP _______________

        Telephone:(_____) _____-_______

        Current PC-HAM Version:__________

        Registration on your current copy (or source) :_________________

        Comments:

        Constructive comments will get you on the testers list for future 
        pre-updates.































```
{% endraw %}

## FREQPLOT.BAS

{% raw %}
```bas
10 REM FREQUENCY PLOTTING ROUTINE
20 DATA 1.8,2, 3.5,4, 7,7.5
30 DATA 10,10.5,14,14.5,18,18.5
40 DATA 21,21.5,24,24.5
50 DATA 28,28.5,28.5,29,29,29.5,29.5,30
60 DATA 50,50.5
70 I = 9 : REM 9 BANDS
80 LPRINT "BAND","      LOW OSC",,"     HIGH OSC"
90 FOR X = 1 TO 13
100 READ F1,F2
110 LPRINT F1, F1-I,F2-I,F1+I,F2+I
120 NEXT
```
{% endraw %}

## HAMDOC.DOC

{% raw %}
```
        G3ZCZ AMATEUR RADIO SOFTWARE PACKAGE VERSION 1.5 PAGE 4



                     
        1.0  INTRODUCTION

        This  disk contains a number of sets of programs for using  your 
        microcomputer  in your hobby of Amateur Radio.   Each family  is 
        described in detail in the relevant sections below.

        The programs have grown up around the applications discussed  in 
        the  books  and  magazine articles.   Some of the  programs  are 
        released  at this time to provide copies in source code  of  the 
        package  written  for the Northstar Horizon.   This  dialect  of 
        BASIC is somewhat different to the dialect spoken on the PC.  It 
        is  expected  that  by the next release of  this  software,  the 
        programs will have been converted.   On the other hand,  if  you 
        use  the  DBASE2 logging package,  you will never use the  BASIC 
        version again,  and in my opinion, when a logging package can be 
        written in DBASE2 there is no need to ever write one in BASIC.  

        The modules of the DBASE2 logging package provide one of the few 
        examples  of software written in DBASE2 readily available in the
        PC field.

        2.0  COMPUTER AIDED DESIGN

        These  are  a set of programs showing examples of the use  of  a 
        computer  for  design.   Descriptions of what  each  program  is 
        supposed  to do are contained in my book,  SOFTWARE FOR  AMATEUR 
        RADIO  published by TAB Books (Number 1560),  Blue Ridge Summit, 
        Pa., 17214.  


        2MFUND.BAS   Calculates the fundamental frequencies for crystals 
                     at  8Mhz,  12MHz  and 18MHz for the USA  144MHz  FM 
                     channel transmit frequencies, and the corresponding 
                     45MHZ receive  frequency.   Book,  listing,  Figure 
                     1.10.

        FREQPLOT.BAS Calculates the oscillator injection frequencies for 
                     an  HF  amateur band transceiver having a 9MHZ  IF.  
                     Book, listing, Figure 1.5.

        OSCFREQ.BAS  Calculates  the  resonant  frequency  of  a   tuned 
                     circuit for a range of capacitance values,  given a
                     constant  value of inductance (input by the  user).  
                     Book, listing, Figure 1.3.

        OSCPLOT.BAS  Calculates  resonant frequencies of an  oscillator.  
                     Book, listing, Figure 1.8.

        OSCUPLK.BAS  Calculates  crystal fundamental frequencies (at  8, 
                     12  and  18MHZ) that produce signals in  the  OSCAR 
                     Mode  A  uplink range of 145.85 to  146MHz.   Book, 
                     listing, Figure 1.13.









        G3ZCZ AMATEUR RADIO SOFTWARE PACKAGE VERSION 1.5 PAGE 5


        UPLINK.BAS   Calculates  crystal fundamental frequencies (at  8,
                     12  and  18MHZ) that produce signals in  the  OSCAR 
                     Mode  B uplink range of 145.85  to  146MHz.   Book, 
                     listing, Figure 1.14.

        RESISTOR.BAS Calculates  the currents through a range of  resis-
                     tances  at various circuit input  voltages.   Book, 
                     listing, Figure 1.2.




        3.0  LOGGING

        This is a set of programs written in Northstar BASIC for logging 
        contacts  into a floppy disk data file.   Northstar BASIC uses a 
        type '2' for programs by convention.   Each program is described 
        in  detail  in chapter 2 of my book SOFTWARE FOR  AMATEUR  RADIO 
        published by TAB Books (Number 1560),  Blue Ridge  Summit,  Pa., 
        17214.   The programs are given here on this version of the disk 
        for the sake of completeness.   The package will be converted to 
        PC-BASIC  in  the next release of this disk.   In the  meantime, 
        feel  free  to  do your own  conversions,  or  purchase  a  used 
        NORTHSTAR system and run the package of programs on it.
         
        FILES.2      Lists  log  or  data files on the  selected  floppy 
                     disk.  Book, listing, Figure 2.4.

        HELP.2       Lists  programs or commands on the selected  floppy 
                     disk.  Book, listing, Figure 2.5.

        LOG.2        Main  program  that  starts  the  package.    Book, 
                     listing, Figure 2.6.

        LOGARNGE.2   This program is not in the book.   It rearranges  a 
                     contest  log,  numbers the entries and readies  the 
                     log  for transmission to a second computer  running 
                     soft  sectored  CP/M  or  PC-DOS  (by  the  LOGSEND 
                     program).   This  program  is  the first  stage  in 
                     converting  the logs to a DBASE2 format on  a  more 
                     modern machine.

        LOGDEL.2     Deletes a log file from the disk.   Book,  listing, 
                     Figure 2.10.

        LOGEDIT.2    Allows  the user to edit the contents of a log data 
                     file (For example, add QSL information as cards are
                     received).  Book, listing, Figure 2.11.

        LOGENTER.2   Allows new entries to be made into the log.   Book, 
                     listing, Figure 2.12.

        LOGLIB.2     Library  of subroutines used in most of  the  other 
                     programs  in the package.   Book,  listing,  Figure 
                     2.7.








        G3ZCZ AMATEUR RADIO SOFTWARE PACKAGE VERSION 1.5 PAGE 6



        LOGMERGE.2   Joins  a second log file to the end of  the  first.  
                     Book, listing, Figure 2.13.

        LOGPRINT.2   Prints  the contents of a log file according to the 
                     criteria  supplied by  the  user.   Book,  listing, 
                     Figure 2.14.

        LOGRENAM.2   Renames a log file.  Book, listing, Figure 2.15.

        LOGRESTR.2   Restores a crashed log file.  Book, listing, Figure 
                     2.16.

        LOGSEND.2    This  program is not in the book.   It transmits  a 
                     contest  log that has been arranged by the LOGARNGE 
                     program  from  the  serial port  of  the  Northstar 
                     computer.   This  program was written  to  transfer 
                     logs  between the Northstar system and an OSBORNE 1 
                     microcomputer.   After 400 lines,  it stops so that 
                     the  files on the OSBORNE can closed out and a  new 
                     one  opened for the ballance of the original  file.  
                     This program is the second stage in converting  the 
                     logs  to a DBASE2 format on a more modern  machine.  
                     In this instance the logs were further converted to 
                     PC format diskettes for use by the remainder of the 
                     package.

        NEWLOG.2     Creates  a  new  formatted log  data  file.   Book, 
                     listing, Figure 2.9.

        QSLPRINT.2   Prints labels  containing the QSO information to be 
                     stuck on QSL cards.  Book, listing, Figure 2.18.

        STNINFO.2    File which contains the custom station data.  Book, 
                     listing, Figure 2.8.

        SYSTEM.2     Command processing program to load desired  program 
                     and   run   it.    Book,   listing,   Figure   2.3.             


        4.0   AWARDS

        This  section contains two stes of programs written for  storing 
        Award  data  on  disk files.   Others will be  added  in  future 
        releases.

                4.1  WAS Package 

                This  is  a set of programs converted from the  versions 
                written  in  Northstar  BASIC  described  in  detail  in
                chapter 3 of the book.   

                WASENTER.BAS Enters  WAS  data  into  a  WAS   database.  
                             Converted from book listing, Figure 3.2.









        G3ZCZ AMATEUR RADIO SOFTWARE PACKAGE VERSION 1.5 PAGE 7


                WASGEN.BAS   Generates  a WAS database.   Converted from 
                             book  listing,  Figure 3.1.  RUN  THIS  ONE 
                             FIRST.

                WASPRINT.BAS Prints/displays a WAS database acoording to 
                             criteria  set by the  operator.   Converted 
                             from book listing, 3.3.

                4.2 DXCC Package

                DXCCDEL.BAS  This  program  is  not  in  the  book.   It 
                             deletes a prefix from a DXCC database.

                DXCCEDIT.BAS This  program is also not in the book.   It 
                             allows  the user to edit the contents of  a 
                             prefix entry in a DXCC database.

                DXCCGEN.BAS  Puts  new  entries into  a  DXCC  database.   
                             Book, listing, Figure 3.5.

                DXCCREAD.BAS Prints/displays   the   DXCC  database   as 
                             selected  by  the  user.    Book,  listing, 
                             Figure 3.7.

                DXCCSORT.BAS Sorts the DXCC database into prefix  order.  
                             Book, listing, Figure 3.9.

                W3.DX        This  is a sample DXCC data file as used by 
                             the DXCC package.   Book,  listing,  Figure 
                             3.6.

                All  programs  in this section in this  release  contain
                minimal error checking.

        5.0  CONTESTS

        This is a set of programs written in Northstar BASIC for contest 
        operation  in which the check list is stored in RAM and the  log 
        data is written out to disk files.  Each program is described in 
        detail in chapter 4 of the book.  The programs are given here on 
        this  version  of the disk for the sake  of  completeness.   The 
        package  will  be converted to PC-BASIC in the next  release  of 
        this  disk (CONTEST16.2 is alrady converted and is on the  disk, 
        [see CONTEST.BAS]).

        CKLSTGEN.2   Generates  a check list file in alphanumeric  order 
                     from a log file.   This prorogram is to be used after 
                     a contest.  Book, listing, Figure 4.8.

        CKLSTRD.2    Prints/displays a checklist file.   Book,  listing, 
                     Figure 4.9.

        CONTST16.2   General purpose contest operating program.  Updated 
                     version of Book, listing, Figure 4.1/4.11.









        G3ZCZ AMATEUR RADIO SOFTWARE PACKAGE VERSION 1.5 PAGE 8


        LOGFUDGE.2   Cleans  up  a contest  log  file.   Book,  listing, 
                     Figure 4.7.

        MBCKLSTG.2   Multiband  check  list  generator  program.   Book, 
                     listing, Figure 4.12.

        SWPSTAKS.2   Contest program optimised for the ARRL  Sweepstakes 
                     Contest.   It  shows which sections still remain to 
                     be  worked  on screen in  real  time  time.   Book,
                     listing,  Figure 4.4 (Sweepstakes contest program).


        7.0  ANTENNA POSITION AND POINTING

        This  is  a  set  of programs written  in  Northstar  BASIC  for
        calculating  the  position to point the antenna for  various  DX
        locations.   Each program is described in detail in chapter 6 of 
        the  book.   The programs are given here on this version of  the 
        disk  for  the  sake  of  completeness.   The  package  will  be 
        converted to PC-BASIC in the next release of this disk.  

        QTHANY.2     Prints  pointing  information  for  any  QTH.   The 
                     program   prompts  for  lattitude   and   logtitude 
                     information first.  Book, listing, Figure 6.6.

        QTHDATA.TXT  Sample   listing  of  lattitude  and  logitude  for 
                     various cities world wide.    Book, listing, Figure 
                     6.7.

        QTHFUDGE.2   Cleans  up any errors in a QTHDATA file  after  the 
                     QTHGEN  program has been  run.      Book,  listing, 
                     Figure 6.12.

        QTHGEN.2     Used  for  entering data into a table of  latitudes 
                     and longitudes.  Book, listing, Figure 6.8.

        QTHLIB.2     Computing  subroutines  used  by  other   programs.  
                     Book, listing, Figure 6.2.

        QTHPOINT.2   Positions  antenna in calculated direction.   Book, 
                     listing, Figure 6.10.

        QTHSORT.2    Sorts a QTHDATA file.  Book, listing, Figure 6.9.


        8.0  SATELLITES

        This  is  a  set  of programs written  in  Northstar  BASIC  for 
        calculating   the   position  of,   and   tracking   the   OSCAR 
        communications satellites.   Each program is described in detail 
        in  chapter 7 of the book.   The programs are given here on this 
        version of the disk for the sake of completeness.   The  package 
        will  be replaced by a version written in PC-BASIC in  the  next 
        release of this disk.  

        PHASE1.2     Computes equatorial crossing information (Reference  







        G3ZCZ AMATEUR RADIO SOFTWARE PACKAGE VERSION 1.5 PAGE 10


                     orbits)  for  OSCAR  Phase  2  satellites.    Book, 
                     listing, Figure 7.3.

        PHASE2.2     Computes  antenna pointing information for  working 
                     through OSCAR Phase 2 satellites.   Book,  listing, 
                     Figure 7.9.


```
{% endraw %}

## LOGCONV.BAS

{% raw %}
```bas
10 WIDTH 80:PRINT "LOG CONVERSION PROGRAM 2.0 (C) JOE KASSER G3ZCZ 1985"
20 REM CONVERTS CONTEST LOG TO STANDARD LOG
30 INPUT "WHAT IS THE LOG NAME ";L$
40 CLS:N=1
50 OPEN L$+".$$$" FOR OUTPUT AS #2
60 OPEN L$+".LOG" FOR INPUT AS #1
70 IF EOF(1) THEN 160
80 INPUT#1,D$,T$,B$,C$,R$,S$,M$,P$,QS$,QR$,X$
110 R$=LEFT$(X$,2):N$=STR$(N):N$=MID$(N$,2)
120 X$=MID$(X$,3,LEN(X$)):X$=N$+"-"+X$:N=N+1
130 PRINT#2, D$;",";T$;",";B$;",";C$;",";R$;",";S$;",";M$;",";P$;",";QS$;",";QR$;",";X$
140 PRINT D$;",";T$;",";B$;",";C$;",";R$;",";S$;",";M$;",";P$;",";QS$;",";QR$;",";X$
150 GOTO 70
160 CLOSE#1 : CLOSE#2
170 NAME L$+".LOG" AS L$+".RUN"
180 NAME L$+".$$$" AS L$+".LOG"
190 END
```
{% endraw %}

## OSCFREQ.BAS

{% raw %}
```bas
10 REM COMPUTE FREQUENCY OF AN OSCILLATOR
20 X = 50
30 Y = 500
40 Z = 25
50 INPUT "L = (uH) " ; L
60 L = L * .000001
70  LPRINT "L (uH) =" ; L * 1E+06
80 LPRINT : LPRINT
90 LPRINT "F (Mhz)","C (pF)"
100 FOR C1 = X TO Y STEP Z
110  C = C1 * 1E-12
120 F = 1 / (2*3.1419*(SQR(L*C)))
130 F1 = F * .000001
140 C2 = C * 1E+12
150 LPRINT F1,C2
160 NEXT
170 LPRINT CHR$(12)
180 GOTO 50
```
{% endraw %}

## OSCPLOT.BAS

{% raw %}
```bas
10 REM COMPUTE OSCILLATOR FREQUENCY
20 X = 50  : REM MINIMUM VALUE OF CAPACITANCE
30 Y = 500 : REM MAXIMUM VALUE OF CAPACITANCE
40 Z = 25  : REM STEP
50 INPUT "L (uH) ";L
60 C3 = 0 : F3 = C3 : F4 = F3
70 LPRINT "L (uH) = ";L
80 L = L * .000001 : REM CONVERT uH TO H
90 LPRINT
100 LPRINT "F (Mhz)", "C (pF)", "SLOPE","DELTA F"
110 FOR C1 = X TO Y STEP Z
120 C = C1 * 1E-12 : REM CONVERT pF TO F
130 REM
140 F = 1 / ( 2 * 3.1419 * (SQR( L * C )))
150 IF C1 = X THEN F5 = F
160 F1 = F * .000001
170 F4 = F3 - F1
180 C2 = C * 1E+12
190 M = (F3 - F2) / (C3 - C2)
200 IF M = 0 THEN F4 = 0 : REM FUDGE FIRST VALUE
210 LPRINT F1,C2,M,F4
220 F3 = F1
230 C3 = C2
240 NEXT
250 F5 = F5 / F
260 LPRINT
270 LPRINT "TUNING RATIO IS";F5
```
{% endraw %}

## OSCUPLK.BAS

{% raw %}
```bas
10 REM OSCAR UPLINK FREQUENCY PLOTTER
20 I = .02
30 REM GAP BETWEEN SAMPLES
40 LPRINT " UPLINK",,"XTALS"
50 LPRINT "--------------------------------------------------"
60 FOR F = 145.85 TO 146 STEP I
70 F1 = F/8 : F2 = F/12 : F3 = F/18
80 LPRINT F,F1,F2,F3
90 NEXT
```
{% endraw %}

## QTHDATA.TXT

{% raw %}
```
  CITY         LATITUDE  LONGITUDE (E)
ACAPULCO       16.90 N    260.10
ACCRA           5.60 N    359.75
ADDIS ABBABA    9.05 N     38.70
ALGIERS        36.50 N      3.00
ARCHANGEL      64.50 N     40.70
ATHENS         38.00 N     23.70
ATLANTA        33.75 N    275.60
AUCKLAND       36.90 S    174.80
AUSTIN,TX      30.30 N    262.20
AZORES         38.50 N    332.00
B. ARIES       34.70 S    301.50
BAGHDAD        33.30 N     44.40
BAKER IS.        .23 N    183.50
BERLIN         52.50 N     13.40
BERMUDA        32.30 N    295.20
BOGOTA          4.63 N    285.90
BOMBAY         18.90 N     72.90
BONN           50.70 N      7.10
BOSTON         42.30 N    288.90
BRASILIA       16.20 S    315.50
BRISBANE       27.50 S    153.00
BUDAPEST       47.50 N     19.10
CAIRO          30.10 N     31.30
CANARY IS.     28.50 N    344.80
CARACAS        10.60 N    293.10
CASABLANCA     33.40 N    352.42
CHRISTCHURCH   43.50 S    172.70
COLOMBO         6.92 N     79.90
CONCEPTION     36.80 S    286.90
COOK IS.       21.00 S    158.00
COSTA RICA      9.98 N    275.90
DENVER         39.70 N    255.00
DETROIT        42.30 N    277.00
FAIRBANKS      64.80 N    212.20
GILBERT IS       .25 N    176.00
GUATEMALA      14.60 N    269.60
HAVANA         23.10 N    277.60
HELSINKI       60.10 N     25.00
HONG KONG      22.00 N    115.00
HONOLULU       21.30 N    202.20
ISTANBUL       41.00 N     29.00
JAN MAYEN      70.20 N    351.00
JERUSALEM      31.80 N     35.20
JO,BURG        26.20 S     28.00
JUNEAU         58.30 N    225.70
KHARTOUM       15.60 N     32.60
KINGSTON       18.00 N    283.20
LAGOS           6.50 N      3.50
LENINGRAD      59.90 N     30.40
LIMA           12.10 S    282.90
LISBON         38.70 N    350.90
LONDON         51.50 N       .17
LOS ANGELES    34.00 N    241.70
LUANDA          8.83 S     13.30
èMADRAS         13.10 N     80.30
MADRID         40.40 N    356.28
MALTA          36.00 N     14.00
MANILA         14.50 N    121.00
MARSHALLS      10.00 N    170.00
MELBOURNE      37.80 S    145.00
MEXICO CITY    19.40 N    260.80
MIAMI          25.80 N    279.70
MONTEVIDEO     33.90 S    303.80
MOSCOW         55.75 N     37.58
NAGASAKI       32.80 N    129.90
NAIROBI         1.30 S     36.80
NEW YORK       40.70 N    286.20
PARIS          48.90 N      2.30
PEKING         39.90 N    116.40
PERTH          32.00 S    115.80
PITCAIRN IS    25.10 S    230.00
PRAGUE         50.10 N     14.40
PT MORESBY      9.50 N    147.10
PUERTO RICO    18.50 N    294.00
QUITO            .23 S    281.50
RANGOON        16.80 N     96.20
REYKJAVIK      64.20 N    338.00
RIYADH         24.70 N     46.80
SAIGON         10.80 N    106.70
SAMOA          13.00 S    170.00
SAN FRANCISCO  37.80 N    237.50
SEATTLE        47.60 N    237.70
SEOUL          37.50 N    127.00
SINGAPORE       1.30 N    104.00
ST. JOHN'S     47.50 N    307.30
ST. LOUIS      38.70 N    269.70
SYDNEY         33.90 S    151.20
TAIPEI         29.10 N    117.60
TASHKENT       41.30 N     69.20
TEHRAN         35.70 N     51.40
THULE          77.50 N    290.70
TOKYO          35.70 N    139.80
TORONTO        43.70 N    280.60
VANCOUVER      49.20 N    237.00
VLADIVOSTOCK   43.00 N    131.80
VOLGOGRAD      48.80 N     44.50
WARSAW         52.30 N     21.00
WASHINGTON     38.90 N    283.00
WINNEPEG       49.90 N    262.80
```
{% endraw %}

## RESISTOR.BAS

{% raw %}
```bas
20 REM charging resistor calculator
30 V2 = 3.75
40  LPRINT "INPUT VOLTAGE",6,9,12,15
50 LPRINT
60 LPRINT "RESISTANCE",,,"CURRENT (mA)"
70 FOR R = 10 TO 100 STEP 10
80 LPRINT R,
90 FOR J = 1 TO 4
100 READ V1
110 V = V1 - V2
120 I = V / R
130 I1 = I * 1000
140 LPRINT I1,
150 NEXT
160 RESTORE
170 LPRINT
180 NEXT
190 DATA 6,9,12,15
```
{% endraw %}

## UPLINK.BAS

{% raw %}
```bas
10 REM OSCAR MODE B UPLINK FREQUENCY PLOTTER
30 I = .02
40 REM GAP BETWEEN SAMPLES
50 LPRINT "UPLINK",,"XTALS"
60 FOR F = 435 TO 436 STEP I
70 F1 = F/24 : F2 = F/36 : F3 = F/(18*3)
80 LPRINT F,F1,F2,F3
90 NEXT
```
{% endraw %}

## WHATSON.BAS

{% raw %}
```bas
10 KEY OFF:WIDTH "LPT1:",132:W$ = "WHATSON- HF propagation Prediction Program Version 1.91"
20 ON ERROR GOTO 600
30 DIM W$(500),A3(500),A4(500),L(1),T1(1),T3(1),T4(1),C0(1),T9(1),M(1),G6(1),G7(1),G8(1)
40 WIDTH 80:CLS:LOCATE 2,9:PRINT W$
50 BLANK$ = " ":FOR I = 1 TO 80:BLANK$ = BLANK$+" ":NEXT:LA$ = "LAT.":NA$ = "  LON."
60 C1$ = CHR$(10)+CHR$(10)+CHR$(10):C2$ = CHR$(12)
70 D$ = "YyNnQq":X$ = "SsLl":Z$ = "PpSs":LA$ = "LAT.":NA$ = "LON.":P$ = "SHORT"
80 P1 = 3.14159266#
90 LOCATE 5,17:PRINT "BASED ON MINIMUF-3 PROGRAM DEVISED BY:"
100 LOCATE 7,18:PRINT "P.H LEVINE, R.B. ROSE J.N. MARTIN"
110 LOCATE 9,15:PRINT"MODIFIED BY G3CCZ,G4LH,G4GKO,4X4AS and G3ZCZ"
120 OPEN "G3ZCZ.DAT" FOR INPUT AS 1 ' GET STATION DATA
130 INPUT#1,G3ZCZ$,L5,W5:CLOSE#1
140 I% = 1:OPEN "WHATSON.DAT" FOR INPUT AS 1
150 GOSUB 700:GOSUB 2710:LOCATE 21,10:PRINT "PLEASE STANDBY WHILE PREFIX DATA ARE LOADED     "
160 IF EOF(1) THEN 180
170 INPUT#1, W$(I%),A3(I%),A4(I%):I% = I%+1:GOTO 160
180 CLOSE#1:PX = I%-1
190 CR=0:GOSUB 410:LL$=Y$
200 IF M1 = 1 THEN 230 ELSE CLS
210 ' MAIN LOOP STARTS HERE
220 J9=P1/180: LN8=99:FOR CH9 = 1 TO PX: J9=P1/180: PX$ = W$(CH9):L6 = A3(CH9):W6 = A4(CH9):GOSUB 960 :NEXT CH9:GOTO 320
230 J9=P1/180:I = 1:CLS:LOCATE 1,32:PRINT "PREFIX MENU":PRINT:FOR C = 1 TO 4:PRINT " NBR   PX";TAB(1+C*20);:NEXT: GOTO 250
240 FOR R = 4 TO 20:LOCATE R,1:PRINT BLANK$:NEXT
250 FOR C = 1 TO 4:FOR R = 4 TO 20:LOCATE R,(C-1)*20+1:PRINT I;:LOCATE R,(C-1)*20+6:PRINT "- ";W$(I):I = I+1:IF I>PX THEN I = 1            
260 NEXT:NEXT
270 LOCATE 22,1:PRINT BLANK$:LOCATE 22,1:INPUT "Pick a number corresponding to a prefix (0 will give you further choices )";CH9:IF CH9 = 0 THEN 240
280 IF CH9 = 999 THEN GOSUB 490: GOTO 230
290 IF CH9<0 OR CH9>PX THEN 270
300 PX$ = W$(CH9):L6 = A3(CH9):W6 = A4(CH9) 'SET UP DESTINATION CO-ORDINATES
310 GOSUB 960
320 IF C2$= C1$ THEN 340
330 PRINT CHR$(12):IF P%=2 THEN LPRINT CHR$(12);CHR$(18)
340 PRINT:PRINT TAB(20)"DO YOU WANT ANOTHER QTH Y/N ?"
350 K$ = INKEY$:IF K$ = "" THEN 350
360 K = INSTR(D$,K$):IF K>0 THEN 380
370 BEEP:GOTO 350
380 IF K = 1 OR K = 2 THEN GOSUB 700: GOSUB 2710:GOTO 200
390 IF K = 3 OR K = 4 THEN 690
400 BEEP:GOTO 210
410 ' CALCULATE QRA SQUARE
420 IF CR = 0 THEN P = W5:R = L5 ELSE P = W6:R = L6
430 IF P>180 THEN P = P-360
440 P = (P+180)/20:R = (R+90)/10
450 Y = INT(P):X = INT(R):P = (P-Y)*10:R = (R-X)*10:C = INT(P):D = INT(R)
460 Y$ = CHR$(Y+65)+CHR$(X+65)+CHR$(C+48)+CHR$(D+48)
470 Y$ = Y$+CHR$(INT((P-C)*24)+65)+CHR$(INT((R-D)*24)+65)
480 Y$ = Y$:FOR K = 0 TO 5: Y(K) = ASC(MID$(Y$,K+1,1)):NEXT K:RETURN
490 ' SET UP G3ZCZ FOR YOUR STATION
500 CLS: LOCATE 2,9:PRINT W$:LOCATE 5,1: INPUT "What is your Call ";AA$
510 IF LEN(AA$) = 0 THEN 520 ELSE G3ZCZ$ = AA$
520 INPUT "What is your lattitude in degrees North ";J9: IF J9 = 0 THEN 530 ELSE L5 = J9
530 INPUT "What is your Longitude in degrees East  ";J9: IF J9 = 0 THEN 540 ELSE W5 = J9
540 CLS:LOCATE 2,9: PRINT W$:LOCATE 8,1: PRINT "CALL SIGN ";TAB(30);G3ZCZ$:
550 LOCATE 10,1: PRINT "LATITUDE (Degrees North)";TAB(30);L5
560 LOCATE 12,1: PRINT "LONGITUDE (Degrees East)";TAB(30);W5
570 LOCATE 18,1: INPUT "Are the data correct (Y/N) ";AA$
580 IF LEFT$(AA$,1) = "Y" THEN 590 ELSE 500
590 OPEN "G3ZCZ.DAT" FOR OUTPUT AS 1: PRINT #1,G3ZCZ$;",";L5;",";W5: CLOSE #1: RETURN
600 ' ERROR TRAPPING ROUTINES
605 IF ERR = 62 AND ERL = 170 THEN RESUME 180
610 IF ERR <> 53 THEN 670
620 IF ERL =140 THEN BEEP:PRINT:PRINT "ERROR- WHATSON.DAT IS NOT ON LOGGED IN DRIVE":GOTO 690
630 BEEP:PRINT "ERROR- ":PRINT "G3ZCZ.DAT FILE Which holds your Geographical data IS NOT ON LOGGED IN DRIVE":PRINT:PRINT
640 INPUT " Do you want to create the file now ";AA$: IF LEN(AA$)=0 THEN 640
650 IF LEFT$(AA$,1) = "N" THEN 690 ELSE IF LEFT$(AA$,1) = "Y" THEN 660 ELSE 640
660 GOSUB 490:RESUME 140
670 IF ERR =  27 THEN PRINT "PRINTER OUT OF PAPER"
680 PRINT "ERROR ";ERR;" ON LINE ";ERL
690 END
700 CLS:LOCATE 2,10:PRINT "Are predictions for today (Y/N) "
710 K$ = INKEY$:IF K$ = "" THEN 710
720 K = INSTR(D$,K$): IF K = 1 OR K = 2 THEN 750
730 IF K = 3 OR K = 4 THEN 760
740 BEEP:GOTO 710
750 M0 = VAL(MID$(DATE$,1,2)):D0 = VAL(MID$(DATE$,4,2)): GOTO 800
760 LOCATE 4,10:INPUT "DAY";D0
770 IF D0<1 OR D0>31 THEN BEEP:GOTO 760
780 LOCATE 6,10:INPUT "MONTH(1...12) ";M0
790 IF M0<1 OR M0>12 THEN BEEP:GOTO 780
800 M0$=MID$("JanFebMarAprMayJunJulAugSepOctNovDec",(M0-1)*3+1,3)
810 LOCATE 8,10:INPUT "SUNSPOT NUMBER ";S0
820 IF ABS(W5-W6)<80 THEN K = 1: GOTO 870
830 LOCATE 10,20:PRINT"LONG OR SHORT PATH (L/S) ?"
840 K$ = INKEY$:IF K$ = "" THEN 840
850 K = INSTR(X$,K$):IF K>0 THEN 870
860 BEEP:GOTO 840
870 IF K = 1 OR K = 2 THEN P$ = "SHORT"
880 IF K = 3 OR K = 4 THEN P$ = "LONG"
890 LOCATE 12,10:PRINT"Output to printer (P) or Screen (S) ?"
900 K$ = INKEY$:IF K$ = "" THEN 900 
910 K = INSTR(Z$,K$):IF K>0 THEN 930
920 BEEP:GOTO 900 
930 IF K = 1 OR K = 2 THEN P% = 2:PL=55:C2$ = CHR$(12):GOTO 950
940 C2$ = C1$:PL=20
950 RETURN
960 IF P% = 2 THEN LPRINT CHR$(15);
970 W1 = -(W5-180*(1+SGN(W5-.001)))*J9
980 W2 = -(W6-180*(1+SGN(W6-.001)))*J9
990 L1 = L5*J9:L2 = L6*J9
1000 IF M1 = 1 THEN CLS:PRINT "G3ZCZ  "+W$:PRINT "   DAY:";D0;"  MONTH:";M0;"  SUN SPOT NUMBER:";S0
1010 IF M1 = 1 THEN IF P%=2 THEN LPRINT "G3ZCZ  "+W$:LPRINT "   DAY:";D0;"  MONTH:";M0;"  SUN SPOT NUMBER:";S0
1020 ' ROTATE LONGITUDE
1030 W3 = W2-W1+.001
1040 W3 = P1*(1-SGN(W3))+W3
1050 ' PATH LENGTH
1060 H1 = SIN(L1)*SIN(L2)+COS(L1)*COS(L2)*COS(W3)
1070 G1 = ATN (SQR(1 - H1*H1)/H1)+P1/2*(1-SGN(H1))
1080 IF P$ = "LONG" THEN G1 = P1+P1-G1
1090 IF M1= 2 THEN 1140
1100 N$ = "N":IF L5<0 THEN N$ = "S" ELSE IF L5 = 0 THEN N$ = " "
1110 IF W5 = 360 OR W5 = 0 THEN E$ = " " ELSE E$="E"
1120 PRINT:PRINT G3ZCZ$;"  LOCAL QTH IS:";LA$;L5;N$;"/";NA$;W5;ES$;" = ";LL$:PRINT
1130 IF P%=2 THEN LPRINT:LPRINT G3ZCZ$;"  LOCAL QTH IS:";LA$;L5;N$;"/";NA$;W5;ES$;" = ";LL$:LPRINT
1140 ' PATH LENGTH IN 4000 KM UNITS.
1150 H0 = INT(1.59*G1)+1
1160 ' BEARINGS.
1170 H9 = (SIN(L2)-H1*SIN(L1))/SIN(G1)/COS(L1)
1180 IF H9 < -.99999 THEN H9 = ATN(P1/2*(1-SGN(H9))):GOTO 1200
1190 H9 = ATN(SQR(1-H9*H9)/H9)+P1/2*(1-SGN(H9))
1200 H9 = H9*SGN(W3-P1)*SGN(P1-G1)
1210 H9 = H9+P1*(1-SGN(H9))
1220 BEARING=INT(H9/J9+.5):DISTANCE=INT(6356.775#*G1+.5)
1230 IF M1 = 1 THEN 1270
1240 LN8=LN8+1:IF LN8>PL THEN GOSUB 2630:LN8=1
1250 PRINT PX$;TAB(8);:IF P%=2 THEN LPRINT PX$;TAB(9);:LPRINT USING "       ###";BEARING;:LPRINT USING "  ##,###  ";DISTANCE;
1260 GOTO 1330
1270 PRINT P$;" PATH TO ";PX$;", BEARING:";INT(H9/J9+.5);"deg. ";" DISTANCE:";INT(6356.775#*G1+.5);" KM   ":PRINT
1280 IF P%=2 THEN LPRINT P$;" PATH TO ";PX$;", BEARING:";BEARING;"deg. ";" DISTANCE:";DISTANCE;" KM   ":LPRINT
1290 PRINT "DATE & TIME OF PRINTOUT:";DATE$;"/";TIME$:PRINT
1300 IF P%=2 THEN LPRINT "DATE & TIME OF PRINTOUT:";DATE$;"/";TIME$:LPRINT
1310 PRINT TAB(3)"GMT" TAB(9)"HPF" TAB(16)"FOT" TAB(23)"LUF" TAB(41)"GMT" TAB(47)"HPF" TAB(54)"FOT" TAB(61)"LUF"
1320 IF P%=2 THEN LPRINT TAB(3)"GMT" TAB(9)"HPF" TAB(16)"FOT" TAB(23)"LUF" TAB(41)"GMT" TAB(47)"HPF" TAB(54)"FOT" TAB(61)"LUF"
1330 Y6 = ATN(1/TAN(G1/(H0+1))-.952/SIN(G1/(H0+1)))
1340 IF Y6<.314 THEN Y6 = .314
1350 Y6 = 1/SQR(1-.9650001*COS(Y6)^2)
1360 Y1 = .0172*(10+(M0-1)*30.4+D0)
1370 Y2 = .409*COS(Y1)
1380 Y1 = .13*SIN(Y1)+.156*SIN(Y1+Y1)
1390 ' DIRECTION COSINE.
1400 H9 = (SIN(L1)-COS(G1)*SIN(L2))/SIN(G1)/COS(L2)
1410 ' "M" FACTOR.
1420 M9 = SIN(2.5*G1/H0)
1430 M9 = 1+2.5*M9*SQR(M9)
1440 K1 = 1-.5/H0
1450 FOR N = 0 TO 1
1460 ' CONTROL POINT
1470 L9 = COS(G1*K1)*SIN(L2)+SIN(G1*K1)*COS(L2)*H9
1480 L0 = P1/2-(ATN(SQR(1-L9*L9)/L9)+P1/2*(1-SGN(L9)))
1490 W0 = (COS(G1*K1)-SIN(L2)*L9)/COS(L2)/COS(L0)
1500 IF W0 = 0 THEN W0 = .0000001
1510 W0 = ATN(SQR(1-W0*W0)/W0)+P1/2*(1-SGN(W0))
1520 W0 = P1-SGN(P1-G1*K1)*(P1-W0)
1530 W0 = W3+W0*SGN (W3-P1)*SGN(P1-G1)+W1-.001
1540 W0 = W0-P1*(1-SGN(P1+P1-W0))
1550 ' LOCAL NOON.
1560 T0 = 3.82*W0+12+Y1
1570 T0 = T0-12*(1+SGN(T0-24))*SGN(ABS(T0-24))
1580 IF COS(L0+Y2)>-.26 THEN 1620
1590 T1(N) = 0
1600 GOTO 1740
1610 ' DURATION OF SUNLIGHT.
1620 T1(N) = (-.26+SIN(Y2)*L9)/(COS(Y2)*COS(L0)+.001)
1630 T1(N) = 12-ATN(T1(N)/SQR(ABS(1-T1(N)*T1(N))))*24/P1
1640 ' T(dawn)
1650 T7 = T0-T1(N)/2
1660 T3(N) = T7+12*(1-SGN(T7))*SGN(ABS(T7))
1670 ' T(sunset)
1680 T7 = T0+T1(N)/2
1690 T4(N) = T7-12*(1+ SGN(T7-24))*SGN(ABS(T7-24))
1700 C0(N) = ABS(COS(L0+Y2))
1710 ' RELAXATION TIME.
1720 T9(N) = 9.7*(C0(N)^8)
1730 IF T9(N)<.1 THEN T9(N) = .1
1740 K1 = 1-K1
1750 ' F0F 2 MULTIPLIER.
1760 M(N) = M9*.75*((12/T1(N)-1)*SGN(INT(12/T1(N)))+1)
1770 M(N) = M(N)*(1+S0/100*(1-(T1(N)/12-1)*SGN(INT(T1(N)/12))))
1780 L9 = ABS(L0+.21*SIN(W0+.35))
1790 G2 = .5
1800 IF L9<P1/4 THEN 1830
1810 M(N) = M(N)*(1-.1*(1+COS(L9*4)))
1820 G2 = .2
1830 L(N) = SIN(L9*4)*G2
1840 ' EFECTIVE COS(X) PRESETS.
1850 G8(N) = P1*T9(N)/T1(N)
1860 T7 = T1(N)/T9(N)
1870 IF T7>85 THEN T7 = 85
1880 G7(N) = C0(N)*G8(N)*(EXP(-T7)+1)
1890 G6(N) = G7(N)*EXP ((T1(N)-24)/2)
1900 NEXT N
1910 FOR T5 = 0 TO 23
1920 J9 = 100
1930 K9 = 0
1940 FOR N = 0 TO 1
1950 G0 = 0
1960 G3 = P1/2
1970 IF T1(N) = 0 THEN 2160
1980 IF T4(N)<T3(N) THEN 2030
1990 ' DAY TIME?
2000 IF (T5-T3(N))*(T4(N)-T5)>0 THEN 2050
2010 GOTO 2210
2020 ' NIGHT TIME?
2030 IF (T5-T4(N))*(T3(N)-T5)>0 THEN 2210
2040 ' EFECTIVE COS(X)(day)
2050 T6 = T5+12*(1+SGN(T3(N)-T5))*SGN(ABS(T3(N)-T5))
2060 G4 = P1*(T6-T3(N))/T1(N)
2070 T8 = (T3(N)-T6)/T9(N)
2080 IF ABS(T8)>85 THEN T8 = 85*SGN(T8)
2090 G0 = C0(N)*(SIN(G4)+G8(N)*(EXP(T8)-COS(G4)))
2100 G3 = P1/2
2110 IF T6-T3(N)>T1(N)/2+3 THEN 2130
2120 G3 = (T6-T3(N))/(T1(N)/2+3)*G3
2130 G3 = G3*(1+SGN(L(N)))
2140 IF G0<G6(N) THEN G0 = G6(N)
2150 ' F0F 2
2160 G2 = SQR(7+45*SQR(G0/(1+G8(N)*G8(N))))
2170 ' HPF
2180 G2 = G2*M(N)*1.27*(1+SIN(G3)*L(N))
2190 GOTO 2270
2200 ' EFECTIVE COS(X)(night)
2210 T6 = T5+12*(1+SGN(T4(N)-T5))*SGN(ABS(T4(N)-T5))
2220 G4 = P1*(T6-T4(N))/(24-T1(N))
2230 G0 = G7(N)*EXP((T4(N)-T6)/2)
2240 G3 = G4+(P1-G4)/4*(1+SGN(L(N)))
2250 G4 = 0
2260 GOTO 2160
2270 IF G2<J9 THEN J9 = G2
2280 ' E LAYER.
2290 Y8 = .2: IF T1(N) = 0 THEN 2360
2300 IF T1(N)*G4 = 0 THEN 2360
2310 Y9 = C0(N)*SIN(P1*(T6-T3(N))/T1(N))
2320 IF Y9 > .174 THEN 2350
2330 Y8 = (ATN(SQR(1-Y9*Y9)/Y9)*180/P1-76)^(-.4)
2340 GOTO 2360
2350 Y8 = Y9 ^ (.3)
2360 Y9 = (3.4+.00544*S0)*Y8*Y6
2370 IF Y9>7 THEN 2400
2380 Y9 = .9099999*Y9-.37
2390 GOTO 2410
2400 Y9 = (1.33*Y9-3.31)^(2)/7
2410 IF K9<Y9 THEN K9 = Y9
2420 NEXT N
2430 F1=(J9+.5):F2=((J9/1.27)*.8499999)+5 :F3=K9+.5
2440 IF M1 = 1 THEN GOSUB 2540 ELSE GOSUB 2480 ' PRINT LINE OF DATA
2450 NEXT T5 :IF M1=1 THEN 2470
2460 PRINT :IF P%=2 THEN LPRINT
2470 RETURN
2480 IF F1<F2 THEN PRINT "-- "; :GOTO 2500
2490 IF F3<F2 THEN PRINT USING "## ";F2; ELSE PRINT "++ ";
2500 IF P%=2 THEN 2510 ELSE 2530
2510 IF F1<F2 THEN LPRINT "-- "; :GOTO 2530
2520 IF F3<F2 THEN LPRINT USING "## ";F2; ELSE LPRINT "++ ";
2530 RETURN
2540 PRINT USING"  ##";T5;:IF F1< F2 THEN PRINT  "     ------------                 ";:GOTO 2570
2550 IF F2< F3 THEN PRINT  "     ++++++++++++                 ";:GOTO 2570
2560 PRINT USING"###### ";INT(F1);INT(F2);INT(F3);:PRINT "             ";
2570 IF P%=2 THEN 2580 ELSE 2610
2580 LPRINT USING"  ##";T5;:IF F1< F2 THEN LPRINT  "     ------------                 ";:GOTO 2610
2590 IF F2< F3 THEN LPRINT  "     ++++++++++++                 ";:GOTO 2610
2600 IF P%=2 THEN LPRINT USING"###### ";INT(F1);INT(F2);INT(F3);:LPRINT "             ";
2610 IF T5/2<>INT(T5/2) THEN PRINT :IF P%=2 THEN LPRINT
2620 RETURN
2630 PRINT P$;" PATH OPTIMAL FREQUENCY PREDICTIONS FOR ";G3ZCZ$;" ON ";D0;M0$:PRINT 
2640 IF P%=2 THEN LPRINT C2$:LPRINT:LPRINT P$;" PATH OPTIMAL FREQUENCY PREDICTIONS FOR ";G3ZCZ$;" ON ";D0;M0$
2650 PRINT "SUNSPOT NUMBER ";S0:PRINT:IF P%=2 THEN LPRINT "SUNSPOT NUMBER ";S0:LPRINT
2660 PRINT "PX      1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24"
2670 IF P%=2 THEN LPRINT "   PX    BEARING DISTANCE   1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24"
2680 PRINT "------------------------------------------------------------------------------"
2690 IF P%=2 THEN LPRINT "------------------------------------------------------------------------------------------"
2700 RETURN
2710 LOCATE 17,1:PRINT "Which Mode, Single Px or Contest Sheet (S/C) ? "
2720 K$ = INKEY$:IF K$ = "" THEN 2720
2730 M1= INSTR("SC",K$):IF M1=0 THEN BEEP: GOTO 2720
2740 RETURN
```
{% endraw %}

## WHATSON.DOC

{% raw %}
```
        PC-HAM WHATSON.DOC Version 3.0 PAGE 1


                               PC-HAM Version 3.0

                 G3ZCZ AMATEUR RADIO CONTEST PACKAGE VERSION 3.0
         
              (C) Copyright 1985, 1986, 1987 - All Rights Reserved 

                               By Joe Kasser G3ZCZ
                                    POB 3419,
                                  Silver Spring,
                                 Md., 20901, USA.

        WHATSON is part of PC-HAM, a set of DATA Processing Amateur Radio 
        programs  for the user of a microcomputer in Amateur  Radio.  The 
        BASIC  language  programs  may or may not be described in  or  be 
        based  on programs described in the book,  SOFTWARE  FOR  AMATEUR 
        RADIO  written  by  Joe Kasser,  G3ZCZ,  published by  TAB  Books 
        (Number 1560), Blue Ridge Summit, Pa., 17214. The DBASE2 programs 
        perform database operations on logbook information.

             PC-HAM is written and supported by Joe Kasser, G3ZCZ.

        The program is distributed as a Shareware product. You may freely 
        copy  and  share the product with your  friends,  associates  and 
        other radio hams. If you decide to use the product, you are asked 
        to become a registered user by sending  a QSL card and a  contri-
        bution   to the author (suggested amount of $36.50 (ie.  half  of 
        73)  or  equivalent  in foreign currency (See  registration  form 
        below).

        The  contribution covers the cost of distribution of the  updated 
        disk,  and  supports the continual development of  "Software  for 
        Amateur  Radio".   Upon  receipt of your contribution,  you  will 
        receive  one free update disk ),  mail (electronic  and  regular) 
        support,  and  notice of further releases.   The update disk will 
        contain any new versions of the software on this disk  (converted 
        programs  from Northstar BASIC to IBM) plus new software,  accom-
        panying  the  series of articles currently being written  on  the 
        applications  of  data processing concepts of  microcomputers  to 
        amateur radio.

        Under  no circumstances may this product be sold  or  distributed 
        with  another  product without the express written permission  of 
        Joe Kasser, G3ZCZ.  

        Joe  Kasser,  G3ZCZ will only support unmodified copies  of  this 
        software.   Your comments and suggestions for changes are however 
        welcome.  If you are the first to suggest a change that is imple-
        mented,  you  will be sent a complimentary copy of the disk  with 
        the change incorporated.














        PC-HAM WHATSON.DOC Version 3.0 PAGE 2


                                    TABLE OF CONTENTS

        1.0 INTRODUCTION

        2.0  STARTING THE PROGRAM

        3.0  RUNNING THE PROGRAM

             3.1  Date for Predictions.

             3.2  Sunspot Number.

             3.3  Output Routing

             3.4  Mode Selection

                  3.4.1     Single PX

                  3.4.2     Contest Sheet 

             3.5  Prefix Loading

        4.0  NOTES








































        PC-HAM WHATSON.DOC Version 3.0 PAGE 3


        1.0  INTRODUCTION

        WHATSON  is a program that can be used to provide predictions  of 
        HF propagation.  It is based on a Minimuf devised by P .H Levine, 
        R.  B.  Rose,  and J. N. Martin and then modified by G3CCZ, G4LH, 
        G4GKO, 4X4AS and G3ZCZ


        The program is based on a particular model.  The original program 
        was  published  in  the March 1983 issue of  Radio  Communication 
        (published  by  the Radio Society of Great  Britain  (RSGB)).   A 
        number of events can affect actual propagation,  so use the model 
        with foresight.

        2.0  STARTING THE PROGRAM

        The  program is loaded and run in the general manner for  loading 
        and running programs written in BASIC.  Thus BASIC must be loaded 
        first and then the program is loaded.  Once the "RUN" instruction 
        has  been  given to the computer,  it will ask you  a  number  of 
        questions to determine exactly what you want it to do.

        3.0  RUNNING THE PROGRAM

        3.1  Date for Predictions.

        You  will be asked to tell the computer what date the predictions 
        are for, by the following question.

                 Are predictions for today (Y/N)

        If you want the predictions for that date,  the program will read 
        the system calendar.  If you want predictions for some other day, 
        you will be asked to enter that date.

        3.2  Sunspot Number.

        You will be asked to tell the program what the Sunspot number for 
        that date is.   If you don't know, try getting it from WWV or the 
        predictions in your favorite Ham magazine.

        3.3  Output Routing

        You may tell the program to print the output,  or just display it 
        on the CRT screen.

        3.4  Mode Selection

        The program operates in two modes.  

             3.4.1     Single PX

             The  single  prefix  mode,   gives  you  a  display  of  the 
             propagation  forecast for one call area for  one  particular 
             day.








        PC-HAM WHATSON.DOC Version 3.0 PAGE 4



             A  typical  display/printout starts off with a header  which 
             contains  the  date and sunspot numbers.   You QTH  and  QRA 
             Square locator information are then given.  The program next 
             shows the path,  target area prefix bearing and distance  of 
             the  target.   The  last item on the header is the date  and 
             time  that the printout/display was made,  again taken  from 
             the system clock/calendar.

             The  propagation  forecast is given for every  hour  on  the 
             hour.   The  Highest Possible Frequency (HPF),  the  Optimum 
             Usable Frequency (FOT) and the Lowest Usable Frequency (LUF) 
             are  then displayed in a tabular form.   When the display is 
             complete, you are asked if you want to have another go.

             If  no  propagation is possible at a  particular  hour,  the 
             display will show dashes instead of a number.

        ----------------------------------------------------------------
           DAY: 19   MONTH: 7   SUN SPOT NUMBER: 0

        G3ZCZ/4X  LOCAL QTH IS:LAT. 31.895 N/LON. 34.791  = KM71JV

        SHORT PATH TO K2, BEARING: 314 deg.  DISTANCE: 9095  KM

        DATE & TIME OF PRINTOUT:07-19-1986/23:12:37

          GMT   HPF    FOT    LUF               GMT   HPF    FOT    LUF
           0    14     14      5                 1     ------------
           2     ------------                    3     ------------
           4     ------------                    5     ------------
           6     ------------                    7     ------------
           8     ------------                    9    14     14     12
          10    15     15     12                11    16     15     12
          12    17     16     12                13    18     17     11
          14    19     17     11                15    19     17     11
          16    20     18     11                17    20     18     11
          18    20     18     11                19    19     18     10
          20    20     18      9                21    19     17      8
          22    17     16      7                23    15     15      5

                           DO YOU WANT ANOTHER QTH Y/N ?
        ----------------------------------------------------------------

             3.4.2     Contest Sheet 

             The Contest sheet mode gives you a printout of the direction 
             and   distance  as  well  as  the  optimum   frequency   for 
             propagation  every  hour  on  the  hour,  for  every  prefix 
             available.   It  is  designed for use when planning  contest 
             operation,  for with it you can see what the most  favorable 
             time  for predicted openings to different parts of the world 
             are, and plan band changes (or rest periods) accordingly.

             Take  a look at the closest bands to the  optimal  frequency 








        PC-HAM WHATSON.DOC Version 3.0 PAGE 5


             and see what gives.  

             A typical display contains the following data.

        ----------------------------------------------------------------
        SHORT PATH OPTIMAL FREQUENCY PREDICTIONS FOR G3ZCZ/4X ON  19 Jul 

        SUNSPOT NUMBER  0

        PX      1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 
        ----------------------------------------------------------------
        FG7    15 -- -- -- 14 14 -- -- -- -- 16 18 19 20 19 19 19 19 19 
        FH8    -- -- -- -- -- 15 17 18 18 19 19 18 18 17 17 17 17 17 17 
        FK8    -- -- 16 18 20 20 20 19 18 23 22 20 19 17 16 15 14 -- -- 
        FM7    15 -- -- -- 14 14 -- -- -- 14 16 18 20 20 19 19 19 19 19 
        FO8    -- -- 15 17 18 18 18 17 16 15 -- -- -- -- -- -- -- 14 16 
        FO8Clp 15 -- -- -- 15 16 17 16 15 -- -- -- -- 16 18 19 20 19 19 
        FP8    15 -- -- -- -- -- 14 16 16 17 18 18 19 19 19 19 19 19 19 
        FR7    -- -- -- -- 16 18 20 21 22 22 21 20 19 18 18 18 18 18 19 
        FS7    15 -- -- -- 14 14 -- -- -- -- 16 17 19 20 19 19 19 19 19 
        FW8    15 -- -- -- -- -- -- -- -- 15 18 20 21 20 19 19 19 19 18 
        FY7    15 -- -- -- -- -- -- -- -- 15 18 20 21 20 19 19 19 19 18 
        G      15 -- -- -- 15 16 17 18 19 19 20 20 20 20 20 20 20 20 19 
        GD     15 -- -- -- 15 16 17 18 18 19 19 20 20 20 20 20 20 20 20 
        GI     -- -- -- -- -- -- -- 14 15 15 15 16 16 16 16 16 16 15 15 
        GJ     15 -- -- -- 15 16 17 18 19 20 20 20 20 20 20 20 20 20 19 
        GM     -- -- -- -- -- -- -- 14 15 15 15 15 16 16 16 16 15 15 15 
        GU     15 -- -- -- 15 16 17 18 19 20 20 20 20 20 20 20 20 20 19 
        ---------------------------------------------------------------

        3.5  Prefix Loading

        The  computer will then load the local station geographical  data 
        from  the file G3ZCZ.DAT,  and then the data associated with  all 
        the  remaining amateur prefixes WHATSON.DAT.   It will display  a 
        message as follows while that job is going on.

                 PLEASE STANDBY WHILE PREFIX DATA ARE LOADED


        If  you  elected  the Contest mode,  it will  begin  without  any 
        further ado.   In the single prefix mode,  you will be  presented 
        with the following menu.




















        PC-HAM WHATSON.DOC Version 3.0 PAGE 6


        ----------------------------------------------------------------
                                       PREFIX MENU

         NBR   PX            NBR   PX            NBR   PX            
         1   - 1A0KM         18  - 4T            35  - 5X            
         2   - 1S            19  - 4U1ITU        36  - 5Z            
         3   - 3A            20  - 4U1UN         37  - 6C            
         4   - 3B6           21  - 4V            38  - 6D            
         5   - 3B8           22  - 4W            39  - 6O            
         6   - 3B9           23  - 4X            40  - 6T            
         7   - 3C            24  - 4Z            41  - 6W            
         8   - 3C0           25  - 5A            42  - 6Y            
         9   - 3D2           26  - 5B4           43  - 7J            
         10  - 3D6           27  - 5H            44  - 7O            
         11  - 3V8           28  - 5L            45  - 7P            
         12  - 3X            29  - 5N            46  - 7Q            
         13  - 3Y            30  - 5R            47  - 7X            
         14  - 4D            31  - 5T            48  - 7Z            
         15  - 4J1           32  - 5U            49  - 8J1           
         16  - 4N            33  - 5V            50  - 8N            
         17  - 4S            34  - 5W            51  - 8P            

        Pick a number corresponding to a prefix 
                                    (0 will give you further choices )?
        ---------------------------------------------------------------

        If  you  enter  the  number 0,  you will get a  further  menu  of 
        choices.   If you enter 999,  you will be asked to redefine  YOUR 
        OWN  local geographical co-ordinates.   You must run this  choice 
        the  first  time or the data you generate will have no  practical 
        purposes for your QTH.

        4.0  NOTES

        The program is based on a mathematical model.   In comparing logs 
        with  the predictions,  it has been noted that the data tends  to 
        lose accuracy when the path length is greater than 8000 kM or the 
        path passes over the geographical poles.   If you are  interested 
        enough  in the further development of the model,  why not compare 
        your logs against the predictions. You should be able to get hold 
        of sunspot records from magazine back issues and let me know  how 
        they compare.






















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0562

     Volume in drive A has no label
     Directory of A:\

    ADVERT            5376   1-21-88  11:09p
    CONTEST  ARC     14637  12-28-87   3:22a
    CQSS     ARC     11462  12-28-87   3:24a
    DISK     DOC       589   1-21-88  11:33p
    FILE0562 TXT      1834   6-28-89   1:50p
    GO       BAT        38   7-08-87  12:19a
    GO       TXT       386   6-28-89   1:53p
    LOGBOOK  ARC    101357   1-21-88   9:12p
    PKX35A35 EXE     70784   5-30-87  10:47p
    READ     ME       1181   1-21-88  11:27p
    README   BAT        39   6-28-89   1:52p
    REGISTER ME       1408   1-21-88  11:11p
    SOFT4HAM ARC     57495   9-20-87  10:42p
    WHATSON  ARC     15841  12-28-87   3:25a
           14 file(s)     282427 bytes
                           30720 bytes free
