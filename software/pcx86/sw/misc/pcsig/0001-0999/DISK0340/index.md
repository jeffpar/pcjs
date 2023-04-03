---
layout: page
title: "PC-SIG Library Disk #340"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0340/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0340"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "INFOBASE"

    Infobase is a forms-driven database management system with mailmerge
    capabilities and is similar in function and capability to Info-Star
    and Versa Form.  Infobase is forms driven; that is you create forms
    that match preprinted forms (e.g., IRS forms).  These forms can then
    be used to create databases or access databases created by other
    forms.
    
    Features:
    
    ~ Comprehensive help messages and instructions on the screen.
    ~ Searching on any field.
    ~ Multiple FORMS per DATABASE.
    ~ Multiple-page FORMS.
    ~ Two DATABASES open concurrently.
    ~ DATA verification.
    ~ DATA entry power to support high volume operators.
    ~ Multiple record formats per DATABASE.
    ~ Mailmerging including full text readjustment.
    ~ Select subsets of records for special processing.
    ~ Sort RECORDS into any order.
    
    System Requirements: Two disk drives
    
    How to Start:  For documentation, enter TYPE INFOBASE.DOC
    
    File Descriptions:
    
    ATTACH        Documentation and startup information
    CLIENT   DBS  Demo database
    CLIENT        Text version of a demo form
    FLETTER       Text version of a demo form
    FINAL    FOR  Last form in demonstration
    CLIENTD  FOR  Report form
    CLIENT   FOR  Report form
    NARS          A sample form
    REPORT   BAS  Program to print reports from forms
    NELSON        Introduction letter for Infostar
    LABELD   FOR  Demo for mailing labels
    ITEXT         How to get started with Infobase
    LABEL    FOR  Demo for mailing labels
    LABEL         Text version of a demo form
    INVOICED FOR  Alternate demo invoice form
    INVOICED DBS  Alternate demonstration database
    INVOICE  FOR  Demo invoice form
    INVOICE  DBS  Demonstration database
    FLETTER  FOR  Demo form for form letter
    FORMGEN  EXE  Generates forms from text files
    FLETTERD FOR  Demo form for form letter
    INSTALL  BAS  BASIC program for color monitor information
    INFOBASE DOC  Complete documentation
    IBASE    EXE  Starts Infobase
    FTEXT         Help screens for form generation
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## INSTALL.BAS

```bas
1000 '  INFO-BASE  INSTALL PROGRAM        May 20 1984
1010 '             COPYRIGHT COMPUTER REALTY SYSTEMS  1984
1020 '                       ALL RIGHTS RESERVED
1030 '  COMMENT INSTALL PROGRAM FOR IBASE
1040 '  MUST SPECIFY THE FORGROUND AND BACKGROUND COLOR
1050 '
1060  CLS
1070  A1$ = "The INSTALL program allows the default foreground and background "
1080  A2$ = "colors to be changed.  It is done by specifying the color numbers"
1090  A3$ = "similar to using the BASIC color statement.  The  initial default"
1100  A4$ = "values are: 7 foreground  0 background.  Possible colors are:    "
1110  A5$ = "                                                                 "
1120  A6$ = "    0 Black       1 Blue            2 Green         3 Cyan       "
1130  A7$ = "    4 Red         5 Magenta         6 Brown         7 White      "
1140  A8$ = "    8 Gray        9 Light Blue     10 Light Green  11 Light Cyan "
1150  A9$ = "   12 Light Red  13 Light Magenta  14 Yellow       15 H. White   "
1160 '
1170  PRINT TAB(10);A1$
1180  PRINT TAB(10);A2$
1190  PRINT TAB(10);A3$
1200  PRINT TAB(10);A4$
1210  PRINT TAB(10);A5$
1220  PRINT TAB(10);A6$
1230  PRINT TAB(10);A7$
1240  PRINT TAB(10);A8$
1250  PRINT TAB(10);A9$
1260 '
1270  IROW%  = 13 : LOCATE 13,10
1280  ISIZE% = 15
1290  PRINT "Please enter foreground color number."
1300  GOSUB 1640 : IFOR% = IN%
1310 '
1320 '
1330  ISIZE% = 7
1340  LOCATE 23,10 : PRINT SPACE$(70);
1350  LOCATE 16,10 : IROW% = 16
1360  PRINT "Please enter background color number."
1370  GOSUB 1640 : IBACK% = IN%
1380 '
1390 '
1400  B$ = CHR$(IFOR%+20) + CHR$(IBACK%+20) + CHR$(IBACK%+20) + CHR$(IFOR%+20) +           CHR$(IBACK%+36)
1410  INOR%  = 16 * IBACK%  + IFOR%
1420  IF IFOR% >  7 THEN IBACK% =  IBACK% +   8 : IFOR% = IFOR% - 7
1430  IINV%  = 16 * IFOR% + IBACK%
1440  IBLNK% = IINV% + 128
1450 '
1460  B$ = B$ + CHR$(INOR%+20) + CHR$(IINV%+20) + CHR$(IBLNK%)
1470 '
1480 '
1490  OPEN "R",#1,"ITEXT",8
1500  FIELD #1, 8 AS A$
1510 '
1530  LSET A$ = B$
1540  PUT #1,1
1560  CLOSE #1
1570 '
1580 '
1581  OPEN "R",#1,"FTEXT",8
1582  FIELD #1, 8 AS A$
1583 '
1584  LSET A$ = B$
1585  PUT #1,1
1586  CLOSE #1
1587 '
1588 '
1590  PRINT : PRINT : PRINT : PRINT "         INSTALL FINISHED "
1595  END
1600 '
1610 '
1620 '************* enter NUMBER ****************
1630 '
1640  Z% = 1
1650  S2$ = "  "
1660  LOCATE IROW%,50 + Z%,1
1670  Z$ = INKEY$ : IF Z$ = ""  THEN 1670
1680  LOCATE ,,0
1690  IF   Z$ <> CHR$(13) THEN 1780
1700       IN% = VAL(S2$)
1710       IF   IN% <= ISIZE% THEN RETURN
1720            BEEP
1730            LOCATE 23,10
1740            PRINT "Number too large   must be less then or equal to ";ISIZE%
1750            GOTO 1660
1760       RETURN
1770 '
1780  IF   LEN(Z$) = 2 AND RIGHT$(Z$,1) = "K" THEN 1800
1790  IF   Z$ <> CHR$(8) THEN 1850
1800       PRINT " ";
1810       MID$(S2$,Z%,1) = " "
1820       IF Z% > 1 THEN Z% = Z% - 1
1830       GOTO 1660
1840 '
1850  IF INSTR("0123456789",Z$) = 0 THEN BEEP : GOTO 1660
1860  PRINT Z$;
1870  MID$(S2$,Z%,1) = Z$  : IF Z% < 2 THEN Z% = 2
1880  GOTO 1660
1890 '
1900 '***********  mesg
1910  LOCATE 24,30,0 : COLOR 16,7 : PRINT "PRESS ANY KEY TO CONTINUE";
1920  Z$ = INKEY$ : IF Z$ = "" THEN 1920 :ELSE COLOR 0,1 : RETURN
```

