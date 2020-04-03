---
layout: page
title: IBM PC (Model 5150) with VGA Display
permalink: /machines/pcx86/ibm/5150/vga/
machines:
  - id: ibm-5150-vga
    type: pcx86
    config: /configs/pcx86/ibm/5150/machine-vga.json
    autoMount:
        A:
            name: Invaders Boot Sector
        B:
            name: None
---

{% include machine.html id="ibm-5150-vga" %}

This machine is also available with the <a href="debugger/" onclick="pcjsOnClick(this)">PCjs Debugger</a>.

{% include gallery/documents.html width="200" height="280" %}
