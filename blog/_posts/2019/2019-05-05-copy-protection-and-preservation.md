---
layout: post
title: Copy Protection and Preservation
date: 2019-05-05 10:00:00
permalink: /blog/2019/05/05/
preview: /blog/images/dbase-iii-disk-image.png
---

A third piece of original unmodified copy-protected software now runs on PCjs:
[dBASE III 1.0](/software/pcx86/app/other/dbase3/1.0/).

Unlike [IBM Multiplan 1.00](/software/pcx86/app/ibm/multiplan/1.00/), whose copy-protection relied on a
single out-of-sequence sector ID, and [Microsoft Word 1.15](/software/pcx86/app/microsoft/word/1.15/), which
used smaller-than-normal sectors (including one with an invalid checksum), dBASE III 1.0 was shipped on
diskettes that were physically altered in a way that no floppy disk controller could duplicate.

At least one other emulator has already [accomplished](https://forum.winworldpc.com/discussion/9472/software-spotlight-dbase-iii-r1-0)
this feat.  And I had already [debugged](/documents/pcjs/programming/1984-09-16--DBASE_III_DEBUG.pdf)
and [defeated](/documents/pcjs/programming/1984-09-25--DBASE_III_PATCH.pdf) dBASE III copy-protection
almost 35 years ago.

However, something that's missing from both contemporary and modern reports is any real
explanation of how this particular copy-protection scheme worked or how feasible it might be to duplicate
using modern hardware.

Even my own old notes don't shed much light on it, since at the time, my focus
was disabling the copy-protection code.  I was interested only in identifying
the code, preventing it from disabling the debugger (`DEBUG.COM`), finding the point
where it decides whether the disk is OK, and designing a patch to disable it.
Most of my notes were a record of my education on the operation of the DMA and Floppy
Disk Controllers, because the code did *everything* itself, without any ROM BIOS assistance.

### Meet PROLok

Ashton-Tate, the maker of dBASE III, used a copy-protection scheme developed by Vault Corporation called
PROLok, which reportedly involved using a laser to burn a small "hole" into a predetermined area of the disk,
and then incorporating code into the application which would analyze the sector containing that hole.  If the
analysis failed, the application would report:

    Unauthorized Duplicate

and terminate.  In the KryoFlux visualization below, this "hole" appears on the **dBASE III 1.0 (Disk 1)**
on track 39, sector 5 -- the orange arc immediately to the left of the two red rings.

![dBASE III 1.0](/blog/images/dbase-iii-disk-image.png)

Press reports at the time were slightly misleading, as there was no actual "hole".  A laser may have
been used, but only to *damage* -- not puncture -- a single sector on one side of the disk.  Moreover, the
damage had to occur somewhere in the middle of the target sector, allowing a certain number of bytes to
still be written to the beginning of the damaged sector.

With that in mind, here was the basic logic of the PROLok copy-protection check:

- Read the damaged sector
- Verify that the read operation reports a CRC error
- Write *new* data to the damaged sector
- Re-read the damaged sector
- Verify that the read operation returns *some* of the new data

Since the first part of the sector is undamaged, a certain number of bytes should contain new data after
the write.  The PROLok code knows where the damaged area begins (within +/-10 bytes), so after it performs that
last read, it expects to see new data *only* up to that point.

### Duplicating PROLok

For an emulator, duplicating such an error is fairly straightforward, and in PCjs, it's almost trivial.
All I had to do was add a new *dataError* property to the damaged sector of the JSON-encoded disk image.  The
value of this new property specifies the maximum number of bytes that can be written; any bytes written
beyond that point are now ignored by the PCjs [Floppy Disk Controller](/machines/pcx86/modules/v2/fdc.js).

This mimics what happens with a real PROLok disk.  For example, some 200+ bytes may be successfully written
to a damaged 512-byte sector, and those 200+ bytes will be returned on a subsequent read, but the rest of the bytes
are unmodifiable and invalid, so they will never change, and they will always trigger a CRC error as well.

Even today, duplicating this kind of error on another physical disk still seems very problematic.  Without disk
duplication hardware that can somehow create the same kind of "damage" in the middle of a sector, it's hard to
see how another working physical copy of the disk could be made.

### The Software Preservation Quandary

From a software preservation standpoint, it might be sufficient to simply duplicate all the undamaged sectors and
call it a day, since -- at least in the case of PROLok -- there isn't any code or data in the damaged sectors that
needs to be preserved.  But if the preservation goal includes being able to *run* the software exactly as it originally
existed, on original hardware, that goal becomes extremely challenging.

In the case of software like dBASE III, our choices appear to be:

- Rely on emulators like PCjs, in conjunction with "annotated disk images"
- Use [patched binaries](/software/pcx86/app/other/dbase3/1.0/#dbase-iii-disk-information)
- Find or build specialized hardware that can recreate specific disk anomalies

It's also unclear how well the "annotated disk image" approach that PCjs uses could be automated.  For a PROLok-style
diskette, one can imagine a duplication process that doesn't simply read every sector, but also writes modified data
to every sector, in order to determine to what extent, if any, each sector can be modified.  But all we'd be doing is
"copying" the PROLok logic, which might work great for PROLok diskettes but not so great for other kinds of physical
modifications.

Another concern is that such a process could be inadvertently destructive.  There's something inherently disturbing
about a duplication process that involves writing modifications to the original diskette.

I didn't have to wrestle with that concern, however, because I no longer have an original diskette.  All I had was a
KryoFlux dump, which doesn't tell you much about the physical condition of the diskette.  So I resorted to
[debugging](/software/pcx86/app/other/dbase3/1.0/#debugging-notes) the software again (as I did
[35 years ago](/documents/pcjs/programming/)), watching the reads and writes, observing what PROLok's expectations
were, inferring that one of the 512-byte sectors must have been physically damaged within +/-10 bytes of the 272nd byte,
and then recording that in my annotated disk image.
