---
layout: page
title: PCjs BASIC Conversion Utility
permalink: /tools/basconvert/
modules_init:
  - import BASConvertUI from "/tools/basconvert/basconvertui.js";
  - new BASConvertUI("convertBAS", "displayBAS");
---

Select a IBM PC BASIC file from your machine and click `Convert`.

{% include web/transform.html form="convertBAS" action="Convert" output="displayBAS" %}

This page uses the [BASConvert.js](basconvert.js) JavaScript library to convert encrypted and/or binary IBM PC BASIC program files to plain-text, with any CP437 non-ASCII characters converted to UTF-8.  This library is also built into the [DiskImage.js](../diskimage/) command-line utility and is used in conjunction with the `--normalize` option.
