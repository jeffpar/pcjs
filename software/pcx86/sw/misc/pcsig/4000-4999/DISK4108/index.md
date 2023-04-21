---
layout: page
title: "PC-SIG Diskette Library (Disk #4108)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4108/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4108"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## SOFTBALL.DOC

{% raw %}
```

























                             Softball Coach
                               Version 3.0
                               August 1990




















                      The Software Construction Co.
                              P.O. Box 160
                       North Billerica, MA  01862

         (C) Copyright 1989, 1990 The Software Construction Co.,
                          All Rights Reserved.





         1. Introduction                                             1
         2. Getting Started                                          3
         3. Using Menus                                              4
             3.1 Return Key                                          4
             3.2 Escape Key                                          4
             3.3 Cursor Control Keys                                 4
             3.4 Mouse Support                                       4
         4. Options                                                  5
             4.1 MONITOR                                             5
             4.2 CO.<function-key>                                   5
         5. Errors                                                   7
         6. Files                                                    8
             6.1 Database Files                                      8
             6.2 Options File                                        8
         7. Menus                                                    9
             7.1 Main menu                                           9
                 7.1.1 Edit Data                                     9
                     7.1.1.1 Add a new player                        9
                     7.1.1.2 Edit an existing player                10
                     7.1.1.3 Delete a player                        11
                     7.1.1.4 Add a new game                         11
                     7.1.1.5 Editing a game                         11
                     7.1.1.6 Delete a game                          11
                 7.1.2 Read Database                                12
                 7.1.3 Write Database                               12
                 7.1.4 Clear Memory                                 12
                 7.1.5 Batting Order                                13
                     7.1.5.1 Select Roster                          15
                     7.1.5.2 Select Criterion                       15
                     7.1.5.3 Display Order                          16
                 7.1.6 Reports                                      16
                     7.1.6.1 Run Report                             16
                     7.1.6.2 Choose Order                           17
                     7.1.6.3 Filter Players                         17
                 7.1.7 Merge a database                             17
         8. User Supported Software                                 19
         9. Bug Reports                                             21
         10. Known Problems/Limitations                             22
         Appendices                                                 23
             A. Statistics Definitions                              23
                 1. At Bats                                         23
                 2. Batting Average                                 23
                 3. Doubles                                         23
                 4. Game Winning RBIs                               23
                 5. Games                                           23
                 6. Hit by Pitch                                    23
                 7. Hits                                            24
                 8. Home Runs                                       24
                 9. On Base Average                                 24
                 10. Runs Batted In                                 24
                 11. Runs                                           24
                 12. Sacrifices                                     24
                 13. Slugging Percentage                            24
                 14. Stolen Bases                                   24
                 15. Strike Outs                                    25





                 16. Triples                                        25
                 17. Walks                                          25
             B. Program History                                     26





         Softball Coach                                    Version 3.0

         1. Introduction

         As you are reading this, you must have some interest in
         softball or baseball.  This program will be of use for either
         sport because the statistical record keeping is much the same
         for both sports.  Having said that, we must add, however,
         that this program was initially developed to maintain the
         statistics for the coach of a softball team, which might
         explain some of its emphasis on offense rather than defense.

         Softball Coach is intended to aid a softball coach in many
         areas of managing the statistics of a team.  It is
         particularly good at maintaining individual statistics during
         a softball season.

         Softball Coach can also be used by an individual player to
         keep track of statistics across multiple seasons.  This is
         easily accomplished by treating each season as if it were a
         player.  In this way, a player's "career" can be examined at
         a glance by looking at team statistics.

         Below is a list of statistics this version of Softball Coach
         knows about.  Those with an * before them are calculated from
         other statistics entered and cannot be changed except by
         changing the statistics upon which they are based.   The
         symbol following (if any) in parentheses is the abreviation
         used in reports.  See Appendix A for a description of these
         statistics and how they are calculated.

                        At Bats (AB)
                       *Batting Average (Avg)
                        Doubles (2B)
                        Game Winning RBIs (GWR)
                        Games (G)
                        Hits
                        Hit by Pitch (HP)
                        Home Runs (HR)
                       *On Base Average (OBA)
                        Runs
                        Runs Batted In (RBI)
                        Sacrifices (SAC)
                       *Slugging Percentage (SLG)
                        Stolen bases (SB)
                        Strike Outs (SO)
                        Triples (3B)
                        Walks (BB)

         Softball Coach is designed to run on MS-DOS [1] machines.  It


         1.     MS-DOS is a registered trademark of Microsoft

                                       1 





         Softball Coach                                    Version 3.0

         requires version 2.0 or greater to operate correctly.
         Softball Coach performs quite adequately from a floppy drive,
         but as with nearly all programs, better performance can be
         had if run from a hard disk.

         Softball Coach has mouse support built in but has no support
         at this time for a floating point coprocessor.











































                Corporation.

                                       2 





         Softball Coach                                    Version 3.0

         2. Getting Started

         Before running the program for the first time, it is a good
         idea to make a backup of the original program disk.  Yes, we
         know that EVERY program you have ever used says to make a
         backup before you use it.  We also know that most of you
         ignore that advice.  We would like you to know that this
         advice is not given because we have stock in diskette
         companies (we don't even know what brand of diskettes you
         might use).  It is given as good, friendly, advice that is
         intended to possibly save you potential trouble.

         We believe you know how to make a backup.  So, we won't
         describe how.  If you need help, read the DISKCOPY entry in
         your DOS manual.

         Now that you've made the backup, you'd probably like to know
         how to use this masterpiece we've slaved over (and we hope it
         shows).

         The format of the command line is:

                softball [<database-name>]

         <database-name>        is the optional database name to load
                                (You'll be able to load a database
                                from within Softball Coach regardless
                                of whether you specify this parameter
                                or not.)


         The title screen is displayed first.  Type any character to
         remove the title screen from your display and begin the
         program.  If a database name was specified on the command
         line, it will be loaded.  If you'd like to exit back to DOS
         without entering the program, use the escape key (Esc on your
         keyboard).

         The initial screen has two parts.  In the upper left hand
         corner is the main menu.  In it, you will see selections to
         read and write databases, print reports, etc.  Across the
         bottom of the screen is another window which is used to
         display various values (such as the name of the database
         which is loaded) during the running of the program.








                                       3 





         Softball Coach                                    Version 3.0

         3. Using Menus

         3.1 Return Key

         The return key saves any data you may have just entered.  To
         exit the menu without saving, use the escape key (described
         in section 3.2).

         3.2 Escape Key

         The escape key (Esc on your keyboard) is designed to get you
         out of each menu without saving.  Any data you may have
         changed just before striking this key will be lost.  To save
         the data you may have just entered, use the return key
         (described in section 3.1).

         3.3 Cursor Control Keys

         The cursor control keys let you select a different choice
         from the current menu.  To select the highlighted choice,
         press return (described in section 3.1).  To exit the menu
         without saving, press the escape key (described in section
         3.2).

         3.4 Mouse Support

         Softball Coach is designed to work with any
         Microsoft [1], Mouse Systems [2], LOGITECH [3], or
         compatible  mouse.  Mouse movement will move the highlighted
         choice within the menu.  To select the choice, use the left
         mouse button (or use return on the keyboard).  Exiting a menu
         without saving works the same as with the cursor control keys
         (use the escape key).












         1.     Microsoft is a registered trademark of Microsoft
                Corporation.

         2.     Mouse Systems is a trademark of MSC Technologies, Inc.

         3.     LOGITECH is a trademark of LOGITECH, Inc.

                                       4 





         Softball Coach                                    Version 3.0

         4. Options

         Softball Coach can be configured to make the program better
         match your hardware or your tastes.  The way this is
         accomplished is through a file named SOFTBALL.CFG. Each line
         in this file must either start with a #, which indicates a
         comment line (i.e. will be ignored), or be of the form

                <option> = <value>

         The values for <option> and <value> that are currently
         supported are described below.  The default value, if there
         is one, is listed in ()'s after the option name.

         4.1 MONITOR (MONO)

         This option allows you to configure the program to match the
         monitor attached to your machine.  Valid values are MONO (for
         monochrome) and COLOR.  Note that red windows are reserved
         for error conditions.  The other window colors are randomly
         selected as each window needs to be created.

         If you choose MONO and have a color monitor, you will see all
         menus in black and white.

         If you choose COLOR and have a color monitor, you may get
         various results depending on your monitor and display
         adapter.  Some monitors will display various shades, or
         intensities.  Others will display purely monochrome output.
         You may notice that some of the window titles appear to be
         missing in this situation.  Others, still, may generate
         errors or cause the program to fail.  We haven't encountered
         this problem, but we suppose it IS possible.  Simply alter
         the file to reflect the other type of monitor and start the
         program over.

         4.2 CO.<function-key>

         This set of options allow you to configure the default
         settings in the Select Criterion menu option (see section
         7.1.4.2) and Choose Order menu option (see section 7.1.5.2).
         <function-key> can be f1, f2, f3, f4, or f5.  Valid values
         are:

                   at-bats
                   batting-average
                   doubles
                   game-winning-rbis
                   games
                   hit-by-pitch
                   hits

                                       5 





         Softball Coach                                    Version 3.0

                   home_runs
                   on-base-average
                   runs
                   runs-batted-in
                   sacrifices
                   slugging-percentage
                   stolen-bases
                   strike-outs
                   triples
                   walks

         This set of options will make more sense after running
         through the program a few times.  As distributed by us, the
         configuration file contains a sample set of values.  For now
         either ignore them or delete them from the file completely.
         (Placing a # in front of the line is a good way of having
         your cake and eating it too.  They will be ignored by
         Softball Coach but can easily be retrieved if necessary.)


































                                       6 





         Softball Coach                                    Version 3.0

         5. Errors

         Softball Coach displays a separate window to describe any
         error condition which may arise.  This window appear red on
         those monitors which can display color if the MONITOR option
         has the value COLOR.  Note, only errors will appear in a red
         window.  The other window's colors will be selected at random
         at the time that window is created.












































                                       7 





         Softball Coach                                    Version 3.0

         6. Files

         Softball Coach uses several kinds of files in the course of
         its operation.  We list them here so that you may decide
         whether you need to keep these files on your disk.  Be aware
         that some of these files may only be manipulated by Softball
         Coach.  Any attempt to alter the contents may make the
         program behave oddly (in the very least!).

         If you are interested in writing a utility which may read any
         of these files, contact us.  We'll be happy to send you the
         format.

         6.1 Database Files

         Any file in your directory with a .SBL extension will be
         treated as a database file by Softball Coach.  You may quite
         effectively hide a database from the program by changing this
         extension.

         6.2 Options File

         SOFTBALL.CFG contains information needed to set the various
         options within the program.  See section 4 for details about
         how to manipulate this file.

         Don't worry if you don't have a configuration file.  Softball
         Coach will choose default values for options that will work
         in any situation.























                                       8 





         Softball Coach                                    Version 3.0

         7. Menus

         This section describes each of the menus that you may
         encounter and what they attempt to accomplish.

         7.1 Main menu

         The main menu gives the following choices:

         7.1.1 Edit Data

         This function allows you to manipulate player and/or game
         data.  The editing menu gives the following choices:

         7.1.1.1 Add a new player

         This selection guides the user through adding a new player
         record to the database.  This new record may be a new team
         member if the database is to contain a team's data for a
         particular season or a particular season for one player if
         the database is to contain a player's data across multiple
         seasons.

         You will be prompted for the player's name (it can be a
         season name if you are keeping career statistics for one
         player).  This name can be anything you can type in (e.g. You
         can maintain your team as full names or initials or it could
         be a year {1989} if you are maintaining career statistics for
         a single player).  Once the data structures are created for
         that player, a window will be created with all the default
         settings for this player. You can edit them for any initial
         values you like.

         The following keys have meanings in this window:

         +      Increase the value of the statistic to which the
                cursor points by 1.

         -      Decrease the value of the statistic to which the
                cursor points by 1.

         F1     Create a window allowing the user to edit the player's
                name.

         F2     Create a window allowing the user to edit the player's
                uniform number.  Note that we do check that the
                uniform number is positive (or 0) and less than 100.

         return Accept the data input so far and return to the player
                adding menu.


                                       9 





         Softball Coach                                    Version 3.0

         esc    Cancel adding the new player and return to the player
                adding menu.

         In addition, you can type the numeric value of the statistic
         at each field.  This is helpful if you are starting to use
         the program after more than a small amount of data has been
         generated (e.g., mid-season or to enter previous season's
         data).

         Note that typing a number changes that field to the number
         typed and DOES NOT add that number to the value already
         present.

         Note, also, that you are only allowed to alter those
         statistics which are not calculated by the program.  You
         can't move the cursor to a field that will be calculated
         automatically.  These values are updated after each
         keystroke.

         7.1.1.2 Edit an existing player

         This selection allows the user to select a player's record
         and edit the data on it.  A window is created listing all
         players in the database.  An arrow on the left side of the
         first or last line of the window signifies that there are
         more names than could fit at one time.  You may use the PgUp
         and PgDn keys to display more entries.

         You may use the cursor control keys or mouse to highlight the
         name of the player you wish to edit.  See sections 3.3 and
         3.4 for more information concerning these topics.  An edit
         window is created with all the current statistics for this
         player.

         The following keys have meanings in this window:

         +      Increase the value of the statistic to which the
                cursor points by 1.

         -      Decrease the value of the statistic to which the
                cursor points by 1.

         F1     Create a window allowing the user to edit the player's
                name.

         F2     Create a window allowing the user to edit the player's
                uniform number.  Note that we do check that the
                uniform number is positive (or 0) and less than 100.

         return Accept the data input so far and return to the editing
                menu.

                                      10 





         Softball Coach                                    Version 3.0

         esc    Cancel adding the new player and return to the editing
                menu.

         In addition, you can type the numeric value of the statistic
         at each field.  This is helpful if you are starting to use
         the program after more than a small amount of data has been
         generated (e.g., mid-season or to enter previous season's
         data).

         Note that typing a number changes that field to the number
         typed and DOES NOT add that number to the value already
         present.

         Note, also, that you are only allowed to alter those
         statistics which are not calculated by the program.  You
         can't move the cursor to a field that will be calculated
         automatically.  These values are updated after each
         keystroke.

         7.1.1.3 Delete a player

         This selection allows you to delete an existing record in the
         database.  There is a final check made before the actual
         deletion takes place to help make certain that data is not
         accidentally deleted.

         7.1.1.4 Add a new game

         This selection guides the user through the process of adding
         a new game record.  A window will appear with spaces for the
         data items which can be stored in this record.  Use the
         return key to move from field to field.  When you are
         finished, the title on the window will change and prompt you
         for a response as to whether you'd like to keep the data as
         entered or edit it.

         7.1.1.5 Editing a game

         Selecting this menu option causes a window to appear
         containing all the games currently entered.  Highlight the
         game you'd like to edit.

         A window will appear just like the one that appears when a
         game is added.  The major difference is that this time the
         fields are pre-filled in with the current data.  Correct what
         you'd like and, again, the title on the window will change,
         prompting you for a response as to whether you'd like to keep
         the data as displayed or edit it.




                                      11 





         Softball Coach                                    Version 3.0

         7.1.1.6 Delete a game

         Selecting this menu option causes a window to appear
         containing all the games currently entered.  Highlight the
         game you'd like to delete.  The game record indicated will
         then be deleted.

         Note that there is no final check for this deletion operation
         as all the information is displayed in the window used to
         choose the game to be deleted.

         7.1.2 Read Database

         This function allows you to read in a new database without
         leaving the program.  You may change directories by using the
         F1 key.  A list of already existing databases in the current
         directory will be displayed to help your selection.  Note
         that the program remembers what directory you started the
         program in and will return to the same place upon normal exit
         from the program regardless of how many times you change
         directories within the program.

         If you have made changes to the currently loaded data, a
         confirmation window will appear, asking if you really wish to
         lose those changes.  If you do not, answer 'n' to this prompt
         and save the data using the Write Database (section 7.1.3)
         menu option.  Then re-select the Read Database menu option.

         7.1.3 Write Database

         This function allows you to save a database to disk.  You may
         change directories by using the F1 key.  A list of already
         existing databases in the current directory will be displayed
         to help your selection.  Note that the program remembers what
         directory you started the program in and will return to the
         same place upon normal exit from the program regardless of
         how many times you change directories within the program.

         If you specify a database name that already exists, a window
         will appear asking you to confirm that you really want to
         overwrite the data already on disk.

         7.1.4 Clear Memory

         This function allows you to clear a loaded database out of
         memory so that a new one can be started.  If you wish to read
         in another database, there is no need to select this menu
         choice as the old database will be removed from memory
         automatically before the new database is read in.



                                      12 





         Softball Coach                                    Version 3.0

         If you have made changes to the currently loaded data, a
         confirmation window will appear, asking if you really wish to
         lose those changes.  If you do not, answer 'n' to this prompt
         and save the data using the Write Database (section 7.1.3)
         menu option.  Then re-select the Clear Memory menu option.

         7.1.5 Batting Order

         This function allows you to create a batting order for a
         subset of your team.

         Creating a batting order consists of three separate actions.
         The roster you have selected (described in section 7.1.5.1)
         is sorted according to the rules you specified (described in
         section 7.1.5.2).  Finally, just before the output is
         generated (described in section 7.1.5.3), a folding process
         is applied to attempt to place your "best" players in the
         cleanup spots of several "slices".  See below for an example
         describing the process of placing players in slices.

         If you forget any of these steps, you are unlikely to get any
         usable output.  If you do not select a roster, you will
         either get no players in your order (if you haven't selected
         a roster in this session) or the roster selected the last
         time.  If you don't specify any ordering criterion, you will
         get the batting order in whatever order you originally
         entered the players or the order specified in the
         SOFTBALL.CFG file (see section 4.2 for details on how to use
         this feature).  Obviously, if you do not display the order,
         you get no output whatsoever.

         The process of placing players in "slices" can best be
         described with an example:

         Suppose you have the following nine players on your roster
         for tomorrow's game and you are only interested in their
         batting averages for determining the batting order:

                Jones   0.325
                Brown   0.361
                Smith   0.274
                Adams   0.306
                White   0.283
                Green   0.201
                Boggs   0.330
                Glenn   0.312
                Chase   0.298

         The Batting order selection process first sorts them into the
         following order:


                                      13 





         Softball Coach                                    Version 3.0

                Brown   0.361
                Boggs   0.330
                Jones   0.325
                Glenn   0.312
                Adams   0.306
                Chase   0.298
                White   0.283
                Smith   0.274
                Green   0.201

         An algorithm is applied to this ordering to produce a
         rotation of four hitters, the last of which will be the best
         available batting cleanup.  So the order above would be
         printed as:

                Chase   0.298
                Adams   0.306
                Jones   0.325
                Brown   0.361
                Smith   0.274
                White   0.283
                Glenn   0.312
                Boggs   0.330
                Green   0.201

         Brown (the best batter) is batting fourth; Boggs (the second
         best batter) is batting eighth; Jones (the third best batter)
         is batting third; and so on.

         *** DISCLAIMER ***

         Note that we are NOT claiming that all batting orders should
         be constructed in this manner.  We are not even claiming that
         this is a GOOD way of creating a batting order.  It is the
         way the coach of the team for which this program was
         developed wished to create his batting order.

         To give it some credence, however, we offer the following
         quote:

                "Suppose you don't have much thump in your lineup.
                 You try to space out your hitters a bit.  If you have
                 four good hitters, bat one first, one third, one
                 fourth, one seventh.  If you bunch them all together
                 you are grouping your best shot to score in just
                 three innings.  The other six you're going out with
                 no firepower."

                        Tony La Russa



                                      14 





         Softball Coach                                    Version 3.0

         We realize that many of you have thoughts on how this should
         be done.  Some of you may even argue that creating the
         batting order based on statistics is not a good idea at all.
         If you do have any thoughts on this subject (or any other
         relating to programs of this kind), feel free to write us at
         the address we've listed in section 8.  We are genuinely
         interested in how this program might be made more useful.


         7.1.5.1 Select Roster

         This menu selection allows you to inform Softball Coach of
         the roster for the game.  Even if your entire team shows up,
         not all of them may play, etc.  Here is where you tell what
         subset of your entire team will be batting in this game.

         A window is displayed with each player on the team listed.
         You may then select those that are coming to the game and
         those that are not.

         The following keys have meanings in this window:

         +      Mark this player as coming to the game.

         -      Mark this player as NOT coming to the game.

         return Remember this roster and return to the batting order
                menu.

         esc    Same as return.  We remember who is attending the game
                as you specify each one, so there is no abandoning of
                this editing session.


         7.1.5.2 Select Criterion

         This option is used to select the statistics upon which you'd
         like the order of your players based.  You will be presented
         with a list of statistics.  In order to select the sorting
         order, place the cursor next to the statistic you desire and
         press one of the function keys listed to the right of the
         list of statistics.

         The players selected through the procedure described in
         section 7.1.5.1 are sorted based upon the statistic next to
         F1.  If there is a tie in that statistic, the tied players
         are sorted based upon the statistic next to F2.  This
         continues through all statistics selected.  If there is STILL
         no difference between two players' statistics, they are
         sorted in the order in which they were originally added to
         the database.

                                      15 





         Softball Coach                                    Version 3.0

         Note that you needn't select statistics for ALL the function
         keys available.  In some cases, you may be interested in only
         one or two statistics.  If two players are identical in those
         statistics, you don't care about the rest.  In fact, you
         needn't select F1 before you select any other function key.
         If you are only interested in a single statistic, you may
         select ANY of the listed function keys.  This works because
         we ignore any un-assigned selections.

         If you have specified values in the configuration file (see
         section 4.2) for the co.<function-key> options, you will see
         that the spaces next to the function keys in the window will
         be pre-filled with the values you've specified.  You may make
         any changes you like to this list.  Your changes will be in
         effect throughout the rest of this run of Softball Coach
         unless, of course, you make further changes later.

         7.1.5.3 Display Order

         This selection is what displays the final batting order you
         have selected.  A menu is displayed allowing you to choose
         whether you'd like the output to go to the printer, the
         screen, or a disk file.

         Be sure your printer is turned on if sending your output
         there.  However, we'll tell you if something isn't right.

         If you've selected a disk file for output, another window
         will appear, prompting you for the pathname of the file you'd
         like written.

         7.1.6 Reports

         This menu selection can be used much like the batting order
         menu described in section 7.1.5.  The only difference in the
         two procedures is that the algorithm to place the batters
         into "slices" is not performed for the report generation
         process.

         After selecting this menu option, you are presented with a
         menu giving two selections as described below.

         7.1.6.1 Run Report

         After selecting this menu option, are presented with another
         menu which allows you to select whether you'd like your
         output to appear on the screen, the printer, or a disk file.

         Be sure your printer is turned on if sending your output
         there.  However, we'll tell you if something isn't right.


                                      16 





         Softball Coach                                    Version 3.0

         If you've selected a disk file for output, another window
         will appear, prompting you for the pathname of the file you'd
         like written.

         7.1.6.2 Choose Order

         This option is used to select the statistics upon which you'd
         like the order of your report based.  You are presented with
         a list of statistics.  In order to select the sorting order,
         place the cursor next to the statistic you desire and press
         one of the function keys listed to the right of the list of
         statistics.

         The players on your team are sorted based upon the statistic
         next to F1.  If there is a tie in that statistic, the tied
         players are sorted based upon the statistic next to F2.  This
         continues through all statistics selected.  If there is STILL
         no difference between two players' statistics, they are
         sorted in the order in which they were originally added to
         the database.

         Note that you needn't select statistics for ALL the function
         keys available.  In some cases, you may be interested in only
         one or two statistics.  If two players are identical in those
         statistics, you don't care about the rest.  In fact, you
         needn't select F1 before you select any other function key.
         If you are only interested in a single statistic, you may
         select ANY of the listed function keys.  This works because
         we ignore any un-assigned selections.

         If you have specified values in the configuration file (see
         section 4) for the co.<function-key> options, you will see
         that the spaces next to the function keys in the window will
         be pre-filled with the values you've specified.  You may make
         any changes you like to this list.  Your changes will be in
         effect throughout the rest of this run of Softball Coach
         unless, of course, you make further changes later.

         7.1.6.3 Filter Players

         This option is used to select the statistics upon which you'd
         like players selected for your report.  You will be presented
         with a list of statistics.  In order to select a filtering
         criterion, place the cursor next to the statistic you desire
         and press one of the function keys listed to the right of the
         list of statistics.

         A ">" symbol will appear to the right of the statistic name
         just displayed and the title of the window will change to
         prompt you for a minimum value.  All players with at least
         that value in that statistic will be included in the report.

                                      17 





         Softball Coach                                    Version 3.0

         7.1.7. Merge a database

         This menu option allows you to combine several databases.
         You can, of course, save the newly combined databases to a
         disk, or print reports from this utility.

         Adding a database works much like reading a new database.
         The major difference is that the old database is not removed
         before the new one is read.  The statistics for whatever data
         is read are added to the data records already in memory.  See
         section 7.1.2 for details on reading a database in Softball
         Coach.  Player data records for players with the same name
         are totaled and the game records are simply inserted along
         with the rest.

         To illustrate this, if you were to merge a database with
         itself, the result would be a database with the same number
         of players as before each of whom have twice as many at bats,
         twice as many games played, etc.

         A window will appear on the right of the screen to keep track
         of all the databases already merged or loaded.






























                                      18 





         Softball Coach                                    Version 3.0

         8. User Supported Software

         This software is distributed through a unique marketing
         approach called Shareware.  What this means is that we
         encourage you to copy this software distribution and share it
         with your friends.  We must make the stipulation, however
         that you not modify the distribution in any way when you do
         share it.

         If you have received this software through one of the so
         called "Shareware Houses" (companies whose business is
         selling disks containing other author's software), please
         note that none of the money you have paid so far has (or
         will) make its way to the author.  You have simply paid for
         the duplication and distribution costs.

         This method of distribution is based on the following
         principles:

                   1.   Users need to try out software to determine
                        its usefulness.

                   2.   Authors of software can get support directly
                        from their users.

                   3.   Software sharing and copying can/should be
                        encouraged.

         If you use this software, we ask that you send a donation
         ($25 is recommended, but we don't turn away money of any
         kind).  We'll add you to our mailing list, send you the
         latest version of the software, and notify you of future
         updates to the software.

         In addition to the above, when you register, we will include
         the following:

         +      The 1990 (more recent if possible) regular season
                statistics for all major league baseball teams.  If
                you want to see the amount of data we can handle, this
                will show off our stuff!

         +      A small program developed to generate "magic" numbers.

         You may use the registration form on the last page of this
         manual to forward the necessary information to us.  Please
         send your contribution to:

                          The Software Construction Co.
                                 P.O. Box 160
                           North Billerica, MA   01862

                                      19 





         Softball Coach                                    Version 3.0

         If you do not use this software, we'd also like to know why.
         It is obvious you're somewhat interested or you wouldn't have
         gotten this far into the manual.  We'd like to know how we
         can make these programs better.  Please write to us at the
         same address and let us know what we could have done to make
         them useful to you.

         For $5 to cover the cost of the diskette(s) and shipping, we
         will supply you with the latest edition of the software.
         Please specify 5.25" or 3.5" diskettes.

         We would sincerely like to thank you for giving this, the
         fruits of our labor, a trial.  We hope it proves useful to
         you.






































                                      20 





         Softball Coach                                    Version 3.0

         9. Bug Reports

         Should you discover a bug in this code, please let us know at
         the same address listed in section 8.  We regret that we
         can't provide phone support at this time (maybe in the
         future).  Provide us with as much of a description of the
         problem as you can, as well as your name and address.  If you
         would prefer being contacted by phone, by all means, add your
         phone number and the hours you will be available at that
         number.

         What do you get for your trouble?  We will send a copy of the
         fixed program to the first registered user to report the
         problem and will strive to answer all others with a letter.






































                                      21 





         Softball Coach                                    Version 3.0

         10. Known Problems/Limitations

         When entering a filename during the database reading or
         writing procedure, you will not be able to backspace over the
         first character typed in order to correct it.  The best
         workaround we can suggest is to make certain that the
         filename you enter is not found.  This will cause an error
         window to appear.  Typing any key will return you to the
         start of the filename input field.  You may then type the
         correct filename.

         Statistics must be less than 65,535.  If they get larger than
         that, they will wrap (i.e. 65,536 becomes 0).







































                                      22 





         Softball Coach                                    Version 3.0

         A. Statistics Definitions

         The following is a detailed list of the statistics that can
         be tracked with this software and a definition of their
         intended use.  If there is a symbol in parentheses after the
         name of the statistic, it is the abbreviation used within the
         program for that statistic.

                   1.   At Bats (AB)

                   Any time a player makes a trip to the plate and
                   becomes a baserunner through any means other than a
                   walk.  The lone exception to this rule is a
                   sacrifice (see below).  It is not counted as an "at
                   bat."  Note that a batter who is not allowed to
                   finish his "trip to the plate" is not considered to
                   have been at bat and becomes the first batter in
                   the following inning.

                   2.   Batting Average (Avg)

                   Base hits divided by at bats.

                   3.   Doubles (2B)

                   A base hit on which the batter reaches second base
                   safely and the defensive team has committed no
                   errors.

                   4.   Game Winning RBIs (GWR)

                   A Run Batted In (RBI) which increases the score to
                   one greater than your opponent's final score.  For
                   example, if your team wins by as score of 21 to 12,
                   the player credited with the RBI for the 13th run
                   for your team is also credited with a Game Winning
                   RBI.  Note that this means you can only credit a
                   player with a Game Winning RBI when your team wins
                   and only one Game Winning RBI may be scored in any
                   game.

                   5.   Games (G)

                   You're kidding, right?

                   6.   Hit by Pitch (HP)

                   The batter is touched by a pitched ball which he is
                   not attempting to hit unless the ball is in the
                   strike zone when it touches the batter, or the
                   batter makes no attempt to avoid being touched by

                                      23 





         Softball Coach                                    Version 3.0

                   the ball.

                   7.   Hits

                   Also known as Base Hits.  A "hit" is scored when
                   the batter hits the ball and reaches a base safely
                   and the defensive team has committed no errors and
                   no other baserunner was forced out (fielder's
                   choice).

                   8.   Home Runs (HR)

                   A hit where the batter is able to touch all bases
                   without the other team committing an error and, in
                   so doing, score a run.

                   9.   On Base Average (OBA)

                   The sum of hits, walks, and hit by pitch divided by
                   the sum of at bats, walks, and hit by pitch.

                   10.   Runs Batted In (RBI)

                   An RBI is scored for a batter when a baserunner
                   scores when that batter makes a base hit, a
                   sacrifice, or walks.

                   11.   Runs

                   A run is scored when a player safely touches home
                   plate.

                   12.   Sacrifices (SAC)

                   A sacrifice fly is a fly ball which is caught for
                   an out and which also allows a baserunner to tag up
                   and score.  A sacrifice bunt is a bunt that allows
                   a baserunner to advance at the expense of the
                   batter being put out.

                   13.  Slugging percentage (SLG)

                   Singles plus 2 times doubles plus 3 times triples
                   plus 4 times home runs divided by at bats.  This
                   statistic indicates the average number of bases
                   gained per at bat (i.e. 4.000 is a perfect Slugging
                   percentage).

                   14.  Stolen Bases (SB)



                                      24 





         Softball Coach                                    Version 3.0

                   A stolen base is scored when a runner advances a
                   base unaided by a hit, another runner making an
                   out, an error, a passed ball, a wild pitch, or a
                   balk.

                   15.  Strike outs (SO)

                   A strike out is scored when a batter is called out
                   after three strikes have been called.

                   16.  Triples (3B)

                   A base hit on which the batter reaches third base
                   safely and the defensive team has committed no
                   errors.

                   17.  Walks (BB)

                   Also known as Base on Balls.  A walk is scored when
                   a batter reaches first base as a result of having
                   four pitches called balls in an at bat.































                                      25 





         Softball Coach                                    Version 3.0

         B. Program History

         Version 1.0 - Circa 1988.

                Initial version developed for the author's personal
                use.

         Version 2.0 - Spring 1989.

                Many new features.  Still unreleased.

         Version 2.01 - November 1989.

                Initial shareware release.

                - Game Winning RBIs added.

         Version 2.02 - December 1989.

                Bugs fixed:

                - Problem displaying first entered player in player
                  selection menu.

         Version 2.03 - April 1990.

                - Company name changed to The Software Construction
                  Co.

         Version 3.0 - August 1990.

                - Totals on the bottom of reports.

                - Games, Hit by pitch, Sacrifices, stolen bases added.

                - SBMERGE program moved into main menu as a menu
                  choice.

                - Reports may now go to a disk file.

                - Data may be typed in directly as well as using + and
                  - keys.

                - Player data may now be "filtered" prior to sorting
                  and printing a report.

                - New co.<function-key> options for SOFTBALL.CFG.

                - Games records added (date, opponent, runs, hits, and
                  errors for each team as well as winning percentage,
                  average runs per game, average hits per game, and

                                      26 





         Softball Coach                                    Version 3.0

                  average errors per game).

                - Clear Memory menu option.

















































                                      27 





         2B                             see "doubles"
         3B                             see "triples"

   - A -

         AB                             see "at bats"
         adding a game                  11
         adding a new player            9
         address                        15, 19, 21
         at bats                        1, 5, 23
         average                        see "batting average"
         avg                            see "batting average"

   - B -

         base hits                      1, 5, 24
         base on balls                  1, 6, 23, 24, 25
         baseball                       1
         batting average                1, 5, 23
         batting order                  13, 16
         BB                             see "base on balls"
         bugs                           see "reporting bugs"

   - C -

         career statistics              1, 9
         changing directories           12
         choosing reporting order       17
         clearing memory                12
         color                          5, 7
         command line                   3
         comment                        5
         configuring the program        5
         criterion                      13, 15, 17
         cursor control keys            4, 10

   - D -

         database files                 8
         database name                  3
         deleting a game                12
         deleting player data           11
         disk file                      16
         doubles                        1, 5, 23

   - E -

         editing a game                 11
         editing data                   9
         editing existing players       10
         errors                         7
         escape key                     3, 4, 9, 10, 15

   - F -






         F1 key                         9, 10, 12, 15, 17
         F2 key                         9, 10, 15, 17
         file format                    8
         files                          8
         files, *.SBL                   8
         files, SOFTBALL.CFG            5, 8
         floating point coprocessor     2

   - G -

         G                              see "games"
         game winning RBIs              1, 5, 23
         games                          1, 5, 23
         generating reports             16
         getting started                3
         GWR                            see "game winning RBIs"

   - H -

         hit by pitch                   1, 5, 23
         hits                           see "base hits"
         home runs                      1, 5, 24
         HP                             see "hit by pitch"
         HR                             see "home runs"

   - I -

         introduction                   1

   - L -

         La Russa, Tony                 14
         limitations                    22
         loading a database             see "reading a new database"
         LOGITECH                       4

   - M -

         main menu                      3, 9
         menus                          4, 9
         merging a database             18
         Microsoft                      4
         MONITOR option                 5, 7
         mono                           5
         mouse                          2, 4
         mouse button, left             4
         mouse support                  4
         Mouse Systems                  4

   - N -

         name                           9

   - O -






         OBA                            see "on base average"
         on base average                1, 6, 24
         options                        5

   - P -

         PgDn                           10
         PgUp                           10
         printer                        16
         problems                       see "reporting bugs"
         problems, known                22

   - R -

         RBI                            see "runs batted in"
         reading a new database         12
         reporting bugs                 21
         reports                        16
         return key                     4, 9, 10, 15
         roster                         13, 15
         runs                           1, 6, 24
         runs batted in                 1, 6, 24

   - S -

         SAC                            see "sacrifices"
         sacrifices                     1, 6, 23, 24
         saving a database              see "writing a database to disk"
         SB                             see "stolen bases"
         screen                         16
         selecting a roster             15
         selecting batting criterion    15
         selecting reporting criterion  17
         shareware                      19
         SLG                            see "slugging percentage"
         slugging percentage            1, 6, 24
         SO                             see "strike outs"
         softball                       1
         stolen bases                   1, 6, 24
         strike outs                    1, 6, 25
         suggestions                    14
         supported statistics           1
         system requirements            1

   - T -

         team statistics                1
         title page                     3
         triples                        1, 6, 25

   - U -

         user supported software        19
         using menus                    4






   - W -

         walks                          see "base on balls"
         writing a database to disk     12

   - Misc -

         + key                          9, 10, 15
         - key                          9, 10, 15















                          The Software Construction Co.
                                  P.O. Box 160
                           North Billerica, MA  01862

        Name:    ________________________________________________________

        Address: ________________________________________________________

                 ________________________________________________________

                 ________________________________________________________

        Phone:   ________________________________________________________

        From Title screen:    Version __________   Serial Number ________

        Where did you get your copy of Softball Coach?

        The Software Construction Co. _____        BBS              _____

        Friend                        _____        Shareware Dealer _____

        If you checked BBS or Shareware Dealer above please tell us which
        one:

        _________________________________________________________________

        What format media would you like?         5.25" _____  3.5" _____

        Comments or suggestions: ________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4108

     Volume in drive A has no label
     Directory of A:\

    SOFTBALL CFG       310  11-13-90   8:28p
    SOFTBALL DOC     60634  11-12-90  10:08p
    SOFTBALL EXE    116390   3-09-91  10:43a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       847  10-08-93   3:27p
            5 file(s)     178212 bytes
                          141312 bytes free
