---
layout: page
title: "PC-SIG Library Disk #369"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0369/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0369"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLASH CARDS 3 OF 4 (367, 368, 370)"

    A menu-driven 7,500-Word Vocabulary Builder and Spelling Teacher for the
    high school and college-level student.  The flash card format has proved
    to be an effective teaching mechanism for improving spelling and
    vocabulary skills.
    
    The dictionary does not include the 4,000 most basic words but, rather,
    the 7,500 next most commonly-used words.  BASIC source code is included.
    While you're polishing your spelling, learn the parts of speech and the
    definition of each word.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## PRINTMAN.BAS

```bas
5 CLS
10 PRINT "      This program prints the manual on paper "
20 PRINT ""
30 PRINT " MAKE SURE YOU PRINTER IS ON WITH 12 PAGES OF PAPER READY"
40 PRINT ""
45 PRINT "   PUT THE DISK MARKED MANUAL IN THE DEFAULT DISK DRIVE "
50 PRINT "              Press any key to continue "
55 PRINT ""
60 IF INKEY$ = "" THEN 60
70 INPUT " ARE YOU USING IBM BASIC ? (Y/N return) ";  I$
80 IF I$ = "y" OR I$ = "Y" OR I$ = "N" OR I$ = "n" THEN 100 ELSE 70
90 LPRINT " "
100 OPEN "R",#1,"MASTER.TXT",10
110 FIELD #1,10 AS AT$
200 REM
230 FOR T = 1 TO 20000
240 GET #1,T 
242 FOR T2 = 1 TO 10
244 A$ = MID$(AT$,T2,1)
300 C = ASC(A$)
310 IF C = 10 AND ( I$ = "Y" OR I$ = "y") THEN 580
400 IF C <= 127 THEN LPRINT A$;
450 IF C > 127 THEN LPRINT CHR$(C-128);
580 NEXT T2
590 NEXT T
620 LPRINT ""
9000 END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0369

     Volume in drive A has no label
     Directory of A:\

    CARDS           251904   1-31-84  12:17a
    FFILE             2944   1-31-84  12:28a
    FILES369 TXT      2048   5-23-85   4:07p
    FLAG               128   1-31-84  12:19a
    IDEX               384   1-31-84  12:28a
    IPUTD              128   5-19-28   3:50a
    IPUTD1             512   5-19-28   4:01a
    IPUTD10            256   5-19-28  12:34a
    IPUTD11            640   5-19-28   1:01a
    IPUTD12            128   1-31-84  12:28a
    IPUTD13            256   1-01-80
    IPUTD14            512   5-19-28   1:28a
    IPUTD15            128   1-01-80
    IPUTD2             384   1-01-80
    IPUTD3             384   5-19-28  12:22a
    IPUTD4             896   5-19-28   2:57a
    IPUTD5             384   5-19-28  12:27a
    IPUTD6             384   5-19-28   2:13a
    IPUTD7             384   1-01-80
    IPUTD8             256   5-19-28   2:07a
    IPUTD9             384   5-19-28   1:36a
    KEYLISTS           578   1-01-80
    KYLIST             128   3-10-83  12:50a
    MASTER   TXT     25728   1-31-84  12:12a
    PRINTMAN BAS       896   1-31-84  12:40a
    REALTIME           128   1-31-84  12:28a
    SCREEN1            384   1-01-80
    SCREEN14           512   1-01-80
    SCREEN4            256   1-01-80
    SCREEN6            128   1-01-80
    SCREEN8            256   1-01-80
    SCTEST             128   1-31-84  12:28a
    SFLAG              128   1-31-84  12:19a
           33 file(s)     292674 bytes
                            9216 bytes free
