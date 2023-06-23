---
layout: page
title: "PC-SIG Diskette Library (Disk #717)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0717/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0717"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LIGHTWAVE COMMUNICATIONS"

    SUPERCOM is a standard asynchronous communications package, letting you
    communicate with other computers and transfer files over the phone
    lines.  This is a simple, direct package for someone who doesn't need
    to bother with a lot of fancy features.
    
    An electronic phone dialer that maintains a list of names and phone
    numbers.  Look through an unlimited number of names and instantly dial
    the correct phone number associated with the name you select. It's
    assumed that you're already using a modem and communications package.
    DIALER lets you interact and talk on a BBS, but does not support the
    uploading or downloading of files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHECK.TXT

{% raw %}
```
         
         You can test your copy of the distribution diskette, to make 
         sure the copy is accurate, by entering the command CHECK *.* 
         at the DOS prompt.  The output should look like this: 


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  READ    .ME          CRC = 7E 84

--> FILE:  MANUAL  .            CRC = 02 3E

--> FILE:  SUPERCOM.COM         CRC = 38 3C

--> FILE:  DIAL    .COM         CRC = 6C 0B

--> FILE:  DIALADD .COM         CRC = ED 34

--> FILE:  DIALDEL .COM         CRC = 5F 8E

--> FILE:  DIALSHOW.COM         CRC = AA 17

--> FILE:  SUPPORT .            CRC = B4 81

--> FILE:  CHECK   .COM         CRC = BD 22

--> FILE:  CHECK   .TXT         CRC = 19 E2

 ---------------------> SUM OF CRCS = A7 67

DONE         
         

         Note: the CRC for CHECK.TXT will be incorrect as will be the 
         total, because you cannot write a file's CRC to the file 
         without altering the CRC of that file.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0717

     Volume in drive A has no label
     Directory of A:\

    CHECK    COM      1536  10-21-82   5:50p
    CHECK    TXT      1021  10-23-86   1:59a
    DIAL     COM     14245  10-23-86   1:17a
    DIALADD  COM     12267  10-23-86   1:17a
    DIALDEL  COM     12631  10-23-86   1:17a
    DIALSHOW COM     11726  10-23-86   1:17a
    MANUAL           35463  10-23-86   1:23a
    READ     ME       3159  10-23-86   1:55a
    SUPERCOM COM     31243  10-19-86   2:10a
    SUPPORT           2289  10-23-86   1:56a
           10 file(s)     125580 bytes
                           32768 bytes free
