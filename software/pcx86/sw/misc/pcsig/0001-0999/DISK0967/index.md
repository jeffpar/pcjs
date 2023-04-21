---
layout: page
title: "PC-SIG Diskette Library (Disk #967)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0967/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0967"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ADVENTURE AND MUSIC COLLECTION"

    You are in a spaceship exploring the Orion Nebula for NASA.  Your
    mission is to explore the three closest planets to your spaceship and
    collect one animal, one vegetable, and one mineral.  How will you be
    able to tell?  If you encounter an intelligent life form, how will you
    know?  NASA has instructed you to capture it alive.  Good luck!
    
    A text adventure game that takes you to the heart of Africa. In DARK
    CONTINENT, you are on a safari expedition in search of King Solomon's
    legendary diamond. Unfortunately, your native followers have mutinied
    and left you lost in the wilderness without a map. Not only must you
    find the diamond, but also, your way back to England. (And try not to
    get eaten by wildlife on the way!)
    
    LAP DULCIMER TUNER AND SHEET MUSIC SAMPLER has five traditional songs
    arranged for lap dulcimer in DAA tuning and an electronic tuner with
    instructions for beginners on how to tune the dulcimer.  The five songs
    are "Amazing Grace," "Boil Them Cabbage Down," "I'll Fly Away,"
    "The Frozen Logger," and "Happy Endings on the Banks of Ohio."
    
    The music screens can be printed with the Shift and PrtScr keys.
    The dulcimer tuning program helps beginners learn to tune their
    instruments with an electronic tuner.  Instructions are included in the
    program, and tones can be repeated if desired.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES967.TXT

