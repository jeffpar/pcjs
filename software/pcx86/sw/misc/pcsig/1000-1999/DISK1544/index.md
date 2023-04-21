---
layout: page
title: "PC-SIG Diskette Library (Disk #1544)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1544/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1544"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "KLONDIKE AND SLOT"

    KLONDIKE is a traditional gambling game similar to a card game most of
    us know as "Solitaire."  KLONDIKE differs from Solitaire in that you can
    only go through the deck one time, cards are dealt from the deck one at
    a time instead of three at a time, and betting is an important part of
    the game.
    
    The object of KLONDIKE is to put as many cards as possible on the
    "piles."  This is accomplished by moving the cards around on the screen
    by using either the mouse or the keyboard.  This game requires an EGA
    graphics adapter, which makes the graphics look so good it looks like
    you're playing with a real deck of cards.
    
    SLOT, by Ted Gruber Software, is a terrific slot machine simulation for
    your EGA systems.  You bet from 1 to 5 coins and then give the one armed
    bandit a pull.  If you're lucky enough you can make enough lucky bucks
    to pay for that new car you wanted.  It's so much like the casino slot
    machines you'll forget you're playing at home.  There are five ways to
    win, if you've got the guts to play 5 coins at a time that is, and the
    graphics alone make this program worth every quarter you put into it.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1544.TXT

{% raw %}
```
Disk No: 1544                                                           
Disk Title: Klondike and Slot                                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: Klondike                                                 
Author Version: 1.0                                                     
Author Registration: $10.00                                             
Special Requirements: EGA.                                              
                                                                        
KLONDIKE is a traditional gambling game similar to a card game most of  
us know as "Solitaire."  KLONDIKE differs from Solitaire in that you can
only go through the deck one time, cards are dealt from the deck one at 
a time instead of three at a time, and betting is an important part of  
the game.                                                               
                                                                        
The Object of KLONDIKE is to put as many cards as possible on the       
"piles".  This is accomplished by moving the cards around on the screen 
by using either the mouse or the keyboard.  This game requires an EGA   
graphics adapter which makes the graphics look so good it looks like    
your playing with a real deck of cards.                                 
                                                                        
File Descriptions:                                                      
                                                                        
KLONDIKE DOC  Program documentation.                                    
KLONDIKE EXE  Main program.                                             
Program Title: Slot                                                     
Author Version: 1                                                       
Author Registration: $10.00                                             
Special Requirements: EGA.                                              
                                                                        
SLOT, by Ted Gruber Software, is a terrific slot machine simulation for 
your EGA systems.  You bet from 1 to 5 coins and then give the one armed
bandit a pull.  If you're lucky enough you can make enough lucky bucks  
to pay for that new car you wanted.  It's so much like the casinos' slot
machines that you'll forget you're playing at home.  There are 5 ways to
win, if you've got the guts to play 5 coins at a time that is, and the  
graphics alone make this program worth every quarter that you put into  
it.                                                                     
                                                                        
File Descriptions:                                                      
                                                                        
SLOT     EXE  Main program.                                             
SLOT0    PBM  Data file.                                                
SLOT1    PBM  Data file.                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## KLONDIKE.DOC

{% raw %}
```
                               KLONDIKE

Klondike is a traditional gambling game similar to a card game most
of us know as "Solitaire".  Klondike differs from Solitaire in that
you can only go through the deck one time, cards are dealt from the
deck one at a time instead of three at a time, and betting is an
important part of the game. 

                          OBJECT OF THE GAME

The Object of Klondike is to put as many cards as possible on the
"piles".  This is accomplished by moving the cards around on the
screen by using either the mouse or the keyboard.  Legal moves are
described below.

                        HOW TO START THE GAME

To start the game, boot up your computer and type "KLONDIKE" at the 
DOS prompt.  If you have any difficulty doing this, consult your DOS
manual, or ask your local computer wizard.  The intro screen will
appear, accompanied by some music.  A prompt will ask you for your
name.  You don't have to give your real name, but you have to type
something, or the music will play forever.  Your name is used to save
your score in a file.  Up to 12 people can have their names and
scores saved in the file.

                             DEMO MODE 

At the intro screen, you may press F1 for the self-play demo mode. 
We strongly suggest that you do this and then stare at the demo for
several hours.

                           THE GAME SCREEN

The game screen is divided into four parts:

COLUMNS:   The 7 columns are at the top of the screen and are 
           labeled "1", "2", ..., "7"

PILES:     There are 4 piles on the right side of the screen.  The
           piles are labeled "Pile".  The piles resemble face-down 
           cards, but there are actually no cards there until you
           put cards there.  We just drew the backs of cards there
           because we thought it looked nice.

DECK:      The deck is in the lower left corner of the screen.  It is
           labeled "Deck".  There is a number above the deck
           representing how many cards are left in the deck.  A new
           game starts with 23 cards in the deck.

STACK:     The stack is right next to the deck.  It is labeled
           "Stack".  There is a number above the stack, which
           indicates how many cards are currently on the stack.  A
           new game starts with 1 card on the stack.

                         HOW TO PLAY THE GAME

Play the game by placing a bet and then using the mouse or the
keyboard to make legal moves.

                               BETTING

At the beginning of each new game, you will be prompted to enter a
bet.  The maximum amount you are allowed to bet will be displayed. 
Press return to bet the maximum amount, or enter any amount less than
the maximum and then press return.

