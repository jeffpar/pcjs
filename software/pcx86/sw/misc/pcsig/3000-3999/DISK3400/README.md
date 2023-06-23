---
layout: page
title: "PC-SIG Diskette Library (Disk #3400)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3400/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3400"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## AMATH.DOC

{% raw %}
```


Adventure Math

Programming & Artwork:  Avery Pack
Music & Sound Effects:  Dan Froelich

Introduction:

        ADVENTURE MATH is an educational game that teaches kids in grades 1-5
all about addition and subtraction,  while keeping them entertained with fun
graphics,  sound,  and a bonus arcade sequence!

        ADVENTURE MATH DELUXE (available separately from Epic MegaGames) adds
many new features,  including more graphics, sound, a timer,  and also
multiplication and division problems for double the fun and learning!

        Even though it is a powerful learning tool, Adventure Math keeps kids
entertained with its fun and educational bonus arcade game where the children
can apply the concepts they previously learned in a fun shoot-em-up sequence.
Adventure Math requires VGA and supports a mouse, Sound Blaster, and
the Adlib Music Card.  It also supports the PC Speaker, but you are missing
quite a show without a sound card!

Contents:

I.  Setup Screen
        A.  Mouse support
        B.  PC Speaker Sound
        C.  Adlib Support
        D.  Sound Blaster Support
        E.  Command Line Options
        F.  Memory Requirements

II.  Main Menu
        A.  Introduction
        B.  Explanation of Choices

III.  Enter Name Screen

IV.  Enter Level Screen

V.  Math problem Screen
        Information, and Number Entry

VI.  "Problems Completed" Screen

VII.  Bonus Math Game
        A.  Instructions on how to play
        B.  Additional Information

IIX.  "Game Completed" Screen

IX.  Additional Information/Revisions




I.  Setup Screen

        A.  Mouse Support:  Adventure Math supports a Microsoft compatible
        mouse, if the driver is installed correctly.  Press [1] at the Setup
        Screen to disable the mouse if it is not desired.

        B.  PC Speaker Support:  If you do not own a sound card Adventure Math
        supports the PC Speaker for sound effects.  The PC Speaker is turned
        on by default and can be disabled by pressing [2] at the Setup Screen.

        C.  Adlib Support:  If you have an Adlib or compatible card (or Sound
        Blaster),  you'll be able to hear the beautiful sound track.  If you
        want to turn off the music,  press [3] at the setup screen.  If
        Adventure Math doesn't recognize your Adlib card,  please refer to
        the documentation that came with the sound card for troubleshooting
        information.

        D.  Sound Blaster Support:  For high quality digitized sounds and voice
        the Sound Blaster Music Card is supported and is automatically detected.
        However, if the Sound Blaster option is marked NO by default then a
        Sound Blaster or compatible card has not been found.  If you own a
        Sound Blaster and the problem persists then refer to the documentation
        the came with the Sound Blaster for troubleshooting information.
        If you own a Sound Blaster or compatible card and you would like to
        disable digitized sound then press [4] at the Setup Screen.

        (NOTE TO SOUND BLASTER OWNERS:  There is a small chance that you may
        experience occasional "lockups" or "freezes" during the execution of
        the program when sound card support is on.  To fix this problem try to
        free up memory by removing TSR's and other memory resident programs.
        If the problem persists then you may have to use the program without
        digital sound.)

        E.  Command Line Options:  At the DOS prompt you can start up Adventure
        Math so it will skip the initialization of the Sound Blaster and/or
        Adlib.  To start Adventure Math with no digital sound type:

                        AMATH /NOSB
                             or
                        AMATH /NOADLIB

        Either of these options will disable the initialization of the Sound
        Blaster or Adlib cards if there is a problem with them, and you wish to
        use the PC Speaker.

        F.  Memory Requirements:  Adventure Math requires that you must have
        at least 512k free in order to run Adventure Math with Sound Blaster.
        To free up more memory,  remove unneccessary TSR's.  If you are unable
        to free up enough memory run Adventure Math with the /NOSB or /NOADLIB
        option so you are still able to play the game but without digital
        sound.

I.  Main Menu

        A.  Introduction:  The main menu screen directs you through the options
        of the program.  To select an option either click the mouse on the box
        next to the option you desire or press the "hotkey" that is specified
        by a yellow letter on the option of your choice.

        B.  Explanation of Choices:
                Press "A" for Addition
                Press "S" for Subtraction
                Press "M" for Multiplication (Deluxe version only)
                Press "D" for Division (Deluxe version only)
                Press "I" for the introduction sequence
                Press "H" for help
                Press "C" to view Epic's catalog of software!
                Press "O" for ordering information

III.  Enter Name Screen:  At this screen you enter your name.  The name can be
      up to 15 characters long including spaces, numbers, and other marks.
      Press [ENTER] when done.

IV.   Enter Level Screen:  At this screen you enter the level of math you wish
      to do.  The level is a number from 1 to 10, one being the easiest level,
      and ten, the hardest.  Press [ENTER] when done.

V.  Math Problem Screen

        Information and Number Entry:

        This is the main math problem screen where a problem is displayed
        and the user is prompted for an answer.  To enter an answer enter
        in the number as if you were typing it.

        If the problem reads 2 x ? = 36 then you would enter
        a 1 and then an 8 and then press [ENTER].

        If a mistake is made at any time while entering numbers, pressing
        the backspace key erases the last number entered.

        The [ESC] key can be pressed at any time to abort the game and return
        to the Main Menu.

VI.  "Problems Completed" Screen:  If 11 problems are correctly answered before
     11 problems are answered incorrectly then you will be show the "Problems
     Completed" Screen.  This screen shows statistical information about the
     problems that have been completed.  It also shows the problems that were
     missed, so that they can be looked at once more and errors can be solved.
     You are asked if you would like to print a report card.  A report card
     shows the child's name, percentage score, level of math, type of math,
     and other information.  If you would like to print up a report card press
     [Y].  If you do not want to print a report card press [N] and will con-
     tinue to the bonus game.

     (NOTE:  BEFORE PRINTING A REPORT CARD MAKE SURE THAT YOUR PRINTER IS ON-
     LINE AND READY.  IF THE POWER IS OFF, OR THE PRINTER IS NOT READY MAKE
     SURE IT IS READY BEFORE PRINTING.)

VII.  Bonus Math Game

        The Bonus Math game is a fun way for children to apply the skills
        they practiced and learned in the math problem portion of the game.
        The character is moved by using the RIGHT/LEFT arrow keys and shoots the
        answer by pressing the [SPACE BAR].  A problem is displayed at the
        bottom of the screen and three answer are shown at the top of the screen
        in three monitors.  Move the character under the correct answer and
        press the [SPACE BAR] to shoot the answer.  Also there is a bonus item
        displayed in the far right monitor.  Shoot the bonus item for either
        extra health or to lose health.  The carrots and Happy faces increase
        your health and the X's deplete your health.  While you are searching
        for the correct answer you must avoid the enemies bouncing around.  If
        one hits the top of your character then you lose health.  When all
        is depleted or all twenty-five problems are completed you will be taken
        to the "Game Completed" Screen.  There are other surprises waiting at
        every level.  When the math level gets harder so does the game, so have
        fun, but be careful!  To pause the Bonus Game press [P]; to resume the
        paused game press any key.  (NOTE TO SOUND BLASTER OWNERS:  If you are
        experiencing problems with digitized sounds in the bonus game try
        pausing then resuming the game.)

IIX.  "Game Completed" Screen

        The "Game Completed" Screen give statistical information on how you did
        in the game.  It will then ask you if you would like to play again.
        Press [Y] to play again, or [NO] to return to the Main Menu.  If you
        choose to play again then you will be prompted for a new name and a new
        level in case you would like to switch players or go to a higher or
        lower level.

MEMBER, ASP

      This program is produced by a member of the Association of Shareware
Professionals (ASP).  ASP wants to make sure that the shareware principal
works for you.  If you are unable to resolve a shareware-related problem
with an ASP member by contacting the member directly,  ASP may be able to
help.  The ASP Ombudsman can help you resolve a dispute with an ASP member,
but does not provide technical support for members' products.  Please write
to the ASP Ombudsman at 545 Grover Road,  Muskogeon, MI 49442-9427 or send
a Compuserve message via CompuServe Mail to ASP Ombudsman 70007,3536.

    CALL SOFTWARE CREATIONS BBS

Call Software Creations for all the latest Epic MegaGames releases and
updates.  33 Lines!  Sysop:  Dan Linton.
                508-365-2359 (2400 Baud)
                508-365-9825 (9600 Baud)
                508-365-9668 (14.4K Dual HST)

IX.  Additional Information

        Continue your adventures through the world of numbers
        with ADVENTURE MATH DELUXE:  the spectacular sequel!

                  For just $25 + $2 p&h you get:

                * More MUSIC, GRAPHICS, and SOUND!
                * NEW!  Also features MULTIPLICATION
                  and DIVISION!  Also includes a TIMER
                  to help children increase their speed.
                * A disk of excellent BONUS GAMES!
                * Up-to-date NEWS about all new
                  educational products from Epic!

        To order send check or money order for $25 + $2 p&h to:

                Epic MegaGames
                10406 Holbrook Drive
                Potomac, MD  20854 USA

        Or order toll-free with your Visa or Mastercard:

                Orders:  1-800-972-7434
             Inquiries:  (301) 299-3841

        Please call for information about site licenses and
        discounts for schools and PTA's.


        Author's Note:

        This version of Adventure Math is shareware and you may distribute it
        freely.  Give a copy to a friend, a neighbor, the cat, the dog, or
        anyone you wish.  Epic MegaGames is trying to bring you quality share-
        ware and you are an essential link.  Shareware is only possible because
        of you, the loyal fans.

        Thank you,
        Avery Pack
        Author of Adventure Math

```
{% endraw %}

