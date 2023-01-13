---
layout: page
title: IBM PC (Model 5150) with Dual Displays
permalink: /machines/pcx86/ibm/5150/dual/
redirect_from: /devices/pcx86/machine/5150/dual/64kb/
machines:
  - id: ibm5150-dual
    type: pcx86
    config: /machines/pcx86/ibm/5150/dual/64kb/machine.json
    debugger: available
    autoMount:
      A: PC DOS 2.00 (Disk 1)
    autoType: $date\r$time\r
---

The original IBM PC fully supported dual-monitor configurations, but unlike today, it was an expensive setup and required
separate video cards.  When the IBM PC was introduced, the only available combination was an MDA (Monochrome Display Adapter)
connected to an IBM 5151 Monochrome Display, and a CGA (Color Graphics Adapter) connected to an IBM 5153 Color Display.

At any given time, only one display was considered "active", and the initial active display was determined by switches on the
motherboard.  Beginning with PC DOS 2.00, you could use `MODE` commands to change the active display:

- `MODE CO40` selects the Color Display and sets it to 40-column mode
- `MODE CO80` selects the Color Display and sets it to 80-column mode
- `MODE MONO` selects the Monochrome Display, which supports only 80-column mode

The initial active display for the machine below is the Monochrome Display.  Third-party software with dual-display 
support could write to both displays simultaneously, but most text-based applications only wrote to the active display.
Programs that used color graphics, on the other hand, might use the Color Display whether or not it was currently
active.

{% include machine.html id="ibm5150-dual" %}
