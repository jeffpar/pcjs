---
layout: page
title: "PC-SIG Library Disk #245"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0245/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0245"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ULTRA UTILITIES UNARCHIVED VER. OF 133"

    The Ultra-Utilities are a powerful collection of tools for the PC owner
    interested in getting more from his system.  U-MIND is an "intelligent"
    database generator which allows you to produce clean, sophisticated
    programs very quickly.  U-OPT will help clean-up BASIC code so that it
    will compile tighter and faster.  More of these utilities are
    available, in squeezed format, on Disk 133.
    
    How to Start:  For instructions on running BASIC programs, please refer
    to the GETTING STARTED section in this catalog.  To run an EXE program
    simply type its name and press <ENTER>. To read DOC or TXT files simply
    enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  Ultra-Utilities $30.00
    
    File Descriptions:
    
    U-MIND   DOC  Documentation for U-MIND  (51K)
    U-MIND   BAS  Ultra-Mind program  (Intelligent database)
    SKELETON BAS  Used with Ultra-Mind
    U-OPT    EXE  Ultra-Optimize program
    DOC42    TXT  Ultra-Utility documentation - Part 2  (23K)
    DOC41    TXT  Ultra-Utility documentation - Part 1  (52K)
    U-OPT    DOC  Documentation for O-OPT  (2K)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## SKELETON.BAS

