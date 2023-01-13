---
layout: page
title: "Nine Princes in Amber (1985)"
permalink: /software/pcx86/game/other/1985/nine_princes/
preview: images/screenshot.png
machines:
  - id: ibm5160-npia
    type: pcx86
    resume: 1
    config: /machines/pcx86/ibm/5160/cga/640kb/machine.xml
    autoMount:
      A:
        name: "PC DOS 2.00 (Disk 1)"
      B:
        name: "PC DOS 2.00 (Disk 2)"
    autoScript: copyHD
machineScripts:
  copyHD: |
    wait Keyboard DOS;
    type Keyboard "$date\r$time\rC:\rCOPY A:ASSIGN.COM\rPROMPT $P$G\rMKDIR AMB\r";
    wait Keyboard;
    sleep 1000;
    wait Keyboard DOS;
    select FDC listDrives "A:";
    select FDC listDisks "Nine Princes in Amber (Disk A)";
    loadDisk FDC;
    wait FDC;
    type Keyboard "CD A:AMB\rCOPY A:*.* C:AMB\r";
    wait Keyboard;
    sleep 1000;
    wait Keyboard DOS;
    select FDC listDrives "B:";
    select FDC listDisks "Nine Princes in Amber (Disk B)";
    loadDisk FDC;
    wait FDC;
    type Keyboard "CD B:AMB\rCOPY B:*.* C:AMB\r";
    wait Keyboard;
    sleep 1000;
    wait Keyboard DOS;
    type Keyboard "ASSIGN A=C B=C\rCD AMB\rAMB\r";
---

On initial startup (or reset) of the machine below, a PCjs machine script will automatically copy all the files from the two
"Nine Princes in Amber" IBM PC diskettes to drive **C** and then start the game.

{% include machine.html id="ibm5160-npia" %}

### Game Notes

The **A** and **B** diskettes are from my private collection, but I suspect that I modified the contents of the diskettes
shortly after purchasing the game.  At the very least, I probably patched `AMB.EXE` on the **A** diskette to circumvent any
copy-protection, since it's dated "Jan 7 1986", whereas all the other files on the diskettes are from 1985.  In addition,
there are `AMBER.BAT` and `AMBERF.BAT` on the **A** diskette dated "Dec 28 1985", which I almost certainly created to make it
easier to run on whatever PC I was using at the time (since they assume the existence of a **D** drive).

Need hints? You're in luck, because I also saved the [notes](Nine_Princes_in_Amber-Handwritten_Notes.jpg) I made
while playing the game back 1985/1986.

![Nine Princes in Amber Cheat Sheet](Nine_Princes_in_Amber-Handwritten_Notes.jpg)

### Online References

I also scanned all the printed materials that came with the game and uploaded the PDF to the Internet Archive.

[![Nine Princes in Amber (1985)]({{ site.software.gamedisks.server }}/pcx86/game/other/1985/nine_princes/Nine_Princes_in_Amber-1985.jpg)](https://archive.org/details/nine-princes-in-amber-ibm-pc-1985)
