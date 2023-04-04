---
layout: page
title: "PC-SIG Library Disk #339"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0339/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0339"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "CREATOR"

    Creator, Reporter and Cheapsort comprise this database management
    system.  Creator provides the principle database functions (record,
    add, delete etc.); Reporter writes report programs; Cheapsort sorts
    Creator files as well as files created under other database systems.
    
    System Requirements: Two disk drives
    
    How to Start:  From DOS, enter TYPE CSORT.DOC for documentation.
    To run the BASIC programs consult the GETTING STARTED for
    your configuration.  The Cheapsort programs run from DOS.
    
    File Descriptions:
    
    C451MIN  LIB  Alternate record management program
    C451     LIB  Main record management program
    R451     LIB  BASIC program shell for custom report programs
    MENU     BAS  Menu program for Creator system
    CSORT3   EXE  Cheapsort, version 3
    CSORT3   DOC  Documentation for Cheapsort, version 3
    CSORT2   EXE  Cheapsort, version 2
    CSORT    EXE  The Cheapsort program
    CSORT    DOC  Documentation for Cheapsort
    CREATOR  BAS  Program that introduces the Creator system
    REKEY    BAS  Utility program for maintaining Creator key files
    REPORTOR BAS  Writes custom report programs
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CREATOR.BAS

