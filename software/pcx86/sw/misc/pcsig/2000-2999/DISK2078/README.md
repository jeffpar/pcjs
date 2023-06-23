---
layout: page
title: "PC-SIG Diskette Library (Disk #2078)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2078/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2078"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FANTASY SPORTS DRAFTER"

    What is more fun than collecting and trading baseball cards;
    permits you to rub elbows with owners, starters and free agents;
    provides you the opportunity to compete against other players; and,
    doesn't stick to most dental work? It's Fantasy Leagues!
    
    FANTASY LEAGUES are springing up across the country, covering baseball,
    football, basketball -- all major league sports.  Developing your
    fantasy team from the real players in the major leagues, you earn points
    depending on how a real player performs during a season.  But how do you
    put your team together?
    
    FANTASY SPORT DRAFTER provides you with a computerized opponent in the
    team draft arena.  You can go up against it as many times as you wish,
    learning the ins and outs of actual fantasy drafting.  When you're
    finished, you'll have assembled your own team from the best of the
    major leagues in that sport.  You'll hardly be able to wait for the
    start of the season.
    
    After you have developed your team, FANTASY SPORT DRAFTER allows you
    to submit your picks to a fantasy sports center to compete in an actual
    drafting contest.  Your team may win the title of Fantasy Team Champion.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FDMANUAL.DOC

