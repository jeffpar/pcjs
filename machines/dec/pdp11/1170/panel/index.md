---
layout: page
title: DEC PDP-11/70 with 256Kb and Front Panel
permalink: /machines/dec/pdp11/1170/panel/
redirect_from: /devices/pdp11/machine/1170/panel/
machines:
  - id: test1170
    type: pdp11
    config: /machines/pdp11/machine/1170/panel/machine.xml
---

The machine below is a PDP-11/70 includes our stylized Front Panel and a "teletype" I/O window connected to the
PDP-11/70's serial port.  If you want a Debugger, see our collection of similar [PDP-11/70 Machines with Debugger](debugger/).

Other attached I/O devices include:

- [PC11 Paper Tape Reader](/machines/pdp11/pc11/)
- [RX11 Disk Controller](/machines/pdp11/rx11/)
- [RK11 Disk Controller](/machines/pdp11/rk11/)
- [RL11 Disk Controller](/machines/pdp11/rl11/)

Our [PDP-11 Boot Monitor](/software/dec/pdp11/boot/monitor/) is preloaded at address 140000, and the
[M9312 ROM](/machines/dec/pdp11/rom/M9312/) is installed at address 165000. 

{% include machine.html id="test1170" %}
