---
layout: page
title: "PC-SIG Diskette Library (Disk #3662)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3662/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3662"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## VENDOR.DOC

{% raw %}
```
     Conrad Button's Software     13807 S.E. 282 St.     Kent, WA 98042

    August 26, 1993

    To: Shareware Distributors of $DEFENDER for WINDOWS

    I am enclosing the latest update to $DEFENDER for WINDOWS.
    1. The INSTALL program has been revised to make installation of
       $DEFENDER even easier for the user.
    2. Error trapping during installation has been improved.
    3. You, the distributor, can either distribute $DEFENDER on two 360K
       disks OR on a single HD (1.44 or 1.2 MB) disk; the enclosed INSTALL
       program doesn't care. INSTALL is smart enough to prompt the user for
       a second disk when two are supplied; it will skip this prompt if a
       single HD disk has been supplied.

    ALL files (except for VENDOR.DOC) on the enclosed disks MUST be
    included when distributing $DEFENDER. Failure to do so will cause
    INSTALL to ABORT and then instruct the user to CONTACT *** YOU *** for
    the missing file(s)!

    $DEFENDER requires Windows 3.x; a hard disk or high density drive is
    required for installation. $DEFENDER for WINDOWS is (C) Copyright 1993
    by Conrad Button's Software. You have my permission to distribute this
    copy of $DEFENDER for WINDOWS as shareware. The registration fee is
    $20.00 and includes a personalized copy of the registered version.

    Conrad Button

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3662

     Volume in drive A has no label
     Directory of A:\

    VENDOR   DOC      1379   8-25-93   4:21p
    README   BAT      1884   8-24-93   5:24p
    INSTALL  EXE     46566   8-25-93   2:35p
    $INTRO2  COM     20604   8-25-93   2:16p
    GRAPH    VB_     36943  10-21-92
    GSW      EX_    138927  10-21-92
    GSWDLL   DL_     30948  10-21-92
    THREED   VB_     31220  10-21-92   5:39p
    EXPAND   EXE     14001  10-21-92
    GO       BAT         9   9-10-93   1:37p
           10 file(s)     322481 bytes
                           33792 bytes free
