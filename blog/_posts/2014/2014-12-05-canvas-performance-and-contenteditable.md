---
layout: post
title: Canvas Performance and ContentEditable
date: 2014-12-05 11:00:00
category: HTML5
permalink: /blog/2014/12/05/
---

From the beginning of the [JavaScript Machines](/about/) Project, I've always used an HTML5
[Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) object for both machine output
and input.  It's the obvious choice for output, because the Canvas provides a 2D drawing API that's
essential both for drawing bitmappped graphics and for faithfully rendering individual characters
using the machine's original bitmapped fonts.

The Canvas is perhaps a less obvious choice for input, but the theory was that by adding a
"[contenteditable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_Editable)" attribute
to the Canvas object, the user could simply click (or tap) the Canvas to give it focus, and then all the
usual *onkeydown*, *onkeyup*, and *onkeypress* event handlers would work as expected.  The advantage of
this approach is that it eliminated the need for another on-screen control that would no serve no visual
purpose.

The "contenteditable" attribute had some issues, but mainly only on mobile devices, so I left those
issues for another day.  For example, using PCjs on an Android device is problematic, in part because
it doesn't honor the "contenteditable" attribute on a Canvas, but also because Android's built-in
"soft keyboard" doesn't deliver any keys to the application until you press Enter.  So for now, you
have to use PCjs machines that come with their own "soft keyboard".

However, today I noticed an oddity with Safari on the desktop.  For the most part, Safari and Chrome
perform comparably, and are generally the best browsers to use with PCjs.  Firefox used to be a great
option a couple years ago, but ever since Mozilla started focusing heavily -- perhaps *too* heavily -- on
[asm.js](http://asmjs.org/) performance, they seem to have fallen behind in overall performance.
  
But I digress.  What I noticed in Safari was that text-scrolling in both DOS and OS/2 was significantly
slower than Chrome.  This seemed very odd -- they should have been almost equally fast.  Then I made
an important discovery: while the machine was scrolling, if I clicked on some other part of the page,
taking focus *away* from the Canvas, scrolling dramatically sped up.  When I clicked on the Canvas
again, it slowed way down again.

Long story short: when I removed the "contenteditable" attribute from the Canvas, drawing performance
was consistently fast.  The only problem, of course, is that I couldn't type anything into the machine.

So I resurrected some old code I'd written that creates a transparent
&lt;[textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)&gt; on top of the Canvas,
and now I use the &lt;textarea&gt; to provide all keyboard, mouse, and touch events (and pointer locking,
for the handful of browsers that support it).

That seemed to work well, until I tested Safari on an iPad, where I noticed a blinking cursor in the top
left corner of the machine's screen; that is, the top left corner of the transparent &lt;textarea&gt;.  I tried
all sorts of work-arounds suggested online -- setting the textarea's "color" attribute to "transparent",
on the theory that the cursor used the same color, or setting the "cursor" attribute to "none" -- but none
of those work-arounds seemed to, um, work.

I had almost settled on adding iOS detection code, and reverting to the old Canvas input code for iOS only,
when I noticed that even a Canvas on iOS displayed a blinking cursor -- it was just slightly less annoying
because the cursor was flush with the left edge of the Canvas.  More importantly, it was also as tall as
the full height of the Canvas.

At this point, it seemed clear that iOS was trying to display the cursor based on what it believed the
line height to be (ie, the full height of the Canvas).  So I switched back to the transparent &lt;textarea&gt;
again, set its "line-height" attribute to zero, and viola: no more blinking cursor.

So that, in a nutshell, is why v1.16.2 of PCjs comes one day after v1.16.1: because I happened to noticed
that drawing performance in desktop Safari was suffering, and that there was a fairly straightforward solution.

Safari's behavior should probably be considered a bug, as it's probably doing something it shouldn't,
like trying to account for an "invisible" blinking cursor.  Chrome certainly doesn't have this problem,
so unless I was the only person in the world who used "contenteditable" Canvases, this is probably something
Safari will want to fix.
