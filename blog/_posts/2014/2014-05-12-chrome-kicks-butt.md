---
layout: post
title: Chrome Kicks Butt
date: 2014-05-12 11:00:00
category: JavaScript
permalink: /blog/2014/05/12/
---

I haven't been closely monitoring the performance of PCjs across various browsers.  Most of my browser testing has
been limited to "Does the latest version still work in all current web browsers?"

However, at some point during the last couple months, Chrome's performance suddenly jumped through the roof.  On my
2.8GHz Intel Core i7 MacBook Pro, Chrome v34.0.1847.131 easily punches through the 120Mhz barrier on a PCjs machine
running PC DOS 2.00.

That's roughly a 3x-4x increase over previous versions of Chrome.  Safari used to be the performance champ, capable
of running a PCjs machine at a top speed of around 70-80MHz, while Chrome was less than half that, and Firefox was
slower still.

Chrome has now leap-frogged Safari in a big way, almost doubling Safari's speed.  And with Chrome's superior
Developer Tools, Chrome is clearly the "Browser of Choice," whether you're just playing with PCjs or actually
debugging it.

Firefox is a bit of a disappointment, given all the hoopla over [asm.js](http://asmjs.org/) and other investments
that Mozilla is making.  I've taken a "wait-and-see" attitude toward asm.js, because PCjs is hand-coded JavaScript,
and I'm not prepared to build a preprocessor that converts the code to asm.js semantics solely for the benefit of a
single browser.

Chrome's approach to making regular JavaScript run faster seems to be a winning strategy so far, at least for apps
like PCjs.
