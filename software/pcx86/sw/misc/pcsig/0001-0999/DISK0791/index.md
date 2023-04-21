---
layout: page
title: "PC-SIG Diskette Library (Disk #791)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0791/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0791"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "POKER & ULTIMA21"

    Play draw poker head-to-head with the computer.  POKER has
    a sophisticated style of playing and betting, and is intended to
    challenge the serious poker player.
    
    It's honest.  The computer does not know what is in your hand
    unless there is a showdown.
    
    It's smart.  The game has different patterns of betting and can observe
    your style of betting and modify its own behavior accordingly.
    
    It's cagey.  POKER can bluff in several ways and sometimes makes large
    bets with bad hands or no bets with good hands.  Every action it takes
    has at least two possible interpretations.  The randomness of the
    shuffling has been tested in simulations involving over half a million
    hands and the results mirror those expected in normal poker playing.
    
    Ante up and deal 'em.
    
    Play Blackjack as it's played in the casinos with the computer as the
    dealer.  ULTIMA21 keeps track of the hands played and who won each hand.
    It also shows your longest winning (and losing) streaks.  In addition,
    you can set up your own options -- resplit aces, double-down on any
    number of cards, make the dealer stand on 17, turn the sound on during
    play, and other things to keep it interesting.
    
    Hit me!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0791.TXT

{% raw %}
```
Disk No:  791                                                           
Disk Title: Poker & Ultima21                                            
PC-SIG Version: S1.8                                                    
                                                                        
Program Title: Poker                                                    
Author Version: 5.64                                                    
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
Play draw poker head-to-head with the computer.  POKER has a            
sophisticated style of playing and betting, and is intended to challenge
the serious poker player.                                               
                                                                        
It's honest.  The computer does not know what is in your hand           
unless there is a showdown.                                             
                                                                        
It's smart.  The game has different patterns of betting and can observe 
your style of betting and modify its own behavior accordingly.          
                                                                        
It's cagey.  POKER can bluff in several ways and sometimes makes        
large bets with bad hands or no bets with good hands.  Every action it  
takes has at least two possible interpretations.  The randomness of the 
shuffling has been tested in simulations involving over half a million  
hands and the results mirror those expected in normal poker playing.    
                                                                        
Ante up and deal 'em.                                                   
Program Title: Ultima21                                                 
Author Version: 2.00                                                    
Author Registration: $20.00                                             
Special Requirements: CGA or EGA.                                       
                                                                        
Play Blackjack as it's played in the casinos with the computer as the   
dealer.  ULTIMA21 keeps track of the hands played and who won each hand.
It also shows your longest winning (and losing) streaks.  In addition,  
you can set up your own options -- resplit aces, double-down on any     
number of cards, make the dealer stand on 17, turn the sound on during  
play, and other things to keep it interesting.                          
                                                                        
Hit me!                                                                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## POKER.DOC

{% raw %}
```
                               DRAW POKER 
                                   by 
                             Robert Gellman
                 (C) Copyright Robert Gellman 1987-1989

     POKER.EXE plays five card draw poker head-to-head.  The program
provides a challenge for the serious poker player and helps weaker
players sharpen their skills.  

     To start the program, just enter POKER at the DOS prompt.  If
the file is on a floppy disk, enter A:POKER if appropriate.  The first
few screens will explain how the program's mechanics work.  Try a few
hands and you will catch on very quickly.  

     If you want to start playing, go ahead.  Nothing in this short DOC
file is crucial.  I recommend that you read it once, but the
documentation is not worth printing.  If you want to load this file into
your word processor to print, set the margins at 10 and 78.

     The program attempts to play winning poker.  It has a sophisticated
style of playing and betting that is intended to win more money than it
loses.  The program doesn't get tired or lazy, and it doesn't call bets
just because it is curious.  Can you play winning poker against a tough,
disciplined opponent?  That is the challenge of this game.

     The program assumes that you know how to play poker and requires
