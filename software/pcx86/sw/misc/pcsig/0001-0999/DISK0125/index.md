---
layout: page
title: "PC-SIG Library Disk #125"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0125/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0125"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "HOST-III PUBLIC BBS"

    The HOST-III communications package, while designed for private
    remote-to-host type file transfers, can be used as a public BBS.
    HOST-III automates the RECEIVE end of any file transfer, allowing
    unattended operation of the host.  HOSTCALL automates unattended file
    transfers for late-night, low-rate use.
    
    HOSTCALL can also initiate telephone calls to host computers (such as an
    IBM-PC running HOST-III) and exchange files based on the commands in
    what is called a Command File.  The host computer may or may not be an
    IBM-PC.  You create the Command File which contains the information
    HOSTCALL needs, such as the time to call a host system, the telephone
    number, and the names of the files to exchange.  A single COMMAND FILE
    can sequentially access a number of host computers.  Both programs
    support the XMODEM protocol of file transmission.
    
    While this is an older program and does not have some of the features of
    the more up-to-date models, is is also considerably less complicated to
    set up.
    
    Special Requirements:  Two disk drives and Hayes Smartmodem or
    equivalent.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $35.00
    
    File Descriptions:
    
    CS-NEW        Text file
    HOST-III DOC  Documentation for HOST-III
    HOST-III EXE  Program that receives telephone calls
    HOSTCALL BAT  Batch file that starts up HOSTCALX
    HOSTCALL DOC  Documentation for HOSTCALL
    HOSTCALX EXE  Program that initiates telephone calls...Part 1
    HOSTCL2X EXE  Program that initiates telephone calls...Part 2
    RACKET   BBS  Example of BBS SIG
    README        Information about HOST-III use & other programs available

### Directory of PC-SIG Library Disk 0125

     Volume in drive A has no label
     Directory of A:\

    HOST-III DOC     32512   5-28-85   9:39a
    HOSTCALL DOC     78631  12-27-83   5:47p
    HOST-III EXE     52864   5-28-85   9:32a
    HOSTCALX EXE     44032  12-25-83   3:30a
    HOSTCL2X EXE     63104  12-25-83   3:35a
    HOSTCALL BAT        11  12-27-83   9:51p
    CS-NEW           10331   1-15-84  10:19p
    RACKET   BBS     14431   1-15-84  10:07p
    README            4224   1-15-84  10:25p
    FILES125 TXT      1707   1-24-89   3:43p
    GO       BAT        38   1-11-89   1:55p
    GO       TXT       540   1-24-89   3:43p
    MANUAL   BAT       147   1-24-89   3:43p
           13 file(s)     302572 bytes
                           12288 bytes free
