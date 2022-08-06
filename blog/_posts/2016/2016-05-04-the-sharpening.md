---
layout: post
title: The Sharpening
date: 2016-05-04 08:00:00
permalink: /blog/2016/05/04/
---

This was the week of The Sharpening.

A while back, I updated most of the machines to use higher-resolution "screens".  For example, a typical
[EGA video configuration](/machines/pcx86/video/ibm/ega/1984-09-13/ibm-ega-5154-128k-autolockfs.xml) now
specifies a *screenWidth* of 1280 and *screenHeight* of 700, dimensions which are exactly twice the standard EGA resolution.

That change had no effect on the machine's operation, but it did improve the machine's appearance, because
most people are using much higher resolution monitors today, so by using a higher-resolution "screen" (canvas),
less interpolation is happening when a machine's screen image is scaled up to fill your browser window.

The amount of scaling *also* depends on whether the machine allows itself to be stretched to fill the browser window.
For example, this [machine](/machines/pcx86/ibm/5160/ega/640kb/array/machine.xml) (used by the
[EGA Machine Array Demo](/software/pcx86/sys/windows/1.01/array/)) is limited to an overall *width* of 680 pixels,
no matter how large you make your browser window:

```xml
<machine id="ibm5160" class="pc" border="1" width="680px" float="left" background="#FAEBD7">
```

but most machines don't specify a (maximum) overall width, so their screen canvas is allowed to stretch far beyond
the initial *screenWidth* and *screenHeight*, thanks to some additional CSS settings.

Larger screens mean less interpolation, which is a good thing if you want the screens to look less "fuzzy." 
However, interpolation also happens at a deeper level, because internally, PCjs uses two canvases to move pixels
from the machine's frame buffer to your browser: the screen canvas, which I've already discussed, and another
canvas called the *buffer* canvas, where changes to the machine's frame buffer are, um, buffered.

The *buffer* canvas has the same dimensions as the machine's frame buffer, whereas the *screen* canvas
has generally higher dimensions (as explained above), which your browser may then be stretching to even higher
dimensions, depending on your monitor resolution and browser size.

The differential between the *buffer* canvas and *screen* canvas is where additional interpolation (fuzziness)
creeps in.  That is where The Sharpening now occurs.

All the browsers I've tested so far (Chrome, Firefox, and Safari) support a
[Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
[Context](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) property named
[imageSmoothingEnabled](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled),
which eliminates much of the fuzziness that would occur when copying pixels from the lower-resolution *buffer* canvas
to the higher-resolution *screen* canvas.

So I've added a new [Video](/machines/pcx86/lib/video.js) property named *smoothing* that can be set to "true" or "false",
and I've set it to "false" for most machines in the project.  If *smoothing* is not set, your browser continues to
use its default interpolation method.

{% include gallery/begin.html %}
{% include gallery/image.html src="/blog/images/si1978-fuzzier.png" width="339" height="388" title="Space Invaders (Fuzzier)" link="/machines/arcade/invaders/?smoothing=true" %}
{% include gallery/image.html src="/blog/images/si1978-sharper.png" width="339" height="388" title="Space Invaders (Sharper)" link="/machines/arcade/invaders/?smoothing=false" %}
{% include gallery/end.html %}

For some people, this might be a matter of taste, because less fuzziness necessarily means more pixelation (ie, you
can see individual pixels more clearly), which becomes more noticeable when switching a machine **Full Screen**.
So I've also added a URL *smoothing* parameter you can use to override a machine's default setting; eg:

	https://www.pcjs.org/machines/arcade/invaders/?smoothing=true

See for yourself, by clicking on each of the [Space Invaders](/machines/arcade/invaders/) images above and
then clicking the **Full Screen** button; both images link to the same machine, but left one enables image smoothing,
while the right one does not.

### Aspect Ratio

The *smoothing* property joins another recent [Video](/machines/pcx86/lib/video.js) property, *aspect*, that was
added in a [release](https://github.com/jeffpar/pcjs/releases/tag/v1.21.5) last month.

To recap, aspect ratio is display width divided by display height, but the choice of aspect ratio is complicated by
the fact that none of the early IBM video card/monitor combinations (with the exception of the VGA) displayed square
pixels, and (with the exception of the MDA) they could display text and graphics at a variety of resolutions.

So, for those users who either 1) don't like the aspect ratios that PCjs has chosen, or 2) just want to squeeze or
stretch a machine's screen a bit more, there is now an *aspect* parameter you can append to the URL of any page
containing one or more PCjs machines.

For example:

	https://www.pcjs.org/disks/pcx86/dos/ibm/1.00/?aspect=2.0
	
will modify the height of the machine's screen to conform to the requested aspect ratio of 2.0. The screen should still
be responsive to any browser resizing while still retaining that aspect ratio.

---

That's all for now.  Work continues on the new [PCx80]({{ site.github.pages }}/machines/pcx80/) emulator and the
[Space Invaders](/machines/arcade/invaders/) machine.  More on that later, when it's finished.

Until then, May the 4th be with you!
