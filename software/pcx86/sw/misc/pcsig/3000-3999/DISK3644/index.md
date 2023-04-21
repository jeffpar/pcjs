---
layout: page
title: "PC-SIG Diskette Library (Disk #3644)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3644/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3644"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## LICENSE.DOC

{% raw %}
```
                        LICENSE AGREEMENT AND DISCLAIMER

THIS SOFTWARE IS BEING PROVIDED SOLELY "AS IS" AND WITHOUT WARRANTY OF ANY KIND
EITHER EXPRESSED OR IMPLIED INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS OF PURPOSE.  The author hereby disclaims any and
all responsibility for any damages resulting from the use or mis-use of this
software.  In any event, the author's liability shall be limited to the
originial software license purchase price.

                               SHAREWARE VERSION

This software is being distributed as "shareware".  You are allowed to use the
software for a trial period of 30 days.  To use this software beyond the trial
period requires the purchase of a license to use the software.  Such license can
only be purchased by sending a check or money order for $25 to:

                                  EFD Systems
                            304 Smokerise Circle SE
                               Marietta, GA 30067                CIS:72627,3026

 You may distribute this software to others for similiar use under these terms:

1) No fee may be charged in connection with distribution other than a nominal $5
   fee to cover the cost of materials and postage.  It must be clearly stated
   that any such fees do not constitute a license fee for use of the software.

2) The software is distributed in it's entirety as originally released including
   this documentation file.

3) The software may not be distributed in connection with or incorporated into
   any other software, product or information being distributed, sold or offered
   for sale.

                               REGISTERED VERSION

Licensed users are allowed to use a single copy of the software on a single
machine.  Copies of the software can be made for backup purposes only.  Any
other use, distribution or reproduction of this software is prohibited.  The
software may not be distributed in connection with or incorporated into any
other software, product or information being distributed, sold or offered for
sale without the expressed written permission of the author.
```
{% endraw %}

## RUN.DOC

{% raw %}
```
                                RUN.DOC

IconDOS is basically a graphical front-end to a batch file, RUN.BAT. The
batch file does all of the real work of actually running a DOS command
set corresponding to the selected icon and returning control back to the
IconDOS menu front-end once it is finished.  RUN.BAT has the following
basic, generic structure:


@echo off      <--- Turns echo off so commands don't display
goto %1        <--- sends control to the label matching the first parameter
                    specified when RUN.BAT was started.
:label1
(DOS commands) <--- User supplied DOS commands corresponding to the
goto done           command string: RUN label1

:label2
(DOS commands) <--- User supplied DOS commands for cmd string: RUN label2
goto done      <--- Simply jumps over the remaining command sets and
   .                goes straight to the cleanup area below
   .
   .           <--- (add more labels/command sets as needed here, one per
   .                 icon)
:labeln
(DOS commands)
goto done

:done          <--- cleanup label
CD\menu        <--- return to IconDOS directory in case it was changed above
ICONDOS mymenu <--- return control back to IconDOS and 'mymenu'


Appropriate command strings must be assigned to the icons in order to
interface with RUN.BAT.  These command strings should be similiar to the
following:


Icon                Generic Icon Command String           Specific Examples
_______________________________________________________________________________

1                         RUN label1                        RUN WP
2                         RUN label2                        RUN 123
3                         RUN label3                        RUN DBASE
.                              .                               .
.                              .                               .
.                              .                               .

RUN.BAT is initially configured to operate as a demo which simply
displays a message identifying the selected icon where (DOS commands)
are shown above.

ALTERNATE SETUP

If you feel that the above is too complex for your taste, there is
nothing to prevent you from setting you a single, individual batch file
for each icon.  The name of the batch file would be entered as the
icon's command string.  The last step in any batch file should be to
return control to IconDOS.

This alternate approach is perfectly valid but it is more wasteful of
disk space due to the way a hard drive works.  Every disk file is stored
as a chain of clusters.  A cluster is simply a fixed minimum unit of
storage set by the hard drive manufacturer.  Clusters are most often 4K
in size; however, 2K clusters are also used.  Partial clusters are NEVER
allocated; therefore, a batch file that is 400 bytes in size requires 1
full cluster for storage which wastes 3696 bytes out of a 4K cluster.
This may not seem like much but it adds up quickly.  Creating a menu
with only ten icons using this approach would waste 36K of disk space.

Using a single batch file containing multiple named command sets, as
described above, is the more efficient, preferred approach.
```
{% endraw %}

## SETUP.DOC

{% raw %}
```
                                SETUP.DOC

IconDOS is graphical icon-based menu system for DOS.  Once configured,
programs can be launched by clicking on an icon.  IconDOS is configured
using DOS batch files.  IconDOS can be thought of as providing a
graphical front end to a batch file.  There are 2 options available for
creating the batch file:

OPTION 1:

Build a batch file for each icon.  The name of the batch file becomes
the command string for the icon.  Use IconEDIT to actually attach the
command string to the icon.

The batch file must return control back to IconDOS after running your
software.  Otherwise, you will be left standing at the DOS prompt.


OPTION 2:

Use a single batch file to run all the software for all the icons in the
menu.  This option is less wasteful of disk space.  The provided example
menu, DEMO.MNU, illustrates this approach.  In the example, RUN.BAT
executes all commands.  Each icon in DEMO.MNU calls RUN.BAT and passes a
parameter.  RUN.BAT uses the parameter to decide which commands need to
be executed.  See DEMO.MNU, RUN.BAT and RUN.DOC for details.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3644

     Volume in drive A has no label
     Directory of A:\

    PAPER    ICN     22755   7-31-93  12:25p
    ICONDOS  EXE     35058   6-22-93   8:21p
    LICENSE  DOC      2164   5-11-93   5:10p
    ICONEDIT EXE     38526   5-23-93  12:59p
    DEMO     MNU      6660   6-06-93  12:25a
    SUBDEMO  MNU      2220   1-12-93   9:57p
    WHATS    NEW      1085   6-30-93   2:58p
    ORDER    FRM       936   6-15-93   1:45a
    BOOK     EXE     15950   1-29-93   3:05a
    ICON     LBR     62160   8-06-93   6:43p
    ICONDOS  DOC     18510   6-21-93  11:23a
    README   1ST      3710   6-06-93   2:30p
    FILE_ID  DIZ       398   6-15-93   1:45a
    GAME     PZL     16512   6-29-93   7:59p
    INSTALL  BAT       355   4-21-93  11:22p
    ICONNUM  EXE      6426   1-20-93   1:21p
    ICONEDIT DOC     14019   6-13-93  11:29a
    RUN      DOC      3230   6-30-93   3:13p
    RUN      BAT      2671   6-21-93  11:20a
    SETUP    DOC      1127   6-30-93   3:09p
    GO       BAT        38   6-21-93   3:07p
    SHOW     EXE      2040   9-12-88  10:48a
           22 file(s)     256550 bytes
                           52224 bytes free
