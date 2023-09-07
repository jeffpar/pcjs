---
layout: page
title: COMPAQ MS-DOS 2.11
permalink: /software/pcx86/sys/dos/compaq/2.11/
redirect_from: /disks/pcx86/dos/compaq/2.11/
machines:
  - id: ibm5160-compaq211
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    autoMount:
      A:
        name: COMPAQ MS-DOS 2.11
      B:
        name: None
    autoType: $date\r$time\r
---

Released in 1984 by COMPAQ Computer Corp, this early version of MS-DOS displays the following messages on boot:

    The COMPAQ Personal Computer MS-DOS                                             
    Version 2.11                                                                    
                                                                                    
    (C) Copyright COMPAQ Computer Corp. 1982, 83, 84                                
    (C) Copyright Microsoft 1981, 82, 83                                            

A directory listing of the diskette is provided [below](#directory-of-compaq-ms-dos-211).  We also have copies of the original [COMPAQ MS-DOS Version 2 Documentation](#documents).

{% include machine.html id="ibm5160-compaq211" %}

### Directory of COMPAQ MS-DOS 2.11

     Volume in drive A is COMPAQ DOS
     Directory of A:\

    IBMBIO   COM*     5120   5-30-84  12:00p
    IBMDOS   COM*    17408   5-30-84  12:00p
    COMMAND  COM     18272   5-30-84  12:00p
    ANSI     SYS      1593   5-30-84  12:00p
    FORMAT   COM      6496   5-30-84  12:00p
    CHKDSK   COM      6468   5-30-84  12:00p
    SYS      COM      1600   5-30-84  12:00p
    DISKCOPY COM      2122   5-30-84  12:00p
    DISKCOMP COM      1850   5-30-84  12:00p
    COMP     COM      2259   5-30-84  12:00p
    EDLIN    COM      8096   5-30-84  12:00p
    MODE     COM      3342   5-30-84  12:00p
    FDISK    COM      5760   5-30-84  12:00p
    BACKUP   COM      5097   5-30-84  12:00p
    RESTORE  COM      5217   5-30-84  12:00p
    PRINT    COM      4506   5-30-84  12:00p
    RECOVER  COM      2439   5-30-84  12:00p
    ASSIGN   COM       946   5-30-84  12:00p
    TREE     COM      2122   5-30-84  12:00p
    GRAPHICS COM       702   5-30-84  12:00p
    SORT     EXE      1632   5-30-84  12:00p
    FIND     EXE      6331   5-30-84  12:00p
    MORE     COM      4380   5-30-84  12:00p
    BASIC    COM      1074   5-30-84  12:00p
    BASICA   COM      1072   5-30-84  12:00p
    BASICA   EXE     64240   5-30-84  12:00p
    EXE2BIN  EXE      1649   5-30-84  12:00p
    LINK     EXE     42368   5-30-84  12:00p
    DEBUG    COM     12171   5-30-84  12:00p
    DEMO     BAT        14   5-30-84  12:00p
    DEMO     BAS      5447   5-30-84  12:00p
    DEMO1    BAS     15114   5-30-84  12:00p
    DEMO2    BAS     15261   5-30-84  12:00p
    DEMO3    BAS     20987   5-30-84  12:00p
    DEMO4    BAS      4977   5-30-84  12:00p
    USA      DAT     16128   5-30-84  12:00p
    TEST     EXE     19502   5-30-84  12:00p
    INTEREST BAS       384   5-30-84  12:00p
    WORDS             1306   5-30-84  12:00p
           39 file(s)     335452 bytes
                            7168 bytes free

### COMPAQ MS-DOS 2.11 Boot Sector

Unlike COMPAQ's 1.x releases, which used system files `IOSYS.COM` and `MSDOS.COM`, COMPAQ switched to IBM's naming convention: `IBMBIO.COM` and `IBMDOS.COM`.  However, COMPAQ opted to use an OEM signature of `CCC  2.1` instead of `IBM  2.0`.

The boot sector of the COMPAQ MS-DOS 2.11 disk image contains the following bytes:

    00000000  eb 35 90 43 43 43 20 20  32 2e 31 00 02 02 01 00  |.5.CCC  2.1.....|
    00000010  02 70 00 d0 02 fd 02 00  09 00 02 00 00 00 df 02  |.p..............|
    00000020  25 02 09 2a ff 50 f6 00  02 00 00 00 00 00 00 00  |%..*.P..........|
    00000030  00 be 8c 01 e9 15 01 c4  5c 08 33 ed b8 c0 07 8e  |........\.3.....|
    00000040  d8 0a d2 79 12 89 1e 29  00 8c 06 2b 00 88 16 2d  |...y...)...+...-|
    00000050  00 c7 06 2f 00 02 00 8e  c5 8e d5 bc 00 7c fc bf  |.../.........|..|
    00000060  78 00 b8 1e 00 ab 8c d8  ab a1 16 00 d1 e0 40 01  |x.............@.|
    00000070  06 29 00 11 2e 2b 00 e8  67 00 bb 00 05 53 b0 01  |.)...+..g....S..|
    00000080  e8 94 00 5f be 76 01 b9  0b 00 f3 a6 75 a3 83 c7  |..._.v......u...|
    00000090  15 b1 0b f3 a6 75 9a a1  11 00 b1 04 d3 e8 01 06  |.....u..........|
    000000a0  29 00 11 2e 2b 00 ff 36  29 00 c4 1e 72 01 e8 30  |)...+..6)...r..0|
    000000b0  00 00 06 2e 00 e8 5f 00  01 06 29 00 11 2e 2b 00  |......_...)...+.|
    000000c0  80 3e 2e 00 11 72 e7 cd  11 d1 e0 d1 e0 80 e4 03  |.>...r..........|
    000000d0  b9 02 00 74 04 fe c4 8a  cc a1 2f 00 5b ff 2e 72  |...t....../.[..r|
    000000e0  01 a1 18 00 f6 26 1a 00  91 a1 29 00 8b 16 2b 00  |.....&....)...+.|
    000000f0  f7 f1 92 8b 0e 18 00 f6  f1 fe c4 86 cc d0 ce d0  |................|
    00000100  ce 0a ce 8a ea 8a f0 8a  16 2d 00 51 80 e1 3f 2a  |.........-.Q..?*|
    00000110  e1 fe c4 8a c4 59 c3 98  96 56 bf 05 00 b8 01 02  |.....Y...V......|
    00000120  cd 13 72 0a 80 c7 02 fe  c1 4e 75 f1 58 c3 80 fc  |..r......Nu.X...|
    00000130  11 75 0f 1e b8 00 c8 8e  d8 81 3e ea 1f 43 4f 1f  |.u........>..CO.|
    00000140  74 e2 33 c0 cd 13 4f 75  d4 be d6 01 e8 1d 00 be  |t.3...Ou........|
    00000150  ac 01 e8 17 00 33 c0 cd  16 26 c7 06 72 04 34 12  |.....3...&..r.4.|
    00000160  ea 00 00 ff ff b4 0e bb  07 00 cd 10 ac 3c 24 75  |.............<$u|
    00000170  f4 c3 00 00 70 00 49 42  4d 42 49 4f 20 20 43 4f  |....p.IBMBIO  CO|
    00000180  4d 49 42 4d 44 4f 53 20  20 43 4f 4d 0a 0d 4e 6f  |MIBMDOS  COM..No|
    00000190  6e 2d 53 79 73 74 65 6d  20 64 69 73 6b 20 6f 72  |n-System disk or|
    000001a0  20 64 69 73 6b 20 65 72  72 6f 72 24 0a 0d 52 65  | disk error$..Re|
    000001b0  70 6c 61 63 65 20 61 6e  64 20 73 74 72 69 6b 65  |place and strike|
    000001c0  20 61 6e 79 20 6b 65 79  20 77 68 65 6e 20 72 65  | any key when re|
    000001d0  61 64 79 0a 0d 24 0a 0d  44 69 73 6b 20 62 6f 6f  |ady..$..Disk boo|
    000001e0  74 20 66 61 69 6c 75 72  65 24 43 6f 70 72 2e 20  |t failure$Copr. |
    000001f0  43 4f 4d 50 41 51 20 31  39 38 33 2c 38 34 55 aa  |COMPAQ 1983,84U.|

<!-- Documentation -->

{% include gallery/documents.html %}
