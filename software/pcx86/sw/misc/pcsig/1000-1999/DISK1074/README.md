---
layout: page
title: "PC-SIG Diskette Library (Disk #1074)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1074/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1074"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GAME FUN FOR ALL"

    LAS VEGAS EGA CASINO is a package of games that use the special features
    of your EGA monitor.  Included are: Las Vegas Casino Black Jack, Las
    Vegas Video Poker, and Las Vegas Dollar Slots (MicroBucks).  You can
    choose any of the three games to play from the program menu.  It has
    great graphics and is so realistic you forget you're playing a computer.
    
    XWORD lets you quickly create a crossword puzzle that can be saved to
    disk and printed.  The crossword puzzle size can be from 15x15 to 23x23.
    You enter words with the cursor onto the puzzle grid.  Afterward, the
    words can be "deleted," with the word placed on a "move" list where it
    can be recovered and placed in another location. This program maintains
    word lists for across and down, and clues which you can see at any time.
    XWORD lets you enter words on the puzzle grid even before the clue list
    is made. After you finish your puzzle, the program lets you print a
    blank crossword puzzle, a clue list, and the solution to the puzzle.
    Your crossword puzzle can be saved to disk. Thus, the amount of
    crossword puzzles you can create is limited only by disk space and your
    own imagination.
    
    CASTLE DROGANYA is a reactive adventure game.  The course of the game is
    dictated by your response to the situation.  The goal is to free the
    souls of the townspeople who have been trapped by the evil Lord
    Droganya.
    
    LIAR'S POKER is a game utility that simplifies playing Liar's Poker, a
    betting game in which each player's "hand" is a dollar bill serial
    number.  The program generates random numbers that can be substituted to
    play the game.  It keeps records on disk for up to 20 "liars"
    (players), each liar having up to 20 numbers which can be printed or
    displayed on the screen.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CASINO.DOC

{% raw %}
```

                            THE LAS VEGAS EGA CASINO


     1.  How to start the program

     Put the disk in your disk drive, and type "A:", "B:", or other
     appropriate specifier to make that the default drive.  Type "casino"
     and then press the Enter key.  The program will start and the casino
     menu will appear.  Choose the game you want to play from the menu. 
     Start the game by pressing the appropriate function key.

     2.  How to get out of the program

     You can exit any game by pressing the Escape (Esc) key.  Pressing the
     Escape key while in a game will put you back in the casino menu.  At
     the casino menu, pressing Escape returns control to DOS.

     3.  About the program
     
     This program was prepared especially for PC-SIG in the Winter of 1987.
     It was written by a professional blackjack dealer turned programmer.
     Every attempt has been made to make the casino games as authentic as
     possible.
     
     4.  Sending money to the author
     
     In Las Vegas, it is customary to "toke" the dealer, which means
     giving the dealer a token of your appreciation for dealing you good
     cards.  In other words, spread the wealth around.  I think I have
     dealt you some pretty good cards here.  If you agree, please send an
     appropriate toke to your dealer at this address:
      
                         ******************************* 
                         *                             *
                         *     Ted Gruber              *
                         *     Ted Gruber Software     *
                         *     P.O. Box 13408          *
                         *     Las Vegas, NV 89112     *
                         *                             *
                         *******************************
     
     Any amount over $10.00 will put you on our mailing list for future
     products.

     5.  What is The Las Vegas EGA Casino?
     
     The Las Vegas EGA Casino is a collection of three favorite Las Vegas
     casino games.  Las Vegas Casino Blackjack is a simulation of the
     table game, as played on the Las Vegas Strip.  Las Vegas Video Poker
     is a recreation of the popular video poker machines played in
     casinos, bars, grocery stores, bowling alleys, convenience stores,
     airports, and other notorious Nevada hangouts.  Las Vegas Dollar
     Slots (MicroBucks) is a colorful visual fantasy. 

     6.  How The Las Vegas EGA Casino was written
     
     The Las Vegas EGA Casino was written in FORTRAN.  All of the graphics,
     other video output, and music are performed using FASTGRAPH, a highly
     optimized proprietary collection of assembly language routines that
     may be called from several popular FORTRAN and C compilers. FASTGRAPH
     supports EGA, CGA, Hercules and 16-color Tandy graphics.
     
     It is possible that we may wish to market FASTGRAPH in the near
     future as the ultimate programmer's graphics library.  If you would
     like more information about FASTGRAPH, please contact the author at
     the above address.  
     
     7.  System requirements for the Las Vegas EGA Casino
     
     The Las Vegas EGA Casino runs on IBM PC/XT/AT and compatible systems
     which have a 256K enhanced graphics adapter (EGA) and an enhanced
     color display (ECD).  It will also run on the new IBM Personal
     System/2 computers that are equipped with the video graphics array
     (VGA) and an EGA/VGA-compatible monitor.
     
     The program was developed and tested using DOS 3.2, but it should run
     on any DOS version 2.1 or above.  It requires at least 256K of memory.
     
     8.  What is special about The Las Vegas EGA Casino?
     
     The Las Vegas EGA Casino was written to take advantage of the fast
     and powerful graphics capabilities of the EGA, such as page swapping,
     direct memory mapping, and a 64-color palette.  It is the resolution
     and power of the EGA that make The Las Vegas EGA Casino so beautiful 
     and fast.  

     9.  How to play Las Vegas Casino Blackjack

     At the casino menu level, press F1 to choose Las Vegas Casino
     Blackjack.  If you need help, or if this is the first time you have
     played Las Vegas Casino Blackjack, press the F1 key again.  You can
     get help at any time by pressing the F1 key.  Pressing the F1 key
     will bring up the help menu.  From this menu, you may choose several
     options.  For example, you may choose to change the size of your
     bankroll or minimum bet, you may force a shuffle, you may change the
     number of decks, or you may view the current status of the deck (how
     many cards are left and the running count).  You do not need to
     change any of these things to play the game.  Las Vegas Casino
     Blackjack begins with a 52 card deck, a $20.00 bankroll and a $2.00
     minimum bet.  All you have to do to bet is press the up arrow key.
     Pressing the up arrow once will bet $2.00, pressing it again will
     increase the bet to $4.00, and so on.  You may also decrease the bet
     by pressing the down arrow key.  When you are satisfied with the size
     of the bet, press the Enter key to deal the cards. 

     Las Vegas Casino Blackjack will deal cards from 1, 2, 4, or 6 decks.
     A new hand will be dealt without shuffling if there are 6 or more
     cards left in the deck.  If all the cards in the deck are used up in
     the middle of a hand, the cards that are not showing on the table
     will be reshuffled and the hand will continue without interruption. 
     You may force a shuffle by choosing the "change number of decks"
     option from the help menu (press F1 then F4).  You may not force a
     shuffle in the middle of a hand.  

     You may bet from $1.00 to $500.00.  You may specify a bankroll of up
     to $10,000.  There is no limit on how much you can win. 

     Las Vegas Casino Blackjack deals two cards to the player and two
     cards to the dealer, one of them face down.  You must decide whether
     to hit, split, double-down, stay, or surrender before you see the
     dealer's hole card.  Press the space bar to hit and Enter to stay. 
     Press "D" to double-down and "S" to split.  If you want to surrender,
     press "Control-S".  If the dealer has an ace showing, you will be
     asked if you want to take insurance.  Respond with a "Y" if you want
     to take insurance, or an "N" if you don't.

     You may hit any hand including a blackjack, and you may double down
     on any hand including a blackjack.  If you have a pair of cards which
     have the same value, you may split them.  You may resplit pairs up to
     four times.  Aces that are split receive only one card each and may
     not be resplit.  You may double-down after you split.  You may
     surrender your first two cards if the dealer does not have a
     blackjack (late surrender). 

     The dealer will hit until at least a soft 17 is showing.  If the
     player busts, the dealer will display the hole card, but will not
     take any hits.  

     Las Vegas Casino Blackjack displays information about your bankroll,
     your bet, and your winnings in the upper right corner of the screen. 
     It also displays a little blue rectangle which represents the number
     of cards remaining in the deck.  When the entire rectangle is dark
     blue, the cards have just been shuffled.  When the top 1/4 of the
     rectangle is light blue, then about 25% of the cards have been dealt
     out, and so on.  If you want to know the exact number of cards left
     in the deck, you need to press F1 and then F5. To return to the game,
     press F1 again.

     For card-counters, and those who would be card-counters, you may
     check the status of the deck at any time.  Las Vegas Casino Blackjack
     keeps track of two popular card counts, Stanford Wong's High-Low
     count and Arnold Snyder's Zen count.  The idea is for the player to
     practice counting cards in his head and then use Las Vegas Casino
     Blackjack to check his accuracy.  To get the running count at any
     time, press F1 and then F5.  To return to the game, press F1 again.

     For more information about the rules of Blackjack and card-counting
     strategies, see the Blackjack references.

     10.  Blackjack references

     "Professional Blackjack" by Stanford Wong (Pi Yee Press, Morrow &
     Co., 1975, 1977, 1980, 1981)

     "Blackbelt in Blackjack" by Arnold Snyder (RGE, 1980, 1981, 1982)

     To order these and other fine books on gaming, contact: 

                        The Gamblers Book Club
                        630 South 11th Street
                        P.O. Box 4115
                        Las Vegas, Nevada 89127
                        (800) 634-6243

     11.  How to play Las Vegas Video Poker

     At the casino menu level, press F3 to choose Las Vegas Video Poker.
     Use the insert key or the up arrow key to insert coins.  Press Enter
     to deal five cards.  If you insert five coins, you don't need to hit
     Enter.  The cards are dealt automatically after the fifth coin.  Use
     the first five function keys to hold the cards you want to keep.  If
     you change your mind about keeping a card, you can press the function
     key again to "unhold" the card.  After you decide which cards to
     keep, press Enter.  The cards you didn't hold will be discarded, and
     they will be replaced by new cards.  The game will calculate your
     winnings.  This game is simple and fun to play.  It is the favorite
     of Las Vegas locals and millions of tourists.  Las Vegas locals and
     millions of tourists can't be wrong.

     12. How to play Las Vegas Dollar Slots (MicroBucks)

     At the casino menu level, press F3 to choose Las Vegas Dollar Slots
     (MicroBucks).  When the slot machine appears, press a key.  Any key
     except the Escape key will make the reels turn.  The Escape key will 
     return you to the casino menu.  The NumLock key will toggle the music
     off and on.  Have fun!


```
{% endraw %}

## DROGANYA.BAS

