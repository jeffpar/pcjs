---
layout: page
title: "PC-SIG Diskette Library (Disk #1030)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1030/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1030"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BECKNERVISION VIDEO DATABASE MANAGER"

    Get your video library in shape with BVIDEO, the database for
    cataloging
    and organizing records for your video tapes.  Each entry includes a tape
    number, title, start and end memory number, machine number, category,
    rating, date entered, tape type, and search parameters.  For each entry
    you can write short comments or notes in the memo section.  Records can
    be added, deleted, edited, or searched.  The reports option can print a
    list of tapes by catalog, rating, tape number, or alphabetical order.
    You can also print a list of categories and machine types.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BVIDEO.TXT

{% raw %}
```
Thank you for your acquisition of BECKNERVISION VIDEO DATABASE MANAGER.
We hope that it will be useful enough to you that you will register with
BecknerVision.  To register, send $20 to

BecknerVision CMR
Dept 17
P O Box 1541
Lumberton, NC  28359-1541

Your registration provides for the following:

1.  You receive all future updates of the product for a 5-year period.
2.  You may participate in the BecknerVision Product Owners special
interest group on the BecknerVision Communications BBS.  All product
updates are available for downloading on this BBS, but the source files
are available only to registered users.

We ask that all users register, but it is not mandatory.  Only if you
find the software useful do we ask for your support.

Regardless of whether you register or not, you may join BecknerVision
Communications by having your communications parameters set to either
"8-bit, no parity, 1 stop bit" or "7-bit, even parity, 1 stop bit".
Both 300 and 1200 baud are supported.  We recommend that you use PROCOMM
for your communications, since it allows you to access the full-color
menus and the full-screen system in the external programs ("doors").
PROCOMM is available from PC-SIG (disk #499), 1030 East Duane Avenue,
suite D, Sunnyvale, CA 94086, or may be downloaded from our BBS.


The program
-----------

To load the program, enter the command "BVIDEO" at the system prompt.
The program will start with the "User Supported" message.  Press <ENTER>
(or wait 60 seconds) to get to the main screen.

The index files do not come with the program and are dynamically created
when you first load the program.  The main screen will appear and will
look as follows:

BecknerVision Video Database Manager
Copyright (c)1987 John Wm Beckner . P O Box 1541 . Lumberton NC 28359-1541
┌──────────────────────────────────────────────────────────────────────────────┐
│╔══════════╗╔═════════════════════════════════════════════╗╔═════════════════╗│
│║  OPTIONS ║║              VIDEO INFORMATION              ║║       MEMO      ║│
│║──────────║║─────────────────────────────────────────────║║─────────────────║│
│║Sequence  ║║ Tape # ...........    1                     ║║Excellent film   ║│
│║Get video ║║ Title ............ Rock & Roll - A Trilog   ║║depicting the    ║│
│║Add video ║║ Start memory # ...     0                    ║║history of Rock  ║│
│║Edit curr ║║ End memory # .....     0                    ║║& Roll.  Was a   ║│
│║Delete    ║║ Machine # ........  1                       ║║6-part           ║│
│║+/next    ║║ Category # .......   1                      ║║mini-series.     ║│
│║-/prior   ║║ Rating ........... G                        ║║The first        ║│
│║Filter    ║║ Date entered ..... 02/12/87                 ║║recording made   ║│
│║──────────║║ Tape type ........ B                        ║║from TV.  Uses   ║│
│║Reports   ║║ Search parameters: Elvis, Buddy Holly, Li   ║║the entire L-830 ║│
│║Maintenanc║║                                             ║║tape.            ║│
│║──────────║║                                             ║║                 ║│
│║Quit      ║║                                             ║║                 ║│
│╚══════════╝╚═════════════════════════════════════════════╝╚═════════════════╝│
└──────────────────────────────────────────────────────────────────────────────┘

SEQUENCE Tape #               FILTER OFF          Record #   1

Naturally, we already have tapes in our database, so the above is the
first tape in "Tape #" sequence with no filter established (don't worry,
"filter" and "sequence" will be discussed in detail later).  First let's
see what you see in the tape window:

       ╔═════════════════════════════════════════════╗
       ║              VIDEO INFORMATION              ║
       ║─────────────────────────────────────────────║
   (1) ║ Tape # ...........    1                     ║
   (2) ║ Title ............ Rock & Roll - A Trilog   ║
   (3) ║ Start memory # ...     0                    ║
   (4) ║ End memory # .....     0                    ║
   (5) ║ Machine # ........  1                       ║
   (6) ║ Category # .......   1                      ║
   (7) ║ Rating ........... G                        ║
   (8) ║ Date entered ..... 02/12/87                 ║
   (9) ║ Tape type ........ B                        ║
  (10) ║ Search parameters: Elvis, Buddy Holly, Li   ║
       ║                                             ║
       ║                                             ║
       ║                                             ║
       ╚═════════════════════════════════════════════╝

(1)  The tape number is the number you assign to your videos.  It may be
any number in the range 1-9999.  So you can have up to 9,999 tapes in
your library!  (If anyone has more, they can afford to send me the $20
registration fee telling me the maximum number of tapes they have, and I
will increase it!)

(2)  The title is a 40-character field with the film title normally
entered here.  Though the field holds 40 characters, only 22 characters
are displayed.  If you edit this field, and the title is more than 40
characters, it will scroll horizontally (don't worry, its all there for
the reports, though).  You should keep your film names in alphabetical
order, so that a film entitled "The Attack of the Mermaids" would be
entered as "Attack of the Mermaids, The".  On your reports, the computer
will place it alphabetically, but will put the word "The" back in front.

(3)  Start memory is the memory number on your tape where the film
starts.  If you have more than one machine, you should use only one
machine for memory numbers, or if you have a beta and a VHS, use the
VHS memory number for VHS tapes and the beta memory number for the beta
taps.

(4)  End memory is the next available memory number after this video
where something can be (or has been) recorded.

(5)  Machine number indicates which machine you are using for the memory
numbers above.  For example, if you have 3 beta machines and 1 VHS
machine, you might have them numbered (1) Beta #1, (2) Beta #2, (3) Beta
#3 and (4) VHS.  Since memory numbers differ on different machines, it
is important to know which machine's numbers you used.  If you only have
1 machine, enter a <1> here.

(6)  Categories are user-defined.  Only 2 come defined on your system,
COMEDY and DRAMA.  You may change these and add to the file using the
MAINTENANCE option.

(7)  Rating.  This is user-defined, but should be uniform.  We use the
following:
                 <G> - "G"
                 <P> - "PG"
                 <3> - "PG13"
                 <R> - "R"
                 <X> - "X"

(8)  Date entered.  The system places the current system date in this
field when you add a new video.

(9)  Tape type.  Another user-defined field, but we use the following:
                 <V> - VHS SLP ("Super-long play")
                 <L> - VHS LP ("Long play")
                 <S> - VHS SP ("Standard play")
                 <B> - Beta III
                 <2> - Beta II

(10) Search parameters are user-defined.  Whatever you place in here
will be the parameter checked (along with the title) when you choose to
get a video by string (see the GET option).  I usually place actors and
actresses names, directors, producers, or anything that I will want to
search for later and have it find this particular video.


The options
-----------

The option window is shown below:

       ╔══════════╗
       ║  OPTIONS ║
       ║──────────║
   (1) ║Sequence  ║
   (2) ║Get video ║
   (3) ║Add video ║
   (4) ║Edit curr ║
   (5) ║Delete    ║
   (6) ║+/next    ║
   (7) ║-/prior   ║
   (8) ║Filter    ║
       ║──────────║
   (9) ║Reports   ║
  (10) ║Maintenanc║
       ║──────────║
  (11) ║Quit      ║
       ╚══════════╝

The options are chosen one of 2 ways.  You may use you arrow keys to
move from one option to the next, and press <ENTER> to choose the
option, or you may simply press the first letter of the option to have
it executed.  The options are described below:

(1)  SEQUENCE.  When you scan through the video records one at a time
using the <+> and <-> options, they are accessed in a particular
"sequence".  The default sequence is "Tape #", so that as you scan
through the videos you are scanning in order of their tape numbers.
This option changes the current sequence based on the following chart:

                    ┌──────────────┐
                    │    Tape #    │
                    └──────┬───────┘
                           │
                    ┌──────┴───────┐
                    │ Rating+Title │
                    └──────┬───────┘
                           │
                    ┌──────┴───────┐
                    │Category+Title│
                    └──────┬───────┘
                           │
                    ┌──────┴───────┐
                    │    Title     │
                    └──────┬───────┘
                           │
                    ┌──────┴───────┐
                    │   Record #   │
                    └──────────────┘

After record number, it returns to Tape # sequence.

(2)  GET VIDEO.  The following menu window will appear:

          ┌───────┐
       ╔══│FIND BY│════╗
       ║  └───────┘    ║
   (A) ║A. Record #    ║
   (B) ║B. Tape #      ║
   (C) ║C. Title       ║
   (D) ║D. String      ║
   (E) ║E. 1st rec     ║
   (F) ║F. Last rec    ║
       ╚═══════════════╝

     (A)  RECORD #.  The system will ask for the record number to search
     for.  The system will not allow you to enter an invalid number.
     The default is the current record.

     (B)  TAPE #.  The system will search for the tape number you
     enter.  If it isn't found, then the current record does not change.
     If found, the first video with that tape # will be displayed.

     (C)  TITLE.  Enter the exact title you want, or the left-most
     characters of it.  For example, if you enter "Mermaids" then it can
     find "Mermaids of the Deep".  Note that this option is "case-
     sensitive", meaning upper and lower-case characters are considered
     separate characters.  If you had enter "MERMAIDS", it would NOT
     have found "Mermaids of the Deep".

     (D)  STRING.  You may enter up to 254 characters (this is another
     "horizontal-scroll" field) with which to search for.  This option
     is NOT case-sensitive (as a matter of fact, you couldn't enter
     lower-case characters if you tried!).  If you want to find the
     first video with John Doe, famous actor, and you had entered his
     name into the SEARCH field when you entered the video information,
     OR his name is in the title, then it will be found.

     (E)  1ST REC.  This will find the first record in the database
     which matches the current filter and sequence (refer to the
     SEQUENCE and FILTER options for more information).

     (F)  LAST REC.  Same as (E), but will find the last record.

(3)  ADD VIDEO.  This options lets you add a new video to your library.
The fields described earlier are entered (except for DATE ENTERED, which
is assigned by the system), then you are placed in the memo field.
Refer to the MEMO section for more information.

(4)  EDIT CURR.  Same as (3), except it lets you edit the current video
instead of adding a new one.

(5)  DELETE.  This option lets you delete the current video.  Actually,
it marks the current video for later deletion through the maintenance
option OPTIMIZE SYSTEM.

(6)  +/NEXT.  Gets the next record based on the sequence and filter.

(7)  -/PRIOR.  Gets the prior record based on the sequence and filter.

(8)  FILTER.  Like a coffee filter, this video filter lets you remove
videos you don't want.  Actually, nothing is removed from the system, it
is merely screened out.  For example, if you were interested in scanning
through your videos with a "G" rating, you could set the filter to
"RATING='G'".  A filter is made up of an expression which must evaluate
to true or false for each record.  The following fieldnames may be used
in filters:

   TAPE_NO    numeric
   TITLE      character
   START_NO   numeric
   END_NO     numeric
   MACHINE    numeric
   CATEGORY   numeric
   RATING     character
   DATE       date
   TYPE       character
   SEARCH     character


The parameters are entered exactly like a dBase (a trademark of Ashton-
Tate) FOR clause (which is what they become).  If you aren't familiar
with dBase, then you may acquire the book.  This program was written in
Clipper (a trademark of Nantucket).  In any case, here are some
practical examples for you:

   TAPE_NO >= 1 .AND. TAPE_NO <= 99
      this would limit the scan to tapes number 1-99

   RATING = "G"
      limit search to ratings of "G"

   DATE >= CTOD("01/01/87")
      limit to date entered January 1, 1987 or later

   RATING $ 'P3'
      limit to rating of "P" or "3"

   TYPE = "B"
      limit to Beta III type tapes

   RATING = "X" .AND. TYPE = "B"
      limit to Beta III and X-rated

Valid relational operators are:
   =           is equal to
   <> or !=    is not equal to
   >           is greater than
   <           is less than
   >=          is greater than or equal to
   <=          is less than or equal to
   $           is a substring of

Functions may also be used in filters expressions; Including RECNO(),
which is the record number of the video record.

The next time you use this option, the filter will be disabled, and will
show "FILTER OFF" on the status line, but the current record will not
change.

(9)  REPORTS.  The following menu window will appear:

                 ┌───────┐
       ╔═════════│REPORTS│════════════╗
       ║         └───────┘            ║
   (A) ║A. List Tapes by Category     ║
   (B) ║B. List Tapes by Rating       ║
   (C) ║C. List Tapes Alphabetically  ║
   (D) ║D. List Categories            ║
   (E) ║E. List Machine Types         ║
       ╚══════════════════════════════╝

The appropriate report will be printed when you choose it.  The first 3
list the tapes.  Report (A) subtitles the report by category while
report (B) subtitles by rating.  Report (C) prints the tapes
alphabetically.

(10) MAINTENANCE.  The following menu window will appear:

               ┌───────────┐
       ╔═══════│MAINTENANCE│══════════╗
       ║       └───────────┘          ║
   (A) ║A. Modify system file         ║
   (B) ║B. Optimize system            ║
   (C) ║C. Modify category file       ║
   (D) ║D. Modify VCR machine file    ║
       ║                              ║
       ╚══════════════════════════════╝

     (A)  MODIFY SYSTEM FILE.  Lets you choose whether the program will
     output color or monochrome.

     (B)  OPTIMIZE SYSTEM.  Actually removes from the tape file the
     tapes you previously marked for deletion using the DELETE option.

     (C)  MODIFY CATEGORY FILE.  The first category is displayed on the
     bottom line of the screen, and the following menu window appears:

            ┌───────┐
       ╔════│OPTIONS│═══════╗
       ║    └───────┘       ║
       ║Get category        ║
       ║+/next category     ║
       ║-/prior category    ║
       ║Add new category    ║
       ║Edit category       ║
       ║Quit to main menu   ║
       ╚════════════════════╝

     These options are just about the same as for the tape file.

     (D)  MODIFY VCR MACHINE FILE.  The first machine is displayed.  The
     options are the same as (C).

(11) This quits the program and returns you to DOS.


MEMO FIELD
----------

The memo field allows you to enter up to 5000 characters of description
concerning each video.  It is styled after word-processors and features
automatic word-wrap.  The following keys are available while in the MEMO
field:

<Up-arrow> or <ctrl-E>      *Move up one line
<Down-arrow> or <ctrl-X>    *Move down one line
<Left-arrow> or <ctrl-S>    *Move left one character
<Right-arrow> or <ctrl-D>   *Move right one character
<ctrl-left> or <ctrl-A>     *Move left one word
<ctrl-right> or <ctrl-F>    *Move right one word
<HOME>                      *Move to beginning of current line
<END>                       *Move to end of current line
<ctrl-HOME>                  Move to beginning of memo
<ctrl-END>                   Move to end of memo
<PGUP>                       Move up one window
<PGDN>                       Move down one window
<ctrl-PGUP>                  Move to beginning of current window
<ctrl-PGDN>                  Move to end of current window
<ctrl-W>                    *Save memo and done
<ESC>                        Abort edit and done
<ctrl-Y>                    *Delete the current line
<ctrl-T>                    *Delete word right
<DEL> or <ctrl-G>           *Delete current character
<BKSP> or <ctrl-H>          *Delete character to the left
<INS> or <ctrl-V>           *Toggle insert mode on or off

* These keys are also used in regular fields.

If you have any problems or questions, let us know!

BecknerVision
Dept 17
P O Box 1541
Lumberton, NC  28359-1541

BBS phone #1-919-739-1063

ENJOY!
```
{% endraw %}

