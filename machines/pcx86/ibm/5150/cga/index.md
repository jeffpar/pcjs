---
layout: page
title: IBM PC (Model 5150) with Color Display
permalink: /machines/pcx86/ibm/5150/cga/
redirect_from: /devices/pcx86/machine/5150/cga/64kb/
machines:
  - id: ibm-5150-cga
    type: pcx86
    config: /configs/pcx86/machine/ibm/5150/machine-cga.json
    autoMount:
        A:
            name: PC DOS 2.00 (Disk 1)
        B:
            name: PC DOS 2.00 (Disk 2)
---

{% include machine.html id="ibm-5150-cga" %}

This machine is also available with the <a href="debugger/" onclick="pcjsOnClick(this)">PCjs Debugger</a>.

{% include gallery/documents.html width="200" height="280" %}
