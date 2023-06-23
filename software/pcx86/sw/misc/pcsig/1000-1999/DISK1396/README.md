---
layout: page
title: "PC-SIG Diskette Library (Disk #1396)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1396/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1396"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PIANOMAN DOES BEETHOVEN"

    PIANOMAN DOES BEETHOVEN is an exquisite translation of Ludwig van
    Beethoven's artistry for the IBM-PC and compatibles.  Five
    compositions,
    approximately 23 minutes of music, have been adapted by Nancy Moran with
    finesse and accuracy.  The music files were created using PIANOMAN and
    the author has included a detailed description of the advanced
    techniques she used in their transcription.
    
    Selections include: Moonlight Sonata, Minuet in G-Major, Six Variations
    on a Duet from the Opera La Molinara, Seven Variations on the
    National Song, and the Sonata Pathetique.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1396.TXT

{% raw %}
```
Disk No: 1396
Program Title:  PIANOMAN DOES BEETHOVEN
PC-SIG version 1

PIANOMAN DOES BEETHOVEN is an exquisite translation of Ludwig van
Beethoven's artistry for the IBM-PC and compatibles.  Five compositions,
approximately 23 minutes of music, have be adapted by Nancy Moran with
finesse and accuracy.  The music files were created using PIANOMAN
(PC-SIG disk #279) and the author has included a detailed description of
the advanced techniques she used in their transcription.

Selections include: Moonlight Sonata, Minuet in G-Major, Six Variations
on a Duet from the Opera La Molinara, Seven Variations on the the
National Song, and the Sonata Pathetique.

Synopsis:  An exquisite translation of Beethoven's musical artistry
for the IBM-PC and compatibles.

Usage:  Entertainment/Music.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $7.50 brings a disk of additional music
selections.

File Descriptions:

LVB      BAT  Menu file.
7-VAR    EXE  Seven Variations on the National Song.
MINUET-G EXE  Minuet in G-Major.
MOLINARA EXE  Six Variations on a Duet from the Opera La Molinara.
MOONLEIT EXE  Adagio sostenuto from the Moonlight Sonata.
SPADAGIO EXE  Adagio cantabile from Sonata Pathetique.
LVB-READ ME   Documentation.
LVB      TXT  How musicians can use PIANOMAN; advanced techniques.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk No 1396 PIANOMAN DOES BEETHOVEN  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type LVB (press enter)                            ║
║                                                                         ║
║ To look at the documentation on your screen, type VIEW (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LVB.TXT

{% raw %}
```
               ╔═════════════════════════════════════════╗
               ║         PIANOMAN DOES BEETHOVEN         ║
               ╟─────────────────────────────────────────╢
               ║       NOTES ON ADVANCED TECHNIQUE       ║
               ╚═════════════════════════════════════════╝

     The music you hear on this and other of my disks was entered one
line at a time and merged to create harmonies and polyphony with the aid
of software known as Pianoman.  Pianoman assigns pitches from the 12-tone
Western chromatic scale to the keys of the standard IBM-compatible PC
keyboard for user input and recording in the form of PC readable and
executable text.  It also provides means by which notes, their pitches,
durations and interruptions, may be manipulated globally and/or in user-
defined blocks.  As you can hear from the files elsewhere on this disk,
the program has reached a stage of development such that substantially
lengthy and complex tunes may be established and interwoven for playback
on ordinary IBM-compatible personal computer systems without supplemental
hardware.


════════════
 IN GENERAL 
════════════
     More on theory and an introduction to the software can be found on
the disk "Pianoman Goes Baroque".  Technical aspects on the use of Pianoman
software already detailed in its User's Manual and are not discussed here. 

     As with any executable file produced by Pianoman software, the five
"Pianoman Does Beethoven" files can be converted to text-file format with
the Pianoman utility designed for that purpose for further study or
experiment.


═════════════
 DEFINITIONS 
═════════════
     Note is the term applied to a unit quantity of audible signal to
be communicated via software to the PC speaker.  "Note" itself has the
parameters of duration (expressed in msec), pitch (expressed as a letter
value in the Western 12-tone scale), octave (a whole number from 1 through
8 with middle C expressed as C4), and "staccato" (an integer from 1 through
9) wherein duration of the note is silenced 10% for each staccato unit.

     String is, literally, a chain of notes, but is generally used to