{% raw %}
```bas
100 REM *******************
110 REM * CASTLE DROGANYA *
120 REM * ADVENTURE GAME  *
130 REM *       BY        *
140 REM *  STEVE CHODES   *
150 REM *******************
170 CLS:KEY OFF
300 LOCATE 14,1
310 PRINT "HEED THIS STORY WELL, MY CHILD. AS LEGEND HAS IT, YON CASTLE WAS ONCE A THRIVINGCOMMUNITY.  ERE DROGANYA, THE DREADED LEADER OF THE BLACK DEMONS, ENSLAVED THE  TOWNSPEOPLE'S LIFEFORCES AND ENSCONCED THEM WITHIN AN OBJECT OF MYSTICAL POWERS."
320 PRINT
330 PRINT "THE TASK SET BEFORE YOU IS TO FIND THIS OBJECT AND FREE THE LIFEFORCES TRAPPED  WITHIN . . .
350 PRINT
360 PRINT
370 PRINT "BEGIN THE ADVENTURE!"
390 CLEAR:RM=1:GOSUB 32000:REM INITIALIZE
400 GOSUB 21000:REM ROOM DESCRIPTION
410 GOSUB 20000:REM ROOM CONTENTS
500 IF RM=16 THEN F=F+1
501 IF OGRE=0 AND F=2 THEN GOSUB 10000:OGRE=1
502 IF BOOK=1 AND RM=16 AND OGRE=1 THEN PRINT:PRINT "SUDDENLY, SEEING THE BOOK, THE OGRE ROARS WITH DELIGHT AND QUICKLY GRABS IT.  HESITS DOWN AND STARTS THUMBING THROUGH THE BOOK.":BOOK=2
503 IF F=3 AND BOOK <>2 THEN PRINT:PRINT "WITH A ROAR AND A MIGHTY SWING OF HIS SWORD, THE OGRE TURNS YOU INTO A HEADLESS ADVENTURER.":GOTO 19900
504 IF RM=29 AND STAND=1 THEN RM=47
505 IF RM=47 AND STAND=0 THEN RM=29
509 GOSUB 11500
580 IF A$="QUIT  " OR A$="END  " OR A$="STOP  " THEN GOTO 19800
590 IF A$="YES  " OR A$="NO  " THEN PRINT:PRINT "THAT WAS A RHETORICAL QUESTION.":GOTO 500
600 IF A$="N  " OR A$="NORTH  " THEN X=1:GOSUB 15000:GOTO 500
610 IF A$="S  " OR A$="SOUTH  " THEN X=2:GOSUB 15000:GOTO 500
620 IF A$="E  " OR A$="EAST  " THEN X=3:GOSUB 15000:GOTO 500
630 IF A$="W  " OR A$="WEST  " THEN X=4:GOSUB 15000:GOTO 500
640 IF A$="NE  " OR A$="NORTHEAST  " THEN X=5:GOSUB 15000:GOTO 500
650 IF A$="NW  " OR A$="NORTHWEST  " THEN X=6:GOSUB 15000:GOTO 500
660 IF A$="SE  " OR A$="SOUTHEAST  " THEN X=7:GOSUB 15000:GOTO 500
670 IF A$="SW  " OR A$="SOUTHWEST  " THEN X=8:GOSUB 15000:GOTO 500
680 IF A$="U  " OR A$="UP  " THEN X=9:GOSUB 15000:GOTO 500
690 IF A$="D  " OR A$="DOWN  " THEN X=10:GOSUB 15000:GOTO 500
700 GOSUB 12700
724 LET B2(53)=RM
725 GOSUB 14000
730 IF LEFT$(A$,3)="GO " THEN GOTO 4900
740 IF LEFT$(A$,5)="DROP " OR LEFT$(A$,4)="PUT " OR LEFT$(A$,6)="STICK " OR LEFT$(A$,7)="INSERT " THEN GOSUB 5300:GOTO 500
750 IF LEFT$(A$,6)="LIGHT " OR LEFT$(A$,11)="TURN LIGHT " OR LEFT$(A$,5)="LAMP " OR LEFT$(A$,10)="TURN LAMP " THEN GOSUB 5500:GOTO 500
770 IF LEFT$(A$,4)="SAY " OR LEFT$(A$,6)="SPEAK " THEN GOSUB 7900:GOTO 500
775 IF LIGHT=0 AND RM>15 AND RM<42 THEN PRINT:PRINT "IT IS MUCH TOO DARK FOR YOU TO DO ANYTHING.":GOTO 500
780 IF LEFT$(A$,5)="OPEN " THEN GOSUB 5000:GOTO 500
790 IF LEFT$(A$,7)="GET ON " OR LEFT$(A$,8)="GET OFF " OR LEFT$(A$,7)="GET IN " OR LEFT$(A$,9)="STAND ON " OR LEFT$(A$,9)="STAND IN " THEN GOSUB 7000:GOTO 500
800 IF A$="I  " OR A$="INV  " OR A$="INVENTORY  " THEN GOSUB 5400:GOTO 509
810 IF LEFT$(A$,6)="SWING " THEN GOSUB 5700:GOTO 500
820 IF LEFT$(A$,5)="SWIM " THEN GOSUB 5800:GOTO 500
830 IF LEFT$(A$,5)="LOOK " OR A$="L  " THEN GOSUB 5900:GOTO 500
840 IF LEFT$(A$,8)="EXAMINE " THEN GOSUB 6000:GOTO 500
850 IF LEFT$(A$,5)="TURN " THEN GOSUB 6100:GOTO 500
860 IF LEFT$(A$,5)="READ " THEN GOSUB 6200:GOTO 500
870 IF LEFT$(A$,5)="PUSH " OR LEFT$(A$,6)="PRESS " OR LEFT$(A$,5)="MOVE " THEN GOSUB 6300:GOTO 500
880 IF LEFT$(A$,5)="GIVE " THEN GOSUB 6400:GOTO 500
890 IF LEFT$(A$,7)="UNLOCK " THEN GOSUB 6500:GOTO 500
910 IF LEFT$(A$,7)="ATTACH " THEN GOSUB 6700:GOTO 500
930 IF LEFT$(A$,4)="GET " OR LEFT$(A$,5)="TAKE " THEN GOSUB 5100:GOTO 500
940 IF LEFT$(A$,6)="CLOSE " THEN GOSUB 7100:GOTO 500
950 IF LEFT$(A$,6)="EMPTY " THEN GOSUB 7200:GOTO 500
960 IF LEFT$(A$,6)="DRINK " THEN GOSUB 7300:GOTO 500
970 IF LEFT$(A$,5)="FILL " THEN GOSUB 7400:GOTO 500
980 IF LEFT$(A$,6)="BREAK " THEN GOSUB 7500:GOTO 500
985 IF LEFT$(A$,6)="TOUCH " THEN GOSUB 7800:GOTO 500
990 IF LEFT$(A$,4)="CUT " THEN GOSUB 7600:GOTO 500
995 IF LEFT$(A$,4)="OIL " THEN GOSUB 7700:GOTO 500
999 PRINT:PRINT "I DON'T KNOW THAT WORD.":GOTO 500
4900 REM GO
4910 IF LEFT$(B$,1)=" " THEN PRINT:PRINT "GO WHERE?":GOTO 500
4920 IF LEFT$(B$,1)<>" " THEN A$=B$:GOTO 600
5000 REM OPEN
5005 IF LEFT$(B$,1)=" " THEN GOSUB 14900
5011 IF B$="CHEST  " AND (OB(14)=200 OR OB(14)=RM) AND CHEST=0 THEN PRINT:PRINT "OKAY.":CHEST=1:RETURN
5016 IF B$="CHEST  " AND (OB(14)=200 OR OB(14)=RM) AND CHEST=1 THEN PRINT:PRINT "THE CHEST IS ALREADY OPEN.":RETURN
5020 IF B$="LATCH  " AND RM=23 AND TABLE=0 THEN PRINT:PRINT "THE TABLE SUDDENLY CRASHES APART.  IT MUST HAVE BEEN A FOLDING TABLE.":TABLE=1:RETURN
5030 IF B$="DOOR  " AND (RM=1 OR RM=8) AND DOOR=0 THEN PRINT:PRINT "THE DOOR SWINGS OPEN.":A(1,3)=8:A(8,4)=1:DOOR=1:RETURN
5031 IF B$="DOOR  " AND (RM=1 OR RM=8) AND DOOR=1 THEN PRINT:PRINT "THE DOOR IS ALREADY OPEN.":RETURN
5035 IF B$="DOOR  " AND (RM=43 OR RM=44) AND DOOR4=0 THEN PRINT:PRINT "THE DOOR SWINGS OPEN.":A(43,4)=44:A(44,3)=43:DOOR4=1:RETURN
5036 IF B$="DOOR  " AND (RM=43 OR RM=44) AND DOOR4=1 THEN PRINT:PRINT "THE DOOR IS ALREADY OPEN.":RETURN
5039 IF B$="DOOR  " AND (RM=41 OR RM=50) AND DOOR5=1 THEN PRINT:PRINT "THE DOOR IS ALREADY OPEN.":RETURN
5040 IF LEFT$(B$,5)="DOOR " AND (RM=41 OR RM=50) AND DOOR5=0 THEN PRINT:PRINT "THE DOOR SWINGS OPEN.":DOOR5=1:A(41,9)=50:A(50,10)=41:RETURN
5041 IF LEFT$(B$,5)="DOOR " AND RM=40 THEN PRINT:PRINT "THE DOOR IS JERKED FROM YOUR HAND AS AN AVALANCHE OF WATER ROARS FROM THE       OPENING.  YOU ARE SWEPT DOWN THE PASSAGE AND SMASHED LIKE A TWIG AGAINST A WALL.":GOTO 19900
5043 IF B$="DOOR  " AND (RM=20 OR RM=46) AND DOOR2=1 THEN PRINT:PRINT "THE DOOR IS ALREADY OPEN.":RETURN
5044 IF B$="DOOR  " AND RM=20 AND MOSS=1 AND LACK=0 THEN PRINT:PRINT "THE DOOR IS LOCKED.":RETURN
5045 IF B$="DOOR  " AND RM=20 AND MOSS=1 AND STUCK=0 AND DOOR2=0 THEN PRINT:PRINT "THE DOOR IS STUCK.":RETURN
5046 IF B$="DOOR  " AND (RM=20 OR RM=46) AND DOOR2=0 AND LACK=1 AND STUCK=1 THEN PRINT:PRINT "THE DOOR SWINGS OPEN.":A(20,2)=46:A(46,1)=20:DOOR2=1:RETURN
5047 IF B$="DOOR WITH KEY  " AND (RM=20 OR RM=46) THEN B$="DOOR  ":GOTO 6500
5049 IF B$="DOOR  " AND (RM=36 OR RM=37) AND KITCHEN=0 THEN PRINT:PRINT "I DON'T SEE ANY DOOR.":RETURN
5050 IF B$="DOOR  " AND (RM=36 OR RM=37) AND DOOR3=1 THEN PRINT:PRINT "THE DOOR IS ALREADY OPEN.":RETURN
5052 IF B$="DOOR  " AND (RM=36 OR RM=37) AND DOOR3=0 THEN PRINT:PRINT "THE DOOR SWINGS OPEN.":A(36,10)=37:A(37,9)=36:DOOR3=1:GOTO 10310
5055 IF B$="BOTTLE  " AND OB(10)<>200 THEN PRINT:PRINT "YOU DON'T HAVE A BOTTLE.":RETURN
5056 IF B$="BOTTLE  " AND OB(10)=200 AND BOTTLE=0 THEN PRINT:PRINT "OKAY.":BOTTLE=1:RETURN
5061 IF B$="BOTTLE  " AND OB(10)=200 AND BOTTLE=1 THEN PRINT:PRINT "THE BOTTLE IS ALREADY OPEN.":RETURN
5085 GOSUB 14800
5090 PRINT:PRINT "YOU CAN'T OPEN THAT.":RETURN
5100 REM GET
5102 CARRY=0:OBJECT=0:NOTHING=0
5105 IF LEFT$(B$,1)=" " THEN GOSUB 14900
5106 IF B$="KEY  " AND OB(13)=0 AND BED=1 AND RM=30 THEN PRINT:PRINT "THE KEY LIES BEYOND YOUR REACH.":RETURN
5107 IF B$="OIL  " AND (OB(15)=RM OR OB(15)=0) THEN PRINT:PRINT "THE OIL SLIPS THROUGH YOUR FINGERS.":RETURN
5108 IF INSTR(B$,"BOOK ")>0 AND RM=16 AND OGRE=1 AND BOOK=2 THEN PRINT:PRINT "AS YOU REACH FOR THE BOOK, THE OGRE ROARS WITH RAGE, GRABS HIS SWORD AND, WITH AFLURISH, STABS YOU THROUGH THE HEART.":RETURN 19900
5109 IF B$="CHEST  " AND STAND=1 THEN PRINT:PRINT "YOU HAVE TO GET OFF THE CHEST FIRST.":RETURN
5110 FOR R=1 TO 20
5111 IF OB(R)=200 THEN CARRY=CARRY+1
5112 NEXT R
5113 IF CARRY>5 THEN PRINT:PRINT "YOU CAN'T CARRY ANYTHING ELSE.":RETURN
5115 FOR R=1 TO 20
5116 IF B$=A1$(R) AND OB(R)=RM THEN OBJECT=R:GOTO 5185
5117 NEXT R
5118 FOR R=1 TO 20
5119 IF B$=A1$(R) AND OB(R)=200 THEN PRINT:PRINT "YOU ALREADY HAVE IT!":RETURN
5120 NEXT R
5121 IF B$="DOOR  " AND RM=1 THEN PRINT:PRINT "HOW UTTERLY BIZARRE YOU ARE.":RETURN
5122 IF B$="MORTAR  " AND RM=20 THEN PRINT:PRINT "YOU CAN'T GET THAT!":RETURN
5123 IF B$="MOSS  " AND RM=20 AND MOSS=0 THEN GOTO 6319
5124 IF B$="UTENSILS  " AND RM=36 THEN PRINT:PRINT "THE UTENSILS ARE OLD AND ROTTED AND CRUMBLE AT YOUR TOUCH.":RETURN
5125 IF B$="BUCKET  " AND RM=8 THEN PRINT:PRINT "THE BUCKET IS CHAINED TO THE PULLEY SYSTEM.":RETURN
5126 IF (B$="VINE  " OR B$="VINES  ") AND RM=9 THEN PRINT:PRINT "YOU CAN'T REACH THE VINES.":RETURN
5127 IF B$="GLASS  " AND (GLASS=0 OR GLASS=2) AND RM=46 THEN PRINT:PRINT "THE GLASS IS FIRMLY MOUNTED TO THE PEDESTAL.":RETURN
5128 IF B$="GLASS  " AND GLASS=1 AND RM=46 THEN PRINT:PRINT "THE GLASS SHARDS ARE TOO SMALL TO SERVE ANY PURPOSE.":RETURN
5129 IF B$="PEDESTAL  " AND RM=46 THEN PRINT:PRINT "THE PEDESTAL IS FIRMLY IMBEDDED IN THE GROUND.":RETURN
5132 IF B$="KEY WITH CANE  " AND OB(13)=0 AND OB(11)=200 AND BED=1 AND LODE=2 THEN GOTO 14750
5133 IF B$="BOTTLES  " AND RM=37 THEN PRINT:PRINT "THE BOTTLES ARE BROKEN INTO SUCH SMALL PIECES THAT THEY COULD BE OF NO POSSIBLE USE TO YOU.":RETURN
5153 FOR R=1 TO 20
5154 IF LEFT$(B$,9)="KEY WITH " AND D$=A1$(R) AND OB(R)<>200 THEN PRINT:PRINT "YOU DON'T HAVE ANY ";LEFT$(D$,LEN(D$)-2);".":RETURN
5155 NEXT R
5161 FOR R=1 TO 20
5162 IF LEFT$(B$,9)="KEY WITH " AND OB(13)=0 AND BED=1 AND D$=A1$(R) AND OB(R)=200 THEN PRINT:PRINT "THE KEY IS JUST BEYOND YOUR REACH.":RETURN
5163 NEXT R
5164 IF B$="CRYSTAL  " AND RM=46 AND GLASS=0 THEN PRINT:PRINT "THE GLASS ENCLOSURE PREVENTS YOU FROM GETTING AT THE CRYSTAL.":RETURN
5165 IF B$="CRYSTAL  " AND RM=46 AND GLASS=1 THEN PRINT:PRINT "THE ONLY CRYSTAL AROUND IS THE SMALL SHARDS UPON THE PEDESTAL. THESE WOULD SERVENO PURPOSE.":RETURN
5166 IF B$="CRYSTAL  " AND RM=46 AND GLASS=2 THEN PRINT:PRINT "REACHING THROUGH THE OPENING IN THE GLASS ENCLOSURE, YOU CAREFULLY GET THE      CRYSTAL.":OB(19)=200:SCORE=SCORE+300:SCORE(19)=1:GOTO 5210
5170 FOR R=1 TO 60
5171 IF (B$="TABLE  " OR B$="BED  " OR B$="RACKS  " OR B$="THRONE  " OR B$="DISPLAY CASE  ") AND B$=B1$(R) AND B2(R)=RM THEN B$=LEFT$(B$,LEN(B$)-2):PRINT:PRINT "THE ";B$;" IS TOO HEAVY.":RETURN
5172 NEXT R
5180 GOSUB 14800:IF OBJECT=0 THEN PRINT:PRINT "YOU CAN'T GET THAT.":RETURN
5185 OB(OBJECT)=200
5190 PRINT:PRINT "OKAY"
5191 IF OB(7)=200 AND SCORE(7)=0 THEN SCORE=SCORE+150:SCORE(7)=1
5192 IF OB(6)=200 AND SCORE(6)=0 THEN SCORE=SCORE+250:SCORE(6)=1
5193 IF OB(13)=200 AND SCORE(13)=0 THEN SCORE=SCORE+250:SCORE(13)=1
5195 FOR R=1 TO 20
5196 IF OB(R)=200 AND SCORE(R)=0 THEN SCORE=SCORE+100:SCORE(R)=1
5197 NEXT R
5210 LOCATE 25,50:PRINT "SCORE:";SCORE
5295 RETURN
5300 REM DROP
5305 IF LEFT$(B$,1)=" " THEN GOSUB 14900
5310 OBJECT=0:FOR R=1 TO 20
5311 IF B$=A1$(R) AND OB(R)=200 THEN OBJECT=R:GOTO 5350
5312 NEXT R
5319 IF C$="IN BOTTLE  " AND (OB(10)<>200 AND OB(10)<>RM) THEN PRINT:PRINT "I DON'T SEE ANY BOTTLE HERE.":RETURN
5320 IF C$="IN BOTTLE  " AND OB(10)<>200 THEN PRINT:PRINT "YOU DON'T HAVE THE BOTTLE.":RETURN
5325 IF C$="IN HOLE  " AND RM<>25 THEN PRINT:PRINT "I DON'T SEE ANY HOLE HERE.":RETURN
5327 IF B$="FINGER IN HOLE  " THEN PRINT:PRINT "THE HOLE IS WARM TO THE TOUCH AND YOU FEEL A SLIGHT TINGLING SENSATION IN YOUR  FINGER.":RETURN
5328 IF B$="FINGER IN BOTTLE  " THEN PRINT:PRINT "ONLY A MORON WITH A BOTTLE FETISH WOULD DO THAT.":RETURN
5330 IF B$="OIL IN BOTTLE  " AND RM=48 THEN GOTO 5350
5335 FOR R=1 TO 20
5336 IF LEFT$(B$,LEN(B$)-LEN(C$))+" "=A1$(R) AND OB(R)=200 THEN GOTO 5350
5337 IF OBJECT=0 AND B$=A1$(R) THEN GOTO 5349
5338 IF LEFT$(B$,LEN(B$)-LEN(C$))+" "=A1$(R) AND OB(R)<>200 THEN GOTO 5349
5339 IF LEFT$(B$,LEN(B$)-LEN(C$))+" "=A1$(R) AND OB(R)=RM THEN GOTO 5350
5340 NEXT R
5345 PRINT:PRINT "BE REASONABLE!":RETURN
5349 PRINT:PRINT "YOU DON'T HAVE ANY ";LEFT$(B$,LEN(B$)-(LEN(C$)+1));".":RETURN
5350 IF RM=20 AND MOSS=1 AND (C$="IN OPENING  " OR C$="THROUGH OPENING  ") THEN PRINT:PRINT "THE OPENING IS TOO SMALL.":RETURN
5355 IF (C$="IN PIT  " OR C$="DOWN PIT  ") AND (RM=17 OR RM=18) THEN OB(OBJECT)=0:PRINT:PRINT "THE "+LEFT$(B$,LEN(B$)-LEN(C$))+"VANISHES FROM SIGHT.":PRINT "YOU WAIT A FEW SECONDS, BUT NEVER HEAR IT HIT THE BOTTOM.":RETURN
5357 IF B$="OIL IN BOTTLE  " AND BOTTLE=0 THEN PRINT:PRINT "THE BOTTLE IS CLOSED.":RETURN
5358 IF B$="OIL IN BOTTLE  " AND (BOTTLE=1 OR BOTTLE=3) THEN PRINT:PRINT "THE BOTTLE IS ALREADY FULL.":RETURN
5359 IF B$="OIL IN BOTTLE  " AND RM=48 THEN PRINT:PRINT "THE BOTTLE IS NOW FILLED WITH OIL.":BOTTLE=3:IN$(10)="A BOTTLE OF OIL":GOTO 7495
5360 IF B$="BOOK  " THEN BOOK=1
5362 IF B$="SCEPTER IN HOLE  " THEN PRINT:PRINT "YOU FEEL A DISTURBANCE IN THE AIR AS IF A PRESENCE IS SLOWLY AWAKENING.":OB(6)=RM:RETURN
5363 IF B$="WAND IN HOLE  " AND WAND=0 THEN PRINT:PRINT "AS THE WAND SETTLES INTO THE HOLE YOU SUDDENLY HEAR A GRINDING SOUND ECHOING    THROUGHOUT THE CASTLE.  THE SOUND SOON STOPS.":WAND=1:A(34,1)=49:OB(8)=RM:SCORE=SCORE+250:GOTO 5210
5364 IF B$="WAND IN HOLE  " AND WAND=1 THEN PRINT:PRINT "OKAY.":OB(8)=RM:RETURN
5368 IF C$="IN BOTTLE  " THEN PRINT:PRINT "YOU CAN'T PUT THE ";LEFT$(B$,LEN(B$)-LEN(C$));"IN THE BOTTLE.":RETURN
5369 IF C$="IN HOLE  " THEN PRINT:PRINT "YOU CAN'T PUT THE ";LEFT$(B$,LEN(B$)-LEN(C$));"IN THE HOLE.":RETURN
5370 IF OBJECT=0 THEN PRINT:PRINT "YOU CAN'T DO THAT.":RETURN
5380 PRINT:PRINT "OKAY"
5385 OB(OBJECT)=RM
5386 IF LODE=1 AND (OB(7)<>200 OR OB(8)<>200) THEN LODE=0
5387 IF LODE=2 AND (OB(7)<>200 OR OB(11)<>200) THEN LODE=0
5390 RETURN
5400 REM INVENTORY
5410 PRINT:PRINT "YOU ARE CARRYING:"
5420 PRINT
5430 FOR R=1 TO 20
5440 IF OB(R)=200 THEN PRINT "     ";IN$(R):INVENTORY=1
5450 NEXT R
5460 IF INVENTORY<>1 THEN PRINT "NOTHING"
5470 INVENTORY=0
5480 RETURN
5500 REM LIGHT
5502 IF LEFT$(B$,1)=" " OR B$="ON  " OR B$="LIGHT ON  " OR B$="LAMP ON  " THEN B$="LAMP  "
5510 IF B$="LAMP  " AND OB(4)=200 AND LIGHT=1 THEN PRINT:PRINT "THE LAMP IS ALREADY ON.":RETURN
5530 IF B$="LAMP  " AND OB(4)=200 AND LIGHT=0 THEN LIGHT=1:PRINT:PRINT "THE LAMP IS NOW DIMLY GLOWING.":DARK=0:RETURN
5560 IF B$="LAMP  " AND OB(4)<>200 THEN PRINT:PRINT "YOU DON'T HAVE A LAMP.":RETURN
5580 IF B$="OFF  " OR B$="LIGHT OFF  " OR B$="LAMP OFF  " THEN B$="LAMP  "
5590 IF B$="LAMP  " AND OB(4)=200 AND LIGHT=0 THEN PRINT:PRINT "THE LAMP IS ALREADY OFF.":RETURN
5610 IF B$="LAMP  " AND OB(4)=200 AND LIGHT=1 THEN LIGHT=0:PRINT:PRINT "THE LAMP IS NOW OFF.":RETURN
5640 IF B$="LAMP  " AND OB(4)<>200 THEN PRINT:PRINT "YOU DON'T HAVE A LAMP.":RETURN
5660 PRINT:PRINT "I DON'T UNDERSTAND THAT.":RETURN
5700 REM SWING
5705 IF LEFT$(B$,1)=" " THEN GOSUB 14900
5710 IF B$="SWORD  " AND OB(2)=200 AND OGRE=1 AND RM=16 THEN PRINT:PRINT "THE OGRE EASILY BRUSHES ASIDE YOUR PARRY AND WITH ONE MIGHTY SWING OF HIS SWORD,QUICKLY TURNS YOU INTO A HEADLESS ADVENTURER.":RETURN 19900
5712 IF B$="SWORD  " AND OB(2)=200 AND OGRE=0 AND RM=16 THEN PRINT:PRINT "HAVING VERY GOOD EARS, THE OGRE WAKES UP AND QUICKLY GRABS A SWORD FROM BEHIND  HIM.  HE SWINGS AT YOU AND YOU BARELY MANAGE TO DUCK OUT OF THE WAY.":OGRE=1:RETURN
5720 GOSUB 14800
5730 FOR R=1 TO 60
5740 IF LEFT$(B$,LEN(B$)-LEN(C$))+" "=B1$(R) AND B2(R)=RM THEN PRINT:PRINT "YOU CAN'T SWING THE ";LEFT$(B1$(R),LEN(B1$(R))-2);".":RETURN
5750 NEXT R
5755 FOR R=1 TO 20
5760 IF LEFT$(B$,LEN(B$)-LEN(C$))+" "=A1$(R) AND OB(R)=RM THEN PRINT:PRINT "YOU DON'T HAVE A ";LEFT$(A1$(R),LEN(A1$(R))-2);".":RETURN
5770 NEXT R
5790 PRINT:PRINT "OKAY.":RETURN
5800 REM SWIM
5802 IF (LEFT$(B$,1)=" " OR B$="ACROSS  " OR C$="STREAM  ") AND (RM=4 OR RM=13 OR RM=45) THEN GOTO 16040
5810 IF (LEFT$(B$,1)=" " OR B$="ACROSS  " OR C$="MOAT  ") AND RM=5 THEN GOTO 16000
5890 IF RM<>4 AND RM<>13 AND RM<>5 AND RM<>45 THEN PRINT:PRINT "THERE IS NO PLACE TO SWIM HERE.":RETURN
5895 PRINT:PRINT "I DON'T UNDERSTAND THAT.":RETURN
5900 REM LOOK IN/UNDER/DOWN/THROUGH/AT
5901 IN=0:UNDER=0:DOWN=0:THROUGH=0:ONTOP=0:AT=0
5903 IF LEFT$(B$,1)=" " THEN RETURN 400
5906 IF LEFT$(B$,3)="IN " THEN IN=1
5907 IF LEFT$(B$,6)="UNDER " THEN UNDER=1
5908 IF LEFT$(B$,5)="DOWN " THEN DOWN=1
5909 IF LEFT$(B$,8)="THROUGH " THEN THROUGH=1
5910 IF LEFT$(B$,3)="ON " THEN ONTOP=1
5911 IF LEFT$(B$,3)="AT " THEN AT=1
5914 IF IN<>1 AND UNDER<>1 AND DOWN<>1 AND THROUGH<>1 AND ONTOP<>1 AND AT<>1 THEN PRINT:PRINT "I DON'T UNDERSTAND THAT.":RETURN
5915 B$=C$:C$=D$:D$=E$:GOSUB 14000
5918 IF AT=1 THEN GOTO 6000
5920 IF LEFT$(B$,1)=" " THEN GOSUB 14900
5925 IF ONTOP=1 AND RM=29 AND (B$="TOP OF CANOPY  " OR B$="CANOPY  ") AND STAND=0 THEN PRINT:PRINT "THE CANOPY IS TOO HIGH FOR YOU TO SEE ON TOP OF IT.":RETURN
5926 IF ONTOP=1 AND RM=47 AND (B$="TOP OF CANOPY  " OR B$="CANOPY  ") AND STAND=1 THEN A$="L  ":RETURN 400
5930 IF (IN=1 OR THROUGH=1) AND B$="GLASS  " AND (GLASS=0 OR GLASS=2) AND RM=46 THEN PRINT:PRINT "PEERING THROUGH THE GLASS YOU CAN SEE A CRYSTAL IN THE SHAPE OF A DECOHEDRON.   A BRIGHT LIGHT EMANATES FROM THE CRYSTAL.":RETURN
5931 IF (IN=1 OR THROUGH=1) AND B$="BOTTLE  " AND (OB(10)=200 OR OB(10)=RM) THEN B$="BOTTLE  ":GOTO 6035
5935 IF B$="BOOK  " AND (OB(1)=200 OR OB(1)=RM) THEN PRINT:PRINT "THE BOOK IS WRITTEN IN A LANGUAGE FOREIGN TO YOU.  THERE ARE MANY COLORFUL      PICTURES DEPICTING SCENES THAT YOU WOULD EXPECT TO FIND IN A BOOK OF FAIRYTALES.":RETURN
5936 IF IN=1 AND B$="CHEST  " AND CHEST=0 AND (RM=OB(14) OR OB(14)=200) THEN PRINT:PRINT "YOU CAN'T, IT'S CLOSED.":RETURN
5940 IF IN=1 AND B$="CHEST  " AND CHEST=1 AND (RM=OB(14) OR OB(14)=200) THEN PRINT:PRINT "IT'S EMPTY.":RETURN
5944 IF (THROUGH=1 OR IN=1) AND B$="OPENING  " AND RM=30 AND BED=1 AND OB(13)<>0 THEN PRINT:PRINT "YOU SEE NOTHING THAT INTERESTS YOU.":RETURN
5945 IF (THROUGH=1 OR IN=1) AND B$="OPENING  " AND RM=30 AND BED=1 AND OB(13)=0 THEN PRINT:PRINT "JUST BEYOND THE LIGHT OF YOUR LAMP, YOU CAN SEE SOMETHING THAT LOOKS LIKE A KEY.":RETURN
5946 IF IN=1 AND B$="MIRROR  " AND RM=26 THEN GOTO 6024
5948 IF (THROUGH=1 OR IN=1) AND B$="OPENING  " AND RM=20 AND MOSS=1 THEN PRINT:PRINT "ALL YOU SEE IS DARKNESS ON THE OTHER SIDE OF THE DOOR.":RETURN
5950 IF (IN=1 OR DOWN=1) AND B$="WELL  " AND RM=8 AND WELL=1 THEN PRINT:PRINT "ABOUT 20 FEET DOWN YOU SEE WHAT APPEARS TO BE A FALSE BOTTOM.  THE FALSE BOTTOM IS NOW HANGING BY ITS HINGES AND THE WELL EXTENDS DOWN EVEN FURTHER.":RETURN
5952 IF (IN=1 OR DOWN=1) AND B$="WELL  " AND RM=8 AND WELL=0 THEN PRINT:PRINT "ABOUT 20 FEET DOWN YOU SEE THE SKY REFLECTING OFF WATER.":RETURN
5954 IF UNDER=1 AND B$="BED  " AND RM=1 THEN PRINT:PRINT "THE ONLY THING UNDER THERE IS A FINE LAYER OF DUST.":RETURN
5956 IF IN=1 AND B$="BUCKET  " AND RM=8 THEN PRINT:PRINT "IT'S EMPTY.":RETURN
5957 IF (IN=1 OR DOWN=1) AND B$="PIT  " AND (RM=17 OR RM=18) THEN PRINT:PRINT "THE GLOW FROM THE LAMP ONLY ENABLES YOU TO SEE ABOUT 15 FEET DOWN.  THE SIDES OFTHE PIT ARE SHEER AS FAR DOWN AS YOU CAN SEE.":RETURN
5959 GOSUB 14800
5960 PRINT:PRINT "THERE IS NOTHING THERE.":RETURN
6000 REM EXAMINE
6005 IF LEFT$(B$,1)=" " THEN GOSUB 14900
6012 IF B$="ROOM  " THEN RETURN 400
6013 IF LEFT$(B$,5)="BOOK " THEN GOTO 6211
6015 IF B$="MOAT  " AND RM=5 THEN PRINT:PRINT "THE MOAT IS APPROXIMATELY 30 FEET ACROSS AND APPEARS TO BE FAIRLY DEEP.         OCCASIONALLY A RIPPLE BREAKS THE SURFACE, GIVING AN INDICATION THAT THERE ARE   CREATURES RESIDING IN THE MOAT.":RETURN
6016 IF B$="DRAWBRIDGE  " AND RM=5 THEN PRINT:PRINT "YOU ARE TOO FAR AWAY TO MAKE OUT THE DRAWBRIDGE IN DETAIL, HOWEVER, ITS GENERAL APPEARANCE IS ONE OF DILAPIDATION.":RETURN
6017 IF B$="WAND  " AND (OB(8)=200 OR OB(8)=RM) THEN PRINT:PRINT "THE WAND IS A TYPICAL MAGICIAN'S WAND.  IT IS MADE OF BLACK WOOD AND HAS A STEELTIP.":RETURN
6018 IF B$="CHEST  " AND (OB(14)=200 OR OB(14)=RM) THEN PRINT:PRINT "THE CHEST HAS BRIGHT DESIGNS ON THE OUTSIDE.  IT WAS PROBABLY A TOY CHEST.":RETURN
6019 IF B$="MURALS  " AND RM=34 THEN PRINT:PRINT "THE MURALS DEPICT THE BANISHMENT OF THE LORD OF THE BLACK DEMONS TO THE         NETHERREACHES OF YORN.":RETURN
6020 IF B$="WELL  " AND RM=8 THEN PRINT:PRINT "THE WELL IS MADE OF ROUGH HEWN STONES.  SUSPENDED FROM THE ROOF IS A PULLEY     SYSTEM WITH A CHAIN AND BUCKET ATTACHED.  NEAR THE GROUND ON THE OUTSIDE OF THE WELL IS A SPIGOT.":RETURN
6021 IF B$="THRONE  " AND RM=25 THEN PRINT:PRINT "THE THRONE IS MADE OF THE FINEST CORINTHIAN MARBLE. ON ONE OF THE ARMRESTS THEREIS A HOLE, APPROXIMATELY THREE QUARTERS OF AN INCH IN DIAMETER AND FOUR INCHES  DEEP.":RETURN
6023 IF B$="PULLEY  " AND RM=8 THEN PRINT:PRINT "THIS IS YOUR STANDARD ONE MANPOWER PULLEY SYSTEM WITH A CHAIN AND A SMALL BUCKETATTACHED.":RETURN
6024 IF B$="MIRROR  " AND RM=26 THEN PRINT:PRINT "YOU ARE STARTLED AT THE UGLY APPARITION IN THE MIRROR. AS YOU STAGGER BACKWARDS,FAMILIARITY SLOWLY FLOODS YOUR BRAIN, AND YOU REALIZE IT'S ONLY YOUR REFLECTION THAT YOU SEE.":RETURN
6025 IF B$="DOOR  " AND RM=20 AND MOSS=1 THEN PRINT:PRINT "THE DOOR IS MADE OF STURDY OAK WITH A LARGE HINGE RUNNING THE LENGTH OF ONE     SIDE. THERE IS A SMALL OPENING AT EYE LEVEL. AT THE TOP OF THE DOOR ARE GLOWING RUNES.":RETURN
6027 IF B$="DRAWBRIDGE  " AND RM=32 THEN PRINT:PRINT "THE DRAWBRIDGE IS ROTTED AND WARPED.  IT HAS OBVIOUSLY NOT BEEN USED FOR SOME   TIME.":RETURN
6028 IF B$="LAMP  " AND (OB(4)=200 OR OB(4)=RM) THEN PRINT:PRINT "THE LAMP IS A STANDARD BATTERY POWERED PEASANT'S LAMP.":RETURN
6029 IF B$="NESTS  " AND RM=32 THEN PRINT:PRINT "THE PIGEON NESTS ARE TOO HIGH FOR YOU TO REACH, HOWEVER YOU DO OBSERVE SOME     WHITE SUBSTANCE IN AND AROUND EACH NEST.":RETURN
6032 IF B$="LEFT BRICK  " AND RM=17 AND WALL=0 THEN PRINT:PRINT "OTHER THAN BEING SMOOTHER THAN THE OTHERS, THE LEFT BRICK HAS NO DISTINGUISHING FEATURES.":RETURN
6033 IF B$="RIGHT BRICK  " AND RM=17 AND WALL=0 THEN PRINT:PRINT "OTHER THAN BEING SMOOTHER THAN THE OTHERS, THE RIGHT BRICK HAS NO DISTINGUISHING FEATURES.":RETURN
6035 IF B$="MOSS  " AND RM=20 AND MOSS=0 THEN PRINT:PRINT "UPON A CLOSER EXAMINATION, THE MOSS APPEARS TO BE REFLECTING MORE LIGHT THAN    WOULD BE NORMALLY EXPECTED.":RETURN
6036 IF B$="CANOPY  " AND RM=29 THEN PRINT:PRINT "THE CANOPY ONCE WAS LUXURIOUS.  IT IS NOW FRAYED AND SAGS OVER THE BED.":RETURN
6038 IF LEFT$(B$,7)="MORTAR " AND RM=20 THEN PRINT:PRINT "THE MORTAR IS VERY MORTARLIKE.":RETURN
6040 IF B$="BUCKET  " AND RM=8 THEN PRINT:PRINT "THE BUCKET IS MADE OF WOOD. IT ISN'T OF MUCH USE ANYMORE AS THE BOTTOM IS       MISSING.  ON THE OUTSIDE IN WHITE LETTERS IS `STEVE'S PLUMBING SUPPLY'.":RETURN
6045 IF (B$="WALL  " OR B$="BRICK WALL  ") AND RM=17 AND WALL=0 THEN PRINT:PRINT "THE WALL IS MADE OF BRICKS.  UPON A CLOSER LOOK, YOU NOTICE THAT TWO OF THE     BRICKS APPEAR TO BE SMOOTHER THAN THE REST.":RETURN
6050 IF B$="SPIGOT  " AND RM=8 THEN PRINT:PRINT "THE SPIGOT IS LIKE ANY OTHER SPIGOT EXCEPT THAT IT DOESN'T HAVE A HANDLE.":RETURN
6053 IF B$="SCEPTER  " AND OB(6)=200 THEN PRINT:PRINT "THE SCEPTER IS INTRICATELY CARVED.  AT ONE END IS A LION'S HEAD.  AN INSCRIPTIONON THE SHAFT SAYS `CAREENIA THE LION'.":RETURN
6055 IF B$="TABLE  " AND RM=1 THEN PRINT:PRINT "THE TABLE IS AN ORDINARY DINNER TABLE.  IN ONE CORNER THE INITIALS `RLL' HAVE   BEEN SCRATCHED INTO THE WOOD.":RETURN
6056 IF B$="TABLE  " AND RM=23 AND TABLE=0 THEN PRINT:PRINT "THE TABLE IS LARGE ENOUGH TO SEAT TWENTY PEOPLE.  IN THE CENTER OF THE TABLE IS A LATCH.":RETURN
6057 IF B$="TABLE  " AND RM=23 AND TABLE=1 THEN PRINT:PRINT "THE MIDDLE OF THE TABLE IS TOUCHING THE GROUND, MAKING THE TABLE LOOK LIKE A    LOPSIDED `M'.":RETURN
6061 IF B$="CANE  " AND (OB(11)=200 OR OB(11)=RM) THEN PRINT:PRINT "THE CANE IS INTRICATELY CARVED.  THE HEAD OF THE CANE IS IN THE SHAPE OF A      GRYPHON.  THE TIP HAS BEEN CLAD IN METAL.":RETURN
6065 IF B$="BOTTLE  " AND (OB(10)=200 OR OB(10)=RM) AND (BOTTLE=0 OR BOTTLE=1) THEN PRINT:PRINT "THE BOTTLE IS FILLED WITH WINE.  A LABEL SAYS `STEVE'S WINERY, NOVEMBER 1987'.":RETURN
6066 IF B$="BOTTLE  " AND (OB(10)=200 OR OB(10)=RM) AND BOTTLE=2 THEN PRINT:PRINT "THE BOTTLE IS EMPTY.  A LABEL ON THE BOTTLE SAYS `STEVE'S WINERY, NOVEMBER 1987'.":RETURN
6067 IF B$="BOTTLE  " AND (OB(10)=200 OR OB(10)=RM) AND BOTTLE=3 THEN PRINT:PRINT "THE BOTTLE IS FILLED WITH OIL.  A LABEL PASTED ON THE OUTSIDE OF THE BOTTLE     READS, `STEVE'S WINERY, NOVEMBER 1987'.":RETURN
6071 IF B$="GLASS  " AND RM=46 AND GLASS=0 THEN PRINT:PRINT "THE GLASS IS IN THE SHAPE OF A BELL JAR WITH NO APPARENT OPENINGS.  FURTHER     INSPECTION REVEALS THAT THE GLASS IS FIRMLY MOUNTED TO THE PEDESTAL.":RETURN
6072 IF B$="GLASS  " AND RM=46 AND GLASS=1 THEN PRINT:PRINT "THE GLASS IS IN SMALL SHARDS. THERE APPEARS TO BE SOME CRYSTAL MIXED IN WITH THEGLASS.":RETURN
6073 IF B$="GLASS  " AND RM=46 AND GLASS=2 THEN PRINT:PRINT "THE GLASS IS IN THE SHAPE OF A BELL JAR.  A HOLE HAS BEEN CUT IN THE GLASS.     FURTHER INSPECTION REVEALS THAT THE GLASS IS FIRMLY MOUNTED TO THE PEDESTAL.":RETURN
6075 IF B$="PEDESTAL  " AND RM=46 THEN PRINT:PRINT "THE PEDESTAL IS MADE OF MILK-WHITE MARBLE.  IT IS FIRMLY ANCHORED IN THE GROUND.NO INTERRUPTIONS MAR IT'S SURFACE.":RETURN
6078 IF B$="CRYSTAL  " AND RM=46 AND GLASS=0 THEN PRINT:PRINT "THE CRYSTAL IS IN THE SHAPE OF A DODECAHEDRON. A BRIGHT LIGHT EMANATES FROM IT.":RETURN
6079 IF B$="CRYSTAL  " AND RM=46 THEN PRINT:PRINT "THE CRYSTAL IS IN SMALL SHARDS.  IT IS HARD TO PICK OUT THE CRYSTAL FROM ALL THEGLASS MIXED WITH IT.":RETURN
6080 GOSUB 14800
6090 PRINT:PRINT "EXAMINING THAT DOES NOT REVEAL ANYTHING.":RETURN
6100 REM TURN
6105 IF LEFT$(B$,1)=" " THEN GOSUB 14900
6115 IF B$="SPIGOT  " AND RM=8 THEN PRINT:PRINT "THE SPIGOT DOESN'T HAVE A HANDLE.":RETURN
6130 IF B$="SPIGOT WITH WRENCH  " AND WELL=0 AND OB(3)=200 AND RM=8 THEN PRINT:PRINT "A STREAM OF WATER POURS FROM THE SPIGOT.  AFTER A MINUTE THE WATER STOPS." :WELL=1:RETURN
6145 IF B$="SPIGOT WITH WRENCH  " AND OB(3)<>200 THEN PRINT:PRINT "YOU DON'T HAVE A WRENCH.":RETURN
6160 IF B$="SPIGOT WITH WRENCH  " AND WELL=1 AND OB(3)=200 AND RM=8 THEN PRINT:PRINT "NOTHING HAPPENS." :RETURN
6180 GOSUB 14800:IF D$="" THEN GOTO 6190
6185 B$=D$:C$=E$:GOSUB 14800
6190 PRINT:PRINT "YOU CAN'T DO THAT.":RETURN
6200 REM READ
6205 IF LEFT$(B$,1)=" " THEN GOSUB 14900
6211 IF B$="BOOK  " AND (OB(1)=200 OR OB(1)=RM) THEN PRINT:PRINT "THE BOOK IS WRITTEN IN A LANGUAGE FOREIGN TO YOU.  THERE ARE MANY COLORFUL      PICTURES DEPICTING SCENES THAT YOU WOULD EXPECT TO FIND IN A BOOK OF FAIRYTALES.":RETURN
6220 IF B$="SCROLL  " AND (OB(16)=200 OR OB(16)=RM) THEN PRINT:PRINT "THE SCROLL IS WRITTEN IN A LANGUAGE FOREIGN TO YOU.":RETURN
6222 IF B$="PARCHMENT  " AND (OB(17)=200 OR OB(17)=RM) AND (OB(16)=200 OR OB(16)=RM) THEN PRINT:PRINT "FROM SIMILAR SYMBOLS ON THE SCROLL, YOU DETERMINE THAT THE PARCHMENT IS A COPY  OF A PORTION OF THE SCROLL.  IT SAYS:":GOTO 14700
6223 IF B$="PARCHMENT  " AND (OB(17)=200 OR OB(17)=RM) THEN GOTO 14700
6225 IF B$="RUNES  " AND MOSS=1 AND RM=20 THEN PRINT:PRINT "THE RUNES READ, `ENTER WITH CARE', HOWEVER THE LAST FEW RUNES ARE TOO WORN TO   MAKE OUT.":RETURN
6285 GOSUB 14800
6290 PRINT:PRINT "YOU CAN'T READ THAT.":RETURN
6300 REM MOVE
6305 IF LEFT$(B$,1)=" " THEN GOSUB 14900
6310 IF B=0 AND B$="BED  " AND RM=30 THEN PRINT:PRINT "GRUDGINGLY, THE BED SLOWLY MOVES TO ONE SIDE.  REVEALED BEHIND THE BED IS A     SMALL OPENING.":BED=1:B2(21)=30:RETURN
6311 IF B$="BED  " AND RM=30 AND BED=1 THEN PRINT:PRINT "GRUDGINGLY, THE BED SLOWLY MOVES TO ONE SIDE.":BED=0:B2(21)=0:RETURN
6319 IF B$="MOSS  " AND RM=20 AND MOSS=0 THEN PRINT:PRINT "AS YOU TOUCH THE MOSS, IT SHIMMERS FOR A SECOND AND . . . DISAPPEARS!  IN ITS   PLACE IS A DOOR.":MOSS=1:B1$(17)="DOOR  ":B2(54)=20:B2(24)=20:SCORE=SCORE+200:GOTO 5210
6324 IF B$="UTENSILS  " AND RM=36 AND KITCHEN=1 THEN PRINT:PRINT "OKAY.":RETURN
6325 IF B$="UTENSILS  " AND RM=36 THEN PRINT:PRINT "AS YOU MOVE THE UTENSILS ASIDE, A DOOR IS REVEALED IN THE FLOOR.":KITCHEN=1:B2(19)=36:RETURN
6330 IF INSTR(B$,"BRICKS ")>0 AND WALL=1 THEN PRINT:PRINT "I DON'T SEE ANY BRICKS HERE.":RETURN
6335 IF B$="BRICKS  " AND RM=17 THEN PRINT:PRINT "WHICH ONE, THE LEFT BRICK OR THE RIGHT BRICK?":GOSUB 14910
6338 IF B$="BOTH BRICKS  " THEN BRICK=0:PRINT:PRINT "NOTHING HAPPENS.":RETURN
6340 IF B$="LEFT BRICK  "  AND RM=17 AND BRICK=1 THEN BRICK=2:PRINT:PRINT "NOTHING HAPPENS.":RETURN
6345 IF B$="LEFT BRICK  "  AND RM=17 AND BRICK=0 THEN PRINT:PRINT "NOTHING HAPPENS.":RETURN
6350 IF B$="LEFT BRICK  "  AND RM=17 AND BRICK=2 THEN WALL=1:A(17,3)=19:A(19,4)=17:SCORE=SCORE+500:B2(22)=0:GOTO 10100
6355 IF B$="RIGHT BRICK  "  AND RM=17 THEN BRICK=1:PRINT:PRINT "NOTHING HAPPENS.":RETURN
6360 IF B$="PEDESTAL  " AND RM=46 THEN GOTO 5128
6361 IF B$="GLASS  " AND (GLASS=0 OR GLASS=2) AND RM=46 THEN PRINT:PRINT "THE GLASS IS FIRMLY MOUNTED TO THE PEDESTAL.":RETURN
6362 IF B$="GLASS  " AND GLASS=1 AND RM=46 THEN PRINT:PRINT "MOVING THE GLASS SHARDS DOESN'T ACCOMPLISH ANYTHING.":RETURN
6375 GOSUB 14800
6380 PRINT:PRINT "THAT DIDN'T ACCOMPLISH ANYTHING."
6390 RETURN
6400 REM GIVE
6405 IF LEFT$(B$,1)=" " THEN GOSUB 14900
6406 OBJECT=0:FOR R=1 TO 20
6407 IF INSTR(B$,LEFT$(A1$(R),LEN(A1$(R))-1))>0 AND OB(R)=200 THEN OBJECT=R
6408 NEXT R
6409 IF OBJECT=0 THEN PRINT:PRINT "YOU DON'T HAVE THAT TO GIVE.":RETURN
6411 OB(OBJECT)=RM
6480 IF (B$="BOOK TO OGRE  " OR B$="BOOK  " OR B$="BOOK OF FAIRYTALES  " OR B$="BOOK OF FAIRYTALES TO OGRE  ") AND RM=16 THEN BOOK=1:RETURN
6485 IF RM=16 THEN PRINT:PRINT "THE OGRE QUICKLY GRABS IT FROM YOU. HE EXAMINES IT VERY CAREFULLY AND APPARENTLYDECIDES THAT IT DOESN'T INTEREST HIM.  HE THEN CASUALLY SEPARATES YOUR HEAD FROMYOUR SHOULDERS.":GOTO 19900
6487 PRINT:PRINT "SINCE THERE IS NO ONE HERE, I'LL ASSUME THAT YOU WANT TO LEAVE IT HERE."
6490 RETURN
6500 REM UNLOCK
6505 IF LEFT$(B$,1)=" " THEN GOSUB 14900
6510 GOSUB 14800
6520 IF LEFT$(B$,5)="DOOR " AND (RM=1 OR RM=36 OR RM=43) THEN PRINT:PRINT "THE DOOR IS NOT LOCKED.":RETURN
6525 IF LEFT$(B$,5)="DOOR " AND RM=20 AND LACK=1 THEN PRINT:PRINT "THE DOOR IS ALREADY UNLOCKED.":RETURN
6530 IF B$="DOOR  " AND RM=20 AND OB(13)=200 THEN PRINT "(WITH KEY)":PRINT:PRINT "THE DOOR IS NOW UNLOCKED.":LACK=1:RETURN
6531 IF B$="DOOR WITH KEY  " AND RM=20 AND OB(13)=200 THEN PRINT:PRINT "THE DOOR IS NOW UNLOCKED.":LACK=1:RETURN
6532 IF B$="DOOR  " AND RM=20 AND OB(13)<>200 THEN PRINT:PRINT "YOU DON'T HAVE ANYTHING TO UNLOCK THE DOOR WITH.":RETURN
6550 IF LEFT$(B$,6)="LATCH " AND RM=23 THEN PRINT:PRINT "THE LATCH IS NOT LOCKED.":RETURN
6590 PRINT:PRINT "YOU CAN'T UNLOCK THAT.":RETURN
6700 REM ATTACH
6702 Z1$="TO "
6705 IF LEFT$(B$,1)=" " THEN GOSUB 14900
6708 GOSUB 14800
6710 IF LEFT$(C$,1)=" " THEN GOSUB 14950
6720 IF LEFT$(B$,10)="LODESTONE " AND OB(7)=200 AND C$="TO CANE  " AND OB(11)=200 THEN PRINT:PRINT "OKAY.":LODE=2:RETURN
6721 IF LEFT$(B$,10)="LODESTONE " AND OB(7)=200 AND C$="TO WAND  " AND OB(8)=200 THEN PRINT:PRINT "OKAY.":LODE=1:RETURN
6770 X$=LEFT$(B$,LEN(B$)-LEN(C$))
6775 GOSUB 14800
6780 B$=D$:C$=E$
6785 GOSUB 14800
6790 PRINT:PRINT "YOU CAN'T ATTACH THE ";X$;"TO THE ";LEFT$(B$,LEN(B$)-LEN(C$)-1);".":RETURN
7000 REM GET ON/OFF
7002 ONCHEST=0:OFFCHEST=0:INCHEST=0
7005 IF LEFT$(B$,3)="ON " THEN ONCHEST=1
7006 IF LEFT$(B$,4)="OFF " THEN OFFCHEST=1
7007 IF LEFT$(B$,3)="IN " THEN INCHEST=1
7009 IF INCHEST<>1 AND ONCHEST<>1 AND OFFCHEST<>1 THEN PRINT:PRINT "I DON'T UNDERSTAND THAT.":RETURN
7010 B$=C$:C$=D$:D$=E$:GOSUB 14000
7011 IF LEFT$(B$,1)=" " THEN GOSUB 14900
7013 IF B$="WELL  " AND INCHEST=1 AND RM=8 THEN X=10:GOSUB 15000:GOTO 500
7016 IF B$="CHEST  " AND ONCHEST=1 AND OB(14)=200 THEN PRINT:PRINT "THAT WOULD BE QUITE A TRICK SINCE YOU ARE CARRYING THE CHEST.":RETURN
7021 IF B$="CHEST  " AND ONCHEST=1 AND OB(14)=RM AND CHEST=1 THEN PRINT:PRINT "THE CHEST IS OPEN.":RETURN
7026 IF B$="CHEST  " AND ONCHEST=1 AND STAND=1 THEN PRINT:PRINT "YOU ALREADY ARE STANDING ON THE CHEST.":RETURN
7031 IF B$="CHEST  " AND ONCHEST=1 AND OB(14)=RM THEN PRINT:PRINT "OKAY.":STAND=1:RETURN
7051 IF B$="CHEST  " AND OFFCHEST=1 AND STAND=0 THEN PRINT:PRINT "YOU'RE NOT ON THE CHEST.":RETURN
7056 IF B$="CHEST  " AND OFFCHEST=1 AND STAND=1 THEN PRINT:PRINT "OKAY.":STAND=0:RETURN
7070 FOR R=1 TO 20
7071 IF B$=A1$(R) AND (OB(R)=RM OR OB(R)=200) AND ONCHEST=1 THEN PRINT:PRINT "THAT WON'T ACCOMPLISH ANYTHING.":RETURN
7072 IF B$=A1$(R) AND (OB(R)=RM OR OB(R)=200) AND OFFCHEST=1 THEN PRINT:PRINT "YOU'RE NOT ON IT.":RETURN
7075 NEXT R
7080 FOR R=1 TO 60
7084 IF B$=B1$(R) AND B2(R)=RM AND ONCHEST=1 THEN PRINT:PRINT "THAT WON'T ACCOMPLISH ANYTHING.":RETURN
7086 IF B$=B1$(R) AND B2(R)=RM AND OFFCHEST=1 THEN PRINT:PRINT "YOU'RE NOT ON IT.":RETURN
7087 NEXT R
7089 GOSUB 14800
7094 IF INCHEST=1 THEN PRINT:PRINT "YOU CAN'T GET IN THE ";LEFT$(B$,LEN(B$)-2);".":RETURN
7095 RETURN
7100 REM CLOSE
7105 IF LEFT$(B$,1)=" " THEN GOSUB 14900
7111 IF B$="CHEST  " AND (OB(14)=200 OR OB(14)=RM) AND CHEST=1 THEN PRINT:PRINT "OKAY.":CHEST=0:RETURN
7116 IF B$="CHEST  " AND (OB(14)=200 OR OB(14)=RM) AND CHEST=0 THEN PRINT:PRINT "THE CHEST IS ALREADY CLOSED.":RETURN
7120 IF B$="LATCH  " AND RM=23 AND TABLE=1 THEN PRINT:PRINT "THE LATCH CAN'T BE CLOSED.":RETURN
7125 IF B$="LATCH  " AND RM=23 AND TABLE=0 THEN PRINT:PRINT "THE LATCH IS ALREADY CLOSED.":RETURN
7130 IF B$="DOOR  " AND (RM=1 OR RM=8) AND DOOR=1 THEN PRINT:PRINT "THE DOOR SWINGS SHUT.":A(1,3)=0:A(8,4)=0:DOOR=0:RETURN
7131 IF B$="DOOR  " AND (RM=1 OR RM=8) AND DOOR=0 THEN PRINT:PRINT "THE DOOR IS ALREADY CLOSED.":RETURN
7140 IF B$="DOOR  " AND RM=20 AND MOSS=0 THEN PRINT:PRINT "I DON'T SEE ANY DOOR HERE.":RETURN
7144 IF B$="DOOR  " AND (RM=20 OR RM=46) AND DOOR2=0 THEN PRINT:PRINT "THE DOOR IS ALREADY CLOSED.":RETURN
7146 IF B$="DOOR  " AND (RM=20 OR RM=46) AND DOOR2=1 THEN PRINT:PRINT "THE DOOR SWINGS SHUT.":A(20,2)=0:A(46,1)=0:DOOR2=0:RETURN
7150 IF B$="DOOR  " AND (RM=36 OR RM=37) AND DOOR3=0 THEN PRINT:PRINT "THE DOOR IS ALREADY CLOSED.":RETURN
7151 IF B$="DOOR  " AND (RM=36 OR RM=37) AND DOOR3=1 THEN PRINT:PRINT "THE DOOR SWINGS SHUT.":A(36,10)=0:A(37,9)=0:DOOR3=0:RETURN
7155 IF B$="DOOR  " AND (RM=41 OR RM=50) AND DOOR5=0 THEN PRINT:PRINT "THE DOOR IS ALREADY CLOSED.":RETURN
7156 IF B$="DOOR  " AND (RM=41 OR RM=50) AND DOOR5=1 THEN PRINT:PRINT "THE DOOR SWINGS SHUT.":A(41,9)=0:A(50,10)=0:DOOR5=0:RETURN
7185 GOSUB 14800
7190 PRINT:PRINT "YOU CAN'T CLOSE THAT.":RETURN
7200 REM EMPTY
7205 IF LEFT$(B$,1)=" " THEN GOSUB 14900
7211 IF B$="BOTTLE  " AND OB(10)=200 AND BOTTLE=0 THEN PRINT:PRINT "THE BOTTLE IS CLOSED.":RETURN
7216 IF B$="BOTTLE  " AND OB(10)=200 AND (BOTTLE=1 OR BOTTLE=3) THEN PRINT:PRINT "OKAY.":BOTTLE=2:IN$(10)="A BOTTLE":RETURN
7220 IF B$="BOTTLE  " AND OB(10)=200 AND BOTTLE=2 THEN PRINT:PRINT "THE BOTTLE IS ALREADY EMPTY.":RETURN
7285 GOSUB 14800
7290 PRINT:PRINT "YOU CAN'T EMPTY THAT.":RETURN
7300 REM DRINK
7305 IF LEFT$(B$,1)=" " THEN GOSUB 14900
7311 IF B$="WINE  " AND OB(10)=200 AND BOTTLE=0 THEN PRINT:PRINT "THE BOTTLE IS CLOSED.":RETURN
7316 IF B$="WINE  " AND OB(10)=200 AND BOTTLE=1 THEN PRINT:PRINT "THE WINE HAS A FLAVORFUL BOUQUET AND TICKLES YOUR PALATE.  IT WOULD PROBABLY GO NICELY WITH DRAGONMEAT ROASTED IN HORNED TOAD JUICE.":BOTTLE=2:IN$(10)="A BOTTLE":RETURN
7320 IF B$="WINE  " AND OB(10)=200 AND BOTTLE=2 THEN PRINT:PRINT "THE BOTTLE IS EMPTY.":RETURN
7330 IF B$="WATER  " AND RM=10 THEN PRINT:PRINT "IN SPITE OF THE RAT DUNG, THE WATER QUENCHES YOUR THIRST.":RETURN
7385 GOSUB 14800
7390 PRINT:PRINT "YOU CAN'T DRINK THAT.":RETURN
7400 REM FILL
7402 Z1$="WITH "
7405 IF LEFT$(B$,1)=" " THEN GOSUB 14900
7406 GOSUB 14800
7407 GOSUB 14850
7409 IF B$="BOTTLE  " THEN GOSUB 14950
7411 IF LEFT$(B$,7)="BOTTLE " AND BOTTLE=0 THEN PRINT:PRINT "THE BOTTLE IS CLOSED.":RETURN
7416 IF LEFT$(B$,7)="BOTTLE " AND (BOTTLE=1 OR BOTTLE=3) THEN PRINT:PRINT "THE BOTTLE IS ALREADY FULL.":RETURN
7421 IF B$="BOTTLE WITH OIL  " AND RM=48 THEN PRINT:PRINT "THE BOTTLE IS NOW FILLED WITH OIL.":BOTTLE=3:IN$(10)="A BOTTLE OF OIL":GOTO 7495
7422 IF B$="BOTTLE WITH OIL  " AND RM<>48 THEN PRINT:PRINT "I DON'T SEE ANY OIL HERE.":RETURN
7490 PRINT:PRINT "YOU CAN'T FILL THAT.":RETURN
7495 IF SCORE(24)=0 THEN SCORE=SCORE+150:SCORE(24)=1:GOTO 5210
7496 RETURN
7500 REM BREAK
7502 Z1$="WITH "
7505 IF LEFT$(B$,1)=" " THEN GOSUB 14900
7510 IF B$="GLASS  " AND RM=46 AND GLASS=1 THEN PRINT:PRINT "THE GLASS IS ALREADY BROKEN.":RETURN
7520 IF B$="GLASS  " AND RM=46 THEN GOSUB 14950
7525 IF B$="MIRROR  " AND RM=26 AND MIRROR=1 THEN PRINT:PRINT "THE MIRROR IS ALREADY BROKEN.":RETURN
7528 IF B$="MIRROR  " AND RM=26 AND MIRROR=0 THEN GOSUB 14950
7529 IF RM=46 AND OB(19)=0 AND LEFT$(B$,11)="GLASS WITH " AND ((D$="SWORD  " AND OB(2)=200) OR (D$="WRENCH  " AND OB(3)=200) OR (D$="SCEPTER  " AND OB(6)=200) OR (D$="BOTTLE  " AND OB(10)=200) OR (D$="CANE  " AND OB(11)=200)) THEN GOTO 10200
7530 IF RM=46 AND OB(19)<>0 AND LEFT$(B$,11)="GLASS WITH " AND ((D$="SWORD  " AND OB(2)=200) OR (D$="WRENCH  " AND OB(3)=200) OR (D$="SCEPTER  " AND OB(6)=200) OR (D$="BOTTLE  " AND OB(10)=200) OR (D$="CANE  " AND OB(11)=200)) THEN GOTO 10250
7535 IF RM=26 AND ((B$="MIRROR WITH SWORD  " AND OB(2)=200) OR (B$="MIRROR WITH WRENCH  " AND OB(3)=200) OR (B$="MIRROR WITH SCEPTER  " AND OB(6)=200) OR (B$="MIRROR WITH BOTTLE" AND OB(10)=200) OR (B$="MIRROR WITH CANE  " AND OB(11)=200)) THEN GOTO 10300
7540 IF B$="BOTTLE  " AND (OB(10)=RM OR OB(10)=200) THEN PRINT:PRINT "THE BOTTLE SHATTERS INTO LITTLE SLIVERS OF GLASS.":OB(10)=0:RETURN
7560 IF (C$="" OR C$=" ") THEN GOSUB 14800:GOTO 7595
7570 X$=LEFT$(B$,LEN(B$)-LEN(C$))+" "
7575 GOSUB 14800
7577 IF D$="" THEN GOTO 7595
7580 B$=D$:C$=E$
7585 GOSUB 14800
7590 PRINT:PRINT "YOU CAN'T BREAK THE ";LEFT$(X$,LEN(X$)-1);"WITH THE ";LEFT$(B$,LEN(B$)-2);".":RETURN
7595 PRINT:PRINT "YOU CAN'T BREAK THE ";LEFT$(B$,LEN(B$)-2);".":RETURN
7600 REM CUT
7602 Z1$="WITH "
7605 IF LEFT$(B$,1)=" " THEN GOSUB 14900
7608 IF B$="HOLE IN GLASS  " THEN B$="GLASS  "
7609 GOSUB 14800
7610 IF LEFT$(B$,6)="GLASS " AND RM=46 AND GLASS=1 THEN PRINT:PRINT "THE GLASS IS SHATTERED.  IT WOULD BE DIFFICULT TO CUT IT INTO SMALLER PIECES.":RETURN
7615 IF LEFT$(B$,6)="GLASS " AND RM=46 AND GLASS=2 THEN PRINT:PRINT "AN OPENING IS ALREADY CUT INTO THE GLASS.":RETURN
7620 IF LEFT$(C$,1)=" " THEN GOSUB 14950
7630 IF (B$="GLASS WITH DIAMOND  " OR B$="HOLE IN GLASS WITH DIAMOND  ") AND RM=46 AND OB(5)=200 THEN PRINT:PRINT "VERY CAREFULLY, YOU CUT A HOLE IN THE GLASS ENCLOSURE.":GLASS=2:RETURN
7670 X$=LEFT$(B$,LEN(B$)-LEN(C$))
7675 GOSUB 14800
7680 B$=D$:C$=E$
7685 GOSUB 14800
7688 IF X$="CANOPY " AND LEFT$(B$,6)="SWORD " AND RM=29 THEN PRINT:PRINT "THE SWORD HAS A RATHER DULL EDGE AND IS USELESS FOR CUTTING THE CANOPY.":RETURN
7690 PRINT:PRINT "YOU CAN'T CUT THE ";X$;"WITH THE ";LEFT$(B$,LEN(B$)-LEN(C$)-1);".":RETURN
7700 REM OIL
7702 IF BOTTLE<>3 THEN PRINT:PRINT "YOU DON'T HAVE ANY OIL.":RETURN
7705 IF LEFT$(B$,1)=" " THEN GOSUB 14900
7730 IF (B$="HINGE  " OR B$="DOOR  ") AND RM=20 AND STUCK=1 THEN PRINT:PRINT "THE HINGE IS ALREADY OILED.":RETURN
7740 IF (B$="HINGE  " OR B$="DOOR  ") AND RM=20 AND STUCK=0 AND BOTTLE<>3 THEN PRINT:PRINT "YOU DON'T HAVE ANY OIL.":RETURN
7750 IF (B$="HINGE  " OR B$="DOOR  ") AND RM=20 AND STUCK=0 AND BOTTLE=3 THEN PRINT:PRINT "OKAY.":STUCK=1:RETURN
7790 GOSUB 14800
7795 PRINT:PRINT "YOU CAN'T OIL THAT.":RETURN
7800 REM TOUCH
7805 IF LEFT$(B$,1)=" " THEN GOSUB 14900
7820 IF B$="MOSS  " AND RM=20 AND MOSS=0 THEN GOTO 6319
7880 GOSUB 14800
7890 PRINT:PRINT "OKAY.":RETURN
7900 REM SAY
7910 IF LEFT$(B$,1)=" " THEN PRINT:PRINT "WHAT DO YOU WANT TO SAY?":GOSUB 14910
7920 IF B$="KYLBASSA  " AND OB(19)=200 THEN PRINT:PRINT "A SCREAM OF RAGE RESOUNDS IN THE DISTANCE AND FADES AWAY TO NOTHINGNESS. SLOWLY,ALMOST IMPERCEPTIBLY, THE GLOOM WHICH HAS HUNG LIKE A VEIL OVER THE CASTLE IS   LIFTED.":GOTO 14720
7930 IF B$="KYLBASSA  " THEN PRINT:PRINT "YOU SENSE A MOVEMENT IN THE AIR AS IF A POWERFUL PRESENCE IS AWAKENING.  THE    FEELING SOON PASSES.":RETURN
7990 PRINT:PRINT "VERY NICELY SPOKEN.":RETURN
10000 PRINT:PRINT "OGRES HAVE AN EXTREMELY KEEN SENSE OF SMELL.  AS YOUR HUMAN SCENT REACHES THE   OGRE, HE AWAKENS WITH A START AND SEES YOU. FOR A MOMENT THE TWO OF YOU STARE ATEACH OTHER.  THEN, QUICKLY GRABBING A SWORD THAT WAS HIDDEN BEHIND HIM, THE"
10010 PRINT "OGRE CHARGES.  YOU BARELY MANAGE TO DUCK OUT OF THE WAY OF THE INITIAL CHARGE.":RETURN
10100 PRINT:PRINT "NOTHING HAPPENS AT FIRST, BUT THEN, WITH INEXORABLE SLOWNESS, THE BRICK WALL    GRINDS TO ONE SIDE, VANISHING INTO THE WALL.  A CONTINUANCE OF THE EAST PASSAGE IS REVEALED ON THE OTHER SIDE.":GOTO 5210
10200 PRINT:PRINT "THE GLASS SHATTERS WITH AN EXPLOSIVE FORCE, AND IN SO DOING, CAUSES THE CRYSTAL INSIDE TO DISINTEGRATE."
10210 PRINT:PRINT "THERE IS A MOMENTARY STILLNESS.  THE AIR SUDDENLY SEEMS THICK AND OPPRESIVE.    THE ONLY SOUND IS THE BEATING OF YOUR HEART.":SCORE=0:LOCATE 25,50:PRINT "SCORE:";SCORE;"   "
10220 PRINT "THEN, WITHOUT WARNING, A SHRILL CRY CUTS THROUGH THE SILENCE.  IT PIERCES YOUR  MIND LIKE A KNIFE.  YOU CAN MAKE OUT THE ANGUISHED CRIES AND SCREAMS OF MANY    PEOPLE.  AND THEN, AS QUICKLY AS IT STARTED, IT FADES INTO NOTHINGNESS."
10230 PRINT:PRINT "IT IS MY RESPONSIBILITY TO INFORM YOU THAT THROUGH YOUR INEPTNESS YOU HAVE      MANAGED TO DESTROY THE SOULS OF THE GOOD PEOPLE IMPRISONED IN THE CRYSTAL.  MAY YOU ROT IN DROGANYA'S DUNGEON.":END
10250 PRINT:PRINT "THE GLASS SHATTERS WITH AN EXPLOSIVE FORCE.":RETURN
10300 PRINT:PRINT "THE MIRROR COLLAPSES IN ON YOU.  IN THE NARROW HALLWAY WITH NO PLACE FOR YOU TO RUN, YOUR HEART IS PIERCED BY ONE OF THE SHARDS.  YOU ARE NOW A HEARTLESS       ADVENTURER.":GOTO 19900
10310 IF SCORE(23)=0 THEN SCORE=SCORE+350:SCORE(23)=1:GOTO 5210
10320 RETURN
11500 REM LOWER CASE TO UPPER CASE
11509 PRINT:INPUT Q$
11510 IF Q$="" THEN PRINT:PRINT "SPEAK UP, I CAN'T HEAR YOU!":GOTO 500
11515 A$=""
11520 FOR Y=1 TO LEN(Q$)
11525 L=ASC(MID$(Q$,Y,1))
11530 IF L>96 AND L<123 THEN L=L-32
11535 A$=A$+CHR$(L)
11540 NEXT Y
11542 IF A$="" THEN A$=Q$
11545 A$=A$+" "+" "
11590 RETURN
12700 REM BREAKING SENTENCE INTO INDIVIDUAL WORDS
12701 S=1
12702 IF MID$(A$,S,1)=" " THEN B$=MID$(A$,S+1):GOTO 12706
12704 IF S<9 THEN S=S+1:GOTO 12702
12706 T=1
12708 IF MID$(B$,T,1)=" " THEN C$=MID$(B$,T+1):GOTO 12712
12710 IF T<11 THEN T=T+1:GOTO 12708
12712 V=1
12714 IF MID$(C$,V,1)=" " THEN D$=MID$(C$,V+1):GOTO 12718
12716 IF V<9 THEN V=V+1:GOTO 12714
12718 W=1
12720 IF MID$(D$,W,1)=" " THEN E$=MID$(D$,W+1):GOTO 12750
12722 IF W<9 THEN W=W+1:GOTO 12720
12750 RETURN
14000 IF (B$="STONES  " OR B$="STONE  ") AND (RM=8 OR RM=10) THEN B$="WALL  "
14002 IF B$="SOUTH WALL  " AND RM=20 THEN B$="WALL  ":C$=" ":D$=""
14004 IF (B$="FOURTH WALL  " OR B$="BLANK WALL  ") AND RM=34 THEN B$="WALL  ":C$=" ":D$=""
14006 IF B$="UTENSIL  " THEN B$="UTENSILS  "
14010 IF B$="BRICK  " THEN B$="BRICKS  "
14015 IF B$="HANDLE  " THEN B$="SPIGOT  "
14020 IF B$="PIGEON NESTS  " THEN B$="NESTS  ":C$=" ":D$=""
14025 IF B$="GOLDEN SCEPTER  " OR B$="GOLD SCEPTER  " THEN B$="SCEPTER  ":C$=" ":D$=""
14030 IF B$="DISPLAY CASE  " OR B$="CASES  " OR B$="CASE  " OR B$="DISPLAY CASES  " THEN B$="DISPLAY CASE  ":C$=" ":D$=""
14035 IF B$="HERDSMAN'S HUT  " THEN B$="HUT  ":C$=" ":D$=""
14040 IF B$="WHITE SUBSTANCE  " OR B$="SUBSTANCE  " THEN B$="WHITE SUBSTANCE  ":C$=" ":D$=""
14045 IF B$="LAIR  " OR B$="OGRE'S LAIR  " THEN B$="CAVE  ":C$=" ":D$=""
14050 IF B$="PULLEY SYSTEM  " THEN B$="PULLEY  ":C$=" ":D$=""
14060 IF B$="GLASS ENCLOSURE  " OR B$="ENCLOSURE  " THEN B$="GLASS  ":C$=" ":D$=""
14070 IF B$="TREES  " THEN B$="TREE  "
14080 IF B$="BOOK OF FAIRYTALES  " THEN B$="BOOK  ":C$=" ":D$=""
14090 IF (A$="CLIMB TREE  " OR A$="CLIMB UP TREE  ") AND (RM=9 OR RM=11) THEN X=9:GOSUB 15000:GOTO 500
14092 IF (A$="CLIMB DOWN TREE  " OR A$="CLIMB DOWN  ") AND (RM=2 OR RM=12) THEN X=10:GOSUB 15000:GOTO 500
14096 IF (A$="CLIMB UP  " OR A$="CLIMB UP WELL  " OR A$="CLIMB CHAIN  " OR A$="CLIMB UP CHAIN  ") AND (RM=7 OR RM=10) THEN X=9:GOSUB 15000:GOTO 500
14098 IF (A$="CLIMB DOWN  " OR A$="CLIMB DOWN CHAIN  " OR A$="CLIMB DOWN WELL  " OR A$="CLIMB IN WELL  ") AND RM=8 THEN X=10:GOSUB 15000:GOTO 500
14100 IF BOTTLE<>3 AND B$="BOTTLE OF OIL  " THEN GOTO 14895
14110 IF (BOTTLE<>0 AND BOTTLE<>1) AND B$="BOTTLE OF WINE  " THEN GOTO 14895
14120 IF B$="BOTTLE OF WINE  " OR B$="BOTTLE OF OIL  " THEN B$="BOTTLE  ":C$=" ":D$=""
14200 RETURN
14700 PRINT "HE WHO SO EVER DESIRES TO COMMAND THE PRESENCE OF DRAGONYA, LORD OF THE BLACK   DEMONS, MUST SPEAK THE INCANTATION, `KYLBASSA', WHILE IN THE POSSESSION OF      THE . . ."
14710 PRINT "THERE IS NO MORE WRITING ON THE PARCHMENT.":RETURN
14720 PRINT "NOTHING HAPPENS AT FIRST.  THEN, A SHADOW FILLS THE DOORWAY.  YOU STEP BACK     UNCERTAIN.  AS THE FIGURE ENTERS THE ROOM, THE LIGHT FROM THE CRYSTAL REFLECTS  OFF SOMETHING ON THE FIGURE'S HEAD."
14725 PRINT "AS HE STEPS INTO THE LIGHT, YOU SEE THAT IT IS AN ELDERLY MAN WEARING ROYAL     GEAR.  'I AM THE KING OF THIS FAIR CASTLE', THE MAN SAYS.  'THANK YOU FOR       FREEING MY PEOPLE FROM THE DOMINION OF THE EVIL DROGANYA.'"
14728 PRINT "YOU BECOME AWARE OF THE SOUNDS OF A LARGE CROWD FLOATING DOWN FROM THE MEETING  HALL.  'LET ME INTRODUCE YOU TO THE FAIR PEOPLE OF THIS CASTLE.  I'M SURE THEY  HAVE MANY THINGS TO ASK YOU.'"
14730 PRINT "AND WITH HIS ARM AROUND YOU, THE KING LEADS YOU UP TO THE MEETING HALL AMIDST   THE CHEERS OF THE PEOPLE."
14740 SCORE=5000:LOCATE 25,50:PRINT "SCORE:";SCORE:END
14750 PRINT:PRINT "BY EXTENDING THE CANE AS FAR AS YOU CAN, THE LODESTONE SLOWLY ATTRACTS THE KEY. AFTER A FEW MOMENTS OF STRAINING, THE KEY IS IN YOUR HAND.":OB(13)=200:SCORE=SCORE+150:LOCATE 25,50:PRINT "SCORE:";SCORE:SCORE(13)=1:RETURN
14800 REM SUBROUTINE FOR OBJECT NOT HERE
14805 FOR R=1 TO 60
14810 IF LEFT$(B$,LEN(B$)-LEN(C$))+" "=B1$(R) AND B2(R)=RM THEN RETURN
14815 NEXT R
14820 FOR R=1 TO 20
14825 IF LEFT$(B$,LEN(B$)-LEN(C$))+" "=A1$(R) AND (OB(R)=200 OR OB(R)=RM) THEN RETURN
14830 NEXT R
14835 PRINT:PRINT "I DON'T SEE ANY ";LEFT$(B$,LEN(B$)-LEN(C$));"HERE.":RETURN 500
14850 FOR R=1 TO 20
14855 IF LEFT$(B$,LEN(B$)-LEN(C$))+" "=A1$(R) AND OB(R)=200 THEN RETURN
14860 NEXT R
14865 PRINT:PRINT "YOU DON'T HAVE THE ";LEFT$(B$,LEN(B$)-(LEN(C$)+1));".":RETURN 500
14900 REM XXX WHAT?
14905 PRINT:PRINT LEFT$(A$,LEN(A$)-1);"WHAT?"
14910 Z$=A$:PRINT:INPUT Q$
14915 GOSUB 11510
14920 IF LEFT$(A$,3)=LEFT$(Z$,3) THEN RETURN 580
14930 LET B$=A$:GOSUB 12706
14935 GOSUB 14000
14940 RETURN
14950 PRINT:PRINT Z1$;"WHAT?"
14955 PRINT:INPUT Q$
14960 GOSUB 11510
14965 IF LEFT$(A$,3)=LEFT$(Z$,3) THEN RETURN 580
14970 IF LEFT$(A$,3)=LEFT$(Z1$,3) THEN B$=LEFT$(B$,LEN(B$)-1)+A$:GOSUB 12706:RETURN
14980 LET B$=LEFT$(B$,LEN(B$)-1)+Z1$+A$:GOSUB 12706
14990 RETURN
15000 REM SUBROUTINE FOR MOVING
15005 IF DARK=1 AND RM<14 THEN DARK=0
15010 IF DARK=1 AND LIGHT=0 AND RM>14 THEN PRINT:PRINT "A GROUP OF GOBLINS SUDDENLY GRAB HOLD OF YOU AND SLOWLY TORTURE YOU. YOU ARE NOWA DEAD ADVENTURER.":RETURN 19900
15020 IF (LIGHT=0 OR OB(4)<>200) AND RM>13 THEN PRINT:PRINT "IT IS UNWISE TO MOVE AROUND IN THE DARK. THERE ARE GOBLINS ABOUT WHOSE ONLY FEARIS LIGHT.":DARK=1:RETURN
15110 IF X=10 AND RM=5 THEN GOTO 16000
15120 IF X=3 AND (RM=4 AND RM=13) THEN GOTO 16040
15140 IF X=10 AND RM=8 AND WELL=1 THEN A(8,10)=7:A(7,9)=8
15150 IF X=4 AND RM=16 AND OGRE=0 AND BOOK=0 THEN PRINT:PRINT "OGRES HAVE VERY GOOD EARS.  AS YOU APPROACH, THE OGRE WAKES UP AND GRABS A SWORDFROM BEHIND HIM.  HE SWINGS AT YOU AND YOU BARELY MANAGE TO DUCK OUT OF THE WAY.":OGRE=1:RETURN
15160 IF X=4 AND RM=16 AND OGRE=1 AND BOOK=0 THEN PRINT:PRINT "THE OGRE IS MOMENTARILY SURPRISED BY YOUR STUPIDITY, BUT RECOVERS IN TIME TO    CLEAVE YOUR HEAD FROM YOUR SHOULDERS.":RETURN 19900
15170 IF X=10 AND (RM=17 OR RM=18) THEN PRINT:PRINT "I WOULDN'T ADVISE GOING DOWN INTO THE PIT. IT IS TOO SHEAR.":RETURN
15180 IF X=3 AND RM=13 THEN OGRE=0
15190 IF X=3 AND RM=16 AND OGRE=1 AND BOOK<>2 THEN PRINT:PRINT "THE OGRE, WHOSE SIZE BELIES HIS QUICKNESS, BLOCKS YOUR RETREAT.":RETURN
15200 IF X=10 AND STAND=1 THEN PRINT:PRINT "OKAY.":STAND=0:RETURN
15210 IF (X=1 OR X=2 OR X=3 OR X=4 OR X=5 OR X=6 OR X=7 OR X=8 OR X=9) AND STAND=1 THEN PRINT:PRINT "YOU HAVE TO GET DOWN FROM THE CHEST FIRST.":RETURN
15500 IF X=10 AND A(RM,10)=0 THEN PRINT:PRINT "WHAT, DOWN A GOPHER HOLE?!.":RETURN
15510 IF A(RM,X)=0 THEN PRINT:PRINT "YOU CAN'T GO THAT WAY.":RETURN
15700 RM=A(RM,X)
15795 X=0:DARK=0
15796 IF RM=7 AND SCORE(21)=0 THEN SCORE=SCORE+350:SCORE(21)=1
15797 IF RM=49 AND SCORE(22)=0 THEN SCORE=SCORE+300:SCORE(22)=1
15798 IF RM=46 AND SCORE(25)=0 THEN SCORE=SCORE+500:SCORE(25)=1
15800 RETURN 400
16000 REM ALLIGATORS
16010 A=A+1
16020 IF A=1 THEN PRINT:PRINT "DID I TELL YOU ABOUT THE ALLIGATORS IN THE MOAT?":RETURN
16030 IF A=2 THEN PRINT:PRINT "SEE YOU LATER ALLIGATOR!":RETURN 19900
16040 PRINT:PRINT "THE STREAM IS TOO SWIFT TO CROSS.":RETURN
17000 REM SCORE
17010 PRINT:PRINT "YOU HAVE ACHIEVED A SCORE OF ";SCORE;" POINTS OUT OF 5,000 POINTS."
17020 IF SCORE <=5000 THEN RATING$="AN EXPERT ADVENTURER."
17030 IF SCORE <2800 THEN RATING$="A SEASONED ADVENTURER."
17040 IF SCORE <1400 THEN RATING$="A NOVICE ADVENTURER."
17050 IF SCORE <750 THEN RATING$="A BEGINNING ADVENTURER."
17100 PRINT:PRINT "THIS RANKS YOU AS ";RATING$
17200 END
19800 PRINT:PRINT "DO YOU WANT TO CONTINUE PLAYING?"
19810 PRINT:INPUT A$
19820 IF A$="YES" OR A$="Y" THEN GOTO 19850
19830 IF A$="NO" OR A$="N" THEN GOTO 17000
19840 PRINT:PRINT "YOU MUST ANSWER YES OR NO.":GOTO 19810
19850 B=INT(RND*4)
19860 IF B=0 THEN PRINT:PRINT "VOILA!! . . . . . . . . . . . . ":GOTO 400
19870 IF B=1 THEN PRINT:PRINT "SHAZAM!!. . . . . . . . . . . . ":GOTO 400
19880 IF B=2 THEN PRINT:PRINT "ABRACADABRA!! . . . . . . . . . ":GOTO 400
19890 IF B=3 THEN PRINT:PRINT "TAH DAHHHHH!! . . . . . . . . . ":GOTO 400
19900 PRINT:PRINT "DO YOU WANT TO CONTINUE PLAYING?"
19910 PRINT:INPUT A$
19920 IF A$="YES" OR A$="Y" THEN GOTO 19950
19930 IF A$="NO" OR A$="N" THEN GOTO 17000
19940 PRINT:PRINT "YOU MUST ANSWER YES OR NO.":GOTO 19910
19950 CLS:PRINT:PRINT "PLEASE WAIT A MOMENT WHILE YOUR BODY PARTS ARE REASSEMBLED.":RM=1:GOTO 390
20000 REM ROOM CONTENTS
20010 FLAG1=0:FLAG2=0:FOR R=1 TO 20
20020 IF OB(R)=RM THEN FLAG2=R
20030 IF FLAG2<>R THEN 20060
20040 IF FLAG1=0 THEN PRINT A2$(FLAG2):ELSE PRINT A2$(FLAG2)
20050 FLAG1=1:FLAG2=1
20060 NEXT R
20070 RETURN
21000 REM ROOM DESCRIPTION
21005 LOCATE 25,3:PRINT "                 "
21010 COLOR 0,7
21030 LOCATE 25,3:PRINT RM$(RM)
21040 LOCATE 25,50:PRINT "SCORE:";SCORE
21060 PRINT RM$(RM)
21065 COLOR 7,0
21069 IF RM>37 THEN GOTO 21071
21070 ON RM GOSUB 21100,21200,21300,21400,21500,21600,21650,21700,21800,21850,21900,21950,22000,22050,22100,22150,22200,22250,22300,22350,22400,22500,22550,22600,22650,22700,22750,22800,22850,22900,22950,23000,23050,23100,23150,23200,23250:RETURN
21071 K=RM-37:ON K GOSUB 23300,23350,23400,23450,23500,23550,23600,23650,23700,23750,23800,23850,23900
21080 RETURN
21100 REM ROOM 1 - HERDSMAN'S HUT
21110 PRINT "YOU ARE INSIDE THE HERDSMAN'S HUT.  THE HERDSMAN SORELY NEEDS A GOOD INTERIOR   DECORATOR.  THE DECOR IS SINGULARLY DRAB AND MAKES A MONASTERY LOOK LIKE THE    GARDEN OF EDEN.  THE HUT IS EMPTY EXCEPT FOR A BED AND TABLE."
21120 IF DOOR=1 THEN PRINT "TO THE EAST IS AN OPEN DOOR."
21125 IF DOOR=0 THEN PRINT "TO THE EAST IS A CLOSED DOOR."
21130 RETURN
21200 REM ROOM 2 - TREETOP
21210 PRINT "YOU HAVE MANAGED TO CLIMB TO THE TOP OF ONE OF THE TALLEST TREES.  THE FOREST   STRETCHES AS FAR AS YOU CAN SEE TO THE NORTH, SOUTH AND WEST.  TO THE EAST THE  FOREST ENDS AND YOU CAN SEE THE TOP OF A CASTLE."
21250 RETURN
21300 REM ROOM 3 - DESERT
21310 PRINT "YOU ARE ON A DESERT PLAIN. SMALL LIZARDS AND OTHER DESERT CREATURES OCCASIONALLYSCURRY FROM ONE ROCK TO ANOTHER.  THERE IS A FOREST TO THE WEST."
21320 RETURN
21400 REM ROOM 4 - STREAM
21410 PRINT "YOU ARE FOLLOWING A STREAM RUNNING IN A NORTH/SOUTH DIRECTION. THERE IS A FORESTTO THE WEST.  THE REMAINS OF AN OLD WOODEN BRIDGE ARE HERE.  ACROSS THE STREAM  YOU CAN SEE THE REMAINS OF THE EAST END OF THE BRIDGE."
21430 RETURN
21500 REM ROOM 5 - MOAT
21510 PRINT "YOU ARE STANDING ON THE WEST BANK OF A MOAT WHICH SURROUNDS THE CASTLE. THE ONLYWAY ACROSS APPEARS TO BE THE DRAWBRIDGE.  UNFORTUNATELY (OR FORTUNATELY) THE    DRAWBRIDGE IS UP.  THERE IS A PATH TO THE WEST."
21540 RETURN
21600 REM ROOM 6 - DESERT
21610 PRINT "YOU ARE ON A DESERT PLAIN. SMALL LIZARDS AND OTHER DESERT CREATURES OCCASIONALLYSCURRY FROM ONE ROCK TO ANOTHER.  NOTHING BUT DESERT CAND BE SEEN."
21620 RETURN
21650 REM ROOM 7 - WELL BOTTOM
21660 PRINT "YOU ARE AT THE BOTTOM OF A DRY WELL.  A CHAIN IS HANGING DOWN FROM THE SHAFT.  AROCKY PASSAGEWAY GOES EAST AND WEST."
21680 RETURN
21700 REM ROOM 8 - OUTSIDE HUT
21710 PRINT "YOU ARE OUTSIDE A HERDSMAN'S HUT WHICH LIES TO THE WEST.  A WELL WITH A PULLEY  SYSTEM IS JUST OUTSIDE THE DOOR.  PATHS TO THE NORTHWEST AND SOUTHWEST LEAD TO AFOREST.  TO THE EAST IS A LARGE CASTLE.  THERE IS A NORTH/SOUTH PATH HERE."
21740 RETURN
21800 REM ROOM 9 - FOREST
21810 PRINT "YOU ARE IN A DARK FOREST. THE FOLIAGE IS THICK WITH VINES HANGING FROM THE TREESAND MISTLETOE COVERING MANY OF THE BRANCHES.  THROUGH THE TREES TO THE EAST YOU CAN MAKE OUT A CHIMNEY."
21820 RETURN
21850 REM ROOM 10 - WELL BOTTOM
21860 PRINT "YOU ARE AT THE BOTTOM OF A WELL STANDING IN ABOUT THREE FEET OF WATER.  THE WALLSURROUNDING YOU IS MADE OF ROUGH HEWN STONE.  THERE IS A CHAIN HANGING DOWN FROMTHE SHAFT."
21880 RETURN
21900 REM ROOM 11 - DEEP FOREST
21910 PRINT "YOU ARE IN A DEEP DARK FOREST.  THE ONLY THING TO BE SEEN ARE TREES.            "
21920 RETURN
21950 REM ROOM 12 - TREETOP
21960 PRINT "YOU HAVE MANAGED TO CLIMB TO THE TOP OF ONE OF THE TALLEST TREES.  THE FOREST   STRETCHES AS FAR AS YOU CAN SEE TO THE NORTH, SOUTH, EAST AND WEST."
21980 RETURN
22000 REM ROOM 13 - ROARING WATER
22010 PRINT "AS YOU ROUND A BEND IN THE TRAIL, YOU COME TO A DEADEND. OFF IN THE DISTANCE YOUHEAR THE ROAR OF WATER."
22020 RETURN
22050 REM ROOM 14 - HIGH PASS
22060 PRINT "YOU ARE IN A HIGH EAST/WEST PASSAGE. THERE IS A DISTANT LIGHT TOWARDS THE WEST. "
22070 IF LIGHT=0 THEN PRINT "IT IS GETTING DIFFICULT TO SEE."
22080 RETURN
22090 RETURN
22100 REM ROOM 15 - LOW PASS
22110 PRINT "YOU ARE IN A LOW EAST/WEST PASSAGE.  THERE IS A DISTANT LIGHT TOWARDS THE EAST. "
22120 IF LIGHT=0 THEN PRINT "IT IS GETTING DIFFICULT TO SEE."
22130 RETURN
22150 REM ROOM 16 - OGRE'S LAIR
22160 IF OGRE=0 THEN PRINT "YOU ARE IN A CAVE. SITTING ON A BROKEN STALAGMITE ABOUT 15 YARDS IN FRONT OF YOUIS ONE MEAN LOOKING OGRE. FROM THE LOOKS OF THINGS, HE APPEARS TO BE ASLEEP."
22165 IF OGRE=1 THEN PRINT "YOU ARE IN A CAVE. IN FRONT OF YOU IS ONE MEAN LOOKING OGRE.  FROM THE LOOKS OF THINGS, HE APPEARS TO BE READING A BOOK."
22170 RETURN
22200 REM ROOM 17 - EAST OF PIT
22205 IF WALL=0 THEN PRINT "YOU ARE ON THE EAST SIDE OF A PIT ACROSS WHICH A DECREPIT ROPE BRIDGE IS STRUNG.BEYOND THE PIT, THE PASSAGE CONTINUES WEST.  TO THE EAST, THE PASS ENDS AT A    BRICK WALL."
22210 IF WALL=1 THEN PRINT "YOU ARE ON THE EAST SIDE OF A PIT ACROSS WHICH A DECREPIT ROPE BRIDGE IS STRUNG.THE PASS CONTINUES IN AN EAST/WEST DIRECTION."
22220 RETURN
22250 REM ROOM 18 - PIT
22260 PRINT "YOU ARE IN AN EAST/WEST PASSAGE THAT IS DIMLY LIT BY YOUR LAMP. THE WALLS ARE   DAMP HERE.  TO THE EAST IS A PIT.  RUNNING ACROSS THE PIT IS A DECREPIT ROPE    BRIDGE.  BEYOND THE PIT, THE PASSAGE CONTINUES EAST."
22270 RETURN
22300 REM ROOM 19 - FORK
22310 PRINT "HERE THE PASSAGE FORKS TO THE NORTHEAST AND SOUTHEAST WITH A THIRD PASSAGE TO   THE WEST."
22340 RETURN
22350 REM ROOM 20 - SLOPING PASS
22360 IF MOSS=0 THEN PRINT "THIS IS A PASSAGE THAT SLOPES DOWN TO THE SOUTHWEST AND UP TO THE SOUTHEAST.    THERE ARE MORTAR PATCHES AROUND THE ROOM, INDICATING THAT IN THE DISTANT PAST   THIS ROOM WAS PAVED.  THE SOUTH WALL IS COVERED WITH MOSS.":RETURN
22370 IF MOSS=1 THEN PRINT "THIS IS A PASSAGE THAT SLOPES DOWN TO THE SOUTHWEST AND UP TO THE SOUTHEAST.    THERE ARE MORTAR PATCHES AROUND THE ROOM, INDICATING THAT IN THE DISTANT PAST   THIS ROOM WAS PAVED.  THERE IS A DOOR ON THE SOUTH WALL.":RETURN
22390 RETURN
22400 REM ROOM 21 - TREASURY
22410 PRINT "THIS ROOM LOOKS AS IF IT HAS BEEN RANSACKED. OVERTURNED DISPLAY CASES LITTER THEFLOOR.  THERE ARE EXITS TO THE NORTHWEST AND NORTHEAST."
22440 RETURN
22500 REM ROOM 22 - SMALL ROOM
22510 PRINT "THIS IS A SMALL ROOM WHERE A NORTHWEST AND SOUTHWEST PASSAGE CONNECT.  THERE IS A STONE STAIRCASE LEADING UP."
22540 RETURN
22550 REM ROOM 23 - GUARD ROOM
22560 PRINT "YOU HAVE ENTERED A LARGE ROOM.  RUSTED RACKS, WHICH ONCE HELD SPEARS, LINE ONE  WALL.  IN THE CENTER OF THE ROOM IS A LARGE TABLE. A STAIRCASE LEADING DOWN AND ANOTHER STAIRCASE LEADING UP ARE THE ONLY EXITS."
22590 RETURN
22600 REM ROOM 24 - MEETING HALL
22610 PRINT "YOU ARE AT THE EAST END OF A HUGE ROOM WITH EXITS LEADING IN SEVERAL DIRECTIONS.THE CEILING IS TOO HIGH TO MAKE OUT.  THERE IS A BALCONY ABOVE YOU WHICH RUNS   AROUND THE PERIMETER.  AT THE WEST END OF THE ROOM IS A MARBLE THRONE."
22640 RETURN
22650 REM ROOM 25 - MEETING HALL
22660 PRINT "YOU ARE AT THE EAST END OF A HUGE ROOM WITH EXITS LEADING IN SEVERAL DIRECTIONS.THE CEILING IS TOO HIGH TO MAKE OUT. THERE IS A BALCONY ABOVE YOU WHICH RUNS    AROUND THE PERIMETER.  THERE IS A MARBLE THRONE HERE."
22690 RETURN
22700 REM ROOM 26 - HALLWAY
22710 PRINT "THIS IS A HALLWAY WHICH RUNS IN A NORTH/SOUTH DIRECTION.  A LARGE MIRROR LINES  ONE WALL."
22740 RETURN
22750 REM ROOM 27 - JUNCTION
22760 PRINT "THIS IS A JUNCTION WITHIN THE CASTLE.  THERE ARE EXITS TO THE SOUTH AND WEST. INADDITION A STAIRCASE LEADS UP."
22790 RETURN
22800 REM ROOM 28 - ANTEROOM
22810 PRINT "THIS IS A SMALL ROOM WITH EXITS LEADING IN THE FOUR CARDINAL DIRECTIONS.  A     STAIRCASE LEADS DOWN."
22840 RETURN
22850 REM ROOM 29 - KING'S CHAMBER
22860 IF STAND=0 THEN PRINT "AT ONE TIME THIS WAS AN ORNATELY DECORATED ROOM.  THERE IS A LARGE BED HERE WITHA CANOPY OVER IT.  A FIREPLACE ADORNS ONE WALL.  THE EXIT IS TO THE EAST."
22870 IF STAND=1 THEN PRINT "FROM THIS PERSPECTIVE THE ROOM LOOKS THE SAME EXCEPT THAT YOU CAN NOW SEE ON TOPOF THE CANOPY."
22890 RETURN
22900 REM ROOM 30 - SERVANT'S CHAMBER
22910 IF BED=0 THEN PRINT "THE ONLY PIECE OF FURNITURE IN THIS ROOM IS A BED.  THE EXIT IS TO THE SOUTH.   "
22920 IF BED=1 THEN PRINT "THE ONLY PIECE OF FURNITURE IN THIS ROOM IS A BED.  BEHIND THE BED IS A NARROW  OPENING. THE EXIT IS TO THE SOUTH.   "
22940 RETURN
22950 REM ROOM 31 - CHILD'S CHAMBER
22960 PRINT "THIS IS A BRIGHTLY DECORATED ROOM.  SCENES ON THE WALLS DEPICT CLOWNS IN VARIOUSPOSES.  THERE IS A SMALL BED IN ONE CORNER.  THE EXIT IS TO THE NORTH."
22990 RETURN
23000 REM ROOM 32 - ENTRYWAY
23010 PRINT "THIS IS THE CASTLE ENTRANCE. TO THE WEST IS A DRAWBRIDGE WHICH IS RAISED. PIGEONNESTS ON THE DRAWBRIDGE LEDGE GIVE EVIDENCE THAT IT HAS BEEN CLOSED FOR SOME    TIME.  A DOORWAY LEADS TO THE EAST."
23040 RETURN
23050 REM ROOM 33 - CORRIDOR
23060 PRINT "THIS IS AN EAST/WEST CORRIDOR.                                                  ":RETURN
23090 RETURN
23100 REM ROOM 34 - WIZARD'S CHAMBER
23110 IF WAND=0 THEN PRINT "THREE OF THE WALLS IN THIS ROOM ARE DECORATED BY MURALS.  THE FOURTH WALL IS    BLANK.  THERE IS A DOOR TO THE WEST."
23120 IF WAND=1 THEN PRINT "THREE OF THE WALLS IN THIS ROOM ARE DECORATED BY MURALS.  THERE IS AN OPEN      DOORWAY TO THE NORTH AND A DOOR TO THE WEST."
23140 RETURN
23150 REM ROOM 35 - LIBRARY
23160 PRINT "THIS IS THE WIZARD'S SECRET LIBRARY.  EMPTY SHELVES LINE THE WALLS.  ALL THE    BOOKS HAVE BEEN REMOVED."
23190 RETURN
23200 REM ROOM 36 - KITCHEN
23210 IF KITCHEN=0 THEN PRINT "THE FLOOR IN THIS ROOM IS COVERED WITH BROKEN EATING UTENSILS.  THERE IS AN EXITTO THE SOUTH. "
23220 IF KITCHEN=1 THEN PRINT "THE FLOOR IN THIS ROOM IS COVERED WITH BROKEN EATING UTENSILS.  THERE IS AN EXITTO THE SOUTH AND A DOOR LEADING DOWN."
23240 RETURN
23250 REM ROOM 37 - WINE CELLAR
23260 PRINT "THIS ROOM IS FILLED WITH BROKEN BOTTLES AND THE SMELL ALMOST OVERCOMES YOU.  A  STAIRCASE LEADS UP.  TO THE EAST IS A PASSAGEWAY."
23290 RETURN
23300 REM ROOM 38 - ROCKY PASS
23310 PRINT "YOU ARE IN A ROCKY EAST/WEST PASS.                                              "
23340 RETURN
23350 REM ROOM 39 - CROSSING
23360 PRINT "THIS IS A SMALL ROOM WHERE AN EAST/WEST PASSAGE AND A NORTH/SOUTH PASSAGE CROSS."
23390 RETURN
23400 REM ROOM 40 - DAMP ROOM
23410 PRINT "THIS ROOM IS VERY DAMP AND COLD.  ABOVE YOU IS A DOOR FROM WHICH A SMALL AMOUNT OF WATER IS LEAKING.  BELOW YOU IS A PIT THAT HAS BEEN FILLED WITH RUBBLE.  A   PATH LEADS TO THE SOUTH."
23440 RETURN
23450 REM ROOM 41 - COLD ROOM
23460 IF DOOR5=0 THEN PRINT "THIS ROOM IS VERY DAMP AND COLD.  ABOVE YOU IS A DOOR FROM WHICH A SMALL AMOUNT OF WATER IS LEAKING.  BELOW YOU IS A PIT THAT HAS BEEN FILLED WITH RUBBLE.  A   PATH LEADS TO THE NORTH."
23470 IF DOOR5=1 THEN PRINT "THIS ROOM IS VERY DAMP AND COLD.  ABOVE YOU IS AN OPEN DOOR LEADING TO ANOTHER  ROOM.  BELOW YOU IS A PIT THAT HAS BEEN FILLED WITH RUBBLE.  A PATH LEADS TO THENORTH."
23490 RETURN
23500 REM ROOM 42 - DEADEND
23510 PRINT "THIS IS THE DEADEND TO A WEST PASSAGE.  THERE IS AN OPENING ABOVE YOU THROUGH   WHICH LIGHT FILTERS INTO THE PASSAGE.  STEPS HAVE BEEN CARVED INTO THE WALL."
23540 RETURN
23550 REM ROOM 43 - PEASANT'S HUT
23560 PRINT "YOU HAVE ENTERED WHAT APPEARS TO BE AN ABANDONED PEASANT'S HUT. THERE IS A DOOR TO THE WEST AND AN OPENING GOING DOWN."
23590 RETURN
23600 REM ROOM 44 - OUTSIDE HUT
23610 PRINT "THE HUT IS SURROUNDED BY THICK WOODS. THERE IS A PATH TO THE WEST. A SMALL TRAILLEADS TO THE NORTHEAST.  THE HUT DOOR IS EAST OF YOU."
23640 RETURN
23650 REM ROOM 45 - BRIDGE
23660 PRINT "THERE IS A STREAM HERE AND THE REMAINS OF A WOODEN BRIDGE. ACROSS THE STREAM YOUCAN SEE THE REMAINS OF THE WEST END OF THE BRIDGE.  A PATH LEADS TO THE EAST."
23690 RETURN
23700 REM ROOM 46 - KING'S VAULT
23710 IF B=0 AND OB(6)=200 THEN PRINT "AS YOU ENTER THIS ROOM, YOU ARE SUDDENLY BLINDED BY A BRIGHT LIGHT.  AFTER YOUR EYES ADJUST,  YOU SEE THAT THE LIGHT IS EMANATING FROM A PEDESTAL IN THE CENTER OF THE ROOM.":B=1
23711 IF B=1 THEN PRINT "UPON THE PEDESTAL IS A GLASS ENCLOSURE.  THERE IS A DOOR TO THE NORTH.":B=2:GLASS=0:RETURN
23712 IF (OB(6)<>200 AND OB(6)<>RM) THEN PRINT "AS YOU ENTER THIS ROOM, A CHILL SWEEPS THROUGH YOUR BODY.  AFTER A MOMENT IT    PASSES.  IN THE CENTER OF THE ROOM IS A PEDESTAL UPON WHICH IS SHATTERED GLASS  AND CRYSTAL.  TO THE NORTH IS A DOOR.":GLASS=1
23713 IF OB(6)=200 AND B=2 THEN PRINT "THE ROOM IS BRIGHTLY LIT BY A GLOW EMANATING FROM A PEDESTAL IN THE CENTER OF   THE ROOM. UPON THE PEDESTAL IS A GLASS ENCLOSURE.  THERE IS A DOOR TO THE NORTH.":GLASS=0:RETURN
23740 RETURN
23750 REM ROOM 47 - KING'S CHAMBER
23760 PRINT "FROM THIS VANTAGE POINT YOU CAN NOW SEE ON TOP OF THE CANOPY.                   "
23790 RETURN
23800 REM ROOM 48 - OIL PIT
23810 PRINT "AS YOU COME AROUND A BEND YOU ENTER A SMALL CLEARING.  IN THE CENTER OF IT IS   A PIT.  OIL IS SLOWLY BUBBLING UP OUT OF THE PIT.  THERE IS A TRAIL TO THE      SOUTHWEST."
23840 RETURN
23850 REM ROOM 49 - STUDY ROOM
23860 PRINT "THIS ROOM APPEARS TO HAVE ESCAPED THE FORCE THAT DESTROYED THE REST OF THE      CASTLE.  THERE IS A TABLE IN THE MIDDLE OF THE ROOM.  A DOORWAY LEADS TO THE    SOUTH."
23890 RETURN
23900 REM 50 - WORK ROOM
23910 PRINT "THIS APPEARS TO BE A SMALL WORKROOM.  A DOOR LEADS DOWN FROM THE ROOM.          "
23940 RETURN
32000 REM INITIALIZE
32011 DIM A(50,10),A1$(50),A2$(50),OB(20),IN$(20),B1$(60),B2(60),RM$(50),SCORE(25)
32012 FOR R=1 TO 25
32013 SCORE(R)=0
32014 NEXT R
32020 FOR R=1 TO 50
32030 FOR D=1 TO 10
32040 READ A(R,D)
32050 NEXT D
32060 NEXT R
32070 FOR R=1 TO 20
32080 READ A1$(R),A2$(R),OB(R),IN$(R)
32090 NEXT R
32092 FOR R=1 TO 60
32094 READ B1$(R),B2(R)
32096 NEXT R
32100 FOR R=1 TO 50
32110 READ RM$(R)
32120 NEXT R
32130 RETURN
32500 REM DIRECTIONS
32510 DATA 0,0,0,0,0,0,0,0,0,0:REM ROOM 1
32520 DATA 0,0,0,0,0,0,0,0,0,9:REM ROOM 2
32530 DATA 8,6,6,9,6,6,6,6,0,0:REM ROOM 3
32540 DATA 13,8,0,9,0,0,0,0,0,0:REM ROOM 4
32550 DATA 4,3,0,8,0,0,0,0,0,0:REM ROOM 5
32560 DATA 6,6,6,6,6,6,6,6,0,0:REM ROOM 6
32570 DATA 0,0,14,15,0,0,0,0,8,0:REM ROOM 7
32580 DATA 4,3,5,9,0,9,0,9,0,10:REM ROOM 8
32590 DATA 11,11,8,11,11,11,11,11,2,0:REM ROOM 9
32600 DATA 0,0,0,0,0,0,0,0,8,0:REM ROOM 10
32610 DATA 11,11,11,11,11,11,11,11,12,0:REM ROOM 11
32620 DATA 0,0,0,0,0,0,0,0,0,11:REM ROOM 12
32630 DATA 0,4,0,0,0,0,0,0,0,0:REM ROOM 13
32640 DATA 0,0,18,7,0,0,0,0,0,0:REM ROOM 14
32650 DATA 0,0,7,16,0,0,0,0,0,0:REM ROOM 15
32660 DATA 0,0,15,0,0,0,0,0,0,0:REM ROOM 16
32670 DATA 0,0,0,18,0,0,0,0,0,0:REM ROOM 17
32680 DATA 0,0,17,14,0,0,0,0,0,0:REM ROOM 18
32690 DATA 0,0,0,0,20,0,21,0,0,0:REM ROOM 19
32700 DATA 0,0,0,0,0,0,22,19,0,0:REM ROOM 20
32710 DATA 0,0,0,0,22,19,0,0,0,0:REM ROOM 21
32720 DATA 0,0,0,0,0,20,0,21,23,0:REM ROOM 22
32730 DATA 0,0,0,0,0,0,0,0,24,22:REM ROOM 23
32740 DATA 36,0,0,25,0,26,0,0,0,23:REM ROOM 24
32750 DATA 26,0,24,0,36,0,0,0,0,0:REM ROOM 25
32760 DATA 27,25,0,0,0,0,24,0,0,0:REM ROOM 26
32770 DATA 0,26,0,32,0,0,0,0,28,0:REM ROOM 27
32780 DATA 30,31,33,29,0,0,0,0,0,27:REM ROOM 28
32790 DATA 0,0,28,0,0,0,0,0,0,0:REM ROOM 29
32800 DATA 0,28,0,0,0,0,0,0,0,0:REM ROOM 30
32810 DATA 28,0,0,0,0,0,0,0,0,0:REM ROOM 31
32820 DATA 0,0,27,0,0,0,0,0,0,0:REM ROOM 32
32830 DATA 0,0,34,28,0,0,0,0,0,0:REM ROOM 33
32840 DATA 0,0,0,33,0,0,0,0,0,0:REM ROOM 34
32850 DATA 0,34,0,0,0,0,0,0,0,0:REM ROOM 35
32860 DATA 0,24,0,0,0,25,0,0,0,0:REM ROOM 36
32870 DATA 0,0,38,0,0,0,0,0,0,0:REM ROOM 37
32880 DATA 0,0,39,37,0,0,0,0,0,0:REM ROOM 38
32890 DATA 40,41,42,38,0,0,0,0,0,0:REM ROOM 39
32900 DATA 0,39,0,0,0,0,0,0,0,0:REM ROOM 40
32910 DATA 39,0,0,0,0,0,0,0,0,0:REM ROOM 41
32920 DATA 0,0,0,39,0,0,0,0,43,0:REM ROOM 42
32930 DATA 0,0,0,0,0,0,0,0,0,42:REM ROOM 43
32940 DATA 0,0,0,45,48,0,0,0,0,0:REM ROOM 44
32950 DATA 0,0,44,0,0,0,0,0,0,0:REM ROOM 45
32960 DATA 0,0,0,0,0,0,0,0,0,0:REM ROOM 46
32970 DATA 0,0,5,8,0,0,0,0,0,0:REM ROOM 47
32980 DATA 0,0,0,0,0,0,0,44,0,0:REM ROOM 48
32990 DATA 0,34,0,0,0,0,0,0,0,0:REM ROOM 49
32995 DATA 0,0,0,0,0,0,0,0,0,0:REM ROOM 50
33000 DATA "BOOK  ","THERE IS A BOOK OF FAIRYTALES HERE.",1,"A BOOK OF FAIRYTALES"
33010 DATA "SWORD  ","THERE IS A SWORD HERE.",1,"A SWORD"
33020 DATA "WRENCH  ", "THERE IS A WRENCH HERE.",1,"A WRENCH"
33030 DATA "LAMP  ","THERE IS A LAMP HERE.",1,"A LAMP"
33040 DATA "DIAMOND  ","THERE IS A DIAMOND HERE.",21,"A DIAMOND"
33050 DATA "SCEPTER  ","THERE IS A GOLDEN SCEPTER HERE.",47,"A GOLDEN SCEPTER"
33060 DATA "LODESTONE  ","THERE IS A LODESTONE HERE.",16,"A LODESTONE"
33070 DATA "WAND  ","THERE IS A WAND HERE.",34,"A WAND"
33080 DATA "SCROLL  ","THERE IS A SCROLL HERE.",35,"A SCROLL"
33090 DATA "BOTTLE  ","THERE IS A BOTTLE HERE.",36,"A BOTTLE OF WINE"
33100 DATA "CANE  ","THERE IS A CANE HERE.",43,"A CANE"
33110 DATA "VINE  ","THERE IS A TREE VINE HERE.",0,"A TREE VINE"
33120 DATA "KEY  ","THERE IS A KEY HERE.",0,"A KEY"
33130 DATA "CHEST  ","THERE IS A CHEST HERE.",31,"A CHEST"
33140 DATA "OIL  ","THERE IS SOME OIL HERE.",48,"SOME OIL"
33150 DATA "SCROLL  ","THERE IS A SCROLL HERE.",49,"A SCROLL"
33160 DATA "PARCHMENT  ","THERE IS A PARCHMENT HERE.",49,"A PARCHMENT"
33170 DATA "QUILL  ","THERE IS A QUILL HERE.",49,"A QUILL"
33180 DATA "CRYSTAL  ","THERE IS A CRYSTAL HERE.",0,"A CRYSTAL"
33190 DATA "BLANK  ","THERE IS A BLANK HERE.",0,"A BLANK"
33250 DATA "BED  ",1,"DOOR  ",1,"TABLE  ",1,"DOOR  ",8,"WELL  ",8,"BUCKET  ",8,"UTENSILS  ",36,"MORTAR  ",20,"STREAM  ",4,"GLASS  ",46,"MOAT  ",5,"PEDESTAL  ",46,"DRAWBRIDGE  ",32,"DOOR  ",40,"SPIGOT  ",8,"LATCH  ",23,"MOSS  ",20,"PIT  ",40,"DOOR  ",0
33260 DATA "MISTLETOE  ",9,"OPENING  ",0,"BRICKS  ",17,"THRONE  ",25,"OPENING  ",0,"BED  ",29,"MURALS  ",34,"BED  ",30,"BRIDGE  ",18,"BED  ",31,"TABLE  ",23,"KEY  ",0,"HOLE  ",25,"CHAIN  ",7,"MIRROR  ",26,"PULLEY  ",8,"DISPLAY CASE  ",21,"HUT  ",1
33270 DATA "FIREPLACE  ",29,"CANOPY  ",29,"BOTTLES  ",37,"STONES  ",8,"CHAIN  ",8,"HUT  ",8,"STONE  ",10,"PIT  ",17,"PIT  ",18,"BRIDGE  ",4,"BRIDGE  ",45,"NESTS  ",32,"WHITE SUBSTANCE  ",32,"TREE  ",9,"TREE  ",11,"WALL  ",0,"RUNES  ",0,"WATER  ",10
33280 DATA "CHAIN  ",10,"CASTLE  ",5,"CAVE  ",16,"OGRE  ",16,"BRIDGE  ",17
33500 DATA HERDSMAN'S HUT,TREETOP,DESERT,STREAM,MOAT,DESERT,WELL BOTTOM,OUTSIDE HUT,FOREST,WELL BOTTOM,DEEP FOREST,TREETOP,ROARING WATER,HIGH PASS,LOW PASS,OGRE'S LAIR,EAST OF PIT,PIT,FORK,SLOPING ROOM,TREASURY,SMALL ROOM,GUARDROOM,MEETING HALL
33520 DATA MEETING HALL,HALLWAY,JUNCTION,ANTEROOM,KING'S CHAMBER,SERVANT'S CHAMBER,CHILD'S CHAMBER,ENTRYWAY,CORRIDOR,WIZARD'S CHAMBER,LIBRARY,KITCHEN,WINE CELLAR,ROCKY PASS,CROSSING,DAMP ROOM,COLD ROOM,DEADEND,PEASANT'S HUT,OUTSIDE HUT,BRIDGE
33530 DATA KING'S VAULT,KING'S CHAMBER,OIL PIT,STUDY ROOM,WORKROOM
```
{% endraw %}

## DROGANYA.DOC

{% raw %}
```
Castle Droganya is a biactive adventure game.  The course of the game is
dictated by your response to the situation.  The goal is to free the souls of
the townspeople which have been trapped by the evil Lord Droganya.

