---
layout: post
title: The Realities of Fantasy Land
date: 2018-04-23 10:00:00
permalink: /blog/2018/04/23/
preview: /software/pcx86/demo/ibm/ega/images/fland-legend.png
machines:
  - id: ibm5160
    type: pcx86
    config: /configs/pcx86/machine/ibm/5160/ega/256kb/color/machine.xml
    autoMount:
      A:
        name: IBM EGA Fantasy Land Demo
      B:
        name: IBM EGA Fantasy Land Demo
    autoType: $date\r$time\rFLAND\r
---

On February 19, 2018, I received a pleasantly surprising email from a person named Eric, who had stumbled across
a PCjs [blog post](/blog/2017/07/03/) where I was lamenting the disappearance of an old IBM EGA demonstration program
called "[Fantasy Land](/software/pcx86/demo/ibm/ega/)":

    From: Eric
    Subject: FantasyLand - Software for the IBM Enhanced Graphics Adapter
    Date: February 19, 2018 at 4:02:14 PM PST
    To: Jeff@pcjs.org
    
    Dear Jeff.
    
    Short version:  I have a copy of FantasyLand!

Eric then went out of his way to have the disk professionally duplicated, after which he sent me a disk image
and eventually the actual diskette.

![Fantasy Land]({{ site.software.diskettes.server }}/pcx86/demo/ibm/ega/EGA-FLAND.jpg)

Based on John T. Cockerham's October 1986 PC Tech Journal article
"[Evaluating the EGA: The EGA Standard](/documents/magazines/pctj/#pctj-1986-10)",
I knew the software would not run properly in PCjs, because it made use of programmable fonts, split screens,
and text-mode pixel panning -- all features that PCjs did not support yet.  So I first tried running it on a genuine
IBM PC with an original IBM EGA.

Unfortunately, the screen was a garbled flickering mess.  Something was clearly wrong, and my initial fear was that
something was corrupted in the disk image Eric had sent me.  However, even after he sent me the original diskette, the
program still failed to run properly.  Still hoping that the disk's contents were OK, I went looking for other
explanations.

My first guess was that I needed to add more RAM to my EGA.  A quick look at the diskette's directory:

	 Volume in drive A has no label

	Directory of A:\

	IBMBIO   COM      4608 03-08-83  12:00p
	IBMDOS   COM     17152 03-08-83  12:00p
	COMMAND  COM     17664 03-08-83  12:00p
	ASSIGN   COM       896 03-08-83  12:00p
	FLAND    BAT        38 07-23-84  12:11p
	FLAND    EXE     67410 07-23-84   1:37p
	FL1      CS       2048 01-01-80   2:03a
	FL2      CS       2048 01-01-80   2:03a
	FL3      CS       2048 01-01-80   2:03a
	FL4      CS       2048 01-01-80   2:03a
	CHAR     MAP     65536 01-01-80   2:06a
	ATTR     MAP     65536 07-23-84   1:42p
	SPEC     MAP     65536 07-23-84   1:42p
	TABLE    MSG     11036 01-01-80   2:11a
	FLAND    DMO      9144 01-01-80  12:14a
	READ     ME        834 07-23-84  12:32p
	       16 file(s)     333582 bytes

revealed 4 fonts ("character sets") named FL1.CS through FL4.CS, and assuming the software required all four fonts
to be loaded into EGA RAM simultaneously, then my 128K EGA was definitely inadequate.  The EGA requires each font to
be loaded into plane 2, and moreover, fonts must be loaded at 16K intervals, so 4 fonts require 64K, which in turn
requires that *all 4 planes* have 64K.  I needed to find an EGA with 256K.

Fortunately, I had recently been talking to another friend and former co-worker named Anthony, and as luck would have it,
he had a spare IBM EGA with a full 256K of RAM on the daughterboard that he was happy to share.

Alas, the extra RAM was not a complete cure.  It eliminated the flickering, but the text on the screen still
looked truncated, and most of the characters were still occasionally garbled.

![Fantasy Land Bad EGA Switches](/blog/images/fland-bad-ega-switches.png)

I decided this was the best I could do with *real* hardware for now, and that perhaps I would learn more as I debugged
the software in PCjs, and maybe even figure out how to patch whatever was wrong.

### An Unexpectedly Small Font

While adding support for programmable EGA fonts to PCjs, I noticed that when Fantasy Land was loading its first font into
font bank 0 (ie, the same font bank where the EGA stores its default 8x14 font), Fantasy Land was only storing 8 rows of
character data, not 14, leaving 6 bytes of "stale" font data in place for every character.  This was why so many of
Fantasy Land's characters looked "damaged".

If this wasn't a bug, Fantasy Land must have assumed that the screen was *already* operating with a lower-resolution (8x8)
font.  This suggested that Fantasy Land had likely been designed for use with IBM's older CGA-based "Personal Computer Color
Display" rather than the newer "Enhanced Color Display".  Since Fantasy Land was one of the earliest programs created for
the EGA, it's possible that the newer monitor was in short supply at the time.

This theory is reinforced by Fantasy Land's README:

    This disk contains the files necessary to run the FLAND demonstration
    program for the IBM ENHANCED GRAPHICS ADAPTER.
    
    This disk and its contents are distributed for the sole purpose of
    demonstrating the capabilities of the IBM Enhanced Graphics Adapter
    and are not for sale.
    
    This disk contains the following files:
    
        COMMAND.COM
        ASSIGN.COM
        AUTOEXEC.BAT
        FLAND.EXE
        FL1.CS
        FL2.CS
        FL3.CS
        FL4.CS
        CHAR.MAP
        ATTR.MAP
        SPEC.MAP
        TABLE.MSG
        FLAND.DMO
    
    FLAND requires:
    
        1 IBM PC or PC/XT computer
        128K bytes of memory
        1 double side floppy disk drive (drive A:)
        1 EGA card equipped with 256K bytes of memory
        1 RGB color display
    
    To run FLAND, place the disk in drive A: and power-on the system.  If the
    computer is already running and DOS 2.0 is loaded then simply type the
    command "AUTOEXEC".

