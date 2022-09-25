---
layout: post
title: Font-Building Exercises
date: 2018-04-05 10:00:00
permalink: /blog/2018/04/05/
---

In preparation for adding programmable font support for EGA and VGA video cards, I (re)discovered that the IBM VGA ROM
font that PCjs was using was an 8x14 font, not the "higher resolution" 8x16 font introduced with the VGA.  This was by
virtue of hard-coded ROM font offsets that all PCjs machines were passing to the Video component:

    <rom id="romVGA" addr="0xc0000" size="0x6000" file="/devices/pcx86/video/ibm/vga/1986-10-27/IBM-VGA.json5" notify="videoVGA[0x378d,0x3f8d]"/>

After the Video ROM is loaded, the Video component is passed an array containing two addresses:

- \[0\]: 0x378D, the offset of the 8x8 ROM font in the ROM
- \[1\]: 0x3F8D, the offset of the 8x14 ROM font in the ROM

For example, if we want to look at the 8x8 data for the character `0` (ASCII 0x30), we can dump it as binary,
using the PCjs Debugger:

    >> dby c000:378d+30*8 l8
    &C000:390D  7C  01111100
    &C000:390E  C6  11000110
    &C000:390F  CE  11001110
    &C000:3910  DE  11011110
    &C000:3911  F6  11110110
    &C000:3912  E6  11100110
    &C000:3913  7C  01111100
    &C000:3914  00  00000000

Ditto for the 8x14 data (note that 14 must be written as "14." for the Debugger to interpret it as decimal instead of hex):

    >> dby c000:3f8d+30*14. l14.
    &C000:422D  00  00000000
    &C000:422E  00  00000000
    &C000:422F  7C  01111100
    &C000:4230  C6  11000110
    &C000:4231  CE  11001110
    &C000:4232  DE  11011110
    &C000:4233  F6  11110110
    &C000:4234  E6  11100110
    &C000:4235  C6  11000110
    &C000:4236  C6  11000110
    &C000:4237  7C  01111100
    &C000:4238  00  00000000
    &C000:4239  00  00000000
    &C000:423A  00  00000000

If you squint a little at all the 1s and 0s, you should be able to make out the shape of a zero with a diagonal slash
through it.

By setting a write breakpoint on A000:0000 (`bw A000:0000`) and triggering another video mode set (eg, with the DOS command
`MODE CO80`), we can easily determine that the source of the 8x16 font data begins at C000:4EBA, so the bits for character
`0` are here:

    >> dby c000:34eba+30*16. l16.
    &C000:51BA  00  00000000
    &C000:51BB  00  00000000
    &C000:51BC  38  00111000
    &C000:51BD  6C  01101100
    &C000:51BE  C6  11000110
    &C000:51BF  C6  11000110
    &C000:51C0  D6  11010110
    &C000:51C1  D6  11010110
    &C000:51C2  C6  11000110
    &C000:51C3  C6  11000110
    &C000:51C4  6C  01101100
    &C000:51C5  38  00111000
    &C000:51C6  00  00000000
    &C000:51C7  00  00000000
    &C000:51C8  00  00000000
    &C000:51C9  00  00000000

Note that *this* zero differs from the other two, because it has a "dot" in the center rather than a slash.  It seems
strange that IBM would switch styles like that between the 8x14 and 8x16 fonts on the same card, but then again, IBM made
lots of seemingly arbitrary and sometimes irritating decisions in those days, like swapping the positions of the Ctrl
and Caps-Lock keys when they introduced their 101-key keyboards.  But I digress.

Later in the VGA ROM's initialization sequence, the font is "upgraded" to a 9-bit wide version, since VGA monitors
were capable of displaying text screens with a horizontal resolution of 720 pixels, just like the original IBM monochrome
monitors.

    >> dby c000:5ecc l16.
    &C000:5ECC  00  00000000
    &C000:5ECD  00  00000000
    &C000:5ECE  3C  00111100
    &C000:5ECF  66  01100110
    &C000:5ED0  C3  11000011
    &C000:5ED1  C3  11000011
    &C000:5ED2  DB  11011011
    &C000:5ED3  DB  11011011
    &C000:5ED4  C3  11000011
    &C000:5ED5  C3  11000011
    &C000:5ED6  66  01100110
    &C000:5ED7  3C  00111100
    &C000:5ED8  00  00000000
    &C000:5ED9  00  00000000
    &C000:5EDA  00  00000000
    &C000:5EDB  00  00000000

Unfortunately, drawing text with IBM's 9x16 font doesn't look that great on our default VGA canvas.  This is because
PCjs uses a canvas with an aspect ratio of 1.33, since that matches the aspect ratio of the VGA's high-resolution
graphics mode (640x480).  VGA text modes, on the other hand, use a resolution of 720x400, which has an aspect ratio
of 1.8.

So our choices are: 1) dynamically alter the aspect ratio of the canvas to match that of the current text or graphics
mode, or 2) horizontally squeeze and vertically stretch 720x400 text so that it fits on our 640x480-shaped canvas.

I don't like the idea of "reshaping" the canvas -- after all, a physical VGA monitor doesn't change its shape whenever
the video mode changes -- so I rely on the browser's 2D APIs to automatically scale the text to the canvas.
But by today's standards, a 9x16 VGA font is rather "low-res", so when it's scaled, the results aren't all that smooth.

### Image Smoothing To The Rescue

It turns out there's another choice: 3) set the *imageSmoothingEnabled* property to *true* for the 2D context of the
display canvas.  Problem solved.

I had visited this issue once before (see the PCjs blog post "[The Sharpening](/blog/2016/05/04/)"), and at that time,
I had decided to set *imageSmoothingEnabled* to *false* for most machines, because smoothing tended to make PC graphics
screens look a bit fuzzy and dull.

However, it's become clear that smoothing *does* make sense for PC text modes.  It may also help that all PCjs fonts
are now rendered internally at twice their normal resolution (eg, a 9x16 VGA font is rendered internally at 18x32),
to help them look less thin and anemic.  This automatic font-doubling feature (controlled by the Video component's
*fDoubleFont* property) used to be selectively enabled based on another now-deprecated Video property (*scale*) and some
overly-complicated virtual vs. physical screen size comparisons.

Now *fDoubleFont* is hard-coded to *true*, and *imageSmoothingEnabled* is re-enabled just for text modes. 
