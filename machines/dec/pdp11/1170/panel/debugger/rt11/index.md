---
layout: page
title: DEC PDP-11/70 for RT-11 with Front Panel and Debugger
permalink: /machines/dec/pdp11/1170/panel/debugger/rt11/
redirect_from: /devices/pdp11/machine/1170/panel/debugger/rt11/
preview: images/screenshot.png
machines:
  - id: test1170
    type: pdp11
    debugger: true
    config: /configs/pdp11/machine/1170/panel/debugger/machine.xml
    autoStart: true
    autoMount:
      RK0:
        path: /decdisks/pdp11/rk03/RK03-RT11-V40.json
      RL0:
        path: /decdisks/pdp11/rl02k/RL02K-XXDP.json
      PTR:
        path: /software/dec/pdp11/tapes/absloader/DEC-11-L2PC-PO.json
---

This machine is ready to boot [RT-11 v4.0](/software/dec/pdp11/disks/rk03/rtl11v4/) (`BOOT RK0`).

Alternatively, you can also boot [XXDP+ Diagnostics](/software/dec/pdp11/disks/rl02k/xxdp/) (`BOOT RL0`) and run
diagnostics (e.g., `R EKBEE1`):

- [EKBAD0: 11/70 CPU DIAGNOSTIC (PART 1)](/software/dec/pdp11/disks/rl02k/xxdp/ekbad0/)
- [EKBBF0: 11/70 CPU DIAGNOSTIC (PART 2)](/software/dec/pdp11/disks/rl02k/xxdp/ekbbf0/)
- [EKBEE1: 11/70 MEMORY MANAGEMENT DIAGNOSTIC](/software/dec/pdp11/disks/rl02k/xxdp/ekbee1/)

For more information about booting and running these diagnostics, see [XXDP+ Diagnostics](/software/dec/pdp11/disks/rl02k/xxdp/).

{% include machine.html id="test1170" %}

{% include gallery/documents.html title="PDP-11/70 Documentation" path="/machines/dec/pdp11/" width="200" height="260" tag="hardware,1170" %}

{% include gallery/documents.html title="RT-11 Documentation" path="/machines/dec/pdp11/" width="200" height="260" tag="rt11" %}