Notice that one of the requirements is an "RGB color display", which is a little ambiguous, but I think it's safe to
say that if an "Enhanced Color Display" was required or even recommended, then the README would have said exactly that --
and it didn't.

Most EGA users with an Enhanced Color Display (myself included) would normally have their EGA's switches set to "Enhanced
Color Mode", which uses high-resolution (8x14) fonts:

    SW1   SW2   SW3   SW4
    ---   ---   ---   ---
    OFF    ON    ON   OFF

so for Fantasy Land, the simple fix was to change the EGA's switch settings to "Normal Color Mode", which defaults to the
same font resolution (8x8) used by the Color Graphics Adapter (CGA):

    SW1   SW2   SW3   SW4
    ---   ---   ---   ---
     ON    ON    ON   OFF

At long last, I could finally see what Fantasy Land was *supposed* to look like.

![Fantasy Land Good EGA Switches](/blog/images/fland-good-ega-switches.png)

### Hard-coded Paths

Another issue I ran into was the software's use of hard-coded paths.  This is apparently why someone (perhaps Joel,
the author of the software, or Eric, the owner of this particular diskette) had created `FLAND.BAT`:

    echo off
    assign b=a
    fland
    assign

Since the diskette is bootable (it contains PC DOS 2.00), it seemed the intent was to insert it in drive A, reboot,
and then run `FLAND`, which would invoke the batch file, and the `ASSIGN` command would automatically redirect any requests
for drive B to drive A.

But, at least in PC DOS 2.00, the batch file doesn't work, even if you explicitly type `FLAND.BAT`, because PC DOS strips
any extension from the file name, and then looks first for a matching `COM` file, then a matching `EXE` file, and finally
a matching `BAT` file.  In this case, DOS *always* runs `FLAND.EXE`. 

Since the application seemed designed to run from drive B, that's where I decided to auto-mount it in my
[IBM EGA Fantasy Land Demo](/software/pcx86/demo/ibm/ega/) test machine, along with a standard PC DOS 2.00 boot disk
in drive A.

But that didn't completely solve all the problems.  Just before FLAND.EXE begins its automated demo, it reads
three 64K files (`B:ATTR.MAP`, `B:CHAR.MAP`, and `A:SPEC.MAP`) directly into planes 1, 0, and 3 of EGA RAM, and for
some reason, the third file is loaded from drive A, which of course fails when a different disk is in that drive.

The program ignores the failure and uses the error code (2) as a file handle.  Note that handle 2 is technically STDERR:

    0: Standard Input Device (STDIN)
	1: Standard Output Device (STDOUT)
	2: Standard Error Device (STDERR)
	3: Standard Auxiliary Device (STDAUX)
	4: Standard Printer Device (STDPRN)

but for purposes of a file read operation, any handle from 0 to 2 operates as a console handle, so the read operation blocks
until some console input is provided.  To continue, this bug requires you to press the Enter key twice (because the 64K file
is read in two 32K chunks).

To avoid this second problem, I decided to auto-mount the disk in *both* the A and B drives, so that no batch file or
`ASSIGN` command is required.

### Getting The Lay Of The Land

Although more work is required in PCjs to get [Fantasy Land](/software/pcx86/demo/ibm/ega/) running in all its original glory,
you can already get a good sense of what the map looked like, and enjoy all the little animated touches that Joel Gould and his
wife Daphne created, using the newfound power of character cell animation made possible by IBM's Enhanced Graphics
Adapter.

Watch Fantasy Land run through its automated tour in the machine below.  Wait for the introductory screen to
display "PRESS ANY KEY TO CONTINUE", press a key, and then the tour will begin.
Until PCx86 supports pixel panning in text modes, Fantasy Land's scrolling operations will not be as smooth as they
should be, but that will be addressed in a future PCjs update.

### IBM EGA Fantasy Land Demo

{% include machine.html id="ibm5160" %}

### PCjs Diagnostic Font Bank Displays

The next 4 windows are "live" views of the EGA's four font banks.  Since every font can also be rendered in any of
16 colors, each window shows 16 "slices" of the font in each of the 16 active colors.

These windows were helpful when I was working on PCjs programmable font support, and they still provide a nice visual
insight into the active fonts and colors used by Fantasy Land and the EGA.

<div>
  <p>Font Bank 0</p>
  <canvas id="ibm5160.videoEGA.font0" class="pcx86-video-diagnostic" width="1024" height="512" style="width:100%;background-color:black;"></canvas>
  <p>Font Bank 1</p>
  <canvas id="ibm5160.videoEGA.font1" class="pcx86-video-diagnostic" width="1024" height="512" style="width:100%;background-color:black;"></canvas>
  <p>Font Bank 2</p>
  <canvas id="ibm5160.videoEGA.font2" class="pcx86-video-diagnostic" width="1024" height="512" style="width:100%;background-color:black;"></canvas>
  <p>Font Bank 3</p>
  <canvas id="ibm5160.videoEGA.font3" class="pcx86-video-diagnostic" width="1024" height="512" style="width:100%;background-color:black;"></canvas>
</div>

### Fantasy Land Images from PCjs

![Fantasy Land Intro](/software/pcx86/demo/ibm/ega/images/fland-intro.png)

![Fantasy Land Legend](/software/pcx86/demo/ibm/ega/images/fland-legend.png)

![Fantasy Land Screenshot](/software/pcx86/demo/ibm/ega/images/screenshot.png)
