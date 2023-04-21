---
layout: page
title: "PC-SIG Diskette Library (Disk #334)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0334/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0334"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "RBBS-PC 2 OF 5 (ALSO 212,621,622,2092)"

    The RBBS is the bulletin board system of choice for many IBM PC
    bulletin boards. It's a large system on four disks and supports the
    PC-SIG LIBRARY ON CD ROM.
    
    RBBS-PC's internal structure is modularized and structured. The
    program includes a File Management System for directories, additional
    file exchange protocols, support for managing subscriptions,
    configurable command letters, multiple uploads on a single command
    line, new A)nswer and V)erbose ARC list commands, and
    context-sensitive help. It also can run as a local application on a
    network, use any field or define a new field to identify callers, and
    individualize callers having the same ID. The source code is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0334.TXT

{% raw %}
```
Disk No:  334     	                                                      
Disk Title: RBBS-PC 2 of 5 (212,621,622,2092)           
PC-SIG Version: S8.3                                                    
                                                                        
Program Title: RBBS-PC                                                  
Author Version: 17.3                                                    
Author Registration: $35.00.                                            
Special Requirements: A hard drive and modem.                           
                                                                        
The RBBS is the bulletin board system of choice for many IBM PC         
bulletin boards. It is a large system on four disks and                 
supports the PC-SIG LIBRARY ON CD ROM.                                  
                                                                        
RBBS-PC's internal structure continued to become significantly more     
modularized and structured.  Major enhancements included a File         
Management System for directories, additional file exchange protocols,  
support for managing subscriptions, the ability to run as a local       
application on a network, configurable command letters, the ability to  
use any field or to define a new field to identify callers, the ability 
to individuate callers having the same ID, multiple uploads on a single 
command line, new A)nswer and V)erbose ARC list commands, and context   
sensitive help. Source code is included.                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PCKERMIT.TXT

{% raw %}
```
Additions to version PCKERMIT version 2.0

   - 19200 bps support.

   - Pop-up status window.

   - Minor Bug fixes.

Fixes in version 2.1

   - Wrote my own windowing routines to fix the interrupt
     problems in version 2.0.

```
{% endraw %}

## QMXFER.DOC

{% raw %}
```
DOC file for QMXFER 1.2

Command line parameters :

    -C       Check for a Carrier present, abort if not.
    -R       Receive the file
    -S       Send the file
    -F name  File to be send/received
    -L COMx  Use com port COM1 or COM2 (no colon)
    -B baud  Use baud rate (300/1200/2400/4800/9600)
    -P x     Protocol to use :  X = Xmodem
                                C = CRC Xmodem
                                I = Imodem
                                Y = Ymodem & 1K Xmodem
                                G = Ymodem-G

    -N nnn   Node file to show success/fail status msgs.  This file
             has the following format :
                [FILENAME]
                [Upload] or [Download]
                [x = Protocol]   (where x is X/C/I/Y/G)
                [Success] or [Fail]
                EOF
             The file will be created in the default directory with the
             name of [XFER-nnn.DEF] where nnn is 1-3 alphanumeric
             characters.

The -C and -N parameters are optional.
The -R and -S parameters are mutually exclusive (only one, but not both)



Examples:

1.  Use COM1, 1200 baud, Xmodem, Sending file TESTFILE.TXT

    QMXFER -L COM1 -B 1200 -P X -S -F TESTFILE.TXT

2.  Use COM2, 9600 Baud, Ymodem, Receiving file INFILE.DAT

    QMXFER -L COM2 -B 9600 -P Y -R -F INFILE.DAT






Many of the RBBS-PC Sysops have requested that you be able to modify the
colors used by QMXFER.  There is now a patch area in the code to change the
colors as you see fit.

Directions:

First, copy the QMXFER.COM to QMX.COM so you are not working with the
original code.

Then enter the following:

DEBUG QMX.COM
-D 2D70<cr>
4420:2D70  08 43 4F 4C 4F 52 53 20-3E 07 01 07 07 01 3C 1A   .COLORS >.....<.
(rest of the lines are not important)
                  .
                  .
                  .
                  .

Now, the bytes between the > and < are the colors used by QMXFER.

Change them and do a W to save the changes.

    Byte1 (2D79)  Window Frame Foreground (0-15)
    Byte2 (2D7A)  Window Frame Background (0-7 )
    Byte3 (2D7B)  Inner Window Highlight  (0-15)
    Byte4 (2D7C)  Inner Window Normal     (0-15)
    Byte5 (2D7D)  Inner Window Background (0-7 )



This is a preliminary DOC file that will get expanded in the final
release.   It is now in release 1.1 and the file has still not been
expanded.  It you need more information on the protocols, please get a
copy of the QMODEM SST 3.0 DOC file.

John Friel III
The Forbin Project Inc.
PO BOX 702
Cedar Falls, IA  50613
319-232-4516 (voice 10am - 6pm)


Revision History:

1.0 - First Release for RBBS-PC.


1.1 - Fixes:

      Removed the "Press any key to continue" when it encountered an
      error.  This resulted in hung BBS systems and thats a NO-NO!

      Added the Patch area to set colors for the Sysops preferences.


1.2 - Fixes:

      Fixed a potential problem with filesizes where the code would
      abort on 0 byte files.  There was a potential I/O Error in the
      same block of code that would generate an error at address
      $330A.

      Added Errorlevel return codes if the command line is incorrect
      and these can be tested by the DOS ERRORLEVEL command in BATCH
      files.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0334

     Volume in drive A has no label
     Directory of A:\

    RBBS-DOC ZIP    269542   2-13-90  11:29p
    RBBS-EXT ZIP     68256   2-13-90  11:30p
    GO       TXT      1002   3-16-90  12:21p
    GO       BAT        38  10-19-87   3:56p
    FILE0334 TXT      2058   3-19-90   6:48p
            5 file(s)     340896 bytes
                           18432 bytes free
