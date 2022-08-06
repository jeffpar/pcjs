---
layout: page
title: "Zork I: The Great Underground Empire"
permalink: /software/pcx86/game/infocom/zork1/
redirect_from:
  - /disks/pcx86/games/infocom/zork1/
  - /disks/pcx86/games/infocom/
  - /disks/pc/games/infocom/zork1/
preview: images/screenshot.png
machines:
  - id: ibm5150-zork1
    type: pcx86
    resume: 1
    config: /machines/pcx86/machine/ibm/5150/cga/64kb/machine.json
    flicker: 0
    sizeRAM: 256
    testRAM: false
    autoMount:
      A:
        name: Zork I
      B:
        name: Empty Diskette (160K)
---

{% include machine.html id="ibm5150-zork1" %}

### Saving and Restoring

PCjs uses your web browser to automatically save the machine's state, so you should be able to visit this page later
and pick up where you left off.

To manually save and restore your game "the old-fashioned way", use the game's **SAVE** command to write the game's
state to the "Empty Diskette (160K)" in drive B.  You can then click the machine's `Save` button to save a local copy of
that diskette in your Downloads folder.  When you visit the page later, use the `Choose` and `Mount` buttons to locate
that diskette image and reload it into drive B, and then use the game's **RESTORE** command to read the diskette.

NOTE: The PCjs `Save` button cannot be used to create a working copy of the copy-protected diskette in drive A.  The `Save`
feature works only with standard non-copy-protected disk formats.

### Related

  - [Zork II: The Wizard of Frobozz](../zork2/)
  - [Zork III: The Dungeon Master](../zork3/)

### References

[MobyGames](https://www.mobygames.com/game/zork-the-great-underground-empire)

![Front Cover](https://www.mobygames.com/images/covers/l/2934-zork-the-great-underground-empire-dos-front-cover.jpg)

![Back Cover](https://www.mobygames.com/images/covers/l/1742-zork-the-great-underground-empire-dos-back-cover.jpg)
