---
layout: default
title: DiskDump Module
permalink: /tools/diskdump/
---

DiskDump is a Node [module](lib/diskdump.js) with both a command-line [utility](bin/diskdump) and a web server API
for converting disk images to/from various formats (eg, JSON files, JSON files with comments, IMG disk images, etc). 

### Building Disk Images from Folders/Files

In addition to converting disk images to/from JSON, DiskDump can also create disk images from the contents of local
files/folders.

For example, from the root directory of the project, you could run:

	node modules/diskdump/bin/diskdump --path="apps/pcx86/1981/visicalc/README.md" --format=img --output=disk.img

to produce a `disk.img` containing one file, "README.md", which you could then mount on your local operating
system *or* inside a PCjs machine.

To make the disk image more useful, you might want to download a copy of [VisiCalc](http://www.bricklin.com/history/vcexecutable.htm)
into that folder as well, so that you could then run:

	node modules/diskdump/bin/diskdump --path="apps/pcx86/1981/visicalc/vc.com;README.md" --format=img --output=disk.img

to produce a `disk.img` containing both "VC.COM" and "README.md".  In fact, this is exactly how the
[VisiCalc Disk](/apps/pcx86/1981/visicalc/VISICALC1981.json) stored in the [VisiCalc](/apps/pcx86/1981/visicalc/)
folder was generated.

The equivalent web server API request would look like:

	http://localhost:8088/api/v1/dump?path=/apps/pcx86/1981/visicalc/vc.com;README.md&format=img

DiskDump is a port of the earlier PCjs **convdisk.php** utility.
