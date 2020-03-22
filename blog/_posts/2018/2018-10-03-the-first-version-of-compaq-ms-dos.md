---
layout: post
title: The First Version of COMPAQ MS-DOS
date: 2018-10-03 10:00:00
permalink: /blog/2018/10/03/
preview: /blog/images/compaq/COMPAQ-DOS110-Diskette.jpg
machines:
  - id: compaq-portable-128kb
    type: pcx86
    config: /configs/pcx86/xml/machine/compaq/portable/vdu/128kb/machine.xml
    autoType: \r\r$20demo\r
---

A few weeks ago, I found a pristine set of all three manuals that COMPAQ shipped with their very first portable,
along with an original COMPAQ MS-DOS 1.10 diskette.  They are all "first editions".  The Operations Guide is dated
November 1982 and the rest are dated December 1982. 

[![COMPAQ MS-DOS 1.10 Manuals](/blog/images/compaq/COMPAQ-DOS110-Manuals.jpg)](/pubs/pc/software/dos/compaq/1.10/)

These manuals are unlike any other COMPAQ manuals I've seen before.  As the June 1983 issue of
[PC Magazine](https://books.google.com/books?id=14Kfbrc6cbAC&lpg=PA188&dq=pc%20magazine%20Compaq%20DOS%201.10&pg=PA186#v=onepage&q&f=false)
reported:

    In the best clone manner, the Compaq provides three near-twins to the
    IBM manuals.  The three slip-cased ring binders--Operator's Guide, BASIC
    Reference Guide, and DOS Reference Guide--are very well presented, and
    are in many ways an improvement in both writing and organization over
    the originals.

I've scanned all three manuals and filed them under [COMPAQ MS-DOS 1.10 Documentation](/pubs/pc/software/dos/compaq/1.10/).

The [COMPAQ MS-DOS 1.10](/disks/pcx86/dos/compaq/1.10/) diskette included with the Version 1.10 manuals was
also in excellent condition.  Most of its files were dated January 20, 1983, with the exception of BASICA.EXE,
which was dated February 8, 1983.

[![COMPAQ MS-DOS 1.10 Diskette](/blog/images/compaq/COMPAQ-DOS110-Diskette.jpg)](/disks/pcx86/dos/compaq/1.10/)

Until now, I don't think a copy of this version of MS-DOS was available online, which may also explain why
[Wikipedia](https://en.wikipedia.org/wiki/Compaq_Portable) got it wrong when they claimed that:

    The first Portables used Compaq DOS 1.13, essentially identical to
    PC DOS 1.10 except for having a standalone BASIC that did not require
    the IBM PC's ROM Cassette BASIC....

COMPAQ MS-DOS 1.10 must have been the first version of MS-DOS that COMPAQ shipped.  In fact, I've never seen a copy
of COMPAQ MS-DOS 1.13.  The only other 1.xx releases from COMPAQ I'm aware of are [MS-DOS 1.11](/disks/pcx86/dos/compaq/1.11/)
and [MS-DOS 1.12](/disks/pcx86/dos/compaq/1.12/).  It also appears that by version 1.12, updated in November 1983, COMPAQ
had abandoned the fancy IBM-style slip-case manuals for something [a bit more practical](http://16bitos.com/112ms.htm).

PC DOS 2.0, along with the IBM PC XT, had been released in March 1983, so in retrospect, it's a little surprising
that COMPAQ was still updating the MS-DOS 1.x product line as late as November 1983.  On the other hand, COMPAQ didn't
start shipping the COMPAQ Portable Plus with a built-in hard disk until 1984, so MS-DOS 2.x wouldn't have added much
value for their customers until then.  MS-DOS 2.x included other useful features, such as support for 180Kb single-sided
diskettes and 360K double-sided diskettes, but it's not clear if COMPAQ produced any 2.x releases prior to the
introduction of the Portable Plus.

> NOTE: PCjs [DOS Documentation](/pubs/pc/software/dos/) also includes copies of the three manuals for
[COMPAQ MS-DOS Version 2](/pubs/pc/software/dos/compaq/2.xx).  Sadly, no disk(s) were included
with the Version 2 manuals, which were released in October 1984.  Many screenshots were edited to
display the DOS version as "2.XX", so it's unclear exactly which version of MS-DOS might have been included
with them.

The software on MS-DOS 1.10 diskette also includes some COMPAQ-specific software, which the
[PC Magazine](https://books.google.com/books?id=14Kfbrc6cbAC&lpg=PA188&dq=pc%20magazine%20Compaq%20DOS%201.10&pg=PA192#v=onepage&q&f=false)
article goes on to describe:

    The demonstration programs that come on the Compaq DOS disk are very
    well-designed and include a "laser" that paints the company's name on
    the title page and a cute trademark "bug" that traverses the screen.
    The demonstration also includes a diagnostic testing procedure that allows
    you to run through the full battery of tests without having to stop and
    respond to each "error message" as it occurs (a procedure adopted by
    IBM in its PC-XT diagnostics program).

However, more work is required before we can see that in action in a PCjs machine, because I have not yet tried
the original [COMPAQ Portable ROM](/devices/pcx86/rom/compaq/portable) or added support for the COMPAQ VDU monochrome
graphics adapter, which combined capabilities of both IBM's MDA and CGA adapters.  I hope to add PCjs support
for COMPAQ's ROM and VDU in the near future.

### October 6, 2018 Update

I recently added a [COMPAQ Portable](/devices/pcx86/machine/compaq/portable/vdu/128kb/debugger/) machine configuration
with built-in PCjs debugger.  It's using the oldest original COMPAQ ROM BIOS we have ([Rev B](/devices/pcx86/rom/compaq/portable/))
along with COMPAQ MS-DOS 1.10.  And limited support for COMPAQ's video (VDU) board is now available, including monochrome graphics.
Enjoy COMPAQ's "laser" demonstration below.

{% include machine.html id="compaq-portable-128kb" %}

*[@jeffpar](https://jeffpar.com)*  
*Oct 3, 2018*
