---
layout: page
title: "PC-SIG Diskette Library (Disk #279)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0279/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0279"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PIANOMAN & PLAYER PIANO"

    Play your computer keyboard as if it were an electronic piano!  More
    than just a simple note-playing routine, PIANOMAN can help you
    shape a true musical composition.
    
    Playing music is simple.  You'll see a picture of the keyboard on your
    monitor, with the notes written on the keytops.  When you press a key,
    it lights up on the screen and sounds a tone for as long as the key is
    held down.  You can record and edit music, insert and delete notes,
    adjust pitch and length, make global changes, and save/retrieve files.
    The maximum number of notes PIANOMAN can keep in memory is 63,488 if you
    have over 450K of RAM. Three octaves are available at a time and you can
    shift those octaves up or down.
    
    Create lovely music with this versatile composition tool.  Record your
    songs on disk and send music to your friends.  They'll smile when you
    sit down at the computer!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES279.TXT

{% raw %}
```
Disk No  279
Program Title: PIANOMAN and PLAYER PIANO version 4.0
PC-SIG version 3.0

    PIANOMAN lets you play the keyboard of an IBM-PC (or close compatible)
like an electronic piano. The keys sound a tone as long as you hold them
down, and stop when you release them. You can record and edit music, insert
and delete notes, adjust pitch and length, make global changes, and
save/retrieve files.

    The maximum number of notes PIANOMAN can keep in memory is 63,488 (64
kilonotes minus 2,048 notes). This maximum is available if you have over
450K of RAM.

    Playing a tune with PIANOMAN is simple. You'll see a picture of the
keyboard on your monitor, with the notes written on the keytops. When you
press a key, it lights up in the picture. There are three octaves available
at a time, and you can shift those octaves up or down using the up and down
arrows.

Usage: Musical Entertainment and Utility.

System Requirements: None.

How to Start: Type PIANOMAN (press enter).

Suggested Registration: $25.00

File Descriptions:

PIANOMAN DOC  Documentation
PIANOMAN EXE  Main Program
PINST    EXE  Installation program
PLAYRPNO EXE  Player Piano program
README        Brief inductory text file
SPKR    <DIR> Sub-directory containing utility/conversion files
TP4     <DIR> Sub-directory containing example on how to use your music
              inconjunction with programs written on Turbo Pascal 4.0
TUNES   <DIR> Sub-directory contain music source code files

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,1988 PC-SIG, Inc.

```
{% endraw %}

## PIANOMAN.DOC

