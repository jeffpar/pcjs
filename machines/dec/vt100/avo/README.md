---
layout: page
title: DEC VT100 Terminal with Advanced Video Option
permalink: /machines/dec/vt100/avo/
machines:
  - id: vt100
    type: vt100
    name: DEC VT100
    config: /machines/dec/vt100/vt100.json
    layout: /_includes/machines/vt100/vt100.html
    avo: true
---

This is our [VT100 Terminal](../) with DEC's **Advanced Video Option** (AVO) installed.  The AVO was a small
board that plugged into the VT100's terminal controller, and it added three things to the basic VT100:

  - Enough screen memory to display 24 lines in 132-column mode (instead of only 14)
  - Four more attributes for every character on the screen: **bold**, **underline**, **blink**, and
    an alternate character set
  - Sockets for additional ROMs (program ROMs, and an alternate character generator ROM)

{% include machine.html id="vt100" %}

### Trying It Out

The easiest way to see the AVO in action is to press the **SET-UP** key (or **F9**).  With the AVO installed,
the words "SET-UP A" blink in bold, the words "TO EXIT PRESS "SET-UP"" are underlined, and the tab ruler at the
bottom of the screen alternates between normal and reverse video.  Compare that to the SET-UP screen of a
[VT100](../) without the AVO.

While you're in SET-UP, press **9** to switch to 132 columns and then press **SET-UP** again.  You now have 24 lines
of 132 columns.

You can also experiment with the attributes yourself.  Press **SET-UP**, press **4** to switch from ON LINE to LOCAL,
and press **SET-UP** again; now everything you type is sent directly to the screen.  Then use the **ESC** button to
type any of the following "Select Graphic Rendition" sequences:

| Sequence      | Attribute           |
|---------------|---------------------|
| `ESC [ 0 m`   | All attributes off  |
| `ESC [ 1 m`   | Bold                |
| `ESC [ 4 m`   | Underline           |
| `ESC [ 5 m`   | Blink               |
| `ESC [ 7 m`   | Reverse video       |

Attributes can be combined in a single sequence (eg, `ESC [ 1 ; 4 m` for bold and underline), and they remain
in effect for everything you type until you turn them off.  The entire screen can be reversed as well, with
`ESC [ ? 5 h` (and restored with `ESC [ ? 5 l`).

### How It Works

As with the rest of our VT100 emulation, none of these features are implemented by interpreting escape sequences.
The original [VT100 Firmware](../rom/) already contains all the code required to support the AVO, so all PCjs has
to do is emulate the additional hardware.

When the firmware starts, it reads the VT100's "flags buffer" (port 0x42), and if bit 1 is *clear*, then it knows
the AVO is present.  The power-on memory test is then extended from the basic VT100's 3K of RAM (0x2000-0x2BFF)
to include the AVO's RAM:

  - 0x2C00-0x2FFF: 1K of additional screen RAM
  - 0x3000-0x3FFF: 4K of attribute RAM

The attribute RAM is only 4 bits wide (the firmware's memory test ignores the upper 4 bits of every location
above 0x3000), and it parallels the VT100's entire 4K of scratch and screen RAM, so the attributes for any character
on the screen are always located exactly 0x1000 bytes above the character itself.  As DEC's
VT100 Technical Manual puts it, "the AVO widens the entire screen RAM by 4 bits to make each character location
12 bits wide."

The attribute bits are all "active low", so the firmware initializes all the attribute RAM to 0xFF:

| Bit | Attribute (when clear)  |
|-----|-------------------------|
|  0  | Blink                   |
|  1  | Underline               |
|  2  | Bold                    |
|  3  | Alternate character set |

A VT100 *without* the AVO has only one attribute bit per character: bit 7 of the character itself, known as
the "base attribute".  The VT100's DC012 video control chip can be programmed to display that attribute as either
reverse video or underline, and without the AVO, that choice is determined by the cursor (block or underline)
selected in SET-UP, because the cursor is displayed by periodically toggling the base attribute of the character
under it.  This is why a basic VT100 with an underline cursor can display underlined characters but *not* reversed
characters, and vice versa.

With the AVO, the firmware always programs the DC012 to display the base attribute as reverse video, and an underline
cursor is displayed by toggling the underline bit in attribute RAM instead.  So all the attributes are available at
the same time, regardless of cursor.

To support bold and blinking characters, the DC012 has two video outputs, which combine to produce four
beam intensities: off, dim, normal, and bright.  According to the Technical Manual, here's how every combination of
attributes is displayed, where "Reverse" is the exclusive-OR of a character's reverse video attribute and the
reverse screen setting:

| Reverse | Bold | Blink | Background   | Character       |
|---------|------|-------|--------------|-----------------|
| No      | No   | No    | Off          | Normal          |
| No      | No   | Yes   | Off          | Normal / Dim    |
| No      | Yes  | No    | Off          | Bright          |
| No      | Yes  | Yes   | Off          | Bright / Normal |
| Yes     | No   | No    | Dim          | Off             |
| Yes     | No   | Yes   | Dim / Off    | Off / Normal    |
| Yes     | Yes  | No    | Normal       | Off             |
| Yes     | Yes  | Yes   | Normal / Off | Off / Bright    |

So blinking characters never actually disappear: they alternate between their usual intensity and the next lower
intensity, unless they're also reversed, in which case they alternate between reverse video and normal video.
The DC012 doesn't have a blink timer, either; it has a "blink flip-flop" that the firmware toggles roughly once
every second, producing a blink rate that's about half that of the cursor.

Underline simply turns on every dot of a character's ninth scan line, which is why an underlined character in
reverse video has a dark underline.

Finally, the alternate character set bit tells the VT100 to use the alternate character generator ROM on the AVO
board.  That ROM socket was normally empty, in which case every dot of the character is turned on.  The firmware
sets that bit when a character set that it calls an "alternate ROM" set has been selected (using the escape sequences
`ESC ( 1` and `ESC ( 2`).

### Enabling the AVO

The AVO can be added to any PCjs VT100 by setting the `avo` property to `true`, either in the machine's
[configuration file](../vt100.json) (see the "video" device) or in the list of machines at the top of a page:

```yaml
machines:
  - id: vt100
    type: vt100
    name: DEC VT100
    config: /machines/dec/vt100/vt100.json
    avo: true
```

You can also add `?avo=true` to the URL of any page with a VT100; for example, here's a VT100 with AVO
[connected to SDF.ORG](../sdf/?avo=true).

In the interest of preserving the appearance of our VT100 without the AVO, which never has anything to display at
bright intensity, the dim, normal, and bright intensities are all displayed as white unless the AVO is installed.
