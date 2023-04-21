---
layout: page
title: "PC-SIG Diskette Library (Disk #882)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0882/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0882"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE POOL MANAGER"

    It's a great day, sports fans!  Here's something you've needed for
    years.
    
    THE POOL MANAGER makes running a football pool a snap.  Whether the
    featured event at a private party or the regular office pool, FPM does
    all the tedious work.  Enter the basic information and it handles
    everything else, from generating a picksheet to printing the final
    standings.
    
    It has complete flexibility to handle up to 18 games and 90
    participants in a single pool.  For NFL pools, the teams are already
    stored in the program, just indicate the opponents.  You can maintain
    season-long standings, utilize a tiebreaker, and determine winning teams
    by applying the point spread.  It can be used for pools in any sport.
    
    So, who do you like for next week?
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0882.TXT

{% raw %}
```
Disk No:  882                                                           
Disk Title: The Pool Manager                                            
PC-SIG Version: S1.5                                                    
                                                                        
Program Title: The Pool Manager                                         
Author Version: 2.0                                                     
Author Registration: $25.00                                             
Special Requirements: Printer.                                          
                                                                        
It's a great day, sports fans!  Here's something you've needed for      
years.                                                                  
                                                                        
THE POOL MANAGER makes running a football pool a snap. Whether the      
featured event at a private party or the regular office pool, FPM does  
all the tedious work.  Enter the basic information and it handles       
everything else, from generating a picksheet to printing the final      
standings.                                                              
                                                                        
It has complete flexibility to handle up to 18 games and 90             
participants in a single pool.  For NFL pools, the teams are already    
stored in the program, just indicate the opponents.  You can maintain   
season long standings, utilize a tiebreaker, and determine winning teams
by applying the point spread.  It can be used for pools in any sport.   
                                                                        
So, who do you like for next week?                                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## POOLMGR.DOC

{% raw %}
```
                                                           ____________
                                                           \ \ \ \ \  |\
                                                            \ \ \ \ \ ||\
                                                             \ \ \ \ \ | \
                                                              \ \ \ \ \   \
                                                               - - - - ----







                              USER DOCUMENTATION

                                      for




                             THE POOL MANAGER (tm)
                                  Version 2.0

                                 by Andy Kunz                    





                            A Sports Pool Organizer
                                 and Database           


                   Copyright 1985, 1988, 1990 by Andy Kunz




                  




               



                                                          
                                              _______
        Andy Kunz                        ____|__     |               (tm)
        American Systems              --|       |    |-------------------
        Post Office Box 604             |   ____|__  |  Association of
        LaGrange, Illinois              |  |       |_|  Shareware
        60525-0604                      |__|   o   |    Professionals
                                      -----|   |   |---------------------
        Compuserve: 72446,316              |___|___|    MEMBER
       




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE
               
                                   TABLE OF CONTENTS
        
        
                                                     
                  Table of Contents ..........................   i
                  Version 2.0 Compatibility  .................  ii
                  Version 2.0 Enhancements ................... iii
                  Features  ..................................   1
                  Hardware Requirements  .....................   2
                  File Descriptions  .........................   2
                  First Things First  ........................   3
                  Introduction  ..............................   4
                  How the Pool Works  ........................   5

                  SECTION I  Setting Up a Pool
                    Data Directory & Pool Filename  ..........   6
                    Group Association  .......................   6
                    The Major Options  .......................   7
                    Preliminary Information  .................   8

                  SECTION II  Running the Pool - The Main Menu
                    Print Picksheet  .........................  11
                    Enter Names and Picks  ...................  12
                    Print Individual Picks  ..................  14
                    Enter Point Spread  ......................  14
                    Enter Prizes and Spreadsheet Note  .......  15
                    Custom Notes and Color Preferences  ......  15
                    Group Statistics  ........................  16
                    Back up Current Pool Data Files  .........  18
                    Print Pick Summary Spreadsheet  ..........  19
                    Update Actual Results  ...................  19
                    Print Results of Games Completed  ........  20
                    Current Standings  .......................  21
                    Calculate `What If' Scenario  ............  21
                    Switch to Another Pool  ..................  22
                    Exit this Program  .......................  22

                  SECTION III  Shareware
                    Definition of Shareware  .................  22
                    Disclaimer; Copying Restrictions  ........  23
                    Registration Benefits & Procedure  .......  24
                    The ASP Ombudsman  .......................  25
                    Registration Form  .......................  26
        
 






                                         -i-


        
        
                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                              VERSION 2.0 COMPATIBILITY





        Version 2.0 cannot use data files created with previous versions of 
        The Pool Manager.  If you want to keep pools created with these 
        versions, copy them onto other disks and delete them from your hard 
        disk.  Depending on your path, the program may attempt to load 
        them.  If you're using a floppy system, start your use of version 
        2.0 with a clean working disk.

        Version 2.0 is not compatible with the PCjr.  American Systems will 
        continue to support Version 1.2 and offer schedules for 1.2 for 
        PCjr users and those who choose not to upgrade to Version 2.0



        UPGRADES

        Registered users of earlier versions of The Pool Manager may 
        upgrade to version 2.0  For the upgrade cost of $8.00, you will 
        receive:

             - Version 2.0 of The Pool Manager with complete documentation

             - The SQRPool print utility used to run a variety of square 
               pools for all sports

             - A complete NFL season of pools set up on disk for each week 
               of the current NFL season



















                                        -ii-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                               VERSION 2.0 ENHANCEMENTS
        

        NEW POOLS
        - Option to score without confidence points (wins and losses only)
        - Option to determine winning teams by applying the point spread
        - Option to apply a tiebreaker to any type of pool
        UTILITY
        - Main Menu shows complete information on and status of current pool
        - Ability to specify the drive and directory for data files
        - Pool and group files resident on the data directory are displayed
            when starting the program
        - Easy correction of errors on picks, results, and other data
            without reentering
        - Extensive use of pop-up message and dialog boxes for help
            information and description of errors
        - On line help screen for interpretation of point spreads
        - The ESC key is used instead of Funct.5, Enter to back up or exit
        - Back up current pool (and group) files directly from the Main Menu
        GROUP PERFORMANCE
        - Compilation of seasonal performance statistics for each participant
            in your group or organization.  Stats maintained:
                > Number of Pools played       > Total Games Won
                > Total Points Scored          > Total Games Lost
                > Average Points per pool      > Overall Winning percentage
        - Print statistics/standings for the organization at any time
        - Export Group Statistics to a comma delimited ASCII file
        - Select group participants for entering picks from a menu after 
            the completion of the first pool
        PRINTING
        - Today's date added to each report and titles to subsequent pages
        - Print a spreadsheet at any time
        - Standings report indicates the number of complete games in the pool
        - The number of games won, lost, and winning percentage is listed as
            part of the standings
        - Six vs four character team abbreviations for the Spreadsheet
        - Prize data is a single line, printed under the spreadsheet note.
        - If used, each person's tiebreaker is included on the Spreadsheet
            and on the Standings Report
        - Instructions on Picksheet specific to the type of pool being run
        - Option to print the pointspread (if used) on the Picksheet
        - Results report lists point spread and indicates whether or not
            each team covered (if point spread was applied)
        MISCELLANEOUS
        - Capacity increased to 120 people per pool with 140 max in a group
        - "What If" Scenario able to cover any number of games up to the
            number remaining to be played.
        - NFL Preload feature can be used for any number of NFL games
        - Expanded use of color and complete color control
        - Convenient operation from a single Main Menu
        - Option to sort standings by most points won or best possible score
                                       -iii-


                                        

                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE
                                               
                                       FEATURES

       

        +    Accommodates up to 120 participants and 18 games.
        
        +    Generates and prints a Picksheet, complete with pool directions
             for entrants to mark their picks for winners.

        +    All NFL teams are stored in the program, eliminating the need
             to type them in each week.  Just indicate the opponents for
             this week's games.  Use of this module is optional; you can
             define any 18 games for a pool.

        +    Full error protection prevents inadvertent input mistakes on 
             all information entered into the program.

        +    Maintains season long statistics for a regular group of people.

        +    Generates and prints a report of any individual's picks.  This
             can be given to an entrant in confirmation of his/her picks.
             
        +    Generates and prints a spreadsheet that shows all the teams
             and each individual's picks for all the games.

        +    Has the capability to customize display colors to any desired
             combination.

        +    Calculates each individual's score and winning percentage.  
             Also, the number of points lost and the number of points still
             pending are calculated to give an indication of potential in
             the remaining games.
        
        +    Maintains and prints results of games played.
        
        +    Prints the standings or displays them on the screen.
                               
        +    Determines the standings IF a certain team or teams win. 

        +    Allows the customization of each pool.  Provision is made for:
        
             > Pool Title             > Note to Appear on Spreadsheet
             > Date of Event          > Prizes information on the Spreadsheet
             > Note for Picksheet     > Group Title and Listing Note

        +    Enables entering the fundamental information weeks in advance. 
             The ability to revise the custom information makes this feature
             even more attractive.
        


                                         -1-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                 HARDWARE REQUIREMENTS


                              
        Computer:       IBM PC, PC/XT, PC/AT or compatible with at least
                        384K RAM.  Ver 2.0 is NOT compatible with the PCjr.

        Operating Sys.: DOS 2.1 or later
        
        Monitor:        Color (preferred) or Monochrome.
        
        Drives:         One, double sided (360k).

        Printer:        Epson FX and MX series, Star Micronics 10X, IBM
                        Graphics printer or equivalent dot matrix printer.
                                
                                 
                                             
                                   FILE DESCRIPTIONS
                                         
        
        The following files constitute The Pool Manager and should be on
        your original disk:
                                                
        README          General Information and instructions for preparing
                        to use The Pool Manager and printing the User's
                        Guide.
        
        POOLMGR.DOC     Complete User's Guide for The Pool Manager.
                                                                             
        NFLPOOL.EXE     The Pool Manager Program.
                                                  
        REGFORM         Registration Form to purchase the program.


        The following Pool Data files are generated by the Program. [For a 
        pool with the filename XXXX and a Group with the filename ZZZZ] 
                       
            XXXX.DAT    Contains general information specific to this pool.
                      
            XXXX.TEM    Contains data related to teams in the pool.
                             
            XXXX.PIK    Contains data related to participants in the pool.
                             
            ZZZZ.GRP    Contains all statistics for a Group.  

            ZZZZ.ASC    Comma delimited ASCII file of group statistics.
                        
            DISCOLOR    Contains the color/contrast setting for your monitor.


                                         -2-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE
                                               
                                  FIRST THINGS FIRST
        
        

        If you didn't read the file README, the procedure for preparing to 
        use The Pool Manager is repeated below. 
        
        1.   Make a backup copy (using the DOS DISKCOPY command) of your
             original Pool Manager disk.  Put the original in a safe place.

        2.   Print out this documentation if you haven't already done so.
             Follow these steps:
                A.   Put your Pool Manager backup disk into the A drive.
                B.   Set your printer to top of form.
                C.   Be sure you have enough paper ready.  The documentation
                     is about 25 pages long.
                D.   In response to the A>   enter the following:

                                COPY POOLMGR.DOC PRN   

             Margins have been set to enable you to bind this User's Guide
             in a three ring binder or report folder.
                                                                 
        3.   Create a working disk: 

             FLOPPY SYSTEM
             A.   Format a new disk using the /S option.
             B.   Copy the NFLPOOL.EXE file onto this disk.

             The README and POOLMGR.DOC files are not needed on your
             working disk and will just occupy space needed for data.  
             There will only be room for approximately 14 full pools (18 
             games, 120 people, with a group) with the program on the same 
             360K disk.  It is strongly recommended to use a separate data 
             disk in the "B" drive for your pool data files.  Do not put a
             write protect tab on your working disk.
                                              
             HARD DISK
             A.   Create a subdirectory for The Pool Manager.  In response 
                  to the C> enter   MD POOL
             B.   Put the backup disk in the A drive and enter the 
                  following in response to the  A>       COPY *.* C:\POOL/V

        4.   To start the program: [Be sure to set the time and date for 
             your system because today's date will be printed on all the 
             reports]
                A.   Floppy System - Put your working disk in the A drive
                     Hard Disk - Change to the POOL subdirectory by 
                                 entering CD\POOL
                B.   Enter NFLPOOL and the program will load and run.

                                         -3-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE
                                     
                                     INTRODUCTION
        
                                          

        The Pool Manager is for anyone who wants to run a sports pool.  
        Though it was originally written for and is still customized for 
        football, the program has been proven to work well with any sport.  
        Whether it's the featured event at a private party or the regular 
        office pool, this program eliminates all the tedious work.  All you 
        need to do is enter the basic information and results; The Pool 
        Manager handles everything else.  From generating a worksheet for 
        participants to indicate their picks, to printing the final 
        standings, The Pool Manager has many features that ensure an 
        interesting and error free pool.  The program has extensive error 
        protection to prevent inadvertent input mistakes as well as catch 
        an error made by a participant in the pool.  It has complete 
        flexibility to handle any combination of college and/or pro games - 
        up to 18 games and 90 participants in a single pool.  There is an 
        option to load all NFL Teams.  Just select the opponents for each 
        game.  The program has display color control in addition to several 
        other features that allow you a high degree of customization. There 
        are over 20 pages of clearly written documentation that describe 
        each feature of the program, complete with examples. Extensive 
        report capability includes: 

             A picksheet for participants to indicate their selections
               The pointspread can be optionally included on the Picksheet
             Listing of an individual's picks
             A spreadsheet indicating everyone's picks on all the games
             Current and final standings
             Potential standings "IF" a certain team or teams win
             Results of all games played
             Group Standings reflecting all pools completed this season
             Group Statistics can also be downloaded to an ASCII File

        Since The Pool Manager is Shareware, you are afforded the unique 
        opportunity to influence its improvement.  Please read Section III 
        on Shareware on page 22.  As you evaluate The Pool Manager, note 
        any problems or inconveniences you encounter as well as 
        improvements that you would like to see made to the program.  
        Please include them on the Registration Form when you register.  
        Enhancements will be made based on the priorities established by 
        registered users. 
        
        Please take time to read this User's Guide and set up a complete dummy
        pool to become familiar with the requirements and capabilities of this
        program.
        


        
                                         -4-
        


        
                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE
                                                     
                                  HOW THE POOL WORKS
                                
        

        The games to be included in the pool should be arrived at by 
        general agreement.  The Pool Manager can handle anywhere from 2 
        through 18 games.  The pool operation is very simple.  All you have 
        to do is pick the teams you think will win.  Points are awarded as 
        described below under SCORING. The individual that accumulates the 
        most points wins the pool. 
        

        SCORING

           Confidence Numbers

        A confidence number, (ranging from 1 to the number of games in the 
        pool) is assigned to each team that was selected to win.  Each 
        number can be used only once.  If the selected team wins, the 
        participant is awarded the number of confidence points assigned.  
        If the selected team loses, no points are awarded.  Your strategy 
        should be to assign the highest numbers to the teams that you are 
        the most confident will win. 
        

           Wins and Losses only

        One point is awarded for each winning team selected.
        
         
           Ties

        If a game ends in a tie, no points are awarded for either team. It 
        is scored as if both teams lost.  An exception is when the point 
        spread is applied.  In a tie, it is possible that one team may have 
        covered the point spread, thus winning the game or "covering the 
        spread" 












        
                                  
                                         -5-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE
                                                     
                             SECTION I - SETTING UP A POOL
                                   
          
        To start, follow the directions under item 4 of First Things First. 
        The first time the program is run, you will be asked whether or not
        your monitor can display several colors.  This information will be
        stored in a file called DISCOLOR and loaded directly in subsequent 
        use of the program.  You can change the colors if desired later 
        from the Main Menu. 


        DEFINING the DATA DIRECTORY

        The current drive and directory for pool data files is displayed at
        the top of the screen.  If you want to use it for your pool data
        files, press enter to accept.  The filenames of any pools that
        currently reside on this drive and directory are displayed in the
        box at the bottom of the screen.  If you are loading an existing
        pool, the pool filename must be displayed in this box.

        If you want to use another drive or directory, enter it at the
        prompt.  An error message will appear if there are any problems.
        Once the drive and directory you want to use is displayed, press
        enter to accept and you will be prompted for the pool filename.


        POOL FILENAME

        Each pool must have a unique filename.  The filename should be a 
        valid DOS filename with a maximum of 8 characters and no extension. 
        Limit yourself to using letters and numbers.  Punctuation, spaces 
        or other symbols may cause unpredictable results.  The program 
        will catch serious errors and ask you to try again.  To access this 
        pool again later, you will have to enter this same filename when 
        you restart the program. 

           Examples of pool filenames:         WEEK2    COLLEGE    NFL10
        The purpose of the filename is to identify the data stored for this
        pool and distinguish it from data stored for other pools on the same
        disk, so use something descriptive.


        GROUP ASSOCIATION

        Use this feature if you want to maintain season long statistics for 
        a regular group of people.  The statistics maintained for each 
        individual are: 
                 > Total pools played        > Winning percentage
                 > Total wins                > Total points scored
                 > Total losses

                                         -6-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                  SETTING UP A POOL


        You must also supply a filename for the group.  Similar to the pool
        filename, it must be a valid DOS filename.  Group files residing on 
        the drive and directory you have selected will appear in a box at 
        the bottom of the screen.  The pool and group data files must 
        reside on the same drive and directory.  After specifying the 
        filename, you will be prompted for the group name.  The name will 
        appear on the group printouts and may be changed later. 

        There are two guidelines for maintaining group statistics that must
        be observed. (See page 17 under Group Statistics for complete 
        information)

        1) You cannot run more than one pool at a time with the same group 
        of people.  The final results of the current pool must be added to 
        this group's statistics before you can begin entering picks for the 
        next pool using this same group. 

        2) All pools run with a given group must use the same scoring
        method.  If the first pool run for the group used confidence points,
        all subsequent pools run with this group must use the confidence 
        points scoring method.  Pools run with a given group may or may not 
        utilize the tiebreaker, and may or may not have the point spread 
        applied.  The only thing that has to be consistent between all 
        pools run with a group is the scoring method. 


        THE MAJOR OPTIONS

        There are three major options that determine how the pool will 
        operate:

        1) Scoring - You have the option to assign confidence points to 
        each game or to score on the basis of wins and losses only. 

        A. Wins and Losses Only - If you select wins and losses only, the 
        winner of the pool will be determined by the greatest number of 
        games picked correctly.  One point is awarded for each correct 
        choice. 
        
        B. Confidence Points - If you select confidence points,  a 
        confidence number (from one to the number of games in the pool) 
        must be assigned by the participant to each game in addition to 
        picking the winner.  If the team selected wins, you receive the 
        number of confidence points assigned. 
        
        The winner of the pool is the person who gets the most points.  
        Regardless which method is selected, tie games lose.

                                         -7-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                  SETTING UP A POOL

        2) Tiebreaker.  The tiebreaker is used to break ties in total 
        points scored to determine the standings.  A participant who's 
        tiebreaker pick is closest to the tiebreaker result (whether above 
        or below) will be placed ahead of other participants he's tied 
        with.  Most commonly, people use the total points scored in the 
        Monday night game.  It can also be total yards rushing for a given 
        team or even the number of penalty yards assessed.  The only 
        restriction is that it be an integer from 0 to 999.  At this point, 
        you only need to indicate whether or not a tiebreaker is to be used 
        in this pool.  You will be prompted for a text description of what 
        the tiebreaker is when you furnish the Preliminary Information in 
        the next section. 

        3) Pointspread.  Select Point Spread Applied if you want the 
        "winners" of each game to be determined by applying the pointspread 
        to the score.  You will be prompted for the line on each team later 
        from the Main Menu.  When the pool is scored this way, participants 
        will receive points for teams they select that cover the 
        pointspread, whether or not that team actually wins the game.  
        There is also the possibility that neither team in a game covers, 
        so all points are lost. 


        PRELIMINARY INFORMATION

        1) Pool Title.  A 39 character text description of the pool. It 
        will be printed on all the documentation (picksheet, spreadsheet, 
        and standings) to uniquely identify this pool.  Don't confuse the 
        title with the pool filename. 

          Examples of          XYZ Corp. Football Pool  Week #4
          Pool Titles:         Kelly's Bar  College Pool - Week 2
                               The 1988 College Bowl Season Pool

        2) Date.  Date that most games are played, most commonly Sunday for 
        NFL pools and Saturday for college pools.  For a bowl season pool, 
        January 1 would probably be used.  There is a limit of 18 
        characters for the date. 

        3) Number of games in the pool.  There can be from 2 to 18 games in 
        a pool.  Remember to enter the number of games to be played and not 
        the number of teams involved. 

         
        
        
        
        
         
                                         -8-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                  SETTING UP A POOL


        4) NFL Team Preload feature.  This feature saves you from 
        repeatedly entering the NFL teams and their abbreviations for every 
        game in the pool each week.  You will be prompted for the number of 
        NFL games to include.  Beginning in 1990, each team has one open 
        date so there will be several weeks when less than 14 games are 
        played.  The preload feature now enables you to load any number of 
        NFL games.  Later you will be presented with a screen listing all 
        NFL teams. (See Defining the Games below)  All you will have to do 
        is match up the opponents for each game.  You may also include 
        college or high school games in addition to the NFL games up to a
        maximum of 18.

        5) Picksheet Note.  This is an optional note that will appear on 
        the heading of the Picksheet which is distributed to participants 
        to indicate their selections for this week's pool.  It is intended 
        to give information specific to this to this pool and can be up to 
        78 characters long.  If you don't want to include a note, just 
        press enter.  You can add or edit this note later under Custom 
        Notes and Color Preferences (see page 16).
        Examples:
               All sheets must be turned in to Jim by 12-11-88. Good Luck!
               Picks due 9-21 @ noon.  Congrats to last winner Sue Wille.


        6) Tiebreaker Description.  Enter a description of the tiebreaker.  
        This item will appear only if you previously decided to include a 
        tiebreaker in the pool under the major options selection.
        Examples: 
               Total points, Bears vs Rams on Monday night. 
               Total rushing yards for San Francisco. 


        7) Defining the Games
                
        A. With the NFL Team Preload Feature Selected
        
        After the Preliminary Information has been entered, you will be 
        presented with a screen listing all NFL teams.  All you have to do 
        is indicate who the home and visiting teams are for each game.  Do 
        this by first entering the team number of the visiting team, then 
        the team number of its opponent.  Continue this process until all 
        games for the week have been defined.  Once all NFL games have been 
        defined, you will be presented with the Input Teams and 
        Abbreviations screen (described below).  You may then edit any team 
        or abbreviation and, if there are more than the NFL games in the 
        pool, enter teams competing in the remaining games. 


                                         -9-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                  SETTING UP A POOL


        B. NFL Team Preload not used 

        After the Preliminary Information has been entered, the Input Teams 
        and Abbreviations screen will appear.  On this screen, you will be 
        prompted for the teams in each game.  You will also be asked for an 
        abbreviation of each team.  The abbreviation is used for the team 
        heading on the spreadsheet and on the "What If" standings listing.

        TEAMS  The cursor is first positioned under the Visiting Team 
        column.  Enter the name of the visiting team for the first game in 
        the pool.  The team name may be up to 15 characters long. 
             
        ABBREVIATIONS  Now the cursor is positioned under the left 
        abbreviation column.  Enter up to a 6 letter abbreviation of the 
        Visiting Team.
        

             Example:   ILLINOIS    ILLINI    vs      ALABAMA       BAMA
                        MICHIGAN    MICH      vs      OHIO STATE    OHIOST
                        CHICAGO     BEARS     vs      LOS ANGELES   RAIDER
        

        Press the backspace, left, up, or down arrow keys or ESC to make 
        corrections.  Use Alt-C to clear a field.  Once you have entered 
        the teams and abbreviations for the last game in the pool, you have 
        another opportunity to correct any mistakes.  To correct a mistake, 
        enter N in response to the question: "Is this correct?"  If 
        everything is correct, enter Y.  All Major Option data and 
        Preliminary Information is written to disk and program control is 
        transferred to the Main Menu. 


















                                        -10-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                          SECTION II  --  RUNNING THE POOL
                                    THE MAIN MENU

        PRINT PICKSHEET 

        The Picksheet is distributed to each participant for them to 
        indicate their picks for this week's pool.  The Picksheet indicates 
        which teams are home and visiting, and contains short instructions 
        on how the pool works.  The instructions are customized to the 
        type of pool being run as selected earlier under Major Options.  
        The Picksheet Note you entered with the other Preliminary 
        Information will be printed near the top.  If you need to add or 
        modify this note, select "Custom Notes and Color Preferences" from 
        the Main Menu. 

        If you elected to score by confidence points, a blank is provided 
        to indicate the confidence points for each game.  Be sure 
        participants don't confuse the team numbers with the confidence 
        number.  The team number has been placed on the Picksheet to make 
        data entry easier. 

        If you elected to have the winners determined by applying the point 
        spread, you may optionally print the point spread for each team on 
        the Picksheet.  You must first enter the line for each team. (See 
        page 14).  If you need to distribute the Picksheets before the 
        pointspread has been published, you can print the picksheet without 
        it. 

        Before printing, be sure your printer is properly set up and on 
        line.  Then enter the number of copies you want printed. To 
        interrupt printing, press Funct. 5 and you'll be returned to the 
        Main Menu. 



        NOTE:  [THIS APPLIES TO ALL PRINTED REPORTS]

        If your printer is off line or runs out of paper, the program will 
        pause for about 50 seconds for you to correct the problem.  After 
        that, an error message will be displayed and you can try printing 
        the report again.  While the program is waiting, the Funct. 5 key 
        will not interrupt and return control to the previous menu.  This 
        key is only effective while the report is printing.








                                        -11-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                    THE MAIN MENU



        ENTER NAMES and PICKS

        Step 1. Enter the Name

        A. Pools not associated with a group or the first pool with a group

        Enter the participant's name as prompted near the middle of
        the screen.  Please limit the name length to 20 characters and
        spaces.  Proceed to Step 2, Enter the Tiebreaker.

        B. Second or subsequent pools associated with a group

        First, you have the option to enter picks for a person already in 
        the group or add a new person to this pool that hasn't been in a 
        pool with this group before.  Use the arrow keys to highlight your 
        selection and press enter.

        If you elect to enter picks for an individual who participated in 
        an earlier pool, you will be presented with a screen listing all 
        people in this group.  Use the arrow keys to highlight your 
        selection and press enter.  There will be up to 44 names displayed 
        on the first screen.  If the individual you're looking for isn't on 
        the first screen, press END to highlight  ++Display More Names++ 
        then press enter and 44 more names will be displayed to select 
        from. Once you have entered this person's picks, his/her name will 
        be removed from the list.  This prevents you from inadvertently 
        entering picks for the same person twice.  It also serves to 
        indicate which group members have not had their picks entered into 
        this week's pool. 

        If you elect to add a new person, you will be prompted for his/her 
        name near the middle of the screen.  The Pool Manager checks new 
        names against everyone in the group.  A message will appear if you 
        try to enter a new participant with EXACTLY the same name as a 
        current group member.  Capitalization and spaces must be exactly 
        the same for the program to catch this error.  For example, 
        Bob jones is not the same as Bob Jones. 


        Step 2. Enter the Tiebreaker (if applicable)

        If you decided to include a tiebreaker to break ties in the 
        standings, you will now be prompted to enter the participant's 
        tiebreaker pick.  If the pool is not using a tiebreaker, this 
        prompt will not appear and you will be taken immediately to the 
        screen for entering picks on the games, Step 3. 

                                        -12-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                    THE MAIN MENU


        Step 3. Enter Picks on Games

        This screen lists all games in the pool and the number that The 
        Pool Manager has assigned to each team.  The team numbers are the 
        same as those listed on the picksheet to make data entry easier. 

        1. Enter the team number of the team selected to win the first 
        game.  The team name will be printed for confirmation under the 
        TEAM heading. 

        2a. If the pool is scored with Confidence Points, the cursor should 
        now be under the CONFIDENCE # heading.  Enter the confidence number 
        assigned to the team that you just entered.

        2b. If you elected to score by Wins and Losses only, there will be 
        no CONFIDENCE # column and the cursor will be positioned under
        the next TEAM # column.  Enter the team number of the team chosen 
        to win the second game.

        3. Repeat this process until the chosen winning teams and their 
        confidence numbers (if applicable) have been entered for all games 
        in the pool.  The teams can be entered in any order and do not have 
        to be entered in the order printed on the picksheet. 

             EXAMPLE: (for Confidence Point pool)

             TEAM #      TEAM   CONFIDENCE #   TEAM #     TEAM    CONFIDENCE #
                                             |
               1        DePAUL       6       |    4      VALPARAISO   15
               5        ROSARY       7       |    7      CONCORDIA     9
               9        GEORGIA      4       |   12      PITT          2

        If you attempt to enter the same team number twice, try to use the 
        same confidence number twice, or make other common mistakes, The 
        Pool Manager will catch your error.  A message will describe the 
        problem, and you will be able to retry the entry. This feature is 
        helpful in finding errors that participants have made in their 
        choices.  Better now than on Sunday afternoon!  To make 
        corrections, press ESC and then ENTER until you reach the field 
        that needs to be revised. 

        After all picks have been entered, you will be asked "Is this 
        correct?"  If you answer Y, the name and picks will be stored on the 
        disk and you have the opportunity to enter another participant's 
        name and picks.  There is no facility for changing the picks after 
        they have been stored on the disk. 


                                        -13-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                    THE MAIN MENU


        PRINT INDIVIDUAL PICKS

        This report lists the pool name, the date, the participant's name, 
        the teams selected to win, and their confidence numbers (if used).  
        Use the arrow keys to highlight the participant whose picks you 
        want to print.  If the person you're interested in is not 
        displayed, press END to highlight  ++Display More Names++  then 
        enter and another screen of names will be displayed to select from.  
        The first 44 persons entered are displayed on the first screen and 
        the remainder on following screens.  After the report is printed, 
        control is returned to the Main Menu. 


        ENTER POINT SPREAD

        If you elected to apply the pointspread to determine the winner of 
        the games, use this menu selection to enter the line.  You must 
        enter the line for each team.  The line must be entered prior to 
        printing the Picksheet if you want it to appear on the Picksheet.  
        Whichever team beats the opposition after adding that team's line 
        to its actual score (not the opponent's score) is considered the 
        winner.  Online help is available from this screen by pressing F1 
        which summarizes the following information. 

        What you enter for each team depends on on how the line on the game 
        is expressed.  Examples of the three basic methods are presented 
        below.

        1)           Favorite         Points         Underdog

                     Chicago            3            Green Bay

        When the line is expressed this way, enter -3 for Chicago and +3 
        for Green Bay. 
        Scoring:  For Chicago to cover, they must actually beat Green Bay 
        by 4 or more points.  For Green Bay to cover, they must beat 
        Chicago or lose to them by 2 points or less.  If Chicago wins by 3 
        neither team covers and all points on this game are lost. 

        2)           Favorite         Points         Underdog

                     Cincinnati      Pick 'em        San Francisco

        When the line is expressed this way, enter 0 for Cincinnati and 0 
        for San Francisco.
        Scoring:  Whichever team actually wins the game will cover.  If the 
        game ends in a tie, neither team covers. 

                                        -14-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                    THE MAIN MENU


        Enter Point Spread (Continued)

        3)          Seattle  -7            New England  +6

        When the line is expressed this way, enter -7 for Seattle and +6 
        for New England.  This is the usual format of the weekly parley 
        card.
        Scoring:  For Seattle to cover, they must beat New England by 8 or 
        more points.  For New England to cover, they must beat Seattle or 
        lose by 5 points or less. 

        Remember, if the score is a tie after being adjusted by the 
        pointspread, that team does not cover.


        ENTER PRIZES AND SPREADSHEET NOTE

        There are two 78 character text fields that appear on the heading 
        of the spreadsheet.  The prize field is printed immediately below 
        the spreadsheet note.  These notes are intended for general and 
        prize information specific to this pool -- similar to the Picksheet 
        Note.  This information will be stored and can be edited later. 

        Examples:

         Party begins at noon Sunday - 405 Washington.  Admission: 6-pack
         First: $50.00   Second: $20.00  Third: $10.00   Last: $2.00

         Picks due Wed. (Thu game) Include $1.00 to pay for this software
         First: $35.00   Best Winning Percentage: $10.00

        Both of these fields are optional.  They will be left blank if no 
        information is entered.

        CUSTOM NOTES AND COLOR PREFERENCES

        You can modify four custom notes and the display colors with this 
        feature.  Use the arrow keys to highlight your selection and press 
        ENTER.  You can use INS, DEL, Backspace and the right & left arrow 
        keys for editing.  Use ALT-C to clear a field completely.  

        1) Pool Title - The current title is displayed. You may edit it or 
        enter a new one.  If you decide to leave the title unchanged, press 
        ESC. 

        2) Pool Date -  The current date is displayed.  You may edit it or 
        enter a new one. if you decide to leave the date unchanged, press 
        ESC. 
                                        -15-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                    THE MAIN MENU


        3) Picksheet Note - The current Picksheet Note is displayed.  You 
        may edit it or enter a new one. If you decide to leave the note 
        unchanged, press ESC. 

        4) Change Display Colors - You can specify different colors for the 
        foreground and the background for Primary and Highlight colors.  
        Primary colors are used for all screens.  The emphasis foreground 
        color is used with the same background to emphasize specific data.  
        The foreground is the color of the characters.  Highlight colors are 
        used for message boxes, data entry and menu selections.  Highlight 
        colors should provide good contrast with Primary colors. 

        The color number currently in use is filled in.  Select the color 
        you would like to use from the list on the right and enter its 
        number.  The allowable values for each are indicated in the Range 
        column.  The program will not allow you to specify the same color 
        for both the foreground and background.  This would make the 
        character invisible. 

        The colors used by The Pool Manager are determined by the content 
        of a file called DISCOLOR.  Once you have changed colors, this file 
        is rewritten, and the revised colors will be used until you change 
        them again. 

        5) Return to Main Menu 


        GROUP STATISTICS

        The group statistics feature allows you to accumulate individual 
        performance results from each week's pool as the season progresses.  
        All you have to do to accomplish this is specify the same group 
        filename when setting up each subsequent pool, then add the results 
        of each pool to this group's statistics when the pool is complete. 

        Group standings can be printed any time after the results of the 
        first pool have been added.  Participants are listed in the order 
        of most points scored.  There is no tiebreaker applied to the 
        Group Standings even though it may have been applied in the pool.  
        Statistics maintained are the number of pools each person has 
        participated in, the person's overall won/lost record and winning 
        percentage.  To provide maximum flexibility, this data can be 
        exported to a comma delimited ASCII file which can be imported into 
        your spreadsheet or database program for further manipulation. 




                                        -16-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                    THE MAIN MENU


        Another advantage to maintaining group statistics is eliminating 
        the need to enter every participant's name each week.  When 
        entering picks, just select the individual's name whose picks you 
        want to input from a list of people in the group. 

        Rules for maintaining group statistics:

        1) Only one pool can be run at a time with a given group file.

        The current pool must be completed and its results added to group 
        statistics before any picks can be entered on subsequent pools 
        using this group file.  Several pools can be set up with Major 
        Options and Preliminary Information in advance, but individual's 
        picks cannot be entered until the results of the prior pool have 
        been added to group statistics.

        2) All pools run with a given group file must use the same scoring 
        method. 
        
        If the first pool run with a particular group file utilizes 
        confidence points for scoring, all subsequent pools using that 
        group file must score with confidence points.  If the first pool 
        run with a particular group file is scored by wins and losses only, 
        all subsequent pools using that group file must score with wins and 
        losses only. 

        3) There are no other limitations.  Subsequent pools run with the 
        same group may have different numbers of games, may or may not 
        utilize the tiebreaker, and may or may not have the point spread 
        applied.  These features can be used in any combination in pools 
        from week to week as long as the scoring method remains the same. 

        Selecting Group Statistics from the Main Menu presents you with the 
        following choices:

        1) Group Listing Note - Similar to the Picksheet, Spreadsheet and 
        Prize Notes, this is an optional 78 character text field.  It 
        appears in the heading of the Group Standings report. 

        Examples:   Jaycees Football Pool Standings through Week #4
                    XYZ Corp. Baseball Pool standings through July 11

        Unlike the other notes, however, the Group Listing Note is not 
        stored on disk.  It remains in memory only as long as you're 
        working with this particular pool.  The assumption is that group 
        statistics will be printed infrequently and the note will probably 
        be different each time the results are printed. 

                                        -17-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                    THE MAIN MENU


        2) Print Group Standings - Prints the statistics on all participants
        in the group sorted by most points scored.  This selection will 
        not operate until the results of at least one pool has been added. 

        3) Edit Group Name - Use this selection to modify the group name 
        you assigned when initially setting up the group under Major 
        Options Selection.  Press ESC if you change your mind and want the 
        group name to remain unchanged. 

        4) Add this Pool to Group Statistics - Use this selection when the 
        results of all games have been entered and the pool is complete.  
        Be sure all results entered are correct, because there is no 
        recovery if inaccurate data is added to group statistics.  
        Suggestion:  First print the Results of Games Played and verify 
        that it's accurate.  Once you have added this pool to group 
        statistics, you may enter names and picks in the next week's pool 
        using this same group file.  This selection will not operate until 
        the results of all games in the pool have been entered. 

        5) Export Group Statistics to an ASCII File - This selection writes 
        the group standings information to a comma delimited ASCII file.  
        This enables you to import this data into a spreadsheet or database 
        to further arrange and sort to your specific needs.  Also included 
        is each person's permanent ID number for the group.  The ID numbers 
        begin with 3.  The name of the file written will be the group 
        filename with an ASC extension.  For example, if the group filename 
        is LEGION, the ASCII file will be LEGION.ASC  It will be written to 
        the same drive and directory that the pool and group data files are 
        on.  WARNING: Since the filename will always be the same for a 
        given group, be aware if you exported this group file earlier, it 
        will subsequently be overwritten. 

        6) Return to Main Menu


        BACK UP CURRENT POOL DATA FILES

        This selection will make backup copies of the current pool data 
        files.  You need to assign a filename which can be any valid DOS 
        filename but should be something descriptive such as WK2BU  You 
        cannot use the current pool filename for the backup.  Optionally, 
        you may specify a path along with the filename if you want the data 
        backed up to a different drive or directory.  If you don't specify 
        a path, the files will be backed up to the data drive and directory 
        currently in use.  For Example:
        WK2BU          Data will be written to the current data drive & dir.
        B:\WK2BU       Data will be written to Drive B
        C:\DATA\WK2BU  Data will be written to the data subdirectory on Drive C
                                        -18-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                    THE MAIN MENU


        Back up Pool Data Files, continued

        If the pool is associated with a group, the group data file will 
        also be backed up.  Its filename will be changed to add a tilde (~) 
        as the last character in the filename.  This is done to ensure that 
        a backed up pool has an up to date companion group file with it in 
        the event the backup is required. 

        If you attempt to use the filename of a pool that already exists, 
        you will be warned and given the opportunity to overwrite it or to 
        go back and change the filename you assigned.

        PRINT PICK SUMMARY SPREADSHEET

        The Spreadsheet lists abbreviations of all the teams across the top 
        of the page and the names of the participants down the left side.  
        Each participant's picks, including the tiebreaker if applicable, 
        are shown across from his/her name under the teams selected to win. 

        As soon as you enter the number of copies desired, printing will 
        begin.  To interrupt printing, press FUNCT. 5 and you will be 
        returned to the Main Menu. 


        UPDATE ACTUAL RESULTS

        Use this selection to enter the results of completed games and the 
        result of the pool tiebreaker, if applicable.  If a tiebreaker is 
        included, you will be presented with the choice of entering the 
        tiebreaker result or the result of a game.  Use the arrow keys to 
        highlight your selection and press enter.  This menu will not 
        appear if the tiebreaker is not included. 

        Tiebreaker Result - Enter the number of the tiebreaker result when 
        prompted. (Total Points, total yards, etc.)  If you make a mistake, 
        you may return and change it later. 

        Game Result - You will be prompted for the number of the winning 
        team.  Once you enter the winning team number, the winning and 
        losing teams are displayed for confirmation.  If the result was a 
        tie, enter either team number (It doesn't matter which one).  The 
        Pool Manager's error detection routines will catch and allow you to 
        correct the following mistakes: 

            A) Entering the same winning team twice.
            B) Entering the opponent of a team that was previously entered
               as a winner.

                                        -19-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                    THE MAIN MENU


        Update Actual Results (Continued)

        In either case, you can change the result of a game previously 
        entered if that's where the problem is.  See the section below 
        entitled Changing Results of Games Previously Entered. 
        In response to the question   Is this Correct?  Y/N/Tie :   

        1) If you have selected the correct winning team number enter  Y
        2) If the team number you have selected is incorrect, enter  N 
        3) If the game was tied, enter TIE.

        If the pointspread is applied to determine winners for this pool, 
        you will now be prompted to enter each team's score.  Be sure these 
        numbers are accurate because the calculations to determine which 
        team covers the spread will be determined by the number of points 
        scored by each, not by which team was indicated as the "winner." 

        To correct a mistake, press ESC at any point in this process. After 
        storing the data, you are offered the opportunity to enter the 
        results of another game.  Answer  Y  if you have additional final 
        results to enter or  N  to be returned to the Main Menu. 

        CHANGING RESULTS of GAMES PREVIOUSLY ENTERED - If you already 
        entered the results of the Chicago-Minnesota game, for example, and 
        want to change those results, use the following procedure:

        1) Select Update Actual Results from the Main Menu.  When prompted 
        for the winning team number, enter either Chicago's or Minnesota's 
        number.
        2) You will be notified that the result of this game has already 
        been entered.  Answer  Y  in response to the prompt ""Do you want 
        to change the results of this game?" 
        3) Enter the correct outcome of the game.


        PRINT RESULTS of GAMES COMPLETED

        The winning and losing teams in each game will be indicated.  Games 
        resulting in a tie will also be identified.  If the pointspread is 
        applied to determine the winners, the pointspread and whether or 
        not each team covered will be indicated.

        Before printing, be sure your printer is properly set and on line. 
        Then press any key to begin printing.  To interrupt printing, press 
        Funct. 5 and you will be returned to the Main Menu. Similar to the 
        Print Current Standings selection, this feature will not operate 
        unless the result of at least one game has been entered. 

                                        -20-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                    THE MAIN MENU


        CURRENT STANDINGS

        You are offered the choice of printing the standings or displaying 
        them on the screen.  Use the arrow keys to highlight your 
        selection, then press enter. 

        The standings can be sorted by the total points scored so far or by 
        the best possible score.  Sorting by best possible score 
        essentially arranges participants from fewest points lost to most 
        points lost.  This method of sorting is meaningful when less than 
        all the games in the pool have been completed.  If all games have 
        been completed, both methods of sorting will yield the same 
        results. 

        The standings will reflect the results of all games entered so far. 
        The number of games completed will be shown in the heading, both on 
        the screen and printed output.  Once all games in the pool have had 
        their results entered, the heading will indicate FINAL STANDINGS. 

        To interrupt printing, press FUNCT. 5  and you will be returned to 
        the Main Menu.  Similar to the Print Results of Games Completed 
        selection this feature will not operate until the actual result of 
        at least one game has been entered. 


        CALCULATE "WHAT IF" SCENARIO

        This feature enables you to determine what the standings would be 
        "IF" a certain team or teams were to win.  All you have to do is 
        indicate the team number of the "winning" team.  If the pointspread 
        is applied, you will need to guess at the final score.  After 
        selecting the sorting method, indicate whether you want to see the 
        `what if' standings displayed on the screen or have them printed. 
        (See Current Standings for details on sorting)  You can include as 
        many games in the scenario as you want up to the number remaining 
        in the pool.  If you print (rather than display) the standings, the 
        teams you chose as "winners" in the scenario will be printed on the 
        heading. 

        This feature is very popular at parties because individuals can 
        anticipate what the standings would be if their team wins.  
        Calculation of theoretical results and standings has no effect on 
        the actual results and will not be stored on the disk.  The Pool 
        Manager forgets the `what if' results as soon as they are printed 
        or displayed, so there is no limit to the number of times that this 
        feature can be used. 


                                        -21-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                    THE MAIN MENU


        SWITCH to ANOTHER POOL

        You are returned to the initial screen to specify the drive and 
        directory for pool data.  The current pool is cleared from memory. 
        Confirm the drive and directory, then enter the filename of another 
        pool.  This feature eliminates the need to reload the program if 
        you want to switch pools.  It's especially useful when you are 
        loading the initial information for several pools at one session. 


        EXIT the PROGRAM

        You are returned to DOS in the drive and directory from which you 
        began the program.  All data is saved. 




                             SECTION III  --  SHAREWARE


        DEFINITION OF SHAREWARE

        Shareware distribution gives users a chance to try software before 
        buying it.  If you try a Shareware program and continue using it, 
        you are expected to register.  Shareware is a distribution method, 
        not a type of software.  You should find software that suits your 
        needs and pocketbook, whether it's commercial or Shareware.  The 
        Shareware system makes fitting your needs easier, because you can 
        try before you buy.  Because the overhead is low, prices are low 
        also.  Shareware has the ultimate money-back guarantee -- if you 
        don't use the product, you don't buy it.  Individual programs 
        differ on details -- some request registration while others require 
        it, some specify a maximum trial period.  With registration, you 
        get anything from the simple right to continue using the software 
        to an updated program with printed manual. 

        Copyright laws apply to both Shareware and commercial software, and 
        the copyright holder retains all rights, with a few specific 
        exceptions as stated below.  Shareware authors are accomplished 
        programmers, just like commercial authors, and the programs are of 
        comparable quality. (In both cases, there are good programs and bad 
        ones!)  The main difference is in the method of distribution.  The 
        author specifically grants the right to copy and distribute the 
        software.

        

                                        -22-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                      SHAREWARE

        DISCLAIMER - AGREEMENT

        Users of The Pool Manager must accept this disclaimer of warranty: 
        "The Pool Manager is supplied as is.  The author disclaims all 
        warranties, expressed or implied, including, without limitation, 
        the warranties of merchantability and of fitness for any purpose. 
        The author assumes no liability for damages, direct or 
        consequential, which may result from the use of The Pool Manager." 

        The Pool Manager is a shareware program and is provided at no 
        charge to the user for evaluation.  Feel free to share it with your 
        friends, but please do not give it away altered or as part of 
        another system.  The essence of User Supported software is to 
        provide personal computer users with quality software without high 
        prices, and yet to provide incentive for programmers to continue to 
        develop new products.  If you find that you are using The Pool 
        Manager, you must make a registration payment of $25 to American 
        Systems.  The $25 registration fee will license one copy for use on 
        any one computer at any one time.  Other benefits of registration 
        are described below.  You must treat this software just like a 
        book.  An example is that this software may be used by any number 
        of people and may be freely moved from one computer location to 
        another, so long as there is no possibility of it being used at one 
        location while it's being used at another. 

        Anyone distributing The Pool Manager for any kind of remuneration 
        must first contact American Systems at the address below for 
        authorization.  This authorization will be automatically granted to 
        distributors recognized by the (ASP) as adhering to its guidelines 
        for shareware distributors, and such distributors may begin 
        offering The Pool Manager immediately (However American Systems 
        must still be advised so that the distributor can be kept up-to-
        date with the latest version of The Pool Manager).  Whether you 
        register or not, you are encouraged to copy this program within the 
        terms of the Restrictions described below. 

        RESTRICTIONS ON COPYING - Individuals are granted permission by the
        author to copy The Pool Manager (tm) for their own use or for others
        to evaluate as long as:
          1. It is copied in its entirety. (All four files: README,
             POOLMGR.DOC, NFLPOOL.EXE, and REGFORM)
          2. The program and documentation are not altered in any way.
          3. No price or other consideration is charged. The Pool Manager
             may not be included as part of any "package" that is sold.  The
             distribution charge or media charge levied by computer clubs or
             commercial disk vendors may not exceed $8.00.
          4. The printed material may not be copied without express written
             permission from the author.

                                        -23-




                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                      SHAREWARE

        REGISTRATION of THE POOL MANAGER

        If you find this program to be useful, purchase it.  The price is 
        $25.  Registration is particularly easy if you split the cost among 
        the regular participants in the pool.  Providing software would be 
        a considerate gesture to the individual who has volunteered 
        personal time to run the pool. 
        To print the registration form, place your backup disk in the A 
        drive and enter the following in response to the A>
                              COPY REGFORM PRN
        Complete the Registration Form and mail it with $25 to American
        Systems at the following address:
                                          Andy Kunz
                                          American Systems
                                          Post Office Box 604
                                          LaGrange, Illinois  60525-0604

        Registration entitles you to the following benefits:

        + A disk with the latest version of the program and User's Guide.

        + A disk with the SQRPool print utility and the entire current 
          season's NFL schedule set up in weekly pools.  (Schedules for
          subsequent years are available to registered users only for $8.)  
          SQRPool is described on the next page.

        + A semi-annual newsletter (issued before and after the football
          season) for three years to keep you informed of program 
          improvements, and tips from other users.

        + Ability to influence the development of this program.  You may
          voice your opinions when you register and anytime thereafter.

        + Availability of updates free or at nominal cost.  Registered 
          users may obtain updates for free by sending American Systems a
          blank, formatted diskette with a self addressed, prepaid mailer.
          If you prefer, an update can be mailed to you for $8.

        + Direct user support via Compuserve or the mail for specific
          problems that you encounter.

        + Immediate notification of any bugs discovered in the program with
          recommended corrective action.  It is important to complete the
          information on your equipment (requested on the Registration Form)
          in the event that any equipment specific bugs are discovered.

        Evaluation copies of the program are available from American 
        Systems for $8, which will be credited toward contribution. 

                                        -24-


                

                                 THE POOL MANAGER (tm)
                                     USER'S GUIDE

                                      SHAREWARE


        SQRPool - Provided only to registered users of The Pool Manager

        SQRPool is a print utility that produces grids for running square 
        pools.  If you are running a season-long pool, odds are you are 
        also called on to run a square pool for the conference playoffs in 
        basketball, baseball, and football as well as the World Series and 
        Super Bowl.  SQRPool prints 10X10 grids with one, two, or four 
        score rows and 5X5 grids with two or four score rows.  This offers 
        you the opportunity to introduce some new pools and saves the 
        hassle of making up a grid at the last minute.

        SQRPool is an exclusive benefit to registered users of The Pool 
        Manager.  You are specifically requested not to duplicate (except 
        for backup) or distribute it to anyone. 



        THE ASP OMBUDSMAN

        This program is produced by a member of the Association of 
        Shareware Professionals (ASP).  ASP wants to make sure that the 
        shareware principle works for you.  If you are unable to resolve a 
        shareware-related problem with an ASP member by contacting the 
        member directly, ASP may be able to help.  The ASP Ombudsman can 
        help you resolve a dispute or problem with an ASP member, but does 
        not provide technical support for members' products.  Please write 
        to the ASP Ombudsman at P.O. Box 5786, Bellevue, WA 98006 or send a 
        Compuserve message via easyplex to ASP Ombudsman 70007,3536. 



                                  REGISTRATION FORM

                     The Pool Manager(tm), Version 2.0 (Form D)
                                 American Systems
                               Post Office Box 604 
                         LaGrange, Illinois  60525-0604

                                                     Date__________________
      Name ____________________________________
                                                    Do you want to receive
      Address _________________________________     the Newsletter?  _____

      City, State _____________________________     Zip __________________


           Enclosed is the $25 Registration Fee.  Please send me the latest
      version of The Pool Manager, the SQRPool print utility, and this
      season's NFL schedule set up on disk.
           Please complete the following information.  It is needed to
      continue to improve this program to better meet the user's needs.  The
      hardware information is important in the event any equipment specific
      bugs are discovered in the program.

      HARDWARE
      Computer make/model:______________________________________   RAM:_______

      Chip: __ 8086   __ 8088  __ 80286  __ 80386  __ 80386SX   Speed:______Hz

      Disk Drives/sizes _______________ Display Make/Model____________________
      Display Type: __ MONO   __ HERC   __ CGA   __ EGA   __ VGA

      PROGRAM
      Check the major options for the type of pool you normally run:

             Scoring           Establishing Standings      Determining Winners
             -------           ----------------------      -------------------
     __ Confidence Points     __ Without Tiebreaker     __ Without Point Spread
     __ Wins & Losses Only    __ Tiebreaker Included    __ Point Spread Applied

      Average No. of people in a weekly pool ____   Total people in Group ____

      How would you rate the overall performance of The Pool Manager?
      Excellent   __10  __9  __8  __7  __6  __5  __4  __3  __2  __1  Poor

      What inconveniences or problems do you have with the program? __________

      ________________________________________________________________________

      What improvements would you like to see? _______________________________

      ________________________________________________________________________

      Where did you get your copy of The Pool Manager?

      Source:_______________________  Address: _______________________________

      If purchased on a Shareware disk, what was the cost? ________________

```
{% endraw %}

