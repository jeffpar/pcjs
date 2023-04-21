---
layout: page
title: "PC-SIG Diskette Library (Disk #477)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0477/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0477"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NAMEGRAM"

    What do Lewis Carroll, Vladimir Nabokov, Jim Morrison, and Roman
    Polanski have in common?  They all played with anagrams.  Lewis Carroll
    rearranged politician William Ewart Gladstone's name to spell "wild
    agitator! means well".  Nabokov named a character in Lolita "Vivian
    Drakbloom", an anagram of his own name.  Jim Morrison of "The Doors" was
    "Mr. Mojo Risen'".  And in the movie Rosemary's Baby, an anagram is an
    important clue.  Picture these creative artists hunched over a desk
    with a big dictionary arranging Scrabble titles to form words.  If only
    they had NAMEGRAM!  With NAMEGRAM, creating anagrams is a breeze.
    
    NAMEGRAM takes a name or phrase, of up to 40 characters, and, using each
    letter only once, creates anagrams.  The output, 1 to 16 letters each,
    are real English words.  A curious, but fascinating exercise.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BREK2.TXT

{% raw %}
```
                                ┌──────────────┐
 ╔══════════════════════════════╡  BREAK DOWN  ╞══════════════════════════════╗
 ║                  ┌───────────┴──────────────┴───────────┐                  ║
 ║                  │  copyright 1985 by Neil J. Rubenking │                  ║
 ║                  └──────────────────────────────────────┘                  ║
 ║                                                                            ║
 ║   BreakDown -- a text analysis program by Neil J. Rubenking, inspired by   ║
 ║   the article on the "TRAVESTY" program in the November 1984 BYTE, by      ║
 ║   Kenner and O'Rourke, which was itself inspired by Brian Hayes' article   ║
 ║   in the November 1983 Scientific American.                                ║
 ║        This program, written in TURBO Pascal, uses BORLAND's  TURBO        ║
 ║   TOOLBOX to manage its data.  Note that the DATA files it produces will   ║
 ║   be B I G.  In the unlikely case of NO repetition of text patterns, the   ║
 ║   .DAT file will be S*C bytes, where S is the # of bytes in the source,    ║
 ║   and C is the number of characters being tracked (currently 34).  You     ║
 ║   will have the chance to distribute the files to various disks.           ║
 ║        You can read several texts into the same BreakDown, or Merge two    ║
 ║   BreakDowns.  In this way, you can build up a "style table" for one       ║
 ║   author, or create bizarre hybrids.                                       ║
 ║                         ┌────────────────────────┐                         ║
 ╚═════════════════════════╡  PRESS A KEY TO BEGIN  ╞═════════════════════════╝
                           └────────────────────────┘
```
{% endraw %}

## BREKDOWN.DOC

