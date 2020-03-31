---
layout: page
title: Columbia Data Products MPC 1600 ROM BIOS
permalink: /machines/pcx86/cdp/mpc1600/rom/
redirect_from: /devices/pcx86/rom/cdp/mpc1600/
---

[BIOS-434.json](BIOS-434.json) is a JSON-encoded dump of the ROM images (MPC4.34_U45.BIN, MPC4.34_U46.BIN, and
MPC4.34_U47.BIN) obtained from [www.minuszerodegrees.net](http://www.minuszerodegrees.net/rom/rom.htm).  

The dump was produced by concatenating the three 4Kb ROM images to produce a single 12Kb ROM image and then running
[FileDump]({{ site.github.pages }}/tools/filedump/):

	cat archive/MPC4.34_U47.BIN archive/MPC4.34_U46.BIN archive/MPC4.34_U45.BIN > archive/MPC4.34.rom
	filedump --file=archive/MPC4.34.rom --output=BIOS-434.json --comments --format=bytes
