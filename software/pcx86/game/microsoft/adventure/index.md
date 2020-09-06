---
layout: page
title: "Microsoft Adventure (1981)"
permalink: /software/pcx86/game/microsoft/adventure/
redirect_from:
  - /disks/pcx86/games/microsoft/adventure/
  - /disks/pc/games/microsoft/adventure/
preview: images/screenshot.png
machines:
  - id: ibm5150-adventure
    type: pcx86
    resume: 1
    uncompiled: true
    config: /configs/pcx86/machine/ibm/5150/mda/64kb/machine.json
    autoMount:
      A:
        name: Microsoft Adventure (Unmodified)
---

UPDATE: There are now two "Microsoft Adventure" disk images in the PCjs Disk Library.  The latest one is called
"Microsoft Adventure (Unmodified)", which recreates the original copy-protected diskette.  See the PCjs blog post
"[Adventures in Copy Protection](/blog/2019/06/13/)" for more information.

{% include machine.html id="ibm5150-adventure" %}

NOTE: The PCjs "Save" feature will not create a usable copy of a copy-protected diskette.  That feature
works only with standard disk formats.

{% include gallery/documents.html %}
