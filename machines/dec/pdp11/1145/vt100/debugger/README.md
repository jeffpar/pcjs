---
layout: page
title: PDP-11/45 with VT100 Terminal and Debugger
permalink: /devices/pdp11/machine/1145/vt100/debugger/
machines:
  - id: test1145
    type: pdp11
    debugger: true
    class: machine-right
    config: /devices/pdp11/machine/1145/vt100/debugger/machine.xml
    connection: dl11->vt100.serialPort
  - id: vt100
    type: pc8080
    debugger: true
    class: machine-left
    config: /devices/pc8080/machine/vt100/debugger/machine.xml
    connection: serialPort->test1145.dl11
---

{% include machine.html id="vt100" %}

{% include machine.html id="test1145" %}
