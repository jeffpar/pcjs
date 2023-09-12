---
layout: page
title: TI-57 with Original ROM and Diagnostics
permalink: /machines/ti/ti57/rev0/
redirect_from: /devices/ti57/machine/rev0/
machines:
  - id: ti57-rev0
    type: ti57
    unbundled: true
    name: TI-57 Programmable Calculator
    config: /machines/ti/ti57/rev0/ti57.json
    layout: /_includes/ti57/ti57-diag.html
---

The TI-57 emulator below is one of the most faithful TI-57 emulations currently available.  It should run at
roughly the same speed as an original device.  That includes calculation speed, display speed, and pause delays.

It is also using an exact copy of an original [TI-57 ROM](/machines/ti/ti57/rom/); no instructions have been patched.
A configuration using a [Revised ROM](../rev1/) is also available.

Special attention has been made to the display as well.  The shape of the digits were taken directly from TI patent
drawings, and the digits are drawn/erased with the same frequency as a real device, so when the display goes blank for
brief periods, you know that a lengthy calculation is being performed.  A few minor display enhancements have been
enabled, since they don't affect the overall authenticity of the simulation, such as
<span class="indTI57">2nd</span>,
<span class="indTI57">INV</span>,
<span class="indTI57">Deg</span>,
<span class="indTI57">Rad</span>, and
<span class="indTI57">Grad</span> indicators.

This emulator is also the first PCjs machine to take advantage of JavaScript [ES6](https://www.w3schools.com/js/js_es6.asp),
so it requires a *more* modern web browser.  However, I've also "compiled" it for [ES5](https://www.w3schools.com/js/js_es5.asp)
back on the main [TI-57](../) page, so give that a try if you run into any problems here.

If any errors occur during operation, the Diagnostics window should display the last instruction decoded.  The window
also accepts a few debugging commands.  Use '?' for help.

{% include machine.html id="ti57-rev0" %}
