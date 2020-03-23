---
layout: post
title: Touching Windows
date: 2016-03-06 09:00:00
permalink: /blog/2016/03/06/
---

Yesterday, I fired up [Windows 3.1](/software/pcx86/sys/windows/3.10/) and played a complete game of
[Windows Solitaire](https://en.wikipedia.org/wiki/Microsoft_Solitaire) on my iPad.  It was a bit, um, touchy,
but it worked.

{% comment %}[<img src="/blog/images/ipad-solitaire-small.jpg" alt="Windows Solitaire on iPad"/>](/blog/images/ipad-solitaire.jpg){% endcomment %}
{% include gallery/image.html src="/blog/images/ipad-solitaire-small.jpg" title="iPad running Solitaire on Windows 3.10" link="/blog/images/ipad-solitaire.jpg" %}

The basic touch events are:

 - `touchstart`
 - `touchmove`
 - `touchend`

which roughly correspond to `mousedown`, `mousemove`, and `mouseup` events, except that your finger isn't
exactly like a mouse -- it doesn't have *buttons* for one thing -- so there are several usability problems
that must be solved.

One of the problems is how to deal with the *default behaviors* of touch events.  For example, tapping on a
PCjs screen is normally how you trigger the iPad's soft keyboard, and dragging your finger across the screen
normally scrolls the page up and down.  However, you don't want *either* of those behaviors when you're
trying to move the machine's mouse pointer around or click on things.

PCjs attempts to resolve the tapping problem by disabling default behaviors most of the time, except when
two taps occur more than 1/2 second apart.  This allows a quick *double-tap* to be treated as a double-click,
while a pair of slower taps allows the soft keyboard to activate.

Another problem is how to differentiate between *moving the mouse* (ie, without any buttons pressed) and
*dragging the mouse* (ie, with the left button pressed).  Newer devices offer the option of relying on "3D Touch"
(aka Force Touch), and using pressure to determine the user's intent, but most devices don't have that feature,
and I'm not sure I'd want to rely on that anyway.

The PCjs solution: if you *tap and hold* for more than 200ms, and then start moving, your movements become the
equivalent of a *mouse drag* operation.

This is my first stab at touch-to-mouse conversion, and it's not perfect, but it's already fairly usable,
as my Solitaire experiment demonstrates.  And there are still some open questions, such as how to intuitively
support operations like *right drag*, since the current *mouse drag* operation is inherently *left drag*;
one solution would be to rely on multi-touch and use two fingers to trigger right-button operations.
