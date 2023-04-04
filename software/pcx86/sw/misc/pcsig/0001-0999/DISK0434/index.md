---
layout: page
title: "PC-SIG Library Disk #434"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0434/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0434"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "KERMIT ASM MODULES 2 OF 2 (ALSO 433)"

    KERMIT is a communications system that allows different types of
    computers to exchange information.  The files on this disk are used by
    smaller computers so that they may communicate with an IBM
    minicomputer or mainframe computer.
    
    System Requirements:  128K, one disk drive, and monochrome display
    
    How to Start:  To view the documentation for Disks No. 433 and 434,
    place Disk No. 433 in your disk drive and enter TYPE MSXSYS.DOC.  To
    run any program file, type its name and press <ENTER>.
    
    File Descriptions:
    The First Disk Contains:
    MSHP150  EXE  Hewlett-Packard 150
    MSGENER  EXE  Generic MS-DOS KERMIT.
    MSMKBOO  C    Four-for-Three encoder, DEC-20 specific.
    MSBOOT   FOR  Used on mainframe when downloading KERMIT.
    MSRBBOO  BAS  Used on Rainbow to download KERMIT from mainframe.
    MSRBBOO  HLP  Info on MSRBBOO.BAS.
    MSPCBOOT BAS  Used on PC to download KERMIT from mainframe.
    MSPCTRAN EXE  Compiled version of MSPCTRAN.BAS.
    MSPCTRAN BAS  Converts MSKERMIT.BOO to an executable file.
    MSRBEMAC INI  EMACS function key setup for Kermit-MS/Rainbow.
    MSXSYS   DOC  Description of system dependent modules.
    MSXRB    ASM  DEC Rainbow 100, 100+ module.
    MSXHP150 ASM  Hewlett-Packard 150 module.
    MSXGEN   ASM  Generic MS-DOS KERMIT module.
    MSRB100  EXE  DEC Rainbow 100, 100+
    
    The Second Disk Contains:
    MSAPC    HLP  Documentation for NEC APC Kermit
    MSAPC    EXE  NEC APC
    MSXTIPRO BWR  Documentation for TI Professional Kermit
    MSXAPC   ASM  NEC APC module
    MSXTEK   ASM  TI Pro Tektronix emulation module
    MSXTIPRO ASM  TI Pro module
    MSTIPRO  EXE  TI Professional
    MSYZ100  ASM  Zenith Z-100 Y-module
    MSXTIPRO BAT  TI Pro assembly/link script
    MSWANG   EXE  Wang PC
    MSXZ100  ASM  Zenith Z-100 X-module
    MSZ100   EXE  Zenith Z-100
    MSZ100   HLP  Documentation for Heath/Zenith Z-100 Kermit
    MSXWNG   ASM  Wang PC module
    MSWANG   EXE  Wang APC
    MSAPC    EXE  NEC APC
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0434

     Volume in drive A has no label
     Directory of A:\

    FILES434 TXT      1080  11-05-85   3:08p
    MSAPC    EXE     45544  12-18-84   4:05p
    MSAPC    HLP      2513  12-08-84   1:35a
    MSTIPRO  EXE     37888  12-08-84   1:45p
    MSWANG   EXE     38784  12-08-84   1:47p
    MSXAPC   ASM     46204  12-18-84   3:50p
    MSXTEK   ASM      7104  12-08-84   4:03a
    MSXTIPRO ASM     63304  12-08-84   4:13a
    MSXTIPRO BAT       272  12-08-84   4:13a
    MSXTIPRO BWR      3196  12-08-84   4:14a
    MSXWNG   ASM     13616  12-08-84   4:17a
    MSXZ100  ASM     15145  12-18-84   3:53p
    MSYZ100  ASM     15933  12-08-84   4:30a
    MSZ100   EXE     38376  12-18-84   4:10p
    MSZ100   HLP      2558  12-08-84   4:38a
           15 file(s)     331517 bytes
                           23552 bytes free
