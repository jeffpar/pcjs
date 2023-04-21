---
layout: page
title: "PC-SIG Diskette Library (Disk #1283)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1283/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1283"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BLACKJACK!"

    BLACKJACK! is a tour de force in beating the casino dealer, and might
    help you line your pockets with green.  Long overdue, it teaches you a
    basic blackjack strategy, adds an effective card counting system to it,
    and drills you on both the strategy and your counting ability.  You play
    against world famous casinos or customize the rules the dealer follows.
    It's fun, quickly played, and could fatten your wallet on your next trip
    to Nevada, New Jersey, or Monte Carlo.
    
    BLACKJACK! is a joy because you can alter the number of decks in the
    shoe and practice your count in the most difficult of circumstances.
    The rules on doubling down automatically change as you switch from
    single to multiple decks.  You can play head on or add up to three
    players to your table.  You watch your bank rise and sink with your luck
    and you can get instant advice on how to alter your betting strategy.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BJ-DOCS.TXT

{% raw %}
```

















                     +-----------------------------------------+
                     |                                         |
                     |               BlackJack!                |
                     |                                         |
                     |     Your Key To Winning Casino Play     |
                     |                                         |
                     +-----------------------------------------+























     Version 2.10D
     Copyright 1988, 1989, 1990
     Donald L. Granger
     dba Glencoe Computing
     All rights reserved








                       T A B L E   O F   C O N T E N T S


                   BlackJack! License Provisions........3

                   Acknowledgments......................4

                   Introduction.........................4

                   General Information..................6
                       System Requirements..............6
                       User Support.....................6
                       Description......................6
                       Backing Up BlackJack!............6
                       Installation.....................7
                       Running BlackJack!...............7

                   Blackjack Basics.....................8
                       Automated Play..................10

                   The BlackJack! Main Menu............11

                   At The Casino.......................12
                       Casino Table Set-Up.............12
                       Placing Bets....................13
                       Playing The Hand................13
                       Game Statistics.................15

                   The User Definable Casino...........15

                   Setup BlackJack!....................16
                       Card Counting...................16
                       Strategy Tables.................17
                       Auto Players....................18

                   Basic Strategy Practice.............20

                   Card Counting.......................21
                       Why Count?......................21
                       Counting Basics.................21
                       The 'True Count'................22

                   Card Counting Practice..............22

                   Betting & Money Management..........24

                   Tournament Play.....................25

                   The Casinos.........................26

                   Problems............................27

                   Strategy Tables.....................28

                   BlackJack! Registration Form........35




                                                               BlackJack! 3

                       BlackJack! License Provisions

               BlackJack! IS NOT PUBLIC DOMAIN SOFTWARE
               ----------------------------------------

         BlackJack! is the copyrighted property of Donald L.
         Granger, Glencoe Computing.  You are granted a limited
         license to use BlackJack! for evaluation purposes, and
         to copy and distribute it, provided the following
         conditions are met:

         1. No fee may be charged for such copying and
         distribution other than a reasonable distribution fee.

         2. BlackJack! may ONLY be distributed in its original,
         unmodified state complete with data files and
         documentation.

         3. BlackJack! may be distributed as part of a package
         or group of programs provided it is properly labeled
         and marketed so as to retain its individual identity.

         4. You may not make any changes or modifications to
         this software.

                      GLENCOE COMPUTING
                      DONALD L. GRANGER
                      1100 HIGHWAY C
                      GLENCOE, MISSOURI
                               63038-1404

                      CompuServe EMAIL 72416,1362

                             NOTICE
                             ------
        If you paid a shareware vendor for this program, you
        paid for their service of copying and distributing
        the program, and not for the program itself.  None
        of these proceeds ever get to the originator of this
        product.  You may evaluate this product, but if you
        make use of it, you should register your copy.



        +----------------------------------------------------+
        |       The benifits of registration include:        |
        |                                                    |
        | - The latest version of BlackJack!                 |
        | - User defined Basic & True Count strategy tables. |
        | - The ability to save and restart a casino session.|
        | - Full product support.                            |
        | - Printer formatted documentation.                 |
        | - An overall good feeling!                         |
        +----------------------------------------------------+




                                                               BlackJack! 4

     The ShareWare Concept
          The ShareWare concept is an attempt to provide quality soft-
          ware at low cost.  The cost of offering a new product by
          conventional channels is staggering, and hence dissuades
          many independent authors and small companies from developing
          and promoting their ideas.  ShareWare is an attempt to de-
          velop a marketing channel where products can be introduced
          at low cost.

          If the ShareWare concept works, then everyone benefits.  The
          user will benefit by receiving quality products at low cost,
          and by being able to "test drive" software before purchasing
          it.  The author benefits by being able to enter the commer-
          cial software arena without first needing large sources of
          venture capital. But it can only work with your support.
          We're not just talking about BlackJack! here, but about all
          user supported software.  If you find that you are still us-
          ing a program after a couple of weeks, then pretty obviously
          it is worth something to you, and you should register.

                              Acknowledgments
          My special thanks to the following:

          Bally's Park Place Hotel & Casino, Atlantic City, NJ
          The Peppermill Hotel & Casino, Reno, NV
          Caesar's Palace Hotel & Casino, Las Vegas, NV

          The many users who have offered suggestions for new
          features and enhancements.

          Leslie Granger, a very special and very patient person.

                               Introduction
          The most popular casino game today, both for players and
          casino owners, is unquestionably Blackjack.  For the player
          the attraction is the simplicity of the rules (just about
          everyone knows how to play "21") and the friendly atmosphere
          of the table.  For the owners the popularity is due to the
          fact that the Blackjack tables have become the most
          profitable real estate in the casino.  It is the purpose of
          BlackJack! to do something about the latter!

          First, let's make sure that the object of the game is clear.
          You are not out to see who can get closest to 21 without
          going over... you are out to BEAT THE DEALER!  This concept
          is overlooked by many novice players, and it leads to fatter
          wallets for the casino bosses.  Although getting close to 21
          is often the best strategy, it's just as important to know
          when to sit back and let the dealer beat himself.




                                                               BlackJack! 5

          With Blackjack you always know exactly how the dealer is
          going to play his hand.  This is the key feature that has
          allowed the development of Basic Strategy Tables, the most
          important tool at your disposal when at the tables.  The
          importance of learning the Basic Strategy Tables cannot be
          over stressed.  You cannot play blackjack by the seat of
          your pants and expect to win.  These tables are your key to
          winning!  By utilizing these strategies you can lower the
          house percentage (sometimes called vigorish) from around 6%
          to close to 0%!  Often in a session the money is made on the
          secondary bets (splitting and doubling down) while the
          regular play ends up in a push.  With a firm knowledge of
          the basic strategy you will know when to make these bets.
          The basic strategy tables are found at the end of this
          manual.  I recommend printing these tables for reference
          when using BlackJack!.

          In the early seventies card counting became quite a
          publicized subject, with many feature stories appearing on
          television and in magazines.  System sellers were quick to
          exploit this new awareness and a plethora of "sure win"
          systems were touted and sold.  Curiously during this period
          the casino profits began to rise at a disproportional rate
          to the increase in table activity.  Hmmmm, how could this
          be?  The answer is simple, too many casual players armed
          with too small bankrolls were attempting to apply extremely
          complex systems without the necessary long hours of
          preparation.  The only sure winners were the system sellers
          themselves and, of course, the casinos!

          Card counting, when properly utilized, can actually give the
          player up to a 1.5% edge over the house.  The biggest
          problem with most counting systems is that they are quite
          complex and far too difficult for the casual player to
          master.  Casinos also frown heavily on card counters and
          with certainty will ask a player suspected of counting to
          leave the tables (and maybe the casino).  This adds to the
          difficulty since the counter must go unnoticed.

          Of the numerous counting systems being touted and sold the
          simple "Plus / Minus" (+-) type is one of the best choices
          for the average player.  BlackJack! will concentrate
          primarily on the +- system of counting in this discussion
          (although program provisions exist for implementing a user
          defined counting system).  Counting systems are discussed
          under the Card Counting Practice heading of this manual.  In
          spite of the apparent simplicity, you should not even
          consider employing a counting system until you know the
          basic strategy tables inside out, being able to make the
          correct decision 100% of the time.

          I hope that you find BlackJack! a useful and fun to use tool
          in gaining the skill and confidence to be a winner.  The
          next time you return from the tables, I hope it takes a
          truck to carry home your winnings.
                                                     Donald L. Granger



                                                               BlackJack! 6

                            General Information

          System Requirements
            Due to BlackJack!'s very high resolution graphics, an
          EGA, VGA or Hercules compatible graphics adapter or
          equivalent is required.  BlackJack! will NOT run with the
          CGA or MDA display adapters.  A minimum of 256K display
          memory is required on EGA type adapters.

          BlackJack! requires 256K of available system memory.

          BlackJack! will run on any floppy based system as well as
          hard disk systems.

          User Support
          User support is free to registered users and is available by
          telephone evenings at (314) 458-2863, via Compuserve Mail
          (user ID#72416,1362), or by mail.

          Description
          BlackJack! is a fun to use aid to learning Blackjack.  It is
          designed to be a totally accurate simulation of casino play.
          BlackJack! is capable, with your effort, to take you to any
          level of play, it IS NOT a sure-win scheme or quickie system
          for beating the casinos.  To become a proficient player you
          will have to spend many hours practicing basic strategy and
          if you desire, card counting.  If anyone tells you anything
          different, don't believe it.  These skills simply cannot be
          learned over night.  As with any skill, you must "use it or
          lose it".  Once you have reached your desired level of
          expertise you must periodically spend a few hours with
          BlackJack! to stay sharp.  If you currently are using a
          playing system, BlackJack! can easily be adapted to support
          it.  You can enter your own basic strategy tables, true
          count tables(registered version), and counting system.

          Backing Up BlackJack!
          Make backup copies of your BlackJack! files.  Do this by
          placing your original BlackJack! diskette in drive A: and a
          blank formatted diskette in drive B: (for single floppy
          systems refer to the DOS manual for the correct procedure to
          make backups).  Enter the DOS command

            COPY  A:*.*  B: [Enter]   or  DISKCOPY  A:  B: [Enter]

          Always use the backup to run BlackJack!




                                                               BlackJack! 7

          Installation
          BlackJack! does not require special installation procedures
          prior to use.  If you are using a floppy disk system all
          files must be on the same diskette and the program must be
          started from the default drive.

          If you have a hard disk you can copy the program and data
          files onto the disk and run the program without the use of
          floppies.  The following is an example for setting up the
          program on a hard disk (assume drive C:):

               C>CD \         (switch to root directory)
               C>MD BJ        (create directory named BJ)
               C>CD \BJ        (switch to BJ directory)
               C>Copy A:*.* C:  (copy all files)

          It is important that all files be in the same directory and
          that that directory be selected as the default.  For more
          information on hard disks and directories please see your
          DOS reference manual.

          BlackJack! uses the files CARDS16.IMG and SUITS16X.IMG with
          color systems and CARDSHGC.IMG and SUITSHGC.IMG with
          Hercules systems.  To save disk space you can delete the
          .IMG files not needed.

          Running BlackJack!
          From the DOS prompt simply type BJ and press [Enter].
          BlackJack! has two start up options.
            /B - Prevents "B U S T" message from covering card images.
            /P - Prevents changes to video color palettes.
          The /P option is useful to laptop and monochrome VGA users.

          Example: To invoke both of the above options type
            BJ /B /P [Enter]

          Prompt Lines
          Throughout this documentation, and while using BlackJack!
          Press and Enter have the following meanings:
            PRESS- just press the key corresponding to your response.
            ENTER- press the key(s) corresponding to your response
                   and then press the [Enter] key.

          When BlackJack! is waiting for an input you will be prompted
          (usually across the bottom of the screen) for your response.
          The available choices are listed with their key letter
          enclosed in square braces [ ].  You make your selection by
          pressing the corresponding key.  Selections that require
          pressing a function key  have the key represented as the
          letter F plus the key number.
          Example prompt lines:

            [H]it    [S]tand  spli[T]  [F1] Help   [F2] Statistics

          To select split you would press [T]. To get help you would
          press function key [F1]




                                                               BlackJack! 8

                             Blackjack Basics
          In Blackjack players wager against the dealer's hand.  The
          object for the player is to have a hand value that exceeds
          the value of the dealer's cards without going over 21.  The
          object of the game for the dealer is essentially the same.
          You win by either having the hand value closest to 21 or by
          having the dealer exceed 21 (bust).  Cards count face value
          with the King, Queen, and Jack valued as 10.  The Ace can
          count as 1 or 11.

          Each player is dealt 2 cards, one at a time starting with
          the player to the dealer's left.  In most casinos each
          player is dealt face up and the player is prohibited from
          touching the cards.  A few still deal face down allowing the
          player to pick up the cards.  The dealer is dealt one card
          up and one face down.

          Each player, from dealer left to right, is given the chance
          to stand (draw no more cards), hit (draw additional cards in
          hopes of getting closer to 21), or take one of the other
          options described later.  You may hit until you have reached
          21 or gone over.  If you bust you lose regardless of the
          outcome of the dealer's hand.

          The dealer must play his hand according to strict rules.  He
          must always hit on a point total of 16 or less and must
          stand on a score of 17.  Some casinos allow the dealer to
          hit a "soft 17" (a score of 17 that includes an Ace valued
          at 11, for example Ace - 6).  This is not a common practice
          and is found mainly in the Tahoe - Reno area of Nevada.

          If the player is dealt blackjack (a 2 card score of 21) and
          the dealer does not also have blackjack, you are an
          automatic winner and are paid at odds of 3:2.  If both
          dealer and player have blackjack, it is a push (tie) and no
          chips change hands.  If the dealer has blackjack and the
          player has a total of 21 but with more than 2 cards, the
          dealer wins the hand.  This last situation can occur when,
          for security reasons, the casino only allows the dealer to
          check his hand for blackjack when his up card is an Ace.  In
          these cases when the dealer does have blackjack only the
          player's original bets are lost. Double down and split bets
          are not taken.




                                                               BlackJack! 9

        Splitting Pairs:
          If your first two cards have the same value, you can split
          them into separate hands.  Note that any two cards with a 10
          value may be split.  If you elect to split a pair you must
          place an additional bet equal to your original bet on the
          second hand.  Play is completed on the first hand before any
          cards are dealt to the second hand.  If a pair of Aces are
          split most casinos do not allow additional cards to be
          drawn.  Note that 2 card totals of 21 on split hands ARE NOT
          treated as a blackjack and pay only even money.  Some
          casinos allow for resplitting if the original split results
          in another pair.  BlackJack! allows a maximum of one
          resplit.

        Doubling Down:
          After you are dealt your first 2 cards you may elect to
          double down by making an additional wager up to the amount
          of your original wager and drawing only one additional card.
          Note that BlackJack! only allows making the maximum wager on
          double downs.  Most all houses allow doubling down on split
          hands.  Rules vary among casinos on what point totals you
          may double down, but the most common is any two cards.

        Insurance:
          If the dealer's face card is an Ace, you will be offered the
          opportunity to take insurance.  To do this you make an
          additional wager of 1/2 your original bet.  If the dealer
          has blackjack your insurance bet is paid at 2:1, but your
          original bet is lost, effectively amounting to a push
          (unless of course you have blackjack).  If the dealer has
          any score other than blackjack the insurance bet is
          collected and play continues.

        Surrender:
          Some casinos will allow the player to drop out of the hand
          by giving up (surrendering) 1/2 their original bet.  This
          can be an advantageous move when you hold what amounts to a
          hopeless hand.  For example, the dealer is showing an Ace
          and your hand count is 16.  You must indicate your desire to
          surrender prior to drawing any cards.  Very few casinos
          still offer this option, but at the ones that do it is an
          important part of the basic strategy.

        "Cute" Rules:
          Some casinos may offer special payoffs for situations such
          as having 6 cards under 21 or 3 sevens.  These are rare and
          are not addressed in BlackJack!.




                                                               BlackJack! 10

                              Automated Play
          Any or all of the players can be made AUTO players making
          BlackJack! capable of fully automated play.  Simply specify
          the number of AUTO players desired from the Casino Table
          Setup screen.  This feature can make for a more accurate
          simulation and is particularly useful when practicing tour-
          nament style play.  If in normal casino mode (not tourn-
          ament) the AUTO players will use the currently selected
          playing style.  Tournament AUTO players play a style unique
          to that form of Blackjack.

        Full Auto Play:
          When you set the number of AUTO players equal to the total
          players everything will be automated. Play will proceed un-
          attended for the number of hands specified.  Full automated
          play can be interrupted by pressing any key between hands.

        Accelerated Full Auto Play:
          Accelerated full automatic play is implemented by setting
          the automatic playing speed to INSTANT and designating all
          players as AUTO players.  Set the number of hands to play at
          the Casino Table Setup.  There will be no card display and
          hands will be played at a rate of approximately 2000 per
          minute.**  To interrupt accelerated automatic play Press and
          HOLD any key, release the key as soon as play has halted.

          For fully automated tournament play, set the hands remaining
          in round to 0 during Casino Table Setup.

          See the SETUP BlackJack! section for more information on
          configuring automatic players.
          See TOURNAMENT PLAY for more information on tournaments.




                                                               BlackJack! 11

                          The BlackJack! Main Menu

                    +---------------------------------+
                    |  CASINOS                        |
                    |    1 - User Casino              |
                    |    2 - Bally's Park Place       |
                    |    3 - Caesar's Palace          |
                    |    4 - Peppermill Casino        |
                    |                                 |
                    |  Other Choices                  |
                    |    5 - View Casino Definitions  |
                    |    6 - Edit User Casino         |
                    |    7 - Card Counting Drill      |
                    |    8 - Basic Strategy Drill     |
                    |    9 - Setup BlackJack!         |
                    |    0 - Registration Form        |
                    +---------------------------------+

      - Load A Casino: [1] through [4]
          The top 4 menu choices represent the different casinos that
          BlackJack! is programmed to simulate.  To select a casino
          for play press the corresponding number.

      - View Casino Definitions: [V] or [5]
          A screen showing the description and house rules of the
          available casinos will appear.  To scroll the different
          descriptions press the arrow keys.  To play at the displayed
          casino press [Enter], to return to the main menu press
          [Esc].

      - Edit User Casino: [E] or [6]
          Edit the configuration of the user defined casino.

      - Card Counting Practice: [C] or [7]
          Sharpen your card counting skills.

      - Basic Strategy Practice: [B] or [8]
          Practice drills on Basic Strategy.

      - Setup BlackJack!: [S] or [9]
          Setup the Count System, Strategy Tables, Auto Player, and
          BlackJack! Colors.

      - Program Exit: [Q] or [Esc]
          To exit BlackJack! and return to DOS.

      - Quick Exit: [Ctrl][Q]
          Pressing [Ctrl][Q] at any time will quickly exit BlackJack!
          to DOS.  This can be handy should someone be practicing when
          one should be working.



                                                               BlackJack! 12

                               At The Casino
          BlackJack! allows for multiple players.  Although most
          likely you will be playing alone, it is possible to play
          more than one hand giving you the opportunity to try out
          different betting strategies at the same sitting.  Multiple
          players also offers a more realistic setting for practicing
          your card counting skills.

                            Casino Table Set-Up
          After selecting a casino you will need to provide the fol-
          lowing information for the table.  An input form will be
          displayed and you will be prompted for the following data.
          Note that items shown in () are only used as needed.

          [T]ournament / [N]ormal:
               Select style of play.
               Default:  Normal.
          (Number Of Players:)
               Enter the total number of players at the table.
               Default:  1.
          Number Of Auto Players:
               Enter the number of automatic players.
               Default:  1 less that total number of players.
          (Hands remaining in round):
               Enter number of hands remaining in the tournament when
               play begins.  See Tournament Play for more information.
               Default:  60.
          (Number Of Auto Hands):
               If the number of automatic players is the same as the
               total number of players you will be prompted to enter
               the number of fully automated hands to be played.
          Minimum Bet:
               Enter the minimum bet allowed for each hand.
               Default: $5
          Table Limit:
               Enter the maximum bet allowed for each hand.
               Default:  100 times minimum bet ($300 for tournament).
          Player's Stake:
               Enter the amount of money each player has.
               Default: 1/2 the table limit ($500 for tournament).
          (Status Box:)
               Press [Y]es or [N]o for the Status Box display.
               Default:  YES   (not used with full auto play)
          (Seating Arrangement):
               If the table contains a mix of human and automatic
               players you will prompted for the seat placements.
               Seat #1 is to the dealers left (screen right).
               Default:  Always seats auto players first.
          [A]bandon  [R]edo  [P]lay
               After completing the setup form you have the choice to
               abandon play and return to the main menu, re-enter the
               data, or play.  Default: Play.



                                                               BlackJack! 13

                               Placing Bets
        The Wager Box:
          The Wager Box shows the amount in your bankroll and an input
          field for your wager.  The default value on the opening hand
          is the minimum table bet.  On subsequent hands the default
          is your previous wager or the remaining balance of your
          funds, which ever is lower.  You can enter any amount
          (provided you have the funds) between the table limit and
          the minimum wager.

          You can sit out a hand by placing a bet of $0.  You will not
          be dealt any cards but any AUTO players will continue play.

        Drop Out of Game: [Ctrl][D]
          You can quit while in the Wager Box by pressing [Ctrl][D].
          If there are multiple players only the current player is
          dropped and play continues.  AUTO players cannot drop out.

                             Playing The Hand
          After all players have placed their bets the hands are
          dealt, one card at a time from the dealer's left to right.
          After all players have received their cards the hands are
          played in the same order.  The following are the possible
          actions available to the player:

          [H]it          Draw another card.
          [S]tand        Stand on the cards you have.
          [D]ouble down  Double your bet and draw one card.
          Spli[T]        Split a pair into two separate hands.
                         This requires an additional wager that
                         is equal to the original.
          Sur[R]ender    Drop out of the hand by yielding 1/2
                         your original bet.
          [I]insurance   If the dealer's up card is an Ace, each
                         player will be offered the chance to
                         make an insurance bet.  If the dealer
                         does have blackjack the insurance is
                         paid and the original bets are collected
                         (effectively amounting to a "push").
                         Otherwise the insurance bets are
                         collected and play continues.

          After all players have finished the dealer plays his hand
          and the bets are settled.

        Advice Help: [F1]
          Advice is available by pressing [F1].  When playing a hand
          you are advised of the correct action to take based on the
          Basic Strategy Table for the casino rules under which you
          are playing.  When making a wager you are advised on the
          type of bet to make based on the active card counting
          system.



                                                               BlackJack! 14

        The Status Box: [F2]
          The Status Box is located in the upper left corner of the
          screen.  It shows pertinent information to the game in
          progress.  Included in the Status Box are the casino name,
          the table limits, the size of the shoe in decks, number of
          hands played, number of cards played from the current deck,
          the number of aces played, and the current plus/minus and
          true count card count value.  You can toggle the display of
          the Status Box at any time by pressing the [F2] key.

        Borrowing Funds: [F3]
          Players automatically have a line of credit established for
          them at 1/2 their original stake.  For example, if you begin
          a session with a stake of $500, you will have $250 available
          for borrowing.  Players are not allowed to borrow past this
          amount.  If a player has exhausted both his original stake
          and his line of credit they will be asked to leave the
          table.

          At the beginning of each hand you are given the opportunity
          to borrow money from the house.  To obtain a loan press [F3]
          prior to placing your bet.  A window will open showing the
          money you have available for borrowing and you will be
          prompted to enter the amount you desire.  The default re-
          sponse is the maximum loan.  If at any time your current
          funds fall below the minimum bet the loan window will open
          automatically.  Advances are not allowed during play so plan
          ahead to have enough funds for splits and double downs.

        Display Hand Values: [F4]
          BlackJack! normally displays the value of each hand.  If you
          wish to add up your own hands this feature can be disabled
          by pressing [F4].

        Discard Pile Graph: [F5]
          A bar graph is displayed in the upper right corner of the
          casino screen.  It shows the percentage of the deck or shoe
          that has been played.  This feature is offered as an aid in
          estimating the number of cards remaining to be played.  For
          shoe games (more than two decks) yellow lines are shown
          indicating each deck.  A red line is shown to indicate the
          re-shuffle marker.
          The graph can be toggled on and off by pressing [F5] during
          casino play.  The default condition is ON.

        Strategy Deviation Error (Play Watch): [F6]
          A short beep will sound whenever a player deviates from
          basic strategy,  including true count variations when Use
          True Count is active.  The correct action is briefly
          displayed above the hand.  The warning can be toggled on and
          off by pressing [F6] during casino play.  A tone will sound
          to confirm activation of this feature.
          The default condition is OFF



                                                               BlackJack! 15

        Reshuffle: [Ctrl][R]
          You can force a reshuffle between hands by pressing
          [Ctrl][R].

        Fast Shuffle: [Ctrl][F]
          You can eliminate the sound (and delay) of deck shuffling by
          pressing [Ctrl][F] during casino play.  Each press toggles
          Fast Shuffle on or off.  A short beep confirms the keypress.

          The default condition is normal (with sound) shuffling.

                              Game Statistics
          At the end of each session the following statistical infor-
          mation is provided on 3 different screens: finances, peaks &
          valleys of the session, streaks,  number of hands played,
          wins, losses, pushes, surrenders, blackjacks, splits,
          doubles, and a report on your basic strategy play.

          Streaks are counted using the following system:
                Win   Zero the loss count & increment win count.
               Push   No effect.
          Surrender   Decrement win count if > 0, otherwise no effect.
               Loss   Zero the win count & increment the loss count.
              Split   Each hand of the split is treated as a distinct
                      hand and is scored from right to left.
             Double   Treated as a regular hand.

          You can jump to the statistics screens from casino play by
          pressing [Ctrl][V]iew between hands.  The arrow keys will
          scroll among the screens, and [Esc] will return you to the
          casino, or the main menu if the session has ended.

                         The User Definable Casino
          The first casino listed on the Main Menu is the User De-
          finable Casino.  The purpose of which is to allow setting up
          a playing environment similar to any casino you like.

                          Editing The User Casino
          After selecting "Edit User Casino" from the Main Menu you
          will see an editing window.  You will be allowed to define
          the name, location, and house rules for the casino as you
          wish.  Answer each prompt with the indicated type of
          response.  To retain the current value of an item simply
          press [Enter].  Here are a couple of examples:
              Number of decks
              Surrender allowed?
          For "Number of decks" press a number between 1-8.
          For "Surrender allowed?" press either [Y] or [N].



                                                               BlackJack! 16

                             Setup BlackJack!
          This selection pops up the Setup Menu.  The illustration
          below shows the menu layout.  The currently active settings
          of choices 1, 4, 7 and 9 are shown to the right under the
          heading CURRENT.

                     +---------------------------------------+
                     |  CARD COUNTING                CURRENT |
                     |   1 - Active System            [User] |
                     |   2 - Edit User System                |
                     |   3 - View Active System              |
                     |                                       |
                     |  STRATEGY TABLES                      |
                     |   4 - Incorporate True Count    [Yes] |
                     |                                       |
                     |  AUTO PLAYER                          |
                     |   5 - Play Speed                [Med] |
                     |   6 - Style                    [Bold] |
                     |   7 - Wager Progression               |
                     |                                       |
                     |  OTHER                                |
                     |   8 - BlackJack! Colors               |
                     |   * - Configuration Save              |
                     |                                       |
                     +---------------------------------------+

     Card Counting
      - Active Count System: [A] or [1]
          Selects which counting system is active.  Each press toggles
          between USER and DEFAULT and the active selecting is dis-
          played under the CURRENT heading.  The active system will be
          used for all BlackJack! features that involve card counting.

      - View Active System: [V] or [2]
          To review the card values and breakpoints for the active
          count system press [2] or [V]iew.  A window will display all
          of the current settings.

      - Edit User System: [E] or [3]
          Define your own counting system.  For help press [F1].

        Card Values:
          A window will open and you will be prompted to enter the
          count value for each of the 10 card values in the deck.  The
          current value of each card will be shown blinking.  To
          retain the same value simply press [Enter].  A running total
          is shown indicating the total count value of single deck.



                                                               BlackJack! 17

        Breakpoints:
          After all cards have been assigned a count value you will be
          asked to enter the NORMAL and XLARGE breakpoints for your
          system.  These are the values which indicate a 'favorable'
          deck.  Deck values at or below NORMAL warrant only your
          standard bet.  Values between NORMAL and XLARGE indicate a
          favorable deck and warrant an increased bet.  Values above
          XLARGE indicate an extremely favorable deck and should
          warrant an even larger increase in your wager.  For example,
          if your system indicates a favorable deck when the count is
          25 you would enter 24 for the NORMAL value.

        Activation Point:
          Counting systems generally are not effective in the early
          stages of a deck.  You need to enter the percentage of the
          deck that needs to have been played before your counting
          system becomes active.  For example, if you feel that your
          system is reliable after 2/3 of the cards have been dealt
          you would enter 66.  These breakpoint values are used by
          BlackJack! when giving betting advice during casino play,
          and by the Automatic Players when making betting decisions.
          They have no effect on the Card Counting Practice drill.

        True Count Breakpoints:
          Finally you will be prompted for the true count breakpoints.
          Enter the NORMAL and XLARGE values as described above based
          on true count values.  By its nature, the true count does
          not require an activation point.  If you are not using the
          true count (see Strategy Tables-True Count below) just press
          enter to keep the current values.  They will have no effect.

        Count System Start Point:
          A new value has been added to the User Defined Counting
          System to define the starting count of the system.  This is
          the card count at the beginning of a new deck or shoe.
          Normally this value is 0.  This value is reflected in both
          the running count and the true count.

          The initial values of the user defined count system are an
          alternate to the pluse/minus system.  Once a system has been
          defined it is saved and is available for future sessions.

     Strategy Tables
      - Incorporate True Count: [I] or [4]
          Toggles between [Yes] and [No].  When set to [Yes] the true
          count variations will be used for casino play help and by
          the automated players.



                                                               BlackJack! 18

     Auto Players
      - Play Speed: [P] or [5]
          To adjust the speed of the automatic players press [6] or
          [P]lay Speed.  The CURRENT heading will toggle among the
          four speeds available for automatic players.

          Instant: This is the fastest setting, there are no delays.

          Fast:    Slight delays between cards and betting.

          Medium:  Default setting, play is brisk but easy to follow.

          Slow:    Plenty of time allowed to watch each play.
      - Style: [S] or [6]
          Toggles among the available playing styles of the automatic
          players.  The active style is shown in the CURRENT column.

          Prudent:  The most conservative setting.  The player never
                   increases the wager from the table minimum and does
                   not count cards. Plays strict Basic Strategy.

          Normal:   The normal player bets according to the system
                   outlined under Betting & Money Management.  He does
                   count cards but only makes increases under the most
                   favorable conditions.  Plays strict Basic Strategy.

          Bold:     The bold player is a more aggressive bettor.  He
                   increases wagers more frequently.  He counts cards
                   and will make larger increases whenever faced with
                   a 'rich' deck.  Basic Strategy is used, but when
                   "playing with the Houses' money" (ahead) the bold
                   player often makes the following exceptions with a
                   favorable card count.
                         Split 10s against dealer 2 - 7
                         Double 9  against dealer 2 or 7
                         Double soft 19 against dealer 3 - 6

          Daring:   Not for the faint of heart!  The daring player
                   doesn't know the meaning of minimum bet.  He counts
                   cards and will make substantial increases with
                   favorable counts.  The daring player ALWAYS makes
                   the exceptions to Basic Strategy listed above.

          User:     Selecting User will cause the user betting
                    progression (see below) to be used by the AUTO
                    players, the AUTO player will make play decisions
                    the same as the NORMAL player while using the user
                    defined betting progression for wagers.

          All automatic players will occasionally take insurance when
          the count is favorable.



                                                               BlackJack! 19

        User Defined Betting Progression: [9] or [W]
          You can define the betting progression used by the AUTO
          players and you can also establish a "stop loss point".  A
          window will pop up and you will be able to enter up to 10
          levels of the progression.  If your particular system does
          not use this many levels simply use the same value for the
          final entries.

          The last entry on the screen is the stop loss, or drop out
          point.  For example, if your betting system dictates
          quitting after 6 consecutive losses you would enter 6 as the
          stop loss point.  Once an AUTO player has dropped out, they
          cannot rejoin the game.  The stop loss point is monitored
          using the method described for Streak Stats.  It is possible
          that the stop loss point can be exceeded by one hand.  This
          occurs when a player splits a hand and loses both when
          consecutive losses are one less than the stop loss point.

          The user progression is activated by selecting USER as
          playing style (see above).

          The progression table is saved with CONFIGURATION SAVE.


     Other Choices
      - BlackJack! Colors: [B] or [8]
          You can customize the color palettes used in BlackJack!.
          When saved, these palettes will be used whenever you run
          BlackJack!.  There are two phases to this option, selection
          of the graphics mode palette and selection of the text mode
          palette.  You can assign any of the 64 available EGA/VGA
          colors to any of the 16 palette colors.  For example, you
          can assign a shade of dark green (EGA/VGA #16) to the BLACK
          palette register which is the one used as the background
          color.  This will give the appearance of the green felt used
          in casinos.  A side effect in this example is that spades
          and clubs will also have their spots this same shade of
          green (although it is barely noticeable).  Sample screens
          are shown so that you can immediately see the effects of
          your changes.  The editors offer the option of resetting the
          user values to the BlackJack! defaults, so you can
          experiment without fear.

          Keyboard instructions are provided on screen.

          Your selections will become active upon exiting the palette
          editor and will remain in effect throughout the current play
          session.  To make these choices permanent for future play
          you MUST do a CONFIGURATION SAVE prior to exiting BlackJack!
          to DOS.

          The color editor will not activate on Hercules Mono systems



                                                               BlackJack! 20

      - Configuration Save: [C] or [*]
          The settings for the auto players, count system selections,
          and color palettes are saved to disk.  When BlackJack! is
          started these values are read become active.

                          Basic Strategy Practice
          This is the biggie!  You should know basic strategy inside-
          out before ever considering sitting down in a casino.

          Extensive research and work was done by Dr. Edward Thorp and
          Julian N. Braun in the early 1960s to develop these tables.
          They represent, based on millions of computer simulated
          hands, the optimum method of play.  When followed they yield
          the best decisions for all of the blackjack options.

          As you will note from the tables there are subtle differ-
          ences depending on the number of decks used.  For the casual
          player it recommended that you concentrate on the multi-deck
          table.  The slight difference in performance when using
          multi-deck strategy in a single deck game (about 0.05%) is
          worthwhile considering the confusion that can result from
          using multiple strategies.  The multi-deck strategies are
          also more conservative with fewer splits and double downs.

          On the subject of the insurance bet, there is one simple
          rule... NEVER BUY INSURANCE!  As with any rule there is an
          exception: When counting cards insurance can be a profitable
          wager.  See The 'True Count' below for more information.

          Select the Basic Strategy Drill by either pressing [7] or
          [B] from the Main Menu.  The drill works much the same way
          as actual Blackjack play.  You and the dealer will be dealt
          hands.  Press the key corresponding to the action you be-
          lieve should be taken.  If you make a wrong play you will
          hear a short beep and the correct action will be displayed
          above your hand.
        Drill Definition
          The drill definition box is displayed in the upper right of
          the screen.  You can change the configuration (and therefor
          the strategy needed) by pressing the indicated [F] keys.
          Definition selections become effective with the next hand.

           [F1] - Number of decks...(single or multi)
           [F2] - Double down on...(any 2, 10-11, 9-10-11)
           [F3] - Double down on splits...(yes, no)
           [F4] - Surrender allowed...(yes, no)
           [F5] - Use true count...(yes, no)
           [F6] - Focus on...
                       ALL - all types of hands
                    SPLITS - only pairs are dealt
                      SOFT - all hands are ace combinations
                  UNDER 17 - only hands valued 16 or less are dealt



                                                               BlackJack! 21

          When "Use true count" is set to [yes] a true count value is
          displayed above the players hand.  Your play decision should
          be based on the true count variations strategy table that
          has been selected from the Setup BlackJack! menu.

          Pressing [P] will toggle the Performance Box display which
          shows the number of hands dealt, the number of correct plays
          made, and your accuracy as a percentage.  These totals can
          be reset by pressing [F7].

                               Card Counting
                                Why Count?
          Accurate card counting allows you to have a picture of what
          cards remain in the deck, and therefor an idea of the like-
          lihood of the occurrence of certain hands.  Note that I said
          likelihood, it will NOT allow you to predict actual hands,
          only the probability of hands.  What good is this?  If it is
          known the remaining cards in the shoe are rich in tens and
          Aces we know that more blackjacks and good standing hands
          such as 19 or 20 will be dealt.  Of course this holds true
          for the dealer, but the dealer is not paid 3:2 for black-
          jack, he cannot split pairs, and he must always hit his
          "stiff" hands (12-16) with an increased probability of
          breaking.

                              Counting Basics
          We will use the tried and true Plus/Minus counting system
          first developed by Harvey Dubner in 1963.  This system is
          easy to learn and one of the most effective.

          Each card in the deck is given one of 3 count values; either
          -1, 0, or 1. Count values are assigned as follows:

                         Low Cards     2,3,4,5,6      +1
                         Middle Cards  7,8,9           0
                         High Cards    10,J,Q,K,Ace   -1

          Since the middle cards are valued 0, we only need concern
          ourselves with the low and high ends of the deck.  As each
          card is played you add the count value to the running total
          for that deck.  When the running count total is high it
          means that more low cards have been played than high.  Note
          that for counting to be effective you must be near the end
          of the deck.  In a 6 deck shoe a high count total after only
          30 of 312 cards have been played is not a good indicator
          since there are still too many cards remaining for accurate
          prediction.  You want to deploy your card count betting
          strategy late in the shoe.

          Simply put, the higher the card count, the bolder your bet-
          ting should be.  This is also a time when bending the basic
          strategy rules is allowed.  For example, the card count is
          10 late in the shoe and you are dealt a pair of Jacks with
          the dealer showing a 6.  Basic strategy dictates always
          standing on 20, but since we know there are many 10s and
          Aces remaining it becomes our advantage to split this pair.



                                                               BlackJack! 22


          Another popular system, Hi-Opt I***, is as follows:

                         3,4,5,6         +1
                         Ace,2,7,8,9      0
                         10,J,Q,K        -1

                             The 'True Count'
          As an adjunct to the running count described above many
          count systems employ what is known as a "true count".  The
          true count takes into account and makes allowances for the
          number of cards remaining to be played.  To obtain the true
          count the running count is divided by the number of decks
          remaining to be played.  For example, in a 4 deck game a
          running count of 9 occurs after 1 deck has been played.  The
          true count for this instance is only 3 (running count /
          decks remaining,  9 / 3 = 3).  When using the true count it
          is not necessary to restrict betting and play adjustments to
          late in the deck.

          The primary advantages of using the true count are the
          variations to basic strategy.  With an accurate true count
          the basic strategy can be finely tuned to give the player
          the optimum decision for all play situations based on the
          cards remaining in the deck.  Standard basic strategy is
          based on the assumption that all hands are played from a
          complete deck.

          Insurance becomes a viable bet when keeping a true count.
          When the true count indicates a deck rich in 10s (a non-10s
          to 10s ration less than 2) insurance is a good bet.

          Finally, don't even consider using card counting until you
          can perfectly complete the Card Counting Drill at a rate of
          about 30 seconds per 52 card deck.

                          Card Counting Practice
          Sharpen your card counting ability.  The drill will involve
          all the cards in the shoe being displayed for a short period
          of time.  You should keep a running total of the count.

          To increase the speed of the drill press the [+] key, to
          slow the drill press the [-] key.  A "speed bar" shows the
          relative drill speed.  The speed indicator will turn green
          (color) or black (monochrome) when you have selected a rate
          of approximately 30 seconds per deck or faster.

          Card Counting Practice uses the currently active counting
          system as selected from the Setup BlackJack! menu (see
          ACTIVE SYSTEM for more details).


     ____________________
          ***The Hi-Opt I system is one of the simplest and most
          powerful of the advanced methods.  A full description is
          found in "The World's Greatest Blackjack Book" by Lance
          Humble and Carl Cooper, published by Doubleday (c)1987.



                                                               BlackJack! 23

        Count Drill setup:
          Number of decks.
               Press a number between 1 and 8 to chose the number of
               decks in the shoe.

          Auto or Manual deal.
               If you wish to control the pace of the drill manually
               it can be done.  When manual deal is selected Press any
               key to view the next card in the deck.  Toggle keys
               will activate the toggle and advance the cards.  The
               default response is Auto.

          Single or Double deal.
               If double deal is selected two cards will be dealt side
               by side with each advance of the deck.  This has been
               added to better simulate the way cards are dealt under
               actual playing conditions.  The default response is
               Single.

        Count Drill Options:
          The following options act as toggles when their key is
          pressed.

          [H]elp:       As an aid you can have the count value of
                        the current card displayed.

          [S]tatus Box: Shows the current running and true count and
                        the number of cards that have been displayed.

          [P]ause:      The drill can be paused at any time.  The
                        Status Box will be displayed during the pause.

          [M]ute:       Controls the card dealing sound.

          [Q]uit:       Terminates the drill.

          Note that when using the Plus / Minus system the card count
          at the end of the shoe will always be 0 since the 20 high
          cards cancel out the 20 low cards.  Other counting systems
          may yield different results.  See Counting Basics for more
          information.



                                                               BlackJack! 24

                        Betting & Money Management
          Along with mastering the strategies of Blackjack you also
          need to have a money management plan.  Nothing is worse than
          losing your entire bankroll on the first day of a three day
          junket.  Your money management program should contain the
          following important considerations.

               Only play with money that you can afford to lose.
               Losses should be considered a cost of entertainment.

               Allocate a portion of your total stake for each day of
               your stay.  Do not borrow from tomorrow's funds and do
               not add todays winnings or surpluses to tomorrow's
               stake.

               Establish a minimum and maximum bet size designed to
               stretch your bankroll over the length of each playing
               session.

          There are many different betting strategies and schemes with
          varying levels of complexity.  The best are those based on
          card counting.  In lieu of a sophisticated system the method
          covered here is my personal favorite.  This is by no means
          the only system available.

          It is based on a system know as Anti-Martingale and is de-
          signed to take advantage of "hot" streaks and minimize
          losses when faced with an unfriendly deck.  It can be con-
          sidered quite conservative.
          This first decision that needs to be made is how much risk
          capital you want to put into play for a particular session
          at a table.  Once an amount has been decided upon DO NOT
          make any increases.  This amount will be referred to as your
          "opening stake".  Your opening stake will influence your
          table selection at the casino.  The minimum bet allowed will
          vary from table to table, if you have decided on an opening
          stake of $100 you should seek out a table with a low minimum
          bet such as $2 or $5.  The obvious reason being that you
          will be able to stay in the game longer than at a $25 table.

          For the sake of this discussion we will use the term
          "betting unit" to refer to the minimum amount you will
          wager.  Each session will begin by wagering one betting
          unit.  If that hand wins the bet remains at one unit.  After
          a second consecutive win increase to two betting units.
          This is the only time that the bet will be doubled.  All
          subsequent increases will be in an amount equal to 1/2 the
          amount just won.

          In cases where a fraction of a betting unit would be in-
          volved you should round down to the nearest whole unit.  As
          soon as a bet is lost return to betting one unit.  Here is
          an example session showing six consecutive winning hands and
          the amount of winnings withheld from the previous hand.



                                                               BlackJack! 25

                         Hand      Bet       Withheld
                          1         1           0
                          2         1           1
                          3         2           0
                          4         4           1
                          5         6           2
                          6         9           3
                          7        13           5

          A loss at the seventh hand results in a net gain of 12 bet-
          ting units.  Amounts won as a result of splits or doubles
          should NOT be included in the increased bet.

          If you reach your personal maximum bet, stop there and con-
          tinue play at that level until a loss.

          There are many variations that can be derived from this sys-
          tem.  For example you can increase each bet by a fixed
          amount rather than a percentage of the winnings.

          Finally, you should only keep an amount equal to your origi-
          nal stake on the table.  In the above example, any funds
          above $100 should be taken out of play.  Any time that the
          original stake has been lost play should be discontinued...
          No matter how much of the casino's money you have won.
          Disciplined play is a secret to success.
                              Tournament Play
          BlackJack! is capable of simulating tournament style play.
          Tournaments are becoming a popular form of Blackjack play.
          A large jackpot, generally based on a percentage of the
          entry fees collected, is awarded the winner along with any
          winnings accumulated during play.  Tournaments are played in
          rounds, with one or two players from each table advancing to
          the next round.  There are usually four rounds per
          tournament.  Rounds are played for either a fixed length of
          time, or for a preset number of hands, usually 60.  It is
          important to note that players compete against each other
          and not the casino.  The winner of a round is the player
          with the most money, even if it represents a loss from the
          opening stake.  All players 'buy in' to the tournament for a
          preset amount, wins and losses do not carry over from round
          to round.  This gives all participants an equal chance at
          the start of each round.  Some tournaments offer eliminated
          players the option of re-entry on the first round.

          The 'buy in' for each round is typically $500 - $600 with a
          minimum bet of $5 - $10 and a maximum allowed bet of $300.
          To eliminate seat location advantages betting and play ro-
          tate clockwise.  Example:  Hand #1, player 1 is the first to
          bet, and the first to play.  Hand #2, player 2 becomes the
          first to bet and play, and player #1 becomes the last.



                                                               BlackJack! 26

          Tournament play often deviates from Basic Strategy.  For
          example when a player has a substantial lead it is prudent
          not to split or double down no matter what the hand so as to
          minimize the funds at risk.  On the other hand a player may
          be behind late in the game making it worth the risk to make
          splits or doubles that are contrary to Basic Strategy.

          A detailed description of tournament strategy and play is
          beyond the scope of these instructions.  For more infor-
          mation consult the casino running the tournament and any of
          the excellent books available on the subject.

          To play tournament style press [T]ournament as the first
          item during Casino Table Setup.  BlackJack! supports auto-
          mated opponents.  Rounds consist of 60 hands. You can either
          play a full 60 hand round or enter 'mid stream'.  Specify
          the number of hands remaining in the round during Casino
          Table Setup.  The skipped over hands will be automatically
          played placing you in a realistic game situation.  Example:
          You wish to practice your play for the final 10 hands of the
          round (often the most crucial).  From the Casino Table Setup
          you enter 10 for number of hands remaining.  The computer
          will automatically play 50 hands using a tournament style of
          betting and play.  At this point normal play will begin and
          all current game statistics will be displayed. Prior to
          placing bets all players' funds and relative funds (current
          lead or deficit) are displayed along the bottom of the
          screen as follows...
                $475.00      $610.00      $535.00  <- current funds
               -$135.00       $75.00      -$75.00  <- relative funds
                                The Casinos
          Following are the rules for the casinos used in BlackJack!.

                                       Bally's     Pepper-  Caesar's
     CASINO                    User   Atlantic      mill      Las
                              City        Reno     Vegas

     Number of Decks            6         6           1        2
     Splitting Rules
       Resplitting Allowed     YES       NO          NO       YES
       Double Down on Splits   YES      YES         YES       YES
       Hit Split Aces           NO       NO          NO        NO
     Double Down Rules
       Double Down On...      ANY 2    ANY 2        10/11    ANY 2
       Double Down on more
         Than 2 Cards           NO       NO          NO        NO
     Miscellaneous Rules
       Insurance Offered       YES      YES         YES       YES
       Surrender Allowed       YES       NO          NO        NO
       Dealer Hits Soft 17      NO       NO         YES        NO




                                                               BlackJack! 27

                                 Problems
     Every attempt has been made to eliminate programming errors
     (bugs), and to assure that the information presented is accurate
     and correct.  If you encounter ANY problems or inaccuracies
     please contact Glencoe Computing and provide a thorough descrip-
     tion of the problem:
     My goal is your satisfaction.

     This program is produced by a member of the Association of Share-
     ware Professionals (ASP).  ASP wants to make sure that the share-
     ware principle works for you. If you are unable to resolve a
     shareware related problem with an ASP member by contacting the
     member directly, ASP may be able to help.  The ASP Ombudsman can
     help you resolve a dispute or problem with an ASP member, but
     does not provide technical support for members' products.  Please
     write to the ASP Ombudsman, P.O. Box 5786, Bellevue, WA 98006 or
     send a Compuserve message via easyplex - ASP Ombudsman 70007,3536

     Also available from Glencoe Computing:

                GET LUCKY! = The Adult Entertainment Package =
                                     $24.99
          Trivia & Poker presented with a risque' flavor, plus The
          Poker Machine, a Las Vegas style poker machine simulation.
          Requires 2 diskette drives or a hard disk, CGA or EGA video.

                          +---------+
                    +-----+---+     |              (Tm)
                  --|         |o    +------------------
                    |   +-----+---+ |  Association of
                    |   |         +-+  Shareware
                    +---+    o    |    Professionals
                  ------|    |    |--------------------
                        +---------+    MEMBER







                                     Strategy Tables






                                        TABLE ONE


                 Multi-Deck, Double After Split, Double On Any Two Cards

                    Player's Hand     Strategy For Dealer Up-Card

                    Simple Hands
                      5...8                   Always Hit
                      9               Double on 3 - 6, Otherwise Hit
                     10               Double on 2 - 9, Otherwise Hit
                     11               Double on 2 -10, Otherwise Hit
                     12               Stand  on 4 - 6, Otherwise Hit
                     13...16          Stand  on 2 - 6, Otherwise Hit
                     17...21                  Always Stand

                    Ace Combinations
                     A-2, A-3         Double on 5 - 6, Otherwise Hit
                     A-4, A-5         Double on 4 - 6, Otherwise Hit
                     A-6              Double on 3 - 6, Otherwise Hit
                     A-7              Double on 3 - 6, Hit 9, 10, Ace
                                        Stand 2, 7, 8
                     A-8...A-10               Always Stand

                    Pairs
                     A-A                      Always Split
                     2-2, 3-3         Split  on 2 - 7, Otherwise Hit
                     4-4              Split  on 5 - 6, Otherwise Hit
                     5-5              Double on 2 - 9, Otherwise Hit
                     6-6              Split  on 2 - 6, Otherwise Hit
                     7-7              Split  on 2 - 7, Otherwise Hit
                     8-8                      Always Split
                     9-9              Split  on 2 - 6, 8, 9
                                        Stand on 7, 10, Ace
                    10-10                     Always Stand





























                                        TABLE TWO


                          Single-Deck,  Double On 10 Or 11 Only

                    Player's Hand    Strategy For Dealer Up-Card

                    Simple Hands
                      5...9                 Always Hit
                     10               Double on 2 - 9, Otherwise Hit
                     11                     Always Double
                     12               Stand  on 4 - 6, Otherwise Hit
                     13...16          Stand  on 2 - 6, Otherwise Hit
                     17...21                Always Stand

                    Ace Combinations
                     A-2...A-6              Always Hit
                     A-7              Stand  on 2 - 8, Otherwise Hit
                     A-8...A-10             Always Stand

                    Pairs
                     A-A                    Always Split
                     2-2              Split  on 3 - 7, Otherwise Hit
                     3-3              Split  on 4 - 7, Otherwise Hit
                     4-4                     Always Hit
                     5-5              Double on 2 - 9, Otherwise Hit
                     6-6              Split  on 2 - 6, Otherwise Hit
                     7-7              Split  on 2 - 7, Otherwise Hit
                     8-8                    Always Split
                     9-9              Split  on 2-6,8,9  Stand on 7,10,Ace
                    10-10                   Always Stand


































                                       TABLE THREE


                 Single-Deck, Double After Split, Double On Any Two Cards

                    Player's Hand    Strategy For Dealer Up-Card

                    Simple Hands
                      5...8(6-2)            Always Hit
                      8               Double on 5 - 6, Otherwise Hit
                      9               Double on 2 - 6, Otherwise Hit
                     10               Double on 2 - 9, Otherwise Hit
                     11                    Always Double
                     12               Stand  on 4 - 6, Otherwise Hit
                     13, 14, 15, 16   Stand  on 2 - 6, Otherwise Hit
                     17...21               Always Stand

                    Ace Combinations
                     A-2...A-5        Double on 4 - 6, Otherwise Hit
                     A-6              Double on 2 - 6, Otherwise Hit
                     A-7              Double on 3 - 6, Hit 9,10
                                        Stand 2,7,8, Ace
                     A-8              Double on 6, Otherwise Hit
                     A-9, A-10             Always Stand

                    Pairs
                     A-A                   Always Split
                     2-2              Split  on 3 - 7, Otherwise Hit
                     3-3              Split  on 4 - 7, Otherwise Hit
                     4-4              Double on 5 - 6, Otherwise Hit
                     5-5              Double on 2 - 9, Otherwise Hit
                     6-6              Split  on 2 - 6, Otherwise Hit
                     7-7              Split  on 2 - 7, Otherwise Hit
                     8-8                  Always Split
                     9-9              Split  on 2-6,8,9  Stand on 7,10,Ace
                    10-10                 Always Stand


























                                          TABLE FOUR
                             General Purpose Basic Strategy Table

                   Dealer ->  2   3   4   5   6   7   8   9  10   A

                    5...8     H   H   H   H   H   H   H   H   H   H
                   -------------------------------------------------
                    8(5-3)    H   H   H   B   B   H   H   H   H   H
                   -------------------------------------------------
          S         9         B   D   D   D   D   H   H   H   H   H
          I        -------------------------------------------------
          M        10         D   D   D   D   D   D   D   D   H   H
          P        -------------------------------------------------
          L        11         D   D   D   D   D   D   D   D   D   B
          E        -------------------------------------------------
                   12         H   H   S   S   S   H   H   H   H   H
          H        -------------------------------------------------
          A        13, 14     S   S   S   S   S   H   H   H   H   H
          N        -------------------------------------------------
          D        15         S   S   S   S   S   H   H   H   R   H
          S        -------------------------------------------------
                   16         S   S   S   S   S   H   H   H   R   R
                   -------------------------------------------------
                   17 & up    S   S   S   S   S   S   S   S   S   S

                              2   3   4   5   6   7   8   9  10   A

                   A-2        H   H   B   D   D   H   H   H   H   H
          A        -------------------------------------------------
          C        A-3        H   H   B   D   D   H   H   H   H   H
          E        -------------------------------------------------
                   A-4, A-5   H   H   D   D   D   H   H   H   H   H
          C        -------------------------------------------------
          O        A-6        B   D   D   D   D   H   H   H   H   H
          M        -------------------------------------------------
          B        A-7        S   D   D   D   D   S   S   H   H   H
          O        -------------------------------------------------
          S        A-8        S   S   S   S   B   S   S   S   S   S
                   -------------------------------------------------
                   A-9, A-10  S   S   S   S   S   S   S   S   S   S

                              2   3   4   5   6   7   8   9  10   A

                   A-A, 8-8   T   T   T   T   T   T   T   T   T   T
                   -------------------------------------------------
                   2-2, 3-3   P   P   T   T   T   T   H   H   H   H
                   -------------------------------------------------
                   4-4        H   H   H   L   L   H   H   H   H   H
          P        -------------------------------------------------
          A        5-5        D   D   D   D   D   D   D   D   H   H
          I        -------------------------------------------------
          R        6-6        T*  T   T   T   T   H   H   H   H   H
          S        -------------------------------------------------
                   7-7        T   T   T   T   T   T   H   H   R   H
                   -------------------------------------------------
                   9-9        T   T   T   T   T   S   T   T   S   S
                   -------------------------------------------------
                  10-10       S   S   S   S   S   S   S   S   S   S








                                          TABLE FIVE
                    True Count Variations To Basic Strategy Table

                   Dealer ->  2   3   4   5   6   7   8   9  10   A

          S         8         H   H   5   3   2   H   H   H   H   H   D
          I        -------------------------------------------------  B
          M         9         1   0  -2  -4  -4   3   H   H   H   H   L
          P        -------------------------------------------------
          L        10         B   D   D   D   D  -6  -4  -1   5   4   D
          E        -------------------------------------------------  W
                   11         D   D   D   D   D   D  -5  -4  -3   1   N

          Double if the true count is greater than or equal to the table value,
          otherwise hit.



                   12         2   1   0  -1  -1   D   D   D   D   B
                   -------------------------------------------------
                   13        -1  -2  -3  -4  -4   H   H   H   H   H
          H        -------------------------------------------------  S
          A        14        -3  -4  -5   S  -6   H   H   H   H   H   T
          N        -------------------------------------------------  A
          D        15        -5  -6   S   S   S   H   H   6   3   H   N
          S        -------------------------------------------------  D
                   16         S   S   S   S   S   H   6   4   0   R
                   -------------------------------------------------
                   17         S   S   S   S   S   S   S   S   S  -6

          Stand if the true count greater than or equal to the table value,
          otherwise hit.



                              2   3   4   5   6   7   8   9  10   A

                   A-2        H   6   2  -1  -2   H   H   H   H   H
          A        -------------------------------------------------
          C        A-3        H   5   1  -2  -4   H   H   H   H   H   D
          E        -------------------------------------------------  B
                   A-4        H   5  -1  -4   D   H   H   H   H   H   L
          C        -------------------------------------------------
          O        A-5        H   3  -1  -5   D   H   H   H   H   H   D
          M        -------------------------------------------------  W
          B        A-6        1  -2  -5   D   D   H   H   H   H   H   N
          O        -------------------------------------------------
          S        A-7        1  -1  -5   S   B   S   S   H   H   H
                   -------------------------------------------------
                   A-8        6   4   3   1   1   S   S   S   S   S
                   -------------------------------------------------
                   A-9        S   S   6   5   5   S   S   S   S   S

          Double if the true count is greater than or equal to the table value,
          otherwise use Basic Strategy substituting Hit for Double Down.











                                       TABLE FIVE (cont)
          (Without DD after split)

                   Dealer ->  2   3   4   5   6   7   8   9  10   A

                   A-A        T   T   T   T   T   T   T   T   T  -4
                   -------------------------------------------------
                   2-2,       6   1  -3  -6   T   T   H   H   H   H
                   -------------------------------------------------
                   3-3        H   4   0  -2   T   T   H   H   H   H
                   -------------------------------------------------
                   4-4        H   H   H   L   L   H   H   H   H   H
          P        -------------------------------------------------  S
          A        5-5        D   D   D   D   D   D   D   D   H   H   P
          I        -------------------------------------------------  L
          R        6-6        2   0  -1  -4  -5   H   H   H   H   H   I
          S        -------------------------------------------------  T
                   7-7        T   T   T   T   T   T   H   H   R   H
                   -------------------------------------------------
                   8-8        T   T   T   T   T   T   T   T   T   T
                   -------------------------------------------------
                   9-9       -1  -2  -3  -5  -3   6   T   T   S   S
                   -------------------------------------------------
                  10-10       S   S   6   4   4   S   S   S   S   S


          (With DD after split)

                   Dealer ->  2   3   4   5   6   7   8   9  10   A

                   A-A        T   T   T   T   T   T   T   T   T  -4
                   -------------------------------------------------
                   2-2,      -4  -5   T   T   T   T   H   H   H   H
                   -------------------------------------------------
                   3-3       -2  -6   T   T   T   T   H   H   H   H
                   -------------------------------------------------
                   4-4        H   H   3   1   0   H   H   H   H   H
          P        -------------------------------------------------  S
          A        5-5        D   D   D   D   D   D   D   D   H   H   P
          I        -------------------------------------------------  L
          R        6-6       -1  -3  -4  -6   T   H   H   H   H   H   I
          S        -------------------------------------------------  T
                   7-7        T   T   T   T   T   T   1   H   R   H
                   -------------------------------------------------
                   8-8        T   T   T   T   T   T   T   T   T   T
                   -------------------------------------------------
                   9-9       -2  -3  -5  -6  -5   3   T   T   S   4
                   -------------------------------------------------
                  10-10       S   S   6   4   4   S   S   S   S   S

          Split if true count greater than or equal table value, otherwise do
          not split and follow standard basic strategy for non pairs of same
          hand value.













                                      Matrix Codes:

               H  Hit
               S  Stand
               T  Split
               D  Double if allowed, otherwise hit
               B  Double if allowed & single deck, otherwise hit
               R  Surrender if allowed, otherwise hit
               P  Split if DD after split is allowed, otherwise hit
               L  Split if DD after split, double if single deck,
                  otherwise hit
               *  Hit if no DD after split

               OK, admittedly this last table is a bit complex, but it will
               cover just about any set of house rules that you may encounter.
               With this data you can construct your own Basic Strategy Table
               for your favorite form of the game.

             True Count Variations:
               Table five represents a starting point for true count variations.
               This table is the BlackJack! default.  Registered users gain the
               ability to define and modify a user table to suit the particular
               counting system you are using.  It can be selected as the active
               system and is used in Casino Play and the Basic Strategy Drill.



 -----------------------------------------------------------------------------
                          BlackJack! Registration Form

      Telephone Orders (314) 458-2863 (evenings)

      MAIL TO:  DONALD L. GRANGER
                GLENCOE COMPUTING
                1100 Highway C
                Glencoe, Missouri
                    63038-1404


      NAME:   ______________________________________     DATE: ___/___/___

      ADDRESS:______________________________________

      CITY:   ______________________________________

      STATE:  ______________  ZIP: _________-_______  COUNTRY: _____________

      PHONE:  (____)____-________(in case there's a question about your order)

      ___ Registration with documentation on diskette $29.99
      ___ Registration with professionally printed documentation $34.99
      ___ Registration with commented source code & printed documentation $99.99
          (BlackJack! is written in C and Assembler).

      International (except Canada) orders please add $3.00 for shipping.
         Be sure to make payment in US funds ($).

      Where did you obtain your copy of BlackJack! ?: ________________________

      YOUR HARDWARE:

      Computer _______________  Video adapter _______________ Fixed disk? ____

      Type of media desired:     5 1/4" floppy:_____     3 1/2" micro:_____

      +----------------------------------------------------------------------+
      |                   MASTERCARD AND VISA ARE WELCOME!                   |
      |                                                                      |
      |   Act #_______________________________________   Ex Date ____/____   |
      |                                                                      |
      |   Signature required for credit cards ____________________________   |
      +----------------------------------------------------------------------+

      AMOUNT ENCLOSED: $____________

      COMMENTS:





      ------------------------------------+----------------------------------
                                          |    * * * DO NOT MARK HERE * * *
      Your support is greatly appreciated.|
                                          | Serial # _______________________
                                          |
      Donald Granger                      | Version  _______________________
                                          |
                                2.10d 0590| Ship date_______________________
      ------------------------------------+----------------------------------
                        Please allow 1-2 weeks delivery time
```
{% endraw %}

