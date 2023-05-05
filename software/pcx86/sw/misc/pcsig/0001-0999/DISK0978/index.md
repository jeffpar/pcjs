---
layout: page
title: "PC-SIG Diskette Library (Disk #978)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0978/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0978"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MMAKE, FIXER, AND EGABLANK"

    Programmers -- automate the process of compiling and linking a program
    that is contained in several (or numerous) source files.  MMAKE can be
    used with any programming language and with any compiler that can be run
    from the MS-DOS command line.  It can speed-up program development
    enormously, both by making recompilation of a program go much faster,
    and by preventing errors when a changed file is not recompiled.  Based
    on the UNIX ``make'' utility.
    
    Edit your WordStar, WordPerfect, or ASCII files so they can contain the
    255 character ASCII set.  Press your ALT key along with the decimal
    code that denotes the character you desire and it will be put into your
    file.  The program has a full screen editor and on-line help is
    available to you from a pop-up window.
    
    BREAKER is a life-saving utility when you have a text file that is too
    large to fit in your wordprocessor.  Invoke BREAKER and you are asked
    what file you want to break and how many lines each of your broken files
    will contain.  The files are saved with any name you desire that has a
    sequentially added number attached to it for easy tracking.
    
    Once you have worked with your broken files, put them back together
    again in the same fashion.  A very easy program to use that should be in
    any person's utility library.
    File Descriptions:
    
    BREAKER  EXE  The BREAKER main program.
    BUDG     PRN  Data file.
    
    STRIPPER reads an input text file and produces an output file by
    replacing any control character visible.  You have the option of
    deleting characters in the ASCII character set that are above 126, below
    126, 126 only, below 32, above 32, delete spaces, or any combination in
    between.
    File Descriptions:
    
    STRIPPER EXE  The STRIPPER main program.
    TESTMAIL DBF  Data base file.
    
    EGABLANK blanks your EGA screen after two minutes of inactivity.
    Pressing any key will reactivate your screen.
    File Descriptions:
    
    EGABLANK COM  Main program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BIGBMW.TXT

