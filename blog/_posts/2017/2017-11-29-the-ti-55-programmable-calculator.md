---
layout: post
title: The TI-55 Programmable Calculator
date: 2017-11-29 15:00:00
permalink: /blog/2017/11/29/
machines:
  - id: ti55
    type: ti55
    name: TI-55 Programmable Calculator
    config: /machines/ti55/ti55.json
    layout: /_includes/ti55/ti55-full.html
  - id: ti57-rev0
    type: ti57
    name: TI-57 Programmable Calculator
    config: /machines/ti57/ti57-rev0.json
    layout: /_includes/ti57/ti57-full.html
---

Building on the PCjs [TI-57 Programmable Calculator](/blog/2017/11/10/) emulator,
I'm happy to report that PCjs can also emulate the [TI-55 Programmable Calculator](/machines/ti/ti55/) now.
You can see both in operation [below](/blog/2017/11/29/#pcjs-ti-55-and-ti-57-emulators).

Both calculators used the same basic chip.  In the TI-57, the chip was designated "TMC1501", and in the TI-55,
it was "TMC1503", but both were [TMS-1500](/machines/ti/modules/cpu1500.js)-compatible.  The primary difference between
the chips was the contents of their ROMs.  And I'm not sure the [TI-55 ROM](/machines/ti/ti55/rom/) was available anywhere
previously, until now, thanks to [Sean Riddle](http://seanriddle.com/tms1500.html).

In theory, the TI-55 and TI-57 would have cost exactly the same to manufacture.  However, I haven't seen any
sales materials for the two calculators, so I don't know in what order they were introduced or whether they were
sold at the same list price.  All I know is that both were introduced in 1977 and that the TI-57 list price
was $79.95.  I have no information on the TI-55 list price.

It's possible that the TI-55 was produced first, and then programmers at Texas Instruments were able to optimize
the ROM, increasing the number of programming steps from 32 to 50 and adding support for loops and conditionals, which
they then marketed as the slightly more powerful TI-57.  However, that's pure speculation on my part.  It's more
likely that they decided up front to create several devices with the same hardware, providing different capabilities
to different audiences, and possibly at different price points.

Also, the fact that the TI-55 uses a chip with a higher designation ("1503") than the TI-57 ("1501") suggests that the
TI-55 may have been finished *after* the TI-57, and that the lower model number was simply a reflection of its more
limited programmability.  Finally, Sean Riddle points out that since the TI-55 and TI-57 produce different results for
the "[Calculator Forensics](http://www.rskey.org/~mwsebastian/miscprj/models.htm)" test, the ROMs may have even been
developed by different teams at Texas Instruments.

It may be worth undertaking a detailed comparison of the [TI-55 ROM](/machines/ti/ti55/rom/) and
[TI-57 ROM](/machines/ti/ti57/rom/) at some point, because the TI-57 has fewer built-in functions, as evidenced by
the smaller of number of "dual function" buttons, and yet the TI-57 ROM appears to be almost completely full.

In fact, the TI-57 ROM apparently didn't even have room for this simple TI-55 feature, described on page 4 of the
[TI-55 Owner's Manual](http://www.datamath.net/Manuals/TI-55_US.pdf):

> Your calculator is designed to be energy efficient.  After about 1 to 3 minutes of non-use,
the display will shut down to a single decimal point traveling in the display.  To restore the display at
any time, just proceed with a calculation, or press the **2nd** key twice.

I'm surprised they couldn't be a little more precise about the time-out ("1 to 3 minutes"?), but the point is,
it's just another feature that didn't (and presumably couldn't) make it into the TI-57 ROM.

NOTE: It's possible I don't have the TI-55 Emulator properly clocked yet, because you have to wait approximately
3 minutes and 40 seconds before the "traveling decimal point" appears.

### PCjs TI-55 and TI-57 Emulators

{% include machine.html id="ti55" %}

{% include machine.html id="ti57-rev0" %}