{% raw %}
```






                                     BREAK DOWN
                       A text analysis and generation program
                               written in TURBO Pascal
                        copyright 1985 by Neil J.  Rubenking

                                requires DOS 2.0, 96K

          I.AN ANALOGY
               There  is  a  fairly  commonly  believed  "fact" that if you
          set  millions  of  monkeys  typing  at  random  on   millions  of
          typewriters for  millions of  years, they  would eventually crank
          out all the world's  great literature.   Deep  down inside, BREAK
          DOWN is  just one  of those monkeys, but this monkey is educated.
          BREAK DOWN "reads" a text  and  creates  a  frequency  table that
          gives it  some method  in its madness.  The output can be surpri-
          singly similar to the input.  

          II.  WHAT DOES IT DO?
               To analyze a text, BREAK  DOWN  looks  at  it  in  chunks of
          a particular  size (one less than the "order") and keeps a record
          of what characters occur  immediately  after  that  pattern.   If
          the  chunk  is  new  to  the  frequency table, it is added to the
          table.  Its frequency  array is  initially all  zeros, except for
          the  current  next  character.    If  the chunk already exists in
          the table, its frequency array  is  incremented  by  one  for the
          current next  character.  Then the "chunk" is shifted one charac-
          ter to the right and the process goes on -- that is,  the chunk's
          first  character  is  dropped  and  the  current  next  character
          is tacked onto the end.

          III. WHAT MAKES IT SPECIAL?
               Checking to see if  the chunk  is present  would be  quite a
          task if  the frequency  table were stored sequentially.  Fortuna-
          tely, BORLAND International sells a product  called TURBO TOOLBOX
          that implements  fast indexed  storage, using  the B-Tree system.
          (For a discussion of B-Tress and TURBO TOOLBOX,  see the February
          1985 PC  Tech Journal).   The  chunks of  text are  stored in the
          B-Tree index file -- they are the KEYS.   The  data file contains
          only the  frequency arrays.   Ordinarily,  the KEYS would also be
          stored in the data file,  but  this  redundancy  is  not strictly
          necessary.    Since  the  data  file  can conceivably contain one
          record for every BYTE in the source, we  want to  keep the record
          size to  a minimum.  (This "worst case" would occur if NO pattern
          in the text occurred more than once.)






          IV.  WHAT ARE THE INPUT LIMITS?
               At present, BREAK DOWN  tracks  34  characters.    These are
          the  26  lower-case  alphabetic  characters,  the  space, period,
          comma, dash, question mark, number symbol  and single  quote, and
          ASCII character  20, the  paragraph symbol.  If a line is shorter
          than the  constant  "LineWidth"  (currently  set  to  55),  it is
          considered to have ended "early" with a hard Carriage Return, and
          is marked  with the  paragraph symbol  at the  end.   In the pre-
          processing phase (procedure "CleanUp"), all letters are converted
          to lower-case, all numbers are  reduced  to  a  single  # symbol,
          double quotes become single quotes, and all unused punctuation is
          removed.  It would, of course, be possible to track  more charac-
          ters, but each character adds a byte to every record.

          V.   HOW DOES IT WORK?
               To  generate  a  new  text,  BREAK  DOWN selects at random a
          KEY that begins with  a space  (i.e., one  that doesn't  start in
          the middle  of a word.)  It then looks up the frequency array for
          that KEY and  selects  the  next  character  at  random  from the
          characters with  non-zero frequency, weighted by the frequencies.
          This character is added to the  current output  line, and  to the
          current KEY  chunk.   If the paragraph symbol is encountered, the
          line is automatically ended.  Also, the current line ends  at the
          first space  encountered after its length surpasses the LineWidth
          constant.  The first alphabetic character after a period,question
          mark, or line end is capitalized.

          VI.  HOW SHOULD I SET IT UP?
               BREAK DOWN  is a prime candidate for RAMDisk operation.  The
          B-Tree file access  limits  the  number  of  disk  accesses quite
          a  bit,  but  there  are  still several accesses for each BYTE in
          the source file.  The data  file of  a text  under 10K  in length
          will  definitely  fit  on  one  floppy,  but  an  11K  file could
          conceivably run over that length.   You are  expected to  be sure
          you have  enough space.  You may distribute your files to various
          disk drives -- a likely  arrangement  is  .DAT  file  on  drive B
          and source, .INX file, and BREAK DOWN program on drive A.

          VII. TIPS FOR USE
               The  higher  the  order,  the  more  intelligible the output
          will be.   However,  a high  order and  a short  text will mostly
          just  regenerate  the  original.    Experiment with various texts
          and various orders.  You can  use the  [L]ist option  to see just
          what sort  of records  are being  generated.  BREAK DOWN has been
          tried on a 100K text file, with the Order set  to the  maximum of
          8.   It took over 6 hours and generated a 1.8 megabyte data file,
          but it worked.  






          VIII.     DEFAULT OPTIONS
               BREAK DOWN will prompt you for the Order each time  you make
          a selection  from the menu.  After you have entered an Order, you
          can just hit <return> for the previous value.  The MAIN file name
          works the  same way -- after the first time you enter it, hitting
          <return> will  recall the  same name.   The default  for the .DAT
          and .INX  drives, and the output file, if any, is the same as the
          source file.  Thus, if you have  [A]nalyzed a  text with  all its
          files on one drive, you can fill in the blanks for [G]enerating a
          travesty by repeatedly hitting <return>.

          IX.  ADVANCED (?) USE
               The [M]erge option lets you combine two data files, possibly
          from  wildly  different  sources.    The  data and index files of
          the"source" will be permanently changed, so you may  want to keep
          a copy.   You  can also  "read in"  another text into an existing
          data file.   Use  this  option  to  build  up  a  frequency table
          "model" of a particular author, or to make bizarre hybrids.

          X.   WHAT'S IT GOOD FOR?
               BREAK  DOWN  is  a moderately sophisticated database program
          with almost no "serious" uses.  However, there  are all  kinds of
          non-serious uses  for it.   Read  in three  or four "letters from
          camp" and then let the PC generate more.   Generate  new speeches
          based  on  Our  President's  proclamations.   Find out what Lewis
          Carroll would have written had he been a Zen Master.   Or examine
          the program  itself to  see how  the TURBO TOOLBOX can be used to
          manage other sorts of data.  

          XI.  CREDITS
               This  program  was  inspired  by  the  TRAVESTY  program  in
          the November  1984 BYTE  magazine, by  Kenner and O'Rourke.  They
          in turn were inspired by an article in the Scientific American of
          November  1983  by  Brian  Hayes.   Both these articles make good
          reading.  TURBO  TOOLBOX  and  TURBO  Pascal  are  available from
          BORLAND International, 4113 Scotts Valley Road, Scotts Valley, CA
          95066.  BREAK DOWN itself was  written  by  Neil  J.   Rubenking.
          This program may be freely used and copied, but I retain the sole
          right to SELL it.  Users Groups and  Software Clubs  may charge a
          reasonable price for the disk and copying/handling charges.   

```
{% endraw %}

