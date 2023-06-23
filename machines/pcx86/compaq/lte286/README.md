---
layout: page
title: COMPAQ LTE/286
permalink: /machines/pcx86/compaq/lte286/
machines:
  - id: compaq-lte286-640k
    type: pcx86
    debugger: true
    unbundled: true
    config: /machines/pcx86/compaq/lte286/cga/debugger/machine.xml
    autoType: $date\r$time\rDEMO\r
---

The LTE/286 came standard with the 12Mhz 80C286 CPU, 640Kb internal RAM and a 1.44 Mb floppy drive. The three basic configurations were:

  - Model 1 with no internal hard drive
  - Model 20 with internal 20Mb hard drive (Type 54)
  - Model 40 with internal 40Mb hard drive (Type 53)

Options included a 80C287 FPU, 1/2/4 Mb expandable memory and various external storage and peripherals. Supported operating systems were Compaq MS-DOS 3.x and 4.x.

{% include machine.html id="compaq-lte286-640k" %}

[Link to Overclockers Review](https://www.overclockers.com/compaq-lte-286-model-40/)

Emulated Configurations ([ROM REV B.1](/machines/pcx86/compaq/lte286/rom/)):

  - [LTE/286 Model 1](/machines/pcx86/compaq/lte286/cga/machine.xml) ([Debugger](/machines/pcx86/compaq/lte286/cga/debugger/machine.xml))
  - LTE/286 Model 20 with 1Mb
  - LTE/286 Model 20 with 2Mb
  - LTE/286 Model 40 with 2Mb
  - LTE/286 Model 40 with 4Mb

[![LTE/286 Technical Reference Guide](/machines/pcx86/compaq/lte286/covers/COMPAQ_LTE_LTE286_Technical_Reference_Guide_1990_03.jpg)](https://ia601508.us.archive.org/20/items/trg-lte-lte-286-1990-03/TRG_LTE_LTE286_1990_03.pdf)