{% raw %}
```

     SHAREWARE REGISTRATION FORM

     To register PIANOMAN, send this form with $25 to:

          Support Group Inc.  
          P.O. Box 1577       
          Baltimore, MD  21203

     You may also register using MasterCard or VISA by calling 800/USA-GROUP
     or 301/889-7893.

     NAME:     __________________________________________________

     ADDRESS:  __________________________________________________

               __________________________________________________

               __________________________________________________

               __________________________________________________

     Where did you get your evaluation copy of PIANOMAN?

               __________________________________________________

     Method of payment:
                                              __
          Check or money order enclosed:     |__|
                                              __
          MasterCard                         |__|
                                              __
          VISA                               |__|

          Card Number: ________________________

          Expiration Date: ____________________

          Signature: __________________________

          TAX ID #226-82-5633






                            PIANOMAN and PLAYER PIANO
                                  Users' Guide
                                   version 4.0

                             copyright 1986, 1988 by
                                Neil J. Rubenking
                                 _______ 
                            ____|__     |               (tm)
                         --|       |    |------------------- 
                           |   ____|__  |  Association of 
                           |  |       |_|  Shareware 
                           |__|   o   |    Professionals 
                         -----|   |   |--------------------- 
                              |___|___|    MEMBER


     PIANOMAN is a Shareware product.  It is available through Users Groups,
     Bulletin Boards, etc.  You have the opportunity to try the program at
     no charge to see if it meets your needs.  If you continue to use the
     program after evaluation,  please complete the registration form at the
     beginning of this document and send it with registration fee of $25 to:

          Support Group, Inc.
          P.O. Box 1577
          Baltimore, MD  21203

     You can also register by calling 800/USA-GROUP (800/872-4768, or
     301/889-7893) with your credit card ready.  When you register, you get
     a copy of the very latest version of the program and another diskette
     of sample tunes.  Your name will also be put into a database of
     registered users so that I can inform you of upgrades.

     If you have suggestions to make about the program, please let me know.
          Neil J. Rubenking
          86 Midcrest Way
          San Francisco, CA  94131

          CompuServe ID: 72267,1531

          MCImail: NRUBENKING

     Shareware will continue to exist only as long as you, the users,
     support it!
     PIANOMAN Users' Guide                                          page ii 
     =====================

               TABLE OF CONTENTS:

               WHAT IS PIANOMAN? . . . . . . . . . . . . . . .   1
                    Requirements . . . . . . . . . . . . . . .   1
                    Installation . . . . . . . . . . . . . . .   2
                    Command line options . . . . . . . . . . .   2

               PLAYING TUNES . . . . . . . . . . . . . . . . .   3

               TUNE EDITING  . . . . . . . . . . . . . . . . .   3
                    Help windows . . . . . . . . . . . . . . .   4
                    Play commands  . . . . . . . . . . . . . .   4
                    Moving around the tune . . . . . . . . . .   5
                    Goto and Markers . . . . . . . . . . . . .   5
                    Single-note commands . . . . . . . . . . .   5
                    Block commands . . . . . . . . . . . . . .   6
                    Global changes . . . . . . . . . . . . . .   6
                    File commands  . . . . . . . . . . . . . .   7

               TIPS ON CREATING TUNES  . . . . . . . . . . . .   8
                    Playing "by ear" . . . . . . . . . . . . .   8
                    Using sheet music  . . . . . . . . . . . .   8
                    Creating tunes for merging . . . . . . . .   9
                    Creating complicated tunes . . . . . . . .   9
                    Editing after a merge  . . . . . . . . . .  10

               WHAT IS PLAYER PIANO? . . . . . . . . . . . . .  11
                    MUZ file to EXE file . . . . . . . . . . .  11
                    EXE file to MUZ file . . . . . . . . . . .  12
                    MUS file to MUZ file . . . . . . . . . . .  12
                    MUZ file to MUS file . . . . . . . . . . .  12
                    MUZ file to SuperKey Macro . . . . . . . .  12
                    MUZ file to SPK file . . . . . . . . . . .  13
                    2-4 tunes into one . . . . . . . . . . . .  13
                         Fugue style . . . . . . . . . . . . .  13
                         Harmony style . . . . . . . . . . . .  14

               USING TUNES IN PROGRAMS . . . . . . . . . . . .  15

               WHAT IS SHAREWARE?  . . . . . . . . . . . . . .  16

               PIANOMAN QUICK REFERENCE CHART  . . . . . . . .  17


     PIANOMAN Users' Guide                                           page 1 
     =====================

     WHAT IS PIANOMAN?
     =================

     PIANOMAN lets you play the keyboard of an IBM-PC (or close compatible)
     like an electronic piano.  The keys sound a tone as long as you hold
     them down, and stop when you release them.  You can record and edit
     music, insert and delete notes, adjust pitch and length, make global
     changes, and save/retrieve files.

     Requirements
     ------------

     PIANOMAN runs on an IBM-PC/XT/AT or close compatible, running PC-DOS
     2.x or higher, with at least 160K of RAM, one disk drive, and a color
     or monochrome monitor.  PC-DOS, as opposed to generic MS-DOS, is a
     necessity -- if your compatible won't run PC-DOS, it's not compatible
     enough.  Based on limited testing, PIANOMAN does not work consistently
     on the new PS/2 computers, though some PS/2 systems run it success-
     fully.

     If you use DesqView or any other system that runs programs from EMS,
     you may notice a slight hesitation in the middle of VERY long compiled
     tunes.  This is due to DesqView swapping "pages" of memory and will
     only occur if the tune is over 64K -- that's more than 10,000 notes!

     The maximum number of notes PIANOMAN can keep in memory is 63,488 (64
     kilonotes minus 2,048 notes).  This maximum is available if you have
     over 450K of RAM.  If you seriously need more notes, I'd like to hear
     about it.

     PIANOMAN version 4 works well on a wider range of computers than
     previous versions.  Any computer that would run PIANOMAN 3.x or the
     alternate program PIANOALT should run PIANOMAN 4.0.  Also, version 4
     shares the keyboard with RAM resident programs (version 3 did not).  If
     the program will not run on your computer, you can do one of two
     things:  1) Give it to a friend who has an IBM-PC and forget it, or 2)
     jot me a note describing exactly what kind of system you have and
     exactly what happened when you tried to run PIANOMAN.  I can't promise
     to make it universally compatible, but if I get a good information
     base, I'll know where to start.

     Note that for PLAYER PIANO your CONFIG.SYS file MUST include the line
     "FILES=xx", where xx is a number greater than or equal to 10.  In most
     cases, the maximum "FILES=20" will be appropriate.  If you don't do
     this, you'll find that when you try to merge more than two voices into
     one, PLAYER PIANO reports a "Too many open files" error.  The PINST
     installation program checks to be sure you have enough files available.
     PIANOMAN Users' Guide                                           page 2 
     =====================

     Installation
     ------------

     You don't have to install PIANOMAN to run it.  The installation program
     PINST serves only to change some default values within the program. 
     These include the Black-and-White option, the default quarter-note
     length, and two keys that differ on different keyboards.  PINST also
     makes an empirical test to be sure your system will allow PLAYER PIANO
     to open five files at once and warns you if there's any problem.

     The Black-and-White option de-colorizes all of PIANOMAN and PLAYER
     PIANO's screens.  Everything will be white on black, grey on black, or
     black on white.  If you use PIANOMAN with a color/graphics adaptor
     attached to a single-color composite monitor, you may want to invoke
     this option.

     Command line options
     --------------------

     If you enter a filename on PIANOMAN's command line, it will automati-
     cally load that file.  E.g. "PIANOMAN CONCERT".  Also, you can select
     the Black-and-White options described above by including "/BW" on the
     command line.  If you've installed PIANOMAN for that option, you can
     temporarily reverse it by putting "/CO" on the command line.  You can
     also use the "/BW" and "/CO" options with PLAYER PIANO.
     PIANOMAN Users' Guide                                           page 3 
     =====================

     PLAYING TUNES
     =============

     Playing a tune with PIANOMAN is simple.  Type "PIANOMAN" at the DOS
     prompt.  You'll see a picture of the keyboard on your monitor, with the
     NOTES written on the keytops.  When you press a key, it lights up in
     the picture.  There are three octaves available at a time, and you can
     shift those octaves up or down using the up and down arrows -- note
     that the current octave number shows right between the arrows.  The A#,
     B, and C notes at the right of the lower row are the same notes as
     those at the left of the upper row.  If the piece you want to play has
     flats instead of sharps, just remember that in an "even tempered" scale
     like PIANOMAN's, one note FLAT is the same as the note below it SHARP.

     Press <Scroll Lock> to turn "Legato mode" on and off.  With legato ON,
     each note sounds until you press the next.  With it OFF, notes stop
     when you release the key.  <Home> turns recording on and off, <Ins>
     plays back the tune, and <Del> erases your recording.  The notes you
     play always add to the END of the current tune unless you erase it and
     start fresh.

     PIANOMAN's keyboard layout matches that of the standard IBM PC
     keyboard.  If your keyboard has a different layout, a few of the keys
     may be displaced -- usually the <Esc> and "\" keys.  If just those two
     keys are wrong, PINST will install the correct keys for you.


     TUNE EDITING
     ============

     When you press the "Record" key, the tune you play gets saved in
     memory, and you can play it back at will.  Once you have recorded a
     tune, hit the <F1> key to edit.  In this mode you see each note dis-
     played in detail, and you can change individual notes, blocks of notes,
     or the entire tune.

     The editing mode is much like a word processor.  You can insert and
     delete notes, adjust pitch and length, make global changes, and
     save/retrieve files.  You can even mark blocks of notes to delete,
     copy, or move.  Five small help screens and five larger, more detailed
     screens are always available to remind you of the editing commands. 
     You may also want to print out the Quick Reference Chart at the end of
     this document.

     PIANOMAN Users' Guide                                           page 4 
     =====================


            =+======+=
             |G   6 |
             |3  320|
            =+======+=

     When you hit F1 from the keyboard display, you get quite a different
     view of your tune.  Sixty notes at a time show on the screen, with the
     note, octave, duration, and "staccato value" shown.  In the sample box
     above, the note is "G" in octave 6.  Its duration is 320 milliseconds,
     and it has a stacatto value of 3.  (The staccato value runs from 0 to
     9.  A value of 0 means that the note plays during its entire duration,
     a value of 9 means that it plays only 1/10 of its duration, and is
     silent the other 9/10.)  The current note will be highlighted, and you
     will see a help window at the bottom of the screen.

     You control the PIANOMAN editor with command keys.  There are no menus,
     and every command is always available.  In general, plain unshifted
     keys control single-note commands; e.g. <T> (or <t>) makes the current
     note a Triplet.  <Alt> key combinations (represented by putting a tilde
     ~ before the character) control global commands; e.g. ~T changes the
     Tempo of the piece.

     Help windows
     ------------

     There are five small help windows -- pressing ~H (Alt plus H) or the
     <?> key cycles through them.  These windows list all of the editing
     keys in related groups.  In addition, pressing <F1> gets you a more
     detailed help window that further explains the commands in the current
     small help window.  If you have trouble remembering a particular type
     of command, just cycle to the corresponding small help window and leave
     it on the screen.

     Play commands
     -------------

     ~P will Play the tune, starting at the highlighted note.  If you hit a
     key while it's playing, it stops and highlights the note that was
     playing.  Thus, you can listen to a piece and hit a key if you hear a
     wrong note.  If there is a marked block, it will play that block from
     the start.  To "step thru" a tune note by note, use ~Note play.  For
     your convenience, each time you hit ~N, the highlight advances to the
     next note.  You can also use <F9> for Note play and <F10> for Play --
     the single keys may be handier.

     PIANOMAN Users' Guide                                           page 5 
     =====================

     Moving around the tune
     ----------------------

     The keypad keys work as you might expect -- the four arrow keys move
     one square at a time, and <Home> and <End> go to the beginning and end
     of the line.  <PgUp> and <PgDn> move by 60-note screens.  <Ctrl><Home>
     and <Ctrl><End> move to the top and bottom of the current screen, and
     <Ctrl><PgUp> and <Ctrl><PgDn> go to the top and bottom of the tune. 
     <Del> deletes the highlighted note -- unlike PIANOMAN 3, the highlight
     remains in the same position.  <Ins> inserts a note before the high-
     lighted note.  The inserted note will always be a Rest, with a length
     equal to the current quarter-note length.

     Goto and Markers
     ----------------

     Press ~A to Add a marker.  You'll see a list of available markers, e.g.
     "(2456789)".  If you choose a number NOT shown as available, you will
     remove the current marker of that number and establish a new one.  A
     marker is like a non-playing note -- you can use them to mark areas of
     interest in your tune.  You can delete them individually or in a block,
     or move them in a block move, but you can't copy them.  If you copy a
     block that contains markers, the new copy of the block won't have the
     markers in it.

     Press ~G to Go to a particular note, jump forward or back by a certain
     number of notes, or go directly to a Marker.  If you simply type a
     number, you'll go to that note.  If you enter a <+> or <-> ahead of the
     number, you'll jump forward or back that many notes.  If you press <M>,
     you'll see a list of markers you can go to.  Press the number cor-
     responding to the marker you want, or <N> or <P> to jump to the next or
     previous marker.

     Single-note commands
     --------------------

     Commands that act only on the highlighted note use single, unshifted
     keystrokes.  These serve to adjust the pitch and duration of one note
     at a time.  They are all mnemonics -- the first letter of the word they
     represent.  Note lengths are <w>hole, <h>alf, <q>uarter, <e>ighth,
     <s>ixteenth, and <3>2nd.  You can change these to <t>riplets (multiply
     duration by 2/3) or <.> dotted notes (multiply duration by 3/2).  To
     get other note lengths, hit <a> for <a>djust length and simply type in
     the desired length.

     Sometimes you may want to work your way through a whole piece setting
     the length of every note.  In that case you'll want to turn "adVance
     mode" on by pressing ~V.  You'll notice an arrow appearing at the top
     right corner of the screen.  When advance mode is on, pressing any of
     the note length keys (<w>, <h>, <q>, <e>, <s>, <3>) will advance the
     PIANOMAN Users' Guide                                           page 6 
     =====================

     highlight.  Also, pressing <.> or <t> will cause the PREVIOUS note to
     be dotted or triplet, but only if the last key you pressed was a length
     key.  It sounds a bit complicated, but once you get used to it you'll
     find it MUCH faster to enter note lengths with adVance mode on.  To
     turn it off, just press ~V again -- the arrow will disappear.

     <R>aise and <f>lat change the pitch one half-tone, and <u>p and <d>own
     by one octave.  Whenever you use one of these four keys, you'll hear a
     brief >pip< at the new pitch, so you can adjust the tune "by ear". 
     Raising a rest makes it a C in octave 5, flatting it gives a B in
     octave 4.  To change the current note into a rest, hit the <-> key.

     Block commands
     --------------

     Like a word processor, PIANOMAN allows you to mark and manipulate
     blocks.  Hit ~B (Alt-B) to Begin and ~E to End your block.  SideKick
     fans will be pleased to see that F7 and F8 also serve to mark a block. 
     To delete the marked block, use ~D.  PIANOMAN will ask you to confirm
     the deletion.  To replicate the marked block at the current cursor
     position, use ~C for Copy.  To Move it to the current position, press
     ~M.  Note that the Move is equivalent to copy and then delete -- if
     your tune is approaching the maximum number of notes, you may not have
     enough space to Move a block.  You cannot Copy or Move if the highlight
     is INSIDE the block -- naturally!

     ~U for Un-mark toggles marking on and off.  Most of the global commands
     act only on the block, if there is one, so it's important to turn block
     marking OFF when you're not using it.  Even if the marked section isn't
     on-screen, you'll see a BLOCK indicator in the lower right portion of
     the screen.

     When you delete a block, any markers within that block get deleted
     also.  When you move a block, the markers move with it.  And when you
     copy a block, the markers stay with the original block.

     Global changes
     --------------

     You can adjust the ~Tempo, ~Key, ~Octave, or ~Staccato value of your
     tune globally by pressing Alt plus the appropriate key.  For example,
     you might want to make it 1.5 times as fast, and one octave higher.  If
     you have a block marked, these operations affect only the marked block. 

     Other global changes are ~Quarter-note length, ~Length round-off,
     ~Identicalize, ~Join, and ~Zap out rests.  Resetting the quarter-note
     length has no immediate effect, but it controls what length you get
     when you hit one of the single-note command keys.  Also, if you select
     ~Identicalize, all the notes get set to the length you select.  If you
     hesitate a long time between the notes of a difficult piece, you may
     PIANOMAN Users' Guide                                           page 7 
     =====================

     want to make all the lengths short before trying to edit it.  ~Join may
     be handy after you merge several tunes using PLAYER PIANO -- it merges
     any two adjacent notes with identical pitch and octave.  ~Zap rests
     removes all rests from the tune, adding the length of each rest to the
     preceding note.

     One more global command gives you information to help you write
     multiple voice tunes for PLAYER PIANO.  This is the ~X command, for
     eXamine.  When you press ~X, PIANOMAN analyzes the tune and reports the
     Greatest Common Divisor (GCD) of the notes.  (The GCD is the largest
     number that divides evenly into the length of every note in the tune.) 
     It also reports the total length of the tune.  In order to merge
     several tunes with PLAYER PIANO, they all must have exactly the same
     total length, and they must have a mutual GCD of a certain minimum
     value.  This value is 10 times the number of voices.  In other words,
     the individual time slice can't be less than 10.

     File commands
     -------------

     You can save your PIANOMAN tunes to disk -- the files will always have
     the extension MUZ, for MUZic.  Previous versions of PIANOMAN used the
     extension MUS, but PIANOMAN 4.0 uses a different file format.  If you
     save a file with a name that already exists, you'll be asked whether
     you want to <O>verwrite the file, <A>dd to it, or <P>ick another name
     (the default is Overwrite).  You can build up complicated tune files
     piece by piece using the <A>dd option.

     When you want to retrieve a file, you can enter its exact name and get
     it directly.  If you don't quite know the name, or want to see all the
     MUZ files, you can enter a "wild-card" template.  For example, if you
     entered "C:\PIANOMAN\TUNE\*.*", you'd get a list of all the files in
     that directory.  "LO*.*" will get you a listing of all the MUZ files in
     the current directory that start with "LO", and so on.  If you just hit
     <Return> at the "Filename:" prompt you'll get a file listing to choose
     from.

     The PIANOMAN file listing displays all matching MUZ files in the
     current directory plus any subdirectories.  Subdirectories show up in a
     lower intensity color and have a "\" at the end.  If you highlight a
     subdirectory and hit <Return>, you'll get a listing of that subdirec-
     tory.  If the current directory is a subdirectory, you can choose
     "{parent}\" to switch to the parent directory.

     SideKick fans take note -- <F2> is an alternate key to save a file, and
     <F3> is an alternate for retrieve.  Also, you can save and retrieve
     your files directly from the keyboard picture screen using the <F2> and
     <F3> keys.

     PIANOMAN Users' Guide                                           page 8 
     =====================

     TIPS ON CREATING TUNES
     ======================

     There are two basic methods you'll use to create tunes.  You can simply
     play the tune on the keyboard by ear, or you can use sheet music. 
     Also, you may enter several voices with the intention of using PLAYER
     PIANO to merge them.  Here are some tips for each method.

     Playing "by ear"
     ----------------

     Adjust the octave so that you can avoid playing a lot of notes at the
     low end of the top row and the high end of the bottom row.  Crossing
     that break between the two rows of keys can be confusing.  Play the
     tune as well as you can, ignoring wrong notes.  If you turn LEGATO on,
     PIANOMAN will not generate rests between your notes.

     Hit the playback key <Ins>.  If you played extremely well, with no
     wrong notes, you may be finished!  However, most of us need to do a
     little work in the editing mode.  Shift into that mode and try playing
     through the piece with ~P or <F10>.  If you hear a sour note, tap any
     key to stop the playing and fix the wrong note.  Of course you can
     delete extraneous notes or insert missing ones too.

     Using sheet music
     -----------------

     Unless you're an expert sight-reader, you'll find it easiest to just
     enter the notes first and fix their lengths later.  Follow along in the
     sheet music, pressing the correct key for each note.  Don't worry about
     length -- just find the next note and press it.  When you're done, go
     into the editing mode.

     In the editing mode, use ~I to make all the notes short -- 60 to 80
     will be good.  Now tap through the piece (use <F9> -- it's easier) a
     note at a time, confirming that the notes match those on the sheet
     music.  Finally, go back to the top of the piece and start entering the
     lengths.  Stop after the first few lines and play them back.  If the
     tempo sounds wrong, adjust the ~Quarter note length and redo those
     lines.  Or, if you prefer, enter the lengths for the whole piece first
     and then adjust the global tempo with the ~T command.

     Sometimes you'll want to enter a note length that's not built in to
     PIANOMAN.  For example, you may have a half-note tied to an eighth-
     note.  Rather than try to calculate the appropriate length and enter it
     with Adjust, use Join.  Enter both the notes, mark just the two notes
     as a block, and press ~J for Join.  That will create a single note of
     the length you want.

     PIANOMAN Users' Guide                                           page 9 
     =====================

     Creating tunes for merging
     --------------------------

     You need to be very accurate if you want to merge several voices into
     one tune.  Hence in most cases you will be copying the tunes from sheet
     music.  Some tunes have 2 to 4 clear and distinct parts.  For example,
     Bach's Two-Part Inventions have exactly two parts.  Choral music often
     has four parts for Soprano, Alto, Tenor, and Bass.  If the music you
     plan to merge is of this type, simply treat each part as described
     under "Using Sheet Music" above.  As you finish each part, use the
     eXamine option to calculate the total length and GCD.  Naturally all
     your parts must be exactly the same length.  If you plan to use the
     Harmony style, they must also have an appropriate Greatest Common
     Divisor.  See the discussion of the harmony style below for an explana-
     tion of the GCD.

     Remember that PLAYER PIANO can't take Staccato values into account when
     merging tunes.  That would make calculating the "time slices" much more
     difficult!  If you want to give an impression of short notes in a
     merged tune, simply insert rests between the notes.

     You will find pieces of music that simply don't fall easily into parts. 
     My own technique in such cases is to make a Xerox of the sheet music
     and mark it with colored pencils.  I use one color for each voice, and
     I draw a continuous line through the notes that I assign to that voice. 
     A certain amount of musical training is helpful here!  Having marked up
     the sheet music, you then enter the voices.  Note that they may sound
     very odd individually, but if you've drawn your lines well the final
     merged tune will sound good.  I entered the William Tell Overture into
     PIANOMAN using this method (the file WILLTELL.MUZ is on the extra tunes
     disk that you get when you register).

     Creating complicated tunes
     --------------------------
     Some tunes will change orchestration throughout, going from solo
     passages, to two voices, to three or four, and so on.  To create such a
     tune in PIANOMAN, you may want to record it in sections and build the
     main tune out of those sections.  One way to build the final tune from
     sections is to retrieve them into memory in order, using the <A>dd
     option.  Then save the completed tune.  Another way is to retrieve each
     section individually and save it to the main file using the <A>ppend
     option.  A round such as "Row, Row, Row Your Boat" is a good example of
     this kind of tune.  In the first measure, there's just one voice.  Next
     a second voice joins in, then a third and fourth.  Then each voice in
     turn drops out.

     PIANOMAN Users' Guide                                          page 10 
     =====================

     Editing after a merge
     ---------------------

     After you use PLAYER PIANO to merge several voices into one, you may
     want to edit the resulting tune.  Two PIANOMAN commands are especially
     handy here; ~Zap rests and ~Join identical notes.  The former takes
     each rest and deletes it, adding its length to the note before it.  The
     latter merges any adjacent identical notes.  In some cases these
     commands will substantially reduce the size of your merged tune. 
     However, you will definitely have to edit the merged tune by hand after
     using either of these commands.  There are places where you really WANT
     a rest, or where two identical adjacent notes should NOT be merged.

     PLAYER PIANO Users' Guide                                      page 11 
     =========================

     WHAT IS PLAYER PIANO?
     =====================

     PLAYER PIANO is a conversion utility to expand the horizons of your
     PIANOMAN tunes.  It performs eight types of conversion:

          1) Tune into self-running program (EXE file)
          2) EXE file back into tune
          3) Old MUS file into MUZ file
          4) MUZ file back into MUS file
          5) Tune into SuperKey macro
          6) Tune into input for SPKR.SYS driver (see below)
          7) 2 to 4 tunes into one polyphonic tune (Fugue style)
          8) 2 to 4 tunes into one polyphonic tune (Harmony style)

     In each case you can either type in the name of the tune to convert, or
     pick it from a directory window identical to that of PIANOMAN.  To
     start the program, type PLAYRPNO at the DOS prompt.  

     MUZ file to EXE file
     ----------------------

     Select this mode to create a program that will play your tune for
     anyone, regardless of whether they have PIANOMAN.  You can fill in up
     to nine lines of title information, which will be boxed and centered on
     the screen when your tune-program plays.  The resulting program file is
     yours to do with what you will.

     You may choose not to have a title screen, in which case the compiled
     tune will not affect the display at all.  You also have a choice of
     whether the tune will repeat or not and whether a keystroke will stop
     it.  It's possible to use a tune that stops with a keystroke as a kind
     of timed "wait" statement in a batch file.  The tune will play,
     catching the user's attention, and the batch file will continue either
     when the user presses a key or when the tune ends.

     PLAYER PIANO 4.0 tunes are better than those created by older versions
     of PLAYER PIANO.  They automatically adjust their speed to that of the
     computer they're running on.  This improvement is due to the great help
     I received from lferris, "The Hunter's Helper"!

     PLAYER PIANO Users' Guide                                      page 12 
     =========================

     EXE file to MUZ file
     ----------------------

     Starting with version 4, you can convert compiled tunes back into MUZ
     files.  If you have a compiled tune that someone else wrote, you can
     DEcompile it and change it to your satisfaction.  Do note that the
     decompiled tune will not be identical to the original, because in the
     compiling process any series of rests gets converted into a single
     rest.  That includes the "implied rest" at the end of a note with a
     non-zero Staccato value.

     MUS file to MUZ file
     ----------------------

     The tunes you created with earlier versions of PIANOMAN aren't wasted. 
     You can convert them easily to the new format.  Note that MUZ files are
     about 1/5 smaller than the old MUS files.

     MUZ file to MUS file
     ----------------------

     You can even convert your MUZ files back into MUS files, in case you
     want to share them with a friend who has an older PIANOMAN.  But why
     not share a copy of version 4 with them also?!

     MUZ file to SuperKey Macro
     ---------------------------

     Yes, it can be done.  SuperKey has a "Beep" function that allows you to
     beep at any pitch and duration -- exactly like a PIANOMAN note.  The
     macro generated by PLAYER PIANO is a text file with a place in it for
     you to add a descriptive screen.  Load it, press the proper key, and
     wow!  music for whatever you're doing.  The keystroke to STOP a macro
     playing is <Ctrl><Esc>.

     The MAC file created by PLAYER PIANO is fairly large -- one line per
     note.  If you want to create BIG tunes for SuperKey, you will either
     have to expand your macro memory space or compress the tune.  How to
     compress it?  There are several ways.  First, you can find the most
     common notes and define them as single keys, e.g.:

          <BEGDEF><Alt1><CMD>FB1044 1044 4<CMD><ENDDEF>

     Now wherever that note appeared, substitute <Alt1>.  To help you do
     this kind of compression, PLAYER PIANO appends a simple chart of the
     occurrences of different notes to the end of the .MAC file.  It's
     beyond the final <ENDDEF>, so SuperKey ignores it.  

     PLAYER PIANO Users' Guide                                      page 13 
     =========================

     You can also represent repeated sections of the tune by a single key. 
     Define a particular key to be the sequence of beeps that make up one
     section, and replace every occurrence of that section with the single
     key.  

     If you have a moderately recent copy of SuperKey, you have an example
     of a HIGHLY compressed tune.  On the SuperKey disk, see INVENTN4.MAC. 
     It wasn't easy to get the whole two-part invention to fit in the
     default 8K macro space!

     MUZ file to SPK file
     ----------------------

     On your PIANOMAN disk you will find a file called SPKR.SYS and its
     documentation SPKR.DOC.  These copyrighted files were written by Chris
     Dunford, owner of Cove Software.  I present them here with his permis-
     sion as an enhancement to PIANOMAN.  When you install SPKR, as ex-
     plained in SPKR.DOC, it becomes a device like PRN or CON.  You can
     write notes to it and it will play them IN THE BACKGROUND while your
     computer does other things.  SPKR can only hold 128 notes, and the
     lengths must be multiples of 55 for best results.  After creating a SPK
     file, you can hear it by typing "COPY FILENAME.SPK SPK" at the DOS
     prompt.  You can write to SPK from within a program by simply opening a
     text file called "SPK".  E.g., in Turbo Pascal:
          Assign(TextFile,'SPK');
          ReWrite(TextFile);

     2-4 tunes into one
     ------------------

     You will notice that many of the sample tunes sound like they have
     several different "voices" in them.  This is not strictly true -- the
     PC plays ONE note at a time.  But by switching rapidly between notes,
     PIANOMAN gives the illusion of polyphony.  Before you can use PLAYER
     PIANO in this way, you have to carefully prepare the individual "voice"
     tunes.

     Fugue style
     -----------

     This style requires that each of the 2 to 4 input files have exactly
     the same number of notes, and that every note be the same length.  This
     is a reasonable requirement for many Bach fugues, and it also works
     fairly well for ragtime pieces.  PLAYER PIANO will let you know if one
     of the input files has a problem.  The output is a tune that simply
     takes a "slice" of each voice for each note.  You can use the eXamine
     option in PIANOMAN to determine the length of each tune in advance.

     PLAYER PIANO Users' Guide                                      page 14 
     =========================

     Harmony style
     -------------

     If you need a more chord-like sound, or if it just doesn't make sense
     to divide up the voices into notes of equal length, use this mode.  The
     requirements are:  1) all the input tunes must TOTAL the same length,
     and 2) the note lengths must all have a common divisor, greater than or
     equal to 10 times the number of voices.  PLAYER PIANO needs this common
     divisor to figure out when the "slices" begin and end.  You can use the
     eXamine option in PIANOMAN to find the Greatest Common Divisor (GCD) of
     each individual voice and its total length.

     If the divisor found is large -- say, over 100 -- you may want to use a
     smaller figure.  Any large enough FACTOR of the divisor is allowed, and
     you will have a chance to select one.

     The output of this operation is another MUZ file consisting of LOTS of
     notes, all the same length.  You will probably want to send this file
     back to PIANOMAN for further editing, to smooth out the sound of it. 
     The ~Zap and ~Join options can be helpful here, but if you use them you
     will almost certainly have to do some hand-editing.  In order to avoid
     going back and forth between PIANOMAN and PLAYER PIANO, use the eXamine
     option in PIANOMAN to make sure your tunes are the same length before
     running PLAYER PIANO on them.
     PLAYER PIANO Users' Guide                                      page 15 
     =========================

     USING TUNES IN PROGRAMS
     =======================
     There are several ways to incorporate PIANOMAN tunes in programs you
     write.  First, if you are using an all-purpose language like Pascal,
     BASIC, or C, you can simply read the MUZ file and play the tune
     directly.  On the PIANOMAN distribution disk the directory TP4 contains
     an example in Turbo Pascal 4.0.  This example makes the file structure
     clear, so even if you use another language you should have no trouble.

     The other method, useful in BATch programming, dBASE, and other more
     specialized languages, is to create a EXE file using PLAYER PIANO and
     RUN the file.  You can choose whether to have a title screen, whether
     to let the user stop the tune with a key, and so on.  As long as your
     language has a RUN command or the equivalent, you can do this.

     Finally, if you want music but don't want it to stop the other workings
     of your program, consider installing SPKR.SYS.  This device driver is
     described under the "MUZ to SPK" option of PLAYER PIANO.  If your
     language allows you to write to DOS devices, you can send up to 128
     notes to the SPK device.  These notes will play while your program
     continues execution.
     WHAT IS SHAREWARE?
     ==================
     (Definition supplied by the Association of Shareware Professionals)

     Shareware distribution gives users a chance to try software before
     buying it.  If you try a Shareware program and continue using it, you
     are expected to register.  Individual programs differ on details --
     some request registration while others require it, some specify a
     maximum trial period.  With registration, you get anything from the
     simple right to continue using the software to an updated program with
     a printed manual. 

     Copyright laws apply to both Shareware and commercial software, and the 
     copyright holder retains all rights, with a few specific exceptions as
     stated below.  Shareware authors are accomplished programmers, just
     like commercial authors, and the programs are of comparable quality.
     (In both cases, there are good programs and bad ones!)  The main
     difference is in the method of distribution.  The author specifically
     grants the right to copy and distribute the software, either to all and
     sundry or to a specific group.  For example, some authors require
     written permission before a commercial disk vendor may copy their
     Shareware. 

     SO, Shareware is a distribution method, not a type of software.  You
     should find software that suits your needs and pocketbook, whether it's
     commercial or Shareware.  The Shareware system makes fitting your needs
     easier, because you can try before you buy.  And because the overhead
     is low, prices are low also.  Shareware has the ultimate money-back
     guarantee -- if you don't use the product, you don't pay for it.
                         PIANOMAN QUICK REFERENCE CHART

     Note lengths:            <Ins>ert a note         File commands:
     =============            <Del>ete a note         ==============
     <w>hole                                          <~F>ile save    [F2]
     <h>alf                   Global changes:         <~R>etrieve     [F3]
     <q>uarter                ===============
     <s>ixteenth              <~K>ey change           Various:
     <3>2nd                   <~O>ctave change        ========
     <.> dotted               <~S>taccato change      <~P>lay tune    [F0]
     <t>riplet                <~T>empo                <~N>ote play    [F9]
     <a>djust note length     <~Q>uarter-note length  <~H>elp         [F1]
     <m>ore staccato          <~Z>ap out rests        <~A>dd marker
     <l>ess staccato          <~L>ength round-off     <~G>oto
                              <~I>denticalize         <~J>oin
     Note Pitch:                                      e<~X>amine
     ===========              Block commands:
     <r>aise                  ===============         +--------------------+
     <f>lat                   <~B>egin block [F7]     |<k> means to just   |
     <u>p octave              <~C>opy block  [F8]     |  press key "k"     |
     <d>own octave            <~D>elete block         |                    |
     <-> make note a rest     <~E>nd block            |<~K> means press    |
                              <~U>N-mark block        |  "Alt" plus key "K"|
                                                      +--------------------+




```
{% endraw %}