{% raw %}
```
00 00 0 000 016	LP MS KEY FOB	& 8 Z	    5.00<R>
00 00 0 000 150	LP PEN&PENCIL SET	& 8 Z	   49.89<R>
00 00 0 000 151	NLA	& Z 8	    5.38<R>
00 00 0 000 152	NLA	& Z 8	   10.77<R>
00 00 0 000 160	LP-GREY CROSS PEN	& Z 8	   25.50<R>
00 00 0 000 161	LP-CROSS SELECTIP	& Z 8	   37.50<R>
00 00 0 000 178	LP SILVER PEN	& Z 8	   49.54<R>
00 00 0 000 179	LP PEN/PENCIL SET	& Z 8	   15.54<R>
00 00 0 000 180	LP BALL PEN(BLK)	& Z 8	    5.38<R>
00 00 0 000 181	LP BALL PEN(WHT)	& Z 8	    5.38<R>
00 00 0 000 182	LP CLICK-PEN(BLK)	& Z 8	    1.25<R>
00 00 0 000 183	LP PEN DESK SET	& Z 8	   10.46<R>
00 00 0 000 184	LP REFILL(BLUE)	& Z 8	    2.15<R>
00 00 0 000 185	LP REFILL(RED)	& Z 8	    2.15<R>
00 00 0 000 186	LP TOTE BAG	& Z 8	    4.60<R>
00 00 0 000 187	LP BEER STEIN	& Z 8	    6.25<R>
00 00 0 000 188	LP COFFEE MUG	& Z 8	    4.95<R>
00 00 0 000 189	LP ASHTRAY(BMW)	& Z 8	    3.40<R>
00 00 0 000 190	LP LIGHTER(CHRM)	& Z 8	   21.60<R>
00 00 0 000 191	LP LIGHTER(BLK)	& Z 8	   21.60<R>
00 00 0 000 192	LP LIGHTER(LTHR)	& Z 8	   26.00<R>
00 00 0 000 193	LP LIGHTER(LTHR)	& Z 8	   26.00<R>
00 00 0 000 194	LP REFILL(LIGHTER)	& Z 8	    2.05<R>
00 00 0 000 195	LP MUG-LOWENBRAU	& Z 8	   10.45<R>
00 00 0 000 196	LP MUG-HOFBRAUHAUS	& Z 8	   10.45<R>
00 00 0 000 197	LP MUG-SPATENBRAU	& Z 8	   10.45<R>
00 00 0 000 198	NLA -GOBLET*KALTENBERG*	& Z 8	    9.54<R>
00 00 0 000 199	NLA -GOBLET*KULMBACHER*	& Z 8	    9.54<R>
00 00 0 000 200	NLA -GOBLET*BAYERN*	& Z 8	   14.51<R>
00 00 0 000 201	SHOPPING BAG	& Z 8	    0.30<R>
00 00 0 000 202	BMW MONEY CLIP	& Z 8	   13.50<R>
00 00 0 000 203	BMW LETTER OPENER	& Z 8	   17.65<R>
00 00 0 000 204	LUGGAGE TAG	& Z 8	    9.70<R>
00 00 0 000 205	KEY TAG SLVR.	& Z 8	    5.20<R>
00 00 0 000 206	KEY TAG (BMW)	& Z 8	    6.00<R>
00 00 0 000 207	PULL-APART KEY RING	& Z 8	   12.75<R>
00 00 0 000 208	SLIM PULL-APART KEY RING	& Z 8	   11.60<R>
00 00 0 000 210	BMW TIE TACK	& Z 8	    5.15<R>
00 00 0 000 211	BMW LAPEL PIN	& Z 8	    5.15<R>
00 00 0 000 212	BMW STICK PIN	& Z 8	    5.15<R>
00 00 0 000 213	LAPEL PIN(318I)	& Z 8	    5.45<R>
00 00 0 000 214	LAPEL PIN(325E)	& Z 8	    5.45<R>
00 00 0 000 215	LAPEL PIN(524TD)	& Z 8	    5.45<R>
00 00 0 000 216	LAPEL PIN(528E)	& Z 8	    5.45<R>
00 00 0 000 217	LAPEL PIN(535I)	& Z 8	    5.45<R>
00 00 0 000 218	LAPEL PIN(635CSI)	& Z 8	    5.45<R>
00 00 0 000 219	LAPEL PIN(735I)	& Z 8	    5.45<R>
00 00 0 000 718	LP KN-SHIRT MWHS	$ Z 8	   19.00<R>
00 00 0 000 719	LP KN-SHIRT MWHM	$ Z 8	   19.00<R>
00 00 0 000 720	LP KN-SHIRT MWHL	$ Z 8	   19.00<R>
00 00 0 000 721	LP KN-SHIRT MWHXL	$ Z 8	   19.00<R>
00 00 0 000 722	LP KN-SHIRT MBLS	$ Z 8	   19.00<R>
00 00 0 000 723	LP KN-SHIRT MBLM	$ Z 8	   19.00<R>
00 00 0 000 724	LP KN-SHIRT MBLL	$ Z 8	   19.00<R>
00 00 0 000 725	LP KN-SHIRT MBLXL	$ Z 8	   19.00<R>
00 00 0 000 728	BMW VISOR	$ Z 8	   10.45<R>
00 00 0 000 729	T-SHIRT W/N S	$ Z 8	    6.10<R>
00 00 0 000 730	T-SHIRT W/N M	$ Z 8	    6.10<R>
00 00 0 000 731	T-SHIRT W/N L	$ Z 8	    6.10<R>
00 00 0 000 732	T-SHIRT W/N XL	$ Z 8	    6.10<R>
00 00 0 000 733	YOUTH T-SHIRTS	$ Z 8	    4.75<R>
00 00 0 000 734	YOUTH T-SHIRT M	$ Z 8	    4.75<R>
00 00 0 000 735	YOUTH T-SHIRT L	$ Z 8	    4.75<R>
00 00 0 000 736	T-SHIRT W/B S	$ Z 8	    6.10<R>
00 00 0 000 737	NLA -T-SHIRT W/B M	$ Z 8	    6.10<R>
00 00 0 000 738	NLA -T-SHIRT W/B L	$ Z 8	    6.10<R>
00 00 0 000 739	NLA -T-SHIRT W/B XL	$ Z 8	    6.10<R>
00 00 0 000 740	T-SHIRT BLK.S	$ Z 8	    6.90<R>
00 00 0 000 741	T-SHIRT BLK.M	$ Z 8	    6.90<R>
00 00 0 000 742	NLA -T-SHIRT BLK.L	$ Z 8	    6.90<R>
00 00 0 000 743	NLA -T-SHIRT BLK.XL	$ Z 8	    6.90<R>
00 00 0 000 744	T-SHIRT W/N S	$ Z 8	    4.95<R>
00 00 0 000 745	T-SHIRT W/N M	$ Z 8	    4.95<R>
00 00 0 000 746	T-SHIRT W/N L	$ Z 8	    4.95<R>
00 00 0 000 800	TENT CARD(50)	& Z	   16.15<R>
00 00 0 000 850	ATTACHE CASE	& Z 8	  599.23<R>
00 00 0 000 851	KEY FOB	& Z 8	   11.46<R>
00 00 0 000 852	DATEBOOK	& Z 8	  142.69<R>
00 00 0 000 853	POCKET SECRETARY	& Z 8	   56.54<R>
00 00 0 000 854	CHECKBOOK COVER	& Z 8	   39.92<R>
00 00 0 000 855	ADDRESS BOOK	& Z 8	   85.62<R>
00 00 0 000 856	LUGGAGE TAG	& Z 8	    4.77<R>
00 00 0 000 857	MEMO FOLDER	& Z 8	  114.15<R>
00 00 0 000 860	T/NECK SHIRT-SMALL	$ Z 8	   34.60<R>
00 00 0 000 861	T/NECK SHIRT-MED.	$ Z 8	   34.60<R>
00 00 0 000 862	T/NECK SHIRT-LARGE	$ Z 8	   34.60<R>
00 00 0 000 863	T/NECK SHIRT- XL	$ Z 8	   34.60<R>
00 00 0 000 864	POLO SHIRT WHITE-SMALL	$ Z 8	   42.00<R>
00 00 0 000 865	POLO SHIRT WHITE-MED.	$ Z 8	   42.00<R>
00 00 0 000 866	POLO SHIRT WHITE-LARGE	$ Z 8	   42.00<R>
00 00 0 000 867	POLO SHIRT WHITE-XL	$ Z 8	   42.00<R>
00 00 0 000 868	POLO SHIRT BLACK-SMALL	$ Z 8	   42.00<R>
00 00 0 000 869	POLO SHIRT BLACK-MED.	$ Z 8	   42.00<R>
00 00 0 000 870	POLO SHIRT BLACK-LARGE	$ Z 8	   42.00<R>
00 00 0 000 871	POLO SHIRT BLACK-XL	$ Z 8	   42.00<R>
00 00 0 000 872	SPORT HAT-WHITE	$ Z 8	   10.60<R>
00 00 0 000 873	SPORT HAT-BLACK	$ Z 8	   10.60<R>
00 00 0 000 874	SPORT VISOR-WHITE	$ Z 8	    8.10<R>
00 00 0 000 875	SPORT T-SHIRT--SM.	$ Z 8	    7.30<R>
00 00 0 000 876	SPORT T-SHIRT--MED.	$ Z 8	    7.30<R>
00 00 0 000 877	SPORT T-SHIRT--LG.	$ Z 8	    7.30<R>
00 00 0 000 878	SPORT T-SHIRT--XL.	$ Z 8	    7.30<R>
00 00 0 000 879	YOUTH SHIRT-SM.	$ Z 8	    6.50<R>
00 00 0 000 880	YOUTH SHIRT-MED.	$ Z 8	    6.50<R>
00 00 0 000 881	YOUTH SHIRT-LARGE	$ Z 8	    6.50<R>
00 00 0 000 900	PRODUCT TAG (50)	& Z	   18.46<R>
00 00 0 000 916	LP-KEY FOB BLK.	& Z	    5.00<R>
00 00 0 000 990	EXEC. TRAVEL LIBRARY	& Z 8	   33.38<R>
01 00 9 760 750	OBS NLA FILM 11/81	H X	    5.11<R>
01 00 9 796 021	01099099161	V	   40.12<R>
01 00 9 796 022	NLA -BELTKAT R51/2-R68	V	   18.58<R>
01 00 9 796 023	NLA -TABLE	V	   13.77<R>
01 00 9 796 538	01019796538	VV	    9.23<R>
01 00 9 796 758	01019796758	VV	    9.23<R>
01 01 9 750 451	NLA -BROCHURE	H X	    0.00<R>
01 01 9 766 341	NLA -NLA	XYZ	    0.00<R>
01 01 9 796 311	LGR-R80G/S R80ST FILM	Z	    9.23<R>
01 01 9 796 318	SML.R80GS-R80ST FILM	Z	    9.23<R>
01 01 9 796 341	LGR-R45 R65LS FILM	Y	    9.23<R>
01 01 9 796 351	SML.R45-R65LS FILM	Y	    9.23<R>
01 01 9 796 371	LGR-R50/5-R90S FILM	W	    9.23<R>
01 01 9 796 378	R50/5-R90S FILM	W	    9.23<R>
01 01 9 796 381	01019796521	X	    9.23<R>
01 01 9 796 388	01019796528	X	    9.23<R>
01 01 9 796 441	NLA -BATTERY DISPLAY	WXYZ	   49.83<R>
01 01 9 796 451	NLA -WINDOW DISPLAY	WXYZ	   31.37<R>
01 01 9 796 491	LGR-R60/7-R80RT	XZ	    9.23<R>
01 01 9 796 498	SML.R60/7RSORT FILM	XZ	    9.23<R>
01 01 9 796 521	LGR-R100/7-R100RT	X	    9.23<R>
01 01 9 796 528	SML.R100/7-R100 FILM	X	    9.23<R>
01 01 9 796 531	K100-RS PT-FILM LGR.	VV	    9.23<R>
01 01 9 796 538	K-100 PARTS FILM	VV	    9.23<R>
01 01 9 796 611	PARTS CATALOG	Z	   45.00<R>
01 01 9 796 620	NLA -PTS.CTLG.R60/R80	X	    0.00<R>
01 01 9 796 621	PARTS CATALOG	X	   45.00<R>
01 01 9 796 671	R80-R80RT/85 LGR.	Z	    9.23<R>
01 01 9 796 678	R80-R80RT/85	Z	    9.23<R>
01 01 9 796 751	K75C-S M.FISCHE LRG.	VV	    9.23<R>
01 01 9 796 758	K-75 MICROFISCHE	VV	    9.23<R>
01 09 9 099 161	PARTS CATALOG	V	   37.11<R>
01 09 9 099 480	BINDER             *	FX	    8.65<R>
01 09 9 760 251	01009796370	H X	    0.00<R>
01 09 9 760 255	NLA -MICRO FISCHE	WX	    0.00<R>
01 09 9 760 261	01099796024	WX	   35.14<R>
01 09 9 760 341	NLA -NLA	WX	    0.00<R>
01 09 9 796 024	01099796332	WX	   40.12<R>
01 09 9 796 026	NLA -MICRO FILM R65	Y	   14.68<R>
01 09 9 796 028	01009796340	X	    0.00<R>
01 09 9 796 068	LGR.ACCES.FILM	WXYZ	    0.00<R>
01 09 9 796 069	NLA -POCKET ACCESS BOOK	WXYZ	    2.75<R>
01 09 9 796 319	LGR-NO. INDEX FILM	WXYZ	    0.00<R>
01 09 9 796 320	SML.NO INDEX FILM	WXYZ	    0.00<R>
01 09 9 796 330	PARTS CATALOG	Y	   37.11<R>
01 09 9 796 332	01019796621	WX	   33.26<R>
01 09 9 796 389	SML.ACCESSORIES	VWXYZ	    0.00<R>
01 09 9 798 307	OBS-NLA -MICRO FILM SERVI	WXYZ	    8.65<R>
01 09 9 798 407	NLA -FILM 1	WXYZ	    0.00<R>
01 21 9 796 561	DISPLAY CATALOG	WXYZ	    0.00<R>
01 27 9 796 367	NLA -HELMET PAMPHLET	Z	    0.00<R>
01 29 9 796 019	NLA -PARTS-SERVICE FILE	X	    0.00<R>
01 29 9 796 239	NLA -SML. ACCS. BOOK	WXYZ	    3.46<R>
01 29 9 796 785	TEMPLATE	VV	    0.47<R>
01 30 9 099 810	INDEX	AX	    0.00<R>
01 30 9 760 500	NLA -N/A	H X	    0.00<R>
01 31 9 099 323	NLA -PUB BOARD	G X	    7.35<R>
01 38 9 760 161	81249404002	ACBFGHI X	 1244.65<R>
01 38 9 760 188	81249404016	G X	   10.65<R>
01 39 9 099 250	NLA -PTS/SERV	G X	    4.48<R>
01 39 9 099 254	NLA -PARTS BINDER	WX	    0.00<R>
01 39 9 099 275	01399099840	A X	    0.00<R>
01 39 9 099 840	01309099810	AX	    0.00<R>
01 39 9 796 079	NLA -FILE	XYZ	   13.91<R>
01 40 9 099 100	RIDERS MANUAL /5	W	   15.00<R>
01 40 9 099 150	REPAIR MANUAL	W	   45.00<R>
01 40 9 760 450	RIDERS MANUAL /6	W	   15.00<R>
01 40 9 760 460	REPAIR MANUAL	W	   45.00<R>
01 41 9 099 116	NLA -RIDER'S MANUAL	W	    8.48<R>
01 41 9 760 457	NLA -RIDER'S MANUAL	W	    8.48<R>
01 41 9 760 467	NLA -RIDER'S MANUAL	X	    8.48<R>
01 41 9 798 011	NLA -HAND BOOK /7 1978	X	    4.26<R>
01 41 9 798 017	RIDERS MANUAL	X	    8.48<R>
01 41 9 798 031	HAND BOOK R65 1979	Y	    4.26<R>
01 41 9 798 037	RIDER'S MANUAL	Y	    8.48<R>
01 41 9 798 047	OBS RIDER'S MANUAL	X	    8.48<R>
01 41 9 798 048	OBS RIDER'S MANUAL	X	    8.48<R>
01 41 9 798 098	RIDER'S MANUAL	Y	    8.48<R>
01 41 9 798 099	NLA -RIDER'S MANUAL	XZ	    8.48<R>
01 41 9 798 261	NLA -HANDBOOK /7 19	X	    4.00<R>
01 41 9 798 321	01419798447	VV	    6.12<R>
01 41 9 798 447	01479798447	VV	    6.12<R>
01 43 9 798 443	RIDER MANUAL	VV	    8.48<R>
01 47 9 798 257	RIDER'S MANUAL	Y	    8.48<R>
01 47 9 798 258	SUPPLEMENT	Z	    8.00<R>
01 47 9 798 267	RIDER'S MANUAL	X	    8.48<R>
01 47 9 798 277	RIDER'S MANUAL	XZ	    8.48<R>
01 47 9 798 317	RIDER'S MANUAL	Y	    8.48<R>
01 47 9 798 447	RIDER'S MANUAL	VV	    8.48<R>
01 47 9 798 491	RIDER'S MANUAL	Z	    8.48<R>
01 47 9 798 547	K-75 RIDERS MANUAL	VV	    8.48<R>
01 48 9 798 138	RIDER'S MANUAL	Z	    8.48<R>
01 51 9 099 021	NLA -SHOP MANUAL	W	   48.85<R>
01 51 9 099 022	NLA-OBS-NLA -SUPPLEMENT #	W	    0.00<R>
01 51 9 099 051	NLA -SHOP MANUAL /5	W	   19.57<R>
01 51 9 599 041	01519798461	X	   58.63<R>
01 51 9 798 052	NLA -SUPPLEMENT #1	X	    0.00<R>
01 51 9 798 055	01559798465	X	   47.71<R>
01 51 9 798 065	SUPPLEMENT #2	X	    0.00<R>
01 51 9 798 092	01579798467	Y	   37.51<R>
01 51 9 798 094	NLA -SUPPLEMENT #3	Y	    0.00<R>
01 51 9 798 461	01519798055	X	   47.71<R>
01 55 9 798 115	NLA -SUPPLEMENT R65	Y	    0.00<R>
01 55 9 798 125	NLA -SHOP MAN.FILM 80GS	Z	   10.60<R>
01 55 9 798 465	REPAIR MANUAL	X	   47.71<R>
01 57 9 798 022	NLA -NLA -SUPPLEMENT #4	X	    0.00<R>
01 57 9 798 027	SUPPLEMENT#3	Y	    0.00<R>
01 57 9 798 357	REPAIR MANUAL	Z	   47.71<R>
01 57 9 798 457	REPAIR MANUAL	VV	   15.91<R>
01 57 9 798 467	REPAIR MANUAL	Y	   47.71<R>
01 57 9 798 517	REPAIR MANUAL R80RT	YZ	   15.91<R>
01 57 9 798 557	K-75 REPAIR MANUAL	VV	   15.91<R>
01 59 9 099 176	NLA -N.L.A.	V	   32.62<R>
01 60 9 798 164	NLA-OBS-NLA -FLAT RATE-SU	WXYZ	    0.00<R>
01 61 9 760 701	NLA -INSPECTION FORMS 50	XYZ	    3.91<R>
01 61 9 798 061	NLA-OBS-NLA -FLAT RATE 19	X	   29.35<R>
01 61 9 798 081	OBS-NLA -FLAT RATE BOOK R	Y	   16.23<R>
01 61 9 798 084	NLA-OBS-NLA -FLAT RATE 19	Y	   29.35<R>
01 61 9 798 141	NLA -FLAT RATE BOOK	X	   33.94<R>
01 61 9 798 161	NLA-OBS-NLA -FLAT RATE R8	Z	    8.15<R>
01 61 9 798 191	NLA -INSP-FORM	WXYZ	    2.05<R>
01 70 9 796 210	FILM HOLDER	WXYZ	    6.12<R>
01 71 9 760 477	NLA-OBS-TECH.DATA + SERVI	X	    7.83<R>
01 71 9 798 001	NLA-OBS-NLA -FLAT RATE BO	Z	    8.65<R>
01 71 9 798 071	NLA-OBS-NLA -TECH DATA &	X	    7.83<R>
01 71 9 798 077	NLA-OBS-TECH DATA & SERVI	X	    7.83<R>
01 71 9 798 078	NLA-OBS-TECH DATA & SERVI	X	    7.83<R>
01 80 9 750 010	NLA	G X	    0.58<R>
01 80 9 750 012	NLA	G X	    0.98<R>
01 80 9 772 211	88888999785	G X	    0.00<R>
01 80 9 772 214	DECAL 4CM-NLA	G X	    0.00<R>
01 80 9 772 220	DECAL HELMET-NLA	G X	    0.00<R>
01 88 9 099 670	NLA -TAG FOR WARRANTY PAR	VWXYZ	    0.00<R>
01 89 9 099 668	OBS-IBM PENCIL	G X	   10.52<R>
01 89 9 099 669	NLA -BOX OF REFILLS FOR P	VWXYZ	    9.98<R>
01 89 9 798 029	NLA -WARRANTY CLAIMS	VWXYZ	    0.00<R>
01 90 9 099 150	NLA -DLR LIST EUROPE	VWXYZ	    2.43<R>
01 90 9 099 190	DEALER LIST EURO	VWXYZ	    2.60<R>
01 90 9 798 470	CATALOG	WXYZ	   49.20<R>
01 90 9 798 473	86 WIRING FILE	WXYZ VV	    0.00<R>
01 91 9 099 094	NLA -ELECTRIC DIAGRAM	X	    2.38<R>
01 91 9 099 097	NLA -ELECTRIC DIAGRAM	X	    2.38<R>
01 99 9 099 187	S.I.DIVIDERS WHT.	VWXYZ	    1.63<R>
01 99 9 099 188	S.I.DIVIDERS YEL.	VWXYZ	    3.26<R>
01 99 9 099 191	01999099153	G X	    1.72<R>
01 99 9 099 199	S.I.BINDER	VWXYZ	    8.15<R>
07 11 0 014 100	NLA -PISTON RING STD.	V	    2.45<R>
07 11 0 014 112	OBS-NLA -OIL RING STD.	V	    2.94<R>
07 11 0 014 116	NLA -OIL RING + 1MM	V	    2.62<R>
07 11 0 014 123	OBS-OIL RING + 05	V	    3.58<R>
07 11 0 014 124	OBS-OIL RING + 1MM	V	    3.58<R>
07 11 0 014 127	OBS-PISTON RING STD.	V	    2.77<R>
07 11 0 014 128	OBS-PISTON RING + 05	V	    2.77<R>
07 11 0 014 538	NLA-OBS-NLA -PISTON RING	V	    3.91<R>
07 11 0 014 539	OBS-NLA -PISTON RING + 1M	V	    3.91<R>
07 11 0 014 543	OBS-NLA -OIL RING STD.	V	    3.58<R>
07 11 0 014 544	NLA -OIL RING 05	V	    3.18<R>
07 11 0 014 545	NLA -OIL RING + 1MM	V	    3.18<R>
07 11 0 014 577	OBS-PISTON RING STD.	V	    2.20<R>
07 11 0 014 578	NLA -PISTON RING + 05	V	    2.20<R>
07 11 0 014 579	NLA -PISTON RING 1MM	V	    2.20<R>
07 11 9 900 105	OBS-SCREW	V	    0.17<R>
07 11 9 900 147	OBS-SCREW 8X10	WXYZ	    0.49<R>
07 11 9 900 719	SCREW 5X18	WX	    0.17<R>
07 11 9 900 744	NLA -SCREW 6X25	WX	    0.25<R>
07 11 9 900 810	07119900811	J X	    0.18<R>
07 11 9 900 820	NLA -SCREW 6 X 20	WX	    0.42<R>
07 11 9 900 869	SCREW 8X20	CIX	    0.46<R>
07 11 9 900 873	OBS-BOLT	Y	    0.25<R>
07 11 9 900 875	BOLT 10 X 30	WXYZ	    0.74<R>
07 11 9 900 878	BOLT M8X25	VV	    0.23<R>
07 11 9 901 310	NLA -SCREW 4X8	V	    0.08<R>
07 11 9 901 322	NLA -NLA	V	    0.05<R>
07 11 9 901 428	NLA-OBS-NLA -SCREW  6 X 2	WXY	    0.32<R>
07 11 9 901 682	SCREW 4 X 8	H WX	    0.18<R>
07 11 9 901 692	07119928420	W	    0.25<R>
07 11 9 901 720	07119928439	GWXH	    0.18<R>
07 11 9 901 763	OBS-SCREW 5 X 12	W	    0.17<R>
07 11 9 901 797	NLA -NLA	V	    0.00<R>
07 11 9 901 849	NLA -SCREW 6 X 20	WX	    0.17<R>
07 11 9 902 137	OBS-SCREW 3.5 X 13	X	    0.17<R>
07 11 9 902 321	07119902403	W	    0.17<R>
07 11 9 902 403	METAL SCREW	HI X	    0.18<R>
07 11 9 902 429	B3.5X16 SCREW	WXY	    0.17<R>
07 11 9 902 475	METAL SCREW	BHFJMVV	    0.18<R>
07 11 9 902 512	OBS-NLA -BOLT	WXY	    0.09<R>
07 11 9 902 513	BZ4.2X19 SCREW	WXY	    0.17<R>
07 11 9 902 514	BZ4.2X16 SCREW	XY	    0.17<R>
07 11 9 902 527	BOLT B4.2X13	VV	    0.17<R>
07 11 9 902 638	BOLT M6X12	VV	    0.26<R>
07 11 9 902 654	BOLT M8X35	VV	    0.42<R>
07 11 9 902 656	07119902654	VV	    0.32<R>
07 11 9 903 196	NLA -STUD 6X30         LA	G X	    1.60<R>
07 11 9 903 208	STUD 6X12	V	    1.11<R>
07 11 9 903 209	07119903208	V	    1.55<R>
07 11 9 903 300	NLA -STUD  8 X 12	WXY	    0.05<R>
07 11 9 903 303	NLA -STUD 8 X 15	V	    0.89<R>
07 11 9 903 306	OBS-STUD 8X18	W	    0.91<R>
07 11 9 903 339	07129903338	G X	    1.11<R>
07 11 9 903 436	OBS-OBS-NLA-STD	G X	    1.26<R>
07 11 9 903 503	NLA-OBS-NLA -STUD 8 X 1 X	V	    0.89<R>
07 11 9 903 530	NLA -STUD 8 X 1 X 28	V	    1.46<R>
07 11 9 903 540	OBS-OBS-SCREW	V	    1.14<R>
07 11 9 905 325	WRENCH	VV	    3.69<R>
07 11 9 905 437	STUD	Z	    0.38<R>
07 11 9 905 660	SCREW	VW	    0.49<R>
07 11 9 906 008	TOOL	WX	    1.46<R>
07 11 9 906 014	OBS-ALLEN WRENCH 4MM	VWXY	    0.98<R>
07 11 9 906 020	07119906026	G X	    1.26<R>
07 11 9 906 026	NLA -ALLEN WRENCH M6	B X	    1.26<R>
07 11 9 906 032	NLA -ALLEN WRENCH 78	B X	    1.69<R>
07 11 9 906 327	46631241080	YXZ	    0.17<R>
07 11 9 906 328	O-RING	WXYZ	    0.17<R>
07 11 9 906 400	OBS-BOLT	Z	    0.17<R>
07 11 9 906 412	SCREW 5 X 10	WX	    0.17<R>
07 11 9 906 415	OBS-OBS-SCREW	B X HIJM	    0.18<R>
07 11 9 906 416	M5X25 SCREW	VV	    0.17<R>
07 11 9 906 431	SCREW 5X12	WXY	    0.49<R>
07 11 9 906 432	SCREW	FHIJMX	    0.18<R>
07 11 9 906 433	SCREW 5 X 16	WXY	    0.49<R>
07 11 9 906 434	OBS-SCREW 4 X 12	WXYZ	    0.17<R>
07 11 9 906 435	BOLT	X	    0.17<R>
07 11 9 906 702	OBS-BOLT	X	    0.17<R>
07 11 9 906 714	BOLT BZ3.5X16	VV	    0.17<R>
07 11 9 906 734	OBS-SCREW	JMN Y	    0.18<R>
07 11 9 906 737	METAL SCREW B3.9X13	HIJ VV	    0.18<R>
07 11 9 906 747	SCREW 4.2 X 16	X	    0.17<R>
07 11 9 906 754	SCREW	W	    0.25<R>
07 11 9 906 758	NLA-OBS-OBS-METAL SCREW	H X	    0.05<R>
07 11 9 906 762	SCREW	HMXFIJN	    0.18<R>
07 11 9 906 763	BOLT	J X	    0.18<R>
07 11 9 906 772	SCREW 4.2 X 19	Y	    0.17<R>
07 11 9 906 812	SCREW 4X10         *	F Z HMN	    0.18<R>
07 11 9 906 822	HEAD SCREW	HFIJMYZVV	    0.18<R>
07 11 9 906 832	SCREW	Z	    0.17<R>
07 11 9 907 058	OBS-OBS-NLA -SCREW 4 X 8	WX	    0.25<R>
07 11 9 907 101	NLA -SCREW	VW	    0.08<R>
07 11 9 907 430	SCREW 6X12	WYZ VV	    0.65<R>
07 11 9 907 450	SCREW WITH NOSE	VW	    0.82<R>
07 11 9 907 581	NLA -HEAD SCREW	VV	    0.17<R>
07 11 9 907 582	5 X 12 SCREW	VV	    0.17<R>
07 11 9 907 589	BOLT	VV	    0.17<R>
07 11 9 907 590	07119907589	VV	    0.17<R>
07 11 9 907 591	AM4X30 SCREW	VV	    0.17<R>
07 11 9 907 592	BOLT AM4X10	P VV	    0.15<R>
07 11 9 907 593	BOLT AM4X20	VV	    0.17<R>
07 11 9 907 594	BOLT AM5X10	VV	    0.17<R>
07 11 9 907 595	BOLT AM5X12	VV	    0.17<R>
07 11 9 907 602	SCREW	X IMN	    0.18<R>
07 11 9 907 603	SCREW 3 X 8	XYZ	    0.17<R>
07 11 9 907 604	AM3X10 SCREW	H X JMN	    0.18<R>
07 11 9 907 614	SCREW 4X10	Z	    0.17<R>
07 11 9 907 616	AM4X10 SCREW	B X	    0.18<R>
07 11 9 907 623	SCREW	AGXHN	    0.18<R>
07 11 9 907 624	5X10 SCREW	X	    0.15<R>
07 11 9 907 626	07119907697	G X	    0.18<R>
07 11 9 907 631	OBS-SCREW 5X20	WX	    0.25<R>
07 11 9 907 639	L S SCREW	AGFIJXVV	    0.18<R>
07 11 9 907 643	SCREW 3.5 X 25	WXYZ	    0.29<R>
07 11 9 907 646	OBS-SCREW 6 X 10	WXY	    0.17<R>
07 11 9 907 657	SCREW AM4X6	MH VV	    0.18<R>
07 11 9 907 687	NLA -SCREW 4 X 6	WXYZ	    0.17<R>
07 11 9 907 688	SCREW	AG22XHFIJM	    0.18<R>
07 11 9 907 701	B2.9X6.5 SCREW	F X HIJ	    0.18<R>
07 11 9 907 712	OBS-OBS-NLA	B X	    0.18<R>
07 11 9 907 733	SCREW B4,2X13	AGHXFIJM	    0.18<R>
07 11 9 907 737	OBS-BOLT	Y	    0.17<R>
07 11 9 907 741	07119907794	AB X	    0.18<R>
07 11 9 907 744	07119907790	B X	    0.03<R>
07 11 9 907 773	SCREW B3,5X13	I X J	    0.18<R>
07 11 9 907 774	SCREW	B X I	    0.18<R>
07 11 9 907 794	OBS-OBS-SCREW	BXHFIJMN	    0.18<R>
07 11 9 907 801	BOLT BZ4.2X19	NIM VV	    0.17<R>
07 11 9 907 804	SCREW	VV	    0.23<R>
07 11 9 907 808	BOLT 3.5X13	Z	    0.17<R>
07 11 9 907 809	4.2X19 SCREW	VV	    0.17<R>
07 11 9 907 812	SCREW	VV	    0.17<R>
07 11 9 907 909	3.5X13 SCREW	P VV	    0.15<R>
07 11 9 907 910	SCREW 3.9X9.5	Z	    0.17<R>
07 11 9 907 911	B3.5X13 SCREW	Y	    0.17<R>
07 11 9 907 913	SCREW	FJMN VV	    0.18<R>
07 11 9 907 941	OBS-SCREW 4.2X9.5	XY	    0.17<R>
07 11 9 907 943	SCREW	JN ZVV	    0.18<R>
07 11 9 907 944	BZ4.2X13 SCREW	WX	    0.17<R>
07 11 9 907 945	SCREW	CM X FIN	    0.18<R>
07 11 9 907 946	OBS-SCREW	IXJ	    0.18<R>
07 11 9 907 947	SCREW 4.2X 1.5X2.5	JN VV	    0.18<R>
07 11 9 907 949	SCREW	NMIFHJZ	    0.18<R>
07 11 9 907 951	BOLT BZ.5X13	VV	    0.17<R>
07 11 9 907 957	SCREW	MIJN VV	    0.18<R>
07 11 9 907 975	4.8X16 SCREW	VV	    0.17<R>
07 11 9 907 984	4.2X16 SCREW	VV	    0.25<R>
07 11 9 908 255	NLA -STUD	A  G X	    1.42<R>
07 11 9 908 308	33111233225	WX	    0.65<R>
07 11 9 908 327	SCREW	B X	    0.60<R>
07 11 9 908 328	07129908137	B X	    1.11<R>
07 11 9 908 336	07129908145	V	    0.00<R>
07 11 9 908 370	33111233226	WX	    1.06<R>
07 11 9 908 378	07129908174	WX	    1.38<R>
07 11 9 908 385	07119903436	W	    1.38<R>
07 11 9 908 391	STUD 10 X 35	WXY	    1.55<R>
07 11 9 910 405	NLA	A  G X	    0.22<R>
07 11 9 910 407	SCREW	  I X	    0.28<R>
07 11 9 910 409	OBS-BOLT 6X18	W	    0.25<R>
07 11 9 910 417	BOLT M5X16	VV	    0.17<R>
07 11 9 910 418	BOLT M5X30	VV	    0.17<R>
07 11 9 911 214	07119911218	G X	    0.18<R>
07 11 9 911 218	SCREW	X HIJMN	    0.18<R>
07 11 9 911 605	BOLT 8 X 1 X 12	VXY	    0.32<R>
07 11 9 911 621	BOLT M10X1X22	VV	    0.32<R>
07 11 9 911 628	07119911631	V	    0.32<R>
07 11 9 911 631	BOLT 10 X 1 X 20	W	    0.32<R>
07 11 9 912 192	NLA -BOLT 5 X 30	V	    0.25<R>
07 11 9 912 199	HEX BOLT	XYZ	    0.17<R>
07 11 9 912 256	OBS-BOLT 6X25	A X	    0.22<R>
07 11 9 912 282	OBS-BOLT 6X30-NLA	A   G X	    0.22<R>
07 11 9 912 303	M6X35 BOLT	IJHFN Y 34	    0.18<R>
07 11 9 912 312	BOLT 6X40	WX	    0.32<R>
07 11 9 912 316	NLA -BOLT 6X42	V	    0.25<R>
07 11 9 912 326	OBS-BOLT 6X45	WXY	    0.32<R>
07 11 9 912 335	07119912337	G X	    0.32<R>
07 11 9 912 337	BOLT 6X50	HFIJMNXA	    0.18<R>
07 11 9 912 357	SCREW	FIJMXB34	    0.28<R>
07 11 9 912 360	OBS-SCREW	I X M	    0.38<R>
07 11 9 912 364	SCREW	VV 3 4	    0.75<R>
07 11 9 912 453	07119919756	X	    0.57<R>
07 11 9 912 507	BOLT	H X	    0.28<R>
07 11 9 912 513	OBS-OBS-BOLT 8 X 50	YZ	    0.32<R>
07 11 9 912 515	07119912517	A X	    0.62<R>
07 11 9 912 525	BOLT 8X55-NLA	A     G X	    0.51<R>
07 11 9 912 563	NLA -BOLT M8X85	Z	    0.00<R>
07 11 9 912 629	07119913868	W	    0.49<R>
07 11 9 912 646	BOLT 10X50	    G X	    0.60<R>
07 11 9 912 858	OBS-BOLT 12X60	Y	    0.98<R>
07 11 9 912 859	OBS-BOLT 12 X 70	Y	    0.78<R>
07 11 9 913 021	NLA-OBS-NLA -SCREW	VW	    0.17<R>
07 11 9 913 077	4X8 HEX BOLT	VV	    0.15<R>
07 11 9 913 082	BOLT	F X I	    0.45<R>
07 11 9 913 097	OBS-SCREW	X 22 23	    0.34<R>
07 11 9 913 210	BOLT 5X8          LA	G X	    0.22<R>
07 11 9 913 211	M5X12 BOLT	X VV	    0.17<R>
07 11 9 913 212	BOLT	BM X	    0.18<R>
07 11 9 913 222	BOLT 5X10	G X VV	    0.18<R>
07 11 9 913 227	07119913231	AGX 32	    0.18<R>
07 11 9 913 235	NUT	BXFI	    0.18<R>
07 11 9 913 250	NLA-OBS-NLA -BOLT 5X20	WX	    0.17<R>
07 11 9 913 252	PD M5X20 HEX NUT	X	    0.17<R>
07 11 9 913 405	OBS-BOLT 6X6	Y	    0.32<R>
07 11 9 913 408	BOLT M6X6	VV	    0.32<R>
07 11 9 913 412	BOLT	VV	    0.31<R>
07 11 9 913 418	07119913420	BC 24 25 X	    0.18<R>
07 11 9 913 425	07119913439	A  G X	    0.03<R>
07 11 9 913 426	7-BOLT SPEC	QXIJMNHF 3	    0.18<R>
07 11 9 913 430	NLA-OBS-NLA -BOLT 6X10	Y	    0.22<R>
07 11 9 913 432	BOLT	A X	    0.18<R>
07 11 9 913 436	M6X20 HEX BOLT	VV	    0.49<R>
07 11 9 913 441	BOLT 6X12	G X	    0.28<R>
07 11 9 913 442	BOLT 6X12	IJMNHF3 VV	    0.18<R>
07 11 9 913 445	OBS-BOLT 6 X 12	V	    0.65<R>
07 11 9 913 451	M6X14 BOLT	XY	    0.17<R>
07 11 9 913 464	BOLT 6X16	VXYZ	    0.17<R>
07 11 9 913 465	M6X16 BOLT	VXYZ	    0.17<R>
07 11 9 913 466	07119913442	BFIJM X 32	    0.17<R>
07 11 9 913 470	NLA-BOLT 6X18	G X	    0.18<R>
07 11 9 913 472	SET SCREW 6X15     *	AGMHFIJNX	    0.18<R>
07 11 9 913 476	M6X20 HEX BOLT	XYZ	    0.18<R>
07 11 9 913 477	11131252369	G VV 3 4	    0.03<R>
07 11 9 913 478	07119913477	B VV 3 4	    0.22<R>
07 11 9 913 480	BOLT 6X25	AG X JM VV	    0.18<R>
07 11 9 913 482	OBS-NLA-BOLT	G X	    0.28<R>
07 11 9 913 483	BOLT 6X25	HFIJMNX2	    0.18<R>
07 11 9 913 484	BOLT 6X28          *	HFIJMNX3VV	    0.20<R>
07 11 9 913 499	BOLT 6 X 28	WX HN	    0.28<R>
07 11 9 913 500	BOLT M6X30	MN/VV	    0.15<R>
07 11 9 913 502	BOLT M6X28	Z	    0.17<R>
07 11 9 913 554	BOLT 6X16	A X	    0.18<R>
07 11 9 913 566	BOLT 6X20	WX	    0.49<R>
07 11 9 913 567	BOLT 6 X 22	XY VV	    0.25<R>
07 11 9 913 573	BOLT	XY	    2.57<R>
07 11 9 913 575	BOLT 6X30	2FHIJMN3VV	    0.18<R>
07 11 9 913 590	OBS-BOLT 6X25	WX	    0.49<R>
07 11 9 913 607	OBS BOLT 8X16	Y	    0.32<R>
07 11 9 913 618	BOLT EURO	X I N VV	    0.18<R>
07 11 9 913 620	BOLT 8X15	G X	    0.32<R>
07 11 9 913 624	BOLT 8X16	22HXFI32JN	    0.17<R>
07 11 9 913 627	BOLT 8X18	GIJMX22HF	    0.18<R>
07 11 9 913 640	BOLT 8X20	BC X	    0.18<R>
07 11 9 913 652	BOLT 8X22	FHIJMN22X	    0.28<R>
07 11 9 913 656	BOLT 8X25	B X	    0.18<R>
07 11 9 913 662	BOLT 8X30	HFIJMN3X4	    0.18<R>
07 11 9 913 668	BOLT 8 X 32	V	    0.25<R>
07 11 9 913 674	BOLT M8X35	A X	    0.28<R>
07 11 9 913 678	BOLT 8X40	Z	    0.18<R>
07 11 9 913 831	OBS-BOLT 10X25	VWXY	    0.49<R>
07 11 9 913 837	BOLT 10X30	HMNIJ22X23	    0.28<R>
07 11 9 913 839	BOLT 10 X 30	XYZ	    0.49<R>
07 11 9 913 844	BOLT 10 X 35	WX	    1.38<R>
07 11 9 913 849	33531232705	WX	    0.89<R>
07 11 9 913 853	BOLT 10 X 45	WXY	    0.82<R>
07 11 9 913 855	BOLT 10X45   *	AFHIJXM	    0.46<R>
07 11 9 913 868	07119913853	WXY	    1.63<R>
07 11 9 913 880	07119913842	CBFI2X3HJM	    0.18<R>
07 11 9 913 891	OBS-NLA -BOLT 12 X 25	V	    0.65<R>
07 11 9 913 912	BOLT M12X45	VV	    0.55<R>
07 11 9 913 920	BOLT M6X25	VV	    0.42<R>
07 11 9 913 921	BOLT M6X12	VV	    0.29<R>
07 11 9 913 922	BOLT M5X10	VV	    0.17<R>
07 11 9 913 923	BOLT M5X12	VV	    0.17<R>
07 11 9 913 944	M6X40 SCREW	VV	    0.32<R>
07 11 9 914 005	NLA-OBS-NLA -BOLT 8X1X15	V	    0.32<R>
07 11 9 914 062	NLA -BOLT	V	    0.32<R>
07 11 9 914 093	OBS-BOLT 8 X 1 X 100	V	    0.65<R>
07 11 9 914 096	NLA -BOLT 8 X 1 X 110	V	    0.82<R>
07 11 9 914 347	BOLT	V	    1.55<R>
07 11 9 914 364	BOLT	V	    3.43<R>
07 11 9 914 626	BOLT M12X1.5X45	H X J	    0.60<R>
07 11 9 914 665	NLA -BOLT 12 X 1.5 X 82	V	    1.14<R>
07 11 9 915 014	OBS-OBS-BOLT	FHIJMN VV	    0.18<R>
07 11 9 915 015	SCREW	FHIJ Z	    0.18<R>
07 11 9 915 021	HEX SCREW          *	BFHIJMN VV	    0.25<R>
07 11 9 915 027	OBS-OBS-BOLT	FHIJ VV	    0.28<R>
07 11 9 915 030	BOLT WITH LOCK WASHER	WXYZ	    0.17<R>
07 11 9 915 036	BOLT M6X22	VV	    0.25<R>
07 11 9 915 051	SCREW	I J VV	    0.38<R>
07 11 9 915 063	BOLT M6X 16	JI VV	    0.62<R>
07 11 9 915 068	OBS-SCREW	JHFM VV	    0.42<R>
07 11 9 915 096	NLA -BOLT	BM 3 4 X	    0.00<R>
07 11 9 915 100	6X14 HEX BOLT	VV	    0.42<R>
07 11 9 915 104	M5X12 BOLT	VV	    0.17<R>
07 11 9 915 112	BOLT M5X12	VV	    0.26<R>
07 11 9 915 124	OBS-BOLT	XY	    0.34<R>
07 11 9 916 614	NLA -BOLT	X	    0.00<R>
07 11 9 916 810	07119907941	WX	    0.17<R>
07 11 9 917 411	OBS-BOLT	V 2	    1.42<R>
07 11 9 918 407	AM5X10 SELF TAPPING SCREW	Z	    0.17<R>
07 11 9 918 415	07119915024	F X	    0.32<R>
07 11 9 918 606	BOLT 5 X 16	Y VV	    1.38<R>
07 11 9 918 619	M6X25 BOLT	VV	    0.18<R>
07 11 9 918 655	M8X50 BOLT	VV	    0.32<R>
07 11 9 918 828	BOLT 8 X 75	Y	    0.82<R>
07 11 9 918 850	MIDX25 BOLT	Z VV	    0.46<R>
07 11 9 918 859	BOLT M8X35	VV	    0.32<R>
07 11 9 919 006	BOLT M8X1	VV	    0.29<R>
07 11 9 919 007	M8X1 PLUG	VV	    0.23<R>
07 11 9 919 108	PLUG 10 X 1	NV 32 VV	    0.63<R>
07 11 9 919 112	07119919108	BCM XVV 32	    0.63<R>
07 11 9 919 123	07119919124	WXYZ VV	    0.65<R>
07 11 9 919 124	PLUG	VV	    0.51<R>
07 11 9 919 209	07119919212	X 3 4	    1.00<R>
07 11 9 919 212	BOLT M 8X1	X 3 4	    0.65<R>
07 11 9 919 216	HEX PLUG 710	AG X	    0.45<R>
07 11 9 919 225	PLUG               *	FHMWXYZ3VV	    2.11<R>
07 11 9 919 226	07119919225	FXIJM	    0.65<R>
07 11 9 919 313	SCREW 3 X 8	W	    0.17<R>
07 11 9 919 358	OBS-SCREW	G X	    0.18<R>
07 11 9 919 367	CYLINDER HEADSC	BC22XHFIJM	    0.18<R>
07 11 9 919 373	SCREW	A X	    0.18<R>
07 11 9 919 381	SCREW 4 X 12	WY	    0.17<R>
07 11 9 919 386	SCREW 4 X 15	V	    0.17<R>
07 11 9 919 420	OBS-OBS-NLA-SCREW	G X	    0.28<R>
07 11 9 919 467	32722072219	VW	    0.32<R>
07 11 9 919 522	M8X70 SCREW	VV	    0.49<R>
07 11 9 919 594	BOLT M10X100	VV	    2.43<R>
07 11 9 919 607	OBS-SCREW 6X12	YZ	    0.25<R>
07 11 9 919 611	BOLT 5X8	WZ	    0.25<R>
07 11 9 919 612	BOLT 5 X 10	WYZ VV	    0.17<R>
07 11 9 919 613	BOLT 5 X 12	J WYZ VV	    0.23<R>
07 11 9 919 614	BOLT 5 X 16	WYZ	    0.25<R>
07 11 9 919 615	07119918606	M WXYZVV	    0.17<R>
07 11 9 919 617	BOLT 5 X 20	WYZ	    0.25<R>
07 11 9 919 619	BOLT 5 X 30	X	    0.25<R>
07 11 9 919 621	BOLT 6 X 16	P Y VV	    0.15<R>
07 11 9 919 623	OBS-SCREW          *	G X	   12.65<R>
07 11 9 919 630	OBS-HEAD SCREW M6X50	XFM	    0.28<R>
07 11 9 919 631	BOLT	YZ VV	    0.49<R>
07 11 9 919 635	BOLT	WYZ	    0.65<R>
07 11 9 919 637	OBS-BOLT 8 X 12	X	    0.65<R>
07 11 9 919 638	BOLT 8 X 45	XYZ VV	    0.49<R>
07 11 9 919 640	BOLT 8 X 15	WY	    0.32<R>
07 11 9 919 643	SCREW	H3 4 23 VV	    0.43<R>
07 11 9 919 646	BOLT	VV	    0.22<R>
07 11 9 919 647	BOLT	Z	    0.25<R>
07 11 9 919 648	SCREW 8X40	X 24 25 VV	    0.94<R>
07 11 9 919 649	BOLT 8 X 50	W	    0.34<R>
07 11 9 919 651	BOLT 8 X 55	W	    0.82<R>
07 11 9 919 653	OBS-BOLT	WYZ	    0.82<R>
07 11 9 919 656	BOLT 8 X 80	WYZ	    0.82<R>
07 11 9 919 658	BOLT	WXYZ	    0.82<R>
07 11 9 919 662	BOLTM10X12	H2XMN VV	    0.35<R>
07 11 9 919 670	07119919672	XY	    0.00<R>
07 11 9 919 672	BOLT 10 X 45	XZ VV	    1.14<R>
07 11 9 919 680	BOLT M10X40	VV	    0.29

```
{% endraw %}

