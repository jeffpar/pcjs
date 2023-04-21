---
layout: page
title: "PC-SIG Diskette Library (Disk #2558)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2558/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2558"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2558.TXT

{% raw %}
```
Disk No: 2558                                                           
Disk Title: PowerChess                                                  
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: PowerChess                                               
Author Version: 6.0                                                     
Author Registration: $42.00                                             
Special Requirements: 512K RAM and CGA,EGA,VGA or Hercules Graphics.    
                                                                        
POWERCHESS is one of the best chess playing games on the market today.  
POWERCHESS is a full screen, highly graphic chess game designed for both
beginners and advanced players.  Because of the clearly arranged screens
and the complete implementation of international chess rules, POWER     
CHESS can also be highly recommended for chess classes.                 
                                                                        
POWERCHESS is filled with outstanding features.  It obeys international 
chess rules, en'passant, 50-move drawing rule, three repetitions of a   
position recognizes stalemate, and technical draw.  The screen displays 
the chessboard, as well as playing time for Black and White, an index   
of the last 21 moves, an index of all possible moves concerning the     
position on the board, announcement of a check mate in N moves, and     
computer hints for the next move.  Using the computer hints you can even
have the computer play against itself.  Chess moves can be forced and   
even taken back, in case you change your mind.  Different levels of play
can be selected, from beginner to highly advanced.  The chess board can 
be set up in special positions so you can experiment with different     
types of play.                                                          
                                                                        
POWERCHESS provides a library of games and interesting positions which  
can be easily extended.  POWERCHESS can be your own private chess tutor,
providing you with hours of enjoyment and learning.                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## HELP_PCH.TXT

{% raw %}
```
     Help for PowerChess (TM) V6.0
     =============================

Contents :

1) Description of the windows
2) Using the mouse
3) Using the keyboard
4) How to manage the library of games
5) How to quit the program


1) Description of the windows

Each window consists of a header line with a
white ESC-button, an optional pulldown menu
line and a working area. The ESC-button is
mostly used to close a window.
In the main menu the ESC-button has the meaning
of "quit program", which is equivalent to the
pulldown menu option "Game" / "Quit". The main
menu line shows the items "Game", "File", "Play"
and "Information".

Game :
  New game ........... Start a new game
  Change board ....... Flip the board
  Edit board ......... Enter special positions
  Quit ............... Quit program
File :
  Load game .......... Load a game from disk
  Store game ......... Store a game on disk
  Print game ......... Print a move list
Play :
  Force move ......... Force a computer move
  Undo move .......... Undo the last move
  Level .............. Set a new level (=time)
  Beginners .......... Easiest level
  Multimove .......... Multimove on/off
  Hint ............... Computer hint on/off
  Sound .............. Sound on/off
Information :
  Current moves ...... All possible moves
  List of moves ...... List of last 50 moves
  Help ............... This help text

The chess board appears in square notation within
the working area. To the right there is a clock
counting the ellapsed time, a window with the
current state of the game and the move list
with the best evalution from last computer
search.


2) Using the mouse

The mouse cursor is a white arrow symbol, which
follows the mouse movements.

!!! Attention : A mouse driver must be installed.

When you select an option from the main menu by
pressing the left mouse button, a pulldown menu
is shown until you release the mouse button.
You can pull down the marked area in the menu by
drawing the mouse down. Releasing the left mouse
button results in the activation of the command
pointed to by the mouse cursor.

When you press the left mouse button while the
mouse cursor is on the chess board, the piece
cursor (two white thick lines) is put to the
square pointed to by the mouse cursor. Any piece
on this square, which is ready to move, is
picked up. You can now tell the computer where
the piece should be placed by selecting an other
square with the mouse. If the first selected
square is empty or the selected piece can't be
moved, a short acustic signal indicates the
illegal move. (sound option must be ON).

If you choose the menu option "Game" /
"Load game", a listbox with all games in the
current directory is shown. This listbox shows
a part of the current directory. The size of this
part can be seen on the right side (slider).
Clicking any place in the scroll bar will scroll
the contents of the listbox up or down depending
on the place of the mouse cursor. If you click
the ESC-button, the program leaves the load option
without loading any game. If you release the
mouse button pointing to a certain game in the
listbox, this game is loaded into memory and
ready to continue playing.
Other listboxes (e.g. move list, list of possible
moves) can be handled similarly to the listbox
described above.


