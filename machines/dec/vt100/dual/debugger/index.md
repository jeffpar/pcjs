---
layout: page
title: Dual VT100 Terminals with Debuggers
permalink: /machines/dec/vt100/dual/debugger/
redirect_from: /devices/pc8080/machine/vt100/dual/debugger/
machines:
  - id: vt100a
    type: pcx80
    debugger: true
    autoStart: true
    messages: mem|port
    config: /configs/pcx80/machine/vt100/debugger/machine.xml
    connection: serialPort->vt100b.serialPort
  - id: vt100b
    type: pcx80
    debugger: true
    autoStart: true
    messages: mem|port
    config: /configs/pcx80/machine/vt100/debugger/machine.xml
    connection: serialPort->vt100a.serialPort
---

Here are [Dual VT100 Terminals](../) with the PCjs Debugger attached to each. 

{% include machine.html id="vt100a" %}

{% include machine.html id="vt100b" %}
