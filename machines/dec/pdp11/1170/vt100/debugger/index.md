---
layout: page
title: DEC PDP-11/70 with VT100 Terminal and Debugger
permalink: /machines/dec/pdp11/1170/vt100/debugger/
redirect_from: /devices/pdp11/machine/1170/vt100/debugger/
machines:
  - id: test1170
    type: pdp11
    debugger: true
    resume: 1
    config: /machines/dec/pdp11/1170/vt100/debugger/machine.xml
    connection: dl11->vt100.serialPort
  - id: vt100
    type: pcx80
    debugger: true
    resume: 1
    config: /machines/pcx80/machine/vt100/debugger/machine.xml
    connection: serialPort->test1170.dl11
---

This VT100 Terminal is connected to the PDP-11/70 below.

Both machines include a Debugger.  Machine configurations [without Debuggers](../) are also available.

{% include machine.html id="vt100" %}

{% include machine.html id="test1170" %}
