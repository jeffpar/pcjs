---
layout: page
title: "PC-SIG Diskette Library (Disk #794)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0794/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0794"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPOSER BY OAK TREE SOFTWARE"

    If you're like most people, you've always had the urge to create music.
    But for some reason you never picked up that first instrument and
    really learned how to play it.  COMPOSER makes your computer that first
    instrument.
    
    COMPOSER is a graphics-based music editor that lets you compose, edit,
    play, save, and print single-voice music on your PC.  Since COMPOSER is
    a graphics-based editor, you can actually see the notes that make up
    your music.  You do not have to work with a confusing mixture of
    letters and numbers.  Once your music looks correct on the screen and
    sounds correct, you can print your music with any dot matrix printer.
    
    COMPOSER is easy to use and very flexible.  If you have a PCjr, or
    compatible three-voice machine, COMPOSER can also create music files
    that later can be combined to make three-part sound.  This lets you
    create harmony and chords.
    
    COMPOSER's editing features make music entry easy.  By using COMPOSER's
    block insert and delete mode, you can manipulate large sections of music
    quickly.  Includes Beethoven's Symphony Number 5 and Minuet in G, John
    Phillip Sousa's Stars and Stripes Forever, and Scott Joplin's Maple Leaf
    Rag.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 3PART.BAS

