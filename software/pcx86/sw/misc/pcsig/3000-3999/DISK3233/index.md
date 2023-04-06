---
layout: page
title: "PC-SIG Diskette Library (Disk #3233)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3233/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3233"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## TILEEQ.BAS

```bas
'****************************************************************************
'*                                                                         *
'*                               TileEq.BAS                                *
'*                                                                         *
'*                               a file of                                 *
'*                           QBPaint Version 1.0                           *
'*                        copyright 1992  by P. Oliva                      *
'*                                                                         *
'*                                                                         *
'***************************************************************************

REM PLEASE DO NOT MODIFY THIS FILE!!!

REM To prevent retaining any changes to this file, DO NOT SAVE it as it
REM is being unloaded, when you exit the BASIC environment, or at any other
REM time.

REM     At the end of this program are the formulas of two tiles displayed
REM     in the "Sample Paint Tiles" section of QBPaint Version 1.0.

REM     Use TileEq.BAS within a BASIC environment such as QuickBASIC or
REM     QBASIC.

REM     Be assured that reading these instructions takes much longer
REM     than the actual copying process!

REM ********** HOW TO COPY A FORMULA TO YOUR OWN PROGRAM *******************

REM          Some versions of BASIC may not allow more than one file
REM     to be loaded at a time.  For those versions, use these steps to
REM     copy the formulas to your program:

REM  COPY:
REM       Scroll down this file to reach the formulas.
REM       Move the cursor to the beginning of the first line of
REM       the tile formula.
REM       Highlight the formula lines by pressing the down arrow key while
REM       holding down the Shift key.
REM       Store the highlighted text in the buffer by simultaneously
REM       pressing the Ctrl and Insert keys.
REM
REM  LOAD:
REM       Load your own program.
REM
REM  PASTE:
REM       Position the cursor at the beginning of the line in your program
REM       where the formula is to be inserted (before the PAINT statement).
REM       Simultaneously press the Shift and Insert keys.

REM ************************************************************************

REM          Versions of BASIC such as QuickBASIC 4.5 allow more than one
REM     program to be loaded at a time. This capability makes copying
REM     formulas or other code from one program to another a very rapid
REM     process.  It's worth learning if you haven't already:
REM
REM  LOAD:If you have not already done so, load the program which will use
REM       a paint tile, using either of the following methods.
REM       Place your program disk in the active drive, then:

REM       Either:
REM         Use Alt-F-L so that TileEq.BAS (this program) will remain loaded.
REM         (You can toggle between the two programs with the F2 key.)
REM       or:
REM         Create a split screen by pressing Alt-V-P.
REM         (You can toggle the cursor between the screen areas with the
REM            F6 key; move it to the other copy of TileEq.Bas now.)

REM         Load your own program by pressing Alt-F-L.
REM         Your program appears on the screen section showing the cursor.

REM         (Scroll the program containing the cursor with the arrow key.)
REM         (Remove split screen later by pressing Alt-V-P.)

REM       Then when both this program and your own are loaded:

REM  COPY and PASTE the formulas as described above.

REM  ***********************************************************************

REM  After registering QBPaint, it will be this easy to copy your own
REM  paint tile formulas accurately to your program.  No more typing!!

REM  ***********************************************************************
REM  ***********************************************************************

REM     (If you inadvertantly delete a formula, you might be able to
REM     restore it by simultaneously pressing the Shift and Insert keys.)

REM          If a paint tile formula is used in a program which is to be
REM     made executable, an error will be generated during compile-time
REM     if the number of CHR$() elements exceeds 12.
REM          Thus, each formula has been broken into a series of 12-element
REM     components (A), (B), etc., with a final formula which concatenates
REM     the componenent formulas.
REM          ALL component formulas AND the concatenating formula must be
REM     included in a program to produce the tile shown in "Sample Paint
REM     Tiles."

REM     *******************************************************************

REM     ABOUT YOUR OWN PROGRAM:

REM     The "Sample Paint Tiles" section of QBPaint V. 1.0 displays LEAF11$
REM     and Brickwall$ in screen mode 9.  They will appear somewhat different
REM     in your own program if it uses a different EGA or VGA screen mode.

REM     To display LEAF11$ in your own program, insert the 3 lines of its
REM     formula in the program so that they will be executed before a
REM     PAINT statement.   Then, if the program has, for example, used
REM     color 2 to draw an enclosed area, and point (200, 300) lies within
REM     that area, the following PAINT statement would fill that area
REM     with LEAF11$:

REM             PAINT (200,300), LEAF11$, 2

REM     Similarly, to display Brickwall$, insert the 5 lines of its formula,
REM     and use a PAINT statement like above, with Brickwall$ replacing
REM     LEAF11$.

REM ***********************************************************************

REM  Three copies of each formula are provided as precaution against loss.
REM  The paint tile formulas follow:

REM Formula for paint tile LEAF11$:
LEAF11A$ = CHR$(0) + CHR$(255) + CHR$(0) + CHR$(16) + CHR$(0) + CHR$(255) + CHR$(0) + CHR$(56) + CHR$(8) + CHR$(255) + CHR$(0) + CHR$(36)
LEAF11B$ = CHR$(16) + CHR$(255) + CHR$(0) + CHR$(39) + CHR$(2) + CHR$(255) + CHR$(0) + CHR$(97)
LEAF11$ = LEAF11A$ + LEAF11B$

REM Formula for paint tile Brickwall$:
BrickwallA$ = CHR$(255) + CHR$(255) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(170) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0)
BrickwallB$ = CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(170) + CHR$(255) + CHR$(0)
BrickwallC$ = CHR$(255) + CHR$(255) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(93) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(170) + CHR$(255) + CHR$(0)
BrickwallD$ = CHR$(8) + CHR$(173) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(90) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(173) + CHR$(255) + CHR$(0)
Brickwall$ = BrickwallA$ + BrickwallB$ + BrickwallC$ + BrickwallD$


REM Formula for paint tile LEAF11$:
LEAF11A$ = CHR$(0) + CHR$(255) + CHR$(0) + CHR$(16) + CHR$(0) + CHR$(255) + CHR$(0) + CHR$(56) + CHR$(8) + CHR$(255) + CHR$(0) + CHR$(36)
LEAF11B$ = CHR$(16) + CHR$(255) + CHR$(0) + CHR$(39) + CHR$(2) + CHR$(255) + CHR$(0) + CHR$(97)
LEAF11$ = LEAF11A$ + LEAF11B$

REM Formula for paint tile Brickwall$:
BrickwallA$ = CHR$(255) + CHR$(255) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(170) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0)
BrickwallB$ = CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(170) + CHR$(255) + CHR$(0)
BrickwallC$ = CHR$(255) + CHR$(255) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(93) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(170) + CHR$(255) + CHR$(0)
BrickwallD$ = CHR$(8) + CHR$(173) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(90) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(173) + CHR$(255) + CHR$(0)
Brickwall$ = BrickwallA$ + BrickwallB$ + BrickwallC$ + BrickwallD$


REM Formula for paint tile LEAF11$:
LEAF11A$ = CHR$(0) + CHR$(255) + CHR$(0) + CHR$(16) + CHR$(0) + CHR$(255) + CHR$(0) + CHR$(56) + CHR$(8) + CHR$(255) + CHR$(0) + CHR$(36)
LEAF11B$ = CHR$(16) + CHR$(255) + CHR$(0) + CHR$(39) + CHR$(2) + CHR$(255) + CHR$(0) + CHR$(97)
LEAF11$ = LEAF11A$ + LEAF11B$

REM Formula for paint tile Brickwall$:
BrickwallA$ = CHR$(255) + CHR$(255) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(170) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0)
BrickwallB$ = CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(170) + CHR$(255) + CHR$(0)
BrickwallC$ = CHR$(255) + CHR$(255) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(93) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(170) + CHR$(255) + CHR$(0)
BrickwallD$ = CHR$(8) + CHR$(173) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(90) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(173) + CHR$(255) + CHR$(0)
Brickwall$ = BrickwallA$ + BrickwallB$ + BrickwallC$ + BrickwallD$


REM ************************ End of TileEq.BAS *****************************

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3233

     Volume in drive A has no label
     Directory of A:\

    PC-SIG            1531   9-14-92   2:38p
    QBPAINT  EXE    250148   7-25-92   8:30a
    INTRO    DOC      5399   7-25-92   8:54a
    HELP     DOC     19158   7-24-92   8:52p
    REGISTER DOC      2512   7-24-92   8:55p
    TILEEQ   BAS      8987   7-23-92  10:14a
    GO       BAT        34  10-05-92   2:54p
    SHOW     EXE      2040   9-12-88  10:48a
            8 file(s)     289809 bytes
                           28672 bytes free