Responses

The game recognizes over 30 action words.  To move in any direction, type, for
example, "GO NORTHEAST" or "GO NE" or "NE".  All eight compass points are
possible directions.  To review the room description, type "LOOK" or "L".  To
see a list of the objects you are carrying, type "INVENTORY" or "INV" or "I".
To exit out of the game at any time, type QUIT, END, or STOP.

Except for the responses indicated above, you must always start a response with
an action word.  Action words include GET, DROP, EXAMINE, OPEN, MOVE, and TURN.
In addition, do not include articles in your responses (ie., A or THE).
The maximum response length allowed in this game is four words.

Scoring

Your score is indicated at the bottom right of the screen while playing the 
game.  Scores are achieved by obtaining objects or solving situations.  The
maximum score is 5,000 points.


Share Ware

This game is "user supported" share ware.  This means that you are free to
make copies of this game and to distribute them as long as the disk is copied
in its entirety.  In fact you are encouraged to do so.  If in playing Castle
Droganya, you gain some enjoyment, please further the share ware cause by
sending a $5.00 donation to me at the address indicated below.

Errors

Should you run into any errors or bugs or if you have any comments, changes
or improvements, please write to me at the address indicated below.

Solution

To obtain a map of Castle Droganya and the solution (or hints), please send
$5.00 to:
                  Steve Chodes
                  670 Sotano Drive
                  Sacramento, CA  95833

