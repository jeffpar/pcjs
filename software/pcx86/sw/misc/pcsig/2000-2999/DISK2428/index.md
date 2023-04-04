---
layout: page
title: "PC-SIG Library Disk #2428"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2428/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2428"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ANIMAL FARM 1 OF 2 (#2429 ALSO)"

    Once again, the author of the shareware programs MACBETH and LORD OF THE
    FLIES demonstrates his expertise in English Literature, this time with
    the book, ANIMAL FARM.  Giving full credit to the good teacher, the
    author's purpose with this and other programs like it is to facilitate
    learning, to make it as fun and as painless as possible.
    
    Geared to the high school level, the student is given background
    material on George Orwell.  The style of the book, the characters and
    themes of the story are discussed.  The student is given various exam
    tips, study questions are suggested and a section is included on how to
    take an essay test.
    
    A teacher himself, the author of ANIMAL FARM is out to help you win!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## HEADER.BAS

```bas
DECLARE SUB GamesMenu ()
DECLARE SUB FormatShake (Q$, Tail$)
DECLARE SUB DrawBox (row1%, col1%, row2%, col2%)
DECLARE SUB PRINTNOTES (File$, Topic$)
DECLARE SUB FormatString (Text$, Tail$, col%)
DECLARE SUB PageDown (Topic$)
DECLARE SUB PageUp (Topic$)
DECLARE SUB WriteText (Text$, HorPos%, MaxLen%)
DECLARE SUB ChangeDriveDirectory ()
DECLARE SUB ChangeSpeed ()
DECLARE SUB ChangeMenuColour ()
DECLARE SUB ChangeTextColour ()
DECLARE SUB ChangeChoice ()
DECLARE SUB GetKey ()
DECLARE SUB DrawMenu ()
DECLARE SUB PrintMenu ()
DECLARE SUB MENU ()
COMMON SHARED M$(), NM, N, M, J, k, HJ, CM, Choice$, fg, bg, speed, mc, dd$, Q$(), CA$(), A1$(), A2$(), A3$()
DECLARE SUB ShuffleArray (A!())

COMMON SHARED Text$, Book$, Context$(), Chapter(), PG()


' Function and control key constants
CONST esc = 27, down = 80, up = 72, left = 75, right = 77
CONST Enter = 13, SPBAR = 32, PGDN = 81, PGUP = 73
CONST ctrls = 19

'Colour Constants
CONST black = 0, BLUE = 1, GREEN = 2, CYAN = 3, red = 4, MAGENTA = 5
CONST BROWN = 6, white = 7, BRIGHT = 8, blink = 16
CONST yellow = BROWN + BRIGHT

'Variables used by Retrieve Module
COMMON SHARED File$, Topic$, LC, NumScreen$, NumScreen, NumLine$(), NumLine(), T$()
COMMON SHARED Page, PrevPAGE, FolPage, SCR, PPPage, x$(), NQ()


```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2428

     Volume in drive A has no label
     Directory of A:\

    AFARM    EXE    154212   4-01-90   7:36p
    AUTOEXEC BAT       100   9-15-90   1:51p
    CHECK                4   4-01-90   9:09a
    CLUES              266   4-01-90   9:10a
    COMMAND  COM     25276   7-24-87  12:00a
    CONFIG   AFM        30   4-01-90   9:11a
    HEADER   BAS      1303   3-21-90   9:16p
    SCREEN   PIC      4103   1-04-80  10:48p
    TITLE    PIC     16391   9-15-90   1:48p
    REGISTER            31   9-15-90   1:35p
    MANUAL   TXT     24017   9-14-90  11:04p
    README   TXT      1617   9-14-90  11:39p
    FILE2428 TXT      2221  10-18-90   4:59p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       927  10-17-90   9:08a
           15 file(s)     230538 bytes
                           80896 bytes free
