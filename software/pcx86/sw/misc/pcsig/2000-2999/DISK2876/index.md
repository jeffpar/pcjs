---
layout: page
title: "PC-SIG Diskette Library (Disk #2876)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2876/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2876"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2876.TXT

{% raw %}
```
Disk No: 2876                                                           
Disk Title: Mule's End Poker-Slots & 21                                 
PC-SIG Version: S1                                                      
                                                                        
Program Title: Mule's End Poker-Slots                                   
Author Version: 1.0                                                     
Author Registration: $17.95                                             
Special Requirements: 384K RAM and EGA. Supports a mouse.               
                                                                        
MULE'S END POKER-SLOTS is the typical poker slot machine with a         
difference - check out the cards! Check out the machine itself! Besides 
the great graphics, this game comes complete with instructions,         
easy-to-use (and learn!) keypresses, and support for a Microsoft        
compatible mouse. Drop a buck in the slot and give it a try!            
                                                                        
Program Title: Mule's End 21                                            
Author Version: 1.0                                                     
Author Registration: $14.95                                             
Special Requirements: 384K RAM and EGA.                                 
                                                                        
MULE'S END 21 has all the options of a Las Vegas 21 game without any of 
the headaches. Double-down, split a pair, take an insurance bet - it's  
all there. And there's a difference between this game and all the other 
21 games on the market - besides terrific graphics, it tells you all the
options you have at any given moment! If you have a pair, it asks if    
you'd like to split. If you have the money to double-down, it will ask  
if you want to! Insurance? Just a yes or no will do it! Same great      
graphics as MULE'S END POKER-SLOTS!                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║       <<<<  PC-SIG Disk #2876  MULE'S END POKER-SLOTS & 21  >>>>        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ NOTE:  The card games are in zipped format so they could both fit on    ║
║ this diskette. You will need either two floppy disk drives or a floppy  ║
║ and a hard drive in order to extract the files.                         ║
║                                                                         ║
║ MULE'S END POKER-SLOTS =                                                ║
║   To extract the program files for POKER-SLOTS, from your source drive  ║
║   type:  PKUNZIP MULEPOKR.ZIP [destination drive\subdirectory:]         ║
║                                                                         ║
║   To view/print the documentation and play the game, type:  GO  (Enter) ║
║                                                                         ║
║ MULE'S END 21 =                                                         ║
║   To extract the program files for 21, from your source drive type:     ║
║   PKUNZIP MULE21.ZIP [destination drive\subdirectory:]                  ║
║                                                                         ║
║   To view/print the documentation and play the game, type:  GO  (Enter) ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## 21.DOC

{% raw %}
```






















				 Welcome to

				MULE'S END 21




			Copyright 1991 by Michael Wegner
			     All Rights Reserved
 

	---------------------------------------------------------------[1]


	 


	> This document, program, and related graphics are copyrighted by
	> Michael Wegner.  You are hereby authorized and encouraged to use
	> this program free of charge for a temporary trial period.  You
	> are also authorized to distribute it without charge, excepting
	> a small charge to cover disk copying and mailing service.

	> If you like the program and desire to continue using it beyond
	> the temporary trial period, you are required to pay for it.
	> Instructions for registration are provided on the last page of
	> this document.



	The author of this software is not liable for damages of any kind
	associated with use of this software.  All risks are borne by the
	user.

	Please notify the author if any bugs or irregularities are found
	in this program.  Although every effort has been made to correct
	bugs, I can in no way guarantee this program to be completely
	"bug-free".

	Speaking of bugs, any that get through are my fault.  Those that
	you won't see are thanks to:

		John Playtester
		Karen Playtester
		Ray Playtester
		Terrye Playtester

	Of course, they're not all related and their real names are not
	Playtester, but they know who they are and they've got my deepest
	thanks!

 

	---------------------------------------------------------------[2]


	MULE'S END 21 is a 21 game that sets a new standard for cardgame
	graphics.  It's not only easy to play, it's also just about the
	best looking card game on the market, with very few exceptions.
	Those of you who have tried other card games advertized as having
	"FANTASTIC GRAPHICS" will see the difference immediately.  Those
	of you who have not just got lucky!!

	The question arises - how can these graphics be so much better
	than the others?  The answer is spelled W-O-R-K.  Over 200 hours
	were spent designing the cards alone, not to mention the other
	graphics contained in the game.  It's not easy, but somebody's
	got to do it!  The next question, of course - was it worth it?
	I don't know yet.  That will depend on you.  With that sneaky
	lead in, let's take a moment to talk about shareware.

	Shareware is a method of software distribution.  What that means
	is that you get to try it before you buy it, and you can give it
	away to anyone you want.  It also means that the price of share-
	ware is generally lower than that of commercial software, simply
	because those of us distributing via the shareware method have
	very little overhead.  If you register this program, you are
	directly responsible for keeping the cost of high quality software
	affordable.  I stress the words "HIGH QUALITY".  I don't hide
	behind a company name.  I don't have a secretary (well, I do, but
	I'm not sure if it counts since we were married before she became
	my secretary.), and most importantly, MY NAME IS ON THIS PROGRAM.
	That's important to me.  And because it's important to me, your
	input is listened to with both ears tuned in.  Try getting a
	feature added or bug fixed with software produced by a big company.
	I listen, I care.  And when you try out this program, you'll
	see exactly what I mean.

	'nuff said about that.  Let's get on with the good stuff!

	MULES'S END 21 requires the following hardware:

		IBM(tm) PC or compatible
		EGA graphics display card and monitor
		384K RAM (approximate) and
		360K disk drive

	Of course, these are minimum requirements and this will run with
	VGA, a hard drive, etc.  It's possible (though not likely) that
	this game may be updated to include a CGA and Monochrome version,
	but don't hold your breath.  With the price of good VGA monitors
	coming down all the time and with the abundance of EGA monitors
	in place, there isn't a lot of reason not to have the benefit of
	a good color monitor.  And CGA makes me seasick.  It's hard to
	program that way. 

 

	---------------------------------------------------------------[3]



	MULES'S END 21 is extremely easy to play, with only a few keypresses
	to remember.  They are:

		S .......... Sound Toggle (on and off)
		<ESC> ...... No or decline option offered - used to
			     not hit (stand), not split a pair, etc.
		<ENTER> .... Yes or accept option offered - used to
			     take a hit, split a pair, take an insurance
			     bet, etc.
		B .......... Boss key.  This blanks the screen and waits
			     for another B to resume.  This might save
			     your job if you happen to be playing at
			     work.  You wouldn't do that, would you?
		Q .......... I hate to say it, but eventually you will
			     want to quit.  This is the quit key.
		ARROW KEYS . Left and Right arrow keys are used to change
			     the bet.  The current bet is shown in the
			     lower right corner of the screen.  These are
			     also used to change the insurance bet.

	The House Rules for MULES'S END 21 are also pretty simple:

		Dealer must hit on 16, must stand on 17.

		You can never have more than 7 cards in your hand.

		The House will not pay for hands of 5 cards (5-card-Charlies)
		of anything like that unless it beats the dealer's hand
		or the dealer busts.

		No cussing at the table.

		You cannot double-down on a split hand.

		You can split any pair, including aces.  Face cards only
		count as a pair if they are truely a pair.  (2 Kings
		can be split, a King and a Jack cannot)

		No booing the floor show.  If you can do better, you're
		welcome to try.

		Blackjacks pay 2 to 1

		Insurance bets pay 2 to 1 for an ace showing, 4 to 1 for
		a face card showing.

		If you miss the spittoon, you clean it up.
 

	---------------------------------------------------------------[4]


	If you have never played 21 before, or you're not sure of the rules
	and terminology, this is for you:

		INSURANCE - If the dealer has a face card or an ace showing
		  after dealing the first two cards, it's possible that the
		  dealer has a blackjack (hand total of 21 with two cards).
		  The dealer will offer you an insurance bet.  You can
		  accept the bet if you have enough money, but the insurance
		  bet can never be more than the original bet for that hand.
		  If the dealer does indeed have 21 and you accepted the
		  insurance bet, you win the insurance bet and lose the
		  bet for the hand.  However, when you win an insurance
		  bet, you win 2 to 1 if the dealer was showing an ace and
		  you win 4 to 1 if the dealer was showing a 10 or face card.
		  If the dealer didn't have a blackjack, you lose the
		  insurance bet, but you still finish the hand.  Winning
		  or losing the insurance bet has no bearing on the current
		  hand.  Insurance will only be offered if you have enough
		  money to take the bet.

		SPLITTING A PAIR - If your first 2 cards are a pair (any
		  pair will do), you can split the pair into two hands
		  consisting of one card each.  You then play two hands
		  instead of one.  This will double your bet if you accept
		  the split offer, since you're playing two hands instead
		  of one.  If you don't have enough money, you won't be
		  offered the split.  Each hand is played separately and
		  it's possible to win both, lose both, tie both, or any
		  combination of those.  The 2 cards MUST be a pair, that
		  is, 2 face cards are a pair only if they happen to both
		  be Queens, Kings, Jacks, etc.  One Jack and One Queen
		  does not a pair make.

		HIT - Take a card.  If you want to take another card, you
		  take a "hit".  If you have enough cards, you "stand".
		  See the description for "stand".

		STAND - See "hit".  HA!  Gotcha!!  Nah.  It means you don't
		  want anymore cards and you want to "stand" where you're
		  at.

		DOUBLE-DOWN - Normally, once you've placed your bet and
		  cards are dealt, you can't change your bet.  However,
		  if you have a total of 11 with the first 2 cards, you
		  have a chance (if you have the money) to double your
		  original bet.  The catch to this "easy money" is that
		  you can only get one more card and you must stand with
		  those three cards.  Not so "easy", is it?

 

	---------------------------------------------------------------[5]


	A flashing casino chip will show you what your current option is.
	If you don't want the option (or card) just press the ESCAPE key
	and the game will continue.  If you do want to accept the option
	(or take the "hit") press the ENTER key.

	The flashing chip is a 5 dollar chip and it has no bearing on your
	bet.  It just happens to be a 5 dollar chip.  It's been in my
	family for minutes and I'm letting you use it for good luck.

	One more thing here, and I'll stop running off at the keyboard.
	As I mentioned above, I spent over 200 hours drawing cards.  I'm
	really sick of cards.  Well, sick of drawing them, anyway.  If you
	happen to be a programmer and want to use these cards in your
	program, I will sell you a copy of them for $49.95 (US) and I
	can supply them in PCX format (either full screen pictures,
	one suit per screen) or in BASIC "bsave/bload" format.  Actually,
	if you want them, I'll give you both for the same price.  However,
	you are not allowed to sell them as stand alone graphics images
	and must be part of a program.  This protects my investment in
	time spent and maybe I'll get to play some great games with
	truely FANTASTIC GRAPHICS.

	Don't forget - if you enjoy blackjack but crave the excitement
	of a poker slot machine, try MULE'S END POKER-SLOTS.  All the
	action of a real machine without the risks!  Try different
	strategies - see what works - see how lucky you are!  Same
	great graphics, same easy playability in a totally different
	game!
	 

	---------------------------------------------------------------[6]


	Software Registration Form - MULE'S END 21

	Fill out the following form, enclose $14.95(US) and mail to:

				MICHAEL WEGNER
				1110 FIRST STREET
				TAWAS CITY MI 48763


	NAME     ___________________________________________________

	ADDRESS  ___________________________________________________

	ADDRESS  ___________________________________________________

	CITY     _____________________ STATE _________ ZIP _________


	THE QUESITONS BELOW ARE OPTIONAL AND NEED NOT BE COMPLETED.
	ALL ANSWERS ARE CONFIDENTIAL.

	WHERE DID YOU GET THIS PROGRAM:

		FRIEND

		SOFTWARE DISTRIBUTION COMPANY ________________________

		BULLETIN BOARD ________________________________________


	WHAT DO YOU MOST LIKE ABOUT MULE'S END 21 _____________________

	_______________________________________________________________

	WHAT DO YOU LIKE LEAST ABOUT MULE'S END 21 ____________________

	_______________________________________________________________

	WHAT PROGRAMS WOULD YOU LIKE TO SEE IN THE FUTURE _____________

	_______________________________________________________________

	HAVE YOU TRIED MULE'S END SLOT POKER        YES       NO

	If you are registering this program and have not seen or tried
	MULE'S END SLOT POKER, a trial copy will be sent to you upon 
	receipt of this form.  

	***** THANK YOU FOR REGISTERING MULE'S END 21 - GOOD LUCK! *****
 

