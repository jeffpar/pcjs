---
layout: post
title: New Old Software
date: 2018-01-27 10:00:00
permalink: /blog/2018/01/27/
---

A few more interesting disks were recently added to the PCjs Archives, including:

- [WordStar v3.20](/software/pcx86/app/other/wordstar/3.20/) for DOS (courtesy of the [OS/2 Museum](http://www.os2museum.com/))
- [WordStar for PCjr](/software/pcx86/app/other/wordstar/pcjr/) (courtesy of a former MicroPro employee and [WinWorld](https://winworldpc.com/product/wordstar/for-pcjr))
- Previously unavailable versions of QEMM-386, including [4.10](/software/pcx86/env/quarterdeck/qemm386/4.10/), [4.23](/software/pcx86/env/quarterdeck/qemm386/4.23/), [5.13](/software/pcx86/env/quarterdeck/qemm386/5.13/), and [6.02](/software/pcx86/env/quarterdeck/qemm386/6.02/) (courtesy of eBay) 
- Software from [Undocumented DOS (2nd Edition)](/software/pcx86/sw/books/undocumented_dos/) and [Unauthorized Windows 95](/software/pcx86/sw/books/unauthorized_windows_95) (courtesy of Andrew Schulman)

I also took a closer look at the [COMPAQ MS-DOS 3.31](/software/pcx86/sys/dos/compaq/3.31/) disks, in order to test its
support for DOS partitions greater than 32Mb, and discovered some disquieting things about them.

First, the disks (courtesy of [WinWorld](https://winworldpc.com/product/ms-dos/331)) are a mixture of disks from
late 1988 and mid 1989, one of which actually has COMPAQ MS-DOS 4.01 binaries on it.  Second, it seems that COMPAQ
released multiple "revisions" of MS-DOS 3.31, because WinWorld also has "Rev. G" from 1990.  And I happened to have an
old COMPAQ MS-DOS [SETUP Disk](/software/pcx86/sys/dos/compaq/3.31/#directory-of-compaq-ms-dos-331-setup-505) from 1987 that
*also* reports version 3.31.  That makes at *least* three revisions of a single version of COMPAQ MS-DOS.

The good news is that large (&gt;32Mb) partition support in [COMPAQ MS-DOS 3.31](/software/pcx86/sys/dos/compaq/3.31/) works
fine in PCjs.  See the [47Mb Hard Drive](/configs/pcx86/xml/hdc/47mb/) page for additional information.

### A New Old COMPAQ ROM

As mentioned on the [COMPAQ DeskPro 386 ROMs](/machines/pcx86/compaq/deskpro386/rom/) page, I recently discovered that
I still had a copy of the 1986 `Rev F` ROM, which I had made on April 22, 1987, using one of the early DeskPro 386
machines that Microsoft had purchased for the OS/2 development team.  The only downside of my `Rev F` ROM image is that
it was dumped using the DOS `DEBUG` utility, since I didn't have ROM reader hardware in those days.  Fortunately, since
I wasn't sure how large the ROM actually was, I had dumped the entire 64Kb from F000:0000 through F000:FFFF.  As it
turns out, that entire address range is actually write-protected RAM (since, at least in those days, RAM was much faster
than ROM), where the first 32Kb contained a modified copy of the second.  For example, the first 32Kb contains some data
structures that are updated by COMPAQ utilities such as `CEMM` to record "Built-in Memory" allocations.

Sure enough, attempting to use the [first 32Kb](/machines/pcx86/compaq/deskpro386/rom/1986-09-04/1986-09-04-LO.json) as a DeskPro 386 ROM generated a
"ROM Error", no doubt due to a checksum mismatch.  However, the [second 32Kb](/machines/pcx86/compaq/deskpro386/rom/1986-09-04/1986-09-04-HI.json) appeared
to work fine.  I can't guarantee that its contents are identical to the original `Rev F` ROM, because the ROM may
have been self-modifying, but it works, and it's all we've got.  All our EGA-based COMPAQ machine configurations
(eg, [COMPAQ DeskPro 386 (2Mb) with IBM EGA](/devices/pcx86/machine/compaq/deskpro386/ega/2048kb/)) have been
updated to use that ROM.

My collection of COMPAQ DeskPro 386 ROMs still has several holes, but I'm very happy to have finally found one of the
earliest (if not *the* earliest) ROMs commercially available for the DeskPro 386 series of COMPAQ computers.

### Old Windows on New Windows

One of the problems with running old versions of Microsoft Windows, like [Windows 1.01](/software/pcx86/sys/windows/1.01/) or
[Windows 95](/software/pcx86/sys/windows/win95/4.00.950/), inside a web browser on top of a modern version of Windows are
**key conflicts**.  For example:

- Alt-F (to access the browser's File menu)
- Ctrl-P (to access the browser's Print command)
- Alt-Tab (to switch to a different window)

The PCjs machine *inside* the web browser will see only part of those key combinations, usually just the Ctrl or
Alt key.  Worse, it will probably only see the Alt key go *down*, not *up*, with no idea whether the user is still
pressing the key.

For my sanity's sake, I've not attempted to resolve all these potential conflicts.  However, the latest version of
PCx86 (1.50.3) does at least try to minimize the likelihood of the Alt key getting *stuck* inside a machine.  So, any
Alt-key combination that your browser or operating system consumes should be ignored by the machine, and conversely,
any combination that the browser or operating system ignores should still be passed through to the machine.

At the same time, I made some changes to the PCjs [Keyboard](/modules/pcx86/lib/keyboard.js) and [Chipset](/modules/pcx86/lib/chipset.js)
components to fix some long-standing problems with dropped keys and keyboard lock-ups when running [Windows 95](/software/pcx86/sys/windows/win95/4.00.950/).

As of this writing, Windows 95 seems to run pretty well.  However, the machine used to run Windows 95, a
[COMPAQ DeskPro 386](/devices/pcx86/machine/compaq/deskpro386/), does still have a few issues.  For example, if you
reboot the machine, it's likely that the COMPAQ ROM will be corrupt.  I'm guessing this is a side-effect of how COMPAQ
copies its ROM to write-protected RAM, but I've not looked into the problem yet.

And finally, although I think I mentioned this before in some old [Release Notes](https://github.com/jeffpar/pcjs/releases),
in any machine that "captures" your mouse, including any machine that supports "Full Screen" mode, PCjs will temporarily
remap the `tilde` key to the `esc`  key.  This is because most (all?) web browsers intercept `esc` as a way of returning
control of your mouse and/or screen.  So if you're running software *inside* a PCjs machine that uses the `esc` key,
press the `tilde` key instead.
