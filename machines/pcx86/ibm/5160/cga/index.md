---
layout: page
title: IBM PC XT (Model 5160) with Color Graphics
permalink: /machines/pcx86/ibm/5160/cga/
redirect_from:
  - /devices/pcx86/machine/5160/cga/256kb/
  - /devices/pcx86/machine/5160/cga/512kb/
  - /devices/pcx86/machine/5160/cga/640kb/
machines:
  - id: ibm5160-cga
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.json
    debugger: available
    autoType: $date\r$time\r
---

{% include machine.html id="ibm5160-cga" %}

### Additional CGA Configurations

Other IBM PC XT machines with a Color Graphics Adapter (CGA) include:

- [IBM PC XT, 256Kb RAM, 10Mb Hard Disk (PC DOS 2.00)](/machines/pcx86/ibm/5160/cga/256kb/machine.xml)
- [IBM PC XT, 512Kb RAM, 10Mb Hard Disk (Unformatted), Coprocessor](/machines/pcx86/ibm/5160/cga/512kb/machine.xml)
- [IBM PC XT, 640Kb RAM, 10Mb Hard Disk (Formatted)](/machines/pcx86/ibm/5160/cga/640kb/machine.xml)
- [IBM PC XT, 640Kb RAM, 10Mb Hard Disk (Formatted), Serial Mouse](/machines/pcx86/ibm/5160/cga/640kb/machine.xml)

To initialize the hard disk, use the `FDISK` command to create a DOS partition, restart the machine, and then run `FORMAT C:`.

{% include gallery/documents.html width="200" height="280" %}
