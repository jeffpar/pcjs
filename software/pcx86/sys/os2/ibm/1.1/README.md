---
layout: page
title: IBM OS/2 1.1
permalink: /software/pcx86/sys/os2/ibm/1.1/
redirect_from: /disks/pcx86/os2/ibm/1.1/
machines:
  - id: ibm5170
    type: pcx86
    debugger: true
    messages: fault
    config: /devices/pcx86/machine/5170/vga/4096kb/debugger/machine.xml
    drives: '[{name:"20Mb Hard Disk",type:2,path:"/disks-demo/pcx86/drives/20mb/IBMOS211-VGA.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

IBM OS/2 1.1
------------

IBM OS/2 1.1 was announced on April 2, 1987 (the same day as OS/2 1.0) and released on October 31, 1988.

When the installation disk boots, the following message is displayed on-screen:

	IBM Operating System/2 Version 1.10
	(C) Copyright IBM Corp. 1981, 1988. All rights reserved.
	(C) Copyright Microsoft Corp. 1981, 1988.
	
	88300

The 5-digit number indicates the day the files were built.  The first 2 digits (88) are the year and the 3 remaining
digits (300) are the day of the year (October 26, since 1988 was a leap year).

Directory listings of the seven 1.44Mb distribution diskettes are provided below.

### Directory of IBM OS/2 1.1 (Install)

	 Volume in drive A has no label
	 Directory of A:\

	OS2LDR            4096 10-26-88  12:00p
	OS2KRNL         288037 10-26-88  12:00p
	ABIOS    SYS        96 10-26-88  12:00p
	ANSICALL DLL      3616 10-26-88  12:00p
	BKSCALLS DLL      7171 10-26-88  12:00p
	BMSCALLS DLL      3623 10-26-88  12:00p
	BVSCALLS DLL     27638 10-26-88  12:00p
	CLOCK01  SYS      3086 10-26-88  12:00p
	CLOCK02  SYS      3208 10-26-88  12:00p
	CMD      EXE     68528 10-26-88  12:00p
	CONFIG   SYS       110 10-26-88  12:00p
	COUNTRY  SYS     14366 10-26-88  12:00p
	CPISPFPC DLL    129076 10-26-88  12:00p
	DISK01   SYS     23384 10-26-88  12:00p
	DISK02   SYS     23432 10-26-88  12:00p
	DISK03   SYS     23480 10-26-88  12:00p
	DMPC     EXE      2798 10-26-88  12:00p
	DOSCALL1 DLL      9325 10-26-88  12:00p
	DTM      DLL      1786 10-26-88  12:00p
	F80000   BIO      9728 10-26-88  12:00p
	F80100   BIO      9216 10-26-88  12:00p
	F80402   BIO      1536 10-26-88  12:00p
	F80902   BIO      1536 10-26-88  12:00p
	F80D00   BIO       512 10-26-88  12:00p
	FC0400   BIO      9728 10-26-88  12:00p
	FC0403   BIO      1536 10-26-88  12:00p
	FC0500   BIO      9728 10-26-88  12:00p
	FDISK    COM     39568 10-26-88  12:00p
	FORMAT   COM     48800 10-26-88  12:00p
	HARDERR  EXE     15792 10-26-88  12:00p
	INSTAID  CMD       258 10-26-88  12:00p
	INSTAID  CNF       224 10-26-88  12:00p
	INSTAID  LIB     24576 10-26-88  12:00p
	INSTAID  PRO       174 10-26-88  12:00p
	INSTAIDE EXE     50638 10-26-88  12:00p
	ISPD     MSG      1543 10-26-88  12:00p
	ISPM     MSG       515 10-26-88  12:00p
	KBD01    SYS     15374 10-26-88  12:00p
	KBD02    SYS     16799 10-26-88  12:00p
	KBDCALLS DLL      6706 10-26-88  12:00p
	MONCALLS DLL      7348 10-26-88  12:00p
	MOUCALLS DLL      5171 10-26-88  12:00p
	MSG      DLL      6218 10-26-88  12:00p
	NLS      DLL      4166 10-26-88  12:00p
	OSO001   MSG     71267 10-26-88  12:00p
	PRINT01  SYS      7973 10-26-88  12:00p
	PRINT02  SYS      9158 10-26-88  12:00p
	QUECALLS DLL      9757 10-26-88  12:00p
	SCREEN01 SYS      1640 10-26-88  12:00p
	SCREEN02 SYS      2094 10-26-88  12:00p
	SESMGR   DLL     27655 10-26-88  12:00p
	SWAPPER  EXE      4660 10-26-88  12:00p
	SYSBAS   EXE      3347 10-26-88  12:00p
	SYSINSTX COM     38658 10-26-88  12:00p
	SYSARCH  EXE      2826 10-26-88  12:00p
	SYSDISP  CMD        72 10-26-88  12:00p
	SYSINST  CMD       570 10-26-88  12:00p
	SYSINST  CNF       151 10-26-88  12:00p
	SYSINST  LIB     96768 10-26-88  12:00p
	SYSINST  PIP     37369 10-26-88  12:00p
	SYSLABL  EXE      8578 10-26-88  12:00p
	SYSEXIST EXE      2798 10-26-88  12:00p
	VIOCALLS DLL     14441 10-26-88  12:00p
	       63 file(s)    1264028 bytes
	                      176640 bytes free

