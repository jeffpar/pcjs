---
layout: page
title: "PC-SIG Diskette Library (Disk #2961)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2961/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2961"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## BLACKCHA.DOC

{% raw %}
```
Dear PC font user:

We at Altsys are proud to announce the availability of Fontographer
3.2, the first Macintosh PostScript font program that can produce
fonts for the ATM (Adobe Type Manager) Windows environment on MS-DOS
computers.

Accompanying this README.TXT file is the BlackChancery font. It is
fully compatible with ATM for Windows, allowing it to be seen on
screen at any size, and print to any printer that has a Windows
driver.

INSTALLING THE BLACKCHANCERY FONT:

1. Copy the BLACKCHA.PFB file to your \PSFONTS directory.

2. Copy the BLACKCHA.PFM file to your \PSFONTS\PFM directory. (You can
ignore the .AFM file since it is not useful with Windows. It may be
useful to people running GEM applications, however.)

3. Open the ATM Control Panel and "Add..." BlackChancery to your list
of ATM fonts. You will have to open the \PSFONTS\PFM directory to
allow ATM to see your BlackChancery font.

4. If you have a PostScript printer, the following will be necessary.
If your printer does not have PostScript, ignore this step. Open your
WIN.INI file with the Windows Notepad program. (Do you have a backup
of it? If not, make one now.) At the end of the "softfonts" list, you
will see something like:

softfonts5=c:\psfonts\pfm\BLACKCHA.PFM

You'll need to change this to:

softfonts5=c:\psfonts\pfm\BLACKCHA.PFM,c:\psfonts\BLACKCHA.PFB

Doing this allows the Windows PostScript driver to find your .PFB file
and download it to your PostScript printer. DO NOT use a semicolon
between the two entries or you will cause some rather unpleasant
problems.

You should now exit Windows and restart. BlackChancery will now show
up in your Windows programs' font menus and you'll be able to choose
it and use it like any other font. ATM will allow you to see the font
in all sizes and print it smoothly at all sizes.


INFORMATION ABOUT FONTOGRAPHER 3.2:

Fontographer 3.2 runs only on Macintosh computers. The basic Macintosh
Classic that retails for $999.00 (street price: c. $850.00) is ALL you
need to make Fontographer 3.2 give you PC fonts for ATM in Windows.
The Classic has a 1.44Mb floppy drive that can accommodate a System,
Fontographer, and a font or two. Apple includes a System program with
the Classic called Apple File Exchange. AFE can format a PC floppy and
allow you to copy files from the Macintosh directly to the PC floppy
[31/2", of course]. Fontographer 3.2 retails for $495.00 and is
available from all reputable dealers of Macintosh software.

To make fonts for Windows with ATM from Fontographer 3.2 you can do
the following:

1. Draw the font or autotrace it from scanned images pasted into
Fontographer 3.2's Edit window. If you have already made Fontographer
fonts, you can use the "Open font..." dialog from the File menu to
open the font and allow its conversion to PC format. If you have PC
PostScript fonts you wish to modify, you can download them to any
Adobe PostScript printer that can simultaneously communicate with both
Macintoshes and PC's, then use Altsys' Metamorphosis (retail $149.00)
to convert the fonts to Fontographer format on the Macintosh.

2. Select all the characters in the font and use the Path menu's
"Correct path direction" item to make sure that the path directions in
the font are correct.

3. While all the characters are still selected, use the Edit menu's
"Char info..." item to make sure that all the characters in the font
are filled with "Normal" fill and a "Tint" of 100% (DO NOT check the
"Stroke" checkbox, since Adobe rules do not allow stroked characters
in Type 1 fonts).

4. Use the Edit menu's "Font attributes..." dialog to turn on the
"Automatic PostScript and bitmap hints", "Generate Type 1 fonts", and
"Adobe standard character encoding" checkboxes. Do not turn on the
"Use Flex feature if possible" checkbox unless you are absolutely
certain that your font can benefit from Flex.

5. Use the File menu's "Generate fonts..." dialog and choose the
"PostScript-PC" item from the "Outline format:" popup menu. To save
time, you can choose the "None" item from the "Bitmap format:" popup
menu, since you will not need to generate any kind of bitmap file. OK
this dialog and the result will be the .AFM, .PFB, and .PFM files
described above.

6. Start Apple File Exchange and format an MS-DOS floppy (Erase disk
from the File menu). Use the left hand file dialog to find your .PFB
and .PFM files. Select them and press the Translate button. AFE will
use its default file translation (basically no changes except external
file format). Eject the floppy from the Macintosh using the Eject
button and bring it to your 3-1/2" disk-equipped MS-DOS machine.
Insert the floppy and follow the above directions for installing the
font.

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

## CLASSHVY.DOC

{% raw %}
```
Francis X. "Butch" Mahoney, Jr.302 Lessard St.Donaldsonville, La. 70346(504) 473-9378The fee for this typeface is $15 as is, check or money order(preferred).Or send $20 and a disk and a list of the sizes of the bitmaps you would like to have and I will try to oblige (within reason...like, don't ask for 127 point,etc...).Hello Font Lover,Previously, I had become much discouraged by distributing my work on CompuServe.  A couple of bad experiences made it difficult for me tocontinue.  However, recently I have received some recognition, and it has made me rethink my position.The economy is bad in Louisiana and I am not doing well.  You may have noticed the address change.  I cannot afford the time on CompuServe except for uploading.  Also, my troubles are your gain for neither can I afford to do any other kind of marketing for my work other than ShareWare (they would cost at least twice as much or more).  And just having me "sit on these faces" (pun intended) is not doing any good for myself or anyone else.  My first uploads to CompuServe were rather primitive attempts.  I think now you will find that I am capable of good - excellent quality alter-natives to the "higher priced spreads".I will assume you know what to do with this typeface.   (use Font/DA Mover 3.2 or higher, don't let Font/DA Mover change the    font id, etc...)            .........if you don't know how to work these, call!!! (not collect)            .........if you can't call, write (like I said, I can't afford CIS)There is only one size bitmap with this typeface (I'm trying to keep my long distance and your download charges to a minimum).  And there is a good chancethat it is not very clean (I was in a hurry...Christmas is coming).  It will however, automatically download to any PostScript Device i.e. LaserWriter, Linotronic, or any of the new PostScript printers that are accessed by AppleTalk.  (Versions of this typeface can be prepared for manual downloading as a text only file for non-Macintosh computers if the need should arise.)If you should happen to investigate any of the other typefaces I've uploadedyou will probably discover that this is a form letter tacked on to every one of them.  You can skip reading the others, however, the ShareWare fee remains.                          PLEASE PAY ME...	                                                          Thank you.
```
{% endraw %}

## FILE2961.TXT

{% raw %}
```
Disk No: 2961
Disk Title: Fonts Galore #1
PC-SIG Version: S1.0

