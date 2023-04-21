---
layout: page
title: "PC-SIG Diskette Library (Disk #3921)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3921/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3921"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## INSTRUCT.DOC

{% raw %}
```

                             THE QUIZ GAME
                              Version 2.1                      
                          International Edition



                        Program by Michael Powell
                       Questions by Margret Powell
                    Copyright M & M Powell 1991, 1992
    
                            13 Barkly Street
                               Warrnambool
                              Victoria 3280
                                Australia
                           Tel: (055) 62 4241
    



    Thank you for purchasing the ShareWare edition of  THE QUIZ  GAME 
    Version 2.1 (International Edition).
      
    This  file  sets out full detail of how to install  and  run  the 
    program, and the various functions available when the game is  in 
    operation.
      
    To  print this file switch on your printer, ensure it is on-line, 
    make sure you have the A:> prompt on your screen and the distrib-
    ution disk in drive A, then type: PRINTDOC at the command line.
    
    
    SYSTEM AND OPERATING REQUIREMENTS
    
    THE QUIZ GAME will run on any fully-IBM-compatible computer  with 
    a  minimum  of  350K RAM (Random  Access  Memory)  available  for 
    program  execution.  The program supports all  colour  modes  (by 
    default) and Hercules (by switch).
    
    A hard-disk drive is recommended for best program execution,  but 
    this ShareWare version can be run from the distribution disk. The 
    registered version can be run from its distribution disk only  if 
    purchased  in  the  5.25" high-density  floppy  disk  format.  If 
    purchased in 3.5" (720K) or 5.25" (360K) disk distribution format 
    the  programs  must be installed onto a  hard-disk  drive  before 
    execution  is possible. The registered version of the game,  when 
    installed, requires around 840K of disk space.
    
    If you choose to run the ShareWare program from the  distribution 
    disk  (though  this  is  not recommended) it should NOT be write-
    protected as, otherwise, you will not be able to take advantage of
    the savegame facility.
    The Quiz Game - Page 2

    INSTALLATION
    
    Before  proceeding  either  to play or  to  instal  the  programs 
    please ensure that you make  a  backup copy.  The  disk  on which
    this game is  supplied  is  not  copy-protected  and DOS DISKCOPY
    will  assist in making a backup copy of this ShareWare distribut-
    ion disk.

    For ShareWare  distribution  the  program  files have been placed
    onto the disk in their usual format and, unless otherwise advised
    by your  ShareWare distributor, do not need to be  extracted from 
    archive files. To install on a hard-disk simply simply place  the 
    floppy disk into the floppy disk-drive (usually drive A) and then 
    log to drive C, make any directory as you may desire to hold  the 
    files  (say, C:\QUIZ - the command from the root directory  would 
    be  MD  QUIZ),  move to that  directory  (CD\QUIZ)  then  command 
    transfer of the files (COPY A:*.* C:).
    
    The following files are required to run the ShareWare version  of 
    the game:
    
    QUIZ.EXE              The program executable files
    
    SW-RES.001    )       The question bank file
    SWRES001.MAP  )       and its associated locations file
    
    RANDATA.MAP   )       Pseudo-random numbers used by the program 
                  )       to control the order in which questions
                  )       are asked
    
    All  of  the above files must be on the disk for the  program  to 
    run.  The executable files for the ShareWare version of the  game 
    are  substantially identical to the registered version  and  have 
    not  been  modified  in any way other than  to  provide  for  the 
    limited number of question banks which can be made available on a 
    360K disk and to provide for the display of a final screen giving 
    information about registration. As you periodically play the game 
    a  number  of savegame files may also appear  in  the  directory. 
    These  contain  the information  in regard past games  which  you 
    have  chosen to save, and they may from time to time  be  deleted 
    from  the  directory if desired,  though deleting  any particular
    file  will - of course - prevent  the  particular  saved  game it
    represents ever being restored.
    
    After  installation, put the distribution and backup  disks  away 
    for safety.
    The Quiz Game - Page 3
    
    STARTING THE PROGRAM
    
    If  you are playing the game from a floppy disk you  should  make 
    sure that the disk is not write-protected. Ensure that you are in 
    the  directory  containing  the  program  files  and  type   QUIZ 
    <RETURN>.

    Switches

    There are two switches which can be added to the command line call
    to allow the program to run in Hercules mode and/or in quiet mode.

    If you  have a Hercules  system add a space and the switch '-h' or
    '/h':

                QUIZ -h     OR    QUIZ /h

    If you  wish  to  run the  program  without  sound effects use the
    switch '-q' or '/q':

                QUIZ -q     OR    QUIZ /q

    The two switches may be combined in any order. Thus:

        QUIZ -sq      QUIZ -qs       QUIZ /sq      QUIZ /qs

    all have the same effect, that is to start the program in Hercules
    mode with sound effects off.

    Once in the  program,  whether  with sound  effects on or off, the
    alternative  mode 'Sound On'  or  'Sound Off' can be selected from
    the Options Menu (see below).

    PLAYING THE GAME

    The  program will first show an introductory screen and, after  a 
    key-press,  go  on  to load the main program. You  will  then  be 
    offered  the opportunity of entering players names (to a  maximum 
    of  4) or restoring a previously saved game (press  <ESCAPE>  for 
    this option)

    If  there  is  no restore at this point you will  then  be  asked 
    whether  the timer is to be engaged and, if so, to select a  time 
    delay  in 5 second intervals from a minimum of 5 to a maximum  of 
    30 seconds.
    
    The  next screen will ask for confirmation of your game setup  to 
    that point and allow revision if desired. During later  game-play 
    there  are additional options to decrease the number of  players, 
    turn  off  or  reset the timer, and restore  a  saved  game  (see 
    'Options Menu' below).
    The Quiz Game - Page 4

    You  will then  be asked to  select six question categories  from  
    the  twelve categories  available:  Entertainment, Famous People,      
    Food & Drink,  Geography, History, Literature, Lucky Dip, Nature, 
    Science, Sport, Take A Chance  and  World Cities.  The categories    
    chosen  at  this point will remain those  to  be  played through-
    out the ensuing game.  They may be changed  only if a new game is 
    started once the game now being commenced has been  completed. 
    
    Any of the twelve  categories can be mixed with any of the others
    to make the six required  for your game - select freely, but bear
    in mind that  'Take A Chance'  and  'Lucky Dip'  each  contain  a
    miscellany of  questions  which do not  fall within the other ten    
    special categories.  Use <CURSOR UP>,  <CURSOR DOWN> and <RETURN>
    to select from the list,  or press the highlighted  letter of the
    category to be selected. The  <HOME> and <PAGE UP> keys will take
    you to the top of the list;  the <END>  and <PAGE DOWN> keys will
    take  you  to  the  bottom  of  the list. If you make an error in
    selection simply  discard your  selections when asked to confirm,
    and then select again.

    In the registered  version of the game,  once question categories  
    have  been  selected  you  are  presented  with  a  menu to allow 
    selection  of  the  initial  question  bank  for  the  game.  The 
    twelve question  categories are sub-divided into ten banks;  this    
    ensures  that each game  can be different,  regardless of whether
    similar  categories  have been chosen.   This screen  is  omitted
    from the  ShareWare  version of the  game which has one bank only
    available for each category.
    
    You  will  now  move immediately to the  main  game  screen.  The 
    scorecard  will be displayed at the top of the  screen,  together 
    with  the  first player's name indicated as the  player  to  have 
    first selection. To the left of the scorecard there is a selector 
    box. The options in this box may be selected either by moving the 
    selector  bar up and down using the cursor keys, or  by  pressing 
    the  highlighted  letter of the desired option.  If  this  latter 
    method  is used the selection will be completed  immediately  the 
    'hot-key' is pressed. If selection is made by moving the selector 
    bar  then complete the selection by pressing <RETURN> whilst  the 
    selector bar is on the desired category.

    Once  a category is selected an appropriate question  is  brought 
    from  the  question bank and is  shown  on  the  screen  together
    with four possible answers.  Press  the appropriate  hot-key 1-4,
    or use the cursor up and cursor down keys to sit on  the  desired
    selection  and  press <RETURN>, to register your answer.   If the
    timer  function has been selected when setting up  the  game time
    will start to run  from the time the  question is  displayed, and
    The Quiz Game - Page 5

    the timer will count the seconds backwards from  the  chosen time
    allowance  to  '0'. If you do not  answer  before time is expired
    the  correct  answer will be displayed  and  your score  for that
    category, if above nil, will be penalized.
    
    Giving the correct answer will increase the player's score by  10 
    points and that player will be able to make a further  selection. 
    A  wrong answer will cause the player's score in the category  to 
    be  reduced by 5 points (unless that player has no score  in  the 
    category,  when  the 'nil' score will remain - scores do  not  go 
    below zero).
    
    All  player's  scores in each category  are  displayed  on-screen 
    throughout play, together with their total score. The game  ends, 
    and  a winner is declared, when one player reaches a point  where 
    his or her total score reaches 500 or more and he or she has  not 
    less  than  80 points in all six of the categories. If  only  one 
    player is playing, termination remains the same but he or she  is 
    not declared 'the winner', simply advised that a 'winning'  score 
    has been achieved.
    
    After the fanfare for the winner, the screen changes to show some 
    statistics  for  the game: for each player the  total  right  and 
    wrong  answers in each category and in total. In Version  2  this 
    statistics screen can also be accessed at intermediate points  of 
    the game: see 'Options Menu' below.
    
    Pressing  a key will take you back to the main screen  to  decide 
    whether  you  wish to play again. If you do, then the  number  of 
    players  and their names may be revised and a new  question  bank 
    category and a new question bank can be selected.
    
    THE OPTIONS MENU
    
    The  Options Menu is always available from the Selection Menu  by 
    pressing  <ESCAPE>.  It  permits  a  number  of  useful   in-game 
    functions to be performed: Once this menu has been called up  the 
    items available on it may be selected by pressing the hot-key  as 
    highlighted  in the menu option, or by using the cursor  keys  to 
    move  the  highlighted bar to rest on the desired  selection  and 
    pressing <RETURN>.

    Save Game
    
    Up to five saves may be made, either of a single game in progress 
    or  of  separate games played.  The saves  are  not  individually 
    identifiable  except by their numbers, 1 - 5, so you should  keep 
    some  external record of each game which has been saved. If there
    are savegame files on the  disk  then  the  program will identify
    The Quiz Game - Page 6

    these by placing a star  against each savegame selection which is
    already occupied. All five selections are  available for use, but
    you will be prompted to confirm  that you  wish to  overwrite any
    existing savegame if its file is  selected for re-use. Once over-
    written,  the  game  originally stored at  that location  will be
    irrecoverable. If you should happen to select the savegame option
    in error, or change your mind, select  'Don't Save'  and you will
    be returned to the game.
    
    Restore Game
    
    The Restore Game option is the necessary reverse procedure to the 
    Save-Game  option.  You should take care in using it  during  any 
    game  in progress as it will, once a prior savegame  is  selected 
    for re-installation, immediately overwrite any game in  progress, 
    which  will then be irrecoverable. The Restore Game  option  will 
    only offer for restoration games which actually exist on disk. If 
    no previous saves have been made then activating the option  will 
    simply  produce  a  message  that there are  no  saved  games  to 
    restore. As previously mentioned, the Restore Game option is also 
    available at the very outset of the game when the prompt for  the 
    number of players is given.
    
    View Statistics
    
    The  game  statistics screen can be called up directly  from  the 
    Options  Menu. Simply select this option and the full  statistics 
    for the current game will be displayed. Press a key to go back to 
    the game in progress.
    
    Retire Player
    
    As it is sometimes inconvenient for a player to continue a  game, 
    especially  if  it becomes extended, this option is  provided  to 
    allow  early retirement. Once the option is selected,  a  further 
    small  screen will pop up to ask which player is to  be  retired. 
    Select  a name, or select 'Leave All' to return to the game  with 
    all  players remaining in play. The option will not respond  when 
    there is only one player.
    
    Reset Timer
    
    The  timer may be turned off, turned on, or the time-delay  reset 
    by using this option. Once selected, further windows will open to 
    allow these functions to be accomplished.
    The Quiz Game - Page 7

    Turn Sound On/Turn Sound Off

    This is a 'toggle' command,  and will simply turn sound off or on
    as appropriate.  This selection can be made regardless of whether
    the  program  was  started  with  the  '-q' or '/q'  (quiet mode)
    switch.

    End Game
    
    If  this option is selected a further window will open  to  allow 
    you to confirm that you really do wish to quit. If confirmed, the 
    program will immediately terminate.
    
    Return to Game
    
    The final option on the menu simply returns you to the game.  Use 
    it  if  you have changed your mind as to  making  an  alternative 
    selection, or if the Options Menu was called up accidentally.
    
    QUESTION CATEGORIES AND QUESTION BANKS
    
    In the ShareWare version of the game each of the twelve  question 
    categories has  one question bank,  all questions being contained
    in a single resource  file.  In the registered version  there are
    two  resource  files to  allow a  total of ten banks per question 
    category.  Players have an initial choice as to  which categories   
    are to be used for a particular  game, and which bank within that
    category is to be in  use from  time  to  time  during  the game.
    As  each  bank  contains  only  a  limited  number  of  questions
    the bank being played  will inevitably  be  exhausted.  When this
    happens a window will open and the  players  will be advised that
    the  bank requires either replacement  or a reshuffle.   As there
    is only one bank in each  category  available   on the  ShareWare
    version of the game,  the  option  to select  a new bank when the
    present  bank is exhausted is not relevant,  and the program will
    automatically reshuffle the questions at that point.

    SOME FINAL WORDS...
    
    We  hope  that  you  enjoy  playing this  game  and  we  will  be 
    interested  to hear  your comments at any time. If you  do  enjoy 
    the  game,  please  consider the benefits  of  registration.  The 
    registered  version of THE QUIZ GAME is available  for  immediate 
    supply at only A$28.90 (within  Australia) or A$33.50 (for orders
    from overseas), these prices including media, postage and packing.
    

    The Quiz Game - Page 8


    Now to the legal matters ----- sorry, but it is essential......
    

    DISCLAIMER
    
    Though  every  care has been taken in  developing  and  preparing 
    these  programs,  and in assembling the  questions  and  checking 
    their  answers, we (the authors) undertake no responsibility  for 
    any  damage or loss caused by the use of these  programs  however 
    this  may  be caused, nor do we undertake that  every  answer  is 
    correct
 

    COPYRIGHT NOTICE
    
    All  parts  of  this  program,  including  question  banks,   are 
    copyright   and  may  not  be  further  reproduced,   copied   or 
    distributed without the prior consent in writing of the copyright 
    holders.  The  purchaser  by  his  or  her  purchase  obtains  no 
    proprietary  right in the program, but is hereby licensed to  use 
    the  program  at will and to make one backup  copy  for  security 
    purposes  only to be used should the program as  supplied  become 
    damaged  or otherwise non-operational. The purchaser  may  resell 
    the  original  copy  of this program but must  then  destroy  any 
    backup  copy  made. Subsequent purchasers are licensed  in  terms 
    identical  to  those expressed above in respect of  the  original 
    purchaser.                                                        


    ABOUT FURTHER DISTRIBUTION

    We invite  you to  use this program and  copy it  freely for your
    friends, acquaintances and co-workers so that they may try it too
    and, hopefully,  pass it on to others.   However, this licence is  
    given only on the basis that all programs, data files and inform-
    ation files  contained on this disk  must be  copied and the copy
    distributed must thus be in all respects identical in its content
    to this copy as supplied. Copying and/or distributing the content
    of this disk and/or any  individual  program  thereon  except  as
    permitted by this licence is  prohibited  except with our express
    agreement.
    The Quiz Game - Page 9
    

    REVISION HISTORY


    Version 1: First Release (July 1991)
    
    Limited  colour  resolution.  Data  storage method imposed strict
    limits  on  total  character  count in question plus all answers;
    this  required some  questions  and/or  answers to be in abridged
    format.  Separate data  files used for each question bank and for  
    each question bank and for pseudo-randoms. Total questions avail-
    able 3,000 in ten banks of 300 and  total  of six categories.  In
    operation,  correct answer made  to  flash for short period  when
    wrong answer given/out of time.

    Version 2: Second Release (April 1992)

    Full colour introduced, with command line switching for Hercules,
    MGA screens.  Extensive use  of pop-up windows. Statistics screen
    made  available  mid-game instead of  only when  game  completed.
    Selection menus,  hot-keys,  save game,  restore game  and retire
    player introduced.    Timer  able  to  be turned  on/off or reset
    mid-game.  Question banks extended to  provide 6,000 questions in
    twelve  question  categories  each sub-divided internally into 10
    sub-categories (or banks). New data storage system  developed  to
    reduce  number  of  files  required  to  run  program  and  avoid
    necessity of question/answer abridgment. Correct answer displayed
    in separate window on incorrect answer/out of time.

    Version 2.1: Third Release (August 1992)

    Question banks modified to allow  separate  Australian and Inter-
    national Editions to be released.   Command  line  switching  and
    internal (Options Menu)  selection  to allow  operation in  quiet
    mode. Some internal odds-and-ends to allow better memory usage.  
   
```
{% endraw %}

