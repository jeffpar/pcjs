---
layout: page
title: "PC-SIG Library Disk #570"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0570/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0570"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAMERS UTILITIES #11"

    This disk has a useful assortment of PASCAL utilities along with
    the source code for functions such as removing tabs from a file,
    dumping either a HEX or ASCII file and formatting the FX-80.  For
    most programs there are two versions, specific to either DOS 1.X
    and DOS 2.X.
    
    System Requirements:  128K, two disk drives
    
    How to Start:  To run the programs with the .EXE and .BAT extension,
    type in the filename and then press <ENTER>.  To run the programs with
    .PAS extension, refer to your Pascal manual.
    
    Suggested Registration:  $20.00
    
    File Descriptions:
    
    DOSCALL  ASM  Pascal callable procedure to access DOS
    COMMAND  OBJ  Pascal procedure to interpret command line arguments
    DOSCALL  OBJ  Pascal callable procedure to access DOS
    DOSIF    OBJ  Pascal unit to provide access to DOS functions
    FF       ASM  Output a form-feed to printer
    BDUMP    EXE  Dump a file treating it as 8 bit bytes
    DETAB    EXE  Remove tabs from a file. DOS 2.X
    IDUMP    EXE  Dump a file treating it as 16 bit integers. DOS 2.X
    README        Pascal Utilities information file.
    DETAB1   EXE  Remove tabs from a file. DOS 1.X
    IDUMP1   EXE  Dump a file treating it as 16 bit integers. DOS 1.X
    DUMP     EXE  Dump a file in Hex and ASCII. DOS 2.X
    PR       EXE  Print Formatter for FX-80
    FF       EXE  Output a form-feed to printer
    PATH2    0    Used to link for 2.0 pathnames
    DOSIF    INC  Pascal unit to provide access to DOS functions
    GOB      BAT           "
    GOI      BAT           "
    GOPR     BAT           "
    GODE     BAT  Various batch files
    COMMAND  PAS  Pascal procedure to interpret command line arguments
    DUMP     PAS                       "
    BDUMP    PAS                       "
    IDUMP    PAS                       "
    PR       PAS                       "
    GOD      BAT           "
    DETAB    PAS                       "
    DOSIF    PAS  Pascal Source code for utilities
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0570

     Volume in drive A has no label
     Directory of A:\

    BDUMP    EXE     23903  12-26-83   1:49p
    BDUMP    PAS      1825  12-26-83   1:46p
    COMMAND  OBJ      1032  12-23-83   5:06p
    COMMAND  PAS      3001  12-23-83   5:05p
    DETAB    EXE     24687  12-26-83   2:14p
    DETAB    PAS      9779  12-24-83   1:16p
    DETAB1   EXE     25498  12-26-83   2:15p
    DOSCALL  ASM      1910   8-10-83   7:25p
    DOSCALL  OBJ       182   8-10-83   7:25p
    DOSIF    INC      3155   8-08-83   9:05p
    DOSIF    OBJ      3804   8-08-83   9:08p
    DOSIF    PAS      4583   8-08-83   8:58p
    DUMP     EXE     24047  12-26-83  11:45p
    DUMP     PAS      3163  12-26-83  11:43p
    FF       ASM       775   8-10-83   7:35p
    FF       EXE      1152   8-10-83   7:30p
    FILES570 TXT      2069   6-20-86   1:35p
    GO       BAT       589   6-20-86   1:34p
    GOB      BAT       144  12-26-83   2:12p
    GOD      BAT       138  12-26-83  10:08p
    GODE     BAT       132  12-26-83   2:12p
    GOI      BAT       144  12-26-83   2:12p
    GOPR     BAT       108  12-23-83   5:08p
    IDUMP    EXE     23391  12-26-83   1:54p
    IDUMP    PAS      1785  12-26-83   1:44p
    IDUMP1   EXE     24202  12-26-83   1:54p
    NOTES570 TXT      1298   6-12-86   6:05p
    PATH2    0          21  12-21-83   8:57p
    PR       EXE     36181  12-23-83   5:46p
    PR       PAS     28605   1-03-84   6:59p
    README           30711   1-12-83   5:18p
           31 file(s)     282014 bytes
                           22528 bytes free