```bas
1 'THE CREATOR WAS ORIGINALLY WRITTEN ON 1/16/80 BY BRUCE W. TONKIN
2 'AND WAS ADAPTED FOR CP/M AND MICROSOFT BASIC 5.01 ON 5/11/80
3 'IT WAS ADAPTED AGAIN FOR MBASIC 4.51 ON 3/18/81 AND FOR THE TRS-80 MODEL III
4 'ON 2/20/83, AND FOR MBASIC 5.2 ON 3/23/83. THE PC VERSION WAS FIRST RUN ON
5 '4/03/83 AND HAS BEEN ENHANCED SEVERAL TIMES SINCE; THE LAST ON 4/05/83
6 'THE CREATOR HAS BEEN TESTED EXTENSIVELY UNDER DOS 1.1. USE UNDER OTHER
7 'DOS VERSIONS SHOULD BE ALL RIGHT, BUT CANNOT BE GUARANTEED.
8 '
9 'THE IBM PC VERSION WILL REQUIRE ENOUGH MEMORY SO THAT BASIC WILL LOAD AND
10 'SHOW AT LEAST 25000 BYTES FREE; THIS SHOULD BE A 32K MACHINE. AT LEAST
11 'ONE DISK DRIVE IS REQUIRED (160K), BUT TWO WOULD BE NICE. NO PRINTER IS
12 'REQUIRED, THOUGH ONE IS SUPPORTED.
13 '
14 'THIS IS PUBLIC DOMAIN SOFTWARE. YOU SHOULD NOT HAVE PAID ANYONE FOR A COPY
15 'OF THIS PROGRAM UNLESS THEY ARE SELLING IT UNDER A LICENSE FROM ME.
16 'IN ANY EVENT, YOU MAY COPY THIS DISK AND GIVE IT TO YOUR FRIENDS. IF YOU
17 'NEED A SORT ($25), DOCUMENTATION ($11) OR ADDITIONAL SOFTWARE, WRITE ME:
18 'BRUCE W. TONKIN, 34069 HAINESVILLE ROAD, ROUND LAKE IL 60073
19 KEY OFF:GOTO 60
20 FX=0:IF LEN(CV$)<1 THEN RETURN
30 FOR II=1 TO LEN(CV$):CV%=ASC(MID$(CV$,II,1)):IF CV%=34 AND FX=0 THEN FX=1:ELSE IF CV%=34 AND FX=1 THEN FX=0
40 IF CV%>90 AND FX=0 THEN CV%=CV% AND 95
50 MID$(CV$,II,1)=CHR$(CV%):NEXT II:RETURN
60 CLS:PRINT TAB(5);"THE CREATOR: COPYRIGHT (C), 1983, BY BRUCE W. TONKIN":PRINT TAB(10);"34069 HAINESVILLE ROAD, ROUND LAKE IL 60073":PRINT:PRINT TAB(20);"THIS WORK MAY NOT BE SOLD"
70 PRINT"WITHOUT THE EXPRESS WRITTEN PERMISSION OF BRUCE W. TONKIN.":PRINT:PRINT TAB(18);"BUT MAY BE FREELY REPRODUCED.":PRINT TAB(21);"GIVE A COPY TO A FRIEND!"
80 PRINT:PRINT TAB(5);"YOU MUST LEAVE THIS NOTICE IN PLACE AND UNCHANGED!":LOCATE 20,1:PRINT"PROGRAM MANUALS ARE AVAILABLE, FOR $10 + $1 POSTAGE, FROM THE PROGRAM'S AUTHOR.":PRINT TAB(20);"ADD $5.00 EXTRA, IF OVERSEAS."
85 FOR I=1 TO 6000:NEXT
90 CLS
100 PRINT"You may now change diskettes, if you wish. However, please be sure you have":PRINT"a diskette with the file called C451.LIB on your default drive.":PRINT"DEPRESS ANY KEY WHEN READY TO CONTINUE.";
110 AN$=INPUT$(1)
120 RESET:CLS:PRINT"THIS IS THE CREATOR, VERSION 3.1.":PRINT"It will allow you to generate a program that will create, update, and access a":PRINT"hashed data file. First, you must tell me the name you want to give your":PRINT"generated program."
130 PRINT"YOU ARE LIMITED TO 8 ALPHABETIC CHARACTERS.":PRINT"YOUR PROGRAM NAME WILL BE: ";:LINE INPUT PN$:CV$=PN$:GOSUB 20:PN$=CV$:IF LEN(PN$)>8 THEN PRINT"TOO LONG!":BEEP:GOTO 130
140 FOR I=1 TO LEN(PN$):IF MID$(PN$,I,1)<"A" OR MID$(PN$,I,1)>"Z" THEN PRINT"INVALID CHARACTER USED: ";MID$(PN$,I,1):EX=1
150 NEXT:IF EX THEN EX=0:GOTO 130
160 PRINT"The disk drive are lettered, A - D. Which drive do you want your data file on,":PRINT"when your program is being run: ";
170 AN$=INPUT$(1):IF AN$<"A" OR AN$>"D" THEN BEEP:GOTO 170:ELSE PRINT AN$
190 PRINT"What drive do you want your program written on: ";
200 BN$=INPUT$(1):IF BN$<"A" OR BN$>"D" THEN BEEP:GOTO 200:ELSE PRINT BN$
220 PRINT"What drive do you want your program to be on, when you are running it: ";
230 CN$=INPUT$(1):IF CN$<"A" OR CN$>"D" THEN BEEP:GOTO 230:ELSE PRINT CN$
250 ON ERROR GOTO 1930
260 OPEN"I",1,BN$+":"+PN$+".BAS":ERROR 126
270 KF$=AN$+":"+PN$+".KEY":DF$=AN$+":"+PN$+".DAT":PN$=PN$+".BAS":OPEN"O",1,BN$+":"+PN$:PRINT #1,"1 'PROGRAM NAME: ";PN$:PRINT #1,"2 'DATA FILE NAME IS: ";DF$:PRINT #1,"3 'DATA FILE SHOULD BE ON DRIVE ";AN$
280 CLS:PRINT"What is the maximum number of records (per data disk) you want to allow":PRINT"in your data file: ";:LINE INPUT MS$:MS=VAL(MS$):IF MS<1 OR MS>32767 THEN 280
290 PRINT"What is the record length for each record in your data file":PRINT"(1 to 256 is permitted): ";:LINE INPUT RS$:RS=VAL(RS$):IF RS<1 OR RS>256 THEN 290
300 PRINT #1,"4 'MAXIMUM NUMBER OF RECORDS/DISK IS";MS:PRINT #1,"5 'RECORD LENGTH IS";RS:Q$=CHR$(34):PRINT"Please input the title you want displayed for your program: ";:LINE INPUT TI$
305 PRINT #1,"6 RESET"
310 LN=LN+10:PRINT #1,LN;"'BEGIN":LN=LN+10:PRINT #1,LN;"CLS":LN=LN+10:PRINT #1,LN;"OPEN";Q$;"R";Q$;",1,";Q$;DF$;Q$;",";RS;":OPEN";Q$;"R";Q$;",2,";Q$;KF$;Q$;",2:FIELD #2,2 AS KP$"
330 LN=LN+10:PRINT #1,LN;"ON ERROR GOTO 25000":LN=LN+10:PRINT #1,LN;"DIM F$(50),G$(50)"
340 PRINT #1,"32040 LSET KP$=MKI$(-1)"
350 IF RS<256 THEN PRINT #1,"32045 FIELD #1,";RS;" AS DL$:LSET DL$=STRING$(";RS;",250):PUT 1,1":ELSE PRINT #1,"32045 FIELD #1,255 AS DL$,1 AS DX$:LSET DL$=STRING$(255,250):LSET DX$=CHR$(250):PUT 1,1"
360 PRINT #1,"32050 FOR I=1 TO";MS:DIM F$(50)
370 CLS:PRINT"You may now choose, if you wish, an exit code or message. This is an entry the":PRINT"operator may use in place of a normal entry in any field. If the operator"
380 PRINT"makes this entry, the program will leave entry or update and return to the":PRINT"program menu, without adding to the file or altering any more information on":PRINT"the disk. Previous changes remain, though."
390 PRINT"Do you want to use an exit code (Y/N): ";
400 OO$=INPUT$(1):CV$=OO$:GOSUB 20:OO$=CV$:PRINT OO$:IF OO$<>"Y" AND OO$<>"N" THEN 390
410 IF OO$="Y" THEN PRINT"What is your exit code or message: ";:LINE INPUT OT$
420 CLS:PRINT"Now we must describe the positions of the fields in the data file.":PRINT"The fields may be smaller than you think necessary, because numbers can be"
425 PRINT"PACKED - - squeezed - - into less space in the file than they take to print":PRINT"on the screen or on a piece of paper."
430 PRINT"Whole numbers in the range -127 to 127 can be stored in just one space on disk.":PRINT"This sort of packed number is called PACKED HALF PRECISION.":PRINT"Whole numbers in the range -32767 to 32767 can be stored on disk in just two"
440 PRINT"spaces. This kind of packed number is called PACKED INTEGER.":PRINT"Numbers with a decimal point and up to six significant digits can be stored":PRINT"on disk in only four spaces as PACKED SINGLE PRECISION numbers."
450 PRINT"Finally, numbers of up to 16 significant digits (excluding the decimal point":PRINT"and the sign of the number) can be stored as PACKED DOUBLE PRECISION numbers":PRINT"in only eight spaces on disk. Please use packing whenever possible."
455 PRINT"Take care to use the correct number of spaces for each field. I will now ask":PRINT"you to tell me how many spaces to use for each field in your record. You must":PRINT"allocate the space in your record from left to right. You have";RS;"spaces"
456 PRINT"in each record, and up to";(47+RS+ABS(RS-47))/2;"fields."
470 PRINT"PLEASE TYPE IN 999 FOR THE NUMBER OF SPACES TO ALLOCATE WHEN YOU ARE DONE."
480 A=1
490 PRINT"Field number";A;"uses: ";:LINE INPUT F$(A):EX=EX+VAL(F$(A)):IF EX>RS AND F$(A)<>"999" THEN PRINT"EXCEEDS RECORD LENGTH, TRY AGAIN.":BEEP:EX=EX-VAL(F$(A)):GOTO 490
500 IF F$(A)="999" THEN 560:ELSE IF VAL(F$(A))=0 THEN PRINT"INVALID.":BEEP:GOTO 490
510 PRINT"Is this field size OK (Y/N)? ";
520 CV$=INPUT$(1):GOSUB 20:EX$=CV$:PRINT EX$:IF EX$="N" THEN EX=EX-VAL(F$(A)):GOTO 490
530 IF EX$<>"Y" THEN 510
540 IF RS-EX<1 THEN A=A+1:GOTO 560
550 PRINT"All right. You have";RS-EX;"spaces left in your record.":A=A+1:GOTO 490
560 LN=LN+10:PRINT #1,LN;"'SET UP FIELDS IN THE DATA RECORD":A=A-1:SL=LN:OF$="GOSUB 36000":FOR I=1 TO A:PRINT #1,36000.+I;"F%(";MID$(STR$(I),2);")=";F$(I):NEXT
570 PRINT #1,"36800 CD%=0":PRINT #1,"55 DIM F%(";A;")":PRINT #1,"36810 FOR ZZ=1 TO";A
580 LN=LN+10:PRINT #1,LN;"FOR I=1 TO";A;":G$(I)=";Q$;Q$;":NEXT:FC=0:CLS:UF=0:G$=";Q$;Q$;":";OF$:LN=LN+10:PRINT #1,LN;"PRINT TAB(28);";Q$;"PRODUCED BY THE CREATOR";Q$
590 LN=LN+10:PRINT #1,LN;"PRINT TAB(";(80-LEN(TI$))\2;")";Q$;TI$;Q$
630 LN=190:IF OO$<>"Y" THEN 650
640 PRINT #1,LN;"PRINT";Q$;"To return to the menu from entry or update without entering or updating your";Q$:LN=LN+10:PRINT #1,LN;"PRINT";Q$;"record, type in ";OT$;" for a field entry.";Q$
650 LN=LN+10:PRINT #1,LN;"AN$=INPUT$(1):ON (INSTR(";Q$;"EeLlSsUuDdIiXx";Q$;",AN$)-1.5)\2+1 GOTO 1000,10000,35000,11000,12000,32000,38000,";LN+20
655 LN=LN+10:PRINT #1,LN;"GOTO";SL:LN=LN+10:PRINT #1,LN;"CLOSE:NEW":DIM D%(50)
660 CLS:PRINT"Which field is the key field? Please input the field number: ";:INPUT KF
670 PRINT #1,"35005 GET 2,1:KP=CVI(KP$):FOR K=1 TO KP:RP=K:GET 1,K":PRINT #1,"35010 IF F$(";KF;")>CHR$(249) THEN 35990"
680 PRINT #1,"35000 CLS:INPUT";Q$;"Field number to scan (1 -";A;")";Q$;";NS:IF NS<1 OR NS>";A;" THEN 35000":PRINT #1,"35990 NEXT K:GOTO";SL
690 LN=1000:FOR QR=1 TO KF-1:FT=FT+VAL(F$(QR)):NEXT QR:GOSUB 700:GOTO 810
700 CLS:PRINT"Now we must describe the input prompts the operator will see, the edits to be":PRINT"performed, and the kind of data for each field. To do this, I will ask a":PRINT"series of questions about each field."
710 PRINT"To the question KIND OF DATA, the possible responses are:":PRINT"N...............................Numeric data, not packed, stored as characters."
720 PRINT"PH....Packed Half-precision, small (-127 to 127) integers, stored in one space."
725 PRINT"PI.....................Packed Integers (-32767 to 32767), stored in two spaces."
730 PRINT"PS...Packed Single-precision; floating point with up to six significant digits."
735 PRINT"PD...........Packed Double-precision; floating point with up to sixteen digits."
740 PRINT"C.........................................Character data, stored as characters."
745 PRINT"To the PROMPT question, type the message the operator will see when data is":PRINT"being entered."
750 PRINT"To the BAD INPUT IF question, type as many edits as you wish, of the following":PRINT"general forms:":PRINT">999     <";Q$;"A";Q$;"     NOT NUMERIC       NO ENTRY":PRINT"LENGTH>9      NOT ALPHA     CONTAINS";Q$;"Z";Q$;"     >=4       <>6"
760 PRINT"Please note the mandatory quotation marks around alphabetic edits."
780 PRINT:PRINT"To the question ERROR MESSAGE, type the message you want the operator to see,":PRINT"if that error is made. You may signal completion of the edits for any field by"
785 PRINT"just depressing the ENTER key; to repeat these directions, enter the word HELP."
790 PRINT"NOW DEPRESS ANY KEY TO CONTINUE: ";
800 PZ$=INPUT$(1):PRINT:RETURN
810 FOR I=1 TO A:I$=MID$(STR$(I),2):PRINT"FIELD NUMBER";I;" LENGTH =";:L=VAL(F$(I)):PRINT L
820 P$="":PRINT"PROMPT: ";:LINE INPUT P$:IF P$="HELP" THEN GOSUB 700:GOTO 820
830 INPUT"Should the prompt and the reply be on the same line (Y/N): ";NY$:CV$=NY$:GOSUB 20:NY$=CV$:IF CV$="Y" THEN NY$=";":ELSE NY$=""
840 K$="":PRINT"KIND OF DATA: ";:IF L<>1 AND L<>2 AND L<>4 AND L<>8 THEN PRINT"C":K$="C":ELSE LINE INPUT K$:CV$=K$:GOSUB 20:K$=CV$:IF K$="HELP" THEN GOSUB 700:GOTO 840
850 IF K$="PH" OR K$="PI" OR K$="PS" OR K$="PD" OR K$="N" OR K$="C" THEN 870
860 PRINT"INVALID DATA TYPE: PLEASE USE PH, PI, PS, PD, N OR C ONLY!":BEEP:GOTO 840
870 IF (K$="PH" AND L=1) OR (K$="PI" AND L=2) OR (K$="PS" AND L=4) OR (K$="PD" AND L=8) OR (K$="N") OR (K$="C") THEN 890
880 PRINT"INCORRECT LENGTH FOR DATA TYPE!":BEEP:GOTO 840
890 LN=LN+10:PRINT #1,LN;"PRINT";Q$;P$;Q$;NY$:BL=LN:IF K$<>"C" THEN PRINT #1,BL+1;"IF UF<>0 AND G$=";Q$;Q$;" THEN G$=G$(";I$;")"
900 LN=LN+10:PRINT #1,LN;"LINE INPUT G$(";I$;")";:D%(I)=LN:IF OO$="N" THEN PRINT #1," ":ELSE PRINT #1,":IF G$(";I$;")=";Q$;OT$;Q$;" THEN";SL
910 IF K$<>"PI" AND K$<>"PH" THEN 930
920 PRINT #1,LN+1;"IF UF THEN GOSUB 40000":S1%=1
930 IF K$<>"PS" THEN 950
940 PRINT #1,LN+1;"IF UF THEN GOSUB 40500":S2%=1
950 IF K$<>"PD" THEN 970
960 PRINT #1,LN+1;"IF UF THEN GOSUB 40500":S2%=1
970 IF K$<>"PI" THEN 990
980 LN=LN+10:PRINT #1,LN;"IF ABS(VAL(G$(";I$;")))>32767 THEN PRINT";Q$;"NUMBER OUT OF RANGE. MUST BE FROM -32767 TO 32767.";Q$;":GOTO";BL
990 IF K$<>"PH" THEN 1010
1000 LN=LN+10:PRINT #1,LN;"IF ABS(VAL(G$(";I$;")))>127 THEN PRINT";Q$;"NUMBER OUT OF RANGE. MUST BE FROM -127 TO 127.";Q$;":GOTO";BL
1010 IF K$="PI" OR K$="PH" THEN LN=LN+10:PRINT #1,LN;"IF G$(";I$;")=";Q$;"0";Q$;" THEN";LN+20
1020 IF K$<>"PI" AND K$<>"PH" THEN 1040
1030 LN=LN+10:PRINT #1,LN;"IF INT(VAL(G$(";I$;")))<>VAL(G$(";I$;")) THEN PRINT";Q$;"MUST BE A WHOLE NUMBER.";Q$;":GOTO";BL
1040 BI$="":PRINT"BAD INPUT IF: ";:LINE INPUT BI$:CV$=BI$:GOSUB 20:BI$=CV$:IF BI$="" THEN 1260
1050 IF INSTR(BI$,"LENGHT")>0 THEN PRINT"MISSPELLED WORD.":GOTO 1040
1060 IF BI$="HELP" THEN GOSUB 700:GOTO 1040
1070 PRINT"ERROR MESSAGE: ";:LINE INPUT EM$:CV$=EM$:GOSUB 20:IF CV$="HELP" THEN GOSUB 700:GOTO 1070
1080 PRINT"Is this a fatal error, or a non-fatal error? If it's a fatal error, this ":PRINT"simply means the operator must keep trying to input this field until the":PRINT"input is correct. If this is a non-fatal error, then the (possibly) erroneous"
1085 PRINT"input will be accepted, and the error message will be printed only as a":PRINT"warning. DEPRESS F IF THE ERROR IS A FATAL ERROR, OR ANY OTHER KEY IF NOT: ";
1090 FE$=INPUT$(1):CV$=FE$:GOSUB 20:FE$=CV$:PRINT FE$:IF FE$="F" THEN FE$=":GOTO"+STR$(BL):ELSE FE$=""
1100 IF INSTR(BI$,"NOT NUMERIC") THEN S3%=1:GOTO 1130
1110 IF INSTR(BI$,"NOT ALPHA") THEN S4%=1:GOTO 1140:ELSE IF INSTR(BI$,"NO ENTRY") THEN 1150
1120 IF INSTR(BI$,"CONTAINS") THEN 1160:ELSE IF INSTR(BI$,"LENGTH") THEN 1200:ELSE 1210
1130 LN=LN+10:PRINT #1,LN;"CD$=G$(";I$;"):E=0:GOSUB 30000:IF E=1 THEN PRINT";Q$;EM$;Q$;FE$:GOTO 1040
1140 LN=LN+10:PRINT #1,LN;"CD$=G$(";I$;"):E=0:GOSUB 31000:IF E=1 THEN PRINT";Q$;EM$;Q$;FE$:GOTO 1040
1150 LN=LN+10:PRINT #1,LN;"IF LEN(G$(";I$;"))=0 THEN PRINT";Q$;EM$;Q$;FE$:GOTO 1040
1160 FH=INSTR(BI$,Q$):IF FH<1 THEN PRINT"YOU FORGOT QUOTES.":BEEP:GOTO 1040
1170 IF FH<1 THEN 1190:ELSE FH2=INSTR(FH+1,BI$,Q$):IF FH2<1 THEN BI$=" ":GOTO 1160
1180 FH$=MID$(BI$,FH+1,FH2-FH1-1):LN=LN+10:PRINT #1,LN;"IF INSTR(G$(";I$;"),";Q$;FH$;Q$;")>0 THEN PRINT";Q$;EM$;Q$;FE$:FH=0:GOTO 1040
1190 PRINT"SYNTAX ERROR. CONTAINS should not be set off by quotes.":BEEP:GOTO 1040
1200 FH=INSTR(BI$,"LENGTH"):LN=LN+10:PRINT #1,LN;"IF LEN(G$(";I$;"))";MID$(BI$,FH+6);" THEN PRINT";Q$;EM$;Q$;FE$:FH=0:GOTO 1040
1210 IF INSTR(BI$,"<")<1 AND INSTR(BI$,">")<1 AND INSTR(BI$,"=")<1 THEN 1220:ELSE 1230
1220 PRINT"SYNTAX ERROR. REPEAT COMMAND, PLEASE.":BEEP:GOTO 1040
1230 C=INSTR(BI$,Q$):IF C<1 THEN 1250
1240 LN=LN+10:PRINT #1,LN;"IF G$(";I$;")";BI$;" THEN PRINT";Q$;EM$;Q$;FE$:FH=0:GOTO 1040
1250 LN=LN+10:PRINT #1,LN;"IF VAL(G$(";I$;"))";BI$;" THEN PRINT";Q$;EM$;Q$;FE$:FH=0:GOTO 1040
1260 LN=LN+10:IF K$="PI" THEN PRINT #1,LN;"G$(";I$;")=MKI$(VAL(G$(";I$;")))"
1270 IF K$="PH" THEN PRINT #1,LN;"G$(";I$;")=FNPH$(VAL(G$(";I$;")))"
1280 IF K$="PI" THEN PRINT #1,11900+I;"IF UF<>";I$;" THEN G$(";I$;")=MKI$(VAL(G$(";I$;")))"
1290 IF K$="PH" THEN PRINT #1,11900+I;"IF UF<>";I$;" THEN G$(";I$;")=FNPH$(VAL(G$(";I$;")))"
1300 IF K$="PI" THEN PRINT #1,28000+RL;"G$(";I$;")=STR$(CVI(F$(";I$;")))"
1310 IF K$="PH" THEN PRINT #1,28000+RL;"G$(";I$;")=STR$(FNUH(F$(";I$;")))"
1320 IF K$="PS" THEN PRINT #1,LN;"G$(";I$;")=MKS$(VAL(G$(";I$;")))"
1330 IF K$="PS" THEN PRINT #1,11900+I;"IF UF<>";I$;" THEN G$(";I$;")=MKS$(VAL(G$(";I$;")))"
1340 IF K$="PS" THEN PRINT #1,28000+RL;"G$(";I$;")=STR$(CVS(F$(";I$;")))"
1350 IF K$="PD" THEN PRINT #1,LN;"G$(";I$;")=MKD$(VAL(G$(";I$;")))"
1360 IF K$="PD" THEN PRINT #1,11900+I;"IF UF<>";I$;" THEN G$(";I$;")=MKD$(VAL(G$(";I$;")))"
1370 IF K$="PD" THEN PRINT #1,28000+RL;"G$(";I$;")=STR$(CVD(F$(";I$;")))"
1380 IF K$="N" OR K$="C" THEN PRINT #1,28000+RL;"G$(";I$;")=F$(";I$;")"
1390 RL=RL+10:LN=LN+10:PRINT #1,LN;"RETURN":NEXT
1400 PRINT #1,"1006 ON FC GOSUB ";:FOR I=1 TO A-1:PRINT #1,MID$(STR$(D%(I)-10),2,4);",";:NEXT:PRINT #1,MID$(STR$(D%(A)-10),2,4)
1410 PRINT #1,"1007 IF FC<";A;" THEN 1005:ELSE";LN+10
1420 PRINT #1,"29010 FOR I=1 TO";A:DIM H$(50):CLS:PRINT"When the record is displayed, what title should be used for":FOR I=1 TO A:PRINT"FIELD NUMBER:";I;:LINE INPUT H$(I):PRINT #1,22000+I;"DATA";Q$;H$(I);Q$:NEXT
1430 CLS:PRINT"Do you want to display computed data along with your record (Y/N)? ";
1440 DC$=INPUT$(1):CV$=DC$:GOSUB 20:DC$=CV$:PRINT DC$:IF INSTR("YN",DC$)<1 THEN BEEP:GOTO 1430:ELSE IF DC$="N" THEN 1510
1450 CLS:PRINT"All right. You may display computed data on as may fields as you desire.":PRINT"However, your should remember that, to do this, you will have to tell me in":PRINT"some detail just what you want printed and how it should be printed."
1460 PRINT"All fields are available for printing of calculations. Any operation allowed":PRINT"in BASIC is permitted, including all string, logical, and mathematical":PRINT"operations. However, ALL FIELDS ARE TO BE TREATED AS STRINGS. Therefore, if you"
1470 PRINT"want to display the sum of field 7 and field 9, you must tell me to display":PRINT"VAL(G$(7))+VAL(G$(9)). All fields must be referenced by means of this G$()":PRINT"array, where the subscript (number inside the parentheses) is the number of"
1480 PRINT"the field with which you are currently working. I will ask you for a command":PRINT"line, a display title, and a print format for each computed or derived field":PRINT"you want to display. NOW DEPRESS ANY KEY TO CONTINUE: ";
1500 DC$=INPUT$(1):CLS:JL=29030:GOSUB 2000
1510 IF RS<256 THEN PRINT #1,"12910 FIELD #1,";RS;" AS DL$:LSET DL$=STRING$(";RS;",250):PUT 1,RP:LSET KP$=MKI$(-RP):PUT 2,KP:GOTO";SL
1520 IF RS=256 THEN PRINT #1,"12910 FIELD #1,255 AS DL$,1 AS DX$:LSET DL$=STRING$(255,250):LSET DX$=CHR$(250):PUT 1,RP:LSET KP$=MKI$(-RP):PUT 2,KP:GOTO";SL
1530 PRINT #1,"10860 GOTO";SL
1540 PRINT #1,"11840 IF UF>";A;" OR UF<0 THEN PRINT";Q$;"INVALID FIELD.";Q$;":BEEP:GOTO 11810":PRINT #1,"11850 IF UF=0 THEN";SL:PRINT #1,"11860 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1":PRINT #1,"11865 ON UF GOSUB ";
1550 FOR TZ=1 TO A-1:PRINT #1,MID$(STR$(D%(TZ)-10),2,4);",";:NEXT:PRINT #1,MID$(STR$(D%(A)-10),2,4):PRINT #1,"11870 IF UF<>";KF;" THEN 11900:ELSE ZZ$=STRING$(F%(";KF;"),32):LSET ZZ$=G$(";KF;
1560 IF RS<256 THEN PRINT #1,"):FIELD #1,";RS;" AS DL$:LSET DL$=STRING$(";RS;",250):PUT 1,RP:LSET KP$=MKI$(-RP):PUT 2,KP:GOSUB 26000:KP=RP"
1570 IF RS=256 THEN PRINT #1,"):FIELD #1,255 AS DL$,1 AS DX$:LSET DL$=STRING$(255,250):LSET DX$=CHR$(250):PUT 1,RP:LSET KP$=MKI$(-RP):PUT 2,KP:GOSUB 26000:KP=RP"
1580 PRINT #1,"11999 FOR I=1 TO";A;":LSET F$(I)=G$(I):NEXT:PUT 1,RP:G$=";Q$;Q$;":GOTO 11200":PRINT #1,"27010 CLS:GOSUB";D%(KF)-10;":KF$=STRING$(F%(";KF;"),32):LSET KF$=G$(";KF;")"
1590 PRINT #1,"27040 KP=KP+1:IF KP>";MS;" OR KP<2 THEN KP=1:'CIRCULATE AROUND"
1600 PRINT #1,"27050 GET 2,KP:RP=CVI(KP$):IF RP<-1 THEN 27040:ELSE IF RP=0 THEN ERROR 62:ELSE IF RP=-1 THEN LOCATE 25,1:PRINT";Q$;"RECORD NOT FOUND.";Q$;";:BEEP:FOR I=1 TO 2000:NEXT:CLOSE:RUN"
1610 PRINT #1,"27055 GET 1,RP:IF LEFT$(F$(";KF;"),LEN(ZZ$))=ZZ$ THEN RETURN:ELSE 27040"
1620 '
1630 LN=LN+10:PRINT #1,LN;"ZZ$=STRING$(F%(";KF;"),32):LSET ZZ$=G$(";MID$(STR$(KF),2);"):GOSUB 26000:KP=RP"
1640 PRINT #1,"26040 RP=";MID$(STR$(MS),2);"*RP/9999:RP=FIX(RP):RETURN"
1650 LN=LN+10:PRINT #1,LN;"'LOOK FOR RECORD SPACE.":LN=LN+10:PRINT #1,LN;"GOSUB";LN+10;":GOTO";LN+60:LN=LN+10:PRINT #1,LN;"KP=KP+1:IF KP>";MS;" OR KP<2 THEN KP=2":PRINT #1,"11890 KP=KP+1:IF KP>";MS;" OR KP<2 THEN KP=2"
1660 PRINT #1,"11895 GET 2,KP:IF CVI(KP$)<>-1 THEN 11890":PRINT #1,"11896 GET 2,1:RP=CVI(KP$)+1:LSET KP$=MKI$(RP):PUT 2,1:LSET KP$=MKI$(RP):PUT 2,KP"
1670 LN=LN+10:PRINT #1,LN;"GET 2,KP:RP=CVI(KP$):IF RP>0 THEN";LN-10:LN=LN+10:PRINT #1,LN;"IF RP<-1 THEN RETURN":LN=LN+10:PRINT #1,LN;"IF RP=0 THEN ERROR 62":LN=LN+10:PRINT #1,LN;"RETURN":LN=LN+10:PRINT #1,LN;"FOR K=1 TO";A
1680 LN=LN+10:PRINT #1,LN;"LSET F$(K)=G$(K):NEXT"
1690 LN=LN+10:PRINT #1,LN;"IF RP<-1 THEN PUT 1,ABS(RP):LSET KP$=MKI$(ABS(RP)):PUT 2,KP:ELSE PK=KP:GET 2,1:KP=1+CVI(KP$):LSET KP$=MKI$(KP):PUT 2,PK:PUT 1,KP:PUT 2,1"
1700 CLS:PRINT"Now we are almost done. We need to ask the operator if he is done with entry":PRINT"or update. You may choose the message you wish. The operator's input will be":PRINT"limited to a single key depression."
1710 PRINT"I would suggest something of the form:"
1720 PRINT"Are you finished with entry (Y/N)?":PRINT"ENTER YOUR CHOICE OF MESSAGE BELOW:":LINE INPUT TM$
1730 PRINT"If the operator is NOT done with entry, what should the response be? ";
1740 ND$=INPUT$(1):IF ND$="" THEN BEEP:GOTO 1740:ELSE CV$=ND$:GOSUB 20:ND$=CV$:PRINT ND$:IF ND$<" " THEN BEEP:GOTO 1730
1750 PRINT"If the operator IS done, what should the response be? ";
1760 ID$=INPUT$(1):IF ID$="" THEN BEEP:GOTO 1760
1765 CV$=ID$:GOSUB 20:ID$=CV$:PRINT ID$:IF ID$<" " THEN BEEP:GOTO 1760:ELSE LN=LN+10:PRINT #1,LN;"PRINT";Q$;TM$;Q$;";":LN=LN+10:PRINT #1,LN;"TM$=INPUT$(1):IF TM$=";Q$;Q$;" THEN";LN;":ELSE PRINT TM$":BL=LN-10
1770 LN=LN+10:PRINT #1,LN;"'IF DONE, RETURN TO MENU; ELSE CONTINUE ENTRY OR RE-DISPLAY CHOICE.":LN=LN+10:PRINT #1,LN;"IF TM$=";Q$;ID$;Q$;" THEN";SL
1780 LN=LN+10:PRINT #1,LN;"IF TM$<>";Q$;ND$;Q$;" THEN PRINT";Q$;"PLEASE ANSWER ";ND$;" OR ";ID$;Q$;":GOTO";BL:LN=LN+10:PRINT #1,LN;"FOR I=1 TO";A;":G$(I)=";Q$;Q$;":NEXT:FC=0:CLS:UF=0:G$=";Q$;Q$;":GOTO 1000"
1790 PRINT"Do you want to cut down on remarks in the generated program (Y/N)? ";
1800 CV$=INPUT$(1):IF CV$="" THEN BEEP:GOTO 1800:ELSE GOSUB 20:PRINT CV$
1810 IF CV$="Y" THEN OPEN"I",2,"C451MIN.LIB":ELSE IF CV$="N" THEN OPEN"I",2,"C451.LIB":ELSE BEEP:GOTO 1790
1820 CLS:PRINT"Please wait a moment while I finish writing your program."
1830 IF EOF(2) THEN 1900
1840 LINE INPUT #2,A$
1850 IF S3%<1 AND VAL(A$)>29999 AND VAL(A$)<30999 THEN 1830
1860 IF S4%<1 AND VAL(A$)>30998 AND VAL(A$)<31900 THEN 1830
1870 IF S1%<1 AND VAL(A$)>=40000. AND VAL(A$)<40500. THEN 1830
1880 IF S2%<1 AND VAL(A$)>=40500. AND VAL(A$)<41000. THEN 1830
1890 PRINT #1,A$:GOTO 1830
1900 CLOSE
1910 CLS:PRINT"Your program has been written and saved on the specified drive.":PRINT"You may now load it and run it, if you wish. Remember, your data file does NOT":PRINT"exist until you initialize it!":PRINT:PRINT"Thanks for running the CREATOR!"
1920 FOR I=1 TO 2000:NEXT:NEW
1930 IF ERL=260 AND ERR=53 THEN CLOSE 1:RESUME 270
1940 IF ERR=52 THEN PRINT"You have entered BASIC with too few files. Go back to DOS and re-enter BASIC,":PRINT"specifying at least two files. I recommend the default entry of three.":NEW
1950 IF (ERR=126 OR ERR=38) AND ERL=260 THEN PRINT"THAT PROGRAM ALREADY EXISTS. DEPRESS C TO WRITE OVER IT.":PRINT"DEPRESS ANY OTHER KEY TO RE-START THE CREATOR. ";:BEEP
1960 IF (ERR<>126 AND ERR<>38) OR ERL<>260 THEN 1990
1970 XN$=INPUT$(1):IF XN$="C" THEN CLOSE 1:RESUME 270
1980 END
1990 PRINT"ERROR NUMBER";ERR;" AT LINE";ERL:ON ERROR GOTO 0
2000 PRINT"Remember, all fields are character strings within the array G$()."
2010 PRINT"To perform arithmetic on a field, it is necessary to take its value first,":PRINT"with the VAL function. For example, to print the sum of fields 1, 2 and 3":PRINT"You would type in the command line:"
2020 PRINT"VAL(G$(1))+VAL(G$(2))+VAL(G$(3))"
2030 PRINT:PRINT"Now type in a command line which will tell me what operations to perform.":PRINT"Please don't type in a line longer than 240 characters.":PRINT"SIMPLY TYPE A RETURN WHEN YOU ARE DONE."
2040 PRINT:PRINT"COMMAND LINE: ";:LINE INPUT CV$:IF LEN(CV$)>240 THEN PRINT"TOO LONG!":BEEP:GOTO 2040:ELSE IF LEN(CV$)<1 THEN RETURN
2050 K=0:JK=0:J=0:FOR I=1 TO LEN(CV$):IF MID$(CV$,I,1)=Q$ THEN J=ABS(J-1)
2060 IF J THEN 2080
2070 IF MID$(CV$,I,1)=")" THEN K=K+1:ELSE IF MID$(CV$,I,1)="(" THEN JK=JK+1
2080 NEXT:IF JK<>K THEN PRINT"MISMATCHED PARENTHESES SOMEWHERE. PLEASE TRY AGAIN.":BEEP
2090 IF J THEN PRINT"MISMATCHED QUOTATION MARKS (";Q$;") IN YOUR COMMAND. PLEASE TRY AGAIN.":BEEP
2100 IF J>0 OR (JK<>K) THEN 2040
2110 PRINT"What title should I use for this data: ";:LINE INPUT TI$
2120 IF INSTR(TI$,Q$) THEN PRINT"NO QUOTATION MARKS ALLOWED.":BEEP:GOTO 2110
2130 JL=JL+10:PRINT #1,JL;"CL=CSRLIN:GOSUB 41000":PRINT #1,JL+5;"COLOR 0,7:PRINT";Q$;TI$;Q$;";:COLOR 7,0"
2140 PRINT"If this data is numeric, you may use a formatted print. If it is not, or if":PRINT"you do not want to print it in a formatted way, you need not.":PRINT"DO YOU WISH TO USE A FORMATTED PRINT (Y/N) ";
2150 TI$=INPUT$(1):IF TI$<" " THEN BEEP:GOTO 2150:ELSE PRINT TI$:IF TI$="N" THEN 2250
2160 IF TI$<>"Y" THEN BEEP:GOTO 2140
2170 LINE INPUT"What is the number of places to the LEFT of the decimal point: ";NL$:IF VAL(NL$)<0 OR VAL(NL$)>16 THEN PRINT"ILLEGAL! (0-16 ONLY).":BEEP:GOTO 2170
2180 LINE INPUT"What is the number of places to the RIGHT of the decimal point: ";NR$:IF VAL(NR$)<0 OR VAL(NL$)+VAL(NR$)>16 THEN PRINT"ILLEGAL NUMBER OF PLACES OR ILLEGAL TOTAL PLACES!":BEEP:GOTO 2180
2190 PRINT"Do you want to use commas (Y/N): ";
2200 NC$=INPUT$(1):IF NC$<" " THEN BEEP:GOTO 2200:ELSE IF INSTR("YN",NC$)<1 THEN BEEP:GOTO 2200
2210 PRINT NC$
2220 TI$="USING"+Q$+STRING$(VAL(NL$),"#"):IF NC$="Y" THEN TI$=TI$+","
2230 IF VAL(NR$)>0 THEN TI$=TI$+"."
2240 TI$=TI$+STRING$(VAL(NR$),"#")+Q$+";":CV$=TI$+CV$
2250 PRINT #1,JL+6;"PRINT ";CV$
2260 PRINT"Your commands have been accepted. Ready for your next command.":GOTO 2030
```