Thank you.

```
{% endraw %}

## FILE1074.TXT

{% raw %}
```
Disk No: 1074
Disk Title: Game Fun for All
PC-SIG Version: 2

Program Title: Game Fun for All
Author Version: 2.0A
Author Registration: $5.00 to $20.00.
Special Requirements: EGA and a version of BASIC.

LAS VEGAS EGA CASINO is a package of games that use the special features
of your EGA monitor.  Included are: Las Vegas Casino Black Jack, Las
Vegas Video Poker, and Las Vegas Dollar Slots (MicroBucks).  You can
choose any of the three games to play from the program menu.  It has
great graphics and is so realistic you forget you're playing a computer.

XWORD lets you quickly create a crossword puzzle that can be saved to
disk and printed.  The crossword puzzle size can be from 15x15 to 23x23.
You enter words with the cursor onto the puzzle grid.  Afterward, the
words can be ``deleted'', with the word placed on a ``move'' list where
it can be recovered and placed in another location.  This program
maintains word lists for across and down, and clues which you can see at
any time.  XWORD lets you enter words on the puzzle grid even before the
clue list is made.  After you finish your puzzle, the program lets you
print a blank crossword puzzle, a clue list, and the solution to the
puzzle.  Your crossword puzzle can be saved to disk.  Thus, the amount
of crossword puzzles you can create is limited only by disk space and
your own imagination.

