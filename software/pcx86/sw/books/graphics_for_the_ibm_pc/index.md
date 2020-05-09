---
layout: page
title: Graphics for the IBM PC
permalink: /software/pcx86/sw/books/graphics_for_the_ibm_pc/
redirect_from: /pubs/pc/programming/Graphics_for_the_IBM_PC/
machines:
  - id: xt-cga-256k-1
    type: pcx86
    state: 02-03.json
    config: /configs/pcx86/machine/ibm/5160/cga/256kb/machine.xml
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: Graphics for the IBM PC
  - id: xt-cga-256k-2
    type: pcx86
    state: 04-01.json
    config: /configs/pcx86/machine/ibm/5160/cga/256kb/machine.xml
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: Graphics for the IBM PC
---

by Dan Illowsky and Michael Abrash (1984)

Check out the [Live Demos](#live-demos) we've created from this classic text.

{% include embed.html src="https://onedrive.live.com/embed?cid=7D567B5161FE0EB7&resid=7D567B5161FE0EB7%2136963&authkey=AArOJJZY9sEp0qA&em=2" %}

### Live Demos

From Page 46:

> **A KALEIDOSCOPE PROGRAM**

> Let's run a program that will show you some of what
> BASIC can do on the IBM PC. This program produces a
> changing kaleidoscope display and is shown in Listing 2-3.
> Type it precisely as shown. If you make any mistakes, use
> the editing capabilities of BASIC discussed above to make
> corrections. Remember to type NEW to clear any previous
> programs out of memory before typing the new program.
> Enter RUN to execute the program, noting the wide
> range of colors available on the IBM PC. A typical display
> is shown in Fig. 4.
> in the color photograph section. Note that good effects
> can be produced with only a few program
> lines thanks to the power of Advanced BASIC.
    
{% include machine.html id="xt-cga-256k-1" %}

```bas
{% include_relative 02-03.BAS %}
```

From Page 58:

> **Medium-Resolution Color Selection**

> Every color available on the PC can be displayed in
> medium-resolution graphics mode, but, unfortunately,
> only in certain combinations. The background color (that
> is, the color to which the screen and border default and
> which graphics are typically set against) can be any of the
> 16 colors available on the PC, as shown in Table 4-1.
> The other three colors available at any one time consist of one
> of two sets. The sets are called palettes because, like
> painters' palettes, each is a group of colors from which the
> PC artist may choose to work.

> Palette number 0 contains green, red, and brown, which
> are colors 1,2, and 3, respectively (Table 4-2). (Many
> monitors will display yellow rather than brown.) These colors
> look excellent on an RGB monitor (see Fig. 5A in the color
> photograph section), but, unfortunately, often tend to look
> rather muddy on a television.

> Palette number 1 contains cyan, magenta, and white,
> which are, respectively, colors 1, 2, and 3 (Table 4-2).
> Cyan is a light blue, and magenta is a light red. These colors
> aren't as vivid on an RGB monitor as those in the other
> palette (See Fig. 5B).
> in the color photograph section), and
> can look somewhat washed out if screen brightness is
> high. However, the colors in palette 1 look just about as
> good on a television as on an RGB monitor, and because
> white appears much sharper on a television than any
> other color, this palette is the palette of choice for television
> work. (The same is true of any composite monitor.)

{% include machine.html id="xt-cga-256k-2" %}

```bas
{% include_relative 04-01.BAS %}
```

### Directory of Graphics for the IBM PC

     Volume in drive A is PROGRAMS
     Directory of A:\

    02-03    BAS       733  12-07-15   1:09p
    04-01    BAS       784  12-07-15   1:09p
    README   TXT       112  12-07-15   1:09p
            3 file(s)       1629 bytes
                          359424 bytes free
