---
layout: page
title: "PC-SIG Diskette Library (Disk #1827)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1827/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1827"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GOLF HANDICAPPER"

    GOLF HANDICAPPER is a combination golf score database and handicap
    calculator.  It can hold the most recent 20 scores of up to 1000
    players.  When a player enters a new score, the program automatically
    calculates his or her current handicap, their net score for this game,
    and their handicap for the next game.  The program can be used by an
    individual player, a team of players, or an entire golf club.
    
    The program is easy to figure out, even if you haven't used any type of
    database before.  The program is also complete, even taking into account
    the rating of your home course.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1827.TXT

{% raw %}
```
Disk No: 1827                                                           
Disk Title: Golf Handicapper                                            
PC-SIG Version: S1                                                      
                                                                        
Program Title: Golf Handicapper                                         
Author Version: 1.0                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
GOLF HANDICAPPER is a combination golf score data base and handicap     
calculator.  It can hold the most recent 20 scores of up to 1000        
players.  When a player enters a new score, the program automatically   
calculates his or her current handicap, their net score for this game,  
and their handicap for the next game.  The program can be used by an    
individual player, a team of players, or an entire golf club.           
                                                                        
The program is easy to figure out, even if you haven't used any type of 
database before.  The program is also complete, even taking into account
the rating of your home course.                                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GOLF.TXT

{% raw %}
```





                              Golf Handicapper

            Golf Handicapper is a combination golf score data base 
        and handicap calculator. It can hold the most recent 20 scores 
        of up to 1000 players. When a player enters a new score, the 
        program automatically calculates their current handicap, their 
        net score for this game, and their handicap for the next game. 
        The program can be used by an individual player, a team of 
        players, or an entire golf club.
            You run the program by typing GOLF at the DOS prompt. The 
        program will show you a title page and ask you what data file 
        to load. The default file name is GOLF. You would normally 
        just press ENTER to choice this name. There are only two 
        reasons to choose a different name. The first would be if you 
        have over 1000 players and you are creating additional files 
        to hold the extra names. The second would be if you were 
        keeping separate files for separate golf courses.
            If the program does not find a file with that name on the 
        disk, it assumes that this is a new file. It then creates a 
        file with this name. Actually, it creates two files. One has 
        the extension NAM and contains the player's names. The other 
        has the extension SCR and holds the player's scores.
            After you input the name of the data file, the program 
        will show you the main menu. This menu has six choices. The 
        first choice is to load a new file. You only use this option 
        if you have several data files and you need to switch between 
        them.
            The second main menu option is to change file 
        information. This choice leads you to a submenu containing 
        five options. Before the program shows you this submenu, 
        however, it checks to see if the current file contains a 
        rating for the golf course. If it does not, the computer will 
        ask you for the course rating. After you input this rating, 
        the computer will show you the "Change course information" 
        submenu.
            The first option in the "Change course information" 
        submenu is to change the course rating. You would use this 
        only if you recalculate the rating for your golf course.
            The second option in the submenu is to add a player. If 
        you select this, the program will tell you what the highest 
        player number already in use is. It will then ask what number 
        to assign to the player you are adding. The default is the 
        lowest number not already in use. This is usually one more 
        than the highest number already in use. However, it can be 
        lower if you have deleted a player from the data base, leaving 
        a "hole" in the player list. In such a case, you would have a 
        choice of filling the hole in the list by choosing the default 
        number or inputting a higher number.






            After you have input the player's number, the computer 
        will ask you to input the player's name. You can abort 
        inputting a player by just pressing ENTER. If you do input a 
        player's name, the computer will ask you to input the player's 
        most recent 20 scores. Input the scores one at a time, in 
        reverse order. That is, start with the most recent and work 
        backward. If the player has played less than 20 games at this 
        course, just press ENTER alone when you run out of scores. The 
        computer will then go back to the "Change course information" 
        submenu.
            The next choice in the submenu is to delete a player from 
        the data base. If you choose this option, the computer will 
        ask you to input either the player's name or number. You can 
        abort deleting a player by just pressing ENTER when the 
        computer asks for this information.
            The fourth choice in the "Change course information" 
        submenu is to correct scores. This allows you to correct the 
        scores of individual players if you discover that you have 
        made a mistake while inputting a player's scores. You might 
        have made such a mistake while adding the player in the first 
        place, or while inputting a new score during a handicap 
        calculation (explained below).
            When you select this option, the computer will first ask 
        you to input either the name or the number of the player whose 
        scores you wish to correct. After you input this information, 
        the computer will show you all the scores on record for that 
        player. There will be a number beside each score, with the 
        number 1 beside the most recent score. The computer will ask 
        you which score to change. After you input the number beside 
        the score you wish to change, the computer will ask for the 
        new score.
            When you have input the new score for the player, the 
        computer will show the new record for the player's scores. It 
        will then ask you which score you wish to change. This allows 
        you to correct any number of scores for each player. When you 
        just press ENTER when the computer asks you which score to 
        change, the computer will go back to the "Change course 
        information" submenu.
            The last choice in the submenu is to exit the submenu and 
        go back to the main menu.
            The third choice in the main menu is to calculate a 
        player's handicap. When you choose this, the computer will ask 
        you to input the name or number of the player. Once you have 
        input this information, the computer will display the player's 
        current handicap. If the player has not played enough games (a 
        minimum of 10) to calculate a handicap, the computer will tell 
        you this.






            The computer will then ask for the player's score and 
        what percentage of handicap you are playing. After you answer 
        these questions, the computer will display the player's net 
        score. It will also display the player's handicap for the next 
        game (provided the player has played enough games to calculate 
        one).
            The computer will then add the player's new score to the 
        data file on disk. If the player already had 20 scores, it 
        will delete the oldest score.
            The computer will then ask you to press the space bar to 
        continue. After you press the space bar, the computer will ask 
        you to input a name or number for another player. This allows 
        you to calculate handicaps for a long list of players without 
        going through the main menu. To return to the main menu, just 
        press ENTER alone when the computer asks you to input a 
        player's name or number.
            The fourth option in the main menu is to display data on 
        a player. If you choose this option, the computer will ask you 
        to input a player's name or number. You may also input the 
        word "ALL" (without the quotes), to see the data on all 
        players.
            The computer will then ask you if you want hard copy. If 
        you press the <Y> key, the computer will ask you what printer 
        width you want. This is the number of characters to print 
        before executing a carriage return. This allows you to select 
        a narrow print field to allow you to create wallet sized 
        printouts.
            After you answer the questions about the hard copy, the 
        computer will output the name, number, current handicap, and 
        scores for the player(s) requested. The ten lowest scores will 
        be marked by an asterisk. They will also appear in blue on the 
        screen if your computer supports color text. You can cancel 
        the output at any time by pressing the Esc key.
            After showing you the data, the computer will ask you to 
        press the space bar to continue. When you press the space bar, 
        the computer will ask for the name or number of another 
        player. If you do not want the scores of another player 
        displayed, just press the ENTER key.
            The fifth choice in the main menu is to see and possibly 
        reset the lowest score on record. When you choose this option, 
        the computer displays the name and score of the player with 
        the lowest gross score (before handicap) and the player with 
        the lowest net score. The computer updates these scores each 
        time a player enters a score during a handicap calculation. 
        The idea is to keep a running record of the lowest score for 
        each day (or other time period).






            When the computer displays these low scores, it asks if 
        you would like to reset the low score record. If you press 
        <Y>, the computer clears the low score record so that it can 
        begin keeping track of the lowest score during the next time 
        period. You would normally reset the low score at the 
        beginning of each day. The current lowest scores are saved in 
        the file with the player's scores. This allows the computer to 
        keep track of low scores even if it is turned off or losses 
        power.
            The last option in the main menu is to end the program. 
        This will return you to DOS. You should always exit the 
        program by returning to the main menu and choosing this 
        option. This insures that the files are properly updated 
        before the program ends.
        Making menu selections
            You can select an option from a menu by pressing the 
        number at the top of your keyboard that corresponds to the one 
        beside your choice. You should not press the ENTER key after 
        pressing this number.
            You can also select an option using the cursor keys and 
        the ENTER key. Pressing either the up or down cursor key will 
        cause the selection bar to appear on the menu. You can then 
        move the selection bar on the menu with the up and down cursor 
        keys. When the selection bar is on the option you want to 
        choose, press the ENTER key to make that selection.
        Shareware registration fee
            This program is distributed on the shareware basis. This 
        means that you are permitted to try it for a limited time to 
        see if you find it useful. You are also permitted to copy it 
        and give it away to anyone you like, provided you do not 
        charge more than $10 copying and distribution fee. If you want 
        to continue using it after the trial period (approximately one 
        month is appropriate), you are required to pay for it by 
        sending a $25 registration fee to:

                                 David Leithauser
                                 4649 Van Kleeck Drive
                                 New Smyrna Beach, FL 32169

           The program itself displays a reminder to pay this 
        registration fee. When you send in the fee, you will be sent a 
        copy of the program that does not display this reminder. You
        will also receive user support (by mail) and notification of
        new versions, available at a nominal cost.
           To get hard copy of this manual, position your paper at the
        top of a sheet of formfeed paper, then turn the printer on.
        Then type COPY GOLF.TXT PRN at the DOS prompt.

