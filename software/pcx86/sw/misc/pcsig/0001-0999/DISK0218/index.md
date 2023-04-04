---
layout: page
title: "PC-SIG Library Disk #218"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0218/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0218"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ADDRESS MANAGER"

    ADDRESS MANAGER helps you keep multiple databases of names, addresses,
    phone numbers, and useful comments.  You can add new entries and delete
    or update current ones easily.
    
    The program is especially designed to address envelopes -- always a
    problem area, as well as print labels and even entire mailing lists.
    Labels can be printed on sheets from one to four across, and all
    entries can be sorted by zip code before printing.
    
    ADDRESS MANAGER menus are function-key driven.  On-line help is
    available from each menu.  This provides a quick and user-friendly
    interface, one that is easy to learn and use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AM_ED.BAS

```bas
10 '     PROGRAM TO CONVERT AN ADDRESS MANAGER DATABASE FILE INTO AN
20 '     EDIT FILE.
30 '  
40 '     AN ADDRESS MANAGER DATABASE FILE HAS THE FOLLOWING FORMAT:
50 '             SIZE | ENTRY 1 | ENTRY 2 | ... | ENTRY N | <FF>
60 '        WHERE SIZE IS A 4 BYTE INTEGER AND EACH ENTRY HAS THE
70 '        FOLLOWING FORMAT:
80 '             <FF> NAME <CR> ADDRESS LINE 1 <CR> ADDRESS LINE 2 <CR>
90 '             ADDRESS LINE 3 <CR> AREA CODE <CR> PHONE PREFIX <CR>
100 '            LAST 4 DIGITS <CR> COMMENT LINE 1 <CR> COMMENT LINE 2
110 '       WHERE <FF> IS A FORM FEED BYTE AND <CR> IS A CARRIAGE RETURN BYTE
120 '  
130 '    THE ADDRESS MANAGER TREATS A DATABASE FILE AS A DIRECT ACCESS FILE
140 '    HAVING A RECORD LENGTH OF 512 BYTES.  THIS PROGRAM ACCESS THE FILE
150 '    64 BYTES AT A TIME FOR CONVENIENCE.
160 '------------------------------------------------------------------------
170 INPUT "Enter input database file:  ",FILE1$
180 OPEN FILE1$ AS #1 LEN=64
190 FIELD #1,64 AS B$
200 INPUT "Enter output ASCII file:    ",FILE2$
210 OPEN FILE2$ FOR OUTPUT AS #2
215 INPUT "Ouput Comments on 2 lines:  ",C$
216 CMNT$ = MID$( C$, 1, 1 ) : IF CMNT$ = "y" THEN CMNT$ = "Y"
220 IREC%=1
230 GET #1,IREC%
240 A$ = B$
250 IREC% = IREC% + 1
260 GET #1,IREC%
270 C$ = A$ + B$
280 '---------------------------DISPLAY THE FILE SIZE
290 SIZE = CVI( MID$( C$, 1, 2 ) )
300 IF SIZE < 0 THEN SIZE = SIZE + 65536
310 PRINT "DATABASE SIZE ";SIZE;" BYTES"
320 '        DEFINE THE FORM FEED CHARACTER, FF
330 FF$ = CHR$( 12 )
340 J% = INSTR(C$,FF$)
350 '        THE FF CHARACTER MUST BE THE 5TH CHARACTER IN FILE
360 IF J% <> 5 THEN PRINT "ILLEGAL FILE TYPE" : END
370 J% = J% + 1
380 '        DEFINE THE CARRIAGE RETURN CHARACTER, CR
390 CR$ = CHR$( 13 )
400 '---------------------------ENTRY OUTPUT LOOP
410 '---------------------------NAME
420 GOSUB 1000
430 K% = INSTR( J%, C$, CR$ )
440 IF J% >= SIZE THEN END
450 L$ = MID$( C$, J%, K%-J% )
460 PRINT L$
470 PRINT #2,L$
480 J% = K% + 1
490 '---------------------------ADDRESS LINE 1
500 GOSUB 1000
510 K% = INSTR( J%, C$, CR$ )
520 L$ = MID$( C$, J%, K%-J% )
530 PRINT L$
540 PRINT #2,L$
550 J% = K% + 1
560 '---------------------------ADDRESS LINE 2
570 GOSUB 1000
580 K% = INSTR( J%, C$, CR$ )
590 L$ = MID$( C$, J%, K%-J% )
600 PRINT L$
610 PRINT #2,L$
620 J% = K% + 1
630 '---------------------------ADDRESS LINE 3
640 GOSUB 1000
650 K% = INSTR( J%, C$, CR$ )
660 L$ = MID$( C$, J%, K%-J% )
670 PRINT L$
680 PRINT #2,L$
690 J% = K% + 1
700 '---------------------------PHONE LINE
710 GOSUB 1000
720 K% = INSTR(J%,C$,CR$)
730 L1$ = MID$(C$,J%,K%-J%)
740 J%=K%+1
750 K% = INSTR(J%,C$,CR$)
760 L2$ = MID$(C$,J%,K%-J%)
770 J%=K%+1
780 K% = INSTR(J%,C$,CR$)
790 L3$ = MID$(C$,J%,K%-J%)
800 PRINT "(";L1$;")";L2$;"-";L3$
810 PRINT #2,"(";L1$;")";L2$;"-";L3$
820 J% = K% + 1
830 '---------------------------COMMENT LINE 1
840 GOSUB 1000
850 K% = INSTR(J%,C$,CR$)
860 L$ = MID$(C$,J%,K%-J%)
870 IF CMNT$ = "Y" THEN PRINT L$ : PRINT #2,L$
890 J% = K% + 1
900 '---------------------------COMMENT LINE 2
910 GOSUB 1000
920 K% = INSTR(J%,C$,FF$)
930 L$ = MID$(C$,J%,K%-J%)
940 IF CMNT$ = "Y" THEN PRINT L$ : PRINT #2,L$
950 PRINT : PRINT #2,""
960 J% = K% + 1
970 GOTO 420
980 '---------------------------END OF LOOP
990 '  
1000 '---------------------INPUT BUFFER UPDATE ROUTINE
1010 IF J% <= 64 THEN RETURN
1020 J% = J% - 64 : SIZE = SIZE - 64
1030 A$ = B$
1040 IREC% = IREC% + 1
1050 ON ERROR GOTO 1100
1060 GET #1,IREC%
1070 ON ERROR GOTO 0
1080 C$ = A$ + B$
1090 RETURN
1100 '---------------------ERROR TRAPPING
1110 B$ = ""
1120 RESUME
```