## ORDER.DOC

{% raw %}
```
             -- Thanks for ordering from Epic MegaGames --

  Run PRINTME to print this then mail it in,  or call our toll-free ordering
            line at 1-800-972-7434 (this number is for orders only!)

========================== Please Rush Me: ==============================

[ ]  Special discount!  Order any TWO products below and
     SAVE $5.00 -- or buy THREE and save $10............. SAVE ___________

[ ]  Kiloblaster:  Death of a Starship,  No Way Out, and The
     Final Battle!  90 levels of arcade action and graphics.
     Also includes: Cheat code, hint sheet & bonus disk ($30). __________

[ ]  Jill of the Jungle, Jill goes Underground, and Jill Saves
     the Prince!  The entire action-adventure trilogy ($30)... __________

[ ]  Drum Blaster (requires Sound Blaster card, VGA, 640K)
     plus all 4 add-on sound effect & music disks ($30)....... __________

[ ]  Adventure Math Deluxe (req VGA, 640K, Hard Disk), excellent
     educational software for your kids -- learn to add,
     subtract, multiply, divide.  Many new features! ($25).... __________
     
[ ]  Castle of the Winds -- Fantasy role-playing for Microsoft
     Windows 3.0 or later (Two immense game worlds) ($25)..... __________

[ ]  ZZT: Includes Town, Caves, Dungeons, City ($24).......... __________
[ ]  Super ZZT: Proving Grounds, Forest, Zoo ($24)............ __________
     (Note: ZZT is a terrifically fun game with so-so graphics)
[ ]  Both ZZT and Super ZZT ($35)............................. __________

               Shipping & Handling (Foreign add $2 extra)..... __$2.00___

                       Maryland residents MUST add 5% tax..... __________

                                                Total enclosed __________

IMPORTANT! Circle disk size:  5.25   AND   High Density
                               3.5         Low Density

Is this your first order from Epic MegaGames?   YES   NO

          Name: _______________________________________________

       Address: _______________________________________________

  City, ST Zip: _______________________________________________

       Country: ____________________  Phone: __________________

Payment by:  [ ] Check   [ ] Money order  [ ] Mastercard  [ ] Visa

Card # _______________________ Exp Date: _______ Signature: ________________

As an Epic MegaGames customer, you get a 30-day complete satisfaction guarantee,
fast shipping,  and up-to-date news of all our new releases.  Thank you!

<Trivia Question>  Where did you obtain this Epic product?

_________________________                                              /-----\
                                                                       |STAMP|
_________________________                                              \-----/

_________________________






                            Epic MegaGames
                            10406 Holbrook Drive
                            Potomac, MD 20854

```
{% endraw %}