{% raw %}
```















                           COUCH COACH FANTASY DRAFT

                                 USER'S MANUAL
















                                 Prepared by:

                          Len Shepard & Allan Schwab

                              November 24, 1989
     





    
      Table of Contents                                    Page

      Introduction.....................................       2
        Compatibility..................................       2
      Contents.........................................       2
      Ways to play Couch Coach Fantasy Draft...........       3
      Installation.....................................       3
      Operation of the Software........................       4
        How to enter, make selections, and exit........       4
        How to move around inside the system...........       4
      Entering a Setup file............................       5
      Changing Player Data.............................       6
      Drafting Fantasy Teams...........................       7
        Choice of Leagues..............................       7
        Naming Each Draft..............................       7
        Draft order....................................       7
        The Drafting Screen............................       7
        The Drafting Process...........................       7
        Adding Free Agents.............................       8
        Review Options.................................       8
        Second Thoughts................................       8
        Potato League Sports picks and logic...........       8
        HELP! Help screen available while drafting.....       9
      Preparing a Diskette for Submission..............      10
      Generate Reports.................................   10-11
      System Utilities.................................      11
        List File Directory............................      11
        Examine Contents of a file (preview report)....      11
        Change Control File Name.......................      11
        Box Outline Color Modification.................      11
      Appendix A - Errors and Corrective Action........      12




      NOTE: Not all instructions contained in this documentation are 
            applicable to the SHAREWARE version of Fantasy Drafter. Some 
            items relate only to the enhanced version of FD, which is 
            available for $19.95 (plus $2.50 S&H) from Potato League Sports. 
            If you have the shareware version, and would like to order the 
            enhanced version, please call Potato League Sports at (800) 537-
            9228. The primary difference between the shareware version and 
            the enhanced version is in the Drafting abilities of the 
            software. The shareware version ONLY allows you to draft on a 
            one-to-one basis against the computer (CONTEST MODE), as opposed 
            to allowing you a number of different options like drafting up 
            to 16 teams (with the computer drafting in any number spots, or 
            none at all), and varying the number of players drafted at each 
            position. Also, you cannot alter the position of a player in the 
            shareware version. However, ALL REPORTS ARE IDENTICAL. 

    
         
     
                                        (1)

    
     INTRODUCTION

     Couch Coach Fantasy Draft, or FD, as we will refer to it in this manual, 
     is a system of computer programs designed to act as your drafting 
     opponent (or opponents) in a simulation of an actual fantasy league 
     draft. A fantasy league is a group of friends who act as owners, general 
     managers, and coaches of fictitious teams comprised of real players.  
     Scoring in a fantasy league is based on the performance of real players 
     in actual contests, with the total score of a fantasy team equal to 
     the sum of the scores of the "starting" players on that team. 

     FD was designed primarily for practice with a free fantasy draft (as 
     opposed to an auction-type draft), which is common to many baseball 
     leagues. If you are about to participate in a "player auction" draft, 
     FD is still very useful, since it contains statistics and information 
     about the players which will give you an idea as to how we value the 
     players. It also allows you to generate a "Bid List", which is a 
     listing of all players, some statistics from the previous year, and OUR 
     Bid Price which is changeable by YOU. This "Bid List" can be invaluable 
     as a reference during your actual fantasy league draft. 
 
     Some of the terms used in this manual are:

     Drafting Pool - Group of fictitious teams composed of real players 
                     where real player scores are accumulated to get 
                     fictitious team scores.
     Fantasy Team  - Fictitious team comprised of real players from a 
                     variety of real teams.
     Round         - Period in which each owner gets a draft choice. The
                     total number of rounds equals the number of players 
                     on each roster.
     Owner         - Owns the fantasy team and is responsible for drafting
                     his/her roster of players, picking starters, etc.
     Starters      - Those real players whose scores count for the fantasy 
                     team in any given period of play.
     Free Agent    - A real player NOT contained in the master player file.
                     FD free agents are not necessarily real free agents. 
     
     Compatibility.
     FD is compatible with 100% IBM-PC compatibles and compatible 
     printers and monitors, including monochrome, color, and EGA/VGA. 
                                         
     CONTENTS 
     
     The Distribution diskette contains:

        MASTER  .???  - the master player file for the current season
        FSD     .EXE  - the main banner program
        F?D*    .EXE  - program modules 
        sportnam.TEM  - a file with the names of the current real teams
        COLORS  .SDP  - a file with default colors for screen boxes
        FSD*    .HLP  - help files called by the program modules
        SAMPLE  .*    - sample files for you to review and test  
        SERIALNU.MBR  - serial number of the diskette

     Neither version of FD is copy protected! Sharing of the Shareware 
     version is encouraged! Sharing of the enhanced version among your 
     drafting group is specifically allowed in the license agreement.


                                        (2)

     WAYS TO PLAY COUCH COACH FANTASY DRAFT

     FD gives you the capability of playing several ways:

       1) CONTEST MODE, which pits you directly against Potato League 
          Sports (PLS) in a 1-on-1 draft. This is also the option 
          required to enter any PLS national drafting contest.
       2) You against a friend. In this case, FD acts as Master of 
          Ceremonies for the draft and Record Keeper for later on. 
       3) You against a friend each picking against PLS. In this manner, 
          FD picks against each of you, and you compare your results 
          against each other throughout the year. PLS can fill in as 
          many spots as you want (up to 16 total).
       4) Your group of up to 16 people. Here again, FD acts as 
          Master of Ceremonies and Record Keeper.
       5) Your group of up to 16 people, with the computer filling in 
          as many vacant spots as you desire.
    
     * Options 2 through 5 are not available in the shareware version of FD.
     

     INSTALLATION

     Backing Up Your Diskettes.
     As with most software, the first thing you should do is make a 
     backup copy of the diskettes (or diskette) that contain the 
     software. This is always a good practice, as it is time consuming 
     to get a replacement diskette.

     Registering Your Copy.
     Second, please fill out the registration form (if available) and send it 
     in. Prior to any communication with us, you will need to have registered 
     your software. Please answer all the questions as completely and 
     accurately as possible. If you are registered, it is easier for special 
     upgrades to be offered to you. 
     
     Installing On A Floppy Disk System (either 3-1/2" or 5-1/4").
     After you make your backup copy, place the backup in your disk 
     drive. Initiate the software by typing "FSD". The system should 
     respond with the opening banner. If it does not, you will need to 
     consult the corrective action section (Appendix A).
     
     Installing On A Hard Disk System:
     Even if you are putting the system on a hard disk, it is still a 
     good idea to make a backup copy (or copies). After making the 
     backup, copy all the files from the diskette onto your hard disk. Put 
     all the files in the SAME directory or sub-directory. Initiate the 
     software by typing "FSD". The system should respond with the opening 
     banner. If it does not, you will need to consult the corrective action 
     section (Appendix A). 

     If you are using a floppy diskette (of either size), please make 
     sure that the diskette is always in the proper drive when running 
     the software. 

     It is always YOUR responsibility to make sure you have enough disk 
     space to run a draft. Each draft may take up about 12K of space.



                                        (3)
 


     OPERATION OF THE SOFTWARE

     How To Enter, Make Selections, and Exit FD.
     To enter FD, type "FSD" at the system prompt. Your system will respond 
     with a 'banner' screen that shows the version date and copyright 
     information. Pressing the space bar will cause the next screen to appear. 
     This screen shows all existing setup files at the top of the screen, a 
     box in the middle, and asks you to enter a setup file name. The setup 
     file will identify your demographic information to the software. Usually, 
     you will enter a filename which is a unique name of your choosing. We 
     suggest that you use your first name or nickname.  If someone else runs a 
     draft on your system, they should set up their own setup file. If you are 
     just beginning or browsing, you may press the ENTER key. 
     
     If you reply with SAMPLE or the ENTER key, then a review of the current 
     scoring rules will appear, after which the Main Menu will appear when you 
     hit another key. If you enter a setup file name which is not listed at 
     the top of the screen, a prompt will come back asking you if this is a 
     new setup file name (in which case you type "N"), or did you type in the 
     wrong name and you want to try again (in which case you type "T"). 

     A separate setup file name is NOT NECESSARY for EVERY draft, but rather 
     to distinguish one particular group of drafts from another.

     Making A Selection With FD.
     Use the arrow keys or type the first character of your intended selection 
     to move the pointer to that selection and then press the space bar. 
    
     How To Move Around Once You Have Entered FD.
     All of the boxes in FD have similar construction and rules for 
     moving between and inside them. Once you know how to move around 
     and make selections within the software, entering statistics and 
     making changes is a snap. How to move around is described in the 
     most common help screen (available when you press F1). 
    
     Exiting Any Module and Leaving FD.
     Pressing the ESCape key anywhere will either 'back up' within a module or 
     exit the current module and return to the main menu. TO EXIT FD, PRESS 
     THE ESCAPE KEY WHILE AT THE MAIN MENU.



















                                        (4)

     ENTERING A SETUP FILE

     A setup file contains information which identifies you to the 
     system. If you enter a Potato League Sports contest, the setup 
     file will provide PLS with information for contacting you.
     
     When selecting the "ENTER Setup Module" from the main menu, you will be 
     presented with a screen showing all the questions to be answered. If you 
     are working on an existing file, the existing selections are shown so 
     that you can change them. If you want to change a selection that you have 
     already made on this screen, use the up arrow to move upward. 
     

     Following are the questions contained in the "ENTER Setup" routine: 

     Name of your fantasy team:
     The name of the team will appear on top of all reports. This name 
     can be up to 20 characters long. Use upper and/or lower case. 

     Your Name:
     This name also appears on top of every report. It can be up to 20 
     characters long. This name will be the "resident commissioner". 
     
     IMPORTANT: Your correct name, along with your entire address, is VERY 
     important when submitting an entry in our national contest! 

     Mailing Address:
     You are allowed two lines for your "street address". If you like, 
     you may add a company name in the address.

     City: 
     You are allowed 25 characters for your city.  NOTE: Foreign locations 
     might want to enter both the city and location (province, county, 
     township, etc.) on this line.

     State: 
     Enter in the 2 character abbreviation of your state or province.

     Country:
     Enter the correct country code from the codes listed. 

     Phone:
     Please follow the (xxx) yyy-zzzz format. If you have an 
     international phone number, simply put that in with dashes.

     Comments:
     The comments are used by Potato League Sports if you submit 
     a draft in any of our contests. PLS reads these comments and uses 
     them as necessary. You might name your favorite real team here. 
     
     Also, any information throughout the rest of the setup routine which you 
     might think is unclear may be expanded upon on these lines (i.e. 
     finishing an unusually long address, etc.) 

     Completion of the setup.
     After these selections are complete, the data file describing 
     you has been set up and you are ready to proceed.

     


                                        (5)

     CHANGING PLAYER DATA

     This module allows you to edit data for all players supplied in the 
     master data file. Possible changes include changing a player's real team 
     designation, making players inactive (and re-activating them), changing a 
     player's position, and changing the "Bid Price" associated with a player. 
     You may select players by their position or by their real team. 

     While in the Change Player Data module, these function keys are active:
        F1 - Help
        F2 - Locate a player by his Real Team 
        F3 - List modified position of all players 
        F4 - List player Bid Prices (see below)

     After highlighting a player by pressing the space bar while the arrow is 
     in front of his name, you may do the following:

         Change The Real Team Designation Of A Player.
           Type R for real team. The real team selection box is located 
           beneath the position selection box. Move the pointer to the correct 
           new team, then select the team by pressing the space bar, and 
           confirm the selection by pressing the ENTER key. 
    
         Change The BID PRICE Of A Player:
           Included with the Master List of players is a "bid price" for each 
           individual player. This Bid Price is important as a guide during 
           your actual fantasy league draft. Although a Bid Price is already 
           assigned to each player, this value can be changed to reflect the 
           price that YOU feel each individual player is worth, as it relates 
           to a typical fantasy league "auction" draft. Therefore, you can 
           print out a "MASTER LIST" of most of the players and the price YOU 
           WOULD PAY for those players. 

         Change The Position Of A Player.
           The positions of all players are set by PLS prior to each season. A 
           player's position CAN be changed, and from that point on the player 
           will show up, and be available to be drafted, at that new position. 
     
           However, WHENEVER YOU SELECT THE CONTEST MODE OF DRAFTING, FD will 
           automatically use the original positions for all players (this 
           information is stored and not changeable). This is imperative in 
           order to allow everyone equal "footing" during the draft. 
 
         Change A Player's Active Status.
           When the player is active, Typing I will inactivate that player. If 
           a player is inactive, '-NA' will appear in that player's name (for 
           Not Available). The whole name shows for healthy players, unless 
           they started as inactive when the master data file was last read. 
           When the player is inactive, typing "A" will activate that player. 

     IMPORTANT NOTE: In the CONTEST MODE, the computer may draft players that 
     you have designated inactive in order to be fair to all contest entrants.







                                       (6)

     DRAFTING FANTASY TEAMS

     This is the main module of FD. You have numerous choices regarding 
     the parameters of each draft (except in the shareware version). If you 
     elect to take the standard you-vs-computer (CONTEST MODE) option, then 
     you won't have to make further setup choices. If you don't choose this 
     mode, you will be asked to specify the drafting order, how many owners 
     will participate in the draft, how many of them will be filled by you 
     (and/or your friends, along with how many spots the computer will draft 
     in), and what the roster requirements for each position are. 

     Choice Of Leagues.
     With certain sports, you have the opportunity to select which league, 
     conference, or division that you want to confine your selections to. For 
     example, with baseball you may choose the American League, National 
     League, or include players from Both Leagues. 

     Naming Each Draft.
     You may draft as often as you like with FD, and there are 
     numerous ways to set up a draft, as noted earlier in the section 
     on "Ways to play FD". Each time you begin a new draft, you may 
     call the new draft by a new name. You are allowed up to 8 
     characters and the result must be a legal DOS filename (consult 
     your DOS manual). Do NOT use punctuation marks or spaces!
     
     Draft Order.
     This software supports forward or switchback order for drafting. 
     Forward order always has the first team draft first in each round. 
     In the contest mode, Forward order is used. Switchback order, 
     which is the most common for pools, starts even numbered rounds 
     with the last team from the prior round and proceeds back to the 
     first team (Round 1=1-2-3-4, Round 2=4-3-2-1, Round 3=1-2-3-4....).
     
     The Drafting Screen.
     At each owners turn, the top left hand of the screen shows the 
     position requirements for that owner, including filled and total to 
     be filled at each position. The large boxes in the middle are used for 
     the display of players, either by position or by real team. The lower 
     left box is reserved for displaying last season's statistics for a 
     selected player. 

     The Drafting Process.
     When it is your turn to select a player, you may find & select that 
     player by position (highlight the proper position initials in the upper 
     left corner box, and a list of those players will appear on screen), or 
     by real team (using the F2 key). You may also pick up a free agent by 
     using the F3 key. If you pick up a free agent, you will be expected to 
     enter his name, select the appropriate position, and select the proper 
     real team for that player. 

     When there are more than 60 players at a position, a message will 
     be presented at the bottom of the screen stating how to see more 
     players (using the PgUp and PgDn keys). 
     
     After you highlight a player as the one you want to draft, the player's 
     statistics for last season are presented for your review in the lower 
     left corner box. You may then either press Y (or ENTER) to confirm this 
     player as your draft selection, or ESCape to reconsider and possibly 
     choose another player. BY PRESSING Y (or ENTER) YOU ARE SELECTING THIS 
     PLAYER, AND CANNOT CHANGE THIS PICK!
     
                                        (7)


     ADDING FREE AGENTS.
     
     Pressing the F3 key, while in the DRAFTING module, will add a free agent 
     by asking three things: 1) The player's name (last name first - i.e. 
     Smith John); 2) the position of the player (by highlighting the proper 
     position initials in the upper left corner box); and 3) the real team of 
     the player (by highlighting the appropriate real team in the lower left 
     corner box). 
     
     Once you have added a free agent, you will not have to enter that 
     person as a free agent in a separate draft since his name will be added 
     to the Master Player File. You may add a maximum of 50 free agents. 

     IMPORTANT NOTES:
     1) Any free agents added will not be presented in alphabetical 
        order in subsequent drafts (unless their name really falls at 
        the end of the list!), so remember to search the whole list for 
        players that you have added before.
     2) If you lose the Master Player File, or copy it from the original 
        disk after adding free agents, all those additions will be lost and 
        you will need to enter them again.

     Why Aren't All Players Included In The Master Player File?
     There are several reasons. First, disk space was a consideration. 
     Second, the more players in the file, the longer it will take to 
     read them all in (and reading them in takes place each time a new 
     module is entered). Third, we wanted the information to fit under 
     a memory capacity of 256K, so that most computers could be 
     compatible with FD. Having less players also rewards those 
     people who seek out and find the best "free agents" available. 

     Review Options.
     Pressing F4 or F5 will let you review any prior picks. F4 will
     review the picks by round, while F5 will list selections by position. 

     Second Thoughts.
     When FD asks you to confirm your pick, you may "back up" by 
     using the ESCape key. You may not, however, go back and change 
     a player selected in an earlier round (just as you could not in
     a live draft). Your only recourse is to start a new draft!

     Potato League Sports Picks And Logic.
     Although a fairly sophisticated picking strategy has been used to pick 
     players for the upcoming season, you may feel that some of the picks are 
     odd, or questionable at best. To some extent, this reflects experience 
     with many actual drafts - everyone has their own surprise picks, 
     including Potato League Sports! You may be surprised at how well our 
     "surprise" picks do - so might we (embarrassingly so).  You might also 
     keep in mind that, for distribution purposes, the selections are made at 
     least two to four months prior to the season, when actual opening day 
     rosters are not complete. 


     




    
                                        (8)


    
     HELP! 

     Here is the help screen presented when you press F1 while in the
     DRAFTING module:

          
                       COUCH COACH FANTASY DRAFT - HELP                

To move within boxes that contain selection arrows, use the following keys:

KEY       FUNCTION
-----------------------------------------------------------------------------
arrows    Moves the selection arrow in the desired direction. Will move within
          the specified bounds of the box or across single line boxes.
Esc       Gets you out of the box immediately (escape!). 
space bar Selects or de-selects the choice being pointed at. The choice will
          be highlighted if selected, or lowlighted if de-selected. 
A-Z,0-9   Entering the first character of your choice moves directly to the 
          next choice that starts with the character you entered.
PgUp/PgDn Displays more players in the category - PgUp shows prior 
          (alphabetic) players while PgDn shows later players.

Function Keys  ( F1 calls this screen )
----------------------------------------------------------------------------
F2  Show remaining players by real team   F7 Show/Omit Real Team in Display
F3  Pick up a free agent                  F8 Show/Omit Stat Totals in Display
F4  Review prior selections by round      F9 Turn Drafter's Aid On/Off
F5  Review prior selections by position      (F9 not active in CONTEST mode)
F6  Review Scoring Rules                  F10 Turn Browse Stats Mode On/Off

                        ___________________________________


     Here is the normal help screen presented when you are NOT in the 
     DRAFTING module.

                            COUCH COACH FANTASY DRAFT - HELP                

When asked for information, with a (Y/N), the first choice (Y, in this case) 
is the "default" response. The default is taken if any key is pressed but the 
non-default (N, in this case) response or the ESCape key.

To move within boxes that contain selection arrows, use the following keys:

KEY       FUNCTION
-----------------------------------------------------------------------------
arrows    Moves the selection arrow in the desired direction. Will move within
          the specified bounds of the box or across single line boxes.
Esc       Backs up to the last prompt or out of the current module (escape!). 
space     Selects the choice that the selection arrow is pointing at. The 
          choice will be highlighted if selected.
A-Z,0-9   Entering the first character of your choice moves directly to the 
          next choice that starts with the character you entered.
PgUp/PgDn Displays more players in the category - PgUp shows prior 
          (alphabetic) players while PgDn shows later players.

If any function keys are active, they are shown at the bottom of your screen.
     
                                        (9)

     PREPARING A DISKETTE FOR SUBMISSION

     After you have completed a "CONTEST MODE" draft, you are invited 
     to submit your picks to PLS to compete against all others submitting
     picks. Details of each contest are separate from this manual. 
     
     You will be asked to provide the name for the draft that you want 
     to submit and the disk drive containing your "submission 
     diskette". (You may use any formatted diskette to submit a contest 
     entry.) Provided that there are no media errors and all the files 
     exist, then this operation is very simple and short. FD will 
     copy the files containing your serial number, your setup file 
     containing your address and contact information, your adjusted (for 
     any free agents you added) player pool, and the particular draft 
     that you named. It is important that you do not "fool" with any of 
     these files outside of FD. To retain control over the fairness 
     of the contest, certain drafting sequences and codes are used and 
     will be contained in these files.  PLS reserves the right to 
     reject any entries.

     Instructions for submitting the disk are in the software, and 
     basically consist of mailing the diskette along with a printout 
     of the draft and an update service fee to PLS.

     GENERATE REPORTS

     Some reports will be similar regardless of the sport, others will differ. 
     Here are the reports for the Football, Basketball, and Baseball versions. 

     Scores of Players by Fantasy Team.
     This report provides a roster for each fantasy team with last year's 
     total scores and the total by team. Optionally, you may ask for 
     totals by position. 

     Rank Players by Position by Stat Category.
      There are numerous different options for sorting and printing this report:
       1)  Total Points for each position.
           Ranks players by position in descending order of total points.
       2)  Individual statistical categories. Here is a sampling of how each 
           sport ranks the players (you can obtain an entirely different 
           ranking based on ANY category listed below) : 
           
               FOOTBALL          FOOTBALL                   FOOTBALL
               --------          --------                   --------
  position    QB,RB, and WR      Kickers              Defensive/Special Teams
                                              
  by          Rushing yards    Extra Points            Td & Safeties scored
              Receiving yards  Field Goals < 30 yds.   Sacks
              Passing yards    Field Goals 30-39 yds.  Interceptions & fumbles
              TD's scored      Field Goals >= 40 yds.  Blocked punts & kicks 
                                                          returned for TD's
    
               BASEBALL         BASEBALL                   BASKETBALL      
               --------         --------                   ----------
  position    Hitters           Pitchers             Guards, Forwards, Centers
    
  by          Average            ERA                   Points scored
              Hits               Strikeouts            Rebounds
              Runs               Wins                  Assists
              RBI's              Saves   
              Stolen Bases
                                      (10)


     Generate Bid Price List.
     This report gives you a printout of players, ranked on the Bid Price of 
     each player (initially, FD comes with a bid price established by Potato 
     League Sports, but this can be changed by you). Some statistics, along 
     with each player's point total from the prior season, will also be 
     listed on the printout. 
     

     SYSTEM UTILITIES

     Utilities are provided to assist with some activities that you 
     might want to perform. 

     The following utilities are offered for assistance in setting up 
     and operating your pool: 

          List File Directory
          Examine Contents of a File
          Change Setup File Name
          Box Outline Color Modification
    
     LIST FILE DIRECTORY allows you to examine the files in your current 
     directory, sub-directory, or diskette. You will be asked whether you want 
     to look at all files or pick a specific subset of files. Use the normal 
     DOS wildcards (consult your operating system manual for these) to specify 
     which subset of files to search for. 

     EXAMINE CONTENTS of a FILE allows you to look at any individual file on 
     the screen. The screen will pause after each 22 lines printed, and you 
     can also stop it from scrolling by pressing the space bar. If you press 
     the Escape key, the utilities menu will return. We recommend that you 
     examine files prior to printing them whenever possible. 

     CHANGE the SETUP FILE NAME allows you to switch from the Setup File Name 
     currently in use to another without having to ESCape from FD entirely, 
     and then restart.

     BOX OUTLINE COLOR MODIFICATION allows you to change the colors of the 
     outlines of the boxes that appear on the screens. Choose the colors by 
     number and press Escape when you are finished. As you can probably guess, 
     this isn't necessary unless you have a color monitor. 










     




                                       (11)

     APPENDIX A - Errors And Corrective Action

     Here it is! The section that is supposed to tell you what went 
     wrong and how to correct it. Well, let's hope this helps.

     There are three types of common errors:

        1) Errors caught by FD and reported, such as "out of disk 
           space" and "drive unavailable" and "file doesn't exist".

           REMEDY: Most of these errors are caused by the user (YOU!). Check 
           to make sure you have enough disk space prior to starting a draft, 
           make sure the door on your disk drive is closed, etc. Normally, 
           these errors are minor in nature, and can be easily resolved.

        2) Errors caught by our friendly compiler, but not by FD. These result 
           in "Error number XX at line YYYY". 
     
           REMEDY: Although FD was extensively tested, with no instance of 
           this reported, PLS can't guarantee this won't occur. If it happens, 
           please note the message and feel free to call us (if it isn't 
           obvious what the remedy to the problem is). 

        3) Errors not caught by the compiler or FD. There are two types here:
                a) Calculations made by FD. if you think FD has 
                   calculated something wrong, please check your work 
                   and then, if still convinced, let PLS know! 
                b) System hangs / disk media errors / other unknown

           REMEDY: In the event of any "hangs" or "stoppages", check your 
           printer, making sure it is on and on-line. In the event of disk 
           media errors, make another copy of the original diskette and try 
           using it. 

     You may also encounter problems if you use "memory-resident" software, 
     If you suspect this might be a problem, re-boot your machine WITHOUT 
     loading any memory-resident software (i.e. renaming your AUTOEXEC.BAT 
     file and re-booting until you are finished with FD, then renaming it 
     back to AUTOEXEC.BAT). 

     Whatever the reason for consulting this section, if you can't find the 
     remedy, do NOT get frustrated - call for help. We are always happy to 
     help in any way we can! 
     
     Lastly, we have over a thousand people using our software, and you can 
     rest assured that it does work or can be made to work if you have the 
     right hardware setup.





                             POTATO LEAGUE SPORTS
                         4569 Mission Gorge Place, #B
                             San Diego, CA  92120
                           (800) 537-9228 - orders
                                (619) 282-8186

     


                                     (12)
```
{% endraw %}