## ED_AM.BAS

```bas
10 '     PROGRAM TO CONVERT AN EDIT FILE TO AN ADDRESS MANAGER DATABASE 
11 '     FILE.
12 '  
13 '     AN ADDRESS MANAGER DATABASE FILE HAS THE FOLLOWING FORMAT:
14 '             SIZE | ENTRY 1 | ENTRY 2 | ... | ENTRY N | <FF>
15 '        WHERE SIZE IS A 4 BYTE INTEGER AND EACH ENTRY HAS THE
16 '        FOLLOWING FORMAT:
17 '             <FF> NAME <CR> ADDRESS LINE 1 <CR> ADDRESS LINE 2 <CR>
18 '             ADDRESS LINE 3 <CR> AREA CODE <CR> PHONE PREFIX <CR>
19 '            LAST 4 DIGITS <CR> COMMENT LINE 1 <CR> COMMENT LINE 2
20 '        WHERE <FF> IS A FORM FEED BYTE AND <CR> IS A CARRIAGE RETURN BYTE
21 '  
22 '     THE ADDRESS MANAGER TREATS A DATABASE FILE AS A DIRECT ACCESS FILE
23 '     HAVING A RECORD LENGTH OF 512 BYTES.  THIS PROGRAM ACCESS THE FILE
24 '     64 BYTES AT A TIME FOR CONVENIENCE.
25 '------------------------------------------------------------------------
100 INPUT "Enter input ASCII file:            ",FILE1$
110 OPEN FILE1$ FOR INPUT AS #1
120 INPUT "Enter output database file:        ",FILE2$
130 OPEN FILE2$ AS #2 LEN=128
140 FIELD #2,128 AS A$
145 INPUT "Are comments lines in edit file?:  ",C$
146 CMNT$ = MID$( C$, 1, 1 ) : IF CMNT$ = "y" THEN CMNT$ = "Y"
150 '--------DEFINE THE FORM FEED CHARACTER, FF
160 FF$ = CHR$( 12 )
170 '--------DEFINE THE CARRIAGE RETURN CHARACTER, CR
180 CR$ = CHR$( 13 )
190 '   THE FIRST 5 BYTES OF THE FILE CONTAIN THE TOTAL NUMBER OF BYTES
200 '--------------------------------------------
210 X$ = MKI$( 0 )
220 C$ = X$ + X$ + FF$
230 SIZE = 5
240 IREC% = 0
300 '--------------------------------------------
305 '---------------------------ENTRY OUTPUT LOOP
310 '---------------------------NAME
320 IF EOF(1) THEN GOTO 900
330 LINE INPUT #1,X$
340 IF LEN(X$) <= 2 GOTO 320
345 PRINT X$
350 C$ = C$ + X$ + CR$
360 SIZE = SIZE + LEN(X$) + 1
370 GOSUB 1000
380 '---------------------------ADDRESS LINE 1
385 IF EOF(1) THEN X$ = "" : GOTO 395
390 LINE INPUT #1,X$
395 PRINT X$
400 C$ = C$ + X$ + CR$
410 SIZE = SIZE + LEN(X$) + 1
420 GOSUB 1000
430 '---------------------------ADDRESS LINE 2
435 IF EOF(1) THEN X$ = "" : GOTO 445
440 LINE INPUT #1,X$
445 PRINT X$
450 C$ = C$ + X$ + CR$
460 SIZE = SIZE + LEN(X$) + 1
470 GOSUB 1000
480 '---------------------------ADDRESS LINE 3
485 IF EOF(1) THEN X$ = "" : GOTO 495
490 LINE INPUT #1,X$
495 PRINT X$
500 C$ = C$ + X$ + CR$
510 SIZE = SIZE + LEN(X$) + 1
520 GOSUB 1000
530 '---------------------------PHONE LINE
535 IF EOF(1) THEN X$ = "" : GOTO 542
540 LINE INPUT #1,X$
542 PRINT X$
545 '    REMOVE EXISTING PUNCTUATION, IF ANY
550 K% = INSTR( X$, "(" ) : IF K% > 0 THEN GOSUB 590
560 K% = INSTR( X$, ")" ) : IF K% > 0 THEN GOSUB 590
570 K% = INSTR( X$, "-" ) : IF K% > 0 THEN GOSUB 590
580 GOTO 610
590    X$ = MID$( X$, 1, K%-1 ) + MID$( X$, K%+1, LEN(X$)-K% )
600    RETURN
605 '    IF RESULTING STRING IS NOT 10 LONG, IGNORE IT
610 IF LEN(X$) = 10 THEN GOTO 650
615   C$ = C$ + CR$ + CR$ + CR$
620   SIZE = SIZE + 3
630   GOTO 670
640 '    PHONE STRING IS 10 LONG:
650   C$ = C$ + MID$(X$,1,3) + CR$ + MID$(X$,4,3) + CR$ + MID$(X$,7,4) + CR$
660   SIZE = SIZE + 13
670 GOSUB 1000
680 '---------------------------COMMENT LINE 1
685 IF CMNT$ <> "Y" OR EOF(1) THEN X$ = "" : GOTO 695
690 LINE INPUT #1,X$
695 PRINT X$
700 C$ = C$ + X$ + CR$
710 SIZE = SIZE + LEN(X$) + 1
720 GOSUB 1000
730 '---------------------------COMMENT LINE 2
735 IF CMNT$ <> "Y" OR EOF(1) THEN X$ = "" : GOTO 745
740 LINE INPUT #1,X$
745 PRINT X$
750 C$ = C$ + X$ + FF$
760 SIZE = SIZE + LEN(X$) + 1
770 GOSUB 1000
780 GOTO 320
790 '---------------------------END OF LOOP
800 '--------------------------------------
900 '---------------------------WRAP UP OUTPUT FILE
910 IF LEN(C$) < 128 THEN C$ = C$ + SPACE$( 128-LEN(C$) )
920 LSET A$ = C$
930 IREC% = IREC% + 1
940 PUT #2,IREC%
945 '  NOTE:  File must be a multiple of 512 bytes (4 128-byte records)
950 K% = IREC% MOD 4
960 IF K% = 0 THEN GOTO 985
970   LSET A$ = SPACE$(128)
980   FOR I% = 1 TO 4-K% : IREC% = IREC% + 1 : PUT #2,IREC% : NEXT I%
985 PRINT "Database size is ";SIZE;" bytes"
987 IF SIZE > 32767! THEN SIZE = SIZE - 65536!
988 K% = SIZE
991 GET #2,1
992 B$ = A$
993 MID$( B$, 1, 2 ) = MKI$( K% )
994 LSET A$ = B$
995 PUT #2,1
999 END
1000 '---------------------INPUT BUFFER UPDATE ROUTINE
1010 IF LEN(C$) <= 128 THEN RETURN
1020 B$ = MID$( C$, 1, 128 )
1030 C$ = MID$( C$, 129, LEN(C$)-128 )
1040 LSET A$ = B$
1050 IREC% = IREC% + 1
1060 PUT #2,IREC%
1070 RETURN
```