CASTLE DROGANYA is a reactive adventure game.  The course of the game is
dictated by your response to the situation.  The goal is to free the
souls of the townspeople who have been trapped by the evil Lord
Droganya.

LIAR'S POKER is a game utility that simplifies playing Liar's Poker, a
betting game in which each player's ``hand'' is a dollar bill serial
number.  The program generates random numbers that can be substituted to
play the game.  It keeps records on disk for up to 20 ``liars''
(players), each liar having up to 20 numbers which can be printed or
displayed on the screen.

File Descriptions:

------------  EGA CASINO.
CASINO   EXE  Main program.
CASINO   DOC  Documentation.
------------  XWORD.
LARGE    XWD  Sample crossword file.
NEW      XWD  Sample crossword file.
SMALL    XWD  Sample crossword file.
SPRINT   EXE  Print utility.
XWORD    EXE  Main program.
XWORD-2A TXT  Documentation.
XWORD-2A MSG  Text file.
------------  CASTLE DROGANYA.
DROGANYA BAS  Adventure game.
DROGANYA DOC  Documentation.
------------  LIAR'S POKER.
LPOKER   EXE  Main program.
LPOKER   DOC  Documentation.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 1074 GAME FUN FOR ALL  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for EGA Casino, type:                        ║
║               COPY CASINO.DOC LPT1: (press enter)                       ║
║ To run the program EGA Casino, type: CASINO (press enter)               ║
║                                                                         ║
║ To see the documentation for XWord, type:                               ║
║               GO (press enter)                                          ║
║ To run the program XWord, type: XWORD (press enter)                     ║
║                                                                         ║
║ To print the documentation for Castle Droganya, type:                   ║
║                COPY DROGANYA.DOC LPT1: (press enter)                    ║
║ To run the programs Castle Droganya and PC Minute Math, please          ║
║      consult your Basic language manual for the correct syntax          ║
║        for your machine.                                                ║
║ To run the LIAR'S POKER program, type LPOKER (press enter)              ║
║ To copy the documentation for LIAR'S POKER to your printer, type        ║
║                     COPY LPOKER.DOC LPT1: (press enter)                 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LPOKER.DOC

