---
layout: page
title: BASIC Conversion Utility
permalink: /tools/basconvert/
modules_init:
  - import BASConvertUI from "/tools/basconvert/basconvertui.js";
  - new BASConvertUI("convertBAS", "displayBAS");
---

Select a BASIC file from your machine and click `Convert`.

{% include web/transform.html form="convertBAS" action="Convert" output="displayBAS" %}