Your bet will be multiplied by 52 and the amount subtracted from the
total, possibly leaving you with a negative total.  Every time you
put a card on a pile, your bet will be multiplied by 5 and added to 
the total.  For example:

Your total is 500 and you select the maximum bet, which is 10.  Your
bet is multiplied by 52, making the total amount wagered 520.  520 is
subtracted from 500 leaving -20.  Every time a card goes on a pile,
50 is added to your total, so the first card on the piles will give
you a total of 30, the second card will increase your total to 80,
etc.  Your 11th card will increase your total to 530, or 30 more than
you started with.  Therefore, your goal is to get 11 or more cards on
the piles.

                             LEGAL MOVES

COLUMN TO COLUMN:  To move a card or a series of cards from one column 
                   to another column, there are three restrictions.  
                   The top card of the column you are moving from must 
                   be one less than the bottom card of the column you 
                   are moving to, and must be a different color.  That 
                   is, you can move a black two onto a red three.
                   Additionally, you may move a King to any empty 
                   column.

COLUMN TO PILE:    Sometimes cards are automatically moved from the 
                   column to the piles.  If you want to move a card 
                   from a column to a pile, it must be sequentially 
                   one greater than the highest card on the pile of 
                   the same suit.  That is, you can move the three of 
                   spades to a pile if the two of spades is already 
                   on the pile.

STACK TO COLUMN:   Same restrictions apply as from column to column.

STACK TO PILE:     Same restrictions apply as from column to pile.

DECK TO STACK:     One card is taken off the deck and moved to the 
                   stack.  Use this move carefully, as you can only go 
                   through the deck one time.

                          USING THE KEYBOARD

To move from column to column, first type the number of the "from"
column, then type the number of the "to" column.  To move from 
stack to column, first type "s", then type the number of the column.
To move column to pile, first type the number of the column, then
type "p".  To move from the stack to the pile, first type "s" and
then type "p".  To move from the deck to the stack, just type "d".

Upper case letters work as well as lower case letters.  Don't worry
if you type the wrong letter, Klondike will just ignore it.  Klondike
will also ignore any illegal moves.

                           USING THE MOUSE

First click the mouse on the card you want to move, then klick on the
place you want to move it to.  The exception is moving a card from
the deck to the stack.  This requires only one mouse click on the
deck.

                           AUTOMATIC MOVES

Several things happen automatically during game play.  For example,
if you take the last card off the stack, and there are still cards in
the deck, a card is automatically taken from the top of the deck and
put on the stack.  This is done simply for your convenience, and to
make the game proceed more quickly. 

Another automatic move which at first may seem a little confusing is
the way cards are moved sequentially to the piles.  A card will jump
from a column to a pile or from the stack to a pile only if Klondike 
determines that the card is no longer useful to have in the columns. 
For example, a red three will automatically go on the piles only if
both the black twos have been played.  If the red three does not
automatically go on the pile, you have the option of moving it there
yourself (assuming this is a legal move).

                           WINNING THE GAME

You decide whether you have won the game.  You may have won if you
have put 11 or more cards on the piles.  You may have won if you put
all the cards on the piles.  You may have won if you achieved a
higher score than the last time you played Klondike.

                    STARTING A NEW GAME (SHUFFLE)

Press F10 to shuffle the cards and start a new game.  You may do this
at any time during game play.

                           ENDING THE GAME

Press ESC at any time to return to DOS.

                          FILES ON THE DISK

KLONDIKE.EXE:  The program.  The only file you really need.

KLONDIKE.DOC:  This file.  Nice, but not really necessary.

KLONDIKE.DAT:  The file that stores your high score.  Delete this
               file when you give the game to someone else so that 
               they can start with a fresh game.

                           COPY PROTECTION

There is no copy protection.  Give the game to anybody you want.  Be
sure to tell them to send money to the author.

                        HARDWARE REQUIREMENTS

Klondike is designed to run on any PC or compatible with EGA.  Some
EGA systems will not run Klondike.  If you are having trouble running
Klondike, check that you have 256k of memory on the EGA card, you
have an enhanced (not RGB) monitor, and your dip switches on the card 
are set correctly.  Klondike may not run on an AT&T EGA system.

A mouse is nice to have, but not required.  If you have a mouse, and
it doesn't seem to be working with Klondike, make sure you have
loaded your mouse driver.  Klondike recognizes Microsoft and Logitech
mice, but should work with any mouse thant is 100% compatible with
these.

                        CONTACTING THE AUTHOR

You will probably want to write to the author and tell him how much
you like Klondike.  You will also want to send him $10.00 or more. 
The author likes to hear from you and thanks you in advance for
writing to him.  Here is the address to write to the author:

                        Ted Gruber Software
                        P.O. Box 13408
                        Las Vegas, NV 89112

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1544

     Volume in drive A has no label
     Directory of A:\

    FILE1544 TXT      3701  10-16-89   8:57p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       617   1-01-80   2:43a
    KLONDIKE DOC      8928   4-29-89  10:17a
    KLONDIKE EXE    119811   8-21-89   8:33p
    SLOT     EXE     36725   8-10-89  11:43a
    SLOT0    PBM     15960   7-21-89   2:30p
    SLOT1    PBM     40920   7-21-89   2:36p
            8 file(s)     226700 bytes
                           92160 bytes free