## README.DOC

{% raw %}
```
        
                         The Pool Manager (tm) Ver 2.0
                     A Sports Pool Organizer and Database
                                by  Andy Kunz                                   
                Member, Association of Shareware Professionals
                    Copyright 1985, 1988, 1990 by Andy Kunz

                              American Systems
                             Post Office Box 604
                           LaGrange, IL 60525-0604
        
        Whether it's the featured event at a private party or the regular 
        office pool, this program eliminates all the tedious work.  All you 
        need to do is enter the basic information and results; THE POOL 
        MANAGER handles everything else.  It has complete flexibility to 
        handle any combination of college and pro games - up to 18 games 
        and 120 participants in a single pool.  All NFL teams are already 
        stored in the program; just indicate the opponents.  Version 2.0 
        now enables you to optionally maintain season long standings for up 
        to 140 people, utilize a tiebreaker, and determine winning teams by 
        applying the point spread.  THE POOL MANAGER has over 22 pages of 
        clearly written documentation that describe each feature of the 
        program, complete with examples of how to use it. 
                                                              
        The following four files constitute The Pool Manager (tm):
        README   DOC   General information and initialization instructions   
        POOLMGR  DOC   Complete documentation for operating The Pool Manager
        NFLPOOL  EXE   The Pool Manager Program
        REGFORM        Registration form
          
        These four files contain the entire program and totally complete 
        documentation.  Nothing has been withheld pending registration as 
        you may find with shareware authors who are not members of the 
        Association of Shareware Professionals.  This program is complete 
        for your evaluation.  If you do find it useful, purchase it.  The 
        registration is $25. 

         To begin using The Pool Manager, perform the following steps:
        1. Make a backup copy of The Pool Manager distribution disk (using
           the DOS diskcopy command) and put the original in a safe place.
                                                              
        2. Print out the documentation by following these steps:
                A.  Put your backup disk into the "A" drive.
                B.  Set your printer to top of form.               
                C.  Be sure you have adequate paper ready.  The User's      
                    Guide is over 22 pages long.
                D.  In response to the  A>  enter the following:
                        COPY POOLMGR.DOC PRN
           Margins have been set to enable you to bind this User's Guide in  
           a three ring or report folder.  
         
        3. Create a working disk:
                        A.  Format a disk using the /S option.
                        B.  Copy NFLPOOL.EXE onto this disk. 
                                                                      
        4. Start the program by entering: NFLPOOL  with your Working Disk in 
           the "A" drive.  Please take time to read through the User's Guide 
           before running your first pool.  Good Luck!
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0882

     Volume in drive A has no label
     Directory of A:\

    README   DOC      3498   8-05-90   1:53a
    POOLMGR  DOC     76740   8-05-90   1:53a
    NFLPOOL  EXE    174846   8-05-90   1:53a
    REGFORM           2635   8-05-90   1:53a
    GO       TXT       652   1-01-80   7:26a
    FILE0882 TXT      2295   8-30-90   3:32p
    GO       BAT        38  10-19-87   3:56p
            7 file(s)     260704 bytes
                           58368 bytes free
