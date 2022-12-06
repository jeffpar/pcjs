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

[MINIX 1.1 for the IBM PC](../) was also released for IBM PC ATs on five 1.2M diskettes.  The MINIX 1.1 software was
identical in both releases, which meant that the PC version could boot and run equally well on PC ATs, so the only real
advantage of this five-diskette version was fewer, larger diskettes.  They were labeled as follows:

 1. BOOT DISKETTE
 2. ROOT FILE SYSTEM
 3. /USR + /USER
 4. KERNEL, MM, FS, AND H SOURCES
 5. TOOLS AND COMMANDS SOURCES

Every diskette label also included the following information:

	MINIX BINARIES AND SOURCES FOR IBM PC/AT's
	by Andrew S. Tanenbaum
	(c) 1987 Prentice-Hall, Inc.
	ISBN: 0-13-583865-7
	MINIX 1.1

The IBM PC AT below is configured to boot from the MINIX 1.1 "Boot" diskette (shown below).  Click the "Run" button
to start the machine, and after the MINIX boot menu appears, load the "Root" diskette and press "=" to start MINIX.

After loading the "Usr" diskette, you can login as **root** with password **Geheim**, or as user **ast** with password
**Wachtwoord**.

{% include machine.html id="ibm5170" %}

![MINIX 1.1 (1.2M Disk 1: Boot)]({{ site.software.diskettes.server }}/pcx86/sys/unix/minix/1.1/MINIX11-1200K-DISK1-BOOT.jpg)
