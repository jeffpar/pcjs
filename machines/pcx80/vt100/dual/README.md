---
layout: page
title: Dual VT100 Terminals
permalink: /machines/pcx80/vt100/dual/
redirect_from: /devices/pc8080/machine/vt100/dual/
machines:
  - id: vt100a
    type: pcx80
    config: /configs/pcx80/xml/machine/vt100/machine.xml
    connection: serialPort->vt100b.serialPort
  - id: vt100b
    type: pcx80
    config: /configs/pcx80/xml/machine/vt100/machine.xml
    connection: serialPort->vt100a.serialPort
---

This is a test of two [VT100 Terminals](../) whose serial ports are *virtually* connected, so anything you type in the first
terminal should appear on the screen of the second, and vice versa.  Click or tap on the screen of the desired terminal before
you begin typing.

A [Dual Debugger Configuration](debugger/) is also available.

If either terminal becomes LOCKED, press the SET-UP key (mapped to your F9 function key) twice to unlock it. 

{% include machine.html id="vt100a" %}

{% include machine.html id="vt100b" %}