## FILES978.TXT

{% raw %}
```
Disk No:  978
Program Title:  MMAKE, FIXER, EGABLANK, & PLOT
PC-SIG version: 1.2

MMAKE allows programmers to automate the process of compiling and
linking a program that is contained in several (or numerous) source
files.  It can be used with any programming language and with any
compiler that can be run from the MS-DOS command line.  MMAKE can
speed-up program development enormously, both by making recompilation of
a program go much faster, and by preventing errors when a changed file
is not recompiled.  MMAKE is based on the UNIX make utility.

FIXER lets you edit the extended ASCII character set.  The program has a
bar-menu on the top of the screen and a full screen editor for your
ASCII character set.  On-line help is also available most of the time
and is in a pop-up window.

Along with this ASCII full-screen editor, you have two other modules.
The first one is called BREAKER and it "breaks" a file and makes it
smaller.  BREAKER can also reverse the process by putting two files
together.  The second file is called STRIPPER.  It reads an input text
file and produces an output file by replacing any control character
visible (other choices are also possible).

PLOT provides a quick and easy-to-use set of tools for technical
plotting.  It handles rectilinear, polar, and vector plotting, and after
plotting your data lets you review a tabulation of all plotted points.
PLOT also graphs two simultaneous equations.  On-line help is included
for each plotting program, and the graphs are automatically scaled so
all your equations are always completely displayed.  The graphs can be
displayed on the screen and/or printed on your printer via DOS
GRAPHICS.COM.

Finally there is EGABLANK, which as the name suggests, blanks your EGA
screen after two minutes of inactivity.  Pressing any key will allow you
to see the text on your screen again.

Usage:  Programmer's Utility.

Special Requirements:  EGABLANK requires an EGA card.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00 for MMAKE, $20.00 for FIXER and $35.00
for PLOT.

File Descriptions:

DESCRIPT      Author's description of the program.
MMAKE    DOC  Documentation file.
MMAKE    EXE  Main program file.
!READ    ME   Information on how to start FIXER and user's conditions.
AR-REORD DBF  Data base file.
ASCEDIT  @@@  ASCII edit working file.
BIGBMW   TXT  Data file.
BREAKER  EXE  The BREAKER main program.
BUDG     PRN  Data file.
FIXER    EXE  The FIXER main program.
HELP     ASC  The help file for FIXER.EXE.
SPECIAL  DOC  Special ASCII characters.
STRIPPER EXE  The STRIPPER main program.
TESTMAIL DBF  Data base file.
EGABLANK COM  Main program
HLP3     BAS  Help file.
README   DOC  Documentation.
IPLOT    BAS  Program for plotting y=f(x) equations.
PLIC     BAS  License statement.
PLOG     BAS  Opening screen files.
PLOT     BAT  Batch file for start-up.
PLOTM    BAS  Plot menu.
PPLOT    BAS  Program for polar plotting.
SPLOT    BAS  Program for plotting two simultaneous equations.
VPLOT    BAS  Program for vector plotting.
IQBUILD  BAS  Program for testing your IQ.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║          <<<<  Disk No 978 MMAKE FIXER, EGABLANK, PLOT  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation files on this disk, type:                    ║
║             MANUALS (press enter)                                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HLP3.BAS

{% raw %}
```bas
100 'HLP3 - HELP FILE FOR SHAREWARE VERSION OF 'PLOT'.  05/08/87
110 'COPYRIGHT 1985,1986,1987, Prowess, Inc.
120 SCREEN 0,0:CLS:KEY OFF:COLOR 6,0
130 PRINT "                              'PLOT'- HELP PROGRAM"
140 PRINT "                               -------------------"
150 PRINT "INTRODUCTION"
160 PRINT "------------":COLOR 6,0
170 PRINT "Your Prowess, Inc. 'PLOT' shareware is a technical productivity tool that"
180 PRINT "provides a quick means of graphing a variety of functions. These include"
190 PRINT "plotting rectilinear and polar equations and vectors. In addition,"
200 PRINT "integrating capability is provided for finding the approximate area under"
210 PRINT "a curve (in rectangular coordinates only). After each plot is completed, you"
220 PRINT "may review a tabulation of all points plotted. BASIC syntax is used for "
230 PRINT "entering all functions. "
240 PRINT
250 PRINT:COLOR 7,0
260 PRINT "    A REMINDER: If you use these programs, after a trial period, you"
270 PRINT "                must pay the nominal registeration fee. Shareware"
280 PRINT "                companies can't exist without your support !!"
290 PRINT
300 PRINT
310 COLOR 6,0:PRINT "You are free to copy and distribute this shareware package providing that"
320 PRINT "you distribute ALL files on this diskette, in UNALTERED form."
330 LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE"
340 LOCATE 23,55:Q$=INKEY$:IF Q$="" THEN 340
350 CLS:KEY OFF:PRINT :PRINT
360 COLOR 7,0
370 PRINT
380 PRINT "                                PROGRAM DESCRIPTIONS"
390 PRINT "                                --------------------"
400 PRINT
410 PRINT "                  PLOT Y=f(X)-------(PGM. MENU SELECTION #1)---1":PRINT
420 PRINT "                  POLAR PLOTTING----(PGM. MENU SELECTION #2)---2":PRINT
430 PRINT "                  VECTOR PLOTTING---(PGM. MENU SELECTION #3) --3":PRINT
440 PRINT "                  PLOT SIM. EQ.-----(PGM. MENU SELECTION #4) --4":PRINT
450 PRINT "                  RETURN TO 'PLOT' PROGRAM  MENU --------------5":PRINT
460 PRINT "                  EXIT ----------------------------------------6":PRINT
470 PRINT
480 PRINT "                                MAKE SELECTION             "
490 LOCATE 20,49:XX$=INKEY$:IF XX$="" OR VAL(XX$)<1 OR VAL(XX$)>6 THEN 490
500 CLS:ON VAL(XX$) GOTO 520,740,980,1200,1870,1900
510 '------------------------------iplot-------------------------------------
520 COLOR 7,0:PRINT "Y=f(X)   (SELECTION #1 ON THE MENU)":COLOR 6,0
530 PRINT
540 PRINT "This program plots single valued functions of X over any range of X that you"
550 PRINT "specify (99999>X>.0001). You will be prompted to enter an equation in the "
560 PRINT "form y=f(x) and to specify a range of X (XMIN,XMAX) over which to plot. The"
570 PRINT "graph will be plotted over the range that you specify, but the X-axis will be"
580 PRINT "labeled + and - the larger of XMIN or XMAX.":PRINT
590 PRINT "Your equation will be evaluated at 200 evenly spaced points between XMIN and"
600 PRINT "XMAX and the largest absolute value of Y determined. This value of Y provides a"
610 PRINT "scaling factor that is used to insure that the graph of the function will fit"
620 PRINT "on the plot field. The Y-axis is labled + and - this largest value of Y.":PRINT
630 PRINT "The total range of X (XMIN to XMAX) is divided by 199 to establish a plotting "
640 PRINT "increment. The first point plotted is XMIN and 199th of the total range of X is"
650 PRINT "added for each of the 200 plot points. This tends to reduce the possibility"
660 PRINT "of division by zero, BUT DOES INSURE THAT IT WON'T OCCUR. If you get  a "
670 PRINT "'division by zero' error message, try a slight change in the range of X."
680 PRINT "After plotting, a tabulation of all plotting point may be viewed.":PRINT
690 PRINT "NOTE: In trig functions, X will be considered an angle in radians!"
700 PRINT
710 COLOR 6,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE":COLOR 7,0
720 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 720
730 CLS:GOTO 1560
740 '-------------------------------pplot-------------------------------------
750 COLOR 7,0:PRINT "POLAR PLOTTING (SELECTION #2 ON THE MENU)":COLOR 6,0
760 PRINT
770 PRINT "This program plots polar equations in polar format. There are two common forms"
780 PRINT "of polar equations:"
790 PRINT
800 PRINT "                     R = f(";CHR$(233);")   OR     Y = f(";CHR$(233);")  AND  X = f(";CHR$(233);")"
810 PRINT
820 PRINT "You will first be prompted to select the desired format. You will then be"
830 PRINT "prompted through the process of entering your equation(s)."
840 PRINT
850 COLOR 7,0:PRINT "               NOTE: ENTER ANY FIXED ANGLES IN RADIANS !!!"
860 PRINT
870 PRINT "    THE PLOT (VARIABLE A) WILL RUN FROM 0 TO 2*PI RADIANS [(0-360) DEGREES]":COLOR 6,0:PRINT
880 PRINT "Your equation(s) will be evaluated every 2 degrees to determine the largest"
890 PRINT "value of R for scaling. (X and Y formats are automatically converted to 'R'"
900 PRINT "format for scaling and plotting. After plotting, you may review a tabulation "
910 PRINT "of all plot points in both 'R' and 'X and Y' formats."
920 PRINT:COLOR 7,0
930 PRINT "      NOTE: The variable in your equation must always be 'A' (for angle)"
940 PRINT "            i.e.;   R = 2 * SIN((A+180)"
950 COLOR 6,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE":COLOR 7,0
960 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 960
970 GOTO 350
980 '-----------------------------vplot---------------------------------------
990 COLOR 7,0:PRINT "VECTOR PLOTTING  (SELECTION #3 ON THE MENU)":PRINT:COLOR 6,0
1000 PRINT "This program allows you to enter up to 10 vectors, in either polar or"
1010 PRINT "rectangular coordinates. You will be prompted through the inputs."
1020 PRINT
1030 PRINT "If you entered in polar format, a list of vectors representing your inputs will"
1040 PRINT "be shown along with the rectangular coordinates of each point. The coordinates"
1050 PRINT "of the resultant will be displayed in both coordinate systems"
1060 PRINT
1070 PRINT "The longest vector ( including the resultant ) will be used to scale the plot"
1080 PRINT "field and each vector will be shown in polar form. The resultant will be"
1090 PRINT "identified by a large, white terminator circle. The x and y coordinates of the"
1100 PRINT "resultant will be noted beside the graph."
1110 PRINT
1120 PRINT "Vectors input in rectangular format are handled in much the same way."
1130 PRINT
1140 COLOR 7,0:PRINT "        NOTE:  Roundoff errors may result in small calculation errors."
1150 PRINT "               Example:  5  might be represented by 4.9999  etc."
1160 PRINT :PRINT
1170 COLOR 6,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE":COLOR 7,0
1180 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 1180
1190 GOTO 350
1200 '-------------------------------splot-----------------------------------
1210 COLOR 7,0:PRINT "SIMULTANEOUS EQUATION PLOTTING (SELECTION #4 ON THE MENU)":COLOR 6,0:PRINT
1220 PRINT "This program allows you to input two equations, one in the form Y=f(X)."
1230 PRINT "and the other in the form A=f(B) and to plot them both on the same plot field."
1240 PRINT
1250 PRINT "You will be prompted to enter two equations and a range of X. Both equations"
1260 PRINT "will be plotted over the same range (XMIN to XMAX). Plotting increments are"
1270 PRINT "derived by dividing this total range by 199. Plotting starts at XMIN and 199th"
1280 PRINT "of the range is added for each of the 200 iterations. This greatly reduces the"
1290 PRINT "probability of getting a 'divide by zero' error, BUT DOES NOT ELIMINATE IT!!."
1300 PRINT "Should you get a 'divide by zero' error, try changing the range of X by a"
1310 PRINT "small amount. Both equations are evaluated over the whole range to determine"
1320 PRINT "the largest value of Y. The largest value (from either equation) will be used"
1330 PRINT "to scale the Y-axis (+Ymax to -Ymax).":PRINT:COLOR 7,0
1340 PRINT "  NOTE: IF ONE EQUATION PRODUCES VERY LARGE Y-AXIS VALUES AND THE OTHER"
1350 PRINT "        VERY SMALL Y-AXIS VALUES, THE TRUE SHAPE OF THE SMALL-VALUED CURVE"
1360 PRINT "        MAY BE VERY DIFFICULT TO DISCERN. OFTEN, RESTRICTING THE RANGE OF X"
1370 PRINT "        HELPS RESTRICT THE 'Y-VALUES' SO THAT BOTH CURVES ARE WELL PRESENTED."
1380 LOCATE 22,1:COLOR 6,0:PRINT "                          PRESS ANY KEY TO CONTINUE":COLOR 7,0
1390 LOCATE 22,54:A$=INKEY$:IF A$="" THEN 1390
1400 CLS:PRINT :PRINT :PRINT "When plotting of the two equations is completed, you may review a tabulation"
1410 PRINT "of all plotted points. This table displays the calculated values of Y and A for"
1420 PRINT "each value of X.":PRINT:COLOR 7,0
1430 PRINT "   NOTE: A RATIONAL FIRST ASSUMPTION IS THAT IF THE CURVES INTERSECT,"
1440 PRINT "         THE TABULATED VALUES SHOULD SHOW THE SOLUTION(S): i,e. Y=A"
1450 PRINT "         FOR A GIVEN X. IF THIS HAPPENS, IT IS PURE CHANCE SINCE THE"
1460 PRINT "         RANGE OF X WAS ARBITRARILY DIVIDED INTO 199 EVEN INCREMEMENTS."
1470 PRINT "         ALTHOUGH EXACT SOLUTIONS ARE NOT LIKELY TO BE DISPLAYED, THE"
1480 PRINT "         TABULAR VALUES OFTEN PROVIDE A SATISFACTORY ANSWER. RESTRICTING"
1490 PRINT "         THE RANGE OF X TO BARELY INCLUDE THE INTERSECTION POINT WILL"
1500 PRINT "         PROVIDE TABULATED VALUES THAT ARE CLOSEST TO THE THE EXACT"
1510 PRINT "         SOLUTION. A FEW ITERATIONS MAY BE REQUIRED."
1520 COLOR 6,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE"
1530 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 1530
1540 GOTO 350
1550 '------------------------------iplot continued ---------------------------
1560 COLOR 7,0:PRINT "PLOT Y=f(X) AND INTEGRATE (IF DESIRED) (SELECTION #1 ON THE PGM. MENU)":COLOR 6,0:PRINT
1570 PRINT "After the function is plotted, a prompt is displayed that allows you to find"
1580 PRINT "the area under the curve, or go to the next menu.":PRINT
1590 PRINT "If you choose the 'Area' option, you will be prompted to enter a lower limit"
1600 PRINT "of X and an upper limit of X (X1,X2), over which to calculate the area under"
1610 PRINT "the curve. After selection, these limits are displayed as white lines on the:
1620 PRINT "plot field and integration begins immediately. Progress of the integration is""
1630 PRINT "shown by progressive shading over the range of interest. When integration is"
1640 PRINT "completed, the absolute value of the approximate area is displayed. You can"
1650 PRINT "accurately integrate beyond the plotted curve and even beyond the plot field."
1660 PRINT "INTEGRATING BEYOND THE LIMITS OF THE SCREEN IS POSSIBLE, BUT NOT RECOMMENDED.":PRINT:COLOR 7,0
1670 PRINT "      NOTE: THE ACCURACY OF THE AREA CALCULATION IS AFFECTED BY BOTH"
1680 PRINT "            THE FINITE ( 200 INCREMENT ) INTEGRATION AND ROUNDOFF ERRORS"
1690 PRINT "            IN THE COMPUTER. IN MOST CASES, THE ACCURACY OF THE AREA"
1700 PRINT "            IS MUCH BETTER THAN 1%."
1710 LOCATE 22,1:COLOR 6,0:PRINT "                          PRESS ANY KEY TO CONTINUE"
1720 LOCATE 22,54:A$=INKEY$:IF A$="" THEN 1720
1730 CLS:LOCATE 4,1
1740 PRINT "Note that the 200 increments over which the integration is performed are not"
1750 PRINT "the same increments that were used in plotting the function. The range of X"
1760 PRINT "over which you elected to integrate is separately divided into 200 parts for"
1770 PRINT "the integration routine. After the area is displayed, you may still review"
1780 PRINT "the tabulated plotting points.":PRINT
1790 PRINT "NOTE: It takes no longer to integrate over a broad expanse of the plotted"
1800 PRINT "function than over a small portion since 200 equally spaced points will be"
1810 PRINT "used for integration in either case. Some improvement in area calculation"
1820 PRINT "accuracy is obtained by restricting the plotting range of X to just include"
1830 PRINT "the desired range of integration."
1840 COLOR 6,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE":COLOR 7,0
1850 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 1850
1860 GOTO 350
1870 '---------------------------goto plotting menu---------------------------
1880 CLS
1890 RUN "PLOTM"
1900 '------------------------------return to system--------------------------
1910 CLS:COLOR 10,0:LOCATE 12,31:PRINT "ARE YOU SURE?  Y/N"
1920 LOCATE 12,51:A$=INKEY$:IF A$="" THEN 1920
1930 IF A$="Y" OR A$="y" THEN 1960
1940 IF A$="N" OR A$="n" THEN 350
1950 GOTO 1920
1960 LOCATE 15,30:COLOR 7,0:PRINT "COPY AUDIT #: ";CHR$(4);CHR$(225);CHR$(213);CHR$(177);CHR$(146);CHR$(216);CHR$(6);CHR$(206):FOR I=1 TO 1500:NEXT I
1970 CLS:CHAIN "PLIC
1980 END
```
{% endraw %}

## IPLOT.BAS

{% raw %}
```bas
100 'IPLOT - SHAREWARE F(X) PLOT WITH INTEGRATION
110 'COPYRIGHT 1985,1986,1987 Prowess, Inc.
120 CLS:KEY OFF:CLEAR,,2000:SCREEN 0,0,0:COLOR 6,0:XX$=STRING$(78,32)
130 DIM R(51),U(51),X(51),Y(51),XC(51),YC(51)
140 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
150 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
160 LOCATE 2,34:PRINT "RECTLINEAR PLOT"
170 LOCATE 3,26:PRINT "(C) 1985,1986,1987 Prowess,Inc."
180 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
190 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
200 LOCATE 3,75:COLOR 7,0:PRINT "V2.5":COLOR 1,0
210 FOR L=6 TO 19
220 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
230 NEXT L
240 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
250 IF FLAG<>0 THEN 340
260 LOCATE 12,16:PRINT "Do you want to read the instructions?  (Y/N/Q)"
270 LOCATE 12,62:K$=INKEY$:IF K$="" THEN 270
280 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 2370
290 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 320
300 IF K$="Q" OR K$="q" THEN 2230
310 GOTO 270
320 LOCATE 12,3:PRINT STRING$(75,32)
330 DEFDBL X-Y:PI=3.1415926#
340 COLOR 10,0
350 LOCATE 6,3:PRINT "Enter your equation in the form   Y=f(X) and press 'return'":COLOR 7,0
360 LOCATE 8,3:PRINT "EXAMPLE: Y = 2*X^2 - 20*X - 3  or  Y = exp(-.3*X)*sin(4*X)":LOCATE 10,12:COLOR 15,0:PRINT "Y ="
370 IF FLAG=3 THEN LOCATE 21,3:COLOR 6,0:PRINT "YOUR EQUATION WAS ":COLOR 7,0:LOCATE 21,22:PRINT "Y = ";EQ$:COLOR 7,4:LOCATE 18,9:PRINT "DIVISION BY ZERO OCCURED-REENTER EQUATION AND CHECK RANGE OF X":COLOR 10,0:FLAG=0:LOCATE 14,3
380 IF FLAG=2 THEN LOCATE 21,3:COLOR 6,0:PRINT "YOUR EQUATION WAS ":COLOR 7,0:LOCATE 21,22:PRINT "Y = ";EQ$:COLOR 7,4:LOCATE 18,20:PRINT "PLEASE CHECK FOR SYNTAX ERROR AND REENTER ":COLOR 10,0:FLAG=0:LOCATE 14,3
390 IF FLAG=4 THEN LOCATE 21,3:COLOR 6,0:PRINT "YOUR EQUATION WAS ":COLOR 7,0:LOCATE 21,22:PRINT "Y = ";EQ$:COLOR 7,4:LOCATE 17,3:PRINT "AN ILLEGAL FUNCTION CALL WAS MADE-POSSIBLY AN IMMAGINARY NUMBER WAS CREATED"
400 IF FLAG=4 THEN LOCATE 18,3:PRINT " -  REENTER THE EQUATION. CHECK YOUR RANGE SPECIFICATION."
410 COLOR 15,0:FLAG=0:LOCATE 14,3
420 '---------------------inputs user's equation string---------------------
430 B$="1910 Y="          'line # at which user eq. will be placed---------
440 LOCATE 10,16:LINE INPUT EQ$:IF LEN(EQ$)=0 THEN BEEP:GOSUB 530:GOTO 360
450 C$ = B$+EQ$
460 '----------writes the equation string to a file called funct.bas---------
470 OPEN "O",#1,"FUNCT.BAS"
480    PRINT  #1,C$
490 CLOSE #1
500 '-------merges funct.bas with this pgm. and continues execution----------
510 CHAIN MERGE "FUNCT.BAS",560,ALL:ON ERROR GOTO 1930
520 '----------------------clear upper & lower fields-------------------------
530 FOR LL=6 TO 19:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL
540 FOR LL=21 TO 23:LOCATE LL,3:PRINT STRING$(75,32):NEXT LL:RETURN
550 '-------------------------------------------------------------------------
560 COLOR 10,0
570 GOSUB 530
580 '--user defines range of x over which to plot-------------
590 LOCATE 21,3:PRINT "Enter RANGE of X over which to plot. (Xmin,Xmax)":COLOR 12,0
600 LOCATE 8,20:PRINT "NOTE: XMIN must be smaller than XMAX !!!":COLOR 10,0
610 LOCATE 12,3:PRINT "The X-AXIS will be scaled + and - whichever (Xmin or Xmax) has the largest"
620 LOCATE 13,3:PRINT "absolute value."
630 LOCATE 15,3:PRINT "Example: If you wish to plot the function from X = -10 to X = 0, you would"
640 LOCATE 16,3:PRINT "enter -10,0. The X axis would run from -10 to +10 and the function would"
650 LOCATE 17,3:PRINT "be plotted from X = -10 to X = 0, as you requested."
660 LOCATE 21,52:INPUT "",XMIN,XMAX
670 IF XMIN>=XMAX THEN BEEP:LOCATE 21,52:PRINT "              ":GOTO 660
680 INC = (XMAX-XMIN)/199                  'sets up plotting increment of x
690 CLS:COLOR 28,0
700 ' ------------determines largest values of x and y for scaling ----------
710 GOSUB 530
720 LOCATE 12,20:PRINT "FINDING MAX VALUES OF X AND Y FOR SCALING"
730 X=XMIN:LOCATE 23,1:ON ERROR GOTO 1930
740 GOSUB 1910
750 YBIG=ABS(Y):XBIG=ABS(X)
760 FOR K=2 TO 200
770    X = X + INC
780   GOSUB 1910
790    IF ABS(Y) > YBIG THEN YBIG=ABS(Y)
800 NEXT K
810 IF ABS(XMIN) > ABS(XMAX) THEN XBIG=ABS(XMIN) ELSE XBIG=ABS(XMAX)
820 '------------------------draws plotting field-----------------------------
830 BEEP
840 SCREEN 2,0:CLS
850 LINE (137,9.3)-(493,157),7,B      'draws graph field---------------
860 FOR I=7.38 TO 73.8 STEP 7.38
870 LINE (315+(I/0.417),9.3)-(315+(I/0.417),157),7,,&HAAAA '+ vert grid lines
880 LINE (315-(I/0.417),9.3)-(315-(I/0.417),157),7,,&HAAAA ' - vert grid lines
890 LINE (137,83.2+I)-(493,83.2+I),7,,&HAAAA             '+ horiz grid lines
900 LINE (137,83.2-I)-(493,83.2-I),7,,&HAAAA             '- horiz grid lines
910 NEXT I
920 LINE (315,9.3)-(315,157),7         'draws vertical axis -----------------
930 LINE (137,83.2)-(493,83.2),7       'draws horizontal axis ---------------
940 ' -------------------prints axis labels, etc. ---------------------------
950 LOCATE 1,40
960 PRINT "Y"
970 LOCATE 11,64
980 PRINT "X"
990 LOCATE 2,64
1000 IF YBIG<=0 THEN 1020
1010 PRINT USING "+#######.####";YBIG:GOTO 1030
1020 PRINT USING "+#.#####";YBIG:
1030 LOCATE 20,65
1040 IF YBIG#<=0 THEN 1060
1050 PRINT USING "#######.####";-YBIG:GOTO 1070
1060 PRINT USING "#.#####";-YBIG
1070 LOCATE 20,65:PRINT " "
1080 LOCATE 21,11
1090 IF XBIG<=0 THEN 1110
1100 PRINT USING "#######.####";-XBIG:GOTO 1120
1110 PRINT USING "#.#####";-XBIG
1120 LOCATE 21,11:PRINT " "
1130 LOCATE 21,56
1140 IF XBIG<=0 THEN 1160
1150 PRINT USING "+#######.####";XBIG:GOTO 1170
1160 PRINT USING "+#.#####";XBIG
1170 LOCATE 21,40
1180 PRINT "0"
1190 LOCATE 11,15
1200 PRINT "0"
1210 ' -----------------------plots points------------------------------------
1220 X=XMIN:W$=STRING$(80,32):LOCATE 1,1:PRINT "PLOTTING"
1230 GOSUB 1910
1240 PSET ((315+(X*177)/XBIG),(83.2-(Y*73.8/YBIG)))    'sets cursor to 1st pt.
1250 FOR K=2 TO 200                            'scales and plots user function
1260    X=X+INC
1270    GOSUB 1910
1280   LINE -((315+(X*177)/XBIG),(83.2-(Y*73.8)/YBIG)),7
1290 NEXT K
1300 LOCATE 1,1:PRINT "          "
1310 LOCATE 22,1
1320 OPEN "I",2,"FUNCT.BAS"
1330  INPUT #2,T$
1340 LOCATE 1,1:PRINT "GRAPH OF ";MID$(T$,5)
1350 LOCATE 22,1:PRINT W$:LOCATE 22,1:PRINT "PRESS 'A' TO FIND AREA UNDER CURVE, OTHERWISE, PRESS 'C' ":LOCATE 23,78
1360 LOCATE 22,78:A$=INKEY$:IF A$="" THEN 1360
1370 LOCATE 22,1:PRINT W$
1380 IF A$="A" OR A$="a" THEN GOSUB 1980:LOCATE 15,65:PRINT "PRESS ANY KEY":LOCATE 16,65:PRINT "TO CONTINUE":FOR I=1 TO 3000:NEXT I:LOCATE 15,65:PRINT "             ":LOCATE 16,65:PRINT "           "  ELSE 1410
1390 LOCATE 22,80:W$=INKEY$:IF W$="" THEN 1390
1400 GOTO 1430
1410 IF A$="C" OR A$="c" THEN 1430
1420 BEEP:GOTO 1350
1430 CLOSE 2:SCREEN 0,,0,0
1440 CLS  '--------------- provides choice of continuing or not -------------
1450 PRINT :PRINT :PRINT :PRINT :PRINT :COLOR 10,0
1460 PRINT "           DISPLAY A TABLE OF CALCULATED X & Y VALUES ? .....1"
1470 PRINT "           CHANGE RANGE OF X FOR PRESENT FUNCTION ...........2"
1480 PRINT "           PLOT A NEW FUNCTION...............................3"
1490 PRINT "           EXIT .............................................4"
1500 PRINT
1510 PRINT "                       MAKE SELECTION "
1520 LOCATE 11,42:SS$=INKEY$:IF SS$="" OR VAL(SS$)<1 OR VAL(SS$)>4 THEN 1520
1530 ON VAL(SS$) GOTO 1540,530,120,2240
1540 Q = 12
1550 X=XMIN-INC
1560 CLS
1570 '--------------------------sets up page header---------------------------
1580 COLOR 10,0:PRINT "        POINT #            X                   Y "
1590 LOCATE 18,60:COLOR 6,0:PRINT "PRESS ANY KEY TO"
1600 LOCATE 19,60:PRINT "CONTINUE OR 'Q'"
1610 LOCATE 20,60:PRINT "FOR NEXT MENU."
1620 COLOR 14,0:J=4:K=2:L=1
1630 FOR I=3 TO 22
1640 X=X+INC
1650 GOSUB 1910:IF FLAG=1 THEN LOCATE I:PRINT "                                                         ":GOTO 1690
1660 LOCATE I,11:PRINT L
1670 LOCATE I,18:PRINT USING "#######.####";X
1680 LOCATE I,38:PRINT USING "#######.####";Y
1690 L=L+1
1700 IF L=200 THEN FLAG=1
1710 NEXT I
1720 FLAG=0
1730 LOCATE 23,80:A$=INKEY$:IF A$="" THEN 1730
1740 IF A$="Q" OR A$="q" THEN CLS:GOTO 1780
1750 IF L<200 GOTO 1630
1760 LOCATE 23,80:A$=INKEY$:IF A$="" THEN 1760
1770 CLS
1780 '-------------------provides choice of continuing or not-----------------
1790 COLOR 10,0:LOCATE 8,1
1800 PRINT "                 PLOT SAME FUNCTION AGAIN ................1"
1810 PRINT "                 CHANGE RANGE OF X FOR PRESENT FUNCTION ..2"
1820 PRINT "                 INPUT A NEW FUNCTION ....................3"
1830 PRINT "                 EXIT ....................................4":PRINT
1840 PRINT "                              MAKE SELECTION "
1850 LOCATE 13,47:GG$=INKEY$:IF GG$="" OR VAL(GG$)<1 OR VAL(GG$)>4 THEN 1850
1860 ON VAL(GG$) GOTO 820,530,120,2240
1870 CLS:IF I=200 THEN 1770
1880 Q = Q + 12
1890 Y=SIN(X)
1900 '-----------------------------user function-----------------------------
1910 Y=10*SQR(X)
1920 RETURN
1930 '-----------------------error trap routine-syntax,/0,--------------------
1940 IF ERR=2 AND ERL=1910 THEN CLS:FLAG=2:CLS:BEEP:RESUME 140
1950 IF ERR=11 AND (ERL=1910 OR ERL=1240) THEN CLS:BEEP:FLAG=3:RESUME 140
1960 IF ERR=5 AND ERL=1910 THEN CLS:FLAG=4:CLS:BEEP:RESUME 140
1970 ON ERROR GOTO 0:CLS:GOTO 140
1980 Z$=STRING$(79,32) '----integration subroutine----------------------------
1990 LOCATE 23,1:PRINT "Z$":LOCATE 23,1
2000 INPUT "To find AREA between X1 and X2, enter in the form: X1,X2  ";X1,X2
2010 LOCATE 23,1:PRINT Z$:LOCATE 23,1:PRINT "INTEGRATING":LOCATE 23,80
2020 X=X1
2030 GOSUB 1910
2040 PSET (315+(X*177/XBIG),83.2)
2050 LINE -(315+(X*177/XBIG),(83.2-(Y*73.8/YBIG))),7
2060 X=X2
2070 GOSUB 1910
2080 PSET (315+(X*177/XBIG),83.2)
2090 LINE -(315+(X*177/XBIG),(83.2-(Y*73.8/YBIG))),7
2100 AINC = (X2-X1)/251:DA=0
2110 FOR J=X1 TO X2 STEP AINC
2120   X=J+AINC
2130   GOSUB 1910
2140   PSET (315+(X*177/XBIG),83.2)
2150   LINE -(315+(X*177/XBIG),(83.2-(Y*73.8/YBIG))),7
2160   X=J+(AINC/2)
2170   GOSUB 1910
2180   DA=DA+(AINC*ABS(Y))
2190 NEXT J
2200 LOCATE 23,1:PRINT Z$:LOCATE 23,1:PRINT "APPROX AREA BETWEEN  ";X1;" AND  ";X2;"  = "
2210 LOCATE 23,45:PRINT USING "#######.####";DA:LOCATE 23,60:PRINT " SQ. UNITS"
2220 RETURN
2230 '-------------------------------quit menu---------------------------------
2240 SCREEN 0,1,0:CLS:COLOR 6,0
2250 LOCATE 8,25:PRINT "RESTART THIS PROGRAM --------------1"
2260 LOCATE 10,25:PRINT "RETURN TO PLOT MENU ---------------2"
2270 LOCATE 12,25:PRINT "EXIT ------------------------------3"
2280 LOCATE 17,30:PRINT "Make selection"
2290 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 2290
2300 QT=VAL(Q$)
2310 IF QT<1 OR QT>3 THEN BEEP:GOTO 2290
2320 IF QT=1 THEN 120
2330 IF QT=2 THEN CHAIN "PLOTM"
2340 IF QT=3 THEN KEY ON:COLOR 7,0:CLS:SYSTEM
2350 BEEP:GOTO 2290
2360 '---------------------------------help-----------------------------------
2370 GOSUB 530
2380 LOCATE 6,3:PRINT "* This program plots functions of the form Y = f(X) over any range of X"
2390 LOCATE 7,5:PRINT "that you specify."
2400 LOCATE 9,3:PRINT "* If your equation uses letters other than 'Y' and 'X', you will have to"
2410 LOCATE 10,5:PRINT "change to the Y = f(X) format before entering."
2420 LOCATE 12,3:PRINT "* BASIC language syntax must be used when entering your equation. Check"
2430 LOCATE 13,5:PRINT "your BASICA (or equiv.) manual if you are not familiar with handling"
2440 LOCATE 14,5:PRINT "BASIC math statements."
2450 LOCATE 16,3:PRINT "* Although this program contains statements to trap 'division by zero'"
2460 LOCATE 17,5:PRINT "that might occur, BASICA does not allow trapping this error. Some other"
2470 LOCATE 18,5:PRINT "BASICA equivalents DO allow 'division by zero' trapping. If you get a"
2480 LOCATE 19,5:PRINT "'division by zero' error message, you will have to rerun the program."
2490 LOCATE 21,3:PRINT "Press any key to continue"
2500 LOCATE 21,27:K$=INKEY$:IF K$="" THEN 2500
2510 GOSUB 530
2520 LOCATE 6,3:PRINT "* To minimize the chance of inadvertently creating a 'divide by zero'"
2530 LOCATE 7,5:PRINT "situation, the program divides the plotting range into 199 parts. Thus,"
2540 LOCATE 8,5:PRINT "if specify that you want an equation plotted from X = -10 to +20, the"
2550 LOCATE 9,5:PRINT "program will first plot the value of Y for X = -10. The next plot point"
2560 LOCATE 10,5:PRINT "will be the value of Y for X = -10 + (30/199). The 30/199 is added to X"
2570 LOCATE 11,5:PRINT "for each iteration. Unless you enter zero as one of the range numbers, the"
2580 LOCATE 12,5:PRINT "likelyhood of accidently dividing by zero is very small."
2590 LOCATE 14,3:PRINT "* After your curve is plotted, you may calculate the approximate area"
2600 LOCATE 15,5:PRINT "between the curve and the X-axis by selecting the 'A' option. Take the "
2610 LOCATE 16,5:PRINT "'C' (continue) option if you don't want to find the area."
2620 LOCATE 18,3:PRINT "* After plotting, you may review the X and Y values for each plotting point."
2630 LOCATE 21,3:PRINT "Press any key to start"
2640 LOCATE 21,25:K$=INKEY$:IF K$="" THEN 2640
2650 GOSUB 530:GOTO 330
```
{% endraw %}

## IQBUILD.BAS

{% raw %}
```bas
10 REM ======================================================================
20 REM ============================= IQ Builder =============================
30 REM This program presents a menu of the programs available in the      ===
40 REM IQ Builder series and allows the user to select a program by       ===
50 REM moving the cursor to the desired program and pressing ENTER.       ===
60 REM ======================================================================
70 REM $s2
80 REM  =====================================================================
90 REM  Turn off KEY display, set display width, clear the screen and set ===
100 REM KEY(10) to reload the menu program when pressed in command mode.  ===
110 REM =====================================================================
120 REM $s2
130 KEY OFF:WIDTH 80:CLS:KEY 10,"run "+CHR$(34)+"b:???0??"+CHR$(13)
140 REM $s2
150 REM =====================================================================
160 REM Display the menu of the programs available in IQ Builder.         ===
170 REM =====================================================================
180 REM $s2
190 LOCATE 1,34,0:COLOR 0,7:PRINT " IQ Builder ";
200 LOCATE 3,10:COLOR 7,0:PRINT "The following programs are available on this diskette:";
210 LOCATE 5,30:PRINT "Number Series"
220 LOCATE 6,30:PRINT "Analogies"
230 LOCATE 7,30:PRINT "Synonyms"
240 LOCATE 8,30:PRINT "Antonyms"
270 LOCATE 16,1:PRINT"Use the ";:COLOR 15:PRINT"UP ("CHR$(24)")";:COLOR 7:PRINT" and ";:COLOR 15:PRINT"DOWN ("CHR$(25)")";:COLOR 7:PRINT" arrows to position the cursor to the function"
280 LOCATE 17,1:PRINT"desired and then press the ";:COLOR 15:PRINT"ENTER ("CHR$(17)CHR$(196)CHR$(217)")";:COLOR 7:PRINT" key."
290 REM $s2
300 REM =====================================================================
310 REM Set up the initial coordinates for the selection arrow.           ===
320 REM =====================================================================
330 REM $s2
340 X=25:Y=5
350 REM $pa
360 REM =====================================================================
370 REM Set up UP and DOWN arrows for moving selection arrow.             ===
380 REM =====================================================================
390 REM $s2
400 KEY(11) ON:KEY(14) ON:ON KEY(11) GOSUB 730:ON KEY(14) GOSUB 800
410 REM $s2
420 REM =====================================================================
430 REM Set up KEY(10) to return to MENU program on A-disk.               ===
440 REM =====================================================================
450 REM $s2
460 KEY(10) ON:ON KEY(10) GOSUB 1000
470 REM $s2
480 REM =====================================================================
490 REM Display highlighted selection arrow at Y,X.                       ===
500 REM ======================
```
{% endraw %}

## MMAKE.DOC

{% raw %}
```
 








                                Mmake

                      Version 1.3 User's Manual





                             MicroSystems
                             P.O. Box 471
                          Carbondale, IL  62903
  



