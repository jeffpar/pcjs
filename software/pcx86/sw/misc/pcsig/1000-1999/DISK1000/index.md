---
layout: page
title: "PC-SIG Diskette Library (Disk #1000)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1000/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1000"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NETHACK   AN ADVENTURE GAME"

    NETHACK is a huge Dungeons & Dragons-type adventure game of 20-plus
    levels, 150-plus rooms, and countless corridors.  Dangers abound in
    this game.  Besides a huge inventory of monsters, there are many traps
    awaiting the unwary.  Also, many of the treasures you find (and you
    find plenty if you live long enough) turn out to be very hazardous to
    your health.  In fact, if you are an average beginning player, we can
    safely predict that you will probably not get past level three during
    the first 10 games you play (unless you happen to fall through a trap
    door).
    
    Expanded features include: new character classes and weapons, armor
    weights. new tools. polymorph self spell (in the magic library).
    rockmoles and Keystone Kops who throw cream pies (in the caverns),
    squeeky board and magic traps, fountains, and magic markers.
    File Descriptions:
    
    INSTALL  BAT  Hard drive installation batch file.
    CONFIG   TXT  File used by INSTALL.BAT.
    ARC      COM  Unarchiving utility.
    NETHACK2 ARC  Part two of NETHACK, archived.
    NETHACK1 ARC  Part one of NETHACK, archived.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONFIG.TXT

{% raw %}
```
device=NANSI.SYS
```
{% endraw %}

## FILE1000.TXT

{% raw %}
```
Disk No 1000
Program Title: NETHACK version 1.0
PC-SIG version 1
 
    NETHACK is a huge game of 28+ levels, 150+ rooms, and countless
corridors. Danger abounds in this game. Besides a huge inventory of
monsters there are many traps awaiting the unwary. Also, many of the
treasures you find (and you find plenty if you live long enough) turn out
to be very hazardous to your health. In fact, if you are an average
beginning player, we can safely predict that you will probably not get past
level 3 during the first 10 games you play (unless you happen to fall
through a trap door).
 
    Featured: New character classes & weapons! Armor weights. New tools.
Polymorph Self spell is in the magic library. library. Rockmoles & Keystone
Kops (which throw cream pies!) are in the caverns, not to mention the
Squeeky Board and Magic Traps, Fountains and Magic Markers.
 
Usage: Entertainment
 
System Requirements: 512K memory, a hard drive and NANSI.SYS specified in
your CONFIG.SYS file.
 
How to Start: Type: INSTALL (press enter).
 
Suggested Donation: None
 
File Descriptions:
 
NETHACK1 ARC  Part one of NETHACK, archived.
NETHACK2 ARC  Part one of NETHACK, archived.
ARC      COM  Unarchiving utility.
CONFIG   TXT  File used by INSTALL.BAT.
INSTALL  BAT  Hard drive installation batch file.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## NANSI.DOC

{% raw %}
```
SYNOPSIS
	Include in \config.sys the line
		device=nansi.sys