no manual.  There are several introductory screens with explanations of
the program's rules.  Two help screens are available during play at the
touch of a button.  Now you can play even if you can't remember whether a
flush beats a straight (it does!).

                                  NOTES

     First, the program is totally honest.  The computer does not know
what is in your hand unless there is a showdown.  Nor does the computer
know what cards are in the deck waiting to be drawn.   

     Second, there is one minor, otherwise undocumented, feature
whereby the program actually "cheats" in your favor.  After cards are
drawn, the program will "remind" you of how many cards the computer
drew by displaying one period (.) for each card the computer drew.  

     Given the fast pace of the game (once you get the hang of it),
it's easy to miss the message showing the number of cards drawn by
the computer.  After the draw is complete, the periods appear at the
top of the display following "AFTER THE DRAW".  On the showdown
screen, the periods appear after the word "pot".  
 
     Third, the computer has different patterns of betting.  Some of
its betting is random, and it won't always bet the same way with the
same hand.  The program also observes your play and modifies its
behavior in response to your betting methods.  

     The computer is also able to bluff in several ways.  The
computer will sometimes make large bets with bad hands and no bets
with good hands.  Like any good poker player, every move the computer
makes has at least two possible interpretations. 
 
     Fourth, a run of very good or very bad hands is just a
coincidence.  The randomness of the program has been tested in
simulations involving over half a million hands.  The results mirror
those expected in normal poker playing.  If you are losing, just keep
playing, and your luck may improve.  If all else fails, try playing
better poker!

     Fifth, as you play, you will be offered the chance to increase the
stakes.  The maximum bet (or raise) starts at $10, and it can be doubled
twice until it reaches $40.  This is high enough for a game where each
player starts with $200.  

     Sixth, head-to-head poker results in a high percentage of hands
being folded by one player or the other.  This is quite normal. 
Conservative players will fold when they don't think they can win.  There
will be occasional spectacular showdowns when both players have good
hands.  But the key to winning poker in the long run is discipline.  Play
your cards and learn how to exploit small advantages.

     The program allows you to play dozens of hands in a few minutes. 
You can acquire a lifetime of experience in two hours.  Despite the
limitations of head-to-head poker, you can still acquire a good sense of
draw poker odds.  Remember the challenge:  Can you beat the computer?

     Seventh, the program is freeware.  Please use the program and give
copies to others.  No shareware or registration fee is owed to the
author.  However, both the program and this documentation are copyrighted
by Robert Gellman.  No one is authorized to make changes to either. 
Also, no one is authorized to sell the program.  The program may be
distributed by software clubs or libraries at a standard distribution
charge that recovers distribution costs.  The maximum charge permitted
without specific permission from the author is $6.00.  
 
     Lastly, a word about the program itself.  The first version 
was written in FORTRAN in 1969-70 on an IBM 360 Mod 65.  The current
version was written and compiled in Microsoft's QuickBASIC under DOS 3.1,
but it should run under DOS 2.0 or better.  The program requires less
than 200 K and is compatible with color and monochrome monitors.  A
graphics card is not needed.

     Version 5.60 was a major improvement over previously released
versions.  The card displays and messages were completely rewritten, and
the betting routines were sharpened.  Most of the visual improvements are
the result of PROBAS, a library of BASIC programming routines from
Hammerly Computer Services.  Later versions were more evolutionary.

     The source program, which has not been released, is over 1200 lines. 
A serious programmer/poker player may be able to convince me to provide a
copy of the source code.  However, you will not be able to use the source
code without significant modification unless you have PROBAS.  
                                FEEDBACK
 
     HELP!!!  If you find any errors, please let me know exactly when and
how they arose.  The program has been very extensively tested, but I
cannot guarantee that it is bug-free.  My address is on the second screen
(hit ENTER at the first screen).  

     User feedback is hard to get.  I welcome comments about the program,
its mechanics, or poker strategy in general.  Any suggestions for changes
or improvements will be considered.  I know that thousands of copies of
this program are in circulation, but I have had very little response from
users.  If you like the program, tell me.  If you hate it, tell me what's
wrong.  This is how you support freeware!

     HELP AGAIN!!!  If you develop a betting strategy that enables you
