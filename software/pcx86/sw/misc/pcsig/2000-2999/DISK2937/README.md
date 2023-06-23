---
layout: page
title: "PC-SIG Diskette Library (Disk #2937)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2937/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2937"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║        <<<<  PC-SIG Disk #2937 BACK & FORTH PROFESSIONAL #3  >>>>       ║
║                  (also #2641, #2642, #2938, and #2939)                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Create a subdirectory on your hard drive and copy all files to it.      ║
║ To create a subdirectory, go to the drive you want and type:            ║
║       MD [subdirectory name]                                            ║
║ To copy all the files to the hard drive, type:                          ║
║       COPY [source drive]:*.* [destination drive]:\subdirectory name    ║
║                                                                         ║
║ To uncompress the files, PKUNZIP must be in your path or directory.     ║
║ Go to your subdirectory and type:  PKUNZIP BNFP200A  (press Enter)      ║
║                                    PKUNZIP BNFP200B  (press Enter)      ║
║                                    PKUNZIP BNFP200C  (press Enter)      ║
║                                    PKUNZIP BNFP200D  (press Enter)      ║
║                                    PKUNZIP BNFP200E  (press Enter)      ║
║                                                                         ║
║ To print the program manual, type:  COPY BFP-200.DOC PRN  (press Enter) ║
║                                                                         ║
║ For quick start, type:  BFPSETUP  (press Enter)                         ║
║ Then type:  BNF  (press Enter)                                          ║
║                                                                         ║
║                                           Copyright 1992, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2937

     Volume in drive A has no label
     Directory of A:\

    BNFP200C ZIP    358654   1-29-92   8:33a
    GO       BAT        29   1-31-92   1:17a
    GO       TXT      1848   2-06-92  11:17a
            3 file(s)     360531 bytes
                               0 bytes free
