---
layout: page
title: DEC PDP-11/70 for XXDP+ with Front Panel and Debugger
permalink: /machines/dec/pdp11/1170/panel/debugger/xxdp/
redirect_from: /devices/pdp11/machine/1170/panel/debugger/xxdp/
machines:
  - id: test1170
    type: pdp11
    debugger: true
    config: /configs/pdp11/xml/machine/1170/panel/debugger/machine.xml
    autoStart: true
    autoMount:
      RL0:
        path: /disks-pdp11/dec/rl02k/RL02K-XXDP.json
machineScripts:
  runEKBAD0: |
    selectDrive RL11 RL0;
    select RL11 listDisks "XXDP+ Diagnostics";
    loadDisk RL11;
    wait RL11;
    bootDisk RL11;
    sleep 1000;
    receiveData SerialPort "\r";
    sleep 500;
    receiveData SerialPort "R EKBAD0\r";
  testPanel: |
    hold Panel TEST 1000;
    toggle Panel ENABLE;
    sleep 2000;
    reset Panel;
    hold Panel CONT 500;
---

This machine is ready to boot [XXDP+ Diagnostics](/disks/dec/rl02k/xxdp/) ("BOOT RL0") and run diagnostics
(e.g., "R EKBEE1"):

- [EKBAD0: 11/70 CPU DIAGNOSTIC (PART 1)](/disks/dec/rl02k/xxdp/ekbad0/)
- [EKBBF0: 11/70 CPU DIAGNOSTIC (PART 2)](/disks/dec/rl02k/xxdp/ekbbf0/)
- [EKBEE1: 11/70 MEMORY MANAGEMENT DIAGNOSTIC](/disks/dec/rl02k/xxdp/ekbee1/)

[Instructions](#test1170) for running those diagnostics are provided below.

{% include machine.html id="test1170" %}

### Instructions 

We need to select a drive to load the [RL02K XXDP+ Diagnostics Disk](/disks/dec/rl02k/xxdp/), and since it is
an RL02K disk, we need to use an RL02 drive.  A typical PDP-11 machine with a single [RL11 Disk Controller](/devices/pdp11/rl11/)
could contain up to four such drives, which we refer to as RL0 through RL3.  And since we want to boot the XXDP
disk, we need to select drive RL0, since the boot code on the disk appears to assume drive 0. 

To automatically boot the [RL02K XXDP+ Diagnostics Disk](/disks/dec/rl02k/xxdp/) and run the **EKBAD0** diagnostic,
press: {% include machine/command.html type='button' label='Run EKBAD0' machine='test1170' command='runEKBAD0' %}

To test the Front Panel LEDs and the ENABLE/CONT switches,
press: {% include machine/command.html type='button' label='Test Panel' machine='test1170' command='testPanel' %}
