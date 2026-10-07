---
layout: page
title: Palm IIIc (2000)
permalink: /machines/palm/iiic/
machines:
  - id: palm-iiic
    type: palm
    name: Palm IIIc
    config: /machines/palm/iiic.json
    layout: /_includes/machines/palm/iiic-diag.html
    unbundled: true
---

This PCjs machine is an early work-in-progress emulation of the Palm IIIc, the first color Palm device, running the PalmOS 3.5 ROM.  It uses the same PCjs Palm emulation modules as the [Palm Pilot](/machines/palm/pilot/), with the following hardware differences, which are selected by the machine's [configuration file](/machines/palm/iiic.json):

- Motorola MC68EZ328 ("DragonBall EZ") CPU running at 20Mhz, instead of the original MC68328 ("DragonBall")
- Epson SED1375 LCD controller, driving a 160x160 color LCD with up to 256 colors (8 bits per pixel)
- 8Mb of RAM and a 1.5Mb ROM

The image of the Palm IIIc is the 2x "skin" from the Palm OS Emulator (POSE), and the positions of the screen, digitizer, and buttons are taken from the POSE skin file as well.

{% include machine.html id="palm-iiic" %}

### Demos

Click any of the following applications to install it on the Palm IIIc and launch it (make sure the Palm IIIc is on and has completed Setup first).  Once installed, an application remains on the device (until it's reset), and it can be launched again using the Applications button.

- [Bejeweled 1.2 (demo)](/machines/palm/iii/demos/Bejeweled.prc) by [Astraware](https://web.archive.org/web/20010410214533/http://www.astraware.com/palm/bejeweled/)
- [Pocket Aargon](/machines/palm/iiic/demos/Aargon.prc) by [DoubleBit Software](https://web.archive.org/web/20040627193028/http://www.doublebit.com/aargon/)

[Pocket Aargon](https://web.archive.org/web/20040627193028/http://www.doublebit.com/aargon/) is a puzzle game of lasers and logic based on the PC game *Aargon Deluxe* developed by Twilight Games. I worked with them to develop *Pocket Aargon* for color Palm and Pocket PC devices, and it features a built-in tutorial, 30 Beginner levels, 90 Deluxe levels, and 30 new levels designed especially for handhelds, along with a level editor.  I built this particular version in June 2003.

You can also install applications using the Debugger's `load` command (eg, `load demos/Aargon.prc`).  Any of the Palm Pilot's [demos](/machines/palm/pilot/#demos) and Palm III's [demos](/machines/palm/iii/#demos) can be installed as well (eg, `load /machines/palm/iii/demos/Railroad.prc`).

<script>
  document.querySelectorAll('a[href$=".prc"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      if (window.command) window.command("load " + link.getAttribute("href"));
    });
  });
</script>

### Palm IIIc Emulation Notes

The first time the Palm IIIc boots, it will walk you through its Setup screens, including digitizer calibration. Like the [Palm Pilot](/machines/palm/pilot/), the state of the machine is automatically saved in your browser.

Hardware differences from the Pilot that are currently emulated:

- The MC68EZ328's single timer, interrupt levels, chip ID, and register reset values
- The Epson SED1375's display modes (1, 2, 4 and 8 bits per pixel), color look-up table, and power-save/blank bits
- The Burr-Brown ADS7843 A/D converter on the SPI bus, which PalmOS uses to read the digitizer and battery level
- The hardware buttons, which are arranged in a matrix (rows on Port C, columns on Port D), including the keyboard
  interrupt that PalmOS uses to wake from sleep

Things that are not emulated yet include the backlight, the serial port (HotSync), and IR.

### Resources

- [MC68EZ328 User's Manual](/machines/palm/pilot/webarchive/motorola_com/MC68EZ328UM.pdf)
- [S1D13705 (SED1375) Hardware Functional Specification](/machines/palm/pilot/webarchive/epson_com/x27aa001.pdf)
