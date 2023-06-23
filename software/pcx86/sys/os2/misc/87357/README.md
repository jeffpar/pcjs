---
layout: page
title: "OS/2 FOOTBALL Boot Disk (v4.41.00)"
permalink: /software/pcx86/sys/os2/misc/87357/
redirect_from: /disks/pcx86/os2/misc/football/87357/
machines:
  - id: deskpro386
    type: pcx86
    debugger: true
    config: /machines/pcx86/compaq/deskpro386/ega/2048kb/debugger/machine.xml
    autoMount:
      A:
        name: OS/2 FOOTBALL (v4.41.00)
---

This disk contained an updated version of [OS/2 FOOTBALL Boot Disk (v7.68.17)](/software/pcx86/sys/os2/misc/87058/).
It was built in December 1987, using final OS/2 1.0 sources merged with assorted FOOTBALL changes, and although 
it was originally assigned version number 1.3, this version of OS/2 would ultimately become 2.0.

It crashes on an 80286, jumping to invalid code immediately after performing a processor check.  On an 80386,
the following version banner is displayed:

	Operating System/2  Version 1.30
	(C) Copyright Microsoft Corp. 1981, 1987, 1988.
	(C) Copyright IBM Corp. 1981, 1987. All rights reserved.
	
	Internal revision 4.41.00, 12/02/87

The numbering of revisions must have been, um, revised, because despite the lower revision (4.41.00 vs. 7.68.17),
it *is* newer than the 7.68.17 prototype.  This is confirmed by the boot message (12/02/87), the file dates (12-23-87)
and the higher version number (1.3).

A directory listing of this disk is provided [below](#directory-of-os2-football-boot-disk-v44100).

{% include machine.html id="deskpro386" %}

### Directory of OS/2 FOOTBALL (v4.41.00)

     Volume in drive A has no label
     Directory of A:\

    IBMBIO   COM      4096  12-23-87  11:48a
    IBMDOS   COM    316071  12-23-87   4:59p
    IBMDOS   SYM     59156  12-23-87   4:59p
    OSO001   MSG     65992  12-23-87  11:46a
    SHELL    EXE     12990  12-23-87   5:16p
    HARDERR  EXE     16752  12-23-87   3:16p
    SWAPPER  EXE      4148  12-23-87   1:20p
    CMD      EXE     60736  12-23-87   1:16p
    COMMAND  COM     25564  12-23-87   1:02p
    COUNTRY  SYS     14632  12-23-87   4:17p
    SINGLEQ  SYS      3688  12-23-87   3:47p
    MSG      DLL      6602  12-23-87   1:17p
    NLS      DLL      5160  12-23-87   1:20p
    SESMGR   DLL     24773  12-23-87   4:39p
    ANSICALL DLL      3627  12-23-87   2:34p
    BKSCALLS DLL      7204  12-23-87   2:38p
    BMSCALLS DLL      3090  12-23-87   2:38p
    BVSCALLS DLL     30747  12-23-87   2:47p
    DOSCALL1 DLL      8813  12-23-87   2:51p
    KBDCALLS DLL      6709  12-23-87   2:53p
    MONCALLS DLL      6836  12-23-87   2:53p
    MOUCALLS DLL      5683  12-23-87   2:54p
    QUECALLS DLL     11237  12-23-87   2:59p
    VIOCALLS DLL     13933  12-23-87   3:19p
    CLOCK01  SYS      2761  12-23-87   1:21p
    DISK01   SYS     18792  12-23-87   1:24p
    KBD01    SYS     14835  12-23-87   1:31p
    PRINT01  SYS      7818  12-23-87   1:38p
    SCREEN01 SYS      1572  12-23-87   1:39p
    COM01    SYS      8756  12-23-87   1:45p
    EGA      SYS      2111  12-23-87   1:47p
    EXTDSKDD SYS      1877  12-23-87   1:48p
    CONFIG   SYS       149  12-23-87   4:42p
           33 file(s)     776910 bytes
                          427008 bytes free
