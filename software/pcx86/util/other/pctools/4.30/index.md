---
layout: page
title: Central Point PC Tools Deluxe 4.30
permalink: /software/pcx86/util/other/pctools/4.30/
redirect_from: /disks/pcx86/tools/other/pctools/4.30/
machines:
  - id: ibm5150
    type: pcx86
    config: /configs/pcx86/machine/ibm/5150/cga/64kb/debugger/machine.json
    sizeRAM: 256
    testRAM: false
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: Central Point PC Tools 4.30
    autoType: $date\r$time\rB:\rPCTOOLS\r
    autoStart: true
---

{% include machine.html id="ibm5150" %}

### Directory of Central Point PC Tools 4.30

     Volume in drive A has no label
     Directory of A:\

    PCSETUP  COM     11020   8-05-88   9:18p
    PCTOOLS  EXE    171077   8-05-88  12:54a
    PCBACKUP EXE     75091   8-05-88  12:24a
    PCRESTOR BAT        23   8-05-88  12:35p
    PC-CACHE COM     21856   9-07-88   7:35p
    PCFORMAT COM     13536   8-08-88  11:42a
    MIRROR   COM     12188   8-05-88  12:09a
    REBUILD  COM     13200   8-06-88  12:02a
    COMPRESS EXE     37831   8-05-88  12:07a
    README   DOC      1429   9-07-88  10:40p
           10 file(s)     357251 bytes
                               0 bytes free
