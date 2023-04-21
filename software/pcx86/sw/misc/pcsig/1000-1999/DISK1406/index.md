---
layout: page
title: "PC-SIG Diskette Library (Disk #1406)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1406/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1406"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SUP"

    Another little victory in the battle against copy protection. SUP
    removes copy protection from most Sierra On-Line games, such as the
    popular KING'S QUEST and SPACE QUEST. Now, you can have a backup or
    install the program on your hard disk. It works only with games called
    up from DOS and does not handle self-booting disks.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1406.TXT

{% raw %}
```
Disk No: 1406
Program Title:  SUP version 2.00
PC-SIG version: 1

Another little victory in the battle against copy protection.  SUP
removes copy protection from most Sierra On-Line games such as the
popular King's Quest and Space Quest.  You can have a backup or install
the program on your hard disk.  It works only with games called up from
DOS and does not handle self booting disks.  All of your copies will be
unprotected.

Synopsis:  Removes the copy protection from most Sierra On-line games
such as King's Quest, allowing you to create a backup or install on your
hard disk.

Usage:  Disk Unprotect.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00

File Descriptions:

SUP      EXE  Main program.
SUP      DOC  User guide.
README        Describes files.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## SUP.DOC

{% raw %}
```
THE "SUP" UNPROTECTION PROGRAM, VERSION 2.00. COPYRIGHT ANDERS M OLSSON, 1988.
==============================================================================

"SIERRA" is a registered trademark of Sierra On-Line, Inc.

This software is provided for lawful purposes only. By using this product, you
agree to be bound by applicable laws, license agreements and copyright notices.
You are NOT allowed to give away or sell unprotected copies of Sierra games
produced with the aid of this program.

However, the program (SUP.EXE) along with this documentation file is
distributed on a "shareware" basis. You are encouraged to give away, but not
sell, unaltered copies of the unprotection program. Any copy must be
accompanied by this documentation file SUP.DOC. No guarantee is given, and
no responsibility will be accepted for any damage caused by using this
product.



INSTRUCTION MANUAL FOR THE "SUP" UNPROTECTION PROGRAM
=====================================================

Introduction
============
The program SUP.EXE will remove copy-protection from most Sierra On-Line games.
It can only handle DOS-versions of the programs, not self-booting ones. You
must also own a genuine Sierra original diskette. This software may not work
with copies made by some copy programs. I do not support software pirates,
only legal users who want to enjoy the benefits of running without the key
diskette.

Note:
=====
Never try to unprotect your original game disk. Sierra games on 5 1/4"
diskettes are normally write protected, but 3 1/2 inch diskettes may
not be. Make sure that the original is write protected before proceeding.
While running this unprotection program, you will be asked to insert your
original game disk. This is only required for reading the copy protected track.
Nothing will be written to the original diskette, provided you follow
the instructions below. When games use more than one diskette, only the first
one is copy protected. The other(s) can be copied by DOS, whithout any
processing.

Version 2.00 of this software has been enhanced to be even simpler than
before. An "express" unprotect option has been added, enabling you to
unprotect all Sierra software installed on your hard disk in a matter of
seconds. Normally, everything is menu-controlled, but a more flexible
command-line option for DOS-experts is also provided.


PREPARATIONS:
=============
For hard disk users:
====================
Use the INSTALLH program on your game diskette to do a hard disk installation.
Detailed instructions are provided on the reference card in your game package.

Caution: If you are a "DOS expert" you may have copied (or moved) the game
files to subdirectories of your own choice, instead of using the Sierra
installation "as is". When your games are located in other subdirectories
than the Sierra defaults, the "SUP" Unprotection Program will be unable to
automatically find and unprotect them. Use the "DOS-expert" command line
option, described at the end of this document, to manually unprotect your
games.


For floppy disk users:
======================
Make copies of all diskettes in your game package: Take out a new diskette,
and format it:

FORMAT B:

Then copy all files from your ORIGINAL game diskette number one:

COPY A:*.* B:

Use this syntax even if your machine only has one floppy drive. With a
single drive, some disk swapping will be required. Any subsequent diskette(s)
in your game package can be copied in the same way or, alternatively
by typing:

DISKCOPY A: B:

Caution: Do NOT use DISKCOPY for the FIRST diskette, since DISKCOPY
will "stumble" upon the copy protection track.

