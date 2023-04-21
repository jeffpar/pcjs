---
layout: page
title: "PC-SIG Diskette Library (Disk #911)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0911/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0911"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MIX IT UP MISC. GAMES"

    If you're in a gaming mood, here are four great entertainment programs
    in our library.
    
    NEVADA POKER MACHINE is a simple-to-play, one-player poker game in which
    you may discard one to five unwanted cards of those dealt to you.  The
    payoff odds are shown at the top right corner of the screen, and the
    winnings are shown at the bottom.  If you've ever played a poker machine
    in Las Vegas or Atlantic City, NEVADA POKER MACHINE will be very
    familiar to you.
    
    If poker is not your cup of tea, PRO LOTTO is designed to help you win
    lotteries ranging from a 6/15 through a 6/52 format.  PRO LOTTO lets you
    store all the past numbers you have played and all past winning numbers.
    When choosing a lottery number you can put in your own number or a
    number produced by random generation.  With PRO LOTTO your computer can
    also generate a number based upon the past record of winning lottery
    numbers.
    
    PRO LOTTO can also produce a graphic screen showing what numbers are
    chosen most often, and can find the twelve most popular numbers for both
    you and your state's numbers.  The program will print out the numbers
    you have chosen and the winning numbers from previous games.  PRO LOTTO
    can show the money you have spent on the lottery and the odds of
    winning, and can look for all the matches you have made with the lottery
    for both matching and non-matching dates.
    
    For those more analytical in their entertainment pleasures, and for
    those for whom a text-adventure is more to their liking, MUTANT INVASION
    is for you.  This game puts you inside a science-fiction adventure in
    the year 2000.  You're within a dome that covers the city to protect it
    from the firesky at nighttime.  You can no longer hear the screams of
    the Outsiders, but you know they are very near.  The atmospheric
    radiation storms are slowly quieting.  Although most of the oceanic
    disturbances have run their course, tidal waves, typhoons and minor
    hurricanes occasionally come to claim a few more lives.
    
    You are one of the survivors from the last war.  But no one really knows
    what happened since all the radios, televisions and telephones went
    silent when the sky began to burn.  The Outsiders, as you can guess, are
    not human.  Most people call them mutants.  They have more or less
    become used to living outside the city dome, out in the Burn.  But
    there's no food or water fit for consumption, even for them.  That's why
    they're coming again now.  A few of the mutants have found a way into
    the dome.  Do you feel ready to stop them?  You must find their secret
    entrance and seal it off.
    
    If you're more of a mystery fan than a sci-fi fan, the second adventure
    game is for you.  INTERCEPT starts with you on the street in front of a
    car and a phone booth.  If you look closely at your possessions, you see
    you have an ID card (not for buying alcohol) and a watch.  Now, if you
    type in the correct command, you can get into the car.  Once you're
    inside the car, what do you do?  Get out, go into the phone booth, call
    your friend to find out how to start the car?  You'll have to discover
    what to do on your own.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES911.TXT

{% raw %}
```
Disk No:  911
Program Title:  MIX IT UP
PC-SIG Version: V1.2

If you're in a gaming mood, this disk is for you.  It contains four of
the better entertainment programs in our library, and has to be played
to be believed.

NEVADA POKER MACHINE is a simple-to-play, one-player poker game in which
you may discard one to five unwanted cards of the cards dealt to you.
The payoff odds are shown at the top right corner of the screen, and the
winnings are shown at the bottom.  If you've ever played a poker machine
in Las Vegas or Atlantic City, NEVADA POKER MACHINE will be very
familiar to you.

If poker is not your cup of tea, PRO LOTTO is designed to help you win
lotteries ranging from a 6/15 through a 6/52 format.  PRO LOTTO lets you
store all the past numbers you have played and all past winning numbers.
When choosing a lottery number you can put in your own number or a
number produced by random generation.  With PRO LOTTO your computer can
also generate a number based upon the past record of winning lottery
numbers.

PRO LOTTO can also produce a graphic screen showing what numbers are
chosen most often, and can find the twelve most popular numbers for both
you and your state's numbers.  The program will print out the numbers
you have chosen and the winning numbers from previous games.  PRO LOTTO
can show the money you have spent on the lottery and the odds of
winning, and can look for all the matches you have made with the lottery
for both matching and non-matching dates.

For those more analytical in their entertainment pleasures, and for
those people a text-adventure is more to their liking, MUTANT INVASION
is for you.  This game puts you inside a science-fiction adventure in
the year 2000.  You're within a dome that covers the city to protect it
from the firesky at nighttime.  You can no longer hear the screams of
the Outsiders, but you know they are very near.  The atmospheric
radiation storms are slowly quieting.  Although most of the oceanic
disturbances have run their course, tidal waves, typhoons and minor
hurricanes occasionally come to claim a few more lives.

You are one of the survivors from the last war.  But no one really knows
what happened since all the radios, televisions and telephones went
silent when the sky began to burn.  The Outsiders, as you can guess, are
not human.  Most people call them Mutants.  They have more or less
become used to living outside the city dome, out in the Burn.  But
there's no food or water fit for consumption, even for them.  That's why
they're coming again now.  A few of the mutants have found a way into
the dome.  Do you feel ready to stop them?  You must find their secret
entrance and seal it off.

If you're more of a mystery fan than a sci-fi fan, the second adventure
game is for you.  INTERCEPT starts with you on the street in front of a
car and a phone booth.  If you look closely at your possessions, you see
you have an ID card (not for buying alcohol) and a watch.  Now, if you
type in the correct command, you can get into the car.  Once you're
inside the car, what do you do?  Get out, go into the phone booth, call
your friend to find out how to start the car?  You'll have to discover
what to do on your own.

Usage:  Entertainment.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $2.00 for POKER, $10.00 for PRO LOTTO.

File Descriptions:

-------- ---  NEVADA POKER
POKER    COM  Main program.
-------- ---  PRO LOTTO
CONVERT  EXE  Creates needed files for ProLotto
PL       EXE  Main program
PLINSTAL EXE  Installation program
PROLOTTO DOC  Documentation
-------- ---  MUTANT INVATION
MUTANTS  BAT  Batch file to start game.
MAIN     EXE  Main program.
MUTANT   EXE  Presentation screen.
README   DOC  Information file.
README   BAK  Backup of info file.
-------- ---  INTERCEPT
INTERC   BAT  Batch file to start game.
INTER    EXE  Main program.
INTERCEP EXE  Presentation screen.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## README.DOC

{% raw %}
```






                                     INTRODUCTION

     It is the year 2000 and the worst is almost over.  We have constructed a
