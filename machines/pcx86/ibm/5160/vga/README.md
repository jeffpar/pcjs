---
layout: page
title: IBM PC XT (Model 5160) with IBM VGA
permalink: /machines/pcx86/ibm/5160/vga/
machines:
  - id: ibm5160-vga
    type: pcx86
    config: /machines/pcx86/ibm/5160/vga/640kb/machine.xml
    debugger: available
    autoType: $date\r$time\r
---

NOTE: Unlike most IBM PC machines on PCjs, the DIP switches on this machine have been set to indicate *four* floppy disk drives (`0xxxxx00`) instead of the usual two drives (`0xxxxx01`).  This can result in some confusion, depending on which version of DOS you're using and what your expectations are.

For example, PC DOS 3.20 will assign drive letters A-D to the floppy drives and drive letter E to the hard drive, whereas MS-DOS 5.00 always starts with drive letter C for any hard drives, regardless of the number of floppy drives; since this machine has only one hard drive, MS-DOS 5.00 will assign drive letters D and E to the 3rd and 4th floppy drives.

PCjs does not interrogate the operating system's drive letter assignments, so the removable drive letters displayed in the PCjs UI will always be A-D.  The UI *could* display drive numbers instead of letters (eg, 1-4), but that would be more confusing for the average user *and* the typical machine, so I've decided to leave things as they are.

{% include machine.html id="ibm5160-vga" %}

{% include gallery/documents.html width="200" height="280" %}