```bas
1 CLS:KEY OFF:AQ$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()_-+={}[]:;'?/>.<,|\":IN=0:ON ERROR GOTO 49000:CURRENT=-1
100 GOSUB 50000:GOSUB 46000:STAT1$="A"
110 IF MAXSIZE=0 THEN GOTO 100 ELSE CURRENT=-1
500 REM ************************************************************
501 REM *** Main Menu Function         Process: Display choices, get choice
502 REM ***                                     then call appropriate routine
503 REM ************************************************************
505 IF CURRENT=-1 THEN C$=" NONE" ELSE C$=STR$(CURRENT)
510 CLS:LOCATE 1,1:A$="Current Record ="+C$:A1$="Number of entered records ="+STR$(GOOD):A2$="Maximum number of records ="+STR$(MAXSIZE):A3$="Current Data Disk Volume: "+V$
520 PRINT TAB(1);A$;TAB(80-LEN(A1$));A1$:LOCATE 2,1:PRINT TAB(40-(LEN(A2$)/2));A2$:LOCATE 3,1:PRINT TAB(40-LEN(A3$)/2);A3$
525 LOCATE 4,1:PRINT STRING$(79,"_");:LOCATE 19,1:PRINT STRING$(79,"_");
530 LOCATE 6,1:A$="---> Main Menu Choices <---":PRINT TAB(40-(LEN(A$)/2));A$
540 LOCATE 8,20:PRINT "G)et A Record.":LOCATE 9,20:PRINT "S)earch For And List Records."
550 LOCATE 10,20:PRINT"A)dd A Record.":LOCATE 11,20:PRINT"D)elete Current Record.":LOCATE 12,20:PRINT"U)pdate Current Record.":LOCATE 13,20:PRINT"X)-tend Work To New Data Diskette."
560 LOCATE 14,20:PRINT"I)nitialize New Data Diskette.":LOCATE 15,20:PRINT"Q)uit And Return To BASIC."
580 A$="Enter your choice (G,S,A,D,U,X,I, or Q):  ":LOCATE 18,1:PRINT TAB(40-(LEN(A$)/2));A$:ROW=18:COLUMN=((40-LEN(A$)/2)+LEN(A$)-1):A1%=1:AX$="GgSsAaDdUuXxIiQq":GOSUB 40130
590 IF AN$="" GOTO 580
600 IF AN$="Q" OR AN$="q" THEN CLOSE:GOSUB 50000:CLS:PRINT"Program Finished...":END
610 IF AN$="G" OR AN$="g" THEN GOSUB 680:GOSUB 39000:GOTO 500
620 IF AN$="S" OR AN$="s" THEN GOSUB 680:GOSUB 45000:GOTO 500
630 IF AN$="A" OR AN$="a" THEN GOSUB 41000:GOTO 500
640 IF AN$="D" OR AN$="d" THEN GOSUB 680:PAGE=0:GOSUB 2000:GOSUB 7000:GOSUB 42000:GOTO 500
650 IF AN$="U" OR AN$="u" THEN GOSUB 680:GOSUB 43000:GOTO 500
660 IF AN$="X" OR AN$="x" THEN GOSUB 680:GOSUB 46000:GOTO 500
670 IF AN$="I" OR AN$="i" THEN GOSUB 680:GOSUB 47000:GOTO 500
680 CLS:LOCATE 24,1:PRINT STRING$(79,"=");:RETURN
2000 REM ************************************************************
2001 REM *** Display Screen Info Routine    In: PAGE = page #
2002 REM ***                                        or
2003 REM ***                                    FL = field #
2004 REM ***                               Out: Screen info on that page is
2005 REM ***                                    displayed, then exit to
2006 REM ***                                    caller.
2007 REM ************************************************************
7000 REM ************************************************************
7001 REM *** Display Record Fields Routine  In: Page = page #
7002 REM ***                               Out: Working strings displayed,
7003 REM ***                                    then exit to caller
7004 REM ************************************************************
12000 REM ************************************************************
12001 REM *** Block Record Routine     In: Working strings filled
12002 REM ***                         Out: Record strings filled then exit
12003 REM ***                              to caller.
12004 REM ************************************************************
17000 REM ************************************************************
17001 REM *** Unblock Record Routine   In: Record strings filled
17002 REM ***                         Out: Working strings filled then
17003 REM ***                              exit to caller.
17004 REM ************************************************************
22000 REM ************************************************************
22001 REM *** Input A Field Routine    In: FL = field number to input
22002 REM ***                         Out: Working string filled after
22003 REM ***                              passing edit check, then exit
22004 REM ***                              to caller.
22005 REM ************************************************************
32000 REM ************************************************************
32001 REM *** Get a Record Routine      In: RECNUM = record number to get
32002 REM ***                          Out: Record strings filled (need to be
32003 REM ***                               unblocked.)
32004 REM ************************************************************
32010 GET 1,RECNUM:RETURN
33000 REM ************************************************************
33001 REM *** Hash Keyfield Routine    In: KY$ = Key field
33002 REM ***                         Out: RECNUM = Hashed record specifier
33003 REM ************************************************************
33010 X#=0:FOR ZZ=1 TO LEN(KY$):X#=X#+ZZ*ASC(MID$(KY$,ZZ,1)):NEXT ZZ
33020 X#=X#*X#*X#*X#:X$=STR$(X#):RECNUM=VAL(MID$(X$,5,4)):X#=0
33030 RECNUM=INT(MAXSIZE*RECNUM/9999):IF RECNUM<=0 THEN RECNUM=1
33040 RETURN
34000 REM ************************************************************
34001 REM Delete a record routine    IN: RECNUM = record number to delete
34002 REM                           OUT: Record is deleted
34003 REM                                CURRENT = -1
34004 REM ************************************************************
34010 GOOD=GOOD-1:STAT1$="D":GOSUB 12000:GOSUB 35000:CURRENT=-1:STAT1$="A":LSET STAT$=STAT1$:OPEN "O",#2,NA$+".def":GOOD=GOOD-1:PRINT#2,MAXSIZE,GOOD:CLOSE #2:RETURN
35000 REM ************************************************************
35001 REM *** Put a Record Routine     In: RECNUM = record number to put
35002 REM ***                              Record strings must be filled
35003 REM ***                         Out: CURRENT = Record number
35004 REM ***                              Record is writted to disk file
35005 REM ************************************************************
35010 PUT 1,RECNUM:CURRENT=RECNUM:OPEN "O",#2,NA$+".DEF":GOOD=GOOD+1:PRINT#2,MAXSIZE,GOOD:CLOSE #2:RETURN
36000 REM ************************************************************
36001 REM Error Response Routine   In:ERROR = 1,2,3, or 4
36002 REM                             ER$= error string if ER = 4
36003 REM                         OUT: Error message is printed, waits
36004 REM                              For 'c' or 'C' keypress, then
36005 REM                              exits to caller
36006 REM ************************************************************
36010 LOCATE 25,1:PRINT STRING$(79,32);:A$=" ERROR! ":P=40-LEN(A$)/2
36020 BEEP:ON ER GOTO 36030,36040,36050,36060
36030 B$="Record Not Found... Press <C> to Continue":GOTO 36070
36040 B$="Data Diskette Is Full... Press <C> to Continue":GOTO 36070
36050 B$="No Current Record In Memory... Press <C> to Continue":GOTO 36070
36060 B$="Entry Must Not Be "+ER$+"... Press <C> to Continue"
36070 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,40-LEN(B$)/2:PRINT B$;
36080 LOCATE 24,P:PRINT A$;:CT=1
36090 Z$=INKEY$:IF Z$="C" OR Z$="c" GOTO 36150
36100 CT=CT+1:IF CT=4 THEN CT=1
36110 IF CT=1 THEN LOCATE 24,1:PRINT STRING$(35,"/");:LOCATE 24,44:PRINT STRING$(36,"/");:GOTO 36090
36120 IF CT=2 THEN LOCATE 24,1:PRINT STRING$(35,"-");:LOCATE 24,44:PRINT STRING$(36,"-");:GOTO 36090
36130 IF CT=3 THEN LOCATE 24,1:PRINT STRING$(35,"\");:LOCATE 24,44:PRINT STRING$(36,"\");:GOTO 36090
36140 LOCATE 24,1:PRINT STRING$(79,"=");:LOCATE 25,1:PRINT STRING$(79,32);:RETURN
36150 LOCATE 24,1:PRINT STRING$(79,"=");:LOCATE 25,1:PRINT STRING$(79,32);:RETURN
37000 REM ************************************************************
37001 REM *** Submenu #1 Function    Process: Display choices M)enu, U)pdate,
37002 REM ***                                 D)elete, A)dd, and S)witch
37003 REM ***                                 page.  Get choice and
37004 REM ***                                 Branch to appropriate function
37005 REM ************************************************************
37010 LOCATE 25,1:PRINT STRING$(79,32);:A$="Enter choice: M)enu, U)pdate, D)elete, A)dd, S)witch page: ":LOCATE 25,1:PRINT A$;
37020 ROW=25:COLUMN=LEN(A$)+2:AX$="MmUuDdAaSs":A1%=1:GOSUB 40130:IF AN$="" GOTO 37010
37030 IF AN$="M" OR AN$="m" THEN RETURN
37040 IF AN$="U" OR AN$="u" GOTO 43000
37050 IF AN$="D" OR AN$="d" GOTO 42000
37070 IF AN$="A" OR AN$="a" GOTO 41000
37080 PAGE=PAGE+1:IF PAGE>ND THEN PAGE=1
37090 CLS:FL=0:GOSUB 2000:GOSUB 7000:GOTO 37000
38000 REM ************************************************************
38001 REM *** Submenu #2 Function      Process: Ask for R)estore, S)witch
38002 REM ***                                   Page, or M)enu and
38003 REM ***                                   Branch to appropriate function
38004 REM ************************************************************
38010 LOCATE 25,1:PRINT STRING$(79,32);:A$="Please choose: R)estore, S)witch page, or M)enu ":LOCATE 25,1:PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:A1%=1:AX$="RrSsMm":GOSUB 40130
38020 TEST$=AN$:IF AN$="" GOTO 38010
38030 IF TEST$="M" OR TEST$="m" THEN CURRENT=-1:RETURN
38040 IF TEST$="P" OR TEST$="p" THEN GOSUB 36000:GOTO 38010
38050 IF TEST$<>"s" AND TEST$<>"S" GOTO 38100
38060 PAGE=PAGE+1:IF PAGE>ND THEN PAGE=1
38070 CLS:FL=0:GOSUB 2000:GOSUB 7000:GOTO 38010
38100 STAT1$="A":GOSUB 12000:GOSUB 35000:CURRENT=RECNUM:GOTO 37000
39000 REM ************************************************************
39001 REM *** Get a Record         Process: Accepts key field, searches
39002 REM ***                               for record, if found, displays
39003 REM ***                               it and verifies that its the
39004 REM ***                               right one.  If not, continue
39005 REM ***                               search until error.  Otherwise,
39006 REM ***                               display the record and branch
39007 REM ***                               to Submenu #1 Function
39008 REM ************************************************************
39010 PAGE=1:FL=0:GOSUB 2000:FL=1:GOSUB 22000:KY$=F$(1):GOSUB 33000
39020 CURRENT=RECNUM
39030 GOSUB 32000:IF STAT$="E" THEN ER=1:CURRENT=-1:GOTO 36000
39040 IF STAT$="D" GOTO 39200
39050 GOSUB 17000:IF KY$<>LEFT$(F$(1),LEN(KY$)) GOTO 39200
39060 GOSUB 7000:LOCATE 25,1:PRINT STRING$(79,32);:A$="Is this it (Y/N)? ":LOCATE 25,1:PRINT A$;
39070 ROW=25:COLUMN=LEN(A$)+2:AX$="YyNn":A1%=1:GOSUB 40130:IF AN$="" GOTO 39060
39080 IF AN$="y" OR AN$="Y" THEN CURRENT=RECNUM:GOTO 37000
39200 RECNUM=RECNUM+1:IF RECNUM>MAXSIZE THEN RECNUM=1
39210 IF RECNUM=CURRENT THEN ER=1:CURRENT=-1:GOTO 36000
39220 GOTO 39030
40127 REM ************************************************************
40128 REM *** Alphanumeric Input routine   IN: ROW,COLUMN, A1%,ax$  OUT: AN$
40129 REM ************************************************************
40130 AN$="":A%=0:LOCATE ROW,COLUMN,0,1,20:PRINT STRING$(A1%,CHR$(22));
40131 IF A%=A1% THEN 40134 ELSE LOCATE ROW,COLUMN+A%,0,1,20:PRINT CHR$(22);
40132 A$=INKEY$:IF A$="" THEN 40132 ELSE IF INSTR(AX$,A$) THEN AN$=AN$+A$:LOCATE ROW,COLUMN+A%,0,1,20:PRINT A$;:A%=A%+1:GOTO 40131
40133 ON INSTR(CHR$(8)+CHR$(13),A$) GOTO 40135,40138:GOTO 40131
40134 A$=INKEY$:IF A$="" THEN 40134 ELSE 40133
40135 IF A%<A1% THEN LOCATE ROW,COLUMN+A%,0,1,20:PRINT CHR$(22);
40136 A%=A%-1:IF A%<0 THEN A%=0:GOTO 40131:ELSE AN$=LEFT$(AN$,LEN(AN$)-1):GOTO 40131
40138 LOCATE ROW,COLUMN+A%,0,1,20:PRINT STRING$(A1%-A%," ");
40139 RETURN
40147 REM ************************************************************
40148 REM ***  FORMATTED NUMERIC INPUT  IN:ROW,COLUMN,AF$   OUT: AN$
40149 REM ************************************************************
40150 GOSUB 40200:PV=LEN(AF$)-1:R1=ROW:C1=COLUMN:AN$="":A%=0:LOCATE ROW,COLUMN:PRINT AF$;:A1%=LEN(AF$)
40151 IF A%=>LEN(AF$) THEN 40156 ELSE A%=INSTR(A%+1,AF$,CHR$(22)):LOCATE ROW,COLUMN+A%-1
40152 A$=INKEY$:IF A$=""THEN 40152 ELSE IF INSTR("1234567890",A$) THEN PRINT A$;:GOTO 40151
40153 ON INSTR(CHR$(8)+CHR$(13),A$) GOTO 40150, 40159
40154 GOTO 40151
40156 A$=INKEY$:IF A$="" THEN 40156 ELSE 40153
40159 AN$="":FOR Z=C1 TO C1+PV:AN$=AN$+CHR$(SCREEN(R1,Z)):NEXT Z:RETURN
40200 FOR Z=1 TO LEN(AF$):IF MID$(AF$,Z,1)="/" THEN MID$(AF$,Z,1)=CHR$(22)
40210 NEXT Z:RETURN
41000 REM ************************************************************
41001 REM *** Add A Record Function       Process: Fill input strings
41002 REM ***                                      write it disk, then
41003 REM ***                                      exit to caller on
41004 REM ***                                      error, or to submenu #1
41005 REM ************************************************************
41020 STAT1$="A":LSET STAT$=STAT1$:PAGE=0:FOR A=1 TO NF:FL=A:GOSUB 2000:GOSUB 22000:NEXT A
41030 LOCATE 25,1:PRINT STRING$(79,32);:A$="Press <Y> to add record or <N> to abort":LOCATE 25,1:PRINT A$;
41040 ROW=25:COLUMN=LEN(A$)+2:AX$="YyNn":A1%=1:GOSUB 40130:IF AN$="N" OR AN$="n"THEN CURRENT=-1:RETURN
41045 IF AN$="" GOTO 41030
41050 KY$=F$(1):GOSUB 33000
41060 GOSUB 32000:IF STAT$="A" GOTO 41100
41070 GOSUB 12000:GOSUB 35000:CURRENT=RECNUM:GOTO 37000
41100 RECNUM=RECNUM+1:IF RECNUM>MAXSIZE THEN RECNUM=1
41110 IF RECNUM=CURRENT THEN ER=2:GOTO 36000
41120 GOTO 41060
42000 REM ************************************************************
42001 REM *** Delete Current Record Function   Process: Verify delete
42002 REM ***                                           then erase it from
42003 REM ***                                           from view by marking
42004 REM ***                                           Stat$ as "D"
42005 REM ************************************************************
42007 IF CURRENT=-1 THEN ER=3:GOTO 36000
42010 LOCATE 25,1:PRINT STRING$(79,32);:A$="Press <Y> to delete this record or <N> to abort.":LOCATE 25,1:PRINT A$;
42020 ROW=25:COLUMN=LEN(A$)+2:AX$="YyNn":A1%=1:GOSUB 40130:IF AN$="N" OR AN$="n" THEN LOCATE 25,1:PRINT STRING$(79,32);:RETURN
42025 IF AN$="" GOTO 42010
42040 RECNUM=CURRENT:GOTO 34000
43000 REM ************************************************************
43001 REM *** Update Current Record Function   Process: Allow modifications
43002 REM ***                                           to specified fields,
43003 REM ***                                           make changes to record,
43004 REM ***                                           then exit to caller.
43005 REM ************************************************************
43010 STAT1$="A":LSET STAT$=STAT1$:KY=0:IF CURRENT=-1 THEN ER=3:GOTO 36000
43020 LOCATE 25,1:PRINT STRING$(79,32);:A$="Enter field number to modify "
43030 LOCATE 25,1:PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:AX$="0123456789":A1%=LEN(STR$(NF))-1:GOSUB 40130:FL=VAL(AN$):IF FL=0 THEN LOCATE 25,1:PRINT STRING$(79,32);:RETURN
43035 IF AN$="" GOTO 43020
43040 IF FL>NF GOTO 43020
43050 PAGE=0:GOSUB 2000:GOSUB 7000:GOSUB 22000:IF FL=1 THEN KY=1
43060 LOCATE 25,1:PRINT STRING$(79,32);:A$="Any more changes (Y/N)? ":LOCATE 25,1:PRINT A$;
43070 ROW=25:COLUMN=LEN(A$)+2:AX$="YyNn":A1%=1:GOSUB 40130:IF AN$="Y" OR AN$="y" GOTO 43020
43075 IF AN$="" GOTO 43060
43080 IF KY=1 GOTO 43100 ELSE RECNUM=CURRENT:GOOD=GOOD-1:GOSUB 12000:GOSUB 35000:GOTO 37000
43100 RECNUM=CURRENT:GOSUB 34000:KY$=F$(1):GOSUB 33000:CURRENT=RECNUM
43110 GOTO 41060
45000 REM ************************************************************
45001 REM *** Search and List Function     Process: Look for records matching
45002 REM ***                                       any specified parameters
45003 REM ***                                       and display them
45004 REM ************************************************************
45010 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:A$="Enter record # to start search or <ENTER> to start at current record ":PRINT A$;
45020 ROW=25:COLUMN=LEN(A$)+2:A1%=LEN(STR$(MAXSIZE)):AX$="0123456789":GOSUB 40130:RECNUM=VAL(AN$)
45030 IF RECNUM<>0 GOTO 45050 ELSE IF CURRENT=-1 THEN RECNUM=1:GOTO 45060
45040 RECNUM=CURRENT:GOTO 45060
45050 IF RECNUM>MAXSIZE THEN RECNUM=1
45060 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:A$="Do you wish to display records that have been deleted (Y/N)? ":PRINT A$;
45070 ROW=25:COLUMN=LEN(A$)+2:AX$="YyNn":A1%=1:GOSUB 40130:IF AN$="" GOTO 45060
45080 DEL$=AN$
45090 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:A$="Do you wish to select by a field's contents (Y/N)? ":PRINT A$;
45100 ROW=25:COLUMN=LEN(A$)+2:AX$="YyNn":A1%=1:GOSUB 40130:IF AN$="" GOTO 45090
45110 TEST$=AN$:IF TEST$="N" OR TEST$="n" GOTO 45200 ELSE LOCATE 25,1:PRINT STRING$(79,32);
45120 LOCATE 25,1:A$="Enter field number to test ":PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:AX$="0123456789":A1%=LEN(STR$(NF)):GOSUB 40130:IF AN$="" GOTO 45120 ELSE FL=VAL(AN$):PAGE=0:GOSUB 2000
45130 LOCATE 25,1:PRINT STRING$(79,32);:A$="Enter test string":LOCATE 25,1:PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:AX$=AQ$:A1%=35:GOSUB 40130:IF AN$="" GOTO 45130
45140 COMPARE$=RIGHT$(AN$,LEN(AN$)-1):TYPE$=LEFT$(AN$,1):IF TYPE$<>"<" AND TYPE$<>">" AND TYPE$<>"=" GOTO 45130
45200 GOSUB 32000:IF STAT$="E" GOTO 45300
45210 IF STAT$<>"D" GOTO 45220
45215 IF DEL$="N" OR DEL$="n" GOTO 45300
45220 IF TEST$="Y" OR TEST$="y" GOTO 45400
45230 GOSUB 17000:PAGE=1:FL=0:GOSUB 2000:GOSUB 7000:LOCATE 25,1:PRINT STRING$(79,32);:IF STAT$="A" THEN S$="Active" ELSE S$="Deleted"
45240 A$="Status: "+S$+": Continue search (Y/N)":LOCATE 25,1:PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:A1%=1:AX$="YyNn":GOSUB 40130:IF AN$="Y" OR AN$="y" GOTO 45300
45250 IF AN$="" GOTO 45240 ELSE IF STAT$="D" GOTO 38000
45260 CURRENT=RECNUM:GOTO 37000
45300 RECNUM=RECNUM+1:IF RECNUM>MAXSIZE THEN CURRENT=-1:RETURN
45310 GOTO 45200
45400 GOSUB 17000:IF TYPE$<>"<" GOTO 45500
45410 IF LEFT$(F$(FL),LEN(COMPARE$))=COMPARE$ GOTO 45230
45420 GOTO 45300
45500 IF TYPE$<>">" GOTO 45600
45510 FOR A=1 TO LEN(F$(FL))-LEN(COMPARE$)
45520 IF MID$(F$(FL),A,LEN(COMPARE$))=COMPARE$ GOTO 45230
45530 NEXT A:GOTO 45300
45600 IF F$(FL)=COMPARE$ GOTO 45230
45610 GOTO 45300
46000 REM ************************************************************
46001 REM *** X-tend Work To New Disk Function  Process: Prompt for new
46002 REM ***                                            data disk mount, then
46003 REM ***                                            read in MAXSIZE from
46004 REM ***                                            .DEF file and return
46005 REM ***                                            to caller
46006 REM ************************************************************
46010 CURRENT=-1:LOCATE 25,1:PRINT STRING$(79,32);:A$="Mount data disk in drive "+LEFT$(NA$,1)+", then press <C> to continue":LOCATE 25,1:PRINT A$;
46020 ROW=25:COLUMN=LEN(A$)+2:AX$="Cc":A1%=1:GOSUB 40130:IF AN$="" GOTO 46010
46030 IN=2:OPEN "I",#2,NA$+".DEF":INPUT#2,MAXSIZE,GOOD:CLOSE:OPEN "i",1,NA$+".vol":INPUT#1,V$:CLOSE:OPEN "r",1,NA$+".DAT",SIZE:IN=0:RETURN
46100 IN=0:LOCATE 25,1:PRINT STRING$(79,32);:GOSUB 47000:GOTO 46000
47000 REM ************************************************************
47001 REM *** Initialize New Data Disk Function  Process: Write records to data
47002 REM ***                                             disk until error
47003 REM ***                                             occurs.  Error
47004 REM ***                                             routine will then
47005 REM ***                                             branch back to line
47006 REM ***                                             47500 where ".DEF"
47007 REM ***                                             file is written.
47008 REM ************************************************************
47010 CLOSE:CURRENT=-1:IN=1:LOCATE 25,1:PRINT STRING$(79,32);:A$="S)pecify number of records, or U)se all available disk space? ":LOCATE 25,1:PRINT A$;
47020 ROW=25:COLUMN=LEN(A$)+2:AX$="SsUu":A1%=1:GOSUB 40130:IF AN$="" GOTO 47020
47030 IF AN$="U" OR AN$="u" GOTO 47100 ELSE LOCATE 25,1:PRINT STRING$(79,32);:A$="How many data records?":LOCATE 25,1:PRINT A$;
47040 ROW=25:COLUMN=LEN(A$)+2:AX$="0123456789":A1%=6:GOSUB 40130:NU=VAL(AN$):IF AN$="" OR NU=0 GOTO 47030
47050 GOTO 47110
47060 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:A$="Enter volume name:":PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:AX$=AQ$:A1%=25:GOSUB 40130:V$=AN$:IF AN$="" GOTO 47060
47070 OPEN "o",1,NA$+".VOL":PRINT#1,V$:CLOSE:RETURN
47100 NU=-1
47110 GOSUB 47060:OPEN "o",2,NA$+".DEF":PRINT#2,100000!,100000!:CLOSE
47120 OPEN "R",#1,NA$+".DAT",SIZE
47125 STAT1$="E":FOR Z=1 TO NF:F$(Z)=STRING$(80,32):NEXT Z:GOSUB 12000
47140 CT=1
47150 LOCATE 25,1:PRINT STRING$(79,32);
47160 A$="Stand by... Initializing record #":LOCATE 25,1:PRINT A$;
47200 LOCATE 25,LEN(A$)+1:PRINT CT;:PUT 1,CT
47210 CT=CT+1:IF NU=-1 GOTO 47200 ELSE NU=NU-1
47220 IF NU=0 GOTO 47500 ELSE GOTO 47200
47500 CLOSE:CT=CT-1:OPEN "O",#2,NA$+".DEF":PRINT#2,CT,0:CLOSE #2
47510 IN=0:LOCATE 25,1:PRINT STRING$(79,32);:RETURN
49000 REM ************************************************************
49001 REM *** BASIC Error Handler         Process: This is really only set
49002 REM ***                                      up to handle the DISK
49003 REM ***                                      SPACE full error when
49004 REM ***                                      initializing a new data
49005 REM ***                                      disk indicated by variable
49006 REM ***                                      IN = 1.  Otherwise ERROR
49007 REM ***                                      code is reported, files are
49008 REM ***                                      closed, and program ends.
49009 REM ************************************************************
49010 IF IN=0 GOTO 49100
49020 IF IN=1 AND ERR=61 THEN RESUME 47500
49030 IF IN=2 AND ERR=53 THEN RESUME 46100
49100 CLS:RESET:PRINT "Internal ERROR #";ERR;" in line #";ERL:PRINT"Consult BASIC manual appendix A for explanation.":END
50000 REM ************************************************************
50001 REM *** Program Title Display Function     Process: Used to display
50002 REM ***                                             program title and
50003 REM ***   Display idea credit to:                   author at beginning
50004 REM ***      John Vandergrift                       and end of program
50005 REM ***                                             execution.
50006 REM ************************************************************
50010 BEEP:CLS:A$=TI$:A1$="B":A2$="Y":A3$=AU$:C=10
50020 GOSUB 50060
50030 A$=STRING$(LEN(A$)," "):A1$=" ":A2$=" ":A3$=STRING$(LEN(A3$)," "):C=9
50040 GOSUB 50060
50050 FOR Z=1 TO 2000:NEXT Z:RETURN
50060 FOR I=1 TO C
50070 LOCATE I,40-LEN(A$)/2:PRINT A$;
50080 LOCATE 12,4*I:PRINT A1$;
50090 LOCATE 12,81-(4*I):PRINT A2$;
50100 LOCATE 24-I,41-(LEN(A3$)/2):PRINT A3$;
50110 NEXT I
50120 RETURN
60000 REM *** Do not remove lines 60000 through 60009!
60001 REM *** This program SKELETON.BAS is to be used with the Ultra-Mind
60002 REM *** intelligent database program generator.  It is copyright, (C),
60003 REM *** 1983, by The FreeSoft Company, P.O. Box 27608, St. Louis, MO
60004 REM *** 63146.  For copies of this and the other Ultra-Utility programs,
60005 REM *** send 2 double sided or 4 single sided diskettes and a postage
60006 REM *** paid self addressed return mailer to the address above.  Specify
60007 REM *** that you want LIBRARIES #1 and #2.  The Ultra-Utilities include
60008 REM *** Ultra-Zap, Ultra-Format, Ultra-File, Ultra-Optimize, and
60009 REM *** Ultra-Mind.  Lines 60000 through 60009 all be removed from all
60010 REM *** programs generated by Ultra-Mind.
```