## FILES477.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 477  Name Gram / Break Down / Fone Word                    v2.2 DS2
----------------------------------------------------------------------------
Namegram is a program that takes an input word, usually a name, and compares
it to a set of compressed word files.  In doing this, it can generate a set of
anagrams of the word or name.  Break Down is a strange, but interesting
program.  It has almost no practical uses, except perhaps for entertainment,
but this does not limit its value.  This algorithym takes an input text file
(I tried about two paragraphs of an old English paper) and transforms the
source text into a bunch of sentences that make little to no sense, but
somehow they do!?
 
------------  Name Gram
NAMESMAL COM  Main program
MASHED   02   Compressed word files used by Namegram
MASHED   03   Compressed word files used by Namegram
MASHED   04   Compressed word files used by Namegram
MASHED   05   Compressed word files used by Namegram
MASHED   06   Compressed word files used by Namegram
READNAME COM  Screen driven DOCumentation program for Namegram (33k)
------------  Break Down
BREKDOWN COM  Main Program
BREKDOWN PAS  Pascal source code for Brekdown program
BREKDOWN DOC  Short documentation for Brekdown (3 pages)
BREKDOWN XMP  Some examples of text generated by Brekdown (3 pages)
BREK2    TXT  Associated text file used by Brekdown
ROMEO    O5T  Order-5 Breakdown of the "window scene" from Romeo & Juliet
ROMEO    O8T  Order-8 Breakdown of same, cleaned up and puntuated.
REAGAN   OUT  Order-8 Breakdown of the '85 State Of The Union address
------------  Phone Word
FONEWORD COM  Main Program
FONEWORD DOC  Documentation of Foneword program
WORDFONE COM  Reverses Foneword program
------------  BONUS files:  Created using my PIANOMAN program
WILDWEST COM  "The Wild West Is Where I Wanna Be" by Tom Lehrer
WILLTELL COM  "The William Tell Overture" by G.A. Rossini
INVENTN4 COM  Two-part Invention #4 in D-Minor, by J.S. Bach
CIRCUS   COM  Theme from Monty Python's Flying Circus, by J.P. Sousa
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## FONEWORD.DOC

{% raw %}
```
 |      FONEWORD and WORDFONE        | Written by Neil J. Rubenking        |
 |                                   |            300 Page St.             |
 | inspired by Patrick Cox of PC-SIG |            San Francisco, CA  94102 |
 ===========================================================================
  Would people remember your phone number better if they heard it in the
  form of a word?  Can you remember that IBM's PC User Group support line
  has the phone number IBM-PCUG?  Pretty easy, isn't it.  FONEWORD will
  take your phone number and return all 2,187 possible equivalent words.
  The "0" and "1" buttons don't have any letters on them, so they pass
  without change.  You can view the result as 11 screenfuls on your
  monitor, or have it printed out as 4 pages.

  If, like me, you have trouble DIALING word-type phone numbers, WORDFONE
  is the program for you.  Enter "WORDFONE" and the word, and it quickly
  returns the number to dial.  E.g., "WORDFONE ENGLAND" returns 364-5263.

  Patrick felt that a program like this would be useful in business.  If it
  is indeed of use to you, a contribution of $5 or $10 will encourage me to
  continue writing software on this basis.

  I could write a version of FONEWORD that would actually check for REAL
  words, or combinations of words.  However, I probably won't unless a
  lot of interest is shown.

  NEW:  If you have trouble reading the FONEWORD screens on a B&W composite
  monitor, just add the parameter /BW -- e.g., "FONEWORD /BW".
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0477

     Volume in drive A has no label
     Directory of A:\

    BREK2    TXT      1724   8-02-85   3:30p
    BREKDOWN COM     34066   5-19-86   9:01a
    BREKDOWN DOC      8525   2-06-85   5:24p
    BREKDOWN PAS     31991  12-18-85   6:27p
    BREKDOWN XMP      5859   2-06-85   5:29p
    CIRCUS   COM     45056   7-21-86   6:13p
    FILES477 TXT      2257   9-29-86   1:23p
    FONEWORD COM     19442   5-28-86   3:30p
    FONEWORD DOC      1541   5-28-86   3:31p
    GO       BAT      1565   9-29-86  10:42a
    INVENTN4 COM      3955  11-29-84   6:35p
    MASHED   02        128  12-22-85   6:14p
    MASHED   03       1152  11-23-85   7:42a
    MASHED   04       5248   4-23-85   6:24a
    MASHED   05      13952   4-24-85   7:45p
    MASHED   06      27008   4-28-85   8:18a
    NAMESMAL COM     28290   5-28-86   2:28p
    READNAME COM     45199   5-28-86   3:13p
    READTHIS 1ST      1200   7-23-86  10:58a
    REAGAN   OUT     17920   8-03-85   8:21a
    ROMEO    O5T      4031   5-14-86   1:24p
    ROMEO    O8T      3584   5-14-86  12:28p
    WILDWEST COM     24320   5-06-86   9:13p
    WORDFONE COM     12408   5-25-86  11:39a
           24 file(s)     340421 bytes
                            9216 bytes free
