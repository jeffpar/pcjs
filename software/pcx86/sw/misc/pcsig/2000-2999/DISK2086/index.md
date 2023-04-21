---
layout: page
title: "PC-SIG Diskette Library (Disk #2086)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2086/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2086"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GOLF SCOREKEEPER"

    If it were just you and three close friends going out to the links once
    a week for a game of golf, keeping track of everyone's score would be
    easy. But if the rest of the men and women in your department, or the
    members of your club, found out about your weekends on the local
    courses, scorekeeping could get to be a burden. If this nightmare has
    come true, there's no need to sell your clubs for a skiing outfit.  Now
    there's GOLF SCOREKEEPER.
    
    Some of the features of GOLF SCOREKEEPER are:  The ability to record an
    unlimited number of players and courses in its definition area; Player
    history reports, either full history or by course; team definition and
    scorekeeping; player and course ranking reports and a
    foursome or fivesome report generator.  All players and golf courses
    defined are maintained in RAM for fast access and are shadowed on disk
    in case of any unexpected power loss.
    
    In addition to all this, GOLF SCOREKEEPER provides pull-down menus,
    special hot-keys, context-sensitive help screens and full mouse support.
    
    Probably the only thing GOLF SCOREKEEPER won't do is remind you to keep
    your head down.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2086.TXT

