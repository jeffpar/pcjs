---
layout: page
title: "PC-SIG Diskette Library (Disk #3334)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3334/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3334"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```
                               
                               I'M  M O V I E
                               --------------
                               
   The files on these evaluation diskettes have been compressed and archived
   to fit on the distribution diskettes.  
   
   Each of the files on the enclosed diskettes are self-extracting, compressed
   archives.  This means that when the file is executed, it will automatically
   uncompress itself.
   
   Documentation and information files are labelled ".TXT" and ".DOC".  
   
   Please refer to the IMMUSA.TXT and REGISTER.DOC files for information
   for getting started.  
   
   To install I'M Movie, you should first create a sub-directory on your
   hard drive, then uncompress all of the files on the distribution diskettes.
   On 5.25" diskettes, each part is on a separate disk.  3.5" diskettes 
   usually contain 2 parts (files) per disk.
   
   The following commands can be used for a quick-start installation:

   1)  Prepare a sub-directory for the I'M Movie files.  At the C> prompt
       issue the command:
                      MD C:\IMM
   2)  To change to that directory type:
                      CD C:\IMM
   3)  Now, uncompress and copy the files from the diskettes using the 
       commands:
                      A:\PART1.EXE  
                      A:\PART2.EXE
                      A:\PART3.EXE
                      A:\PART4.EXE
                      A:\PART5.EXE
                      A:\PART6.EXE           

   4)  Enjoy I'M Movie!
   
   
   This document is Copyright (c) 1992 by Rhode Island Soft Systems, Inc.
   For additional information on I'M Movie, or any of our other products,
   please contact us at:
   
                           Rhode Island Soft Systems, Inc.
                           P.O. Box 748
                           Woonsocket, RI  02895
                           Voice/Fax: 401-658-4632
                           

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3334

     Volume in drive A has no label
     Directory of A:\

    PART1    EXE    326686   4-28-92  10:09p
    README   DOC      1994   4-28-92  11:29p
    GO       BAT        32   1-28-93   7:17a
            3 file(s)     328712 bytes
                           31744 bytes free