to win consistently, please let me know so I can make changes.  The
program does not play perfect poker, but I would like to eliminate
any gaping holes in the betting algorithm.  

     Finally, my thanks to the Study Group for poker lessons and to
B.C., D.B., and S.A.C. for helping me refine the betting algorithm
and the general look of the program.  

     Good luck to the rest of you.  You may need it. 
 

                                Robert Gellman
                                Washington, DC
                                February 4, 1988



                   HISTORY SUBSEQUENT TO VERSION 5.60

Version 5.61  - Fixed overflow for bets over 32768 (!!??)
(4/28/88)       Revised rules screen; insult frequency reduced
                Minor betting algorithm change (top secret!)

Version 5.62  - Modified the frequency of chances to raise the stakes
(7/31/88)       Fiddled with frequency and content of insults
                Eliminated extra keystroke in sandbagging situations
                Recompiled in QB 4.0b - size reduced by 10 percent

Version 5.63  - Revised the rules screen and added a new screen showing
(1/10/89)       the order of poker hands.  Made both screens available at
                a keystroke.  Revised the main screen display.  Changed
                the sound screen and the opening sounds.  Small changes  
                to the betting algorithm made the computer a slightly
                more aggressive bettor.  Cutesy card cutting display 
                added.  Recompiled in QB 4.5.     
                
Version 5.64  - Fixed an ancient mistake.  The program misevaluated
(1/22/89)       competing straights when one hand was a baby straight 
                (A-2-3-4-5).  The program was dazzled by the ace and     
                determined mistakenly that the baby straight was higher  
                than any other straight that didn't have an ace.  Just   
                goes to show that there is always an error lurking       
                somewhere.  My thanks to R. Brosseau and B. Binford for
                finding this problem.  In the coincidence of the year,
                both wrote me on the same day!
                
```
{% endraw %}

## ULTIMA21.DOC

{% raw %}
```
                         *** ULTIMA 21 DELUXE ***

      Thank you for your interest in ULTIMA 21 DELUXE. I wish to express my
      sincere thanks to the honest shareware users for their registrations.
      Without them, products like ULTIMA DELUXE 21 could not be offered under
      the shareware concept. 

      ULTIMA 21 DELUXE was written in "PROMAL" which is a licensed compiler
      from SYSTEMS MANAGEMENT ASSOCIATES, INC. RALEIGH, NC. Anyone looking
      for a "C" like language with a much faster learning time and with
      super speed, I highly recommend this little known system from SMA.

      This blackjack simulation game requires a 100% IBM compatible PC, 
      XT, AT, (286) or 386 with at least 256K memory, a color or 
      monochrome monitor and DOS 2.1+. A joystick is not used. 

      To start the program, type "ULTIMA21" and press return while the
      diskette is in drive A:. To load to a hard disk, simply copy 
      the files ULTIMA21.EXE and ULTIMA21.DOC to it and run it as normal 
      from the hard disk.

      This is a shareware program and you may distribute it to your friends.
      Under no circumstances may you sell, disassemble, reverse compile, 
      or modify the program in any way from its original form without the
      expressed written concent of the Author. This documentation file must
      accompany all copies of the program ULTIMA21.EXE. 

      If you like the program and find it of use, please send a $20.00
      registration fee to me, the Author, at my address below:

                            JAY J. FALCONER
                          901 W. Hononegh Drive
                           Phoenix, AZ  85027
                            (602) 279-4656

      Registration entitles you to 1 free update of the program when
      a new version is available and will place you on the mailing list
      for notification of other products and additional ULTIMA 21 releases.  

      ULTIMA 21 DELUXE makes extensive use of direct memory access for super
      fast screen display and will not work properly with most memory resident
      programs like SIDEKICK from BORLAND. Be sure no memory resident programs
      are present when running any of my products.

      If you are using a hercules compatible monochrome graphics card, then
      this program will think your monitor is a color monitor. When this 
      happens, full color will be sent to your display and your monitor 
      will not be able to show everything. If this happens, you need 
      to use the DOS "MODE" command to tell the graphics card to work in 
      black and white mode. The command is "MODE BW80" and please read 
      your DOS manual for more information.

