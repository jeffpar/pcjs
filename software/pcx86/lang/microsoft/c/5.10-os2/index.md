---
layout: page
title: Microsoft C Compiler 5.10 for DOS and OS/2
permalink: /software/pcx86/lang/microsoft/c/5.10-os2/
redirect_from: /disks/pcx86/tools/microsoft/c/5.10-os2/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/machine/ibm/5170/cga/640kb/rev3/machine.xml
    autoGen: true
    autoMount:
      B: "MS C 5.10-OS/2 (SETUP)"
    autoType: $date\r$time\rB:\rDIR\r
---

NOTE: These disks are referred to internally as version **5.10-OS/2**, because Microsoft released the 5.10
C compiler in two different packages: this 14-disk set with files for both DOS and OS/2, and a smaller 11-disk
set containing only files for DOS.  For the latter, see [Microsoft C Compiler 5.10 for DOS](../5.10/).

Directory listings of the twelve 360Kb and two 1.2Mb distribution diskettes, a copy of the [PACKING.LST](#packinglst),
and some [Documentation](#documents) are provided below.

{% include machine.html id="ibm5170" %}

### Directory of MS C 5.10-OS/2 (SETUP)

     Volume in drive A has no label
     Directory of A:\

    README   DOC     63360   3-07-88   5:10a
    UTILITY  DOC     17794   3-07-88   5:10a
    PACKING  LST     11814   3-07-88   5:10a
    CL       EXE     31329   3-07-88   5:10a
    CL       HLP      2169   3-07-88   5:10a
    CL       ERR      2276   3-07-88   5:10a
    C1       EXE    114521   3-07-88   5:10a
    C23      ERR      3272   3-07-88   5:10a
    SETUP    EXE     93033   3-07-88   5:10a
    SETUP    DOC     15179   3-07-88   5:10a
           10 file(s)     354747 bytes
                            3072 bytes free

### Directory of MS C 5.10-OS/2 (COMPILER1)

     Volume in drive A has no label
     Directory of A:\

    PATCH        <DIR>       3-07-88   5:10a
    C1       ERR     14393   3-07-88   5:10a
    C1L      EXE    149303   3-07-88   5:10a
    C3       EXE    125221   3-07-88   5:10a
    ERRMSG   DOC     17293   3-07-88   5:10a
    FPEXCEPT DOC     16254   3-07-88   5:10a
            6 file(s)     322464 bytes

     Directory of A:\PATCH

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    PATCH87  DOC      3937   3-07-88   5:10a
    PATCH87  EXE      4206   3-07-88   5:10a
    SETRHS   EXE       543   3-07-88   5:10a
    RMRHS    EXE       543   3-07-88   5:10a
    STKPAT   BAT        94   3-07-88   5:10a
    STKPAT   SCR        30   3-07-88   5:10a
    PTRACE87 PAT       188   3-07-88   5:10a
    PATCH320 DOC      2169   3-07-88   5:10a
    OS2PATCH EXE      1069   3-07-88   5:10a
    OS2PATCH DOC      1401   3-07-88   5:10a
           12 file(s)      14180 bytes

    Total files listed:
           18 file(s)     336644 bytes
                           15360 bytes free

### Directory of MS C 5.10-OS/2 (COMPILER2)

     Volume in drive A has no label
     Directory of A:\

    FIXSHIFT COM       688   3-07-88   5:10a
    MSHERC   COM      6749   3-07-88   5:10a
    QLIB     DOC     12047   3-07-88   5:10a
    QLIB     EXE     24557   3-07-88   5:10a
    QLIB     INI      2905   3-07-88   5:10a
    C2       EXE    202919   3-07-88   5:10a
    QC       HLP     50649   3-07-88   5:10a
    SETENV   EXE     10870   3-07-88   5:10a
    MTDYNA   DOC     43542   3-07-88   5:10a
            9 file(s)     354926 bytes
                            4096 bytes free

### Directory of MS C 5.10-OS/2 (UTILITY1)

     Volume in drive A has no label
     Directory of A:\

    ERROUT   EXE     10729   3-07-88   5:10a
    EXEHDR   EXE     29942   3-07-88   5:10a
    EXEMOD   EXE     12336   3-07-88   5:10a
    EXEPACK  EXE     14803   3-07-88   5:10a
    IMPLIB   EXE     30166   3-07-88   5:10a
    LIB      EXE     49661   3-07-88   5:10a
    LINK     EXE    117001   3-07-88   5:10a
    MAKE     EXE     38613   3-07-88   5:10a
    MOUSE    COM     14545   3-07-88   5:10a
    README   QC      30360   3-07-88   5:10a
           10 file(s)     348156 bytes
                            8192 bytes free

### Directory of MS C 5.10-OS/2 (UTILITY2)

     Volume in drive A has no label
     Directory of A:\

    EXT          <DIR>       3-07-88   5:10a
    INI          <DIR>       3-07-88   5:10a
    BIND     EXE     36946   3-07-88   5:10a
    CALLTREE EXE     31233   3-07-88   5:10a
    ECH      EXE     19351   3-07-88   5:10a
    EXP      EXE     32220   3-07-88   5:10a
    M        EXE     94821   3-07-88   5:10a
    MEGREP   EXE     31915   3-07-88   5:10a
    RM       EXE     24884   3-07-88   5:10a
    UNDEL    EXE     30046   3-07-88   5:10a
           10 file(s)     301416 bytes

     Directory of A:\EXT

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    EXT      DOC     15877   3-07-88   5:10a
    EXT      H        8730   3-07-88   5:10a
    EXTHDR   OBJ      1893   3-07-88   5:10a
    EXTHDRP  OBJ      2021   3-07-88   5:10a
    SKEL     C        2457   3-07-88   5:10a
    SKEL     DEF       211   3-07-88   5:10a
    WS       DLL      2609   3-07-88   5:10a
    WS       ZXT      2084   3-07-88   5:10a
           10 file(s)      35882 bytes

     Directory of A:\INI

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    BRIEF    INI      2094   3-07-88   5:10a
    EPSILON  INI       978   3-07-88   5:10a
    QUICK    INI      1058   3-07-88   5:10a
            5 file(s)       4130 bytes

    Total files listed:
           25 file(s)     341428 bytes
                            8192 bytes free

### Directory of MS C 5.10-OS/2 (INCLUDE)

     Volume in drive A has no label
     Directory of A:\

    STARTUP      <DIR>       3-07-88   5:10a
    INCLUDE      <DIR>       3-07-88   5:10a
            2 file(s)          0 bytes

     Directory of A:\STARTUP

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    DOS          <DIR>       3-07-88   5:10a
    OS2          <DIR>       3-07-88   5:10a
    FILE2    H        1027   3-07-88   5:10a
    MSDOS    H        6849   3-07-88   5:10a
    REGISTER H         922   3-07-88   5:10a
    STARTUP  BAT      1663   3-07-88   5:10a
    MAKEFILE          4148   3-07-88   5:10a
    CHKSTK   ASM      2044   3-07-88   5:10a
    CHKSUM   ASM      3524   3-07-88   5:10a
    NULBODY  C          13   3-07-88   5:10a
    README   DOC      3199   3-07-88   5:10a
    MSDOS    INC      6181   3-07-88   5:10a
    CMACROS  INC     12066   3-07-88   5:10a
    BRKCTL   INC       784   3-07-88   5:10a
    VERSION  INC       503   3-07-88   5:10a
    WILD     C        7182   3-07-88   5:10a
    _FILE    C        1691   3-07-88   5:10a
    CRT0FP   ASM      2223   3-07-88   5:10a
    FMSGHDR  ASM      2429   3-07-88   5:10a
    SETARGV  ASM       971   3-07-88   5:10a
           22 file(s)      57419 bytes

     Directory of A:\STARTUP\DOS

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    NULBODY  LNK       149   3-07-88   5:10a
    STDENVP  ASM      3780   3-07-88   5:10a
    CRT0     ASM      7612   3-07-88   5:10a
    CRT0DAT  ASM     14175   3-07-88   5:10a
    CRT0MSG  ASM      2840   3-07-88   5:10a
    EXECMSG  ASM      1337   3-07-88   5:10a
    NMSGHDR  ASM      3010   3-07-88   5:10a
    STDALLOC ASM      2825   3-07-88   5:10a
    STDARGV  ASM     13852   3-07-88   5:10a
           11 file(s)      49580 bytes

     Directory of A:\STARTUP\OS2

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    NULBODY  LNK       168   3-07-88   5:10a
    CRT0     ASM     10312   3-07-88   5:10a
    STDENVP  ASM      5362   3-07-88   5:10a
    CRT0DAT  ASM     10496   3-07-88   5:10a
    CRT0MSG  ASM      2891   3-07-88   5:10a
    EXECMSG  ASM      2231   3-07-88   5:10a
    NMSGHDR  ASM      3486   3-07-88   5:10a
    STDALLOC ASM      3245   3-07-88   5:10a
    STDARGV  ASM     13623   3-07-88   5:10a
           11 file(s)      51814 bytes

     Directory of A:\INCLUDE

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    SYS          <DIR>       3-07-88   5:10a
    ASSERT   H         699   3-07-88   5:10a
    BIOS     H        4866   3-07-88   5:10a
    CONIO    H         952   3-07-88   5:10a
    CTYPE    H        2465   3-07-88   5:10a
    DIRECT   H         690   3-07-88   5:10a
    DOS      H        5917   3-07-88   5:10a
    ERRNO    H        1283   3-07-88   5:10a
    FCNTL    H        1255   3-07-88   5:10a
    FLOAT    H        6011   3-07-88   5:10a
    GRAPH    H        7480   3-07-88   5:10a
    IO       H        1294   3-07-88   5:10a
    LIMITS   H        1553   3-07-88   5:10a
    MALLOC   H        3097   3-07-88   5:10a
    MATH     H        3324   3-07-88   5:10a
    MEMORY   H        1065   3-07-88   5:10a
    SEARCH   H        1025   3-07-88   5:10a
    SETJMP   H         907   3-07-88   5:10a
    SHARE    H         554   3-07-88   5:10a
    SIGNAL   H        1905   3-07-88   5:10a
    STDARG   H         614   3-07-88   5:10a
    STDDEF   H        1100   3-07-88   5:10a
    STDIO    H        4500   3-07-88   5:10a
    STDLIB   H        4900   3-07-88   5:10a
    STRING   H        2209   3-07-88   5:10a
    TIME     H        2342   3-07-88   5:10a
    VARARGS  H         642   3-07-88   5:10a
    PROCESS  H        1988   3-07-88   5:10a
    OS2      H         707   3-07-88   5:10a
    OS2DEF   H        5891   3-07-88   5:10a
    BSE      H        1139   3-07-88   5:10a
    BSEDOS   H       17730   3-07-88   5:10a
    BSEERR   H       20940   3-07-88   5:10a
    BSESUB   H       11512   3-07-88   5:10a
           36 file(s)     122556 bytes

     Directory of A:\INCLUDE\SYS

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    LOCKING  H         573   3-07-88   5:10a
    STAT     H        1497   3-07-88   5:10a
    TIMEB    H         844   3-07-88   5:10a
    TYPES    H         849   3-07-88   5:10a
    UTIME    H        1061   3-07-88   5:10a
            7 file(s)       4824 bytes

    Total files listed:
           89 file(s)     286193 bytes
                           29696 bytes free

### Directory of MS C 5.10-OS/2 (LIBSM)

     Volume in drive A has no label
     Directory of A:\

    SLIBCR   LIB    132047   3-07-88   5:10a
    SLIBFA   LIB     46089   3-07-88   5:10a
    SVARSTCK OBJ       507   3-07-88   5:10a
    MLIBCR   LIB    133071   3-07-88   5:10a
    MLIBFA   LIB     46601   3-07-88   5:10a
    MVARSTCK OBJ       507   3-07-88   5:10a
            6 file(s)     358822 bytes
                            1024 bytes free

### Directory of MS C 5.10-OS/2 (LIBLC)

     Volume in drive A has no label
     Directory of A:\

    CLIBCR   LIB    141301   3-07-88   5:10a
    CVARSTCK OBJ       487   3-07-88   5:10a
    LLIBCR   LIB    142837   3-07-88   5:10a
    LLIBFA   LIB     47625   3-07-88   5:10a
    LVARSTCK OBJ       487   3-07-88   5:10a
            5 file(s)     332737 bytes
                           27648 bytes free

### Directory of MS C 5.10-OS/2 (LIBFP)

     Volume in drive A has no label
     Directory of A:\

    FORTRAN      <DIR>       3-07-88   5:10a
    EM       LIB     16921   3-07-88   5:10a
    87       LIB      4121   3-07-88   5:10a
    DOSCALLS LIB     29184   3-07-88   5:10a
    GRAPHICS LIB     59357   3-07-88   5:10a
    LIBH     LIB     14209   3-07-88   5:10a
    QUICKLIB OBJ      7917   3-07-88   5:10a
    SETARGV  OBJ       143   3-07-88   5:10a
    BINMODE  OBJ       127   3-07-88   5:10a
    SLIBFP   LIB     37281   3-07-88   5:10a
    MLIBFP   LIB     38305   3-07-88   5:10a
    CLIBFA   LIB     47113   3-07-88   5:10a
    CLIBFP   LIB     38307   3-07-88   5:10a
    LLIBFP   LIB     39331   3-07-88   5:10a
           14 file(s)     332316 bytes

     Directory of A:\FORTRAN

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    MDBGMSG  OBJ       540   3-07-88   5:10a
    LDBGMSG  OBJ       544   3-07-88   5:10a
    F4COMPAT BAT      3107   3-07-88   5:10a
            5 file(s)       4191 bytes

    Total files listed:
           19 file(s)     336507 bytes
                           15360 bytes free

### Directory of MS C 5.10-OS/2 (CVDOS)

     Volume in drive A has no label
     Directory of A:\

    SAMPLE       <DIR>       3-07-88   5:10a
    CV       EXE    232896   3-07-88   5:10a
            2 file(s)     232896 bytes

     Directory of A:\SAMPLE

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    CODEVIEW DOC     12928   3-07-88   5:10a
    ADAPT    BAT       133   3-07-88   5:10a
    DEMOB    BAT       254   3-07-88   5:10a
    LIFEB    BAT       336   3-07-88   5:10a
    LIFEEB   BAT       402   3-07-88   5:10a
    MENU     BAT       550   3-07-88   5:10a
    SAMPLE   BAT      1059   3-07-88   5:10a
    LIFE     C       14713   3-07-88   5:10a
    LIFE     EXE     33237   3-07-88   5:10a
    LIFE     R        5282   3-07-88   5:10a
    C_AUTO   CV       3571   3-07-88   5:10a
    E_AUTO   CV       6788   3-07-88   5:10a
    L_AUTO   CV      13272   3-07-88   5:10a
    M_AUTO   CV        733   3-07-88   5:10a
    Q_AUTO   CV         15   3-07-88   5:10a
    S_AUTO   CV       9091   3-07-88   5:10a
    RESPOND  COM       124   3-07-88   5:10a
    S1       @@@       230   3-07-88   5:10a
    S12      @@@       926   3-07-88   5:10a
    S13      @@@       368   3-07-88   5:10a
    S14      @@@       520   3-07-88   5:10a
    S2       @@@       752   3-07-88   5:10a
    S3       @@@       276   3-07-88   5:10a
    S4       @@@       354   3-07-88   5:10a
    S5       @@@       554   3-07-88   5:10a
    S6       @@@       432   3-07-88   5:10a
    S7       @@@       427   3-07-88   5:10a
    S8       @@@       479   3-07-88   5:10a
    S9       @@@       865   3-07-88   5:10a
           31 file(s)     108671 bytes

    Total files listed:
           33 file(s)     341567 bytes
                            3072 bytes free

### Directory of MS C 5.10-OS/2 (QCDOS)

     Volume in drive A has no label
     Directory of A:\

    QC       EXE    326656   3-07-88   5:10a
    QCL      EXE     28065   3-07-88   5:10a
    QCL      HLP      1456   3-07-88   5:10a
            3 file(s)     356177 bytes
                            5120 bytes free

### Directory of MS C 5.10-OS/2 (UTILITY3)

     Volume in drive A has no label
     Directory of A:\

    SOURCE       <DIR>       3-07-88   5:10a
    ILINK    EXE     88929   3-07-88   5:10a
    LINK     EXE     65539   3-07-88   5:10a
    EXEC     EXE      9299   3-07-88   5:10a
    CV       HLP     21552   3-07-88   5:10a
    CVPACK   EXE     49400   3-07-88   5:10a
            6 file(s)     234719 bytes

     Directory of A:\SOURCE

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    SAMPLES  DOC      1760   3-07-88   5:10a
    CFLOW    C       44796   3-07-88   5:10a
    CFLOW    DOC      3764   3-07-88   5:10a
    DEMO     C         419   3-07-88   5:10a
    EMOEM    ASM     12129   3-07-88   5:10a
    GRDEMO   C       20907   3-07-88   5:10a
    SIEVE    C         788   3-07-88   5:10a
    SORTDEMO C       25399   3-07-88   5:10a
           10 file(s)     109962 bytes

    Total files listed:
           16 file(s)     344681 bytes
                           10240 bytes free

### Directory of MS C 5.10-OS/2 (LIBOS2)

     Volume in drive A has no label
     Directory of A:\

    EXAMPLE      <DIR>       3-07-88   5:10a
    SLIBCP   LIB    119999   3-07-88   5:10a
    MLIBCP   LIB    121535   3-07-88   5:10a
    CLIBCP   LIB    129257   3-07-88   5:10a
    LLIBCP   LIB    130793   3-07-88   5:10a
    APILMR   OBJ       105   3-07-88   5:10a
    API      LIB     81408   3-07-88   5:10a
    CDLLSUPP LIB      9475   3-07-88   5:10a
    LLIBCDLL LIB    178143   3-07-88   5:10a
    LLIBCMT  LIB    198913   3-07-88   5:10a
    CDLLOBJS LIB    203063   3-07-88   5:10a
    CDLLOBJS DEF      4397   3-07-88   5:10a
    CDLLOBJS CMD      2048   3-07-88   5:10a
    CRTEXE   OBJ      1089   3-07-88   5:10a
    CRTDLL   OBJ       577   3-07-88   5:10a
    CRTLIB   OBJ      1177   3-07-88   5:10a
           16 file(s)    1181979 bytes

     Directory of A:\EXAMPLE

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    MHELLO   C        2990   3-07-88   5:10a
    MKMHELLO CMD       433   3-07-88   5:10a
    STMAIN   C         825   3-07-88   5:10a
    STMAIN   DEF        41   3-07-88   5:10a
    STDLL    C         393   3-07-88   5:10a
    STDLL    DEF       124   3-07-88   5:10a
    MKSTDLL  CMD       714   3-07-88   5:10a
    MTMAIN   C         735   3-07-88   5:10a
    MTMAIN   DEF        41   3-07-88   5:10a
    MTDLL    C         393   3-07-88   5:10a
    MTDLL    DEF       124   3-07-88   5:10a
    MKMTDLL  CMD      1587   3-07-88   5:10a
    SNAP     C       13083   3-07-88   5:10a
    MAKESNAP CMD      2148   3-07-88   5:10a
           16 file(s)      23631 bytes

    Total files listed:
           32 file(s)    1205610 bytes
                               0 bytes free

### Directory of MS C 5.10-OS/2 (CVOS2)

     Volume in drive A has no label
     Directory of A:\

    INCLMT       <DIR>       3-07-88   5:10a
    CVP      EXE    222505   3-07-88   5:10a
    CVP      HLP     21552   3-07-88   5:10a
    MEP      EXE     97063   3-07-88   5:10a
    CL       EXE     33900   3-07-88   5:10a
    CL       ERR      2276   3-07-88   5:10a
    CL       HLP      2169   3-07-88   5:10a
    C1       EXE    118643   3-07-88   5:10a
    C1L      EXE    158625   3-07-88   5:10a
    C1       ERR     14393   3-07-88   5:10a
    C23      ERR      3272   3-07-88   5:10a
    C2       EXE    222515   3-07-88   5:10a
    C3       EXE    129609   3-07-88   5:10a
    BINDC    BAT      2784   3-07-88   5:10a
    BINDC    CMD      2712   3-07-88   5:10a
           15 file(s)    1032018 bytes

     Directory of A:\INCLMT

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    SYS          <DIR>       3-07-88   5:10a
    ASSERT   H         703   3-07-88   5:10a
    BIOS     H        4866   3-07-88   5:10a
    CONIO    H        1024   3-07-88   5:10a
    CTYPE    H        2952   3-07-88   5:10a
    DIRECT   H         726   3-07-88   5:10a
    DOS      H        5917   3-07-88   5:10a
    ERRNO    H        1283   3-07-88   5:10a
    FCNTL    H        1255   3-07-88   5:10a
    FLOAT    H        6027   3-07-88   5:10a
    IO       H        1438   3-07-88   5:10a
    LIMITS   H        1553   3-07-88   5:10a
    MALLOC   H        3370   3-07-88   5:10a
    MATH     H        3709   3-07-88   5:10a
    MEMORY   H        1149   3-07-88   5:10a
    SEARCH   H        1137   3-07-88   5:10a
    SETJMP   H         915   3-07-88   5:10a
    SHARE    H         554   3-07-88   5:10a
    SIGNAL   H        1941   3-07-88   5:10a
    STDARG   H         622   3-07-88   5:10a
    STDDEF   H        1217   3-07-88   5:10a
    STDIO    H        5046   3-07-88   5:10a
    STDLIB   H        5335   3-07-88   5:10a
    STRING   H        2629   3-07-88   5:10a
    TIME     H        2693   3-07-88   5:10a
    VARARGS  H         650   3-07-88   5:10a
    PROCESS  H        2370   3-07-88   5:10a
    OS2      H         707   3-07-88   5:10a
    OS2DEF   H        5891   3-07-88   5:10a
    BSE      H        1139   3-07-88   5:10a
    BSEDOS   H       17730   3-07-88   5:10a
    BSEERR   H       20940   3-07-88   5:10a
    BSESUB   H       11512   3-07-88   5:10a
           35 file(s)     119000 bytes

     Directory of A:\INCLMT\SYS

    .            <DIR>       3-07-88   5:10a
    ..           <DIR>       3-07-88   5:10a
    LOCKING  H         573   3-07-88   5:10a
    STAT     H        1517   3-07-88   5:10a
    TIMEB    H         852   3-07-88   5:10a
    TYPES    H         849   3-07-88   5:10a
    UTIME    H        1073   3-07-88   5:10a
            7 file(s)       4864 bytes

    Total files listed:
           57 file(s)    1155882 bytes
                           41984 bytes free

### PACKING.LST

	                           PACK525.LST File
	
	         Files for the Microsoft(R) C Optimizing Compiler Version 5.10
	
	             (C) Copyright Microsoft Corporation, 1987, 1988
	
	
	This file describes the parts of the Microsoft(R) C Optimizing Compiler,
	Version 5.10 package.
	
	
	Disk 1 : Setup Disk
	
	File                    Description
	----                    -----------
	README.DOC              Release notes for compiler
	UTILITY.DOC             Release notes for Microsoft CodeView(R) and utilities
	PACKING.LST             List of files in this product (this file)
	CL.EXE                  Real-mode C driver program
	CL.HLP                  Driver help
	CL.ERR                  Driver error messages
	C1.EXE                  Real-mode compiler pass 1
	C23.ERR                 Error messages for compiler passes 2 and 3
	SETUP.EXE               Setup program
	SETUP.DOC               Release notes for setup program
	
	
	Disk 2 : Include Files and Start-up Source Code
	
	File                    Description
	----                    -----------
	INCLUDE\ASSERT.H        Include file
	INCLUDE\BIOS.H          "
	INCLUDE\BSE.H           "
	INCLUDE\BSEDOS.H        "
	INCLUDE\BSEERR.H        "
	INCLUDE\BSESUB.H        "
	INCLUDE\CONIO.H         "
	INCLUDE\CTYPE.H         "
	INCLUDE\DIRECT.H        "
	INCLUDE\DOS.H           "
	INCLUDE\ERRNO.H         "
	INCLUDE\FCNTL.H         "
	INCLUDE\FLOAT.H         "
	INCLUDE\GRAPH.H         "
	INCLUDE\IO.H            "
	INCLUDE\LIMITS.H        "
	INCLUDE\MALLOC.H        "
	INCLUDE\MATH.H          "
	INCLUDE\MEMORY.H        "
	INCLUDE\OS2.H           "
	INCLUDE\OS2DEF.H        "
	INCLUDE\PROCESS.H       "
	INCLUDE\SEARCH.H        "
	INCLUDE\SETJMP.H        "
	INCLUDE\SHARE.H         "
	INCLUDE\SIGNAL.H        "
	INCLUDE\STDARG.H        "
	INCLUDE\STDDEF.H        "
	INCLUDE\STDIO.H         "
	INCLUDE\STDLIB.H        "
	INCLUDE\STRING.H        "
	INCLUDE\TIME.H          "
	INCLUDE\VARARGS.H       "
	
	INCLUDE\SYS\LOCKING.H   "
	INCLUDE\SYS\STAT.H      "
	INCLUDE\SYS\TIMEB.H     "
	INCLUDE\SYS\TYPES.H     "
	INCLUDE\SYS\UTIME.H     "
	
	STARTUP\README.DOC      Information about start-up source code
	STARTUP\MAKEFILE        Makefile for start-up source code
	STARTUP\STARTUP.BAT     Batch file for building start-up file
	STARTUP\FILE2.H         C and MASM include file
	STARTUP\MSDOS.H         "
	STARTUP\REGISTER.H      "
	STARTUP\CMACROS.INC     "
	STARTUP\MSDOS.INC       "
	STARTUP\BRKCTL.INC      "
	STARTUP\VERSION.INC     "
	STARTUP\CHKSTK.ASM      Common start-up source code
	STARTUP\CHKSUM.ASM      "
	STARTUP\CRT0FP.ASM      "
	STARTUP\FMSGHDR.ASM     "
	STARTUP\SETARGV.ASM     "
	STARTUP\_FILE.C         "
	STARTUP\NULBODY.C       "
	STARTUP\WILD.C          "
	
	STARTUP\DOS\CRT0.ASM      DOS start-up source code
	STARTUP\DOS\CRT0DAT.ASM   "
	STARTUP\DOS\CRT0MSG.ASM   "
	STARTUP\DOS\EXECMSG.ASM   "
	STARTUP\DOS\NMSGHDR.ASM   "
	STARTUP\DOS\STDALLOC.ASM  "
	STARTUP\DOS\STDARGV.ASM   "
	STARTUP\DOS\STDENVP.ASM   "
	STARTUP\DOS\NULBODY.LNK   Linker command file for testing start-up code
	
	STARTUP\OS2\CRT0.ASM      OS2 start-up source code
	STARTUP\OS2\CRT0DAT.ASM   "
	STARTUP\OS2\CRT0MSG.ASM   "
	STARTUP\OS2\EXECMSG.ASM   "
	STARTUP\OS2\NMSGHDR.ASM   "
	STARTUP\OS2\STDALLOC.ASM  "
	STARTUP\OS2\STDARGV.ASM   "
	STARTUP\OS2\STDENVP.ASM   "
	STARTUP\OS2\NULBODY.LNK   Linker command file for testing startup
	
	
	Disk 3 : Compiler Disk 1
	
	File                    Description
	----                    -----------
	C1.ERR                  Error messages for compiler pass 1
	C1L.EXE                 Real-mode large-model version of C1.EXE
	C3.EXE                  Real-mode compiler pass 3
	ERRMSG.DOC              Notes on error messages for ALL software
	FPEXCEPT.DOC            Notes on floating-point exception handling
	
	PATCH\PATCH320.DOC      Notes on patch for PC-DOS 3.20
	PATCH\PATCH87.DOC       Notes on patch for MS-DOS 3.20
	PATCH\PATCH87.EXE       Patch for MS-DOS 3.20
	PATCH\SETRHS.EXE        Patch for PC-DOS 3.20
	PATCH\RMRHS.EXE         Support file for PC-DOS 3.20 patch
	PATCH\STKPAT.BAT        "
	PATCH\STKPAT.SCR        "
	PATCH\OS2PATCH.DOC      Notes on patch for OS/2
	PATCH\OS2PATCH.EXE      OS/2 patch installation program
	PATCH\PTRACE87.PAT      Patch for "7" command of OS/2 CodeView
	
	
	Disk 4 : Compiler Disk 2
	
	File                    Description
	----                    -----------
	C2.EXE                  Real-mode compiler pass 2
	FIXSHIFT.COM            Program to fix ROM BIOS bug for QuickC
	MSHERC.COM              Hercules(R) graphics support program
	MTDYNA.DOC              Notes on multiple-thread programming
	QC.HLP                  QuickC on-line help
	QLIB.EXE                Utility for building Quick libraries
	QLIB.INI                Initialization for QLIB.EXE
	QLIB.DOC                Notes on using QLIB.EXE
	SETENV.EXE              Environment Expansion Utility
	
	
	Disk 5 : Utilities Disk 1
	
	File                    Description
	----                    -----------
	ERROUT.EXE              STDERR Redirection Utility
	EXEHDR.EXE              Segmented EXE Header utility
	EXEMOD.EXE              EXE File Header Utility
	EXEPACK.EXE             EXE File Compression Utility
	IMPLIB.EXE              Import Library Manager
	LIB.EXE                 Library Manager
	LINK.EXE                Segmented-Executable Linker
	MAKE.EXE                Program Maintenance Utility
	MOUSE.COM               Mouse support program
	README.QC               Release notes for QuickC
	
	
	Disk 6 : Utilities Disk 2
	
	File                    Description
	----                    -----------
	BIND.EXE                Binding utility
	CALLTREE.EXE
	ECH.EXE                 Character-echoing utility used by Microsoft Editor
	EXP.EXE                 Expunge utility (used with RM.EXE)
	M.EXE                   Microsoft Editor for real mode and DOS
	MEGREP.EXE              Bound file-searching utility
	RM.EXE                  File-removing utility
	UNDEL.EXE               File-recovery utility
	
	EXT\EXT.DOC             Notes on Microsoft Editor extensions and support files
	EXT\EXT.H               Support file for Microsoft Editor extensions
	EXT\EXTHDR.OBJ          "
	EXT\EXTHDRP.OBJ         "
	EXT\SKEL.C              "
	EXT\SKEL.DEF            "
	EXT\WS.DLL              Protected-mode extension file
	EXT\WS.ZXT              Real-mode/DOS extension file
	
	INI\BRIEF.INI           BRIEF(R) initialization file for Microsoft Editor
	INI\EPSILON.INI         Epsilon(TM) configuration file for Microsoft Editor
	INI\QUICK.INI           Quick-product configuration file for Microsoft Editor
	
	
	Disk 7 : Small and Medium Model Libraries Disk
	
	File                    Description
	----                    -----------
	MLIBCR.LIB              Medium-model library
	MLIBFA.LIB              Medium-model alternate-math library
	MVARSTCK.OBJ            Medium-model competing-heap/stack object
	SLIBCR.LIB              Small model library
	SLIBFA.LIB              Small-model alternate-math library
	SVARSTCK.OBJ            Small-model competing-heap/stack object file
	
	
	Disk 8 : Compact and Large Model Libraries Disk
	
	File                    Description
	----                    -----------
	CLIBCR.LIB              Compact-model library
	CVARSTCK.OBJ            Compact-model competing-heap/stack object
	LLIBCR.LIB              Large-model library
	LLIBFA.LIB              Large-model alternate-math library
	LVARSTCK.OBJ            Large-model competing-heap/stack object file
	
	
	Disk 9 : Floating Point Libraries
	
	File                    Description
	----                    -----------
	EM.LIB                  Emulator library
	87.LIB                  Math-coprocessor library
	GRAPHICS.LIB            Graphics library
	DOSCALLS.LIB            OS/2 support library
	LIBH.LIB                General helper library
	CLIBFA.LIB              Compact-model alternate-math library
	CLIBFP.LIB              Compact-model floating-point library
	LLIBFP.LIB              Large-model floating-point library
	MLIBFP.LIB              Medium-model floating-point library
	SLIBFP.LIB              Small-model floating point library
	BINMODE.OBJ             Binary-mode I/O object file
	QUICKLIB.OBJ            QuickC library helper object file
	SETARGV.OBJ             Wild-card processing object file
	
	FORTRAN\F4COMPAT.BAT    Batch file for making FORTRAN 4.x-compatible libraries
	FORTRAN\LDBGMSG.OBJ     Objects for making FORTRAN 4.x-compatible libraries
	FORTRAN\MDBGMSG.OBJ
	
	
	Disk 10 : Microsoft(R) QuickC(TM)
	
	File                    Description
	----                    -----------
	QC.EXE                  QuickC programming environment
	QCL.EXE                 Driver for Microsoft QuickC(TM) Compiler
	QCL.HLP                 QuickC driver help
	
	
	Disk 11 : Microsoft CodeView(R) with Tutorial
	
	File                    Description
	----                    -----------
	CV.EXE                  CodeView debugger for DOS and OS/2 real mode
	SAMPLE\CODEVIEW.DOC     Notes on CodeView demo
	SAMPLE\DEMOB.BAT        Sample batch file for CodeView
	SAMPLE\SAMPLE.BAT       "
	SAMPLE\ADAPT.BAT        "
	SAMPLE\MENU.BAT         "
	SAMPLE\LIFEB.BAT        "
	SAMPLE\LIFEEB.BAT       "
	SAMPLE\LIFE.C           Source file for CodeView demo
	SAMPLE\LIFE.EXE         Executable file for CodeView demo
	SAMPLE\LIFE.R           Support file for CodeView demo
	SAMPLE\C_AUTO.CV        "
	SAMPLE\E_AUTO.CV        "
	SAMPLE\L_AUTO.CV        "
	SAMPLE\M_AUTO.CV        "
	SAMPLE\Q_AUTO.CV        "
	SAMPLE\S_AUTO.CV        "
	SAMPLE\RESPOND.COM      "
	SAMPLE\S1.@@@           "
	SAMPLE\S2.@@@           "
	SAMPLE\S3.@@@           "
	SAMPLE\S4.@@@           "
	SAMPLE\S5.@@@           "
	SAMPLE\S6.@@@           "
	SAMPLE\S7.@@@           "
	SAMPLE\S8.@@@           "
	SAMPLE\S9.@@@           "
	SAMPLE\S12.@@@          "
	SAMPLE\S13.@@@          "
	SAMPLE\S14.@@@          "
	
	
	Disk 12 : Utilities Disk 3
	
	File                    Description
	----                    -----------
	CV.HLP                  CodeView help
	CVPACK.EXE              CodeView information-packing utility
	EXEC.EXE                Utility used only by ILINK.EXE
	ILINK.EXE               Microsoft Incremental linker (bound)
	LINK.EXE                Linker for DOS and real mode
	
	SOURCE\SAMPLES.DOC      Notes on sample C programs
	SOURCE\CFLOW.C          QuickC demonstration (real and protected mode)
	SOURCE\CFLOW.DOC        Notes on CFLOW.C program
	SOURCE\DEMO.C           Simple demonstration program (real and protected mode)
	SOURCE\EMOEM.ASM        8087 customization module
	SOURCE\GRDEMO.C         Graphics demonstration program (real mode/DOS only)
	SOURCE\SIEVE.C          Register sieve demonstration program (all modes)
	SOURCE\SORTDEMO.C       Sort methods demonstration program (protected mode,
	                            but this program can be bound for DOS/real mode)
	
	
	Disk 13 : Microsoft CodeView, Editor, and Compiler for OS/2 (High Density)
	
	File                    Description
	----                    -----------
	CVP.EXE                 CodeView debugger for OS/2 protected mode
	CVP.HLP                 Help for CVP.EXE
	MEP.EXE                 Microsoft Editor for OS/2 protected mode
	CL.EXE                  Compiler driver for OS/2 protected mode
	C1.EXE                  Compiler passes
	C1L.EXE                 "
	C2.EXE                  "
	C3.EXE                  "
	CL.ERR                  Compiler error messages
	CL.HLP                  Compiler help
	C1.ERR                  Error messages for compiler pass 1
	C23.ERR                 Error messages for compiler passes 2 and 3
	BINDC.BAT               Batch file for binding compiler, DOS/real-mode version
	BINDC.CMD               Batch file for binding compiler, OS/2 version
	
	INCLMT\ASSERT.H         Include file
	INCLMT\BIOS.H           "
	INCLMT\BSE.H            "
	INCLMT\BSEDOS.H         "
	INCLMT\BSEERR.H         "
	INCLMT\BSESUB.H         "
	INCLMT\CONIO.H          "
	INCLMT\CTYPE.H          "
	INCLMT\DIRECT.H         "
	INCLMT\DOS.H            "
	INCLMT\ERRNO.H          "
	INCLMT\FCNTL.H          "
	INCLMT\FLOAT.H          "
	INCLMT\IO.H             "
	INCLMT\LIMITS.H         "
	INCLMT\MALLOC.H         "
	INCLMT\MATH.H           "
	INCLMT\MEMORY.H         "
	INCLMT\OS2.H            "
	INCLMT\OS2DEF.H         "
	INCLMT\PROCESS.H        "
	INCLMT\SEARCH.H         "
	INCLMT\SETJMP.H         "
	INCLMT\SHARE.H          "
	INCLMT\SIGNAL.H         "
	INCLMT\STDARG.H         "
	INCLMT\STDDEF.H         "
	INCLMT\STDIO.H          "
	INCLMT\STDLIB.H         "
	INCLMT\STRING.H         "
	INCLMT\TIME.H           "
	INCLMT\VARARGS.H        "
	
	INCLMT\SYS\LOCKING.H    "
	INCLMT\SYS\STAT.H       "
	INCLMT\SYS\TIMEB.H      "
	INCLMT\SYS\TYPES.H      "
	INCLMT\SYS\UTIME.H      "
	
	
	Disk 14 : Libraries for OS/2 (High Density)
	
	File                    Description
	----                    -----------
	API.LIB                 Applications Programming Interface (API) library
	APILMR.OBJ              Supporting object for real-mode API programs
	CLIBCP.LIB              Compact-model protected-mode C library
	MLIBCP.LIB              Medium-model protected-mode C library
	LLIBCP.LIB              Large-model protected-mode C library
	SLIBCP.LIB              Small-model protected-mode C library
	CDLLSUPP.LIB            Supplemental dynamic-link support library
	LLIBCDLL.LIB            Large-model single-thread DLL support library
	LLIBCMT.LIB             Statically linked, multiple-thread library
	CDLLOBJS.DEF            Module-definition file with entry points for all
	                            C functions.
	CDLLOBJS.LIB            C run-time library objects
	CDLLOBJS.CMD
	CRTEXE.OBJ              Start-up code for .EXE files
	CRTDLL.OBJ              Start-up code for .DLL files
	CRTLIB.OBJ              Start-up code for C run-time
	
	EXAMPLE\STMAIN.C        Sample main program (single-thread version)
	EXAMPLE\STMAIN.DEF      Module-definition file for STMAIN.C
	EXAMPLE\STDLL.C         Sample dynamic-link library file
	EXAMPLE\STDLL.DEF       Module-definition file for STDLL.C
	EXAMPLE\MKSTDLL.CMD     Batch file for making single-thread dynamic-link libr'y
	
	EXAMPLE\MTMAIN.C        Sample main program (multiple-thread version)
	EXAMPLE\MTMAIN.DEF      Module-definition file for MTMAIN.C
	EXAMPLE\MTDLL.C         Sample dynamic-link library file (multiple-thread)
	EXAMPLE\MTDLL.DEF       Module-definition file for MTDLL.C
	EXAMPLE\MKMTDLL.CMD     Batch file for making multi-thread dynamic-link library
	
	EXAMPLE\MHELLO.C        Multiple-thread demonstration program
	EXAMPLE\MKMHELLO.CMD    Batch file for building MHELLO
	
	EXAMPLE\SNAP.C          Protected-mode screen capture demonstration program
	EXAMPLE\MAKESNAP.CMD    Batch file for building SNAP demonstration program

{% include gallery/documents.html width="200" height="260" %}
