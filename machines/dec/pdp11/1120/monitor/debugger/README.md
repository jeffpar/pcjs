---
layout: page
title: PDP-11/20 Boot Monitor with Debugger
permalink: /devices/pdp11/machine/1120/monitor/debugger/
machines:
  - id: test1120
    type: pdp11
    debugger: true
---

PDP-11/20 Boot Monitor (with Debugger)
--------------------------------------

The machine below pre-loads the [PDP-11 Boot Monitor](/apps/pdp11/boot/monitor/) into RAM:

```xml
<ram id="ram" addr="0x0000" size="0xE000" file="/apps/pdp11/boot/monitor/BOOTMON.json" load="0xC000" exec="0xC000"/>
```

{% include machine.html id="test1120" %}
