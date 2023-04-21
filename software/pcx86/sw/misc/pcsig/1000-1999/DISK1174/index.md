---
layout: page
title: "PC-SIG Diskette Library (Disk #1174)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1174/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1174"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FOURSOME GENERATOR"

    FOURSOME GENERATOR automatically calculates foursomes (teams of four)
    for golf tournaments based upon their handicaps. The program allows you
    to keep a running roster of members eligible to play, including address,
    phone number, and handicap.  Information can be updated at any time.
    From the roster you mark those who are going to play in a tournament.
    FOURSOME GENERATOR generates foursomes so all teams will have an equal
    or almost equal handicap total.  Other options include:
    
    ~ Link players who want to play together while maintaining equal
    foursomes
    
    ~ Produce mixed foursomes (male and female pairing)
    
    ~ Up to 24 trial calculations (no repeats if same players
    participate week after week)
    
    ~ Generate low/high foursomes
    
    ~ Generate random foursomes
    
    ~ Players can be ranked in four different groupings
    
    ~ Tee times generated automatically
    
    ~ Sort roster on any field
    
    ~ Print address labels and print reports to printer, disk, or screen.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FG.DOC

{% raw %}
```










                               FOURSOME GENERATOR

                                       by

                     C. B. FAIN & ASSOCIATES PC PROGRAMMING
                              4424 Woodlark Court
                               Clemmons, NC 27012






































          COPYRIGHT 1988, 1989  C.B. FAIN & ASSOCIATES PC PROGRAMMING














             COPYRIGHT NOTICE

               (C) Copyright 1989 by C.B. Fain & Associates PC Programming


             DISCLAIMER

               Information in this manual, and program changes, may occur
               without notice and does not represent a commitment on the
               part of Fain & Associates.  This program or manual could
               contain technical inaccuracies or typographical errors.
               Changes may periodically be made without notification.



         PERMISSION TO COPY

         Individuals and organizations are granted permission to copy the
         FOURSOME GENERATOR computer program and User's Manual provided that
         there is no charge to the individual or organizations that receive
         the copy.  However, a distribution cost may be charged for the cost
         of the diskette(s).


         USER-SUPPORTED SOFTWARE

         If you find FOURSOME GENERATOR to be of value, your contribution
         will be appreciated.  (Any contribution is appreciated.)
         The address is:

         C.B. Fain & Associates PC Programming
         4424 Woodlark Court
         Clemmons, N.C.  27012

         For a $39.00 or more contribution, you will become a registered
         user.  As a register user the following will be provided.

              .  Upon registration you will receive the latest updated
                 FOURSOME GENERATOR program and manual.

              .  You will be notified of any enhancements that may have been
                 made since you purchased the FOURSOME GENERATOR.
                 Enhancements might include-- Computation of handicaps,
                 print cards, game analysis package, etc.  The more
                 registered users, the more enhancements we will be able to
                 add.


         LET US HEAR FROM YOU

         If you have any ideas of enhancements you would like to see in the
         FOURSOME GENERATOR feel free to write.








                                     Page 1





                               REGISTRATION BLANK

         C.B. Fain & Associates PC Programming
         4424 Woodlark Court
         Clemmons, N.C.  27012
         (919) 460-1628

         Enclose is a check or money order for $39.00, for the registration
         fee.

         Name ____________________________________________________________

         Address__________________________________________________________

         Address__________________________________________________________

         City________________________________State or Province____________

         Zip code_________________Phone number (optional)_________________

         Disk format required:
         ___________________________________________________ (If not stated,
         standard 5.25" MSDOS 2.1, double-sided double-density disk will be
         sent.)

         We will not wait for your check to clear before shopping.  Please
         allow 2-3 weeks for delivery.  Sorry, no charge cards are accepted.

         Do you want additional information about our
         other MS-DOS software products?  _______________________________

         Comments and Questions:_________________________________________

         ________________________________________________________________

         ________________________________________________________________

         ________________________________________________________________

         ________________________________________________________________

         ________________________________________________________________

         Enhancements I like to see in FOURSOME GENERATOR are:____________

         ________________________________________________________________

         ________________________________________________________________

         ________________________________________________________________

         ________________________________________________________________

         ________________________________________________________________






                                     Page 2





             I.  INTRODUCTION

               A.  What does FOURSOME GENERATOR do?

                  1. Keeps a permanent record of each player's name,
                     handicap, and "Play?" (Include in Generating
                     Foursomes?) status.
                       a.  Option to add or drop players from the list.
                       b.  Allows you to update handicaps at any time.
                       c.  Select or change players to include in
                           generating foursomes.

                  2. Sort names alphabetically and compresses unwanted
                     spaces.

                  3. Calculates
                       a.  Equal Foursome, based on handicaps.
                       b.  Indicates any left over players, which were
                           not included in a foursome.
                       c.  Also ranks players in four different groupings,
                           if desired.
                       d.  Scrambling routine allows foursomes to be
                           mixed.

                  4. Printouts
                       a.  Printout entire player listing, including
                           names, other information, and handicaps.
                       b.  Printout of calculated foursomes.  Includes group
                           number, player names, handicaps, rankings, and
                           total group handicap of each foursome.


               B.  FOURSOME GENERATOR minimum requirements

                  1. An IBM or compatible Personal Computer running MS-DOS
                     or PC-DOS Version 2.0 or later
                  2.  One floppy-disk drive
                  3.  256K RAM





                          STARTING FOURSOME GENERATOR

             Boot up your computer via DOS.

             Place the FOURSOME GENERATOR Program diskette in drive A.

             Make sure you are at   A>  prompt.
             If something else besides " A> " appears, such as C> then type
             A:   followed by ENTER.
             A> should then appear.

             At the A> prompt type      FG      then press the <ENTER> key

             The FOURSOME GENERATOR is then loaded into computer memory.



                                     Page 3





                      USING THE FOURSOME GENERATOR SCREEN


                  The following is a sample FOURSOME GENERATOR screen ---

              #   Name / Other Information   Handicap  Play?
             ------------------------------------------ ---   F2-CALCULATE
             1  |Abbott, Will       766-7864   |7     | |1|   F3-FILE
             2  |Alspaugh, Todd     876-9876   |4     | |1|   F4-PRINT
             3  |Appel, Fred        678-9874   |9     | |0|   F5-SORT
             4  |Austin, D.  Q.      768-9872  |10    | |1|   F6-RANKINGS
             5  |Autry, Jerry       722-6754   |12    | |0|   ESC-EXIT
             6  |Baker, Henry       765-6781   |4     | |1|
             7  |Ballard, James     723-9995   |7     | |0|   KEYS
             8  |Barclay, John      765-7823   |9     | |1|   ----------
             9  |Barr, Paul         733-4896   |7     | |1|   ARROWS
             10 |Battle, D.J.       998-8653   |4     | |1|   HOME
             11 |Beck, Ron          765-6895   |11    | |1|   END
             12 |Beeson, Keith      746-7482   |10    | |1|   F9-Tab Left
             13 |Benbow, Gilmer     766-3748   |7     | |0|   F10-Tab Rigt
             14 |Bernard, Sam       745-8383   |9     | |1|   PG UP-Page U
             15 |Billings, Chuck    958-4231   |3     | |1|   PG DN-Page D
             16 |Blake, Cam         988-4637   |9     | |0|   INSERT
             17 |Bland, James       677-7774   |13    | |1|   DELETE
             18 |Bowman, Rob        788-6574   |8     | |1|
             19 |Bray, Jim          766-5647   |12    | |1|
             20 |Chapman, Gary      988-5325   |1     | |0|
                --------------------------------------  ---

             The left column contains the player's names and any other
             information you wish to include.  The two columns to the right
             of the player's names are used to record corresponding
             handicaps, and to indicate if the player should be included in
             the computed foursomes.  On the right of the screen is a list
             of valid function keys and cursor movement and editing keys.




             ENTERING DATA

               A. NAMES / OTHER INFORMATION

                  1. Adding names
                    If you want to add a new player to the roster, just
                    write his/her name in the next available position.
                    Press function key F5 to sort the list of names
                    alphabetically.

                  2. Erasing names
                    If you want to delete a player name from your roster
                    erase the player's name using the DELETE key or blank
                    the name out with the space bar.  Press function key F5
                    to sort the list.  The handicap and other information of
                    the deleted player is erased and the vacant space
                    filled.




                                     Page 4





               B. HANDICAPS

                    To update a player's handicap, just type the new
                    handicap in, over the old one.

               C. INDICATING PLAYERS TO INCLUDE IN THE GENERATED FOURSOMES

                    To indicate that a player is included in the generated
                    foursomes, place a "1" in the "PLAY?" column next to the
                    player's name.  All player's that have a "1" beside
                    their name will be included in the generated foursomes.
                    Those with a "0" in the "PLAY?" column will not be
                    included in the computed foursomes.  To update a
                    player's "PLAY?" status, just type a "1" or a "0" over
                    the old "PLAY?" status.




             CURSOR MOVEMENT

             Cursor Control Keys
             Right Arrow  -->       Cursor moves right one space.
             Left Arrow   <--       Cursor moves left one space.
             Down Arrow             Cursor moves down one line.
             Up Arrow               Cursor moves up one line.
             BACK SPACE             Moves cursor back one space.
             PG UP  (Page up)       Moves cursor Up one page.
             PG DN  (Page down)     Moves cursor down one page.
             HOME                   Move to start of column.
             END                    Move to end of column.
             F9                     Move left one column
             F10                    Move right one column

             INSERT                 Toggle insert mode on and off.
             DELETE                 Delete character under the cursor.




             FUNCTION KEYS

             Program control keys

             KEY                  DESCRIPTION

             F2-CALCULATE        Calculate Foursomes and print to screen
                                 or printer.
             F3-FILES            Save and load files from disk.
             F4-PRINT            Print player roster.
             F5-SORT             Sorts the player's names alphabetically
                                 and deletes unnecessary spaces.
             F6-RANKINGS         Enter customize ranking groups for
                                 players.
             ESC-EXIT            Exit whatever you are doing, including
                                 the program itself.




                                     Page 5





             CALCULATING FOURSOMES

                    After you have marked which players are participating in
                    the tournament, you are ready to compute foursomes.

                    To compute, press Function key F2.  A window will pop
                    up.  You must choose which mode to use in calculating
                    the Foursomes.  Normal mode calculates foursomes with
                    total group handicaps as close as possible for each
                    foursome.  Use the scramble modes to reduce repetition
                    of foursomes if the same players play together week
                    after week. Each scramble mode scrambles the foursomes
                    in a different way.  Note that the scramble modes are
                    less accurate in calculating equal foursomes.

                    After selecting a calculation mode choose to send the
                    results to either the printer, or the screen.

                    FOURSOME GENERATOR begins computing foursomes.
                    The number of foursomes computed is the number of
                    participants, divided by four rounded down to the
                    nearest whole number.

                    40 players in tournament  40/4 = 10 foursomes

                    41 players in tournament  41/4 = 10.25
                                      rounded down = 10 foursomes
                                                      1 player left out

                    42 players in tournament  42/4 = 10.5
                                      rounded down = 10 foursomes
                                                      2 players left out

                    FOURSOME GENERATOR notifies you of any left over
                    player(s) which are not included in a foursome.




             SAVING and LOADING A FILE

                  To save or load a file press F3 and choose the load or
             save option.  The file screen will then appear.  With the file
             screen you can specify the name of the file to load or save,
             and also the drive and directory the file should be saved on or
             retrieved from.  The current drive, subdirectory, and directory
             of files is always displayed on the screen.  Files are
             displayed in lowercase letters and subdirectories in uppercase
             letters inclosed by <>.  You can list directories on any drive
             or subdirectory by doing the following.

             Let's say you want to list the directory on the A drive.  Type
             the following and press ENTER --- A: To list directories on the
             B or C drive, type --- B: or C: If you are using a fixed disk
             and want to see a subdirectory, type --- C:\SUBDIR You can also
             look at directories under multiply paths too. --C:
             \SUBDIR1\SUBDIR2\SUBDIR3\



                                     Page 6





             A simple way to move through subdirectories is to use the arrow
             keys to move the highlight bar down into the text directory.
             Select the subdirectory to move to by pressing ENTER when over
             the directory you want to move to.  If you are already in a
             subdirectory and want to move to the "parent" directory
             highlight either <.> or <..> and press ENTER.


             SAVING ---

                  To save a file type the name, including whatever extension
             you want, and press ENTER.  You can give your file any name as
             long as the following applies.

             1. File name can be no longer then eight characters.
             2. Only A-Z and 0-9 are valid characters.

             If the file you want to save already exists on disk you can
             move the highlight bar down with the arrow keys and press ENTER
             when over the file name to save.


             LOADING ---

                  Whenever you want to add or delete names, update
             handicaps, or compute foursomes just load your previously
             created file into computer memory.  To do this, either type the
             name or move the highlight bar to the file and select it.


             Any time you need to exit the file screen press ESC.



             PRINTING THE ROSTER

                  To print your roster press Function key F4.   A window
                  will then pop up.

                  Before you start printing, make sure --

                   1.  The printer is on.
                   2.  The paper is set to top of form.  The program is
                       set to jump over the perforation of each page.
                   3.  Pressing ESC pauses printing until you choose to
                       resume or abort.



             SORTING AND COMPRESSING

                  To sort your roster alphabetically press Function key F5.
                  The FOURSOME GENERATOR then Sorts the player's names
                  alphabetically, and compresses all unwanted spaces.






                                     Page 7





             SPECIFYING RANKING GROUPS

                  Press F6 to call up the ranking window.
                                   -----------------
                                   | LOWER | HIGHER |
                                   | LIMIT | LIMIT  |
                              RANK |-------|--------|
                                A  | 0     | 0      |
                                B  | 0     | 0      |
                                C  | 0     | 0      |
                                D  | 0     | 0      |
                                   ------------------

                  This allow you to rate the players according to handicaps,
                  into four groups.  Groups A,B,C, and D.  You choose the
                  range of handicaps for each group.   If you do not care to
                  rate players according to handicaps, just leave this
                  screen with zeros.  If you do this, each participant is
                  rated as an "A" player.




             EXITING THE PROGRAM

                  To exit the FOURSOME GENERATOR press the ESC key while
                  viewing your roster.

































                                     Page 8





                                   APPENDIX A


                          BACKING UP YOUR PROGRAM DISK


             It is important to make a backup of your program disk in case
             the original copy is damaged.  To do this, follow the steps
             below.


             Get  1. Your DOS disk
                  2. Your master Program disk
                  3. A blank floppy disk


             Place the DOS diskette in floppy disk drive A.

             If something else besides " A> " appears on the screen, such as
             C> then type    A:   followed by ENTER.  A> should then appear.

             At A> prompt type   DISKCOPY A: A:

             The following message will appear ---Insert source disk into
                           drive A: Press any key when ready

             Remove the DOS disk and place the master Program disk in drive
             A and press any key.

             After a while the following message will appear ---Insert
                           target disk into drive A: Press any key when
                           ready

             Place the blank floppy disk in drive A and press any key.  When
             the disk drive stops turning, your backup is complete.  Place
             the master copy in a safe place and use the backup copy from
             now on.























                                     Page 9





                                   APPENDIX B

             ONE FLOPPY DRIVE SETUP

                  To run FOURSOME GENERATOR using a one floppy drive system
                  you need the following.

                  1. Program Disk
                  2. Data Disk (Blank formatted disk) If you do not have a
                     blank formatted disk, you need to format one.  See the
                     FORMAT command in your DOS manual.

                  1. Place the Program diskette in drive A.

                     At A> prompt type   FG    followed by ENTER

                  2. After the program has been loaded, remove the program
                     disk from drive A and replace with your Data disk.

                     All the Data files you create, load and save will be
                     placed on your Data disk.



             TWO FLOPPY DRIVE SETUP

                  To run FOURSOME GENERATOR using a two floppy drive system
                  you need the following.

                  1. Program Disk
                  2. Data Disk (Blank formatted disk) If you do not have a
                     blank formatted disk, you need to format one.  See the
                     FORMAT command in your DOS manual.

                     Place the Program diskette in drive B and Data Diskette
                     in drive A.  If something else besides "A>" appears on
                     the screen, such as B> type--  A: followed by ENTER

                     At A> prompt type   B:FG    followed by ENTER

                     All the files you create, load and save will be placed
                     on your Data disk in drive A.


















                                     Page 10





                                   APPENDIX C


             HARD-DISK SETUP


             If your computer has a hard disk drive, you'll probably want to
             put the FOURSOME GENERATOR Program and Data files on the hard
             disk.

             The following steps assume that your hard disk is drive "C:",
             your floppy disk drive is "A:", and that you want to put the
             Programs and data files into a subdirectory on the hard disk
             called "GOLF".  You can modify this example to match your own
             requirements.

             1.  "Boot up" your system from the hard disk.  You should see
                  DOS prompt ("C>" or something similar) on your screen.

             2.  Make a subdirectory to hold the Program and data files:
                 Type--

                            MD  \GOLF

             3.  Place the Program diskette in the "A:" drive.

             4.  Copy everything from the "A:" drive into the GOLF
                 subdirectory on your "C:" drive:  Type--

                            COPY A:*.*  C:\GOLF

             5.  Now that you've set up your GOLF subdirectory, you should
                 store the program distribution diskette in a safe place.

                 Whenever you want to run the FOURSOME GENERATOR Program,
                 just perform the following steps after booting up DOS.

                  1.   Change Directories (get into the GOLF Program
                       subdirectory): At C> type --

                              CD  \GOLF

                  2.   Then enter the name of the program   FG  when you
                       want to run it.

                              FG    followed by <ENTER>


                  3.   The program will be loaded into memory and you are
                       ready to go.










                                     Page 11





             COPYRIGHT NOTICE

             (C) Copyright 1988, 1989 by C.B. Fain & Associates All Rights
                 Reserved


             If you have any comments about this software write to

                  C.B. Fain & Associates
                  4424 Woodlark Court
                  Clemmons, N.C. 27012
                  (919) 460-1628

                  If you or someone you know has a need for specialized
                  software we are in the business of writing programs for
                  PC's and compatibles.  We offer quality work at reasonable
                  prices.  Feel free to write or call, we will be glad to
                  see what we can do for you.










































                                     Page 12

```
{% endraw %}

