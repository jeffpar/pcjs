---
layout: page
title: DEC PDP-11/20 with BASIC
permalink: /machines/dec/pdp11/1120/basic/
redirect_from: /devices/pdp11/machine/1120/basic/
machines:
  - id: test1120
    type: pdp11
    config: /machines/pdp11/machine/1120/basic/machine.xml
    autoMount: ''
---

The machine below pre-loads the [DEC PDP-11 BASIC](/software/dec/pdp11/tapes/basic/) tape image into 16Kb of RAM:

```xml
<ram id="ram" addr="0x0000" size="0x4000" file="/software/dec/pdp11/tapes/basic/DEC-11-AJPB-PB.json"/>
```

You can also manually load it into memory using the [Bootstrap Loader](/software/dec/pdp11/boot/bootstrap/).
See the [DEC PDP-11/20 with Bootstrap Loader](/machines/dec/pdp11/1120/bootstrap/) for details.

{% include machine.html id="test1120" %}

This machine is also available with our built-in [Debugger](debugger/).
