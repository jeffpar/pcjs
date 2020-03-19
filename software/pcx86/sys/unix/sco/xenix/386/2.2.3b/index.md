---
layout: page
title: SCO Xenix 386 v2.2.3b
permalink: /software/pcx86/sys/unix/sco/xenix/386/2.2.3b/
redirect_from: /disks/pcx86/unix/sco/xenix/386/2.2.3b/
machines:
  - id: deskpro386
    type: pcx86
    debugger: true
    config: /configs/pcx86/xml/machine/compaq/deskpro386/ega/2048kb/debugger/machine.xml
    autoMount:
      A:
        name: SCO Xenix 386 2.2.3b (N1-BOOT)
      B:
        name: None
    autoStart: true
    messages: fault
    commands: bp #003F:00000054
---

PCjs has archived an original copy of what may be the oldest surviving 386-based PC operating system.

Previously, that honor went to (a reconstructed copy of) SCO Xenix 386 v2.2.3c, as explained in this series of
[OS/2 Museum](http://www.os2museum.com/) posts:

- [The XENIX 386 2.2.3 Mystery (January 3, 2013)](http://www.os2museum.com/wp/the-xenix-386-2-2-3-mystery/)
- [The XENIX 2.2.3 Mystery, Continued (January 18, 2013)](http://www.os2museum.com/wp/the-xenix-2-2-3-mystery-continued/)
- [Oldest Surviving 386 PC OS? (March 9, 2017)](http://www.os2museum.com/wp/oldest-surviving-386-pc-os/)
- [What a Coincidence (March 11, 2017)](http://www.os2museum.com/wp/what-a-coincidence/)
- [Tales From the Xenix Crypt (March 13, 2017)](http://www.os2museum.com/wp/tales-from-the-xenix-crypt/)

Also see this series of [SoylentNews](https://soylentnews.org/) posts:

- [Restoring Xenix 386 2.2.3c (Part 1)](https://soylentnews.org/article.pl?sid=17/03/03/1620222)
- [Xenix 2.2.3c Restoration: No Tools, No Problem (Part 2)](https://soylentnews.org/article.pl?sid=17/03/07/1632251)
- [Xenix 2.2.3c Restoration: Damage Mapping (Part 3)](https://soylentnews.org/article.pl?sid=17/03/11/2014253)
- [Xenix 2.2.3c Restoration: Xrossing The X (Part 4)](https://soylentnews.org/article.pl?sid=17/03/13/086250)

When prompted, use the following serial number and activation key:  

	Serial number:  pcjs.org!
	Activation key: ylwbrzkd

NOTE: The PCjs SCO Xenix 386 machines are still being debugged, so don't expect the operating system to work here quite yet.

{% include machine.html id="deskpro386" %}
