---
layout: page
title: "PC-SIG Diskette Library (Disk #970)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0970/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0970"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MSFORMS 1 OF 2 (ALSO 1453)"

    MSFORMS and its utility program, NAMES, read a QUAN report from a
    Finnigan(tm) mass spectrometer and produce a finished report for given
    classes of target compound analysis (TCA), suitable for presentation to
    a client.
    
    Attach the RS232 communications cable that runs from the GC/MS NOVA
    computer to the Tektronix/Westward system terminal of the NOVA to the
    serial port of your PC. Load a suitable terminal emulator program in
    your PC and capture the Finnigan TCA QUAN reports as individual ASCII
    files.
    
    MSFORMS is then loaded and the QUAN filenames are passed to the
    program, along with other information, including matrix type and
    dilution factors. MSFORMS processes it and prints an analysis form
    suitable for delivery to a client.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0970.TXT

{% raw %}
```
Disk No:  970
Program Title: MSFORMS version 6 (Disk 1 of 2)
PC-SIG version: 2.4

MSFORMS and its accompanying utility program, NAMES, reads a QUAN report
from a FINNIGAN(tm) mass spectrometer and produces a finished report
suitable to give a client for given classes of target compound analysis
(TCA).

The process starts by attaching the RS232 communications cable that runs
from the GC/MS NOVA computer to the Tektronix/Westward system terminal
of the NOVA to the serial port of your PC.  You can then load a suitable
terminal emulator program on your PC and capture as individual ASCII
files the FINNIGAN TCA QUAN reports onto your PC's disk.

MSFORMS is then loaded and the QUAN filenames passed to the program,
along with other information, including matrix type and dilution
factors.  MSFORMS reads in the QUAN report, processes it, and prints an
analysis form suitable for giving a client.  In addition, MSFORMS
generates an MS/MSD report.

MSFORMS is know a two disk set, #970 and #1453.  Both disks are needed
to run the program.

Usage:  Report Generator for Finnigan Mass Spectrometers.

Special Requirements:  512K memory, two disk drives, and a printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $50.00

File Descriptions:

EPSON    PRN  Printer data file.
HPLJET   PRN  Printer data file.
MATRIX   BN   Data file.
MATRIX   VO   Data file.
MATRIX   PC   Data file.
MSFORMS  EXE  Main Program.
MSFORMS  CFG  Configuration file.
NAMES    BNS  Sample Data.
NAMES    BNW  Sample Data.
NAMES    PCW  Sample Data.
NAMES    VOS  Sample Data.
NAMES    VOW  Sample Data.
NAMES    ACW  Sample Data.
PRINTER  CFG  Printer configuration file.
QUAN1    VO   Data file.
QUAN2    VO   Data file.
QUAN3    VO   Data file.
QUAN4    BN   Data file.
QUAN5    BN   Data file.
QUAN6    BN   Data file.
QUAN7    VO   Data file.
QUAN8    BN   Data file.
REPORTS  FRM  Data file.
SURROGAT BN   Data file.
SURROGAT PC   Data file.
SURROGAT VO   Data file.
SURROGAT AC   Data file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 970 MSFORMS  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, insert disk #1453 and type:                 ║
║                                                                         ║
║                  MANUAL (press enter)                                   ║
║                                                                         ║
║ To run the program, Type: MSFORMS (press enter)                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0970

     Volume in drive A has no label
     Directory of A:\

    EPSON    PRN       342   4-30-88   3:16p
    FILE0970 TXT      2167   6-20-89   8:36a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   6-20-89   8:40a
    HPLJET   PRN       352   4-30-88   3:13p
    MATRIX   BN        451   1-01-80  12:08a
    MATRIX   PC        246   5-23-88   8:12p
    MATRIX   VO        205   9-09-87   9:33p
    MSFORMS  CFG        31   1-15-89   9:52p
    MSFORMS  EXE    268684   1-22-89   5:05p
    NAMES    ACW      2288   1-15-89   9:56p
    NAMES    BNS      7040   6-11-88   9:21p
    NAMES    BNW      7040   6-11-88   9:21p
    NAMES    PCW       880   7-27-88   9:23p
    NAMES    VOS      3696   6-11-88   9:20p
    NAMES    VOW      3696   6-11-88   9:20p
    PRINTER  CFG       342   4-30-88   3:16p
    QUAN1    VO       3328   3-17-88   7:26p
    QUAN2    VO       3328  12-02-86   2:50p
    QUAN3    VO       3456  12-02-86   2:50p
    QUAN4    BN       6016  12-02-86   2:44p
    QUAN5    BN       7040  12-02-86   2:45p
    QUAN6    BN       7040  12-02-86   2:46p
    QUAN7    VO       1299  12-27-88   9:13p
    QUAN8    BN       4200  12-27-88   9:18p
    REPORTS  FRM       256   6-15-88   7:27p
    SURROGAT AC         27   9-09-87   9:09p
    SURROGAT BN         27   9-09-87   9:09p
    SURROGAT PC         12   8-16-88   8:43p
    SURROGAT VO         18   9-09-87   9:08p
           30 file(s)     334239 bytes
                            9216 bytes free