{% raw %}
```bas
1 DEFINT A-Z:KEY OFF:DEF SEG
10 SOUND ON
20 DIM MUSIC$(3,200),DIR$(150),DTA(22),DIRLIST(62),SORT(211),BLANK(8)
30 SCREEN 0:CLS:COLOR 7,1,1
35 GOSUB 1000:GOSUB 5999
40 INPUT"first  part";A1$
50 INPUT"second part";A2$
60 IF A2$="" THEN 80
70 INPUT"third  part";A3$
80 OPEN A1$+".mus" FOR INPUT AS #1
90 IF A2$="" THEN GOTO 120
100 OPEN A2$+".mus" FOR INPUT AS #2
110 IF A3$<>"" THEN OPEN A3$+".mus" FOR INPUT AS #3
120 GOSUB 510
130 '********************************************************
140 VOICE=1:MEASURE=1
150 WHILE NOT EOF(1)
160  LINE INPUT #1,NOTE$
170 GOSUB 460
180 WEND:MEASURE=MEASURE-1
190 IF A2$="" THEN 360
200 '********************************************************
210 VOICE=2:MEASURE=1
220 LINE INPUT #2,DUMMY$:INPUT #2,DUMMY$
230 WHILE NOT EOF(2)
240  LINE INPUT #2,NOTE$
250 GOSUB 460
260 WEND:MEASURE=MEASURE-1
270 '********************************************************
280 IF A3$="" THEN 360
290 VOICE=3:MEASURE=1
300 LINE INPUT #3,DUMMY$:INPUT #3,DUMMY$
310 WHILE NOT EOF(3)
320  LINE INPUT #3,NOTE$
330 GOSUB 460
340 WEND:MEASURE=MEASURE-1
350 '***********************************************
360 MAX=MEASURE:PRINT "Measures: ";MEASURE;:PRINT"  Tempo: ";TEMPO$
370 INPUT"Where do you want to start";START
380 INPUT"Where do you want to end";MUSICEND
387 INPUT"Tempo";NEWTEMPO$
388 IF NEWTEMPO$<>"" THEN TEMPO$=NEWTEMPO$
389 PLAY "t"+TEMPO$,"t"+TEMPO$,"t"+TEMPO$
390 IF MUSICEND=0 THEN MUSICEND=MAX
400 FOR COUNT=START TO MUSICEND
410 PLAY MUSIC$(1,COUNT),MUSIC$(2,COUNT),MUSIC$(3,COUNT)
420 NEXT COUNT
430 INPUT"Do you want to play it again";A$
431 GOSUB 6010
435 'GOSUB 3000
440 IF INSTR("Yy",A$)<>0 THEN GOTO 360 ELSE GOTO 40
450 '***********************************************
460 IF RIGHT$(NOTE$,1)="$" THEN NEWMEASURE=1:NOTE$=LEFT$(NOTE$,LEN(NOTE$)-1)
470 MUSIC$(VOICE,MEASURE)=MUSIC$(VOICE,MEASURE)+NOTE$
480 IF NEWMEASURE=1 THEN MEASURE=MEASURE+1:NEWMEASURE=0
490 RETURN
500 '***********************************************
510 INPUT#1,TIMESIG
520 LINE INPUT#1,TEMPO$
530 LINE INPUT #1,KEYSIG$
550 RETURN
1000 FOR X=0 TO 61
1010 READ Z$:POKE VARPTR(DIRLIST(0))+X,VAL("&h"+Z$):NEXT X
1011 FOR X=0 TO 210
1012 READ Z$:POKE VARPTR(SORT(0))+X,VAL("&h"+Z$):NEXT X
1020 DATA 55,8b,ec,8b,56,08,89,d3,83,c3,1e,b4
1030 DATA 1a,cd,21,8b,6e,06,8b,56
1040 DATA 01'************** change from 1 to 2
1050 DATA b4,4e,cd,21,3d,12,00,74,1c,83,c5
1060 DATA 03'**************** change from 3 to 4
1070 DATA 8b,7e
1080 DATA 01'**************** change from 1 to 2
1090 DATA 8b,f3,b9,08,00,ac,3c
1100 DATA 2e,74,04,aa,49,eb,f7,b0,20,f3,aa,b4
1110 DATA 4f,eb,dd
1120 DATA 5d,ca,04,00
1130 DIR=0
1140 FOR X=1 TO 100
1150 DIR$(X)="        "+""
1160 NEXT
1170 DIR$(0)="*.MUS"+CHR$(0)
1180 A=VARPTR(DIRLIST(0))
1190 CALL A(DTA(0),DIR$(0))
1200 X=1
1210 WHILE (DIR$(X)<>"        ") AND (X<=100)
1220 DIR=DIR+1:X=X+1
1230 WEND:DIR$(0)=""
2440 '****************************sort directory **************************
2445  SORT=VARPTR(SORT(0)):CALL SORT(DIR$(0),DIR)
2510 '*********************************************************************
2520 CLS:COL=1:ROW=1:COLLENGTH=13
2530 FOR X=1 TO DIR
2540 LOCATE ROW,COL:PRINT DIR$(X)
2550 ROW=ROW+1
2560 IF (X MOD COLLENGTH)=0 THEN COL=COL+9:ROW=1
2570 NEXT
2580 LOCATE COLLENGTH+1,1:PRINT STRING$(80,205);
2590 RETURN
2999 '***************** prepare to ask for more selections *************8
3000 FOR X=COLLENGTH+2 TO 23
3010 LOCATE X,1:PRINT STRING$(79," ");
3020 NEXT
3030 LOCATE COLLENGTH+2,1
3035 IF INSTR("Yy",A$)=0 THEN CLOSE:A1$="":A2$="":A3$="":ERASE MUSIC$:DIM MUSIC$(3,200)
3040 RETURN
5000 DATA 55,fc,8b,ec,8b,5e,06,8b,07,8b,5e,08
5010 DATA e8,0e,00,00,00,00,00,00,00,00,00,00
5020 DATA 00,00,00,00,00,5d,89,5e,00,89,46,02
5030 DATA 89,46,04,8b,46,04,d1,e8,89,46,04,85
5040 DATA c0,75,03,e9,99,00,8b,46,02,2b,46,04
5050 DATA 89,46,06,c7,46,08,00,00,8b,46,08,89
5060 DATA 46,0a,8b,46,0a,03,46,04,89,46,0c,8b
5065 DATA 46,0a,be,03,00,f7,e6,03,46,00,8b,f0
5070 DATA 8a,1c,80,fb,00,74,57,8b,ce,8b,74,01
5080 DATA 8b,46,0c,bf,03,00,f7,e7,03,46,00,8b
5090 DATA f8,8a,3d,80,ff,00,74,19,8b,d7,8b,7d
5100 DATA 01,ac,3a,05,72,34,77,0b,fe,cb,74,2e
5110 DATA fe,cf,74,03,47,eb,ee,8b,fa,8b,f1,8a
5120 DATA 04,8a,25,88,05,88,24,8b,44,01,8b,5d
5130 DATA 01,89,45,01,89,5c,01,8b,46,0a,2b,46
5140 DATA 04,89,46,0a,83,7e,0a,00,7f,8c,ff,46
5150 DATA 08,8b,46,08,3b,46,06,77,03,e9,78,ff
5160 DATA e9,58,ff,5d,ca,04,00
5998 '*********************** blank window *************************8
5999 DATA b8,00,06,b9,00,0e,ba,1e,18,b7,07,cd,10,cb
6000 FOR X=0 TO 13:READ A$:POKE VARPTR(BLANK(0))+X,VAL("&h"+A$):NEXT
6001 DEF SEG=&HB800:A=PEEK(1)
6002 DEF SEG:POKE VARPTR(BLANK(0))+10,A:RETURN
6010 A=VARPTR(BLANK(0)):CALL A
6030 LOCATE COLLENGTH+2,1
6040 IF INSTR("Yy",A$)=0 THEN CLOSE:A1$="":A2$="":A3$="":ERASE MUSIC$:DIM MUSIC$(3,200)
6050 RETURN
```
{% endraw %}