denote one line or one voice of a composition or segment of a composition
(for example, the alto line).  Strings are raw materials for later
"merging";  strings to be merged together must equal each other in dura-
tion.

     String set is a set of two to four strings matched in duration so
as to be merged (combined) to produce a harmonized and/or polyphonic
secondary file.
PIANOMAN DOES BEETHOVEN       - 2 -      NOTES ON ADVANCED TECHNIQUE


     Merge is the process by which strings (for example, soprano, alto,
tenor, bass; or -1, -2, -3, -4; or -A, -B, -C, -D) are processed by the
software such that each string is divided into much smaller and equal
subunits, then a new file comprised alternately of the subunits from the
divided strings is created.  A user selected merge divisor determines
the size and number of subunits in a given duration (for example, a quarter
note).

     Merge file is the file produced by the merge process.  It is in itself
a gigantic though complex string of notes (such as when four strings
consisting of 200 quarter notes each are split into quarter notes of 8
subunits - two clusters comprised of a subunit from each of the four
strings).  A merge file can be retrieved, saved, combined with other files
and otherwise manipulated like any text file in editing mode.

     Note cluster is the smallest unit of a merge file wherein one and
only one subunit from each original string is represented.

     Text file can be a string or a merge file, but the term is used herein
to denote a file formatted for retrieval, manipulation and playback by
Pianoman software in text editing mode.  Text files must always have the
extension MUZ to be used by the program.

     Block is a user-defined segment of a text file.  A block may consist
of a single note or the entire file.  Blocks in Pianoman are much the
same as in word processing.  They can be copied, moved or deleted, and
they can be edited in terms of many and several musical parameters.

     File or, more properly, executable file, consists of a text file,
usually in final or polished form, which has been converted to executable,
standalone form and cannot be edited in Pianoman text editing mode.  As
denoted herein, "files" always have the extension EXE, and do not require
the presence of auxiliary software to induce a PC speaker and CPU to
generate music.  A "file" may be copied, moved, deleted, hidden, or renamed
just like any other DOS file.

     "Staccato" is the name of a Pianoman function apart from its customary
musical meaning and is an extremely important tool in PC music.  Because
the merge process obliterates differences between notes of the same pitch
occurring consecutively and for many other reasons, it is crucial to "tag"
notes at the string stage.  The "staccato" numbers then appear strewn
throughout the merged file and easily identify note clusters requiring
further manipulation.  No traces of these "markers" appear in the final
product, though they are vital to placing actual note shortening and
embellishment in the final work.

PIANOMAN DOES BEETHOVEN       - 3 -      NOTES ON ADVANCED TECHNIQUE



══════════════════════════════════════════════════════
 PHYSICAL CHARACTERISTICS AND LIMITATIONS OF PC MUSIC 
══════════════════════════════════════════════════════
     The PC speaker outputs neither round (flute-like) nor square (brassy)
waves, however, PC tones are in fact complex waves rich in overtone series
which vary with the context in which they are played.  At times, the PC
may sound like a woodwind;  at other times, a zither or balalaika.  Due
to variations in equipment specifications and configurations, every PC
has a sound of its own.  The PC is a new instrument -- part keyboard,
part electronic, part wind -- and unique in itself.

     Part of the richness of overtones produced by the PC (despite the
fact that tone signals emanate from the speaker one at a time) comes from
the layering of notes sharing overtone series (such as a major chord). 
If tone series are imparted and alternated from the speaker at rates faster
than tone decay in the CPU, what actually leaves the CPU and reaches the
ear is in fact true harmony.  This alternating emphasis in overtone blends
via arpeggiation at extremely rapid rates is what produces the vibrato
or tremolo characteristic of PC music.  

     Vibrato can be both friend and enemy of PC music.  At its extremes
and especially at lower registers, it can be perceived as tremolo.  Vibrato
can be exploited to provide contrast in texture but on a very limited
basis.  One must guard against creating a vibrato contrary to the overall
rhythm within a composition or radically unlike the vibrato preceding
or succeeding a given block of notes.  

     As a general rule, it is better to "stack" note clusters from highest
to lowest in pitch to both take advantage of vibrato or to counteract
it.  For example, it is better to order note clusters soprano-alto-
tenor-bass (C5-G4-E4-C4) than soprano-tenor-alto-bass (C5-E4-G4-C4) to
avoid confusing the natural vibrato that occur when the third note of
a cluster is higher in pitch than the second.  

     Vibrato is most likely problematic in contrapuntal passages combining
