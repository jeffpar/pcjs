---
layout: page
title: IBM PC XT (Model 5160) with Enhanced Graphics
permalink: /machines/pcx86/ibm/5160/ega/
redirect_from: /devices/pcx86/machine/5160/ega/640kb/
machines:
  - id: ibm5160-ega
    type: pcx86
    config: /machines/pcx86/ibm/5160/ega/256kb/machine.json
    debugger: available
    autoType: $date\r$time\r
---

{% include machine.html id="ibm5160-ega" %}

### Additional EGA Configurations

Other IBM PC XT machines with an Enhanced Graphics Adapter (EGA) include:

- [IBM PC XT, 256Kb RAM, 10Mb Hard Disk, IBM EGA (256Kb) w/Color Monitor](/machines/pcx86/ibm/5160/ega/256kb/color/machine.xml)
- [IBM PC XT, 256Kb RAM, 10Mb Hard Disk, IBM EGA (256Kb) w/Monochrome Monitor](/machines/pcx86/ibm/5160/ega/256kb/mono/machine.xml)
- [IBM PC XT, 256Kb RAM, 10Mb Hard Disk, IBM EGA (256Kb) w/Enhanced Color Monitor](/machines/pcx86/ibm/5160/ega/256kb/machine.xml)
- [IBM PC XT, 512Kb RAM, 10Mb Hard Disk, IBM EGA (128Kb) w/Enhanced Color Monitor](/machines/pcx86/ibm/5160/ega/512kb/machine.xml)
- [IBM PC XT, 640Kb RAM, 10Mb Hard Disk, IBM EGA (128Kb) w/Enhanced Color Monitor](/machines/pcx86/ibm/5160/ega/640kb/machine.xml)

To initialize the hard disk, use the `FDISK` command to create a DOS partition, restart the machine, and then run `FORMAT C:`.

{% include gallery/documents.html width="200" height="280" %}
