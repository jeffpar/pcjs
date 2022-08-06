---
layout: page
title: Dual VT100 Terminals
permalink: /machines/dec/vt100/dual/
redirect_from: /devices/pc8080/machine/vt100/dual/
machines:
  - id: vt100
    type: vt100
    name: DEC VT100
    config: /machines/dec/vt100/vt100.json
    layout: /_includes/vt100/vt100.html
    connection: serialPort->vt100b.serialPort
  - id: vt100b
    type: vt100
    name: DEC VT100
    config: /machines/dec/vt100/vt100b.json
    layout: /_includes/vt100/vt100b.html
    connection: serialPort->vt100.serialPort
---

This is a test of two [VT100 Terminals](../) whose serial ports are *virtually* connected, so anything you type in the first
terminal should appear on the screen of the second, and vice versa.  Click or tap on the screen of the desired terminal before
you begin typing.  A [Dual Diagnostic Configuration](debugger/) is also available.

If either terminal becomes LOCKED, press the SET-UP key (mapped to your F9 function key) twice to unlock it. 

{% include machine.html id="vt100" %}

{% include machine.html id="vt100b" %}
