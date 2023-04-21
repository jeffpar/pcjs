---
layout: page
title: "PC-SIG Diskette Library (Disk #1495)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1495/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1495"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ALICE IN WONDERLAND TEXT ADVENTURE"

    ALICE IN WONDERLAND is an adventure game based on Lewis Carroll's
    novel, Alice's Adventures in Wonderland.  Although you need not be
    familiar with the novel to play, there are occasionally places it would
    be helpful.
    
    In this narrative adventure, you type in dialogue and directions as you
    wander through Wonderland as Alice, gathering special objects and
    talking with the odd creatures and other characters from the novel.
    
    You will discover that your size can change in this game.  You start out
    your normal size and then may grow or shrink, depending on your
    actions.  At times, you will have to be very small to accomplish certain
    tasks.  But be aware that the larger you are, the better your chances of
    evading death.  Also, when you are very large, there is no weight
    restriction on what you can carry.  When you are tiny and you encounter
    a danger, your chances of survival are pretty slim.
    
    Winning consists of finding a particular valuable object and returning
    home with it.  Along the way, there are many adventures to be had and
    many places to see.  You will need to explore everything.  Suitable for
    ages 9 through adult.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AIW.DOC

{% raw %}
```

                  AIW INSTRUCTIONS AND INFORMATION
		      (c) 1989 by R.C. Johnson
Author's Note:

     Alice in Wonderland (AIW) is an adventure game based on Lewis 
Carroll's novel, Alice's Adventures in Wonderland.  Although you need 
not be familiar with the novel to play, there are occasionally places 
it would help.  However, you will notice immediately (if you know the 
novel), that I've added some possibilities that Lewis Carroll never 
thought of.  As author of this program, I offer it as shareware to the 
general public, which means that you may freely copy it and give copies
to your friends, but you may not alter the program in any way or in any 
way use it for personal profit.  I ask that you contribute $10 if you 
enjoy the game.  This fee will help compensate me for many hours labor, 
and will register you as an owner of the program.  You will then be
entitled to future updates, fixes, or whatever, and help if you need
it.  Please send a personal check to me at this address:


		Robin Johnson
                3445 Windham Circle
		Stockton, CA  95209
*
This game is meant to be played as an accompaniment to reading the 
novel, to make a great literary classic more interesting (as if it
needs it).  Reading the novel and playing the game as a
supplement can be extremely engaging for adults and teenage children.
Younger children may find the game too difficult.

	FILES:

	The files on the disk are as follows:

	1.  AIW.EXE - The startup program.  To play the game, type AIW
at the system prompt, then press RETURN.
        2.  WELCOME.COM - Opening screen display program.

        3.  WONDER1.EXE - Secondary program module, which will be called
by the main program.  This program will not run independently.

        4.  WONDER2.EXE - Secondary program module, which will be called
by the main program.  This program will not run independently.

        5.  AIW.DOC - This file, which contains program documentation.
*

	OBJECTS:

	There are 16 objects in Wonderland to interact with.  You'll
know them when you see them.  You may pick them up, drop them, put
them in your apron pocket, or manipulate them in a few other ways. 	

	Each object is assigned a weight based on its size.  As in
other games of this sort, there is a weight limit for what you are
holding.  This limit is based on your own size, since you may be large
or small.  The larger you are, the more you can hold, of course.
Some objects will be too large to fit into your pocket.

	The program "remembers" the last object you picked up or 
removed from your pocket, so that after you TAKE KEY, you may put
it in your pocket simply by typing POCKET.  If you type REMOVE KEY
to take it from your pocket, you can then type DROP with no argument
to drop it.  This works for EAT, DRINK, and a couple other commands.


*
 
	CREATURES:

	There are 10 creatures or other characters you can interact
with.  You may talk to them with the command TALK.  You can interact
in other ways, as well.  These are the characters from the novel.  
They will behave in roughly the same way as they do in the novel.
Some pose danger, some can help you, and some are merely there.

	SIZE:

	You will discover that your size can change in this game.  You
start out your normal size, and then may grow or shrink, depending on
your actions.  At times, you will have to be very small to accomplish
certain tasks.  But be aware that the larger you are, the better your
chances of evading death.  Also, when you are very large, there is no
weight restriction on what you can carry.  When you are tiny and you
encounter a danger, your chances of survival are pretty slim.  As you
play, you will learn, as Alice did, to manipulate your size to suit
your circumstances.
*
 
	POINTS:

	Points are granted as follows:  1 per each new place you go,
(there are 82), charity points for being kind or generous, power points
for winning in a conflict or otherwise wielding power, and ingenuity 
points for figuring something out.  Ingenuity points are the most 
important, as these can be accumulated only if you're heading towards 
winning the game.

	Winning consists of finding a particularly valuable object and
returning home with it.  You will soon know what that object is.  Along
the way, there are many adventures to be had, and many places to see.
Explore everything and try what you will.  There is no maximum number 
of points, but a very good score is 200.  You can win the game with less,
however.

	SAVING & RESTORING:

	If it's time for dinner or your boss is coming, you can save
a game in progress by typing SAVE at the prompt.  When you wish to
*

resume the game, type RESTORE and you will be back where you were when
you saved it.  You have to have gone a certain distance before saving
is possible, specifically down the rabbit's hole and past the hallway 
into wonderland.  Saving a game requires 1340 bytes of disk space.

	COMMANDS:

        In order to accomplish anything in Wonderland, you must speak
the language.  Of course, the vocabulary is limited.  As in other
such games, a verb telling what action you wish to take, and a noun,
which is the object of the action, is the most direct sort of command.
You may type in longer commands, if you wish, but a compound command
such as TAKE THE KEY AND PUT IT IN THE POCKET will not produce the 
desired result.  In this case, you would now be holding the key, but
it will not be in your pocket.  A command such as CLIMB UP A TREE will
work, as will KICK THE QUEEN IN THE BELLY.  You will discover soon
enough how the command structure works--as well as its shortcomings.
This program understands almost 200 words.

*
        Typing HELP (or H) at any time will give you a short list of the
most common command verbs, such as these:    

		TAKE	 TALK       THROW         EXIT
		DROP     POCKET     HIT           LOOK
		WEAR     REMOVE     KICK          CUT
		GIVE     EAT        READ          KNIFE
		GO       DRINK      INVENTORY     RIDE
		ENTER    HINT       QUIT          PLAY
	
There are quite a few other verbs recognized by the program, but I'll
let you figure those out for yourself.  I'll also let you figure out
the nouns that go with them.  Here are a few commands in more detail:

	GO - such as GO WEST, but typing the first letter of the 
	     direction (N,S,E,W,U,D) will produce the same result

	ENTER - this will work when there's an obvious place to enter
             from your current position, such as a building

	EXIT - this will work when there's an obvious place to exit
	     from your current position
*

	LOOK - use this one to see the description of your current
	     location in case you've forgotten where you are

	INVENTORY - may be abbreviated to "I" and will show you a
	     report of your holdings

	READ - this one reads a passage from Lewis Carroll's novel,
	     verbatim, chosen based on your location.  You must, of
	     course, be carrying the book to read it.  Some of the
	     passages may be clues.
		
	HINT - will give you a hint in places where your own ingenuity
	     fails.  Try to avoid using this command until after you
	     have exhausted your mental resources, as it will deduct
	     2 ingenuity points from your score.  In some places, no
             hint is given, but the points are still deducted.
			
	QUIT - to exit the game--SAVE first if you wish to return to it


*


PLAYING:

    You may install the AIW files on a hard disk by simply copying them
over.  Make sure you copy them all.  Once you have done this, simply type
AIW, and press RETURN at the DOS prompt.

    You may also leave the files on a floppy disk (make a backup).  The
program is ready to run as is.  Just type AIW, and press RETURN at the
DOS prompt.  NOTE:  If your hardware will not display graphics, type
WONDER1 instead to bypass opening screen.

    While you are playing the game, the program will need to read and 
write information to disk, so you must leave the program disk in while
you play, and you cannot use a copy-protected diskette.  Temporary files
require 133 bytes of disk space.



*

UPDATES:
	
    This revision/update of AIW (version 1.2) includes the addition 
of a HINT command to make the game a little easier to figure out.  
The hints will most likely be enough to solve a puzzle if you have 
worked on it a while, so don't use the hints unless you really need 
help.  Hints deduct 5 points from your score.

    A few bugs have been fixed, and the HELP command is now more helpful.

    The vocabulary of the game has been slightly increased.  I'll leave
it to you to figure that out.


    
                      ENJOY YOUR ADVENTURE!



	
*
@

```
{% endraw %}

