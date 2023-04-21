---
layout: page
title: "PC-SIG Diskette Library (Disk #3149)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3149/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3149"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## SLA.DOC

{% raw %}
```
                        Sounds Like A...
                 Copyright (c) 1992  PractiComp
                         Vicki Watson
            6490 Dubois Rd.  Delaware, OH 43015-8931
               614-548-5043  Compuserve 71043,3706



"Sounds Like A..." is a unique and entertaining game for children
ranging in age from 1 1/2 to 7 years of age.  The program uses
colorful graphics and a variety of high-quality sounds ranging from
a clock "ticking" to a dog "barking".  In the first of two games,
the child must find the picture which matches a sound.  Your child
may hear, for example, a cow "mooing".  He/she will then click on
a square containing the picture of a cow.  A game consists of 12
sound/picture pairs.  As each picture is matched with the accompanying
sound, parts of a larger underlying picture are revealed.  The second
game is a matching or memory game with a slight twist.  The child must
match a picture with the appropriate sound.  For example, if the child
clicks on a block revealing a picture of a donkey, he must find the
block which contains the "Hee Haw" sound in order to make a match.


The program does not require any keyboard input - all activities
may be performed entirely with a mouse.  No additional speech cards
are necessary.  The program uses the speaker already located in each
personal computer.

"Sounds Like A..." was developed with the help of my two daughters -
Lisa (age 6) and Kristy (age 3).  I hope your children enjoy our
program as much as we have.  Your registration fee makes it possible
for us to continue producing programs such as SLA.  If you continue
to use this program, I hope you will decide to become a registered
user by sending in the following registration form.


               Shareware Registration Form - SLA 1.0


   The registration fee for "Sounds Like A..." is $10.00.  Please
   include $2.50 shipping for orders outside the U.S. or Canada.

   [] $3.00  "Preschool Pack" trial disk (see description at the
              end of this file.


   Please indicate disk size desired below.  5 1/4" disks will be
   sent unless otherwise indicated.


   Benefits Of Registering:
   All registered users receive 15 extra picture/sound pairs and
   additional background files.  You will also receive the most
   current version at the time of registration, support via phone
   or mail, and notification of and substantial discounts on
   program upgrades.  The initial shareware screen is removed from
   the registered version.



   Please send your check or money order to:

                                    PractiComp
                                    6490 Dubois Rd.
                                    Delaware, OH  43015-8931

   Name:    _________________________________________

   Address: _________________________________________

            _________________________________________

            _________________________________________

   Phone:   ________________________


   Disk Size:    [ ]  5 1/4"    [ ]  3 1/2"


   I received the shareware disk from:  ________________________

   Comments or suggestions:

   _____________________________________________________________

   _____________________________________________________________

   _____________________________________________________________


DISTRIBUTION

BBS Name: SLA10A.ZIP    SLA10B.ZIP      (disks 1 & 2)

"Sounds Like A..." is a shareware product and may be freely copied
and shared with other computer users.  Continued use beyond a
reasonable evaluation period requires registration.  SLA may be
copied and distributed by shareware distributors or posted to
Bulletin Board systems.  Distributors, please include all
files listed below when distributing this product.


DISTRIBUTION FILES
SLA may be distributed on a single 720K disk, or two 360K disks.

  *** Disk1
  HELPME.BAT      * help batch file
  READ.ME         * installation instructions
  SLA.DOC         * program documentation
  INSTALL.BAT     * batch file for installation
  INSTALL.OVL     * secondary batch installation file
  BROWSE.EXE      * file viewer
  SLA10.001       * archived program, graphics, and sound libraries

  *** Disk2
  SLA10.002       * archived program, graphics, and sound libraries


PROGRAM REQUIREMENTS
"Sounds Like A..." requires 640K RAM, a hard drive, an EGA or
VGA color monitor, and a mouse.  SLA produces speech via digitized
voice files.  Because the speech is produced through the PC's
internal speaker, no additional sound cards are necessary.


INSTALLATION
The SLA program files are compressed into the two files SLA10.001
and SLA10.002.  These files will be found on 2 disks in the 5 1/4"
version, or may be on a single disk if using 3 1/2" disks.  You
MUST run the INSTALL.BAT file in order to install SLA correctly!
At the DOS prompt, type the following commands, pressing ENTER after
each command.  The information in ()'s should not be typed.

                  MD \SLA              (any directory name)
                  CD \SLA
                  A:                   (change to floppy disk)
(Insert disk1)    INSTALL A C          (do not add : )

For the last command, you may replace the A, C, with any appropriate
drives.  The first drive should be the source drive, the second drive
should be the destination, i.e. the above command would install from
a floppy in drive A to the hard drive C.

The INSTALL batch file will prompt you to insert DISK 2.  If you are
installing from a single disk, leave the same disk in and press ENTER.

Once installed, you should have the following files:
    SLA.EXE          * executable program
    SLA.DOC          * documentation file
    SLA.GXL          * graphics library
    SOUNDS1.VOI      * sound library file
    SOUNDS1.DVX      * sound index file


RUNNING "SOUNDS LIKE A..."
Change to the "Sounds Like A..." directory and type SLA.

        CD \SLA
        SLA



"SOUNDS LIKE A..." INSTRUCTIONS
The sounds are produced using the PC's internal speaker, therefore
it is not possible to adjust the volume.  The volume level of the
sounds will depend upon the quality of your PC's internal speaker.

Click on STOP, or press ESC, to exit a screen or the program.

Graphics/Sounds Used in "Sounds Like A...":

  Shareware Version:        Available By Registering:
  ------------------        -------------------------
  violin   rooster          bee           saw
  hammer   donkey           elephant      whistle
  dog      baby             bell          pig
  horse    cow              police car    bird
  frog     cat              owl           scissors
  clock    phone            circus        sheep
  horn     train            motorcycle    guitar
  duck                      drill


GAME 1 - SOUND LOTTO
This is the simplest of the two games included in SLA and will appeal
most to the younger children.  You will see 12 pictures on the screen.
When you hear a sound, click on the picture which matches the sound.
For example, if you hear a cow "moo", you would click on the picture
of a cow.  As you click on each correct picture, a portion of the
larger, background image will be revealed.

If you are not sure which picture matches the sound, you have two
options.  You may click on the lips to repeat the last sound.  You
may also click on the Question Mark in the rabbit's hat for help.
This will display an arrow pointing to the correct block.  You must
then click on the correct block in order to go on to the next sound.

When a game is completed, a new game will be set up.  You may
continue playing Game 1 repeatedly or you may:

  Click on STOP to exit to DOS.
  Click on the yellow/green squares to go to game 2.


GAME 2 - SOUND MATCHING
The second game is an interesting variation of the "memory" or
"concentration" game.  In this game you must match a picture to its
corresponding sound.  Half of the 12 blocks in each game will contain
pictures, half will contain sounds.  For example your first click may
reveal a picture of a rooster.  Your next click should try to locate
the block containing the sound of the rooster crowing.  Clicking on a
sound block will play the sound, but will not reveal a picture, unless
a match is made.  If a match is made the two blocks will display the
same picture.


A count of the number of blocks clicked will be displayed on the left
side of the screen, the goal being to find all matches with the fewest
number of clicks.  There is a help option available in this game also.
Help is available only when you have clicked on the first block (of a
possible pair) and are ready to click on the second.  At this point you
may click on the Question Mark, and an arrow will point to the matching
block.  Two points will be added for clicking the Question Mark.  You
must then click on the block to which the arrow is pointing.  Therefore
the use of the help option will result in a total of 3 points added to
the score.

Since no picture is displayed initially, if a sound block is clicked,
the triangular halves of a square are displayed at the left of the screen
as a reminder of which block of a pair you are working on.  After clicking
on the first block the red triangle will be displayed.


When a game is completed, a new game will be set up.  You may
continue playing Game 2 repeatedly or you may:

  Click on STOP to exit to DOS.
  Click on the yellow/green squares to go back to game 1.


=========================================================================
                    P R E S C H O O L   P A C K

   "Preschool Pack" is another shareware program for preschoolers
   available from PractiComp.  A description of this program follows.
   You may receive a trial disk containing "Preschool Pack" by
   including an additional $3.00 with your registration of SLA.

=========================================================================
The colorful graphics, songs, and speech of Preschool Pack will
be sure to capture the attention of your preschooler.  From the
main menu screen, which contains a cat which meows and winks when
clicked, to the bee which frowns when a mistake is made in the
matching game, you and your preschooler will appreciate the
careful design and attention to detail of Preschool Pack.  The
program does not require any keyboard input - all activities
may be performed entirely with a mouse.  Through five different
and entertaining activities your preschooler will learn about
counting, number recognition, the alphabet, colors, matching,
and classifying.

Activities include: "Animal Homes", where animals must be placed
in their appropriate homes - either farm, forest, or circus;
"Balloons", where the user must click on a color block matching
the color of a rising balloon before it pops; "Matching", a memory
game with an animated bee rewarding the user who locates all
matches; "Counting", where the user counts along with the computer
as a variety of colorful images, from dinosaurs to dolls, are
displayed; and "ABC's" where the user must find all letters which
match a displayed letter.  "ABC's" uses speech to pronounce each
letter as it is selected.  All activities are reinforced with
cheerful music and animation sequences.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3149

     Volume in drive A has no label
     Directory of A:\

    HELPME   BAT        32   4-20-92   9:13p
    READ     ME       1234   8-17-92   9:51a
    SLA      DOC     11453   8-17-92  10:03a
    INSTALL  BAT       486   8-16-92  11:36p
    INSTALL  OVL       713   8-17-92   9:54a
    BROWSE   EXE      8064   3-06-92   1:30p
    SLA10    001    178566   8-16-92  11:00p
    FILE_ID  DIZ       358   8-17-92  12:30a
    GO       BAT        12   1-12-93  11:54a
            9 file(s)     200918 bytes
                          115712 bytes free
