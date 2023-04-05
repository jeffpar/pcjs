---
layout: page
title: "PC-SIG Library Disk #624"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0624/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0624"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## SAMPLE.BAS

```bas
10 ' *********************************************************************
20 ' *   PC-File Sample program.                                         *
30 ' *   (C)Copyright 1984 by Jim Button                                 *
40 ' *********************************************************************
50 ' *
60 ' *  This program reads a sample database, in sequence by the most
70 ' *  recent sort (in sequence by the Index). For each record read, a
80 ' *  line is printed on the printer.
90 ' *  The name of the hypothetical database is "SAMPLE".
100 '*
110 '* The sample database was defined as follows:
120 '*    NAM          20
130 '*    ADDRESS      25
140 '*    CITY         12
150 '*    STATE         2
160 '*    ZIP           5
170 '*                ---
180 '*                 64  (total length of data fields)
190 '*
200 '* The length of an index record in this database is:
210 '*    2 * (number of fields) + 2,  or
220 '*    2 * 5 + 2 = 12
230 '*
240 '* The length of a data record in this database is:
250 '*    Length of data fields + 1,  or
260 '*    64 + 1 = 65
270 '
280 '* NOTE: if record length is longer than 128, then you must start BASIC
290 '*       with the /S:512 option. See page 2-4 in your BASIC manual.
300 '
310 END ' This is here because some people INSIST on trying to RUN this!
320 '     You'll want to put it elsewhere in a production program.
330 '....................................................................
340 '    DATA INITIALIZATION
350 '
360 INX.LEN = 12
370 DTA.LEN = 65
380 '....................................................................
390 '     OPEN FILES FOR PROCESSING
400 '
410 OPEN "SAMPLE.INX" AS #1 LEN=INX.LEN
420 FIELD #1,2 AS XNM$,2 AS XAD$,2 AS XCI$,2 AS XST$,2 AS XZI$,2 AS POINT.INX$
430 '  Each of the above 2-byte fields contains the first 2 bytes of the
440 '    the corresponding field in the data file.
450 '  The last 2 bytes of the index rcd are a binary pointer
460 '    to the relative record number in the data file.
470 '
480 OPEN "SAMPLE.DTA" AS #2 LEN=DTA.LEN
490 FIELD #2, 20 AS NAM$, 25 AS ADDRESS$, 12 AS CITY$, 2 AS STATE$, 5 AS ZIP$
500 '...................................................................
510 '     FOR EACH INDEX RECORD, RETRIEVE THE CORRESPONDING DATA RECORD
520 '
530 GET #1                            '  Get nxt sequential INX rcd
540 IF LEFT$(XNM$,1) = "/" THEN 530 '  Deleted record. Bypass it
550 IF LEFT$(XNM$,1) = "\" THEN 600 '  End of file.
560 POINTER = CVI(POINT.INX$)         '  Get pointer into DTA file
570 GET #2,POINTER                    '  Random retrieve DTA record
580 LPRINT NAM$;" ";ADDRESS$;" ";CITY$;" ";STATE$;" ";ZIP$
590 GOTO 530
600 '...................................................................
610 '      PROCESSING IS COMPLETED. SHUTDOWN.
620 '
630 CLOSE
640 END

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0624

     Volume in drive A is DISK0624
     Directory of A:\

    CRC      TXT      1285   1-01-80   1:28a
    CRCK4    COM      1536  10-21-82   5:50p
    DOC      BAT       249  11-02-84   3:00a
    FILES624 TXT      1536   1-01-80   7:03a
    GO       BAT       381   6-11-90   8:48a
    PC-DEF   EXE     12288  11-02-84   3:01a
    PC-EXPOR EXE     16512  11-02-84   3:00a
    PC-FILE  DOC    108505  11-02-84   3:00a
    PC-FILE  EXE     33408  11-02-84   3:00a
    PC-FILE  PRO       128  11-02-84   3:00a
    PC-FIX   EXE     14080  11-02-84   3:01a
    PC-IMPOR EXE     15104  11-02-84   3:00a
    PC-LABEL EXE      8960  11-02-84   3:00a
    PC-OVL   EXE     21376  11-02-84   3:00a
    PC-PRINT EXE     28672  11-02-84   3:01a
    PC-SETUP EXE     10368  11-02-84   3:01a
    PC-SORT  EXE     18432  11-02-84   3:00a
    PC-UTIL  EXE     18816  11-02-84   3:00a
    SAMPLE   BAS      2873  11-02-84   3:00a
           19 file(s)     314509 bytes
                               0 bytes free