## MENU.BAS

```bas
10 KEY ON:KEY OFF:CLS
20 PRINT TAB(35);"THE CREATOR":PRINT:PRINT:PRINT
30 PRINT TAB(32);"M A I N   M E N U":PRINT:PRINT:PRINT
40 PRINT"SELECT:"
50 PRINT"Write a program, using the CREATOR .................................. Depress C"
60 PRINT"Write a report program, using the REPORTOR .......................... Depress R"
70 PRINT"Execute a program or report previously written ...................... Depress E"
80 PRINT"Sort a data file .................................................... Depress S"
90 PRINT"Exit this program ................................................... Depress X"
100 A$=INPUT$(1):IF A$<" " THEN BEEP:GOTO 100:ELSE A$=CHR$(ASC(A$) AND 95):PRINT A$
120 IF A$="C" THEN PRINT"LOADING THE CREATOR.":RUN"CREATOR.BAS"
130 IF A$="R" THEN PRINT"LOADING THE REPORTOR.":RUN"REPORTOR.BAS"
140 IF A$="S" THEN PRINT"LOADING CHEAPSORT.":RUN"CSORT.BAS"
150 IF A$="X" THEN CLS:NEW
160 IF A$<>"E" THEN BEEP:I=CSRLIN:IF I<20 THEN 100:ELSE CLS:RUN
170 LINE INPUT"NAME OF PROGRAM TO RUN: ";P$:PRINT"LOADING ";P$:RUN P$
```

