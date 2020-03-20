---
layout: page
title: TI-42 &quot;MBA&quot; Programmable Calculator with Diagnostics
permalink: /machines/ti/ti42/diags/
redirect_from: /devices/ti42/machine/diags/
machines:
  - id: ti42
    type: ti42
    name: TI-42 Programmable Calculator
    config: /configs/ti42/ti42.json
    layout: /_includes/ti42/ti42-diag.html
---

The TI-42 configuration below is identical to our [Original](../) configuration, except that
it includes diagnostics.

If any errors occur during operation, the Diagnostics window should display the last instruction decoded.
The window also accepts a few debugging commands.  Use '?' for help.

{% include machine.html id="ti42" %}