REGISTRATION

This program is made available to the public as shareware.  You are free
to make and distribute an unlimited number of copies. You are to also
entitled to use the program without cost on a trial basis, to see if 
it is of value to you.

If you decide to use the program, you are requested to register by
sending $20 along with your name and address to the address on the
cover of this manual.

The existence of user-supported software as an alternative to costly
commercial software depends on the good faith and cooperation of the
software's users.  Your $20 registration will enable us to continue 
to upgrade this product and to develop others.   Commercial versions 
of the make utility cost between $89 and $150.

Registered users are entitled to free support and to at least one
free upgrade. 


FEEDBACK and SUPPORT

Registered users will be given assistance if any problems are
encountered using this program.  If you enclose a self-addressed,
stamped envelope with your questions, it will help us to answer you 
more quickly.

Support is not guaranteed to non-registered users.  However, we do 
appreciate feedback from all users, registered or otherwise.  If you
encounter a bug when using this program, please let us know so that
we can correct it and save others from similar aggravation.  When 
reporting a problem, the more detail you can provide to us, the more
likely it is that we will be able to reproduce (and fix) the bug.  
In addition to a description of the problem, it will help if you send
us copies of the files that were being processed when the problem 
occured, or "dummy" files that cause the same problem. 

We also welcome suggestions for improvements and added features, and 
we are interested in hearing about how you have used Mmake.





WHAT MMAKE DOES