## FILE2078.TXT

{% raw %}
```
Disk No: 2078                                                           
Disk Title: Fantasy Sports Drafter                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: Fantasy Sport Drafter                                    
Author Version: 2.5                                                     
Author Registration: $19.95                                             
Special Requirements: Hard drive recommended.                           
                                                                        
What is more fun than collecting and trading baseball cards; sweeping   
the nation to the tune of more than 1.5 million players -- and growing; 
permits you to rub elbows with owners, starters and free agents;        
provides you the opportunity to compete against other players; and,     
doesn't stick to most dental work? It's Fantasy Leagues!                
                                                                        
Fantasy Leagues are springing up across the country, covering baseball, 
football, basketball -- all major league sports. Developing your fantasy
team from the real players in the major leagues, you earn points        
depending on how a real player performs during a season. But how do you 
put your team together?                                                 
                                                                        
FANTASY SPORT DRAFTER provides you with a computerized opponent in the  
team draft arena. You can go up against it as many times as you wish,   
learning the ins and outs of actual fantasy drafting. When you're done, 
you'll have assembled your own sport team from the best of the major    
leagues in that sport. You'll hardly be able to wait for the start of   
the season.                                                             
                                                                        
After you have developed your team, FANTASY SPORT DRAFTER provides you  
the ability to submit your picks to a fantasy sports center to compete  
in an actual drafting contest. Your team may win the title of Fantasy   
Team Champion.                                                          
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║          <<<<  Disk #2078  FANTASY SPORTS DRAFTER >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To unarchive program, type:  PKUNZIP FANDRAFT (press enter)             ║
║ To start program, type:  FSD (press enter)                              ║
║                                                                         ║
║ To print documentation, type:  COPY FDMANUAL.DOC PRN                    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```









