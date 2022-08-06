---
layout: post
title: Booting PDP-11 BASIC
date: 2016-10-21 23:00:00
permalink: /blog/2016/10/21/
machines:
  - id: test1120
    type: pdp11
    debugger: true
    autoMount: ''
    config: /machines/pdp11/machine/1120/basic/debugger/machine.xml
---

PDPjs can now simulate a PDP-11/20.  It was one of the first PDP-11 models, and since it had no MMU,
it was limited to a maximum of 56Kb of RAM (or as DEC would say, 28K words), since the top 8Kb (or 4K words)
of its 16-bit address space was reserved for UNIBUS devices.

The first PDPjs test of a PDP-11/20 machine was running [PDP-11 BASIC](/software/dec/pdp11/tapes/basic/), by loading
it directly into memory from the original paper tape image.  This required changes to the [RAM](/machines/dec/pdp11/lib/ram.js)
component, including a new *loadImage()* interface that understands DEC's paper tape format.

To provide a more "authentic" experience, there is also a new [PC11 Paper Tape](/machines/pdp11/pc11/) component,
and machines can now be configured to include a virtual paper tape reader, with an [assortment of paper tapes](/software/dec/pdp11/tapes/)
ready to be loaded.

In the real world, before you could load *any* paper tape, you had to first enter a
[Bootstrap Loader](/software/dec/pdp11/boot/bootstrap/).  PDPjs has simplified that process by including the "Bootstrap Loader"
as just another paper tape image that you can read directly into memory, using the **Read** button.  Once that has been
done, you can then load any other paper tape image using the Bootstrap Loader, once you **Load** it into the paper tape
reader.

{% include machine.html id="test1120" %}
