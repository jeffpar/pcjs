---
layout: page
title: The Hitchhiker's Guide to the Galaxy
permalink: /software/pcx86/game/infocom/hhiker/
redirect_from: /disks/pcx86/games/infocom/hhiker/
machines:
  - id: ibm5150-hhiker
    type: pcx86
    resume: 1
    config: /machines/pcx86/machine/ibm/5150/cga/64kb/machine.json
    flicker: 0
    sizeRAM: 256
    testRAM: false
    autoMount:
      A:
        name: Hitchhiker's Guide
      B:
        name: Empty Diskette (160K)
---

### Saving and Restoring

{% include machine.html id="ibm5150-hhiker" %}

PCjs uses your web browser to automatically save the machine's state, so you should be able to visit this page later
and pick up where you left off.

To manually save and restore your game "the old-fashioned way", use the game's **SAVE** command to write the game's
state to the "Empty Diskette (160K)" in drive B.  You can then click the machine's `Save` button to save a local copy of
that diskette in your Downloads folder.  When you visit the page later, use the `Choose` and `Mount` buttons to locate
that diskette image and reload it into drive B, and then use the game's **RESTORE** command to read the diskette.

NOTE: The PCjs `Save` button cannot be used to create a working copy of the copy-protected diskette in drive A.  The `Save`
feature works only with standard non-copy-protected disk formats.

References
----------

[MobyGames](https://www.mobygames.com/game/hitchhikers-guide-to-the-galaxy)

![Front Cover](https://www.mobygames.com/images/covers/l/25-the-hitchhiker-s-guide-to-the-galaxy-dos-front-cover.jpg)

![Back Cover](https://www.mobygames.com/images/covers/l/77-the-hitchhiker-s-guide-to-the-galaxy-dos-back-cover.jpg)
