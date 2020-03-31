---
layout: page
title: IBM OS/2 1.0
permalink: /software/pcx86/sys/os2/ibm/1.0/
redirect_from: /disks/pcx86/os2/ibm/1.0/
preview: images/screenshot.png
machines:
  - id: ibm5170
    type: pcx86
    debugger: true
    config: /configs/pcx86/xml/machine/5170/ega/2048kb/rev3/debugger/machine.xml
    drives: '[{name:"20Mb Hard Disk",type:2,path:"/harddisks/pcx86/20mb/IBMOS210-EGA.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

IBM OS/2 1.0 was announced on April 2, 1987, finalized in October 1987, and released in December 1987.

When the installation disk boots, the following message is displayed on-screen:

	IBM Operating System/2 Version 1.00
	(C) Copyright IBM Corp. 1981, 1987. All rights reserved.
	(C) Copyright Microsoft Corp. 1981, 1987.
	
	87294

The 5-digit number indicates the day the files were built.  The first 2 digits (87) are the year and the 3 remaining
digits (294) are the day of the year (October 21).

Directory listings of the four 1.44Mb distribution diskettes are provided below.

IBM OS/2 1.0 has been pre-installed on this machine's 20Mb hard disk, along with a copy of the
[Microsoft OS/2 SDK 1.02](/software/pcx86/sdk/os2/microsoft/1.02/), as discussed in the
[PCjs Blog](/blog/2015/12/27/).

{% include machine.html id="ibm5170" %}

### Directory of IBM OS/2 1.0 (Install)

	 Volume in drive A has no label
	 Directory of A:\
	
	IBMBIO   COM      4096 10-21-87  12:00p
	IBMDOS   COM    255665 10-21-87  12:00p
	ABIOS    SYS        49 10-21-87  12:00p
	ANSICALL DLL      3637 10-21-87  12:00p
	BKSCALLS DLL      5704 10-21-87  12:00p
	BMSCALLS DLL      2576 10-21-87  12:00p
	BVSCALLS DLL     31744 10-21-87  12:00p
	CLOCK01  SYS      2762 10-21-87  12:00p
	CLOCK02  SYS      3188 10-21-87  12:00p
	CMD      EXE     57648 10-21-87  12:00p
	CONFIG   SYS       101 10-21-87  12:00p
	COUNTRY  SYS     14632 10-21-87  12:00p
	CPISPFPC DLL    108598 10-21-87  12:00p
	DISK01   SYS     18616 10-21-87  12:00p
	DISK02   SYS     20329 10-21-87  12:00p
	DOSCALL1 DLL      8709 10-21-87  12:00p
	DMPC     EXE      2472 10-21-87  12:00p
	DTM      DLL      2222 10-21-87  12:00p
	F80000   BIO      9216 10-21-87  12:00p
	F80100   BIO      8704 10-21-87  12:00p
	FC0400   BIO      6656 10-21-87  12:00p
	FC0500   BIO      9216 10-21-87  12:00p
	FORMAT   COM     47344 10-21-87  12:00p
	HARDERR  EXE     16288 10-21-87  12:00p
	INSTAID  CMD       279 10-21-87  12:00p
	INSTAID  CNF       151 10-21-87  12:00p
	INSTAID  LIB     24064 10-21-87  12:00p
	INSTAID  PRO       174 10-21-87  12:00p
	INSTAIDE EXE     58346 10-21-87  12:00p
	ISPD     MSG      1542 10-21-87  12:00p
	ISPM     MSG       500 10-21-87  12:00p
	KBD01    SYS     16945 10-21-87  12:00p
	KBD02    SYS     15650 10-21-87  12:00p
	KBDCALLS DLL      7232 10-21-87  12:00p
	MONCALLS DLL      7351 10-21-87  12:00p
	MOUCALLS DLL      5701 10-21-87  12:00p
	MSG      DLL      6578 10-21-87  12:00p
	NLS      DLL      5162 10-21-87  12:00p
	OSO001   MSG     64808 10-21-87  12:00p
	PRINT01  SYS      7683 10-21-87  12:00p
	PRINT02  SYS      9018 10-21-87  12:00p
	QUECALLS DLL     11238 10-21-87  12:00p
	SCREEN01 SYS      1583 10-21-87  12:00p
	SCREEN02 SYS      1988 10-21-87  12:00p
	SESMGR   DLL     24262 10-21-87  12:00p
	SWAPPER  EXE      4150 10-21-87  12:00p
	SYS      COM     32056 10-21-87  12:00p
	SYSBAS   EXE      5336 10-21-87  12:00p
	SYSDISK  COM     37824 10-21-87  12:00p
	SYSDISP  CMD        72 10-21-87  12:00p
	SYSINST  CMD       237 10-21-87  12:00p
	SYSINST  LIB     82432 10-21-87  12:00p
	SYSINST  PIP     21964 10-21-87  12:00p
	SYSLABL  EXE      6896 10-21-87  12:00p
	VIOCALLS DLL     13981 10-21-87  12:00p
	       55 file(s)    1115375 bytes
	                      328192 bytes free

