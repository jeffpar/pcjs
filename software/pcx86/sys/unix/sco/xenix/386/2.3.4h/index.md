---
layout: page
title: SCO Xenix 386 v2.3.4h
permalink: /software/pcx86/sys/unix/sco/xenix/386/2.3.4h/
redirect_from: /disks/pcx86/unix/sco/xenix/386/2.3.4h/
machines:
  - id: deskpro386
    type: pcx86
    debugger: true
    config: /configs/pcx86/machine/compaq/deskpro386/ega/2048kb/debugger/machine.xml
    autoMount:
      A:
        name: SCO Xenix 386 2.3.4h (N1-BOOT)
      B:
        name: None
    autoStart: true
    messages: fault
    commands: bp #003F:00000054
---

When prompted, use the following serial number and activation key:  

	Serial number:  pcjs.org!
	Activation key: khrpljip

NOTE: The PCjs SCO Xenix 386 machines are still being debugged, so don't expect the operating system to work here quite yet.

{% include machine.html id="deskpro386" %}
