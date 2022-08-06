---
layout: page
title: IBM PC DOS 4.00
permalink: /software/pcx86/sys/dos/ibm/4.00/
redirect_from: /disks/pcx86/dos/ibm/4.00/
machines:
  - id: ibm5170-pcdos400
    type: pcx86
    config: /machines/pcx86/ibm/5170/ega/2048kb/rev3/machine.xml
    autoMount:
      A:
        name: PC DOS 4.00 (Disk 1)
      B:
        name: None
---

PC DOS 4.00 was released in July 1988.

A [Feature Summary](#feature-summary), along with [Directory Listings](#directory-of-pc-dos-400-disk-1) of the five
360Kb distribution diskettes, are provided below.

{% include machine.html id="ibm5170-pcdos400" %}

### Feature Summary

New features:

- SHARE loaded for FCB operations on hard disks greater than 32MB
- IFS driver support
- Disk buffers could be allocated in expanded memory (BUFFERS /X)
- DPB, SFT and CDS structures extended
- New internal version table
- DOS swappable data area changed
- Program names added to MCBs
- System block sub-MCB headers added (used by MEM)
- Most commands use new message retriever (allows message text separation for translation purposes)

Another significant change in DOS 4.00 was the ability to update the system files (IBMBIO.COM and IBMDOS.COM in
PC DOS, or IO.SYS and MSDOS.SYS in MS-DOS) of any boot disk, by moving the first two directory entries (and the contents
of the first three data sectors) as needed to make room for the new system files.

The SYS command in older versions of DOS would report "No room for system on destination disk" if the first
two directory entries (or the first three data sectors) were unavailable.  However, after using the DOS 4.00
SYS command, it usually became possible to install older DOS versions as well.

Learn more about the history of the SYS command from [Microsoft Support](https://jeffpar.github.io/kbarchive/kb/066/Q66530/).

New internal commands:

- TRUENAME

New external commands:

- FILESYS
- FORMAT /F (to specify disk size to format)
- IFSFUNC
- MEM

New CONFIG.SYS commands:

- COMMENT
- CPSW
- IFS
- INSTALL
- MULTITRACK
- REM
- SWITCHES

New device drivers:

- SMARTDRV.SYS (MS-DOS)
- XMA2EMS.SYS
- XMAEM.SYS

New support files:

- GRAPHICS.PRO

New functions:

- INT 21h functions 3305h, 5D0Bh, 5F05h-5F08h, 6507h, 6520h-6523h, 65A0h-65A3h, 69h-6Ch
- INT 2Fh multiplex function 1Ah (ANSI.SYS)

### Directory of PC DOS 4.00 (Disk 1)

     Volume in drive A has no label
     Directory of A:\

    IBMBIO   COM*    32816   8-03-88  12:00p
    IBMDOS   COM*    36000   8-03-88  12:00p
    COMMAND  COM     37637   6-17-88  12:00p
    AUTOEXEC BAT        39   6-17-88  12:00p
    CONFIG   SYS        96   6-17-88  12:00p
    COUNTRY  SYS     12838   6-17-88  12:00p
    DISKCOPY COM     10428   6-17-88  12:00p
    DISPLAY  SYS     15741   6-17-88  12:00p
    FDISK    COM     70151   6-17-88  12:00p
    FORMAT   COM     22923   6-17-88  12:00p
    KEYB     COM     14759   6-17-88  12:00p
    KEYBOARD SYS     23360   8-03-88  12:00p
    REPLACE  EXE     17199   6-17-88  12:00p
    SELECT   COM      3674   8-03-88  12:00p
    SELECT   HLP     27562   8-03-88  12:00p
    SELECT   PRT      1594   8-03-88  12:00p
    SYS      COM     11472   6-17-88  12:00p
    012345   678       109   6-17-88  12:00p
    DOS00I   400*        0   6-17-88  12:00p
           19 file(s)     338398 bytes
                           17408 bytes free

### Directory of PC DOS 4.00 (Disk 2)

     Volume in drive A has no label
     Directory of A:\

    COMMAND  COM     37637   6-17-88  12:00p
    ASSIGN   COM      5785   6-17-88  12:00p
    ATTRIB   EXE     18247   6-17-88  12:00p
    BASIC    COM      1065   6-17-88  12:00p
    BASICA   COM     36285   6-17-88  12:00p
    COMP     COM      9491   6-17-88  12:00p
    DEBUG    COM     21606   6-17-88  12:00p
    DISKCOMP COM      9889   6-17-88  12:00p
    EDLIN    COM     14249   6-17-88  12:00p
    FILESYS  EXE     11125   6-17-88  12:00p
    FIND     EXE      5983   6-17-88  12:00p
    IFSFUNC  EXE     21653   8-03-88  12:00p
    JOIN     EXE     17457   6-17-88  12:00p
    LABEL    COM      4490   6-17-88  12:00p
    MEM      EXE     20133   6-17-88  12:00p
    MODE     COM     23056   8-03-88  12:00p
    MORE     COM      2166   6-17-88  12:00p
    MORTGAGE BAS      6207   6-17-88  12:00p
    SHARE    EXE     10301   8-03-88  12:00p
    SORT     EXE      5914   6-17-88  12:00p
    SUBST    EXE     18143   6-17-88  12:00p
    TREE     COM      6334   6-17-88  12:00p
    XCOPY    EXE     17087   6-17-88  12:00p
    DOS01I   400*        0   6-17-88  12:00p
           24 file(s)     324303 bytes
                           30208 bytes free

### Directory of PC DOS 4.00 (Disk 3)

     Volume in drive A has no label
     Directory of A:\

    COMMAND  COM     37637   6-17-88  12:00p
    CHKDSK   COM     17771   6-17-88  12:00p
    DISKCOPY COM     10428   6-17-88  12:00p
    PCIBMDRV MOS       295   6-17-88  12:00p
    PCMSDRV  MOS       961   6-17-88  12:00p
    PCMSPDRV MOS       801   6-17-88  12:00p
    PRINT    COM     14024   8-03-88  12:00p
    SHELL    CLR      4438   6-17-88  12:00p
    SHELL    HLP     65667   8-03-88  12:00p
    SHELL    MEU      4588   8-03-88  12:00p
    SHELLB   COM      3937   8-03-88  12:00p
    SHELLC   EXE    154377   8-03-88  12:00p
    DOSUTIL  MEU      6660   6-17-88  12:00p
    012345   678       109   6-17-88  12:00p
    DOS02I   400*        0   6-17-88  12:00p
           15 file(s)     321693 bytes
                           36352 bytes free

### Directory of PC DOS 4.00 (Disk 4)

     Volume in drive A has no label
     Directory of A:\

    IBMBIO   COM*    32816   8-03-88  12:00p
    IBMDOS   COM*    36000   8-03-88  12:00p
    COMMAND  COM     37637   6-17-88  12:00p
    ANSI     SYS      9148   6-17-88  12:00p
    APPEND   EXE     11186   8-03-88  12:00p
    COUNTRY  SYS     12838   6-17-88  12:00p
    DISPLAY  SYS     15741   6-17-88  12:00p
    DRIVER   SYS      5274   6-17-88  12:00p
    FASTOPEN EXE     16302   6-17-88  12:00p
    GRAFTABL COM     10271   6-17-88  12:00p
    GRAPHICS COM     16733   6-17-88  12:00p
    GRAPHICS PRO      9413   6-17-88  12:00p
    KEYB     COM     14759   6-17-88  12:00p
    KEYBOARD SYS     23360   8-03-88  12:00p
    MODE     COM     23056   8-03-88  12:00p
    NLSFUNC  EXE      6910   6-17-88  12:00p
    PRINTER  SYS     18946   6-17-88  12:00p
    RECOVER  COM     10732   6-17-88  12:00p
    VDISK    SYS      6376   6-17-88  12:00p
    4201     CPI      6404   6-17-88  12:00p
    4208     CPI       641   6-17-88  12:00p
    5202     CPI       402   6-17-88  12:00p
    DOS03I   400*        0   6-17-88  12:00p
           23 file(s)     324945 bytes
                           30720 bytes free

### Directory of PC DOS 4.00 (Disk 5)

     Volume in drive A has no label
     Directory of A:\

    BACKUP   COM     33754   6-17-88  12:00p
    EGA      CPI     49052   6-17-88  12:00p
    FORMAT   COM     22923   6-17-88  12:00p
    LCD      CPI     10592   6-17-88  12:00p
    MODE     COM     23056   8-03-88  12:00p
    RESTORE  COM     40030   6-17-88  12:00p
    SELECT   DAT     22453   8-03-88  12:00p
    SELECT   EXE     99545   8-03-88  12:00p
    XMAEM    SYS     19312   6-17-88  12:00p
    XMA2EMS  SYS     29249   8-03-88  12:00p
    DOS04L   400*        0   6-17-88  12:00p
           11 file(s)     349966 bytes
                            9216 bytes free

### Directory of PC DOS 4.00 (TechRef)

     Volume in drive A has no label
     Directory of A:\

    DEBUG    COM     21606   6-17-88  12:00p
    EXE2BIN  EXE      7973   6-17-88  12:00p
    LIB      EXE     47107   6-17-88  12:00p
    LINK     EXE    105406   6-17-88  12:00p
    VDISK    ASM     75571   6-17-88  12:00p
            5 file(s)     257663 bytes
                          102400 bytes free