### Directory of IBM OS/2 1.0 (Disk 1)

	 Volume in drive A has no label
	 Directory of A:\
	
	IBMBIO   COM      4096 10-21-87  12:00p
	IBMDOS   COM    255665 10-21-87  12:00p
	ABIOS    SYS        49 10-21-87  12:00p
	ANSICALL DLL      3637 10-21-87  12:00p
	BKSCALLS DLL      5704 10-21-87  12:00p
	BMSCALLS DLL      2576 10-21-87  12:00p
	BVSCALLS DLL     31744 10-21-87  12:00p
	CLOCK01  SYS      2762 10-21-87  12:00p
	CLOCK02  SYS      3188 10-21-87  12:00p
	CMD      EXE     57648 10-21-87  12:00p
	COMMAND  COM     25564 10-21-87  12:00p
	COUNTRY  SYS     14632 10-21-87  12:00p
	CPISPFPC DLL    108598 10-21-87  12:00p
	DISK01   SYS     18616 10-21-87  12:00p
	DISK02   SYS     20329 10-21-87  12:00p
	DOSCALL1 DLL      8709 10-21-87  12:00p
	DMPC     EXE      2472 10-21-87  12:00p
	DTM      DLL      2222 10-21-87  12:00p
	FORMATS  TBL       590 10-21-87  12:00p
	F80000   BIO      9216 10-21-87  12:00p
	F80100   BIO      8704 10-21-87  12:00p
	FC0400   BIO      6656 10-21-87  12:00p
	FC0500   BIO      9216 10-21-87  12:00p
	HARDERR  EXE     16288 10-21-87  12:00p
	ISPD     MSG      1542 10-21-87  12:00p
	ISPM     MSG       500 10-21-87  12:00p
	KBD01    SYS     16945 10-21-87  12:00p
	KBD02    SYS     15650 10-21-87  12:00p
	KBDCALLS DLL      7232 10-21-87  12:00p
	KEYBOARD DCP     85917 10-21-87  12:00p
	MONCALLS DLL      7351 10-21-87  12:00p
	MOUCALLS DLL      5701 10-21-87  12:00p
	MSG      DLL      6578 10-21-87  12:00p
	NLS      DLL      5162 10-21-87  12:00p
	OSO001   MSG     64808 10-21-87  12:00p
	PRINT01  SYS      7683 10-21-87  12:00p
	PRINT02  SYS      9018 10-21-87  12:00p
	QUECALLS DLL     11238 10-21-87  12:00p
	SCREEN01 SYS      1583 10-21-87  12:00p
	SCREEN02 SYS      1988 10-21-87  12:00p
	SESMGR   DLL     24262 10-21-87  12:00p
	SHELL11F AIF       524 10-21-87  12:00p
	SHELL11F AII       150 10-21-87  12:00p
	SHELL11F CNF       201 10-21-87  12:00p
	SHELL11F EXE     31676 10-21-87  12:00p
	SHELL11F LIB     41472 10-21-87  12:00p
	SHELL11F PRO       157 10-21-87  12:00p
	SPOOLCP  DLL      9828 10-21-87  12:00p
	STXTDMPC DLL     12569 10-21-87  12:00p
	SWAPPER  EXE      4150 10-21-87  12:00p
	VIOCALLS DLL     13981 10-21-87  12:00p
	VIOTBL   DCP     52150 10-21-87  12:00p
	4201     DCP     17069 10-21-87  12:00p
	5202     DCP       404 10-21-87  12:00p
	       54 file(s)    1076370 bytes
	                      367104 bytes free

