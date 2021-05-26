---
layout: post
title: Copy Protection
date: 2019-04-10 10:00:00
permalink: /blog/2019/04/10/
preview: /blog/images/word115-disk-image.png
---

I've long wanted PCjs to run unmodified copy-protected MS-DOS software directly from original disk images,
but copy-protected disks are -- no surprise -- difficult to copy, and PCjs supported only standard DOS-formatted
disk images, where all the sectors are 512 bytes, all the sector IDs are consecutive, and so on.

Previously, the only way PCjs could run copy-protected software was to use patched binaries that bypassed any
copy-protection checks, so that's what I used in a few cases (e.g., [Lotus 1-2-3](/software/pcx86/app/lotus/123/1aa/)).
But last year, I acquired a [KryoFlux](https://www.kryoflux.com/) device, which reads (and writes) all kinds of
diskettes, and -- in theory -- captures everything you need to know to reproduce a diskette.

I've only used the KryoFlux software a few times, because most of the diskettes I've collected aren't
copy-protected and can be perfectly reproduced with programs like [WinImage](http://www.winimage.com/download.htm).
But I did use it last year to read a set of original copy-protected [IBM Multiplan 1.00](/software/pcx86/app/ibm/multiplan/1.00/)
disks.  And by using another program called [HxC](https://hxc2001.com/), I was able to inspect KryoFlux's raw data
from IBM's Multiplan Program disk and discover what was unusual about it:

![HxC IBM Multiplan 1.00](/blog/images/hxc-multiplan-program.png)

The only apparent oddity was the last (8th) sector on track 11: normally, the 8th sector would have a sector ID of 8,
but instead it contained a sector ID of 61.

Fortunately, PCjs uses JSON-encoded disk images, which makes it trivial to annotate sectors with additional information.
As PCx86's [disk.js](/machines/pcx86/lib/disk.js) explains, every JSON disk image is an array of Cylinder objects, where each
Cylinder is an array of Track objects (one per head), and each Track is an array of Sector objects, each of which contains
the following *minimum* set of properties:

    sector:     sector ID
    length:     size of the sector, in bytes
    data:       array of 32-bit values
    pattern:    32-bit pattern used to fill empty or partial sectors

In the case of IBM's Multiplan, all I had to do was to change the appropriate Sector's *sector* value from 8 to 61.

### Microsoft Word 1.15

Early versions of Microsoft Word were also copy-protected, and since
[KryoFlux dumps](https://winworldpc.com/product/microsoft-word/1x-dos) of the original disks are available,
I took a closer look with HxC:

![HxC Microsoft Word 1.15](/blog/images/word115-disk-image.png)

I [discovered](/software/pcx86/app/microsoft/word/1.15/#copy-protection-information) that the last track on
the disk (track 39, side 1) contained 12 sectors instead of the 9 typically found on a 360Kb diskette, that the 5th sector
contained a deliberate CRC error, and that the other 11 sectors were all 256 bytes in length, instead of the usual 512.

Here again, it was a simple matter to re-encode the PCjs disk image with 256-byte sectors and set a new "dataError"
property in the 5th sector.  PCjs version 1.75.0 now checks that property, returning a simulated CRC error whenever it is
set.

So now PCjs can run both [Microsoft Word 1.15](/software/pcx86/app/microsoft/word/1.15/) and
[IBM Multiplan 1.00](/software/pcx86/app/ibm/multiplan/1.00/) in all their original copy-protected glory.

### The Night is Dark and Full of Errors

The copy-protected sectors of the Microsoft Word 1.15 Program disk also tell a short story:

    Copyright 1983 Microsoft Corporation.  Tens of thousands of man-hours
    have been spent to make this product possible, so that you, the user,
    can use high quality programs.  If you steal this software, then we 
    will not receive the fruits of our labor.

    Stealing software is not just a crime, it is also morally wrong.  We
    have worked hard to produce this program, but we cannot keep working
    if we are not paid.  If criminals force us out of business, then we
    will no longer be able to produce programs that people can use.  If
    criminals stop stealing our software, then we wibe [sic] able to write
    more programs, make them more advanced, and sell them at a lower price.
    Think about it.

    We will prosecute anyone we find stealing our software.  If you are
    caught, it is unlikely that you will ever be able to get a job with
    any company in this field.  Don't risk it.  If you are not honest, we
    will not have mercy on you.

    Copyright  1983 by Microsoft
    Word Freedom Fighters:
    Richard Brodie
    Jabe Blumenthal
    Jeff Harbers
    Doug Klunder
    Bruce Leak
    Frank Liang
    Carl McConnell
    David Palmer
    Chris Peters
    Jeff Raikes
    Tom Reeve
    Ken Shapiro
    Charles Simonyi
    Greg Cox
    Pat Th

And WORD.COM contains the following messages:

    ***INTERNAL SECURITY VIOLATION***
    The tree of evil bears bitter fruit,
    crime does not pay.
           THE SHADOW KNOWS

    Trashing program disk.

Those messages are fairly easy to trigger.  You just have to make WORD.COM think that a debugger is running.
Using the [PCjs Debugger](/software/pcx86/app/microsoft/word/1.15/?debugger=true) won't trigger it, because our debugger
doesn't run inside the virtual machine, so it can't be detected.  But you can simulate the effect.

First, set a write breakpoint on address 0000:0004:

    BW 0:4

which will stop execution at the point where WORD.COM is zeroing the single-step vector.  Note that WORD tries
to do this very inconspicuously, by zeroing the vector using an address (F800:8004) that wraps around to 0000:0004.

Anyway, after it's been zeroed, simply write some non-zero values back to the vector:

    EW 0:4 1 2

and then let WORD continue running.  Thousands of instructions later, WORD will notice that the vector has been
altered and will display the above message, on the assumption that someone is trying to single-step the program
and break the copy-protection checks.

Back in 1985, long after this code had shipped in Word and other Microsoft products, the "Trashing program disk"
message apparently alarmed some customers.  See "[Microsoft Drops Some Protection](https://books.google.com/books?id=OC8EAAAAMBAJ&pg=PA8&lpg=PA8&dq=infoworld+microsoft+access+the+shadow+knows&source=bl&ots=_HFndnU3Kj&sig=ACfU3U3i8I4uRN1q-hoP1IVEFPzqwG8SZg&hl=en&sa=X&ved=2ahUKEwiryuervcfhAhVnITQIHVbGCJwQ6AEwAHoECAkQAQ#v=onepage&q&f=false)"
in the November 18, 1985 issue of InfoWorld.

When the message was first reported in InfoWorld's [October 28, 1985 issue](https://books.google.com/books?id=fS8EAAAAMBAJ&pg=PA3&dq=infoworld+microsoft+access+excises+excess+october+28+1985&hl=en&sa=X&ved=0ahUKEwjYgILCv8fhAhWiMHwKHVE7CrgQ6AEIOjAE#v=onepage&q&f=false),
Jeff Raikes reportedly blamed the message on an unnamed programmer who place the "idle threat" into the program without the knowledge of Microsoft officials.

That sounds a little disingenuous but not particularly surprising.  Corporations have long been masters at the art of
deflecting blame and minimizing missteps.
