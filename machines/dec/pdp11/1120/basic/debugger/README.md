---
layout: page
title: PDP-11/20 BASIC Demo with Debugger
permalink: /machines/dec/pdp11/1120/basic/debugger/
redirect_from: /devices/pdp11/machine/1120/basic/debugger/
machines:
  - id: test1120
    type: pdp11
    debugger: true
    config: /configs/pdp11/xml/machine/1120/basic/debugger/machine.xml
    autoMount: ''
---

The machine below pre-loads the [DEC PDP-11 BASIC](/apps/pdp11/tapes/basic/) tape image into 16Kb of RAM:

```xml
<ram id="ram" addr="0x0000" size="0x4000" file="/apps/pdp11/tapes/basic/DEC-11-AJPB-PB.json"/>
```

You can also manually load it into memory using the [Bootstrap Loader](/apps/pdp11/boot/bootstrap/).
See the [Bootstrap Loader Demo (with Debugger)](/devices/pdp11/machine/1120/bootstrap/debugger/) for details.

There are also some [Debugging Notes](/apps/pdp11/tapes/basic/#debugging-notes) on the
[DEC PDP-11 BASIC](/apps/pdp11/tapes/basic/) page, if you're inclined to do some debugging with the built-in
PDPjs Debugger.

{% include machine.html id="test1120" %}