only two or three lines and with relatively large note subunits (45-72
msec);  the "topheaviness" of note clusters may compete with the rhythm
as intended by the composer and become uncomfortably apparent to the
listener.  On the other hand, for a more dramatic ritardando, it may be
desirable to deliberately lengthen the tempo of certain note clusters
rather than add more note clusters at the same tempo so that the change
in apparent vibrato enhances the effect of diminishing rhythm.
PIANOMAN DOES BEETHOVEN       - 4 -      NOTES ON ADVANCED TECHNIQUE


     In practice, tone coloring and vibrato may not be consistent from
PC to PC, nor even within a single composition on the same PC.  This is
due to variants in speaker construction, add-on cards and CPU size.  Given
an identical music file, the personal computer is indeed "personal" to
every user.

     Although the PC was designed to be able to produce ranges in pitch
rivalling the most elaborate church organ, the PC as an instrument is
notably deficient in ability to create contrasts in loudness or softness
("dynamics", "dynamic range").  This factor is the single most limiting
in appropriate choice of composition for transcription.  The most suitable
works are those originating with instruments with similar limitations
(e.g., clavichord, harpsichord).  Also suitable, however, are works so
well written that dynamic range is virtually built in;  that is to say,
compositions that create dynamic vitality despite the instrument and
despite the performer.

     On the PC, dynamic changes occur within a file for the most part
when the number of voices in a note cluster increases or decreases (and
note subunit lengths decrease or increase accordingly).  If the change
is too bold or too brassy, the dynamic level may have to be tempered by
subtle use of the staccato function or sleight of hand with tempo.

     Very high notes (two octaves above middle C) lose loudness, especially
if combined with two or more other voices.  These very often must be empha-
sized by adding duration to individual notes in these registers, but not
so much as to drag the line or create unwanted stress in the melody. 
A good rule of thumb is a 10% increase;  the timing can always be adjusted
later.

     The PC is also not very precise in "attacking" the first note, espe-
cially if it is in a lower register, probably because of the split second
delay for a sound wave to cross and then resonate within the CPU.  The
problem of "attacca" cannot be totally overcome, but it can be amelior-
ated by altering duration across the initial note cluster(s) or moderating
an initial long, low tone with extra staccato shortening.

     The most difficult technical problem usually encountered is that
of voice crossover, in other words, when two or more of the original
"strings" occupy the same pitch.  This not only causes abrupt increases
in loudness, but sudden discontinuity in polyphony.  Depending on circum-
stance, a part can be rewritten, the note(s) can be joined and then
separated with staccato;  if all else fails, the aberration must be left
in the piece.  Voice crossover is usually not a problem with music written
specifically for keyboard instruments, but with music written for two
or more contrasting instruments (e.g., violin/oboe/trumpet).
PIANOMAN DOES BEETHOVEN       - 5 -      NOTES ON ADVANCED TECHNIQUE



══════════════════════════════════
 OPPORTUNITIES FOR INTERPRETATION 
══════════════════════════════════
     The PC should not be taken lightly or as an instrument of mere tran-
scription.  There are numerous opportunities for interpretation and indivi-
dual character.  The software developer has provided a wide range of tools
not only to facilitate editing, but to allow for those elements which
separate a piano player from an accomplished musician.

     Phrasing, even if well provided for in the melody, is an important
element of performance on the PC.  It is not very difficult, though it
is tedious, to sculpture lines up to and over a crest towards a cadence. 
Doing such is very much within the judgment and foresight of the performer. 
This is most often done by emphasizing one or more subunits of a note
cluster to bring out a melody or to suppress a line of secondary impor-
tance.  Breaks in phrase are introduced with very minute rests, the presence
and duration of which are also at the discretion of the performer (e.g.,
6, 13 or 20 msec).  At times, it may be preferable for a note cluster
or clusters to linger prior to the next phrase;  this is done by slowing
tempo across the cluster(s) at the conclusion of the phrase.

     Interruptions and discontinuities which are introduced using the
