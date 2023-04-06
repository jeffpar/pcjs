---
layout: page
title: "PC-SIG Diskette Library (Disk #1114)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1114/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1114"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THI USER LIBRARY"

    This program is a reminder list of things to do.  It has a future
    reminder section, a current section, and an archive or history section.
    It can display all jobs currently active and you can set the option to
    sort the listing by function or priority.  You can review a selected
    list of things to do or jobs.  You can also add jobs.  The jobs can be
    edited and saved in a history file or simply erased.  You can also move
    a job from the current section to the future section.  The effective
    date can be chosen relative to the current date or by entering the date
    directly.  Some other miscellaneous functions also available are print,
    change sort order, remove a function, and more.
    File Descriptions:
    
    BRUN30   EXE  Run time library of Quickbasic.
    ??????   THG  Data file for THI.EXE (4 files).
    THI      EXE  Main program.
    THIHIST  EXE  History section for the main program.
    THINGFIL BAS  File utility program for the main program.
    THINGFIL BAT  Batch file to load THINGFIL.BAS.
    THINGS   DOC  Documentation for the main program.
    THISEQ   EXE  Sequence section for the main program.
    USERLIB  EXE  User library of QuickBASIC.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## THINGFIL.BAS

```bas
10 'File utilities program for THINGS program: Version in Stmt 15
15 VER$="4.0***  3/3/87"
20 DIM CLR(5)
30 KEY OFF: COLOR 7,1,4: CLS: DEFINT I
60 LOCATE 4,18
70 PRINT "***THINGS PROGRAM FILE UTILITIES " VER$
80 PRINT SPC(17) STRING$(39,61)
82 LOCATE 8,6: PRINT "This program creates new data files for the THINGS program."
83 PRINT "     There are four such files: CURDAT.THG, FUTDAT.THG,"
84 LOCATE ,33: PRINT "HISTORY.THG, and HISTARK.THG"
90 LOCATE ,10: PRINT "Options:"
100 LOCATE ,15: PRINT "Create new current job file  (CURDAT.THG) =1"
110 LOCATE ,15: PRINT "Create new future job file   (FUTDAT.THG) =2"
120 LOCATE ,15: PRINT "Create new history job files (HISTxxx.THG)=3"
130 LOCATE ,15: PRINT "Create new ALL new files                  =4"
140 LOCATE ,15: PRINT "Exit without changing any files           =5"
150 PRINT :LOCATE ,13: INPUT "Choice";IC
200 ON IC GOTO 1000,2000,3000,1000,4000
1000 'MODULE TO INITIALIZE CURDAT.THG FILE
1020 FOR I=1 TO 5: READ CLR(I): NEXT
1030 DATA 4,7,6,3,2
1070 PRINT CHR$(13) SPC(10) "***CURDAT.THG FILE CREATION MODULE FOR THINGS PROGRAM***"
1080 JTYP%=0: JFUN%=0: BG%=0
1090 JD$="00-00-0000": JDESC$="EMPTY"
1100 JPRI%=0: NMX%=1
1110 OPEN "CURDAT.THG" FOR OUTPUT AS #1
1120 WRITE #1 , DATE$,TIME$,NMX%,BG%
1130 JF$="xxxxxx"
1140 FOR I=1 TO 5: WRITE #1,CLR(I): NEXT
1150 FOR I=1 TO 15: WRITE #1,JF$: NEXT
1160  FOR I=1 TO 2
1170  WRITE #1,JTYP%,JFUN%,JPRI%,JD$
1175  PRINT #1,JDESC$
1180  NEXT
1190 CLOSE #1
1200 PRINT "   'CURDAT.THG' FILE CREATED..."
1210    IF IC<>4 GOTO 4000
2000 'MODULE TO INITIALIZE FUTDAT.THG FILE
2030 PRINT CHR$(13) SPC(10) "***FUTDAT.THG FILE CREATION MODULE***"
2040 OPEN "FUTDAT.THG" AS #2 LEN=75
2050 FIELD #2, 8 AS FDAN$, 2 AS FFN$, 8 AS FD$, 55 AS FDES$, 2 AS RPT$
2070 LSET FDAN$="12-30-99": LSET RPT$="V4"
2080 LSET FFN$=MKI$(1)
2090 LSET FD$="00-00-00"
2100 LSET FDES$=MKI$(0)
2110 PUT #2,1
2120 CLOSE #2
2130 PRINT "   'FUTDAT.THG' FILE CREATED."
2140   IF IC<>4 GOTO 4000
3000 'MODULE TO INITIALIZE OR UPDATE HISTORY.THG FILE
3010 I=1: ONA%=0: N%=1
3020 PRINT CHR$(13) SPC(10) "***HISTORY.THG FILE CREATION/UPDATE MODULE***"
3030 ON ERROR GOTO 3285
3032 OPEN "history.thg" FOR INPUT AS #1
3033 CLOSE #1
3050 ON ERROR GOTO 3440
3060 NAME "HISTORY.THG" AS "HISTOLD.THG"
3070 ON ERROR GOTO 0
3080 PRINT "  Existing HISTORY.THG file has been renamed HISTOLD.THG."
3090 PRINT :PRINT "  Do you wish to use any of the recent HISTOLD.THG"
3100 INPUT "     data in the new file";A$
3110 IF A$<>"y" AND A$<>"Y" GOTO 3290
3120 OPEN "HISTOLD.THG" AS #1 LEN=69
3130 FIELD #1, 8 AS ODA$, 55 AS ODES$, 6 AS OFUN$
3140 GET #1,1: ONA%=CVI(ODA$): GET #1,2
3150 PRINT " The earliest date in the OLD file is " ODA$
3160 PRINT " Enter the starting month and year from which history data"
3170 INPUT "    should be put in the new file.  Month (1-12)=",MS%
3180 PRINT SPC(26) "Year (i.e. 1985)";: INPUT "=",YS%
3200 YS%=YS%-1900
3210  FOR I=2 TO ONA%
3220  GET #1,I
3230  Y%=VAL(RIGHT$(ODA$,2)): IF Y%<YS% GOTO 3270
3240  IF Y%>YS% GOTO 3290
3250  M%=VAL(LEFT$(ODA$,2)): IF M%<MS% GOTO 3270
3260  IF M%>=MS% GOTO 3290
3270  NEXT
3280 ONA%=0: GOTO 3290
3285 RESUME 3290
3290 ON ERROR GOTO 0: OPEN "HISTORY.THG" AS #3 LEN=69
3300 FIELD #3, 8 AS DA$, 55 AS DES$, 6 AS FUN$
3310 LSET DA$=MKI$(N%): LSET DES$=DATE$: LSET FUN$=MKI$(1)
3320 PUT #3,1
3330 IF I>ONA% GOTO 3410
3340  FOR J%=I TO ONA%
3350  N%=N%+1
3360  GET #1,J%
3370  LSET DA$=ODA$: LSET DES$=ODES$: LSET FUN$=OFUN$
3380  PUT #3,N%
3390  NEXT
3400  ONA%=0: GOTO 3310
3410 OPEN "HISTARK.THG" FOR OUTPUT AS #2
3415 CLOSE
3420 PRINT "  New 'HISTORY.THG' and 'HISTARK.THG' created."
3430 GOTO 4000
3440  IF ERR<>58 GOTO 3490
3450 PRINT CHR$(7) " ***There is already an existing HISTOLD.THG."
3460 PRINT "    Ok to copy current HISTORY.THG data onto this file? ";
3470 A$=INPUT$(1): PRINT A$
3475 IF A$<>"y" AND A$<>"Y" THEN PRINT " ***New HISTORY.THG Aborted": GOTO 4000
3480 KILL"HISTOLD.THG": GOTO 3060
3490 ERROR ERR
4000 PRINT CHR$(13) "   End of program.  Hit any key ";
4010 A$=INPUT$(1)
4020 COLOR 7,0,0: CLS
4030 SYSTEM
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1114

     Volume in drive A has no label
     Directory of A:\

    BRUN30   EXE     70680   4-07-87  10:48a
    CURDAT   THG       249   7-06-87   9:59p
    FILE1114 TXT      1473   7-07-88  10:50a
    FUTDAT   THG        75   7-06-87   9:59p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       771  11-15-88   4:49p
    HISTARK  THG         1   7-06-87   9:59p
    HISTORY  THG        69   7-06-87   9:59p
    MANUAL   BAT        22   6-29-88   3:03p
    THI      EXE     33136   7-22-87   8:04p
    THIHIST  EXE     15792   7-15-87   9:51p
    THINGFIL BAS      3426   3-03-87   9:23p
    THINGFIL BAT        23  11-02-85   1:29a
    THINGS   DOC      9495   7-15-87   9:54p
    THISEQ   EXE      6784   7-06-87  10:28p
    USERLIB  EXE      7570   6-26-87   5:53p
           16 file(s)     149604 bytes
                            5632 bytes free
