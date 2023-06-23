---
layout: page
title: "PC-SIG Diskette Library (Disk #1382)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1382/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1382"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "B-CRYPT"

    A peace of mind program, B_CRYPT is a file encryption/decryption utility
    to protect your data files from unauthorized access.  Whether sensitive
    personnel files, confidential financial data, or super secret research
    information, this program prevents prying eyes from gaining access.  It
    will put the lock on any MS-DOS file structures including hidden files,
    no matter what the extension reads.
    
    You supply a password and it converts your data into an incomprehensible
    binary form based on a pseudorandom algorithm.  With a password from
    five to 32 characters in length, the chances of someone breaking the
    code file is greater than one to the 256^32.  And that assumes the
    hacker has a copy of B_CRYPT.  To complicate matters, you can encrypt a
    file more than once.
    
    With lots of documentation and screen help, the program is painless to
    use, and fast: a 17K hard disk file is processed in from 10 to 40
    seconds, depending on your PC's speed.  A RAMdisk further speeds up
    encryption and decryption.
    
    The author includes a challenge: break his encrypted message and
    win a cash prize!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1382.TXT

{% raw %}
```
Disk No: 1382
Program Title:  b_CRYPT version 2.00
PC-SIG version 2

A peace of mind program. b_CRYPT is a file encryption/decryption utility
to protect your data files from unauthorized access.  Whether sensitive
personnel files, confidential financial data, or super secret research
information, this program prevents prying eyes from gaining access.  It
will put the lock on any MS-DOS file structures including hidden files,
no matter what the size or what the file extension reads.

You supply a password and it converts your data into an incomprehensible
binary form based on a pseudorandom algorithm.  With a password from 5
to 32 characters in length, and supporting the entire ASCII character
set, the chances of someone breaking the code file is greater than one
to the 256^32.  And that assumes the hacker has a copy of B_CRYPT.  To
complicate matters, you can encrypt a file more than once.

With lots of documentation and screen help, the program is painless to
use, and very fast: a 100k hard disk file is processed in 30 seconds on
a 12Mhz AT class computer.  A ramdisk further speeds up the processing.

The author includes a challenge: try to break his encrypted message and
win a cash prize!

Synopsis:  Encrypts your confidential files so only you can read them.

Usage:  Encryption/Decryption/Data Security/Permenant File Deletion.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00 plus applicable N.J.  State Sales Tax
and $3.00 shipping.

File Descriptions:

B_CRYPT EXE   Main program.
B_CRYPT PIF   Windows 2.0 (pif) program information file.
B_CRYPT DOC   Operation and instruction manual.
B_CRYPT CVR   Text file which when printed in compressed mode will
              become a diskette cover insert instruction sheet.
C_ORDER FRM   Commercial registration form.
P_ORDER FRM   Personal single user registration form.
COMPDOC BAT   Batch file to print .CVR and .FRM files.
DOC     BAT   Batch file to print B_CRYPT.DOC file.
BREAKME TXT   B_CRYPTed file of $ interest to a registered user who
              deciphers it.
PACKING LST   Contents listing of files.
READ_ME 1ST   Disclaimer text and initial instructions file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                     <<<<  Disk No 1382 b_CRYPT  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type B_CRYPT (press enter)                        ║
║                                                                         ║
║ To view disclaimer notice, type VIEW (press enter)                      ║
║                                                                         ║
║ To copy the documentation to your printer, type DOC (press enter)       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1382

     Volume in drive A has no label
     Directory of A:\

    BREAKME  TXT      2723   9-25-88  12:00p
    B_001200 ZIP     77857   8-03-89   6:30p
    B_CRYPT  CVR      2860   8-01-89  12:00p
    B_CRYPT  DOC     32214   8-01-89  12:00p
    B_CRYPT  EXE     47199   6-29-89   6:41p
    B_CRYPT  PIF       369   8-01-88  12:00p
    COMPDOC  BAT      1310   8-01-89  12:00p
    C_ORDER  FRM      4560   8-01-89  12:00p
    DOC      BAT      1189   8-01-89  12:00p
    FILE1382 TXT      2357   9-12-89   4:30p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   5-04-89  10:39a
    PACKING  LST       862   8-01-89  12:00p
    PAGE     COM       325   1-06-87   4:21p
    P_ORDER  FRM      3956   8-01-89  12:00p
    READ_ME  1ST     10351   8-01-89  12:00p
    VIEW     BAT        43   5-04-89  10:43a
           17 file(s)     188907 bytes
                          122880 bytes free
