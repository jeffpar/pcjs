---
layout: page
title: Zenith Data Systems Z-150 ROM BIOS
permalink: /machines/pcx86/zenith/z150/rom/
redirect_from: /devices/pcx86/rom/zenith/z150/
---

[BIOS-Z150-1988](BIOS-Z150-1988.json5) is a JSON-encoded dump of ROM images (444-229-18.BIN and 444-260-18.BIN) obtained from the
[Vintage Computer Federation](http://www.vcfed.org/forum/showthread.php?32016-Wanted-Zenith-PC-XT-ROM-BIOS-files-with-DEBUGGER-Z-150-etc) forum.

The dump was produced by concatenating the two 16Kb ROM images to produce a single 32Kb ROM image and then running
[FileImage](/tools/fileimage/):

	cat archive/444-260-18.BIN archive/444-229-18.BIN >archive/BIOS-Z150-1988.rom
	fileimage --file=archive/BIOS-Z150-1988.rom --output=BIOS-Z150-1988.json5 --comments --format=bytes
