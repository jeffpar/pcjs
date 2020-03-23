---
layout: post
title: Early OS/2 Artifacts
date: 2016-01-23 14:00:00
category: OS/2
permalink: /blog/2016/01/23/
---

Before OS/2 was named **OS/2** by IBM on April 2, 1987, the operating system was known by many different names at
Microsoft as it evolved, including **DOS5**, **MT-DOS**, **CP-DOS**, and **ADOS**.

In late 1986, Microsoft began working on a couple different branches.  One was called **SIZZLE**, where a variety of
performance improvements were tested before being merged back into the main branch.

Another branch was **FOOTBALL** (aka **PIGSKIN**), an early 80386-based prototype intended to test the viability
of the running multiple DOS applications in V86-mode.  Sometimes this 80386 version was also called **386DOS**,
to distinguish it from **286DOS**.  More details are in this
[FOOTBALL Design Document](/software/pcx86/sys/os2/misc/87058/#football-design-document).

To shed some light on those efforts, I recently added a few [OS/2 Prototype Disks](/software/pcx86/sys/os2/misc/): a small
collection of early (mostly pre-1.0) OS/2 boot disks that provide a glimpse of what some of those early OS/2 builds
looked like.

Getting these early versions of OS/2 to run in **PCjs** has been a bit of a challenge.  There have been some successes
but also some lingering issues.  Debugging continues.

Part of the problem is that these pre-1.0 builds still contain a few bugs.  Also, the original
[OS/2 FOOTBALL Boot Disk](/software/pcx86/sys/os2/misc/87058/) from February 1987 was developed and
tested exclusively on Compaq DeskPro 386 machines from late 1986, so it has some uncommon 80386 dependencies:

* The [80386 LOADALL](/pubs/pc/reference/intel/80386/loadall/) instruction
* 32-bit segment register writes must modify only 16 bits of memory

**FOOTBALL** also had some specific video hardware requirements: CGA or EGA.  Note that the VGA, which is what most
emulators use by default these days, did not exist in 1986.  The VGA was introduced in April 1987, when IBM
unveiled their new PS/2 hardware line -- and announced OS/2.