DESCRIPTION
	Nansi.sys is a console driver which understands ANSI control
	sequences. It has several advantages over ANSI.SYS (the driver
	supplied with DOS):
	1. It supports new escape sequences (see below).
	2. It provides MUCH faster output under certain conditions.
	3. It supports the 43-line mode of the EGA.
	4. The darned bell is now 1/4 second instead of 1/2 second long.

	What a console driver does:
	When you, for example, type
		C:> type foo.txt
	COMMAND.COM opens the file foo.txt, reads it, and writes it to
	the console driver, which puts it up on the screen.

	Both ansi.sys and nansi.sys use IBM Video BIOS to control the screen.
	However, nansi.sys bypasses BIOS if the screen is in a text mode; this
	allows much faster operation under certain conditions.

	While putting text up on the screen, (n)ansi.sys keeps a lookout for
	the escape character (chr(27), known as ESC); this character signals
	the start of a terminal control sequence.
	Terminal control sequences follow the format
		ESC [ param; param; ...; param cmd
	where
		ESC	is the escape character chr$(27).
		[	is the left bracket character.
		param	is an ASCII decimal number, or a string in quotes.
		cmd	is a case-specific letter identifying the command.
	Usually, zero, one, or two parameters are given.  If parameters
	are omitted, they usually default to 1; however, some commands
	(KKR and DKOCT) treat the no-parameter case specially.
	Spaces are not allowed between parameters.

	For example, both ESC[1;1H and ESC[H send the cursor to the home
	position (1,1), which is the upper left.

	Either single or double quotes may be used to quote a string.
	Each character inside a quoted string is equivalent to one numeric
	parameter.  Quoted strings are normally used only for the Keyboard
	Key Reassignment command.

Control Sequences
	The following table lists the sequences understood by nansi.sys.
	Differences between nansi.sys and the standard ansi.sys are marked
	with a vertical bar (|).

Cursor Positioning
Short	Long name		Format		Notes
CUP	cursor position		ESC[y;xH	Sets cursor position.
HVP	cursor position		ESC[y;xf	Same as CUP; not recommended.
CUU	cursor up		ESC[nA		n = # of lines to move
CUD	cursor down		ESC[nB
CUF	cursor forward		ESC[nC		n = # of columns to move
CUB	cursor backward		ESC[nD
DSR	Device Status, Report!	ESC[6n		Find out cursor position.
CPR	Cursor Position report	ESC[y;xR	Response to DSR, as if typed.
SCP	Save Cursor Position	ESC[s		Not nestable.
RCP	Restore Cursor Position ESC[u

Editing
ED	Erase in Display	ESC[2J	Clears screen.
EL	Erase in Line		ESC[K	Clears to end of line.
IL  |	Insert Lines		ESC[nL	Inserts n blank lines at cursor line.
DL  |	Delete Lines		ESC[nM	Deletes n lines including cursor line.
ICH |	Insert Characters	ESC[n@	Inserts n blank chars at cursor.
DCH |	Delete Characters	ESC[nP	Deletes n chars including cursor char.


Mode-Setting
SGR	Set Graphics Rendition	ESC[n;n;...nm	See character attribute table.
SM	Set Mode		ESC[=nh		See screen mode table.
RM	Reset Mode		ESC[=nl		See screen mode table.
IBMKKR	Keyboard Key Reass.	ESC["string"p
	The first char of the string gives the key to redefine; the rest
	of the string is the key's new value.
	To specify unprintable chars, give the ASCII value of the char
	outside of quotes, as a normal parameter.
	IBM function keys are two byte strings; see the IBM Basic manual.
	For instance, ESC[0;";dir a:";13;p redefines function key 1 to
	have the value "dir a:" followed by the ENTER key.
      | If no parameters given, all keys are reset to their default values.

DKOCT | Output char translate	ESC[n;ny
      | When first char is encountered in output request, it is replaced with
      | the second char.  This might be useful for previewing text before
      | sending it to a printer with a funny print wheel.
      | If no parameters are given, all chars are reset to normal.


Character Attributes
	The Set Graphics Rendition command is used to select foreground
	and background colors or attributes.
	When you use multiple parameters, they are executed in sequence, and
	the effects are cumulative.
	   Attrib code		Value
		0		All attributes off (normal white on black)
		1		Bold
		4		Underline
		5		Blink
		7		Reverse Video
		8		Invisible (but why?)
		30-37		foregnd blk/red/grn/yel/blu/magenta/cyan/white
		40-47		background

Screen Modes
	The IBM BIOS supports several video modes; the codes given in the
	BIOS documentation are used as parameters to the Set Mode command.
      | (In bitmap modes, the cursor is simulated with a small blob (^V).)
	    Mode Code		Value
		0		text 40x25 Black & White
		1		text 40x25 Color
		2		text 80x25 Black & White
		3		text 80x25 Color
		4		bitmap 320x200 4 bits/pixel
		5		bitmap 320x200 1 bit/pixel
		6		bitmap 640x200 1 bit/pixel
		7		(cursor wrap kludge)
		13 (EGA)	bitmap 320x200 4 bits/pixel ?
		14 (EGA)	bitmap 640x200 4 bits/pixel
		16 (EGA)	bitmap 640x350 4 bits/pixel
	Mode 7 is an unfortunate kludge; Setting mode 7 tells the cursor
	to wrap around to the next line when it passes the end of a line;
	Resetting mode 7 tells the cursor to not wrap, but rather stay put.
      | If your computer has the Enhanced Graphics Adaptor, modes between
      | 8 and 15 are also supported; see the EGA BIOS for info.
      | The EGA also lets you use a shorter character cell in text modes
      | in order to squeeze 43 lines of text out of the 25-line text modes.
      | To enter 43 line mode, set the desired 25-line text mode (0 to 3),
      | then Set Mode 43.  For instance: ESC[=3h ESC[=43h.
      | To exit 43 line mode, set the desired 25-line text mode again.
      | Nansi.sys ignores mode 43 unless there is an EGA on your computer.

Faster Output
      | Any program that sets the console to RAW mode, and buffers its
      | output properly, can achieve extremely high screen update speeds in
      | return for giving up the special functions of the keys ^C, ^S, and ^P.
      | See IOCTL in the MS-DOS 3.x Technical Reference for more info.
	Also, a small improvement in speed may be noticed with some
	programs that use the DOS console in normal mode, as this driver
	efficiently implements the (standard but undocumented) INT 29h
	most-favored-device putchar used by DOS.

BUGS
	Insert and delete character do not work in graphics modes.
	Graphics mode writing is slow.
	The simulated cursor in graphics mode slows down single-char
	writes by a factor of 3; it should be disable-able.
	Does not support erase-to-end-of-screen and other useful functions.

Version
	This version, 2.2, created February 1986.  Problems should
	be reported to Daniel Kegel, 1-60 CIT, Pasadena, CA 91126
	(or, after June 1986, 2648 169th Ave SE, Bellevue, Wa. 98008).
	Your suggestions for improvement would be most welcome.

NOTE
	This program may be distributed for educational and personal use
	only.  Commercial use is verboten; get in touch with the author.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1000

     Volume in drive A has no label
     Directory of A:\

    ARC      EXE     32181   3-05-86  11:33a
    CONFIG   TXT        19  11-17-87   9:36p
    FILE1000 TXT      1434  12-18-87   2:41p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       463  12-14-87  11:34a
    INSTALL  BAT      1160  11-17-87   9:40p
    NETHACK1 ARC    258176  12-11-87  10:44a
    NETHACK2 ARC     45184  12-11-87   9:57a
            8 file(s)     338655 bytes
                           17408 bytes free
