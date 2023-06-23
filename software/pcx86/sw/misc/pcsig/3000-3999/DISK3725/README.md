---
layout: page
title: "PC-SIG Diskette Library (Disk #3725)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3725/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3725"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```
Graphmatica for Windows, version 1.10
=====================================

by Keith Hertzer - Copyright (c) 1992 kSoft, Inc.
Sunday 21 June 1992

Files in this archive:
----------------------

README.TXT      6,841  6/21/92  3:11p  -- this file
REGISTER.TXT    2,313  6/14/92  1:48p  -- mail-in registration form
GRAPHMAT.EXE  119,376  6/21/92 12:31p  -- progam file
GRAPHMAT.HLP   69,971  6/21/92  3:11p  -- help file-complete documentation
GRAPHMAT.GR       983  5/09/92  1:39p  \
POLAR.GR          312  5/24/92  1:48p   |
XYDEMO.GR         354  5/09/92  2:00p   } -- demonstration equation lists
TRIG.GR           421  5/24/92  1:47p   |
DIFEQ.GR          535  5/09/92  1:40p  /

Graphmatica can also make use of the file GRAPHMAT.INI to store setup
information, but I have not included one since if it is not found
Graphmatica simply uses its own default settings. See the help file for
information on the setup file.

System Requirements:
--------------------
IBM AT, PS/2, or compatible equipped with 286 or higher processor, EGA
or better graphics, and a diskette drive or hard disk, running
Microsoft Windows 3.0 or higher. (Windows 3.1 is fully supported; in
fact you must have it to use the Help Search menu item, but other than
that it doesn't matter whether you're running 3.0 or 3.1.) Graphmatica
requires very little memory; it poses no problem to a computer capable
of running Windows. Graphmatica for Windows runs in protected mode
only; it will not run in Windows 3.0 Real mode. Graphmatica now
supports high-resolution (e.g. 1024x768) video modes, but at this time
it uses at most 16 colors; it does not take advantage of 256-color
video modes.  A few features require a mouse or other pointing-device;
most things work just as well without.

If you can't run Windows, try Graphmatica for DOS, the venerable
forerunner of Graphmatica for Windows. Contact me for more information.

What's new in version 1.10:
---------------------------
The following bugs in version 1.00 were fixed:
 1. The buttons and other text controls now automatically adapt to
    whatever size of font they are assigned by Windows. This should resolve
    any problems with high-resolution video adapters. I have tested it at
    1024x768 pixels and everything works fine.
 2. A minor parser error that caused negative numbers with spaces in
    between the minus sign and first digit to be read improperly has
    been corrected.

The following features were enhanced:
 1. The Range button mouse-selection routine now shows the actual range
    that will be selected when AutoSquare is on before you click the
    button to redraw the screen, instead of allowing you to draw any
    shape and then clipping it to be valid. This way, what you see is
    really what you get.
 2. I tried to add full color palette support, but Windows apparently
    doesn't allow custom palettes in 16-color modes. Since I can't
    custom-mix colors, I've tried to optimize use of the ones I have:
    all of the colors used by Graphmatica now are actually in Windows'
    static system palette. This way, the colors show on your screen
    should always be the same as what I see on mine, and just as
    visible. Also, for those of you who didn't like my designer gray
    background, a white one is now available. This may allow better
    contrast in some cases.

The following new features were added:
 1. New background graph paper: polar-coordinate and special "trig" paper
    marked in multiples of pi are now available. The new Graph Paper option
    in the View menu allows you to select which type of background to use.
 2. The routine which draws axis legends now supports decimals to make it
    easier to use close-up ranges.
 3. A Coordinate Cursor, which lets you putt around the screen using
    crosshairs to inspect the exact coordinates of points, which are
    printed out in the status bar. I'm told by users that suggested
    it that this should be helpful in finding the zeros of a function.
 4. The Point Evaluate command now lets you find the exact value of a
    function at a point numerically.

Installing Graphmatica for Windows:
-----------------------------------
 1. Create a directory on your hard drive -- e.g. C:\GRAPHMAT
    [you can use a different directory or share an existing one if you want]
 2. Copy all of the files in this archive file into that directory (see
    above for a complete list).
 3. Start up Windows if you weren't already using File Manager to perform
    the steps above.
 4. Open the group in Program Manager you want to put Graphmatica in.
    Select "New..." from the "File" menu in Program Manager.
 5. Select "Program Item" in the dialog box.
 6. In the Description box, type "Graphmatica".
 7. Click the Browse... button and use the dialog box to navigate to
    the directory Graphmatica's files are in and select GRAPHMAT.EXE.
 8. Select "OK". Graphmatica for Windows should now be installed. Double-
    click on its icon to run it.

Documentation:
--------------
Currently, I have not formatted the documentation in a printable form.
If there is sufficient demand, I will offer it later either as a plain
text file or a formatted .WRI file for Windows Write. Don't be fooled
by the small size of the help file--it's compressed and actually
contains the full documentation (complete with many hyper-text links,
which I think makes it much more usable than printed documentation
anyway).

Please take the time to browse through the help file before you start using
Graphmatica, or you may never notice some of its more subtle advanced
features. Be sure to read the first three sections, which give a
general introduction, a map of the display, and basic instructions on
how to enter equations to graph.

Registering:
------------
You don't really have to, but please understand that I'm not doing this
as a community service. Feel free to make copies for your friends or
upload Graphmatica to your local BBS so others can use it, but you must
distribute it unchanged and intact. [Shareware vendors may distribute
the program freely provided they contact me first and only charge for
disks/shipping/etc. and not for the program itself.] All the features
in this program are fully enabled, and it contains no nag screens or
other impediments to make you feel guilty about using it. However, if
you use it regularly and can afford to support it, please make a
contribution. Even if you can't send money, please take the time to
print and fill out the file REGISTER.TXT and send it to me at the
address below. Or e-mail me on CompuServe [70711,2071].

kSoft, Inc.
345 Montecillo Dr.
Walnut Creek, CA 94595-2613

[Please make checks payable to Keith Hertzer.]
```
{% endraw %}