## COMMENTS.TXT

{% raw %}
```
Dear User,

Thank you for examining BlackJack!.

Even if you do not choose to become a registered user I would appreciate
hearing your comments and suggestions.  Please take a moment to complete
the following form.

Note: The program name is BlackJack!, the game in general is referred
      to as Blackjack.

                            THANK YOU FOR YOUR HELP

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
2.01d
                            BLACKJACK! Comment Form

               MAIL TO:       DONALD L. GRANGER
                              GLENCOE COMPUTING
                              1100 Highway C
                              Glencoe, Missouri
                                      63038-1404
O
P     NAME:    ______________________________________     DATE: ___/___/___
T
I     ADDRESS: ______________________________________
O
N     CITY:    ______________________________________    PHONE: __-___-____
A
L     STATE:   ______________  ZIP: _________-_______


Where did you obtain your copy of BlackJack!? ____________________________
What is the version number (displayed on the opening screen)? ____________

Hardware information (if you tried more than one setup, please list all)

Computer make and model:                        Memory: _____K

Processor (8088, 80286, 80386):

Video adapter:

Monitor:

Is program speed  __Good   __Too slow

Graphics quality is  __Excellent  __Good  __Poor

TSRs loaded while running BlackJack! (eg: Sidekick):

Program run from:  __Hard Disk  __Floppy Disk    Size:____

Did you have any problems loading or running BlackJack!? __Yes  __No
If yes, please give details.



Did you attempt to run BlackJack! from within any "operating environments"
such as Windows or DESQview?  __Yes  __No
If yes, were there any problems? (be specific)



Did you read all of the documentation? __Yes  __No

Were the rules and concepts of Blackjack clearly explained? __Yes  __No
If no, please list the improvements you would like to see:



Was the documentation on how to use the program clear? __Yes  __No
If no, please list the improvements you would like to see:




Were the Basic Strategy Tables clear? __Yes  __No
If no, how could they be improved?




Please list any features that you would like added to BlackJack!:




Please list any features that you didn't like, or think were not needed:



Your experience with casino style Blackjack  __Novice   __Average  __Expert

Do you play in Blackjack tournaments?  __Yes  __No

Have you tried other Blackjack tutorial software?  __Yes  __No
If so, which ones?

Compared to other Blackjack software please rate BlackJack!
__Great  __Good  __Average  __Fair  __Poor

Do you think the registration fee is   __Low   __Fair  __High


General comments and suggestions:





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1283

     Volume in drive A has no label
     Directory of A:\

    BJ       CFG        64   5-10-90   2:10a
    BJ       EXE    158911   5-17-90   2:10a
    BJ-DOCS  TXT     89924   5-10-90   2:10a
    BJ87     BAT       198   5-10-90   2:10a
    CARDS16  IMG     33336   5-10-90   2:10a
    CARDSHGC IMG     33336   5-10-90   2:10a
    CASINOS  DAT       320   5-10-90   2:10a
    COMMENTS TXT      2914   5-10-90   2:10a
    PRINTBJ  BAT      1290   5-10-90   2:10a
    READ     ME       5597   5-10-90   2:10a
    SUITS16X IMG     15142   5-10-90   2:10a
    SUITSHGC IMG     15142   5-10-90   2:10a
           12 file(s)     356174 bytes
                               0 bytes free
