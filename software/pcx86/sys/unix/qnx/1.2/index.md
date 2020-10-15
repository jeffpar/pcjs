---
layout: page
title: QNX 1.2
permalink: /software/pcx86/sys/unix/qnx/1.2/
preview: https://diskettes.pcjs.org/pcx86/sys/unix/qnx/1.2/QNX12-BOOT.jpg
machines:
  - id: ibm5160
    type: pcx86
    debugger: available
    config: /configs/pcx86/machine/ibm/5160/cga/640kb/machine.xml
    autoMount:
      A:
        name: QNX 1.2 BOOT
      B:
        name: None
    autoStart: true
---

{% include machine.html id="ibm5160" %}

[[Source](https://virtuallyfun.com/wordpress/2020/10/05/qnx-1-1-demo-disk/)]