software's "staccato" function (which diminishes note duration 10% for
each unit of staccato, an integer 1 through 9) may be transparent to the
listener but are important to diction and definition in many ways.  They
may signal the start or the end of a phrase, tone down the brassiness
in a one-voice line, create a rhythmic pulsing in any part, even impart
a "plucking" sound to fragment a line.  Proper usage of staccato oftentimes
requires the greatest amount of discretion and is heavily influenced by
context, tempo, subunit size, separation of parts as to pitch, mood,
and ascending/descending motion of the prevailing melody.

     Tempo changes can be done globally, in large blocks, or even by the
note.  They can signal the onset of a cadence or stress a transition between
themes.  On a concluding chord, broadening time values of the note clusters
can create a broadened tenuto in preference to simply adding clusters. 
Shortening tempo allows adding additional harmonic parts and can be used
to create sforzando.  Combining tempo shifts with added note clusters
is vital to proper embellishments as well as other facets of a piece.

     Certain pieces require internal tempo shifts which may or may not
be appreciated by the listener, but are vital to the execution of the
work.  For example, an acceleration may be noted when a series of four-
part note clusters shifts to one part harmony, more so in the EXE file
than in the corresponding MUZ.  Judgment must also enter into tempo deci-
PIANOMAN DOES BEETHOVEN       - 6 -      NOTES ON ADVANCED TECHNIQUE


sions as faster machines (286, 386) tend to add speed to executable files. 
As demonstrated by the files on this disk, the PC is quite capable of
a range of tempos and is not compelled to play its files prestissimo (or
at high pitch), but the PC's own nature may have to be dealt with.

     Key signature, as indicated by the composer, is often not within
the effective range of a PC or otherwise does not translate well from
the written instrument to the PC.  It is a very easy matter to shift key
or octave at will.  [Key shifting is also valuable in creating a second
"string" from one already recorded (for example, bringing the alto "string"
down a minor third rather than record a tenor "string" from scratch).] 
With Beethoven and earlier composers, the composer's choice of key signature
is usually the optimum in that their instruments approximate the PC in
effective range.



════════════════════════════
   THE WORKS ON THIS DISK   
════════════════════════════

                       ≡≡≡≡≡ Minuet in G-Major ≡≡≡≡≡
                       *******   MINUET-G    *******

     "Minuet in G" is in typical classical AA A'A' BB B'B' AA' form (where
B and B' represent the parts of the trio and A and A', the minuet).  With
Pianoman software, it was necessary to record only the four voices (strings)
for each of the parts A, A', B and B' (i.e., 16 initial text files, not
40), merge the sets, and use block copying at the text editing stage for
the repeats.  A slight tenuto was added at the end of the second B' and
final A' using the software's copy and then tempo function across one
or two note clusters.

     There is a textural and dynamic contrast between the minuet portion
and Trio because the minuet is in four part harmony whereas the Trio is
in two parts.  For this reason, the divisor (applied during the merge
process) for the Trio created much larger initial subunits (before adjusting
for tempo).  This enabled the Trio to be at a much faster final tempo
with far greater clarity of melody and harmony than the minuet.

PIANOMAN DOES BEETHOVEN       - 7 -      NOTES ON ADVANCED TECHNIQUE



       ≡≡≡≡≡ Six Variations on a Duet from the Opera Molinara ≡≡≡≡≡
       ********************     MOLINARA     **********************

     These six variations on an opera aria by the composer Paisiello are
the most representative of "classical" Beethoven among the files on this
disk.  They were done in seven different merge files, the number of strings
in each and the divisor of the notes varying with each section.

     Added after the merge process were several embellishments (certain
of which "begin" and take time from the immediately preceding note, not
on the downbeat), phrasing such as minute breaks in a line, "broadening"
up to and over the crest of a phrase by altering the duration given the
melodic component of a note cluster, and the slight weight given to the
completion of a phrase by increasing time value of the note cluster
slightly.

     Specific features to note are the delicate phrasing of the opening
theme (not done with tempo, but staccato at very precise intervals),
different kinds of ritards taken at several different points (straight
line, geometric decay, shelving), shaping of phrase lines (altering balance
in note clusters), 6/8 rhythms even between clusters of the same pitch
(staccato corrugation across specific clusters), diction in descending
and ascending melody (by combinations of tempo broadening, staccato
interruption and insertion of the briefest of rests).

     At many instances, the physics of the PC was at odds with the intent
