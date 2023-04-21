---
layout: page
title: "PC-SIG Diskette Library (Disk #1556)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1556/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1556"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LETTER SHIFT/TRIPLE OTHELLO"

    Puzzle people will be very happy with this one.  Imagine, if you will, a
    square made of 16 smaller squares, four to a side.  In each of these is
    placed one of the first fifteen letters of the alphabet, leaving one
    square empty.  You define how many times the computer will shuffle these
    letters.  Now, arrange them alphabetically while the computer counts
    your moves.  Sounds simple, doesn't it?
    
    TRIPLE OTHELLO is an interesting variation on the classic strategy board
    game.  Instead of playing one game against the computer, you play three
    games at once.
    
    The object of TRIPLE OTHELLO is to win more pieces than the computer.
    Winning pieces is accomplished by "outflanking."  "Outflanking" means
    you place your piece in such a way that you have your pieces on both
    sides (right and left, or above and below) of the computer's piece or
    pieces.  Whatever piece(s) you "outflank" become yours.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1556.TXT

{% raw %}
```
Disk No: 1556                                                           
Disk Title: Letter Shift/Triple Othello                                 
PC-SIG Version: S1                                                      
                                                                        
Program Title: Letter Shift                                             
Author Version: 1.0                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
Puzzle people will be very happy with this one.  Imagine, if you will, a
square made of 16 smaller squares, four to a side.  In each of these is 
placed one of the first fifteen letters of the alphabet, leaving one    
square empty.  You define how many times the computer will shuffle these
letters.  Now, arrange them alphabetically while the computer counts you
moves.  Sounds simple, doesn't it?                                      
                                                                        
File Descriptions:                                                      
                                                                        
LS       EXE  Compiled version of LETTER SHIFT.                         
LS       DOC  Documentation for LETTER SHIFT.                           
LS       PAS  Source code of LETTER SHIFT.                              
Program Title: Triple Othello                                           
Author Version: S1                                                      
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
TRIPLE OTHELLO is an interesting variation on the classic strategy board
game.  Instead of playing one game against the computer, you play three 
games at once.                                                          
                                                                        
The object of TRIPLE OTHELLO is to win more pieces than the computer.   
Winning pieces is accomplished by "outflanking."  "Outflanking" means   
you place your piece in such a way that you have your pieces on both    
sides (right and left, or above and below) of the computer's piece or   
pieces.  Whatever piece(s) you "outflank" become yours.                 
                                                                        
When the title screen is displayed, you are asked if you want to be x or
o. Once you have entered your choice, the boards are drawn and you will 
see a flashing cursor.  To play, you move the flashing cursor around the
board (using the cursor keys).  When you are ready to play your piece,  
type an "x" or an "o" (depending on what you chose at the title screen).
Play moves from board to board automatically as you and the computer    
make one move each.                                                     
                                                                        
File Descriptions:                                                      
                                                                        
TOTHELLO EXE  TRIPLE OTHELLO program.                                   
TOTHELLO TXT  Information file.                                         
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## TOTHELLO.TXT

{% raw %}
```
                            Triple Othello             by Reggie Howard
        
        	Othello is a strategy board game for 2 players (in this
        case, one player and one computer.)  It is played on an 8 by 8
        board and play begins with 4 pieces placed in the center. 
        Players take turns placing their pieces until the board is full
        or no more moves can be made.
        	The players must place their pieces so that they "out
        flank" at least one of their opponent's pieces.  "Out flanking"
        means that you place your piece in such a way that you have your
        pieces on both sides (right and left, or, above and below) of
        your opponent's piece or pieces.  What ever piece(s) you
        "outflank" become your own.  And the game is won or lost
        depending on who has more pieces when the final move is made. 
        Many times the player who appears to be winning sees a majority
        of his pieces lost in the final moves.
        
        	The only difference between Othello and Triple Othello
        is that with Triple Othello you play three games at once.  This
        may seem like an unfair challenge but with persistence you
        should learn to beat the computer on at least 2 of the 3
        boards.   Your task is somewhat simplified too as the computer
        does all the piece changing and prevents any misplacement of the
        pieces.
        	When you start the program you are first asked if you
        want to be x's or o's.  Once you have made your choice the
        boards are drawn and you will see the flashing cursor.  To play,
        you move around the board with the arrow keys and when you are
        ready to place your piece type an "x" (or "o" if that is what
        piece you chose).  Play moves from board to board automatically
        as you and the computer make one move each.  One thing which may
        be confusing at first is that the computer moves first on the
        middle board while you move first on the right and left boards. 
        This means that the computer makes two moves in a row as play
        moves from board one to board two and you must make two moves in
        a row as play moves from board two to board three.
        	Remember the rules for placing your pieces.  If you try
        to place in an illegal position the computer refuses your
        entry.  As the board becomes fuller there will be times when one
        player is unable to move.  If you think this is the case for you
        then enter "0".  The computer will then make a check and if
        there is a move you can make it will beep and you will have to
        move.  If you need help while playing simply press F1.  
        	I hope you enjoy Triple Othello and good luck!
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1556

     Volume in drive A has no label
     Directory of A:\

    FILE1556 TXT      4071  10-20-89   1:57p
    GO       BAT        38  10-12-89  12:24p
    GO       TXT       694   1-01-80  12:24a
    LS       DOC      2611   6-23-89  11:34p
    LS       EXE     12576   6-23-89  11:40p
    LS       PAS      8404   6-23-89  11:41p
    TOTHELLO EXE     56773   8-03-88   8:18p
    TOTHELLO TXT      2845   8-03-88   7:34p
            8 file(s)      88012 bytes
                           70144 bytes free