dome over the city to protect us from the firesky at nighttime.  We can no
longer hear the screams of the Outsiders, yet we still know they are very near.
The atmospheric radiation storms are slowly quieting.  Although most of the
oceanic disturbances have run their course, tidal waves, typhoons and minor
hurricanes occasionally come to claim a few more lives.

     We are the survivors.  Are we the lucky ones?  People say there was a huge
war or something a short time ago.  But no one really knows what happened since
all our radios, televisions and telephones went silent when the sky began to
burn.  No one really knows for sure.

     The Outsiders.  You really can't call them human.  Most people here call
them Mutants.  They have more or less gotten used to living outside the city
dome, out in the Burn.  But there's no food or water fit for consumption, even
for them.  That's why they look and act so fierce and weird -- like the
wretching firesky above the yellow edge of the Burn.  That's why they're coming
again now.

     A few of the Mutants have found a way into the city dome.  If many more of
them break in, we shall be overpowered and will have to evacuate the dome.  And
then what?  Become Mutants ourselves?

     But you can't let that happen!  You must find their secret entrance and
seal it off!  No one else has been able to do this.  But you can.  We know you
can.

                               Loading Instructions

     Insert program disk in drive A. Type "GO" and press <ENTER>.


                                   A Few Hints

     The hints that follow have been collected from the journals recovered from
the charred remains of former city dome defenders.  Their observations should
be of some help to you in your mission, but they are far from complete.

     (1) Like most adventure-type games, you read your computer's scenario,
type your commands on the keyboard and then watch how the computer reacts to
your commands.  The commands you type may be up to 30 characters in length.
But the computer understands only the first and last words in any command.  For
example, "fill out the forms" would translate into "fill forms".  The best idea
is to enter only two-word commands, using a verb and a noun such as GO UP, GET
BAR, and the like.

     (2) You receive your command nouns from the computer.  Included in the
computer's scenario are certain objects which you may use in some way or
another as means to your ends.  Read your video screen carefully or the scene

                                          1






may change without your noticing it.

     (3) Here is an alphabetical list of some of the command verbs that you may
use.  This is not an exhaustive list; you may certainly try other command
verbs.  Again, these are all that we could gather from the charred remains of
your predecessors:

               charge     fill     inventory     remove     transport
               buy        feed     insert        open       score
               chop       go       kill          push       south
               dig        give     load          read       turn
               drink      help     look          remove     unlock
               east       quit     north         say        west

     You may abbreviate certain commands.  For example, to enter the command
"GO EAST" you may simply press <E> and <ENTER>.

     (4) You will find something very interesting about the greenhouse.  How
you get there, what you'll find there and what you do with whatever you find
there, we just can't say.  Remember, those charred journals...

     (5) Do not give up.  Perhaps you can succeed if you keep track of you
moves by making a map or some other diagram for reference.

     (6) If you don't succeed within the amount of time alloted by your
computer, the Mutants will invade and all will be lost.  Forever.

     (7) Have fun!

























                                          2

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0911

     Volume in drive A has no label
     Directory of A:\

    CONVERT  EXE     10816   4-17-88   6:17p
    FILES911 TXT      4137   1-04-88  12:08p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1387   7-07-88   2:51p
    INTER    EXE     43493  10-25-87   7:37a
    INTERCEP EXE      3679  10-24-87   5:24p
    INTERS   BAT        37  10-24-87   5:33p
    MAIN     EXE     37834  10-25-87   7:50a
    MUT      BAT        34  10-24-87   5:53p
    MUTANT   EXE      3648  10-04-87   2:59p
    PL       EXE     60824   5-16-88   3:31p
    PLINSTAL EXE     25660   4-28-88  12:18p
    POKER    COM     38784   9-09-87  12:16a
    PROLOTTO DOC     34202   5-16-88   3:24p
    README   BAK      4215  10-04-87   5:54p
    README   DOC      4216  10-25-87  12:25p
           16 file(s)     273004 bytes
                           38912 bytes free
