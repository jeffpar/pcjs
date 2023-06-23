---
layout: page
title: IBM PC XT (Model 5160) with Monochrome Display
permalink: /machines/pcx86/ibm/5160/mda/
redirect_from: /devices/pcx86/machine/5160/mda/256kb/
machines:
  - id: ibm5160-mda
    type: pcx86
    config: /machines/pcx86/ibm/5160/mda/256kb/machine.json
    debugger: available
    autoType: $date\r$time\r
---

{% include machine.html id="ibm5160-mda" %}

### Additional MDA Configurations

Other IBM PC XT machines with a Monochrome Display Adapter (MDA) include:

- [IBM PC XT, 256Kb RAM, 10Mb Hard Disk (Unformatted)](/machines/pcx86/ibm/5160/mda/256kb/machine.xml)

To initialize the hard disk, use the `FDISK` command to create a DOS partition, restart the machine, and then run `FORMAT C:`.

{% include gallery/documents.html width="200" height="280" %}
