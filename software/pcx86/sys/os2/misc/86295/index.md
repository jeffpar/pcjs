---
layout: page
title: OS/2 CP-DOS Boot Disk (v7.68)
permalink: /software/pcx86/sys/os2/misc/86295/
redirect_from: /disks/pcx86/os2/misc/cpdos/86295/
machines:
  - id: ibm5170
    type: pcx86
    debugger: true
    config: /configs/pcx86/machine/ibm/5170/ega/1024kb/rev3/debugger/machine.xml
    autoMount:
      A:
        name: OS/2 CP-DOS (v7.68)
---

This disk contained a pre-1.0 version of OS/2 (aka **CP-DOS** or **MT-DOS** or **ADOS** or **286DOS** or **DOS5**)
built on October 22, 1986, with a few files (IBMDOS.COM and NLS.EXE) apparently rebuilt on October 23, 1986.

When this disk boots, the following version banner is displayed:

	CP-DOS version 1.0
	Copyright 1986 IBM Corp.
	
	Internal revision 7.68, 86/10/22

and after it finishes processing CONFIG.SYS, displays "Start A Program", and you press Enter, it displays:

	ADOS Command Interpreter Version 5.00
	(*** Development Rev 5.37 10/17/86 ***)
	
	A]

A directory listing of this disk is provided [below](#directory-of-os2-cpdos-boot-disk-v768).

{% include machine.html id="ibm5170" %}

### Directory of OS/2 CP-DOS (v7.68)

     Volume in drive A is DOS5 768
     Directory of A:\

    IBMBIO   COM     49408  10-22-86   7:27p
    IBMDOS   COM    170717  10-23-86  12:13a
    OSO001   MSG     40730  10-22-86   9:20a
    CMD      EXE     47056  10-22-86   7:41p
    COMMAND  COM     23724  10-22-86   7:41p
    COUNTRY  SYS      6175  10-22-86   7:57p
    MSG      EXE      5824  10-22-86   7:58p
    NLS      EXE      3124  10-23-86   8:38a
    SWAPPER  EXE      4150  10-22-86   8:04p
    ANSICALL EXE      3165  10-22-86   7:20p
    BKSCALLS EXE      3611  10-22-86   7:21p
    BMSCALLS EXE      2064  10-22-86   7:27p
    BVSCALLS EXE     11710  10-22-86   7:28p
    DOSCALL1 EXE      7071  10-22-86   7:27p
    KBDCALLS EXE      4138  10-22-86   7:28p
    MONCALLS EXE      5655  10-22-86   7:29p
    MOUCALLS EXE      4665  10-22-86   7:29p
    QUECALLS EXE     11508  10-22-86   7:29p
    SESMGR   EXE     25232  10-22-86   7:30p
    SHELL    EXE      4096  10-22-86   7:30p
    VIOCALLS EXE      9321  10-22-86   7:30p
    COM      SYS     12342  10-22-86  10:11p
    COM      MSG       144  10-22-86  10:39a
    EXTDSKDD EXE      1885  10-22-86   7:31p
    MOUSE00  SYS     12342  10-22-86   7:31p
    MOUSE01  SYS     12342  10-22-86   7:32p
    MOUSE02  SYS     12342  10-22-86   7:32p
    MOUSE03  SYS     12854  10-22-86   7:31p
    POINTDD  SYS      4240  10-22-86   7:32p
    VDISK    SYS      4662  10-22-86   7:33p
    READ     ME       1417  12-08-86   4:35p
    AIM          <DIR>      12-10-86   9:32a
    FILE         <DIR>      12-10-86   9:34a
    TIMER        <DIR>      12-10-86   9:36a
    DEVICE       <DIR>      12-10-86   9:37a
    CONFIG   SYS       168   2-19-87   5:48p
    TEST         <DIR>       1-06-87   1:05p
    C        BAT       246   2-19-87   5:49p
    AUTOEXEC BAT      1228   2-19-87   5:49p
    READPHYS EXE      1646  10-16-86  10:00p
           40 file(s)     521002 bytes

     Directory of A:\AIM

    .            <DIR>      12-10-86   9:32a
    ..           <DIR>      12-10-86   9:32a
    READ     ME        244  12-08-86   4:56p
    PCQ1     C       19562  12-09-86   9:46a
    PCQ2     C        9568  12-03-86   2:07p
    PCQ3     C        2949  11-11-86   3:07p
    QBENCH   C       34325   6-10-86   1:56p
    AIM      768      9945  12-03-86   6:46a
    PRO          <DIR>      12-10-86   9:33a
    REAL         <DIR>      12-10-86   9:33a
    FAPI         <DIR>      12-10-86   9:34a
           11 file(s)      76593 bytes

     Directory of A:\AIM\PRO

    .            <DIR>      12-10-86   9:33a
    ..           <DIR>      12-10-86   9:33a
    READ     ME       4876  12-09-86   2:58p
    MAKEFILE           677  12-08-86   5:09p
    PCQB     DEF        87   7-14-86   2:03p
    PCQB5    EXE     28854  12-09-86   9:47a
    PCQ1     OBJ      6872  12-09-86   9:47a
    PCQ2     OBJ      7029  12-08-86   5:08p
    PCQP     OBJ      1049  12-08-86   5:08p
    PCQB5    MAP     23691  12-09-86   9:47a
    CONFIG   SYS        79   8-25-86   4:48p
    TEST     BAT        69  11-05-86   9:59a
    CR                   4  11-05-86   9:58a
           13 file(s)      73287 bytes

     Directory of A:\AIM\REAL

    .            <DIR>      12-10-86   9:33a
    ..           <DIR>      12-10-86   9:33a
    READ     ME       4832  12-09-86   2:58p
    MAKEFILE           574  12-09-86   9:40a
    PCQ1     OBJ      6872  12-09-86   9:47a
    PCQ2     OBJ      7029  12-09-86   9:41a
    PCQ3     OBJ       385  12-09-86   9:41a
    PCQB3    MAP     21376  12-09-86   9:48a
    PCQB3    EXE     27994  12-09-86   9:48a
    CONFIG   SYS        78  12-09-86   9:48a
    TEST     BAT        69  12-09-86   9:49a
    CR                   4  11-05-86   9:58a
           12 file(s)      69213 bytes

     Directory of A:\AIM\FAPI

    .            <DIR>      12-10-86   9:34a
    ..           <DIR>      12-10-86   9:34a
    READ     ME       4854  12-09-86   2:58p
    MAKEFILE           694  12-09-86  10:05a
    PCQB     DEF        87   7-14-86   2:03p
    PCQ1     OBJ      6872  12-09-86  10:04a
    PCQ2     OBJ      7029  12-09-86  10:04a
    PCQA     OBJ       359  12-09-86  10:04a
    PCQBA    MAP     23059  12-09-86  10:05a
    CONFIG   SYS        23  12-09-86  10:06a
    TEST     BAT        69  12-09-86  10:06a
    CR                   4  11-05-86   9:58a
    PCQBA    EXE     36444  12-09-86  10:05a
           13 file(s)      79494 bytes

     Directory of A:\FILE

    .            <DIR>      12-10-86   9:34a
    ..           <DIR>      12-10-86   9:34a
    READ     ME        470  12-09-86  11:33a
    FILE     DOC      1980   8-25-86   2:06p
    FILE     C       14639  11-06-86   3:47p
    W        ASM      3666  11-10-86  11:45a
    MAKETAB  BAT       208  12-09-86  11:28a
    FILE     TAB      4439  12-09-86  10:50a
    FILE     AWK       621  10-28-86   2:48p
    FILE     768      5047  11-11-86   9:10a
    PRO          <DIR>      12-10-86   9:35a
    REAL         <DIR>      12-10-86   9:35a
           12 file(s)      31070 bytes

     Directory of A:\FILE\PRO

    .            <DIR>      12-10-86   9:35a
    ..           <DIR>      12-10-86   9:35a
    READ     ME       4791  12-09-86  11:00a
    MAKEFILE           586  12-09-86  10:57a
    FILED5   DEF        79  10-30-86  11:22a
    FILED5   OBJ      7492  12-09-86  10:57a
    W        OBJ       226  12-09-86  10:57a
    FILED5   MAP     18928  12-09-86  10:57a
    FILED5   EXE     19920  12-09-86  10:57a
    CONFIG   SYS       110  11-12-86  11:25a
    TEST     BAT        42  12-09-86  11:00a
           11 file(s)      52174 bytes

     Directory of A:\FILE\REAL

    .            <DIR>      12-10-86   9:35a
    ..           <DIR>      12-10-86   9:35a
    READ     ME       6717  12-09-86  11:28a
    MAKEFILE           470  12-09-86  11:31a
    FILED3   OBJ      7733  12-09-86  11:31a
    W        OBJ       226  12-09-86  11:32a
    FILED3   MAP     17419  12-09-86  11:32a
    FILED3   EXE     19844  12-09-86  11:32a
    CONFIG   SYS       110  11-12-86  11:25a
    TEST     BAT        42  12-09-86   2:44p
           10 file(s)      52561 bytes

     Directory of A:\TIMER

    .            <DIR>      12-10-86   9:36a
    ..           <DIR>      12-10-86   9:36a
    READ     ME       3589  12-09-86   3:28p
    TIC1     C        2715  11-05-86   2:09p
    TIC4     C        4256  11-05-86   2:09p
    TIMER    DEF       155  12-10-86   8:57a
    CONTEXT  C        3488  11-21-86  11:25a
    CONTEXT  DEF       157  11-06-86   4:36p
    W        ASM      3666  11-10-86  11:45a
    MAKEFILE           608  12-10-86   8:52a
    TIC1     OBJ      1071  12-10-86   8:57a
    W        OBJ       226  12-09-86   2:59p
    TIC1     MAP      7593  12-10-86   8:57a
    TIC1     EXE      7922  12-10-86   8:57a
    TIC4     OBJ      1804  12-10-86   9:09a
    TIC4     MAP      8097  12-10-86   9:09a
    TIC4     EXE      8576  12-10-86   9:09a
    CONTEXT  OBJ      1461  12-09-86   3:00p
    CONTEXT  MAP      8191  12-09-86   3:00p
    CONTEXT  EXE      7974  12-09-86   3:00p
    TIC1     OUT       191   2-05-87  11:30a
    TIC4     OUT       229   2-05-87  11:34a
    CONTEXT  OUT     12116   2-05-87  11:34a
    TIMER    768      2619  12-09-86   3:24p
    CONFIG   SYS        79   8-25-86   4:48p
    TEST     BAT        55  12-09-86   3:29p
           26 file(s)      86838 bytes

     Directory of A:\DEVICE

    .            <DIR>      12-10-86   9:37a
    ..           <DIR>      12-10-86   9:37a
    READ     ME       2766  12-10-86   9:07a
    DEV      C        4737  11-05-86   2:23p
    DEV      DEF       124  12-02-86   3:36p
    GETTIMES ASM      5515   8-26-86   1:19p
    GETTIMES DEF        63  12-02-86   4:23p
    DEVHLP   INC      2985   7-28-86   2:39p
    DOSMAC   INC     18777   7-28-86   2:40p
    DEVSYM   INC      8331   7-28-86   4:08p
    DEVHDR   INC      2775   7-28-86   4:20p
    W        ASM      3666  11-10-86  11:45a
    MAKEFILE           523  12-10-86   9:08a
    DEV      OBJ      2395  12-09-86   4:04p
    W        OBJ       226  12-09-86   4:04p
    DEV      MAP      8001  12-09-86   4:04p
    DEV      EXE      8758  12-09-86   4:04p
    GETTIMES OBJ       759  12-09-86   4:04p
    GETTIMES MAP       699  12-09-86   4:05p
    GETTIMES EXE      1646  12-09-86   4:05p
    DEV      OUT       697   2-05-87  11:41a
    DEVICE   768       684  12-03-86   8:32a
    CONFIG   SYS       114  12-10-86   9:07a
    TEST     BAT        15  12-09-86   4:08p
           24 file(s)      74256 bytes

     Directory of A:\TEST

    .            <DIR>       1-06-87   1:05p
    ..           <DIR>       1-06-87   1:05p
    MEMX     EXE     27328   1-06-87   3:28p
            3 file(s)      27328 bytes

    Total files listed:
          175 file(s)    1143816 bytes
                           17920 bytes free
