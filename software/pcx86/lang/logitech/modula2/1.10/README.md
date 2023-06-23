---
layout: page
title: Logitech Modula-2/86 Compiler 1.10
permalink: /software/pcx86/lang/logitech/modula2/1.10/
redirect_from:
  - /disks/pcx86/tools/logitech/modula2/1.10/
  - /apps/pcx86/1984/modula2/
machines:
  - id: ibm5160-msdos320
    type: pcx86
    state: state.json
    config: /machines/pcx86/ibm/5160/ega/256kb/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

Links to [Modula-2/86 Documentation](http://www.bitsavers.org/pdf/logitech/modula-2/):

- [Logitech Modula-2/86 v1.0 Manual](http://www.bitsavers.org/pdf/logitech/modula-2/Logitech_Modula-2_86_1.0_Feb84.pdf)
- [Logitech Modula-2/86 v2.0 Manual](http://www.bitsavers.org/pdf/logitech/modula-2/Modula-2_86_Ver_2.00_Users_Manual_Apr86.pdf)

The machine below demonstrates Modula-2/86. The compiler has been installed in an
IBM PC XT (Model 5160) with 640Kb RAM, an EGA Display, and a 10Mb Hard Disk containing
[MS-DOS 3.20](/software/pcx86/sys/dos/microsoft/3.20/) and [Microsoft C 4.00](/software/pcx86/lang/microsoft/c/4.00/).

PCjs has also archived some Modula-2 sample code.  See the "[FantasyLand](/blog/2017/07/03/)" PCjs blog post
for details.

We used the same hard disk installation procedure described in the Logitech Modula-2/86 v1.0 Manual:

- At the C:\&gt; prompt: `MKDIR M2BIN`
- Load diskette in drive A: `Modula-2/86 1.10 (1-System)`
- Copy the M2 binary to drive C: `COPY A:M2.EXE M2BIN`
- Run the installation batch file: `A:INSTALL1`
- Follow the on-screen instructions (e.g., `A:INSTALL2`)

Afterward, AUTOEXEC.BAT was modified to include `C:\M2BIN` in the PATH, along with the following `SET` commands:

    SET M2SYM=C:\M2LIB\SYM
    SET M2LNK=C:\M2LIB\LNK
    SET M2REF=C:\M2LIB\REF
    SET M2MAP=C:\M2LIB\MAP

Directory listings of the distribution diskettes are also provided [below](#directory-of-modula-286-110-1-system).

{% include machine.html id="ibm5160-msdos320" %}

### Directory of Modula-2/86 1.10 (1-System)

     Volume in drive A has no label
     Directory of A:\

    RTS      INC      7064  12-07-84  10:14a
    LOADER   ASM     19925  12-02-84   8:56p
    RTS      ASM     27299  12-07-84  10:27a
    TRANSFER ASM     35498  12-04-84  10:10p
    DBUG     ASM     15797  12-02-84   8:56p
    SERVICES ASM     34911  12-03-84   2:10p
    M2       EXE      8683  12-07-84  10:45a
    COMP     LNK      1622  12-03-84   9:20a
    COMP     MAP      1806  12-04-84   3:17p
    REALCONV DEF      2534  11-30-84  11:49a
    SYSTEM   DEF      6499  11-30-84  11:56a
    TERMINAL DEF      2151  11-30-84  11:57a
    TERMBASE DEF      4059  11-30-84  11:57a
    KEYBOARD DEF       870  11-30-84  11:37a
    DISPLAY  DEF       842  11-30-84  11:32a
    ASCII    DEF      1308  11-30-84   9:03a
    STORAGE  DEF      1812  11-30-84  11:54a
    CARDINAL DEF      1450  11-30-84  11:30a
    CONVERSI DEF      1479  11-30-84  11:31a
    CLOCK    DEF      1010  11-30-84  11:49a
    FILENAME DEF      1003  11-30-84  11:33a
    OPTIONS  DEF      2171  11-30-84  11:49a
    FILEMESS DEF       559  11-30-84  11:29a
    STRINGS  DEF      3095  11-30-84  12:21p
    NUMBERCO DEF      3120  11-30-84  12:13p
    DIRECTOR DEF      1902  11-30-84  11:50a
    PROGMESS DEF       430  11-30-84  12:40p
    DISKDIRE DEF      2777  11-30-84  11:31a
    DISKFILE DEF      1277  11-30-84  12:15p
    PROGRAM  DEF      3114  11-30-84  11:50a
    FILESYST DEF     19886  11-30-84  11:36a
    INOUT    DEF      5091  11-30-84  11:37a
    REALINOU DEF      1835  11-30-84  11:51a
    PROCESSE DEF      2407  11-30-84  11:49a
    RS232COD DEF      2820  11-30-84  11:52a
    RS232INT DEF      2721  11-30-84  12:13p
    RS232POL DEF      1972  11-30-84  11:53a
    COMPPARA MOD      6922  11-23-84   4:35p
    COMPPARA LNK       276  11-23-84   4:39p
    COMPPARA SYM      1094  11-19-84  12:30p
    COMPPARA DEF      7641  11-23-84   4:36p
    MATHLIB0 DEF      1117  11-30-84  11:38a
    BREAK    DEF      1856  11-30-84  11:49a
    DEVICES  DEF      3287  11-30-84   4:00p
    DISPLAY  MOD      1949   8-17-84   4:08p
    KEYBOARD MOD      4659  10-26-84   3:32p
    LINK     LNK      1658  12-03-84   9:26a
    LOOKUP   LNK      3892  11-21-84   5:40p
    M2COMP   LNK       430  11-23-84   4:42p
    PROCESSE MOD      3154   8-17-84  10:47p
    PUBLIC   LNK      5458  11-23-84   4:41p
    RELEASE  LNK       594  11-21-84   7:28p
    RS232COD MOD     10085  12-05-84  12:53p
    RS232POL MOD      5177  10-26-84   6:35p
    RS232INT MOD      9156  12-04-84  10:36p
    COMPFILE LNK      7926  11-21-84   5:43p
    INSTALL1 BAT       271   1-27-84  11:14a
    INSTALL2 BAT        30   2-19-84   9:55p
    INSTALLX BAT       852  10-16-84  11:25a
    INSTALL0 BAT       335   2-24-84   9:56a
    EXAMP1   MOD       182   2-01-84  11:39a
    EXAMP2   MOD      1642   1-29-84   8:46a
    CONFIG   SYS        23   2-29-84   9:40a
           63 file(s)     312465 bytes
                           18432 bytes free

### Directory of Modula-2/86 1.10 (2-Compiler)

     Volume in drive A has no label
     Directory of A:\

    M2COMP   LOD      6970  11-23-84   6:43p
    INIT     LOD     12960  12-10-84   4:31p
    SYMFILE  LOD      5872  11-23-84   6:44p
    PASS1    LOD     42734  12-04-84   3:28p
    PASS2    LOD     35866  12-07-84   2:00p
    PASS3    LOD     40782  12-09-84  12:31p
    PASS4    LOD    114082  12-10-84   4:18p
    LISTER   LOD     17664  12-07-84   8:34a
    COMP     LOD     23046  12-04-84   3:17p
    REALCONV SYM       204   7-28-84   7:23p
    MATHLIB0 SYM       512   7-19-84   7:30p
    DISKFILE SYM      1536   1-01-80  12:13p
    DISKDIRE SYM       512   1-01-80  12:14p
    PROGMESS SYM       596   8-17-84   7:36p
    PROGRAM  SYM       654   8-17-84   7:35p
    FILESYST SYM      3174  11-09-84  10:51p
    SYSTEM   SYM      1860   9-03-84   4:59p
    FILENAME SYM       256   1-01-80   4:02a
    CARDINAL SYM       256  12-08-83   2:30a
    CONVERSI SYM       384  12-08-83   2:30a
    TERMINAL SYM       316   8-17-84   5:54p
    FILEMESS SYM       384   1-01-80   5:48a
    KEYBOARD SYM       136   8-17-84   5:56p
    DISPLAY  SYM        86   8-17-84   5:56p
    ASCII    SYM       940   8-17-84   5:57p
    STORAGE  SYM       310   8-17-84   5:58p
    TERMBASE SYM       586   8-17-84   6:00p
    OPTIONS  SYM       384   1-01-80   4:24a
    STRINGS  SYM       512  12-01-83   2:52a
    NUMBERCO SYM       640  12-01-83   2:07a
    CLOCK    SYM       272   8-17-84   6:32p
    DIRECTOR SYM       434   9-16-84  12:13p
    INOUT    SYM      2048   7-19-84  12:19a
    REALINOU SYM       256   7-19-84  12:23a
    PROCESSE SYM       256  12-08-83   2:39a
    RS232COD SYM       384   1-01-80  12:15a
    RS232INT SYM       384   1-01-80  12:15a
    RS232POL SYM       256   1-01-80  12:15a
    BREAK    SYM       196   9-24-84  10:53a
    DEVICES  SYM       334  12-02-84  11:08p
           40 file(s)     319034 bytes
                           20480 bytes free

### Directory of Modula-2/86 1.10 (3-Linker)

     Volume in drive A has no label
     Directory of A:\

    LINK     LOD     29218  12-04-84   3:15p
    M2LINK   LOD     26544  12-08-84   7:16p
    M87MATH0 LNK      8690  11-21-84   6:16p
    SYSTEM   LNK      1162  11-21-84   5:06p
    ASCII    LNK       114  11-21-84   5:04p
    DISPLAY  LNK       278  11-21-84   5:05p
    TERMBASE LNK      1394  11-21-84   5:07p
    TERMINAL LNK       956  11-21-84   5:08p
    STORAGE  LNK      4120  11-21-84   5:10p
    CLOCK    LNK       476  11-21-84   5:11p
    KEYBOARD LNK       974  11-21-84   5:12p
    FILENAME LNK      2126  12-04-84   3:12p
    PROGRAM  LNK      6278  11-21-84   5:23p
    CARDINAL LNK      2342  11-21-84   5:14p
    CONVERSI LNK       798  11-21-84   5:15p
    OPTIONS  LNK      1102  11-21-84   5:16p
    FILEMESS LNK       882  11-21-84   5:17p
    STRINGS  LNK      1626  11-21-84   5:18p
    NUMBERCO LNK      1496  11-21-84   5:19p
    DIRECTOR LNK      1012  11-21-84   5:20p
    FILESYST LNK      7434  12-07-84   2:42p
    PROGMESS LNK      1642  11-21-84   5:27p
    DISKFILE LNK      6448  11-26-84  10:16a
    DISKDIRE LNK       820  11-21-84   5:31p
    C87REALI LNK      1152  11-21-84   5:48p
    PROCESSE LNK      1054  11-21-84   5:33p
    RS232COD LNK      1638  12-05-84  12:55p
    RS232POL LNK       706  11-21-84   5:37p
    RS232INT LNK      1536  12-04-84  10:37p
    INOUT    LNK      4396  11-21-84   5:32p
    E87REALS LNK      3004  11-21-84   5:59p
    M87REALS LNK      3638  12-07-84   7:10p
    E87MATH0 LNK      6046  11-21-84   6:10p
    E87REALI LNK      1230  11-21-84   5:50p
    C87REALC LNK      3312  12-02-84   5:16p
    E87REALC LNK      5474  12-02-84   5:09p
    C87REALS LNK       986  12-07-84   6:58p
    C87MATH0 LNK      2266  11-21-84   6:05p
    BREAK    LNK      1514  11-28-84   5:11p
    DEVICES  LNK       342  12-06-84   4:31p
           40 file(s)     146226 bytes
                          194560 bytes free

### Directory of Modula-2/86 1.10 (4-Debugger)

     Volume in drive A has no label
     Directory of A:\

    PMD      LOD     19110  12-03-84   1:33p
    M2PMD    LOD    102992  12-03-84   1:37p
    ASCII    REF       136  11-21-84   5:04p
    DBCLASS  LNK      1790  11-23-84   2:22p
    DISPLAY  REF       308  11-21-84   5:05p
    SYSTEM   REF      2336  11-21-84   5:06p
    TERMBASE REF      2424  11-21-84   5:07p
    TERMINAL REF      1036  11-21-84   5:08p
    STORAGE  REF      3916  11-21-84   5:10p
    CLOCK    REF       496  11-21-84   5:11p
    KEYBOARD REF       930  11-21-84   5:12p
    FILENAME REF      1664  12-04-84   3:12p
    CARDINAL REF      1438  11-21-84   5:14p
    CONVERSI REF       994  11-21-84   5:15p
    OPTIONS  REF      1366  11-21-84   5:16p
    FILEMESS REF      1692  11-21-84   5:17p
    STRINGS  REF      1550  11-21-84   5:18p
    NUMBERCO REF      1634  11-21-84   5:19p
    DIRECTOR REF      1184  11-21-84   5:20p
    PROGRAM  REF      7878  11-21-84   5:23p
    FILESYST REF      8264  12-07-84   2:42p
    PROGMESS REF      1480  11-21-84   5:27p
    DISKFILE REF      6778  11-26-84  10:16a
    DISKDIRE REF      1108  11-21-84   5:31p
    C87REALI REF      2000  11-21-84   5:48p
    PROCESSE REF       964  11-21-84   5:33p
    RS232COD REF      2214  12-05-84  12:55p
    RS232POL REF       948  11-21-84   5:37p
    RS232INT REF      2042  12-04-84  10:37p
    DBTYPE   LNK      4664  11-23-84   2:48p
    INOUT    REF      4312  11-21-84   5:32p
    E87MATH0 REF     11042  11-21-84   6:10p
    E87REALI REF      2014  11-21-84   5:50p
    C87REALC REF      2508  12-02-84   5:16p
    E87REALC REF      2522  12-02-84   5:09p
    DBLOAD   LNK      1380  11-23-84   2:35p
    C87MATH0 REF      3844  11-21-84   6:05p
    M87MATH0 REF     13024  11-21-84   6:16p
    BREAK    REF      3160  11-28-84   5:11p
    DEVICES  REF       564  12-06-84   4:31p
    DBXINOUT LNK      1234  11-26-84  11:06a
    DBXCLI   LNK      2792  12-03-84  11:53a
    PMD      LNK      1192  11-23-84   3:21p
           43 file(s)     234924 bytes
                          106496 bytes free