## SPKR.DOC

{% raw %}
```
                               V1.01 22 Mar 1986

                           SPK Device Documentation
                           ------------------------

        Purpose
        -------

        SPKR.SYS is a DOS installable device driver that allows any
        application to produce arbitrary pitch/duration sounds on the
        PC's speaker.  SPKR requires DOS 2.0 or later and an IBM PC
        compatible machine.


        Installation
        ------------

        To install SPKR, follow two steps: place the file SPKR.SYS in
        the root directory of your boot diskette or hard disk, and
        modify the CONFIG.SYS file to include the statement
        "device=spkr.sys".

        In case you are not familiar with CONFIG.SYS: this is a small
        text file that DOS reads when booting.  It contains various
        pieces of information that DOS and other programs can use when
        setting themselves up.  Look in the root directory of your boot
        disk for the file CONFIG.SYS.  If no such file exists, just
        type:

                copy con \config.sys<Enter>
                device=spkr.sys<Enter>

        Then press Ctrl-Z (you'll see "^Z") and <Enter>, and you're
        done.

        If you already have a CONFIG.SYS file (which is likely), you
        must edit it to include the statement "device=spkr.sys".  Do
        this using your text editor or word processor in text mode (or
        Edlin, heaven forbid).  Retain all existing information, and add
        the new line.

        Now reboot your machine.  If all goes well, it will boot as
        usual.  There will be no immediate indication that anything has
        happened, except that you will see SPKR's logo and copyright.

        If you have a hard disk and wish to place SPKR.SYS in a
        directory other than the root, you may do so.  Just alter the
        CONFIG.SYS statement to reflect the full path where SPKR.SYS can
        be found.


        Using the SPK device
        --------------------

        When DOS finds the "device=spkr.sys" line in config.sys, it
        loads and installs the SPKR.SYS program as a virtual device.
        What this means, practically speaking, is that there is now a
        new "device" attached to your PC. You already have several
        devices installed: CON, PRN, COM1 and COM2, AUX, your disk
        drives, and possibly a RAM (or virtual) disk if you have
        installed VDISK.SYS or another disk emulator.

        The new device is known to DOS by the name "SPK" (note: this is
        NOT "SPKR", it's "SPK", no R).  Like other output devices, you
        can write (send information) to the device.  SPK is an "output
        only" device like a printer: you can send information to it, but
        you cannot receive information from it.

        To use SPK, you must send a series of frequencies and durations
        to the SPK device.  Durations are measured in PC clock ticks,
        which occur about 18.2 times per second; thus, for example, a
        duration of 18 is about one second.

        The syntax of data sent to SPK is:

            {<frequency>,<duration>;}<CR>

        The {} means that you can send one or more sequences of
        frequency and duration to the device.  The <CR> is a carriage
        return, ASCII code 13.

        Here are two examples of valid sequences for SPK:

            1000,18;<CR>
                Make a 1000 cps tone for one second

            1000,18;2000,36;<CR>
                Make a 1000 cps tone for one second, then a
                2000 cps tone for two seconds.

        A frequency of 0 is a "rest": no sound will be issued for the
        specified duration.

        SPK's sounds are played in background.  That is, control is
        returned immediately to the program that sends data to SPK (the
        "foreground" program).  The sounds will be played while
        foreground execution continues.

        There are many ways to send information to SPK.  The simplest is
        to do it right from the keyboard, at the DOS prompt:

                copy con spk<Enter>
                1000,18<Enter>
                ^Z<Enter>

        The "copy con spk" command tells DOS that you want to copy input
        from the console input (the keyboard) to the SPK device (the
        speaker).  The keyboard input "1000,18<Enter>" is copied to the
        SPK device when you hit the Ctrl-Z (end of copy) and <Enter>
        (execute) keys.

        Another way to write to the device is to copy a small textfile
        to SPK.  For example, type

                copy con spkdemo.txt<Enter>
                1000,10;2000,5;<Enter>
                ^Z<Enter>

        You should now have a small textfile called SPKDEMO, the
        contents of which are "1000,10;2000,5".  To send it to the
        speaker (sounding two tones), just type

                copy spkdemo.txt spk
                        or
                type spkdemo.txt > spk

        You could, of course, put either of those two commands in a DOS
        batch file.

        It is also possible to send data to SPK from high level
        languages or from assembler programs.  The following examples
        lack error checking for conciseness; you should add checks to
        ensure that the SPK device is installed (typically by trapping
        for an error in opening the file "SPK").

        In BASIC:

                10 FREQ=1000: DUR=10: GOSUB 1000
                20 END
                1000 'Sound speaker at FREQ for DUR
                1010 OPEN "SPK" FOR OUTPUT AS #1
                1020 PRINT #1, FREQ;",";DUR;";"
                1030 CLOSE 1
                1040 RETURN

                This is a bit superfluous in BASIC, however, since
                BASIC's "SOUND" statement provides essentially the
                same function.  The main difference is that SPK's
                sounds play in background.


        In C:

                spkr (freq, dur)
                unsigned freq, dur;
                {
                FILE *spk, *fopen();

                        spk = fopen("SPK","w");
                        fprintf (spk, "%u,%u;\n", freq, dur);
                        fclose(spk);
                }


        In Turbo Pascal:

                Procedure Spkr (Freq, Dur: Integer);
                Var f: Text;
                Begin
                    Assign (f, 'SPK');
                    Rewrite (f);
                    WriteLn (f, Freq, ',', Dur, ';');
                    Close (f)
                End;


        SPK and PCED
        ------------

        If you are using the PCED command interface, you can send data
        to the speaker using the SEND user-installed command:

            SEND SPK 1000,10;2000,5;\13


        Limits
        ------

        Valid frequencies are 0 (rest), and 20 through 30000.  Only your
        dog will hear frequencies above approximately 15000 cps.

        Valid durations are 1 through 65535 (about an hour).

        All numeric input is treated modulo 65536; that is, if you
        specify a number larger than 65536, SPKR will actually use the
        remainder of your input divided by 65536.

        If your input is outside of the valid range, it will be
        converted to the highest or lowest value, as appropriate.  Thus,
        e.g., a frequency of 35000 will be changed to 30000.

        SPK can store up to 128 frequency/duration pairs.  Additional
        sounds will be discarded.

        There is a limit of 255 characters per input line to SPKR (i.e.,
        maximum of 255 characters sent before a carriage return).  Data
        beyond 255 characters will be discarded.

        Any data sent to SPK other that '0' through '9', ';', ',', and
        carriage returns are ignored.

        Invalid frequency/duration pairs are discarded.


        Frequency Chart
        ---------------

        Here is an approximate frequency chart:

            A  440           E 659
            B  494           F 698
            C  523           G 784
            D  587

        The 523 Hz "C" is middle C.  To increase a note by one octave,
        double the frequency; to decrease by one octave, halve it.



        Copyright/License/Warranty
        --------------------------

        This document and the current version of the program file
        SPKR.SYS ("the software") are copyrighted by the author.  The
        copyright owner hereby licenses you to: use the software; make
        as many copies of the program and documentation as you wish;
        give such copies to anyone; and distribute the software and
        documentation via electronic means.

        However, you are specifically prohibited from charging, or
        requesting donations, for any such copies, however made.  An
        exception is granted to recognized not-for-profit user's
        groups, which are authorized to charge a small fee (not to
        exceed $7) for materials, handling, postage, and general
        overhead.  NO FOR-PROFIT ORGANIZATION IS AUTHORIZED TO CHARGE
        ANY AMOUNT FOR DISTRIBUTION OF COPIES OF THE SOFTWARE OR
        DOCUMENTATION.

        No copy of the software may be distributed or given away without
        this document; and this notice must not be removed.

        There is no warranty of any kind, and the copyright owner is not
        liable for damages of any kind.  By using the software, you
        agree to this.

        The software and documentation are:

                             Copyright (c) 1986 by
                            Christopher J. Dunford
                           10057-2 Windstream Drive
                           Columbia, Maryland 21044
                                (301) 992-9371
                             CompuServe 76703,2002
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0279

     Volume in drive A has no label
     Directory of A:\

    FILES279 TXT      1616   8-02-88  12:05p
    MANUAL   BAT        23   6-03-88   8:36a
    PIANOMAN DOC     43178   4-15-88  12:00p
    PIANOMAN EXE     74587   4-15-88  12:00p
    PINST    EXE     30021   4-15-88  12:00p
    PLAYRPNO EXE     68437   4-15-88  12:00p
    README            1619   4-15-88  12:00p
    SPKR     DOC     10104   4-15-88  12:00p
    SPKR     SYS      1692   4-15-88  12:00p
    TRAPEZE  SPK       781   4-15-88  12:00p
    PLAYDEM1 MUZ        96   4-15-88  12:00p
    PLAYDEM1 OBJ       154   4-15-88  12:00p
    PLAYDEM2 MUZ       204   4-15-88  12:00p
    PLAYDEM2 OBJ       262   4-15-88  12:00p
    PLAYDEMO PAS       724   4-15-88  12:00p
    PLAYIT   PAS      3335   4-15-88  12:00p
    AULD     MUZ      1948   4-15-88  12:00p
    BATTLE   MUZ       356   4-15-88  12:00p
    BLAZES   COM      5406   4-15-88  12:00p
    BRIDE    MUZ      1832   4-15-88  12:00p
    BROWNJUG MUZ       288   4-15-88  12:00p
    CALIF    MUZ      1784   4-15-88  12:00p
    CMINOR   MUZ      4432   4-15-88  12:00p
    COLT45   COM      1086   4-15-88  12:00p
    COLT45   MUZ       108   4-15-88  12:00p
    CORONAT  MUZ      6172   4-15-88  12:00p
    DAISY    MUZ       240   4-15-88  12:00p
    DOG      MUZ       820   4-15-88  12:00p
    DOXOLOG  MUZ      2680   4-15-88  12:00p
    DOXOLOG1 MUZ       176   4-15-88  12:00p
    DOXOLOG2 MUZ       180   4-15-88  12:00p
    DOXOLOG3 MUZ       184   4-15-88  12:00p
    DOXOLOG4 MUZ       180   4-15-88  12:00p
    ENTERTN  MUZ      2564   4-15-88  12:00p
    ENTERTN1 MUZ       668   4-15-88  12:00p
    ENTERTN2 MUZ       668   4-15-88  12:00p
    ENTERTN3 MUZ       668   4-15-88  12:00p
    ENTERTN4 MUZ       668   4-15-88  12:00p
    GIPSY    MUZ       696   4-15-88  12:00p
    GODSAVE  MUZ      1124   4-15-88  12:00p
    HABANERA MUZ       796   4-15-88  12:00p
    HAIL     MUZ       548   4-15-88  12:00p
    HAILHAIL MUZ       184   4-15-88  12:00p
    HITCHKOK MUZ       400   4-15-88  12:00p
    HOME     MUZ      1572   4-15-88  12:00p
    HORNPIPE MUZ       460   4-15-88  12:00p
    INVENTN4 MUZ      2684   4-15-88  12:00p
    IRISHB   COM      5826   4-15-88  12:00p
    JOLLY    MUZ       984   4-15-88  12:00p
    LIST              4070   4-15-88  12:00p
    LULLABYE MUZ       252   4-15-88  12:00p
    MARSEIL  MUZ       752   4-15-88  12:00p
    MASTER   MUZ      1688   4-15-88  12:00p
    MONTY    COM      2904   4-15-88  12:00p
    MONTY    MUZ      1332   4-15-88  12:00p
    MONTY1   MUZ       360   4-15-88  12:00p
    MONTY2   MUZ       312   4-15-88  12:00p
    MONTY3   MUZ       364   4-15-88  12:00p
    MONTY4   MUZ       360   4-15-88  12:00p
    POPEYE   MUZ       176   4-15-88  12:00p
    PRELUDIO MUZ      6600   4-15-88  12:00p
    QNAVEE   MUZ       456   4-15-88  12:00p
    SUSANNAH MUZ       256   4-15-88  12:00p
    SYNCLOCK MUZ       440   4-15-88  12:00p
    TRAPEZE  MUZ       508   4-15-88  12:00p
    TURKEY   MUZ       396   4-15-88  12:00p
    VATER    MUZ      1060   4-15-88  12:00p
    VOLGA    MUZ       116   4-15-88  12:00p
    WARNING  MUZ       228   4-15-88  12:00p
    WASHER   MUZ       420   4-15-88  12:00p
    WEASEL   MUZ       264   4-15-88  12:00p
    WEST     MUZ      2148   4-15-88  12:00p
    WHISTLER MUZ       432   4-15-88  12:00p
    WILLOW   MUZ       424   4-15-88  12:00p
    YELOROSE MUZ       252   4-15-88  12:00p
           75 file(s)     311785 bytes
                            7168 bytes free
