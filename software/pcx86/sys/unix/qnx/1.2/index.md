---
layout: page
title: QNX 1.2
permalink: /software/pcx86/sys/unix/qnx/1.2/
preview: https://diskettes.pcjs.org/pcx86/sys/unix/qnx/1.2/QNX12-BOOT.jpg
machines:
  - id: ibm5160
    type: pcx86
    debugger: available
    config: /machines/pcx86/machine/ibm/5160/cga/640kb/machine.xml
    drives: '[{name:"QNX 1.2 (10Mb)",type:3,path:"/harddisks/pcx86/10mb/QNX12.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
    autoStart: true
---

The IBM PC XT below originally booted from the "QNX 1.2 BOOT" diskette, but has since been upgraded with the
10mb hard disk image created by [Mihai Gaitos](https://hawk.ro/qnx12_pcjs/).
See [Reverse-engineering QNX 1.2 to boot from HDD](https://virtuallyfun.com/wordpress/2021/02/13/reverse-engineering-qnx-1-2-to-boot-from-hdd/)
for more details.

{% include machine.html id="ibm5160" %}

[[Source](https://virtuallyfun.com/wordpress/2020/10/05/qnx-1-1-demo-disk/)]