### Directory of IBM OS/2 1.1 (Disk 1)

	 Volume in drive A is OS2 DISK 1 
	 Directory of A:\

	ANSI     SY@      1846 10-26-88  12:00p
	ASSIGN   CO@      1672 10-26-88  12:00p
	BACKUP   CO@     40438 10-26-88  12:00p
	BASIC    CO@       479 10-26-88  12:00p
	BASICA   CO@     35573 10-26-88  12:00p
	CHKDSK   COM     53616 10-26-88  12:00p
	COM01    SY@      5699 10-26-88  12:00p
	COM02    SY@      7823 10-26-88  12:00p
	COMMAND  CO@     20590 10-26-88  12:00p
	COMP     CO@     27778 10-26-88  12:00p
	DISKCOMP CO@     29950 10-26-88  12:00p
	DISKCOPY CO@     30775 10-26-88  12:00p
	EDLIN    CO@      5818 10-26-88  12:00p
	EGA      SY@      2173 10-26-88  12:00p
	EXTDSKDD SY@      1757 10-26-88  12:00p
	GRAFTABL CO@      5041 10-26-88  12:00p
	HELP     BA@       350 10-26-88  12:00p
	HELP     CM@       349 10-26-88  12:00p
	KEYB     CO@     11035 10-26-88  12:00p
	LABEL    CO@     23257 10-26-88  12:00p
	MODE     CO@     36125 10-26-88  12:00p
	MORE     CO@     24352 10-26-88  12:00p
	MORTGAGE BA@      4673 10-26-88  12:00p
	MOUSEA00 SY@     12106 10-26-88  12:00p
	MOUSEA01 SY@     11984 10-26-88  12:00p
	MOUSEA02 SY@     12014 10-26-88  12:00p
	MOUSEA03 SY@     11972 10-26-88  12:00p
	MOUSEA04 SY@     11948 10-26-88  12:00p
	MOUSEA05 SY@     11920 10-26-88  12:00p
	MOUSEB00 SY@     12413 10-26-88  12:00p
	MOUSEB01 SY@     12259 10-26-88  12:00p
	MOUSEB02 SY@     12277 10-26-88  12:00p
	MOUSEB05 SY@     12299 10-26-88  12:00p
	POINTDD  SY@      4940 10-26-88  12:00p
	PRINT    CO@     24050 10-26-88  12:00p
	RECOVER  CO@     32113 10-26-88  12:00p
	RESTORE  CO@     43333 10-26-88  12:00p
	TREE     CO@     25372 10-26-88  12:00p
	UNPACK   EXE     33696 10-26-88  12:00p
	VDISK    SY@      2248 10-26-88  12:00p
	       40 file(s)     658113 bytes
	                      789504 bytes free

