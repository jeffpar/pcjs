---
layout: page
title: TI-55 Programmable Calculator with Diagnostics
permalink: /machines/ti/ti55/diags/
redirect_from: /devices/ti55/machine/diags/
machines:
  - id: ti55
    type: ti55
    uncompiled: true
    name: TI-55 Programmable Calculator
    config: /machines/ti/ti55/ti55.json
    layout: /_includes/ti55/ti55-diag.html
---

The TI-55 configuration below is identical to our [Original](../) configuration, except that
it includes diagnostics.

If any errors occur during operation, the Diagnostics window should display the last instruction decoded.
The window also accepts a few debugging commands.  Use '?' for help.

{% include machine.html id="ti55" %}