of the composer.  This is especially prevalent where two-, three-, or
four-part harmony gives way to a one-part continuo in the bass;  the
machine's natural inclination is a sudden shift to mezzo forte after several
measures of mezzo piano, when a diminuendo is actually desired.  Overcoming
this tendency very artful manipulations, sometimes by the cluster, sometimes
by the note.


             ≡≡≡≡≡ Seven Variations on the National Song ≡≡≡≡≡
             *******************   7-VAR   *******************

     [When Beethoven adopted this theme and wrote the Seven Variations
upon it, he was thinking of Great Britain's "God Save the King", and not
the American "My Country 'Tis of Thee".  Our own U.S.A. at that time was
still very much in the back woods.]  

     7-VAR is illustrative of the range of textures and rhythms that can
emanate from a personal computer even in a single file.  From the march
like passages of the theme and sixth variation, to the contrapuntal second
PIANOMAN DOES BEETHOVEN       - 8 -      NOTES ON ADVANCED TECHNIQUE


variation, to the triplet and seemingly accelerating coda, 7-VAR is a
showpiece not only of Beethoven's prowess for keyboard composition, but
of the PC's strengths and range as a keyboard instrument.

     7-VAR is an example of an "assembled" piece - a composite of ten
or more separate merge files, each originating from its own cluster of
strings, each with its own merge divisor - then the parts fit together,
evened for tempo and linked with an appropriate rest in between.  At one
time 7-VAR existed as eight separate files, however, delays between them
as they "booted" could not be controlled from PC to PC or from drive to
drive and were far too large for satisfying downbeats or smooth transitions
in any event.

     Advanced editing of 7-VAR was aided significantly by the development
of "markers" in Pianoman software.  With the marker function, one can
specify, for example, Marker #1, to be placed at the beginning of, say,
Variation 1.  Later on, no matter how many notes were added or deleted
elsewhere, one could "goto" Marker #1, wherever it appeared in the text
file.  The software allows up to 10 markers, uniquely identified by integers
0 through 9, and permits locating the cursor by marker number, by previous
or next marker (even if not consecutively placed), by relative distance
(as measured in absolute number of notes) and/or by exact grid location.



             ≡≡≡≡≡ Sonata Pathètique:  Adagio cantabile ≡≡≡≡≡
             *****************   SPADAGIO   *****************

     This movement, denoted "Adagio cantabile" by the composer, is performed
at a moderate andante here.  As a keyboard composition, SPADAGIO is at
the cutting edge of what the PC is and is not able to do competently without
auxiliary hardware.  The physics of the instrument created indefatigable
tremolo in the primary theme at any slower tempo, and there was a great
deal of difficulty unifying the main theme portion (which was cut in 8)
and the secondary theme (which was cut in 12) without inordinate textural
conflict.  Most of all, the PC's lack of dynamic control seriously
undermines the range of expression and interpretation available from
the acoustic piano.

     The opening theme was merged such that 8 smaller notes occupied the
duration of an eighth note;  the second them was merged such that twelve
smaller notes occupied the duration of an eighth note.  This was necessary
to establish triplet pulsing in the lower parts.  The pulsing of the lower
lines is accomplished by alternate "corrugation" with staccato markings
PIANOMAN DOES BEETHOVEN       - 9 -      NOTES ON ADVANCED TECHNIQUE


in the final work (liberally marked and indicated in the pre-merged
strings);  it does not naturally occur in the composition.  Elsewhere
in the composition, rhythm and pulse occur naturally by movement of inner
parts.

     Of all the works on this and perhaps that I have transcribed for
PC, SPADAGIO is most heavily reliant on the staccato function and in ways
too numerous to describe here.  As an exercise, one might globally cancel
all staccato throughout a SPADAGIO textfile to find the piece has lost
all substance -- no melody, no rhythm, uncontrolled vibrato, little
difference between main and secondary theme, and more.  Not to mention,
degree of staccato is just as important as location in a series of notes,
and can make or break the performance.

     In many sections of SPADAGIO, fifth and sixth harmonic parts were
added after merging, primarily to generate fullness in harmony, but at
major cadences, to create the illusion of thickness or and/or to create
sforzando.  At some cadences, the number of note clusters was increased
while the time value per subunit was decreased for added emphasis and
to mask vibrato changes caused by the addition of fifth or sixth harmonic
parts.

     The tempo of this movement very much relates to whether it immediately
