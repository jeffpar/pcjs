---
layout: page
title: IBM PC (Model 5150) with Color Display and Debugger
permalink: /machines/pcx86/ibm/5150/cga/debugger/
redirect_from: /devices/pcx86/machine/5150/cga/64kb/debugger/
machines:
  - id: ibm-5150-cga
    type: pcx86
    config: /configs/pcx86/machine/ibm/5150/machine-cga-debugger.json
    autoMount:
        A:
            name: PC DOS 2.00 (Disk 1)
        B:
            name: PC DOS 2.00 (Disk 2)
    testRAM: false
---

{% include machine.html id="ibm-5150-cga" %}
