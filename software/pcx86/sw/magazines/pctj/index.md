---
layout: page
title: PC Tech Journal Disks
permalink: /software/pcx86/sw/magazines/pctj/
redirect_from: /disks/pcx86/shareware/pctj/
machines:
  - id: pctj
    type: pcx86
    config: /configs/pcx86/machine/ibm/5170/ega/640kb/rev1/machine.xml
    testRAM: false
    drives: '[{name:"10Mb Hard Disk",type:1,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

Over the lifetime of [PC Tech Journal (1983-1989)](/documents/magazines/pctj/), they shared a variety of files
and published source code listings.  You *could* type the listings in by hand, or you could use their "PCTECHline"
dial-up service and download them for free (aside from any long-distance phone charges).

I'm not sure if PC Tech Journal regularly (or *ever*) distributed their software collections on diskette, or
archived them in monthly ZIP files, but obviously someone did, because you can find a bunch of ZIP archives at
"[THE PROGRAMMER'S CORNER: BBS ARCHIVE FROM THE PAST](https://www.pcorner.com/list/MAG)".

Of particular interest is the "[Best Of](#directory-of-pc-tech-journal-best-of)" collection, a diskette that we had
to recreate from multiple ZIP archives.  It includes this note from the magazine's editors:

	              THE BEST OF PC TECH JOURNAL DISKETTE
	              ------------------------------------
	
	This disk is a compilation of programs that have appeared in PC
	Tech Journal over the years.  The diskette will spare you the
	task of typing long listings from the magazine, thus leaving you
	with time for more productive uses of the material published in
	PC Tech Journal.
	
	The diskette contains two subdirectories, UTILITY and HPMETRIC,
	in which you will find the programs.  Each directory also
	includes the file CONTENTS, which identifies each program and
	provides a reference to the issue of PC Tech Journal in which it
	first appeared.  The CONTENTS files are in ASCII text format
	suitable for TYPEing or PRINTing.  The file WARRANTY contains the
	limited warranty and copyright notice. 
	
	Thank you for subscribing to PC Tech Journal.  We hope this
	diskette and your future issues of the PC Tech Journal will be a
	valuable and useful addition to your library.
	
	Julie Anderson                          Will Fastie
	Editor                                  Editorial Director

We've gone through those ZIP archives, filtered out the duplicates, organized them chronologically, and then put
their contents onto diskette images that you can easily "Load" and "Save" in any [PCjs Machine]({{ site.github.pages }}/machines/pcx86/).
In fact, if you click on the name of any diskette in the headings below, a machine should automatically launch
with that diskette loaded in drive B.

Looking at the dates alone, you can tell that this collection is woefully incomplete, but perhaps more will surface
over time.  [Let us know](mailto:Jeff@pcjs.org) if you find more.  Thanks.

{% include machine.html id="pctj" %}

### Directory of PC Tech Journal (1985-12)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1985-12)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8512   
	 Directory of A:\

	AUTH     PER      1034 09-23-85   2:22p
	BENCHMRK LSP       640 11-26-85   4:23p
	CALENDAR PAS      2931 09-19-85  12:23p
	COMM     PAS      7429 10-21-85   4:58p
	EXPERT   PRO      3383 12-09-85   9:25a
	FIXCURS  ASM      1019 09-17-85   3:14p
	LANDER   ASM      3588 09-26-85   4:15p
	MLABELS  ACE       771 09-15-85   8:59p
	M_AUTH   PER      1673 10-15-85   2:18p
	PARSER   PRO       445 12-09-85   9:25a
	       10 file(s)      22913 bytes
	                      134656 bytes free

### Directory of PC Tech Journal (1986-03)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1986-03)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8603   
	 Directory of A:\

	DOS4AH   ASM      2856 04-11-86  10:24a
	DOS4AH   COM        58 04-11-86  10:25a
	DOS4BH   ASM      4129 04-11-86  10:24a
	DOS4BH   COM       110 04-11-86  10:25a
	DOSCOM   COM     12022 07-25-86   1:34p
	DOSCOM   PAS      1248 07-25-86   1:34p
	SPMMLIB  PAS      5021 07-26-86  11:46a
	TJOS     ASM      4688 12-13-85   9:35a
	        8 file(s)      30132 bytes
	                      127488 bytes free

