---
layout: page
title: "PC-SIG Diskette Library (Disk #892)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0892/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0892"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COLLEGE FOOTBALL POOL"

    COLLEGE FOOTBALL POOL is designed to make football pool games easier to
    play/follow/bet each week.
    
    A demonstration schedule is included.  Pick the week you want, and all
    the games for that week will be displayed.  Choose any fourteen games
    for the selection sheet.  The object of the game is for each player to
    try to pick the most winners of the 14 weekly games.  Selection
    sheets can then be printed showing all the players' choices.
    
    After the games are completed, enter the winning teams and print a final
    report showing the number of games each player picked correctly.  In the
    event of ties, the player who was the closest in guessing the total
    number of points scored in the last game on the selection sheet is
    declared the winner.  Up to 300 players can be handled by this program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CFP.DOC

{% raw %}
```















                          COLLEGE FOOTBALL POOL

                             IS THE PRODUCT OF

                              CRITICS CHOICE

                              P. O. BOX 1381

                       POMPANO BEACH, FLORIDA 33061



                                COPYRIGHT  1988




                              TABLE OF CONTENTS
                              -----------------

              . GENERAL INFORMATION                  1

              . GETTING STARTED                      3

              . PRINTING FOOTBALL SELECTION SHEET    5

              . ENTERING PLAYERS SELECTIONS          8

              . PRINTING FINAL RESULTS              10

              . LIST ALL PLAYER'S SELECTIONS        11

              . REMOVE LAST WEEKS PLAYER SELECTIONS 11

              . FOOTBALL SCHEDULE FOR NEXT YEAR     12

              . SAMPLE WEEKLY SELECTION SHEET       A1

              . SAMPLE LIST OF PLAYER'S SELECTIONS  A2

              . SAMPLE MONDAY MORNING REPORT        A3



                             GENERAL INFORMATION
                             -------------------

          College Football Pool (CFP) was designed expressly for the
          IBM-PC and compatible. A complete football schedule for the
          entire current season is included in a data file on the CFP
          disk. The operator picks the week he wants for the selection
          sheet and all the games for that week appear on the screen.
          He then chooses any 14 games he desires for the selection
          sheet.  He then decides if he wants to assign point spreads
          to the games.  CFP then prints a selection sheet.

          The selection sheet contains rules for playing the
          game.  The rules are simple and encourage non-football
          experts to participate in the game.  The object is to
          pick the most winners of the 14 weekly games. In the event
          of ties, each player enters the total number of points they
          think will be scored in the last game on the selection sheet
          and whoever is closest to the actual points scored is declared
          the winner.

          Entering each players selections has been simplified by
          a data entry screen designed expressly for this
          purpose.  Using the 10 key numeric pad on the keyboard,
          it is easy to enter 2 players a minute.  Groups of
          selection sheets may also be entered at different
          times.  Each player is stored on disk when operator is
          satisfied that entry is correct, so that in the event
          of a power failure, no work is lost accept for the
          current player being entered on the screen. After all
          players are entered the operator may produce a list of
          this weeks selections. This report shows the time and
          date and can be used to verify that no selections were
          changed after the games were played.

          Up to 300 players can be handled by CFP.  A final report must be
          produced on Monday morning.  Operator keys in the 14 numbers of
          winning teams from weekend games and CFP counts number of games
          each player picked right.




















                                       1.
  

          Operator keys in the number of points scored in last
          game and CFP prints final report in order by

                 1. Most games won.
                 2. Smallest point difference.

          Monday morning is also a good time to print the next
          weeks selection sheet.



                      **************************
                         WARNING : PLEASE NOTE.
                      **************************

          You must operate College Football Pool in the correct
          sequence in order not to mess up your player selections.
          Its basically simple.  Follow these steps.

              1. Make first selection sheet.

              2. Enter players selections for coming
                 weeks games.

              3. List player selections before games
                 are played.

              4. Enter weekend game results.(Prints final report.)

              5. Remove last weeks player selections.

              6. Make selection sheet for next week.

                 Repeat steps 2 thru 6.























                                   2

                             GETTING STARTED
                              ---------------

          Make a backup copy of College Football Pool diskette.

          Do not try to operate the game from the master disk.
          Format a disk using your version of DOS. Put formatted
          disk in drive B: and the CFP disk in drive A:.  Copy
          all files from master CFP disk using the command

                A:INSTALL

                followed by,

                A:2


          Put the master CFP disk away for safe keeping.  If any
          of the files get lost on your working copy disk you may
          retrieve them from your master CFP disk.

          INSTALLING ON HARD DISK.
          ------------------------

          Place CFP disk in drive A:

                   Enter A:INSTALL

                         followed by,

                         A:1

          This will give you the necessary commands to install
          the program on your hard disk or floppy diskette.

          STARTING THE PROGRAM. - FROM DISKETTE.
          --------------------------------------
          Put working copy of CFP diskette in drive A:.
          Enter following commands.

              A:
              CFP    or    CFP /MONO


          STARTING THE PROGRAM. - FROM HARD DISK.
          --------------------------------------
          Enter following commands:

              C:\CFP
              CFP    or    CFP /MONO

          This will cause the main menu for College Football Pool
          to appear on the screen.  The /MONO should be used if you
          are having trouble seeing what is on the screen.















                                   3

          ======================================================


            DATE: 11-15-1987

                    COLLEGE FOOTBALL POOL MENU (VERSION 1990)
                    ----------------------------------------

               1. PRINT NEXT WEEK SELECTION SHEET.      (REQUIRED WEEKLY)

               2. ENTER PLAYER SELECTIONS.              (REQUIRED WEEKLY)

               3. ENTER WEEKEND GAMES RESULTS           (REQUIRED WEEKLY)
                  & FINAL PLAYER STANDINGS REPORT.

               4. PRINT EXTRA COPY OF SELECTION SHEET.

               6. REMOVE LAST WEEKS PLAYER SELECTIONS.

               7. PRINT LIST OF ALL PLAYER SELECTIONS.

               8. ORDER FOOTBALL SCHEDULE FOR NEXT SEASON.

               9. TO END PROGRAM.

          ENTER NUMBER FROM MENU.  NO [ENTER] NEEDED.

          ======================================================
        If you select the wrong number from the menu, you can
        cancel whatever you accidently selected by pressing
        Enter key when the next screen or question appears.


























                                   4

                   PRINTING THE FOOTBALL SELECTION SHEET.
                   --------------------------------------

          You must begin the College Football game by producing a
          selection sheet.  Use item 1. on the main menu to print
          a sheet.

          When you press item 1. to print a selection sheet
          you will then see a list of Saturday dates for all the
          weeks of the college football season and a number in front
          of each date which is the week no. of the season. You will then
          see a screen which looks like this.

         =================================================================

          DATES FOR SATURDAY GAMES FOR   1987   SEASON ARE
                             WEEK NO.             DATE
                                1               SEPT. 5
                                2               SEPT. 12
                                3               SEPT. 19
                                4               SEPT. 26
                                5               OCT. 3
                                6               OCT. 10
                                7               OCT. 17
                                8               OCT. 24
                                9               OCT. 31
                                10              NOV. 7
                                11              NOV. 14
                                12              NOV. 21
                                13              NOV. 28
                                14              DEC. 25

              ENTER WEEK NUMBER FOR SELECTION SHEET

         =================================================================
























                                         5.


          If you enter a 7 and press the Enter key for week of Oct. 17 you
          will see team names of 40 games being played that weekend.  The
          screen will look like this.

==============================================================================

  PICK 14 GAMES IN [  ]'s FOR WEEK OCT. 17                     Esc  TO CANCEL
   1  NOTRE DAME      AT AIR FORCE         21 HOUSTON         AT WYOMING
   2  TENNESSEE       AT ALABAMA           22 WISCONSIN       AT ILLINOIS
   3  OREGON STATE    AT ARIZONA           23 INDIANA         AT MINNESOTA
   4  WASHINGTON ST   AT ARIZONA STATE     24 IOWA            AT MICHIGAN
   5  TEXAS           AT ARKANSAS          25 MISSOURI        AT IOWA STATE
   6  AUBURN          AT GEORGIA TECH      26 OKLAHOMA        AT KANSAS STATE
   7  TEXAS A&M       AT BAYLOR            27 KENTUCKY        AT LOUISIANA ST
   8  BOSTON COLLEGE  AT RUTGERS           28 MARYLAND        AT WAKE FOREST
   9  S.W.LOUISIANA   AT MISSISSIPPI       29 TULANE          AT MEMPHIS STATE
   10 CORNELL         AT BROWN             30 MICHIGAN STATE  AT NORTHWESTERN
   11 CINCINNATI      AT WEST VIRGINIA     31 SO. CALIFORNIA  AT WASHINGTON
   12 DUKE            AT CLEMSON           32 SOUTHERN MISS   AT MISSISSIPPI ST
   13 KANSAS          AT COLORADO          33 NAVY            AT PENNSYLVANIA
   14 YALE            AT COLUMBIA          34 NEBRASKA        AT OKLAHOMA STATE
   15 DARTMOUTH       AT HARVARD           35 NORTH CAROLINA  AT NO.CAROLINA ST
   16 VIRGINIA        AT SO. CAROLINA      36 OHIO STATE      AT PURDUE
   17 TEMPLE          AT FLORIDA           37 OREGON          AT UCLA
   18 LOUISVILLE      AT FLORIDA STATE     38 PENN STATE      AT SYRACUSE
   19 GEORGIA         AT VANDERBILT        39 RICE            AT TEXAS TECH
   20 UTAH            AT HAWAII            40 STANFORD        AT SAN DIEGO ST
 GAME NO. > 1    2    3    4    5    6    7    8    9   10   11   12   13   14
          [  ] [  ] [  ] [  ] [  ] [  ] [  ] [  ] [  ] [  ] [  ] [  ] [  ] [  ]
 PUT GAME #  IN [  ] AND PRESS ENTER KEY.     (i.e.[21] [16] [ 3]   etc.)

===============================================================================

          The blinking cursor will be sitting in the first box [  ] on the
          bottom of the screen and you must select a game number from 1 to
          40 from the games which appear on the screen.  Enter the number
          in the first box and press the Enter key to get to the next box.
          You can enter the numbers in any order you like.  You may not
          enter a number which does not have a game listed or a number
          which you have already entered in a previous box.  The computer
          will beep at you to let you know you are doing something wrong if
          you do.  If you mess up your game number selections and want to
          start over, you may do so by pressing the Esc key.

          This allows you to customize the selection sheet with the
          games you desire.  Make the last game one which has a great deal
          of interest to people in your geographic area.  It is the game
          whose points are used as the tie breaker.









                                         6.


          After picking the games you want on the selection sheet you
          will then be asked if you want to assign points.  If you
          answer N the CFP will print your selection sheet without
          point spreads.  If you answer Y the CFP will display the
          teams in each game and you will have to pick the favorite
          and the number of points in the spread.  The teams appear as
          follows on the screen,

                A. ALABAMA       AT  B. MEMPHIS STATE

          you must enter an A or B to indicate which team is favored and
          the number of points they are favored by. If you entered

                                A7.5

          it would mean that Alabama is favored by 7 and 1/2 points.  If a
          game is even and has no points you should enter A0.  After you
          have entered each games points a selection sheet will be printed
          showing point spreads.

          HOW MANY SELECTION SHEETS DO YOU WANT PRINTED

          Enter the number to be printed and press enter.  You
          will then be told to

          SET PRINTER TO RECEIVE SELECTION SHEET & PRESS ANY KEY

          Make sure printer is turned on and loaded with paper
          and then press any key to begin printing.  When it is
          thru the program will return to main menu and you can
          end the program with item 9.

          A sample of the selection sheet is shown on page A1.
























                                   7.


                        ENTERING PLAYERS SELECTIONS.
                        ----------------------------

          You must enter all players into computer before games
          are played.  Use item 2. on main menu to bring up the
          player selection data entry screen.  Use bottom
          tear-off stub on football selection sheet for data
          entry. Enter player's name in box where cursor is
          blinking and press enter key to get to first football
          game box.

          Enter a 1 or 2 as indicated above the box. If you enter
          anything else, you will hear a beep and cursor will
          remain in the box until you enter correct number. When
          you enter correct number the cursor will move to next
          box automatically.  Use 10 key numeric pad on right of
          keyboard for speeding up the player entries. You can
          enter numbers as fast as you like without worrying
          about making mistakes since CFP is checking each
          keystroke you type in game boxes.  Enter all 14 games
          in boxes provided.

          When you get to "LAST GAME POINTS" box you must
          enter point total and press enter key.

          Below the boxes you will see this message:

                ENTER 0 FOR ANY GAME PLAYER DID NOT CIRCLE.

          If players do not chose every game by circling them, then
          they lose those games as indicated on the selection stubs
          they turn in to the game coordinator.

          When screen appears you will see some function key
          settings on bottom of screen.

                        F1 = MAIN MENU
                        F2 = CLEAR SCREEN
                        USE BACKSPACE <-- TO CORRECT ERRORS

          At anytime you may return to College Football main menu by
          pressing F1.  At anytime you may clear screen and start
          over by pressing F2. After you have completed entering
          data on the screen 2 more function keys will appear on
          bottom.

                        F9  = SAVE SCREEN
                        F10 = CHANGE SCREEN

          and on the line above the function key messages you
          will see

              USE THE F KEYS




                                   8.


          If data on screen has been entered correctly you must
          use F9 to save it.  After data is saved screen will be
          cleared.

          If any data is incorrect use F10 to change it.  You
          will see message on line above function key messages
          change to

          USE [ENTER] TO SKIP TO BOX YOU WANT TO CHANGE

          Also blinking cursor is sitting in the player's name
          box.  Move cursor to box to be changed by pressing
          enter key.  When cursor is in box you want to change,
          just type the correct number.  Then press F9 key to
          save the data.

          You may enter player's football sheets in different
          data entry sessions.  They do not have to be entered
          all at the same time. When you are through with a data
          entry session you may return to main menu by using F1
          key.

          After all players have been entered into computer you
          should do item 7.

              PRINT LIST OF ALL PLAYER SELECTIONS.

          and keep this printout as a data entry verification
          report.

    NOTE: When you pick iten 2, ENTER PLAYER SELECTIONS, you may
          see following message;

        **** YOUR CURRENT SELECTION SHEET WEEK DOES NOT MATCH ****
             DATE OF YOUR CURRENT PLAYER SELECTIONS.

        IF PLAYER SELECTIONS IN THE COMPUTER ARE FROM LAST WEEKS GAMES,
        DO YOU WISH TO DELETE THEM AND ENTER PLAYER SELECTIONS FOR A
        NEW WEEK (Y/N)

          If you are entering player selections for a new week, you
          must answer Y and this will erase the players from last
          weeks game. The selection sheet puts a date in the computer
          and that date is saved with the players selections.  When you
          make a new selection sheet this causes CFP to prompt you for
          the message above.











                                   9


                                PRINT FINAL RESULTS
                                -------------------

          After weekend games have been played you must do item 3.
          on main menu.

           3. ENTER WEEKEND GAME RESULTS.
              & FINAL PLAYER STANDINGS REPORT.

          This will cause the following messages to appear on your
          screen.

              THIS SCREEN IS FOR ENTERING WEEKEND GAMES RESULTS.
              ENTER NUMBERS 1-28 OF TEAMS THAT WON WEEKEND GAMES.
               IF YOU USED POINT SPREADS YOU MUST ENTER THE WINNING TEAM AFTER
               APPLYING THE POINTS.
                 ENTER A ZERO (0) FOR ANY GAME WHICH ENDED IN TIE.

          Below this message you will see boxes with numbers over
          them.  The numbers indicate the team numbers for each game
          and a box for the TOTAL LAST GAME POINTS.  This screen looks
          and works just like the screen you used to enter the players
          selections.  You can only enter 1 of the 2 numbers over the
          top of the box.  If you make a mistake you can backup using
          the Backspace key and enter the correct number.

              Only teams 1 or 2 can win game 1.
              Only teams 3 or 4 can win game 2.
              Only teams 27 or 28 can win game 14.


          CFP will count the number of games each player picked
          correctly and then print the preliminary report after
          displaying following message :

              SET PRINTER TO RECEIVE REPORT & THEN PRESS ANY KEY.

          After printing report you will see following message:

          FINAL REPORT IS COMPLETE. DO YOU WANT ANOTHER COPY (Y/N)

          Enter Y and enter key for another copy
            or  N and enter key to return to main menu.

          A sample final report is shown on page A3.

          If you made an error in picking a winning team, and
          discovered your mistake after printing the report, just do
          item 3.  and print the report again.








                                   10.


                         LIST ALL PLAYERS SELECTIONS.
                         ----------------------------

          You should print a list of players entered into CFP
          after you have keyed in all the players so that you
          will have proof of each players team selections.

          This list shows the time and date when it was printed.
          The list should be printed before any games are played.

          To print the list you need to press 7 on the main menu.

              LIST ALL PLAYER'S SELECTIONS.

          This will cause CFP to display following messages.

          PRINT LIST OF PLAYER SELECTIONS.
          ON SCREEN (S) OR PRINTER (P).

          Enter an S or P and press [ENTER]

          SET PRINTER TO RECEIVE REPORT.
          PRESS ANY KEY TO CONTINUE.

          After list is printed CFP will return to main menu.

          A sample of this report is shown on page A2.





                      REMOVE LAST WEEKS PLAYER SELECTIONS
                      -----------------------------------

          When you press item 6. you will be asked to verify that you
          want to remove last weeks players.

           DO YOU REALLY WANT TO REMOVE LAST WEEKS PLAYERS (Y/N)

          Enter a Y and [Enter] to remove all players.
















                                  11.

                      FOOTBALL SCHEDULE FOR NEXT YEAR.
                      -------------------------------

          The original CFP disk you received contained the college
          football schedule for the current season.  The program
          cannot operate for the following season without the new
          college football schedule.

          Critics Choice will prepare a file each year with the
          new schedule for the coming season and make it
          available to the users of College Football Pool any time
          after June 1.

          Item 8 on the main menu is an order form for the new
          football schedule.  It will display on your screen and
          you may print it out by holding shift key down and
          pressing PrtSc key.  Fill out the order form and mail
          it in with your check or money order for $10.  We will
          send you a floppy disk with the current college football
          schedule.

          The bowl games played between Christmas and New Years provide
          and additional and interesting week of games which can be used
          to conduct an office pool.  The teams in these games are not
          known until early December and there are usually about 15 games.
          We have created and additional week to the schedule which will
          be sent to you in early December.





























                                  12

                 COLLEGE FOOTBALL GAMES FOR WEEK OF DEC. 25

   CIRCLE NUMBER OF TEAM YOU THINK WILL WIN.  MOST GAMES CIRCLED CORRECTLY
   WINS EACH WEEK. IN THE EVENT OF TIES, THE TOTAL POINTS SCORED IN LAST
   GAME WILL BE USED AS THE  TIEBREAKER.  WHOEVER COMES CLOSEST TO
   THE ACTUAL POINTS SCORED(ABOVE OR BELOW) WILL BE DECLARED THE WINNER.
   FILL IN AND TEAR OFF  BOTTOM SECTION AND TURN IT IN TO GAME COORDINATOR
   BY FRIDAY NOON. (THUR. FOR WEEKS WITH THUR. GAME)



                1. OKLAHOMA STATE   AT      2. WEST VIRGINIA

                3. FLORIDA          AT      4. UCLA

                5. ARKANSAS         AT      6. GEORGIA

                7. AIR FORCE        AT      8. ARIZONA STATE

                9. SO. CAROLIAN     AT     10. LOUISIANA ST

               11. PITTSBURGH       AT     12. TEXAS

               13. CLEMSON          AT     14. PENN STATE

               15. FLORIDA STATE    AT     16. NEBRASKA

               17. NOTRE DAME       AT     18. TEXAS A&M

               19. TENNESSEE        AT     20. INDIANA

               21. MICHIGAN         AT     22. ALABAMA

               23. MICHIGAN STATE   AT     24. SO. CALIFORNIA

               25. SYRACUSE         AT     26. AUBURN

               27. OKLAHOMA         AT     28. MIAMI-FLA.

              TOTAL POINTS IN GAME 27-28  (   )

         FINAL REPORT WILL BE PRINTED MONDAY MORNING.


------------------------------------------------------------------------------


   COLLEGE FOOTBALL GAMES FOR WEEK OF DEC. 25


        1  3  5  7  9  11  13  15  17  19  21  23  25  27  TOTAL POINTS
                                                           LAST GAME
        2  4  6  8 10  12  14  16  18  20  22  24  26  28  (     )



   NAME.......................................
       (IF YOU FORGET TO PICK ANY GAME, YOU LOSE THAT GAME.)

                       (SAMPLE WEEKLY SELECTION SHEET)

                                    A1.




 DATE : 12-18-1987
 TIME : 13:21:19             PLAYER'S SELECTIONS.     PAGE  1
                             -------------------

   1 SUSAN FOLEY               1  3  5  7 10 12 14 15 17 20 22 23 26 28  47
   2 PAT GROSS                 2  4  5  8  9 12 14 16 17 20 22 23 26 28  63
   3 THE GREEK                 1  4  6  8  9 11 13 15 18 20 22 24 25 28  41
   4 MR. BEAR                  1  4  5  8 10 12 14 15 17 19 21 23 25 28  36
   5 D. WRIGHT                 2  4  6  8  9 12 13 16 17 19 22 23 26 28  48
   6 GINA                      2  3  5  8  9 11 14 15 17 19 22 23 25 28  43
   7 BUBBA                     2  4  6  8 10 11 13 15 17 19 21 24 25 28  37
   8 F A F                     1  4  6  8  9 11 13 15 17 19 22 24 25 28  38
   9 ANDY ALPINE               2  4  6  7 10 12 14 15 17 20 22 24 25 28  48








































                     (SAMPLE LIST OF PLAYER'S SELECTIONS)


                                     A2.



          RESULTS OF COLLEGE FOOTBALL POOL WEEK OF DEC 25      (01-04-88)
          ------------------------------------------------

               WINNING TEAMS                          TOTAL POINTS =  34
 1.OKLAHOMA STATE    4.UCLA               6.GEORGIA           8.ARIZONA STATE
10.LOUISIANA ST     12.TEXAS             13.CLEMSON          15.FLORIDA STATE
18.TEXAS A&M        19.TENNESSEE         21.MICHIGAN         23.MICHIGAN STATE
 0. **TIE GAME**    28.MIAMI-FLA.

 PLAYER               WON  DIF. POINTS ****TEAM NUMBERS SELECTED BY PLAYERS****
--------------------- ---  ---- ------ ----------------------------------------
  1.MR. BEAR           10    2    36   1  4  5  8 10 12 14 15 17 19 21 23 25 28
  2.BUBBA               9    3    37   2  4  6  8 10 11 13 15 17 19 21 24 25 28
  3.F A F               8    4    38   1  4  6  8  9 11 13 15 17 19 22 24 25 28
  4.THE GREEK           8    7    41   1  4  6  8  9 11 13 15 18 20 22 24 25 28
  5.D. WRIGHT           8   14    48   2  4  6  8  9 12 13 16 17 19 22 23 26 28
  6.SUSAN FOLEY         6   13    47   1  3  5  7 10 12 14 15 17 20 22 23 26 28
  7.ANDY ALPINE         6   14    48   2  4  6  7 10 12 14 15 17 20 22 24 25 28
  8.GINA                5    9    43   2  3  5  8  9 11 14 15 17 19 22 23 25 28
  9.PAT GROSS           5   29    63   2  4  5  8  9 12 14 16 17 20 22 23 26 28


































                            (SAMPLE FINAL REPORT)


                                     A3.


```
{% endraw %}

