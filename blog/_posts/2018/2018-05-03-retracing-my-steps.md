---
layout: post
title: Retracing My Steps
date: 2018-05-03 10:00:00
permalink: /blog/2018/05/03/
preview: /software/pcx86/demo/ibm/ega/images/screenshot.png
---

When I first created the PCjs x86 emulator, [PCx86](/devices/pcx86/machine/), it was a simple
implementation that focused primarily on four components:

- Intel 8088 running at 4.77Mhz
- IBM Monochrome Display Adapter (MDA) and Color Graphics Adapter (CGA)
- 5.25-inch Diskette Drives
- IBM 83-key PC Keyboard

There was no support for a serial port, parallel port, mouse, hard disk, numeric coprocessor, EGA or VGA, or
newer x86 processors like the 80286 and 80386.  All those things came later.

Of those first four components, the most complicated was the [Video](/modules/pcx86/lib/video.js) component, and
what added to the complexity was my desire to faithfully emulate (as best I could with my limited JavaScript experience)
all the major features of the MDA and CGA video cards, including:

- All standard text and graphics modes
- Original IBM PC fonts
- Blinking hardware cursor (see [blog post](/blog/2018/03/20/))
- Blinking and underlining character attributes
- Dual (MDA and CGA) display support

I also wanted to make sure the PC's video buffer was rendered efficiently onto the browser's canvas, so that I could
maintain a 60Hz video refresh rate alongside the CPU's 4.77Mhz clock speed.  As it turned out, that goal wasn't very
hard to achieve, thanks largely to how efficient JavaScript engines have become in recent years.

And like most projects, in order to get something up and running as quickly as possible, I took a few shortcuts and
faked a few things, the most notorious being *the retrace flags*.

### Horizontal and Vertical Retrace

Both the monochrome and color screens used by the IBM PC employed Cathode Ray Tube (CRT) technology, which involved
magnetically directing an electron beam to draw scan lines horizontally (left to right and top to bottom) across the
screen.  After every scan line was finished, the beam had to be turned off ("blanked") and redirected back to the left
side of the screen, and after the *entire* screen was finished, the beam had to be blanked again while it was redirected
back to the top of the screen.  This entire process was usually repeated 60 times per second; however, IBM's monochrome
monitor, thanks to the high persistence of its green phosphor, was refreshed only 50 times per second.

The "blanking" intervals are also known as horizontal and vertical retrace periods, which is how I usually refer to them.

Most PC software was completely oblivious to video retrace, especially software that wrote to the screen indirectly,
using either DOS or ROM BIOS services.

Any software that needed to display information more quickly could write to the video buffer directly, and in the case
of the CGA, if that software wrote to the video buffer at the same time the video card was "scanning" the contents of
the video buffer and updating the screen, interference ("snow") could result.  However, as long as the software *only*
wrote to the video buffer during one of the retrace periods, the interference could be avoided.

### Faking It

The only way for software to determine if the video card was currently operating in a retrace period was to poll the
card's *STATUS* register (port 0x3DA on a CGA).  If bit 0 was set, the card was in a horizontal retrace period, and if
bit 3 was set, the card was in a vertical retrace period.

Since interference is a non-issue for emulated hardware, a simple solution was to merely toggle the *STATUS* retrace
flags every time they're polled.  Toggling is important, because if you all you did was *set* the retrace flag(s), some
software would break; specifically, any software that tried to wait for the *start* of the next retrace period, by
looking for a transition, in order to maximize the amount of time it had to safely write to the video buffer.

Also, by performing a *quick* toggle, the emulator could often make software that polled the retrace flags run *faster*
than normal.  For example, the following ROM BIOS code would automatically run faster:

![5150 ROM BIOS Retrace](/blog/images/5150-bios-retrace.png)

In the case of PCjs, making old code run faster was *not* actually a goal, because I wanted to recreate a 4.77Mhz
experience, but most emulators don't care about that, so for them, a solution like this is a "win-win."

### Growing Up Means Not Faking It Anymore

Unfortunately, over time, cheap solutions start breaking down, and as PCjs video support expanded from
the lowly MDA and CGA cards to the much more powerful EGA and VGA cards, the work-arounds were getting uglier.

For example, one of [Michael Abrash's VGA "Black Book" Tests](/tests/pcx86/vga/):

- [L23-1.ASM: Animates four balls bouncing around a playfield by using page flipping and panning](/tests/pcx86/vga/src/L23-1.ASM)

relied on a couple of critical features of the EGA:

- Changes to the CRT Controller Start Address take effect *only* at the start of vertical retrace
- Safely modifying the Start Address is best performed by waiting for the *end* of horizontal retrace

However, if we're just toggling the retrace bits "willy-nilly", then we're not really helping the app, and more
importantly, we're not helping ourselves know when we should honor (or not honor) the contents of registers like the
CRT Controller Start Address.

As a result, images initially produced by [L23-1.ASM](/tests/pcx86/vga/src/L23-1.ASM) would "jerk" horribly, until I
put some work-arounds in place.

That was a few years ago.  Fast-forward to my recent efforts to run [Fantasy Land](/blog/2018/04/23/), which performed
pixel-panning much like [L23-1.ASM](/tests/pcx86/vga/src/L23-1.ASM), but in text mode rather than graphics mode, and
also required:

- Programmable fonts
- Split screens
- Vertical retrace interrupts

none of which I had supported up to that point.  Pixel-panning of text mode alone was doubly challenging, not merely
because it needed to be synchronized with vertical retrace, but because it also required "over-drawing" the entire
screen by an additional column and row of text into an intermediate off-screen bitmap.

This was the app that broke the camel's back.  The only solution -- or rather, the best solution -- to all the
retrace-related issues was to create a new periodic timer function, *startVerticalRetrace()*, that synchronized *all*
these video operations:

- Performing browser screen updates
- Generating vertical retrace interrupts
- Updating vertical and horizontal retrace status flags
- Latching selected CRT registers at the start of vertical retrace

So now, based on video card and type of monitor, an appropriate refresh rate is determined.  The refresh rate is
converted into a corresponding number of CPU cycles, and then a CPU timer calls *startVerticalRetrace()*.

I've also slipped in a few other tweaks to *startVerticalRetrace()*, such as throttling the screen update rate if
screen updates seem to be taking an unusually large percentage of the retrace period.  On desktop machines, this rarely
happens, but I've seen it happen on mobile devices and on pages where multiple machines are running side-by-side.

And I've made some improvements to the Video cell cache, to help minimize the number of pixels or character cells
that must be redrawn.  Programmable fonts and the way in which [Fantasy Land](/disks/pcx86/apps/ibm/fland/) rapidly
toggles the active font required an additional "FontDiff" cache, so that we could quickly determine which on-screen
characters needed to be redrawn after a font change.

[Fantasy Land](/blog/2017/07/03/) wasn't a particularly well-known program, but it definitely has its place among
historically significant PC software, and thanks to it, PCjs video emulation is now better for it.

*[@jeffpar](https://jeffpar.com)*  
*May 3, 2018*
