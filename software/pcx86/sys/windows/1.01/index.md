---
layout: page
title: Microsoft Windows 1.01
permalink: /software/pcx86/sys/windows/1.01/
redirect_from:
  - /disks/pcx86/windows/1.01/
  - /disks/pc/windows/1.01/
preview: images/screenshot.png
machines:
  - id: ibm5160-ega-win101
    type: pcx86
    resume: 1
    state: /software/pcx86/sys/windows/1.01/state.json
    config: /configs/pcx86/machine/ibm/5160/ega/640kb/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/PCDOS200-WIN101-EGA.json"}]'
---

Microsoft Windows 1.01, the first public version of Windows, was released on November 20, 1985.
It is shown here running on an IBM PC XT (Model 5160) with an EGA Display.  You can also run Windows 1.01
with a [Debugger](debugger/) or a [CGA Display](cga/).  Or just for fun, on [four machines](array/) simultaneously.

A demo of an earlier pre-release version, [Windows 1.0 ("Premiere Edition")](../1.00/), is also available.

[Directory Listings](#directory-of-windows-101-setup) of the five 360Kb distribution diskettes are provided below.

{% include machine.html id="ibm5160-ega-win101" %}

### Directory of Windows 1.01 (SETUP)

	 Volume in drive A is SETUP      
	
	Directory of A:\
	
	CGA      DRV     13008 11-15-85   5:43a
	COMM     DRV      4860 11-15-85   5:43a
	EGAHIBW  DRV     13952 11-15-85   5:42a
	EGAHIRES DRV     17536 11-15-85   5:42a
	EGALORES DRV     15648 11-15-85   5:42a
	EGAMONO  DRV     13952 11-15-85   5:42a
	EMM      AT      12874 07-30-85   6:33p
	EMM      PC      12898 07-30-85   6:15p
	FTG      DRV      1961 11-15-85   5:42a
	HERCULES DRV     15776 11-15-85   5:42a
	HIFONTS  FON      7472 11-15-85   5:42a
	JOYMOUSE DRV      2114 11-15-85   5:42a
	KERNEL   EXE     33343 11-15-85   5:42a
	KEYBUS   DRV      3335 11-15-85   5:42a
	LMOUSE   DRV      2484 11-15-85   5:42a
	LOFONTS  FON      5552 11-15-85   5:42a
	LPC      DRV      2438 11-15-85   5:42a
	MOUSE    DRV      3239 11-15-85   5:42a
	MSMOUSE1 DRV      1966 11-15-85   5:42a
	MSMOUSE2 DRV      1966 11-15-85   5:42a
	NOMOUSE  DRV      1592 11-15-85   5:42a
	RAMDRIVE SYS      6459 07-12-85   5:42p
	SETUP    EXE     33974 11-15-85   5:42a
	SETUP    LBL         7 11-15-85   5:42a
	SOUND    DRV      5853 11-15-85   5:42a
	SYSTEM   DRV      2594 11-15-85   5:42a
	WRITE    DAT        43 11-15-85   5:42a
	       27 file(s)     236896 bytes
	
	Total files listed:
	       27 file(s)     236896 bytes
	                      110592 bytes free

### Directory of Windows 1.01 (BUILD)

	 Volume in drive A is BUILD      
	
	Directory of A:\
	
	BUILD    LBL         7 11-15-85   5:42a
	CGA      GRB      1350 11-15-85   5:42a
	CGA      LGO      2931 11-15-85   5:42a
	EGAHIBW  GRB        15 11-15-85   5:42a
	EGAHIBW  LGO         9 11-15-85   5:42a
	EGAHIRES GRB        15 11-15-85   5:42a
	EGAHIRES LGO         9 11-15-85   5:42a
	EGALORES GRB      1213 11-15-85   5:42a
	EGALORES LGO         9 11-15-85   5:42a
	EGAMONO  GRB      1061 11-15-85   5:42a
	EGAMONO  LGO      2930 11-15-85   5:42a
	GDI      EXE     94254 11-15-85   5:42a
	HERCULES GRB      1250 11-15-85   5:42a
	HERCULES LGO      3054 11-15-85   5:42a
	MSDOS    EXE     41904 11-15-85   5:42a
	MSDOSD   EXE      5934 11-15-85   5:42a
	SPOOLER  EXE     13216 11-15-85   5:42a
	USER     EXE    122400 11-15-85   5:42a
	WIN      CNF      1936 11-15-85   5:42a
	WIN      INI      1801 11-15-85   5:42a
	WINOLDAP MOD     19392 11-15-85   5:42a
	       21 file(s)     314690 bytes
	
	Total files listed:
	       21 file(s)     314690 bytes
	                       35840 bytes free

### Directory of Windows 1.01 (UTILITY)

	 Volume in drive A is UTILITY    
	
	Directory of A:\
	
	CITOH    DRV     10976 11-15-85   5:42a
	COURA    FON      8720 11-15-85   5:42a
	COURB    FON     12304 11-15-85   5:42a
	COURC    FON      8784 11-15-85   5:42a
	COURD    FON     15136 11-15-85   5:42a
	EPSON    DRV     12688 11-15-85   5:42a
	HELVA    FON      8032 11-15-85   5:42a
	HELVB    FON     10480 11-15-85   5:42a
	HELVC    FON      8656 11-15-85   5:42a
	HELVD    FON     12224 11-15-85   5:42a
	HP747XA  DRV     21232 11-15-85   5:42a
	HPLASER  DRV     15600 11-15-85   5:42a
	IBMGRX   DRV     11392 11-15-85   5:42a
	LQ1500   DRV     12992 11-15-85   5:42a
	MODERN   FON      9680 11-15-85   5:42a
	NEC3550  DRV     21536 11-15-85   5:42a
	NECP2    DRV     11312 11-15-85   5:42a
	OKI92    DRV     11392 11-15-85   5:42a
	README   DOC      2922 11-15-85   5:42a
	ROMAN    FON     27264 11-15-85   5:42a
	SCRIPT   FON      5744 11-15-85   5:42a
	SG10     DRV     13264 11-15-85   5:42a
	TI850    DRV     10704 11-15-85   5:42a
	TMSRA    FON      8208 11-15-85   5:42a
	TMSRB    FON     10784 11-15-85   5:42a
	TMSRC    FON      8240 11-15-85   5:42a
	TMSRD    FON     12608 11-15-85   5:42a
	TOSH     DRV     11520 11-15-85   5:42a
	UTILITY  LBL         9 11-15-85   5:42a
	       29 file(s)     334403 bytes
	
	Total files listed:
	       29 file(s)     334403 bytes
	                       11264 bytes free

### Directory of Windows 1.01 (APPS)

	 Volume in drive A is APPS       
	
	Directory of A:\
	
	ABC      TXT        42 11-15-85   5:42a
	CALC     EXE     24992 11-15-85   5:42a
	CALENDAR EXE     37360 11-15-85   5:42a
	CARDFILE EXE     36528 11-15-85   5:42a
	CLIPBRD  EXE      9696 11-15-85   5:42a
	CLOCK    EXE      7920 11-15-85   5:42a
	CONTROL  EXE     53360 11-15-85   5:42a
	DOTHIS   TXT       493 11-15-85   5:42a
	NOTEPAD  EXE     18544 11-15-85   5:42a
	PAINT    EXE     89584 11-15-85   5:42a
	REVERSI  EXE     14816 11-15-85   5:42a
	TERMINAL EXE     43968 11-15-85   5:42a
	       12 file(s)     337303 bytes
	
	Total files listed:
	       12 file(s)     337303 bytes
	                       18432 bytes free

### Directory of Windows 1.01 (WRITE)

	 Volume in drive A is WRITE      
	
	Directory of A:\
	
	PRACTICE DOC      2944 11-15-85   5:44a
	README   DOC      2922 11-15-85   5:44a
	WRITE    EXE    188464 11-15-85   5:44a
	        3 file(s)     194330 bytes
	
	Total files listed:
	        3 file(s)     194330 bytes
	                      166912 bytes free
