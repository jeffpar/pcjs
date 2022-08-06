---
layout: page
title: DEC PDP-11/20 with Boot Monitor 
permalink: /machines/dec/pdp11/1120/monitor/
redirect_from: /devices/pdp11/machine/1120/monitor/
machines:
  - id: test1120
    type: pdp11
    config: /machines/pdp11/machine/1120/monitor/machine.xml
---

The machine below pre-loads the [PDP-11 Boot Monitor](/software/dec/pdp11/boot/monitor/) into RAM:

```xml
<ram id="ram" addr="0x0000" size="0xE000" file="/software/dec/pdp11/boot/monitor/BOOTMON.json" load="0xC000" exec="0xC000"/>
```

{% include machine.html id="test1120" %}

This machine is also available with our built-in [Debugger](debugger/).
