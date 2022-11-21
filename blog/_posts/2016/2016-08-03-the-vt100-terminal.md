---
layout: post
title: The VT100 Terminal
date: 2016-08-03 18:00:00
permalink: /blog/2016/08/03/
machines:
  - id: vt100
    type: vt100
    name: DEC VT100
    config: /machines/dec/vt100/vt100.json
    layout: /_includes/vt100/vt100-diag.html
---

Summer has been filled with distractions, but I've finally begun making headway on a
[DEC VT100 Terminal](/machines/dec/vt100/) simulation.

Unlike other VT100 emulators, this isn't simply an emulation of VT100 protocols.  It's a simulation of the VT100's
8080 CPU, running the original [VT100 Firmware](/machines/dec/vt100/rom/) inside the [PCx80]({{ site.github.pages }}/machines/pcx80/)
CPU emulator, along with other essential components that the CPU interacts with to control the display, keyboard, and
serial port.

Most of the VT100's (non-AVO) functionality should be operational now.  Once the VT100 "powers on," it should clear
the screen and briefly display a "WAIT" message as it processes its Non-Volatile RAM (NVR).  When you see a blinking cursor,
it's ready to use.  Press the SET-UP key to configure the terminal, just as you would an original VT100 terminal.

For even more fun, check out the [Dual VT100 Terminals](/machines/dec/vt100/dual/) demo.

{% include machine.html id="vt100" %}

Function keys are mapped as follows:

- F1: PF1
- F2: PF2
- F3: PF3
- F4: PF4
- F6: BREAK
- F7: LINE FEED
- F8: NO SCROLL
- F9: SET-UP

From the SET-UP screen, you can press **4** to switch to LOCAL mode and verify local operation of most VT100
keys.  The following keys have special meaning inside SET-UP Mode:

- 0: RESET
- 2: SET/CLEAR TAB
- 3: CLEAR ALL TABS
- 4: ONLINE/LOCAL
- 5: SET-UP A/B
- 6: TOGGLE FEATURE
- 7: TRANSMIT SPEED
- 8: RECEIVE SPEED
- 9: 80/132 COLUMNS
- SHIFT-S: Save SET-UP Features
- SHIFT-R: Restore SET-UP Features

The initial goal for the simulation is to provide a virtual terminal that can communicate with other PCjs machines
and provide a realistic serial communication experience, all from the comfort of your web browser.

Eventually, I would also like to recreate a fully commented source-code listing for the [DEC VT100 ROMs](/machines/dec/vt100/rom/).
DEC's [VT100 Technical Manuals](/machines/dec/vt100/#documents) are excellent, and they provide an enormous amount of hardware detail,
but they are a bit light on certain programming details, and there are no firmware listings like those those that IBM provided
in the early IBM PC Technical Reference manuals.

Check out the [VT100 Debugger Configuration](/machines/dec/vt100/debugger/) for additional information about
VT100 internals and links to other technical resources.
