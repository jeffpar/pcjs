---
layout: page
title: "PC-SIG Diskette Library (Disk #1866)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1866/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1866"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LABEL UTILITIES"

    A pair of programs that will take some of the headaches out of label-
    making.
    
    LABELIT is for printing duplicate labels on any kind of printer that
    accepts label forms.  This program is direct and simple.  It can print
    any number of labels with the same information such as company names,
    return addresses, diskette labels, etc.  These labels can be up to 12
    lines of text and LABELIT will center or left-justify each label if
    desired.  Print one-up or two-up and LABELIT accepts printer control
    codes for custom effects.  The labels can always be re-used since
    LABELIT will save these custom formats to disk.
    
    BAKLABEL does one thing -- it prints sequentially numbered and dated
    labels for the diskettes used in backing up hard disks.  The user
    selects the number of labels, a title line, and the name of the drive
    being backed up.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
BAKLABEL does one thing....print sequentially numbered and dated 
labels for diskettes used in backing up hard disks.  The user 
selects the number of labels, a title line, and the name of the 
drive being backed up.

Files on the BAKLABEL Disk

BAKLABEL  ARC   Archived version for BBSes
BAKLABEL  EXE   BakLabel Program file
MANUAL    COM   Self-browsing documentation
FILES     TXT   This file
```
{% endraw %}

## FILE1866.TXT

{% raw %}
```
Disk No: 1866                                                           
Disk Title: Label Utilities                                             
PC-SIG Version: S1                                                      
                                                                        
Program Title: Label Utilities                                          
Author Version: 1.0                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
A pair of programs that will take some of the headaches out of label-   
making.                                                                 
                                                                        
LABELIT is for printing duplicate labels on any kind of printer         
that accepts label forms.                                               
                                                                        
This program is direct and simple.  It can print any number of labels   
with the same information such as company names, return addresses,      
diskette labels, etc.  These labels can be up to 12 lines of text and   
LABELIT will center or left-justify each label if desired.  Print one-up
or two-up and LABELIT accepts printer control codes for custom effects. 
The labels can always be re-used since LABELIT will save these custom   
formats to disk.                                                        
                                                                        
BAKLABEL does one thing . . . it prints sequentially numbered and dated 
labels for the diskettes used in backing up hard disks.  The user       
selects the number of labels, a title line and the name of the drive    
being backed up.                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
LABELIT is a program designed to print multiple labels, such as return 
address labels.  It saves label files, label formats, and includes 
screen color setting and special printer control codes.  Shareware fee:
$15.


Files on the LABELIT disk:

LABELIT ARC   Archived version for BBSes
LABELIT EXE   Main program file
MANUAL  COM   Self-browsing documentation.
3-UP    DES   Sample label definition file.
AUTHOR  LAB   Sample label file.
FILES   TXT   This File
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1866

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   1-01-80   1:37a
    FILE1866 TXT      2443  12-22-89   2:47p
    GO       TXT       848   1-01-80   2:05a
    3-UP     DES        17  11-11-88   2:58p
    AUTHOR   LAB        77  11-02-88   1:35p
    LABELIT  EXE    104130  11-11-88   2:41p
    MANUAL   COM     11501  11-23-88  12:57a
    LABELIT  ARC     77511  11-23-88   1:04a
    BAKLABEL EXE     38186  11-23-88   1:24a
    MANUAL~1 COM      2048  11-23-88   1:24a
    BAKLABEL ARC     33740  11-23-88   1:25a
           11 file(s)     270539 bytes
                           46080 bytes free