```
{% endraw %}

## GOLF~1.TXT

{% raw %}
```





                              Golf Handicapper

            Golf Handicapper is a combination golf score data base 
        and handicap calculator. It can hold the most recent 20 scores 
        of up to 1000 players. When a player enters a new score, the 
        program automatically calculates their current handicap, their 
        net score for this game, and their handicap for the next game. 
        The program can be used by an individual player, a team of 
        players, or an entire golf club.
            You run the program by typing GOLF at the DOS prompt. The 
        program will show you a title page and ask you what data file 
        to load. The default file name is GOLF. You would normally 
        just press ENTER to choice this name. There are only two 
        reasons to choose a different name. The first would be if you 
        have over 1000 players and you are creating additional files 
        to hold the extra names. The second would be if you were 
        keeping separate files for separate golf courses.
            If the program does not find a file with that name on the 
        disk, it assumes that this is a new file. It then creates a 
        file with this name. Actually, it creates two files. One has 
        the extension NAM and contains the player's names. The other 
        has the extension SCR and holds the player's scores.
            After you input the name of the data file, the program 
        will show you the main menu. This menu has six choices. The 
        first choice is to load a new file. You only use this option 
        if you have several data files and you need to switch between 
        them.
            The second main menu option is to change file 
        information. This choice leads you to a submenu containing 
        five options. Before the program shows you this submenu, 
        however, it checks to see if the current file contains a 
        rating for the golf course. If it does not, the computer will 
        ask you for the course rating. After you input this rating, 
        the computer will show you the "Change course information" 
        submenu.
            The first option in the "Change course information" 
        submenu is to change the course rating. You would use this 
        only if you recalculate the rating for your golf course.
            The second option in the submenu is to add a player. If 
        you select this, the program will tell you what the highest 
        player number already in use is. It will then ask what number 
        to assign to the player you are adding. The default is the 
        lowest number not already in use. This is usually one more 
        than the highest number already in use. However, it can be 
        lower if you have deleted a player from the data base, leaving 
        a "hole" in the player list. In such a case, you would have a 
        choice of filling the hole in the list by choosing the default 
        number or inputting a higher number.






            After you have input the player's number, the computer 
        will ask you to input the player's name. You can abort 
        inputting a player by just pressing ENTER. If you do input a 
        player's name, the computer will ask you to input the player's 
        most recent 20 scores. Input the scores one at a time, in 
        reverse order. That is, start with the most recent and work 
        backward. If the player has played less than 20 games at this 
        course, just press ENTER alone when you run out of scores. The 
        computer will then go back to the "Change course information" 
        submenu.
            The next choice in the submenu is to delete a player from 
        the data base. If you choose this option, the computer will 
        ask you to input either the player's name or number. You can 
        abort deleting a player by just pressing ENTER when the 
        computer asks for this information.
            The fourth choice in the "Change course information" 
        submenu is to correct scores. This allows you to correct the 
        scores of individual players if you discover that you have 
        made a mistake while inputting a player's scores. You might 
        have made such a mistake while adding the player in the first 
        place, or while inputting a new score during a handicap 
        calculation (explained below).
            When you select this option, the computer will first ask 
        you to input either the name or the number of the player whose 
        scores you wish to correct. After you input this information, 
        the computer will show you all the scores on record for that 
        player. There will be a number beside each score, with the 
        number 1 beside the most recent score. The computer will ask 
        you which score to change. After you input the number beside 
        the score you wish to change, the computer will ask for the 
        new score.
            When you have input the new score for the player, the 
        computer will show the new record for the player's scores. It 
        will then ask you which score you wish to change. This allows 
        you to correct any number of scores for each player. When you 
        just press ENTER when the computer asks you which score to 
        change, the computer will go back to the "Change course 
        information" submenu.
            The last choice in the submenu is to exit the submenu and 
        go back to the main menu.
            The third choice in the main menu is to calculate a 
        player's handicap. When you choose this, the computer will ask 
        you to input the name or number of the player. Once you have 
        input this information, the computer will display the player's 
        current handicap. If the player has not played enough games (a 
        minimum of 10) to calculate a handicap, the computer will tell 
        you this.






            The computer will then ask for the player's score and 
        what percentage of handicap you are playing. After you answer 
        these questions, the computer will display the player's net 
        score. It will also display the player's handicap for the next 
        game (provided the player has played enough games to calculate 
        one).
            The computer will then add the player's new score to the 
        data file on disk. If the player already had 20 scores, it 
        will delete the oldest score.
            The computer will then ask you to press the space bar to 
        continue. After you press the space bar, the computer will ask 
        you to input a name or number for another player. This allows 
        you to calculate handicaps for a long list of players without 
        going through the main menu. To return to the main menu, just 
        press ENTER alone when the computer asks you to input a 
        player's name or number.
            The fourth option in the main menu is to display data on 
        a player. If you choose this option, the computer will ask you 
        to input a player's name or number. You may also input the 
        word "ALL" (without the quotes), to see the data on all 
        players.
            The computer will then ask you if you want hard copy. If 
        you press the <Y> key, the computer will ask you what printer 
        width you want. This is the number of characters to print 
        before executing a carriage return. This allows you to select 
        a narrow print field to allow you to create wallet sized 
        printouts.
            After you answer the questions about the hard copy, the 
        computer will output the name, number, current handicap, and 
        scores for the player(s) requested. The ten lowest scores will 
        be marked by an asterisk. They will also appear in blue on the 
        screen if your computer supports color text. You can cancel 
        the output at any time by pressing the Esc key.
            After showing you the data, the computer will ask you to 
        press the space bar to continue. When you press the space bar, 
        the computer will ask for the name or number of another 
        player. If you do not want the scores of another player 
        displayed, just press the ENTER key.
            The fifth choice in the main menu is to see and possibly 
        reset the lowest score on record. When you choose this option, 
        the computer displays the name and score of the player with 
        the lowest gross score (before handicap) and the player with 
        the lowest net score. The computer updates these scores each 
        time a player enters a score during a handicap calculation. 
        The idea is to keep a running record of the lowest score for 
        each day (or other time period).






            When the computer displays these low scores, it asks if 
        you would like to reset the low score record. If you press 
        <Y>, the computer clears the low score record so that it can 
        begin keeping track of the lowest score during the next time 
        period. You would normally reset the low score at the 
        beginning of each day. The current lowest scores are saved in 
        the file with the player's scores. This allows the computer to 
        keep track of low scores even if it is turned off or losses 
        power.
            The last option in the main menu is to end the program. 
        This will return you to DOS. You should always exit the 
        program by returning to the main menu and choosing this 
        option. This insures that the files are properly updated 
        before the program ends.
        Making menu selections
            You can select an option from a menu by pressing the 
        number at the top of your keyboard that corresponds to the one 
        beside your choice. You should not press the ENTER key after 
        pressing this number.
            You can also select an option using the cursor keys and 
        the ENTER key. Pressing either the up or down cursor key will 
        cause the selection bar to appear on the menu. You can then 
        move the selection bar on the menu with the up and down cursor 
        keys. When the selection bar is on the option you want to 
        choose, press the ENTER key to make that selection.
        Shareware registration fee
            This program is distributed on the shareware basis. This 
        means that you are permitted to try it for a limited time to 
        see if you find it useful. You are also permitted to copy it 
        and give it away to anyone you like, provided you do not 
        charge more than $10 copying and distribution fee. If you want 
        to continue using it after the trial period (approximately one 
        month is appropriate), you are required to pay for it by 
        sending a $25 registration fee to:

                                 David Leithauser
                                 4649 Van Kleeck Drive
                                 New Smyrna Beach, FL 32169

           The program itself displays a reminder to pay this 
        registration fee. When you send in the fee, you will be sent a 
        copy of the program that does not display this reminder. You
        will also receive user support (by mail) and notification of
        new versions, available at a nominal cost.
           To get hard copy of this manual, position your paper at the
        top of a sheet of formfeed paper, then turn the printer on.
        Then type COPY GOLF.TXT PRN at the DOS prompt.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1827

     Volume in drive A has no label
     Directory of A:\

    FILE1827 TXT      1851  12-22-89   2:34p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   1:41a
    GOLF     COM     30848   9-09-89  12:38p
    GOLF     TXT     11954   9-09-89  12:43p
    GOLF~1   COM     30848   9-09-89  12:38p
    GOLF~1   TXT     11954   9-09-89  12:43p
            7 file(s)      88033 bytes
                           69632 bytes free
