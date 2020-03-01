---
layout: post
title: Exploring the IBM Personal Computer
date: 2018-04-01 10:00:00
permalink: /blog/2018/04/01/
---

A rather ~~ghastly~~ quaint piece of early IBM PC software was a program called
[Exploring The IBM Personal Computer](/disks/pcx86/apps/ibm/exploring/).  Created by Digital Learning Systems, Inc.
and marketed by IBM, it was designed to walk you through the "ins and outs" of your shiny new IBM PC, and it came in
two flavors: [Monochrome](/disks/pcx86/apps/ibm/exploring/5150/mda/) and [Color](/disks/pcx86/apps/ibm/exploring/5150/cga/).

![Exploring the IBM PC (Intro](/blog/images/exploring-the-ibm-pc-intro.jpg)

After playing some truly awful "music" through the PC's speaker -- for which I must also apologize, because the limited
PC speaker support in PCjs manages to make it sound even worse -- the software begins with a tour of your IBM PC's
keyboard.

In the screenshot below, notice the painstaking detail with which even the coiled cord of the PC's keyboard is lovingly
rendered.

![Exploring the IBM PC (Keyboard)](/blog/images/exploring-the-ibm-pc-keyboard.gif)

Amazingly, this software was even updated for the [IBM PC AT](/disks/pcx86/apps/ibm/exploring/5170/) -- not once but
[twice](/disks/pcx86/apps/ibm/exploring/5170/2.00/)!  On the bright side though, the second version did eliminate the "music".

Unfortunately, when I first ran this program on PCjs, the introductory screen wasn't fully erased, leaving most of
the block characters around the border of the screen.

![Exploring the IBM PC (Bug)](/blog/images/exploring-the-ibm-pc-intro-bug.png)

This was due to a bug in their call to the ROM's INT 10h "Scroll Up" function:

    AX=0600 BX=0707 CX=184F DX=0000 SP=0100 BP=00FA SI=1E39 DI=01F6 
    SS=0FDF DS=0439 ES=0439 PS=F006 V0 D0 I1 T0 S0 Z0 A0 P1 C0 
    &02C1:06A4 CD10             INT      10

which *should* have passed the coordinates of the top left corner of the scroll operation in CX and the bottom right
coordinates in DX.  However, as you can see above, they passed the top values in DX and the bottom values in CX, so when
the ROM subtracts CX from DX to calculate the number of rows and columns to scroll (or in this case, to clear), it ends up
with negative values, which it then treats as large positive numbers instead, and proceeds to erase a large swath of memory
past the bottom of the screen.

So why, on a *real* PC, was the screen still being successfully erased?  Because the monochrome video card's 4K buffer
can be addressed not only at B000:0000, but also at B000:1000, B000:2000, and so on, all the way up to B000:7000.

This was an easy fix for the PCjs Video component, because the Bus component already supports aliasing blocks of memory
to other addresses.  Unfortunately, this required the Bus default block size to be no larger than 4K, and for machines
with 24-bit or 32-bit buses, the Bus component preferred to divide the address space up into 16K or 32K blocks.

So I changed the block size to 4K for *all* machines, irrespective of bus width.  Unfortunately, machines with saved states
could still attempt to load states with an older (larger) block size, so I also had to add code to "fix up" blocks whenever
a non-4K block was detected.

The good news is that, after dealing with all these ripple effects, [Exploring The IBM Personal Computer](/disks/pcx86/apps/ibm/exploring/)
now runs as intended.  Well, except for the awful sound it makes, which I'll be looking into at a later date.

For now, turn your volume down (and appreciate the fact that you *can* turn your volume down, because the speaker on
an IBM PC had no such feature), and enjoy exploring the IBM Personal Computer.

*[@jeffpar](https://jeffpar.com)*  
*Apr 1, 2018*
