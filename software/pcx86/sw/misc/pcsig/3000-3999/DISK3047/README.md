---
layout: page
title: "PC-SIG Diskette Library (Disk #3047)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3047/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3047"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MANUAL.DOC

{% raw %}
```

                  M U S I C I A N    I
                  ====================


                         Manual

              Copyright (c) DigiMus Ky, 1990.







Introduction
------------
MUSICIAN I is intended for anyone interested in creating their
own music. There is no need to be familiar with computers or
computer technology. With MUSICIAN I, you can write your music easily
and, what best, hear it any time you wish, by using the Sound Blaster.


Required Equipment
------------------
To run Musician, you need the following:

     1. The Sound Blaster Card

     2. An IBM-PC/XT/AT computer or a compatible equipped
        with a EGA or VGA graphic display card.

     3. A Matrix Printer to print your notation.

     4. Headphones, external loudspeaker or stereo system.

     5. SB-SOUND.COM  -  FM music driver from Creative Labs, Inc.



Getting Started
---------------

1. Make a  \MUSICIAN  sub-directory under your \SB sub-directory.

2. Copy all the files on the \MUSICIAN sub-directory of this disk
   to the \SB\MUSICIAN sub-directory.

3. Before running MUSICIAN I, you need to load the memory resident
   FM music driver -  SB-SOUND.COM   from Creative Labs, Inc.

4. Then run MUSICIAN I by typing :    MUSIC

5. A batch file START.BAT is created to run all files together, and
   remove SB-SOUND.COM after its used.

   Just type :     START             to start MUSICIAN I



Menu Commands
-------------

F5 Files:

New   -
        Clears the screen and closes the file to make room
        for a new one. Musician asks, however, if you wish to
        save the changes made.

Open  -
        With this command you can open a file from the music
        directory. A list of all Musician files in this dir-
        ectory appears on the screen.
        You can choose a file from this list by moving with
        arrow keys over the list. When the indicator is on
        the desired file, press the <enter>-key to confirm.

Save  -
        This command saves opened files. If the file has been
        named, it will be saved.

Save as...
        This command is used to save the opened file under
        a new name.


Instrument Bank -
        This command is used to choose the instrument bank
        froM which you want to select your instrument.

To Printer  -
        This command is used to print out the score or only a
        Part of it. The default is to print out the entire
        document. With HOME- and END- keys you can select the
        corners of the printing area and move it with the
        arrow keys. With PgDn- and PgUp-keys you can move
        to next screen. To jump to the end of the document
        press Ctrl and PgDn keys simultanously. To confirm
        the printing, press (enter).

Paper Length -
        This command allows you to state the lenght of your
        paper sheet for printing. The default value is 11
        inches, that can be changed by using + -or - -keys.

Top Marigin
Bottom Marigin -
        It is also possible to select the printing area
        changing the values of top- and bottom marigins. The
        default value 5 lines you can increase or decrease by
        using + -or - -keys.

Quit -
        This command ends the Musician and returns to DOS.
        Before this command is carried out, Musician asks you
        if you wish to save your work.



F6 Options:

Keyboard On/Off -
        This command brings the mouse keyboard on the screen
        and you may enter the notes by "single finger playing"
        with your mouse.


Text Editor -
        The program changes to Text Editing mode. The vertical
        line cursor appears on the upper left corner of the
        screen. You can move it to the your text area with the
        arrow keys.
        Two different fonts are selectable with F1-key:
        a large font for the title of the piece, and a small
        font for the lyrics.

MIDI In -
        You can also enter the notes with you MIDI keyboard
        connected to Sound Blaster with the MIDI Box.

MIDI Base Key -
       From your MIDI Keyboard one octave area is reserved
       to be used as command keys for MIDI options. By press-
       ing the Base C-key you tell Musician, which octave
       you selected for this purpose.

Connect Staves -
       Before printing out your notes, it is often necessary
       to connect certain staves with bracket(s). When this
       option is selected, a small cursor appears near the
       left end of the first staff. Move the cursor to the
       beginning of the first staff that will be connected,
       with the upper end of cursor at the height of the upper
       line of the staff, and press space bar.

       To begin to produce the bracket, press right arrow-key
       once. Continue drawing by pressing down arrow-key sev-
       eral times. At about the middle of the bracket, press
       left arrow-key once and continue then with the down
       arrow key.

       At the end of the bracket, press right arrow-key once.

       To delete the bracket, press space bar once and move
       the cursor over the area you want to delete.

       To finish this operation, press ESC-key.



F7 Playback:

Play -
       This command lets you listen to the composien you have
       written.

Play Voices -
       Command lets you listen to the voices you have choosen
       in Voices-menu (F9).

Interrupt -
       Using this command, you can stop the playback of the
       song.

Play Screen -
       This command is used to playback the part of your work
       that you can see on current screen.

Basic Tempo -
       This command is used to state or alter the basic tempo
       of a song. When this is choosen, the current tempo
       figures appear on the upper left corner of the screen.
       You can alter this tempo by entering a new number that
       corresponds the number of beats per minute.

Dynamics -
       This command shows you the default values of the dyn-
       amic marks (ppp - fff). You can chhose your own scale
       by using (+) and (-) -keys. The value of each mark can
       be from 0 to 100.



F8 Staves:

Clef -
       This command lets you choose Treble- or Bas Clef for
       each staves (1 to 6). To enter the Glef, press F- or
       G-key.

Position -
       You can alter the distance of each staff from the
       bottom of the screen by entering new numbers using
       (+)- or (-)-keys. The default is value 0.

Time Signature -
       You can alter the Time Signature's upper or lower
       number with (+) and (-)-keys. By pressing #-key, when
       the cursor is in the beginning of the staff, the
       selected signature appears on it's place.



F9 Voices :

Percussion -
       This option gives you 6 melodic voices and 5 percus-
       sion voices (Y), or 9 melodic voices without percus-
       sion (N).

Staves -
       The staves (1 - 6 ) for different voices you can
       choose by using (+)- and (-)- keys. The default is:
              Voices 1-3        1. Staff
              Voices 4-6        2. Staff
              Percussion        3. Staff

Select -
       You can select voices you wish to hear with option
       "Play Voices" in F7-Menu. This command is also useful
       when selecting the voices you want to print out.



F10 Help:



Keyoboard Commands
------------------

Key Signature    :    B=Flat  (Confirmed by pressing E-key).
                      H=Sharp      "  "
                      N=Natural

Accidentals      :    B=Flat  BB=Double Flat
                      H=Sharp HH=Double Sharp
                      N=Natural

Time Signature   :    #-key (Select in F8 Staves-menu).

Voice Activation :    Alt + number of the voice

Toggle Voices    :    Tab- and Shift+Tab-keys.

Entering Note    :    Space bar (toggle w. note-rest).

Entering Rest    :    Space bar (toggle rest-note).

Note Values      :    Whole note      1
                      Half  note      2
                      Quarter note    4
                      Eighth note     8
                      Sixteenth note  6
                      32nd note       3
                      64th note       7


Dotted note      :    Hit Note value key twice or
                      Note value key + N.

Bar Line         :    Enter

Double Line      :    Enter

Repeats          :    Enter

Endings          :    v + Number Key (toggle)

Tie              :    (-) - key  (toggle: down - up - off).

Character Delete :    Del

Column Delete    :    Del

Column Insert    :    Ins

Note Position    :    Arrow keys up-downd.

Cursor moving    :    Arrow keys right-left.

Triplets         :    T-key after evry Triplet Note.

Stem Direction   :    Y-key

Beams            :    (+)-key on the latter note (toggle).

Play             :     Ctrl + P

Play Screen      :     Ctrl + Y


Play Selected Voices:  Ctrl + D

Note Formation   :     U (toggle)

p - pp - ppp     :     P

mp  -  mf        :     M

f - ff - fff     :     F

Instrument       :     I

Tempo            :     O

Accelerando      :     A

Ritardando       :     R

Crescendo        :     < (toggle: <  -  cresc.).

Diminuendo       :     > (toggle: >  -  dim.).

Segno            :     S

Coda             :     C

D.S.             :     G

D.C.             :     D

Fine             :     Z

Fermata          :     (

Tremolando       :     / (toggle)

Print            :     Ctrl + K

Moving           :     To the beginning of next measure:
                       Ctrl + Right Arrow.

                       To the beginning of former measure:
                       Ctrl + Left Arrow.

                       To the left side of screen : Home

                       To the right side of screen: End

                       To the beginning of the song: Ctrl + Home

                       To the end of the song:       Ctrl + End



Using a Mouse
-------------

The notes can be entered by using a mouse, if one is loaded.
On the lower left cornerer of the screen there is a piano keyboard,
where you can choose the note position and it's value simultaneously.


Entering Root Tones

To enter root tones (white keys) on the staff, you only need to
do an "one finger play" using the mouse cursor as your fore
finger, and clicking the left mouse key. To choose the value for a
note, move the cursor along the key until it is on the same heigh
as the desired note value symbol on the left side of the keyboard.
Then click once.


Entering Accidental Tones

To write accidentals is as simple as to write root tones. How-
ever, the chromatic notes can be written by using either sharp
(#) or flat (b) marks. If you wish to get a note equiped with
sharp, you must point on the left side of the black key nearest
the white key. If you want to get a note with a flat mark, you
must point on the right side of the black key nearest the next
white key. Then click once.


Entering Rests

The rests are entered on the staff using same methode as
writing notes, but making double-click with mouse's left key.


To Cancel

While writing the piece you may note that the key you selected
on the mouse keyboard is not what you want. You can cancel this
note by keeping down the mouse's left key, and moving the cursor
off from the key and then release the key.


To Move

To move the cursor on the staff you can be made two way.

      1. On the lower bar of the mouse keyboard there are a
         section numbered from 0 to 6. From this section you
         can choose one number value to state, how many
         steps (columns) you want the cursor jump forward
         after a basic value note is entered. Thus, if you
         have 4/4 measure and you choose nuber 4, after each
         quarter note entered on the staff the cursor jumps
         four steps ahead. One eight not takes then two
         steps and dotted quarter not six steps etc.

      2. Keeping the steps value 0, you can move the cursor
         on the arrow area nearest the number section. By
         clicking once on the right-arrow you move one step
         to the right. By clickin once on the right-arrow
         with a bar line, you move a whole bar ahead.


Scrolling the mouse keyboard

On the lower bar of the mouse keyboard there is a small icon of
keyborad on it's both ends. If you click your mouse once on the
right icon, the keyboard are changes one octave higher. Res-
pectively, if you click on the left icon, the keyboard changes
one octave lower. Where you are on the keyboard, you can read
from the number marks, that are on each C-key. The "middle-C" is
marked with number 4.



Using MIDI Kyboard
------------------

The notes may also be entered by using a MIDI Keyboard connected
to the Sound Blaster's MIDI Box.

When this option is activated from F6 Menu, the program first
asks you to press the Base C-Key on your MIDI-keyboard. From
this C-key one octave up (12 keys) are selected to be used as
command keys. Default is the lowest C-key on your keyboard.


The MIDI Keyboard commands are:

   1. Note values

      C:   1/1  note
      D:   1/2  note
      E:   1/4  note
      F:   1/8  note
      G:   1/16 note
      A:   1/32 note
      B:   1/64 note

   2. Others

      Cis: Left arrow (Move cursor to left)
           - -key (Select MIDI - options)

      Dis: Right arrow (Move cursor to right)
           + -key (Select MIDI - options

      Fis: Space Bar (Produce a note/rest)

      Gis: Enter (Produce a bar line)
           Delete (Delete a character except bar line)

      Ais: Toggle MIDI - options:


     Change Octave (Using Cis- and Dis- keys)
           Playback     "    "   "
           Auto Steps   "    "   "
           Accidentals  "    "   "


When MIDI Keyboard is in use, mouse can not be used. Respectiv-
ely, when mouse is in use, MIDI Keyboard can not be used. How-
ever, the copmuter keyboard can be used together with mouse and
MIDI Keyboard.

You can leave MIDI mode by pressing ESC-key or reselecting the
option MIDI Keyboard (^M) from F6 Menu.


```
{% endraw %}

