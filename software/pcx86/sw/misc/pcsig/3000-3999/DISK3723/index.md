---
layout: page
title: "PC-SIG Diskette Library (Disk #3723)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3723/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3723"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
The file on this disk is self a self extracting archive. To install the
program, make a sub directory on your hard drive, and call the program
from that sub directory.

        EG:  MD PRO
             CD PRO
             A:PROLIT10  (Where A: is the drive your installing FROM)

To extract the sample files, type WIGETS.

To print the documentation, copy *.TXT to the printer.

	EG:  COPY README.TXT PRN
	     COPY MANUAL.TXT PRN			

To start the program, type PRO.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3723

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        29   5-20-93   2:08p
    GO       TXT       481   5-20-93   2:10p
    PROLIT10 EXE    348351   5-20-93   2:02p
            3 file(s)     348861 bytes
                           11264 bytes free
