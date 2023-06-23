---
layout: page
title: "PC-SIG Diskette Library (Disk #3131)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3131/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3131"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║          <<<<  PC-SIG Disk #3131 VSUM  1 of 2 (also 3132)   >>>>        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ This program has been compressed. In order to install it please type:   ║
║           ARJLITE E -V280000 VSUM hardrive:\subdirectory  (press Enter) ║
║                                                                         ║
║ Please insert the second disk when the program prompts you for the next ║
║ disk/volume, and press "y" to complete the uncompression task.          ║
║                                                                         ║
║ Once uncompressed, print the documentation by typing:                   ║
║                                    COPY READ_ME.1ST PRN   (press Enter) ║
║                                    COPY VSUM_REG.DOC PRN  (press Enter) ║
║                                    COPY VALIDATE.DOC PRN  (press Enter) ║
║                                                                         ║
║ Run the program by typing:  VSUM  (press Enter)                         ║
║                                                                         ║
║                                         (c) Copyright 1992, PC-SIG Inc. ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3131

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1386   9-02-92   2:58p
    VSUM     ARJ    279195   9-02-92   2:17p
    ARJLITE  EXE     72636   5-30-91   8:37a
            4 file(s)     353255 bytes
                            7168 bytes free
