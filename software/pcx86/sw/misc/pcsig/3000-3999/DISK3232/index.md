---
layout: page
title: "PC-SIG Diskette Library (Disk #3232)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3232/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3232"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DOMIN.DOC

{% raw %}
```

















                            DOMINATION

                             Ver 2.08

                            User Guide




















                   
























Table Of Contents:

1 LEGAL NOTICE  . . . . . . . . . . . . . . . . . . . .    1

2 Preface . . . . . . . . . . . . . . . . . . . . . . .    2
    2.1 Hardware requirements . . . . . . . . . . . . .    2
    2.2 Software requirements . . . . . . . . . . . . .    2
    2.3 Additional equipment  . . . . . . . . . . . . .    2

3 General Game  . . . . . . . . . . . . . . . . . . . .    3

4 Installation  . . . . . . . . . . . . . . . . . . . .    4

5 Setup . . . . . . . . . . . . . . . . . . . . . . . .    4

6 Playing The Game  . . . . . . . . . . . . . . . . . .    5
    6.1 Controls From Menu  . . . . . . . . . . . . . .    5 
    6.2 Controls In Game  . . . . . . . . . . . . . . .    5
    6.3 Wining! . . . . . . . . . . . . . . . . . . . .    6

7 Revision History  . . . . . . . . . . . . . . . . . .    6

8 About The Author  . . . . . . . . . . . . . . . . . .    6

9 Support Sites & Contacting The Author . . . . . . . .    7

10 The Future . . . . . . . . . . . . . . . . . . . . .    7

11 Technical Information  . . . . . . . . . . . . . . .    7

12 Thanks & Hellos  . . . . . . . . . . . . . . . . . .    8

14 Other Software . . . . . . . . . . . . . . . . . . .    8

































1 LEGAL NOTICE

        Icarean Dreams Software & Cameron Grant holds the soul
copyright to this software (DOMINATION). DOMINATION is provided
as is, without any kind of warranty or guarantee.

        In NO event shall Icarean Dreams software be held liable
to you or anyone else for any damages or costs incurred by the use
or the inability to use DOMINATION.

        DOMINATION is NOT public domain it is Shareware. You are
entitled to use the software for 30 days to evaluate whether you 
really want it or not. If after the 30 day trial period you continue
to use DOMINATION the you must register it. (See also REGISTER.DOC)

	This shareware release may be distributed freely as long as 
the following points are adhered to:

	- No charge is made for the software. (Any charges must cover
distribution costs ONLY).
	- All the files in the original archive remain unchanged.
	- The distributed archive MUST contain all the original, 
unchanged files.

        No part of DOMINATION may be modified, altered, reverse
engineered, or sold without prior written permission from Icarean Dreams
Software. (Written permission does NOT include Electronic Mail).

        All Icarean Dreams Software and Cameron Grant products are
trademarks or registered trademarks of Icarean Dreams Software or
Cameron Grant. Other brand and product names are trademarks or 
registered trademarks of their respective holders.

        Copyright 1991-1992 Icarean Dreams Software. All rights
reserved.

	Software written and designed by Cameron Grant.
	Documentation written and designed by Robert Elmes.
























DOMINATION V2.08a                                      1



2 Preface

        Welcome to DOMINATION. A board game brought to you by
Icarean Dreams Software.

        DOMINATION has been tested on numerous systems. And the
chances are it will work on yours. However there are a few 
restrictions and requirements.

    2.1 Hardware Requirements

 	- An IBM PC, AT, 386, 486, PS/2 or 100% Compatible.
        - A VGA Graphics Card. 
        - A Floppy Drive or Hard Disk to run DOMINATION from.

    2.2 Software Requirements

        - MS Dos Ver 2.1 or newer
     or - PC Dos Ver 2.1 or newer
     or - DR Dos Ver 3.4 or newer

    2.3 Additional Equipment

        DOMINATION can make use of but does not require the following:

	- A MS Dos Compatible Mouse & Driver
 	- A Mono DAC connected to a printer port
	- A Stereo DAC connected to 2 printer ports
	- A Stereo On One DAC connected to a printer port

































DOMINATION V2.08a                                      2



3 General Game

        DOMINATION is basically a board game which would be rather
difficult to play on a board due to the complexity of the
explosions involved.
        DOMINATION is played on a 12x10 square grid. Each square
can hold a number of counters, the maximum being called the critical 
mass of that square.
	The critical mass is defined by the number of squares 
directly adjacent to it. So the corner square would have a critical
mass of 2, a side square a critical mass of 3 and a middle square a 
critical mass of 4. A hole in the board subtracts 1 from the critical 
mass of all squares directly adjacent to it.
	Each player takes it in turns to place a counter on the board.
A player can only place a counter in a square which is either directly 
adjacent to a square already containing one of their counters or in a 
square which already contains one of their counters.
	When the number of counters in a square reaches critical mass
the square explodes. That square will then contain no counters but 
each adjacent square will have had 1 counter added to it. Each square
which gets a counter placed into it from an explosion is claimed by 
the player who started the explosion.
	An explosion in a field of squares which are just under their
critical mass can lead to a chain reaction of explosions, and cause 
the entire face of the board to change dramatically! Hence the name of
the game "DOMINATION".




































DOMINATION V2.08a                                      3



4 Installation

        DOMINATION can be install on either a floppy disk or a
hard disk. To install the game follow the following points.

        - Create a directory for DOMINATION.
	- Copy the distribution archive into this directory.
	- Move to this directory and unpack the game files by 
running the self-extracting archive file, DOMIN208.EXE.
        - Store the original archive (DOMIN208.EXE) in a safe
place, in case you need to reinstall the game files.

5 Setup

        Go to you DOMINATION directory and type:   DOMSETUP

	Answer the questions it asks. They will be as follows;

	- Autodetect the IRQ to use? 

           Answer True to this. If DOMINATION does not work with
this setting reconfigure and answer false. And tell it to use 
IRQ 0 or IRQ 2.  The setting of this depends on your VGA card. 
If IRQ 2 doesn't work try IRQ 0. If IRQ 0 doesn't work, then your
computer isn't IBM compatible enough to run DOMINATION.

	- Force VGA detection?

           Answer True to this ONLY if DOMINATION says you don't
have a VGA card and you in fact do! DOMINATION requires a VGA card,
so don't try running it without one!

	- Force 8086 detection?

           Answer True to this ONLY if DOMINATION crashes on start
up. It impairs the games performance and may cause snow on the
screen so only answer True is you REALLY have to!

 	- Sound Output Device

	  Here you can chose either 1, 2, 3 or 4. What you chose
will depend on what you have.
          1) PC Speaker
          2) Mono DAC on an LPT port
          3) Stereo DAC on an LPT port
          4) Stereo DACs on 2 LPT ports

	- Allow sound

	  This allows you to have the sound on or off by default.
(It can also be switched on and off in the game)












DOMINATION V2.08a                                      4



6 Playing The Game

    6.1 Controls From The Menu

	- F1 		  Player 1 [Human/Computer/Cyborg]

	- F2		  Player 2 [Human/Computer/Cyborg]

	- F3		  Player 3 [Human/Computer/Cyborg/Off]

	- F4		  Player 4 [Human/Computer/Cyborg/Off]

	- F5		  No. Of Lives each player has [1/2/3]

	- F6		  Level to start at [1-8]

	- F7		  Tournament Mode [On/Off]. When On
			  all remaining players will advance to
			  the next level when a player dies.

 	- Space		  Start Game

	- Esc		  Exit to Dos

    6.2 Controls In A Game

	- Cursor Keys     Either of these can be used
    or 	- Mouse           to move the cursor around

	- Space           Either of these can be used
    or  - Enter           to place a counter

 	- S		  During a Human players move you
			  can press S to toggle the Sound
			  On or Off.

	-Alt X 		  Exit To Dos

	-Esc		  Quit back to main menu

	- F1		  Help

	- F2 		  Make Cyborg player suggest a
			  move. Costs 1000 points

	- F3		  Make Computer player suggest
			  a move. Costs 100 points.

	- Right Shift 	  Place a counter in YOUR corner
	  AND Enter	  OVER an opponents counter. This
			  can only be done once per level.
			  You lose 40% of your score for
			  this!

NB. You can place a counter in your corner at ANY time as 
long as an opponent is not occupying that square (you may
then decide to use the Right Shift & Enter option)
    Cyborgs are just more advanced Computer Players.





DOMINATION V2.08a                                      5


    6.3 Wining!!

	- At the end of the game the person with the highest
score (Whether they are dead or alive!) wins!	


7 Revision History 

  1.0 - The first version of DOMINATION. It was released on 
25/12/91 (Christmas Day!). 

  1.1a - Many improvements over V1.0. Smaller archive, new fonts,
new computer player, game runs faster and better graphics.

  1.1b - The Crippleware feature is removed. Now you are no longer
restricted to 2 players. (This was at the advice of the PC PLUS
SuperDisk/Forum Editor - Robin Nixon)

  2.0a - DOMINATION is virtually rewritten. The reason: my Hard
Disk crashed :-(. And I didn't have a backup (Backing up 80+ megs
of data onto 1.2meg floppies is NOT my idea of fun!) 
	 This is why I have decided I need a tape streamer. But 
they cost money. So I *NEED* people to register DOMINATION (or
if anyone has a spare tape streamer doing nout that I could have,
they would receive FREE registered copies of ALL shareware
software I produce)

  2.01a - The problem with DOMINATION and some VGA cards is solved.

  2.02a - Added support for VGA cards that do not support Vertical
Retrace IRQ.

  2.03a - A new type of computer is added which is much harder to
beat. The setup is now stored thus saving you having to alter it 
each time.

  2.04a - Not sure where this one went <G>

  2.05a - Minor tweaks to the code are made to fix all the known 
bugs. Automatic IRQ detection is added, as is Digitised Sound 
trough the PC Speaker and better support for slower machines.

  2.06a - Automatic IRQ detection is speeded up. Support for 
DACs on parallel ports is added. And DOMINATION gets a support
BBS in the form of Paradise City. (See also Support Sites)

  2.08a - Bug with the Stereo-On-One DAC is fixed. Documentation
is rewritten. Minor bugs are also fixed.


8 About The Author

	My name is Cameron Grant, I am 16 and I actually ENJOY
writing computer games (But I would like something back for the
hours I put into producing them!). I am disabled but don't let 
that put you off the idea of mailing me.








DOMINATION V2.08a                                      6



9 Support Sites & Contacting The Author

  Support BBS: [The latest version of DOMINATION is always
                from the Support Area on this BBS]

	      Paradise City BBS
              24Hrs
              V21, V22, V22bis, V32, V32bis, 9600 CSP & MNP 1-5
              Tel: [UK] 0734-786408
		   [Overseas] +44-734-786408

  Home Address: 

	      Cameron Grant
	      25, Chipperfield Road,
	      Hemel Hempstead,
	      Herts. HP3 0AH.
	      ENGLAND. UK.

  On CompuServe E-Mail:

	      My ID is:-  100031,2265

  On CompuServe CB simulator:

              My Handle is:- Gandalf The Grey

  Via WAPOW Echomail:

              Message me in the Software Conference from ANY
BBS which is a member of the WAPOW Mail Network.


	Please contact me via any of the above to suggest any
improvements I can make to DOMINATION or to report any Bugs
you find in it.


10 The Future

	I can't really think of anything else to add to 
DOMINATION apart from SoundBlaster support (However that will
only come about when I can afford to buy a sound blaster).
	If you can think of anything that would be good to
include in DOMINATION, just let me know and I'll see what I
can do.

11 Technical Information

        DOMINATION has a 70Hz 8 layer parallax starfield
that operates in the background and 35Hz colour cycling during
game play. 
	It was written in Turbo Pascal 6.0 and it's 
integrated assembler. It's archived using LHArc's LZEXE.
        I learnt a lot about how to update the palette by
looking through the source of Fractint Ver 15.30.  






DOMINATION V2.08a                                      7



12 Thanks & Hello's

	Firstly, a very special thank you goes to Robert Elmes
for allowing me to have a support area on his BBS, Paradise 
City (See also Support Sites).

	Hi to all those I know on CompuServe CB, including 
(in no order of priority) Lady Cesanne, Confucian Ethnic, 
EnglishGal, Quentin, Killer Wolf, Kevin, KEVIN, Czar Nicholas,
Thightlaced, Mad Hacker, Rhet, and everyone else who's names I
have forgotten <G>

	Thanks to Jerome Green, Jon Ribbens, Matthew Waddilove,
Robert Elmes, Charles Edwards, Confucian Ethic, Gopi (Mad
Hacker) Flaherty, my Dad, Sister and Mum for Beta testing
DOMINATION.

	Thanks to all those who have complimented me or my 
baby (my baby = DOMINATION in case you were wondering). Thanks
to all those that produce the music I like to listen to, 
including Guns N' Roses (That goes for me too <G> me = Robert
Elmes), Bryan Adams, Led Zeppelin, Fleetwood Mac, and loadsa
others.

	Thanks to IBM, Borland, MicroSoft for produce/writing
the hardware/software I have used to create domination with.

	And of course - Thanks to *YOU* for getting this copy
of DOMINATION (however you got it), reading the docs this
far (not far to go now - HONEST <G>), playing the game, and 
most of all if you consider or even do REGISTER it!!!


14 Other Software

	At the moment I am in the process of writing a new
game called TANX. It is based on the old Tanks style game.
I won't say much about it here except it will be good!























DOMINATION V2.08a                                      8

```
{% endraw %}

