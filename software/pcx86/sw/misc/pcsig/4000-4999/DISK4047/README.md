---
layout: page
title: "PC-SIG Diskette Library (Disk #4047)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4047/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4047"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  PC-SIG Disk #4047 ACCU MUSIC SYSTEM  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Install the program, type:  INSTALL  (press Enter)                  ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HISTORY.DOC

{% raw %}
```

   REVISION HISTORY

   4/20/93   Version 3.3         Minor Bug Fixes and Enhancements:

        -    Fixed bug when playing music which was in all lowercase
        -    Fixed bug when transposing music in the treble clef
        -    Fixed bug which prevented voice files  (.V??) from being deleted
             when trying to delete a song file
        -    Fixed  bug which caused cursor in graphics display to lose track
             when switching windows
        -    Fixed  bug which caused voice descriptions to be copied from old
             song files to new song files
        -    Added ability  to specify measures to play  for internal speaker
             playback
        -    Added  ability to  playback  on internal  speaker  while in  the
             editor - You can also specify measures to playback
        -    Eliminated  support for single voice .ACC music files.  Old .ACC
             files  will  need  to be  converted  to  .SNG  format using  the
             appropriate option.
        -    Added ability to specify external editor for editing song files
        -    Re-worked  menus for  printer driver  selection and  creation to
             eliminate confusion
        -    Included OS/2 and Windows icons
        -    Added  ability to  ESCape  out of  color  selection and  printer
             string setup
        -    Added ability to view a printer driver's settings (when creating
             a printer driver)

   2/10/93   Version 3.2         Minor Bug Fix:

        -    Enhanced .ROL file compatibility - now works with WinJammer
        -    Fixed bug which did not let margins option in printouts work
        -    Fixed bug which caused improperly shortened printouts
        -    Added two new  printer drivers  (for the IBM  Proprinter and  HP
             Deskjet)
        -    Desqview and OS/2 aware - gives up timeslices to both

   12/1/92   Version 3.1         Minor Bug Fix:

        -    Fixed bug which caused improper printout in some cases
        -    Fixed some minor problems in the help file

   10/10/92  Version 3.0         Major Feature update:

        -    Program name  changed  from ACCU  Music  Printer to  ACCU  Music
             System
        -    Entirely menu driven
        -    All  separate programs  (modules)  have been  combined into  one
             program
        -    Built-in  graphics based  (or  text based)  editor for  entering
             music
        -    Automatic expansion of notes - for quick music entry
        -    Option of playing notes as they're entered
        -    Ability to play music on internal speaker
        -    Ability to play music on sound card
        -    Support for songs with up to 11 voices (parts)
        -    Mouse support
        -    Song  loader which  allows  you to  pick  songs from  menu  (and
             displays each song title)
        -    Ability to  change screen colors for  background, windows, text,
             etc.
        -    Context sensitive help
        -    Conversion of .ROL  songs to  ACCU Music System  songs and  ACCU
             Music System songs to .ROL songs
        -    Fixes to  advanced command limitations  (i.e. not being  able to
             have KEY= and TIME= in same measure)
        -    Miscellaneous bug fixes

   3/23/91   Version 2.1         Many bug fixes including:

        -    Missing extended measure rest  sign:  The extended measure  rest
             sign did not print in the music.  The extended measure rest sign
             now prints in the music correctly.
        -    Extended  measure rest double digit count:   Double digit counts
             of extended  measure  rests (like  the  number 10)  would  cause
             improper  spacing of the number.   Double digit  counts now work
             properly.
        -    Long staff  line crash:  If there  were more than 50  notes in a
             staff  line, the  program  would crash.    The buffer  has  been
             expanded to 200  notes and will report an error  message if more
             than 200 notes are on a staff line.
        -    Tied  note transposition:  Notes that were tied across bar lines
             would  not retain  any key  changes  in the  note in  the second
             measure.  This has been corrected.
        -    Improper page break:   Often the program would print  across the
             page break.  A new method  of counting now makes the page breaks
             more accurate.
        -    Cutting off of top of staff line:  The  top of the key signature
             sometimes did not print.  This has been fixed.
        -    Better syntax checking:   Improper music commands  now result in
             an error message rather than causing poor print outs.

   1/12/91   Version 2.0

             Added many new features  including:  higher resolution printing;
             print  margin changes;  transposing program;  key, time,  title,
             author setting from within music file; alto, tenor, and  soprano
             clefs;  3  print  modes,  draft, medium,  and  high;  redesigned
             program interfaces; plus several other modifications

             Version 1.5

             Fixed bug which cut off top portion  of sharp key signature when
             printing treble  clef music.   Special  thanks again  to Russell
             Taliaferro for pointing out this bug.

             Version 1.4

             Fixed  bug  which wouldn't  print out  sharp key  signature when
             selected from  MUSIC.EXE.  Special thanks  to Russell Taliaferro
             for pointing out this bug.

             Version 1.3

             Removed  output  of  music to  graphics  screen.    No need  for
             graphics  card.    Output  is dumped  directly  from  memory  to
             printer.  Print abort option added.

             Version 1.2

             Fixed  bug in printing which  skipped certain staff  lines.  Bug
             corrected.  Added laser printer support.  Added dynamic support.
             Added extended number of rests.

             Version 1.1

             Fixed bug  in music formatting routine which  caused measures in
             music to be skipped.  Bug corrected and music formatting routine
             works  correctly.    Added version  #  and  date  of version  to
             MUSIC.EXE program.

             Version 1.0

             Initial release of ACCU Music System.

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```

                            VENDOR/BBS INFORMATION
                               ACCU Music System

   I  have enclosed some  information that  may be  useful for  adding this
   program to your vendor catalog or BBS.  You are free to add this program
   to your catalog or BBS.  If you are adding it to a catalog or user group
   library,  I  would  appreciate  your  letting me  know.    I  would also
   appreciate receiving a  copy of the catalog issue in  which it is listed
   (for catalog vendors) if at all possible.  If you are a RETAIL VENDOR, a
   non-catalog  vendor, or something out of the ordinary, please contact me
   as far  as distributing my  program.  I  interested in hearing  from you
   about what you have to offer.

   The  following  is  a   brief  description  of  the  program   for  your
   information:

   NOTE:  This  program was formerly named ACCU Music Printer.  It has been
   renamed  to ACCU  Music System.   Please  remove any references  to ACCU
   Music Printer in your records.

   Program Name:       ACCU Music System
   Version:            Version 3.3
   Date released:      April 20, 1993
   Preferred BBS Filename:  AC33MUSC.ZIP

   HARDWARE/SOFTWARE REQUIREMENTS

   Computer:      IBM or compatible
   Processor:     Any x86 processor (8086, 8088, 80286, 80386, 80486, etc.)
   Graphics:      No graphics card required
   Memory:        384kb RAM required, 512kb RAM or higher recommended
   Operating System:   DOS version 3.3 or higher (or compatible)
   Drives:             Two floppy drives; or a floppy drive and a hard disk
                       (floppy  not needed  if program  is already  on hard
                       disk)

   ADDITIONAL HARDWARE/SOFTWARE WHICH CAN BE USED (but is not required)

   o    CGA graphics card/monitor
   o    Printer with graphics support (i.e. not a daisy-wheel printer)
   o    Sound card (Adlib, Soundblaster, or compatible)
   o    Mouse
   o    Adlib .ROL file player (one such possible program is included)

   Short description:
   Create music, print out sheet music, transpose music, play on PC speaker
   or sound card, etc.

   Long description:
   ACCU Music System includes  everything that you need to  create your own
   music on your  computer.  It has a graphics-based (or text-based) editor
   which allows you to enter notes and see them  on the screen as well.  It
   includes a transposer  which will let  you change  the key signature  of
   your music  as well as  raise/lower your music by  half steps.   It also
   allows you to print  out your music  in traditional sheet music  format.
   It allows you  to play your music on the PC  speaker or on a sound card.
   Finally, you can convert your songs to the .ROL format for distribution.
   Your songs  can range from simple  one voice files to  complex multiple-
   voice  songs with  multiple  instruments, etc.   Musical  entry supports
   multiple  key signatures, a variety of clefs (Treble, Bass, Tenor, Alto,
   and  Soprano), tempo changes, etc.  The program includes several printer
   drivers (including  a laser printer driver) and has a utility for making
   your own.

   Registration:
   The  registered  program  is  identical  to  the  unregistered  program.
   Registered users get the following benefits:
   o    Copy  of the next version of the program with printed documentation
        when it becomes available.
   o    Codes to  disable  "begging screens"  from current  and all  future
        versions
   o    Codes to  remove the "begging screen" and the one-line registration
        reminder on printouts from this and all future versions
   o    Ability to receive updates at a discount price

        Registration costs $20.00 plus shipping/handling
        U.S. orders should add $3.00 for shipping/handling.
        Foreign orders should add $6.00 for shipping/handling.

   Shareware:
   This  program  is distributed  as Shareware.    Users are  encouraged to
   register  this program.   ALL  features work  in the  shareware version.
   There is a  'begging screen' when  you exit the  program and a  one-line
   registration  reminder message that appears on all music printouts.  The
   author is a member of the ASP.

   Author address:     Kevin Fischer
                       c/o ACCU Music System Vendor
                       16878 Saint James Drive
                       Poway, CA 92064-1137
                       USA
                       619-487-5461

   Thank you for helping me to distribute my program.  I am a member of the
   ASP (Association of Shareware Professionals).  Please do not hesitate to
   contact me concerning version upgrades or any other matters.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4047

     Volume in drive A has no label
     Directory of A:\

    ACCUDOCS EXE     37743   4-20-93   3:30a
    ACCUMUSC DSK        27   4-20-93   3:30a
    ACCUMUSC EXE    127065   4-20-93   3:30a
    FILE_ID  DIZ       437   4-20-93   3:30a
    HISTORY  DOC      6606   4-20-93   3:30a
    INSTALL  EXE     16644   4-20-93   3:30a
    INTUNEPG EXE     78164   4-20-93   3:30a
    README           10690   4-20-93   3:30a
    SAMPLES  EXE     12161   4-20-93   3:30a
    VENDOR   DOC      4786   4-20-93   3:30a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       693   9-09-93  10:07a
           12 file(s)     295047 bytes
                           20480 bytes free