3) Using the keyboard

The <ESC>-key has the same meaning as the
ESC-button clicked with the mouse. The <Enter>-
key is used as a confirmation key and for
move input too.

Arrow keys move the position of the piece cursor
or the marked position in a pulldown menu or
in a listbox.

Pulldown menus are activated by pressing the keys
<alt> + the underlined character in the menu
simultaneously. The options of a pulldown menu
are chosen accordingly.


4) How to manage the library of games

Selecting the menu item "File" / "Load game"
shows a listbox of the game files in the current
directory. Choosing a game from this list
loads it and displays a window with a comment
line. When you close this window by clicking
the ESC-button or by pressing the <ESC> or the
<Enter>-key for confirmation, you may continue
the restored game.

If you like to save a game on disk, you simply
select the menu item "File" / "Save game". A
small window will ask for the file name.
An additional window allows you to store a
comment line together with the current game.

Selecting the menu point "File" / "Print game"
prints the current move list.


5) How to quit the program

Click the ESC-button on the left side of the
main window or select the menu item "Game" /
"Quit". Pressing the ESC-key on your keyboard
will do the same. A window with two buttons
("Yes","No") is shown midscreen to make sure
that you really want to quit the program.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2558

     Volume in drive A has no label
     Directory of A:\

    CHESS    EXE    137856   7-01-90   6:00a
    HELP_PCH TXT      4853   7-01-90   6:00a
    PATTERN  MSK      3360   7-01-90   6:00a
    OPENING  W        4992   7-01-90   6:00a
    OPENING  E        9600   7-01-90   6:00a
    OPENING  B        3264   7-01-90   6:00a
    GAME1    PCH       297   7-01-90   6:00a
    GAME2    PCH       320   7-01-90   6:00a
    GAME3    PCH       327   7-01-90   6:00a
    GAME4    PCH      2014   7-01-90   6:00a
    GAME5    PCH       325   7-01-90   6:00a
    GAME6    PCH       324   7-01-90   6:00a
    GAME7    PCH       308   7-01-90   6:00a
    GAME8    PCH       320   7-01-90   6:00a
    GAME9    PCH      3115   7-01-90   6:00a
    GAME10   PCH       326   7-01-90   6:00a
    DIAG27   PCH       306   7-01-90   6:00a
    DIAG28   PCH       306   7-01-90   6:00a
    DIAG29   PCH       303   7-01-90   6:00a
    DIAG30   PCH       303   7-01-90   6:00a
    DIAG31   PCH       306   7-01-90   6:00a
    DIAG32   PCH       303   7-01-90   6:00a
    DIAG33   PCH       306   7-01-90   6:00a
    DIAG34   PCH       303   7-01-90   6:00a
    DIAG35   PCH       303   7-01-90   6:00a
    DIAG36   PCH       300   7-01-90   6:00a
    DIAG37   PCH       303   7-01-90   6:00a
    DIAG38   PCH       303   7-01-90   6:00a
    DIAG39   PCH       300   7-01-90   6:00a
    DIAG40   PCH       297   7-01-90   6:00a
    DIAG41   PCH       303   7-01-90   6:00a
    DIAG42   PCH       306   7-01-90   6:00a
    DIAG43   PCH       303   7-01-90   6:00a
    DIAG44   PCH       271   7-01-90   6:00a
    DIAG45   PCH       298   7-01-90   6:00a
    DIAG46   PCH       306   7-01-90   6:00a
    DIAG47   PCH       306   7-01-90   6:00a
    DIAG48   PCH       303   7-01-90   6:00a
    DIAG49   PCH       303   7-01-90   6:00a
    DIAG50   PCH       318   7-01-90   6:00a
    DIAG51   PCH       300   7-01-90   6:00a
    DIAG52   PCH       303   7-01-90   6:00a
    DIAG53   PCH       298   7-01-90   6:00a
    DIAG54   PCH       303   7-01-90   6:00a
    DIAG55   PCH       303   7-01-90   6:00a
    DIAG56   PCH       298   7-01-90   6:00a
    FILE2558 TXT      2739   3-18-91   4:15p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT       848   2-26-91   1:49a
           49 file(s)     184290 bytes
                          105472 bytes free
