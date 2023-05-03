---
layout: page
title: "PC-SIG Diskette Library (Disk #3730)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3730/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3730"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BOGOUT.DOC

{% raw %}
```
BogOut for Windows



        Playing the Game


        Rules of the Game


        Preferences


        Options


Playing the Game


        Description

        Starting the Game

        Entering Words

        Timer

        Finding Words on the Board


Description

     This is a game based on the dice game BOGGLE, modified for Windows. The game is
played with a board of square holes the size of dice. There is one dice for each hole with a letter
on each side. The die are shaken until they fall into the holes. Then a timer is set to stop after
three minutes, and the player(s) try to find words on the board until the timer stops.


Starting the Game

     To play the game, select the options you want (see Preferences). Then select "New Game"
(for a new board) or "Restart Game" (to play the same board) from the Game menu. Press
<enter> when the message box appears.


Entering Words

    You want to find as many words as you can. Enter each word you see in the board (see Rules
of the Game). There are three ways of entering words. You may hold down the left mouse button
and drag the mouse over each dice with the letters you want, then release the mouse button
when the word is complete. You may click on each letter of the word with the mouse, or you may
type the word on the keyboard. With the last two methods you can complete the word in three
ways. You can hit <enter>, or click the right mouse button, or click on the pushbutton labeled
"Enter" under the board. To erase a word, you can either hit <escape> or click on the pushbutton
labeled "Cancel" under the board. If the word is not accepted for some reason, a message box
will be displayed to describe the error. You can then hit <enter> to correct the word, or hit
<escape> to erase the word. You may stop the game any time by selecting "Stop Game" from
the Game Menu.


Timer

     You have three minutes to find words (unless you change the time limit in the preferences'
box). A timer is displayed to show how much time is left (see Timer Type). When time is up, a
message box will come up, and you can't enter any more words.


Finding Words on the Board

     To see at the words you entered, or words the computer found (if you selected option Show
Words), use the scroll bar on the right of the word list. To show where a word is on the board,
double-click the word that you want to see, and that word will be mapped out on the board.


Rules of The Game


        Forming Words

        Scoring


Forming Words

     To form words, start with any dice on the board, and move to any adjacent dice. Each dice
can be left, right, up, down, or diagonal from the last. You cannot use the same dice twice in the
same word, but if there are two separate die with the same letter, you can use both in the same
word.
For example, on the board:

                        Y  T  R  O  N
                        E  I  E  A  N
                        A  Z  I  N  L
                        S  P  G  L  E
                        H  O  E  S  F

TIRE can be formed by "T"(row 1, column 2) "I"(row 2, column 2) "R"(row 1, column 3) "E"(row 2,
column 3). SELL is "S"(row 5, column 4) "E" (row 4, column 5) "L"(row 3, column 5) "L"(row 4,
column 4). POPE is invalid - "P"(row 4, column 2) "O"(row 5, column 2) "P"(row 4, column 2)
"E"(row 5, column 3) - because the same "P" is used twice. Words must be at least four letters
long.


Scoring

    The scoring is as follows:

        4 letter words ............... 1 point
        5 letter words ............... 2 points
        6 letter words ............... 3 points
        7 letter words ............... 5 points
        8 or more letter words ...... 11 points

The points for each word are added for the total score. The top ten scores are saved depending
on the options chosen, Board Size and Contained Words. If Look up Words is not chosen or if
the Time Limit is more than three minutes, the score is not saved. To erase all scores, delete the
file "TOPTEN.DAT".


Preferences

        Contained Words

        Look up Words

        Show Words

        Multiple Players

        Minimum Points

        Time Limit

        Board Size

        Word Order

        Timer Type


Contained Words

     Determines whether words that are contained in other words are allowed. For example, if
Contained Words is not chosen, and "RESTOCKS" was already entered, the words "REST,"
STOCK", and "STOCKS" would not be allowed.


Look up Words

     Determines whether the word will be checked in the dictionary to see if it is real.


Show Words

     With this option selected, all words found on the board will be displayed in a separate list
when the game is finished.


Multiple Players

     Use this option to let two or more people (up to ten) play against each other on the same
board. The first player can choose "New Game" while the other players are not looking. When
the first player is finished, he chooses "Restart Game", and lets the next player play. The next
player must hit <enter> for the box that says "Game Ready" to see the board. When this player
is done, he chooses "Restart Game" for the third player, etc. The player's scores can be seen by
selecting Player scores under the "options" menu.


Minimum Points

         This will cause the game board to have a total point count of at least the number entered.
The computer will continue creating boards and counting up the total points (the total points of
each board will be displayed in gray) until it finds a board with at least the number entered. If a
large number is entered, it may take the computer a very long time to create the board. You may
either type the number in the box, or click on the up and down arrows to increase or decrease the
number.


Time Limit

         This determines the number of seconds that you have to enter words. The default is 180
(three minutes). You may either type the number in the box, or click on the up and down arrows
to increase or decrease the number.


Board Size

         Determines whether the board will hold four die in each row and column or five die in each
row and column.


Word Order

         Determines the order that words in the player and computer's lists are displayed in the list
box, either sorted alphabetically, sorted by increasing word length, or decreasing word length.


Timer Type

         Determines whether the timer will be a digital clock, a bar, or an hourglass.


Options

        Preferences (See above)

        Player scores

        High scores

        Add dictionary word

        Delete dictionary word


Player scores

         Displays all players scores in a multiple player game.


High scores

         Displays the top ten scores recorded.


Add dictionary word

         Add a word to the game dictionary.


Delete dictionary word

         Delete a word from the game dictionary.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  PC-SIG Disk #3730 BOGOUT  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Start the game, type:  WIN BOGOUT  (press Enter)                    ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.TXT

{% raw %}
```
Bogout for Windows
------------------

