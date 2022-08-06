---
layout: page
title: DEC PDP-11/20 with Bootstrap Loader
permalink: /machines/dec/pdp11/1120/bootstrap/
redirect_from: /devices/pdp11/machine/1120/bootstrap/
machines:
  - id: test1120
    type: pdp11
    config: /machines/pdp11/machine/1120/bootstrap/machine.xml
    autoMount:
      PTR:
        path: /software/dec/pdp11/tapes/absloader/DEC-11-L2PC-PO.json
---

The machine below pre-loads the [Bootstrap Loader](/software/dec/pdp11/boot/bootstrap/) code into 16Kb of RAM:

```xml
<ram id="ram" addr="0x0000" size="0x4000" file="/software/dec/pdp11/boot/bootstrap/BOOTSTRAP-16KB.json"/>
```

and then pre-loads the [Absolute Loader](/software/dec/pdp11/tapes/absloader/) tape image to the PC11 Paper Tape Reader:

```xml
<device id="pc11" type="pc11" baudReceive="9600" autoMount='{PTR:{path:"/software/dec/pdp11/tapes/absloader/DEC-11-L2PC-PO.json"}}'>...</device>
```

Click **Run** to load the [Absolute Loader](/software/dec/pdp11/tapes/absloader/).
When the [Bootstrap Loader](/software/dec/pdp11/boot/bootstrap/) is finished, it will HALT,
leaving the [Absolute Loader](/software/dec/pdp11/tapes/absloader/) ready to run immediately after the HALT.

You can then select another tape image in the Absolute Loader format, such as [BASIC (Single User)](/software/dec/pdp11/tapes/basic/),
click **Load** and then **Run**.

If you need to start over, select "Bootstrap Loader (16Kb)" from the list of tapes and click **Read** instead of
**Load**, re-installing the [Bootstrap Loader](/software/dec/pdp11/boot/bootstrap/) directly into RAM.

Alternatively, just press the **Reset** button.  The RAM component was recently updated to restore pre-loaded images whenever
the entire machine is reset.  You'll still need to manually reload the [Absolute Loader](/software/dec/pdp11/tapes/absloader/)
tape image, however.

{% include machine.html id="test1120" %}

This machine is also available with our built-in [Debugger](debugger/).
