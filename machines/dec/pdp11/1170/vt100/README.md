---
layout: page
title: DEC PDP-11/70 with VT100 Terminal
permalink: /machines/dec/pdp11/1170/vt100/
redirect_from: /devices/pdp11/machine/1170/vt100/
machines:
  - id: test1170
    type: pdp11
    config: /machines/dec/pdp11/1170/vt100/machine.xml
    connection: dl11->vt100.serialPort
    resume: 1
  - id: vt100
    type: vt100
    name: DEC VT100
    config: /machines/dec/vt100/vt100.json
    layout: /_includes/machines/vt100/vt100.html
    connection: serialPort->test1170.dl11
    resume: 1
---

This VT100 Terminal is connected to the PDP-11/70 below.

Machine configurations with the [PCjs Debugger](debugger/) are also available.

{% include machine.html id="vt100" %}

{% include machine.html id="test1170" %}