The copies are referred to as "PLAY"-disks, and the "PLAY"-disk number 1
(copy of ORIGINAL disk 1) will be the target for unprotection. This
diskette must, of course, not be write protected.



AUTOMATIC UNPROTECTION
======================
Start the unprotection program by typing

SUP

at the DOS-prompt.

After reading through the opening screen, press <ENTER>.
A menu will be displayed.

Select diskette or hard disk from the menu. Move the bar using the keypad
<UP-ARROW> or <DOWN-ARROW> keys, or type one of the numbers 1 or 2 to
indicate your choice.

You may want to change the target drive for unprotection. Use the
<LEFT-ARROW> or <RIGHT-ARROW> keys on the keypad, or simply type the
drive letter. Valid floppy drives are A: - D:, valid hard disks
are C: - Z:.

When you are satisfied with your choice, hit the <ENTER>-key.
You will be prompted to insert your ORIGINAL game diskette 1 into drive
A:, and hit <ENTER>. Drive A: will always be used for the original disk,
this cannot be changed. When you are doing a hard disk unprotect, insert
the original diskette 1 from any one of your Sierra games. This is
sufficient to unprotect ALL games in one go.

If the unprotect target is a diskette, you will now be prompted to
insert it into the selected drive. After that, the unprotection will take
place.

Note: Re-running SUP will not hurt anything. After installing a new Sierra
game on you hard disk, you can once again run the automatic unprotection.
Only games not previously unprotected will be affected.

Note: Even if you have a hard disk, you may wish to use the diskette
unprotect procedure for greater flexibility. You can then run the game
directly from the diskette copy, or install the unprotected game to
your hard disk at a later time.



COMMAND LINE OPTION FOR "DOS-EXPERTS"
=====================================
If you have a non-standard hard disk installation you cannot use the
automatic unprotect procedure. You can, however, at the DOS command line,
enter the full path and file name of the Sierra loader you wish to unprotect.

For example:

SUP C:\GAMES\SIERRA\KQ3\KQ3.COM

or

SUP B:\SIERRA.COM

This, of course, assumes that you have manually found the loader program
to be unprotected. The Sierra loader is a short .COM program, 2 - 3
kilobytes in size, used for starting up the game. Its name is either
"SIERRA.COM" or matches the name of the game, for example "HELI.COM",
"KQ2.COM", or "LL.COM".

Both hard disks and floppies can be unprotected in this way, but in
contrast to the automatic hard disk method, only one game at a time
can be unprotected. No menu will be displayed, and no prompting for
a possible target diskette will take place.



ERROR MESSAGES
==============
Most error messages are self-explanatory. There is, however, one message I
would like to expand on:

This loader is of a version I cannot handle.

This usually indicates a Sierra program that does not need to be unprotected.
Some recent games are sold without copy protection. There are, however, many
versions of the Sierra loader. The unprotection program must know where to
insert patches into each and every one of them. The possibility exists that
there are some versions I have not yet come across. Or Sierra may release
updated loaders further on. Should this happen, write me a letter at the
address below, and I will see what I can do. Please include information of
the game title and version. (Often the game version will be displayed by
pressing Alt-D while running the game).

Remember:

- Only DOS-versions of Sierra games can be unprotected by this program.

- A genuine Sierra ORIGINAL diskette is REQUIRED. Using a pirate copy
  instead of the original may prevent the unprotection program from working.

==========================================================================

If you found this program useful, your contribution of U.S. $ 10:- or
Swedish Kronor 50:- would be appreciated. Assist me in my struggle
against copy protection!

                                   Anders M Olsson
                                   Jaktstigen 37
                                   S-222 52 Lund
                                   SWEDEN

When sending money from outside of Sweden, please send cashiers checks,
NOT personal checks. Thankyou for using the "SUP" Unprotection Program.

==========================================================================

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1406

     Volume in drive A has no label
     Directory of A:\

    SUP      EXE     13920   9-17-88   2:00a
    SUP      DOC      8212   9-17-88   2:00a
    README             484   9-18-88   2:00a
    FILE1406 TXT       950   5-31-89  11:04a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   5-31-89  11:05a
    VIEW     BAT        39   5-31-89  11:06a
    PAGE     COM       325   1-06-87   4:21p
    MANUAL   BAT       149   5-31-89  11:06a
            9 file(s)      24811 bytes
                          132608 bytes free
