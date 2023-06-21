---
layout: page
title: COMPAQ DeskPro 386 with VGA Display
permalink: /machines/pcx86/compaq/deskpro386/vga/
machines:
  - id: deskpro386-vga
    type: pcx86
    config: /machines/pcx86/compaq/deskpro386/vga/2048kb/machine.xml
    debugger: available
---

PCjs DeskPro 386 configurations with VGA use the `Rev J.4` [COMPAQ DeskPro 386 ROM](/machines/pcx86/compaq/deskpro386/rom/), dated January 28, 1988.  The machine below uses an IBM VGA connected to a VGA Color Display, since support for the COMPAQ VGA hasn't been completely tested yet.

{% include machine.html id="deskpro386-vga" %}

Other VGA configurations include:

  - [DeskPro 386 with 2Mb and IBM VGA](/machines/pcx86/compaq/deskpro386/vga/2048kb/machine.xml) ([Debugger](/machines/pcx86/compaq/deskpro386/vga/2048kb/debugger/), [Visualizer](/machines/pcx86/compaq/deskpro386/vga/2048kb/debugger/visual/machine.xml))
  - [DeskPro 386 with 4Mb and IBM VGA](/machines/pcx86/compaq/deskpro386/vga/4096kb/machine.xml) ([Debugger](/machines/pcx86/compaq/deskpro386/vga/4096kb/debugger/machine.xml), [Visualizer](/machines/pcx86/compaq/deskpro386/vga/2048kb/debugger/visual/machine.xml))
  - [DeskPro 386 with 4Mb and IBM VGA running Windows 95](/software/pcx86/sys/windows/win95/4.00.950/) ([Debugger](/software/pcx86/sys/windows/win95/4.00.950/debugger/))
  - [DeskPro 386 with 2Mb and COMPAQ VGA (Debugger)](/machines/pcx86/compaq/deskpro386/other/2048kb/debugger/machine.xml), ([Visualizer](/machines/pcx86/compaq/deskpro386/other/2048kb/debugger/visual/machine.xml))

All these configurations also include an unformatted "Type 5" [47Mb Hard Disk](/machines/pcx86/ibm/hdc/47mb/).  To create a single 47Mb partition, you must use [COMPAQ MS-DOS 3.31](/software/pcx86/sys/dos/compaq/3.31/) or newer; older versions of DOS could create partitions only up to 32Mb, and all partitions had to reside within the first 32Mb of disk space.

{% include gallery/documents.html width="200" height="280" %}
