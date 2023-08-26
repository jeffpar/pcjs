---
layout: page
title: IBM PC AT (Model 5170) with ATAPI CD-ROM
permalink: /machines/pcx86/ibm/5170/vga/cdrom/
redirect_from: /disks/pcx86/drives/cdrom/
machines:
  - id: ibm5170-vga
    type: pcx86
    config: /machines/pcx86/ibm/5170/vga/2048kb/cdrom/machine.xml
---

The original IBM PC AT's fixed disk controller was originally referred to as an **AT Attachment**
or "ATA" controller, and it was very simple: it supported only eight commands and a maximum of two
fixed disks.

As the ATA interface evolved, the original PC AT implementation became known as "ATA-1",
and in order to support more than two fixed disks, controllers typically added a second independent
set of registers and control circuitry.  The original registers were referred to as the "primary"
interface, and the second set was called the "secondary" interface.  Later, the ATA Packet Interface
("ATAPI") was defined, along with some additional ATA controller commands, which made it possible
for an ATA controller to talk to SCSI-based CD-ROM drives.

It's unclear whether any ATAPI controllers existed when IBM began manufacturing the PC AT,
but there's no reason why an ATAPI controller for a 16-bit ISA bus would not have worked, as long
as its "primary" interface was disabled (to avoid conflicting with the PC AT's existing ATA controller)
and the ATAPI drive was connected to controller's "secondary" interface.

And in fact, that is exactly how the machine below is configured.  It's also available with the [PCjs Debugger](debugger/).

{% include machine.html id="ibm5170-vga" %}

{% include gallery/documents.html width="200" height="280" %}
