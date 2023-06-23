---
layout: page
title: "PC-SIG Diskette Library (Disk #2930)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2930/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2930"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## AQ.DOC

{% raw %}
```

   Alive Software
   Presents ...             A N I M A L   Q U E S T

   Welcome, you are about to experience Nature through very different eyes.
   ANIMAL QUEST is a Fun Game for any age.  First you select what animal you
   like to become and then you try to cross your habitat collecting as many
   Energy Tokens as possible by capturing your prey while avoiding your
   Predators and outsmarting your Competitors.

   ANIMAL QUEST is a never ending adventure in the fascinating world of
   Nature.  All animals are placed randomly at different screens so that
   each game is unique and unpredictable, challenging you every time.

   ANIMAL QUEST is also a realistic simulation of Food Chain Ecology.  The
   rules of the game are based on factual Prey and Predator relationships.
   A truly Educational game that balances Gaming with Learning.  To play the
   game you must first learn what is your prey and who are your predators.

   ANIMAL QUEST features three Different groups of animals to choose from:
   Northern Forest Animals, Ocean Animals and Jungle Animals.

   Three Difficulty Levels to choose from, each providing increasingly more
   challenging games,  score-keeping, on-line help, easy Icon-based user
   input and extensive information on each animal and plant.  Its Colorful
   graphics and realistic sound effects will surprise you !!!

   Requires: IBM PC or compatible, 512K of memory, EGA or VGA graphics.
   Options : Super VGA support, Mouse support and Sound Card support.

   The ANIMAL QUEST source code, object code, library images and manuals on
   paper or on disk, are (C) copyright 1991 by Alive Software,  All Rights
   Reserved.  Concept and Game Design by Bill Dedes and Nancy Ayash.

                                   INDEX

          1..................   DISCLAIMER
          2..................   DISTRIBUTION
          3..................   SYSTEM REQUIREMENTS AND OPTIONS
          4..................   GAME SETUP
          5..................   GAME OPERATION
          6..................   DOCUMENTATION AND ACKNOWLEDGEMENTS
          7..................   SHAREWARE VERSION NOTES


   1.                              DISCLAIMER

   This program is provided "as is" and it is without warranty of any kind
   that it will  work  correctly in any or all  situations.  No  liability
   shall be assumed for direct or  consequential  damage caused by the use
   of this software.  The only claim  Alive Software  makes is  that there
   are no  intentional bugs or  fatal errors in any  original copy  of the
   program that you received directly from Alive Software.

                                Page 1 of 5

   2.                          DISTRIBUTION

   ANIMAL QUEST is distributed as Shareware: if you like the program and
   you would like to receive the latest version, additional games, Sound
   card support and Mouse support, please become a registered user. List
   or print file  ORDER.DOC for more information.

         1.   ALIVE.DOC   ........... Text, other Alive Software programs
         2.   AQ.DOC      ........... Text, Documentation ( This file )
         3.   README.DOC  ........... Text, Important information
         4.   ORDER.DOC   ........... Text, Order Form
         5.   AQ.EXE      ........... ANIMAL QUEST Program
         6.   AQ.LST      ........... List Of games
         7.   AQ.GGL      ........... Program Graphics and Data
         8.   SETUPAQ.EXE ........... Setup Program
         9.   FOREST.GDL  ........... Data for Game 1
        10.   FOREST.GGL  ........... Data for Game 1

   Distribution of  this program  is encouraged as long as  the  following
   Shareware principles are observed:  All of the above mentioned 10 files
   should be included in the distributed disk and should not be altered in
   any way.  Alive Software  authorizes the  distribution  ONLY of the  10
   above mentioned files. Any additional picture files will be distributed
   only to Registered users Exclusively and Directly by Alive Software.
   If archiving this program for  BBS use or  library use,  please include
   all files and use the name: AQUEST1, ( for example: AQUEST1.ZIP)
   this will provide consistency for future updates.


   3.              SYSTEM REQUIREMENTS AND OPTIONS

   REQUIRES:  IBM PC or compatible with 512K memory, EGA or VGA ( 16 color )

   OPTIONAL: * Super VGA Graphics card with 512K Video Ram and monitor able
               to display in 800x600 resolution: ATI, Genoa, Paradise, Tseng
               Labs, Video 7  or compatibles are supported.
             * Microsoft Mouse or compatible.
             * Sound Effects support for AdLib, Covox, Sound Blaster, Sound
               Commander, PC speaker and Tandy SL/TL internal sound chip.

   4.                             SETUP

   Before you start the game you must run SETUPAQ

   (a) The SETUPAQ program will try to identify your Graphics card and
       highlight the appropriate option.  Select a graphics option.
   (b) Select the sound board or no sound option.
   (c) Then select the pointing device option, Mouse or Keyboard. To use
       the mouse, a mouse driver program must be installed beforehand.
   (d) Finally select Save Setup.  This will create a batch file named
       QUEST.BAT   The purpose of QUEST.BAT is to simply pass the above
       selected preferences to the program, without you having to do that
       every time you run the program.

                                Page 2 of 5

   5.                          GAME OPERATION

     5.1   GENERAL
   ---------
   Keyboard:  Use the Up, Down, Left and Right arrow keys to move around
   ---------  and press <Enter> or <Spacebar> to select.
   Mouse  :   To select an option just point the mouse cursor on it and
   ---------  click.

   --------
   TO START   To start the game just type  QUEST  and press <Enter>
   --------   All of the ANIMAL QUEST files must be  present at your current
              disk drive and directory, otherwise  you will get an error.
   Then you will see the opening screen and hear the music theme.  You may
   press a key or press a mouse button to skip through it next time.
   Then you select the animal group to use: Forest, Ocean or Jungle animals.
   Now you are ready to enter the animal Kingdom.

   ----------
   NEW GAME    Then you select which animal you like to become from three
   ----------  Levels of difficulty.

   1. Easy Level:  These animals are Strong or Fast predators and therefore
      they have few or no enemies. In this Level just  follow, your hunting
      instincts. This level is recommended for young children or beginners.
   2. Medium Level :  These animals are mini predators with some enemies
      and competitors, so it takes more logical thinking to stay alive.
   3. Difficult Level : These animals are at the bottom of the Food chain
      and therefore constantly fighting for survival.  Try this Level for a
      real Challenging game.  You are neither strong nor Fast.  Your only
      weapons are your intelligence and your luck.

     5.2                         CONTROLS
   :--------------:
   : QUESTIONMARK :  On-line help explaining the game and operation.
   :-F1-----------:

   :--------------:  Food Chain information about animals and plants.
   :    CHAIN     :  Select this option and point at any animal on the
   :-F2-----------:  board to learn about its prey and predators.

   :--------------:  Facts about animals, plants or places of the current
   :   ZOOM LENSE :  game habitat.  Exploring facts about the animals is
   :-F3-----------:  essential for learning and playing the game better.

   :--------------:
   :  MUSIC NOTES :  Toggles the sound ON or OFF, if sound was activated
   :-F4-----------:  to begin with.

   :--------------:  Toggles the Grid ON or OFF.  When the Grid is ON the
   :    FENCE     :  game plays like a board game, so you can focus on the
   :-F5-----------:  logic.  When it is OFF the game plays faster, like an
                     arcade game.  Grid ON is recommended for beginners.

                               Page 3 of 5

   :--------------:
   :  THUNDERBOLT :  Breaks the current game and starts a new one.
   :-F10----------:

   :--------------:
   :   STOP SIGN  :  Quits the game and exits to the system.
   :-ESC----------:

   5.3                    THE AIM OF THE GAME

   Become one of your favorite animals and try to survive, capture as many
   prey animals as you can while avoiding your predators.  Every time you
   capture an animal you get Energy Tokens ( Calories ) .  When you are
   captured by a predator you loose twenty Energy Tokens, so the only penalty
   is that your final score will not be as high.  You move from West to East.
   When you reach the end of a screen you move to the next one.  There is a
   total of twelve screens to cross.  In the last screen your family will be
   waiting for you and the highest scores are recorded in the Hall Of Fame.

   SCORING :  Your current Score is displayed at the  bottom of the screen.
   The accumulated Energy tokens stack up until you have collected over 60,
   then you are fully Energized and can move Diagonally as well, thus
   suprising your prey or escaping your enemies more easily.

   TIPS :
   (a) Don't overlook the importance of the "skip a turn" option.  Use it
   whenever you are stuck or when any other move will result in your capture.
   To "skip a turn",  for keyboard use: press <Spacebar>, for mouse use:
   click on your animal itself.
   (b) If a predator blocks your path, get close enough, so when it follows
   you, try to lead it away from the path, turn around and escape.  If more
   than one predators are near by, try to distract them one at a time.

   5.5                  ANIMAL QUEST'S  GAME PHILOSOPHY

   (A) Redeeming value: you Play and Learn facts about basic Ecology.
       It encourages exploration of Nature and further reading.
   (B) Positive and Socially responsible:  Depicts Conflict but no Violence.
       You identify with the animal's struggle to survive by selecting any
       animal you wish, except Man (This would defy the purpose of the game)
   (C) Extraordinary use of Graphics and Sound to create the illusion of life.
   (D) Challenges your Logic skills, not your mechanical reflexes.
   (E) A Game for any age:  Select a level according to your capability.

    6.                 DOCUMENTATION AND ACKNOWLEDGEMENTS

    If  you have a printer,  please print out and read this documentation
    file  AQ.DOC   Simply type:   COPY AQ.DOC  PRN    at the  DOS  prompt.

    Portions of this program (c) Copyright by Genus Microprogramming, Inc.
    Bibliography; Western Forests by Stephen Whitney, The world of fish by
    Franco De Carli, Encyclopedia of The Animal Kingdom by Maurice and
    Robert Burton, Great Book of the Animal Kingdom by Arch Cape Press.

                                Page 4 of 5

    7.                 SPECIAL NOTES FOR SHAREWARE VERSION

   ANIMAL QUEST is distributed as Shareware, that is, you can try it before
   you buy it.  Here is a list of benefits you get by ordering the complete
   ANIMAL QUEST series from Alive Software for ONLY $  22  ( U.S. Dollars )

 * YOU GET THE LATEST ENHANCED version of ANIMAL QUEST which includes:
   OCEAN ANIMALS:   Dive into the unexplored waters of Australia.  An
   ---------------  Exotic world of fascinating and unusal marine animals
   awaits you.  Be a playful Blue Dolphin or a Great White Shark, meet the
   peculiar Clownfish, Seals, Angelfish, Swordfish, Viperfish, Eagle Rays,
   Anglerfish, Eel, Seahorse, Sea Anemones and many other aquatic creatures.
   JUNGLE ANIMALS:  Lions, Cheetahs, and Leopards rule the Jungle, but watch
   ---------------  out for the poisonous spear of the Pygmy.  Elephants,
   Aardvarks, Gorillas, Termites, Buffalos, Zebras, Hyenas and many more.
   Experience the sounds and sights of the Tropical Rain Forest.
   FOREST ANIMALS:  The Latest version of the Northern Forest animals,
   ---------------  Enhanced with Sound effects and detailed graphics.

 * YOU GET MOUSE support for a Microsoft compatible Mouse.

 * YOU GET DIGITIZED SOUND EFFECTS and drivers, for animals that vocalize:
   Wolfs howl, Lions roar, the Hunter shoots, Whales sing, Bears, Frogs,
   Tigers, Rattlesnakes etc, make sounds as they capture prey.  Now you
   can add sound dimension to the visual one.  You can hear the animals
   clearly, either through the IBM PC speaker with no extra hardware, or
   through one of Sound Card options listed in file README.DOC

 * YOU GET ZOOM GRAPHICS.  Due to the large size of the High-resolution
   Zoom graphics, this Shareware version does not include all the Zoom
   graphics shown when the "Magnifying glass Icon" is selected.

 * Super VGA graphics support comes with all the additional games of this
   series. We currently support most of the major Super VGA chipsets.  See
   file  README.DOC for a complete list of all supported Super VGA cards.

 * With your order , you will also get more FREE Shareware from Alive
   Software, our catalog, newsletter, new product announcements and low
   cost updates.

 * Registered users Get TECHNICAL support through phone, mail, E-mail or
   our BBS.  If ANIMAL QUEST is supported by many users, we will add more
   animal habitats to this series in the near future.  Such as Swamp animals,
   Arctic animals, Desert animals, Insects or other ones suggested by you.

   For Information print or list our catalog, file ALIVE.DOC.  It includes
   detailed descriptions of our programs.  For additional information,
   Write to: ALIVE SOFTWARE, P.O. BOX 4004, SANTA CLARA, CA 95056   U.S.A.
   Send Prodigy E-mail to the programmer, Bill Dedes,  ID #  RGCP92A

   For Information on how to contact us or on how to Order, print or list
   and fill out our order form  ORDER.DOC  and mail or fax it to Alive.

                   Thank you for Supporting Shareware.

                                Page 5 of 5



```
{% endraw %}

