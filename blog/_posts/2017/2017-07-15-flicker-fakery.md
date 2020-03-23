---
layout: post
title: Flicker Fakery
date: 2017-07-15 10:00:00
permalink: /blog/2017/07/15/
---

One of my long-standing pet peeves about PC emulators has been their obsession with raw speed, and how hard they
try to squeeze every last drop of performance out of their instruction execution loop, on the assumption that
everyone wants an 8088 that runs at, say, 500Mhz, as opposed to the stately 4.77Mhz of the original IBM PC.

And sure, it might be nice if that [Lotus 1-2-3](/software/pcx86/app/lotus/123/1aa/) spreadsheet recalculated instantly,
instead of the several seconds that it originally took.  But most of the time, such a dramatic difference in speed is
more aggravating than helpful.  In 1981, you could type `DIR` at a DOS prompt and skim the directory listing as it was
being printed.  Do the same thing in a modern emulator, and the directory listing will display so fast that you'll have
no idea what just scrolled off the top of the screen.  And many games become unplayable, because they were designed to
run on *machines of the day*, not machines of the future running hundreds of times faster.

Emulators like [DOSBox](https://github.com/Henne/dosbox-svn), which has since been ported to
[EM-DOSBox](https://github.com/dreamlayers/em-dosbox) for the [Internet Archive's](https://archive.org)
[MS-DOS Collection](https://archive.org/details/softwarelibrary_msdos), do offer some crude controls to "throttle"
the emulated CPU's speed, but they provide no feedback: you don't know what the current speed is or what the target
speed should be.  Even professional emulators like Oracle's [VirtualBox](https://www.virtualbox.org/) offer
only very limited speed controls, such as a processor "Execution Cap", which is defined as a percentage of the
emulator's maximum speed (whatever that may be), and which is too granular to recreate any specific CPU speed.

### Visual Authenticity

Beyond speed accuracy, the next commonly short-changed feature is visual authenticity.  Most emulators do a good 
job faithfully emulating video hardware features, sometimes even obscure features that were used by only a handful
of apps.  But many emulators don't bother with:

- Rendering the original IBM PC fonts
- Blinking the cursor
- Emulating character attributes like *underline* and *blink*
- Supporting [Dual Displays](/machines/pcx86/ibm/5150/dual/)

And last, and maybe also least, **FLICKERING**.

Yes, the beloved flicker of the original IBM Color Graphics Adapter (CGA).  And I'm not talking about the
barely perceptible flicker produced by the CGA monitor's 60Hz refresh rate.  That flicker was tolerable.  In fact,
many people who didn't need either color or graphics would opt for IBM's Monochrome Display Adapter (MDA), because
the green phosphor of IBM's monochrome monitor had such high persistence that the 60Hz refresh rate was virtually
imperceptible.

No, the capital-letter **FLICKER** that I'm talking about was a side-effect of what IBM's ROM BIOS did every time the
CGA's screen had to be scrolled: completely turn off the video signal OFF, rearrange the contents of video memory, and
then turn the video signal back ON.  IBM adopted this approach because otherwise you would see an even *worse* effect:
random video interference or "snow".

This all came about because the CGA's memory wasn't "dual-ported": if the CPU accessed the CGA's memory at the same
that the display hardware was accessing it (to refresh the screen 60 times per second), the CPU would win and the
display hardware would lose, resulting in garbage appearing on the screen for a brief instant.

PC software could avoid that conflict by waiting until the CGA hardware was in a retrace period: either the brief
*horizontal retrace* period that occurs as the CRT repositions the electron beam from the right side of the screen
back to the left side, or the slightly longer *vertical retrace* period that involves moving the beam from the bottom
to the top.

However, IBM decided that, since neither of those retrace periods were long enough to perform a full-screen scroll,
the easiest solution was to simply turn the screen off for the duration.  The result, which many of us suffered with
for years, was **FLICKER**.

I can hear the counter-arguments, starting with "Why in the world would anyone *want* to recreate or experience such
an annoying feature?"  In part, it's a quest for authenticity.  It's the difference between going to an art museum
and seeing original paintings and sculptures, as opposed to just looking at photographs or reading descriptions on the
internet.  The photographs and descriptions can never faithfully reproduce the real objects, but the more accurate
they are, the better.

It's also important for understanding the world in which PC users and programmers operated in the early 1980's, the
challenges that programmers faced, and some of the interesting solutions they came up with.

One of those interesting solutions was a program from 1986 called [FlickerFree](/software/pcx86/util/flickerfree/),
the purpose and value of which would be almost completely lost on someone today if they had never seen or used an original
IBM PC with a CGA.

In fact, FlickerFree proved to be a useful PCjs test case, because it relied on a quirk of CGA hardware that I
hadn't originally implemented: frame buffer wrap-around.  FlickerFree resolved the flickering-scroll problem by
treating the CGA's 16Kb of video memory as a giant ring buffer: instead of moving the contents of video memory
"upward", like IBM's ROM BIOS did, FlickerFree would simply shift the video memory start address "downward".  After
all, one 25x80 screen of character data required only 4000 bytes, and the CGA had 16,384 bytes of memory.

At first glance, that approach would seem to merely delay the inevitable, because when the start address nears
the end of the buffer, the entire buffer still has to be scrolled.  But, as it turned out, the CGA's CRT controller
starts reading from the top of video memory after it reaches the bottom.  So all software has to do is write
new lines at the top of the video memory again.  If IBM had thought of that trick 5 years earlier, back in 1981,
think of all the years of shared flicker-grief that could have been avoided!

Today, in honor of all that flickering, I'm pleased to announce that [PCx86]({{ site.github.pages }}/machines/pcx86/),
one of the PCjs emulators I'm always trying to improve, now offers **FLICKERING** on all IBM PC Color Graphics configurations.
If you feel the need to override it, you can add *flicker=0* to the URL of your favorite machine; e.g.:

> [www.pcjs.org/software/pcx86/util/flickerfree/?flicker=0](/software/pcx86/util/flickerfree/?flicker=0)

In fact, you can set the *flicker* property to any value from 0 to 1; the default is 0.5.  This value is applied to
the *opacity* property of the PCx86 &lt;canvas&gt; element, allowing you to mimic whatever degree of "phosphorescent
persistence" you prefer. 

You can thank me later.
