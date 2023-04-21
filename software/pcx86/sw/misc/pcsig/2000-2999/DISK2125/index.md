---
layout: page
title: "PC-SIG Diskette Library (Disk #2125)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2125/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2125"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLAGS"

    Now you can have a display of colorful flags of every independent
    nation in the world (as of 1989), and information about each nation.
    The flags of cities, states, and dependencies are also included.
    
    Enjoy full-color representations of over 250 different flags.  And take
    a "Flag Quiz" to test your knowledge of national flags.  The program can
    also run on its own, displaying each flag briefly.  There are special
    sections which graphically illustrate the history of the British and
    U.S. flags.  And, just for fun, you can change the colors of any of the
    flags.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2125.TXT

{% raw %}
```
Disk No: 2125                                                           
Disk Title: Flags                                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: Flags                                                    
Author Version: 9/89                                                    
Author Registration: $15.00                                             
Special Requirements: DOS 3.00 or higher,CGA.                           
                                                                        
FLAGS displays the flags of every independent nation in the world, plus 
many flags of cities, states, and dependencies.                         
                                                                        
Enjoy full-color representations of over 250 different flags, as well as
information about every independent nation of the world.  There is a    
Flag Quiz to test your knowledge of national flags.  The program can be 
set to run on its own, displaying each flag briefly.  There are special 
sections which show graphically the history of the British and American 
flags.  And, just for fun, you can change the colors of any of the      
flags.                                                                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FLAGS.DOC

{% raw %}
```








                              __
                           __|__  |   __    __    ___
                             |    |   __|  |  |  |__
                             |    |  |__|  |__|  ___|
                           ___________________|  ____



                         OF EVERY NATION  UNDER THE SUN





                                  Instructions







                           Written by Thomas J. Mosbo







                              Copyright  (C)  1989

                                    WYNDWARE
                        101 E. Milwaukee St.,  Suite 423
                          Janesville, WI 53545  U.S.A.
                                 (608) 755-1628


                                                                            2


   I. INTRODUCTION

       The flags of the nations of the world are powerful symbols.  They
       represent in a concrete way the history, beliefs, and hopes of the
       people of each country.  A nation's flag expresses the unity of its
       citizens, as well as the unique identity of that nation within the
       global community.

       Because of this, flags become useful tools for understanding and
       appreciating the various cultures which make up our world.  As this
       precious planet of ours continues to shrink in size, due to ever-
       advancing communications, such an understanding is vital for the
       future of all of humankind if we are to survive as a species of worth.

       It is therefore the hope of the programmer that this program will
       spark a renewed interest in, and love for, the peoples of every nation
       of our world, so that the richness and diversity of every culture
       might enlighten us and enliven us, and so promote peace throughout the
       earth.

       The program requires a computer with at least 256K, operating with PC
       or MS DOS 3.0 or greater, and a color graphics monitor.

       FLAGS is user-supported software.  You are encouraged to use, copy,
       and distribute it as freely as you wish.  But if you do find it
       useful, we ask that you please send a registration fee of $15.00 to
       WYNDWARE, 101 E. Milwaukee St., Suite 423, Janesville, WI 53545 U.S.A.
       When you send in your fee, you will receive the latest version of
       FLAGS and will become eligible to receive updates to the program as
       improvements are made to it.

       While we have done our best to create a good product, this program is
       provided "as is" without warranty of any kind, either expressed or
       implied.  The risk as to the quality and performance of the program
       for a particular purpose is with you.



   II. DISKETTE CONTENTS

       The following files are included on your FLAGS Diskette:

         README.BAT - Displays information on how to use the disk.
         FLAGS.DOC  - This booklet.
         FLAGS.EXE  - FLAGS program file.
         FNTNS.DTA  - Information on nations.
         FINFO.DTA  - Program information file.
         FNAMS.DTA  - Titles for flags.


                                                                            3


   III. BACKING UP

       Computer disks are easily damaged.  Before using your FLAGS diskettes
       we recommend that you make backup copies.  To do this:  Boot up your
       computer with a DOS diskette in drive A.  At the DOS prompt, type
       DISKCOPY A: B:  and press the <Return> key.  Follow the prompts on the
       screen to copy the original FLAGS diskette to a new blank disk.  When
       the copying process is complete, store the original diskette away in a
       safe place and use the copy you have made to run the program.



   IV. INSTALLING ON A HARD DISK

       If you wish to install FLAGS on a hard disk:  Create a new directory
       for FLAGS on your hard disk.  If you wish to create a directory named
       FLAGS on drive C, then at the DOS prompt type  MD C:\FLAGS  (or
       substitute the relevant drive or directory name) and press <Return>.
       Then place the FLAGS diskette in drive A, type  COPY A:*.* C:\FLAGS
       and press <Return>.



   V. STARTING FLAGS

       To run FLAGS on a Floppy Disk System:  Place the FLAGS diskette in
       drive A.  At the A> type  FLAGS  and press <Return>.  On a Hard Disk
       System:  Log on to the proper drive (by typing  C:  and pressing
       <Return> if FLAGS is on drive C), then change to the FLAGS directory
       (by typing  CD\FLAGS  and pressing <Return>), then at the DOS prompt
       type  FLAGS  and press <Return>.

       Once the Title screen appears, press any key.  Then answer the
       question `Is the word "Flags" white?' (by typing  Y  for yes or  N
       for no).  At this point the Master Menu appears.



   VI. VIEWING THE FLAGS

       The FLAGS program displays representations of the National Flags of
       all 170 independent nations of the world, plus some flags of
       dependencies and cities.

       From the Master Menu, a number of Submenus are accessible, each of
       which presents flags from a different area of the world.  To access
       any Submenu from the Master Menu, type the number which appears before
       the desired area of the world.  Once in a Submenu, you may press the
       <PgDn> and <PgUp> keys to move from one Submenu to the next, or press
       the <Home> or <End> key to move to the first or last Submenu.  To
       return to the Master Menu from any Submenu, press the <Esc> key.


                                                                            4


       To view any flag listed on a Submenu, type the letter or number which
       appears before the desired flag.  (It doesn't matter whether a capital
       or small letter is typed.)  When finished viewing the flag, press any
       key to return to the Submenu.

       The flags are displayed in two different modes:  Text (where the name
       of the nation appears under the flag) and Graphics (where it appears
       above the flag).  Most flags are displayed in one mode or the other,
       but some flags are present in two variations:  one (in Text mode)
       showing truer colors, and one (in Graphics mode) presenting more
       accurate detail.  Those flags which are marked on the menus with an
       asterisk (*) are present in both variations.  The Text mode version is
       viewed by typing the letter or number of that flag.  To view the
       Graphics mode version, hold down the <Alt> key and press the letter or
       number of the flag).


       Notes on the Flags:

       The flags represented in this program are the National Flags of the
       nations of the world, the flags flown by the citizens of the nations.
       These occasionally differ from the State Flags, those flown by the
       governments of the nations, which sometimes include the State Arms
       added to the National Flags.

       Most flags have official proportions specified for the ratio of the
       length of the flag to the width.  Rather than follow the many varied
       proportions, this program generally standardizes all the flags to the
       same basic proportions.  Only those flags with extraordinary
       dimensions (such as Qatar or Switzerland), or those flags whose
       proportions are the only feature distinguishing them from another flag
       (such as Ecuador and Columbia) are shown using the varying
       proportions.

       Due to the limitations of the computer monitor, some slight
       alterations of the colors have been necessary for some flags.  Thus,
       yellow is occasionally substituted for white, purple for red, or aqua
       for blue or green.

       Nations and their flags are constantly changing.  Many sources were
       used to attempt to make sure that the information in this program is
       as accurate and up to date as possible, but no absolute guarantee can
       be given as to the accuracy of the information.



   VII. VIEWING INFORMATION

       Information and/or instructions may be viewed by pressing the <F1> key
       whenever the <F1> option is displayed at the bottom of the screen.  If
       <F1> is pressed at the Master Menu, when Changing Colors, or when
       doing the Flag Quiz, then helpful instructions will be displayed.  At
       each of the Submenus, general information about the flags of that area
       of the world will be shown.


                                                                            5


       If <F1> is pressed while viewing a National Flag, information about
       that nation will be displayed, giving the nation's official name,
       capital city, languages and religions, as well as other facts.  The
       nation's ranks for population, area, and population density are also
       given.  In order to put these ranks in perspective, at the bottom of
       the screen more options are displayed.  By typing the numbers 1, 2, or
       3, lists of the most and least populous, largest and smallest, or most
       and least densely populated nations are displayed.

       When finished looking over the information, press the <Esc> key to
       return to the current flag or menu.



   VIII. CHANGING FLAG COLORS

       By pressing the <F2> key when the <F2> option is displayed at the
       bottom of the screen, the colors of the flags may be changed (just for
       fun).  At the Changing Colors screen, use the Cursor Arrow keys to
       move from color to color, or the <Tab> key to move from column to
       column.  Type the letter of the desired new color after the box of the
       color to change.  (For example:  to change red to purple, type the
       letter  F  after `Red'.)

       Once you have changed all the colors you wish, press <F2> to return to
       the program using the new colors, or press <Esc> to resume the true
       colors of the flags.  All color changes are retained throughout the
       program until the <F2> option is chosen again, or until the Flag Quiz
       or U.K. or U.S. Histories are chosen.

       All colors for the flags in Text mode may be changed, with one
       limitation.  In certain flags, the colors from the middle column will
       be changed into the corresponding colors in the left-hand column.

       In Graphics mode, the background may be any color.  Then a choice must
       be made among the various Color sets shown in the right window by
       typing in the appropriate number after the proper bar.  If the word
       `Flags' was yellow at the Title Screen then Color sets 4 and 5 will be
       the same as sets 1 and 3.



   IX. FLAG QUIZ

       To do the Flag Quiz, type the letter  A  at the Master Menu.  Then
       type the number of the desired level of difficulty.  The number
       represents the number of choices displayed for each flag displayed in
       the Quiz.

       After the level of difficulty is chosen, type the number of the
       desired category (area of the world).  More points are given the
       higher the level of difficulty and the more flags there are altogether
       in the selected category.


                                                                            6


       The program will select a series of 10 flags at random from the
       selected category.  Only National Flags of fully independent nations
       will be selected.  For each flag, a number of choices equal to the
       level of difficulty will be displayed.  Take a moment to look them
       over, then press any key.  The program will then begin to form one of
       the flags on the screen.  As soon as the flag is recognized, press any
       key.  The sooner this key is pressed, the more points will be given.

       After this key is pressed, the possible choices will be re-displayed. 
       Type the number of the correct flag.  The program will show the
       correct answer, and give or deduct points accordingly.  (If your guess
       is wrong then half the amount of points that would have been added to
       your score for a correct answer will be deducted.)  Then press any key
       again for the next list of choices.

       When all 10 flags have been guessed, the program analyzes your results
       and displays an appropriate message.  If the score is one of the 10
       highest on record for the selected category, type your name in the
       field which appears and press <Return>.  The program then displays the
       highest 10 scores for the selected category, and any key may be
       pressed to return to the Master Menu.

       At any time during the Quiz, you may press the <Esc> key to abort the
       Quiz and return to the Master Menu.



   X. CONTINUOUS DISPLAY

       For a continuous display of flags, type  B  at the Master Menu, then
       type the number of the desired Submenu at which to begin the display. 
       The program will then show each flag for a short period, then
       automatically display the next flag on the menu.  If you wish you may
       go to the next flag immediately by pressing any key.  When the
       selected Submenu is finished, the first flag from the next Submenu
       will be shown, and after Submenu 8 is finished, the display starts
       over with Submenu 1.

       To end the continuous display and return to the Master Menu, press the
       <Esc> key at any time.



   XI. SELECTED FLAGS

       If you type the letter  C  at the Master Menu, a menu will appear
       featuring some of the more interesting flags selected from all the
       other Submenus (including the Secret Menu).


                                                                            7


   XII. HISTORIES

       For an illustrated history of the development of the United Kingdom
       flag or the United States flag, type  B  at Submenu 1 or Submenu 7.
       Follow the prompts at the bottom of the screen to view the history, or
       press the <Esc> key at any stage to abort the history.



   XIII. SECRET MENU

       There is a Secret Menu, hidden but accessible, which features flags
       designed by the programmer.



   XIV. EXITING FLAGS

       To exit the FLAGS program and return to DOS, press the <F10> key at
       the Master Menu.



   XV. WYNDWARE PRODUCTS

       WYNDSHELL is a non-memory-resident Hard Disk Menu program which allows
       you to run the programs on your computer from easily definable menus.
       Built into WYNDSHELL is another program: WYND-DOS, a utility program
       which performs such functions as formatting disks, copying and
       deleting files, and creating subdirectories - all from a friendly
       environment - without having to type commands at a DOS prompt.  Both
       WYNDSHELL and WYND-DOS may be used with a mouse.  Stand-alone versions
       of WYNDSHELL and WYND-DOS are also available at a reduced price.

       WYNDFIELDS is a general purpose Database program, useful for
       keeping track of any type of structured information, which also
       supports the use of a mouse.  Data may be added, changed, removed,
       found, displayed, analyzed, and printed easily using the friendly
       pull-down Menu System.  Creating and printing Mailing Labels or
       detailed Reports can be accomplished painlessly from within the
       program.  Multiple Indices (ways of ordering your data) are maintained
       automatically for you, and several methods are available for
       extracting exactly the information you need from your files.  For more
       advanced users, WYNDFIELDS also offers extensive string and math
       functions for use in searches and calculated Fields, and its date and
       time tracking abilities are unsurpassed.

       To become a registered owner of FLAGS, or to order other WYNDWARE
       products, use the convenient order form in the back of this booklet or
       call (608) 755-1628 for credit card orders.


   ORDER / REGISTRATION FORM


   WYNDWARE
   101 E. Milwaukee St., Suite 423
   Janesville, WI 53545
   (608) 755-1628


      Name __________________________________________________________________

   Address __________________________________________________________________

           __________________________________________________________________

      City ______________________________  State _______  Zip _______________

   Country ______________________________  Phone ____________________________

    _                                     _                          _
   |_|  Check or Money Order             |_|  Mastercard            |_|  VISA

   Card Number ______________________________________________________________

   Signature ____________________________  Expiration Date __________________



   _____ copies of FLAGS                 at $15.00 each. . . . . ____________

   _____ copies of WYNDSHELL / WYND-DOS  at $45.00 each. . . . $ ____________

   _____ copies of WYNDSHELL alone       at $30.00 each. . . . . ____________

   _____ copies of WYND-DOS alone        at $30.00 each. . . . . ____________

   _____ copies of WYNDFIELDS Database   at $70.00 each. . . . . ____________

                   Wisconsin residents add 5% Sales Tax. . . . . ____________

                   TOTAL ENCLOSED. . . . . . . . . . . . . . . $ ____________



   Registered owners will receive the most recent version of the program,
   with a detailed illustrated Manual (complete with Tutorial), and will be
   eligible to receive updates to the program as improvements are made to it.

   Please contact us for site-licensing and quantity discounts.


   Where did you get your copy of FLAGS? ____________________________________

   Comments _________________________________________________________________

   __________________________________________________________________________

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2125

     Volume in drive A has no label
     Directory of A:\

    README   BAT       158   9-01-89
    FLAGS    DOC     18358   9-01-89
    FLAGS    EXE    246631   9-01-89
    FNTNS    DTA     31450   9-01-89
    FINFO    DTA     18360   9-01-89
    FNAMS    DTA     15550   9-01-89
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540   4-16-90  11:15p
    FILE2125 TXT      1851   4-17-90  12:45p
            9 file(s)     332936 bytes
                           25600 bytes free