## COMPOSER.DOC

{% raw %}
```














            @@@@@  @@@@@  @@   @@  @@@@@  @@@@@  @@@@@  @@@@@  @@@@@
            @   @  @   @  @@@ @@@  @   @  @   @  @      @      @   @
            @      @   @  @ @@@ @  @@@@@  @   @  @@@@@  @@@@   @@@@
            @   @  @   @  @  @  @  @      @   @      @  @      @   @
            @@@@@  @@@@@  @     @  @      @@@@@  @@@@@  @@@@@  @   @

                          A Single Voice Music Editor

                                  Version 1.30


                               Oak Tree Software
                                 P.O. Box 1163
                          Columbus, Indiana 47202-1163

                              Suggested Price: $20

  
-----------------------------------------------------------------------
                             ORDER FORM
    Name:__________________________________________

    Address:_______________________________________

    City:________________  State:____ Zip:_________

    Telephone: (______) - _______ - _______________

    COMPOSER..................................$20.00

    (Indiana residents add 5% sales tax)......______

    Total:....................................______

    --------------------------------------------------------------------

    Comments:









    --------------------------------------------------------------------

    User Information:

    What type of computer do you have?   PC___   PCjr___   Other________

    How much memory does your computer have?  128k___   256k____

                                              384k____  512k____

                                              640K____  More____

    Do you have a dot matirx printer (  y   /  n)

    If so, what brand? (Espon, IBM, Brothers, Microline...)_____________

    Where did you first see COMPOSER?___________________________________


    --------------------------------------------------------------------
    



    COMPOSER                                                  Version  1.30
    ------------------------------------------------------------------------















                                    Contents

         Files Included On This Disk                            2
         About COMPOSER                                         2
         Using COMPOSER                                         2
         Starting for the First Time                            3
         Entering Notes                                         3
         Paging Through Your Music                              3
         Changing, Inserting and Deleting Notes                 4
         Block Editing                                          4
         Using The Note Selection Mode                          5
         Dotted Notes                                           5
         Tied and Slurred Notes                                 5
         Staccato Notes                                         6
         Accidentals                                            6
         The Key Signiture                                      6
         Printing Your Music                                    7
         The Erase Option                                       8
         Selecting a Time Signiture                             8
         Selecting a New Tempo                                  8
         Playing Your Music                                     8
         Reading or Writing Music From Diskette                 8
         Leaving COMPOSER                                       9
         Using 3PART.BAS                                        9
         More About 3PART.BAS                                  10
         Problems With 3PART.BAS                               10
         Using PRINTSET                                        10
















                                     - 1 -




    COMPOSER                                                  Version  1.30
    ------------------------------------------------------------------------



                          Files Included On This Disk

              Before you start to use COMPOSER, check to see if you
         have the following files:

         COMPOSER.EXE     - Single voice music editor
         PRINTER          - Printer initialization file
         PRINTSET.EXE     - Customizes COMPOSER for you printer
         3PART.BAS        - Plays 3-part sound, if you have a PCjr
                            compatible machine
         COMPOSER.DOC     - If you are reading this file, you have it

         MAPLE1.MUS       Scott Joplin's Maple Leaf Rag
         MAPLE2.MUS
         MAPLE3.MUS

         LUDWIG1.MUS      Ludwig van Beethoven's Symphony Number 5
         LUDWIG2.MUS
         LUDWIG3.MUS

         MINUETG1.MUS     Ludwig van Beethoven's Minuet in G
         MINUETG2.MUS
         MINUETG3.MUS

         SOUSA1.MUS       John Phillip Sousa's Stars and Stripes
         SOUSA2.MUS       Forever
         SOUSA3.MUS



                                About COMPOSER

              COMPOSER was written to take advantage of the PCjr's
         three part sound capabilities without sacrificing
         compatibility with single voice machines, such as the PC.
         COMPOSER generates a text file of BASIC PLAY commands for
         each voice written.  Non-Junior compatible machines may
         create, edit and play a single voice at a time.  Junior
         compatible machines may also create and edit a single voice
         at a time, but by using a simple BASIC program, up to three
         of these files may be played simultaneously.

                                Using COMPOSER

              COMPOSER basically has two different modes of operation,
         the note selection mode and the note entry mode.

              In the note selection mode, a note's length and
         attenuation are determined.  Factors effecting the whole
         piece of music, such as the time signature, key signature,
         and tempo can be set.  The note selection mode has the
         options to get, save, play or erase a piece of music.



                                     - 2 -




    COMPOSER                                                  Version  1.30
    ------------------------------------------------------------------------


              After a note is "built up" in the note selection mode,
         its place in the music and its pitch is determined.  The note
         is placed on a staff and moved up and down, right and left,
         until the desired position is found.  Editing of music also
         takes place in the note entry mode.  Notes can be changed,
         inserted or deleted.  Block inserts and deletes are
         supported.

                          Starting for the First Time

              Let us go step by step through a session with COMPOSER.
         Start off by booting your system with your DOS diskette.
         Insert your COMPOSER diskette and type COMPOSER. You will
         then see the COMPOSER logo and be prompted to press a key to
         continue.  You will then be asked to specify which drive will
         be used in the writing and reading of your music files.
         Enter the appropriate letter.  If you do not specify a drive
         and only press <ENTER>, COMPOSER will search the current
         drive for the music files.

              The next message to appear on the screen should be
         "Reading Directory."  COMPOSER is now searching your music
         diskette for all files with the extension of .MUS.  After a
         couple more flashes, the screen should clear and you should
         see two connected music staffs being drawn.  Across the
         bottom of the screen are the symbols and icons used in the
         note selection mode.  In the upper left hand corner of the
         screen is the page indicator.  It should read "Page 1 of 1."
         At the middle C position between the two staffs, there should
         be a quarter note.  You are now in the note entry mode.
         Notice that the time signature reads 4 4 time and you are in
         the key of C.
              If you have trouble reading the screen on a monochrome
         display or find the colors objectionable, try pressing the
         fn1 key.  Repeatedly pressing fn1 will cycle through a set of
         sixteen colors.  Choose the one that you find most pleasing.

                                Entering Notes

              The note entry mode uses the up and down cursor keys to
         determine the pitch of a note.  Hold down the down arrow.  As
         you see, the quarter note will move down from its initial
         position, through the bass cleff staff, and then wrap around
         to the top of the treble cleff staff.  The up arrow has the
         opposite effect.  Position the note back at middle C between
         the staffs and press <ENTER>.  The note will stay there and
         your quarter-note cursor will move over one position.  Push
         <ENTER> three more times.  A bar line should appear after the
         forth note.  As you can see, COMPOSER counts the lengths of
         the notes as you enter them and draws a bar line after each
         measure has been filled.

                           Paging Through Your Music



                                     - 3 -




    COMPOSER                                                  Version  1.30
    ------------------------------------------------------------------------


              COMPOSER can display up to sixteen notes on one screen
         at a time.  Try entering twelve more quarter notes.  Your
         cursor note should have wrapped around from the right side of
         the screen to the left side again.  If you can not see the
         cursor note, it is probably overlapping one of the notes that
         you have already entered.  Move the cursor up or down until
         you can see it again.  Since the screen is full, it is time
         to go onto the next page.  This is done by pushing the PgDn
         key.  The staffs should be erased and a new set drawn.  The
         page indicator should read "Page 2 of 1."  As soon as you
         enter a note on this page, the indicator will be updated to
         read "Page 2 of 2."  Enter a couple notes on this page.  To
         go back to the beginning of the piece, press the Home key.
         Pressing the End key will take you back to the end of your
         composition, and PgUp will take you back one page.

                    Changing, Inserting and Deleting Notes

              Assume that you accidentally enter a note as a C instead
         of as a D.  To change the note, just position your cursor
         note at the desired position above or below the erroneous
         note (in our example, the cursor would go one position above
         the note) and press <ENTER>. The screen will be redrawn and
         the note will be corrected.  The wrong note will be replaced
         with whatever the cursor happens to be.  If the cursor is an
         eighth note and you enter it on top of a quarter note, the
         quarter note will become an eighth note.
              Inserts can be done just as easily as changes.  Place
         the cursor note on top of the note that you want to insert
         before and press the Ins key.  Again, the screen will be
         redrawn and the new note will be in place.

              To delete a note, just place the cursor note on top of
         the note you want to delete and press the Del key.  The note
         will no longer be there after the screen is redrawn.

              Note:  Sometimes when you are either changing, deleting,
         or inserting notes, you may make it impossible for COMPOSER
         to count your measures correctly.  For example, suppose you
         are in 4 4 time and entered a measure with four quarter
         notes.  You decide to go back and change one of the quarters
         to a whole note.  After reading the whole note, COMPOSER will
         lose count and quit adding in bar lines or draw them in the
         wrong place.  If this should happen, just finish editing the
         measure until it is of the correct length.  COMPOSER will try
         to recount each time you edit a note.  If you think that you
         are correct and that COMPOSER has miscounted, make COMPOSER
         do a forced note recount.  This is done by simply replacing a
         note with an identical note.  This will force COMPOSER to
         refigure the measures from the beginning of the piece and
         redraw the bar lines.

                                Block Editing



                                     - 4 -




    COMPOSER                                                  Version  1.30
    ------------------------------------------------------------------------


              If you want to change more than just a couple of notes,
         individually changing each note can become tedious very
         quickly.  Instead, you will want to use the block editing
         features COMPOSER offers.  Block editing involves two steps,
         marking a block and then either inserting it somewhere or
         deleting it from the piece all together.

              The beginning of a block is marked using the fn2 key and
         the end is marked using the fn3 key.  Move the cursor note on
         top of the first note of the block you want to use.  Press
         fn2.  A bracket should appear to the left of the note.  When
         fn3 is pressed to mark the end of a block, a bracket will
         appear to the right of the note.  To delete the block, simply
         press the Del key.  The screen will be redrawn and the block
         will be gone.  To copy the block to somewhere else in the
         piece, move the note cursor on top of the note that you want
         the block inserted before and press the Ins key.

              We have now covered everything you need to know about
         the note entry mode.  Next, we will discuss the note
         selection mode.

                         Using The Note Selection Mode

              To enter the note selection mode from the note entry
         mode, simply press Esc.  Your note cursor will disappear and
         a pointing hand will appear on the bottom of the screen.  Try
         moving the pointer back and forth using the right and left
         arrow keys.  The first five items are the different length
         notes that you can select.  Try pointing to one of these
         notes and pressing <ENTER>.  Your pointer will disappear and
         you will be back in the note entry mode with a cursor note
         set to the note that you selected.  Press Esc and get back to
         the note selection mode.  Look at positions eight through
         twelve.  These are the different rests that you can select.
         They are selected and used the same way that notes are.

                                 Dotted Notes

              At position six, you see a small dot.  Move the hand
         above this dot and press <ENTER>.  All of the notes to the
         left of this dot should now be dotted.  This means that when
         a note is selected, its length will be one-and-a-half times
         that of normal.  For example, a dotted quarter note will get
         one and a half counts instead of just one count.  The note
         will stay dotted until you return again to the note selection
         mode.

                            Tied and Slurred Notes

              At position seven, you will see a arch or semi-circle.
         Select this item with the hand.  You should not notice any
         change.  Select a note, go to the note entry mode and enter
         the note.  After you enter the note, an arch will appear


                                     - 5 -




    COMPOSER                                                  Version  1.30
    ------------------------------------------------------------------------


         above the note.  This arch means that the note that you just
         entered will play right up to the note after it, with no
         pause in between.  In other words, if the next note you enter
         is the same pitch as the one before, the two notes will be
         tied.  When played, they will sound like one continuous note.
         But if the next note you enter is a different pitch than the
         one before it, the two notes will be slurred.  The pitch of
         the first will "slide up" or "slide down" to the next one.

              Like the dotted note option, the slurred and tied option
         stays in effect until you return to the note selection mode.
         All of the notes will be tied or slurred to each other until
         you press Esc.

                                Staccato Notes

              At position twenty is a quarter note with a dot over the
         top of it.  This is a staccato, or short, note.  Staccato is
         the opposite of legatto.  The staccato option follows the
         same format as the legatto option.  When the staccato note is
         selected, no change will be selected.  Only when you are in
         the note entry mode and have entered a note will you see a
         dot drawn above the note that you have selected.

                                  Accidentals

              At positions thirteen through fifteen, you will see
         single flat, sharp and natural signs.  These are accidentals.
         In order to select one of these, simply move the pointer hand
         above one of the accidentals, say, the flat for example, and
         press <ENTER>.  All of the five notes to the left now have
         flats in front of them.  When one of these notes is selected,
         it will be a flat note.  As with the other options mentioned
         so far, the accidentals stay in effect until the note entry
         mode is left.

              When you are in the note entry mode and are entering
         notes with accidentals, COMPOSER will display all flat, sharp
         and natural signs.  For example, if you are in 4 4 time and
         enter 4 B flat quarter notes in a row, each note will have a
         flat sign before it.  This repeating of the accidental signs
         only happens when you are entering the notes.  If you cause
         COMPOSER to redraw the page by using PgUp, PgDn, Home, End,
         or any of the other methods mentioned earlier, only the first
         accidental will show up.  In other words, the accidental
         lasts throughout the whole measure and is not redrawn every
         time it is repeated.

                               The Key Signature

              At position nineteen, you will see three flat signs in a
         group.  This is the symbol for selecting the key signature.
         Move the hand pointer above this symbol and press <ENTER>.  A
         window will appear in the upper left hand corner of the


                                     - 6 -




    COMPOSER                                                  Version  1.30
    ------------------------------------------------------------------------


         screen.  You will see the options "Natural", "Flats" and
         "Sharps".  To select one of these options, move the highlight
         bar up and down using the up and down arrows.  Press enter
         when you are on top of the one that you want.  Natural will
         reset the key signature to the key of C (default).  The key
         of C has no sharps and no flats.  To select a key signature
         with flats, pick the flats option.  Another window will
         appear with the letters "BEADGC" with an up arrow under them.

         Note: As with all windows in COMPOSER, pressing Esc will
         cancel the window and take you back to the note selection
         mode.

         The key signature will contain all the flats to the left of
         the arrow and the one that it is pointing to currently.  For
         example, if the arrow is pointing to the B, you will be in
         the key of F, which has one flat, B flat.  If you point to
         the A, you will be in the key of E flat, which has three
         flats, B flat, E flat and A flat.  Press <ENTER> when you are
         pointing to the key that you want.  The screen will be
         now be redrawn and the new key signature will appear on the
         staff.

              A key signiture will automatically "flat" and "sharp"
         the appropriate notes.  Just like when the individual
         accidentals were used, the sharp and flat signs will appear
         when the notes are being entered.  But when the page is
         redrawn, the accidental signs will disappear if they are
         already in the key signature.


                              Printing Your Music

              At position twenty-one, you will see a piece of paper
         with writing on it.  This represents the print option.  When
         this option is selected, a window will appear prompting you
         for the name, the starting and the ending page of the music
         you want printed.
              The name you enter is the title that will appear on the
         printed music, not the eight character file name that you
         used to store the music no disk.  The title will be centered
         on the top of every printed page.
              Each printed page holds five screens of music as shown
         on COMPOSER.  So if you have typed in a piece of music that
         is ten pages on COMPOSER, it will be printed out on two
         pages.  If you have an extremely long piece of music and do
         nat want to print the whole thing, you can specify what page
         you want to start and end on.  Remember that the page numbers
         refer to printed pages, which contain five COMPOSER pages.

         NOTE: If you are not using an EPSON printer, you will have to
         initialize COMPOSER for your particular printer, using
         PRINTSET.EXE.  For more information, read "Initializing Your
         Printer" later on in this manual.


                                     - 7 -




    COMPOSER                                                  Version  1.30
    ------------------------------------------------------------------------



                               The Erase Option

              Postion sixteen has a box with an uppercase "E" on it.
         This is an eraser.  When this option is selected, a window
         will be displayed asking you if you are sure that you want to
         erase all music in COMPOSER's memory.


                          Selecting a Time Signature

              Position seventeen has a 4 4 time signature.  This
         option is used to select a new time signature.  COMPOSER lets
         you select between either 2 4, 3 4, or 4 4 time signitures.
         When a new time signature is selected, the screen will be
         erased and the music will be redrawn with the new time
         signature and the bar lines in the correct position.

                             Selecting a New Tempo

              Position eighteen has a uppercase "T".  The "T" is for
         tempo.  When this option is selected, a window is displayed
         showing the old tempo and asking for a new one.  Any number
         in the range of 32-255 is legal.  When COMPOSER is first
         started, a tempo of 120 is used.

                              Playing Your Music

              Position twenty-four shows a miniature pair of sixteenth
         notes.  This is the play option.  When this option is
         selected, a window will come up will the options "Graph" and
         "Keyboard".  The graph option shows the music in a graph like
         form while it is being played.  When the graph is being used,
         repeated parts of the music and transitions to different
         parts of the music can easily be seen.

              The "Keyboard" option draws a piano keyboard across the
         top of the screen.  While the music is being played, an
         asterisk  will move over the keyboard, indicating which note
         is being played.

              In any of the play modes, the music will start on the
         current page that is being displayed and will continue until
         the end is reached.  To play the last half of an eight page
         piece, push PgDn until page 4 is reached and then play.

                    Reading Or Writing Music From Diskette

              Position twenty-five shows a square with a circle in the
         middle.  This is a diskette which represents input/output
         functions.  When this option is selected, a window with the
         options "Get Music" and "Save Music" is drawn.
              If "Get Music" is selected, COMPOSER will draw another
         window containing all of the music files in alphabetical


                                     - 8 -




    COMPOSER                                                  Version  1.30
    ------------------------------------------------------------------------


         order that are on the drive specified in the "Selecting
         Drives" section.  Move the highlight bar on top of the piece
         that you want to load in and press <ENTER>.  The window will
         clear and you will see the first page of the music being
         drawn on the screen.

         NOTE: If you accidently select the "Get Music" or "Save
         Music" option and wish to escape, just press the Esc key.

              If the "Save Music" option is selected, another window
         will appear prompting you for a title.  If the piece of music
         you are working on is already named, that name will be
         displayed.  Pressing <ENTER> will save the piece under the
         indicated name.  Otherwise, the title line will be blank.
         You can enter a filename with up to eight charcters.  If you
         try to type more than eight charcters, a beep will sound.

                               Leaving COMPOSER

              Position twenty-three shows your present active drive.
         Selecting this option will quit COMPOSER and return you to
         DOS.

                                Using 3PART.BAS

              Now that you have learned how to enter music using
         COMPOSER, you will no doubt want to hear the music in three
         part sound.  If you have a machine that, like the IBM PCjr,
         has three part sound capabilities, 3PART.BAS will allow you
         to hear up to three pieces of music made by COMPOSER played
         at the same time.  If you are not sure if your computer can
         play three part sound, try to run 3PART.BAS anyway.  If gives
         you an error in the line which has the SOUND ON command, your
         machine does not support three part sound and you will be
         unable to use 3PART.BAS.  You will have to be content with
         writing music with COMPOSER and listening to a single voice.

              Let's play one of the pieces of music that should be on
         your COMPOSER disk already.  Get into BASIC, load 3PART and
         run it.  The screen will clear and remain blank for a few
         seconds while 3PART initializes itself.  Next, a list of all
         of the music files should appear on the screen.  Three of the
         files should be named MAPLE1, MAPLE2 and MAPLE3.  These are
         the first, second and third parts to Scott Joplin's "Maple
         Leaf Rag."  When 3PART prompts you for file names, enter
         MAPLE1, MAPLE2 and MAPLE3.

              After 3PART has read the files into memory, it will
         display the number of measures and the current tempo of the
         music. 3PART will also ask you where you want to begin, end,
         and if you want to change the tempo.  For now, do not worry
         about these questions and just press <ENTER>.  You will now
         hear your computer play beautifully Scott Joplin's "Maple
         Leaf Rag" in stunning three part sound, as only a Junior or


                                     - 9 -




    COMPOSER                                                  Version  1.30
    ------------------------------------------------------------------------


         compatible computer can.  After it is finished, 3PART will
         ask you if you want to play it again.  If you reply with a
         "No", 3PART will start over again and ask you for 3 more file
         names.

                             More About 3PART.BAS

              You do not need to enter three filenames every time.  If
         you have finished only two parts to a song and want to hear
         how they sound, enter their titles, and when 3PART asks for
         the third file, just press <ENTER>.
              If you think that the music you are playing is being
         played too fast or too slow, enter a new tempo when 3PART
         prompts you.  The previous tempo should be displayed after
         3PART has read in the files.  Any number between 0 and 255 is
         a legal tempo.
              If you want to hear a specific part of a piece of music
         and not the whole thing, you can specify the beginning and
         ending measure numbers when 3PART asks "Where do you want to
         start?" and "Where do you want to end?"

                            Problems With 3PART.BAS

              For reasons that we are unable to explain, 3PART does
         not play some pieces of music correctly.  Everything will
         sound normal until a particular measure is reached and one of
         the voices will drop out.  The voice is silent until the
         beginning of the next measure, where it resumes one measure
         behind the other two voices.  The problem does not occur when
         only two voices are being used.

              Most of the time, the problem can be solved by changing
         the order in which the music files are read in.  For example,
         suppose you typed:

                  first  part? maple1
                  second part? maple2
                  third  part? maple3

         and you noticed that somewhere in the middle of the piece,
         one of the voices dropped out for a measure.  You could try
         this:

                  first  part? maple3
                  second part? maple2
                  third  part? maple1

         or any other combination.  This usually clears up any
         problems.

                               Using PRINTSET

              On your COMPOSER diskette, you should also have a file
         called PRINTSET.EXE.  This program will initialize printers


                                    - 10 -




    COMPOSER                                                  Version  1.30
    ------------------------------------------------------------------------


         other than EPSON printers.  COMPOSER is set to use EPSON
         printers as initially distributed.
              Type PRINTSET from your DOS prompt.  Some instructions
         should appear on your screen telling you to enter your
         printer codes as a series of 3-digit ascii values separated
         by a single space.  What this means is that if you have a
         printer code that is ESC A, you would enter 027 065.  027 is
         the ascii code for ESC and 065 is the ascii code for a
         capital letter A.
              You will have to consult your printer's instruction
         manual for the correct codes for your specific printer.  We
         have included the codes for EPSON and IBM Proprinter
         printers:

                                     EPSON
         960 bit image mode with 800 dot columns across:
              027 076 032 003
         Set line spacing to 8/72'' or 24/216'':
              027 065 008

                                 IBM Proprinter
         960 bit image mode with 800 dot columns across:
              027 076 032 003
         Set line spacing to 8/72'' or 24/216'':
              027 051 008

              PRINTSET.EXE will ask you to set you printer to its 960
         bit image mode.  If you printer does not have such a mode,
         but does have a higher density mode, such as a 1920 bit image
         mode, you can use this mode instead.  The music will be
         smaller, hence harder to read, and it will not be centered on
         the page, but it should print.  Any printer mode that has a
         density higher than or equal to 800 dots will work.























                                    - 11 -



```
{% endraw %}