## U-MIND.BAS

```bas
0 REM *** DO NOT REMOVE OR MODIFY LINES 0 THROUGH 10
1 REM *** U-MIND.BAS and SKELETON.BAS are copyrighted (C),1983 by The FreeSoft
2 REM *** Company, P.O. Box 27608, St. Louis, MO 63146
3 REM *** To get copies of the entire 5 volume set of Ultra-Utilties, send 2
4 REM *** double sided diskettes or 4 single sided diskettes to us at the above
5 REM *** address.  Be sure to include a postage-paid, self-addressed return
6 REM *** mailer and specify that you want LIBRARIES #1 and #2.
7 REM *** The Ultra-Utilities include Ultra-Zap, Ultra-Format, Ultra-File,
8 REM *** Ultra-Optimize, and Ultra-Mind.
9 REM *** AUTHOR: WAT BUCHANON, All Rights Reserved.
10 AQ$=" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890!@#$%^&*()_-=+}{[]`~':;?><|\,./":AX$=AQ$
20 KEY OFF
30 ON ERROR GOTO 1150
40 DIM EL$(10),CL$(10):CLS:A$="The FreeSoft Company Presents:":A1$="Ultra-Mind":A2$="The Intelligent Data Base Generator":A3$=" Copyright, 1983, The FreeSoft Co."
50 COLOR 7,0:LOCATE 5,(40-LEN(A$)/2):PRINT A$:COLOR 15,0:LOCATE 7,(40-LEN(A1$)/2):PRINT A1$
60 A4$=STRING$(LEN(A3$)," ")
70 LOCATE 9,(40-LEN(A2$)/2):PRINT A2$:COLOR 0,7:LOCATE 13,(40-LEN(A3$)/2):PRINT A3$
80 LOCATE 12,(40-LEN(A3$)/2):PRINT A4$:LOCATE 14,(40-LEN(A3$)/2):PRINT A4$
90 LOCATE 1,1:COLOR 15,0:PRINT STRING$(79,205):LOCATE 24,1:PRINT STRING$(79,205);
100 COLOR 7,0:FOR Z=1 TO 2000:NEXT Z:CLS
110 PRINT"Do you wish to:":PRINT:PRINT"1) Define a database":PRINT"2) Generate a defined database":PRINT:PRINT:PRINT"Enter your choice (1 or 2)"
120 A$=INKEY$:IF A$<>"1" AND A$<>"2" GOTO 120
130 IF A$="2" GOTO 1510
140 CLS
150 PRINT "Enter the filename of your data base (DO NOT INCLUDE AN EXTENSION)"
160 INPUT NA$
170 PRINT:PRINT"Now enter a heading title that will be displayed on the screen:":INPUT TI$
180 PRINT:PRINT"Who is the author of this program:":INPUT AU$:PRINT
190 INPUT "What drive will the data diskette be in (A,B,etc.) ";DA$
200 NA$=DA$+":"+NA$
210 OPEN "O",#1,NA$+".atr":WRITE#1,AU$,NA$,TI$
220 ND=1:NF=1:CLS:LOCATE 24,1:PRINT STRING$(79,205);:GOTO 320
230 TY=0:LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "1) Enter new field.  2) Start new page  3) Enter non-field symbols.  4) Quit";
240 A$=INKEY$:IF A$="" OR INSTR("1234",A$)=0 GOTO 240
250 IF A$="1" THEN NF=NF+1:GOTO 320
260 IF A$="3" THEN TY=7:NF=NF+1:GOTO 340
270 IF A$="2" THEN ND=ND+1:CLS:GOTO 230
280 IF A$="4" THEN CLOSE:OPEN "O",#1,NA$+".HDR":WRITE#1,NF,ND,TB:CLOSE:CLS
290 PRINT "Do you wish to go ahead and generate the database? (Y/N)"
300 A$=INKEY$:IF A$<>"Y" AND A$<>"y" AND A$<>"N" AND A$<>"n" GOTO 300
310 IF A$="Y" OR A$="y" GOTO 1520 ELSE CLS:PRINT"Program finished...":END
320 LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:IF NF=1 THEN PRINT "<KEY FIELD>"; ELSE PRINT "Field ";NF;
330 GOTO 350
340 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "Symbols";
350 PRINT ", Page";ND;": Use arrow keys to position cursor then press <H>";
360 GOSUB 820
370 IF TY=7 THEN MR=R:MC=C:B$="":GOTO 410
380 A$=RIGHT$(STR$(NF),LEN(STR$(NF))-1):B$=A$+") "
390 MR=R:MC=C:LOCATE R,C:PRINT B$
400 GOTO 420
410 A$=" Now enter the symbols you wish to put at that position: ":A1%=79:GOTO 430
420 A$=" Now enter the field prompt you wish to use: ":A1%=50
430 WRITE #1,ND,MR,MC:LOCATE 24,(40-LEN(A$)/2):PRINT A$;:ROW=25:COLUMN=1:LOCATE ROW,COLUMN:PRINT STRING$(79,32);
440 GOSUB 1320:LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:M$=B$+AN$:LOCATE MR,MC:IF TY<>7 THEN PRINT M$;:WRITE #1,M$
450 IF (TY=7 AND M$="@") GOTO 2510 ELSE IF TY=7 THEN GOSUB 1050:GOTO 810
460 A$=" Now enter the type of field: 1) Numeric, ":LOCATE 24,40-LEN(A$)/2:PRINT A$;:LOCATE 25,1:PRINT "2) Alphanumeric, 3) Formatted Numeric, 4) Calculated, 5) Date, 6) Time";
470 A$=INKEY$:IF A$="" OR INSTR("123456",A$)=0 GOTO 470
480 TY=VAL(A$):WRITE#1,TY
490 IF A$="5" THEN AF$=DATE$:FL=10:TB=TB+FL
500 IF A$="6" THEN AF$=TIME$:FL=8:TB=TB+FL
510 LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "Use arrow keys to position cursor, then press <H>";
520 GOSUB 820:FR=R:FC=C:WRITE #1,FR,FC:IF TY=5 OR TY=6 THEN WRITE#1,FL
530 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1
540 IF TY=1 OR TY=2 OR TY=4 THEN A$="How many characters long is this field? ":PRINT A$;:ROW=25:COLUMN=LEN(A$)+1:A1%=2:GOSUB 1320:FL=VAL(AN$):AF$=STRING$(FL,22)
550 IF TY=3 THEN A$="Enter your special format below.  Use \'s for input character positions:":LOCATE 24,1:PRINT A$;:ROW=25:COLUMN=1:A1%=80-FC:GOSUB 1320:AF$=AN$:LOCATE 24,1:PRINT STRING$(79,205);
560 IF TY=3 THEN FOR A=1 TO LEN(AF$):IF MID$(AF$,A,1)="\" THEN MID$(AF$,A,1)=CHR$(22)
570 IF TY=3 THEN NEXT A:FL=LEN(AF$)
580 IF FL=0 THEN LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "ERROR - Null fields not allowed. Use symbolic fields.  Press <C> to continue";:ELSE GOTO 600
590 A$=INKEY$:IF A$="C" OR A$="c" THEN LOCATE MR,MC:PRINT STRING$(LEN(M$),32);:GOTO 320 ELSE GOTO 590
600 IF TY=1 OR TY=2 OR TY=3 THEN TB=TB+FL:WRITE #1,FL
610 IF TY=3 THEN WRITE #1,AF$
620 LOCATE FR,FC:PRINT AF$;
630 IF TY=4 THEN LOCATE 25,1:A$="How many lines of calculations for this field? ":PRINT A$;:ROW=25:COLUMN=LEN(A$)+1:A1%=2:GOSUB 1320:CL=VAL(AN$):IF CL=0 GOTO 630 ELSE WRITE#1,CL
640 IF TY=4 THEN FOR A=1 TO CL:LOCATE 25,1:PRINT STRING$(79,32);:A$=" Enter calculation line #"+STR$(A)+" of"+STR$(CL)+" ":LOCATE 24,40-LEN(A$)/2:PRINT A$;:ROW=25:COLUMN=1:A1%=70:GOSUB 1320:CL$=AN$:WRITE#1,CL$:NEXT A
650 LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);
660 GOSUB 1160:IF TY=1 THEN LOCATE 25,1:PRINT STRING$(73,32);:LOCATE 25,1:A$="How many lines of edit checking for this field? ":PRINT A$;:ROW=25:COLUMN=LEN(A$)+1:A1%=2:GOSUB 1320:EL=VAL(AN$)
670 IF TY=1 OR TY=2 THEN WRITE#1,AI$:IF TY=1 THEN WRITE#1,EL
680 IF (TY=2 AND NF<>1) THEN LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:A$="Null entry valid (Y/N)":PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:A1%=1:GOSUB 1320:IF INSTR("YyNn",AN$)=0 GOTO 680 ELSE PRINT#1,AN$
690 IF TY=1 AND EL<>0 THEN FOR A=1 TO EL:A$=" Enter edit check line #"+STR$(A)+" of"+STR$(EL)+" ":LOCATE 24,40-(LEN(A$)/2):PRINT A$;:ROW=25:COLUMN=1:A1%=70:GOSUB 1320:EL$=AN$
700 IF TY=1 AND EL<>0 THEN GOSUB 1020:IF T=0 THEN WRITE#1,EL$:NEXT A:GOTO 730:ELSE LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "ERROR - illegal edit command! Press <C> to continue.";
710 IF TY=3 THEN WRITE#1,AI$
720 IF TY=1 AND EL<>0 THEN A$=INKEY$:IF A$="c" OR A$="C" GOTO 660 ELSE GOTO 720
730 LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);
740 IF TY=1 OR TY=4 THEN LOCATE 25,1:A$="Do you wish to have a special format for printing the field (Y/N)? ":PRINT A$;:ROW=25:COLUMN=LEN(A$)+1:A1%=1:GOSUB 1320:SP$=AN$:IF SP$<>"Y" AND SP$<>"y" AND SP$<>"N" AND SP$<>"n" GOTO 740
750 IF TY=1 OR TY=4 THEN WRITE#1,SP$
760 IF (TY=1 OR TY=4) AND (SP$="Y" OR SP$="y") THEN A$="Enter your printing format below. Use #'s for char. positions":LOCATE 24,40-LEN(A$)/2:PRINT A$;:LOCATE 25,1:PRINT STRING$(79,32);:ROW=25:COLUMN=1:A1%=FL:GOSUB 1320:SF$=AN$
770 LOCATE 24,1:PRINT STRING$(79,205);:IF (TY=1 OR TY=4) AND (SP$="y" OR SP$="Y") THEN AC=0:FOR A=1 TO LEN(SF$):IF MID$(SF$,A,1)="#" THEN AC=AC+1
780 IF (TY=1 OR TY=4) AND (SP$="Y" OR SP$="y") THEN NEXT A:IF AC>0  THEN WRITE#1,SF$:GOTO 810
790 IF (TY=1 OR TY=4) AND (SP$="Y" OR SP$="y") THEN LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "ERROR - null print field! Press <C> to continue.";
800 IF (TY=1 OR TY=4) AND (SP$="y" OR SP$="Y") THEN A$=INKEY$:IF A$="c" OR A$="C" THEN LOCATE 25,1:PRINT STRING$(79,32);:GOTO 740:ELSE GOTO 800
810 GOTO 230
820 R=23:C=40
830 HOLD=SCREEN(R,C,0)
840 DEF SEG = &H40:A=PEEK(&H17):B= A OR 32:POKE &H17,B
850 LOCATE R,C: PRINT CHR$(4);
860 A$=INKEY$:IF A$="" GOTO 860
870 IF INSTR ("48621793Hh",A$)=0 GOTO 860
880 IF A$="H" OR A$="h" THEN LOCATE R,C:PRINT CHR$(HOLD):GOTO 1000
890 IF A$="4" THEN AR=0:AC=-1:GOTO 970
900 IF A$="8" THEN AR=-1:AC=0:GOTO 970
910 IF A$="6" THEN AR=0:AC=1:GOTO 970
920 IF A$="7" THEN AR=-R+1:AC=-C+1:GOTO 970
930 IF A$="9" THEN AR=-R+1:AC=73-C:GOTO 970
940 IF A$="3" THEN AR=23-R:AC=73-C:GOTO 970
950 IF A$="1" THEN AR=23-R:AC=-C+1:GOTO 970
960 AR=1:AC=0
970 IF R+AR>23 OR R+AR<1 THEN BEEP:GOTO 840
980 IF C+AC>73 OR C+AC<1 THEN BEEP:GOTO 840
990 LOCATE R,C:PRINT CHR$(HOLD):R=R+AR:C=C+AC:SOUND 7000,1:GOTO 830
1000 IF HOLD=32 THEN RETURN ELSE LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "ERROR - You are overwriting other screen information!  Press <C> to continue";
1010 A$=INKEY$:IF A$="C" OR A$="c" THEN LOCATE 25,1:PRINT STRING$(79,32);:GOTO 820 ELSE GOTO 1010
1020 REM *** check edits for syntax
1030 A$=LEFT$(EL$,1):IF A$="<" OR A$=">" OR A$="=" THEN T=0 ELSE T=1
1040 RETURN
1050 IF LEFT$(M$,1)<>"@" GOTO 1140
1060 REM *** PROCESS REPEATING SYMBOL LINE ***
1070 Q$=RIGHT$(M$,LEN(M$)-1):AZ=LEN(Q$)
1080 A$="":T$="":FOR Z=1 TO AZ
1090 K$=MID$(Q$,Z,1):IF K$="," THEN A9=VAL(T$):A$=A$+CHR$(A9):T$="":GOTO 1110
1100 T$=T$+K$
1110 NEXT Z:A9=VAL(T$):A$=A$+CHR$(A9):M$=""
1120 R$=LEFT$(A$,1):R=ASC(R$):A$=RIGHT$(A$,LEN(A$)-1)
1130 FOR A=1 TO R:M$=M$+A$:NEXT A
1140 PRINT M$;:WRITE #1,M$,TY:RETURN
1150 CLOSE:CLS:PRINT"ERROR";ERR;"in line";ERL:STOP
1160 IF TY<>1 AND TY<>2 AND TY<>3 THEN RETURN ELSE LOCATE 24,1:PRINT STRING$(79,32);
1170 LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:A1$="Do you wish to restrict input characters (Y/N)? ":PRINT A1$;:ROW=25:COLUMN=LEN(A1$)+1:A1%=1:GOSUB 1320
1180 IF INSTR("YyNn",AN$)=0 GOTO 1170
1190 IF INSTR("Yy",AN$)=0 AND TY=2 THEN AI$=AX$:RETURN
1200 IF INSTR("Yy",AN$)=0 AND (TY=1 OR TY=3) THEN AI$="0123456789.-":RETURN
1210 LOCATE 24,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 24,1:A1$="Type X under character to restrict it: ":PRINT A1$;
1220 AI$="":AT$="0123456789+.-":GOSUB 1260:IF TY=1 OR TY=3 THEN LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:RETURN
1230 AT$="ABCDEFGHIJKLMNOPQRSTUVWXYZ":GOSUB 1260
1240 AT$="abcdefghijklmnopqrstuvwxyz":GOSUB 1260
1250 AT$="!@#$%^&*()_=[]}{;:"'`~<>?,/\|":gosub 10100:LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:return
1260 LOCATE 24,LEN(A1$)+1:PRINT AT$;:ROW=25:COLUMN=LEN(A1$)+1:A1%=LEN(AT$):AX$=" Xx":GOSUB 1320:AX$=AQ$:IF LEN(AN$)<>LEN(AT$) THEN AN$=AN$+STRING$(LEN(AT$)-LEN(AN$),32)
1270 FOR Z=1 TO LEN(AN$):IF MID$(AN$,Z,1)=" " THEN AI$=AI$+MID$(AT$,Z,1)
1280 NEXT Z:LOCATE 24,LEN(A1$)+1:PRINT STRING$(LEN(AT$),32);:LOCATE 25,1:PRINT STRING$(79,32);:RETURN
1290 REM _____________________________________________________________________
1300 REM * IN: ROW,COLUMN, A1%     OUT: AN$
1310 REM _____________________________________________________________________
1320 AN$="":A%=0:LOCATE ROW,COLUMN,0,1,20:PRINT STRING$(A1%,CHR$(22));
1330 IF A%=A1% THEN 1360 ELSE LOCATE ROW,COLUMN+A%,0,1,20:PRINT CHR$(22);
1340 A$=INKEY$:IF A$="" THEN 1340 ELSE IF INSTR(AX$,A$) THEN AN$=AN$+A$:LOCATE ROW,COLUMN+A%,0,1,20:PRINT A$;:A%=A%+1:GOTO 1330
1350 ON INSTR(CHR$(8)+CHR$(13),A$) GOTO 1370,1390:GOTO 1330
1360 A$=INKEY$:IF A$="" THEN 1360 ELSE 1350
1370 IF A%<A1% THEN LOCATE ROW,COLUMN+A%,0,1,20:PRINT CHR$(22);
1380 A%=A%-1:IF A%<0 THEN A%=0:GOTO 1330:ELSE AN$=LEFT$(AN$,LEN(AN$)-1):GOTO 1330
1390 LOCATE ROW,COLUMN+A%,0,1,20:PRINT STRING$(A1%-A%," ");
1400 RETURN
1410 REM _____________________________________________________________________
1420 REM   FORMATTED NUMERIC INPUT  IN:ROW,COLUMN,AF$   OUT: AN$
1430 REM _____________________________________________________________________
1440 AN$="":A%=0:LOCATE ROW,COLUMN:PRINT AF$;:A1%=LEN(AF$)
1450 IF A%=>LEN(AF$) THEN 1490 ELSE A%=INSTR(A%+1,AF$,CHR$(22)):LOCATE ROW,COLUMN+A%-1
1460 A$=INKEY$:IF A$=""THEN 1460 ELSE IF INSTR("1234567890",A$) THEN PRINT A$;:AN$=AN$+A$:GOTO 1450
1470 ON INSTR(CHR$(8)+CHR$(13),A$) GOTO 1440, 1500
1480 GOTO 1450
1490 A$=INKEY$:IF A$="" THEN 1490 ELSE 1470
1500 RETURN
1510 CLS:INPUT "NAME ";NA$
1520 OPEN "I",#1,NA$+".HDR":INPUT #1,NF,ND,TB
1530 CLOSE:TB=TB+1
1540 OPEN "I",#2,NA$+".ATR":OPEN "O",#1,NA$+".BAS"
1550 LN=1:Q$=CHR$(34):RM$="REM "+STRING$(65,"*")
1560 PRINT#1,LN;RM$:INPUT#2,AU$,NA$,TI$:DR$=LEFT$(NA$,2):LN=2:PRINT#1,LN;"REM *** PROGRAM ";NA$;".BAS":LN=3:PRINT#1,LN;"REM *** AUTHOR: ";AU$
1570 LN=4:PRINT#1,LN;"REM *** DATA DISKETTE MOUNTED ON DRIVE ";DR$
1580 LN=5:PRINT#1,LN;RM$
1590 LN=10:PRINT#1,LN;"SIZE=";TB;":ND=";ND;":TI$=";Q$;TI$;Q$;":NF=";NF;":AU$=";Q$;AU$;Q$;":na$=";Q$;NA$;Q$
1600 LN=20:PRINT#1,LN;"DIM F$(";NF;"),fr$(";NF;")"
1610 REM *****************************************************************
1620 PRINT "*** GENERATE BLOCKING ROUTINE                                 ***"
1630 REM *****************************************************************
1640 LN=12010:CT=1:PRINT#1,LN;"FIELD #1, 1 AS STAT$:LSET STAT$=STAT1$"
1650 FOR Z1=1 TO NF:V1=Z1:GOSUB 2330:IF TY=4 OR TY=7 GOTO 1710
1660 LN=LN+5:PX=CT:PRINT#1,LN;"field 1, ";
1670 IF PX>=255 THEN PRINT #1,"255 as n$, ";:PX=PX-255:GOTO 1670
1680 IF PX<>0 THEN PRINT#1,PX;" as n$, ";
1690 PRINT#1,FL;" as fr$(";Z1;"):lset fr$(";Z1;")=f$(";Z1;")"
1700 CT=CT+FL
1710 NEXT Z1:LN=LN+5:PRINT#1,LN;"RETURN":CLOSE#2:OPEN "I",2,NA$+".ATR":INPUT#2,AU$,NA$,TI$
1720 REM *****************************************************************
1730 PRINT "*** GENERATE UN-BLOCKING ROUTINE                              ***"
1740 REM *****************************************************************
1750 LN=17010:CT=1:PRINT#1,LN;"FIELD #1, 1 AS STAT$:STAT1$=STAT$"
1760 FOR Z1=1 TO NF:V1=Z1:GOSUB 2330:IF TY=4 OR TY=7 GOTO 1820
1770 LN=LN+5:PX=CT:PRINT#1,LN;"FIELD 1, ";
1780 IF PX>=255 THEN PRINT#1,"255 AS N$, ";:PX=PX-255:GOTO 1780
1790 IF PX<>0 THEN PRINT#1,PX;" AS N$, ";
1800 PRINT#1,FL;" AS FR$(";Z1;"):F$(";Z1;")=FR$(";Z1;")";:IF TY=1 THEN K=Z1:GOSUB 2310:PRINT#1,":";V$;"=VAL(F$(";Z1;"))" ELSE PRINT #1,""
1810 CT=CT+FL
1820 NEXT Z1:LN=LN+5:PRINT#1,LN;"RETURN":CLOSE#2:OPEN "I",2,NA$+".ATR":INPUT#2,AU$,NA$,TI$
1830 REM *****************************************************************
1840 PRINT "*** GENERATE DISPLAY FIELDS ROUTINE                           ***"
1850 REM *****************************************************************
1860 LN=7010:FOR Z1=1 TO NF:V1=Z1:GOSUB 2330:IF TY=4 OR TY=7 GOTO 1910
1870 LN=LN+5:PRINT#1,LN;"IF PAGE=";PG;" THEN LOCATE ";FR;",";FC;":";
1880 IF TY=1 AND (SP$="y" OR SP$="Y") THEN PRINT#1,"PRINT USING ";Q$;SF$;Q$;";";:K=Z1:GOSUB 2310:PRINT#1,V$:GOTO 1900:ELSE PRINT #1,"PRINT ";
1890 PRINT#1,"F$(";Z1;");"
1900 NEXT Z1:LN=LN+5:PRINT#1,LN;"RETURN":CLOSE#2:OPEN "I",2,NA$+".ATR":INPUT#2,AU$,NA$,TI$:GOTO 1970
1910 IF TY=7 GOTO 1900
1920 LN=LN+5:PRINT#1,LN;"IF PAGE<>";PG;" GOTO ";LN+((CL+2)*5)
1930 FOR Q=1 TO CL:LN=LN+5:PRINT#1,LN;CL$(Q):NEXT Q
1940 LN=LN+5:PRINT#1,LN;"F$(";Z1;")=STR$(F";:Z1$=STR$(Z1):Z1$=RIGHT$(Z1$,LEN(Z1$)-1):PRINT#1,Z1$;"#):LOCATE ";FR;",";FC;":PRINT ";:IF SP$="y" OR SP$="Y" THEN PRINT#1,"USING ";Q$;SF$;Q$;";
1950 K=Z1:GOSUB 2310:PRINT#1,V$
1960 GOTO 1900
1970 REM ****************************************************************
1980 PRINT "*** GENERATE SCREEN INFO DISPLAY ROUTINE                      ***"
1990 REM ****************************************************************
2000 LN=2013:PRINT#1,LN;"LOCATE 24,1:PRINT STRING$(79,61);":LN=2010:FOR Z2=1 TO NF:V1=Z2:GOSUB 2330
2010 LN=LN+5:PRINT#1,LN;"IF PAGE=";PG;" THEN LOCATE ";MR;",";MC;":PRINT ";Q$;M$;Q$;";"
2020 NEXT Z2:CLOSE #2:OPEN "I",2,NA$+".ATR":INPUT#2,AU$,NA$,TI$:LN=LN+5
2030 PRINT#1,LN;"RETURN":LN=LN+5
2040 X=2010:PRINT#1,X;"IF FL<>0 GOTO ";LN
2050 FOR Z2=1 TO NF:V1=Z2:GOSUB 2330:PRINT#1,LN;"IF (FL=";Z2;" AND PAGE<>";PG;") THEN PAGE=";PG;":CLS:GOTO 2013":LN=LN+5:NEXT Z2:PRINT#1,LN;"RETURN"
2060 CLOSE #2:OPEN "I",2,NA$+".ATR":INPUT#2,AU$,NA$,TI$
2070 REM ****************************************************************
2080 PRINT "*** GENERATE INPUT FIELD AND EDIT CHECKING ROUTINE            ***"
2090 REM ****************************************************************
2100 LN=22010:FOR Z2=1 TO NF:V1=Z2:GOSUB 2330
2110 IF TY=4 OR TY=7 THEN PRINT#1,LN;"IF Fl=";Z2;" THEN RETURN":GOTO 2190
2120 IF TY=5 THEN PRINT#1,LN;"IF Fl=";Z2;" THEN F$(";Z2;")=DATE$:LOCATE ";FR;",";FC;":PRINT F$(";Z2;"):RETURN":GOTO 2190
2130 IF TY=6 THEN PRINT#1,LN;"IF Fl=";Z2;" THEN F$(";Z2;")=TIME$:LOCATE ";FR;",";FC;":PRINT F$(";Z2;"):RETURN":GOTO 2190
2140 IF TY=2 THEN PRINT#1,LN;"IF Fl=";Z2" THEN ROW=";FR;":COLUMN=";FC;":A1%=";FL;":AX$=";Q$;AI$;Q$;":GOSUB 40130:";:IF Z2=1 OR (Z2<>1 AND NE$="n" OR NE$="N") THEN PRINT#1,"IF AN$="Q$;Q$;" GOTO ";LN;" ELSE ";
2150 IF TY=2 THEN PRINT#1,"F$(";Z2;")=AN$:RETURN":GOTO 2190
2160 IF TY=3 THEN PRINT#1,LN;"IF Fl=";Z2;" THEN ROW=";FR;":COLUMN=";FC;":AF$=";Q$;AF$;Q$;":AX$=";Q$;AI$;Q$;":GOSUB 40150:";:IF Z1=1 THEN PRINT#1,"IF AN$=";Q$;Q$;" GOTO ";LN;" ELSE ";
2170 IF TY=3 THEN PRINT#1,"F$(";Z2;")=AN$:RETURN":GOTO 2190
2180 IF TY=1 GOTO 2200
2190 LN=LN+5:NEXT Z2:PRINT#1,LN;"RETURN":GOTO 2250
2200 SV=LN:PRINT#1,LN;"IF Fl<>";Z2;" GOTO ";LN+((EL+2)*5);" ELSE ROW=";FR;":COLUMN=";FC;":A1%=";FL;":AX$=";Q$;AI$;Q$;":GOSUB 40130:";:IF Z2=1 THEN PRINT#1,"IF AN$=";Q$;Q$;" GOTO ";LN;" ELSE ";
2210 PRINT#1,"F$(";Z2;")=AN$:";:P$=STR$(Z2):P1$=RIGHT$(P$,LEN(P$)-1)+"#":PRINT#1,"F";P1$;"=VAL(AN$)"
2220 IF EL=0 GOTO 2240 ELSE FOR Z3=1 TO EL:LN=LN+5:PRINT#1,LN;"IF F";P1$;EL$(Z3);"THEN ER$=";Q$;EL$(Z3);Q$;":ER=4:GOSUB 36000:GOTO ";SV
2230 NEXT Z3
2240 LN=LN+5:PRINT#1,LN;"RETURN":GOTO 2190
2250 CLOSE:OPEN "o",1,NA$+".bat":PRINT#1,"BASIC ";NA$+".bas";"/F:2/S:";TB:CLOSE
2260 PRINT:PRINT "Now Merging Skeleton Program...":CL$=STRING$(255,32)
2270 OPEN "a",1,NA$+".bas":OPEN "i",2,"skeleton.bas"
2280 LINE INPUT#2,A$:PRINT ".";:PRINT#1,A$
2290 IF EOF(2) GOTO 2300 ELSE GOTO 2280
2300 RESET:CLS:PRINT "Program ";NA$+".BAS";" has been generated!":END
2310 V$=STR$(K):V$=RIGHT$(V$,LEN(V$)-1):V$="F"+V$+"#":RETURN
2320 RESET:STOP
2330 REM *** READ IN NEXT FIELD ATTRIBUTES
2340 INPUT#2,PG,MR,MC,M$,TY:IF TY=7 THEN RETURN
2350 IF TY<>1 AND TY<>2 GOTO 2400
2360 INPUT#2,FR,FC,FL,AI$:IF TY=2 GOTO 2490 ELSE INPUT#2,EL:IF EL=0 GOTO 2380
2370 ERASE EL$:DIM EL$(EL):FOR Z=1 TO EL:INPUT#2,EL$(Z):NEXT Z
2380 INPUT#2,SP$:IF SP$="y" OR SP$="Y" THEN INPUT#2,SF$
2390 RETURN
2400 IF TY<>3 GOTO 2430
2410 INPUT#2,FR,FC,FL,AF$,AI$
2420 RETURN
2430 IF TY<>4 GOTO 2460
2440 INPUT#2,FR,FC,CL:ERASE CL$:DIM CL$(CL):FOR Z=1 TO CL:INPUT#2,CL$(Z):NEXT Z:INPUT#2,SP$:IF SP$="y" OR SP$="Y" THEN INPUT#2,SF$
2450 RETURN
2460 IF TY<>5 AND TY<>6 GOTO 2480
2470 INPUT#2,FR,FC,FL:RETURN
2480 RETURN
2490 IF V1<>1 THEN INPUT#2,NE$
2500 RETURN
2510 LOCATE 25,1:PRINT"<Help>: Enter key-> ";
2520 Z$=INKEY$:IF Z$="" GOTO 2520
2530 PRINT Z$;" is ASCII code";ASC(Z$);"... Press <C> to cont.";
2540 Z$=INKEY$:IF Z$<>"C" AND Z$<>"c" GOTO 2540
2550 GOTO 410
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0245

     Volume in drive A has no label
     Directory of A:\

    U-MIND   DOC     51120  11-20-84   5:14p
    U-OPT    DOC      2124  11-20-84   5:18p
    DOC41    TXT     52574  11-20-84   5:23p
    DOC42    TXT     23210  11-20-84   5:26p
    U-OPT    EXE     25601  11-20-84   5:45p
    SKELETON BAS     23809  11-28-84  10:49p
    U-MIND   BAS     15233  11-28-84  10:51p
    CRC      TXT       911  12-18-84   9:29a
    CRCK4    COM      1536  10-21-82   5:50p
            9 file(s)     196118 bytes
                          121856 bytes free
