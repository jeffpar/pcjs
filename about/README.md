---
layout: page
title: About PCjs
menu_title: About
menu_order: 1
permalink: /about/
redirect_from: /docs/about/
---

The [PCjs Project]({{ site.github.repository_url }}) is a collection of computer simulations written in
JavaScript.  It is an open-source project maintained on [GitHub]({{ site.github.owner_url }}) and hosted at
[{{ site.domain }}]({{ site.url }}/).

The goals of the project are to create fast, full-featured simulations of classic computer hardware,
help people understand how these early machines worked, make it easy to experiment with different machine
configurations, and provide a platform for running and analyzing early computer software.

The simulations are written entirely in JavaScript and run well in a variety of web browsers, on both
desktop and mobile devices.  Machines are created with simple XML files that define a set of machine components,
along with the features that each component should enable.  More details about PCjs machine definitions and
component capabilities will be made available in the Documentation section.

### The Challenger 1P

The first PCjs simulation was [C1Pjs](/machines/osi/c1p/), which emulates the
Challenger 1P, a 6502-based microcomputer introduced by Ohio Scientific in 1978.
C1Pjs v1.0 was released in July 2012.  More information about the first release of C1Pjs was
[posted](http://osiweb.org/osiforum/viewtopic.php?f=3&t=103) on the
[OSI Discussion Forum](http://osiweb.org/osiforum/index.php) at [osiweb.org](http://osiweb.org/).

### IBM PC and Compatibles

The next PCjs simulation was [PCx86]({{ site.github.pages }}/machines/pcx86/), which emulates the original IBM PC, IBM PC XT,
and IBM PC AT, as well as compatible machines like the COMPAQ DeskPro 386.  PCx86 v1.0 was released in late 2012.

[PCx86]({{ site.github.pages }}/machines/pcx86/) emulates the Intel 8088, 80186, 80286 and 80386 CPUs, and it faithfully renders
characters and graphics produced by the IBM Monochrome Display Adapter (MDA), Color Graphics Adapter (CGA),
Enhanced Graphics Adapter (EGA), and Video Graphics Array (VGA) video cards.

Support for assorted motherboard and expansion bus components (eg, disk controllers, parallel and serial ports, etc)
is available in any appropriately configured machine, along with the powerful built-in PCjs Debugger
that provides visual access and control of the simulated hardware.

Over time, the set of PCjs machines has slowly expanded to include [Minicomputers](/machines/dec/pdp11/),
[Programmable Calculators](/machines/ti/ti57/), [LED Simulations](/machines/led/life/color/), [Terminals](/machines/dec/vt100/),
and [Arcade Games](/machines/arcade/invaders/).

### License

The [PCjs Project]({{ site.github.repository_url }}) is now an open-source project on [GitHub]({{ site.github.owner_url }}).
All published portions are free for redistribution and/or modification under the terms of the [MIT License](/LICENSE.txt).

You are required to include the following links and copyright notice:

> [PCjs](https://www.pcjs.org) © 2012-2024 [Jeff Parsons](https://github.com/jeffpar)

in every copy or modified version of this work, and to display that notice on every web page or computer that it runs on.

### More Information

If you have questions or run into any problems, feel free to send [email](mailto:Jeff@pcjs.org).