### Directory of IBM OS/2 1.0 (Disk 2)

	 Volume in drive A has no label
	 Directory of A:\
	
	ANSI     EXE      9984 10-21-87  12:00p
	ANSI     SYS      1694 10-21-87  12:00p
	APPEND   EXE      6258 10-21-87  12:00p
	ASSIGN   COM      1683 10-21-87  12:00p
	ATTRIB   EXE     29080 10-21-87  12:00p
	CHKDSK   COM     49232 10-21-87  12:00p
	COMP     COM     33056 10-21-87  12:00p
	DISKCOMP COM     38400 10-21-87  12:00p
	DISKCOPY COM     39456 10-21-87  12:00p
	DOSCALLS LIB     29184 10-21-87  12:00p
	EDLIN    COM      8135 10-21-87  12:00p
	EGA      SYS      2110 10-21-87  12:00p
	EXTDSKDD SYS      1877 10-21-87  12:00p
	FDISK    COM     37824 10-21-87  12:00p
	FIND     EXE     27424 10-21-87  12:00p
	FORMAT   COM     47344 10-21-87  12:00p
	GRAFTABL COM      7112 10-21-87  12:00p
	HELP     BAT       444 10-21-87  12:00p
	HELP     CMD       439 10-21-87  12:00p
	HELPMSG  EXE     27408 10-21-87  12:00p
	JOIN     EXE     21040 10-21-87  12:00p
	KEYB     COM     12636 10-21-87  12:00p
	LABEL    COM     26372 10-21-87  12:00p
	LINK     EXE     91880 10-21-87  12:00p
	MODE     COM     54932 10-21-87  12:00p
	MORE     COM     48354 10-21-87  12:00p
	PRINT    COM     28492 10-21-87  12:00p
	RECOVER  COM     36928 10-21-87  12:00p
	REPLACE  EXE     33568 10-21-87  12:00p
	SORT     EXE     29946 10-21-87  12:00p
	SPOOL    EXE     77370 10-21-87  12:00p
	SUBST    EXE     21024 10-21-87  12:00p
	SYS      COM     32056 10-21-87  12:00p
	TRACE    EXE     10474 10-21-87  12:00p
	TRACEFMT EXE     64432 10-21-87  12:00p
	TREE     COM     28928 10-21-87  12:00p
	VDISK    SYS      4662 10-21-87  12:00p
	XCOPY    EXE     40656 10-21-87  12:00p
	       38 file(s)    1061894 bytes
	                      386048 bytes free

### Directory of IBM OS/2 1.0 (Disk 3)

	 Volume in drive A has no label
	
	Directory of A:\
	
	BACKUP   COM     49216 10-21-87  12:00p
	BASIC    COM       585 10-21-87  12:00p
	BASICA   COM     36253 10-21-87  12:00p
	COM01    SYS      8758 10-21-87  12:00p
	COM02    SYS     13366 10-21-87  12:00p
	CREATEDD EXE     48032 10-21-87  12:00p
	MORTGAGE BAS      6380 10-21-87  12:00p
	MOUSEA00 SYS     16950 10-21-87  12:00p
	MOUSEA01 SYS     16438 10-21-87  12:00p
	MOUSEA02 SYS     16438 10-21-87  12:00p
	MOUSEA03 SYS     16438 10-21-87  12:00p
	MOUSEA04 SYS     16438 10-21-87  12:00p
	MOUSEB00 SYS     17462 10-21-87  12:00p
	MOUSEB01 SYS     17462 10-21-87  12:00p
	MOUSEB02 SYS     17462 10-21-87  12:00p
	MOUSEB05 SYS     17462 10-21-87  12:00p
	OSO001H  MSG     83964 10-21-87  12:00p
	PATCH    EXE     37132 10-21-87  12:00p
	POINTDD  SYS      5886 10-21-87  12:00p
	RESTORE  COM     54896 10-21-87  12:00p
	SETCOM40 EXE      8654 10-21-87  12:00p
	INTRO        <DIR>     10-21-87   2:10p
	       22 file(s)     505672 bytes
	
	Directory of A:\INTRO
	
	.            <DIR>     10-21-87   2:10p
	..           <DIR>     10-21-87   2:10p
	INTA     MSG       879 10-21-87  12:00p
	INTB     MSG      1469 10-21-87  12:00p
	INTC     MSG      1076 10-21-87  12:00p
	INTRO    CMD       202 10-21-87  12:00p
	INTRO    CNF       143 10-21-87  12:00p
	INTRO    LIB    109056 10-21-87  12:00p
	INTRO    PRO        93 10-21-87  12:00p
	INTROE   EXE     39580 10-21-87  12:00p
	       10 file(s)     152498 bytes
	
	Total files listed:
	       33 file(s)     658170 bytes
	                      789504 bytes free