Mmake is based on the Unix "make" utility and performs the same 
function, though it does not yet provide all of the sophisticated
features of the Unix utility.

Mmake is used by programmers to automate the process of compiling and 
linking a program that is contained in several (or numerous) source 
files.   It can be used with any language and with any compiler that 
can be run from the Ms-Dos command line.  It can speed development
enormously, both by making recompilation of a program go much more 
quickly, and by preventing errors when a changed file is not recompiled.

When creating or editing a complex program, it is often difficult to 
remember which source files or modules have been changed and need to 
be recompiled.  Mmake automates this process so that the programmer
can forget about it.  After editing files, the programmer simply 
runs Mmake and the modules that have been changed will be recompiled.
Files that have not been changed are not recompiled. 

Without a make utility, there are two basic strategies to compiling and
linking a program as it is being developed or when it is changed.    The 
first is to simply recompile and re-link all of the source files that 
make up the program, every time any of them are changed.  This has the 
serious drawback of vastly increasing the amount of time spent recompiling 
the program.  The other strategy is to break the program into modules 
which can be compiled separately, then trying to keep track of which ones 
have been changed or added.  This can be difficult, especially when an
"include" file is edited; any source files that include that "include"
file need to be recompiled, while others do not.   This puts the burden of
keeping track of which modules have been affected on the programmer, who 
should be free to think about the program being written.  It also introduces 
the possibility that a module that should be recompiled may not be, 
thus generating errors in the program and wasting even more of the 
programmer's time in debugging.

Mmake saves the time that is wasted by compiling files unnecessarily, 
while preventing the errors that result when a programmer forgets to 
recompile a module that has been changed.  It also frees the programmer
to think about the program being written.  When the program is ready to
be recompiled, Mmake automatically determines which source files have
been changed or affected by changes, and runs the commands necessary to
re-make the program.

Mmake does this by comparing the last modification times of the files you
are creating with the modification times of the files which are used to
create them.  Depending on which files have been changed,  Mmake runs
the appropriate programs to bring them up to date -- compilers, 
assemblers, linkers, or any other executable Ms-Dos program.  

We have used Mmake with 'C' compilers, the Clipper DBase compiler, the 
Macro Assembler, and with programs that contained all three.  It will
work with any compiler that can be run from the Ms-Dos command line.



WHAT MMAKE DOES, continued

While Mmake is designed as a tool for programmers, it can be used in
any situation in which an action must be taken for files which have 
changed and not taken for those which have not.  For example, a large 
document consistng of many files could be run through a spell-checker or
text formatter, using Mmake to insure that all the files changed, and
only the files changed, were spell-checked or formatted.  Or Mmake could 
compare modification times of files on a source disk and files on a backup 
disk, and copy the source to the backup when the source file was the 
more-recently changed.   


MEMORY REQUIREMENTS

The amount of memory needed to run Mymake depends on the commands in your
make file.  Mymake.exe itself takes up about 25 K of memory while it
is running.  In addition, you must have enough memory to load and run
any command line in your make file.  




 
HOW TO USE MMAKE

The first step in using Mmake is to create a "make file," which is 
a description of the relationships among the files in the program
you are making.  The format of the make file is described in detail
below.  Once the make file is created, the process of developing a 
program or modifying an existing program is greatly simplified; the 
time invested in creating the make file is soon repaid.  Make files 
also help to document a program, since they show all of the source 
files contained in it and the relationships among them.  Of course,
as you add new source files to your program, you have to add those 
files to the make file as well.
  
Once a make file is created, using Mmake is extremely simple.
The command line syntax is:

     Mmake /F filename /H /S /D /I 

Everything after "Mmake" is optional, including the filename, which is 
part of the /F option.  The options can be given in any order.  The 
meaning of the command lines options are as follows:

     /F filename - Use "filename" for the make file.  If this
          option is not given, Mmake uses the default file 
          name "makefile".

     /H - Help: display a list of Mymake's options.
                
     /S - Silent: don't display commands before running them. 
          Normally, Mmake displays each command as it is run. 
          This option turns off that display.  Note that the 
          output of the programs themselves are not turned off, 
          just Mmake's display of the command line.

     /D - Display only: display commands but don't run them.
          With this option, Mmake will show you the commands
          that would be run, based on the modification times of
          files, but it does not actually run the commands.

    /I - Ignore exit codes:  normally, Mmake will stop running if a
         compiler or other program returns with an exit code other
         than zero.  Most programs use non-zero exit codes to indicate
         an error, so this is normally desirable.  However, it you
         need to run a program that returns a non-zero exit code, the
         /I option can be used.  It tells Mmake to simply ignore the
         exit codes of the programs it runs.
   
For all options, a dash (-) may be used instead of the slash (e.g.,
-D or -S).



HOW TO USE MMAKE, continued

As Mmake runs, it will display the commands that it is executing (unless 
the /S option is used).  If no files have been changed since the last
time they were compiled or linked, Mmake simply displays a message that
all files are up to date.  If any of the programs that Mmake runs 
encounter an error, Mmake will display the error code returned by the 
program, and stop.  Once you have corrected the source of the problem,
run Mmake again and it will take up where it left off, making only 
those files that still need to be made.

Note that since Mmake uses the modification times of files, the date and
time must be kept current on your system (which is a good idea in any 
case).   By far the most convenient way to do this is with a battery-
powered clock chip.  If you don't have such a chip in your computer, 
you will have to enter the date and time before editing source files.  
(Usually, this is done when booting Dos).



SETTING UP THE MAKE FILE

Mmake requires a "make file," which describes to it the files in your
program and the dependencies among them.  You can use Mmake for as 
many different projects as you like, by setting up a separate make 
file for each program.

The make file is a plain ascii text file; it can be created with any 
text editor or word processor that will create ascii files.  You can 
name the make file anything you like.  One convention is to name the 
make file the same name as the program you are creating, but without 
any extension.  For example, using "chess" as the name of a make file 
that creates a program named "chess.exe."  If you do not give Mmake a 
make file name, it will use a file named "makefile" in the default directory.  

The make file consists of a number of records.  Each record starts with
a filename, which is the file to be created.  This is followed by a 
colon, then a list of files upon which the file being created depends.
This "dependency line" is followed by one or more command lines, which 
are the commands to be executed in order to create the file being created.

The general format of a make file record is as follows:

File to be created:  files on which it depends
	command to create the file   

An example will help make this clear.  Below is a simple make file
for an imaginary chess program, followed by an explanation of its 
contents.  (In the example, only three files are being created.  In
fact up to 256 files can be created by each make file):

# chess - make file for chess.exe    
# dummy file used for example only
# 7/12/87

Chess.exe : Chess.obj   drawscrn.obj
	link Chess drawscrn;

Chess.Obj : Chess.c  Games.h
	cl -c Chess;

Drawscrn.obj : a:\chessboard\drawscrn.asm
	masm  a:\chessboard\drawscrn;


The first three lines of this file are comments, and have no effect on 
Mmake's actions.  Comment lines can be placed anywhere in the file, 
as long as the first non-space character of a comment line is "#".
Similarly,  blank lines may be inserted to improve readability;
they are ignored by Mmake.



SETTING UP THE MAKE FILE, continued

In the example make file, the first dependency line tells Mmake that
Chess.exe "depends on" each of the two .obj files listed on that line.
That is, if either of these files change, Chess.exe must be remade.   
Mmake will compare the modification times of the two .Obj files with 
that of chess.exe; if either of them have been changed since Chess.exe 
was last created, Chess.exe will be remade.   Chess.exe will also be
created if it does not exist.

The next line of the sample make file is a command line.  It begins with a 
tab character, and tells Mmake how to remake Chess.exe if it decides to 
do so. This example command line tells Mmake to run the link program,
passing the names of the two .obj files to link as arguments.  Mmake
will look for the link program in the current directory, then look in the
directories specified by the Dos PATH string. This command line, 
like the others in this example, is just an example; any linker or 
compiler could be used -- or, for that matter, any .com or .exe file.  
An exact description of what commands can be used appears below.

The next record tells Mmake that the Chess.obj file depends on two other
files, Chess.c and Games.h.  If either of these two files has a later
modification date than Chess.obj, Mmake will remake Chess.obj.  In this
example, it would run the cl compiler with the -c argument. 

The drawscrn.obj record is interpreted in a similar manner.  Note that
this record contains a full path and drive specification; any
file name in any record can include a drive and/or directory specification.
If the path of a command is not given, Mmake will look in the current 
directory and the directories listed in the Ms-Dos PATH	environment
string.  Files other than commands have to include thier full path
name unless they are in the current directory.

RECORD ORDER

In some commercially-available versions of the make utility, the above
make file would not work because of the order in which the files are
listed.  If, for example,  Chess.c were changed, Chess.obj would get
remade.  But Chess.exe would not, because by the time Chess.obj was 
remade, the dependency line for Chess.exe would have already been checked.

This is not true of Mmake.  In the above example, before it decides
whether or not to remake Chess.exe, it will look ahead to see if any
of the files Chess.exe depends on need to be remade; if so, it will remake
those fles (looking ahead again, if necessary) before deciding whether or 
not to make Chess.exe.  

Therefore, the order of records in the make file is not critical. 
However, Mmake will run a little faster if the records are arranged to 
minimize look-ahead.  In the example, if the record for Chess.exe were 
last, the make process would go faster.  Minimizing look-ahead can also 
help if you encounter a "Stack Overflow" error when running Mmake; see 
error messages, below.



LONG LINES

If a dependency line is too long to fit on a single 80-column line,
it can be extended by placing a backslash (\) just before the end of 
the line.  Any lines ending in a backslash are considered as 
continuing on the next line; for example, the lines

Chess.exe : Chess.obj   drawscrn.obj   mymove.obj   \
Scorkeep.obj  Highscr.obj  Newgame.obj  Replay.obj  

are treated by Mmake as a single line.  There is no limit to the number
of lines that can be "connected" in this way.  The backslash must be
the very last character on the line.


COMMAND LINES

Each command line MUST begin with either a tab character or the '@'
character; this is how Mmake distinguishes the commands from the 
dependency lines.

In the example above, only one command line is shown for each dependency
line.  However, there is no limit to the number of command lines that
can follow a dependency line, as long as each one begins with a tab
or '@' character.  

A command line that begins with the '@' character must have that
character in the first column; the '@' is stripped off.  This can be
used if you are using a word processor or editor that makes it
inconvenient to use the tab character.  The '@' can be followed by
spaces for clarity.  For example, the sample make file shown above
could have been written as follows:

# chess - make file for chess.exe    
# dummy file used for example only
# 7/12/87

Chess.exe : Chess.obj   drawscrn.obj
@   link Chess drawscrn;

Chess.Obj : Chess.c  Games.h
@   cl -c Chess;

Drawscrn.obj : a:\chessboard\drawscrn.asm
@   masm  a:\chessboard\drawscrn;


The characters after the '@' can be either tabs or spaces; Mmake uses
the '@' in the first column to recognize the line as a command.



COMMAND LINES, continued

Any .com or .exe file can be specified as the command to be executed.
In addition, any internal DOS command (such as cd or copy) can be 
given as one of the commands, as long as it is given in the form

	command /c dir

-- that is, you must run command.com with the /c option, followed by the
Dos command you want to execute.  Batch files can be run the
same way; they cannot be run without running a copy of command.com.

Continuing the above example, instead of simply linking the .obj files
to create Chess.exe, we could also have changed directories, invoked
an editor to edit a "scores" file, changed directories back to the \Chess 
directory, then run the Chess program to test it.  The following record 
in the make file would accomplish this:

Chess.exe : Chess.obj   drawscrn.obj 
	link Chess drawscrn ;
	command /c cd scores
	edlin   highscores
	command /c cd \Chess
	Chess

If a command being run by Mmake returns an exit code greater than zero,
Mmake will stop.  Additional commands will not be processed until you 
run Mmake again.  You can override this feature by specifying the /I 
option, which will cause Mmake to ignore exit codes.



ERROR MESSAGES

Mmake generates two different types of errors. Before it begins processing
files, Mmake scans the entire make file, looking for errors in the make file
itself.  Most such errors require that you edit the make file before 
proceeding.   These errors are listed in alphabetical order under "MAKE 
FILE ERRORS" below.

The second type of error is generated during the process of making one
of the files listed in the make file.  These errors are listed in 
alphabetical order under "PROCESSING ERRORS" below.


