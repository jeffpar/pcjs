---
layout: page
title: DEC PDP-11/70 for RSTS/E with Front Panel and Debugger
permalink: /machines/dec/pdp11/1170/panel/debugger/rsts/
redirect_from: /devices/pdp11/machine/1170/panel/debugger/rsts/
machines:
  - id: test1170
    type: pdp11
    debugger: true
    config: /configs/pdp11/xml/machine/1170/panel/debugger/machine.xml
    autoStart: true
    autoMount:
      RL0:
        path: /disks-pdp11/dec/rl01k/RL01K-RSTS-V70.json
---

This machine is ready to boot [RSTS/E v7.0](/disks/dec/rl01k/rstsv70/) ("BOOT RL0").

{% include machine.html id="test1170" %}