## FILES794.TXT

{% raw %}
```
Disk No  #794
Program Title: COMPOSER version 1.30
PC-SIG version 1
 
    COMPOSER is a graphics based music editor which allows you to compose,
edit, play, save and print single voice music. Since COMPOSER is a graphics
based editor, you can actually see the notes that make up your music. You
do not have to work with a confusing mixture of letters and number, like
some other music programs require the user to do. Once your music looks
correct on the screen and sounds correct, you can print your music using
any dot matrixs printer.
 
    COMPOSER is simple and flexible. If you have a PCjr, or compatible
three-voice machine, COMPOSER can create music files which can be later
combined to make three part sound.
 
    COMPOSER'S editing features make music entry easy. By using COMPOSER'S
block insert and delete mode, large sections of music can be manipulated
quickly.
 
Usage: Entertainment
 
System Requirements: 128K of memory and a color graphics adapter.
 
How to Start: Type COMPOSER (press enter)
 
Suggested Rigistration: $20.00
 
File Descriptions:
 
COMPOSER EXE  Single voice music editor.
PRINTER       Printer initialization file.
PRINTSET EXE  Customizes COMPOSER for you printer.
3PART    BAS  Plays 3-part sound, if you have a PCjr compatible machine.
COMPOSER DOC  If you are reading this file, you have it.
MAPLE1   MUS  Scott Joplin's Maple Leaf Rag.
MAPLE2   MUS  Scott Joplin's Maple Leaf Rag.
MAPLE3   MUS  Scott Joplin's Maple Leaf Rag.
LUDWIG1  MUS  Ludwig van Beethoven's Symphony Number 5.
LUDWIG2  MUS  Ludwig van Beethoven's Symphony Number 5.
LUDWIG3  MUS  Ludwig van Beethoven's Symphony Number 5.
MINUETG1 MUS  Ludwig van Beethoven's Minuet in G.
MINUETG2 MUS  Ludwig van Beethoven's Minuet in G.
MINUETG3 MUS  Ludwig van Beethoven's Minuet in G.
SOUSA1   MUS  John Phillip Sousa's Stars and Stripes Forever.
SOUSA2   MUS  John Phillip Sousa's Stars and Stripes Forever.
SOUSA3   MUS  John Phillip Sousa's Stars and Stripes Forever.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0794

     Volume in drive A has no label
     Directory of A:\

    3PART    BAS      4126   6-09-87  10:24p
    COMPOSER DOC     33574   6-09-87  10:21p
    COMPOSER EXE     48896   6-05-87   9:24p
    FILES794 TXT      2125   7-01-87   4:25p
    GO       BAT        38   7-01-87   4:11p
    GO       TXT       540   7-01-87   4:10p
    LUDWIG1  MUS      1408   6-01-87  12:05a
    LUDWIG2  MUS       896   6-01-87   5:59p
    LUDWIG3  MUS      1024   6-01-87   6:10p
    MAPLE1   MUS      4480   5-20-87   5:53p
    MAPLE2   MUS      2560   5-20-87   6:08p
    MAPLE3   MUS      2560   5-20-87   6:09p
    MINUETG1 MUS      1408   6-04-87   1:42p
    MINUETG2 MUS       768   6-04-87   1:53p
    MINUETG3 MUS       640   6-04-87   8:14p
    PRINTER            128   6-04-87   9:55p
    PRINTSET EXE     19712   6-05-87   9:28p
    SOUSA1   MUS      5376   5-12-87   3:47p
    SOUSA2   MUS      3968   5-15-87  12:32p
    SOUSA3   MUS      4352   5-15-87   1:06p
           20 file(s)     138579 bytes
                           16896 bytes free
