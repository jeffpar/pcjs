---
layout: page
title: "PC-SIG Diskette Library (Disk #2493)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2493/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2493"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2493.TXT

{% raw %}
```
Disk No: 2493                                                           
Disk Title: MicroLink Board Games                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: MicroLink Yaht                                           
Author Version: 2.2                                                     
Author Registration: Up to the user. $5.00 recommended.                 
Special Requirements: None.                                             
                                                                        
MicroLink Yaht is a computerized implementation of the traditional dice 
game Yacht, popularized as Yahtzee.                                     
                                                                        
On a players turn, he/she rolls five dice, attempting to score in a     
number of set categories (full house, three of a kind, etc).  The player
may reroll any or all of the five dice for a total of three rolls per   
turn.  At the end of the three rolls, the player enters the appropriate 
score into one of the categories on the scorecard, and play passes to   
the next player.  When all categories are filled, the game is over.     
High score wins. Children and adults will both enjoy this game.         
                                                                        
Features                                                                
                                                                        
~ From one to six human players                                         
~ Optional "PC Opponent"                                                
~ Keyboard, joystick, and mouse input                                   
~ Top-ten scoreboard                                                    
~ Color monitor support                                                 
~ Sound on/off toggle                                                   
~ Optional display of possible scores with each roll                    
~ "Fast" mode eliminates animation to speed up play                     
~ Dice may be displayed with dots or numerals                           
~ Statistics kept on high/low/average scores in session.                
                                                                        
Program Title: Micro Link Shut The Box                                  
Author Version: 1.2                                                     
Author Registration: Up to user. $5.00 recommended.                     
Special Requirements: None.                                             
                                                                        
MicroLink Shut The Box is a computerized implentation of the traditional
board game of the same name.                                            
                                                                        
On a player's turn, he/she rolls a pair of dice, and shuts numbered     
doors which add up to the total displayed on the dice.  When a roll     
cannot be used, the total of all shut doors is added to the player's    
score, and play passes to the next player.                              
                                                                        
After five rounds, the player with the highest score wins.              
                                                                        
Features:                                                               
~ From one to seven human players                                       
~ Optional "PC Opponent"                                                
~ Keyboard and mouse input                                              
~ Top-ten scoreboard                                                    
~ MDA/Composite monitor support                                         
~ Sound on/off toggle                                                   
~ "Fast" mode eliminates animation to speed up play                     
~ Dice may be displayed with dots or numerals                           
~ Statistics kept on high/low/average scores in session.                
                                                                        
While enjoyable by adults, kids as young as 5 or six can play, and      
benefit from the addition skills that the game encourages.              
Program Title: Micro Link Otra                                          
Author Version: 1.2                                                     
Author Registration: Up to user.                                        
Special Requirements: None.                                             
                                                                        
MicroLink Otra is a memory game, very much a cousin to the electronic   
game "Simon", popular in the late 70's.                                 
                                                                        
Players take turns replaying an ever-longer sequence of flashing squares
generated by the computer.                                              
                                                                        
After four rounds, the player with the highest score wins.              
features:                                                               
                                                                        
~ From one to seven human players                                       
~ Keyboard and mouse input                                              
~ Top-ten scoreboard                                                    
~ Works on all monitors/display adaptors                                
~ Sound on/off toggle                                                   
~ "Fast" mode eliminates animation to speed up play                     
~ Statistics kept on high/low/average scores in session.                
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## MLOTRA.DOC

{% raw %}
```
              MicroLink Personal Computer Users' Group

                             Presents

                               Otra

                 v1.2, Copyright 1989, Bob Lancaster


INTRODUCTION

   Do you remember Simon?

   Simon was a hand-held electronic game, introduced in the mid
   1970's.  In it, you were challenged to reproduce an ever-growing
   sequence of flashing lights and musical tones, using four colored
   buttons.

   Its great success and simplicity spawned a huge number of
   imitators, and was largely responsible for the hand-held electronic
   game craze which continues to this day.

   Otra (from the spanish "otra vez", or "one more time") is a
   computerized memory game in the spirit of Simon.


