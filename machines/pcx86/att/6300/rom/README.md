---
layout: page
title: AT&amp;T 6300 ROM BIOS
permalink: /machines/pcx86/att/6300/rom/
redirect_from: /devices/pcx86/rom/att/6300/
---

[BIOS-143](BIOS-143.json5) is JSON-encoded dump of the ROM images (BIOS143E.BIN and BIOS143O.BIN) obtained from
the [AT&amp;T 6300 Shrine](https://sites.google.com/site/att6300shrine/Home/downloads).

The dump was produced by running the PCjs [FileImage](/tools/fileimage/) utility to merge the even and odd portions
(8Kb each) to produce a single 16Kb ROM image:

	fileimage --file=archive/BIOS143E.BIN --merge=archive/BIOS143O.BIN --output=BIOS-143.json5 --comments --format=bytes

NOTE: The AT&T 6300 ROM BIOS is apparently identical to the [Olivetti M24 ROM BIOS](/machines/pcx86/olivetti/m24/rom/).
