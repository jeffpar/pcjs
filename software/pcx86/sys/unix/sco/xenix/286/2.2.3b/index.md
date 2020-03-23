---
layout: page
title: SCO Xenix 286 v2.2.3b
permalink: /software/pcx86/sys/unix/sco/xenix/286/2.2.3b/
redirect_from: /disks/pcx86/unix/sco/xenix/286/2.2.3b/
machines:
  - id: ibm5170
    type: pcx86
    debugger: true
    config: /configs/pcx86/xml/machine/5170/ega/1024kb/rev1/debugger/machine.xml
    autoMount:
      A:
        name: SCO Xenix 286 2.2.3b (N1-BOOT)
      B:
        name: None
    autoStart: true
    messages: fault
---

When prompted, use the following serial number and activation key:  

	Serial number:  pcjs.org!
	Activation key: tjmbrmbz

We've also archived some [SCO Xenix 286 Installation and Emulation Notes](/software/pcx86/sys/unix/sco/xenix/286/2.1.3/#sco-xenix-286-installation-and-emulation-notes)
on the [SCO Xenix 286 v2.1.3](/software/pcx86/sys/unix/sco/xenix/286/2.1.3/) page.

{% include machine.html id="ibm5170" %}
