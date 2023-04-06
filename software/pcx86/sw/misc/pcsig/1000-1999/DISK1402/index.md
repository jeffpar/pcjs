---
layout: page
title: "PC-SIG Diskette Library (Disk #1402)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1402/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1402"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SECURITY ERASE"

    SECURITY ERASE is a file-erasing program that lets you remove a disk
    file completely.  The file is overwritten and cannot be recovered even
    using an ``unerase'' utility, such as Norton Utilities or Professional
    Master Key (PC-SIG disk #598) which can fix normal accidental deletes.
    
    Unlike the DOS erase command, this program does not accept wild cards.
    This eliminates the possibility of accidentally deleting files with
    similar names or extensions.  The program also lets you rethink your
    decision about removing a file before actually proceeding to erase it,
    because once it's gone...it's permanent!
    
    You might like to use SECURITY ERASE if you are working with important
    files and need added security when you erase to ensure that confidential
    information stays that way!
    File Descriptions:
    
    SECURE   EXE  Main program.
    SECURE   DOC  Introduction to the program.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1402

     Volume in drive A has no label
     Directory of A:\

    FILE1402 TXT      1368   5-31-89   8:39a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   5-31-89   8:43a
    MANUAL   BAT       152   5-31-89   8:44a
    PAGE     COM       325   1-06-87   4:21p
    SECURE   DOC      1180  10-01-88   9:00a
    SECURE   EXE     38409  10-01-88   9:00a
    VIEW     BAT        42   5-31-89   8:43a
            8 file(s)      42208 bytes
                          115200 bytes free