Program Title: Fonts Galore #1
Special Requirements: Windows 3.0 and Adobe Type Manger.

A collection of ten diskettes full of fonts to be used with Windows and
Adobe-type Manager installed. They can be used by Postcript and LaserJet
printers. Fonts included with this disk are: Black Cancery, Caligula,
Classic Heavy, Cloister_Black, Graphic Light, Postcrypt, and R S Alison.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1992 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  PC-SIG Disk #2961  Fonts Galore #1  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ Note: You must have Adobe Type Manager installed in Windows 3.0 in      ║
║       order to use these fonts.                                         ║
║                                                                         ║
║ To install the fonts:                                                   ║
║                                                                         ║
║ From the Main program group in Windows 3.0, open the ATM control panel  ║
║ and click on "Add". Next, click on any subdirectory, or press Enter.    ║
║ From there, choose the drive that has fonts. Once that's completed,     ║
║ choose the fonts to be installed and click on "Add". You can install    ║
║ all the fonts on the disk by clicking on the first font and dragging    ║
║ the highlight bar to the bottom of the list. Once the fonts have been   ║
║ installed, click on Exit. You will be required to restart Windows so    ║
║ the fonts can be accessed by your applications.                         ║
║                                                                         ║
║                                                                         ║
║                                       (c) Copyright 1992, PC-SIG Inc.   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## POSTCRY.DOC

