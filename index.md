---
layout: page
title: Welcome to PCjs
permalink: /
---

{% unless site.developer %}

Well, not really.

This new version of [pcjs.org](https://www.pcjs.org) isn't quite ready yet, so head over [there](https://www.pcjs.org) and ignore this site for now.

When everything has been migrated, and the new PCjs Explorer is finished, this will become the new pcjs.org, so don't bother bookmarking anything here
(do people still bookmark things anyway?)

Thanks,
Jeff

---

{% else %}

### TODO

  - Check redirects for the [top links](/assets/tests/links/)
  - Machines like [DEC PDP-11/70 with VT100 Terminal](/machines/dec/pdp11/1170/vt100/) used to use special CSS classes (`machine-right` and `machine-left`) to arrange the machines side-by-side; think about alternatives.
  - Retest all VT100 connection demos (eg, [DEC VT100 Terminal connected to IBM PC AT](/machines/dec/vt100/5170/), [DEC PDP-11/70 with VT100 Terminal](/machines/dec/pdp11/1170/vt100/), and [Connecting an IBM PC to a DEC VT100 Terminal](/blog/2016/08/19/)).
  - Finish moving all /archive folders from the old repo to the new

---

{% endunless %}

This is PCjs, home of **PCx86**, the original IBM PC emulator for your web browser.
We try to recreate the complete IBM PC experience, using original ROMs, CPUs running at their
original speeds, and early IBM video cards and monitors, including the classic green monochrome MDA
monitor and the venerable "flickery" CGA monitor.

Over time, PCjs has slowly expanded to include [PC Clones](/machines/pcx86/compaq/deskpro386/),
[Minicomputers](/machines/dec/pdp11/), [Programmable Calculators](/machines/ti/ti57/), [Terminals](/machines/dec/vt100/),
[Arcade Games](/machines/arcade/invaders/), and [LED Simulations](/machines/led/life/color/).
To learn more, visit the [PCjs]({{ site.github.repository_url }}) open-source project on [GitHub]({{ site.github.owner_url }}).

### PCjs Highlights

A few hand-picked PCjs Machines are highlighted below, featuring hardware or software we consider historically interesting.

The <a href="#pcjs-explorer" onclick="pcjsExplorerView(this, event)">PCjs Explorer</a> offers many more hardware and software
combinations to choose from, as well as a small collection of related documentation.

{%- include gallery/featured.html width="200" height="128" -%}