This is a game based on the dice game boggle. It must be run under
Microsoft Windows 3.0 or greater. There should be six files included:

BOGOUT.EXE     - Bogout game
BOGOUT.HLP     - Bogout help file
DICTIONARY.DAT - game dictionary
DICTNARY.IDX   - index for dictionary

BOGOUT.DOC     - directions
README.TXT     - this file

Copy the first four files to your windows directory, or a new directory.
Go into the Program Manager in Windows, go into the Games group (or
any other group you want the game in), choose File from the Program
Manager menu, choose New from the File menu, and enter "Bogout" for
description, enter the path where you copied bogout.exe and "bogout.exe"
for the command line, and enter the path again for the working
directory.

Read the file BOGOUT.DOC for directions. This file is identical to the
Windows help file.

Quickstart - Click on the Game Menu. Click on New Game. Wait for the
message "Game Ready". Click on "OK". Place the mouse over one of the
squares. Hold down the mouse button. Drag the mouse over adjacent
squares (left right, up, down, or diagonal). You will notice the letters
appearing over the box labelled "Your Words". Release the mouse button.
If the letters form a valid word, it will appear under "Your Words".
Otherwise, you will get an error message.

If you like this game, please send $10.00 to:

Lance Frohman
2035 Filbert Street #102
San Francisco, CA  94123

Send any suggestions or complaints. If you would like the source code
on a diskette, send $25.00 to this address.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3730

     Volume in drive A has no label
     Directory of A:\

    BOGOUT   EXE     62208  11-17-92  12:00p
    BOGOUT   HLP     16012  11-17-92  12:00p
    DICTNARY DAT    139453  11-17-92  12:00p
    DICTNARY IDX       899  11-17-92  12:00p
    BOGOUT   DOC      7098  11-17-92  12:00p
    README   TXT      1617  11-17-92  12:00p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       693   6-03-93  11:12a
            8 file(s)     228011 bytes
                           91136 bytes free
