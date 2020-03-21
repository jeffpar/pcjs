---
layout: post
title: Write Protection and Other Idiosyncrasies
date: 2018-12-04 10:00:00
permalink: /blog/2018/12/04/
preview: /blog/images/pcmag-1982-12-user-to-user.jpg
machines:
  - id: ibm5150
    type: pcx86
    config: /devices/pcx86/machine/5150/mda/256kb/machine.xml
    floppyDrives: '[{heads:1},{heads:1}]'
    autoMount:
      A:
        name: PC DOS 1.00
      B:
        name: Empty Diskette (160K)
    autoType: $date\r
---

While browsing the [December 1982 Issue of PC Magazine](https://archive.org/details/PC-Mag-1982-12),
I noticed an interesting letter in the "[User-To-User](https://archive.org/details/PC-Mag-1982-12/page/n321)"
column (p. 320):

> **Recover Lost Data**

> I have discovered a flaw in the way DOS handles a retry after a user error.
> I wanted to copy some data from one disk to another. I had the disk to be
> copied from in drive A: but I had the wrong disk in drive B. In fact the disk
> in drive B was write protected. I entered the Copy command and the system
> gave me an error. It then asked if I wanted to Abort, Rentry [sic] or Ignore.
> I put the correct disk in drive B and selected Rentry [sic]. Result: The data
> on the disk in drive B was rendered unusuable [sic].

> Further investigation revealed the following: When writing to a disk, the
> system apparently reads the directory, updates it in memory, and then writes
> it back. In the case described above, the system read the directory of the
> write-protected disk and updated in memory, but when it attempted to write it
> back out, the write protect caused an error. When I changed disks, DOS
> proceeded to write the directory from the write-protected disk onto the new
> disk, destroying the new disk’s directory. Of course, most of the data was
> still there, but since I didn’t know which sectors it was on, I could not
> rebuild the directory.

> This problem exists with MS-DOS as distributed by IBM in both version 1.00
> and 1.10.

> Robert D. Scott  
> Cincinnati, Ohio

However, there was no easy way to demonstrate that scenario in a PCx86 machine. because there
was no way to make a diskette "write-protected."

Until now.

### Write Protection

PCx86 v1.73.1 now lists each diskette drive twice.  If you select the first entry, **[A:]**,
then any diskette loaded into drive A will be writeable, as always.  However, if you select the
the second entry, **[A&#42;]**, then any diskette in drive A will be considered write-protected.

Write protection is traditionally a property of the diskette, not the drive.  For example,
5.25-inch diskettes have a notch on the side, and if the notch is covered with a sticker,
the drive will refuse to write to it.  However, virtual diskette images don't have notches.
I could have added a "virtual notch" or checkbox next to the name of the current diskette
and labeled it "Write-Protected", but I wanted to avoid making the UI any more cluttered than
it already is, so I decided to make write protection a property of the *drive* instead, and
use special entries in the drive list to enable it.

### Abort, Retry, Ignore

It's now easy to confirm what Robert D. Scott discovered 36 years ago.  The original IBM PC below
was configured with a "PC DOS 1.00" diskette in drive A and an "Empty Diskette (160K)" in drive B,
so that you can try the following:

- Choose drive **[B*]**
- Observe the following alert: "Any diskette loaded in this drive will now be write-protected"
- At the DOS **A&gt;** prompt, type **COPY COMM.BAS B:**
- Observe the following error: "Write protect error writing drive B"
- Choose drive **[B:]**
- Load the "PC DOS 1.00" diskette into drive B
- Press **R** to Retry

At this point, **DIR B:** will reveal your new scrambled disk.  It contains not one but
*two* copies of **COMM.BAS**, and it doesn't look anything like either the original
"Empty Diskette (160K)" or the "PC DOS 1.00" diskette.

**CHKDSK B:** reports (and immediately attempts to fix) a series of allocation and file size errors,
but it isn't able to fix them all.  In fact, it damages the good copy of **COMM.BAS** and fails to
remove the duplicate.

The sad fact is that changing your media in the middle of a critical error is a problem that DOS never
resolved.  Instead, we had to train ourselves to never do that.

### Single-Sidedness

Having finished support for write-protection, I decided to add a few more drive configuration options,
like support for single-sided diskette drives.

The original IBM PC from 1981 shipped with single-sided drives, and the original version of PC DOS (1.00)
supported only single-sided 160K diskettes.  Interestingly, the ROM always supported drives with two heads,
and at some point, all IBM PCs began shipping with double-sided drives as well -- certainly after IBM
released PC DOS 1.10 in May 1982, which added support for double-sided 320K diskettes.

Up until now, PCx86 diskette drives were always double-sided, because single-sided drives were pretty rare
after 1982, and who really wants *just* a single-sided drive anyway?  Well, you do, if you're someone who likes
to examine original software operating under original hardware constraints.

Look at [PC DOS 1.10](/disks/pcx86/dos/ibm/1.10/): the **FORMAT** utility was modified to automatically
format all new diskettes with the new, higher capacity of 320K -- provided of course that the drive *truly* had
two heads and the diskette was *truly* double-sided.  You had to specifiy **FORMAT /1** if you really wanted to
use only one side of the diskette.

Most PCx86 machines have double-sided drives.  The machine below, however, contains diskette drives
with a single head.  As a result, **FORMAT** will always produce a 160K diskette (no **/1** required).
Load the "PC DOS 1.10" diskette into drive A, reboot (CTRL-ALT-DEL), and give it a try.

Another way of testing single-sided **FORMAT** operations would have been to create 160K and 180K single-sided
diskette images that were "restricted" to a single side; however, that would have required a change to the PCjs
diskette image format.  Historically, all our diskette images are permitted to expand to two sides, even those
that contain no data on the second side or are formatted only on one side; that includes our "Empty Diskette (160K)"
and "Empty Diskette (180K)" images.

### Non-Bootable Diskette Drives

One final diskette configuration wrinkle I decided to include in the latest release was support for "non-bootable"
drives.  This makes it possible for a machine to have a preloaded diskette in drive A that's bypassed during the normal
ROM BIOS boot process, allowing it boot from a hard drive instead.

One example is the [Digital Research DR DOS 6.00](/disks/pcx86/dos/dresearch/6.00/) machine.  It's an IBM PC AT
with "DR DOS 6.00 (1.2M Disk 1)" preloaded in drive A; however, because that drive's *boot* property has been set to
*false*, the FDC component will automatically fail any attempt to read the first sector of the disk into memory location
0x7C00.

Modern ROM BIOSes have built-in boot options to make that happen automatically, without resorting to subterfuge involving
specific reads into specific memory locations.  But PCjs prefers to use original manufacturer ROMs, which hadn't yet
achieved that level of sophistication.

{% include machine.html id="ibm5150" %}

*[@jeffpar](https://jeffpar.com)*  
*Dec 4, 2018*

[![User-To-User](/blog/images/pcmag-1982-12-user-to-user.jpg)](https://archive.org/details/PC-Mag-1982-12/page/n321)
