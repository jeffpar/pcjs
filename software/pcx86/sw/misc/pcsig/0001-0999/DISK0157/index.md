---
layout: page
title: "PC-SIG Library Disk #157"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0157/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0157"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "IBM USERS GROUP #2"

    File Descriptions:
    
    ???????  NL   Data files (24 files).
    AUTOEXEC BAT  Batch file to automatically start the program.
    CRL      BAS  Basic program to change cursor size.
    CRL      COM  Program to change cursor size.
    CRS      COM  Program to change cursor size.
    ???????  PIC  Picture data files (9 files).
    MASTHEAD      Information file.
    NEWS     EXE  Main program.
    PCUGNEWS TOC  Information file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRL.BAS

```bas
10 'CRL.BAS by John R. Herzfeld, P. O. Box 159, Mercer Island, WA 98040
20 '
30 'BASIC program to create CRL.COM to change cursor shape in DOS. (If in
40 '  BASIC, use the LOCATE instruction.)  If you type CRL<enter> or CRL.COM
50 '  <enter>, you get its default shape, a cursor twice as thick as
60 '  the normal shape (start=10, end=13). If you want a different
70 '  shape, type CRL or CRL.COM, then a / or a space, then the decimal start
80 '  value, then any noncontrol alpha character (space ok) as separator,
90 '  then the decimal end value, followed by <enter>. If you omit the end
100 ' value, you'll get the default end value (13). The values to be used
110 ' are the same as for the LOCATE command in BASIC. For example, if you
120 ' have the monochrome display and type CRL 12 1<enter>, you will get a
130 ' two-line cursor at the bottom and another two-line cursor at the top.
140 ' The programmed default values are for the monochrome display; different
150 ' ones are needed with the color adapter. To
160 ' change the default values in the program, change the bytes in line 1020
170 ' AND in line 1040. On each line, the FIRST value is the END value, and
180 ' the SECOND value is the START value. The reversed positions are due
190 ' to the way the IBM PC stores data in memory. If you change a
200 ' default value, you must also recompute the checksum (the total of all
210 ' 102 byte values) and change it in line 1150.
220 'After you have created the CRL.COM file, you need this BASIC program
230 ' only as reference or to create additional files with other default
240 ' values. The program is very tolerant and ignores excess separator
250 ' characters or an excess number of value entries. CRL 12 1 and
260 ' CRL 12TTTgg00001x9y produce the same result.
270 '
300 DEFINT A-Z: FILENAME$= "CRL.COM"  'You may use another name!
320 PRINT "On which drive do you want the COM file? [RETURN = default drive]"
340 Q$=INPUT$(1): IF Q$=CHR$(13) THEN DRIVE$="" ELSE DRIVE$= Q$+":"
360 FILESPEC$= DRIVE$+ FILENAME$: CHECKSUM= 0
380 FOR I= 1 TO 102: READ N: CHECKSUM= CHECKSUM+ N: NEXT
400 READ N: IF N<>CHECKSUM THEN PRINT "ERROR - VERIFY DATA": STOP
420 'Last item in list is the sum of the 102 bytes to be put into the file
440 RESTORE: OPEN "R", 1, FILESPEC$, 1
460 FIELD 1, 1 AS N$: FOR I= 1 TO 102: READ N: LSET N$ = CHR$(N): PUT 1
480 NEXT: CLOSE: PRINT FILESPEC$ + " CREATED": END
1000 DATA &H31,&HC9,&H8A,&H0E,&H80,&H00,&H80,&HF1
1010 DATA &H00,&H75,&H0C,&HB8,&H00,&H01,&HB9
1020 DATA &H0D,&H0A
1030 DATA &HCD,&H10,&HCD,&H20
1040 DATA &H0D,&H0A
1050 DATA &HBF,&H16,&H01,&HBE,&H80,&H00,&HBA,&H0A,&H0A
1060 DATA &H31,&HC0,&H31,&HDB,&H46,&H8A,&H1C,&H80
1070 DATA &HEB,&H30,&H78,&H23,&H80,&HFB,&H0A,&H7D
1080 DATA &H1E,&HF6,&HE2,&H00,&HD8,&H88,&HDE,&HE2
1090 DATA &HE9,&H38,&HD6,&H74,&H03,&HE8,&H18,&H00
1100 DATA &H8A,&H2E,&H16,&H01,&H8A,&H0E,&H15,&H01
1110 DATA &HB8,&H00,&H01,&HCD,&H10,&HCD,&H20,&H38
1120 DATA &HD6,&H74,&HE4,&HE8,&H02,&H00,&HEB,&HDF
1130 DATA &H88,&H05,&H4F,&H81,&HFF,&H14,&H01,&H74
1140 DATA &HDF,&H31,&HC0,&H88,&HD6,&HC3
1150 DATA &H29E5
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0157

     Volume in drive A has no label
     Directory of A:\

    ADDRESS  NL       9216   4-27-84   3:14p
    AUTOEXEC BAT       128   4-27-84   3:06p
    BASRUN   NL       2048   4-27-84   3:15p
    COBRUN   NL       2048   4-27-84   3:15p
    COMM     NL       2048   4-27-84   3:14p
    CORTESI  NL       3072   4-27-84   3:12p
    CRC      TXT      2439  11-14-84  11:30a
    CRCK4    COM      1536  10-21-82   7:54p
    CRL      BAS      3200   4-27-84   3:11p
    CRL      COM       128   4-27-84   3:07p
    CRS      COM       128   4-27-84   3:07p
    CURUGS   PIC      2944   4-27-84   3:16p
    EDITOR   PIC      3200   4-27-84   3:18p
    EDTORIAL NL       2048   4-27-84   3:16p
    FONS     PIC      2688   4-27-84   3:17p
    FORTRAN  NL       4096   4-27-84   3:16p
    FUPGRADE NL       2048   4-27-84   3:11p
    HERZFELD NL       4096   4-27-84   3:12p
    JEWELL   NL       3072   4-27-84   3:13p
    JORDAN   NL       8192   4-27-84   3:12p
    MASTHEAD          1536   4-27-84   3:07p
    METZGER  NL       6144   4-27-84   3:13p
    NEWS     EXE     74880   4-27-84   3:18p
    NEWSLOGO PIC     16512   4-27-84   3:16p
    NIEHOFF  NL       8192   4-27-84   3:12p
    NPANN    PIC      4352   4-27-84   3:17p
    PASCAL   NL       3072   4-27-84   3:16p
    PCUGNEWS TOC      1664   4-27-84   3:18p
    PLANNER  NL       3072   4-27-84   3:15p
    PUPGRADE NL       2048   4-27-84   3:12p
    ROHDE    NL       5120   4-27-84   3:14p
    SCHNELL  NL       7168   4-27-84   3:14p
    SCHNELL1 NL       6144   4-27-84   3:13p
    SORT     NL       2048   4-27-84   3:15p
    SORTREDI NL       2048   4-27-84   3:15p
    TANDT    PIC      2048   4-27-84   3:17p
    UGASK    PIC      2432   4-27-84   3:17p
    UGOS     PIC      2816   4-27-84   3:17p
    VANDR    PIC      3328   4-27-84   3:17p
    WATKINS  NL       3072   4-27-84   3:13p
    WEBER    NL       4096   4-27-84   3:13p
    YOUNG    NL       3072   4-27-84   3:14p
           42 file(s)     223239 bytes
                           88064 bytes free
