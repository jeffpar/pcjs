---
layout: page
title: "PC-SIG Diskette Library (Disk #496)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0496/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0496"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORLD DIGITIZED 3 OF 3 (ALSO 494, 495)"

    The WORLD DIGITIZED is a compilation of more than 100,000 points of
    latitude and longitude that form the outlines of the entire world's
    coastlands, islands, lakes, and national boundaries in great detail.
    
    The data is organized by continent.  Disk 494 is required to expand the
    data to ASCII and also contains Africa, Antarctica, Australia, and South
    America.  Disk 495 contains Asia and Europe.  496 contains North
    America
    and Greenland.
    
    As distributed it is a pure database and has no programs to display the
    data.  The basic display disk is made available to those who register.
    It contains two display programs:  a user-modifiable BASIC version and a
    more advanced windowing version written in C and requiring a mouse.  It
    also contains programs to reduce the number of data points and to
    transform the data for Mercator projection.
    
    It really is a small world and now you can have it all.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COPYRITE.TXT

{% raw %}
```
			     The World Digitized
copyrite.txt
vs 1.3								April 1987
	
	
	
	If  you  have  obtained  The  World Digitized from a share-ware 
	organization or from a friend, you are encouraged  to  register 
	it by sending $12 to
	
			The World Digitized
			Basic Display Disk, Dept PC-SIG
			166 Shady Lane
			Apollo, PA  15613
	
	You  will  be sent the latest version of The Basic Display Disk 
	including
	
		display program in BASIC
	
		IEEE double floating format to MS (BASIC) format routine
	
		program to reduce detail of map files
	
		program to convert ASCII map  files  (.mp1)  to  binary 
		Mercator projection format (.mp2)
	
	and  will be placed on a list to receive news of updates and of 
	any new products.

	
	Additionally, those who are really  into  C  language  graphics 
	programming  can  obtain  the  source  of
	
		The Simple Display Program (Tutorial I - V)
	
		an Alaska demo

		program to reduce detail of map files (Tutorial XV)
	
		program to convert .mp1 files to .mp2 format
	
	by sending $19 to
	
			The World Digitized
			C Source Disk, Dept PC-SIG
			166 Shady Lane
			Apollo, PA  15613
	
	Unfortunately executable versions of the  C  language  graphics 
	programs are not included because of sub-licensing restrictions.
	

	The World Digitized and its derivatives are Copyright  1986  by 
	John  B. Allison.  Permission for non-commercial duplication is 
	granted provided that the file bearing this copyright notice is 
	included  with  each  copy.   Prior  written permission must be 
	obtained  for  the  commericial  distribution  of   The   World 
	Digitized.

		
	Commericial  license  for  The  World  Digitized  data embedded 
	within your own application is reasonably priced.
```
{% endraw %}

## FILES496.TXT

{% raw %}
```
Disk No  #496
Program Title: The World Digitized version 1.3 (disk 3 of 3)
PC-SIG version 1.4
 
The World Digitized is a collection of more than 100,000 points of latitude and
longitude. When connected together, these co-ordinates form outlines of the
entire world's coastlands, islands, lakes, and national boundaries in surprising
detail.
 
The World Digitized is a pure data base and as such contains no programs to
display the data. Because many would like a starter display program to customize
with their own ideas, The World Digitized Basic Display Disk is made available
to those who register their copy of The World Digitized. (See the REGSTRTN.LTR
file.)
 
Usage: database
 
System Requirements: IBM PC or close compatible, 1 floppy drive, 1 hard drive,
                     Dos 2.0 or later.
 
Suggested Registration: $19.00
 
File Descriptions:
 
COPYRITE TXT  Copyright notice
NORTHAME<DIR> Northern hemisphere data directory
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0496

     Volume in drive A has no label
     Directory of A:\

    COPYRITE TXT      1781   4-23-87   8:20p
    FILES496 TXT      1066   6-09-24   2:22p
    NA0      MPS     69492   1-16-86   8:56p
    NA1      MPS    156264   1-16-86   9:09p
    NA2      MPS     27571   1-16-86   9:12p
    NA3      MPS      3244   1-16-86   9:12p
    USA0     MPS     13594   1-16-86   9:13p
    USA1     MPS      2042   1-16-86   9:14p
    GR0      MPS     48423   1-16-86   9:18p
    GR1      MPS     19060   1-16-86   9:20p
    PA1      MPS      9221   1-16-86   9:21p
           11 file(s)     351758 bytes
                            5120 bytes free
