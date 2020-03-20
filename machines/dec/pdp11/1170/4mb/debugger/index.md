---
layout: page
title: DEC PDP-11/70 with 4Mb, Front Panel, and Debugger
permalink: /machines/dec/pdp11/1170/4mb/debugger
redirect_from: /devices/pdp11/machine/1170/4mb/debugger/
machines:
  - id: test1170
    type: pdp11
    debugger: true
    config: /configs/pdp11/machine/1170/4mb/debugger/machine.xml
    autoStart: true
    autoMount:
      RL0:
        path: /decdisks/pdp11/rl01k/RL01K-RSTS-V70.json
---

{% include machine.html id="test1170" %}