### Directory of PC Tech Journal (1986-10)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1986-10)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8610   
	 Directory of A:\

	DOTTIME  DEF       106 07-22-86   9:38p
	DOTTIME  MOD      3449 07-22-86   9:56p
	DRAWPOLY DEF       601 07-21-86  10:50p
	DRAWPOLY MOD      1949 07-21-86  10:47p
	EDITBLCK          8677 06-28-86   6:29a
	EGAMAKE  BAT       795 08-15-86   3:50p
	EGATEST  EXE     50080 10-01-86  10:27a
	EGATEST  MOD     13694 08-15-86   3:44p
	FONTBUMP DEF       327 07-21-86  10:18p
	FONTBUMP MOD      4444 08-15-86   3:56p
	INFO               781 08-15-86   3:58p
	LOWEGA   DEF      4975 08-15-86   3:47p
	LOWEGA   MOD     28255 10-01-86   2:44p
	OPCODES  DEF       809 06-11-86  10:28a
	OPCODES  MOD        49 06-11-86  10:17a
	OTHRFONT DAT      3584 06-01-86   9:48p
	PAUSES   DEF       545 07-21-86  10:51p
	PAUSES   MOD      1636 07-21-86  11:15p
	POINTLIB DEF       294 06-01-86  10:36a
	POINTLIB MOD       350 06-01-86  10:38a
	       20 file(s)     125400 bytes
	                       30208 bytes free

### Directory of PC Tech Journal (1986-12)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1986-12)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8612   
	 Directory of A:\

	JUMPSRCH PAS      8985 10-22-86   1:45p
	ROREADER PAS      2683 08-20-86   2:41p
	        2 file(s)      11668 bytes
	                      147968 bytes free

### Directory of PC Tech Journal (1987-02)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1987-02)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8702   
	 Directory of A:\

	BUSPERF  C        1078 11-25-86   1:59p
	BUSPERF  EXE     62310 11-16-86   7:25p
	BUSPERFX ASM      4704 12-16-86   3:09p
	DELAY    C         493 12-15-86   3:58p
	GETTICKS C         579 12-15-86   3:59p
	MAKEFILE           466 12-15-86   3:59p
	MJNZMAC  ASM       427 12-16-86  10:00a
	MLOOPMAC ASM       437 12-16-86  10:02a
	SETFREQ  C         475 12-16-86   4:02p
	SOUND    C         465 12-15-86   4:00p
	SOUND    H         192 12-15-86   4:00p
	SOUNDS   C         984 12-15-86   4:01p
	SOUNDS   EXE     20552 12-08-86   3:20p
	SPKR     C         269 12-15-86   4:01p
	SPKR     EXE      2066 12-08-86   3:20p
	THERME             322 12-02-86   5:17p
	THERME   C       15577 12-17-86  10:14a
	THERME   DEF       322 12-02-86   1:26p
	THERME   EXE      8640 12-17-86  10:16a
	THERME   H         814 12-17-86  10:10a
	THERME   ICO      1038 11-24-86   3:26p
	THERME   RC       1528 12-17-86  10:10a
	TIMER    H         331 12-15-86   4:01p
	TONE     C         339 12-15-86   4:02p
	TONE     EXE      6734 12-08-86   3:20p
	TOOLS    INI        30 12-04-86   5:43p
	       26 file(s)     131172 bytes
	                       23040 bytes free

### Directory of PC Tech Journal (1987-06)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1987-06)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8706   

	Directory of A:\

	ASKDEMO  BAT       471 04-21-87   1:26p
	ASKKEY   ASM      1813 04-21-87   1:28p
	BIGARRAY F77       503 04-02-87   2:48p
	BIGERROR F77       503 04-02-87   2:50p
	DRAWCHAR COM     13758 03-19-87  12:59p
	DRAWCHAR PAS      6925 04-23-87   1:18p
	ITERATE  F77       500 04-02-87   2:50p
	MINIMUM  F77        11 04-02-87   2:51p
	PERFORM  F77       678 04-06-87  10:27a
	README   TXT       191 06-05-87   2:20p
	SYNTH1   F77       716 04-02-87   2:48p
	       11 file(s)      26069 bytes

	Total files listed:
	       11 file(s)      26069 bytes
	                      132096 bytes free

