---
layout: page
title: "PC-SIG Diskette Library (Disk #3478)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3478/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3478"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## NOTE.TXT

{% raw %}
```


         Welcome to C Magic,

             The file on this disk, MAGIC.EXE,  is  a  self-extracting
         archive file.  When you type MAGIC at the DOS prompt, it will
         decompress into several additional files on the current disk,
         in  the  current directory.  This requires more space than is
         available on most floppies, so copy MAGIC.EXE  to  your  hard
         disk first.

                                                        - Jeff -
                                                     Another Company
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3478

     Volume in drive A has no label
     Directory of A:\

    NOTE     TXT       557   6-19-92   7:52a
    MAGIC    EXE    269734   9-06-92  11:28a
    GO       BAT        34   4-13-93   8:19a
    SHOW     EXE      2040   9-12-88  10:48a
            4 file(s)     272365 bytes
                           48128 bytes free