follows the Allegro molto e con brio of the 1st movement and introduces
the Allegro of the 3rd.  To my mind, played apart from its companion
movements, the "adagio" cantabile does require a faster tempo, whether
on piano or PC;  in this version, the limits of the PC were a major factor
in determining tempo, but admittedly, not the only one.


            ≡≡≡≡≡ The Moonlight Sonata: Adagio sostenuto ≡≡≡≡≡
            *****************   MOONLEIT    ******************

     MOONLEIT represents Beethoven the "romanticist".  It was composed
well into his adult life after hearing loss began to be obvious and
intractable.  MOONLEIT utilizes pitches beyond the ability of the "sound
chamber" or CPU to generate effectively -- notes more than two octaves
below middle C on the piano.  In this case, however, they are only used
to "double" the next adjacent line and reinforce the low overtones produced
by that line.  (The fourth string was easily generated by dropping the
third string an octave and saving under a new filename.)  Beethoven may
have relied on this "doubling" on his instruments as well:  the equipment
of his day (pianoforte) had not yet acquired the iron-enforced soundboards
necessary to transmit pitches in those registers capably. 

PIANOMAN DOES BEETHOVEN       - 10 -     NOTES ON ADVANCED TECHNIQUE


     The sixteenth notes against quarter triplets would have destroyed
the melody had they been accounted for prior to the merge stage.  (The
subunit sizes for the entire file would have been impossibly tiny.)  The
illusion of 16th notes against quarter triplets was added later by pro-
longing note clusters and wedging in 64th and 128th note rests as needed.

     Also added after the merge were the fifth harmonic parts (which
Beethoven himself specified) to accentuate triplet motion which, variously,
created rhythm syncopation, emphasized modulation, drew attention briefly
from the main melody and/or signalled the beginning of a new triplet
pattern.  Details such as these in the original composition and added
in the merge file help to offset the PC's inability for dynamic expression.

     Beyond compositional aspects, MOONLEIT is effectively transferred
to the PC because its long, sweeping lines and phrases are conducive to
a smoothly flowing continuum of note clusters.  There is little or no
"buzzing" or tone conflicts such as created by faster moving or more
intricate compositions;  the vibrato so unnatural in other settings is
a striking asset, making MOONLEIT among the most beautiful works in the
PC's repertoire.



              ≡≡≡≡≡≡    * Nancy Moran                   ≡≡≡≡≡≡
              ≡≡≡≡≡≡      607 Park Avenue               ≡≡≡≡≡≡
              ≡≡≡≡≡≡      Baltimore, Maryland  21201    ≡≡≡≡≡≡
              ≡≡≡≡≡≡      U.S.A.                        ≡≡≡≡≡≡


               * Author of:  Christmas Concerts, vols. 1 and 2
                             Pianoman Goes Bach
                             Pianoman Goes Baroque


               Comments or questions welcome. 
                                                                 2/89

PIANOMAN DOES BEETHOVEN       - 11 -     NOTES ON ADVANCED TECHNIQUE



════════════════════════════
 REFERENCES/FURTHER READING
════════════════════════════

Fleming, William:  Arts & Ideas: New and Brief Edition;  Holt, Rinehart
      and Winston, Inc., 1974

Harvard Dictionary of Music (2nd edition), ed. by Willi Apel, The Belknap
      Press of Harvard University Press, Cambridge, Massachusetts, 1969

Károlyi, Ottó:  Introducing Music;  Penguin Books, 1965

Stuckenschmidt, H.H.:  Twentieth Century Music;   World University Library,
      McGraw-Hill Book Company, 1969

Watts, Edith:  A History of Musical Instruments (pamphlet);  The
      Metropolitan Museum of Art (School Picture Set series), undated

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1396

     Volume in drive A has no label
     Directory of A:\

    LVB      BAT      2131   4-01-89   3:00a
    7-VAR    EXE     98446   4-01-89   3:00a
    MINUET-G EXE     27016   4-01-89   3:00a
    MOLINARA EXE     58480   4-01-89   3:00a
    MOONLEIT EXE     73924   4-01-89   3:00a
    SPADAGIO EXE     43090   4-01-89   3:00a
    LVB-READ ME       3865   4-01-89   3:00a
    FILE1396 TXT      1488   5-30-89  10:45a
    LVB      TXT     26544   4-01-89   3:00a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       540   5-30-89  10:40a
    VIEW     BAT        43   5-30-89  10:41a
    PAGE     COM       325   1-06-87   4:21p
           13 file(s)     335930 bytes
                           17408 bytes free
