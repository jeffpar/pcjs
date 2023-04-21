---
layout: page
title: "PC-SIG Diskette Library (Disk #127)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0127/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0127"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-MUSICIAN"

    PC-MUSICIAN is a tool for the beginning composer.  It lets you enter
    musical notation and then plays it back.  It needs no extra keyboards or
    instruments attached, as it uses only the keypad.
    
    Playback is on the one voice of the computer.  This program is more for
    the aspiring musician than for the technically-proficient
    musician/computer operator.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES127.TXT

{% raw %}
```
Disk No:  127
Program Title:  PC-MUSICIAN
PC-SIG version 1.3

With PC-MUSICIAN you can create and play songs on your PC.  It enables
you to enter music using musical notation, either from sheet music or
your own original compositions.  You may then hear the music played by
the PC, change things around as needed, and finally save the song on
disk.  It can then be played anytime.  PC-MUSICIAN is a valuable tool
for people who wish to write music regardless of their level of ability.

Usage:  Musical Composition.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

AUTOEXEC BAT  Batch file for automatic execution.
READ     ME   How to list documentation.
MAKEMONO BAT  Setup routine for monochrome display & >=128K memory.
???????  SNG  Song files (11 files).
MUSICIAN DOC  Documentation for PC-MUSICIAN (13 pages).
EXNOTES  FNT  Part of PC-MUSICIAN.
TXTMUSIC EXE  PC-MUSICIAN main program to use with monochrome display.
MUSICIAN EXE  PC-MUSICIAN main program.
MAKECOPY BAT  Batch file to files to disk b:.
PRINTDOC BAT  Batch file to print documentation.
MAKEM64  BAT  Setup routine for monochrome display & 64K memory.
MAKEG64  BAT  Setup routine for graphics display & 64K memory.
GMUS64   EXE  Main program - see MAKEG64.BAT.
TMUS64   EXE  Main program - see MAKEM64.BAT.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1987,1988 PC-SIG, Inc.

```
{% endraw %}

## MUSICIAN.DOC