{% raw %}
```


















                               L I A R S   P O K E R
                                   Game  Utility

                                    Version 1.0
                                 January  16, 1988





















                                 By David L. Evans
                             2512 North 13 1/2 Street
                               Terre Haute, IN 47804






                             Liars Poker   Version 1.0
                          Copyright 1988   By D. L. Evans


                                 Table Of Contents
                                 -----------------

                                                                     Page
         I.   Introduction to Liars Poker ............................ 1

              Hardware Requirements .................................. 1

              Player and Game Requirements ........................... 1

              What is Liars Poker? ................................... 1

              Registering your Liars Poker Game Utility .............. 2

         II.  How To Play Liars Poker ................................ 3

              What Are The Rules? .................................... 3

              Some Basic Strategy .................................... 4

         III. How To Use The Liars Poker Game Utility ................ 6

              Starting Liars Poker ................................... 6

              The Main Menu .......................................... 7

                   BEGIN ............................................. 7

                   RESTORE ........................................... 7

                   ADD ............................................... 8

                   EDIT .............................................. 8

                   PRINT ............................................. 8

                   DISPLAY ........................................... 8

                   SELECT ............................................ 9

                   ! ( shell ) ....................................... 9

                   QUIT .............................................. 9

              Errors and Messages .................................... 9

                   Internal Errors ................................... 9

                   External Errors ................................... 10






    I.  Introduction To Liars Poker.

    Hardware Requirements

         * An IBM Personal Computer or "compatible" running
           MS-DOS or PC-DOS 2.0 or later.

         * One 5 1/4" 360K Double Sided Double Density, or
           5 1/4" 1.2 MB High Density, disk drive.

         * 141K RAM available memory.

         NOTE: An 80 ( or more ) column printer is recommended.


    Player and Game Requirements

         * 2 or more players required.

         * Maximum of 20 players allowed.

         * Maximum of 20 games allowed for each player.


    What is Liars Poker?

         This Liars Poker program is not a game,  but rather  a  game  utility.
         This program simplifies and improves the original game of Liars Poker.
         The  game  is  still played as always.  The computer does not play the
         game, but it does practically everything else.

         Liars Poker is not a new game.  I did not invent the original game  of
         liars  poker  and I don't know who did.  This Liars Poker Game Utility
         however, is unique.

         The original game was/is traditionally played using dollar bill serial
         numbers for wagering.  The Liars Poker Game  Utility  generates  eight
         digit  random  numbers.  These numbers can then be substituted for the
         dollar bill serial numbers needed to play the game.

         The Liars Poker Game Utility offers benefits over the original version
         of the game. Some of these advantages will be discussed,  some will be
         discovered by using the Liars Poker Game Utility.

         I  have  included a section in this document for those that have never
         played Liars Poker before.  There I will provide you  with  the  basic
         rules of Liars Poker. If you have never played Liars Poker before, get
         some friends together and give it a try.

         WARNING.  Some  states have laws against pari-mutuel betting.  Playing
         Liars Poker for money in such a state would be against the law.


                                         1






         If you have played the game of Liars  Poker  before,  then  you  could
         start  using the Liars Poker Game Utility right after reading the rest
         of this introduction. But if you do, please come back later and finish
         the sections pertinent to yourself.

         Be sure and copy the LPOKER.DOC and LPOKER.EXE files to another  disk,
         and  keep your original disk in a safe place.  Persons with registered
         copies should also copy the BLACKJAK.EXE and BLACKJAK.DOC files to the
         other disk.

    Registering your Liars Poker Game Utility.

         If you find the Liars Poker Game Utility  useful,  a  contribution  of
         $  5.00 would be greatly appreciated.  This contribution will register
         you with me as a user of the Liars Poker Game Utility,  entitling  you
         to notification of future releases of the Liars Poker Game Utility.

         If you include,  with your contribution, a self addressed stamped disk
         mailer and a blank formatted 5 1/4" 360K DS/DD disk,  I  will  include
         the following for free of charge;

         LPOKER.EXE     An official copy of the Liars Poker Game Utility.

         LPOKER.DOC     The  official documentation on how to play  Liars Poker
                        and use the game utility.

         BLACKJAK.EXE * Sharpen  your  Blackjack  skills  playing  one  on  one
                        against  a  casino Blackjack Dealer.  A simulation of a
                        popular version of the great  game  of  Blackjack.  In-
                        cludes Splits, Double Downs, Insurance Bets and more.

         BLACKJAK.DOC * Complete instructions for playing the BLACKJAK.EXE ver-
                        sion of Blackjack.

         *  Note:  BLACKJAK.EXE and BLACKJAK.DOC are only available through the
         registration of the Liars Poker Game Utility.  The  Blackjack  program
         has never been submitted to any distributor or user group.

         Please register Liars Poker by sending a $ 5.00 contribution to:

              David L. Evans
              2512 North 13 1/2 Street
              Terre Haute, IN 47804

    Unmodified  copies of the Liars Poker Game Utility and documentation may be
    made for your own use,  to give free of charge to others,  or to distribute
    within  a  user  group.  User  groups  may  charge  a fee up to $7.50 ( for
    duplication costs ) to distribute the Liars Poker Game Utility and documen-
    tation.  All other organizations may not charge a fee.  No  person  or  or-
    ganization  may  give  or  sell  the  Blackjack program or documentation to
    others. BLACKJAK.EXE and BLACKJAK.DOC are only to be made available to per-
    sons registering their use of the Liars Poker Game Utility.

                                         2






    II. How To Play Liars Poker.

    What Are The Rules?

         Each player has an eight digit number for the game in play. Each digit
         represents one of eight "cards" that makes up a players'  poker  hand.
         The numbers ( or "cards" ) are valued as follows;

              NO.  VALUE
              ---  -----
              1 -  Ace. Highest Value.
              0 -  Ten. Second highest value.
              9 -  Nine.
              8 -  Eight.
              7 -  Seven.
              6 -  Six.
              5 -  Five.
              4 -  Four.
              3 -  Three.
              2 -  Two. Lowest value.

         The players usually sit in a large circle. A player is chosen to lead.
         Usually  the  player  that  won or lost the last game "outright" ( ex-
         plained later ) leads the next game.  The play moves  in  a  clockwise
         direction. If the last winner/looser is not present, the person to the
         left of the last winner/looser leads.  Otherwise, flip a coin or some-
         thing. It's not that critical.

         Each player has the same predetermined amount  at  risk.  This  amount
         should  be one quarter per player minimum,  to a one dollar per player
         maximum.  Decide on the amount before beginning.  I am going to assume
         the  predetermined  amount  to be one quarter for the examples in this
         document, but it is really up to the group of players.

         Each player takes a turn at bidding.  A bid may  be  one  or  more  of
         "a kind" only.  No Full Houses or Straights, only "like kinds" are al-
         lowed. Some example legal bids are;

              Quantity  Number
              Bid       Bid ("card")        Actual Bid - As Called
              --------  ------------        ----------------------
              ( 1 )     2                   "One 2" ( "One Deuce" )
              ( 3 )     1                   "Three Aces"
              ( 12 )    7                   "Twelve 7's"
              ( 4 )     0                   "Four Tens"

         A bid is basically an estimate of how many of a certain number are  in
         all  the  players hands combined.  The bidders' estimates are based on
         the bidders' game numbers,  the number of players,  the bidding of the
         players and on the players themselves.



                                         3






         Each player must either overbid the last bidder, or call the last bid-
         der  a liar.  If you choose to overbid the last bidder,  then the next
         player must either call you a liar or overbid you. The relationship of
         the value of bids is as follows;

            LOWER BID     <----        V A L U E        ---->     HIGHER BID

             (1)2 thru (1)Ace, (2)2's thru (2)Aces, (3)2's thru (3)Aces ...

         When all players have said liar, to the same player and bid, the hands
         are called.  All players indicate the quantity of the bid number  that
         they have for the current game. The quantities are totaled.

         If there are as many numbers as bid ( or more ),  each player must pay
         the bidder a quarter.  If there are not as numbers as bid,  the bidder
         must  pay  each  player  a  quarter.  The bidder in these two examples
         either wins, or looses, "outright".

         "Outright" means winning or loosing the maximum possible amount. WARN-
         ING.  A player loosing outright  to  nineteen  other  players  with  a
         quarter  as  the predetermined wager would have to pay out $ 4.75.  On
         the other hand,  the same player could win the $ 4.75 and register the
         use of this program.

         Believe it or not,  that is all the rules.  Beyond the above mentioned
         rules, anything goes.  That's why it's called Liars Poker.  The object
         is  to  drive the bid up as high as possible,  using any devious means
         possible, while trying to not get caught short yourself.

    Some Basic Strategy.

         You don't always have to bid to drive the bid up.  Academy award  win-
         ning  acting  performances are allowed.  Act like you are about to bid
         higher, then change your mind after a long pause. Make a comment like;
              "Well, I imagine that's a good bet, but I'll pass."
         You really think it is a marginal bet,  but you hope some other sucker
         will  bid  even  higher  (  by  making  him  think  you are just being
         careful ).

         The only time lying is not allowed is when the hands are called. After
         all players have called one bidder a liar,  you must honestly tell how
         many of the bid number you have.

         You  will  find  That  the  Liars  Poker Game Utility can provide fast
         checking of any players' numbers. You will be easily caught if another
         player suspects your being dishonest. Lie all you can when playing the
         game but don't cheat.

         The best players win and loose less games outright than most  players.
         The  tendency to want to win "IT ALL" is more temptation than most can
         stand. The more conservative player will generally do better.


                                         4






         When in doubt,  call the bidder a liar.  You will only be risking  the
         minimum amount. Generally more games are lost outright than won.

         You  would probably come out ahead more than fifty percent of the time
         if you never bid at all.  Saying "liar" is similar to passing.  So you
         can  just keep passing,  knowing there's a good chance that some eager
         beaver will usually work himself into going bust.

         Liars Poker is one of Americas great underground games. I hope you en-
         joy playing it.











































                                         5






    III. How To Use The Liars Poker Game Utility.

         In the course of the Liars Poker Game Utilities' operation it  creates
         four  files.  The  names of these files are LPOKER.DBF,  LPOKERNO.DBF,
         LPOKER.BAK and LPOKERNO.BAK. These files are created and maintained in
         the current directory ( current at the time LPOKER.EXE is used ).

         Whether you copy the LPOKER.EXE and LPOKER.DOC files to a hard disk or
         to a floppy,  you have the option of executing Liars  Poker  from  any
         drive, disk or directory, including RAM. You can start LPOKER.EXE from
         any directory by typing;

              [drive:][\path\]LPOKER   Note: Fill in "[]"s with your specs.

         and pressing <ENTER>.

         The Liars Poker Game Utility maintains two database files ( LPOKER.DBF
         and  LPOKERNO.DBF  ).  One of the files contains all the players names
         and their associated game numbers.  If you start Liars Poker from  the
         current  directory of a floppy disk ( see Starting Liars Poker ),  you
         can remove the disk between sessions and stash it  in  a  safe  place.
         This  will deter persons from cheating.  A person would have to obtain
         the disk before being able to view game data.

         The other two files ( LPOKER.BAK and LPOKERNO.BAK ) are the BAK  files
         for  their  associated  *.DBF  files.  These BAK files are created and
         maintained in the same directory as the database  files.  These  files
         are security against accidentally beginning a new game when you really
         meant  to restore an old one.  Refer to the description of the RESTORE
         function, of the main menu, for further details on the two BAK files.

         The two *.DBF and two *.BAK files require a total  of  7408  bytes  of
         free  disk  space  in  the current directory from which Liars Poker is
         started.

         NOTE: When choosing RESTORE from the main  menu,  the  LPOKER.DBF  and
         LPOKERNO.DBF files must be in the current directory.

    Starting Liars Poker.

         With  LPOKER.EXE  in  the  current  directory  type "LPOKER" and press
         <ENTER>.  With LPOKER.EXE in other than the  current  directory,  type
         [drive:][\path\]LPOKER  (  Fill  in  "[]"s with your specs ) and press
         <ENTER>. The main menu will appear.









                                         6






    The Main Menu.

         The main menu provides nine functions.

              RESTORE ... Restore an old game from database.
              BEGIN ..... Begin a new game of Liars Poker.
              ADD ....... Add new liars (players) to the game.
              EDIT ...... Edit (or just browse) liars names.
              PRINT ..... Print all numbers on the printer.
              DISPLAY ... Display all numbers on the screen.
              SELECT .... Select liars to PRINT or DISPLAY.
              ! ......... Exit temporarily to a DOS shell.
              QUIT ...... Quit and save all data to database.

    BEGIN begins a new game.  You enter the number of players and the number of
         games  that you want.  You are asked to confirm your entries.  At this
         point you may press <ESCAPE> if you mistakenly meant  to  RESTORE  in-
         stead of BEGIN.  WARNING, any key other than <ESCAPE> or <N> or <n> is
         considered a "Y" by default.

         After a "Y" confirmation,  the "Enter / Edit  Names"  screen  appears.
         Here you enter the players names.  Edit each entry using the keys from
         the on screen menu. Press <ENTER> when your through. Blank and identi-
         cal entries are not allowed.  If you make a mistake don't  worry,  you
         can  later  select  EDIT  from the main menu and change or correct any
         names.  After you enter all the players names you are returned to  the
         main menu.

         You  may  abandon  the "Enter / Edit Names" screen,  and return to the
         main menu prematurely,  by pressing <ESCAPE>.  If <ESCAPE> is pressed,
         the data entered using the BEGIN function is discarded.  Any entry er-
         rors must be corrected before <ESCAPE> can be used (  see  Errors  and
         Messages ).

    RESTORE restores an old game. A copy of all current game data is maintained
         in  two  database  files in the current directory.  To use the data in
         these database files;

              Make your current  directory  the  same  one  LPOKER.DBF  and
              LPOKERNO.DBF are in.

              Select RESTORE from the main menu of Liars Poker.

         The  RESTORE function makes it possible to select QUIT,  from the main
         menu,  right after all players have obtained their game numbers.  This
         frees the computer for other uses.







                                         7






         The  database  may  be RESTORED again and again without disturbing any
         data, until the BEGIN function is used. The BEGIN function is not con-
         sidered to be used if BEGIN is abandoned  (  by  pressing  <ESCAPE>  )
         before  it  returns  control to the main menu.  At any time before the
         BEGIN function is used, Liars Poker may be started and RESTOREd. After
         using the RESTORE function you may PRINT a players' lost  game  sheet,
         ADD one or more players to the game,  or do anything else the game al-
         lows.

         If you want to RESTORE the database files that were active before  the
         BEGIN  function  was  used,  you  must first rename the LPOKER.BAK and
         LPOKERNO.BAK files to LPOKER.DBF and LPOKERNO.DBF  respectively.  This
         must be done from outside the Liars Poker environment ( or from within
         a shell while inside the Liars Poker environment ).  Refer to your DOS
         manual for instructions on using the DOS RENAME command.

    ADD adds new players to the current game. This function appends new data to
         the current database files. The original data remains undisturbed.

    EDIT edits or browses the players names. Blank or identical entries are not
         allowed.

    PRINT ( See SELECT ) prints all the players' numbers (  unless  interrupted
         with  the  <ESCAPE>  key  ).  To conserve paper on those printers with
         tractor feeds to the wrong side of the printer papers' edge ( standard
         for most printers ),  the paper is advanced 6 1/6" down the page  then
         pauses before starting to print.  The previous player then removes his
         game sheet. The next players' numbers don't start printing until a key
         is pressed.

         After the last players' numbers are printed,  or the <ESCAPE>  key  is
         pressed, the printer does the two form feeds necessary to position the
         paper for removal ( printer must be an 11" page at 6 lines/inch ).

         If  you  are lucky enough to have a printer that doesn't waste a sheet
         of paper every run,  then use SELECT instead of PRINT ( refer  to  the
         section discussing SELECT ).

    DISPLAY  (  See  SELECT  )  displays all the players numbers on the monitor
         ( unless interrupted with the <ESCAPE> key ).  This function  has  two
         purposes.

         First, if you don't have a printer, I don't want you to feel left out.
         The  DISPLAY function makes it easy for each player to privately write
         down his game numbers.

         Second,  the DISPLAY function allows checking (  after  a  session  of
         games is completed ) of all players numbers.





                                         8






    SELECT  selects certain players for which to PRINT or DISPLAY game numbers.
         Use this function to PRINT or DISPLAY an ADDed players' game  numbers,
         or to PRINT or DISPLAY a players' lost game numbers.  This function is
         also useful for printers designed with the tractor on the correct side
         of the papers' edge ( as  discussed  in  the  PRINT  section  of  this
         document ). For these printers, SELECT all the names from the list in-
         stead  of  using  the PRINT function.  The extra form feed will not be
         generated after the last players' numbers are printed, thus conserving
         printer paper.

         Use the Up and Down cursor keys to move the  highlighted  bar  to  the
         name you want to SELECT for the queue.  Press <ENTER> with your selec-
         tion highlighted. The number is now selected for the queue.

         Names in the queue are indicated  by  flashing.  A  selection  may  be
         removed from the queue by selecting it a second time.

         When you finish SELECTing,  PRINT or DISPLAY your selections using the
         function keys outlined  in  the  on  screen  menu.  After  SELECT  has
         finished  ( or has been prematurely abandoned by pressing the <ESCAPE>
         key ) you are returned to the main menu.

    !  ( shell ) exits you temporarily to a DOS shell while Liars Poker  stands
         by in RAM. In this shell you can perform any task, or run any program,
         that you normally could with the operating system and 141K less avail-
         able  memory  than  normal ( LPOKER.EXE uses 141K RAM ).  To leave the
         shell and return to Liars Poker, type EXIT and press <ENTER>.

         To do a shell,  a copy of COMMAND.COM must be where COMSPEC says it is
         ( refer to your DOS manual, for more information ).

    QUIT  quits  Liars Poker,  closes any open database files,  and returns the
         user to the operating system.  Note that the data  is  actually  saved
         before  QUIT  is  selected.  The message to the contrary,  on the main
         menu,  is more to make a user aware of the  database  than  it  is  to
         provide accurate technical information.

    Errors and Messages.

         There are two kinds of errors,  internal and external. An internal er-
         ror is an error that is handled by the Liars Poker environment. An ex-
         ternal error is an error that the Liars  Poker  environment  does  not
         handle.

    Internal Errors.

         If an internal error is detected,  it is followed by a message prompt-
         ing the user as to what action ( if any ) to take. After correcting an
         internal error, the Liars Poker Game Utility proceeds as usual.




                                         9






         At the main menu you may get a "Please BEGIN or  RESTORE  first"  mes-
         sage.  This  indicates that Liars Poker is not ready to continue until
         the BEGIN or RESTORE function is used.  If you BEGIN or RESTORE  again
         but still get this message, refer to and read the documentation on the
         BEGIN and RESTORE functions.

         The  "All  Data Restored" message only confirms that the RESTORE func-
         tion has been activated.  If the required *.DBF files are not  in  the
         current  directory,  the  data  will not be restored but the "All Data
         Restored" message will still be displayed.  When an attempt is made to
         use  this  falsely restored data,  the "Please BEGIN or RESTORE first"
         message will indicate the data is not properly restored.

    External Errors.

         If an external error occurs, a message is displayed indicating the er-
         ror type, and control is returned to the operating system.  You should
         correct the cause of the error before restarting Liars Poker.

         Note  that  the "Illegal function call" error is usually caused by im-
         proper setup of the Liars Poker Game Utility. For example, if you do a
         shell (!) and COMMAND.COM is not where COMSPEC says it is, an "Illegal
         function call" error will occur. Most of the other external error mes-
         sages are descriptive enough to identify the cause of the error. Refer
         to your DOS manual for help with external errors.

























                             Liars Poker   Version 1.0
                          Copyright 1988   By D. L. Evans

                                        10

```
{% endraw %}