### Directory of PC Tech Journal (1987-07)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1987-07)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8707   

	Directory of A:\

	ATKEY    ASM     12321 05-28-87   2:01p
	DSPYINFO C        1382 05-27-87   4:07p
	DSPYINFO MK        377 04-06-87   1:19p
	EGA_INFO C        1027 02-16-87  10:11a
	ENHANKB  ASM       979 05-02-87   7:17p
	GETSTATE C         433 05-27-87   4:05p
	MEMCHK   C         846 05-27-87   4:05p
	SETVMODE C         539 05-27-87   4:07p
	TOOLS    INI        55 02-14-87   6:24a
	TO_COLOR C         447 05-27-87   4:08p
	TO_MONO  C         382 05-27-87   4:09p
	USE_EGA  C        2009 02-16-87  10:35a
	USE_EGA  MK        429 04-06-87   3:47p
	       13 file(s)      21226 bytes

	Total files listed:
	       13 file(s)      21226 bytes
	                      136192 bytes free

### Directory of PC Tech Journal (1987-10)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1987-10)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8710   

	Directory of A:\

	HERCDEMO C        4423 04-04-87  10:34p
	HERCDEMO EXE      8250 04-04-87  10:46p
	INIT     ASM      2155 04-04-87  10:44p
	MEMMGR             785 03-26-87  12:00p
	MEMMGR   C       18004 03-26-87  12:00p
	MEMMGR   DEF       717 03-26-87  12:00p
	MEMMGR   EXE      8080 07-20-87  10:28a
	MEMMGR   H        1691 03-26-87  12:00p
	MEMMGR   RC       3274 03-26-87  12:00p
	        9 file(s)      47379 bytes
	                      110080 bytes free

### Directory of PC Tech Journal (1987-11)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1987-11)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8711   
	 Directory of A:\

	BOX1     C        2657 09-09-87   7:55a
	BOX2     C        3367 09-09-87   7:56a
	BOX3     C        4091 09-09-87   7:58a
	CPUTYPE  ASM      2234 09-18-87   4:22p
	        4 file(s)      12349 bytes
	                      146944 bytes free

### Directory of PC Tech Journal (1988-04)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1988-04)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8804   
	 Directory of A:\

	ACCURACY EXE     14288 03-23-88   4:00p
	ACCURACY PAS     12983 03-23-88   4:00p
	CMOS     C1       1383 02-09-88   9:35a
	CRITTEST PAS      2985 03-23-88   4:00a
	EXDB3    ASM      1581 01-29-88   1:12p
	MORFILES ASM       831 01-29-88  12:53p
	OPTZTEST LST      6264 03-23-88   4:00a
	OPTZTEST PAS      2773 03-23-88   4:00p
	POS_READ C1       2569 02-09-88   9:34a
	SAMPUNIT PAS      2359 03-23-88   4:00a
	       10 file(s)      48016 bytes
	                      109568 bytes free

### Directory of PC Tech Journal (1988-05)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1988-05)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8805   
	 Directory of A:\

	8514DEMO C        6556 03-24-88  10:30a
	8514DEMO EXE      8528 03-14-88   3:10p
	8514TEST C       17840 03-14-88   3:31p
	8514TEST EXE     25462 03-14-88   3:32p
	CHARMENU C       11301 03-22-88   2:19p
	CHARMENU EXE      9600 12-14-87   4:28p
	CLICKMON C        2083 03-21-88  10:48a
	CLICKMON EXE      3304 12-09-87   4:21p
	FUNC     ASM      1298 03-15-88  10:44a
	PATHNAME C         731 03-17-88  11:28a
	PATHNAME EXE      7355 03-17-88  12:10p
	PROGNAME ASM      1597 03-17-88   9:12a
	PTRLEN   INC       528 03-13-88   7:25p
	TIMEPOP  C         806 03-21-88  10:48a
	TIMEPOP  EXE      3360 12-08-87  11:12p
	VGALOAD  ASM     63593 03-14-88   4:28p
	VGALOAD  COM      3338 03-14-88   4:30p
	       17 file(s)     167280 bytes
	                      144384 bytes free