Hello! Congratulations on obtaining the ultimate in fantasy sports drafting 
software - The Fantasy Sports Drafter, from Potato League Sports! 

To begin using the Fantasy Sports Drafter, just follow these steps:

        1) If you prefer, create a separate sub-directory for the Fantasy 
           Sports Drafter on your hard drive
        2) Copy the contents of this entire diskette into this sub-directory 
           of your hard drive 
        3) Type in the following command:  PKUNZIP FANDRAFT 
        4) The computer will "unzip" the contents of this file and you are 
           ready to begin!
        5) To start the Fantasy Sports Drafter, type FSD

After you have copied and "unzipped" the files, we suggest you obtain a 
hard copy printout of the User's Manual (a file called FDMANUAL.DOC ). 

We hope you enjoy the Fantasy Sports Drafter! Versions are available for 
football, baseball, and basketball. For more information contact Potato 
League Sports.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2078

     Volume in drive A has no label
     Directory of A:\

    FANDRAFT ZIP    176448  11-25-89   7:43p
    FILE2078 TXT      2961   1-29-90   3:47p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617   1-30-90  11:19a
    PKUNZIP  EXE     21440   7-21-89   1:01a
    README   DOC      1011   1-02-80   4:47a
            6 file(s)     202515 bytes
                          117760 bytes free
