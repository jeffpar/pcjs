---
layout: page
title: "PC-SIG Library Disk #364"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0364/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0364"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL SET #4"

    This disk of Turbo Pascal files has some good tutorial
    information.  The programs on this disk do a variety of tasks,
    such as, window management utilities, a Pascal listing formatter,
    and eight chapters worth of source code from the book "Software
    Tools in Pascal".
    
    System Requirements: Turbo Pascal
    
    How to Start:  To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.  For instructions on PAS listings, refer to your Pascal
    language manual.
    
    File Descriptions:
    
    CHAPTER3 PAS  CHAPTER6.PAS ,CHAPTER7.PAS TURBOFIX.PAS, won't compile.
    CHAPTER5 PAS  Source code "Software Tools in Pascal", Ch. 5
    CHAPTER6 PAS  BAD FILE
    CHAPTER4 PAS  Source code "Software Tools in Pascal", Ch. 4
    CHAPTER2 PAS  Source code "Software Tools in Pascal", Ch. 2
    CHAPTER1 PAS  Source code "Software Tools in Pascal", Ch. 1
    LASTCOM  PAS  Resident program to bring back last ten DOS commands
    TURBTOOL DOC  Documentation -- READ IT
    INITCMD  PAS  Included by SHELL.PAS
    SHELL    PAS  Program for using the routines in "CHAPTER#" above
    TOOLU    PAS  Included by each CHAPTER#.PAS file
    CHAPTER8 PAS  Source code "Software Tools in Pascal", Ch. 8
    CHAPTER7 PAS  BAD FILE
    CHAPTER6 PAS  BAD FILE
    WINDOW   INC  Window handler used by LASTCOM.PAS
    REGRSTOR INC  INLINE code to restore registers
    REGSAVE  INC  INLINE code to save registers
    TADFORM  INC  Included time and date format routines
    TADBB    INC  Included time and date for "BigBoard II"
    TADPC    INC  Included time and date routines for PC
    PLIST    PAS  Program Lister -- lists $Include files, too.
    PFORMAT  DOC  Documentation
    PFORMAT  PAS  Pretty FORMATter for printing TURBO programs
    VARS     INC  Included by DEMO.PAS
    DEMO     PAS  Demonstration of the above two
    WRITE    DOC  Documentation for WRITELIN.INC & WRITEXY.INC
    WRITEXY  INC  Write at location X,Y
    WRITELIN INC  Replaces TURBO "WriteLn" procedure -- faster.
    WINDDEMO PAS  Demonstration program
    STRNGLIB INC  Library of additional STRING routines -- comprehensive
    GROWDEMO PAS  Demonstration program
    DEFDEMO  PAS  Demonstration program
    WINDODEF PAS  Associated file
    DEMODEFS INC  Associated file
    THELP    COM  Resident HELP WINDOW for TURBO Pascal
    STRNGLIB DOC  Documentation
    GROWWIN  INC  Associated file
    PRINTMAN BAT  Prints documentation for WINDMNGR.INC
    VAR      INC  Associated file --> change here for monochrome <--
    WINDMNGR TXT  How to print documentation WINDNGR.INC
    WINDMNGR DOC  Documentation
    WINDMNGR INC  Window Manager routines
    NOBAK    PAS  Patcher to stop TURBO from creating .BAK files
    THELP    DOC  Documentation
    TURBOFIX PAS  Auto-patch to remove certain terminal control codes
    TURBOCLR ZAP  Applies the above patch w/ PC-ZAP (Vol. 70)
    TURBOCLR DOC  How to stop TURBO progs clearing screen at start
    TURBO20  BUG  DEBUG script for floating-point bug in TURBO.COM, v2.0
    TURBO    PAT  How to patch Z80 TURBO programs for your terminal
    TPATCH   DAT  Data for four patches -- serves as documentation
    TPATCH   PAS  Patcher for PROGRAMS compiled under TURBO
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0364

     Volume in drive A has no label
     Directory of A:\

    CHAPTER1 PAS      2304   2-23-85   1:15p
    CHAPTER2 PAS      6520   3-09-85   7:23a
    CHAPTER3 PAS     11904   3-09-85   7:25a
    CHAPTER4 PAS      7998   3-09-85   7:26a
    CHAPTER5 PAS      8652   3-09-85   7:27a
    CHAPTER6 PAS     16896   2-23-85   1:16p
    CHAPTER7 PAS      8704   2-23-85   1:16p
    CHAPTER8 PAS     12288   2-23-85   1:16p
    DEFDEMO  PAS       948   2-23-85   1:28p
    DEMO     PAS      2143   3-11-85   9:02a
    DEMODEFS INC      1664   2-23-85   1:28p
    FILES    TXT      3456   3-25-85   4:14p
    FILES364 TXT      2944   5-23-85   4:04p
    GROWDEMO PAS       500   2-23-85   1:28p
    GROWWIN  INC      3328   2-23-85   1:28p
    INITCMD  PAS      1751   3-09-85   7:31a
    LASTCOM  PAS      7984   2-23-85   1:40p
    NOBAK    PAS      3914   3-11-85   9:03a
    PFORMAT  DOC      4106   2-23-85   1:36p
    PFORMAT  PAS     26707   2-23-85   1:36p
    PLIST    PAS      7740   3-09-85   7:13a
    PRINTMAN BAT       128   2-23-85   1:27p
    REGRSTOR INC      1024   2-23-85   1:40p
    REGSAVE  INC      1152   2-23-85   1:40p
    SHELL    PAS      1945   3-09-85   7:34a
    STRNGLIB DOC     13145   2-23-85   1:45p
    STRNGLIB INC      8333   2-23-85   1:45p
    TADBB    INC       384   2-23-85   1:37p
    TADFORM  INC      1792   2-23-85   1:38p
    TADPC    INC      1920   2-23-85   1:38p
    THELP    COM     30720   2-23-85   1:25p
    THELP    DOC       896   2-23-85   1:25p
    TOOLU    PAS     11670   3-09-85   7:21a
    TPATCH   DAT      1664   2-23-85   1:21p
    TPATCH   PAS      5760   2-23-85   1:22p
    TURBO    PAT      2176   2-23-85   1:22p
    TURBO20  BUG      6144   2-23-85   1:22p
    TURBOCLR DOC      2179   2-23-85  10:30a
    TURBOCLR ZAP       512   2-23-85  10:27a
    TURBOFIX PAS      3456   2-23-85   1:22p
    TURBTOOL DOC      1076   3-09-85   7:42a
    VAR      INC      1280   2-23-85   1:28p
    VARS     INC       128   2-23-85   1:32p
    WINDDEMO PAS      7984   2-23-85   1:28p
    WINDMNGR DOC     39296   2-23-85   1:29p
    WINDMNGR INC      9216   2-23-85   1:29p
    WINDMNGR TXT       384   2-23-85   1:27p
    WINDODEF PAS     19795   2-23-85   1:29p
    WINDOW   INC      2432   2-23-85   1:40p
    WRITE    DOC      2091   3-08-85   1:08p
    WRITELIN INC       898   3-08-85   1:02p
    WRITEXY  INC       802   3-08-85   1:03p
           52 file(s)     322833 bytes
                           14336 bytes free
