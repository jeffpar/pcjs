---
layout: post
title: PCjs Released on GitHub
date: 2014-10-12 11:00:00
category: Releases
permalink: /blog/2014/10/12/
---

I've decided the time has come to make the [PCjs Project](https://github.com/jeffpar/pcjs) an open source project on
[GitHub](http://github.com/).

This doesn't mean PCjs is done -- not by a long shot.  But I promised to release it on GitHub by the end of
the year, which is fast approaching, and I didn't really want to do this in December.

I feel I've made pretty good progress on my goals for the year -- primarily EGA and PC AT support.  PC AT machines
can boot and run in real-mode now, but there's still a lot of protected-mode work to do.  The big remaining goal for
this year is to boot OS/2 1.0.

There are also a lot of rough edges left to polish.  Holes in EGA emulation remain to be filled (support for dynamically
loaded fonts is one of the bigger ones).  And the PC AT Keyboard, along with the 8042 and Hard Drive controllers, are all
just limping along at the moment.

Longer term, I'm looking forward to building some new tools, including an "IBM PC Configurator" that will take some
of the pain out of building your own bootable PCjs machine configurations, and make them easier to share, embed, etc.

*[@jeffpar](https://jeffpar.com)*  
*October 12, 2014*
