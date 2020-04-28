---
layout: page
title: Microsoft Windows 1.01 with CGA Display and Debugger
redirect_from: /disks/pcx86/windows/1.01/cga/debugger/
permalink: /software/pcx86/sys/windows/1.01/cga/debugger/
machines:
  - id: ibm5160-cga-win101
    type: pcx86
    debugger: true
    uncompiled: true
    resume: 1
    state: /software/pcx86/sys/windows/1.01/cga/state.json
    config: /configs/pcx86/machine/ibm/5160/cga/256kb/debugger/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/PCDOS200-WIN101-CGA.json"}]'
---

{% include machine.html id="ibm5160-cga-win101" %}
