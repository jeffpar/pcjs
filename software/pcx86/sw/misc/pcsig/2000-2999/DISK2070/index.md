---
layout: page
title: "PC-SIG Diskette Library (Disk #2070)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2070/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2070"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MODEL-S DISK 1 OF 2 (2071 ALSO)"

    MODEL-S is a CASE tool for developing database applications.  This is a
    quality product that can rival any commercial package in its class.  In
    fact, our research indicates that MODEL-S is unique in its design and
    functionality.
    
    MODEL-S is a powerful piece of software that automates the development
    process yet does not require data processing expertise.  It utilizes the
    rapid prototyping approach to application development, integrated with
    automatic generation of the dBASE III Plus programs and data files (.PRG
    and .DBF).
    
    MODEL-S was designed to enable end users and data processing
    professionals to engage in a true joint application development, which
    promotes active participation of both in most aspects of the development
    process.  It helps producing systems on time, within budget, and with
    complete user satisfaction -- all that at a fraction of the traditional
    development cost.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2070.TXT

{% raw %}
```
Disk No: 2070                                                           
Disk Title: Model-S disk 1 of 2 (2071 also)                             
PC-SIG Version: S1                                                      
                                                                        
Program Title: MODEL-S                                                  
Author Version: 2.0                                                     
Author Registration: $99.00                                             
Special Requirements: None.                                             
                                                                        
MODEL-S is a CASE tool for developing data base applications. This is a 
quality product that can rival any commercial package in its class. In  
fact, our research indicates that MODEL-S is unique in its design and   
functionality.                                                          
                                                                        
MODEL-S is a powerful software that automates the development process   
yet does not require data processing expertise. It utilizes the rapid   
prototyping approach to application development, integrated with        
automatic generation of the dBASE III Plus programs and data files (.PRG
and .DBF).                                                              
                                                                        
MODEL-S was designed to enable end users and data processing            
professionals to engage in a true Joint Application Development, which  
promotes active participation of both in most aspects of the development
process. It helps producing systems on time, within budget, and with    
complete user satisfaction - all that at an insignificant fraction of   
the traditional development cost.                                       
                                                                        
                                                                        
                                                                        
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
║        <<<<  Disk #2070  MODEL-S disk 1 of 2 (2071 also)  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install program onto hard drive, type:  INSTALL (press enter)        ║
║ To start program, type:  MDS (press enter)                              ║
║                                                                         ║
║ To print documentation, type:  COPY READ-ME.DOC PRN                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## READ-ME.DOC

{% raw %}
```
                         ------------------------------
                         |         PC SYSTEMS         |
                         |                            |
                         |     307 Barwynne Lane      |
                         |     Wynnewood, PA 19151    |
                         |        (215)649-8981       |
                         ------------------------------



                                  M O D E L - S


                         Application Development System

                                  - Modeling -
                         - dBASE Application Generator -




                       COPYRIGHT (C) 1987,1988 PC SYSTEMS

                              ALL RIGHTS RESERVED
===============================================================================

                      ABOUT SHAREWARE VERSION OF MODEL-S
                      ----------------------------------

     MODEL-S  is  a front- and back-end  CASE  tool for  developing  data  base
applications.  This is a quality product  that can rival any commercial package
in its class.  In fact,  our research  indicates that  MODEL-S is unique in its
design and functionality.

     MODEL-S  program  is  distributed  in  two  forms:  SHAREWARE  DISKS  and
REGISTERED  DISKS.  The SHAREWARE DISKS are to be used for evaluation.  This is
not public domain software. The programs and documentation are copyrighted, and
may be used for  free only  under  limited  provisions.  Once you evaluate this
SHAREWARE program  and decide to use it,  you are expected to buy a  REGISTERED
copy of the software, the LATEST version available.

     You  do not have to  spend  hundreds or even  thousands of dollars to have
this software, but keep in mind that only  REGISTERED USERS have the priviledge
of  the  software  support  and  access  to the latest  copies of  the product.
Registered  users will receive a copy of the latest version of MODEL-S,
150-page user manual, and a reference guide. Registration fee is only $99.00 US
payable to:

     PC-SYSTEMS, Inc., 307 Barwynne Lane, Wynnewood, PA 19151, USA.

Outside of the U.S. and Canada, please add $10 for shipping and handling.

     As a registered user, you can take  advantage of our  PROMOTIONAL program.
If you find this software to be of a good quality and value,  tell your friends
and associates about it and be sure to send us  their  names and  addresses. We
will send them the information,  and if they will order  MODEL-S  directly from
PC-SYSTEMS, then  YOU will get  $25.00  BONUS from  PC-SYSTEMS.  Checks will be
issued monthly starting January 1, 1989.


     Without your support, further development of MODEL-S will not be possible.
If  MODEL-S meets your needs,  we urge you to register with us at your earliest
convenience.
===============================================================================

                           INSTALLATION PROCEDURE
                           ----------------------

   MODEL-S has to be installed on the hard disk. It requires 1.2Meg bytes of
free space on the disk.

1. Turn computer on. Enter date and time as required. A DOS prompt  C>  should
   be displayed.

2. We assume that your hard disk C: is formatted and that the necessary DOS
   files have been copied onto the hard disk.

3. Create directory called MODEL on the hard disk. Type

               MKDIR C:\MODEL   ,       followed by Enter key

4. Change directory to the one created above, by typing

               CHDIR  C:\MODEL  ,       followed by Enter key

5. Insert MODEL-S system diskette #1 in drive A , type

               A:INSTALL        ,       followed by Enter key

6. Follow instructions on the screen for the diskette #2.
   MODEL-S will be installed on your hard disk.

===============================================================================
||        General description, system specifications, and sample session     ||
||        will  be  found  in  file  READ-IT.DOC   in  MODEL  directory.     ||
||        We appreciate your comments and suggestions. They assist us in     ||
||        improving our products.                                            ||
===============================================================================

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2070

     Volume in drive A has no label
     Directory of A:\

    MDS1     ARC    301110  11-13-89   4:58a
    PKXARC   COM      9984   9-12-86
    INSTALL  BAT       369  10-09-89  11:42a
    FEATURES DOC     16858  10-17-89   8:27a
    READ-ME  DOC      4348  10-09-89  11:11a
    FILE2070 TXT      2517   1-29-90   3:44p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617   1-29-90   4:25p
            8 file(s)     335841 bytes
                           21504 bytes free
