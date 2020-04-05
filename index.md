---
layout: page
heading: Welcome to PCjs
permalink: /
redirect_from:
  - /devices/
---

{% if site.developer %}

### TODO

  - Check redirects for the [top links](/assets/tests/links/)
  - Turn the TI patents into a gallery: https://www.pcjs.org/devices/ti57/patents/
  - Machines like [DEC PDP-11/70 with VT100 Terminal](/machines/dec/pdp11/1170/vt100/) used to use special CSS classes (`machine-right` and `machine-left`) to arrange the machines side-by-side; think about alternatives.
  - Retest all VT100 connection demos (eg, [DEC VT100 Terminal connected to IBM PC AT](/machines/dec/vt100/5170/), [DEC PDP-11/70 with VT100 Terminal](/machines/dec/pdp11/1170/vt100/), and [Connecting an IBM PC to a DEC VT100 Terminal](/blog/2016/08/19/)).
  - Finish moving all /archive folders from the old repo to the new

---

{% endif %}

PCjs uses JavaScript to recreate the IBM PC experience, using original ROMs, CPUs running at their original speeds,
and early IBM video cards and monitors, including the classic green monochrome MDA monitor and the venerable "flickery" CGA monitor.

Over time, PCjs emulations have expanded to include selected [PC Compatibles](/machines/pcx86/compaq/deskpro386/) and more
classic machines, such as [Minicomputers](/machines/dec/pdp11/), [Programmable Calculators](/machines/ti/ti57/), [Terminals](/machines/dec/vt100/),
and [Arcade Games](/machines/arcade/invaders/).
To learn more, visit the [PCjs]({{ site.github.repository_url }}) open-source project on [GitHub]({{ site.github.owner_url }}).

### PCjs Highlights

A few hand-picked PCjs Machines are highlighted below, featuring hardware and/or software that may be considered historically
interesting or unusual.  You can browse more hardware and software combinations, and a small collection of related documentation,
using the {% include explorer/link.html %}.

{%- include gallery/featured.html width="200" height="128" -%}
