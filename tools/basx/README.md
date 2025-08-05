---
layout: page
title: PCjs BASIC File Conversion Utility
permalink: /tools/basx/
redirect_from: /tools/basconvert
module_scripts:
  - import BASFileUI from "/tools/modules/web/basfileui.js";
  - new BASFileUI("convertBAS", "displayBAS");
---

Select a IBM PC BASIC file from your machine and click `Convert`.

{% include web/transform.html form="convertBAS" action="Convert" output="displayBAS" %}

This page uses the [BASFile.js](https://github.com/jeffpar/pcjs/tree/master/tools/modules/basfile.js) module to convert encrypted and/or binary IBM PC BASIC program files to plain-text, with the option to convert any CP437 non-ASCII characters to UTF-8.  The module is also built into the [DiskImage.js](../diskimage/) command-line utility (in conjunction with the `--normalize` option) as well as the [DX.js](../dx/) utility.
