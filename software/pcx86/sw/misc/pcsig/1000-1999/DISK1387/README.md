---
layout: page
title: "PC-SIG Diskette Library (Disk #1387)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1387/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1387"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NCAAPOOL & NFLPOOL"

    NCAAPOOL makes handling company pools for NCAA basketball a lot easier
    and less time consuming.  Normally there are several people who would
    like to know their statistics after each round of games is played, and
    doing this may take hours of work.  There is also the possibility of
    making a mistake in one of the records.
    
    NCAAPOOL solves all that.  All it needs are the first round team match-
    ups of the 64 basketball teams in the four divisions.  You then enter
    the names of the pool players, and the choices of their teams they
    think will win in each of the rounds of games, until the final winner is
    reached.  At any time afterwards you can enter the results of each round
    of the games, and immediately get a printout of the individual results
    for each pool player, showing which teams chosen won or lost.  A summary
    report, showing the total winning teams each player guessed correctly,
    can then be sent to the screen, printer, or both.
    
    NFLPool does everything NCAAPool does and does it just as well for your
    local NFL football pool.  It eliminates the long hours of handwork
    normally required to stay on top of the games.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1387.TXT

{% raw %}
```
Disk No: 1387                                                           
Disk Title: NCAAPool & NFLPool                                          
PC-SIG Version: S2.1                                                    
                                                                        
Program Title: NCAAPool                                                 
Author Version: 2.06                                                    
Author Registration: $20.00; joint registration with NFLPOOL $29.00     
Special Requirements: None.                                             
                                                                        
NCAAPOOL makes handling company pools for NCAA basketball a lot easier  
and less time consuming.  Normally there are several people who would   
like to know their statistics after each round of games is played, and  
doing this may take hours of work.  There is also the possibility of    
making a mistake in one of the records.                                 
                                                                        
NCAAPOOL solves all that.  All it needs are the first round team        
match-ups of the 64 basketball teams in the four divisions.  You then   
enter the names of the pool players, and the choices of their teams they
think will win in each of the rounds of games, until the final winner is
reached.  At any time afterwards you can enter the results of each round
of the games, and immediately get a printout of the individual results  
for each pool player, showing which teams chosen won or lost.  A summary
report, showing the total winning teams each player guessed correctly,  
can then be sent to the screen, printer, or both.                       
Program Title: NFLPool                                                  
Author Version: 2.0                                                     
Author Registration: $20.00; joint registration with NCAAPOOL $29.00    
Special Requirements: None.                                             
                                                                        
NFLPool does everything NCAAPool does and does it just as well for your 
local NFL football pool.  It eliminates the long hours of handwork      
normally required to stay on top of the games.                          
*******************END*******************                               
                                                                        
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
║               <<<<  Disk #1387  NCAAPOOL & NFLPOOL >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the programs, type: NCAAPOOL (press Enter)                     ║
║                              NFLPOOL (press Enter)                      ║
║                                                                         ║
║ To copy the documentation to your printer, type:                        ║
║                              COPY NCAAPOOL.DOC PRN (press Enter)        ║
║                              COPY NFLPOOL.DOC PRN (press Enter)         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## NCAAPOOL.DOC

{% raw %}
```



        NCAAPOOL                         1                      version 2.06
        




                                      NCAAPOOL

                               A Pool Management Tool

                                         by

                                   Tom Cunningham




        1 Introduction.


              If  you've  ever organized  a  pool  on  the  NCAA  basketball
        tournament, you know what a hassle it can  be.  First the easy part:
        You  make a lot of copies of the tournament tree from the  newspaper
        and distribute them and get  everyone  to fill them out and returned
        to  you in time.  Then the REAL hassles start: Every round you  have
        to check a couple  of dozen of these sheets and tabulate the results
        in  some sort of meaningful way.   You  give  out  the  results  and
        everyone wants to know why they aren't winning.  You have to spend a
        couple of hours compiling  detailed  individual  statistics for each
        round to keep everyone  satisfied.   It's  a  hassle.   NCAAPOOL was
        created to eliminate that hassle. 

              NCAAPOOL was created to manage office  pools  for  the  annual
        NCAA  basketball  tournament.  Pool participants would fill out  the
        tournament  tree found in any newspaper's sports section,  selecting
        who they  think  would win each game and each resulting game between
        winners  in  previous  rounds  until  the  final  tournament  winner
        emerged.    There   are  currently   64   teams   that   start   the
        single-elimination tournament,  so  63  games  over  the  span  of 6
        rounds, taking about two weeks, need to be played to  determine  the
        ultimate winner. 

              The problem is that the pool  participants  want  to  know how
        they are  doing  as  the tournament progresses, and taking out their
        choice  sheets   and  marking  them  against  the  progress  of  the
        tournament is  a  time-consuming  pain.  The problem gets worse when
        different  participants  use  different  newspapers  to   get  their
        tournament  tree setups, so there are different forms that slow  the
        tallying process and encourage mistakes. 

              Out of  this  came  NCAAPOOL.  Once the basic first-round team
        structure  is   entered,   everything   is   automatic.    The  pool
        participants' choices  are  easy  to  enter  even  if they are using
        different  basic  forms  (since  the  underlying  structure  of  the
        tournament is set by the first-round pairings  which NCAAPOOL tracks
        automatically).  The results of  the  tournament can be entered on a
        round-by-round  basis,  and  reports  for  both individuals and  the
        overall  pool generated as you desire.  NCAAPOOL  takes  the  hassle








        NCAAPOOL                         2                      version 2.06
        



        (and a  good  many  of  the  potential mistakes) out of organizing a
        pool. 




        2 Licensing Agreement and Registration.


              NCAAPOOL  has  taken  many hours to program and debug.  It  is
        copyrighted software  and  it  is  not  in the public domain.  It is
        distributed  under  the  Shareware  concept.  You may  try  out  the
        program and  distribute  it  freely (so long as both the program and
        this  documentation  file  are  distributed  together).  You have  a
        limited license to use NCAAPOOL on a  purely  trial  basis.   If you
        continue to use NCAAPOOL you must register it by sending a check for
        $20 to:

        


          Tom Cunningham
          P.O. Box 3015
          Atlanta, GA 30301-3015

              When you register, you gain the right to continue  to use this
        software.   In  addition, I will send  you  the  latest,  registered
        version of NCAAPOOL, and further updates will be  made  available at
        nominal cost. 

              The  registered version of NCAAPOOL also permits weighting  of
        tournament round results.  That is, the  registered version lets you
        give more weight to  some  rounds  than others (i.e., round 2 may be
        worth 2 points, round 3, 3 points, and  so  on)  in a manner totally
        under your control. 

              You may distribute copies of NCAAPOOL only under the condition
        that the program is unmodified and this  complete  NCAAPOOL.DOC file
        is included. 

              Your registration makes  products  like these possible.  Thank
        you for your support! 



















        NCAAPOOL                         3                      version 2.06
        







        3 Registration Form.


              To  register NCAAPOOL (and NFLPOOL) fill in the information on
        this page and send it in. 

              _____ I  would  like  to  register NCAAPOOL and receive my own
        copy  of  this registered version of the program.  I enclose a check
        for $20.

              _____  I would like to register my use of NCAAPOOL and NFLPOOL
        (described below).  I enclose a check of $29 (normal registration of
        both would be $40).

        


        Send checks to:

          Tom Cunningham
          P.O.  Box 3015
          Atlanta, GA 30301-3015



          NAME: _____________________________________________________

          ADDRESS: __________________________________________________

             __________________________________________________

          COMPUTER: _________________________________________________

          WHERE DID YOU GET NCAAPOOL: _______________________________

          DISK SIZE:    5.25"    3.5"

          COMMENTS AND SUGGESTIONS:



















        NCAAPOOL                         4                      version 2.06
        







        4 Legal Disclaimer.


              This  software  is  provided strictly on an "as is" basis.   I
        make no warranty of  any  kind, expressed or implied, including, but
        not limited to, any warranties of merchantability and/or fitness for
        any particular purpose.  I shall not  be  liable  for  any  damages,
        whether direct, indirect,  special  or  consequential,  arising from
        failure  of  the  product  to operate in the manner desired  by  the
        user.  I shall not  be  liable  for  any  damage to data or property
        which may be  caused  directly  or  indirectly  by  the  use of this
        product.   I shall not  be  liable  to  the  user  for  any  damages
        including, but not limited to, any lost profits,  lost  savings,  or
        other incidental or consequential  damages  arising  out of your use
        of, or inability to  use, the product, or for any claim by any other
        party. 

        




        5 Running NCAAPOOL.


              To start NCAAPOOL, simply  copy  the program NCAAPOOL.EXE onto
        the disk or directory you intend  to use (it is never a good idea to
        work from  your original disk.  Always work with a copy).  Make sure
        the  logged  directory  corresponds  to  the location of the program
        (i.e., if you are running the program from  the  A: disk drive, make
        sure you have the program on the disk in A:  and  have an A> prompt,
        or put  the  program  in,  say,  C:\NCAAPOOL,  and  change  to  that
        directory),  and  type  NCAAPOOL.  The  program takes it from there,
        creating the three necessary data  files and moving on to setting up
        the tournament. 

        


        5.1 Setting up the tournament.

              The NCAA  tournament is comprised of four divisions: the East,
        the  Southeast,  the  Midwest,  and  the West. Each division has  16
        teams,  making  a  total  of  64. The four division winners are then
        paired in  the  semi-finals,  and  those  two  winners  play  in the
        finals. 

              NCAAPOOL asks you to enter the  64  team  names  according  to
        their first-round sequence.  It begins with Division 1 (see the next








        NCAAPOOL                         5                      version 2.06
        



        paragraph for an explanation of Divisions), team 1. Type in the team
        name  and  hit <return>. You are then asked for team 2, which  plays
        team  1 in the first round (the team numbers are NOT the seeding  in
        the tournament).  Similarly, team  3 plays team 4, 5 plays 6, and so
        on.  Thus in round  2  (which  NCAAPOOL  handles for you -- you only
        enter team  names  once) the winner of the 1 versus 2 game meets the
        winner  of the 3 versus 4 game.  All that is happening is  that  you
        are entering the first round teams  in  the  sequence  in which they
        appear in the beginning  of  the  tournament  tree.  You do the same
        thing with Division 2, 3, and  4  (the team numbers continue through
        64 rather than resetting with each Division --  I have found this to
        be less confusing).   Every  16  teams  you  are asked to check your
        work, since everything in  the  program  works  off  of this initial
        tree.   The  team  names  should appear in the same order as in  the
        tournament tree in the newspaper (with  the teams in the first round
        games  appearing  next  to   their  opponent).   See  the  following
        example. 


        
        EXAMPLE:

        DIVISION 1
        
         __(team 1 name*)___
         __(team 2 name*)___ > --(winner of 1 v 2)--
                                                    > -- winner ... etc...
         __(team 3 name*)___
         __(team 4 name*)___ > --(winner of 3 v 4)--

           .
           .
           .

        *You enter  only  these  names.   NCAAPOOL  tracks  the  rest of the
        tournament for you. 

              Why NCAAPOOL does not use division names: The  pairings in the
        semi-final round are not always the same.  That  is,  the  winner of
        the East division may play the winner of  the Southeast division one
        year, and next year play the  winner of the West, or the Midwest, or
        even the Southeast again.  Because of  this,  I  haven't  given  the
        divisions names,  just numbers.  The winner of Division 1 is assumed
        to meet the winner of Division 2 in the semi-finals (and Division  3
        meets Division 4). Look at the organization of  the  tournament this
        year and make sure that  you make the correct pairings of divisions,
        as,  again,  entering the 64 teams in the proper  initial  order  is
        critical.  For  example,  if  the semi-finals have the winner of the
        East meeting  the  winner  of  the  Midwest  and  the  winner of the
        Southeast meeting the winner  of  the  West,  then  the East and the
        Midwest must be Divisions 1 and 2 (or 3 and 4) and the Southeast and
        the West must then be Divisions 3 and 4 (or 1 and 2).









        NCAAPOOL                         6                      version 2.06
        



        



        EXAMPLE:

              Semi-Finals               Finals
        
        __(Division 1 winner)___
        __(Division 2 winner)___ > --(winner of 1 v 2)--

                                                             > --WINNER
        __(Division 3 winner)___
        __(Division 4 winner)___ > --(winner of 3 v 4)--

              You really shouldn't worry too much about making a mistake  in
        setting  up  the  tournament.   As  soon   as   you  start  entering
        participants' choices, you'll see if  you got it right.  If you make
        a  mistake, simply exit NCAAPOOL and  delete  the  file  MASTER.DAT.
        NCAAPOOL will then start over. 

        


        5.2 Entering participants' choices.

              After you have entered the tournament structure, you are asked
        the number of pool participants, their names,  and  their  choices. 
        Since  the  entire structure of the tournament is determined by  the
        first-round setup you've already  entered,  entering  the choices of
        the participants is easy!  Round 1 consists of 32 games, the winners
        of which enter round 2. The 16 round  2 winners move to round 3. The
        8 round 3 winners  go to round 4, etc.  NCAAPOOL tracks the outcomes
        of the  games  chosen  and  presents you, the pool manager, with the
        appropriate team names from which  to  chose  for  each game of each
        round.  When you have finished entering the participants, and  every
        time you re-start NCAAPOOL, you will be asked  if  you wish to enter
        additional participants.  NCAAPOOL allows you to add participants at
        any time, though how you wish to deal with latecomers is up to you. 

        


        5.3 Entering and updating the tournament results.

              After the tournament structure  and  participants' choices are
        entered the pool is set up and NCAAPOOL will ask if you have round 1
        results.   If not, simply answer no, and run NCAAPOOL when  you  get
        the  first  round  outcome.   Whenever  you  re-start  NCAAPOOL,  it
        automatically brings you  to  the latest round for which it does not
        have results.  For example,  if  you  exited  NCAAPOOL after you had
        everyones  choices, but the tournament had yet to  start,  when  you
        re-start  NCAAPOOL  it  will ask for round 1 results.   If  you  had








        NCAAPOOL                         7                      version 2.06
        



        already entered results for some rounds, it will ask immediately for
        the  appropriate  round  (if  NCAAPOOL  has the complete  tournament
        outcome, it will  skip  this entirely).  Again, since the tournament
        structure is determined by the first round, NCAAPOOL will track  the
        winners  and  the   match-ups   and  simply  present  you  with  the
        appropriate choices for the game. 

        


        5.4 Getting the results.

              Any time you finish  entering  results,  NCAAPOOL  asks if you
        would  like  results  printed.   First, NCAAPOOL asks if  you  would
        consensus picks.  This lists the participants' choices for the Final
        Four, the Final Two  and the ultimate winner of the tournament.  You
        really only need to print this once, and  probably  ought  to  do it
        immediately after you've entered  all your participants' choices, so
        you can keep track of the big upsets  as the tournament progresses. 
        (This is something you might want to photocopy for everyone, so they
        can see where their choices match up with everyone else's.) 

              Next,  NCAAPOOL  asks  if you would like individual  results. 
        This prints the  results  for  each  individual's  choices  for  the
        tournament  so far.   If  you  would  like  results  for  individual
        participants,  they  must  be  printed because the results cannot be
        meaningfully displayed on the  screen  (for  example,  if  you print
        individual results at the end of the  tournament,  each  participant
        will see the result of 63 choices spread over 6 rounds). 

              After NCAAPOOL asks about  individual  reports,  it  offers  a
        tally  of  the  overall pool, showing the number of correct  choices
        everyone has made.  (This is the whole point of the pool!)  This can
        be printed, or displayed on the  screen,  or  both.   The registered
        version of NCAAPOOL provides for a weighting system  that you select
        that allows for different rounds to be given different values (i.e.,
        each correct pick in each round may be given a different value  that
        correct picks in other rounds). 

        


        5.5 Resetting NCAAPOOL for another tournament.

              Whenever NCAAPOOL is started it checks for  the  existance and
        correctness of three .DAT files.  If it doesn't find  them  it  will
        create them.  To re-use  NCAAPOOL  for  another  tournament,  simply
        erase the files MASTER.DAT, PLAYERS.DAT and OUTCOME.DAT.

        











        NCAAPOOL                         8                      version 2.06
        







        6 A Plug for NFLPOOL.


              NFLPOOL is quite similar to NCAAPOOL in that it helps you keep
        track  of  participants'  choices through the entire NFL season.  It
        will  help  you  manage football pools that are organized along  two
        separate lines: week-by-week choices as the season progresses, or  a
        full-season  pick occuring at the beginning of the  season  (or  any
        combination  or permutation along the way).  You can start the  pool
        in any week, and skip weeks, or whatever.  NFLPOOL is designed to be
        as flexible as possible to make it as useful as possible! 

              Normally NFLPOOL registration is  $20,  but  if  you  register
        NFLPOOL and NCAAPOOL together, the fee is $29,  a  savings of 27% on
        both. 

              Thank you for using and registering NCAAPOOL!

        















```
{% endraw %}

## NFLPOOL.DOC

{% raw %}
```



        NFLPOOL                           1                    version  2.00
        




                                       NFLPOOL

                  A Pool Management Tool for the NFL Regular Season

                                         by

                                   Tom Cunningham

        




        1 Introduction.


              Organizing a pool for the NFL is always  a  lot more work than
        it first appears.  Every week you  have  to distribute a schedule to
        the pool participants, which is easy enough, but  then  Tuesday  you
        have  to  score  everyone's  selection  and  add  that to everyone's
        previous  results,  and  somewhere  in the middle of the season  the
        total  amount  of  paper  on  hand  starts to get very, very large. 
        Simply compiling the  standings  can  take  quite  a bit of time, if
        everything  goes  well.   If  you make any mistakes, you can  forget
        about lunch that day... 

              NFLPOOL was designed to  eliminate  these  sorts  of hassles. 
        NFLPOOL was created specifically to  manage  office  pools  for  NFL
        season.   Pool participants tell you who they think  will  win  each
        week's games,  and  NFLPOOL does the rest.  Results are cumulatively
        tabulated automatically and potential mistakes are minimized. 

              NFLPOOL takes the hassles out of managing your NFL pool. 

        




        2 Licensing Agreement.


              NFLPOOL has taken many hours to  program  and  debug.   It  is
        copyrighted  software and it is not in the  public  domain.   It  is
        distributed under  the  Shareware  concept.   You  may  try  out the
        program and distribute it freely (so long as  both  the  program and
        this  documentation  file  are  distributed  together).  You have  a
        limited license  to  use  NFLPOOL  on  a purely trial basis.  If you
        continue to use NFLPOOL you must register it by sending a check  for
        $20 to:










        NFLPOOL                           2                    version  2.00
        




             Tom Cunningham
             P.O.  Box 3015
             Atlanta, GA 30301

              When you register, you  gain the right to continue to use this
        software.   In  addition,  if  you  are  not  registering the latest
        version of NFLPOOL, I will send  it  to  you.   All registered users
        will receive the next  update,  as well.  Additional updates will be
        made available at nominal cost. 

        




        3 Legal Disclaimer.


              This software is provided  strictly  on  an  "as is" basis.  I
        make no warranty of any kind, expressed or  implied,  including, but
        not limited to, any warranties of merchantability and/or fitness for
        any  particular  purpose.   I  shall not be liable for any  damages,
        whether direct, indirect,  special  or  consequential,  arising from
        failure  of  the product to operate in the  manner  desired  by  the
        user.  I shall not  be  liable  for  any  damage to data or property
        which  may  be  caused  directly  or  indirectly  by the use of this
        product.  I shall  not  be  liable  to  the  user  for  any  damages
        including, but not limited  to,  any  lost profits, lost savings, or
        other incidental or consequential damages arising out  of  your  use
        of, or inability to use, the  product, or for any claim by any other
        party. 





























        NFLPOOL                           3                    version  2.00
        







        4 Registration.


              To  register NFLPOOL fill in the information on this page  and
        send it in.  Registration  supports  continued  development  of  the
        product, and gives you the right to continue its use. 

              To  further  induce  you  to  register,  when I  receive  your
        registration I will send you the current version  of  NFLPOOL if you
        are not already using it, and all registered  users will receive the
        next update as well,  if  and when it becomes available, and further
        updates  will  be available  at  nominal  cost,  so  that  there  is
        substantial advantage in registration. 

              THANKS FOR YOUR SUPPORT!

        

        ____ I would like to register NFLPOOL. I enclose a check for $20.

        ____ I  would  like  to  register  my  use  of  NFLPOOL and NCAAPOOL
        (described below).  I enclose a check of $29 (normal registration of
        both would be $40).

        


        Send checks to:

           Tom Cunningham
           P.O.  Box 3015
           Atlanta, GA 30301-3015



          NAME: _____________________________________________________

          ADDRESS: __________________________________________________

            __________________________________________________

          COMPUTER: _________________________________________________

          WHERE DID YOU GET THIS PROGRAM: ___________________________

          DISK SIZE: 5.25" 3.5"

          COMMENTS AND SUGGESTIONS:









        NFLPOOL                           4                    version  2.00
        







        5 Running NFLPOOL.


              To start NFLPOOL, simply copy the program NFLPOOL.EXE onto the
        disk or directory you intend to use (it is never a good idea to work
        from your original disk.  Always work with a copy).  Make  sure  the
        logged directory corresponds to the location  of  the program (i.e.,
        if you are running the program from the A: disk drive, make sure you
        have the program on the disk in A: and have an A> prompt, or put the
        program in, say, C:\NFLPOOL, and change to that directory), and type
        NFLPOOL. The program takes it from there. 

              If this is the first time you have run  NFLPOOL,  the  program
        will look  for  some  necessary files and when it doesn't find them,
        will ask you if it is OK to create them (answer Y unless you want to
        change something before you begin).  When  you  restart  NFLPOOL, it
        will immediately find the  files,  and  you will not see the message
        again. 

              When  you start NFLPOOL,  you  get  a  menu  with  4  choices:
        entering  schedule data, entering player choice data, entering  game
        results, and getting the pool results. 

        


        5.1 Schedule data.

              Entering schedule data is  easy.   NFLPOOL asks you which week
        of the season you wish to enter.  There is no need to enter the game
        schedule in any particular order.  For  example,  you can start with
        week 8, then later add week 10, or week 1 or whatever.  Thus you can
        start pools in the middle of the season, or do the  whole  season at
        once, or anything combination  or  permutation  you  want.   NFLPOOL
        gives you an alphabetical  list of the NFL teams, and you select the
        appropriate  game  pairs by  number.   NFLPOOL  repeats  the  week's
        choices when you are finished to give you  a chance to change things
        if you make a mistake.  There are now  BYE  weeks  in the schedule. 
        Simply select BYE 1, 2, 3  or 4 for the opponents for the teams that
        have  the  week  off.  (If there are no teams off, simply have  BYEs
        "play" against each other, e.g., BYE 1 against BYE 2.)

              NFLPOOL runs off the  schedule  data,  so  you  need  to enter
        schedule data before you do other things, but if you haven't entered
        the data, NFLPOOL will let you know. 

        










        NFLPOOL                           5                    version  2.00
        



        5.2 Entering participants' choices.

              The  first  thing  NFLPOOL  does  when  you ask  it  to  enter
        participant's  choices  is  tell   you  how  many  participants  you
        currently have  in  your pool, and ask if you want to add more.  The
        first  time you run NFLPOOL, of course, there  are  no  participants
        records  at  all,  so you must add more!  Each participant is  given
        their own file, which this section of the program sets up.  It  is a
        good idea to set up everyone's  files  at  once,  but  not necessary
        since you can add more later, and edit later, too.  See below. 

              (NFLPOOL has a maximum  of 100 participants.  If you have more
        participants than this,  let me know, as there is an easy way to run
        multiple pools without much additional hassle.) 

              Once you've  established  the  number  of  pool  participants,
        NFLPOOL asks you which  week  of  the  season  for which you wish to
        enter  choices.   Generally,  I would think this would correspond to
        the current week.  For  example,  if  this is the second week of the
        season, you would enter 2. You can, however, select  any  week.   If
        you have not entered schedule data for that week, NFLPOOL will  tell
        you, and bring you back to the main menu. 

              Since the  schedule for that week is already entered, entering
        the  choices  of  the participants is easy!  NFLPOOL  give  you  the
        contestants' names and the  teams  in  the game and asks you who the
        contestant  picked.   You  simply enter the choices from the  menu. 
        Teams that have a bye  will  appear  in  the selection process.  You
        need to enter a  choice,  but  the  choice does not matter, as teams
        with a bye are not counted in the result tabulation. 

              If you have added participants (or  made  a  mistake earlier),
        you  may  want to enter choices for a week that you've already  done
        for everyone else.  No problem.   Simply select the week you wish to
        work on, and if  selections  are  already present for a participant,
        NFLPOOL will ask if you wish to write over them.  If  you've  made a
        mistake, answer yes (this  is  how  you  can  edit  an  individual's
        choices if you make a mistake entering them),  otherwise answer no. 
        NFLPOOL will examine all the players' choices for that week,  asking
        the  same  question.   If  NFLPOOL  finds  no choices entered for  a
        participant, it automatically goes  to through the schedule for that
        week.  Thus, adding new members' choices is a breeze!  You just pick
        the week you want and when NFLPOOL gets  to  the  participants whose
        choices you haven't entered, it goes through the entering routine. 

        


        5.3 Entering game results.

              After the the games  are  played,  you  select this option and
        NFLPOOL  asks you who won the scheduled games (again, if you  didn't
        enter the schedule for the week, you will be  sent  back to the main








        NFLPOOL                           6                    version  2.00
        



        menu).  The results of teams with a bye must be entered, but, again,
        these results are not counted in tabulating results. 

        


        5.4 Getting the results.

              When you select this option, NFLPOOL  asks  if  you would like
        results for a particular week, or the entire season.  This is pretty
        self-explanatory.   If  you  answer that you would like a particular
        week, NFLPOOL asks which  one.   In either case NFLPOOL then asks if
        you  would  like  individual results printed.  If  you  answer  yes,
        NFLPOOL  compares  the  weekly  selections made by the  participants
        against  the  game  results  (if there are no results for the  week,
        NFLPOOL  reports this).  It then prints  the  choice  made  and  the
        outcome of the game.   Finally,  it  reports  the  number of correct
        choices  made.  It is at this point that NFLPOOL actually  does  the
        tabulation, so if  you have a large number of participants, the disk
        drive may be running for quite some time.  Running NFLPOOL on a hard
        disk is a good idea if you have a lot of people  involved,  but even
        then  it  may  still  be   a  couple  of  minutes  to  complete  the
        tabulation.  Even if you do not want individual results printed, the
        tabulation may take some time. 

              Next, NFLPOOL asks how you would like overall results: just on
        the screen, just the  printer,  or  both.   This  is  a tally of the
        overall  pool,  showing the number of correct choices  everyone  has
        made.  (This is the whole point of the pool!)  This can be  printed,
        or displayed on the screen, or both. 

        


        5.5 Resetting NFLPOOL for another tournament.

              To  re-use  NFLPOOL  for another tournament, simply erase  the
        files all the files beginning  with  NFLPOOL  except for NFLPOOL.exe
        and NFLPOOL.doc.

        




        6 A Plug for NCAAPOOL.


              If you've  ever  organized  a  pool  on  the  NCAA  basketball
        tournament, you know what a hassle it can  be.  First the easy part:
        You  make a lot of copies of the tournament tree from the  newspaper
        and distribute them and get everyone to fill them  out  and returned
        to  you in time.  Then the REAL hassles start: Every round you  have








        NFLPOOL                           7                    version  2.00
        



        to check a couple  of dozen of these sheets and tabulate the results
        in  some  sort  of  meaningful  way.   You  give out the results and
        everyone wants to know why they aren't winning.  You have to spend a
        couple of hours compiling  detailed  individual  statistics for each
        round to  keep  everyone  satisfied.   It's  a hassle.  NCAAPOOL was
        created to eliminate that hassle. 

              NCAAPOOL was created  to  manage  office  pools for the annual
        NCAA  basketball  tournament.  Pool participants would fill out  the
        tournament  tree found in any newspaper's sports section,  selecting
        who they think would win each game and  each  resulting game between
        winners  in  previous  rounds  until  the  final  tournament  winner
        emerged.    There   are  currently   64   teams   that   start   the
        single-elimination  tournament,  so  63  games  over the span  of  6
        rounds, taking about two weeks,  need  to be played to determine the
        ultimate winner. 

              The  problem  is  that the pool participants want to know  how
        they are doing as the tournament  progresses,  and  taking out their
        choice  sheets  and  marking  them  against  the  progress  of   the
        tournament  is a time-consuming pain.  The problem gets  worse  when
        different  participants  use  different  newspapers  to   get  their
        tournament tree setups, so  there  are different forms that slow the
        tallying process and encourage mistakes. 

              Out  of  this came NCAAPOOL. Once the basic  first-round  team
        structure  is   entered,   everything   is   automatic.    The  pool
        participants'  choices are easy to enter  even  if  they  are  using
        different  basic  forms  (since  the  underlying  structure  of  the
        tournament is set by  the first-round pairings which NCAAPOOL tracks
        automatically).  The results of the tournament can be  entered  on a
        round-by-round  basis,  and  reports  for  both individuals and  the
        overall pool generated as you  desire.   NCAAPOOL  takes  the hassle
        (and  a good many of the potential mistakes)  out  of  organizing  a
        pool. 

              Normally NCAAPOOL registration is  $20,  but  if  you register
        NFLPOOL  and NCAAPOOL together, the fee is $29, a savings of 27%  on
        both. 

              Thank   you  for  using  and  supporting  NFLPOOL  with   your
        registration! 

        




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1387

     Volume in drive A has no label
     Directory of A:\

    NFLPOOL  DOC     16706   8-13-90  11:05a
    NFLPOOL  EXE     63760   8-13-90  10:54a
    NCAAPOOL EXE     86940   8-20-90   4:59p
    NCAAPOOL DOC     17918   8-20-90   4:31p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       802   9-10-90   5:46a
    FILE1387 TXT      2887   9-10-90   4:00p
            7 file(s)     189051 bytes
                          130048 bytes free
