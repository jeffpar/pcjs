---
layout: page
title: PDP-11/20 BASIC Demo
permalink: /devices/pdp11/machine/1120/basic/
machines:
  - id: test1120
    type: pdp11
    autoMount: ''
---

PDP-11/20 BASIC Demo
--------------------

The machine below pre-loads the [DEC PDP-11 BASIC](/apps/pdp11/tapes/basic/) tape image into 16Kb of RAM:

```xml
<ram id="ram" addr="0x0000" size="0x4000" file="/apps/pdp11/tapes/basic/DEC-11-AJPB-PB.json"/>
```

You can also manually load it into memory using the [Bootstrap Loader](/apps/pdp11/boot/bootstrap/).
See the [Bootstrap Loader Demo](/devices/pdp11/machine/1120/bootstrap/) for details.

{% include machine.html id="test1120" %}

This machine is also available with our built-in [Debugger](debugger/).
