---
layout: page
title: TI-57 with Revised ROM and Diagnostics
permalink: /machines/ti/ti57/rev1/
redirect_from: /devices/ti57/machine/rev1/
machines:
  - id: ti57-rev1
    type: ti57
    uncompiled: true
    name: TI-57 Programmable Calculator
    config: /machines/ti57/ti57-rev1.json
    layout: /_includes/ti57/ti57-diag.html
---

The TI-57 configuration below is identical to our [Original ROM](../rev0/) configuration, except that
it is using a [Revised ROM](/machines/ti/ti57/rom/#revised-rom).

If any errors occur during operation, the Diagnostics window should display the last instruction decoded.
The window also accepts a few debugging commands.  Use '?' for help.

{% include machine.html id="ti57-rev1" %}
