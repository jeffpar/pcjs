---
layout: post
title: Browser Compatibility Woes
date: 2014-03-31 11:00:00
category: JavaScript
permalink: /blog/2014/03/31/
---

While JavaScript has been doing a good job of delivering on the old "write once, run everywhere" promise that its
[unrelated namesake](http://www.java.com) coined, the "hook once, deliver everywhere" promise seems less fulfilled.

Not that anyone ever made such a promise.

Specifically, I'm talking about DOM events.  Take the HTML5 &lt;canvas&gt; element, for example.  If I give 
it a `contenteditable="true"` attribute, it will play nicely with my JavaScript app in a Mobile Safari browser,
by popping up the device's soft keyboard in response to the canvas element receiving focus (ie, when you tap on it).

The Silk browser on a Kindle Fire, however, is another story -- it acts like it has no idea what `contenteditable`
means.  Even if I display an actual &lt;input&gt; text field alongside the &lt;canvas&gt;, and attach all the same
input event handlers to the text field instead of the canvas, the Kindle Fire's soft keyboard will pop up, but my
input event handlers still won't fire.

I've done what testing I can with the Android SDK and the "Android Virtual Device Manager", and in general, support
looks fine -- you click/tap on the PC's screen, the soft keyboard pops up, and typing works.  So I guess Silk is just
an outlier.  I'm not sure what I'll do about it yet (or even what I can do).

![PCjs in AVD](/blog/images/avd-tablet.jpg)

---

Here's another issue I've yet to resolve.

When Apple released iOS 7.0, PCjs went from being a rock-solid web application on
2nd/3rd/4th-generation iPads to a very flaky web application.  It's still rock-solid on 5th-generation iPads
(the iPad Air and iPad Mini w/Retina Display), and so I suspect a bug in Apple's JavaScript engine that's specific
to their older A5 processor.

It may be possible to work around the bug, but I haven't yet isolated exactly what code
sequence(s) are failing.  For now, this is the most serious unresolved PCjs bug I'm aware of.

---

If you're having a problem (or trouble with a device) that I've not already mentioned, [let me know](mailto:Jeff@pcjs.org).
Thanks.

*[@jeffpar](https://jeffpar.com)*  
*March 31, 2014*
