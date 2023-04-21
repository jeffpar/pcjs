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

{% comment %}samples_begin{% endcomment %}

## FILE1402.TXT

{% raw %}
```
Disk No: 1402
Program Title:  SECURITY ERASE version 1.0
PC-SIG version: 1

SECURITY ERASE is a file-erasing program that lets you remove a disk
file completely.  The file is overwritten and cannot be recovered even
using an "unerase" utility, such as NORTON UTILITIES (TM) or BAKER'S
DOZEN (PC SIG disk #800) which can fix normal accidental deletes.

Unlike the DOS erase command, this program does not accept wild cards.
This eliminates the possibility of accidentally deleting files with
similar names or extensions.  The program also lets you rethink your
decision about removing a file before actually proceeding to erase it,
because once it's gone...it's permanent!

You might like to use SECURITY ERASE if you are working with important
files and need added security when you erase to assure that confidential
information stays that way!

Synopsis: An erasing program that removes a disk file so thoroughly that
it is completely unrecoverable.  Very useful for keeping information
private.

Usage:  DOS Utility/Data Security.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $12.00.

File Descriptions:

SECURE   EXE  Main program.
SECURE   DOC  Introduction to the program.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## SECURE.DOC

{% raw %}
```
                               SECURITY ERASE
                               COPYRIGHT 1988
                             CALEDONIA SOFTWARE

  This program will permanently remove a file from a disk or diskette.  It will
first overwrite all data areas of the file, and then will change the name to a
series of special characters and delete it.  After this process, the file
cannot be recovered by any means.

  You will be prompted by the program for all information required to remove
the file, and may exit at any time.  After the file has been found, you must
enter the word PROCEED to actually delete the file ( anything else will exit
without deleting ).

  You must specify the full filename and extension of the file to be removed.
To prevent accidents, no wildcards are allowed.  Please make sure that you
really want to delete a file before entering PROCEED.  Remember that after this
is done there is no recovery.

  This is a shareware program. You may share copies with others ( please copy
this file also ).  If you continue to use it, please send $12 to Caledonia
Software at the address on the LOGO screen.  Thank-you for trying our program.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

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