## PHONELST.BAS

```bas
10 '     PROGRAM TO CREATE A PHONE LIST FROM AN ADDRESS MANAGER DATABASE FILE
30 '  
40 '     AN ADDRESS MANAGER DATABASE FILE HAS THE FOLLOWING FORMAT:
50 '             SIZE | ENTRY 1 | ENTRY 2 | ... | ENTRY N | <FF>
60 '        WHERE SIZE IS A 4 BYTE INTEGER AND EACH ENTRY HAS THE
70 '        FOLLOWING FORMAT:
80 '             <FF> NAME <CR> ADDRESS LINE 1 <CR> ADDRESS LINE 2 <CR>
90 '             ADDRESS LINE 3 <CR> AREA CODE <CR> PHONE PREFIX <CR>
100 '            LAST 4 DIGITS <CR> COMMENT LINE 1 <CR> COMMENT LINE 2
110 '       WHERE <FF> IS A FORM FEED BYTE AND <CR> IS A CARRIAGE RETURN BYTE
120 '  
130 '    THE ADDRESS MANAGER TREATS A DATABASE FILE AS A DIRECT ACCESS FILE
140 '    HAVING A RECORD LENGTH OF 512 BYTES.  THIS PROGRAM ACCESS THE FILE
150 '    64 BYTES AT A TIME FOR CONVENIENCE.
160 '------------------------------------------------------------------------
170 INPUT "Enter input database file:     ",FILE1$
180 OPEN FILE1$ AS #1 LEN=64
190 FIELD #1,64 AS B$
200 INPUT "Enter output phone list file:  ",FILE2$
210 OPEN FILE2$ FOR OUTPUT AS #2
220 IREC%=1
230 GET #1,IREC%
240 A$ = B$
250 IREC% = IREC% + 1
260 GET #1,IREC%
270 C$ = A$ + B$
280 '---------------------------COMPUTE THE FILE SIZE
290 SIZE = CVI( MID$( C$, 1, 2 ) )
300 IF SIZE < 0 THEN SIZE = SIZE + 65536
310 PRINT "DATABASE SIZE ";SIZE;" BYTES"
320 '        DEFINE THE FORM FEED CHARACTER, FF
330 FF$ = CHR$( 12 )
340 J% = INSTR(C$,FF$)
350 '        THE FF CHARACTER MUST BE THE 5TH CHARACTER IN FILE
360 IF J% <> 5 THEN PRINT "ILLEGAL FILE TYPE" : END
370 J% = J% + 1
380 '        DEFINE THE CARRIAGE RETURN CHARACTER, CR
390 CR$ = CHR$( 13 )
400 '---------------------------ENTRY OUTPUT LOOP
410 '---------------------------NAME
420 GOSUB 1000
430 K% = INSTR( J%, C$, CR$ )
440 IF J% >= SIZE THEN END
450 PERSON$ = MID$( C$, J%, K%-J% )
480 J% = K% + 1
490 '---------------------------ADDRESS LINE 1
500 GOSUB 1000
510 K% = INSTR( J%, C$, CR$ )
520 L$ = MID$( C$, J%, K%-J% )
550 J% = K% + 1
560 '---------------------------ADDRESS LINE 2
570 GOSUB 1000
580 K% = INSTR( J%, C$, CR$ )
590 L$ = MID$( C$, J%, K%-J% )
620 J% = K% + 1
630 '---------------------------ADDRESS LINE 3
640 GOSUB 1000
650 K% = INSTR( J%, C$, CR$ )
660 L$ = MID$( C$, J%, K%-J% )
690 J% = K% + 1
700 '---------------------------PHONE LINE
710 GOSUB 1000
720 K% = INSTR(J%,C$,CR$)
730 L1$ = MID$(C$,J%,K%-J%)
740 J%=K%+1
750 K% = INSTR(J%,C$,CR$)
760 L2$ = MID$(C$,J%,K%-J%)
770 J%=K%+1
780 K% = INSTR(J%,C$,CR$)
790 L3$ = MID$(C$,J%,K%-J%)
792 PERSON$ = PERSON$ + SPACE$( 40-LEN(PERSON$) )
794 PERSON$ = PERSON$ + "(" + L1$ + ")" + L2$ + "-" + L3$
800 PRINT PERSON$
810 PRINT #2,PERSON$
820 J% = K% + 1
830 '---------------------------COMMENT LINE 1
840 GOSUB 1000
850 K% = INSTR(J%,C$,CR$)
860 L$ = MID$(C$,J%,K%-J%)
890 J% = K% + 1
900 '---------------------------COMMENT LINE 2
910 GOSUB 1000
920 K% = INSTR(J%,C$,FF$)
930 L$ = MID$(C$,J%,K%-J%)
960 J% = K% + 1
970 GOTO 420
980 '---------------------------END OF LOOP
990 '  
1000 '---------------------INPUT BUFFER UPDATE ROUTINE
1010 IF J% <= 64 THEN RETURN
1020 J% = J% - 64 : SIZE = SIZE - 64
1030 A$ = B$
1040 IREC% = IREC% + 1
1050 ON ERROR GOTO 1100
1060 GET #1,IREC%
1070 ON ERROR GOTO 0
1080 C$ = A$ + B$
1090 RETURN
1100 '---------------------ERROR TRAPPING
1110 B$ = ""
1120 RESUME
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0218

     Volume in drive A has no label
     Directory of A:\

    ADDRESS  BW      12288   9-07-87   7:11p
    ADDRESS  CFG         7   9-20-87   9:13p
    ADDRESS  COL     12288   9-07-87   7:54p
    ADDRESS  DAT      1024   1-15-87   7:36p
    ADDRESS  DOC     40061   2-04-89  10:42a
    ADDRESS  EXE     53659   1-29-89   4:33p
    ADDRESS  MEN     12288   9-07-87   7:11p
    ADDRESS1 HLP      4459   9-20-87   8:58p
    ADDRESS2 HLP      4875   9-20-87   8:58p
    ADDRESS3 HLP      8217   9-20-87   8:59p
    AM_ED    BAS      3701   3-29-87   4:59p
    ED_AM    BAS      4564   4-11-87   4:02p
    PAPER    OUT       128   5-31-84  10:37p
    PHONELST BAS      3424   3-29-87   7:40p
    README   DOC      1542   9-20-87   9:10p
    GO       BAT      1519   9-14-88   3:45p
    GO       TXT       576   1-01-80   3:10a
    FILE0218 TXT      1999   7-09-90   7:26p
           18 file(s)     166619 bytes
                          147456 bytes free
