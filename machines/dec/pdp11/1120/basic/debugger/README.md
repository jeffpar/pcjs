---
layout: page
title: DEC PDP-11/20 with BASIC and Debugger
permalink: /machines/dec/pdp11/1120/basic/debugger/
redirect_from: /devices/pdp11/machine/1120/basic/debugger/
machines:
  - id: test1120
    type: pdp11
    debugger: true
    config: /configs/pdp11/machine/1120/basic/debugger/machine.xml
    autoMount: ''
---

The machine below pre-loads the [DEC PDP-11 BASIC](/software/dec/pdp11/tapes/basic/) tape image into 16Kb of RAM:

```xml
<ram id="ram" addr="0x0000" size="0x4000" file="/software/dec/pdp11/tapes/basic/DEC-11-AJPB-PB.json"/>
```

You can also manually load it into memory using the [Bootstrap Loader](/software/dec/pdp11/boot/bootstrap/).
See the [DEC PDP-11/20 with Bootstrap Loader and Debugger](/machines/pdp11/1120/bootstrap/debugger/) for details.

There are also some [Debugging Notes](/software/dec/pdp11/tapes/basic/#debugging-notes) on the
[DEC PDP-11 BASIC](/software/dec/pdp11/tapes/basic/) page, if you're inclined to do some debugging with the built-in
PDPjs Debugger.

{% include machine.html id="test1120" %}