## SYSOP.DOC

{% raw %}
```
   
To All Sysops,

    This is Adventure Math,  the first educational program in Epic MegaGames'
line of fun software.  We're dedicated to bringing you excellent, fully-
functioning shareware,  and the entire Epic crew appreciates your role as a
sysop!

    Hey,  since we Epic folks have so many fine shareware products available,
will you consider creating a special "Epic MegaGames" file on your BBS?  It's
a massive thrill for us to call a new BBS and see an Epic file area already
online,  and your callers will surely appreciate the service -- now they'll
know what file area to head to first for great shareware!

You can identify Epic's games by the "$" in the file names:

    $AMATH.ZIP  (Adventure Math)          $KILO.ZIP   (Kiloblaster)
    $JILL.ZIP   (Jill of the Jungle)      $CASTLE.ZIP (Castle of the Winds)
    $DBLAST.ZIP (Drum Blaster)            $SUPERZ.ZIP (Super ZZT)
    $ZZT.ZIP    (ZZT)

Coming soon:  More Epic products (Details forthcoming)

Note:  Descriptions for all our programs can be found in FILE_ID.DIZ within
each of our ZIP's.

   To grab all of Epic's latest,  call Software Creations:
           508-365-2359 (2400 Baud)
           508-365-9825 (9600 Baud)
           508-365-9668 (14.4K Dual HST)

   Thank you for being part of Epic's megateam!

                                        Tim Sweeney
                                        Epic MegaGames

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

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3400

     Volume in drive A has no label
     Directory of A:\

    DISK2OF2            29   1-29-93  11:38a
    AMATH    ZIP    189928   1-29-93   9:09a
    GO-FORM  DAT      3003  12-16-92   4:36p
    GO-STRT  DAT       599   1-29-93  12:03p
    CDROM    TXT      3693   1-21-92   6:10a
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO       EXE     26022   1-10-92  12:14p
    SIGORDER TXT      3332   6-25-92   2:28p
           10 file(s)     254306 bytes
                           63488 bytes free