### Directory of IBM OS/2 1.1 (Disk 2)

	 Volume in drive A is OS2 DISK 2 
	 Directory of A:\

	ANSI     EX@      9023 10-26-88  12:00p
	APPEND   EX@      4001 10-26-88  12:00p
	ATTRIB   EX@     25274 10-26-88  12:00p
	CONVERT  EX@     14218 10-26-88  12:00p
	CREATEDD EX@     20198 10-26-88  12:00p
	DDINSTAL EX@     15338 10-26-88  12:00p
	DOSCALLS LI@     13298 10-26-88  12:00p
	E        DE@      1912 10-26-88  12:00p
	E        EX@     78127 10-26-88  12:00p
	E        MS@      8998 10-26-88  12:00p
	FIND     EX@     23500 10-26-88  12:00p
	HELPMSG  EX@     23662 10-26-88  12:00p
	JOIN     EX@     17482 10-26-88  12:00p
	KEYBOARD DC@     17890 10-26-88  12:00p
	LINK     EX@     75157 10-26-88  12:00p
	NAMPIPES DL@       983 10-26-88  12:00p
	OSO001H  MS@     37669 10-26-88  12:00p
	OS2SMDUM DL@       296 10-26-88  12:00p
	PATCH    EX@     30028 10-26-88  12:00p
	PMWINDUM DL@       415 10-26-88  12:00p
	REPLACE  EX@     28460 10-26-88  12:00p
	SETCOM40 EX@      7367 10-26-88  12:00p
	SORT     EX@     24826 10-26-88  12:00p
	SPOOL    EX@     16132 10-26-88  12:00p
	STXTDMPC DL@      9751 10-26-88  12:00p
	SUBST    EX@     17171 10-26-88  12:00p
	SYSLEVEL EX@     23090 10-26-88  12:00p
	SYSLEVEL OS@       140 10-26-88  12:00p
	TRACE    EX@     11168 10-26-88  12:00p
	TRACEFMT EX@     32582 10-26-88  12:00p
	UNP      MS@       337 10-26-88  12:00p
	UNPH     MS@       608 10-26-88  12:00p
	VIOTBL   DC@     17780 10-26-88  12:00p
	XCOPY    EX@     34555 10-26-88  12:00p
	4201     DC@      8054 10-26-88  12:00p
	5202     DC@       329 10-26-88  12:00p
	       36 file(s)     649819 bytes
	                      800256 bytes free

### Directory of IBM OS/2 1.1 (Disk 3)

	 Volume in drive A is OS2 DISK 3 

	Directory of A:\

	PMGPI    DL@    135872 10-26-88  12:00p
	PMSPL    DL@      9853 10-26-88  12:00p
	PMDD     SY@      2986 10-26-88  12:00p
	OS2      INI      6763 10-26-88  12:00p
	PMCPL    EX@    108122 10-26-88  12:00p
	PMEXEC   EX@     36355 10-26-88  12:00p
	PMFILE   EX@     91663 10-26-88  12:00p
	PMSHELL  EX@     16699 10-26-88  12:00p
	PMGRE    DL@    134371 10-26-88  12:00p
	PMWIN    DL@    136640 10-26-88  12:00p
	PMSPOOL  EX@     30011 10-26-88  12:00p
	SPLDVWRK EX@      8897 10-26-88  12:00p
	SPLPRM   EX@     14587 10-26-88  12:00p
	VIOHELP  EX@      4042 10-26-88  12:00p
	COURIER  FO@    162745 10-26-88  12:00p
	PMPRINT  QP@     13673 10-26-88  12:00p
	OS2SPLFS DL@      3728 10-26-88  12:00p
	PMTKT    DL@     16502 10-26-88  12:00p
	PMTRACE  DL@      1445 10-26-88  12:00p
	SPL1B    DL@     37163 10-26-88  12:00p
	SPL2B    DL@      4009 10-26-88  12:00p
	SPLPRMAP DL@      2110 10-26-88  12:00p
	SPOOLCP  DL@      7339 10-26-88  12:00p
	INTRO        <DIR>     10-26-88  12:00p
	       24 file(s)     985575 bytes

	Directory of A:\INTRO

	.            <DIR>     10-26-88  12:00p
	..           <DIR>     10-26-88  12:00p
	INTROE   EX@     56684 10-26-88  12:00p
	INTROI   TU@     24995 10-26-88  12:00p
	INTROS   TU@     12791 10-26-88  12:00p
	        5 file(s)      94470 bytes

	Total files listed:
	       29 file(s)    1080045 bytes
	                      370688 bytes free

