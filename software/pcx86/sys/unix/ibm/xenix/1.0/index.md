---
layout: page
title: IBM PC XENIX 1.0
permalink: /software/pcx86/sys/unix/ibm/xenix/1.0/
redirect_from: /disks/pcx86/unix/ibm/xenix/1.0/
machines:
  - id: ibm5170
    type: pcx86
    debugger: true
    config: /machines/pcx86/ibm/5170/cga/640kb/rev3/debugger/machine.xml
    autoMount:
      A:
        name: IBM XENIX 1.0 (BOOT)
      B:
        name: None
    autoStart: true
---

IBM PC XENIX was the first protected-mode operating system available for the IBM PC AT, and one of the first 286
operating systems.  It was a multi-tasking, multi-user operating system which, unlike PC/IX on the IBM PC XT,
could replace a modest UNIX workstation.

Some "[Quick Start](#notes-from-the-os2-museum)" notes that XENIX newbies (myself included) will probably find useful
are provided below.

{% include machine.html id="ibm5170" %}

### Notes from The OS/2 Museum

> First, you're supposed to run `fd /etc/badtrack` directly from the boot loader prompt on the installation diskette.
To boot the kernel from floppy, run `fd /xenix.fd` (not just `fd /xenix`) from the boot loader prompt. If you manage
to boot to the maintenance shell, the next step is `hdinit` which should set up the hard disk and take it from there.
The system should be shut down with `haltsys`.  Once `hdinit` is done, the system should be able to boot from the hard
drive. The last step should be `install base` once booted from hard disk.

Related [OS/2 Museum](http://www.os2museum.com/) posts include:

- [IBM PC XENIX (October 26, 2012)](http://www.os2museum.com/wp/ibm-pc-xenix/)
- [Forward Compatibility, Landmines (September 20, 2014)](http://www.os2museum.com/wp/forward-compatibility-landmines/)
- [IBM XENIX: One Step Forward, One Step Back (March 29, 2015)](http://www.os2museum.com/wp/ibm-xenix-one-step-forward-one-step-back/)
- [IBM XENIX 1.0 Incompatibility Details (February 7, 2017)](http://www.os2museum.com/wp/ibm-xenix-1-0-incompatibility-details/)
- [IBM XENIX: Two Steps Forward (March 16, 2017)](http://www.os2museum.com/wp/ibm-xenix-two-steps-forward/)

Here's an excerpt from ["IBM PC XENIX" (October 26, 2012)](http://www.os2museum.com/wp/ibm-pc-xenix/):

> The IBM PC XENIX was based on AT&amp;T’s UNIX System III (rather than the newer System V) with a number of BSD
enhancements. The latter included vi, C shell, and termcap/curses. Microsoft also implemented several enhancements,
such as the ability to read and write DOS file systems.

> Much like other Xenix variants before and after, IBM PC XENIX was optionally shipped with Text Formatting System
(TFS) and Software Development System (SDS) packages. The TFS was based on the classic nroff/troff formatters and
associated utilities. The SDS included a compiler, assembler, debugger, and assorted development tools like SCCS and
make.

> One of the Microsoft-specific enhancements was the ability to cross-compile to DOS using the SDS. The XENIX to DOS
cross-development capability was likely frequently used internally at Microsoft in the mid-1980s.

> The IBM PC XENIX came with rudimentary networking capabilities, namely uucp and micnet, though little is known about
their specifications.

![IBM PC XENIX 1.0 Extensions Disk 1]({{ site.software.diskettes.server }}/pcx86/sys/unix/ibm/xenix/1.0/IBM-XENIX-100-EXT1.jpg)

![IBM PC XENIX 1.0 Extensions Disk 2]({{ site.software.diskettes.server }}/pcx86/sys/unix/ibm/xenix/1.0/IBM-XENIX-100-EXT2.jpg)
