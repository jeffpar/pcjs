---
layout: post
title: Adventures in Archiving
date: 2017-06-15 22:00:00
permalink: /blog/2017/06/15/
machines:
  - id: ibm5150-adventmath
    type: pcx86
    config: /configs/pcx86/machine/ibm/5150/cga/64kb/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 1.00
      B:
        name: Adventures in Math 1.00
    autoType: $date\rB:\rA:BASICA CASTLE\r
---

In October 1983, IBM released a game called "Adventures in Math", which apparently tried to make mathematics as
exciting as walking through a dungeon full of locked doors, treasures, spiders, and more.  I had never heard of this
game, until I was recently browsing the [Internet Archive](https://archive.org/)'s
[MS-DOS Showcase](https://archive.org/details/softwarelibrary_msdos_showcase):

> This collection is a hand-picked set of selections from the MS-DOS Software Library of the Internet Archive.
They've been chosen because they represent major parts of the MS-DOS story, because they are particularly impressive,
and because they're fun. The intention is to eventually link these games to manuals and other materials as time goes on.

> Curation was done by Jason Scott, Internet Archive's Software Librarian. He can be reached at jscott@archive.org with
suggestion, questions and inquiries.

For some reason, "Adventures in Math" caught my eye.  You can play it on the
[Internet Archive](https://archive.org/details/msdos_Adventures_in_Math_1983), or play it below, using PCjs.  In
fact, I invite you to play it in BOTH places, and let me know what you think.

A word of warning: this is NOT a great game.  I find it interesting only as an example of the challenges we face
archiving and emulating old software.

{% include machine.html id="ibm5150-adventmath" %}

Hosting the software on the PCjs website was more tedious than I'd expected, but that wasn't due to technical issues.
The biggest challenge was isolating and recreating the original distribution software.  You can find all the gory
details on the page I created for "[Adventures in Math](/software/pcx86/game/other/1983/adventmath/)".

In short, although the software is archived inside multiple ZIP archives at the [Internet Archive](https://archive.org/),
none of them appeared to contain an unmodified distribution copy of the original software.  And discovering that the
software was archived inside multiple ZIP archives was a purely accidental discovery, not something one could easily
determine using the Internet Archive's own search engine.

### Emulation Challenges

There are a few issues with the Internet Archive's approach to emulation that I'd like to discuss.  First, they load
sets of files, along with custom batch files, into tightly coupled machine configurations, with no indication which
files were part of the original software distribution, and no hardware details regarding their "mystery" machine
configurations. 

Second, the Internet Archive's overall emulation experience doesn't represent the original hardware and software very
accurately.  Their rendering of "Adventures in Math" gives the impression that the game ran *much* faster than it
actually ran on a circa 1983 4.77Mhz IBM PC.  Their emulator can be configured operate at different speeds, but it's
unclear which of their holdings have already been "tuned" and which have not.  "Adventures in Math" has not.

As a fallback, they do provide some user controls:

> "While the program is running, press CTRL-F11 to slow the program down. Pressing CTRL-F11 repeatedly will slow it
down further, until the speed is more reasonable. (Pressing CTRL-F12 repeatedly will attempt to speed things up.)"

but in general, the user has no idea what speed they have currently selected, or what the target speed should be.
For users who simply want "to play the game," that may be fine, but historians would probably prefer to see how the
game originally operated and how each screen was painstakingly rendered, to better understand both the original user
experience and the challenges that early software developers faced.

The failure to archive software exactly as it was originally distributed, generally as one or more disk image (IMG)
files along with scanned (PDF) copies of the documentation, is one of the most important problems we collectively face.
I don't blame the Internet Archive, because in most cases, they're simply archiving what someone else archived before
them, and those earlier "archivists" often didn't take the time to thoroughly preserve and document everything.

On the other hand, the Internet Archive could probably do a better job cataloging its holdings, recording the provenance
of everything they have archived, maintaining a clear separation of original material from subsequent modifications
(including any modifications created solely for ease of emulation), providing more control over machine configurations,
and enabling the use of third-party emulators -- like PCjs -- which may be able to perform a more faithful rendering
of certain software packages.

In addition, I would hope that anything the Internet Archive "archives" itself (ie, from original distribution media)
is duplicated and preserved according to a *much* higher standard than any files, documents, etc, it has simply scraped
from the Internet.
