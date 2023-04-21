---
layout: page
title: "PC-SIG Diskette Library (Disk #2573)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2573/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2573"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2573.TXT

{% raw %}
```
Disk No: 2573                                                           
Disk Title: The Last Half of Darkness (CGA)                             
PC-SIG Version: S1                                                      
                                                                        
Program Title: The Last Half of Darkness (CGA)                          
Author Version: 1.0                                                     
Author Registration: $20.00                                             
Special Requirements: CGA, and LHARC archiving utility.                 
                                                                        
Do you like graphic adventure games with sharp pictures, mouse          
support, save and restore game functions, and spine-shivering puzzles   
to solve?  Then THE LAST HALF OF DARKNESS is for you!                   
                                                                        
When the game starts, you find yourself in front of your recently       
deceased aunt's mansion.  In order to gain the title to her fortune and 
estate, you must find the ingredients to a potion she was working on    
before she was killed.  It won't be easy as there are many strange      
denizens in the old mansion. Some will help you in your quest, while    
others would just as soon finish you off!                               
                                                                        
Choose one of the listed commands with either the keyboard or mouse.    
Use speaker sound or Covox's Speech Thing.  Examine everything, take    
what you can, and don't forget to save your game before you do          
anything dangerous which, in this game, can be a frequent thing.        
                                                                        
What are you waiting for?  Dust those cobwebs off your trusty old map   
notebook and take a journey to THE LAST HALF OF DARKNESS!               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
To install the game onto your system, simply type in one of the following
configurations at the DOS A> prompt.

HARDDISK.BAT    Extracts the entire game library onto your harddisk.
TWO360K .BAT    Two 360k floppy drive system. (Extracts onto THREE disks)
TWO720K .BAT    Two 720k 3 1/2 inch drive system (Extracts onto TWO disks)
		This selection can also be PLAYED on a ONE 720k drive
		system. (If you can extract it using a TWO drive system)

		NOTE: Use this selection if you have ONE 5 1/4 and ONE 3 1/2
		      inch drive. The ORIGINAL disk must be in the 5 1/4 inch
		      drive. (see your DOS manual on how to use the COPY
		      command if your ORIGINAL disk is on a 3 1/2 inch disk)

HIGHDEN .BAT    Any drive AND a HIGH DENSITY drive. (Extracts onto ONE 1.2K
		or ONE 1.44k high density drive)

Be sure to have the required amount of BLANK FORMATTED diskettes before
typing in the selection.

ALL above selections use a special format: "HARDDISK A: C:"
Where "A:" is  the drive from which DISK A is located and "C:" is the drive
where the library will be extracted to.

```
{% endraw %}

## INSTALL2.DOC

{% raw %}
```
IMPORTANT!

If you are using a 5 1/4 and a 3 1/2 inch drive system, then during the
CGASETUP procedure, you must select the 3 1/2 inch drive letter for BOTH
diskettes. EXAMPLE:

Select which drive to be used for DISK A: A
Select which drive to be used for DISK B and C (Select A if harddisk): A


Drive A (in this example) was a 3 1/2 inch drive.


INSTRUCTIONS on how to play the game will be on DISK C after the game has
been extracted. To read, simply place DISK C into the current drive and type
in: TYPE INSTRUCT.DOC


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2573

     Volume in drive A has no label
     Directory of A:\

    DISKA    LZH    135062   1-01-80  12:31a
    DISKB    LZH     93529   1-01-80   1:18a
    DISKC    LZH     86033   1-01-80  12:14a
    LHARC    EXE     31256   5-31-89  11:38a
    INSTALL  DOC      1107   1-01-80  12:20a
    HARDDISK BAT       609   1-01-80  12:10a
    TWO360K  BAT      1008   1-01-80  12:10a
    TWO720K  BAT       912   1-01-80  12:12a
    HIGHDEN  BAT       766   1-01-80  12:12a
    INSTALL2 DOC       542   1-01-80  12:20a
    START    BAT        59   1-01-80  12:18a
    GO       BAT        21   2-24-91   7:33p
    FILE2573 TXT      2443   3-18-91  11:04a
           13 file(s)     353347 bytes
                            2048 bytes free
