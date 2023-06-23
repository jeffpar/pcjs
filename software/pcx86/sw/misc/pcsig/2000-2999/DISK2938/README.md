---
layout: page
title: "PC-SIG Diskette Library (Disk #2938)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2938/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2938"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║        <<<<  PC-SIG Disk #2938 BACK & FORTH PROFESSIONAL #4  >>>>       ║
║                  (also #2641, #2642, #2937, and #2939)                  ║
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

### Directory of PC-SIG Library Disk #2938

     Volume in drive A has no label
     Directory of A:\

    BNFP200D ZIP    330192   1-29-92   8:33a
    GO       BAT        29   1-31-92   1:17a
    GO       TXT      1848   2-06-92  11:16a
    PKUNZIP  EXE     23536   1-16-91  12:38p
            4 file(s)     355605 bytes
                            5120 bytes free
