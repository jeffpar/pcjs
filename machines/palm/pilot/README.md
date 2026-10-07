---
layout: page
title: Palm Pilot (1995)
permalink: /machines/palm/pilot/
machines:
  - id: palm-pilot
    type: palm
    name: Palm Pilot
    config: /machines/palm/pilot.json
    layout: /_includes/machines/palm/pilot-diag.html
    unbundled: true
---

This PCjs machine emulates the original Palm Pilot, running the PalmOS 1.0 ROM.  It's a port of the [PIMulator](https://web.archive.org/web/20020627015208/http://www.pimcity.com/welcome.htm), a Java-based Palm Pilot emulator I wrote over 20 years ago, which emulated the Motorola 68000 CPU and the MC68328 ("DragonBall") hardware, including its interrupt controller, timers, LCD controller, and the digitizer and buttons attached to it.

Use your mouse (or finger) as the stylus: tap anywhere on the screen or the silk-screened area below it, including the Graffiti area, where you can write characters.  The hardware buttons on the image can also be clicked. Hard-coded key mappings include:

- 0: Power
- 1: Date Book
- 2: Address Book
- 3: To Do List
- 4: Memo Pad
- Up/Down arrows: Scroll Up/Down

The first time the Pilot boots, it will ask you to calibrate the digitizer, by tapping the center of a few targets. The state of the machine (including everything you've entered) is automatically saved in your browser whenever you leave the page, and restored when you return.  Clicking the **Reset** button below the machine erases RAM (the equivalent of a "hard reset"), so the Pilot will start over.  Use the Pilot's own power button to put it to sleep and wake it up again; like the real thing, it will also turn itself off after a period of inactivity (see the "Auto-off" setting in Prefs).

{% include machine.html id="palm-pilot" %}

### Demos

Click any of the following applications to install it on the Pilot and launch it.  Like the original PIMulator, this "injects" a series of PalmOS API calls (DmCreateDatabaseFromImage, SysUIAppSwitch, etc) while the Pilot is idle, so make sure the Pilot is on and has been calibrated first.  Once installed, an application remains on the Pilot (until the Pilot is reset), and it can be launched again using the Pilot's Applications button.

- [CODE5](/machines/palm/pilot/demos/CODE5.prc) by PIMCity
- [Daleks](/machines/palm/pilot/demos/Daleks.prc) by [IndiVideo](https://web.archive.org/web/19991123230030/http://www.individeo.net/Daleks.html) ([ReadMe](/machines/palm/pilot/demos/Daleks.txt))
- [PocketChess 1.1](/machines/palm/pilot/demos/PocketChess.prc) by [Tinyware](https://web.archive.org/web/19990220084804/http://www.eskimo.com/~scottlu/pilot/index.html) ([ReadMe](/machines/palm/pilot/demos/PocketChess.txt))

Some applications, like Bejeweled, Railroad, and SFCave, don't run on PalmOS 1.0, so try them on the [Palm III](/machines/palm/iii/#demos) instead.

You can also install applications using the Debugger's `load` command (eg, `load demos/Daleks.prc`).

<script>
  document.querySelectorAll('a[href$=".prc"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      if (window.command) window.command("load " + link.getAttribute("href"));
    });
  });
</script>

### Palm Pilot Emulation Notes

The PCjs Debugger is available in the Diagnostics window below the machine.  Type `?` for a list of commands. For example, `h` halts the machine, `u` unassembles instructions, `t` steps through them, `r` displays the CPU registers, and `g` resumes execution.  PalmOS system calls (eg, `TRAP #15` followed by an API selector) are displayed by name.

Like PIMulator, the CPU masks all addresses to 25 bits, so the ROM, which PalmOS addresses at 0x10C00000, appears at 0x00C00000 in the Debugger, and the DragonBall hardware registers, which PalmOS addresses at 0xFFFFF000, appear at 0x01FFF000.

### Resources

- Darrin Massena's [Pilot Software Development](https://web.archive.org/web/19970113081208/http://massena.com/darrin/pilot/index.html)