EQUIPMENT REQUIRED

   Otra will run on any IBM PC/AT/XT/PS2 or close clone thereof, with
   at least 100k of memory available after DOS is loaded.

   Although the game looks best when played on a color monitor, it
   plays just fine on a monochrome.  (If you are using a monochrome or
   composite monitor with a color graphics card, please see "Black And
   White Mode" in the Games Parameters section below)

   A Microsoft-compatible mouse, can be used.  (Remember to load your
   mouse driver before loading Otra).

   If you run across a configuration on which the game will not run,
   please let me know (address at end of this file)!


GAME FEATURES

      Microsoft Mouse Support
      Fast Mode
      Monochrome/Composite monitor support
      Top Ten Scores file
      Statistics on multiple games
      Bosskey
      On-line help


THE OBJECT

   In Otra, you are shown a group of nine panels in a three by three
   grouping, as shown in figure 1.

                   +---+---+---+         +---+---+---+
                   |   +   +   |         | 7 | 8 | 9 |
                   +---+---+---+         +---+---+---+
                   |   +   +   |         | 4 | 5 | 6 |
                   +---+---+---+         +---+---+---+
                   |   +   +   |         | 1 | 2 | 3 |
                   +---+---+---+         +---+---+---+
                      Figure 1              Figure 2

   At the beginning of a round, one of these panels will flash
   briefly, and, if the Sound Mode is on, a tone will play (See Sound
   Mode in COMMANDS AND TOGGLES section of this file).

   You must then repeat that "sequence" by pressing the correct key on
   the numeric keypad of your keyboard.  Figure 2 shows how the keys
   correspond to the panels.

   If you repeat the sequence correctly, the computer replays the
   sequence, adding one more panel.

   This continues, with you repeating an increasingly long sequence of
   panels, until you make a mistake, or you complete the sequence.

   Each round plays a little faster, and has a longer sequence of
   panels to complete!

   Points are accumulated for every correct panel, and bonus points
   are given for completing a sequence.  At the end of four rounds,
   high score wins!

SCORING

   At the start of each turn, you are shown:

      Your current score
      Number of panels in the round
      Points per panel in this round
      Bonus points for a perfect round

   After the round is over, you are awarded points based on the number
   of panels in the longest sequence you correctly repeated.  For
   example, in round two, panels are worth two points.  If you
   correctly repeated a sequence of seven panels, you would earn
   fourteen points (seven panels X two points each).

   If you complete the entire sequence for the round (for example,
   fifteen panels in round two), you are given bonus points.


STARTING THE GAME

   At this point, you should be able to play the game, and get a feel
   for it.  You can read the rest of this document now at your leisure
   to clarify points, and to explain some of the features you might
   not understand your first few times through the game.

   So, make sure you are in DOS, and type "MLOTRA" (without the
   quotes) and press return.  Follow the prompts, and enjoy!


GAME CONTROLS

   Otra can be played either using the keyboard or a Microsoft-
   compatible mouse.


   KEYBOARD INPUT

      The legend (the last line on the screen) always contains a list
      of keys that are valid at any point in the game, along with a
      one-word description of their function. (See "COMMANDS" below)


   MOUSE INPUT

      Most of the keys listed on the bottom line of the screen can be
      entered via the mouse by pointing to the command and clicking
      the left button of the mouse.  (If you are new to mice,
      "clicking" something means to place the mouse cursor on it and
      press the appropriate button, in this case, the left.)

      Also, boxes higher on the screen with messages such as "Press
      return for next player" will allow you to click the box itself
      to continue, rather than the command at the bottom of the
      screen.

      When selecting the panels to replay in a sequence, clicking a
      panel will select it.

      So, experiment with the mouse, and see what works.  I think it's
      fairly straightforward, but would appreciate any feedback on
      ways you think it could be improved (address at end of file).

COMMANDS AND TOGGLES

   A number of commands and toggles are available to enhance play, or
   to allow you to tailor the game a little to suit your taste.
   Alphabetically, these are:

   A (AllScores command)

      This displays a scorecard of all players, to compare how
      everyone is doing in relation to each other.  The highest
      score(s) are emphasized with a flashing arrow.

   B (BossKey command)

      This displays a phony DOS screen.  I'll explain for you honest
      folks: this key is used when you are playing the game on company
      time, and the boss suddenly appears. To return to the game, key
      OK at the phony DOS prompt.

   Esc (Exit command)

     Use this key to end MLOtra before the game is over.

   F (Fast Mode toggle)

      If you just want to play the game, and not look at some of the
      "animation" (such as the moving panels), turning the Fast Mode
      on will do it.  NOTE: This does not cause the sequence of panels
      to show any faster.

      Defaults to "No", showing all animation.

   I (Program Info)

      Displays information about the program and the author.

   N (Next Prompt toggle)

      This allows you to get rid of the "Press return for so-and-so's
      turn" message, which some folks find annoying.

      Defaults to "Yes", allowing the message to show.

   O (Otra vez, or "repeat")

      This gives you the ability to replay a sequence, but only once
      per round.

   P (Numbered Panel toggle)

      This allows you to have numbers display in the panels instead
      of the colored squares.

      Defaults to "No", displaying colored blocks.

   R (Round Prompt toggle)

      This allows you to get rid of the "Round" message, which some
      folks find annoying.

      Defaults to "Yes", allowing the message to show.

   S (Sound Mode toggle)

      This allows you to turn on and off the sounds produced by the
      game, which some folks find annoying.

      Defaults to "Yes", producing sound.

   T (TopTen scores command)

      Displays the highest ten scores achieved on your machine.  (This
      information is stored in the file MLOTRA.SCR.  To clear the top
      ten, delete the file.)


COMMAND LINE PARAMETERS

   In the section above, several options are referred to as "toggles".
   This simply means that they can be in a "Yes" or "No" state.

   (Note that the state of these toggles can be determined by looking
   at the legend appearing at the bottom of your screen.  If the
   toggle description there begins with a capital letter, the toggle
   is in a "Yes" state.  For example, if a legend reads "Sound fast",
   the sound toggle is set to "yes", and the fast toggle is set to
   "no".)

   Each of them has a "default", which is the state (either yes or no)
   in which they start out when Otra begins.

   I set the defaults to the way I felt was best, but you may think
   differently!

   If you find yourself always changing one or more of the toggles
   each time you play, you might want to set them on the DOS command
   line instead.

   Any toggle can be flipped to the opposite of its default (Fast Mode
   = "Yes", for example) by keying the toggle's letter following the
   program name (MLOTRA) when you start up the game.

   So, if you wanted to set "Round Prompt" to No, and Numbered Panels
   Mode to "Yes" (the opposites of their defaults), at DOS you would
   key:

           "MLOTRA R P"

   ...without the quotes, followed by the Return key.  Be careful that
   you leave a space between MLOTRA and the toggle(s), or DOS won't
   recognize what you are trying to do.

   This allows you to tailor the game a little to your taste, and if
   you put this statement into a DOS batch file or menu processor, it
   will save you from setting these toggles each time you start the
   game.

   Toggles only valid from the command line:

   B (Black And White mode)

      If you are running a composite monitor on a color graphics card,
      and the colors in MLOtra are hard to discern, keying "MLOTRA B"
      at the DOS prompt will make MLOtra run in Black And White Mode.

      Defaults to "Yes" if Monochrome adapter detected, "No"
      otherwise.

   M (Mouse)

      If you have your mouse driver installed, but do not want to use
      the mouse during MLOtra, keying "MLOTRA M" at the DOS prompt
      will cause MLOtra to ignore the mouse.

      If you run the program without this parameter, you can still
      use the keyboard.  Using this parameter simply keeps the mouse
      cursor from being displayed.

      If the mouse driver is not installed, this parameter has no
      effect.

      Defaults to "Yes" if mouse driver detected, "No" otherwise.

   T (Top Ten Scores)

      This is different than the "T" command available during game
      play.  It specifies whether a Top Ten Scores file should be
      saved, and is useful if you are running the game from a write-
      protected disk.

      Defaults to "Yes".


DIFFERENCE BETWEEN VERSIONS

   VERSION 0.1  -  10/01/89

      Demonstrated at MicroLink ShareFaire

   VERSION 1.0  -  10/14/89

      Released only to a few beta testers.

   VERSION 1.1  -  10/20/89

      Corrected spelling.

      Changed Sound Mode default to Yes.

   VERSION 1.2  -  10/28/89

      Changed number of panels per round.

      Released to bulletin boards.


ACKNOWLEDGMENTS

   Thanks to all those folks who wrote nice letters and left great BBS
   messages in response to my other games.

   Thanks to Jay "Beta Test" Graham, for his input.

   Thanks to Reed Harding for his spelling lesson!

   A tip o' the hat as always to the officers and members of MicroLink
   PCUG for the encouragement and support they always give my PC
   endeavors.

   Thanks to Eagle Performance Software, whose Shareware product
   "QWIK" allows for some blazingly fast screenwrites in Turbo Pascal
   and Turbo C.

     Programmers interested in QWIK should contact Eagle at:

       Eagle Performance Software      Or Call Jim LeMay at:
       TP products                       (817) 735-4833
       P.O. Box 122237
       Fort Worth, TX  76121-2237


ALSO BY THE AUTHOR

   MicroLink Yaht - The popular dice game

   MicroLink Shut The Box - The traditional board game


FEEDBACK

   I would appreciate any comments, complaints, or wish lists of
   features you'd like to see!  And, if you have any favorite old
   games you'd like to see programmed, I'm always looking for another
   which would interest me!

   Also, if you like the game enough (and can afford) to send a small
   ($5) donation, I won't argue.  And my wife will understand my long
   nights at the PC a little better!

   Either way: Enjoy the game, and give copies of it to all your
   friends.  And enemies.  Strangers on the street...

   I can be contacted by mail at:

      Bob Lancaster / P.O. Box 5612 / Hacienda Heights, CA  91745

   Or by modem at:

      MicroLink PCUG BBS (AKA So. Cal Builder's Board)
      818/961-7903 - 24hrs/365 days - 300/1200/2400/9600

   Please include the version number of Otra in correspondence.

   Those interested in finding out more about MicroLink can contact
   the board listed above, or by mail:

      MicroLink PCUG Headquarters
      15865-B E. Gale Ave. Box 1003
      Hacienda Heights, CA  91745

   Tell them Otra sent you!


```
{% endraw %}

## MLSHUT.DOC

{% raw %}
```
              MicroLink Personal Computer Users' Group

                             Presents

                           Shut The Box

               v1.2, Copyright 1989, Bob Lancaster


INTRODUCTION

   From coins covering numbers scratched into the deck of a fishing
   boat to the high-tech glitz of the TV game show High Rollers, Shut
   The Box in its many guises has been around since the 18th century,
   when it is thought to have been invented by fishermen in the
   Channel Islands.

   Its simplicity (very young children easily understand and enjoy
   it), coupled with the fun of trying to "beat the odds" have made it
   an old standard, especially in the British Isles, where it remains
   a popular pub game to this day.


EQUIPMENT REQUIRED

   Shut The Box will run on any IBM PC/AT/XT/PS2 or close clone
   thereof, with at least 64k of memory.

   Although the game looks best when played on a color monitor, it
   plays just fine on a monochrome.  (If you are using a monochrome or
   composite monitor with a color graphics card, please see "Black And
   White Mode" in the Games Parameters section below)

   A Microsoft-compatible mouse, can be used.  (Remember to load your
   mouse driver before loading Shut The Box).

   If you run across a configuration on which the game will not run,
   please let me know (address at end of this file)!


GAME FEATURES

      Microsoft Mouse Support
      Fast Mode
      Monochrome/Composite monitor support
      Demonstration Mode
      Top Ten Scores file
      Statistics on multiple games
      Bosskey
      Computerized opponent
      On-line help

   All options which those 18th century fishermen did just fine
   without, but I thought added to the fun!


THE OBJECT

   In this version of Shut The Box, players alternate turns trying to
   get the highest score possible shutting numbered doors matching
   rolled dice.

   At the beginning of play, panels ("doors") number 1 through 9 are
   displayed on the screen, in an "up" position (see Figure 1).

          |---------------------------------------|
          | |---|---|---|---|---|---|---|---|---| |
          | | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | |
          | |---|---|---|---|---|---|---|---|---| |
          |                                       |
          |                                       |
          |---------------------------------------|
                  Figure 1 (all doors up)

   The player then rolls two dice, and closes any combination of doors
   whose numbers total that of the dice.  A player's turn ends when a
   number is rolled which cannot be matched by any total of the
   remaining open doors.

   For example: A player's first roll is a six and a one, totaling
   seven. The player may shut either the door numbered seven, or the
   six and one, or the five and two, or the three and four, or the
   one, two, and four.

   In our example, the player chooses to shut (pull down) the two and
   the five, leaving the board as you see in Figure 2.

          |---------------------------------------|
          | |---|   |---|---|   |---|---|---|---| |
          | | 1 |   | 3 | 4 |   | 6 | 7 | 8 | 9 | |
          | |---|---|---|---|---|---|---|---|---| |
          |     | 2 |       | 5 |                 |
          |     |---|       |---|                 |
          |---------------------------------------|
                 Figure 2 (after first move)

   On the next roll, the player rolls an eleven.  The player can now
   shut the eight and three, or seven and four.  The 9-2 is no longer
   valid because the two has already been closed.  (Likewise, the 6-5
   combination cannot be used).

   A player's turn ends when all the doors have been shut, or until no
   door (or combination of doors) can be shut which total up to the
   sum of both dice.  At this point the total of the numbers on the
   doors which have been shut are added to the player's score, plus an
   additional bonus of five points if all doors were shut.

   All doors are then reopened, and the game passes to the next
   player.

   After each player has played five turns, the player with the high
   score is the winner!


SCORING

   At the end of each player's turn, his points from that turn (the
   numbers on the "shut" doors) are added to the display of his/her
   score, in the box toward the bottom of the screen.

   This "scorecard" contains the player's name, score, and a graph of
   his/her score.  The graph shows you how well you are doing against
   a perfect score.

   A perfect round gives a player 50 points:

      (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 5 bonus points = 50)

   With 5 rounds to a game, 250 points would be a perfect game. There
   are 50 dots on the scorecard, and one is filled every five points.


STARTING THE GAME

   At this point, you should be able to play the game, and get a feel
   for it.  You can read the rest of this document now at your leisure
   to clarify points, and to explain some of the features you might
   not understand your first few times through the game.

   So, make sure you are in DOS, and type "MLSHUT" (without the
   quotes) and press return.  Follow the prompts, and enjoy!


GAME CONTROLS

   Shut The Box can be played either using the keyboard or a
   Microsoft-compatible mouse.

   KEYBOARD INPUT

      The legend (the last line on the screen) always contains a list
      of keys that are valid at any point in the game, along with a
      one-word description of their function. (See "COMMANDS" below)

      When selecting the doors to shut, you can use either of two
      keyboard methods:

         1) Use the cursor left/right keys to point to a door and use
         the cursor up/down keys to open or shut it, or

         2) Use the numeric keys to select the number of the door to
         open or shut.

   MOUSE INPUT

      Most of the keys listed on the bottom line of the screen can be
      entered via the mouse by pointing to the command and clicking
      the left button of the mouse.  (If you are new to mice,
      "clicking" something means to place the mouse cursor on it and
      press the appropriate button, in this case, the left.)

      Also, boxes higher on the screen with messages such as "Press
      return for next player" will allow you to click the box itself
      to continue, rather than the command at the bottom of the
      screen.

      When selecting the doors to open/shut after rolling the dice,
      clicking an open door will close it, and clicking a closed door
      will open it (provided that the door was closed after the last
      roll of the dice).

      So, experiment with the mouse, and see what works.  I think it's
      fairly straightforward, but would appreciate any feedback on
      ways you think it could be improved (address at end of file).

