---
layout: page
title: DEC RK03 Disk Images
permalink: /software/dec/pdp11/disks/rk03/
redirect_from: /disks/dec/rk03/
---

RK03 (or more precisely, RK03-KA) disks are single-platter cartridges with 203 tracks per side, 12 sectors per
track, and a sector size of 256 words (512 bytes), for a total capacity of 2.38Mb (2,494,464 bytes).  They are
used in RK05 disk drives in conjunction with an [RK11 Disk Controller](/configs/pdp11/rk11/).

Below is a summary of RK03 disk images archived here.

  - [RT-11 v4.0](rt11v4/) [[Source](http://skn.noip.me/pdp11/): RK1.DSK]
  - [Unix v5](unixv5/) [[Source](http://skn.noip.me/pdp11/): RK0.DSK]
  - [XXDP+ Diagnostics](xxdp/) [[Source](http://skn.noip.me/pdp11/): RK2.DSK]

---

While the geometry of an RK03 disk implies that the total image size should be 2,494,464 bytes, not all the
disks we've archived started out that way.  For example, the RT-11 v4.0 disk image was originally 1,454,592
bytes long.  Presumably, when it was used by other emulators, they assumed zeros for the missing sectors.

Since the PCjs [DiskDump]({{ site.github.pages }}/tools/old/diskdump/) utility relies on exact file sizes to match disk images to
supported geometries, I padded the disk image:

	dd if=/dev/zero bs=1 count=1039872 >> RK03-RT11-V40.dsk

After appending an additional 1,039,872 bytes to the original 1,454,592, DiskDump was happy to process the
image:

	diskdump --disk=RK03-RT11-V40.dsk --format=json --output=RK03-RT11-V40.json
	2494464-byte disk image saved to RK03-RT11-V40.json