## FILE0892.TXT

{% raw %}
```
Disk No:  892                                                           
Disk Title: College Football Pool                                       
PC-SIG Version: S1.5                                                    
                                                                        
Program Title: College Football Pool                                    
Author Version: 1990.                                                   
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
COLLEGE FOOTBALL POOL is designed to make football pool games easier to 
play/follow/bet each week.                                              
                                                                        
A demonstration schedule is included.  Pick the week you want, and all  
the games for that week will be displayed.  Choose any fourteen games   
for the selection sheet.  The object of the game is for each player to  
try to pick the most winners of the 14 weekly games.  Selection         
sheets can then be printed showing all the players' choices.            
                                                                        
After the games are completed, enter the winning teams and print a final
report showing the number of games each player picked correctly.  In the
event of ties, the player who was the closest in guessing the total     
number of points scored in the last game on the selection sheet is      
declared the winner.  Up to 300 players can be handled by this program. 
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0892

     Volume in drive A has no label
     Directory of A:\

    BRUN30   EXE     70680   4-07-87  10:48a
    CFP      EXE     36849   8-19-90  12:52p
    CFP1     EXE     72752   6-24-90  10:06a
    CFP2     EXE     27537  11-25-89  11:36a
    GAMEC             3584   6-28-90  10:49p
    CFP      DOC     28200   8-19-90   6:08p
    README            5187   7-01-90   9:02a
    INSTALL  BAT       342   4-30-89  12:58p
    1        BAT       182   2-02-90   7:34p
    2        BAT       380   4-30-89  12:56p
    3        BAT       151   4-30-89   1:03p
    4        BAT        66   8-06-88  11:01a
    5        BAT        56   8-10-88  11:53p
    FILE0892 TXT      2221   9-04-90   4:35p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       575   1-01-80   8:59a
           16 file(s)     248800 bytes
                           62464 bytes free
