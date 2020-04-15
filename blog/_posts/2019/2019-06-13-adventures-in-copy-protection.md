---
layout: post
title: Adventures in Copy Protection
date: 2019-06-13 10:00:00
permalink: /blog/2019/06/13/
preview: https://gamedisks.pcjs.org/pcx86/game/microsoft/adventure/Adventure_Booklet_Cover.jpg
machines:
  - id: ibm5150-adventure
    type: pcx86
    resume: 1
    config: /configs/pcx86/machine/ibm/5150/mda/64kb/machine.json
    autoMount:
      A:
        name: Microsoft Adventure (Unmodified)
---

Thanks to a contribution from a PCjs user, I was able to examine a KryoFlux dump of an original
[Microsoft Adventure](/software/pcx86/game/microsoft/adventure/) diskette:

![Microsoft Adventure Diskette]({{ site.software.gamedisks.server }}/pcx86/game/microsoft/adventure/Adventure_Diskette-HxC.png)

You can see that the first sector on the (outermost) track is a normal 512-byte sector -- which it must
be in order to function as a boot disk -- but the rest of the disk is primarily 256-byte sectors, along
with bad sectors and unusual sector IDs.  Since this isn't a DOS-compatible diskette, it can (and does)
break all the rules.

Interestingly, this dump wasn't created with the KryoFlux software.  Instead, starting with a TransCopy dump,
along with some advice on using the image conversion tools that come with [PCE](http://www.hampa.ch/pce/),
I was able to convert the TransCopy `.tc` file into a set of KryoFlux `.raw` track files and successfully
load them into [HxC](http://hxc2001.free.fr/).

The basic steps:

- Run PCE's **PRI** utilty to convert the `.tc` file to a `.pri` (PCE Raw Image) file
- Run PCE's **PFI** utility to convert the `.pri` file to a `.pfi` (PCE Flux Image) file
- Run PCE's **PFI** utility again to convert the `.pfi` file to a set of `.raw` track files

For example:

    pri MSADVENT.tc MSADVENT.pri
    pfi -p encode pri MSADVENT.pri MSADVENT.pfi
    pfi MSADVENT.pfi track00.0.raw

In the process, I also learned a bit about `.psi` (PCE Sector Image) files, which can be created
from `.pri` (PCE Raw Image) files; eg:

    pri MSADVENT.pri -p decode mfm MSADVENT.psi -f -v

The nice thing about a `.psi` file is that the format is fairly straightforward, and with the help of
a little [documentation](https://github.com/jeffpar/pce/blob/master/doc/psi-format.txt), I was able to
update my [DiskDump]({{ site.github.pages }}/tools/diskdump/) utility to read `.psi` files directly
and create JSON-encoded PCjs disk images that replicate the structure of the original diskettes.

There are now *two* Microsoft Adventure disk images in the PCjs Disk Library:

- "Microsoft Adventure", which contains patched code on a standard diskette
- "Microsoft Adventure (Unmodified)", which contains the original copy-protected code

The first diskette is what I originally had to use before PCjs supported copy-protected disks.  In theory, I
could have simply replaced the first diskette with the copy-protected version, but that would have broken
the saved machine state of anyone who had already started playing the game with the first diskette.  Besides,
there may be some historical or diagnostic value in keeping both versions.

OK, enough with the boring blog post.  Time to play!

{% include machine.html id="ibm5150-adventure" %}
