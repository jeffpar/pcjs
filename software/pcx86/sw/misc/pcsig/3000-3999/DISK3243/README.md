---
layout: page
title: "PC-SIG Diskette Library (Disk #3243)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3243/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3243"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## VENDOR.DOC

{% raw %}
```
TOP version 1.10
----------------
TOP is not just another DOS shell! TOP combines many popular DOS utility
functions into one fast, small package, but adds several unique and
productive new functions to enhance anyone's PC usage. Featuring movable,
sizable pop-up windows for most of its commands, TOP allows aliasing,
command line history and enhanced editing, file viewing (both ascii and
hex), screen color and mode control, and enhanced functionality for many
DOS commands. Any or all TOP windows can be constantly displayed concur-
rently with typing at the command line, including the 4000+ line context
sensitive hypertext HELP tool.

One unique feature is the CRON program scheduler. Any number of programs
can be scheduled to run at any minute, hour, day, or month. If your
machine is busy running an application, or even off when a CRON event is
scheduled to run, it runs immediately after.

Extensive mouse support! Drag and drop text from anywhere on the screen to
the command line or other TOP windows. Double-click on any text to
immediately execute it, and more.

Requires a hard drive, DOS version 3.0+, mouse recommended. Can use EMS,
XMS, RAM disk, or hard disk for swapping.

New for version 1.10
--------------------
A complete on-line setup utility, called TOPSET. Used to edit/maintain
TOP's extensive configuration capabilities. Complete on-line help.

Extended screen mode support for Super VGA text modes! Supports Ahead,
Everex, Headland, ATI, Cirrus, Chips & Technologies, Genoa, Tseng,
Paradise, Zymos, Trident, VESA and others. See the file 'README.VGA' for
more details.

Many TOP functions now accept multiple parameters and "enhanced" wild
cards. For example, ' DIR *r*.p* *.txt' will list all files containing
an 'r' in the name and starting with 'p' in the extension, and all files
matching *.txt.

DIR has been greatly enhanced! User-defined color-coded extensions, sort
by name, size, date, multiple column formats, and preset DIR preferences
using an environment variable to name just a few of the features.

Added Executable Wildcards. Executable Wildcards are user-defined command
sequences which can be assigned to a wild card file specification. If a
command is typed which matches the wild card specification, the user-
defined command sequence is executed.

Pressing the <TAB> key will cycle through an alphabetical list of files
in the current directory at the cursor position in the command line (or
cycle through a list of matches if the filename is partly typed or typed
with a wildcards specification). Pressing <Shift-TAB> will reverse cycle.

All TOP DMTs (screen savers) now support 256 color pcx files and super VGA
graphics modes. TOP DMTs also automatically park your disk drive heads.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3243

     Volume in drive A has no label
     Directory of A:\

    INSTALL  BAT      6258   3-08-92   9:06p
    TOP      DAT    326849   7-02-92   1:11a
    READ     ME       3372   5-03-92   5:10p
    VENDOR   DOC      2795   5-07-92  10:52p
    SHOW     EXE      2040   9-12-88  10:48a
    GO       BAT        67  11-13-92   9:20a
            6 file(s)     341381 bytes
                           17408 bytes free
