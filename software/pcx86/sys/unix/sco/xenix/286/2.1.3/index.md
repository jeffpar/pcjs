---
layout: page
title: SCO Xenix 286 v2.1.3
permalink: /software/pcx86/sys/unix/sco/xenix/286/2.1.3/
redirect_from: /disks/pcx86/unix/sco/xenix/286/2.1.3/
machines:
  - id: ibm5170
    type: pcx86
    debugger: true
    config: /machines/pcx86/machine/ibm/5170/ega/1024kb/rev1/debugger/machine.xml
    autoMount:
      A:
        name: SCO Xenix 286 2.1.3 (N1-BOOT)
      B:
        name: None
    autoStart: true
    messages: fault
---

When prompted, use the following serial number and activation key:  

	Serial number:  pcjs.org!
	Activation key: tjmbrmbz

We've also archived some [SCO Xenix 286 Installation and Emulation Notes](#sco-xenix-286-installation-and-emulation-notes) below.

{% include machine.html id="ibm5170" %}

### SCO Xenix 286 Installation and Emulation Notes

The following notes are courtesy of the [OS/2 Museum](http://www.os2museum.com/):

> The serial number and activation key are needed for serializing the kernel as well as for the "Link Kit" (which is just
enough tools/libraries/objects to relink the kernel).

> To install, it should be enough to follow the on-screen prompts.  It's simplest to let it create a single partition, which
takes up the whole disk, no bad tracks, and no separate /u filesystem.  Use defaults when possible.
  
> The "N1" disk is always the boot disk.  Depending on the media type, there may be a "filesystem" disk, which is then "N2".

> Potential emulation issues:

> 1. The fixed disk parameter table (pointed to by INT 41h) must not be in RAM; whether it’s in the EBDA or at 300:0
(typical modern choices), old XENIX versions zap it
> 2. The **INITIALIZE DEVICE PARAMETERS** disk command needs to take a millisecond or two to execute; it must not complete instantly
> 3. For some old XENIX versions, the **RECALIBRATE** command also needs to take non-zero time
> 4. Hard disk must use 1:1 logical/physical geometry (BIOS and ATA interface), limiting the size to about 500MB
