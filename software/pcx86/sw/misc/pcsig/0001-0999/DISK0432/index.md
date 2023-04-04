---
layout: page
title: "PC-SIG Library Disk #432"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0432/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0432"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ANALYTICALC 3 OF 3 (ALSO 430, 431)"

    AnalytiCalc is a complete Spreadsheet/Database/Graphics/Word Processor
    program.  Written in FORTRAN, it is quite fast and has attractive
    features.  The author's goal is an inexpensive, highly integrated
    package.  The complete system comes on three disks.  Disk one is the
    primary disk for a computer that is limited to 256K memory.  Disk two
    is the supplemental disk with documentation and extra files.  Disk
    three is the primary disk for a computer with more than 320K memory.
    
    ALL THREE DISKS ARE NEEDED TO USE THE SYSTEM.  This is a complex
    package, and the user should be sure to read the documentation before
    using it.
    
    Features:
    
    ~ Number of Columns......................................18000
    ~ Number of Rows.........................................18000
    ~ Maximum Length of Formulas (characters)..................109
    ~ Number of cells that can be full at once...............18000
    ~ Number of simultaneous named areas permitted.............300
    ~ Number of scratch cells outside spreadsheet...............60
    ~ Precision of calculations (digits; 8 bytes used)..........16
    ~ Total maximum storage managed (bytes)..............2,113,020
    ~ Maximum depth of document nesting (outline processor)......4
    ~ Maximum number of parameters varying to goal seek..........8
    ~ Maximum record size for data files accessed as database..128
    ~ Maximum number of files namable in one sheet..........>18000
    ~ Maximum cell columns displayable on one screen............20
    ~ Maximum number of rows displayable in one display.........75
    ~ Maximum simultaneous different cell display formats per
    sheet (taken from large set)...........................76
    ~ Length of format specification (characters)................9
    
    System Requirements:  256K, two disk drives and monochrome display
    
    How to Start: Read and print the document files ACSTART.DOC,
    README.DOC, MANUSQ.HLP, PKGINS.DOC, and ANALY.TUT.  MANUSQ.HLP will
    describe how to unsqueeze the manual file.  Unsqueeze it and read it
    before starting.  When you have read the manuals, boot Disk 1 and type
    ANALY to fire up the spreadsheet system.  Then run through the
    tutorial to get a feel for it.
    
    Suggested Registration: $49.95 includes update notification, latest vers
    with auxiliary programs and features
    
    File Descriptions:
    The First Disk Contains:
    ANALY    EXE  Main program of Spreadsheet/DB/WP system
    AUTOEXEC BAT  Demo Autoexec.bat that types AUXKPD.TXT to set up BIGANSI.
    ANALY    TQT  Tutorial on use of AnalytiCalc as spreadsheet
    AUXKPD   TXT  File of escape sequences to initialize BIGANSI.SYS when ty
    PIE      BAS  Piechart program for sections of AnalytiCalc spreadsh eet
    PCCHELP  HQP  Online direct access HELP file
    NOTICE   TXT  Documents new features and distribution policy/price
    KEYPAD   DOC  Documentation on function key usage
    GRF      BAT  Batch file that goes with GRF.CMD
    EDIT     DQC  Editor manual (condensed) for EDIT.EQE on Disk 2. Squeezed
    DPATH30  DQC  Squeezed documentation of above (Use USQ.EXE to unsqueez e
    DPATH30  COM  DOS PATH command extension: handy to run ANALY off RAM dis
    DIFF     EQE  Squeezed executable (Use USQ to unsqueeze)
    DIFF     DOC  Intelligent differences between 2 text files (or saved she
    CPM      EQE  CP/M-86 SSDD disk read/write/etc. under MSDOS. Squeezed .
    CONFIG   SYS  CONFIG.SYS that loads BIGANSI.SYS
    BIGANSI  SYS  Modified ANSI.SYS that supports more defs than standard
    BER      PCC  Business expense report template.
    LST      DQC  Listing documentation-squeezed
    ANALYCL  CQD  Pocket reference card-squeezed
    V21      NOT  Version notice
    
    The Second Disk Contains:
    ACINIT   PRM  Part of main program
    USQ      EXE  Unsqueeze utility
    MANUSQ   HLP  Documentation on what's here and how to unsqueeze
    DTC      DQC  Desktop Calendar documentaion, squeezed. Handy appointment
    EDIT     EQE  A screen editor. Simple but fast and handles any size file
    ANALY    MQN  AnalytiCalc manual file, squeezed. Full reference manual +
    GRF      BQS  Line chart, fitting, and scattergram program.
    ACSTART  DOC  More startup information
    PKGINS   DOC  How to install the package
    F1040    PQC  Part of US Federal Income Tax system; saved worksheet, squ
    DTC      EQE  DeskTop Calendar program. Use for all your timekeeping, ap
    DTC      HQP  DeskTop Calendar online HELP screen. Unsqueeze.
    IDENT    TXT  Identifies the disk.
    ACGRAF   EXE  Histogram and scatterplot utility for AnalytiCalc.
    ZERO     EQE  CP/M-86 SSDD disk initialize CP/M directory structure, squ
    
    The Third Disk Contains:
    1040     PCC  Part of US Federal Income Tax spreadsheet template
    AKDA     CMD  One of the command files executing a keypad command
    AKD      CMD  One of the command files executing a keypad command
    AKB      CMD  One of the command files executing a keypad command
    AKA      CMD  One of the command files executing a keypad command
    BUFEXTEN COM  Keyboard buffer extender (allows type ahead of 150 chars)
    BUF160   COM  Keyboard buffer extender
    BUF160   AQM  Source to keyboard buffer extender; may be better than
    BIGANSI  SYS  Modified ANSI.SYS that supports more defs than standard
    AUXKPD   TXT  File of escape sequences to initialize BIGANSI.SYS when ty
    AUTOEXEC BAT  Demo Autoexec.bat that types AUXKPD.TXT to set up BIGANSI.
    ANALY    TQC  Approximate table of contents for AnalytiCalc manual (sque
    ANALY    EXE  Main program of Spreadsheet/DB/WP system
    CCO      CMD  One of the command files executing a keypad command
    CPR      CMD  One of the command files executing a keypad command
    CONFIG   SYS  CONFIG.SYS that loads BIGANSI.SYS
    DIFRW    DOC  Documentation for DIFRW.EXE
    DIFRDWRT FQR  sources for DIFRW.EXE, squeezed. Use USQ to unsqueeze.
    CRWA     CMD  One of the command files executing a keypad command
    CRW      CMD  One of the command files executing a keypad command
    DIFRW    EXE  Utility to read or write DIF files from AnalytiCalc saved
    F1040    DOC  Documentation on the pieces of US Income Tax template
    F1040    CMD  Part of US Federal Income Tax template
    INCENT   CMD  One of the command files executing a keypad command
    HTXT     CMD  One of the command files executing a keypad command
    HTX      CMD  One of the command files executing a keypad command
    GRF      CMD  Line chart, fitting, and scattergram program
    SCHEDB   PCC  Part of US Federal Income Tax template for AnalytiCalc
    SCHEDA   PCC  Part of US Federal Income Tax template for AnalytiCalc
    PIE      BAS  Piechart program for sections of AnalytiCalc spreadsheets
    PCCHELP  HQP  Online direct access HELP file
    NOTICE   TXT  Documents new features and distribution policy/price
    LST      COM  Screen lister. Very fast listings to screen of a file.
    KER      EQE  Communications program, an old Kermit using IBM BIOS only
    KER      DOC  Documentation for generic Kermit communications program
    SCHEDY   PCC  Part of US Federal Income Tax template for AnalytiCalc
    SCHEDX   PCC  Part of US Federal Income Tax template for AnalytiCalc
    WND      CMD  One of the command files executing a keypad command
    TOEND    CMD  One of the command files executing a keypad command
    SRCH     CMD  One of the command files executing a keypad command
    SETUP    CMD  How to configure ANSI.SYS for aux keypad definitions
    ANNOT    NOT  Cell annotation instructions
    README   1ST  Notes from author
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## PIE.BAS

```bas
300 DIM R(100),A$(100)
500 LINE INPUT "Saved sheet filename>";LFNM$
1000 KEY OFF
1010 WIDTH 40:CLS
1410 FOR I=1 TO 30
1412 R(I)=0:A$(I)=" "
1414 NEXT I
1420 SCREEN 1,0:COLOR 0,7
1440 LR=50:SR=44
1444 OPEN LFNM$ FOR INPUT AS #1
1450 LINE INPUT #1,T$
1451 T$=LEFT$(T$,40)
1452 ON ERROR GOTO 1470
1454 N=1:M=1:S=1.000000e-9
1456 INPUT #1,I1$,I2
1457 LINE INPUT #1,L$
1458 INPUT #1,TP,F$,TY
1460 IF TP < 0 THEN A$(N)=LEFT$(L$,8):N=N+1 ELSE R(M)=VAL(L$):M=M+1
1462 GOTO 1456
1470 IF M > N THEN N=M
1480 FOR I=1 TO N
1500 S=S+R(I)
1510 NEXT I
1515 N=N-1
1520 FOR I=1 TO N:R(I)=R(I)/S:NEXT
1530 A2=0
1550 LOCATE 2,1:PRINT T$
1570 FOR C=1 TO N
1580 A1=A2:A2=A2+R(C)*2*3.1415926#
1590 AA=(A1+A2)/2
1600 CX=160+COS(AA)*(LR-SR)
1610 CY=100-SIN(AA)*(LR-SR)
1620 CIRCLE (CX,CY),SR,1,-A1-0.001,-A2,5/6
1630 IF N < 8 THEN PAINT (CX+COS(AA)*0.8*SR,CY-SIN(AA)*0.8*SR),C MOD 4,1
1640 LX=CX+COS(AA)*(16+SR)-4*LEN(A$(C)):LY=CY-SIN(AA)*(SR+16)
1650 LOCATE 1+(LY\8),1+(LX\8):PRINT A$(C);
1660 LINE ((LX\8)*8,8*((LY\8)+1))-((LX\8)*8+8*LEN(A$(C)),8*((LY\8)+1)),1
1670 NEXT C
1680 LOCATE 22,1:PRINT "Total=";S
1700 LOCATE 23,1
1750 END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0432

     Volume in drive A has no label
     Directory of A:\

    1040     PCC      1868  10-23-84   5:44p
    AKA      CMD        67   3-24-86   9:38a
    AKB      CMD       174  12-16-85   1:30p
    AKD      CMD        71  12-16-85   1:31p
    AKDA     CMD        92  12-16-85   1:31p
    ANALY    EXE    201201   9-10-86  11:56a
    ANALY    TQC      3541   1-14-86   6:10p
    ANNOT    NOT      3256   1-08-87   9:31a
    AUTOEXEC BAT       146   7-20-85  10:48p
    AUXKPD   TXT      2157   3-24-86   9:45a
    BIGANSI  SYS      2176   9-18-84   2:43p
    BUF160   AQM      6262   8-16-85   8:58a
    BUF160   COM       687   8-15-85  11:21a
    BUFEXTEN COM       696  11-29-84  12:23p
    CCO      CMD       579  12-16-85   1:34p
    CONFIG   SYS        34   6-19-85   4:15p
    CPR      CMD       845  12-16-85   1:32p
    CRW      CMD       572  12-16-85   1:34p
    CRWA     CMD       594  12-16-85   1:35p
    DIFRDWRT FQR      8115   8-16-85   8:36p
    DIFRW    DOC      3455   8-12-85   2:36p
    DIFRW    EXE     35680   8-16-85  12:14p
    F1040    CMD        78  12-16-85   1:36p
    F1040    DOC      1678  12-28-84   1:23p
    FILES432 TXT      3231   1-04-80   3:52p
    GRF      CMD      2890  12-16-85   1:35p
    HTX      CMD        79  12-16-85   1:33p
    HTXT     CMD        76  11-04-85  10:22a
    INCENT   CMD       306   8-23-85  10:38a
    KER      DOC      2133   6-21-85  11:26a
    KER      EQE     10785  11-10-84   1:50p
    LST      COM      6585   8-31-86   4:10a
    NOTICE   TXT     20299   1-08-87   9:47a
    PCCHELP  HQP      5959   8-09-85   9:09p
    PIE      BAS       898  11-05-84   9:43a
    README   1ST      3822   1-08-87   9:39a
    SCHEDA   PCC       973  10-23-84   5:45p
    SCHEDB   PCC       355  10-23-84   5:45p
    SCHEDX   PCC       965   1-03-86   9:01a
    SCHEDY   PCC       938   1-03-86   9:03a
    SETUP    CMD      1152   3-24-86   9:48a
    SRCH     CMD        58  12-16-85   1:33p
    TOEND    CMD        84  12-16-85   1:32p
    WND      CMD        65  12-16-85   1:33p
           44 file(s)     335677 bytes
                            1024 bytes free
