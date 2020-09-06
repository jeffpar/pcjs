---
layout: page
title: "Zork II: The Wizard of Frobozz"
permalink: /software/pcx86/game/infocom/zork2/
redirect_from: /disks/pcx86/games/infocom/zork2/
machines:
  - id: ibm5150-zork2
    type: pcx86
    resume: 1
    config: /configs/pcx86/machine/ibm/5150/cga/64kb/machine.json
    flicker: 0
    sizeRAM: 256
    testRAM: false
    autoMount:
      A:
        name: Zork II
      B:
        name: Empty Diskette (160K)
---

{% include machine.html id="ibm5150-zork2" %}

### Saving and Restoring

PCjs uses your web browser to automatically save the machine's state, so you should be able to visit this page later
and pick up where you left off.

To manually save and restore your game "the old-fashioned way", use the game's **SAVE** command to write the game's
state to the "Empty Diskette (160K)" in drive B.  You can then click the machine's `Save` button to save a local copy of
that diskette in your Downloads folder.  When you visit the page later, use the `Choose` and `Mount` buttons to locate
that diskette image and reload it into drive B, and then use the game's **RESTORE** command to read the diskette.

NOTE: The PCjs `Save` button cannot be used to create a working copy of the copy-protected diskette in drive A.  The `Save`
feature works only with standard non-copy-protected disk formats.

Related
-------

  - [Zork I: The Great Underground Empire](../zork1/)
  - [Zork III: The Dungeon Master](../zork3/)

References
----------

[MobyGames](https://www.mobygames.com/game/zork-ii-the-wizard-of-frobozz)

![Front Cover](https://www.mobygames.com/images/covers/l/2877-zork-ii-the-wizard-of-frobozz-dos-front-cover.jpg)

![Back Cover](https://www.mobygames.com/images/covers/l/2878-zork-ii-the-wizard-of-frobozz-dos-back-cover.jpg)