## FILE1495.TXT

{% raw %}
```
Disk No: 1495
Disk Title: Alice In Wonderland Text Adventure
PC-SIG Version: 1.1

Program Title: Alice In Wonderland
Author Version: 1.2
Author Registration: $10.00
Special Requirements: None.

ALICE IN WONDERLAND is an adventure game based on Lewis Carroll's
novel, Alice's Adventures in Wonderland.  Although you need not be
familiar with the novel to play, there are occasionally places it would
be helpful.

In this narrative adventure, you type in dialogue and directions as you
wander through Wonderland as Alice, gathering special objects and
talking with the odd creatures and other characters from the novel.

You will discover that your size can change in this game.  You start out
your normal size and then may grow or shrink, depending on your
actions.  At times, you will have to be very small to accomplish certain
tasks.  But be aware that the larger you are, the better your chances of
evading death.  Also, when you are very large, there is no weight
restriction on what you can carry.  When you are tiny and you encounter
a danger, your chances of survival are pretty slim.

Winning consists of finding a particular valuable object and returning
home with it.  Along the way, there are many adventures to be had and
many places to see.  You will need to explore everything.  Suitable
for ages 9 through adult.

File Descriptions:

AIW      EXE  Main program.
WONDER1  EXE  Secondary program.
WONDER2  EXE  Secondary program.
AIW      DOC  Documentation.
WELCOME  COM  Introductory message.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1495

     Volume in drive A has no label
     Directory of A:\

    AIW      DOC      8894   8-13-89   8:15a
    AIW      EXE     46005   8-10-89   8:48a
    FILE1495 TXT      1659   9-13-89  10:26a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   7-31-89   2:46p
    MANUAL   BAT       147   3-02-89  10:00a
    PAGE     COM       325   1-06-87   4:21p
    VIEW     BAT        39   7-31-89   2:46p
    WELCOME  COM     17727   8-10-89   1:41p
    WONDER1  EXE     84351   8-12-89   9:44a
    WONDER2  EXE    118897   8-13-89   8:01a
           11 file(s)     278776 bytes
                           36864 bytes free
