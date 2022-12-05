---
layout: page
title: MINIX 1.1 for the IBM PC AT
permalink: /software/pcx86/sys/unix/minix/1.1/pc-at/
preview: https://diskettes.pcjs.org/pcx86/sys/unix/minix/1.1/MINIX11-1200K-DISK1-BOOT.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/640kb/rev3/debugger/machine.xml
    autoMount:
      A:
        name: "MINIX 1.1 (1.2M Disk 1: Boot)"
      B:
        name: None
---

The MINIX 1.1 Operating System for IBM PC/ATs was distributed on five 1.2M disk images:

 1. BOOT DISKETTE
 2. ROOT FILE SYSTEM
 3. /USR + /USER
 4. KERNEL, MM, FS, AND H SOURCES
 5. TOOLS AND COMMANDS SOURCES

Every diskette is also labelled with the following information:

	MINIX BINARIES AND SOURCES FOR IBM PC/AT's
	by Andrew S. Tanenbaum
	(c) 1987 Prentice-Hall, Inc.
	ISBN: 0-13-583865-7
	MINIX 1.1

The machine below is configured to boot from the MINIX 1.1 "Boot" diskette (shown below).  Normally, after booting,
you would be able to load the "Root" diskette and press "=" to start MINIX; however, MINIX is not yet working in PCjs.
This page will be updated when the [issue](https://github.com/jeffpar/pcjs/issues/57) is resolved.

{% include machine.html id="ibm5170" %}

![MINIX 1.1 (1.2M Disk 1: Boot)]({{ site.software.diskettes.server }}/pcx86/sys/unix/minix/1.1/MINIX11-1200K-DISK1-BOOT.jpg)
