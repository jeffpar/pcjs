---
layout: page
title: "PC-SIG Diskette Library (Disk #4030)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4030/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4030"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  PC-SIG Disk #4030 HERO'S HEART  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Start the game, type:  HERO (press Enter)                           ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MUSIC.DOC

{% raw %}
```

				  MUSIC 1.0

			Copyright 1991 Everett Kaser
			     All rights reserved


The MUSIC.COM program is a stand alone program designed to play the .MUS files
used by SOLITILE 3.  It's use is very simple.  You simply run it, specifying
on the command line the filename of the .MUS file to be played.  It's very
stupid however, so you MUST include the .MUS file extension.  A couple of
examples are:

	MUSIC HALLELUJ.MUS
	MUSIC \games\solitile\nobody.mus

The program may be interrupted (halted) at any time during the playing of the
music by pressing the <SPACE> bar.  The program will play the music file once
and then halt (if no key is pressed during the playing of the music).  If
there's anything wrong with the syntax of the .MUS file, MUSIC will print an
error message trying to give an indication of the approximate location of the
syntactical goof.



FORMAT OF .MUS FILES
--------------------

.MUS files are ASCII files.  They may contain comments, tempo information,
octave information, and notes.

COMMENTS are started by a semi-colon (;), and cause everything following them
on that line to be ignored.  The semi-colon may be at the start of a line or
be on the same line after some 'music' information.

TEMPO is set by placing a 't' character in the file, followed by an integer.
The integer value is multiplied times each individual note length (see below)
to generate the total length for each note.  This allows the overall "speed"
at which the entire piece is played to be increased or decreased by changing
one value.  T4 is a good value to use when first starting to enter the data
for a piece.  Once you've entered some notes, you can then play them and decide
whether to raise or lower the value.  Remember that this value is MULTIPLIED
with the note length, so the larger the value of the TEMPO, the slower the
piece will be played (T3 is faster than T4).  The tempo may be modified at any
time during the piece.  This can be done by placing a 't-' or a 't+' in the
.MUS file.  This will cause the TEMPO value to be decreased or increased by 1.

OCTAVE is set by placing an 'o' character in the file, followed by an integer.
The integer value must be from 1 to 9 (o3 contains 'middle C' on the piano).
An 'o' command (along with a 't' command) should be placed at the beginning of
a .MUS file in order to initialize the octave and tempo to known values.  The
octave can be changed at any time during the piece (and usually needs to be
on most pieces) by using an 'o-' or 'o+'.  Just like tempo, this decreases or
increases the octave by 1.  Increasing the octave (o+) gives higher pitched
notes.  Decreasing the octave (o-) gives lower pitched notes.

NOTES are specified as one of a, b, c, d, e, f, g, or r. ('r' stands for Rest).
A note may be preceded by a number which specifies the length of the note.  If
a note is NOT preceded by a number, then it will have the same length as the
previous note.  A note (except for 'r') may be followed by a '#' or '@'
character, to specify that that note should be played 'sharp' or 'flat'.
(There's no checking to ensure that you specify a 'real', 'legal' note.  You
can specify a 'c@' (a C flat) even though there's no such note on a piano.
What you would get is a 'b' note.)  Spaces are generally optional between
notes, although spaces may make reading of the file a little easier for humans.
A Rest (r) causes no notes to be played for that period of time.

See any of the .MUS files on the Solitile 3 distribution, or on the Solitile 3
Accessory Disks for examples.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4030

     Volume in drive A has no label
     Directory of A:\

    FILE_ID  DIZ       358  11-28-92   9:30a
    FURELISE MUS       381   9-01-91   6:05p
    HALLELUJ MUS       298   9-01-91   2:06p
    HALLKING MUS       673   9-01-91  12:40p
    HERO     DOC     51781  11-27-92   5:44p
    HERO     EXE     97548  11-21-92   5:26p
    MUSIC    COM      1799  12-07-91   9:15a
    MUSIC    DOC      3608  12-07-91   5:49p
    ORDRFORM DOC      9860  11-21-92   3:58p
    VENDOR   DOC      3879  11-27-92   7:38p
    HEROPIC  IMG    112000   1-22-93   9:53a
    HERO1    CFG         9   1-24-93  11:51a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       693   9-09-93   9:52a
           14 file(s)     282918 bytes
                           31744 bytes free
