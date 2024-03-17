---
layout: page
title: COMPAQ DeskPro 386 with Enhanced Graphics
permalink: /machines/pcx86/compaq/deskpro386/ega/
machines:
  - id: deskpro386-ega
    type: pcx86
    config: /machines/pcx86/compaq/deskpro386/ega/2048kb/machine.xml
    debugger: available
---

PCjs DeskPro 386 configurations with EGA and 2Mb of RAM use the `Rev E` [COMPAQ DeskPro 386 ROM](/machines/pcx86/compaq/deskpro386/rom/), dated August 19, 1986, which was the first ROM shipped in the DeskPro 386.  The VGA did not exist until 1987, so it makes sense to use the EGA with 1986 ROMs.  The machine below uses an IBM EGA connected to an Enhanced Color Display, since support for the COMPAQ EGA hasn't been completely tested yet.

{% include machine.html id="deskpro386-ega" %}

Other EGA configurations include:

  - [DeskPro 386 with 2Mb and IBM EGA](/machines/pcx86/compaq/deskpro386/ega/2048kb/machine.xml) ([Debugger](/machines/pcx86/compaq/deskpro386/ega/2048kb/debugger/))
  - [DeskPro 386 with 4Mb and IBM EGA](/machines/pcx86/compaq/deskpro386/ega/4096kb/machine.xml) ([Debugger](/machines/pcx86/compaq/deskpro386/ega/4096kb/debugger/machine.xml))

All these configurations also include an unformatted "Type 5" [47Mb Hard Disk](/machines/pcx86/ibm/hdc/47mb/).  To create a single 47Mb partition, you must use [COMPAQ MS-DOS 3.31](/software/pcx86/sys/dos/compaq/3.31/) or newer; older versions of DOS could create partitions only up to 32Mb, and all partitions had to reside within the first 32Mb of disk space.

{% include gallery/documents.html width="200" height="280" %}
