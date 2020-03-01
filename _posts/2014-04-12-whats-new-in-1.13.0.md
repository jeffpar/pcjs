---
layout: post
title: "What's New in 1.13.0"
date: 2014-04-12 11:00:00
category: Releases
permalink: /blog/2014/04/12/
---

The latest version adds support for "software manifests", which you can read more about [here](/apps/).  Basically, manifests
are simple XML files that describe a piece of software (an application, an operating system, whatever).  They can also
link to a PCjs machine configuration capable of running the software, along with a "ready-to-run" machine state file.
Conversely, a PCjs machine XML file can refer back to the manifest, to obtain a list of disk images.

Here are some [Demos](/apps/pcx86/) of "ready-to-run" apps on [PCjs](/docs/about/). 

There have been lots of server-side changes recently, including API improvements that make it easy (well, *easier*)
to dynamically create diskette images from a list of files, or even an entire folder (including all subfolders),
as long as the total size of all the files will fit on a PCjs-supported diskette image.  Support for creating hard disk
images is still on the "TODO" list (the original **convdisk** PHP script supported hard disk images, but that functionality
hasn't been ported to the newer **diskdump** Node module yet).

Almost nothing has changed in the PCjs client-side code (which is where the emulator runs), except for changes to use
the new **diskdump** API.

*[@jeffpar](https://jeffpar.com)*  
*April 12, 2014*