## ORDER.DOC

{% raw %}
```

       A L I V E    S O F T W A R E    O R D E R    F O R M         R010192

    * Get the latest Registered version of the programs and a printed manual
    * FREE additional ALIVE Shareware with your order.  Try Our latest
    * FREE Technical Support through Mail, BBS or Telephone
    * FREE Newsletter subscription, Catalog and New product announcements

    Your Name: _____________________________________________________

    Address:   _____________________________________________________

    City/State _____________________________________________________
    Zip/Country
               Where did you find this program ?  ___________________

    Specify floppy disk type :   [ ] 5 1/4" 360K      [ ] 3 1/2" 720K
                                 [ ] 5 1/4" 1.2Mb     [ ] 3 1/2" 1.44Mb
    Describe your system.
    [ ] CGA   [ ] Hercules   [ ] EGA   [ ] VGA   [ ] SVGA ?__________
    [ ] Mouse [ ] Joystick   [ ] Hard Disk  [ ] Modem   [ ] Printer

      1. Send ____ copies of CRAZY SHUFFLE $ 20 each       _______
      2. Send ____ copies of VGA CONCENTRATION $ 20 each   _______

      3. Send ____ copies of PC-JIGSAW at $ 15 each        _______
      4. Send ____ copies of VGA JIGSAW at $ 20 each       _______

      5. Send ____ copies of ALIVE SHARKS at $ 20 each     _______
      6. Send ____ copies of VGA SHARKS at $ 20 each       _______

      7. Send ____ copies of MAGIC CRAYON at $ 18 each     _______
      8. Send ____ copies of ANIMAL QUEST at $ 22 each     _______

    ** SPECIAL OFFER : Select any 5 Programs, for only $ 68  _____


    California Residents, add Sales Tax                    _______
    Residents from outside the U.S.A. add $ 5 for Shipping
    U.S.A. residents add $ 3 for Shipping                  _______

                               TOTAL  ( U.S. Dollars )  ____________

    [ ] Check or Money Order enclosed,    [ ] VISA,    [ ] MasterCard

    Credit Card: .__.__.__.__. .__.__.__.__. .__.__.__.__. .__.__.__.__.

    Expiration Date ___/___

    Cardholder's signature Required  _________________________________

  ALIVE SOFTWARE,  P.O. BOX 4004,  SANTA CLARA,  CA , 95056    U.S.A.
  Information: 408-982-0109   Toll Free Orders: 1-800-GET-ALIV
  FAX:         408-982-0780   Free Access BBS :   408-982-9345       Page 1


                                METHOD OF PAYMENT

     ----------
     MAIL ORDER     Fill out and Mail page # 1 of this Order Form along
     ----------     with a Check or Money Order payable to ALIVE SOFTWARE,
                    or along with your VISA or MasterCard information.

                          ..........................
             Send to:     :  ALIVE SOFTWARE        :
                          :  P.O. BOX 4004         :
                          :  SANTA CLARA, CA 95056 :
                          :..................U.S.A.:

     ATTENTION: Customers from countries other than U.S.A. please send

     Either International Money Order in U.S. Dollars PAYABLE to a U.S.A.
     bank or VISA , MasterCard orders only.



     ---------------
     TOLL-FREE ORDER   Have your VISA or MasterCard ready and call
     ---------------   ( U.S.A. Residents only )
                                                       1-800-GET-ALIV or
                                                       1-800-438-2548




     ---------
     FAX ORDER      VISA or MasterCard orders only.
     ---------
                 Fill out and Fax page # 1 of this Order form,
                                      call our FAX:      408-982-0780






                      ALIVE WITH COLOR BBS    408-982-9345

    If you or your friends have a modem call our FREE Access 24-Hour BBS.
    Download the Latest Shareware from ALIVE SOFTWARE and Great GIF
    Graphics files.





                                                                     Page 2



```
{% endraw %}