```
{% endraw %}

## P-SLOTS.DOC

{% raw %}
```






















				 Welcome to

			   MULE'S END POKER-SLOTS




			Copyright 1991 by Michael Wegner
			     All Rights Reserved
 

	---------------------------------------------------------------[1]


	 


	> This document, program, and related graphics are copyrighted by
	> Michael Wegner.  You are hereby authorized and encouraged to use
	> this program free of charge for a temporary trial period.  You
	> are also authorized to distribute it without charge, excepting
	> a small charge to cover disk copying and mailing service.

	> If you like the program and desire to continue using it beyond
	> the temporary trial period, you are required to pay for it.
	> Instructions for registration are provided on the last page of
	> this document.



	The author of this software is not liable for damages of any kind
	associated with use of this software.  All risks are borne by the
	user.

	Please notify the author if any bugs or irregularities are found
	in this program.  Although every effort has been made to correct
	bugs, I can in no way guarantee this program to be completely
	"bug-free".

	Speaking of bugs, any that get through are my fault.  Those that
	you won't see are thanks to:

		John Playtester
		Karen Playtester
		Ray Playtester
		Terrye Playtester
		Brad Playtester

	Of course, they're not all related and their real names are not
	Playtester, but they know who they are and they've got my deepest
	thanks!

 

	---------------------------------------------------------------[2]


	MULE'S END POKER-SLOTS is a poker slot machine game that has the
	same great graphics and playability as MULE'S END 21.  It's not 
	only easy to play, it's also just about the best looking card 
	game on the market, with very few exceptions.  Those of you who 
	have tried other card games advertized as having "FANTASTIC 
	GRAPHICS" will see the difference immediately.  Those of you who 
	have not just got lucky!!

	MULE'S END POKER-SLOTS and MULE'S END 21 are both shareware.
	Shareware is a method of software distribution.  What that means
	is that you get to try it before you buy it, and you can give it
	away to anyone you want.  It also means that the price of share-
	ware is generally lower than that of commercial software, simply
	because those of us distributing via the shareware method have
	very little overhead.  If you register this program, you are
	directly responsible for keeping the cost of high quality software
	affordable.  I stress the words "HIGH QUALITY".  I don't hide
	behind a company name.  I don't have a secretary (well, I do, but
	I'm not sure if it counts since we were married before she became
	my secretary.), and most importantly, MY NAME IS ON THIS PROGRAM.
	That's important to me.  And because it's important to me, your
	input is listened to with both ears tuned in.  Try getting a
	feature added or bug fixed with software produced by a big company.
	I listen, I care.  And when you try out this program, you'll
	see exactly what I mean.

	'nuff said about that.  Let's get on with the good stuff!

	MULES'S END POKER-SLOTS requires the following hardware:

		IBM(tm) PC or compatible
		EGA graphics display card and monitor
		384K RAM (approximate) and
		360K disk drive

	Of course, these are minimum requirements and this will run with
	VGA, a hard drive, etc.  It's possible (though not likely) that
	this game may be updated to include a CGA and Monochrome version,
	but don't hold your breath.  With the price of good VGA monitors
	coming down all the time and with the abundance of EGA monitors
	in place, there isn't a lot of reason not to have the benefit of
	a good color monitor.  And CGA makes me seasick.  It's hard to
	program that way. 

	---------------------------------------------------------------[3]

	MULES'S END POKER-SLOTS is extremely easy to play, with only a few 
	keypresses to remember.  They are:

		S .......... Sound Toggle (on and off)

		B .......... Boss key.  This blanks the screen and waits
			     for another B to resume.  This might save
			     your job if you happen to be playing at
			     work.  You wouldn't do that, would you?

		Q .......... I hate to say it, but eventually you will
			     want to quit.  This is the quit key.

		1-5 ........ The number keys from 1 to 5 (either the top
			     row or the numeric keypad) are used to bet
			     between 1 and 5 coins and are also used to
			     toggle the hold buttons for the apprpriate
			     cards on and off.

		MOUSE ...... If you have a Microsoft compatible mouse, you
			     can just click on the numbers, hold buttons,
			     and deal button to do the same job as the number
			     keys.

	The payoff chart at the top of the screen shows the payoffs paid
	with certain poker hands, depending on the number of coins bet.
	The appropriate box will light up when you have a winning hand.

	If you have never played poker before, or you're not sure of the 
	rules and terminology, this is for you:

	STRAIGHT FLUSH - This is a straight (5 cards in sequence) that
	  are also all of the same suit.

	FOUR OF A KIND - Four cards of the same number or face, such as
	  four Kings or four Threes.  The fifth card is of no importance.

	FULL HOUSE - Three cards of the same number or face, and two cards
	  of the same number or face, such as three Jacks and two Nines.

	FLUSH - Five cards of the same suit but not in sequence.

	STRAIGHT - Five cards in sequence, but not in the same suit.

	THREE OF A KIND - Three cards of the same number or face.

	TWO PAIR - Two cards of the same face or number, and two more
	  cards of the same face or number.  For instance, two Sevens and
	  two Fives.

	ONE PAIR - Two cards of the same face or number.  In MULE'S END
	  POKER-SLOTS, a pair of Jacks is the lowest winning hand.
 

	---------------------------------------------------------------[4]


	Over 200 hours were spent drawing cards - that's roughly 5 weeks
	of 8 hour days, and that was just on the cards.  If you happen
	to be a programmer and want to use these cards in your program, 
	I will sell you a copy of them for $49.95 (US) and I can supply 
	them in PCX format (either full screen pictures, one suit per 
	screen) or in BASIC "bsave/bload" format.  Actually, if you want 
	them, I'll give you both for the same price.  However, you are not 
	allowed to sell them as stand alone graphics images and must be 
	part of a program.  This protects my investment in time spent and 
	maybe I'll get to play some great games with truely FANTASTIC 
	GRAPHICS.

 	Don't forget to try out MULE'S END 21!  It's easy to play, but
	don't let that fool you, it still has all the excitement of 21!
	  Double-down - Insurance bets - Split a pair - BLACKJACK!!
	It's all there in wonderful color graphics, just waiting for you
	to play a hand or two.  Our resident expert, Slim, will even give
	you pointers to get you started.  Just a few keypresses to
	remember (even fewer than MULE'S END POKER-SLOTS) and you're off
	and running.  If you like to play 21, but can't put up with the 
	awful graphics of most games, try MULE'S END 21!!


	---------------------------------------------------------------[5]


	Software Registration Form - MULE'S END POKER-SLOTS

	Fill out the following form, enclose $17.95(US) and mail to:

				MICHAEL WEGNER
				1110 FIRST STREET
				TAWAS CITY MI 48763


	NAME     ___________________________________________________

	ADDRESS  ___________________________________________________

	ADDRESS  ___________________________________________________

	CITY     _____________________ STATE _________ ZIP _________


	THE QUESITONS BELOW ARE OPTIONAL AND NEED NOT BE COMPLETED.
	ALL ANSWERS ARE CONFIDENTIAL.

	WHERE DID YOU GET THIS PROGRAM:

		FRIEND

		SOFTWARE DISTRIBUTION COMPANY ________________________

		BULLETIN BOARD ________________________________________


	WHAT DO YOU MOST LIKE ABOUT MULE'S END POKER-SLOTS ____________

	_______________________________________________________________

	WHAT DO YOU LIKE LEAST ABOUT MULE'S END POKER-SLOTS ___________

	_______________________________________________________________

	WHAT PROGRAMS WOULD YOU LIKE TO SEE IN THE FUTURE _____________

	_______________________________________________________________

	HAVE YOU TRIED MULE'S END 21                YES       NO

	If you are registering this program and have not seen or tried
	MULE'S END 21, a trial copy will be sent to you upon receipt of 
	this form.  

	*****   THANK YOU FOR REGISTERING MULE'S END POKER-SLOTS   *****
 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2876

     Volume in drive A has no label
     Directory of A:\

    MULEPOKR ZIP    100700  11-05-91   3:08a
    MULE21   ZIP    101408  11-05-91   3:13a
    PKUNZIP  EXE     23536   1-16-91  12:38p
    FILE2876 TXT      2517  11-04-91   4:12p
    GO       TXT      1617  11-05-91   3:54a
    GO       BAT        38   1-31-91  12:58a
            6 file(s)     229816 bytes
                           89088 bytes free
