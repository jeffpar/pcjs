---
layout: page
title: Texas Instruments TI-42 ROM
permalink: /machines/ti/ti42/rom/
redirect_from: /devices/ti42/rom/
---

Our TI-42 ROM comes from [Sean Riddle](http://seanriddle.com/tms1500.html), who decapped a TMC1502, photographed
the ROM, and produced the following resources:

- [Die Shot](http://seanriddle.com/tmc1502metalrom.jpg)
- [ROM Array Photo](http://seanriddle.com/tmc1502acidrom.jpg)
- [Raw ROM](tmc1502raw.bin)
- [Original ROM (Big-endian)](tmc1502be.bin)

From the [Original ROM (Big-endian)](tmc1502be.bin), I created an [Original ROM (Little-endian)](tmc1502le.bin)
binary:

	node ../../ti57/rom/be2le.js tmc1502be.bin tmc1502le.bin

along with the corresponding [JSON Data](../../ti55/rom/tmc1503le.json) that the PCjs [TI-55 Emulator](../../ti55/) uses:

	node ../../ti57/rom/bin2json.js tmc1502le.bin > tmc1502le.json

See the [TI-57 ROM](/machines/ti/ti57/rom/) for more details on the ROM format, including how the "raw" photographic ROM
data is used to produce a working ROM binary.
