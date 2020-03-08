---
layout: page
title: "Undocumented DOS (1st Edition)"
permalink: /software/pcx86/sw/books/undocumented_dos/
redirect_from: /pubs/pc/programming/Undocumented_DOS/
---

**Undocumented DOS (1st Edition)**
by Schulman, Michels, Kyle, Paterson, Maxey, Brown
	
* [READ.ME](#read-me-1st-edition)
* [Directory of Undocumented DOS (Disk 1)](#directory-of-undocumented-dos-disk-1)
* [Directory of Undocumented DOS (Disk 2)](#directory-of-undocumented-dos-disk-2)
* [Errata (1st Edition)](#errata-1st-edition)

**Undocumented DOS (2nd Edition)**
by Schulman, Brown, Maxey, Michels, Kyle

* [Directory of Undocumented DOS, 2nd Ed. (BIN)](#directory-of-undocumented-dos-2nd-ed-bin)
* [Directory of Undocumented DOS, 2nd Ed. (SRC)](#directory-of-undocumented-dos-2nd-ed-src)
* [Errata (2nd Edition)](#errata-2nd-edition)

### READ.ME (1st Edition)

	                                        27 September 1990
	                                        updated: 15 May 1991
	
	
	READ.ME FOR "UNDOCUMENTED DOS" DISKS
	
	    Here are some scattered last-minute notes regarding the files on
	the two disks that accompany UNDOCUMENTED DOS (edited by Andrew
	Schulman; Addison-Wesley, Reading MA, 1990, $39.95). 
	
	    A number of the programs on this disk have been modified since
	the first printing of UNDOCUMENTED DOS. In particular:
	
	    CHAP2\LDDPMI.C
	    CHAP2\LASTDRV2.ASM
	    CHAP3\DEVCON.C
	    CHAP4\FILES.C
	    CHAP4\PHANTOM.PAS
	    CHAP4\TRUENAME.C
	    CHAP4\MOV.C
	    CHAP5\DOSSWAP.C
	    CHAP5\TEST2E.C
	    CHAP6\ENVEDT.C
	    CHAP6\TSHELL.C
	    CHAP6\INSTCMD.SCR
	
	    In some cases these changes have been reflected in later printings
	of the book.
	
	    If you have any problems with the disks (such as two copies of
	the same disk, disk errors, INTRLIST refusing to load because of
	"illegal use of product," and so on), please call Addison-Wesley
	at (617) 944-3700 x2614.
	
	    Unfortunately, when the introduction to UNDOCUMENTED DOS was
	written, it was too late to thank Michael Spier and Jeff Peoples, of
	Window Book Inc. (Cambridge MA, 617-661-9515), for the fantastic job
	they did in creating INTRLIST.EXE, which is the hypertext database of
	PC interrupts, functions, and data structures, located on the other
	disk. (Based on my experience working with Window Book, I highly
	recommend them to anyone needing online hypertext documentation!)  
	
	    INTRLIST pretty much fills one entire high-density floppy (so
	you'll a hard disk in order to run it).     
	
	
	    This disk contains the source code from the book and the
	resulting compiled executables, plus some additional programs.
	
	    Here are just a few examples of what's in each subdirectory on
	this disk:
	
	\CHAP2
	    LDDPMI (version of LASTDRIVE using the DOS Protected-Mode Interface
	        [DPMI])
	
	\CHAP3
	    DEVLOD.COM (utility for loading device drivers from the DOS
	        command line, including source code in C and assembler)
	    
	\CHAP4
	    FHANDLE.EXE (increase file-handle count, with C source)
	    FREEUP.EXE (release orphaned file handles, with C source)
	    PHANTOM.EXE (sample use of DOS network redirector, including 
	        source in Turbo Pascal)
	
	\CHAP5
	    STSR2E.EXE (pop-up command interpreter, uses the DOS Swappable Data
	        Area, including source in C and assembler)
	
	\CHAP6
	    ENVEDT.EXE (utility for interactively editing the master environment,
	        including source in C and assembler)
	
	\CHAP7
	    MON.COM, ROMMON.COM, SERMON.COM, WINMON.COM (various flavors of DOS
	        debugger, with assembler source)
	
	\CHAP8
	    INTRSPY.EXE, CMDSPY.EXE (the INTRSPY event-driven, script-driven
	        debugger, with sample scripts)
	
	
	    The authors of UNDOCUMENTED DOS would appreciate hearing of any
	problems you have with this software. We would also like to hear any
	comments, criticisms, or suggestions regarding the book itself. Feel
	free to contact us at the electronic addresses printed in the
	introduction to the book.
	
	                                            
	                                    -- Andrew Schulman
	                                       andrew@pharlap.com
	                                       uunet!pharlap!andrew
	                                       CIS: 76320,302

### Directory of Undocumented DOS (Disk 1)

	 Volume in drive A is DISK1      

	Directory of A:\

	INSTALL  DAT        52 09-27-90   8:02a
	INSTALL  EXE     32225 09-27-90   8:02a
	INTRLIST EXE   1041144 09-27-90   8:02a
	README            3420 09-27-90   8:02a
	        4 file(s)    1076841 bytes

	Total files listed:
	        4 file(s)    1076841 bytes
	                      136192 bytes free

### Directory of Undocumented DOS (Disk 2)

	 Volume in drive A is DISK2      

	Directory of A:\

	CHAP2        <DIR>     08-30-93  12:38p
	CHAP3        <DIR>     08-30-93  12:38p
	CHAP4        <DIR>     08-30-93  12:38p
	CHAP5        <DIR>     08-30-93  12:39p
	CHAP6        <DIR>     08-30-93  12:39p
	CHAP7        <DIR>     08-30-93  12:39p
	CHAP8        <DIR>     08-30-93  12:39p
	READ     ME       3473 05-14-91   4:04a
	        8 file(s)       3473 bytes

	Directory of A:\CHAP2

	.            <DIR>     08-30-93  12:38p
	..           <DIR>     08-30-93  12:38p
	CHAP2MK  BAT      1057 09-25-90   9:26p
	FUNC0E32 C        1213 09-25-90   8:58p
	FUNC0E32 EXE      8905 09-25-90   9:19p
	LASTDRV  ASM      1276 09-25-90   8:40p
	LASTDRV  BAS       769 09-25-90   8:42p
	LASTDRV  C         848 09-25-90   8:41p
	LASTDRV  EXE       561 09-25-90   9:24p
	LASTDRV  PAS       460 09-25-90   8:41p
	LASTDRV2 ASM      2313 05-14-91   3:36a
	LASTDRV2 BAS      1119 09-25-90   8:47p
	LASTDRV2 C        1051 09-25-90   8:41p
	LASTDRV2 EXE       620 09-25-90   9:25p
	LASTDRV2 PAS       858 09-25-90   8:45p
	LASTDRV3 C         374 09-25-90   8:41p
	LASTDRV3 PAS      2221 09-25-90   8:46p
	LASTDRV4 C        1246 09-25-90   8:43p
	LASTDRV5 C        2305 09-25-90   9:17p
	LASTDRV6 C         846 09-25-90   8:44p
	LD386    C        1372 09-25-90   9:06p
	LD386    EXP      7384 09-25-90   9:24p
	LDDPMI   C        8607 05-14-91   3:04a
	LDDPMI   EXE      7510 05-14-91   3:03a
	OKAY     C        2423 09-25-90   9:21p
	OKAY     EXE      4946 09-25-90   9:22p
	       26 file(s)      60284 bytes

	Directory of A:\CHAP3

	.            <DIR>     08-30-93  12:38p
	..           <DIR>     08-30-93  12:38p
	C0       ASM      6491 09-25-90  10:07p
	CHAP3MK  BAT       487 09-25-90  10:23p
	DEV      ASM      2081 09-25-90  10:05p
	DEV      EXE       613 09-25-90  10:22p
	DEVCON   C        2801 05-14-91   2:49a
	DEVCON   EXE      7053 05-14-91   2:49a
	DEVLOD   C       12913 09-25-90  10:14p
	DEVLOD   COM      1954 09-25-90  10:23p
	DOSVER   C        1456 09-25-90  10:07p
	DOSVER   EXE      7657 09-25-90  10:23p
	MAKEFILE           464 09-25-90  10:07p
	MEM      C        7097 09-25-90  10:01p
	MEM      EXE     11445 09-25-90  10:22p
	MEM1     C        3075 09-25-90   9:50p
	MEM1     EXE     10145 09-25-90  10:21p
	MOVUP    ASM      2399 09-25-90  10:07p
	ROOTS    C         631 09-25-90  10:08p
	ROOTS    EXE      5995 09-25-90  10:22p
	STRATST  C        1914 09-25-90  10:08p
	STRATST  EXE      6559 09-25-90  10:22p
	       22 file(s)      93230 bytes

	Directory of A:\CHAP4

	.            <DIR>     08-30-93  12:38p
	..           <DIR>     08-30-93  12:38p
	2FOPEN   SCR      1299 09-25-90  10:46p
	BUFFERS  C        1210 09-25-90  10:41p
	BUFFERS  EXE      6075 09-25-90  11:05p
	CHAP4MK  BAT      1028 09-25-90  11:18p
	COUNTF   C         964 09-25-90  10:49p
	COUNTF   EXE      6739 09-25-90  11:06p
	CURRDIR  C        2605 09-25-90  10:42p
	CURRDIR  H        1034 09-25-90  10:42p
	DOSSTRUC SCR      4880 09-25-90  10:45p
	DPBTEST  C        3488 09-25-90  10:41p
	DPBTEST  EXE      7407 09-25-90  11:05p
	DRVOFF   EXE      6563 09-25-90  11:06p
	DRVSET   C        1747 09-25-90  10:44p
	DRVSET   EXE      6563 09-25-90  11:06p
	ENUMDRV  C         859 09-25-90  10:42p
	ENUMDRV  EXE      7019 09-25-90  11:05p
	FAKEFRMT ASM      3809 09-25-90  10:41p
	FAKEFRMT COM      6234 09-25-90  11:04p
	FHANDLE  C        2361 09-25-90  11:09p
	FHANDLE  EXE      7481 09-25-90  11:09p
	FILES    C        9811 05-14-91   2:54a
	FILES    EXE      7674 03-23-91   7:33p
	FREEUP   EXE      8155 09-25-90  11:06p
	H2NAME   C        2940 09-25-90  10:44p
	H2NAME   EXE     10513 09-25-90  11:06p
	MOV      C        2944 05-14-91   3:21a
	MOV      EXE      5728 05-14-91   3:20a
	PHANTOM  EXE     14832 05-14-91   3:09a
	PHANTOM  PAS     41899 05-14-91   3:33a
	TRUENAME C        1250 05-14-91   3:40a
	TRUENAME EXE      5400 05-14-91   3:38a
	       33 file(s)     190511 bytes

	Directory of A:\CHAP5

	.            <DIR>     08-30-93  12:39p
	..           <DIR>     08-30-93  12:39p
	CHAP5MK  BAT       266 09-26-90  11:00p
	DO2E     ASM       566 09-26-90  10:42p
	DOSSWAP  C        5787 01-21-91   3:33p
	EXTERR   C        1239 09-26-90   9:01p
	FILE     C        1789 09-26-90   9:03p
	HAVE2E   ASM       376 09-26-90  10:41p
	INDOS    C        1830 09-26-90   9:01p
	MAKEFILE          1929 09-26-90  10:34p
	MEM      C        7733 09-26-90  10:39p
	MULTI    C       10944 09-26-90  10:26p
	MULTI    EXE      8277 09-26-90  10:52p
	MULTTEST C        9841 09-13-90   9:10p
	PSP      C        1095 09-26-90  10:11p
	PUT      C        1996 09-26-90   9:03p
	PUT      H         779 09-26-90   9:03p
	SEND2E   C         598 09-26-90  10:43p
	STACK    ASM      1920 09-26-90  10:11p
	STSR2E   EXE     12581 01-24-91   7:14p
	STSRFILE EXE     11755 01-21-91   3:21p
	STSRMEM  EXE     13077 01-21-91   3:16p
	TEST2E   C        1972 01-24-91   7:16p
	TSR      H        1427 09-26-90   9:02p
	TSR2E    EXE     11861 01-24-91   7:17p
	TSREXAMP C       15783 09-26-90  10:26p
	TSRFILE  EXE     11019 09-26-90  10:50p
	TSRMEM   EXE     12357 09-26-90  10:50p
	TSRUTIL  ASM      6329 09-26-90   9:02p
	       29 file(s)     155126 bytes

	Directory of A:\CHAP6

	.            <DIR>     08-30-93  12:39p
	..           <DIR>     08-30-93  12:39p
	DO2E     ASM       566 09-27-90  12:16a
	EEA      ASM      1828 09-27-90  12:43a
	ENVEDT   C       11866 09-27-90  12:43a
	ENVEDT   EXE      9203 09-27-90  12:39a
	ENVPKG   ASM      1070 09-26-90  11:46p
	EPTST    C         863 09-27-90  12:05a
	EPTST    EXE      6569 09-27-90  12:05a
	FMEV     C        1218 09-27-90  12:15a
	FMEV     EXE      6981 09-27-90  12:14a
	HAVE2E   ASM       376 09-27-90  12:16a
	INSTCMD  C        5609 05-14-91   4:03a
	INSTCMD  EXE      9239 09-27-90  12:00a
	INSTCMD  SCR       609 05-14-91   4:03a
	MSTENVP  C        4711 09-27-90  12:09a
	MSTENVP  EXE      6979 09-27-90  12:06a
	NEV      C         673 09-27-90  12:13a
	NEV      EXE      6021 09-27-90  12:13a
	NXTEVAR  ASM       601 09-27-90  12:11a
	SEND2E   C         598 09-27-90  12:17a
	SWITCHAR C         696 09-26-90  11:52p
	SWITCHAR EXE      2907 09-26-90  11:52p
	TEST2E   C         706 01-24-91   7:48p
	TEST2E   EXE      7231 01-24-91   7:48p
	TSHELL   C        2943 05-14-91   2:59a
	TSHELL   COM      7026 05-14-91   2:58a
	       27 file(s)      97089 bytes

	Directory of A:\CHAP7

	.            <DIR>     08-30-93  12:39p
	..           <DIR>     08-30-93  12:39p
	CMACROS  INC     17144 07-26-88  12:00a
	COMMANDS ASM     15289 06-17-90  11:20a
	DIS      ASM     16809 08-25-90   1:25a
	DOS      INC       798 05-18-90   5:18p
	DOSIO    ASM      1168 05-28-90   4:19p
	MON      ASM      9164 09-27-90  12:47a
	MON      COM      5027 08-25-90   1:26a
	MON      MAK       411 09-27-90  12:53a
	MONOIO   ASM      4038 06-17-90  11:26a
	ROMIO    ASM      2610 08-03-90   8:23p
	ROMMON   COM      5648 09-04-90   7:53p
	ROMMON   MAK       497 09-27-90   1:00a
	SERIO    ASM      2820 08-03-90   9:55p
	SERMON   COM      5680 09-04-90   7:52p
	SERMON   MAK       497 09-27-90  12:54a
	TRACE    ASM      6863 08-24-90   9:31p
	UTIL     ASM      3841 06-16-90  11:48p
	WINDBG   ASM      4593 07-01-90  11:21a
	WINMON   COM      5774 08-25-90   1:26a
	WINMON   MAK       502 09-27-90  12:59a
	       22 file(s)     109173 bytes

	Directory of A:\CHAP8

	.            <DIR>     08-30-93  12:39p
	..           <DIR>     08-30-93  12:39p
	CMDSPY   EXE     45616 09-07-90   9:15a
	DISK     SCR      5055 09-26-90   8:51p
	EXEC     SCR       759 09-26-90   8:54p
	FOPEN    SCR      1152 09-26-90   8:50p
	INTRSPY  DOC      8720 09-27-90  12:44a
	INTRSPY  EXE     14144 09-07-90   9:15a
	LSTOFLST SCR      2089 09-26-90   8:50p
	MEM      SCR       684 09-26-90   8:51p
	NETBIOS  SCR       754 09-27-90   1:34a
	UNDOC    SCR      1557 09-26-90   8:50p
	VEC      SCR       185 09-27-90   1:35a
	       13 file(s)      80715 bytes

	Total files listed:
	      180 file(s)     789601 bytes
	                      377856 bytes free

### Directory of Undocumented DOS, 2nd Ed. (BIN)

     Volume in drive A is UNDOC-DOS2B
    
    Directory of A:\
    
    CHAP1        <DIR>     01-24-18   2:26a
    CHAP10       <DIR>     01-24-18   2:24a
    CHAP2        <DIR>     01-24-18   2:26a
    CHAP3        <DIR>     01-24-18   2:25a
    CHAP4        <DIR>     01-24-18   2:25a
    CHAP5        <DIR>     01-24-18   2:25a
    CHAP6        <DIR>     01-24-18   2:25a
    CHAP7        <DIR>     01-24-18   2:25a
    CHAP8        <DIR>     01-24-18   2:24a
    CHAP9        <DIR>     01-24-18   2:24a
    INTRLIST     <DIR>     01-24-18   2:24a
           11 file(s)          0 bytes
    
    Directory of A:\CHAP1
    
    .            <DIR>     01-24-18   2:26a
    ..           <DIR>     01-24-18   2:26a
    MSDETECT EXE      8909 01-24-18   2:26a
    NODOSMGR EXE     10715 01-24-18   2:26a
            4 file(s)      19624 bytes
    
    Directory of A:\CHAP10
    
    .            <DIR>     01-24-18   2:24a
    ..           <DIR>     01-24-18   2:24a
    ENVEDT   EXE     11429 01-24-18   2:24a
    EPTEST   EXE      7377 01-24-18   2:24a
    F3TEST   EXE       894 01-24-18   2:24a
    INSTCMD  EXE     10549 01-24-18   2:24a
    MSTENVP  EXE      8287 01-24-18   2:24a
    REDIR    EXE     10339 01-24-18   2:24a
    SWITCHAR EXE      2943 01-24-18   2:24a
    TEST2E   EXE      8075 01-24-18   2:24a
    TSHELL   COM      7614 01-24-18   2:24a
           11 file(s)      67507 bytes
    
    Directory of A:\CHAP2
    
    .            <DIR>     01-24-18   2:26a
    ..           <DIR>     01-24-18   2:26a
    DOSVER   EXE     11115 01-24-18   2:26a
    FUNC0E32 EXE      9705 01-24-18   2:26a
    LASTDRV  EXE       561 01-24-18   2:26a
    LASTDRV2 EXE       635 01-24-18   2:26a
    OKAY     EXE      6243 01-24-18   2:26a
    XLASTDRV EXE     10927 01-24-18   2:26a
            8 file(s)      39186 bytes
    
    Directory of A:\CHAP3
    
    .            <DIR>     01-24-18   2:25a
    ..           <DIR>     01-24-18   2:25a
    CURRDRIV EXE      6006 01-24-18   2:26a
    DENUMDRV EXE     12755 01-24-18   2:26a
    DEV      EXE      7682 01-24-18   2:26a
    DLASTDRV EXE      8001 01-24-18   2:26a
    DOSSPEED EXE      9337 01-24-18   2:26a
    DPMITEST EXE      7749 01-24-18   2:26a
    DSFTWLK2 EXE      9827 01-24-18   2:26a
    DVMWALK  EXE     10251 01-24-18   2:26a
    ENUMDRV  EXE     12755 01-24-18   2:26a
    HELLO    EXE      3668 01-24-18   2:26a
    HELLO2   EXE      3662 01-24-18   2:26a
    ISWIN    EXE      7427 01-24-18   2:26a
    LASTDRIV EXE      8001 01-24-18   2:26a
    LASTDRV  EXE      5876 01-24-18   2:26a
    SFTWALK  EXE     13796 01-24-18   2:26a
    SFTWALK2 EXE      6938 01-24-18   2:26a
    STUB     386      8735 01-24-18   2:26a
    TRUENAME EXE      7852 01-24-18   2:26a
    UNDOC    EXE     12922 01-24-18   2:25a
    UNDOSMGR 386      9269 01-24-18   2:25a
    VMWALK   EXE     10251 01-24-18   2:25a
    VXD      386      1737 01-24-18   2:25a
    WENUMDRV EXE     15398 01-24-18   2:25a
    WINPSP   EXE     14678 01-24-18   2:25a
    WLASTDRV EXE      5876 01-24-18   2:25a
    WSFTWLK2 EXE      6938 01-24-18   2:25a
    WVMWALK  EXE     38723 01-24-18   2:25a
    W_ENMDRV EXE     40535 01-24-18   2:25a
    W_VMWALK EXE     16526 01-24-18   2:25a
    SAVE     386      8757 01-24-18   2:26a
           32 file(s)     331928 bytes
    
    Directory of A:\CHAP4
    
    .            <DIR>     01-24-18   2:25a
    ..           <DIR>     01-24-18   2:25a
    IS_DRDOS EXE      7647 01-24-18   2:25a
    PSPTEST  EXE      6807 01-24-18   2:25a
            4 file(s)      14454 bytes
    
    Directory of A:\CHAP5
    
    .            <DIR>     01-24-18   2:25a
    ..           <DIR>     01-24-18   2:25a
    CMDSPY   EXE     69708 01-24-18   2:25a
    INTRSPY  EXE      5956 01-24-18   2:25a
            4 file(s)      75664 bytes
    
    Directory of A:\CHAP6
    
    .            <DIR>     01-24-18   2:25a
    ..           <DIR>     01-24-18   2:25a
    DEV_FUNC EXE      7195 01-24-18   2:25a
    FTAB     EXE     11125 01-24-18   2:25a
    INTCHAIN EXE     14389 01-24-18   2:25a
    INTVECT  EXE      9767 01-24-18   2:25a
    MAP      EXE      8951 01-24-18   2:25a
    NICEDBG  EXE     81412 01-24-18   2:25a
            8 file(s)     132839 bytes
    
    Directory of A:\CHAP7
    
    .            <DIR>     01-24-18   2:25a
    ..           <DIR>     01-24-18   2:25a
    DEV      EXE       625 01-24-18   2:25a
    DEVLOD   COM      2849 01-24-18   2:25a
    FIRSTHI  EXE      6898 01-24-18   2:25a
    ROOTS    EXE      6823 01-24-18   2:25a
    UDMEM    EXE     14481 01-24-18   2:25a
    UDMEM1   EXE      7679 01-24-18   2:25a
            8 file(s)      39355 bytes
    
    Directory of A:\CHAP8
    
    .            <DIR>     01-24-18   2:24a
    ..           <DIR>     01-24-18   2:24a
    BUFFERS  EXE      8659 01-24-18   2:25a
    CLUSTNAM EXE     11043 01-24-18   2:25a
    DPBTEST  EXE      9529 01-24-18   2:25a
    DRVOFF   EXE      7827 01-24-18   2:25a
    DRVSET   EXE      7827 01-24-18   2:25a
    ENUMDRV  EXE     10551 01-24-18   2:25a
    FAT      EXE      9261 01-24-18   2:25a
    FHANDLE  EXE     11479 01-24-18   2:25a
    FILES    EXE      9357 01-24-18   2:25a
    H2NAME   EXE     11271 01-24-18   2:25a
    IS_SHARE EXE      6003 01-24-18   2:24a
    IS_STACK EXE      7903 01-24-18   2:24a
    LONGFILE EXE      7544 01-24-18   2:24a
    MDFAT    EXE     12149 01-24-18   2:24a
    NAMCLUST EXE     10951 01-24-18   2:24a
    NETDRV   EXE      6869 01-24-18   2:24a
    PHANTOM  EXE     14412 01-24-18   2:24a
    SECTDUMP EXE     12789 01-24-18   2:24a
    SFTWALK  EXE      6933 01-24-18   2:24a
    SFT_FREE EXE      6691 01-24-18   2:24a
    SHARHOOK EXE      7173 01-24-18   2:24a
    TRUNAM   EXE      8975 01-24-18   2:24a
    WFILES   EXE     15226 01-24-18   2:24a
           25 file(s)     220422 bytes
    
    Directory of A:\CHAP9
    
    .            <DIR>     01-24-18   2:24a
    ..           <DIR>     01-24-18   2:24a
    CRITSECT EXE      8247 01-24-18   2:24a
    MULTI    EXE      8665 01-24-18   2:24a
    STSR2E   EXE     15069 01-24-18   2:24a
    STSRFILE EXE     14315 01-24-18   2:24a
    STSRMEM  EXE     16733 01-24-18   2:24a
    TSR2E    EXE     14221 01-24-18   2:24a
    TSRFILE  EXE     13467 01-24-18   2:24a
    TSRMEM   EXE     15885 01-24-18   2:24a
           10 file(s)     106602 bytes
    
    Directory of A:\INTRLIST
    
    .            <DIR>     01-24-18   2:24a
    ..           <DIR>     01-24-18   2:24a
    INTERVUE EXE     16480 01-24-18   2:24a
            3 file(s)      16480 bytes
    
    Total files listed:
          128 file(s)    1064061 bytes
                          115712 bytes free
    
### Directory of Undocumented DOS, 2nd Ed. (SRC)

     Volume in drive A is UNDOC-DOS2S
    
    Directory of A:\
    
    CHAP1        <DIR>     01-24-18   2:58p
    CHAP10       <DIR>     01-24-18   2:58p
    CHAP2        <DIR>     01-24-18   2:58p
    CHAP3        <DIR>     01-24-18   2:58p
    CHAP4        <DIR>     01-24-18   2:58p
    CHAP6        <DIR>     01-24-18   2:58p
    CHAP7        <DIR>     01-24-18   2:58p
    CHAP8        <DIR>     01-24-18   2:58p
    CHAP9        <DIR>     01-24-18   2:58p
            9 file(s)          0 bytes
    
    Directory of A:\CHAP1
    
    .            <DIR>     01-24-18   2:58p
    ..           <DIR>     01-24-18   2:58p
    MSDETECT C        5538 04-23-98   9:20a
    NODOSMGR C        3256 09-16-93   7:27a
            4 file(s)       8794 bytes
    
    Directory of A:\CHAP10
    
    .            <DIR>     01-24-18   2:58p
    ..           <DIR>     01-24-18   2:58p
    DO2E     ASM       820 08-10-93   4:12p
    EEA      ASM      1994 04-10-93   9:12p
    ENVEDT   C       14111 04-10-93   9:27p
    ENVPKG   ASM      1267 08-10-93   4:29p
    EPTEST   C         810 08-10-93   4:29p
    F3TEST   ASM      2265 08-10-93   4:12p
    FIRSTHI  C        3209 08-10-93   3:48p
    FMEV     C        1098 08-10-93   4:11p
    HAVE2E   ASM       546 09-16-93  12:21p
    INSTCMD  C        5456 09-16-93   7:23a
    MSTENVP  C        4424 08-10-93   4:33p
    NEV      C         553 08-10-93   4:10p
    NXTEVAR  ASM       589 04-10-93   9:16p
    REDIR    C        2403 08-10-93   4:10p
    SEND2E   C         600 08-10-93   4:11p
    SWITCHAR C         611 08-10-93   4:16p
    TEST2E   C         601 09-15-93   3:49p
    TSHELL   C        2647 09-17-93   8:30a
    UNDOCDOS H       13911 09-15-93   4:47p
           21 file(s)      57915 bytes
    
    Directory of A:\CHAP2
    
    .            <DIR>     01-24-18   2:58p
    ..           <DIR>     01-24-18   2:58p
    DOSVER   C        3331 09-16-93   7:21a
    FUNC0E32 C        1642 09-15-93   1:45p
    LASTDRV  ASM      1272 08-09-93   8:59a
    LASTDRV  C         857 08-09-93   9:10a
    LASTDRV  PAS       431 08-09-93   9:47a
    LASTDRV2 ASM      2754 08-09-93   9:00a
    LASTDRV2 C        1085 08-09-93   9:11a
    LASTDRV2 PAS       838 08-09-93   9:48a
    LASTDRV3 C         498 08-09-93   9:11a
    LASTDRV3 PAS      2217 08-09-93   9:48a
    LASTDRV4 C        1864 08-09-93   9:11a
    LASTDRV5 C        2496 08-09-93   9:11a
    LASTDRV6 C        1095 08-09-93   9:12a
    OKAY     C        2713 09-15-93  12:44p
    XLASTDRV C        9230 09-15-93   1:46p
           17 file(s)      32323 bytes
    
    Directory of A:\CHAP3
    
    .            <DIR>     01-24-18   2:58p
    ..           <DIR>     01-24-18   2:58p
    CTRL_C   ASM       238 08-14-93   1:06p
    CURRDRIV C        1331 09-15-93   2:09p
    DESQVIEW C         696 09-15-93   3:27p
    DEV      C        6051 09-17-93  11:14a
    DOSSPEED C        1548 08-14-93  12:57p
    DPMISH   C        3902 08-14-93   1:11p
    DPMISH   H         816 08-09-93  11:40a
    DPMITEST C        1051 04-24-98   4:39p
    ENUMDRV  C        8038 09-16-93   1:22p
    GETSDA   C         581 08-14-93  12:55p
    HELLO    C         248 08-09-93  10:22a
    HELLO2   C         609 07-31-95   3:10p
    ISWIN    C        4339 08-09-93  10:21a
    LASTDRIV C        1848 08-14-93  12:54p
    LASTDRV  C        1192 09-15-93   2:44p
    NESTTASK C         415 03-17-99   9:00a
    PRINTF   C        2825 08-14-93   1:02p
    PRINTF   H         183 08-09-93  10:21a
    PROT     C        7575 04-15-95   8:02a
    PROT     H        2528 09-15-93   4:47p
    SFTWALK  C         998 09-15-93   2:41p
    SFTWALK2 C        3537 08-16-93   5:38p
    SYSVARS  C         451 08-14-93  12:55p
    TMP      C          72 08-05-98   2:20p
    TRUENAME C        2246 08-09-93  11:42a
    UNDOC    C        1425 08-14-93  12:28p
    UNDOSMGR ASM      4875 08-05-98   2:50p
    VMWALK   C        3612 09-17-93   8:38a
    VMWALK   H        2052 09-16-93   1:40p
    VXDCALLS C        2120 08-09-93  12:34p
    VXDCALLS H        1844 08-09-93  12:13p
    W3MAP    H       15297 08-09-93   2:11p
    WINPSP   C        5587 09-15-93   4:49p
    WVMWALK  C        3699 09-15-93   1:49p
    STUB     ASM      1881 06-26-98  10:57a
           37 file(s)      95710 bytes
    
    Directory of A:\CHAP4
    
    .            <DIR>     01-24-18   2:58p
    ..           <DIR>     01-24-18   2:58p
    GEN_UMB  PAS      2066 08-09-93   3:19p
    GEO_FULK ASM      1480 08-09-93   3:20p
    IS_DRDOS C        3435 07-28-98   4:51p
    PSPTEST  C        2968 03-07-99   5:38p
            6 file(s)       9949 bytes
    
    Directory of A:\CHAP6
    
    .            <DIR>     01-24-18   2:58p
    ..           <DIR>     01-24-18   2:58p
    DEV_FUNC C        1656 09-07-93  12:10p
    FTAB     C        1778 08-09-93   3:58p
    INTCHAIN C        5277 01-29-98   9:48a
    INTVECT  C        1860 09-15-93   4:45p
    MAP      C        6653 09-15-93   3:07p
            7 file(s)      17224 bytes
    
    Directory of A:\CHAP7
    
    .            <DIR>     01-24-18   2:58p
    ..           <DIR>     01-24-18   2:58p
    C0       ASM      6491 03-13-93   1:17p
    DEV      ASM      2326 08-10-93  12:12p
    DEVLOD   C       22201 08-19-93  10:11a
    FIRSTHI  C        3209 08-10-93   3:48p
    MOVUP    ASM      1691 03-13-93   1:17p
    ROOTS    C         556 08-10-93  12:11p
    TESTNAME ASM      1650 08-14-93   3:27p
    UDMEM    C        9155 09-15-93   4:39p
    UDMEM1   C        1464 08-10-93   3:37p
    UNDOCDOS H       13611 09-15-93   4:45p
           12 file(s)      62354 bytes
    
    Directory of A:\CHAP8
    
    .            <DIR>     01-24-18   2:58p
    ..           <DIR>     01-24-18   2:58p
    BUFFERS  C        5824 09-15-93   9:53a
    CLUSTNAM C        6170 09-15-93   9:41a
    CURRDIR  C        2076 08-09-93   5:01p
    CURRDIR  H        1936 09-15-93   9:56a
    DISKSTUF C        6578 09-15-93   9:36a
    DISKSTUF H        2319 09-15-93   9:37a
    DPBTEST  C        2378 09-15-93   9:42a
    DRVSET   C        3661 09-16-93   7:37a
    ENUMDRV  C        2320 09-15-93   9:55a
    FAT      C        1795 09-15-93   9:17a
    FHANDLE  C        4163 09-15-93  11:56a
    FILES    C        9741 09-16-93   7:34a
    H2NAME   C        3654 09-15-93  11:40a
    IS_DSPAC C        1616 08-09-93   5:01p
    IS_SHARE C        1313 08-10-93   9:32a
    IS_STACK C        2444 09-15-93  11:24a
    MDFAT    C        6516 09-15-93  10:32a
    NAMCLUST C        6808 09-15-93   9:32a
    NETDRV   C        1287 09-15-93  11:26a
    PHANTOM  C       64629 09-15-93  12:21p
    SECTDUMP C        2015 09-13-93   2:14p
    SFTWALK  C        1266 08-09-93   5:03p
    SFT_FREE C        3031 09-15-93  11:44a
    SHARHOOK C        1449 09-17-93   8:10a
    TRUNAM   C         435 08-14-93  12:09p
           27 file(s)     145424 bytes
    
    Directory of A:\CHAP9
    
    .            <DIR>     01-24-18   2:58p
    ..           <DIR>     01-24-18   2:58p
    BREAK    C         726 08-10-93  10:15a
    CRITSECT C        4052 08-13-93   1:35p
    DO2E     ASM       566 09-26-90   9:42p
    DOSSWAP  C        6249 08-10-93  10:25a
    EXTERR   C        1694 09-05-92   9:20p
    FILE     C        1754 08-10-93  10:18a
    HAVE2E   ASM       546 09-16-93  12:21p
    INDOS    C        1809 07-18-92   4:57a
    MULTI    C       12150 04-25-95   2:42a
    NOTIFY   ASM      6719 10-02-92  10:15p
    PSP      C        1168 08-10-93  10:58p
    PUT      C        2139 08-11-93   2:58p
    PUT      H         781 08-10-93   9:45a
    SEND2E   C         598 09-26-90   9:43p
    STACK    ASM      1869 07-18-92   4:56a
    SWITCHER C        7145 08-10-93  10:12a
    TEST     C         134 09-15-92   9:32p
    TEST2E   C        1660 08-11-93   9:36a
    TSR      H        2923 08-11-93   4:38p
    TSREXAMP C       19605 08-13-93   1:44p
    TSRUTIL  ASM      7366 12-03-92   9:03p
    UDMEM    C       10101 08-11-93   2:57p
    UNDOCDOS H       13842 08-02-92   9:43a
           25 file(s)     105596 bytes
    
    Total files listed:
          165 file(s)     535289 bytes
                          633344 bytes free
    
### Errata (1st Edition)

	Date: Mon, 18 Mar 91 15:03:13 EST
	From: Andrew Schulman <andrew@pharlap.com>
	Subject: UNDOCUDOS errata -- part 1 of 3
	
	             Errata, Commentary, and "Release Notes" for
	                          UNDOCUMENTED DOS:
	 A Programmer's Guide to Reserved MS-DOS Functions and Data Structures
	          by Andrew Schulman, Raymond J. Michels, Jim Kyle,
	              Tim Paterson, David Maxey, and Ralf Brown
	(Reading MA: Addison-Wesley, 1990, 694 pp., $39.95, ISBN 0-201-57064-5)
	
	        Errata, Commentary, and "Release Notes" - 9 March 1991
	                     compiled by Andrew Schulman
	                          andrew@pharlap.com
	                            CIS 76320,302
	                         (617) 661-1510 x238
	
	    Here are some corrections and commentary to UNDOCUMENTED DOS.
	Thanks to everyone who sent in corrections! (Your help is
	acknowledged in the appropriate place below.)
	
	    NOTE: If you are having problems reading either of the two disks
	that come with UNDOCUDOS, please contact the publisher, Addison-Wesley,
	for replacement disks. Call 617-944-3700, and ask for Debby McKenna.
	
	
	11      As an example of the prevalent attitude towards using undocumented
	        features, it might have been useful to include a quotation, such
	        as "It has been our experience that 'undocumented goodies' are
	        interesting to look at, but dangerous to include in software that
	        is intended for general distribution" (Paul Yao, _Peter Norton's
	        Windows 3.0 Power Programming Techniques_, New York: Bantam Books,
	        December 1990, p. 108; this is quite a good book, by the way).
	        The best counter-example is Windows 3.0 itself, which (as shown
	        on p. 18 of UNDOCUDOS) makes extremely heavy use of 
	        undocumented DOS functions; another example is Microsoft's
	        Windows debugger CVW, which relies heavily on such undocumented
	        Windows functions as WinDebug() and SetEventHook().
	
	16      In the UNDOC.SCR Intrspy script, "DS:SI-byte" and the two
	        occurrences of "DS:DX-byte" should read "DS:SI->byte" and
	        "DS:DX->byte" (arrow -> not hyphen -).
	
	18      The reference to "DOSSPY" should read "INTRSPY."
	
	19      "used in chapter 5 on TSRs": the DOS SDA is also used extensively
	        in chapter 4 on the DOS file system and network redirector.
	
	26      "Get List of List" should of course read "Get List of Lists"
	        (by the way, the actual name for this in the MS-DOS source code
	        is apparently SYSVARS).
	
	28      The section asserting that 25% of DOS is undocumented was not
	        meant to be taken too seriously.
	
	37      The second paragraph should also note that the _asm keyword
	        produces the MSC 6 warning "C4204: in-line assembler precludes
	        global optimizations."
	
	45      Two readers, Martin Heller (BIX: mheller) and Terrence Vaughn
	        (CIS: 72327,2442) found that the assembly-language code at the
	        bottom of the page has an incorrect conditional jump and a
	        missing label. The block at the bottom of the page should read:
	            
	                    jne     dos3up      ; DOS 3+    ; CHANGED
	                    mov     si, 10h     ; DOS 2.x
	                    jmp     short get
	            dos3up: cmp     al, 3                   ; CHANGED
	                    jne     ofs21
	                    and     ah, ah      ; DOS 3.0
	
	        The code continues as is on the top of the next page.
	
	47      "Testing simply for equality (for example version >= 4)" is
	        confused. Should read "==" not ">=" because we're trying
	        to provide an example of what _not_ to do. Testing if
	        (version >= 4) is the correct way to do it; testing if
	        (version == 4) is the wrong way to do it.  (This correction
	        is probably more confusing than our original typographical
	        error!)
	
	65      Four lines from the bottom, "interrupt handle" should read
	        "interrupt handler."
	
	70      "Programs written for Microsoft Windows 3.0 can make
	        undocumented DOS calls without any special handling. This
	        includes Windows 3.0 running in 386 enhanced mode."
	
	        Ahem! Boy, is this statement wrong. I had tested only one
	        undocumented DOS call from a Windows program when I wrote
	        that. It was the LASTDRIVE check from Chapter 2, where 
	        INT 21h AH=52h is called, and then the LASTDRIVE byte is
	        read out of the List of Lists.
	
	        It turns out, this _just happened_ to work, but I should still
	        have known better than to make this stupid claim. Windows
	        3.0 programs in Standard and Enhanced modes are running in
	        protected mode (which is why Windows is finally a usable
	        product). Thus, the same restrictions noted elsewhere in Chapter
	        2 for making undocumented DOS calls from protected mode apply
	        to Windows programs as well. The LASTDRIVE check just happened
	        to work, because INT 21h AH=52h seems to be transparently
	        supported in protected mode (this can't be relied on, however)
	        and because reading the LASTDRIVE byte out of the List of Lists
	        doesn't involve any further pointer dereferencing. For example,
	        trying to walk the DOS device chain or MCB chain would _not_
	        have worked; other undocumented DOS calls (e.g., INT 21h
	        AX=5D06h) are not supported at all in protected mode.
	
	        In order to make undocumented DOS calls from a Windows program
	        running in Standard or Enhanced mode (the only modes that matter),
	        you must use the DOS Protected Mode Interface (DPMI) function
	        to "Simulate Real Mode Interrupt" (INT 31h AX=0300h). In almost
	        all cases, you will then need to map one or more real-mode
	        pointers into your protected-mode address space. This can be 
	        done using either DPMI (the Allocate LDT Descriptors [INT 31h
	        AX=0000h], Get Descriptor [INT 31h AX=000Bh] and Set Descriptor
	        [INT 31h AX=000Ch] calls) or using the Windows AllocSelector()
	        call together with -- ta da! -- some undocumented Windows calls
	        (which will be the subject of a forthcoming book by A. Schulman,
	        D. Maxey, et al., titled _Undocumented Windows Programming_):
	
	        /* a few useful undocumented KERNEL functions */
	        extern DWORD FAR PASCAL GetSelectorBase(unsigned sel);
	        extern DWORD FAR PASCAL GetSelectorLimit(unsigned sel);
	        extern void FAR PASCAL SetSelectorBase(unsigned sel, DWORD base);
	        extern void FAR PASCAL SetSelectorLimit(unsigned sel, DWORD limit);
	
	        In other cases (for example, INT 21h AH=60h), you will need to 
	        allocate a conventional-memory buffer for use by an undocumented
	        DOS call. Use the Windows GlobalDosAlloc() call for that.
	
	        In any case, the statement that Windows programs "can make
	        undocumented DOS calls without any special handling" couldn't
	        be further from the truth. The above notes should get you
	        started. In addition, a forthcoming PC MAGAZINE Lab Notes
	        by A. Schulman (tentatively titled "Moving DOS Programs to
	        Windows with DPMI") will contain further information on this
	        topic, as will a forthcoming book by A. Schulman and D. Maxey, 
	        tentatively titled _The DOS Programmer's Guide to Microsoft
	        Windows_ (Addison-Wesley, due December 1991).
	
	        Those interested in exploring the innards of Windows might
	        want to check out Alan Cobb's pamphlet _Reverse Engineering
	        Windows and OS/2 Software_. Contact Alan at CIS 73170,3543
	        or BIX/MCI (AlanCobb).
	
	73      Discussion of Phar Lap 386|DOS-Extender: "those weird calls (like
	        undocumented DOS) not transparently supported in protected mode."
	        In 386|DOS-Extender 3.0, many undocumented DOS calls _are_
	        supported in protected mode, so this statement is no longer
	        quite accurate. For example, INT 21h AH=52h returns in ES:EBX
	        a pointer to the List of Lists. However, any far pointers
	        in the data structure remain real-mode far pointers, so these
	        would need special handling.
	
	        The LASTDRIVE example is inadequate to bring out the issue
	        of using far pointers in the List of Lists. In Windows 3.0
	        protected mode, LASTDRIVE just happened to work. The same
	        thing would happen in 386|DOS-Extender 3.0. In the second 
	        edition of UNDOCUDOS, we will need an additional example
	        for these environments.
	
	        Also note that Phar Lap now has a second product, 
	        286|DOS-Extender, with a different API from our 386
	        product. In 286|DOS-Extender, you would call DosRealIntr()
	        to issue an INT 21h AH=52h, and then call DosMapRealSeg()
	        to map any real-mode pointers into your program's
	        protected-mode address space. Several programs from
	        UNDOCUDOS were ported to protected mode using 
	        286|DOS-Extender, and appear in its _Developer's Guide_.
	        
	74      the parenthetical remark should read: "(note that INT 2Fh
	        AH=16h and AH=17h are the Microsoft Windows interface
	        for non-Windows applications; for more information, see
	        the INTRLIST.EXE database on disk)."  A detailed discussion
	        of the Windows INT 2Fh functions will appear in the
	        forthcoming book by Schulman and Maxey, noted earlier.
	
	75      The structures at the top of the page are wrong. A better one
	        is:
	
	            /* structure of a protected-mode descriptor */  
	            typedef struct {
	                unsigned limit, addr_lo;
	                unsigned char addr_hi, access, reserved, addr_xhi;
	                } DESCRIPTOR;   
	
	        If you still want the access-rights byte to use an ACCESS
	        bit field, rather than a plain unsigned char, then you must
	        ensure that the bit field occupies only one byte. Microsoft
	        C allows the following non-standard use of unsigned char
	        in a bit field, so:
	
	            typedef struct {
	                unsigned char accessed   : 1;
	                unsigned char read_write : 1;
	                unsigned char conf_exp   : 1;
	                unsigned char code       : 1;
	                unsigned char xsystem    : 1;
	                unsigned char dpl        : 2;
	                unsigned char present    : 1;
	                } ACCESS;
	
	        An improved version of LDDPMI.C appears at the end of these
	        release notes. (The improved version now works with Borland
	        C++ 2.0, as well as with Microsoft C 6.0 and higher.)
	
	76      In dpmi_init(), after the call to _dos_allocmem(), the
	        following line of code should be added:
	
	            dpmi_flags &= ~1;  // this is a 16-bit protected-mode program
	
	        When INT 2Fh AH=1687h returns the DPMI flags in BX, the bottom
	        bit (dpmi_flags & 1) indicates whether the DPMI host supports
	        32-bit programs (Windows 3.0 enhanced mode does). But when
	        passing flags back into the "Real to Protected Mode
	        Switch Entry Point" via (*dpmi)(), the bottom bit of the
	        flags passed in AX indicates whether _this_ is a 32-bit
	        program. LDDPMI is a 16-bit program, so the bit must be turned
	        off.
	
	79      Before the call to dpmi_set_descriptor(), it would have been
	        much simpler to call a dpmi_get_descriptor() function for some
	        known selector (like the program's DS), and then just change
	        the appropriate base-address and limit fields. 
	
	80      "LDDPMI uses functions such as pmode_printf() rather than
	        plain old printf().... Most DPMI servers will in fact 
	        provide protected-mode INT 21h services (the Windows 3.x
	        DOS extender does, for example), but that is a facility
	        provided by the DPMI server, not by DPMI itself."
	
	        This is literally correct, but it still was foolish not to
	        go ahead and use plain old printf(), since any DPMI
	        server will provide the necessary underlying INT 21h services
	        in protected mode. For example, see the program HELLOPMW.C
	        in Ray Duncan, "An Introduction to the DOS Protected Mode
	        Interface," _PC Magazine_, 12 February 1991, p. 370. 
	        (Duncan's three-part series on DPMI in _PC Magazine_,
	        12 February 1991, 26 February 1991, and 12 March 1991, is
	        an excellent introduction to the topic.)
	
	        In fact, this could have been used as an opportunity to
	        explore yet another semi-undocumented aspect of Windows,
	        since the fact that Windows provides INT 21h services
	        in protected mode is kept pretty well hidden (talk about
	        hiding your light under a bushel!). The only documentation
	        is a brief (five-page) document titled "Windows INT 21H and
	        NetBIOS Support for DPMI," which is included in a packet of
	        Microsoft Windows development notes (Part No. 050-030-313). 
	        (Note also that many more DPMI calls are actually supported
	        by Windows than this document indicates.)
	
	88      "INT 4Bh is used for 'DMA Services'": the actual title of
	        the specification is "Virtual DMA Services (VDS), and is
	        available as Microsoft Part No. 098-10869. It is also
	        supported by Windows 3.0 Enhanced mode and 386MAX.
	
	89      change "is still 138,000 bytes" to "are still 138,000 bytes"
	
	90      It is useful to add one line of code to function walk(), so
	        that the ending address of the MCB chain (usually A000h) is
	        displayed. Change the case 'Z' block so that it reads:
	
	            case 'Z' : /* Zbikowski : end of MCB chain */
	                display(mcb);
	                printf("%04X\n", FP_SEG(mcb) + mcb->size + 1);
	                return;
	
	98-9    Ralf Brown (ralf@cs.cmu.edu) points out that INT F0h or so
	        through FFh contain garbage which appears to pointing into
	        one of the currently loaded programs, because the BIOS uses
	        the upper end of the interrupt vector table as a stack
	        during bootup.
	
	100     The assertion that the C free() function, or the Pascal
	        dispose() function, indirectly uses the DOS memory functions
	        isn't quite true. Calls like free() or dispose() don't call
	        INT 21h Function 49h (Release Memory Block); instead, they
	        simply put freed memory blocks back on a free list. To actually
	        release freed memory blocks back to the operating system, you
	        need to use a function like _heapmin() in Microsoft C 6.0 or
	        mark()/release() in Turbo Pascal.
	
	102     "and will stop searching": Ralf Brown states that this is not
	        true. As it turns out, all three allocation strategies search
	        the entire memory chain. Any search sets all three memory-block
	        variables for all three strategies in the DOS SDA (at offsets
	        1Eh, 20h, and 22h; see UNDOCUDOS, pp. 551, 557), and then
	        returns the appropriate one.
	
	111     "COMMAND.COM is always its own parent, and so..." Fine, but
	        we never explain _why_ COMMAND.COM is always its own
	        parent. Here's a good explanation from BIX:
	
	        ibm.dos/secrets.3 #1106, from drifkind, 1510 chars, 
	        Fri Jan 25 20:26:19 1991
	        --------------------------
	        TITLE: Zombie COMMAND.COM rises from dead
	
	        (I'm practicing to write headlines for the National Enquirer.)
	
	        COMMAND.COM contains the default INT 24h handler, the one that
	        prints "Abort, Retry, Ignore" and so on.  What happens when a
	        critical error occurs while executing an internal DOS command?
	        Obviously, the INT 24h handler knows that COMMAND.COM is running
	        and does something other than abort if you press "A", right?
	
	        No, in fact the critical error handler does nothing special.  If
	        you press "A", it returns 2 and DOS terminates the current
	        process.  So why doesn't COMMAND.COM go away?
	
	        When DOS terminates a process, it uses the "parent PID" field in
	        the process's PSP to figure out what process is going to get
	        control when this one terminates.  If the parent PID is the same
	        as the current PID, however, it does not deallocate the program's
	        memory blocks before exiting.  COMMAND.COM sets the parent PID
	        field equal to its own PID, and points the termination address
	        (at offset 0Ah in the PSP) back into itself.  The result is that,
	        on exit, the current program stays active and retains control.
	
	        We all know that if you run COMMAND.COM with the "/p" switch, it
	        does not terminate when you type "exit".  In fact, it DOES exit.
	        The difference is that, with "/p", it does not restore the
	        original parent PID and termination addresses, so DOS more or
	        less ignores the 4Ch service request, just transferring control
	        back into COMMAND.COM.
	
	        And that is why COMMAND.COM's parent PID field points to itself.
	
	122-4   The DEVCON program has been ported to protected mode: see
	        Phar Lap 286|DOS-Extender _Developer's Guide_, pp. 159-165.
	
	125     Change "if you run DEVCON a dash" to "if you run DEVCON with
	        a dash".
	
	125     Change "it's often forgetten" to "it's often forgotten".
	
	137     The block of code in while (CmdPkt.nunits--), before the
	        call to INT 21h AH=53h, should somewhere explain what we're
	        doing:
	
	            _ES = CmdPkt.brkseg;  /* DS:SI -> BIOS Parameter Block */
	            _DS = CmdPkt.inpseg;  /* ES:BP -> Disk Parameter Block */
	
	139     "The function copyptr()... could have been written in C,
	        but doing so would have required the kind of convoluted
	        expressions that have given C the reputation of being a
	        'write-only' language."  Well, I don't know, but the following
	        looks pretty simple to me:
	
	            typedef void far *FP;
	            void copyptr (FP far *src, FP far *dst) { *dst = *src; }
	
	156     "Not long after that (but before the introduction of DOS
	        2.0), an extra sector was added to the format, bringing the
	        storage capacity up to the 360KB we know today."  In fact,
	        Tim Paterson assures us that was done in DOS 2.0.
	
	157     Re: the mentions of S=0, drifkin (BIX) points out that normal
	        PC block devices number physical sectors starting with 1,
	        not 0. Change 'em all to S=1.
	
	158     Change "major reasons many users to upgrade" to "major reasons
	        for...".
	
	158     "Two copies of the FAT are normally maintained by DOS, but
	        no real reason for doing so has been determined." This was
	        a pretty foolish remark, considering that Tim Paterson is 
	        one of the coauthors, and we only needed to ask him why he
	        did this! The answer is that DOS maintains two copies of
	        the FAT is case of _physical_ disk errors; Microsoft used
	        three FATs in standalone BASIC, and this is where the
	        idea of using multiple FATs came from.
	
	158     On the last line, the phrase "together with a flag bit
	        in the format records" is, as Peter Schultz (CIS 70216,074)
	        pointed out, rather vague. Jim Kyle explains that it really
	        isn't a "flag bit," but rather the top four bits in the
	        DPB highest-cluster word (DPB offset 0Dh; see UNDOCUDOS, 
	        p. 507). Checking these bits is preferable to using the boot
	        record.
	
	159     "Any other value indicates..." In fact, drifkind (BIX) 
	        cautions us not to forget about (F)FF7, which marks bad
	        clusters, and (F)FF0 through (F)FF6, which are reserved.
	
	160     "E5h, which is a valid character for use in a filename":
	        it's valid in DOS 3+.
	
	160     "If the first byte of the filename is E5h..." Why E5h?
	        Tim Paterson says because 8" SSSD disks came preformatted
	        with E5h bytes. A disk out of the box thus looked empty,
	        and was essentially ready-to-go, though the FAT still 
	        needed to be cleared (which was done with the built-in
	        CLEAR command in pre-IBM DOS).
	
	161     FAKEFRMT: roedy (BIX) points out that this utility "will
	        inadvertently bring bad tracks back into active duty."
	        Tim Paterson states that FAKEFRMT shouldn't need to
	        rewrite the boot sector. These issues will be taken up
	        in the second edition.
	
	161     "(Byte 2 of the sector for a 12-bit FAT)" should refer
	        instead to Byte 3. (Another catch by Ralf Brown.)
	
	166     LoL+10h: The last sentence on the page asserts that "if
	        larger, this value is replaced by the new maximum value."
	        Ralf Brown, in yet another catch, points out that LoL+10h
	        is actually increased only for the built-in device drivers
	        located in IO.SYS; if the driver's value is greater than
	        LoL+10h for installable drivers, the loader complains that
	        the sector size is too large.
	
	168     "(available directory in 4+" should read "(available directly
	        in 4+".
	
	176     To the phrase "This means that all the named devices seem to
	        exist in all directories of the file system," add the
	        parenthetical remark that they also exist in subdirectory \DEV,
	        even if no such subdirectory exists on disk.
	
	179     "it differed the data thatwas" should read "it differed from
	        the data that was" (two mistakes!; who the #$%*& edited this
	        stuff?!).
	
	182     "Local Description Table" should of course read "Local Descriptor
	        Table".
	
	186     "file stem" should read "file system".
	
	190-1   The TRUENAME program has been ported to protected mode: see
	        Phar Lap 286|DOS-Extender _Developer's Guide_, pp. 86-92.
	
	191     The variable "s" serves no purpose in main(), and in fact
	        could potentially cause a problem (ya see it?). Change main()
	        to the following:
	
	            main(int argc, char *argv[])
	            {
	                char buf[128];
	                if (argc < 2)
	                    ret("usage: dospath <filename>", 1);
	                if (_osmajor < 3)
	                    ret("requires DOS 3.0 or greater", 1);
	
	                if (truename(argv[1], buf))
	                    ret(buf, 0);
	                else
	                    ret("invalid filename", 1);
	            }
	
	193     "The first SFT appears to always hold five possible open-file
	        entries": Ralf Brown explains that this is because the first
	        SFT is compiled right into MSDOS.SYS, for DOS 2.0 through 4.0.
	            
	197     Neil Rubenking (CIS 72241,50) found that struct file didn't
	        work under DOS 3.0. See corrections for p. 527 below for
	        the correct SFT structure for DOS 3.0. 
	
	198     In the function is_psp() the magic number 0x20CD is never
	        explained. This is merely the opcode for the INT 20h
	        instruction, interpreted as an unsigned quantity.
	
	199     The test "FP int2e = (FP) GETVECT(0x2E)" will of course fail
	        if COMMAND.COM, or a program that mimicks COMMAND.COM's use
	        of INT 2Eh, is not present. For example, what happens when
	        the user is running SH.EXE from the MKS Toolkit as their
	        DOS SHELL=?
	
	199     The IS_AUX(), IS_CON(), and IS_PRN() macros are all missing
	        a test for (s[3] == ' '). Otherwise, we would match possible
	        device names such as "AUXIL", "CONTOUR", and "PRNACHO".
	
	210-3   "More File Handles": After UNDOCUDOS was already out, a 
	        useful article on this topic appeared: David Burki, "DOS
	        File Handle Limits," _TECH Specialist_, February 1991,
	        pp. 51-62.
	
	212     Rather than fail if (new_max > files()), it probably would
	        have been a good idea to show how to grow the SFT tables,
	        a la Quarterdeck's FILES.COM program (included with QEMM).
	
	213     FHANDLE.C is an okay program, but it needs to show things
	        more from a C perspective. We at least need to explain why
	        we use _dos_open() and not open() or fopen(). We need to
	        explain why increasing the number of DOS file handles
	        doesn't give your C program more FILE* capacity.
	        This is an incredibly common question. For now, if
	        you do need to increase the number of FILE* in your Microsoft
	        C program, note that _NFILE can be changed in the startup
	        code (see MSC6 STARTUP\CRT0DAT.ASM).
	
	214-5   Roger Jackson (CIS 76535,75) points out that MOV.C doesn't
	        compile with Microsoft C. The problem is that FP_SEG()
	        and FP_OFF() as used here depend on the Turbo C++ style of
	        these macros. As noted in UNDOCUDOS p. 51, Microsoft C's version
	        of these macros requires an lvalue. To fix MOV.C for MSC,
	        change the two blocks of FP_SEG/FP_OFF code:
	
	            void canonicalize(filespec,canonical,errorlevel)
	            // ...
	            void far *lvalue;
	            regs.h.ah = 0x60 ;
	            lvalue = filespec;
	            regs.x.si = FP_OFF(lvalue) ;
	            segregs.ds = FP_SEG(lvalue) ;
	            lvalue = canonical;
	            regs.x.di = FP_OFF(lvalue) ;
	            segregs.es = FP_SEG(lvalue) ;
	            // ...
	
	            void far *lvalue;
	            dpl.ax = 0x5600 ;   /* indirect function is rename */
	            lvalue = &source;
	            dpl.dx = FP_OFF(lvalue) ;
	            dpl.ds = FP_SEG(lvalue) ; /* DS:DX old filespec */
	            lvalue = &target;
	            dpl.di = FP_OFF(lvalue) ;
	            dpl.es = FP_SEG(lvalue) ; /* ES:DI new filespec */
	
	229-30  Subfunctions 0Eh, 0Fh, 11h, 13h, and 17h: for each, add an
	        additonal required input:
	            
	            SDA.CURR_CDS = Current Directory Structure (CDS) for
	                drive with file
	
	        The entries for these subfunctions are already correct in
	        the appendix to UNDOCUDOS, pp. 607-612.
	
	257     The usage message should point out that PHANTOM -u uninstalls
	        the Phantom drive.
	
	276-7   Tim Paterson pointed out that the "; Microsoft C 6.0 only"
	        comment next to MOV SP, BP (which appears once on each page) 
	        is pretty confused. First of all, the MOV SP, BP must of
	        course be balanced with the earlier MOV BP, SP. Second of 
	        all, this optional save/restore of the stack pointer has
	        to do merely with whether the compiler uses the stack or
	        a register for the variable i. This has nothing to do with 
	        MSC 6.0. Thus, the comment should be removed. 
	
	277     "the large amount of space used for our three-line
	        interrupt handler should go unnoticed." This was supposed to
	        say "should _not_ go unnoticed." See S. Freud, _Psychopathology
	        of Everyday Life_, for further details.
	
	280     "When coding in assembly language, you can easily come up
	        with this number..." Perhaps for .COM files, but certainly
	        for .EXE TSRs, E. Nicholas Cupery (CIS 72657,3646) points
	        out that the number is _not_ so easy to come up with!
	        In fact, our statement was a pure "exercise left for the
	        reader" cop-out (that is, we didn't know the answer either,
	        so we just pretended it was a trivial operation).
	
	        Ted Mirecki (CIS 72631,25; author of the wonderful
	        "Tech Notebook" series in the defunct _PC Tech Journal_),
	        responding to comments by Cupery and Mike R. Lovett
	        (CIS 72361,3715), made the following suggestion for deriving
	        the memory footprint of a multi-segment TSR:
	
	        "Instead of calculating the size of each segment & adding
	        the sizes together, calc the parag address of each segment end and
	        select the highest one. Then subtract the parag address of the PSP, 
	        and voila, you have the number of parags taken up by your program.
	
	        "Say the label of the end of a particular segment is ENDLBL.
	        Then to get its parag address, do the following steps:
	        Add 15 to offset of ENDLBL   (rounds up to next parag boundary)
	        Shift it right 4 bits        (gets # of parags in segment)
	        Add to Segment of ENDLBL     (gives parag addr of end of seg).
	
	        "You can either repeat this for all your segs & choose the highest, 
	        or arrange for the segments to be loaded in some particular order
	        & do it only for the topmost one. 
	
	        "Then get the PSP segment and subtract it from the above."
	
	280     Jerry Watkins (CIS 70521,2401) points out the MSC memory map
	        isn't quite right. In DGROUP, the stack appears lower in
	        memory than the near heap. (In your copy of UNDOCUDOS, just
	        swap the two lines "STACK" and "NEAR HEAP".) 
	
	296     "need to examine is that one that" should read "need to examine
	        is the one that".
	
	320     Several readers have noted that the discussion of the INT 2Ah
	        AH=8xh critical-section functions is skimpy. This will be
	        beefed-up either in a future "Release Notes" for the book, 
	        or at least in the second edition. Jack Brennan
	        (John.Brennan@vi.ri.cmu.edu) made the following comments on
	        INT 2Ah Functions 80h/81h:
	
	        "These calls are only made by the DOS kernel if they are enabled
	        by some rather specialized code. All network redirectors that I
	        have seen enable the calls, as does Windows 3.0 in 386 Enhanced
	        mode (but not in Real or Standard mode). Basically, what needs to
	        be done is as follows:
	
	        "1. Find a table of offsets at location 02C3 in the IBMDOS segment.
	        This loc (02C3) is hard-coded into MSREDIR, the Microsoft Net
	        Redirector. The table is zero terminated.
	
	        "2. For each offset in the table, poke the hex value 50 into the byte
	        at IBMDOS:offset. This replaces a RET instruction with a PUSH AX
	        instruction, allowing the applicable subroutines to execute.
	
	        "I am only certain of this with DOS 3.1 to 3.31.
	
	        "I believe that this enabling code would need to be added to the
	        example TSR in Chapter 5 of Undocumented DOS (TSREXAMP.C) in order 
	        to allow the TSR to be robust in a non-networked, non-Windows,
	        non-MSCDEX, etc., environment (assuming compiling with DOS_SWAP
	        enabled)."
	
	322     The test at the bottom of the page, if (dos_level == 4), is
	        confusing, or will be when DOS 5 comes out. Note that at
	        the beginning of the function, we set:
	
	            else if (_osmajor >= 4)
	                dos_level == 4;
	                
	        This is rather confusing. In any case, this code should work
	        with DOS 5.
	
	325     In the paragraph at the bottom of the page, "(unless, of
	        course, a critical section has been flagged via INT 2Fh)"
	        should of course read "via INT 2Ah."
	
	328     The subhead "TSFILE" should read "TSRFILE".
	
	332     "which we can be used" should read "which can be used".
	
	380     In TSHELL.C, it looks as if TSHELL passes an improperly
	        formatted argument list to COMMAND.COM, but Jim Kyle swears
	        up and down that the code works; it's too tricky, but it's
	        not wrong.
	
	393     "find what is called the 'active' environment, _not_ the
	        master environment." Actually, it seems we made things more
	        difficult than necessary. In fact, the "active" environment
	        is most of the time the one you want. For example, ENVEDT,
	        which works off the master environment, doesn't change the
	        correct environment when running under Windows.
	
	398     "For example, if a .BAT file containing a SET statement is
	        compiled with BAT2EXEC, it fails unexpectedly under this
	        situation producing an 'Out of environment space' message."
	        Doug Boling, author of BAT2EXEC (which appeared in _PC Magazine_, 
	        August 1990), thinks we probably had an old copy of BAT2EXEC.
	        The latest versions of _PC Magazine_ utilities can be downloaded
	        from PCMagnet on CompuServe.
	
	405     The discussion of INT 2Eh should note that the real "meat" on
	        this weird aspect of undocumented DOS can be found in Daniel
	        E. Greenberg, "Reentering the DOS Shell," _Programmer's
	        Journal_, May-June 1990, pp. 28-36. This article is the
	        definitive piece on INT 2Eh.
	
	408     In the comments to TEST2E.C, the Microsoft C compilation
	        instructions should refer to SEND2E.C, not "send2e.asm".
	
	409     We need to discuss the issue of running INT 2Eh "clients" like
	        TEST2E.EXE from within a batch file. Michael Mefford ("Running
	        Programs Painlessly," _PC Magazine_, 16 February 1988) claims
	        that programs using INT 2Eh "will not execute batch files nor
	        work from within a batch file." Jeff Prosise, in a good recent
	        article on undocumented DOS ("Undocumented DOS
	        Functions," _PC Magazine_, 12 February 1991) states: "Be careful
	        about how you call interrupt 2Eh. If you aren't, you can crash
	        your system in certain very common situations. The main one if
	        if the program you're using is running under a batch file. 
	        Since INT 2Eh is nonreentrant, DOS uses it to run batch files.
	        So if you run a batch file using INT 2Eh from your program,
	        your system will crash."
	
	        We too have had problems running programs that use INT 2Eh
	        from within a batch file, but nothing so dramatic as crashing
	        the system. Instead, we have found simply that EXIT is not
	        handled properly and that memory can be lost. In any case,
	        the use (or refraining from use!) of INT 2Eh in a batch
	        file needs further discussion in the next edition of UNDOCUDOS.
	
	449     "protected-mode debugging requires an interface more like
	        that of OS/2's DosPTrace()." At the time, this was just a wild
	        guess. It turned out to be true. If you have the Windows SDK,
	        run EXEHDR \WINDOWS\SYSTEM\WINDEBUG.DLL, and you'll find
	        the description "Ptrace for Windows." In fact, the undocumented
	        WinDebug() function is nearly identical to the poorly-
	        documented DosPTrace() function in OS/2. Microsoft claims
	        that WinDebug() will completely go away in Windows 3.1, to be
	        replaced by a openly-documented new interface. In the meantime,
	        and perhaps for some time even after 3.1 is released, WinDebug()
	        is quite important.
	
	453     At the bottom of the page, the phrase "as noted below, INTRSPY
	        also uses -> to indicate fields in a structure" should be
	        deleted; it's not true. INTRSPY uses -> solely to indicate
	        that a register pair should be treated as a pointer to some
	        type. (For example, ds:dx->byte,asciiz,64.)
	
	458     At the bottom of the page, "The following command used to
	        run CMDSPY.EXE" should refer instead to INTRSPY.EXE.
	
	466     "or it parameters replaceable from the DOS command line":
	        delete the word "it."
	
	482     "that function is not available provided by the Compaq ROM
	        BIOS": delete the word "available."
	
	495     Dan Lanciani's name was unfortunately omitted from the list
	        of major contributors of undocumented-DOS material to the
	        Interrupt List maintained by Ralf Brown. Dan contributed
	        INT 21h and INT 2Fh material. Sorry, Dan.
	
	502-4   History buffs may want to replace the vague note "appears to
	        be for CP/M compatibility" for Functions 18h, 1Dh, 1Eh, and 20h
	        with the actual names of the CP/M-80 and CP/M-86 functions for which
	        holes were apparently left:
	            18h:    Get Bit Map of Active Drives
	            1Dh:    Get Bit Map of Read-Only Drives
	            1Eh:    Set File Attributes
	            20h:    Get/Set User (Sublibrary) Number
	        (See David Cortesi, "CP/M-86 vs. MS-DOS: A Technical Comparison,"
	        _Dr. Dobb's Journal_, July 1982, pp. 14-27; in DDJ Vol. 7, 
	        pp. 280-291. The article notes that "MSDOS was commissioned by
	        IBM and produced by the Microsoft Corporation from a base
	        written by Seattle Computer Products, Inc. Lifeboat Associates,
	        an important software vendor, has undertaken to market the
	        system for other 8086-based machines, and to encourage the
	        development of application programs for it." Gee, wonder if 
	        it'll be successful....)
	
	513     21/4B/03:  Bob Moote of Phar Lap Software (rwm@pharlap.com) has
	        reported a bug in INT 21h Function 4Bh Subfunction 03h (Load
	        Overlay). If there is additional data located in the file after
	        the program (i.e., 21/4B/03 does not hit EOF; e.g., a program
	        with a bound-in DOS extender), Load Overlay will load up to 512
	        extra bytes, overflowing your buffer.
	
	514     The note "DOS 2.x destroys all registers" should be amended to
	        note that in DOS 3+, the BX and DX registers are still bashed.
	        (This is noted correctly on p. 429 of UNDOCUDOS.)
	
	527     Neil Rubenking found that the structure provided for the SFT
	        did not work in DOS 3.0. Robin Walker (RDHW@phoenix.cambridge.edu.uk)
	        supplied the correct information.  Thanks, Robin!!  Here 'tis:
	
	Format of DOS 3.0 system file tables and FCB tables:
	 
	Offset  Size    Description
	 00h    DWORD   pointer to next file table
	 04h    WORD    number of files in this table
	 06h    38h bytes per file                   *** NB ***
	 
	        Offset  Size    Description
	 
	        00h-1Eh as for DOS 3.1+
	 
	        1Fh     WORD    byte offset of directory entry within sector ** NB **
	        21h  11 BYTES   filename in FCB format (no path/period, blank-padded)
	        2Ch     DWORD   (if SHARE loaded) ptr to prev SFT sharing same file
	        30h     WORD    (if SHARE loaded) ??? network machine number, I guess
	        32h     WORD    (if SHARE loaded) PSP segment of file's owner
	        34h     WORD    (if SHARE loaded) offs in SHARE code seg of share rec
	        36h     WORD    ??? only seen 0000h         *** NB ***
	 
	The format of sharing records looks the same as already listed.
	
	544-5   Has anyone found what 2F/57/02, 2F/57/03, and 2F/57/04 do?
	        A reader needs this information!  If you know anything, please
	        contact andrew@pharlap.com.
	
	581-2   2A/80, 2A/81: Please see the notes above (p.320).
	
	597     2F/10/00: Note that DOS 4.01 loads share for media >32M, but
	        only for FCB support. The file-sharing code is not turned on
	        until the first call to 2F/10/00. Also note that Microsoft
	        Windows 3.0 enhanced mode provides its own built-in implementation
	        of SHARE.
	
	;----------------------------------------------------------------------
	
	/*
	LDDPMI.C -- undocumented DOS call from DPMI
	
	Revised substantially from the version in UNDOCUMENTED DOS, pp. 74-80
	
	Works with Microsoft C 6.0 (or higher) and Borland C++ 2.0 (or higher)
	(Some of the _asm convolutions were needed for Borland C++)
	
	sample output:
	    in protected mode
	    Real mode DOS List Of Lists = 028E:0026
	    Protected DOS List Of Lists = 00AD:0026
	    LASTDRIVE=E
	        
	Microsoft C 6.0 (or higher): cl -AS lddpmi.c     
	Borland C++ 2.0 (or higher): bcc -ms lddpmi.c
	*/
	
	#include <stdlib.h>
	#include <stdarg.h>
	#include <stdio.h>
	#include <assert.h>
	#include <dos.h>
	
	#ifdef __TURBOC__
	#pragma inline
	#define _dos_allocmem(x,y)      (allocmem(x, y) != -1)
	#endif
	
	#define ABSADDR(seg, ofs) \
	    ((((unsigned long) seg) << 4) + ((ofs) & 0xFFFF))
	
	#pragma pack(1)
	
	typedef struct {
	    unsigned long edi, esi, ebp, reserved, ebx, edx, ecx, eax;
	    unsigned flags, es, ds, fs, gs, ip, cs, sp, ss;
	    } RMODE_CALL;
	    
	typedef struct {
	    unsigned char accessed   : 1;
	    unsigned char read_write : 1;
	    unsigned char conf_exp   : 1;
	    unsigned char code       : 1;
	    unsigned char xsystem    : 1;
	    unsigned char dpl        : 2;
	    unsigned char present    : 1;
	    } ACCESS;
	    
	/* structure of a protected-mode descriptor */  
	typedef struct {
	    unsigned limit, addr_lo;
	    unsigned char addr_hi;
	    ACCESS access;
	    unsigned char reserved, addr_xhi;
	    } DESCRIPTOR;   
	    
	typedef enum { FALSE, TRUE } BOOL;
	
	BOOL dpmi_rmode_intr(unsigned intno, unsigned flags, 
	    unsigned copywords, RMODE_CALL far *rmode_call);
	
	void dos_exit(unsigned char err)
	{ 
	    _asm mov al, err
	    _asm mov ah, 04ch
	    _asm int 21h
	}
	
	void fail(char *s)       { puts(s); dos_exit(1); }
	
	/* Determines if DPMI is present and, if so, switches into
	   protected mode */
	BOOL dpmi_init(void)
	{
	    void (far *dpmi)();
	    unsigned hostdata_seg, hostdata_para, dpmi_flags;
	    
	    _asm {
	        mov ax, 1687h           // test for DPMI presence
	        int 2Fh
	        and ax, ax
	        jnz nodpmi              // if (AX == 0) DPMI is present
	        mov dpmi_flags, bx
	        mov hostdata_para, si   // paras for DPMI host private data
	        mov dpmi, di
	        mov dpmi+2, es          // DPMI protected-mode switch entry point
	        jmp short gotdpmi
	        }
	nodpmi:
	    return FALSE;
	gotdpmi:
	    if (_dos_allocmem(hostdata_para, &hostdata_seg) != 0)
	        fail("can't allocate memory");
	    
	    /* enter protected mode */
	    _asm {
	        mov ax, hostdata_seg
	        mov es, ax
	        mov ax, dpmi_flags
	        }
	    (*dpmi)();
	        
	    return TRUE;
	}
	
	/* Performs a real-mode interrupt from protected mode */
	BOOL dpmi_rmode_intr(unsigned intno, unsigned flags, 
	    unsigned copywords, RMODE_CALL far *rmode_call)
	{
	    if (flags) intno |= 0x100;
	    _asm {
	        push di
	        push bx
	        push cx
	        mov ax, 0300h       // simulate real-mode interrupt
	        mov bx, intno       // interrupt number, flags
	        mov cx, copywords;  // words to copy from pmode to rmode stack
	        les di, rmode_call  // ES:DI = address of rmode call struct
	        int 31h             // call DPMI
	        jc error
	        mov ax, 1           // return TRUE
	        jmp short done
	        }
	error:  
	        _asm mov ax, 0           // return FALSE
	done:   
	        _asm pop cx
	        _asm pop bx
	        _asm pop di
	}
	
	/* Allocates a single protected-mode LDT selector */
	unsigned dpmi_sel(void)
	{
	    _asm {
	        mov ax, 0           // Allocate LDT Descriptors
	        mov cx, 1           // allocate just one
	        int 31h             // call DPMI
	        jc err
	        jmp short done      // AX holds new LDT selector
	        }
	err:    
	        _asm mov ax, 0      // failed
	done:;   
	}
	
	BOOL dpmi_set_descriptor(unsigned pmodesel, DESCRIPTOR far *d)
	{
	    _asm {
	        push di
	        push bx
	        mov ax, 000ch       // Set Descriptor
	        mov bx, pmodesel    // protected mode selector
	        les di, d           // descriptor
	        int 31h             // call DPMI
	        jc error
	        mov ax, 1           // return TRUE
	        jmp short done
	        }
	error:  
	        _asm mov ax, 0      // return FALSE
	done:   
	        _asm pop di
	        _asm pop bx
	}
	
	BOOL dpmi_get_descriptor(unsigned pmodesel, DESCRIPTOR far *d)
	{
	    _asm {
	        push di
	        mov ax, 000bh       // Get Descriptor
	        mov bx, word ptr pmodesel    // protected mode selector
	        les di, dword ptr d // descriptor
	        int 31h             // call DPMI
	        jc error
	        mov ax, 1           // return TRUE
	        jmp short done
	        }
	error:  
	        _asm xor ax, ax     // return FALSE
	done:
	        _asm pop di
	}
	
	BOOL dpmi_sel_free(unsigned pmodesel)
	{
	    _asm {
	        mov ax, 0001h       // Free LDT Descriptor
	        mov bx, pmodesel    // selector to free
	        int 31h             // call DPMI
	        jc error
	        mov ax, 1           // return TRUE
	        jmp short done
	        }
	error:  
	        _asm mov ax, 0           // return FALSE
	done:;
	}
	
	void far *get_doslist(void)
	{
	    _asm {
	        xor bx, bx
	        mov es, bx
	        mov ah, 52h
	        int 21h
	        mov dx, es
	        mov ax, bx
	        }
	}
	
	main()
	{
	    DESCRIPTOR d;
	    RMODE_CALL r;
	    void far *fp;
	    char far *doslist = (char far *) 0;
	    unsigned long addr;
	    unsigned pmodesel;
	    unsigned offset, lastdrv_ofs, lastdrv;
	
	    /* program requires small model! */
	    assert((sizeof(void*) == 2) && (sizeof(void (*)()) == 2));
	    
	    assert(sizeof(ACCESS) == 1);
	    assert(sizeof(DESCRIPTOR) == 8);
	    
	    /* Determine if DPMI present and, if so, switch to protected mode */  
	    if (dpmi_init())
	        puts("now in protected mode");
	    else
	        fail("DPMI not present");   
	    
	    /* Call INT 21h AH=52h (Get DOS List Of Lists) */
	    memset(&r, 0, sizeof(RMODE_CALL));
	    r.eax = 0x5200;
	    if (! dpmi_rmode_intr(0x21, 0, 0, &r))
	        fail("DPMI rmode intr failed");
	    FP_SEG(doslist) = r.es;
	    FP_OFF(doslist) = r.ebx;
	    printf("Real mode DOS List Of Lists = %Fp\r\n", doslist);
	    
	    /* doslist now holds a real-mode address: in order to address it
	       in protected mode, allocate an LDT descriptor and set its 
	       contents; when done, deallocate the LDT descriptor
	    */
	    if (! (pmodesel = dpmi_sel()))
	        fail("DPMI can't alloc pmode selector");
	    
	    /* set size of segment */
	    d.limit = 0xFFFF;
	    
	    /* set base address of segment */
	    addr = ABSADDR(r.es, 0);
	    d.addr_lo = addr & 0xFFFF;
	    d.addr_hi = addr >> 16;
	    d.addr_xhi = 0;             /* IMPORTANT! */
	    
	    /* set access-rights of segment */
	    d.access.accessed = 0;      /* never been used */
	    d.access.read_write = 1;    /* read-write */
	    d.access.conf_exp = 0;      /* not a stack */
	    d.access.code = 0;          /* data */
	    d.access.xsystem = 1;       /* not system descriptor */
	    fp = (void far *) main;
	    d.access.dpl = FP_SEG(fp) & 3;  /* protection level */
	    d.access.present = 1;       /* it's present in memory */
	    d.reserved = 0;
	
	    if (! dpmi_set_descriptor(pmodesel, &d))
	        fail("DPMI can't set descriptor");
	    
	    FP_SEG(doslist) = pmodesel; /* convert to protected-mode address */
	    FP_OFF(doslist) = r.ebx;
	    printf("Protected mode DOS List Of Lists = %Fp\r\n", doslist);
	    
	    /* now have protected-mode selector to DOS List of Lists */
	    /* Get LASTDRIVE number, print LASTDRIVE letter */
	    lastdrv = doslist[_osmajor==3 && _osminor==0 ? 0x1b : 0x21];
	    printf("LASTDRIVE=%c\r\n", 'A' - 1 + lastdrv);
	    
	    if (! dpmi_sel_free(pmodesel))
	        fail("DPMI can't free selector");
	    
	    /* in protected mode, flush output and quit */
	    fflush(stdout);
	    dos_exit(0);
	
	dpmifail:
	    fail("DPMI failure");
	}
	
	;----------------------------------------------------------------------
	
	                            THE END?

### Errata (2nd Edition)

	Undocumented DOS, 2nd Edtion		Errata
	by Ralf Brown
	
	
	p. 8, middle
		"easier said than none" should of course read "...than done"
	
	p. 37, last two lines
		"terminate-and-stay (TSR)" is missing "resident" in between
	
	p. 41, end of first paragraph
		unmatched right parenthesis at very end
	
	p. 46, right after first quotation
		"were present at time of OS/2" should read "...at the time..."
	
	p. 52, second paragraph
		"high-colume" should read "high-volume"
	
	p. 56, first word of second paragraph
		"There" should read "These"
	
	p. 62, second paragraph under "DOS Calls from C"
		"have adapted them" should read "have adopted them"
	
	p. 86, last line before Listing 2-16
		"undos_dos_okay" should read "undoc_dos_okay"
	
	p. 102, third paragraph
		"since and entirely separate book" should probably read "entire" for
		"entirely"
	
	p. 117, second paragraph
		"the DPMISH program call C" should read "... can call C"
	
	p. 123, third paragraph
		"that call INT 21h fom" should of course read "... from"
	
	p. 190, second line
		"IBMDOS.COM provide these calls" should read "provides" instead
	
	p. 197, fourth paragraph under "NetWare 4.0 and the Network Redirector"
		missing parenthesis at "for NetWare 4 (though of course"
	
	p. 213, next-to-last paragraph of quotation
		"introduced some hasty bugs" should of course read "nasty" instead
	
	p. 218, fifth line
		"and low and behold" should be "and lo and behold"
	
	p. 280, second paragraph	*******
		IBM's interrupt-sharing spec is in use on millions of machines!  Every
		system running MS-DOS 3.3+ with nonzero STACKS=, in fact.  When MS-DOS
		installs the STACKS= handlers for the hardware interrupts to switch
		stacks, the interrupt handlers use the IBM interrupt-sharing spec.
	
	p. 284, second set of comment lines
		"UBM Link" should naturally by "UMB Link"
	
	p. 285, last set of comment lines
		"but A20 has been off;" should read "but had A20 been off,"
	
	p. 288, Figure 6-5
		comment "switch to DOS's DS; hmm, not truly reentrant after all!"
		is quite simply false.  Pointing at the DOS DS does not in itself
		make a function non-reentrant.  Particularly since at most a single
		memory location gets modified (by subfunctions 01h and 02h).
	
	p. 301, last paragraph before "Tracing a DOS INT 2Fh Call"
		for "call use a new pointer", read "use a near call"
	
	p. 330, third paragraph
		"turns turns"
	
	p. 331, first line after Figure 6-22
		"SFT ndx" should read "SFT index"
	
	p. 335, first paragraph after quotation
		"As far trade secret" should read "As far as trade secret"
	
	p. 346, Table 7-1
		The table is somewhat messed up.  The beginning should read
			Code	Directive	Meaning
			D	DEVICE=		device driver, if present
			E			device driver appendage, if present
			I
			...
	
	p. 362, second paragraph
		for "code and changed", read "code has changed"
	
	p. 364, third paragraph
		The discussion about the two-level upper memory chains is not correct
		for QEMM.  QEMM maintains a UMB chain which is identical to the MS-DOS	
		low memory chain.  It only becomes two-level when MS-DOS allocates the
		upper memory as XMS UMBs and installs its own chain in the allocated
		UMBs.  When using Quarterdeck's own utilities while DOS=NOUMB is in
		effect, the upper memory chain remains single-level (QEMM uses blocks
		marked as belonging to itself to lock out the non-UMB areas between
		UMB regions).
	
	p. 367, first paragraph under "The COM File Format"
		"stack pointer set to 00FE" should actually read "stack pointer set
		to FFFE (or the top of the memory block if it is less than 64K in
		size)"
	
	p. 413, fourth paragraph under "The File Allocation Table"
		Checking only the top four bits to determine whether to use a 12-bit
		or a 16-bit FAT is not completely correct, since the switch-over
		point is actually 0FF6h.
	
	p. 434, third line
		"These 32-byte blocks"--under DOS 4+, they are 33 bytes.
	
	p. 441, first paragraph
		As of version 4.0, SmartDrive no longer uses INT 13h, instead putting
		a 'wrapper' around the block device driver.
	
	p. 466, "FILE* vs. File Handles"
		The first word, "Before" has a wrong font for the first letter.
	
	p. 469, middle
		"FILES=254 is therefore the maximum".  Since SFT index 0 is valid,
		the maximum is in fact FILES=255 even though index FFh is used as
		a free-JFT flag.
	
	p. 485, first paragraph under "More File Handles"
		"the pre-process" should of course read "the per-process"
	
	p. 492, third line
		missing comma in "lock and unlock regions of a file, for checking"
	
	p. 511, two-thirds down
		the comment "only support INT 2Fh AX=1100h through AX=1123h" should
		read "112Eh" instead of 1123h
	
	p. 513, Listing 8-29
		"sft_ptr->dev_info_world" should read "sft_ptr->dev_info_word"
	
	p. 517, third line
		"For all it matter," should read "For all it matters,"
	
	p. 518, last paragraph
		Once again, SmartDrive v4+ does not use INT 13h any more.
	
	p. 528, under "Subfunction 0Ah"
		"DOS 3.0.X" should read "DOS 3.X"
	
	p. 529, "Subfunction 0Fh"
		not properly indented
	
	p. 530, "Subfunction 19h"
		not properly indented
	
	p. 532, fourth line
		missing close quote after
			Another Detection Method
	
	p. 532, "Subfunction 21h"
		note that the conditions under which DOS calls this function are
		precisely those under which another process can change the length
		of the file; for all other sharing modes, the file size will never
		be changed without DOS's knowledge (unless of course there was an
		undetected sharing violation), so there is no need to call the
		redirector to get an updated file size.
	
	p. 538, last paragraph
		Functions 26h through 29h were almost certainly added to support
		NLSFUNC, since both they and NLSFUNC appeared in MS-DOS 3.30.  NLSFUNC
		has no need to write a file, so there is no Write function....
	
	p. 564, third-to-last line
		for "issues the period INT 28h" read "... periodic INT 28h"
	
	p. 587, two-thirds down
		"5D0Bh (for DOS 4 and higher)" is actually "5D0Bh (for DOS 4 only)"
	
	p. 602, Figure 9-23		********
		Unfortunately, the figure, and the following sample assembly language
		routine, are very much wrong on the jump instructions.  Both are
		SHORT jumps, i.e. coded as EBh XXh, rather than FAR jumps.  In
		addition, various software expects the jump at the beginning of the
		header (the interrupt handler's entry point), to jump to the byte
		immediately following the header, i.e. to find the bytes EBh 10h at
		the address pointed at by the interrupt vector.
	
	
	p. 606, Listing 9-26
		"SRDERR" should be "STDERR"
	
	p. 611, under "Keyboard Interrupt"
		extraneous comma in "gives the user better, response time"
	
	p. 618, next-to-last line
		"DesqView" is actually "DESQview"
	
	p. 630, fourth paragraph
		DATE and TIME were external commands in PC-DOS 1.0, and migrated into
		COMMAND.COM with version 1.1.
	
	p. 632, end of "Dealing with BAT Files" section
		missing period
	
	p. 638, end of section preceding "TSHELL, a Simple Command Interpreter"
		missing period
	
	p. 644, end of the second paragraph
		COMMAND.COM puts a portion of its *resident* portion in the HMA when
		DOS is loaded in the HMA.
	
	p. 682, format of PSP
		update:
		3Ch    BYTE    apparently unused by DOS versions <= 6.00
		3Dh    BYTE    (APPEND) TrueName flag (see INT 2F/AX=B711h)
	
	p. 688	INT 21h Function 4302h
		under Returns:, "CX" should be indented a few spaces
	
	p. 745, INT 21h Functions 71h-72h, last paragraph
		MS-DOS has always supported multiple concurrent file finds--simply
		switch the DTA to a different location for each of the concurrent
		finds.
	
	p. 836, Stan Brown, dos.faq
		Missing greater-than sign in "What the heck is 'DGROUP > 64K'?"
	
	p. 844, Arne Shpers
		missing u-umlaut () in "Die endgltige Referenz"
	
	--- END OF FILE ---