## XWORD-2A.TXT

{% raw %}
```

                                RELEASE_2a NOTES
                         XWord (v1.7) by JJO Software
                                   July 1989


     PURPOSE

     XWord is a fast, flexible and compact menu-driven crossword puzzle
     tool box for the IBM PC and compatibles. While easy to use, it is
     intended for serious crossword puzzle creators (cruciverbalists).
     XWord may be used with Turbo Lightning (see below).

     RELEASE NOTES

     This release (#2a) supports color monitors, reduces minimum memory
     requirements, and speeds up some functions. It also cleans up some
     anomalies found in earlier versions. Puzzle sizes down to 13x13 are
     now supported.

     FEATURES

     1. A define function permits entry of puzzle title and size, from
        13x13 to 23x23 (NY Times Sunday). The default is 21x21.

     2. By means of the cursor, words may be entered in any order and in
        any location of the puzzle grid; and, cursor speed is adjustable.

     3. Words may be rubbed out (erased) from any location; but, they
        are saved to a "move" list and can be recovered and placed in
        another location.

     4. The word lists "across," "down" and "move" and clues may be
        viewed at any time.

     5. Clues need not be entered at the time words are entered into the
        puzzle grid. They may be entered and edited whenever it is
        convenient to do so.

     6. A complete set of printed materials is produced: puzzle blank,
        list of clues and puzzle solution. Word numbers, blanks and
        "blocks" are automatically inserted.

     7. All puzzle information, including the "move" list, is saved to a
        file. Puzzle size is set and words entered automatically when
        a puzzle file file is loaded.

     8. For safety and ease of use, functions are interlocked to
        prevent inadvertent loss of work. In addition, you are beeped
        when you've attempted an illegal operation.


     SYSTEM REQUIREMENTS

     System: Any member of the IBM PC or PS/2 family, or compatible,
     with DOS 2.1, or later.

     Memory: 80 kilobytes, over and above DOS and any resident programs.

     Video: XWord does not require graphics and has been run with VGA,
     EGA, mono and CGA adapters. A main menu command permits color/mono
     toggling for the best display.

     Printer: For the puzzle blanks, an IBM ProPrinter (dot matrix) or
     one which prints the IBM text graphics characters is required. Most
     recent low-price printers (Epson, Star and Panasonic, for example)
     have a switch so that you can select either the Epson or the IBM
     character set. Set the switch to IBM mode.


     RUNNING XWORD

     The files XWord.Exe and XWord-2a.Txt, along with any sample files,
     should be in the current (logged) directory. To run XWord, at the
     system prompt type Xword. When the logo screen appears, press any key
     to invoke XWord's main menu. XWord is not case sensitive, so all
     entries may be in upper or lower case as preferred. Commands are
     available on the main menu only when their execution is appropriate.
     They are selected by typing one of the letters, as follows:

     C)lues: View, add or edit clues for words already entered into the
             current puzzle grid. You may enter or replace clues, or
             simply scroll through the word lists.

     D)efine: Create a new puzzle definition, i.e., title and size.

     E)dit: Invokes the XWord editor which places the current puzzle
            grid on the screen and permits words to be entered or rubbed
            out, in any order and in any location (see XWord Editor).

     I)nfo: Displays this file, if present in the current directory.

     L)oad: Load a puzzle file from disk. A definition record in the
            file permits the puzzle to be automatically sized and titled.
            NOTE: Puzzle files are not ASCII files.

     N)ame: Name|rename the current puzzle.

     P)uzzle: View|print (optional) the current puzzle blank, solution
              (completed puzzle) and numbered list of clues.

     S)ave: Save a puzzle file to disk, i.e., its definition record and
            three word lists (across, down and move).

     V)ideo: Toggle color on/off for best effect. The XWord title block
             text will be visible when video is set correctly.

     W)ord: View|print (optional) the current word lists, across, down
            and move.

     eX)it: Quit. You will be cautioned if changes to the current
            puzzle have not been saved.


     XWORD EDITOR

     Invoked from the main menu via "E," the editor is the XWord
     engine. Upon entry to the editor, the current puzzle contents, if
     any, are displayed. The active keys are:

     Cursor: four (4) arrow keys used to position the cursor on the
             puzzle grin.

     Rate: the numeric keys (1..8) may be used at any time to set cursor
           speed (advance). When set greater than 1, you may not be able
           to reach all edges of the grid.

     Insert: the + key is used to insert a word at the current location.
             You will be prompted to: (1) specify the direction (across
             or down) with the arrow keys and (2) enter the word.

     Rubout: the - key is used to remove a word from the grid to the
             move list. You will be prompted for direction, only.

     Move: the * key is used to insert a word from the move list at the
           current cursor position. You will be prompted for direction.
           The move list is then displayed for selection of the word to
           be placed on the grid.

           NOTE: During insert, rubout and move, the function may be
           aborted via the <Esc> key or by entering an empty word.

     Exit: use <Enter> alone to leave the editor and return to the main
         menu.

     The editor performs checking that words will fit within the grid if
     inserted at the prescribed location and direction. If not, you are
     beeped and the operation is aborted.


     TURBO LIGHTNING

     XWord may be used in conjunction with the Turbo Lightning spell
     checker. To do so, install Lightning first and then run XWord. Within
     XWord, you can toggle spell checking on/off via <Alt+F5>. All
     Lightning functions should be accessible - see the Lightning manual.


     XWORD RELEASE HISTORY

     1 (V1.3):  Initial release 15x15 to 23x23, mono monitor support only.
     2 (V1.6):  Same as above, plus bug fixes and support for both color
       and mono monitors. Not released to PC-SIG.
     2a (V1.7): Cosmetic and speedup changes, plus size down to 13x13.


     UPGRADES

     The next upgrade is expected to be optional "shadowing," wherein a
     word's opposite hand or shadow blanks are marked or otherwise
     highlighted. This will make it easier to observe the puzzle diagonal
     and lateral symmetry conventions.


     REGISTRATION

     Communications from all XWord users will be accepted and answered
     by mail or via CompuServe (73407, 550). However, registered users
     will be given a daytime phone number (when available) which may be
     used to discuss upgrades and for technical support. To register, send
     a $25 check or money order to:

                                 JJO Software
                              174 Westover Court
                             Delran, NJ 08075, USA

                                      ***
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1074

     Volume in drive A has no label
     Directory of A:\

    XWORD-2A TXT      7701   7-12-89   9:12p
    LPOKER   EXE     83944   1-16-88   8:15p
    XWORD    EXE     36144   7-12-89   9:12p
    GO       BAT        38  10-19-87   3:56p
    XWORD-2A MSG      1374   7-12-89   9:12p
    LARGE    XWD      1920   7-12-89   9:12p
    NEW      XWD      1728   7-12-89   9:12p
    SMALL    XWD      2592   7-12-89   9:12p
    SPRINT   EXE      9072   7-08-88  10:00p
    CASINO   DOC     10309   1-26-88   5:21p
    CASINO   EXE     98243   1-26-88   5:01p
    DROGANYA BAS     57170  12-07-87   8:52a
    DROGANYA DOC      1888  12-22-87  11:40a
    LPOKER   DOC     26253   1-16-88   8:15p
    GO       TXT      1541   9-12-89   8:42a
    FILE1074 TXT      2641   9-18-89  10:03a
           16 file(s)     342558 bytes
                           13312 bytes free