## FILE1174.TXT

{% raw %}
```
Disk No: 1174
Disk Title: Foursome Generator
PC-SIG Version: 2

Program Title: Foursome Generator
Author Version: 3.00
Author Registration: $39.00
Special Requirements: None.

FOURSOME GENERATOR is a program which automatically calculates
foursomes (teams of four) for golf tournaments based upon their
handicaps.  This program allows you to keep a running roster of members
eligible to play, and up to 500 people can be entered on each list.
Separate lists may be saved to disk.  You can edit and update the names
and handicap numbers at any time, and the program lets you define the
range for the handicap numbers.

Once the names are entered, the program can sort the list
alphabetically.  From a list of names you can mark the names of those
people who are going to play in a foursomes tournament.  The program
then quickly generates foursomes so all teams will an equal or almost
equal handicap total.  This program allows you to aproduce a printout of
the entire player listing or a printout of the calculated foursomes.
File Descriptions:

README   DOC  Introduction.
FG       DOC  Documentation.
FG       EXE  Main program.
FG       DAT  Data file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## README.DOC

{% raw %}
```
     This disk contains the following.


     FG.DOC          FOURSOME GENERATOR Manual.  To print this manual
                     on your printer type  COPY FG.DOC PRN [press
                     ENTER].  (Be sure your printer is turned on before
                     you do this.)

     FG.EXE          FOURSOME GENERATOR Program.  Type FG  to run the
                     program.

     FG.DAT          Data file required by FOURSOME GENERATOR to run.

     README.DOC      This file.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1174

     Volume in drive A has no label
     Directory of A:\

    FG       DAT        48   2-12-89  12:51p
    FG       DOC     25309   2-20-89   2:43p
    FG       EXE     73081   2-12-89  12:45p
    FILE1174 TXT      1299   9-13-89  10:29a
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540  10-13-88  12:20p
    MANUAL   BAT       147  10-13-88  12:21p
    README   DOC       503   2-20-89   3:36p
            8 file(s)     100965 bytes
                           56832 bytes free
