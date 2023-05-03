---
layout: page
title: "PC-SIG Diskette Library (Disk #3473)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3473/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3473"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## SNDFORM.TXT

{% raw %}
```
╔═════════════════════════════════SoundForms══════════════════════════════════╗
║  Instructions:                                                              ║
║  <RETURN> - toggle between Create Object Screen & Construction Screen.      ║
║  <ESC> ---- back out of screens and menus                                   ║
║                                                                             ║
║     Create Object Screen (this is default screen):                          ║
║        Space Bar --- toggle drawing Pen Up/Down.                            ║
║        Cursor Keys - move cursor and draw Object                            ║
║                      [Vertical axis is frequency, Horizontal time]          ║
║        "P" --------- Play Object                                            ║
║        F2 ---------- Redraw Object                                          ║
║        Alt/E ------- Erase (with Pen Down - for editing)                    ║
║        1-6 --------- Select Object                                          ║
║        Alt/F ------- Files                                                  ║
║        Alt/O ------- Options                                                ║
║                                                                             ║
║     Construction Screen:                                                    ║
║        Cursor Keys - move cursor to Object                                  ║
║        F1 ---------- mark Object to connect From (pen goes down)            ║
║        F2 ---------- mark Object to connect To (pen goes up)                ║
║        "P" --------- Play Construction                                      ║
║        Alt/F ------- Files                                                  ║
║        Alt/O ------- Options                                                ║
║                                                                             ║
╚═══════════════ [H] for Help with Options, <RET> for Program ════════════════╝
╔══════════════════════════════════Options════════════════════════════════════╗
║                                                                             ║
║  Use Alt/O on either screen. Up/Down Arrows + <RET> to select Option,       ║
║  or press first letter of Option.                                           ║
║                                                                             ║
║  Create Object Screen:                                                      ║
║     Create - Enter number of Object to create. #1 is ready at startup.      ║
║              2-6 are not. Do this the first time you make object 2-6, or    ║
║              after deleting Object. Only Created Objects appear on          ║
║              Construction Screen.                                           ║
║     Delete - Enter number of Object to delete. Program returns to Object 1. ║
║     Pace --- Enter value from .01 to 2 (represents seconds. This changes    ║
║              the time Object takes to play. Each cursor increment to the    ║
║              right is one timing unit.                                      ║
║     New ---- Clears data for all Objects. Starts over.                      ║
║     Help --- This and previous page.                                        ║
║                                                                             ║
║  Construction Screen:                                                       ║
║     Erase --- Erases most recent connection.                                ║
║     Reverse - Enter Object to reverse, followed by comma, followed by       ║
║               Object destination.                                           ║
║     Help ---- This and previous page.                                       ║
║                                                                             ║
║                                                                             ║
╚══════════════════[H] for previous page, <RET> for Program═══════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3473

     Volume in drive A has no label
     Directory of A:\

    MW       TBC    103301  12-05-90   7:38p
    KEYBOARD EXE     32938   8-12-89  10:26p
    PITCHMEM TBC      3977   8-19-89   6:10p
    SNDFORM  TBC     45179   9-26-90  10:58a
    SNDFORM  TXT      4049   8-04-89   3:12p
    SYNTHED  EXE     52144   8-06-88   3:28p
    EDITERR  MSG      1786   7-28-86   1:01a
            7 file(s)     243374 bytes
                           76800 bytes free
