---
layout: page
title: "PC-SIG Diskette Library (Disk #431)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0431/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0431"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ANALYTICALC 2 OF 3 (ALSO 430, 432)"

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


### Directory of PC-SIG Library Disk #0431

     Volume in drive A has no label
     Directory of A:\

    ACGRAF   EXE     63898   2-28-86   3:57p
    ACINIT   PRM       478   1-04-86  12:39p
    ACSTART  DOC     13843  10-10-85   2:31p
    ANALY    MQN    148333   3-25-86   9:03a
    DTC      DQC      4815  10-25-84  10:15p
    DTC      EQE     40737   3-19-85   1:21p
    DTC      HQP      1021   1-02-86   7:32p
    EDIT     EQE     18293  11-29-84  10:09p
    F1040    PQC     11002   1-02-85   4:33p
    GRF      BQS     18362   2-28-85   7:25p
    IDENT    TXT       992   1-08-87  10:10a
    MANUSQ   HLP      4795   3-25-86   9:04a
    PKGINS   DOC      3243   1-08-87  10:17a
    USQ      EXE     16758   7-08-85  10:29a
    ZERO     EQE     10677   1-03-86   1:58p
           15 file(s)     357247 bytes
                               0 bytes free
