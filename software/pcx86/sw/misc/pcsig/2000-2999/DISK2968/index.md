---
layout: page
title: "PC-SIG Diskette Library (Disk #2968)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2968/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2968"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FILE2968.TXT

{% raw %}
```
Disk No: 2968
Disk Title: Fonts Galore #8
PC-SIG Version: S1.0

Program Title: Fonts Galore #8
Special Requirements: Windows 3.0 and Adobe Type Manger.

A collection of ten diskettes full of fonts to be used with Windows and
Adobe-type Manager installed. They can be used by Postcript and LaserJet
printers. Fonts included with this disk are: RSSansSerif, RSSharkTooth,
RSScarface, RSStFrancis, RSStymie, RSTempus, RSUpperEastSide,
RSUpperWestSide.


PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1992 PC-SIG, Inc.
```
{% endraw %}

## RSSTFRA_.DOC

{% raw %}
```
Dear PC font user:

We at Altsys are proud to announce the availability of Fontographer 3.2,
the first Macintosh PostScript font program that can produce fonts for the
ATM (Adobe Type Manager) Windows environment on MS-DOS computers.

Accompanying this README.TXT file is the SaintFrancis font. Here is what
Hank Gillette (the font's developer) says about SaintFrancis:

Saint Francis

Copyright 1990, by Hank Gillette

Saint Francis is a Postscript version of Apple Computer's venerable San
Francisco font. It has the full character set that San Francisco has, plus
some alternate characters and some visual puns that I included for my own
amusement. It should print out on any genuine PostScript printer or on a
non-PostScript printer under Adobe's ATM. If you use it with a Postscript
clone of any sort and it works, I'd appreciate you letting me know about
it.

Saint Francis is free for non-commercial applications. If you feel
compelled to send money you can, but you are under no obligation to do so.
I am more interested in comments about this font. You may contact me at my
Compuserve address of 73627,3612 or at my mail address:

Hank Gillette
432 Tyrella Ave.
Mountain View, CA 94043

You may freely give away this font to your friends or upload it to your
favorite bulletin board. I encourage you to do this. Please keep this Read
Me file with it if you do distribute it. If you are a commercial enterprise
selling disks of shareware and freeware, you may not distribute this font
without my permission. If you sell it, you should send the money to me.

Saint Francis was generated with Fontographer(TM) 3.2. and is offered as
is. I will not accept responsibility if it doesn't work for you or if you
use it in an important report and your boss hates it and fires you.

SaintFrancis is fully compatible with ATM for Windows, allowing it to be
seen on screen at any size, and print to any printer that has a Windows
driver.

INSTALLING THE SAINTFRANCIS FONT:

1. Copy the SAINTFRA.PFB file to your \PSFONTS directory.

2. Copy the SAINTFRA.PFM file to your \PSFONTS\PFM directory. (You can ignore
the .AFM file since it is not useful with Windows. It may be useful to people
running GEM applications, however.)

3. Open the ATM Control Panel and "Add..." SaintFrancis to your list of ATM
fonts. You will have to open the \PSFONTS\PFM directory to allow ATM to see
your SaintFrancis font.

4. If you have a PostScript printer, the following will be necessary. If your
printer does not have PostScript, ignore this step. Open your WIN.INI file
with the Windows Notepad program. (Do you have a backup of it? If not, make
one now.) At the end of the "softfonts" list, you will see something like:

softfonts5=c:\psfonts\pfm\SAINTFRA.PFM

You'll need to change this to:

softfonts5=c:\psfonts\pfm\SAINTFRA.PFM,c:\psfonts\SAINTFRA.PFB

Doing this allows the Windows PostScript driver to find your .PFB file and
download it to your PostScript printer. DO NOT use a semicolon between the two
entries or you will cause some rather unpleasant problems.

You should now exit Windows and restart. SaintFrancis will now show up in
your Windows programs' font menus and you'll be able to choose it and use it
like any other font. ATM will allow you to see the font in all sizes and print
it smoothly at all sizes.

INFORMATION ABOUT FONTOGRAPHER 3.2:

Fontographer 3.2 runs only on Macintosh computers. It runs on the $999.00
Macintosh Classic which has a 1.44Mb FDHD Superdrive capable of formatting and
writing a PC 3-1/2" diskette. Fontographer 3.2 retails for $495.00 and is
available from all reputable dealers of Macintosh software. To make fonts for
Windows with ATM from Fontographer 3.2 you can do the following:

1. Draw the font or autotrace it from scanned images pasted into Fontographer
3.2's Edit window. If you have already made Fontographer fonts, you can use
the "Open font..." dialog from the File menu to open the font and allow its
conversion to PC format. If you have PC PostScript fonts you wish to modify,
you can download them to any Adobe PostScript printer that can simultaneously
communicate with both Macintoshes and PC's, then use Altsys' Metamorphosis
(retail $149.00) to convert the fonts to Fontographer format on the Macintosh.

2. Select all the characters in the font and use the Path menu's "Correct path
direction" item to make sure that the path directions in the font are correct.

3. While all the characters are still selected, use the Edit menu's "Char
info..." item to make sure that all the characters in the font are filled with
"Normal" fill and a "Tint" of 100% (DO NOT check the "Stroke" checkbox, since
Adobe rules do not allow stroked characters in Type 1 fonts).

4. Use the Edit menu's "Font attributes..." dialog to turn on the "Automatic
PostScript and bitmap hints," "Generate Type 1 fonts," and "Adobe standard
character encoding" checkboxes. Do not turn on the "Use Flex feature if
possible" checkbox unless you are absolutely certain that your font can
benefit from Flex.

5. Use the File menu's "Generate fonts..." dialog and choose the
"PostScript-PC" item from the "Outline format:" popup menu. To save time, you
can choose the "None" item from the "Bitmap format:" popup menu, since you
will not need to generate any kind of bitmap file. OK this dialog and the
result will be the .AFM, .PFB, and .PFM files described above. They can be
installed using the above instructions.

For further information about Fontographer 3.2, call or write:

Altsys Corporation
269 W. Renner Rd.
Richardson, TX 75080
Phone: (214) 680-2060

CompuServe: 76004,2071
FAX: (214) 680-0537
MCI Mail: ALTSYS
AppleLink: D0590
America Online: Altsys

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2968

     Volume in drive A has no label
     Directory of A:\

    RSSANSER DOC      3934   4-06-87   9:54p
    RSSANSER PFB     18073   1-25-91   2:01p
    RSSANSER PFM       682   1-25-91   2:01p
    RSSHARK  DOC      3555   9-15-90   5:00p
    RSSHARK  PFB     11460   1-25-91   2:04p
    RSSHARK  PFM       684   1-25-91   2:04p
    RSSLABFA DOC      1701   6-22-90   8:57a
    RSSLABFA PFB      8556   1-25-91   2:10p
    RSSLABFA PFM       680   1-25-91   2:10p
    RSSTFRA_ DOC      5808  11-30-90   4:38p
    RSSTFRA_ PFB     15645   1-25-91   2:13p
    RSSTFRA_ PFM       682   1-25-91   2:13p
    RSSTYMIE DOC      1710   5-11-89   2:56p
    RSSTYMIE PFB     20169   1-25-91   2:22p
    RSSTYMIE PFM       676   1-25-91   2:22p
    RSTEMPUS PFB     29912   1-25-91   2:24p
    RSTEMPUS PFM       676   1-25-91   2:24p
    RSULTLIN PFB     14001   1-25-91   3:22p
    RSULTLIN PFM       682   1-25-91   3:22p
    RSUPPEAS DOC      2022  10-24-90   7:19p
    RSUPPEAS PFB     22432   1-25-91   3:27p
    RSUPPEAS PFM       690   1-25-91   3:27p
    RSUPPWES PFB     66062   1-25-91   3:26p
    RSUPPWES PFM       690   1-25-91   3:26p
    GO       BAT        38   1-01-80   1:37a
    FILE2968 TXT       569   3-30-92   1:31p
    GO       TXT      1617   4-08-92   3:23p
           27 file(s)     233406 bytes
                           77824 bytes free