## README.DOC

{% raw %}
```
NOTICE :          MUSICIAN I    -   SHAREWARE

Great effort have been spent on developing this versatile music
composition software for the Sound Blaster. At first, we thought that
this would be a US$200 product. After discussing with Creative Labs,
we were planning to price it at agressively at US$79.95 so as to sell
in large numbers.

However, after much encouragement from folks at Creative Labs, and in
order to let Sound Blaster users be able to get this software at a much
earlier date, we have decided to make this version MUSICIAN I - a
SHAREWARE.

We hope that you will appreciate our effort in pushing this software to
the market and assist us in furthering our development effort.


IF YOU FIND MUSICIAN-I USEFUL AND DECIDED TO KEEP IT, WE WOULD VERY
MUCH APPRECIATE A REGISTRATION FEE OF $25.00.

WITH A REGISTRATION FEE OF $50.00 OR MORE, WE WILL SEND YOU A DISKETTE
AND MANUAL OF THE THE NEXT VERSION OF MUSICIAN I WHEN AVAILABLE.

Please send your registration to :

                   DigiMus Ky
                   Raatalinkatu 12
                   32800 KOKEMAKI
                   Finland

In USA, you may send also your check c/o CREATIVE LABS, INC. :

                    DigiMus Ky
               c/o  Creative Labs, Inc.
                    2050 Duane Ave
                    Santa Clara, CA 95054

   ( Money Order/Cashier Checks or Checks payable to : DigiMus Ky )
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3047

     Volume in drive A has no label
     Directory of A:\

    MUSICIAN ZIP    214876   6-23-92  12:54p
    NOHISS10 ZIP     97430   4-22-92   6:02p
    PKUNZIP  EXE     19041   3-15-90   1:10a
    GO-STRT  DAT       546   6-23-92  12:22p
    GO       EXE     27558   2-06-92   2:16a
            5 file(s)     359451 bytes
                            1024 bytes free