## README.DOC

{% raw %}
```

         WELCOME TO ANIMAL QUEST  1.00   ( SHAREWARE VERSION )  01-DEC-1991

   This README file answers some common questions and contains important,
   last minute information in addition to documentation file AQ.DOC, order
   form  ORDER.DOC and ALIVE's catalog  ALIVE.DOC

                        ANSWERS TO COMMON QUESTIONS
   ---------------------------------------------------------------------

  A) SETUP: Before you start the game, run the installation program SETUPAQ
     To make a selection, use the Up or Down keys to move and press <Enter>.
     The SETUPAQ will create a batch file, QUEST.BAT, containing your
     preferences. From then on, simply type QUEST  <Enter> to start the game.
     Please note that ANIMAL QUEST requires a minimum 512K of System memory.

  B) GRAPHICS:   To use ANIMAL QUEST, an EGA or VGA adapter is required.
     Optional Super VGA graphics support for:
     ATI TECHNOLOGIES:  VGA WONDER & WONDER PLUS, VGA INTEGRA, VGA CHARGER
     GENOA:  SUPERVGA 5300 & 5400, MICRO LABS:  VGA SOLUTION, ULTIMATE VGA
     ORCHID TECHNOLOGY: PRO DESIGNER PLUS VGA, PRO DESIGNER IIs
     TSENG LABS:  ET-3000, ET-4000 VGA,  VIDEO SEVEN:  V-RAM VGA; VRAM II;
     WESTERN DIGITAL (PARADISE):  1024, VGA PROFESSIONAL, VGA PLUS 16
     Also any SuperVGA card compatible with any of the above should work as
     well.  To use Super VGA graphics, your card must have at least 512K
     video memory on board and your monitor must be able support 800X600 .
     We plan to add support for new SuperVGA boards as we go along.  For
     example the new VESA and TRIDENT Super VGA chipsets will be supported
     in the next release of ANIMAL QUEST.

  C) OCEAN and JUNGLE animals are only available in the Registered version,
     available through Alive Software.  The Registered version is Enhanced
     with over 1 Megabyte of graphics and sound effects data files.

  D) MOUSE  support is available in the Registered version.  A Microsoft
     compatible mouse is required. The mouse driver must be loaded before
     running the program.  The driver must be a recent one, 1989 or later.

  E) DIGITIZED SOUND support  is available in the Registered version.  You
     can hear the voices of the animals clearly, either through the IBM PC
     speaker with no extra hardware, or through one of the following sound
     card options:  ADLIB, COVOX, MEDIA SOURCE, SOUND BLASTER, SOUND
     COMMANDER and the Tandy SL/TL internal sound chip.  Also any sound
     board compatible with any of the above should work as well.

                             UPDATE HISTORY
    ---------------------------------------------------------------

      Ver 1.0    01-DEC-1991  First publication of ANIMAL QUEST

    ---------------------------------------------------------------

   ALIVE SOFTWARE,  P.O. BOX 4004,  SANTA CLARA,  CA , 95056    U.S.A.
   Information: 408-982-0109   Toll Free Orders: 1-800-GET-ALIV
   FAX:         408-982-0780   Free Access BBS :   408-982-9345



```
{% endraw %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library.  Every shareware program we have is on one disc; over
700 megabytes of software you can have immediate access to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

The WordCruncher text retrieval software allows you to quickly access
the description for any program you want.  All the programs are indexed
by title, filename, PC-SIG disk number, and every word within the
program description.  There couldn't be an easier way to find just the
right program.

The Narc utility, newly instituted with the tenth edition, allows you to
look directly at all the compressed program files on the CD without
having to download the program to your hard disk.  So if you want to
look at the programmer's notes or on-line documentation before using
valuable hard disk space, you can.

The PC-SIG Encyclopedia of Shareware is included on the disk, and a
printed copy of the book is included so you can peruse the available
programs from the comfort of your favorite chair.  All the programs are
logically divided into one-hundred twenty categories making it easier to
find just the right software.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.





T h e E s s e n t i a l H o m e & B u s i n e s s C o l l e c t i o n
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

"Never before has such a valuable collection of popular shareware been
compiled on one CD-ROM that everyone can afford." Dr. File Finder a.k.a.
Michael Callahan

Finally, 368 of the most useful, popular, important shareware programs
have been put together on one CD. No matter what your need, it's on The
Essential Home & Business Collection.  Everything from Administration to
Windows software is here.

The Essential CD incorporates the WordCruncher text retrieval system.
Every program on the disc is indexed

by title, filename, PC-SIG disk number, and every word in the program
description.  A new utility, Narc, is implemented so you can look at the
program files and the author's on-line documentation without having to
first copy the program to your hard disk.  By using WordCruncher and
Narc, you can quickly find the program you want and review it to be
sure, without ever having to run it from your hard disk.

If you've got a CD-ROM player at home and want to get more use of it and
your computer, or if you're trying to avoid purchasing another Nintendo
cartridge, or if you just enjoy looking at new software, you need The
Essential Home & Business Collection.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.



To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

```
{% endraw %}

## FILE2930.TXT

{% raw %}
```
Disk No: 2930
Disk Title: Animal Quest
PC-SIG Version: S1

Program Title: Animal Quest
Author Version: 1.00
Author Registration: $22.00
Special Requirements: 512K RAM, EGA/VGA/SVGA, mouse, and sound card
support.

Are you smart like a Fox or strong like a Bear ? ANIMAL QUEST, the
newest release from ALIVE Software is like a never ending adventure in
the fascinating world of Nature.

ANIMAL QUEST is a cross between a graphic adventure and realistic
simulation of the food chain ecology that lets you step into the
wonderful world of nature and experience wildlife through very different
eyes.  First you select what forest animal you like to become and then,
discover your prey, be challenged by your predators and outsmart your
competitors as you try to cross the forest. This program is socially
responsible showing conflict, but no violence. This is a real winner.



PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1992 PC-SIG, Inc.
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2930

     Volume in drive A has no label
     Directory of A:\

    AQUEST1  ZIP    213187   2-07-92   9:09a
    GO-STRT  DAT       536   2-07-92   8:55a
    PKUNZIP  EXE     23528   3-15-90   1:10a
    CDROM    TXT      3693   1-21-92   6:10a
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    GO       EXE     26022   1-10-92  12:14p
    GO-FORM  DAT      2401   1-20-92  10:24a
    FILE2930 TXT      1002   2-10-92   8:34a
            9 file(s)     274541 bytes
                           44032 bytes free