COMMANDS AND TOGGLES

   A number of commands and toggles are available to enhance play, or
   to allow you to tailor the game a little to suit your taste.
   Alphabetically, these are:

   A (AllScores command)

      This displays a scorecard of all players, to compare how
      everyone is doing in relation to each other.  The highest
      score(s) are emphasized with a flashing arrow.  Also, the two
      sets of lines jutting into the box from above and below show the
      range of scores currently in the TopTen scores file.  The score
      is "graphed" as in the single-player scorecard.

   B (BossKey command)

      This displays a phony DOS screen.  I'll explain for you honest
      folks: this key is used when you are playing the game on company
      time, and the boss suddenly appears. To return to the game, key
      OK at the phony DOS prompt.

   Esc (Exit command)

     Use this key to end MLShut before the game is over.

   R (Roll Prompt toggle)

      This allows you to get rid of the "Press return to roll"
      message, which some folks find annoying.

      Defaults to "Yes", allowing the message to show.

   N (Next Prompt toggle)

      This allows you to get rid of the "Press return for so-and-so's
      turn" message, which some folks find annoying.

      Defaults to "Yes", allowing the message to show.

   D (Demo toggle)

      This allows you to put MLShut into Demo Mode, in which the
      computer plays for all players.

      Defaults to "No", allowing human play.

   F (Fast Mode)

      If you just want to play the game, and not look at some of the
      "animation" (such as the rolling dice), turning the Fast Mode on
      will do it.

      Defaults to "No", showing all animation.

   P (Pips Mode)

      Allows you to select between dice with pips (dots) on them, or
      with numerals on them.

      Defaults to "Yes", showing the dots.

   T (TopTen scores command)

      Displays the highest ten scores achieved on your machine.  (This
      information is stored in the file MLSHUT.SCR.  To clear the top
      ten, delete the file.)

   K (Show "Can't use this roll!" message)

      If you want Shut The Box to notify players when they roll a
      combination of dice which they can't use, specify this toggle.

      Defaults to "No".


