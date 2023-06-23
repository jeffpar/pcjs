---
layout: page
title: Texas Instruments TI-55 ROM
permalink: /machines/ti/ti55/rom/
redirect_from: /devices/ti55/rom/
---

Our TI-55 ROM comes from [Sean Riddle](http://seanriddle.com/tms1500.html), who decapped a TMC1503, photographed
the ROM, and produced the following resources:

- [Die Shots](http://seanriddledecap.blogspot.com/2017/11/blog-post.html)
- [ROM Array Photo](http://seanriddle.com/tmc1503acidroms.jpg)
- [Raw ROM](tmc1503raw.bin)
- [Original ROM (Big-endian)](tmc1503be.bin)

From the [Original ROM (Big-endian)](tmc1503be.bin), I created an [Original ROM (Little-endian)](tmc1503le.bin)
binary:

	node ../../ti57/rom/be2le.js tmc1503be.bin tmc1503le.bin

along with the corresponding [JSON Data](tmc1503le.json) that the PCjs [TI-55 Emulator](../) uses:

	node ../../ti57/rom/bin2json.js tmc1503le.bin > tmc1503le.json

See the [TI-57 ROM](/machines/ti/ti57/rom/) for more details on the ROM format, including how the "raw" photographic ROM
data is used to produce a working ROM binary.
