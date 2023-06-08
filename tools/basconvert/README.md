---
layout: page
title: PCjs BASIC Conversion Utility
permalink: /tools/basconvert/
modules_init:
  - import BASConvertUI from "/tools/basconvert/basconvertui.js";
  - new BASConvertUI("convertBAS", "displayBAS");
---

Select a BASIC file from your machine and click `Convert`.

{% include web/transform.html form="convertBAS" action="Convert" output="displayBAS" %}

This page uses my [BASConvert.js](basconvert.js) JavaScript library that converts encrypted and/or binary IBM PC BASIC program files to plain-text; this library is built into the [DiskImage.js](../diskimage/) command-line utility and is used in conjunction with the `--normalize` option.
