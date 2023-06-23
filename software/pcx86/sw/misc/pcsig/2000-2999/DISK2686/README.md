---
layout: page
title: "PC-SIG Diskette Library (Disk #2686)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2686/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2686"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2686.TXT

{% raw %}
```
Disk No: 2686                                                           
Disk Title: IN-CONTROL 3/4 also 687,688,& 2687                          
PC-SIG Version: S4.0                                                    
                                                                        
Program Title: IN-CONTROL                                               
Author Version: 4.0                                                     
Author Registration: $99.00                                             
Special Requirements: 512K free RAM. Hard drive recommended.            
                                                                        
IN-CONTROL is a well-rounded business prospect/contacts and activity-   
tracking system. It provides a Rolodex, activities list, management     
reports, expense reports and an appointments tickler.                   
                                                                        
Everything is on-line with fast search capabilities.  You get 60 on-    
line help screens, and has a unique built in zip code\area cross referen
feature.  The Rolodex features names, addresses and notations retrieval 
and a graphic ``layer-in'' ability which lets you temporarily merge mail
lists. In addition, it is network-ready.  The system also includes:     
appointments tracking, expenses, graphics, free-form data search,       
labels management and reports.  A built-in telephone dialing system     
uses your modem and frees your phone for incoming calls.  A built-in    
proposal and invoice generator is provided.  The program standardizes   
your prospecting and follow-up information and converts forgotten       
verbal commitments into a focused daily list of appointments and        
callbacks that nets you extra business.                                 
                                                                        
IN-CONTROL requires registration after you have placed 50 records in    
the Prospect file.  If not registered, this program will lock you out   
from access to the program, though the data files are always intact.    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GOPATH.TXT

{% raw %}
```
ECHO OFF
CLS
C:
CD \PROSPECT
CLS
IF NOT EXIST GOPATH.TXT GOTO CONTINUE >TMP
CLS
SET PATH=
DEL GOPATH.TXT >TMP
:CONTINUE
CLS
SET CLIPPER= v018;r050;e000;
SET PROMPT=$p$g
COPY GO.BAT MARKER.TXT >TMP
COPY GO.BAT C:\GO.BAT >TMP
COPY GO.BAT \ >TMP
PROSPECT %1
IF EXIST BACKUP.BAT BACKUP
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2686

     Volume in drive A has no label
     Directory of A:\

    SALE-D40 ZIP    186110   5-29-91   4:41p
    PKUNZIP  EXE     21440   7-21-89   1:01a
    GO3      BAT      3200   5-28-91  10:22a
    INSTALL3 BAT      1920   5-16-91  12:28p
    ECOH     COM        96   5-23-88  12:30p
    INPUT    COM        49   5-19-88   2:05a
    YESNO    COM        54   5-21-88   6:50p
    FILE2686 TXT      2591   7-18-91  11:32a
            8 file(s)     215460 bytes
                          102400 bytes free