{% raw %}
```
Disk No:  967
Program Title:  ADVENTURE and MUSIC
PC-SIG version: 1.2

NEBULA and DARK CONTINENT are two text adventure games played with one
or two-word commands.  In NEBULA, you are in a spaceship exploring the
Orion Nebula for NASA.  Your mission is to explore the three closest
planets to your spaceship and collect one animal, one vegetable, and one
mineral.  If you encounter an intelligent life form, NASA has instructed
you to capture it alive.  In DARK CONTINENT, you are on a safari
expedition in Africa in search of King Solomon's legendary Diamond.
Unfortunately, your native followers have mutinied and left you lost in
the wilderness without a map.  Not only must you find the Diamond, but
your way back to England.

LAP DULCIMER TUNER AND SHEET MUSIC SAMPLER has five traditional songs
arranged for lap dulcimer in DAA tuning and an electronic tuner with
instructions for beginners on how to tune the dulcimer.  The five songs
include "Amazing Grace," "Boil Them Cabbage Down," "I'll Fly Away," "The
Frozen Logger," and "Happy Endings on the Banks of Ohio."  The music
screens can be printed using screen dumps.  The dulcimer tuning program
helps beginners learn to tune their instruments with an electronic
tuner.  Instructions are included in the program, and tones can be
repeated if desired.

Usage:  Text Game / Dulcimer Tuning

Special Requirements:  None.

How to Start: Type GO (press enter).

Suggested Registration: $20.00 for the text adventures and $5.00 for
the MUSIC SAMPLER.

File Descriptions:

NEBULA   EXE  The game NEBULA.
DARKCON  EXE  The game DARK CONTINENT.
README   BAT  Batch file to print out README.TXT.
README   TXT  Documentation.
OPEN     PIX  Data file.
CPI      EXE  Main program.
BYEBYE        Graphics file.
SCRIPT   PIX  Data file.
HELLO    PIX  Data file.
SAMPLE        Graphics file.
READ     ME   Program and file description.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## README.TXT

{% raw %}
```
















                                  Nebula (tm)
                              Dark Continent (tm)




              You may copy and FREELY share this program with others.
         To become a registered user of Nebula or Dark Continent,
         and to receive a FREE COPY of ANY ONE of our adventures,
         send $15.00 to:

                                Conrad R. Button
                               13807 S.E. 282 St.
                                Kent, WA 98042



                     (C) Copyright 1986 by Conrad Button
                              All Rights Reserved



































                               COPYRIGHT NOTICE


                      (c) Copyright 1986-88 Conrad Button
                            - All rights reserved -


              You are granted a limited license to use Nebula and
         Dark Continent.  It may be used or copied only in
         accordance with the terms of this license outlined in the
         section "Restricted Permission to Copy".

              Information on this disk is subject to change without
         notice and does not represent a commitment on the part of
         Conrad Button.  Conrad Button may make improvements and/or
         changes to this disk or to the product(s) and/or the
         program(s) described in this disk at any time.

              This product could include technical inaccuracies or
         typographical errors.  Changes are periodically made to the
         information herein.  Such changes may be incorporated in new
         editions of the publication.

              Nebula and Dark Continent are trademarks of
         Conrad Button.









































                               TABLE OF CONTENTS


               How to Start a Game  . . . . . . . . . . .  4

               How to Play a Game . . . . . . . . . . . .  4

               Hints on Playing Games . . . . . . . . . .  5

               Restricted Permission to Copy  . . . . . .  6

               Why Pay for the Games  . . . . . . . . . .  7

               Game Series Information  . . . . . . . . .  8




















































                             HOW TO START THE GAME

         To start Nebula, use the following instructions.

              1.  Start your computer in the usual manner.
              2.  Insert the game disk into Drive A.
              3.  Type A: and press Enter.
              4.  Type NEBULA and press Enter.
              5.  Follow the instructions on the screen.

              To start Dark Continent you would use the same steps
         as shown for Nebula, only at step 4 you would type DARKCON
         instead of NEBULA.  If you are using a monochrome monitor
         or a one color graphics monitor you should add an M to the
         end of step 4, (e.g. NEBULA M).  This will allow the screen
         to be more readable on these monitors.



                                  HOW TO PLAY

              A text adventure is a fictional novel in which you
         are the main character.  You will be given a quest which you
         must successfully complete.  You may also be asked to
         collect treasures during your travels.

              Your PC will become your guide.  It will tell you what
         it sees and hears, and will obey your commands, (most of the
         time).  Although it speaks fluent English, it has trouble
         understanding long sentences.  Please limit your commands to
         not more than two words, with the verb as the first word
         (e.g.  throw ball).  If the computer does not know or
         understand a word, it will tell you so.  In that case, please
         use another word of similar meaning.

              We strongly advise you to build a map during your
         travels so that you can easily return to previously explored
         areas.

              The computer will give you the following information at
         the start of each round of play:

              1.  A description of your current location.
              2.  Items that you can see at this location.
              3.  Directions in which you can move (n-north, s-south,
                  e-east, w-west, u-up, d-down)
              4.  Treasures will be marked by an '*' before and after
                  the word.

         You must then respond by typing the action you wish to
         perform.






                                      -4-








                                 * * HINTS * *

         Most actions require two words such as:
              Light torch
              Get ruby
              Drop axe
              Examine door

         However, some actions need only one word:
              Help - for clues or advice
              Quit - to stop playing

         Others only need a single letter:
            U,D,N,S,E,W - which mean go up, go down, go north, etc.
            L - look to see where you are
            I - list your inventory.

         To save your current status so that you can resume play
         later, type SAVE GAME.






































                                      -5-








                         RESTRICTED PERMISSION TO COPY

              Nebula and Dark Continent are not public domain
         programs, and never have been.  They are Copyright(C) 1986,
         by Conrad Button.  The conditions under which you may copy
         the Nebula and Dark Continent programs and documentation
         are clearly outlined below.
         WARNING!!!  The author intends to vigorously prosecute
         copyright violations.

         INDIVIDUALS AND COMPUTER CLUBS
              Private individuals and computer clubs are granted
         permission by the author to freely copy the Nebula and
         Dark Continent disk for non business use as long as the
         disk is not modified in any way.  You may give the disk to
         friends, upload the files to electronic bulletin boards, or
         distribute the disk through computer clubs.  However, you may
         not sell the disk for profit.  User groups may charge a fee
         to cover the actual cost of the disk and of administration.
         This fee may not in any case exceed $10.00 total (equivalent
         U.S.  dollars).  Exceptions to these rules must be received
         in writing from Conrad Button.

         NO RENTING OR LEASING
              Nebula and Dark Continent may not be rented or
         leased under any circumstances.

         EXTRA COPIES
              When multiple copies are required, Nebula and Dark
         Continent are available at quantity discounts.  Write
         Conrad Button for quantity prices.


























                                      -6-








                      SO WHY PAY $15.00 TO REGISTER?



              When you pay for Nebula or Dark Continent you
         participate in User-Supported software.  That means you join
         thousands of people who get good quality software at
         affordable prices.  Here are more reasons to register by
         paying $15.00:

              - The luxury of trying out a program before you buy it
         is rare.  When you register (by sending in your money) you
         are saying, "I support buying software this way; and truly
         want to help continue this trend of keeping prices down."

              - Registering also means you will be notified about
         updates to Nebula and Dark Continent, as well as other
         adventures.

              - If you are using the product, you should pay for it.
         What it boils down to is this - it's the right thing to do.

              - As an extra incentive, you will receive a FREE COPY
         of ANY ONE of our other text adventures when you register.
         And if you register both adventures ($30), you will receive
         FREE COPIES of any TWO adventures!































                                      -7-








                     BUTTON'S EDUCATIONAL AND ADVENTURE GAMES

              A whole new world of adventure is at your fingertips.
         Let our software and your PC take you into previously
         unexplored regions where you will experience new challenges,
         confront danger, and find untold treasures.

              Conrad Button offers a Learning Game Series and an
         Adventure Series.  The Learning Series can help you improve
         your geography skills by taking you on expeditions to Africa
         and Asia.

              THE ASIAN CHALLENGE -- As a Special Senate Investigator,
         you have been sent to Asia on a mission to gather important
         information.  You must report to the Foreign Aid Committee
         shortly on whether or not to grant additional funds to the
         needy countries of the continent.  Learn about different
         Asian countries and their location as you travel.  You must
         hurry because there is not much time before the committee
         will meet.  (Learning Series)

              AFRICAN SAFARI -- You are the senior photographer for
         the International Geographic Magazine.  You have been sent to
         Africa to photograph the people, land and animals of the
         continent.  As you trek the high plains of Africa you will
         learn many different things about the people and geography
         of this vast continent.  (Learning Series)

              NEBULA -- You are a NASA explorer sent to investigate a
         newly discovered star system.  Your mission is to collect
         specimens from the new galaxy.  Will you be able to complete
         your mission or will you be engulfed by the unknown perils of
         the universe?  (Novice)

              DARK CONTINENT -- You have traveled to darkest Africa in
         search of King Solomon's Diamond.  But after 3 days, your
         native bearers desert you and take your money and supplies.
         Will you survive and find the diamond, or will you be
         swallowed by this vast continent?  (Intermediate)


















                                      -8-








              RED PLANET -- The Federation of Earth has sent you to
         the planet Mars to secure the lost treasures of Aukbaa.  Upon
         achieving planetary orbit you find that your fuel is
         depleted.  Can you acquire the Lost Treasures of Aukbaa and
         return home?  (Advanced)

              TIME TRAVELER -- The year is 2285.  The people of the
         Earth are dying from a mysterious plague.  A now extinct
         plant could provide the much needed cure.  Time Travel is
         your only hope.  Have you ever imagined the thrill of
         traveling back in time to visit the Old West, to participate
         in the American Revolution, to explore Ancient Egypt and the
         Age of the Dinosaur?  TIME TRAVELER will transport you to
         these bygone days.  (Expert)

              SPECIAL AGENT -- The President of the United States has
         sent you on a mission to the Soviet Union.  You are to locate
         and photograph their new ballistic missile, the SS-X-27.
         Perhaps you desire to serve your country as a SPECIAL AGENT
         to the President, performing a secret mission deep within the
         Soviet Union.  (Expert)

              SANCTUARY -- A nuclear war has devastated the Earth.
         You are one of the few remaining survivors.  Gangs of mutants
         roam the land.  You must find a sanctuary to ensure your
         survival.  Have you ever wondered what civilization would be
         like following a nuclear war?  Would there be a SANCTUARY for
         protection against the mutated beings inhabiting this world?
         (Master)

              RAIDERS OF THE STAR TEMPLE -- As a Professor of Archeology
         you have specialized in the ancient Mayan culture.  You recently
         read an article concerning the possible existence of a lost Mayan
         temple somewhere near Chichen Itza on the Yucatan Peninsula.  And
         you have heard an Indian legend which tells of a Star Temple
         containing a fabulous treasure of diamonds.  You are resolved to
         find this temple, if it truly exists.  (Master)

              AVENGER OF RUBICON -- Your King and fellow warriors have been
         slain. You have been severely wounded.  As you stagger from the
         battlefield, you vow to avenge this carnage.  You will seek out
         and destroy the perpetrator of this foul deed - Lugor the Evil
         Presence.  You are about to face the greatest challenge of your
         life!  (Grand Master)

              ADVENTURE HINT BOOK -- The hint book is designed to
         provide clues and helpful hints.  This book covers all of the
         adventure game series (learning series excluded .









                                      -9-












                                   ORDER FORM

                                              Price      Price
         Item                       Qty       Each       Extended
         ----------------------------------------------------------
         Raiders of the Star Temple
         & Avenger of Rubicon      _____     $29.95      $_________

         Sanctuary &
         Special Agent             _____     $22.50      $_________

         Time Traveler &
         Red Planet                _____     $22.50      $_________

         Dark Continent &
         Nebula                    _____     $22.50      $_________

         African Safari &
         The Asian Challenge       _____     $29.95      $_________

         Adventure Hint Disk       _____     $ 8.50      $_________
          (Includes ALL but
           Learning Series)
                                           Subtotal      $_________

                                 Shipping & Handling     $____2.50_

                                              TOTAL      $_________

         Available on 5 1/4" disk only.
         All purchase orders must be prepaid. NO COD's.
         Credit Card orders NOT accepted.

                  Please send your check or money order to:

                               Conrad Button
                            13807 S.E. 282 St.
                              Kent, WA 98042















                                     -10-





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0967

     Volume in drive A has no label
     Directory of A:\

    BYEBYE           16399  12-01-86  12:26p
    CPI      EXE     54400   9-05-86   2:13p
    DARKCON  EXE     80322  11-08-88  12:11a
    FILES967 TXT      2039   1-04-88   1:38p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1079  12-15-87  11:41a
    HELLO    PIX       834   1-01-80  12:35a
    NEBULA   EXE     95968  11-09-88  12:54a
    OPEN     PIX     15506   1-01-80  12:53a
    READ     ME        426   1-01-80  12:32a
    README   BAT      1024  12-24-87   5:17a
    README   TXT     15232  11-09-88   6:50a
    SAMPLE           16399   1-01-80   1:17a
    SCRIPT   PIX      6371   1-01-80  12:35a
           14 file(s)     306037 bytes
                            8192 bytes free