## REGISTER.TXT

{% raw %}
```

--G1.1W--------------------kSoft REGISTRATION FORM---------------------6/92--

Name /
Company ____________________________________    Phone _______________________


Address _____________________________________________________________________


City ________________________________    State _______    ZIP _______________

  _
 |_|  Enclosed is my $20 or more contribution. Please register me to
      receive the next upgrade to Graphmatica for Windows.
  _
 |_|  Please send me the source code [QC/Win 1.0] to Graphmatica for Windows
      1.10. I have enclosed a note on why I'd like it and a check for $20.

------------------(make checks payable to KEITH HERTZER)---------------------

What size diskettes do you use?        5 1/4"           3 1/2"

Where did you get Graphmatica?  (name of BBS or catalog: ________________)

From a friend      Local BBS       CompuServe      Shareware Catalog

What processor are you using to run Graphmatica for Windows?  (circle one)

     286        386sx       386         486       Other (___________)


If you use a printer with Graphmatica, what type is it?

     dot-matrix        ink jet        laser       Other (___________)


Which version of DOS do you use? (____ . ____)  Windows? (____ . ____)

Which video mode do you use in Windows?         EGA             VGA

  SVGA: (resolution?  ________ x _________    # of colors? ________ )

What features do you like best about Graphmatica?

_____________________________________________________________________________

_____________________________________________________________________________

What problems have you experienced with Graphmatica?

_____________________________________________________________________________

_____________________________________________________________________________

Any other comments or suggestions for improvement in the next upgrade?
(Your comments are vital so I will know what to change or add. Please
feel free to use the back or another sheet of paper.)

_____________________________________________________________________________

_____________________________________________________________________________

Please send to: kSoft, Inc., 345 Montecillo Dr., Walnut Creek, CA 94595-2613.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3725

     Volume in drive A has no label
     Directory of A:\

    REGISTER TXT      2313   6-14-92   1:48p
    README   TXT      6841   6-21-92   3:11p
    GRAPHMAT HLP     69971   6-21-92   3:11p
    XYDEMO   GR        354   5-09-92   2:00p
    TRIG     GR        421   5-24-92   1:47p
    POLAR    GR        312   5-24-92   1:48p
    GRAPHMAT GR        981   6-13-92   9:47p
    DIFEQ    GR        535   5-09-92   1:40p
    GRAPHMAT EXE    119376   6-21-92  12:31p
    GO       BAT        32   6-03-93  10:52a
    SHOW     EXE      2040   9-12-88  10:48a
           11 file(s)     203176 bytes
                          113664 bytes free