{% raw %}
```
Disk No: 2086                                                           
Disk Title: Golf Scorekeeper                                            
PC-SIG Version: S2                                                      
                                                                        
Program Title: Golf Scorekeeper                                         
Author Version: 2.0                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
If it were just you and three close friends going out to the links      
once a week for a game of golf, keeping track of everyone's score       
would be easy. But if the rest of the men and women in your depart-     
ment, or the members of your club, found out about your weekends on     
the local courses, scorekeeping could get to be a burden. If this       
nightmare has come true, there's no need to sell your clubs for a       
skiing outfit.  Now there's GOLF SCOREKEEPER.                           
                                                                        
Some of the features of GOLF SCOREKEEPER are:  The ability to record    
an unlimited number of players and courses in its definition area;      
Player history reports, either full history or by course; Team defi-    
nition and scorekeeping; Player and course ranking reports and a        
Foursome or Fivesome report generator.  All players and golf courses    
defined are maintained in RAM for fast access and are shadowed on       
disk in case of any unexpected power loss.                              
                                                                        
In addition to all this, GOLF SCOREKEEPER provides pull-down menus,     
context-sensitive help screens and full mouse support.                  
                                                                        
Probably the only thing GOLF SCOREKEEPER won't do is remind you to      
keep your head down.                                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GOLFSKOR.DOC

{% raw %}
```
        
        
        
        
        
        
        
        
        
        
        
                                Golf  Scorekeeper
        
        
                                  User's Manual
        
        
                                   Version 2.0
        
        
        
        
        
        
        
        
        
        
                                   Written By:
        
                                  Brian Squires
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                
        
        
        
        
                        T A B L E   O F   C O N T E N T S
                        - - - - -   - -   - - - - - - - -
        
                                                                PAGE #
                                                                ---- -
        
                REGISTRATION INFORMATION ......................   1
        
        
                GETTING STARTED, FAST .........................   4
        
        
                INTRODUCTION ..................................   5
        
                        Why I Wrote this Program ..............   5
        
                        What This Program Does ................   5
        
        
                HOW TO USE THE GOLF SCOREKEEPER ...............   6
        
                        Set-up Definition .....................   6
        
                                Points Equivalents ............   6
        
                                # of Scores to Keep ...........   6
        
                                Diagnostics ...................   6
        
                                Colors ........................   7
        
                                Header Text ...................   7
        
                                Data Files Path ...............   7
        
                        Player Definition .....................   7
        
                                Adding Players ................   7
        
                                Changing Player Status ........   8
        
                                Removing Players ..............   8
        
                        Course Definition .....................   8
        
                        Team Definition .......................   9
        
                        Entering Scores .......................   9
        
        
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V2.0
        
        
                
        
        
        
        
        
        
                        T A B L E   O F   C O N T E N T S
                        - - - - -   - -   - - - - - - - -
        
                                 (Continued...)
        
                                                                PAGE #
                                                                ---- -
        
                        Reports ...............................   9
        
                                Full Roster ...................  10
        
                                League Roster .................  11
        
                                Player History ................  11
        
                                Per Course History ............  12
        
                                Team Scores ...................  13
        
                                Course Rankings ...............  14
        
                                Points Ranking ................  14
        
                                Average Ranking ...............  15
        
                                ABCD List .....................  15
        
                                ABCDE List ....................  17
        
                                Foursome List .................  18
        
                                Fivesome List .................  19
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V2.0
        
        
                
        
        
                            REGISTRATION INFORMATION
        
        The Golf  Scorekeeper is distributed  as User-Supported software.
        You  are  free  to  copy  and  distribute  this  software freely,
        however,  if you  find it  of use  to you,  you are encouraged to
        register your  copy. Registering your copy  of the software helps
        the author continue to provide professional-quality software at a
        very reasonable price.
        
        The Basic  Registration is $25.00, this  fee will put you  on the
        mailing  list   for  notification  of   any  future  updates   or
        enhancements.  It  will  also  allow  you  to  receive  technical
        support.  If you  pay an  additional 10.00  you will receive free
        upgrades for  a period of one  year from the receipt  of payment.
        
        In addition  to the registration  fee you may  also pay a  fee of
        15.00 and have  the program customized to use  your golf league's
        own method for  calculating a members "points to  shoot for". All
        you need to do for this is send a description of how you want the
        points  calculated along  with your  registration fee.  Please be
        sure  to include  an address  or phone  number where  you can  be
        reached in case their is some question as to your description.
        
        Plans for future enhancements include:
        
        * Handicap Calculations
        * Keeping up with the # of putts per hole
        * Printing of custom scorecards for keeping # of putts/hole
        * Reports printed to the screen
        * Reports printed to a text file
        
        All materials are shipped on 5.25-inch floppy diskettes, however,
        there  is a  3.5-inch floppy  diskette service  available for  an
        additional  $5.00. This  is a  once-per-registration charge  that
        covers as  many 3.5-inch floppy disks  as are needed to  ship any
        future upgrades.
        
        Non-U.S. orders  need to include $5.00  extra to cover additional
        shipping and  handling charges. Checks  and money orders  must be
        drawn on  a U.S. bank. Please  send all payments payable  in U.S.
        Dollars.
        
        Print the registration form, REGISTER.FRM,  or include on a peice
        of paper your name, address, phone number, and points calculation
        method if applicable, and send it along with your payment to:
        
                Brian Squires
                Rte 2 Box 220
                Seale, AL  36875
        
        If by chance, you don't have the REGISTER.FRM file, a copy of the
        registration form is included on the next page.
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 1
        
        
                
        
        
                       GOLF SCOREKEEPER REGISTRATION FORM
        
        
        NAME:     _______________________________________________________
        
        
        COMPANY:  _______________________________________________________
        
        
        ADDRESS:  _______________________________________________________
        
        
                  _______________________________________________________
        
        
        CITY:     _______________________________________________________
        
        
        STATE:    _______________________  ZIP CODE: ____________________
        
        
        PHONE:    _______________________________________________________
        
        
        WHERE DID YOU RECEIVE GOLF SCOREKEEPER? _________________________
        
        
                  _______________________________________________________
        
        
        COMMENTS: _______________________________________________________
        
        
                  _______________________________________________________
        
        
                  _______________________________________________________
        
        
        Basic Registration @ $25.00                             $________
        
        One-Year Free Upgrade Option @ $10.00                   $________
        
        Custom Points Calculation @ $15.00                      $________
                (Include description)
        
        3.5-Inch Floppy Disk Service @ $5.00                    $________
        
        Non-US Shipping @ $5.00                                 $________
                (Payments must be in US Dollars, US Bank)
        
                                                        Total   $________
                Remit to:       Brian Squires
                                Rte 2 Box 220
                                Seale, AL  36875
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 2
        
        
                
        
        
        How to Contact the Author:
        
        I am sorry, but I do not have  a private BBS nor am I currently a
        member of a  national network service. So, you  will just have to
        write  me a  letter and  send it  to the  above stated address. I
        promise a speedy reply.
        
        
        Disclaimer:
        
        The author claims no responsiblity  for any damages caused by the
        use or  misuse of this  product. This product  is distributed "as
        is" with no warranty expressed or implied. The author will not be
        responsible   for  any   losses  incurred,   either  directly  or
        indirectly, by the  use of this product. The  author reserves the
        right to  make modifications at  any time. Prices  are subject to
        change without notice.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 3
        
        
                
        
        
                              GETTING STARTED, FAST
        
        This section is  included for those users that  are like myself -
        very impatient!  If you would  rather just start  up the software
        without reading  the whole manual, and use the  context sensitive
        help screens when you get stuck, then this is how you do it:
        
        First, make sure you have the files GOLFSKOR.EXE and GOLFHELP.HLP
        on your disk in the same directory. If you do, then type GOLFSKOR
        <RETURN> and you should be in business. When the golf scorekeeper
        first starts up it looks  for its setup file (GLFSETUP.DAT), this
        file contains all of the setup information for the program. Where
        it looks  for this file  is determined by  the system environment
        variable "GOLFDEFS".  If "GOLFDEFS" has  been defined by  putting
        the line:
        
                               SET GOLFDEFS=<PATH>
        
                         Example -> SET GOLFDEFS=C:\GOLF
        
        NOTE: Leave off the "\" on the end of the path
        
        in your AUTOEXEC.BAT file then  the golf scorekeeper will look in
        the defined path. If not, then  the golf scorekeeper will look in
        the current directory.  If no GLFSETUP.DAT file can  be found the
        program will automatically create  one with the default settings.
        Where this file is created is  also determined in the same way as
        where it looks for the file.
        
        Also at  startup time the program  will look on the  system for a
        mouse.  If one  is found  then the  mouse support  portion of the
        program is enabled. To use the mouse, just place the mouse cursor
        on the desired  item and click the left  button. The right button
        is interpeted as  <ESC>. The center button has  no effect in this
        application.
        
        Once  the program  is loaded  you  can  get help  at any  time by
        pressing the F1 key. If there is  more than one page of help on a
        paticular topic then the "PgDn"  prompt will appear in the bottom
        right  corner  of  the  help  window.  You  can  view the next or
        previous page(s) by pressing the PageUp or PageDown keys.
        
        I hope this short description has  helped you impatient users get
        started fast. If not then take this manual with you the next time
        you go to the restroom and read all about "The Golf Scorekeeper".
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 4
        
        
                
        
        
                                  INTRODUCTION
        
        Why I Wrote this Program -
        
        The need for this program stemmed from the company golf league to
        which I belong.  This league consists of two  man teams that must
        turn in a 9 hole score at  least once a week. The league has been
        in  existence  for  about  4  years,  and  when it first started,
        keeping up  with the scores was  no real problem. But,  this last
        season we had over 100 people  in the league, and keeping up with
        all of  those scores came to  be quite a burden.  Well, to make a
        long  story even  longer, I  was asked  to research some software
        that our league  could use to keep track of  all these scores and
        also possibly  rank the players for  an end-of-season tournament.
        Since none of the software that  I found really did everything we
        wanted it to,  I wrote "The Golf Scorekeeper"  to fill our needs.
        This is why  some of the features, like  the points calculations,
        are implemented the way they are.
        
        What This Program Does -
        
        There are  two main purposes  for this program.  The first is  to
        track  players  and  their  scoring  histories.  The second is to
        generate reports that make administering a golf league easier.
        
        The  first  of  the  two  purposes  is  accomplished  through the
        definition of  players to the  system. Along with  adding players
        their  are  also  functions  to  change  a player's league member
        status  and remove  players from  the system.  The other function
        needed to  accomplish the first purpose  is the course definition
        function. This allows the user to define different nine hole golf
        courses  to  the  system.  In  addition  to  defining players and
        courses to  the system the  user can also  create teams from  the
        list of defined players.
        
        The second purpose, administrative  help, is accomplished through
        the following reports:
        
                * Player roster  (All defined players)
                * Member roster  (Only league members)
                * Player history
                * Per course history
                * Team scores
                * Course rankings
                * Player rankings by points
                * Player rankings by average
                * Player A,B,C,D rankings
                * Player A,B,C,D,E rankings
                * Foursome generator
                * Fivesome generator
        
        These reports are discussed in detail later in the manual.
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 5
        
        
                
        
        
                         HOW TO USE THE GOLF SCOREKEEPER
        
        This  section of  the users  manual describes  in detail  how the
        program functions and what the user needs to know in order to get
        the most from The Golf Scorekeeper.
        
        Set-up Definition -
        
        In  this section  the basic  program setup  parameters and  their
        functions are covered.
        
        Points Equivalents,
        
        When  calculating the  number of  points a  player receives for a
        hole these are  the equivalents that are used.  Their is no point
        equivalent for double bogey and I don't think anyone will ever do
        better than a double eagle. In addition to the points equivalents
        the user can define a minimum and maximum number of points that a
        player  can  have.  When  defining  the  points equivalents it is
        important to remember how a  player's points are calculated. They
        are calculated in the following manner:
        
            When  a player  shoots more  than 2  points above  his/her
            current  points level  that level  is increased  by 2. The
            same  relationship holds  true  for  shooting less  than 2
            below current  levels. I realize that  this can cause wild
            swings in a player's points. I  am always open to new ways
            to  calculate   points.  It  should  be   noted  that  any
            historical or team reports  will use the currently defined
            points equivalents.
        
        The method for calculating points can be customized for a leagues
        particular needs. See the section on registration information for
        more details.
        
        # of Active Scores to Keep,
        
        In  this option  the user  defines the  number of  scores to keep
        active  for each  player. Once  that number  of scores  have been
        entered the oldest scores are written  to a backup file each time
        new scores are  entered. In choosing this number  the user should
        be aware  that the more scores  kept active the slower  the sytem
        will run  when doing a team  report. This is because  the program
        must search all the way through a player's score file in order to
        find the most recent score. The  default value for this option is
        20.  The reason  for this  is that  in order  to calculate a USGA
        handicap a player must have 20 recorded scores.
        
        Diagnostics,
        
        This  option  allows  the  user  to  turn  on  or  off  the  Golf
        Scorekeeper  diagnostics. These  diagnostics tell  the user  when
        records are being written to the  disk or printed to the printer.
        On  slower  computers  it  may  be  desirable  to  disable  these
        diagnostics.
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 6
        
        
                
        
        
        Colors,
        
        This  option allows  the user  to customize  the screen colors to
        suit  his/her  particular  taste.  In  the  event  the colors get
        totally out of hand the original colors option can be selected to
        restore the default colors. The colors selected will only be good
        for the active  session unless they are stored  to disk using the
        "Save Set-up" option.
        
        Header Text,
        
        This is the  header that appears at the top  of the screen and on
        every report. This  option allows the user to  define his/her own
        personal header.
        
        
        Data Files Path,
        
        This  is  the  path  that  the  Golf  Scorekeeper  will  use when
        searching for data files. This option  allows the user to run the
        Golf Scorekeeper from a directory  other than that containing the
        data.  The  path  is  good  for  all  data  files except the file
        "GLFSETUP.DAT". This is the set-up file for the Golf Scorekeeper.
        The user can  specify in which directory the  Golf Scorekeeper is
        to  find the  set-up file  by setting  an environment variable in
        his/her autoexec.bat. The syntax is:
        
                               set golfdefs=<path>
        
                         Example -> SET GOLFDEFS=C:\GOLF
        
        where <path> is the path without the trailing \.
        
        
        Player Definition -
        
        The player defintion portion of  The Golf Scorekeeper consists of
        three  parts; adding  players, changing  player's information and
        removing players.
        
        Adding Players - (Hot Key = F2)
        
        This will  allow the user  to add or  define a new  player to the
        system.  To  add  a  new  player  the  user  must provide certain
        information. This information is:
        
                   Player Number  - A number  unique to each
                   player. This  number is 9  digits and can
                   only contain numbers 0 - 9 in each digit.
                   A default  player number  will appear  in
                   this field that is unique and can be used
                   if  their is  no other  unique number  in
                   use.  (i.e. employee  number, SS number).
                   This  number  must  be  unique because it
                   will  be  used  as  a  file  name for the
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 7
        
        
                
        
        
                   player's history records.
        
                   First Name - The players first name.
        
                   Last Name - The players last name.
        
                   The first and last name are 15 characters
                   each.
        
                   Member  Status  -  If  this  player  is a
                   member of your league answer Y if not N.
        
                   Points  -  Enter  the  starting number of
                   points  this  player  must  make to break
                   even.
        
        Upon leaving  the Add A  Player window the  file GLFMEMBRS.DAT is
        automatically updated to reflect any  changes in the player data.
        If the diagnostics  are enabled the names of  the defined players
        will be displayed as they are written to the data file.
        
        Changing Player Information,
        
        Using this  option the user  can change the  basic information on
        each  player. The  only information  that you  are not allowed to
        change is the player's I.D. number.
        
        Removing Players - (Hot Key = F3)
        
        This  option allows  the user  to select  from the  player list a
        player to be removed. When a  player is removed he/she is deleted
        from the  player roster and  any data files  associated with that
        player are also deleted.
        
        Course Definition - (Hot Key = F4)
        
        This is the selection that allows  the user to define a course to
        the system.  The course name can  be up 30 characters  long. If a
        course name  that is entered  is already in  the system the  user
        will be notified  as such. All courses must  have a course rating
        entered, and  a par above 65.  No courses can be  deleted because
        they may have been used in  entering a score. If an actual course
        changes then a new course can be defined with a different name.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 8
        
        
                
        
        
        Team Definition -
        
        When using the  Golf Scorekeeper to keep track  of league play it
        is necessary  to be able to  define teams from players  listed in
        the system.  This selection lets the  user perform that function.
        The teams  defined with this function  are stored in a  data file
        named  "GLFTEAMS.DAT". This  data is  used to  generate the  team
        scores  report. It  should be  noted that  players can be deleted
        from a team. This is done by  placing the cursor on a player that
        is already on a team and pressing <RETURN>. The user then answers
        YES to  the prompt. If all  the players on a  team are deleted it
        could leave a  gap in the team numbers. This  gap is left because
        the team  numbers are not  repacked. The report  will print fine,
        but the missing team numbers will not be printed.
        
        When the defined  teams are no longer needed  the user can select
        the "Clear Teams" function to erase all previously defined teams.
        All  this really  does is  delete the  file that  stores the team
        definition  data. Once  the data  has been  deleted it  cannot be
        restored.
        
        
        Entering Scores - (Hot Key = F5)
        
        This option  has no sub-menu.  This selection allows  the user to
        enter  scores for  defined players  on defined  courses. The user
        will  be asked  to select  a player  name from  the roster  list.
        Likewise  the user  must select  a course  from the  course list.
        After  making these  selections the  score entry  window will  be
        displayed. Scores  entered are limited  to single digits  on each
        hole. Sorry you duffers, no 13's allowed.
        
        Once the  score has been entered  the user will be  asked if this
        score should  be saved. If the  user selects YES then  this score
        will be stored in a data file. If NO is selected then the user is
        returned to the score card and  allowed to either make changes or
        <ESC> back to the main menu selection bar.
        
        If  the user  chooses to  save the  entered score  then a  second
        prompt will be displayed that asks if the score is a league score
        or not. A YES answer to  this question means that this score will
        be used to  update a player's point totals.  The point totals are
        used in league play to determine team winners. If the question is
        answered NO then this score will only affect the player's average
        NOT  his/her  points.  This   alternative  is  provided  so  that
        intermediate  scores  can  be  entered  between  official  league
        scores.  Players   who  want  to  develop   a  good  history  for
        calculating an handicap might use this option.
        
        Reports -
        
        The following  is a detailed  description of each  of the reports
        that can be generated using  The Golf Scorekeeper. Along with the
        descriptions is also a sample report.
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 9
        
        
                
        
        
        Full Roster,
        
        This is  the first of four  reports that can be  printed from the
        Roster Maintenance menu. This report will list all of the players
        defined  to  the  system  in  alphabetical  order. Along with the
        names, the average and points to shoot for are also printed.
        
        
        
                       The Golf Scorekeeper - Full Roster
        
        
                       Name                   Player #  Points  Avg
        
             Baer, Grizzly                          19    5   +4.00
             Booley, Wooley                         21    3   +7.00
             Bunny, Bugs                            16    5   +7.00
             Carz, Rex                              10    7   +7.00
             Dasher, Haber                          23    0   +7.00
             Doe, John                               1   10   +7.00
             Doe, Mary                               2    8   +7.00
             Doodle, Yankee                         11    0   +7.00
             Duck, Donald                           15    3   +7.00
             Fudd, Elmer                             5   11   +7.00
             Hacker, Able                            8    9   +7.00
             Hancock, John                           3    0   +7.00
             Headroom, Max                          20    0   +7.00
             Kent, Clark                            17    0   +7.00
             Mann, Super                            18   25   +7.00
             Mouse, Mickey                           6    0   +7.00
             Pole, Cain                              9    0   +7.00
             Spade, Sam                             13    0   +6.00
             Stinker, Ima                            7    5   +6.00
             Tamper, Haver                          22    3   +4.00
             Vader, Darth                           14    3   +0.00
             Washington, George                      4    0   -2.00
             Wog, Polly                             12    4   -1.00
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 10
        
        
                
        
        
        League Roster - (Hot Key = <ALT>F2)
        
        This report is much like the  "Full Roster" report except it only
        contains the names of identified "members".
        
                      The Golf Scorekeeper - Member Roster
        
        
                       Name                   Player #  Points  Avg
        
             Baer, Grizzly                          19    5   +4.00
             Booley, Wooley                         21    3   +7.00
             Bunny, Bugs                            16    5   +7.00
             Carz, Rex                              10    7   +7.00
             Doe, John                               1   10   +7.00
             Doe, Mary                               2    8   +7.00
             Duck, Donald                           15    3   +7.00
             Fudd, Elmer                             5   11   +7.00
             Hacker, Able                            8    9   +7.00
             Mann, Super                            18   25   +7.00
             Stinker, Ima                            7    5   +6.00
             Tamper, Haver                          22    3   +4.00
             Vader, Darth                           14    3   +0.00
             Wog, Polly                             12    4   -1.00
        
        
        Player History,
        
        This is a report of a  particular player's history. It will print
        a list of every course the selected player has ever played, along
        with his/her score on that course.  If the player has more scores
        on file than the defined active  number the user will be asked if
        all scores are to be printed or just the active scores.
        
               The Golf Scorekeeper - Latest Scores for Doe, John
        
        Lotta Woods and Water Back 9    76.2 -  12-04-1989  18:38:37
        Par    4 4 5 3 4 3 4 5 4 = 36
        Score  4 6 5 3 5 5 4 5 6 = 43
        Points 2 0 2 2 1 0 2 2 0 = 11
        
        Lotta Woods and Water Back 9    76.2 -  12-04-1989  18:42:56
        Par    4 4 5 3 4 3 4 5 4 = 36
        Score  4 4 4 4 4 4 4 3 4 = 35
        Points 2 2 4 1 2 1 2 8 2 = 24
        
        Boot Hill Public Course Front   68.2 -  12-04-1989  18:43:04
        Par    4 4 5 3 4 4 3 5 4 = 36
        Score  3 4 4 4 4 4 4 3 4 = 34
        Points 4 2 4 1 2 2 1 8 2 = 26
        
        Snob Hill Country Club Back 9   66.2 -  12-04-1989  18:43:22
        Par    5 4 4 3 4 4 3 4 5 = 36
        Score  5 6 7 4 4 4 4 4 5 = 43
        Points 2 0 0 1 2 2 1 2 2 = 12
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 11
        
        
                
        
        
        
        Lotta Woods and Water Back 9    76.2 -  12-04-1989  18:43:32
        Par    4 4 5 3 4 3 4 5 4 = 36
        Score  5 6 7 4 4 4 4 4 5 = 43
        Points 1 0 0 1 2 1 2 4 1 = 12
        
        Lotta Woods and Water Front 9   74.0 -  12-04-1989  18:43:38
        Par    5 4 3 4 4 3 5 4 4 = 36
        Score  5 6 7 4 4 4 4 4 5 = 43
        Points 2 0 0 2 2 1 4 2 1 = 14
        
        Mt Beautiful Front 9            67.3 -  12-04-1989  18:43:54
        Par    4 4 5 3 4 5 4 4 3 = 36
        Score  4 6 7 5 4 4 4 4 5 = 43
        Points 2 0 0 0 2 4 2 2 0 = 12
        
        
        Per Course History,
        
        This report is much like  the "Player History" report except that
        in addition to selecting a player the user also selects a course.
        The report will only print the scores for that particular course.
        
        The Golf Scorekeeper - Latest Scores for Doe, John
        
        
        Lotta Woods and Water Front 9   74.0 -  12-04-1989  18:43:38
        Par    5 4 3 4 4 3 5 4 4 = 36
        Score  5 6 7 4 4 4 4 4 5 = 43
        Points 2 0 0 2 2 1 4 2 1 = 14
        
        Lotta Woods and Water Front 9   74.0 -  12-04-1989  18:44:05
        Par    5 4 3 4 4 3 5 4 4 = 36
        Score  5 6 7 5 4 4 4 4 5 = 44
        Points 2 0 0 1 2 1 4 2 1 = 13
        
        Lotta Woods and Water Front 9   74.0 -  12-04-1989  18:44:21
        Par    5 4 3 4 4 3 5 4 4 = 36
        Score  5 6 4 6 4 4 4 4 5 = 42
        Points 2 0 1 0 2 1 4 2 1 = 13
        
        Lotta Woods and Water Front 9   74.0 -  12-04-1989  18:44:42
        Par    5 4 3 4 4 3 5 4 4 = 36
        Score  4 5 5 6 4 4 6 4 5 = 43
        Points 4 1 0 0 2 1 1 2 1 = 12
        
        Lotta Woods and Water Front 9   74.0 -  12-04-1989  18:45:03
        Par    5 4 3 4 4 3 5 4 4 = 36
        Score  5 5 5 6 4 4 5 4 5 = 43
        Points 2 1 0 0 2 1 2 2 1 = 11
        
        
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 12
        
        
                
        
        
        Team Scores - (Hot Key = <ALT>F3)
        
        This report will  list all teams in numeric  order along with the
        latest  scores for  each member.  The user  will be  asked for  a
        cutoff date when  running this report. If the  latest score found
        is older  than the cutoff date  entered then that player  will be
        flagged as a NOPLAY in the  report. In addition to the individual
        scores  the  report  also  contains  the  course the players last
        played along with  a team score. The team  score is calculated by
        adding the  relative scores of each  team member. Relative scores
        are  calculated based  on how  many points  a player  must get in
        order to  break even. (i.e.  If player John  Doe needs to  make 6
        points and  makes 8 then  his relative score  is +2) This  report
        should  only be  run after  all current  scores have been entered
        into  the system.  In addition  to the  team relative score, each
        player's relative score is also  listed. This is included because
        some  leagues let  each team  have a  possibility of winning more
        than 1 point. Points could be distributed as follows:
        
        One  point for  best team  relative  score,  and one  point if  a
        player's relative score is better than his/her counterpart on the
        opposing team.
        
                    The Golf Scorekeeper - Team Scores Report
                            6:47 PM  December 4, 1989
        
            ************ Scores for Team #1 ***********
        Team #1 - Grizzly Baer
        Boot Hill Public Course Back -- 12-04-1989 18:37:37
        Par    4 5 4 3 4 4 5 3 4 = 36
        Score  4 5 5 3 5 5 4 5 4 = 40
        Points 2 2 1 2 1 1 4 0 2 = 15    Relative points = +10
        
        Team #1 - Bugs Bunny
        Mt Beautiful Back 9 -- 12-04-1989 18:38:13
        Par    5 4 3 4 4 5 4 3 4 = 36
        Score  4 6 5 3 5 5 4 5 6 = 43
        Points 4 0 0 4 1 2 2 0 0 = 13    Relative points = +8
        
        Total Points for team #1 = +18
        
            ************ Scores for Team #2 ***********
        Team #2 - Wooley Booley
        Lotta Woods and Water Back 9 -- 12-04-1989 18:38:02
        Par    4 4 5 3 4 3 4 5 4 = 36
        Score  4 6 5 3 5 5 4 5 6 = 43
        Points 2 0 2 2 1 0 2 2 0 = 11    Relative points = +8
        
        Team #2 - Haber Dasher
        Boot Hill Public Course Front -- 12-04-1989 18:38:30
        Par    4 4 5 3 4 4 3 5 4 = 36
        Score  4 6 5 3 5 5 4 5 6 = 43
        Points 2 0 2 2 1 1 1 2 0 = 11    Relative points = +11
        
        Total Points for team #2 = +19
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 13
        
        
                
        
        
        Course Rankings,
        
        This is a report that lists  all of the courses currently defined
        to the system ranked by their course ratings.
        
        
                      The Golf Scorekeeper - Course Ranking
        
                       Lotta Woods and Water Back 9   76.2
                       Lotta Woods and Water Front 9  74.0
                       Mt Beautiful Back 9            70.2
                       Boot Hill Public Course Front  68.2
                       Mt Beautiful Front 9           67.3
                       Boot Hill Public Course Back   67.2
                       Snob Hill Country Club Back 9  66.2
                       Snob Hill Country Club Front 9 65.2
        
        Points Ranking - (Hot Key = <ALT>F4)
        
        This  report lists  all defined  players sorted  by their current
        points level. It is much like the "Average Scores" report.
        
        
                      The Golf Scorekeeper - Points Ranking
                             * Denotes League Member
        
                  Name                Player #   Avg  Points
        
        Mann, Super                         18  +7.00   25 *
        Fudd, Elmer                         05  +7.00   11 *
        Doe, John                           01  +5.45   10 *
        Hacker, Able                        08  +7.00    9 *
        Doe, Mary                           02  +7.00    8 *
        Carz, Rex                           10  +7.00    7 *
        Stinker, Ima                        07  +6.00    5 *
        Baer, Grizzly                       19  +4.00    5 *
        Bunny, Bugs                         16  +7.00    5 *
        Wog, Polly                          12  -1.00    4 *
        Tamper, Haver                       22  +4.00    3 *
        Vader, Darth                        14  +0.00    3 *
        Booley, Wooley                      21  +7.00    3 *
        Duck, Donald                        15  +7.00    3 *
        Pole, Cain                          09  +7.00    0
        Mouse, Mickey                       06  +7.00    0
        Dasher, Haber                       23  +7.00    0
        Spade, Sam                          13  +6.00    0
        Kent, Clark                         17  +7.00    0
        Headroom, Max                       20  +7.00    0
        Washington, George                  04  -2.00    0
        Doodle, Yankee                      11  +7.00    0
        Hancock, John                       03  +7.00    0
        
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 14
        
        
                
        
        
        Average Ranking - (Hot Key = <ALT>F5)
        
        Like  the  "Points  List"  report  this  report  lists all of the
        currently  defined  players  sorted  by  their  current averages.
        Averages are calculated as a number +/- in reference to par. This
        calculation method takes into  consideration that not all courses
        are  par 36.  (i.e. if  John Doe  has a  +9 average  then he will
        usually shoot 9 over par)
        
        
                     The Golf Scorekeeper - Averages Ranking
                             * Denotes League Member
        
                  Name                Player #   Avg  Points
        
        Washington, George                  04  -2.00    0
        Wog, Polly                          12  -1.00    4 *
        Vader, Darth                        14  +0.00    3 *
        Baer, Grizzly                       19  +4.00    5 *
        Tamper, Haver                       22  +4.00    3 *
        Doe, John                           01  +5.45   10 *
        Spade, Sam                          13  +6.00    0
        Stinker, Ima                        07  +6.00    5 *
        Dasher, Haber                       23  +7.00    0
        Fudd, Elmer                         05  +7.00   11 *
        Hacker, Able                        08  +7.00    9 *
        Carz, Rex                           10  +7.00    7 *
        Headroom, Max                       20  +7.00    0
        Kent, Clark                         17  +7.00    0
        Mann, Super                         18  +7.00   25 *
        Mouse, Mickey                       06  +7.00    0
        Pole, Cain                          09  +7.00    0
        Duck, Donald                        15  +7.00    3 *
        Doodle, Yankee                      11  +7.00    0
        Doe, Mary                           02  +7.00    8 *
        Booley, Wooley                      21  +7.00    3 *
        Bunny, Bugs                         16  +7.00    5 *
        Hancock, John                       03  +7.00    0
        
        
        
        
        ABCD List,
        
        
        In this  report the user selects  the names that will  be used in
        the report from  a list of players currently  in the system. Once
        all  of the  players have  been  selected  they are  listed in  4
        catagories, A, B, C or D with A being the best players to D being
        the players  that curse the  most. This ranking  is based on  the
        players current average.
        
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 15
        
        
                
        
        
                     The Golf Scorekeeper - ABCD Player List
                    A  Players - December 4, 1989   18:48:15
        
                       Name                Player #   Avg  Points
        
             Washington, George                  04  -2.00   0
             Wog, Polly                          12  -1.00   4
             Vader, Darth                        14  +0.00   3
             Baer, Grizzly                       19  +4.00   5
             Tamper, Haver                       22  +4.00   3
             Doe, John                           01  +5.45   10
        
                     The Golf Scorekeeper - ABCD Player List
                    B  Players - December 4, 1989   18:48:15
        
                       Name                Player #   Avg  Points
        
             Spade, Sam                          13  +6.00   0
             Stinker, Ima                        07  +6.00   5
             Dasher, Haber                       23  +7.00   0
             Fudd, Elmer                         05  +7.00   11
             Hacker, Able                        08  +7.00   9
             Carz, Rex                           10  +7.00   7
        
                     The Golf Scorekeeper - ABCD Player List
                    C  Players - December 4, 1989   18:48:15
        
                       Name                Player #   Avg  Points
        
             Headroom, Max                       20  +7.00   0
             Kent, Clark                         17  +7.00   0
             Mann, Super                         18  +7.00   25
             Mouse, Mickey                       06  +7.00   0
             Pole, Cain                          09  +7.00   0
             Duck, Donald                        15  +7.00   3
        
                     The Golf Scorekeeper - ABCD Player List
                    D  Players - December 4, 1989   18:48:15
        
                       Name                Player #   Avg  Points
        
             Doodle, Yankee                      11  +7.00   0
             Doe, Mary                           02  +7.00   8
             Booley, Wooley                      21  +7.00   3
             Bunny, Bugs                         16  +7.00   5
             Hancock, John                       03  +7.00   0
        
        
        
        
        
        
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 16
        
        
                
        
        
        ABCDE List,
        
        In this  report the user selects  the names that will  be used in
        the report from  a list of players currently  in the system. Once
        all  of the  players have  been  selected  they are  listed in  5
        catagories, A, B,  C, D or E with  A being the best players  to D
        being the players  that curse the most. This  ranking is based on
        the players current average.
        
        
                    The Golf Scorekeeper - ABCDE Player List
                    A  Players - December 4, 1989   18:48:25
        
                       Name                Player #   Avg  Points
        
             Washington, George                  04  -2.00   0
             Wog, Polly                          12  -1.00   4
             Vader, Darth                        14  +0.00   3
             Baer, Grizzly                       19  +4.00   5
             Tamper, Haver                       22  +4.00   3
        
                    The Golf Scorekeeper - ABCDE Player List
                    B  Players - December 4, 1989   18:48:25
        
                       Name                Player #   Avg  Points
        
             Doe, John                           01  +5.45   10
             Spade, Sam                          13  +6.00   0
             Stinker, Ima                        07  +6.00   5
             Dasher, Haber                       23  +7.00   0
             Fudd, Elmer                         05  +7.00   11
        
                    The Golf Scorekeeper - ABCDE Player List
                    C  Players - December 4, 1989   18:48:26
        
                       Name                Player #   Avg  Points
        
             Hacker, Able                        08  +7.00   9
             Carz, Rex                           10  +7.00   7
             Headroom, Max                       20  +7.00   0
             Kent, Clark                         17  +7.00   0
             Mann, Super                         18  +7.00   25
        
                    The Golf Scorekeeper - ABCDE Player List
                    D  Players - December 4, 1989   18:48:26
        
                       Name                Player #   Avg  Points
        
             Mouse, Mickey                       06  +7.00   0
             Pole, Cain                          09  +7.00   0
             Duck, Donald                        15  +7.00   3
             Doodle, Yankee                      11  +7.00   0
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 17
        
        
                
        
        
                    The Golf Scorekeeper - ABCDE Player List
                    E  Players - December 4, 1989   18:48:26
        
                       Name                Player #   Avg  Points
        
             Doe, Mary                           02  +7.00   8
             Booley, Wooley                      21  +7.00   3
             Bunny, Bugs                         16  +7.00   5
             Hancock, John                       03  +7.00   0
        
        
        Foursome List,
        
        In this  report the user selects  the names that will  be used in
        the report from  a list of players currently  in the system. Once
        this  has been  done the   players are  listed in  foursomes that
        consist of  A, B, C and  D players. The players  on each team are
        selected as follows:
        
                              The top A player
                              The bottom B player
                              The top C player
                              The bottom D player
        
        If an odd number of players is selected the leftover players will
        be printed in a seperate list. These players will be D players.
        
        
                      The Golf Scorekeeper - Foursome List
                           December 4, 1989   18:48:37
        
                       Name                Player #   Avg  Points
        
             A - Washington, George              04  -2.00   0
             B - Fudd, Elmer                     05  +7.00   11
             C - Hacker, Able                    08  +7.00   9
             D - Doe, Mary                       02  +7.00   8
        
             A - Wog, Polly                      12  -1.00   4
             B - Dasher, Haber                   23  +7.00   0
             C - Carz, Rex                       10  +7.00   7
             D - Doodle, Yankee                  11  +7.00   0
        
             A - Vader, Darth                    14  +0.00   3
             B - Stinker, Ima                    07  +6.00   5
             C - Headroom, Max                   20  +7.00   0
             D - Duck, Donald                    15  +7.00   3
        
             A - Baer, Grizzly                   19  +4.00   5
             B - Spade, Sam                      13  +6.00   0
             C - Kent, Clark                     17  +7.00   0
             D - Pole, Cain                      09  +7.00   0
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 18
        
        
                
        
        
             A - Tamper, Haver                   22  +4.00   3
             B - Doe, John                       01  +5.45   10
             C - Mann, Super                     18  +7.00   25
             D - Mouse, Mickey                   06  +7.00   0
        
        The following players were left out of the foursome list because
        an odd number of players were selected:
        
             Booley, Wooley                      21  +7.00   3
             Bunny, Bugs                         16  +7.00   5
             Hancock, John                       03  +7.00   0
        
        
        Fivesome List,
        
        In this  report the user selects  the names that will  be used in
        the report from  a list of players currently  in the system. Once
        this  has been  done the   players are  listed in  fivesomes that
        consist of A, B, C, D and E players. The players on each team are
        selected as follows:
        
                              The top A player
                              The bottom B player
                              The top C player
                              The bottom D player
                              The top E player
        
        If an odd number of players is selected the leftover players will
        be printed in a seperate list. These players will be E players.
        
        
                      The Golf Scorekeeper - Fivesome List
                           December 4, 1989   18:48:46
        
                       Name                Player #   Avg  Points
        
             A - Washington, George              04  -2.00   0
             B - Stinker, Ima                    07  +6.00   5
             C - Dasher, Haber                   23  +7.00   0
             D - Mouse, Mickey                   06  +7.00   0
             E - Pole, Cain                      09  +7.00   0
        
             A - Wog, Polly                      12  -1.00   4
             B - Spade, Sam                      13  +6.00   0
             C - Fudd, Elmer                     05  +7.00   11
             D - Mann, Super                     18  +7.00   25
             E - Duck, Donald                    15  +7.00   3
        
             A - Vader, Darth                    14  +0.00   3
             B - Doe, John                       01  +5.45   10
             C - Hacker, Able                    08  +7.00   9
             D - Kent, Clark                     17  +7.00   0
             E - Doodle, Yankee                  11  +7.00   0
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 19
        
        
                
        
        
             A - Baer, Grizzly                   19  +4.00   5
             B - Tamper, Haver                   22  +4.00   3
             C - Carz, Rex                       10  +7.00   7
             D - Headroom, Max                   20  +7.00   0
             E - Doe, Mary                       02  +7.00   8
        
        The following players were left out of the fivesome list because
        an odd number of players were selected:
        
             Booley, Wooley                      21  +7.00   3
             Bunny, Bugs                         16  +7.00   5
             Hancock, John                       03  +7.00   0
        
        
        
        
        
        
        
        
        
        
        
        I hope this  manual has been  helpful in answering  any questions
        you have about  The Golf Scorekeeper. If their  are any questions
        that you have after reading this  document please send them to me
        in the mail.  I will be happy to answer any questions.
        
        
        
        P.S. It  does not matter if  you have registered this  product or
        not, if  you are having  trouble using  it  in any way  I want to
        know!
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        The Golf Scorekeeper User's Manual V1.0               Page 20
        
        
        
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2086

     Volume in drive A has no label
     Directory of A:\

    GOLFSKOR EXE    186568   6-09-90  12:27p
    GOLFSKOR HLP     26859   6-09-90  12:25p
    GOLFSKOR DOC     56735   6-09-90   1:08p
    REGISTER FRM      2770  12-01-89   8:43p
    README            5008   6-09-90   1:27p
    GO       BAT        38   9-30-87   3:44p
    GO       TXT       806   1-01-80   8:48a
    FILE2086 TXT      2665   7-13-90  11:39p
            8 file(s)     281449 bytes
                           36864 bytes free