## REPORT.BAS

```bas
1000 ' REPORT PGM    FOR INFO-BASE                MAY 20 1984
1010 '    COPYRIGHT COMPUTER REALTY SYSTEMS   1984  ALL RIGHTS RESERVED
1020 '                    last update 20 MAY  1984
1030 '
1040 '
1050 ' SOURCE CODE TO DIRECTLY ACCESS INFOBASE - USE BASICA AS A REPORT
1060 ' GENERATOR.   ALL FIELDS COME BACK IN FFIELD$, ADDITIONALLY INTEGER
1070 ' AND DOUBLE PRECISION VALUES COME BACK IN FFILD% AND FFILD# RESPECTIVELY.
1080 '
1090  CLEAR,64500. : KEY OFF
1100  OPTION BASE 1
1110  DIM FFIELD$(200),FFIELD%(200),FFIELD#(200)
1120  DIM DB.DESC%(200),DB.TYPE%(200)
1130 '
1140 '
1150 '
1160 '
1170 '************************************************************************
1180 '*************************  START OF PROGRAM ****************************
1190 '************************************************************************
1200 '
1210   DBFILE$ = "CLIENT.DBS"  : GOSUB 1440 ' OPEN DATABASE
1220 '
1230   CLS
1240   PRINT SPACE$(21)," CLIENT LIST - TOTAL PURCHASES "
1250   PRINT : PRINT : PRINT
1251 '
1252   PRINT "    NAME";SPACE$(15);"AMOUNT PURCHASED";SPACE$(10);"LAST CONTACT"
1253   PRINT STRING$(80,"_");
1254   PRINT
1260 '
1270   WHILE NEXT.REC% <> -1
1280         GOSUB 2000 ' GET NEXT RECORD
1290         PRINT FFIELD$(2);FFIELD$(1);SPACE$(5);FFIELD#(10),SPACE$(10);
1291         PRINT FFIELD$(21)
1300 '
1310         TOTAL# = TOTAL# + FFIELD#(10)
1320 '
1330   WEND
1340 '
1341   PRINT STRING$(80,"_");
1342   PRINT
1343   PRINT SPACE$(11);"TOTAL PURCHASES    ";TOTAL#
1349   END
1350 '
1360 '
1370 '
1380 '
1390 '
1400 '************************************************************************
1410 '*                          OPEN DATABASE                               *
1420 '************************************************************************
1430 '
1440  OPEN "R",1,DBFILE$,128
1450  FIELD    1,128 AS DB.RECORD$
1460 '
1470  GET 1,1
1480 '
1490  IF   LEFT$(DB.RECORD$,5) ="IBASE"  THEN 1540
1500       PRINT "INVALID DATABASE FILE"
1510       END
1520 '
1530 '
1540  NUM.FIELDS%     = CVI(MID$(DB.RECORD$,6,2))
1550  REC.LEN%        = CVI(MID$(DB.RECORD$,8,2))
1560  NEXT.REC%       = CVI(MID$(DB.RECORD$,14,2))
1570  HEAD.LEN%       = CVI(MID$(DB.RECORD$,18,2))
1580  TRKS.REC%       = INT(REC.LEN% / 128) + 1
1590 '
1600 '
1610 '
1620  GET 1,2
1630  IST% = 1 : IREC% = 3
1640  FOR  I% = 1 TO NUM.FIELDS%
1650       DB.DESC%(I%) = CVI(MID$(DB.RECORD$,IST%,2))
1660       IST% = IST% + 2
1670       IF   IST% < 128 THEN 1710
1680            GET 1,IREC%
1690            IREC% = IREC% + 1
1700            IST%  = 1
1710  NEXT I%
1720 '
1730 '
1740  IREC% = IREC% + 1
1750  GET 1,IREC%
1760  IST% = 1
1770  FOR  I% = 1 TO NUM.FIELDS%
1780       DB.TYPE%(I%) = CVI(MID$(DB.RECORD$,IST%,2))
1790       IST% = IST% + 2
1800       IF   IST% < 128 THEN 1840
1810            GET 1,IREC%
1820            IREC% = IREC% + 1
1830            IST%  = 1
1840  NEXT I%
1850 '
1860 '
1870 '
1880  FOR  I% = 1 TO NUM.FIELDS%
1890       FFIELD$(I%) = SPACE$(DB.DESC%(I%))
1900  NEXT
1910 '
1920  RETURN
1930 '
1940 '
1950 '
1960 '************************************************************************
1970 '*                              GET  RECORD                             *
1980 '************************************************************************
1990 '
2000  CUR.FPOS% = HEAD.LEN% + (NEXT.REC% -1) * TRKS.REC%
2010  GET 1,CUR.FPOS%
2020 '
2030  NEXT.REC% = CVI(MID$(DB.RECORD$,3,2))
2040 '
2050 '
2060  J%  = 5
2070  FOR I% = 1 TO NUM.FIELDS%
2080      NLEN% = DB.DESC%(I%)
2090      IF   NLEN% + J% > 129   THEN 2150
2100           MID$(FFIELD$(I%),1,NLEN%) = MID$(DB.RECORD$,J%,NLEN%)
2110           J% = J% + NLEN%
2120           GOTO 2210
2130 '
2140 '
2150      MID$(FFIELD$(I%),1,129 -J%) = RIGHT$(DB.RECORD$,129-J%)
2160      Z% = 130 - J% : J% = NLEN% - 129 + J%
2170      GET 1,LOC(1) + 1
2180      MID$(FFIELD$(I%),Z%,J%) = MID$(DB.RECORD$,1,J%)
2190      J% = J% + 1
2200 '
2210      IF   DB.TYPE%(I%) = 0                                                           THEN FFIELD%(I%) = VAL(FFIELD$(I%))
2220 '
2230      IF   DB.TYPE%(I%) > 0 AND DB.TYPE% < 10                                         THEN FFIELD#(I%) = VAL(FFIELD$(I%))
2240  NEXT
2250 '
2260 '
2270  RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0340

     Volume in drive A has no label
     Directory of A:\

    ATTACH           14059   7-02-84   9:10p
    CLIENT            2304   5-12-84   6:04p
    CLIENT   DBS      4480   6-01-84   7:58a
    CLIENT   FOR      3200   5-12-84   6:45p
    CLIENTD  FOR     11904   5-20-84  12:09p
    FILES340 TXT      1536   5-23-85   2:06p
    FINAL    FOR      1920   5-20-84   6:14p
    FLETTER           4480   5-18-84   8:37p
    FLETTER  FOR      4864   5-18-84   8:39p
    FLETTERD FOR      7808   5-20-84  12:37p
    FORMGEN  EXE     51840   5-21-84   8:16p
    FTEXT             9701   5-28-84   1:29p
    IBASE    EXE     54016   5-29-84  10:12p
    INFOBASE DOC     59547   6-13-84   9:57p
    INSTALL  BAS      2869   5-28-84   1:07p
    INVOICE  DBS      2048   5-20-84   9:29p
    INVOICE  FOR      4608   5-20-84  12:29p
    INVOICED DBS       640   6-05-84   9:13a
    INVOICED FOR      4864   5-20-84   1:42p
    ITEXT             8912   5-28-84   1:29p
    LABEL              364   5-13-84   7:24p
    LABEL    FOR      1152   5-20-84   6:00p
    LABELD   FOR      1920   5-18-84   8:40p
    NARS              1664   6-09-84   2:25p
    NELSON            2151   7-02-84   9:11p
    REPORT   BAS      3933   5-21-84   8:19p
           26 file(s)     266784 bytes
                           44032 bytes free
