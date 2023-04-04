---
layout: page
title: "PC-SIG Library Disk #132"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0132/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0132"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PASCAL TOOLS VOL 3"

    This is the third of the three-disk series Pascal Tools, and includes
    the source code for the routines included on Disks No 130 and
    131 along with batch files to create utilties, all accompanied by
    documentation.  See disk #130 for more information.
    
    How to Start: Enter TYPE README3 and press <ENTER> for program
    information.  To run Pascal routines, refer to your Pascal language
    manual.
    
    File Descriptions:
    
    GLOBCONS INC  Include files (3 files)
    GETFCB   ASM  Pascal callable routine to fill File Control Block (FCB)
    *        AR   Source code for Pascal tools (15 files)
    README3       Notes about using Pascal tools
    *        OBJ  Object files
    *        DCL  Procedure definition files
    CMDFILE  BAT  Batch files used to create utilities (3 files)
    ???      BAT  PASCAL batch file utilities
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0132

     Volume in drive A has no label
     Directory of A:\

    ADDSTR   DCL       115  10-30-82  11:07a
    ADDSTR   OBJ       426   6-12-83   7:58p
    ARCHIVE  AR      11118   9-01-83   2:05p
    CHARCNT  AR        659   9-02-83   8:40a
    CLOSE    DCL        46  10-25-82  10:39a
    CLOSE    OBJ       529   6-12-83   7:48p
    CMDFILE  BAT       122   8-31-83   8:26p
    CRC      TXT      5635  11-13-84  11:33a
    CRCK4    COM      1536  10-21-82   7:54p
    CREATE   DCL        77  10-30-82  10:58a
    CREATE   OBJ       892   6-12-83   7:49p
    CTOI     DCL        72  10-30-82  11:08a
    CTOI     OBJ       582   6-12-83   7:58p
    ECHOARG  AR        769   9-02-83  10:13a
    EQUAL    DCL        65  10-30-82  11:08a
    EQUAL    OBJ       442   6-12-83   7:59p
    ERROR    DCL        49  10-25-82  10:30a
    ERROR    OBJ       496   6-12-83   7:48p
    ESC      DCL        73  10-30-82  11:09a
    ESC      OBJ       499   6-12-83   7:59p
    FCOPY    DCL        52  10-25-82  10:03p
    FCOPY    OBJ       418   6-12-83   8:00p
    FINDP    AR       2055   8-31-83  11:34p
    FLUSH    DCL        44  10-26-82  11:04p
    FLUSH    OBJ       796   6-12-83   7:45p
    FMT      AR      36267   9-02-83  12:15p
    GDATE    DCL        47   6-12-83   7:32p
    GDATE    OBJ       438   6-12-83   9:59p
    GETARG   DCL        89  10-30-82  11:00a
    GETARG   OBJ       682   6-12-83   7:53p
    GETC     DCL        59  10-25-82  10:52a
    GETC     OBJ       672   8-31-83   8:21p
    GETCF    DCL        74  10-25-82  10:55a
    GETCF    OBJ       710   8-31-83   8:20p
    GETFCB   ASM      1533  10-25-82  11:44p
    GETFCB   OBJ       117  10-25-82  11:45p
    GETLINE  DCL        95  10-30-82  10:57a
    GETLINE  OBJ       525   7-17-83  10:57p
    GLOBCONS INC      1999   6-11-83  12:41p
    GLOBTYPS INC       734  11-02-82  11:14p
    GLOBVARS INC       120  10-22-82   4:01p
    GTIME    DCL        47   6-12-83   7:32p
    GTIME    OBJ       438   6-12-83   9:59p
    IMAX     DCL        54  10-25-82  10:05p
    IMAX     OBJ       378   6-12-83   8:00p
    IMIN     DCL        54  10-25-82  10:08p
    IMIN     OBJ       378   6-12-83   8:01p
    INDEX    DCL        71  10-30-82  11:09a
    INDEX    OBJ       440   6-12-83   8:01p
    INITIO   DCL        61  10-25-82  10:58p
    INITIO   OBJ      5142   7-17-83  10:41p
    ISALPHAN DCL        59  10-25-82  10:13p
    ISALPHAN OBJ       453   6-12-83   8:02p
    ISDIGIT  DCL        56  10-25-82  10:14p
    ISDIGIT  OBJ       423   6-12-83   8:02p
    ISLETTER DCL        57  10-25-82  10:15p
    ISLETTER OBJ       486   6-12-83   8:03p
    ISLOWER  DCL        46  10-25-82  10:16p
    ISLOWER  OBJ       431   6-12-83   8:03p
    ISUPPER  DCL        56  10-25-82  10:18p
    ISUPPER  OBJ       427   6-12-83   8:04p
    ITOC     DCL        84  10-30-82  11:10a
    ITOC     OBJ       519   6-12-83   8:05p
    KWIC     AR       1387   9-01-83   1:11p
    LENGTH   DCL        57  10-30-82  11:10a
    LENGTH   OBJ       418   6-12-83   8:05p
    LINECNT  AR        680   9-02-83   4:27p
    LKTOOL   BAT        24   6-11-83   3:59p
    MACRO    AR      20766   9-06-83   7:26p
    MESSAGE  DCL        51  10-25-82  11:17a
    MESSAGE  OBJ       468   6-12-83   7:52p
    MKFLOP1  BAT       646   9-06-83   9:46p
    MKFLOP2  BAT       245   9-06-83   9:53p
    MKFLOP3  BAT      2349   9-06-83   9:38p
    MKOBJ    BAT        22   6-11-83   3:37p
    MKPR     BAT        31   6-11-83   3:56p
    MKPRIMS  BAT       715   6-12-83   7:55p
    MKTOOL   BAT        45   6-11-83   3:38p
    MKUT     BAT        31   6-11-83   3:56p
    MKUTILS  BAT       772   6-12-83   7:57p
    MUSTCREA DCL        84  10-30-82  11:11a
    MUSTCREA OBJ       543   6-12-83   8:06p
    MUSTOPEN DCL        82  10-30-82  11:11a
    MUSTOPEN OBJ       523   6-12-83   8:06p
    NARGS    DCL        38  10-25-82  11:13a
    NARGS    OBJ       387   6-12-83   7:52p
    OPEN     DCL        75  10-30-82  10:58a
    OPEN     OBJ       879   6-12-83   7:51p
    PRIMS    AR      20840   9-06-83   7:48p
    PRINTF   AR       2959   9-06-83   7:57p
    PUTC     DCL        44  10-26-82  11:05p
    PUTC     OBJ       582   6-12-83   7:44p
    PUTCF    DCL        60  10-25-82  11:07a
    PUTCF    OBJ       623   6-12-83   7:44p
    PUTDEC   DCL        47  10-25-82  10:29p
    PUTDEC   OBJ       536   6-12-83   8:07p
    PUTSTR   DCL        62  10-30-82  10:59a
    PUTSTR   OBJ       436   6-12-83   7:43p
    README3            317   9-06-83   9:38p
    REMOVE   DCL        51  10-30-82  10:59a
    REMOVE   OBJ       628   6-12-83   7:51p
    SCOPY    DCL        98  10-30-82  11:12a
    SCOPY    OBJ       431   6-12-83   8:07p
    SORTF    AR      13380   9-01-83   1:19p
    TED      AR      35948   8-31-83  11:16p
    TRANSLIT AR       3498   8-31-83  11:24p
    UNIQUE   AR        795   9-06-83   8:04p
    UNROTATE AR       1290   9-06-83   8:19p
    UTILITY  AR       7001   9-06-83   8:30p
    WORDCNT  AR        829   9-06-83   8:21p
          110 file(s)     203661 bytes
                           43008 bytes free