### Directory of IBM OS/2 1.1 (Disk 4)

	 Volume in drive A is OS2 DISK 4 

	Directory of A:\

	PMAVIO   DL@      3775 10-26-88  12:00p
	PMSHAPI  DL@     19057 10-26-88  12:00p
	PMVIOP   DL@     24803 10-26-88  12:00p
	IBM4201  DR@     56870 10-26-88  12:00p
	IBMBGA   DL@     87691 10-26-88  12:00p
	IBMEGA   DL@     70637 10-26-88  12:00p
	IBMVGA   DL@     71273 10-26-88  12:00p
	HELV     FO@    229211 10-26-88  12:00p
	TIMES    FO@    273910 10-26-88  12:00p
	OS2SM    DL@     20441 10-26-88  12:00p
	PMGRE    PD@       214 10-26-88  12:00p
	PMWIN    PD@      3662 10-26-88  12:00p
	PMGPI    PD@      3230 10-26-88  12:00p
	PMSHAPI  PD@       506 10-26-88  12:00p
	OS2SM    PD@      1322 10-26-88  12:00p
	PMSPL    PD@       706 10-26-88  12:00p
	SPL1B    PD@      1052 10-26-88  12:00p
	SPL2B    PD@       176 10-26-88  12:00p
	SPLPRMAP PD@       184 10-26-88  12:00p
	PMC00000 TF@      1325 10-26-88  12:00p
	PMC10000 TF@      3422 10-26-88  12:00p
	PMC20000 TF@     10519 10-26-88  12:00p
	PMC30000 TF@       719 10-26-88  12:00p
	PMC60000 TF@      1673 10-26-88  12:00p
	PMC70000 TF@      2450 10-26-88  12:00p
	PMC80000 TF@       371 10-26-88  12:00p
	PMC90000 TF@       298 10-26-88  12:00p
	PMC50000 TF@      8419 10-26-88  12:00p
	TRSEL    EX@     13624 10-26-88  12:00p
	       29 file(s)     911540 bytes

	Total files listed:
	       29 file(s)     911540 bytes
	                      538624 bytes free

### Directory of IBM OS/2 1.1 (Devices)

	 Volume in drive A has no label

	Directory of A:\

	IBMCGA   DLL    120320 02-11-89  12:00p
	PLOTTERS DRV     89584 02-11-89  12:00p
	README   CGA      3491 02-11-89  12:00p
	README   DD      14243 02-11-89  12:00p
	        4 file(s)     227638 bytes

	Total files listed:
	        4 file(s)     227638 bytes
	                     1229824 bytes free

### Directory of IBM OS/2 1.1 (Printer)

	 Volume in drive A has no label

	Directory of A:\

	IBMNULL  DRV     84992 02-11-89  12:00p
	IBM4202  DRV     84992 02-11-89  12:00p
	IBM5202  DRV     91648 02-11-89  12:00p
	IBM3852  DRV     84480 02-11-89  12:00p
	IBM4207  DRV     92672 02-11-89  12:00p
	IBM4208  DRV     92672 02-11-89  12:00p
	IBM5152  DRV     84480 02-11-89  12:00p
	IBM5182  DRV     89600 02-11-89  12:00p
	IBM5216  DRV     66048 02-11-89  12:00p
	IBM52011 DRV     66048 02-11-89  12:00p
	IBM52012 DRV     90112 02-11-89  12:00p
	IBM4201  DCP     17069 02-11-89  12:00p
	4208     DCP       533 02-11-89  12:00p
	       13 file(s)     945346 bytes

	Total files listed:
	       13 file(s)     945346 bytes
	                      511488 bytes free