### Directory of PC Tech Journal (1988-06)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1988-06)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8806   
	 Directory of A:\

	FAMDEMO  ASM      2093 04-13-88   9:30a
	LANPERF  C        7331 04-28-88   8:59a
	LANPERF  EXE     24568 05-20-88  10:08a
	LANPERF  ZIP     24302 03-01-89   9:03p
	LPTEST   ASM      7433 04-10-88   9:58p
	OPTBENCH C        8965 04-25-88   4:56p
	        6 file(s)      74692 bytes
	                       83968 bytes free

### Directory of PC Tech Journal (1988-07)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1988-07)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8807   
	 Directory of A:\

	EDINVENT APC     16290 04-17-88   4:23p
	EDINVENT API     21568 04-17-88   3:59p
	EDINVENT APP     12317 04-17-88   3:59p
	EDINVENT APX     20096 04-17-88   3:59p
	OS2NLOK  ASM      6459 05-13-88   2:39p
	OS2NLOK  DEV      1176 05-13-88   2:43p
	README             147 07-27-88   9:47a
	        7 file(s)      78053 bytes
	                       79872 bytes free

### Directory of PC Tech Journal (1988-08)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1988-08)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8808   
	 Directory of A:\

	NBLIB    C       10493 05-25-88   2:56p
	NBRECV   C        6475 05-28-88   9:19p
	NBRECV   EXE     18657 05-31-88   9:58a
	NBSEND   C        8611 06-02-88   2:53p
	NBSEND   EXE     20567 05-31-88   9:58a
	NCPLIB   C       12989 05-28-88   9:44p
	NETWORK  H        6879 07-12-88   3:59p
	_NETBIOS C         380 05-25-88   2:56p
	_NETLOCK ASM      1639 05-25-88   2:56p
	        9 file(s)      86690 bytes
	                       71168 bytes free

### Directory of PC Tech Journal (1988-09)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1988-09)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8809   

	Directory of A:\

	ASKSYS   ASM      4348 09-15-88   1:46p
	ASKSYS   COM      1316 07-15-88   1:37p
	OS2LINK      <DIR>     07-08-17   3:53p
	        3 file(s)       5664 bytes

	Directory of A:\OS2LINK

	.            <DIR>     07-08-17   3:53p
	..           <DIR>     07-08-17   3:53p
	DLLENTRY ASM       469 07-13-88   9:49a
	DYNOTE   C         835 07-19-88   4:07p
	DYNOTE   DEF       422 07-06-88   4:15p
	DYNSCALE C        2587 07-22-88  11:25a
	DYNSCALE DEF       244 07-19-88   4:02p
	MKDLL    CMD       308 07-19-88   3:59p
	        8 file(s)       4865 bytes

	Total files listed:
	       11 file(s)      10529 bytes
	                      147456 bytes free

### Directory of PC Tech Journal (1988-11)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1988-11)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8811   

	Directory of A:\

	GETCRTCR ASM      1141 09-06-88  11:23a
	INCSTRTA C         681 09-06-88  11:23a
	SCREENOR ASM      6789 09-06-88  11:24a
	SCROLLV  C         269 09-06-88  11:24a
	SETCRTCR ASM       916 09-06-88  11:23a
	SHOWEXE  C       17476 09-07-88  10:58a
	SHOWEXE  EXE     25238 09-06-88   7:54a
	SPLITSCR ASM      4038 09-06-88  11:24a
	STRIPCH  C        3837 09-06-88  11:24a
	VGAZOOM  ASM     14510 08-09-88   1:15p
	VGAZOOM  COM      2020 12-12-88   9:24a
	VGAZOOM2 ASM     15800 09-14-88   4:00p
	       12 file(s)      92715 bytes
	                       64512 bytes free

### Directory of PC Tech Journal (1988-12)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1988-12)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8812   

	Directory of A:\

	QDEMO1   C        5878 10-17-88   1:08p
	QDEMO2   C        5530 10-17-88   1:08p
	        2 file(s)      11408 bytes
	                      148480 bytes free

