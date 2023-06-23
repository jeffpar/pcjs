---
layout: page
title: "PC-SIG Diskette Library (Disk #1669)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1669/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1669"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORLD TIME"

    Need to know the time in London, Beijing or Bangkok?  WORLD
    TIME can tell the time in 100 cities across the 24 world time
    zones.
    
    WORLD TIME is fun for the curious and a must for international
    businessmen who want to avoid miscalculations that might result in
    embarassing overseas phone calls or faxes.  WORLD TIME is simple
    to use:  just type "WT" and the city name at the DOS prompt, and
    the local and international time appear on screen.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1669.TXT

{% raw %}
```
Disk No: 1669                                                           
Disk Title: World Time                                                  
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: World Time                                               
Author Version: 1.22                                                    
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
Need to know the time in London, Beijing or Bangkok?  WORLD             
TIME can tell the time in 100 cities across the 24 world time           
zones.                                                                  
                                                                        
WORLD TIME is fun for the curious and a must for international          
businessmen who want to avoid miscalculations that might result in      
embarassing overseas phone calls or faxes.  WORLD TIME is simple        
to use:  just type "WT" and the city name at the DOS prompt, and        
the local and international time appear on screen.                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1669  WORLD TIME  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  WT (press enter)                               ║
║                                                                         ║
║ To print documentation, type:  COPY WTHIST.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## PC-SIG.DOC

{% raw %}
```

Program Title: World Time 

Detailed Program Description:

	This program will tell you the the local time in 100 cities
throughout the 24 world time zones.

Who is the intended user:

	Anyone who needs to make a phone call to a city in a different
time zone, or arrange a meeting, or arrange travel arrangements.  In short,
anyone who needs to know what time it is now in Abu Dhabi, for example.

Improvements over old version:

1.2	June 1989	Corrected spelling errors; corrected wording of daylight
			savings time message; made options case insensitive;
			updated author's address; adjusted screens for 
			color; added daylight savings for Cairo

1.21   September 1989	Beijing daylight savings not extended through 9/12

1.22  Febuary 1990      Corrected daylight savings for Adelaide

Unique features of program:

	Easy to use; time reported is always in human form, e.g. 9:30p
instead of 21:30 (although, military time is also supported.); No codes to
remember, cities are refered to by name.  Automatic adjustment for
daylight savings time.

Program's limits:

	Program is limited to 100 supported cities. There are no features
that come only with registration.

Special System Requirements: None
How to start program: Type wt at command line
Registration Fee: $10.00
Materials or services that come with registration: Free updates

List of program files:

WT.EXE	executable (help screens are included within this file)
WT.DAT	holds name of local city (ascii file) will be created if not
	present by WT.EXE
READ.ME comments about wt and DOS path command
WTHIST.DOC version history
```
{% endraw %}

## WTHIST.DOC

{% raw %}
```

VER	DATE

1.0	Mar 1989

1.1	May 1989	Corrected Houston's time zone 

1.2	June 1989	Corrected spelling errors; corrected wording of daylight
			savings time message; made options case insensitive;
			updated author's address; adjusted screens for 
			color; added daylight savings for Cairo

1.21   September 1989	Beijing daylight savings not extended through 9/12

1.22  Febuary 1990      Corrected daylight savings for Adelaide
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1669

     Volume in drive A has no label
     Directory of A:\

    PC-SIG   DOC      1638   6-06-90   9:43p
    READ     ME       1038   5-26-90   9:29a
    WT       EXE     63521   3-04-90   5:53p
    WTHIST   DOC       443   2-07-90   8:00p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       575   7-10-90   2:08a
    FILE1669 TXT      1777   7-10-90   2:28p
            7 file(s)      69030 bytes
                           88576 bytes free