------------------------------------------------------------------------------

      NEW VERSION: 1.2   JUNE 1988
        This version has some minor changes to the program documentation
        and has been enhanced to run on monochrome system as well as on 
        color. The program has beed redisigned to use less memory than 
        before. However, you still need 256K of memory on board. The speed
        of the screens and operations have been enhanced and the game
        playing option keys have been made "active" from more areas of
        the game.

        NEW COMMAND:

            Keyboard Usage: When you see the symbol ALT_S, this means
                pressing the alternate key down and hold it while pressing
                the S key. This is true for all ALT keyboard usage in this
                game.

                <ALT_S> command allows you to change the speed of the 
        game. Speed commands range from slow to fast and have different
        settings for PC, XT, AT, and 386 CPU's. Please see the screen
        shown when <ALT_S> is pressed for more information about the new
        command. When a valid speed command is entered on the program
        command line at startup, the program will load and run at that speed.
        Example: ULTIMA21 PC will load the game and run at speed designed
        for the slower PC processor speed.

------------------------------------------------------------------------------

      NEW VERSION: 2.0   JULY 1988 
        Game title has been changed to "ULTIMA 21 DELUXE" with the addition
        of many new and exciting features.             

        NEW FEATURES:
          <F8> key has two new options. You may now select whether or not
                the Dealer's "hole card" is dealt face up or down. Also,
                you may select whether the Dealer wins on "push" hands. 
                Initially, the system will deal the hole card face down
                and push hands are a "draw" (no winner/loser).

          Automatic deck integrity check and display. When the game
                begins or when the number of decks in play changes, the
                dealer will check the deck(s) to be sure they are complete.
                As they are checked, the cards will be shown to you on the
                screen. This insures an honest playing deck.

          <F2> key now displays a Rules and Features Information Menu for
                easy look up of playing options and casinos rules. The menu
                will pop up and allow you to select the topic for more 
                information by moving the highlight bar or by selecting the
                option's menu choice letter/number.

          <ALT_B> command will allow you to change the table stakes. You
                may change/set the minimum bet and maximum bet per hand.
                Initially, the system sets the minimum and maximum at $1.00
                and $9,999.99 respectively. You may set either or both of
                the bet limits before any hand and can be any value between
                1 and $9,999.99.

          <ALT_C> command will show you the current card count statistics
                for cards dealt and remaining and the count reflects the
                number of decks in play. Great for all you card counters.
                This shows the number of cards and suits dealt as well as
                the number of cards dealt and remaining. Also, the popular
                hi/low count is shown as well as other count range statistics.
        
          <ALT_D> command will allow you to choose from 1 to 6 decks in 
                play. This may be changed at the start of any new hand.
                Initially, the game is played with one deck of 52 cards.

          <ALT_M> command will show you the current memory statistics for
                your PC's conventional memory. Helpful in checking how much
                memory is used by ULTIMA 21 DELUXE and available for other
                uses. Adding the DOS usage and ULTIMA 21 DELUXE usage will
                give you the minimum free memory needed to run this game.

          <ALT_P> command will let you "peek" at the next few cards to be
                dealt from the deck. Great for all you ESP players.

          <ALT_R> command will let you request the dealer to RESHUFFLE 
                the deck. Could be used to reshuffle the deck after each
                hand if so desired. This command is only available at the
                start of each hand. Normally, the dealer shuffles the deck
                at about 2/3's of the way through.

          <ALT_X> command will allow you to turn on/off the "fixed dealer's
                cards" option. When on, you select the 2 cards the dealer
                is initially dealt each hand. This is perfect for creating
                or testing playing strategies. While on, the dealer always
                starts the hand with the same two cards. This will slightly
                distort the card count statistics. 

          <ALT_W> command will write or save the game in progress to disk
                to allow you to resume its play at a later time. The saved
                game is labeled ULTIMA21.SAV as is written to the default
                disk and directory. Whenever ULTIMA 21 DELUXE is loaded, the
                system will check for the SAV file. If there, you will be 
                prompted to see if you wish to resume that game. Also,
                if the SAV game exists, you are asked whether you wish it
                deleted. Note, each game save will write over any previous
                SAV file that may exist. Therefore, if you wish multiple
                save files, rename them to something else so the system
                will not "see" them as the game save file.

          <CNTL_C> command has been disabled with the addition of the new 
                command ALT_X to eliminate accidental use. The Control_C
                command normally aborts program execution and returns
                to DOS control. The Control_C function has been disabled
                during the execution of this program.

          Startup command option to turn off sound effects at program
                startup. Just add the single word "NOSOUND" after the 
                program name. Example:  ULTIMA21 nosound. 
                This was requested by many of my registered users who
                wanted to play the game at work but did not want the
                sound to give them away!

          If you desire to use the speed startup command and the no sound
                startup command at the same time, enter both after the 
                program name with a comma in between. Example:

                      ULTIMA21 PC,NOSOUND  -or-  ULTIMA21 NOSOUND,PC
                        
          The help function and the basic strategy it follows have been
          updated to follow more "accepted" playing strategy rules.      



