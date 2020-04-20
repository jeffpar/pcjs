---
layout: page
title: "DONKEY.BAS from PC DOS 1.00 (1981)"
permalink: /software/pcx86/app/ibm/basic/1.00/donkey/
redirect_from: /apps/pcx86/1981/donkey/
preview: images/screenshot.png
machines:
  - id: ibm5150-donkey
    type: pcx86
    resume: 1
    config: /configs/pcx86/machine/ibm/5150/cga/64kb/machine.json
    state: state.json
    autoMount:
      A:
        name: PC DOS 1.00
      B:
        name: None
---

{% include machine.html id="ibm5150-donkey" %}

The above simulation is configured for a clock speed of 4.77Mhz, with 64Kb of RAM and a CGA display,
using the original IBM PC Model 5150 ROM BIOS and CGA font ROM.  This configuration includes a predefined
state, with PC DOS 1.0 already booted and DONKEY.BAS ready to run.

This particular machine has been configured to automatically save all your changes (subject to the limits
of your browser's local storage), so you can close the browser in the middle of a game of DONKEY, and
the next time you load this page, your progress (and the donkey) should be perfectly restored.

Browse all the [BASIC Programs](/software/pcx86/app/ibm/basic/1.00/) included with
[PC DOS 1.00](/software/pcx86/sys/dos/ibm/1.00/).

### DONKEY.BAS

[[Download](DONKEY.BAS)]

```bas
{% include_relative DONKEY.BAS %}
```