## HUE.DOC

{% raw %}
```
                    Thurman Utilities ... Hue v1.00

                       (c) 1992, Thomas Thurman

Hue is a little utility to change the screen colours using ANSI.SYS. It
has a very simple invocation syntax- you specify the colours you want in
their natural order. For example:

      HUE bright white on blue

will change the colours to bright white on blue. Type HUE with no parameters
for more information.

      HUE ?

will give you a list of possible colours for your monitor. This adjusts itself
according to whether you have a mono or colour monitor.

The following keywords work on any monitor:

      BRIGHT/BOLD/HIGH/LIGHT gives the high-intensity version of a colour.
      BLINK/FLASH causes the colour to flash.

Options for colour montors only are as follows:

      BLACK, RED, GREEN, BROWN, BLUE, MAGENTA, CYAN, WHITE will give you those
       colours (pretty obviously.)

       The first colour you give is the foreground colour, the next is the
       background colour.

      PINK is short for LIGHT MAGENTA.
      YELLOW is short for LIGHT BROWN.

Options for mono monitors only are these:

      UNDERLINE/UNDERSCORE gives underlined text, and
      INVERSE gives inverse text (ie white on black.)

Any of these may be combined with any others, EXCEPT for the fact that the
background colour may not be flashing or bright. If you ask for a flashing
or bright background colour you'll get a flashing or bright foreground colour
instead.

Type HUE /H for extra usage information.

Here's the most unusual feature of this utility: it can create .COM files
to change the screen colours! For example, suppose you wanted to have the
screen colours set to bright-white-on-blue every time you booted your
computer. First, you'd type

      HUE bright white on blue /cbwob

This will create a file called BWOB.COM. Then you'd put a line saying

      bwob

in your autoexec.bat (in the root directory of your boot disk), and it
would set the colours for you! This is also useful if there are several
people who use the same computer, and who each like different screen colours.
For example, my little brother Andrew likes light magenta on red, but I
prefer bright white on blue. You could create files named ANDREW.COM and
THOMAS.COM, and save yourself a lot of typing.

So there it is. Ideas for improvements and so on would be welcome...

               Ebby: SEND your message to Thomas Thurman.
         CompuServe: send to Mike Thurman, number 100021,3441.
              SSBBS:  send to Thomas Thurman.
              (SSBBS is on Amersham (0494) 431861.)

Or you can contact the Thorsoft support area on Paradise City, which is on
Reading (0734) 786408. It should be working by the end of August 1992.

Other programs by Thorsoft:

               Avaricius: a graphical adventure game set in Pompeii (*)
               Spellchick: an arcade game (*)
               Frisk: a file-finder

(*) = requires EGA.

Have fun!

					Thomas Thurman
					July 1992.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3232

     Volume in drive A has no label
     Directory of A:\

    GO       TXT      1617  10-05-92   2:00p
    GO       BAT        34  10-05-92   1:46p
    SCHICK11 EXE     54589   9-20-92  12:06a
    DOMIN209 EXE     53871   8-24-92  11:55p
    DOMIN    DOC     14752   4-29-92   1:00p
    HOUR     EXE      4437   9-12-92   1:49a
    FRISK    EXE     10429   2-16-92   9:09p
    HUE      EXE      6697   7-26-92   1:49a
    HUE      DOC      3064   7-27-92   8:36p
    AVVY     SCR      1428   9-19-92  11:43p
           10 file(s)     150918 bytes
                            6656 bytes free
