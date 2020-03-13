---
layout: post
title: A Quick Post
date: 2019-07-28 10:00:00
permalink: /blog/2019/07/28/
preview: https://diskettes.pcjs.org/pcx86/lang/microsoft/basic/QUICKBAS100.png
---

There have been a number of small additions to the website over the last month:

- A set of [COMPAQ Technical Reference Guides](/machines/pcx86/compaq/deskpro286/#documents) (thanks to Ray Knights of Las Vegas, NV)
- A few more 1989 issues of [PC Tech Journal](/documents/magazines/pctj/) magazine, which now makes the collection complete
- [QuickBASIC 1.0](/software/pcx86/lang/microsoft/basic/quickbasic/1.00/) and [QuickBASIC 2.0](/software/pcx86/lang/microsoft/basic/quickbasic/2.00/) original diskettes; version 1.0 had been particularly hard to find

as well as a few PCx86 tweaks:

- Fixed full-screen support for Chrome, Safari, and Edge
- Added Copy/Paste support

As of v1.75.5, it should now be possible to right-click on a PCx86 screen and choose Copy/Paste commands, or use
your browser's Copy/Paste shortcut keys, or both.  The browser's right-click context menu won't always be available
if the machine inside is expecting mouse events, but hopefully your browser's keyboard shortcuts will still work.

Pasting works by injecting keystrokes into the machine, much like you could already do with the *autoType* URL parameter
(check out this [blog post](/blog/2018/03/22/) for a demo of *autoType*).  And like *autoType*, special keystrokes can be
pasted as well.  For example, Ctrl-F4 can pasted with "$ctrl$f4".  But unlike *autoType*, any special "$" sequences will
be ignored and pasted as-is *unless* you also end the entire block of text with "$"; the final "$" will not be pasted.
And if you want to paste a block of text as-is that also ends with "$", end it with "$$" instead.

Consider this a "beta" release of Copy/Paste support, because the feature is new, hasn't been tested a lot, and could
probably benefit from some user feedback.  If there are no issues, I'll look into adding the support to other machines
(e.g., PC8080, PDPjs, TI-57, etc), too.

I've also been working on weaning PCjs off of Amazon Web Services.  I was using S3 cloud storage for many of the
documents I've scanned over the years, but since I was also paying for OneDrive, it seemed silly to pay extra for AWS,
which charges me for both bandwidth and space.  The embedded OneDrive links may not be as fast or convenient as the old
AWS links, but it lowers my costs, and you still don't have to pay anything, so it's a win-win.  Or a win-push.  Or
something.

I haven't turned off AWS yet, primarily because there's a number of "archive.pcjs.org" links out in the wild that are
still served by AWS, but I plan to address that in the near future.

I'd also like to spend some time playing with the old versions of QuickBASIC.
The diskettes I picked up didn't come with any manuals, but I do have a copy of "Microsoft QuickBASIC" by Douglas Hergert
from Microsoft Press (1987).  I'm thinking about mailing in a request for the "Companion Disk", too.  I'll let you know if
Microsoft Press comes through.

{% include gallery/documents.html title="Microsoft QuickBASIC" path="/documents/manuals/microsoft/" tag="quickbasic" width="200" height="260" %}

![Microsoft QuickBASIC Companion Disk Offer](/documents/manuals/microsoft/covers/Microsoft_QuickBASIC-1987-Offer.jpg)