## ORDER.DOC

{% raw %}
```
        O R D E R   F O R M                                   [211109]



        To:  M. & M. Powell                         Date____/____/____
             13 Barkly Street
             WARRNAMBOOL Vic 3280
             Australia



        From:  Name __________________________________________________

               Address _______________________________________________

               City _____________________

               State/Country ____________  Postcode/Zipcode___________



        Please supply:                            --- PRICE ---
                                              (Australian dollars)

                                             Australia/NZ     Overseas

        "The Quiz Game" (Version 2.1)                                
        (or later version if available)
        International Edition                 $   28.90         33.50


        Please specify:  [ ] - 2 x 5 1/4" 360K  disks (compressed *)
                         [ ] - 5 1/4" 1.2Mb disk (ready to run)
                         [ ] - 3 1/2" 720K  disk (compressed *) 
                       
                         (* automatic transfer/decompression to hard disk)


        -- F E E D B A C K (appreciated but not essential)-----------

        I learned about "The Quiz Game" from:

           [ ] - Shareware Library         [ ] - Friend
           [ ] - Computer Club             [ ] - Magazine
           [ ] - BBS                       [ ] - Other

        Comments: ____________________________________________________
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________

        I have a problem to report: __________________________________
        ______________________________________________________________
        ______________________________________________________________
        ______________________________________________________________


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3921

     Volume in drive A has no label
     Directory of A:\

    DESCRIP  SHT       327   8-01-92
    DESCRIPT LNG       903   8-01-92
    INSTRUCT DOC     21007   8-01-92
    PRINTDOC BAT       344   8-01-92
    QUIZ     EXE    175996   8-01-92
    RANDATA  MAP     12000   8-01-92
    SW-RES   001     61473   8-01-92
    SWRES001 MAP      2400   8-01-92
    ORDER    DOC      2097   8-01-92
    GO       BAT        36   8-11-93   3:12p
    SHOW     EXE      2040   9-12-88  10:48a
           11 file(s)     278623 bytes
                           37888 bytes free
