---
layout: page
title: DEC PDP-11/45 with VT100 Terminal and Debugger
permalink: /machines/dec/pdp11/1145/vt100/debugger/
redirect_from: /devices/pdp11/machine/1145/vt100/debugger/
machines:
  - id: test1145
    type: pdp11
    debugger: true
    config: /machines/dec/pdp11/1145/vt100/debugger/machine.xml
    connection: dl11->vt100.serialPort
  - id: vt100
    type: pcx80
    debugger: true
    config: /machines/pcx80/machine/vt100/debugger/machine.xml
    connection: serialPort->test1145.dl11
---

{% include machine.html id="vt100" %}

{% include machine.html id="test1145" %}