## FILE1030.TXT

{% raw %}
```
Disk No: 1030
Program Title: BECKNERVISION VIDEO DATABASE MANAGER (BVIDEO)
PC-SIG version: 1.1

Get your video library in shape with BVIDEO, the database for cataloging
and organizing records for your video tapes.  Each entry includes a tape
number, title, start and end memory number, machine number, category,
rating, date entered, tape type, and search parameters.  For each entry
you can write short comments or notes in the memo section.  Records can
be added, deleted, edited, or searched.  The reports option can print a
list of tapes by catalogue, rating, tape number, or alphabetical order.
You can also print a list of categories and machine types.

Usage:  Video Database Manager

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

BVIDEO   EXE  Main program.
BVIDCAT  FRM  Data file
BVIDLCAT FRM  Data file
BVIDLMAC FRM  Data file
BVIDRATE FRM  Data file
BVIDTITL FRM  Data file
BVIDTAPE DBT  Data file.
BVIDCAT  DBF  Database file.
BVIDMACH DBF  Database file.
BVIDSYS  DBF  Database file.
BVIDTAPE DBF  Database file.
BVIDEO   TXT  Introductory text file.
BVIDLBL  LBL  Label data file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1030

     Volume in drive A has no label
     Directory of A:\

    BVIDCAT  DBF       779  11-09-88   9:43a
    BVIDCAT  FRM      1990   7-16-87   9:36a
    BVIDEO   EXE    250512   7-16-88   3:59p
    BVIDEO   TXT     17397   7-17-87   1:34p
    BVIDLBL  LBL      1034   7-16-88   3:44p
    BVIDLCAT FRM      1990   7-16-87   9:33a
    BVIDLMAC FRM      1990   7-16-87   9:35a
    BVIDMACH DBF        65  11-09-88   9:43a
    BVIDRATE FRM      1990   7-16-87   9:36a
    BVIDSYS  DBF        68  11-09-88   9:41a
    BVIDTAPE DBF       385  11-09-88   9:42a
    BVIDTAPE DBT       512  11-09-88   9:42a
    BVIDTITL FRM      1990   7-16-87   9:36a
    FILE1030 TXT      1320   1-04-88   9:44a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       386   4-12-88   8:19a
           16 file(s)     282446 bytes
                           32768 bytes free
