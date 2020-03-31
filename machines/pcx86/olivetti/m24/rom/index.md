---
layout: page
title: Olivetti M24 ROM BIOS
permalink: /machines/pcx86/olivetti/m24/rom/
redirect_from: /devices/pcx86/rom/olivetti/m24/
---

[BIOS-143.json](BIOS-143.json) is JSON-encoded dump of the ROM images (OLIVETTI_M24_VERSION_1.43_LOW.BIN
and OLIVETTI_M24_VERSION_1.43_HIGH.BIN) obtained from [www.minuszerodegrees.net](http://www.minuszerodegrees.net/rom/rom.htm).

The dump was produced by running [FileDump]({{ site.github.pages }}/tools/filedump/) to merge the even and odd portions (8Kb each)
to produce a single 16Kb ROM image:

	filedump --file=archive/OLIVETTI_M24_VERSION_1.43_LOW.BIN --merge=archive/OLIVETTI_M24_VERSION_1.43_HIGH.BIN --output=BIOS-143.json --comments --format=bytes

NOTE: The [AT&T 6300 ROM BIOS](/machines/pcx86/att/6300/rom/) is apparently identical to the Olivetti M24 ROM BIOS.