## REKEY.BAS

```bas
10 RESET
20 KEY ON:KEY OFF:CLS:PRINT"This is the RE-KEY utility program for CREATOR data files.":PRINT:PRINT
30 PRINT"This program will allow you to do the following:"
40 PRINT"1. Repair a damaged key file."
50 PRINT"2. Create a new key file for a field not previously a key."
60 PRINT"3. Create added keys for records possibly added to an existing data file."
70 PRINT"4. Amend a key file to allow for a larger maximum number of records."
80 PRINT:PRINT"You must be able to tell me a few things about your data file. For example,":PRINT"the record length, the beginning and ending position and length of the key":PRINT"field, and the maximum number of records per disk allowed in the file. Of"
90 PRINT"course, you must know the name of the data file, as well."
100 PRINT:PRINT
110 PRINT"You should not ever use a packed field as a key field. The record length can":PRINT"be up to 256, and your key may be up to 255 characters in length.":PRINT"When I ask for file names, please give me the COMPLETE file name, including"
120 PRINT"the . and file type extension. NOW GIVE ME THE COMPLETE DATA FILE NAME:"
130 LINE INPUT DF$:IF DF$<"A" OR LEN(DF$)>14 THEN PRINT"ILLEGAL NAME!":BEEP:GOTO 110
140 PRINT"Now you must tell me the maximum number of records allowed in this file, per":PRINT"data disk: ";
150 LINE INPUT MR$:IF VAL(MR$)<1 OR VAL(MR$)>32767 THEN PRINT"ILLEGAL NUMBER OF RECORDS!":BEEP:GOTO 140
160 PRINT"What is the record length of each record in the data file: ";:LINE INPUT RL$
170 IF VAL(RL$)>256 OR VAL(RL$)<1 THEN PRINT"ILLEGAL RECORD LENGTH!":BEEP:GOTO 160
180 PRINT"What is the name of the proposed KEY file: ";:LINE INPUT KF$
190 IF KF$<"A" OR LEN(KF$)>14 THEN PRINT"ILLEGAL KEY FILE NAME!":BEEP:GOTO 180
200 PRINT"What is the beginning position of the key field in the data record?":PRINT"Please note: this is not usually the field number!"
210 LINE INPUT ST$:IF VAL(ST$)<1 OR VAL(ST$)>VAL(RL$) THEN PRINT"ILLEGAL STARTING POSITION! SHOULD BE FROM 1 TO";VAL(RL$):BEEP:GOTO 200
220 PRINT"What is the length of the key field: ";:LINE INPUT KL$:IF VAL(KL$)<1 OR VAL(KL$)>255 OR VAL(KL$)>VAL(RL$) THEN PRINT"ILLEGAL KEY LENGTH!":BEEP:GOTO 220
230 OPEN"R",1,DF$,VAL(RL$)
240 OPEN"R",2,KF$,2
250 FIELD #1,VAL(ST$)-1 AS D$, VAL(KL$) AS K$
260 RL%=VAL(RL$):IF RL%>255 THEN RL%=255
270 FIELD #1, RL% AS B$
280 MR%=VAL(MR$)
290 DIM R%(MR%):FOR I%=1 TO MR%:R%(I%)=-1:NEXT:I%=1:KL%=VAL(KL$)
300 LSET B$=STRING$(RL%,250):PUT 1,1:PRINT"RE-KEYING THROUGH RECORD NUMBER:"
310 I%=I%+1:GET 1,I%:F%=KL%:IF B$=STRING$(RL%,0) THEN 420
320 PRINT I%;
340 IF K$<CHR$(250) THEN 390
350 RP=RND:RP=MR%*RP
360 RP=RP+1:IF RP>MR% OR RP<2 THEN RP=2
370 IF R%(RP)<>-1 THEN 360
380 R%(RP)=-I%:GOTO 310
390 ZZ$=LEFT$(K$,F%):GOSUB 460
400 RP=RP+1:IF RP>MR% OR RP<2 THEN RP=2
410 IF R%(RP)=-1 THEN R%(RP)=I%:GOTO 310:ELSE 400
420 CLOSE 1:PRINT:PRINT"WRITING KEY POINTERS NOW."
430 FIELD #2,2 AS KP$
440 R%(1)=I%-1:FOR I%=1 TO MR%:LSET KP$=MKI$(R%(I%)):PUT 2,I%:NEXT
450 PRINT:PRINT"RE-KEY OPERATION IS COMPLETE.":END
460 FOR ZZ=1 TO LEN(ZZ$)
470 SP=ASC(MID$(ZZ$,ZZ,1)):X#=X#+ZZ*(SP+1/SP)
480 NEXT ZZ
490 IF X#<1.000000e+17 THEN X#=X#*X#:GOTO 490
500 SP=ASC(ZZ$)+ASC(RIGHT$(ZZ$,1)):SP=SP MOD 10:SP=SP+4:X$=STR$(X#):RP=VAL(MID$(X$,SP,4)):X#=0
510 RP=MR%*RP/9999:RP=FIX(RP):RETURN
```