------------------------------------------------------------------------------

Author's Note:

          ULTIMA 21 and ULTIMA 21 DELUXE have received the highest possible
          ratings from all reviews. In addition, it is to be featured in the
          November 1988 issue of PC Compute magazine. I know you will enjoy
          this fun blackjack game and I would enjoy hearing your thoughts 
          about ULTIMA 21 DELUXE. Please feel free to drop me a line.

------------------------------------------------------------------------------

PRODUCT LIST AS OF 7/15/89:

  NAME                VERSION AND DATE     DESCRIPTION            PRICE
  =========================================================================
  ULTIMA 21 DELUXE    2.0  JULY 1988    VEGAS BLACKJACK GAME      $20.00
                                        COLOR/MONO 256k
                                        VERY FLEXIBLE AND EASY TO USE.
                                        DOS 2.1+        

  VIDEO POKER PLUS    3.0  JULY 1988    VEGAS VIDEO POKER         $20.00
                                        COLOR/MONO 256k
                                        DOS 2.1+

  MENU MANAGER        2.0  MAY 1988     HARD/FLOPPY DISK MENU     $20.00
                                        MANAGEMENT SYSTEM.
                                        VERY FLEXIBLE AND EASY TO USE.
                                        COLOR/MONO 256k (384k recommended)
                                        DOS 2.1+                
                                        
  POWER SHELL         1.0  AUG 1989     DOS SHELL                 $20.00      
                                        FOR EASY MANIPULATION OF FILES,
                                        DIRECTORIES, AND DOS COMMANDS WITH
                                        SIMPLE POINT-AND-SHOOT KEYSTOKES. 
                                        DIRECTORY TREE FUNCTION SUPPORTED.
                                        COLOR/MONO 384K, DOS 2.1+
                                        HARD DISK RECOMMENDED                                        


      For more information on any or all products available, please
      contact the author at the address specified above. All prodcuts
      are distributed on standard DOS 360K 5 1/4 inch diskettes. 
      3 1/2 inch diskettes are also available on request.


REMEMBER:

      This documentation file MUST accompany all copies of the game
      program ULTIMA21.EXE.
         
      Registration of shareware products from happy shareware users is
      the main incentive for shareware authors like myself to continue
      to create and support shareware products. Registration is on the
      honor system and I personally thank all honest shareware users for
      their registrations.  

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0791

     Volume in drive A has no label
     Directory of A:\

    ULTIMA21 EXE    134484   7-24-88  11:50a
    ULTIMA21 DOC     12820   1-04-80  12:22a
    GO       BAT        38   7-01-87   9:21a
    GO       TXT       848   5-14-90  10:56p
    POKER    DOC      8879   1-22-89   3:11p
    POKER    EXE     77540   1-22-89   2:51p
    FILE0791 TXT      3337   5-18-90   3:37p
            7 file(s)     237946 bytes
                           80896 bytes free