{% raw %}
```



                                  PC MUSICIAN

                         A Musical Composition Program
                         For the IBM Personal Computer



                 (C) Copyright 1983, 1984 by Christopher Wiley
                              All Rights Reserved


























                            User-Supported Software
            If you are using this program and find it to be of value
                      your contribution ($20 is suggested)
                             will be appreciated.

                               Christopher Wiley       
                                 Box 111, VAMC
                              Prescott, AZ  86313

                 Regardless of whether you make a contribution,
               you are encouraged to copy and share this program.

















                               TABLE OF CONTENTS


INTRODUCTION........................................................1
EQUIPMENT REQUIRED..................................................2
WHAT TO DO FIRST....................................................2
HOW TO START........................................................3
MENU CHOICES........................................................4
        [1] Create a song...........................................4
                Entering notes......................................6
                Measures............................................6
                Scrolling...........................................7
                Editing.............................................7
                Defining a block....................................7
                Other functions.....................................8
                The help screen.....................................9
                Quitting............................................9
                Conclusion..........................................9
        [2] Play a song............................................10
        [3] Save the song..........................................10
        [4] Alter a song...........................................10
        [5] Exit to DOS............................................11
USER-SUPPORTED SOFTWARE............................................12
PERMISSION TO COPY.................................................13
DISCLAIMER.........................................................13


                                     Page 1



INTRODUCTION
PC Musician is a program which transforms your computer into your own private 
musician.  It enables you to enter music using musical notation,  either from 
sheet music or your own original compositions.  You may then hear  the  music 
played for you by your PC,  change things around as needed,  and finally save 
the song to diskette when you are satisfied.  At any time in the  future,  PC 
Musician will play the song at your command!

The  program is a great aid to music students,  allowing them to hear how the 
piece should sound before they attempt to learn it.  Similarly, it has proven 
invaluable to choral singers in learning their parts.  It also allows someone 
(like most of us) who cannot play any musical instrument to actually  compose 
music.                                                                      
                                     Page 2



EQUIPMENT REQUIRED

PC Musician has been tested on a COMPAQ computer with 128K RAM and  a  single 
disk drive as well as IBM PC with 128K RAM,  single one-sided disk drive, and 
the monochrome display as well as the color display card  running  80  column 
text or either graphics mode.  PC-DOS 1.10 and 2.00 both work fine.

The program SHOULD run on:   An IBM PC or COMPAQ with
                               -128K RAM or more
                               -1 disk drive (single or double sided)
                               -PC-DOS v1.10 or v2.00
                               -monochrome or color display card
                               -80 column text or graphics mode.

It MAY run on:    Any close PC compatible machine, or PC Jr., with
                    -PC or MS-DOS v1.00 to 2.xx

A version without online help is available for 64K systems (see below).

PC Musician was written in the C programming language. Certain functions were 
coded in assembly language.


WHAT TO DO FIRST

1.  Format a diskette:  Place your DOS system master diskette into
    drive A: and type   format b:/s

2.  Copy the contents of this diskette:  With this diskette in drive
    A:, simply type  makecopy.  

3.  Put this diskette into a safe place where things like kids, pets,
    and coffee can't get at it.  Insert your copy into drive A:

4.  If you have a printer, turn it on, and type   printdoc.  This will
    print out your documentation.  Otherwise you can read it onscreen
    by typing  type musician.doc, and using Ctrl-NumLock to stop.

5.  If you have: IBM monochrome display and
                      at least 128K RAM       - type  makemono
                 64K and graphics display     - type  makeg64
                 64K and monochrome display   - type  makem64
    Otherwise, just go on to step 6.

6.  Now, at last, just type   musician.  The disk drive will whir and
    you will see a menu.  Select option [2], pick a song, and listen!

                                     Page 3


HOW TO START

If your computer is off and you wish to use PC Musician the procedure is very 
simple.  Assuming  you  have  followed  the  steps  above to produce your own 
"master" diskette containing PC Musician,  all you  need  do  is  place  that 
diskette into drive A:  and turn your PC on.  After the usual pause the drive 
will whir and you will see the PC Musician menu.  We will discuss the various 
menu choices and how to proceed in the next section.

If your computer is already on and you wish to use PC Musician you must first 
finish and exit from any program which you may be using. The object is to get 
back  to the DOS or "system" level.  This is indicated by the presence of the 
DOS prompt A> or B> or C>.  If the prompt is any letter except  A>  then  the 
first step is to type A: and hit return. The prompt should now be A>. At this 
point simply place your PC Musician diskette into drive A: and type musician. 
You will shortly see the main PC Musician menu which will be explained below.

If  for some reason you are unable to get the A> prompt the solution is easy. 
Just place your PC Musician diskette into drive A: and simultaneously depress 
the  Ctrl,  Alt,  and  Del keys.  If even this maneuver fails to produce disk 
activity,  then you'll need to reach around and turn your PC off.  Wait about 
30 seconds and turn the computer back on.  PC Musician will load and you will 
see the (infamous) menu.

                                     Page 4



MENU CHOICES

Although  the  menu  for  PC  Musician  has  been  designed  to be simple and 
self-explanatory,  we will discuss each of the choices in some detail in this 
section.  Any  of  these  choices  can be selected by hitting the appropriate 
number, it is not necessary to hit the return key.

[1]  Create a song

When you select this option,  the screen will clear and a blank musical stave 
will  appear.  A  series of questions will be presented in the lower third of 
your screen. These questions allow you to specify the starting conditions for 
the song you will be creating.  We will discuss each one in turn.

Bass  or  treble  clef  (B/T)?  On  most sheet music there are (at least) two 
varieties of musical stave.  One marked with a treble clef, which resembles a 
stylized  &,  and which represents the upper range of notes,  starting around 
middle C on a piano.  The other (lower) stave is marked  with  a  bass  clef, 
which resembles a stylized 7, and which carries the lower range of notes.  To 
respond to this question you merely type B or T.  If you simply  hit  return, 
the treble clef will automatically be selected.

Adjust  octave  up or down (U/D)?  This option allows you to enter notes that 
are exactly one octave higher or lower than those  normally  associated  with 
the  selected  clef.  For  example,  the  singing  part for tenors is usually 
written on the treble stave,  but the actual notes the tenor  sings  are  one 
octave  lower  (to the immense relief of most tenors!).  So,  when I enter my 
tenor parts for chorus, I select treble clef and D to adjust the octave down. 
Simply hitting the return key will automatically select no adjustment.

How  many  beats  per  measure?  Now  you  are  beginning to specify the time 
signature for your song.  This is normally expressed on sheet  music  as  one 
number over another in the form of a fraction, e.g.  4/4, 3/4, etc.  The most 
common time signature is 4/4, sometimes represented as a large C, which means 
4  beats to the measure and a quarter note gets one beat.  Thus this question 
is asking you to enter the TOP number of the time signature.  You  may  enter 
any whole number followed by return.  Hitting the return key only will select 
4.

How many beats per whole note?  Here you are asked for the BOTTOM  number  of 
the time signature. Again, you may enter any whole number followed by return, 
and just hitting return will specify 4.  So,  merely hitting return for  both 
these questions will automatically select 4/4 time, which is the most common. 

                                     Page 5



Enter tempo (0-9):  This question is asking you how fast you want  your  song 
played.   0  represents  the  slowest  speed  and  9  the  fastest.  Tempo is 
traditionally expressed using certain Italian words which roughly  correspond 
to these numbers as follows:
                        0 - Largo
                        1 - Grave
                        2 - Lento
                        3 - Adagio
                        4 - Andante
                        5 - Moderato
                        6 - Allegretto
                        7 - Allegro
                        8 - Vivace
                        9 - Presto
You may enter any one of these numbers.  In this case,  simply hitting return 
will select 5 (Moderato), a moderate speed.

Once you have responded to these questions the lower part of the screen  will 
clear,  a  help  message will appear in the center of the bottom line,  and a 
square cursor will appear at the lower left of the stave.  At this point, you 
can  simply  start  entering notes,  or you can select a musical key for your 
song.

The musical key is simply a way of notifying the musician (in  this  case  PC 
Musician)  in  advance  that  certain  notes will always be played as flat or 
sharp unless specifically marked otherwise. This is done by placing a flat or 
sharp  symbol  on the appropriate line or space of the stave.  On sheet music 
these symbols are usually clustered together at the left end  of  the  stave. 
The  way  to  do this with PC Musician is to move the cursor,  with the arrow 
keys, up or down until it rests on the right spot in the stave.  Then you can 
write  a symbol at that location by hitting F for flat,  or S for sharp.  You 
will see the correct symbol appear, and the cursor will move one space to the 
right.

You  may  continue  this  process  until finished.  Then,  in order to draw a 
vertical line and separate the key  signature  from  the  actual  music,  you 
should  hit  the  |  (or  \)  key  at the lower left of the keyboard.  A long 
vertical divider will appear and the cursor will  move  right.  Now  you  are 
really ready to enter your music.

                                     Page 6



Entering notes

PC  Musician  has been designed to make the process of entering notes as easy 
and efficient as possible.  The minimum information necessary  to  specify  a 
single note is its pitch and its duration. Additional modifiers such as flat, 
natural, sharp, or dotted can also be added. In PC Musician as in sheet music 
the  pitch  of  the  note is determined by its position on the musical stave. 
Pitch (position) is controlled by four keys: up-arrow, down-arrow, Pg Up, and 
Pg Dn which are located at the right end of the keyboard. The arrow keys move 
the cursor one step (=one note) in the appropriate direction.  The Pg Up  and 
Pg Dn keys merely provide a quick way to move the cursor to the top or bottom 
line of the stave. If you wish to hear how any note would sound, just hit the 
space  bar  and  the note corresponding to the cursor position will be played 
BUT it will not be "entered" or "recorded".

Once the position or pitch of the note is set (i.e.  the cursor is resting on 
the  correct  spot)  you  must  select  a  duration  for  the  note.  This is 
accomplished using the leftmost column of Function keys, that is keys F1, F3, 
F5, F7, and F9. They represent respectively whole, half, quarter, eighth, and 
sixteenth notes. F9 while depressing the shift key gives a 32d note. When any 
of  these  keys  is pressed,  the corresponding duration is selected and it's 
name and symbol are written in the upper left  corner  of  the  screen  as  a 
reminder.  If  no other modifiers are necessary you may now ENTER the note by 
hitting the large grey + key at the lower right corner of  the  keyboard.  PC 
Musician  will  play the note for you and write its symbol on the stave.  The 
note count reported in the upper right corner of the screen will increase  by 
1, and the cursor will move one space to the right.

If  further  modifiers are needed for a note,  they can be selected using the 
second column of Function keys. F2=dotted, which is when a note's duration is 
increased by one half.  F4=sharp,  which causes that note only to played as a 
sharp. F6=natural.  F8=flat.  F10=rest, which produces a rest of the selected 
duration.  You  can  keep  track  of what modifiers are currently selected by 
watching the upper left corner of the screen.

So the process of entering notes is most easily accomplished by resting  your 
right  hand on the numeric keypad (cursor keys) and your left on the Function 
keys.  First move the cursor to the right spot, next select a duration,  then 
add further modifiers as needed, and finally hit the + key to ENTER the note.

Measures

A  measure  is a section of music containing a number of notes (and/or rests) 
whose durations add up to the number of beats specified by the TOP number  of 
the  time  signature.  PC  Musician  will  keep  track  of  this  for you and 
automatically draw the measure divider after you have entered  note(s)  which 
equal (or exceed) one measure full.  Sometimes, you may be copying some sheet 
music into PC Musician,  and find that the first measure doesn't contain  the 
full  number  of  beats  (i.e.  PC  Musician  doesn't  automatically draw the 
divider).  This is remedied by simply pressing M  (for  Measure)  which  will 
force the end of the measure and draw the divider.

                                     Page 7



Scrolling

What happens when you reach the right edge of the stave?  Well,  PC  Musician 
will perform a function called scrolling.  This means that everything will be 
pushed to the left to make room for another note to be entered. You will find 
that  scrolling  is  rather  slow and may interfere with your quick rhythm of 
entering notes.  I usually wait  until  the  end  of  the  measure  that  I'm 
currently  working  on  and  then hit C for Clear.  This clears the stave and 
places the cursor back at the lower left.  None of the music which  you  have 
entered is lost, you simply can't see the notes anymore.  However, note entry 
will be much faster than if you stay at the right edge and wait for scrolling 
to occur.  Of course, you may hit C at any time, but I find it easier to keep 
my place if I do it at the end of a measure.

Editing

PC Musician allows you the ability to go back and change your  mind  about  a 
note so long as it still appears on the screen. This is accomplished by using 
the left-arrow and Ctrl+left-arrow keys.  Pressing the left-arrow  key  moves 
the cursor one position to the left. It also decreases the note count by one. 
Therefore,  it should be used only when the next position  (column)  left  is 
occupied  by  an  actual note symbol (not a sharp,  flat,  natural,  dot,  or 
measure divider).  If some non-note symbol is immediately to  the  left,  use 
Ctrl+left-arrow instead.  This combination of keys will move the cursor left, 
but will NOT decrease the note count.  When  you  reach  the  column  of  the 
incorrect note, use the standard note entry procedure.  Now you can move back 
to the right by using the right-arrow and  Ctrl  +  right-arrow  keys  in  an 
analagous fashion.

Defining a block

PC Musician provides another method for altering your music during entry. The 
basic concept is that you may  "define"  a  block  or  section  of  notes  by 
informing  PC  Musician of the first and last notes of the block.  Specifying 
the beginning of the block is done by pressing B for Beginning.  A  statement 
will  appear  towards  the bottom of the screen asking you to enter the count 
(upper right) of the note, or hit return to specify the last note entered.  A 
message  will  appear  on  the  top  line of the screen reminding you of your 
selection.

Similarly,  picking the end of the block is done by hitting E for End.  Again 
you  will  be  asked  to enter the count of the last note in the block or hit 
return to specify the last note entered. Now that you have defined a block of 
notes, there are several things which you can do with them.

                                     Page 8



You may wish to hear it,  to see if it really is the block you are interested 
in.  This  is  done by pressing P for Play.  You will be asked if you wish to 
hear the defined block (D) or the entire song so far (S).  Hitting  just  the 
return  key  will  request the entire song so far.  PC Musician will promptly 
play the notes for you.

You can copy or "Insert" the defined  block  in  any  location  you  wish  by 
pressing the Ins key. You will be asked the count of the note AFTER which you 
wish the block inserted.  Hitting return will cause the block to be  inserted 
after  the  last  note  entered.  The provides an easy and quick way to enter 
repetitive phrases (like refrains) into your music. Inserting does not affect 
the original defined block (i.e. the block is copied, not moved).

You  might  also wish to "Delete" the defined block.  This is accomplished by 
hitting the Del key.  This causes the notes within the defined  block  to  be 
removed  from your song.  Nothing will change on the screen (if the notes are 
still visible) nor will there be a silent "gap" left behind. The notes simply 
won't be there the next time PC Musician plays your song.

The  defined  block  is a very useful concept which allows you to rapidly and 
easily make major changes to your music in much the same way that a good Word 
Processor  allows  you  to cut and paste sections of text.  You may need some 
practice to get used to these functions,  but they will  soon  become  second 
nature to you.

Other Functions

There  are a number of other functions available to you at any time while you 
are creating some  music.  They  are  all  invoked  simply  by  pressing  the 
appropriate key as described below.

T - pressing T for Time allows you to change the time signature of your music 
at any time "in mid stream". You will be presented with the same questions as 
at  the  beginning of the Create session.  The new values entered will affect 
only those notes entered AFTER you make the change. There is no way to change 
the tempo or time signature for notes already entered.

O - pressing O for Octave allows you to change the octave adjustment. This is 
not an option likely to be used often,  but certain avant-garde  or  original 
music may require it.  Again, the change affects only subsequent notes.

P - pressing P for Play,  as mentioned above,  will cause PC Musician to play 
either the defined block or the entire song so far,  as you select.  You will 
then be returned to editing exactly where you left off.

                                     Page 9



F,  S,  or N - you may change your key signature at any time by  using  these 
keys.  Often a composer will change keys in the middle of a composition.  You 
must be careful to first "cancel" your original key by moving the  cursor  to 
the  location(s) of the original key symbols and pressing N for Natural.  Now 
you may position the cursor and press the appropriate Flat or Sharp key.

Spacebar - pressing the spacebar will give you a "preview" of what that pitch 
sounds  like  by  playing  an  eighth  note of the pitch corresponding to the 
cursor position on the stave.  The note is NOT  entered,  and  any  modifiers 
(like  sharp,  flat,  etc)  which  you  may  have  specified  will be lost as 
signified by the disappearance of the reminder messages  in  the  left  upper 
corner of the screen.  This feature is very useful for composing as it allows 
you to actually "play" your computer almost like a piano!


The Help Screen (not available on 64K version)

At any time during the Create session,  you may ask for help by hitting the ? 
key. You will see a screen which contains a short description of all the keys 
and options available to you.  Hitting any key will  return  you  to  editing 
exactly  where you left off.  You may flip to the help screen as often as you 
like.


Quitting

There are two ways of quitting the Create section of PC Musician.  If you are 
happy  with your song and wish to have the opportunity to save it,  hit Q for 
Quit. PC Musician will respond by playing your entire song and then returning 
you  to the original menu for the program.  If you wish to save your song you 
must select [3] Save a song.  This option will be further explained below.

If you are just fooling around,  or you have totally botched the song up  and 
wish to start over, hit the Esc key (upper left corner of the keyboard). This 
will cause PC Musician to clear off the stave and start back at the beginning 
with the questions about the clef,  octave,  time signature, and tempo.  Your 
previous work is now gone forever!

Conclusion

Obviously, the Create section of PC Musician is one in which you will spend a 
great deal of time. It has been designed to make musical creation as easy and 
pleasant as possible by providing a simple, uncluttered display and a command 
driven system requiring the fewest possible keystrokes.

                                    Page 10



[2] Play a song

When you select this option from the main menu,  PC Musician  will  play  for 
you!  You  will  be  presented with a list of all the songs available on your 
diskette and asked to type the name of the song you wish to hear (it must  be 
present  on  the diskette in drive A:).  Although you may see songs listed in 
the disk directory as "xxxxxxxx.sng" you need only type xxxxxxxx. PC Musician 
will  keep  track of the ".sng" part for you.  So,  just type the name of the 
song, hit return, and listen! After the song is over, you will be returned to 
the main menu.


[3] Save the song

After you have created a song,  using option [1] and quitting with Q, you may 
select this option. You will be asked to enter the name you wish to give this 
song.  Again,  don't worry about adding ".sng", PC Musician will take care of 
that.  Simply type the name,  which must be eight letters or less and contain 
no spaces or punctuation marks,  and hit return.  The disk will whir and your 
song will be recorded on the diskette in drive A:.


[4] Alter a song

This selection allows you to make changes to songs  that  have  already  been 
saved to disk. You will see a listing of all songs on disk A: and be asked to 
select one. The changes you make are applied to the entire song. Your options 
are:

        [1]  Change Octave.  Just as in the Create section,  you are asked to 
adjust the octave up or down by selecting  U  or  D.  Simply  hitting  return 
leaves  the  octave  unchanged.  The  octave may be adjusted several times by 
repeatedly selecting this function.

        [2] Change Tempo.  Here you are asked to enter a  "speed  adjustment" 
factor between 0.1 and 5.0. This number will be multiplied by the duration of 
each note.  Thus 0.5 will play the song twice as FAST,  and 2.0 will cut  the 
tempo in half.

        [3] Play Song.  This selection will play the song for you, so you can 
hear the effect of any changes.  You may go on to make further changes if not 
satisfied.

        [4]  Save Song.  You must select this option to permanently store you 
altered song to disk. By giving the altered version a new name (i.e.  SONG1), 
you  will  end  up  with  both the original and altered versions on disk.  To 
replace the original, simply give the same name.

        [5] To Main Menu.  As expected, this returns you to the main menu.

                                   Page 11



[4] Exit to DOS

This is how you leave PC Musician altogether.  If you  have  created  a  song 
which  you  wish  to  save,  you must remember to use option [3] first before 
exiting. Pressing 4 will quit PC Musician and return you to the A> prompt. At 
this point you may do anything you wish,  including typing musician to return 
to PC Musician again.

                                   Page 12



USER-SUPPORTED SOFTWARE

User-supported software,  which is also known as Freeware or Shareware, is an 
experiment in microcomputer software  distribution  based  on  the  following 
principles:

1. That the value or worth of a program is best judged by the individual user 
actually using the program on his/her own machine.

2.  That the creation and  distribution  of  microcomputer  software  can  be 
financially supported by users at reasonable cost.

3.  That the copying and sharing of software can and should be encouraged.

Anyone  may  request  a  copy of a user-supported program by sending a blank, 
formatted disk to the author  of  the  program.  An  addressed,  postage-paid 
return mailer must accompany the disk (no exceptions, please).  A copy of the 
program,  with documentation on the disk,  will be sent by return  mail.  The 
program  will  carry  a  notice  suggesting  a  contribution to the program's 
author.  Making a contribution is completely voluntary on the  part  of  each 
user.

Free  distribution  of  software and voluntary payment for its use eliminates 
costs for advertising and  copy  protection  schemes.  Users  obtain  quality 
software  at  reduced cost.  They can try it out before buying,  and do so at 
their own pace and in the comfort of their  own  home  or  office.  The  best 
programs will survive, based purely on their quality and usefulness.

Please join the experiment.  If you share a belief in these principles,  your 
contribution is solicited to help make them work.


                            User-Supported Software
            If you are using this program and find it to be of value
                      your contribution ($20 is suggested)
                             will be appreciated.

                               Christopher Wiley       
                                 Box 111, VAMC
                              Prescott, AZ  86313

                 Regardless of whether you make a contribution,
               you are encouraged to copy and share this program.

                                    Page 13



PERMISSION TO COPY

Individuals, clubs, and other non-profit organizations are granted permission 
by  the  author  to freely copy these programs and documentation and share it 
with their members, so long as:

1.  No price  is  charged  for  the  software  or  documentation.  However, a 
distribution cost may be charged for the cost of the diskette,  so long as it 
is not more than $6.00 total.

2.  Club members are informed of the user-supported concept and encouraged to 
support it with their donations.

3.  The  program(s)  or  documentation  are  not  modified in any way and are 
distributed together.


DISCLAIMER

In no event will the Author be liable to you for any damages,  including  any 
lost  profits,  lost  savings,  or  other incidental or consequential damages 
arising out of the use of or inability to use these  programs,  even  if  the 
Author has been advised of the possibility of such damages,  or for any claim 
by any other party.










```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0127

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        14   1-13-84  12:46p
    BUTCHER  SNG       640  11-04-83   4:07p
    DONA     SNG       896  11-02-83   5:28p
    EXNOTES  FNT      1024  11-30-83   3:00p
    FILES127 TXT      1497  10-27-88  11:32a
    GMUS64   EXE     28160   1-19-85   1:34p
    GO       BAT        31  10-17-88   4:49p
    GO       TXT      1002  10-20-88   4:53p
    I_WILL   SNG       604   1-29-84  10:31a
    JNGLEBLS SNG       420   1-29-84   1:42p
    MAKECOPY BAT        13   1-13-84   2:22p
    MAKEG64  BAT        93   2-29-84   3:29p
    MAKEM64  BAT        93   2-29-84   3:28p
    MAKEMONO BAT        62   2-29-84  11:05a
    MAXWELLS SNG       444   1-29-84   4:28p
    MICHELLE SNG       672   1-29-84   9:56a
    MUSICIAN DOC     29217   3-24-84  12:32p
    MUSICIAN EXE     30208   1-19-85   1:22p
    OLDWOMAN SNG       512  11-04-83   4:25p
    PRINTDOC BAT        24   2-29-84  11:08a
    READ     ME       1029   2-29-84  10:44p
    SHEEPMAY SNG       476   1-01-80  12:14a
    SHEWALKS SNG       640  11-07-83   1:36p
    TMUS64   EXE     26112   1-19-85   1:39p
    TXTMUSIC EXE     28672   1-19-85   1:29p
    YESTRDAY SNG       520   1-29-84  10:11a
    YNKEDODL SNG       244   1-29-84   1:32p
           27 file(s)     153319 bytes
                               0 bytes free