COMMAND LINE PARAMETERS

   In the section above, several options are referred to as "toggles".
   This simply means that they can be in a "Yes" or "No" state.

   (Note that the state of these toggles can be determined by looking
   at the legend appearing at the bottom of your screen.  If the
   toggle description there begins with a capital letter, the toggle
   is in a "Yes" state.  For example, if a legend reads "Sound fast",
   the sound toggle is set to "yes", and the fast toggle is set to
   "no".)

   Each of them has a "default", which is the state (either yes or no)
   in which they start out when Shut The Box begins.

   I set the defaults to the way I felt was best, but you may think
   differently!

   If you find yourself always changing one or more of the toggles
   each time you play, you might want to set them on the DOS command
   line instead.

   Any toggle can be flipped to the opposite of its default (Fast Mode
   = "Yes", for example) by keying the toggle's letter following the
   program name (MLSHUT) when you start up the game.

   So, if you wanted to set "Roll Prompt" to No, and Pips Mode to "No"
   (the opposites of their defaults), at DOS you would key:

           "MLSHUT R P"

   ...without the quotes, followed by the Return key.  Be careful that
   you leave a space between MLSHUT and the toggle(s), or DOS won't
   recognize what you are trying to do.

   This allows you to tailor the game a little to your taste, and if
   you put this statement into a DOS batch file or menu processor, it
   will save you from setting these toggles each time you start the
   game.

   Toggles only valid from the command line:

   B (Black And White mode)

      If you are running a composite monitor on a color graphics card,
      and the colors in MLShut are hard to discern, keying "MLSHUT B"
      at the DOS prompt will make MLShut run in Black And White Mode.

      Defaults to "Yes" if Monochrome adapter detected, "No"
      otherwise.

   T (Top Ten Scores)

      This is different than the "T" command available during game
      play.  It specifies whether a Top Ten Scores file should be
      saved, and is useful if you are running the game from a write-
      protected disk.

      Defaults to "Yes".


