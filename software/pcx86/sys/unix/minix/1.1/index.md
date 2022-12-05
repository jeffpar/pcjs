---
layout: page
title: MINIX 1.1
permalink: /software/pcx86/sys/unix/minix/1.1/
redirect_from: /disks/pcx86/unix/minix/1.1/
preview: https://diskettes.pcjs.org/pcx86/sys/unix/minix/1.1/MINIX11-1200K-DISK1-BOOT.jpg
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/640kb/machine.xml
    autoMount:
      A:
        name: "MINIX 1.1 (360K Disk 1: Boot)"
      B:
        name: None
---

The MINIX 1.1 Operating System for the IBM PC was distributed on eight 360K diskettes.  [MINIX 1.1 for the IBM PC AT](pc-at/)
was released separately on five 1.2M diskettes.

After the initial boot screen appears below, load the "MINIX 1.1 (360K Disk 2: Root)" diskette into drive A: and then
press the "=" key.

{% include machine.html id="ibm5160" %}