{% raw %}
```
Dear PC font user:

We at Altsys are proud to announce the availability of Fontographer 3.2, the
first Macintosh PostScript font program that can produce fonts for the ATM
(Adobe Type Manager) Windows environment on MS-DOS computers.

Accompanying this README.TXT file is the PostCrypt font. It is fully
compatible with ATM for Windows, allowing it to be seen on screen at any size,
and print to any printer that has a Windows driver.

INSTALLING THE POSTCRYPT FONT:

1. Copy the POSTCRY_.PFB file to your \PSFONTS directory.

2. Copy the POSTCRY_.PFM file to your \PSFONTS\PFM directory. (You can ignore
the .AFM file since it is not useful with Windows. It may be useful to people
running GEM applications, however.)

3. Open the ATM Control Panel and "Add..." PostCrypt to your list of ATM
fonts. You will have to open the \PSFONTS\PFM directory to allow ATM to see
your PostCrypt font.

4. If you have a PostScript printer, the following will be necessary. If your
printer does not have PostScript, ignore this step. Open your WIN.INI file
with the Windows Notepad program.  (Do you have a backup of it? If not, make
one now.) At the end of the "softfonts" list, you will see something like:

softfonts5=c:\psfonts\pfm\POSTCRY_.PFM

You'll need to change this to:

softfonts5=c:\psfonts\pfm\POSTCRY_.PFM,c:\psfonts\POSTCRY_.PFB

Doing this allows the Windows PostScript driver to find your .PFB file and
download it to your PostScript printer. DO NOT use a semicolon between the two
entries or you will cause some rather unpleasant problems.

You should now exit Windows and restart. PostCrypt will now show up in
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

### Directory of PC-SIG Library Disk #2961

     Volume in drive A has no label
     Directory of A:\

    ARCHI    DOC      6402  11-28-90   9:45p
    ARCHI___ PFB     20447  11-28-90   9:21p
    ARCHI___ PFM       678  11-28-90   9:21p
    BLACKCHA DOC      5067  11-08-90   4:27p
    BLACKCHA PFB     16290  12-03-90   9:11a
    BLACKCHA PFM      2672  12-03-90   9:11a
    CALIG___ PFB     23587  11-14-90   5:33p
    CALIG___ PFM       676  11-14-90   5:33p
    GRAPHLIG DOC      5763  11-18-90   3:16p
    GRAPHLIG PFB     20934  11-19-90   4:03p
    GRAPHLIG PFM      1314  11-19-90   4:03p
    CLOISTER PFB     36087   1-24-91   8:11p
    CLOISTER PFM       694   1-24-91   8:11p
    POSTCRY  DOC      4263  11-14-90   9:40p
    POSTCRY_ PFB     35147  11-14-90   9:13p
    POSTCRY_ PFM       712  11-14-90   9:13p
    RSALI___ PFB     27336   1-08-91  12:52p
    RSALI___ PFM       676   1-08-91  12:52p
    CLASSHVY PFM       690   4-04-91   9:39p
    CLASSHVY PFB     28359   4-04-91   9:39p
    CLASSHVY DOC      2413   1-24-89   9:48a
    GO       TXT      1617   4-08-92   4:33p
    GO       BAT        38   1-01-80   1:37a
    FILE2961 TXT       558   3-30-92  12:46p
           24 file(s)     242420 bytes
                           68608 bytes free