DIFFERENCE BETWEEN VERSIONS

   VERSION 1.0  -  01/11/89

      Initial version, released to a few beta testers.

   VERSION 1.1  -  01/14/89

      Fixed some incorrect headings.

      Modified documentation some.

   VERSION 1.2  -  08/15/89

      Added recognition of some valid door combinations. (Oops...)

      Added N/D/R/P/K to legend of valid commands.

      Added "alphabet" to user name legend when mouse present.
         (allowing entry of player names via the mouse!)

      Cursor right from rightmost open door now goes to leftmost open door.

      Cursor left from leftmost open door now goes to rightmost open door.

      Fixed occasional problem when exiting Help via the mouse.

      Added Upper/Lower case indication of toggle statuses in legend.


ACKNOWLEDGMENTS

   Thanks to all those folks who wrote nice letters and messages in
   response to my last game, MLYaht.  The positive response encouraged
   me to turn this one loose on the world...

   I'd like to thank my wife Cindy and my daughters Rosamund and
   Genevieve for their tireless beta testing, and accurate
   descriptions (such as "ooooh!" and "blech!") of what they liked
   (and didn't like) about it.

   Also many thanks to Greg Powers, whose comment "You know, I HATE
   games that do that!" led to a major change in the scoring system
   MLShut uses.

   A tip o' the hat as always to the gang at MicroLink (Bob Rodrigue,
   Jay Graham and David Storrs especially) for the encouragement and
   support they always give my PC endeavors.

   Thanks to Eagle Performance Software, whose Shareware product
   "QWIK" allows for some blazingly fast screenwrites in Turbo Pascal.
   (For a demonstration on just HOW fast, start MLShut with both Demo
   and Fast modes set to "Yes", and hold on to your socks...)
   Programmers interested should contact Eagle at:

       Eagle Performance Software      Or Call Jim LeMay at:
       TP products                       (817) 735-4833
       P.O. Box 122237
       Fort Worth, TX  76121-2237

   And, while I'm at it, thank you Phillipe Kahn!