### Directory of PC Tech Journal (1989-01)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (1989-01)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJ8901   

	Directory of A:\

	DB386    ASM      7056 11-08-88   2:19p
	DB386    COM       698 11-09-88   8:47a
	        2 file(s)       7754 bytes
	                      152064 bytes free

### Directory of PC Tech Journal (Benchmarks)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (Benchmarks)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTBENCH   

	Directory of A:\

	ALR25386 TIM      4096 09-09-88  12:46a
	COM286   TIM      4096 09-09-88  12:46a
	COM386   TIM      4096 09-09-88  12:50a
	COM38620 TIM      4096 09-09-88  12:51a
	COM38625 TIM      4096 09-09-88  12:52a
	COMP386  TIM      4096 09-09-88  12:53a
	COMPIII  TIM      4096 09-09-88  12:53a
	CURRENT  TIM      4096 09-19-88   9:29p
	EVE38625 TIM      4096 09-09-88  12:54a
	HLANALYZ EXE     46796 09-09-88   5:24p
	HLBENCH  EXE     35788 09-09-88   5:23p
	HLBENCH  SCT      4001 09-05-88   8:25p
	HLDESC   EXE     33680 09-09-88   5:23p
	HLDISK   EXE     22123 09-09-88   5:23p
	HLFLOAT  EXE     52396 09-09-88   5:23p
	HLGRAPH  EXE     55722 09-09-88   5:24p
	HLHELP   TXT      4414 09-09-88   6:10p
	HLSORT   EXE     17453 09-09-88   5:24p
	HLSTART  EXE     28160 09-09-88   5:24p
	HLSTART  SCT      4001 09-09-88  12:09a
	HLTEXT   EXE     30196 09-09-88   5:23p
	HLWINDOW EXE     32448 09-09-88   5:23p
	IBM50021 TIM      4096 09-09-88  12:55a
	IBM60041 TIM      4096 09-09-88  12:56a
	IBM70A21 TIM      4096 09-09-88  12:56a
	IBM80071 TIM      4096 09-09-88  12:56a
	IBM80111 TIM      4096 09-09-88  12:57a
	IBMAT339 TIM      4096 09-09-88  12:57a
	MSHERC   COM      6749 03-07-88   5:10a
	MSHERC   MSG        56 09-19-88   9:23p
	PCTECH   BAT        49 09-09-88   1:00a
	READ     ME       2908 09-09-88   5:35p
	TJ640200 PCX      7912 09-09-88   3:30p
	TJ640350 PCX     11699 09-09-88  10:09a
	TJ640480 PCX     14909 09-09-88   4:36p
	XREF     TXT        14 09-07-88   6:29p
	       36 file(s)     472914 bytes
	                      735744 bytes free

### Directory of PC Tech Journal (Best Of)