## REPORTOR.BAS

```bas
50 RESET:GOTO 110
60 FX=0:IF LEN(CV$)<1 THEN RETURN
70 FOR II=1 TO LEN(CV$):CV%=ASC(MID$(CV$,II,1)):IF CV%=34 THEN FX=ABS(FX-1)
80 IF FX=0 AND CV%>90 THEN CV%=CV% AND 95:MID$(CV$,II,1)=CHR$(CV%)
90 NEXT:RETURN
110 KEY OFF:CLS:PRINT TAB(30);"THE REPORTOR: A PROGRAM THAT WRITES REPORT PROGRAMS.":PRINT"PLACED IN THE PUBLIC DOMAIN BY BRUCE TONKIN; COPYRIGHT (C) 1983, BRUCE TONKIN":PRINT"THIS PROGRAM MAY NOT BE DISTRIBUTED FOR PROFIT WITHOUT THE EXPRESS WRITTEN"
120 PRINT"PERMISSION OF THE AUTHOR. VIOLATORS MAY BE PROSECUTED!":PRINT:PRINT"THIS IS INTENDED TO BE FREE SOFTWARE FOR ALL USERS. MAKE AND GIVE AWAY ALL THE":PRINT"COPIES YOU LIKE. PLEASE DO NOT REMOVE THIS NOTICE OR MY ADDRESS."
130 PRINT:PRINT"MANUALS FOR THIS PROGRAM AND THE CREATOR, THE COMPANION PROGRAM, ARE AVAILABLE":PRINT"FROM BRUCE W. TONKIN, 34069 HAINESVILLE ROAD, ROUND LAKE ILLINOIS 60073":PRINT"THE COMBINED MANUALS COST $11.00, POSTPAID IN THE U.S. AND CANADA; ADD $5.00"
140 PRINT"FOR OVERSEAS DELIVERY; DELIVERIES TO MEXICO ARE SAME AS U.S. IF CHECKS DRAWN":PRINT"ON A U.S. BANK.":PRINT:PRINT"I HAVE OTHER SOFTWARE FOR SALE. PLEASE WRITE ME FOR MY NEWEST CATALOG."
150 FOR I=1 TO 4500:NEXT
160 CLS:PRINT"This is the REPORTOR, a report-writing program. Please choose one of the":PRINT"following options:":PRINT:PRINT"Run a previously written program......................................Depress R"
170 PRINT"Write a new report....................................................Depress W"
180 PRINT"Exit this program.....................................................Depress X"
190 PRINT:PRINT:PRINT"Please depress the appropriate key: ";
200 A$=INPUT$(1):IF A$="" THEN BEEP:GOTO 200:ELSE CV$=A$:GOSUB 60:PRINT CV$:A$=CV$
210 ON INSTR("RWX",A$) GOTO 230,240,2630
220 PRINT"YOU MUST CHOOSE ONE OF THE OPTIONS. PLEASE TRY AGAIN.":BEEP:FOR I=1 TO 1500:NEXT:GOTO 160
230 PRINT"What is the complete name of your program: ";:LINE INPUT CV$:GOSUB 60:RUN CV$
240 'BEGIN
250 '
260 PRINT"What is to be the name of your program: ";:LINE INPUT CV$:GOSUB 60:PN$=CV$:IF CV$<"A" THEN PRINT"ILLEGAL NAME!":BEEP:GOTO 260
270 IF LEN(PN$)>8 THEN PRINT"THE NAME MAY NOT EXCEED 8 CHARACTERS IN LENGTH.":BEEP:GOTO 260
280 IF INSTR(PN$,":") THEN BEEP:PRINT"PLEASE DO NOT INCLUDE THE DRIVE LETTER!":GOTO 260
290 IF INSTR(PN$,".") OR INSTR(PN$," ") THEN PRINT"ILLEGAL CHARACTER IN FILE NAME.":BEEP:GOTO 260
350 PRINT"The drives are lettered, A - D. Which drive do you want your program":PRINT"written on: ";
360 DR$=INPUT$(1):IF DR$="" THEN BEEP:GOTO 360:ELSE CV$=DR$:GOSUB 60:DR$=CV$:PRINT DR$
370 IF DR$<"A" OR DR$>"D" THEN PRINT"INVALID DRIVE!":BEEP:GOTO 350
390 PN$=DR$+":"+PN$+".BAS"
410 ON ERROR GOTO 2640
420 OPEN"I",1,PN$:ERROR 126
430 OPEN"O",1,PN$:Q$=CHR$(34)
440 CLS:PRINT"What is to be the title displayed for your report? Type in your title now."
450 LINE INPUT TI$
460 PRINT"What is the name of the file you are going to read for your report? Please":PRINT"type in the full name on the next line. Do NOT omit the . and the file type"
470 PRINT"extension, if present. Please EXCLUDE the drive letter, though."
490 LINE INPUT CV$:GOSUB 60:F$=CV$
495 IF INSTR(F$,":")>0 THEN PRINT"DRIVE LETTER IS NOT ALLOWED!":BEEP:GOTO 460
500 PRINT"What is the record length of each record in the file? ";:LINE INPUT RL$:RL=VAL(RL$)
510 IF RL>256 OR RL<1 THEN PRINT"ILLEGAL RECORD LENGTH (1 - 256, PLEASE).":BEEP:GOTO 500
600 PRINT #1,"12 DF$=";Q$;F$;Q$
660 PRINT #1,"30 TI$=";Q$;TI$;Q$
690 IF RL=256 THEN PRINT #1,"40 OPEN";Q$;"R";Q$;",1,DF$,256":ELSE PRINT #1,"40 OPEN";Q$;"R";Q$;",1,DF$,";RL
700 CLS:PRINT"Now you must describe the fields in each record of your file, from left to":PRINT"right, in order. Input the amount of space each field takes up. When you are":PRINT"done, enter 999 for the amount of space."
730 A=1:DIM F%(50),D$(50)
740 PRINT"Space remaining = ";RL-F%(0);"; Field number: ";A;"=";:LINE INPUT F1$:F%(A)=VAL(F1$)
750 IF F%(A)=999 THEN 830 ELSE IF F%(A)>RL THEN PRINT "INVALID. MUST BE";RL;"OR LESS.":BEEP:GOTO 740
760 F%(0)=F%(0)+F%(A):IF F%(0)>RL THEN PRINT"NOT ENOUGH SPACE LEFT FOR THAT FIELD LENGTH.":BEEP:F%(0)=F%(0)-F%(A):GOTO 740
780 PRINT"Is this correct (Y/N)? ";
790 JX$=INPUT$(1):IF JX$<" " THEN BEEP:GOTO 790:ELSE CV$=JX$:GOSUB 60:JX$=CV$:PRINT JX$:IF JX$="N" THEN F%(0)=F%(0)-F%(A):GOTO 740
800 IF JX$<>"Y" THEN BEEP:GOTO 780
810 IF RL-F%(0)<1 THEN A=A+1:GOTO 830
820 A=A+1:GOTO 740
830 XF$="GOSUB 30000"
840 A=A-1:PRINT #1,"30805 FOR IX=1 TO";A
850 FOR I=1 TO A:PRINT #1,30000+I;"FF(";I;")=";F%(I):NEXT
900 PRINT #1,"50 DIM F$(";A;"),FF(";A;"),P(";A;"),P$(";A;"),C#(50),P#(";A;"),C(50),C$(50),H$(50)"
910 PRINT #1,"60 ";XF$:XF$="GOSUB 30800:
930 CLS:PRINT"What are your column headings to be? Please enter a legend for each column":PRINT"you intend to use. Type 999 to end."
940 DIM C%(50):FOR J=1 TO 50:C%(J)=J:NEXT
950 DIM C$(50)
960 B=1
980 PRINT"Column number";B;:LINE INPUT C$(B):IF C$(B)="999" THEN C$(B)="":B=B-1:ELSE B=B+1:GOTO 980
990 J=0:FOR JJ=1 TO B-1:IF LEN(C$(C%(JJ)))<LEN(C$(C%(JJ+1))) THEN SWAP C%(JJ),C%(JJ+1):J=1
1000 NEXT:IF J THEN 990:ELSE LN=70
1010 FOR I=1 TO B:I$=MID$(STR$(I),2):PRINT #1,LN;"H$(";I$;")=";Q$;C$(I);Q$:LN=LN+10:NEXT
1020 M$=STRING$(50,32):GOSUB 2055
1030 DIM T(50)
1040 CLS:PRINT"Now we need to set the tabs for your";B;"columns. Indicate the tab setting as":PRINT"a number from 1 to 255."
1050 FOR I=1 TO B:PRINT"Tab setting for column number";I;":";:LINE INPUT F1$:T(I)=VAL(F1$):IF T(I)>255 OR T(I)<1 THEN PRINT"NOT A VALID TAB SETTING!":BEEP:I=I-1
1070 NEXT
1090 PRINT #1,"31070 DATA ";
1100 FOR I=1 TO B-1:PRINT #1,MID$(STR$(T(I)),2);",";:NEXT
1130 PRINT #1,MID$(STR$(T(B)),2)
1140 LN=LN+10:PRINT #1,LN;"PG=1:'INITIALIZE THE PAGE COUNTER"
1150 PRINT #1,LN+5;"'NOW FOLLOWS THE RECORD RETRIEVAL SECTION"
1160 PRINT"Do you want the pages numbered (Y/N)? ";
1170 CV$=INPUT$(1):IF CV$="" THEN BEEP:GOTO 1170:ELSE GOSUB 60:PRINT CV$:PG$=CV$:IF PG$<>"Y" AND PG$<>"N" THEN BEEP:PRINT"ILLEGAL!":GOTO 1160
1180 LN=LN+10:PRINT #1,LN;"FOR I=1 TO 32767"
1190 PRINT #1,LN+5;"IF SR$<>";Q$;"N";Q$;" THEN INPUT #2,I"
1200 LN=LN+10:KZ=LN
1210 IF RL<>256 THEN PRINT #1,LN+1;"IF ZU$=STRING$(";RL;",0) THEN 20000":ELSE PRINT #1,LN+1;"IF ZU$=STRING$(255,0) THEN 20000"
1220 LN=LN+10:PRINT #1,LN;"ON ERROR GOTO 20000"
1230 IF PG$="Y" THEN PRINT"How many lines per page? ";:LINE INPUT F1$:LP=VAL(F1$)-1
1240 CLS:J=0:FOR I=1 TO A:IF F%(I)=1 OR F%(I)=2 OR F%(I)=4 OR F%(I)=8 THEN J=1:I=A
1250 NEXT:IF J=0 THEN FOR I=1 TO A:D$(I)="C":NEXT:GOTO 1500
1260 PRINT"You have some fields which might contain packed data. Please tell me if those":PRINT"fields are PH (packed half-precision), PI (packed integer), PS (packed single":PRINT"precision), PD (packed double precision), or C (unpacked, characters)."
1300 FOR I=1 TO A:IF F%(I)<>1 AND F%(I)<>2 AND F%(I)<>4 AND F%(I)<>8 THEN D$(I)="C":GOTO 1380
1310 PRINT"Field number";I;": Length is";F%(I);": Data type is: ";:LINE INPUT CV$:GOSUB 60:D$(I)=CV$:L=F%(I)
1330 IF D$(I)<>"N" AND D$(I)<>"C" AND D$(I)<>"PH" AND D$(I)<>"PI" AND D$(I)<>"PS" AND D$(I)<>"PD" THEN PRINT"ILLEGAL VARIABLE TYPE!":BEEP:GOTO 1310
1340 IF (CV$="PH" AND L=1) OR (CV$="PI" AND L=2) OR (CV$="PS" AND L=4) OR (CV$="PD" AND L=8) THEN 1375
1350 IF CV$="N" OR CV$="C" THEN 1375
1370 PRINT"ILLEGAL LENGTH FOR THIS VARIABLE TYPE!":BEEP:GOTO 1310
1375 PRINT"Is this correct (Y/N)? ";
1376 CV$=INPUT$(1):IF CV$="" THEN BEEP:GOTO 1376:ELSE GOSUB 60:PRINT CV$
1377 IF CV$="N" THEN 1310:ELSE IF CV$<>"Y" THEN BEEP:GOTO 1375
1380 NEXT
1500 FOR I=1 TO A:I$=MID$(STR$(I),2)
1510 LN=LN+10:IF D$(I)="C" OR D$(I)="N" THEN PRINT #1,LN;"P$(";I$;")=F$(";I$;")"
1520 IF D$(I)="PH" THEN PRINT #1,LN;"P#(";I$;")=ASC(F$(";I$;"))-128"
1530 IF D$(I)="PI" THEN PRINT #1,LN;"P#(";I$;")=CVI(F$(";I$;"))"
1540 IF D$(I)="PS" THEN PRINT #1,LN;"P#(";I$;")=CVS(F$(";I$;"))"
1550 IF D$(I)="PD" THEN PRINT #1,LN;"P#(";I$;")=CVD(F$(";I$;"))"
1560 NEXT
1570 CLS:PRINT"Now we must describe what goes into the columns of the report. You should":PRINT"write sentences of the following form:"
1580 PRINT"Column Name=FIELD(9)"
1590 PRINT"Column Name=FIELD$(5)"
1600 PRINT"IF COLUMN.NAME.1=COLUMN.NAME.2 THEN COLUMN.NAME.3=";Q$;"SAME";Q$
1610 PRINT"V1=NAME1/NAME2:V2=100*V1:NAME3=V2"
1620 PRINT"IF NAME1=";Q$;"OVERDUE";Q$;" THEN SKIP"
1630 PRINT"IF NAME2<1 THEN SKIP"
1640 PRINT"Please note that you should use the heading names as your variables. Variables":PRINT"beginning with the letter V are work variables. You may issue a number of":PRINT"commands on one line, if you separate them with colons (:)."
1650 PRINT"Also, notice that there are quotation marks around character string constants,":PRINT"and that a $ is used to indicate character string fields.":PRINT"DEPRESS ANY KEY TO CONTINUE.";
1660 CV$=INPUT$(1)
1670 PRINT:PRINT"YOU MAY USE THE FOLLOWING VARIABLE NAMES:"
1680 FOR I=1 TO B:PRINT C$(I),:NEXT:PRINT:PRINT"TYPE 999 TO EXIT THIS SECTION."
1690 PRINT"READY FOR YOUR COMMAND: ";
1700 LINE INPUT SX$:IF VAL(SX$)=999 THEN 2050
1710 FOR I=1 TO B:J=C%(I)
1720 F1%=INSTR(SX$,C$(J)):IF F1%<1 THEN 1790
1730 J$=MID$(STR$(J),2):I$=MID$(STR$(I),2):IF MID$(M$,J,1)="S" THEN F1$="C$(":ELSE F1$="C#("
1740 F1$=F1$+J$+")":GOSUB 5000:GOTO 1720
1790 NEXT
1800 F1%=INSTR(SX$,"FIELD"):IF F1%<1 THEN 1850
1810 IF F1%=1 THEN PRINT"FIELDS CANNOT BE RE-DEFINED.":BEEP:GOTO 1690
1815 F2%=INSTR(F1%,SX$,"("):F3%=INSTR(F1%,SX$,"$"):F4%=INSTR(F1%,SX$,"#"):IF (F4%=0 OR F4%>F2%) AND (F3%=0 OR F3%>F2%) THEN SY$="#":ELSE SY$=""
1820 SX$=LEFT$(SX$,F1%-1)+"P"+SY$+MID$(SX$,F1%+5):GOTO 1800
1850 PRINT"I interpret your command to be:":PRINT SX$:PRINT"Is this correct (Y/N)? ";
1860 CV$=INPUT$(1):IF CV$="" THEN BEEP:GOTO 1860:ELSE GOSUB 60:PRINT CV$:IF INSTR("YN",CV$)<1 THEN BEEP:GOTO 1850
1870 IF CV$="N" THEN PRINT"INSTRUCTION DELETED.":GOTO 1690
1880 F1%=INSTR(SX$,"SKIP"):IF F1%>1 THEN SX$=LEFT$(SX$,F1%-1)+"19000"+MID$(SX$,F1%+4):GOTO 1880
1890 LN=LN+10:PRINT #1,LN;SX$:GOTO 1670
2050 LN=LN+10:PRINT #1,LN;"FOR J=1 TO";B;":T#(J)=T#(J)+C#(J):NEXT"
2052 GOTO 2310
2055 CLS:PRINT"All right. Now we need to define the column print formats.":PRINT"I will ask you to tell me if a column will contain letters or numbers. If a":PRINT"column contains numbers, but those numbers come from an unpacked field, and"
2060 PRINT"have not been converted via the VAL function (for example, telephone numbers,":PRINT"or ID numbers), then that column should be formatted as if it contained":PRINT"LETTERS. If a column contains the result of a computation, or numbers from a"
2070 PRINT"packed numeric field, then that column should be formatted as NUMBERS.":PRINT"If you do not tell me the correct kind of data to print in a column, your":PRINT"report may print columns with zeros or blanks in the incorrect columns."
2080 PRINT"If you still have doubts, please refer to the program manual."
2090 DIM CF$(B):FOR I=1 TO B
2100 PRINT"COLUMN NAME: ";C$(I);": NUMBERS OR LETTERS (N/L)? ";
2110 CV$=INPUT$(1):IF CV$<" " THEN BEEP:GOTO 2110:ELSE GOSUB 60:PRINT CV$:IF INSTR("NL",CV$)<1 THEN BEEP:GOTO 2100
2120 IF CV$<>"L" THEN 2200
2130 PRINT"How many characters might be printed in this column";:INPUT FX:IF FX<1 OR FX>255 THEN PRINT"INVALID!":BEEP:GOTO 2130
2140 IF FX=1 THEN CF$(I)="!":ELSE CF$(I)="\"+STRING$(FX-2,32)+"\"
2150 GOTO 2300
2200 PRINT"How many digits will be printed to the LEFT of the decimal: ";:INPUT FX:IF FX<0 OR FX>16 THEN PRINT"ILLEGAL!":BEEP:GOTO 2200
2210 CF$(I)=STRING$(FX,"#")
2212 IF FX<4 THEN 2220:ELSE PRINT"Do you want the number printed with commas (Y/N)? ";
2214 CV$=INPUT$(1):IF CV$<" " THEN BEEP:GOTO 2214:ELSE GOSUB 60:PRINT CV$:IF INSTR("YN",CV$)<1 THEN BEEP:GOTO 2212
2216 IF CV$="Y" THEN CF$(I)=CF$(I)+","
2220 PRINT"How many digits will be printed to the RIGHT of the decimal point: ";:INPUT FX:IF FX<0 OR FX>16 THEN PRINT"ILLEGAL!":BEEP:GOTO 2220
2230 IF FX THEN CF$(I)=CF$(I)+"."+STRING$(FX,"#")
2235 IF CF$(I)="" THEN PRINT"ILLEGAL FORMAT!":BEEP:GOTO 2200
2300 IF INSTR(CF$(I),"#") THEN MID$(M$,I,1)="M":ELSE MID$(M$,I,1)="S"
2301 NEXT
2305 RETURN
2310 FOR I=1 TO B:PRINT #1,40000.+I;"CF$(";MID$(STR$(I),2);")=";Q$;CF$(I);Q$:NEXT
2320 PRINT #1,"56 M$=";Q$;M$;Q$;":'FIELD TYPES - S = STRING, M = MULTIPLE PRECISION"
2322 CLS
2325 PRINT"How many columns wide is the paper or screen on which the report will most":PRINT"commonly be printed? ";:INPUT FX:IF FX<1 OR FX>255 THEN PRINT"ILLEGAL!":BEEP:GOTO 2325
2330 LN=LN+10:PRINT #1,LN;"IF L=0 AND PD$<>";Q$;"S";Q$;" THEN LPRINT CHR$(12);TAB(";(FX-LEN(TI$))/2;");TI$";:IF LP<1 THEN PRINT #1,"":ELSE PRINT #1,";TAB(";FX-15;");";Q$;"PAGE NUMBER";Q$;";PG"
2335 LN=LN+10:PRINT #1,LN;"IF L=0 AND PD$<>";Q$;"P";Q$;" THEN CLS:PRINT TAB(";(FX-LEN(TI$))/2;");TI$";:IF LP<1 THEN PRINT #1,"":ELSE PRINT #1,";TAB(";FX-15;");";Q$;"PAGE NUMBER";Q$;";PG"
2350 LN=LN+10:PRINT #1,LN;"IF L=0 THEN GOSUB 31000"
2360 PRINT #1,"31006 FOR J=1 TO";B:LN=LN+10:PRINT #1,LN;"FOR J=1 TO";B
2370 LN=LN+10:PRINT #1,LN;"READ T:IF PD$=";Q$;"P";Q$;" THEN";LN+30
2380 LN=LN+10:PRINT #1,LN;"IF MID$(M$,J,1)=";Q$;"S";Q$;" THEN PRINT TAB(T);:PRINT USING CF$(J);C$(J);"
2390 LN=LN+10:PRINT #1,LN;"IF MID$(M$,J,1)=";Q$;"M";Q$;" THEN PRINT TAB(T);:PRINT USING CF$(J);C#(J);"
2400 LN=LN+10:PRINT #1,LN;"IF PD$=";Q$;"S";Q$;" THEN";LN+30
2402 LN=LN+10:PRINT #1,LN;"IF MID$(M$,J,1)=";Q$;"S";Q$;" THEN LPRINT TAB(T);:LPRINT USING CF$(J);C$(J);"
2404 LN=LN+10:PRINT #1,LN;"IF MID$(M$,J,1)=";Q$;"M";Q$;" THEN LPRINT TAB(T);:LPRINT USING CF$(J);C#(J);"
2406 LN=LN+10:PRINT #1,LN;"NEXT:RESTORE:IF PD$<>";Q$;"S";Q$;" THEN LPRINT:ELSE PRINT"
2408 LN=LN+10:PRINT #1,LN;"L=L+1";:IF LP THEN PRINT #1,":IF L>";LP;" THEN PG=PG+1:L=0":ELSE PRINT #1,":'LINE COUNTER"
2410 LN=19000:PRINT #1,LN;"NEXT"
2412 IF RL<256 THEN PRINT #1,KZ;"GET 1,I:IF ZU$=STRING$(";RL;",250) OR ZU$=STRING$(";RL;",255) THEN";LN:ELSE PRINT #1,KZ;"GET 1,I:IF ZU$=STRING$(255,250) OR ZU$=STRING$(255,255) THEN";LN
2414 IF RL<256 THEN PRINT #1,"30801 FIELD #1,";RL;" AS ZU$":ELSE PRINT #1,"30801 FIELD #1,255 AS ZU$"
2416 CLS:PRINT"Have you saved any totals you want printed at the end of your report (Y/N)? ";
2418 CV$=INPUT$(1):IF CV$<" " THEN BEEP:GOTO 2418:ELSE GOSUB 60:PRINT CV$:IF INSTR("YN",CV$)<1 THEN BEEP:GOTO 2416
2420 IF CV$="N" THEN PRINT #1,"20000 CLOSE:END":GOTO 2630
2430 CLS:PRINT"Then you must tell me which variables to print in which columns of your report.":PRINT"Please be careful here: you CANNOT print character strings in numeric columns,":PRINT"or vice-versa!"
2440 PRINT"You may use the BASIC operations +, *, -, /, (and others) if you wish. As a":PRINT"default, just hit the ENTER key: I will print the grand total for a column,":PRINT"using the same print format as the previous data in that column.":LN=20000
2451 PRINT #1,LN;"IF PD$<>";Q$;"S";Q$;" THEN LPRINT":LN=LN+10:PRINT #1,LN;"IF PD$<>";Q$;"P";Q$;" THEN PRINT"
2454 PRINT"If you want to use the totals in your computations, the totals are stored in":PRINT"the variable array T#(X), where X is the report column number. Feel free to":PRINT"use these totals in computations."
2455 FOR I=1 TO B
2460 PRINT"COLUMN NAME: ";C$(I);": DEFAULT IS ";
2470 IF MID$(M$,I,1)="S" THEN PRINT"BLANK":ELSE PRINT"T#(";I;")":PRINT"COLUMN PRINT FORMAT IS: ";CF$(I)
2480 PRINT"What should I print in this column: ";:LINE INPUT CV$
2485 IF CV$<=STRING$(LEN(CV$),32) THEN CV$=""
2490 IF CV$="" THEN IF MID$(M$,I,1)="S" THEN CV$=Q$+Q$
2500 IF CV$="" THEN IF MID$(M$,I,1)="M" THEN CV$="T#("+MID$(STR$(I),2)+")"
2510 LN=LN+10:PRINT #1,LN;"READ T:IF PD$<>";Q$;"S";Q$;" THEN LPRINT TAB(T);:LPRINT USING CF$(";MID$(STR$(I),2);");";CV$;";"
2520 LN=LN+10:PRINT #1,LN;"IF PD$<>";Q$;"P";Q$;" THEN PRINT TAB(T);:PRINT USING CF$(";MID$(STR$(I),2);");";CV$;";"
2530 NEXT:LN=LN+10:PRINT #1,LN;"IF PD$<>";Q$;"S";Q$;" THEN LPRINT CHR$(12)":LN=LN+10:PRINT #1,LN;"IF PD$<>";Q$;"P";Q$;" THEN PRINT:PRINT";Q$;"END OF REPORT.";Q$
2540 LN=LN+10:PRINT #1,LN;"CLOSE:END"
2630 OPEN"I",2,"R451.LIB"
2631 ON ERROR GOTO 2635
2632 LINE INPUT #2,A$:PRINT #1,A$:GOTO 2631
2635 PRINT #1,"3 RESET"
2636 CLS:PRINT"Your report program has been written. You may run it any time. If you wish,":PRINT"you may load your program, then re-save it: this will decrease subsequent":PRINT"program load times."
2639 CLOSE:END
2640 IF ERR=126 AND ERL=420 THEN BEEP:PRINT"THAT PROGRAM ALREADY EXISTS!":PRINT"DEPRESS C TO WRITE OVER IT, ANY OTHER KEY TO QUIT.";:ELSE 2670
2650 Q$=INPUT$(1):IF Q$="C" THEN CLOSE 1:RESUME 430
2660 IF Q$="c" THEN CLOSE 1:RESUME 430:ELSE CLOSE:END
2670 IF ERR=52 THEN PRINT"YOU ENTERED BASIC WITHOUT SPECIFYING ANY FILES.":PRINT"YOU NEED AT LEAST TWO. GO BACK TO DOS AND RE-ENTER BASIC CORRECTLY.":BEEP:CLOSE:END
2672 IF ERR=53 AND ERL=420 THEN CLOSE:RESUME 430
2675 PRINT"ERROR NUMBER";ERR;" AT LINE";ERL;": PROGRAM ABORTED.":ON ERROR GOTO 0
2680 CLOSE:END
4999 'REPLACE A STRING WITH ANOTHER
5000 IF F1%=1 THEN SX$=F1$+MID$(SX$,LEN(C$(J))+1):RETURN
5010 SX$=LEFT$(SX$,F1%-1)+F1$+MID$(SX$,F1%+LEN(C$(J))):RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0339

     Volume in drive A has no label
     Directory of A:\

    C451     LIB      7808  11-05-83   4:03p
    C451MIN  LIB      6912  11-05-83   4:04p
    CREATOR  BAS     22144   9-18-84   1:12p
    CSORT    DOC     14831   7-24-83  11:03p
    CSORT    EXE     27776  12-03-83   8:14p
    CSORT2   EXE     27648  12-03-83   8:21p
    CSORT3   DOC      2304   7-16-84   1:41p
    CSORT3   EXE     27648   7-16-84   1:06p
    FILES339 TXT      1024   5-23-85   2:03p
    MENU     BAS       896   4-04-83   2:40p
    R451     LIB      1536  10-19-83  11:14a
    REKEY    BAS      2944   4-05-83   1:41p
    REPORTOR BAS     14464  10-19-83  11:11a
           13 file(s)     157935 bytes
                               0 bytes free
