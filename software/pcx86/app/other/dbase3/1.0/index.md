---
layout: page
title: dBASE III 1.0
permalink: /software/pcx86/app/other/dbase3/1.0/
redirect_from: /disks/pcx86/apps/other/dbase3/1.0/
machines:
  - id: ibm5160
    type: pcx86
    config: /configs/pcx86/xml/machine/5160/cga/512kb/machine.xml
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: dBASE III 1.0 (Disk 1)
    autoStart: true
    autoType: $date\r$time\rB:\rDBASE\r
---

The machine below is configured to run the original, unmodified, copy-protected software from
[dBASE III 1.0 (Disk 1)](#dbase-iii-disk-information).  More information on dBASE III copy-protection
is available on the [dBASE III 1.0 with Debugger](debugger/) page.

{% include machine.html id="ibm5160" %}

### dBASE III Disk Information

Two of the PCjs disks shown below:

- [dBASE III 1.0 (Patched)](#directory-of-dbase-iii-10-patched)
- [dBASE III 1.0 (Samples)](#directory-of-dbase-iii-10-samples)

are from our private collection and should be exact copies of the original dBASE III 1.0 distribution disks, with the
exception of `DBASE.EXE`, which was patched to eliminate copy-protection checks.  Details of that patch are available
in the [PCjs Document Archive](/documents/papers/pcjs/programming/#dbase-iii-copy-protection),
along with this [blog post](/blog/2017/08/11/).

Also, for completeness, the original `DBASE.EXE` has been recreated by "unpatching" it and saving it on the
[Locked](#directory-of-dbase-iii-10-locked) disk image.  Even though we no longer have the original distribution disk,
we have "annotated" our disk image to simulate the same damaged sector that the original disk contained, so the original
program runs as well.

Another variation of the dBASE III disks come from the [WinWorld](https://winworldpc.com/product/dbase/iii-v10) archive:

- [dBASE III 1.0 (Disk 1)](#directory-of-dbase-iii-10-disk-1)
- [dBASE III 1.0 (Disk 2)](#directory-of-dbase-iii-10-disk-2)

and, with the exception of `DBASE.EXE`, the files on [Disk 1](#directory-of-dbase-iii-10-disk-1) match the files on our
[Patched](#directory-of-dbase-iii-10-patched) disk; the newer dates probably just reflect an update by Vault Corporation
to the copy-protection code in `DBASE.EXE`.  However, [Disk 2](#directory-of-dbase-iii-10-disk-2) contains more files
than our [Samples](#directory-of-dbase-iii-10-samples) disk, and WinWorld's README admits that:

	Some of the sample programs have been run/changed.

so overall, the disks from our private collection may be more authentic.

### Directory of dBASE III 1.0 (Patched)

	 Volume in drive A has no label
	 Directory of  A:\
	
	DBASE    EXE   112720   9-28-84   3:46p
	DBASE    OVL   147456   6-26-84   5:36p
	HELP     DBS    53760   6-26-84   5:36p
	ASSIST   HLP    15223   6-26-84   5:37p
	READ     ME      4224   6-26-84   5:37p
	CONFIG   SYS       22   6-26-84   5:37p
	        6 File(s)     15360 bytes free

### Directory of dBASE III 1.0 (Samples)

	 Volume in drive A has no label
	 Directory of  A:\
	
	DFORMAT  EXE    39424   6-12-84   2:56p
	DCONVERT EXE    48128   6-06-84   3:10p
	DFM      MSG    50432   6-12-84   2:46p
	DEPOSITS DBF      227   6-14-84   3:42a
	CHECKFIL DBF      355   6-14-84   3:42a
	INVGET   DBF      419   6-14-84   3:40a
	INVOICES DBF      598   6-14-84   3:43a
	BILLINGS DBF     1024   4-29-84   7:57p
	NAMES    DBF     1024   5-01-84  12:52p
	PERSON   DBF     1248   4-30-84   5:31p
	POSTFILE DBF     1339   6-05-84  10:51a
	HOLD84   DBF     1412   4-01-84  10:56p
	CLADDRES DBF     1477   4-08-84   9:01p
	PERSONNE DBF     1925   6-05-84  10:55a
	RENTALS  DBF     2560   6-15-84   2:06p
	SUPPLIER DBF     2659   4-09-84   7:40p
	COSTBASE DBF     3301   6-14-84   3:46a
	WAGES    DBF     3801   4-01-84  10:55p
	NAMES    FMT      398   4-07-84   7:38p
	KONSTANT MEM      770   5-01-84   3:58p
	COSTJOBS NDX     1024   1-01-80   1:45a
	BILLINGS NDX     1024   1-01-80   1:46a
	BILLJOBS NDX     1024   1-01-80   1:46a
	INVOICES NDX     1024   1-01-80   1:46a
	COSTNAME NDX     2048   1-01-80   1:46a
	SUPPLIER NDX     2560   3-28-84   5:55p
	INVSUBTO PRG      768   3-28-84   9:54p
	DEPPRINT PRG      896   3-28-84   9:49p
	INVUPDAT PRG      896   5-01-84   8:37a
	DEPMENU  PRG     1280   6-15-84   2:47p
	BIG      PRG     1280   6-15-84   3:26p
	ACCOUNTS PRG     1408   4-30-84   9:08a
	INVEDIT  PRG     1408   5-01-84   8:38a
	PAYMENU  PRG     1408   5-01-84   8:45a
	INDEXING PRG     1408   5-01-84  10:11a
	INVCHECK PRG     1536   5-01-84   8:38a
	PAYRECAP PRG     1536   6-15-84   4:41p
	NAMETEST PRG     1664   5-01-84   1:59p
	DEPTRANS PRG     1664   5-01-84   8:31a
	INVMENU  PRG     1792   5-01-84   8:33a
	COSTUPDA PRG     2048   6-15-84   2:45p
	COSTMENU PRG     2688   5-01-84   7:57a
	PAYEMPS  PRG     2944   6-15-84   2:43p
	DEPOSITS PRG     3584   6-15-84   2:41p
	COSTTIME PRG     3584   6-15-84   2:45p
	TIMECALC PRG     3712   6-15-84   2:50p
	CHECKSTU PRG     3712   6-15-84   5:21p
	PAYFIND  PRG     3712   6-15-84   4:42p
	INVOICES PRG     3712   6-15-84   4:53p
	COSTBILL PRG     4608   5-01-84   1:32p
	SALESTAX PRG     5376   6-15-84   5:43p
	INVPRINT PRG     5888   6-15-84   4:37p
	JOBCOSTS PRG     6016   6-15-84   2:43p
	PAYBILLS PRG     9472   6-15-84   4:44p
	PAYROLL  PRG    13056   6-15-84   4:50p
	       55 File(s)     75776 bytes free

### Directory of dBASE III 1.0 (Locked)

	 Volume in drive A has no label
	 Directory of  A:\
	
	DBASE    EXE   112720   8-11-17   9:51a
	DBASE    OVL   147456   6-26-84   5:36p
	HELP     DBS    53760   6-26-84   5:36p
	ASSIST   HLP    15223   6-26-84   5:37p
	READ     ME      4224   6-26-84   5:37p
	CONFIG   SYS       22   6-26-84   5:37p
	        6 File(s)     15360 bytes free

### Directory of dBASE III 1.0 (Disk 1)

	 Volume in drive A has no label
	 Directory of  A:\
	
	DBASE    EXE   112720   7-15-84   8:28a
	DBASE    OVL   147456   7-15-84   8:28a
	HELP     DBS    53760   7-15-84   8:29a
	ASSIST   HLP    15223   7-15-84   8:29a
	READ     ME      4224   7-15-84   8:29a
	CONFIG   SYS       22   7-15-84   8:29a
	        6 File(s)     10240 bytes free

### Directory of dBASE III 1.0 (Disk 2)

	 Volume in drive A has no label
	 Directory of  A:\
	
	DFORMAT  EXE    39424   6-12-84   2:56p
	DCONVERT EXE    48128   6-06-84   3:10p
	DFM      MSG    50432   6-12-84   2:46p
	DEPOSITS DBF      227   6-14-84   3:42a
	CHECKFIL DBF      355   6-14-84   3:42a
	INVGET   DBF      419   6-14-84   3:40a
	INVOICES DBF      598   6-14-84   3:43a
	BILLINGS DBF     1024   4-29-84   7:57p
	NAMES    DBF     1342  11-13-84   9:31a
	PERSON   DBF     1248   4-30-84   5:31p
	POSTFILE DBF     1339   6-05-84  10:51a
	HOLD84   DBF     1412   4-01-84  10:56p
	CLADDRES DBF     1477   4-08-84   9:01p
	PERSONNE DBF     1925   6-05-84  10:55a
	RENTALS  DBF     2560  11-12-84   4:01a
	SUPPLIER DBF     2659   4-09-84   7:40p
	COSTBASE DBF     3301   6-14-84   3:46a
	WAGES    DBF     3801   4-01-84  10:55p
	NAMES    FMT      398   4-07-84   7:38p
	KONSTANT MEM      770   5-01-84   3:58p
	COSTJOBS NDX     1024   1-01-80   1:45a
	BILLINGS NDX     1024   1-01-80   1:46a
	BILLJOBS NDX     1024   1-01-80   1:46a
	INVOICES NDX     1024   1-01-80   1:46a
	COSTNAME NDX     2048   1-01-80   1:46a
	SUPPLIER NDX     2560   3-28-84   5:55p
	CONSTANT MEM      426  11-06-84   3:04a
	DEPPRINT PRG      896   3-28-84   9:49p
	INVUPDAT PRG      896   5-01-84   8:37a
	DEPMENU  PRG     1280   6-15-84   2:47p
	BIG      PRG     1280   6-15-84   3:26p
	ACCOUNTS PRG     1408   4-30-84   9:08a
	INVEDIT  PRG     1408   5-01-84   8:38a
	PAYMENU  PRG     1408   5-01-84   8:45a
	INDEXING PRG     1408   5-01-84  10:11a
	INVCHECK PRG     1536   5-01-84   8:38a
	PAYRECAP PRG     1536   6-15-84   4:41p
	NAMETEST PRG     1664   5-01-84   1:59p
	DEPTRANS PRG     1664   5-01-84   8:31a
	INVMENU  PRG     1792   5-01-84   8:33a
	COSTUPDA PRG     2048   6-15-84   2:45p
	COSTMENU PRG     2688   5-01-84   7:57a
	PAYEMPS  PRG     2944   6-15-84   2:43p
	DEPOSITS PRG     3584   6-15-84   2:41p
	COSTTIME PRG     3584   6-15-84   2:45p
	TIMECALC PRG     3712   6-15-84   2:50p
	CHECKSTU PRG     3712   6-15-84   5:21p
	PAYFIND  PRG     3712   6-15-84   4:42p
	INVOICES PRG     3712   6-15-84   4:53p
	COSTBILL PRG     4608   5-01-84   1:32p
	SALESTAX PRG     5376   6-15-84   5:43p
	INVPRINT PRG     5888   6-15-84   4:37p
	JOBCOSTS PRG     6016   6-15-84   2:43p
	PAYBILLS PRG     9472   6-15-84   4:44p
	PAYROLL  PRG    13056   6-15-84   4:50p
	LAST     NDX     1024  11-13-84   9:22a
	INVSUBTO PRB      768   3-28-84   9:54p
	ADDRESS  NDX     1024  11-13-84   9:27a
	ZIP      NDX     1024  11-13-84   9:23a
	MONEY    NDX     1024  11-06-84   3:36a
	FULL     NDX     1024  11-06-84   3:38a
	WHO      NDX     1024  11-06-84   4:12a
	MONTH    NDX     1024  11-13-84   9:32a
	TEST     TXT      588  11-07-84  12:22p
	CHAPTER6 TXT     2414  11-07-84   1:11p
	TEST     BAK      190  11-07-84   1:09p
	TEST     PRG      223  11-07-84   1:48p
	SALES    NDX     1024  11-07-84   2:01p
	RENTS    DBF     1317  11-07-84   2:00p
	COMMISS  FRM     1990  11-07-84   2:26p
	SUMMARY  TXT     1262  11-07-84   2:19p
	STATESLS NDX     1024  11-07-84   2:39p
	PERSON   NDX     1024  11-12-84  10:38a
	NOTES    DBF      274  11-12-84   4:20a
	NOTES    DBT      512  11-12-84   4:14a
	DOCTORS  DBF      253  11-13-84  10:18a
	       76 File(s)     48128 bytes free