FEEDBACK

   I would appreciate any comments, complaints, or wish lists of
   features you'd like to see!  And, if you have any favorite old
   games you'd like to see programmed, I'm always looking for another
   which would interest me!

   Also, if you like the game enough (and can afford) to send a small
   ($5) donation, I won't argue.  And my wife will understand my long
   nights at the PC a little better!

   Either way: Enjoy the game, and give copies of it to all your
   friends.  And enemies.  Strangers on the street...

   I can be contacted by mail at:

      Bob Lancaster / P.O. Box 5612 / Hacienda Heights, CA  91745

   Or by modem at:

      MicroLink PCUG BBS (AKA So. Cal Builder's Board)
      818/961-7903 - 24hrs/365 days - 300/1200/2400/9600

   Please include the version number of Shut The Box in correspondence.

   Those interested in finding out more about MicroLink can contact
   the board listed above, or by mail:

      MicroLink PCUG Headquarters
      15865-B E. Gale Ave. Box 1003
      Hacienda Heights, CA  91745

   Tell them Shut The Box sent you!


```
{% endraw %}

## MLYAHT.DOC

{% raw %}
```
              MicroLink Personal Computer Users' Group

                             Presents

                               Yaht

              v2.2, Copyright 1987-1989, Bob Lancaster


Yaht is a traditional dice game, popularized by the Milton Bradley
company as Yahtzee.  Since the Yahtzee version of Yaht is the one
which most people know, this computerized version follows the Yahtzee
rules.

NOTE: If you already know how to play Yahtzee, and are simply
interested in the specifics of this computerized version, please skip
to GAME CONTROLS.

If you have a previous version of MLYAHT, and just want to see what
has been added/fixed, please skip to WHAT'S NEW.


OBJECT OF THE GAME

In a multi-player game, the object is to finish the game with the
highest score.  When playing alone, the object is to beat your
"personal best".


SUMMARY

On a turn, you may roll the dice up to three times in order to obtain
a scoring combination.  After your turn, you MUST place a score (or a
zero) in one of the scoring categories.

The game ends after all players have taken 13 turns.


A TURN

On the first roll of your turn, you must roll all five dice. On the
second and third rolls, you may roll ANY or ALL of the dice again.

You may chose to stop after the first or second roll, but you may take
NO MORE THAN THREE rolls in a turn.

After your final roll, you must enter a score (or zero) into one of
the 13 scoring categories.


SCORING

The left side of the score card contain the categories Ones, Twos,
Threes, Fours, Fives, and Sixes.  When selecting one of these
categories, your score for that category is determined by the number
of dice which have the same number showing as the category name.

For example: a roll of  2, 5, 5, 5, 4 would score 2 points in the Twos
category (one die x 2), or 4 points in the Fours category (one die x
4), or 15 points in the Fives category (3 dice x 5).

A bonus of 35 points can be earned for the left side if your score
from Ones through Sixes totals at least 63 points (Scoring three dice
in each of the six categories will add up to exactly 63 points).

Three Of A Kind means three dice of any one number (three one's, three
two's, etc.), and scores the sum of ALL five dice in the roll.

Four Of A Kind means four dice of any one number (four one's four
two's, etc.), and scores the sum of ALL five dice in the roll.

Full House is three of one number, and two of another (Three fours and
two fives, for example). Score is 25 points.

Small Straight is four dice in numerical sequence (1, 2, 3, 4, or 2,
3, 4, 5, or 3, 4, 5, 6). Score is 30 points.

Large Straight is five dice in numerical sequence (1, 2, 3, 4, 5, or
2, 3, 4, 5, 6). Score is 35 points.

A Yaht is five dice of the same number (five three's, five four's,
etc).  Score is 50 points.

For every additional Yaht you roll after having scored 50 points in
your yaht category, you will get an additional bonus of 100 points. If
you have taken a zero in your Yaht category, you receive no such
bonus.

Chance is simply the total of all five dice.  Any combination of dice
is valid.


GAME CONTROLS

Most of the control of this version of Yaht is accomplished with the
cursor keys (or optionally, the mouse/joystick), and help is supplied
at the bottom of the screen when appropriate, right above the
copyright notice.

It should be noted that any/all of the three control methods
(keyboard, mouse, joystick) can be active simultaneously.  This way,
in a multiple-player game, one person can use the keyboard while
another uses the mouse, etc.

Some special commands not always listed on the screen, but usually
available:

A (All Scores): Displays the scores of all players for the current
game.

S (Sound): Toggles on/off the sound of the rolling dice. Sound is on
at game start-up, but you can turn it off if it annoys you (or your
sleeping family).

F (Fast): Toggles on/off the simulated "rolling" of the dice. The Fast
mode is off at game start-up, but can be turned on if you just want to
zip through a game with no delays.

D (Display): Toggles on/off the display of valid scoring combinations
of the current roll.  Turned off when the program starts, this feature
can be helpful to someone just learning the game, to see just what
his/her options are.

P (Pips): Toggles between showing the pips (dots) on the dice, and
showing the numerals instead.  Turned on when the program starts, this
feature is for those who think that numerals are easier to read than
standard dice.

M (Mouse): Toggles on/off the use of the mouse.  If you have a mouse
and wish to use it in Yaht, take this option at the start of the game.

J (Joystick): Toggles on/off the use of the joystick.  If you have a
joystick and wish to use it in Yaht, take this option at the start of the
game. NOTE: Activating this option with no joystick attached will
probably lock up your PC. ALSO NOTE: Memory resident programs (such as
SideKick) running behind MLYaht can produce bad joystick results.

T (Top Ten Scores): Displays the top ten scores achieved on your
machine!  These scores are stored in file MLYAHT.SCO.  To clear these
scores, merely delete the file. On at game start.

B (Boss Key): OK, you asked for it... This displays a phony DOS
screen.  I'll explain for you honest folks: this key is used when you
are playing the game on company time, and the boss suddenly appears.
To return to the game, key OK at the phony DOS prompt.

+/- (Faster/Slower): Will speed up or slow down the rolling of the
dice.  This can be used to slow down the game to make it more
"watchable" on a faster PC.

Esc: End game.  This allows you to exit the game without having to
finish it.  You will get an "End game?" message.  Answer it, and the
program will act accordingly.


COMMAND LINE PARAMETERS

Note: Only read this section after you've played the game a few times.
You don't need to know this stuff now (if ever!), and it won't make
much sense until you do.

The above F, D, S, M, J, and P commands can be entered at the DOS
command line, to customize MLYAHT defaults to your taste.

For instance, keying "MLYAHT M D" (without the quotes) at the DOS
prompt will start MLYAHT with the M (Mouse) and D (display) toggles ON
(their defaults are both OFF).

Remember, this isn't necessary.  You can run these commands once
MLYAHT has started.  But if you use the same commands each time you
play, setting these options from inside a batch file can save you some
keystrokes.

Commands ONLY available at the command line:

Y (Yaht Bonus): This turns off the "Additional Yaht Bonus" mode. When
this mode is on (the default), players can receive 100 point bonuses
for achieving more than one Yaht in a game.  When it is off, no such
bonuses are given.  Keying "MLYAHT Y" at the DOS command line starts
MLYaht with the Yaht Bonus mode off.

T (Top Ten Scores Mode): This command is different from the T command
available during play.  When this command is used from the DOS command
line, no top ten scores are kept, nor can any be viewed.  This keeps
the game from bombing when run on a write-protected diskette.

B (Black & White Mode): Use this command when running MLYaht on a
composite color monitor, if the regular color mode is unreadable. (It
is not necessary to use this command when running MLYaht on a
monochrome monitor)


WHAT'S NEW


ADDED IN VERSION 1.3:

Microsoft mouse support.  See "M" above.

The 100 point bonus for additional Yahts.

The Pips on/off feature.  See "P" above.

Ability to see everyone's score at once.  See "A" above.

Problems with garbage appearing in the high-average-low score window
have been fixed.

Support for the Home and End keys when moving around the scorecard.

The Cursor-Left and Cursor-Right keys behave a little differently when
moving around the scorecard.

The Display mode now becomes active immediately upon its activation,
rather than waiting until the next roll.


ADDED IN VERSION 1.4:

Top Ten scores file added.  See "T" above.

Boss key feature added.  See "B" above.

Fixed minor problem with scorecard when mouse active.


ADDED IN VERSION 1.5:

Joystick support added!

Test for mouse driver added.

Mouse reset to help with mouse compatibility problems.

Changing of "Alt" commands to one-keystroke commands (eg: "Alt-S" is
now simply "S").  The Alt commands are still supported for those of
you who are used to them from prior releases.

Display of "Roll #n" in legend.

Add date to top ten file.

Allow ending game without exiting to DOS.

Optional "No additional Yaht bonus" mode.

Command line customizing parameters added.

Fixed mysterious "vanishing top-ten" bug.


ADDED IN VERSION 2.0
(Private release, only shown to a few beta testers)

Allow PC to play! (Average score: 207)

Arrow pointing to last player's selected scoring category in multiple
player game.

Added "No Top-Ten File" mode.


ADDED IN VERSION 2.1

Fixed minor bugs in 2.0

Improved PC's playing logic. (Avg score: 235)

Added statistics for multi-player game (High/Low/Avg score, wins)

Changed default answers to some yes/no questions

Added composite monitor support.

Modified monochrome monitor "colors".


ADDED IN VERSION 2.2

Fixed problem with "vanishing cursor" upon exit

Fixed screen border colors to work with EGA/VGA monitors


CREDITS

MicroLink Yaht was produced by the MicroLink Personal Computer Users'
Group.  The program was designed and written by Bob Lancaster.  Any
comments, questions, compliments or brickbats can be addressed to the
author either at MicroLink Headquarters, or via the MicroLink BBS.

MicroLink PCUG Headquarters            MicroLink PCUG BBS
15865-B E. Gale Ave. Box 1003          300/1200/2400 - 24 Hours
Hacienda Heights, CA  91745            (818) 961-7903

Drop us a line, let us know what you think!



ACKNOWLEDGEMENTS

Many thanks to all who played earlier versions of MLYAHT, and provided
me with much needed advice, criticism, and wish-lists.

Thanks also to Kent Myers for allowing me to examine, learn from, and
utilize (read "steal") his mouse-handling routines. (Note: those
programmers interested in utilizing a mouse in their programs are
encouraged to purchase Charles C. Edwards' book, Advanced Techniques
in Turbo Pascal, published by Sybex.  He devotes an entire chapter to
the Microsoft Mouse interface.)

"Yahtzee" is a trademark of the Milton Bradley Co.

The traditional name of this game is "Yacht", rather than "Yaht".
Since this game was first distributed around the time of the '87
America's Cup races, I misspelled the name so as not to
unintentionally mislead people.  Actually, I just didn't know how
to spell it, but this makes for a better story. -BL

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2493

     Volume in drive A has no label
     Directory of A:\

    MLYAHT   EXE     37088   9-22-89  11:59a
    MLYAHT   DOC     10962   9-22-89  12:19p
    FILE2493 TXT      6665  10-04-90  11:22a
    MLSHUT   EXE     43776   8-14-89  10:31p
    MLSHUT   DOC     15049   8-14-89  10:48p
    MLOTRA   EXE     47136  10-28-89  12:09p
    MLOTRA   DOC     12988  10-28-89  12:10p
    GO       BAT        28  10-04-90   5:21a
    GO       TXT      1034  10-04-90  11:21a
            9 file(s)     174726 bytes
                          142336 bytes free
