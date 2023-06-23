---
layout: page
title: "PC-SIG Diskette Library (Disk #4096)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4096/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4096"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ASA55U.DOC

{% raw %}
```


 -----------------------------------------------------------------
            AS-EASY-AS Ver 5.5   Utility Disk  (Disk #2)
 -----------------------------------------------------------------
                    (C) Copyright 1992, TRIUS, Inc.

This is Disk #2 of a two-disk set of the AS-EASY-AS V5.5 program.
If you received the program on a 3.5" or a high density disk, it's 
possible that all files from Disk #1 (Program Disk) and Disk #2 
(Samples/Util Disk) are contained on ONE disk.  If that's the 
case, then any reference to Disk #2, (or Disk #1) below, should be 
assumed to refer to your SINGLE disk.

Disk #2 Contains only two files.  This (ASA55U.DOC) file and a Self-
Extract file (ASA55U.EXE) which is an archive containing all the sample 
worksheets and other files.  The files from ASA55U.EXE are extracted 
during the installation process of AS-EASY-AS (i.e., executing 
the INSTALL.EXE program on Disk #1).  For more information, 
please refer to the READ.ME text file on Disk #1.

To extract the files in ASA55U, manually, follow the simple steps 
below:

   1.  Make sure you are at the DOS prompt
   2.  Log to the disk/drive where you want to install the files
       (e.g., if installing to Drive C: directory ASA, your current
       directory should be C:\ASA)
   3.  Place Disk #2 in your disk drive (A, B, C....)
   4.  Type d:ASA55U (where d is the Disk #2 drive) and press [ENTER]
       (e.g., if Disk #2 is in drive A:, then type A:ASA55U and press
        [ENTER]).
   5.  Read and follow the On-Screen Simple instructions.


After the files have been extracted from the archive, you may view, or 
print the SAMPLES.DOC, any other files with the file extension .DOC, or 
the on-disk user's manual (ASEASY.MAN).

To view these files on your screen, you may use your favorite file 
lister utility, a text editor, your word processor (provided it can 
handle ASCII files) or the DOS  'TYPE' command.

You may print the files by simply COPYing them to your printer device.  
For example, to print the file SAMPLES.DOC, at the DOS prompt, type

       COPY SAMPLES.DOC PRN     and press   [ENTER].

Alternatively, if you know what port your printer is connected to, you 
may type substitute 'PRN', above, with LPT1, LPT2, COM1, COM2,...

Please, note that if you want to print the ASEASY.MAN file, you should 
have at least 120 sheets of paper available in your printer.

If you are a registered user (Already have a printed bound manual) you 
DO NOT need to print the ASEASY.MAN file!

------------------------------------------------------------------- END





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4096

     Volume in drive A has no label
     Directory of A:\

    ASA55U   DOC      2657  12-23-92   2:33p
    ASA55U   EXE    106446   7-07-93   4:24p
            2 file(s)     109103 bytes
                           50688 bytes free
