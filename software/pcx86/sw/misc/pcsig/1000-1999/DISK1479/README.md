---
layout: page
title: "PC-SIG Diskette Library (Disk #1479)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1479/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1479"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "QIP  3 OF 4 (ALSO 1477, 1478, 1480)"

    QIP is first and foremost a wordprocessor.  If you are accustomed to
    using wordprocessors and text editors, you will find all the commands
    found in a good wordprocessor, such as marking and copying blocks,
    search and replace, etc.  A few more pleasant surprises lie in wait for
    you in the form of features such as effects. Effects gives you easy and
    flexible control of both display colors and printout fonts.
    
    QIP is also a table processor.  Create tables, graphs or lists, large
    and small, anywhere in your document.  These tables, graphs, or lists
    are managed along with your text to help you produce attractive reports,
    or to create large databases.  More than that, QIP provides many
    powerful table processing functions, ranging from the simple extract and
    sort commands, to the enormously versatile update and calculation
    commands.
    
    When you first start to use QIP, you'll probably view it as a
    wordprocessor, and experiment with its on-screen formatting, line
    drawing, color-processing, on-line help system, and printer control
    capabilities. As you start to work with tables, adding simple lists or
    charts to your reports, you'll see how all your data can be smoothly
    collated and updated.  Before very long, you'll be using the more
    powerful table processing features to generate sales summaries,
    prepare work schedules, create form letters, or update stock lists.
    Ultimately, QIP may become your best tool for the most critical task
    of all -- turning volumes of raw data into that essential element of
    modern life -- useful information.
    File Descriptions:
    
    First Disk:
    
    MANUAL   TXT  Full documentation.
    QSETUP   TXT  Setup information.
    
    Second Disk:
    
    QIP      ZIP  Main program in an archived format.
    
    Third Disk:
    
    PRINTERS TXT  Listing of printers supported by QIP.
    QPROG    V01  Contains QPL programs and macros.
    QPRTDEFS V01  Contains printer definitions.
    TEMPLATE      Function key template.
    
    Fourth Disk:
    
    PKUNZIP  EXE  Unarchiving utility.
    QSYSTEM  V01  Contains system.
    SUPPORT       Support information.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1479.TXT

{% raw %}
```
Disk No: 1479
Disk Title: QIP #3 (1477-1478-1480)
PC-SIG Version: 1.1

Program Title: QIP - The Quick Information Processor
Author Version: 1.1
Author Registration: None stated.
Special Requirements: 500K free memory, hard disk drive.  286 or faster

This is the third disk of a four disk set.  Please refer to disk
#1477 for a full program description.

File Descriptions:

PRINTERS TXT  Listing of printers supported by QIP.
QPROG    V01  Contains QPL programs and macros.
QPRTDEFS V01  Contains printer definitions.
TEMPLATE      Function key template.

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
       ╔═══════════════════════════════════════════════════════╗
       ║              >>>> Disk #1479  QIP <<<<                ║
       ╟───────────────────────────────────────────────────────╢
       ║                                                       ║
       ║       To install program to hard drive,               ║
       ║       insert disk #1 and type: INSTALL C              ║
       ║                                                       ║
       ║       To print documentation, insert disk #1          ║
       ║       and type: COPY MANUAL.TXT PRN:                  ║
       ║                                                       ║
       ╚═══════════════════════════════════════════════════════╝
```
{% endraw %}

## PRINTERS.TXT

{% raw %}
```
   Printer Name                 PRTID
-----------------------       ---------
Generic                         #0001           
                       
IBM Color Printer               #1902        
IBM Proprinter II               #1905        

Toshiba P351                    #1704             

Brother HR-10                   #2501            

C.Itoh 310                      #1106    

Diablo 620                      #1804               
                               
Epson MX-80                     #1027              

HP ThinkJet                     #1501  
HP Laser Jet                    #1550             

ITT Qume                         #22              

NEC Spinwrtr 2015               #2101      

Oki Microline 82A               #1601    

Panasonic KXP1080               #1404

Seikosha BP-5420AI              #5001       

Star NB-15                      #2604

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1479

     Volume in drive A has no label
     Directory of A:\

    FILE1479 TXT       687   9-18-89   9:30a
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       727   9-12-89  10:21a
    INSTALL  BAT       733   6-13-89   8:36a
    PRINTERS TXT       917   6-30-89   4:03p
    QPROG    V01      3072   8-18-89   2:15p
    QPRTDEFS V01    300104   7-18-89  12:49p
    TEMPLATE          1961   7-17-89   4:55p
            8 file(s)     308239 bytes
                           11264 bytes free
