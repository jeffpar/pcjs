---
layout: page
title: "PC-SIG Diskette Library (Disk #3533)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3533/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3533"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BIG2.DOC

{% raw %}
```


                               BIG2 Version 1.01
                  Copyright (C) 1990 TEGL Systems Corporation
                              All Rights Reserved

     This product is protected under Canadian copyright law and
     international treaty provisions, it may not be sold, modified for
     redistribution or re-packaged individually without the specific
     written permission of TEGL Systems Corporation.

     This is a shareware product. You may make copies and distribute Big2
     among your friends, provided there is no fee charged for such
     copying and distribution and that it is distributed ONLY in its
     original, unmodified form.


     -------------------------------------------------------------------
     SYSTEM REQUIREMENTS
     -------------------------------------------------------------------
     IBM PC or compatible, 512K memory, disk drive and an EGA or VGA
     display adaptor and monitor.


     -------------------------------------------------------------------
     Notes on this guide.
     -------------------------------------------------------------------

     A word appearing between two curly braces '{}' indicates that it is
     displayed as an icon-button on the screen. A item appearing between
     two braces is a key. If you are using a mouse click on the icon, if
     you don't have a mouse press the indicated key.

     Some actions require a mouse or at least the mouse pointer. If you
     don't have a mouse the cursor keys will move the mouse pointer
     around the screen, simply press enter to simulate a mouse click.


     -------------------------------------------------------------------
     Big2
     -------------------------------------------------------------------

     The game of BIG2 originated in Hong Kong, where gambling is a way
     of life. BIG2 is now played by almost 99% of the oriental
     population and ranks as second to Mahjong in social entertainment.

     Although simple to learn, when played in the hands of a master,
     Big2 has the avant-garde of chess and the finesse of bridge.

     The object of this game is to be the first player to play all the
     cards in their hand while attempting to maximize the number of
     cards remaining in the other players hands.


     -------------------------------------------------------------------
     HOW TO PLAY THE GAME
     -------------------------------------------------------------------

     The game is played in a counter-clockwise fashion beginning with
     the player that holds the 3 of diamonds. The player must lead with
     the 3 of diamonds as a singleton or with a set of cards that
     includes the 3 of diamonds. Valid leading plays may be a singleton
     (1 card), pair (2 matching rank cards), triplets (3 matching rank
     cards), or a 5 card poker sequence. The valid 5 card poker
     sequences are a straight, flush, full house, four of a kind or a
     royal/straight flush.

     Subsequent plays must be larger in rank with the same number of
     cards. For example, if the 3 was played as a singleton, valid plays
     are any single card higher then the 3. If the following player
     plays an 8 of clubs, the next play must be an 8 of hearts or
     higher.

     Play continues until either the highest set of cards are played,
     which in the case of singletons is the 2 of spades (hence the name
     of the game), or everyone passes, relinquishing the control to the
     player who played the last set of cards.

     The person now in control, has the choice to play in singletons,
     pairs, three of a kind or 5 cards. What is played depends on the
     best way to rid your hand of all cards as well as regaining control
     of the game.

     When a player plays their last set of cards, each player counts the
     remaining cards in their hand and pays (usually a dollar a card)
     the difference in the number of cards between players. Sometimes,
     this method of cross-payment results in a monetary gain even though
     you are not the winner.

     A player is considered (Doubled) if they hold 10 or more cards, and
     (Tripled) if they hold the original 13 cards. Doubling and Tripling,
     of course, applies to the monetary opulence that is gained.

     In this electronic version of BIG2, monetary values are tracked in
     terms of positive and negative points.


     -------------------------------------------------------------------
     CARD RANKS
     -------------------------------------------------------------------

     A Straight Flush consists of 5 cards of the same suit in sequential
     order. An Ace, Two, Three, Four and Five are considered greater in
     rank then a Royal flush of Ten, Jack, Queen, King and Ace, since
     Twos are the highest rank in this game.

     Four of a kind consists of 5 cards with a singleton and four cards
     of the same rank. Four twos are greater in rank than four Aces.

     A Full House is three cards of the same rank with a pair. 3 (Twos)
     with a pair is greater in rank than 3 Aces with a pair of (Twos).

     A Flush is any 5 cards of the same suit. Flushes are compared in
     rank first, before comparing suits.

     A Straight is any 5 cards in sequential order.

     Three of a kind must be three matching rank cards and should not be
     confused with five card plays. However, three of a kind with a pair
     can be played as a full house.

     Pairs are compared rank first, with twos as the largest pair.
     Spades are higher in rank then Hearts, followed by Clubs and
     Diamonds.

     Singletons are usually single cards that are left over from cards
     that form a set.  However, it is sometimes wiser to break up your
     sets and play them as singletons, if there is any danger of being
     doubled or tripled or if the set contains the highest singleton.


     -------------------------------------------------------------------
     PLAYING THE COMPUTER VERSION
     -------------------------------------------------------------------

     Big2 is normally played until someone runs out of money.

     In this version, the goal is to reach 100 points. You can change
     this value through one of the options under {OPTS}/[F2].

     To select a card or a series of cards, simply click with the left
     mouse button on the card(s) that you wish to play. Then click on
     {PLAY}/[F10] with the left mouse button to play the selected cards.
     To PASS, click on {PLAY}/[F10] without having selected any cards.

     Clicking on {SORT}/[F6] will alternately sort your cards in rank,
     suit, or suggested set order.  You can also manually sort the cards
     by dragging (holding the right mouse button on a card while moving)
     a card to the desired card position (before releasing the mouse
     button).

     Clicking on {HELP}/[F8] provides a suggestion for playing your
     cards. A selection will be made if a play is found, otherwise a
     beep indicates a pass. Click on {PLAY}/[F10] to play the selected cards.

     Clicking on {SHOW}/[F5] may be used at any point in the game to
     display your opponent's cards. The cards remain displayed until
     you click on {SHOW}/[F5] again.

     Clicking on {GAME}/[F9] will shuffle the cards and begin a new round.

     Clicking on {SAME}/[F3] will redeal the same cards, allowing you
     to try alternate plays with the same game.

     Clicking on {AUTO}/[F1] makes the game play by itself. For those who
     like to watch rather than participate.

     {INFO}/[F3] brings up information on playing Big2.

     {QUIT}/[F7] ends the game and exits to DOS.

     {OPTS}/[F2] provides a number of options so that you can change the
     original settings of Big2. Things like player names, volume, etc.

     A game may be replayed, at any time, by clicking on the game number
     button, on the bottom right of the screen, and then entering the
     game number that was originally displayed.

     -------------------------------------------------------------------
     COMMAND LINE PARAMETERS
     -------------------------------------------------------------------

     /nomusic  - turns off music at the start of the program.

     /nomouse  - This parameter should be used if your mouse driver
                 doesn't work with program. You can still use the
                 keyboard to move the mouse pointer.

     -------------------------------------------------------------------
     OTHER GAMES
     -------------------------------------------------------------------
     TEGL Big2 Version 1.01 is one out of several exceptional graphical games
     developed for the Shareware market. Registration is required if you
     have the intention of keeping a copy of this game for your
     entertainment. A registration fee of $15 is all it takes to receive
     the latest version of TEGL Big2.

     Other games available are: TEGL Klondike Solitare, TEGL Mahjong
     Solitaire, TEGL Monopoly, and TEGL Mille Bornes.

     For only $35 you can get our entire games package (see order
     form on disk - "order.doc").


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3533

     Volume in drive A has no label
     Directory of A:\

    BIG2     DOC      9360   7-10-90   7:02p
    BIG2     EXE    158550   7-10-90   3:26a
    BIG2     USR        81   7-10-90   3:45a
    GO       BAT        34   4-01-93  11:08a
    SHOW     EXE      2040   9-12-88  10:48a
            5 file(s)     170065 bytes
                          149504 bytes free
