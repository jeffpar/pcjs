---
layout: page
title: Palm III (1998)
permalink: /machines/palm/iii/
machines:
  - id: palm-iii
    type: palm
    name: Palm III
    config: /machines/palm/iii.json
    layout: /_includes/machines/palm/iii-diag.html
    unbundled: true
---

This PCjs machine emulates the 3Com Palm III, running the PalmOS 3.3 ROM.  It uses the same PCjs Palm emulation modules as the [Palm Pilot](/machines/palm/pilot/), with the same Motorola MC68328 ("DragonBall") CPU and LCD controller, but with 2Mb of RAM and a newer ROM, which supports a 4-level grayscale display (2 bits per pixel).

The image of the Palm III is the 2x "skin" from the Palm OS Emulator (POSE), and the positions of the screen, digitizer, and buttons are taken from the POSE skin file as well.

{% include machine.html id="palm-iii" %}

### Demos

Click any of the following applications to install it on the Palm III and launch it (make sure the Palm III is on and has been calibrated first).  Once installed, an application remains on the device (until it's reset), and it can be launched again using the Applications button.

- [Bejeweled 1.2](/machines/palm/iii/demos/Bejeweled.prc) by [Astraware](https://web.archive.org/web/20010410214533/http://www.astraware.com/palm/bejeweled/)
- [Railroad](/machines/palm/iii/demos/Railroad.prc) by [Tinyware](https://web.archive.org/web/20000819070218/http://www.eskimo.com/~scottlu/pilot/railroad.zip) ([ReadMe](/machines/palm/iii/demos/Railroad.txt))
- [SFCave 0.03](/machines/palm/iii/demos/SFCave.prc) by [SunFlat](https://web.archive.org/web/20010413162644/http://hp.vector.co.jp/authors/VA003665/win/palmsfcave.html)

You can also install applications using the Debugger's `load` command (eg, `load demos/Bejeweled.prc`). Any of the Palm Pilot's [demos](/machines/palm/pilot/#demos) can be installed as well.

<script>
  document.querySelectorAll('a[href$=".prc"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      if (window.command) window.command("load " + link.getAttribute("href"));
    });
  });
</script>
