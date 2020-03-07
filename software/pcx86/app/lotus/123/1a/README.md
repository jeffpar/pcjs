---
layout: page
title: Lotus 1-2-3 Release 1A
permalink: /software/pcx86/app/lotus/123/1a/
redirect_from: /disks/pcx86/apps/lotus/123/1a/
machines:
  - id: ibm5150-123-1a
    type: pcx86
    config: /devices/pcx86/machine/5150/cga/256kb/machine.xml
    autoMount:
      B:
        name: Lotus 1-2-3 1A (1-System)
    autoType: $date\r$time\rb:\r123\r
---

Lotus 1-2-3 Release 1A
----------------------

This version of 1-2-3 is known as **Release 1A**, which differs from the later
[Release 1A\*](/disks/pcx86/apps/lotus/123/1as/).  This version contained files dated `6-07-83`,
whereas [Release 1A\*](/disks/pcx86/apps/lotus/123/1as/) contained files dated `7-01-83`.

WARNING: These disk images are from [WinWorld](https://winworldpc.com/product/lotus-1-2-3/1x) and are not exact
copies of the original distribution disks.  We've tried to recreate the System Disk as it was originally distributed
(aside from the [Copy-Protection Patch](#copy-protection-patch)), but the other disks have been left as we found them:
original Lotus 1-2-3 files dated `6-07-83` along with a random mixture of PC DOS 1.10 and PC DOS 2.10 binaries
(eg, `COMMAND.COM`, `DISKCOPY.COM`, `DISKCOMP.COM`, etc.)

### Directory of Lotus 1-2-3 1A (1-System) (PATCHED)

	 Volume in drive A has no label
	 Directory of A:\

	IBMBIO   COM      1920 06-02-83   5:20p
	IBMDOS   COM      6400 06-02-83   5:20p
	123      EXE     89856 07-09-17   9:18a
	123      HLP    113416 06-07-83   1:23a
	123      CNF       256 06-07-83   1:23a
	LOTUS    COM       481 06-07-83   1:23a
	LTSLOAD  COM     10144 06-07-83   1:23a
	AUTOEXEC BAT        20 06-07-83   1:23a
	INSTALL  BAT       870 06-07-83   1:23a
	GD       DRV      2139 06-07-83   1:23a
	ID       DRV      5294 06-07-83   1:23a
	KB       DRV       352 06-07-83   1:23a
	PR       DRV       329 06-07-83   1:23a
	TD       DRV      5294 06-07-83   1:23a
	       14 file(s)     236771 bytes
	                       77824 bytes free

### Directory of Lotus 1-2-3 1A (2-Utility)

	 Volume in drive A has no label
	 Directory of A:\

	IBMBIO   COM      4736 10-20-83  12:00p
	IBMDOS   COM     17024 10-20-83  12:00p
	LOTUS    COM       481 06-07-83   1:23a
	LTSLOAD  COM     10144 06-07-83   1:23a
	FILEMGR  COM     17706 06-07-83   1:23a
	TRANSLAT COM     20187 06-07-83   1:23a
	VCWKS    EXE     20224 06-07-83   1:23a
	DIFWKS   EXE     18304 06-07-83   1:23a
	WKSDIF   EXE     14336 06-07-83   1:23a
	DBFWKS   EXE     16000 06-07-83   1:23a
	WKSDBF   EXE     16128 06-07-83   1:23a
	IBM0HERC DRV      5293 06-07-83   1:23a
	IBM0MONO DRV       745 06-07-83   1:23a
	IBM0B&W  DRV      5294 06-07-83   1:23a
	IBM0COLO DRV      5294 06-07-83   1:23a
	IBM1HERC DRV      2080 06-07-83   1:23a
	IBM1G1   DRV      2139 06-07-83   1:23a
	IBM1G2   DRV      2139 06-07-83   1:23a
	IBM2KB   DRV       352 06-07-83   1:23a
	IBM3PR   DRV       329 06-07-83   1:23a
	CPQ0TD   DRV       745 06-07-83   1:23a
	BOTH     BAT      1036 06-07-83   1:23a
	MONO     BAT      1021 06-07-83   1:23a
	B&W      BAT      1036 06-07-83   1:23a
	COLOR    BAT      1036 06-07-83   1:23a
	HERCULES BAT      1036 06-07-83   1:23a
	COMPAQ   BAT      1036 06-07-83   1:23a
	CONTINUE BAT      3837 06-07-83   1:23a
	AUTOEXEC BAT        20 06-07-83   1:23a
	INSTALL  BAT       970 06-07-83   1:23a
	FIXDOS   COM      1195 06-07-83   1:23a
	TD       DRV      5294 06-07-83   1:23a
	GD       DRV      2139 06-07-83   1:23a
	KB       DRV       352 06-07-83   1:23a
	PR       DRV       329 06-07-83   1:23a
	DISKCOPY COM      2576 10-20-83  12:00p
	DISKCOMP COM      2188 10-20-83  12:00p
	COMMAND  COM     17792 10-20-83  12:00p
	FORMAT   COM      6912 10-20-83  12:00p
	CHKDSK   COM      6400 10-20-83  12:00p
	       40 file(s)     235885 bytes
	                       62464 bytes free

### Directory of Lotus 1-2-3 1A (3-Graph)

	 Volume in drive A has no label
	 Directory of A:\

	IBMBIO   COM      4736 10-20-83  12:00p
	IBMDOS   COM     17024 10-20-83  12:00p
	GRAPH    EXE     62080 06-07-83   1:23a
	GRAPH    HLP     20747 06-07-83   1:23a
	GRAPH    CNF       384 06-09-85   3:32p
	LOTUS    COM       481 06-07-83   1:23a
	LTSLOAD  COM     10144 06-07-83   1:23a
	LOTUS    DLB     40889 06-07-83   1:23a
	BLOCK1   FON      3597 06-07-83   1:23a
	BLOCK2   FON      6593 06-07-83   1:23a
	ITALIC1  FON      6507 06-07-83   1:23a
	ITALIC2  FON      9076 06-07-83   1:23a
	ROMAN1   FON      4744 06-07-83   1:23a
	ROMAN2   FON      9117 06-07-83   1:23a
	SCRIPT1  FON      5831 06-07-83   1:23a
	SCRIPT2  FON      7726 06-07-83   1:23a
	AUTOEXEC BAT        20 06-07-83   1:23a
	INSTALL  BAT       870 06-07-83   1:23a
	DISKCOPY COM      2008 05-07-82  12:00p
	DISKCOMP COM      1640 05-07-82  12:00p
	TD       DRV      5294 06-07-83   1:23a
	GD       DRV      2139 06-07-83   1:23a
	KB       DRV       352 06-07-83   1:23a
	PR       DRV       329 06-07-83   1:23a
	COMMAND  COM     17792 10-20-83  12:00p
	       25 file(s)     240120 bytes
	                       69632 bytes free

### Directory of Lotus 1-2-3 1A (4-Tutorial)

	 Volume in drive A has no label
	 Directory of A:\

	DISKCOPY COM      2008 05-07-82  12:00p
	DISKCOMP COM      1640 05-07-82  12:00p
	GD       DRV      2139 06-07-83   1:23a
	INSTALL  BAT       848 06-07-83   1:23a
	KB       DRV       352 06-07-83   1:23a
	LESNA_1  WKS      2944 06-07-83   1:23a
	LESNA_2  WKS      1792 06-07-83   1:23a
	LESNB_1  WKS      2816 06-07-83   1:23a
	LESNC_1  WKS      2944 06-07-83   1:23a
	LESND_1  WKS      2560 06-07-83   1:23a
	LESNE_1  WKS      4224 06-07-83   1:23a
	LESNF_1  WKS      4224 06-07-83   1:23a
	LESNF_2  WKS      3456 06-07-83   1:23a
	LTSLOAD  COM     10144 06-07-83   1:23a
	PR       DRV       329 06-07-83   1:23a
	TD       DRV      5294 06-07-83   1:23a
	TUT0     TUT       486 06-07-83   1:23a
	TUTA     TUT     32356 06-07-83   1:23a
	TUTB     TUT     19569 06-07-83   1:23a
	TUTC     TUT     14548 06-07-83   1:23a
	TUTD     TUT     24200 06-07-83   1:23a
	TUTE     TUT     25061 06-07-83   1:23a
	TUTF     TUT     21448 06-07-83   1:23a
	TUTOR    CNF       256 06-07-83   1:23a
	TUTOR    HLP      4804 06-07-83   1:23a
	COMMAND  COM      4959 05-07-82  12:00p
	TUTOR    EXE    108800 06-07-83   1:23a
	       27 file(s)     304201 bytes
	                        5120 bytes free

### Copy-Protection Patch

The PCjs **Release 1A** System disk does not include any copy-protection.  Instead, the disk contains a patched
copy of `123.EXE` which bypasses the usual copy-protection tests.  The patch is described in the "unprotect" document
[LOTUS.TXT](https://raw.githubusercontent.com/jeffpar/pcjs-demo-disks/master/pcx86/shareware/unprot/disks/unprot-1/LOTUS.TXT):

	1. Rename 123.EXE 123.XYZ
	2. DEBUG 123.XYZ
	3. type  U ABA9
	4. you should see    INT 13   at that address
	5. type  E ABA9 90 90
	6. type  W
	7. type  Q
	8. Rename 123.XYZ 123.EXE

The following hexdump `diff` confirms the precise differences between the original `123.EXE` and the patched copy: 

	2698c2698
	< 0000aaa0  02 b0 01 1e 07 8d 1e 92  06 cd 13 80 fc 02 75 01  |..............u.|
	---
	> 0000aaa0  02 b0 01 1e 07 8d 1e 92  06 90 90 80 fc 02 75 01  |..............u.|
