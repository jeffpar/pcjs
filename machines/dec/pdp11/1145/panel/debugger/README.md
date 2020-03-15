---
layout: page
title: DEC PDP-11/45 with 256Kb, Front Panel, Debugger
permalink: /machines/dec/pdp11/1145/panel/debugger/
redirect_from: /devices/pdp11/machine/1145/panel/debugger/
machines:
  - id: test1145
    type: pdp11
    debugger: true
    config: /configs/pdp11/xml/machine/1145/panel/debugger/machine.xml
---

{% include machine.html id="test1145" %}

Other interesting things to know about this machine:

* It includes an [M9312 ROM](/machines/dec/pdp11/rom/M9312) at address 165000.  The exact ROM is [23-616F1](/machines/dec/pdp11/rom/M9312/23-616F1.txt).
