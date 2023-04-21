---
layout: page
title: "PC-SIG Diskette Library (Disk #493)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0493/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0493"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISK DRIVE-IN THEATER (VCR DBASE)"

    Here's the answer for anyone who needs a simple, structured way to keep
    track of all the movies and tapes they own.
    
    DISK DRIVE-IN THEATER has an ergonomic and efficient data-input screen
    (one of the easiest anywhere), and a wealth of reports and searches, all
    of which are accessible within three keystrokes.  Search by title, star,
    movie type, tape number, and retrieve data such as remaining room on
    tape.  Print two differently configured labels for your tape library.
    With all these features and a database controller faster than most, it
    is a clearly superior video library manager.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILELIST.TXT

{% raw %}
```
Disk Drive-In Theater File List			Description
						--------------------------
DTHEATER COM    62700   4-08-88   1:01a		Executible program of DDIT
DTHEATER 000     8448   4-09-88   8:00p		Overlay file for above
IMPORT   CHN    37649   4-09-88   8:01p		IMPORT section chain file
DTCNFG   CHN    11165   4-09-88   8:01p		CONFIG section chain file
VDB_EXPT COM    13302   6-30-87   9:26p		Conversion program
VDB_EXPT DOC      512   6-30-87  12:06a		Dox for conversion program
STBATBK  BAT       87   6-14-87   3:02a		Batch file for HD install
STBAT__  BAT       49   6-14-87   2:59a		Batch file for HD install
INSTALL  BAT      744   7-07-87   7:33p		Installation batch program
SAMPLE   SDF     1603   6-30-87  12:12a		Sample sequential data file
CONFIG   DT        95   7-26-87   1:17a		DDIT configuration data
INST     COM    12908   4-09-88   8:02p		Part of Installation proc.
MANUAL   COM    12709   4-09-88   8:30p		Program used to view manual
MNL      DTA    83592   4-09-88  11:12p		Raw data of Manual
CATAGORY DDF       21   4-09-88  11:16p		Catagory Data Dictionary File
DT       DAT      176   4-09-88  11:17p		Raw movie data file
TL       INX      843   4-09-88  11:17p		Title Index file
TP       INX      339   4-09-88  11:17p		Tape Index file
README            585   4-11-88   9:13p		Instructions on how to start
GO       BAT       16   4-11-88   9:13p		Batch file to read readme
FILELIST TXT        0   4-11-88   9:14p		This file.
       21 File(s)    102400 bytes free
```
{% endraw %}

## FILES493.TXT

{% raw %}
```
Disk No:  493                                                           
Disk Title: Disk Drive-In Theater (vcr dbase)                           
PC-SIG Version: S2.1                                                    
                                                                        
Program Title: Disk Drive-In Theater                                    
Author Version: 1.0                                                     
Author Registration: $15.00.                                            
Special Requirements: Printer recommended.                              
                                                                        
Here's the answer for anyone who needs a simple, structured way to keep 
track of all the movies and tapes they own.                             
                                                                        
Enter your information into one of the easiest data-input screens       
around.  Define, recall, and search by title, star, movie type, tape    
number, stereo(?), remaining room on tape, and more.  The database      
controller is faster than usual, making VCRDBASE very responsive.  Print
two differently configured labels for your tape library.                
                                                                        
You know you have ``The Maltese Falcon.''  Now you'll be able to        
find it!                                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## VDB_EXPT.DOC

{% raw %}
```

	VCRDBASE to DISK DRIVE IN THEATER Conversion Utility  


Have the file DATAFILE.DAT ready on the default drive when you run this
program.  It will read all possible information from each record, and then
ask you if you want to change the title, specify a sub-title, enter the
category, and a few more items.  Most prompts are single key values.  

Experiment with the program.  It will create a file called VCRDBASE.SDF.  
specify this filename when using the Disk Drive-In Theater import section.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0493

     Volume in drive A has no label
     Directory of A:\

    CATAGORY DDF        21   4-09-88  11:16p
    CONFIG   DT         95   7-26-87   1:17a
    DT       DAT       176  11-14-89   9:10a
    DTCNFG   CHN     11165   4-09-88   8:01p
    DTHEATER 000      8448   2-26-89   9:08p
    DTHEATER COM     63051   2-26-89   9:08p
    FILELIST TXT      1506   4-11-88   9:18p
    FILES493 TXT      1925   3-21-90   5:57p
    GO       BAT        16   4-11-88   9:13p
    IMPORT   CHN     37661   7-24-88   9:41p
    INST     COM     12908   4-09-88   8:02p
    INSTALL  BAT       744   7-07-87   7:33p
    MANUAL   COM     12709   4-09-88   8:30p
    MNL      DTA     83592  11-27-89   2:15p
    README             585   4-11-88   9:13p
    SAMPLE   SDF      1603   6-30-87  12:12a
    STBATBK  BAT        87   6-14-87   3:02a
    STBAT__  BAT        49   6-14-87   2:59a
    TL       INX       843  11-14-89   9:10a
    TP       INX       339  11-14-89   9:10a
    VDB_EXPT COM     13302   6-30-87   9:26p
    VDB_EXPT DOC       512   6-30-87  12:06a
           22 file(s)     251337 bytes
                           59392 bytes free