MAKE FILE ERRORS

 /F option requires make file name.
        
         You entered the /F option on the Mmake command line, but
         did not follow it with the name of the make file.  If you
         want to use the defualt make file name, "makefile", you 
         do not need the /F option on the command line.  If you 
         want to use another file for the make file, enter /F
         followed by the name of the make file, on the command line.

 File (filename) too big (must be < 32k).
       
        The make file must be less than 32 K in size.  If you get
        this error, you can reduce the size of the make file by
        removing or shortening comments, or moving some files so 
        that shorter path names can be used in the make file.  If your
        make file is still more than 32 K, you can get around this 
        restriction by creating two separte make files and running
        Mmake on each of them.  This size limit will be removed in the
        next version of Mmake.


 Illegal file or path name: (file or path from make file)

        The displayed path or file name in the make file 
        is an illegal name.  This is NOT a "file not found" 
        message.  It means that a file cannot even be looked 
        for because the file or path name contains
        illegal characters, two consecutive backslash ("\") 
        characters, a colon in the middle of the name, or some
        other illegal combination of characters.



MAKE FILE ERRORS (continued)
 
 Mmake creates a temporary file named (filename).
 A file already exists with that name.
 Okay to overwrite existing file? (press y or n).

        During operation, Mmake creates a temporary file with the
        given name, in the default directory.  This file is erased
        before Mmake finishes running.  You will not see the above
        message unless a file by that name already exists in the
        default directory.  If you see this message, pressing 'N'
        will cause Mmake to stop.  Pressing 'Y' will overwrite the
        existing temporary file, destroying its contents.

 Missing colon make file line: (line from make file).

        The line displayed is a dependency line, and does not
        contain a colon separating the file to be created from
        the files upon which it depends.  Any line in the make file
        that does not begin with a tab or the '@' character is taken 
        to be a dependency line unless the line right above it ends 
        in a backslash, in which case it is considered part of the 
        line above it.

 Missing dependencies in make file after: (line from make file).

        The dependency line displayed has a file to be created, but
        no files upon which it depends.  Each dependency line of
        the make file must contain a file to be created, then a 
        colon, then one or more dependency files.

 No command line following make file line:  (line from make file).

        The dependecny line displayed is not followed by a command
        line.  Command lines must begin with a tab or '@' character.
        Each dependency line must be followed by at least one command
        line.  Some implementations of the make utility have built-in 
        rules which are used when no command is given.  It is expected
        that this feature will be available in future versions of Mmake;
        this version does not provide built-in make rules.

 Not enough memory to read make file (filename)

        Mmake.exe is unable to get enough memory to read the make file.
        You need more memory in your machine to run Mmake.  If you have
        a RAM disk or "Stay Resident" utilities installed, removing them
        will make more memory available to programs such as Mmake.

        If you receive this error, we would appreciate hearing about it.



MAKE FILE ERRORS (continued)
         
 Too many files; make file must contain less than (number) files.
        
        Your make file contains more files to be created than Mmake
        can handle.  The only solution is to reduce this number of
        files in the make file; this can be done by splitting it 
        into two parts and running each part separately.  If you do
        this, the order in which you run the two make files may be
        important, if the files in one depend on files in the other.

        If you receive this error, we would appreciate hearing about it.

 Two filenames before colon in make file line: (line from make file)

        The dependency line displayed has more than one file name 
        before the colon.  Only one file to be created can be 
        listed in each dependency line, though there can be many
        dependency files.  
        
 Unable to open file (filename) for reading.

        The named file cannot be opened.  Normally, this means the
        file does not exist, or that it is not in the current 
        directory and not in one of the directories specified by PATH.

 Unable to create temporary file (filename).

        The temporary file cannot be created.  This may mean that
        your disk is full, or that there is a directory with the
        same name as the temp file, in the default directory.  In 
        the former case, remove some files to make more room on 
        your disk.  Remember that Mmake can access files on more than
        one disk; just include the drive letter in the path name in
        the make file or in the Dos PATH.  

 Unknown command line option: (option)

        You typed a command line option that Mmake does not 
        recognize.  Type Mmake /H for a list of valid options.


PROCESSING ERRORS

 Arg list too long.

        The command line is greater than 128 bytes long.  The total 
	length of the command line must be less than 128 bytes.	 The
	best way to overcome this problem is to use a respone file for 
	the input to your linker or compiler; most compilers and linkers
	have an option that allows this.

 Can't execute command line: (command line)
 Commands must have .exe, .com, or no extension.

        Only files ending in .com or .exe can be run as commands on
        a command line in the make file.  As explained under 
        "COMMAND LINES" above, .bat files or internal Dos commands
        can be run by running a copy of command.com with its /c
        option, followed by the command you wish to run.  If a 
        command in the make file has no extension, Mmake assumes
        that it has a .com or .exe extension.

 Exec format error

        The file being run is not an executable file or has been
        altered in some way which makes it impossible to run.

 Execute error: (error message)

        Mmake is unable to run the program it is attempting to 
        run, for reasons explained by the error message following
        the colon.  Each of these error messages appears separately
        in this list.

 Executing: (command line)

        This is not an error message; it simply tells you what 
        command or program is being executed by Mmake.  If you
        started Mmake with the /D (display only) option, this 
        shows you the commands that would be executed by Mmake
        if the /D option were not used.

 Exit code: (number)

        The program just run by Mmake ended with an error code; 
        the exit code printed is from that program.  Consult the
        manual for the program creating the error to find out what
        the error code means.  Mmake will stop executing after
        such an error is returned unless the /I option is used.

 No such file or directory.

        The command you specified cannot be found.



PROCESSING ERRORS (continued)

 Not enough core.

        There is not enough memory to run the program that Mmake
        is attempting to run.  If you can free some memory by
        removing "Terminate but Stay Resident" utilities, RAM
        disks, print spoolers, etc., Mmake may be able to run
        the program.

 Stack overflow.

         Mmake has run out of stack space during execution.  The 
         most common cause of this is a dependency line that
         has a file dependent on itself, such as 

         Chess.obj : Chess.obj.  

         The solution is to fix the dependency line.
		         
         This error may also be caused by a deeply-nested set of
         dependencies.   In this case, you should be able to overcome
         the problem by rearranging the make file to minimize 
         look-ahead, since look-ahead uses stack space.  See the 
         section above on "RECORD ORDER" for an explanation of how to 
         minimize look-ahead.

         If you receive this error, we would appreciate hearing
         about it.

 Unable to find or make (filename).

        The named file is listed in the make file as one upon which 
        another file depends.  However, the named file does not 
        exist, and there is no record in the make file indicating
        how it can be created.  This causes Mmake to stop.  This 
        usually means that either the file name was incorrectly 
        typed,  that a record needs to be added to the make file
        indicating how the named file is to be made, or that the
        file is in a different directory than the one listed in the
        make file.

 Unable to make file (filename); no commands.

        There are no commands following the dependency line for 
        the named file.  If you get this error, we would appreciate
        hearing about it.

 Warning:  Command line contains more than (number) arguments. Extra ignored.

        The number shown is the maximum number of arguments that can be
        passed to a program run by Mmake.  The command is still run, 
        but only the first (number) arguments have been passed.

        If you get this error, we would appreciate hearing about it.        


```
{% endraw %}

## PLIC.BAS

{% raw %}
```bas
500 'PLIC  -- Prowess, Inc. license agreement 04/28/87
510 CLS:CLEAR:SCREEN 0,0
520 LOCATE 1,28:PRINT "PLOT -- LICENSE AGREEMENT"
530 LOCATE 2,20:PRINT "Copyright 1985,1986,1987, Prowess, Inc."
540 LOCATE 4,5:PRINT "This is a user supported software product.  It is not public domain"
550 LOCATE 5,5:PRINT "software, nor is it free software. You are granted a limited license"
560 LOCATE 6,5:PRINT "to use this product on a trial basis.   If you continue to use this"
570 LOCATE 7,5:PRINT "product, after a trial period, you must register by sending:"
580 LOCATE 9,5:PRINT "    $25 (Minimum reg.)         or         $35 (+ $4 s/h) (Full reg.)"
590 LOCATE 10,5:PRINT "   * Technical support                   *  Technical support"
600 LOCATE 11,5:PRINT "   * Informed of updates                 *  Latest diskette supplied"
610 LOCATE 12,5:PRINT "                                         *  Printed manual"
620 LOCATE 14,18:PRINT "Texas residents, please add 7 1/4 % sales tax"
630 LOCATE 15,11:PRINT "Contact us for information concerning low cost site licenses."
640 LOCATE 17,5:PRINT "If you like the shareware concept - try before you buy - support the"
650 LOCATE 18,5:PRINT "companies that provide useful, professional quality products."
660 LOCATE 20,5:PRINT "Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas, TX  75238"
670 LOCATE 21,33:PRINT "(214) 349-4718"
680 LOCATE 23,29:PRINT "Press any key to exit"
690 LOCATE 23,52:F$=INKEY$:IF F$="" THEN 690
700 COLOR 7,0:SYSTEM
```
{% endraw %}

## PLOG.BAS

{% raw %}
```bas
100 'PLOT - LOGO, LICENSE (COLOR SYS)  - SHAREWARE VERSION 2.0 -- 05/08/87
110 ' COPYRIGHT 1985,1986, 1987, Prowess, Inc.
120 CLEAR:SCREEN 1,0,0
130 CLS:KEY OFF
140 LOCATE 5,16:COLOR 1,1:PRINT "PROWESS, Inc."
150 LINE (115,40)-(177,40),1
160 LINE (115,40)-(115,90),1
170 LINE (177,40)-(177,90),1
180 LINE (118,94)-(142,94),1
190 LINE (150,94)-(174,94),1
200 CIRCLE (119,91),4,1,3.14,4.712:CIRCLE (173,91),4,1,4.71,0
210 CIRCLE (173,91),4,1,4.71,0
220 CIRCLE (141,97),4,1,0,1.57
230 CIRCLE (151,97),4,1,1.57,3.1422:PSET (146,98),1
240 PSET (146,98),1
250 LINE (118,42)-(174,92),1,B
260 PSET (146,94),1:DRAW "H2 F2 E2 G2"
270 PSET (146,93):PSET (146,92)
280 LINE (118,91.4)-(174,91.4)
290 CIRCLE (198,86),52,1,2.1,3.05
300 CIRCLE (94,86),52,1,0.1,1.05
310 CIRCLE (198,86),58,1,2.01,2.6
320 CIRCLE (94,86),58,1,0.5,1.1
330 PSET (146,65),1
340 PSET (146,48),1:DRAW "U3 D3 D3"
350 PSET (146,48),1:DRAW "H3 F3 F3"
360 PSET (146,48),1:DRAW "E3 G3 G3"
370 PSET (148,48),1:DRAW "H3 F3 F3"
380 PSET (144,48),1:DRAW "E3 G3 G3"
390 LOCATE 14,6:PRINT "Shareware for Technical Design"
400 LOCATE 15,14:PRINT "and Management"
410 LINE (5,130)-(315,165),1,B
420 LOCATE 18,17:PRINT "PLOT"
430 LOCATE 20,5:PRINT "(C) 1985,1986, 1987, Prowess, Inc."
440 LOCATE 1,1:PRINT "1003-B-v2.0"
450 LOCATE 23,7:PRINT "Press any key to continue"
460 LOCATE 21,34:F$=INKEY$:IF F$="" THEN 460
470 WIDTH 80
480 'PLIC  -- Prowess, Inc. license agreement 04/28/87
490 CLS:CLEAR:SCREEN 0,0
500 LOCATE 1,28:PRINT "PLOT - LICENSE AGREEMENT"
510 LOCATE 2,20:PRINT "Copyright 1985,1986,1987 Prowess, Inc."
520 LOCATE 4,5:PRINT "This is a user supported software product.  It is not public domain"
530 LOCATE 5,5:PRINT "software, nor is it free software. You are granted a limited license"
540 LOCATE 6,5:PRINT "to use this product on a trial basis.   If you continue to use this"
550 LOCATE 7,5:PRINT "product, after a trial period, you must register by sending:"
560 LOCATE 9,5:PRINT "    $25 (Minimum reg.)         or         $35 (+ $4 s/h) (Full reg.)"
570 LOCATE 10,5:PRINT "   * Technical support                   *  Technical support"
580 LOCATE 11,5:PRINT "   * Informed of updates                 *  Latest diskette supplied"
590 LOCATE 12,5:PRINT "                                         *  Printed manual"
600 LOCATE 14,18:PRINT "Texas residents, please add 7 1/4 % sales tax"
610 LOCATE 15,11:PRINT "Contact us for information concerning low cost site licenses."
620 LOCATE 17,5:PRINT "If you like the shareware concept - try before you buy - support the"
630 LOCATE 18,5:PRINT "companies that provide useful, professional quality products."
640 LOCATE 20,5:PRINT "Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas, TX  75238"
650 LOCATE 21,33:PRINT "(214) 349-4718"
660 LOCATE 23,26:PRINT "Press any key to continue"
670 LOCATE 23,52:F$=INKEY$:IF F$="" THEN 670
680 CHAIN "PLOTM
690 END
```
{% endraw %}

## PLOTM.BAS

{% raw %}
```bas
100 'PLOTM - PLOTTING PROGRAM MENU -- SHAREWARE VERSION - 05/07/87
110 'Copyright 1986, 1987, PROWESS, Inc.
120 KEY OFF:CLS:CLEAR:SCREEN 0,1,0
130 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
140 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
150 COLOR 6,0:LOCATE 2,33:PRINT "PLOTTING PROGRAMS"
160 LOCATE 3,26:PRINT "(C) 1985,1986,1987, Prowess,Inc"
170 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
180 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
190 LOCATE 3,75:COLOR 7,0:PRINT "V2.5":COLOR 1,0
200 FOR L=6 TO 19
210 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
220 NEXT L
230 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
240 '-----------------------------------menu-----------------------------------
250 LOCATE 6,38:PRINT "MENU":LOCATE 7,38:PRINT "----"
260 LOCATE 9,5:PRINT "*   PLOT FUNCTION OF THE FORM y = f(x) (also find area under curve) -1"
270 LOCATE 11,5:PRINT "*   PLOT IN POLAR FORMAT  r = f(";CHR$(233);")  or  y = f(";CHR$(233);"); x = f(";CHR$(233);") FORMS ----2"
280 LOCATE 13,5:PRINT "*   PLOT AND RESOLVE VECTORS ( polar or rect. inputs ) --------------3"
290 LOCATE 15,5:PRINT "*   PLOT TWO SIMULTANEOUS EQUATIONS ---------------------------------4"
310 LOCATE 17,5:PRINT "*   HELP  ( plotting program descriptions ) -------------------------5"
320 LOCATE 19,5:PRINT "*   EXIT ------------------------------------------------------------6"
330 LOCATE 21,3:PRINT "Enter selection number"
340 LOCATE 21,27:ZZ$=INKEY$:IF ZZ$="" THEN 340
350 IF VAL(ZZ$)<1 OR VAL(ZZ$)>6 THEN BEEP:GOTO 340
360 ON VAL(ZZ$) GOTO 370,380,390,400,420,430
370 RUN "IPLOT"
380 RUN "PPLOT"
390 RUN "VPLOT"
400 RUN "SPLOT"
420 RUN "HLP3"
430 CLS:CHAIN "PLIC
440 BEEP:GOTO 100
450 GOTO 100
```
{% endraw %}

## PPLOT.BAS

{% raw %}
```bas
100 'PPLOT - SHAREWARE POLAR PLOTTING PROGRAM  - revision date: 05/07/87
110 'Copyright 1985,1986,1987, Prowess, Inc.
120 'THIS PROGRAM RESOLVES AND PLOTS VECTORS
130 CLS:KEY OFF:CLEAR:SCREEN 0,0
140 DIM R(51),U(51),X(51),Y(51),XC(51),YC(51)
150 COLOR 6,0:XX$=STRING$(78,32)
160 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
170 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
180 LOCATE 2,35:PRINT "POLAR PLOTTING"
190 LOCATE 3,26:PRINT "(C) 1985,1986,1987 Prowess,Inc."
200 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
210 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
220 LOCATE 3,75:COLOR 7,0:PRINT "V2.0":COLOR 1,0
230 FOR L=6 TO 19
240 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
250 NEXT L
260 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
270 IF SKIP=1 THEN 390
280 LOCATE 12,16:PRINT "Do you want to read the instructions?  (Y/N/Q)"
290 LOCATE 12,62:K$=INKEY$:IF K$="" THEN 290
300 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 2780
310 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 390
320 IF K$="Q" OR K$="q" THEN 2650
330 GOTO 290
340 '-----------------------clear pgm. field subroutine------------------------
350 FOR LL= 6 TO 19:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL:RETURN
360 '---------------------clear message panel subroutine-----------------------
370 FOR LL=21 TO 23:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL:RETURN
380 '--------------------------enter polar equation(s)-------------------------
390 COLOR 6,0:PI=3.1415926#:BIG=0:AMIN=0:AMAX=360:SKIP=0
400 LOCATE 10,10:PRINT "Polar equations of the form:   r = f(";CHR$(233);")................1"
410 LOCATE 12,10:PRINT "Polar equations of the form:  x = f(";CHR$(233);") and y = f(";CHR$(233);")....2"
420 LOCATE 21,3:PRINT "Enter selection number"
430 LOCATE 21,27:EE$=INKEY$:IF EE$=""  THEN 430
440 IF EE$="Q" OR EE$="q" THEN 2650
450 IF VAL(EE$)<1 OR VAL(EE$)>2 THEN BEEP:GOTO 430
460 IF VAL(EE$)=1 THEN 480
470 IF VAL(EE$)=2 THEN 680
480 GOSUB 350:GOSUB 370
490 COLOR 10,0:ON ERROR GOTO 0:LOCATE 10,1
500 LOCATE 10,17:PRINT "ENTER YOUR POLAR EQUATION IN THE FORM  R = f(A)"
510 LOCATE 12,10:COLOR 7,0:PRINT "EXAMPLE:"
520 LOCATE 12,19:PRINT "R = 10 * SIN(2*A)":COLOR 15,0
530 LOCATE 14,19:PRINT "R = "
540 LOCATE 14,23:LINE INPUT EQ1$
550 IF EQ1$="Q" OR EQ1$="q" THEN 2650
560 IF LEN(EQ1$)=0 THEN BEEP:GOTO 540
570 B$="2410 R = "
580 C$ = B$+EQ1$
590 '------------writes the equation string to a file called fct1.bas-----------
600 OPEN "O",#1,"FCT1.BAS"
610    PRINT #1,C$
620 CLOSE #1
630 '-----------merges fct1.bas with this pgm. and continues execution ---------
640 CHAIN MERGE "FCT1.BAS",650,ALL
650 GOTO 1010
660 GOSUB 350:GOSUB 370
670 '--------------------------enter parametric form--------------------------
680 GOSUB 350:GOSUB 370
690 LOCATE 6,17:COLOR 7,0:PRINT "You will enter two equations: Y = f("CHR$(233);") and X = f(";CHR$(233);")"
700 ON ERROR GOTO 0
710 LOCATE 8,5:COLOR 6,0:PRINT "Enter the 1st equation in the form  Y = f(A) & press 'RETURN'"
720 LOCATE 10,10:COLOR 7,0:PRINT "EXAMPLE:  Y = 5 * SIN(2*A)"
730 LOCATE 12,20:COLOR 15,0:PRINT "Y = "
740 LOCATE 12,24:LINE INPUT EQ2$
750 D$ = "2430 Y = "
760 IF EQ2$="Q" OR EQ2$="q" THEN BEEP:GOTO 2650
770 IF LEN(EQ2$)=0 THEN BEEP:GOTO 740
780 E$ = D$+EQ2$
790 '----------------writes 1st equation to file called fct2.bas --------------
800 OPEN "O",#2,"FCT2.BAS"
810   PRINT #2,E$
820 CLOSE #2:COLOR 10,0
830 IF FLAG=3 THEN FLAG=0:CHAIN MERGE "FCT2.BAS",850,ALL:GOTO 1140
840 '----------------------------enter 2nd function--------------------------
850 LOCATE 14,5:COLOR 6,0:PRINT "Enter the 2nd equation in the form  x = f(A) & press 'RETURN'"
860 LOCATE 16,10:COLOR 7,0:PRINT "EXAMPLE:  X = COS(A/4)"
870 LOCATE 18,20:COLOR 15,0:PRINT "X ="
880 G$ = "2450 X = "
890 LOCATE 18,24:COLOR 15,0:LINE INPUT EQ3$
900 IF EQ3$="Q" OR EQ3$="q" THEN 2650
910 IF LEN(EQ3$)=0 THEN BEEP:GOTO 890
920 F$ = G$+EQ3$
930 '-----------------writes 2nd equation to a file called fct3.bas------------
940 OPEN "O",#3,"FCT3.BAS"
950    PRINT #3,F$
960 CLOSE #3
970 '-----merges fct2.bas & fct3.bas with this pgm and continues execution-----
980 CHAIN MERGE "FCT2.BAS",990,ALL
990 CHAIN MERGE "FCT3.BAS",1000,ALL
1000 IF VAL(EE$)=1 THEN 1050 ELSE 1150
1010 '--------------finds largest value of r for scaling------------------------
1020 GOSUB 350:GOSUB 370:ON ERROR GOTO 2570
1030 LOCATE 12,22:COLOR 28,0:PRINT "FINDING LARGEST VALUES FOR SCALING"
1040 LOCATE 23,80:RMAX=0
1050 FOR A=AMIN*PI/180 TO AMAX*PI/180 STEP 2*PI/180
1060   GOSUB 2410
1070   YP=R*SIN(A)
1080   XP=R*COS(A)
1090 IF R>RMAX THEN RMAX=R
1100   IF ABS(YP)>BIG THEN BIG=ABS(YP)
1110   IF ABS(XP)>BIG THEN BIG=ABS(XP)
1120 NEXT A
1130 GOTO 1280
1140 '----------------finds largest valueof y and x for scaling---------------
1150 GOSUB 350:GOSUB 370::ON ERROR GOTO 2570
1160 LOCATE 12,22:COLOR 28,0:PRINT "FINDING LARGEST VALUES FOR SCALING"
1170 LOCATE 24,1:RMAX=0
1180 FOR A=AMIN*PI/180 TO AMAX*PI/180 STEP 2*PI/180
1190  GOSUB 2430
1200  IF ABS(Y)>BIG THEN BIG=ABS(Y)
1210  GOSUB 2450
1220  IF ABS(X)>BIG THEN BIG=ABS(X)
1230 R=SQR(X^2+Y^2)
1240 IF R>RMAX THEN RMAX=R
1250 NEXT A
1260 GOTO 1280
1270 '---------------------------set-up plot field----------------------------
1280 CLS:SCREEN 2,0,0
1290 FOR ANG=0 TO 6.2831853# STEP 0.785398163#
1300 J=ANG
1310 PSET (311.2,100),1
1320 LINE -(311.2+(360*COS(J)),100+(133.3*SIN(J))),0
1330 NEXT ANG
1340 LINE (106.7,100)-(511.2,100),1,,&HAAAA    '-draws horizontal axis--------
1350 LINE (311.2,22.2)-(311.2,183.3),1,,&HAAAA '-draws vertical axis---------
1360 LOCATE 13,64
1370 PRINT "0 (2*PI)"
1380 LOCATE 3,35
1390 PRINT "90 (PI/2)"
1400 LOCATE 13,8
1410 PRINT "180 (PI)"
1420 LOCATE 23,35
1430 PRINT "270 (3*PI/2)"
1440 IF VAL(EE$) = 2 THEN 1700
1450 '------------------plot routine for the r=f(ang) case------------------
1460 A=AMIN*PI/180
1470 GOSUB 2410
1480 YP=R*SIN(A)*70/BIG
1490 XP=R*COS(A)*168/BIG
1500 LOCATE 23,1:PRINT "PLOTTING"
1510 PSET (311.2+XP,100-YP)          '----sets 1st point for r=f(a)---------
1520 FOR A=AMIN*PI/180 TO AMAX*PI/180 STEP 2*PI/180
1530    GOSUB 2410
1540    YP=R*SIN(A)*70/BIG
1550    XP=R*COS(A)*168/BIG
1560    LINE -(311.2 + XP,100-YP)     '----------draws graph of r=f(a)--------
1570 NEXT A
1580 OPEN "I",#1,"FCT1.BAS"
1590   INPUT #1,J$
1600   LOCATE 1,1
1610   PRINT "GRAPH OF: ";MID$(J$,5)
1620 CLOSE #1
1630 LOCATE 4,60:PRINT "R(MAX) = ";RMAX
1640 LOCATE 23,1:PRINT "                    "
1650 LOCATE 20,70:PRINT "PRESS ANY"
1660 LOCATE 21,70:PRINT "  KEY":FOR I=1 TO 2000:NEXT I
1670 LOCATE 20,70:PRINT "          ":LOCATE 21,70:PRINT "         "
1680 LOCATE 23,74:A$=INKEY$:IF A$="" THEN 1680
1690 GOTO 1970
1700 '---------------plot routine for the y=f(ang),x=f(ang) case-------------
1710 A=AMIN*PI/180
1720 GOSUB 2430
1730 GOSUB 2450
1740 LOCATE 23,1:PRINT "PLOTTING"
1750 PSET (311.2+((X*168)/BIG),100-(Y*70/BIG))  '---sets 1st point (x & y)---
1760 FOR A=AMIN*PI/180 TO AMAX*PI/180 STEP 2*PI/180
1770     GOSUB 2430
1780     GOSUB 2450
1790     LINE -(311.2+(X*168/BIG),100-(Y*70/BIG))  'plots x-y =f(a) graph----
1800 NEXT A
1810 OPEN "I",#2,"FCT2.BAS"
1820 OPEN "I",#3,"FCT3.BAS"
1830   INPUT #2,K$
1840   INPUT #3,L$
1850   LOCATE 1,1
1860   PRINT "GRAPH OF: ";MID$(K$,5)
1870   LOCATE 2,11
1880   PRINT MID$(L$,5)
1890 CLOSE #3
1900 CLOSE #2
1910 LOCATE 4,60:PRINT "R(MAX) = ";RMAX
1920 LOCATE 23,1:PRINT "              "
1930 LOCATE 20,70:PRINT "PRESS ANY"
1940 LOCATE 21,70:PRINT "   KEY":FOR I=1 TO 2000:NEXT I
1950 LOCATE 20,70:PRINT "         ":LOCATE 21,70:PRINT "          "
1960 LOCATE 23,74:A$=INKEY$:IF A$="" THEN 1960
1970 CLS                   '-------------header for tabular list--------------
1980 SCREEN 0,0:COLOR 6,0:SKIP=1
1990 LOCATE 10,23:PRINT "DISPLAY TABULAR VALUES ..........1"
2000 LOCATE 12,23:PRINT "START OVER ......................2"
2010 LOCATE 14,23:PRINT "EXIT MENU .......................3"
2020 LOCATE 21,29:PRINT "Enter selection number"
2030 LOCATE 21,53:AA$=INKEY$:IF AA$="" THEN 2030
2040 IF VAL(AA$)<1 OR VAL(AA$)>3 THEN BEEP:GOTO 2030
2050 ON VAL(AA$) GOTO 2070,2060,2650
2060 CLS:GOTO 150
2070 CLS                 '--routine for displaying calculated values-------
2080 T=-2:ON ERROR GOTO 0
2090 Z=18:CNT=0:SCREEN 0,1,0
2100 COLOR 6,0:PRINT
2110   'PAGE HEADER
2120   LOCATE 2,1
2130   PRINT "  POINT        ANGLE      ANGLE      R         X         Y"
2140   PRINT "    #          (DEG)      (RAD)"
2150   PRINT :PRINT:COLOR 7,0
2160    FOR Q=1 TO 18
2170      T=T+2
2180      CNT=CNT+1
2190      A=T*PI/180
2200      IF VAL(EE$)=1 THEN GOSUB 2470 ELSE GOSUB 2520
2210      LOCATE Q+4,1:PRINT "   ";CNT," ";T
2220      LOCATE Q+4,23:PRINT USING "#####.####";A,R,X,Y
2230      IF T>=360 THEN FLAG=1:GOTO 2280
2240    NEXT Q
2250 COLOR 6,0:LOCATE 19,65:PRINT "PRESS ANY KEY TO"
2260 LOCATE 20,65:PRINT "CONTINUE OR 'Q'"
2270 LOCATE 21,65:PRINT "FOR NEXT MENU"
2280 LOCATE 22,69:A$=INKEY$:IF A$="" THEN 2280
2290 IF FLAG =1 THEN FLAG=0:CLS:GOTO 2320
2300 IF A$="Q" OR A$="q" THEN 2320
2310 CLS:Z=Z+18:GOTO 2100
2320 CLS:COLOR 6,0:SKIP=1
2330 LOCATE 10,23:PRINT "ENTER A NEW POLAR FUNCTION ......1"
2340 LOCATE 12,23:PRINT "EXIT MENU .......................2"
2350 LOCATE 21,29:PRINT "Enter selection number"
2360 LOCATE 21,53:GG$=INKEY$:IF GG$="" THEN 2360
2370 IF VAL(GG$)<1 OR VAL(GG$)>2 THEN 2360
2380 ON VAL(GG$) GOTO 2390,2650
2390 GOSUB 350:GOSUB 370:GOTO 150
2400 '-------------------------------user functions--------------------------
2410 R = SIN(3*A)
2420 RETURN
2430 Y = 5*SIN(2*A)
2440 RETURN
2450 X = 3*COS(3*A)
2460 RETURN
2470 '-----------------subroutine for calculating r=f(a) values--------------
2480 GOSUB 2410
2490 X=R*COS(A)
2500 Y=R*SIN(A)
2510 RETURN
2520 '-------------subroutine for calculating x=f(a) & y=f(a) values---------
2530 GOSUB 2430
2540 GOSUB 2450
2550 R=SQR(X^2+Y^2)
2560 RETURN
2570 '-------------------------------error traps-------------------------------
2580 IF ERR=2 AND ERL=2410 THEN GOSUB 350:COLOR 15,4:LOCATE 21,3:PRINT "YOUR EQUATION R = ";EQ1$:LOCATE 21,21+LEN(EQ1$):PRINT " HAS A SYNTAX ERROR - PLEASE FIX.":RESUME 490
2590 IF ERR=2 AND ERL=2430 THEN GOSUB 350:COLOR 15,4:LOCATE 21,3:PRINT "YOUR EQUATION Y = ";EQ2$:LOCATE 21,21+LEN(EQ2$):PRINT " HAS A SYNTAX ERROR - PLEASE FIX.":FLAG=3:COLOR 7,0:RESUME 690
2600 IF ERR=2 AND ERL=2450 THEN GOSUB 350:COLOR 15,4:LOCATE 21,3:PRINT "YOUR EQUATION X = ";EQ3$:LOCATE 21,21+LEN(EQ3$):PRINT " HAS A SYNTAX ERROR - PLEASE FIX.":COLOR 7,0:RESUME 830
2610 IF (ERR=11 OR ERR=6) AND (ERL=1060 OR ERL=1190 OR ERL=1210) THEN GOSUB 350:COLOR 15,4:LOCATE 21,3:PRINT "DIVISION BY ZERO OCCURED-CHECK YOUR EQUATION AND START OVER":COLOR 7,0:RESUME  100
2620 LOCATE 21,3:COLOR 15,4:PRINT "---------------FATAL ERROR START OVER------------":FOR I=1 TO 2000:NEXT I:CLS:COLOR 6,0:GOTO 100
2630 RESUME 100
2640 '-----------------------------------quit---------------------------------
2650 GOSUB 370:GOSUB 350:COLOR 6,0
2660 LOCATE 8,25:PRINT "RESTART THIS PROGRAM --------------1"
2670 LOCATE 10,25:PRINT "RETURN TO PLOT MENU ---------------2"
2680 LOCATE 12,25:PRINT "EXIT ------------------------------3"
2690 LOCATE 21,29:PRINT "Enter selection number"
2700 LOCATE 21,53:Q$=INKEY$:IF Q$="" THEN 2700
2710 QT=VAL(Q$)
2720 IF QT<1 OR QT>3 THEN BEEP:GOTO 2700
2730 IF QT=1 THEN 100
2740 IF QT=2 THEN CLS:CHAIN "PLOTM
2750 IF QT=3 THEN CLS:CHAIN "PLIC
2760 BEEP:GOTO 2700
2770 '-----------------------------------help----------------------------------
2780 GOSUB 370:GOSUB 350
2790 LOCATE 6,3:PRINT "* This program plots polar functions. It will handle both standard forms"
2800 LOCATE 7,5:PRINT "(R = f(angle)) and parametric forms (Y = f(angle) and X = f(angle)."
2810 LOCATE 9,3:PRINT "* The value(s) of your function will be calculated from 0 to 360 degrees,"
2820 LOCATE 10,5:PRINT "in 2 degree increments, and plotted."
2830 LOCATE 12,3:PRINT "* Standard format (R = f(angle)) - The length of a radius (R), from 0,0,"
2840 LOCATE 13,5:PRINT "is expressed in terms of the angle (A). Example: R = A  generates a"
2850 LOCATE 14,5:PRINT "spiral;   R = SIN(3*A)  generates a three-leaf rose."
2860 LOCATE 16,3:PRINT "* Parametric format (Y = f(angle) & X = f(angle)) - The values of Y and X"
2870 LOCATE 17,5:PRINT "are independently expressed in terms of the angle. Example: Y = 5*SIN(2*A)"
2880 LOCATE 18,5:PRINT "and X = 3*COS(3*A) - generates a lissajous pattern."
2890 LOCATE 21,3:PRINT "Press any key to continue"
2900 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 2900
2910 IF K$="Q" OR K$="q" THEN CLS:GOTO 2650
2920 GOSUB 370:GOSUB 350
2930 LOCATE 6,3:PRINT "* This program features full autoscaling, e.g. no matter how large a value"
2940 LOCATE 7,5:PRINT "is calculated (within the computer's capability), it will 'fit' within"
2950 LOCATE 8,5:PRINT "the plot field. This can create a problem if both very large and very"
2960 LOCATE 9,5:PRINT "small values are generated. Because the plot field is scalled to handle"
2970 LOCATE 10,5:PRINT "the largest value, plotting details of the smaller values may be lost"
2980 LOCATE 11,5:PRINT "because of the finite resolution of the screen."
2990 LOCATE 13,3:PRINT "* After plotting your function, you may review all of the plotting points"
3000 LOCATE 14,5:PRINT "in tabular format. Regardless of the polar format that you used, the"
3010 LOCATE 15,5:PRINT "tabular display shows the value of R, X and Y for each two-degree"
3020 LOCATE 16,5:PRINT "increment."
3030 LOCATE 18,3:PRINT "* The IBM-PC does not allow error trapping of 'division by zero'. If your"
3040 LOCATE 19,5:PRINT "function accidently tries to divide by zero, you will have to start over!"
3050 LOCATE 21,3:PRINT "Press any key to start
3060 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 3060
3070 GOSUB 350:GOSUB 370:GOTO 390
```
{% endraw %}

## README.DOC

{% raw %}
```

Readme.doc


                             PLOT -- DOCUMENTATION


                            PLOT-- LICENSE AGREEMENT
                     Copyright 1985,1986,1987, Prowess, Inc.


     This is a user supported software product.  It is not public domain
     software, nor is it free software. You are granted a limited license
     to use this product on a trial basis.   If you continue to use this
     product after a trial period, you are expected to register by sending:

           $25 (Minimum reg.)          or        $35 (+ $4 S/H) (Full reg.)

           * Technical support                   *  Technical support
           * Update notification                 *  Latest diskette
                                                 *  Printed manual

                 Texas residents, please add 7 1/4 % sales tax

         Contact us for information concerning low cost site licenses.

     If you like the shareware concept - try before you buy - please support the
     companies that provide useful, professional quality products.

       Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas  75238

                               (214) 349-4718


     You are encouraged to distribute copies of this software providing
     that you make no modifications to any of the files and that the copy
     that you distribute, regardless of the means of distribution, contains
     all files that came on your product diskette.

                                   DISCLAIMER
                                   ----------

     This software product and associated instructional material are sold
     "as is" without warranty as to their performance, accuracy, freedom
     from error, merchantability or fitness for any particular purpose.
     The entire risk as to the performance of the software is assumed by
     the user.

     Under no circumstances, whether in contract or tort, shall Prowess,
     Inc. be liable for indirect, consequential, special, or exemplary
     damages such as, but not limited to, loss of revenue or anticipated
     profits, lost business or other economic loss, arising out of, or
     in connection with this agreement, or your use, or inability to use
     any program or sub-program associated with this software product.

          ------------------------------------------------------------












                                    CONTENTS

                        * File descriptions

                        * Minimum system requirements

                        * Introduction

                        * Working diskette preparation

                        * Loading/running the plot programs

                        * General information about these programs

                        * Other Prowess, Inc. shareware products

          ----------------------------------------------------------------

                               FILE DESCRIPTIONS

          The following files are contained on your product diskette:

 README.DOC                     This file. Documentation for PLOT

 HLP3.BAS                       Help file accessed from PLOTM.BAS. Provides
                                the most detailed information on all plot
                                programs.

 IPLOT.BAS                      Program for plotting Y=f(X) type equations.
                                It also provide integration capability to
                                find the area under a curve.

 SPLOT.BAS                      Program for plotting two simultaneous
                                equations.

 PPLOT.BAS                      Program for polar plotting.

 VPLOT.BAS                      Program for vector plotting.

 PLOTM.BAS                      Contains the plot menu. Calls the available
                                plotting programs and help file.

 PLOT.BAT                       A batch file which loads the opening screen
                                files via BASIC(A).

 PLOG.BAS                       Opening screen files - logo, etc. Calls
                                PLOTM.BAS.

 FUNCT.BAS                      Data files containing user defined
 FCT1.BAS                       equations. These files are automatically
 FCT2.BAS                       generated when you use the plotting
 FCT3.BAS                       programs. These file are generated as a
                                result of running the plotting programs.
                                They may or may not be present on your
                                product diskette.

 PLIC.BAS                       License statement.

             --------------------------------------------------------







                          MINIMUM SYSTEM REQUIREMENTS

      * IBM-PC or 100% compatible                    * CGA graphics

      * BASICA (or equivalent, GW-BASIC, etc.)       * 64K RAM

      * DOS 2.1 or above                             * 1 Floppy drive

                   -------------------------------------------

                                  INTRODUCTION

 This program set is designed to provide a quick, easy to use, set of tools
 for technical plotting. It will handle rectilinear, polar and vector
 plotting. After plotting, you may review a tabulation of all plotted points
 (except for the vector program).

 These programs were written in BASICA to take advantage of a unique BASICA
 capability - the CHAIN MERGE feature. When you enter an equation to be
 plotted, you may enter it just as you would write it on paper. The
 program accepts your equation as a string variable, appends your equation
 to a string that defines a line number then writes the whole string to a
 file (FCT1.BAS for example). This file is then CHAIN MERGED with the
 program itself and your equation becomes an executable line of code,
 complete with a line number in the program. Unfortunately, existing
 compilers can not compile the CHAIN MERGE statement.

 We felt that being able to enter the equation in standard equation format was
 so important that we have released these programs in BASIC(A). No other
 language that we know of allows a chain-merge-like function and writing the
 function in another language would be a formidable task. Chalk one up for
 BASIC! Although not extremely fast, we think that you will find the plotting
 speed of these programs satisfactory.

 SPECIAL NOTE: Because of the technique mentioned above, you will render
               these programs INOPERATIVE IF YOU RENUMBER THE LINES !!!

 There is a master help file accessable from the main menu (HLP3.BAS). It is
 a separate program that describes each program in detail. It is your best
 source of information about program specifics.

 In addition to HLP3.BAS, each program contains a brief help (or
 instruction) section for quick reference.

                  -----------------------------------------------

                            MAKE A WORKING DISKETTE

 Protect your investment; make a working copy of your PLOT product diskette
 now!

                1. Format a new diskette (with the system option)

                   Example:  FORMAT B:/S

                   (Assumes system diskette in drive A and new diskette in
                   drive B.)









                2. Copy your BASICA.COM to the working diskette.

                               COPY BASICA.COM B:

                   If your system uses a different advanced BASIC,  you will
                   need to copy it to the working disk AND CHANGE ITS  NAME
                   TO  BASICA.XXX  (the XXX refers to its original extension-
                   probably .EXE)

                   Examples:  COPY GW-BASIC.EXE B:BASICA.EXE

                3. Copy all files from your product diskette to the newly
                   formatted diskette.

                   Example: COPY *.* B:

                   (Assumes product diskette in drive A and formatted diskette
                   in drive B.)


                4. Label your working diskette PLOT.

                5. Put your PLOT product diskette in a safe place.


          NOTE: If you are using a hard disk, set up a separate directory
                for PLOT and start with step #2 above, substituting C: for
                B:.

            ------------------------------------------------------------

                     LOADING AND RUNNING THE PLOT PROGRAMS

 Put your working diskette in drive A (or get into the PLOT directory if
 you are using a hard disk). Enter:

                                 PLOT  <return>

 This will cause PLOT.BAT to execute and you should see the logo screen
 appear.

                NOTE: PLOT.BAT expects to find a program called BASIC (.COM
                or .EXE). If you forgot to change the name of your BASICA
                (or other advanced basic clone) to BASIC, you will have a
                problem. Either ROM basic will be loaded or you will get a
                "file not found" error.

 Pressing any key from the logo screen will display the Prowess, Inc.
 license statement. Pressing any key at this point will call the main menu.

 From the main menu, you may select any of the plotting programs. We strongly
 suggest that you review the main help file (accessable from the main menu)
 before operating the programs.

 NOTE: If your DOS operating system contains a utility called GRAPHICS.COM
 (DOS 2.1 and greater), you may want to load it prior to loading the PLOT
 programs. With GRAPHICS.COM memory resident, you can print the graphs
 produced by the PLOT package on most wire dot printers by simply pressing
 <shift-prtSc>. You can load GRAPHICS.COM by entering: GRAPHICS <return> from
 your system disk.

                 -------------------------------------------------







                              GENERAL INFORMATION

 BASIC is rather unforgiving about comma errors; if you enter a period
 instead of a comma or fail to put a comma where the program is expecting
 one, you will see a 'REDO FROM START' error message. If this occurs, you
 can usually recover by re-entering the data correctly AT THE CURRENT
 CURSOR POSITION. If you try to move the cursor before correcting your
 entry, you'll make things worse! In most cases the messy screen will be
 redrawn when the function is plotted. Specifying the range of X over
 which to plot, the range of X over which to integrate, and inputting
 vectors (in both rectangular and polar formats) require entries in the
 form of M,N. The comma is a requirement!!

 BASICA does not allow error trapping 'division by zero' and 'overflow'
 (a floating point overflow). Some BASICA equivalents do allow trapping
 these errors. Error trapping statements exist in the programs to detect
 these errors; however, they won't operate on the IBM-PC. They will work
 properly on some clones that use a different advanced BASIC. If you get
 either of these error messages, from the system, you will have to restart
 the program. Most syntax errors are trapped and the error traps should
 work.

 Entering a single 'Q' (for 'quit') and pressing return, at most user inputs,
 will halt the current operation and display the exit screen.

                ------------------------------------------------------

     If you like this program set, try our other Prowess , Inc. shareware
     tools:

      * Financial programs (interest, annuities, amortization, etc.)
      * Pro-menu (an elegant full featured PC menu system-one data file)
      * Units (easy, fast technical units conversions and more)
      * Circuit design calculations (DC circuits, RC, RL, Pw., Energy, etc.)
      * AC circuit design (great graphics,- RF design, Op amps, Xformers, BW)
      * Magnetics design (great graphics - linear motors, mag. force, etc.)
      * Automated Planning Form (project planning tools - Gantt-charts, etc.)
      * Math utilities (equation solving, lines, factors, intersections, etc.)
      * Geometry for design (great graphics - chords, arcs, triangles, etc.)
      * Dos-pro (a special menu for executing DOS commands from plain English)


```
{% endraw %}

## SPLOT.BAS

{% raw %}
```bas
100 'SPLOT - SHAREWARE SIM. EQ. PLOTTING PROGRAM  - revision date: 05/08/87
110 'Copyright 1985,1986,1987, Prowess, Inc.
120 'This progem plots simultaneous equations
130 CLS:KEY OFF:CLEAR:SCREEN 0,0,0:COLOR 6,0:XX$=STRING$(78,32)
140 DIM R(51),U(51),X(51),Y(51),XC(51),YC(51)
150 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
160 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
170 LOCATE 2,28:PRINT "PLOT SIMULTANEOUS EQUATIONS"
180 LOCATE 3,26:PRINT "(C) 1985,1986,1987 Prowess,Inc."
190 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
200 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
210 LOCATE 3,75:COLOR 7,0:PRINT "V2.0":COLOR 1,0
220 FOR L=6 TO 19
230 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
240 NEXT L
250 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
260 IF SKIP=1 THEN 670
270 IF SKIP=2 THEN 410
280 LOCATE 12,16:PRINT "Do you want to read the instructions?  (Y/N/Q)"
290 LOCATE 12,62:K$=INKEY$:IF K$="" THEN 290
300 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 2420
310 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 380
320 IF K$="Q" OR K$="q" THEN 2290
330 GOTO 290
340 '--------------------------clear field subroutines------------------------
350 FOR LL=6 TO 19:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL
360 FOR LL=21 TO 23:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL:RETURN
370 '-------------------------------------------------------------------------
380 LOCATE 12,3:PRINT STRING$(75,32)
390 IF FLAG=>1 THEN LOCATE 21,3:PRINT "Your previous equations were:":LOCATE 22,3:PRINT "Y = ";EQ1$;" and  A = ";EQ2$
392 IF FLAG=1 OR FLAG=3 THEN 410
394 IF FLAG=2 OR FLAG=4 THEN 500
400 '------------------------inputs two user defined equations-----------------
410 LOCATE 6,3:PRINT "Enter the first equation in the form:  y = f(x)"
420 LOCATE 8,10:COLOR 7,0:PRINT "Example:  Y = X^3 -(2*X^2) + X - 10"
430 W$ = "2170  Y = ":LOCATE 10,19:COLOR 15,0:PRINT "Y = ":LOCATE 10,24
440 LINE INPUT EQ1$:IF LEN(EQ1$)=0 THEN BEEP:GOTO 440  'inputs user string-----
450 S$ = W$+EQ1$              'adds correct line # to 1st equation string------
460 OPEN "O",#1,"FCT1.BAS"    'writes 1st equation to the file fct1.bas--------
470   PRINT #1,S$
480 CLOSE #1
490 IF FLAG=1 OR FLAG=3 THEN 620
500 LOCATE 14,1:COLOR 6,0
510 LOCATE 14,3:PRINT "Enter the second equation in the form  A = f(B)"
520 COLOR 7,0
530 LOCATE 16,10:PRINT "EXAMPLE: A = 2*EXP(-SIN(B))"
540 LOCATE 18,19:COLOR 15,0:PRINT "A = ":LOCATE 18,24
550 Q$ = "2190 A = "
560 COLOR 15,0:LINE INPUT EQ2$:IF LEN(EQ2$)=0 THEN BEEP:GOTO 560  'inputs 2nd user string-
570 SS$ = Q$+EQ2$             'adds correct line# to 2nd equation string--------
580 OPEN "O",#2,"FCT2.BAS"    'writes 2nd equation to the file fct2.bas--------
590   PRINT #2,SS$
600 CLOSE #2
610 ' -------------merges fct1.bas and fct2.bas with this pgm ------------------
620 CHAIN MERGE "FCT1.BAS",630,ALL
630 IF FLAG=1 THEN FLAG =0:GOTO 770
640 CHAIN MERGE "FCT2.BAS",660,ALL
650 '---------------------user defines plotting range of x-axis-----------------
660 IF FLAG=1 OR FLAG=2 THEN 770
670 GOSUB 350
680 LOCATE 8,20:COLOR 14,0:PRINT "NOTE: XMIN must be smaller than XMAX !!!"
690 LOCATE 13,3:COLOR 7,0:PRINT "The X-axis will be scaled + and - whichever (Xmen or Xmax) has the largest"
700 LOCATE 14,3:PRINT "absolute value."
710 LOCATE 16,3:PRINT "Example: If you wish to plot the functions from X = -15 to X = +5, you"
720 LOCATE 17,3:PRINT "would enter -15,5. The axis would run from -15 to +15 and the function"
730 LOCATE 18,3:PRINT "would be plotted from X = -15 to X = 5, as you requested."
740 LOCATE 21,3:COLOR 6,0:INPUT "Enter RANGE of X over which to plot. (Xmin,Xmax) ",XMIN,XMAX
750 IF XMIN>XMAX THEN BEEP:LOCATE 21,52:PRINT "                  ":GOTO 740
760 '--------evaluates both functions and finds largest value of y and a -------
770 FLAG=0
780 GOSUB 350:ON ERROR GOTO 2210:COLOR 28,0:LOCATE 12,17
790 PRINT "FINDING LARGEST VALUES OF Y AND A FOR SCALING"
800 LOCATE 23,1
810 PRINT
820 INC = (XMAX-XMIN)/199         'sets up plotting increment of x -------------
830 X = XMIN:YBIG=0
840 B = XMIN
850 ON ERROR GOTO 2210
860 FOR X=XMIN TO XMAX STEP INC             'finds biggest value of y-----------
870    GOSUB 2170
880    IF ABS(Y)>YBIG THEN YBIG = ABS(Y)
890 NEXT X
900 FOR B=XMIN TO XMAX STEP INC:ON ERROR GOTO 2210 'finds biggest value of a ---
910   GOSUB 2190
920   IF ABS(A)>YBIG THEN YBIG = ABS(A)     'sets YBIG equal to largest y or a--
930 NEXT B
940 IF ABS(XMIN)>ABS(XMAX) THEN XBIG=ABS(XMIN) ELSE XBIG=ABS(XMAX)
950   '---------------draws and labels plot field----------------------
960 BEEP:SCREEN 2,,0,0
970 CLS
980 LINE (137,9.3)-(493,157),7,B      'draws graph field ---------
990 FOR I=7.38 TO 73.8 STEP 7.38
1000 LINE (315+(I/0.417),9.3)-(315+(I/0.417),157),7,,&HAAAA
1010 LINE (315-(I/0.417),9.3)-(315-(I/0.417),157),7,,&HAAAA
1020 LINE (137,83.2+I)-(493,83.2+I),7,,&HAAAA
1030 LINE (137,83.2-I)-(493,83.2-I),7,,&HAAAA
1040 NEXT I
1050 LINE (315,9.3)-(315,157),7         'draws vertical axis -----------------
1060 LINE (137,83.2)-(493,83.2),7       'draws horizontal axis ---------------
1070 ' -------------------prints axis labels, etc. ---------------------------
1080 LOCATE 1,40
1090 PRINT "Y"
1100 LOCATE 11,64
1110 PRINT "X"
1120 LOCATE 2,64
1130 IF YBIG<=0 THEN 1150
1140 PRINT USING "+#######.###";YBIG:GOTO 1160
1150 PRINT USING "+#.####";YBIG:
1160 LOCATE 20,65
1170 IF YBIG#<=0 THEN 1190
1180 PRINT USING "#######.###";-YBIG:GOTO 1200
1190 PRINT USING "#.####";-YBIG
1200 LOCATE 20,65:PRINT " "
1210 LOCATE 21,11
1220 IF XBIG<=0 THEN 1240
1230 PRINT USING "#######.###";-XBIG:GOTO 1250
1240 PRINT USING "#.####";-XBIG
1250 LOCATE 21,11:PRINT " "
1260 LOCATE 21,56
1270 IF XBIG<=0 THEN 1290
1280 PRINT USING "+#######.###";XBIG:GOTO 1300
1290 PRINT USING "+#.####";XBIG
1300 LOCATE 21,40
1310 PRINT "0"
1320 LOCATE 11,15
1330 PRINT "0"
1340 '-------------plot routine for both equations------------------
1350 X=XMIN:B=XMIN:U$=STRING$(80,32) 'initializes x and b to same smallest value-
1360 LOCATE 1,1:PRINT "PLOTTING":GOSUB 2170
1370 PSET ((315+(XMIN*177/XBIG)),(83.2-(Y*73.8/YBIG)))    'sets 1st plot pt.---
1380 FOR X=X+INC TO XMAX STEP INC                      'plots 1st equation-----
1390    GOSUB 2170
1400    LINE -((315+(X*177/XBIG)),(83.2-(Y*73.8/YBIG))),7
1410 NEXT X
1420 GOSUB 2190
1430 PSET ((315+(B*177/XBIG)),(83.2-(A*73.8/YBIG)))   'sets 1st pt of 2nd eq.--
1440 FOR B=B+INC TO XMAX STEP INC                       'plots 2nd equation -----
1450 GOSUB 2190
1460   LINE -((315+(B*177/XBIG)),(83.2-(A*73.8/YBIG))),7,,&HAAAA
1470 NEXT B
1480 LOCATE 1,1:PRINT "          ":LOCATE 22,1:PRINT U$:LOCATE 23,1
1490 LOCATE 23,1:PRINT "GRAPH OF:"
1500 OPEN "I",#1,"FCT1.BAS"
1510  INPUT #1,T$
1520 CLOSE #1
1530 OPEN "I",#2,"FCT2.BAS"
1540  INPUT #2,Q$
1550 CLOSE #2
1560 LOCATE 23,11
1570 PRINT MID$(T$,5);"  AND  ";MID$(Q$,5):LOCATE 3,1:PRINT "PRESS ANY KEY":LOCATE 4,1:PRINT "TO CONTINUE":FOR I=1 TO 2000:NEXT I
1580 LOCATE 3,1:PRINT "             ":LOCATE 4,1:PRINT "            "
1590 LOCATE 23,78:A$=INKEY$:IF A$="" THEN 1590
1600 SCREEN 0,1,0:CLS:COLOR 6,0
1610 LOCATE 10,1
1620 PRINT "            DISPLAY TABULATED VALUES OF X, Y AND A...............1"
1630 PRINT
1640 PRINT "            ENTER NEW RANGE OF X ................................2"
1650 PRINT
1660 PRINT "            INPUT TWO NEW FUNCTIONS .............................3"
1670 PRINT
1680 PRINT "            EXIT ................................................4"
1690 PRINT
1700 PRINT "                           MAKE SELECTION     "
1710 LOCATE 18,46:SS$=INKEY$:IF SS$="" OR VAL(SS$)<1 OR VAL(SS$)>4 THEN 1710
1720 ON VAL(SS$) GOTO 1750,1730,1740,2290
1730 SKIP=1:GOSUB 350:GOTO 150
1740 SKIP=2:GOSUB 350:GOTO 150
1750 '---------------routine for listing calculated values --------------------
1760 CLS:X=XMIN-INC:COLOR 10,0
1770   PRINT " POINT          FOR                EQ.#1               EQ.#2"
1780   PRINT "   #           X & B                 Y                   A"
1790 LOCATE 18,68:COLOR 12,0:PRINT "PRESS ANY KEY"
1800 LOCATE 19,68:PRINT " TO CONTINUE"
1810 LOCATE 20,71:PRINT "OR 'Q'"
1820 LOCATE 21,68:PRINT "FOR NEXT MENU"
1830 COLOR 7,0:J=4:K=2:L=1
1840 FOR I=3 TO 22
1850 X=X+INC:B=X
1860 GOSUB 2170:GOSUB 2190
1870 LOCATE I,3:PRINT L
1880 'LIMIT DISPLAY DIGITS FOR SINGLE PRECISION
1890 LOCATE I,11:PRINT USING "#######.####";X
1900 LOCATE I,31:PRINT USING "#######.####";Y
1910 LOCATE I,51:PRINT USING "#######.####";A
1920 L=L+1
1930 IF L=201 THEN 1990
1940 NEXT I
1950 FLAG=0
1960 LOCATE 23,74:A$=INKEY$:IF A$="" THEN 1960
1970 IF A$="Q" OR A$="q" THEN CLS:GOTO 2010
1980 IF L<200 GOTO 1840
1990 LOCATE 23,74:A$=INKEY$:IF A$="" THEN 1990
2000 CLS
2010 LOCATE 10,1:COLOR 6,0
2020 LOCATE 10,16:PRINT "REVIEW TABULAR VALUES .........................1"
2030 LOCATE 12,16:PRINT "CHANGE RANGE OF X FOR PRESENT FUNCTIONS .......2"
2040 LOCATE 14,16:PRINT "INPUT TWO NEW FUNCTIONS .......................3"
2050 LOCATE 16,16:PRINT "EXIT ..........................................4"
2060 LOCATE 21,29:PRINT "Enter selection number"
2070 LOCATE 21,52:GG$=INKEY$:IF GG$="" OR VAL(GG$)<1 OR VAL(GG$)>4 THEN 2070
2080 Q=Q+12
2090 CLS
2100 ON VAL(GG$) GOTO 2130,2110,2120,2290
2110 SKIP=1:GOSUB 350:GOTO 150
2120 SKIP=2:GOSUB 350:GOTO 150
2130 CLS
2140 IF I=200 THEN CLS:GOTO 2010
2150 CLS:GOTO 1760
2160 '-----------------------------user functions----------------------------
2170  Y = X^2-5
2180 RETURN
2190 A = -B-3
2200 RETURN
2210 '---------------------------error trap routine----------------------------
2220 IF ERR=2 AND ERL=2170 THEN BEEP:GOSUB 350:LOCATE 19,23:COLOR 12,4:PRINT "SYNTAX ERROR IN EQUATION #1 - REDO":FOR PP=1 TO 1000:NEXT PP:FLAG=1:COLOR 6,0:RESUME 390
2230 IF ERR=2 AND ERL=2190 THEN BEEP:GOSUB 350:LOCATE 19,23:COLOR 12,4:PRINT "SYSTAX ERROR IN EQUATION #2 - REDO":FOR PP=1 TO 1000:NEXT PP:FLAG=2:COLOR 6,0:RESUME 390
2240 IF ERR=5 AND ERL=2170 THEN BEEP:GOSUB 350:LOCATE 19,3:COLOR 12,4:PRINT "IMAGINARY NUMBERS CREATED! - ALTER EQUATION AND/OR LIMITS":FOR I=1 TO 1000:NEXT I:COLOR 6,0:FLAG=3:RESUME 390
2250 IF ERR=5 AND ERL=2190 THEN BEEP:GOSUB 350:LOCATE 19,3:COLOR 12,4:PRINT "IMAGINARY NUMBERS CREATED! - ALTER EQUATION AND/OR LIMITS":FOR I=1 TO 1000:NEXT I:COLOR 6,0:FLAG=4:RESUME 390
2260 IF ERR=11 AND ERL=2170 OR ERL=2190 THEN GOSUB 350:COLOR 12,4:FLAG=3:LOCATE 21,3:PRINT "DIVISION BY ZERO OCCURED - CHECK YOUR EQUATION AND REDO!":FOR I=1 TO 1000:NEXT I:RESUME 390
2265 IF ERR=6 THEN BEEP:LOCATE 21,3:COLOR 12,4:FLAG=4:PRINT "AN OVERFLOW HAS OCCURED - ALTER EQUATION AND/OR LIMITS":FOR I=1 TO 1000:NEXT I:CLS:RESUME 390
2270 ON ERROR GOTO 0:CLS:GOTO 100
2280 '-----------------------------------quit---------------------------------
2290 SCREEN 0,1:CLS:COLOR 6,0
2300 LOCATE 8,25:PRINT "RESTART THIS PROGRAM --------------1"
2310 LOCATE 10,25:PRINT "RETURN TO PLOT MENU ---------------2"
2320 LOCATE 12,25:PRINT "QUIT ------------------------------3"
2330 LOCATE 17,30:PRINT "MAKE SELECTION"
2340 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 2340
2350 QT=VAL(Q$)
2360 IF QT<1 OR QT>3 THEN BEEP:GOTO 2340
2370 IF QT=1 THEN SKIP=2:GOSUB 350:GOTO 150
2380 IF QT=2 THEN RUN "PLOTM"
2390 IF QT=3 THEN CLS:CHAIN "PLIC
2400 BEEP:GOTO 2340
2410 '----------------------------------help----------------------------------
2420 GOSUB 350
2430 LOCATE 6,3:PRINT "* This program plots two simultaneous equations - one in the form Y=f(X)"
2440 LOCATE 7,5:PRINT "and the other in the form of A=f(B)."
2450 LOCATE 9,3:PRINT "* After plotting is completed, a tabulation of all plotted points may be"
2460 LOCATE 10,5:PRINT "reviewed."
2470 LOCATE 12,3:PRINT "* Since 'Y' axis is scaled to accomodate the largest value from either"
2480 LOCATE 13,5:PRINT "equation, if one equation produces large values of 'Y' (Y or A) and the"
2490 LOCATE 14,5:PRINT "other produces small values of 'Y' (Y or A), the curve with the smaller"
2500 LOCATE 15,5:PRINT "values may not show much detail. Curves display best when both produce"
2510 LOCATE 16,5:PRINT "a similiar range of values. Often, restricting the range of X, to just"
2520 LOCATE 17,5:PRINT "cover a particular point of interest, will keep values of both curves"
2530 LOCATE 18,5:PRINT "in a good display range."
2540 LOCATE 21,3:PRINT "Press any key to continue"
2550 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 2550
2560 IF K$="Q" OR K$="q" THEN 2290
2570 GOSUB 350
2580 LOCATE 6,3:PRINT "* Error traps detect syntax errors and provide a chance to recover without"
2590 LOCATE 7,5:PRINT "having to restart the program."
2600 LOCATE 9,3:PRINT "* Error traps exist, in this program, to detect both 'division by zero'"
2610 LOCATE 10,5:PRINT "and 'floating point overflow' conditions, however IBM BASICA does not"
2620 LOCATE 11,5:PRINT "allow trapping these errors and the statements will not function. Some"
2630 LOCATE 12,5:PRINT "BASICA 'clones' do not have these restrictions, in which case, the error"
2640 LOCATE 13,5:PRINT "traps will work. If you get a system generated 'division by zero' or"
2650 LOCATE 14,5:PRINT "'overflow' error, you will have to restart the program."
2660 LOCATE 16,3:PRINT "* See the HELP file accessable from the PLOT MENU for a more thorough"
2670 LOCATE 17,5:PRINT "discussion of this program.
2680 LOCATE 19,3:PRINT "* For practice, try: Y = X^2-5 AND A = -B -3, FROM X = -4 TO +4 (i.e. -4,4)"
2690 LOCATE 21,3:PRINT "Press any key to begin"
2700 LOCATE 21,28:K$=INKEY$:IF K$="" THEN 2700
2710 IF K$="Q" OR K$="q" THEN 2290
2720 GOSUB 350:GOTO 410
```
{% endraw %}

## VPLOT.BAS

{% raw %}
```bas
100 'VPLOT - SHAREWARE VECTOR PROGRAM - COPYRIGHT 1985,1986,1987, Prowess, Inc.
110 'THIS PROGRAM RESOLVES AND PLOTS VECTORS
120 CLS:KEY OFF:CLEAR:SCREEN 0,0,0:COLOR 6,0:XX$=STRING$(78,32)
130 DIM R(51),U(51),X(51),Y(51),XC(51),YC(51)
140 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
150 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
160 LOCATE 2,35:PRINT "VECTOR PROGRAM"
170 LOCATE 3,26:PRINT "(C) 1985,1986,1987 Prowess,Inc."
180 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
190 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
200 LOCATE 3,75:COLOR 7,0:PRINT "V1.0":COLOR 1,0
210 FOR L=6 TO 19
220 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
230 NEXT L
240 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
250 LOCATE 12,16:PRINT "Do you want to read the instructions?  (Y/N/Q)"
260 LOCATE 12,62:K$=INKEY$:IF K$="" THEN 260
270 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 1830
280 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 350
290 IF K$="Q" OR K$="q" THEN 2150
300 GOTO 260
310 '-------------------------------------------------------------------------
320 FOR T=6 TO 19:LOCATE T,2:PRINT XX$:NEXT T:RETURN
330 FOR T=21 TO 23:LOCATE T,1:PRINT XX$:NEXT T:RETURN
340 FOR T=6 TO 19:LOCATE T,2:PRINT XX$:NEXT T:FOR T=21 TO 23:LOCATE T,1:PRINT XX$:NEXT T:RETURN
350 LOCATE 10,14:PRINT "HOW MANY VECTORS DO YOU WANT TO SUM ?  ( MAX OF 10 )"
360 LOCATE 10,70:INPUT "",CT$:CT=VAL(CT$)
370 IF CT$="Q" OR CT$="q" THEN 2150
380 IF CT<1 OR CT>10 THEN BEEP:GOSUB 320:GOTO 350  'chk illegal entry --------
390 LOCATE 14,9:PRINT "WILL YOU ENTER VECTORS IN POLAR OR RECTANGULAR FORMAT  (P/R)?"
400 LOCATE 14,72:S$=INKEY$:IF S$="" THEN 390
410 IF S$="Q" OR S$="q" THEN 2150
420 IF S$<>"R" AND S$<>"P" AND S$<>"r" AND S$<>"p" THEN LOCATE 14,2:PRINT XX$:GOTO 400
430 IF S$ = "P" OR S$="p" THEN LOCATE 14,2:PRINT XX$:GOTO 540
440 LOCATE 14,2:PRINT XX$:LOCATE 10,2:PRINT XX$
450 LOCATE 6,18:PRINT "ENTER X AND Y COORDINATES IN THE FORM   X,Y":INC=2
460 FOR N=1 TO CT               'enters rect. coordinates----------------------
470    LOCATE 6+INC,30:PRINT "#";N:LOCATE 6+INC,35:INPUT "",X$,Y$:X(N)=VAL(X$):Y(N)=VAL(Y$)
480 IF X$="Q" OR X$="q" THEN 2150
490 IF Y$="Q" OR Y$="q" THEN 2150
500     IF X(N)=0 AND Y(N)=0 THEN BEEP:LOCATE 21,2:PRINT "CAN'T ALLOW BOTH X AND Y TO BE ZERO !":FOR J=1 TO 3000:NEXT J:GOSUB 340:GOTO 450
510    INC=INC+1
520 NEXT N
530 GOTO 640
540 GOSUB 320
550 XS=0
560 YS=0:INC=2
570 LOCATE 6,18:PRINT "ENTER VECTOR IN THE FORM  R,";CHR$(233);"  ( ";CHR$(233);" IN DEGREES )":INC=2
580 FOR N = 1 TO CT              'enters polar vectors------------------------
590   LOCATE 6+INC,30:PRINT "#";N:LOCATE 6+INC,35:INPUT "",R$,U$:R(N)=VAL(R$):U(N)=VAL(U$)
600 IF R$="Q" OR R$="q" THEN 2150
610 IF U$="Q" OR U$="q" THEN 2150
620  INC=INC+2
630 NEXT N
640 GOSUB 320:COLOR 6,0
650 LOCATE 6,2:PRINT TAB(11);"VECTOR #";TAB(29);"R";TAB(38);"THETA";TAB(51);"X";TAB(62);"Y"
660 LOCATE 7,2:PRINT TAB(10);"--------------------------------------------------------------"
670 FOR N = 1 TO CT
680 IF S$="R" OR S$="r" THEN 710     'avoids p -> r conversion if rect. format-
690    X(N) = R(N) * COS(( U(N) * 3.1415926#)/ 180)  'calculates x coordinate-
700    Y(N) = R(N) * SIN(( U(N) * 3.1415926#)/ 180)  'calculates y coordinate-
710      IF ABS( X(N)) > 0.0001 THEN 730      'avoids x roundoff error---------
720      X(N) = 0
730      IF ABS(Y(N)) > 0.0001 THEN 750       'avoids y roundoff error---------
740    Y(N) = 0
750    XS = XS + X(N)
760    YS = YS + Y(N)
770    LOCATE N+7,2:PRINT TAB(14);N
780    LOCATE N+7,23
790    PRINT USING " #####.#### ";R(N),U(N),X(N),Y(N)
800 NEXT N
810 LOCATE N+7,2:PRINT TAB(10);"--------------------------------------------------------------"
820 H = XS
830 V = YS
840 IF ABS( H) > 0.0001 THEN 940
850 XS = 0
860 IF ABS( V) > 0.0001 THEN 890
870 THETA = 0
880 GOTO 1120
890 IF V > 0 THEN 920
900 THETA = 270
910 GOTO 1120
920 THETA = 90
930 GOTO 1120
940 IF ABS( V) < 0.0001 THEN 1070
950 THETA = (ATN(YS/XS) * 180)/ 3.1415926#
960 IF YS < 0 THEN 1020
970 IF XS < 0 THEN 1000
980 THETA = THETA
990 GOTO 1060
1000 THETA = 180 + THETA
1010 GOTO 1060
1020 IF XS < 0 THEN 1050
1030 THETA = 360 + THETA
1040 GOTO 1060
1050 THETA = 180 + THETA
1060 GOTO 1120
1070 YS = 0
1080 IF XS > 0  THEN 1110
1090 THETA = 180
1100 GOTO 1120
1110 PRINT
1120 RT = SQR(XS^2 + YS^2)
1130 R(51)=RT
1140 U(51)=THETA
1150 X(51)=XS
1160 Y(51)=YS
1170 V=10
1180 LOCATE N+8,10
1190 PRINT "RESULTANT ->"
1200 LOCATE N+8,22
1210 PRINT USING " ######.####";RT,THETA,XS,YS
1220 LOCATE 21,2
1230 PRINT "PRESS ANY KEY TO CONTINUE"
1240 LOCATE 21,28:A$=INKEY$:IF A$="" THEN 1240
1250 XM=0
1260 YM=0
1270 GOSUB 330
1280 LOCATE 21,32
1290 PRINT "BUILDING ARRAYS"
1300 COLOR 6,0
1310   FOR N=1 TO CT         'finds largest value of x and y for scaling-----
1320    IF ABS(X(N))>XM THEN XM=ABS(X(N))
1330    IF ABS(Y(N))>YM THEN YM=ABS(Y(N))
1340   NEXT N
1350 IF ABS(X(51))>XM THEN XM=ABS(X(51))  'includes resultant in scaling-----
1360 IF ABS(Y(51))>YM THEN YM=ABS(Y(51))  'includes resultant in scaling-----
1370 IF YM>XM THEN XM=YM                  'makes xm the largest value--------
1380        FOR N=1 TO CT            'scales for graph and x-y aspect ratio--
1390           XC(N)=((X(N)/XM)*197.6)
1400           YC(N)=((Y(N)/XM)*81.7)
1410        NEXT N
1420 XC(51)=((X(51)/XM)*197.6)            'scales resultant-------------------
1430 YC(51)=((Y(51)/XM)*81.7)             'scales resultant-------------------
1440 CLS:SCREEN 2,0,0
1450 PI=3.1415926#
1460 LINE (222.5,13.4)-(623,180.9),1,B    'draws plotting field---------------
1470 LINE (422.8,13.4)-(422.8,180.9),1    'draws vert axis--------------------
1480 LINE (222.5,97.2)-(623,97.2),1       'draws horiz axis-------------------
1490 LOCATE 12,80
1500 PRINT "X"                            'labels x-axis----------------------
1510 LOCATE 1,53
1520 PRINT "Y"                            'labels y-axis----------------------
1530 LOCATE 1,1
1540 PRINT "X and Y MAX = +/-"          'prints length of x-axis from 0-------
1550 LOCATE 1,18:PRINT USING "######.####";XM:LOCATE 2,1
1560 PSET (422.8,97.2),1
1570   FOR N=1 TO CT                    'plots each vector--------------------
1580     LINE -(422.8+XC(N),97.2-YC(N)),1
1590     CIRCLE  (422.8+XC(N),97.2-YC(N)),4,1
1600     PSET (422.8,97.2),1            'resets to origin---------------------
1610        FOR I=1 TO 100              'creates slight pause between plots---
1620        NEXT I
1630   NEXT N
1640 LINE -(422.8+XC(51),97.2-YC(51)),1 'plots resultant----------------------
1650 CIRCLE (422.8+XC(51),97.2-YC(51)),7,1
1660 PSET (422.8,97.2),1
1670 LOCATE 10,1
1680 PRINT "RESULTANT IDENTIFIED"
1690 PRINT "  BY LARGE WHITE"
1700 PRINT "TERMINATOR CIRCLE AT:"
1710 PRINT
1720 PRINT "  (";X(51);",";Y(51);")"     'prints resultant rect coordinates---
1730 PRINT :PRINT :PRINT :
1740 PRINT "TO START OVER ....1"
1750 PRINT "TO REVIEW VALUES .2
1760 PRINT "EXIT .............3":PRINT
1770 PRINT " MAKE SELECTION"
1780 LOCATE 22,18:AA$=INKEY$:IF AA$="" THEN 1780
1790 IF VAL(AA$)<1 OR VAL(AA$)>3 THEN BEEP:GOTO 1780
1800 IF VAL(AA$)=1 THEN 100
1810 IF VAL(AA$)=2 THEN FOR I=1 TO 51:XC(I)=0:YC(I)=0:NEXT I:XS=0:YS=0:SCREEN 0,0,0:CLS:GOTO 640
1820 IF VAL(AA$)=3 THEN SCREEN 0,1,0:COLOR 6,0:GOTO 2150
1830 '----------------------------------help-----------------------------------
1840 GOSUB 320
1850 LOCATE 6,5:PRINT "* Up to 10 vectors may be entered in either rectangular or polar"
1860 LOCATE 7,7:PRINT "formats. You must declare the number of vectors that the program"
1870 LOCATE 8,7:PRINT "must handle and the format that you intend to use."
1880 LOCATE 10,5:PRINT "* When inputting is complete, the program first displays a tabular"
1890 LOCATE 11,7:PRINT "list of your inputs. If you used polar format, the list shows"
1900 LOCATE 12,7:PRINT "your inputs in both polar and rectangular form. The resultant"
1910 LOCATE 13,7:PRINT "of all input vectors is shown in both formats."
1920 LOCATE 15,5:PRINT "* Pressing any key after the tabular display will clear the screen"
1930 LOCATE 16,7:PRINT "and present a plot of your input vectors and their resultant."
1940 LOCATE 18,5:PRINT "* The vector plot is autoscaled to insure that all vectors will"
1950 LOCATE 19,7:PRINT "fit on the plot field."
1960 LOCATE 21,2:PRINT "PRESS ANY KEY TO CONTINUE"
1970 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 1970
1980 IF K$="Q" OR K$="q" THEN 2150
1990 GOSUB 340
2000 LOCATE 6,5:PRINT "* The largest X or Y value (including the resultant) is used to"
2010 LOCATE 7,7:PRINT "scale both the X and Y axis. The value of the largest X or Y value"
2020 LOCATE 8,7:PRINT "defines the value of both the X and Y axis. The value is displayed."
2030 LOCATE 10,5:PRINT "* The coordinates of the resultant vector are listed and the"
2040 LOCATE 11,7:PRINT "plotted resultant can be distinguished from the input vectors by"
2050 LOCATE 12,7:PRINT "the large terminator circle at its end point."
2060 LOCATE 14,5:PRINT "* Vector lengths (including the resultant) are limited to four"
2070 LOCATE 15,7:PRINT "digits to the left of the decimal point and four decimal places."
2080 LOCATE 17,5:PRINT "* A comma error will result in a 'REDO FROM START' message. Simply"
2090 LOCATE 18,7:PRINT "reenter, using correct syntax, at the currrent cursor position."
2100 LOCATE 21,2:PRINT "PRESS ANY KEY TO START"
2110 LOCATE 21,27:K$=INKEY$:IF K$="" THEN 2110
2120 IF K$="Q" OR K$="q" THEN 2150
2130 GOSUB 340:GOTO 350
2140 '-----------------------------------quit---------------------------------
2150 CLS
2160 LOCATE 8,25:PRINT "RESTART THIS PROGRAM --------------1"
2170 LOCATE 10,25:PRINT "RETURN TO PLOT MENU ---------------2"
2180 LOCATE 12,25:PRINT "QUIT ------------------------------3"
2190 LOCATE 17,30:PRINT "MAKE SELECTION"
2200 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 2200
2210 QT=VAL(Q$)
2220 IF QT<1 OR QT>3 THEN BEEP:GOTO 2200
2230 IF QT=1 THEN 100
2240 IF QT=2 THEN RUN "PLOTM"
2250 IF QT=3 THEN CLS:CHAIN "PLIC
2260 BEEP:GOTO 2200
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0978

     Volume in drive A has no label
     Directory of A:\

    !READ    ME        714   9-08-87  10:12a
    AR-REORD DBF      1024   5-25-84   1:38a
    BIGBMW   TXT     28696   1-01-80   1:14a
    FIXER    EXE     61590   7-29-87   2:20p
    BUDG     PRN     11547   1-01-80   5:22a
    STRIPPER EXE     10866   9-13-87   7:58p
    BREAKER  EXE     51900   8-21-87   5:13p
    ASCEDIT  @@@      1951   7-29-87   8:28p
    IQBUILD  BAS      4608   5-17-85   7:52p
    SPECIAL  DOC      2048   2-27-85  10:52a
    HELP     ASC      6105   1-01-80  12:46a
    TESTMAIL DBF      2048
    EGABLANK COM       256   6-16-87   7:45p
    MMAKE    EXE     21231   5-12-88   4:22p
    MMAKE    DOC     28292   5-12-88   4:20p
    DESCRIPT          1121   8-12-87  10:37p
    HLP3     BAS     11303   5-11-87   1:55p
    README   DOC     12398   5-22-87  10:24a
    IPLOT    BAS     10937   5-06-87   4:09p
    PLIC     BAS      1310   5-06-87  10:59a
    PLOG     BAS      2477   5-08-87  12:02p
    PLOT     BAT        29   5-22-87  10:14a
    PLOTM    BAS      1444   5-11-87   2:02p
    PPLOT    BAS     11335   5-10-87   2:54a
    SPLOT    BAS     11215   5-11-87   1:49p
    VPLOT    BAS      8523   5-10-87   2:53a
    FILES978 TXT      3276   1-27-89   2:11p
    GO       TXT       463   6-03-88   9:19a
    GO       BAT        38  10-19-87   3:56p
    MANUALS  BAT        16   6-03-88   9:19a
           30 file(s)     308761 bytes
                           36864 bytes free
