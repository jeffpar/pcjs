---
layout: page
title: Dual VT100 Terminals with Diagnostics
permalink: /machines/dec/vt100/dual/debugger/
redirect_from: /devices/pc8080/machine/vt100/dual/debugger/
machines:
  - id: vt100
    type: vt100
    name: DEC VT100
    config: /machines/vt100/vt100.json
    layout: /_includes/vt100/vt100-diag.html
    connection: serialPort->vt100b.serialPort
  - id: vt100b
    type: vt100
    name: DEC VT100
    config: /machines/vt100/vt100b.json
    layout: /_includes/vt100/vt100b-diag.html
    connection: serialPort->vt100.serialPort
---

Here are [Dual VT100 Terminals](../) with the PCjs Debugger attached to each. 

{% include machine.html id="vt100" %}

{% include machine.html id="vt100b" %}