{% include machine/command.html type='button' label='Load Disk' machine='pctj' command='script' value='select FDC listDrives "A:"; select FDC listDisks "PC Tech Journal (Best Of)"; loadDisk FDC scroll' %}

	 Volume in drive A is PCTJBEST   

	Directory of A:\

	ASKDEMO  BAT       466 11-02-87  10:47a
	ASKKEY   COM        39 11-02-87  10:35a
	ATBIOS   COM     13947 11-06-86   7:06p
	ATPERF   EXE     95924 01-23-87   2:51p
	AUTOTEST EXE     16000 07-13-84   5:48p
	BUSPERF  EXE     62310 11-16-86   7:25p
	COMPLEX  EXE      7066 06-30-87  12:47p
	CONTENTS HPM       851 12-02-87   4:33p
	CONTENTS UTL      5286 12-02-87   4:54p
	CPUID    COM      2944 11-19-87   2:26p
	DISKTEST EXE     15616 07-17-84  12:44p
	DOWNLD   EXE      8000 06-30-87  12:48p
	DUMBTERM EXE      5328 11-04-87  11:47a
	EMMSTAT  EXE      1741 11-02-87  11:26a
	EPSON    COM       281 11-05-87  10:40a
	FIXCURS  COM        29 11-02-87   9:24a
	GRAPHICS EXE      7066 06-30-87  12:48p
	HPMETRIC     <DIR>     07-08-17   3:17p
	KEYBECHO COM     11154 05-01-87   1:34p
	KEYBINFO COM      2449 05-01-87   1:41p
	MACHINE  COM       200 11-02-87  10:50a
	MACRO    EXE      8430 07-02-87   4:09p
	MATHCHIP COM       113 11-04-87   1:50p
	MATHSWIT COM       105 11-04-87   1:53p
	NDPTYPE  COM       230 11-19-87   2:08p
	PAGESIZE EXE      7808 06-30-87  12:47p
	PRTSC    COM       110 11-04-87   1:45p
	PUSHPOP  EXE      7126 06-30-87  12:47p
	README            1100 12-02-87   4:55p
	RESOLUT  EXE     19864 06-30-87  12:46p
	SETALARM COM       514 11-02-87   9:12a
	SETKEY   COM       190 11-05-87  10:46a
	SETRTC   BAT        81 10-30-87   1:29p
	SUPEREN  COM       211 11-02-87  10:56a
	TAD      COM       104 10-01-84  10:10a
	TECHLINE           615 12-02-87   5:05p
	UNDRLN   COM       132 11-09-87  10:58a
	UTILITY      <DIR>     07-08-17   3:13p
	VDEL     COM       404 11-05-87  11:04a
	WARRANTY          1404 05-26-89   4:49p
	WHERE    EXE      7552 01-01-80  12:24a
	XMEM     COM      1332 10-06-85   7:36p
	       42 file(s)     314122 bytes

	Directory of A:\HPMETRIC

	.            <DIR>     07-08-17   3:17p
	..           <DIR>     07-08-17   3:17p
	COMPLEX  EXE      7066 06-30-87  12:47p
	CONTENTS HP        851 12-02-87   3:33p
	DOWNLD   EXE      8000 06-30-87  12:48p
	GRAPHICS EXE      7066 06-30-87  12:48p
	MACRO    EXE      8430 07-02-87   4:09p
	PAGESIZE EXE      7808 06-30-87  12:47p
	PUSHPOP  EXE      7126 06-30-87  12:47p
	RESOLUT  EXE     19864 06-30-87  12:46p
	       10 file(s)      66211 bytes

	Directory of A:\UTILITY

	.            <DIR>     07-08-17   3:13p
	..           <DIR>     07-08-17   3:13p
	ASKDEMO  BAT       466 11-02-87   9:47a
	ASKKEY   COM        39 11-02-87   9:35a
	ATBIOS   COM     13947 11-06-86   6:06p
	ATPERF   EXE     95924 01-23-87   1:51p
	AUTOTEST EXE     16000 07-13-84   5:48p
	BUSPERF  EXE     62310 11-16-86   6:25p
	CONTENTS UTI      5286 12-02-87   3:54p
	CPUID    COM      2944 11-19-87   1:26p
	DISKTEST EXE     15616 07-17-84  12:44p
	DUMBTERM EXE      5328 11-04-87  10:47a
	EMMSTAT  EXE      1741 11-02-87  10:26a
	EPSON    COM       281 11-05-87   9:40a
	FIXCURS  COM        29 11-02-87   8:24a
	KEYBECHO COM     11154 05-01-87   1:34p
	KEYBINFO COM      2449 05-01-87   1:41p
	MACHINE  COM       200 11-02-87   9:50a
	MATHCHIP COM       113 11-04-87  12:50p
	MATHSWIT COM       105 11-04-87  12:53p
	NDPTYPE  COM       230 11-19-87   1:08p
	PRTSC    COM       110 11-04-87  12:45p
	SETALARM COM       514 11-02-87   8:12a
	SETKEY   COM       190 11-05-87   9:46a
	SETRTC   BAT        81 10-30-87  12:29p
	SUPEREN  COM       211 11-02-87   9:56a
	TAD      COM       104 10-01-84  10:10a
	UNDRLN   COM       132 11-09-87   9:58a
	VDEL     COM       404 11-05-87  10:04a
	WHERE    EXE      7552 01-01-80  12:00a
	XMEM     COM      1332 10-06-85   7:36p
	       31 file(s)     244792 bytes

	Total files listed:
	       83 file(s)     625125 bytes
	                      566272 bytes free
